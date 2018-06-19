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
var /** @type {?} */ DECLARATIONS = [
    DashboardComponent,
    DashboardWidgetComponent,
    DashboardDragHandleDirective
];
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
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
    return DashboardModule;
}());
export { DashboardModule };
function DashboardModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    DashboardModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    DashboardModule.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNuRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXpELHFCQUFNLFlBQVksR0FBVTtJQUN4QixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLDRCQUE0QjtDQUMvQixDQUFDOzs7OztnQkFFRCxRQUFRLFNBQUM7b0JBQ04sT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixVQUFVO3FCQUNiO29CQUNELE9BQU8sRUFBRSxZQUFZO29CQUNyQixZQUFZLEVBQUUsWUFBWTtvQkFDMUIsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7aUJBQ2hDOzswQkF4QkQ7O1NBeUJhLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tICcuL2Rhc2hib2FyZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRXaWRnZXRDb21wb25lbnQgfSBmcm9tICcuL3dpZGdldC9kYXNoYm9hcmQtd2lkZ2V0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERhc2hib2FyZFNlcnZpY2UgfSBmcm9tICcuL2Rhc2hib2FyZC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGFzaGJvYXJkRHJhZ0hhbmRsZURpcmVjdGl2ZSB9IGZyb20gJy4vZHJhZy1oYW5kbGUvZHJhZy1oYW5kbGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgUmVzaXplTW9kdWxlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9yZXNpemUvaW5kZXgnO1xyXG5pbXBvcnQgeyBEcmFnTW9kdWxlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9kcmFnL2luZGV4JztcclxuXHJcbmNvbnN0IERFQ0xBUkFUSU9OUzogYW55W10gPSBbXHJcbiAgICBEYXNoYm9hcmRDb21wb25lbnQsXHJcbiAgICBEYXNoYm9hcmRXaWRnZXRDb21wb25lbnQsXHJcbiAgICBEYXNoYm9hcmREcmFnSGFuZGxlRGlyZWN0aXZlXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvbW1vbk1vZHVsZSxcclxuICAgICAgICBSZXNpemVNb2R1bGUsXHJcbiAgICAgICAgRHJhZ01vZHVsZVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IERFQ0xBUkFUSU9OUyxcclxuICAgIGRlY2xhcmF0aW9uczogREVDTEFSQVRJT05TLFxyXG4gICAgcHJvdmlkZXJzOiBbRGFzaGJvYXJkU2VydmljZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRNb2R1bGUgeyB9XHJcbiJdfQ==