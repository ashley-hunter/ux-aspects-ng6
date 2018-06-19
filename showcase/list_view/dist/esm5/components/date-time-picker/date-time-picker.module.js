/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SpinButtonModule } from '../spin-button/index';
import { TimePickerModule } from '../time-picker/index';
import { DateTimePickerComponent } from './date-time-picker.component';
import { DateTimePickerConfig } from './date-time-picker.config';
import { DayViewComponent } from './day-view/day-view.component';
import { HeaderComponent } from './header/header.component';
import { MonthViewComponent } from './month-view/month-view.component';
import { TimeViewComponent } from './time-view/time-view.component';
import { YearViewComponent } from './year-view/year-view.component';
import { FocusIfModule } from '../../directives/focus-if/index';
var DateTimePickerModule = /** @class */ (function () {
    function DateTimePickerModule() {
    }
    DateTimePickerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        TimePickerModule,
                        SpinButtonModule,
                        FocusIfModule
                    ],
                    exports: [DateTimePickerComponent],
                    declarations: [DateTimePickerComponent, HeaderComponent, DayViewComponent, MonthViewComponent, YearViewComponent, TimeViewComponent],
                    providers: [
                        DateTimePickerConfig
                    ]
                },] },
    ];
    return DateTimePickerModule;
}());
export { DateTimePickerModule };
function DateTimePickerModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    DateTimePickerModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    DateTimePickerModule.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10aW1lLXBpY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9kYXRlLXRpbWUtcGlja2VyL2RhdGUtdGltZS1waWNrZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDakUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7Z0JBRS9ELFFBQVEsU0FBQztvQkFDTixPQUFPLEVBQUU7d0JBQ0wsWUFBWTt3QkFDWixXQUFXO3dCQUNYLGdCQUFnQjt3QkFDaEIsZ0JBQWdCO3dCQUNoQixhQUFhO3FCQUNoQjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztvQkFDbEMsWUFBWSxFQUFFLENBQUMsdUJBQXVCLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDO29CQUNwSSxTQUFTLEVBQUU7d0JBQ1Asb0JBQW9CO3FCQUN2QjtpQkFDSjs7K0JBM0JEOztTQTRCYSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU3BpbkJ1dHRvbk1vZHVsZSB9IGZyb20gJy4uL3NwaW4tYnV0dG9uL2luZGV4JztcclxuaW1wb3J0IHsgVGltZVBpY2tlck1vZHVsZSB9IGZyb20gJy4uL3RpbWUtcGlja2VyL2luZGV4JztcclxuaW1wb3J0IHsgRGF0ZVRpbWVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGUtdGltZS1waWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGF0ZVRpbWVQaWNrZXJDb25maWcgfSBmcm9tICcuL2RhdGUtdGltZS1waWNrZXIuY29uZmlnJztcclxuaW1wb3J0IHsgRGF5Vmlld0NvbXBvbmVudCB9IGZyb20gJy4vZGF5LXZpZXcvZGF5LXZpZXcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1vbnRoVmlld0NvbXBvbmVudCB9IGZyb20gJy4vbW9udGgtdmlldy9tb250aC12aWV3LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRpbWVWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi90aW1lLXZpZXcvdGltZS12aWV3LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFllYXJWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi95ZWFyLXZpZXcveWVhci12aWV3LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZvY3VzSWZNb2R1bGUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2ZvY3VzLWlmL2luZGV4JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIFRpbWVQaWNrZXJNb2R1bGUsXHJcbiAgICAgICAgU3BpbkJ1dHRvbk1vZHVsZSxcclxuICAgICAgICBGb2N1c0lmTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW0RhdGVUaW1lUGlja2VyQ29tcG9uZW50XSxcclxuICAgIGRlY2xhcmF0aW9uczogW0RhdGVUaW1lUGlja2VyQ29tcG9uZW50LCBIZWFkZXJDb21wb25lbnQsIERheVZpZXdDb21wb25lbnQsIE1vbnRoVmlld0NvbXBvbmVudCwgWWVhclZpZXdDb21wb25lbnQsIFRpbWVWaWV3Q29tcG9uZW50XSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIERhdGVUaW1lUGlja2VyQ29uZmlnXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRlVGltZVBpY2tlck1vZHVsZSB7IH1cclxuIl19