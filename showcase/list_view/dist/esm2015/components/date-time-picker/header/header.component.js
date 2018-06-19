/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { map } from 'rxjs/operators';
import { DatePickerMode, DateTimePickerService } from '../date-time-picker.service';
export class HeaderComponent {
    /**
     * @param {?} datepicker
     */
    constructor(datepicker) {
        this.datepicker = datepicker;
        this.canAscend$ = this.datepicker.mode$.pipe(map(mode => mode !== DatePickerMode.Year));
        this.mode$ = this.datepicker.mode$.pipe(map(mode => {
            switch (mode) {
                case DatePickerMode.Day:
                    return 'Day';
                case DatePickerMode.Month:
                    return 'Month';
                case DatePickerMode.Year:
                    return 'Year';
            }
        }));
        this.headerAria$ = this.datepicker.mode$.pipe(map(mode => {
            switch (mode) {
                case DatePickerMode.Day:
                    return 'Switch to show months in the year';
                case DatePickerMode.Month:
                    return 'Switch to show years in the decade';
                case DatePickerMode.Year:
                    return '';
            }
        }));
        this.previousAria$ = this.datepicker.mode$.pipe(map(mode => {
            switch (mode) {
                case DatePickerMode.Day:
                    return 'Previous month';
                case DatePickerMode.Month:
                    return 'Previous year';
                case DatePickerMode.Year:
                    return 'Previous decade';
            }
        }));
        this.nextAria$ = this.datepicker.mode$.pipe(map(mode => {
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
    previous() {
        this.datepicker.goToPrevious();
    }
    /**
     * @return {?}
     */
    ascend() {
        this.datepicker.goToParentMode();
    }
    /**
     * @return {?}
     */
    next() {
        this.datepicker.goToNext();
    }
}
HeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-date-time-picker-header',
                template: `<header class="header">

  <button class="header-navigation"
          (click)="previous(); $event.stopPropagation()"
          [attr.aria-label]="previousAria$ | async"
          tabindex="0">

    <i class="hpe-icon hpe-previous"></i>
  </button>

  <button class="header-title"
          [attr.aria-label]="headerAria$ | async"
          [class.active]="canAscend$ | async"
          (click)="ascend(); $event.stopPropagation()"
          [tabindex]="(canAscend$ | async) ? 0 : -1">
       {{ datepicker.header$ | async }}
  </button>

  <button class="header-navigation"
          (click)="next(); $event.stopPropagation()"
          [attr.aria-label]="nextAria$ | async"
          tabindex="0">

    <i class="hpe-icon hpe-next"></i>
  </button>
</header>`,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
HeaderComponent.ctorParameters = () => [
    { type: DateTimePickerService, },
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2RhdGUtdGltZS1waWNrZXIvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxjQUFjLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQWdDcEYsTUFBTTs7OztJQWdERixZQUFtQixVQUFpQztRQUFqQyxlQUFVLEdBQVYsVUFBVSxDQUF1QjswQkE5Q2xCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUUzRSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzlELE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsS0FBSyxjQUFjLENBQUMsR0FBRztvQkFDbkIsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDakIsS0FBSyxjQUFjLENBQUMsS0FBSztvQkFDckIsTUFBTSxDQUFDLE9BQU8sQ0FBQztnQkFDbkIsS0FBSyxjQUFjLENBQUMsSUFBSTtvQkFDcEIsTUFBTSxDQUFDLE1BQU0sQ0FBQzthQUNyQjtTQUNKLENBQUMsQ0FBQzsyQkFFK0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNwRSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNYLEtBQUssY0FBYyxDQUFDLEdBQUc7b0JBQ25CLE1BQU0sQ0FBQyxtQ0FBbUMsQ0FBQztnQkFDL0MsS0FBSyxjQUFjLENBQUMsS0FBSztvQkFDckIsTUFBTSxDQUFDLG9DQUFvQyxDQUFDO2dCQUNoRCxLQUFLLGNBQWMsQ0FBQyxJQUFJO29CQUNwQixNQUFNLENBQUMsRUFBRSxDQUFDO2FBQ2pCO1NBQ0osQ0FBQyxDQUFDOzZCQUVpQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3RFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsS0FBSyxjQUFjLENBQUMsR0FBRztvQkFDbkIsTUFBTSxDQUFDLGdCQUFnQixDQUFDO2dCQUM1QixLQUFLLGNBQWMsQ0FBQyxLQUFLO29CQUNyQixNQUFNLENBQUMsZUFBZSxDQUFDO2dCQUMzQixLQUFLLGNBQWMsQ0FBQyxJQUFJO29CQUNwQixNQUFNLENBQUMsaUJBQWlCLENBQUM7YUFDaEM7U0FDSixDQUFDLENBQUM7eUJBRTZCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbEUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDWCxLQUFLLGNBQWMsQ0FBQyxHQUFHO29CQUNuQixNQUFNLENBQUMsWUFBWSxDQUFDO2dCQUN4QixLQUFLLGNBQWMsQ0FBQyxLQUFLO29CQUNyQixNQUFNLENBQUMsV0FBVyxDQUFDO2dCQUN2QixLQUFLLGNBQWMsQ0FBQyxJQUFJO29CQUNwQixNQUFNLENBQUMsYUFBYSxDQUFDO2FBQzVCO1NBQ0osQ0FBQyxDQUFDO0tBRXNEOzs7O0lBRXpELFFBQVE7UUFDSixJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ2xDOzs7O0lBRUQsTUFBTTtRQUNGLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUM7S0FDcEM7Ozs7SUFFRCxJQUFJO1FBQ0EsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUM5Qjs7O1lBMUZKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUF5Qko7Z0JBQ04sZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDbEQ7Ozs7WUEvQndCLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IERhdGVQaWNrZXJNb2RlLCBEYXRlVGltZVBpY2tlclNlcnZpY2UgfSBmcm9tICcuLi9kYXRlLXRpbWUtcGlja2VyLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3V4LWRhdGUtdGltZS1waWNrZXItaGVhZGVyJyxcclxuICAgIHRlbXBsYXRlOiBgPGhlYWRlciBjbGFzcz1cImhlYWRlclwiPlxyXG5cclxuICA8YnV0dG9uIGNsYXNzPVwiaGVhZGVyLW5hdmlnYXRpb25cIlxyXG4gICAgICAgICAgKGNsaWNrKT1cInByZXZpb3VzKCk7ICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiXHJcbiAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cInByZXZpb3VzQXJpYSQgfCBhc3luY1wiXHJcbiAgICAgICAgICB0YWJpbmRleD1cIjBcIj5cclxuXHJcbiAgICA8aSBjbGFzcz1cImhwZS1pY29uIGhwZS1wcmV2aW91c1wiPjwvaT5cclxuICA8L2J1dHRvbj5cclxuXHJcbiAgPGJ1dHRvbiBjbGFzcz1cImhlYWRlci10aXRsZVwiXHJcbiAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImhlYWRlckFyaWEkIHwgYXN5bmNcIlxyXG4gICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJjYW5Bc2NlbmQkIHwgYXN5bmNcIlxyXG4gICAgICAgICAgKGNsaWNrKT1cImFzY2VuZCgpOyAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIlxyXG4gICAgICAgICAgW3RhYmluZGV4XT1cIihjYW5Bc2NlbmQkIHwgYXN5bmMpID8gMCA6IC0xXCI+XHJcbiAgICAgICB7eyBkYXRlcGlja2VyLmhlYWRlciQgfCBhc3luYyB9fVxyXG4gIDwvYnV0dG9uPlxyXG5cclxuICA8YnV0dG9uIGNsYXNzPVwiaGVhZGVyLW5hdmlnYXRpb25cIlxyXG4gICAgICAgICAgKGNsaWNrKT1cIm5leHQoKTsgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCJcclxuICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwibmV4dEFyaWEkIHwgYXN5bmNcIlxyXG4gICAgICAgICAgdGFiaW5kZXg9XCIwXCI+XHJcblxyXG4gICAgPGkgY2xhc3M9XCJocGUtaWNvbiBocGUtbmV4dFwiPjwvaT5cclxuICA8L2J1dHRvbj5cclxuPC9oZWFkZXI+YCxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQge1xyXG5cclxuICAgIGNhbkFzY2VuZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLmRhdGVwaWNrZXIubW9kZSQucGlwZShtYXAobW9kZSA9PiBtb2RlICE9PSBEYXRlUGlja2VyTW9kZS5ZZWFyKSk7XHJcbiAgICBcclxuICAgIG1vZGUkOiBPYnNlcnZhYmxlPHN0cmluZz4gPSB0aGlzLmRhdGVwaWNrZXIubW9kZSQucGlwZShtYXAobW9kZSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChtb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgRGF0ZVBpY2tlck1vZGUuRGF5OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdEYXknO1xyXG4gICAgICAgICAgICBjYXNlIERhdGVQaWNrZXJNb2RlLk1vbnRoOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdNb250aCc7XHJcbiAgICAgICAgICAgIGNhc2UgRGF0ZVBpY2tlck1vZGUuWWVhcjpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnWWVhcic7XHJcbiAgICAgICAgfVxyXG4gICAgfSkpO1xyXG5cclxuICAgIGhlYWRlckFyaWEkOiBPYnNlcnZhYmxlPHN0cmluZz4gPSB0aGlzLmRhdGVwaWNrZXIubW9kZSQucGlwZShtYXAobW9kZSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChtb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgRGF0ZVBpY2tlck1vZGUuRGF5OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdTd2l0Y2ggdG8gc2hvdyBtb250aHMgaW4gdGhlIHllYXInO1xyXG4gICAgICAgICAgICBjYXNlIERhdGVQaWNrZXJNb2RlLk1vbnRoOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdTd2l0Y2ggdG8gc2hvdyB5ZWFycyBpbiB0aGUgZGVjYWRlJztcclxuICAgICAgICAgICAgY2FzZSBEYXRlUGlja2VyTW9kZS5ZZWFyOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuICAgIH0pKTtcclxuXHJcbiAgICBwcmV2aW91c0FyaWEkOiBPYnNlcnZhYmxlPHN0cmluZz4gPSB0aGlzLmRhdGVwaWNrZXIubW9kZSQucGlwZShtYXAobW9kZSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChtb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgRGF0ZVBpY2tlck1vZGUuRGF5OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdQcmV2aW91cyBtb250aCc7XHJcbiAgICAgICAgICAgIGNhc2UgRGF0ZVBpY2tlck1vZGUuTW9udGg6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1ByZXZpb3VzIHllYXInO1xyXG4gICAgICAgICAgICBjYXNlIERhdGVQaWNrZXJNb2RlLlllYXI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1ByZXZpb3VzIGRlY2FkZSc7XHJcbiAgICAgICAgfVxyXG4gICAgfSkpO1xyXG5cclxuICAgIG5leHRBcmlhJDogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy5kYXRlcGlja2VyLm1vZGUkLnBpcGUobWFwKG1vZGUgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAobW9kZSkge1xyXG4gICAgICAgICAgICBjYXNlIERhdGVQaWNrZXJNb2RlLkRheTpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnTmV4dCBtb250aCc7XHJcbiAgICAgICAgICAgIGNhc2UgRGF0ZVBpY2tlck1vZGUuTW9udGg6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ05leHQgeWVhcic7XHJcbiAgICAgICAgICAgIGNhc2UgRGF0ZVBpY2tlck1vZGUuWWVhcjpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnTmV4dCBkZWNhZGUnO1xyXG4gICAgICAgIH1cclxuICAgIH0pKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZGF0ZXBpY2tlcjogRGF0ZVRpbWVQaWNrZXJTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBwcmV2aW91cygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRhdGVwaWNrZXIuZ29Ub1ByZXZpb3VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXNjZW5kKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGF0ZXBpY2tlci5nb1RvUGFyZW50TW9kZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kYXRlcGlja2VyLmdvVG9OZXh0KCk7XHJcbiAgICB9XHJcbn0iXX0=