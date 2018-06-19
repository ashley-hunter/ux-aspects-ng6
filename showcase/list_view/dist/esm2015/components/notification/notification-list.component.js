/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, HostBinding, Input, ChangeDetectionStrategy } from '@angular/core';
import { NotificationService } from './notification.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { map } from 'rxjs/operators';
export class NotificationListComponent {
    /**
     * @param {?} _notificationService
     */
    constructor(_notificationService) {
        this._notificationService = _notificationService;
        this.position = 'top-right';
        this.notifications$ = this._notificationService.notifications$.pipe(map((notificationRefs) => notificationRefs.filter(notificationRef => notificationRef.visible)));
    }
    /**
     * @param {?} direction
     * @return {?}
     */
    set direction(direction) {
        this._notificationService.direction = direction;
    }
}
NotificationListComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-notification-list',
                template: `<div class="notification" *ngFor="let notificationRef of notifications$ | async; let idx = index"
    [style.top.px]="(notificationRef.height + notificationRef.spacing) * idx"
    [style.height.px]="notificationRef.height"
    [style.background-color]="notificationRef.backgroundColor"
    [@notificationState]>
    <ng-container *ngTemplateOutlet="notificationRef.templateRef; context: { $implicit: notificationRef, data: notificationRef.data }"></ng-container>
</div>
`,
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
NotificationListComponent.ctorParameters = () => [
    { type: NotificationService, },
];
NotificationListComponent.propDecorators = {
    "direction": [{ type: Input },],
    "position": [{ type: Input }, { type: HostBinding, args: ['class',] },],
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxtQkFBbUIsRUFBOEMsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQTJCckMsTUFBTTs7OztJQWFGLFlBQW9CLG9CQUF5QztRQUF6Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXFCO3dCQU5NLFdBQVc7OEJBRTlCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUN6RixHQUFHLENBQUMsQ0FBQyxnQkFBbUMsRUFBRSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUNuSCxDQUFDO0tBSUQ7Ozs7O1FBWkcsU0FBUyxDQUFDLFNBQW9DO1FBQzlDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDOzs7O1lBNUJ2RCxTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsUUFBUSxFQUFFOzs7Ozs7O0NBT2I7Z0JBQ0csZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFVBQVUsRUFBRTtvQkFDUixPQUFPLENBQUMsbUJBQW1CLEVBQUU7d0JBQ3pCLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQzt3QkFDaEUsVUFBVSxDQUFDLFFBQVEsRUFBRTs0QkFDakIsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLG1CQUFtQixFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQzs0QkFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQzt5QkFDZixDQUFDO3dCQUNGLFVBQVUsQ0FBQyxRQUFRLEVBQUU7NEJBQ2pCLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3lCQUNyRSxDQUFDO3FCQUNMLENBQUM7aUJBQ0w7YUFDSjs7OztZQTVCUSxtQkFBbUI7OzswQkErQnZCLEtBQUs7eUJBS0wsS0FBSyxZQUFJLFdBQVcsU0FBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UsIE5vdGlmaWNhdGlvblJlZiwgTm90aWZpY2F0aW9uTGlzdERpcmVjdGlvbiB9IGZyb20gJy4vbm90aWZpY2F0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIGFuaW1hdGUsIHRyYW5zaXRpb24gfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndXgtbm90aWZpY2F0aW9uLWxpc3QnLFxyXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibm90aWZpY2F0aW9uXCIgKm5nRm9yPVwibGV0IG5vdGlmaWNhdGlvblJlZiBvZiBub3RpZmljYXRpb25zJCB8IGFzeW5jOyBsZXQgaWR4ID0gaW5kZXhcIlxyXG4gICAgW3N0eWxlLnRvcC5weF09XCIobm90aWZpY2F0aW9uUmVmLmhlaWdodCArIG5vdGlmaWNhdGlvblJlZi5zcGFjaW5nKSAqIGlkeFwiXHJcbiAgICBbc3R5bGUuaGVpZ2h0LnB4XT1cIm5vdGlmaWNhdGlvblJlZi5oZWlnaHRcIlxyXG4gICAgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwibm90aWZpY2F0aW9uUmVmLmJhY2tncm91bmRDb2xvclwiXHJcbiAgICBbQG5vdGlmaWNhdGlvblN0YXRlXT5cclxuICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJub3RpZmljYXRpb25SZWYudGVtcGxhdGVSZWY7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBub3RpZmljYXRpb25SZWYsIGRhdGE6IG5vdGlmaWNhdGlvblJlZi5kYXRhIH1cIj48L25nLWNvbnRhaW5lcj5cclxuPC9kaXY+XHJcbmAsXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAgIGFuaW1hdGlvbnM6IFtcclxuICAgICAgICB0cmlnZ2VyKCdub3RpZmljYXRpb25TdGF0ZScsIFtcclxuICAgICAgICAgICAgc3RhdGUoJ2luJywgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJywgb3BhY2l0eTogMC45IH0pKSxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbignOmVudGVyJywgW1xyXG4gICAgICAgICAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MHB4KScsIG9wYWNpdHk6IDAgfSksXHJcbiAgICAgICAgICAgICAgICBhbmltYXRlKDUwMClcclxuICAgICAgICAgICAgXSksXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJzpsZWF2ZScsIFtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGUoNTAwLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoNTBweCknLCBvcGFjaXR5OiAwIH0pKVxyXG4gICAgICAgICAgICBdKVxyXG4gICAgICAgIF0pXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25MaXN0Q29tcG9uZW50IHtcclxuICAgIFxyXG4gICAgQElucHV0KCkgXHJcbiAgICBzZXQgZGlyZWN0aW9uKGRpcmVjdGlvbjogTm90aWZpY2F0aW9uTGlzdERpcmVjdGlvbikge1xyXG4gICAgICAgIHRoaXMuX25vdGlmaWNhdGlvblNlcnZpY2UuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpIEBIb3N0QmluZGluZygnY2xhc3MnKSBwb3NpdGlvbjogTm90aWZpY2F0aW9uTGlzdFBvc3Rpb24gPSAndG9wLXJpZ2h0JztcclxuXHJcbiAgICBub3RpZmljYXRpb25zJDogT2JzZXJ2YWJsZTxOb3RpZmljYXRpb25SZWZbXT4gPSB0aGlzLl9ub3RpZmljYXRpb25TZXJ2aWNlLm5vdGlmaWNhdGlvbnMkLnBpcGUoXHJcbiAgICAgICAgbWFwKChub3RpZmljYXRpb25SZWZzOiBOb3RpZmljYXRpb25SZWZbXSkgPT4gbm90aWZpY2F0aW9uUmVmcy5maWx0ZXIobm90aWZpY2F0aW9uUmVmID0+IG5vdGlmaWNhdGlvblJlZi52aXNpYmxlKSxcclxuICAgICkpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX25vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvblNlcnZpY2UpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIE5vdGlmaWNhdGlvbkxpc3RQb3N0aW9uID0gJ3RvcC1sZWZ0JyB8ICd0b3AtcmlnaHQnIHwgJ2JvdHRvbS1sZWZ0JyB8ICdib3R0b20tcmlnaHQnOyJdfQ==