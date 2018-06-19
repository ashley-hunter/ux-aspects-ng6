/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
var MenuNavigationToggleDirective = /** @class */ (function () {
    function MenuNavigationToggleDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.menuPosition = 'bottom';
        this.menuOpenChange = new EventEmitter();
        this.keyEnter = new EventEmitter();
    }
    Object.defineProperty(MenuNavigationToggleDirective.prototype, "menuOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this._menuOpen;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._menuOpen = value;
            this.menuOpenChange.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MenuNavigationToggleDirective.prototype.focus = /**
     * @return {?}
     */
    function () {
        this._elementRef.nativeElement.focus();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MenuNavigationToggleDirective.prototype.keydownHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (this.isKeyMatch(event.key)) {
            // Open the menu
            this.menuOpen = true;
            // Allow the menu to init, then send the event to give it focus
            setTimeout(function () {
                _this.keyEnter.emit();
            });
            event.preventDefault();
            event.stopPropagation();
        }
    };
    /**
     * @param {?} key
     * @return {?}
     */
    MenuNavigationToggleDirective.prototype.isKeyMatch = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        switch (key) {
            case 'Enter':
            case ' ':
                return true;
            case 'ArrowUp':
            case 'Up':
                return this.menuPosition === 'top';
            case 'ArrowDown':
            case 'Down':
                return this.menuPosition === 'bottom';
            case 'ArrowLeft':
            case 'Left':
                return this.menuPosition === 'left';
            case 'ArrowRight':
            case 'Right':
                return this.menuPosition === 'right';
        }
        return false;
    };
    MenuNavigationToggleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[uxMenuNavigationToggle]',
                    exportAs: 'uxMenuNavigationToggle'
                },] },
    ];
    /** @nocollapse */
    MenuNavigationToggleDirective.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    MenuNavigationToggleDirective.propDecorators = {
        "menuOpen": [{ type: Input },],
        "menuPosition": [{ type: Input },],
        "menuOpenChange": [{ type: Output },],
        "keydownHandler": [{ type: HostListener, args: ['keydown', ['$event'],] },],
    };
    return MenuNavigationToggleDirective;
}());
export { MenuNavigationToggleDirective };
function MenuNavigationToggleDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MenuNavigationToggleDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MenuNavigationToggleDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MenuNavigationToggleDirective.propDecorators;
    /** @type {?} */
    MenuNavigationToggleDirective.prototype.menuPosition;
    /** @type {?} */
    MenuNavigationToggleDirective.prototype.menuOpenChange;
    /** @type {?} */
    MenuNavigationToggleDirective.prototype.keyEnter;
    /** @type {?} */
    MenuNavigationToggleDirective.prototype._menuOpen;
    /** @type {?} */
    MenuNavigationToggleDirective.prototype._elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1uYXZpZ2F0aW9uLXRvZ2dsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlcy9tZW51LW5hdmlnYXRpb24vbWVudS1uYXZpZ2F0aW9uLXRvZ2dsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUE0QjdGLHVDQUFvQixXQUF1QjtRQUF2QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTs0QkFUUyxRQUFROzhCQUczQyxJQUFJLFlBQVksRUFBVzt3QkFFakMsSUFBSSxZQUFZLEVBQVE7S0FJYTswQkFuQjVDLG1EQUFROzs7OztZQUNSLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDOzs7Ozs7UUFHMUIsVUFBYSxLQUFjO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25DOzs7Ozs7O0lBY0QsNkNBQUs7OztJQUFMO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDMUM7Ozs7O0lBR0Qsc0RBQWM7Ozs7Y0FBQyxLQUFvQjs7UUFFL0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDOztZQUc3QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzs7WUFHckIsVUFBVSxDQUFDO2dCQUNQLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDeEIsQ0FBQyxDQUFDO1lBRUgsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUMzQjs7Ozs7O0lBR0csa0RBQVU7Ozs7Y0FBQyxHQUFXO1FBQzFCLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDVixLQUFLLE9BQU8sQ0FBQztZQUNiLEtBQUssR0FBRztnQkFDSixNQUFNLENBQUMsSUFBSSxDQUFDO1lBRWhCLEtBQUssU0FBUyxDQUFDO1lBQ2YsS0FBSyxJQUFJO2dCQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxLQUFLLEtBQUssQ0FBQztZQUV2QyxLQUFLLFdBQVcsQ0FBQztZQUNqQixLQUFLLE1BQU07Z0JBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEtBQUssUUFBUSxDQUFDO1lBRTFDLEtBQUssV0FBVyxDQUFDO1lBQ2pCLEtBQUssTUFBTTtnQkFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksS0FBSyxNQUFNLENBQUM7WUFFeEMsS0FBSyxZQUFZLENBQUM7WUFDbEIsS0FBSyxPQUFPO2dCQUNSLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxLQUFLLE9BQU8sQ0FBQztTQUM1QztRQUVELE1BQU0sQ0FBQyxLQUFLLENBQUM7OztnQkF6RXBCLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxRQUFRLEVBQUUsd0JBQXdCO2lCQUNyQzs7OztnQkFMbUIsVUFBVTs7OzZCQVF6QixLQUFLO2lDQVVMLEtBQUs7bUNBR0wsTUFBTTttQ0FhTixZQUFZLFNBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDOzt3Q0FsQ3ZDOztTQU1hLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbdXhNZW51TmF2aWdhdGlvblRvZ2dsZV0nLFxyXG4gICAgZXhwb3J0QXM6ICd1eE1lbnVOYXZpZ2F0aW9uVG9nZ2xlJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTWVudU5hdmlnYXRpb25Ub2dnbGVEaXJlY3RpdmUge1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgbWVudU9wZW4oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21lbnVPcGVuO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBtZW51T3Blbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX21lbnVPcGVuID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5tZW51T3BlbkNoYW5nZS5lbWl0KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgbWVudVBvc2l0aW9uOiAndG9wJyB8ICdyaWdodCcgfCAnYm90dG9tJyB8ICdsZWZ0JyA9ICdib3R0b20nO1xyXG5cclxuICAgIEBPdXRwdXQoKVxyXG4gICAgbWVudU9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gICAga2V5RW50ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfbWVudU9wZW46IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZikgeyB9XHJcblxyXG4gICAgZm9jdXMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXHJcbiAgICBrZXlkb3duSGFuZGxlcihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0tleU1hdGNoKGV2ZW50LmtleSkpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIE9wZW4gdGhlIG1lbnVcclxuICAgICAgICAgICAgdGhpcy5tZW51T3BlbiA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAvLyBBbGxvdyB0aGUgbWVudSB0byBpbml0LCB0aGVuIHNlbmQgdGhlIGV2ZW50IHRvIGdpdmUgaXQgZm9jdXNcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleUVudGVyLmVtaXQoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc0tleU1hdGNoKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgICAgICAgY2FzZSAnRW50ZXInOlxyXG4gICAgICAgICAgICBjYXNlICcgJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnQXJyb3dVcCc6XHJcbiAgICAgICAgICAgIGNhc2UgJ1VwJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1lbnVQb3NpdGlvbiA9PT0gJ3RvcCc7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdBcnJvd0Rvd24nOlxyXG4gICAgICAgICAgICBjYXNlICdEb3duJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1lbnVQb3NpdGlvbiA9PT0gJ2JvdHRvbSc7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxyXG4gICAgICAgICAgICBjYXNlICdMZWZ0JzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1lbnVQb3NpdGlvbiA9PT0gJ2xlZnQnO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XHJcbiAgICAgICAgICAgIGNhc2UgJ1JpZ2h0JzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1lbnVQb3NpdGlvbiA9PT0gJ3JpZ2h0JztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufSJdfQ==