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
const /** @type {?} */ DECLARATIONS = [
    FacetContainerComponent,
    FacetHeaderComponent,
    FacetBaseComponent,
    FacetCheckListComponent,
    FacetTypeaheadListComponent,
    FacetTypeaheadHighlight
];
export class FacetsModule {
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
function FacetsModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FacetsModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FacetsModule.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXRzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2ZhY2V0cy9mYWNldHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDNUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDeEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLHVCQUF1QixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDN0gsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFFdEYsdUJBQU0sWUFBWSxHQUFHO0lBQ2pCLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QiwyQkFBMkI7SUFDM0IsdUJBQXVCO0NBQzFCLENBQUM7QUFjRixNQUFNOzs7WUFaTCxRQUFRLFNBQUM7Z0JBQ04sT0FBTyxFQUFFO29CQUNMLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxjQUFjO29CQUNkLGFBQWE7b0JBQ2IsaUJBQWlCO29CQUNqQixlQUFlLENBQUMsT0FBTyxFQUFFO2lCQUM1QjtnQkFDRCxPQUFPLEVBQUUsWUFBWTtnQkFDckIsWUFBWSxFQUFFLFlBQVk7YUFDN0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUeXBlYWhlYWRNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3R5cGVhaGVhZCc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZhY2V0Q29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9mYWNldC1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRmFjZXRCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9iYXNlL2ZhY2V0LWJhc2UvZmFjZXQtYmFzZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGYWNldEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vYmFzZS9mYWNldC1oZWFkZXIvZmFjZXQtaGVhZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZhY2V0Q2hlY2tMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9mYWNldC1jaGVjay1saXN0L2ZhY2V0LWNoZWNrLWxpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRmFjZXRUeXBlYWhlYWRMaXN0Q29tcG9uZW50LCBGYWNldFR5cGVhaGVhZEhpZ2hsaWdodCB9IGZyb20gJy4vZmFjZXQtdHlwZWFoZWFkLWxpc3QvZmFjZXQtdHlwZWFoZWFkLWxpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENoZWNrYm94TW9kdWxlIH0gZnJvbSAnLi4vY2hlY2tib3gvaW5kZXgnO1xyXG5pbXBvcnQgeyBUb29sdGlwTW9kdWxlIH0gZnJvbSAnLi4vdG9vbHRpcC9pbmRleCc7XHJcbmltcG9ydCB7IFJlb3JkZXJhYmxlTW9kdWxlIH0gZnJvbSAnLi8uLi8uLi9kaXJlY3RpdmVzL3Jlb3JkZXJhYmxlL3Jlb3JkZXJhYmxlLm1vZHVsZSc7XHJcblxyXG5jb25zdCBERUNMQVJBVElPTlMgPSBbXHJcbiAgICBGYWNldENvbnRhaW5lckNvbXBvbmVudCxcclxuICAgIEZhY2V0SGVhZGVyQ29tcG9uZW50LFxyXG4gICAgRmFjZXRCYXNlQ29tcG9uZW50LFxyXG4gICAgRmFjZXRDaGVja0xpc3RDb21wb25lbnQsXHJcbiAgICBGYWNldFR5cGVhaGVhZExpc3RDb21wb25lbnQsXHJcbiAgICBGYWNldFR5cGVhaGVhZEhpZ2hsaWdodFxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgQ2hlY2tib3hNb2R1bGUsXHJcbiAgICAgICAgVG9vbHRpcE1vZHVsZSxcclxuICAgICAgICBSZW9yZGVyYWJsZU1vZHVsZSxcclxuICAgICAgICBUeXBlYWhlYWRNb2R1bGUuZm9yUm9vdCgpXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogREVDTEFSQVRJT05TLFxyXG4gICAgZGVjbGFyYXRpb25zOiBERUNMQVJBVElPTlNcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhY2V0c01vZHVsZSB7IH1cclxuIl19