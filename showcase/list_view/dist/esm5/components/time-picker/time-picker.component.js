/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
export var /** @type {?} */ TIME_PICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return TimePickerComponent; }),
    multi: true
};
var TimePickerComponent = /** @class */ (function () {
    function TimePickerComponent() {
        var _this = this;
        this.arrowkeys = true;
        this.mousewheel = true;
        this.disabled = false;
        this.readOnly = false;
        this.showMeridian = false;
        this.showHours = true;
        this.showMinutes = true;
        this.showSeconds = false;
        this.showSpinners = true;
        this.hourStep = 1;
        this.minuteStep = 1;
        this.secondStep = 1;
        this.meridians = ['AM', 'PM'];
        this.valueChange = new EventEmitter();
        this.isValid = new EventEmitter();
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
        this.value$ = new BehaviorSubject(new Date());
        // create observables that are derived from the latest value
        this.hour$ = this.value$.pipe(map(function (date) { return date.getHours(); }), map(function (hour) { return _this.showMeridian ? _this.getMeridianTime(hour) : hour; }));
        this.minute$ = this.value$.pipe(map(function (date) { return date.getMinutes(); }));
        this.second$ = this.value$.pipe(map(function (date) { return date.getSeconds(); }));
        this.meridian$ = this.value$.pipe(map(function (date) { return date.getHours() < 12 ? _this.meridians[0] : _this.meridians[1]; }));
        this.valid$ = this.value$.pipe(map(function (date) { return _this.checkValidity(date); }));
        this._meridian = this.meridians[0];
        this._subscription = this.valid$.pipe(distinctUntilChanged()).subscribe(function (valid) { return _this.isValid.emit(valid); });
    }
    Object.defineProperty(TimePickerComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return new Date(this.value$.value);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.value$.next(new Date(value));
            this.valueChange.emit(this.value$.value);
            this.onChangeCallback(this.value$.value);
            this.onTouchedCallback();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TimePickerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscription.unsubscribe();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TimePickerComponent.prototype.writeValue = /**
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
    TimePickerComponent.prototype.registerOnChange = /**
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
    TimePickerComponent.prototype.registerOnTouched = /**
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
    TimePickerComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
    /**
     * @param {?} hour
     * @return {?}
     */
    TimePickerComponent.prototype.getMeridianTime = /**
     * @param {?} hour
     * @return {?}
     */
    function (hour) {
        return hour > 12 ? hour - 12 : hour;
    };
    /**
     * @param {?} hour
     * @return {?}
     */
    TimePickerComponent.prototype.setHour = /**
     * @param {?} hour
     * @return {?}
     */
    function (hour) {
        var /** @type {?} */ date = this.value;
        date.setHours(hour ? hour : 0);
        this.value = date;
    };
    /**
     * @param {?} minute
     * @return {?}
     */
    TimePickerComponent.prototype.setMinute = /**
     * @param {?} minute
     * @return {?}
     */
    function (minute) {
        var /** @type {?} */ date = this.value;
        date.setMinutes(minute ? minute : 0);
        this.value = date;
    };
    /**
     * @param {?} seconds
     * @return {?}
     */
    TimePickerComponent.prototype.setSeconds = /**
     * @param {?} seconds
     * @return {?}
     */
    function (seconds) {
        var /** @type {?} */ date = this.value;
        date.setSeconds(seconds ? seconds : 0);
        this.value = date;
    };
    /**
     * @param {?=} arrowkey
     * @return {?}
     */
    TimePickerComponent.prototype.incrementHour = /**
     * @param {?=} arrowkey
     * @return {?}
     */
    function (arrowkey) {
        if (arrowkey === void 0) { arrowkey = false; }
        if (this.disabled || arrowkey && !this.arrowkeys) {
            return;
        }
        this.setHour(this.value.getHours() + this.hourStep);
    };
    /**
     * @param {?=} arrowkey
     * @return {?}
     */
    TimePickerComponent.prototype.decrementHour = /**
     * @param {?=} arrowkey
     * @return {?}
     */
    function (arrowkey) {
        if (arrowkey === void 0) { arrowkey = false; }
        if (this.disabled || arrowkey && !this.arrowkeys) {
            return;
        }
        this.setHour(this.value.getHours() - this.hourStep);
    };
    /**
     * @param {?=} arrowkey
     * @return {?}
     */
    TimePickerComponent.prototype.incrementMinute = /**
     * @param {?=} arrowkey
     * @return {?}
     */
    function (arrowkey) {
        if (arrowkey === void 0) { arrowkey = false; }
        if (this.disabled || arrowkey && !this.arrowkeys) {
            return;
        }
        this.setMinute(this.value.getMinutes() + this.minuteStep);
    };
    /**
     * @param {?=} arrowkey
     * @return {?}
     */
    TimePickerComponent.prototype.decrementMinute = /**
     * @param {?=} arrowkey
     * @return {?}
     */
    function (arrowkey) {
        if (arrowkey === void 0) { arrowkey = false; }
        if (this.disabled || arrowkey && !this.arrowkeys) {
            return;
        }
        this.setMinute(this.value.getMinutes() - this.minuteStep);
    };
    /**
     * @param {?=} arrowkey
     * @return {?}
     */
    TimePickerComponent.prototype.incrementSecond = /**
     * @param {?=} arrowkey
     * @return {?}
     */
    function (arrowkey) {
        if (arrowkey === void 0) { arrowkey = false; }
        if (this.disabled || arrowkey && !this.arrowkeys) {
            return;
        }
        this.setSeconds(this.value.getSeconds() + this.secondStep);
    };
    /**
     * @param {?=} arrowkey
     * @return {?}
     */
    TimePickerComponent.prototype.decrementSecond = /**
     * @param {?=} arrowkey
     * @return {?}
     */
    function (arrowkey) {
        if (arrowkey === void 0) { arrowkey = false; }
        if (this.disabled || arrowkey && !this.arrowkeys) {
            return;
        }
        this.setSeconds(this.value.getSeconds() - this.secondStep);
    };
    /**
     * @param {?} meridian
     * @return {?}
     */
    TimePickerComponent.prototype.selectMeridian = /**
     * @param {?} meridian
     * @return {?}
     */
    function (meridian) {
        this._meridian = meridian;
        // get the current time
        var /** @type {?} */ hour = this.value.getHours();
        // if we have selected AM
        if (meridian === this.meridians[0]) {
            if (hour >= 12) {
                this.setHour(hour - 12);
            }
        }
        // if we have selected PM
        if (meridian === this.meridians[1]) {
            if (hour < 12) {
                this.setHour(hour + 12);
            }
        }
    };
    /**
     * @param {?} date
     * @return {?}
     */
    TimePickerComponent.prototype.checkValidity = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        var /** @type {?} */ valid = true;
        if (this.min && date.getTime() <= this.min.getTime()) {
            valid = false;
        }
        if (this.max && date.getTime() >= this.max.getTime()) {
            valid = false;
        }
        return valid;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TimePickerComponent.prototype.hourChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        // convert the string to a number
        var /** @type {?} */ hour = parseInt(value);
        var /** @type {?} */ currentHour = this.value.getHours();
        // if the value hasn't changed, do nothing
        if (hour === currentHour) {
            return;
        }
        // ensure the hours is valid
        if (!isNaN(hour)) {
            if (hour < 0) {
                hour = 0;
            }
            if (hour > (this.showMeridian ? 12 : 23)) {
                hour = this.showMeridian ? 12 : 23;
            }
        }
        hour = isNaN(hour) ? currentHour : hour;
        // if the number is invalid then restore it to the previous value
        if (this._meridian === this.meridians[0]) {
            if (hour >= 12) {
                hour -= 12;
            }
        }
        // if we have selected PM
        if (this._meridian === this.meridians[1]) {
            if (hour < 12) {
                hour += 12;
            }
        }
        this.setHour(hour);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TimePickerComponent.prototype.minuteChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        // convert the string to a number
        var /** @type {?} */ minute = parseInt(value);
        var /** @type {?} */ currentMinute = this.value.getMinutes();
        // if the value hasn't changed, do nothing
        if (minute === currentMinute) {
            return;
        }
        // ensure the hours is valid
        if (!isNaN(minute)) {
            if (minute < 0) {
                minute = 59;
            }
            if (minute > 59) {
                minute = 0;
            }
        }
        // if the number is invalid then restore it to the previous value
        this.setMinute(isNaN(minute) ? currentMinute : minute);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TimePickerComponent.prototype.secondChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        // convert the string to a number
        var /** @type {?} */ second = parseInt(value);
        var /** @type {?} */ currentSecond = this.value.getSeconds();
        // if the value hasn't changed, do nothing
        if (second === currentSecond) {
            return;
        }
        // ensure the hours is valid
        if (!isNaN(second)) {
            if (second < 0) {
                second = 0;
            }
            if (second > 59) {
                second = 59;
            }
        }
        // if the number is invalid then restore it to the previous value
        this.setSeconds(isNaN(second) ? currentSecond : second);
    };
    TimePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-time-picker',
                    template: "<div class=\"time-picker\" aria-label=\"Time picker\">\n\n    <div class=\"time-picker-column\" [class.has-error]=\"!(valid$ | async)\" *ngIf=\"showHours\">\n\n        <ux-spin-button\n            type=\"number\"\n            class=\"time-spinner\"\n            placeholder=\"HH\"\n            [min]=\"0\"\n            [max]=\"showMeridian ? 12 : 23\"\n            [value]=\"hour$ | async | timeFormat\"\n            (valueChange)=\"hourChange($event)\"\n            [spinners]=\"showSpinners\"\n            [disabled]=\"disabled\"\n            [readOnly]=\"readOnly\"\n            inputAriaLabel=\"hour\"\n            incrementAriaLabel=\"Increment the hour\"\n            decrementAriaLabel=\"Decrement the hour\"\n            (increment)=\"incrementHour()\"\n            (decrement)=\"decrementHour()\">\n        </ux-spin-button>\n\n    </div>\n\n    <div class=\"time-picker-separator\" *ngIf=\"showMinutes\">:</div>\n\n    <div class=\"time-picker-column\" [class.has-error]=\"!(valid$ | async)\" *ngIf=\"showMinutes\">\n\n        <ux-spin-button\n            type=\"number\"\n            class=\"time-spinner\"\n            placeholder=\"MM\"\n            [min]=\"0\"\n            [max]=\"59\"\n            [value]=\"minute$ | async | timeFormat\"\n            (valueChange)=\"minuteChange($event)\"\n            [spinners]=\"showSpinners\"\n            [disabled]=\"disabled\"\n            [readOnly]=\"readOnly\"\n            inputAriaLabel=\"minute\"\n            incrementAriaLabel=\"Increment the minute\"\n            decrementAriaLabel=\"Decrement the minute\"\n            (increment)=\"incrementMinute()\"\n            (decrement)=\"decrementMinute()\">\n        </ux-spin-button>\n\n    </div>\n\n    <div class=\"time-picker-separator\" *ngIf=\"showSeconds\">:</div>\n\n    <div class=\"time-picker-column\" [class.has-error]=\"!(valid$ | async)\" *ngIf=\"showSeconds\">\n\n        <ux-spin-button\n            type=\"number\"\n            class=\"time-spinner\"\n            type=\"number\"\n            placeholder=\"SS\"\n            [min]=\"0\"\n            [max]=\"59\"\n            [value]=\"second$ | async | timeFormat\"\n            (valueChange)=\"secondChange($event)\"\n            [spinners]=\"showSpinners\"\n            [disabled]=\"disabled\"\n            [readOnly]=\"readOnly\"\n            inputAriaLabel=\"seconds\"\n            incrementAriaLabel=\"Increment the second\"\n            decrementAriaLabel=\"Decrement the second\"\n            (increment)=\"incrementSecond()\"\n            (decrement)=\"decrementSecond()\">\n        </ux-spin-button>\n\n    </div>\n</div>\n\n<div class=\"time-picker-meridian\" *ngIf=\"showMeridian\">\n\n    <div class=\"btn-group\" role=\"radiogroup\">\n\n        <button class=\"btn button-toggle-accent\"\n                *ngFor=\"let meridian of meridians\"\n                role=\"radio\"\n                tabindex=\"0\"\n                [disabled]=\"disabled\"\n                (click)=\"selectMeridian(meridian)\"\n                [class.active]=\"meridian === (meridian$ | async)\"\n                [attr.aria-label]=\"meridian\"\n                [attr.aria-checked]=\"meridian === (meridian$ | async)\"\n                [attr.aria-disabled]=\"disabled\">\n                {{ meridian }}\n        </button>\n\n    </div>\n</div>",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [TIME_PICKER_VALUE_ACCESSOR],
                    host: {
                        'aria-label': 'Time Picker'
                    }
                },] },
    ];
    /** @nocollapse */
    TimePickerComponent.ctorParameters = function () { return []; };
    TimePickerComponent.propDecorators = {
        "arrowkeys": [{ type: Input },],
        "mousewheel": [{ type: Input },],
        "disabled": [{ type: Input },],
        "readOnly": [{ type: Input },],
        "showMeridian": [{ type: Input },],
        "showHours": [{ type: Input },],
        "showMinutes": [{ type: Input },],
        "showSeconds": [{ type: Input },],
        "showSpinners": [{ type: Input },],
        "hourStep": [{ type: Input },],
        "minuteStep": [{ type: Input },],
        "secondStep": [{ type: Input },],
        "min": [{ type: Input },],
        "max": [{ type: Input },],
        "meridians": [{ type: Input },],
        "value": [{ type: Input },],
        "valueChange": [{ type: Output },],
        "isValid": [{ type: Output },],
    };
    return TimePickerComponent;
}());
export { TimePickerComponent };
function TimePickerComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TimePickerComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TimePickerComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    TimePickerComponent.propDecorators;
    /** @type {?} */
    TimePickerComponent.prototype.arrowkeys;
    /** @type {?} */
    TimePickerComponent.prototype.mousewheel;
    /** @type {?} */
    TimePickerComponent.prototype.disabled;
    /** @type {?} */
    TimePickerComponent.prototype.readOnly;
    /** @type {?} */
    TimePickerComponent.prototype.showMeridian;
    /** @type {?} */
    TimePickerComponent.prototype.showHours;
    /** @type {?} */
    TimePickerComponent.prototype.showMinutes;
    /** @type {?} */
    TimePickerComponent.prototype.showSeconds;
    /** @type {?} */
    TimePickerComponent.prototype.showSpinners;
    /** @type {?} */
    TimePickerComponent.prototype.hourStep;
    /** @type {?} */
    TimePickerComponent.prototype.minuteStep;
    /** @type {?} */
    TimePickerComponent.prototype.secondStep;
    /** @type {?} */
    TimePickerComponent.prototype.min;
    /** @type {?} */
    TimePickerComponent.prototype.max;
    /** @type {?} */
    TimePickerComponent.prototype.meridians;
    /** @type {?} */
    TimePickerComponent.prototype.valueChange;
    /** @type {?} */
    TimePickerComponent.prototype.isValid;
    /** @type {?} */
    TimePickerComponent.prototype.onTouchedCallback;
    /** @type {?} */
    TimePickerComponent.prototype.onChangeCallback;
    /** @type {?} */
    TimePickerComponent.prototype.value$;
    /** @type {?} */
    TimePickerComponent.prototype.hour$;
    /** @type {?} */
    TimePickerComponent.prototype.minute$;
    /** @type {?} */
    TimePickerComponent.prototype.second$;
    /** @type {?} */
    TimePickerComponent.prototype.meridian$;
    /** @type {?} */
    TimePickerComponent.prototype.valid$;
    /** @type {?} */
    TimePickerComponent.prototype._meridian;
    /** @type {?} */
    TimePickerComponent.prototype._subscription;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdGltZS1waWNrZXIvdGltZS1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxSSxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLGVBQWUsRUFBZ0MsTUFBTSxNQUFNLENBQUM7QUFDckUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNELE1BQU0sQ0FBQyxxQkFBTSwwQkFBMEIsR0FBUTtJQUMzQyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLG1CQUFtQixFQUFuQixDQUFtQixDQUFDO0lBQ2xELEtBQUssRUFBRSxJQUFJO0NBQ2QsQ0FBQzs7SUEySkU7UUFBQSxpQkFFQzt5QkFuRDZCLElBQUk7MEJBQ0gsSUFBSTt3QkFDTixLQUFLO3dCQUNMLEtBQUs7NEJBRUQsS0FBSzt5QkFDUixJQUFJOzJCQUNGLElBQUk7MkJBQ0osS0FBSzs0QkFDSixJQUFJO3dCQUVULENBQUM7MEJBQ0MsQ0FBQzswQkFDRCxDQUFDO3lCQUlBLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQzsyQkFjbkIsSUFBSSxZQUFZLEVBQVE7dUJBQzVCLElBQUksWUFBWSxFQUFXO2lDQUVmLGVBQVM7Z0NBQ0gsZUFBUztzQkFFdEMsSUFBSSxlQUFlLENBQU8sSUFBSSxJQUFJLEVBQUUsQ0FBQzs7cUJBR2xCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxD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S0FBSzs2QkFDTCxLQUFLOzZCQUNMLEtBQUs7aUNBRUwsS0FBSzs4QkFDTCxLQUFLO2dDQUNMLEtBQUs7Z0NBQ0wsS0FBSztpQ0FDTCxLQUFLOzZCQUVMLEtBQUs7K0JBQ0wsS0FBSzsrQkFDTCxLQUFLO3dCQUVMLEtBQUs7d0JBQ0wsS0FBSzs4QkFDTCxLQUFLOzBCQUVMLEtBQUs7Z0NBWUwsTUFBTTs0QkFDTixNQUFNOzs4QkFuSlg7O1NBaUhhLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCAsICBPYnNlcnZhYmxlICwgIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRJTUVfUElDS0VSX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XHJcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRpbWVQaWNrZXJDb21wb25lbnQpLFxyXG4gICAgbXVsdGk6IHRydWVcclxufTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd1eC10aW1lLXBpY2tlcicsXHJcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJ0aW1lLXBpY2tlclwiIGFyaWEtbGFiZWw9XCJUaW1lIHBpY2tlclwiPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJ0aW1lLXBpY2tlci1jb2x1bW5cIiBbY2xhc3MuaGFzLWVycm9yXT1cIiEodmFsaWQkIHwgYXN5bmMpXCIgKm5nSWY9XCJzaG93SG91cnNcIj5cclxuXHJcbiAgICAgICAgPHV4LXNwaW4tYnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBjbGFzcz1cInRpbWUtc3Bpbm5lclwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSEhcIlxyXG4gICAgICAgICAgICBbbWluXT1cIjBcIlxyXG4gICAgICAgICAgICBbbWF4XT1cInNob3dNZXJpZGlhbiA/IDEyIDogMjNcIlxyXG4gICAgICAgICAgICBbdmFsdWVdPVwiaG91ciQgfCBhc3luYyB8IHRpbWVGb3JtYXRcIlxyXG4gICAgICAgICAgICAodmFsdWVDaGFuZ2UpPVwiaG91ckNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgW3NwaW5uZXJzXT1cInNob3dTcGlubmVyc1wiXHJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgICAgIFtyZWFkT25seV09XCJyZWFkT25seVwiXHJcbiAgICAgICAgICAgIGlucHV0QXJpYUxhYmVsPVwiaG91clwiXHJcbiAgICAgICAgICAgIGluY3JlbWVudEFyaWFMYWJlbD1cIkluY3JlbWVudCB0aGUgaG91clwiXHJcbiAgICAgICAgICAgIGRlY3JlbWVudEFyaWFMYWJlbD1cIkRlY3JlbWVudCB0aGUgaG91clwiXHJcbiAgICAgICAgICAgIChpbmNyZW1lbnQpPVwiaW5jcmVtZW50SG91cigpXCJcclxuICAgICAgICAgICAgKGRlY3JlbWVudCk9XCJkZWNyZW1lbnRIb3VyKClcIj5cclxuICAgICAgICA8L3V4LXNwaW4tYnV0dG9uPlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJ0aW1lLXBpY2tlci1zZXBhcmF0b3JcIiAqbmdJZj1cInNob3dNaW51dGVzXCI+OjwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJ0aW1lLXBpY2tlci1jb2x1bW5cIiBbY2xhc3MuaGFzLWVycm9yXT1cIiEodmFsaWQkIHwgYXN5bmMpXCIgKm5nSWY9XCJzaG93TWludXRlc1wiPlxyXG5cclxuICAgICAgICA8dXgtc3Bpbi1idXR0b25cclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwidGltZS1zcGlubmVyXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNTVwiXHJcbiAgICAgICAgICAgIFttaW5dPVwiMFwiXHJcbiAgICAgICAgICAgIFttYXhdPVwiNTlcIlxyXG4gICAgICAgICAgICBbdmFsdWVdPVwibWludXRlJCB8IGFzeW5jIHwgdGltZUZvcm1hdFwiXHJcbiAgICAgICAgICAgICh2YWx1ZUNoYW5nZSk9XCJtaW51dGVDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgIFtzcGlubmVyc109XCJzaG93U3Bpbm5lcnNcIlxyXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICBbcmVhZE9ubHldPVwicmVhZE9ubHlcIlxyXG4gICAgICAgICAgICBpbnB1dEFyaWFMYWJlbD1cIm1pbnV0ZVwiXHJcbiAgICAgICAgICAgIGluY3JlbWVudEFyaWFMYWJlbD1cIkluY3JlbWVudCB0aGUgbWludXRlXCJcclxuICAgICAgICAgICAgZGVjcmVtZW50QXJpYUxhYmVsPVwiRGVjcmVtZW50IHRoZSBtaW51dGVcIlxyXG4gICAgICAgICAgICAoaW5jcmVtZW50KT1cImluY3JlbWVudE1pbnV0ZSgpXCJcclxuICAgICAgICAgICAgKGRlY3JlbWVudCk9XCJkZWNyZW1lbnRNaW51dGUoKVwiPlxyXG4gICAgICAgIDwvdXgtc3Bpbi1idXR0b24+XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInRpbWUtcGlja2VyLXNlcGFyYXRvclwiICpuZ0lmPVwic2hvd1NlY29uZHNcIj46PC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInRpbWUtcGlja2VyLWNvbHVtblwiIFtjbGFzcy5oYXMtZXJyb3JdPVwiISh2YWxpZCQgfCBhc3luYylcIiAqbmdJZj1cInNob3dTZWNvbmRzXCI+XHJcblxyXG4gICAgICAgIDx1eC1zcGluLWJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJ0aW1lLXNwaW5uZXJcIlxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTU1wiXHJcbiAgICAgICAgICAgIFttaW5dPVwiMFwiXHJcbiAgICAgICAgICAgIFttYXhdPVwiNTlcIlxyXG4gICAgICAgICAgICBbdmFsdWVdPVwic2Vjb25kJCB8IGFzeW5jIHwgdGltZUZvcm1hdFwiXHJcbiAgICAgICAgICAgICh2YWx1ZUNoYW5nZSk9XCJzZWNvbmRDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgIFtzcGlubmVyc109XCJzaG93U3Bpbm5lcnNcIlxyXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICBbcmVhZE9ubHldPVwicmVhZE9ubHlcIlxyXG4gICAgICAgICAgICBpbnB1dEFyaWFMYWJlbD1cInNlY29uZHNcIlxyXG4gICAgICAgICAgICBpbmNyZW1lbnRBcmlhTGFiZWw9XCJJbmNyZW1lbnQgdGhlIHNlY29uZFwiXHJcbiAgICAgICAgICAgIGRlY3JlbWVudEFyaWFMYWJlbD1cIkRlY3JlbWVudCB0aGUgc2Vjb25kXCJcclxuICAgICAgICAgICAgKGluY3JlbWVudCk9XCJpbmNyZW1lbnRTZWNvbmQoKVwiXHJcbiAgICAgICAgICAgIChkZWNyZW1lbnQpPVwiZGVjcmVtZW50U2Vjb25kKClcIj5cclxuICAgICAgICA8L3V4LXNwaW4tYnV0dG9uPlxyXG5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJ0aW1lLXBpY2tlci1tZXJpZGlhblwiICpuZ0lmPVwic2hvd01lcmlkaWFuXCI+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cFwiIHJvbGU9XCJyYWRpb2dyb3VwXCI+XHJcblxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnV0dG9uLXRvZ2dsZS1hY2NlbnRcIlxyXG4gICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IG1lcmlkaWFuIG9mIG1lcmlkaWFuc1wiXHJcbiAgICAgICAgICAgICAgICByb2xlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgdGFiaW5kZXg9XCIwXCJcclxuICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0TWVyaWRpYW4obWVyaWRpYW4pXCJcclxuICAgICAgICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwibWVyaWRpYW4gPT09IChtZXJpZGlhbiQgfCBhc3luYylcIlxyXG4gICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJtZXJpZGlhblwiXHJcbiAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWNoZWNrZWRdPVwibWVyaWRpYW4gPT09IChtZXJpZGlhbiQgfCBhc3luYylcIlxyXG4gICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1kaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxyXG4gICAgICAgICAgICAgICAge3sgbWVyaWRpYW4gfX1cclxuICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+YCxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAgIHByb3ZpZGVyczogW1RJTUVfUElDS0VSX1ZBTFVFX0FDQ0VTU09SXSxcclxuICAgIGhvc3Q6IHtcclxuICAgICAgICAnYXJpYS1sYWJlbCc6ICdUaW1lIFBpY2tlcidcclxuICAgIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRpbWVQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25EZXN0cm95IHtcclxuXHJcbiAgICBASW5wdXQoKSBhcnJvd2tleXM6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgQElucHV0KCkgbW91c2V3aGVlbDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgcmVhZE9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBASW5wdXQoKSBzaG93TWVyaWRpYW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHNob3dIb3VyczogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBzaG93TWludXRlczogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBzaG93U2Vjb25kczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgc2hvd1NwaW5uZXJzOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBASW5wdXQoKSBob3VyU3RlcDogbnVtYmVyID0gMTtcclxuICAgIEBJbnB1dCgpIG1pbnV0ZVN0ZXA6IG51bWJlciA9IDE7XHJcbiAgICBASW5wdXQoKSBzZWNvbmRTdGVwOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIEBJbnB1dCgpIG1pbjogRGF0ZTtcclxuICAgIEBJbnB1dCgpIG1heDogRGF0ZTtcclxuICAgIEBJbnB1dCgpIG1lcmlkaWFuczogc3RyaW5nW10gPSBbJ0FNJywgJ1BNJ107XHJcblxyXG4gICAgQElucHV0KCkgc2V0IHZhbHVlKHZhbHVlOiBEYXRlKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSQubmV4dChuZXcgRGF0ZSh2YWx1ZSkpO1xyXG4gICAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlJC52YWx1ZSk7XHJcblxyXG4gICAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayh0aGlzLnZhbHVlJC52YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB2YWx1ZSgpOiBEYXRlIHtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUodGhpcy52YWx1ZSQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4oKTtcclxuICAgIEBPdXRwdXQoKSBpc1ZhbGlkID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICAgIG9uVG91Y2hlZENhbGxiYWNrOiAoKSA9PiB2b2lkID0gKCkgPT4geyB9O1xyXG4gICAgb25DaGFuZ2VDYWxsYmFjazogKF86IERhdGUpID0+IHZvaWQgPSAoKSA9PiB7IH07XHJcblxyXG4gICAgdmFsdWUkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxEYXRlPihuZXcgRGF0ZSgpKTtcclxuXHJcbiAgICAvLyBjcmVhdGUgb2JzZXJ2YWJsZXMgdGhhdCBhcmUgZGVyaXZlZCBmcm9tIHRoZSBsYXRlc3QgdmFsdWVcclxuICAgIGhvdXIkOiBPYnNlcnZhYmxlPG51bWJlcj4gPSB0aGlzLnZhbHVlJC5waXBlKG1hcChkYXRlID0+IGRhdGUuZ2V0SG91cnMoKSksIG1hcChob3VyID0+IHRoaXMuc2hvd01lcmlkaWFuID8gdGhpcy5nZXRNZXJpZGlhblRpbWUoaG91cikgOiBob3VyKSk7XHJcbiAgICBtaW51dGUkOiBPYnNlcnZhYmxlPG51bWJlcj4gPSB0aGlzLnZhbHVlJC5waXBlKG1hcChkYXRlID0+IGRhdGUuZ2V0TWludXRlcygpKSk7XHJcbiAgICBzZWNvbmQkOiBPYnNlcnZhYmxlPG51bWJlcj4gPSB0aGlzLnZhbHVlJC5waXBlKG1hcChkYXRlID0+IGRhdGUuZ2V0U2Vjb25kcygpKSk7XHJcbiAgICBtZXJpZGlhbiQ6IE9ic2VydmFibGU8c3RyaW5nPiA9IHRoaXMudmFsdWUkLnBpcGUobWFwKGRhdGUgPT4gZGF0ZS5nZXRIb3VycygpIDwgMTIgPyB0aGlzLm1lcmlkaWFuc1swXSA6IHRoaXMubWVyaWRpYW5zWzFdKSk7XHJcbiAgICB2YWxpZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLnZhbHVlJC5waXBlKG1hcChkYXRlID0+IHRoaXMuY2hlY2tWYWxpZGl0eShkYXRlKSkpO1xyXG5cclxuICAgIHByaXZhdGUgX21lcmlkaWFuOiBzdHJpbmcgPSB0aGlzLm1lcmlkaWFuc1swXTtcclxuICAgIHByaXZhdGUgX3N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMudmFsaWQkLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSkuc3Vic2NyaWJlKHZhbGlkID0+IHRoaXMuaXNWYWxpZC5lbWl0KHZhbGlkKSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogRGF0ZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogRGF0ZSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IGZuO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1lcmlkaWFuVGltZShob3VyOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBob3VyID4gMTIgPyBob3VyIC0gMTIgOiBob3VyO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEhvdXIoaG91cjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgZGF0ZS5zZXRIb3Vycyhob3VyID8gaG91ciA6IDApO1xyXG5cclxuICAgICAgICB0aGlzLnZhbHVlID0gZGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRNaW51dGUobWludXRlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBkYXRlID0gdGhpcy52YWx1ZTtcclxuICAgICAgICBkYXRlLnNldE1pbnV0ZXMobWludXRlID8gbWludXRlIDogMCk7XHJcblxyXG4gICAgICAgIHRoaXMudmFsdWUgPSBkYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNlY29uZHMoc2Vjb25kczogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgZGF0ZS5zZXRTZWNvbmRzKHNlY29uZHMgPyBzZWNvbmRzIDogMCk7XHJcblxyXG4gICAgICAgIHRoaXMudmFsdWUgPSBkYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGluY3JlbWVudEhvdXIoYXJyb3drZXk6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IGFycm93a2V5ICYmICF0aGlzLmFycm93a2V5cykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldEhvdXIodGhpcy52YWx1ZS5nZXRIb3VycygpICsgdGhpcy5ob3VyU3RlcCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVjcmVtZW50SG91cihhcnJvd2tleTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgYXJyb3drZXkgJiYgIXRoaXMuYXJyb3drZXlzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0SG91cih0aGlzLnZhbHVlLmdldEhvdXJzKCkgLSB0aGlzLmhvdXJTdGVwKTtcclxuICAgIH1cclxuXHJcbiAgICBpbmNyZW1lbnRNaW51dGUoYXJyb3drZXk6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IGFycm93a2V5ICYmICF0aGlzLmFycm93a2V5cykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldE1pbnV0ZSh0aGlzLnZhbHVlLmdldE1pbnV0ZXMoKSArIHRoaXMubWludXRlU3RlcCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVjcmVtZW50TWludXRlKGFycm93a2V5OiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCBhcnJvd2tleSAmJiAhdGhpcy5hcnJvd2tleXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRNaW51dGUodGhpcy52YWx1ZS5nZXRNaW51dGVzKCkgLSB0aGlzLm1pbnV0ZVN0ZXApO1xyXG4gICAgfVxyXG5cclxuICAgIGluY3JlbWVudFNlY29uZChhcnJvd2tleTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgYXJyb3drZXkgJiYgIXRoaXMuYXJyb3drZXlzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U2Vjb25kcyh0aGlzLnZhbHVlLmdldFNlY29uZHMoKSArIHRoaXMuc2Vjb25kU3RlcCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVjcmVtZW50U2Vjb25kKGFycm93a2V5OiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCBhcnJvd2tleSAmJiAhdGhpcy5hcnJvd2tleXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRTZWNvbmRzKHRoaXMudmFsdWUuZ2V0U2Vjb25kcygpIC0gdGhpcy5zZWNvbmRTdGVwKTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RNZXJpZGlhbihtZXJpZGlhbjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fbWVyaWRpYW4gPSBtZXJpZGlhbjtcclxuXHJcbiAgICAgICAgLy8gZ2V0IHRoZSBjdXJyZW50IHRpbWVcclxuICAgICAgICBjb25zdCBob3VyID0gdGhpcy52YWx1ZS5nZXRIb3VycygpO1xyXG5cclxuICAgICAgICAvLyBpZiB3ZSBoYXZlIHNlbGVjdGVkIEFNXHJcbiAgICAgICAgaWYgKG1lcmlkaWFuID09PSB0aGlzLm1lcmlkaWFuc1swXSkge1xyXG4gICAgICAgICAgICBpZiAoaG91ciA+PSAxMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRIb3VyKGhvdXIgLSAxMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlmIHdlIGhhdmUgc2VsZWN0ZWQgUE1cclxuICAgICAgICBpZiAobWVyaWRpYW4gPT09IHRoaXMubWVyaWRpYW5zWzFdKSB7XHJcbiAgICAgICAgICAgIGlmIChob3VyIDwgMTIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0SG91cihob3VyICsgMTIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrVmFsaWRpdHkoZGF0ZTogRGF0ZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCB2YWxpZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1pbiAmJiBkYXRlLmdldFRpbWUoKSA8PSB0aGlzLm1pbi5nZXRUaW1lKCkpIHtcclxuICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1heCAmJiBkYXRlLmdldFRpbWUoKSA+PSB0aGlzLm1heC5nZXRUaW1lKCkpIHtcclxuICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB2YWxpZDtcclxuICAgIH1cclxuXHJcbiAgICBob3VyQ2hhbmdlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gY29udmVydCB0aGUgc3RyaW5nIHRvIGEgbnVtYmVyXHJcbiAgICAgICAgbGV0IGhvdXIgPSBwYXJzZUludCh2YWx1ZSk7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRIb3VyID0gdGhpcy52YWx1ZS5nZXRIb3VycygpO1xyXG5cclxuICAgICAgICAvLyBpZiB0aGUgdmFsdWUgaGFzbid0IGNoYW5nZWQsIGRvIG5vdGhpbmdcclxuICAgICAgICBpZiAoaG91ciA9PT0gY3VycmVudEhvdXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZW5zdXJlIHRoZSBob3VycyBpcyB2YWxpZFxyXG4gICAgICAgIGlmICghaXNOYU4oaG91cikpIHtcclxuICAgICAgICAgICAgaWYgKGhvdXIgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBob3VyID0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGhvdXIgPiAodGhpcy5zaG93TWVyaWRpYW4gPyAxMiA6IDIzKSkge1xyXG4gICAgICAgICAgICAgICAgaG91ciA9IHRoaXMuc2hvd01lcmlkaWFuID8gMTIgOiAyMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaG91ciA9IGlzTmFOKGhvdXIpID8gY3VycmVudEhvdXIgOiBob3VyO1xyXG5cclxuICAgICAgICAvLyBpZiB0aGUgbnVtYmVyIGlzIGludmFsaWQgdGhlbiByZXN0b3JlIGl0IHRvIHRoZSBwcmV2aW91cyB2YWx1ZVxyXG4gICAgICAgIGlmICh0aGlzLl9tZXJpZGlhbiA9PT0gdGhpcy5tZXJpZGlhbnNbMF0pIHtcclxuICAgICAgICAgICAgaWYgKGhvdXIgPj0gMTIpIHtcclxuICAgICAgICAgICAgICAgIGhvdXIgLT0gMTI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlmIHdlIGhhdmUgc2VsZWN0ZWQgUE1cclxuICAgICAgICBpZiAodGhpcy5fbWVyaWRpYW4gPT09IHRoaXMubWVyaWRpYW5zWzFdKSB7XHJcbiAgICAgICAgICAgIGlmIChob3VyIDwgMTIpIHtcclxuICAgICAgICAgICAgICAgIGhvdXIgKz0gMTI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0SG91cihob3VyKTtcclxuICAgIH1cclxuXHJcbiAgICBtaW51dGVDaGFuZ2UodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG5cclxuICAgICAgICAvLyBjb252ZXJ0IHRoZSBzdHJpbmcgdG8gYSBudW1iZXJcclxuICAgICAgICBsZXQgbWludXRlID0gcGFyc2VJbnQodmFsdWUpO1xyXG4gICAgICAgIGxldCBjdXJyZW50TWludXRlID0gdGhpcy52YWx1ZS5nZXRNaW51dGVzKCk7XHJcblxyXG4gICAgICAgIC8vIGlmIHRoZSB2YWx1ZSBoYXNuJ3QgY2hhbmdlZCwgZG8gbm90aGluZ1xyXG4gICAgICAgIGlmIChtaW51dGUgPT09IGN1cnJlbnRNaW51dGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZW5zdXJlIHRoZSBob3VycyBpcyB2YWxpZFxyXG4gICAgICAgIGlmICghaXNOYU4obWludXRlKSkge1xyXG4gICAgICAgICAgICBpZiAobWludXRlIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgbWludXRlID0gNTk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChtaW51dGUgPiA1OSkge1xyXG4gICAgICAgICAgICAgICAgbWludXRlID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYgdGhlIG51bWJlciBpcyBpbnZhbGlkIHRoZW4gcmVzdG9yZSBpdCB0byB0aGUgcHJldmlvdXMgdmFsdWVcclxuICAgICAgICB0aGlzLnNldE1pbnV0ZShpc05hTihtaW51dGUpID8gY3VycmVudE1pbnV0ZSA6IG1pbnV0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2Vjb25kQ2hhbmdlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICAvLyBjb252ZXJ0IHRoZSBzdHJpbmcgdG8gYSBudW1iZXJcclxuICAgICAgICBsZXQgc2Vjb25kID0gcGFyc2VJbnQodmFsdWUpO1xyXG4gICAgICAgIGxldCBjdXJyZW50U2Vjb25kID0gdGhpcy52YWx1ZS5nZXRTZWNvbmRzKCk7XHJcblxyXG4gICAgICAgIC8vIGlmIHRoZSB2YWx1ZSBoYXNuJ3QgY2hhbmdlZCwgZG8gbm90aGluZ1xyXG4gICAgICAgIGlmIChzZWNvbmQgPT09IGN1cnJlbnRTZWNvbmQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZW5zdXJlIHRoZSBob3VycyBpcyB2YWxpZFxyXG4gICAgICAgIGlmICghaXNOYU4oc2Vjb25kKSkge1xyXG4gICAgICAgICAgICBpZiAoc2Vjb25kIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgc2Vjb25kID0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHNlY29uZCA+IDU5KSB7XHJcbiAgICAgICAgICAgICAgICBzZWNvbmQgPSA1OTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYgdGhlIG51bWJlciBpcyBpbnZhbGlkIHRoZW4gcmVzdG9yZSBpdCB0byB0aGUgcHJldmlvdXMgdmFsdWVcclxuICAgICAgICB0aGlzLnNldFNlY29uZHMoaXNOYU4oc2Vjb25kKSA/IGN1cnJlbnRTZWNvbmQgOiBzZWNvbmQpO1xyXG4gICAgfVxyXG59Il19