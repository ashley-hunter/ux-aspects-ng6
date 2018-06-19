/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Injector, Input, Output, EventEmitter } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
var SelectTableNg1Component = /** @class */ (function (_super) {
    tslib_1.__extends(SelectTableNg1Component, _super);
    function SelectTableNg1Component(elementRef, injector) {
        var _this = _super.call(this, 'selectTable', elementRef, injector) || this;
        _this.selectedChange = new EventEmitter();
        return _this;
    }
    SelectTableNg1Component.decorators = [
        { type: Directive, args: [{
                    selector: 'select-table'
                },] },
    ];
    /** @nocollapse */
    SelectTableNg1Component.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Injector, },
    ]; };
    SelectTableNg1Component.propDecorators = {
        "values": [{ type: Input },],
        "multipleSelect": [{ type: Input },],
        "selectKey": [{ type: Input },],
        "selected": [{ type: Input },],
        "searchText": [{ type: Input },],
        "tableHeight": [{ type: Input },],
        "selectHiddenItems": [{ type: Input },],
        "selectedChange": [{ type: Output },],
    };
    return SelectTableNg1Component;
}(UpgradeComponent));
export { SelectTableNg1Component };
function SelectTableNg1Component_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SelectTableNg1Component.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SelectTableNg1Component.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    SelectTableNg1Component.propDecorators;
    /** @type {?} */
    SelectTableNg1Component.prototype.values;
    /** @type {?} */
    SelectTableNg1Component.prototype.multipleSelect;
    /** @type {?} */
    SelectTableNg1Component.prototype.selectKey;
    /** @type {?} */
    SelectTableNg1Component.prototype.selected;
    /** @type {?} */
    SelectTableNg1Component.prototype.searchText;
    /** @type {?} */
    SelectTableNg1Component.prototype.tableHeight;
    /** @type {?} */
    SelectTableNg1Component.prototype.selectHiddenItems;
    /** @type {?} */
    SelectTableNg1Component.prototype.selectedChange;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJoeWJyaWQvY29tcG9uZW50cy9zZWxlY3QtdGFibGUvc2VsZWN0LXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7SUFLZCxtREFBZ0I7SUFZekQsaUNBQVksVUFBc0IsRUFBRSxRQUFrQjtRQUF0RCxZQUNJLGtCQUFNLGFBQWEsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLFNBQzdDOytCQUpnRCxJQUFJLFlBQVksRUFBVTs7S0FJMUU7O2dCQWpCSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGNBQWM7aUJBQzNCOzs7O2dCQUxtQixVQUFVO2dCQUFFLFFBQVE7OzsyQkFRbkMsS0FBSzttQ0FDTCxLQUFLOzhCQUNMLEtBQUs7NkJBQ0wsS0FBSzsrQkFDTCxLQUFLO2dDQUNMLEtBQUs7c0NBQ0wsS0FBSzttQ0FFTCxNQUFNOztrQ0FoQlg7RUFNNkMsZ0JBQWdCO1NBQWhELHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5qZWN0b3IsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVcGdyYWRlQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvdXBncmFkZS9zdGF0aWMnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ3NlbGVjdC10YWJsZSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlbGVjdFRhYmxlTmcxQ29tcG9uZW50IGV4dGVuZHMgVXBncmFkZUNvbXBvbmVudCB7XHJcblxyXG4gICAgQElucHV0KCkgdmFsdWVzOiBhbnlbXTtcclxuICAgIEBJbnB1dCgpIG11bHRpcGxlU2VsZWN0OiBib29sZWFuO1xyXG4gICAgQElucHV0KCkgc2VsZWN0S2V5OiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBzZWxlY3RlZDogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgc2VhcmNoVGV4dDogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgdGFibGVIZWlnaHQ6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHNlbGVjdEhpZGRlbkl0ZW1zOiAnY2xlYXInIHwgJ3Jlc2VsZWN0JztcclxuXHJcbiAgICBAT3V0cHV0KCkgc2VsZWN0ZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcbiAgICAgICAgc3VwZXIoJ3NlbGVjdFRhYmxlJywgZWxlbWVudFJlZiwgaW5qZWN0b3IpO1xyXG4gICAgfVxyXG59Il19