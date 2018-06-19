/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DateTimePickerService } from '../date-time-picker.service';
var TimeViewComponent = /** @class */ (function () {
    function TimeViewComponent(datepicker) {
        this.datepicker = datepicker;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    TimeViewComponent.prototype.selectTimezone = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        var /** @type {?} */ timezones = this.datepicker.timezones$.value;
        // find matching timezone
        var /** @type {?} */ timezone = timezones.find(function (_timezone) { return _timezone.name === name; });
        if (timezone) {
            this.datepicker.setTimezone(timezone);
        }
    };
    /**
     * @return {?}
     */
    TimeViewComponent.prototype.incrementTimezone = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ timezone = this.datepicker.timezone$.value;
        var /** @type {?} */ timezones = this.datepicker.timezones$.value;
        var /** @type {?} */ currentZone = timezones.findIndex(function (zone) { return zone.name === timezone.name && zone.offset === timezone.offset; });
        // try to get the previous zone
        this.datepicker.setTimezone(timezones[currentZone + 1] ? timezones[currentZone + 1] : timezones[currentZone]);
    };
    /**
     * @return {?}
     */
    TimeViewComponent.prototype.decrementTimezone = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ timezone = this.datepicker.timezone$.value;
        var /** @type {?} */ timezones = this.datepicker.timezones$.value;
        var /** @type {?} */ currentZone = timezones.findIndex(function (zone) { return zone.name === timezone.name && zone.offset === timezone.offset; });
        // try to get the previous zone
        this.datepicker.setTimezone(timezones[currentZone - 1] ? timezones[currentZone - 1] : timezones[currentZone]);
    };
    TimeViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-date-time-picker-time-view',
                    template: "<ux-time-picker *ngIf=\"datepicker.showTime$ | async\"\n    [value]=\"datepicker.selected$ | async\"\n    (valueChange)=\"datepicker.selected$.next($event)\"\n    [showSeconds]=\"datepicker.showSeconds$ | async\"\n    [showMeridian]=\"datepicker.showMeridian$ | async\"\n    [showSpinners]=\"datepicker.showSpinners$ | async\">\n</ux-time-picker>\n\n<ng-container *ngIf=\"datepicker.showTimezone$ | async\">\n\n    <div class=\"time-zone-picker\" *ngIf=\"datepicker.showSpinners$ | async\">\n\n        <ux-spin-button\n            class=\"time-zone-spinner\"\n            [value]=\"(datepicker.timezone$ | async).name\"\n            [readOnly]=\"true\"\n            (increment)=\"incrementTimezone()\"\n            (decrement)=\"decrementTimezone()\"\n            inputAriaLabel=\"Time Zone\"\n            incrementAriaLabel=\"Switch to the next time zone\"\n            decrementAriaLabel=\"Switch to the previous time zone\">\n        </ux-spin-button>\n    </div>\n\n    <div class=\"time-zone-picker\" *ngIf=\"!(datepicker.showSpinners$ | async)\">\n\n        <select class=\"form-control time-zone-select\"\n                tabindex=\"0\"\n                [ngModel]=\"(datepicker.timezone$ | async).name\"\n                (ngModelChange)=\"selectTimezone($event)\"\n                aria-label=\"Timezone\"\n                [attr.aria-valuenow]=\"(datepicker.timezone$ | async).name\">\n\n            <option *ngFor=\"let zone of datepicker.timezones$ | async\"\n                    [selected]=\"zone.name === (datepicker.timezone$ | async).name\"\n                    [value]=\"zone.name\">\n                {{ zone?.name }}\n            </option>\n\n        </select>\n    </div>\n\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    TimeViewComponent.ctorParameters = function () { return [
        { type: DateTimePickerService, },
    ]; };
    return TimeViewComponent;
}());
export { TimeViewComponent };
function TimeViewComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TimeViewComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TimeViewComponent.ctorParameters;
    /** @type {?} */
    TimeViewComponent.prototype.datepicker;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2RhdGUtdGltZS1waWNrZXIvdGltZS12aWV3L3RpbWUtdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7O0lBb0RoRSwyQkFBbUIsVUFBaUM7UUFBakMsZUFBVSxHQUFWLFVBQVUsQ0FBdUI7S0FBSzs7Ozs7SUFFekQsMENBQWM7Ozs7SUFBZCxVQUFlLElBQVk7UUFDdkIscUJBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQzs7UUFHbkQscUJBQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBQSxTQUFTLElBQUksT0FBQSxTQUFTLENBQUMsSUFBSSxLQUFLLElBQUksRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO1FBRXRFLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDWCxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN6QztLQUNKOzs7O0lBRUQsNkNBQWlCOzs7SUFBakI7UUFDSSxxQkFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1FBQ2pELHFCQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFFbkQscUJBQU0sV0FBVyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUMsTUFBTSxFQUE5RCxDQUE4RCxDQUFDLENBQUM7O1FBR2hILElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0tBQ2pIOzs7O0lBRUQsNkNBQWlCOzs7SUFBakI7UUFDSSxxQkFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1FBQ2pELHFCQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFFbkQscUJBQU0sV0FBVyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUMsTUFBTSxFQUE5RCxDQUE4RCxDQUFDLENBQUM7O1FBR2hILElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0tBQ2pIOztnQkFqRkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSwrQkFBK0I7b0JBQ3pDLFFBQVEsRUFBRSw2cURBMkNiO29CQUNHLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNsRDs7OztnQkFqRFEscUJBQXFCOzs0QkFEOUI7O1NBbURhLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGF0ZVRpbWVQaWNrZXJTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0ZS10aW1lLXBpY2tlci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd1eC1kYXRlLXRpbWUtcGlja2VyLXRpbWUtdmlldycsXHJcbiAgICB0ZW1wbGF0ZTogYDx1eC10aW1lLXBpY2tlciAqbmdJZj1cImRhdGVwaWNrZXIuc2hvd1RpbWUkIHwgYXN5bmNcIlxyXG4gICAgW3ZhbHVlXT1cImRhdGVwaWNrZXIuc2VsZWN0ZWQkIHwgYXN5bmNcIlxyXG4gICAgKHZhbHVlQ2hhbmdlKT1cImRhdGVwaWNrZXIuc2VsZWN0ZWQkLm5leHQoJGV2ZW50KVwiXHJcbiAgICBbc2hvd1NlY29uZHNdPVwiZGF0ZXBpY2tlci5zaG93U2Vjb25kcyQgfCBhc3luY1wiXHJcbiAgICBbc2hvd01lcmlkaWFuXT1cImRhdGVwaWNrZXIuc2hvd01lcmlkaWFuJCB8IGFzeW5jXCJcclxuICAgIFtzaG93U3Bpbm5lcnNdPVwiZGF0ZXBpY2tlci5zaG93U3Bpbm5lcnMkIHwgYXN5bmNcIj5cclxuPC91eC10aW1lLXBpY2tlcj5cclxuXHJcbjxuZy1jb250YWluZXIgKm5nSWY9XCJkYXRlcGlja2VyLnNob3dUaW1lem9uZSQgfCBhc3luY1wiPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJ0aW1lLXpvbmUtcGlja2VyXCIgKm5nSWY9XCJkYXRlcGlja2VyLnNob3dTcGlubmVycyQgfCBhc3luY1wiPlxyXG5cclxuICAgICAgICA8dXgtc3Bpbi1idXR0b25cclxuICAgICAgICAgICAgY2xhc3M9XCJ0aW1lLXpvbmUtc3Bpbm5lclwiXHJcbiAgICAgICAgICAgIFt2YWx1ZV09XCIoZGF0ZXBpY2tlci50aW1lem9uZSQgfCBhc3luYykubmFtZVwiXHJcbiAgICAgICAgICAgIFtyZWFkT25seV09XCJ0cnVlXCJcclxuICAgICAgICAgICAgKGluY3JlbWVudCk9XCJpbmNyZW1lbnRUaW1lem9uZSgpXCJcclxuICAgICAgICAgICAgKGRlY3JlbWVudCk9XCJkZWNyZW1lbnRUaW1lem9uZSgpXCJcclxuICAgICAgICAgICAgaW5wdXRBcmlhTGFiZWw9XCJUaW1lIFpvbmVcIlxyXG4gICAgICAgICAgICBpbmNyZW1lbnRBcmlhTGFiZWw9XCJTd2l0Y2ggdG8gdGhlIG5leHQgdGltZSB6b25lXCJcclxuICAgICAgICAgICAgZGVjcmVtZW50QXJpYUxhYmVsPVwiU3dpdGNoIHRvIHRoZSBwcmV2aW91cyB0aW1lIHpvbmVcIj5cclxuICAgICAgICA8L3V4LXNwaW4tYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInRpbWUtem9uZS1waWNrZXJcIiAqbmdJZj1cIiEoZGF0ZXBpY2tlci5zaG93U3Bpbm5lcnMkIHwgYXN5bmMpXCI+XHJcblxyXG4gICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2wgdGltZS16b25lLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICB0YWJpbmRleD1cIjBcIlxyXG4gICAgICAgICAgICAgICAgW25nTW9kZWxdPVwiKGRhdGVwaWNrZXIudGltZXpvbmUkIHwgYXN5bmMpLm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwic2VsZWN0VGltZXpvbmUoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiVGltZXpvbmVcIlxyXG4gICAgICAgICAgICAgICAgW2F0dHIuYXJpYS12YWx1ZW5vd109XCIoZGF0ZXBpY2tlci50aW1lem9uZSQgfCBhc3luYykubmFtZVwiPlxyXG5cclxuICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgem9uZSBvZiBkYXRlcGlja2VyLnRpbWV6b25lcyQgfCBhc3luY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgW3NlbGVjdGVkXT1cInpvbmUubmFtZSA9PT0gKGRhdGVwaWNrZXIudGltZXpvbmUkIHwgYXN5bmMpLm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJ6b25lLm5hbWVcIj5cclxuICAgICAgICAgICAgICAgIHt7IHpvbmU/Lm5hbWUgfX1cclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcblxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgPC9kaXY+XHJcblxyXG48L25nLWNvbnRhaW5lcj5cclxuYCxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUaW1lVmlld0NvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGRhdGVwaWNrZXI6IERhdGVUaW1lUGlja2VyU2VydmljZSkgeyB9XHJcblxyXG4gICAgc2VsZWN0VGltZXpvbmUobmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgdGltZXpvbmVzID0gdGhpcy5kYXRlcGlja2VyLnRpbWV6b25lcyQudmFsdWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gZmluZCBtYXRjaGluZyB0aW1lem9uZVxyXG4gICAgICAgIGNvbnN0IHRpbWV6b25lID0gdGltZXpvbmVzLmZpbmQoX3RpbWV6b25lID0+IF90aW1lem9uZS5uYW1lID09PSBuYW1lKTtcclxuXHJcbiAgICAgICAgaWYgKHRpbWV6b25lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0ZXBpY2tlci5zZXRUaW1lem9uZSh0aW1lem9uZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluY3JlbWVudFRpbWV6b25lKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHRpbWV6b25lID0gdGhpcy5kYXRlcGlja2VyLnRpbWV6b25lJC52YWx1ZTtcclxuICAgICAgICBjb25zdCB0aW1lem9uZXMgPSB0aGlzLmRhdGVwaWNrZXIudGltZXpvbmVzJC52YWx1ZTtcclxuXHJcbiAgICAgICAgY29uc3QgY3VycmVudFpvbmUgPSB0aW1lem9uZXMuZmluZEluZGV4KHpvbmUgPT4gem9uZS5uYW1lID09PSB0aW1lem9uZS5uYW1lICYmIHpvbmUub2Zmc2V0ID09PSB0aW1lem9uZS5vZmZzZXQpO1xyXG5cclxuICAgICAgICAvLyB0cnkgdG8gZ2V0IHRoZSBwcmV2aW91cyB6b25lXHJcbiAgICAgICAgdGhpcy5kYXRlcGlja2VyLnNldFRpbWV6b25lKHRpbWV6b25lc1tjdXJyZW50Wm9uZSArIDFdID8gdGltZXpvbmVzW2N1cnJlbnRab25lICsgMV0gOiB0aW1lem9uZXNbY3VycmVudFpvbmVdKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWNyZW1lbnRUaW1lem9uZSgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB0aW1lem9uZSA9IHRoaXMuZGF0ZXBpY2tlci50aW1lem9uZSQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgdGltZXpvbmVzID0gdGhpcy5kYXRlcGlja2VyLnRpbWV6b25lcyQudmFsdWU7XHJcblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRab25lID0gdGltZXpvbmVzLmZpbmRJbmRleCh6b25lID0+IHpvbmUubmFtZSA9PT0gdGltZXpvbmUubmFtZSAmJiB6b25lLm9mZnNldCA9PT0gdGltZXpvbmUub2Zmc2V0KTtcclxuXHJcbiAgICAgICAgLy8gdHJ5IHRvIGdldCB0aGUgcHJldmlvdXMgem9uZVxyXG4gICAgICAgIHRoaXMuZGF0ZXBpY2tlci5zZXRUaW1lem9uZSh0aW1lem9uZXNbY3VycmVudFpvbmUgLSAxXSA/IHRpbWV6b25lc1tjdXJyZW50Wm9uZSAtIDFdIDogdGltZXpvbmVzW2N1cnJlbnRab25lXSk7XHJcbiAgICB9XHJcbn0iXX0=