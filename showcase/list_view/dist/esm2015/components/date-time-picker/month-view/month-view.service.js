/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DateTimePickerService, ModeDirection } from '../date-time-picker.service';
import { gridify, monthsShort, range } from '../date-time-picker.utils';
export class MonthViewService {
    /**
     * @param {?} _datepicker
     */
    constructor(_datepicker) {
        this._datepicker = _datepicker;
        this.grid$ = new BehaviorSubject([[]]);
        this.focused$ = new BehaviorSubject(null);
        this._subscription = _datepicker.year$.subscribe(year => this.createMonthGrid(year));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
    /**
     * @param {?} month
     * @param {?} year
     * @return {?}
     */
    setFocus(month, year) {
        this.focused$.next({ month: month, year: year });
        // update the viewport to ensure focused month is visible
        this._datepicker.setViewportYear(year);
    }
    /**
     * @param {?} year
     * @return {?}
     */
    createMonthGrid(year) {
        // update the header
        this._datepicker.setHeader(year.toString());
        // get the current year and month
        const /** @type {?} */ currentMonth = new Date().getMonth();
        const /** @type {?} */ currentYear = new Date().getFullYear();
        // get the currently selected month
        const /** @type {?} */ activeMonth = this._datepicker.selected$.value.getMonth();
        const /** @type {?} */ activeYear = this._datepicker.selected$.value.getFullYear();
        // create a 4x3 grid of month numbers
        const /** @type {?} */ months = range(0, 11).map(month => {
            return {
                name: monthsShort[month],
                month: month,
                year: year,
                isCurrentMonth: year === currentYear && month === currentMonth,
                isActiveMonth: year === activeYear && month === activeMonth
            };
        });
        // map these to the appropriate format
        const /** @type {?} */ items = gridify(months, 4);
        // update the grid
        this.grid$.next(items);
        // if there is no focused month select the first one
        if (this._datepicker.modeDirection === ModeDirection.Descend && this.focused$.value === null) {
            // check if the selected month is in view
            const /** @type {?} */ selectedMonth = months.find(month => month.isActiveMonth);
            this.setFocus(selectedMonth ? selectedMonth.month : 0, year);
        }
    }
}
MonthViewService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
MonthViewService.ctorParameters = () => [
    { type: DateTimePickerService, },
];
function MonthViewService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MonthViewService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MonthViewService.ctorParameters;
    /** @type {?} */
    MonthViewService.prototype.grid$;
    /** @type {?} */
    MonthViewService.prototype.focused$;
    /** @type {?} */
    MonthViewService.prototype._subscription;
    /** @type {?} */
    MonthViewService.prototype._datepicker;
}
/**
 * @record
 */
export function MonthViewItem() { }
function MonthViewItem_tsickle_Closure_declarations() {
    /** @type {?} */
    MonthViewItem.prototype.name;
    /** @type {?} */
    MonthViewItem.prototype.month;
    /** @type {?} */
    MonthViewItem.prototype.year;
    /** @type {?} */
    MonthViewItem.prototype.isCurrentMonth;
    /** @type {?} */
    MonthViewItem.prototype.isActiveMonth;
}
/**
 * @record
 */
