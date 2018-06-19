/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { TooltipModule } from '../tooltip/index';
import { FilterBaseComponent } from './filter-base/filter-base.component';
import { FilterContainerComponent } from './filter-container.component';
import { FilterDropdownComponent } from './filter-dropdown/filter-dropdown.component';
import { FilterDynamicComponent } from './filter-dynamic/filter-dynamic.component';
const /** @type {?} */ DECLARATIONS = [
    FilterBaseComponent,
    FilterContainerComponent,
    FilterDropdownComponent,
    FilterDynamicComponent
];
export class FilterModule {
}
FilterModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    BsDropdownModule.forRoot(),
                    TypeaheadModule.forRoot(),
                    TooltipModule,
                    FormsModule,
                    CommonModule
                ],
                exports: DECLARATIONS,
                declarations: DECLARATIONS
            },] },
];
function FilterModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FilterModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FilterModule.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFbkYsdUJBQU0sWUFBWSxHQUFHO0lBQ2pCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtDQUN6QixDQUFDO0FBYUYsTUFBTTs7O1lBWEwsUUFBUSxTQUFDO2dCQUNOLE9BQU8sRUFBRTtvQkFDTCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7b0JBQzFCLGVBQWUsQ0FBQyxPQUFPLEVBQUU7b0JBQ3pCLGFBQWE7b0JBQ2IsV0FBVztvQkFDWCxZQUFZO2lCQUNmO2dCQUNELE9BQU8sRUFBRSxZQUFZO2dCQUNyQixZQUFZLEVBQUUsWUFBWTthQUM3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBCc0Ryb3Bkb3duTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9kcm9wZG93bic7XHJcbmltcG9ydCB7IFR5cGVhaGVhZE1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvdHlwZWFoZWFkJztcclxuaW1wb3J0IHsgVG9vbHRpcE1vZHVsZSB9IGZyb20gJy4uL3Rvb2x0aXAvaW5kZXgnO1xyXG5pbXBvcnQgeyBGaWx0ZXJCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9maWx0ZXItYmFzZS9maWx0ZXItYmFzZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGaWx0ZXJDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2ZpbHRlci1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRmlsdGVyRHJvcGRvd25Db21wb25lbnQgfSBmcm9tICcuL2ZpbHRlci1kcm9wZG93bi9maWx0ZXItZHJvcGRvd24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgRmlsdGVyRHluYW1pY0NvbXBvbmVudCB9IGZyb20gJy4vZmlsdGVyLWR5bmFtaWMvZmlsdGVyLWR5bmFtaWMuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IERFQ0xBUkFUSU9OUyA9IFtcclxuICAgIEZpbHRlckJhc2VDb21wb25lbnQsXHJcbiAgICBGaWx0ZXJDb250YWluZXJDb21wb25lbnQsXHJcbiAgICBGaWx0ZXJEcm9wZG93bkNvbXBvbmVudCxcclxuICAgIEZpbHRlckR5bmFtaWNDb21wb25lbnRcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQnNEcm9wZG93bk1vZHVsZS5mb3JSb290KCksXHJcbiAgICAgICAgVHlwZWFoZWFkTW9kdWxlLmZvclJvb3QoKSxcclxuICAgICAgICBUb29sdGlwTW9kdWxlLFxyXG4gICAgICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIENvbW1vbk1vZHVsZVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IERFQ0xBUkFUSU9OUyxcclxuICAgIGRlY2xhcmF0aW9uczogREVDTEFSQVRJT05TXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaWx0ZXJNb2R1bGUgeyB9XHJcbiJdfQ==