/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { HoverActionService } from './hover-action.service';
var HoverActionContainerDirective = /** @class */ (function () {
    function HoverActionContainerDirective(_elementRef, _hoverActionService) {
        var _this = this;
        this._elementRef = _elementRef;
        this._hoverActionService = _hoverActionService;
        this.tabindex = 0;
        this.active = false;
        // register the container element with the service
        this._hoverActionService.setContainer(this);
        // apply a class based on the active state of the container and it's actions
        this.active$ = this._hoverActionService.active.subscribe(function (active) { return _this.active = active; });
    }
    /**
     * @return {?}
     */
    HoverActionContainerDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.active$.unsubscribe();
    };
    /**
     * @return {?}
     */
    HoverActionContainerDirective.prototype.focus = /**
     * @return {?}
     */
    function () {
        this._elementRef.nativeElement.focus();
    };
    /**
     * @return {?}
     */
    HoverActionContainerDirective.prototype.onFocus = /**
     * @return {?}
     */
    function () {
        this._hoverActionService.setFocusState(true);
    };
    /**
     * @return {?}
     */
    HoverActionContainerDirective.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this._hoverActionService.setFocusState(false);
    };
    /**
     * @return {?}
     */
    HoverActionContainerDirective.prototype.onHover = /**
     * @return {?}
     */
    function () {
        this._hoverActionService.setHoverState(true);
    };
    /**
     * @return {?}
     */
    HoverActionContainerDirective.prototype.onLeave = /**
     * @return {?}
     */
    function () {
        this._hoverActionService.setHoverState(false);
    };
    /**
     * @return {?}
     */
    HoverActionContainerDirective.prototype.next = /**
     * @return {?}
     */
    function () {
        this._hoverActionService.next();
    };
    HoverActionContainerDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[uxHoverActionContainer]',
                    providers: [HoverActionService],
                    host: {
                        '[class.hover-action-container-active]': 'active',
                        '[tabindex]': 'tabindex'
                    }
                },] },
    ];
    /** @nocollapse */
    HoverActionContainerDirective.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: HoverActionService, },
    ]; };
    HoverActionContainerDirective.propDecorators = {
        "tabindex": [{ type: Input },],
        "focus": [{ type: HostListener, args: ['click',] },],
        "onFocus": [{ type: HostListener, args: ['focus',] },],
        "onBlur": [{ type: HostListener, args: ['blur',] },],
        "onHover": [{ type: HostListener, args: ['mouseenter',] },],
        "onLeave": [{ type: HostListener, args: ['mouseleave',] },],
        "next": [{ type: HostListener, args: ['keydown.arrowright',] },],
    };
    return HoverActionContainerDirective;
}());
export { HoverActionContainerDirective };
function HoverActionContainerDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    HoverActionContainerDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    HoverActionContainerDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    HoverActionContainerDirective.propDecorators;
    /** @type {?} */
    HoverActionContainerDirective.prototype.tabindex;
    /** @type {?} */
    HoverActionContainerDirective.prototype.active;
    /** @type {?} */
    HoverActionContainerDirective.prototype.active$;
    /** @type {?} */
    HoverActionContainerDirective.prototype._elementRef;
    /** @type {?} */
    HoverActionContainerDirective.prototype._hoverActionService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG92ZXItYWN0aW9uLWNvbnRhaW5lci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlcy9ob3Zlci1hY3Rpb24vaG92ZXItYWN0aW9uLWNvbnRhaW5lci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFdEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0lBaUJ4RCx1Q0FBb0IsV0FBdUIsRUFBVSxtQkFBdUM7UUFBNUYsaUJBTUM7UUFObUIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFBVSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW9CO3dCQUxoRSxDQUFDO3NCQUNYLEtBQUs7O1FBTW5CLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7O1FBRzVDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO0tBQzVGOzs7O0lBRUQsbURBQVc7OztJQUFYO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUM5Qjs7OztJQUVzQiw2Q0FBSzs7OztRQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7Ozs7SUFHcEIsK0NBQU87Ozs7UUFDMUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Ozs7SUFHM0IsOENBQU07Ozs7UUFDeEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7SUFHdEIsK0NBQU87Ozs7UUFDL0IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Ozs7SUFHckIsK0NBQU87Ozs7UUFDL0IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7SUFHZCw0Q0FBSTs7OztRQUNwQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLENBQUM7OztnQkFoRHZDLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxTQUFTLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztvQkFDL0IsSUFBSSxFQUFFO3dCQUNGLHVDQUF1QyxFQUFFLFFBQVE7d0JBQ2pELFlBQVksRUFBRSxVQUFVO3FCQUMzQjtpQkFDSjs7OztnQkFYbUIsVUFBVTtnQkFFckIsa0JBQWtCOzs7NkJBWXRCLEtBQUs7MEJBaUJMLFlBQVksU0FBQyxPQUFPOzRCQUlwQixZQUFZLFNBQUMsT0FBTzsyQkFJcEIsWUFBWSxTQUFDLE1BQU07NEJBSW5CLFlBQVksU0FBQyxZQUFZOzRCQUl6QixZQUFZLFNBQUMsWUFBWTt5QkFJekIsWUFBWSxTQUFDLG9CQUFvQjs7d0NBbkR0Qzs7U0FZYSw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgSG92ZXJBY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi9ob3Zlci1hY3Rpb24uc2VydmljZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW3V4SG92ZXJBY3Rpb25Db250YWluZXJdJyxcclxuICAgIHByb3ZpZGVyczogW0hvdmVyQWN0aW9uU2VydmljZV0sXHJcbiAgICBob3N0OiB7XHJcbiAgICAgICAgJ1tjbGFzcy5ob3Zlci1hY3Rpb24tY29udGFpbmVyLWFjdGl2ZV0nOiAnYWN0aXZlJyxcclxuICAgICAgICAnW3RhYmluZGV4XSc6ICd0YWJpbmRleCdcclxuICAgIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvdmVyQWN0aW9uQ29udGFpbmVyRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuXHJcbiAgICBASW5wdXQoKSB0YWJpbmRleDogbnVtYmVyID0gMDtcclxuICAgIGFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgYWN0aXZlJDogU3Vic2NyaXB0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgX2hvdmVyQWN0aW9uU2VydmljZTogSG92ZXJBY3Rpb25TZXJ2aWNlKSB7XHJcbiAgICAgICAgLy8gcmVnaXN0ZXIgdGhlIGNvbnRhaW5lciBlbGVtZW50IHdpdGggdGhlIHNlcnZpY2VcclxuICAgICAgICB0aGlzLl9ob3ZlckFjdGlvblNlcnZpY2Uuc2V0Q29udGFpbmVyKHRoaXMpO1xyXG5cclxuICAgICAgICAvLyBhcHBseSBhIGNsYXNzIGJhc2VkIG9uIHRoZSBhY3RpdmUgc3RhdGUgb2YgdGhlIGNvbnRhaW5lciBhbmQgaXQncyBhY3Rpb25zXHJcbiAgICAgICAgdGhpcy5hY3RpdmUkID0gdGhpcy5faG92ZXJBY3Rpb25TZXJ2aWNlLmFjdGl2ZS5zdWJzY3JpYmUoYWN0aXZlID0+IHRoaXMuYWN0aXZlID0gYWN0aXZlKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZSQudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycpIGZvY3VzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJykgb25Gb2N1cygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9ob3ZlckFjdGlvblNlcnZpY2Uuc2V0Rm9jdXNTdGF0ZSh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdibHVyJykgb25CbHVyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2hvdmVyQWN0aW9uU2VydmljZS5zZXRGb2N1c1N0YXRlKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJykgb25Ib3ZlcigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9ob3ZlckFjdGlvblNlcnZpY2Uuc2V0SG92ZXJTdGF0ZSh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJykgb25MZWF2ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9ob3ZlckFjdGlvblNlcnZpY2Uuc2V0SG92ZXJTdGF0ZShmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5hcnJvd3JpZ2h0JykgbmV4dCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9ob3ZlckFjdGlvblNlcnZpY2UubmV4dCgpO1xyXG4gICAgfVxyXG59Il19