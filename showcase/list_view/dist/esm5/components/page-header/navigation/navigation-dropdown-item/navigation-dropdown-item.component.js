/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { PageHeaderService } from '../../page-header.service';
var PageHeaderNavigationDropdownItemComponent = /** @class */ (function () {
    function PageHeaderNavigationDropdownItemComponent(_pageHeaderService) {
        var _this = this;
        this._pageHeaderService = _pageHeaderService;
        this.dropdownOpen = false;
        this._hover$ = new Subject();
        // subscribe to stream with a debounce (a small debounce is all that is required)
        this._subscription = this._hover$.pipe(debounceTime(1)).subscribe(function (visible) { return _this.dropdownOpen = visible; });
        // Close submenus when selected item changes
        this._subscription.add(_pageHeaderService.selected$.subscribe(function () {
            _this.dropdownOpen = false;
        }));
    }
    /**
     * @return {?}
     */
    PageHeaderNavigationDropdownItemComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscription.unsubscribe();
    };
    /**
     * @param {?} item
     * @return {?}
     */
    PageHeaderNavigationDropdownItemComponent.prototype.select = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        // clicking on an item with children then return
        if (item.children) {
            return;
        }
        // emit the selected item in an event
        this._pageHeaderService.select(item);
    };
    /**
     * @return {?}
     */
    PageHeaderNavigationDropdownItemComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.button.nativeElement.focus();
    };
    /**
     * @return {?}
     */
    PageHeaderNavigationDropdownItemComponent.prototype.hoverStart = /**
     * @return {?}
     */
    function () {
        this._hover$.next(true);
    };
    /**
     * @return {?}
     */
    PageHeaderNavigationDropdownItemComponent.prototype.hoverLeave = /**
     * @return {?}
     */
    function () {
        this._hover$.next(false);
    };
    /**
     * @return {?}
     */
    PageHeaderNavigationDropdownItemComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.dropdownOpen = false;
    };
    /**
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    PageHeaderNavigationDropdownItemComponent.prototype.keydownHandler = /**
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    function (event, item) {
        switch (event.key) {
            case 'Enter':
            case ' ':
                this.select(item);
                event.preventDefault();
                event.stopPropagation();
                break;
        }
    };
    PageHeaderNavigationDropdownItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-page-header-horizontal-navigation-dropdown-item',
                    exportAs: 'ux-page-header-horizontal-navigation-dropdown-item',
                    template: "<div *ngIf=\"item.children && item.children.length > 0\"\n    dropdown\n    #subMenu=\"bs-dropdown\"\n    [isOpen]=\"dropdownOpen\"\n    container=\"body\"\n    placement=\"right\"\n    (mouseenter)=\"hoverStart()\"\n    (mouseleave)=\"hoverLeave()\">\n\n    <a role=\"menuitem\"\n        class=\"dropdown-item\"\n        [class.selected]=\"item.selected\"\n        aria-haspopup=\"true\"\n        [attr.aria-expanded]=\"dropdownOpen\"\n        [attr.aria-selected]=\"item.selected\"\n        tabindex=\"-1\"\n        #button\n        dropdownToggle\n        uxMenuNavigationToggle\n        #menuNavigationToggle=\"uxMenuNavigationToggle\"\n        [(menuOpen)]=\"dropdownOpen\"\n        menuPosition=\"right\">\n\n        <span class=\"dropdown-item-title\">{{ item.title }}</span>\n        <span class=\"dropdown-item-icon hpe-icon hpe-next\"></span>\n\n    </a>\n\n    <ul *dropdownMenu\n        role=\"menu\"\n        class=\"dropdown-menu horizontal-navigation-dropdown-submenu\"\n        (mouseenter)=\"hoverStart()\"\n        (mouseleave)=\"hoverLeave()\"\n        uxMenuNavigation\n        #menuNavigation=\"uxMenuNavigation\"\n        [toggleButton]=\"menuNavigationToggle\"\n        toggleButtonPosition=\"left\">\n\n        <li *ngFor=\"let subItem of item.children\" role=\"none\">\n\n            <a role=\"menuitem\"\n                class=\"dropdown-item\"\n                [class.selected]=\"subItem.selected\"\n                [attr.aria-selected]=\"subItem.selected\"\n                tabindex=\"-1\"\n                (click)=\"select(subItem)\"\n                (keydown)=\"keydownHandler($event, subItem)\"\n                uxMenuNavigationItem>\n\n                <span class=\"dropdown-item-title\">{{ subItem.title }}</span>\n\n            </a>\n\n        </li>\n    </ul>\n\n</div>\n\n<div *ngIf=\"!item.children || item.children.length === 0\"\n    (mouseenter)=\"hoverStart()\"\n    (mouseleave)=\"hoverLeave()\">\n\n    <a role=\"menuitem\"\n        #button\n        class=\"dropdown-item\"\n        [class.selected]=\"item.selected\"\n        [attr.aria-selected]=\"item.selected\"\n        tabindex=\"-1\"\n        (click)=\"select(item)\"\n        (keydown)=\"keydownHandler($event, item)\">\n\n        <span class=\"dropdown-item-title\">{{ item.title }}</span>\n\n    </a>\n\n</div>"
                },] },
    ];
    /** @nocollapse */
    PageHeaderNavigationDropdownItemComponent.ctorParameters = function () { return [
        { type: PageHeaderService, },
    ]; };
    PageHeaderNavigationDropdownItemComponent.propDecorators = {
        "item": [{ type: Input },],
        "button": [{ type: ViewChild, args: ['button',] },],
    };
    return PageHeaderNavigationDropdownItemComponent;
}());
export { PageHeaderNavigationDropdownItemComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1kcm9wZG93bi1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3BhZ2UtaGVhZGVyL25hdmlnYXRpb24vbmF2aWdhdGlvbi1kcm9wZG93bi1pdGVtL25hdmlnYXRpb24tZHJvcGRvd24taXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBYSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkYsT0FBTyxFQUFFLE9BQU8sRUFBa0IsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztJQStGMUQsbURBQW9CLGtCQUFxQztRQUF6RCxpQkFXQztRQVhtQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1COzRCQUxqQyxLQUFLO3VCQUdPLElBQUksT0FBTyxFQUFXOztRQUt0RCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxFQUEzQixDQUEyQixDQUFDLENBQUM7O1FBRzFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUNsQixrQkFBa0IsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO1lBQ25DLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQzdCLENBQUMsQ0FDTCxDQUFDO0tBQ0w7Ozs7SUFFRCwrREFBVzs7O0lBQVg7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3BDOzs7OztJQUVELDBEQUFNOzs7O0lBQU4sVUFBTyxJQUFzQzs7UUFHekMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDaEIsTUFBTSxDQUFDO1NBQ1Y7O1FBR0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN4Qzs7OztJQUVELHlEQUFLOzs7SUFBTDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQ3JDOzs7O0lBRUQsOERBQVU7OztJQUFWO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDM0I7Ozs7SUFFRCw4REFBVTs7O0lBQVY7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUM1Qjs7OztJQUVELHlEQUFLOzs7SUFBTDtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0tBQzdCOzs7Ozs7SUFFRCxrRUFBYzs7Ozs7SUFBZCxVQUFlLEtBQW9CLEVBQUUsSUFBc0M7UUFFdkUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDaEIsS0FBSyxPQUFPLENBQUM7WUFDYixLQUFLLEdBQUc7Z0JBQ0osSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3hCLEtBQUssQ0FBQztTQUNiO0tBQ0o7O2dCQWxKSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLG9EQUFvRDtvQkFDOUQsUUFBUSxFQUFFLG9EQUFvRDtvQkFDOUQsUUFBUSxFQUFFLDJ3RUEyRVA7aUJBQ047Ozs7Z0JBbEZRLGlCQUFpQjs7O3lCQXFGckIsS0FBSzsyQkFFTCxTQUFTLFNBQUMsUUFBUTs7b0RBMUZ2Qjs7U0FzRmEseUNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCAsICBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBQYWdlSGVhZGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3BhZ2UtaGVhZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYWdlSGVhZGVyTmF2aWdhdGlvbkRyb3Bkb3duSXRlbSB9IGZyb20gJy4uL25hdmlnYXRpb24uY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd1eC1wYWdlLWhlYWRlci1ob3Jpem9udGFsLW5hdmlnYXRpb24tZHJvcGRvd24taXRlbScsXHJcbiAgICBleHBvcnRBczogJ3V4LXBhZ2UtaGVhZGVyLWhvcml6b250YWwtbmF2aWdhdGlvbi1kcm9wZG93bi1pdGVtJyxcclxuICAgIHRlbXBsYXRlOiBgPGRpdiAqbmdJZj1cIml0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwXCJcclxuICAgIGRyb3Bkb3duXHJcbiAgICAjc3ViTWVudT1cImJzLWRyb3Bkb3duXCJcclxuICAgIFtpc09wZW5dPVwiZHJvcGRvd25PcGVuXCJcclxuICAgIGNvbnRhaW5lcj1cImJvZHlcIlxyXG4gICAgcGxhY2VtZW50PVwicmlnaHRcIlxyXG4gICAgKG1vdXNlZW50ZXIpPVwiaG92ZXJTdGFydCgpXCJcclxuICAgIChtb3VzZWxlYXZlKT1cImhvdmVyTGVhdmUoKVwiPlxyXG5cclxuICAgIDxhIHJvbGU9XCJtZW51aXRlbVwiXHJcbiAgICAgICAgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCJcclxuICAgICAgICBbY2xhc3Muc2VsZWN0ZWRdPVwiaXRlbS5zZWxlY3RlZFwiXHJcbiAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgIFthdHRyLmFyaWEtZXhwYW5kZWRdPVwiZHJvcGRvd25PcGVuXCJcclxuICAgICAgICBbYXR0ci5hcmlhLXNlbGVjdGVkXT1cIml0ZW0uc2VsZWN0ZWRcIlxyXG4gICAgICAgIHRhYmluZGV4PVwiLTFcIlxyXG4gICAgICAgICNidXR0b25cclxuICAgICAgICBkcm9wZG93blRvZ2dsZVxyXG4gICAgICAgIHV4TWVudU5hdmlnYXRpb25Ub2dnbGVcclxuICAgICAgICAjbWVudU5hdmlnYXRpb25Ub2dnbGU9XCJ1eE1lbnVOYXZpZ2F0aW9uVG9nZ2xlXCJcclxuICAgICAgICBbKG1lbnVPcGVuKV09XCJkcm9wZG93bk9wZW5cIlxyXG4gICAgICAgIG1lbnVQb3NpdGlvbj1cInJpZ2h0XCI+XHJcblxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZHJvcGRvd24taXRlbS10aXRsZVwiPnt7IGl0ZW0udGl0bGUgfX08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJkcm9wZG93bi1pdGVtLWljb24gaHBlLWljb24gaHBlLW5leHRcIj48L3NwYW4+XHJcblxyXG4gICAgPC9hPlxyXG5cclxuICAgIDx1bCAqZHJvcGRvd25NZW51XHJcbiAgICAgICAgcm9sZT1cIm1lbnVcIlxyXG4gICAgICAgIGNsYXNzPVwiZHJvcGRvd24tbWVudSBob3Jpem9udGFsLW5hdmlnYXRpb24tZHJvcGRvd24tc3VibWVudVwiXHJcbiAgICAgICAgKG1vdXNlZW50ZXIpPVwiaG92ZXJTdGFydCgpXCJcclxuICAgICAgICAobW91c2VsZWF2ZSk9XCJob3ZlckxlYXZlKClcIlxyXG4gICAgICAgIHV4TWVudU5hdmlnYXRpb25cclxuICAgICAgICAjbWVudU5hdmlnYXRpb249XCJ1eE1lbnVOYXZpZ2F0aW9uXCJcclxuICAgICAgICBbdG9nZ2xlQnV0dG9uXT1cIm1lbnVOYXZpZ2F0aW9uVG9nZ2xlXCJcclxuICAgICAgICB0b2dnbGVCdXR0b25Qb3NpdGlvbj1cImxlZnRcIj5cclxuXHJcbiAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBzdWJJdGVtIG9mIGl0ZW0uY2hpbGRyZW5cIiByb2xlPVwibm9uZVwiPlxyXG5cclxuICAgICAgICAgICAgPGEgcm9sZT1cIm1lbnVpdGVtXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiXHJcbiAgICAgICAgICAgICAgICBbY2xhc3Muc2VsZWN0ZWRdPVwic3ViSXRlbS5zZWxlY3RlZFwiXHJcbiAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLXNlbGVjdGVkXT1cInN1Ykl0ZW0uc2VsZWN0ZWRcIlxyXG4gICAgICAgICAgICAgICAgdGFiaW5kZXg9XCItMVwiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0KHN1Ykl0ZW0pXCJcclxuICAgICAgICAgICAgICAgIChrZXlkb3duKT1cImtleWRvd25IYW5kbGVyKCRldmVudCwgc3ViSXRlbSlcIlxyXG4gICAgICAgICAgICAgICAgdXhNZW51TmF2aWdhdGlvbkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkcm9wZG93bi1pdGVtLXRpdGxlXCI+e3sgc3ViSXRlbS50aXRsZSB9fTwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcblxyXG48L2Rpdj5cclxuXHJcbjxkaXYgKm5nSWY9XCIhaXRlbS5jaGlsZHJlbiB8fCBpdGVtLmNoaWxkcmVuLmxlbmd0aCA9PT0gMFwiXHJcbiAgICAobW91c2VlbnRlcik9XCJob3ZlclN0YXJ0KClcIlxyXG4gICAgKG1vdXNlbGVhdmUpPVwiaG92ZXJMZWF2ZSgpXCI+XHJcblxyXG4gICAgPGEgcm9sZT1cIm1lbnVpdGVtXCJcclxuICAgICAgICAjYnV0dG9uXHJcbiAgICAgICAgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCJcclxuICAgICAgICBbY2xhc3Muc2VsZWN0ZWRdPVwiaXRlbS5zZWxlY3RlZFwiXHJcbiAgICAgICAgW2F0dHIuYXJpYS1zZWxlY3RlZF09XCJpdGVtLnNlbGVjdGVkXCJcclxuICAgICAgICB0YWJpbmRleD1cIi0xXCJcclxuICAgICAgICAoY2xpY2spPVwic2VsZWN0KGl0ZW0pXCJcclxuICAgICAgICAoa2V5ZG93bik9XCJrZXlkb3duSGFuZGxlcigkZXZlbnQsIGl0ZW0pXCI+XHJcblxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZHJvcGRvd24taXRlbS10aXRsZVwiPnt7IGl0ZW0udGl0bGUgfX08L3NwYW4+XHJcblxyXG4gICAgPC9hPlxyXG5cclxuPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFnZUhlYWRlck5hdmlnYXRpb25Ecm9wZG93bkl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG5cclxuICAgIEBJbnB1dCgpIGl0ZW06IFBhZ2VIZWFkZXJOYXZpZ2F0aW9uRHJvcGRvd25JdGVtO1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ2J1dHRvbicpXHJcbiAgICBidXR0b246IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgZHJvcGRvd25PcGVuOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgICBwcml2YXRlIF9ob3ZlciQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3BhZ2VIZWFkZXJTZXJ2aWNlOiBQYWdlSGVhZGVyU2VydmljZSkge1xyXG5cclxuICAgICAgICAvLyBzdWJzY3JpYmUgdG8gc3RyZWFtIHdpdGggYSBkZWJvdW5jZSAoYSBzbWFsbCBkZWJvdW5jZSBpcyBhbGwgdGhhdCBpcyByZXF1aXJlZClcclxuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSB0aGlzLl9ob3ZlciQucGlwZShkZWJvdW5jZVRpbWUoMSkpLnN1YnNjcmliZSh2aXNpYmxlID0+IHRoaXMuZHJvcGRvd25PcGVuID0gdmlzaWJsZSk7XHJcblxyXG4gICAgICAgIC8vIENsb3NlIHN1Ym1lbnVzIHdoZW4gc2VsZWN0ZWQgaXRlbSBjaGFuZ2VzXHJcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uLmFkZChcclxuICAgICAgICAgICAgX3BhZ2VIZWFkZXJTZXJ2aWNlLnNlbGVjdGVkJC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcm9wZG93bk9wZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdChpdGVtOiBQYWdlSGVhZGVyTmF2aWdhdGlvbkRyb3Bkb3duSXRlbSkge1xyXG5cclxuICAgICAgICAvLyBjbGlja2luZyBvbiBhbiBpdGVtIHdpdGggY2hpbGRyZW4gdGhlbiByZXR1cm5cclxuICAgICAgICBpZiAoaXRlbS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBlbWl0IHRoZSBzZWxlY3RlZCBpdGVtIGluIGFuIGV2ZW50XHJcbiAgICAgICAgdGhpcy5fcGFnZUhlYWRlclNlcnZpY2Uuc2VsZWN0KGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZvY3VzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYnV0dG9uLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBob3ZlclN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuX2hvdmVyJC5uZXh0KHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGhvdmVyTGVhdmUoKSB7XHJcbiAgICAgICAgdGhpcy5faG92ZXIkLm5leHQoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCkge1xyXG4gICAgICAgIHRoaXMuZHJvcGRvd25PcGVuID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAga2V5ZG93bkhhbmRsZXIoZXZlbnQ6IEtleWJvYXJkRXZlbnQsIGl0ZW06IFBhZ2VIZWFkZXJOYXZpZ2F0aW9uRHJvcGRvd25JdGVtKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ0VudGVyJzpcclxuICAgICAgICAgICAgY2FzZSAnICc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdChpdGVtKTtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==