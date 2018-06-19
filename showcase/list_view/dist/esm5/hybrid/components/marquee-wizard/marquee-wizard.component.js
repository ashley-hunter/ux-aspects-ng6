/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Injector, Input, Output, EventEmitter } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
var MarqueeWizardNg1Component = /** @class */ (function (_super) {
    tslib_1.__extends(MarqueeWizardNg1Component, _super);
    function MarqueeWizardNg1Component(elementRef, injector) {
        var _this = _super.call(this, 'marqueeWizard', elementRef, injector) || this;
        _this.wizardStepsChange = new EventEmitter();
        return _this;
    }
    MarqueeWizardNg1Component.decorators = [
        { type: Directive, args: [{
                    selector: 'marquee-wizard'
                },] },
    ];
    /** @nocollapse */
    MarqueeWizardNg1Component.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Injector, },
    ]; };
    MarqueeWizardNg1Component.propDecorators = {
        "wizardIcon": [{ type: Input },],
        "wizardSteps": [{ type: Input },],
        "buttonOptions": [{ type: Input },],
        "onChanging": [{ type: Input },],
        "onFinished": [{ type: Input },],
        "onFinishing": [{ type: Input },],
        "onCanceled": [{ type: Input },],
        "isVisited": [{ type: Input },],
        "sideInfo": [{ type: Input },],
        "wizardStepsChange": [{ type: Output },],
    };
    return MarqueeWizardNg1Component;
}(UpgradeComponent));
export { MarqueeWizardNg1Component };
function MarqueeWizardNg1Component_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MarqueeWizardNg1Component.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MarqueeWizardNg1Component.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MarqueeWizardNg1Component.propDecorators;
    /** @type {?} */
    MarqueeWizardNg1Component.prototype.wizardIcon;
    /** @type {?} */
    MarqueeWizardNg1Component.prototype.wizardSteps;
    /** @type {?} */
    MarqueeWizardNg1Component.prototype.buttonOptions;
    /** @type {?} */
    MarqueeWizardNg1Component.prototype.onChanging;
    /** @type {?} */
    MarqueeWizardNg1Component.prototype.onFinished;
    /** @type {?} */
    MarqueeWizardNg1Component.prototype.onFinishing;
    /** @type {?} */
    MarqueeWizardNg1Component.prototype.onCanceled;
    /** @type {?} */
    MarqueeWizardNg1Component.prototype.isVisited;
    /** @type {?} */
    MarqueeWizardNg1Component.prototype.sideInfo;
    /** @type {?} */
    MarqueeWizardNg1Component.prototype.wizardStepsChange;
}
/**
 * @record
 */
export function MarqueeWizardStep() { }
function MarqueeWizardStep_tsickle_Closure_declarations() {
    /** @type {?} */
    MarqueeWizardStep.prototype.title;
    /** @type {?|undefined} */
    MarqueeWizardStep.prototype.html;
    /** @type {?|undefined} */
    MarqueeWizardStep.prototype.header;
    /** @type {?|undefined} */
    MarqueeWizardStep.prototype.templateUrl;
    /** @type {?|undefined} */
    MarqueeWizardStep.prototype.hidden;
    /** @type {?|undefined} */
    MarqueeWizardStep.prototype.error;
    /** @type {?|undefined} */
    MarqueeWizardStep.prototype.completed;
    /** @type {?|undefined} */
    MarqueeWizardStep.prototype.visited;
}
/**
 * @record
 */
export function MarqueeWizardOptions() { }
function MarqueeWizardOptions_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    MarqueeWizardOptions.prototype.nextText;
    /** @type {?|undefined} */
    MarqueeWizardOptions.prototype.previousText;
    /** @type {?|undefined} */
    MarqueeWizardOptions.prototype.finishText;
    /** @type {?|undefined} */
    MarqueeWizardOptions.prototype.showNext;
    /** @type {?|undefined} */
    MarqueeWizardOptions.prototype.showPrevious;
    /** @type {?|undefined} */
    MarqueeWizardOptions.prototype.showFinish;
    /** @type {?|undefined} */
    MarqueeWizardOptions.prototype.nextTooltip;
    /** @type {?|undefined} */
    MarqueeWizardOptions.prototype.previousTooltip;
    /** @type {?|undefined} */
    MarqueeWizardOptions.prototype.finishTooltip;
    /** @type {?|undefined} */
    MarqueeWizardOptions.prototype.previousEnabled;
    /** @type {?|undefined} */
    MarqueeWizardOptions.prototype.nextEnabled;
    /** @type {?|undefined} */
    MarqueeWizardOptions.prototype.finishEnabled;
}
/**
 * @record
 */
