/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
var TimeAgoService = /** @class */ (function () {
    function TimeAgoService(_timeAgoService) {
        this._timeAgoService = _timeAgoService;
    }
    /**
     * @param {?} strings
     * @return {?}
     */
    TimeAgoService.prototype.setStrings = /**
     * @param {?} strings
     * @return {?}
     */
    function (strings) {
        this._timeAgoService.setStrings(strings);
    };
    /**
     * @param {?} past
     * @param {?} present
     * @return {?}
     */
    TimeAgoService.prototype.timeSince = /**
     * @param {?} past
     * @param {?} present
     * @return {?}
     */
    function (past, present) {
        return this._timeAgoService.timeSince(past, present);
    };
    /**
     * @param {?} moment
     * @return {?}
     */
    TimeAgoService.prototype.timeSinceNow = /**
     * @param {?} moment
     * @return {?}
     */
    function (moment) {
        return this._timeAgoService.timeSinceNow(moment);
    };
    TimeAgoService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    TimeAgoService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['timeAgoService',] },] },
    ]; };
    return TimeAgoService;
}());
export { TimeAgoService };
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
export var /** @type {?} */ timeAgoServiceProvider = {
    provide: 'timeAgoService',
    useFactory: timeAgoServiceFactory,
    deps: ['$injector']
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1hZ28uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJoeWJyaWQvc2VydmljZXMvdGltZS1hZ28vdGltZS1hZ28uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQVksTUFBTSxlQUFlLENBQUM7O0lBTXpELHdCQUE4QztRQUFBLG9CQUFlLEdBQWYsZUFBZTtLQUFzQjs7Ozs7SUFFbkYsbUNBQVU7Ozs7SUFBVixVQUFXLE9BQThCO1FBQ3JDLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzVDOzs7Ozs7SUFFRCxrQ0FBUzs7Ozs7SUFBVCxVQUFVLElBQVUsRUFBRSxPQUFhO1FBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDeEQ7Ozs7O0lBRUQscUNBQVk7Ozs7SUFBWixVQUFhLE1BQVk7UUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ3BEOztnQkFmSixVQUFVOzs7O2dEQUdNLE1BQU0sU0FBQyxnQkFBZ0I7O3lCQU54Qzs7U0FJYSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7O0FBa0IzQixNQUFNLGdDQUFnQyxRQUFrQjtJQUNwRCxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0NBQ3pDO0FBRUQsTUFBTSxDQUFDLHFCQUFNLHNCQUFzQixHQUFHO0lBQ2xDLE9BQU8sRUFBRSxnQkFBZ0I7SUFDekIsVUFBVSxFQUFFLHFCQUFxQjtJQUNqQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUM7Q0FDdEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSVRpbWVBZ29TZXJ2aWNlLCBUaW1lQWdvTG9jYWxpemVkVGltZXMgfSBmcm9tICcuL3RpbWUtYWdvLmludGVyZmFjZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUaW1lQWdvU2VydmljZSBpbXBsZW1lbnRzIElUaW1lQWdvU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoQEluamVjdCgndGltZUFnb1NlcnZpY2UnKSBwcml2YXRlIF90aW1lQWdvU2VydmljZTogSVRpbWVBZ29TZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBzZXRTdHJpbmdzKHN0cmluZ3M6IFRpbWVBZ29Mb2NhbGl6ZWRUaW1lcyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3RpbWVBZ29TZXJ2aWNlLnNldFN0cmluZ3Moc3RyaW5ncyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGltZVNpbmNlKHBhc3Q6IERhdGUsIHByZXNlbnQ6IERhdGUpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90aW1lQWdvU2VydmljZS50aW1lU2luY2UocGFzdCwgcHJlc2VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGltZVNpbmNlTm93KG1vbWVudDogRGF0ZSk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpbWVBZ29TZXJ2aWNlLnRpbWVTaW5jZU5vdyhtb21lbnQpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVBZ29TZXJ2aWNlRmFjdG9yeShpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuICAgIHJldHVybiBpbmplY3Rvci5nZXQoJ3RpbWVBZ29TZXJ2aWNlJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0aW1lQWdvU2VydmljZVByb3ZpZGVyID0ge1xyXG4gICAgcHJvdmlkZTogJ3RpbWVBZ29TZXJ2aWNlJyxcclxuICAgIHVzZUZhY3Rvcnk6IHRpbWVBZ29TZXJ2aWNlRmFjdG9yeSxcclxuICAgIGRlcHM6IFsnJGluamVjdG9yJ11cclxufTsiXX0=