/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DateTimePickerService } from '../date-time-picker.service';
export class TimeViewComponent {
    /**
     * @param {?} datepicker
     */
    constructor(datepicker) {
        this.datepicker = datepicker;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    selectTimezone(name) {
        const /** @type {?} */ timezones = this.datepicker.timezones$.value;
        // find matching timezone
        const /** @type {?} */ timezone = timezones.find(_timezone => _timezone.name === name);
        if (timezone) {
            this.datepicker.setTimezone(timezone);
        }
    }
    /**
     * @return {?}
     */
    incrementTimezone() {
        const /** @type {?} */ timezone = this.datepicker.timezone$.value;
        const /** @type {?} */ timezones = this.datepicker.timezones$.value;
        const /** @type {?} */ currentZone = timezones.findIndex(zone => zone.name === timezone.name && zone.offset === timezone.offset);
        // try to get the previous zone
        this.datepicker.setTimezone(timezones[currentZone + 1] ? timezones[currentZone + 1] : timezones[currentZone]);
    }
    /**
     * @return {?}
     */
    decrementTimezone() {
        const /** @type {?} */ timezone = this.datepicker.timezone$.value;
        const /** @type {?} */ timezones = this.datepicker.timezones$.value;
        const /** @type {?} */ currentZone = timezones.findIndex(zone => zone.name === timezone.name && zone.offset === timezone.offset);
        // try to get the previous zone
        this.datepicker.setTimezone(timezones[currentZone - 1] ? timezones[currentZone - 1] : timezones[currentZone]);
    }
}
TimeViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-date-time-picker-time-view',
                template: `<ux-time-picker *ngIf="datepicker.showTime$ | async"
    [value]="datepicker.selected$ | async"
    (valueChange)="datepicker.selected$.next($event)"
    [showSeconds]="datepicker.showSeconds$ | async"
    [showMeridian]="datepicker.showMeridian$ | async"
    [showSpinners]="datepicker.showSpinners$ | async">
</ux-time-picker>

<ng-container *ngIf="datepicker.showTimezone$ | async">

    <div class="time-zone-picker" *ngIf="datepicker.showSpinners$ | async">

        <ux-spin-button
            class="time-zone-spinner"
            [value]="(datepicker.timezone$ | async).name"
            [readOnly]="true"
            (increment)="incrementTimezone()"
            (decrement)="decrementTimezone()"
            inputAriaLabel="Time Zone"
            incrementAriaLabel="Switch to the next time zone"
            decrementAriaLabel="Switch to the previous time zone">
        </ux-spin-button>
    </div>

    <div class="time-zone-picker" *ngIf="!(datepicker.showSpinners$ | async)">

        <select class="form-control time-zone-select"
                tabindex="0"
                [ngModel]="(datepicker.timezone$ | async).name"
                (ngModelChange)="selectTimezone($event)"
                aria-label="Timezone"
                [attr.aria-valuenow]="(datepicker.timezone$ | async).name">

            <option *ngFor="let zone of datepicker.timezones$ | async"
                    [selected]="zone.name === (datepicker.timezone$ | async).name"
                    [value]="zone.name">
                {{ zone?.name }}
            </option>

        </select>
    </div>

</ng-container>
`,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
TimeViewComponent.ctorParameters = () => [
    { type: DateTimePickerService, },
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2RhdGUtdGltZS1waWNrZXIvdGltZS12aWV3L3RpbWUtdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFrRHBFLE1BQU07Ozs7SUFFRixZQUFtQixVQUFpQztRQUFqQyxlQUFVLEdBQVYsVUFBVSxDQUF1QjtLQUFLOzs7OztJQUV6RCxjQUFjLENBQUMsSUFBWTtRQUN2Qix1QkFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDOztRQUduRCx1QkFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUM7UUFFdEUsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNYLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3pDO0tBQ0o7Ozs7SUFFRCxpQkFBaUI7UUFDYix1QkFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1FBQ2pELHVCQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFFbkQsdUJBQU0sV0FBVyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7O1FBR2hILElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0tBQ2pIOzs7O0lBRUQsaUJBQWlCO1FBQ2IsdUJBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztRQUNqRCx1QkFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1FBRW5ELHVCQUFNLFdBQVcsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDOztRQUdoSCxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztLQUNqSDs7O1lBakZKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0EyQ2I7Z0JBQ0csZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDbEQ7Ozs7WUFqRFEscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRlVGltZVBpY2tlclNlcnZpY2UgfSBmcm9tICcuLi9kYXRlLXRpbWUtcGlja2VyLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3V4LWRhdGUtdGltZS1waWNrZXItdGltZS12aWV3JyxcclxuICAgIHRlbXBsYXRlOiBgPHV4LXRpbWUtcGlja2VyICpuZ0lmPVwiZGF0ZXBpY2tlci5zaG93VGltZSQgfCBhc3luY1wiXHJcbiAgICBbdmFsdWVdPVwiZGF0ZXBpY2tlci5zZWxlY3RlZCQgfCBhc3luY1wiXHJcbiAgICAodmFsdWVDaGFuZ2UpPVwiZGF0ZXBpY2tlci5zZWxlY3RlZCQubmV4dCgkZXZlbnQpXCJcclxuICAgIFtzaG93U2Vjb25kc109XCJkYXRlcGlja2VyLnNob3dTZWNvbmRzJCB8IGFzeW5jXCJcclxuICAgIFtzaG93TWVyaWRpYW5dPVwiZGF0ZXBpY2tlci5zaG93TWVyaWRpYW4kIHwgYXN5bmNcIlxyXG4gICAgW3Nob3dTcGlubmVyc109XCJkYXRlcGlja2VyLnNob3dTcGlubmVycyQgfCBhc3luY1wiPlxyXG48L3V4LXRpbWUtcGlja2VyPlxyXG5cclxuPG5nLWNvbnRhaW5lciAqbmdJZj1cImRhdGVwaWNrZXIuc2hvd1RpbWV6b25lJCB8IGFzeW5jXCI+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInRpbWUtem9uZS1waWNrZXJcIiAqbmdJZj1cImRhdGVwaWNrZXIuc2hvd1NwaW5uZXJzJCB8IGFzeW5jXCI+XHJcblxyXG4gICAgICAgIDx1eC1zcGluLWJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzcz1cInRpbWUtem9uZS1zcGlubmVyXCJcclxuICAgICAgICAgICAgW3ZhbHVlXT1cIihkYXRlcGlja2VyLnRpbWV6b25lJCB8IGFzeW5jKS5uYW1lXCJcclxuICAgICAgICAgICAgW3JlYWRPbmx5XT1cInRydWVcIlxyXG4gICAgICAgICAgICAoaW5jcmVtZW50KT1cImluY3JlbWVudFRpbWV6b25lKClcIlxyXG4gICAgICAgICAgICAoZGVjcmVtZW50KT1cImRlY3JlbWVudFRpbWV6b25lKClcIlxyXG4gICAgICAgICAgICBpbnB1dEFyaWFMYWJlbD1cIlRpbWUgWm9uZVwiXHJcbiAgICAgICAgICAgIGluY3JlbWVudEFyaWFMYWJlbD1cIlN3aXRjaCB0byB0aGUgbmV4dCB0aW1lIHpvbmVcIlxyXG4gICAgICAgICAgICBkZWNyZW1lbnRBcmlhTGFiZWw9XCJTd2l0Y2ggdG8gdGhlIHByZXZpb3VzIHRpbWUgem9uZVwiPlxyXG4gICAgICAgIDwvdXgtc3Bpbi1idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwidGltZS16b25lLXBpY2tlclwiICpuZ0lmPVwiIShkYXRlcGlja2VyLnNob3dTcGlubmVycyQgfCBhc3luYylcIj5cclxuXHJcbiAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbCB0aW1lLXpvbmUtc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiMFwiXHJcbiAgICAgICAgICAgICAgICBbbmdNb2RlbF09XCIoZGF0ZXBpY2tlci50aW1lem9uZSQgfCBhc3luYykubmFtZVwiXHJcbiAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJzZWxlY3RUaW1lem9uZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJUaW1lem9uZVwiXHJcbiAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLXZhbHVlbm93XT1cIihkYXRlcGlja2VyLnRpbWV6b25lJCB8IGFzeW5jKS5uYW1lXCI+XHJcblxyXG4gICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCB6b25lIG9mIGRhdGVwaWNrZXIudGltZXpvbmVzJCB8IGFzeW5jXCJcclxuICAgICAgICAgICAgICAgICAgICBbc2VsZWN0ZWRdPVwiem9uZS5uYW1lID09PSAoZGF0ZXBpY2tlci50aW1lem9uZSQgfCBhc3luYykubmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cInpvbmUubmFtZVwiPlxyXG4gICAgICAgICAgICAgICAge3sgem9uZT8ubmFtZSB9fVxyXG4gICAgICAgICAgICA8L29wdGlvbj5cclxuXHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICA8L2Rpdj5cclxuXHJcbjwvbmctY29udGFpbmVyPlxyXG5gLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIFRpbWVWaWV3Q29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZGF0ZXBpY2tlcjogRGF0ZVRpbWVQaWNrZXJTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBzZWxlY3RUaW1lem9uZShuYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB0aW1lem9uZXMgPSB0aGlzLmRhdGVwaWNrZXIudGltZXpvbmVzJC52YWx1ZTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBmaW5kIG1hdGNoaW5nIHRpbWV6b25lXHJcbiAgICAgICAgY29uc3QgdGltZXpvbmUgPSB0aW1lem9uZXMuZmluZChfdGltZXpvbmUgPT4gX3RpbWV6b25lLm5hbWUgPT09IG5hbWUpO1xyXG5cclxuICAgICAgICBpZiAodGltZXpvbmUpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRlcGlja2VyLnNldFRpbWV6b25lKHRpbWV6b25lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5jcmVtZW50VGltZXpvbmUoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgdGltZXpvbmUgPSB0aGlzLmRhdGVwaWNrZXIudGltZXpvbmUkLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHRpbWV6b25lcyA9IHRoaXMuZGF0ZXBpY2tlci50aW1lem9uZXMkLnZhbHVlO1xyXG5cclxuICAgICAgICBjb25zdCBjdXJyZW50Wm9uZSA9IHRpbWV6b25lcy5maW5kSW5kZXgoem9uZSA9PiB6b25lLm5hbWUgPT09IHRpbWV6b25lLm5hbWUgJiYgem9uZS5vZmZzZXQgPT09IHRpbWV6b25lLm9mZnNldCk7XHJcblxyXG4gICAgICAgIC8vIHRyeSB0byBnZXQgdGhlIHByZXZpb3VzIHpvbmVcclxuICAgICAgICB0aGlzLmRhdGVwaWNrZXIuc2V0VGltZXpvbmUodGltZXpvbmVzW2N1cnJlbnRab25lICsgMV0gPyB0aW1lem9uZXNbY3VycmVudFpvbmUgKyAxXSA6IHRpbWV6b25lc1tjdXJyZW50Wm9uZV0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRlY3JlbWVudFRpbWV6b25lKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHRpbWV6b25lID0gdGhpcy5kYXRlcGlja2VyLnRpbWV6b25lJC52YWx1ZTtcclxuICAgICAgICBjb25zdCB0aW1lem9uZXMgPSB0aGlzLmRhdGVwaWNrZXIudGltZXpvbmVzJC52YWx1ZTtcclxuXHJcbiAgICAgICAgY29uc3QgY3VycmVudFpvbmUgPSB0aW1lem9uZXMuZmluZEluZGV4KHpvbmUgPT4gem9uZS5uYW1lID09PSB0aW1lem9uZS5uYW1lICYmIHpvbmUub2Zmc2V0ID09PSB0aW1lem9uZS5vZmZzZXQpO1xyXG5cclxuICAgICAgICAvLyB0cnkgdG8gZ2V0IHRoZSBwcmV2aW91cyB6b25lXHJcbiAgICAgICAgdGhpcy5kYXRlcGlja2VyLnNldFRpbWV6b25lKHRpbWV6b25lc1tjdXJyZW50Wm9uZSAtIDFdID8gdGltZXpvbmVzW2N1cnJlbnRab25lIC0gMV0gOiB0aW1lem9uZXNbY3VycmVudFpvbmVdKTtcclxuICAgIH1cclxufSJdfQ==