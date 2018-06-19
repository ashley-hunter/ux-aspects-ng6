/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { DateTimePickerConfig } from './date-time-picker.config';
import { dateComparator } from './date-time-picker.utils';
export class DateTimePickerService {
    /**
     * @param {?} _config
     */
    constructor(_config) {
        this._config = _config;
        this.mode$ = new BehaviorSubject(DatePickerMode.Day);
        this.date$ = new BehaviorSubject(new Date());
        this.timezone$ = new BehaviorSubject(this.getCurrentTimezone());
        this.selected$ = new BehaviorSubject(new Date());
        // the month and year to display in the viewport
        this.month$ = new BehaviorSubject(new Date().getMonth());
        this.year$ = new BehaviorSubject(new Date().getFullYear());
        this.showDate$ = new BehaviorSubject(this._config.showDate);
        this.showTime$ = new BehaviorSubject(this._config.showTime);
        this.showTimezone$ = new BehaviorSubject(this._config.showTimezone);
        this.showSeconds$ = new BehaviorSubject(this._config.showSeconds);
        this.showMeridian$ = new BehaviorSubject(this._config.showMeridian);
        this.showSpinners$ = new BehaviorSubject(this._config.showSpinners);
        this.weekdays$ = new BehaviorSubject(this._config.weekdays);
        this.nowBtnText$ = new BehaviorSubject(this._config.nowBtnText);
        this.timezones$ = new BehaviorSubject(this._config.timezones);
        this.header$ = new BehaviorSubject(null);
        this.headerEvent$ = new Subject();
        this.modeDirection = ModeDirection.None;
        // when the active date changes set the currently selected date
        this._subscription = this.selected$.pipe(distinctUntilChanged(dateComparator)).subscribe(date => {
            // the month and year displayed in the viewport should reflect the newly selected items
            this.setViewportMonth(date.getMonth());
            this.setViewportYear(date.getFullYear());
            // emit the new date to the component host
            this.date$.next(date);
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
    /**
     * @param {?} month
     * @return {?}
     */
    setViewportMonth(month) {
        if (month < 0) {
            this.month$.next(11);
            this.year$.next(this.year$.value - 1);
        }
        else if (month > 11) {
            this.month$.next(0);
            this.year$.next(this.year$.value + 1);
        }
        else {
            this.month$.next(month);
        }
    }
    /**
     * @param {?} year
     * @return {?}
     */
    setViewportYear(year) {
        this.year$.next(year);
    }
    /**
     * @param {?} day
     * @param {?} month
     * @param {?} year
     * @return {?}
     */
    setDate(day, month, year) {
        const /** @type {?} */ date = new Date(this.selected$.value);
        date.setDate(day);
        date.setMonth(month);
        date.setFullYear(year);
        this.selected$.next(date);
    }
    /**
     * @return {?}
     */
    setDateToNow() {
        this.selected$.next(new Date());
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    setViewportMode(mode) {
        this.mode$.next(mode);
    }
    /**
     * @return {?}
     */
    goToChildMode() {
        this.modeDirection = ModeDirection.Descend;
        switch (this.mode$.value) {
            case DatePickerMode.Year:
                return this.setViewportMode(DatePickerMode.Month);
            case DatePickerMode.Month:
                return this.setViewportMode(DatePickerMode.Day);
        }
    }
    /**
     * @return {?}
     */
    goToParentMode() {
        this.modeDirection = ModeDirection.Ascend;
        switch (this.mode$.value) {
            case DatePickerMode.Day:
                return this.setViewportMode(DatePickerMode.Month);
            case DatePickerMode.Month:
                return this.setViewportMode(DatePickerMode.Year);
        }
    }
    /**
     * @return {?}
     */
    goToNext() {
        this.headerEvent$.next(DatePickerHeaderEvent.Next);
    }
    /**
     * @return {?}
     */
    goToPrevious() {
        this.headerEvent$.next(DatePickerHeaderEvent.Previous);
    }
    /**
     * @param {?} header
     * @return {?}
     */
    setHeader(header) {
        this.header$.next(header);
    }
    /**
     * @return {?}
     */
    getCurrentTimezone() {
        const /** @type {?} */ offset = new Date().getTimezoneOffset();
        return this._config.timezones.find(timezone => timezone.offset === offset);
    }
    /**
     * @param {?} timezone
     * @return {?}
     */
    setTimezone(timezone) {
        this.timezone$.next(timezone);
    }
}
DateTimePickerService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
DateTimePickerService.ctorParameters = () => [
    { type: DateTimePickerConfig, },
];
function DateTimePickerService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    DateTimePickerService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    DateTimePickerService.ctorParameters;
    /** @type {?} */
    DateTimePickerService.prototype.mode$;
    /** @type {?} */
    DateTimePickerService.prototype.date$;
    /** @type {?} */
    DateTimePickerService.prototype.timezone$;
    /** @type {?} */
    DateTimePickerService.prototype.selected$;
    /** @type {?} */
    DateTimePickerService.prototype.month$;
    /** @type {?} */
    DateTimePickerService.prototype.year$;
    /** @type {?} */
    DateTimePickerService.prototype.showDate$;
    /** @type {?} */
    DateTimePickerService.prototype.showTime$;
    /** @type {?} */
    DateTimePickerService.prototype.showTimezone$;
    /** @type {?} */
    DateTimePickerService.prototype.showSeconds$;
    /** @type {?} */
    DateTimePickerService.prototype.showMeridian$;
    /** @type {?} */
    DateTimePickerService.prototype.showSpinners$;
    /** @type {?} */
    DateTimePickerService.prototype.weekdays$;
    /** @type {?} */
    DateTimePickerService.prototype.nowBtnText$;
    /** @type {?} */
    DateTimePickerService.prototype.timezones$;
    /** @type {?} */
    DateTimePickerService.prototype.header$;
    /** @type {?} */
    DateTimePickerService.prototype.headerEvent$;
    /** @type {?} */
    DateTimePickerService.prototype.modeDirection;
    /** @type {?} */
    DateTimePickerService.prototype._subscription;
    /** @type {?} */
    DateTimePickerService.prototype._config;
}
/** @enum {number} */
const DatePickerMode = {
    Day: 0,
    Month: 1,
    Year: 2,
};
export { DatePickerMode };
DatePickerMode[DatePickerMode.Day] = "Day";
DatePickerMode[DatePickerMode.Month] = "Month";
DatePickerMode[DatePickerMode.Year] = "Year";
/** @enum {number} */
const ModeDirection = {
    None: 0,
    Ascend: 1,
    Descend: 2,
};
export { ModeDirection };
ModeDirection[ModeDirection.None] = "None";
ModeDirection[ModeDirection.Ascend] = "Ascend";
ModeDirection[ModeDirection.Descend] = "Descend";
/** @enum {number} */
const DatePickerHeaderEvent = {
    Previous: 0,
    Next: 1,
};
export { DatePickerHeaderEvent };
DatePickerHeaderEvent[DatePickerHeaderEvent.Previous] = "Previous";
DatePickerHeaderEvent[DatePickerHeaderEvent.Next] = "Next";
/**
 * @record
 */
export function DateTimePickerTimezone() { }
function DateTimePickerTimezone_tsickle_Closure_declarations() {
    /** @type {?} */
    DateTimePickerTimezone.prototype.name;
    /** @type {?} */
    DateTimePickerTimezone.prototype.offset;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10aW1lLXBpY2tlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGF0ZS10aW1lLXBpY2tlci9kYXRlLXRpbWUtcGlja2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBSSxPQUFPLEVBQWtCLE1BQU0sTUFBTSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUcxRCxNQUFNOzs7O0lBMkJGLFlBQW9CLE9BQTZCO1FBQTdCLFlBQU8sR0FBUCxPQUFPLENBQXNCO3FCQXpCUixJQUFJLGVBQWUsQ0FBaUIsY0FBYyxDQUFDLEdBQUcsQ0FBQztxQkFDakUsSUFBSSxlQUFlLENBQU8sSUFBSSxJQUFJLEVBQUUsQ0FBQzt5QkFDeEQsSUFBSSxlQUFlLENBQXlCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO3lCQUMvQyxJQUFJLGVBQWUsQ0FBTyxJQUFJLElBQUksRUFBRSxDQUFDOztzQkFHdEMsSUFBSSxlQUFlLENBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztxQkFDbkQsSUFBSSxlQUFlLENBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQzt5QkFFMUUsSUFBSSxlQUFlLENBQVUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7eUJBQ25ELElBQUksZUFBZSxDQUFVLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDOzZCQUMvQyxJQUFJLGVBQWUsQ0FBVSxJQUFJLENB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QUksSUFBSSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUM5QyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsQ0FBQztLQUM5RTs7Ozs7SUFFRCxXQUFXLENBQUMsUUFBZ0M7UUFDeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDakM7OztZQTdISixVQUFVOzs7O1lBSEYsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgLCAgU3ViamVjdCAsICBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IERhdGVUaW1lUGlja2VyQ29uZmlnIH0gZnJvbSAnLi9kYXRlLXRpbWUtcGlja2VyLmNvbmZpZyc7XHJcbmltcG9ydCB7IGRhdGVDb21wYXJhdG9yIH0gZnJvbSAnLi9kYXRlLXRpbWUtcGlja2VyLnV0aWxzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERhdGVUaW1lUGlja2VyU2VydmljZSB7XHJcblxyXG4gICAgbW9kZSQ6IEJlaGF2aW9yU3ViamVjdDxEYXRlUGlja2VyTW9kZT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PERhdGVQaWNrZXJNb2RlPihEYXRlUGlja2VyTW9kZS5EYXkpO1xyXG4gICAgZGF0ZSQ6IEJlaGF2aW9yU3ViamVjdDxEYXRlPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8RGF0ZT4obmV3IERhdGUoKSk7XHJcbiAgICB0aW1lem9uZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PERhdGVUaW1lUGlja2VyVGltZXpvbmU+KHRoaXMuZ2V0Q3VycmVudFRpbWV6b25lKCkpO1xyXG4gICAgc2VsZWN0ZWQkOiBCZWhhdmlvclN1YmplY3Q8RGF0ZT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PERhdGU+KG5ldyBEYXRlKCkpO1xyXG5cclxuICAgIC8vIHRoZSBtb250aCBhbmQgeWVhciB0byBkaXNwbGF5IGluIHRoZSB2aWV3cG9ydFxyXG4gICAgbW9udGgkOiBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPihuZXcgRGF0ZSgpLmdldE1vbnRoKCkpO1xyXG4gICAgeWVhciQ6IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+KG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSk7XHJcblxyXG4gICAgc2hvd0RhdGUkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPih0aGlzLl9jb25maWcuc2hvd0RhdGUpO1xyXG4gICAgc2hvd1RpbWUkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPih0aGlzLl9jb25maWcuc2hvd1RpbWUpO1xyXG4gICAgc2hvd1RpbWV6b25lJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4odGhpcy5fY29uZmlnLnNob3dUaW1lem9uZSk7XHJcbiAgICBzaG93U2Vjb25kcyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KHRoaXMuX2NvbmZpZy5zaG93U2Vjb25kcyk7XHJcbiAgICBzaG93TWVyaWRpYW4kID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPih0aGlzLl9jb25maWcuc2hvd01lcmlkaWFuKTtcclxuICAgIHNob3dTcGlubmVycyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KHRoaXMuX2NvbmZpZy5zaG93U3Bpbm5lcnMpO1xyXG4gICAgd2Vla2RheXMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmdbXT4odGhpcy5fY29uZmlnLndlZWtkYXlzKTtcclxuICAgIG5vd0J0blRleHQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KHRoaXMuX2NvbmZpZy5ub3dCdG5UZXh0KTtcclxuICAgIHRpbWV6b25lcyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PERhdGVUaW1lUGlja2VyVGltZXpvbmVbXT4odGhpcy5fY29uZmlnLnRpbWV6b25lcyk7XHJcblxyXG4gICAgaGVhZGVyJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPihudWxsKTtcclxuICAgIGhlYWRlckV2ZW50JCA9IG5ldyBTdWJqZWN0PERhdGVQaWNrZXJIZWFkZXJFdmVudD4oKTtcclxuICAgIG1vZGVEaXJlY3Rpb246IE1vZGVEaXJlY3Rpb24gPSBNb2RlRGlyZWN0aW9uLk5vbmU7XHJcblxyXG4gICAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY29uZmlnOiBEYXRlVGltZVBpY2tlckNvbmZpZykge1xyXG5cclxuICAgICAgICAvLyB3aGVuIHRoZSBhY3RpdmUgZGF0ZSBjaGFuZ2VzIHNldCB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGRhdGVcclxuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSB0aGlzLnNlbGVjdGVkJC5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKGRhdGVDb21wYXJhdG9yKSkuc3Vic2NyaWJlKGRhdGUgPT4ge1xyXG5cclxuICAgICAgICAgICAgLy8gdGhlIG1vbnRoIGFuZCB5ZWFyIGRpc3BsYXllZCBpbiB0aGUgdmlld3BvcnQgc2hvdWxkIHJlZmxlY3QgdGhlIG5ld2x5IHNlbGVjdGVkIGl0ZW1zXHJcbiAgICAgICAgICAgIHRoaXMuc2V0Vmlld3BvcnRNb250aChkYXRlLmdldE1vbnRoKCkpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFZpZXdwb3J0WWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xyXG5cclxuICAgICAgICAgICAgLy8gZW1pdCB0aGUgbmV3IGRhdGUgdG8gdGhlIGNvbXBvbmVudCBob3N0XHJcbiAgICAgICAgICAgIHRoaXMuZGF0ZSQubmV4dChkYXRlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRWaWV3cG9ydE1vbnRoKG1vbnRoOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAobW9udGggPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9udGgkLm5leHQoMTEpO1xyXG4gICAgICAgICAgICB0aGlzLnllYXIkLm5leHQodGhpcy55ZWFyJC52YWx1ZSAtIDEpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobW9udGggPiAxMSkge1xyXG4gICAgICAgICAgICB0aGlzLm1vbnRoJC5uZXh0KDApO1xyXG4gICAgICAgICAgICB0aGlzLnllYXIkLm5leHQodGhpcy55ZWFyJC52YWx1ZSArIDEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9udGgkLm5leHQobW9udGgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRWaWV3cG9ydFllYXIoeWVhcjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy55ZWFyJC5uZXh0KHllYXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERhdGUoZGF5OiBudW1iZXIsIG1vbnRoOiBudW1iZXIsIHllYXI6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLnNlbGVjdGVkJC52YWx1ZSk7XHJcblxyXG4gICAgICAgIGRhdGUuc2V0RGF0ZShkYXkpO1xyXG4gICAgICAgIGRhdGUuc2V0TW9udGgobW9udGgpO1xyXG4gICAgICAgIGRhdGUuc2V0RnVsbFllYXIoeWVhcik7XHJcblxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQkLm5leHQoZGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGF0ZVRvTm93KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQkLm5leHQobmV3IERhdGUoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Vmlld3BvcnRNb2RlKG1vZGU6IERhdGVQaWNrZXJNb2RlKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tb2RlJC5uZXh0KG1vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdvVG9DaGlsZE1vZGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tb2RlRGlyZWN0aW9uID0gTW9kZURpcmVjdGlvbi5EZXNjZW5kO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHRoaXMubW9kZSQudmFsdWUpIHtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgRGF0ZVBpY2tlck1vZGUuWWVhcjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFZpZXdwb3J0TW9kZShEYXRlUGlja2VyTW9kZS5Nb250aCk7XHJcblxyXG4gICAgICAgICAgICBjYXNlIERhdGVQaWNrZXJNb2RlLk1vbnRoOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0Vmlld3BvcnRNb2RlKERhdGVQaWNrZXJNb2RlLkRheSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdvVG9QYXJlbnRNb2RlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubW9kZURpcmVjdGlvbiA9IE1vZGVEaXJlY3Rpb24uQXNjZW5kO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHRoaXMubW9kZSQudmFsdWUpIHtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgRGF0ZVBpY2tlck1vZGUuRGF5OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0Vmlld3BvcnRNb2RlKERhdGVQaWNrZXJNb2RlLk1vbnRoKTtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgRGF0ZVBpY2tlck1vZGUuTW9udGg6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRWaWV3cG9ydE1vZGUoRGF0ZVBpY2tlck1vZGUuWWVhcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdvVG9OZXh0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaGVhZGVyRXZlbnQkLm5leHQoRGF0ZVBpY2tlckhlYWRlckV2ZW50Lk5leHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdvVG9QcmV2aW91cygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhlYWRlckV2ZW50JC5uZXh0KERhdGVQaWNrZXJIZWFkZXJFdmVudC5QcmV2aW91cyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SGVhZGVyKGhlYWRlcjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oZWFkZXIkLm5leHQoaGVhZGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDdXJyZW50VGltZXpvbmUoKTogRGF0ZVRpbWVQaWNrZXJUaW1lem9uZSB7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gbmV3IERhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb25maWcudGltZXpvbmVzLmZpbmQodGltZXpvbmUgPT4gdGltZXpvbmUub2Zmc2V0ID09PSBvZmZzZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRpbWV6b25lKHRpbWV6b25lOiBEYXRlVGltZVBpY2tlclRpbWV6b25lKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50aW1lem9uZSQubmV4dCh0aW1lem9uZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIERhdGVQaWNrZXJNb2RlIHtcclxuICAgIERheSxcclxuICAgIE1vbnRoLFxyXG4gICAgWWVhclxyXG59XHJcblxyXG5leHBvcnQgZW51bSBNb2RlRGlyZWN0aW9uIHtcclxuICAgIE5vbmUsXHJcbiAgICBBc2NlbmQsXHJcbiAgICBEZXNjZW5kXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIERhdGVQaWNrZXJIZWFkZXJFdmVudCB7XHJcbiAgICBQcmV2aW91cyxcclxuICAgIE5leHRcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEYXRlVGltZVBpY2tlclRpbWV6b25lIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIG9mZnNldDogbnVtYmVyO1xyXG59Il19