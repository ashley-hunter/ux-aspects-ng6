/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
export class TimeAgoService {
    /**
     * @param {?} _timeAgoService
     */
    constructor(_timeAgoService) {
        this._timeAgoService = _timeAgoService;
    }
    /**
     * @param {?} strings
     * @return {?}
     */
    setStrings(strings) {
        this._timeAgoService.setStrings(strings);
    }
    /**
     * @param {?} past
     * @param {?} present
     * @return {?}
     */
    timeSince(past, present) {
        return this._timeAgoService.timeSince(past, present);
    }
    /**
     * @param {?} moment
     * @return {?}
     */
    timeSinceNow(moment) {
        return this._timeAgoService.timeSinceNow(moment);
    }
}
TimeAgoService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
TimeAgoService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['timeAgoService',] },] },
];
function TimeAgoService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TimeAgoService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TimeAgoService.ctorParameters;
    /** @type {?} */
    TimeAgoService.prototype._timeAgoService;
}
/**
 * @param {?} injector
 * @return {?}
 */
export function timeAgoServiceFactory(injector) {
    return injector.get('timeAgoService');
}
export const /** @type {?} */ timeAgoServiceProvider = {
    provide: 'timeAgoService',
    useFactory: timeAgoServiceFactory,
    deps: ['$injector']
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1hZ28uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJoeWJyaWQvc2VydmljZXMvdGltZS1hZ28vdGltZS1hZ28uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQVksTUFBTSxlQUFlLENBQUM7QUFJN0QsTUFBTTs7OztJQUVGLFlBQThDO1FBQUEsb0JBQWUsR0FBZixlQUFlO0tBQXNCOzs7OztJQUVuRixVQUFVLENBQUMsT0FBOEI7UUFDckMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDNUM7Ozs7OztJQUVELFNBQVMsQ0FBQyxJQUFVLEVBQUUsT0FBYTtRQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ3hEOzs7OztJQUVELFlBQVksQ0FBQyxNQUFZO1FBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNwRDs7O1lBZkosVUFBVTs7Ozs0Q0FHTSxNQUFNLFNBQUMsZ0JBQWdCOzs7Ozs7Ozs7Ozs7Ozs7OztBQWdCeEMsTUFBTSxnQ0FBZ0MsUUFBa0I7SUFDcEQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztDQUN6QztBQUVELE1BQU0sQ0FBQyx1QkFBTSxzQkFBc0IsR0FBRztJQUNsQyxPQUFPLEVBQUUsZ0JBQWdCO0lBQ3pCLFVBQVUsRUFBRSxxQkFBcUI7SUFDakMsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDO0NBQ3RCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElUaW1lQWdvU2VydmljZSwgVGltZUFnb0xvY2FsaXplZFRpbWVzIH0gZnJvbSAnLi90aW1lLWFnby5pbnRlcmZhY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVGltZUFnb1NlcnZpY2UgaW1wbGVtZW50cyBJVGltZUFnb1NlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoJ3RpbWVBZ29TZXJ2aWNlJykgcHJpdmF0ZSBfdGltZUFnb1NlcnZpY2U6IElUaW1lQWdvU2VydmljZSkgeyB9XHJcblxyXG4gICAgc2V0U3RyaW5ncyhzdHJpbmdzOiBUaW1lQWdvTG9jYWxpemVkVGltZXMpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl90aW1lQWdvU2VydmljZS5zZXRTdHJpbmdzKHN0cmluZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHRpbWVTaW5jZShwYXN0OiBEYXRlLCBwcmVzZW50OiBEYXRlKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdGltZUFnb1NlcnZpY2UudGltZVNpbmNlKHBhc3QsIHByZXNlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRpbWVTaW5jZU5vdyhtb21lbnQ6IERhdGUpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90aW1lQWdvU2VydmljZS50aW1lU2luY2VOb3cobW9tZW50KTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0aW1lQWdvU2VydmljZUZhY3RvcnkoaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcbiAgICByZXR1cm4gaW5qZWN0b3IuZ2V0KCd0aW1lQWdvU2VydmljZScpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdGltZUFnb1NlcnZpY2VQcm92aWRlciA9IHtcclxuICAgIHByb3ZpZGU6ICd0aW1lQWdvU2VydmljZScsXHJcbiAgICB1c2VGYWN0b3J5OiB0aW1lQWdvU2VydmljZUZhY3RvcnksXHJcbiAgICBkZXBzOiBbJyRpbmplY3RvciddXHJcbn07Il19