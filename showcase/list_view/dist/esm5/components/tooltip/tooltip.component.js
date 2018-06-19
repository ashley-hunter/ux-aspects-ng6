/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
var /** @type {?} */ uniqueTooltipId = 0;
var TooltipComponent = /** @class */ (function () {
    function TooltipComponent(_changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
        /**
         * Define a unique id for each tooltip
         */
        this.id = "ux-tooltip-" + ++uniqueTooltipId;
        /**
         * Define the tooltip role
         */
        this.role = 'tooltip';
        /**
         * Allow a custom class to be added to the tooltip to allow custom styling
         */
        this.customClass = '';
        /**
         * Indicates whether or not the content is a string or a TemplateRef
         */
        this.isTemplateRef = false;
        /**
         * Emit when the tooltip need to update it's position
         */
        this.reposition$ = new Subject();
    }
    /** Cleanup after the component is destroyed */
    /**
     * Cleanup after the component is destroyed
     * @return {?}
     */
    TooltipComponent.prototype.ngOnDestroy = /**
     * Cleanup after the component is destroyed
     * @return {?}
     */
    function () {
        this.reposition$.complete();
    };
    /** Inform the parent directive that it needs to recalulate the position */
    /**
     * Inform the parent directive that it needs to recalulate the position
     * @return {?}
     */
    TooltipComponent.prototype.reposition = /**
     * Inform the parent directive that it needs to recalulate the position
     * @return {?}
     */
    function () {
        this.reposition$.next();
    };
    /** This will update the content of the tooltip and trigger change detection */
    /**
     * This will update the content of the tooltip and trigger change detection
     * @param {?} content
     * @return {?}
     */
    TooltipComponent.prototype.setContent = /**
     * This will update the content of the tooltip and trigger change detection
     * @param {?} content
     * @return {?}
     */
    function (content) {
        this.content = content;
        this.isTemplateRef = content instanceof TemplateRef;
        this._changeDetectorRef.markForCheck();
    };
    /** This will update the tooltip placement and trigger change detection */
    /**
     * This will update the tooltip placement and trigger change detection
     * @param {?} placement
     * @return {?}
     */
    TooltipComponent.prototype.setPlacement = /**
     * This will update the tooltip placement and trigger change detection
     * @param {?} placement
     * @return {?}
     */
    function (placement) {
        if (!placement) {
            return;
        }
        this.placement = placement;
        this._changeDetectorRef.markForCheck();
    };
    /** This will set a custom class on the tooltip and trigger change detection */
    /**
     * This will set a custom class on the tooltip and trigger change detection
     * @param {?} customClass
     * @return {?}
     */
    TooltipComponent.prototype.setClass = /**
     * This will set a custom class on the tooltip and trigger change detection
     * @param {?} customClass
     * @return {?}
     */
    function (customClass) {
        if (!customClass) {
            return;
        }
        this.customClass = customClass;
        this._changeDetectorRef.markForCheck();
    };
    /** Updates the context used by the TemplateRef */
    /**
     * Updates the context used by the TemplateRef
     * @param {?} context
     * @return {?}
     */
    TooltipComponent.prototype.setContext = /**
     * Updates the context used by the TemplateRef
     * @param {?} context
     * @return {?}
     */
    function (context) {
        if (!context) {
            return;
        }
        this.context = context;
        this._changeDetectorRef.markForCheck();
    };
    /** Specify the tooltip role attribute */
    /**
     * Specify the tooltip role attribute
     * @param {?} role
     * @return {?}
     */
    TooltipComponent.prototype.setRole = /**
     * Specify the tooltip role attribute
     * @param {?} role
     * @return {?}
     */
    function (role) {
        if (!role) {
            return;
        }
        this.role = role;
        this._changeDetectorRef.markForCheck();
    };
    TooltipComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-tooltip',
                    template: "<div class=\"tooltip in\" [id]=\"id\" [attr.role]=\"role\" [ngClass]=\"[placement, customClass]\">\n    <div class=\"tooltip-arrow\"></div>\n    <div class=\"tooltip-inner\" (cdkObserveContent)=\"reposition()\">\n        <ng-container *ngIf=\"!isTemplateRef\">{{ content }}</ng-container>\n        <ng-container *ngIf=\"isTemplateRef\" [ngTemplateOutlet]=\"content\" [ngTemplateOutletContext]=\"context\"></ng-container>\n    </div>\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    TooltipComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef, },
    ]; };
    return TooltipComponent;
}());
export { TooltipComponent };
function TooltipComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TooltipComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TooltipComponent.ctorParameters;
    /**
     * Define a unique id for each tooltip
     * @type {?}
     */
    TooltipComponent.prototype.id;
    /**
     * Define the tooltip role
     * @type {?}
     */
    TooltipComponent.prototype.role;
    /**
     * The content of the tooltip, either a string or a TemplateRef for further customization
     * @type {?}
     */
    TooltipComponent.prototype.content;
    /**
     * Allow the user to supply a context for the tooltip TemplateRef
     * @type {?}
     */
    TooltipComponent.prototype.context;
    /**
     * The position the tooltip should display relative to the associated element
     * @type {?}
     */
    TooltipComponent.prototype.placement;
    /**
     * Allow a custom class to be added to the tooltip to allow custom styling
     * @type {?}
     */
    TooltipComponent.prototype.customClass;
    /**
     * Indicates whether or not the content is a string or a TemplateRef
     * @type {?}
     */
    TooltipComponent.prototype.isTemplateRef;
    /**
     * Emit when the tooltip need to update it's position
     * @type {?}
     */
    TooltipComponent.prototype.reposition$;
    /** @type {?} */
    TooltipComponent.prototype._changeDetectorRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUU5RyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLHFCQUFJLGVBQWUsR0FBRyxDQUFDLENBQUM7O0lBdUN0QiwwQkFBc0Isa0JBQXFDO1FBQXJDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7Ozs7a0JBdkI5QyxnQkFBYyxFQUFFLGVBQWlCOzs7O29CQUcvQixTQUFTOzs7OzJCQVlGLEVBQUU7Ozs7NkJBR0MsS0FBSzs7OzsyQkFHaEIsSUFBSSxPQUFPLEVBQVE7S0FFOEI7SUFFL0QsK0NBQStDOzs7OztJQUMvQyxzQ0FBVzs7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUM3QjtJQUVELDJFQUEyRTs7Ozs7SUFDM0UscUNBQVU7Ozs7SUFBVjtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDekI7SUFFRCwrRUFBK0U7Ozs7OztJQUMvRSxxQ0FBVTs7Ozs7SUFBVixVQUFXLE9BQWtDO1FBQzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxZQUFZLFdBQVcsQ0FBQztRQUNwRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDeEM7SUFFRCwwRUFBMEU7Ozs7OztJQUMxRSx1Q0FBWTs7Ozs7SUFBWixVQUFhLFNBQTBCO1FBRXJDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNmLE1BQU0sQ0FBQztTQUNSO1FBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ3hDO0lBRUQsK0VBQStFOzs7Ozs7SUFDL0UsbUNBQVE7Ozs7O0lBQVIsVUFBUyxXQUFtQjtRQUUxQixFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDakIsTUFBTSxDQUFDO1NBQ1I7UUFFRCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDeEM7SUFFRCxrREFBa0Q7Ozs7OztJQUNsRCxxQ0FBVTs7Ozs7SUFBVixVQUFXLE9BQVk7UUFFckIsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2IsTUFBTSxDQUFDO1NBQ1I7UUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDeEM7SUFFRCx5Q0FBeUM7Ozs7OztJQUN6QyxrQ0FBTzs7Ozs7SUFBUCxVQUFRLElBQVk7UUFFbEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ1YsTUFBTSxDQUFDO1NBQ1I7UUFFRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDeEM7O2dCQWxHRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSwwYkFNTDtvQkFDTCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBaEJpQyxpQkFBaUI7OzJCQUFuRDs7U0FpQmEsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIFRlbXBsYXRlUmVmLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQW5jaG9yUGxhY2VtZW50IH0gZnJvbSAnLi90b29sdGlwLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbmxldCB1bmlxdWVUb29sdGlwSWQgPSAwO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd1eC10b29sdGlwJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJ0b29sdGlwIGluXCIgW2lkXT1cImlkXCIgW2F0dHIucm9sZV09XCJyb2xlXCIgW25nQ2xhc3NdPVwiW3BsYWNlbWVudCwgY3VzdG9tQ2xhc3NdXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwidG9vbHRpcC1hcnJvd1wiPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIiAoY2RrT2JzZXJ2ZUNvbnRlbnQpPVwicmVwb3NpdGlvbigpXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpc1RlbXBsYXRlUmVmXCI+e3sgY29udGVudCB9fTwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc1RlbXBsYXRlUmVmXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29udGVudFwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJjb250ZXh0XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+YCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9vbHRpcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcblxyXG4gIC8qKiBEZWZpbmUgYSB1bmlxdWUgaWQgZm9yIGVhY2ggdG9vbHRpcCAqL1xyXG4gIGlkOiBzdHJpbmcgPSBgdXgtdG9vbHRpcC0keysrdW5pcXVlVG9vbHRpcElkfWA7XHJcblxyXG4gIC8qKiBEZWZpbmUgdGhlIHRvb2x0aXAgcm9sZSAqL1xyXG4gIHJvbGU6IHN0cmluZyA9ICd0b29sdGlwJztcclxuXHJcbiAgLyoqIFRoZSBjb250ZW50IG9mIHRoZSB0b29sdGlwLCBlaXRoZXIgYSBzdHJpbmcgb3IgYSBUZW1wbGF0ZVJlZiBmb3IgZnVydGhlciBjdXN0b21pemF0aW9uICovXHJcbiAgY29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgLyoqIEFsbG93IHRoZSB1c2VyIHRvIHN1cHBseSBhIGNvbnRleHQgZm9yIHRoZSB0b29sdGlwIFRlbXBsYXRlUmVmICovXHJcbiAgY29udGV4dDogYW55O1xyXG5cclxuICAvKiogVGhlIHBvc2l0aW9uIHRoZSB0b29sdGlwIHNob3VsZCBkaXNwbGF5IHJlbGF0aXZlIHRvIHRoZSBhc3NvY2lhdGVkIGVsZW1lbnQgKi9cclxuICBwbGFjZW1lbnQ6IEFuY2hvclBsYWNlbWVudDtcclxuXHJcbiAgLyoqIEFsbG93IGEgY3VzdG9tIGNsYXNzIHRvIGJlIGFkZGVkIHRvIHRoZSB0b29sdGlwIHRvIGFsbG93IGN1c3RvbSBzdHlsaW5nICovXHJcbiAgY3VzdG9tQ2xhc3M6IHN0cmluZyA9ICcnO1xyXG5cclxuICAvKiogSW5kaWNhdGVzIHdoZXRoZXIgb3Igbm90IHRoZSBjb250ZW50IGlzIGEgc3RyaW5nIG9yIGEgVGVtcGxhdGVSZWYgKi9cclxuICBpc1RlbXBsYXRlUmVmOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKiBFbWl0IHdoZW4gdGhlIHRvb2x0aXAgbmVlZCB0byB1cGRhdGUgaXQncyBwb3NpdGlvbiAqL1xyXG4gIHJlcG9zaXRpb24kID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XHJcblxyXG4gIC8qKiBDbGVhbnVwIGFmdGVyIHRoZSBjb21wb25lbnQgaXMgZGVzdHJveWVkICovXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlcG9zaXRpb24kLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICAvKiogSW5mb3JtIHRoZSBwYXJlbnQgZGlyZWN0aXZlIHRoYXQgaXQgbmVlZHMgdG8gcmVjYWx1bGF0ZSB0aGUgcG9zaXRpb24gKi9cclxuICByZXBvc2l0aW9uKCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZXBvc2l0aW9uJC5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICAvKiogVGhpcyB3aWxsIHVwZGF0ZSB0aGUgY29udGVudCBvZiB0aGUgdG9vbHRpcCBhbmQgdHJpZ2dlciBjaGFuZ2UgZGV0ZWN0aW9uICovXHJcbiAgc2V0Q29udGVudChjb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xyXG4gICAgdGhpcy5pc1RlbXBsYXRlUmVmID0gY29udGVudCBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmO1xyXG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICAvKiogVGhpcyB3aWxsIHVwZGF0ZSB0aGUgdG9vbHRpcCBwbGFjZW1lbnQgYW5kIHRyaWdnZXIgY2hhbmdlIGRldGVjdGlvbiAqL1xyXG4gIHNldFBsYWNlbWVudChwbGFjZW1lbnQ6IEFuY2hvclBsYWNlbWVudCkge1xyXG5cclxuICAgIGlmICghcGxhY2VtZW50KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnBsYWNlbWVudCA9IHBsYWNlbWVudDtcclxuICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgLyoqIFRoaXMgd2lsbCBzZXQgYSBjdXN0b20gY2xhc3Mgb24gdGhlIHRvb2x0aXAgYW5kIHRyaWdnZXIgY2hhbmdlIGRldGVjdGlvbiAqL1xyXG4gIHNldENsYXNzKGN1c3RvbUNsYXNzOiBzdHJpbmcpOiB2b2lkIHtcclxuXHJcbiAgICBpZiAoIWN1c3RvbUNsYXNzKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmN1c3RvbUNsYXNzID0gY3VzdG9tQ2xhc3M7XHJcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIC8qKiBVcGRhdGVzIHRoZSBjb250ZXh0IHVzZWQgYnkgdGhlIFRlbXBsYXRlUmVmICovXHJcbiAgc2V0Q29udGV4dChjb250ZXh0OiBhbnkpOiB2b2lkIHtcclxuXHJcbiAgICBpZiAoIWNvbnRleHQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XHJcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIC8qKiBTcGVjaWZ5IHRoZSB0b29sdGlwIHJvbGUgYXR0cmlidXRlICovXHJcbiAgc2V0Um9sZShyb2xlOiBzdHJpbmcpOiB2b2lkIHtcclxuXHJcbiAgICBpZiAoIXJvbGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucm9sZSA9IHJvbGU7XHJcbiAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcbn0iXX0=