/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Injector, Input, Output, EventEmitter } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
var FlotNg1Component = /** @class */ (function (_super) {
    tslib_1.__extends(FlotNg1Component, _super);
    function FlotNg1Component(elementRef, injector) {
        var _this = _super.call(this, 'uxFlotNg1', elementRef, injector) || this;
        _this.onPlotClick = new EventEmitter();
        _this.onPlotHover = new EventEmitter();
        return _this;
    }
    FlotNg1Component.decorators = [
        { type: Directive, args: [{
                    selector: 'flot'
                },] },
    ];
    /** @nocollapse */
    FlotNg1Component.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Injector, },
    ]; };
    FlotNg1Component.propDecorators = {
        "dataset": [{ type: Input },],
        "options": [{ type: Input },],
        "callback": [{ type: Input },],
        "donutLabels": [{ type: Input },],
        "onPlotClick": [{ type: Output },],
        "onPlotHover": [{ type: Output },],
    };
    return FlotNg1Component;
}(UpgradeComponent));
export { FlotNg1Component };
function FlotNg1Component_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FlotNg1Component.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FlotNg1Component.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    FlotNg1Component.propDecorators;
    /** @type {?} */
    FlotNg1Component.prototype.dataset;
    /** @type {?} */
    FlotNg1Component.prototype.options;
    /** @type {?} */
    FlotNg1Component.prototype.callback;
    /** @type {?} */
    FlotNg1Component.prototype.donutLabels;
    /** @type {?} */
    FlotNg1Component.prototype.onPlotClick;
    /** @type {?} */
    FlotNg1Component.prototype.onPlotHover;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiaHlicmlkL2NvbXBvbmVudHMvZmxvdC9mbG90LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7SUFLckIsNENBQWdCO0lBU2xELDBCQUFZLFVBQXNCLEVBQUUsUUFBa0I7UUFBdEQsWUFDSSxrQkFBTSxXQUFXLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxTQUMzQzs0QkFMdUIsSUFBSSxZQUFZLEVBQU87NEJBQ3ZCLElBQUksWUFBWSxFQUFPOztLQUk5Qzs7Z0JBZEosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFMbUIsVUFBVTtnQkFBRSxRQUFROzs7NEJBUW5DLEtBQUs7NEJBQ0wsS0FBSzs2QkFDTCxLQUFLO2dDQUNMLEtBQUs7Z0NBQ0wsTUFBTTtnQ0FDTixNQUFNOzsyQkFiWDtFQU1zQyxnQkFBZ0I7U0FBekMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbmplY3RvciwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFVwZ3JhZGVDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci91cGdyYWRlL3N0YXRpYyc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnZmxvdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEZsb3ROZzFDb21wb25lbnQgZXh0ZW5kcyBVcGdyYWRlQ29tcG9uZW50IHtcclxuXHJcbiAgICBASW5wdXQoKSBkYXRhc2V0OiBhbnk7XHJcbiAgICBASW5wdXQoKSBvcHRpb25zOiBhbnk7XHJcbiAgICBASW5wdXQoKSBjYWxsYmFjazogYW55O1xyXG4gICAgQElucHV0KCkgZG9udXRMYWJlbHM6IGFueTtcclxuICAgIEBPdXRwdXQoKSBvblBsb3RDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIG9uUGxvdEhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcbiAgICAgICAgc3VwZXIoJ3V4RmxvdE5nMScsIGVsZW1lbnRSZWYsIGluamVjdG9yKTtcclxuICAgIH1cclxufSJdfQ==