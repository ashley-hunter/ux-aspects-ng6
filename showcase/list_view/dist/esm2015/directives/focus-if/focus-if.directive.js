/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Input } from '@angular/core';
export class FocusIfDirective {
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this.focusIfDelay = 0;
        this._timeout = null;
    }
    /**
     * @param {?} focus
     * @return {?}
     */
    set focusIf(focus) {
        // if a timeout is pending then cancel it
        if (!focus && this._timeout !== null) {
            clearTimeout(this._timeout);
            this._timeout = null;
        }
        if (focus && this._timeout === null) {
            this._timeout = window.setTimeout(() => {
                this._elementRef.nativeElement.focus();
                this._timeout = null;
            }, this.focusIfDelay);
        }
    }
}
FocusIfDirective.decorators = [
    { type: Directive, args: [{
                selector: '[focusIf]'
            },] },
];
/** @nocollapse */
FocusIfDirective.ctorParameters = () => [
    { type: ElementRef, },
];
FocusIfDirective.propDecorators = {
    "focusIfDelay": [{ type: Input },],
    "focusIf": [{ type: Input },],
};
function FocusIfDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FocusIfDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FocusIfDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    FocusIfDirective.propDecorators;
    /** @type {?} */
    FocusIfDirective.prototype.focusIfDelay;
    /** @type {?} */
    FocusIfDirective.prototype._timeout;
    /** @type {?} */
    FocusIfDirective.prototype._elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMtaWYuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvZm9jdXMtaWYvZm9jdXMtaWYuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLN0QsTUFBTTs7OztJQXVCRixZQUFvQixXQUF1QjtRQUF2QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTs0QkFyQlgsQ0FBQzt3QkFtQk4sSUFBSTtLQUVpQjs7Ozs7UUFsQjVDLE9BQU8sQ0FBQyxLQUFjOztRQUd0QixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbkMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUN4QjtRQUVELEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2FBQ3hCLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3pCOzs7O1lBckJSLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsV0FBVzthQUN4Qjs7OztZQUptQixVQUFVOzs7NkJBT3pCLEtBQUs7d0JBRUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbZm9jdXNJZl0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb2N1c0lmRGlyZWN0aXZlIHtcclxuXHJcbiAgICBASW5wdXQoKSBmb2N1c0lmRGVsYXk6IG51bWJlciA9IDA7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHNldCBmb2N1c0lmKGZvY3VzOiBib29sZWFuKSB7XHJcblxyXG4gICAgICAgIC8vIGlmIGEgdGltZW91dCBpcyBwZW5kaW5nIHRoZW4gY2FuY2VsIGl0XHJcbiAgICAgICAgaWYgKCFmb2N1cyAmJiB0aGlzLl90aW1lb3V0ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KTtcclxuICAgICAgICAgICAgdGhpcy5fdGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZm9jdXMgJiYgdGhpcy5fdGltZW91dCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl90aW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl90aW1lb3V0ID0gbnVsbDtcclxuICAgICAgICAgICAgfSwgdGhpcy5mb2N1c0lmRGVsYXkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF90aW1lb3V0OiBudW1iZXIgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHsgfVxyXG59Il19