/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardWidgetComponent } from './widget/dashboard-widget.component';
import { DashboardService } from './dashboard.service';
import { DashboardDragHandleDirective } from './drag-handle/drag-handle.directive';
import { ResizeModule } from '../../directives/resize/index';
import { DragModule } from '../../directives/drag/index';
const /** @type {?} */ DECLARATIONS = [
    DashboardComponent,
    DashboardWidgetComponent,
    DashboardDragHandleDirective
];
export class DashboardModule {
}
DashboardModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ResizeModule,
                    DragModule
                ],
                exports: DECLARATIONS,
                declarations: DECLARATIONS,
                providers: [DashboardService],
            },] },
];
function DashboardModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    DashboardModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    DashboardModule.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNuRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXpELHVCQUFNLFlBQVksR0FBVTtJQUN4QixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLDRCQUE0QjtDQUMvQixDQUFDO0FBWUYsTUFBTTs7O1lBVkwsUUFBUSxTQUFDO2dCQUNOLE9BQU8sRUFBRTtvQkFDTCxZQUFZO29CQUNaLFlBQVk7b0JBQ1osVUFBVTtpQkFDYjtnQkFDRCxPQUFPLEVBQUUsWUFBWTtnQkFDckIsWUFBWSxFQUFFLFlBQVk7Z0JBQzFCLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO2FBQ2hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9kYXNoYm9hcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGFzaGJvYXJkV2lkZ2V0Q29tcG9uZW50IH0gZnJvbSAnLi93aWRnZXQvZGFzaGJvYXJkLXdpZGdldC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRTZXJ2aWNlIH0gZnJvbSAnLi9kYXNoYm9hcmQuc2VydmljZSc7XHJcbmltcG9ydCB7IERhc2hib2FyZERyYWdIYW5kbGVEaXJlY3RpdmUgfSBmcm9tICcuL2RyYWctaGFuZGxlL2RyYWctaGFuZGxlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFJlc2l6ZU1vZHVsZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvcmVzaXplL2luZGV4JztcclxuaW1wb3J0IHsgRHJhZ01vZHVsZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvZHJhZy9pbmRleCc7XHJcblxyXG5jb25zdCBERUNMQVJBVElPTlM6IGFueVtdID0gW1xyXG4gICAgRGFzaGJvYXJkQ29tcG9uZW50LFxyXG4gICAgRGFzaGJvYXJkV2lkZ2V0Q29tcG9uZW50LFxyXG4gICAgRGFzaGJvYXJkRHJhZ0hhbmRsZURpcmVjdGl2ZVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgUmVzaXplTW9kdWxlLFxyXG4gICAgICAgIERyYWdNb2R1bGVcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBERUNMQVJBVElPTlMsXHJcbiAgICBkZWNsYXJhdGlvbnM6IERFQ0xBUkFUSU9OUyxcclxuICAgIHByb3ZpZGVyczogW0Rhc2hib2FyZFNlcnZpY2VdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkTW9kdWxlIHsgfVxyXG4iXX0=