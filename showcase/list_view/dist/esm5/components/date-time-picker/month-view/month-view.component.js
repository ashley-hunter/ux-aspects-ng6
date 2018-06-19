/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DatePickerHeaderEvent, DateTimePickerService } from '../date-time-picker.service';
import { MonthViewService } from './month-view.service';
var MonthViewComponent = /** @class */ (function () {
    function MonthViewComponent(_datePicker, monthService) {
        var _this = this;
        this._datePicker = _datePicker;
        this.monthService = monthService;
        this._subscription = _datePicker.headerEvent$
            .subscribe(function (event) { return event === DatePickerHeaderEvent.Next ? _this.next() : _this.previous(); });
    }
    /**
     * @return {?}
     */
    MonthViewComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscription.unsubscribe();
    };
    /**
     * Go to the previous year
     */
    /**
     * Go to the previous year
     * @return {?}
     */
    MonthViewComponent.prototype.previous = /**
     * Go to the previous year
     * @return {?}
     */
    function () {
        this._datePicker.setViewportYear(this._datePicker.year$.value - 1);
    };
    /**
     * Go to the next year
     */
    /**
     * Go to the next year
     * @return {?}
     */
    MonthViewComponent.prototype.next = /**
     * Go to the next year
     * @return {?}
     */
    function () {
        this._datePicker.setViewportYear(this._datePicker.year$.value + 1);
    };
    /**
     * Select a month in the calendar
     * @param month the index of the month to select
     */
    /**
     * Select a month in the calendar
     * @param {?} month the index of the month to select
     * @return {?}
     */
    MonthViewComponent.prototype.select = /**
     * Select a month in the calendar
     * @param {?} month the index of the month to select
     * @return {?}
     */
    function (month) {
        this._datePicker.setViewportMonth(month);
        // show the day picker
        this._datePicker.goToChildMode();
    };
    /**
     * @param {?} item
     * @param {?} monthOffset
     * @return {?}
     */
    MonthViewComponent.prototype.focusMonth = /**
     * @param {?} item
     * @param {?} monthOffset
     * @return {?}
     */
    function (item, monthOffset) {
        var /** @type {?} */ targetMonth = item.month + monthOffset;
        var /** @type {?} */ targetYear = item.year;
        if (targetMonth < 0) {
            targetMonth += 12;
            targetYear -= 1;
        }
        if (targetMonth >= 12) {
            targetMonth -= 12;
            targetYear += 1;
        }
        this.monthService.setFocus(targetMonth, targetYear);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    MonthViewComponent.prototype.trackRowByFn = /**
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
    MonthViewComponent.prototype.trackMonthByFn = /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    function (index, item) {
        return item.month + " " + item.year;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    MonthViewComponent.prototype.getTabbable = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var /** @type {?} */ focused = this.monthService.focused$.value;
        var /** @type {?} */ grid = this.monthService.grid$.value;
        // if there is a focused month check if this is it
        if (focused) {
            // check if the focused month is visible
            var /** @type {?} */ isFocusedMonthVisible = !!grid.find(function (row) { return !!row.find(function (_item) { return _item.month === focused.month && _item.year === focused.year; }); });
            if (isFocusedMonthVisible) {
                return focused.month === item.month && focused.year === item.year;
            }
        }
        // if there is no focusable month then check if there is a selected month
        var /** @type {?} */ isSelectedMonthVisible = !!grid.find(function (row) { return !!row.find(function (month) { return month.isActiveMonth; }); });
        if (isSelectedMonthVisible) {
            return item.isActiveMonth;
        }
        // otherwise make the first month tabbable
        return item.month === 0;
    };
    MonthViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-date-time-picker-month-view',
                    template: "<div class=\"calendar\" role=\"grid\">\n  <div class=\"calendar-row\" *ngFor=\"let row of monthService.grid$ | async; trackBy: trackRowByFn\" role=\"row\">\n\n    <button role=\"gridcell\"\n         class=\"calendar-item\"\n         *ngFor=\"let item of row; trackBy: trackMonthByFn\"\n         [focusIf]=\"(monthService.focused$ | async)?.month === item.month && (monthService.focused$ | async)?.year === item.year\"\n         [tabindex]=\"getTabbable(item) ? 0 : -1\"\n         [attr.aria-label]=\"item.name + ' ' + item.year\"\n         [attr.aria-selected]=\"item.isActiveMonth\"\n         [class.active]=\"item.isActiveMonth\"\n         [class.current]=\"item.isCurrentMonth\"\n         (click)=\"select(item.month); $event.stopPropagation()\"\n         (keydown.ArrowLeft)=\"focusMonth(item, -1); $event.preventDefault()\"\n         (keydown.ArrowRight)=\"focusMonth(item, 1); $event.preventDefault()\"\n         (keydown.ArrowUp)=\"focusMonth(item, -4); $event.preventDefault()\"\n         (keydown.ArrowDown)=\"focusMonth(item, 4); $event.preventDefault()\">\n         {{ item.name }}\n    </button>\n  </div>\n</div>\n",
                    providers: [MonthViewService],
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    MonthViewComponent.ctorParameters = function () { return [
        { type: DateTimePickerService, },
        { type: MonthViewService, },
    ]; };
    return MonthViewComponent;
}());
export { MonthViewComponent };
function MonthViewComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MonthViewComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MonthViewComponent.ctorParameters;
    /** @type {?} */
    MonthViewComponent.prototype._subscription;
    /** @type {?} */
    MonthViewComponent.prototype._datePicker;
    /** @type {?} */
    MonthViewComponent.prototype.monthService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9kYXRlLXRpbWUtcGlja2VyL21vbnRoLXZpZXcvbW9udGgtdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFOUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDM0YsT0FBTyxFQUFpQixnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztJQWlDbkUsNEJBQW9CLFdBQWtDLEVBQVMsWUFBOEI7UUFBN0YsaUJBR0M7UUFIbUIsZ0JBQVcsR0FBWCxXQUFXLENBQXVCO1FBQVMsaUJBQVksR0FBWixZQUFZLENBQWtCO1FBQ3pGLElBQUksQ0FBQyxhQUFhLEdBQUcsV0FBVyxDQUFDLFlBQVk7YUFDeEMsU0FBUyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxLQUFLLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsUUFBUSxFQUFFLEVBQXBFLENBQW9FLENBQUMsQ0FBQztLQUNqRzs7OztJQUVELHdDQUFXOzs7SUFBWDtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDcEM7SUFFRDs7T0FFRzs7Ozs7SUFDSCxxQ0FBUTs7OztJQUFSO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ3RFO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsaUNBQUk7Ozs7SUFBSjtRQUNJLElBQUksQ0FBQyxXQUFX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QVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO29CQUM3QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDbEQ7Ozs7Z0JBN0IrQixxQkFBcUI7Z0JBQzdCLGdCQUFnQjs7NkJBSHhDOztTQWdDYSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IERhdGVQaWNrZXJIZWFkZXJFdmVudCwgRGF0ZVRpbWVQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0ZS10aW1lLXBpY2tlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTW9udGhWaWV3SXRlbSwgTW9udGhWaWV3U2VydmljZSB9IGZyb20gJy4vbW9udGgtdmlldy5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd1eC1kYXRlLXRpbWUtcGlja2VyLW1vbnRoLXZpZXcnLFxyXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiY2FsZW5kYXJcIiByb2xlPVwiZ3JpZFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJjYWxlbmRhci1yb3dcIiAqbmdGb3I9XCJsZXQgcm93IG9mIG1vbnRoU2VydmljZS5ncmlkJCB8IGFzeW5jOyB0cmFja0J5OiB0cmFja1Jvd0J5Rm5cIiByb2xlPVwicm93XCI+XHJcblxyXG4gICAgPGJ1dHRvbiByb2xlPVwiZ3JpZGNlbGxcIlxyXG4gICAgICAgICBjbGFzcz1cImNhbGVuZGFyLWl0ZW1cIlxyXG4gICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiByb3c7IHRyYWNrQnk6IHRyYWNrTW9udGhCeUZuXCJcclxuICAgICAgICAgW2ZvY3VzSWZdPVwiKG1vbnRoU2VydmljZS5mb2N1c2VkJCB8IGFzeW5jKT8ubW9udGggPT09IGl0ZW0ubW9udGggJiYgKG1vbnRoU2VydmljZS5mb2N1c2VkJCB8IGFzeW5jKT8ueWVhciA9PT0gaXRlbS55ZWFyXCJcclxuICAgICAgICAgW3RhYmluZGV4XT1cImdldFRhYmJhYmxlKGl0ZW0pID8gMCA6IC0xXCJcclxuICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJpdGVtLm5hbWUgKyAnICcgKyBpdGVtLnllYXJcIlxyXG4gICAgICAgICBbYXR0ci5hcmlhLXNlbGVjdGVkXT1cIml0ZW0uaXNBY3RpdmVNb250aFwiXHJcbiAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwiaXRlbS5pc0FjdGl2ZU1vbnRoXCJcclxuICAgICAgICAgW2NsYXNzLmN1cnJlbnRdPVwiaXRlbS5pc0N1cnJlbnRNb250aFwiXHJcbiAgICAgICAgIChjbGljayk9XCJzZWxlY3QoaXRlbS5tb250aCk7ICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiXHJcbiAgICAgICAgIChrZXlkb3duLkFycm93TGVmdCk9XCJmb2N1c01vbnRoKGl0ZW0sIC0xKTsgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIlxyXG4gICAgICAgICAoa2V5ZG93bi5BcnJvd1JpZ2h0KT1cImZvY3VzTW9udGgoaXRlbSwgMSk7ICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCJcclxuICAgICAgICAgKGtleWRvd24uQXJyb3dVcCk9XCJmb2N1c01vbnRoKGl0ZW0sIC00KTsgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIlxyXG4gICAgICAgICAoa2V5ZG93bi5BcnJvd0Rvd24pPVwiZm9jdXNNb250aChpdGVtLCA0KTsgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIj5cclxuICAgICAgICAge3sgaXRlbS5uYW1lIH19XHJcbiAgICA8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbmAsXHJcbiAgICBwcm92aWRlcnM6IFtNb250aFZpZXdTZXJ2aWNlXSxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNb250aFZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG5cclxuICAgIHByaXZhdGUgX3N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RhdGVQaWNrZXI6IERhdGVUaW1lUGlja2VyU2VydmljZSwgcHVibGljIG1vbnRoU2VydmljZTogTW9udGhWaWV3U2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IF9kYXRlUGlja2VyLmhlYWRlckV2ZW50JFxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGV2ZW50ID0+IGV2ZW50ID09PSBEYXRlUGlja2VySGVhZGVyRXZlbnQuTmV4dCA/IHRoaXMubmV4dCgpIDogdGhpcy5wcmV2aW91cygpKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdvIHRvIHRoZSBwcmV2aW91cyB5ZWFyXHJcbiAgICAgKi9cclxuICAgIHByZXZpb3VzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2RhdGVQaWNrZXIuc2V0Vmlld3BvcnRZZWFyKHRoaXMuX2RhdGVQaWNrZXIueWVhciQudmFsdWUgLSAxKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdvIHRvIHRoZSBuZXh0IHllYXJcclxuICAgICAqL1xyXG4gICAgbmV4dCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9kYXRlUGlja2VyLnNldFZpZXdwb3J0WWVhcih0aGlzLl9kYXRlUGlja2VyLnllYXIkLnZhbHVlICsgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZWxlY3QgYSBtb250aCBpbiB0aGUgY2FsZW5kYXJcclxuICAgICAqIEBwYXJhbSBtb250aCB0aGUgaW5kZXggb2YgdGhlIG1vbnRoIHRvIHNlbGVjdFxyXG4gICAgICovXHJcbiAgICBzZWxlY3QobW9udGg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2RhdGVQaWNrZXIuc2V0Vmlld3BvcnRNb250aChtb250aCk7XHJcblxyXG4gICAgICAgIC8vIHNob3cgdGhlIGRheSBwaWNrZXJcclxuICAgICAgICB0aGlzLl9kYXRlUGlja2VyLmdvVG9DaGlsZE1vZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBmb2N1c01vbnRoKGl0ZW06IE1vbnRoVmlld0l0ZW0sIG1vbnRoT2Zmc2V0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBsZXQgdGFyZ2V0TW9udGggPSBpdGVtLm1vbnRoICsgbW9udGhPZmZzZXQ7XHJcbiAgICAgICAgbGV0IHRhcmdldFllYXIgPSBpdGVtLnllYXI7XHJcblxyXG4gICAgICAgIGlmICh0YXJnZXRNb250aCA8IDApIHtcclxuICAgICAgICAgICAgdGFyZ2V0TW9udGggKz0gMTI7XHJcbiAgICAgICAgICAgIHRhcmdldFllYXIgLT0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0YXJnZXRNb250aCA+PSAxMikge1xyXG4gICAgICAgICAgICB0YXJnZXRNb250aCAtPSAxMjtcclxuICAgICAgICAgICAgdGFyZ2V0WWVhciArPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5tb250aFNlcnZpY2Uuc2V0Rm9jdXModGFyZ2V0TW9udGgsIHRhcmdldFllYXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRyYWNrUm93QnlGbihpbmRleDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gaW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgdHJhY2tNb250aEJ5Rm4oaW5kZXg6IG51bWJlciwgaXRlbTogTW9udGhWaWV3SXRlbSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGAke2l0ZW0ubW9udGh9ICR7aXRlbS55ZWFyfWA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGFiYmFibGUoaXRlbTogTW9udGhWaWV3SXRlbSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGZvY3VzZWQgPSB0aGlzLm1vbnRoU2VydmljZS5mb2N1c2VkJC52YWx1ZTtcclxuICAgICAgICBjb25zdCBncmlkID0gdGhpcy5tb250aFNlcnZpY2UuZ3JpZCQudmFsdWU7XHJcblxyXG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIGEgZm9jdXNlZCBtb250aCBjaGVjayBpZiB0aGlzIGlzIGl0XHJcbiAgICAgICAgaWYgKGZvY3VzZWQpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBmb2N1c2VkIG1vbnRoIGlzIHZpc2libGVcclxuICAgICAgICAgICAgY29uc3QgaXNGb2N1c2VkTW9udGhWaXNpYmxlID0gISFncmlkLmZpbmQocm93ID0+ICEhcm93LmZpbmQoX2l0ZW0gPT4gX2l0ZW0ubW9udGggPT09IGZvY3VzZWQubW9udGggJiYgX2l0ZW0ueWVhciA9PT0gZm9jdXNlZC55ZWFyKSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoaXNGb2N1c2VkTW9udGhWaXNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9jdXNlZC5tb250aCA9PT0gaXRlbS5tb250aCAmJiBmb2N1c2VkLnllYXIgPT09IGl0ZW0ueWVhcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgbm8gZm9jdXNhYmxlIG1vbnRoIHRoZW4gY2hlY2sgaWYgdGhlcmUgaXMgYSBzZWxlY3RlZCBtb250aFxyXG4gICAgICAgIGNvbnN0IGlzU2VsZWN0ZWRNb250aFZpc2libGUgPSAhIWdyaWQuZmluZChyb3cgPT4gISFyb3cuZmluZChtb250aCA9PiBtb250aC5pc0FjdGl2ZU1vbnRoKSk7XHJcblxyXG4gICAgICAgIGlmIChpc1NlbGVjdGVkTW9udGhWaXNpYmxlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmlzQWN0aXZlTW9udGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBvdGhlcndpc2UgbWFrZSB0aGUgZmlyc3QgbW9udGggdGFiYmFibGVcclxuICAgICAgICByZXR1cm4gaXRlbS5tb250aCA9PT0gMDtcclxuICAgIH1cclxufSJdfQ==