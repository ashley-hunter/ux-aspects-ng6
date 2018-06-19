/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Injector, Input, Output, EventEmitter } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
var TreeGridNg1Component = /** @class */ (function (_super) {
    tslib_1.__extends(TreeGridNg1Component, _super);
    function TreeGridNg1Component(elementRef, injector) {
        var _this = _super.call(this, 'treegrid', elementRef, injector) || this;
        _this.optionsChange = new EventEmitter();
        _this.selectedChange = new EventEmitter();
        _this.currentRowChange = new EventEmitter();
        _this.treeDataChange = new EventEmitter();
        return _this;
    }
    TreeGridNg1Component.decorators = [
        { type: Directive, args: [{
                    selector: 'treegrid'
                },] },
    ];
    /** @nocollapse */
    TreeGridNg1Component.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Injector, },
    ]; };
    TreeGridNg1Component.propDecorators = {
        "data": [{ type: Input },],
        "columns": [{ type: Input },],
        "treeData": [{ type: Input },],
        "selected": [{ type: Input },],
        "currentRow": [{ type: Input },],
        "options": [{ type: Input },],
        "optionsChange": [{ type: Output },],
        "selectedChange": [{ type: Output },],
        "currentRowChange": [{ type: Output },],
        "treeDataChange": [{ type: Output },],
    };
    return TreeGridNg1Component;
}(UpgradeComponent));
export { TreeGridNg1Component };
function TreeGridNg1Component_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TreeGridNg1Component.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TreeGridNg1Component.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    TreeGridNg1Component.propDecorators;
    /** @type {?} */
    TreeGridNg1Component.prototype.data;
    /** @type {?} */
    TreeGridNg1Component.prototype.columns;
    /** @type {?} */
    TreeGridNg1Component.prototype.treeData;
    /** @type {?} */
    TreeGridNg1Component.prototype.selected;
    /** @type {?} */
    TreeGridNg1Component.prototype.currentRow;
    /** @type {?} */
    TreeGridNg1Component.prototype.options;
    /** @type {?} */
    TreeGridNg1Component.prototype.optionsChange;
    /** @type {?} */
    TreeGridNg1Component.prototype.selectedChange;
    /** @type {?} */
    TreeGridNg1Component.prototype.currentRowChange;
    /** @type {?} */
    TreeGridNg1Component.prototype.treeDataChange;
}
/**
 * @record
 */
export function TreeGridColumn() { }
function TreeGridColumn_tsickle_Closure_declarations() {
    /** @type {?} */
    TreeGridColumn.prototype.name;
    /** @type {?|undefined} */
    TreeGridColumn.prototype.value;
    /** @type {?|undefined} */
    TreeGridColumn.prototype.template;
    /** @type {?|undefined} */
    TreeGridColumn.prototype.headerClass;
    /** @type {?|undefined} */
    TreeGridColumn.prototype.cellClass;
    /** @type {?|undefined} */
    TreeGridColumn.prototype.width;
    /** @type {?|undefined} */
    TreeGridColumn.prototype.tooltip;
    /** @type {?|undefined} */
    TreeGridColumn.prototype.tooltipPlacement;
}
/**
 * @record
 */
export function TreeGridData() { }
function TreeGridData_tsickle_Closure_declarations() {
    /** @type {?} */
    TreeGridData.prototype.dataItem;
    /** @type {?} */
    TreeGridData.prototype.children;
    /** @type {?} */
    TreeGridData.prototype.expanded;
    /** @type {?} */
    TreeGridData.prototype.expanding;
    /** @type {?} */
    TreeGridData.prototype.level;
    /** @type {?} */
    TreeGridData.prototype.api;
}
/**
 * @record
 */
