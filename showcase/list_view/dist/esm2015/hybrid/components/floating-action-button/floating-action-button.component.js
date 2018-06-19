/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Injector, Input } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
export class FloatingActionButtonNg1Component extends UpgradeComponent {
    /**
     * @param {?} elementRef
     * @param {?} injector
     */
    constructor(elementRef, injector) {
        super('floatingActionButton', elementRef, injector);
        this.items = [];
    }
}
FloatingActionButtonNg1Component.decorators = [
    { type: Directive, args: [{
                selector: 'floating-action-button'
            },] },
];
/** @nocollapse */
FloatingActionButtonNg1Component.ctorParameters = () => [
    { type: ElementRef, },
    { type: Injector, },
];
FloatingActionButtonNg1Component.propDecorators = {
    "items": [{ type: Input },],
    "primary": [{ type: Input },],
    "direction": [{ type: Input },],
    "fabTooltip": [{ type: Input },],
    "fabTooltipPlacement": [{ type: Input },],
};
function FloatingActionButtonNg1Component_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FloatingActionButtonNg1Component.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FloatingActionButtonNg1Component.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    FloatingActionButtonNg1Component.propDecorators;
    /** @type {?} */
    FloatingActionButtonNg1Component.prototype.items;
    /** @type {?} */
    FloatingActionButtonNg1Component.prototype.primary;
    /** @type {?} */
    FloatingActionButtonNg1Component.prototype.direction;
    /** @type {?} */
    FloatingActionButtonNg1Component.prototype.fabTooltip;
    /** @type {?} */
    FloatingActionButtonNg1Component.prototype.fabTooltipPlacement;
}
/**
 * @record
 */
export function FloatingActionButtonItem() { }
function FloatingActionButtonItem_tsickle_Closure_declarations() {
    /** @type {?} */
    FloatingActionButtonItem.prototype.icon;
    /** @type {?} */
    FloatingActionButtonItem.prototype.event;
    /** @type {?|undefined} */
    FloatingActionButtonItem.prototype.tooltip;
    /** @type {?|undefined} */
    FloatingActionButtonItem.prototype.tooltipPlacement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvYXRpbmctYWN0aW9uLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiaHlicmlkL2NvbXBvbmVudHMvZmxvYXRpbmctYWN0aW9uLWJ1dHRvbi9mbG9hdGluZy1hY3Rpb24tYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUszRCxNQUFNLHVDQUF3QyxTQUFRLGdCQUFnQjs7Ozs7SUFRbEUsWUFBWSxVQUFzQixFQUFFLFFBQWtCO1FBQ2xELEtBQUssQ0FBQyxzQkFBc0IsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7cUJBUFgsRUFBRTtLQVE5Qzs7O1lBYkosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSx3QkFBd0I7YUFDckM7Ozs7WUFMbUIsVUFBVTtZQUFFLFFBQVE7OztzQkFRbkMsS0FBSzt3QkFDTCxLQUFLOzBCQUNMLEtBQUs7MkJBQ0wsS0FBSztvQ0FDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbmplY3RvciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVXBncmFkZUNvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL3VwZ3JhZGUvc3RhdGljJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdmbG9hdGluZy1hY3Rpb24tYnV0dG9uJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRmxvYXRpbmdBY3Rpb25CdXR0b25OZzFDb21wb25lbnQgZXh0ZW5kcyBVcGdyYWRlQ29tcG9uZW50IHtcclxuXHJcbiAgICBASW5wdXQoKSBpdGVtczogRmxvYXRpbmdBY3Rpb25CdXR0b25JdGVtW10gPSBbXTtcclxuICAgIEBJbnB1dCgpIHByaW1hcnk6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGRpcmVjdGlvbjogJ3RvcCcgfCAncmlnaHQnIHwgJ2JvdHRvbScgfCAnbGVmdCc7XHJcbiAgICBASW5wdXQoKSBmYWJUb29sdGlwOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBmYWJUb29sdGlwUGxhY2VtZW50OiAndG9wJyB8ICdyaWdodCcgfCAnYm90dG9tJyB8ICdsZWZ0JztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuICAgICAgICBzdXBlcignZmxvYXRpbmdBY3Rpb25CdXR0b24nLCBlbGVtZW50UmVmLCBpbmplY3Rvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmxvYXRpbmdBY3Rpb25CdXR0b25JdGVtIHtcclxuICAgIGljb246IHN0cmluZztcclxuICAgIGV2ZW50OiBGdW5jdGlvbjtcclxuICAgIHRvb2x0aXA/OiBzdHJpbmc7XHJcbiAgICB0b29sdGlwUGxhY2VtZW50Pzogc3RyaW5nO1xyXG59Il19