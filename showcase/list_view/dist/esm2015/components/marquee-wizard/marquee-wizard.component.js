/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChildren, Input, QueryList, TemplateRef } from '@angular/core';
import { filter } from 'rxjs/operators';
import { WizardComponent } from '../wizard/index';
import { MarqueeWizardStepComponent } from './marquee-wizard-step.component';
import { MarqueeWizardService } from './marquee-wizard.service';
export class MarqueeWizardComponent extends WizardComponent {
    /**
     * @param {?} marqueeWizardService
     */
    constructor(marqueeWizardService) {
        super();
        this.steps = new QueryList();
        marqueeWizardService.valid$.pipe(filter((event) => !event.valid)).subscribe(this.validChange.bind(this));
    }
    /**
     * @return {?}
     */
    get isTemplate() {
        return this.description && this.description instanceof TemplateRef;
    }
    /**
     * If the current step is valid, mark it as
     * complete and go to the next step
     * @return {?}
     */
    next() {
        // get the current step
        const /** @type {?} */ step = /** @type {?} */ (this.getCurrentStep());
        if (step.valid) {
            super.next();
            // mark this step as completed
            step.setCompleted(true);
        }
    }
    /**
     * Emit the onFinishing event and if valid the onFinish event.
     * Also mark the final step as completed if it is valid
     * @return {?}
     */
    finish() {
        // get the current step
        const /** @type {?} */ step = /** @type {?} */ (this.getCurrentStep());
        // call the original finish function
        return super.finish().then(() => {
            // if the step is valid indicate that it is now complete
            if (step.valid) {
                step.setCompleted(true);
            }
        });
    }
    /**
     * If a step in the wizard becomes invalid, all steps sequentially after
     * it, should become unvisited and incomplete
     * @param {?} state
     * @return {?}
     */
    validChange(state) {
        const /** @type {?} */ steps = this.steps.toArray();
        const /** @type {?} */ current = steps.findIndex(step => step === state.step);
        const /** @type {?} */ affected = steps.slice(current);
        affected.forEach(step => {
            // the step should no longer be completed
            step.completed = false;
            // if the step is not the current step then also mark it as unvisited
            if (step !== state.step) {
                step.visited = false;
            }
        });
    }
}
MarqueeWizardComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-marquee-wizard',
                template: `<div class="marquee-wizard-side-panel">

    <div class="marquee-wizard-description-container" *ngIf="description">
        <!-- If a template was provided display it -->
        <ng-container *ngIf="isTemplate" [ngTemplateOutlet]="description"></ng-container>

        <!-- Otherwise wimply display the string -->
        <ng-container *ngIf="!isTemplate">
            <p>{{ description }}</p>
        </ng-container>
    </div>

    <ul class="marquee-wizard-steps">

        <li class="marquee-wizard-step" *ngFor="let step of steps" (click)="gotoStep(step)" [class.active]="step.active" [class.visited]="step.visited" [class.invalid]="!step.valid">
            <i class="marquee-wizard-step-icon" [ngClass]="step.icon"></i>
            <span class="marquee-wizard-step-title">{{ step.header }}</span>
            <span class="marquee-wizard-step-status hpe-icon hpe-checkmark" *ngIf="step.completed"></span>
        </li>

    </ul>
</div>

<div class="marquee-wizard-content-panel">
    <div class="marquee-wizard-content">
        <ng-content></ng-content>
    </div>

    <div class="modal-footer">

        <button #tip="ux-tooltip" class="btn button-secondary" *ngIf="previousVisible" [uxTooltip]="previousTooltip" container="body"
            [disabled]="previousDisabled || step === 0" (click)="previous(); tip.hide()">{{ previousText }}</button>

        <button #tip="ux-tooltip" class="btn button-primary" *ngIf="nextVisible && !isLastStep()" [uxTooltip]="nextTooltip" container="body"
            [disabled]="nextDisabled" (click)="next(); tip.hide()">{{ nextText }}</button>

        <button #tip="ux-tooltip" class="btn button-primary" *ngIf="finishVisible && isLastStep() || finishAlwaysVisible" [uxTooltip]="finishTooltip"
            container="body" [disabled]="finishDisabled" (click)="finish(); tip.hide()">{{ finishText }}</button>

        <button #tip="ux-tooltip" class="btn button-secondary" *ngIf="cancelVisible && !isLastStep() || cancelAlwaysVisible" [uxTooltip]="cancelTooltip"
            container="body" [disabled]="cancelDisabled" (click)="cancel(); tip.hide()">{{ cancelText }}</button>
    </div>
</div>`,
                providers: [MarqueeWizardService]
            },] },
];
/** @nocollapse */
MarqueeWizardComponent.ctorParameters = () => [
    { type: MarqueeWizardService, },
];
MarqueeWizardComponent.propDecorators = {
    "description": [{ type: Input },],
    "steps": [{ type: ContentChildren, args: [MarqueeWizardStepComponent,] },],
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFycXVlZS13aXphcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWFycXVlZS13aXphcmQvbWFycXVlZS13aXphcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2xELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxvQkFBb0IsRUFBMkIsTUFBTSwwQkFBMEIsQ0FBQztBQWlEekYsTUFBTSw2QkFBOEIsU0FBUSxlQUFlOzs7O0lBU3ZELFlBQVksb0JBQTBDO1FBQ2xELEtBQUssRUFBRSxDQUFDO3FCQVB5QyxJQUFJLFNBQVMsRUFBOEI7UUFTNUYsb0JBQW9CLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDNUIsTUFBTSxDQUFDLENBQUMsS0FBOEIsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQzNELENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7S0FDNUM7Ozs7SUFWRCxJQUFJLFVBQVU7UUFDVixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxZQUFZLFdBQVcsQ0FBQztLQUN0RTs7Ozs7O0lBY0QsSUFBSTs7UUFHQSx1QkFBTSxJQUFJLHFCQUFHLElBQUksQ0FBQyxjQUFjLEVBQWdDLENBQUEsQ0FBQztRQUVqRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNiLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7WUFHYixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzNCO0tBQ0o7Ozs7OztJQU1ELE1BQU07O1FBR0YsdUJBQU0sSUFBSSxxQkFBRyxJQUFJLENBQUMsY0FBYyxFQUFnQyxDQUFBLENBQUM7O1FBR2pFLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTs7WUFFNUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMzQjtTQUNKLENBQUMsQ0FBQztLQUNOOzs7Ozs7O0lBTUQsV0FBVyxDQUFDLEtBQThCO1FBRXRDLHVCQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ25DLHVCQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3RCx1QkFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV0QyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFOztZQUdwQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzs7WUFHdkIsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzthQUN4QjtTQUNKLENBQUMsQ0FBQztLQUVOOzs7WUF4SEosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BMENQO2dCQUNILFNBQVMsRUFBRSxDQUFFLG9CQUFvQixDQUFFO2FBQ3RDOzs7O1lBaERRLG9CQUFvQjs7OzRCQW1EeEIsS0FBSztzQkFDTCxlQUFlLFNBQUMsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIElucHV0LCBRdWVyeUxpc3QsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgV2l6YXJkQ29tcG9uZW50IH0gZnJvbSAnLi4vd2l6YXJkL2luZGV4JztcclxuaW1wb3J0IHsgTWFycXVlZVdpemFyZFN0ZXBDb21wb25lbnQgfSBmcm9tICcuL21hcnF1ZWUtd2l6YXJkLXN0ZXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWFycXVlZVdpemFyZFNlcnZpY2UsIE1hcnF1ZWVXaXphcmRWYWxpZEV2ZW50IH0gZnJvbSAnLi9tYXJxdWVlLXdpemFyZC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd1eC1tYXJxdWVlLXdpemFyZCcsXHJcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJtYXJxdWVlLXdpemFyZC1zaWRlLXBhbmVsXCI+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cIm1hcnF1ZWUtd2l6YXJkLWRlc2NyaXB0aW9uLWNvbnRhaW5lclwiICpuZ0lmPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICA8IS0tIElmIGEgdGVtcGxhdGUgd2FzIHByb3ZpZGVkIGRpc3BsYXkgaXQgLS0+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzVGVtcGxhdGVcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJkZXNjcmlwdGlvblwiPjwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICA8IS0tIE90aGVyd2lzZSB3aW1wbHkgZGlzcGxheSB0aGUgc3RyaW5nIC0tPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNUZW1wbGF0ZVwiPlxyXG4gICAgICAgICAgICA8cD57eyBkZXNjcmlwdGlvbiB9fTwvcD5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDx1bCBjbGFzcz1cIm1hcnF1ZWUtd2l6YXJkLXN0ZXBzXCI+XHJcblxyXG4gICAgICAgIDxsaSBjbGFzcz1cIm1hcnF1ZWUtd2l6YXJkLXN0ZXBcIiAqbmdGb3I9XCJsZXQgc3RlcCBvZiBzdGVwc1wiIChjbGljayk9XCJnb3RvU3RlcChzdGVwKVwiIFtjbGFzcy5hY3RpdmVdPVwic3RlcC5hY3RpdmVcIiBbY2xhc3MudmlzaXRlZF09XCJzdGVwLnZpc2l0ZWRcIiBbY2xhc3MuaW52YWxpZF09XCIhc3RlcC52YWxpZFwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cIm1hcnF1ZWUtd2l6YXJkLXN0ZXAtaWNvblwiIFtuZ0NsYXNzXT1cInN0ZXAuaWNvblwiPjwvaT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXJxdWVlLXdpemFyZC1zdGVwLXRpdGxlXCI+e3sgc3RlcC5oZWFkZXIgfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWFycXVlZS13aXphcmQtc3RlcC1zdGF0dXMgaHBlLWljb24gaHBlLWNoZWNrbWFya1wiICpuZ0lmPVwic3RlcC5jb21wbGV0ZWRcIj48L3NwYW4+XHJcbiAgICAgICAgPC9saT5cclxuXHJcbiAgICA8L3VsPlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJtYXJxdWVlLXdpemFyZC1jb250ZW50LXBhbmVsXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWFycXVlZS13aXphcmQtY29udGVudFwiPlxyXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiAjdGlwPVwidXgtdG9vbHRpcFwiIGNsYXNzPVwiYnRuIGJ1dHRvbi1zZWNvbmRhcnlcIiAqbmdJZj1cInByZXZpb3VzVmlzaWJsZVwiIFt1eFRvb2x0aXBdPVwicHJldmlvdXNUb29sdGlwXCIgY29udGFpbmVyPVwiYm9keVwiXHJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJwcmV2aW91c0Rpc2FibGVkIHx8IHN0ZXAgPT09IDBcIiAoY2xpY2spPVwicHJldmlvdXMoKTsgdGlwLmhpZGUoKVwiPnt7IHByZXZpb3VzVGV4dCB9fTwvYnV0dG9uPlxyXG5cclxuICAgICAgICA8YnV0dG9uICN0aXA9XCJ1eC10b29sdGlwXCIgY2xhc3M9XCJidG4gYnV0dG9uLXByaW1hcnlcIiAqbmdJZj1cIm5leHRWaXNpYmxlICYmICFpc0xhc3RTdGVwKClcIiBbdXhUb29sdGlwXT1cIm5leHRUb29sdGlwXCIgY29udGFpbmVyPVwiYm9keVwiXHJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJuZXh0RGlzYWJsZWRcIiAoY2xpY2spPVwibmV4dCgpOyB0aXAuaGlkZSgpXCI+e3sgbmV4dFRleHQgfX08L2J1dHRvbj5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiAjdGlwPVwidXgtdG9vbHRpcFwiIGNsYXNzPVwiYnRuIGJ1dHRvbi1wcmltYXJ5XCIgKm5nSWY9XCJmaW5pc2hWaXNpYmxlICYmIGlzTGFzdFN0ZXAoKSB8fCBmaW5pc2hBbHdheXNWaXNpYmxlXCIgW3V4VG9vbHRpcF09XCJmaW5pc2hUb29sdGlwXCJcclxuICAgICAgICAgICAgY29udGFpbmVyPVwiYm9keVwiIFtkaXNhYmxlZF09XCJmaW5pc2hEaXNhYmxlZFwiIChjbGljayk9XCJmaW5pc2goKTsgdGlwLmhpZGUoKVwiPnt7IGZpbmlzaFRleHQgfX08L2J1dHRvbj5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiAjdGlwPVwidXgtdG9vbHRpcFwiIGNsYXNzPVwiYnRuIGJ1dHRvbi1zZWNvbmRhcnlcIiAqbmdJZj1cImNhbmNlbFZpc2libGUgJiYgIWlzTGFzdFN0ZXAoKSB8fCBjYW5jZWxBbHdheXNWaXNpYmxlXCIgW3V4VG9vbHRpcF09XCJjYW5jZWxUb29sdGlwXCJcclxuICAgICAgICAgICAgY29udGFpbmVyPVwiYm9keVwiIFtkaXNhYmxlZF09XCJjYW5jZWxEaXNhYmxlZFwiIChjbGljayk9XCJjYW5jZWwoKTsgdGlwLmhpZGUoKVwiPnt7IGNhbmNlbFRleHQgfX08L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5gLFxyXG4gICAgcHJvdmlkZXJzOiBbIE1hcnF1ZWVXaXphcmRTZXJ2aWNlIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1hcnF1ZWVXaXphcmRDb21wb25lbnQgZXh0ZW5kcyBXaXphcmRDb21wb25lbnQge1xyXG5cclxuICAgIEBJbnB1dCgpIGRlc2NyaXB0aW9uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gICAgQENvbnRlbnRDaGlsZHJlbihNYXJxdWVlV2l6YXJkU3RlcENvbXBvbmVudCkgc3RlcHMgPSBuZXcgUXVlcnlMaXN0PE1hcnF1ZWVXaXphcmRTdGVwQ29tcG9uZW50PigpO1xyXG5cclxuICAgIGdldCBpc1RlbXBsYXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uICYmIHRoaXMuZGVzY3JpcHRpb24gaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtYXJxdWVlV2l6YXJkU2VydmljZTogTWFycXVlZVdpemFyZFNlcnZpY2UpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICBtYXJxdWVlV2l6YXJkU2VydmljZS52YWxpZCQucGlwZShcclxuICAgICAgICAgICAgZmlsdGVyKChldmVudDogTWFycXVlZVdpemFyZFZhbGlkRXZlbnQpID0+ICFldmVudC52YWxpZClcclxuICAgICAgICApLnN1YnNjcmliZSh0aGlzLnZhbGlkQ2hhbmdlLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSWYgdGhlIGN1cnJlbnQgc3RlcCBpcyB2YWxpZCwgbWFyayBpdCBhc1xyXG4gICAgICogY29tcGxldGUgYW5kIGdvIHRvIHRoZSBuZXh0IHN0ZXBcclxuICAgICAqL1xyXG4gICAgbmV4dCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gZ2V0IHRoZSBjdXJyZW50IHN0ZXBcclxuICAgICAgICBjb25zdCBzdGVwID0gdGhpcy5nZXRDdXJyZW50U3RlcCgpIGFzIE1hcnF1ZWVXaXphcmRTdGVwQ29tcG9uZW50O1xyXG5cclxuICAgICAgICBpZiAoc3RlcC52YWxpZCkge1xyXG4gICAgICAgICAgICBzdXBlci5uZXh0KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBtYXJrIHRoaXMgc3RlcCBhcyBjb21wbGV0ZWRcclxuICAgICAgICAgICAgc3RlcC5zZXRDb21wbGV0ZWQodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRW1pdCB0aGUgb25GaW5pc2hpbmcgZXZlbnQgYW5kIGlmIHZhbGlkIHRoZSBvbkZpbmlzaCBldmVudC5cclxuICAgICAqIEFsc28gbWFyayB0aGUgZmluYWwgc3RlcCBhcyBjb21wbGV0ZWQgaWYgaXQgaXMgdmFsaWRcclxuICAgICAqL1xyXG4gICAgZmluaXNoKCk6IFByb21pc2U8dm9pZD4ge1xyXG5cclxuICAgICAgICAvLyBnZXQgdGhlIGN1cnJlbnQgc3RlcFxyXG4gICAgICAgIGNvbnN0IHN0ZXAgPSB0aGlzLmdldEN1cnJlbnRTdGVwKCkgYXMgTWFycXVlZVdpemFyZFN0ZXBDb21wb25lbnQ7XHJcblxyXG4gICAgICAgIC8vIGNhbGwgdGhlIG9yaWdpbmFsIGZpbmlzaCBmdW5jdGlvblxyXG4gICAgICAgIHJldHVybiBzdXBlci5maW5pc2goKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gaWYgdGhlIHN0ZXAgaXMgdmFsaWQgaW5kaWNhdGUgdGhhdCBpdCBpcyBub3cgY29tcGxldGVcclxuICAgICAgICAgICAgaWYgKHN0ZXAudmFsaWQpIHtcclxuICAgICAgICAgICAgICAgIHN0ZXAuc2V0Q29tcGxldGVkKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJZiBhIHN0ZXAgaW4gdGhlIHdpemFyZCBiZWNvbWVzIGludmFsaWQsIGFsbCBzdGVwcyBzZXF1ZW50aWFsbHkgYWZ0ZXJcclxuICAgICAqIGl0LCBzaG91bGQgYmVjb21lIHVudmlzaXRlZCBhbmQgaW5jb21wbGV0ZVxyXG4gICAgICovXHJcbiAgICB2YWxpZENoYW5nZShzdGF0ZTogTWFycXVlZVdpemFyZFZhbGlkRXZlbnQpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgY29uc3Qgc3RlcHMgPSB0aGlzLnN0ZXBzLnRvQXJyYXkoKTtcclxuICAgICAgICBjb25zdCBjdXJyZW50ID0gc3RlcHMuZmluZEluZGV4KHN0ZXAgPT4gc3RlcCA9PT0gc3RhdGUuc3RlcCk7XHJcbiAgICAgICAgY29uc3QgYWZmZWN0ZWQgPSBzdGVwcy5zbGljZShjdXJyZW50KTtcclxuXHJcbiAgICAgICAgYWZmZWN0ZWQuZm9yRWFjaChzdGVwID0+IHtcclxuXHJcbiAgICAgICAgICAgIC8vIHRoZSBzdGVwIHNob3VsZCBubyBsb25nZXIgYmUgY29tcGxldGVkXHJcbiAgICAgICAgICAgIHN0ZXAuY29tcGxldGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiB0aGUgc3RlcCBpcyBub3QgdGhlIGN1cnJlbnQgc3RlcCB0aGVuIGFsc28gbWFyayBpdCBhcyB1bnZpc2l0ZWRcclxuICAgICAgICAgICAgaWYgKHN0ZXAgIT09IHN0YXRlLnN0ZXApIHtcclxuICAgICAgICAgICAgICAgIHN0ZXAudmlzaXRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG59Il19