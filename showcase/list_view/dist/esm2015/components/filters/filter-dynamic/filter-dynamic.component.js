/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, ViewChild } from '@angular/core';
import { BsDropdownDirective } from 'ngx-bootstrap/dropdown';
import { FilterBaseComponent } from '../filter-base/filter-base.component';
export class FilterDynamicComponent extends FilterBaseComponent {
    constructor() {
        super(...arguments);
        this.defaultOptions = {
            placeholder: '',
            minCharacters: 3
        };
        this.showTypeahead = true;
        this.typeaheadItems = [];
    }
    /**
     * @return {?}
     */
    getItems() {
        return this.filters.filter(item => item !== this.initial).map(item => item.name);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.selected = this.initial;
        this.typeaheadItems = this.getItems();
        if (this.options && this.options.maxIndividualItems && this.options.maxIndividualItems + 1 >= this.filters.length) {
            this.showTypeahead = false;
        }
    }
    /**
     * @param {?} typeaheadOption
     * @return {?}
     */
    selectOption(typeaheadOption) {
        this.removeFilter();
        let /** @type {?} */ idx = this.filters.findIndex(filter => filter.name === typeaheadOption.value);
        this.selected = this.filters[idx];
        this.addFilter(this.selected);
        this.searchQuery = '';
        this.dropdown.hide();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    clickOff(event) {
        let /** @type {?} */ target = /** @type {?} */ (event.target);
        let /** @type {?} */ hideDropdown = true;
        while (target && target.nodeName !== 'BODY') {
            if (target.classList.contains('ux-dynamic-filter')) {
                hideDropdown = false;
                break;
            }
            else {
                target = target.parentElement;
            }
        }
        if (hideDropdown) {
            this.searchQuery = '';
            this.dropdown.hide();
        }
    }
    /**
     * @return {?}
     */
    removeFilter() {
        if (this.selected !== this.initial) {
            super.removeFilter(this.selected);
            this.selected = this.initial;
        }
        this.searchQuery = '';
    }
    /**
     * @param {?} filter
     * @return {?}
     */
    selectFilter(filter) {
        this.removeFilter();
        this.selected = filter;
        this.addFilter(this.selected);
    }
}
FilterDynamicComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-filter-dynamic',
                template: `<div class="btn-group ux-dynamic-filter" dropdown #dynamicDropdown="bs-dropdown">
    <button (click)="dynamicDropdown.show()" type="button" [class.active]="selected !== initial" class="filter-dropdown btn dropdown-toggle">{{ selected?.title }} 
        <span class="hpe-icon hpe-down"></span>
    </button>
    <ul *dropdownMenu class="dropdown-menu" role="menu">

        <li class="dropdown-list-item" *ngIf="showTypeahead" role="menuitem">
            <a class="dropdown-item" (click)="removeFilter(); dynamicDropdown.hide();">
                <i class="hpe-icon" [class.hpe-checkmark]="initial === selected"></i>
                <span class="filter-dropdown-title">{{ initial.name }}</span>
            </a>
        </li>

        <li class="dropdown-list-item" *ngIf="selected !== initial && showTypeahead" role="menuitem">
            <a class="dropdown-item">
                <i class="hpe-icon hpe-checkmark"></i>
                <span class="filter-dropdown-title">{{ selected.name }}</span>
            </a>
        </li>

        <hr>

        <li *ngIf="showTypeahead" class="typeahead-box">
            <input [(ngModel)]="searchQuery" [typeahead]="typeaheadItems" class="form-control" 
            (typeaheadOnSelect)="selectOption($event)" 
            [placeholder]="options?.placeholder || defaultOptions.placeholder"
            [typeaheadMinLength]="options?.minCharacters || defaultOptions.minCharacters"
            [typeaheadOptionsLimit]="options?.maxResults">
        </li>

        <span *ngIf="!showTypeahead">
            <li class="dropdown-list-item" *ngFor="let filter of filters" role="menuitem">
                <a class="dropdown-item" (click)="selectFilter(filter)">
                    <i class="hpe-icon" [class.hpe-checkmark]="filter === selected"></i>
                    <span class="filter-dropdown-title">{{ filter.name }}</span>
                </a>
            </li>
        </span>

    </ul>
</div>`,
                host: {
                    '(document:click)': 'clickOff($event)',
                }
            },] },
];
/** @nocollapse */
FilterDynamicComponent.propDecorators = {
    "filters": [{ type: Input },],
    "initial": [{ type: Input },],
    "options": [{ type: Input },],
    "dropdown": [{ type: ViewChild, args: [BsDropdownDirective,] },],
};
function FilterDynamicComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FilterDynamicComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FilterDynamicComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    FilterDynamicComponent.propDecorators;
    /** @type {?} */
    FilterDynamicComponent.prototype.filters;
    /** @type {?} */
    FilterDynamicComponent.prototype.initial;
    /** @type {?} */
    FilterDynamicComponent.prototype.options;
    /** @type {?} */
    FilterDynamicComponent.prototype.dropdown;
    /** @type {?} */
    FilterDynamicComponent.prototype.defaultOptions;
    /** @type {?} */
    FilterDynamicComponent.prototype.searchQuery;
    /** @type {?} */
    FilterDynamicComponent.prototype.selected;
    /** @type {?} */
    FilterDynamicComponent.prototype.showTypeahead;
    /** @type {?} */
    FilterDynamicComponent.prototype.typeaheadItems;
}
/**
 * @record
 */
