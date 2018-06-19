/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WizardStepComponent } from '../wizard/index';
import { MarqueeWizardService } from './marquee-wizard.service';
export class MarqueeWizardStepComponent extends WizardStepComponent {
    /**
     * @param {?} _marqueeWizardService
     */
    constructor(_marqueeWizardService) {
        super();
        this._marqueeWizardService = _marqueeWizardService;
        this.completed = false;
        this.completedChange = new EventEmitter();
        this._valid = true;
    }
    /**
     * @return {?}
     */
    get valid() {
        return this._valid;
    }
    /**
     * @param {?} valid
     * @return {?}
     */
    set valid(valid) {
        this._valid = valid;
        if (this._marqueeWizardService) {
            this._marqueeWizardService.valid$.next({ step: this, valid: valid });
        }
    }
    /**
     * Update the completed state and emit the latest value
     * @param {?} completed whether or not the step is completed
     * @return {?}
     */
    setCompleted(completed) {
        this.completed = completed;
        this.completedChange.emit(completed);
    }
}
MarqueeWizardStepComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-marquee-wizard-step',
                template: `<ng-container *ngIf="active">
    <ng-content></ng-content>
</ng-container>`
            },] },
];
/** @nocollapse */
MarqueeWizardStepComponent.ctorParameters = () => [
    { type: MarqueeWizardService, },
];
MarqueeWizardStepComponent.propDecorators = {
    "icon": [{ type: Input },],
    "completed": [{ type: Input },],
    "completedChange": [{ type: Output },],
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFycXVlZS13aXphcmQtc3RlcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9tYXJxdWVlLXdpemFyZC9tYXJxdWVlLXdpemFyZC1zdGVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQVFoRSxNQUFNLGlDQUFrQyxTQUFRLG1CQUFtQjs7OztJQW9CL0QsWUFBb0IscUJBQTJDO1FBQzNELEtBQUssRUFBRSxDQUFDO1FBRFEsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUFzQjt5QkFqQmpDLEtBQUs7K0JBQ1AsSUFBSSxZQUFZLEVBQVc7c0JBYzdCLElBQUk7S0FJN0I7Ozs7SUFoQkQsSUFBSSxLQUFLO1FBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7S0FDdEI7Ozs7O0lBRUQsSUFBSSxLQUFLLENBQUMsS0FBYztRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUVwQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUN4RTtLQUNKOzs7Ozs7SUFZRCxZQUFZLENBQUMsU0FBa0I7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDeEM7OztZQXJDSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsUUFBUSxFQUFFOztnQkFFRTthQUNmOzs7O1lBUFEsb0JBQW9COzs7cUJBVXhCLEtBQUs7MEJBQ0wsS0FBSztnQ0FDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgV2l6YXJkU3RlcENvbXBvbmVudCB9IGZyb20gJy4uL3dpemFyZC9pbmRleCc7XHJcbmltcG9ydCB7IE1hcnF1ZWVXaXphcmRTZXJ2aWNlIH0gZnJvbSAnLi9tYXJxdWVlLXdpemFyZC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd1eC1tYXJxdWVlLXdpemFyZC1zdGVwJyxcclxuICAgIHRlbXBsYXRlOiBgPG5nLWNvbnRhaW5lciAqbmdJZj1cImFjdGl2ZVwiPlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L25nLWNvbnRhaW5lcj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXJxdWVlV2l6YXJkU3RlcENvbXBvbmVudCBleHRlbmRzIFdpemFyZFN0ZXBDb21wb25lbnQge1xyXG5cclxuICAgIEBJbnB1dCgpIGljb246IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGNvbXBsZXRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQE91dHB1dCgpIGNvbXBsZXRlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICAgIFxyXG4gICAgZ2V0IHZhbGlkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92YWxpZDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgdmFsaWQodmFsaWQ6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl92YWxpZCA9IHZhbGlkO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fbWFycXVlZVdpemFyZFNlcnZpY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5fbWFycXVlZVdpemFyZFNlcnZpY2UudmFsaWQkLm5leHQoeyBzdGVwOiB0aGlzLCB2YWxpZDogdmFsaWQgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3ZhbGlkOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tYXJxdWVlV2l6YXJkU2VydmljZTogTWFycXVlZVdpemFyZFNlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIHRoZSBjb21wbGV0ZWQgc3RhdGUgYW5kIGVtaXQgdGhlIGxhdGVzdCB2YWx1ZVxyXG4gICAgICogQHBhcmFtIGNvbXBsZXRlZCB3aGV0aGVyIG9yIG5vdCB0aGUgc3RlcCBpcyBjb21wbGV0ZWRcclxuICAgICAqL1xyXG4gICAgc2V0Q29tcGxldGVkKGNvbXBsZXRlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xyXG4gICAgICAgIHRoaXMuY29tcGxldGVkQ2hhbmdlLmVtaXQoY29tcGxldGVkKTtcclxuICAgIH1cclxufSJdfQ==