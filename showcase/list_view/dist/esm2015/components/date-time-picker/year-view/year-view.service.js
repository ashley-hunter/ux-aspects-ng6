/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { DatePickerHeaderEvent, DateTimePickerService } from '../date-time-picker.service';
import { gridify, range } from '../date-time-picker.utils';
export class YearViewService {
    /**
     * @param {?} _datepicker
     */
    constructor(_datepicker) {
        this._datepicker = _datepicker;
        this.grid$ = new BehaviorSubject([[]]);
        this.focused$ = new BehaviorSubject(null);
        this._year = new Date().getFullYear();
        this._subscription = new Subscription();
        const /** @type {?} */ year = _datepicker.year$.subscribe(_year => this.createYearGrid(_year));
        const /** @type {?} */ event = _datepicker.headerEvent$
            .subscribe(_event => _event === DatePickerHeaderEvent.Next ? this.goToNextDecade() : this.goToPreviousDecade());
        this._subscription.add(year);
        this._subscription.add(event);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
    /**
     * @param {?} year
     * @return {?}
     */
    setFocus(year) {
        this.focused$.next(year);
        this.createYearGrid(year);
    }
    /**
     * @return {?}
     */
    goToPreviousDecade() {
        this.createYearGrid(this._year - 10);
    }
    /**
     * @return {?}
     */
    goToNextDecade() {
        this.createYearGrid(this._year + 10);
    }
    /**
     * @param {?=} year
     * @return {?}
     */
    createYearGrid(year = this._year) {
        this._year = year;
        // get the years to display
        const /** @type {?} */ decade = this.getDecade(year);
        const /** @type {?} */ currentYear = new Date().getFullYear();
        // produce items in the correct format
        const /** @type {?} */ items = decade.range.map(_year => {
            return {
                year: _year,
                isCurrentYear: _year === currentYear,
                isActiveYear: _year === this._datepicker.year$.value
            };
        });
        // update the header text
        this._datepicker.setHeader(decade.start + ' - ' + decade.end);
        // create the grid
        this.grid$.next(gridify(items, 4));
    }
    /**
     * Get the years in the current decade to display
     * @param {?} year
     * @return {?}
     */
    getDecade(year) {
        // figure the start and end points
        const /** @type {?} */ start = (year - (year % 10));
        const /** @type {?} */ end = start + 9;
        // create an array containing all the numbers between the start and end points
        return { start: start, end: end, range: range(start, end) };
    }
}
YearViewService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
YearViewService.ctorParameters = () => [
    { type: DateTimePickerService, },
];
function YearViewService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    YearViewService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    YearViewService.ctorParameters;
    /** @type {?} */
    YearViewService.prototype.grid$;
    /** @type {?} */
    YearViewService.prototype.focused$;
    /** @type {?} */
    YearViewService.prototype._year;
    /** @type {?} */
    YearViewService.prototype._subscription;
    /** @type {?} */
    YearViewService.prototype._datepicker;
}
/**
 * @record
 */
export function YearRange() { }
function YearRange_tsickle_Closure_declarations() {
    /** @type {?} */
    YearRange.prototype.start;
    /** @type {?} */
    YearRange.prototype.end;
    /** @type {?} */
    YearRange.prototype.range;
}
/**
 * @record
 */