export function FilterDynamicListConfig() { }
function FilterDynamicListConfig_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    FilterDynamicListConfig.prototype.placeholder;
    /** @type {?|undefined} */
    FilterDynamicListConfig.prototype.minCharacters;
    /** @type {?|undefined} */
    FilterDynamicListConfig.prototype.maxResults;
    /** @type {?|undefined} */
    FilterDynamicListConfig.prototype.maxIndividualItems;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWR5bmFtaWMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmlsdGVycy9maWx0ZXItZHluYW1pYy9maWx0ZXItZHluYW1pYy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUU3RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQWtEM0UsTUFBTSw2QkFBOEIsU0FBUSxtQkFBbUI7Ozs4QkFRakI7WUFDdEMsV0FBVyxFQUFFLEVBQUU7WUFDZixhQUFhLEVBQUUsQ0FBQztTQUNuQjs2QkFHd0IsSUFBSTs4QkFDRixFQUFFOzs7OztJQUU3QixRQUFRO1FBQ0osTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDcEY7Ozs7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXRDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDaEgsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7U0FDOUI7S0FDSjs7Ozs7SUFFRCxZQUFZLENBQUMsZUFBK0I7UUFDeEMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLHFCQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xGLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ3hCOzs7OztJQUVELFFBQVEsQ0FBQyxLQUFpQjtRQUV0QixxQkFBSSxNQUFNLHFCQUFHLEtBQUssQ0FBQyxNQUFxQixDQUFBLENBQUM7UUFDekMscUJBQUksWUFBWSxHQUFHLElBQUksQ0FBQztRQUV4QixPQUFPLE1BQU0sSUFBSSxNQUFNLENBQUMsUUFBUSxLQUFLLE1BQU0sRUFBRSxDQUFDO1lBQzFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqRCxZQUFZLEdBQUcsS0FBSyxDQUFDO2dCQUNyQixLQUFLLENBQUM7YUFDVDtZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLE1BQU0sR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO2FBQ2pDO1NBQ0o7UUFFRCxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7WUFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN4QjtLQUVKOzs7O0lBRUQsWUFBWTtRQUNSLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDakMsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ2hDO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7S0FDekI7Ozs7O0lBRUQsWUFBWSxDQUFDLE1BQWM7UUFDdkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ2pDOzs7WUF2SEosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXdDUDtnQkFDSCxJQUFJLEVBQUU7b0JBQ0Ysa0JBQWtCLEVBQUUsa0JBQWtCO2lCQUN6QzthQUNKOzs7O3dCQUdJLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3lCQUVMLFNBQVMsU0FBQyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQnNEcm9wZG93bkRpcmVjdGl2ZSB9IGZyb20gJ25neC1ib290c3RyYXAvZHJvcGRvd24nO1xyXG5pbXBvcnQgeyBUeXBlYWhlYWRNYXRjaCB9IGZyb20gJ25neC1ib290c3RyYXAvdHlwZWFoZWFkJztcclxuaW1wb3J0IHsgRmlsdGVyQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uL2ZpbHRlci1iYXNlL2ZpbHRlci1iYXNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZpbHRlciB9IGZyb20gJy4uL2ZpbHRlci1jb250YWluZXIuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd1eC1maWx0ZXItZHluYW1pYycsXHJcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgdXgtZHluYW1pYy1maWx0ZXJcIiBkcm9wZG93biAjZHluYW1pY0Ryb3Bkb3duPVwiYnMtZHJvcGRvd25cIj5cclxuICAgIDxidXR0b24gKGNsaWNrKT1cImR5bmFtaWNEcm9wZG93bi5zaG93KClcIiB0eXBlPVwiYnV0dG9uXCIgW2NsYXNzLmFjdGl2ZV09XCJzZWxlY3RlZCAhPT0gaW5pdGlhbFwiIGNsYXNzPVwiZmlsdGVyLWRyb3Bkb3duIGJ0biBkcm9wZG93bi10b2dnbGVcIj57eyBzZWxlY3RlZD8udGl0bGUgfX0gXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJocGUtaWNvbiBocGUtZG93blwiPjwvc3Bhbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPHVsICpkcm9wZG93bk1lbnUgY2xhc3M9XCJkcm9wZG93bi1tZW51XCIgcm9sZT1cIm1lbnVcIj5cclxuXHJcbiAgICAgICAgPGxpIGNsYXNzPVwiZHJvcGRvd24tbGlzdC1pdGVtXCIgKm5nSWY9XCJzaG93VHlwZWFoZWFkXCIgcm9sZT1cIm1lbnVpdGVtXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIChjbGljayk9XCJyZW1vdmVGaWx0ZXIoKTsgZHluYW1pY0Ryb3Bkb3duLmhpZGUoKTtcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiaHBlLWljb25cIiBbY2xhc3MuaHBlLWNoZWNrbWFya109XCJpbml0aWFsID09PSBzZWxlY3RlZFwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmlsdGVyLWRyb3Bkb3duLXRpdGxlXCI+e3sgaW5pdGlhbC5uYW1lIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgPGxpIGNsYXNzPVwiZHJvcGRvd24tbGlzdC1pdGVtXCIgKm5nSWY9XCJzZWxlY3RlZCAhPT0gaW5pdGlhbCAmJiBzaG93VHlwZWFoZWFkXCIgcm9sZT1cIm1lbnVpdGVtXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJocGUtaWNvbiBocGUtY2hlY2ttYXJrXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmaWx0ZXItZHJvcGRvd24tdGl0bGVcIj57eyBzZWxlY3RlZC5uYW1lIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgPGhyPlxyXG5cclxuICAgICAgICA8bGkgKm5nSWY9XCJzaG93VHlwZWFoZWFkXCIgY2xhc3M9XCJ0eXBlYWhlYWQtYm94XCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCBbKG5nTW9kZWwpXT1cInNlYXJjaFF1ZXJ5XCIgW3R5cGVhaGVhZF09XCJ0eXBlYWhlYWRJdGVtc1wiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgXHJcbiAgICAgICAgICAgICh0eXBlYWhlYWRPblNlbGVjdCk9XCJzZWxlY3RPcHRpb24oJGV2ZW50KVwiIFxyXG4gICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwib3B0aW9ucz8ucGxhY2Vob2xkZXIgfHwgZGVmYXVsdE9wdGlvbnMucGxhY2Vob2xkZXJcIlxyXG4gICAgICAgICAgICBbdHlwZWFoZWFkTWluTGVuZ3RoXT1cIm9wdGlvbnM/Lm1pbkNoYXJhY3RlcnMgfHwgZGVmYXVsdE9wdGlvbnMubWluQ2hhcmFjdGVyc1wiXHJcbiAgICAgICAgICAgIFt0eXBlYWhlYWRPcHRpb25zTGltaXRdPVwib3B0aW9ucz8ubWF4UmVzdWx0c1wiPlxyXG4gICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgIDxzcGFuICpuZ0lmPVwiIXNob3dUeXBlYWhlYWRcIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZHJvcGRvd24tbGlzdC1pdGVtXCIgKm5nRm9yPVwibGV0IGZpbHRlciBvZiBmaWx0ZXJzXCIgcm9sZT1cIm1lbnVpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiAoY2xpY2spPVwic2VsZWN0RmlsdGVyKGZpbHRlcilcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImhwZS1pY29uXCIgW2NsYXNzLmhwZS1jaGVja21hcmtdPVwiZmlsdGVyID09PSBzZWxlY3RlZFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZpbHRlci1kcm9wZG93bi10aXRsZVwiPnt7IGZpbHRlci5uYW1lIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICA8L3VsPlxyXG48L2Rpdj5gLFxyXG4gICAgaG9zdDoge1xyXG4gICAgICAgICcoZG9jdW1lbnQ6Y2xpY2spJzogJ2NsaWNrT2ZmKCRldmVudCknLFxyXG4gICAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmlsdGVyRHluYW1pY0NvbXBvbmVudCBleHRlbmRzIEZpbHRlckJhc2VDb21wb25lbnQge1xyXG5cclxuICAgIEBJbnB1dCgpIGZpbHRlcnM6IEZpbHRlcltdO1xyXG4gICAgQElucHV0KCkgaW5pdGlhbDogRmlsdGVyO1xyXG4gICAgQElucHV0KCkgb3B0aW9uczogRmlsdGVyRHluYW1pY0xpc3RDb25maWc7XHJcblxyXG4gICAgQFZpZXdDaGlsZChCc0Ryb3Bkb3duRGlyZWN0aXZlKSBkcm9wZG93bjogQnNEcm9wZG93bkRpcmVjdGl2ZTtcclxuXHJcbiAgICBkZWZhdWx0T3B0aW9uczogRmlsdGVyRHluYW1pY0xpc3RDb25maWcgPSB7XHJcbiAgICAgICAgcGxhY2Vob2xkZXI6ICcnLFxyXG4gICAgICAgIG1pbkNoYXJhY3RlcnM6IDNcclxuICAgIH07XHJcbiAgICBzZWFyY2hRdWVyeTogc3RyaW5nO1xyXG4gICAgc2VsZWN0ZWQ6IEZpbHRlcjtcclxuICAgIHNob3dUeXBlYWhlYWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgdHlwZWFoZWFkSXRlbXM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgZ2V0SXRlbXMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpbHRlcnMuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gdGhpcy5pbml0aWFsKS5tYXAoaXRlbSA9PiBpdGVtLm5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLmluaXRpYWw7XHJcbiAgICAgICAgdGhpcy50eXBlYWhlYWRJdGVtcyA9IHRoaXMuZ2V0SXRlbXMoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMubWF4SW5kaXZpZHVhbEl0ZW1zICYmIHRoaXMub3B0aW9ucy5tYXhJbmRpdmlkdWFsSXRlbXMgKyAxID49IHRoaXMuZmlsdGVycy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93VHlwZWFoZWFkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdE9wdGlvbih0eXBlYWhlYWRPcHRpb246IFR5cGVhaGVhZE1hdGNoKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVGaWx0ZXIoKTtcclxuICAgICAgICBsZXQgaWR4ID0gdGhpcy5maWx0ZXJzLmZpbmRJbmRleChmaWx0ZXIgPT4gZmlsdGVyLm5hbWUgPT09IHR5cGVhaGVhZE9wdGlvbi52YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuZmlsdGVyc1tpZHhdO1xyXG4gICAgICAgIHRoaXMuYWRkRmlsdGVyKHRoaXMuc2VsZWN0ZWQpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoUXVlcnkgPSAnJztcclxuICAgICAgICB0aGlzLmRyb3Bkb3duLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGlja09mZihldmVudDogTW91c2VFdmVudCkge1xyXG5cclxuICAgICAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIGxldCBoaWRlRHJvcGRvd24gPSB0cnVlO1xyXG5cclxuICAgICAgICB3aGlsZSAodGFyZ2V0ICYmIHRhcmdldC5ub2RlTmFtZSAhPT0gJ0JPRFknKSB7XHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd1eC1keW5hbWljLWZpbHRlcicpKSB7XHJcbiAgICAgICAgICAgICAgICBoaWRlRHJvcGRvd24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChoaWRlRHJvcGRvd24pIHtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hRdWVyeSA9ICcnO1xyXG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duLmhpZGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUZpbHRlcigpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCAhPT0gdGhpcy5pbml0aWFsKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLnJlbW92ZUZpbHRlcih0aGlzLnNlbGVjdGVkKTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuaW5pdGlhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZWFyY2hRdWVyeSA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdEZpbHRlcihmaWx0ZXI6IEZpbHRlcikge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlRmlsdGVyKCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IGZpbHRlcjtcclxuICAgICAgICB0aGlzLmFkZEZpbHRlcih0aGlzLnNlbGVjdGVkKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmlsdGVyRHluYW1pY0xpc3RDb25maWcge1xyXG4gICAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XHJcbiAgICBtaW5DaGFyYWN0ZXJzPzogbnVtYmVyO1xyXG4gICAgbWF4UmVzdWx0cz86IG51bWJlcjtcclxuICAgIG1heEluZGl2aWR1YWxJdGVtcz86IG51bWJlcjtcclxufSJdfQ==