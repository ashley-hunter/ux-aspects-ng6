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
var PageHeaderModule = /** @class */ (function () {
    function PageHeaderModule() {
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
    return PageHeaderModule;
}());
export { PageHeaderModule };
function PageHeaderModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    PageHeaderModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    PageHeaderModule.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1oZWFkZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZS1oZWFkZXIvcGFnZS1oZWFkZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUUxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNsRixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUMzRyxPQUFPLEVBQUUseUNBQXlDLEVBQUUsTUFBTSwwRUFBMEUsQ0FBQztBQUNySSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNwRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7Ozs7O2dCQUU3RSxRQUFRLFNBQUM7b0JBQ04sT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osaUJBQWlCO3dCQUNqQixrQkFBa0I7d0JBQ2xCLFlBQVk7d0JBQ1osb0JBQW9CO3dCQUNwQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7cUJBQzdCO29CQUNELE9BQU8sRUFBRTt3QkFDTCxtQkFBbUI7d0JBQ25CLDZCQUE2QjtxQkFDaEM7b0JBQ0QsWUFBWSxFQUFFO3dCQUNWLG1CQUFtQjt3QkFDbkIsMkJBQTJCO3dCQUMzQiw2QkFBNkI7d0JBQzdCLDZCQUE2Qjt3QkFDN0IsaUNBQWlDO3dCQUNqQyx5Q0FBeUM7cUJBQzVDO2lCQUNKOzsyQkFwQ0Q7O1NBcUNhLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEJzRHJvcGRvd25Nb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Ryb3Bkb3duJztcclxuXHJcbmltcG9ydCB7IFBhZ2VIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL3BhZ2UtaGVhZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJyZWFkY3J1bWJzTW9kdWxlIH0gZnJvbSAnLi4vYnJlYWRjcnVtYnMvaW5kZXgnO1xyXG5pbXBvcnQgeyBQYWdlSGVhZGVySWNvbk1lbnVDb21wb25lbnQgfSBmcm9tICcuL2ljb24tbWVudS9pY29uLW1lbnUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGFnZUhlYWRlck5hdmlnYXRpb25Db21wb25lbnQgfSBmcm9tICcuL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYWdlSGVhZGVyTmF2aWdhdGlvbkl0ZW1Db21wb25lbnQgfSBmcm9tICcuL25hdmlnYXRpb24vbmF2aWdhdGlvbi1pdGVtL25hdmlnYXRpb24taXRlbS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYWdlSGVhZGVyTmF2aWdhdGlvbkRyb3Bkb3duSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLWRyb3Bkb3duLWl0ZW0vbmF2aWdhdGlvbi1kcm9wZG93bi1pdGVtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBhZ2VIZWFkZXJDdXN0b21NZW51RGlyZWN0aXZlIH0gZnJvbSAnLi9jdXN0b20tbWVudS9jdXN0b20tbWVudS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBSZXNpemVNb2R1bGUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3Jlc2l6ZS9pbmRleCc7XHJcbmltcG9ydCB7IENvbG9yU2VydmljZU1vZHVsZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbG9yL2luZGV4JztcclxuaW1wb3J0IHsgTWVudU5hdmlnYXRpb25Nb2R1bGUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL21lbnUtbmF2aWdhdGlvbi9pbmRleCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvbW1vbk1vZHVsZSxcclxuICAgICAgICBCcmVhZGNydW1ic01vZHVsZSxcclxuICAgICAgICBDb2xvclNlcnZpY2VNb2R1bGUsXHJcbiAgICAgICAgUmVzaXplTW9kdWxlLFxyXG4gICAgICAgIE1lbnVOYXZpZ2F0aW9uTW9kdWxlLFxyXG4gICAgICAgIEJzRHJvcGRvd25Nb2R1bGUuZm9yUm9vdCgpXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIFBhZ2VIZWFkZXJDb21wb25lbnQsXHJcbiAgICAgICAgUGFnZUhlYWRlckN1c3RvbU1lbnVEaXJlY3RpdmVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBQYWdlSGVhZGVyQ29tcG9uZW50LFxyXG4gICAgICAgIFBhZ2VIZWFkZXJJY29uTWVudUNvbXBvbmVudCxcclxuICAgICAgICBQYWdlSGVhZGVyQ3VzdG9tTWVudURpcmVjdGl2ZSxcclxuICAgICAgICBQYWdlSGVhZGVyTmF2aWdhdGlvbkNvbXBvbmVudCxcclxuICAgICAgICBQYWdlSGVhZGVyTmF2aWdhdGlvbkl0ZW1Db21wb25lbnQsXHJcbiAgICAgICAgUGFnZUhlYWRlck5hdmlnYXRpb25Ecm9wZG93bkl0ZW1Db21wb25lbnRcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2VIZWFkZXJNb2R1bGUgeyB9XHJcbiJdfQ==