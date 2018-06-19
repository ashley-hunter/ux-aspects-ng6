/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Injector, Input } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
var HierarchyBarNg1Component = /** @class */ (function (_super) {
    tslib_1.__extends(HierarchyBarNg1Component, _super);
    function HierarchyBarNg1Component(elementRef, injector) {
        return _super.call(this, 'hierarchyBar', elementRef, injector) || this;
    }
    HierarchyBarNg1Component.decorators = [
        { type: Directive, args: [{
                    selector: 'hierarchy-bar'
                },] },
    ];
    /** @nocollapse */
    HierarchyBarNg1Component.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Injector, },
    ]; };
    HierarchyBarNg1Component.propDecorators = {
        "data": [{ type: Input },],
        "options": [{ type: Input },],
        "selectNode": [{ type: Input },],
        "containerClass": [{ type: Input },],
    };
    return HierarchyBarNg1Component;
}(UpgradeComponent));
export { HierarchyBarNg1Component };
function HierarchyBarNg1Component_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    HierarchyBarNg1Component.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    HierarchyBarNg1Component.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    HierarchyBarNg1Component.propDecorators;
    /** @type {?} */
    HierarchyBarNg1Component.prototype.data;
    /** @type {?} */
    HierarchyBarNg1Component.prototype.options;
    /** @type {?} */
    HierarchyBarNg1Component.prototype.selectNode;
    /** @type {?} */
    HierarchyBarNg1Component.prototype.containerClass;
}
/**
 * @record
 */
export function HierarchyBarOptions() { }
function HierarchyBarOptions_tsickle_Closure_declarations() {
    /** @type {?} */
    HierarchyBarOptions.prototype.enabled;
    /** @type {?|undefined} */
    HierarchyBarOptions.prototype.overview;
    /** @type {?} */
    HierarchyBarOptions.prototype.image;
    /** @type {?} */
    HierarchyBarOptions.prototype.valueFormatter;
    /** @type {?|undefined} */
    HierarchyBarOptions.prototype.action;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGllcmFyY2h5LWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiaHlicmlkL2NvbXBvbmVudHMvaGllcmFyY2h5LWJhci9oaWVyYXJjaHktYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUJBQXlCLENBQUM7O0lBS2Isb0RBQWdCO0lBTzFELGtDQUFZLFVBQXNCLEVBQUUsUUFBa0I7ZUFDbEQsa0JBQU0sY0FBYyxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUM7S0FDOUM7O2dCQVpKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsZUFBZTtpQkFDNUI7Ozs7Z0JBTG1CLFVBQVU7Z0JBQUUsUUFBUTs7O3lCQVFuQyxLQUFLOzRCQUNMLEtBQUs7K0JBQ0wsS0FBSzttQ0FDTCxLQUFLOzttQ0FYVjtFQU04QyxnQkFBZ0I7U0FBakQsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbmplY3RvciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVXBncmFkZUNvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL3VwZ3JhZGUvc3RhdGljJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdoaWVyYXJjaHktYmFyJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSGllcmFyY2h5QmFyTmcxQ29tcG9uZW50IGV4dGVuZHMgVXBncmFkZUNvbXBvbmVudCB7XHJcblxyXG4gICAgQElucHV0KCkgZGF0YTogYW55W107XHJcbiAgICBASW5wdXQoKSBvcHRpb25zOiBIaWVyYXJjaHlCYXJPcHRpb25zO1xyXG4gICAgQElucHV0KCkgc2VsZWN0Tm9kZTogYW55O1xyXG4gICAgQElucHV0KCkgY29udGFpbmVyQ2xhc3M6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuICAgICAgICBzdXBlcignaGllcmFyY2h5QmFyJywgZWxlbWVudFJlZiwgaW5qZWN0b3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEhpZXJhcmNoeUJhck9wdGlvbnMge1xyXG4gICAgZW5hYmxlZDogYm9vbGVhbjtcclxuICAgIG92ZXJ2aWV3PzogRnVuY3Rpb247XHJcbiAgICBpbWFnZTogRnVuY3Rpb247XHJcbiAgICB2YWx1ZUZvcm1hdHRlcjogRnVuY3Rpb247XHJcbiAgICBhY3Rpb24/OiB7XHJcbiAgICAgICAgdGl0bGU6IHN0cmluZztcclxuICAgICAgICBldmVudDogRnVuY3Rpb247XHJcbiAgICB9O1xyXG59Il19