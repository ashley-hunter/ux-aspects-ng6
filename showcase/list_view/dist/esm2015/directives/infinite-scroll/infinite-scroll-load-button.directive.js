/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Input, Output, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
export class InfiniteScrollLoadButtonDirective {
    /**
     * @param {?} _element
     * @param {?} _template
     * @param {?} _viewContainer
     * @param {?} _renderer
     */
    constructor(_element, _template, _viewContainer, _renderer) {
        this._element = _element;
        this._template = _template;
        this._viewContainer = _viewContainer;
        this._renderer = _renderer;
        this._visible = false;
        this._load = new Subject();
        this.load = /** @type {?} */ (this._load.asObservable());
    }
    /**
     * @return {?}
     */
    get visible() {
        return this._visible;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set visible(value) {
        if (value !== this._visible) {
            if (value) {
                this._viewContainer.createEmbeddedView(this._template);
                // Template content follows the elementRef, which is a comment.
                const /** @type {?} */ clickTarget = this.getNextElementSibling(this._template.elementRef.nativeElement);
                this._renderer.listen(clickTarget, 'click', this.onClick.bind(this));
            }
            else {
                this._viewContainer.clear();
            }
        }
        this._visible = value;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        this._load.next(event);
    }
    /**
     * @param {?} element
     * @return {?}
     */
    getNextElementSibling(element) {
        var /** @type {?} */ next = element;
        while (next = next.nextSibling) {
            if (next.nodeType === 1) {
                return next;
            }
        }
        return null;
    }
}
InfiniteScrollLoadButtonDirective.decorators = [
    { type: Directive, args: [{
                selector: '[uxInfiniteScrollLoadButton]'
            },] },
];
/** @nocollapse */
InfiniteScrollLoadButtonDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: Renderer2, },
];
InfiniteScrollLoadButtonDirective.propDecorators = {
    "visible": [{ type: Input, args: ['uxInfiniteScrollLoadButton',] },],
    "load": [{ type: Output },],
};
function InfiniteScrollLoadButtonDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    InfiniteScrollLoadButtonDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    InfiniteScrollLoadButtonDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    InfiniteScrollLoadButtonDirective.propDecorators;
    /** @type {?} */
    InfiniteScrollLoadButtonDirective.prototype.load;
    /** @type {?} */
    InfiniteScrollLoadButtonDirective.prototype._visible;
    /** @type {?} */
    InfiniteScrollLoadButtonDirective.prototype._load;
    /** @type {?} */
    InfiniteScrollLoadButtonDirective.prototype._element;
    /** @type {?} */
    InfiniteScrollLoadButtonDirective.prototype._template;
    /** @type {?} */
    InfiniteScrollLoadButtonDirective.prototype._viewContainer;
    /** @type {?} */
    InfiniteScrollLoadButtonDirective.prototype._renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5maW5pdGUtc2Nyb2xsLWxvYWQtYnV0dG9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL2luZmluaXRlLXNjcm9sbC9pbmZpbml0ZS1zY3JvbGwtbG9hZC1idXR0b24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0csT0FBTyxFQUFFLFVBQVUsRUFBSSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFLN0MsTUFBTTs7Ozs7OztJQTJCRixZQUNZLFVBQ0EsV0FDQSxnQkFDQTtRQUhBLGFBQVEsR0FBUixRQUFRO1FBQ1IsY0FBUyxHQUFULFNBQVM7UUFDVCxtQkFBYyxHQUFkLGNBQWM7UUFDZCxjQUFTLEdBQVQsU0FBUzt3QkFQTyxLQUFLO3FCQUNqQixJQUFJLE9BQU8sRUFBRTtRQVF6QixJQUFJLENBQUMsSUFBSSxxQkFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBdUIsQ0FBQSxDQUFDO0tBQzlEOzs7O1FBL0JHLE9BQU87UUFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzs7Ozs7O0lBRXpCLElBQUksT0FBTyxDQUFDLEtBQWM7UUFDdEIsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzFCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ1IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7O2dCQUd2RCx1QkFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUN4RixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDeEU7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQy9CO1NBQ0o7UUFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztLQUN6Qjs7Ozs7SUFnQk8sT0FBTyxDQUFDLEtBQWlCO1FBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7Ozs7SUFHbkIscUJBQXFCLENBQUMsT0FBWTtRQUN0QyxxQkFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDO1FBQ25CLE9BQU8sSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUM3QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUM7YUFDZjtTQUNKO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQzs7OztZQWxEbkIsU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSw4QkFBOEI7YUFDM0M7Ozs7WUFMbUIsVUFBVTtZQUE0QixXQUFXO1lBQUUsZ0JBQWdCO1lBQXhDLFNBQVM7Ozt3QkFRbkQsS0FBSyxTQUFDLDRCQUE0QjtxQkFvQmxDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPdXRwdXQsIFJlbmRlcmVyMiwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSAsICBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW3V4SW5maW5pdGVTY3JvbGxMb2FkQnV0dG9uXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEluZmluaXRlU2Nyb2xsTG9hZEJ1dHRvbkRpcmVjdGl2ZSB7XHJcblxyXG4gICAgQElucHV0KCd1eEluZmluaXRlU2Nyb2xsTG9hZEJ1dHRvbicpXHJcbiAgICBnZXQgdmlzaWJsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdmlzaWJsZTtcclxuICAgIH1cclxuICAgIHNldCB2aXNpYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLl92aXNpYmxlKSB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy5fdGVtcGxhdGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFRlbXBsYXRlIGNvbnRlbnQgZm9sbG93cyB0aGUgZWxlbWVudFJlZiwgd2hpY2ggaXMgYSBjb21tZW50LlxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2xpY2tUYXJnZXQgPSB0aGlzLmdldE5leHRFbGVtZW50U2libGluZyh0aGlzLl90ZW1wbGF0ZS5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIubGlzdGVuKGNsaWNrVGFyZ2V0LCAnY2xpY2snLCB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl92aWV3Q29udGFpbmVyLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3Zpc2libGUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBAT3V0cHV0KCkgbG9hZDogT2JzZXJ2YWJsZTxFdmVudD47XHJcblxyXG4gICAgcHJpdmF0ZSBfdmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfbG9hZCA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBfZWxlbWVudDogRWxlbWVudFJlZixcclxuICAgICAgICBwcml2YXRlIF90ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PixcclxuICAgICAgICBwcml2YXRlIF92aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkID0gdGhpcy5fbG9hZC5hc09ic2VydmFibGUoKSBhcyBPYnNlcnZhYmxlPEV2ZW50PjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICB0aGlzLl9sb2FkLm5leHQoZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TmV4dEVsZW1lbnRTaWJsaW5nKGVsZW1lbnQ6IGFueSk6IEVsZW1lbnQge1xyXG4gICAgICAgIHZhciBuZXh0ID0gZWxlbWVudDtcclxuICAgICAgICB3aGlsZSAobmV4dCA9IG5leHQubmV4dFNpYmxpbmcpIHtcclxuICAgICAgICAgICAgaWYgKG5leHQubm9kZVR5cGUgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXh0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==