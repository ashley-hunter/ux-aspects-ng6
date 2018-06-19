/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, NgZone, ElementRef } from '@angular/core';
import { DashboardWidgetComponent } from '../widget/dashboard-widget.component';
import { DashboardService, ActionDirection } from '../dashboard.service';
import { DragDirective } from '../../../directives/drag/drag.directive';
var DashboardDragHandleDirective = /** @class */ (function (_super) {
    tslib_1.__extends(DashboardDragHandleDirective, _super);
    function DashboardDragHandleDirective(widget, dashboardService, elementRef, ngZone) {
        var _this = _super.call(this, elementRef, ngZone) || this;
        _this.dragstart.subscribe(function (event) { return dashboardService.onDragStart({ widget: widget, direction: ActionDirection.Move, event: event }); });
        _this.drag.subscribe(function (event) { return dashboardService.onDrag({ widget: widget, direction: ActionDirection.Move, event: event }); });
        _this.dragend.subscribe(function () { return dashboardService.onDragEnd(); });
        return _this;
    }
    DashboardDragHandleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[uxDashboardWidgetDragHandle], [ux-dashboard-widget-drag-handle]'
                },] },
    ];
    /** @nocollapse */
    DashboardDragHandleDirective.ctorParameters = function () { return [
        { type: DashboardWidgetComponent, },
        { type: DashboardService, },
        { type: ElementRef, },
        { type: NgZone, },
    ]; };
    return DashboardDragHandleDirective;
}(DragDirective));
export { DashboardDragHandleDirective };
function DashboardDragHandleDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    DashboardDragHandleDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    DashboardDragHandleDirective.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1oYW5kbGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGFzaGJvYXJkL2RyYWctaGFuZGxlL2RyYWctaGFuZGxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNoRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOztJQUt0Qix3REFBYTtJQUUzRCxzQ0FBWSxNQUFnQyxFQUFFLGdCQUFrQyxFQUFFLFVBQXNCLEVBQUUsTUFBYztRQUF4SCxZQUNJLGtCQUFNLFVBQVUsRUFBRSxNQUFNLENBQUMsU0FLNUI7UUFIRyxLQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQWlCLElBQUssT0FBQSxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxlQUFlLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUEvRixDQUErRixDQUFDLENBQUM7UUFDakosS0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUFpQixJQUFLLE9BQUEsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsZUFBZSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBMUYsQ0FBMEYsQ0FBQyxDQUFDO1FBQ3ZJLEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDOztLQUM5RDs7Z0JBWEosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxrRUFBa0U7aUJBQy9FOzs7O2dCQU5RLHdCQUF3QjtnQkFDeEIsZ0JBQWdCO2dCQUhHLFVBQVU7Z0JBQWxCLE1BQU07O3VDQUExQjtFQVNrRCxhQUFhO1NBQWxELDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgTmdab25lLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBEYXNoYm9hcmRXaWRnZXRDb21wb25lbnQgfSBmcm9tICcuLi93aWRnZXQvZGFzaGJvYXJkLXdpZGdldC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRTZXJ2aWNlLCBBY3Rpb25EaXJlY3Rpb24gfSBmcm9tICcuLi9kYXNoYm9hcmQuc2VydmljZSc7XHJcbmltcG9ydCB7IERyYWdEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi8uLi9kaXJlY3RpdmVzL2RyYWcvZHJhZy5kaXJlY3RpdmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1t1eERhc2hib2FyZFdpZGdldERyYWdIYW5kbGVdLCBbdXgtZGFzaGJvYXJkLXdpZGdldC1kcmFnLWhhbmRsZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmREcmFnSGFuZGxlRGlyZWN0aXZlIGV4dGVuZHMgRHJhZ0RpcmVjdGl2ZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3Iod2lkZ2V0OiBEYXNoYm9hcmRXaWRnZXRDb21wb25lbnQsIGRhc2hib2FyZFNlcnZpY2U6IERhc2hib2FyZFNlcnZpY2UsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIG5nWm9uZTogTmdab25lKSB7XHJcbiAgICAgICAgc3VwZXIoZWxlbWVudFJlZiwgbmdab25lKTtcclxuXHJcbiAgICAgICAgdGhpcy5kcmFnc3RhcnQuc3Vic2NyaWJlKChldmVudDogTW91c2VFdmVudCkgPT4gZGFzaGJvYXJkU2VydmljZS5vbkRyYWdTdGFydCh7IHdpZGdldDogd2lkZ2V0LCBkaXJlY3Rpb246IEFjdGlvbkRpcmVjdGlvbi5Nb3ZlLCBldmVudDogZXZlbnQgfSkpO1xyXG4gICAgICAgIHRoaXMuZHJhZy5zdWJzY3JpYmUoKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiBkYXNoYm9hcmRTZXJ2aWNlLm9uRHJhZyh7IHdpZGdldDogd2lkZ2V0LCBkaXJlY3Rpb246IEFjdGlvbkRpcmVjdGlvbi5Nb3ZlLCBldmVudDogZXZlbnQgfSkpO1xyXG4gICAgICAgIHRoaXMuZHJhZ2VuZC5zdWJzY3JpYmUoKCkgPT4gZGFzaGJvYXJkU2VydmljZS5vbkRyYWdFbmQoKSk7XHJcbiAgICB9XHJcbn0iXX0=