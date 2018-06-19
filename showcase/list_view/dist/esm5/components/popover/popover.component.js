/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Subject } from 'rxjs';
import { TooltipComponent } from '../tooltip/index';
var /** @type {?} */ uniquePopoverId = 0;
var PopoverComponent = /** @class */ (function (_super) {
    tslib_1.__extends(PopoverComponent, _super);
    function PopoverComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Define a unique id for each popover
         */
        _this.id = "ux-popover-" + ++uniquePopoverId;
        /**
         * This will emit an event any time the user clicks outside the popover
         */
        _this.clickOutside$ = new Subject();
        return _this;
    }
    /** This will update the title of the popover and trigger change detection */
    /**
     * This will update the title of the popover and trigger change detection
     * @param {?} title
     * @return {?}
     */
    PopoverComponent.prototype.setTitle = /**
     * This will update the title of the popover and trigger change detection
     * @param {?} title
     * @return {?}
     */
    function (title) {
        this.title = title;
        this._changeDetectorRef.markForCheck();
    };
    PopoverComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-popover',
                    template: "<div class=\"popover show\" [ngClass]=\"[placement, customClass]\" [id]=\"id\" [attr.role]=\"role\" (uxClickOutside)=\"clickOutside$.next($event)\">\n    <div class=\"arrow\"></div>\n    <h3 class=\"popover-title\" *ngIf=\"title\">{{ title }}</h3>\n    <div class=\"popover-content\" (cdkObserveContent)=\"reposition()\">\n        <ng-container *ngIf=\"!isTemplateRef\">{{ content }}</ng-container>\n        <ng-container *ngIf=\"isTemplateRef\" [ngTemplateOutlet]=\"content\" [ngTemplateOutletContext]=\"context\"></ng-container>\n    </div>\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    return PopoverComponent;
}(TooltipComponent));
export { PopoverComponent };
function PopoverComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    PopoverComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    PopoverComponent.ctorParameters;
    /**
     * Define a unique id for each popover
     * @type {?}
     */
    PopoverComponent.prototype.id;
    /**
     * If specified allows the popover to show a title
     * @type {?}
     */
    PopoverComponent.prototype.title;
    /**
     * This will emit an event any time the user clicks outside the popover
     * @type {?}
     */
    PopoverComponent.prototype.clickOutside$;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9wb3BvdmVyL3BvcG92ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRXBELHFCQUFJLGVBQWUsR0FBRyxDQUFDLENBQUM7O0lBY2MsNENBQWdCOzs7Ozs7bUJBR3ZDLGdCQUFjLEVBQUUsZUFBaUI7Ozs7OEJBTTlCLElBQUksT0FBTyxFQUFjOzs7SUFFekMsNkVBQTZFOzs7Ozs7SUFDN0UsbUNBQVE7Ozs7O0lBQVIsVUFBUyxLQUFhO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUN4Qzs7Z0JBM0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLHdpQkFPTDtvQkFDTCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7OzJCQWpCRDtFQWtCc0MsZ0JBQWdCO1NBQXpDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBUb29sdGlwQ29tcG9uZW50IH0gZnJvbSAnLi4vdG9vbHRpcC9pbmRleCc7XHJcblxyXG5sZXQgdW5pcXVlUG9wb3ZlcklkID0gMDtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndXgtcG9wb3ZlcicsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwicG9wb3ZlciBzaG93XCIgW25nQ2xhc3NdPVwiW3BsYWNlbWVudCwgY3VzdG9tQ2xhc3NdXCIgW2lkXT1cImlkXCIgW2F0dHIucm9sZV09XCJyb2xlXCIgKHV4Q2xpY2tPdXRzaWRlKT1cImNsaWNrT3V0c2lkZSQubmV4dCgkZXZlbnQpXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYXJyb3dcIj48L2Rpdj5cclxuICAgIDxoMyBjbGFzcz1cInBvcG92ZXItdGl0bGVcIiAqbmdJZj1cInRpdGxlXCI+e3sgdGl0bGUgfX08L2gzPlxyXG4gICAgPGRpdiBjbGFzcz1cInBvcG92ZXItY29udGVudFwiIChjZGtPYnNlcnZlQ29udGVudCk9XCJyZXBvc2l0aW9uKClcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWlzVGVtcGxhdGVSZWZcIj57eyBjb250ZW50IH19PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzVGVtcGxhdGVSZWZcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJjb250ZW50XCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cImNvbnRleHRcIj48L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5gLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb3BvdmVyQ29tcG9uZW50IGV4dGVuZHMgVG9vbHRpcENvbXBvbmVudCB7XHJcblxyXG4gIC8qKiBEZWZpbmUgYSB1bmlxdWUgaWQgZm9yIGVhY2ggcG9wb3ZlciAqL1xyXG4gIGlkOiBzdHJpbmcgPSBgdXgtcG9wb3Zlci0keysrdW5pcXVlUG9wb3ZlcklkfWA7XHJcblxyXG4gIC8qKiBJZiBzcGVjaWZpZWQgYWxsb3dzIHRoZSBwb3BvdmVyIHRvIHNob3cgYSB0aXRsZSAqL1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBUaGlzIHdpbGwgZW1pdCBhbiBldmVudCBhbnkgdGltZSB0aGUgdXNlciBjbGlja3Mgb3V0c2lkZSB0aGUgcG9wb3ZlciAqL1xyXG4gIGNsaWNrT3V0c2lkZSQgPSBuZXcgU3ViamVjdDxNb3VzZUV2ZW50PigpO1xyXG5cclxuICAvKiogVGhpcyB3aWxsIHVwZGF0ZSB0aGUgdGl0bGUgb2YgdGhlIHBvcG92ZXIgYW5kIHRyaWdnZXIgY2hhbmdlIGRldGVjdGlvbiAqL1xyXG4gIHNldFRpdGxlKHRpdGxlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxufSJdfQ==