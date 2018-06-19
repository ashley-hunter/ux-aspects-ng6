/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
export class MenuNavigationToggleDirective {
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this.menuPosition = 'bottom';
        this.menuOpenChange = new EventEmitter();
        this.keyEnter = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get menuOpen() {
        return this._menuOpen;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set menuOpen(value) {
        this._menuOpen = value;
        this.menuOpenChange.emit(value);
    }
    /**
     * @return {?}
     */
    focus() {
        this._elementRef.nativeElement.focus();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keydownHandler(event) {
        if (this.isKeyMatch(event.key)) {
            // Open the menu
            this.menuOpen = true;
            // Allow the menu to init, then send the event to give it focus
            setTimeout(() => {
                this.keyEnter.emit();
            });
            event.preventDefault();
            event.stopPropagation();
        }
    }
    /**
     * @param {?} key
     * @return {?}
     */
    isKeyMatch(key) {
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
    }
}
MenuNavigationToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[uxMenuNavigationToggle]',
                exportAs: 'uxMenuNavigationToggle'
            },] },
];
/** @nocollapse */
MenuNavigationToggleDirective.ctorParameters = () => [
    { type: ElementRef, },
];
MenuNavigationToggleDirective.propDecorators = {
    "menuOpen": [{ type: Input },],
    "menuPosition": [{ type: Input },],
    "menuOpenChange": [{ type: Output },],
    "keydownHandler": [{ type: HostListener, args: ['keydown', ['$event'],] },],
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1uYXZpZ2F0aW9uLXRvZ2dsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlcy9tZW51LW5hdmlnYXRpb24vbWVudS1uYXZpZ2F0aW9uLXRvZ2dsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU1qRyxNQUFNOzs7O0lBc0JGLFlBQW9CLFdBQXVCO1FBQXZCLGdCQUFXLEdBQVgsV0FBVyxDQUFZOzRCQVRTLFFBQVE7OEJBRzNDLElBQUksWUFBWSxFQUFXO3dCQUVqQyxJQUFJLFlBQVksRUFBUTtLQUlhOzs7O1FBbkI1QyxRQUFRO1FBQ1IsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7Ozs7OztJQUcxQixJQUFJLFFBQVEsQ0FBQyxLQUFjO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ25DOzs7O0lBY0QsS0FBSztRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQzFDOzs7OztJQUdELGNBQWMsQ0FBQyxLQUFvQjtRQUUvQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7O1lBRzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDOztZQUdyQixVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDeEIsQ0FBQyxDQUFDO1lBRUgsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUMzQjs7Ozs7O0lBR0csVUFBVSxDQUFDLEdBQVc7UUFDMUIsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNWLEtBQUssT0FBTyxDQUFDO1lBQ2IsS0FBSyxHQUFHO2dCQUNKLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFFaEIsS0FBSyxTQUFTLENBQUM7WUFDZixLQUFLLElBQUk7Z0JBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEtBQUssS0FBSyxDQUFDO1lBRXZDLEtBQUssV0FBVyxDQUFDO1lBQ2pCLEtBQUssTUFBTTtnQkFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksS0FBSyxRQUFRLENBQUM7WUFFMUMsS0FBSyxXQUFXLENBQUM7WUFDakIsS0FBSyxNQUFNO2dCQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxLQUFLLE1BQU0sQ0FBQztZQUV4QyxLQUFLLFlBQVksQ0FBQztZQUNsQixLQUFLLE9BQU87Z0JBQ1IsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEtBQUssT0FBTyxDQUFDO1NBQzVDO1FBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQzs7OztZQXpFcEIsU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFFBQVEsRUFBRSx3QkFBd0I7YUFDckM7Ozs7WUFMbUIsVUFBVTs7O3lCQVF6QixLQUFLOzZCQVVMLEtBQUs7K0JBR0wsTUFBTTsrQkFhTixZQUFZLFNBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1t1eE1lbnVOYXZpZ2F0aW9uVG9nZ2xlXScsXHJcbiAgICBleHBvcnRBczogJ3V4TWVudU5hdmlnYXRpb25Ub2dnbGUnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZW51TmF2aWdhdGlvblRvZ2dsZURpcmVjdGl2ZSB7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBtZW51T3BlbigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWVudU9wZW47XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IG1lbnVPcGVuKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fbWVudU9wZW4gPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLm1lbnVPcGVuQ2hhbmdlLmVtaXQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBtZW51UG9zaXRpb246ICd0b3AnIHwgJ3JpZ2h0JyB8ICdib3R0b20nIHwgJ2xlZnQnID0gJ2JvdHRvbSc7XHJcblxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBtZW51T3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgICBrZXlFbnRlciA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgICBwcml2YXRlIF9tZW51T3BlbjogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7IH1cclxuXHJcbiAgICBmb2N1cygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcclxuICAgIGtleWRvd25IYW5kbGVyKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzS2V5TWF0Y2goZXZlbnQua2V5KSkge1xyXG5cclxuICAgICAgICAgICAgLy8gT3BlbiB0aGUgbWVudVxyXG4gICAgICAgICAgICB0aGlzLm1lbnVPcGVuID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFsbG93IHRoZSBtZW51IHRvIGluaXQsIHRoZW4gc2VuZCB0aGUgZXZlbnQgdG8gZ2l2ZSBpdCBmb2N1c1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMua2V5RW50ZXIuZW1pdCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzS2V5TWF0Y2goa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICAgICAgICBjYXNlICdFbnRlcic6XHJcbiAgICAgICAgICAgIGNhc2UgJyAnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdBcnJvd1VwJzpcclxuICAgICAgICAgICAgY2FzZSAnVXAnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWVudVBvc2l0aW9uID09PSAndG9wJztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93RG93bic6XHJcbiAgICAgICAgICAgIGNhc2UgJ0Rvd24nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWVudVBvc2l0aW9uID09PSAnYm90dG9tJztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XHJcbiAgICAgICAgICAgIGNhc2UgJ0xlZnQnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWVudVBvc2l0aW9uID09PSAnbGVmdCc7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcclxuICAgICAgICAgICAgY2FzZSAnUmlnaHQnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubWVudVBvc2l0aW9uID09PSAncmlnaHQnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59Il19