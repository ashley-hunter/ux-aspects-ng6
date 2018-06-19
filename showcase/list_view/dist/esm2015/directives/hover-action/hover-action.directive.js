/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { HoverActionService } from './hover-action.service';
export class HoverActionDirective {
    /**
     * @param {?} _elementRef
     * @param {?} _hoverActionService
     */
    constructor(_elementRef, _hoverActionService) {
        this._elementRef = _elementRef;
        this._hoverActionService = _hoverActionService;
        this.tabindex = 1;
        this.active = false;
        this.focused = false;
        // register the action
        this._hoverActionService.register(this);
        // watch for changes to the activeness of the container
        this.active$ = this._hoverActionService.active.subscribe(active => this.active = active);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._hoverActionService.unregister(this);
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
        this.focused = true;
        this._hoverActionService.updateVisibility();
    }
    /**
     * @return {?}
     */
    onBlur() {
        this.focused = false;
        this._hoverActionService.updateVisibility();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    previous(event) {
        event.stopPropagation();
        this._hoverActionService.previous();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    next(event) {
        event.stopPropagation();
        this._hoverActionService.next();
    }
}
HoverActionDirective.decorators = [
    { type: Directive, args: [{
                selector: '[uxHoverAction]',
                host: {
                    '[class.hover-action-active]': 'active',
                    '[class.hover-action-focused]': 'focused',
                    '[tabindex]': 'tabindex'
                }
            },] },
];
/** @nocollapse */
HoverActionDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: HoverActionService, },
];
HoverActionDirective.propDecorators = {
    "tabindex": [{ type: Input },],
    "onFocus": [{ type: HostListener, args: ['focus',] },],
    "onBlur": [{ type: HostListener, args: ['blur',] },],
    "previous": [{ type: HostListener, args: ['keydown.arrowleft', ['$event'],] },],
    "next": [{ type: HostListener, args: ['keydown.arrowright', ['$event'],] },],
};
function HoverActionDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    HoverActionDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    HoverActionDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    HoverActionDirective.propDecorators;
    /** @type {?} */
    HoverActionDirective.prototype.tabindex;
    /** @type {?} */
    HoverActionDirective.prototype.active;
    /** @type {?} */
    HoverActionDirective.prototype.focused;
    /** @type {?} */
    HoverActionDirective.prototype.active$;
    /** @type {?} */
    HoverActionDirective.prototype._elementRef;
    /** @type {?} */
    HoverActionDirective.prototype._hoverActionService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG92ZXItYWN0aW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL2hvdmVyLWFjdGlvbi9ob3Zlci1hY3Rpb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQWEsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBVzVELE1BQU07Ozs7O0lBUUYsWUFBb0IsV0FBdUIsRUFBVSxtQkFBdUM7UUFBeEUsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFBVSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW9CO3dCQU5oRSxDQUFDO3NCQUNYLEtBQUs7dUJBQ0osS0FBSzs7UUFPcEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7UUFHeEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUM7S0FDNUY7Ozs7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQzlCOzs7O0lBRUQsS0FBSztRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQzFDOzs7O0lBRXNCLE9BQU87UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixFQUFFLENBQUM7Ozs7O0lBRzFCLE1BQU07UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixFQUFFLENBQUM7Ozs7OztJQUdELFFBQVEsQ0FBQyxLQUFpQjtRQUNyRSxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxDQUFDOzs7Ozs7SUFHUSxJQUFJLENBQUMsS0FBaUI7UUFDbEUsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7OztZQW5EdkMsU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLElBQUksRUFBRTtvQkFDRiw2QkFBNkIsRUFBRSxRQUFRO29CQUN2Qyw4QkFBOEIsRUFBRSxTQUFTO29CQUN6QyxZQUFZLEVBQUUsVUFBVTtpQkFDM0I7YUFDSjs7OztZQVhtQixVQUFVO1lBQ3JCLGtCQUFrQjs7O3lCQWF0QixLQUFLO3dCQXdCTCxZQUFZLFNBQUMsT0FBTzt1QkFLcEIsWUFBWSxTQUFDLE1BQU07eUJBS25CLFlBQVksU0FBQyxtQkFBbUIsRUFBRSxDQUFDLFFBQVEsQ0FBQztxQkFLNUMsWUFBWSxTQUFDLG9CQUFvQixFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIE9uRGVzdHJveSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSG92ZXJBY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi9ob3Zlci1hY3Rpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1t1eEhvdmVyQWN0aW9uXScsXHJcbiAgICBob3N0OiB7XHJcbiAgICAgICAgJ1tjbGFzcy5ob3Zlci1hY3Rpb24tYWN0aXZlXSc6ICdhY3RpdmUnLFxyXG4gICAgICAgICdbY2xhc3MuaG92ZXItYWN0aW9uLWZvY3VzZWRdJzogJ2ZvY3VzZWQnLFxyXG4gICAgICAgICdbdGFiaW5kZXhdJzogJ3RhYmluZGV4J1xyXG4gICAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG92ZXJBY3Rpb25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG5cclxuICAgIEBJbnB1dCgpIHRhYmluZGV4OiBudW1iZXIgPSAxO1xyXG4gICAgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBmb2N1c2VkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBhY3RpdmUkOiBTdWJzY3JpcHRpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBfaG92ZXJBY3Rpb25TZXJ2aWNlOiBIb3ZlckFjdGlvblNlcnZpY2UpIHtcclxuXHJcbiAgICAgICAgLy8gcmVnaXN0ZXIgdGhlIGFjdGlvblxyXG4gICAgICAgIHRoaXMuX2hvdmVyQWN0aW9uU2VydmljZS5yZWdpc3Rlcih0aGlzKTtcclxuXHJcbiAgICAgICAgLy8gd2F0Y2ggZm9yIGNoYW5nZXMgdG8gdGhlIGFjdGl2ZW5lc3Mgb2YgdGhlIGNvbnRhaW5lclxyXG4gICAgICAgIHRoaXMuYWN0aXZlJCA9IHRoaXMuX2hvdmVyQWN0aW9uU2VydmljZS5hY3RpdmUuc3Vic2NyaWJlKGFjdGl2ZSA9PiB0aGlzLmFjdGl2ZSA9IGFjdGl2ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5faG92ZXJBY3Rpb25TZXJ2aWNlLnVucmVnaXN0ZXIodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUkLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9jdXMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKSBvbkZvY3VzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5faG92ZXJBY3Rpb25TZXJ2aWNlLnVwZGF0ZVZpc2liaWxpdHkoKTtcclxuICAgIH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdibHVyJykgb25CbHVyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2hvdmVyQWN0aW9uU2VydmljZS51cGRhdGVWaXNpYmlsaXR5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5hcnJvd2xlZnQnLCBbJyRldmVudCddKSBwcmV2aW91cyhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyAgICAgICAgXHJcbiAgICAgICAgdGhpcy5faG92ZXJBY3Rpb25TZXJ2aWNlLnByZXZpb3VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5hcnJvd3JpZ2h0JywgWyckZXZlbnQnXSkgbmV4dChldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuX2hvdmVyQWN0aW9uU2VydmljZS5uZXh0KCk7XHJcbiAgICB9XHJcbn0iXX0=