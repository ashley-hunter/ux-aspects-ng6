/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, Input, NgZone, Output } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { ResizeService } from './resize.service';
var ResizeDirective = /** @class */ (function () {
    function ResizeDirective(_elementRef, _resizeService, _ngZone) {
        this._elementRef = _elementRef;
        this._resizeService = _resizeService;
        this._ngZone = _ngZone;
        this.throttle = 0;
        this.uxResize = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ResizeDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._subscription = this._resizeService.addResizeListener(this._elementRef.nativeElement)
            .pipe(debounceTime(this.throttle))
            .subscribe(function (event) { return _this._ngZone.run(function () { return _this.uxResize.emit(event); }); });
    };
    /**
     * @return {?}
     */
    ResizeDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscription.unsubscribe();
    };
    ResizeDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[uxResize]',
                    providers: [ResizeService]
                },] },
    ];
    /** @nocollapse */
    ResizeDirective.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: ResizeService, },
        { type: NgZone, },
    ]; };
    ResizeDirective.propDecorators = {
        "throttle": [{ type: Input },],
        "uxResize": [{ type: Output },],
    };
    return ResizeDirective;
}());
export { ResizeDirective };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL3Jlc2l6ZS9yZXNpemUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBcUIsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU5QyxPQUFPLEVBQW9CLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztJQWEvRCx5QkFBb0IsV0FBdUIsRUFBVSxjQUE2QixFQUFVLE9BQWU7UUFBdkYsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVE7d0JBTC9FLENBQUM7d0JBQ3dCLElBQUksWUFBWSxFQUFvQjtLQUl1Qjs7OztJQUVoSCxrQ0FBUTs7O0lBQVI7UUFBQSxpQkFJQztRQUhHLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQzthQUNyRixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNqQyxTQUFTLENBQUMsVUFBQyxLQUF1QixJQUFLLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUF6QixDQUF5QixDQUFDLEVBQWpELENBQWlELENBQUMsQ0FBQztLQUNsRzs7OztJQUVELHFDQUFXOzs7SUFBWDtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDcEM7O2dCQXJCSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFNBQVMsRUFBRSxDQUFDLGFBQWEsQ0FBQztpQkFDN0I7Ozs7Z0JBUm1CLFVBQVU7Z0JBR0gsYUFBYTtnQkFIYSxNQUFNOzs7NkJBV3RELEtBQUs7NkJBQ0wsTUFBTTs7MEJBWlg7O1NBU2EsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgTmdab25lLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFJlc2l6ZURpbWVuc2lvbnMsIFJlc2l6ZVNlcnZpY2UgfSBmcm9tICcuL3Jlc2l6ZS5zZXJ2aWNlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbdXhSZXNpemVdJyxcclxuICAgIHByb3ZpZGVyczogW1Jlc2l6ZVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXNpemVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gICAgQElucHV0KCkgdGhyb3R0bGU6IG51bWJlciA9IDA7XHJcbiAgICBAT3V0cHV0KCkgdXhSZXNpemU6IEV2ZW50RW1pdHRlcjxSZXNpemVEaW1lbnNpb25zPiA9IG5ldyBFdmVudEVtaXR0ZXI8UmVzaXplRGltZW5zaW9ucz4oKTtcclxuXHJcbiAgICBwcml2YXRlIF9zdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9yZXNpemVTZXJ2aWNlOiBSZXNpemVTZXJ2aWNlLCBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uID0gdGhpcy5fcmVzaXplU2VydmljZS5hZGRSZXNpemVMaXN0ZW5lcih0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpXHJcbiAgICAgICAgICAgIC5waXBlKGRlYm91bmNlVGltZSh0aGlzLnRocm90dGxlKSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZXZlbnQ6IFJlc2l6ZURpbWVuc2lvbnMpID0+IHRoaXMuX25nWm9uZS5ydW4oKCkgPT4gdGhpcy51eFJlc2l6ZS5lbWl0KGV2ZW50KSkpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG59Il19