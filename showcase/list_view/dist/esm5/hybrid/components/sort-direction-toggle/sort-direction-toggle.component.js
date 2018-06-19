/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Injector, Input } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
var SortDirectionToggleNg1Component = /** @class */ (function (_super) {
    tslib_1.__extends(SortDirectionToggleNg1Component, _super);
    function SortDirectionToggleNg1Component(elementRef, injector) {
        return _super.call(this, 'sortDirectionToggle', elementRef, injector) || this;
    }
    SortDirectionToggleNg1Component.decorators = [
        { type: Directive, args: [{
                    selector: 'sort-direction-toggle'
                },] },
    ];
    /** @nocollapse */
    SortDirectionToggleNg1Component.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Injector, },
    ]; };
    SortDirectionToggleNg1Component.propDecorators = {
        "label": [{ type: Input },],
        "sorters": [{ type: Input },],
        "descend": [{ type: Input },],
    };
    return SortDirectionToggleNg1Component;
}(UpgradeComponent));
export { SortDirectionToggleNg1Component };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1kaXJlY3Rpb24tdG9nZ2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJoeWJyaWQvY29tcG9uZW50cy9zb3J0LWRpcmVjdGlvbi10b2dnbGUvc29ydC1kaXJlY3Rpb24tdG9nZ2xlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUJBQXlCLENBQUM7O0lBS04sMkRBQWdCO0lBTWpFLHlDQUFZLFVBQXNCLEVBQUUsUUFBa0I7ZUFDbEQsa0JBQU0scUJBQXFCLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQztLQUNyRDs7Z0JBWEosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSx1QkFBdUI7aUJBQ3BDOzs7O2dCQUxtQixVQUFVO2dCQUFFLFFBQVE7OzswQkFRbkMsS0FBSzs0QkFDTCxLQUFLOzRCQUNMLEtBQUs7OzBDQVZWO0VBTXFELGdCQUFnQjtTQUF4RCwrQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEluamVjdG9yLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVcGdyYWRlQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvdXBncmFkZS9zdGF0aWMnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ3NvcnQtZGlyZWN0aW9uLXRvZ2dsZSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNvcnREaXJlY3Rpb25Ub2dnbGVOZzFDb21wb25lbnQgZXh0ZW5kcyBVcGdyYWRlQ29tcG9uZW50IHtcclxuXHJcbiAgICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgc29ydGVyczogU29ydERpcmVjdGlvblRvZ2dsZVNvcnRlcltdO1xyXG4gICAgQElucHV0KCkgZGVzY2VuZDogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuICAgICAgICBzdXBlcignc29ydERpcmVjdGlvblRvZ2dsZScsIGVsZW1lbnRSZWYsIGluamVjdG9yKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTb3J0RGlyZWN0aW9uVG9nZ2xlU29ydGVyIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHNvcnQ6IHN0cmluZztcclxuICAgIGRlZmF1bHRTb3J0ZXI6IGJvb2xlYW47XHJcbiAgICBzZWxlY3Q6IEZ1bmN0aW9uO1xyXG59Il19