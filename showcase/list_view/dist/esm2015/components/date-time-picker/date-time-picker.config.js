/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Add a config service to allow an application
 * to customize the date time picker default settings
 * across the entire application
 */
import { Injectable } from '@angular/core';
import { weekdaysShort } from './date-time-picker.utils';
export class DateTimePickerConfig {
    constructor() {
        this.showDate = true;
        this.showTime = true;
        this.showTimezone = true;
        this.showSeconds = false;
        this.showMeridian = true;
        this.showSpinners = true;
        this.weekdays = weekdaysShort;
        this.nowBtnText = 'Today';
        this.timezones = [
            { name: 'GMT-11', offset: 660 },
            { name: 'GMT-10', offset: 600 },
            { name: 'GMT-9', offset: 540 },
            { name: 'GMT-8', offset: 480 },
            { name: 'GMT-7', offset: 420 },
            { name: 'GMT-6', offset: 360 },
            { name: 'GMT-5', offset: 300 },
            { name: 'GMT-4', offset: 240 },
            { name: 'GMT-3', offset: 180 },
            { name: 'GMT-2', offset: 120 },
            { name: 'GMT-1', offset: 60 },
            { name: 'GMT', offset: 0 },
            { name: 'GMT+1', offset: -60 },
            { name: 'GMT+2', offset: -120 },
            { name: 'GMT+3', offset: -180 },
            { name: 'GMT+4', offset: -240 },
            { name: 'GMT+5', offset: -300 },
            { name: 'GMT+6', offset: -360 },
            { name: 'GMT+7', offset: -420 },
            { name: 'GMT+8', offset: -480 },
            { name: 'GMT+9', offset: -540 },
            { name: 'GMT+10', offset: -600 },
            { name: 'GMT+11', offset: -660 },
            { name: 'GMT+12', offset: -720 }
        ];
    }
}
DateTimePickerConfig.decorators = [
    { type: Injectable },
];
function DateTimePickerConfig_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    DateTimePickerConfig.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    DateTimePickerConfig.ctorParameters;
    /** @type {?} */
    DateTimePickerConfig.prototype.showDate;
    /** @type {?} */
    DateTimePickerConfig.prototype.showTime;
    /** @type {?} */
    DateTimePickerConfig.prototype.showTimezone;
    /** @type {?} */
    DateTimePickerConfig.prototype.showSeconds;
    /** @type {?} */
    DateTimePickerConfig.prototype.showMeridian;
    /** @type {?} */
    DateTimePickerConfig.prototype.showSpinners;
    /** @type {?} */
    DateTimePickerConfig.prototype.weekdays;
    /** @type {?} */
    DateTimePickerConfig.prototype.nowBtnText;
    /** @type {?} */
    DateTimePickerConfig.prototype.timezones;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10aW1lLXBpY2tlci5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9kYXRlLXRpbWUtcGlja2VyL2RhdGUtdGltZS1waWNrZXIuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBSXpELE1BQU07O3dCQUVrQixJQUFJO3dCQUNKLElBQUk7NEJBQ0EsSUFBSTsyQkFDTCxLQUFLOzRCQUNKLElBQUk7NEJBQ0osSUFBSTt3QkFDUCxhQUFhOzBCQUNiLE9BQU87eUJBRVU7WUFDbEMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUU7WUFDL0IsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUU7WUFDL0IsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUU7WUFDOUIsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUU7WUFDOUIsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUU7WUFDOUIsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUU7WUFDOUIsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUU7WUFDOUIsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUU7WUFDOUIsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUU7WUFDOUIsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUU7WUFDOUIsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUU7WUFDN0IsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUU7WUFDMUIsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM5QixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFO1lBQy9CLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUU7WUFDL0IsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRTtZQUMvQixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFO1lBQy9CLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUU7WUFDL0IsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRTtZQUMvQixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFO1lBQy9CLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUU7WUFDL0IsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRTtZQUNoQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFO1lBQ2hDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUU7U0FDbkM7Ozs7WUFyQ0osVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBBZGQgYSBjb25maWcgc2VydmljZSB0byBhbGxvdyBhbiBhcHBsaWNhdGlvblxyXG4gKiB0byBjdXN0b21pemUgdGhlIGRhdGUgdGltZSBwaWNrZXIgZGVmYXVsdCBzZXR0aW5nc1xyXG4gKiBhY3Jvc3MgdGhlIGVudGlyZSBhcHBsaWNhdGlvblxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgd2Vla2RheXNTaG9ydCB9IGZyb20gJy4vZGF0ZS10aW1lLXBpY2tlci51dGlscyc7XHJcbmltcG9ydCB7IERhdGVUaW1lUGlja2VyVGltZXpvbmUgfSBmcm9tICcuL2RhdGUtdGltZS1waWNrZXIuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEYXRlVGltZVBpY2tlckNvbmZpZyB7XHJcblxyXG4gICAgc2hvd0RhdGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgc2hvd1RpbWU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgc2hvd1RpbWV6b25lOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHNob3dTZWNvbmRzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzaG93TWVyaWRpYW46IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgc2hvd1NwaW5uZXJzOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHdlZWtkYXlzOiBzdHJpbmdbXSA9IHdlZWtkYXlzU2hvcnQ7XHJcbiAgICBub3dCdG5UZXh0OiBzdHJpbmcgPSAnVG9kYXknO1xyXG5cclxuICAgIHRpbWV6b25lczogRGF0ZVRpbWVQaWNrZXJUaW1lem9uZVtdID0gW1xyXG4gICAgICAgIHsgbmFtZTogJ0dNVC0xMScsIG9mZnNldDogNjYwIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnR01ULTEwJywgb2Zmc2V0OiA2MDAgfSxcclxuICAgICAgICB7IG5hbWU6ICdHTVQtOScsIG9mZnNldDogNTQwIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnR01ULTgnLCBvZmZzZXQ6IDQ4MCB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0dNVC03Jywgb2Zmc2V0OiA0MjAgfSxcclxuICAgICAgICB7IG5hbWU6ICdHTVQtNicsIG9mZnNldDogMzYwIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnR01ULTUnLCBvZmZzZXQ6IDMwMCB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0dNVC00Jywgb2Zmc2V0OiAyNDAgfSxcclxuICAgICAgICB7IG5hbWU6ICdHTVQtMycsIG9mZnNldDogMTgwIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnR01ULTInLCBvZmZzZXQ6IDEyMCB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0dNVC0xJywgb2Zmc2V0OiA2MCB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0dNVCcsIG9mZnNldDogMCB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0dNVCsxJywgb2Zmc2V0OiAtNjAgfSxcclxuICAgICAgICB7IG5hbWU6ICdHTVQrMicsIG9mZnNldDogLTEyMCB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0dNVCszJywgb2Zmc2V0OiAtMTgwIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnR01UKzQnLCBvZmZzZXQ6IC0yNDAgfSxcclxuICAgICAgICB7IG5hbWU6ICdHTVQrNScsIG9mZnNldDogLTMwMCB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0dNVCs2Jywgb2Zmc2V0OiAtMzYwIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnR01UKzcnLCBvZmZzZXQ6IC00MjAgfSxcclxuICAgICAgICB7IG5hbWU6ICdHTVQrOCcsIG9mZnNldDogLTQ4MCB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0dNVCs5Jywgb2Zmc2V0OiAtNTQwIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnR01UKzEwJywgb2Zmc2V0OiAtNjAwIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnR01UKzExJywgb2Zmc2V0OiAtNjYwIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnR01UKzEyJywgb2Zmc2V0OiAtNzIwIH1cclxuICAgIF07XHJcbn0iXX0=