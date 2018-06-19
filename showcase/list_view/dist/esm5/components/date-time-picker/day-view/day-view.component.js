/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DatePickerHeaderEvent, DateTimePickerService } from '../date-time-picker.service';
import { DayViewService } from './day-view.service';
var DayViewComponent = /** @class */ (function () {
    function DayViewComponent(datePicker, dayService) {
        var _this = this;
        this.datePicker = datePicker;
        this.dayService = dayService;
        this._subscription = datePicker.headerEvent$
            .subscribe(function (event) { return event === DatePickerHeaderEvent.Next ? _this.next() : _this.previous(); });
    }
    /**
     * @return {?}
     */
    DayViewComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscription.unsubscribe();
    };
    /**
     * Navigate to the previous page of dates
     */
    /**
     * Navigate to the previous page of dates
     * @return {?}
     */
    DayViewComponent.prototype.previous = /**
     * Navigate to the previous page of dates
     * @return {?}
     */
    function () {
        this.datePicker.setViewportMonth(this.datePicker.month$.value - 1);
    };
    /**
     * Navigate to the next page of dates
     */
    /**
     * Navigate to the next page of dates
     * @return {?}
     */
    DayViewComponent.prototype.next = /**
     * Navigate to the next page of dates
     * @return {?}
     */
    function () {
        this.datePicker.setViewportMonth(this.datePicker.month$.value + 1);
    };
    /**
     * Select a particular date
     * @param date the date to select
     */
    /**
     * Select a particular date
     * @param {?} date the date to select
     * @return {?}
     */
    DayViewComponent.prototype.select = /**
     * Select a particular date
     * @param {?} date the date to select
     * @return {?}
     */
    function (date) {
        // update the current date object
        this.datePicker.setDate(date.getDate(), date.getMonth(), date.getFullYear());
        // focus the newly selected date
        this.dayService.setFocus(date.getDate(), date.getMonth(), date.getFullYear());
    };
    /**
     * @param {?} index
     * @return {?}
     */
    DayViewComponent.prototype.trackWeekByFn = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return index;
    };
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    DayViewComponent.prototype.trackDayByFn = /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    function (index, item) {
        return item.day + " " + item.month + " " + item.year;
    };
    /**
     * @param {?} item
     * @param {?} dayOffset
     * @return {?}
     */
    DayViewComponent.prototype.focusDate = /**
     * @param {?} item
     * @param {?} dayOffset
     * @return {?}
     */
    function (item, dayOffset) {
        // determine the date of the day
        var /** @type {?} */ target = new Date(item.date.setDate(item.date.getDate() + dayOffset));
        // identify which date should be focused
        this.dayService.setFocus(target.getDate(), target.getMonth(), target.getFullYear());
    };
    /**
     * @param {?} item
     * @return {?}
     */
    DayViewComponent.prototype.getTabbable = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var /** @type {?} */ focused = this.dayService.focused$.value;
        var /** @type {?} */ grid = this.dayService.grid$.value;
        // if there is a focused month check if this is it
        if (focused) {
            // check if the focused day is visible
            var /** @type {?} */ isFocusedDayVisible = !!grid.find(function (row) { return !!row.find(function (_item) { return _item.day === focused.day && _item.month === focused.month && _item.year === focused.year; }); });
            if (isFocusedDayVisible) {
                return focused.day === item.day && focused.month === item.month && focused.year === item.year;
            }
        }
        // if there is no focusable day then check if there is a selected day
        var /** @type {?} */ isSelectedDayVisible = !!grid.find(function (row) { return !!row.find(function (day) { return day.isActive; }); });
        if (isSelectedDayVisible) {
            return item.isActive;
        }
        // otherwise make the first day tabbable
        return item.day === 1;
    };
    DayViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-date-time-picker-day-view',
                    template: "<table class=\"calendar\">\n    <thead>\n        <tr>\n            <th *ngFor=\"let day of datePicker.weekdays$ | async\" class=\"weekday\" [attr.aria-label]=\"day\">{{ day }}</th>\n        </tr>\n    </thead>\n\n    <tbody role=\"grid\">\n        <tr role=\"row\" *ngFor=\"let row of dayService.grid$ | async; trackBy: trackWeekByFn\">\n\n            <td *ngFor=\"let item of row; trackBy: trackDayByFn\" class=\"date-cell\" role=\"gridcell\">\n\n                <button class=\"date-button\"\n                        [focusIf]=\"(dayService.focused$ | async)?.day === item.day && (dayService.focused$ | async)?.month === item.month && (dayService.focused$ | async)?.year === item.year\"\n                        [attr.aria-label]=\"item.date | date\"\n                        [attr.aria-selected]=\"item.isActive\"\n                        [attr.aria-hidden]=\"!item.isCurrentMonth\"\n                        [class.current]=\"item.isToday\"\n                        [class.active]=\"item.isActive\"\n                        [class.preview]=\"!item.isCurrentMonth\"\n                        [tabindex]=\"getTabbable(item) ? 0 : -1\"\n                        (click)=\"select(item.date); $event.stopPropagation()\"\n                        (keydown.ArrowLeft)=\"focusDate(item, -1); $event.preventDefault()\"\n                        (keydown.ArrowRight)=\"focusDate(item, 1); $event.preventDefault()\"\n                        (keydown.ArrowUp)=\"focusDate(item, -7); $event.preventDefault()\"\n                        (keydown.ArrowDown)=\"focusDate(item, 7); $event.preventDefault()\">\n\n                    {{ item.date.getDate() }}\n                </button>\n\n            </td>\n        </tr>\n    </tbody>\n</table>",
                    providers: [DayViewService],
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    DayViewComponent.ctorParameters = function () { return [
        { type: DateTimePickerService, },
        { type: DayViewService, },
    ]; };
    return DayViewComponent;
}());
export { DayViewComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5LXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGF0ZS10aW1lLXBpY2tlci9kYXktdmlldy9kYXktdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFOUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDM0YsT0FBTyxFQUFlLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztJQTZDL0QsMEJBQW1CLFVBQWlDLEVBQVMsVUFBMEI7UUFBdkYsaUJBR0M7UUFIa0IsZUFBVSxHQUFWLFVBQVUsQ0FBdUI7UUFBUyxlQUFVLEdBQVYsVUFBVSxDQUFnQjtRQUNyRixJQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQyxZQUFZO2FBQ3pDLFNBQVMsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssS0FBSyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBRSxFQUFwRSxDQUFvRSxDQUFDLENBQUM7S0FDN0Y7Ozs7SUFFRCxzQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ2xDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsbUNBQVE7Ozs7SUFBUjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ3BFO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsK0JBQUk7Ozs7SUFBSjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JB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RyxLQUFLLENBQUMsQ0FBQztLQUN2Qjs7Z0JBdkhGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsOEJBQThCO29CQUN4QyxRQUFRLEVBQUUsK3JEQWlDSDtvQkFDUCxTQUFTLEVBQUUsQ0FBQyxjQUFjLENBQUM7b0JBQzNCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkF6QytCLHFCQUFxQjtnQkFDL0IsY0FBYzs7MkJBSHBDOztTQTRDYSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IERhdGVQaWNrZXJIZWFkZXJFdmVudCwgRGF0ZVRpbWVQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0ZS10aW1lLXBpY2tlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGF5Vmlld0l0ZW0sIERheVZpZXdTZXJ2aWNlIH0gZnJvbSAnLi9kYXktdmlldy5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndXgtZGF0ZS10aW1lLXBpY2tlci1kYXktdmlldycsXHJcbiAgdGVtcGxhdGU6IGA8dGFibGUgY2xhc3M9XCJjYWxlbmRhclwiPlxyXG4gICAgPHRoZWFkPlxyXG4gICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoICpuZ0Zvcj1cImxldCBkYXkgb2YgZGF0ZVBpY2tlci53ZWVrZGF5cyQgfCBhc3luY1wiIGNsYXNzPVwid2Vla2RheVwiIFthdHRyLmFyaWEtbGFiZWxdPVwiZGF5XCI+e3sgZGF5IH19PC90aD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgPC90aGVhZD5cclxuXHJcbiAgICA8dGJvZHkgcm9sZT1cImdyaWRcIj5cclxuICAgICAgICA8dHIgcm9sZT1cInJvd1wiICpuZ0Zvcj1cImxldCByb3cgb2YgZGF5U2VydmljZS5ncmlkJCB8IGFzeW5jOyB0cmFja0J5OiB0cmFja1dlZWtCeUZuXCI+XHJcblxyXG4gICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygcm93OyB0cmFja0J5OiB0cmFja0RheUJ5Rm5cIiBjbGFzcz1cImRhdGUtY2VsbFwiIHJvbGU9XCJncmlkY2VsbFwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkYXRlLWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtmb2N1c0lmXT1cIihkYXlTZXJ2aWNlLmZvY3VzZWQkIHwgYXN5bmMpPy5kYXkgPT09IGl0ZW0uZGF5ICYmIChkYXlTZXJ2aWNlLmZvY3VzZWQkIHwgYXN5bmMpPy5tb250aCA9PT0gaXRlbS5tb250aCAmJiAoZGF5U2VydmljZS5mb2N1c2VkJCB8IGFzeW5jKT8ueWVhciA9PT0gaXRlbS55ZWFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJpdGVtLmRhdGUgfCBkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1zZWxlY3RlZF09XCJpdGVtLmlzQWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1oaWRkZW5dPVwiIWl0ZW0uaXNDdXJyZW50TW9udGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3MuY3VycmVudF09XCJpdGVtLmlzVG9kYXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cIml0ZW0uaXNBY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3MucHJldmlld109XCIhaXRlbS5pc0N1cnJlbnRNb250aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt0YWJpbmRleF09XCJnZXRUYWJiYWJsZShpdGVtKSA/IDAgOiAtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3QoaXRlbS5kYXRlKTsgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGtleWRvd24uQXJyb3dMZWZ0KT1cImZvY3VzRGF0ZShpdGVtLCAtMSk7ICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGtleWRvd24uQXJyb3dSaWdodCk9XCJmb2N1c0RhdGUoaXRlbSwgMSk7ICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGtleWRvd24uQXJyb3dVcCk9XCJmb2N1c0RhdGUoaXRlbSwgLTcpOyAkZXZlbnQucHJldmVudERlZmF1bHQoKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChrZXlkb3duLkFycm93RG93bik9XCJmb2N1c0RhdGUoaXRlbSwgNyk7ICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHt7IGl0ZW0uZGF0ZS5nZXREYXRlKCkgfX1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgPC90Ym9keT5cclxuPC90YWJsZT5gLFxyXG4gIHByb3ZpZGVyczogW0RheVZpZXdTZXJ2aWNlXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF5Vmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcblxyXG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGF0ZVBpY2tlcjogRGF0ZVRpbWVQaWNrZXJTZXJ2aWNlLCBwdWJsaWMgZGF5U2VydmljZTogRGF5Vmlld1NlcnZpY2UpIHtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IGRhdGVQaWNrZXIuaGVhZGVyRXZlbnQkXHJcbiAgICAgIC5zdWJzY3JpYmUoZXZlbnQgPT4gZXZlbnQgPT09IERhdGVQaWNrZXJIZWFkZXJFdmVudC5OZXh0ID8gdGhpcy5uZXh0KCkgOiB0aGlzLnByZXZpb3VzKCkpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE5hdmlnYXRlIHRvIHRoZSBwcmV2aW91cyBwYWdlIG9mIGRhdGVzXHJcbiAgICovXHJcbiAgcHJldmlvdXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRhdGVQaWNrZXIuc2V0Vmlld3BvcnRNb250aCh0aGlzLmRhdGVQaWNrZXIubW9udGgkLnZhbHVlIC0gMSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBOYXZpZ2F0ZSB0byB0aGUgbmV4dCBwYWdlIG9mIGRhdGVzXHJcbiAgICovXHJcbiAgbmV4dCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGF0ZVBpY2tlci5zZXRWaWV3cG9ydE1vbnRoKHRoaXMuZGF0ZVBpY2tlci5tb250aCQudmFsdWUgKyAxKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlbGVjdCBhIHBhcnRpY3VsYXIgZGF0ZVxyXG4gICAqIEBwYXJhbSBkYXRlIHRoZSBkYXRlIHRvIHNlbGVjdFxyXG4gICAqL1xyXG4gIHNlbGVjdChkYXRlOiBEYXRlKTogdm9pZCB7XHJcbiAgICAvLyB1cGRhdGUgdGhlIGN1cnJlbnQgZGF0ZSBvYmplY3RcclxuICAgIHRoaXMuZGF0ZVBpY2tlci5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RnVsbFllYXIoKSk7XHJcblxyXG4gICAgLy8gZm9jdXMgdGhlIG5ld2x5IHNlbGVjdGVkIGRhdGVcclxuICAgIHRoaXMuZGF5U2VydmljZS5zZXRGb2N1cyhkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldEZ1bGxZZWFyKCkpO1xyXG4gIH1cclxuXHJcbiAgdHJhY2tXZWVrQnlGbihpbmRleDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBpbmRleDtcclxuICB9XHJcblxyXG4gIHRyYWNrRGF5QnlGbihpbmRleDogbnVtYmVyLCBpdGVtOiBEYXlWaWV3SXRlbSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYCR7IGl0ZW0uZGF5IH0gJHsgaXRlbS5tb250aCB9ICR7IGl0ZW0ueWVhciB9YDtcclxuICB9XHJcblxyXG4gIGZvY3VzRGF0ZShpdGVtOiBEYXlWaWV3SXRlbSwgZGF5T2Zmc2V0OiBudW1iZXIpOiB2b2lkIHtcclxuXHJcbiAgICAvLyBkZXRlcm1pbmUgdGhlIGRhdGUgb2YgdGhlIGRheVxyXG4gICAgY29uc3QgdGFyZ2V0ID0gbmV3IERhdGUoaXRlbS5kYXRlLnNldERhdGUoaXRlbS5kYXRlLmdldERhdGUoKSArIGRheU9mZnNldCkpO1xyXG5cclxuICAgIC8vIGlkZW50aWZ5IHdoaWNoIGRhdGUgc2hvdWxkIGJlIGZvY3VzZWRcclxuICAgIHRoaXMuZGF5U2VydmljZS5zZXRGb2N1cyh0YXJnZXQuZ2V0RGF0ZSgpLCB0YXJnZXQuZ2V0TW9udGgoKSwgdGFyZ2V0LmdldEZ1bGxZZWFyKCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGFiYmFibGUoaXRlbTogRGF5Vmlld0l0ZW0pOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGZvY3VzZWQgPSB0aGlzLmRheVNlcnZpY2UuZm9jdXNlZCQudmFsdWU7XHJcbiAgICBjb25zdCBncmlkID0gdGhpcy5kYXlTZXJ2aWNlLmdyaWQkLnZhbHVlO1xyXG5cclxuICAgIC8vIGlmIHRoZXJlIGlzIGEgZm9jdXNlZCBtb250aCBjaGVjayBpZiB0aGlzIGlzIGl0XHJcbiAgICBpZiAoZm9jdXNlZCkge1xyXG5cclxuICAgICAgLy8gY2hlY2sgaWYgdGhlIGZvY3VzZWQgZGF5IGlzIHZpc2libGVcclxuICAgICAgY29uc3QgaXNGb2N1c2VkRGF5VmlzaWJsZSA9ICEhZ3JpZC5maW5kKHJvdyA9PiAhIXJvdy5maW5kKF9pdGVtID0+IF9pdGVtLmRheSA9PT0gZm9jdXNlZC5kYXkgJiYgX2l0ZW0ubW9udGggPT09IGZvY3VzZWQubW9udGggJiYgX2l0ZW0ueWVhciA9PT0gZm9jdXNlZC55ZWFyKSk7XHJcblxyXG4gICAgICBpZiAoaXNGb2N1c2VkRGF5VmlzaWJsZSkge1xyXG4gICAgICAgIHJldHVybiBmb2N1c2VkLmRheSA9PT0gaXRlbS5kYXkgJiYgZm9jdXNlZC5tb250aCA9PT0gaXRlbS5tb250aCAmJiBmb2N1c2VkLnllYXIgPT09IGl0ZW0ueWVhcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGlmIHRoZXJlIGlzIG5vIGZvY3VzYWJsZSBkYXkgdGhlbiBjaGVjayBpZiB0aGVyZSBpcyBhIHNlbGVjdGVkIGRheVxyXG4gICAgY29uc3QgaXNTZWxlY3RlZERheVZpc2libGUgPSAhIWdyaWQuZmluZChyb3cgPT4gISFyb3cuZmluZChkYXkgPT4gZGF5LmlzQWN0aXZlKSk7XHJcblxyXG4gICAgaWYgKGlzU2VsZWN0ZWREYXlWaXNpYmxlKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0uaXNBY3RpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gb3RoZXJ3aXNlIG1ha2UgdGhlIGZpcnN0IGRheSB0YWJiYWJsZVxyXG4gICAgcmV0dXJuIGl0ZW0uZGF5ID09PSAxO1xyXG4gIH1cclxuXHJcbn0iXX0=