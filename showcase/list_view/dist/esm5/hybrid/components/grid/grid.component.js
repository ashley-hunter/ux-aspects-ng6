/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Injector, Input } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
var GridNg1Component = /** @class */ (function (_super) {
    tslib_1.__extends(GridNg1Component, _super);
    function GridNg1Component(elementRef, injector) {
        var _this = _super.call(this, 'grid', elementRef, injector) || this;
        _this.source = [];
        _this.columns = [];
        return _this;
    }
    GridNg1Component.decorators = [
        { type: Directive, args: [{
                    selector: 'grid'
                },] },
    ];
    /** @nocollapse */
    GridNg1Component.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Injector, },
    ]; };
    GridNg1Component.propDecorators = {
        "source": [{ type: Input },],
        "columns": [{ type: Input },],
        "options": [{ type: Input },],
        "events": [{ type: Input },],
        "plugins": [{ type: Input },],
    };
    return GridNg1Component;
}(UpgradeComponent));
export { GridNg1Component };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiaHlicmlkL2NvbXBvbmVudHMvZ3JpZC9ncmlkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUJBQXlCLENBQUM7O0lBS3JCLDRDQUFnQjtJQVlsRCwwQkFBWSxVQUFzQixFQUFFLFFBQWtCO1FBQXRELFlBQ0ksa0JBQU0sTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUMsU0FDdEM7dUJBWndCLEVBQUU7d0JBQ00sRUFBRTs7S0FXbEM7O2dCQWpCSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQUxtQixVQUFVO2dCQUFFLFFBQVE7OzsyQkFRbkMsS0FBSzs0QkFDTCxLQUFLOzRCQUtMLEtBQUs7MkJBQ0wsS0FBSzs0QkFDTCxLQUFLOzsyQkFoQlY7RUFNc0MsZ0JBQWdCO1NBQXpDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5qZWN0b3IsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFVwZ3JhZGVDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci91cGdyYWRlL3N0YXRpYyc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnZ3JpZCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEdyaWROZzFDb21wb25lbnQgZXh0ZW5kcyBVcGdyYWRlQ29tcG9uZW50IHtcclxuXHJcbiAgICBASW5wdXQoKSBzb3VyY2U6IGFueVtdID0gW107XHJcbiAgICBASW5wdXQoKSBjb2x1bW5zOiBHcmlkQ29sdW1uW10gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBmb2xsb3dpbmcgaW5wdXRzIGFyZSB1bmRvY3VtZW50ZWRcclxuICAgICAqL1xyXG4gICAgQElucHV0KCkgb3B0aW9uczogYW55O1xyXG4gICAgQElucHV0KCkgZXZlbnRzOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwbHVnaW5zOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcbiAgICAgICAgc3VwZXIoJ2dyaWQnLCBlbGVtZW50UmVmLCBpbmplY3Rvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR3JpZENvbHVtbiB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgdGVtcGxhdGU6IHN0cmluZztcclxuICAgIHdpZHRoPzogc3RyaW5nO1xyXG59Il19