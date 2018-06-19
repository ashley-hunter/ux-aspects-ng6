/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
export class AutoGrowDirective {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        // ensure this is a textarea or else throw error
        if (_elementRef.nativeElement.tagName.toLowerCase() !== 'textarea') {
            throw new Error('uxAutoGrow directive can only be used on <textarea> elements.');
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.update();
    }
    /**
     * @return {?}
     */
    update() {
        // perform sizing
        this._renderer.setStyle(this._elementRef.nativeElement, 'overflowY', 'hidden');
        this._renderer.setStyle(this._elementRef.nativeElement, 'height', 'auto');
        // get the new total height and element height
        const { scrollHeight } = this._elementRef.nativeElement;
        const { maxHeight } = getComputedStyle(this._elementRef.nativeElement);
        // determine what the maximum allowed height is
        const /** @type {?} */ maximum = !isNaN(parseFloat(maxHeight)) ? parseFloat(maxHeight) : Infinity;
        // if there is a max height specifed we want to show the scrollbars
        if (maximum < scrollHeight) {
            this._renderer.setStyle(this._elementRef.nativeElement, 'overflowY', 'auto');
            this._renderer.setStyle(this._elementRef.nativeElement, 'height', maximum + 'px');
        }
        else {
            this._renderer.setStyle(this._elementRef.nativeElement, 'height', scrollHeight + 'px');
        }
    }
}
AutoGrowDirective.decorators = [
    { type: Directive, args: [{
                selector: '[uxAutoGrow]'
            },] },
];
/** @nocollapse */
AutoGrowDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
AutoGrowDirective.propDecorators = {
    "update": [{ type: HostListener, args: ['input',] },],
};
function AutoGrowDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AutoGrowDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AutoGrowDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    AutoGrowDirective.propDecorators;
    /** @type {?} */
    AutoGrowDirective.prototype._elementRef;
    /** @type {?} */
    AutoGrowDirective.prototype._renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by1ncm93LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL2F1dG8tZ3Jvdy9hdXRvLWdyb3cuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUs5RixNQUFNOzs7OztJQUVKLFlBQW9CLFdBQXVCLEVBQVUsU0FBb0I7UUFBckQsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFXOztRQUV2RSxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ25FLE1BQU0sSUFBSSxLQUFLLENBQUMsK0RBQStELENBQUMsQ0FBQztTQUNsRjtLQUNGOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztLQUNmOzs7O0lBR0QsTUFBTTs7UUFHSixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDOztRQUcxRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7UUFDeEQsTUFBTSxFQUFFLFNBQVMsRUFBRSxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7O1FBR3ZFLHVCQUFNLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7O1FBR2pGLEVBQUUsQ0FBQyxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUM3RSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDO1NBQ25GO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsWUFBWSxHQUFHLElBQUksQ0FBQyxDQUFDO1NBQ3hGOzs7O1lBcENKLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYzthQUN6Qjs7OztZQUprQyxVQUFVO1lBQWdCLFNBQVM7Ozt1QkFrQm5FLFlBQVksU0FBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbdXhBdXRvR3Jvd10nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdXRvR3Jvd0RpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgICAvLyBlbnN1cmUgdGhpcyBpcyBhIHRleHRhcmVhIG9yIGVsc2UgdGhyb3cgZXJyb3JcclxuICAgIGlmIChfZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gJ3RleHRhcmVhJykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3V4QXV0b0dyb3cgZGlyZWN0aXZlIGNhbiBvbmx5IGJlIHVzZWQgb24gPHRleHRhcmVhPiBlbGVtZW50cy4nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcpXHJcbiAgdXBkYXRlKCk6IHZvaWQge1xyXG5cclxuICAgIC8vIHBlcmZvcm0gc2l6aW5nXHJcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdvdmVyZmxvd1knLCAnaGlkZGVuJyk7XHJcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCAnYXV0bycpO1xyXG5cclxuICAgIC8vIGdldCB0aGUgbmV3IHRvdGFsIGhlaWdodCBhbmQgZWxlbWVudCBoZWlnaHRcclxuICAgIGNvbnN0IHsgc2Nyb2xsSGVpZ2h0IH0gPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBjb25zdCB7IG1heEhlaWdodCB9ID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG5cclxuICAgIC8vIGRldGVybWluZSB3aGF0IHRoZSBtYXhpbXVtIGFsbG93ZWQgaGVpZ2h0IGlzXHJcbiAgICBjb25zdCBtYXhpbXVtID0gIWlzTmFOKHBhcnNlRmxvYXQobWF4SGVpZ2h0KSkgPyBwYXJzZUZsb2F0KG1heEhlaWdodCkgOiBJbmZpbml0eTtcclxuXHJcbiAgICAvLyBpZiB0aGVyZSBpcyBhIG1heCBoZWlnaHQgc3BlY2lmZWQgd2Ugd2FudCB0byBzaG93IHRoZSBzY3JvbGxiYXJzXHJcbiAgICBpZiAobWF4aW11bSA8IHNjcm9sbEhlaWdodCkge1xyXG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdvdmVyZmxvd1knLCAnYXV0bycpO1xyXG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCBtYXhpbXVtICsgJ3B4Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCBzY3JvbGxIZWlnaHQgKyAncHgnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59Il19