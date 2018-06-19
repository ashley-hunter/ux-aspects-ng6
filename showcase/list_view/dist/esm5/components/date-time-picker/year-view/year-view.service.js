/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { DatePickerHeaderEvent, DateTimePickerService } from '../date-time-picker.service';
import { gridify, range } from '../date-time-picker.utils';
var YearViewService = /** @class */ (function () {
    function YearViewService(_datepicker) {
        var _this = this;
        this._datepicker = _datepicker;
        this.grid$ = new BehaviorSubject([[]]);
        this.focused$ = new BehaviorSubject(null);
        this._year = new Date().getFullYear();
        this._subscription = new Subscription();
        var /** @type {?} */ year = _datepicker.year$.subscribe(function (_year) { return _this.createYearGrid(_year); });
        var /** @type {?} */ event = _datepicker.headerEvent$
            .subscribe(function (_event) { return _event === DatePickerHeaderEvent.Next ? _this.goToNextDecade() : _this.goToPreviousDecade(); });
        this._subscription.add(year);
        this._subscription.add(event);
    }
    /**
     * @return {?}
     */
    YearViewService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscription.unsubscribe();
    };
    /**
     * @param {?} year
     * @return {?}
     */
    YearViewService.prototype.setFocus = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        this.focused$.next(year);
        this.createYearGrid(year);
    };
    /**
     * @return {?}
     */
    YearViewService.prototype.goToPreviousDecade = /**
     * @return {?}
     */
    function () {
        this.createYearGrid(this._year - 10);
    };
    /**
     * @return {?}
     */
    YearViewService.prototype.goToNextDecade = /**
     * @return {?}
     */
    function () {
        this.createYearGrid(this._year + 10);
    };
    /**
     * @param {?=} year
     * @return {?}
     */
    YearViewService.prototype.createYearGrid = /**
     * @param {?=} year
     * @return {?}
     */
    function (year) {
        var _this = this;
        if (year === void 0) { year = this._year; }
        this._year = year;
        // get the years to display
        var /** @type {?} */ decade = this.getDecade(year);
        var /** @type {?} */ currentYear = new Date().getFullYear();
        // produce items in the correct format
        var /** @type {?} */ items = decade.range.map(function (_year) {
            return {
                year: _year,
                isCurrentYear: _year === currentYear,
                isActiveYear: _year === _this._datepicker.year$.value
            };
        });
        // update the header text
        this._datepicker.setHeader(decade.start + ' - ' + decade.end);
        // create the grid
        this.grid$.next(gridify(items, 4));
    };
    /**
     * Get the years in the current decade to display
     * @param {?} year
     * @return {?}
     */
    YearViewService.prototype.getDecade = /**
     * Get the years in the current decade to display
     * @param {?} year
     * @return {?}
     */
    function (year) {
        // figure the start and end points
        var /** @type {?} */ start = (year - (year % 10));
        var /** @type {?} */ end = start + 9;
        // create an array containing all the numbers between the start and end points
        return { start: start, end: end, range: range(start, end) };
    };
    YearViewService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    YearViewService.ctorParameters = function () { return [
        { type: DateTimePickerService, },
    ]; };
    return YearViewService;
}());
export { YearViewService };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhci12aWV3LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9kYXRlLXRpbWUtcGlja2VyL3llYXItdmlldy95ZWFyLXZpZXcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFJLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMzRixPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLDJCQUEyQixDQUFDOztJQVl2RCx5QkFBb0IsV0FBa0M7UUFBdEQsaUJBUUM7UUFSbUIsZ0JBQVcsR0FBWCxXQUFXLENBQXVCO3FCQVA5QyxJQUFJLGVBQWUsQ0FBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDeEMsSUFBSSxlQUFlLENBQVMsSUFBSSxDQUFDO3FCQUVwQixJQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRTs2QkFFeEIsSUFBSSxZQUFZLEVBQUU7UUFHdEMscUJBQU0sSUFBSSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFDO1FBRTlFLHFCQUFNLEtBQUssR0FBRyxXQUFXLENBQUMsWUFBWTthQUNqQyxTQUFTLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLEtBQUsscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUF6RixDQUF5RixDQUFDLENBQUM7UUFFcEgsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDakM7Ozs7SUFFRCxxQ0FBVzs7O0lBQVg7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3BDOzs7OztJQUVELGtDQUFROzs7O0lBQVIsVUFBUyxJQUFZO1FBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDN0I7Ozs7SUFFRCw0Q0FBa0I7OztJQUFsQjtRQUNJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQztLQUN4Qzs7OztJQUVELHdDQUFjOzs7SUFBZDtRQUNJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQztLQUN4Qzs7Ozs7SUFFTyx3Q0FBYzs7OztjQUFDLElBQXlCOztRQUF6QixxQkFBQSxFQUFBLE9BQWUsSUFBSSxDQUFDLEtBQUs7UUFFNUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7O1FBR2xCLHFCQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXBDLHFCQUFNLFdBQVcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDOztRQUc3QyxxQkFBTSxLQUFLLEdBQW1CLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUEsS0FBSztZQUNoRCxNQUFNLENBQUM7Z0JBQ0gsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsYUFBYSxFQUFFLEtBQUssS0FBSyxXQUFXO2dCQUNwQyxZQUFZLEVBQUUsS0FBSyxLQUFLLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUs7YUFDdkQsQ0FBQztTQUNMLENBQUMsQ0FBQzs7UUFHSCxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7O1FBRzlELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7OztJQU0vQixtQ0FBUzs7Ozs7Y0FBQyxJQUFZOztRQUcxQixxQkFBTSxLQUFLLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuQyxxQkFBTSxHQUFHLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQzs7UUFHdEIsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUM7OztnQkF4RW5FLFVBQVU7Ozs7Z0JBSHFCLHFCQUFxQjs7MEJBRnJEOztTQU1hLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0ICwgIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VySGVhZGVyRXZlbnQsIERhdGVUaW1lUGlja2VyU2VydmljZSB9IGZyb20gJy4uL2RhdGUtdGltZS1waWNrZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IGdyaWRpZnksIHJhbmdlIH0gZnJvbSAnLi4vZGF0ZS10aW1lLXBpY2tlci51dGlscyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBZZWFyVmlld1NlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG5cclxuICAgIGdyaWQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxZZWFyVmlld0l0ZW1bXVtdPihbW11dKTtcclxuICAgIGZvY3VzZWQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+KG51bGwpO1xyXG5cclxuICAgIHByaXZhdGUgX3llYXI6IG51bWJlciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgICBwcml2YXRlIF9zdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGF0ZXBpY2tlcjogRGF0ZVRpbWVQaWNrZXJTZXJ2aWNlKSB7XHJcbiAgICAgICAgY29uc3QgeWVhciA9IF9kYXRlcGlja2VyLnllYXIkLnN1YnNjcmliZShfeWVhciA9PiB0aGlzLmNyZWF0ZVllYXJHcmlkKF95ZWFyKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGV2ZW50ID0gX2RhdGVwaWNrZXIuaGVhZGVyRXZlbnQkXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoX2V2ZW50ID0+IF9ldmVudCA9PT0gRGF0ZVBpY2tlckhlYWRlckV2ZW50Lk5leHQgPyB0aGlzLmdvVG9OZXh0RGVjYWRlKCkgOiB0aGlzLmdvVG9QcmV2aW91c0RlY2FkZSgpKTtcclxuXHJcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uLmFkZCh5ZWFyKTtcclxuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb24uYWRkKGV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRGb2N1cyh5ZWFyOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmZvY3VzZWQkLm5leHQoeWVhcik7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVZZWFyR3JpZCh5ZWFyKTtcclxuICAgIH1cclxuXHJcbiAgICBnb1RvUHJldmlvdXNEZWNhZGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVZZWFyR3JpZCh0aGlzLl95ZWFyIC0gMTApO1xyXG4gICAgfVxyXG5cclxuICAgIGdvVG9OZXh0RGVjYWRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlWWVhckdyaWQodGhpcy5feWVhciArIDEwKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZVllYXJHcmlkKHllYXI6IG51bWJlciA9IHRoaXMuX3llYXIpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5feWVhciA9IHllYXI7XHJcblxyXG4gICAgICAgIC8vIGdldCB0aGUgeWVhcnMgdG8gZGlzcGxheVxyXG4gICAgICAgIGNvbnN0IGRlY2FkZSA9IHRoaXMuZ2V0RGVjYWRlKHllYXIpO1xyXG5cclxuICAgICAgICBjb25zdCBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgICAgICAgLy8gcHJvZHVjZSBpdGVtcyBpbiB0aGUgY29ycmVjdCBmb3JtYXRcclxuICAgICAgICBjb25zdCBpdGVtczogWWVhclZpZXdJdGVtW10gPSBkZWNhZGUucmFuZ2UubWFwKF95ZWFyID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHllYXI6IF95ZWFyLFxyXG4gICAgICAgICAgICAgICAgaXNDdXJyZW50WWVhcjogX3llYXIgPT09IGN1cnJlbnRZZWFyLFxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmVZZWFyOiBfeWVhciA9PT0gdGhpcy5fZGF0ZXBpY2tlci55ZWFyJC52YWx1ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyB1cGRhdGUgdGhlIGhlYWRlciB0ZXh0XHJcbiAgICAgICAgdGhpcy5fZGF0ZXBpY2tlci5zZXRIZWFkZXIoZGVjYWRlLnN0YXJ0ICsgJyAtICcgKyBkZWNhZGUuZW5kKTtcclxuXHJcbiAgICAgICAgLy8gY3JlYXRlIHRoZSBncmlkXHJcbiAgICAgICAgdGhpcy5ncmlkJC5uZXh0KGdyaWRpZnkoaXRlbXMsIDQpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgeWVhcnMgaW4gdGhlIGN1cnJlbnQgZGVjYWRlIHRvIGRpc3BsYXlcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnZXREZWNhZGUoeWVhcjogbnVtYmVyKTogWWVhclJhbmdlIHtcclxuXHJcbiAgICAgICAgLy8gZmlndXJlIHRoZSBzdGFydCBhbmQgZW5kIHBvaW50c1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gKHllYXIgLSAoeWVhciAlIDEwKSk7XHJcbiAgICAgICAgY29uc3QgZW5kID0gc3RhcnQgKyA5O1xyXG5cclxuICAgICAgICAvLyBjcmVhdGUgYW4gYXJyYXkgY29udGFpbmluZyBhbGwgdGhlIG51bWJlcnMgYmV0d2VlbiB0aGUgc3RhcnQgYW5kIGVuZCBwb2ludHNcclxuICAgICAgICByZXR1cm4geyBzdGFydDogc3RhcnQsIGVuZDogZW5kLCByYW5nZTogcmFuZ2Uoc3RhcnQsIGVuZCkgfTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgWWVhclJhbmdlIHtcclxuICAgIHN0YXJ0OiBudW1iZXI7XHJcbiAgICBlbmQ6IG51bWJlcjtcclxuICAgIHJhbmdlOiBudW1iZXJbXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBZZWFyVmlld0l0ZW0ge1xyXG4gICAgeWVhcjogbnVtYmVyO1xyXG4gICAgaXNDdXJyZW50WWVhcjogYm9vbGVhbjtcclxuICAgIGlzQWN0aXZlWWVhcjogYm9vbGVhbjtcclxufSJdfQ==