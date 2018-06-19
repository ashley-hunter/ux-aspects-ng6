/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { HoverActionService } from './hover-action.service';
var HoverActionDirective = /** @class */ (function () {
    function HoverActionDirective(_elementRef, _hoverActionService) {
        var _this = this;
        this._elementRef = _elementRef;
        this._hoverActionService = _hoverActionService;
        this.tabindex = 1;
        this.active = false;
        this.focused = false;
        // register the action
        this._hoverActionService.register(this);
        // watch for changes to the activeness of the container
        this.active$ = this._hoverActionService.active.subscribe(function (active) { return _this.active = active; });
    }
    /**
     * @return {?}
     */
    HoverActionDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._hoverActionService.unregister(this);
        this.active$.unsubscribe();
    };
    /**
     * @return {?}
     */
    HoverActionDirective.prototype.focus = /**
     * @return {?}
     */
    function () {
        this._elementRef.nativeElement.focus();
    };
    /**
     * @return {?}
     */
    HoverActionDirective.prototype.onFocus = /**
     * @return {?}
     */
    function () {
        this.focused = true;
        this._hoverActionService.updateVisibility();
    };
    /**
     * @return {?}
     */
    HoverActionDirective.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this.focused = false;
        this._hoverActionService.updateVisibility();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    HoverActionDirective.prototype.previous = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        this._hoverActionService.previous();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    HoverActionDirective.prototype.next = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        this._hoverActionService.next();
    };
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
    HoverActionDirective.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: HoverActionService, },
    ]; };
    HoverActionDirective.propDecorators = {
        "tabindex": [{ type: Input },],
        "onFocus": [{ type: HostListener, args: ['focus',] },],
        "onBlur": [{ type: HostListener, args: ['blur',] },],
        "previous": [{ type: HostListener, args: ['keydown.arrowleft', ['$event'],] },],
        "next": [{ type: HostListener, args: ['keydown.arrowright', ['$event'],] },],
    };
    return HoverActionDirective;
}());
export { HoverActionDirective };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG92ZXItYWN0aW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL2hvdmVyLWFjdGlvbi9ob3Zlci1hY3Rpb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQWEsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztJQW1CeEQsOEJBQW9CLFdBQXVCLEVBQVUsbUJBQXVDO1FBQTVGLGlCQU9DO1FBUG1CLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVUsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFvQjt3QkFOaEUsQ0FBQztzQkFDWCxLQUFLO3VCQUNKLEtBQUs7O1FBT3BCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7O1FBR3hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO0tBQzVGOzs7O0lBRUQsMENBQVc7OztJQUFYO1FBQ0ksSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQzlCOzs7O0lBRUQsb0NBQUs7OztJQUFMO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDMUM7Ozs7SUFFc0Isc0NBQU87Ozs7UUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixFQUFFLENBQUM7Ozs7O0lBRzFCLHFDQUFNOzs7O1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDOzs7Ozs7SUFHRCx1Q0FBUTs7OztjQUFDLEtBQWlCO1FBQ3JFLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLENBQUM7Ozs7OztJQUdRLG1DQUFJOzs7O2NBQUMsS0FBaUI7UUFDbEUsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7O2dCQW5EdkMsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLElBQUksRUFBRTt3QkFDRiw2QkFBNkIsRUFBRSxRQUFRO3dCQUN2Qyw4QkFBOEIsRUFBRSxTQUFTO3dCQUN6QyxZQUFZLEVBQUUsVUFBVTtxQkFDM0I7aUJBQ0o7Ozs7Z0JBWG1CLFVBQVU7Z0JBQ3JCLGtCQUFrQjs7OzZCQWF0QixLQUFLOzRCQXdCTCxZQUFZLFNBQUMsT0FBTzsyQkFLcEIsWUFBWSxTQUFDLE1BQU07NkJBS25CLFlBQVksU0FBQyxtQkFBbUIsRUFBRSxDQUFDLFFBQVEsQ0FBQzt5QkFLNUMsWUFBWSxTQUFDLG9CQUFvQixFQUFFLENBQUMsUUFBUSxDQUFDOzsrQkFyRGxEOztTQVlhLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBPbkRlc3Ryb3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhvdmVyQWN0aW9uU2VydmljZSB9IGZyb20gJy4vaG92ZXItYWN0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbdXhIb3ZlckFjdGlvbl0nLFxyXG4gICAgaG9zdDoge1xyXG4gICAgICAgICdbY2xhc3MuaG92ZXItYWN0aW9uLWFjdGl2ZV0nOiAnYWN0aXZlJyxcclxuICAgICAgICAnW2NsYXNzLmhvdmVyLWFjdGlvbi1mb2N1c2VkXSc6ICdmb2N1c2VkJyxcclxuICAgICAgICAnW3RhYmluZGV4XSc6ICd0YWJpbmRleCdcclxuICAgIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvdmVyQWN0aW9uRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuXHJcbiAgICBASW5wdXQoKSB0YWJpbmRleDogbnVtYmVyID0gMTtcclxuICAgIGFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgZm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgYWN0aXZlJDogU3Vic2NyaXB0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgX2hvdmVyQWN0aW9uU2VydmljZTogSG92ZXJBY3Rpb25TZXJ2aWNlKSB7XHJcblxyXG4gICAgICAgIC8vIHJlZ2lzdGVyIHRoZSBhY3Rpb25cclxuICAgICAgICB0aGlzLl9ob3ZlckFjdGlvblNlcnZpY2UucmVnaXN0ZXIodGhpcyk7XHJcblxyXG4gICAgICAgIC8vIHdhdGNoIGZvciBjaGFuZ2VzIHRvIHRoZSBhY3RpdmVuZXNzIG9mIHRoZSBjb250YWluZXJcclxuICAgICAgICB0aGlzLmFjdGl2ZSQgPSB0aGlzLl9ob3ZlckFjdGlvblNlcnZpY2UuYWN0aXZlLnN1YnNjcmliZShhY3RpdmUgPT4gdGhpcy5hY3RpdmUgPSBhY3RpdmUpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2hvdmVyQWN0aW9uU2VydmljZS51bnJlZ2lzdGVyKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlJC51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvY3VzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJykgb25Gb2N1cygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmZvY3VzZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX2hvdmVyQWN0aW9uU2VydmljZS51cGRhdGVWaXNpYmlsaXR5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignYmx1cicpIG9uQmx1cigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9ob3ZlckFjdGlvblNlcnZpY2UudXBkYXRlVmlzaWJpbGl0eSgpO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uYXJyb3dsZWZ0JywgWyckZXZlbnQnXSkgcHJldmlvdXMoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgICAgICAgIFxyXG4gICAgICAgIHRoaXMuX2hvdmVyQWN0aW9uU2VydmljZS5wcmV2aW91cygpO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uYXJyb3dyaWdodCcsIFsnJGV2ZW50J10pIG5leHQoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0aGlzLl9ob3ZlckFjdGlvblNlcnZpY2UubmV4dCgpO1xyXG4gICAgfVxyXG59Il19