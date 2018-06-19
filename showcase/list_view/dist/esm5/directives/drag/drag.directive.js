/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, NgZone, Output } from '@angular/core';
import { fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
var DragDirective = /** @class */ (function () {
    function DragDirective(elementRef, ngZone) {
        var _this = this;
        this.dragstart = new EventEmitter();
        this.drag = new EventEmitter();
        this.dragend = new EventEmitter();
        var /** @type {?} */ mousedown$ = fromEvent(elementRef.nativeElement, 'mousedown');
        var /** @type {?} */ mousemove$ = fromEvent(document, 'mousemove');
        var /** @type {?} */ mouseup$ = fromEvent(document, 'mouseup');
        this._subscription = mousedown$.subscribe(function (event) {
            event.preventDefault();
            // emit the drag start event
            ngZone.run(function () { return _this.dragstart.emit(event); });
            mousemove$.pipe(takeUntil(mouseup$)).subscribe(function (moveevent) {
                moveevent.preventDefault();
                // emit the drag start event
                ngZone.run(function () { return _this.drag.emit(moveevent); });
            }, null, function () { return ngZone.run(function () { return _this.dragend.emit(); }); });
        });
    }
    /**
     * @return {?}
     */
    DragDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscription.unsubscribe();
    };
    DragDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[uxDrag]'
                },] },
    ];
    /** @nocollapse */
    DragDirective.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: NgZone, },
    ]; };
    DragDirective.propDecorators = {
        "dragstart": [{ type: Output },],
        "drag": [{ type: Output },],
        "dragend": [{ type: Output },],
    };
    return DragDirective;
}());
export { DragDirective };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlcy9kcmFnL2RyYWcuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFhLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRixPQUFPLEVBQUUsU0FBUyxFQUFrQixNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0lBYXZDLHVCQUFZLFVBQXNCLEVBQUUsTUFBYztRQUFsRCxpQkFtQkM7eUJBekJxQixJQUFJLFlBQVksRUFBYztvQkFDbkMsSUFBSSxZQUFZLEVBQWM7dUJBQzNCLElBQUksWUFBWSxFQUFRO1FBS3hDLHFCQUFNLFVBQVUsR0FBRyxTQUFTLENBQWEsVUFBVSxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNoRixxQkFBTSxVQUFVLEdBQUcsU0FBUyxDQUFhLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNoRSxxQkFBTSxRQUFRLEdBQUcsU0FBUyxDQUFhLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUU1RCxJQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsVUFBQSxLQUFLO1lBQzNDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQzs7WUFHdkIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQTFCLENBQTBCLENBQUMsQ0FBQztZQUU3QyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBYSxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLFNBQVM7Z0JBQ2hFLFNBQVMsQ0FBQyxjQUFjLEVBQUUsQ0FBQzs7Z0JBRzNCLE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUF6QixDQUF5QixDQUFDLENBQUM7YUFDL0MsRUFBRSxJQUFJLEVBQ1AsY0FBTSxPQUFBLE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQW5CLENBQW1CLENBQUMsRUFBckMsQ0FBcUMsQ0FBQyxDQUFDO1NBQ2hELENBQUMsQ0FBQztLQUNOOzs7O0lBRUQsbUNBQVc7OztJQUFYO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUNwQzs7Z0JBbENKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsVUFBVTtpQkFDdkI7Ozs7Z0JBTm1CLFVBQVU7Z0JBQWdCLE1BQU07Ozs4QkFTL0MsTUFBTTt5QkFDTixNQUFNOzRCQUNOLE1BQU07O3dCQVhYOztTQU9hLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgTmdab25lLCBPbkRlc3Ryb3ksIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQgLCAgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbdXhEcmFnXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIERyYWdEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG5cclxuICAgIEBPdXRwdXQoKSBkcmFnc3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XHJcbiAgICBAT3V0cHV0KCkgZHJhZyA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcclxuICAgIEBPdXRwdXQoKSBkcmFnZW5kID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICAgIHByaXZhdGUgX3N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIG5nWm9uZTogTmdab25lKSB7XHJcbiAgICAgICAgY29uc3QgbW91c2Vkb3duJCA9IGZyb21FdmVudDxNb3VzZUV2ZW50PihlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtb3VzZWRvd24nKTtcclxuICAgICAgICBjb25zdCBtb3VzZW1vdmUkID0gZnJvbUV2ZW50PE1vdXNlRXZlbnQ+KGRvY3VtZW50LCAnbW91c2Vtb3ZlJyk7XHJcbiAgICAgICAgY29uc3QgbW91c2V1cCQgPSBmcm9tRXZlbnQ8TW91c2VFdmVudD4oZG9jdW1lbnQsICdtb3VzZXVwJyk7XHJcblxyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IG1vdXNlZG93biQuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGVtaXQgdGhlIGRyYWcgc3RhcnQgZXZlbnRcclxuICAgICAgICAgICAgbmdab25lLnJ1bigoKSA9PiB0aGlzLmRyYWdzdGFydC5lbWl0KGV2ZW50KSk7XHJcblxyXG4gICAgICAgICAgICBtb3VzZW1vdmUkLnBpcGUodGFrZVVudGlsPE1vdXNlRXZlbnQ+KG1vdXNldXAkKSkuc3Vic2NyaWJlKG1vdmVldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBtb3ZlZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBlbWl0IHRoZSBkcmFnIHN0YXJ0IGV2ZW50XHJcbiAgICAgICAgICAgICAgICBuZ1pvbmUucnVuKCgpID0+IHRoaXMuZHJhZy5lbWl0KG1vdmVldmVudCkpO1xyXG4gICAgICAgICAgICB9LCBudWxsLFxyXG4gICAgICAgICAgICAoKSA9PiBuZ1pvbmUucnVuKCgpID0+IHRoaXMuZHJhZ2VuZC5lbWl0KCkpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxufSJdfQ==