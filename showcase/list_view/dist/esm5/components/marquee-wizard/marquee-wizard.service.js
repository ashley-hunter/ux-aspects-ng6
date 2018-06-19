/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
/**
 * This service is required to provide a form of communication
 * between the marquee wizard steps and the containing marquee wizard.
 * We cannot inject the Host due to the steps being content children
 * rather than view children.
 */
var MarqueeWizardService = /** @class */ (function () {
    function MarqueeWizardService() {
        this.valid$ = new Subject();
    }
    MarqueeWizardService.decorators = [
        { type: Injectable },
    ];
    return MarqueeWizardService;
}());
export { MarqueeWizardService };
function MarqueeWizardService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MarqueeWizardService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MarqueeWizardService.ctorParameters;
    /** @type {?} */
    MarqueeWizardService.prototype.valid$;
}
/**
 * @record
 */
export function MarqueeWizardValidEvent() { }
function MarqueeWizardValidEvent_tsickle_Closure_declarations() {
    /** @type {?} */
    MarqueeWizardValidEvent.prototype.step;
    /** @type {?} */
    MarqueeWizardValidEvent.prototype.valid;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFycXVlZS13aXphcmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL21hcnF1ZWUtd2l6YXJkL21hcnF1ZWUtd2l6YXJkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7Ozs7O3NCQVdsQixJQUFJLE9BQU8sRUFBMkI7OztnQkFGbEQsVUFBVTs7K0JBVlg7O1NBV2Esb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE1hcnF1ZWVXaXphcmRTdGVwQ29tcG9uZW50IH0gZnJvbSAnLi9tYXJxdWVlLXdpemFyZC1zdGVwLmNvbXBvbmVudCc7XHJcblxyXG4vKipcclxuICogVGhpcyBzZXJ2aWNlIGlzIHJlcXVpcmVkIHRvIHByb3ZpZGUgYSBmb3JtIG9mIGNvbW11bmljYXRpb25cclxuICogYmV0d2VlbiB0aGUgbWFycXVlZSB3aXphcmQgc3RlcHMgYW5kIHRoZSBjb250YWluaW5nIG1hcnF1ZWUgd2l6YXJkLlxyXG4gKiBXZSBjYW5ub3QgaW5qZWN0IHRoZSBIb3N0IGR1ZSB0byB0aGUgc3RlcHMgYmVpbmcgY29udGVudCBjaGlsZHJlbiBcclxuICogcmF0aGVyIHRoYW4gdmlldyBjaGlsZHJlbi5cclxuICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1hcnF1ZWVXaXphcmRTZXJ2aWNlIHtcclxuICAgIHZhbGlkJCA9IG5ldyBTdWJqZWN0PE1hcnF1ZWVXaXphcmRWYWxpZEV2ZW50PigpO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1hcnF1ZWVXaXphcmRWYWxpZEV2ZW50IHtcclxuICAgIHN0ZXA6IE1hcnF1ZWVXaXphcmRTdGVwQ29tcG9uZW50O1xyXG4gICAgdmFsaWQ6IGJvb2xlYW47XHJcbn0iXX0=