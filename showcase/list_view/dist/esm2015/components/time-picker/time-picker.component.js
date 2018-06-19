/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
export const /** @type {?} */ TIME_PICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TimePickerComponent),
    multi: true
};
export class TimePickerComponent {
    constructor() {
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
        this.onTouchedCallback = () => { };
        this.onChangeCallback = () => { };
        this.value$ = new BehaviorSubject(new Date());
        // create observables that are derived from the latest value
        this.hour$ = this.value$.pipe(map(date => date.getHours()), map(hour => this.showMeridian ? this.getMeridianTime(hour) : hour));
        this.minute$ = this.value$.pipe(map(date => date.getMinutes()));
        this.second$ = this.value$.pipe(map(date => date.getSeconds()));
        this.meridian$ = this.value$.pipe(map(date => date.getHours() < 12 ? this.meridians[0] : this.meridians[1]));
        this.valid$ = this.value$.pipe(map(date => this.checkValidity(date)));
        this._meridian = this.meridians[0];
        this._subscription = this.valid$.pipe(distinctUntilChanged()).subscribe(valid => this.isValid.emit(valid));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this.value$.next(new Date(value));
        this.valueChange.emit(this.value$.value);
        this.onChangeCallback(this.value$.value);
        this.onTouchedCallback();
    }
    /**
     * @return {?}
     */
    get value() {
        return new Date(this.value$.value);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._subscription.unsubscribe();
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
    /**
     * @param {?} hour
     * @return {?}
     */
    getMeridianTime(hour) {
        return hour > 12 ? hour - 12 : hour;
    }
    /**
     * @param {?} hour
     * @return {?}
     */
    setHour(hour) {
        const /** @type {?} */ date = this.value;
        date.setHours(hour ? hour : 0);
        this.value = date;
    }
    /**
     * @param {?} minute
     * @return {?}
     */
    setMinute(minute) {
        const /** @type {?} */ date = this.value;
        date.setMinutes(minute ? minute : 0);
        this.value = date;
    }
    /**
     * @param {?} seconds
     * @return {?}
     */
    setSeconds(seconds) {
        const /** @type {?} */ date = this.value;
        date.setSeconds(seconds ? seconds : 0);
        this.value = date;
    }
    /**
     * @param {?=} arrowkey
     * @return {?}
     */
    incrementHour(arrowkey = false) {
        if (this.disabled || arrowkey && !this.arrowkeys) {
            return;
        }
        this.setHour(this.value.getHours() + this.hourStep);
    }
    /**
     * @param {?=} arrowkey
     * @return {?}
     */
    decrementHour(arrowkey = false) {
        if (this.disabled || arrowkey && !this.arrowkeys) {
            return;
        }
        this.setHour(this.value.getHours() - this.hourStep);
    }
    /**
     * @param {?=} arrowkey
     * @return {?}
     */
    incrementMinute(arrowkey = false) {
        if (this.disabled || arrowkey && !this.arrowkeys) {
            return;
        }
        this.setMinute(this.value.getMinutes() + this.minuteStep);
    }
    /**
     * @param {?=} arrowkey
     * @return {?}
     */
    decrementMinute(arrowkey = false) {
        if (this.disabled || arrowkey && !this.arrowkeys) {
            return;
        }
        this.setMinute(this.value.getMinutes() - this.minuteStep);
    }
    /**
     * @param {?=} arrowkey
     * @return {?}
     */
    incrementSecond(arrowkey = false) {
        if (this.disabled || arrowkey && !this.arrowkeys) {
            return;
        }
        this.setSeconds(this.value.getSeconds() + this.secondStep);
    }
    /**
     * @param {?=} arrowkey
     * @return {?}
     */
    decrementSecond(arrowkey = false) {
        if (this.disabled || arrowkey && !this.arrowkeys) {
            return;
        }
        this.setSeconds(this.value.getSeconds() - this.secondStep);
    }
    /**
     * @param {?} meridian
     * @return {?}
     */
    selectMeridian(meridian) {
        this._meridian = meridian;
        // get the current time
        const /** @type {?} */ hour = this.value.getHours();
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
    }
    /**
     * @param {?} date
     * @return {?}
     */
    checkValidity(date) {
        let /** @type {?} */ valid = true;
        if (this.min && date.getTime() <= this.min.getTime()) {
            valid = false;
        }
        if (this.max && date.getTime() >= this.max.getTime()) {
            valid = false;
        }
        return valid;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    hourChange(value) {
        // convert the string to a number
        let /** @type {?} */ hour = parseInt(value);
        let /** @type {?} */ currentHour = this.value.getHours();
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
    }
    /**
     * @param {?} value
     * @return {?}
     */
    minuteChange(value) {
        // convert the string to a number
        let /** @type {?} */ minute = parseInt(value);
        let /** @type {?} */ currentMinute = this.value.getMinutes();
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
    }
    /**
     * @param {?} value
     * @return {?}
     */
    secondChange(value) {
        // convert the string to a number
        let /** @type {?} */ second = parseInt(value);
        let /** @type {?} */ currentSecond = this.value.getSeconds();
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
    }
}
TimePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-time-picker',
                template: `<div class="time-picker" aria-label="Time picker">

    <div class="time-picker-column" [class.has-error]="!(valid$ | async)" *ngIf="showHours">

        <ux-spin-button
            type="number"
            class="time-spinner"
            placeholder="HH"
            [min]="0"
            [max]="showMeridian ? 12 : 23"
            [value]="hour$ | async | timeFormat"
            (valueChange)="hourChange($event)"
            [spinners]="showSpinners"
            [disabled]="disabled"
            [readOnly]="readOnly"
            inputAriaLabel="hour"
            incrementAriaLabel="Increment the hour"
            decrementAriaLabel="Decrement the hour"
            (increment)="incrementHour()"
            (decrement)="decrementHour()">
        </ux-spin-button>

    </div>

    <div class="time-picker-separator" *ngIf="showMinutes">:</div>

    <div class="time-picker-column" [class.has-error]="!(valid$ | async)" *ngIf="showMinutes">

        <ux-spin-button
            type="number"
            class="time-spinner"
            placeholder="MM"
            [min]="0"
            [max]="59"
            [value]="minute$ | async | timeFormat"
            (valueChange)="minuteChange($event)"
            [spinners]="showSpinners"
            [disabled]="disabled"
            [readOnly]="readOnly"
            inputAriaLabel="minute"
            incrementAriaLabel="Increment the minute"
            decrementAriaLabel="Decrement the minute"
            (increment)="incrementMinute()"
            (decrement)="decrementMinute()">
        </ux-spin-button>

    </div>

    <div class="time-picker-separator" *ngIf="showSeconds">:</div>

    <div class="time-picker-column" [class.has-error]="!(valid$ | async)" *ngIf="showSeconds">

        <ux-spin-button
            type="number"
            class="time-spinner"
            type="number"
            placeholder="SS"
            [min]="0"
            [max]="59"
            [value]="second$ | async | timeFormat"
            (valueChange)="secondChange($event)"
            [spinners]="showSpinners"
            [disabled]="disabled"
            [readOnly]="readOnly"
            inputAriaLabel="seconds"
            incrementAriaLabel="Increment the second"
            decrementAriaLabel="Decrement the second"
            (increment)="incrementSecond()"
            (decrement)="decrementSecond()">
        </ux-spin-button>

    </div>
</div>

<div class="time-picker-meridian" *ngIf="showMeridian">

    <div class="btn-group" role="radiogroup">

        <button class="btn button-toggle-accent"
                *ngFor="let meridian of meridians"
                role="radio"
                tabindex="0"
                [disabled]="disabled"
                (click)="selectMeridian(meridian)"
                [class.active]="meridian === (meridian$ | async)"
                [attr.aria-label]="meridian"
                [attr.aria-checked]="meridian === (meridian$ | async)"
                [attr.aria-disabled]="disabled">
                {{ meridian }}
        </button>

    </div>
</div>`,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [TIME_PICKER_VALUE_ACCESSOR],
                host: {
                    'aria-label': 'Time Picker'
                }
            },] },
];
/** @nocollapse */
TimePickerComponent.ctorParameters = () => [];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdGltZS1waWNrZXIvdGltZS1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxSSxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLGVBQWUsRUFBZ0MsTUFBTSxNQUFNLENBQUM7QUFDckUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNELE1BQU0sQ0FBQyx1QkFBTSwwQkFBMEIsR0FBUTtJQUMzQyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsbUJBQW1CLENBQUM7SUFDbEQsS0FBSyxFQUFFLElBQUk7Q0FDZCxDQUFDO0FBd0dGLE1BQU07SUFtREY7eUJBakQ4QixJQUFJOzBCQUNILElBQUk7d0JBQ04sS0FBSzt3QkFDTCxLQUFLOzRCQUVELEtBQUs7eUJBQ1IsSUFBSTsyQkFDRixJQUFJOzJCQUNKLEtBQUs7NEJBQ0osSUFBSTt3QkFFVCxDQUFDOzBCQUNDLENBQUM7MEJBQ0QsQ0FBQzt5QkFJQSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7MkJBY25CLElBQUksWUFBWSxFQUFRO3VCQUM1QixJQUFJLFlBQVksRUFBVztpQ0FFZixHQUFHLEVBQUUsSUFBSTtnQ0FDSCxHQUFHLEVBQUUsSUFBSTtzQkFFdEMsSUFBSSxlQUFlLENBQU8sSUFBSSxJQUFJLEVBQUUsQ0FBQzs7cUJBR2xCLElBQUksQ0FBQyxNQUFN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QUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7S0FDckI7Ozs7O0lBRUQsU0FBUyxDQUFDLE1BQWM7UUFDcEIsdUJBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFckMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7S0FDckI7Ozs7O0lBRUQsVUFBVSxDQUFDLE9BQWU7UUFDdEIsdUJBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFdkMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7S0FDckI7Ozs7O0lBRUQsYUFBYSxDQUFDLFdBQW9CLEtBQUs7UUFDbkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUMvQyxNQUFNLENBQUM7U0FDVjtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDdkQ7Ozs7O0lBRUQsYUFBYSxDQUFDLFdBQW9CLEtBQUs7UUFDbkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUMvQyxNQUFNLENBQUM7U0FDVjtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDdkQ7Ozs7O0lBRUQsZUFBZSxDQUFDLFdBQW9CLEtBQUs7UUFDckMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUMvQyxNQUFNLENBQUM7U0FDVjtRQUVELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDN0Q7Ozs7O0lBRUQsZUFBZSxDQUFDLFdBQW9CLEtBQUs7UUFDckMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUMvQyxNQUFNLENBQUM7U0FDVjtRQUVELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDN0Q7Ozs7O0lBRUQsZUFBZSxDQUFDLFdBQW9CLEtBQUs7UUFDckMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUMvQyxNQUFNLENBQUM7U0FDVjtRQUVELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDOUQ7Ozs7O0lBRUQsZUFBZSxDQUFDLFdBQW9CLEtBQUs7UUFDckMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUMvQyxNQUFNLENBQUM7U0FDVjtRQUVELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUs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TSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNiLE1BQU0sR0FBRyxDQUFDLENBQUM7YUFDZDtZQUVELEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNkLE1BQU0sR0FBRyxFQUFFLENBQUM7YUFDZjtTQUNKOztRQUdELElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzNEOzs7WUF2WEosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0E0RlA7Z0JBQ0gsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztnQkFDdkMsSUFBSSxFQUFFO29CQUNGLFlBQVksRUFBRSxhQUFhO2lCQUM5QjthQUNKOzs7OzswQkFHSSxLQUFLOzJCQUNMLEtBQUs7eUJBQ0wsS0FBSzt5QkFDTCxLQUFLOzZCQUVMLEtBQUs7MEJBQ0wsS0FBSzs0QkFDTCxLQUFLOzRCQUNMLEtBQUs7NkJBQ0wsS0FBSzt5QkFFTCxLQUFLOzJCQUNMLEtBQUs7MkJBQ0wsS0FBSztvQkFFTCxLQUFLO29CQUNMLEtBQUs7MEJBQ0wsS0FBSztzQkFFTCxLQUFLOzRCQVlMLE1BQU07d0JBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCAsICBPYnNlcnZhYmxlICwgIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRJTUVfUElDS0VSX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XHJcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRpbWVQaWNrZXJDb21wb25lbnQpLFxyXG4gICAgbXVsdGk6IHRydWVcclxufTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd1eC10aW1lLXBpY2tlcicsXHJcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJ0aW1lLXBpY2tlclwiIGFyaWEtbGFiZWw9XCJUaW1lIHBpY2tlclwiPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJ0aW1lLXBpY2tlci1jb2x1bW5cIiBbY2xhc3MuaGFzLWVycm9yXT1cIiEodmFsaWQkIHwgYXN5bmMpXCIgKm5nSWY9XCJzaG93SG91cnNcIj5cclxuXHJcbiAgICAgICAgPHV4LXNwaW4tYnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBjbGFzcz1cInRpbWUtc3Bpbm5lclwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSEhcIlxyXG4gICAgICAgICAgICBbbWluXT1cIjBcIlxyXG4gICAgICAgICAgICBbbWF4XT1cInNob3dNZXJpZGlhbiA/IDEyIDogMjNcIlxyXG4gICAgICAgICAgICBbdmFsdWVdPVwiaG91ciQgfCBhc3luYyB8IHRpbWVGb3JtYXRcIlxyXG4gICAgICAgICAgICAodmFsdWVDaGFuZ2UpPVwiaG91ckNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgW3NwaW5uZXJzXT1cInNob3dTcGlubmVyc1wiXHJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgICAgIFtyZWFkT25seV09XCJyZWFkT25seVwiXHJcbiAgICAgICAgICAgIGlucHV0QXJpYUxhYmVsPVwiaG91clwiXHJcbiAgICAgICAgICAgIGluY3JlbWVudEFyaWFMYWJlbD1cIkluY3JlbWVudCB0aGUgaG91clwiXHJcbiAgICAgICAgICAgIGRlY3JlbWVudEFyaWFMYWJlbD1cIkRlY3JlbWVudCB0aGUgaG91clwiXHJcbiAgICAgICAgICAgIChpbmNyZW1lbnQpPVwiaW5jcmVtZW50SG91cigpXCJcclxuICAgICAgICAgICAgKGRlY3JlbWVudCk9XCJkZWNyZW1lbnRIb3VyKClcIj5cclxuICAgICAgICA8L3V4LXNwaW4tYnV0dG9uPlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJ0aW1lLXBpY2tlci1zZXBhcmF0b3JcIiAqbmdJZj1cInNob3dNaW51dGVzXCI+OjwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJ0aW1lLXBpY2tlci1jb2x1bW5cIiBbY2xhc3MuaGFzLWVycm9yXT1cIiEodmFsaWQkIHwgYXN5bmMpXCIgKm5nSWY9XCJzaG93TWludXRlc1wiPlxyXG5cclxuICAgICAgICA8dXgtc3Bpbi1idXR0b25cclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwidGltZS1zcGlubmVyXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNTVwiXHJcbiAgICAgICAgICAgIFttaW5dPVwiMFwiXHJcbiAgICAgICAgICAgIFttYXhdPVwiNTlcIlxyXG4gICAgICAgICAgICBbdmFsdWVdPVwibWludXRlJCB8IGFzeW5jIHwgdGltZUZvcm1hdFwiXHJcbiAgICAgICAgICAgICh2YWx1ZUNoYW5nZSk9XCJtaW51dGVDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgIFtzcGlubmVyc109XCJzaG93U3Bpbm5lcnNcIlxyXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICBbcmVhZE9ubHldPVwicmVhZE9ubHlcIlxyXG4gICAgICAgICAgICBpbnB1dEFyaWFMYWJlbD1cIm1pbnV0ZVwiXHJcbiAgICAgICAgICAgIGluY3JlbWVudEFyaWFMYWJlbD1cIkluY3JlbWVudCB0aGUgbWludXRlXCJcclxuICAgICAgICAgICAgZGVjcmVtZW50QXJpYUxhYmVsPVwiRGVjcmVtZW50IHRoZSBtaW51dGVcIlxyXG4gICAgICAgICAgICAoaW5jcmVtZW50KT1cImluY3JlbWVudE1pbnV0ZSgpXCJcclxuICAgICAgICAgICAgKGRlY3JlbWVudCk9XCJkZWNyZW1lbnRNaW51dGUoKVwiPlxyXG4gICAgICAgIDwvdXgtc3Bpbi1idXR0b24+XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInRpbWUtcGlja2VyLXNlcGFyYXRvclwiICpuZ0lmPVwic2hvd1NlY29uZHNcIj46PC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInRpbWUtcGlja2VyLWNvbHVtblwiIFtjbGFzcy5oYXMtZXJyb3JdPVwiISh2YWxpZCQgfCBhc3luYylcIiAqbmdJZj1cInNob3dTZWNvbmRzXCI+XHJcblxyXG4gICAgICAgIDx1eC1zcGluLWJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJ0aW1lLXNwaW5uZXJcIlxyXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTU1wiXHJcbiAgICAgICAgICAgIFttaW5dPVwiMFwiXHJcbiAgICAgICAgICAgIFttYXhdPVwiNTlcIlxyXG4gICAgICAgICAgICBbdmFsdWVdPVwic2Vjb25kJCB8IGFzeW5jIHwgdGltZUZvcm1hdFwiXHJcbiAgICAgICAgICAgICh2YWx1ZUNoYW5nZSk9XCJzZWNvbmRDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgIFtzcGlubmVyc109XCJzaG93U3Bpbm5lcnNcIlxyXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICBbcmVhZE9ubHldPVwicmVhZE9ubHlcIlxyXG4gICAgICAgICAgICBpbnB1dEFyaWFMYWJlbD1cInNlY29uZHNcIlxyXG4gICAgICAgICAgICBpbmNyZW1lbnRBcmlhTGFiZWw9XCJJbmNyZW1lbnQgdGhlIHNlY29uZFwiXHJcbiAgICAgICAgICAgIGRlY3JlbWVudEFyaWFMYWJlbD1cIkRlY3JlbWVudCB0aGUgc2Vjb25kXCJcclxuICAgICAgICAgICAgKGluY3JlbWVudCk9XCJpbmNyZW1lbnRTZWNvbmQoKVwiXHJcbiAgICAgICAgICAgIChkZWNyZW1lbnQpPVwiZGVjcmVtZW50U2Vjb25kKClcIj5cclxuICAgICAgICA8L3V4LXNwaW4tYnV0dG9uPlxyXG5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJ0aW1lLXBpY2tlci1tZXJpZGlhblwiICpuZ0lmPVwic2hvd01lcmlkaWFuXCI+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cFwiIHJvbGU9XCJyYWRpb2dyb3VwXCI+XHJcblxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnV0dG9uLXRvZ2dsZS1hY2NlbnRcIlxyXG4gICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IG1lcmlkaWFuIG9mIG1lcmlkaWFuc1wiXHJcbiAgICAgICAgICAgICAgICByb2xlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgdGFiaW5kZXg9XCIwXCJcclxuICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0TWVyaWRpYW4obWVyaWRpYW4pXCJcclxuICAgICAgICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwibWVyaWRpYW4gPT09IChtZXJpZGlhbiQgfCBhc3luYylcIlxyXG4gICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJtZXJpZGlhblwiXHJcbiAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWNoZWNrZWRdPVwibWVyaWRpYW4gPT09IChtZXJpZGlhbiQgfCBhc3luYylcIlxyXG4gICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1kaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxyXG4gICAgICAgICAgICAgICAge3sgbWVyaWRpYW4gfX1cclxuICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+YCxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAgIHByb3ZpZGVyczogW1RJTUVfUElDS0VSX1ZBTFVFX0FDQ0VTU09SXSxcclxuICAgIGhvc3Q6IHtcclxuICAgICAgICAnYXJpYS1sYWJlbCc6ICdUaW1lIFBpY2tlcidcclxuICAgIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRpbWVQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25EZXN0cm95IHtcclxuXHJcbiAgICBASW5wdXQoKSBhcnJvd2tleXM6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgQElucHV0KCkgbW91c2V3aGVlbDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgcmVhZE9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBASW5wdXQoKSBzaG93TWVyaWRpYW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHNob3dIb3VyczogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBzaG93TWludXRlczogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBzaG93U2Vjb25kczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgc2hvd1NwaW5uZXJzOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBASW5wdXQoKSBob3VyU3RlcDogbnVtYmVyID0gMTtcclxuICAgIEBJbnB1dCgpIG1pbnV0ZVN0ZXA6IG51bWJlciA9IDE7XHJcbiAgICBASW5wdXQoKSBzZWNvbmRTdGVwOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIEBJbnB1dCgpIG1pbjogRGF0ZTtcclxuICAgIEBJbnB1dCgpIG1heDogRGF0ZTtcclxuICAgIEBJbnB1dCgpIG1lcmlkaWFuczogc3RyaW5nW10gPSBbJ0FNJywgJ1BNJ107XHJcblxyXG4gICAgQElucHV0KCkgc2V0IHZhbHVlKHZhbHVlOiBEYXRlKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSQubmV4dChuZXcgRGF0ZSh2YWx1ZSkpO1xyXG4gICAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlJC52YWx1ZSk7XHJcblxyXG4gICAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayh0aGlzLnZhbHVlJC52YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB2YWx1ZSgpOiBEYXRlIHtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUodGhpcy52YWx1ZSQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4oKTtcclxuICAgIEBPdXRwdXQoKSBpc1ZhbGlkID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICAgIG9uVG91Y2hlZENhbGxiYWNrOiAoKSA9PiB2b2lkID0gKCkgPT4geyB9O1xyXG4gICAgb25DaGFuZ2VDYWxsYmFjazogKF86IERhdGUpID0+IHZvaWQgPSAoKSA9PiB7IH07XHJcblxyXG4gICAgdmFsdWUkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxEYXRlPihuZXcgRGF0ZSgpKTtcclxuXHJcbiAgICAvLyBjcmVhdGUgb2JzZXJ2YWJsZXMgdGhhdCBhcmUgZGVyaXZlZCBmcm9tIHRoZSBsYXRlc3QgdmFsdWVcclxuICAgIGhvdXIkOiBPYnNlcnZhYmxlPG51bWJlcj4gPSB0aGlzLnZhbHVlJC5waXBlKG1hcChkYXRlID0+IGRhdGUuZ2V0SG91cnMoKSksIG1hcChob3VyID0+IHRoaXMuc2hvd01lcmlkaWFuID8gdGhpcy5nZXRNZXJpZGlhblRpbWUoaG91cikgOiBob3VyKSk7XHJcbiAgICBtaW51dGUkOiBPYnNlcnZhYmxlPG51bWJlcj4gPSB0aGlzLnZhbHVlJC5waXBlKG1hcChkYXRlID0+IGRhdGUuZ2V0TWludXRlcygpKSk7XHJcbiAgICBzZWNvbmQkOiBPYnNlcnZhYmxlPG51bWJlcj4gPSB0aGlzLnZhbHVlJC5waXBlKG1hcChkYXRlID0+IGRhdGUuZ2V0U2Vjb25kcygpKSk7XHJcbiAgICBtZXJpZGlhbiQ6IE9ic2VydmFibGU8c3RyaW5nPiA9IHRoaXMudmFsdWUkLnBpcGUobWFwKGRhdGUgPT4gZGF0ZS5nZXRIb3VycygpIDwgMTIgPyB0aGlzLm1lcmlkaWFuc1swXSA6IHRoaXMubWVyaWRpYW5zWzFdKSk7XHJcbiAgICB2YWxpZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLnZhbHVlJC5waXBlKG1hcChkYXRlID0+IHRoaXMuY2hlY2tWYWxpZGl0eShkYXRlKSkpO1xyXG5cclxuICAgIHByaXZhdGUgX21lcmlkaWFuOiBzdHJpbmcgPSB0aGlzLm1lcmlkaWFuc1swXTtcclxuICAgIHByaXZhdGUgX3N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMudmFsaWQkLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSkuc3Vic2NyaWJlKHZhbGlkID0+IHRoaXMuaXNWYWxpZC5lbWl0KHZhbGlkKSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogRGF0ZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogRGF0ZSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IGZuO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1lcmlkaWFuVGltZShob3VyOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBob3VyID4gMTIgPyBob3VyIC0gMTIgOiBob3VyO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEhvdXIoaG91cjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgZGF0ZS5zZXRIb3Vycyhob3VyID8gaG91ciA6IDApO1xyXG5cclxuICAgICAgICB0aGlzLnZhbHVlID0gZGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRNaW51dGUobWludXRlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBkYXRlID0gdGhpcy52YWx1ZTtcclxuICAgICAgICBkYXRlLnNldE1pbnV0ZXMobWludXRlID8gbWludXRlIDogMCk7XHJcblxyXG4gICAgICAgIHRoaXMudmFsdWUgPSBkYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNlY29uZHMoc2Vjb25kczogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgZGF0ZS5zZXRTZWNvbmRzKHNlY29uZHMgPyBzZWNvbmRzIDogMCk7XHJcblxyXG4gICAgICAgIHRoaXMudmFsdWUgPSBkYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGluY3JlbWVudEhvdXIoYXJyb3drZXk6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IGFycm93a2V5ICYmICF0aGlzLmFycm93a2V5cykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldEhvdXIodGhpcy52YWx1ZS5nZXRIb3VycygpICsgdGhpcy5ob3VyU3RlcCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVjcmVtZW50SG91cihhcnJvd2tleTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgYXJyb3drZXkgJiYgIXRoaXMuYXJyb3drZXlzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0SG91cih0aGlzLnZhbHVlLmdldEhvdXJzKCkgLSB0aGlzLmhvdXJTdGVwKTtcclxuICAgIH1cclxuXHJcbiAgICBpbmNyZW1lbnRNaW51dGUoYXJyb3drZXk6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IGFycm93a2V5ICYmICF0aGlzLmFycm93a2V5cykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldE1pbnV0ZSh0aGlzLnZhbHVlLmdldE1pbnV0ZXMoKSArIHRoaXMubWludXRlU3RlcCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVjcmVtZW50TWludXRlKGFycm93a2V5OiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCBhcnJvd2tleSAmJiAhdGhpcy5hcnJvd2tleXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRNaW51dGUodGhpcy52YWx1ZS5nZXRNaW51dGVzKCkgLSB0aGlzLm1pbnV0ZVN0ZXApO1xyXG4gICAgfVxyXG5cclxuICAgIGluY3JlbWVudFNlY29uZChhcnJvd2tleTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgYXJyb3drZXkgJiYgIXRoaXMuYXJyb3drZXlzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U2Vjb25kcyh0aGlzLnZhbHVlLmdldFNlY29uZHMoKSArIHRoaXMuc2Vjb25kU3RlcCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVjcmVtZW50U2Vjb25kKGFycm93a2V5OiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCBhcnJvd2tleSAmJiAhdGhpcy5hcnJvd2tleXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRTZWNvbmRzKHRoaXMudmFsdWUuZ2V0U2Vjb25kcygpIC0gdGhpcy5zZWNvbmRTdGVwKTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RNZXJpZGlhbihtZXJpZGlhbjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fbWVyaWRpYW4gPSBtZXJpZGlhbjtcclxuXHJcbiAgICAgICAgLy8gZ2V0IHRoZSBjdXJyZW50IHRpbWVcclxuICAgICAgICBjb25zdCBob3VyID0gdGhpcy52YWx1ZS5nZXRIb3VycygpO1xyXG5cclxuICAgICAgICAvLyBpZiB3ZSBoYXZlIHNlbGVjdGVkIEFNXHJcbiAgICAgICAgaWYgKG1lcmlkaWFuID09PSB0aGlzLm1lcmlkaWFuc1swXSkge1xyXG4gICAgICAgICAgICBpZiAoaG91ciA+PSAxMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRIb3VyKGhvdXIgLSAxMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlmIHdlIGhhdmUgc2VsZWN0ZWQgUE1cclxuICAgICAgICBpZiAobWVyaWRpYW4gPT09IHRoaXMubWVyaWRpYW5zWzFdKSB7XHJcbiAgICAgICAgICAgIGlmIChob3VyIDwgMTIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0SG91cihob3VyICsgMTIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrVmFsaWRpdHkoZGF0ZTogRGF0ZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCB2YWxpZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1pbiAmJiBkYXRlLmdldFRpbWUoKSA8PSB0aGlzLm1pbi5nZXRUaW1lKCkpIHtcclxuICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1heCAmJiBkYXRlLmdldFRpbWUoKSA+PSB0aGlzLm1heC5nZXRUaW1lKCkpIHtcclxuICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB2YWxpZDtcclxuICAgIH1cclxuXHJcbiAgICBob3VyQ2hhbmdlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gY29udmVydCB0aGUgc3RyaW5nIHRvIGEgbnVtYmVyXHJcbiAgICAgICAgbGV0IGhvdXIgPSBwYXJzZUludCh2YWx1ZSk7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRIb3VyID0gdGhpcy52YWx1ZS5nZXRIb3VycygpO1xyXG5cclxuICAgICAgICAvLyBpZiB0aGUgdmFsdWUgaGFzbid0IGNoYW5nZWQsIGRvIG5vdGhpbmdcclxuICAgICAgICBpZiAoaG91ciA9PT0gY3VycmVudEhvdXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZW5zdXJlIHRoZSBob3VycyBpcyB2YWxpZFxyXG4gICAgICAgIGlmICghaXNOYU4oaG91cikpIHtcclxuICAgICAgICAgICAgaWYgKGhvdXIgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBob3VyID0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGhvdXIgPiAodGhpcy5zaG93TWVyaWRpYW4gPyAxMiA6IDIzKSkge1xyXG4gICAgICAgICAgICAgICAgaG91ciA9IHRoaXMuc2hvd01lcmlkaWFuID8gMTIgOiAyMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaG91ciA9IGlzTmFOKGhvdXIpID8gY3VycmVudEhvdXIgOiBob3VyO1xyXG5cclxuICAgICAgICAvLyBpZiB0aGUgbnVtYmVyIGlzIGludmFsaWQgdGhlbiByZXN0b3JlIGl0IHRvIHRoZSBwcmV2aW91cyB2YWx1ZVxyXG4gICAgICAgIGlmICh0aGlzLl9tZXJpZGlhbiA9PT0gdGhpcy5tZXJpZGlhbnNbMF0pIHtcclxuICAgICAgICAgICAgaWYgKGhvdXIgPj0gMTIpIHtcclxuICAgICAgICAgICAgICAgIGhvdXIgLT0gMTI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlmIHdlIGhhdmUgc2VsZWN0ZWQgUE1cclxuICAgICAgICBpZiAodGhpcy5fbWVyaWRpYW4gPT09IHRoaXMubWVyaWRpYW5zWzFdKSB7XHJcbiAgICAgICAgICAgIGlmIChob3VyIDwgMTIpIHtcclxuICAgICAgICAgICAgICAgIGhvdXIgKz0gMTI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0SG91cihob3VyKTtcclxuICAgIH1cclxuXHJcbiAgICBtaW51dGVDaGFuZ2UodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG5cclxuICAgICAgICAvLyBjb252ZXJ0IHRoZSBzdHJpbmcgdG8gYSBudW1iZXJcclxuICAgICAgICBsZXQgbWludXRlID0gcGFyc2VJbnQodmFsdWUpO1xyXG4gICAgICAgIGxldCBjdXJyZW50TWludXRlID0gdGhpcy52YWx1ZS5nZXRNaW51dGVzKCk7XHJcblxyXG4gICAgICAgIC8vIGlmIHRoZSB2YWx1ZSBoYXNuJ3QgY2hhbmdlZCwgZG8gbm90aGluZ1xyXG4gICAgICAgIGlmIChtaW51dGUgPT09IGN1cnJlbnRNaW51dGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZW5zdXJlIHRoZSBob3VycyBpcyB2YWxpZFxyXG4gICAgICAgIGlmICghaXNOYU4obWludXRlKSkge1xyXG4gICAgICAgICAgICBpZiAobWludXRlIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgbWludXRlID0gNTk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChtaW51dGUgPiA1OSkge1xyXG4gICAgICAgICAgICAgICAgbWludXRlID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYgdGhlIG51bWJlciBpcyBpbnZhbGlkIHRoZW4gcmVzdG9yZSBpdCB0byB0aGUgcHJldmlvdXMgdmFsdWVcclxuICAgICAgICB0aGlzLnNldE1pbnV0ZShpc05hTihtaW51dGUpID8gY3VycmVudE1pbnV0ZSA6IG1pbnV0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2Vjb25kQ2hhbmdlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICAvLyBjb252ZXJ0IHRoZSBzdHJpbmcgdG8gYSBudW1iZXJcclxuICAgICAgICBsZXQgc2Vjb25kID0gcGFyc2VJbnQodmFsdWUpO1xyXG4gICAgICAgIGxldCBjdXJyZW50U2Vjb25kID0gdGhpcy52YWx1ZS5nZXRTZWNvbmRzKCk7XHJcblxyXG4gICAgICAgIC8vIGlmIHRoZSB2YWx1ZSBoYXNuJ3QgY2hhbmdlZCwgZG8gbm90aGluZ1xyXG4gICAgICAgIGlmIChzZWNvbmQgPT09IGN1cnJlbnRTZWNvbmQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZW5zdXJlIHRoZSBob3VycyBpcyB2YWxpZFxyXG4gICAgICAgIGlmICghaXNOYU4oc2Vjb25kKSkge1xyXG4gICAgICAgICAgICBpZiAoc2Vjb25kIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgc2Vjb25kID0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHNlY29uZCA+IDU5KSB7XHJcbiAgICAgICAgICAgICAgICBzZWNvbmQgPSA1OTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYgdGhlIG51bWJlciBpcyBpbnZhbGlkIHRoZW4gcmVzdG9yZSBpdCB0byB0aGUgcHJldmlvdXMgdmFsdWVcclxuICAgICAgICB0aGlzLnNldFNlY29uZHMoaXNOYU4oc2Vjb25kKSA/IGN1cnJlbnRTZWNvbmQgOiBzZWNvbmQpO1xyXG4gICAgfVxyXG59Il19