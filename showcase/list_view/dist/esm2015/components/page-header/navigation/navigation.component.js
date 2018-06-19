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
export class PageHeaderNavigationComponent {
    /**
     * @param {?} elementRef
     * @param {?} resizeService
     * @param {?} _pageHeaderService
     */
    constructor(elementRef, resizeService, _pageHeaderService) {
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
    ngAfterViewInit() {
        this.updateSelectedIndicator();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
    /**
     * @return {?}
     */
    updateSelectedIndicator() {
        setTimeout(() => {
            // find the selected item
            const /** @type {?} */ selected = this.menuItems.find(item => item.item.selected);
            // determine whether or not to show the indicator
            this.indicatorVisible = !!selected;
            // set the width of the indicator to match the width of the navigation item
            if (selected) {
                const /** @type {?} */ styles = getComputedStyle(selected.elementRef.nativeElement);
                this.indicatorX = selected.elementRef.nativeElement.offsetLeft;
                this.indicatorWidth = parseInt(styles.getPropertyValue('width'));
            }
        });
    }
}
PageHeaderNavigationComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-page-header-horizontal-navigation',
                template: `<ux-page-header-horizontal-navigation-item
    *ngFor="let item of items$ | async"
    [item]="item">
</ux-page-header-horizontal-navigation-item>

<div class="selected-indicator"
    [style.opacity]="indicatorVisible ? 1 : 0"
    [style.margin-left.px]="indicatorX"
    [style.width.px]="indicatorWidth">
</div>`,
                host: {
                    'role': 'menubar'
                }
            },] },
];
/** @nocollapse */
PageHeaderNavigationComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: ResizeService, },
    { type: PageHeaderService, },
];
PageHeaderNavigationComponent.propDecorators = {
    "menuItems": [{ type: ViewChildren, args: [PageHeaderNavigationItemComponent,] },],
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9wYWdlLWhlYWRlci9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQWEsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RyxPQUFPLEVBQXFCLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBa0JoRyxNQUFNOzs7Ozs7SUFXRixZQUFZLFVBQXNCLEVBQUUsYUFBNEIsRUFBVSxrQkFBcUM7UUFBckMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtzQkFQekQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU07Z0NBQ3hELEtBQUs7MEJBQ1osQ0FBQzs4QkFDRyxDQUFDOzZCQUVGLElBQUksWUFBWSxFQUFFO1FBR3RDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JJLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNySSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDekk7Ozs7SUFFRCxlQUFlO1FBQ1gsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7S0FDbEM7Ozs7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUNwQzs7OztJQUVELHVCQUF1QjtRQUNuQixVQUFVLENBQUMsR0FBRyxFQUFFOztZQUVaLHVCQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7O1lBR2pFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDOztZQUduQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNYLHVCQUFNLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUVuRSxJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQztnQkFDL0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDcEU7U0FDSixDQUFDLENBQUM7S0FDTjs7O1lBekRKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsc0NBQXNDO2dCQUNoRCxRQUFRLEVBQUU7Ozs7Ozs7OztPQVNQO2dCQUNILElBQUksRUFBRTtvQkFDRixNQUFNLEVBQUUsU0FBUztpQkFDcEI7YUFDSjs7OztZQXRCa0MsVUFBVTtZQUdwQyxhQUFhO1lBQ1MsaUJBQWlCOzs7MEJBcUIzQyxZQUFZLFNBQUMsaUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkRlc3Ryb3ksIFF1ZXJ5TGlzdCwgVmlld0NoaWxkcmVuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCAsICBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFJlc2l6ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9kaXJlY3RpdmVzL3Jlc2l6ZS9pbmRleCc7XHJcbmltcG9ydCB7IFBhZ2VIZWFkZXJOYXZpZ2F0aW9uLCBQYWdlSGVhZGVyU2VydmljZSB9IGZyb20gJy4uL3BhZ2UtaGVhZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYWdlSGVhZGVyTmF2aWdhdGlvbkl0ZW1Db21wb25lbnQgfSBmcm9tICcuL25hdmlnYXRpb24taXRlbS9uYXZpZ2F0aW9uLWl0ZW0uY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd1eC1wYWdlLWhlYWRlci1ob3Jpem9udGFsLW5hdmlnYXRpb24nLFxyXG4gICAgdGVtcGxhdGU6IGA8dXgtcGFnZS1oZWFkZXItaG9yaXpvbnRhbC1uYXZpZ2F0aW9uLWl0ZW1cclxuICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zJCB8IGFzeW5jXCJcclxuICAgIFtpdGVtXT1cIml0ZW1cIj5cclxuPC91eC1wYWdlLWhlYWRlci1ob3Jpem9udGFsLW5hdmlnYXRpb24taXRlbT5cclxuXHJcbjxkaXYgY2xhc3M9XCJzZWxlY3RlZC1pbmRpY2F0b3JcIlxyXG4gICAgW3N0eWxlLm9wYWNpdHldPVwiaW5kaWNhdG9yVmlzaWJsZSA/IDEgOiAwXCJcclxuICAgIFtzdHlsZS5tYXJnaW4tbGVmdC5weF09XCJpbmRpY2F0b3JYXCJcclxuICAgIFtzdHlsZS53aWR0aC5weF09XCJpbmRpY2F0b3JXaWR0aFwiPlxyXG48L2Rpdj5gLFxyXG4gICAgaG9zdDoge1xyXG4gICAgICAgICdyb2xlJzogJ21lbnViYXInXHJcbiAgICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYWdlSGVhZGVyTmF2aWdhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gICAgQFZpZXdDaGlsZHJlbihQYWdlSGVhZGVyTmF2aWdhdGlvbkl0ZW1Db21wb25lbnQpIG1lbnVJdGVtczogUXVlcnlMaXN0PFBhZ2VIZWFkZXJOYXZpZ2F0aW9uSXRlbUNvbXBvbmVudD47XHJcblxyXG4gICAgaXRlbXMkOiBCZWhhdmlvclN1YmplY3Q8UGFnZUhlYWRlck5hdmlnYXRpb25JdGVtW10+ID0gdGhpcy5fcGFnZUhlYWRlclNlcnZpY2UuaXRlbXMkO1xyXG4gICAgaW5kaWNhdG9yVmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaW5kaWNhdG9yWDogbnVtYmVyID0gMDtcclxuICAgIGluZGljYXRvcldpZHRoOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgX3N1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCByZXNpemVTZXJ2aWNlOiBSZXNpemVTZXJ2aWNlLCBwcml2YXRlIF9wYWdlSGVhZGVyU2VydmljZTogUGFnZUhlYWRlclNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb24uYWRkKHJlc2l6ZVNlcnZpY2UuYWRkUmVzaXplTGlzdGVuZXIoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5zdWJzY3JpYmUodGhpcy51cGRhdGVTZWxlY3RlZEluZGljYXRvci5iaW5kKHRoaXMpKSk7XHJcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uLmFkZChfcGFnZUhlYWRlclNlcnZpY2Uuc2VsZWN0ZWQkLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSkuc3Vic2NyaWJlKHRoaXMudXBkYXRlU2VsZWN0ZWRJbmRpY2F0b3IuYmluZCh0aGlzKSkpO1xyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbi5hZGQoX3BhZ2VIZWFkZXJTZXJ2aWNlLnNlY29uZGFyeSQucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKS5zdWJzY3JpYmUodGhpcy51cGRhdGVTZWxlY3RlZEluZGljYXRvci5iaW5kKHRoaXMpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudXBkYXRlU2VsZWN0ZWRJbmRpY2F0b3IoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTZWxlY3RlZEluZGljYXRvcigpOiB2b2lkIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgLy8gZmluZCB0aGUgc2VsZWN0ZWQgaXRlbVxyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMubWVudUl0ZW1zLmZpbmQoaXRlbSA9PiBpdGVtLml0ZW0uc2VsZWN0ZWQpO1xyXG5cclxuICAgICAgICAgICAgLy8gZGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IHRvIHNob3cgdGhlIGluZGljYXRvclxyXG4gICAgICAgICAgICB0aGlzLmluZGljYXRvclZpc2libGUgPSAhIXNlbGVjdGVkO1xyXG5cclxuICAgICAgICAgICAgLy8gc2V0IHRoZSB3aWR0aCBvZiB0aGUgaW5kaWNhdG9yIHRvIG1hdGNoIHRoZSB3aWR0aCBvZiB0aGUgbmF2aWdhdGlvbiBpdGVtXHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3R5bGVzID0gZ2V0Q29tcHV0ZWRTdHlsZShzZWxlY3RlZC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuaW5kaWNhdG9yWCA9IHNlbGVjdGVkLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRMZWZ0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRpY2F0b3JXaWR0aCA9IHBhcnNlSW50KHN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCd3aWR0aCcpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQYWdlSGVhZGVyTmF2aWdhdGlvbkl0ZW0ge1xyXG4gICAgaWNvbj86IHN0cmluZztcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBzZWxlY3RlZD86IGJvb2xlYW47XHJcbiAgICBzZWxlY3Q/OiAoaXRlbTogUGFnZUhlYWRlck5hdmlnYXRpb25JdGVtKSA9PiB2b2lkO1xyXG4gICAgY2hpbGRyZW4/OiBQYWdlSGVhZGVyTmF2aWdhdGlvbkRyb3Bkb3duSXRlbVtdO1xyXG4gICAgcGFyZW50PzogUGFnZUhlYWRlck5hdmlnYXRpb247XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFnZUhlYWRlck5hdmlnYXRpb25Ecm9wZG93bkl0ZW0ge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIHNlbGVjdGVkPzogYm9vbGVhbjtcclxuICAgIHNlbGVjdD86IChpdGVtOiBQYWdlSGVhZGVyTmF2aWdhdGlvbkRyb3Bkb3duSXRlbSkgPT4gdm9pZDtcclxuICAgIGNoaWxkcmVuPzogUGFnZUhlYWRlck5hdmlnYXRpb25Ecm9wZG93bkl0ZW1bXTtcclxuICAgIHBhcmVudD86IFBhZ2VIZWFkZXJOYXZpZ2F0aW9uO1xyXG59XHJcblxyXG4vLyBUaGlzIGlzIGFuIGFsaWFzIGZvciBNRiB1c2UgYXMgXCJEcm9wZG93bkl0ZW1cIiBkb2Vzbid0IG1ha2Ugc2Vuc2UgaW4gY29udGV4dCB3aXRoIGhvdyBpdCBpcyB1c2VkXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFnZUhlYWRlclNlY29uZGFyeU5hdmlnYXRpb25JdGVtIGV4dGVuZHMgUGFnZUhlYWRlck5hdmlnYXRpb25Ecm9wZG93bkl0ZW0geyB9Il19