export function TreeGridOptions() { }
function TreeGridOptions_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    TreeGridOptions.prototype.childrenProperty;
    /** @type {?|undefined} */
    TreeGridOptions.prototype.hasChildren;
    /** @type {?|undefined} */
    TreeGridOptions.prototype.maxDepth;
    /** @type {?|undefined} */
    TreeGridOptions.prototype.expandTopLevel;
    /** @type {?|undefined} */
    TreeGridOptions.prototype.select;
    /** @type {?|undefined} */
    TreeGridOptions.prototype.expander;
    /** @type {?|undefined} */
    TreeGridOptions.prototype.icons;
    /** @type {?|undefined} */
    TreeGridOptions.prototype.rowClass;
    /** @type {?|undefined} */
    TreeGridOptions.prototype.sort;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ncmlkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJoeWJyaWQvY29tcG9uZW50cy90cmVlLWdyaWQvdHJlZS1ncmlkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7SUFLakIsZ0RBQWdCO0lBY3RELDhCQUFZLFVBQXNCLEVBQUUsUUFBa0I7UUFBdEQsWUFDSSxrQkFBTSxVQUFVLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxTQUMxQzs4QkFQd0QsSUFBSSxZQUFZLEVBQW1COytCQUM1QyxJQUFJLFlBQVksRUFBUztpQ0FDekIsSUFBSSxZQUFZLEVBQU87K0JBQ2QsSUFBSSxZQUFZLEVBQWtCOztLQUkxRjs7Z0JBbkJKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsVUFBVTtpQkFDdkI7Ozs7Z0JBTG1CLFVBQVU7Z0JBQUUsUUFBUTs7O3lCQVFuQyxLQUFLOzRCQUNMLEtBQUs7NkJBQ0wsS0FBSzs2QkFDTCxLQUFLOytCQUNMLEtBQUs7NEJBQ0wsS0FBSztrQ0FFTCxNQUFNO21DQUNOLE1BQU07cUNBQ04sTUFBTTttQ0FDTixNQUFNOzsrQkFsQlg7RUFNMEMsZ0JBQWdCO1NBQTdDLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5qZWN0b3IsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVcGdyYWRlQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvdXBncmFkZS9zdGF0aWMnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ3RyZWVncmlkJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVHJlZUdyaWROZzFDb21wb25lbnQgZXh0ZW5kcyBVcGdyYWRlQ29tcG9uZW50IHtcclxuXHJcbiAgICBASW5wdXQoKSBkYXRhOiBUcmVlR3JpZERhdGFbXSB8IEZ1bmN0aW9uO1xyXG4gICAgQElucHV0KCkgY29sdW1uczogVHJlZUdyaWRDb2x1bW5bXTtcclxuICAgIEBJbnB1dCgpIHRyZWVEYXRhOiBUcmVlR3JpZERhdGFbXTtcclxuICAgIEBJbnB1dCgpIHNlbGVjdGVkOiBhbnlbXTtcclxuICAgIEBJbnB1dCgpIGN1cnJlbnRSb3c6IGFueTtcclxuICAgIEBJbnB1dCgpIG9wdGlvbnM6IFRyZWVHcmlkT3B0aW9ucztcclxuXHJcbiAgICBAT3V0cHV0KCkgb3B0aW9uc0NoYW5nZTogRXZlbnRFbWl0dGVyPFRyZWVHcmlkT3B0aW9ucz4gPSBuZXcgRXZlbnRFbWl0dGVyPFRyZWVHcmlkT3B0aW9ucz4oKTtcclxuICAgIEBPdXRwdXQoKSBzZWxlY3RlZENoYW5nZTogRXZlbnRFbWl0dGVyPGFueVtdPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55W10+KCk7XHJcbiAgICBAT3V0cHV0KCkgY3VycmVudFJvd0NoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSB0cmVlRGF0YUNoYW5nZTogRXZlbnRFbWl0dGVyPFRyZWVHcmlkRGF0YVtdPiA9IG5ldyBFdmVudEVtaXR0ZXI8VHJlZUdyaWREYXRhW10+KCk7ICAgIFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG4gICAgICAgIHN1cGVyKCd0cmVlZ3JpZCcsIGVsZW1lbnRSZWYsIGluamVjdG9yKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUcmVlR3JpZENvbHVtbiB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICB2YWx1ZT86IHN0cmluZyB8IEZ1bmN0aW9uO1xyXG4gICAgdGVtcGxhdGU/OiBzdHJpbmc7XHJcbiAgICBoZWFkZXJDbGFzcz86IHN0cmluZztcclxuICAgIGNlbGxDbGFzcz86IHN0cmluZztcclxuICAgIHdpZHRoPzogc3RyaW5nO1xyXG4gICAgdG9vbHRpcD86IHN0cmluZztcclxuICAgIHRvb2x0aXBQbGFjZW1lbnQ/OiAndG9wJyB8ICdib3R0b20nIHwgJ2xlZnQnIHwgJ3JpZ2h0JztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUcmVlR3JpZERhdGEge1xyXG4gICAgZGF0YUl0ZW06IGFueTtcclxuICAgIGNoaWxkcmVuOiBhbnlbXTtcclxuICAgIGV4cGFuZGVkOiBib29sZWFuO1xyXG4gICAgZXhwYW5kaW5nOiBib29sZWFuO1xyXG4gICAgbGV2ZWw6IG51bWJlcjtcclxuICAgIGFwaTogYW55O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRyZWVHcmlkT3B0aW9ucyB7XHJcbiAgICBjaGlsZHJlblByb3BlcnR5Pzogc3RyaW5nO1xyXG4gICAgaGFzQ2hpbGRyZW4/OiBGdW5jdGlvbjtcclxuICAgIG1heERlcHRoPzogbnVtYmVyO1xyXG4gICAgZXhwYW5kVG9wTGV2ZWw/OiBib29sZWFuO1xyXG4gICAgc2VsZWN0PzogYW55O1xyXG4gICAgZXhwYW5kZXI/OiBhbnk7XHJcbiAgICBpY29ucz86IGFueTtcclxuICAgIHJvd0NsYXNzPzogc3RyaW5nIHwgRnVuY3Rpb247XHJcbiAgICBzb3J0PzogRnVuY3Rpb247XHJcbn0iXX0=