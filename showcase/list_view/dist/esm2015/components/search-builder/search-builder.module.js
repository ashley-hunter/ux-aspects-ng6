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
export class SearchBuilderModule {
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
function SearchBuilderModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SearchBuilderModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SearchBuilderModule.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJ1aWxkZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VhcmNoLWJ1aWxkZXIvc2VhcmNoLWJ1aWxkZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDcEcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDOUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDOUUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDdkcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDaEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDL0YsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDcEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQWdDakQsTUFBTTs7O1lBOUJMLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLG9CQUFvQjtvQkFDcEIsYUFBYTtvQkFDYixZQUFZO2lCQUNiO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxzQkFBc0I7b0JBQ3RCLDJCQUEyQjtvQkFDM0IsbUJBQW1CO2lCQUNwQjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osc0JBQXNCO29CQUN0QiwyQkFBMkI7b0JBQzNCLG1CQUFtQjtvQkFDbkIsbUJBQW1CO29CQUNuQix3QkFBd0I7b0JBQ3hCLDRCQUE0QjtvQkFDNUIscUJBQXFCO29CQUNyQixtQkFBbUI7aUJBQ3BCO2dCQUNELGVBQWUsRUFBRTtvQkFDZixtQkFBbUI7b0JBQ25CLG1CQUFtQjtvQkFDbkIsd0JBQXdCO29CQUN4QixxQkFBcUI7aUJBQ3RCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgU2VhcmNoQnVpbGRlckNvbXBvbmVudCB9IGZyb20gJy4vc2VhcmNoLWJ1aWxkZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2VhcmNoQnVpbGRlckdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9zZWFyY2gtYnVpbGRlci1ncm91cC9zZWFyY2gtYnVpbGRlci1ncm91cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTZWFyY2hUZXh0Q29tcG9uZW50IH0gZnJvbSAnLi9zZWFyY2gtY29tcG9uZW50cy90ZXh0L3RleHQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2VhcmNoRGF0ZUNvbXBvbmVudCB9IGZyb20gJy4vc2VhcmNoLWNvbXBvbmVudHMvZGF0ZS9kYXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNlYXJjaEJ1aWxkZXJPdXRsZXREaXJlY3RpdmUgfSBmcm9tICcuL3NlYXJjaC1idWlsZGVyLW91dGxldC9zZWFyY2gtYnVpbGRlci1vdXRsZXQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQmFzZVNlYXJjaENvbXBvbmVudCB9IGZyb20gJy4vc2VhcmNoLWNvbXBvbmVudHMvYmFzZS1zZWFyY2guY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGF0ZVRpbWVQaWNrZXJNb2R1bGUgfSBmcm9tICcuLi9kYXRlLXRpbWUtcGlja2VyL2RhdGUtdGltZS1waWNrZXIubW9kdWxlJztcclxuaW1wb3J0IHsgU2VhcmNoRGF0ZVJhbmdlQ29tcG9uZW50IH0gZnJvbSAnLi9zZWFyY2gtY29tcG9uZW50cy9kYXRlLXJhbmdlL2RhdGUtcmFuZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2VhcmNoU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9zZWFyY2gtY29tcG9uZW50cy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNlbGVjdE1vZHVsZSB9IGZyb20gJy4uL3NlbGVjdC9pbmRleCc7XHJcbmltcG9ydCB7IFBvcG92ZXJNb2R1bGUgfSBmcm9tICcuLi9wb3BvdmVyL2luZGV4JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBEYXRlVGltZVBpY2tlck1vZHVsZSxcclxuICAgIFBvcG92ZXJNb2R1bGUsXHJcbiAgICBTZWxlY3RNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIFNlYXJjaEJ1aWxkZXJDb21wb25lbnQsXHJcbiAgICBTZWFyY2hCdWlsZGVyR3JvdXBDb21wb25lbnQsXHJcbiAgICBCYXNlU2VhcmNoQ29tcG9uZW50XHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFNlYXJjaEJ1aWxkZXJDb21wb25lbnQsXHJcbiAgICBTZWFyY2hCdWlsZGVyR3JvdXBDb21wb25lbnQsXHJcbiAgICBTZWFyY2hUZXh0Q29tcG9uZW50LFxyXG4gICAgU2VhcmNoRGF0ZUNvbXBvbmVudCxcclxuICAgIFNlYXJjaERhdGVSYW5nZUNvbXBvbmVudCxcclxuICAgIFNlYXJjaEJ1aWxkZXJPdXRsZXREaXJlY3RpdmUsXHJcbiAgICBTZWFyY2hTZWxlY3RDb21wb25lbnQsXHJcbiAgICBCYXNlU2VhcmNoQ29tcG9uZW50XHJcbiAgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICAgIFNlYXJjaFRleHRDb21wb25lbnQsXHJcbiAgICBTZWFyY2hEYXRlQ29tcG9uZW50LFxyXG4gICAgU2VhcmNoRGF0ZVJhbmdlQ29tcG9uZW50LFxyXG4gICAgU2VhcmNoU2VsZWN0Q29tcG9uZW50XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoQnVpbGRlck1vZHVsZSB7IH1cclxuIl19