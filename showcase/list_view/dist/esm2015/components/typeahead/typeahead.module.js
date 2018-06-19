/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from '../../directives/infinite-scroll/index';
import { ScrollIntoViewIfModule } from '../../directives/scroll-into-view-if/index';
import { TypeaheadHighlightDirective } from './typeahead-highlight.directive';
import { TypeaheadKeyService } from './typeahead-key.service';
import { TypeaheadComponent } from './typeahead.component';
export class TypeaheadModule {
}
TypeaheadModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    InfiniteScrollModule,
                    ScrollIntoViewIfModule
                ],
                exports: [TypeaheadComponent],
                declarations: [TypeaheadComponent, TypeaheadHighlightDirective],
                providers: [TypeaheadKeyService],
            },] },
];
function TypeaheadModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TypeaheadModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TypeaheadModule.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZWFoZWFkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3R5cGVhaGVhZC90eXBlYWhlYWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNwRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQVkzRCxNQUFNOzs7WUFWTCxRQUFRLFNBQUM7Z0JBQ04sT0FBTyxFQUFFO29CQUNMLFlBQVk7b0JBQ1osb0JBQW9CO29CQUNwQixzQkFBc0I7aUJBQ3pCO2dCQUNELE9BQU8sRUFBRSxDQUFDLGtCQUFrQixDQUFDO2dCQUM3QixZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSwyQkFBMkIsQ0FBQztnQkFDL0QsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7YUFDbkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbmZpbml0ZVNjcm9sbE1vZHVsZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvaW5maW5pdGUtc2Nyb2xsL2luZGV4JztcclxuaW1wb3J0IHsgU2Nyb2xsSW50b1ZpZXdJZk1vZHVsZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvc2Nyb2xsLWludG8tdmlldy1pZi9pbmRleCc7XHJcbmltcG9ydCB7IFR5cGVhaGVhZEhpZ2hsaWdodERpcmVjdGl2ZSB9IGZyb20gJy4vdHlwZWFoZWFkLWhpZ2hsaWdodC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBUeXBlYWhlYWRLZXlTZXJ2aWNlIH0gZnJvbSAnLi90eXBlYWhlYWQta2V5LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUeXBlYWhlYWRDb21wb25lbnQgfSBmcm9tICcuL3R5cGVhaGVhZC5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgSW5maW5pdGVTY3JvbGxNb2R1bGUsXHJcbiAgICAgICAgU2Nyb2xsSW50b1ZpZXdJZk1vZHVsZVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtUeXBlYWhlYWRDb21wb25lbnRdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbVHlwZWFoZWFkQ29tcG9uZW50LCBUeXBlYWhlYWRIaWdobGlnaHREaXJlY3RpdmVdLFxyXG4gICAgcHJvdmlkZXJzOiBbVHlwZWFoZWFkS2V5U2VydmljZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUeXBlYWhlYWRNb2R1bGUgeyB9XHJcbiJdfQ==