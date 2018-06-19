/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable, NgZone, RendererFactory2 } from '@angular/core';
import { BehaviorSubject, fromEvent, Subscription } from 'rxjs';
var ResizeService = /** @class */ (function () {
    function ResizeService(rendererFactory, _ngZone) {
        this._ngZone = _ngZone;
        this._subscription = new Subscription();
        this._renderer = rendererFactory.createRenderer(null, null);
    }
    /**
     * @return {?}
     */
    ResizeService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscription.unsubscribe();
    };
    /**
     * @param {?} nativeElement
     * @return {?}
     */
    ResizeService.prototype.addResizeListener = /**
     * @param {?} nativeElement
     * @return {?}
     */
    function (nativeElement) {
        var _this = this;
        // create a behavior subject subject
        var /** @type {?} */ subject = new BehaviorSubject({ width: nativeElement.offsetWidth, height: nativeElement.offsetHeight });
        // determine the style of the element
        var /** @type {?} */ displayMode = window.getComputedStyle(nativeElement).getPropertyValue('display');
        // create the iframe element
        var /** @type {?} */ iframe = this._renderer.createElement('iframe');
        // style the iframe to be invisible but fill containing element
        this._renderer.setStyle(iframe, 'position', 'absolute');
        this._renderer.setStyle(iframe, 'width', '100%');
        this._renderer.setStyle(iframe, 'height', '100%');
        this._renderer.setStyle(iframe, 'top', '0');
        this._renderer.setStyle(iframe, 'right', '0');
        this._renderer.setStyle(iframe, 'bottom', '0');
        this._renderer.setStyle(iframe, 'left', '0');
        this._renderer.setStyle(iframe, 'z-index', '-1');
        this._renderer.setStyle(iframe, 'opacity', '0');
        this._renderer.setStyle(iframe, 'border', 'none');
        this._renderer.setStyle(iframe, 'margin', '0');
        this._renderer.setStyle(iframe, 'pointer-events', 'none');
        this._renderer.setStyle(iframe, 'overflow', 'hidden');
        // ensure the iframe ignores any tabbing
        this._renderer.setAttribute(iframe, 'tabindex', '-1');
        // statically positioned elements need changed to relative for this method to work
        if (displayMode !== 'relative' && displayMode !== 'absolute' && displayMode !== 'fixed') {
            this._renderer.setStyle(nativeElement, 'position', 'relative');
        }
        // add the iframe to the container element
        this._renderer.appendChild(nativeElement, iframe);
        this.waitUntilReady(iframe, function () {
            var /** @type {?} */ iframeDoc = iframe.contentDocument || /** @type {?} */ (iframe.contentWindow.document);
            var /** @type {?} */ attachListener = function () {
                // watch for any future resizes - run inside ngzone as an iframe event listener is not patched
                // watch for any future resizes - run inside ngzone as an iframe event listener is not patched
                _this._subscription.add(fromEvent(iframe.contentWindow, 'resize').subscribe(function () {
                    return _this._ngZone.run(function () { return subject.next({ width: nativeElement.offsetWidth, height: nativeElement.offsetHeight }); });
                }));
            };
            if (iframeDoc.readyState === 'complete') {
                attachListener();
            }
            else {
                // wait for iframe to load
                iframe.addEventListener('load', function () { return attachListener(); });
            }
        });
        return subject;
    };
    /**
     * @param {?} iframe
     * @param {?} callback
     * @return {?}
     */
    ResizeService.prototype.waitUntilReady = /**
     * @param {?} iframe
     * @param {?} callback
     * @return {?}
     */
    function (iframe, callback) {
        var _this = this;
        if (iframe.contentDocument || iframe.contentWindow) {
            callback.call(this);
        }
        else {
            setTimeout(function () { return _this.waitUntilReady(iframe, callback); });
        }
    };
    ResizeService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ResizeService.ctorParameters = function () { return [
        { type: RendererFactory2, },
        { type: NgZone, },
    ]; };
    return ResizeService;
}());
export { ResizeService };
function ResizeService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ResizeService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ResizeService.ctorParameters;
    /** @type {?} */
    ResizeService.prototype._renderer;
    /** @type {?} */
    ResizeService.prototype._subscription;
    /** @type {?} */
    ResizeService.prototype._ngZone;
}
/**
 * @record
 */
