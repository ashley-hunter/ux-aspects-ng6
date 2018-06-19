/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ScrollIntoViewService } from './scroll-into-view.service';
import { Directive, ElementRef, Input } from '@angular/core';
var ScrollIntoViewIfDirective = /** @class */ (function () {
    function ScrollIntoViewIfDirective(element, scrollIntoViewService) {
        this.element = element;
        this.scrollIntoViewService = scrollIntoViewService;
        this.condition = false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ScrollIntoViewIfDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        if (this.condition) {
            setTimeout(function () {
                _this.scrollIntoViewService.scrollIntoView(_this.element.nativeElement, _this.scrollParent);
            });
        }
    };
    ScrollIntoViewIfDirective.decorators = [
        { type: Directive, args: [{ selector: '[uxScrollIntoViewIf]' },] },
    ];
    /** @nocollapse */
    ScrollIntoViewIfDirective.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: ScrollIntoViewService, },
    ]; };
    ScrollIntoViewIfDirective.propDecorators = {
        "condition": [{ type: Input, args: ['uxScrollIntoViewIf',] },],
        "scrollParent": [{ type: Input },],
    };
    return ScrollIntoViewIfDirective;
}());
export { ScrollIntoViewIfDirective };
function ScrollIntoViewIfDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ScrollIntoViewIfDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ScrollIntoViewIfDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    ScrollIntoViewIfDirective.propDecorators;
    /** @type {?} */
    ScrollIntoViewIfDirective.prototype.condition;
    /** @type {?} */
    ScrollIntoViewIfDirective.prototype.scrollParent;
    /** @type {?} */
    ScrollIntoViewIfDirective.prototype.element;
    /** @type {?} */
    ScrollIntoViewIfDirective.prototype.scrollIntoViewService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLWludG8tdmlldy1pZi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlcy9zY3JvbGwtaW50by12aWV3LWlmL3Njcm9sbC1pbnRvLXZpZXctaWYuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDOztJQVFuRixtQ0FBb0IsT0FBbUIsRUFBVSxxQkFBNEM7UUFBekUsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFVLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7eUJBSHBELEtBQUs7S0FHbUQ7Ozs7O0lBRWpHLCtDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUFsQyxpQkFNQztRQUxHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLFVBQVUsQ0FBQztnQkFDUCxLQUFJLENBQUMscUJBQXFCLENBQUMsY0FBYyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUM1RixDQUFDLENBQUM7U0FDTjtLQUNKOztnQkFkSixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsc0JBQXNCLEVBQUU7Ozs7Z0JBRjNCLFVBQVU7Z0JBRHJCLHFCQUFxQjs7OzhCQU16QixLQUFLLFNBQUMsb0JBQW9CO2lDQUMxQixLQUFLOztvQ0FQVjs7U0FJYSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY3JvbGxJbnRvVmlld1NlcnZpY2UgfSBmcm9tICcuL3Njcm9sbC1pbnRvLXZpZXcuc2VydmljZSc7XHJcbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW3V4U2Nyb2xsSW50b1ZpZXdJZl0nIH0pXHJcbmV4cG9ydCBjbGFzcyBTY3JvbGxJbnRvVmlld0lmRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuXHJcbiAgICBASW5wdXQoJ3V4U2Nyb2xsSW50b1ZpZXdJZicpIGNvbmRpdGlvbiA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgc2Nyb2xsUGFyZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgc2Nyb2xsSW50b1ZpZXdTZXJ2aWNlOiBTY3JvbGxJbnRvVmlld1NlcnZpY2UpIHt9XHJcbiAgICBcclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgICAgICBpZiAodGhpcy5jb25kaXRpb24pIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbEludG9WaWV3U2VydmljZS5zY3JvbGxJbnRvVmlldyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy5zY3JvbGxQYXJlbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=