export function MarqueeWizardSideInfo() { }
function MarqueeWizardSideInfo_tsickle_Closure_declarations() {
    /** @type {?} */
    MarqueeWizardSideInfo.prototype.title;
    /** @type {?} */
    MarqueeWizardSideInfo.prototype.description;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFycXVlZS13aXphcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImh5YnJpZC9jb21wb25lbnRzL21hcnF1ZWUtd2l6YXJkL21hcnF1ZWUtd2l6YXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7SUFLWixxREFBZ0I7SUFjM0QsbUNBQVksVUFBc0IsRUFBRSxRQUFrQjtRQUF0RCxZQUNJLGtCQUFNLGVBQWUsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLFNBQy9DO2tDQUpnRSxJQUFJLFlBQVksRUFBdUI7O0tBSXZHOztnQkFuQkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxnQkFBZ0I7aUJBQzdCOzs7O2dCQUxtQixVQUFVO2dCQUFFLFFBQVE7OzsrQkFRbkMsS0FBSztnQ0FDTCxLQUFLO2tDQUNMLEtBQUs7K0JBQ0wsS0FBSzsrQkFDTCxLQUFLO2dDQUNMLEtBQUs7K0JBQ0wsS0FBSzs4QkFDTCxLQUFLOzZCQUNMLEtBQUs7c0NBRUwsTUFBTTs7b0NBbEJYO0VBTStDLGdCQUFnQjtTQUFsRCx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEluamVjdG9yLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVXBncmFkZUNvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL3VwZ3JhZGUvc3RhdGljJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdtYXJxdWVlLXdpemFyZCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hcnF1ZWVXaXphcmROZzFDb21wb25lbnQgZXh0ZW5kcyBVcGdyYWRlQ29tcG9uZW50IHtcclxuXHJcbiAgICBASW5wdXQoKSB3aXphcmRJY29uOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSB3aXphcmRTdGVwczogTWFycXVlZVdpemFyZFN0ZXBbXTtcclxuICAgIEBJbnB1dCgpIGJ1dHRvbk9wdGlvbnM6IE1hcnF1ZWVXaXphcmRPcHRpb25zO1xyXG4gICAgQElucHV0KCkgb25DaGFuZ2luZzogRnVuY3Rpb247XHJcbiAgICBASW5wdXQoKSBvbkZpbmlzaGVkOiBGdW5jdGlvbjtcclxuICAgIEBJbnB1dCgpIG9uRmluaXNoaW5nOiBGdW5jdGlvbjtcclxuICAgIEBJbnB1dCgpIG9uQ2FuY2VsZWQ6IEZ1bmN0aW9uO1xyXG4gICAgQElucHV0KCkgaXNWaXNpdGVkOiBib29sZWFuO1xyXG4gICAgQElucHV0KCkgc2lkZUluZm86IE1hcnF1ZWVXaXphcmRTaWRlSW5mbztcclxuXHJcbiAgICBAT3V0cHV0KCkgd2l6YXJkU3RlcHNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxNYXJxdWVlV2l6YXJkU3RlcFtdPiA9IG5ldyBFdmVudEVtaXR0ZXI8TWFycXVlZVdpemFyZFN0ZXBbXT4oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuICAgICAgICBzdXBlcignbWFycXVlZVdpemFyZCcsIGVsZW1lbnRSZWYsIGluamVjdG9yKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNYXJxdWVlV2l6YXJkU3RlcCB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgaHRtbD86IHN0cmluZztcclxuICAgIGhlYWRlcj86IHN0cmluZztcclxuICAgIHRlbXBsYXRlVXJsPzogc3RyaW5nO1xyXG4gICAgaGlkZGVuPzogYm9vbGVhbjtcclxuICAgIGVycm9yPzogYm9vbGVhbjtcclxuICAgIGNvbXBsZXRlZD86IGJvb2xlYW47XHJcbiAgICB2aXNpdGVkPzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNYXJxdWVlV2l6YXJkT3B0aW9ucyB7XHJcbiAgICBuZXh0VGV4dD86IHN0cmluZztcclxuICAgIHByZXZpb3VzVGV4dD86IHN0cmluZztcclxuICAgIGZpbmlzaFRleHQ/OiBzdHJpbmc7XHJcbiAgICBzaG93TmV4dD86IGJvb2xlYW47XHJcbiAgICBzaG93UHJldmlvdXM/OiBib29sZWFuO1xyXG4gICAgc2hvd0ZpbmlzaD86IGJvb2xlYW47XHJcbiAgICBuZXh0VG9vbHRpcD86IHN0cmluZztcclxuICAgIHByZXZpb3VzVG9vbHRpcD86IHN0cmluZztcclxuICAgIGZpbmlzaFRvb2x0aXA/OiBzdHJpbmc7XHJcbiAgICBwcmV2aW91c0VuYWJsZWQ/OiBib29sZWFuO1xyXG4gICAgbmV4dEVuYWJsZWQ/OiBib29sZWFuO1xyXG4gICAgZmluaXNoRW5hYmxlZD86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWFycXVlZVdpemFyZFNpZGVJbmZvIHtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG59Il19