/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, HostListener, Output, EventEmitter, ElementRef } from '@angular/core';
export class ToolbarSearchButtonDirective {
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this.clicked = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get width() {
        return this._elementRef.nativeElement.offsetWidth;
    }
    /**
     * @return {?}
     */
    clickHandler() {
        this.clicked.emit();
    }
}
ToolbarSearchButtonDirective.decorators = [
    { type: Directive, args: [{
                selector: '[uxToolbarSearchButton]'
            },] },
];
/** @nocollapse */
ToolbarSearchButtonDirective.ctorParameters = () => [
    { type: ElementRef, },
];
ToolbarSearchButtonDirective.propDecorators = {
    "clicked": [{ type: Output },],
    "clickHandler": [{ type: HostListener, args: ['click',] },],
};
function ToolbarSearchButtonDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ToolbarSearchButtonDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ToolbarSearchButtonDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    ToolbarSearchButtonDirective.propDecorators;
    /** @type {?} */
    ToolbarSearchButtonDirective.prototype.clicked;
    /** @type {?} */
    ToolbarSearchButtonDirective.prototype._elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci1zZWFyY2gtYnV0dG9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3Rvb2xiYXItc2VhcmNoL3Rvb2xiYXItc2VhcmNoLWJ1dHRvbi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzFGLE1BQU07Ozs7SUFTRixZQUFvQixXQUF1QjtRQUF2QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTt1QkFOakMsSUFBSSxZQUFZLEVBQVE7S0FNYzs7OztJQUpoRCxJQUFJLEtBQUs7UUFDTCxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO0tBQ3JEOzs7O0lBS0QsWUFBWTtRQUNSLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7Ozs7WUFoQjNCLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUseUJBQXlCO2FBQ3RDOzs7O1lBSnVELFVBQVU7Ozt3QkFPN0QsTUFBTTs2QkFTTixZQUFZLFNBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1t1eFRvb2xiYXJTZWFyY2hCdXR0b25dJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9vbGJhclNlYXJjaEJ1dHRvbkRpcmVjdGl2ZSB7XHJcblxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBjbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICAgIGdldCB3aWR0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZikgeyB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxyXG4gICAgY2xpY2tIYW5kbGVyKCkge1xyXG4gICAgICAgIHRoaXMuY2xpY2tlZC5lbWl0KCk7XHJcbiAgICB9XHJcbn1cclxuIl19