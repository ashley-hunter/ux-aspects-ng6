/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, NgZone, ElementRef } from '@angular/core';
import { DashboardWidgetComponent } from '../widget/dashboard-widget.component';
import { DashboardService, ActionDirection } from '../dashboard.service';
import { DragDirective } from '../../../directives/drag/drag.directive';
export class DashboardDragHandleDirective extends DragDirective {
    /**
     * @param {?} widget
     * @param {?} dashboardService
     * @param {?} elementRef
     * @param {?} ngZone
     */
    constructor(widget, dashboardService, elementRef, ngZone) {
        super(elementRef, ngZone);
        this.dragstart.subscribe((event) => dashboardService.onDragStart({ widget: widget, direction: ActionDirection.Move, event: event }));
        this.drag.subscribe((event) => dashboardService.onDrag({ widget: widget, direction: ActionDirection.Move, event: event }));
        this.dragend.subscribe(() => dashboardService.onDragEnd());
    }
}
DashboardDragHandleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[uxDashboardWidgetDragHandle], [ux-dashboard-widget-drag-handle]'
            },] },
];
/** @nocollapse */
DashboardDragHandleDirective.ctorParameters = () => [
    { type: DashboardWidgetComponent, },
    { type: DashboardService, },
    { type: ElementRef, },
    { type: NgZone, },
];
function DashboardDragHandleDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    DashboardDragHandleDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    DashboardDragHandleDirective.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1oYW5kbGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGFzaGJvYXJkL2RyYWctaGFuZGxlL2RyYWctaGFuZGxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFLeEUsTUFBTSxtQ0FBb0MsU0FBUSxhQUFhOzs7Ozs7O0lBRTNELFlBQVksTUFBZ0MsRUFBRSxnQkFBa0MsRUFBRSxVQUFzQixFQUFFLE1BQWM7UUFDcEgsS0FBSyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUUxQixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQWlCLEVBQUUsRUFBRSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGVBQWUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqSixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQWlCLEVBQUUsRUFBRSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGVBQWUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN2SSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0tBQzlEOzs7WUFYSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGtFQUFrRTthQUMvRTs7OztZQU5RLHdCQUF3QjtZQUN4QixnQkFBZ0I7WUFIRyxVQUFVO1lBQWxCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE5nWm9uZSwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRGFzaGJvYXJkV2lkZ2V0Q29tcG9uZW50IH0gZnJvbSAnLi4vd2lkZ2V0L2Rhc2hib2FyZC13aWRnZXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGFzaGJvYXJkU2VydmljZSwgQWN0aW9uRGlyZWN0aW9uIH0gZnJvbSAnLi4vZGFzaGJvYXJkLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEcmFnRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vLi4vZGlyZWN0aXZlcy9kcmFnL2RyYWcuZGlyZWN0aXZlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbdXhEYXNoYm9hcmRXaWRnZXREcmFnSGFuZGxlXSwgW3V4LWRhc2hib2FyZC13aWRnZXQtZHJhZy1oYW5kbGVdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkRHJhZ0hhbmRsZURpcmVjdGl2ZSBleHRlbmRzIERyYWdEaXJlY3RpdmUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHdpZGdldDogRGFzaGJvYXJkV2lkZ2V0Q29tcG9uZW50LCBkYXNoYm9hcmRTZXJ2aWNlOiBEYXNoYm9hcmRTZXJ2aWNlLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBuZ1pvbmU6IE5nWm9uZSkge1xyXG4gICAgICAgIHN1cGVyKGVsZW1lbnRSZWYsIG5nWm9uZSk7XHJcblxyXG4gICAgICAgIHRoaXMuZHJhZ3N0YXJ0LnN1YnNjcmliZSgoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IGRhc2hib2FyZFNlcnZpY2Uub25EcmFnU3RhcnQoeyB3aWRnZXQ6IHdpZGdldCwgZGlyZWN0aW9uOiBBY3Rpb25EaXJlY3Rpb24uTW92ZSwgZXZlbnQ6IGV2ZW50IH0pKTtcclxuICAgICAgICB0aGlzLmRyYWcuc3Vic2NyaWJlKChldmVudDogTW91c2VFdmVudCkgPT4gZGFzaGJvYXJkU2VydmljZS5vbkRyYWcoeyB3aWRnZXQ6IHdpZGdldCwgZGlyZWN0aW9uOiBBY3Rpb25EaXJlY3Rpb24uTW92ZSwgZXZlbnQ6IGV2ZW50IH0pKTtcclxuICAgICAgICB0aGlzLmRyYWdlbmQuc3Vic2NyaWJlKCgpID0+IGRhc2hib2FyZFNlcnZpY2Uub25EcmFnRW5kKCkpO1xyXG4gICAgfVxyXG59Il19