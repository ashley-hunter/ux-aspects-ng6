/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PageHeaderComponent } from './page-header.component';
import { BreadcrumbsModule } from '../breadcrumbs/index';
import { PageHeaderIconMenuComponent } from './icon-menu/icon-menu.component';
import { PageHeaderNavigationComponent } from './navigation/navigation.component';
import { PageHeaderNavigationItemComponent } from './navigation/navigation-item/navigation-item.component';
import { PageHeaderNavigationDropdownItemComponent } from './navigation/navigation-dropdown-item/navigation-dropdown-item.component';
import { PageHeaderCustomMenuDirective } from './custom-menu/custom-menu.directive';
import { ResizeModule } from '../../directives/resize/index';
import { ColorServiceModule } from '../../services/color/index';
import { MenuNavigationModule } from '../../directives/menu-navigation/index';
export class PageHeaderModule {
}
PageHeaderModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    BreadcrumbsModule,
                    ColorServiceModule,
                    ResizeModule,
                    MenuNavigationModule,
                    BsDropdownModule.forRoot()
                ],
                exports: [
                    PageHeaderComponent,
                    PageHeaderCustomMenuDirective
                ],
                declarations: [
                    PageHeaderComponent,
                    PageHeaderIconMenuComponent,
                    PageHeaderCustomMenuDirective,
                    PageHeaderNavigationComponent,
                    PageHeaderNavigationItemComponent,
                    PageHeaderNavigationDropdownItemComponent
                ]
            },] },
];
function PageHeaderModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    PageHeaderModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    PageHeaderModule.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1oZWFkZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZS1oZWFkZXIvcGFnZS1oZWFkZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUUxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNsRixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUMzRyxPQUFPLEVBQUUseUNBQXlDLEVBQUUsTUFBTSwwRUFBMEUsQ0FBQztBQUNySSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNwRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUF3QjlFLE1BQU07OztZQXRCTCxRQUFRLFNBQUM7Z0JBQ04sT0FBTyxFQUFFO29CQUNMLFlBQVk7b0JBQ1osaUJBQWlCO29CQUNqQixrQkFBa0I7b0JBQ2xCLFlBQVk7b0JBQ1osb0JBQW9CO29CQUNwQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7aUJBQzdCO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxtQkFBbUI7b0JBQ25CLDZCQUE2QjtpQkFDaEM7Z0JBQ0QsWUFBWSxFQUFFO29CQUNWLG1CQUFtQjtvQkFDbkIsMkJBQTJCO29CQUMzQiw2QkFBNkI7b0JBQzdCLDZCQUE2QjtvQkFDN0IsaUNBQWlDO29CQUNqQyx5Q0FBeUM7aUJBQzVDO2FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBCc0Ryb3Bkb3duTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9kcm9wZG93bic7XHJcblxyXG5pbXBvcnQgeyBQYWdlSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlLWhlYWRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCcmVhZGNydW1ic01vZHVsZSB9IGZyb20gJy4uL2JyZWFkY3J1bWJzL2luZGV4JztcclxuaW1wb3J0IHsgUGFnZUhlYWRlckljb25NZW51Q29tcG9uZW50IH0gZnJvbSAnLi9pY29uLW1lbnUvaWNvbi1tZW51LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBhZ2VIZWFkZXJOYXZpZ2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGFnZUhlYWRlck5hdmlnYXRpb25JdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24taXRlbS9uYXZpZ2F0aW9uLWl0ZW0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGFnZUhlYWRlck5hdmlnYXRpb25Ecm9wZG93bkl0ZW1Db21wb25lbnQgfSBmcm9tICcuL25hdmlnYXRpb24vbmF2aWdhdGlvbi1kcm9wZG93bi1pdGVtL25hdmlnYXRpb24tZHJvcGRvd24taXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYWdlSGVhZGVyQ3VzdG9tTWVudURpcmVjdGl2ZSB9IGZyb20gJy4vY3VzdG9tLW1lbnUvY3VzdG9tLW1lbnUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgUmVzaXplTW9kdWxlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9yZXNpemUvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb2xvclNlcnZpY2VNb2R1bGUgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb2xvci9pbmRleCc7XHJcbmltcG9ydCB7IE1lbnVOYXZpZ2F0aW9uTW9kdWxlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9tZW51LW5hdmlnYXRpb24vaW5kZXgnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgQnJlYWRjcnVtYnNNb2R1bGUsXHJcbiAgICAgICAgQ29sb3JTZXJ2aWNlTW9kdWxlLFxyXG4gICAgICAgIFJlc2l6ZU1vZHVsZSxcclxuICAgICAgICBNZW51TmF2aWdhdGlvbk1vZHVsZSxcclxuICAgICAgICBCc0Ryb3Bkb3duTW9kdWxlLmZvclJvb3QoKVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICBQYWdlSGVhZGVyQ29tcG9uZW50LFxyXG4gICAgICAgIFBhZ2VIZWFkZXJDdXN0b21NZW51RGlyZWN0aXZlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgUGFnZUhlYWRlckNvbXBvbmVudCxcclxuICAgICAgICBQYWdlSGVhZGVySWNvbk1lbnVDb21wb25lbnQsXHJcbiAgICAgICAgUGFnZUhlYWRlckN1c3RvbU1lbnVEaXJlY3RpdmUsXHJcbiAgICAgICAgUGFnZUhlYWRlck5hdmlnYXRpb25Db21wb25lbnQsXHJcbiAgICAgICAgUGFnZUhlYWRlck5hdmlnYXRpb25JdGVtQ29tcG9uZW50LFxyXG4gICAgICAgIFBhZ2VIZWFkZXJOYXZpZ2F0aW9uRHJvcGRvd25JdGVtQ29tcG9uZW50XHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYWdlSGVhZGVyTW9kdWxlIHsgfVxyXG4iXX0=