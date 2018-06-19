/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { ResizeService } from '../../../directives/resize/index';
import { PageHeaderService } from '../page-header.service';
import { PageHeaderNavigationItemComponent } from './navigation-item/navigation-item.component';
var PageHeaderNavigationComponent = /** @class */ (function () {
    function PageHeaderNavigationComponent(elementRef, resizeService, _pageHeaderService) {
        this._pageHeaderService = _pageHeaderService;
        this.items$ = this._pageHeaderService.items$;
        this.indicatorVisible = false;
        this.indicatorX = 0;
        this.indicatorWidth = 0;
        this._subscription = new Subscription();
        this._subscription.add(resizeService.addResizeListener(elementRef.nativeElement).subscribe(this.updateSelectedIndicator.bind(this)));
        this._subscription.add(_pageHeaderService.selected$.pipe(distinctUntilChanged()).subscribe(this.updateSelectedIndicator.bind(this)));
        this._subscription.add(_pageHeaderService.secondary$.pipe(distinctUntilChanged()).subscribe(this.updateSelectedIndicator.bind(this)));
    }
    /**
     * @return {?}
     */
    PageHeaderNavigationComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.updateSelectedIndicator();
    };
    /**
     * @return {?}
     */
    PageHeaderNavigationComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    PageHeaderNavigationComponent.prototype.updateSelectedIndicator = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            // find the selected item
            var /** @type {?} */ selected = _this.menuItems.find(function (item) { return item.item.selected; });
            // determine whether or not to show the indicator
            // determine whether or not to show the indicator
            _this.indicatorVisible = !!selected;
            // set the width of the indicator to match the width of the navigation item
            if (selected) {
                var /** @type {?} */ styles = getComputedStyle(selected.elementRef.nativeElement);
                _this.indicatorX = selected.elementRef.nativeElement.offsetLeft;
                _this.indicatorWidth = parseInt(styles.getPropertyValue('width'));
            }
        });
    };
    PageHeaderNavigationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-page-header-horizontal-navigation',
                    template: "<ux-page-header-horizontal-navigation-item\n    *ngFor=\"let item of items$ | async\"\n    [item]=\"item\">\n</ux-page-header-horizontal-navigation-item>\n\n<div class=\"selected-indicator\"\n    [style.opacity]=\"indicatorVisible ? 1 : 0\"\n    [style.margin-left.px]=\"indicatorX\"\n    [style.width.px]=\"indicatorWidth\">\n</div>",
                    host: {
                        'role': 'menubar'
                    }
                },] },
    ];
    /** @nocollapse */
    PageHeaderNavigationComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: ResizeService, },
        { type: PageHeaderService, },
    ]; };
    PageHeaderNavigationComponent.propDecorators = {
        "menuItems": [{ type: ViewChildren, args: [PageHeaderNavigationItemComponent,] },],
    };
    return PageHeaderNavigationComponent;
}());
export { PageHeaderNavigationComponent };
function PageHeaderNavigationComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    PageHeaderNavigationComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    PageHeaderNavigationComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    PageHeaderNavigationComponent.propDecorators;
    /** @type {?} */
    PageHeaderNavigationComponent.prototype.menuItems;
    /** @type {?} */
    PageHeaderNavigationComponent.prototype.items$;
    /** @type {?} */
    PageHeaderNavigationComponent.prototype.indicatorVisible;
    /** @type {?} */
    PageHeaderNavigationComponent.prototype.indicatorX;
    /** @type {?} */
    PageHeaderNavigationComponent.prototype.indicatorWidth;
    /** @type {?} */
    PageHeaderNavigationComponent.prototype._subscription;
    /** @type {?} */
    PageHeaderNavigationComponent.prototype._pageHeaderService;
}
/**
 * @record
 */
export function PageHeaderNavigationItem() { }
function PageHeaderNavigationItem_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    PageHeaderNavigationItem.prototype.icon;
    /** @type {?} */
    PageHeaderNavigationItem.prototype.title;
    /** @type {?|undefined} */
    PageHeaderNavigationItem.prototype.selected;
    /** @type {?|undefined} */
    PageHeaderNavigationItem.prototype.select;
    /** @type {?|undefined} */
    PageHeaderNavigationItem.prototype.children;
    /** @type {?|undefined} */
    PageHeaderNavigationItem.prototype.parent;
}
/**
 * @record
 */
export function PageHeaderNavigationDropdownItem() { }
function PageHeaderNavigationDropdownItem_tsickle_Closure_declarations() {
    /** @type {?} */
    PageHeaderNavigationDropdownItem.prototype.title;
    /** @type {?|undefined} */
    PageHeaderNavigationDropdownItem.prototype.selected;
    /** @type {?|undefined} */
    PageHeaderNavigationDropdownItem.prototype.select;
    /** @type {?|undefined} */
    PageHeaderNavigationDropdownItem.prototype.children;
    /** @type {?|undefined} */
    PageHeaderNavigationDropdownItem.prototype.parent;
}
/**
 * @record
 */
