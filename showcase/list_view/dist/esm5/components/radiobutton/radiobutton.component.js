/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export var /** @type {?} */ RADIOBUTTON_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return RadioButtonComponent; }),
    multi: true
};
var /** @type {?} */ uniqueRadioId = 0;
var RadioButtonComponent = /** @class */ (function () {
    function RadioButtonComponent() {
        this._radioButtonId = "ux-radio-button-" + ++uniqueRadioId;
        this.id = this._radioButtonId;
        this.tabindex = 0;
        this.clickable = true;
        this.disabled = false;
        this.simplified = false;
        this.ariaLabel = '';
        this.ariaLabelledby = null;
        this.ariaDescribedby = null;
        this.valueChange = new EventEmitter();
        this._value = false;
        this.focused = false;
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
    }
    Object.defineProperty(RadioButtonComponent.prototype, "value", {
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
            // invoke change event
            this.valueChange.emit(this._value);
            // call callback
            this.onChangeCallback(this._value);
            this.onTouchedCallback();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioButtonComponent.prototype, "inputId", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.id || this._radioButtonId) + "-input";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    RadioButtonComponent.prototype.toggle = /**
     * @return {?}
     */
    function () {
        if (this.disabled || !this.clickable) {
            return;
        }
        // toggle the checked state
        this.value = this.option;
        // call callback
        this.onChangeCallback(this.value);
    };
    // Functions required to update ng-model
    /**
     * @param {?} value
     * @return {?}
     */
    RadioButtonComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value !== this._value) {
            this._value = value;
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    RadioButtonComponent.prototype.registerOnChange = /**
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
    RadioButtonComponent.prototype.registerOnTouched = /**
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
    RadioButtonComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
    RadioButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-radio-button',
                    template: "<label [attr.for]=\"inputId\" class=\"ux-radio-button\"\n       [class.ux-radio-button-checked]=\"value === option\"\n       [class.ux-radio-button-simplified]=\"simplified\"\n       [class.ux-radio-button-disabled]=\"disabled\"\n       [class.ux-radio-button-focused]=\"focused\">\n\n    <div class=\"ux-radio-button-container\">\n        <input class=\"ux-radio-button-input\"\n            type=\"radio\"\n            [id]=\"inputId\"\n            [checked]=\"value === option\"\n            [disabled]=\"disabled\"\n            [tabindex]=\"tabindex || value === option ? 0 : -1\"\n            [attr.name]=\"name\"\n            [required]=\"required\"\n            [attr.aria-label]=\"ariaLabel\"\n            [attr.aria-labelledby]=\"ariaLabelledby\"\n            [attr.aria-describedby]=\"ariaDescribedby\"\n            [attr.aria-checked]=\"value === option\"\n            (focus)=\"focused = true\"\n            (blur)=\"focused = false\"\n            (change)=\"toggle()\"\n            (click)=\"$event.stopPropagation()\">\n    </div>\n\n    <span class=\"ux-radio-button-label\">\n        <ng-content></ng-content>\n    </span>\n\n</label>",
                    providers: [RADIOBUTTON_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    RadioButtonComponent.propDecorators = {
        "id": [{ type: Input },],
        "name": [{ type: Input },],
        "required": [{ type: Input },],
        "tabindex": [{ type: Input },],
        "clickable": [{ type: Input },],
        "disabled": [{ type: Input },],
        "simplified": [{ type: Input },],
        "option": [{ type: Input },],
        "ariaLabel": [{ type: Input, args: ['aria-label',] },],
        "ariaLabelledby": [{ type: Input, args: ['aria-labelledby',] },],
        "ariaDescribedby": [{ type: Input, args: ['aria-describedby',] },],
        "valueChange": [{ type: Output },],
        "value": [{ type: Input },],
    };
    return RadioButtonComponent;
}());
export { RadioButtonComponent };
function RadioButtonComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    RadioButtonComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    RadioButtonComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    RadioButtonComponent.propDecorators;
    /** @type {?} */
    RadioButtonComponent.prototype._radioButtonId;
    /** @type {?} */
    RadioButtonComponent.prototype.id;
    /** @type {?} */
    RadioButtonComponent.prototype.name;
    /** @type {?} */
    RadioButtonComponent.prototype.required;
    /** @type {?} */
    RadioButtonComponent.prototype.tabindex;
    /** @type {?} */
    RadioButtonComponent.prototype.clickable;
    /** @type {?} */
    RadioButtonComponent.prototype.disabled;
    /** @type {?} */
    RadioButtonComponent.prototype.simplified;
    /** @type {?} */
    RadioButtonComponent.prototype.option;
    /** @type {?} */
    RadioButtonComponent.prototype.ariaLabel;
    /** @type {?} */
    RadioButtonComponent.prototype.ariaLabelledby;
    /** @type {?} */
    RadioButtonComponent.prototype.ariaDescribedby;
    /** @type {?} */
    RadioButtonComponent.prototype.valueChange;
    /** @type {?} */
    RadioButtonComponent.prototype._value;
    /** @type {?} */
    RadioButtonComponent.prototype.focused;
    /** @type {?} */
    RadioButtonComponent.prototype.onTouchedCallback;
    /** @type {?} */
    RadioButtonComponent.prototype.onChangeCallback;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW9idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmFkaW9idXR0b24vcmFkaW9idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsTUFBTSxDQUFDLHFCQUFNLDBCQUEwQixHQUFRO0lBQzNDLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsb0JBQW9CLEVBQXBCLENBQW9CLENBQUM7SUFDbkQsS0FBSyxFQUFFLElBQUk7Q0FDZCxDQUFDO0FBRUYscUJBQUksYUFBYSxHQUFHLENBQUMsQ0FBQzs7OzhCQXNDZSxxQkFBbUIsRUFBRSxhQUFlO2tCQUUvQyxJQUFJLENBQUMsY0FBYzt3QkFHYixDQUFDO3lCQUNDLElBQUk7d0JBQ0wsS0FBSzswQkFDSCxLQUFLO3lCQUVLLEVBQUU7OEJBQ1EsSUFBSTsrQkFDRixJQUFJOzJCQUVkLElBQUksWUFBWSxFQUFPO3NCQXNCNUMsS0FBSzt1QkFFUixLQUFLO2lDQUNRLGVBQVM7Z0NBQ0osZUFBUzs7MEJBdkIxQyx1Q0FBSzs7Ozs7WUFDTCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzs7Ozs7O1FBR3ZCLFVBQVUsS0FBYztZQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzs7WUFHcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDOztZQUduQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQzVCOzs7O0lBRUQsc0JBQUkseUNBQU87Ozs7UUFBWDtZQUNJLE1BQU0sQ0FBQyxDQUFHLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLGNBQWMsWUFBUSxDQUFDO1NBQ3BEOzs7T0FBQTs7OztJQVFELHFDQUFNOzs7SUFBTjtRQUVJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNuQyxNQUFNLENBQUM7U0FDVjs7UUFHRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7O1FBR3pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDckM7SUFFRCx3Q0FBd0M7Ozs7O0lBQ3hDLHlDQUFVOzs7O0lBQVYsVUFBVyxLQUFjO1FBQ3JCLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUN2QjtLQUNKOzs7OztJQUVELCtDQUFnQjs7OztJQUFoQixVQUFpQixFQUFPO1FBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7S0FDOUI7Ozs7O0lBRUQsZ0RBQWlCOzs7O0lBQWpCLFVBQWtCLEVBQU87UUFDckIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztLQUMvQjs7Ozs7SUFFRCwrQ0FBZ0I7Ozs7SUFBaEIsVUFBaUIsVUFBbUI7UUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7S0FDOUI7O2dCQTVHSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLCtuQ0E2Qkw7b0JBQ0wsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7aUJBQzFDOzs7O3VCQUtJLEtBQUs7eUJBQ0wsS0FBSzs2QkFDTCxLQUFLOzZCQUNMLEtBQUs7OEJBQ0wsS0FBSzs2QkFDTCxLQUFLOytCQUNMLEtBQUs7MkJBQ0wsS0FBSzs4QkFDTCxLQUFLLFNBQUMsWUFBWTttQ0FDbEIsS0FBSyxTQUFDLGlCQUFpQjtvQ0FDdkIsS0FBSyxTQUFDLGtCQUFrQjtnQ0FFeEIsTUFBTTswQkFFTixLQUFLOzsrQkEvRFY7O1NBNkNhLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmV4cG9ydCBjb25zdCBSQURJT0JVVFRPTl9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xyXG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBSYWRpb0J1dHRvbkNvbXBvbmVudCksXHJcbiAgICBtdWx0aTogdHJ1ZVxyXG59O1xyXG5cclxubGV0IHVuaXF1ZVJhZGlvSWQgPSAwO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3V4LXJhZGlvLWJ1dHRvbicsXHJcbiAgICB0ZW1wbGF0ZTogYDxsYWJlbCBbYXR0ci5mb3JdPVwiaW5wdXRJZFwiIGNsYXNzPVwidXgtcmFkaW8tYnV0dG9uXCJcclxuICAgICAgIFtjbGFzcy51eC1yYWRpby1idXR0b24tY2hlY2tlZF09XCJ2YWx1ZSA9PT0gb3B0aW9uXCJcclxuICAgICAgIFtjbGFzcy51eC1yYWRpby1idXR0b24tc2ltcGxpZmllZF09XCJzaW1wbGlmaWVkXCJcclxuICAgICAgIFtjbGFzcy51eC1yYWRpby1idXR0b24tZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgW2NsYXNzLnV4LXJhZGlvLWJ1dHRvbi1mb2N1c2VkXT1cImZvY3VzZWRcIj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwidXgtcmFkaW8tYnV0dG9uLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzcz1cInV4LXJhZGlvLWJ1dHRvbi1pbnB1dFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgIFtpZF09XCJpbnB1dElkXCJcclxuICAgICAgICAgICAgW2NoZWNrZWRdPVwidmFsdWUgPT09IG9wdGlvblwiXHJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgICAgIFt0YWJpbmRleF09XCJ0YWJpbmRleCB8fCB2YWx1ZSA9PT0gb3B0aW9uID8gMCA6IC0xXCJcclxuICAgICAgICAgICAgW2F0dHIubmFtZV09XCJuYW1lXCJcclxuICAgICAgICAgICAgW3JlcXVpcmVkXT1cInJlcXVpcmVkXCJcclxuICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJhcmlhTGFiZWxcIlxyXG4gICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsbGVkYnldPVwiYXJpYUxhYmVsbGVkYnlcIlxyXG4gICAgICAgICAgICBbYXR0ci5hcmlhLWRlc2NyaWJlZGJ5XT1cImFyaWFEZXNjcmliZWRieVwiXHJcbiAgICAgICAgICAgIFthdHRyLmFyaWEtY2hlY2tlZF09XCJ2YWx1ZSA9PT0gb3B0aW9uXCJcclxuICAgICAgICAgICAgKGZvY3VzKT1cImZvY3VzZWQgPSB0cnVlXCJcclxuICAgICAgICAgICAgKGJsdXIpPVwiZm9jdXNlZCA9IGZhbHNlXCJcclxuICAgICAgICAgICAgKGNoYW5nZSk9XCJ0b2dnbGUoKVwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxzcGFuIGNsYXNzPVwidXgtcmFkaW8tYnV0dG9uLWxhYmVsXCI+XHJcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPC9zcGFuPlxyXG5cclxuPC9sYWJlbD5gLFxyXG4gICAgcHJvdmlkZXJzOiBbUkFESU9CVVRUT05fVkFMVUVfQUNDRVNTT1JdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSYWRpb0J1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcclxuXHJcbiAgICBwcml2YXRlIF9yYWRpb0J1dHRvbklkOiBzdHJpbmcgPSBgdXgtcmFkaW8tYnV0dG9uLSR7Kyt1bmlxdWVSYWRpb0lkfWA7XHJcblxyXG4gICAgQElucHV0KCkgaWQ6IHN0cmluZyA9IHRoaXMuX3JhZGlvQnV0dG9uSWQ7XHJcbiAgICBASW5wdXQoKSBuYW1lOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgQElucHV0KCkgcmVxdWlyZWQ6IGJvb2xlYW47XHJcbiAgICBASW5wdXQoKSB0YWJpbmRleDogbnVtYmVyID0gMDtcclxuICAgIEBJbnB1dCgpIGNsaWNrYWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgc2ltcGxpZmllZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgb3B0aW9uOiBhbnk7XHJcbiAgICBASW5wdXQoJ2FyaWEtbGFiZWwnKSBhcmlhTGFiZWw6IHN0cmluZyA9ICcnO1xyXG4gICAgQElucHV0KCdhcmlhLWxhYmVsbGVkYnknKSBhcmlhTGFiZWxsZWRieTogc3RyaW5nID0gbnVsbDtcclxuICAgIEBJbnB1dCgnYXJpYS1kZXNjcmliZWRieScpIGFyaWFEZXNjcmliZWRieTogc3RyaW5nID0gbnVsbDtcclxuXHJcbiAgICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCB2YWx1ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHZhbHVlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgLy8gaW52b2tlIGNoYW5nZSBldmVudFxyXG4gICAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLl92YWx1ZSk7XHJcblxyXG4gICAgICAgIC8vIGNhbGwgY2FsbGJhY2tcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodGhpcy5fdmFsdWUpO1xyXG4gICAgICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2soKTsgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGdldCBpbnB1dElkKCk6IHN0cmluZyB7IFxyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLmlkIHx8IHRoaXMuX3JhZGlvQnV0dG9uSWR9LWlucHV0YDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF92YWx1ZTogYW55ID0gZmFsc2U7XHJcblxyXG4gICAgZm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgb25Ub3VjaGVkQ2FsbGJhY2s6ICgpID0+IHZvaWQgPSAoKSA9PiB7IH07XHJcbiAgICBvbkNoYW5nZUNhbGxiYWNrOiAoXzogYW55KSA9PiB2b2lkID0gKCkgPT4geyB9O1xyXG5cclxuICAgIHRvZ2dsZSgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgIXRoaXMuY2xpY2thYmxlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRvZ2dsZSB0aGUgY2hlY2tlZCBzdGF0ZVxyXG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLm9wdGlvbjtcclxuXHJcbiAgICAgICAgLy8gY2FsbCBjYWxsYmFja1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayh0aGlzLnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGdW5jdGlvbnMgcmVxdWlyZWQgdG8gdXBkYXRlIG5nLW1vZGVsXHJcbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLl92YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==