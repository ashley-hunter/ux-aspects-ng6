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
var TypeaheadModule = /** @class */ (function () {
    function TypeaheadModule() {
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
    return TypeaheadModule;
}());
export { TypeaheadModule };
function TypeaheadModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TypeaheadModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TypeaheadModule.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZWFoZWFkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3R5cGVhaGVhZC90eXBlYWhlYWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNwRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7Z0JBRTFELFFBQVEsU0FBQztvQkFDTixPQUFPLEVBQUU7d0JBQ0wsWUFBWTt3QkFDWixvQkFBb0I7d0JBQ3BCLHNCQUFzQjtxQkFDekI7b0JBQ0QsT0FBTyxFQUFFLENBQUMsa0JBQWtCLENBQUM7b0JBQzdCLFlBQVksRUFBRSxDQUFDLGtCQUFrQixFQUFFLDJCQUEyQixDQUFDO29CQUMvRCxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztpQkFDbkM7OzBCQWpCRDs7U0FrQmEsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEluZmluaXRlU2Nyb2xsTW9kdWxlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9pbmZpbml0ZS1zY3JvbGwvaW5kZXgnO1xyXG5pbXBvcnQgeyBTY3JvbGxJbnRvVmlld0lmTW9kdWxlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9zY3JvbGwtaW50by12aWV3LWlmL2luZGV4JztcclxuaW1wb3J0IHsgVHlwZWFoZWFkSGlnaGxpZ2h0RGlyZWN0aXZlIH0gZnJvbSAnLi90eXBlYWhlYWQtaGlnaGxpZ2h0LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFR5cGVhaGVhZEtleVNlcnZpY2UgfSBmcm9tICcuL3R5cGVhaGVhZC1rZXkuc2VydmljZSc7XHJcbmltcG9ydCB7IFR5cGVhaGVhZENvbXBvbmVudCB9IGZyb20gJy4vdHlwZWFoZWFkLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvbW1vbk1vZHVsZSxcclxuICAgICAgICBJbmZpbml0ZVNjcm9sbE1vZHVsZSxcclxuICAgICAgICBTY3JvbGxJbnRvVmlld0lmTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1R5cGVhaGVhZENvbXBvbmVudF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtUeXBlYWhlYWRDb21wb25lbnQsIFR5cGVhaGVhZEhpZ2hsaWdodERpcmVjdGl2ZV0sXHJcbiAgICBwcm92aWRlcnM6IFtUeXBlYWhlYWRLZXlTZXJ2aWNlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFR5cGVhaGVhZE1vZHVsZSB7IH1cclxuIl19