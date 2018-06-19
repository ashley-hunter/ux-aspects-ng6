/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { WizardStepComponent } from './wizard-step.component';
export class WizardComponent {
    constructor() {
        this._step = 0;
        this.steps = new QueryList();
        this.orientation = 'horizontal';
        this.nextText = 'Next';
        this.previousText = 'Previous';
        this.cancelText = 'Cancel';
        this.finishText = 'Finish';
        this.nextTooltip = 'Go to the next step';
        this.previousTooltip = 'Go to the previous step';
        this.cancelTooltip = 'Cancel the wizard';
        this.finishTooltip = 'Finish the wizard';
        this.nextDisabled = false;
        this.previousDisabled = false;
        this.cancelDisabled = false;
        this.finishDisabled = false;
        this.nextVisible = true;
        this.previousVisible = true;
        this.cancelVisible = true;
        this.finishVisible = true;
        this.cancelAlwaysVisible = false;
        this.finishAlwaysVisible = false;
        this.onNext = new EventEmitter();
        this.onPrevious = new EventEmitter();
        this.onCancel = new EventEmitter();
        this.onFinishing = new EventEmitter();
        this.onFinish = new EventEmitter();
        this.stepChanging = new EventEmitter();
        this.stepChange = new EventEmitter();
        this.invalidIndicator = false;
    }
    /**
     * @return {?}
     */
    get step() {
        return this._step;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set step(value) {
        // only accept numbers as valid options
        if (typeof value === 'number') {
            // store the active step
            this._step = value;
            // update which steps should be active
            this.update();
            // emit the change event
            this.stepChange.next(this.step);
            // reset the invalid state
            this.invalidIndicator = false;
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // initially set the correct visibility of the steps
        setTimeout(this.update.bind(this));
    }
    /**
     * Navigate to the next step
     * @return {?}
     */
    next() {
        this.stepChanging.next(new StepChangingEvent(this.step, this.step + 1));
        // check if current step is invalid
        if (!this.getCurrentStep().valid) {
            this.invalidIndicator = true;
            return;
        }
        // check if we are currently on the last step
        if ((this.step + 1) < this.steps.length) {
            this.step++;
            // emit the current step
            this.onNext.next(this.step);
        }
    }
    /**
     * Navigate to the previous step
     * @return {?}
     */
    previous() {
        this.stepChanging.next(new StepChangingEvent(this.step, this.step - 1));
        // check if we are currently on the last step
        if (this.step > 0) {
            this.step--;
            // emit the current step
            this.onPrevious.next(this.step);
        }
    }
    /**
     * Perform actions when the finish button is clicked
     * @return {?}
     */
    finish() {
        // fires when the finish button is clicked always
        this.onFinishing.next();
        /**
                 * This is required because we need to ensure change detection has run
                 * to determine whether or not we have the latest value for the 'valid' input
                 * on the current step. Unfortunately we can't use ChangeDetectorRef as we are looking to run
                 * on content children, and we cant use ApplicationRef.tick() as this does not work in a hybrid app, eg. our docs
                 */
        return new Promise(resolve => {
            setTimeout(() => {
                // only fires when the finish button is clicked and the step is valid
                if (this.getCurrentStep().valid) {
                    this.onFinish.next();
                }
                resolve();
            });
        });
    }
    /**
     * Perform actions when the cancel button is clicked
     * @return {?}
     */
    cancel() {
        this.onCancel.next();
    }
    /**
     * Update the active state of each step
     * @return {?}
     */
    update() {
        // update which steps should be active
        this.steps.forEach((step, idx) => step.active = idx === this.step);
    }
    /**
     * Jump to a specific step only if the step has previously been visited
     * @param {?} step
     * @return {?}
     */
    gotoStep(step) {
        if (step.visited) {
            const /** @type {?} */ stepIndex = this.steps.toArray().findIndex(stp => stp === step);
            this.stepChanging.next(new StepChangingEvent(this.step, stepIndex));
            this.step = stepIndex;
        }
    }
    /**
     * Determine if the current step is the last step
     * @return {?}
     */
    isLastStep() {
        return this.step === (this.steps.length - 1);
    }
    /**
     * Reset the wizard - goes to first step and resets visited state
     * @return {?}
     */
    reset() {
        // mark all steps as not visited
        this.steps.forEach(step => step.visited = false);
        // go to the first step
        this.step = 0;
    }
    /**
     * Get the step at the current index
     * @return {?}
     */
    getCurrentStep() {
        return this.getStepAtIndex(this.step);
    }
    /**
     * Return a step at a specific index
     * @param {?} index
     * @return {?}
     */
    getStepAtIndex(index) {
        return this.steps.toArray()[index];
    }
}
WizardComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-wizard',
                template: `<div class="wizard-body">

    <div class="wizard-steps">

        <div class="wizard-step" [class.active]="stp.active" [class.visited]="stp.visited" [class.invalid]="stp.active && !stp.valid && invalidIndicator" (click)="gotoStep(stp)" *ngFor="let stp of steps">
            {{ stp.header }}
        </div>

    </div>

    <div class="wizard-content">
        <ng-content></ng-content>
    </div>

</div>

<div class="wizard-footer">
    <button #tip="ux-tooltip" class="btn button-secondary" *ngIf="previousVisible" [uxTooltip]="previousTooltip" [disabled]="previousDisabled || step === 0"
        (click)="previous(); tip.hide()">{{ previousText }}</button>

    <button #tip="ux-tooltip" class="btn button-primary" *ngIf="nextVisible && !isLastStep()" [uxTooltip]="nextTooltip" [disabled]="nextDisabled"
        (click)="next(); tip.hide()">{{ nextText }}</button>

    <button #tip="ux-tooltip" class="btn button-primary" *ngIf="finishVisible && isLastStep() || finishAlwaysVisible" [uxTooltip]="finishTooltip"
        [disabled]="finishDisabled" (click)="finish(); tip.hide()">{{ finishText }}</button>

    <button #tip="ux-tooltip" class="btn button-secondary" *ngIf="cancelVisible && !isLastStep() || cancelAlwaysVisible" [uxTooltip]="cancelTooltip"
        [disabled]="cancelDisabled" (click)="cancel(); tip.hide()">{{ cancelText }}</button>
</div>`,
                host: {
                    '[class]': 'orientation'
                }
            },] },
];
/** @nocollapse */
WizardComponent.propDecorators = {
    "steps": [{ type: ContentChildren, args: [WizardStepComponent,] },],
    "orientation": [{ type: Input },],
    "nextText": [{ type: Input },],
    "previousText": [{ type: Input },],
    "cancelText": [{ type: Input },],
    "finishText": [{ type: Input },],
    "nextTooltip": [{ type: Input },],
    "previousTooltip": [{ type: Input },],
    "cancelTooltip": [{ type: Input },],
    "finishTooltip": [{ type: Input },],
    "nextDisabled": [{ type: Input },],
    "previousDisabled": [{ type: Input },],
    "cancelDisabled": [{ type: Input },],
    "finishDisabled": [{ type: Input },],
    "nextVisible": [{ type: Input },],
    "previousVisible": [{ type: Input },],
    "cancelVisible": [{ type: Input },],
    "finishVisible": [{ type: Input },],
    "cancelAlwaysVisible": [{ type: Input },],
    "finishAlwaysVisible": [{ type: Input },],
    "onNext": [{ type: Output },],
    "onPrevious": [{ type: Output },],
    "onCancel": [{ type: Output },],
    "onFinishing": [{ type: Output },],
    "onFinish": [{ type: Output },],
    "stepChanging": [{ type: Output },],
    "stepChange": [{ type: Output },],
    "step": [{ type: Input },],
};
function WizardComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    WizardComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    WizardComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    WizardComponent.propDecorators;
    /** @type {?} */
    WizardComponent.prototype._step;
    /** @type {?} */
    WizardComponent.prototype.steps;
    /** @type {?} */
    WizardComponent.prototype.orientation;
    /** @type {?} */
    WizardComponent.prototype.nextText;
    /** @type {?} */
    WizardComponent.prototype.previousText;
    /** @type {?} */
    WizardComponent.prototype.cancelText;
    /** @type {?} */
    WizardComponent.prototype.finishText;
    /** @type {?} */
    WizardComponent.prototype.nextTooltip;
    /** @type {?} */
    WizardComponent.prototype.previousTooltip;
    /** @type {?} */
    WizardComponent.prototype.cancelTooltip;
    /** @type {?} */
    WizardComponent.prototype.finishTooltip;
    /** @type {?} */
    WizardComponent.prototype.nextDisabled;
    /** @type {?} */
    WizardComponent.prototype.previousDisabled;
    /** @type {?} */
    WizardComponent.prototype.cancelDisabled;
    /** @type {?} */
    WizardComponent.prototype.finishDisabled;
    /** @type {?} */
    WizardComponent.prototype.nextVisible;
    /** @type {?} */
    WizardComponent.prototype.previousVisible;
    /** @type {?} */
    WizardComponent.prototype.cancelVisible;
    /** @type {?} */
    WizardComponent.prototype.finishVisible;
    /** @type {?} */
    WizardComponent.prototype.cancelAlwaysVisible;
    /** @type {?} */
    WizardComponent.prototype.finishAlwaysVisible;
    /** @type {?} */
    WizardComponent.prototype.onNext;
    /** @type {?} */
    WizardComponent.prototype.onPrevious;
    /** @type {?} */
    WizardComponent.prototype.onCancel;
    /** @type {?} */
    WizardComponent.prototype.onFinishing;
    /** @type {?} */
    WizardComponent.prototype.onFinish;
    /** @type {?} */
    WizardComponent.prototype.stepChanging;
    /** @type {?} */
    WizardComponent.prototype.stepChange;
    /** @type {?} */
    WizardComponent.prototype.invalidIndicator;
}
export class StepChangingEvent {
    /**
     * @param {?} from
     * @param {?} to
     */
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }
}
function StepChangingEvent_tsickle_Closure_declarations() {
    /** @type {?} */
    StepChangingEvent.prototype.from;
    /** @type {?} */
    StepChangingEvent.prototype.to;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3dpemFyZC93aXphcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xILE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBcUM5RCxNQUFNOztxQkFFc0IsQ0FBQztxQkFFcUIsSUFBSSxTQUFTLEVBQXVCOzJCQUVoQyxZQUFZO3dCQUVsQyxNQUFNOzRCQUNGLFVBQVU7MEJBQ1osUUFBUTswQkFDUixRQUFROzJCQUVQLHFCQUFxQjsrQkFDakIseUJBQXlCOzZCQUMzQixtQkFBbUI7NkJBQ25CLG1CQUFtQjs0QkFFbkIsS0FBSztnQ0FDRCxLQUFLOzhCQUNQLEtBQUs7OEJBQ0wsS0FBSzsyQkFFUixJQUFJOytCQUNBLElBQUk7NkJBQ04sSUFBSTs2QkFDSixJQUFJO21DQUNFLEtBQUs7bUNBQ0wsS0FBSztzQkFFMUIsSUFBSSxZQUFZLEVBQVU7MEJBQ3RCLElBQUksWUFBWSxFQUFVO3dCQUM1QixJQUFJLFlBQVksRUFBUTsyQkFDckIsSUFBSSxZQUFZLEVBQVE7d0JBQzNCLElBQUksWUFBWSxFQUFROzRCQUNwQixJQUFJLFlBQVksRUFBcUI7MEJBQ3ZDLElBQUksWUFBWSxFQUFVO2dDQUVyQixLQUFLOzs7OztRQUc3QixJQUFJO1FBQ0osTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7Ozs7OztJQUV0QixJQUFJLElBQUksQ0FBQyxLQUFhOztRQUdsQixFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDOztZQUc1QixJQUFJLENBQUMsS0FBSyxH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QU07MkJBQ04sTUFBTTtxQkFJTixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZKVixNQUFNOzs7OztJQUNGLFlBQW1CLElBQVksRUFBUyxFQUFVO1FBQS9CLFNBQUksR0FBSixJQUFJLENBQVE7UUFBUyxPQUFFLEdBQUYsRUFBRSxDQUFRO0tBQUs7Q0FDMUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgV2l6YXJkU3RlcENvbXBvbmVudCB9IGZyb20gJy4vd2l6YXJkLXN0ZXAuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd1eC13aXphcmQnLFxyXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwid2l6YXJkLWJvZHlcIj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwid2l6YXJkLXN0ZXBzXCI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3aXphcmQtc3RlcFwiIFtjbGFzcy5hY3RpdmVdPVwic3RwLmFjdGl2ZVwiIFtjbGFzcy52aXNpdGVkXT1cInN0cC52aXNpdGVkXCIgW2NsYXNzLmludmFsaWRdPVwic3RwLmFjdGl2ZSAmJiAhc3RwLnZhbGlkICYmIGludmFsaWRJbmRpY2F0b3JcIiAoY2xpY2spPVwiZ290b1N0ZXAoc3RwKVwiICpuZ0Zvcj1cImxldCBzdHAgb2Ygc3RlcHNcIj5cclxuICAgICAgICAgICAge3sgc3RwLmhlYWRlciB9fVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJ3aXphcmQtY29udGVudFwiPlxyXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgIDwvZGl2PlxyXG5cclxuPC9kaXY+XHJcblxyXG48ZGl2IGNsYXNzPVwid2l6YXJkLWZvb3RlclwiPlxyXG4gICAgPGJ1dHRvbiAjdGlwPVwidXgtdG9vbHRpcFwiIGNsYXNzPVwiYnRuIGJ1dHRvbi1zZWNvbmRhcnlcIiAqbmdJZj1cInByZXZpb3VzVmlzaWJsZVwiIFt1eFRvb2x0aXBdPVwicHJldmlvdXNUb29sdGlwXCIgW2Rpc2FibGVkXT1cInByZXZpb3VzRGlzYWJsZWQgfHwgc3RlcCA9PT0gMFwiXHJcbiAgICAgICAgKGNsaWNrKT1cInByZXZpb3VzKCk7IHRpcC5oaWRlKClcIj57eyBwcmV2aW91c1RleHQgfX08L2J1dHRvbj5cclxuXHJcbiAgICA8YnV0dG9uICN0aXA9XCJ1eC10b29sdGlwXCIgY2xhc3M9XCJidG4gYnV0dG9uLXByaW1hcnlcIiAqbmdJZj1cIm5leHRWaXNpYmxlICYmICFpc0xhc3RTdGVwKClcIiBbdXhUb29sdGlwXT1cIm5leHRUb29sdGlwXCIgW2Rpc2FibGVkXT1cIm5leHREaXNhYmxlZFwiXHJcbiAgICAgICAgKGNsaWNrKT1cIm5leHQoKTsgdGlwLmhpZGUoKVwiPnt7IG5leHRUZXh0IH19PC9idXR0b24+XHJcblxyXG4gICAgPGJ1dHRvbiAjdGlwPVwidXgtdG9vbHRpcFwiIGNsYXNzPVwiYnRuIGJ1dHRvbi1wcmltYXJ5XCIgKm5nSWY9XCJmaW5pc2hWaXNpYmxlICYmIGlzTGFzdFN0ZXAoKSB8fCBmaW5pc2hBbHdheXNWaXNpYmxlXCIgW3V4VG9vbHRpcF09XCJmaW5pc2hUb29sdGlwXCJcclxuICAgICAgICBbZGlzYWJsZWRdPVwiZmluaXNoRGlzYWJsZWRcIiAoY2xpY2spPVwiZmluaXNoKCk7IHRpcC5oaWRlKClcIj57eyBmaW5pc2hUZXh0IH19PC9idXR0b24+XHJcblxyXG4gICAgPGJ1dHRvbiAjdGlwPVwidXgtdG9vbHRpcFwiIGNsYXNzPVwiYnRuIGJ1dHRvbi1zZWNvbmRhcnlcIiAqbmdJZj1cImNhbmNlbFZpc2libGUgJiYgIWlzTGFzdFN0ZXAoKSB8fCBjYW5jZWxBbHdheXNWaXNpYmxlXCIgW3V4VG9vbHRpcF09XCJjYW5jZWxUb29sdGlwXCJcclxuICAgICAgICBbZGlzYWJsZWRdPVwiY2FuY2VsRGlzYWJsZWRcIiAoY2xpY2spPVwiY2FuY2VsKCk7IHRpcC5oaWRlKClcIj57eyBjYW5jZWxUZXh0IH19PC9idXR0b24+XHJcbjwvZGl2PmAsXHJcbiAgICBob3N0OiB7XHJcbiAgICAgICAgJ1tjbGFzc10nOiAnb3JpZW50YXRpb24nXHJcbiAgICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXaXphcmRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgICBwcml2YXRlIF9zdGVwOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIEBDb250ZW50Q2hpbGRyZW4oV2l6YXJkU3RlcENvbXBvbmVudCkgc3RlcHMgPSBuZXcgUXVlcnlMaXN0PFdpemFyZFN0ZXBDb21wb25lbnQ+KCk7XHJcblxyXG4gICAgQElucHV0KCkgb3JpZW50YXRpb246ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCcgPSAnaG9yaXpvbnRhbCc7XHJcblxyXG4gICAgQElucHV0KCkgbmV4dFRleHQ6IHN0cmluZyA9ICdOZXh0JztcclxuICAgIEBJbnB1dCgpIHByZXZpb3VzVGV4dDogc3RyaW5nID0gJ1ByZXZpb3VzJztcclxuICAgIEBJbnB1dCgpIGNhbmNlbFRleHQ6IHN0cmluZyA9ICdDYW5jZWwnO1xyXG4gICAgQElucHV0KCkgZmluaXNoVGV4dDogc3RyaW5nID0gJ0ZpbmlzaCc7XHJcblxyXG4gICAgQElucHV0KCkgbmV4dFRvb2x0aXA6IHN0cmluZyA9ICdHbyB0byB0aGUgbmV4dCBzdGVwJztcclxuICAgIEBJbnB1dCgpIHByZXZpb3VzVG9vbHRpcDogc3RyaW5nID0gJ0dvIHRvIHRoZSBwcmV2aW91cyBzdGVwJztcclxuICAgIEBJbnB1dCgpIGNhbmNlbFRvb2x0aXA6IHN0cmluZyA9ICdDYW5jZWwgdGhlIHdpemFyZCc7XHJcbiAgICBASW5wdXQoKSBmaW5pc2hUb29sdGlwOiBzdHJpbmcgPSAnRmluaXNoIHRoZSB3aXphcmQnO1xyXG5cclxuICAgIEBJbnB1dCgpIG5leHREaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgcHJldmlvdXNEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgY2FuY2VsRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIGZpbmlzaERpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgQElucHV0KCkgbmV4dFZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgQElucHV0KCkgcHJldmlvdXNWaXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgpIGNhbmNlbFZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgQElucHV0KCkgZmluaXNoVmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBjYW5jZWxBbHdheXNWaXNpYmxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBmaW5pc2hBbHdheXNWaXNpYmxlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgQE91dHB1dCgpIG9uTmV4dCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG4gICAgQE91dHB1dCgpIG9uUHJldmlvdXMgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuICAgIEBPdXRwdXQoKSBvbkNhbmNlbCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICAgIEBPdXRwdXQoKSBvbkZpbmlzaGluZyA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICAgIEBPdXRwdXQoKSBvbkZpbmlzaCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICAgIEBPdXRwdXQoKSBzdGVwQ2hhbmdpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPFN0ZXBDaGFuZ2luZ0V2ZW50PigpO1xyXG4gICAgQE91dHB1dCgpIHN0ZXBDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuXHJcbiAgICBpbnZhbGlkSW5kaWNhdG9yOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGdldCBzdGVwKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGVwO1xyXG4gICAgfVxyXG4gICAgc2V0IHN0ZXAodmFsdWU6IG51bWJlcikge1xyXG5cclxuICAgICAgICAvLyBvbmx5IGFjY2VwdCBudW1iZXJzIGFzIHZhbGlkIG9wdGlvbnNcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xyXG5cclxuICAgICAgICAgICAgLy8gc3RvcmUgdGhlIGFjdGl2ZSBzdGVwXHJcbiAgICAgICAgICAgIHRoaXMuX3N0ZXAgPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIHVwZGF0ZSB3aGljaCBzdGVwcyBzaG91bGQgYmUgYWN0aXZlXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBlbWl0IHRoZSBjaGFuZ2UgZXZlbnRcclxuICAgICAgICAgICAgdGhpcy5zdGVwQ2hhbmdlLm5leHQodGhpcy5zdGVwKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHJlc2V0IHRoZSBpbnZhbGlkIHN0YXRlXHJcbiAgICAgICAgICAgIHRoaXMuaW52YWxpZEluZGljYXRvciA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIC8vIGluaXRpYWxseSBzZXQgdGhlIGNvcnJlY3QgdmlzaWJpbGl0eSBvZiB0aGUgc3RlcHNcclxuICAgICAgICBzZXRUaW1lb3V0KHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTmF2aWdhdGUgdG8gdGhlIG5leHQgc3RlcFxyXG4gICAgICovXHJcbiAgICBuZXh0KCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLnN0ZXBDaGFuZ2luZy5uZXh0KG5ldyBTdGVwQ2hhbmdpbmdFdmVudCh0aGlzLnN0ZXAsIHRoaXMuc3RlcCArIDEpKTtcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgaWYgY3VycmVudCBzdGVwIGlzIGludmFsaWRcclxuICAgICAgICBpZiAoIXRoaXMuZ2V0Q3VycmVudFN0ZXAoKS52YWxpZCkge1xyXG4gICAgICAgICAgICB0aGlzLmludmFsaWRJbmRpY2F0b3IgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIHRoZSBsYXN0IHN0ZXBcclxuICAgICAgICBpZiAoKHRoaXMuc3RlcCArIDEpIDwgdGhpcy5zdGVwcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGVwKys7XHJcblxyXG4gICAgICAgICAgICAvLyBlbWl0IHRoZSBjdXJyZW50IHN0ZXBcclxuICAgICAgICAgICAgdGhpcy5vbk5leHQubmV4dCh0aGlzLnN0ZXApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE5hdmlnYXRlIHRvIHRoZSBwcmV2aW91cyBzdGVwXHJcbiAgICAgKi9cclxuICAgIHByZXZpb3VzKCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLnN0ZXBDaGFuZ2luZy5uZXh0KG5ldyBTdGVwQ2hhbmdpbmdFdmVudCh0aGlzLnN0ZXAsIHRoaXMuc3RlcCAtIDEpKTtcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiB0aGUgbGFzdCBzdGVwXHJcbiAgICAgICAgaWYgKHRoaXMuc3RlcCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zdGVwLS07XHJcblxyXG4gICAgICAgICAgICAvLyBlbWl0IHRoZSBjdXJyZW50IHN0ZXBcclxuICAgICAgICAgICAgdGhpcy5vblByZXZpb3VzLm5leHQodGhpcy5zdGVwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQZXJmb3JtIGFjdGlvbnMgd2hlbiB0aGUgZmluaXNoIGJ1dHRvbiBpcyBjbGlja2VkXHJcbiAgICAgKi9cclxuICAgIGZpbmlzaCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuXHJcbiAgICAgICAgLy8gZmlyZXMgd2hlbiB0aGUgZmluaXNoIGJ1dHRvbiBpcyBjbGlja2VkIGFsd2F5c1xyXG4gICAgICAgIHRoaXMub25GaW5pc2hpbmcubmV4dCgpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGlzIGlzIHJlcXVpcmVkIGJlY2F1c2Ugd2UgbmVlZCB0byBlbnN1cmUgY2hhbmdlIGRldGVjdGlvbiBoYXMgcnVuXHJcbiAgICAgICAgICogdG8gZGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IHdlIGhhdmUgdGhlIGxhdGVzdCB2YWx1ZSBmb3IgdGhlICd2YWxpZCcgaW5wdXRcclxuICAgICAgICAgKiBvbiB0aGUgY3VycmVudCBzdGVwLiBVbmZvcnR1bmF0ZWx5IHdlIGNhbid0IHVzZSBDaGFuZ2VEZXRlY3RvclJlZiBhcyB3ZSBhcmUgbG9va2luZyB0byBydW5cclxuICAgICAgICAgKiBvbiBjb250ZW50IGNoaWxkcmVuLCBhbmQgd2UgY2FudCB1c2UgQXBwbGljYXRpb25SZWYudGljaygpIGFzIHRoaXMgZG9lcyBub3Qgd29yayBpbiBhIGh5YnJpZCBhcHAsIGVnLiBvdXIgZG9jc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPihyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gb25seSBmaXJlcyB3aGVuIHRoZSBmaW5pc2ggYnV0dG9uIGlzIGNsaWNrZWQgYW5kIHRoZSBzdGVwIGlzIHZhbGlkXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXRDdXJyZW50U3RlcCgpLnZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkZpbmlzaC5uZXh0KCk7ICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUGVyZm9ybSBhY3Rpb25zIHdoZW4gdGhlIGNhbmNlbCBidXR0b24gaXMgY2xpY2tlZFxyXG4gICAgICovXHJcbiAgICBjYW5jZWwoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vbkNhbmNlbC5uZXh0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgdGhlIGFjdGl2ZSBzdGF0ZSBvZiBlYWNoIHN0ZXBcclxuICAgICAqL1xyXG4gICAgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIHVwZGF0ZSB3aGljaCBzdGVwcyBzaG91bGQgYmUgYWN0aXZlXHJcbiAgICAgICAgdGhpcy5zdGVwcy5mb3JFYWNoKChzdGVwLCBpZHgpID0+IHN0ZXAuYWN0aXZlID0gaWR4ID09PSB0aGlzLnN0ZXApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSnVtcCB0byBhIHNwZWNpZmljIHN0ZXAgb25seSBpZiB0aGUgc3RlcCBoYXMgcHJldmlvdXNseSBiZWVuIHZpc2l0ZWRcclxuICAgICAqL1xyXG4gICAgZ290b1N0ZXAoc3RlcDogV2l6YXJkU3RlcENvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChzdGVwLnZpc2l0ZWQpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN0ZXBJbmRleCA9IHRoaXMuc3RlcHMudG9BcnJheSgpLmZpbmRJbmRleChzdHAgPT4gc3RwID09PSBzdGVwKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3RlcENoYW5naW5nLm5leHQobmV3IFN0ZXBDaGFuZ2luZ0V2ZW50KHRoaXMuc3RlcCwgc3RlcEluZGV4KSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN0ZXAgPSBzdGVwSW5kZXg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGV0ZXJtaW5lIGlmIHRoZSBjdXJyZW50IHN0ZXAgaXMgdGhlIGxhc3Qgc3RlcFxyXG4gICAgICovXHJcbiAgICBpc0xhc3RTdGVwKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0ZXAgPT09ICh0aGlzLnN0ZXBzLmxlbmd0aCAtIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVzZXQgdGhlIHdpemFyZCAtIGdvZXMgdG8gZmlyc3Qgc3RlcCBhbmQgcmVzZXRzIHZpc2l0ZWQgc3RhdGVcclxuICAgICAqL1xyXG4gICAgcmVzZXQoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIC8vIG1hcmsgYWxsIHN0ZXBzIGFzIG5vdCB2aXNpdGVkXHJcbiAgICAgICAgdGhpcy5zdGVwcy5mb3JFYWNoKHN0ZXAgPT4gc3RlcC52aXNpdGVkID0gZmFsc2UpO1xyXG5cclxuICAgICAgICAvLyBnbyB0byB0aGUgZmlyc3Qgc3RlcFxyXG4gICAgICAgIHRoaXMuc3RlcCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHN0ZXAgYXQgdGhlIGN1cnJlbnQgaW5kZXhcclxuICAgICAqL1xyXG4gICAgZ2V0Q3VycmVudFN0ZXAoKTogV2l6YXJkU3RlcENvbXBvbmVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RlcEF0SW5kZXgodGhpcy5zdGVwKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybiBhIHN0ZXAgYXQgYSBzcGVjaWZpYyBpbmRleFxyXG4gICAgICovXHJcbiAgICBnZXRTdGVwQXRJbmRleChpbmRleDogbnVtYmVyKTogV2l6YXJkU3RlcENvbXBvbmVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RlcHMudG9BcnJheSgpW2luZGV4XTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFN0ZXBDaGFuZ2luZ0V2ZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBmcm9tOiBudW1iZXIsIHB1YmxpYyB0bzogbnVtYmVyKSB7IH1cclxufSJdfQ==