export function FocusedMonthItem() { }
function FocusedMonthItem_tsickle_Closure_declarations() {
    /** @type {?} */
    FocusedMonthItem.prototype.month;
    /** @type {?} */
    FocusedMonthItem.prototype.year;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtdmlldy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGF0ZS10aW1lLXBpY2tlci9tb250aC12aWV3L21vbnRoLXZpZXcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFrQixNQUFNLE1BQU0sQ0FBQztBQUN2RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDbkYsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHeEUsTUFBTTs7OztJQU9GLFlBQW9CLFdBQWtDO1FBQWxDLGdCQUFXLEdBQVgsV0FBVyxDQUF1QjtxQkFMOUMsSUFBSSxlQUFlLENBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQ3pDLElBQUksZUFBZSxDQUFtQixJQUFJLENBQUM7UUFLbEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztLQUN4Rjs7OztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3BDOzs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBYSxFQUFFLElBQVk7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDOztRQUdqRCxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUMxQzs7Ozs7SUFFTyxlQUFlLENBQUMsSUFBWTs7UUFHaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7O1FBRzVDLHVCQUFNLFlBQVksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzNDLHVCQUFNLFdBQVcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDOztRQUc3Qyx1QkFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hFLHVCQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7O1FBR2xFLHVCQUFNLE1BQU0sR0FBb0IsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDckQsTUFBTSxDQUFDO2dCQUNILElBQUksRUFBRSxXQUFXLENBQUMsS0FBSyxDQUFDO2dCQUN4QixLQUFLLEVBQUUsS0FBSztnQkFDWixJQUFJLEVBQUUsSUFBSTtnQkFDVixjQUFjLEVBQUUsSUFBSSxLQUFLLFdBQVcsSUFBSSxLQUFLLEtBQUssWUFBWTtnQkFDOUQsYUFBYSxFQUFFLElBQUksS0FBSyxVQUFVLElBQUksS0FBSyxLQUFLLFdBQVc7YUFDOUQsQ0FBQztTQUNMLENBQUMsQ0FBQzs7UUFHSCx1QkFBTSxLQUFLLEdBQXNCLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7O1FBR3BELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOztRQUd2QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsS0FBSyxhQUFhLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7O1lBRzNGLHVCQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBRWhFLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDaEU7Ozs7WUE1RFIsVUFBVTs7OztZQUhGLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgLCAgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IERhdGVUaW1lUGlja2VyU2VydmljZSwgTW9kZURpcmVjdGlvbiB9IGZyb20gJy4uL2RhdGUtdGltZS1waWNrZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IGdyaWRpZnksIG1vbnRoc1Nob3J0LCByYW5nZSB9IGZyb20gJy4uL2RhdGUtdGltZS1waWNrZXIudXRpbHMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTW9udGhWaWV3U2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcblxyXG4gICAgZ3JpZCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PE1vbnRoVmlld0l0ZW1bXVtdPihbW11dKTtcclxuICAgIGZvY3VzZWQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxGb2N1c2VkTW9udGhJdGVtPihudWxsKTtcclxuXHJcbiAgICBwcml2YXRlIF9zdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXRlcGlja2VyOiBEYXRlVGltZVBpY2tlclNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSBfZGF0ZXBpY2tlci55ZWFyJC5zdWJzY3JpYmUoeWVhciA9PiB0aGlzLmNyZWF0ZU1vbnRoR3JpZCh5ZWFyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Rm9jdXMobW9udGg6IG51bWJlciwgeWVhcjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5mb2N1c2VkJC5uZXh0KHsgbW9udGg6IG1vbnRoLCB5ZWFyOiB5ZWFyIH0pO1xyXG5cclxuICAgICAgICAvLyB1cGRhdGUgdGhlIHZpZXdwb3J0IHRvIGVuc3VyZSBmb2N1c2VkIG1vbnRoIGlzIHZpc2libGVcclxuICAgICAgICB0aGlzLl9kYXRlcGlja2VyLnNldFZpZXdwb3J0WWVhcih5ZWFyKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZU1vbnRoR3JpZCh5ZWFyOiBudW1iZXIpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIHRoZSBoZWFkZXJcclxuICAgICAgICB0aGlzLl9kYXRlcGlja2VyLnNldEhlYWRlcih5ZWFyLnRvU3RyaW5nKCkpO1xyXG5cclxuICAgICAgICAvLyBnZXQgdGhlIGN1cnJlbnQgeWVhciBhbmQgbW9udGhcclxuICAgICAgICBjb25zdCBjdXJyZW50TW9udGggPSBuZXcgRGF0ZSgpLmdldE1vbnRoKCk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gICAgICAgIC8vIGdldCB0aGUgY3VycmVudGx5IHNlbGVjdGVkIG1vbnRoXHJcbiAgICAgICAgY29uc3QgYWN0aXZlTW9udGggPSB0aGlzLl9kYXRlcGlja2VyLnNlbGVjdGVkJC52YWx1ZS5nZXRNb250aCgpO1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZVllYXIgPSB0aGlzLl9kYXRlcGlja2VyLnNlbGVjdGVkJC52YWx1ZS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICAgICAgICAvLyBjcmVhdGUgYSA0eDMgZ3JpZCBvZiBtb250aCBudW1iZXJzXHJcbiAgICAgICAgY29uc3QgbW9udGhzOiBNb250aFZpZXdJdGVtW10gPSByYW5nZSgwLCAxMSkubWFwKG1vbnRoID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IG1vbnRoc1Nob3J0W21vbnRoXSxcclxuICAgICAgICAgICAgICAgIG1vbnRoOiBtb250aCxcclxuICAgICAgICAgICAgICAgIHllYXI6IHllYXIsXHJcbiAgICAgICAgICAgICAgICBpc0N1cnJlbnRNb250aDogeWVhciA9PT0gY3VycmVudFllYXIgJiYgbW9udGggPT09IGN1cnJlbnRNb250aCxcclxuICAgICAgICAgICAgICAgIGlzQWN0aXZlTW9udGg6IHllYXIgPT09IGFjdGl2ZVllYXIgJiYgbW9udGggPT09IGFjdGl2ZU1vbnRoXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIG1hcCB0aGVzZSB0byB0aGUgYXBwcm9wcmlhdGUgZm9ybWF0XHJcbiAgICAgICAgY29uc3QgaXRlbXM6IE1vbnRoVmlld0l0ZW1bXVtdID0gZ3JpZGlmeShtb250aHMsIDQpO1xyXG5cclxuICAgICAgICAvLyB1cGRhdGUgdGhlIGdyaWRcclxuICAgICAgICB0aGlzLmdyaWQkLm5leHQoaXRlbXMpO1xyXG5cclxuICAgICAgICAvLyBpZiB0aGVyZSBpcyBubyBmb2N1c2VkIG1vbnRoIHNlbGVjdCB0aGUgZmlyc3Qgb25lXHJcbiAgICAgICAgaWYgKHRoaXMuX2RhdGVwaWNrZXIubW9kZURpcmVjdGlvbiA9PT0gTW9kZURpcmVjdGlvbi5EZXNjZW5kICYmIHRoaXMuZm9jdXNlZCQudmFsdWUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBzZWxlY3RlZCBtb250aCBpcyBpbiB2aWV3XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkTW9udGggPSBtb250aHMuZmluZChtb250aCA9PiBtb250aC5pc0FjdGl2ZU1vbnRoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0Rm9jdXMoc2VsZWN0ZWRNb250aCA/IHNlbGVjdGVkTW9udGgubW9udGggOiAwLCB5ZWFyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTW9udGhWaWV3SXRlbSB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBtb250aDogbnVtYmVyO1xyXG4gICAgeWVhcjogbnVtYmVyO1xyXG4gICAgaXNDdXJyZW50TW9udGg6IGJvb2xlYW47XHJcbiAgICBpc0FjdGl2ZU1vbnRoOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZvY3VzZWRNb250aEl0ZW0ge1xyXG4gICAgbW9udGg6IG51bWJlcjtcclxuICAgIHllYXI6IG51bWJlcjtcclxufSJdfQ==