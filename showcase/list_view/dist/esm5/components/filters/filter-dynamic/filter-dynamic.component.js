/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ViewChild } from '@angular/core';
import { BsDropdownDirective } from 'ngx-bootstrap/dropdown';
import { FilterBaseComponent } from '../filter-base/filter-base.component';
var FilterDynamicComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FilterDynamicComponent, _super);
    function FilterDynamicComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultOptions = {
            placeholder: '',
            minCharacters: 3
        };
        _this.showTypeahead = true;
        _this.typeaheadItems = [];
        return _this;
    }
    /**
     * @return {?}
     */
    FilterDynamicComponent.prototype.getItems = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.filters.filter(function (item) { return item !== _this.initial; }).map(function (item) { return item.name; });
    };
    /**
     * @return {?}
     */
    FilterDynamicComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.selected = this.initial;
        this.typeaheadItems = this.getItems();
        if (this.options && this.options.maxIndividualItems && this.options.maxIndividualItems + 1 >= this.filters.length) {
            this.showTypeahead = false;
        }
    };
    /**
     * @param {?} typeaheadOption
     * @return {?}
     */
    FilterDynamicComponent.prototype.selectOption = /**
     * @param {?} typeaheadOption
     * @return {?}
     */
    function (typeaheadOption) {
        this.removeFilter();
        var /** @type {?} */ idx = this.filters.findIndex(function (filter) { return filter.name === typeaheadOption.value; });
        this.selected = this.filters[idx];
        this.addFilter(this.selected);
        this.searchQuery = '';
        this.dropdown.hide();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FilterDynamicComponent.prototype.clickOff = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var /** @type {?} */ target = /** @type {?} */ (event.target);
        var /** @type {?} */ hideDropdown = true;
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
    };
    /**
     * @return {?}
     */
    FilterDynamicComponent.prototype.removeFilter = /**
     * @return {?}
     */
    function () {
        if (this.selected !== this.initial) {
            _super.prototype.removeFilter.call(this, this.selected);
            this.selected = this.initial;
        }
        this.searchQuery = '';
    };
    /**
     * @param {?} filter
     * @return {?}
     */
    FilterDynamicComponent.prototype.selectFilter = /**
     * @param {?} filter
     * @return {?}
     */
    function (filter) {
        this.removeFilter();
        this.selected = filter;
        this.addFilter(this.selected);
    };
    FilterDynamicComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-filter-dynamic',
                    template: "<div class=\"btn-group ux-dynamic-filter\" dropdown #dynamicDropdown=\"bs-dropdown\">\n    <button (click)=\"dynamicDropdown.show()\" type=\"button\" [class.active]=\"selected !== initial\" class=\"filter-dropdown btn dropdown-toggle\">{{ selected?.title }} \n        <span class=\"hpe-icon hpe-down\"></span>\n    </button>\n    <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n\n        <li class=\"dropdown-list-item\" *ngIf=\"showTypeahead\" role=\"menuitem\">\n            <a class=\"dropdown-item\" (click)=\"removeFilter(); dynamicDropdown.hide();\">\n                <i class=\"hpe-icon\" [class.hpe-checkmark]=\"initial === selected\"></i>\n                <span class=\"filter-dropdown-title\">{{ initial.name }}</span>\n            </a>\n        </li>\n\n        <li class=\"dropdown-list-item\" *ngIf=\"selected !== initial && showTypeahead\" role=\"menuitem\">\n            <a class=\"dropdown-item\">\n                <i class=\"hpe-icon hpe-checkmark\"></i>\n                <span class=\"filter-dropdown-title\">{{ selected.name }}</span>\n            </a>\n        </li>\n\n        <hr>\n\n        <li *ngIf=\"showTypeahead\" class=\"typeahead-box\">\n            <input [(ngModel)]=\"searchQuery\" [typeahead]=\"typeaheadItems\" class=\"form-control\" \n            (typeaheadOnSelect)=\"selectOption($event)\" \n            [placeholder]=\"options?.placeholder || defaultOptions.placeholder\"\n            [typeaheadMinLength]=\"options?.minCharacters || defaultOptions.minCharacters\"\n            [typeaheadOptionsLimit]=\"options?.maxResults\">\n        </li>\n\n        <span *ngIf=\"!showTypeahead\">\n            <li class=\"dropdown-list-item\" *ngFor=\"let filter of filters\" role=\"menuitem\">\n                <a class=\"dropdown-item\" (click)=\"selectFilter(filter)\">\n                    <i class=\"hpe-icon\" [class.hpe-checkmark]=\"filter === selected\"></i>\n                    <span class=\"filter-dropdown-title\">{{ filter.name }}</span>\n                </a>\n            </li>\n        </span>\n\n    </ul>\n</div>",
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
    return FilterDynamicComponent;
}(FilterBaseComponent));
export { FilterDynamicComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWR5bmFtaWMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmlsdGVycy9maWx0ZXItZHluYW1pYy9maWx0ZXItZHluYW1pYy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFN0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7O0lBa0QvQixrREFBbUI7OzsrQkFRakI7WUFDdEMsV0FBVyxFQUFFLEVBQUU7WUFDZixhQUFhLEVBQUUsQ0FBQztTQUNuQjs4QkFHd0IsSUFBSTsrQkFDRixFQUFFOzs7Ozs7SUFFN0IseUNBQVE7OztJQUFSO1FBQUEsaUJBRUM7UUFERyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLEtBQUssS0FBSSxDQUFDLE9BQU8sRUFBckIsQ0FBcUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxJQUFJLEVBQVQsQ0FBUyxDQUFDLENBQUM7S0FDcEY7Ozs7SUFFRCx5Q0FBUTs7O0lBQVI7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFdEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNoSCxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztTQUM5QjtLQUNKOzs7OztJQUVELDZDQUFZOzs7O0lBQVosVUFBYSxlQUErQjtRQUN4QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIscUJBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLElBQUksS0FBSyxlQUFlLENBQUMsS0FBSyxFQUFyQyxDQUFxQyxDQUFDLENBQUM7UUFDbEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDeEI7Ozs7O0lBRUQseUNBQVE7Ozs7SUFBUixVQUFTLEtBQWlCO1FBRXRCLHFCQUFJLE1BQU0scUJBQUcsS0FBSyxDQUFDLE1BQXFCLENBQUEsQ0FBQztRQUN6QyxxQkFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBRXhCLE9BQU8sTUFBTSxJQUFJLE1BQU0sQ0FBQyxRQUFRLEtBQUssTUFBTSxFQUFFLENBQUM7WUFDMUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pELFlBQVksR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLEtBQUssQ0FBQzthQUNUO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osTUFBTSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7YUFDakM7U0FDSjtRQUVELEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDZixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3hCO0tBRUo7Ozs7SUFFRCw2Q0FBWTs7O0lBQVo7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLGlCQUFNLFlBQVksWUFBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ2hDO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7S0FDekI7Ozs7O0lBRUQsNkNBQVk7Ozs7SUFBWixVQUFhLE1BQWM7UUFDdkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ2pDOztnQkF2SEosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFFBQVEsRUFBRSxvaEVBd0NQO29CQUNILElBQUksRUFBRTt3QkFDRixrQkFBa0IsRUFBRSxrQkFBa0I7cUJBQ3pDO2lCQUNKOzs7OzRCQUdJLEtBQUs7NEJBQ0wsS0FBSzs0QkFDTCxLQUFLOzZCQUVMLFNBQVMsU0FBQyxtQkFBbUI7O2lDQTNEbEM7RUFxRDRDLG1CQUFtQjtTQUFsRCxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQnNEcm9wZG93bkRpcmVjdGl2ZSB9IGZyb20gJ25neC1ib290c3RyYXAvZHJvcGRvd24nO1xyXG5pbXBvcnQgeyBUeXBlYWhlYWRNYXRjaCB9IGZyb20gJ25neC1ib290c3RyYXAvdHlwZWFoZWFkJztcclxuaW1wb3J0IHsgRmlsdGVyQmFzZUNvbXBvbmVudCB9IGZyb20gJy4uL2ZpbHRlci1iYXNlL2ZpbHRlci1iYXNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZpbHRlciB9IGZyb20gJy4uL2ZpbHRlci1jb250YWluZXIuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd1eC1maWx0ZXItZHluYW1pYycsXHJcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgdXgtZHluYW1pYy1maWx0ZXJcIiBkcm9wZG93biAjZHluYW1pY0Ryb3Bkb3duPVwiYnMtZHJvcGRvd25cIj5cclxuICAgIDxidXR0b24gKGNsaWNrKT1cImR5bmFtaWNEcm9wZG93bi5zaG93KClcIiB0eXBlPVwiYnV0dG9uXCIgW2NsYXNzLmFjdGl2ZV09XCJzZWxlY3RlZCAhPT0gaW5pdGlhbFwiIGNsYXNzPVwiZmlsdGVyLWRyb3Bkb3duIGJ0biBkcm9wZG93bi10b2dnbGVcIj57eyBzZWxlY3RlZD8udGl0bGUgfX0gXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJocGUtaWNvbiBocGUtZG93blwiPjwvc3Bhbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPHVsICpkcm9wZG93bk1lbnUgY2xhc3M9XCJkcm9wZG93bi1tZW51XCIgcm9sZT1cIm1lbnVcIj5cclxuXHJcbiAgICAgICAgPGxpIGNsYXNzPVwiZHJvcGRvd24tbGlzdC1pdGVtXCIgKm5nSWY9XCJzaG93VHlwZWFoZWFkXCIgcm9sZT1cIm1lbnVpdGVtXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIChjbGljayk9XCJyZW1vdmVGaWx0ZXIoKTsgZHluYW1pY0Ryb3Bkb3duLmhpZGUoKTtcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiaHBlLWljb25cIiBbY2xhc3MuaHBlLWNoZWNrbWFya109XCJpbml0aWFsID09PSBzZWxlY3RlZFwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmlsdGVyLWRyb3Bkb3duLXRpdGxlXCI+e3sgaW5pdGlhbC5uYW1lIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgPGxpIGNsYXNzPVwiZHJvcGRvd24tbGlzdC1pdGVtXCIgKm5nSWY9XCJzZWxlY3RlZCAhPT0gaW5pdGlhbCAmJiBzaG93VHlwZWFoZWFkXCIgcm9sZT1cIm1lbnVpdGVtXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJocGUtaWNvbiBocGUtY2hlY2ttYXJrXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmaWx0ZXItZHJvcGRvd24tdGl0bGVcIj57eyBzZWxlY3RlZC5uYW1lIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgPGhyPlxyXG5cclxuICAgICAgICA8bGkgKm5nSWY9XCJzaG93VHlwZWFoZWFkXCIgY2xhc3M9XCJ0eXBlYWhlYWQtYm94XCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCBbKG5nTW9kZWwpXT1cInNlYXJjaFF1ZXJ5XCIgW3R5cGVhaGVhZF09XCJ0eXBlYWhlYWRJdGVtc1wiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgXHJcbiAgICAgICAgICAgICh0eXBlYWhlYWRPblNlbGVjdCk9XCJzZWxlY3RPcHRpb24oJGV2ZW50KVwiIFxyXG4gICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwib3B0aW9ucz8ucGxhY2Vob2xkZXIgfHwgZGVmYXVsdE9wdGlvbnMucGxhY2Vob2xkZXJcIlxyXG4gICAgICAgICAgICBbdHlwZWFoZWFkTWluTGVuZ3RoXT1cIm9wdGlvbnM/Lm1pbkNoYXJhY3RlcnMgfHwgZGVmYXVsdE9wdGlvbnMubWluQ2hhcmFjdGVyc1wiXHJcbiAgICAgICAgICAgIFt0eXBlYWhlYWRPcHRpb25zTGltaXRdPVwib3B0aW9ucz8ubWF4UmVzdWx0c1wiPlxyXG4gICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgIDxzcGFuICpuZ0lmPVwiIXNob3dUeXBlYWhlYWRcIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZHJvcGRvd24tbGlzdC1pdGVtXCIgKm5nRm9yPVwibGV0IGZpbHRlciBvZiBmaWx0ZXJzXCIgcm9sZT1cIm1lbnVpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiAoY2xpY2spPVwic2VsZWN0RmlsdGVyKGZpbHRlcilcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImhwZS1pY29uXCIgW2NsYXNzLmhwZS1jaGVja21hcmtdPVwiZmlsdGVyID09PSBzZWxlY3RlZFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZpbHRlci1kcm9wZG93bi10aXRsZVwiPnt7IGZpbHRlci5uYW1lIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICA8L3VsPlxyXG48L2Rpdj5gLFxyXG4gICAgaG9zdDoge1xyXG4gICAgICAgICcoZG9jdW1lbnQ6Y2xpY2spJzogJ2NsaWNrT2ZmKCRldmVudCknLFxyXG4gICAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmlsdGVyRHluYW1pY0NvbXBvbmVudCBleHRlbmRzIEZpbHRlckJhc2VDb21wb25lbnQge1xyXG5cclxuICAgIEBJbnB1dCgpIGZpbHRlcnM6IEZpbHRlcltdO1xyXG4gICAgQElucHV0KCkgaW5pdGlhbDogRmlsdGVyO1xyXG4gICAgQElucHV0KCkgb3B0aW9uczogRmlsdGVyRHluYW1pY0xpc3RDb25maWc7XHJcblxyXG4gICAgQFZpZXdDaGlsZChCc0Ryb3Bkb3duRGlyZWN0aXZlKSBkcm9wZG93bjogQnNEcm9wZG93bkRpcmVjdGl2ZTtcclxuXHJcbiAgICBkZWZhdWx0T3B0aW9uczogRmlsdGVyRHluYW1pY0xpc3RDb25maWcgPSB7XHJcbiAgICAgICAgcGxhY2Vob2xkZXI6ICcnLFxyXG4gICAgICAgIG1pbkNoYXJhY3RlcnM6IDNcclxuICAgIH07XHJcbiAgICBzZWFyY2hRdWVyeTogc3RyaW5nO1xyXG4gICAgc2VsZWN0ZWQ6IEZpbHRlcjtcclxuICAgIHNob3dUeXBlYWhlYWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgdHlwZWFoZWFkSXRlbXM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgZ2V0SXRlbXMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpbHRlcnMuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gdGhpcy5pbml0aWFsKS5tYXAoaXRlbSA9PiBpdGVtLm5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLmluaXRpYWw7XHJcbiAgICAgICAgdGhpcy50eXBlYWhlYWRJdGVtcyA9IHRoaXMuZ2V0SXRlbXMoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMubWF4SW5kaXZpZHVhbEl0ZW1zICYmIHRoaXMub3B0aW9ucy5tYXhJbmRpdmlkdWFsSXRlbXMgKyAxID49IHRoaXMuZmlsdGVycy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93VHlwZWFoZWFkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdE9wdGlvbih0eXBlYWhlYWRPcHRpb246IFR5cGVhaGVhZE1hdGNoKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVGaWx0ZXIoKTtcclxuICAgICAgICBsZXQgaWR4ID0gdGhpcy5maWx0ZXJzLmZpbmRJbmRleChmaWx0ZXIgPT4gZmlsdGVyLm5hbWUgPT09IHR5cGVhaGVhZE9wdGlvbi52YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuZmlsdGVyc1tpZHhdO1xyXG4gICAgICAgIHRoaXMuYWRkRmlsdGVyKHRoaXMuc2VsZWN0ZWQpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoUXVlcnkgPSAnJztcclxuICAgICAgICB0aGlzLmRyb3Bkb3duLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGlja09mZihldmVudDogTW91c2VFdmVudCkge1xyXG5cclxuICAgICAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIGxldCBoaWRlRHJvcGRvd24gPSB0cnVlO1xyXG5cclxuICAgICAgICB3aGlsZSAodGFyZ2V0ICYmIHRhcmdldC5ub2RlTmFtZSAhPT0gJ0JPRFknKSB7XHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd1eC1keW5hbWljLWZpbHRlcicpKSB7XHJcbiAgICAgICAgICAgICAgICBoaWRlRHJvcGRvd24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChoaWRlRHJvcGRvd24pIHtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hRdWVyeSA9ICcnO1xyXG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duLmhpZGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUZpbHRlcigpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCAhPT0gdGhpcy5pbml0aWFsKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLnJlbW92ZUZpbHRlcih0aGlzLnNlbGVjdGVkKTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuaW5pdGlhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZWFyY2hRdWVyeSA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdEZpbHRlcihmaWx0ZXI6IEZpbHRlcikge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlRmlsdGVyKCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IGZpbHRlcjtcclxuICAgICAgICB0aGlzLmFkZEZpbHRlcih0aGlzLnNlbGVjdGVkKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmlsdGVyRHluYW1pY0xpc3RDb25maWcge1xyXG4gICAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XHJcbiAgICBtaW5DaGFyYWN0ZXJzPzogbnVtYmVyO1xyXG4gICAgbWF4UmVzdWx0cz86IG51bWJlcjtcclxuICAgIG1heEluZGl2aWR1YWxJdGVtcz86IG51bWJlcjtcclxufSJdfQ==