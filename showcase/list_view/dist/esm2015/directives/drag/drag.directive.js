/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, NgZone, Output } from '@angular/core';
import { fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
export class DragDirective {
    /**
     * @param {?} elementRef
     * @param {?} ngZone
     */
    constructor(elementRef, ngZone) {
        this.dragstart = new EventEmitter();
        this.drag = new EventEmitter();
        this.dragend = new EventEmitter();
        const /** @type {?} */ mousedown$ = fromEvent(elementRef.nativeElement, 'mousedown');
        const /** @type {?} */ mousemove$ = fromEvent(document, 'mousemove');
        const /** @type {?} */ mouseup$ = fromEvent(document, 'mouseup');
        this._subscription = mousedown$.subscribe(event => {
            event.preventDefault();
            // emit the drag start event
            ngZone.run(() => this.dragstart.emit(event));
            mousemove$.pipe(takeUntil(mouseup$)).subscribe(moveevent => {
                moveevent.preventDefault();
                // emit the drag start event
                ngZone.run(() => this.drag.emit(moveevent));
            }, null, () => ngZone.run(() => this.dragend.emit()));
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
}
DragDirective.decorators = [
    { type: Directive, args: [{
                selector: '[uxDrag]'
            },] },
];
/** @nocollapse */
DragDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: NgZone, },
];
DragDirective.propDecorators = {
    "dragstart": [{ type: Output },],
    "drag": [{ type: Output },],
    "dragend": [{ type: Output },],
};
function DragDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    DragDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    DragDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    DragDirective.propDecorators;
    /** @type {?} */
    DragDirective.prototype.dragstart;
    /** @type {?} */
    DragDirective.prototype.drag;
    /** @type {?} */
    DragDirective.prototype.dragend;
    /** @type {?} */
    DragDirective.prototype._subscription;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlcy9kcmFnL2RyYWcuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFhLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRixPQUFPLEVBQUUsU0FBUyxFQUFrQixNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLM0MsTUFBTTs7Ozs7SUFRRixZQUFZLFVBQXNCLEVBQUUsTUFBYzt5QkFONUIsSUFBSSxZQUFZLEVBQWM7b0JBQ25DLElBQUksWUFBWSxFQUFjO3VCQUMzQixJQUFJLFlBQVksRUFBUTtRQUt4Qyx1QkFBTSxVQUFVLEdBQUcsU0FBUyxDQUFhLFVBQVUsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDaEYsdUJBQU0sVUFBVSxHQUFHLFNBQVMsQ0FBYSxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDaEUsdUJBQU0sUUFBUSxHQUFHLFNBQVMsQ0FBYSxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFFNUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzlDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQzs7WUFHdkIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBRTdDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFhLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUNuRSxTQUFTLENBQUMsY0FBYyxFQUFFLENBQUM7O2dCQUczQixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7YUFDL0MsRUFBRSxJQUFJLEVBQ1AsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNoRCxDQUFDLENBQUM7S0FDTjs7OztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3BDOzs7WUFsQ0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxVQUFVO2FBQ3ZCOzs7O1lBTm1CLFVBQVU7WUFBZ0IsTUFBTTs7OzBCQVMvQyxNQUFNO3FCQUNOLE1BQU07d0JBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBOZ1pvbmUsIE9uRGVzdHJveSwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGZyb21FdmVudCAsICBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1t1eERyYWddJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRHJhZ0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcblxyXG4gICAgQE91dHB1dCgpIGRyYWdzdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcclxuICAgIEBPdXRwdXQoKSBkcmFnID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xyXG4gICAgQE91dHB1dCgpIGRyYWdlbmQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgbmdab25lOiBOZ1pvbmUpIHtcclxuICAgICAgICBjb25zdCBtb3VzZWRvd24kID0gZnJvbUV2ZW50PE1vdXNlRXZlbnQ+KGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21vdXNlZG93bicpO1xyXG4gICAgICAgIGNvbnN0IG1vdXNlbW92ZSQgPSBmcm9tRXZlbnQ8TW91c2VFdmVudD4oZG9jdW1lbnQsICdtb3VzZW1vdmUnKTtcclxuICAgICAgICBjb25zdCBtb3VzZXVwJCA9IGZyb21FdmVudDxNb3VzZUV2ZW50Pihkb2N1bWVudCwgJ21vdXNldXAnKTtcclxuXHJcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uID0gbW91c2Vkb3duJC5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gZW1pdCB0aGUgZHJhZyBzdGFydCBldmVudFxyXG4gICAgICAgICAgICBuZ1pvbmUucnVuKCgpID0+IHRoaXMuZHJhZ3N0YXJ0LmVtaXQoZXZlbnQpKTtcclxuXHJcbiAgICAgICAgICAgIG1vdXNlbW92ZSQucGlwZSh0YWtlVW50aWw8TW91c2VFdmVudD4obW91c2V1cCQpKS5zdWJzY3JpYmUobW92ZWV2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIG1vdmVldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGVtaXQgdGhlIGRyYWcgc3RhcnQgZXZlbnRcclxuICAgICAgICAgICAgICAgIG5nWm9uZS5ydW4oKCkgPT4gdGhpcy5kcmFnLmVtaXQobW92ZWV2ZW50KSk7XHJcbiAgICAgICAgICAgIH0sIG51bGwsXHJcbiAgICAgICAgICAgICgpID0+IG5nWm9uZS5ydW4oKCkgPT4gdGhpcy5kcmFnZW5kLmVtaXQoKSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG59Il19