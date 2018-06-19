/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DateTimePickerService } from '../date-time-picker.service';
import { YearViewService } from './year-view.service';
export class YearViewComponent {
    /**
     * @param {?} _datePicker
     * @param {?} yearService
     */
    constructor(_datePicker, yearService) {
        this._datePicker = _datePicker;
        this.yearService = yearService;
    }
    /**
     * @param {?} year
     * @return {?}
     */
    select(year) {
        this._datePicker.setViewportYear(year);
        // show the month picker
        this._datePicker.goToChildMode();
    }
    /**
     * @param {?} item
     * @param {?} yearOffset
     * @return {?}
     */
    focusYear(item, yearOffset) {
        this.yearService.setFocus(item.year + yearOffset);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    trackRowByFn(index) {
        return index;
    }
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    trackYearByFn(index, item) {
        return item.year;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    getTabbable(item) {
        const /** @type {?} */ focused = this.yearService.focused$.value;
        const /** @type {?} */ grid = this.yearService.grid$.value;
        // if there is a focused year check if this is it
        if (focused) {
            // check if the focused year is visible
            const /** @type {?} */ isFocusedYearVisible = !!grid.find(row => !!row.find(_item => _item.year === focused));
            if (isFocusedYearVisible) {
                return focused === item.year;
            }
        }
        // if there is no focusable year then check if there is a selected year
        const /** @type {?} */ isSelectedYearVisible = !!grid.find(row => !!row.find(year => year.isActiveYear));
        if (isSelectedYearVisible) {
            return item.isActiveYear;
        }
        // otherwise make the first month tabbable
        return grid[0][0].year === item.year;
    }
}
YearViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-date-time-picker-year-view',
                template: `<div class="calendar" role="grid">
  <div class="calendar-row" role="row" *ngFor="let row of yearService.grid$ | async; trackBy: trackRowByFn">

    <button *ngFor="let item of row; trackBy: trackYearByFn"
         role="gridcell"
         class="calendar-item"
         [focusIf]="(yearService.focused$ | async) === item.year"
         [attr.aria-label]="item.year"
         [attr.aria-selected]="item.isActiveYear"
         [class.current]="item.isCurrentYear"
         [class.active]="item.isActiveYear"
         (click)="select(item.year); $event.stopPropagation()"
         (keydown.ArrowLeft)="focusYear(item, -1); $event.preventDefault()"
         (keydown.ArrowRight)="focusYear(item, 1); $event.preventDefault()"
         (keydown.ArrowUp)="focusYear(item, -4); $event.preventDefault()"
         (keydown.ArrowDown)="focusYear(item, 4); $event.preventDefault()"
         [tabindex]="getTabbable(item) ? 0 : -1">
         {{ item.year }}
    </button>
  </div>
</div>
`,
                providers: [YearViewService],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
YearViewComponent.ctorParameters = () => [
    { type: DateTimePickerService, },
    { type: YearViewService, },
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhci12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2RhdGUtdGltZS1waWNrZXIveWVhci12aWV3L3llYXItdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDcEUsT0FBTyxFQUFnQixlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQTZCcEUsTUFBTTs7Ozs7SUFFSixZQUFvQixXQUFrQyxFQUFTLFdBQTRCO1FBQXZFLGdCQUFXLEdBQVgsV0FBVyxDQUF1QjtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFpQjtLQUFJOzs7OztJQUUvRixNQUFNLENBQUMsSUFBWTtRQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7UUFHdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUNsQzs7Ozs7O0lBRUQsU0FBUyxDQUFDLElBQWtCLEVBQUUsVUFBa0I7UUFDOUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsQ0FBQztLQUNuRDs7Ozs7SUFFRCxZQUFZLENBQUMsS0FBYTtRQUN4QixNQUFNLENBQUMsS0FBSyxDQUFDO0tBQ2Q7Ozs7OztJQUVELGFBQWEsQ0FBQyxLQUFhLEVBQUUsSUFBa0I7UUFDN0MsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7S0FDbEI7Ozs7O0lBRUQsV0FBVyxDQUFDLElBQWtCO1FBQzVCLHVCQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDaEQsdUJBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQzs7UUFHMUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzs7WUFHVix1QkFBTSxvQkFBb0IsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBRTdGLEVBQUUsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQztnQkFDdkIsTUFBTSxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2hDO1NBQ0o7O1FBR0QsdUJBQU0scUJBQXFCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBRXhGLEVBQUUsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztZQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUM1Qjs7UUFHRCxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDO0tBQ3hDOzs7WUExRUEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBcUJYO2dCQUNDLFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQztnQkFDNUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUE3QlEscUJBQXFCO1lBQ1AsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGF0ZVRpbWVQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0ZS10aW1lLXBpY2tlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgWWVhclZpZXdJdGVtLCBZZWFyVmlld1NlcnZpY2UgfSBmcm9tICcuL3llYXItdmlldy5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndXgtZGF0ZS10aW1lLXBpY2tlci15ZWFyLXZpZXcnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImNhbGVuZGFyXCIgcm9sZT1cImdyaWRcIj5cclxuICA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItcm93XCIgcm9sZT1cInJvd1wiICpuZ0Zvcj1cImxldCByb3cgb2YgeWVhclNlcnZpY2UuZ3JpZCQgfCBhc3luYzsgdHJhY2tCeTogdHJhY2tSb3dCeUZuXCI+XHJcblxyXG4gICAgPGJ1dHRvbiAqbmdGb3I9XCJsZXQgaXRlbSBvZiByb3c7IHRyYWNrQnk6IHRyYWNrWWVhckJ5Rm5cIlxyXG4gICAgICAgICByb2xlPVwiZ3JpZGNlbGxcIlxyXG4gICAgICAgICBjbGFzcz1cImNhbGVuZGFyLWl0ZW1cIlxyXG4gICAgICAgICBbZm9jdXNJZl09XCIoeWVhclNlcnZpY2UuZm9jdXNlZCQgfCBhc3luYykgPT09IGl0ZW0ueWVhclwiXHJcbiAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiaXRlbS55ZWFyXCJcclxuICAgICAgICAgW2F0dHIuYXJpYS1zZWxlY3RlZF09XCJpdGVtLmlzQWN0aXZlWWVhclwiXHJcbiAgICAgICAgIFtjbGFzcy5jdXJyZW50XT1cIml0ZW0uaXNDdXJyZW50WWVhclwiXHJcbiAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwiaXRlbS5pc0FjdGl2ZVllYXJcIlxyXG4gICAgICAgICAoY2xpY2spPVwic2VsZWN0KGl0ZW0ueWVhcik7ICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiXHJcbiAgICAgICAgIChrZXlkb3duLkFycm93TGVmdCk9XCJmb2N1c1llYXIoaXRlbSwgLTEpOyAkZXZlbnQucHJldmVudERlZmF1bHQoKVwiXHJcbiAgICAgICAgIChrZXlkb3duLkFycm93UmlnaHQpPVwiZm9jdXNZZWFyKGl0ZW0sIDEpOyAkZXZlbnQucHJldmVudERlZmF1bHQoKVwiXHJcbiAgICAgICAgIChrZXlkb3duLkFycm93VXApPVwiZm9jdXNZZWFyKGl0ZW0sIC00KTsgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIlxyXG4gICAgICAgICAoa2V5ZG93bi5BcnJvd0Rvd24pPVwiZm9jdXNZZWFyKGl0ZW0sIDQpOyAkZXZlbnQucHJldmVudERlZmF1bHQoKVwiXHJcbiAgICAgICAgIFt0YWJpbmRleF09XCJnZXRUYWJiYWJsZShpdGVtKSA/IDAgOiAtMVwiPlxyXG4gICAgICAgICB7eyBpdGVtLnllYXIgfX1cclxuICAgIDwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuYCxcclxuICBwcm92aWRlcnM6IFtZZWFyVmlld1NlcnZpY2VdLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBZZWFyVmlld0NvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2RhdGVQaWNrZXI6IERhdGVUaW1lUGlja2VyU2VydmljZSwgcHVibGljIHllYXJTZXJ2aWNlOiBZZWFyVmlld1NlcnZpY2UpIHt9XHJcblxyXG4gIHNlbGVjdCh5ZWFyOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuX2RhdGVQaWNrZXIuc2V0Vmlld3BvcnRZZWFyKHllYXIpO1xyXG5cclxuICAgIC8vIHNob3cgdGhlIG1vbnRoIHBpY2tlclxyXG4gICAgdGhpcy5fZGF0ZVBpY2tlci5nb1RvQ2hpbGRNb2RlKCk7XHJcbiAgfVxyXG5cclxuICBmb2N1c1llYXIoaXRlbTogWWVhclZpZXdJdGVtLCB5ZWFyT2Zmc2V0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMueWVhclNlcnZpY2Uuc2V0Rm9jdXMoaXRlbS55ZWFyICsgeWVhck9mZnNldCk7XHJcbiAgfVxyXG5cclxuICB0cmFja1Jvd0J5Rm4oaW5kZXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gaW5kZXg7XHJcbiAgfVxyXG5cclxuICB0cmFja1llYXJCeUZuKGluZGV4OiBudW1iZXIsIGl0ZW06IFllYXJWaWV3SXRlbSk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gaXRlbS55ZWFyO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGFiYmFibGUoaXRlbTogWWVhclZpZXdJdGVtKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBmb2N1c2VkID0gdGhpcy55ZWFyU2VydmljZS5mb2N1c2VkJC52YWx1ZTtcclxuICAgIGNvbnN0IGdyaWQgPSB0aGlzLnllYXJTZXJ2aWNlLmdyaWQkLnZhbHVlO1xyXG5cclxuICAgIC8vIGlmIHRoZXJlIGlzIGEgZm9jdXNlZCB5ZWFyIGNoZWNrIGlmIHRoaXMgaXMgaXRcclxuICAgIGlmIChmb2N1c2VkKSB7XHJcblxyXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZSBmb2N1c2VkIHllYXIgaXMgdmlzaWJsZVxyXG4gICAgICAgIGNvbnN0IGlzRm9jdXNlZFllYXJWaXNpYmxlID0gISFncmlkLmZpbmQocm93ID0+ICEhcm93LmZpbmQoX2l0ZW0gPT4gX2l0ZW0ueWVhciA9PT0gZm9jdXNlZCkpO1xyXG5cclxuICAgICAgICBpZiAoaXNGb2N1c2VkWWVhclZpc2libGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZvY3VzZWQgPT09IGl0ZW0ueWVhcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaWYgdGhlcmUgaXMgbm8gZm9jdXNhYmxlIHllYXIgdGhlbiBjaGVjayBpZiB0aGVyZSBpcyBhIHNlbGVjdGVkIHllYXJcclxuICAgIGNvbnN0IGlzU2VsZWN0ZWRZZWFyVmlzaWJsZSA9ICEhZ3JpZC5maW5kKHJvdyA9PiAhIXJvdy5maW5kKHllYXIgPT4geWVhci5pc0FjdGl2ZVllYXIpKTtcclxuXHJcbiAgICBpZiAoaXNTZWxlY3RlZFllYXJWaXNpYmxlKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0uaXNBY3RpdmVZZWFyO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG90aGVyd2lzZSBtYWtlIHRoZSBmaXJzdCBtb250aCB0YWJiYWJsZVxyXG4gICAgcmV0dXJuIGdyaWRbMF1bMF0ueWVhciA9PT0gaXRlbS55ZWFyO1xyXG59XHJcblxyXG59XHJcbiJdfQ==