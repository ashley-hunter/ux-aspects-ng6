/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';
var ClickOutsideDirective = /** @class */ (function () {
    function ClickOutsideDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.uxClickOutside = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ClickOutsideDirective.prototype.click = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this._elementRef.nativeElement !== event.target && !this._elementRef.nativeElement.contains(event.target)) {
            this.uxClickOutside.emit(event);
        }
    };
    ClickOutsideDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[uxClickOutside]'
                },] },
    ];
    /** @nocollapse */
    ClickOutsideDirective.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    ClickOutsideDirective.propDecorators = {
        "uxClickOutside": [{ type: Output },],
        "click": [{ type: HostListener, args: ['document:click', ['$event'],] },],
    };
    return ClickOutsideDirective;
}());
export { ClickOutsideDirective };
function ClickOutsideDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ClickOutsideDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ClickOutsideDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    ClickOutsideDirective.propDecorators;
    /** @type {?} */
    ClickOutsideDirective.prototype.uxClickOutside;
    /** @type {?} */
    ClickOutsideDirective.prototype._elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2stb3V0c2lkZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlcy9jbGljay1vdXRzaWRlL2NsaWNrLW91dHNpZGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUFTdEYsK0JBQW9CLFdBQXVCO1FBQXZCLGdCQUFXLEdBQVgsV0FBVyxDQUFZOzhCQUZoQixJQUFJLFlBQVksRUFBYztLQUVUOzs7OztJQUdoRCxxQ0FBSzs7OztjQUFDLEtBQWlCO1FBQ25CLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxLQUFLLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1RyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQzs7O2dCQWJSLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsa0JBQWtCO2lCQUMvQjs7OztnQkFKeUMsVUFBVTs7O21DQU8vQyxNQUFNOzBCQUlOLFlBQVksU0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7Z0NBWDlDOztTQUthLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7IFxyXG4gICAgc2VsZWN0b3I6ICdbdXhDbGlja091dHNpZGVdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2xpY2tPdXRzaWRlRGlyZWN0aXZlIHtcclxuXHJcbiAgICBAT3V0cHV0KCkgdXhDbGlja091dHNpZGUgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZikgeyB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCddKVxyXG4gICAgY2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50ICE9PSBldmVudC50YXJnZXQgJiYgIXRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXhDbGlja091dHNpZGUuZW1pdChldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19