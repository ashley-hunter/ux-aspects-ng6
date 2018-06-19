/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export const /** @type {?} */ SPIN_BUTTON_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SpinButtonComponent),
    multi: true
};
export class SpinButtonComponent {
    constructor() {
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
        this.onTouchedCallback = () => { };
        this.onChangeCallback = () => { };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this._value = value;
        this.onChangeCallback(value);
        this.onTouchedCallback();
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    scroll(event) {
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
    }
    /**
     * @return {?}
     */
    triggerIncrement() {
        if (!this.disabled) {
            this.increment.emit();
        }
    }
    /**
     * @return {?}
     */
    triggerDecrement() {
        if (!this.disabled) {
            this.decrement.emit();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
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
SpinButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-spin-button',
                template: `<button class="spin-button"
        *ngIf="spinners"
        tabindex="-1"
        [disabled]="disabled"
        [attr.aria-label]="incrementAriaLabel"
        [attr.aria-disabled]="disabled"
        (click)="triggerIncrement()">

  <span class="hpe-icon hpe-up"></span>
</button>

<input [type]="type"
       role="spinbutton"
       [min]="min"
       [max]="max"
       [tabindex]="0"
       class="form-control"
       [placeholder]="placeholder"
       [readOnly]="readOnly"
       [disabled]="disabled"
       [attr.aria-label]="inputAriaLabel"
       [attr.aria-disabled]="disabled"
       [attr.aria-valuemin]="min"
       [attr.aria-valuenow]="value"
       [attr.aria-valuemax]="max"
       [attr.aria-readonly]="readOnly"
       [ngModel]="value"
       (ngModelChange)="valueChange.emit($event)"
       (wheel)="scroll($event)"
       (keydown.arrowup)="arrowkeys ? triggerIncrement() : null; $event.preventDefault()"
       (keydown.arrowdown)="arrowkeys ? triggerDecrement() : null; $event.preventDefault()">

<button class="spin-button"
        *ngIf="spinners"
        tabindex="-1"
        [disabled]="disabled"
        [attr.aria-label]="decrementAriaLabel"
        [attr.aria-disabled]="disabled"
        (click)="triggerDecrement()">

  <span class="hpe-icon hpe-down"></span>
</button>`,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbi1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc3Bpbi1idXR0b24vc3Bpbi1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvSCxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsTUFBTSxDQUFDLHVCQUFNLDBCQUEwQixHQUFRO0lBQzNDLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztJQUNsRCxLQUFLLEVBQUUsSUFBSTtDQUNkLENBQUM7QUFrREYsTUFBTTs7b0JBWXNCLE1BQU07MkJBR0MsRUFBRTt3QkFDSixLQUFLO3dCQUNMLElBQUk7d0JBQ0osSUFBSTt5QkFDSCxJQUFJO3lCQUNKLElBQUk7MkJBTVYsSUFBSSxZQUFZLEVBQU87eUJBRXpCLElBQUksWUFBWSxFQUFRO3lCQUN4QixJQUFJLFlBQVksRUFBUTtpQ0FFZCxHQUFHLEVBQUUsSUFBSTtnQ0FDSixHQUFHLEVBQUUsSUFBSTs7Ozs7O1FBOUJqQyxLQUFLLENBQUMsS0FBVTtRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7Ozs7O0lBRzdCLElBQUksS0FBSztRQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0tBQ3RCOzs7OztJQTBCRCxNQUFNLENBQUMsS0FBaUI7UUFFcEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNsQixNQUFNLENBQUM7U0FDVjtRQUVELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUMzQjtRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDM0I7UUFFRCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7S0FDMUI7Ozs7SUFFRCxnQkFBZ0I7UUFDWixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDekI7S0FDSjs7OztJQUVELGdCQUFnQjtRQUNaLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN6QjtLQUNKOzs7OztJQUVELFVBQVUsQ0FBQyxLQUFVO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0tBQ3RCOzs7OztJQUVELGdCQUFnQixDQUFDLEVBQW9CO1FBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7S0FDOUI7Ozs7O0lBRUQsaUJBQWlCLENBQUMsRUFBYztRQUM1QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO0tBQy9COzs7OztJQUVELGdCQUFnQixDQUFDLFVBQW1CO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0tBQzlCOzs7WUE3SEosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUF5Q0o7Z0JBQ04sYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQzthQUMxQzs7OztzQkFHSSxLQUFLO3FCQVVMLEtBQUs7b0JBQ0wsS0FBSztvQkFDTCxLQUFLOzRCQUNMLEtBQUs7eUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLO21DQUVMLEtBQUs7K0JBQ0wsS0FBSzttQ0FDTCxLQUFLOzRCQUVMLE1BQU07MEJBRU4sTUFBTTswQkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5leHBvcnQgY29uc3QgU1BJTl9CVVRUT05fVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcclxuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU3BpbkJ1dHRvbkNvbXBvbmVudCksXHJcbiAgICBtdWx0aTogdHJ1ZVxyXG59O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3V4LXNwaW4tYnV0dG9uJyxcclxuICAgIHRlbXBsYXRlOiBgPGJ1dHRvbiBjbGFzcz1cInNwaW4tYnV0dG9uXCJcclxuICAgICAgICAqbmdJZj1cInNwaW5uZXJzXCJcclxuICAgICAgICB0YWJpbmRleD1cIi0xXCJcclxuICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiaW5jcmVtZW50QXJpYUxhYmVsXCJcclxuICAgICAgICBbYXR0ci5hcmlhLWRpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgICAoY2xpY2spPVwidHJpZ2dlckluY3JlbWVudCgpXCI+XHJcblxyXG4gIDxzcGFuIGNsYXNzPVwiaHBlLWljb24gaHBlLXVwXCI+PC9zcGFuPlxyXG48L2J1dHRvbj5cclxuXHJcbjxpbnB1dCBbdHlwZV09XCJ0eXBlXCJcclxuICAgICAgIHJvbGU9XCJzcGluYnV0dG9uXCJcclxuICAgICAgIFttaW5dPVwibWluXCJcclxuICAgICAgIFttYXhdPVwibWF4XCJcclxuICAgICAgIFt0YWJpbmRleF09XCIwXCJcclxuICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXHJcbiAgICAgICBbcmVhZE9ubHldPVwicmVhZE9ubHlcIlxyXG4gICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiaW5wdXRBcmlhTGFiZWxcIlxyXG4gICAgICAgW2F0dHIuYXJpYS1kaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICBbYXR0ci5hcmlhLXZhbHVlbWluXT1cIm1pblwiXHJcbiAgICAgICBbYXR0ci5hcmlhLXZhbHVlbm93XT1cInZhbHVlXCJcclxuICAgICAgIFthdHRyLmFyaWEtdmFsdWVtYXhdPVwibWF4XCJcclxuICAgICAgIFthdHRyLmFyaWEtcmVhZG9ubHldPVwicmVhZE9ubHlcIlxyXG4gICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxyXG4gICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwidmFsdWVDaGFuZ2UuZW1pdCgkZXZlbnQpXCJcclxuICAgICAgICh3aGVlbCk9XCJzY3JvbGwoJGV2ZW50KVwiXHJcbiAgICAgICAoa2V5ZG93bi5hcnJvd3VwKT1cImFycm93a2V5cyA/IHRyaWdnZXJJbmNyZW1lbnQoKSA6IG51bGw7ICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCJcclxuICAgICAgIChrZXlkb3duLmFycm93ZG93bik9XCJhcnJvd2tleXMgPyB0cmlnZ2VyRGVjcmVtZW50KCkgOiBudWxsOyAkZXZlbnQucHJldmVudERlZmF1bHQoKVwiPlxyXG5cclxuPGJ1dHRvbiBjbGFzcz1cInNwaW4tYnV0dG9uXCJcclxuICAgICAgICAqbmdJZj1cInNwaW5uZXJzXCJcclxuICAgICAgICB0YWJpbmRleD1cIi0xXCJcclxuICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiZGVjcmVtZW50QXJpYUxhYmVsXCJcclxuICAgICAgICBbYXR0ci5hcmlhLWRpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgICAoY2xpY2spPVwidHJpZ2dlckRlY3JlbWVudCgpXCI+XHJcblxyXG4gIDxzcGFuIGNsYXNzPVwiaHBlLWljb24gaHBlLWRvd25cIj48L3NwYW4+XHJcbjwvYnV0dG9uPmAsXHJcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgICBwcm92aWRlcnM6IFtTUElOX0JVVFRPTl9WQUxVRV9BQ0NFU1NPUl1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNwaW5CdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcblxyXG4gICAgQElucHV0KCkgc2V0IHZhbHVlKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayh2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB2YWx1ZSgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKSB0eXBlOiBzdHJpbmcgPSAndGV4dCc7XHJcbiAgICBASW5wdXQoKSBtaW46IG51bWJlcjtcclxuICAgIEBJbnB1dCgpIG1heDogbnVtYmVyO1xyXG4gICAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICcnO1xyXG4gICAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHNwaW5uZXJzOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgpIHJlYWRPbmx5OiBib29sZWFuID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgpIHNjcm9sbGluZzogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBhcnJvd2tleXM6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIEBJbnB1dCgpIGluY3JlbWVudEFyaWFMYWJlbDogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgaW5wdXRBcmlhTGFiZWw6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGRlY3JlbWVudEFyaWFMYWJlbDogc3RyaW5nO1xyXG5cclxuICAgIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAgIEBPdXRwdXQoKSBpbmNyZW1lbnQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgICBAT3V0cHV0KCkgZGVjcmVtZW50ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICAgIG9uVG91Y2hlZENhbGxiYWNrOiAoKSA9PiB2b2lkID0gKCkgPT4geyB9O1xyXG4gICAgb25DaGFuZ2VDYWxsYmFjazogKF86IGFueSkgPT4gdm9pZCA9ICgpID0+IHsgfTtcclxuXHJcbiAgICBwcml2YXRlIF92YWx1ZTogYW55O1xyXG5cclxuICAgIHNjcm9sbChldmVudDogV2hlZWxFdmVudCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuc2Nyb2xsaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChldmVudC5kZWx0YVkgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlckRlY3JlbWVudCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlckluY3JlbWVudCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICB0cmlnZ2VySW5jcmVtZW50KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmluY3JlbWVudC5lbWl0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRyaWdnZXJEZWNyZW1lbnQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVjcmVtZW50LmVtaXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcclxuICAgIH1cclxuXHJcbiAgICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICAgIH1cclxuXHJcbn0iXX0=