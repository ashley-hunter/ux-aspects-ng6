/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { DateTimePickerService, ModeDirection } from '../date-time-picker.service';
import { compareDays, dateRange, gridify, months } from '../date-time-picker.utils';
export class DayViewService {
    /**
     * @param {?} _datepicker
     */
    constructor(_datepicker) {
        this._datepicker = _datepicker;
        this.grid$ = new BehaviorSubject([[]]);
        this.focused$ = new BehaviorSubject(null);
        this._subscription = combineLatest(_datepicker.month$, _datepicker.year$)
            .subscribe(([month, year]) => this.createDayGrid(month, year));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
    /**
     * @param {?} day
     * @param {?} month
     * @param {?} year
     * @return {?}
     */
    setFocus(day, month, year) {
        this.focused$.next({ day: day, month: month, year: year });
        // update the date picker to show the required month and year
        this._datepicker.setViewportMonth(month);
        this._datepicker.setViewportYear(year);
    }
    /**
     * @param {?} month
     * @param {?} year
     * @return {?}
     */
    createDayGrid(month, year) {
        // update the header
        this._datepicker.setHeader(months[month] + ' ' + year);
        // find the lower and upper boundaries
        const /** @type {?} */ start = new Date(year, month, 1);
        const /** @type {?} */ end = new Date(year, month + 1, 0);
        // we always want to show from the sunday - this may include showing some dates from the previous month
        start.setDate(start.getDate() - start.getDay());
        // we also want to make sure that the range ends on a saturday
        end.setDate(end.getDate() + (6 - end.getDay()));
        // create an array of all the days to display
        const /** @type {?} */ dates = dateRange(start, end).map(date => ({
            day: date.getDate(),
            month: date.getMonth(),
            year: date.getFullYear(),
            date: date,
            isToday: this.isToday(date),
            isActive: this.isActive(date),
            isCurrentMonth: date.getMonth() === month
        }));
        // turn the dates into a grid
        const /** @type {?} */ items = gridify(dates, 7);
        this.grid$.next(items);
        // if no item has yet been focused then focus the first day of the month
        if ((this._datepicker.modeDirection === ModeDirection.None || this._datepicker.modeDirection === ModeDirection.Descend) && this.focused$.value === null) {
            // check if the selected item is visible
            const /** @type {?} */ selectedDay = dates.find(day => day.isCurrentMonth && day.isActive);
            if (selectedDay) {
                this.setFocus(selectedDay.day, selectedDay.month, selectedDay.year);
            }
            else {
                // find the first day of the month
                const /** @type {?} */ first = dates.find(date => date.day === 1);
                // focus the date
                this.setFocus(first.day, first.month, first.year);
            }
        }
    }
    /**
     * Determine whether or not a specific date is today
     * @param {?} date The date to check
     * @return {?}
     */
    isToday(date) {
        return compareDays(new Date(), date);
    }
    /**
     * Determines whether or not a specific date is the selected one
     * @param {?} date the date to check
     * @return {?}
     */
    isActive(date) {
        return compareDays(this._datepicker.selected$.value, date);
    }
}
DayViewService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
DayViewService.ctorParameters = () => [
    { type: DateTimePickerService, },
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5LXZpZXcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2RhdGUtdGltZS1waWNrZXIvZGF5LXZpZXcvZGF5LXZpZXcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFvQixhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDeEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLGFBQWEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ25GLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUdwRixNQUFNOzs7O0lBT0YsWUFBb0IsV0FBa0M7UUFBbEMsZ0JBQVcsR0FBWCxXQUFXLENBQXVCO3FCQUw5QyxJQUFJLGVBQWUsQ0FBa0IsQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDdkMsSUFBSSxlQUFlLENBQWlCLElBQUksQ0FBQztRQUtoRCxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxLQUFLLENBQUM7YUFDcEUsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7S0FDdEU7Ozs7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUNwQzs7Ozs7OztJQUVELFFBQVEsQ0FBQyxHQUFXLEVBQUUsS0FBYSxFQUFFLElBQVk7UUFDN0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEtB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QyxXQUFXLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQzs7Ozs7OztJQU9qQyxRQUFRLENBQUMsSUFBVTtRQUN2QixNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQzs7OztZQXpGbEUsVUFBVTs7OztZQUhGLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgLCAgU3Vic2NyaXB0aW9uICwgIGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgRGF0ZVRpbWVQaWNrZXJTZXJ2aWNlLCBNb2RlRGlyZWN0aW9uIH0gZnJvbSAnLi4vZGF0ZS10aW1lLXBpY2tlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgY29tcGFyZURheXMsIGRhdGVSYW5nZSwgZ3JpZGlmeSwgbW9udGhzIH0gZnJvbSAnLi4vZGF0ZS10aW1lLXBpY2tlci51dGlscyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEYXlWaWV3U2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcblxyXG4gICAgZ3JpZCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PERheVZpZXdJdGVtW11bXT4oW1tdXSk7XHJcbiAgICBmb2N1c2VkJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Rm9jdXNlZERheUl0ZW0+KG51bGwpO1xyXG5cclxuICAgIHByaXZhdGUgX3N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RhdGVwaWNrZXI6IERhdGVUaW1lUGlja2VyU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IGNvbWJpbmVMYXRlc3QoX2RhdGVwaWNrZXIubW9udGgkLCBfZGF0ZXBpY2tlci55ZWFyJClcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgoW21vbnRoLCB5ZWFyXSkgPT4gdGhpcy5jcmVhdGVEYXlHcmlkKG1vbnRoLCB5ZWFyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Rm9jdXMoZGF5OiBudW1iZXIsIG1vbnRoOiBudW1iZXIsIHllYXI6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZm9jdXNlZCQubmV4dCh7IGRheTogZGF5LCBtb250aDogbW9udGgsIHllYXI6IHllYXIgfSk7XHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgZGF0ZSBwaWNrZXIgdG8gc2hvdyB0aGUgcmVxdWlyZWQgbW9udGggYW5kIHllYXJcclxuICAgICAgICB0aGlzLl9kYXRlcGlja2VyLnNldFZpZXdwb3J0TW9udGgobW9udGgpO1xyXG4gICAgICAgIHRoaXMuX2RhdGVwaWNrZXIuc2V0Vmlld3BvcnRZZWFyKHllYXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlRGF5R3JpZChtb250aDogbnVtYmVyLCB5ZWFyOiBudW1iZXIpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIHRoZSBoZWFkZXJcclxuICAgICAgICB0aGlzLl9kYXRlcGlja2VyLnNldEhlYWRlcihtb250aHNbbW9udGhdICsgJyAnICsgeWVhcik7XHJcblxyXG4gICAgICAgIC8vIGZpbmQgdGhlIGxvd2VyIGFuZCB1cHBlciBib3VuZGFyaWVzXHJcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMSk7XHJcbiAgICAgICAgY29uc3QgZW5kID0gbmV3IERhdGUoeWVhciwgbW9udGggKyAxLCAwKTtcclxuXHJcbiAgICAgICAgLy8gd2UgYWx3YXlzIHdhbnQgdG8gc2hvdyBmcm9tIHRoZSBzdW5kYXkgLSB0aGlzIG1heSBpbmNsdWRlIHNob3dpbmcgc29tZSBkYXRlcyBmcm9tIHRoZSBwcmV2aW91cyBtb250aFxyXG4gICAgICAgIHN0YXJ0LnNldERhdGUoc3RhcnQuZ2V0RGF0ZSgpIC0gc3RhcnQuZ2V0RGF5KCkpO1xyXG5cclxuICAgICAgICAvLyB3ZSBhbHNvIHdhbnQgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIHJhbmdlIGVuZHMgb24gYSBzYXR1cmRheVxyXG4gICAgICAgIGVuZC5zZXREYXRlKGVuZC5nZXREYXRlKCkgKyAoNiAtIGVuZC5nZXREYXkoKSkpO1xyXG5cclxuICAgICAgICAvLyBjcmVhdGUgYW4gYXJyYXkgb2YgYWxsIHRoZSBkYXlzIHRvIGRpc3BsYXlcclxuICAgICAgICBjb25zdCBkYXRlczogRGF5Vmlld0l0ZW1bXSA9IGRhdGVSYW5nZShzdGFydCwgZW5kKS5tYXAoZGF0ZSA9PiAoe1xyXG4gICAgICAgICAgICBkYXk6IGRhdGUuZ2V0RGF0ZSgpLFxyXG4gICAgICAgICAgICBtb250aDogZGF0ZS5nZXRNb250aCgpLFxyXG4gICAgICAgICAgICB5ZWFyOiBkYXRlLmdldEZ1bGxZZWFyKCksXHJcbiAgICAgICAgICAgIGRhdGU6IGRhdGUsXHJcbiAgICAgICAgICAgIGlzVG9kYXk6IHRoaXMuaXNUb2RheShkYXRlKSxcclxuICAgICAgICAgICAgaXNBY3RpdmU6IHRoaXMuaXNBY3RpdmUoZGF0ZSksXHJcbiAgICAgICAgICAgIGlzQ3VycmVudE1vbnRoOiBkYXRlLmdldE1vbnRoKCkgPT09IG1vbnRoXHJcbiAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAvLyB0dXJuIHRoZSBkYXRlcyBpbnRvIGEgZ3JpZFxyXG4gICAgICAgIGNvbnN0IGl0ZW1zOiBEYXlWaWV3SXRlbVtdW10gPSBncmlkaWZ5KGRhdGVzLCA3KTtcclxuXHJcbiAgICAgICAgdGhpcy5ncmlkJC5uZXh0KGl0ZW1zKTtcclxuXHJcbiAgICAgICAgLy8gaWYgbm8gaXRlbSBoYXMgeWV0IGJlZW4gZm9jdXNlZCB0aGVuIGZvY3VzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIG1vbnRoXHJcbiAgICAgICAgaWYgKCh0aGlzLl9kYXRlcGlja2VyLm1vZGVEaXJlY3Rpb24gPT09IE1vZGVEaXJlY3Rpb24uTm9uZSB8fCB0aGlzLl9kYXRlcGlja2VyLm1vZGVEaXJlY3Rpb24gPT09IE1vZGVEaXJlY3Rpb24uRGVzY2VuZCkgJiYgdGhpcy5mb2N1c2VkJC52YWx1ZSA9PT0gbnVsbCkge1xyXG5cclxuICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIHNlbGVjdGVkIGl0ZW0gaXMgdmlzaWJsZVxyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZERheSA9IGRhdGVzLmZpbmQoZGF5ID0+IGRheS5pc0N1cnJlbnRNb250aCAmJiBkYXkuaXNBY3RpdmUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkRGF5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEZvY3VzKHNlbGVjdGVkRGF5LmRheSwgc2VsZWN0ZWREYXkubW9udGgsIHNlbGVjdGVkRGF5LnllYXIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGZpbmQgdGhlIGZpcnN0IGRheSBvZiB0aGUgbW9udGhcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0ID0gZGF0ZXMuZmluZChkYXRlID0+IGRhdGUuZGF5ID09PSAxKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gZm9jdXMgdGhlIGRhdGVcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Rm9jdXMoZmlyc3QuZGF5LCBmaXJzdC5tb250aCwgZmlyc3QueWVhcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAqIERldGVybWluZSB3aGV0aGVyIG9yIG5vdCBhIHNwZWNpZmljIGRhdGUgaXMgdG9kYXlcclxuICAgKiBAcGFyYW0gZGF0ZSBUaGUgZGF0ZSB0byBjaGVja1xyXG4gICAqL1xyXG4gICAgcHJpdmF0ZSBpc1RvZGF5KGRhdGU6IERhdGUpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gY29tcGFyZURheXMobmV3IERhdGUoKSwgZGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IGEgc3BlY2lmaWMgZGF0ZSBpcyB0aGUgc2VsZWN0ZWQgb25lXHJcbiAgICAgKiBAcGFyYW0gZGF0ZSB0aGUgZGF0ZSB0byBjaGVja1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGlzQWN0aXZlKGRhdGU6IERhdGUpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gY29tcGFyZURheXModGhpcy5fZGF0ZXBpY2tlci5zZWxlY3RlZCQudmFsdWUsIGRhdGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERheVZpZXdJdGVtIHtcclxuICAgIGRheTogbnVtYmVyO1xyXG4gICAgbW9udGg6IG51bWJlcjtcclxuICAgIHllYXI6IG51bWJlcjtcclxuICAgIGRhdGU6IERhdGU7XHJcbiAgICBpc1RvZGF5OiBib29sZWFuO1xyXG4gICAgaXNBY3RpdmU6IGJvb2xlYW47XHJcbiAgICBpc0N1cnJlbnRNb250aDogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGb2N1c2VkRGF5SXRlbSB7XHJcbiAgICBkYXk6IG51bWJlcjtcclxuICAgIG1vbnRoOiBudW1iZXI7XHJcbiAgICB5ZWFyOiBudW1iZXI7XHJcbn0iXX0=