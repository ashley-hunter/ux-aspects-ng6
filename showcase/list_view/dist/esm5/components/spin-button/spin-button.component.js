/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export var /** @type {?} */ SPIN_BUTTON_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return SpinButtonComponent; }),
    multi: true
};
var SpinButtonComponent = /** @class */ (function () {
    function SpinButtonComponent() {
        this.type = 'text';
        this.placeholder = '';
        this.disabled = false;
        this.spinners = true;
        this.readOnly = true;
        this.scrolling = true;
        this.arrowkeys = true;
        this.valueChange = new EventEmitter();
        this.increment = new EventEmitter();
        this.decrement = new EventEmitter();
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
    }
    Object.defineProperty(SpinButtonComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._value = value;
            this.onChangeCallback(value);
            this.onTouchedCallback();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    SpinButtonComponent.prototype.scroll = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.scrolling) {
            return;
        }
        if (event.deltaY > 0) {
            this.triggerDecrement();
        }
        else {
            this.triggerIncrement();
        }
        event.preventDefault();
    };
    /**
     * @return {?}
     */
    SpinButtonComponent.prototype.triggerIncrement = /**
     * @return {?}
     */
    function () {
        if (!this.disabled) {
            this.increment.emit();
        }
    };
    /**
     * @return {?}
     */
    SpinButtonComponent.prototype.triggerDecrement = /**
     * @return {?}
     */
    function () {
        if (!this.disabled) {
            this.decrement.emit();
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SpinButtonComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SpinButtonComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeCallback = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SpinButtonComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchedCallback = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    SpinButtonComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
    SpinButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-spin-button',
                    template: "<button class=\"spin-button\"\n        *ngIf=\"spinners\"\n        tabindex=\"-1\"\n        [disabled]=\"disabled\"\n        [attr.aria-label]=\"incrementAriaLabel\"\n        [attr.aria-disabled]=\"disabled\"\n        (click)=\"triggerIncrement()\">\n\n  <span class=\"hpe-icon hpe-up\"></span>\n</button>\n\n<input [type]=\"type\"\n       role=\"spinbutton\"\n       [min]=\"min\"\n       [max]=\"max\"\n       [tabindex]=\"0\"\n       class=\"form-control\"\n       [placeholder]=\"placeholder\"\n       [readOnly]=\"readOnly\"\n       [disabled]=\"disabled\"\n       [attr.aria-label]=\"inputAriaLabel\"\n       [attr.aria-disabled]=\"disabled\"\n       [attr.aria-valuemin]=\"min\"\n       [attr.aria-valuenow]=\"value\"\n       [attr.aria-valuemax]=\"max\"\n       [attr.aria-readonly]=\"readOnly\"\n       [ngModel]=\"value\"\n       (ngModelChange)=\"valueChange.emit($event)\"\n       (wheel)=\"scroll($event)\"\n       (keydown.arrowup)=\"arrowkeys ? triggerIncrement() : null; $event.preventDefault()\"\n       (keydown.arrowdown)=\"arrowkeys ? triggerDecrement() : null; $event.preventDefault()\">\n\n<button class=\"spin-button\"\n        *ngIf=\"spinners\"\n        tabindex=\"-1\"\n        [disabled]=\"disabled\"\n        [attr.aria-label]=\"decrementAriaLabel\"\n        [attr.aria-disabled]=\"disabled\"\n        (click)=\"triggerDecrement()\">\n\n  <span class=\"hpe-icon hpe-down\"></span>\n</button>",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [SPIN_BUTTON_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    SpinButtonComponent.propDecorators = {
        "value": [{ type: Input },],
        "type": [{ type: Input },],
        "min": [{ type: Input },],
        "max": [{ type: Input },],
        "placeholder": [{ type: Input },],
        "disabled": [{ type: Input },],
        "spinners": [{ type: Input },],
        "readOnly": [{ type: Input },],
        "scrolling": [{ type: Input },],
        "arrowkeys": [{ type: Input },],
        "incrementAriaLabel": [{ type: Input },],
        "inputAriaLabel": [{ type: Input },],
        "decrementAriaLabel": [{ type: Input },],
        "valueChange": [{ type: Output },],
        "increment": [{ type: Output },],
        "decrement": [{ type: Output },],
    };
    return SpinButtonComponent;
}());
export { SpinButtonComponent };
function SpinButtonComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SpinButtonComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SpinButtonComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    SpinButtonComponent.propDecorators;
    /** @type {?} */
    SpinButtonComponent.prototype.type;
    /** @type {?} */
    SpinButtonComponent.prototype.min;
    /** @type {?} */
    SpinButtonComponent.prototype.max;
    /** @type {?} */
    SpinButtonComponent.prototype.placeholder;
    /** @type {?} */
    SpinButtonComponent.prototype.disabled;
    /** @type {?} */
    SpinButtonComponent.prototype.spinners;
    /** @type {?} */
    SpinButtonComponent.prototype.readOnly;
    /** @type {?} */
    SpinButtonComponent.prototype.scrolling;
    /** @type {?} */
    SpinButtonComponent.prototype.arrowkeys;
    /** @type {?} */
    SpinButtonComponent.prototype.incrementAriaLabel;
    /** @type {?} */
    SpinButtonComponent.prototype.inputAriaLabel;
    /** @type {?} */
    SpinButtonComponent.prototype.decrementAriaLabel;
    /** @type {?} */
    SpinButtonComponent.prototype.valueChange;
    /** @type {?} */
    SpinButtonComponent.prototype.increment;
    /** @type {?} */
    SpinButtonComponent.prototype.decrement;
    /** @type {?} */
    SpinButtonComponent.prototype.onTouchedCallback;
    /** @type {?} */
    SpinButtonComponent.prototype.onChangeCallback;
    /** @type {?} */
    SpinButtonComponent.prototype._value;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbi1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc3Bpbi1idXR0b24vc3Bpbi1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvSCxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsTUFBTSxDQUFDLHFCQUFNLDBCQUEwQixHQUFRO0lBQzNDLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsbUJBQW1CLEVBQW5CLENBQW1CLENBQUM7SUFDbEQsS0FBSyxFQUFFLElBQUk7Q0FDZCxDQUFDOzs7b0JBOEQwQixNQUFNOzJCQUdDLEVBQUU7d0JBQ0osS0FBSzt3QkFDTCxJQUFJO3dCQUNKLElBQUk7eUJBQ0gsSUFBSTt5QkFDSixJQUFJOzJCQU1WLElBQUksWUFBWSxFQUFPO3lCQUV6QixJQUFJLFlBQVksRUFBUTt5QkFDeEIsSUFBSSxZQUFZLEVBQVE7aUNBRWQsZUFBUztnQ0FDSixlQUFTOzswQkE5QmpDLHNDQUFLOzs7O1FBTWxCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDdEI7Ozs7O2tCQVJrQixLQUFVO1lBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzs7Ozs7Ozs7O0lBK0I3QixvQ0FBTTs7OztJQUFOLFVBQU8sS0FBaUI7UUFFcEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNsQixNQUFNLENBQUM7U0FDVjtRQUVELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUMzQjtRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDM0I7UUFFRCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7S0FDMUI7Ozs7SUFFRCw4Q0FBZ0I7OztJQUFoQjtRQUNJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN6QjtLQUNKOzs7O0lBRUQsOENBQWdCOzs7SUFBaEI7UUFDSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDekI7S0FDSjs7Ozs7SUFFRCx3Q0FBVTs7OztJQUFWLFVBQVcsS0FBVTtRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztLQUN0Qjs7Ozs7SUFFRCw4Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsRUFBb0I7UUFDakMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztLQUM5Qjs7Ozs7SUFFRCwrQ0FBaUI7Ozs7SUFBakIsVUFBa0IsRUFBYztRQUM1QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO0tBQy9COzs7OztJQUVELDhDQUFnQjs7OztJQUFoQixVQUFpQixVQUFtQjtRQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztLQUM5Qjs7Z0JBN0hKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsNjRDQXlDSjtvQkFDTixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO2lCQUMxQzs7OzswQkFHSSxLQUFLO3lCQVVMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO2dDQUNMLEtBQUs7NkJBQ0wsS0FBSzs2QkFDTCxLQUFLOzZCQUNMLEtBQUs7OEJBQ0wsS0FBSzs4QkFDTCxLQUFLO3VDQUVMLEtBQUs7bUNBQ0wsS0FBSzt1Q0FDTCxLQUFLO2dDQUVMLE1BQU07OEJBRU4sTUFBTTs4QkFDTixNQUFNOzs4QkF0Rlg7O1NBeURhLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNQSU5fQlVUVE9OX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XHJcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNwaW5CdXR0b25Db21wb25lbnQpLFxyXG4gICAgbXVsdGk6IHRydWVcclxufTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd1eC1zcGluLWJ1dHRvbicsXHJcbiAgICB0ZW1wbGF0ZTogYDxidXR0b24gY2xhc3M9XCJzcGluLWJ1dHRvblwiXHJcbiAgICAgICAgKm5nSWY9XCJzcGlubmVyc1wiXHJcbiAgICAgICAgdGFiaW5kZXg9XCItMVwiXHJcbiAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImluY3JlbWVudEFyaWFMYWJlbFwiXHJcbiAgICAgICAgW2F0dHIuYXJpYS1kaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgKGNsaWNrKT1cInRyaWdnZXJJbmNyZW1lbnQoKVwiPlxyXG5cclxuICA8c3BhbiBjbGFzcz1cImhwZS1pY29uIGhwZS11cFwiPjwvc3Bhbj5cclxuPC9idXR0b24+XHJcblxyXG48aW5wdXQgW3R5cGVdPVwidHlwZVwiXHJcbiAgICAgICByb2xlPVwic3BpbmJ1dHRvblwiXHJcbiAgICAgICBbbWluXT1cIm1pblwiXHJcbiAgICAgICBbbWF4XT1cIm1heFwiXHJcbiAgICAgICBbdGFiaW5kZXhdPVwiMFwiXHJcbiAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxyXG4gICAgICAgW3JlYWRPbmx5XT1cInJlYWRPbmx5XCJcclxuICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImlucHV0QXJpYUxhYmVsXCJcclxuICAgICAgIFthdHRyLmFyaWEtZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgW2F0dHIuYXJpYS12YWx1ZW1pbl09XCJtaW5cIlxyXG4gICAgICAgW2F0dHIuYXJpYS12YWx1ZW5vd109XCJ2YWx1ZVwiXHJcbiAgICAgICBbYXR0ci5hcmlhLXZhbHVlbWF4XT1cIm1heFwiXHJcbiAgICAgICBbYXR0ci5hcmlhLXJlYWRvbmx5XT1cInJlYWRPbmx5XCJcclxuICAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcclxuICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInZhbHVlQ2hhbmdlLmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgICAod2hlZWwpPVwic2Nyb2xsKCRldmVudClcIlxyXG4gICAgICAgKGtleWRvd24uYXJyb3d1cCk9XCJhcnJvd2tleXMgPyB0cmlnZ2VySW5jcmVtZW50KCkgOiBudWxsOyAkZXZlbnQucHJldmVudERlZmF1bHQoKVwiXHJcbiAgICAgICAoa2V5ZG93bi5hcnJvd2Rvd24pPVwiYXJyb3drZXlzID8gdHJpZ2dlckRlY3JlbWVudCgpIDogbnVsbDsgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIj5cclxuXHJcbjxidXR0b24gY2xhc3M9XCJzcGluLWJ1dHRvblwiXHJcbiAgICAgICAgKm5nSWY9XCJzcGlubmVyc1wiXHJcbiAgICAgICAgdGFiaW5kZXg9XCItMVwiXHJcbiAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImRlY3JlbWVudEFyaWFMYWJlbFwiXHJcbiAgICAgICAgW2F0dHIuYXJpYS1kaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgKGNsaWNrKT1cInRyaWdnZXJEZWNyZW1lbnQoKVwiPlxyXG5cclxuICA8c3BhbiBjbGFzcz1cImhwZS1pY29uIGhwZS1kb3duXCI+PC9zcGFuPlxyXG48L2J1dHRvbj5gLFxyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gICAgcHJvdmlkZXJzOiBbU1BJTl9CVVRUT05fVkFMVUVfQUNDRVNTT1JdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTcGluQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG5cclxuICAgIEBJbnB1dCgpIHNldCB2YWx1ZSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodmFsdWUpO1xyXG4gICAgICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdmFsdWUoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KCkgdHlwZTogc3RyaW5nID0gJ3RleHQnO1xyXG4gICAgQElucHV0KCkgbWluOiBudW1iZXI7XHJcbiAgICBASW5wdXQoKSBtYXg6IG51bWJlcjtcclxuICAgIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnJztcclxuICAgIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBzcGlubmVyczogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBASW5wdXQoKSByZWFkT25seTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBzY3JvbGxpbmc6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgQElucHV0KCkgYXJyb3drZXlzOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBASW5wdXQoKSBpbmNyZW1lbnRBcmlhTGFiZWw6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGlucHV0QXJpYUxhYmVsOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBkZWNyZW1lbnRBcmlhTGFiZWw6IHN0cmluZztcclxuXHJcbiAgICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgICBAT3V0cHV0KCkgaW5jcmVtZW50ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gICAgQE91dHB1dCgpIGRlY3JlbWVudCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgICBvblRvdWNoZWRDYWxsYmFjazogKCkgPT4gdm9pZCA9ICgpID0+IHsgfTtcclxuICAgIG9uQ2hhbmdlQ2FsbGJhY2s6IChfOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7IH07XHJcblxyXG4gICAgcHJpdmF0ZSBfdmFsdWU6IGFueTtcclxuXHJcbiAgICBzY3JvbGwoZXZlbnQ6IFdoZWVsRXZlbnQpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnNjcm9sbGluZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZXZlbnQuZGVsdGFZID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJEZWNyZW1lbnQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJJbmNyZW1lbnQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJpZ2dlckluY3JlbWVudCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5pbmNyZW1lbnQuZW1pdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0cmlnZ2VyRGVjcmVtZW50KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmRlY3JlbWVudC5lbWl0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYW55KSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrID0gZm47XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrID0gZm47XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgICB9XHJcblxyXG59Il19