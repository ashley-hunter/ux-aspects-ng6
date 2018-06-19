/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ContentChildren, Input, QueryList, TemplateRef } from '@angular/core';
import { filter } from 'rxjs/operators';
import { WizardComponent } from '../wizard/index';
import { MarqueeWizardStepComponent } from './marquee-wizard-step.component';
import { MarqueeWizardService } from './marquee-wizard.service';
var MarqueeWizardComponent = /** @class */ (function (_super) {
    tslib_1.__extends(MarqueeWizardComponent, _super);
    function MarqueeWizardComponent(marqueeWizardService) {
        var _this = _super.call(this) || this;
        _this.steps = new QueryList();
        marqueeWizardService.valid$.pipe(filter(function (event) { return !event.valid; })).subscribe(_this.validChange.bind(_this));
        return _this;
    }
    Object.defineProperty(MarqueeWizardComponent.prototype, "isTemplate", {
        get: /**
         * @return {?}
         */
        function () {
            return this.description && this.description instanceof TemplateRef;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * If the current step is valid, mark it as
     * complete and go to the next step
     */
    /**
     * If the current step is valid, mark it as
     * complete and go to the next step
     * @return {?}
     */
    MarqueeWizardComponent.prototype.next = /**
     * If the current step is valid, mark it as
     * complete and go to the next step
     * @return {?}
     */
    function () {
        // get the current step
        var /** @type {?} */ step = /** @type {?} */ (this.getCurrentStep());
        if (step.valid) {
            _super.prototype.next.call(this);
            // mark this step as completed
            step.setCompleted(true);
        }
    };
    /**
     * Emit the onFinishing event and if valid the onFinish event.
     * Also mark the final step as completed if it is valid
     */
    /**
     * Emit the onFinishing event and if valid the onFinish event.
     * Also mark the final step as completed if it is valid
     * @return {?}
     */
    MarqueeWizardComponent.prototype.finish = /**
     * Emit the onFinishing event and if valid the onFinish event.
     * Also mark the final step as completed if it is valid
     * @return {?}
     */
    function () {
        // get the current step
        var /** @type {?} */ step = /** @type {?} */ (this.getCurrentStep());
        // call the original finish function
        return _super.prototype.finish.call(this).then(function () {
            // if the step is valid indicate that it is now complete
            if (step.valid) {
                step.setCompleted(true);
            }
        });
    };
    /**
     * If a step in the wizard becomes invalid, all steps sequentially after
     * it, should become unvisited and incomplete
     */
    /**
     * If a step in the wizard becomes invalid, all steps sequentially after
     * it, should become unvisited and incomplete
     * @param {?} state
     * @return {?}
     */
    MarqueeWizardComponent.prototype.validChange = /**
     * If a step in the wizard becomes invalid, all steps sequentially after
     * it, should become unvisited and incomplete
     * @param {?} state
     * @return {?}
     */
    function (state) {
        var /** @type {?} */ steps = this.steps.toArray();
        var /** @type {?} */ current = steps.findIndex(function (step) { return step === state.step; });
        var /** @type {?} */ affected = steps.slice(current);
        affected.forEach(function (step) {
            // the step should no longer be completed
            step.completed = false;
            // if the step is not the current step then also mark it as unvisited
            if (step !== state.step) {
                step.visited = false;
            }
        });
    };
    MarqueeWizardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-marquee-wizard',
                    template: "<div class=\"marquee-wizard-side-panel\">\n\n    <div class=\"marquee-wizard-description-container\" *ngIf=\"description\">\n        <!-- If a template was provided display it -->\n        <ng-container *ngIf=\"isTemplate\" [ngTemplateOutlet]=\"description\"></ng-container>\n\n        <!-- Otherwise wimply display the string -->\n        <ng-container *ngIf=\"!isTemplate\">\n            <p>{{ description }}</p>\n        </ng-container>\n    </div>\n\n    <ul class=\"marquee-wizard-steps\">\n\n        <li class=\"marquee-wizard-step\" *ngFor=\"let step of steps\" (click)=\"gotoStep(step)\" [class.active]=\"step.active\" [class.visited]=\"step.visited\" [class.invalid]=\"!step.valid\">\n            <i class=\"marquee-wizard-step-icon\" [ngClass]=\"step.icon\"></i>\n            <span class=\"marquee-wizard-step-title\">{{ step.header }}</span>\n            <span class=\"marquee-wizard-step-status hpe-icon hpe-checkmark\" *ngIf=\"step.completed\"></span>\n        </li>\n\n    </ul>\n</div>\n\n<div class=\"marquee-wizard-content-panel\">\n    <div class=\"marquee-wizard-content\">\n        <ng-content></ng-content>\n    </div>\n\n    <div class=\"modal-footer\">\n\n        <button #tip=\"ux-tooltip\" class=\"btn button-secondary\" *ngIf=\"previousVisible\" [uxTooltip]=\"previousTooltip\" container=\"body\"\n            [disabled]=\"previousDisabled || step === 0\" (click)=\"previous(); tip.hide()\">{{ previousText }}</button>\n\n        <button #tip=\"ux-tooltip\" class=\"btn button-primary\" *ngIf=\"nextVisible && !isLastStep()\" [uxTooltip]=\"nextTooltip\" container=\"body\"\n            [disabled]=\"nextDisabled\" (click)=\"next(); tip.hide()\">{{ nextText }}</button>\n\n        <button #tip=\"ux-tooltip\" class=\"btn button-primary\" *ngIf=\"finishVisible && isLastStep() || finishAlwaysVisible\" [uxTooltip]=\"finishTooltip\"\n            container=\"body\" [disabled]=\"finishDisabled\" (click)=\"finish(); tip.hide()\">{{ finishText }}</button>\n\n        <button #tip=\"ux-tooltip\" class=\"btn button-secondary\" *ngIf=\"cancelVisible && !isLastStep() || cancelAlwaysVisible\" [uxTooltip]=\"cancelTooltip\"\n            container=\"body\" [disabled]=\"cancelDisabled\" (click)=\"cancel(); tip.hide()\">{{ cancelText }}</button>\n    </div>\n</div>",
                    providers: [MarqueeWizardService]
                },] },
    ];
    /** @nocollapse */
    MarqueeWizardComponent.ctorParameters = function () { return [
        { type: MarqueeWizardService, },
    ]; };
    MarqueeWizardComponent.propDecorators = {
        "description": [{ type: Input },],
        "steps": [{ type: ContentChildren, args: [MarqueeWizardStepComponent,] },],
    };
    return MarqueeWizardComponent;
}(WizardComponent));
export { MarqueeWizardComponent };
function MarqueeWizardComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MarqueeWizardComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MarqueeWizardComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MarqueeWizardComponent.propDecorators;
    /** @type {?} */
    MarqueeWizardComponent.prototype.description;
    /** @type {?} */
    MarqueeWizardComponent.prototype.steps;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFycXVlZS13aXphcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWFycXVlZS13aXphcmQvbWFycXVlZS13aXphcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsb0JBQW9CLEVBQTJCLE1BQU0sMEJBQTBCLENBQUM7O0lBaUQ3QyxrREFBZTtJQVN2RCxnQ0FBWSxvQkFBMEM7UUFBdEQsWUFDSSxpQkFBTyxTQUtWO3NCQVpvRCxJQUFJLFNBQVMsRUFBOEI7UUFTNUYsb0JBQW9CLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDNUIsTUFBTSxDQUFDLFVBQUMsS0FBOEIsSUFBSyxPQUFBLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBWixDQUFZLENBQUMsQ0FDM0QsQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsQ0FBQzs7S0FDNUM7SUFWRCxzQkFBSSw4Q0FBVTs7OztRQUFkO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsWUFBWSxXQUFXLENBQUM7U0FDdEU7OztPQUFBO0lBVUQ7OztPQUdHOzs7Ozs7SUFDSCxxQ0FBSTs7Ozs7SUFBSjs7UUFHSSxxQkFBTSxJQUFJLHFCQUFHLElBQUksQ0FBQyxjQUFjLEVBQWdDLENBQUEsQ0FBQztRQUVqRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNiLGlCQUFNLElBQUksV0FBRSxDQUFDOztZQUdiLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDM0I7S0FDSjtJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gsdUNBQU07Ozs7O0lBQU47O1FBR0kscUJBQU0sSUFBSSxxQkFBRyxJQUFJLENBQUMsY0FBYyxFQUFnQyxDQUFBLENBQUM7O1FBR2pFLE1BQU0sQ0FBQyxpQkFBTSxNQUFNLFdBQUUsQ0FBQyxJQUFJLENBQUM7O1lBRXZCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDM0I7U0FDSixDQUFDLENBQUM7S0FDTjtJQUVEOzs7T0FHRzs7Ozs7OztJQUNILDRDQUFXOzs7Ozs7SUFBWCxVQUFZLEtBQThCO1FBRXRDLHFCQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ25DLHFCQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxLQUFLLEtBQUssQ0FBQyxJQUFJLEVBQW5CLENBQW1CLENBQUMsQ0FBQztRQUM3RCxxQkFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV0QyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTs7WUFHakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7O1lBR3ZCLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7YUFDeEI7U0FDSixDQUFDLENBQUM7S0FFTjs7Z0JBeEhKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUUsMnVFQTBDUDtvQkFDSCxTQUFTLEVBQUUsQ0FBRSxvQkFBb0IsQ0FBRTtpQkFDdEM7Ozs7Z0JBaERRLG9CQUFvQjs7O2dDQW1EeEIsS0FBSzswQkFDTCxlQUFlLFNBQUMsMEJBQTBCOztpQ0F4RC9DO0VBcUQ0QyxlQUFlO1NBQTlDLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBJbnB1dCwgUXVlcnlMaXN0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFdpemFyZENvbXBvbmVudCB9IGZyb20gJy4uL3dpemFyZC9pbmRleCc7XHJcbmltcG9ydCB7IE1hcnF1ZWVXaXphcmRTdGVwQ29tcG9uZW50IH0gZnJvbSAnLi9tYXJxdWVlLXdpemFyZC1zdGVwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hcnF1ZWVXaXphcmRTZXJ2aWNlLCBNYXJxdWVlV2l6YXJkVmFsaWRFdmVudCB9IGZyb20gJy4vbWFycXVlZS13aXphcmQuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndXgtbWFycXVlZS13aXphcmQnLFxyXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibWFycXVlZS13aXphcmQtc2lkZS1wYW5lbFwiPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJtYXJxdWVlLXdpemFyZC1kZXNjcmlwdGlvbi1jb250YWluZXJcIiAqbmdJZj1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgPCEtLSBJZiBhIHRlbXBsYXRlIHdhcyBwcm92aWRlZCBkaXNwbGF5IGl0IC0tPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc1RlbXBsYXRlXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwiZGVzY3JpcHRpb25cIj48L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgPCEtLSBPdGhlcndpc2Ugd2ltcGx5IGRpc3BsYXkgdGhlIHN0cmluZyAtLT5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWlzVGVtcGxhdGVcIj5cclxuICAgICAgICAgICAgPHA+e3sgZGVzY3JpcHRpb24gfX08L3A+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8dWwgY2xhc3M9XCJtYXJxdWVlLXdpemFyZC1zdGVwc1wiPlxyXG5cclxuICAgICAgICA8bGkgY2xhc3M9XCJtYXJxdWVlLXdpemFyZC1zdGVwXCIgKm5nRm9yPVwibGV0IHN0ZXAgb2Ygc3RlcHNcIiAoY2xpY2spPVwiZ290b1N0ZXAoc3RlcClcIiBbY2xhc3MuYWN0aXZlXT1cInN0ZXAuYWN0aXZlXCIgW2NsYXNzLnZpc2l0ZWRdPVwic3RlcC52aXNpdGVkXCIgW2NsYXNzLmludmFsaWRdPVwiIXN0ZXAudmFsaWRcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJtYXJxdWVlLXdpemFyZC1zdGVwLWljb25cIiBbbmdDbGFzc109XCJzdGVwLmljb25cIj48L2k+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWFycXVlZS13aXphcmQtc3RlcC10aXRsZVwiPnt7IHN0ZXAuaGVhZGVyIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hcnF1ZWUtd2l6YXJkLXN0ZXAtc3RhdHVzIGhwZS1pY29uIGhwZS1jaGVja21hcmtcIiAqbmdJZj1cInN0ZXAuY29tcGxldGVkXCI+PC9zcGFuPlxyXG4gICAgICAgIDwvbGk+XHJcblxyXG4gICAgPC91bD5cclxuPC9kaXY+XHJcblxyXG48ZGl2IGNsYXNzPVwibWFycXVlZS13aXphcmQtY29udGVudC1wYW5lbFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1hcnF1ZWUtd2l6YXJkLWNvbnRlbnRcIj5cclxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XHJcblxyXG4gICAgICAgIDxidXR0b24gI3RpcD1cInV4LXRvb2x0aXBcIiBjbGFzcz1cImJ0biBidXR0b24tc2Vjb25kYXJ5XCIgKm5nSWY9XCJwcmV2aW91c1Zpc2libGVcIiBbdXhUb29sdGlwXT1cInByZXZpb3VzVG9vbHRpcFwiIGNvbnRhaW5lcj1cImJvZHlcIlxyXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwicHJldmlvdXNEaXNhYmxlZCB8fCBzdGVwID09PSAwXCIgKGNsaWNrKT1cInByZXZpb3VzKCk7IHRpcC5oaWRlKClcIj57eyBwcmV2aW91c1RleHQgfX08L2J1dHRvbj5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiAjdGlwPVwidXgtdG9vbHRpcFwiIGNsYXNzPVwiYnRuIGJ1dHRvbi1wcmltYXJ5XCIgKm5nSWY9XCJuZXh0VmlzaWJsZSAmJiAhaXNMYXN0U3RlcCgpXCIgW3V4VG9vbHRpcF09XCJuZXh0VG9vbHRpcFwiIGNvbnRhaW5lcj1cImJvZHlcIlxyXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwibmV4dERpc2FibGVkXCIgKGNsaWNrKT1cIm5leHQoKTsgdGlwLmhpZGUoKVwiPnt7IG5leHRUZXh0IH19PC9idXR0b24+XHJcblxyXG4gICAgICAgIDxidXR0b24gI3RpcD1cInV4LXRvb2x0aXBcIiBjbGFzcz1cImJ0biBidXR0b24tcHJpbWFyeVwiICpuZ0lmPVwiZmluaXNoVmlzaWJsZSAmJiBpc0xhc3RTdGVwKCkgfHwgZmluaXNoQWx3YXlzVmlzaWJsZVwiIFt1eFRvb2x0aXBdPVwiZmluaXNoVG9vbHRpcFwiXHJcbiAgICAgICAgICAgIGNvbnRhaW5lcj1cImJvZHlcIiBbZGlzYWJsZWRdPVwiZmluaXNoRGlzYWJsZWRcIiAoY2xpY2spPVwiZmluaXNoKCk7IHRpcC5oaWRlKClcIj57eyBmaW5pc2hUZXh0IH19PC9idXR0b24+XHJcblxyXG4gICAgICAgIDxidXR0b24gI3RpcD1cInV4LXRvb2x0aXBcIiBjbGFzcz1cImJ0biBidXR0b24tc2Vjb25kYXJ5XCIgKm5nSWY9XCJjYW5jZWxWaXNpYmxlICYmICFpc0xhc3RTdGVwKCkgfHwgY2FuY2VsQWx3YXlzVmlzaWJsZVwiIFt1eFRvb2x0aXBdPVwiY2FuY2VsVG9vbHRpcFwiXHJcbiAgICAgICAgICAgIGNvbnRhaW5lcj1cImJvZHlcIiBbZGlzYWJsZWRdPVwiY2FuY2VsRGlzYWJsZWRcIiAoY2xpY2spPVwiY2FuY2VsKCk7IHRpcC5oaWRlKClcIj57eyBjYW5jZWxUZXh0IH19PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+YCxcclxuICAgIHByb3ZpZGVyczogWyBNYXJxdWVlV2l6YXJkU2VydmljZSBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXJxdWVlV2l6YXJkQ29tcG9uZW50IGV4dGVuZHMgV2l6YXJkQ29tcG9uZW50IHtcclxuXHJcbiAgICBASW5wdXQoKSBkZXNjcmlwdGlvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PjtcclxuICAgIEBDb250ZW50Q2hpbGRyZW4oTWFycXVlZVdpemFyZFN0ZXBDb21wb25lbnQpIHN0ZXBzID0gbmV3IFF1ZXJ5TGlzdDxNYXJxdWVlV2l6YXJkU3RlcENvbXBvbmVudD4oKTtcclxuXHJcbiAgICBnZXQgaXNUZW1wbGF0ZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbiAmJiB0aGlzLmRlc2NyaXB0aW9uIGluc3RhbmNlb2YgVGVtcGxhdGVSZWY7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IobWFycXVlZVdpemFyZFNlcnZpY2U6IE1hcnF1ZWVXaXphcmRTZXJ2aWNlKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgbWFycXVlZVdpemFyZFNlcnZpY2UudmFsaWQkLnBpcGUoXHJcbiAgICAgICAgICAgIGZpbHRlcigoZXZlbnQ6IE1hcnF1ZWVXaXphcmRWYWxpZEV2ZW50KSA9PiAhZXZlbnQudmFsaWQpXHJcbiAgICAgICAgKS5zdWJzY3JpYmUodGhpcy52YWxpZENoYW5nZS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIElmIHRoZSBjdXJyZW50IHN0ZXAgaXMgdmFsaWQsIG1hcmsgaXQgYXNcclxuICAgICAqIGNvbXBsZXRlIGFuZCBnbyB0byB0aGUgbmV4dCBzdGVwXHJcbiAgICAgKi9cclxuICAgIG5leHQoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIC8vIGdldCB0aGUgY3VycmVudCBzdGVwXHJcbiAgICAgICAgY29uc3Qgc3RlcCA9IHRoaXMuZ2V0Q3VycmVudFN0ZXAoKSBhcyBNYXJxdWVlV2l6YXJkU3RlcENvbXBvbmVudDtcclxuXHJcbiAgICAgICAgaWYgKHN0ZXAudmFsaWQpIHtcclxuICAgICAgICAgICAgc3VwZXIubmV4dCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gbWFyayB0aGlzIHN0ZXAgYXMgY29tcGxldGVkXHJcbiAgICAgICAgICAgIHN0ZXAuc2V0Q29tcGxldGVkKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEVtaXQgdGhlIG9uRmluaXNoaW5nIGV2ZW50IGFuZCBpZiB2YWxpZCB0aGUgb25GaW5pc2ggZXZlbnQuXHJcbiAgICAgKiBBbHNvIG1hcmsgdGhlIGZpbmFsIHN0ZXAgYXMgY29tcGxldGVkIGlmIGl0IGlzIHZhbGlkXHJcbiAgICAgKi9cclxuICAgIGZpbmlzaCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuXHJcbiAgICAgICAgLy8gZ2V0IHRoZSBjdXJyZW50IHN0ZXBcclxuICAgICAgICBjb25zdCBzdGVwID0gdGhpcy5nZXRDdXJyZW50U3RlcCgpIGFzIE1hcnF1ZWVXaXphcmRTdGVwQ29tcG9uZW50O1xyXG5cclxuICAgICAgICAvLyBjYWxsIHRoZSBvcmlnaW5hbCBmaW5pc2ggZnVuY3Rpb25cclxuICAgICAgICByZXR1cm4gc3VwZXIuZmluaXNoKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGlmIHRoZSBzdGVwIGlzIHZhbGlkIGluZGljYXRlIHRoYXQgaXQgaXMgbm93IGNvbXBsZXRlXHJcbiAgICAgICAgICAgIGlmIChzdGVwLnZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICBzdGVwLnNldENvbXBsZXRlZCh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSWYgYSBzdGVwIGluIHRoZSB3aXphcmQgYmVjb21lcyBpbnZhbGlkLCBhbGwgc3RlcHMgc2VxdWVudGlhbGx5IGFmdGVyXHJcbiAgICAgKiBpdCwgc2hvdWxkIGJlY29tZSB1bnZpc2l0ZWQgYW5kIGluY29tcGxldGVcclxuICAgICAqL1xyXG4gICAgdmFsaWRDaGFuZ2Uoc3RhdGU6IE1hcnF1ZWVXaXphcmRWYWxpZEV2ZW50KTogdm9pZCB7XHJcblxyXG4gICAgICAgIGNvbnN0IHN0ZXBzID0gdGhpcy5zdGVwcy50b0FycmF5KCk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudCA9IHN0ZXBzLmZpbmRJbmRleChzdGVwID0+IHN0ZXAgPT09IHN0YXRlLnN0ZXApO1xyXG4gICAgICAgIGNvbnN0IGFmZmVjdGVkID0gc3RlcHMuc2xpY2UoY3VycmVudCk7XHJcblxyXG4gICAgICAgIGFmZmVjdGVkLmZvckVhY2goc3RlcCA9PiB7XHJcblxyXG4gICAgICAgICAgICAvLyB0aGUgc3RlcCBzaG91bGQgbm8gbG9uZ2VyIGJlIGNvbXBsZXRlZFxyXG4gICAgICAgICAgICBzdGVwLmNvbXBsZXRlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgLy8gaWYgdGhlIHN0ZXAgaXMgbm90IHRoZSBjdXJyZW50IHN0ZXAgdGhlbiBhbHNvIG1hcmsgaXQgYXMgdW52aXNpdGVkXHJcbiAgICAgICAgICAgIGlmIChzdGVwICE9PSBzdGF0ZS5zdGVwKSB7XHJcbiAgICAgICAgICAgICAgICBzdGVwLnZpc2l0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxufSJdfQ==