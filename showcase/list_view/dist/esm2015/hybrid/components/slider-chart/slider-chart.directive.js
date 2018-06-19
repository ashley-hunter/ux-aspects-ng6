/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Injector, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export const /** @type {?} */ SLIDER_CHART_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SliderChartNg1Component),
    multi: true
};
export class SliderChartNg1Component extends UpgradeComponent {
    /**
     * @param {?} elementRef
     * @param {?} injector
     */
    constructor(elementRef, injector) {
        super('sliderChart', elementRef, injector);
        this.ngModelChange = new EventEmitter();
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) { }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) { }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) { }
}
SliderChartNg1Component.decorators = [
    { type: Directive, args: [{
                selector: 'slider-chart',
                providers: [SLIDER_CHART_VALUE_ACCESSOR]
            },] },
];
/** @nocollapse */
SliderChartNg1Component.ctorParameters = () => [
    { type: ElementRef, },
    { type: Injector, },
];
SliderChartNg1Component.propDecorators = {
    "sliderOptions": [{ type: Input },],
    "ngModel": [{ type: Input },],
    "chartOptions": [{ type: Input },],
    "chartData": [{ type: Input },],
    "ngModelChange": [{ type: Output },],
};
function SliderChartNg1Component_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SliderChartNg1Component.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SliderChartNg1Component.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    SliderChartNg1Component.propDecorators;
    /** @type {?} */
    SliderChartNg1Component.prototype.sliderOptions;
    /** @type {?} */
    SliderChartNg1Component.prototype.ngModel;
    /** @type {?} */
    SliderChartNg1Component.prototype.chartOptions;
    /** @type {?} */
    SliderChartNg1Component.prototype.chartData;
    /** @type {?} */
    SliderChartNg1Component.prototype.ngModelChange;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLWNoYXJ0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJoeWJyaWQvY29tcG9uZW50cy9zbGlkZXItY2hhcnQvc2xpZGVyLWNoYXJ0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMzRCxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsTUFBTSxDQUFDLHVCQUFNLDJCQUEyQixHQUFRO0lBQzVDLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztJQUN0RCxLQUFLLEVBQUUsSUFBSTtDQUNkLENBQUM7QUFNRixNQUFNLDhCQUErQixTQUFRLGdCQUFnQjs7Ozs7SUFTekQsWUFBWSxVQUFzQixFQUFFLFFBQWtCO1FBQ2xELEtBQUssQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDOzZCQUhGLElBQUksWUFBWSxFQUFPO0tBSW5FOzs7OztJQUVELFVBQVUsQ0FBQyxHQUFRLEtBQVc7Ozs7O0lBRTlCLGdCQUFnQixDQUFDLEVBQU8sS0FBVzs7Ozs7SUFFbkMsaUJBQWlCLENBQUMsRUFBTyxLQUFXOzs7WUFyQnZDLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7YUFDM0M7Ozs7WUFibUIsVUFBVTtZQUFFLFFBQVE7Ozs4QkFnQm5DLEtBQUs7d0JBQ0wsS0FBSzs2QkFDTCxLQUFLOzBCQUNMLEtBQUs7OEJBRUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5qZWN0b3IsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVcGdyYWRlQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvdXBncmFkZS9zdGF0aWMnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5leHBvcnQgY29uc3QgU0xJREVSX0NIQVJUX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XHJcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNsaWRlckNoYXJ0TmcxQ29tcG9uZW50KSxcclxuICAgIG11bHRpOiB0cnVlXHJcbn07XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnc2xpZGVyLWNoYXJ0JyxcclxuICAgIHByb3ZpZGVyczogW1NMSURFUl9DSEFSVF9WQUxVRV9BQ0NFU1NPUl1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNsaWRlckNoYXJ0TmcxQ29tcG9uZW50IGV4dGVuZHMgVXBncmFkZUNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcclxuXHJcbiAgICBASW5wdXQoKSBzbGlkZXJPcHRpb25zOiBhbnk7XHJcbiAgICBASW5wdXQoKSBuZ01vZGVsOiBhbnk7XHJcbiAgICBASW5wdXQoKSBjaGFydE9wdGlvbnM6IGFueTtcclxuICAgIEBJbnB1dCgpIGNoYXJ0RGF0YTogYW55O1xyXG5cclxuICAgIEBPdXRwdXQoKSBuZ01vZGVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG4gICAgICAgIHN1cGVyKCdzbGlkZXJDaGFydCcsIGVsZW1lbnRSZWYsIGluamVjdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICB3cml0ZVZhbHVlKG9iajogYW55KTogdm9pZCB7IH1cclxuXHJcbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHsgfVxyXG5cclxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHsgfVxyXG59Il19