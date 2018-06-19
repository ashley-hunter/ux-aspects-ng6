/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
var AutoGrowDirective = /** @class */ (function () {
    function AutoGrowDirective(_elementRef, _renderer) {
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
    AutoGrowDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.update();
    };
    /**
     * @return {?}
     */
    AutoGrowDirective.prototype.update = /**
     * @return {?}
     */
    function () {
        // perform sizing
        this._renderer.setStyle(this._elementRef.nativeElement, 'overflowY', 'hidden');
        this._renderer.setStyle(this._elementRef.nativeElement, 'height', 'auto');
        // get the new total height and element height
        var scrollHeight = this._elementRef.nativeElement.scrollHeight;
        var maxHeight = getComputedStyle(this._elementRef.nativeElement).maxHeight;
        // determine what the maximum allowed height is
        var /** @type {?} */ maximum = !isNaN(parseFloat(maxHeight)) ? parseFloat(maxHeight) : Infinity;
        // if there is a max height specifed we want to show the scrollbars
        if (maximum < scrollHeight) {
            this._renderer.setStyle(this._elementRef.nativeElement, 'overflowY', 'auto');
            this._renderer.setStyle(this._elementRef.nativeElement, 'height', maximum + 'px');
        }
        else {
            this._renderer.setStyle(this._elementRef.nativeElement, 'height', scrollHeight + 'px');
        }
    };
    AutoGrowDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[uxAutoGrow]'
                },] },
    ];
    /** @nocollapse */
    AutoGrowDirective.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer2, },
    ]; };
    AutoGrowDirective.propDecorators = {
        "update": [{ type: HostListener, args: ['input',] },],
    };
    return AutoGrowDirective;
}());
export { AutoGrowDirective };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by1ncm93LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL2F1dG8tZ3Jvdy9hdXRvLWdyb3cuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUFPNUYsMkJBQW9CLFdBQXVCLEVBQVUsU0FBb0I7UUFBckQsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFXOztRQUV2RSxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ25FLE1BQU0sSUFBSSxLQUFLLENBQUMsK0RBQStELENBQUMsQ0FBQztTQUNsRjtLQUNGOzs7O0lBRUQsMkNBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQ2Y7Ozs7SUFHRCxrQ0FBTTs7Ozs7UUFHSixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDOztRQUdsRSxJQUFBLDBEQUFZLENBQW9DO1FBQ2hELElBQUEsc0VBQVMsQ0FBc0Q7O1FBR3ZFLHFCQUFNLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7O1FBR2pGLEVBQUUsQ0FBQyxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUM3RSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDO1NBQ25GO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsWUFBWSxHQUFHLElBQUksQ0FBQyxDQUFDO1NBQ3hGOzs7Z0JBcENKLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztpQkFDekI7Ozs7Z0JBSmtDLFVBQVU7Z0JBQWdCLFNBQVM7OzsyQkFrQm5FLFlBQVksU0FBQyxPQUFPOzs0QkFsQnZCOztTQUthLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW3V4QXV0b0dyb3ddJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0b0dyb3dEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG4gICAgLy8gZW5zdXJlIHRoaXMgaXMgYSB0ZXh0YXJlYSBvciBlbHNlIHRocm93IGVycm9yXHJcbiAgICBpZiAoX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICd0ZXh0YXJlYScpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCd1eEF1dG9Hcm93IGRpcmVjdGl2ZSBjYW4gb25seSBiZSB1c2VkIG9uIDx0ZXh0YXJlYT4gZWxlbWVudHMuJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnKVxyXG4gIHVwZGF0ZSgpOiB2b2lkIHtcclxuXHJcbiAgICAvLyBwZXJmb3JtIHNpemluZ1xyXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnb3ZlcmZsb3dZJywgJ2hpZGRlbicpO1xyXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgJ2F1dG8nKTtcclxuXHJcbiAgICAvLyBnZXQgdGhlIG5ldyB0b3RhbCBoZWlnaHQgYW5kIGVsZW1lbnQgaGVpZ2h0XHJcbiAgICBjb25zdCB7IHNjcm9sbEhlaWdodCB9ID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgY29uc3QgeyBtYXhIZWlnaHQgfSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcclxuXHJcbiAgICAvLyBkZXRlcm1pbmUgd2hhdCB0aGUgbWF4aW11bSBhbGxvd2VkIGhlaWdodCBpc1xyXG4gICAgY29uc3QgbWF4aW11bSA9ICFpc05hTihwYXJzZUZsb2F0KG1heEhlaWdodCkpID8gcGFyc2VGbG9hdChtYXhIZWlnaHQpIDogSW5maW5pdHk7XHJcblxyXG4gICAgLy8gaWYgdGhlcmUgaXMgYSBtYXggaGVpZ2h0IHNwZWNpZmVkIHdlIHdhbnQgdG8gc2hvdyB0aGUgc2Nyb2xsYmFyc1xyXG4gICAgaWYgKG1heGltdW0gPCBzY3JvbGxIZWlnaHQpIHtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnb3ZlcmZsb3dZJywgJ2F1dG8nKTtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgbWF4aW11bSArICdweCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0Jywgc2Nyb2xsSGVpZ2h0ICsgJ3B4Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSJdfQ==