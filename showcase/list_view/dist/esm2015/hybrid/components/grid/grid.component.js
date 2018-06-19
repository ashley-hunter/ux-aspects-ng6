/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Injector, Input } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
export class GridNg1Component extends UpgradeComponent {
    /**
     * @param {?} elementRef
     * @param {?} injector
     */
    constructor(elementRef, injector) {
        super('grid', elementRef, injector);
        this.source = [];
        this.columns = [];
    }
}
GridNg1Component.decorators = [
    { type: Directive, args: [{
                selector: 'grid'
            },] },
];
/** @nocollapse */
GridNg1Component.ctorParameters = () => [
    { type: ElementRef, },
    { type: Injector, },
];
GridNg1Component.propDecorators = {
    "source": [{ type: Input },],
    "columns": [{ type: Input },],
    "options": [{ type: Input },],
    "events": [{ type: Input },],
    "plugins": [{ type: Input },],
};
function GridNg1Component_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    GridNg1Component.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    GridNg1Component.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    GridNg1Component.propDecorators;
    /** @type {?} */
    GridNg1Component.prototype.source;
    /** @type {?} */
    GridNg1Component.prototype.columns;
    /**
     * The following inputs are undocumented
     * @type {?}
     */
    GridNg1Component.prototype.options;
    /** @type {?} */
    GridNg1Component.prototype.events;
    /** @type {?} */
    GridNg1Component.prototype.plugins;
}
/**
 * @record
 */
export function GridColumn() { }
function GridColumn_tsickle_Closure_declarations() {
    /** @type {?} */
    GridColumn.prototype.title;
    /** @type {?} */
    GridColumn.prototype.template;
    /** @type {?|undefined} */
    GridColumn.prototype.width;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiaHlicmlkL2NvbXBvbmVudHMvZ3JpZC9ncmlkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUszRCxNQUFNLHVCQUF3QixTQUFRLGdCQUFnQjs7Ozs7SUFZbEQsWUFBWSxVQUFzQixFQUFFLFFBQWtCO1FBQ2xELEtBQUssQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO3NCQVhmLEVBQUU7dUJBQ00sRUFBRTtLQVdsQzs7O1lBakJKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsTUFBTTthQUNuQjs7OztZQUxtQixVQUFVO1lBQUUsUUFBUTs7O3VCQVFuQyxLQUFLO3dCQUNMLEtBQUs7d0JBS0wsS0FBSzt1QkFDTCxLQUFLO3dCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEluamVjdG9yLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVcGdyYWRlQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvdXBncmFkZS9zdGF0aWMnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ2dyaWQnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHcmlkTmcxQ29tcG9uZW50IGV4dGVuZHMgVXBncmFkZUNvbXBvbmVudCB7XHJcblxyXG4gICAgQElucHV0KCkgc291cmNlOiBhbnlbXSA9IFtdO1xyXG4gICAgQElucHV0KCkgY29sdW1uczogR3JpZENvbHVtbltdID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgZm9sbG93aW5nIGlucHV0cyBhcmUgdW5kb2N1bWVudGVkXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpIG9wdGlvbnM6IGFueTtcclxuICAgIEBJbnB1dCgpIGV2ZW50czogYW55O1xyXG4gICAgQElucHV0KCkgcGx1Z2luczogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG4gICAgICAgIHN1cGVyKCdncmlkJywgZWxlbWVudFJlZiwgaW5qZWN0b3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdyaWRDb2x1bW4ge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIHRlbXBsYXRlOiBzdHJpbmc7XHJcbiAgICB3aWR0aD86IHN0cmluZztcclxufSJdfQ==