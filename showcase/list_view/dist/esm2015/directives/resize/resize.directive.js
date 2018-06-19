/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, Input, NgZone, Output } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { ResizeService } from './resize.service';
export class ResizeDirective {
    /**
     * @param {?} _elementRef
     * @param {?} _resizeService
     * @param {?} _ngZone
     */
    constructor(_elementRef, _resizeService, _ngZone) {
        this._elementRef = _elementRef;
        this._resizeService = _resizeService;
        this._ngZone = _ngZone;
        this.throttle = 0;
        this.uxResize = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._subscription = this._resizeService.addResizeListener(this._elementRef.nativeElement)
            .pipe(debounceTime(this.throttle))
            .subscribe((event) => this._ngZone.run(() => this.uxResize.emit(event)));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
}
ResizeDirective.decorators = [
    { type: Directive, args: [{
                selector: '[uxResize]',
                providers: [ResizeService]
            },] },
];
/** @nocollapse */
ResizeDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: ResizeService, },
    { type: NgZone, },
];
ResizeDirective.propDecorators = {
    "throttle": [{ type: Input },],
    "uxResize": [{ type: Output },],
};
function ResizeDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ResizeDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ResizeDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    ResizeDirective.propDecorators;
    /** @type {?} */
    ResizeDirective.prototype.throttle;
    /** @type {?} */
    ResizeDirective.prototype.uxResize;
    /** @type {?} */
    ResizeDirective.prototype._subscription;
    /** @type {?} */
    ResizeDirective.prototype._elementRef;
    /** @type {?} */
    ResizeDirective.prototype._resizeService;
    /** @type {?} */
    ResizeDirective.prototype._ngZone;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL3Jlc2l6ZS9yZXNpemUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBcUIsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU5QyxPQUFPLEVBQW9CLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBTW5FLE1BQU07Ozs7OztJQU9GLFlBQW9CLFdBQXVCLEVBQVUsY0FBNkIsRUFBVSxPQUFlO1FBQXZGLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFRO3dCQUwvRSxDQUFDO3dCQUN3QixJQUFJLFlBQVksRUFBb0I7S0FJdUI7Ozs7SUFFaEgsUUFBUTtRQUNKLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQzthQUNyRixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNqQyxTQUFTLENBQUMsQ0FBQyxLQUF1QixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbEc7Ozs7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUNwQzs7O1lBckJKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDO2FBQzdCOzs7O1lBUm1CLFVBQVU7WUFHSCxhQUFhO1lBSGEsTUFBTTs7O3lCQVd0RCxLQUFLO3lCQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE5nWm9uZSwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBSZXNpemVEaW1lbnNpb25zLCBSZXNpemVTZXJ2aWNlIH0gZnJvbSAnLi9yZXNpemUuc2VydmljZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW3V4UmVzaXplXScsXHJcbiAgICBwcm92aWRlcnM6IFtSZXNpemVTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVzaXplRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAgIEBJbnB1dCgpIHRocm90dGxlOiBudW1iZXIgPSAwO1xyXG4gICAgQE91dHB1dCgpIHV4UmVzaXplOiBFdmVudEVtaXR0ZXI8UmVzaXplRGltZW5zaW9ucz4gPSBuZXcgRXZlbnRFbWl0dGVyPFJlc2l6ZURpbWVuc2lvbnM+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBfcmVzaXplU2VydmljZTogUmVzaXplU2VydmljZSwgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMuX3Jlc2l6ZVNlcnZpY2UuYWRkUmVzaXplTGlzdGVuZXIodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KVxyXG4gICAgICAgICAgICAucGlwZShkZWJvdW5jZVRpbWUodGhpcy50aHJvdHRsZSkpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGV2ZW50OiBSZXNpemVEaW1lbnNpb25zKSA9PiB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHRoaXMudXhSZXNpemUuZW1pdChldmVudCkpKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxufSJdfQ==