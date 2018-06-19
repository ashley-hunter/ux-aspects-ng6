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
var /** @type {?} */ DECLARATIONS = [
    FilterBaseComponent,
    FilterContainerComponent,
    FilterDropdownComponent,
    FilterDynamicComponent
];
var FilterModule = /** @class */ (function () {
    function FilterModule() {
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
    return FilterModule;
}());
export { FilterModule };
function FilterModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FilterModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FilterModule.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFbkYscUJBQU0sWUFBWSxHQUFHO0lBQ2pCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtDQUN6QixDQUFDOzs7OztnQkFFRCxRQUFRLFNBQUM7b0JBQ04sT0FBTyxFQUFFO3dCQUNMLGdCQUFnQixDQUFDLE9BQU8sRUFBRTt3QkFDMUIsZUFBZSxDQUFDLE9BQU8sRUFBRTt3QkFDekIsYUFBYTt3QkFDYixXQUFXO3dCQUNYLFlBQVk7cUJBQ2Y7b0JBQ0QsT0FBTyxFQUFFLFlBQVk7b0JBQ3JCLFlBQVksRUFBRSxZQUFZO2lCQUM3Qjs7dUJBNUJEOztTQTZCYSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEJzRHJvcGRvd25Nb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Ryb3Bkb3duJztcclxuaW1wb3J0IHsgVHlwZWFoZWFkTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC90eXBlYWhlYWQnO1xyXG5pbXBvcnQgeyBUb29sdGlwTW9kdWxlIH0gZnJvbSAnLi4vdG9vbHRpcC9pbmRleCc7XHJcbmltcG9ydCB7IEZpbHRlckJhc2VDb21wb25lbnQgfSBmcm9tICcuL2ZpbHRlci1iYXNlL2ZpbHRlci1iYXNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZpbHRlckNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vZmlsdGVyLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGaWx0ZXJEcm9wZG93bkNvbXBvbmVudCB9IGZyb20gJy4vZmlsdGVyLWRyb3Bkb3duL2ZpbHRlci1kcm9wZG93bi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGaWx0ZXJEeW5hbWljQ29tcG9uZW50IH0gZnJvbSAnLi9maWx0ZXItZHluYW1pYy9maWx0ZXItZHluYW1pYy5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgREVDTEFSQVRJT05TID0gW1xyXG4gICAgRmlsdGVyQmFzZUNvbXBvbmVudCxcclxuICAgIEZpbHRlckNvbnRhaW5lckNvbXBvbmVudCxcclxuICAgIEZpbHRlckRyb3Bkb3duQ29tcG9uZW50LFxyXG4gICAgRmlsdGVyRHluYW1pY0NvbXBvbmVudFxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBCc0Ryb3Bkb3duTW9kdWxlLmZvclJvb3QoKSxcclxuICAgICAgICBUeXBlYWhlYWRNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgICAgIFRvb2x0aXBNb2R1bGUsXHJcbiAgICAgICAgRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogREVDTEFSQVRJT05TLFxyXG4gICAgZGVjbGFyYXRpb25zOiBERUNMQVJBVElPTlNcclxufSlcclxuZXhwb3J0IGNsYXNzIEZpbHRlck1vZHVsZSB7IH1cclxuIl19