/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { DatePickerMode, DateTimePickerService } from './date-time-picker.service';
import { dateComparator, timezoneComparator } from './date-time-picker.utils';
var DateTimePickerComponent = /** @class */ (function () {
    function DateTimePickerComponent(datepicker) {
        var _this = this;
        this.datepicker = datepicker;
        this.dateChange = new EventEmitter();
        this.timezoneChange = new EventEmitter();
        // expose enum to view
        this.DatePickerMode = DatePickerMode;
        this._subscription = new Subscription();
        var /** @type {?} */ valueChange = datepicker.selected$.pipe(distinctUntilChanged(dateComparator))
            .subscribe(function (date) { return _this.dateChange.emit(date); });
        var /** @type {?} */ timezoneChange = datepicker.timezone$.pipe(distinctUntilChanged(timezoneComparator))
            .subscribe(function (timezone) { return _this.timezoneChange.emit(timezone); });
    }
    Object.defineProperty(DateTimePickerComponent.prototype, "showDate", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.datepicker.showDate$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "showTime", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.datepicker.showTime$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "showTimezone", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.datepicker.showTimezone$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "showSeconds", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.datepicker.showSeconds$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "showMeridian", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.datepicker.showMeridian$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "showSpinners", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.datepicker.showSpinners$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "weekdays", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.datepicker.weekdays$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "nowBtnText", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.datepicker.nowBtnText$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "timezones", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.datepicker.timezones$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "date", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!dateComparator(value, this.datepicker.selected$.value)) {
                this.datepicker.selected$.next(new Date(value));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTimePickerComponent.prototype, "timezone", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.datepicker.timezone$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DateTimePickerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscription.unsubscribe();
    };
    /**
     * Change the date to the current date and time
     */
    /**
     * Change the date to the current date and time
     * @return {?}
     */
    DateTimePickerComponent.prototype.setToNow = /**
     * Change the date to the current date and time
     * @return {?}
     */
    function () {
        // set the date to the current moment
        this.datepicker.setDateToNow();
    };
    DateTimePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-date-time-picker',
                    template: "<div class=\"calendar-container\">\n\n  <ux-date-time-picker-header></ux-date-time-picker-header>\n\n  <ng-container *ngIf=\"datepicker.showDate$ | async\" [ngSwitch]=\"datepicker.mode$ | async\">\n\n      <!-- Display days in the current month -->\n      <ux-date-time-picker-day-view *ngSwitchCase=\"DatePickerMode.Day\"></ux-date-time-picker-day-view>\n\n      <!-- Display the months in the current year -->\n      <ux-date-time-picker-month-view *ngSwitchCase=\"DatePickerMode.Month\"></ux-date-time-picker-month-view>\n\n      <!-- Display a decade -->\n      <ux-date-time-picker-year-view *ngSwitchCase=\"DatePickerMode.Year\"></ux-date-time-picker-year-view>\n\n  </ng-container>\n\n  <!-- Display a Time Picker -->\n  <ux-date-time-picker-time-view *ngIf=\"datepicker.showTime$ | async\"></ux-date-time-picker-time-view>\n\n</div>\n\n<button class=\"now-button\" aria-label=\"Set date to now\" (click)=\"setToNow()\">{{ datepicker.nowBtnText$ | async }}</button>",
                    providers: [DateTimePickerService],
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    DateTimePickerComponent.ctorParameters = function () { return [
        { type: DateTimePickerService, },
    ]; };
    DateTimePickerComponent.propDecorators = {
        "showDate": [{ type: Input },],
        "showTime": [{ type: Input },],
        "showTimezone": [{ type: Input },],
        "showSeconds": [{ type: Input },],
        "showMeridian": [{ type: Input },],
        "showSpinners": [{ type: Input },],
        "weekdays": [{ type: Input },],
        "nowBtnText": [{ type: Input },],
        "timezones": [{ type: Input },],
        "dateChange": [{ type: Output },],
        "timezoneChange": [{ type: Output },],
        "date": [{ type: Input },],
        "timezone": [{ type: Input },],
    };
    return DateTimePickerComponent;
}());
export { DateTimePickerComponent };
function DateTimePickerComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    DateTimePickerComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    DateTimePickerComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    DateTimePickerComponent.propDecorators;
    /** @type {?} */
    DateTimePickerComponent.prototype._timezone;
    /** @type {?} */
    DateTimePickerComponent.prototype.dateChange;
    /** @type {?} */
    DateTimePickerComponent.prototype.timezoneChange;
    /** @type {?} */
    DateTimePickerComponent.prototype.DatePickerMode;
    /** @type {?} */
    DateTimePickerComponent.prototype._subscription;
    /** @type {?} */
    DateTimePickerComponent.prototype.datepicker;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10aW1lLXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9kYXRlLXRpbWUtcGlja2VyL2RhdGUtdGltZS1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxxQkFBcUIsRUFBMEIsTUFBTSw0QkFBNEIsQ0FBQztBQUMzRyxPQUFPLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0lBMkY1RSxpQ0FBbUIsVUFBaUM7UUFBcEQsaUJBTUM7UUFOa0IsZUFBVSxHQUFWLFVBQVUsQ0FBdUI7MEJBcEJULElBQUksWUFBWSxFQUFROzhCQUNGLElBQUksWUFBWSxFQUEwQjs7OEJBZTFGLGNBQWM7NkJBRVAsSUFBSSxZQUFZLEVBQUU7UUFHeEMscUJBQU0sV0FBVyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQ2hGLFNBQVMsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUExQixDQUEwQixDQUFDLENBQUM7UUFFakQscUJBQU0sY0FBYyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGtCQUFrQixDQUFDLENBQUM7YUFDdkYsU0FBUyxDQUFDLFVBQUMsUUFBZ0MsSUFBSyxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFsQyxDQUFrQyxDQUFDLENBQUM7S0FDeEY7MEJBL0RZLDZDQUFROzs7OztrQkFBQyxLQUFjO1lBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7MEJBRzNCLDZDQUFROzs7OztrQkFBQyxLQUFjO1lBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7MEJBRzNCLGlEQUFZOzs7OztrQkFBQyxLQUFjO1lBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7MEJBRy9CLGdEQUFXOzs7OztrQkFBQyxLQUFjO1lBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7MEJBRzlCLGlEQUFZOzs7OztrQkFBQyxLQUFjO1lBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7MEJBRy9CLGlEQUFZOzs7OztrQkFBQyxLQUFjO1lBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7MEJBRy9CLDZDQUFROzs7OztrQkFBQyxLQUFlO1lBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7MEJBRzNCLCtDQUFVOzs7OztrQkFBQyxLQUFhO1lBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7MEJBRzdCLDhDQUFTOzs7OztrQkFBQyxLQUErQjtZQUNwRCxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7OzBCQVFyQyx5Q0FBSTs7Ozs7a0JBQUMsS0FBVztZQUNsQixFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1RCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUNqRDs7Ozs7MEJBSUMsNkNBQVE7Ozs7O2tCQUFDLEtBQTZCO1lBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7Ozs7SUFnQnhDLDZDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDbEM7SUFFRDs7T0FFRzs7Ozs7SUFDSCwwQ0FBUTs7OztJQUFSOztRQUdFLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDaEM7O2dCQTVHRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsUUFBUSxFQUFFLDg4QkFzQitHO29CQUN6SCxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztvQkFDbEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQTlCd0IscUJBQXFCOzs7NkJBbUMzQyxLQUFLOzZCQUlMLEtBQUs7aUNBSUwsS0FBSztnQ0FJTCxLQUFLO2lDQUlMLEtBQUs7aUNBSUwsS0FBSzs2QkFJTCxLQUFLOytCQUlMLEtBQUs7OEJBSUwsS0FBSzsrQkFLTCxNQUFNO21DQUNOLE1BQU07eUJBRU4sS0FBSzs2QkFPTCxLQUFLOztrQ0FyRlI7O1NBa0NhLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPdXRwdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgRGF0ZVBpY2tlck1vZGUsIERhdGVUaW1lUGlja2VyU2VydmljZSwgRGF0ZVRpbWVQaWNrZXJUaW1lem9uZSB9IGZyb20gJy4vZGF0ZS10aW1lLXBpY2tlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgZGF0ZUNvbXBhcmF0b3IsIHRpbWV6b25lQ29tcGFyYXRvciB9IGZyb20gJy4vZGF0ZS10aW1lLXBpY2tlci51dGlscyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3V4LWRhdGUtdGltZS1waWNrZXInLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImNhbGVuZGFyLWNvbnRhaW5lclwiPlxyXG5cclxuICA8dXgtZGF0ZS10aW1lLXBpY2tlci1oZWFkZXI+PC91eC1kYXRlLXRpbWUtcGlja2VyLWhlYWRlcj5cclxuXHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImRhdGVwaWNrZXIuc2hvd0RhdGUkIHwgYXN5bmNcIiBbbmdTd2l0Y2hdPVwiZGF0ZXBpY2tlci5tb2RlJCB8IGFzeW5jXCI+XHJcblxyXG4gICAgICA8IS0tIERpc3BsYXkgZGF5cyBpbiB0aGUgY3VycmVudCBtb250aCAtLT5cclxuICAgICAgPHV4LWRhdGUtdGltZS1waWNrZXItZGF5LXZpZXcgKm5nU3dpdGNoQ2FzZT1cIkRhdGVQaWNrZXJNb2RlLkRheVwiPjwvdXgtZGF0ZS10aW1lLXBpY2tlci1kYXktdmlldz5cclxuXHJcbiAgICAgIDwhLS0gRGlzcGxheSB0aGUgbW9udGhzIGluIHRoZSBjdXJyZW50IHllYXIgLS0+XHJcbiAgICAgIDx1eC1kYXRlLXRpbWUtcGlja2VyLW1vbnRoLXZpZXcgKm5nU3dpdGNoQ2FzZT1cIkRhdGVQaWNrZXJNb2RlLk1vbnRoXCI+PC91eC1kYXRlLXRpbWUtcGlja2VyLW1vbnRoLXZpZXc+XHJcblxyXG4gICAgICA8IS0tIERpc3BsYXkgYSBkZWNhZGUgLS0+XHJcbiAgICAgIDx1eC1kYXRlLXRpbWUtcGlja2VyLXllYXItdmlldyAqbmdTd2l0Y2hDYXNlPVwiRGF0ZVBpY2tlck1vZGUuWWVhclwiPjwvdXgtZGF0ZS10aW1lLXBpY2tlci15ZWFyLXZpZXc+XHJcblxyXG4gIDwvbmctY29udGFpbmVyPlxyXG5cclxuICA8IS0tIERpc3BsYXkgYSBUaW1lIFBpY2tlciAtLT5cclxuICA8dXgtZGF0ZS10aW1lLXBpY2tlci10aW1lLXZpZXcgKm5nSWY9XCJkYXRlcGlja2VyLnNob3dUaW1lJCB8IGFzeW5jXCI+PC91eC1kYXRlLXRpbWUtcGlja2VyLXRpbWUtdmlldz5cclxuXHJcbjwvZGl2PlxyXG5cclxuPGJ1dHRvbiBjbGFzcz1cIm5vdy1idXR0b25cIiBhcmlhLWxhYmVsPVwiU2V0IGRhdGUgdG8gbm93XCIgKGNsaWNrKT1cInNldFRvTm93KClcIj57eyBkYXRlcGlja2VyLm5vd0J0blRleHQkIHwgYXN5bmMgfX08L2J1dHRvbj5gLFxyXG4gIHByb3ZpZGVyczogW0RhdGVUaW1lUGlja2VyU2VydmljZV0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGVUaW1lUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuXHJcbiAgcHJpdmF0ZSBfdGltZXpvbmU6IERhdGVUaW1lUGlja2VyVGltZXpvbmU7XHJcblxyXG4gIEBJbnB1dCgpIHNldCBzaG93RGF0ZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5kYXRlcGlja2VyLnNob3dEYXRlJC5uZXh0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIHNldCBzaG93VGltZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5kYXRlcGlja2VyLnNob3dUaW1lJC5uZXh0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIHNldCBzaG93VGltZXpvbmUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuZGF0ZXBpY2tlci5zaG93VGltZXpvbmUkLm5leHQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgc2V0IHNob3dTZWNvbmRzKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmRhdGVwaWNrZXIuc2hvd1NlY29uZHMkLm5leHQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgc2V0IHNob3dNZXJpZGlhbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5kYXRlcGlja2VyLnNob3dNZXJpZGlhbiQubmV4dCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBzZXQgc2hvd1NwaW5uZXJzKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmRhdGVwaWNrZXIuc2hvd1NwaW5uZXJzJC5uZXh0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIHNldCB3ZWVrZGF5cyh2YWx1ZTogc3RyaW5nW10pIHtcclxuICAgIHRoaXMuZGF0ZXBpY2tlci53ZWVrZGF5cyQubmV4dCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBzZXQgbm93QnRuVGV4dCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmRhdGVwaWNrZXIubm93QnRuVGV4dCQubmV4dCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBzZXQgdGltZXpvbmVzKHZhbHVlOiBEYXRlVGltZVBpY2tlclRpbWV6b25lW10pIHtcclxuICAgIHRoaXMuZGF0ZXBpY2tlci50aW1lem9uZXMkLm5leHQodmFsdWUpO1xyXG4gIH1cclxuXHJcblxyXG4gIEBPdXRwdXQoKSBkYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KCk7XHJcbiAgQE91dHB1dCgpIHRpbWV6b25lQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZVRpbWVQaWNrZXJUaW1lem9uZT4gPSBuZXcgRXZlbnRFbWl0dGVyPERhdGVUaW1lUGlja2VyVGltZXpvbmU+KCk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGRhdGUodmFsdWU6IERhdGUpIHtcclxuICAgIGlmICghZGF0ZUNvbXBhcmF0b3IodmFsdWUsIHRoaXMuZGF0ZXBpY2tlci5zZWxlY3RlZCQudmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuZGF0ZXBpY2tlci5zZWxlY3RlZCQubmV4dChuZXcgRGF0ZSh2YWx1ZSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgdGltZXpvbmUodmFsdWU6IERhdGVUaW1lUGlja2VyVGltZXpvbmUpIHtcclxuICAgIHRoaXMuZGF0ZXBpY2tlci50aW1lem9uZSQubmV4dCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvLyBleHBvc2UgZW51bSB0byB2aWV3XHJcbiAgRGF0ZVBpY2tlck1vZGUgPSBEYXRlUGlja2VyTW9kZTtcclxuXHJcbiAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGF0ZXBpY2tlcjogRGF0ZVRpbWVQaWNrZXJTZXJ2aWNlKSB7XHJcbiAgICBjb25zdCB2YWx1ZUNoYW5nZSA9IGRhdGVwaWNrZXIuc2VsZWN0ZWQkLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoZGF0ZUNvbXBhcmF0b3IpKVxyXG4gICAgICAuc3Vic2NyaWJlKGRhdGUgPT4gdGhpcy5kYXRlQ2hhbmdlLmVtaXQoZGF0ZSkpO1xyXG5cclxuICAgIGNvbnN0IHRpbWV6b25lQ2hhbmdlID0gZGF0ZXBpY2tlci50aW1lem9uZSQucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCh0aW1lem9uZUNvbXBhcmF0b3IpKVxyXG4gICAgICAuc3Vic2NyaWJlKCh0aW1lem9uZTogRGF0ZVRpbWVQaWNrZXJUaW1lem9uZSkgPT4gdGhpcy50aW1lem9uZUNoYW5nZS5lbWl0KHRpbWV6b25lKSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hhbmdlIHRoZSBkYXRlIHRvIHRoZSBjdXJyZW50IGRhdGUgYW5kIHRpbWVcclxuICAgKi9cclxuICBzZXRUb05vdygpOiB2b2lkIHtcclxuXHJcbiAgICAvLyBzZXQgdGhlIGRhdGUgdG8gdGhlIGN1cnJlbnQgbW9tZW50XHJcbiAgICB0aGlzLmRhdGVwaWNrZXIuc2V0RGF0ZVRvTm93KCk7XHJcbiAgfVxyXG59Il19