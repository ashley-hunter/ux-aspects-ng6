/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { CommonModule } from '@angular/common';
import { FacetContainerComponent } from './facet-container.component';
import { FacetBaseComponent } from './base/facet-base/facet-base.component';
import { FacetHeaderComponent } from './base/facet-header/facet-header.component';
import { FacetCheckListComponent } from './facet-check-list/facet-check-list.component';
import { FacetTypeaheadListComponent, FacetTypeaheadHighlight } from './facet-typeahead-list/facet-typeahead-list.component';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from '../checkbox/index';
import { TooltipModule } from '../tooltip/index';
import { ReorderableModule } from './../../directives/reorderable/reorderable.module';
var /** @type {?} */ DECLARATIONS = [
    FacetContainerComponent,
    FacetHeaderComponent,
    FacetBaseComponent,
    FacetCheckListComponent,
    FacetTypeaheadListComponent,
    FacetTypeaheadHighlight
];
var FacetsModule = /** @class */ (function () {
    function FacetsModule() {
    }
    FacetsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        CheckboxModule,
                        TooltipModule,
                        ReorderableModule,
                        TypeaheadModule.forRoot()
                    ],
                    exports: DECLARATIONS,
                    declarations: DECLARATIONS
                },] },
    ];
    return FacetsModule;
}());
export { FacetsModule };
function FacetsModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FacetsModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FacetsModule.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXRzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2ZhY2V0cy9mYWNldHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDNUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDeEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLHVCQUF1QixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDN0gsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFFdEYscUJBQU0sWUFBWSxHQUFHO0lBQ2pCLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QiwyQkFBMkI7SUFDM0IsdUJBQXVCO0NBQzFCLENBQUM7Ozs7O2dCQUVELFFBQVEsU0FBQztvQkFDTixPQUFPLEVBQUU7d0JBQ0wsWUFBWTt3QkFDWixXQUFXO3dCQUNYLGNBQWM7d0JBQ2QsYUFBYTt3QkFDYixpQkFBaUI7d0JBQ2pCLGVBQWUsQ0FBQyxPQUFPLEVBQUU7cUJBQzVCO29CQUNELE9BQU8sRUFBRSxZQUFZO29CQUNyQixZQUFZLEVBQUUsWUFBWTtpQkFDN0I7O3VCQWpDRDs7U0FrQ2EsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFR5cGVhaGVhZE1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvdHlwZWFoZWFkJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRmFjZXRDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2ZhY2V0LWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGYWNldEJhc2VDb21wb25lbnQgfSBmcm9tICcuL2Jhc2UvZmFjZXQtYmFzZS9mYWNldC1iYXNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZhY2V0SGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9iYXNlL2ZhY2V0LWhlYWRlci9mYWNldC1oZWFkZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRmFjZXRDaGVja0xpc3RDb21wb25lbnQgfSBmcm9tICcuL2ZhY2V0LWNoZWNrLWxpc3QvZmFjZXQtY2hlY2stbGlzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGYWNldFR5cGVhaGVhZExpc3RDb21wb25lbnQsIEZhY2V0VHlwZWFoZWFkSGlnaGxpZ2h0IH0gZnJvbSAnLi9mYWNldC10eXBlYWhlYWQtbGlzdC9mYWNldC10eXBlYWhlYWQtbGlzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQ2hlY2tib3hNb2R1bGUgfSBmcm9tICcuLi9jaGVja2JveC9pbmRleCc7XHJcbmltcG9ydCB7IFRvb2x0aXBNb2R1bGUgfSBmcm9tICcuLi90b29sdGlwL2luZGV4JztcclxuaW1wb3J0IHsgUmVvcmRlcmFibGVNb2R1bGUgfSBmcm9tICcuLy4uLy4uL2RpcmVjdGl2ZXMvcmVvcmRlcmFibGUvcmVvcmRlcmFibGUubW9kdWxlJztcclxuXHJcbmNvbnN0IERFQ0xBUkFUSU9OUyA9IFtcclxuICAgIEZhY2V0Q29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgRmFjZXRIZWFkZXJDb21wb25lbnQsXHJcbiAgICBGYWNldEJhc2VDb21wb25lbnQsXHJcbiAgICBGYWNldENoZWNrTGlzdENvbXBvbmVudCxcclxuICAgIEZhY2V0VHlwZWFoZWFkTGlzdENvbXBvbmVudCxcclxuICAgIEZhY2V0VHlwZWFoZWFkSGlnaGxpZ2h0XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvbW1vbk1vZHVsZSxcclxuICAgICAgICBGb3Jtc01vZHVsZSxcclxuICAgICAgICBDaGVja2JveE1vZHVsZSxcclxuICAgICAgICBUb29sdGlwTW9kdWxlLFxyXG4gICAgICAgIFJlb3JkZXJhYmxlTW9kdWxlLFxyXG4gICAgICAgIFR5cGVhaGVhZE1vZHVsZS5mb3JSb290KClcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBERUNMQVJBVElPTlMsXHJcbiAgICBkZWNsYXJhdGlvbnM6IERFQ0xBUkFUSU9OU1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFjZXRzTW9kdWxlIHsgfVxyXG4iXX0=