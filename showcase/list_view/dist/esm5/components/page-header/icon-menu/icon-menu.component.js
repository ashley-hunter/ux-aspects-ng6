/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, ViewChild } from '@angular/core';
import { MenuNavigationToggleDirective } from '../../../directives/menu-navigation/menu-navigation-toggle.directive';
import { PageHeaderService } from '../page-header.service';
var PageHeaderIconMenuComponent = /** @class */ (function () {
    function PageHeaderIconMenuComponent(_service) {
        var _this = this;
        this._service = _service;
        this._subscription = _service.activeIconMenu$.subscribe(function (next) {
            // Close all but the most recently opened menu
            if (next !== _this.menu) {
                _this._isOpen = false;
            }
        });
    }
    Object.defineProperty(PageHeaderIconMenuComponent.prototype, "isOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isOpen;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isOpen = value;
            if (value) {
                this._service.activeIconMenu$.next(this.menu);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    PageHeaderIconMenuComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscription.unsubscribe();
    };
    /**
     * @param {?} item
     * @return {?}
     */
    PageHeaderIconMenuComponent.prototype.select = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (item.select) {
            item.select.call(item, item);
        }
    };
    /**
     * @param {?} item
     * @param {?} event
     * @return {?}
     */
    PageHeaderIconMenuComponent.prototype.keydownHandler = /**
     * @param {?} item
     * @param {?} event
     * @return {?}
     */
    function (item, event) {
        switch (event.key) {
            case 'Enter':
            case ' ':
                this.select(item);
                this.isOpen = false;
                this.menuNavigationToggle.focus();
                event.preventDefault();
                event.stopPropagation();
                break;
        }
    };
    PageHeaderIconMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-page-header-icon-menu',
                    template: "<div class=\"page-header-icon-menu\"\n    dropdown\n    placement=\"bottom right\"\n    [(isOpen)]=\"isOpen\">\n\n    <a role=\"button\"\n        class=\"page-header-icon-menu-button\"\n        [attr.aria-label]=\"menu.label\"\n        aria-haspopup=\"true\"\n        tabindex=\"0\"\n        (click)=\"select(menu)\"\n        dropdownToggle\n        uxMenuNavigationToggle\n        #menuNavigationToggle=\"uxMenuNavigationToggle\"\n        [(menuOpen)]=\"isOpen\">\n\n        <i class=\"hpe-icon\" [ngClass]=\"menu.icon\"></i>\n        <span class=\"label label-primary\" *ngIf=\"menu?.badge\" aria-hidden=\"true\">{{ menu.badge }}</span>\n\n    </a>\n\n    <ul *dropdownMenu\n        class=\"dropdown-menu\"\n        role=\"menu\"\n        uxMenuNavigation\n        [toggleButton]=\"menuNavigationToggle\">\n\n        <li *ngFor=\"let dropdown of menu?.dropdown\"\n            role=\"none\"\n            [class.dropdown-header]=\"dropdown.header\"\n            [class.dropdown-divider]=\"dropdown.divider\">\n\n            <span class=\"font-bold\" *ngIf=\"dropdown.header\">{{ dropdown.title }}</span>\n\n            <a *ngIf=\"!dropdown.header\"\n                role=\"menuitem\"\n                class=\"dropdown-item\"\n                tabindex=\"-1\"\n                (click)=\"select(dropdown)\"\n                (keydown)=\"keydownHandler(dropdown, $event)\"\n                uxMenuNavigationItem>\n\n\n                <span class=\"dropdown-item-title\">\n                    <i class=\"hpe-icon hpe-fw\" [ngClass]=\"dropdown.icon\"></i>\n                    {{ dropdown.title }}\n                </span>\n                <span *ngIf=\"dropdown.subtitle\" class=\"dropdown-item-subtitle\">{{ dropdown.subtitle }}</span>\n\n            </a>\n        </li>\n\n    </ul>\n</div>"
                },] },
    ];
    /** @nocollapse */
    PageHeaderIconMenuComponent.ctorParameters = function () { return [
        { type: PageHeaderService, },
    ]; };
    PageHeaderIconMenuComponent.propDecorators = {
        "menu": [{ type: Input },],
        "menuNavigationToggle": [{ type: ViewChild, args: ['menuNavigationToggle',] },],
    };
    return PageHeaderIconMenuComponent;
}());
export { PageHeaderIconMenuComponent };
function PageHeaderIconMenuComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    PageHeaderIconMenuComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    PageHeaderIconMenuComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    PageHeaderIconMenuComponent.propDecorators;
    /** @type {?} */
    PageHeaderIconMenuComponent.prototype.menu;
    /** @type {?} */
    PageHeaderIconMenuComponent.prototype.menuNavigationToggle;
    /** @type {?} */
    PageHeaderIconMenuComponent.prototype._isOpen;
    /** @type {?} */
    PageHeaderIconMenuComponent.prototype._subscription;
    /** @type {?} */
    PageHeaderIconMenuComponent.prototype._service;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3BhZ2UtaGVhZGVyL2ljb24tbWVudS9pY29uLW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFFckgsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0lBK0V2RCxxQ0FBb0IsUUFBMkI7UUFBL0MsaUJBT0M7UUFQbUIsYUFBUSxHQUFSLFFBQVEsQ0FBbUI7UUFDM0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQUk7O1lBRXpELEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDckIsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7YUFDeEI7U0FDSixDQUFDLENBQUM7S0FDTjtJQXZCRCxzQkFBSSwrQ0FBTTs7OztRQUFWO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDdkI7Ozs7O1FBRUQsVUFBVyxLQUFjO1lBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ1IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNqRDtTQUNKOzs7T0FQQTs7OztJQXVCRCxpREFBVzs7O0lBQVg7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3BDOzs7OztJQUVELDRDQUFNOzs7O0lBQU4sVUFBTyxJQUF5RDtRQUM1RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNoQztLQUNKOzs7Ozs7SUFFRCxvREFBYzs7Ozs7SUFBZCxVQUFlLElBQXlELEVBQUUsS0FBb0I7UUFFMUYsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDaEIsS0FBSyxPQUFPLENBQUM7WUFDYixLQUFLLEdBQUc7Z0JBQ0osSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDbEMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3hCLEtBQUssQ0FBQztTQUNiO0tBQ0o7O2dCQTVHSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsUUFBUSxFQUFFLDJ2REFxRFA7aUJBQ047Ozs7Z0JBMURRLGlCQUFpQjs7O3lCQTZEckIsS0FBSzt5Q0FhTCxTQUFTLFNBQUMsc0JBQXNCOztzQ0E5RXJDOztTQStEYSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTWVudU5hdmlnYXRpb25Ub2dnbGVEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi8uLi9kaXJlY3RpdmVzL21lbnUtbmF2aWdhdGlvbi9tZW51LW5hdmlnYXRpb24tdG9nZ2xlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFBhZ2VIZWFkZXJJY29uTWVudSwgUGFnZUhlYWRlckljb25NZW51RHJvcGRvd25JdGVtIH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IFBhZ2VIZWFkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vcGFnZS1oZWFkZXIuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndXgtcGFnZS1oZWFkZXItaWNvbi1tZW51JyxcclxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInBhZ2UtaGVhZGVyLWljb24tbWVudVwiXHJcbiAgICBkcm9wZG93blxyXG4gICAgcGxhY2VtZW50PVwiYm90dG9tIHJpZ2h0XCJcclxuICAgIFsoaXNPcGVuKV09XCJpc09wZW5cIj5cclxuXHJcbiAgICA8YSByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgICBjbGFzcz1cInBhZ2UtaGVhZGVyLWljb24tbWVudS1idXR0b25cIlxyXG4gICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwibWVudS5sYWJlbFwiXHJcbiAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgIHRhYmluZGV4PVwiMFwiXHJcbiAgICAgICAgKGNsaWNrKT1cInNlbGVjdChtZW51KVwiXHJcbiAgICAgICAgZHJvcGRvd25Ub2dnbGVcclxuICAgICAgICB1eE1lbnVOYXZpZ2F0aW9uVG9nZ2xlXHJcbiAgICAgICAgI21lbnVOYXZpZ2F0aW9uVG9nZ2xlPVwidXhNZW51TmF2aWdhdGlvblRvZ2dsZVwiXHJcbiAgICAgICAgWyhtZW51T3BlbildPVwiaXNPcGVuXCI+XHJcblxyXG4gICAgICAgIDxpIGNsYXNzPVwiaHBlLWljb25cIiBbbmdDbGFzc109XCJtZW51Lmljb25cIj48L2k+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbCBsYWJlbC1wcmltYXJ5XCIgKm5nSWY9XCJtZW51Py5iYWRnZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPnt7IG1lbnUuYmFkZ2UgfX08L3NwYW4+XHJcblxyXG4gICAgPC9hPlxyXG5cclxuICAgIDx1bCAqZHJvcGRvd25NZW51XHJcbiAgICAgICAgY2xhc3M9XCJkcm9wZG93bi1tZW51XCJcclxuICAgICAgICByb2xlPVwibWVudVwiXHJcbiAgICAgICAgdXhNZW51TmF2aWdhdGlvblxyXG4gICAgICAgIFt0b2dnbGVCdXR0b25dPVwibWVudU5hdmlnYXRpb25Ub2dnbGVcIj5cclxuXHJcbiAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBkcm9wZG93biBvZiBtZW51Py5kcm9wZG93blwiXHJcbiAgICAgICAgICAgIHJvbGU9XCJub25lXCJcclxuICAgICAgICAgICAgW2NsYXNzLmRyb3Bkb3duLWhlYWRlcl09XCJkcm9wZG93bi5oZWFkZXJcIlxyXG4gICAgICAgICAgICBbY2xhc3MuZHJvcGRvd24tZGl2aWRlcl09XCJkcm9wZG93bi5kaXZpZGVyXCI+XHJcblxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZvbnQtYm9sZFwiICpuZ0lmPVwiZHJvcGRvd24uaGVhZGVyXCI+e3sgZHJvcGRvd24udGl0bGUgfX08L3NwYW4+XHJcblxyXG4gICAgICAgICAgICA8YSAqbmdJZj1cIiFkcm9wZG93bi5oZWFkZXJcIlxyXG4gICAgICAgICAgICAgICAgcm9sZT1cIm1lbnVpdGVtXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiXHJcbiAgICAgICAgICAgICAgICB0YWJpbmRleD1cIi0xXCJcclxuICAgICAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3QoZHJvcGRvd24pXCJcclxuICAgICAgICAgICAgICAgIChrZXlkb3duKT1cImtleWRvd25IYW5kbGVyKGRyb3Bkb3duLCAkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgIHV4TWVudU5hdmlnYXRpb25JdGVtPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRyb3Bkb3duLWl0ZW0tdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImhwZS1pY29uIGhwZS1md1wiIFtuZ0NsYXNzXT1cImRyb3Bkb3duLmljb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAge3sgZHJvcGRvd24udGl0bGUgfX1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiZHJvcGRvd24uc3VidGl0bGVcIiBjbGFzcz1cImRyb3Bkb3duLWl0ZW0tc3VidGl0bGVcIj57eyBkcm9wZG93bi5zdWJ0aXRsZSB9fTwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2xpPlxyXG5cclxuICAgIDwvdWw+XHJcbjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2VIZWFkZXJJY29uTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcblxyXG4gICAgQElucHV0KCkgbWVudTogUGFnZUhlYWRlckljb25NZW51O1xyXG5cclxuICAgIGdldCBpc09wZW4oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzT3BlbjtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgaXNPcGVuKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5faXNPcGVuID0gdmFsdWU7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NlcnZpY2UuYWN0aXZlSWNvbk1lbnUkLm5leHQodGhpcy5tZW51KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQFZpZXdDaGlsZCgnbWVudU5hdmlnYXRpb25Ub2dnbGUnKSBtZW51TmF2aWdhdGlvblRvZ2dsZTogTWVudU5hdmlnYXRpb25Ub2dnbGVEaXJlY3RpdmU7XHJcblxyXG4gICAgcHJpdmF0ZSBfaXNPcGVuOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2VydmljZTogUGFnZUhlYWRlclNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSBfc2VydmljZS5hY3RpdmVJY29uTWVudSQuc3Vic2NyaWJlKChuZXh0KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIENsb3NlIGFsbCBidXQgdGhlIG1vc3QgcmVjZW50bHkgb3BlbmVkIG1lbnVcclxuICAgICAgICAgICAgaWYgKG5leHQgIT09IHRoaXMubWVudSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faXNPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3QoaXRlbTogUGFnZUhlYWRlckljb25NZW51IHwgUGFnZUhlYWRlckljb25NZW51RHJvcGRvd25JdGVtKSB7XHJcbiAgICAgICAgaWYgKGl0ZW0uc2VsZWN0KSB7XHJcbiAgICAgICAgICAgIGl0ZW0uc2VsZWN0LmNhbGwoaXRlbSwgaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGtleWRvd25IYW5kbGVyKGl0ZW06IFBhZ2VIZWFkZXJJY29uTWVudSB8IFBhZ2VIZWFkZXJJY29uTWVudURyb3Bkb3duSXRlbSwgZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcclxuICAgICAgICAgICAgY2FzZSAnRW50ZXInOlxyXG4gICAgICAgICAgICBjYXNlICcgJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0KGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVudU5hdmlnYXRpb25Ub2dnbGUuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==