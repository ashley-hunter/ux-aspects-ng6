/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable, NgZone, RendererFactory2 } from '@angular/core';
import { BehaviorSubject, fromEvent, Subscription } from 'rxjs';
export class ResizeService {
    /**
     * @param {?} rendererFactory
     * @param {?} _ngZone
     */
    constructor(rendererFactory, _ngZone) {
        this._ngZone = _ngZone;
        this._subscription = new Subscription();
        this._renderer = rendererFactory.createRenderer(null, null);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
    /**
     * @param {?} nativeElement
     * @return {?}
     */
    addResizeListener(nativeElement) {
        // create a behavior subject subject
        const /** @type {?} */ subject = new BehaviorSubject({ width: nativeElement.offsetWidth, height: nativeElement.offsetHeight });
        // determine the style of the element
        const /** @type {?} */ displayMode = window.getComputedStyle(nativeElement).getPropertyValue('display');
        // create the iframe element
        const /** @type {?} */ iframe = this._renderer.createElement('iframe');
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
        this.waitUntilReady(iframe, () => {
            const /** @type {?} */ iframeDoc = iframe.contentDocument || /** @type {?} */ (iframe.contentWindow.document);
            const /** @type {?} */ attachListener = () => {
                // watch for any future resizes - run inside ngzone as an iframe event listener is not patched
                this._subscription.add(fromEvent(iframe.contentWindow, 'resize').subscribe(() => this._ngZone.run(() => subject.next({ width: nativeElement.offsetWidth, height: nativeElement.offsetHeight }))));
            };
            if (iframeDoc.readyState === 'complete') {
                attachListener();
            }
            else {
                // wait for iframe to load
                iframe.addEventListener('load', () => attachListener());
            }
        });
        return subject;
    }
    /**
     * @param {?} iframe
     * @param {?} callback
     * @return {?}
     */
    waitUntilReady(iframe, callback) {
        if (iframe.contentDocument || iframe.contentWindow) {
            callback.call(this);
        }
        else {
            setTimeout(() => this.waitUntilReady(iframe, callback));
        }
    }
}
ResizeService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ResizeService.ctorParameters = () => [
    { type: RendererFactory2, },
    { type: NgZone, },
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlcy9yZXNpemUvcmVzaXplLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUF3QixnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRixPQUFPLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFJaEUsTUFBTTs7Ozs7SUFLRixZQUFZLGVBQWlDLEVBQVUsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7NkJBRjlDLElBQUksWUFBWSxFQUFFO1FBR3RDLElBQUksQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDL0Q7Ozs7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUNwQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxhQUEwQjs7UUFHeEMsdUJBQU0sT0FBTyxHQUFHLElBQUksZUFBZSxDQUFtQixFQUFFLEtBQUssRUFBRSxhQUFhLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQzs7UUFHaEksdUJBQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQzs7UUFHdkYsdUJBQU0sTUFBTSxHQUFzQixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7UUFHekUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDOztRQUd0RCxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDOztRQUd0RCxFQUFFLENBQUMsQ0FBQyxXQUFXLEtBQUssVUFBVSxJQUFJLFdBQVcsS0FBSyxVQUFVLElBQUksV0FBVyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDdEYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztTQUNsRTs7UUFHRCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFbEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO1lBQzdCLHVCQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsZUFBZSxzQkFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQW9CLENBQUEsQ0FBQztZQUV0Rix1QkFBTSxjQUFjLEdBQUcsR0FBRyxFQUFFOztnQkFHeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUM1RSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLGFBQWEsQ0FBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQ2pILENBQUMsQ0FBQzthQUNOLENBQUM7WUFFRixFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLGNBQWMsRUFBRSxDQUFDO2FBQ3BCO1lBQUMsSUFBSSxDQUFDLENBQUM7O2dCQUdKLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQzthQUMzRDtTQUNKLENBQUMsQ0FBQztRQUdILE1BQU0sQ0FBQyxPQUFPLENBQUM7S0FDbEI7Ozs7OztJQUVPLGNBQWMsQ0FBQyxNQUF5QixFQUFFLFFBQW9CO1FBQ2xFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxlQUFlLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDakQsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QjtRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDM0Q7Ozs7WUFoRlIsVUFBVTs7OztZQUp3QyxnQkFBZ0I7WUFBOUMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSwgT25EZXN0cm95LCBSZW5kZXJlcjIsIFJlbmRlcmVyRmFjdG9yeTIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJlc2l6ZVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG5cclxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjI7XHJcbiAgICBwcml2YXRlIF9zdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLCBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSkge1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFJlc2l6ZUxpc3RlbmVyKG5hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50KTogQmVoYXZpb3JTdWJqZWN0PFJlc2l6ZURpbWVuc2lvbnM+IHtcclxuXHJcbiAgICAgICAgLy8gY3JlYXRlIGEgYmVoYXZpb3Igc3ViamVjdCBzdWJqZWN0XHJcbiAgICAgICAgY29uc3Qgc3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8UmVzaXplRGltZW5zaW9ucz4oeyB3aWR0aDogbmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCwgaGVpZ2h0OiBuYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCB9KTtcclxuXHJcbiAgICAgICAgLy8gZGV0ZXJtaW5lIHRoZSBzdHlsZSBvZiB0aGUgZWxlbWVudFxyXG4gICAgICAgIGNvbnN0IGRpc3BsYXlNb2RlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUobmF0aXZlRWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgnZGlzcGxheScpO1xyXG5cclxuICAgICAgICAvLyBjcmVhdGUgdGhlIGlmcmFtZSBlbGVtZW50XHJcbiAgICAgICAgY29uc3QgaWZyYW1lOiBIVE1MSUZyYW1lRWxlbWVudCA9IHRoaXMuX3JlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xyXG5cclxuICAgICAgICAvLyBzdHlsZSB0aGUgaWZyYW1lIHRvIGJlIGludmlzaWJsZSBidXQgZmlsbCBjb250YWluaW5nIGVsZW1lbnRcclxuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShpZnJhbWUsICdwb3NpdGlvbicsICdhYnNvbHV0ZScpO1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGlmcmFtZSwgJ3dpZHRoJywgJzEwMCUnKTtcclxuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShpZnJhbWUsICdoZWlnaHQnLCAnMTAwJScpO1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGlmcmFtZSwgJ3RvcCcsICcwJyk7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoaWZyYW1lLCAncmlnaHQnLCAnMCcpO1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGlmcmFtZSwgJ2JvdHRvbScsICcwJyk7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoaWZyYW1lLCAnbGVmdCcsICcwJyk7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoaWZyYW1lLCAnei1pbmRleCcsICctMScpO1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGlmcmFtZSwgJ29wYWNpdHknLCAnMCcpO1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGlmcmFtZSwgJ2JvcmRlcicsICdub25lJyk7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoaWZyYW1lLCAnbWFyZ2luJywgJzAnKTtcclxuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShpZnJhbWUsICdwb2ludGVyLWV2ZW50cycsICdub25lJyk7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoaWZyYW1lLCAnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XHJcblxyXG4gICAgICAgIC8vIGVuc3VyZSB0aGUgaWZyYW1lIGlnbm9yZXMgYW55IHRhYmJpbmdcclxuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoaWZyYW1lLCAndGFiaW5kZXgnLCAnLTEnKTtcclxuXHJcbiAgICAgICAgLy8gc3RhdGljYWxseSBwb3NpdGlvbmVkIGVsZW1lbnRzIG5lZWQgY2hhbmdlZCB0byByZWxhdGl2ZSBmb3IgdGhpcyBtZXRob2QgdG8gd29ya1xyXG4gICAgICAgIGlmIChkaXNwbGF5TW9kZSAhPT0gJ3JlbGF0aXZlJyAmJiBkaXNwbGF5TW9kZSAhPT0gJ2Fic29sdXRlJyAmJiBkaXNwbGF5TW9kZSAhPT0gJ2ZpeGVkJykge1xyXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShuYXRpdmVFbGVtZW50LCAncG9zaXRpb24nLCAncmVsYXRpdmUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGFkZCB0aGUgaWZyYW1lIHRvIHRoZSBjb250YWluZXIgZWxlbWVudFxyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFwcGVuZENoaWxkKG5hdGl2ZUVsZW1lbnQsIGlmcmFtZSk7XHJcblxyXG4gICAgICAgIHRoaXMud2FpdFVudGlsUmVhZHkoaWZyYW1lLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlmcmFtZURvYyA9IGlmcmFtZS5jb250ZW50RG9jdW1lbnQgfHwgaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQgYXMgRG9jdW1lbnQ7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhdHRhY2hMaXN0ZW5lciA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB3YXRjaCBmb3IgYW55IGZ1dHVyZSByZXNpemVzIC0gcnVuIGluc2lkZSBuZ3pvbmUgYXMgYW4gaWZyYW1lIGV2ZW50IGxpc3RlbmVyIGlzIG5vdCBwYXRjaGVkXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb24uYWRkKGZyb21FdmVudChpZnJhbWUuY29udGVudFdpbmRvdywgJ3Jlc2l6ZScpLnN1YnNjcmliZSgoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX25nWm9uZS5ydW4oKCkgPT4gc3ViamVjdC5uZXh0KHsgd2lkdGg6IG5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGgsIGhlaWdodDogbmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQgfSkpXHJcbiAgICAgICAgICAgICAgICApKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpZnJhbWVEb2MucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xyXG4gICAgICAgICAgICAgICAgYXR0YWNoTGlzdGVuZXIoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB3YWl0IGZvciBpZnJhbWUgdG8gbG9hZFxyXG4gICAgICAgICAgICAgICAgaWZyYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiBhdHRhY2hMaXN0ZW5lcigpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIHN1YmplY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB3YWl0VW50aWxSZWFkeShpZnJhbWU6IEhUTUxJRnJhbWVFbGVtZW50LCBjYWxsYmFjazogKCkgPT4gdm9pZCkge1xyXG4gICAgICAgIGlmIChpZnJhbWUuY29udGVudERvY3VtZW50IHx8IGlmcmFtZS5jb250ZW50V2luZG93KSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLndhaXRVbnRpbFJlYWR5KGlmcmFtZSwgY2FsbGJhY2spKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVzaXplRGltZW5zaW9ucyB7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbn0iXX0=