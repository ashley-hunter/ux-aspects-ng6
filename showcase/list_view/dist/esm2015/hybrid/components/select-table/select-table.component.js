/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Injector, Input, Output, EventEmitter } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
export class SelectTableNg1Component extends UpgradeComponent {
    /**
     * @param {?} elementRef
     * @param {?} injector
     */
    constructor(elementRef, injector) {
        super('selectTable', elementRef, injector);
        this.selectedChange = new EventEmitter();
    }
}
SelectTableNg1Component.decorators = [
    { type: Directive, args: [{
                selector: 'select-table'
            },] },
];
/** @nocollapse */
SelectTableNg1Component.ctorParameters = () => [
    { type: ElementRef, },
    { type: Injector, },
];
SelectTableNg1Component.propDecorators = {
    "values": [{ type: Input },],
    "multipleSelect": [{ type: Input },],
    "selectKey": [{ type: Input },],
    "selected": [{ type: Input },],
    "searchText": [{ type: Input },],
    "tableHeight": [{ type: Input },],
    "selectHiddenItems": [{ type: Input },],
    "selectedChange": [{ type: Output },],
};
function SelectTableNg1Component_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SelectTableNg1Component.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SelectTableNg1Component.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    SelectTableNg1Component.propDecorators;
    /** @type {?} */
    SelectTableNg1Component.prototype.values;
    /** @type {?} */
    SelectTableNg1Component.prototype.multipleSelect;
    /** @type {?} */
    SelectTableNg1Component.prototype.selectKey;
    /** @type {?} */
    SelectTableNg1Component.prototype.selected;
    /** @type {?} */
    SelectTableNg1Component.prototype.searchText;
    /** @type {?} */
    SelectTableNg1Component.prototype.tableHeight;
    /** @type {?} */
    SelectTableNg1Component.prototype.selectHiddenItems;
    /** @type {?} */
    SelectTableNg1Component.prototype.selectedChange;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJoeWJyaWQvY29tcG9uZW50cy9zZWxlY3QtdGFibGUvc2VsZWN0LXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBSzNELE1BQU0sOEJBQStCLFNBQVEsZ0JBQWdCOzs7OztJQVl6RCxZQUFZLFVBQXNCLEVBQUUsUUFBa0I7UUFDbEQsS0FBSyxDQUFDLGFBQWEsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7OEJBSEUsSUFBSSxZQUFZLEVBQVU7S0FJMUU7OztZQWpCSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGNBQWM7YUFDM0I7Ozs7WUFMbUIsVUFBVTtZQUFFLFFBQVE7Ozt1QkFRbkMsS0FBSzsrQkFDTCxLQUFLOzBCQUNMLEtBQUs7eUJBQ0wsS0FBSzsyQkFDTCxLQUFLOzRCQUNMLEtBQUs7a0NBQ0wsS0FBSzsrQkFFTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbmplY3RvciwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFVwZ3JhZGVDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci91cGdyYWRlL3N0YXRpYyc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnc2VsZWN0LXRhYmxlJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VsZWN0VGFibGVOZzFDb21wb25lbnQgZXh0ZW5kcyBVcGdyYWRlQ29tcG9uZW50IHtcclxuXHJcbiAgICBASW5wdXQoKSB2YWx1ZXM6IGFueVtdO1xyXG4gICAgQElucHV0KCkgbXVsdGlwbGVTZWxlY3Q6IGJvb2xlYW47XHJcbiAgICBASW5wdXQoKSBzZWxlY3RLZXk6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHNlbGVjdGVkOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBzZWFyY2hUZXh0OiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSB0YWJsZUhlaWdodDogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgc2VsZWN0SGlkZGVuSXRlbXM6ICdjbGVhcicgfCAncmVzZWxlY3QnO1xyXG5cclxuICAgIEBPdXRwdXQoKSBzZWxlY3RlZENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuICAgICAgICBzdXBlcignc2VsZWN0VGFibGUnLCBlbGVtZW50UmVmLCBpbmplY3Rvcik7XHJcbiAgICB9XHJcbn0iXX0=