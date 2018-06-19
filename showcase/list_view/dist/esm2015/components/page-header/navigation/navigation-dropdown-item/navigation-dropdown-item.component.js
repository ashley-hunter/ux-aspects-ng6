/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { PageHeaderService } from '../../page-header.service';
export class PageHeaderNavigationDropdownItemComponent {
    /**
     * @param {?} _pageHeaderService
     */
    constructor(_pageHeaderService) {
        this._pageHeaderService = _pageHeaderService;
        this.dropdownOpen = false;
        this._hover$ = new Subject();
        // subscribe to stream with a debounce (a small debounce is all that is required)
        this._subscription = this._hover$.pipe(debounceTime(1)).subscribe(visible => this.dropdownOpen = visible);
        // Close submenus when selected item changes
        this._subscription.add(_pageHeaderService.selected$.subscribe(() => {
            this.dropdownOpen = false;
        }));
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
        // clicking on an item with children then return
        if (item.children) {
            return;
        }
        // emit the selected item in an event
        this._pageHeaderService.select(item);
    }
    /**
     * @return {?}
     */
    focus() {
        this.button.nativeElement.focus();
    }
    /**
     * @return {?}
     */
    hoverStart() {
        this._hover$.next(true);
    }
    /**
     * @return {?}
     */
    hoverLeave() {
        this._hover$.next(false);
    }
    /**
     * @return {?}
     */
    close() {
        this.dropdownOpen = false;
    }
    /**
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    keydownHandler(event, item) {
        switch (event.key) {
            case 'Enter':
            case ' ':
                this.select(item);
                event.preventDefault();
                event.stopPropagation();
                break;
        }
    }
}
PageHeaderNavigationDropdownItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-page-header-horizontal-navigation-dropdown-item',
                exportAs: 'ux-page-header-horizontal-navigation-dropdown-item',
                template: `<div *ngIf="item.children && item.children.length > 0"
    dropdown
    #subMenu="bs-dropdown"
    [isOpen]="dropdownOpen"
    container="body"
    placement="right"
    (mouseenter)="hoverStart()"
    (mouseleave)="hoverLeave()">

    <a role="menuitem"
        class="dropdown-item"
        [class.selected]="item.selected"
        aria-haspopup="true"
        [attr.aria-expanded]="dropdownOpen"
        [attr.aria-selected]="item.selected"
        tabindex="-1"
        #button
        dropdownToggle
        uxMenuNavigationToggle
        #menuNavigationToggle="uxMenuNavigationToggle"
        [(menuOpen)]="dropdownOpen"
        menuPosition="right">

        <span class="dropdown-item-title">{{ item.title }}</span>
        <span class="dropdown-item-icon hpe-icon hpe-next"></span>

    </a>

    <ul *dropdownMenu
        role="menu"
        class="dropdown-menu horizontal-navigation-dropdown-submenu"
        (mouseenter)="hoverStart()"
        (mouseleave)="hoverLeave()"
        uxMenuNavigation
        #menuNavigation="uxMenuNavigation"
        [toggleButton]="menuNavigationToggle"
        toggleButtonPosition="left">

        <li *ngFor="let subItem of item.children" role="none">

            <a role="menuitem"
                class="dropdown-item"
                [class.selected]="subItem.selected"
                [attr.aria-selected]="subItem.selected"
                tabindex="-1"
                (click)="select(subItem)"
                (keydown)="keydownHandler($event, subItem)"
                uxMenuNavigationItem>

                <span class="dropdown-item-title">{{ subItem.title }}</span>

            </a>

        </li>
    </ul>

</div>

<div *ngIf="!item.children || item.children.length === 0"
    (mouseenter)="hoverStart()"
    (mouseleave)="hoverLeave()">

    <a role="menuitem"
        #button
        class="dropdown-item"
        [class.selected]="item.selected"
        [attr.aria-selected]="item.selected"
        tabindex="-1"
        (click)="select(item)"
        (keydown)="keydownHandler($event, item)">

        <span class="dropdown-item-title">{{ item.title }}</span>

    </a>

</div>`
            },] },
];
/** @nocollapse */
PageHeaderNavigationDropdownItemComponent.ctorParameters = () => [
    { type: PageHeaderService, },
];
PageHeaderNavigationDropdownItemComponent.propDecorators = {
    "item": [{ type: Input },],
    "button": [{ type: ViewChild, args: ['button',] },],
};
function PageHeaderNavigationDropdownItemComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    PageHeaderNavigationDropdownItemComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    PageHeaderNavigationDropdownItemComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    PageHeaderNavigationDropdownItemComponent.propDecorators;
    /** @type {?} */
    PageHeaderNavigationDropdownItemComponent.prototype.item;
    /** @type {?} */
    PageHeaderNavigationDropdownItemComponent.prototype.button;
    /** @type {?} */
    PageHeaderNavigationDropdownItemComponent.prototype.dropdownOpen;
    /** @type {?} */
    PageHeaderNavigationDropdownItemComponent.prototype._subscription;
    /** @type {?} */
    PageHeaderNavigationDropdownItemComponent.prototype._hover$;
    /** @type {?} */
    PageHeaderNavigationDropdownItemComponent.prototype._pageHeaderService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1kcm9wZG93bi1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3BhZ2UtaGVhZGVyL25hdmlnYXRpb24vbmF2aWdhdGlvbi1kcm9wZG93bi1pdGVtL25hdmlnYXRpb24tZHJvcGRvd24taXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBYSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkYsT0FBTyxFQUFFLE9BQU8sRUFBa0IsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBbUY5RCxNQUFNOzs7O0lBWUYsWUFBb0Isa0JBQXFDO1FBQXJDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7NEJBTGpDLEtBQUs7dUJBR08sSUFBSSxPQUFPLEVBQVc7O1FBS3RELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsQ0FBQzs7UUFHMUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQ2xCLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQzdCLENBQUMsQ0FDTCxDQUFDO0tBQ0w7Ozs7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUNwQzs7Ozs7SUFFRCxNQUFNLENBQUMsSUFBc0M7O1FBR3pDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLE1BQU0sQ0FBQztTQUNWOztRQUdELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDeEM7Ozs7SUFFRCxLQUFLO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDckM7Ozs7SUFFRCxVQUFVO1FBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDM0I7Ozs7SUFFRCxVQUFVO1FBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDNUI7Ozs7SUFFRCxLQUFLO1FBQ0QsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7S0FDN0I7Ozs7OztJQUVELGNBQWMsQ0FBQyxLQUFvQixFQUFFLElBQXNDO1FBRXZFLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLEtBQUssT0FBTyxDQUFDO1lBQ2IsS0FBSyxHQUFHO2dCQUNKLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2xCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUN4QixLQUFLLENBQUM7U0FDYjtLQUNKOzs7WUFsSkosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxvREFBb0Q7Z0JBQzlELFFBQVEsRUFBRSxvREFBb0Q7Z0JBQzlELFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BMkVQO2FBQ047Ozs7WUFsRlEsaUJBQWlCOzs7cUJBcUZyQixLQUFLO3VCQUVMLFNBQVMsU0FBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCAsICBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBQYWdlSGVhZGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3BhZ2UtaGVhZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYWdlSGVhZGVyTmF2aWdhdGlvbkRyb3Bkb3duSXRlbSB9IGZyb20gJy4uL25hdmlnYXRpb24uY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd1eC1wYWdlLWhlYWRlci1ob3Jpem9udGFsLW5hdmlnYXRpb24tZHJvcGRvd24taXRlbScsXHJcbiAgICBleHBvcnRBczogJ3V4LXBhZ2UtaGVhZGVyLWhvcml6b250YWwtbmF2aWdhdGlvbi1kcm9wZG93bi1pdGVtJyxcclxuICAgIHRlbXBsYXRlOiBgPGRpdiAqbmdJZj1cIml0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwXCJcclxuICAgIGRyb3Bkb3duXHJcbiAgICAjc3ViTWVudT1cImJzLWRyb3Bkb3duXCJcclxuICAgIFtpc09wZW5dPVwiZHJvcGRvd25PcGVuXCJcclxuICAgIGNvbnRhaW5lcj1cImJvZHlcIlxyXG4gICAgcGxhY2VtZW50PVwicmlnaHRcIlxyXG4gICAgKG1vdXNlZW50ZXIpPVwiaG92ZXJTdGFydCgpXCJcclxuICAgIChtb3VzZWxlYXZlKT1cImhvdmVyTGVhdmUoKVwiPlxyXG5cclxuICAgIDxhIHJvbGU9XCJtZW51aXRlbVwiXHJcbiAgICAgICAgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCJcclxuICAgICAgICBbY2xhc3Muc2VsZWN0ZWRdPVwiaXRlbS5zZWxlY3RlZFwiXHJcbiAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgIFthdHRyLmFyaWEtZXhwYW5kZWRdPVwiZHJvcGRvd25PcGVuXCJcclxuICAgICAgICBbYXR0ci5hcmlhLXNlbGVjdGVkXT1cIml0ZW0uc2VsZWN0ZWRcIlxyXG4gICAgICAgIHRhYmluZGV4PVwiLTFcIlxyXG4gICAgICAgICNidXR0b25cclxuICAgICAgICBkcm9wZG93blRvZ2dsZVxyXG4gICAgICAgIHV4TWVudU5hdmlnYXRpb25Ub2dnbGVcclxuICAgICAgICAjbWVudU5hdmlnYXRpb25Ub2dnbGU9XCJ1eE1lbnVOYXZpZ2F0aW9uVG9nZ2xlXCJcclxuICAgICAgICBbKG1lbnVPcGVuKV09XCJkcm9wZG93bk9wZW5cIlxyXG4gICAgICAgIG1lbnVQb3NpdGlvbj1cInJpZ2h0XCI+XHJcblxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZHJvcGRvd24taXRlbS10aXRsZVwiPnt7IGl0ZW0udGl0bGUgfX08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJkcm9wZG93bi1pdGVtLWljb24gaHBlLWljb24gaHBlLW5leHRcIj48L3NwYW4+XHJcblxyXG4gICAgPC9hPlxyXG5cclxuICAgIDx1bCAqZHJvcGRvd25NZW51XHJcbiAgICAgICAgcm9sZT1cIm1lbnVcIlxyXG4gICAgICAgIGNsYXNzPVwiZHJvcGRvd24tbWVudSBob3Jpem9udGFsLW5hdmlnYXRpb24tZHJvcGRvd24tc3VibWVudVwiXHJcbiAgICAgICAgKG1vdXNlZW50ZXIpPVwiaG92ZXJTdGFydCgpXCJcclxuICAgICAgICAobW91c2VsZWF2ZSk9XCJob3ZlckxlYXZlKClcIlxyXG4gICAgICAgIHV4TWVudU5hdmlnYXRpb25cclxuICAgICAgICAjbWVudU5hdmlnYXRpb249XCJ1eE1lbnVOYXZpZ2F0aW9uXCJcclxuICAgICAgICBbdG9nZ2xlQnV0dG9uXT1cIm1lbnVOYXZpZ2F0aW9uVG9nZ2xlXCJcclxuICAgICAgICB0b2dnbGVCdXR0b25Qb3NpdGlvbj1cImxlZnRcIj5cclxuXHJcbiAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBzdWJJdGVtIG9mIGl0ZW0uY2hpbGRyZW5cIiByb2xlPVwibm9uZVwiPlxyXG5cclxuICAgICAgICAgICAgPGEgcm9sZT1cIm1lbnVpdGVtXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiXHJcbiAgICAgICAgICAgICAgICBbY2xhc3Muc2VsZWN0ZWRdPVwic3ViSXRlbS5zZWxlY3RlZFwiXHJcbiAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLXNlbGVjdGVkXT1cInN1Ykl0ZW0uc2VsZWN0ZWRcIlxyXG4gICAgICAgICAgICAgICAgdGFiaW5kZXg9XCItMVwiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0KHN1Ykl0ZW0pXCJcclxuICAgICAgICAgICAgICAgIChrZXlkb3duKT1cImtleWRvd25IYW5kbGVyKCRldmVudCwgc3ViSXRlbSlcIlxyXG4gICAgICAgICAgICAgICAgdXhNZW51TmF2aWdhdGlvbkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkcm9wZG93bi1pdGVtLXRpdGxlXCI+e3sgc3ViSXRlbS50aXRsZSB9fTwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcblxyXG48L2Rpdj5cclxuXHJcbjxkaXYgKm5nSWY9XCIhaXRlbS5jaGlsZHJlbiB8fCBpdGVtLmNoaWxkcmVuLmxlbmd0aCA9PT0gMFwiXHJcbiAgICAobW91c2VlbnRlcik9XCJob3ZlclN0YXJ0KClcIlxyXG4gICAgKG1vdXNlbGVhdmUpPVwiaG92ZXJMZWF2ZSgpXCI+XHJcblxyXG4gICAgPGEgcm9sZT1cIm1lbnVpdGVtXCJcclxuICAgICAgICAjYnV0dG9uXHJcbiAgICAgICAgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCJcclxuICAgICAgICBbY2xhc3Muc2VsZWN0ZWRdPVwiaXRlbS5zZWxlY3RlZFwiXHJcbiAgICAgICAgW2F0dHIuYXJpYS1zZWxlY3RlZF09XCJpdGVtLnNlbGVjdGVkXCJcclxuICAgICAgICB0YWJpbmRleD1cIi0xXCJcclxuICAgICAgICAoY2xpY2spPVwic2VsZWN0KGl0ZW0pXCJcclxuICAgICAgICAoa2V5ZG93bik9XCJrZXlkb3duSGFuZGxlcigkZXZlbnQsIGl0ZW0pXCI+XHJcblxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZHJvcGRvd24taXRlbS10aXRsZVwiPnt7IGl0ZW0udGl0bGUgfX08L3NwYW4+XHJcblxyXG4gICAgPC9hPlxyXG5cclxuPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFnZUhlYWRlck5hdmlnYXRpb25Ecm9wZG93bkl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG5cclxuICAgIEBJbnB1dCgpIGl0ZW06IFBhZ2VIZWFkZXJOYXZpZ2F0aW9uRHJvcGRvd25JdGVtO1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ2J1dHRvbicpXHJcbiAgICBidXR0b246IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgZHJvcGRvd25PcGVuOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgICBwcml2YXRlIF9ob3ZlciQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3BhZ2VIZWFkZXJTZXJ2aWNlOiBQYWdlSGVhZGVyU2VydmljZSkge1xyXG5cclxuICAgICAgICAvLyBzdWJzY3JpYmUgdG8gc3RyZWFtIHdpdGggYSBkZWJvdW5jZSAoYSBzbWFsbCBkZWJvdW5jZSBpcyBhbGwgdGhhdCBpcyByZXF1aXJlZClcclxuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSB0aGlzLl9ob3ZlciQucGlwZShkZWJvdW5jZVRpbWUoMSkpLnN1YnNjcmliZSh2aXNpYmxlID0+IHRoaXMuZHJvcGRvd25PcGVuID0gdmlzaWJsZSk7XHJcblxyXG4gICAgICAgIC8vIENsb3NlIHN1Ym1lbnVzIHdoZW4gc2VsZWN0ZWQgaXRlbSBjaGFuZ2VzXHJcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uLmFkZChcclxuICAgICAgICAgICAgX3BhZ2VIZWFkZXJTZXJ2aWNlLnNlbGVjdGVkJC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcm9wZG93bk9wZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdChpdGVtOiBQYWdlSGVhZGVyTmF2aWdhdGlvbkRyb3Bkb3duSXRlbSkge1xyXG5cclxuICAgICAgICAvLyBjbGlja2luZyBvbiBhbiBpdGVtIHdpdGggY2hpbGRyZW4gdGhlbiByZXR1cm5cclxuICAgICAgICBpZiAoaXRlbS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBlbWl0IHRoZSBzZWxlY3RlZCBpdGVtIGluIGFuIGV2ZW50XHJcbiAgICAgICAgdGhpcy5fcGFnZUhlYWRlclNlcnZpY2Uuc2VsZWN0KGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZvY3VzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYnV0dG9uLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBob3ZlclN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuX2hvdmVyJC5uZXh0KHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGhvdmVyTGVhdmUoKSB7XHJcbiAgICAgICAgdGhpcy5faG92ZXIkLm5leHQoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCkge1xyXG4gICAgICAgIHRoaXMuZHJvcGRvd25PcGVuID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAga2V5ZG93bkhhbmRsZXIoZXZlbnQ6IEtleWJvYXJkRXZlbnQsIGl0ZW06IFBhZ2VIZWFkZXJOYXZpZ2F0aW9uRHJvcGRvd25JdGVtKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ0VudGVyJzpcclxuICAgICAgICAgICAgY2FzZSAnICc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdChpdGVtKTtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==