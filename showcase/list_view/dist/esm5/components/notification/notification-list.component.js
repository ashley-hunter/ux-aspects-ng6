/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, HostBinding, Input, ChangeDetectionStrategy } from '@angular/core';
import { NotificationService } from './notification.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { map } from 'rxjs/operators';
var NotificationListComponent = /** @class */ (function () {
    function NotificationListComponent(_notificationService) {
        this._notificationService = _notificationService;
        this.position = 'top-right';
        this.notifications$ = this._notificationService.notifications$.pipe(map(function (notificationRefs) { return notificationRefs.filter(function (notificationRef) { return notificationRef.visible; }); }));
    }
    Object.defineProperty(NotificationListComponent.prototype, "direction", {
        set: /**
         * @param {?} direction
         * @return {?}
         */
        function (direction) {
            this._notificationService.direction = direction;
        },
        enumerable: true,
        configurable: true
    });
    NotificationListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-notification-list',
                    template: "<div class=\"notification\" *ngFor=\"let notificationRef of notifications$ | async; let idx = index\"\n    [style.top.px]=\"(notificationRef.height + notificationRef.spacing) * idx\"\n    [style.height.px]=\"notificationRef.height\"\n    [style.background-color]=\"notificationRef.backgroundColor\"\n    [@notificationState]>\n    <ng-container *ngTemplateOutlet=\"notificationRef.templateRef; context: { $implicit: notificationRef, data: notificationRef.data }\"></ng-container>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    animations: [
                        trigger('notificationState', [
                            state('in', style({ transform: 'translateY(0)', opacity: 0.9 })),
                            transition(':enter', [
                                style({ transform: 'translateY(-50px)', opacity: 0 }),
                                animate(500)
                            ]),
                            transition(':leave', [
                                animate(500, style({ transform: 'translateY(50px)', opacity: 0 }))
                            ])
                        ])
                    ]
                },] },
    ];
    /** @nocollapse */
    NotificationListComponent.ctorParameters = function () { return [
        { type: NotificationService, },
    ]; };
    NotificationListComponent.propDecorators = {
        "direction": [{ type: Input },],
        "position": [{ type: Input }, { type: HostBinding, args: ['class',] },],
    };
    return NotificationListComponent;
}());
export { NotificationListComponent };
function NotificationListComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    NotificationListComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    NotificationListComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    NotificationListComponent.propDecorators;
    /** @type {?} */
    NotificationListComponent.prototype.position;
    /** @type {?} */
    NotificationListComponent.prototype.notifications$;
    /** @type {?} */
    NotificationListComponent.prototype._notificationService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxtQkFBbUIsRUFBOEMsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7SUF3Q2pDLG1DQUFvQixvQkFBeUM7UUFBekMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjt3QkFOTSxXQUFXOzhCQUU5QixJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLElBQUksQ0FDekYsR0FBRyxDQUFDLFVBQUMsZ0JBQW1DLElBQUssT0FBQSxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsVUFBQSxlQUFlLElBQUksT0FBQSxlQUFlLENBQUMsT0FBTyxFQUF2QixDQUF1QixDQUFDLEVBQW5FLENBQW1FLENBQ25ILENBQUM7S0FJRDswQkFaRyxnREFBUzs7Ozs7a0JBQUMsU0FBb0M7WUFDOUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7Ozs7OztnQkE1QnZELFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxRQUFRLEVBQUUsMmVBT2I7b0JBQ0csZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFVBQVUsRUFBRTt3QkFDUixPQUFPLENBQUMsbUJBQW1CLEVBQUU7NEJBQ3pCLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQzs0QkFDaEUsVUFBVSxDQUFDLFFBQVEsRUFBRTtnQ0FDakIsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLG1CQUFtQixFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQztnQ0FDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQzs2QkFDZixDQUFDOzRCQUNGLFVBQVUsQ0FBQyxRQUFRLEVBQUU7Z0NBQ2pCLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDOzZCQUNyRSxDQUFDO3lCQUNMLENBQUM7cUJBQ0w7aUJBQ0o7Ozs7Z0JBNUJRLG1CQUFtQjs7OzhCQStCdkIsS0FBSzs2QkFLTCxLQUFLLFlBQUksV0FBVyxTQUFDLE9BQU87O29DQXJDakM7O1NBOEJhLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlLCBOb3RpZmljYXRpb25SZWYsIE5vdGlmaWNhdGlvbkxpc3REaXJlY3Rpb24gfSBmcm9tICcuL25vdGlmaWNhdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCBhbmltYXRlLCB0cmFuc2l0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3V4LW5vdGlmaWNhdGlvbi1saXN0JyxcclxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm5vdGlmaWNhdGlvblwiICpuZ0Zvcj1cImxldCBub3RpZmljYXRpb25SZWYgb2Ygbm90aWZpY2F0aW9ucyQgfCBhc3luYzsgbGV0IGlkeCA9IGluZGV4XCJcclxuICAgIFtzdHlsZS50b3AucHhdPVwiKG5vdGlmaWNhdGlvblJlZi5oZWlnaHQgKyBub3RpZmljYXRpb25SZWYuc3BhY2luZykgKiBpZHhcIlxyXG4gICAgW3N0eWxlLmhlaWdodC5weF09XCJub3RpZmljYXRpb25SZWYuaGVpZ2h0XCJcclxuICAgIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cIm5vdGlmaWNhdGlvblJlZi5iYWNrZ3JvdW5kQ29sb3JcIlxyXG4gICAgW0Bub3RpZmljYXRpb25TdGF0ZV0+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwibm90aWZpY2F0aW9uUmVmLnRlbXBsYXRlUmVmOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogbm90aWZpY2F0aW9uUmVmLCBkYXRhOiBub3RpZmljYXRpb25SZWYuZGF0YSB9XCI+PC9uZy1jb250YWluZXI+XHJcbjwvZGl2PlxyXG5gLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgICBhbmltYXRpb25zOiBbXHJcbiAgICAgICAgdHJpZ2dlcignbm90aWZpY2F0aW9uU3RhdGUnLCBbXHJcbiAgICAgICAgICAgIHN0YXRlKCdpbicsIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKScsIG9wYWNpdHk6IDAuOSB9KSksXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJzplbnRlcicsIFtcclxuICAgICAgICAgICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTBweCknLCBvcGFjaXR5OiAwIH0pLFxyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSg1MDApXHJcbiAgICAgICAgICAgIF0pLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCc6bGVhdmUnLCBbXHJcbiAgICAgICAgICAgICAgICBhbmltYXRlKDUwMCwgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDUwcHgpJywgb3BhY2l0eTogMCB9KSlcclxuICAgICAgICAgICAgXSlcclxuICAgICAgICBdKVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uTGlzdENvbXBvbmVudCB7XHJcbiAgICBcclxuICAgIEBJbnB1dCgpIFxyXG4gICAgc2V0IGRpcmVjdGlvbihkaXJlY3Rpb246IE5vdGlmaWNhdGlvbkxpc3REaXJlY3Rpb24pIHtcclxuICAgICAgICB0aGlzLl9ub3RpZmljYXRpb25TZXJ2aWNlLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2NsYXNzJykgcG9zaXRpb246IE5vdGlmaWNhdGlvbkxpc3RQb3N0aW9uID0gJ3RvcC1yaWdodCc7XHJcblxyXG4gICAgbm90aWZpY2F0aW9ucyQ6IE9ic2VydmFibGU8Tm90aWZpY2F0aW9uUmVmW10+ID0gdGhpcy5fbm90aWZpY2F0aW9uU2VydmljZS5ub3RpZmljYXRpb25zJC5waXBlKFxyXG4gICAgICAgIG1hcCgobm90aWZpY2F0aW9uUmVmczogTm90aWZpY2F0aW9uUmVmW10pID0+IG5vdGlmaWNhdGlvblJlZnMuZmlsdGVyKG5vdGlmaWNhdGlvblJlZiA9PiBub3RpZmljYXRpb25SZWYudmlzaWJsZSksXHJcbiAgICApKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9ub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25TZXJ2aWNlKSB7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBOb3RpZmljYXRpb25MaXN0UG9zdGlvbiA9ICd0b3AtbGVmdCcgfCAndG9wLXJpZ2h0JyB8ICdib3R0b20tbGVmdCcgfCAnYm90dG9tLXJpZ2h0JzsiXX0=