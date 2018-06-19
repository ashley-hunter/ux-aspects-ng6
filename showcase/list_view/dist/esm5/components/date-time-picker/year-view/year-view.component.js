/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DateTimePickerService } from '../date-time-picker.service';
import { YearViewService } from './year-view.service';
var YearViewComponent = /** @class */ (function () {
    function YearViewComponent(_datePicker, yearService) {
        this._datePicker = _datePicker;
        this.yearService = yearService;
    }
    /**
     * @param {?} year
     * @return {?}
     */
    YearViewComponent.prototype.select = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        this._datePicker.setViewportYear(year);
        // show the month picker
        this._datePicker.goToChildMode();
    };
    /**
     * @param {?} item
     * @param {?} yearOffset
     * @return {?}
     */
    YearViewComponent.prototype.focusYear = /**
     * @param {?} item
     * @param {?} yearOffset
     * @return {?}
     */
    function (item, yearOffset) {
        this.yearService.setFocus(item.year + yearOffset);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    YearViewComponent.prototype.trackRowByFn = /**
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
    YearViewComponent.prototype.trackYearByFn = /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    function (index, item) {
        return item.year;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    YearViewComponent.prototype.getTabbable = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var /** @type {?} */ focused = this.yearService.focused$.value;
        var /** @type {?} */ grid = this.yearService.grid$.value;
        // if there is a focused year check if this is it
        if (focused) {
            // check if the focused year is visible
            var /** @type {?} */ isFocusedYearVisible = !!grid.find(function (row) { return !!row.find(function (_item) { return _item.year === focused; }); });
            if (isFocusedYearVisible) {
                return focused === item.year;
            }
        }
        // if there is no focusable year then check if there is a selected year
        var /** @type {?} */ isSelectedYearVisible = !!grid.find(function (row) { return !!row.find(function (year) { return year.isActiveYear; }); });
        if (isSelectedYearVisible) {
            return item.isActiveYear;
        }
        // otherwise make the first month tabbable
        return grid[0][0].year === item.year;
    };
    YearViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-date-time-picker-year-view',
                    template: "<div class=\"calendar\" role=\"grid\">\n  <div class=\"calendar-row\" role=\"row\" *ngFor=\"let row of yearService.grid$ | async; trackBy: trackRowByFn\">\n\n    <button *ngFor=\"let item of row; trackBy: trackYearByFn\"\n         role=\"gridcell\"\n         class=\"calendar-item\"\n         [focusIf]=\"(yearService.focused$ | async) === item.year\"\n         [attr.aria-label]=\"item.year\"\n         [attr.aria-selected]=\"item.isActiveYear\"\n         [class.current]=\"item.isCurrentYear\"\n         [class.active]=\"item.isActiveYear\"\n         (click)=\"select(item.year); $event.stopPropagation()\"\n         (keydown.ArrowLeft)=\"focusYear(item, -1); $event.preventDefault()\"\n         (keydown.ArrowRight)=\"focusYear(item, 1); $event.preventDefault()\"\n         (keydown.ArrowUp)=\"focusYear(item, -4); $event.preventDefault()\"\n         (keydown.ArrowDown)=\"focusYear(item, 4); $event.preventDefault()\"\n         [tabindex]=\"getTabbable(item) ? 0 : -1\">\n         {{ item.year }}\n    </button>\n  </div>\n</div>\n",
                    providers: [YearViewService],
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    YearViewComponent.ctorParameters = function () { return [
        { type: DateTimePickerService, },
        { type: YearViewService, },
    ]; };
    return YearViewComponent;
}());
export { YearViewComponent };
function YearViewComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    YearViewComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    YearViewComponent.ctorParameters;
    /** @type {?} */
    YearViewComponent.prototype._datePicker;
    /** @type {?} */
    YearViewComponent.prototype.yearService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhci12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2RhdGUtdGltZS1waWNrZXIveWVhci12aWV3L3llYXItdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDcEUsT0FBTyxFQUFnQixlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7SUErQmxFLDJCQUFvQixXQUFrQyxFQUFTLFdBQTRCO1FBQXZFLGdCQUFXLEdBQVgsV0FBVyxDQUF1QjtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFpQjtLQUFJOzs7OztJQUUvRixrQ0FBTTs7OztJQUFOLFVBQU8sSUFBWTtRQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7UUFHdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUNsQzs7Ozs7O0lBRUQscUNBQVM7Ozs7O0lBQVQsVUFBVSxJQUFrQixFQUFFLFVBQWtCO1FBQzlDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLENBQUM7S0FDbkQ7Ozs7O0lBRUQsd0NBQVk7Ozs7SUFBWixVQUFhLEtBQWE7UUFDeEIsTUFBTSxDQUFDLEtBQUssQ0FBQztLQUNkOzs7Ozs7SUFFRCx5Q0FBYTs7Ozs7SUFBYixVQUFjLEtBQWEsRUFBRSxJQUFrQjtRQUM3QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztLQUNsQjs7Ozs7SUFFRCx1Q0FBVzs7OztJQUFYLFVBQVksSUFBa0I7UUFDNUIscUJBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUNoRCxxQkFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDOztRQUcxQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDOztZQUdWLHFCQUFNLG9CQUFvQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBdEIsQ0FBc0IsQ0FBQyxFQUEzQyxDQUEyQyxDQUFDLENBQUM7WUFFN0YsRUFBRSxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixNQUFNLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDaEM7U0FDSjs7UUFHRCxxQkFBTSxxQkFBcUIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLFlBQVksRUFBakIsQ0FBaUIsQ0FBQyxFQUFyQyxDQUFxQyxDQUFDLENBQUM7UUFFeEYsRUFBRSxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQzVCOztRQUdELE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUM7S0FDeEM7O2dCQTFFQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtvQkFDekMsUUFBUSxFQUFFLDZnQ0FxQlg7b0JBQ0MsU0FBUyxFQUFFLENBQUMsZUFBZSxDQUFDO29CQUM1QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBN0JRLHFCQUFxQjtnQkFDUCxlQUFlOzs0QkFGdEM7O1NBK0JhLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGF0ZVRpbWVQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0ZS10aW1lLXBpY2tlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgWWVhclZpZXdJdGVtLCBZZWFyVmlld1NlcnZpY2UgfSBmcm9tICcuL3llYXItdmlldy5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndXgtZGF0ZS10aW1lLXBpY2tlci15ZWFyLXZpZXcnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImNhbGVuZGFyXCIgcm9sZT1cImdyaWRcIj5cclxuICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItcm93XCIgcm9sZT1cInJvd1wiICpuZ0Zvcj1cImxldCByb3cgb2YgeWVhclNlcnZpY2UuZ3JpZCQgfCBhc3luYzsgdHJhY2tCeTogdHJhY2tSb3dCeUZuXCI+XHJcblxyXG4gICAgPGJ1dHRvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiByb3c7IHRyYWNrQnk6IHRyYWNrWWVhckJ5Rm5cIlxyXG4gICAgICAgICByb2xlPVwiZ3JpZGNlbGxcIlxyXG4gICAgICAgICBjbGFzcz1cImNhbGVuZGFyLWl0ZW1cIlxyXG4gICAgICAgICBbZm9jdXNJZl09XCIoeWVhclNlcnZpY2UuZm9jdXNlZCQgfCBhc3luYykgPT09IGl0ZW0ueWVhclwiXHJcbiAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiaXRlbS55ZWFyXCJcclxuICAgICAgICAgW2F0dHIuYXJpYS1zZWxlY3RlZF09XCJpdGVtLmlzQWN0aXZlWWVhclwiXHJcbiAgICAgICAgIFtjbGFzcy5jdXJyZW50XT1cIml0ZW0uaXNDdXJyZW50WWVhclwiXHJcbiAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwiaXRlbS5pc0FjdGl2ZVllYXJcIlxyXG4gICAgICAgICAoY2xpY2spPVwic2VsZWN0KGl0ZW0ueWVhcik7ICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiXHJcbiAgICAgICAgIChrZXlkb3duLkFycm93TGVmdCk9XCJmb2N1c1llYXIoaXRlbSwgLTEpOyAkZXZlbnQucHJldmVudERlZmF1bHQoKVwiXHJcbiAgICAgICAgIChrZXlkb3duLkFycm93UmlnaHQpPVwiZm9jdXNZZWFyKGl0ZW0sIDEpOyAkZXZlbnQucHJldmVudERlZmF1bHQoKVwiXHJcbiAgICAgICAgIChrZXlkb3duLkFycm93VXApPVwiZm9jdXNZZWFyKGl0ZW0sIC00KTsgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIlxyXG4gICAgICAgICAoa2V5ZG93bi5BcnJvd0Rvd24pPVwiZm9jdXNZZWFyKGl0ZW0sIDQpOyAkZXZlbnQucHJldmVudERlZmF1bHQoKVwiXHJcbiAgICAgICAgIFt0YWJpbmRleF09XCJnZXRUYWJiYWJsZShpdGVtKSA/IDAgOiAtMVwiPlxyXG4gICAgICAgICB7eyBpdGVtLnllYXIgfX1cclxuICAgIDwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuYCxcclxuICBwcm92aWRlcnM6IFtZZWFyVmlld1NlcnZpY2VdLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBZZWFyVmlld0NvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RhdGVQaWNrZXI6IERhdGVUaW1lUGlja2VyU2VydmljZSwgcHVibGljIHllYXJTZXJ2aWNlOiBZZWFyVmlld1NlcnZpY2UpIHt9XHJcblxyXG4gIHNlbGVjdCh5ZWFyOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuX2RhdGVQaWNrZXIuc2V0Vmlld3BvcnRZZWFyKHllYXIpO1xyXG5cclxuICAgIC8vIHNob3cgdGhlIG1vbnRoIHBpY2tlclxyXG4gICAgdGhpcy5fZGF0ZVBpY2tlci5nb1RvQ2hpbGRNb2RlKCk7XHJcbiAgfVxyXG5cclxuICBmb2N1c1llYXIoaXRlbTogWWVhclZpZXdJdGVtLCB5ZWFyT2Zmc2V0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMueWVhclNlcnZpY2Uuc2V0Rm9jdXMoaXRlbS55ZWFyICsgeWVhck9mZnNldCk7XHJcbiAgfVxyXG5cclxuICB0cmFja1Jvd0J5Rm4oaW5kZXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gaW5kZXg7XHJcbiAgfVxyXG5cclxuICB0cmFja1llYXJCeUZuKGluZGV4OiBudW1iZXIsIGl0ZW06IFllYXJWaWV3SXRlbSk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gaXRlbS55ZWFyO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGFiYmFibGUoaXRlbTogWWVhclZpZXdJdGVtKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBmb2N1c2VkID0gdGhpcy55ZWFyU2VydmljZS5mb2N1c2VkJC52YWx1ZTtcclxuICAgIGNvbnN0IGdyaWQgPSB0aGlzLnllYXJTZXJ2aWNlLmdyaWQkLnZhbHVlO1xyXG5cclxuICAgIC8vIGlmIHRoZXJlIGlzIGEgZm9jdXNlZCB5ZWFyIGNoZWNrIGlmIHRoaXMgaXMgaXRcclxuICAgIGlmIChmb2N1c2VkKSB7XHJcblxyXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZSBmb2N1c2VkIHllYXIgaXMgdmlzaWJsZVxyXG4gICAgICAgIGNvbnN0IGlzRm9jdXNlZFllYXJWaXNpYmxlID0gISFncmlkLmZpbmQocm93ID0+ICEhcm93LmZpbmQoX2l0ZW0gPT4gX2l0ZW0ueWVhciA9PT0gZm9jdXNlZCkpO1xyXG5cclxuICAgICAgICBpZiAoaXNGb2N1c2VkWWVhclZpc2libGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZvY3VzZWQgPT09IGl0ZW0ueWVhcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaWYgdGhlcmUgaXMgbm8gZm9jdXNhYmxlIHllYXIgdGhlbiBjaGVjayBpZiB0aGVyZSBpcyBhIHNlbGVjdGVkIHllYXJcclxuICAgIGNvbnN0IGlzU2VsZWN0ZWRZZWFyVmlzaWJsZSA9ICEhZ3JpZC5maW5kKHJvdyA9PiAhIXJvdy5maW5kKHllYXIgPT4geWVhci5pc0FjdGl2ZVllYXIpKTtcclxuXHJcbiAgICBpZiAoaXNTZWxlY3RlZFllYXJWaXNpYmxlKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0uaXNBY3RpdmVZZWFyO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG90aGVyd2lzZSBtYWtlIHRoZSBmaXJzdCBtb250aCB0YWJiYWJsZVxyXG4gICAgcmV0dXJuIGdyaWRbMF1bMF0ueWVhciA9PT0gaXRlbS55ZWFyO1xyXG59XHJcblxyXG59XHJcbiJdfQ==