export function ResizeDimensions() { }
function ResizeDimensions_tsickle_Closure_declarations() {
    /** @type {?} */
    ResizeDimensions.prototype.width;
    /** @type {?} */
    ResizeDimensions.prototype.height;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlcy9yZXNpemUvcmVzaXplLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUF3QixnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRixPQUFPLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBUzVELHVCQUFZLGVBQWlDLEVBQVUsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7NkJBRjlDLElBQUksWUFBWSxFQUFFO1FBR3RDLElBQUksQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDL0Q7Ozs7SUFFRCxtQ0FBVzs7O0lBQVg7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3BDOzs7OztJQUVELHlDQUFpQjs7OztJQUFqQixVQUFrQixhQUEwQjtRQUE1QyxpQkEyREM7O1FBeERHLHFCQUFNLE9BQU8sR0FBRyxJQUFJLGVBQWUsQ0FBbUIsRUFBRSxLQUFLLEVBQUUsYUFBYSxDQUFDLFdBQVcsRUFBRSxNQUFNLEVBQUUsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7O1FBR2hJLHFCQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7O1FBR3ZGLHFCQUFNLE1BQU0sR0FBc0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7O1FBR3pFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFD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Q0FBQyxDQUFDO1FBR0gsTUFBTSxDQUFDLE9BQU8sQ0FBQztLQUNsQjs7Ozs7O0lBRU8sc0NBQWM7Ozs7O2NBQUMsTUFBeUIsRUFBRSxRQUFvQjs7UUFDbEUsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLGVBQWUsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNqRCxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZCO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixVQUFVLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxFQUFyQyxDQUFxQyxDQUFDLENBQUM7U0FDM0Q7OztnQkFoRlIsVUFBVTs7OztnQkFKd0MsZ0JBQWdCO2dCQUE5QyxNQUFNOzt3QkFBM0I7O1NBS2EsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSwgT25EZXN0cm95LCBSZW5kZXJlcjIsIFJlbmRlcmVyRmFjdG9yeTIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJlc2l6ZVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG5cclxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjI7XHJcbiAgICBwcml2YXRlIF9zdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLCBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSkge1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFJlc2l6ZUxpc3RlbmVyKG5hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50KTogQmVoYXZpb3JTdWJqZWN0PFJlc2l6ZURpbWVuc2lvbnM+IHtcclxuXHJcbiAgICAgICAgLy8gY3JlYXRlIGEgYmVoYXZpb3Igc3ViamVjdCBzdWJqZWN0XHJcbiAgICAgICAgY29uc3Qgc3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8UmVzaXplRGltZW5zaW9ucz4oeyB3aWR0aDogbmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCwgaGVpZ2h0OiBuYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCB9KTtcclxuXHJcbiAgICAgICAgLy8gZGV0ZXJtaW5lIHRoZSBzdHlsZSBvZiB0aGUgZWxlbWVudFxyXG4gICAgICAgIGNvbnN0IGRpc3BsYXlNb2RlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUobmF0aXZlRWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgnZGlzcGxheScpO1xyXG5cclxuICAgICAgICAvLyBjcmVhdGUgdGhlIGlmcmFtZSBlbGVtZW50XHJcbiAgICAgICAgY29uc3QgaWZyYW1lOiBIVE1MSUZyYW1lRWxlbWVudCA9IHRoaXMuX3JlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xyXG5cclxuICAgICAgICAvLyBzdHlsZSB0aGUgaWZyYW1lIHRvIGJlIGludmlzaWJsZSBidXQgZmlsbCBjb250YWluaW5nIGVsZW1lbnRcclxuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShpZnJhbWUsICdwb3NpdGlvbicsICdhYnNvbHV0ZScpO1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGlmcmFtZSwgJ3dpZHRoJywgJzEwMCUnKTtcclxuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShpZnJhbWUsICdoZWlnaHQnLCAnMTAwJScpO1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGlmcmFtZSwgJ3RvcCcsICcwJyk7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoaWZyYW1lLCAncmlnaHQnLCAnMCcpO1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGlmcmFtZSwgJ2JvdHRvbScsICcwJyk7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoaWZyYW1lLCAnbGVmdCcsICcwJyk7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoaWZyYW1lLCAnei1pbmRleCcsICctMScpO1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGlmcmFtZSwgJ29wYWNpdHknLCAnMCcpO1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGlmcmFtZSwgJ2JvcmRlcicsICdub25lJyk7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoaWZyYW1lLCAnbWFyZ2luJywgJzAnKTtcclxuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShpZnJhbWUsICdwb2ludGVyLWV2ZW50cycsICdub25lJyk7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoaWZyYW1lLCAnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XHJcblxyXG4gICAgICAgIC8vIGVuc3VyZSB0aGUgaWZyYW1lIGlnbm9yZXMgYW55IHRhYmJpbmdcclxuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoaWZyYW1lLCAndGFiaW5kZXgnLCAnLTEnKTtcclxuXHJcbiAgICAgICAgLy8gc3RhdGljYWxseSBwb3NpdGlvbmVkIGVsZW1lbnRzIG5lZWQgY2hhbmdlZCB0byByZWxhdGl2ZSBmb3IgdGhpcyBtZXRob2QgdG8gd29ya1xyXG4gICAgICAgIGlmIChkaXNwbGF5TW9kZSAhPT0gJ3JlbGF0aXZlJyAmJiBkaXNwbGF5TW9kZSAhPT0gJ2Fic29sdXRlJyAmJiBkaXNwbGF5TW9kZSAhPT0gJ2ZpeGVkJykge1xyXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShuYXRpdmVFbGVtZW50LCAncG9zaXRpb24nLCAncmVsYXRpdmUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGFkZCB0aGUgaWZyYW1lIHRvIHRoZSBjb250YWluZXIgZWxlbWVudFxyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFwcGVuZENoaWxkKG5hdGl2ZUVsZW1lbnQsIGlmcmFtZSk7XHJcblxyXG4gICAgICAgIHRoaXMud2FpdFVudGlsUmVhZHkoaWZyYW1lLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlmcmFtZURvYyA9IGlmcmFtZS5jb250ZW50RG9jdW1lbnQgfHwgaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQgYXMgRG9jdW1lbnQ7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhdHRhY2hMaXN0ZW5lciA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB3YXRjaCBmb3IgYW55IGZ1dHVyZSByZXNpemVzIC0gcnVuIGluc2lkZSBuZ3pvbmUgYXMgYW4gaWZyYW1lIGV2ZW50IGxpc3RlbmVyIGlzIG5vdCBwYXRjaGVkXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb24uYWRkKGZyb21FdmVudChpZnJhbWUuY29udGVudFdpbmRvdywgJ3Jlc2l6ZScpLnN1YnNjcmliZSgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX25nWm9uZS5ydW4oKCkgPT4gc3ViamVjdC5uZXh0KHsgd2lkdGg6IG5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGgsIGhlaWdodDogbmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQgfSkpXHJcbiAgICAgICAgICAgICAgICApKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpZnJhbWVEb2MucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xyXG4gICAgICAgICAgICAgICAgYXR0YWNoTGlzdGVuZXIoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB3YWl0IGZvciBpZnJhbWUgdG8gbG9hZFxyXG4gICAgICAgICAgICAgICAgaWZyYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiBhdHRhY2hMaXN0ZW5lcigpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIHN1YmplY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB3YWl0VW50aWxSZWFkeShpZnJhbWU6IEhUTUxJRnJhbWVFbGVtZW50LCBjYWxsYmFjazogKCkgPT4gdm9pZCkge1xyXG4gICAgICAgIGlmIChpZnJhbWUuY29udGVudERvY3VtZW50IHx8IGlmcmFtZS5jb250ZW50V2luZG93KSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLndhaXRVbnRpbFJlYWR5KGlmcmFtZSwgY2FsbGJhY2spKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVzaXplRGltZW5zaW9ucyB7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbn0iXX0=