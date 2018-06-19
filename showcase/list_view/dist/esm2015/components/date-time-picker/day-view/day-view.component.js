/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DatePickerHeaderEvent, DateTimePickerService } from '../date-time-picker.service';
import { DayViewService } from './day-view.service';
export class DayViewComponent {
    /**
     * @param {?} datePicker
     * @param {?} dayService
     */
    constructor(datePicker, dayService) {
        this.datePicker = datePicker;
        this.dayService = dayService;
        this._subscription = datePicker.headerEvent$
            .subscribe(event => event === DatePickerHeaderEvent.Next ? this.next() : this.previous());
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
    /**
     * Navigate to the previous page of dates
     * @return {?}
     */
    previous() {
        this.datePicker.setViewportMonth(this.datePicker.month$.value - 1);
    }
    /**
     * Navigate to the next page of dates
     * @return {?}
     */
    next() {
        this.datePicker.setViewportMonth(this.datePicker.month$.value + 1);
    }
    /**
     * Select a particular date
     * @param {?} date the date to select
     * @return {?}
     */
    select(date) {
        // update the current date object
        this.datePicker.setDate(date.getDate(), date.getMonth(), date.getFullYear());
        // focus the newly selected date
        this.dayService.setFocus(date.getDate(), date.getMonth(), date.getFullYear());
    }
    /**
     * @param {?} index
     * @return {?}
     */
    trackWeekByFn(index) {
        return index;
    }
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    trackDayByFn(index, item) {
        return `${item.day} ${item.month} ${item.year}`;
    }
    /**
     * @param {?} item
     * @param {?} dayOffset
     * @return {?}
     */
    focusDate(item, dayOffset) {
        // determine the date of the day
        const /** @type {?} */ target = new Date(item.date.setDate(item.date.getDate() + dayOffset));
        // identify which date should be focused
        this.dayService.setFocus(target.getDate(), target.getMonth(), target.getFullYear());
    }
    /**
     * @param {?} item
     * @return {?}
     */
    getTabbable(item) {
        const /** @type {?} */ focused = this.dayService.focused$.value;
        const /** @type {?} */ grid = this.dayService.grid$.value;
        // if there is a focused month check if this is it
        if (focused) {
            // check if the focused day is visible
            const /** @type {?} */ isFocusedDayVisible = !!grid.find(row => !!row.find(_item => _item.day === focused.day && _item.month === focused.month && _item.year === focused.year));
            if (isFocusedDayVisible) {
                return focused.day === item.day && focused.month === item.month && focused.year === item.year;
            }
        }
        // if there is no focusable day then check if there is a selected day
        const /** @type {?} */ isSelectedDayVisible = !!grid.find(row => !!row.find(day => day.isActive));
        if (isSelectedDayVisible) {
            return item.isActive;
        }
        // otherwise make the first day tabbable
        return item.day === 1;
    }
}
DayViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-date-time-picker-day-view',
                template: `<table class="calendar">
    <thead>
        <tr>
            <th *ngFor="let day of datePicker.weekdays$ | async" class="weekday" [attr.aria-label]="day">{{ day }}</th>
        </tr>
    </thead>

    <tbody role="grid">
        <tr role="row" *ngFor="let row of dayService.grid$ | async; trackBy: trackWeekByFn">

            <td *ngFor="let item of row; trackBy: trackDayByFn" class="date-cell" role="gridcell">

                <button class="date-button"
                        [focusIf]="(dayService.focused$ | async)?.day === item.day && (dayService.focused$ | async)?.month === item.month && (dayService.focused$ | async)?.year === item.year"
                        [attr.aria-label]="item.date | date"
                        [attr.aria-selected]="item.isActive"
                        [attr.aria-hidden]="!item.isCurrentMonth"
                        [class.current]="item.isToday"
                        [class.active]="item.isActive"
                        [class.preview]="!item.isCurrentMonth"
                        [tabindex]="getTabbable(item) ? 0 : -1"
                        (click)="select(item.date); $event.stopPropagation()"
                        (keydown.ArrowLeft)="focusDate(item, -1); $event.preventDefault()"
                        (keydown.ArrowRight)="focusDate(item, 1); $event.preventDefault()"
                        (keydown.ArrowUp)="focusDate(item, -7); $event.preventDefault()"
                        (keydown.ArrowDown)="focusDate(item, 7); $event.preventDefault()">

                    {{ item.date.getDate() }}
                </button>

            </td>
        </tr>
    </tbody>
</table>`,
                providers: [DayViewService],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
DayViewComponent.ctorParameters = () => [
    { type: DateTimePickerService, },
    { type: DayViewService, },
];
function DayViewComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    DayViewComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    DayViewComponent.ctorParameters;
    /** @type {?} */
    DayViewComponent.prototype._subscription;
    /** @type {?} */
    DayViewComponent.prototype.datePicker;
    /** @type {?} */
    DayViewComponent.prototype.dayService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5LXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGF0ZS10aW1lLXBpY2tlci9kYXktdmlldy9kYXktdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFOUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDM0YsT0FBTyxFQUFlLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBeUNqRSxNQUFNOzs7OztJQUlKLFlBQW1CLFVBQWlDLEVBQVMsVUFBMEI7UUFBcEUsZUFBVSxHQUFWLFVBQVUsQ0FBdUI7UUFBUyxlQUFVLEdBQVYsVUFBVSxDQUFnQjtRQUNyRixJQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQyxZQUFZO2FBQ3pDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssS0FBSyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7S0FDN0Y7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUNsQzs7Ozs7SUFLRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDcEU7Ozs7O0lBS0QsSUFBSTtRQUNGLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxD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LGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBekMrQixxQkFBcUI7WUFDL0IsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgRGF0ZVBpY2tlckhlYWRlckV2ZW50LCBEYXRlVGltZVBpY2tlclNlcnZpY2UgfSBmcm9tICcuLi9kYXRlLXRpbWUtcGlja2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEYXlWaWV3SXRlbSwgRGF5Vmlld1NlcnZpY2UgfSBmcm9tICcuL2RheS12aWV3LnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd1eC1kYXRlLXRpbWUtcGlja2VyLWRheS12aWV3JyxcclxuICB0ZW1wbGF0ZTogYDx0YWJsZSBjbGFzcz1cImNhbGVuZGFyXCI+XHJcbiAgICA8dGhlYWQ+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGggKm5nRm9yPVwibGV0IGRheSBvZiBkYXRlUGlja2VyLndlZWtkYXlzJCB8IGFzeW5jXCIgY2xhc3M9XCJ3ZWVrZGF5XCIgW2F0dHIuYXJpYS1sYWJlbF09XCJkYXlcIj57eyBkYXkgfX08L3RoPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICA8L3RoZWFkPlxyXG5cclxuICAgIDx0Ym9keSByb2xlPVwiZ3JpZFwiPlxyXG4gICAgICAgIDx0ciByb2xlPVwicm93XCIgKm5nRm9yPVwibGV0IHJvdyBvZiBkYXlTZXJ2aWNlLmdyaWQkIHwgYXN5bmM7IHRyYWNrQnk6IHRyYWNrV2Vla0J5Rm5cIj5cclxuXHJcbiAgICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgaXRlbSBvZiByb3c7IHRyYWNrQnk6IHRyYWNrRGF5QnlGblwiIGNsYXNzPVwiZGF0ZS1jZWxsXCIgcm9sZT1cImdyaWRjZWxsXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRhdGUtYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2ZvY3VzSWZdPVwiKGRheVNlcnZpY2UuZm9jdXNlZCQgfCBhc3luYyk/LmRheSA9PT0gaXRlbS5kYXkgJiYgKGRheVNlcnZpY2UuZm9jdXNlZCQgfCBhc3luYyk/Lm1vbnRoID09PSBpdGVtLm1vbnRoICYmIChkYXlTZXJ2aWNlLmZvY3VzZWQkIHwgYXN5bmMpPy55ZWFyID09PSBpdGVtLnllYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cIml0ZW0uZGF0ZSB8IGRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLXNlbGVjdGVkXT1cIml0ZW0uaXNBY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWhpZGRlbl09XCIhaXRlbS5pc0N1cnJlbnRNb250aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzcy5jdXJyZW50XT1cIml0ZW0uaXNUb2RheVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwiaXRlbS5pc0FjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzcy5wcmV2aWV3XT1cIiFpdGVtLmlzQ3VycmVudE1vbnRoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3RhYmluZGV4XT1cImdldFRhYmJhYmxlKGl0ZW0pID8gMCA6IC0xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdChpdGVtLmRhdGUpOyAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoa2V5ZG93bi5BcnJvd0xlZnQpPVwiZm9jdXNEYXRlKGl0ZW0sIC0xKTsgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoa2V5ZG93bi5BcnJvd1JpZ2h0KT1cImZvY3VzRGF0ZShpdGVtLCAxKTsgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoa2V5ZG93bi5BcnJvd1VwKT1cImZvY3VzRGF0ZShpdGVtLCAtNyk7ICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGtleWRvd24uQXJyb3dEb3duKT1cImZvY3VzRGF0ZShpdGVtLCA3KTsgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge3sgaXRlbS5kYXRlLmdldERhdGUoKSB9fVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICA8L3Rib2R5PlxyXG48L3RhYmxlPmAsXHJcbiAgcHJvdmlkZXJzOiBbRGF5Vmlld1NlcnZpY2VdLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXlWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuXHJcbiAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkYXRlUGlja2VyOiBEYXRlVGltZVBpY2tlclNlcnZpY2UsIHB1YmxpYyBkYXlTZXJ2aWNlOiBEYXlWaWV3U2VydmljZSkge1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uID0gZGF0ZVBpY2tlci5oZWFkZXJFdmVudCRcclxuICAgICAgLnN1YnNjcmliZShldmVudCA9PiBldmVudCA9PT0gRGF0ZVBpY2tlckhlYWRlckV2ZW50Lk5leHQgPyB0aGlzLm5leHQoKSA6IHRoaXMucHJldmlvdXMoKSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTmF2aWdhdGUgdG8gdGhlIHByZXZpb3VzIHBhZ2Ugb2YgZGF0ZXNcclxuICAgKi9cclxuICBwcmV2aW91cygpOiB2b2lkIHtcclxuICAgIHRoaXMuZGF0ZVBpY2tlci5zZXRWaWV3cG9ydE1vbnRoKHRoaXMuZGF0ZVBpY2tlci5tb250aCQudmFsdWUgLSAxKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE5hdmlnYXRlIHRvIHRoZSBuZXh0IHBhZ2Ugb2YgZGF0ZXNcclxuICAgKi9cclxuICBuZXh0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kYXRlUGlja2VyLnNldFZpZXdwb3J0TW9udGgodGhpcy5kYXRlUGlja2VyLm1vbnRoJC52YWx1ZSArIDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2VsZWN0IGEgcGFydGljdWxhciBkYXRlXHJcbiAgICogQHBhcmFtIGRhdGUgdGhlIGRhdGUgdG8gc2VsZWN0XHJcbiAgICovXHJcbiAgc2VsZWN0KGRhdGU6IERhdGUpOiB2b2lkIHtcclxuICAgIC8vIHVwZGF0ZSB0aGUgY3VycmVudCBkYXRlIG9iamVjdFxyXG4gICAgdGhpcy5kYXRlUGlja2VyLnNldERhdGUoZGF0ZS5nZXREYXRlKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXRGdWxsWWVhcigpKTtcclxuXHJcbiAgICAvLyBmb2N1cyB0aGUgbmV3bHkgc2VsZWN0ZWQgZGF0ZVxyXG4gICAgdGhpcy5kYXlTZXJ2aWNlLnNldEZvY3VzKGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RnVsbFllYXIoKSk7XHJcbiAgfVxyXG5cclxuICB0cmFja1dlZWtCeUZuKGluZGV4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGluZGV4O1xyXG4gIH1cclxuXHJcbiAgdHJhY2tEYXlCeUZuKGluZGV4OiBudW1iZXIsIGl0ZW06IERheVZpZXdJdGVtKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgJHsgaXRlbS5kYXkgfSAkeyBpdGVtLm1vbnRoIH0gJHsgaXRlbS55ZWFyIH1gO1xyXG4gIH1cclxuXHJcbiAgZm9jdXNEYXRlKGl0ZW06IERheVZpZXdJdGVtLCBkYXlPZmZzZXQ6IG51bWJlcik6IHZvaWQge1xyXG5cclxuICAgIC8vIGRldGVybWluZSB0aGUgZGF0ZSBvZiB0aGUgZGF5XHJcbiAgICBjb25zdCB0YXJnZXQgPSBuZXcgRGF0ZShpdGVtLmRhdGUuc2V0RGF0ZShpdGVtLmRhdGUuZ2V0RGF0ZSgpICsgZGF5T2Zmc2V0KSk7XHJcblxyXG4gICAgLy8gaWRlbnRpZnkgd2hpY2ggZGF0ZSBzaG91bGQgYmUgZm9jdXNlZFxyXG4gICAgdGhpcy5kYXlTZXJ2aWNlLnNldEZvY3VzKHRhcmdldC5nZXREYXRlKCksIHRhcmdldC5nZXRNb250aCgpLCB0YXJnZXQuZ2V0RnVsbFllYXIoKSk7XHJcbiAgfVxyXG5cclxuICBnZXRUYWJiYWJsZShpdGVtOiBEYXlWaWV3SXRlbSk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgZm9jdXNlZCA9IHRoaXMuZGF5U2VydmljZS5mb2N1c2VkJC52YWx1ZTtcclxuICAgIGNvbnN0IGdyaWQgPSB0aGlzLmRheVNlcnZpY2UuZ3JpZCQudmFsdWU7XHJcblxyXG4gICAgLy8gaWYgdGhlcmUgaXMgYSBmb2N1c2VkIG1vbnRoIGNoZWNrIGlmIHRoaXMgaXMgaXRcclxuICAgIGlmIChmb2N1c2VkKSB7XHJcblxyXG4gICAgICAvLyBjaGVjayBpZiB0aGUgZm9jdXNlZCBkYXkgaXMgdmlzaWJsZVxyXG4gICAgICBjb25zdCBpc0ZvY3VzZWREYXlWaXNpYmxlID0gISFncmlkLmZpbmQocm93ID0+ICEhcm93LmZpbmQoX2l0ZW0gPT4gX2l0ZW0uZGF5ID09PSBmb2N1c2VkLmRheSAmJiBfaXRlbS5tb250aCA9PT0gZm9jdXNlZC5tb250aCAmJiBfaXRlbS55ZWFyID09PSBmb2N1c2VkLnllYXIpKTtcclxuXHJcbiAgICAgIGlmIChpc0ZvY3VzZWREYXlWaXNpYmxlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZvY3VzZWQuZGF5ID09PSBpdGVtLmRheSAmJiBmb2N1c2VkLm1vbnRoID09PSBpdGVtLm1vbnRoICYmIGZvY3VzZWQueWVhciA9PT0gaXRlbS55ZWFyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaWYgdGhlcmUgaXMgbm8gZm9jdXNhYmxlIGRheSB0aGVuIGNoZWNrIGlmIHRoZXJlIGlzIGEgc2VsZWN0ZWQgZGF5XHJcbiAgICBjb25zdCBpc1NlbGVjdGVkRGF5VmlzaWJsZSA9ICEhZ3JpZC5maW5kKHJvdyA9PiAhIXJvdy5maW5kKGRheSA9PiBkYXkuaXNBY3RpdmUpKTtcclxuXHJcbiAgICBpZiAoaXNTZWxlY3RlZERheVZpc2libGUpIHtcclxuICAgICAgICByZXR1cm4gaXRlbS5pc0FjdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBvdGhlcndpc2UgbWFrZSB0aGUgZmlyc3QgZGF5IHRhYmJhYmxlXHJcbiAgICByZXR1cm4gaXRlbS5kYXkgPT09IDE7XHJcbiAgfVxyXG5cclxufSJdfQ==