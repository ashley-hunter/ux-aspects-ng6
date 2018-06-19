/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VirtualScrollComponent } from './virtual-scroll.component';
import { ResizeModule } from '../../directives/resize/index';
import { VirtualScrollLoadingDirective } from './directives/virtual-scroll-loading.directive';
import { VirtualScrollLoadButtonDirective } from './directives/virtual-scroll-load-button.directive';
import { VirtualScrollCellDirective } from './directives/virtual-scroll-cell.directive';
var /** @type {?} */ DECLARATIONS = [
    VirtualScrollComponent,
    VirtualScrollLoadingDirective,
    VirtualScrollLoadButtonDirective,
    VirtualScrollCellDirective
];
var VirtualScrollModule = /** @class */ (function () {
    function VirtualScrollModule() {
    }
    VirtualScrollModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        ResizeModule
                    ],
                    exports: DECLARATIONS,
                    declarations: DECLARATIONS
                },] },
    ];
    return VirtualScrollModule;
}());
export { VirtualScrollModule };
function VirtualScrollModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    VirtualScrollModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    VirtualScrollModule.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlydHVhbC1zY3JvbGwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdmlydHVhbC1zY3JvbGwvdmlydHVhbC1zY3JvbGwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDN0QsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDOUYsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDckcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFFeEYscUJBQU0sWUFBWSxHQUFHO0lBQ2pCLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLDBCQUEwQjtDQUM3QixDQUFDOzs7OztnQkFFRCxRQUFRLFNBQUM7b0JBQ04sT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osWUFBWTtxQkFDZjtvQkFDRCxPQUFPLEVBQUUsWUFBWTtvQkFDckIsWUFBWSxFQUFFLFlBQVk7aUJBQzdCOzs4QkF2QkQ7O1NBd0JhLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBWaXJ0dWFsU2Nyb2xsQ29tcG9uZW50IH0gZnJvbSAnLi92aXJ0dWFsLXNjcm9sbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSZXNpemVNb2R1bGUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3Jlc2l6ZS9pbmRleCc7XHJcbmltcG9ydCB7IFZpcnR1YWxTY3JvbGxMb2FkaW5nRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3ZpcnR1YWwtc2Nyb2xsLWxvYWRpbmcuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgVmlydHVhbFNjcm9sbExvYWRCdXR0b25EaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvdmlydHVhbC1zY3JvbGwtbG9hZC1idXR0b24uZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgVmlydHVhbFNjcm9sbENlbGxEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvdmlydHVhbC1zY3JvbGwtY2VsbC5kaXJlY3RpdmUnO1xyXG5cclxuY29uc3QgREVDTEFSQVRJT05TID0gW1xyXG4gICAgVmlydHVhbFNjcm9sbENvbXBvbmVudCxcclxuICAgIFZpcnR1YWxTY3JvbGxMb2FkaW5nRGlyZWN0aXZlLFxyXG4gICAgVmlydHVhbFNjcm9sbExvYWRCdXR0b25EaXJlY3RpdmUsXHJcbiAgICBWaXJ0dWFsU2Nyb2xsQ2VsbERpcmVjdGl2ZVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgUmVzaXplTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogREVDTEFSQVRJT05TLFxyXG4gICAgZGVjbGFyYXRpb25zOiBERUNMQVJBVElPTlNcclxufSlcclxuZXhwb3J0IGNsYXNzIFZpcnR1YWxTY3JvbGxNb2R1bGUgeyB9XHJcbiJdfQ==