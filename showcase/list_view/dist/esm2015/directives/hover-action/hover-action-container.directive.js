/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { HoverActionService } from './hover-action.service';
export class HoverActionContainerDirective {
    /**
     * @param {?} _elementRef
     * @param {?} _hoverActionService
     */
    constructor(_elementRef, _hoverActionService) {
        this._elementRef = _elementRef;
        this._hoverActionService = _hoverActionService;
        this.tabindex = 0;
        this.active = false;
        // register the container element with the service
        this._hoverActionService.setContainer(this);
        // apply a class based on the active state of the container and it's actions
        this.active$ = this._hoverActionService.active.subscribe(active => this.active = active);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.active$.unsubscribe();
    }
    /**
     * @return {?}
     */
    focus() {
        this._elementRef.nativeElement.focus();
    }
    /**
     * @return {?}
     */
    onFocus() {
        this._hoverActionService.setFocusState(true);
    }
    /**
     * @return {?}
     */
    onBlur() {
        this._hoverActionService.setFocusState(false);
    }
    /**
     * @return {?}
     */
    onHover() {
        this._hoverActionService.setHoverState(true);
    }
    /**
     * @return {?}
     */
    onLeave() {
        this._hoverActionService.setHoverState(false);
    }
    /**
     * @return {?}
     */
    next() {
        this._hoverActionService.next();
    }
}
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
HoverActionContainerDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: HoverActionService, },
];
HoverActionContainerDirective.propDecorators = {
    "tabindex": [{ type: Input },],
    "focus": [{ type: HostListener, args: ['click',] },],
    "onFocus": [{ type: HostListener, args: ['focus',] },],
    "onBlur": [{ type: HostListener, args: ['blur',] },],
    "onHover": [{ type: HostListener, args: ['mouseenter',] },],
    "onLeave": [{ type: HostListener, args: ['mouseleave',] },],
    "next": [{ type: HostListener, args: ['keydown.arrowright',] },],
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG92ZXItYWN0aW9uLWNvbnRhaW5lci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlcy9ob3Zlci1hY3Rpb24vaG92ZXItYWN0aW9uLWNvbnRhaW5lci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFdEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFVNUQsTUFBTTs7Ozs7SUFPRixZQUFvQixXQUF1QixFQUFVLG1CQUF1QztRQUF4RSxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUFVLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBb0I7d0JBTGhFLENBQUM7c0JBQ1gsS0FBSzs7UUFNbkIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7UUFHNUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUM7S0FDNUY7Ozs7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUM5Qjs7OztJQUVzQixLQUFLO1FBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDOzs7OztJQUdwQixPQUFPO1FBQzFCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7Ozs7O0lBRzNCLE1BQU07UUFDeEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7SUFHdEIsT0FBTztRQUMvQixJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDOzs7OztJQUdyQixPQUFPO1FBQy9CLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7O0lBR2QsSUFBSTtRQUNwQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLENBQUM7Ozs7WUFoRHZDLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxTQUFTLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztnQkFDL0IsSUFBSSxFQUFFO29CQUNGLHVDQUF1QyxFQUFFLFFBQVE7b0JBQ2pELFlBQVksRUFBRSxVQUFVO2lCQUMzQjthQUNKOzs7O1lBWG1CLFVBQVU7WUFFckIsa0JBQWtCOzs7eUJBWXRCLEtBQUs7c0JBaUJMLFlBQVksU0FBQyxPQUFPO3dCQUlwQixZQUFZLFNBQUMsT0FBTzt1QkFJcEIsWUFBWSxTQUFDLE1BQU07d0JBSW5CLFlBQVksU0FBQyxZQUFZO3dCQUl6QixZQUFZLFNBQUMsWUFBWTtxQkFJekIsWUFBWSxTQUFDLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBIb3ZlckFjdGlvblNlcnZpY2UgfSBmcm9tICcuL2hvdmVyLWFjdGlvbi5zZXJ2aWNlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbdXhIb3ZlckFjdGlvbkNvbnRhaW5lcl0nLFxyXG4gICAgcHJvdmlkZXJzOiBbSG92ZXJBY3Rpb25TZXJ2aWNlXSxcclxuICAgIGhvc3Q6IHtcclxuICAgICAgICAnW2NsYXNzLmhvdmVyLWFjdGlvbi1jb250YWluZXItYWN0aXZlXSc6ICdhY3RpdmUnLFxyXG4gICAgICAgICdbdGFiaW5kZXhdJzogJ3RhYmluZGV4J1xyXG4gICAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG92ZXJBY3Rpb25Db250YWluZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG5cclxuICAgIEBJbnB1dCgpIHRhYmluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBhY3RpdmUkOiBTdWJzY3JpcHRpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBfaG92ZXJBY3Rpb25TZXJ2aWNlOiBIb3ZlckFjdGlvblNlcnZpY2UpIHtcclxuICAgICAgICAvLyByZWdpc3RlciB0aGUgY29udGFpbmVyIGVsZW1lbnQgd2l0aCB0aGUgc2VydmljZVxyXG4gICAgICAgIHRoaXMuX2hvdmVyQWN0aW9uU2VydmljZS5zZXRDb250YWluZXIodGhpcyk7XHJcblxyXG4gICAgICAgIC8vIGFwcGx5IGEgY2xhc3MgYmFzZWQgb24gdGhlIGFjdGl2ZSBzdGF0ZSBvZiB0aGUgY29udGFpbmVyIGFuZCBpdCdzIGFjdGlvbnNcclxuICAgICAgICB0aGlzLmFjdGl2ZSQgPSB0aGlzLl9ob3ZlckFjdGlvblNlcnZpY2UuYWN0aXZlLnN1YnNjcmliZShhY3RpdmUgPT4gdGhpcy5hY3RpdmUgPSBhY3RpdmUpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlJC51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgZm9jdXMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKSBvbkZvY3VzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2hvdmVyQWN0aW9uU2VydmljZS5zZXRGb2N1c1N0YXRlKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2JsdXInKSBvbkJsdXIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5faG92ZXJBY3Rpb25TZXJ2aWNlLnNldEZvY3VzU3RhdGUoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInKSBvbkhvdmVyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2hvdmVyQWN0aW9uU2VydmljZS5zZXRIb3ZlclN0YXRlKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKSBvbkxlYXZlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2hvdmVyQWN0aW9uU2VydmljZS5zZXRIb3ZlclN0YXRlKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duLmFycm93cmlnaHQnKSBuZXh0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2hvdmVyQWN0aW9uU2VydmljZS5uZXh0KCk7XHJcbiAgICB9XHJcbn0iXX0=