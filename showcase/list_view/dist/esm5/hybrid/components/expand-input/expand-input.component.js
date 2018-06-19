/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Injector, Input, Output, EventEmitter } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
var ExpandInputNg1Component = /** @class */ (function (_super) {
    tslib_1.__extends(ExpandInputNg1Component, _super);
    function ExpandInputNg1Component(elementRef, injector) {
        var _this = _super.call(this, 'expandInput', elementRef, injector) || this;
        _this.focus = new EventEmitter();
        return _this;
    }
    ExpandInputNg1Component.decorators = [
        { type: Directive, args: [{
                    selector: 'expand-input'
                },] },
    ];
    /** @nocollapse */
    ExpandInputNg1Component.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Injector, },
    ]; };
    ExpandInputNg1Component.propDecorators = {
        "elname": [{ type: Input },],
        "placeHolder": [{ type: Input },],
        "className": [{ type: Input },],
        "clearTextIcon": [{ type: Input },],
        "closeSearch": [{ type: Input },],
        "expandAlways": [{ type: Input },],
        "onEnter": [{ type: Input },],
        "focus": [{ type: Output },],
    };
    return ExpandInputNg1Component;
}(UpgradeComponent));
export { ExpandInputNg1Component };
function ExpandInputNg1Component_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ExpandInputNg1Component.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ExpandInputNg1Component.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    ExpandInputNg1Component.propDecorators;
    /** @type {?} */
    ExpandInputNg1Component.prototype.elname;
    /** @type {?} */
    ExpandInputNg1Component.prototype.placeHolder;
    /** @type {?} */
    ExpandInputNg1Component.prototype.className;
    /** @type {?} */
    ExpandInputNg1Component.prototype.clearTextIcon;
    /** @type {?} */
    ExpandInputNg1Component.prototype.closeSearch;
    /** @type {?} */
    ExpandInputNg1Component.prototype.expandAlways;
    /** @type {?} */
    ExpandInputNg1Component.prototype.onEnter;
    /** @type {?} */
    ExpandInputNg1Component.prototype.focus;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5kLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJoeWJyaWQvY29tcG9uZW50cy9leHBhbmQtaW5wdXQvZXhwYW5kLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7SUFLZCxtREFBZ0I7SUFZekQsaUNBQVksVUFBc0IsRUFBRSxRQUFrQjtRQUF0RCxZQUNJLGtCQUFNLGFBQWEsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLFNBQzdDO3NCQUp1QyxJQUFJLFlBQVksRUFBVTs7S0FJakU7O2dCQWpCSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGNBQWM7aUJBQzNCOzs7O2dCQUxtQixVQUFVO2dCQUFFLFFBQVE7OzsyQkFRbkMsS0FBSztnQ0FDTCxLQUFLOzhCQUNMLEtBQUs7a0NBQ0wsS0FBSztnQ0FDTCxLQUFLO2lDQUNMLEtBQUs7NEJBQ0wsS0FBSzswQkFFTCxNQUFNOztrQ0FoQlg7RUFNNkMsZ0JBQWdCO1NBQWhELHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5qZWN0b3IsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVcGdyYWRlQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvdXBncmFkZS9zdGF0aWMnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ2V4cGFuZC1pbnB1dCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEV4cGFuZElucHV0TmcxQ29tcG9uZW50IGV4dGVuZHMgVXBncmFkZUNvbXBvbmVudCB7XHJcblxyXG4gICAgQElucHV0KCkgZWxuYW1lOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBwbGFjZUhvbGRlcjogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgY2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBjbGVhclRleHRJY29uOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBjbG9zZVNlYXJjaDogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgZXhwYW5kQWx3YXlzOiBib29sZWFuO1xyXG4gICAgQElucHV0KCkgb25FbnRlcjogRnVuY3Rpb247XHJcblxyXG4gICAgQE91dHB1dCgpIGZvY3VzOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG4gICAgICAgIHN1cGVyKCdleHBhbmRJbnB1dCcsIGVsZW1lbnRSZWYsIGluamVjdG9yKTtcclxuICAgIH1cclxufSJdfQ==