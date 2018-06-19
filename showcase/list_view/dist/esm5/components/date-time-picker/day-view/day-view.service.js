/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { DateTimePickerService, ModeDirection } from '../date-time-picker.service';
import { compareDays, dateRange, gridify, months } from '../date-time-picker.utils';
var DayViewService = /** @class */ (function () {
    function DayViewService(_datepicker) {
        var _this = this;
        this._datepicker = _datepicker;
        this.grid$ = new BehaviorSubject([[]]);
        this.focused$ = new BehaviorSubject(null);
        this._subscription = combineLatest(_datepicker.month$, _datepicker.year$)
            .subscribe(function (_a) {
            var _b = tslib_1.__read(_a, 2), month = _b[0], year = _b[1];
            return _this.createDayGrid(month, year);
        });
    }
    /**
     * @return {?}
     */
    DayViewService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscription.unsubscribe();
    };
    /**
     * @param {?} day
     * @param {?} month
     * @param {?} year
     * @return {?}
     */
    DayViewService.prototype.setFocus = /**
     * @param {?} day
     * @param {?} month
     * @param {?} year
     * @return {?}
     */
    function (day, month, year) {
        this.focused$.next({ day: day, month: month, year: year });
        // update the date picker to show the required month and year
        this._datepicker.setViewportMonth(month);
        this._datepicker.setViewportYear(year);
    };
    /**
     * @param {?} month
     * @param {?} year
     * @return {?}
     */
    DayViewService.prototype.createDayGrid = /**
     * @param {?} month
     * @param {?} year
     * @return {?}
     */
    function (month, year) {
        var _this = this;
        // update the header
        this._datepicker.setHeader(months[month] + ' ' + year);
        // find the lower and upper boundaries
        var /** @type {?} */ start = new Date(year, month, 1);
        var /** @type {?} */ end = new Date(year, month + 1, 0);
        // we always want to show from the sunday - this may include showing some dates from the previous month
        start.setDate(start.getDate() - start.getDay());
        // we also want to make sure that the range ends on a saturday
        end.setDate(end.getDate() + (6 - end.getDay()));
        // create an array of all the days to display
        var /** @type {?} */ dates = dateRange(start, end).map(function (date) {
            return ({
                day: date.getDate(),
                month: date.getMonth(),
                year: date.getFullYear(),
                date: date,
                isToday: _this.isToday(date),
                isActive: _this.isActive(date),
                isCurrentMonth: date.getMonth() === month
            });
        });
        // turn the dates into a grid
        var /** @type {?} */ items = gridify(dates, 7);
        this.grid$.next(items);
        // if no item has yet been focused then focus the first day of the month
        if ((this._datepicker.modeDirection === ModeDirection.None || this._datepicker.modeDirection === ModeDirection.Descend) && this.focused$.value === null) {
            // check if the selected item is visible
            var /** @type {?} */ selectedDay = dates.find(function (day) { return day.isCurrentMonth && day.isActive; });
            if (selectedDay) {
                this.setFocus(selectedDay.day, selectedDay.month, selectedDay.year);
            }
            else {
                // find the first day of the month
                var /** @type {?} */ first = dates.find(function (date) { return date.day === 1; });
                // focus the date
                this.setFocus(first.day, first.month, first.year);
            }
        }
    };
    /**
     * Determine whether or not a specific date is today
     * @param {?} date The date to check
     * @return {?}
     */
    DayViewService.prototype.isToday = /**
     * Determine whether or not a specific date is today
     * @param {?} date The date to check
     * @return {?}
     */
    function (date) {
        return compareDays(new Date(), date);
    };
    /**
     * Determines whether or not a specific date is the selected one
     * @param {?} date the date to check
     * @return {?}
     */
    DayViewService.prototype.isActive = /**
     * Determines whether or not a specific date is the selected one
     * @param {?} date the date to check
     * @return {?}
     */
    function (date) {
        return compareDays(this._datepicker.selected$.value, date);
    };
    DayViewService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    DayViewService.ctorParameters = function () { return [
        { type: DateTimePickerService, },
    ]; };
    return DayViewService;
}());
export { DayViewService };
function DayViewService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    DayViewService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    DayViewService.ctorParameters;
    /** @type {?} */
    DayViewService.prototype.grid$;
    /** @type {?} */
    DayViewService.prototype.focused$;
    /** @type {?} */
    DayViewService.prototype._subscription;
    /** @type {?} */
    DayViewService.prototype._datepicker;
}
/**
 * @record
 */
