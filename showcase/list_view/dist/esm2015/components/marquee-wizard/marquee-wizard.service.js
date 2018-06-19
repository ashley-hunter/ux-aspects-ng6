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
export class MarqueeWizardService {
    constructor() {
        this.valid$ = new Subject();
    }
}
MarqueeWizardService.decorators = [
    { type: Injectable },
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFycXVlZS13aXphcmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL21hcnF1ZWUtd2l6YXJkL21hcnF1ZWUtd2l6YXJkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7OztBQVUvQixNQUFNOztzQkFDTyxJQUFJLE9BQU8sRUFBMkI7Ozs7WUFGbEQsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBNYXJxdWVlV2l6YXJkU3RlcENvbXBvbmVudCB9IGZyb20gJy4vbWFycXVlZS13aXphcmQtc3RlcC5jb21wb25lbnQnO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgc2VydmljZSBpcyByZXF1aXJlZCB0byBwcm92aWRlIGEgZm9ybSBvZiBjb21tdW5pY2F0aW9uXHJcbiAqIGJldHdlZW4gdGhlIG1hcnF1ZWUgd2l6YXJkIHN0ZXBzIGFuZCB0aGUgY29udGFpbmluZyBtYXJxdWVlIHdpemFyZC5cclxuICogV2UgY2Fubm90IGluamVjdCB0aGUgSG9zdCBkdWUgdG8gdGhlIHN0ZXBzIGJlaW5nIGNvbnRlbnQgY2hpbGRyZW4gXHJcbiAqIHJhdGhlciB0aGFuIHZpZXcgY2hpbGRyZW4uXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNYXJxdWVlV2l6YXJkU2VydmljZSB7XHJcbiAgICB2YWxpZCQgPSBuZXcgU3ViamVjdDxNYXJxdWVlV2l6YXJkVmFsaWRFdmVudD4oKTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNYXJxdWVlV2l6YXJkVmFsaWRFdmVudCB7XHJcbiAgICBzdGVwOiBNYXJxdWVlV2l6YXJkU3RlcENvbXBvbmVudDtcclxuICAgIHZhbGlkOiBib29sZWFuO1xyXG59Il19