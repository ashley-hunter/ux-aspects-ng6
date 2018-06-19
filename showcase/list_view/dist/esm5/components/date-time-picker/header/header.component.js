/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { map } from 'rxjs/operators';
import { DatePickerMode, DateTimePickerService } from '../date-time-picker.service';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(datepicker) {
        this.datepicker = datepicker;
        this.canAscend$ = this.datepicker.mode$.pipe(map(function (mode) { return mode !== DatePickerMode.Year; }));
        this.mode$ = this.datepicker.mode$.pipe(map(function (mode) {
            switch (mode) {
                case DatePickerMode.Day:
                    return 'Day';
                case DatePickerMode.Month:
                    return 'Month';
                case DatePickerMode.Year:
                    return 'Year';
            }
        }));
        this.headerAria$ = this.datepicker.mode$.pipe(map(function (mode) {
            switch (mode) {
                case DatePickerMode.Day:
                    return 'Switch to show months in the year';
                case DatePickerMode.Month:
                    return 'Switch to show years in the decade';
                case DatePickerMode.Year:
                    return '';
            }
        }));
        this.previousAria$ = this.datepicker.mode$.pipe(map(function (mode) {
            switch (mode) {
                case DatePickerMode.Day:
                    return 'Previous month';
                case DatePickerMode.Month:
                    return 'Previous year';
                case DatePickerMode.Year:
                    return 'Previous decade';
            }
        }));
        this.nextAria$ = this.datepicker.mode$.pipe(map(function (mode) {
            switch (mode) {
                case DatePickerMode.Day:
                    return 'Next month';
                case DatePickerMode.Month:
                    return 'Next year';
                case DatePickerMode.Year:
                    return 'Next decade';
            }
        }));
    }
    /**
     * @return {?}
     */
    HeaderComponent.prototype.previous = /**
     * @return {?}
     */
    function () {
        this.datepicker.goToPrevious();
    };
    /**
     * @return {?}
     */
    HeaderComponent.prototype.ascend = /**
     * @return {?}
     */
    function () {
        this.datepicker.goToParentMode();
    };
    /**
     * @return {?}
     */
    HeaderComponent.prototype.next = /**
     * @return {?}
     */
    function () {
        this.datepicker.goToNext();
    };
    HeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-date-time-picker-header',
                    template: "<header class=\"header\">\n\n  <button class=\"header-navigation\"\n          (click)=\"previous(); $event.stopPropagation()\"\n          [attr.aria-label]=\"previousAria$ | async\"\n          tabindex=\"0\">\n\n    <i class=\"hpe-icon hpe-previous\"></i>\n  </button>\n\n  <button class=\"header-title\"\n          [attr.aria-label]=\"headerAria$ | async\"\n          [class.active]=\"canAscend$ | async\"\n          (click)=\"ascend(); $event.stopPropagation()\"\n          [tabindex]=\"(canAscend$ | async) ? 0 : -1\">\n       {{ datepicker.header$ | async }}\n  </button>\n\n  <button class=\"header-navigation\"\n          (click)=\"next(); $event.stopPropagation()\"\n          [attr.aria-label]=\"nextAria$ | async\"\n          tabindex=\"0\">\n\n    <i class=\"hpe-icon hpe-next\"></i>\n  </button>\n</header>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    HeaderComponent.ctorParameters = function () { return [
        { type: DateTimePickerService, },
    ]; };
    return HeaderComponent;
}());
export { HeaderComponent };
function HeaderComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    HeaderComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    HeaderComponent.ctorParameters;
    /** @type {?} */
    HeaderComponent.prototype.canAscend$;
    /** @type {?} */
    HeaderComponent.prototype.mode$;
    /** @type {?} */
    HeaderComponent.prototype.headerAria$;
    /** @type {?} */
    HeaderComponent.prototype.previousAria$;
    /** @type {?} */
    HeaderComponent.prototype.nextAria$;
    /** @type {?} */
    HeaderComponent.prototype.datepicker;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2RhdGUtdGltZS1waWNrZXIvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxjQUFjLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7SUFnRmhGLHlCQUFtQixVQUFpQztRQUFqQyxlQUFVLEdBQVYsVUFBVSxDQUF1QjswQkE5Q2xCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLEtBQUssY0FBYyxDQUFDLElBQUksRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDO3FCQUUzRSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSTtZQUMzRCxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNYLEtBQUssY0FBYyxDQUFDLEdBQUc7b0JBQ25CLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQ2pCLEtBQUssY0FBYyxDQUFDLEtBQUs7b0JBQ3JCLE1BQU0sQ0FBQyxPQUFPLENBQUM7Z0JBQ25CLEtBQUssY0FBYyxDQUFDLElBQUk7b0JBQ3BCLE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDckI7U0FDSixDQUFDLENBQUM7MkJBRStCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJO1lBQ2pFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsS0FBSyxjQUFjLENBQUMsR0FBRztvQkFDbkIsTUFBTSxDQUFDLG1DQUFtQyxDQUFDO2dCQUMvQyxLQUFLLGNBQWMsQ0FBQyxLQUFLO29CQUNyQixNQUFNLENBQUMsb0NBQW9DLENBQUM7Z0JBQ2hELEtBQUssY0FBYyxDQUFDLElBQUk7b0JBQ3BCLE1BQU0sQ0FBQyxFQUFFLENBQUM7YUFDakI7U0FDSixDQUFDLENBQUM7NkJBRWlDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJO1lBQ25FLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsS0FBSyxjQUFjLENBQUMsR0FBRztvQkFDbkIsTUFBTSxDQUFDLGdCQUFnQixDQUFDO2dCQUM1QixLQUFLLGNBQWMsQ0FBQyxLQUFLO29CQUNyQixNQUFNLENBQUMsZUFBZSxDQUFDO2dCQUMzQixLQUFLLGNBQWMsQ0FBQyxJQUFJO29CQUNwQixNQUFNLENBQUMsaUJBQWlCLENBQUM7YUFDaEM7U0FDSixDQUFDLENBQUM7eUJBRTZCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJO1lBQy9ELE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsS0FBSyxjQUFjLENBQUMsR0FBRztvQkFDbkIsTUFBTSxDQUFDLFlBQVksQ0FBQztnQkFDeEIsS0FBSyxjQUFjLENBQUMsS0FBSztvQkFDckIsTUFBTSxDQUFDLFdBQVcsQ0FBQztnQkFDdkIsS0FBSyxjQUFjLENBQUMsSUFBSTtvQkFDcEIsTUFBTSxDQUFDLGFBQWEsQ0FBQzthQUM1QjtTQUNKLENBQUMsQ0FBQztLQUVzRDs7OztJQUV6RCxrQ0FBUTs7O0lBQVI7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ2xDOzs7O0lBRUQsZ0NBQU07OztJQUFOO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztLQUNwQzs7OztJQUVELDhCQUFJOzs7SUFBSjtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDOUI7O2dCQTFGSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMsUUFBUSxFQUFFLG16QkF5Qko7b0JBQ04sZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2xEOzs7O2dCQS9Cd0IscUJBQXFCOzswQkFIOUM7O1NBbUNhLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyTW9kZSwgRGF0ZVRpbWVQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0ZS10aW1lLXBpY2tlci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd1eC1kYXRlLXRpbWUtcGlja2VyLWhlYWRlcicsXHJcbiAgICB0ZW1wbGF0ZTogYDxoZWFkZXIgY2xhc3M9XCJoZWFkZXJcIj5cclxuXHJcbiAgPGJ1dHRvbiBjbGFzcz1cImhlYWRlci1uYXZpZ2F0aW9uXCJcclxuICAgICAgICAgIChjbGljayk9XCJwcmV2aW91cygpOyAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIlxyXG4gICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJwcmV2aW91c0FyaWEkIHwgYXN5bmNcIlxyXG4gICAgICAgICAgdGFiaW5kZXg9XCIwXCI+XHJcblxyXG4gICAgPGkgY2xhc3M9XCJocGUtaWNvbiBocGUtcHJldmlvdXNcIj48L2k+XHJcbiAgPC9idXR0b24+XHJcblxyXG4gIDxidXR0b24gY2xhc3M9XCJoZWFkZXItdGl0bGVcIlxyXG4gICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJoZWFkZXJBcmlhJCB8IGFzeW5jXCJcclxuICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwiY2FuQXNjZW5kJCB8IGFzeW5jXCJcclxuICAgICAgICAgIChjbGljayk9XCJhc2NlbmQoKTsgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCJcclxuICAgICAgICAgIFt0YWJpbmRleF09XCIoY2FuQXNjZW5kJCB8IGFzeW5jKSA/IDAgOiAtMVwiPlxyXG4gICAgICAge3sgZGF0ZXBpY2tlci5oZWFkZXIkIHwgYXN5bmMgfX1cclxuICA8L2J1dHRvbj5cclxuXHJcbiAgPGJ1dHRvbiBjbGFzcz1cImhlYWRlci1uYXZpZ2F0aW9uXCJcclxuICAgICAgICAgIChjbGljayk9XCJuZXh0KCk7ICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiXHJcbiAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cIm5leHRBcmlhJCB8IGFzeW5jXCJcclxuICAgICAgICAgIHRhYmluZGV4PVwiMFwiPlxyXG5cclxuICAgIDxpIGNsYXNzPVwiaHBlLWljb24gaHBlLW5leHRcIj48L2k+XHJcbiAgPC9idXR0b24+XHJcbjwvaGVhZGVyPmAsXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IHtcclxuXHJcbiAgICBjYW5Bc2NlbmQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5kYXRlcGlja2VyLm1vZGUkLnBpcGUobWFwKG1vZGUgPT4gbW9kZSAhPT0gRGF0ZVBpY2tlck1vZGUuWWVhcikpO1xyXG4gICAgXHJcbiAgICBtb2RlJDogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy5kYXRlcGlja2VyLm1vZGUkLnBpcGUobWFwKG1vZGUgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAobW9kZSkge1xyXG4gICAgICAgICAgICBjYXNlIERhdGVQaWNrZXJNb2RlLkRheTpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnRGF5JztcclxuICAgICAgICAgICAgY2FzZSBEYXRlUGlja2VyTW9kZS5Nb250aDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnTW9udGgnO1xyXG4gICAgICAgICAgICBjYXNlIERhdGVQaWNrZXJNb2RlLlllYXI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1llYXInO1xyXG4gICAgICAgIH1cclxuICAgIH0pKTtcclxuXHJcbiAgICBoZWFkZXJBcmlhJDogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy5kYXRlcGlja2VyLm1vZGUkLnBpcGUobWFwKG1vZGUgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAobW9kZSkge1xyXG4gICAgICAgICAgICBjYXNlIERhdGVQaWNrZXJNb2RlLkRheTpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnU3dpdGNoIHRvIHNob3cgbW9udGhzIGluIHRoZSB5ZWFyJztcclxuICAgICAgICAgICAgY2FzZSBEYXRlUGlja2VyTW9kZS5Nb250aDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnU3dpdGNoIHRvIHNob3cgeWVhcnMgaW4gdGhlIGRlY2FkZSc7XHJcbiAgICAgICAgICAgIGNhc2UgRGF0ZVBpY2tlck1vZGUuWWVhcjpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcbiAgICB9KSk7XHJcblxyXG4gICAgcHJldmlvdXNBcmlhJDogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy5kYXRlcGlja2VyLm1vZGUkLnBpcGUobWFwKG1vZGUgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAobW9kZSkge1xyXG4gICAgICAgICAgICBjYXNlIERhdGVQaWNrZXJNb2RlLkRheTpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnUHJldmlvdXMgbW9udGgnO1xyXG4gICAgICAgICAgICBjYXNlIERhdGVQaWNrZXJNb2RlLk1vbnRoOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdQcmV2aW91cyB5ZWFyJztcclxuICAgICAgICAgICAgY2FzZSBEYXRlUGlja2VyTW9kZS5ZZWFyOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdQcmV2aW91cyBkZWNhZGUnO1xyXG4gICAgICAgIH1cclxuICAgIH0pKTtcclxuXHJcbiAgICBuZXh0QXJpYSQ6IE9ic2VydmFibGU8c3RyaW5nPiA9IHRoaXMuZGF0ZXBpY2tlci5tb2RlJC5waXBlKG1hcChtb2RlID0+IHtcclxuICAgICAgICBzd2l0Y2ggKG1vZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBEYXRlUGlja2VyTW9kZS5EYXk6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ05leHQgbW9udGgnO1xyXG4gICAgICAgICAgICBjYXNlIERhdGVQaWNrZXJNb2RlLk1vbnRoOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdOZXh0IHllYXInO1xyXG4gICAgICAgICAgICBjYXNlIERhdGVQaWNrZXJNb2RlLlllYXI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ05leHQgZGVjYWRlJztcclxuICAgICAgICB9XHJcbiAgICB9KSk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGRhdGVwaWNrZXI6IERhdGVUaW1lUGlja2VyU2VydmljZSkgeyB9XHJcblxyXG4gICAgcHJldmlvdXMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kYXRlcGlja2VyLmdvVG9QcmV2aW91cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzY2VuZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRhdGVwaWNrZXIuZ29Ub1BhcmVudE1vZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZXh0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGF0ZXBpY2tlci5nb1RvTmV4dCgpO1xyXG4gICAgfVxyXG59Il19