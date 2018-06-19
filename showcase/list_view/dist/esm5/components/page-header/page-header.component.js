/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ContentChildren, EventEmitter, Input, Output, QueryList, TemplateRef } from '@angular/core';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { ColorService } from '../../services/color/index';
import { PageHeaderCustomMenuDirective } from './custom-menu/custom-menu.directive';
import { PageHeaderService } from './page-header.service';
var PageHeaderComponent = /** @class */ (function () {
    function PageHeaderComponent(_colorService, _pageHeaderService) {
        this._colorService = _colorService;
        this._pageHeaderService = _pageHeaderService;
        this.alignment = 'center';
        this.condensed = false;
        this.backVisible = true;
        this.secondaryNavigationAlignment = 'center';
        this.secondaryNavigationAutoselect = false;
        this.backClick = new EventEmitter();
        this.selected$ = this._pageHeaderService.selected$;
        this.selectedRoot$ = this._pageHeaderService.selectedRoot$;
        this._crumbs = [];
    }
    Object.defineProperty(PageHeaderComponent.prototype, "items", {
        set: /**
         * @param {?} items
         * @return {?}
         */
        function (items) {
            this._pageHeaderService.setItems(items);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageHeaderComponent.prototype, "secondaryNavigation", {
        get: /**
         * @return {?}
         */
        function () {
            return this._pageHeaderService.secondary$.getValue();
        },
        set: /**
         * @param {?} enabled
         * @return {?}
         */
        function (enabled) {
            this._pageHeaderService.setSecondaryNavigation(enabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageHeaderComponent.prototype, "crumbs", {
        get: /**
         * @return {?}
         */
        function () {
            return this.condensed ? tslib_1.__spread(this._crumbs, [{ title: this.header }]) : this._crumbs;
        },
        set: /**
         * @param {?} crumbs
         * @return {?}
         */
        function (crumbs) {
            this._crumbs = crumbs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageHeaderComponent.prototype, "familyBackground", {
        get: /**
         * @return {?}
         */
        function () {
            return this._familyBackground;
        },
        set: /**
         * @param {?} color
         * @return {?}
         */
        function (color) {
            this._familyBackground = this._colorService.resolve(color);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageHeaderComponent.prototype, "familyForeground", {
        get: /**
         * @return {?}
         */
        function () {
            return this._familyForeground;
        },
        set: /**
         * @param {?} color
         * @return {?}
         */
        function (color) {
            this._familyForeground = this._colorService.resolve(color);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    PageHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._subscription = this.selectedRoot$.pipe(distinctUntilChanged(), filter(function () { return _this.secondaryNavigation && _this.secondaryNavigationAutoselect; }), filter(function (item) { return item && item.children && item.children.length > 0; }), map(function (item) { return item.children[0]; })).subscribe(function (item) { return _this.select(item); });
    };
    /**
     * @return {?}
     */
    PageHeaderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    PageHeaderComponent.prototype.goBack = /**
     * @return {?}
     */
    function () {
        this.backClick.emit();
    };
    /**
     * @param {?} item
     * @return {?}
     */
    PageHeaderComponent.prototype.select = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this._pageHeaderService.select(item);
    };
    PageHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-page-header',
                    exportAs: 'ux-page-header',
                    template: "<div class=\"ux-page-header\" [class.page-header-condensed]=\"condensed\" role=\"banner\">\n\n    <!-- Display Upper Section when not condensed -->\n    <div class=\"page-header-actions\" *ngIf=\"!condensed\">\n\n        <div class=\"page-header-logo-container\" role=\"presentation\" [hidden]=\"!logo\">\n            <img [attr.src]=\"logo\" class=\"page-header-logo\">\n        </div>\n\n        <div class=\"page-header-navigation\" [ngClass]=\"alignment\" role=\"navigation\" aria-label=\"Primary Navigation\">\n\n            <!-- The Top Navigation Options -->\n            <ux-page-header-horizontal-navigation></ux-page-header-horizontal-navigation>\n        </div>\n\n        <div class=\"page-header-icon-menus\" role=\"toolbar\">\n            <ng-container *ngFor=\"let menu of customMenus\" [ngTemplateOutlet]=\"menu\"></ng-container>\n\n            <ux-page-header-icon-menu *ngFor=\"let menu of iconMenus\" [menu]=\"menu\"></ux-page-header-icon-menu>\n        </div>\n    </div>\n\n    <!-- Display Lower Section When Not Condensed -->\n    <div class=\"page-header-details\" *ngIf=\"!condensed\">\n\n        <div class=\"page-header-state-container\" role=\"navigation\">\n\n            <button *ngIf=\"backVisible === true\" class=\"page-header-back-button\" (click)=\"goBack()\" aria-label=\"Go Back\">\n                <span class=\"hpe-icon hpe-previous text-primary\"></span>\n            </button>\n\n            <div class=\"page-header-title-container\">\n\n                <ux-breadcrumbs [crumbs]=\"crumbs\"></ux-breadcrumbs>\n\n                <h1 class=\"page-header-title\" [style.backgroundColor]=\"familyBackground\" [style.color]=\"familyForeground\">{{ header }}</h1>\n            </div>\n\n        </div>\n\n    </div>\n\n    <!-- Display This Section Optimized for Condensed Mode -->\n    <div class=\"page-header-condensed-content\" *ngIf=\"condensed\">\n\n        <div class=\"page-header-breadcrumbs\" role=\"navigation\">\n            <ux-breadcrumbs [crumbs]=\"crumbs\"></ux-breadcrumbs>\n        </div>\n\n        <div class=\"page-header-navigation\" [ngClass]=\"alignment\" role=\"navigation\" aria-label=\"Primary Navigation\">\n\n            <!-- The Top Navigation Options -->\n            <ux-page-header-horizontal-navigation></ux-page-header-horizontal-navigation>\n        </div>\n\n        <div class=\"page-header-icon-menus\" role=\"toolbar\">\n            <ng-container *ngFor=\"let menu of customMenus\" [ngTemplateOutlet]=\"menu\"></ng-container>\n            <ux-page-header-icon-menu *ngFor=\"let menu of iconMenus\" [menu]=\"menu\"></ux-page-header-icon-menu>\n        </div>\n\n    </div>\n\n</div>\n\n<div class=\"page-header-secondary\" [ngClass]=\"secondaryNavigationAlignment\" role=\"navigation\" *ngIf=\"secondaryNavigation && (selectedRoot$ | async)\">\n    <ul class=\"nav nav-tabs\" role=\"tablist\" aria-label=\"Secondary Navigation\" *ngIf=\"(selectedRoot$ | async)?.children; let children\">\n        <li *ngFor=\"let child of children\" [class.active]=\"child === (selected$ | async)\" role=\"none\">\n            <a role=\"tab\"\n                [attr.aria-selected]=\"child === (selected$ | async)\"\n                tabindex=\"0\"\n                (click)=\"select(child)\"\n                (keydown.enter)=\"select(child)\">{{ child.title }}</a>\n        </li>\n    </ul>\n</div>",
                    providers: [PageHeaderService]
                },] },
    ];
    /** @nocollapse */
    PageHeaderComponent.ctorParameters = function () { return [
        { type: ColorService, },
        { type: PageHeaderService, },
    ]; };
    PageHeaderComponent.propDecorators = {
        "logo": [{ type: Input },],
        "header": [{ type: Input },],
        "alignment": [{ type: Input },],
        "condensed": [{ type: Input },],
        "iconMenus": [{ type: Input },],
        "backVisible": [{ type: Input },],
        "secondaryNavigationAlignment": [{ type: Input },],
        "secondaryNavigationAutoselect": [{ type: Input },],
        "items": [{ type: Input },],
        "secondaryNavigation": [{ type: Input },],
        "crumbs": [{ type: Input },],
        "familyBackground": [{ type: Input },],
        "familyForeground": [{ type: Input },],
        "backClick": [{ type: Output },],
        "customMenus": [{ type: ContentChildren, args: [PageHeaderCustomMenuDirective, { read: TemplateRef },] },],
    };
    return PageHeaderComponent;
}());
export { PageHeaderComponent };
function PageHeaderComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    PageHeaderComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    PageHeaderComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    PageHeaderComponent.propDecorators;
    /** @type {?} */
    PageHeaderComponent.prototype.logo;
    /** @type {?} */
    PageHeaderComponent.prototype.header;
    /** @type {?} */
    PageHeaderComponent.prototype.alignment;
    /** @type {?} */
    PageHeaderComponent.prototype.condensed;
    /** @type {?} */
    PageHeaderComponent.prototype.iconMenus;
    /** @type {?} */
    PageHeaderComponent.prototype.backVisible;
    /** @type {?} */
    PageHeaderComponent.prototype.secondaryNavigationAlignment;
    /** @type {?} */
    PageHeaderComponent.prototype.secondaryNavigationAutoselect;
    /** @type {?} */
    PageHeaderComponent.prototype.backClick;
    /** @type {?} */
    PageHeaderComponent.prototype.customMenus;
    /** @type {?} */
    PageHeaderComponent.prototype.selected$;
    /** @type {?} */
    PageHeaderComponent.prototype.selectedRoot$;
    /** @type {?} */
    PageHeaderComponent.prototype._crumbs;
    /** @type {?} */
    PageHeaderComponent.prototype._familyBackground;
    /** @type {?} */
    PageHeaderComponent.prototype._familyForeground;
    /** @type {?} */
    PageHeaderComponent.prototype._subscription;
    /** @type {?} */
    PageHeaderComponent.prototype._colorService;
    /** @type {?} */
    PageHeaderComponent.prototype._pageHeaderService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZS1oZWFkZXIvcGFnZS1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkksT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFMUQsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFHcEYsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztJQStJNUUsNkJBQW9CLGFBQTJCLEVBQVUsa0JBQXFDO1FBQTFFLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjt5QkF6RDVDLFFBQVE7eUJBQzVCLEtBQUs7MkJBRUgsSUFBSTs0Q0FDWSxRQUFROzZDQUNOLEtBQUs7eUJBd0NqQyxJQUFJLFlBQVksRUFBRTt5QkFJZSxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUzs2QkFDN0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWE7dUJBRWhFLEVBQUU7S0FLaUU7MEJBbER0RixzQ0FBSzs7Ozs7a0JBQUMsS0FBaUM7WUFDaEQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7MEJBRy9CLG9EQUFtQjs7OztRQUloQztZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLFFBQVEs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dHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFF1ZXJ5TGlzdCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0ICwgIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IENvbG9yU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbG9yL2luZGV4JztcclxuaW1wb3J0IHsgQnJlYWRjcnVtYiB9IGZyb20gJy4uL2JyZWFkY3J1bWJzL2luZGV4JztcclxuaW1wb3J0IHsgUGFnZUhlYWRlckN1c3RvbU1lbnVEaXJlY3RpdmUgfSBmcm9tICcuL2N1c3RvbS1tZW51L2N1c3RvbS1tZW51LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFBhZ2VIZWFkZXJJY29uTWVudSB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IFBhZ2VIZWFkZXJOYXZpZ2F0aW9uSXRlbSB9IGZyb20gJy4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBhZ2VIZWFkZXJOYXZpZ2F0aW9uLCBQYWdlSGVhZGVyU2VydmljZSB9IGZyb20gJy4vcGFnZS1oZWFkZXIuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndXgtcGFnZS1oZWFkZXInLFxyXG4gICAgZXhwb3J0QXM6ICd1eC1wYWdlLWhlYWRlcicsXHJcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJ1eC1wYWdlLWhlYWRlclwiIFtjbGFzcy5wYWdlLWhlYWRlci1jb25kZW5zZWRdPVwiY29uZGVuc2VkXCIgcm9sZT1cImJhbm5lclwiPlxyXG5cclxuICAgIDwhLS0gRGlzcGxheSBVcHBlciBTZWN0aW9uIHdoZW4gbm90IGNvbmRlbnNlZCAtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJwYWdlLWhlYWRlci1hY3Rpb25zXCIgKm5nSWY9XCIhY29uZGVuc2VkXCI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLWhlYWRlci1sb2dvLWNvbnRhaW5lclwiIHJvbGU9XCJwcmVzZW50YXRpb25cIiBbaGlkZGVuXT1cIiFsb2dvXCI+XHJcbiAgICAgICAgICAgIDxpbWcgW2F0dHIuc3JjXT1cImxvZ29cIiBjbGFzcz1cInBhZ2UtaGVhZGVyLWxvZ29cIj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2UtaGVhZGVyLW5hdmlnYXRpb25cIiBbbmdDbGFzc109XCJhbGlnbm1lbnRcIiByb2xlPVwibmF2aWdhdGlvblwiIGFyaWEtbGFiZWw9XCJQcmltYXJ5IE5hdmlnYXRpb25cIj5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gVGhlIFRvcCBOYXZpZ2F0aW9uIE9wdGlvbnMgLS0+XHJcbiAgICAgICAgICAgIDx1eC1wYWdlLWhlYWRlci1ob3Jpem9udGFsLW5hdmlnYXRpb24+PC91eC1wYWdlLWhlYWRlci1ob3Jpem9udGFsLW5hdmlnYXRpb24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLWhlYWRlci1pY29uLW1lbnVzXCIgcm9sZT1cInRvb2xiYXJcIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgbWVudSBvZiBjdXN0b21NZW51c1wiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIm1lbnVcIj48L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgIDx1eC1wYWdlLWhlYWRlci1pY29uLW1lbnUgKm5nRm9yPVwibGV0IG1lbnUgb2YgaWNvbk1lbnVzXCIgW21lbnVdPVwibWVudVwiPjwvdXgtcGFnZS1oZWFkZXItaWNvbi1tZW51PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPCEtLSBEaXNwbGF5IExvd2VyIFNlY3Rpb24gV2hlbiBOb3QgQ29uZGVuc2VkIC0tPlxyXG4gICAgPGRpdiBjbGFzcz1cInBhZ2UtaGVhZGVyLWRldGFpbHNcIiAqbmdJZj1cIiFjb25kZW5zZWRcIj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2UtaGVhZGVyLXN0YXRlLWNvbnRhaW5lclwiIHJvbGU9XCJuYXZpZ2F0aW9uXCI+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiYmFja1Zpc2libGUgPT09IHRydWVcIiBjbGFzcz1cInBhZ2UtaGVhZGVyLWJhY2stYnV0dG9uXCIgKGNsaWNrKT1cImdvQmFjaygpXCIgYXJpYS1sYWJlbD1cIkdvIEJhY2tcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaHBlLWljb24gaHBlLXByZXZpb3VzIHRleHQtcHJpbWFyeVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZS1oZWFkZXItdGl0bGUtY29udGFpbmVyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPHV4LWJyZWFkY3J1bWJzIFtjcnVtYnNdPVwiY3J1bWJzXCI+PC91eC1icmVhZGNydW1icz5cclxuXHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJwYWdlLWhlYWRlci10aXRsZVwiIFtzdHlsZS5iYWNrZ3JvdW5kQ29sb3JdPVwiZmFtaWx5QmFja2dyb3VuZFwiIFtzdHlsZS5jb2xvcl09XCJmYW1pbHlGb3JlZ3JvdW5kXCI+e3sgaGVhZGVyIH19PC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDwhLS0gRGlzcGxheSBUaGlzIFNlY3Rpb24gT3B0aW1pemVkIGZvciBDb25kZW5zZWQgTW9kZSAtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJwYWdlLWhlYWRlci1jb25kZW5zZWQtY29udGVudFwiICpuZ0lmPVwiY29uZGVuc2VkXCI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLWhlYWRlci1icmVhZGNydW1ic1wiIHJvbGU9XCJuYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICAgIDx1eC1icmVhZGNydW1icyBbY3J1bWJzXT1cImNydW1ic1wiPjwvdXgtYnJlYWRjcnVtYnM+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLWhlYWRlci1uYXZpZ2F0aW9uXCIgW25nQ2xhc3NdPVwiYWxpZ25tZW50XCIgcm9sZT1cIm5hdmlnYXRpb25cIiBhcmlhLWxhYmVsPVwiUHJpbWFyeSBOYXZpZ2F0aW9uXCI+XHJcblxyXG4gICAgICAgICAgICA8IS0tIFRoZSBUb3AgTmF2aWdhdGlvbiBPcHRpb25zIC0tPlxyXG4gICAgICAgICAgICA8dXgtcGFnZS1oZWFkZXItaG9yaXpvbnRhbC1uYXZpZ2F0aW9uPjwvdXgtcGFnZS1oZWFkZXItaG9yaXpvbnRhbC1uYXZpZ2F0aW9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZS1oZWFkZXItaWNvbi1tZW51c1wiIHJvbGU9XCJ0b29sYmFyXCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG1lbnUgb2YgY3VzdG9tTWVudXNcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJtZW51XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDx1eC1wYWdlLWhlYWRlci1pY29uLW1lbnUgKm5nRm9yPVwibGV0IG1lbnUgb2YgaWNvbk1lbnVzXCIgW21lbnVdPVwibWVudVwiPjwvdXgtcGFnZS1oZWFkZXItaWNvbi1tZW51PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuPC9kaXY+XHJcblxyXG48ZGl2IGNsYXNzPVwicGFnZS1oZWFkZXItc2Vjb25kYXJ5XCIgW25nQ2xhc3NdPVwic2Vjb25kYXJ5TmF2aWdhdGlvbkFsaWdubWVudFwiIHJvbGU9XCJuYXZpZ2F0aW9uXCIgKm5nSWY9XCJzZWNvbmRhcnlOYXZpZ2F0aW9uICYmIChzZWxlY3RlZFJvb3QkIHwgYXN5bmMpXCI+XHJcbiAgICA8dWwgY2xhc3M9XCJuYXYgbmF2LXRhYnNcIiByb2xlPVwidGFibGlzdFwiIGFyaWEtbGFiZWw9XCJTZWNvbmRhcnkgTmF2aWdhdGlvblwiICpuZ0lmPVwiKHNlbGVjdGVkUm9vdCQgfCBhc3luYyk/LmNoaWxkcmVuOyBsZXQgY2hpbGRyZW5cIj5cclxuICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGNoaWxkIG9mIGNoaWxkcmVuXCIgW2NsYXNzLmFjdGl2ZV09XCJjaGlsZCA9PT0gKHNlbGVjdGVkJCB8IGFzeW5jKVwiIHJvbGU9XCJub25lXCI+XHJcbiAgICAgICAgICAgIDxhIHJvbGU9XCJ0YWJcIlxyXG4gICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1zZWxlY3RlZF09XCJjaGlsZCA9PT0gKHNlbGVjdGVkJCB8IGFzeW5jKVwiXHJcbiAgICAgICAgICAgICAgICB0YWJpbmRleD1cIjBcIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdChjaGlsZClcIlxyXG4gICAgICAgICAgICAgICAgKGtleWRvd24uZW50ZXIpPVwic2VsZWN0KGNoaWxkKVwiPnt7IGNoaWxkLnRpdGxlIH19PC9hPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICA8L3VsPlxyXG48L2Rpdj5gLFxyXG4gICAgcHJvdmlkZXJzOiBbIFBhZ2VIZWFkZXJTZXJ2aWNlIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2VIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gICAgQElucHV0KCkgbG9nbzogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgaGVhZGVyOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBhbGlnbm1lbnQ6ICdsZWZ0JyB8ICdyaWdodCcgfCAnY2VudGVyJyA9ICdjZW50ZXInO1xyXG4gICAgQElucHV0KCkgY29uZGVuc2VkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBpY29uTWVudXM6IFBhZ2VIZWFkZXJJY29uTWVudVtdO1xyXG4gICAgQElucHV0KCkgYmFja1Zpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgQElucHV0KCkgc2Vjb25kYXJ5TmF2aWdhdGlvbkFsaWdubWVudDogc3RyaW5nID0gJ2NlbnRlcic7XHJcbiAgICBASW5wdXQoKSBzZWNvbmRhcnlOYXZpZ2F0aW9uQXV0b3NlbGVjdDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIEBJbnB1dCgpIHNldCBpdGVtcyhpdGVtczogUGFnZUhlYWRlck5hdmlnYXRpb25JdGVtW10pIHtcclxuICAgICAgICB0aGlzLl9wYWdlSGVhZGVyU2VydmljZS5zZXRJdGVtcyhpdGVtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KCkgc2V0IHNlY29uZGFyeU5hdmlnYXRpb24oZW5hYmxlZDogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3BhZ2VIZWFkZXJTZXJ2aWNlLnNldFNlY29uZGFyeU5hdmlnYXRpb24oZW5hYmxlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNlY29uZGFyeU5hdmlnYXRpb24oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhZ2VIZWFkZXJTZXJ2aWNlLnNlY29uZGFyeSQuZ2V0VmFsdWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKSBzZXQgY3J1bWJzKGNydW1iczogQnJlYWRjcnVtYltdKSB7XHJcbiAgICAgICAgdGhpcy5fY3J1bWJzID0gY3J1bWJzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjcnVtYnMoKTogQnJlYWRjcnVtYltdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25kZW5zZWQgPyBbLi4udGhpcy5fY3J1bWJzLCB7IHRpdGxlOiB0aGlzLmhlYWRlciB9XSA6IHRoaXMuX2NydW1icztcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgc2V0IGZhbWlseUJhY2tncm91bmQoY29sb3I6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2ZhbWlseUJhY2tncm91bmQgPSB0aGlzLl9jb2xvclNlcnZpY2UucmVzb2x2ZShjb2xvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGZhbWlseUJhY2tncm91bmQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZmFtaWx5QmFja2dyb3VuZDtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgc2V0IGZhbWlseUZvcmVncm91bmQoY29sb3I6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2ZhbWlseUZvcmVncm91bmQgPSB0aGlzLl9jb2xvclNlcnZpY2UucmVzb2x2ZShjb2xvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGZhbWlseUZvcmVncm91bmQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZmFtaWx5Rm9yZWdyb3VuZDtcclxuICAgIH1cclxuXHJcbiAgICBAT3V0cHV0KCkgYmFja0NsaWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIEBDb250ZW50Q2hpbGRyZW4oUGFnZUhlYWRlckN1c3RvbU1lbnVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgY3VzdG9tTWVudXM6IFF1ZXJ5TGlzdDxUZW1wbGF0ZVJlZjxhbnk+PjtcclxuXHJcbiAgICBzZWxlY3RlZCQ6IEJlaGF2aW9yU3ViamVjdDxQYWdlSGVhZGVyTmF2aWdhdGlvbkl0ZW0+ID0gdGhpcy5fcGFnZUhlYWRlclNlcnZpY2Uuc2VsZWN0ZWQkO1xyXG4gICAgc2VsZWN0ZWRSb290JDogQmVoYXZpb3JTdWJqZWN0PFBhZ2VIZWFkZXJOYXZpZ2F0aW9uSXRlbT4gPSB0aGlzLl9wYWdlSGVhZGVyU2VydmljZS5zZWxlY3RlZFJvb3QkO1xyXG5cclxuICAgIHByaXZhdGUgX2NydW1iczogQnJlYWRjcnVtYltdID0gW107XHJcbiAgICBwcml2YXRlIF9mYW1pbHlCYWNrZ3JvdW5kOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9mYW1pbHlGb3JlZ3JvdW5kOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9zdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb2xvclNlcnZpY2U6IENvbG9yU2VydmljZSwgcHJpdmF0ZSBfcGFnZUhlYWRlclNlcnZpY2U6IFBhZ2VIZWFkZXJTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSB0aGlzLnNlbGVjdGVkUm9vdCQucGlwZShcclxuICAgICAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcclxuICAgICAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMuc2Vjb25kYXJ5TmF2aWdhdGlvbiAmJiB0aGlzLnNlY29uZGFyeU5hdmlnYXRpb25BdXRvc2VsZWN0KSxcclxuICAgICAgICAgICAgZmlsdGVyKChpdGVtOiBQYWdlSGVhZGVyTmF2aWdhdGlvbikgPT4gaXRlbSAmJiBpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCksXHJcbiAgICAgICAgICAgIG1hcChpdGVtID0+IGl0ZW0uY2hpbGRyZW5bMF0pXHJcbiAgICAgICAgKS5zdWJzY3JpYmUoaXRlbSA9PiB0aGlzLnNlbGVjdChpdGVtKSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ29CYWNrKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYmFja0NsaWNrLmVtaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3QoaXRlbTogUGFnZUhlYWRlck5hdmlnYXRpb24pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9wYWdlSGVhZGVyU2VydmljZS5zZWxlY3QoaXRlbSk7XHJcbiAgICB9XHJcbn0iXX0=