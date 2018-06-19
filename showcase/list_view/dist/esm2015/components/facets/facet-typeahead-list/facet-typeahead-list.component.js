/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Pipe } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { FacetBaseComponent } from '../base/facet-base/facet-base.component';
export class FacetTypeaheadListComponent extends FacetBaseComponent {
    constructor() {
        super(...arguments);
        this.expanded = true;
        this.typeaheadConfig = {};
        this.suggestions = [];
        this.simplified = true;
        this._nativeElement = /** @type {?} */ (this._elementRef.nativeElement);
        this._defaultTypeaheadConfig = {
            placeholder: '',
            maxResults: 50,
            minCharacters: 1
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // wrap the observable and filter out any already selected items or any disabled items
        if (this.facets instanceof Observable) {
            // handle an observable of data
            this.typeaheadOptions = from(this.facets).pipe(map((facets) => {
                // remove disabled facets, selected facets and facets that dont match search term
                return facets.filter(facet => !facet.disabled)
                    .filter(facet => !this.selected.find(selectedFacet => selectedFacet === facet))
                    .filter(facet => facet.title.toUpperCase().includes(this.searchQuery.toUpperCase()));
            }));
        }
        else {
            // handle an array of data
            this.typeaheadOptions = of(this.facets).pipe(map((facets) => {
                // remove disabled facets, selected facets and facets that dont match search term
                return facets.filter(facet => !facet.disabled)
                    .filter(facet => !this.selected.find(selectedFacet => selectedFacet === facet))
                    .filter(facet => facet.title.toUpperCase().includes(this.searchQuery.toUpperCase()));
            }));
        }
        // provide default values for typeahead config
        for (let /** @type {?} */ prop in this._defaultTypeaheadConfig) {
            // check if prop has been defined in the users typeahead config - if not set default value
            if (this.typeaheadConfig.hasOwnProperty(prop) === false) {
                this.typeaheadConfig[prop] = this._defaultTypeaheadConfig[prop];
            }
        }
    }
    /**
     * @param {?} typeaheadOption
     * @return {?}
     */
    selectOption(typeaheadOption) {
        // check to make sure that the item is not currently selected
        if (this.selected.find(facet => facet === typeaheadOption.item)) {
            return;
        }
        // select the facet
        this.selectFacet(typeaheadOption.item);
        // clear the typeahead
        this.searchQuery = '';
    }
    /**
     * @return {?}
     */
    scrollToFocused() {
        let /** @type {?} */ dropdown = this._nativeElement.querySelector('.dropdown-menu');
        // delay to allow the typeahead ui to update
        setTimeout(() => {
            // find the currently active element if there is one
            let /** @type {?} */ activeElement = dropdown.querySelector('.dropdown-menu > li.active');
            if (activeElement) {
                // check if element is not in view
                let /** @type {?} */ elementBounds = activeElement.getBoundingClientRect();
                let /** @type {?} */ dropdownBounds = dropdown.getBoundingClientRect();
                if (elementBounds.top < dropdownBounds.top) {
                    dropdown.scrollTop += elementBounds.top - dropdownBounds.top;
                }
                if (elementBounds.bottom > dropdownBounds.bottom) {
                    dropdown.scrollTop += elementBounds.bottom - dropdownBounds.bottom;
                }
            }
        });
    }
}
FacetTypeaheadListComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-facet-typeahead-list',
                template: `<ux-facet-header [header]="header" [(expanded)]="expanded"></ux-facet-header>

<div class="facet-typeahead-list-container" *ngIf="expanded">

    <div class="facet-typeahead-list-selected-container" *ngIf="suggestions?.length > 0">

        <div class="facet-typeahead-list-selected-option" tabindex="0" *ngFor="let facet of suggestions" (click)="toggleFacetSelection(facet)"
            (keyup.enter)="toggleFacetSelection(facet)">

            <ux-checkbox [clickable]="false" [value]="isFacetSelected(facet)" [simplified]="simplified">
                <span class="facet-typeahead-list-selected-option-title">{{ facet.title }}</span>
                <span class="facet-typeahead-list-selected-option-count">({{ facet.count }})</span>
            </ux-checkbox>

        </div>

    </div>

    <div class="facet-typeahead-list-control">

        <!-- Create Typeahead Control -->
        <input type="text" class="form-control" [placeholder]="typeaheadConfig?.placeholder" [typeahead]="typeaheadOptions" [(ngModel)]="searchQuery"
            [typeaheadMinLength]="typeaheadConfig?.minCharacters" [typeaheadOptionsLimit]="typeaheadConfig?.maxResults" [typeaheadWaitMs]="typeaheadConfig?.delay"
            (typeaheadOnSelect)="selectOption($event)" [typeaheadItemTemplate]="facetOptionTemplate" (keyup.ArrowUp)="scrollToFocused()" (keyup.ArrowDown)="scrollToFocused()">

    </div>

</div>

<ng-template #facetOptionTemplate let-model="item" let-index="index">
    <p class="facet-typeahead-list-option"><span [innerHTML]="model.title | facetTypeaheadHighlight: searchQuery"></span> <span class="facet-typeahead-list-option-count"
            *ngIf="model.count">({{ model.count }})</span></p>
</ng-template>`
            },] },
];
/** @nocollapse */
FacetTypeaheadListComponent.propDecorators = {
    "facets": [{ type: Input },],
    "header": [{ type: Input },],
    "expanded": [{ type: Input },],
    "typeaheadConfig": [{ type: Input },],
    "suggestions": [{ type: Input },],
    "simplified": [{ type: Input },],
};
function FacetTypeaheadListComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FacetTypeaheadListComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FacetTypeaheadListComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    FacetTypeaheadListComponent.propDecorators;
    /** @type {?} */
    FacetTypeaheadListComponent.prototype.facets;
    /** @type {?} */
    FacetTypeaheadListComponent.prototype.header;
    /** @type {?} */
    FacetTypeaheadListComponent.prototype.expanded;
    /** @type {?} */
    FacetTypeaheadListComponent.prototype.typeaheadConfig;
    /** @type {?} */
    FacetTypeaheadListComponent.prototype.suggestions;
    /** @type {?} */
    FacetTypeaheadListComponent.prototype.simplified;
    /** @type {?} */
    FacetTypeaheadListComponent.prototype.typeaheadOptions;
    /** @type {?} */
    FacetTypeaheadListComponent.prototype.searchQuery;
    /** @type {?} */
    FacetTypeaheadListComponent.prototype._nativeElement;
    /** @type {?} */
    FacetTypeaheadListComponent.prototype._defaultTypeaheadConfig;
}
/**
 * @record
 */
