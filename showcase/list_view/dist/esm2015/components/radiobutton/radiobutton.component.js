/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export const /** @type {?} */ RADIOBUTTON_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RadioButtonComponent),
    multi: true
};
let /** @type {?} */ uniqueRadioId = 0;
export class RadioButtonComponent {
    constructor() {
        this._radioButtonId = `ux-radio-button-${++uniqueRadioId}`;
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
        return `${this.id || this._radioButtonId}-input`;
    }
    /**
     * @return {?}
     */
    toggle() {
        if (this.disabled || !this.clickable) {
            return;
        }
        // toggle the checked state
        this.value = this.option;
        // call callback
        this.onChangeCallback(this.value);
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
RadioButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-radio-button',
                template: `<label [attr.for]="inputId" class="ux-radio-button"
       [class.ux-radio-button-checked]="value === option"
       [class.ux-radio-button-simplified]="simplified"
       [class.ux-radio-button-disabled]="disabled"
       [class.ux-radio-button-focused]="focused">

    <div class="ux-radio-button-container">
        <input class="ux-radio-button-input"
            type="radio"
            [id]="inputId"
            [checked]="value === option"
            [disabled]="disabled"
            [tabindex]="tabindex || value === option ? 0 : -1"
            [attr.name]="name"
            [required]="required"
            [attr.aria-label]="ariaLabel"
            [attr.aria-labelledby]="ariaLabelledby"
            [attr.aria-describedby]="ariaDescribedby"
            [attr.aria-checked]="value === option"
            (focus)="focused = true"
            (blur)="focused = false"
            (change)="toggle()"
            (click)="$event.stopPropagation()">
    </div>

    <span class="ux-radio-button-label">
        <ng-content></ng-content>
    </span>

</label>`,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW9idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmFkaW9idXR0b24vcmFkaW9idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsTUFBTSxDQUFDLHVCQUFNLDBCQUEwQixHQUFRO0lBQzNDLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztJQUNuRCxLQUFLLEVBQUUsSUFBSTtDQUNkLENBQUM7QUFFRixxQkFBSSxhQUFhLEdBQUcsQ0FBQyxDQUFDO0FBb0N0QixNQUFNOzs4QkFFK0IsbUJBQW1CLEVBQUUsYUFBYSxFQUFFO2tCQUUvQyxJQUFJLENBQUMsY0FBYzt3QkFHYixDQUFDO3lCQUNDLElBQUk7d0JBQ0wsS0FBSzswQkFDSCxLQUFLO3lCQUVLLEVBQUU7OEJBQ1EsSUFBSTsrQkFDRixJQUFJOzJCQUVkLElBQUksWUFBWSxFQUFPO3NCQXNCNUMsS0FBSzt1QkFFUixLQUFLO2lDQUNRLEdBQUcsRUFBRSxJQUFJO2dDQUNKLEdBQUcsRUFBRSxJQUFJOzs7OztRQXZCMUMsS0FBSztRQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDOzs7Ozs7SUFHdkIsSUFBSSxLQUFLLENBQUMsS0FBYztRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzs7UUFHcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDOztRQUduQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0tBQzVCOzs7O0lBRUQsSUFBSSxPQUFPO1FBQ1AsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsY0FBYyxRQUFRLENBQUM7S0FDcEQ7Ozs7SUFRRCxNQUFNO1FBRUYsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ25DLE1BQU0sQ0FBQztTQUNWOztRQUdELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQzs7UUFHekIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNyQzs7Ozs7SUFHRCxVQUFVLENBQUMsS0FBYztRQUNyQixFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDdkI7S0FDSjs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7S0FDOUI7Ozs7O0lBRUQsaUJBQWlCLENBQUMsRUFBTztRQUNyQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO0tBQy9COzs7OztJQUVELGdCQUFnQixDQUFDLFVBQW1CO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0tBQzlCOzs7WUE1R0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0E2Qkw7Z0JBQ0wsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7YUFDMUM7Ozs7bUJBS0ksS0FBSztxQkFDTCxLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLO3lCQUNMLEtBQUs7MkJBQ0wsS0FBSzt1QkFDTCxLQUFLOzBCQUNMLEtBQUssU0FBQyxZQUFZOytCQUNsQixLQUFLLFNBQUMsaUJBQWlCO2dDQUN2QixLQUFLLFNBQUMsa0JBQWtCOzRCQUV4QixNQUFNO3NCQUVOLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5leHBvcnQgY29uc3QgUkFESU9CVVRUT05fVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcclxuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUmFkaW9CdXR0b25Db21wb25lbnQpLFxyXG4gICAgbXVsdGk6IHRydWVcclxufTtcclxuXHJcbmxldCB1bmlxdWVSYWRpb0lkID0gMDtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd1eC1yYWRpby1idXR0b24nLFxyXG4gICAgdGVtcGxhdGU6IGA8bGFiZWwgW2F0dHIuZm9yXT1cImlucHV0SWRcIiBjbGFzcz1cInV4LXJhZGlvLWJ1dHRvblwiXHJcbiAgICAgICBbY2xhc3MudXgtcmFkaW8tYnV0dG9uLWNoZWNrZWRdPVwidmFsdWUgPT09IG9wdGlvblwiXHJcbiAgICAgICBbY2xhc3MudXgtcmFkaW8tYnV0dG9uLXNpbXBsaWZpZWRdPVwic2ltcGxpZmllZFwiXHJcbiAgICAgICBbY2xhc3MudXgtcmFkaW8tYnV0dG9uLWRpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgIFtjbGFzcy51eC1yYWRpby1idXR0b24tZm9jdXNlZF09XCJmb2N1c2VkXCI+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInV4LXJhZGlvLWJ1dHRvbi1jb250YWluZXJcIj5cclxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJ1eC1yYWRpby1idXR0b24taW5wdXRcIlxyXG4gICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICBbaWRdPVwiaW5wdXRJZFwiXHJcbiAgICAgICAgICAgIFtjaGVja2VkXT1cInZhbHVlID09PSBvcHRpb25cIlxyXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICBbdGFiaW5kZXhdPVwidGFiaW5kZXggfHwgdmFsdWUgPT09IG9wdGlvbiA/IDAgOiAtMVwiXHJcbiAgICAgICAgICAgIFthdHRyLm5hbWVdPVwibmFtZVwiXHJcbiAgICAgICAgICAgIFtyZXF1aXJlZF09XCJyZXF1aXJlZFwiXHJcbiAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiYXJpYUxhYmVsXCJcclxuICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbGxlZGJ5XT1cImFyaWFMYWJlbGxlZGJ5XCJcclxuICAgICAgICAgICAgW2F0dHIuYXJpYS1kZXNjcmliZWRieV09XCJhcmlhRGVzY3JpYmVkYnlcIlxyXG4gICAgICAgICAgICBbYXR0ci5hcmlhLWNoZWNrZWRdPVwidmFsdWUgPT09IG9wdGlvblwiXHJcbiAgICAgICAgICAgIChmb2N1cyk9XCJmb2N1c2VkID0gdHJ1ZVwiXHJcbiAgICAgICAgICAgIChibHVyKT1cImZvY3VzZWQgPSBmYWxzZVwiXHJcbiAgICAgICAgICAgIChjaGFuZ2UpPVwidG9nZ2xlKClcIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCI+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8c3BhbiBjbGFzcz1cInV4LXJhZGlvLWJ1dHRvbi1sYWJlbFwiPlxyXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgIDwvc3Bhbj5cclxuXHJcbjwvbGFiZWw+YCxcclxuICAgIHByb3ZpZGVyczogW1JBRElPQlVUVE9OX1ZBTFVFX0FDQ0VTU09SXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmFkaW9CdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcblxyXG4gICAgcHJpdmF0ZSBfcmFkaW9CdXR0b25JZDogc3RyaW5nID0gYHV4LXJhZGlvLWJ1dHRvbi0keysrdW5pcXVlUmFkaW9JZH1gO1xyXG5cclxuICAgIEBJbnB1dCgpIGlkOiBzdHJpbmcgPSB0aGlzLl9yYWRpb0J1dHRvbklkO1xyXG4gICAgQElucHV0KCkgbmFtZTogc3RyaW5nIHwgbnVsbDtcclxuICAgIEBJbnB1dCgpIHJlcXVpcmVkOiBib29sZWFuO1xyXG4gICAgQElucHV0KCkgdGFiaW5kZXg6IG51bWJlciA9IDA7XHJcbiAgICBASW5wdXQoKSBjbGlja2FibGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHNpbXBsaWZpZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIG9wdGlvbjogYW55O1xyXG4gICAgQElucHV0KCdhcmlhLWxhYmVsJykgYXJpYUxhYmVsOiBzdHJpbmcgPSAnJztcclxuICAgIEBJbnB1dCgnYXJpYS1sYWJlbGxlZGJ5JykgYXJpYUxhYmVsbGVkYnk6IHN0cmluZyA9IG51bGw7XHJcbiAgICBASW5wdXQoJ2FyaWEtZGVzY3JpYmVkYnknKSBhcmlhRGVzY3JpYmVkYnk6IHN0cmluZyA9IG51bGw7XHJcblxyXG4gICAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdmFsdWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCB2YWx1ZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcblxyXG4gICAgICAgIC8vIGludm9rZSBjaGFuZ2UgZXZlbnRcclxuICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy5fdmFsdWUpO1xyXG5cclxuICAgICAgICAvLyBjYWxsIGNhbGxiYWNrXHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKHRoaXMuX3ZhbHVlKTtcclxuICAgICAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrKCk7ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaW5wdXRJZCgpOiBzdHJpbmcgeyBcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5pZCB8fCB0aGlzLl9yYWRpb0J1dHRvbklkfS1pbnB1dGA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdmFsdWU6IGFueSA9IGZhbHNlO1xyXG5cclxuICAgIGZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIG9uVG91Y2hlZENhbGxiYWNrOiAoKSA9PiB2b2lkID0gKCkgPT4geyB9O1xyXG4gICAgb25DaGFuZ2VDYWxsYmFjazogKF86IGFueSkgPT4gdm9pZCA9ICgpID0+IHsgfTtcclxuXHJcbiAgICB0b2dnbGUoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8ICF0aGlzLmNsaWNrYWJsZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0b2dnbGUgdGhlIGNoZWNrZWQgc3RhdGVcclxuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5vcHRpb247XHJcblxyXG4gICAgICAgIC8vIGNhbGwgY2FsbGJhY2tcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodGhpcy52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRnVuY3Rpb25zIHJlcXVpcmVkIHRvIHVwZGF0ZSBuZy1tb2RlbFxyXG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrID0gZm47XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcclxuICAgIH1cclxuXHJcbiAgICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICAgIH1cclxufVxyXG4iXX0=