/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DateTimePickerService, ModeDirection } from '../date-time-picker.service';
import { gridify, monthsShort, range } from '../date-time-picker.utils';
var MonthViewService = /** @class */ (function () {
    function MonthViewService(_datepicker) {
        var _this = this;
        this._datepicker = _datepicker;
        this.grid$ = new BehaviorSubject([[]]);
        this.focused$ = new BehaviorSubject(null);
        this._subscription = _datepicker.year$.subscribe(function (year) { return _this.createMonthGrid(year); });
    }
    /**
     * @return {?}
     */
    MonthViewService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscription.unsubscribe();
    };
    /**
     * @param {?} month
     * @param {?} year
     * @return {?}
     */
    MonthViewService.prototype.setFocus = /**
     * @param {?} month
     * @param {?} year
     * @return {?}
     */
    function (month, year) {
        this.focused$.next({ month: month, year: year });
        // update the viewport to ensure focused month is visible
        this._datepicker.setViewportYear(year);
    };
    /**
     * @param {?} year
     * @return {?}
     */
    MonthViewService.prototype.createMonthGrid = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        // update the header
        this._datepicker.setHeader(year.toString());
        // get the current year and month
        var /** @type {?} */ currentMonth = new Date().getMonth();
        var /** @type {?} */ currentYear = new Date().getFullYear();
        // get the currently selected month
        var /** @type {?} */ activeMonth = this._datepicker.selected$.value.getMonth();
        var /** @type {?} */ activeYear = this._datepicker.selected$.value.getFullYear();
        // create a 4x3 grid of month numbers
        var /** @type {?} */ months = range(0, 11).map(function (month) {
            return {
                name: monthsShort[month],
                month: month,
                year: year,
                isCurrentMonth: year === currentYear && month === currentMonth,
                isActiveMonth: year === activeYear && month === activeMonth
            };
        });
        // map these to the appropriate format
        var /** @type {?} */ items = gridify(months, 4);
        // update the grid
        this.grid$.next(items);
        // if there is no focused month select the first one
        if (this._datepicker.modeDirection === ModeDirection.Descend && this.focused$.value === null) {
            // check if the selected month is in view
            var /** @type {?} */ selectedMonth = months.find(function (month) { return month.isActiveMonth; });
            this.setFocus(selectedMonth ? selectedMonth.month : 0, year);
        }
    };
    MonthViewService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    MonthViewService.ctorParameters = function () { return [
        { type: DateTimePickerService, },
    ]; };
    return MonthViewService;
}());
export { MonthViewService };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtdmlldy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGF0ZS10aW1lLXBpY2tlci9tb250aC12aWV3L21vbnRoLXZpZXcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFrQixNQUFNLE1BQU0sQ0FBQztBQUN2RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDbkYsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0lBVXBFLDBCQUFvQixXQUFrQztRQUF0RCxpQkFFQztRQUZtQixnQkFBVyxHQUFYLFdBQVcsQ0FBdUI7cUJBTDlDLElBQUksZUFBZSxDQUFvQixDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUN6QyxJQUFJLGVBQWUsQ0FBbUIsSUFBSSxDQUFDO1FBS2xELElBQUksQ0FBQyxhQUFhLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUExQixDQUEwQixDQUFDLENBQUM7S0FDeEY7Ozs7SUFFRCxzQ0FBVzs7O0lBQVg7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3BDOzs7Ozs7SUFFRCxtQ0FBUTs7Ozs7SUFBUixVQUFTLEtBQWEsRUFBRSxJQUFZO1FBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQzs7UUFHakQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDMUM7Ozs7O0lBRU8sMENBQWU7Ozs7Y0FBQyxJQUFZOztRQUdoQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQzs7UUFHNUMscUJBQU0sWUFBWSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDM0MscUJBQU0sV0FBVyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7O1FBRzdDLHFCQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEUscUJBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7UUFHbEUscUJBQU0sTUFBTSxHQUFvQixLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEtBQUs7WUFDbEQsTUFBTSxDQUFDO2dCQUNILElBQUksRUFBRSxXQUFXLENBQUMsS0FBSyxDQUFDO2dCQUN4QixLQUFLLEVBQUUsS0FBSztnQkFDWixJQUFJLEVBQUUsSUFBSTtnQkFDVixjQUFjLEVBQUUsSUFBSSxLQUFLLFdBQVcsSUFBSSxLQUFLLEtBQUssWUFBWTtnQkFDOUQsYUFBYSxFQUFFLElBQUksS0FBSyxVQUFVLElBQUksS0FBSyxLQUFLLFdBQVc7YUFDOUQsQ0FBQztTQUNMLENBQUMsQ0FBQzs7UUFHSCxxQkFBTSxLQUFLLEdBQXNCLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7O1FBR3BELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOztRQUd2QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsS0FBSyxhQUFhLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7O1lBRzNGLHFCQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLGFBQWEsRUFBbkIsQ0FBbUIsQ0FBQyxDQUFDO1lBRWhFLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDaEU7OztnQkE1RFIsVUFBVTs7OztnQkFIRixxQkFBcUI7OzJCQUY5Qjs7U0FNYSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0ICwgIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBEYXRlVGltZVBpY2tlclNlcnZpY2UsIE1vZGVEaXJlY3Rpb24gfSBmcm9tICcuLi9kYXRlLXRpbWUtcGlja2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBncmlkaWZ5LCBtb250aHNTaG9ydCwgcmFuZ2UgfSBmcm9tICcuLi9kYXRlLXRpbWUtcGlja2VyLnV0aWxzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1vbnRoVmlld1NlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG5cclxuICAgIGdyaWQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxNb250aFZpZXdJdGVtW11bXT4oW1tdXSk7XHJcbiAgICBmb2N1c2VkJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Rm9jdXNlZE1vbnRoSXRlbT4obnVsbCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGF0ZXBpY2tlcjogRGF0ZVRpbWVQaWNrZXJTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uID0gX2RhdGVwaWNrZXIueWVhciQuc3Vic2NyaWJlKHllYXIgPT4gdGhpcy5jcmVhdGVNb250aEdyaWQoeWVhcikpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEZvY3VzKG1vbnRoOiBudW1iZXIsIHllYXI6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZm9jdXNlZCQubmV4dCh7IG1vbnRoOiBtb250aCwgeWVhcjogeWVhciB9KTtcclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIHRoZSB2aWV3cG9ydCB0byBlbnN1cmUgZm9jdXNlZCBtb250aCBpcyB2aXNpYmxlXHJcbiAgICAgICAgdGhpcy5fZGF0ZXBpY2tlci5zZXRWaWV3cG9ydFllYXIoeWVhcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVNb250aEdyaWQoeWVhcjogbnVtYmVyKTogdm9pZCB7XHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgaGVhZGVyXHJcbiAgICAgICAgdGhpcy5fZGF0ZXBpY2tlci5zZXRIZWFkZXIoeWVhci50b1N0cmluZygpKTtcclxuXHJcbiAgICAgICAgLy8gZ2V0IHRoZSBjdXJyZW50IHllYXIgYW5kIG1vbnRoXHJcbiAgICAgICAgY29uc3QgY3VycmVudE1vbnRoID0gbmV3IERhdGUoKS5nZXRNb250aCgpO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICAgICAgICAvLyBnZXQgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBtb250aFxyXG4gICAgICAgIGNvbnN0IGFjdGl2ZU1vbnRoID0gdGhpcy5fZGF0ZXBpY2tlci5zZWxlY3RlZCQudmFsdWUuZ2V0TW9udGgoKTtcclxuICAgICAgICBjb25zdCBhY3RpdmVZZWFyID0gdGhpcy5fZGF0ZXBpY2tlci5zZWxlY3RlZCQudmFsdWUuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgICAgICAgLy8gY3JlYXRlIGEgNHgzIGdyaWQgb2YgbW9udGggbnVtYmVyc1xyXG4gICAgICAgIGNvbnN0IG1vbnRoczogTW9udGhWaWV3SXRlbVtdID0gcmFuZ2UoMCwgMTEpLm1hcChtb250aCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBtb250aHNTaG9ydFttb250aF0sXHJcbiAgICAgICAgICAgICAgICBtb250aDogbW9udGgsXHJcbiAgICAgICAgICAgICAgICB5ZWFyOiB5ZWFyLFxyXG4gICAgICAgICAgICAgICAgaXNDdXJyZW50TW9udGg6IHllYXIgPT09IGN1cnJlbnRZZWFyICYmIG1vbnRoID09PSBjdXJyZW50TW9udGgsXHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZU1vbnRoOiB5ZWFyID09PSBhY3RpdmVZZWFyICYmIG1vbnRoID09PSBhY3RpdmVNb250aFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBtYXAgdGhlc2UgdG8gdGhlIGFwcHJvcHJpYXRlIGZvcm1hdFxyXG4gICAgICAgIGNvbnN0IGl0ZW1zOiBNb250aFZpZXdJdGVtW11bXSA9IGdyaWRpZnkobW9udGhzLCA0KTtcclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIHRoZSBncmlkXHJcbiAgICAgICAgdGhpcy5ncmlkJC5uZXh0KGl0ZW1zKTtcclxuXHJcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgbm8gZm9jdXNlZCBtb250aCBzZWxlY3QgdGhlIGZpcnN0IG9uZVxyXG4gICAgICAgIGlmICh0aGlzLl9kYXRlcGlja2VyLm1vZGVEaXJlY3Rpb24gPT09IE1vZGVEaXJlY3Rpb24uRGVzY2VuZCAmJiB0aGlzLmZvY3VzZWQkLnZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBjaGVjayBpZiB0aGUgc2VsZWN0ZWQgbW9udGggaXMgaW4gdmlld1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZE1vbnRoID0gbW9udGhzLmZpbmQobW9udGggPT4gbW9udGguaXNBY3RpdmVNb250aCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldEZvY3VzKHNlbGVjdGVkTW9udGggPyBzZWxlY3RlZE1vbnRoLm1vbnRoIDogMCwgeWVhcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1vbnRoVmlld0l0ZW0ge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgbW9udGg6IG51bWJlcjtcclxuICAgIHllYXI6IG51bWJlcjtcclxuICAgIGlzQ3VycmVudE1vbnRoOiBib29sZWFuO1xyXG4gICAgaXNBY3RpdmVNb250aDogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGb2N1c2VkTW9udGhJdGVtIHtcclxuICAgIG1vbnRoOiBudW1iZXI7XHJcbiAgICB5ZWFyOiBudW1iZXI7XHJcbn0iXX0=