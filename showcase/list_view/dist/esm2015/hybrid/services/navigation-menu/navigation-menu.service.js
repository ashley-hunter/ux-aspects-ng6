/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
export class NavigationMenuService {
    /**
     * @param {?} _navigationMenuService
     */
    constructor(_navigationMenuService) {
        this._navigationMenuService = _navigationMenuService;
    }
    /**
     * @return {?}
     */
    show() {
        this._navigationMenuService.show();
    }
    /**
     * @return {?}
     */
    hide() {
        this._navigationMenuService.hide();
    }
    /**
     * @return {?}
     */
    visible() {
        return this._navigationMenuService.visible();
    }
    /**
     * @return {?}
     */
    collapseAtWidth() {
        return this._navigationMenuService.collapseAtWidth();
    }
    /**
     * @param {?} width
     * @return {?}
     */
    setCollapseAtWidth(width) {
        this._navigationMenuService.setCollapseAtWidth(width);
    }
    /**
     * @return {?}
     */
    setDefaultCollapseAtWidth() {
        this._navigationMenuService.setDefaultCollapseAtWidth();
    }
}
NavigationMenuService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
NavigationMenuService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['$navigationMenu',] },] },
];
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
export const /** @type {?} */ navigationMenuServiceProvider = {
    provide: '$navigationMenu',
    useFactory: navigationMenuServiceFactory,
    deps: ['$injector']
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1tZW51LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiaHlicmlkL3NlcnZpY2VzL25hdmlnYXRpb24tbWVudS9uYXZpZ2F0aW9uLW1lbnUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQVksTUFBTSxlQUFlLENBQUM7QUFJN0QsTUFBTTs7OztJQUVGLFlBQWdEO1FBQUEsMkJBQXNCLEdBQXRCLHNCQUFzQjtLQUE2Qjs7OztJQUVuRyxJQUFJO1FBQ0EsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksRUFBRSxDQUFDO0tBQ3RDOzs7O0lBRUQsSUFBSTtRQUNBLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUN0Qzs7OztJQUVELE9BQU87UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQ2hEOzs7O0lBRUQsZUFBZTtRQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsZUFBZSxFQUFFLENBQUM7S0FDeEQ7Ozs7O0lBRUQsa0JBQWtCLENBQUMsS0FBYTtRQUM1QixJQUFJLENBQUMsc0JBQXNCLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDekQ7Ozs7SUFFRCx5QkFBeUI7UUFDckIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLHlCQUF5QixFQUFFLENBQUM7S0FDM0Q7OztZQTNCSixVQUFVOzs7OzRDQUdPLE1BQU0sU0FBQyxpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEIxQyxNQUFNLHVDQUF1QyxRQUFrQjtJQUMzRCxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0NBQzFDO0FBRUQsTUFBTSxDQUFDLHVCQUFNLDZCQUE2QixHQUFHO0lBQ3pDLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsVUFBVSxFQUFFLDRCQUE0QjtJQUN4QyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUM7Q0FDdEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSU5hdmlnYXRpb25NZW51U2VydmljZSB9IGZyb20gJy4vbmF2aWdhdGlvbi1tZW51LmludGVyZmFjZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uTWVudVNlcnZpY2UgaW1wbGVtZW50cyBJTmF2aWdhdGlvbk1lbnVTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggQEluamVjdCgnJG5hdmlnYXRpb25NZW51JykgcHJpdmF0ZSBfbmF2aWdhdGlvbk1lbnVTZXJ2aWNlOiBJTmF2aWdhdGlvbk1lbnVTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBzaG93KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX25hdmlnYXRpb25NZW51U2VydmljZS5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9uYXZpZ2F0aW9uTWVudVNlcnZpY2UuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHZpc2libGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hdmlnYXRpb25NZW51U2VydmljZS52aXNpYmxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29sbGFwc2VBdFdpZHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hdmlnYXRpb25NZW51U2VydmljZS5jb2xsYXBzZUF0V2lkdGgoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDb2xsYXBzZUF0V2lkdGgod2lkdGg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX25hdmlnYXRpb25NZW51U2VydmljZS5zZXRDb2xsYXBzZUF0V2lkdGgod2lkdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERlZmF1bHRDb2xsYXBzZUF0V2lkdGgoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fbmF2aWdhdGlvbk1lbnVTZXJ2aWNlLnNldERlZmF1bHRDb2xsYXBzZUF0V2lkdGgoKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0aW9uTWVudVNlcnZpY2VGYWN0b3J5KGluamVjdG9yOiBJbmplY3Rvcikge1xyXG4gICAgcmV0dXJuIGluamVjdG9yLmdldCgnJG5hdmlnYXRpb25NZW51Jyk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBuYXZpZ2F0aW9uTWVudVNlcnZpY2VQcm92aWRlciA9IHtcclxuICAgIHByb3ZpZGU6ICckbmF2aWdhdGlvbk1lbnUnLFxyXG4gICAgdXNlRmFjdG9yeTogbmF2aWdhdGlvbk1lbnVTZXJ2aWNlRmFjdG9yeSxcclxuICAgIGRlcHM6IFsnJGluamVjdG9yJ11cclxufTsiXX0=