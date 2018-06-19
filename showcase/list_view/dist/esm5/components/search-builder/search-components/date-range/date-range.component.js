/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { BaseSearchComponent } from '../base-search.component';
var SearchDateRangeComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SearchDateRangeComponent, _super);
    function SearchDateRangeComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'date-range';
        return _this;
    }
    Object.defineProperty(SearchDateRangeComponent.prototype, "label", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.label;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchDateRangeComponent.prototype, "from", {
        get: /**
         * @return {?}
         */
        function () {
            // if value does not exist the set it
            if (!this.value || !this.value.from) {
                this.from = new Date();
            }
            // ensure that the from value is a date object
            if (this.value.from instanceof Date === false) {
                this.value.from = new Date(this.value.from);
            }
            return this.value.from;
        },
        set: /**
         * @param {?} fromValue
         * @return {?}
         */
        function (fromValue) {
            // create new object based on the current value
            var /** @type {?} */ value = Object.assign({}, this.value);
            // ensure that the from value is a date
            if (fromValue instanceof Date === false) {
                fromValue = new Date(fromValue);
            }
            // set the latest value
            value.from = fromValue;
            // update the value object while ensuring immutability
            this.value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchDateRangeComponent.prototype, "to", {
        get: /**
         * @return {?}
         */
        function () {
            // if value does not exist the set it
            if (!this.value || !this.value.to) {
                this.to = new Date();
            }
            // ensure that the to value is a date object
            if (this.value.to instanceof Date === false) {
                this.value.to = new Date(this.value.to);
            }
            return this.value.to;
        },
        set: /**
         * @param {?} toValue
         * @return {?}
         */
        function (toValue) {
            // create new object based on the current value
            var /** @type {?} */ value = Object.assign({}, this.value);
            // ensure that the to value is a date
            if (toValue instanceof Date === false) {
                toValue = new Date(toValue);
            }
            // set the latest value
            value.to = toValue;
            // update the value object while ensuring immutability
            this.value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchDateRangeComponent.prototype, "fromLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.fromLabel || 'From';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchDateRangeComponent.prototype, "toLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.toLabel || 'To';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchDateRangeComponent.prototype, "fromPlaceholder", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.fromPlaceholder;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchDateRangeComponent.prototype, "toPlaceholder", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.toPlaceholder;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Override the default validation
     */
    /**
     * Override the default validation
     * @return {?}
     */
    SearchDateRangeComponent.prototype.validate = /**
     * Override the default validation
     * @return {?}
     */
    function () {
        // check if there is a config validation function
        if (this.config.validation) {
            return _super.prototype.validate.call(this);
        }
        // create copies of the dates so we can modify time value (to ignore it)
        var /** @type {?} */ from = new Date(this.value.from);
        var /** @type {?} */ to = new Date(this.value.to);
        // set the time to the same so we dont compare it
        from.setHours(0, 0, 0, 0);
        to.setHours(0, 0, 0, 0);
        // valid if the from date is less than or equal to the to date
        this.valid = from <= to;
    };
    SearchDateRangeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-search-date-range',
                    template: "<label class=\"form-label\" *ngIf=\"label\">{{ label }}</label>\n\n<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <div class=\"form-inline\" [class.has-error]=\"!valid\">\n\n            <div class=\"form-group p-r-md\">\n                <label class=\"form-label m-r-xs\">{{ fromLabel }}</label>\n\n                <div class=\"input-group date m-nil\">\n                    <span class=\"input-group-addon p-r-xs\" tabindex=\"1\" (click)=\"fromPopover.show()\">\n                        <i class=\"hpe-icon hpe-calendar\" aria-hidden=\"true\"></i>\n                    </span>\n                    <input type=\"text\" #fromPopover=\"ux-popover\" [ngModel]=\"from | date:'dd MMMM yyyy'\" [uxPopover]=\"fromPopoverTemplate\" placement=\"bottom\"\n                        popoverClass=\"date-time-picker-popover\" class=\"form-control\" aria-label=\"Selected date\" [placeholder]=\"fromPlaceholder\">\n                </div>\n            </div>\n\n            <div class=\"form-group p-r-xs\">\n                <label class=\"form-label m-r-xs\">{{ toLabel }}</label>\n\n                <div class=\"input-group date m-nil\">\n                    <span class=\"input-group-addon\" tabindex=\"1\" (click)=\"toPopover.show()\">\n                        <i class=\"hpe-icon hpe-calendar\" aria-hidden=\"true\"></i>\n                    </span>\n                    <input type=\"text\" #toPopover=\"ux-popover\" [ngModel]=\"to | date:'dd MMMM yyyy'\" [uxPopover]=\"toPopoverTemplate\" placement=\"bottom\"\n                        popoverClass=\"date-time-picker-popover\" class=\"form-control\" aria-label=\"Selected date\" [placeholder]=\"toPlaceholder\">\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n\n<ng-template #fromPopoverTemplate>\n    <ux-date-time-picker [(date)]=\"from\" [showTime]=\"false\"></ux-date-time-picker>\n</ng-template>\n\n<ng-template #toPopoverTemplate>\n    <ux-date-time-picker [(date)]=\"to\" [showTime]=\"false\"></ux-date-time-picker>\n</ng-template>"
                },] },
    ];
    return SearchDateRangeComponent;
}(BaseSearchComponent));
export { SearchDateRangeComponent };
function SearchDateRangeComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SearchDateRangeComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SearchDateRangeComponent.ctorParameters;
    /** @type {?} */
    SearchDateRangeComponent.prototype.type;
}
/**
 * @record
 */
