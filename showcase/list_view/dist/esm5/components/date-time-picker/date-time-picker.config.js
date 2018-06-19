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
var DateTimePickerConfig = /** @class */ (function () {
    function DateTimePickerConfig() {
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
    DateTimePickerConfig.decorators = [
        { type: Injectable },
    ];
    return DateTimePickerConfig;
}());
export { DateTimePickerConfig };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10aW1lLXBpY2tlci5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9kYXRlLXRpbWUtcGlja2VyL2RhdGUtdGltZS1waWNrZXIuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7d0JBTWpDLElBQUk7d0JBQ0osSUFBSTs0QkFDQSxJQUFJOzJCQUNMLEtBQUs7NEJBQ0osSUFBSTs0QkFDSixJQUFJO3dCQUNQLGFBQWE7MEJBQ2IsT0FBTzt5QkFFVTtZQUNsQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUMvQixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUMvQixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUM5QixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUM5QixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUM5QixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUM5QixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUM5QixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUM5QixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUM5QixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUM5QixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRTtZQUM3QixFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRTtZQUMxQixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzlCLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUU7WUFDL0IsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRTtZQUMvQixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFO1lBQy9CLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUU7WUFDL0IsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRTtZQUMvQixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFO1lBQy9CLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUU7WUFDL0IsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRTtZQUMvQixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFO1lBQ2hDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUU7WUFDaEMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRTtTQUNuQzs7O2dCQXJDSixVQUFVOzsrQkFWWDs7U0FXYSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQWRkIGEgY29uZmlnIHNlcnZpY2UgdG8gYWxsb3cgYW4gYXBwbGljYXRpb25cclxuICogdG8gY3VzdG9taXplIHRoZSBkYXRlIHRpbWUgcGlja2VyIGRlZmF1bHQgc2V0dGluZ3NcclxuICogYWNyb3NzIHRoZSBlbnRpcmUgYXBwbGljYXRpb25cclxuICovXHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHdlZWtkYXlzU2hvcnQgfSBmcm9tICcuL2RhdGUtdGltZS1waWNrZXIudXRpbHMnO1xyXG5pbXBvcnQgeyBEYXRlVGltZVBpY2tlclRpbWV6b25lIH0gZnJvbSAnLi9kYXRlLXRpbWUtcGlja2VyLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGF0ZVRpbWVQaWNrZXJDb25maWcge1xyXG5cclxuICAgIHNob3dEYXRlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHNob3dUaW1lOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHNob3dUaW1lem9uZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBzaG93U2Vjb25kczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc2hvd01lcmlkaWFuOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHNob3dTcGlubmVyczogYm9vbGVhbiA9IHRydWU7XHJcbiAgICB3ZWVrZGF5czogc3RyaW5nW10gPSB3ZWVrZGF5c1Nob3J0O1xyXG4gICAgbm93QnRuVGV4dDogc3RyaW5nID0gJ1RvZGF5JztcclxuXHJcbiAgICB0aW1lem9uZXM6IERhdGVUaW1lUGlja2VyVGltZXpvbmVbXSA9IFtcclxuICAgICAgICB7IG5hbWU6ICdHTVQtMTEnLCBvZmZzZXQ6IDY2MCB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0dNVC0xMCcsIG9mZnNldDogNjAwIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnR01ULTknLCBvZmZzZXQ6IDU0MCB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0dNVC04Jywgb2Zmc2V0OiA0ODAgfSxcclxuICAgICAgICB7IG5hbWU6ICdHTVQtNycsIG9mZnNldDogNDIwIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnR01ULTYnLCBvZmZzZXQ6IDM2MCB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0dNVC01Jywgb2Zmc2V0OiAzMDAgfSxcclxuICAgICAgICB7IG5hbWU6ICdHTVQtNCcsIG9mZnNldDogMjQwIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnR01ULTMnLCBvZmZzZXQ6IDE4MCB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0dNVC0yJywgb2Zmc2V0OiAxMjAgfSxcclxuICAgICAgICB7IG5hbWU6ICdHTVQtMScsIG9mZnNldDogNjAgfSxcclxuICAgICAgICB7IG5hbWU6ICdHTVQnLCBvZmZzZXQ6IDAgfSxcclxuICAgICAgICB7IG5hbWU6ICdHTVQrMScsIG9mZnNldDogLTYwIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnR01UKzInLCBvZmZzZXQ6IC0xMjAgfSxcclxuICAgICAgICB7IG5hbWU6ICdHTVQrMycsIG9mZnNldDogLTE4MCB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0dNVCs0Jywgb2Zmc2V0OiAtMjQwIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnR01UKzUnLCBvZmZzZXQ6IC0zMDAgfSxcclxuICAgICAgICB7IG5hbWU6ICdHTVQrNicsIG9mZnNldDogLTM2MCB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0dNVCs3Jywgb2Zmc2V0OiAtNDIwIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnR01UKzgnLCBvZmZzZXQ6IC00ODAgfSxcclxuICAgICAgICB7IG5hbWU6ICdHTVQrOScsIG9mZnNldDogLTU0MCB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0dNVCsxMCcsIG9mZnNldDogLTYwMCB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0dNVCsxMScsIG9mZnNldDogLTY2MCB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0dNVCsxMicsIG9mZnNldDogLTcyMCB9XHJcbiAgICBdO1xyXG59Il19