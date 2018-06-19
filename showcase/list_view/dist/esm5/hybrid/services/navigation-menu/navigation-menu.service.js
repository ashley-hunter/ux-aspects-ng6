/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
var NavigationMenuService = /** @class */ (function () {
    function NavigationMenuService(_navigationMenuService) {
        this._navigationMenuService = _navigationMenuService;
    }
    /**
     * @return {?}
     */
    NavigationMenuService.prototype.show = /**
     * @return {?}
     */
    function () {
        this._navigationMenuService.show();
    };
    /**
     * @return {?}
     */
    NavigationMenuService.prototype.hide = /**
     * @return {?}
     */
    function () {
        this._navigationMenuService.hide();
    };
    /**
     * @return {?}
     */
    NavigationMenuService.prototype.visible = /**
     * @return {?}
     */
    function () {
        return this._navigationMenuService.visible();
    };
    /**
     * @return {?}
     */
    NavigationMenuService.prototype.collapseAtWidth = /**
     * @return {?}
     */
    function () {
        return this._navigationMenuService.collapseAtWidth();
    };
    /**
     * @param {?} width
     * @return {?}
     */
    NavigationMenuService.prototype.setCollapseAtWidth = /**
     * @param {?} width
     * @return {?}
     */
    function (width) {
        this._navigationMenuService.setCollapseAtWidth(width);
    };
    /**
     * @return {?}
     */
    NavigationMenuService.prototype.setDefaultCollapseAtWidth = /**
     * @return {?}
     */
    function () {
        this._navigationMenuService.setDefaultCollapseAtWidth();
    };
    NavigationMenuService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    NavigationMenuService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['$navigationMenu',] },] },
    ]; };
    return NavigationMenuService;
}());
export { NavigationMenuService };
function NavigationMenuService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    NavigationMenuService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    NavigationMenuService.ctorParameters;
    /** @type {?} */
    NavigationMenuService.prototype._navigationMenuService;
}
/**
 * @param {?} injector
 * @return {?}
 */
export function navigationMenuServiceFactory(injector) {
    return injector.get('$navigationMenu');
}
export var /** @type {?} */ navigationMenuServiceProvider = {
    provide: '$navigationMenu',
    useFactory: navigationMenuServiceFactory,
    deps: ['$injector']
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1tZW51LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiaHlicmlkL3NlcnZpY2VzL25hdmlnYXRpb24tbWVudS9uYXZpZ2F0aW9uLW1lbnUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQVksTUFBTSxlQUFlLENBQUM7O0lBTXpELCtCQUFnRDtRQUFBLDJCQUFzQixHQUF0QixzQkFBc0I7S0FBNkI7Ozs7SUFFbkcsb0NBQUk7OztJQUFKO1FBQ0ksSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksRUFBRSxDQUFDO0tBQ3RDOzs7O0lBRUQsb0NBQUk7OztJQUFKO1FBQ0ksSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksRUFBRSxDQUFDO0tBQ3RDOzs7O0lBRUQsdUNBQU87OztJQUFQO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUNoRDs7OztJQUVELCtDQUFlOzs7SUFBZjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsZUFBZSxFQUFFLENBQUM7S0FDeEQ7Ozs7O0lBRUQsa0RBQWtCOzs7O0lBQWxCLFVBQW1CLEtBQWE7UUFDNUIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3pEOzs7O0lBRUQseURBQXlCOzs7SUFBekI7UUFDSSxJQUFJLENBQUMsc0JBQXNCLENBQUMseUJBQXlCLEVBQUUsQ0FBQztLQUMzRDs7Z0JBM0JKLFVBQVU7Ozs7Z0RBR08sTUFBTSxTQUFDLGlCQUFpQjs7Z0NBTjFDOztTQUlhLHFCQUFxQjs7Ozs7Ozs7Ozs7Ozs7OztBQThCbEMsTUFBTSx1Q0FBdUMsUUFBa0I7SUFDM0QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztDQUMxQztBQUVELE1BQU0sQ0FBQyxxQkFBTSw2QkFBNkIsR0FBRztJQUN6QyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFVBQVUsRUFBRSw0QkFBNEI7SUFDeEMsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDO0NBQ3RCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElOYXZpZ2F0aW9uTWVudVNlcnZpY2UgfSBmcm9tICcuL25hdmlnYXRpb24tbWVudS5pbnRlcmZhY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbk1lbnVTZXJ2aWNlIGltcGxlbWVudHMgSU5hdmlnYXRpb25NZW51U2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIEBJbmplY3QoJyRuYXZpZ2F0aW9uTWVudScpIHByaXZhdGUgX25hdmlnYXRpb25NZW51U2VydmljZTogSU5hdmlnYXRpb25NZW51U2VydmljZSkgeyB9XHJcblxyXG4gICAgc2hvdygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9uYXZpZ2F0aW9uTWVudVNlcnZpY2Uuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fbmF2aWdhdGlvbk1lbnVTZXJ2aWNlLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICB2aXNpYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9uYXZpZ2F0aW9uTWVudVNlcnZpY2UudmlzaWJsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbGxhcHNlQXRXaWR0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9uYXZpZ2F0aW9uTWVudVNlcnZpY2UuY29sbGFwc2VBdFdpZHRoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q29sbGFwc2VBdFdpZHRoKHdpZHRoOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9uYXZpZ2F0aW9uTWVudVNlcnZpY2Uuc2V0Q29sbGFwc2VBdFdpZHRoKHdpZHRoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXREZWZhdWx0Q29sbGFwc2VBdFdpZHRoKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX25hdmlnYXRpb25NZW51U2VydmljZS5zZXREZWZhdWx0Q29sbGFwc2VBdFdpZHRoKCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGlvbk1lbnVTZXJ2aWNlRmFjdG9yeShpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuICAgIHJldHVybiBpbmplY3Rvci5nZXQoJyRuYXZpZ2F0aW9uTWVudScpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbmF2aWdhdGlvbk1lbnVTZXJ2aWNlUHJvdmlkZXIgPSB7XHJcbiAgICBwcm92aWRlOiAnJG5hdmlnYXRpb25NZW51JyxcclxuICAgIHVzZUZhY3Rvcnk6IG5hdmlnYXRpb25NZW51U2VydmljZUZhY3RvcnksXHJcbiAgICBkZXBzOiBbJyRpbmplY3RvciddXHJcbn07Il19