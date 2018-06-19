/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export const /** @type {?} */ CHECKBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckboxComponent),
    multi: true
};
let /** @type {?} */ uniqueCheckboxId = 0;
export class CheckboxComponent {
    constructor() {
        this._checkboxId = `ux-checkbox-${++uniqueCheckboxId}`;
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
        this.onTouchedCallback = () => { };
        this.onChangeCallback = () => { };
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
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
    }
    /**
     * @return {?}
     */
    get inputId() {
        return `${this.id || this._checkboxId}-input`;
    }
    /**
     * @return {?}
     */
    toggle() {
        if (this.disabled || !this.clickable) {
            return;
        }
        if (this.value === this.indeterminateValue) {
            this.value = true;
            return;
        }
        // toggle the checked state
        this.value = !this.value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value !== this._value) {
            this._value = value;
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
CheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-checkbox',
                template: `<label [attr.for]="inputId"
       class="ux-checkbox"
       [class.ux-checkbox-checked]="value === true"
       [class.ux-checkbox-indeterminate]="indeterminate"
       [class.ux-checkbox-simplified]="simplified"
       [class.ux-checkbox-disabled]="disabled"
       [class.ux-checkbox-focused]="focused">

    <div class="ux-checkbox-container">
        <input type="checkbox"
               class="ux-checkbox-input"
               [id]="inputId"
               [required]="required"
               [checked]="value"
               [attr.value]="value"
               [disabled]="disabled"
               [attr.name]="name"
               [tabindex]="tabindex"
               [indeterminate]="indeterminate"
               [attr.aria-label]="ariaLabel"
               [attr.aria-labelledby]="ariaLabelledby"
               [attr.aria-checked]="ariaChecked"
               (focus)="focused = true"
               (blur)="focused = false"
               (change)="$event.stopPropagation()"
               (click)="toggle()">
    </div>

    <span class="ux-checkbox-label">
        <ng-content></ng-content>
    </span>
</label>
`,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsTUFBTSxDQUFDLHVCQUFNLHVCQUF1QixHQUFRO0lBQ3hDLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztJQUNoRCxLQUFLLEVBQUUsSUFBSTtDQUNkLENBQUM7QUFFRixxQkFBSSxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7QUF1Q3pCLE1BQU07OzJCQUU0QixlQUFlLEVBQUUsZ0JBQWdCLEVBQUU7a0JBRTNDLElBQUksQ0FBQyxXQUFXO3dCQUdWLENBQUM7eUJBQ0MsSUFBSTswQkFDSCxLQUFLO2tDQUNELENBQUMsQ0FBQzt3QkFDUixLQUFLO3lCQUNPLEVBQUU7OEJBQ1EsSUFBSTsyQkFFWixJQUFJLFlBQVksRUFBTztzQkE0QjVDLEtBQUs7NkJBRUYsS0FBSzt1QkFFWCxLQUFLO2lDQUVRLEdBQUcsRUFBRSxJQUFJO2dDQUNKLEdBQUcsRUFBRSxJQUFJOzs7OztRQWhDMUMsS0FBSztRQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDOzs7Ozs7SUFHdkIsSUFBSSxLQUFLLENBQUMsS0FBVTtRQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzs7UUFHcEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxrQkFBa0IsQ0FBQzs7UUFHN0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7O1FBRzlELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzs7UUFHbkMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztLQUM1Qjs7OztJQUVELElBQUksT0FBTztRQUNQLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLFdBQVcsUUFBUSxDQUFDO0tBQ2pEOzs7O0lBV0QsTUFBTTtRQUVGLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNuQyxNQUFNLENBQUM7U0FDVjtRQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNsQixNQUFNLENBQUM7U0FDVjs7UUFHRCxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztLQUM1Qjs7Ozs7SUFJRCxVQUFVLENBQUMsS0FBVTtRQUNqQixFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDdkI7S0FDSjs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7S0FDOUI7Ozs7O0lBRUQsaUJBQWlCLENBQUMsRUFBTztRQUNyQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO0tBQy9COzs7OztJQUVELGdCQUFnQixDQUFDLFVBQW1CO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0tBQzlCOzs7WUExSEosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBZ0NiO2dCQUNHLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO2FBQ3ZDOzs7O21CQUtJLEtBQUs7cUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzsyQkFDTCxLQUFLO21DQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLLFNBQUMsWUFBWTsrQkFDbEIsS0FBSyxTQUFDLGlCQUFpQjs0QkFFdkIsTUFBTTtzQkFFTixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENIRUNLQk9YX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XHJcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENoZWNrYm94Q29tcG9uZW50KSxcclxuICAgIG11bHRpOiB0cnVlXHJcbn07XHJcblxyXG5sZXQgdW5pcXVlQ2hlY2tib3hJZCA9IDA7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndXgtY2hlY2tib3gnLFxyXG4gICAgdGVtcGxhdGU6IGA8bGFiZWwgW2F0dHIuZm9yXT1cImlucHV0SWRcIlxyXG4gICAgICAgY2xhc3M9XCJ1eC1jaGVja2JveFwiXHJcbiAgICAgICBbY2xhc3MudXgtY2hlY2tib3gtY2hlY2tlZF09XCJ2YWx1ZSA9PT0gdHJ1ZVwiXHJcbiAgICAgICBbY2xhc3MudXgtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZV09XCJpbmRldGVybWluYXRlXCJcclxuICAgICAgIFtjbGFzcy51eC1jaGVja2JveC1zaW1wbGlmaWVkXT1cInNpbXBsaWZpZWRcIlxyXG4gICAgICAgW2NsYXNzLnV4LWNoZWNrYm94LWRpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgIFtjbGFzcy51eC1jaGVja2JveC1mb2N1c2VkXT1cImZvY3VzZWRcIj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwidXgtY2hlY2tib3gtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgIGNsYXNzPVwidXgtY2hlY2tib3gtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICBbaWRdPVwiaW5wdXRJZFwiXHJcbiAgICAgICAgICAgICAgIFtyZXF1aXJlZF09XCJyZXF1aXJlZFwiXHJcbiAgICAgICAgICAgICAgIFtjaGVja2VkXT1cInZhbHVlXCJcclxuICAgICAgICAgICAgICAgW2F0dHIudmFsdWVdPVwidmFsdWVcIlxyXG4gICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICBbYXR0ci5uYW1lXT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICBbdGFiaW5kZXhdPVwidGFiaW5kZXhcIlxyXG4gICAgICAgICAgICAgICBbaW5kZXRlcm1pbmF0ZV09XCJpbmRldGVybWluYXRlXCJcclxuICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJhcmlhTGFiZWxcIlxyXG4gICAgICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsbGVkYnldPVwiYXJpYUxhYmVsbGVkYnlcIlxyXG4gICAgICAgICAgICAgICBbYXR0ci5hcmlhLWNoZWNrZWRdPVwiYXJpYUNoZWNrZWRcIlxyXG4gICAgICAgICAgICAgICAoZm9jdXMpPVwiZm9jdXNlZCA9IHRydWVcIlxyXG4gICAgICAgICAgICAgICAoYmx1cik9XCJmb2N1c2VkID0gZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAoY2hhbmdlKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiXHJcbiAgICAgICAgICAgICAgIChjbGljayk9XCJ0b2dnbGUoKVwiPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPHNwYW4gY2xhc3M9XCJ1eC1jaGVja2JveC1sYWJlbFwiPlxyXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgIDwvc3Bhbj5cclxuPC9sYWJlbD5cclxuYCxcclxuICAgIHByb3ZpZGVyczogW0NIRUNLQk9YX1ZBTFVFX0FDQ0VTU09SXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcblxyXG4gICAgcHJpdmF0ZSBfY2hlY2tib3hJZDogc3RyaW5nID0gYHV4LWNoZWNrYm94LSR7Kyt1bmlxdWVDaGVja2JveElkfWA7XHJcblxyXG4gICAgQElucHV0KCkgaWQ6IHN0cmluZyA9IHRoaXMuX2NoZWNrYm94SWQ7XHJcbiAgICBASW5wdXQoKSBuYW1lOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgQElucHV0KCkgcmVxdWlyZWQ6IGJvb2xlYW47XHJcbiAgICBASW5wdXQoKSB0YWJpbmRleDogbnVtYmVyID0gMDtcclxuICAgIEBJbnB1dCgpIGNsaWNrYWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBzaW1wbGlmaWVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBpbmRldGVybWluYXRlVmFsdWU6IGFueSA9IC0xO1xyXG4gICAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBJbnB1dCgnYXJpYS1sYWJlbCcpIGFyaWFMYWJlbDogc3RyaW5nID0gJyc7XHJcbiAgICBASW5wdXQoJ2FyaWEtbGFiZWxsZWRieScpIGFyaWFMYWJlbGxlZGJ5OiBzdHJpbmcgPSBudWxsO1xyXG5cclxuICAgIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHZhbHVlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgdmFsdWUodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcblxyXG4gICAgICAgIC8vIGRldGVybWluZSBpZiBpdCBpcyBpbiB0aGUgaW5kZXRlcm1pbmF0ZSBzdGF0ZVxyXG4gICAgICAgIHRoaXMuaW5kZXRlcm1pbmF0ZSA9IHRoaXMuX3ZhbHVlID09PSB0aGlzLmluZGV0ZXJtaW5hdGVWYWx1ZTtcclxuXHJcbiAgICAgICAgLy8gZGV0ZXJtaW5lIHRoZSBjaGVja2VkIHN0YXRlXHJcbiAgICAgICAgdGhpcy5hcmlhQ2hlY2tlZCA9IHRoaXMuaW5kZXRlcm1pbmF0ZSA/ICdtaXhlZCcgOiB0aGlzLl92YWx1ZTtcclxuXHJcbiAgICAgICAgLy8gaW52b2tlIGNoYW5nZSBldmVudFxyXG4gICAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLl92YWx1ZSk7XHJcblxyXG4gICAgICAgIC8vIGNhbGwgY2FsbGJhY2tcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodGhpcy5fdmFsdWUpO1xyXG4gICAgICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaW5wdXRJZCgpOiBzdHJpbmcgeyBcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5pZCB8fCB0aGlzLl9jaGVja2JveElkfS1pbnB1dGA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdmFsdWU6IGFueSA9IGZhbHNlO1xyXG5cclxuICAgIGluZGV0ZXJtaW5hdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGFyaWFDaGVja2VkOiBib29sZWFuIHwgc3RyaW5nO1xyXG4gICAgZm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIG9uVG91Y2hlZENhbGxiYWNrOiAoKSA9PiB2b2lkID0gKCkgPT4geyB9O1xyXG4gICAgb25DaGFuZ2VDYWxsYmFjazogKF86IGFueSkgPT4gdm9pZCA9ICgpID0+IHsgfTtcclxuXHJcbiAgICB0b2dnbGUoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8ICF0aGlzLmNsaWNrYWJsZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy52YWx1ZSA9PT0gdGhpcy5pbmRldGVybWluYXRlVmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRvZ2dsZSB0aGUgY2hlY2tlZCBzdGF0ZVxyXG4gICAgICAgIHRoaXMudmFsdWUgPSAhdGhpcy52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGdW5jdGlvbnMgcmVxdWlyZWQgdG8gdXBkYXRlIG5nTW9kZWxcclxuXHJcbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAodmFsdWUgIT09IHRoaXMuX3ZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IGZuO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrID0gZm47XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgICB9XHJcbn1cclxuIl19