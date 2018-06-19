/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { FilterBaseComponent } from '../filter-base/filter-base.component';
var FilterDropdownComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FilterDropdownComponent, _super);
    function FilterDropdownComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    FilterDropdownComponent.prototype.removeFilter = /**
     * @return {?}
     */
    function () {
        _super.prototype.removeFilter.call(this, this.selected);
        this.selected = this.initial;
    };
    /**
     * @return {?}
     */
    FilterDropdownComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.selected = this.initial;
    };
    /**
     * @param {?} filter
     * @return {?}
     */
    FilterDropdownComponent.prototype.selectFilter = /**
     * @param {?} filter
     * @return {?}
     */
    function (filter) {
        this.removeFilter();
        this.selected = filter;
        this.addFilter(this.selected);
    };
    FilterDropdownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-filter-dropdown',
                    template: "<div class=\"btn-group\" dropdown>\n    <button dropdownToggle type=\"button\" class=\"filter-dropdown btn dropdown-toggle\" [class.active]=\"selected !== initial\">{{ selected?.title }} \n        <span class=\"hpe-icon hpe-down\"></span>\n    </button>\n    <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n        <li class=\"dropdown-list-item\" *ngFor=\"let filter of filters\" role=\"menuitem\">\n            <a class=\"dropdown-item\" (click)=\"selectFilter(filter)\">\n                <i class=\"hpe-icon\" [class.hpe-checkmark]=\"filter === selected\"></i>\n                <span class=\"filter-dropdown-title\">{{ filter.name }}</span>\n            </a>\n        </li>\n    </ul>\n</div>",
                },] },
    ];
    /** @nocollapse */
    FilterDropdownComponent.propDecorators = {
        "initial": [{ type: Input },],
    };
    return FilterDropdownComponent;
}(FilterBaseComponent));
export { FilterDropdownComponent };
function FilterDropdownComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FilterDropdownComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FilterDropdownComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    FilterDropdownComponent.propDecorators;
    /** @type {?} */
    FilterDropdownComponent.prototype.initial;
    /** @type {?} */
    FilterDropdownComponent.prototype.selected;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWRyb3Bkb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVyLWRyb3Bkb3duL2ZpbHRlci1kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7SUFtQjlCLG1EQUFtQjs7Ozs7OztJQU01RCw4Q0FBWTs7O0lBQVo7UUFDSSxpQkFBTSxZQUFZLFlBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztLQUNoQzs7OztJQUVELDBDQUFROzs7SUFBUjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztLQUNoQzs7Ozs7SUFFRCw4Q0FBWTs7OztJQUFaLFVBQWEsTUFBYztRQUN2QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDakM7O2dCQW5DSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsUUFBUSxFQUFFLG1zQkFZUDtpQkFDTjs7Ozs0QkFHSSxLQUFLOztrQ0F0QlY7RUFvQjZDLG1CQUFtQjtTQUFuRCx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpbHRlckJhc2VDb21wb25lbnQgfSBmcm9tICcuLi9maWx0ZXItYmFzZS9maWx0ZXItYmFzZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGaWx0ZXIgfSBmcm9tICcuLi9maWx0ZXItY29udGFpbmVyLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndXgtZmlsdGVyLWRyb3Bkb3duJyxcclxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImJ0bi1ncm91cFwiIGRyb3Bkb3duPlxyXG4gICAgPGJ1dHRvbiBkcm9wZG93blRvZ2dsZSB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJmaWx0ZXItZHJvcGRvd24gYnRuIGRyb3Bkb3duLXRvZ2dsZVwiIFtjbGFzcy5hY3RpdmVdPVwic2VsZWN0ZWQgIT09IGluaXRpYWxcIj57eyBzZWxlY3RlZD8udGl0bGUgfX0gXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJocGUtaWNvbiBocGUtZG93blwiPjwvc3Bhbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPHVsICpkcm9wZG93bk1lbnUgY2xhc3M9XCJkcm9wZG93bi1tZW51XCIgcm9sZT1cIm1lbnVcIj5cclxuICAgICAgICA8bGkgY2xhc3M9XCJkcm9wZG93bi1saXN0LWl0ZW1cIiAqbmdGb3I9XCJsZXQgZmlsdGVyIG9mIGZpbHRlcnNcIiByb2xlPVwibWVudWl0ZW1cIj5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgKGNsaWNrKT1cInNlbGVjdEZpbHRlcihmaWx0ZXIpXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImhwZS1pY29uXCIgW2NsYXNzLmhwZS1jaGVja21hcmtdPVwiZmlsdGVyID09PSBzZWxlY3RlZFwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmlsdGVyLWRyb3Bkb3duLXRpdGxlXCI+e3sgZmlsdGVyLm5hbWUgfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2xpPlxyXG4gICAgPC91bD5cclxuPC9kaXY+YCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZpbHRlckRyb3Bkb3duQ29tcG9uZW50IGV4dGVuZHMgRmlsdGVyQmFzZUNvbXBvbmVudCB7XHJcblxyXG4gICAgQElucHV0KCkgaW5pdGlhbDogRmlsdGVyO1xyXG5cclxuICAgIHNlbGVjdGVkOiBGaWx0ZXI7XHJcblxyXG4gICAgcmVtb3ZlRmlsdGVyKCk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLnJlbW92ZUZpbHRlcih0aGlzLnNlbGVjdGVkKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5pbml0aWFsO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLmluaXRpYWw7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0RmlsdGVyKGZpbHRlcjogRmlsdGVyKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVGaWx0ZXIoKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gZmlsdGVyO1xyXG4gICAgICAgIHRoaXMuYWRkRmlsdGVyKHRoaXMuc2VsZWN0ZWQpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==