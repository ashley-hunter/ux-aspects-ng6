/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { DashboardService, defaultOptions } from './dashboard.service';
export class DashboardComponent {
    /**
     * @param {?} dashboardService
     */
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
        this.layoutChange = new EventEmitter();
        dashboardService.layout$.subscribe(layout => this.layoutChange.emit(layout));
    }
    /**
     * @param {?} layout
     * @return {?}
     */
    set layout(layout) {
        if (layout) {
            this.dashboardService.layout$.next(layout);
        }
    }
    /**
     * @param {?} options
     * @return {?}
     */
    set options(options) {
        this.dashboardService.options$.next(Object.assign({}, defaultOptions, options));
    }
    /**
     * Set the initial dimensions
     * @return {?}
     */
    ngAfterViewInit() {
        this.dashboardService.setDimensions(this.dashboardElement.nativeElement.offsetWidth, this.dashboardElement.nativeElement.offsetHeight);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onResize(event) {
        this.dashboardService.setDimensions(event.width, event.height);
    }
}
DashboardComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-dashboard',
                template: `<div #dashboard class="dashboard-container" [style.height.px]="dashboardService.height$ | async">
    <div (uxResize)="onResize($event)" [throttle]="16" class="dashboard">
        <ng-content></ng-content>
    </div>
    
    <div class="position-indicator" *ngIf="(dashboardService.placeholder$ | async).visible" 
        [style.left.px]="(dashboardService.placeholder$ | async).x" 
        [style.top.px]="(dashboardService.placeholder$ | async).y" 
        [style.width.px]="(dashboardService.placeholder$ | async).width"
        [style.height.px]="(dashboardService.placeholder$ | async).height"></div>
</div>`,
                providers: [DashboardService],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
DashboardComponent.ctorParameters = () => [
    { type: DashboardService, },
];
DashboardComponent.propDecorators = {
    "layout": [{ type: Input },],
    "options": [{ type: Input },],
    "layoutChange": [{ type: Output },],
    "dashboardElement": [{ type: ViewChild, args: ['dashboard',] },],
};
function DashboardComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    DashboardComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    DashboardComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    DashboardComponent.propDecorators;
    /** @type {?} */
    DashboardComponent.prototype.layoutChange;
    /** @type {?} */
    DashboardComponent.prototype.dashboardElement;
    /** @type {?} */
    DashboardComponent.prototype.dashboardService;
}
/**
 * @record
 */
