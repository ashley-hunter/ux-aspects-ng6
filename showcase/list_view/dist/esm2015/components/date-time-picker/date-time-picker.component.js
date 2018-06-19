/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { DatePickerMode, DateTimePickerService } from './date-time-picker.service';
import { dateComparator, timezoneComparator } from './date-time-picker.utils';
export class DateTimePickerComponent {
    /**
     * @param {?} datepicker
     */
    constructor(datepicker) {
        this.datepicker = datepicker;
        this.dateChange = new EventEmitter();
        this.timezoneChange = new EventEmitter();
        // expose enum to view
        this.DatePickerMode = DatePickerMode;
        this._subscription = new Subscription();
        const /** @type {?} */ valueChange = datepicker.selected$.pipe(distinctUntilChanged(dateComparator))
            .subscribe(date => this.dateChange.emit(date));
        const /** @type {?} */ timezoneChange = datepicker.timezone$.pipe(distinctUntilChanged(timezoneComparator))
            .subscribe((timezone) => this.timezoneChange.emit(timezone));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set showDate(value) {
        this.datepicker.showDate$.next(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set showTime(value) {
        this.datepicker.showTime$.next(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set showTimezone(value) {
        this.datepicker.showTimezone$.next(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set showSeconds(value) {
        this.datepicker.showSeconds$.next(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set showMeridian(value) {
        this.datepicker.showMeridian$.next(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set showSpinners(value) {
        this.datepicker.showSpinners$.next(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set weekdays(value) {
        this.datepicker.weekdays$.next(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nowBtnText(value) {
        this.datepicker.nowBtnText$.next(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set timezones(value) {
        this.datepicker.timezones$.next(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set date(value) {
        if (!dateComparator(value, this.datepicker.selected$.value)) {
            this.datepicker.selected$.next(new Date(value));
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set timezone(value) {
        this.datepicker.timezone$.next(value);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
    /**
     * Change the date to the current date and time
     * @return {?}
     */
    setToNow() {
        // set the date to the current moment
        this.datepicker.setDateToNow();
    }
}
DateTimePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-date-time-picker',
                template: `<div class="calendar-container">

  <ux-date-time-picker-header></ux-date-time-picker-header>

  <ng-container *ngIf="datepicker.showDate$ | async" [ngSwitch]="datepicker.mode$ | async">

      <!-- Display days in the current month -->
      <ux-date-time-picker-day-view *ngSwitchCase="DatePickerMode.Day"></ux-date-time-picker-day-view>

      <!-- Display the months in the current year -->
      <ux-date-time-picker-month-view *ngSwitchCase="DatePickerMode.Month"></ux-date-time-picker-month-view>

      <!-- Display a decade -->
      <ux-date-time-picker-year-view *ngSwitchCase="DatePickerMode.Year"></ux-date-time-picker-year-view>

  </ng-container>

  <!-- Display a Time Picker -->
  <ux-date-time-picker-time-view *ngIf="datepicker.showTime$ | async"></ux-date-time-picker-time-view>

</div>

<button class="now-button" aria-label="Set date to now" (click)="setToNow()">{{ datepicker.nowBtnText$ | async }}</button>`,
                providers: [DateTimePickerService],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
DateTimePickerComponent.ctorParameters = () => [
    { type: DateTimePickerService, },
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10aW1lLXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9kYXRlLXRpbWUtcGlja2VyL2RhdGUtdGltZS1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxxQkFBcUIsRUFBMEIsTUFBTSw0QkFBNEIsQ0FBQztBQUMzRyxPQUFPLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUE4QjlFLE1BQU07Ozs7SUE2REosWUFBbUIsVUFBaUM7UUFBakMsZUFBVSxHQUFWLFVBQVUsQ0FBdUI7MEJBcEJULElBQUksWUFBWSxFQUFROzhCQUNGLElBQUksWUFBWSxFQUEwQjs7OEJBZTFGLGNBQWM7NkJBRVAsSUFBSSxZQUFZLEVBQUU7UUFHeEMsdUJBQU0sV0FBVyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQ2hGLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFakQsdUJBQU0sY0FBYyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGtCQUFrQixDQUFDLENBQUM7YUFDdkYsU0FBUyxDQUFDLENBQUMsUUFBZ0MsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztLQUN4Rjs7Ozs7UUEvRFksUUFBUSxDQUFDLEtBQWM7UUFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7Ozs7UUFHM0IsUUFBUSxDQUFDLEtBQWM7UUFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7Ozs7UUFHM0IsWUFBWSxDQUFDLEtBQWM7UUFDdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7Ozs7UUFHL0IsV0FBVyxDQUFDLEtBQWM7UUFDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7Ozs7UUFHOUIsWUFBWSxDQUFDLEtBQWM7UUFDdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7Ozs7UUFHL0IsWUFBWSxDQUFDLEtBQWM7UUFDdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7Ozs7UUFHL0IsUUFBUSxDQUFDLEtBQWU7UUFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7Ozs7UUFHM0IsVUFBVSxDQUFDLEtBQWE7UUFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7Ozs7UUFHN0IsU0FBUyxDQUFDLEtBQStCO1FBQ3BELElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7O1FBUXJDLElBQUksQ0FBQyxLQUFXO1FBQ2xCLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDakQ7Ozs7OztRQUlDLFFBQVEsQ0FBQyxLQUE2QjtRQUN4QyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7O0lBZ0J4QyxXQUFXO1FBQ1QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUNsQzs7Ozs7SUFLRCxRQUFROztRQUdOLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDaEM7OztZQTVHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJIQXNCK0c7Z0JBQ3pILFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO2dCQUNsQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQTlCd0IscUJBQXFCOzs7eUJBbUMzQyxLQUFLO3lCQUlMLEtBQUs7NkJBSUwsS0FBSzs0QkFJTCxLQUFLOzZCQUlMLEtBQUs7NkJBSUwsS0FBSzt5QkFJTCxLQUFLOzJCQUlMLEtBQUs7MEJBSUwsS0FBSzsyQkFLTCxNQUFNOytCQUNOLE1BQU07cUJBRU4sS0FBSzt5QkFPTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkRlc3Ryb3ksIE91dHB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyTW9kZSwgRGF0ZVRpbWVQaWNrZXJTZXJ2aWNlLCBEYXRlVGltZVBpY2tlclRpbWV6b25lIH0gZnJvbSAnLi9kYXRlLXRpbWUtcGlja2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBkYXRlQ29tcGFyYXRvciwgdGltZXpvbmVDb21wYXJhdG9yIH0gZnJvbSAnLi9kYXRlLXRpbWUtcGlja2VyLnV0aWxzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndXgtZGF0ZS10aW1lLXBpY2tlcicsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiY2FsZW5kYXItY29udGFpbmVyXCI+XHJcblxyXG4gIDx1eC1kYXRlLXRpbWUtcGlja2VyLWhlYWRlcj48L3V4LWRhdGUtdGltZS1waWNrZXItaGVhZGVyPlxyXG5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiZGF0ZXBpY2tlci5zaG93RGF0ZSQgfCBhc3luY1wiIFtuZ1N3aXRjaF09XCJkYXRlcGlja2VyLm1vZGUkIHwgYXN5bmNcIj5cclxuXHJcbiAgICAgIDwhLS0gRGlzcGxheSBkYXlzIGluIHRoZSBjdXJyZW50IG1vbnRoIC0tPlxyXG4gICAgICA8dXgtZGF0ZS10aW1lLXBpY2tlci1kYXktdmlldyAqbmdTd2l0Y2hDYXNlPVwiRGF0ZVBpY2tlck1vZGUuRGF5XCI+PC91eC1kYXRlLXRpbWUtcGlja2VyLWRheS12aWV3PlxyXG5cclxuICAgICAgPCEtLSBEaXNwbGF5IHRoZSBtb250aHMgaW4gdGhlIGN1cnJlbnQgeWVhciAtLT5cclxuICAgICAgPHV4LWRhdGUtdGltZS1waWNrZXItbW9udGgtdmlldyAqbmdTd2l0Y2hDYXNlPVwiRGF0ZVBpY2tlck1vZGUuTW9udGhcIj48L3V4LWRhdGUtdGltZS1waWNrZXItbW9udGgtdmlldz5cclxuXHJcbiAgICAgIDwhLS0gRGlzcGxheSBhIGRlY2FkZSAtLT5cclxuICAgICAgPHV4LWRhdGUtdGltZS1waWNrZXIteWVhci12aWV3ICpuZ1N3aXRjaENhc2U9XCJEYXRlUGlja2VyTW9kZS5ZZWFyXCI+PC91eC1kYXRlLXRpbWUtcGlja2VyLXllYXItdmlldz5cclxuXHJcbiAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gIDwhLS0gRGlzcGxheSBhIFRpbWUgUGlja2VyIC0tPlxyXG4gIDx1eC1kYXRlLXRpbWUtcGlja2VyLXRpbWUtdmlldyAqbmdJZj1cImRhdGVwaWNrZXIuc2hvd1RpbWUkIHwgYXN5bmNcIj48L3V4LWRhdGUtdGltZS1waWNrZXItdGltZS12aWV3PlxyXG5cclxuPC9kaXY+XHJcblxyXG48YnV0dG9uIGNsYXNzPVwibm93LWJ1dHRvblwiIGFyaWEtbGFiZWw9XCJTZXQgZGF0ZSB0byBub3dcIiAoY2xpY2spPVwic2V0VG9Ob3coKVwiPnt7IGRhdGVwaWNrZXIubm93QnRuVGV4dCQgfCBhc3luYyB9fTwvYnV0dG9uPmAsXHJcbiAgcHJvdmlkZXJzOiBbRGF0ZVRpbWVQaWNrZXJTZXJ2aWNlXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZVRpbWVQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG5cclxuICBwcml2YXRlIF90aW1lem9uZTogRGF0ZVRpbWVQaWNrZXJUaW1lem9uZTtcclxuXHJcbiAgQElucHV0KCkgc2V0IHNob3dEYXRlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmRhdGVwaWNrZXIuc2hvd0RhdGUkLm5leHQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgc2V0IHNob3dUaW1lKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmRhdGVwaWNrZXIuc2hvd1RpbWUkLm5leHQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgc2V0IHNob3dUaW1lem9uZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5kYXRlcGlja2VyLnNob3dUaW1lem9uZSQubmV4dCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBzZXQgc2hvd1NlY29uZHModmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuZGF0ZXBpY2tlci5zaG93U2Vjb25kcyQubmV4dCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBzZXQgc2hvd01lcmlkaWFuKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmRhdGVwaWNrZXIuc2hvd01lcmlkaWFuJC5uZXh0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIHNldCBzaG93U3Bpbm5lcnModmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuZGF0ZXBpY2tlci5zaG93U3Bpbm5lcnMkLm5leHQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgc2V0IHdlZWtkYXlzKHZhbHVlOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpcy5kYXRlcGlja2VyLndlZWtkYXlzJC5uZXh0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIHNldCBub3dCdG5UZXh0KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZGF0ZXBpY2tlci5ub3dCdG5UZXh0JC5uZXh0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIHNldCB0aW1lem9uZXModmFsdWU6IERhdGVUaW1lUGlja2VyVGltZXpvbmVbXSkge1xyXG4gICAgdGhpcy5kYXRlcGlja2VyLnRpbWV6b25lcyQubmV4dCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgQE91dHB1dCgpIGRhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4oKTtcclxuICBAT3V0cHV0KCkgdGltZXpvbmVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlVGltZVBpY2tlclRpbWV6b25lPiA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZVRpbWVQaWNrZXJUaW1lem9uZT4oKTtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgZGF0ZSh2YWx1ZTogRGF0ZSkge1xyXG4gICAgaWYgKCFkYXRlQ29tcGFyYXRvcih2YWx1ZSwgdGhpcy5kYXRlcGlja2VyLnNlbGVjdGVkJC52YWx1ZSkpIHtcclxuICAgICAgdGhpcy5kYXRlcGlja2VyLnNlbGVjdGVkJC5uZXh0KG5ldyBEYXRlKHZhbHVlKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCB0aW1lem9uZSh2YWx1ZTogRGF0ZVRpbWVQaWNrZXJUaW1lem9uZSkge1xyXG4gICAgdGhpcy5kYXRlcGlja2VyLnRpbWV6b25lJC5uZXh0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8vIGV4cG9zZSBlbnVtIHRvIHZpZXdcclxuICBEYXRlUGlja2VyTW9kZSA9IERhdGVQaWNrZXJNb2RlO1xyXG5cclxuICBwcml2YXRlIF9zdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkYXRlcGlja2VyOiBEYXRlVGltZVBpY2tlclNlcnZpY2UpIHtcclxuICAgIGNvbnN0IHZhbHVlQ2hhbmdlID0gZGF0ZXBpY2tlci5zZWxlY3RlZCQucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZChkYXRlQ29tcGFyYXRvcikpXHJcbiAgICAgIC5zdWJzY3JpYmUoZGF0ZSA9PiB0aGlzLmRhdGVDaGFuZ2UuZW1pdChkYXRlKSk7XHJcblxyXG4gICAgY29uc3QgdGltZXpvbmVDaGFuZ2UgPSBkYXRlcGlja2VyLnRpbWV6b25lJC5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKHRpbWV6b25lQ29tcGFyYXRvcikpXHJcbiAgICAgIC5zdWJzY3JpYmUoKHRpbWV6b25lOiBEYXRlVGltZVBpY2tlclRpbWV6b25lKSA9PiB0aGlzLnRpbWV6b25lQ2hhbmdlLmVtaXQodGltZXpvbmUpKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGFuZ2UgdGhlIGRhdGUgdG8gdGhlIGN1cnJlbnQgZGF0ZSBhbmQgdGltZVxyXG4gICAqL1xyXG4gIHNldFRvTm93KCk6IHZvaWQge1xyXG5cclxuICAgIC8vIHNldCB0aGUgZGF0ZSB0byB0aGUgY3VycmVudCBtb21lbnRcclxuICAgIHRoaXMuZGF0ZXBpY2tlci5zZXREYXRlVG9Ob3coKTtcclxuICB9XHJcbn0iXX0=