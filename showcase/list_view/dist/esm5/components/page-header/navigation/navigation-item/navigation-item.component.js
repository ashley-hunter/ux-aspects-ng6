/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Input, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { BsDropdownDirective } from 'ngx-bootstrap/dropdown';
import { MenuNavigationToggleDirective } from '../../../../directives/menu-navigation/menu-navigation-toggle.directive';
import { PageHeaderService } from '../../page-header.service';
import { PageHeaderNavigationDropdownItemComponent } from '../navigation-dropdown-item/navigation-dropdown-item.component';
var PageHeaderNavigationItemComponent = /** @class */ (function () {
    function PageHeaderNavigationItemComponent(elementRef, _pageHeaderService) {
        this.elementRef = elementRef;
        this._pageHeaderService = _pageHeaderService;
        this.secondary$ = this._pageHeaderService.secondary$;
    }
    /**
     * @return {?}
     */
    PageHeaderNavigationItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Close submenus when selected item changes
        this._subscription = this._pageHeaderService.selected$.subscribe(function (next) {
            if (next && _this.isOpen) {
                _this.isOpen = false;
                // If menu was closed, keep focus on the toggle button
                // If menu was closed, keep focus on the toggle button
                _this.button.focus();
            }
        });
        if (this.menu) {
            this._subscription.add(this.menu.onHidden.subscribe(function () { return _this.dropdowns.forEach(function (dropdown) { return dropdown.close(); }); }));
        }
    };
    /**
     * @return {?}
     */
    PageHeaderNavigationItemComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    PageHeaderNavigationItemComponent.prototype.select = /**
     * @return {?}
     */
    function () {
        // if the item has children then do nothing at this stage
        if (this.item.children && this._pageHeaderService.secondary$.getValue() === false) {
            return;
        }
        // otherwise select the current item
        this._pageHeaderService.select(this.item);
    };
    PageHeaderNavigationItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-page-header-horizontal-navigation-item',
                    template: "<div *ngIf=\"item.children && item.children.length > 0 && !(secondary$ | async)\"\n    dropdown\n    #menu=\"bs-dropdown\"\n    [(isOpen)]=\"isOpen\"\n    container=\"body\"\n    placement=\"bottom left\">\n\n    <button role=\"menuitem\"\n        class=\"horizontal-navigation-button\"\n        [class.selected]=\"item.selected\"\n        [class.open]=\"isOpen\"\n        aria-haspopup=\"true\"\n        [attr.aria-expanded]=\"isOpen\"\n        [attr.aria-selected]=\"item.selected\"\n        dropdownToggle\n        uxMenuNavigationToggle\n        #button=\"uxMenuNavigationToggle\"\n        [(menuOpen)]=\"isOpen\">\n\n        <span class=\"hpe-icon navigation-item-icon\" *ngIf=\"item.icon\" [ngClass]=\"item?.icon\"></span>\n        <span class=\"navigation-item-label\">{{ item?.title }}</span>\n        <span class=\"hpe-icon hpe-down\"></span>\n\n    </button>\n\n    <div *dropdownMenu\n        role=\"menu\"\n        class=\"dropdown-menu horizontal-navigation-dropdown-menu\"\n        uxMenuNavigation\n        [toggleButton]=\"button\"\n        toggleButtonPosition=\"top\">\n\n        <div *ngFor=\"let item of item?.children\" uxMenuNavigationItem (activated)=\"dropdownItem.focus()\">\n            <ux-page-header-horizontal-navigation-dropdown-item\n                #dropdownItem=\"ux-page-header-horizontal-navigation-dropdown-item\"\n                [item]=\"item\">\n            </ux-page-header-horizontal-navigation-dropdown-item>\n        </div>\n\n    </div>\n\n</div>\n\n<button *ngIf=\"!item.children || item.children.length === 0 || (secondary$ | async)\"\n    role=\"menuitem\"\n    class=\"horizontal-navigation-button\"\n    [class.selected]=\"item.selected\"\n    [attr.aria-selected]=\"item.selected\"\n    (click)=\"select()\">\n\n    <span class=\"hpe-icon navigation-item-icon\" *ngIf=\"item.icon\" [ngClass]=\"item?.icon\"></span>\n    <span class=\"navigation-item-label\">{{ item?.title }}</span>\n\n</button>"
                },] },
    ];
    /** @nocollapse */
    PageHeaderNavigationItemComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: PageHeaderService, },
    ]; };
    PageHeaderNavigationItemComponent.propDecorators = {
        "button": [{ type: ViewChild, args: ['button',] },],
        "menu": [{ type: ViewChild, args: ['menu',] },],
        "dropdowns": [{ type: ViewChildren, args: [PageHeaderNavigationDropdownItemComponent,] },],
        "item": [{ type: Input },],
    };
    return PageHeaderNavigationItemComponent;
}());
export { PageHeaderNavigationItemComponent };
function PageHeaderNavigationItemComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    PageHeaderNavigationItemComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    PageHeaderNavigationItemComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    PageHeaderNavigationItemComponent.propDecorators;
    /** @type {?} */
    PageHeaderNavigationItemComponent.prototype.button;
    /** @type {?} */
    PageHeaderNavigationItemComponent.prototype.menu;
    /** @type {?} */
    PageHeaderNavigationItemComponent.prototype.dropdowns;
    /** @type {?} */
    PageHeaderNavigationItemComponent.prototype.item;
    /** @type {?} */
    PageHeaderNavigationItemComponent.prototype.secondary$;
    /** @type {?} */
    PageHeaderNavigationItemComponent.prototype.isOpen;
    /** @type {?} */
    PageHeaderNavigationItemComponent.prototype._subscription;
    /** @type {?} */
    PageHeaderNavigationItemComponent.prototype.elementRef;
    /** @type {?} */
    PageHeaderNavigationItemComponent.prototype._pageHeaderService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3BhZ2UtaGVhZGVyL25hdmlnYXRpb24vbmF2aWdhdGlvbi1pdGVtL25hdmlnYXRpb24taXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBcUIsU0FBUyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEgsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFN0QsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFDeEgsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0sZ0VBQWdFLENBQUM7O0lBMEV2SCwyQ0FDVyxZQUNDO1FBREQsZUFBVSxHQUFWLFVBQVU7UUFDVCx1QkFBa0IsR0FBbEIsa0JBQWtCOzBCQVJTLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVO0tBU3BFOzs7O0lBRUwsb0RBQVE7OztJQUFSO1FBQUEsaUJBaUJDOztRQWRHLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFJO1lBQ2xFLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDdEIsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7O2dCQUdwQixBQURBLHNEQUFzRDtnQkFDdEQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUN2QjtTQUNKLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ1osSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQWhCLENBQWdCLENBQUMsRUFBcEQsQ0FBb0QsQ0FBQyxDQUMzRixDQUFDO1NBQ0w7S0FDSjs7OztJQUVELHVEQUFXOzs7SUFBWDtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDcEM7Ozs7SUFFRCxrREFBTTs7O0lBQU47O1FBR0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2hGLE1BQU0sQ0FBQztTQUNWOztRQUdELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzdDOztnQkE1R0osU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSwyQ0FBMkM7b0JBQ3JELFFBQVEsRUFBRSw0NURBcURKO2lCQUNUOzs7O2dCQWhFbUIsVUFBVTtnQkFJckIsaUJBQWlCOzs7MkJBK0RyQixTQUFTLFNBQUMsUUFBUTt5QkFDbEIsU0FBUyxTQUFDLE1BQU07OEJBQ2hCLFlBQVksU0FBQyx5Q0FBeUM7eUJBRXRELEtBQUs7OzRDQXZFVjs7U0FpRWEsaUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIFF1ZXJ5TGlzdCwgVmlld0NoaWxkLCBWaWV3Q2hpbGRyZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQnNEcm9wZG93bkRpcmVjdGl2ZSB9IGZyb20gJ25neC1ib290c3RyYXAvZHJvcGRvd24nO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgLCAgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE1lbnVOYXZpZ2F0aW9uVG9nZ2xlRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZGlyZWN0aXZlcy9tZW51LW5hdmlnYXRpb24vbWVudS1uYXZpZ2F0aW9uLXRvZ2dsZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBQYWdlSGVhZGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3BhZ2UtaGVhZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYWdlSGVhZGVyTmF2aWdhdGlvbkRyb3Bkb3duSXRlbUNvbXBvbmVudCB9IGZyb20gJy4uL25hdmlnYXRpb24tZHJvcGRvd24taXRlbS9uYXZpZ2F0aW9uLWRyb3Bkb3duLWl0ZW0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGFnZUhlYWRlck5hdmlnYXRpb25JdGVtIH0gZnJvbSAnLi4vbmF2aWdhdGlvbi5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3V4LXBhZ2UtaGVhZGVyLWhvcml6b250YWwtbmF2aWdhdGlvbi1pdGVtJyxcclxuICAgIHRlbXBsYXRlOiBgPGRpdiAqbmdJZj1cIml0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwICYmICEoc2Vjb25kYXJ5JCB8IGFzeW5jKVwiXHJcbiAgICBkcm9wZG93blxyXG4gICAgI21lbnU9XCJicy1kcm9wZG93blwiXHJcbiAgICBbKGlzT3BlbildPVwiaXNPcGVuXCJcclxuICAgIGNvbnRhaW5lcj1cImJvZHlcIlxyXG4gICAgcGxhY2VtZW50PVwiYm90dG9tIGxlZnRcIj5cclxuXHJcbiAgICA8YnV0dG9uIHJvbGU9XCJtZW51aXRlbVwiXHJcbiAgICAgICAgY2xhc3M9XCJob3Jpem9udGFsLW5hdmlnYXRpb24tYnV0dG9uXCJcclxuICAgICAgICBbY2xhc3Muc2VsZWN0ZWRdPVwiaXRlbS5zZWxlY3RlZFwiXHJcbiAgICAgICAgW2NsYXNzLm9wZW5dPVwiaXNPcGVuXCJcclxuICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXHJcbiAgICAgICAgW2F0dHIuYXJpYS1leHBhbmRlZF09XCJpc09wZW5cIlxyXG4gICAgICAgIFthdHRyLmFyaWEtc2VsZWN0ZWRdPVwiaXRlbS5zZWxlY3RlZFwiXHJcbiAgICAgICAgZHJvcGRvd25Ub2dnbGVcclxuICAgICAgICB1eE1lbnVOYXZpZ2F0aW9uVG9nZ2xlXHJcbiAgICAgICAgI2J1dHRvbj1cInV4TWVudU5hdmlnYXRpb25Ub2dnbGVcIlxyXG4gICAgICAgIFsobWVudU9wZW4pXT1cImlzT3BlblwiPlxyXG5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImhwZS1pY29uIG5hdmlnYXRpb24taXRlbS1pY29uXCIgKm5nSWY9XCJpdGVtLmljb25cIiBbbmdDbGFzc109XCJpdGVtPy5pY29uXCI+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwibmF2aWdhdGlvbi1pdGVtLWxhYmVsXCI+e3sgaXRlbT8udGl0bGUgfX08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJocGUtaWNvbiBocGUtZG93blwiPjwvc3Bhbj5cclxuXHJcbiAgICA8L2J1dHRvbj5cclxuXHJcbiAgICA8ZGl2ICpkcm9wZG93bk1lbnVcclxuICAgICAgICByb2xlPVwibWVudVwiXHJcbiAgICAgICAgY2xhc3M9XCJkcm9wZG93bi1tZW51IGhvcml6b250YWwtbmF2aWdhdGlvbi1kcm9wZG93bi1tZW51XCJcclxuICAgICAgICB1eE1lbnVOYXZpZ2F0aW9uXHJcbiAgICAgICAgW3RvZ2dsZUJ1dHRvbl09XCJidXR0b25cIlxyXG4gICAgICAgIHRvZ2dsZUJ1dHRvblBvc2l0aW9uPVwidG9wXCI+XHJcblxyXG4gICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbT8uY2hpbGRyZW5cIiB1eE1lbnVOYXZpZ2F0aW9uSXRlbSAoYWN0aXZhdGVkKT1cImRyb3Bkb3duSXRlbS5mb2N1cygpXCI+XHJcbiAgICAgICAgICAgIDx1eC1wYWdlLWhlYWRlci1ob3Jpem9udGFsLW5hdmlnYXRpb24tZHJvcGRvd24taXRlbVxyXG4gICAgICAgICAgICAgICAgI2Ryb3Bkb3duSXRlbT1cInV4LXBhZ2UtaGVhZGVyLWhvcml6b250YWwtbmF2aWdhdGlvbi1kcm9wZG93bi1pdGVtXCJcclxuICAgICAgICAgICAgICAgIFtpdGVtXT1cIml0ZW1cIj5cclxuICAgICAgICAgICAgPC91eC1wYWdlLWhlYWRlci1ob3Jpem9udGFsLW5hdmlnYXRpb24tZHJvcGRvd24taXRlbT5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuXHJcbjwvZGl2PlxyXG5cclxuPGJ1dHRvbiAqbmdJZj1cIiFpdGVtLmNoaWxkcmVuIHx8IGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID09PSAwIHx8IChzZWNvbmRhcnkkIHwgYXN5bmMpXCJcclxuICAgIHJvbGU9XCJtZW51aXRlbVwiXHJcbiAgICBjbGFzcz1cImhvcml6b250YWwtbmF2aWdhdGlvbi1idXR0b25cIlxyXG4gICAgW2NsYXNzLnNlbGVjdGVkXT1cIml0ZW0uc2VsZWN0ZWRcIlxyXG4gICAgW2F0dHIuYXJpYS1zZWxlY3RlZF09XCJpdGVtLnNlbGVjdGVkXCJcclxuICAgIChjbGljayk9XCJzZWxlY3QoKVwiPlxyXG5cclxuICAgIDxzcGFuIGNsYXNzPVwiaHBlLWljb24gbmF2aWdhdGlvbi1pdGVtLWljb25cIiAqbmdJZj1cIml0ZW0uaWNvblwiIFtuZ0NsYXNzXT1cIml0ZW0/Lmljb25cIj48L3NwYW4+XHJcbiAgICA8c3BhbiBjbGFzcz1cIm5hdmlnYXRpb24taXRlbS1sYWJlbFwiPnt7IGl0ZW0/LnRpdGxlIH19PC9zcGFuPlxyXG5cclxuPC9idXR0b24+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFnZUhlYWRlck5hdmlnYXRpb25JdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ2J1dHRvbicpIGJ1dHRvbjogTWVudU5hdmlnYXRpb25Ub2dnbGVEaXJlY3RpdmU7XHJcbiAgICBAVmlld0NoaWxkKCdtZW51JykgbWVudTogQnNEcm9wZG93bkRpcmVjdGl2ZTtcclxuICAgIEBWaWV3Q2hpbGRyZW4oUGFnZUhlYWRlck5hdmlnYXRpb25Ecm9wZG93bkl0ZW1Db21wb25lbnQpIGRyb3Bkb3duczogUXVlcnlMaXN0PFBhZ2VIZWFkZXJOYXZpZ2F0aW9uRHJvcGRvd25JdGVtQ29tcG9uZW50PjtcclxuXHJcbiAgICBASW5wdXQoKSBpdGVtOiBQYWdlSGVhZGVyTmF2aWdhdGlvbkl0ZW07XHJcblxyXG4gICAgc2Vjb25kYXJ5JDogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gdGhpcy5fcGFnZUhlYWRlclNlcnZpY2Uuc2Vjb25kYXJ5JDtcclxuXHJcbiAgICBpc09wZW46IGJvb2xlYW47XHJcblxyXG4gICAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSBfcGFnZUhlYWRlclNlcnZpY2U6IFBhZ2VIZWFkZXJTZXJ2aWNlXHJcbiAgICApIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG5cclxuICAgICAgICAvLyBDbG9zZSBzdWJtZW51cyB3aGVuIHNlbGVjdGVkIGl0ZW0gY2hhbmdlc1xyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMuX3BhZ2VIZWFkZXJTZXJ2aWNlLnNlbGVjdGVkJC5zdWJzY3JpYmUoKG5leHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKG5leHQgJiYgdGhpcy5pc09wZW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gSWYgbWVudSB3YXMgY2xvc2VkLCBrZWVwIGZvY3VzIG9uIHRoZSB0b2dnbGUgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbi5mb2N1cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1lbnUpIHtcclxuICAgICAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uLmFkZChcclxuICAgICAgICAgICAgICAgIHRoaXMubWVudS5vbkhpZGRlbi5zdWJzY3JpYmUoKCkgPT4gdGhpcy5kcm9wZG93bnMuZm9yRWFjaChkcm9wZG93biA9PiBkcm9wZG93bi5jbG9zZSgpKSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0KCkge1xyXG5cclxuICAgICAgICAvLyBpZiB0aGUgaXRlbSBoYXMgY2hpbGRyZW4gdGhlbiBkbyBub3RoaW5nIGF0IHRoaXMgc3RhZ2VcclxuICAgICAgICBpZiAodGhpcy5pdGVtLmNoaWxkcmVuICYmIHRoaXMuX3BhZ2VIZWFkZXJTZXJ2aWNlLnNlY29uZGFyeSQuZ2V0VmFsdWUoKSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gb3RoZXJ3aXNlIHNlbGVjdCB0aGUgY3VycmVudCBpdGVtXHJcbiAgICAgICAgdGhpcy5fcGFnZUhlYWRlclNlcnZpY2Uuc2VsZWN0KHRoaXMuaXRlbSk7XHJcbiAgICB9XHJcbn0iXX0=