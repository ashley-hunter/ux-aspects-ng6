/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardModule } from '../wizard/index';
import { MarqueeWizardComponent } from './marquee-wizard.component';
import { MarqueeWizardStepComponent } from './marquee-wizard-step.component';
import { TooltipModule } from '../tooltip/index';
var MarqueeWizardModule = /** @class */ (function () {
    function MarqueeWizardModule() {
    }
    MarqueeWizardModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        WizardModule,
                        TooltipModule
                    ],
                    exports: [
                        MarqueeWizardComponent,
                        MarqueeWizardStepComponent
                    ],
                    declarations: [
                        MarqueeWizardComponent,
                        MarqueeWizardStepComponent
                    ]
                },] },
    ];
    return MarqueeWizardModule;
}());
export { MarqueeWizardModule };
function MarqueeWizardModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MarqueeWizardModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MarqueeWizardModule.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFycXVlZS13aXphcmQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWFycXVlZS13aXphcmQvbWFycXVlZS13aXphcmQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7OztnQkFFaEQsUUFBUSxTQUFDO29CQUNOLE9BQU8sRUFBRTt3QkFDTCxZQUFZO3dCQUNaLFlBQVk7d0JBQ1osYUFBYTtxQkFDaEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLHNCQUFzQjt3QkFDdEIsMEJBQTBCO3FCQUM3QjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1Ysc0JBQXNCO3dCQUN0QiwwQkFBMEI7cUJBQzdCO2lCQUNKOzs4QkF0QkQ7O1NBdUJhLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBXaXphcmRNb2R1bGUgfSBmcm9tICcuLi93aXphcmQvaW5kZXgnO1xyXG5pbXBvcnQgeyBNYXJxdWVlV2l6YXJkQ29tcG9uZW50IH0gZnJvbSAnLi9tYXJxdWVlLXdpemFyZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXJxdWVlV2l6YXJkU3RlcENvbXBvbmVudCB9IGZyb20gJy4vbWFycXVlZS13aXphcmQtc3RlcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUb29sdGlwTW9kdWxlIH0gZnJvbSAnLi4vdG9vbHRpcC9pbmRleCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvbW1vbk1vZHVsZSxcclxuICAgICAgICBXaXphcmRNb2R1bGUsXHJcbiAgICAgICAgVG9vbHRpcE1vZHVsZVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtcclxuICAgICAgICBNYXJxdWVlV2l6YXJkQ29tcG9uZW50LFxyXG4gICAgICAgIE1hcnF1ZWVXaXphcmRTdGVwQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgTWFycXVlZVdpemFyZENvbXBvbmVudCxcclxuICAgICAgICBNYXJxdWVlV2l6YXJkU3RlcENvbXBvbmVudFxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFycXVlZVdpemFyZE1vZHVsZSB7IH1cclxuIl19