/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ScrollIntoViewService } from './scroll-into-view.service';
import { Directive, ElementRef, Input } from '@angular/core';
export class ScrollIntoViewIfDirective {
    /**
     * @param {?} element
     * @param {?} scrollIntoViewService
     */
    constructor(element, scrollIntoViewService) {
        this.element = element;
        this.scrollIntoViewService = scrollIntoViewService;
        this.condition = false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.condition) {
            setTimeout(() => {
                this.scrollIntoViewService.scrollIntoView(this.element.nativeElement, this.scrollParent);
            });
        }
    }
}
ScrollIntoViewIfDirective.decorators = [
    { type: Directive, args: [{ selector: '[uxScrollIntoViewIf]' },] },
];
/** @nocollapse */
ScrollIntoViewIfDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: ScrollIntoViewService, },
];
ScrollIntoViewIfDirective.propDecorators = {
    "condition": [{ type: Input, args: ['uxScrollIntoViewIf',] },],
    "scrollParent": [{ type: Input },],
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLWludG8tdmlldy1pZi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlcy9zY3JvbGwtaW50by12aWV3LWlmL3Njcm9sbC1pbnRvLXZpZXctaWYuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBR3ZGLE1BQU07Ozs7O0lBS0YsWUFBb0IsT0FBbUIsRUFBVSxxQkFBNEM7UUFBekUsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFVLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7eUJBSHBELEtBQUs7S0FHbUQ7Ozs7O0lBRWpHLFdBQVcsQ0FBQyxPQUFzQjtRQUM5QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNqQixVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNaLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQzVGLENBQUMsQ0FBQztTQUNOO0tBQ0o7OztZQWRKLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBRTs7OztZQUYzQixVQUFVO1lBRHJCLHFCQUFxQjs7OzBCQU16QixLQUFLLFNBQUMsb0JBQW9COzZCQUMxQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2Nyb2xsSW50b1ZpZXdTZXJ2aWNlIH0gZnJvbSAnLi9zY3JvbGwtaW50by12aWV3LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1t1eFNjcm9sbEludG9WaWV3SWZdJyB9KVxyXG5leHBvcnQgY2xhc3MgU2Nyb2xsSW50b1ZpZXdJZkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcblxyXG4gICAgQElucHV0KCd1eFNjcm9sbEludG9WaWV3SWYnKSBjb25kaXRpb24gPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHNjcm9sbFBhcmVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIHNjcm9sbEludG9WaWV3U2VydmljZTogU2Nyb2xsSW50b1ZpZXdTZXJ2aWNlKSB7fVxyXG4gICAgXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxJbnRvVmlld1NlcnZpY2Uuc2Nyb2xsSW50b1ZpZXcodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMuc2Nyb2xsUGFyZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19