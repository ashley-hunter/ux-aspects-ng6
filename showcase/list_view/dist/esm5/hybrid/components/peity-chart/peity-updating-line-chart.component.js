/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Injector, Input } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
var PeityUpdatingLineChartNg1Component = /** @class */ (function (_super) {
    tslib_1.__extends(PeityUpdatingLineChartNg1Component, _super);
    function PeityUpdatingLineChartNg1Component(elementRef, injector) {
        return _super.call(this, 'uxPeityUpdatingLineChartNg1', elementRef, injector) || this;
    }
    PeityUpdatingLineChartNg1Component.decorators = [
        { type: Directive, args: [{
                    selector: 'updating-line-chart'
                },] },
    ];
    /** @nocollapse */
    PeityUpdatingLineChartNg1Component.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Injector, },
    ]; };
    PeityUpdatingLineChartNg1Component.propDecorators = {
        "data": [{ type: Input },],
        "options": [{ type: Input },],
        "method": [{ type: Input },],
        "updateinterval": [{ type: Input },],
    };
    return PeityUpdatingLineChartNg1Component;
}(UpgradeComponent));
export { PeityUpdatingLineChartNg1Component };
function PeityUpdatingLineChartNg1Component_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    PeityUpdatingLineChartNg1Component.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    PeityUpdatingLineChartNg1Component.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    PeityUpdatingLineChartNg1Component.propDecorators;
    /** @type {?} */
    PeityUpdatingLineChartNg1Component.prototype.data;
    /** @type {?} */
    PeityUpdatingLineChartNg1Component.prototype.options;
    /** @type {?} */
    PeityUpdatingLineChartNg1Component.prototype.method;
    /** @type {?} */
    PeityUpdatingLineChartNg1Component.prototype.updateinterval;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVpdHktdXBkYXRpbmctbGluZS1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiaHlicmlkL2NvbXBvbmVudHMvcGVpdHktY2hhcnQvcGVpdHktdXBkYXRpbmctbGluZS1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztJQUtILDhEQUFnQjtJQU9wRSw0Q0FBWSxVQUFzQixFQUFFLFFBQWtCO2VBQ2xELGtCQUFNLDZCQUE2QixFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUM7S0FDN0Q7O2dCQVpKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUscUJBQXFCO2lCQUNsQzs7OztnQkFMbUIsVUFBVTtnQkFBRSxRQUFROzs7eUJBUW5DLEtBQUs7NEJBQ0wsS0FBSzsyQkFDTCxLQUFLO21DQUNMLEtBQUs7OzZDQVhWO0VBTXdELGdCQUFnQjtTQUEzRCxrQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEluamVjdG9yLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVcGdyYWRlQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvdXBncmFkZS9zdGF0aWMnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ3VwZGF0aW5nLWxpbmUtY2hhcnQnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZWl0eVVwZGF0aW5nTGluZUNoYXJ0TmcxQ29tcG9uZW50IGV4dGVuZHMgVXBncmFkZUNvbXBvbmVudCB7XHJcblxyXG4gICAgQElucHV0KCkgZGF0YTogYW55O1xyXG4gICAgQElucHV0KCkgb3B0aW9uczogYW55O1xyXG4gICAgQElucHV0KCkgbWV0aG9kOiBhbnk7XHJcbiAgICBASW5wdXQoKSB1cGRhdGVpbnRlcnZhbDogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG4gICAgICAgIHN1cGVyKCd1eFBlaXR5VXBkYXRpbmdMaW5lQ2hhcnROZzEnLCBlbGVtZW50UmVmLCBpbmplY3Rvcik7XHJcbiAgICB9XHJcbn0iXX0=