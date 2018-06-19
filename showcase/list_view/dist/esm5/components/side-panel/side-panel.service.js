/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
var SidePanelService = /** @class */ (function () {
    function SidePanelService() {
        this.open$ = new BehaviorSubject(false);
    }
    /**
     * @return {?}
     */
    SidePanelService.prototype.open = /**
     * @return {?}
     */
    function () {
        this.open$.next(true);
    };
    /**
     * @return {?}
     */
    SidePanelService.prototype.close = /**
     * @return {?}
     */
    function () {
        this.open$.next(false);
    };
    SidePanelService.decorators = [
        { type: Injectable },
    ];
    return SidePanelService;
}());
export { SidePanelService };
function SidePanelService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SidePanelService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SidePanelService.ctorParameters;
    /** @type {?} */
    SidePanelService.prototype.open$;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1wYW5lbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2lkZS1wYW5lbC9zaWRlLXBhbmVsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O3FCQUszQixJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUM7Ozs7O0lBRTNDLCtCQUFJOzs7SUFBSjtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3pCOzs7O0lBRUQsZ0NBQUs7OztJQUFMO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDMUI7O2dCQVhKLFVBQVU7OzJCQUhYOztTQUlhLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTaWRlUGFuZWxTZXJ2aWNlIHtcclxuXHJcbiAgICBvcGVuJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICAgIG9wZW4oKSB7XHJcbiAgICAgICAgdGhpcy5vcGVuJC5uZXh0KHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCkge1xyXG4gICAgICAgIHRoaXMub3BlbiQubmV4dChmYWxzZSk7XHJcbiAgICB9XHJcbn0iXX0=