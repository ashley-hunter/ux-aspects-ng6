/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReorderableDirective } from './reorderable.directive';
import { ReorderableHandleDirective } from './reorderable-handle.directive';
import { ReorderableModelDirective } from './reorderable-model.directive';
import { ReorderableService } from './reorderable.service';
export class ReorderableModule {
}
ReorderableModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    ReorderableDirective,
                    ReorderableHandleDirective,
                    ReorderableModelDirective
                ],
                exports: [
                    ReorderableDirective,
                    ReorderableHandleDirective,
                    ReorderableModelDirective
                ],
                providers: [
                    ReorderableService
                ]
            },] },
];
function ReorderableModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ReorderableModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ReorderableModule.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVvcmRlcmFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvcmVvcmRlcmFibGUvcmVvcmRlcmFibGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQW9CM0QsTUFBTTs7O1lBbEJMLFFBQVEsU0FBQztnQkFDTixPQUFPLEVBQUU7b0JBQ0wsWUFBWTtpQkFDZjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1Ysb0JBQW9CO29CQUNwQiwwQkFBMEI7b0JBQzFCLHlCQUF5QjtpQkFDNUI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLG9CQUFvQjtvQkFDcEIsMEJBQTBCO29CQUMxQix5QkFBeUI7aUJBQzVCO2dCQUNELFNBQVMsRUFBRTtvQkFDUCxrQkFBa0I7aUJBQ3JCO2FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBSZW9yZGVyYWJsZURpcmVjdGl2ZSB9IGZyb20gJy4vcmVvcmRlcmFibGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgUmVvcmRlcmFibGVIYW5kbGVEaXJlY3RpdmUgfSBmcm9tICcuL3Jlb3JkZXJhYmxlLWhhbmRsZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBSZW9yZGVyYWJsZU1vZGVsRGlyZWN0aXZlIH0gZnJvbSAnLi9yZW9yZGVyYWJsZS1tb2RlbC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBSZW9yZGVyYWJsZVNlcnZpY2UgfSBmcm9tICcuL3Jlb3JkZXJhYmxlLnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDb21tb25Nb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBSZW9yZGVyYWJsZURpcmVjdGl2ZSxcclxuICAgICAgICBSZW9yZGVyYWJsZUhhbmRsZURpcmVjdGl2ZSxcclxuICAgICAgICBSZW9yZGVyYWJsZU1vZGVsRGlyZWN0aXZlXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIFJlb3JkZXJhYmxlRGlyZWN0aXZlLFxyXG4gICAgICAgIFJlb3JkZXJhYmxlSGFuZGxlRGlyZWN0aXZlLFxyXG4gICAgICAgIFJlb3JkZXJhYmxlTW9kZWxEaXJlY3RpdmVcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBSZW9yZGVyYWJsZVNlcnZpY2VcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJlb3JkZXJhYmxlTW9kdWxlIHsgfVxyXG4iXX0=