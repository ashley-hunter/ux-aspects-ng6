/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var /** @type {?} */ TOGGLESWITCH_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return ToggleSwitchComponent; }),
    multi: true
};
var /** @type {?} */ uniqueToggleSwitchId = 0;
var ToggleSwitchComponent = /** @class */ (function () {
    function ToggleSwitchComponent() {
        this._toggleSwitchId = "ux-toggleswitch-" + ++uniqueToggleSwitchId;
        this.id = this._toggleSwitchId;
        this.tabindex = 0;
        this.clickable = true;
        this.disabled = false;
        this.ariaLabel = '';
        this.ariaLabelledby = null;
        this.valueChange = new EventEmitter();
        this._value = false;
        this.focused = false;
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
    }
    Object.defineProperty(ToggleSwitchComponent.prototype, "value", {
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
            // Update value output
            this.valueChange.emit(value);
            // Notify ngModel
            this.onChangeCallback(value);
            this.onTouchedCallback();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToggleSwitchComponent.prototype, "inputId", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.id || this._toggleSwitchId) + "-input";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ToggleSwitchComponent.prototype.toggle = /**
     * @return {?}
     */
    function () {
        if (!this.disabled && this.clickable) {
            this.value = !this.value;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ToggleSwitchComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = !!value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ToggleSwitchComponent.prototype.registerOnChange = /**
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
    ToggleSwitchComponent.prototype.registerOnTouched = /**
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
    ToggleSwitchComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
    ToggleSwitchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-toggleswitch',
                    template: "<label [attr.for]=\"inputId\"\n       class=\"ux-toggleswitch\"\n       [class.ux-toggleswitch-checked]=\"value\"\n       [class.ux-toggleswitch-disabled]=\"disabled\"\n       [class.ux-toggleswitch-focused]=\"focused\">\n\n    <input class=\"ux-toggleswitch-input\"\n           type=\"checkbox\"\n           role=\"switch\"\n           [id]=\"inputId\"\n           [checked]=\"value\"\n           [disabled]=\"disabled\"\n           [attr.name]=\"name\"\n           [tabindex]=\"tabindex\"\n           [attr.aria-label]=\"ariaLabel\"\n           [attr.aria-labelledby]=\"ariaLabelledby\"\n           [attr.aria-checked]=\"value\"\n           (focus)=\"focused = true\"\n           (blur)=\"focused = false\"\n           (change)=\"toggle()\"\n           (click)=\"$event.stopPropagation()\">\n\n    <div class=\"ux-toggleswitch-container\">\n        <div class=\"ux-toggleswitch-bg\"></div>\n        <div class=\"ux-toggleswitch-nub\"></div>\n    </div>\n\n    <span class=\"ux-toggleswitch-label\">\n        <ng-content></ng-content>\n    </span>\n</label>",
                    providers: [TOGGLESWITCH_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    ToggleSwitchComponent.propDecorators = {
        "id": [{ type: Input },],
        "name": [{ type: Input },],
        "tabindex": [{ type: Input },],
        "clickable": [{ type: Input },],
        "disabled": [{ type: Input },],
        "ariaLabel": [{ type: Input, args: ['aria-label',] },],
        "ariaLabelledby": [{ type: Input, args: ['aria-labelledby',] },],
        "valueChange": [{ type: Output },],
        "value": [{ type: Input },],
    };
    return ToggleSwitchComponent;
}());
export { ToggleSwitchComponent };
function ToggleSwitchComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ToggleSwitchComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ToggleSwitchComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    ToggleSwitchComponent.propDecorators;
    /** @type {?} */
    ToggleSwitchComponent.prototype._toggleSwitchId;
    /** @type {?} */
    ToggleSwitchComponent.prototype.id;
    /** @type {?} */
    ToggleSwitchComponent.prototype.name;
    /** @type {?} */
    ToggleSwitchComponent.prototype.tabindex;
    /** @type {?} */
    ToggleSwitchComponent.prototype.clickable;
    /** @type {?} */
    ToggleSwitchComponent.prototype.disabled;
    /** @type {?} */
    ToggleSwitchComponent.prototype.ariaLabel;
    /** @type {?} */
    ToggleSwitchComponent.prototype.ariaLabelledby;
    /** @type {?} */
    ToggleSwitchComponent.prototype.valueChange;
    /** @type {?} */
    ToggleSwitchComponent.prototype._value;
    /** @type {?} */
    ToggleSwitchComponent.prototype.focused;
    /** @type {?} */
    ToggleSwitchComponent.prototype.onTouchedCallback;
    /** @type {?} */
    ToggleSwitchComponent.prototype.onChangeCallback;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlc3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3RvZ2dsZXN3aXRjaC90b2dnbGVzd2l0Y2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUscUJBQU0sMkJBQTJCLEdBQUc7SUFDaEMsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxxQkFBcUIsRUFBckIsQ0FBcUIsQ0FBQztJQUNwRCxLQUFLLEVBQUUsSUFBSTtDQUNkLENBQUM7QUFFRixxQkFBSSxvQkFBb0IsR0FBRyxDQUFDLENBQUM7OzsrQkF1Q1MscUJBQW1CLEVBQUUsb0JBQXNCO2tCQUV2RCxJQUFJLENBQUMsZUFBZTt3QkFFZCxDQUFDO3lCQUNDLElBQUk7d0JBQ0wsS0FBSzt5QkFDTyxFQUFFOzhCQUNRLElBQUk7MkJBRVIsSUFBSSxZQUFZLEVBQVc7c0JBc0JoRCxLQUFLO3VCQUVaLEtBQUs7aUNBQ1EsZUFBUztnQ0FDSixlQUFTOzswQkF2QjFDLHdDQUFLOzs7OztZQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDOzs7Ozs7UUFHdkIsVUFBVSxLQUFjO1lBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDOztZQUdwQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7WUFHN0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQzVCOzs7O0lBRUQsc0JBQUksMENBQU87Ozs7UUFBWDtZQUNJLE1BQU0sQ0FBQyxDQUFHLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLGVBQWUsWUFBUSxDQUFDO1NBQ3JEOzs7T0FBQTs7OztJQVFELHNDQUFNOzs7SUFBTjtRQUNJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUM1QjtLQUNKOzs7OztJQUVELDBDQUFVOzs7O0lBQVYsVUFBVyxLQUFjO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztLQUN4Qjs7Ozs7SUFFRCxnREFBZ0I7Ozs7SUFBaEIsVUFBaUIsRUFBTztRQUNwQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0tBQzlCOzs7OztJQUVELGlEQUFpQjs7OztJQUFqQixVQUFrQixFQUFPO1FBQ3JCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7S0FDL0I7Ozs7O0lBRUQsZ0RBQWdCOzs7O0lBQWhCLFVBQWlCLFVBQW1CO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0tBQzlCOztnQkEvRkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSxvaUNBOEJMO29CQUNMLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2lCQUMzQzs7Ozt1QkFLSSxLQUFLO3lCQUNMLEtBQUs7NkJBQ0wsS0FBSzs4QkFDTCxLQUFLOzZCQUNMLEtBQUs7OEJBQ0wsS0FBSyxTQUFDLFlBQVk7bUNBQ2xCLEtBQUssU0FBQyxpQkFBaUI7Z0NBRXZCLE1BQU07MEJBRU4sS0FBSzs7Z0NBNURWOztTQThDYSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5jb25zdCBUT0dHTEVTV0lUQ0hfVkFMVUVfQUNDRVNTT1IgPSB7XHJcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRvZ2dsZVN3aXRjaENvbXBvbmVudCksXHJcbiAgICBtdWx0aTogdHJ1ZVxyXG59O1xyXG5cclxubGV0IHVuaXF1ZVRvZ2dsZVN3aXRjaElkID0gMDtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd1eC10b2dnbGVzd2l0Y2gnLFxyXG4gICAgdGVtcGxhdGU6IGA8bGFiZWwgW2F0dHIuZm9yXT1cImlucHV0SWRcIlxyXG4gICAgICAgY2xhc3M9XCJ1eC10b2dnbGVzd2l0Y2hcIlxyXG4gICAgICAgW2NsYXNzLnV4LXRvZ2dsZXN3aXRjaC1jaGVja2VkXT1cInZhbHVlXCJcclxuICAgICAgIFtjbGFzcy51eC10b2dnbGVzd2l0Y2gtZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgW2NsYXNzLnV4LXRvZ2dsZXN3aXRjaC1mb2N1c2VkXT1cImZvY3VzZWRcIj5cclxuXHJcbiAgICA8aW5wdXQgY2xhc3M9XCJ1eC10b2dnbGVzd2l0Y2gtaW5wdXRcIlxyXG4gICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgcm9sZT1cInN3aXRjaFwiXHJcbiAgICAgICAgICAgW2lkXT1cImlucHV0SWRcIlxyXG4gICAgICAgICAgIFtjaGVja2VkXT1cInZhbHVlXCJcclxuICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgICAgIFthdHRyLm5hbWVdPVwibmFtZVwiXHJcbiAgICAgICAgICAgW3RhYmluZGV4XT1cInRhYmluZGV4XCJcclxuICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImFyaWFMYWJlbFwiXHJcbiAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbGxlZGJ5XT1cImFyaWFMYWJlbGxlZGJ5XCJcclxuICAgICAgICAgICBbYXR0ci5hcmlhLWNoZWNrZWRdPVwidmFsdWVcIlxyXG4gICAgICAgICAgIChmb2N1cyk9XCJmb2N1c2VkID0gdHJ1ZVwiXHJcbiAgICAgICAgICAgKGJsdXIpPVwiZm9jdXNlZCA9IGZhbHNlXCJcclxuICAgICAgICAgICAoY2hhbmdlKT1cInRvZ2dsZSgpXCJcclxuICAgICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCI+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInV4LXRvZ2dsZXN3aXRjaC1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidXgtdG9nZ2xlc3dpdGNoLWJnXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInV4LXRvZ2dsZXN3aXRjaC1udWJcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxzcGFuIGNsYXNzPVwidXgtdG9nZ2xlc3dpdGNoLWxhYmVsXCI+XHJcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPC9zcGFuPlxyXG48L2xhYmVsPmAsXHJcbiAgICBwcm92aWRlcnM6IFtUT0dHTEVTV0lUQ0hfVkFMVUVfQUNDRVNTT1JdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb2dnbGVTd2l0Y2hDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcblxyXG4gICAgcHJpdmF0ZSBfdG9nZ2xlU3dpdGNoSWQ6IHN0cmluZyA9IGB1eC10b2dnbGVzd2l0Y2gtJHsrK3VuaXF1ZVRvZ2dsZVN3aXRjaElkfWA7XHJcblxyXG4gICAgQElucHV0KCkgaWQ6IHN0cmluZyA9IHRoaXMuX3RvZ2dsZVN3aXRjaElkO1xyXG4gICAgQElucHV0KCkgbmFtZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIEBJbnB1dCgpIHRhYmluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgQElucHV0KCkgY2xpY2thYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBASW5wdXQoJ2FyaWEtbGFiZWwnKSBhcmlhTGFiZWw6IHN0cmluZyA9ICcnO1xyXG4gICAgQElucHV0KCdhcmlhLWxhYmVsbGVkYnknKSBhcmlhTGFiZWxsZWRieTogc3RyaW5nID0gbnVsbDtcclxuXHJcbiAgICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHZhbHVlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgdmFsdWUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG5cclxuICAgICAgICAvLyBVcGRhdGUgdmFsdWUgb3V0cHV0XHJcbiAgICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcclxuXHJcbiAgICAgICAgLy8gTm90aWZ5IG5nTW9kZWxcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodmFsdWUpO1xyXG4gICAgICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaW5wdXRJZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLmlkIHx8IHRoaXMuX3RvZ2dsZVN3aXRjaElkfS1pbnB1dGA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdmFsdWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBmb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBvblRvdWNoZWRDYWxsYmFjazogKCkgPT4gdm9pZCA9ICgpID0+IHsgfTtcclxuICAgIG9uQ2hhbmdlQ2FsbGJhY2s6IChfOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7IH07XHJcblxyXG4gICAgdG9nZ2xlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiB0aGlzLmNsaWNrYWJsZSkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gIXRoaXMudmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHdyaXRlVmFsdWUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gISF2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==