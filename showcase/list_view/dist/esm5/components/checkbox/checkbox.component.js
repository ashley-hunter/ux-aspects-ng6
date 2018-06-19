/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export var /** @type {?} */ CHECKBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return CheckboxComponent; }),
    multi: true
};
var /** @type {?} */ uniqueCheckboxId = 0;
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
        this._checkboxId = "ux-checkbox-" + ++uniqueCheckboxId;
        this.id = this._checkboxId;
        this.tabindex = 0;
        this.clickable = true;
        this.simplified = false;
        this.indeterminateValue = -1;
        this.disabled = false;
        this.ariaLabel = '';
        this.ariaLabelledby = null;
        this.valueChange = new EventEmitter();
        this._value = false;
        this.indeterminate = false;
        this.focused = false;
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
    }
    Object.defineProperty(CheckboxComponent.prototype, "value", {
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
            // determine if it is in the indeterminate state
            this.indeterminate = this._value === this.indeterminateValue;
            // determine the checked state
            this.ariaChecked = this.indeterminate ? 'mixed' : this._value;
            // invoke change event
            this.valueChange.emit(this._value);
            // call callback
            this.onChangeCallback(this._value);
            this.onTouchedCallback();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckboxComponent.prototype, "inputId", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.id || this._checkboxId) + "-input";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CheckboxComponent.prototype.toggle = /**
     * @return {?}
     */
    function () {
        if (this.disabled || !this.clickable) {
            return;
        }
        if (this.value === this.indeterminateValue) {
            this.value = true;
            return;
        }
        // toggle the checked state
        this.value = !this.value;
    };
    // Functions required to update ngModel
    /**
     * @param {?} value
     * @return {?}
     */
    CheckboxComponent.prototype.writeValue = /**
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
    CheckboxComponent.prototype.registerOnChange = /**
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
    CheckboxComponent.prototype.registerOnTouched = /**
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
    CheckboxComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
    CheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-checkbox',
                    template: "<label [attr.for]=\"inputId\"\n       class=\"ux-checkbox\"\n       [class.ux-checkbox-checked]=\"value === true\"\n       [class.ux-checkbox-indeterminate]=\"indeterminate\"\n       [class.ux-checkbox-simplified]=\"simplified\"\n       [class.ux-checkbox-disabled]=\"disabled\"\n       [class.ux-checkbox-focused]=\"focused\">\n\n    <div class=\"ux-checkbox-container\">\n        <input type=\"checkbox\"\n               class=\"ux-checkbox-input\"\n               [id]=\"inputId\"\n               [required]=\"required\"\n               [checked]=\"value\"\n               [attr.value]=\"value\"\n               [disabled]=\"disabled\"\n               [attr.name]=\"name\"\n               [tabindex]=\"tabindex\"\n               [indeterminate]=\"indeterminate\"\n               [attr.aria-label]=\"ariaLabel\"\n               [attr.aria-labelledby]=\"ariaLabelledby\"\n               [attr.aria-checked]=\"ariaChecked\"\n               (focus)=\"focused = true\"\n               (blur)=\"focused = false\"\n               (change)=\"$event.stopPropagation()\"\n               (click)=\"toggle()\">\n    </div>\n\n    <span class=\"ux-checkbox-label\">\n        <ng-content></ng-content>\n    </span>\n</label>\n",
                    providers: [CHECKBOX_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    CheckboxComponent.propDecorators = {
        "id": [{ type: Input },],
        "name": [{ type: Input },],
        "required": [{ type: Input },],
        "tabindex": [{ type: Input },],
        "clickable": [{ type: Input },],
        "simplified": [{ type: Input },],
        "indeterminateValue": [{ type: Input },],
        "disabled": [{ type: Input },],
        "ariaLabel": [{ type: Input, args: ['aria-label',] },],
        "ariaLabelledby": [{ type: Input, args: ['aria-labelledby',] },],
        "valueChange": [{ type: Output },],
        "value": [{ type: Input },],
    };
    return CheckboxComponent;
}());
export { CheckboxComponent };
function CheckboxComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    CheckboxComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    CheckboxComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    CheckboxComponent.propDecorators;
    /** @type {?} */
    CheckboxComponent.prototype._checkboxId;
    /** @type {?} */
    CheckboxComponent.prototype.id;
    /** @type {?} */
    CheckboxComponent.prototype.name;
    /** @type {?} */
    CheckboxComponent.prototype.required;
    /** @type {?} */
    CheckboxComponent.prototype.tabindex;
    /** @type {?} */
    CheckboxComponent.prototype.clickable;
    /** @type {?} */
    CheckboxComponent.prototype.simplified;
    /** @type {?} */
    CheckboxComponent.prototype.indeterminateValue;
    /** @type {?} */
    CheckboxComponent.prototype.disabled;
    /** @type {?} */
    CheckboxComponent.prototype.ariaLabel;
    /** @type {?} */
    CheckboxComponent.prototype.ariaLabelledby;
    /** @type {?} */
    CheckboxComponent.prototype.valueChange;
    /** @type {?} */
    CheckboxComponent.prototype._value;
    /** @type {?} */
    CheckboxComponent.prototype.indeterminate;
    /** @type {?} */
    CheckboxComponent.prototype.ariaChecked;
    /** @type {?} */
    CheckboxComponent.prototype.focused;
    /** @type {?} */
    CheckboxComponent.prototype.onTouchedCallback;
    /** @type {?} */
    CheckboxComponent.prototype.onChangeCallback;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsTUFBTSxDQUFDLHFCQUFNLHVCQUF1QixHQUFRO0lBQ3hDLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsaUJBQWlCLEVBQWpCLENBQWlCLENBQUM7SUFDaEQsS0FBSyxFQUFFLElBQUk7Q0FDZCxDQUFDO0FBRUYscUJBQUksZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDOzs7MkJBeUNTLGlCQUFlLEVBQUUsZ0JBQWtCO2tCQUUzQyxJQUFJLENBQUMsV0FBVzt3QkFHVixDQUFDO3lCQUNDLElBQUk7MEJBQ0gsS0FBSztrQ0FDRCxDQUFDLENBQUM7d0JBQ1IsS0FBSzt5QkFDTyxFQUFFOzhCQUNRLElBQUk7MkJBRVosSUFBSSxZQUFZLEVBQU87c0JBNEI1QyxLQUFLOzZCQUVGLEtBQUs7dUJBRVgsS0FBSztpQ0FFUSxlQUFTO2dDQUNKLGVBQVM7OzBCQWhDMUMsb0NBQUs7Ozs7O1lBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7Ozs7OztRQUd2QixVQUFVLEtBQVU7WUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7O1lBR3BCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsa0JBQWtCLENBQUM7O1lBRzdELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDOztZQUc5RCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7O1lBR25DLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDNUI7Ozs7SUFFRCxzQkFBSSxzQ0FBTzs7OztRQUFYO1lBQ0ksTUFBTSxDQUFDLENBQUcsSUFBSSxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsV0FBVyxZQUFRLENBQUM7U0FDakQ7OztPQUFBOzs7O0lBV0Qsa0NBQU07OztJQUFOO1FBRUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ25DLE1BQU0sQ0FBQztTQUNWO1FBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLE1BQU0sQ0FBQztTQUNWOztRQUdELElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0tBQzVCO0lBRUQsdUNBQXVDOzs7OztJQUV2QyxzQ0FBVTs7OztJQUFWLFVBQVcsS0FBVTtRQUNqQixFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDdkI7S0FDSjs7Ozs7SUFFRCw0Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsRUFBTztRQUNwQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0tBQzlCOzs7OztJQUVELDZDQUFpQjs7OztJQUFqQixVQUFrQixFQUFPO1FBQ3JCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7S0FDL0I7Ozs7O0lBRUQsNENBQWdCOzs7O0lBQWhCLFVBQWlCLFVBQW1CO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0tBQzlCOztnQkExSEosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUUsaXNDQWdDYjtvQkFDRyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztpQkFDdkM7Ozs7dUJBS0ksS0FBSzt5QkFDTCxLQUFLOzZCQUNMLEtBQUs7NkJBQ0wsS0FBSzs4QkFDTCxLQUFLOytCQUNMLEtBQUs7dUNBQ0wsS0FBSzs2QkFDTCxLQUFLOzhCQUNMLEtBQUssU0FBQyxZQUFZO21DQUNsQixLQUFLLFNBQUMsaUJBQWlCO2dDQUV2QixNQUFNOzBCQUVOLEtBQUs7OzRCQWpFVjs7U0FnRGEsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENIRUNLQk9YX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XHJcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENoZWNrYm94Q29tcG9uZW50KSxcclxuICAgIG11bHRpOiB0cnVlXHJcbn07XHJcblxyXG5sZXQgdW5pcXVlQ2hlY2tib3hJZCA9IDA7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndXgtY2hlY2tib3gnLFxyXG4gICAgdGVtcGxhdGU6IGA8bGFiZWwgW2F0dHIuZm9yXT1cImlucHV0SWRcIlxyXG4gICAgICAgY2xhc3M9XCJ1eC1jaGVja2JveFwiXHJcbiAgICAgICBbY2xhc3MudXgtY2hlY2tib3gtY2hlY2tlZF09XCJ2YWx1ZSA9PT0gdHJ1ZVwiXHJcbiAgICAgICBbY2xhc3MudXgtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZV09XCJpbmRldGVybWluYXRlXCJcclxuICAgICAgIFtjbGFzcy51eC1jaGVja2JveC1zaW1wbGlmaWVkXT1cInNpbXBsaWZpZWRcIlxyXG4gICAgICAgW2NsYXNzLnV4LWNoZWNrYm94LWRpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgIFtjbGFzcy51eC1jaGVja2JveC1mb2N1c2VkXT1cImZvY3VzZWRcIj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwidXgtY2hlY2tib3gtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgIGNsYXNzPVwidXgtY2hlY2tib3gtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICBbaWRdPVwiaW5wdXRJZFwiXHJcbiAgICAgICAgICAgICAgIFtyZXF1aXJlZF09XCJyZXF1aXJlZFwiXHJcbiAgICAgICAgICAgICAgIFtjaGVja2VkXT1cInZhbHVlXCJcclxuICAgICAgICAgICAgICAgW2F0dHIudmFsdWVdPVwidmFsdWVcIlxyXG4gICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICBbYXR0ci5uYW1lXT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICBbdGFiaW5kZXhdPVwidGFiaW5kZXhcIlxyXG4gICAgICAgICAgICAgICBbaW5kZXRlcm1pbmF0ZV09XCJpbmRldGVybWluYXRlXCJcclxuICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJhcmlhTGFiZWxcIlxyXG4gICAgICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsbGVkYnldPVwiYXJpYUxhYmVsbGVkYnlcIlxyXG4gICAgICAgICAgICAgICBbYXR0ci5hcmlhLWNoZWNrZWRdPVwiYXJpYUNoZWNrZWRcIlxyXG4gICAgICAgICAgICAgICAoZm9jdXMpPVwiZm9jdXNlZCA9IHRydWVcIlxyXG4gICAgICAgICAgICAgICAoYmx1cik9XCJmb2N1c2VkID0gZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAoY2hhbmdlKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiXHJcbiAgICAgICAgICAgICAgIChjbGljayk9XCJ0b2dnbGUoKVwiPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPHNwYW4gY2xhc3M9XCJ1eC1jaGVja2JveC1sYWJlbFwiPlxyXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgIDwvc3Bhbj5cclxuPC9sYWJlbD5cclxuYCxcclxuICAgIHByb3ZpZGVyczogW0NIRUNLQk9YX1ZBTFVFX0FDQ0VTU09SXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcblxyXG4gICAgcHJpdmF0ZSBfY2hlY2tib3hJZDogc3RyaW5nID0gYHV4LWNoZWNrYm94LSR7Kyt1bmlxdWVDaGVja2JveElkfWA7XHJcblxyXG4gICAgQElucHV0KCkgaWQ6IHN0cmluZyA9IHRoaXMuX2NoZWNrYm94SWQ7XHJcbiAgICBASW5wdXQoKSBuYW1lOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgQElucHV0KCkgcmVxdWlyZWQ6IGJvb2xlYW47XHJcbiAgICBASW5wdXQoKSB0YWJpbmRleDogbnVtYmVyID0gMDtcclxuICAgIEBJbnB1dCgpIGNsaWNrYWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBzaW1wbGlmaWVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBpbmRldGVybWluYXRlVmFsdWU6IGFueSA9IC0xO1xyXG4gICAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBJbnB1dCgnYXJpYS1sYWJlbCcpIGFyaWFMYWJlbDogc3RyaW5nID0gJyc7XHJcbiAgICBASW5wdXQoJ2FyaWEtbGFiZWxsZWRieScpIGFyaWFMYWJlbGxlZGJ5OiBzdHJpbmcgPSBudWxsO1xyXG5cclxuICAgIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHZhbHVlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgdmFsdWUodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcblxyXG4gICAgICAgIC8vIGRldGVybWluZSBpZiBpdCBpcyBpbiB0aGUgaW5kZXRlcm1pbmF0ZSBzdGF0ZVxyXG4gICAgICAgIHRoaXMuaW5kZXRlcm1pbmF0ZSA9IHRoaXMuX3ZhbHVlID09PSB0aGlzLmluZGV0ZXJtaW5hdGVWYWx1ZTtcclxuXHJcbiAgICAgICAgLy8gZGV0ZXJtaW5lIHRoZSBjaGVja2VkIHN0YXRlXHJcbiAgICAgICAgdGhpcy5hcmlhQ2hlY2tlZCA9IHRoaXMuaW5kZXRlcm1pbmF0ZSA/ICdtaXhlZCcgOiB0aGlzLl92YWx1ZTtcclxuXHJcbiAgICAgICAgLy8gaW52b2tlIGNoYW5nZSBldmVudFxyXG4gICAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLl92YWx1ZSk7XHJcblxyXG4gICAgICAgIC8vIGNhbGwgY2FsbGJhY2tcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodGhpcy5fdmFsdWUpO1xyXG4gICAgICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaW5wdXRJZCgpOiBzdHJpbmcgeyBcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5pZCB8fCB0aGlzLl9jaGVja2JveElkfS1pbnB1dGA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdmFsdWU6IGFueSA9IGZhbHNlO1xyXG5cclxuICAgIGluZGV0ZXJtaW5hdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGFyaWFDaGVja2VkOiBib29sZWFuIHwgc3RyaW5nO1xyXG4gICAgZm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIG9uVG91Y2hlZENhbGxiYWNrOiAoKSA9PiB2b2lkID0gKCkgPT4geyB9O1xyXG4gICAgb25DaGFuZ2VDYWxsYmFjazogKF86IGFueSkgPT4gdm9pZCA9ICgpID0+IHsgfTtcclxuXHJcbiAgICB0b2dnbGUoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8ICF0aGlzLmNsaWNrYWJsZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy52YWx1ZSA9PT0gdGhpcy5pbmRldGVybWluYXRlVmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRvZ2dsZSB0aGUgY2hlY2tlZCBzdGF0ZVxyXG4gICAgICAgIHRoaXMudmFsdWUgPSAhdGhpcy52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGdW5jdGlvbnMgcmVxdWlyZWQgdG8gdXBkYXRlIG5nTW9kZWxcclxuXHJcbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAodmFsdWUgIT09IHRoaXMuX3ZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IGZuO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrID0gZm47XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgICB9XHJcbn1cclxuIl19