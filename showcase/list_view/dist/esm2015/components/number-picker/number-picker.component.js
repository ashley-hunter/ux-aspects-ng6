/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export const /** @type {?} */ NUMBER_PICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NumberPickerComponent),
    multi: true
};
export class NumberPickerComponent {
    constructor() {
        this._min = -Infinity;
        this._max = Infinity;
        this._step = 1;
        this._disabled = false;
        this._value = 0;
        this._propagateChange = (_) => { };
        this.valid = true;
        this.valueChange = new EventEmitter();
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
        this.valueChange.emit(value);
        this._propagateChange(value);
    }
    /**
     * @return {?}
     */
    get min() {
        return this._min;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set min(value) {
        this._min = typeof value === 'string' ? parseFloat(value) : value;
    }
    /**
     * @return {?}
     */
    get max() {
        return this._max;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set max(value) {
        this._max = typeof value === 'string' ? parseFloat(value) : value;
    }
    /**
     * @return {?}
     */
    get step() {
        return this._step;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set step(value) {
        this._step = typeof value === 'string' ? parseFloat(value) : value;
    }
    /**
     * @return {?}
     */
    get disabled() {
        return this._disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = typeof value === 'string' && (value === '' || value === 'true' || value === 'disabled') || value === true;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    increment(event) {
        event.preventDefault();
        if (!this.disabled) {
            this.value = Math.max(Math.min(this.value + this.step, this.max), this.min);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    decrement(event) {
        event.preventDefault();
        if (!this.disabled) {
            this.value = Math.min(Math.max(this.value - this.step, this.min), this.max);
        }
    }
    /**
     * @return {?}
     */
    isValid() {
        if (this.value < this.min || this.value > this.max) {
            return false;
        }
        return this.valid;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onScroll(event) {
        let /** @type {?} */ scrollValue = event.deltaY || event.wheelDelta;
        if (scrollValue < 0) {
            this.increment(event);
        }
        else {
            this.decrement(event);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value !== undefined) {
            this._value = value;
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._propagateChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) { }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
NumberPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-number-picker',
                template: `<input type="number"
       role="spinbutton"
       class="form-control number-picker-input"
       [(ngModel)]="value"
       [min]="min"
       [max]="max"
       (keydown.ArrowDown)="decrement($event)"
       (keydown.ArrowUp)="increment($event)"
       (wheel)="onScroll($event)"
       step="any"
       [disabled]="disabled"
       [attr.aria-valuemin]="min"
       [attr.aria-valuenow]="value"
       [attr.aria-valuemax]="max">

<div class="number-picker-controls">

    <div class="number-picker-control-up"
         (click)="increment($event)"
         [class.disabled]="disabled || value >= max">

        <span class="hpe-icon hpe-up"></span>
    </div>

    <div class="number-picker-control-down"
         (click)="decrement($event)"
         [class.disabled]="disabled || value <= min">

        <span class="hpe-icon hpe-down"></span>
    </div>

</div>`,
                providers: [NUMBER_PICKER_VALUE_ACCESSOR],
                host: {
                    '[class.has-error]': '!isValid()'
                }
            },] },
];
/** @nocollapse */
NumberPickerComponent.propDecorators = {
    "valid": [{ type: Input },],
    "valueChange": [{ type: Output },],
    "value": [{ type: Input, args: ['value',] },],
    "min": [{ type: Input },],
    "max": [{ type: Input },],
    "step": [{ type: Input },],
    "disabled": [{ type: Input },],
};
function NumberPickerComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    NumberPickerComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    NumberPickerComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    NumberPickerComponent.propDecorators;
    /** @type {?} */
    NumberPickerComponent.prototype._min;
    /** @type {?} */
    NumberPickerComponent.prototype._max;
    /** @type {?} */
    NumberPickerComponent.prototype._step;
    /** @type {?} */
    NumberPickerComponent.prototype._disabled;
    /** @type {?} */
    NumberPickerComponent.prototype._value;
    /** @type {?} */
    NumberPickerComponent.prototype._propagateChange;
    /** @type {?} */
    NumberPickerComponent.prototype.valid;
    /** @type {?} */
    NumberPickerComponent.prototype.valueChange;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9udW1iZXItcGlja2VyL251bWJlci1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsTUFBTSxDQUFDLHVCQUFNLDRCQUE0QixHQUFRO0lBQzdDLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztJQUNwRCxLQUFLLEVBQUUsSUFBSTtDQUNkLENBQUM7QUF5Q0YsTUFBTTs7b0JBRXFCLENBQUMsUUFBUTtvQkFDVCxRQUFRO3FCQUNQLENBQUM7eUJBQ0ksS0FBSztzQkFDVCxDQUFDO2dDQUNDLENBQUMsQ0FBTSxFQUFFLEVBQUUsSUFBSTtxQkFFaEIsSUFBSTsyQkFDTixJQUFJLFlBQVksRUFBVTs7Ozs7UUFHOUMsS0FBSztRQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDOzs7Ozs7SUFFdkIsSUFBSSxLQUFLLENBQUMsS0FBYTtRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDaEM7Ozs7UUFHRyxHQUFHO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Ozs7OztJQUVyQixJQUFJLEdBQUcsQ0FBQyxLQUFLO1FBQ1QsSUFBSSxDQUFD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QUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUN2QjtLQUNKOzs7OztJQUVELGdCQUFnQixDQUFDLEVBQU87UUFDcEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztLQUM5Qjs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxFQUFPLEtBQVc7Ozs7O0lBRXBDLGdCQUFnQixDQUFDLFVBQW1CO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0tBQzlCOzs7WUE5SUosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQStCUDtnQkFDSCxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztnQkFDekMsSUFBSSxFQUFFO29CQUNGLG1CQUFtQixFQUFFLFlBQVk7aUJBQ3BDO2FBQ0o7Ozs7c0JBVUksS0FBSzs0QkFDTCxNQUFNO3NCQUVOLEtBQUssU0FBQyxPQUFPO29CQVViLEtBQUs7b0JBUUwsS0FBSztxQkFRTCxLQUFLO3lCQVFMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5leHBvcnQgY29uc3QgTlVNQkVSX1BJQ0tFUl9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xyXG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOdW1iZXJQaWNrZXJDb21wb25lbnQpLFxyXG4gICAgbXVsdGk6IHRydWVcclxufTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd1eC1udW1iZXItcGlja2VyJyxcclxuICAgIHRlbXBsYXRlOiBgPGlucHV0IHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgcm9sZT1cInNwaW5idXR0b25cIlxyXG4gICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgbnVtYmVyLXBpY2tlci1pbnB1dFwiXHJcbiAgICAgICBbKG5nTW9kZWwpXT1cInZhbHVlXCJcclxuICAgICAgIFttaW5dPVwibWluXCJcclxuICAgICAgIFttYXhdPVwibWF4XCJcclxuICAgICAgIChrZXlkb3duLkFycm93RG93bik9XCJkZWNyZW1lbnQoJGV2ZW50KVwiXHJcbiAgICAgICAoa2V5ZG93bi5BcnJvd1VwKT1cImluY3JlbWVudCgkZXZlbnQpXCJcclxuICAgICAgICh3aGVlbCk9XCJvblNjcm9sbCgkZXZlbnQpXCJcclxuICAgICAgIHN0ZXA9XCJhbnlcIlxyXG4gICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgIFthdHRyLmFyaWEtdmFsdWVtaW5dPVwibWluXCJcclxuICAgICAgIFthdHRyLmFyaWEtdmFsdWVub3ddPVwidmFsdWVcIlxyXG4gICAgICAgW2F0dHIuYXJpYS12YWx1ZW1heF09XCJtYXhcIj5cclxuXHJcbjxkaXYgY2xhc3M9XCJudW1iZXItcGlja2VyLWNvbnRyb2xzXCI+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cIm51bWJlci1waWNrZXItY29udHJvbC11cFwiXHJcbiAgICAgICAgIChjbGljayk9XCJpbmNyZW1lbnQoJGV2ZW50KVwiXHJcbiAgICAgICAgIFtjbGFzcy5kaXNhYmxlZF09XCJkaXNhYmxlZCB8fCB2YWx1ZSA+PSBtYXhcIj5cclxuXHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJocGUtaWNvbiBocGUtdXBcIj48L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwibnVtYmVyLXBpY2tlci1jb250cm9sLWRvd25cIlxyXG4gICAgICAgICAoY2xpY2spPVwiZGVjcmVtZW50KCRldmVudClcIlxyXG4gICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZWQgfHwgdmFsdWUgPD0gbWluXCI+XHJcblxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaHBlLWljb24gaHBlLWRvd25cIj48L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuXHJcbjwvZGl2PmAsXHJcbiAgICBwcm92aWRlcnM6IFtOVU1CRVJfUElDS0VSX1ZBTFVFX0FDQ0VTU09SXSxcclxuICAgIGhvc3Q6IHtcclxuICAgICAgICAnW2NsYXNzLmhhcy1lcnJvcl0nOiAnIWlzVmFsaWQoKSdcclxuICAgIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE51bWJlclBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcclxuXHJcbiAgICBwcml2YXRlIF9taW46IG51bWJlciA9IC1JbmZpbml0eTtcclxuICAgIHByaXZhdGUgX21heDogbnVtYmVyID0gSW5maW5pdHk7XHJcbiAgICBwcml2YXRlIF9zdGVwOiBudW1iZXIgPSAxO1xyXG4gICAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX3ZhbHVlOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBfcHJvcGFnYXRlQ2hhbmdlID0gKF86IGFueSkgPT4geyB9O1xyXG5cclxuICAgIEBJbnB1dCgpIHZhbGlkOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG5cclxuICAgIEBJbnB1dCgndmFsdWUnKVxyXG4gICAgZ2V0IHZhbHVlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gICAgfVxyXG4gICAgc2V0IHZhbHVlKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5fcHJvcGFnYXRlQ2hhbmdlKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG1pbigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9taW47XHJcbiAgICB9XHJcbiAgICBzZXQgbWluKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fbWluID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHBhcnNlRmxvYXQodmFsdWUpIDogdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBtYXgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWF4O1xyXG4gICAgfVxyXG4gICAgc2V0IG1heCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX21heCA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyBwYXJzZUZsb2F0KHZhbHVlKSA6IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgc3RlcCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGVwO1xyXG4gICAgfVxyXG4gICAgc2V0IHN0ZXAodmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9zdGVwID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHBhcnNlRmxvYXQodmFsdWUpIDogdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XHJcbiAgICB9XHJcbiAgICBzZXQgZGlzYWJsZWQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9kaXNhYmxlZCA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgKHZhbHVlID09PSAnJyB8fCB2YWx1ZSA9PT0gJ3RydWUnIHx8IHZhbHVlID09PSAnZGlzYWJsZWQnKSB8fCB2YWx1ZSA9PT0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpbmNyZW1lbnQoZXZlbnQ6IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBNYXRoLm1heChNYXRoLm1pbih0aGlzLnZhbHVlICsgdGhpcy5zdGVwLCB0aGlzLm1heCksIHRoaXMubWluKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVjcmVtZW50KGV2ZW50OiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gTWF0aC5taW4oTWF0aC5tYXgodGhpcy52YWx1ZSAtIHRoaXMuc3RlcCwgdGhpcy5taW4pLCB0aGlzLm1heCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlzVmFsaWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPCB0aGlzLm1pbiB8fCB0aGlzLnZhbHVlID4gdGhpcy5tYXgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgb25TY3JvbGwoZXZlbnQ6IFdoZWVsRXZlbnQpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgbGV0IHNjcm9sbFZhbHVlID0gZXZlbnQuZGVsdGFZIHx8IGV2ZW50LndoZWVsRGVsdGE7XHJcblxyXG4gICAgICAgIGlmIChzY3JvbGxWYWx1ZSA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5pbmNyZW1lbnQoZXZlbnQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVjcmVtZW50KGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fcHJvcGFnYXRlQ2hhbmdlID0gZm47XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQgeyB9XHJcblxyXG4gICAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgICB9XHJcblxyXG59Il19