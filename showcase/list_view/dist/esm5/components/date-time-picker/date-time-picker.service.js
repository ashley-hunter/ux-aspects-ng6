/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { DateTimePickerConfig } from './date-time-picker.config';
import { dateComparator } from './date-time-picker.utils';
var DateTimePickerService = /** @class */ (function () {
    function DateTimePickerService(_config) {
        var _this = this;
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
        this._subscription = this.selected$.pipe(distinctUntilChanged(dateComparator)).subscribe(function (date) {
            // the month and year displayed in the viewport should reflect the newly selected items
            // the month and year displayed in the viewport should reflect the newly selected items
            _this.setViewportMonth(date.getMonth());
            _this.setViewportYear(date.getFullYear());
            // emit the new date to the component host
            // emit the new date to the component host
            _this.date$.next(date);
        });
    }
    /**
     * @return {?}
     */
    DateTimePickerService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscription.unsubscribe();
    };
    /**
     * @param {?} month
     * @return {?}
     */
    DateTimePickerService.prototype.setViewportMonth = /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
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
    };
    /**
     * @param {?} year
     * @return {?}
     */
    DateTimePickerService.prototype.setViewportYear = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        this.year$.next(year);
    };
    /**
     * @param {?} day
     * @param {?} month
     * @param {?} year
     * @return {?}
     */
    DateTimePickerService.prototype.setDate = /**
     * @param {?} day
     * @param {?} month
     * @param {?} year
     * @return {?}
     */
    function (day, month, year) {
        var /** @type {?} */ date = new Date(this.selected$.value);
        date.setDate(day);
        date.setMonth(month);
        date.setFullYear(year);
        this.selected$.next(date);
    };
    /**
     * @return {?}
     */
    DateTimePickerService.prototype.setDateToNow = /**
     * @return {?}
     */
    function () {
        this.selected$.next(new Date());
    };
    /**
     * @param {?} mode
     * @return {?}
     */
    DateTimePickerService.prototype.setViewportMode = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        this.mode$.next(mode);
    };
    /**
     * @return {?}
     */
    DateTimePickerService.prototype.goToChildMode = /**
     * @return {?}
     */
    function () {
        this.modeDirection = ModeDirection.Descend;
        switch (this.mode$.value) {
            case DatePickerMode.Year:
                return this.setViewportMode(DatePickerMode.Month);
            case DatePickerMode.Month:
                return this.setViewportMode(DatePickerMode.Day);
        }
    };
    /**
     * @return {?}
     */
    DateTimePickerService.prototype.goToParentMode = /**
     * @return {?}
     */
    function () {
        this.modeDirection = ModeDirection.Ascend;
        switch (this.mode$.value) {
            case DatePickerMode.Day:
                return this.setViewportMode(DatePickerMode.Month);
            case DatePickerMode.Month:
                return this.setViewportMode(DatePickerMode.Year);
        }
    };
    /**
     * @return {?}
     */
    DateTimePickerService.prototype.goToNext = /**
     * @return {?}
     */
    function () {
        this.headerEvent$.next(DatePickerHeaderEvent.Next);
    };
    /**
     * @return {?}
     */
    DateTimePickerService.prototype.goToPrevious = /**
     * @return {?}
     */
    function () {
        this.headerEvent$.next(DatePickerHeaderEvent.Previous);
    };
    /**
     * @param {?} header
     * @return {?}
     */
    DateTimePickerService.prototype.setHeader = /**
     * @param {?} header
     * @return {?}
     */
    function (header) {
        this.header$.next(header);
    };
    /**
     * @return {?}
     */
    DateTimePickerService.prototype.getCurrentTimezone = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ offset = new Date().getTimezoneOffset();
        return this._config.timezones.find(function (timezone) { return timezone.offset === offset; });
    };
    /**
     * @param {?} timezone
     * @return {?}
     */
    DateTimePickerService.prototype.setTimezone = /**
     * @param {?} timezone
     * @return {?}
     */
    function (timezone) {
        this.timezone$.next(timezone);
    };
    DateTimePickerService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    DateTimePickerService.ctorParameters = function () { return [
        { type: DateTimePickerConfig, },
    ]; };
    return DateTimePickerService;
}());
export { DateTimePickerService };
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
var DatePickerMode = {
    Day: 0,
    Month: 1,
    Year: 2,
};
export { DatePickerMode };
DatePickerMode[DatePickerMode.Day] = "Day";
DatePickerMode[DatePickerMode.Month] = "Month";
DatePickerMode[DatePickerMode.Year] = "Year";
/** @enum {number} */
var ModeDirection = {
    None: 0,
    Ascend: 1,
    Descend: 2,
};
export { ModeDirection };
ModeDirection[ModeDirection.None] = "None";
ModeDirection[ModeDirection.Ascend] = "Ascend";
ModeDirection[ModeDirection.Descend] = "Descend";
/** @enum {number} */
var DatePickerHeaderEvent = {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10aW1lLXBpY2tlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGF0ZS10aW1lLXBpY2tlci9kYXRlLXRpbWUtcGlja2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBSSxPQUFPLEVBQWtCLE1BQU0sTUFBTSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7SUE4QnRELCtCQUFvQixPQUE2QjtRQUFqRCxpQkFZQztRQVptQixZQUFPLEdBQVAsT0FBTyxDQUFzQjtxQkF6QlIsSUFBSSxlQUFlLENBQWlCLGNBQWMsQ0FBQyxHQUFHLENBQUM7cUJBQ2pFLElBQUksZUFBZSxDQUFPLElBQUksSUFBSSxFQUFFLENBQUM7eUJBQ3hELElBQUksZUFBZSxDQUF5QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQzt5QkFDL0MsSUFBSSxlQUFlLENBQU8sSUFBSSxJQUFJLEVBQUUsQ0FBQzs7c0JBR3RDLElBQUksZUFBZSxDQUFTLElBQUksSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7cUJBQ25ELElBQUksZUFBZSxDQUFTLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7eUJBRTFFLElBQUksZUFBZSxDQUFVLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO3lCQUNuRCxJQUFJLGVBQWUsQ0FBVSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQzs2QkFDL0MsSUFBSSxlQUFlLENBQVUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7NEJBQ3hELElBQUksZUFBZSxDQUFVLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDOzZCQUNyRCxJQUFJLGVBQWUsQ0FBVSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQzs2QkFDdkQsSUFBSSxlQUFlLENBQVUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7eUJBQzNELElBQUksZUFBZSxDQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDOzJCQUNsRCxJQUFJLGVBQWUsQ0FBUyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQzswQkFDckQsSUFBSSxlQUFlLENBQTJCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO3VCQUV4RSxJQUFJLGVBQWUsQ0FBUyxJQUFJLENBQUM7NEJBQzVCLElBQUksT0FBTyxFQUF5Qjs2QkFDcEIsYUFBYSxDQUFDLElBQUk7O1FBTzdDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJOztZQUd6RixBQURBLHVGQUF1RjtZQUN2RixLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDdkMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQzs7WUFHekMsQUFEQSwwQ0FBMEM7WUFDMUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDekIsQ0FBQyxDQUFDO0tBQ047Ozs7SUFFRCwyQ0FBVzs7O0lBQVg7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3BDOzs7OztJQUVELGdEQUFnQjs7OztJQUFoQixVQUFpQixLQUFhO1FBQzFCLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDekM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDekM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNCO0tBQ0o7Ozs7O0lBRUQsK0NBQWU7Ozs7SUFBZixVQUFnQixJQUFZO1FBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3pCOzs7Ozs7O0lBRUQsdUNBQU87Ozs7OztJQUFQLFVBQVEsR0FBVyxFQUFFLEtBQWEsRUFBRSxJQUFZO1FBQzVDLHFCQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTVDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXZCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzdCOzs7O0lBRUQsNENBQVk7OztJQUFaO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0tBQ25DOzs7OztJQUVELCtDQUFlOzs7O0lBQWYsVUFBZ0IsSUFBb0I7UUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDekI7Ozs7SUFFRCw2Q0FBYTs7O0lBQWI7UUFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFFM0MsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBRXZCLEtBQUssY0FBYyxDQUFDLElBQUk7Z0JBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUV0RCxLQUFLLGNBQWMsQ0FBQyxLQUFLO2dCQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdkQ7S0FDSjs7OztJQUVELDhDQUFjOzs7SUFBZDtRQUNJLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUUxQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFFdkIsS0FBSyxjQUFjLENBQUMsR0FBRztnQkFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRXRELEtBQUssY0FBYyxDQUFDLEtBQUs7Z0JBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4RDtLQUNKOzs7O0lBRUQsd0NBQVE7OztJQUFSO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDdEQ7Ozs7SUFFRCw0Q0FBWTs7O0lBQVo7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUMxRDs7Ozs7SUFFRCx5Q0FBUzs7OztJQUFULFVBQVUsTUFBYztRQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUM3Qjs7OztJQUVELGtEQUFrQjs7O0lBQWxCO1FBQ0kscUJBQU0sTUFBTSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUM5QyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLE1BQU0sS0FBSyxNQUFNLEVBQTFCLENBQTBCLENBQUMsQ0FBQztLQUM5RTs7Ozs7SUFFRCwyQ0FBVzs7OztJQUFYLFVBQVksUUFBZ0M7UUFDeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDakM7O2dCQTdISixVQUFVOzs7O2dCQUhGLG9CQUFvQjs7Z0NBSDdCOztTQU9hLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0ICwgIFN1YmplY3QgLCAgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBEYXRlVGltZVBpY2tlckNvbmZpZyB9IGZyb20gJy4vZGF0ZS10aW1lLXBpY2tlci5jb25maWcnO1xyXG5pbXBvcnQgeyBkYXRlQ29tcGFyYXRvciB9IGZyb20gJy4vZGF0ZS10aW1lLXBpY2tlci51dGlscyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEYXRlVGltZVBpY2tlclNlcnZpY2Uge1xyXG5cclxuICAgIG1vZGUkOiBCZWhhdmlvclN1YmplY3Q8RGF0ZVBpY2tlck1vZGU+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxEYXRlUGlja2VyTW9kZT4oRGF0ZVBpY2tlck1vZGUuRGF5KTtcclxuICAgIGRhdGUkOiBCZWhhdmlvclN1YmplY3Q8RGF0ZT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PERhdGU+KG5ldyBEYXRlKCkpO1xyXG4gICAgdGltZXpvbmUkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxEYXRlVGltZVBpY2tlclRpbWV6b25lPih0aGlzLmdldEN1cnJlbnRUaW1lem9uZSgpKTtcclxuICAgIHNlbGVjdGVkJDogQmVoYXZpb3JTdWJqZWN0PERhdGU+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxEYXRlPihuZXcgRGF0ZSgpKTtcclxuXHJcbiAgICAvLyB0aGUgbW9udGggYW5kIHllYXIgdG8gZGlzcGxheSBpbiB0aGUgdmlld3BvcnRcclxuICAgIG1vbnRoJDogQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4obmV3IERhdGUoKS5nZXRNb250aCgpKTtcclxuICAgIHllYXIkOiBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPihuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkpO1xyXG5cclxuICAgIHNob3dEYXRlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4odGhpcy5fY29uZmlnLnNob3dEYXRlKTtcclxuICAgIHNob3dUaW1lJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4odGhpcy5fY29uZmlnLnNob3dUaW1lKTtcclxuICAgIHNob3dUaW1lem9uZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KHRoaXMuX2NvbmZpZy5zaG93VGltZXpvbmUpO1xyXG4gICAgc2hvd1NlY29uZHMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPih0aGlzLl9jb25maWcuc2hvd1NlY29uZHMpO1xyXG4gICAgc2hvd01lcmlkaWFuJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4odGhpcy5fY29uZmlnLnNob3dNZXJpZGlhbik7XHJcbiAgICBzaG93U3Bpbm5lcnMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPih0aGlzLl9jb25maWcuc2hvd1NwaW5uZXJzKTtcclxuICAgIHdlZWtkYXlzJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nW10+KHRoaXMuX2NvbmZpZy53ZWVrZGF5cyk7XHJcbiAgICBub3dCdG5UZXh0JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPih0aGlzLl9jb25maWcubm93QnRuVGV4dCk7XHJcbiAgICB0aW1lem9uZXMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxEYXRlVGltZVBpY2tlclRpbWV6b25lW10+KHRoaXMuX2NvbmZpZy50aW1lem9uZXMpO1xyXG5cclxuICAgIGhlYWRlciQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4obnVsbCk7XHJcbiAgICBoZWFkZXJFdmVudCQgPSBuZXcgU3ViamVjdDxEYXRlUGlja2VySGVhZGVyRXZlbnQ+KCk7XHJcbiAgICBtb2RlRGlyZWN0aW9uOiBNb2RlRGlyZWN0aW9uID0gTW9kZURpcmVjdGlvbi5Ob25lO1xyXG5cclxuICAgIHByaXZhdGUgX3N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NvbmZpZzogRGF0ZVRpbWVQaWNrZXJDb25maWcpIHtcclxuXHJcbiAgICAgICAgLy8gd2hlbiB0aGUgYWN0aXZlIGRhdGUgY2hhbmdlcyBzZXQgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBkYXRlXHJcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uID0gdGhpcy5zZWxlY3RlZCQucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZChkYXRlQ29tcGFyYXRvcikpLnN1YnNjcmliZShkYXRlID0+IHtcclxuXHJcbiAgICAgICAgICAgIC8vIHRoZSBtb250aCBhbmQgeWVhciBkaXNwbGF5ZWQgaW4gdGhlIHZpZXdwb3J0IHNob3VsZCByZWZsZWN0IHRoZSBuZXdseSBzZWxlY3RlZCBpdGVtc1xyXG4gICAgICAgICAgICB0aGlzLnNldFZpZXdwb3J0TW9udGgoZGF0ZS5nZXRNb250aCgpKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRWaWV3cG9ydFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGVtaXQgdGhlIG5ldyBkYXRlIHRvIHRoZSBjb21wb25lbnQgaG9zdFxyXG4gICAgICAgICAgICB0aGlzLmRhdGUkLm5leHQoZGF0ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Vmlld3BvcnRNb250aChtb250aDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKG1vbnRoIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vbnRoJC5uZXh0KDExKTtcclxuICAgICAgICAgICAgdGhpcy55ZWFyJC5uZXh0KHRoaXMueWVhciQudmFsdWUgLSAxKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG1vbnRoID4gMTEpIHtcclxuICAgICAgICAgICAgdGhpcy5tb250aCQubmV4dCgwKTtcclxuICAgICAgICAgICAgdGhpcy55ZWFyJC5uZXh0KHRoaXMueWVhciQudmFsdWUgKyAxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1vbnRoJC5uZXh0KG1vbnRoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Vmlld3BvcnRZZWFyKHllYXI6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMueWVhciQubmV4dCh5ZWFyKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXREYXRlKGRheTogbnVtYmVyLCBtb250aDogbnVtYmVyLCB5ZWFyOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodGhpcy5zZWxlY3RlZCQudmFsdWUpO1xyXG5cclxuICAgICAgICBkYXRlLnNldERhdGUoZGF5KTtcclxuICAgICAgICBkYXRlLnNldE1vbnRoKG1vbnRoKTtcclxuICAgICAgICBkYXRlLnNldEZ1bGxZZWFyKHllYXIpO1xyXG5cclxuICAgICAgICB0aGlzLnNlbGVjdGVkJC5uZXh0KGRhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERhdGVUb05vdygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkJC5uZXh0KG5ldyBEYXRlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFZpZXdwb3J0TW9kZShtb2RlOiBEYXRlUGlja2VyTW9kZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubW9kZSQubmV4dChtb2RlKTtcclxuICAgIH1cclxuXHJcbiAgICBnb1RvQ2hpbGRNb2RlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubW9kZURpcmVjdGlvbiA9IE1vZGVEaXJlY3Rpb24uRGVzY2VuZDtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLm1vZGUkLnZhbHVlKSB7XHJcblxyXG4gICAgICAgICAgICBjYXNlIERhdGVQaWNrZXJNb2RlLlllYXI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRWaWV3cG9ydE1vZGUoRGF0ZVBpY2tlck1vZGUuTW9udGgpO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBEYXRlUGlja2VyTW9kZS5Nb250aDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFZpZXdwb3J0TW9kZShEYXRlUGlja2VyTW9kZS5EYXkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnb1RvUGFyZW50TW9kZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1vZGVEaXJlY3Rpb24gPSBNb2RlRGlyZWN0aW9uLkFzY2VuZDtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLm1vZGUkLnZhbHVlKSB7XHJcblxyXG4gICAgICAgICAgICBjYXNlIERhdGVQaWNrZXJNb2RlLkRheTpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFZpZXdwb3J0TW9kZShEYXRlUGlja2VyTW9kZS5Nb250aCk7XHJcblxyXG4gICAgICAgICAgICBjYXNlIERhdGVQaWNrZXJNb2RlLk1vbnRoOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0Vmlld3BvcnRNb2RlKERhdGVQaWNrZXJNb2RlLlllYXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnb1RvTmV4dCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhlYWRlckV2ZW50JC5uZXh0KERhdGVQaWNrZXJIZWFkZXJFdmVudC5OZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBnb1RvUHJldmlvdXMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oZWFkZXJFdmVudCQubmV4dChEYXRlUGlja2VySGVhZGVyRXZlbnQuUHJldmlvdXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEhlYWRlcihoZWFkZXI6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaGVhZGVyJC5uZXh0KGhlYWRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q3VycmVudFRpbWV6b25lKCk6IERhdGVUaW1lUGlja2VyVGltZXpvbmUge1xyXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IG5ldyBEYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlnLnRpbWV6b25lcy5maW5kKHRpbWV6b25lID0+IHRpbWV6b25lLm9mZnNldCA9PT0gb2Zmc2V0KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUaW1lem9uZSh0aW1lem9uZTogRGF0ZVRpbWVQaWNrZXJUaW1lem9uZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudGltZXpvbmUkLm5leHQodGltZXpvbmUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBEYXRlUGlja2VyTW9kZSB7XHJcbiAgICBEYXksXHJcbiAgICBNb250aCxcclxuICAgIFllYXJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTW9kZURpcmVjdGlvbiB7XHJcbiAgICBOb25lLFxyXG4gICAgQXNjZW5kLFxyXG4gICAgRGVzY2VuZFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBEYXRlUGlja2VySGVhZGVyRXZlbnQge1xyXG4gICAgUHJldmlvdXMsXHJcbiAgICBOZXh0XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZVRpbWVQaWNrZXJUaW1lem9uZSB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBvZmZzZXQ6IG51bWJlcjtcclxufSJdfQ==