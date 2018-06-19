/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Pipe } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { FacetBaseComponent } from '../base/facet-base/facet-base.component';
var FacetTypeaheadListComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FacetTypeaheadListComponent, _super);
    function FacetTypeaheadListComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.expanded = true;
        _this.typeaheadConfig = {};
        _this.suggestions = [];
        _this.simplified = true;
        _this._nativeElement = /** @type {?} */ (_this._elementRef.nativeElement);
        _this._defaultTypeaheadConfig = {
            placeholder: '',
            maxResults: 50,
            minCharacters: 1
        };
        return _this;
    }
    /**
     * @return {?}
     */
    FacetTypeaheadListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // wrap the observable and filter out any already selected items or any disabled items
        if (this.facets instanceof Observable) {
            // handle an observable of data
            this.typeaheadOptions = from(this.facets).pipe(map(function (facets) {
                // remove disabled facets, selected facets and facets that dont match search term
                return facets.filter(function (facet) { return !facet.disabled; })
                    .filter(function (facet) { return !_this.selected.find(function (selectedFacet) { return selectedFacet === facet; }); })
                    .filter(function (facet) { return facet.title.toUpperCase().includes(_this.searchQuery.toUpperCase()); });
            }));
        }
        else {
            // handle an array of data
            this.typeaheadOptions = of(this.facets).pipe(map(function (facets) {
                // remove disabled facets, selected facets and facets that dont match search term
                return facets.filter(function (facet) { return !facet.disabled; })
                    .filter(function (facet) { return !_this.selected.find(function (selectedFacet) { return selectedFacet === facet; }); })
                    .filter(function (facet) { return facet.title.toUpperCase().includes(_this.searchQuery.toUpperCase()); });
            }));
        }
        // provide default values for typeahead config
        for (var /** @type {?} */ prop in this._defaultTypeaheadConfig) {
            // check if prop has been defined in the users typeahead config - if not set default value
            if (this.typeaheadConfig.hasOwnProperty(prop) === false) {
                this.typeaheadConfig[prop] = this._defaultTypeaheadConfig[prop];
            }
        }
    };
    /**
     * @param {?} typeaheadOption
     * @return {?}
     */
    FacetTypeaheadListComponent.prototype.selectOption = /**
     * @param {?} typeaheadOption
     * @return {?}
     */
    function (typeaheadOption) {
        // check to make sure that the item is not currently selected
        if (this.selected.find(function (facet) { return facet === typeaheadOption.item; })) {
            return;
        }
        // select the facet
        this.selectFacet(typeaheadOption.item);
        // clear the typeahead
        this.searchQuery = '';
    };
    /**
     * @return {?}
     */
    FacetTypeaheadListComponent.prototype.scrollToFocused = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ dropdown = this._nativeElement.querySelector('.dropdown-menu');
        // delay to allow the typeahead ui to update
        setTimeout(function () {
            // find the currently active element if there is one
            var /** @type {?} */ activeElement = dropdown.querySelector('.dropdown-menu > li.active');
            if (activeElement) {
                // check if element is not in view
                var /** @type {?} */ elementBounds = activeElement.getBoundingClientRect();
                var /** @type {?} */ dropdownBounds = dropdown.getBoundingClientRect();
                if (elementBounds.top < dropdownBounds.top) {
                    dropdown.scrollTop += elementBounds.top - dropdownBounds.top;
                }
                if (elementBounds.bottom > dropdownBounds.bottom) {
                    dropdown.scrollTop += elementBounds.bottom - dropdownBounds.bottom;
                }
            }
        });
    };
    FacetTypeaheadListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-facet-typeahead-list',
                    template: "<ux-facet-header [header]=\"header\" [(expanded)]=\"expanded\"></ux-facet-header>\n\n<div class=\"facet-typeahead-list-container\" *ngIf=\"expanded\">\n\n    <div class=\"facet-typeahead-list-selected-container\" *ngIf=\"suggestions?.length > 0\">\n\n        <div class=\"facet-typeahead-list-selected-option\" tabindex=\"0\" *ngFor=\"let facet of suggestions\" (click)=\"toggleFacetSelection(facet)\"\n            (keyup.enter)=\"toggleFacetSelection(facet)\">\n\n            <ux-checkbox [clickable]=\"false\" [value]=\"isFacetSelected(facet)\" [simplified]=\"simplified\">\n                <span class=\"facet-typeahead-list-selected-option-title\">{{ facet.title }}</span>\n                <span class=\"facet-typeahead-list-selected-option-count\">({{ facet.count }})</span>\n            </ux-checkbox>\n\n        </div>\n\n    </div>\n\n    <div class=\"facet-typeahead-list-control\">\n\n        <!-- Create Typeahead Control -->\n        <input type=\"text\" class=\"form-control\" [placeholder]=\"typeaheadConfig?.placeholder\" [typeahead]=\"typeaheadOptions\" [(ngModel)]=\"searchQuery\"\n            [typeaheadMinLength]=\"typeaheadConfig?.minCharacters\" [typeaheadOptionsLimit]=\"typeaheadConfig?.maxResults\" [typeaheadWaitMs]=\"typeaheadConfig?.delay\"\n            (typeaheadOnSelect)=\"selectOption($event)\" [typeaheadItemTemplate]=\"facetOptionTemplate\" (keyup.ArrowUp)=\"scrollToFocused()\" (keyup.ArrowDown)=\"scrollToFocused()\">\n\n    </div>\n\n</div>\n\n<ng-template #facetOptionTemplate let-model=\"item\" let-index=\"index\">\n    <p class=\"facet-typeahead-list-option\"><span [innerHTML]=\"model.title | facetTypeaheadHighlight: searchQuery\"></span> <span class=\"facet-typeahead-list-option-count\"\n            *ngIf=\"model.count\">({{ model.count }})</span></p>\n</ng-template>"
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
    return FacetTypeaheadListComponent;
}(FacetBaseComponent));
export { FacetTypeaheadListComponent };
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
var FacetTypeaheadHighlight = /** @class */ (function () {
    function FacetTypeaheadHighlight() {
    }
    /**
     * @param {?} value
     * @param {?} searchQuery
     * @return {?}
     */
    FacetTypeaheadHighlight.prototype.transform = /**
     * @param {?} value
     * @param {?} searchQuery
     * @return {?}
     */
    function (value, searchQuery) {
        var /** @type {?} */ regex = new RegExp(searchQuery, 'i');
        return value.replace(regex, "<b class=\"facet-typeahead-highlighted\">" + value.match(regex) + "</b>");
    };
    FacetTypeaheadHighlight.decorators = [
        { type: Pipe, args: [{
                    name: 'facetTypeaheadHighlight'
                },] },
    ];
    return FacetTypeaheadHighlight;
}());
export { FacetTypeaheadHighlight };
function FacetTypeaheadHighlight_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FacetTypeaheadHighlight.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FacetTypeaheadHighlight.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtdHlwZWFoZWFkLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmFjZXRzL2ZhY2V0LXR5cGVhaGVhZC1saXN0L2ZhY2V0LXR5cGVhaGVhZC1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFOUUsT0FBTyxFQUFFLFVBQVUsRUFBSSxJQUFJLEVBQUksRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7SUF1QzVCLHVEQUFrQjs7O3lCQUlsQyxJQUFJO2dDQUNvQixFQUFFOzRCQUN2QixFQUFFOzJCQUNILElBQUk7aURBS0csS0FBSSxDQUFDLFdBQVcsQ0FBQyxhQUE0Qjt3Q0FDdkI7WUFDeEQsV0FBVyxFQUFFLEVBQUU7WUFDZixVQUFVLEVBQUUsRUFBRTtZQUNkLGFBQWEsRUFBRSxDQUFDO1NBQ25COzs7Ozs7SUFFRCw4Q0FBUTs7O0lBQVI7UUFBQSxpQkFrQ0M7O1FBL0JHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLFlBQVksVUFBVSxDQUFDLENBQUMsQ0FBQzs7WUFHcEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLE1BQWU7O2dCQUcvRCxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBZixDQUFlLENBQUM7cUJBQ3pDLE1BQU0sQ0FBQyxVQUFB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YUFBYSxDQUFDLE1BQU0sR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDL0MsUUFBUSxDQUFDLFNBQVMsSUFBSSxhQUFhLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUM7aUJBQ3RFO2FBQ0o7U0FDSixDQUFDLENBQUM7S0FDTjs7Z0JBbElKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxRQUFRLEVBQUUsc3hEQWdDQztpQkFDZDs7OzsyQkFHSSxLQUFLOzJCQUNMLEtBQUs7NkJBQ0wsS0FBSztvQ0FDTCxLQUFLO2dDQUNMLEtBQUs7K0JBQ0wsS0FBSzs7c0NBbERWO0VBMkNpRCxrQkFBa0I7U0FBdEQsMkJBQTJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUE2R3BDLDJDQUFTOzs7OztJQUFULFVBQVUsS0FBYSxFQUFFLFdBQW1CO1FBQ3hDLHFCQUFJLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDekMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLDhDQUEyQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFPLENBQUMsQ0FBQztLQUNyRzs7Z0JBUEosSUFBSSxTQUFDO29CQUNGLElBQUksRUFBRSx5QkFBeUI7aUJBQ2xDOztrQ0F0SkQ7O1NBdUphLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUeXBlYWhlYWRNYXRjaCB9IGZyb20gJ25neC1ib290c3RyYXAvdHlwZWFoZWFkJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSAsICBmcm9tICwgIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgRmFjZXRCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS9mYWNldC1iYXNlL2ZhY2V0LWJhc2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRmFjZXQgfSBmcm9tICcuLi9tb2RlbHMvZmFjZXQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3V4LWZhY2V0LXR5cGVhaGVhZC1saXN0JyxcclxuICAgIHRlbXBsYXRlOiBgPHV4LWZhY2V0LWhlYWRlciBbaGVhZGVyXT1cImhlYWRlclwiIFsoZXhwYW5kZWQpXT1cImV4cGFuZGVkXCI+PC91eC1mYWNldC1oZWFkZXI+XHJcblxyXG48ZGl2IGNsYXNzPVwiZmFjZXQtdHlwZWFoZWFkLWxpc3QtY29udGFpbmVyXCIgKm5nSWY9XCJleHBhbmRlZFwiPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJmYWNldC10eXBlYWhlYWQtbGlzdC1zZWxlY3RlZC1jb250YWluZXJcIiAqbmdJZj1cInN1Z2dlc3Rpb25zPy5sZW5ndGggPiAwXCI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmYWNldC10eXBlYWhlYWQtbGlzdC1zZWxlY3RlZC1vcHRpb25cIiB0YWJpbmRleD1cIjBcIiAqbmdGb3I9XCJsZXQgZmFjZXQgb2Ygc3VnZ2VzdGlvbnNcIiAoY2xpY2spPVwidG9nZ2xlRmFjZXRTZWxlY3Rpb24oZmFjZXQpXCJcclxuICAgICAgICAgICAgKGtleXVwLmVudGVyKT1cInRvZ2dsZUZhY2V0U2VsZWN0aW9uKGZhY2V0KVwiPlxyXG5cclxuICAgICAgICAgICAgPHV4LWNoZWNrYm94IFtjbGlja2FibGVdPVwiZmFsc2VcIiBbdmFsdWVdPVwiaXNGYWNldFNlbGVjdGVkKGZhY2V0KVwiIFtzaW1wbGlmaWVkXT1cInNpbXBsaWZpZWRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFjZXQtdHlwZWFoZWFkLWxpc3Qtc2VsZWN0ZWQtb3B0aW9uLXRpdGxlXCI+e3sgZmFjZXQudGl0bGUgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhY2V0LXR5cGVhaGVhZC1saXN0LXNlbGVjdGVkLW9wdGlvbi1jb3VudFwiPih7eyBmYWNldC5jb3VudCB9fSk8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvdXgtY2hlY2tib3g+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJmYWNldC10eXBlYWhlYWQtbGlzdC1jb250cm9sXCI+XHJcblxyXG4gICAgICAgIDwhLS0gQ3JlYXRlIFR5cGVhaGVhZCBDb250cm9sIC0tPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgW3BsYWNlaG9sZGVyXT1cInR5cGVhaGVhZENvbmZpZz8ucGxhY2Vob2xkZXJcIiBbdHlwZWFoZWFkXT1cInR5cGVhaGVhZE9wdGlvbnNcIiBbKG5nTW9kZWwpXT1cInNlYXJjaFF1ZXJ5XCJcclxuICAgICAgICAgICAgW3R5cGVhaGVhZE1pbkxlbmd0aF09XCJ0eXBlYWhlYWRDb25maWc/Lm1pbkNoYXJhY3RlcnNcIiBbdHlwZWFoZWFkT3B0aW9uc0xpbWl0XT1cInR5cGVhaGVhZENvbmZpZz8ubWF4UmVzdWx0c1wiIFt0eXBlYWhlYWRXYWl0TXNdPVwidHlwZWFoZWFkQ29uZmlnPy5kZWxheVwiXHJcbiAgICAgICAgICAgICh0eXBlYWhlYWRPblNlbGVjdCk9XCJzZWxlY3RPcHRpb24oJGV2ZW50KVwiIFt0eXBlYWhlYWRJdGVtVGVtcGxhdGVdPVwiZmFjZXRPcHRpb25UZW1wbGF0ZVwiIChrZXl1cC5BcnJvd1VwKT1cInNjcm9sbFRvRm9jdXNlZCgpXCIgKGtleXVwLkFycm93RG93bik9XCJzY3JvbGxUb0ZvY3VzZWQoKVwiPlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuPC9kaXY+XHJcblxyXG48bmctdGVtcGxhdGUgI2ZhY2V0T3B0aW9uVGVtcGxhdGUgbGV0LW1vZGVsPVwiaXRlbVwiIGxldC1pbmRleD1cImluZGV4XCI+XHJcbiAgICA8cCBjbGFzcz1cImZhY2V0LXR5cGVhaGVhZC1saXN0LW9wdGlvblwiPjxzcGFuIFtpbm5lckhUTUxdPVwibW9kZWwudGl0bGUgfCBmYWNldFR5cGVhaGVhZEhpZ2hsaWdodDogc2VhcmNoUXVlcnlcIj48L3NwYW4+IDxzcGFuIGNsYXNzPVwiZmFjZXQtdHlwZWFoZWFkLWxpc3Qtb3B0aW9uLWNvdW50XCJcclxuICAgICAgICAgICAgKm5nSWY9XCJtb2RlbC5jb3VudFwiPih7eyBtb2RlbC5jb3VudCB9fSk8L3NwYW4+PC9wPlxyXG48L25nLXRlbXBsYXRlPmBcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhY2V0VHlwZWFoZWFkTGlzdENvbXBvbmVudCBleHRlbmRzIEZhY2V0QmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgQElucHV0KCkgZmFjZXRzOiBGYWNldFtdIHwgT2JzZXJ2YWJsZTxGYWNldFtdPjtcclxuICAgIEBJbnB1dCgpIGhlYWRlcjogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgZXhwYW5kZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgQElucHV0KCkgdHlwZWFoZWFkQ29uZmlnOiBGYWNldFR5cGVhaGVhZExpc3RDb25maWcgPSB7fTtcclxuICAgIEBJbnB1dCgpIHN1Z2dlc3Rpb25zOiBGYWNldFtdID0gW107XHJcbiAgICBASW5wdXQoKSBzaW1wbGlmaWVkOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICB0eXBlYWhlYWRPcHRpb25zOiBPYnNlcnZhYmxlPEZhY2V0W10+O1xyXG4gICAgc2VhcmNoUXVlcnk6IHN0cmluZztcclxuXHJcbiAgICBwcml2YXRlIF9uYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgX2RlZmF1bHRUeXBlYWhlYWRDb25maWc6IEZhY2V0VHlwZWFoZWFkTGlzdENvbmZpZyA9IHtcclxuICAgICAgICBwbGFjZWhvbGRlcjogJycsXHJcbiAgICAgICAgbWF4UmVzdWx0czogNTAsXHJcbiAgICAgICAgbWluQ2hhcmFjdGVyczogMVxyXG4gICAgfTtcclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICAgICAgLy8gd3JhcCB0aGUgb2JzZXJ2YWJsZSBhbmQgZmlsdGVyIG91dCBhbnkgYWxyZWFkeSBzZWxlY3RlZCBpdGVtcyBvciBhbnkgZGlzYWJsZWQgaXRlbXNcclxuICAgICAgICBpZiAodGhpcy5mYWNldHMgaW5zdGFuY2VvZiBPYnNlcnZhYmxlKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBoYW5kbGUgYW4gb2JzZXJ2YWJsZSBvZiBkYXRhXHJcbiAgICAgICAgICAgIHRoaXMudHlwZWFoZWFkT3B0aW9ucyA9IGZyb20odGhpcy5mYWNldHMpLnBpcGUobWFwKChmYWNldHM6IEZhY2V0W10pID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgZGlzYWJsZWQgZmFjZXRzLCBzZWxlY3RlZCBmYWNldHMgYW5kIGZhY2V0cyB0aGF0IGRvbnQgbWF0Y2ggc2VhcmNoIHRlcm1cclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWNldHMuZmlsdGVyKGZhY2V0ID0+ICFmYWNldC5kaXNhYmxlZClcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGZhY2V0ID0+ICF0aGlzLnNlbGVjdGVkLmZpbmQoc2VsZWN0ZWRGYWNldCA9PiBzZWxlY3RlZEZhY2V0ID09PSBmYWNldCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihmYWNldCA9PiBmYWNldC50aXRsZS50b1VwcGVyQ2FzZSgpLmluY2x1ZGVzKHRoaXMuc2VhcmNoUXVlcnkudG9VcHBlckNhc2UoKSkpO1xyXG4gICAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAvLyBoYW5kbGUgYW4gYXJyYXkgb2YgZGF0YVxyXG4gICAgICAgICAgICB0aGlzLnR5cGVhaGVhZE9wdGlvbnMgPSBvZih0aGlzLmZhY2V0cykucGlwZShtYXAoKGZhY2V0czogRmFjZXRbXSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBkaXNhYmxlZCBmYWNldHMsIHNlbGVjdGVkIGZhY2V0cyBhbmQgZmFjZXRzIHRoYXQgZG9udCBtYXRjaCBzZWFyY2ggdGVybVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhY2V0cy5maWx0ZXIoZmFjZXQgPT4gIWZhY2V0LmRpc2FibGVkKVxyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoZmFjZXQgPT4gIXRoaXMuc2VsZWN0ZWQuZmluZChzZWxlY3RlZEZhY2V0ID0+IHNlbGVjdGVkRmFjZXQgPT09IGZhY2V0KSlcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGZhY2V0ID0+IGZhY2V0LnRpdGxlLnRvVXBwZXJDYXNlKCkuaW5jbHVkZXModGhpcy5zZWFyY2hRdWVyeS50b1VwcGVyQ2FzZSgpKSk7XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHByb3ZpZGUgZGVmYXVsdCB2YWx1ZXMgZm9yIHR5cGVhaGVhZCBjb25maWdcclxuICAgICAgICBmb3IgKGxldCBwcm9wIGluIHRoaXMuX2RlZmF1bHRUeXBlYWhlYWRDb25maWcpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHByb3AgaGFzIGJlZW4gZGVmaW5lZCBpbiB0aGUgdXNlcnMgdHlwZWFoZWFkIGNvbmZpZyAtIGlmIG5vdCBzZXQgZGVmYXVsdCB2YWx1ZVxyXG4gICAgICAgICAgICBpZiAodGhpcy50eXBlYWhlYWRDb25maWcuaGFzT3duUHJvcGVydHkocHJvcCkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnR5cGVhaGVhZENvbmZpZ1twcm9wXSA9IHRoaXMuX2RlZmF1bHRUeXBlYWhlYWRDb25maWdbcHJvcF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0T3B0aW9uKHR5cGVhaGVhZE9wdGlvbjogVHlwZWFoZWFkTWF0Y2gpIHtcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIGl0ZW0gaXMgbm90IGN1cnJlbnRseSBzZWxlY3RlZFxyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkLmZpbmQoZmFjZXQgPT4gZmFjZXQgPT09IHR5cGVhaGVhZE9wdGlvbi5pdGVtKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzZWxlY3QgdGhlIGZhY2V0XHJcbiAgICAgICAgdGhpcy5zZWxlY3RGYWNldCh0eXBlYWhlYWRPcHRpb24uaXRlbSk7XHJcblxyXG4gICAgICAgIC8vIGNsZWFyIHRoZSB0eXBlYWhlYWRcclxuICAgICAgICB0aGlzLnNlYXJjaFF1ZXJ5ID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgc2Nyb2xsVG9Gb2N1c2VkKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBsZXQgZHJvcGRvd24gPSB0aGlzLl9uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bi1tZW51Jyk7XHJcblxyXG4gICAgICAgIC8vIGRlbGF5IHRvIGFsbG93IHRoZSB0eXBlYWhlYWQgdWkgdG8gdXBkYXRlXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAvLyBmaW5kIHRoZSBjdXJyZW50bHkgYWN0aXZlIGVsZW1lbnQgaWYgdGhlcmUgaXMgb25lXHJcbiAgICAgICAgICAgIGxldCBhY3RpdmVFbGVtZW50ID0gZHJvcGRvd24ucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duLW1lbnUgPiBsaS5hY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChhY3RpdmVFbGVtZW50KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgZWxlbWVudCBpcyBub3QgaW4gdmlld1xyXG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRCb3VuZHMgPSBhY3RpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRyb3Bkb3duQm91bmRzID0gZHJvcGRvd24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRCb3VuZHMudG9wIDwgZHJvcGRvd25Cb3VuZHMudG9wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJvcGRvd24uc2Nyb2xsVG9wICs9IGVsZW1lbnRCb3VuZHMudG9wIC0gZHJvcGRvd25Cb3VuZHMudG9wO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Qm91bmRzLmJvdHRvbSA+IGRyb3Bkb3duQm91bmRzLmJvdHRvbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duLnNjcm9sbFRvcCArPSBlbGVtZW50Qm91bmRzLmJvdHRvbSAtIGRyb3Bkb3duQm91bmRzLmJvdHRvbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGYWNldFR5cGVhaGVhZExpc3RDb25maWcge1xyXG4gICAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XHJcbiAgICBtaW5DaGFyYWN0ZXJzPzogbnVtYmVyO1xyXG4gICAgbWF4UmVzdWx0cz86IG51bWJlcjtcclxuICAgIGRlbGF5PzogbnVtYmVyO1xyXG59XHJcblxyXG5AUGlwZSh7XHJcbiAgICBuYW1lOiAnZmFjZXRUeXBlYWhlYWRIaWdobGlnaHQnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWNldFR5cGVhaGVhZEhpZ2hsaWdodCBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcsIHNlYXJjaFF1ZXJ5OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCByZWdleCA9IG5ldyBSZWdFeHAoc2VhcmNoUXVlcnksICdpJyk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UocmVnZXgsIGA8YiBjbGFzcz1cImZhY2V0LXR5cGVhaGVhZC1oaWdobGlnaHRlZFwiPiR7IHZhbHVlLm1hdGNoKHJlZ2V4KSB9PC9iPmApO1xyXG4gICAgfVxyXG59Il19