export function PageHeaderSecondaryNavigationItem() { }
function PageHeaderSecondaryNavigationItem_tsickle_Closure_declarations() {
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9wYWdlLWhlYWRlci9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQWEsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RyxPQUFPLEVBQXFCLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLDZDQUE2QyxDQUFDOztJQTZCNUYsdUNBQVksVUFBc0IsRUFBRSxhQUE0QixFQUFVLGtCQUFxQztRQUFyQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO3NCQVB6RCxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTTtnQ0FDeEQsS0FBSzswQkFDWixDQUFDOzhCQUNHLENBQUM7NkJBRUYsSUFBSSxZQUFZLEVBQUU7UUFHdEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckksSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JJLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN6STs7OztJQUVELHVEQUFlOzs7SUFBZjtRQUNJLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0tBQ2xDOzs7O0lBRUQsbURBQVc7OztJQUFYO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUNwQzs7OztJQUVELCtEQUF1Qjs7O0lBQXZCO1FBQUEsaUJBZ0JDO1FBZkcsVUFBVSxDQUFDOztZQUVQLHFCQUFNLFFBQVEsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFsQixDQUFrQixDQUFDLENBQUM7O1lBR2pFLEFBREEsaURBQWlEO1lBQ2pELEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDOztZQUduQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNYLHFCQUFNLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUVuRSxLQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQztnQkFDL0QsS0FBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDcEU7U0FDSixDQUFDLENBQUM7S0FDTjs7Z0JBekRKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsc0NBQXNDO29CQUNoRCxRQUFRLEVBQUUsK1VBU1A7b0JBQ0gsSUFBSSxFQUFFO3dCQUNGLE1BQU0sRUFBRSxTQUFTO3FCQUNwQjtpQkFDSjs7OztnQkF0QmtDLFVBQVU7Z0JBR3BDLGFBQWE7Z0JBQ1MsaUJBQWlCOzs7OEJBcUIzQyxZQUFZLFNBQUMsaUNBQWlDOzt3Q0F6Qm5EOztTQXVCYSw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uRGVzdHJveSwgUXVlcnlMaXN0LCBWaWV3Q2hpbGRyZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0ICwgIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgUmVzaXplU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2RpcmVjdGl2ZXMvcmVzaXplL2luZGV4JztcclxuaW1wb3J0IHsgUGFnZUhlYWRlck5hdmlnYXRpb24sIFBhZ2VIZWFkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vcGFnZS1oZWFkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFBhZ2VIZWFkZXJOYXZpZ2F0aW9uSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vbmF2aWdhdGlvbi1pdGVtL25hdmlnYXRpb24taXRlbS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3V4LXBhZ2UtaGVhZGVyLWhvcml6b250YWwtbmF2aWdhdGlvbicsXHJcbiAgICB0ZW1wbGF0ZTogYDx1eC1wYWdlLWhlYWRlci1ob3Jpem9udGFsLW5hdmlnYXRpb24taXRlbVxyXG4gICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXMkIHwgYXN5bmNcIlxyXG4gICAgW2l0ZW1dPVwiaXRlbVwiPlxyXG48L3V4LXBhZ2UtaGVhZGVyLWhvcml6b250YWwtbmF2aWdhdGlvbi1pdGVtPlxyXG5cclxuPGRpdiBjbGFzcz1cInNlbGVjdGVkLWluZGljYXRvclwiXHJcbiAgICBbc3R5bGUub3BhY2l0eV09XCJpbmRpY2F0b3JWaXNpYmxlID8gMSA6IDBcIlxyXG4gICAgW3N0eWxlLm1hcmdpbi1sZWZ0LnB4XT1cImluZGljYXRvclhcIlxyXG4gICAgW3N0eWxlLndpZHRoLnB4XT1cImluZGljYXRvcldpZHRoXCI+XHJcbjwvZGl2PmAsXHJcbiAgICBob3N0OiB7XHJcbiAgICAgICAgJ3JvbGUnOiAnbWVudWJhcidcclxuICAgIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2VIZWFkZXJOYXZpZ2F0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgICBAVmlld0NoaWxkcmVuKFBhZ2VIZWFkZXJOYXZpZ2F0aW9uSXRlbUNvbXBvbmVudCkgbWVudUl0ZW1zOiBRdWVyeUxpc3Q8UGFnZUhlYWRlck5hdmlnYXRpb25JdGVtQ29tcG9uZW50PjtcclxuXHJcbiAgICBpdGVtcyQ6IEJlaGF2aW9yU3ViamVjdDxQYWdlSGVhZGVyTmF2aWdhdGlvbkl0ZW1bXT4gPSB0aGlzLl9wYWdlSGVhZGVyU2VydmljZS5pdGVtcyQ7XHJcbiAgICBpbmRpY2F0b3JWaXNpYmxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBpbmRpY2F0b3JYOiBudW1iZXIgPSAwO1xyXG4gICAgaW5kaWNhdG9yV2lkdGg6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHJlc2l6ZVNlcnZpY2U6IFJlc2l6ZVNlcnZpY2UsIHByaXZhdGUgX3BhZ2VIZWFkZXJTZXJ2aWNlOiBQYWdlSGVhZGVyU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbi5hZGQocmVzaXplU2VydmljZS5hZGRSZXNpemVMaXN0ZW5lcihlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLnN1YnNjcmliZSh0aGlzLnVwZGF0ZVNlbGVjdGVkSW5kaWNhdG9yLmJpbmQodGhpcykpKTtcclxuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb24uYWRkKF9wYWdlSGVhZGVyU2VydmljZS5zZWxlY3RlZCQucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKS5zdWJzY3JpYmUodGhpcy51cGRhdGVTZWxlY3RlZEluZGljYXRvci5iaW5kKHRoaXMpKSk7XHJcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uLmFkZChfcGFnZUhlYWRlclNlcnZpY2Uuc2Vjb25kYXJ5JC5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpLnN1YnNjcmliZSh0aGlzLnVwZGF0ZVNlbGVjdGVkSW5kaWNhdG9yLmJpbmQodGhpcykpKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZEluZGljYXRvcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNlbGVjdGVkSW5kaWNhdG9yKCk6IHZvaWQge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBmaW5kIHRoZSBzZWxlY3RlZCBpdGVtXHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5tZW51SXRlbXMuZmluZChpdGVtID0+IGl0ZW0uaXRlbS5zZWxlY3RlZCk7XHJcblxyXG4gICAgICAgICAgICAvLyBkZXRlcm1pbmUgd2hldGhlciBvciBub3QgdG8gc2hvdyB0aGUgaW5kaWNhdG9yXHJcbiAgICAgICAgICAgIHRoaXMuaW5kaWNhdG9yVmlzaWJsZSA9ICEhc2VsZWN0ZWQ7XHJcblxyXG4gICAgICAgICAgICAvLyBzZXQgdGhlIHdpZHRoIG9mIHRoZSBpbmRpY2F0b3IgdG8gbWF0Y2ggdGhlIHdpZHRoIG9mIHRoZSBuYXZpZ2F0aW9uIGl0ZW1cclxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdHlsZXMgPSBnZXRDb21wdXRlZFN0eWxlKHNlbGVjdGVkLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRpY2F0b3JYID0gc2VsZWN0ZWQuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldExlZnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZGljYXRvcldpZHRoID0gcGFyc2VJbnQoc3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ3dpZHRoJykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2VIZWFkZXJOYXZpZ2F0aW9uSXRlbSB7XHJcbiAgICBpY29uPzogc3RyaW5nO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIHNlbGVjdGVkPzogYm9vbGVhbjtcclxuICAgIHNlbGVjdD86IChpdGVtOiBQYWdlSGVhZGVyTmF2aWdhdGlvbkl0ZW0pID0+IHZvaWQ7XHJcbiAgICBjaGlsZHJlbj86IFBhZ2VIZWFkZXJOYXZpZ2F0aW9uRHJvcGRvd25JdGVtW107XHJcbiAgICBwYXJlbnQ/OiBQYWdlSGVhZGVyTmF2aWdhdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQYWdlSGVhZGVyTmF2aWdhdGlvbkRyb3Bkb3duSXRlbSB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgc2VsZWN0ZWQ/OiBib29sZWFuO1xyXG4gICAgc2VsZWN0PzogKGl0ZW06IFBhZ2VIZWFkZXJOYXZpZ2F0aW9uRHJvcGRvd25JdGVtKSA9PiB2b2lkO1xyXG4gICAgY2hpbGRyZW4/OiBQYWdlSGVhZGVyTmF2aWdhdGlvbkRyb3Bkb3duSXRlbVtdO1xyXG4gICAgcGFyZW50PzogUGFnZUhlYWRlck5hdmlnYXRpb247XHJcbn1cclxuXHJcbi8vIFRoaXMgaXMgYW4gYWxpYXMgZm9yIE1GIHVzZSBhcyBcIkRyb3Bkb3duSXRlbVwiIGRvZXNuJ3QgbWFrZSBzZW5zZSBpbiBjb250ZXh0IHdpdGggaG93IGl0IGlzIHVzZWRcclxuZXhwb3J0IGludGVyZmFjZSBQYWdlSGVhZGVyU2Vjb25kYXJ5TmF2aWdhdGlvbkl0ZW0gZXh0ZW5kcyBQYWdlSGVhZGVyTmF2aWdhdGlvbkRyb3Bkb3duSXRlbSB7IH0iXX0=