export function DashboardOptions() { }
function DashboardOptions_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    DashboardOptions.prototype.columns;
    /** @type {?|undefined} */
    DashboardOptions.prototype.padding;
    /** @type {?|undefined} */
    DashboardOptions.prototype.minWidth;
    /** @type {?|undefined} */
    DashboardOptions.prototype.minHeight;
    /** @type {?|undefined} */
    DashboardOptions.prototype.rowHeight;
    /** @type {?|undefined} */
    DashboardOptions.prototype.emptyRow;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXRJLE9BQU8sRUFBdUIsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFrQjVGLE1BQU07Ozs7SUFnQkYsWUFBbUIsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7NEJBSjVCLElBQUksWUFBWSxFQUF5QjtRQUs5RCxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztLQUNoRjs7Ozs7UUFoQlksTUFBTSxDQUFDLE1BQTZCO1FBQzdDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDVCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM5Qzs7Ozs7O1FBR1EsT0FBTyxDQUFDLE9BQXlCO1FBQzFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxtQkFBTSxjQUFjLEVBQUssT0FBTyxFQUFHLENBQUM7Ozs7OztJQWMzRSxlQUFlO1FBQ1gsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQzFJOzs7OztJQUVELFFBQVEsQ0FBQyxLQUF1QjtRQUM1QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ2xFOzs7WUE3Q0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7T0FVUDtnQkFDSCxTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDN0IsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDbEQ7Ozs7WUFqQjZCLGdCQUFnQjs7O3VCQW9CekMsS0FBSzt3QkFNTCxLQUFLOzZCQUlMLE1BQU07aUNBRU4sU0FBUyxTQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSZXNpemVEaW1lbnNpb25zIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9yZXNpemUvcmVzaXplLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRMYXlvdXREYXRhLCBEYXNoYm9hcmRTZXJ2aWNlLCBkZWZhdWx0T3B0aW9ucyB9IGZyb20gJy4vZGFzaGJvYXJkLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3V4LWRhc2hib2FyZCcsXHJcbiAgICB0ZW1wbGF0ZTogYDxkaXYgI2Rhc2hib2FyZCBjbGFzcz1cImRhc2hib2FyZC1jb250YWluZXJcIiBbc3R5bGUuaGVpZ2h0LnB4XT1cImRhc2hib2FyZFNlcnZpY2UuaGVpZ2h0JCB8IGFzeW5jXCI+XHJcbiAgICA8ZGl2ICh1eFJlc2l6ZSk9XCJvblJlc2l6ZSgkZXZlbnQpXCIgW3Rocm90dGxlXT1cIjE2XCIgY2xhc3M9XCJkYXNoYm9hcmRcIj5cclxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgPGRpdiBjbGFzcz1cInBvc2l0aW9uLWluZGljYXRvclwiICpuZ0lmPVwiKGRhc2hib2FyZFNlcnZpY2UucGxhY2Vob2xkZXIkIHwgYXN5bmMpLnZpc2libGVcIiBcclxuICAgICAgICBbc3R5bGUubGVmdC5weF09XCIoZGFzaGJvYXJkU2VydmljZS5wbGFjZWhvbGRlciQgfCBhc3luYykueFwiIFxyXG4gICAgICAgIFtzdHlsZS50b3AucHhdPVwiKGRhc2hib2FyZFNlcnZpY2UucGxhY2Vob2xkZXIkIHwgYXN5bmMpLnlcIiBcclxuICAgICAgICBbc3R5bGUud2lkdGgucHhdPVwiKGRhc2hib2FyZFNlcnZpY2UucGxhY2Vob2xkZXIkIHwgYXN5bmMpLndpZHRoXCJcclxuICAgICAgICBbc3R5bGUuaGVpZ2h0LnB4XT1cIihkYXNoYm9hcmRTZXJ2aWNlLnBsYWNlaG9sZGVyJCB8IGFzeW5jKS5oZWlnaHRcIj48L2Rpdj5cclxuPC9kaXY+YCxcclxuICAgIHByb3ZpZGVyczogW0Rhc2hib2FyZFNlcnZpY2VdLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIERhc2hib2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG5cclxuICAgIEBJbnB1dCgpIHNldCBsYXlvdXQobGF5b3V0OiBEYXNoYm9hcmRMYXlvdXREYXRhW10pIHtcclxuICAgICAgICBpZiAobGF5b3V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGFzaGJvYXJkU2VydmljZS5sYXlvdXQkLm5leHQobGF5b3V0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KCkgc2V0IG9wdGlvbnMob3B0aW9uczogRGFzaGJvYXJkT3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuZGFzaGJvYXJkU2VydmljZS5vcHRpb25zJC5uZXh0KHsgLi4uZGVmYXVsdE9wdGlvbnMsIC4uLm9wdGlvbnMgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgQE91dHB1dCgpIGxheW91dENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RGFzaGJvYXJkTGF5b3V0RGF0YVtdPigpO1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ2Rhc2hib2FyZCcpIGRhc2hib2FyZEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGRhc2hib2FyZFNlcnZpY2U6IERhc2hib2FyZFNlcnZpY2UpIHtcclxuICAgICAgICBkYXNoYm9hcmRTZXJ2aWNlLmxheW91dCQuc3Vic2NyaWJlKGxheW91dCA9PiB0aGlzLmxheW91dENoYW5nZS5lbWl0KGxheW91dCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IHRoZSBpbml0aWFsIGRpbWVuc2lvbnNcclxuICAgICAqL1xyXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGFzaGJvYXJkU2VydmljZS5zZXREaW1lbnNpb25zKHRoaXMuZGFzaGJvYXJkRWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoLCB0aGlzLmRhc2hib2FyZEVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmVzaXplKGV2ZW50OiBSZXNpemVEaW1lbnNpb25zKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kYXNoYm9hcmRTZXJ2aWNlLnNldERpbWVuc2lvbnMoZXZlbnQud2lkdGgsIGV2ZW50LmhlaWdodCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGFzaGJvYXJkT3B0aW9ucyB7XHJcbiAgICBjb2x1bW5zPzogbnVtYmVyO1xyXG4gICAgcGFkZGluZz86IG51bWJlcjtcclxuICAgIG1pbldpZHRoPzogbnVtYmVyO1xyXG4gICAgbWluSGVpZ2h0PzogbnVtYmVyO1xyXG4gICAgcm93SGVpZ2h0PzogbnVtYmVyO1xyXG4gICAgZW1wdHlSb3c/OiBib29sZWFuO1xyXG59Il19