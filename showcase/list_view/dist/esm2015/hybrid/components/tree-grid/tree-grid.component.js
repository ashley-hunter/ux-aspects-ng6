/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Injector, Input, Output, EventEmitter } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
export class TreeGridNg1Component extends UpgradeComponent {
    /**
     * @param {?} elementRef
     * @param {?} injector
     */
    constructor(elementRef, injector) {
        super('treegrid', elementRef, injector);
        this.optionsChange = new EventEmitter();
        this.selectedChange = new EventEmitter();
        this.currentRowChange = new EventEmitter();
        this.treeDataChange = new EventEmitter();
    }
}
TreeGridNg1Component.decorators = [
    { type: Directive, args: [{
                selector: 'treegrid'
            },] },
];
/** @nocollapse */
TreeGridNg1Component.ctorParameters = () => [
    { type: ElementRef, },
    { type: Injector, },
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1ncmlkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJoeWJyaWQvY29tcG9uZW50cy90cmVlLWdyaWQvdHJlZS1ncmlkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBSzNELE1BQU0sMkJBQTRCLFNBQVEsZ0JBQWdCOzs7OztJQWN0RCxZQUFZLFVBQXNCLEVBQUUsUUFBa0I7UUFDbEQsS0FBSyxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7NkJBTmEsSUFBSSxZQUFZLEVBQW1COzhCQUM1QyxJQUFJLFlBQVksRUFBUztnQ0FDekIsSUFBSSxZQUFZLEVBQU87OEJBQ2QsSUFBSSxZQUFZLEVBQWtCO0tBSTFGOzs7WUFuQkosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxVQUFVO2FBQ3ZCOzs7O1lBTG1CLFVBQVU7WUFBRSxRQUFROzs7cUJBUW5DLEtBQUs7d0JBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7MkJBQ0wsS0FBSzt3QkFDTCxLQUFLOzhCQUVMLE1BQU07K0JBQ04sTUFBTTtpQ0FDTixNQUFNOytCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEluamVjdG9yLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVXBncmFkZUNvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL3VwZ3JhZGUvc3RhdGljJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICd0cmVlZ3JpZCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRyZWVHcmlkTmcxQ29tcG9uZW50IGV4dGVuZHMgVXBncmFkZUNvbXBvbmVudCB7XHJcblxyXG4gICAgQElucHV0KCkgZGF0YTogVHJlZUdyaWREYXRhW10gfCBGdW5jdGlvbjtcclxuICAgIEBJbnB1dCgpIGNvbHVtbnM6IFRyZWVHcmlkQ29sdW1uW107XHJcbiAgICBASW5wdXQoKSB0cmVlRGF0YTogVHJlZUdyaWREYXRhW107XHJcbiAgICBASW5wdXQoKSBzZWxlY3RlZDogYW55W107XHJcbiAgICBASW5wdXQoKSBjdXJyZW50Um93OiBhbnk7XHJcbiAgICBASW5wdXQoKSBvcHRpb25zOiBUcmVlR3JpZE9wdGlvbnM7XHJcblxyXG4gICAgQE91dHB1dCgpIG9wdGlvbnNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxUcmVlR3JpZE9wdGlvbnM+ID0gbmV3IEV2ZW50RW1pdHRlcjxUcmVlR3JpZE9wdGlvbnM+KCk7XHJcbiAgICBAT3V0cHV0KCkgc2VsZWN0ZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnlbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueVtdPigpO1xyXG4gICAgQE91dHB1dCgpIGN1cnJlbnRSb3dDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgdHJlZURhdGFDaGFuZ2U6IEV2ZW50RW1pdHRlcjxUcmVlR3JpZERhdGFbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPFRyZWVHcmlkRGF0YVtdPigpOyAgICBcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuICAgICAgICBzdXBlcigndHJlZWdyaWQnLCBlbGVtZW50UmVmLCBpbmplY3Rvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVHJlZUdyaWRDb2x1bW4ge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgdmFsdWU/OiBzdHJpbmcgfCBGdW5jdGlvbjtcclxuICAgIHRlbXBsYXRlPzogc3RyaW5nO1xyXG4gICAgaGVhZGVyQ2xhc3M/OiBzdHJpbmc7XHJcbiAgICBjZWxsQ2xhc3M/OiBzdHJpbmc7XHJcbiAgICB3aWR0aD86IHN0cmluZztcclxuICAgIHRvb2x0aXA/OiBzdHJpbmc7XHJcbiAgICB0b29sdGlwUGxhY2VtZW50PzogJ3RvcCcgfCAnYm90dG9tJyB8ICdsZWZ0JyB8ICdyaWdodCc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVHJlZUdyaWREYXRhIHtcclxuICAgIGRhdGFJdGVtOiBhbnk7XHJcbiAgICBjaGlsZHJlbjogYW55W107XHJcbiAgICBleHBhbmRlZDogYm9vbGVhbjtcclxuICAgIGV4cGFuZGluZzogYm9vbGVhbjtcclxuICAgIGxldmVsOiBudW1iZXI7XHJcbiAgICBhcGk6IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUcmVlR3JpZE9wdGlvbnMge1xyXG4gICAgY2hpbGRyZW5Qcm9wZXJ0eT86IHN0cmluZztcclxuICAgIGhhc0NoaWxkcmVuPzogRnVuY3Rpb247XHJcbiAgICBtYXhEZXB0aD86IG51bWJlcjtcclxuICAgIGV4cGFuZFRvcExldmVsPzogYm9vbGVhbjtcclxuICAgIHNlbGVjdD86IGFueTtcclxuICAgIGV4cGFuZGVyPzogYW55O1xyXG4gICAgaWNvbnM/OiBhbnk7XHJcbiAgICByb3dDbGFzcz86IHN0cmluZyB8IEZ1bmN0aW9uO1xyXG4gICAgc29ydD86IEZ1bmN0aW9uO1xyXG59Il19