/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
var InfiniteScrollLoadingDirective = /** @class */ (function () {
    function InfiniteScrollLoadingDirective(_templateRef, _viewContainer) {
        this._templateRef = _templateRef;
        this._viewContainer = _viewContainer;
        this._visible = false;
    }
    Object.defineProperty(InfiniteScrollLoadingDirective.prototype, "visible", {
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
                    this._viewContainer.createEmbeddedView(this._templateRef);
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
    InfiniteScrollLoadingDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[uxInfiniteScrollLoading]'
                },] },
    ];
    /** @nocollapse */
    InfiniteScrollLoadingDirective.ctorParameters = function () { return [
        { type: TemplateRef, },
        { type: ViewContainerRef, },
    ]; };
    InfiniteScrollLoadingDirective.propDecorators = {
        "visible": [{ type: Input, args: ['uxInfiniteScrollLoading',] },],
    };
    return InfiniteScrollLoadingDirective;
}());
export { InfiniteScrollLoadingDirective };
function InfiniteScrollLoadingDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    InfiniteScrollLoadingDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    InfiniteScrollLoadingDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    InfiniteScrollLoadingDirective.propDecorators;
    /** @type {?} */
    InfiniteScrollLoadingDirective.prototype._visible;
    /** @type {?} */
    InfiniteScrollLoadingDirective.prototype._templateRef;
    /** @type {?} */
    InfiniteScrollLoadingDirective.prototype._viewContainer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5maW5pdGUtc2Nyb2xsLWxvYWRpbmcuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvaW5maW5pdGUtc2Nyb2xsL2luZmluaXRlLXNjcm9sbC1sb2FkaW5nLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDOztJQXlCNUUsd0NBQ1ksY0FDQTtRQURBLGlCQUFZLEdBQVosWUFBWTtRQUNaLG1CQUFjLEdBQWQsY0FBYzt3QkFKRSxLQUFLO0tBSWdCOzBCQW5CN0MsbURBQU87Ozs7O1lBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7Ozs7OztRQUV6QixVQUFZLEtBQWM7WUFDdEIsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNSLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUM3RDtnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDSixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUMvQjthQUNKO1lBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7U0FDekI7Ozs7O2dCQW5CSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLDJCQUEyQjtpQkFDeEM7Ozs7Z0JBSjBCLFdBQVc7Z0JBQUUsZ0JBQWdCOzs7NEJBT25ELEtBQUssU0FBQyx5QkFBeUI7O3lDQVBwQzs7U0FLYSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1t1eEluZmluaXRlU2Nyb2xsTG9hZGluZ10nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbmZpbml0ZVNjcm9sbExvYWRpbmdEaXJlY3RpdmUge1xyXG5cclxuICAgIEBJbnB1dCgndXhJbmZpbml0ZVNjcm9sbExvYWRpbmcnKVxyXG4gICAgZ2V0IHZpc2libGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Zpc2libGU7XHJcbiAgICB9XHJcbiAgICBzZXQgdmlzaWJsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fdmlzaWJsZSkge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3ZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMuX3RlbXBsYXRlUmVmKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3ZpZXdDb250YWluZXIuY2xlYXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl92aXNpYmxlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX3RlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxyXG4gICAgICAgIHByaXZhdGUgX3ZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYpIHsgfVxyXG59XHJcbiJdfQ==