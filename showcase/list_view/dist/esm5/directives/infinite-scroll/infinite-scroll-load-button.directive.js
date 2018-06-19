/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Input, Output, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
var InfiniteScrollLoadButtonDirective = /** @class */ (function () {
    function InfiniteScrollLoadButtonDirective(_element, _template, _viewContainer, _renderer) {
        this._element = _element;
        this._template = _template;
        this._viewContainer = _viewContainer;
        this._renderer = _renderer;
        this._visible = false;
        this._load = new Subject();
        this.load = /** @type {?} */ (this._load.asObservable());
    }
    Object.defineProperty(InfiniteScrollLoadButtonDirective.prototype, "visible", {
        get: /**
         * @return {?}
         */
        function () {
            return this._visible;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== this._visible) {
                if (value) {
                    this._viewContainer.createEmbeddedView(this._template);
                    // Template content follows the elementRef, which is a comment.
                    var /** @type {?} */ clickTarget = this.getNextElementSibling(this._template.elementRef.nativeElement);
                    this._renderer.listen(clickTarget, 'click', this.onClick.bind(this));
                }
                else {
                    this._viewContainer.clear();
                }
            }
            this._visible = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    InfiniteScrollLoadButtonDirective.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this._load.next(event);
    };
    /**
     * @param {?} element
     * @return {?}
     */
    InfiniteScrollLoadButtonDirective.prototype.getNextElementSibling = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        var /** @type {?} */ next = element;
        while (next = next.nextSibling) {
            if (next.nodeType === 1) {
                return next;
            }
        }
        return null;
    };
    InfiniteScrollLoadButtonDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[uxInfiniteScrollLoadButton]'
                },] },
    ];
    /** @nocollapse */
    InfiniteScrollLoadButtonDirective.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: TemplateRef, },
        { type: ViewContainerRef, },
        { type: Renderer2, },
    ]; };
    InfiniteScrollLoadButtonDirective.propDecorators = {
        "visible": [{ type: Input, args: ['uxInfiniteScrollLoadButton',] },],
        "load": [{ type: Output },],
    };
    return InfiniteScrollLoadButtonDirective;
}());
export { InfiniteScrollLoadButtonDirective };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5maW5pdGUtc2Nyb2xsLWxvYWQtYnV0dG9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL2luZmluaXRlLXNjcm9sbC9pbmZpbml0ZS1zY3JvbGwtbG9hZC1idXR0b24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0csT0FBTyxFQUFFLFVBQVUsRUFBSSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBZ0N6QywyQ0FDWSxVQUNBLFdBQ0EsZ0JBQ0E7UUFIQSxhQUFRLEdBQVIsUUFBUTtRQUNSLGNBQVMsR0FBVCxTQUFTO1FBQ1QsbUJBQWMsR0FBZCxjQUFjO1FBQ2QsY0FBUyxHQUFULFNBQVM7d0JBUE8sS0FBSztxQkFDakIsSUFBSSxPQUFPLEVBQUU7UUFRekIsSUFBSSxDQUFDLElBQUkscUJBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQXVCLENBQUEsQ0FBQztLQUM5RDswQkEvQkcsc0RBQU87Ozs7O1lBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7Ozs7OztRQUV6QixVQUFZLEtBQWM7WUFDdEIsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNSLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDOztvQkFHdkQscUJBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDeEYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2lCQUN4RTtnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDSixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUMvQjthQUNKO1lBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7U0FDekI7Ozs7Ozs7O0lBZ0JPLG1EQUFPOzs7O2NBQUMsS0FBaUI7UUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7OztJQUduQixpRUFBcUI7Ozs7Y0FBQyxPQUFZO1FBQ3RDLHFCQUFJLElBQUksR0FBRyxPQUFPLENBQUM7UUFDbkIsT0FBTyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzdCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQzthQUNmO1NBQ0o7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDOzs7Z0JBbERuQixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLDhCQUE4QjtpQkFDM0M7Ozs7Z0JBTG1CLFVBQVU7Z0JBQTRCLFdBQVc7Z0JBQUUsZ0JBQWdCO2dCQUF4QyxTQUFTOzs7NEJBUW5ELEtBQUssU0FBQyw0QkFBNEI7eUJBb0JsQyxNQUFNOzs0Q0E1Qlg7O1NBTWEsaUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT3V0cHV0LCBSZW5kZXJlcjIsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgLCAgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1t1eEluZmluaXRlU2Nyb2xsTG9hZEJ1dHRvbl0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbmZpbml0ZVNjcm9sbExvYWRCdXR0b25EaXJlY3RpdmUge1xyXG5cclxuICAgIEBJbnB1dCgndXhJbmZpbml0ZVNjcm9sbExvYWRCdXR0b24nKVxyXG4gICAgZ2V0IHZpc2libGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Zpc2libGU7XHJcbiAgICB9XHJcbiAgICBzZXQgdmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fdmlzaWJsZSkge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3ZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMuX3RlbXBsYXRlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBUZW1wbGF0ZSBjb250ZW50IGZvbGxvd3MgdGhlIGVsZW1lbnRSZWYsIHdoaWNoIGlzIGEgY29tbWVudC5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsaWNrVGFyZ2V0ID0gdGhpcy5nZXROZXh0RWxlbWVudFNpYmxpbmcodGhpcy5fdGVtcGxhdGUuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmxpc3RlbihjbGlja1RhcmdldCwgJ2NsaWNrJywgdGhpcy5vbkNsaWNrLmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdmlld0NvbnRhaW5lci5jbGVhcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl92aXNpYmxlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgQE91dHB1dCgpIGxvYWQ6IE9ic2VydmFibGU8RXZlbnQ+O1xyXG5cclxuICAgIHByaXZhdGUgX3Zpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX2xvYWQgPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSBfdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4sXHJcbiAgICAgICAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcclxuICAgICAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZCA9IHRoaXMuX2xvYWQuYXNPYnNlcnZhYmxlKCkgYXMgT2JzZXJ2YWJsZTxFdmVudD47XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5fbG9hZC5uZXh0KGV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldE5leHRFbGVtZW50U2libGluZyhlbGVtZW50OiBhbnkpOiBFbGVtZW50IHtcclxuICAgICAgICB2YXIgbmV4dCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgd2hpbGUgKG5leHQgPSBuZXh0Lm5leHRTaWJsaW5nKSB7XHJcbiAgICAgICAgICAgIGlmIChuZXh0Lm5vZGVUeXBlID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG4iXX0=