export function FacetTypeaheadListConfig() { }
function FacetTypeaheadListConfig_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    FacetTypeaheadListConfig.prototype.placeholder;
    /** @type {?|undefined} */
    FacetTypeaheadListConfig.prototype.minCharacters;
    /** @type {?|undefined} */
    FacetTypeaheadListConfig.prototype.maxResults;
    /** @type {?|undefined} */
    FacetTypeaheadListConfig.prototype.delay;
}
export class FacetTypeaheadHighlight {
    /**
     * @param {?} value
     * @param {?} searchQuery
     * @return {?}
     */
    transform(value, searchQuery) {
        let /** @type {?} */ regex = new RegExp(searchQuery, 'i');
        return value.replace(regex, `<b class="facet-typeahead-highlighted">${value.match(regex)}</b>`);
    }
}
FacetTypeaheadHighlight.decorators = [
    { type: Pipe, args: [{
                name: 'facetTypeaheadHighlight'
            },] },
];
function FacetTypeaheadHighlight_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FacetTypeaheadHighlight.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FacetTypeaheadHighlight.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtdHlwZWFoZWFkLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmFjZXRzL2ZhY2V0LXR5cGVhaGVhZC1saXN0L2ZhY2V0LXR5cGVhaGVhZC1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUU5RSxPQUFPLEVBQUUsVUFBVSxFQUFJLElBQUksRUFBSSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBdUM3RSxNQUFNLGtDQUFtQyxTQUFRLGtCQUFrQjs7O3dCQUlsQyxJQUFJOytCQUNvQixFQUFFOzJCQUN2QixFQUFFOzBCQUNILElBQUk7Z0RBS0csSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUE0Qjt1Q0FDdkI7WUFDeEQsV0FBVyxFQUFFLEVBQUU7WUFDZixVQUFVLEVBQUUsRUFBRTtZQUNkLGFBQWEsRUFBRSxDQUFDO1NBQ25COzs7OztJQUVELFFBQVE7O1FBR0osRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sWUFBWSxVQUFVLENBQUMsQ0FBQyxDQUFDOztZQUdwQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBZSxFQUFFLEVBQUU7O2dCQUduRSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztxQkFDekMsTUFBTSxDQUFDLEtBQUssQ0FBQyxF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QUFjLENBQUMsTUFBTSxDQUFDO2lCQUN0RTthQUNKO1NBQ0osQ0FBQyxDQUFDO0tBQ047OztZQWxJSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQWdDQzthQUNkOzs7O3VCQUdJLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLO2dDQUNMLEtBQUs7NEJBQ0wsS0FBSzsyQkFDTCxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFHVixNQUFNOzs7Ozs7SUFDRixTQUFTLENBQUMsS0FBYSxFQUFFLFdBQW1CO1FBQ3hDLHFCQUFJLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDekMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLDBDQUEyQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBRSxNQUFNLENBQUMsQ0FBQztLQUNyRzs7O1lBUEosSUFBSSxTQUFDO2dCQUNGLElBQUksRUFBRSx5QkFBeUI7YUFDbEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHlwZWFoZWFkTWF0Y2ggfSBmcm9tICduZ3gtYm9vdHN0cmFwL3R5cGVhaGVhZCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgLCAgZnJvbSAsICBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IEZhY2V0QmFzZUNvbXBvbmVudCB9IGZyb20gJy4uL2Jhc2UvZmFjZXQtYmFzZS9mYWNldC1iYXNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZhY2V0IH0gZnJvbSAnLi4vbW9kZWxzL2ZhY2V0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd1eC1mYWNldC10eXBlYWhlYWQtbGlzdCcsXHJcbiAgICB0ZW1wbGF0ZTogYDx1eC1mYWNldC1oZWFkZXIgW2hlYWRlcl09XCJoZWFkZXJcIiBbKGV4cGFuZGVkKV09XCJleHBhbmRlZFwiPjwvdXgtZmFjZXQtaGVhZGVyPlxyXG5cclxuPGRpdiBjbGFzcz1cImZhY2V0LXR5cGVhaGVhZC1saXN0LWNvbnRhaW5lclwiICpuZ0lmPVwiZXhwYW5kZWRcIj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiZmFjZXQtdHlwZWFoZWFkLWxpc3Qtc2VsZWN0ZWQtY29udGFpbmVyXCIgKm5nSWY9XCJzdWdnZXN0aW9ucz8ubGVuZ3RoID4gMFwiPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmFjZXQtdHlwZWFoZWFkLWxpc3Qtc2VsZWN0ZWQtb3B0aW9uXCIgdGFiaW5kZXg9XCIwXCIgKm5nRm9yPVwibGV0IGZhY2V0IG9mIHN1Z2dlc3Rpb25zXCIgKGNsaWNrKT1cInRvZ2dsZUZhY2V0U2VsZWN0aW9uKGZhY2V0KVwiXHJcbiAgICAgICAgICAgIChrZXl1cC5lbnRlcik9XCJ0b2dnbGVGYWNldFNlbGVjdGlvbihmYWNldClcIj5cclxuXHJcbiAgICAgICAgICAgIDx1eC1jaGVja2JveCBbY2xpY2thYmxlXT1cImZhbHNlXCIgW3ZhbHVlXT1cImlzRmFjZXRTZWxlY3RlZChmYWNldClcIiBbc2ltcGxpZmllZF09XCJzaW1wbGlmaWVkXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhY2V0LXR5cGVhaGVhZC1saXN0LXNlbGVjdGVkLW9wdGlvbi10aXRsZVwiPnt7IGZhY2V0LnRpdGxlIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYWNldC10eXBlYWhlYWQtbGlzdC1zZWxlY3RlZC1vcHRpb24tY291bnRcIj4oe3sgZmFjZXQuY291bnQgfX0pPC9zcGFuPlxyXG4gICAgICAgICAgICA8L3V4LWNoZWNrYm94PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiZmFjZXQtdHlwZWFoZWFkLWxpc3QtY29udHJvbFwiPlxyXG5cclxuICAgICAgICA8IS0tIENyZWF0ZSBUeXBlYWhlYWQgQ29udHJvbCAtLT5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIFtwbGFjZWhvbGRlcl09XCJ0eXBlYWhlYWRDb25maWc/LnBsYWNlaG9sZGVyXCIgW3R5cGVhaGVhZF09XCJ0eXBlYWhlYWRPcHRpb25zXCIgWyhuZ01vZGVsKV09XCJzZWFyY2hRdWVyeVwiXHJcbiAgICAgICAgICAgIFt0eXBlYWhlYWRNaW5MZW5ndGhdPVwidHlwZWFoZWFkQ29uZmlnPy5taW5DaGFyYWN0ZXJzXCIgW3R5cGVhaGVhZE9wdGlvbnNMaW1pdF09XCJ0eXBlYWhlYWRDb25maWc/Lm1heFJlc3VsdHNcIiBbdHlwZWFoZWFkV2FpdE1zXT1cInR5cGVhaGVhZENvbmZpZz8uZGVsYXlcIlxyXG4gICAgICAgICAgICAodHlwZWFoZWFkT25TZWxlY3QpPVwic2VsZWN0T3B0aW9uKCRldmVudClcIiBbdHlwZWFoZWFkSXRlbVRlbXBsYXRlXT1cImZhY2V0T3B0aW9uVGVtcGxhdGVcIiAoa2V5dXAuQXJyb3dVcCk9XCJzY3JvbGxUb0ZvY3VzZWQoKVwiIChrZXl1cC5BcnJvd0Rvd24pPVwic2Nyb2xsVG9Gb2N1c2VkKClcIj5cclxuXHJcbiAgICA8L2Rpdj5cclxuXHJcbjwvZGl2PlxyXG5cclxuPG5nLXRlbXBsYXRlICNmYWNldE9wdGlvblRlbXBsYXRlIGxldC1tb2RlbD1cIml0ZW1cIiBsZXQtaW5kZXg9XCJpbmRleFwiPlxyXG4gICAgPHAgY2xhc3M9XCJmYWNldC10eXBlYWhlYWQtbGlzdC1vcHRpb25cIj48c3BhbiBbaW5uZXJIVE1MXT1cIm1vZGVsLnRpdGxlIHwgZmFjZXRUeXBlYWhlYWRIaWdobGlnaHQ6IHNlYXJjaFF1ZXJ5XCI+PC9zcGFuPiA8c3BhbiBjbGFzcz1cImZhY2V0LXR5cGVhaGVhZC1saXN0LW9wdGlvbi1jb3VudFwiXHJcbiAgICAgICAgICAgICpuZ0lmPVwibW9kZWwuY291bnRcIj4oe3sgbW9kZWwuY291bnQgfX0pPC9zcGFuPjwvcD5cclxuPC9uZy10ZW1wbGF0ZT5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWNldFR5cGVhaGVhZExpc3RDb21wb25lbnQgZXh0ZW5kcyBGYWNldEJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIEBJbnB1dCgpIGZhY2V0czogRmFjZXRbXSB8IE9ic2VydmFibGU8RmFjZXRbXT47XHJcbiAgICBASW5wdXQoKSBoZWFkZXI6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGV4cGFuZGVkOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgpIHR5cGVhaGVhZENvbmZpZzogRmFjZXRUeXBlYWhlYWRMaXN0Q29uZmlnID0ge307XHJcbiAgICBASW5wdXQoKSBzdWdnZXN0aW9uczogRmFjZXRbXSA9IFtdO1xyXG4gICAgQElucHV0KCkgc2ltcGxpZmllZDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgdHlwZWFoZWFkT3B0aW9uczogT2JzZXJ2YWJsZTxGYWNldFtdPjtcclxuICAgIHNlYXJjaFF1ZXJ5OiBzdHJpbmc7XHJcblxyXG4gICAgcHJpdmF0ZSBfbmF0aXZlRWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIF9kZWZhdWx0VHlwZWFoZWFkQ29uZmlnOiBGYWNldFR5cGVhaGVhZExpc3RDb25maWcgPSB7XHJcbiAgICAgICAgcGxhY2Vob2xkZXI6ICcnLFxyXG4gICAgICAgIG1heFJlc3VsdHM6IDUwLFxyXG4gICAgICAgIG1pbkNoYXJhY3RlcnM6IDFcclxuICAgIH07XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgICAgIC8vIHdyYXAgdGhlIG9ic2VydmFibGUgYW5kIGZpbHRlciBvdXQgYW55IGFscmVhZHkgc2VsZWN0ZWQgaXRlbXMgb3IgYW55IGRpc2FibGVkIGl0ZW1zXHJcbiAgICAgICAgaWYgKHRoaXMuZmFjZXRzIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkge1xyXG5cclxuICAgICAgICAgICAgLy8gaGFuZGxlIGFuIG9ic2VydmFibGUgb2YgZGF0YVxyXG4gICAgICAgICAgICB0aGlzLnR5cGVhaGVhZE9wdGlvbnMgPSBmcm9tKHRoaXMuZmFjZXRzKS5waXBlKG1hcCgoZmFjZXRzOiBGYWNldFtdKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGRpc2FibGVkIGZhY2V0cywgc2VsZWN0ZWQgZmFjZXRzIGFuZCBmYWNldHMgdGhhdCBkb250IG1hdGNoIHNlYXJjaCB0ZXJtXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFjZXRzLmZpbHRlcihmYWNldCA9PiAhZmFjZXQuZGlzYWJsZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihmYWNldCA9PiAhdGhpcy5zZWxlY3RlZC5maW5kKHNlbGVjdGVkRmFjZXQgPT4gc2VsZWN0ZWRGYWNldCA9PT0gZmFjZXQpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoZmFjZXQgPT4gZmFjZXQudGl0bGUudG9VcHBlckNhc2UoKS5pbmNsdWRlcyh0aGlzLnNlYXJjaFF1ZXJ5LnRvVXBwZXJDYXNlKCkpKTtcclxuICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgLy8gaGFuZGxlIGFuIGFycmF5IG9mIGRhdGFcclxuICAgICAgICAgICAgdGhpcy50eXBlYWhlYWRPcHRpb25zID0gb2YodGhpcy5mYWNldHMpLnBpcGUobWFwKChmYWNldHM6IEZhY2V0W10pID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgZGlzYWJsZWQgZmFjZXRzLCBzZWxlY3RlZCBmYWNldHMgYW5kIGZhY2V0cyB0aGF0IGRvbnQgbWF0Y2ggc2VhcmNoIHRlcm1cclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWNldHMuZmlsdGVyKGZhY2V0ID0+ICFmYWNldC5kaXNhYmxlZClcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGZhY2V0ID0+ICF0aGlzLnNlbGVjdGVkLmZpbmQoc2VsZWN0ZWRGYWNldCA9PiBzZWxlY3RlZEZhY2V0ID09PSBmYWNldCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihmYWNldCA9PiBmYWNldC50aXRsZS50b1VwcGVyQ2FzZSgpLmluY2x1ZGVzKHRoaXMuc2VhcmNoUXVlcnkudG9VcHBlckNhc2UoKSkpO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBwcm92aWRlIGRlZmF1bHQgdmFsdWVzIGZvciB0eXBlYWhlYWQgY29uZmlnXHJcbiAgICAgICAgZm9yIChsZXQgcHJvcCBpbiB0aGlzLl9kZWZhdWx0VHlwZWFoZWFkQ29uZmlnKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBjaGVjayBpZiBwcm9wIGhhcyBiZWVuIGRlZmluZWQgaW4gdGhlIHVzZXJzIHR5cGVhaGVhZCBjb25maWcgLSBpZiBub3Qgc2V0IGRlZmF1bHQgdmFsdWVcclxuICAgICAgICAgICAgaWYgKHRoaXMudHlwZWFoZWFkQ29uZmlnLmhhc093blByb3BlcnR5KHByb3ApID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50eXBlYWhlYWRDb25maWdbcHJvcF0gPSB0aGlzLl9kZWZhdWx0VHlwZWFoZWFkQ29uZmlnW3Byb3BdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdE9wdGlvbih0eXBlYWhlYWRPcHRpb246IFR5cGVhaGVhZE1hdGNoKSB7XHJcblxyXG4gICAgICAgIC8vIGNoZWNrIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSBpdGVtIGlzIG5vdCBjdXJyZW50bHkgc2VsZWN0ZWRcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZC5maW5kKGZhY2V0ID0+IGZhY2V0ID09PSB0eXBlYWhlYWRPcHRpb24uaXRlbSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc2VsZWN0IHRoZSBmYWNldFxyXG4gICAgICAgIHRoaXMuc2VsZWN0RmFjZXQodHlwZWFoZWFkT3B0aW9uLml0ZW0pO1xyXG5cclxuICAgICAgICAvLyBjbGVhciB0aGUgdHlwZWFoZWFkXHJcbiAgICAgICAgdGhpcy5zZWFyY2hRdWVyeSA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHNjcm9sbFRvRm9jdXNlZCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgbGV0IGRyb3Bkb3duID0gdGhpcy5fbmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24tbWVudScpO1xyXG5cclxuICAgICAgICAvLyBkZWxheSB0byBhbGxvdyB0aGUgdHlwZWFoZWFkIHVpIHRvIHVwZGF0ZVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgLy8gZmluZCB0aGUgY3VycmVudGx5IGFjdGl2ZSBlbGVtZW50IGlmIHRoZXJlIGlzIG9uZVxyXG4gICAgICAgICAgICBsZXQgYWN0aXZlRWxlbWVudCA9IGRyb3Bkb3duLnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bi1tZW51ID4gbGkuYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoYWN0aXZlRWxlbWVudCkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGVsZW1lbnQgaXMgbm90IGluIHZpZXdcclxuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50Qm91bmRzID0gYWN0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgICAgIGxldCBkcm9wZG93bkJvdW5kcyA9IGRyb3Bkb3duLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Qm91bmRzLnRvcCA8IGRyb3Bkb3duQm91bmRzLnRvcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duLnNjcm9sbFRvcCArPSBlbGVtZW50Qm91bmRzLnRvcCAtIGRyb3Bkb3duQm91bmRzLnRvcDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudEJvdW5kcy5ib3R0b20gPiBkcm9wZG93bkJvdW5kcy5ib3R0b20pIHtcclxuICAgICAgICAgICAgICAgICAgICBkcm9wZG93bi5zY3JvbGxUb3AgKz0gZWxlbWVudEJvdW5kcy5ib3R0b20gLSBkcm9wZG93bkJvdW5kcy5ib3R0b207XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmFjZXRUeXBlYWhlYWRMaXN0Q29uZmlnIHtcclxuICAgIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xyXG4gICAgbWluQ2hhcmFjdGVycz86IG51bWJlcjtcclxuICAgIG1heFJlc3VsdHM/OiBudW1iZXI7XHJcbiAgICBkZWxheT86IG51bWJlcjtcclxufVxyXG5cclxuQFBpcGUoe1xyXG4gICAgbmFtZTogJ2ZhY2V0VHlwZWFoZWFkSGlnaGxpZ2h0J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFjZXRUeXBlYWhlYWRIaWdobGlnaHQgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nLCBzZWFyY2hRdWVyeTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKHNlYXJjaFF1ZXJ5LCAnaScpO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKHJlZ2V4LCBgPGIgY2xhc3M9XCJmYWNldC10eXBlYWhlYWQtaGlnaGxpZ2h0ZWRcIj4keyB2YWx1ZS5tYXRjaChyZWdleCkgfTwvYj5gKTtcclxuICAgIH1cclxufSJdfQ==