export function SearchDateRangeConfig() { }
function SearchDateRangeConfig_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    SearchDateRangeConfig.prototype.label;
    /** @type {?|undefined} */
    SearchDateRangeConfig.prototype.fromLabel;
    /** @type {?|undefined} */
    SearchDateRangeConfig.prototype.toLabel;
    /** @type {?|undefined} */
    SearchDateRangeConfig.prototype.fromPlaceholder;
    /** @type {?|undefined} */
    SearchDateRangeConfig.prototype.toPlaceholder;
    /** @type {?} */
    SearchDateRangeConfig.prototype.validation;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9zZWFyY2gtYnVpbGRlci9zZWFyY2gtY29tcG9uZW50cy9kYXRlLXJhbmdlL2RhdGUtcmFuZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7SUE4Q2pCLG9EQUFtQjs7O3FCQUU5QyxZQUFZOzs7SUFFM0Isc0JBQUksMkNBQUs7Ozs7UUFBVDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUM1Qjs7O09BQUE7SUFFRCxzQkFBSSwwQ0FBSTs7OztRQUFSOztZQUdJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDbEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO2FBQzFCOztZQUdELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxZQUFZLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUM1QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQy9DO1lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1NBQzFCOzs7OztRQUVELFVBQVMsU0FBYzs7WUFHbkIscUJBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FB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ZDs7bUNBOUNEO0VBK0M4QyxtQkFBbUI7U0FBcEQsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJhc2VTZWFyY2hDb21wb25lbnQgfSBmcm9tICcuLi9iYXNlLXNlYXJjaC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3V4LXNlYXJjaC1kYXRlLXJhbmdlJyxcclxuICAgIHRlbXBsYXRlOiBgPGxhYmVsIGNsYXNzPVwiZm9ybS1sYWJlbFwiICpuZ0lmPVwibGFiZWxcIj57eyBsYWJlbCB9fTwvbGFiZWw+XHJcblxyXG48ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0taW5saW5lXCIgW2NsYXNzLmhhcy1lcnJvcl09XCIhdmFsaWRcIj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHAtci1tZFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1sYWJlbCBtLXIteHNcIj57eyBmcm9tTGFiZWwgfX08L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBkYXRlIG0tbmlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvbiBwLXIteHNcIiB0YWJpbmRleD1cIjFcIiAoY2xpY2spPVwiZnJvbVBvcG92ZXIuc2hvdygpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiaHBlLWljb24gaHBlLWNhbGVuZGFyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjZnJvbVBvcG92ZXI9XCJ1eC1wb3BvdmVyXCIgW25nTW9kZWxdPVwiZnJvbSB8IGRhdGU6J2RkIE1NTU0geXl5eSdcIiBbdXhQb3BvdmVyXT1cImZyb21Qb3BvdmVyVGVtcGxhdGVcIiBwbGFjZW1lbnQ9XCJib3R0b21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3BvdmVyQ2xhc3M9XCJkYXRlLXRpbWUtcGlja2VyLXBvcG92ZXJcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGFyaWEtbGFiZWw9XCJTZWxlY3RlZCBkYXRlXCIgW3BsYWNlaG9sZGVyXT1cImZyb21QbGFjZWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcC1yLXhzXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWxhYmVsIG0tci14c1wiPnt7IHRvTGFiZWwgfX08L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBkYXRlIG0tbmlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiIHRhYmluZGV4PVwiMVwiIChjbGljayk9XCJ0b1BvcG92ZXIuc2hvdygpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiaHBlLWljb24gaHBlLWNhbGVuZGFyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjdG9Qb3BvdmVyPVwidXgtcG9wb3ZlclwiIFtuZ01vZGVsXT1cInRvIHwgZGF0ZTonZGQgTU1NTSB5eXl5J1wiIFt1eFBvcG92ZXJdPVwidG9Qb3BvdmVyVGVtcGxhdGVcIiBwbGFjZW1lbnQ9XCJib3R0b21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3BvdmVyQ2xhc3M9XCJkYXRlLXRpbWUtcGlja2VyLXBvcG92ZXJcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGFyaWEtbGFiZWw9XCJTZWxlY3RlZCBkYXRlXCIgW3BsYWNlaG9sZGVyXT1cInRvUGxhY2Vob2xkZXJcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48bmctdGVtcGxhdGUgI2Zyb21Qb3BvdmVyVGVtcGxhdGU+XHJcbiAgICA8dXgtZGF0ZS10aW1lLXBpY2tlciBbKGRhdGUpXT1cImZyb21cIiBbc2hvd1RpbWVdPVwiZmFsc2VcIj48L3V4LWRhdGUtdGltZS1waWNrZXI+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48bmctdGVtcGxhdGUgI3RvUG9wb3ZlclRlbXBsYXRlPlxyXG4gICAgPHV4LWRhdGUtdGltZS1waWNrZXIgWyhkYXRlKV09XCJ0b1wiIFtzaG93VGltZV09XCJmYWxzZVwiPjwvdXgtZGF0ZS10aW1lLXBpY2tlcj5cclxuPC9uZy10ZW1wbGF0ZT5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hEYXRlUmFuZ2VDb21wb25lbnQgZXh0ZW5kcyBCYXNlU2VhcmNoQ29tcG9uZW50IHtcclxuXHJcbiAgICB0eXBlOiBzdHJpbmcgPSAnZGF0ZS1yYW5nZSc7XHJcblxyXG4gICAgZ2V0IGxhYmVsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmxhYmVsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBmcm9tKCkge1xyXG5cclxuICAgICAgICAvLyBpZiB2YWx1ZSBkb2VzIG5vdCBleGlzdCB0aGUgc2V0IGl0XHJcbiAgICAgICAgaWYgKCF0aGlzLnZhbHVlIHx8ICF0aGlzLnZhbHVlLmZyb20pIHtcclxuICAgICAgICAgICAgdGhpcy5mcm9tID0gbmV3IERhdGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGVuc3VyZSB0aGF0IHRoZSBmcm9tIHZhbHVlIGlzIGEgZGF0ZSBvYmplY3RcclxuICAgICAgICBpZiAodGhpcy52YWx1ZS5mcm9tIGluc3RhbmNlb2YgRGF0ZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZS5mcm9tID0gbmV3IERhdGUodGhpcy52YWx1ZS5mcm9tKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlLmZyb207XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGZyb20oZnJvbVZhbHVlOiBhbnkpIHtcclxuXHJcbiAgICAgICAgLy8gY3JlYXRlIG5ldyBvYmplY3QgYmFzZWQgb24gdGhlIGN1cnJlbnQgdmFsdWVcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMudmFsdWUpO1xyXG5cclxuICAgICAgICAvLyBlbnN1cmUgdGhhdCB0aGUgZnJvbSB2YWx1ZSBpcyBhIGRhdGVcclxuICAgICAgICBpZiAoZnJvbVZhbHVlIGluc3RhbmNlb2YgRGF0ZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgZnJvbVZhbHVlID0gbmV3IERhdGUoZnJvbVZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNldCB0aGUgbGF0ZXN0IHZhbHVlXHJcbiAgICAgICAgdmFsdWUuZnJvbSA9IGZyb21WYWx1ZTtcclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIHRoZSB2YWx1ZSBvYmplY3Qgd2hpbGUgZW5zdXJpbmcgaW1tdXRhYmlsaXR5XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB0bygpIHtcclxuXHJcbiAgICAgICAgLy8gaWYgdmFsdWUgZG9lcyBub3QgZXhpc3QgdGhlIHNldCBpdFxyXG4gICAgICAgIGlmICghdGhpcy52YWx1ZSB8fCAhdGhpcy52YWx1ZS50bykge1xyXG4gICAgICAgICAgICB0aGlzLnRvID0gbmV3IERhdGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGVuc3VyZSB0aGF0IHRoZSB0byB2YWx1ZSBpcyBhIGRhdGUgb2JqZWN0XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWUudG8gaW5zdGFuY2VvZiBEYXRlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlLnRvID0gbmV3IERhdGUodGhpcy52YWx1ZS50byk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS50bztcclxuICAgIH1cclxuXHJcbiAgICBzZXQgdG8odG9WYWx1ZTogYW55KSB7XHJcblxyXG4gICAgICAgIC8vIGNyZWF0ZSBuZXcgb2JqZWN0IGJhc2VkIG9uIHRoZSBjdXJyZW50IHZhbHVlXHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnZhbHVlKTtcclxuXHJcbiAgICAgICAgLy8gZW5zdXJlIHRoYXQgdGhlIHRvIHZhbHVlIGlzIGEgZGF0ZVxyXG4gICAgICAgIGlmICh0b1ZhbHVlIGluc3RhbmNlb2YgRGF0ZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdG9WYWx1ZSA9IG5ldyBEYXRlKHRvVmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc2V0IHRoZSBsYXRlc3QgdmFsdWVcclxuICAgICAgICB2YWx1ZS50byA9IHRvVmFsdWU7XHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgdmFsdWUgb2JqZWN0IHdoaWxlIGVuc3VyaW5nIGltbXV0YWJpbGl0eVxyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZnJvbUxhYmVsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLmZyb21MYWJlbCB8fCAnRnJvbSc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHRvTGFiZWwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcudG9MYWJlbCB8fCAnVG8nO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBmcm9tUGxhY2Vob2xkZXIoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuZnJvbVBsYWNlaG9sZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB0b1BsYWNlaG9sZGVyKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLnRvUGxhY2Vob2xkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPdmVycmlkZSB0aGUgZGVmYXVsdCB2YWxpZGF0aW9uXHJcbiAgICAgKi9cclxuICAgIHZhbGlkYXRlKCk6IHZvaWQge1xyXG5cclxuICAgICAgICAvLyBjaGVjayBpZiB0aGVyZSBpcyBhIGNvbmZpZyB2YWxpZGF0aW9uIGZ1bmN0aW9uXHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLnZhbGlkYXRpb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN1cGVyLnZhbGlkYXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjcmVhdGUgY29waWVzIG9mIHRoZSBkYXRlcyBzbyB3ZSBjYW4gbW9kaWZ5IHRpbWUgdmFsdWUgKHRvIGlnbm9yZSBpdClcclxuICAgICAgICBjb25zdCBmcm9tID0gbmV3IERhdGUodGhpcy52YWx1ZS5mcm9tKTtcclxuICAgICAgICBjb25zdCB0byA9IG5ldyBEYXRlKHRoaXMudmFsdWUudG8pO1xyXG5cclxuICAgICAgICAvLyBzZXQgdGhlIHRpbWUgdG8gdGhlIHNhbWUgc28gd2UgZG9udCBjb21wYXJlIGl0XHJcbiAgICAgICAgZnJvbS5zZXRIb3VycygwLCAwLCAwLCAwKTtcclxuICAgICAgICB0by5zZXRIb3VycygwLCAwLCAwLCAwKTtcclxuXHJcbiAgICAgICAgLy8gdmFsaWQgaWYgdGhlIGZyb20gZGF0ZSBpcyBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gdGhlIHRvIGRhdGVcclxuICAgICAgICB0aGlzLnZhbGlkID0gZnJvbSA8PSB0bztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZWFyY2hEYXRlUmFuZ2VDb25maWcge1xyXG4gICAgbGFiZWw/OiBzdHJpbmc7XHJcbiAgICBmcm9tTGFiZWw/OiBzdHJpbmc7XHJcbiAgICB0b0xhYmVsPzogc3RyaW5nO1xyXG4gICAgZnJvbVBsYWNlaG9sZGVyPzogc3RyaW5nO1xyXG4gICAgdG9QbGFjZWhvbGRlcj86IHN0cmluZztcclxuICAgIHZhbGlkYXRpb246ICh2YWx1ZTogYW55KSA9PiBib29sZWFuO1xyXG59Il19