export function DayViewItem() { }
function DayViewItem_tsickle_Closure_declarations() {
    /** @type {?} */
    DayViewItem.prototype.day;
    /** @type {?} */
    DayViewItem.prototype.month;
    /** @type {?} */
    DayViewItem.prototype.year;
    /** @type {?} */
    DayViewItem.prototype.date;
    /** @type {?} */
    DayViewItem.prototype.isToday;
    /** @type {?} */
    DayViewItem.prototype.isActive;
    /** @type {?} */
    DayViewItem.prototype.isCurrentMonth;
}
/**
 * @record
 */
export function FocusedDayItem() { }
function FocusedDayItem_tsickle_Closure_declarations() {
    /** @type {?} */
    FocusedDayItem.prototype.day;
    /** @type {?} */
    FocusedDayItem.prototype.month;
    /** @type {?} */
    FocusedDayItem.prototype.year;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5LXZpZXcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2RhdGUtdGltZS1waWNrZXIvZGF5LXZpZXcvZGF5LXZpZXcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBb0IsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNuRixPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0lBVWhGLHdCQUFvQixXQUFrQztRQUF0RCxpQkFHQztRQUhtQixnQkFBVyxHQUFYLFdBQVcsQ0FBdUI7cUJBTDlDLElBQUksZUFBZSxDQUFrQixDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUN2QyxJQUFJLGVBQWUsQ0FBaUIsSUFBSSxDQUFDO1FBS2hELElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLEtBQUssQ0FBQzthQUNwRSxTQUFTLENBQUMsVUFBQyxFQUFhO2dCQUFiLDBCQUFhLEVBQVosYUFBSyxFQUFFLFlBQUk7WUFBTSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQztRQUEvQixDQUErQixDQUFDLENBQUM7S0FDdEU7Ozs7SUFFRCxvQ0FBVzs7O0lBQVg7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3BDOzs7Ozs7O0lBRUQsaUNBQVE7Ozs7OztJQUFSLFVBQVMsR0FBVyxFQUFFLEtBQWEsRUFBRSxJQUFZO1FBQzdDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDOztRQUczRCxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzFDOzs7Ozs7SUFFTyxzQ0FBYTs7Ozs7Y0FBQyxLQUFhLEVBQUUsSUFBWTs7O1FBRzdDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUM7O1FBR3ZELHFCQUFNLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLHFCQUFNLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7UUFHekMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7O1FBR2hELEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7O1FBR2hELHFCQUFNLEtBQUssR0FBa0IsU0FBUyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJO1lBQUksT0FBQSxDQUFDO2dCQUM1RCxHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDbkIsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ3RCLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUN4QixJQUFJLEVBQUUsSUFBSTtnQkFDVixPQUFPLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQzNCLFFBQVEsRUFBRSxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztnQkFDN0IsY0FBYyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxLQUFLO2FBQzVDLENBQUM7UUFSNkQsQ0FRN0QsQ0FBQyxDQUFDOztRQUdKLHFCQUFNLEtBQUssR0FBb0IsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVqRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7UUFHdkIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsS0FBSyxhQUFhLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxLQUFLLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDOztZQUd0SixxQkFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxjQUFjLElBQUksR0FBRyxDQUFDLFFBQVEsRUFBbEMsQ0FBa0MsQ0FBQyxDQUFDO1lBRTFFLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3ZFO1lBQUMsSUFBSSxDQUFDLENBQUM7O2dCQUdKLHFCQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQWQsQ0FBYyxDQUFDLENBQUM7O2dCQUdqRCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDckQ7U0FFSjs7Ozs7OztJQU9HLGdDQUFPOzs7OztjQUFDLElBQVU7UUFDdEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDOzs7Ozs7O0lBT2pDLGlDQUFROzs7OztjQUFDLElBQVU7UUFDdkIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7OztnQkF6RmxFLFVBQVU7Ozs7Z0JBSEYscUJBQXFCOzt5QkFGOUI7O1NBTWEsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgLCAgU3Vic2NyaXB0aW9uICwgIGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgRGF0ZVRpbWVQaWNrZXJTZXJ2aWNlLCBNb2RlRGlyZWN0aW9uIH0gZnJvbSAnLi4vZGF0ZS10aW1lLXBpY2tlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgY29tcGFyZURheXMsIGRhdGVSYW5nZSwgZ3JpZGlmeSwgbW9udGhzIH0gZnJvbSAnLi4vZGF0ZS10aW1lLXBpY2tlci51dGlscyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEYXlWaWV3U2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcblxyXG4gICAgZ3JpZCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PERheVZpZXdJdGVtW11bXT4oW1tdXSk7XHJcbiAgICBmb2N1c2VkJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Rm9jdXNlZERheUl0ZW0+KG51bGwpO1xyXG5cclxuICAgIHByaXZhdGUgX3N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RhdGVwaWNrZXI6IERhdGVUaW1lUGlja2VyU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IGNvbWJpbmVMYXRlc3QoX2RhdGVwaWNrZXIubW9udGgkLCBfZGF0ZXBpY2tlci55ZWFyJClcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgoW21vbnRoLCB5ZWFyXSkgPT4gdGhpcy5jcmVhdGVEYXlHcmlkKG1vbnRoLCB5ZWFyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Rm9jdXMoZGF5OiBudW1iZXIsIG1vbnRoOiBudW1iZXIsIHllYXI6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZm9jdXNlZCQubmV4dCh7IGRheTogZGF5LCBtb250aDogbW9udGgsIHllYXI6IHllYXIgfSk7XHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgZGF0ZSBwaWNrZXIgdG8gc2hvdyB0aGUgcmVxdWlyZWQgbW9udGggYW5kIHllYXJcclxuICAgICAgICB0aGlzLl9kYXRlcGlja2VyLnNldFZpZXdwb3J0TW9udGgobW9udGgpO1xyXG4gICAgICAgIHRoaXMuX2RhdGVwaWNrZXIuc2V0Vmlld3BvcnRZZWFyKHllYXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlRGF5R3JpZChtb250aDogbnVtYmVyLCB5ZWFyOiBudW1iZXIpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIHRoZSBoZWFkZXJcclxuICAgICAgICB0aGlzLl9kYXRlcGlja2VyLnNldEhlYWRlcihtb250aHNbbW9udGhdICsgJyAnICsgeWVhcik7XHJcblxyXG4gICAgICAgIC8vIGZpbmQgdGhlIGxvd2VyIGFuZCB1cHBlciBib3VuZGFyaWVzXHJcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMSk7XHJcbiAgICAgICAgY29uc3QgZW5kID0gbmV3IERhdGUoeWVhciwgbW9udGggKyAxLCAwKTtcclxuXHJcbiAgICAgICAgLy8gd2UgYWx3YXlzIHdhbnQgdG8gc2hvdyBmcm9tIHRoZSBzdW5kYXkgLSB0aGlzIG1heSBpbmNsdWRlIHNob3dpbmcgc29tZSBkYXRlcyBmcm9tIHRoZSBwcmV2aW91cyBtb250aFxyXG4gICAgICAgIHN0YXJ0LnNldERhdGUoc3RhcnQuZ2V0RGF0ZSgpIC0gc3RhcnQuZ2V0RGF5KCkpO1xyXG5cclxuICAgICAgICAvLyB3ZSBhbHNvIHdhbnQgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIHJhbmdlIGVuZHMgb24gYSBzYXR1cmRheVxyXG4gICAgICAgIGVuZC5zZXREYXRlKGVuZC5nZXREYXRlKCkgKyAoNiAtIGVuZC5nZXREYXkoKSkpO1xyXG5cclxuICAgICAgICAvLyBjcmVhdGUgYW4gYXJyYXkgb2YgYWxsIHRoZSBkYXlzIHRvIGRpc3BsYXlcclxuICAgICAgICBjb25zdCBkYXRlczogRGF5Vmlld0l0ZW1bXSA9IGRhdGVSYW5nZShzdGFydCwgZW5kKS5tYXAoZGF0ZSA9PiAoe1xyXG4gICAgICAgICAgICBkYXk6IGRhdGUuZ2V0RGF0ZSgpLFxyXG4gICAgICAgICAgICBtb250aDogZGF0ZS5nZXRNb250aCgpLFxyXG4gICAgICAgICAgICB5ZWFyOiBkYXRlLmdldEZ1bGxZZWFyKCksXHJcbiAgICAgICAgICAgIGRhdGU6IGRhdGUsXHJcbiAgICAgICAgICAgIGlzVG9kYXk6IHRoaXMuaXNUb2RheShkYXRlKSxcclxuICAgICAgICAgICAgaXNBY3RpdmU6IHRoaXMuaXNBY3RpdmUoZGF0ZSksXHJcbiAgICAgICAgICAgIGlzQ3VycmVudE1vbnRoOiBkYXRlLmdldE1vbnRoKCkgPT09IG1vbnRoXHJcbiAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAvLyB0dXJuIHRoZSBkYXRlcyBpbnRvIGEgZ3JpZFxyXG4gICAgICAgIGNvbnN0IGl0ZW1zOiBEYXlWaWV3SXRlbVtdW10gPSBncmlkaWZ5KGRhdGVzLCA3KTtcclxuXHJcbiAgICAgICAgdGhpcy5ncmlkJC5uZXh0KGl0ZW1zKTtcclxuXHJcbiAgICAgICAgLy8gaWYgbm8gaXRlbSBoYXMgeWV0IGJlZW4gZm9jdXNlZCB0aGVuIGZvY3VzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIG1vbnRoXHJcbiAgICAgICAgaWYgKCh0aGlzLl9kYXRlcGlja2VyLm1vZGVEaXJlY3Rpb24gPT09IE1vZGVEaXJlY3Rpb24uTm9uZSB8fCB0aGlzLl9kYXRlcGlja2VyLm1vZGVEaXJlY3Rpb24gPT09IE1vZGVEaXJlY3Rpb24uRGVzY2VuZCkgJiYgdGhpcy5mb2N1c2VkJC52YWx1ZSA9PT0gbnVsbCkge1xyXG5cclxuICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIHNlbGVjdGVkIGl0ZW0gaXMgdmlzaWJsZVxyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZERheSA9IGRhdGVzLmZpbmQoZGF5ID0+IGRheS5pc0N1cnJlbnRNb250aCAmJiBkYXkuaXNBY3RpdmUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkRGF5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEZvY3VzKHNlbGVjdGVkRGF5LmRheSwgc2VsZWN0ZWREYXkubW9udGgsIHNlbGVjdGVkRGF5LnllYXIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGZpbmQgdGhlIGZpcnN0IGRheSBvZiB0aGUgbW9udGhcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0ID0gZGF0ZXMuZmluZChkYXRlID0+IGRhdGUuZGF5ID09PSAxKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gZm9jdXMgdGhlIGRhdGVcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Rm9jdXMoZmlyc3QuZGF5LCBmaXJzdC5tb250aCwgZmlyc3QueWVhcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAqIERldGVybWluZSB3aGV0aGVyIG9yIG5vdCBhIHNwZWNpZmljIGRhdGUgaXMgdG9kYXlcclxuICAgKiBAcGFyYW0gZGF0ZSBUaGUgZGF0ZSB0byBjaGVja1xyXG4gICAqL1xyXG4gICAgcHJpdmF0ZSBpc1RvZGF5KGRhdGU6IERhdGUpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gY29tcGFyZURheXMobmV3IERhdGUoKSwgZGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IGEgc3BlY2lmaWMgZGF0ZSBpcyB0aGUgc2VsZWN0ZWQgb25lXHJcbiAgICAgKiBAcGFyYW0gZGF0ZSB0aGUgZGF0ZSB0byBjaGVja1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGlzQWN0aXZlKGRhdGU6IERhdGUpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gY29tcGFyZURheXModGhpcy5fZGF0ZXBpY2tlci5zZWxlY3RlZCQudmFsdWUsIGRhdGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERheVZpZXdJdGVtIHtcclxuICAgIGRheTogbnVtYmVyO1xyXG4gICAgbW9udGg6IG51bWJlcjtcclxuICAgIHllYXI6IG51bWJlcjtcclxuICAgIGRhdGU6IERhdGU7XHJcbiAgICBpc1RvZGF5OiBib29sZWFuO1xyXG4gICAgaXNBY3RpdmU6IGJvb2xlYW47XHJcbiAgICBpc0N1cnJlbnRNb250aDogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGb2N1c2VkRGF5SXRlbSB7XHJcbiAgICBkYXk6IG51bWJlcjtcclxuICAgIG1vbnRoOiBudW1iZXI7XHJcbiAgICB5ZWFyOiBudW1iZXI7XHJcbn0iXX0=