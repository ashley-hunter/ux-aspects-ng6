/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WizardStepComponent } from '../wizard/index';
import { MarqueeWizardService } from './marquee-wizard.service';
var MarqueeWizardStepComponent = /** @class */ (function (_super) {
    tslib_1.__extends(MarqueeWizardStepComponent, _super);
    function MarqueeWizardStepComponent(_marqueeWizardService) {
        var _this = _super.call(this) || this;
        _this._marqueeWizardService = _marqueeWizardService;
        _this.completed = false;
        _this.completedChange = new EventEmitter();
        _this._valid = true;
        return _this;
    }
    Object.defineProperty(MarqueeWizardStepComponent.prototype, "valid", {
        get: /**
         * @return {?}
         */
        function () {
            return this._valid;
        },
        set: /**
         * @param {?} valid
         * @return {?}
         */
        function (valid) {
            this._valid = valid;
            if (this._marqueeWizardService) {
                this._marqueeWizardService.valid$.next({ step: this, valid: valid });
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Update the completed state and emit the latest value
     * @param completed whether or not the step is completed
     */
    /**
     * Update the completed state and emit the latest value
     * @param {?} completed whether or not the step is completed
     * @return {?}
     */
    MarqueeWizardStepComponent.prototype.setCompleted = /**
     * Update the completed state and emit the latest value
     * @param {?} completed whether or not the step is completed
     * @return {?}
     */
    function (completed) {
        this.completed = completed;
        this.completedChange.emit(completed);
    };
    MarqueeWizardStepComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-marquee-wizard-step',
                    template: "<ng-container *ngIf=\"active\">\n    <ng-content></ng-content>\n</ng-container>"
                },] },
    ];
    /** @nocollapse */
    MarqueeWizardStepComponent.ctorParameters = function () { return [
        { type: MarqueeWizardService, },
    ]; };
    MarqueeWizardStepComponent.propDecorators = {
        "icon": [{ type: Input },],
        "completed": [{ type: Input },],
        "completedChange": [{ type: Output },],
    };
    return MarqueeWizardStepComponent;
}(WizardStepComponent));
export { MarqueeWizardStepComponent };
function MarqueeWizardStepComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MarqueeWizardStepComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MarqueeWizardStepComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MarqueeWizardStepComponent.propDecorators;
    /** @type {?} */
    MarqueeWizardStepComponent.prototype.icon;
    /** @type {?} */
    MarqueeWizardStepComponent.prototype.completed;
    /** @type {?} */
    MarqueeWizardStepComponent.prototype.completedChange;
    /** @type {?} */
    MarqueeWizardStepComponent.prototype._valid;
    /** @type {?} */
    MarqueeWizardStepComponent.prototype._marqueeWizardService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFycXVlZS13aXphcmQtc3RlcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9tYXJxdWVlLXdpemFyZC9tYXJxdWVlLXdpemFyZC1zdGVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0lBUWhCLHNEQUFtQjtJQW9CL0Qsb0NBQW9CLHFCQUEyQztRQUEvRCxZQUNJLGlCQUFPLFNBQ1Y7UUFGbUIsMkJBQXFCLEdBQXJCLHFCQUFxQixDQUFzQjswQkFqQmpDLEtBQUs7Z0NBQ1AsSUFBSSxZQUFZLEVBQVc7dUJBYzdCLElBQUk7O0tBSTdCO0lBaEJELHNCQUFJLDZDQUFLOzs7O1FBQVQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUN0Qjs7Ozs7UUFFRCxVQUFVLEtBQWM7WUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFFcEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2FBQ3hFO1NBQ0o7OztPQVJBO0lBZ0JEOzs7T0FHRzs7Ozs7O0lBQ0gsaURBQVk7Ozs7O0lBQVosVUFBYSxTQUFrQjtRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUN4Qzs7Z0JBckNKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxRQUFRLEVBQUUsaUZBRUU7aUJBQ2Y7Ozs7Z0JBUFEsb0JBQW9COzs7eUJBVXhCLEtBQUs7OEJBQ0wsS0FBSztvQ0FDTCxNQUFNOztxQ0FkWDtFQVVnRCxtQkFBbUI7U0FBdEQsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgV2l6YXJkU3RlcENvbXBvbmVudCB9IGZyb20gJy4uL3dpemFyZC9pbmRleCc7XHJcbmltcG9ydCB7IE1hcnF1ZWVXaXphcmRTZXJ2aWNlIH0gZnJvbSAnLi9tYXJxdWVlLXdpemFyZC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd1eC1tYXJxdWVlLXdpemFyZC1zdGVwJyxcclxuICAgIHRlbXBsYXRlOiBgPG5nLWNvbnRhaW5lciAqbmdJZj1cImFjdGl2ZVwiPlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L25nLWNvbnRhaW5lcj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXJxdWVlV2l6YXJkU3RlcENvbXBvbmVudCBleHRlbmRzIFdpemFyZFN0ZXBDb21wb25lbnQge1xyXG5cclxuICAgIEBJbnB1dCgpIGljb246IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGNvbXBsZXRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQE91dHB1dCgpIGNvbXBsZXRlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICAgIFxyXG4gICAgZ2V0IHZhbGlkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92YWxpZDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgdmFsaWQodmFsaWQ6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl92YWxpZCA9IHZhbGlkO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fbWFycXVlZVdpemFyZFNlcnZpY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5fbWFycXVlZVdpemFyZFNlcnZpY2UudmFsaWQkLm5leHQoeyBzdGVwOiB0aGlzLCB2YWxpZDogdmFsaWQgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3ZhbGlkOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tYXJxdWVlV2l6YXJkU2VydmljZTogTWFycXVlZVdpemFyZFNlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIHRoZSBjb21wbGV0ZWQgc3RhdGUgYW5kIGVtaXQgdGhlIGxhdGVzdCB2YWx1ZVxyXG4gICAgICogQHBhcmFtIGNvbXBsZXRlZCB3aGV0aGVyIG9yIG5vdCB0aGUgc3RlcCBpcyBjb21wbGV0ZWRcclxuICAgICAqL1xyXG4gICAgc2V0Q29tcGxldGVkKGNvbXBsZXRlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xyXG4gICAgICAgIHRoaXMuY29tcGxldGVkQ2hhbmdlLmVtaXQoY29tcGxldGVkKTtcclxuICAgIH1cclxufSJdfQ==