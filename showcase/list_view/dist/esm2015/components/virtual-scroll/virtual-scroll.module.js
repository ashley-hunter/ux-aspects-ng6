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
const /** @type {?} */ DECLARATIONS = [
    VirtualScrollComponent,
    VirtualScrollLoadingDirective,
    VirtualScrollLoadButtonDirective,
    VirtualScrollCellDirective
];
export class VirtualScrollModule {
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
function VirtualScrollModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    VirtualScrollModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    VirtualScrollModule.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlydHVhbC1zY3JvbGwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdmlydHVhbC1zY3JvbGwvdmlydHVhbC1zY3JvbGwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDN0QsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDOUYsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDckcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFFeEYsdUJBQU0sWUFBWSxHQUFHO0lBQ2pCLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLDBCQUEwQjtDQUM3QixDQUFDO0FBVUYsTUFBTTs7O1lBUkwsUUFBUSxTQUFDO2dCQUNOLE9BQU8sRUFBRTtvQkFDTCxZQUFZO29CQUNaLFlBQVk7aUJBQ2Y7Z0JBQ0QsT0FBTyxFQUFFLFlBQVk7Z0JBQ3JCLFlBQVksRUFBRSxZQUFZO2FBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IFZpcnR1YWxTY3JvbGxDb21wb25lbnQgfSBmcm9tICcuL3ZpcnR1YWwtc2Nyb2xsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJlc2l6ZU1vZHVsZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvcmVzaXplL2luZGV4JztcclxuaW1wb3J0IHsgVmlydHVhbFNjcm9sbExvYWRpbmdEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvdmlydHVhbC1zY3JvbGwtbG9hZGluZy5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBWaXJ0dWFsU2Nyb2xsTG9hZEJ1dHRvbkRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy92aXJ0dWFsLXNjcm9sbC1sb2FkLWJ1dHRvbi5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBWaXJ0dWFsU2Nyb2xsQ2VsbERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy92aXJ0dWFsLXNjcm9sbC1jZWxsLmRpcmVjdGl2ZSc7XHJcblxyXG5jb25zdCBERUNMQVJBVElPTlMgPSBbXHJcbiAgICBWaXJ0dWFsU2Nyb2xsQ29tcG9uZW50LFxyXG4gICAgVmlydHVhbFNjcm9sbExvYWRpbmdEaXJlY3RpdmUsXHJcbiAgICBWaXJ0dWFsU2Nyb2xsTG9hZEJ1dHRvbkRpcmVjdGl2ZSxcclxuICAgIFZpcnR1YWxTY3JvbGxDZWxsRGlyZWN0aXZlXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvbW1vbk1vZHVsZSxcclxuICAgICAgICBSZXNpemVNb2R1bGVcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBERUNMQVJBVElPTlMsXHJcbiAgICBkZWNsYXJhdGlvbnM6IERFQ0xBUkFUSU9OU1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVmlydHVhbFNjcm9sbE1vZHVsZSB7IH1cclxuIl19