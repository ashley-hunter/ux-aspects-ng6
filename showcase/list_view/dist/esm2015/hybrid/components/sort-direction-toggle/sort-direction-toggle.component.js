/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Injector, Input } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
export class SortDirectionToggleNg1Component extends UpgradeComponent {
    /**
     * @param {?} elementRef
     * @param {?} injector
     */
    constructor(elementRef, injector) {
        super('sortDirectionToggle', elementRef, injector);
    }
}
SortDirectionToggleNg1Component.decorators = [
    { type: Directive, args: [{
                selector: 'sort-direction-toggle'
            },] },
];
/** @nocollapse */
SortDirectionToggleNg1Component.ctorParameters = () => [
    { type: ElementRef, },
    { type: Injector, },
];
SortDirectionToggleNg1Component.propDecorators = {
    "label": [{ type: Input },],
    "sorters": [{ type: Input },],
    "descend": [{ type: Input },],
};
function SortDirectionToggleNg1Component_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SortDirectionToggleNg1Component.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SortDirectionToggleNg1Component.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    SortDirectionToggleNg1Component.propDecorators;
    /** @type {?} */
    SortDirectionToggleNg1Component.prototype.label;
    /** @type {?} */
    SortDirectionToggleNg1Component.prototype.sorters;
    /** @type {?} */
    SortDirectionToggleNg1Component.prototype.descend;
}
/**
 * @record
 */
export function SortDirectionToggleSorter() { }
function SortDirectionToggleSorter_tsickle_Closure_declarations() {
    /** @type {?} */
    SortDirectionToggleSorter.prototype.name;
    /** @type {?} */
    SortDirectionToggleSorter.prototype.sort;
    /** @type {?} */
    SortDirectionToggleSorter.prototype.defaultSorter;
    /** @type {?} */
    SortDirectionToggleSorter.prototype.select;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1kaXJlY3Rpb24tdG9nZ2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJoeWJyaWQvY29tcG9uZW50cy9zb3J0LWRpcmVjdGlvbi10b2dnbGUvc29ydC1kaXJlY3Rpb24tdG9nZ2xlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUszRCxNQUFNLHNDQUF1QyxTQUFRLGdCQUFnQjs7Ozs7SUFNakUsWUFBWSxVQUFzQixFQUFFLFFBQWtCO1FBQ2xELEtBQUssQ0FBQyxxQkFBcUIsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7S0FDdEQ7OztZQVhKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsdUJBQXVCO2FBQ3BDOzs7O1lBTG1CLFVBQVU7WUFBRSxRQUFROzs7c0JBUW5DLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbmplY3RvciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVXBncmFkZUNvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL3VwZ3JhZGUvc3RhdGljJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdzb3J0LWRpcmVjdGlvbi10b2dnbGUnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3J0RGlyZWN0aW9uVG9nZ2xlTmcxQ29tcG9uZW50IGV4dGVuZHMgVXBncmFkZUNvbXBvbmVudCB7XHJcblxyXG4gICAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHNvcnRlcnM6IFNvcnREaXJlY3Rpb25Ub2dnbGVTb3J0ZXJbXTtcclxuICAgIEBJbnB1dCgpIGRlc2NlbmQ6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcbiAgICAgICAgc3VwZXIoJ3NvcnREaXJlY3Rpb25Ub2dnbGUnLCBlbGVtZW50UmVmLCBpbmplY3Rvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU29ydERpcmVjdGlvblRvZ2dsZVNvcnRlciB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBzb3J0OiBzdHJpbmc7XHJcbiAgICBkZWZhdWx0U29ydGVyOiBib29sZWFuO1xyXG4gICAgc2VsZWN0OiBGdW5jdGlvbjtcclxufSJdfQ==