export function YearViewItem() { }
function YearViewItem_tsickle_Closure_declarations() {
    /** @type {?} */
    YearViewItem.prototype.year;
    /** @type {?} */
    YearViewItem.prototype.isCurrentYear;
    /** @type {?} */
    YearViewItem.prototype.isActiveYear;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhci12aWV3LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9kYXRlLXRpbWUtcGlja2VyL3llYXItdmlldy95ZWFyLXZpZXcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFJLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMzRixPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRzNELE1BQU07Ozs7SUFTRixZQUFvQixXQUFrQztRQUFsQyxnQkFBVyxHQUFYLFdBQVcsQ0FBdUI7cUJBUDlDLElBQUksZUFBZSxDQUFtQixDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUN4QyxJQUFJLGVBQWUsQ0FBUyxJQUFJLENBQUM7cUJBRXBCLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFOzZCQUV4QixJQUFJLFlBQVksRUFBRTtRQUd0Qyx1QkFBTSxJQUFJLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFFOUUsdUJBQU0sS0FBSyxHQUFHLFdBQVcsQ0FBQyxZQUFZO2FBQ2pDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sS0FBSyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQztRQUVwSCxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNqQzs7OztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3BDOzs7OztJQUVELFFBQVEsQ0FBQyxJQUFZO1FBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDN0I7Ozs7SUFFRCxrQkFBa0I7UUFDZCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUM7S0FDeEM7Ozs7SUFFRCxjQUFjO1FBQ1YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0tBQ3hDOzs7OztJQUVPLGNBQWMsQ0FBQyxPQUFlLElBQUksQ0FBQyxLQUFLO1FBRTVDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDOztRQUdsQix1QkFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVwQyx1QkFBTSxXQUFXLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7UUFHN0MsdUJBQU0sS0FBSyxHQUFtQixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNuRCxNQUFNLENBQUM7Z0JBQ0gsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsYUFBYSxFQUFFLEtBQUssS0FBSyxXQUFXO2dCQUNwQyxZQUFZLEVBQUUsS0FBSyxLQUFLLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUs7YUFDdkQsQ0FBQztTQUNMLENBQUMsQ0FBQzs7UUFHSCxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7O1FBRzlELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7OztJQU0vQixTQUFTLENBQUMsSUFBWTs7UUFHMUIsdUJBQU0sS0FBSyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkMsdUJBQU0sR0FBRyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7O1FBR3RCLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDOzs7O1lBeEVuRSxVQUFVOzs7O1lBSHFCLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgLCAgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IERhdGVQaWNrZXJIZWFkZXJFdmVudCwgRGF0ZVRpbWVQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0ZS10aW1lLXBpY2tlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgZ3JpZGlmeSwgcmFuZ2UgfSBmcm9tICcuLi9kYXRlLXRpbWUtcGlja2VyLnV0aWxzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFllYXJWaWV3U2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcblxyXG4gICAgZ3JpZCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFllYXJWaWV3SXRlbVtdW10+KFtbXV0pO1xyXG4gICAgZm9jdXNlZCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PG51bWJlcj4obnVsbCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfeWVhcjogbnVtYmVyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICAgIHByaXZhdGUgX3N1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9kYXRlcGlja2VyOiBEYXRlVGltZVBpY2tlclNlcnZpY2UpIHtcclxuICAgICAgICBjb25zdCB5ZWFyID0gX2RhdGVwaWNrZXIueWVhciQuc3Vic2NyaWJlKF95ZWFyID0+IHRoaXMuY3JlYXRlWWVhckdyaWQoX3llYXIpKTtcclxuXHJcbiAgICAgICAgY29uc3QgZXZlbnQgPSBfZGF0ZXBpY2tlci5oZWFkZXJFdmVudCRcclxuICAgICAgICAgICAgLnN1YnNjcmliZShfZXZlbnQgPT4gX2V2ZW50ID09PSBEYXRlUGlja2VySGVhZGVyRXZlbnQuTmV4dCA/IHRoaXMuZ29Ub05leHREZWNhZGUoKSA6IHRoaXMuZ29Ub1ByZXZpb3VzRGVjYWRlKCkpO1xyXG5cclxuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb24uYWRkKHllYXIpO1xyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbi5hZGQoZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEZvY3VzKHllYXI6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZm9jdXNlZCQubmV4dCh5ZWFyKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVllYXJHcmlkKHllYXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGdvVG9QcmV2aW91c0RlY2FkZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZVllYXJHcmlkKHRoaXMuX3llYXIgLSAxMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ29Ub05leHREZWNhZGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVZZWFyR3JpZCh0aGlzLl95ZWFyICsgMTApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlWWVhckdyaWQoeWVhcjogbnVtYmVyID0gdGhpcy5feWVhcik6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLl95ZWFyID0geWVhcjtcclxuXHJcbiAgICAgICAgLy8gZ2V0IHRoZSB5ZWFycyB0byBkaXNwbGF5XHJcbiAgICAgICAgY29uc3QgZGVjYWRlID0gdGhpcy5nZXREZWNhZGUoeWVhcik7XHJcblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICAgICAgICAvLyBwcm9kdWNlIGl0ZW1zIGluIHRoZSBjb3JyZWN0IGZvcm1hdFxyXG4gICAgICAgIGNvbnN0IGl0ZW1zOiBZZWFyVmlld0l0ZW1bXSA9IGRlY2FkZS5yYW5nZS5tYXAoX3llYXIgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgeWVhcjogX3llYXIsXHJcbiAgICAgICAgICAgICAgICBpc0N1cnJlbnRZZWFyOiBfeWVhciA9PT0gY3VycmVudFllYXIsXHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZVllYXI6IF95ZWFyID09PSB0aGlzLl9kYXRlcGlja2VyLnllYXIkLnZhbHVlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgaGVhZGVyIHRleHRcclxuICAgICAgICB0aGlzLl9kYXRlcGlja2VyLnNldEhlYWRlcihkZWNhZGUuc3RhcnQgKyAnIC0gJyArIGRlY2FkZS5lbmQpO1xyXG5cclxuICAgICAgICAvLyBjcmVhdGUgdGhlIGdyaWRcclxuICAgICAgICB0aGlzLmdyaWQkLm5leHQoZ3JpZGlmeShpdGVtcywgNCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSB5ZWFycyBpbiB0aGUgY3VycmVudCBkZWNhZGUgdG8gZGlzcGxheVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdldERlY2FkZSh5ZWFyOiBudW1iZXIpOiBZZWFyUmFuZ2Uge1xyXG5cclxuICAgICAgICAvLyBmaWd1cmUgdGhlIHN0YXJ0IGFuZCBlbmQgcG9pbnRzXHJcbiAgICAgICAgY29uc3Qgc3RhcnQgPSAoeWVhciAtICh5ZWFyICUgMTApKTtcclxuICAgICAgICBjb25zdCBlbmQgPSBzdGFydCArIDk7XHJcblxyXG4gICAgICAgIC8vIGNyZWF0ZSBhbiBhcnJheSBjb250YWluaW5nIGFsbCB0aGUgbnVtYmVycyBiZXR3ZWVuIHRoZSBzdGFydCBhbmQgZW5kIHBvaW50c1xyXG4gICAgICAgIHJldHVybiB7IHN0YXJ0OiBzdGFydCwgZW5kOiBlbmQsIHJhbmdlOiByYW5nZShzdGFydCwgZW5kKSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBZZWFyUmFuZ2Uge1xyXG4gICAgc3RhcnQ6IG51bWJlcjtcclxuICAgIGVuZDogbnVtYmVyO1xyXG4gICAgcmFuZ2U6IG51bWJlcltdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFllYXJWaWV3SXRlbSB7XHJcbiAgICB5ZWFyOiBudW1iZXI7XHJcbiAgICBpc0N1cnJlbnRZZWFyOiBib29sZWFuO1xyXG4gICAgaXNBY3RpdmVZZWFyOiBib29sZWFuO1xyXG59Il19