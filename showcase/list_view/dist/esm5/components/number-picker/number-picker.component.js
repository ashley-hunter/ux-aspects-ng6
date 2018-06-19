/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export var /** @type {?} */ NUMBER_PICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return NumberPickerComponent; }),
    multi: true
};
var NumberPickerComponent = /** @class */ (function () {
    function NumberPickerComponent() {
        this._min = -Infinity;
        this._max = Infinity;
        this._step = 1;
        this._disabled = false;
        this._value = 0;
        this._propagateChange = function (_) { };
        this.valid = true;
        this.valueChange = new EventEmitter();
    }
    Object.defineProperty(NumberPickerComponent.prototype, "value", {
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
            this.valueChange.emit(value);
            this._propagateChange(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberPickerComponent.prototype, "min", {
        get: /**
         * @return {?}
         */
        function () {
            return this._min;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._min = typeof value === 'string' ? parseFloat(value) : value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberPickerComponent.prototype, "max", {
        get: /**
         * @return {?}
         */
        function () {
            return this._max;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._max = typeof value === 'string' ? parseFloat(value) : value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberPickerComponent.prototype, "step", {
        get: /**
         * @return {?}
         */
        function () {
            return this._step;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._step = typeof value === 'string' ? parseFloat(value) : value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NumberPickerComponent.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = typeof value === 'string' && (value === '' || value === 'true' || value === 'disabled') || value === true;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    NumberPickerComponent.prototype.increment = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        if (!this.disabled) {
            this.value = Math.max(Math.min(this.value + this.step, this.max), this.min);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NumberPickerComponent.prototype.decrement = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        if (!this.disabled) {
            this.value = Math.min(Math.max(this.value - this.step, this.min), this.max);
        }
    };
    /**
     * @return {?}
     */
    NumberPickerComponent.prototype.isValid = /**
     * @return {?}
     */
    function () {
        if (this.value < this.min || this.value > this.max) {
            return false;
        }
        return this.valid;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NumberPickerComponent.prototype.onScroll = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var /** @type {?} */ scrollValue = event.deltaY || event.wheelDelta;
        if (scrollValue < 0) {
            this.increment(event);
        }
        else {
            this.decrement(event);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NumberPickerComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value !== undefined) {
            this._value = value;
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NumberPickerComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._propagateChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NumberPickerComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NumberPickerComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
    NumberPickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-number-picker',
                    template: "<input type=\"number\"\n       role=\"spinbutton\"\n       class=\"form-control number-picker-input\"\n       [(ngModel)]=\"value\"\n       [min]=\"min\"\n       [max]=\"max\"\n       (keydown.ArrowDown)=\"decrement($event)\"\n       (keydown.ArrowUp)=\"increment($event)\"\n       (wheel)=\"onScroll($event)\"\n       step=\"any\"\n       [disabled]=\"disabled\"\n       [attr.aria-valuemin]=\"min\"\n       [attr.aria-valuenow]=\"value\"\n       [attr.aria-valuemax]=\"max\">\n\n<div class=\"number-picker-controls\">\n\n    <div class=\"number-picker-control-up\"\n         (click)=\"increment($event)\"\n         [class.disabled]=\"disabled || value >= max\">\n\n        <span class=\"hpe-icon hpe-up\"></span>\n    </div>\n\n    <div class=\"number-picker-control-down\"\n         (click)=\"decrement($event)\"\n         [class.disabled]=\"disabled || value <= min\">\n\n        <span class=\"hpe-icon hpe-down\"></span>\n    </div>\n\n</div>",
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
    return NumberPickerComponent;
}());
export { NumberPickerComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9udW1iZXItcGlja2VyL251bWJlci1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsTUFBTSxDQUFDLHFCQUFNLDRCQUE0QixHQUFRO0lBQzdDLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEscUJBQXFCLEVBQXJCLENBQXFCLENBQUM7SUFDcEQsS0FBSyxFQUFFLElBQUk7Q0FDZCxDQUFDOzs7b0JBMkN5QixDQUFDLFFBQVE7b0JBQ1QsUUFBUTtxQkFDUCxDQUFDO3lCQUNJLEtBQUs7c0JBQ1QsQ0FBQztnQ0FDQyxVQUFDLENBQU0sS0FBUTtxQkFFaEIsSUFBSTsyQkFDTixJQUFJLFlBQVksRUFBVTs7MEJBRzlDLHdDQUFLOzs7OztZQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDOzs7Ozs7UUFFdkIsVUFBVSxLQUFhO1lBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoQzs7OzswQkFHRyxzQ0FBRzs7Ozs7WUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzs7Ozs7O1FBRXJCLFVBQVEsS0FBSztZQUNULElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUNyRTs7OzswQkFHRyxzQ0FBRzs7Ozs7WUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzs7Ozs7O1FBRXJCLFVBQVEsS0FBSztZQUNULElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUNyRTs7OzswQkFHRyx1Q0FBSTs7Ozs7WUFDSixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzs7Ozs7O1FBRXRCLFVBQVMsS0FBSztZQUNWLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUN0RTs7OzswQkFHRywyQ0FBUTs7Ozs7WUFDUixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzs7Ozs7O1FBRTFCLFVBQWEsS0FBSztZQUNkLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLENBQUMsS0FBSyxLQUFLLEVBQUUsSUFBSSxLQUFLLEtBQUssTUFBTSxJQUFJLEtBQUssS0FBSyxVQUFVLENBQUMsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDO1NBQzlIOzs7Ozs7OztJQUVELHlDQUFTOzs7O0lBQVQsVUFBVSxLQUFpQztRQUN2QyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdkIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMvRTtLQUNKOzs7OztJQUVELHlDQUFTOzs7O0lBQVQsVUFBVSxLQUFpQztRQUN2QyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdkIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMvRTtLQUNKOzs7O0lBRUQsdUNBQU87OztJQUFQO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDakQsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUNoQjtRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0tBQ3JCOzs7OztJQUVELHdDQUFROzs7O0lBQVIsVUFBUyxLQUFpQjtRQUV0QixxQkFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDO1FBRW5ELEVBQUUsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDekI7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDekI7S0FDSjs7Ozs7SUFFRCwwQ0FBVTs7OztJQUFWLFVBQVcsS0FBVTtRQUNqQixFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUN2QjtLQUNKOzs7OztJQUVELGdEQUFnQjs7OztJQUFoQixVQUFpQixFQUFPO1FBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7S0FDOUI7Ozs7O0lBRUQsaURBQWlCOzs7O0lBQWpCLFVBQWtCLEVBQU8sS0FBVzs7Ozs7SUFFcEMsZ0RBQWdCOzs7O0lBQWhCLFVBQWlCLFVBQW1CO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0tBQzlCOztnQkE5SUosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSxxN0JBK0JQO29CQUNILFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO29CQUN6QyxJQUFJLEVBQUU7d0JBQ0YsbUJBQW1CLEVBQUUsWUFBWTtxQkFDcEM7aUJBQ0o7Ozs7MEJBVUksS0FBSztnQ0FDTCxNQUFNOzBCQUVOLEtBQUssU0FBQyxPQUFPO3dCQVViLEtBQUs7d0JBUUwsS0FBSzt5QkFRTCxLQUFLOzZCQVFMLEtBQUs7O2dDQTlGVjs7U0FnRGEscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5VTUJFUl9QSUNLRVJfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcclxuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnVtYmVyUGlja2VyQ29tcG9uZW50KSxcclxuICAgIG11bHRpOiB0cnVlXHJcbn07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndXgtbnVtYmVyLXBpY2tlcicsXHJcbiAgICB0ZW1wbGF0ZTogYDxpbnB1dCB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgIHJvbGU9XCJzcGluYnV0dG9uXCJcclxuICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIG51bWJlci1waWNrZXItaW5wdXRcIlxyXG4gICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiXHJcbiAgICAgICBbbWluXT1cIm1pblwiXHJcbiAgICAgICBbbWF4XT1cIm1heFwiXHJcbiAgICAgICAoa2V5ZG93bi5BcnJvd0Rvd24pPVwiZGVjcmVtZW50KCRldmVudClcIlxyXG4gICAgICAgKGtleWRvd24uQXJyb3dVcCk9XCJpbmNyZW1lbnQoJGV2ZW50KVwiXHJcbiAgICAgICAod2hlZWwpPVwib25TY3JvbGwoJGV2ZW50KVwiXHJcbiAgICAgICBzdGVwPVwiYW55XCJcclxuICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICBbYXR0ci5hcmlhLXZhbHVlbWluXT1cIm1pblwiXHJcbiAgICAgICBbYXR0ci5hcmlhLXZhbHVlbm93XT1cInZhbHVlXCJcclxuICAgICAgIFthdHRyLmFyaWEtdmFsdWVtYXhdPVwibWF4XCI+XHJcblxyXG48ZGl2IGNsYXNzPVwibnVtYmVyLXBpY2tlci1jb250cm9sc1wiPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJudW1iZXItcGlja2VyLWNvbnRyb2wtdXBcIlxyXG4gICAgICAgICAoY2xpY2spPVwiaW5jcmVtZW50KCRldmVudClcIlxyXG4gICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZWQgfHwgdmFsdWUgPj0gbWF4XCI+XHJcblxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaHBlLWljb24gaHBlLXVwXCI+PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cIm51bWJlci1waWNrZXItY29udHJvbC1kb3duXCJcclxuICAgICAgICAgKGNsaWNrKT1cImRlY3JlbWVudCgkZXZlbnQpXCJcclxuICAgICAgICAgW2NsYXNzLmRpc2FibGVkXT1cImRpc2FibGVkIHx8IHZhbHVlIDw9IG1pblwiPlxyXG5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImhwZS1pY29uIGhwZS1kb3duXCI+PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcblxyXG48L2Rpdj5gLFxyXG4gICAgcHJvdmlkZXJzOiBbTlVNQkVSX1BJQ0tFUl9WQUxVRV9BQ0NFU1NPUl0sXHJcbiAgICBob3N0OiB7XHJcbiAgICAgICAgJ1tjbGFzcy5oYXMtZXJyb3JdJzogJyFpc1ZhbGlkKCknXHJcbiAgICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOdW1iZXJQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcblxyXG4gICAgcHJpdmF0ZSBfbWluOiBudW1iZXIgPSAtSW5maW5pdHk7XHJcbiAgICBwcml2YXRlIF9tYXg6IG51bWJlciA9IEluZmluaXR5O1xyXG4gICAgcHJpdmF0ZSBfc3RlcDogbnVtYmVyID0gMTtcclxuICAgIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF92YWx1ZTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgX3Byb3BhZ2F0ZUNoYW5nZSA9IChfOiBhbnkpID0+IHsgfTtcclxuXHJcbiAgICBASW5wdXQoKSB2YWxpZDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuXHJcbiAgICBASW5wdXQoJ3ZhbHVlJylcclxuICAgIGdldCB2YWx1ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICAgIH1cclxuICAgIHNldCB2YWx1ZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodmFsdWUpO1xyXG4gICAgICAgIHRoaXMuX3Byb3BhZ2F0ZUNoYW5nZSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBtaW4oKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWluO1xyXG4gICAgfVxyXG4gICAgc2V0IG1pbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX21pbiA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyBwYXJzZUZsb2F0KHZhbHVlKSA6IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbWF4KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21heDtcclxuICAgIH1cclxuICAgIHNldCBtYXgodmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9tYXggPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gcGFyc2VGbG9hdCh2YWx1ZSkgOiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHN0ZXAoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RlcDtcclxuICAgIH1cclxuICAgIHNldCBzdGVwKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fc3RlcCA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyBwYXJzZUZsb2F0KHZhbHVlKSA6IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xyXG4gICAgfVxyXG4gICAgc2V0IGRpc2FibGVkKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fZGlzYWJsZWQgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmICh2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09ICd0cnVlJyB8fCB2YWx1ZSA9PT0gJ2Rpc2FibGVkJykgfHwgdmFsdWUgPT09IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaW5jcmVtZW50KGV2ZW50OiBNb3VzZUV2ZW50IHwgS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gTWF0aC5tYXgoTWF0aC5taW4odGhpcy52YWx1ZSArIHRoaXMuc3RlcCwgdGhpcy5tYXgpLCB0aGlzLm1pbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlY3JlbWVudChldmVudDogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IE1hdGgubWluKE1hdGgubWF4KHRoaXMudmFsdWUgLSB0aGlzLnN0ZXAsIHRoaXMubWluKSwgdGhpcy5tYXgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpc1ZhbGlkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlIDwgdGhpcy5taW4gfHwgdGhpcy52YWx1ZSA+IHRoaXMubWF4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2Nyb2xsKGV2ZW50OiBXaGVlbEV2ZW50KTogdm9pZCB7XHJcblxyXG4gICAgICAgIGxldCBzY3JvbGxWYWx1ZSA9IGV2ZW50LmRlbHRhWSB8fCBldmVudC53aGVlbERlbHRhO1xyXG5cclxuICAgICAgICBpZiAoc2Nyb2xsVmFsdWUgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5jcmVtZW50KGV2ZW50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRlY3JlbWVudChldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3Byb3BhZ2F0ZUNoYW5nZSA9IGZuO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHsgfVxyXG5cclxuICAgIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgfVxyXG5cclxufSJdfQ==