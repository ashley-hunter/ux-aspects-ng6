/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchBuilderComponent } from './search-builder.component';
import { SearchBuilderGroupComponent } from './search-builder-group/search-builder-group.component';
import { SearchTextComponent } from './search-components/text/text.component';
import { SearchDateComponent } from './search-components/date/date.component';
import { SearchBuilderOutletDirective } from './search-builder-outlet/search-builder-outlet.directive';
import { BaseSearchComponent } from './search-components/base-search.component';
import { DateTimePickerModule } from '../date-time-picker/date-time-picker.module';
import { SearchDateRangeComponent } from './search-components/date-range/date-range.component';
import { SearchSelectComponent } from './search-components/select/select.component';
import { SelectModule } from '../select/index';
import { PopoverModule } from '../popover/index';
var SearchBuilderModule = /** @class */ (function () {
    function SearchBuilderModule() {
    }
    SearchBuilderModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        DateTimePickerModule,
                        PopoverModule,
                        SelectModule
                    ],
                    exports: [
                        SearchBuilderComponent,
                        SearchBuilderGroupComponent,
                        BaseSearchComponent
                    ],
                    declarations: [
                        SearchBuilderComponent,
                        SearchBuilderGroupComponent,
                        SearchTextComponent,
                        SearchDateComponent,
                        SearchDateRangeComponent,
                        SearchBuilderOutletDirective,
                        SearchSelectComponent,
                        BaseSearchComponent
                    ],
                    entryComponents: [
                        SearchTextComponent,
                        SearchDateComponent,
                        SearchDateRangeComponent,
                        SearchSelectComponent
                    ]
                },] },
    ];
    return SearchBuilderModule;
}());
export { SearchBuilderModule };
function SearchBuilderModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SearchBuilderModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SearchBuilderModule.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJ1aWxkZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VhcmNoLWJ1aWxkZXIvc2VhcmNoLWJ1aWxkZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDcEcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDOUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDOUUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDdkcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDaEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDL0YsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDcEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7Z0JBRWhELFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixXQUFXO3dCQUNYLG9CQUFvQjt3QkFDcEIsYUFBYTt3QkFDYixZQUFZO3FCQUNiO29CQUNELE9BQU8sRUFBRTt3QkFDUCxzQkFBc0I7d0JBQ3RCLDJCQUEyQjt3QkFDM0IsbUJBQW1CO3FCQUNwQjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osc0JBQXNCO3dCQUN0QiwyQkFBMkI7d0JBQzNCLG1CQUFtQjt3QkFDbkIsbUJBQW1CO3dCQUNuQix3QkFBd0I7d0JBQ3hCLDRCQUE0Qjt3QkFDNUIscUJBQXFCO3dCQUNyQixtQkFBbUI7cUJBQ3BCO29CQUNELGVBQWUsRUFBRTt3QkFDZixtQkFBbUI7d0JBQ25CLG1CQUFtQjt3QkFDbkIsd0JBQXdCO3dCQUN4QixxQkFBcUI7cUJBQ3RCO2lCQUNGOzs4QkE1Q0Q7O1NBNkNhLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBTZWFyY2hCdWlsZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zZWFyY2gtYnVpbGRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTZWFyY2hCdWlsZGVyR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL3NlYXJjaC1idWlsZGVyLWdyb3VwL3NlYXJjaC1idWlsZGVyLWdyb3VwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNlYXJjaFRleHRDb21wb25lbnQgfSBmcm9tICcuL3NlYXJjaC1jb21wb25lbnRzL3RleHQvdGV4dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTZWFyY2hEYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9zZWFyY2gtY29tcG9uZW50cy9kYXRlL2RhdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2VhcmNoQnVpbGRlck91dGxldERpcmVjdGl2ZSB9IGZyb20gJy4vc2VhcmNoLWJ1aWxkZXItb3V0bGV0L3NlYXJjaC1idWlsZGVyLW91dGxldC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBCYXNlU2VhcmNoQ29tcG9uZW50IH0gZnJvbSAnLi9zZWFyY2gtY29tcG9uZW50cy9iYXNlLXNlYXJjaC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEYXRlVGltZVBpY2tlck1vZHVsZSB9IGZyb20gJy4uL2RhdGUtdGltZS1waWNrZXIvZGF0ZS10aW1lLXBpY2tlci5tb2R1bGUnO1xyXG5pbXBvcnQgeyBTZWFyY2hEYXRlUmFuZ2VDb21wb25lbnQgfSBmcm9tICcuL3NlYXJjaC1jb21wb25lbnRzL2RhdGUtcmFuZ2UvZGF0ZS1yYW5nZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTZWFyY2hTZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL3NlYXJjaC1jb21wb25lbnRzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2VsZWN0TW9kdWxlIH0gZnJvbSAnLi4vc2VsZWN0L2luZGV4JztcclxuaW1wb3J0IHsgUG9wb3Zlck1vZHVsZSB9IGZyb20gJy4uL3BvcG92ZXIvaW5kZXgnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIERhdGVUaW1lUGlja2VyTW9kdWxlLFxyXG4gICAgUG9wb3Zlck1vZHVsZSxcclxuICAgIFNlbGVjdE1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgU2VhcmNoQnVpbGRlckNvbXBvbmVudCxcclxuICAgIFNlYXJjaEJ1aWxkZXJHcm91cENvbXBvbmVudCxcclxuICAgIEJhc2VTZWFyY2hDb21wb25lbnRcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgU2VhcmNoQnVpbGRlckNvbXBvbmVudCxcclxuICAgIFNlYXJjaEJ1aWxkZXJHcm91cENvbXBvbmVudCxcclxuICAgIFNlYXJjaFRleHRDb21wb25lbnQsXHJcbiAgICBTZWFyY2hEYXRlQ29tcG9uZW50LFxyXG4gICAgU2VhcmNoRGF0ZVJhbmdlQ29tcG9uZW50LFxyXG4gICAgU2VhcmNoQnVpbGRlck91dGxldERpcmVjdGl2ZSxcclxuICAgIFNlYXJjaFNlbGVjdENvbXBvbmVudCxcclxuICAgIEJhc2VTZWFyY2hDb21wb25lbnRcclxuICBdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1xyXG4gICAgU2VhcmNoVGV4dENvbXBvbmVudCxcclxuICAgIFNlYXJjaERhdGVDb21wb25lbnQsXHJcbiAgICBTZWFyY2hEYXRlUmFuZ2VDb21wb25lbnQsXHJcbiAgICBTZWFyY2hTZWxlY3RDb21wb25lbnRcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hCdWlsZGVyTW9kdWxlIHsgfVxyXG4iXX0=