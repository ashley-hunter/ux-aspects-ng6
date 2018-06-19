/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Injector, Input } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
export class HierarchyBarNg1Component extends UpgradeComponent {
    /**
     * @param {?} elementRef
     * @param {?} injector
     */
    constructor(elementRef, injector) {
        super('hierarchyBar', elementRef, injector);
    }
}
HierarchyBarNg1Component.decorators = [
    { type: Directive, args: [{
                selector: 'hierarchy-bar'
            },] },
];
/** @nocollapse */
HierarchyBarNg1Component.ctorParameters = () => [
    { type: ElementRef, },
    { type: Injector, },
];
HierarchyBarNg1Component.propDecorators = {
    "data": [{ type: Input },],
    "options": [{ type: Input },],
    "selectNode": [{ type: Input },],
    "containerClass": [{ type: Input },],
};
function HierarchyBarNg1Component_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    HierarchyBarNg1Component.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    HierarchyBarNg1Component.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    HierarchyBarNg1Component.propDecorators;
    /** @type {?} */
    HierarchyBarNg1Component.prototype.data;
    /** @type {?} */
    HierarchyBarNg1Component.prototype.options;
    /** @type {?} */
    HierarchyBarNg1Component.prototype.selectNode;
    /** @type {?} */
    HierarchyBarNg1Component.prototype.containerClass;
}
/**
 * @record
 */
export function HierarchyBarOptions() { }
function HierarchyBarOptions_tsickle_Closure_declarations() {
    /** @type {?} */
    HierarchyBarOptions.prototype.enabled;
    /** @type {?|undefined} */
    HierarchyBarOptions.prototype.overview;
    /** @type {?} */
    HierarchyBarOptions.prototype.image;
    /** @type {?} */
    HierarchyBarOptions.prototype.valueFormatter;
    /** @type {?|undefined} */
    HierarchyBarOptions.prototype.action;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGllcmFyY2h5LWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiaHlicmlkL2NvbXBvbmVudHMvaGllcmFyY2h5LWJhci9oaWVyYXJjaHktYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUszRCxNQUFNLCtCQUFnQyxTQUFRLGdCQUFnQjs7Ozs7SUFPMUQsWUFBWSxVQUFzQixFQUFFLFFBQWtCO1FBQ2xELEtBQUssQ0FBQyxjQUFjLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBQy9DOzs7WUFaSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGVBQWU7YUFDNUI7Ozs7WUFMbUIsVUFBVTtZQUFFLFFBQVE7OztxQkFRbkMsS0FBSzt3QkFDTCxLQUFLOzJCQUNMLEtBQUs7K0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5qZWN0b3IsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFVwZ3JhZGVDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci91cGdyYWRlL3N0YXRpYyc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnaGllcmFyY2h5LWJhcidcclxufSlcclxuZXhwb3J0IGNsYXNzIEhpZXJhcmNoeUJhck5nMUNvbXBvbmVudCBleHRlbmRzIFVwZ3JhZGVDb21wb25lbnQge1xyXG5cclxuICAgIEBJbnB1dCgpIGRhdGE6IGFueVtdO1xyXG4gICAgQElucHV0KCkgb3B0aW9uczogSGllcmFyY2h5QmFyT3B0aW9ucztcclxuICAgIEBJbnB1dCgpIHNlbGVjdE5vZGU6IGFueTtcclxuICAgIEBJbnB1dCgpIGNvbnRhaW5lckNsYXNzOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcbiAgICAgICAgc3VwZXIoJ2hpZXJhcmNoeUJhcicsIGVsZW1lbnRSZWYsIGluamVjdG9yKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIaWVyYXJjaHlCYXJPcHRpb25zIHtcclxuICAgIGVuYWJsZWQ6IGJvb2xlYW47XHJcbiAgICBvdmVydmlldz86IEZ1bmN0aW9uO1xyXG4gICAgaW1hZ2U6IEZ1bmN0aW9uO1xyXG4gICAgdmFsdWVGb3JtYXR0ZXI6IEZ1bmN0aW9uO1xyXG4gICAgYWN0aW9uPzoge1xyXG4gICAgICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgZXZlbnQ6IEZ1bmN0aW9uO1xyXG4gICAgfTtcclxufSJdfQ==