/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, ViewChild } from '@angular/core';
import { MenuNavigationToggleDirective } from '../../../directives/menu-navigation/menu-navigation-toggle.directive';
import { PageHeaderService } from '../page-header.service';
export class PageHeaderIconMenuComponent {
    /**
     * @param {?} _service
     */
    constructor(_service) {
        this._service = _service;
        this._subscription = _service.activeIconMenu$.subscribe((next) => {
            // Close all but the most recently opened menu
            if (next !== this.menu) {
                this._isOpen = false;
            }
        });
    }
    /**
     * @return {?}
     */
    get isOpen() {
        return this._isOpen;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isOpen(value) {
        this._isOpen = value;
        if (value) {
            this._service.activeIconMenu$.next(this.menu);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    select(item) {
        if (item.select) {
            item.select.call(item, item);
        }
    }
    /**
     * @param {?} item
     * @param {?} event
     * @return {?}
     */
    keydownHandler(item, event) {
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
    }
}
PageHeaderIconMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-page-header-icon-menu',
                template: `<div class="page-header-icon-menu"
    dropdown
    placement="bottom right"
    [(isOpen)]="isOpen">

    <a role="button"
        class="page-header-icon-menu-button"
        [attr.aria-label]="menu.label"
        aria-haspopup="true"
        tabindex="0"
        (click)="select(menu)"
        dropdownToggle
        uxMenuNavigationToggle
        #menuNavigationToggle="uxMenuNavigationToggle"
        [(menuOpen)]="isOpen">

        <i class="hpe-icon" [ngClass]="menu.icon"></i>
        <span class="label label-primary" *ngIf="menu?.badge" aria-hidden="true">{{ menu.badge }}</span>

    </a>

    <ul *dropdownMenu
        class="dropdown-menu"
        role="menu"
        uxMenuNavigation
        [toggleButton]="menuNavigationToggle">

        <li *ngFor="let dropdown of menu?.dropdown"
            role="none"
            [class.dropdown-header]="dropdown.header"
            [class.dropdown-divider]="dropdown.divider">

            <span class="font-bold" *ngIf="dropdown.header">{{ dropdown.title }}</span>

            <a *ngIf="!dropdown.header"
                role="menuitem"
                class="dropdown-item"
                tabindex="-1"
                (click)="select(dropdown)"
                (keydown)="keydownHandler(dropdown, $event)"
                uxMenuNavigationItem>


                <span class="dropdown-item-title">
                    <i class="hpe-icon hpe-fw" [ngClass]="dropdown.icon"></i>
                    {{ dropdown.title }}
                </span>
                <span *ngIf="dropdown.subtitle" class="dropdown-item-subtitle">{{ dropdown.subtitle }}</span>

            </a>
        </li>

    </ul>
</div>`
            },] },
];
/** @nocollapse */
PageHeaderIconMenuComponent.ctorParameters = () => [
    { type: PageHeaderService, },
];
PageHeaderIconMenuComponent.propDecorators = {
    "menu": [{ type: Input },],
    "menuNavigationToggle": [{ type: ViewChild, args: ['menuNavigationToggle',] },],
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3BhZ2UtaGVhZGVyL2ljb24tbWVudS9pY29uLW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFFckgsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUEyRDNELE1BQU07Ozs7SUFvQkYsWUFBb0IsUUFBMkI7UUFBM0IsYUFBUSxHQUFSLFFBQVEsQ0FBbUI7UUFDM0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFOztZQUU3RCxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2FBQ3hCO1NBQ0osQ0FBQyxDQUFDO0tBQ047Ozs7SUF2QkQsSUFBSSxNQUFNO1FBQ04sTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDdkI7Ozs7O0lBRUQsSUFBSSxNQUFNLENBQUMsS0FBYztRQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqRDtLQUNKOzs7O0lBZ0JELFdBQVc7UUFDUCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3BDOzs7OztJQUVELE1BQU0sQ0FBQyxJQUF5RDtRQUM1RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNoQztLQUNKOzs7Ozs7SUFFRCxjQUFjLENBQUMsSUFBeUQsRUFBRSxLQUFvQjtRQUUxRixNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNoQixLQUFLLE9BQU8sQ0FBQztZQUNiLEtBQUssR0FBRztnQkFDSixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDcEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNsQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDeEIsS0FBSyxDQUFDO1NBQ2I7S0FDSjs7O1lBNUdKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BcURQO2FBQ047Ozs7WUExRFEsaUJBQWlCOzs7cUJBNkRyQixLQUFLO3FDQWFMLFNBQVMsU0FBQyxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTWVudU5hdmlnYXRpb25Ub2dnbGVEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi8uLi9kaXJlY3RpdmVzL21lbnUtbmF2aWdhdGlvbi9tZW51LW5hdmlnYXRpb24tdG9nZ2xlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFBhZ2VIZWFkZXJJY29uTWVudSwgUGFnZUhlYWRlckljb25NZW51RHJvcGRvd25JdGVtIH0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IFBhZ2VIZWFkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vcGFnZS1oZWFkZXIuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndXgtcGFnZS1oZWFkZXItaWNvbi1tZW51JyxcclxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInBhZ2UtaGVhZGVyLWljb24tbWVudVwiXHJcbiAgICBkcm9wZG93blxyXG4gICAgcGxhY2VtZW50PVwiYm90dG9tIHJpZ2h0XCJcclxuICAgIFsoaXNPcGVuKV09XCJpc09wZW5cIj5cclxuXHJcbiAgICA8YSByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgICBjbGFzcz1cInBhZ2UtaGVhZGVyLWljb24tbWVudS1idXR0b25cIlxyXG4gICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwibWVudS5sYWJlbFwiXHJcbiAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgIHRhYmluZGV4PVwiMFwiXHJcbiAgICAgICAgKGNsaWNrKT1cInNlbGVjdChtZW51KVwiXHJcbiAgICAgICAgZHJvcGRvd25Ub2dnbGVcclxuICAgICAgICB1eE1lbnVOYXZpZ2F0aW9uVG9nZ2xlXHJcbiAgICAgICAgI21lbnVOYXZpZ2F0aW9uVG9nZ2xlPVwidXhNZW51TmF2aWdhdGlvblRvZ2dsZVwiXHJcbiAgICAgICAgWyhtZW51T3BlbildPVwiaXNPcGVuXCI+XHJcblxyXG4gICAgICAgIDxpIGNsYXNzPVwiaHBlLWljb25cIiBbbmdDbGFzc109XCJtZW51Lmljb25cIj48L2k+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbCBsYWJlbC1wcmltYXJ5XCIgKm5nSWY9XCJtZW51Py5iYWRnZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPnt7IG1lbnUuYmFkZ2UgfX08L3NwYW4+XHJcblxyXG4gICAgPC9hPlxyXG5cclxuICAgIDx1bCAqZHJvcGRvd25NZW51XHJcbiAgICAgICAgY2xhc3M9XCJkcm9wZG93bi1tZW51XCJcclxuICAgICAgICByb2xlPVwibWVudVwiXHJcbiAgICAgICAgdXhNZW51TmF2aWdhdGlvblxyXG4gICAgICAgIFt0b2dnbGVCdXR0b25dPVwibWVudU5hdmlnYXRpb25Ub2dnbGVcIj5cclxuXHJcbiAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBkcm9wZG93biBvZiBtZW51Py5kcm9wZG93blwiXHJcbiAgICAgICAgICAgIHJvbGU9XCJub25lXCJcclxuICAgICAgICAgICAgW2NsYXNzLmRyb3Bkb3duLWhlYWRlcl09XCJkcm9wZG93bi5oZWFkZXJcIlxyXG4gICAgICAgICAgICBbY2xhc3MuZHJvcGRvd24tZGl2aWRlcl09XCJkcm9wZG93bi5kaXZpZGVyXCI+XHJcblxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZvbnQtYm9sZFwiICpuZ0lmPVwiZHJvcGRvd24uaGVhZGVyXCI+e3sgZHJvcGRvd24udGl0bGUgfX08L3NwYW4+XHJcblxyXG4gICAgICAgICAgICA8YSAqbmdJZj1cIiFkcm9wZG93bi5oZWFkZXJcIlxyXG4gICAgICAgICAgICAgICAgcm9sZT1cIm1lbnVpdGVtXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiXHJcbiAgICAgICAgICAgICAgICB0YWJpbmRleD1cIi0xXCJcclxuICAgICAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3QoZHJvcGRvd24pXCJcclxuICAgICAgICAgICAgICAgIChrZXlkb3duKT1cImtleWRvd25IYW5kbGVyKGRyb3Bkb3duLCAkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgIHV4TWVudU5hdmlnYXRpb25JdGVtPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRyb3Bkb3duLWl0ZW0tdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImhwZS1pY29uIGhwZS1md1wiIFtuZ0NsYXNzXT1cImRyb3Bkb3duLmljb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAge3sgZHJvcGRvd24udGl0bGUgfX1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiZHJvcGRvd24uc3VidGl0bGVcIiBjbGFzcz1cImRyb3Bkb3duLWl0ZW0tc3VidGl0bGVcIj57eyBkcm9wZG93bi5zdWJ0aXRsZSB9fTwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2xpPlxyXG5cclxuICAgIDwvdWw+XHJcbjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2VIZWFkZXJJY29uTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcblxyXG4gICAgQElucHV0KCkgbWVudTogUGFnZUhlYWRlckljb25NZW51O1xyXG5cclxuICAgIGdldCBpc09wZW4oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzT3BlbjtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgaXNPcGVuKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5faXNPcGVuID0gdmFsdWU7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NlcnZpY2UuYWN0aXZlSWNvbk1lbnUkLm5leHQodGhpcy5tZW51KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQFZpZXdDaGlsZCgnbWVudU5hdmlnYXRpb25Ub2dnbGUnKSBtZW51TmF2aWdhdGlvblRvZ2dsZTogTWVudU5hdmlnYXRpb25Ub2dnbGVEaXJlY3RpdmU7XHJcblxyXG4gICAgcHJpdmF0ZSBfaXNPcGVuOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2VydmljZTogUGFnZUhlYWRlclNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSBfc2VydmljZS5hY3RpdmVJY29uTWVudSQuc3Vic2NyaWJlKChuZXh0KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIENsb3NlIGFsbCBidXQgdGhlIG1vc3QgcmVjZW50bHkgb3BlbmVkIG1lbnVcclxuICAgICAgICAgICAgaWYgKG5leHQgIT09IHRoaXMubWVudSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faXNPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3QoaXRlbTogUGFnZUhlYWRlckljb25NZW51IHwgUGFnZUhlYWRlckljb25NZW51RHJvcGRvd25JdGVtKSB7XHJcbiAgICAgICAgaWYgKGl0ZW0uc2VsZWN0KSB7XHJcbiAgICAgICAgICAgIGl0ZW0uc2VsZWN0LmNhbGwoaXRlbSwgaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGtleWRvd25IYW5kbGVyKGl0ZW06IFBhZ2VIZWFkZXJJY29uTWVudSB8IFBhZ2VIZWFkZXJJY29uTWVudURyb3Bkb3duSXRlbSwgZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcclxuICAgICAgICAgICAgY2FzZSAnRW50ZXInOlxyXG4gICAgICAgICAgICBjYXNlICcgJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0KGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVudU5hdmlnYXRpb25Ub2dnbGUuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==