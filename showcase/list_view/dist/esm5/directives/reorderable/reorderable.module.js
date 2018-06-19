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
var ReorderableModule = /** @class */ (function () {
    function ReorderableModule() {
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
    return ReorderableModule;
}());
export { ReorderableModule };
function ReorderableModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ReorderableModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ReorderableModule.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVvcmRlcmFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvcmVvcmRlcmFibGUvcmVvcmRlcmFibGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7Z0JBRTFELFFBQVEsU0FBQztvQkFDTixPQUFPLEVBQUU7d0JBQ0wsWUFBWTtxQkFDZjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1Ysb0JBQW9CO3dCQUNwQiwwQkFBMEI7d0JBQzFCLHlCQUF5QjtxQkFDNUI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLG9CQUFvQjt3QkFDcEIsMEJBQTBCO3dCQUMxQix5QkFBeUI7cUJBQzVCO29CQUNELFNBQVMsRUFBRTt3QkFDUCxrQkFBa0I7cUJBQ3JCO2lCQUNKOzs0QkF4QkQ7O1NBeUJhLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJlb3JkZXJhYmxlRGlyZWN0aXZlIH0gZnJvbSAnLi9yZW9yZGVyYWJsZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBSZW9yZGVyYWJsZUhhbmRsZURpcmVjdGl2ZSB9IGZyb20gJy4vcmVvcmRlcmFibGUtaGFuZGxlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFJlb3JkZXJhYmxlTW9kZWxEaXJlY3RpdmUgfSBmcm9tICcuL3Jlb3JkZXJhYmxlLW1vZGVsLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFJlb3JkZXJhYmxlU2VydmljZSB9IGZyb20gJy4vcmVvcmRlcmFibGUuc2VydmljZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvbW1vbk1vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIFJlb3JkZXJhYmxlRGlyZWN0aXZlLFxyXG4gICAgICAgIFJlb3JkZXJhYmxlSGFuZGxlRGlyZWN0aXZlLFxyXG4gICAgICAgIFJlb3JkZXJhYmxlTW9kZWxEaXJlY3RpdmVcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgUmVvcmRlcmFibGVEaXJlY3RpdmUsXHJcbiAgICAgICAgUmVvcmRlcmFibGVIYW5kbGVEaXJlY3RpdmUsXHJcbiAgICAgICAgUmVvcmRlcmFibGVNb2RlbERpcmVjdGl2ZVxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIFJlb3JkZXJhYmxlU2VydmljZVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVvcmRlcmFibGVNb2R1bGUgeyB9XHJcbiJdfQ==