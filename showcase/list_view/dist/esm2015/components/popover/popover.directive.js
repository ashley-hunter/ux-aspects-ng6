/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ESCAPE } from '@angular/cdk/keycodes';
import { ComponentPortal } from '@angular/cdk/portal';
import { Directive, HostBinding, Input } from '@angular/core';
import { fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TooltipDirective } from '../tooltip/index';
import { PopoverComponent } from './popover.component';
export class PopoverDirective extends TooltipDirective {
    constructor() {
        super(...arguments);
        /**
         * All the user to add a custom class to the popover
         */
        this.customClass = '';
        /**
         * All the user to add a role to the popover - default is tooltip
         */
        this.role = 'tooltip';
        /**
         * Provide the TemplateRef a context object
         */
        this.context = {};
        /**
         * Delay the showing of the popover by a number of miliseconds
         */
        this.delay = 0;
        /**
         * Specify which events should show the popover
         */
        this.showTriggers = ['click'];
        /**
         * Specify which events should hide the popover
         */
        this.hideTriggers = ['click', 'clickoutside', 'escape'];
        /**
         * Keep track of the tooltip visibility and update aria-expanded attribute
         */
        this.isVisible = false;
        /**
         * Internally store the type of this component - usual for distinctions when extending the tooltip class
         */
        this._type = 'popover';
    }
    /**
     * Set up the triggers and bind to the show/hide events to keep visibility in sync
     * @return {?}
     */
    ngOnInit() {
        // set up the event triggers
        fromEvent(document, 'keydown').pipe(takeUntil(this._onDestroy)).subscribe(this.onKeyDown.bind(this));
        // check if there is an aria-described by attribute
        this._ariaDescribedBy = this._elementRef.nativeElement.hasAttribute('aria-describedby');
        // set up the default event triggers
        super.ngOnInit();
    }
    /**
     * We need to send input changes to the popover component
     * We can't use setters as they may trigger before popover initialised and can't resend once initialised
     *
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        if (this._instance && changes["title"]) {
            this._instance.setTitle(changes["title"].currentValue);
        }
    }
    /**
     * @param {?} overlayRef
     * @return {?}
     */
    createInstance(overlayRef) {
        const /** @type {?} */ instance = /** @type {?} */ (overlayRef.attach(this._portal).instance);
        // supply the tooltip with the correct properties
        instance.setTitle(this.title);
        instance.setContent(this.content);
        instance.setPlacement(this.placement);
        instance.setClass(this.customClass);
        instance.setContext(this.context);
        instance.setRole(this.role);
        // Update the aria-describedby attribute
        this.setAriaDescribedBy(instance.id);
        // subscribe to the outside click event
        instance.clickOutside$.pipe(takeUntil(this._onDestroy)).subscribe(this.onClickOutside.bind(this));
        return instance;
    }
    /**
     * @return {?}
     */
    createPortal() {
        return this._portal || new ComponentPortal(PopoverComponent, this._viewContainerRef);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        // if visible and the escape key is pressed and it is one of the hide triggers
        if (this.isVisible && event.keyCode === ESCAPE && this.includes(this.hideTriggers, 'escape')) {
            this.hide();
        }
    }
    /**
     * @return {?}
     */
    onClickOutside() {
        // if visible and it is one of the hide triggers
        if (this.isVisible && this.includes(this.hideTriggers, 'clickoutside')) {
            this.hide();
        }
    }
    /**
     * Programmatically update the aria-describedby property
     * @param {?} id
     * @return {?}
     */
    setAriaDescribedBy(id) {
        // we only want to set the aria-describedby attr when the content is a string and there was no user defined attribute already
        if (this._ariaDescribedBy === false && typeof this.content === 'string') {
            super.setAriaDescribedBy(id);
        }
    }
}
PopoverDirective.decorators = [
    { type: Directive, args: [{
                selector: '[uxPopover]',
                exportAs: 'ux-popover'
            },] },
];
/** @nocollapse */
PopoverDirective.propDecorators = {
    "content": [{ type: Input, args: ['uxPopover',] },],
    "title": [{ type: Input, args: ['popoverTitle',] },],
    "disabled": [{ type: Input, args: ['popoverDisabled',] },],
    "customClass": [{ type: Input, args: ['popoverClass',] },],
    "role": [{ type: Input, args: ['popoverRole',] },],
    "context": [{ type: Input, args: ['popoverContext',] },],
    "delay": [{ type: Input, args: ['popoverDelay',] },],
    "showTriggers": [{ type: Input },],
    "hideTriggers": [{ type: Input },],
    "isVisible": [{ type: HostBinding, args: ['attr.aria-expanded',] },],
};
function PopoverDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    PopoverDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    PopoverDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    PopoverDirective.propDecorators;
    /**
     * Contains the content of the popover or a TemplateRef for more detailed content
     * @type {?}
     */
    PopoverDirective.prototype.content;
    /**
     * Optionally display a title in the popover
     * @type {?}
     */
    PopoverDirective.prototype.title;
    /**
     * Allow the popover to be conditionally disabled
     * @type {?}
     */
    PopoverDirective.prototype.disabled;
    /**
     * All the user to add a custom class to the popover
     * @type {?}
     */
    PopoverDirective.prototype.customClass;
    /**
     * All the user to add a role to the popover - default is tooltip
     * @type {?}
     */
    PopoverDirective.prototype.role;
    /**
     * Provide the TemplateRef a context object
     * @type {?}
     */
    PopoverDirective.prototype.context;
    /**
     * Delay the showing of the popover by a number of miliseconds
     * @type {?}
     */
    PopoverDirective.prototype.delay;
    /**
     * Specify which events should show the popover
     * @type {?}
     */
    PopoverDirective.prototype.showTriggers;
    /**
     * Specify which events should hide the popover
     * @type {?}
     */
    PopoverDirective.prototype.hideTriggers;
    /**
     * Keep track of the tooltip visibility and update aria-expanded attribute
     * @type {?}
     */
    PopoverDirective.prototype.isVisible;
    /**
     * A reference to the CDK portal containing the overlay
     * @type {?}
     */
    PopoverDirective.prototype._portal;
    /**
     * A reference to the instance of the popover component when created
     * @type {?}
     */
    PopoverDirective.prototype._instance;
    /**
     * Determine whether or not an aria-describedby property originally existed on the element
     * @type {?}
     */
    PopoverDirective.prototype._ariaDescribedBy;
    /**
     * Internally store the type of this component - usual for distinctions when extending the tooltip class
     * @type {?}
     */
    PopoverDirective.prototype._type;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9wb3BvdmVyL3BvcG92ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBaUQsTUFBTSxlQUFlLENBQUM7QUFDN0csT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFNdkQsTUFBTSx1QkFBd0IsU0FBUSxnQkFBZ0I7Ozs7OzsyQkFZTCxFQUFFOzs7O29CQUdWLFNBQVM7Ozs7dUJBR04sRUFBRTs7OztxQkFHSCxDQUFDOzs7OzRCQUdOLENBQUMsT0FBTyxDQUFDOzs7OzRCQUdULENBQUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLENBQUM7Ozs7eUJBR2IsS0FBSzs7OztxQkFZbkMsU0FBUzs7Ozs7O0lBR25DLFFBQVE7O1FBR0osU0FBUyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOztRQUdyRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMs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TCxLQUFLOzBCQUdMLFdBQVcsU0FBQyxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFU0NBUEUgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5pbXBvcnQgeyBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBUb29sdGlwRGlyZWN0aXZlIH0gZnJvbSAnLi4vdG9vbHRpcC9pbmRleCc7XHJcbmltcG9ydCB7IFBvcG92ZXJDb21wb25lbnQgfSBmcm9tICcuL3BvcG92ZXIuY29tcG9uZW50JztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbdXhQb3BvdmVyXScsXHJcbiAgICBleHBvcnRBczogJ3V4LXBvcG92ZXInXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb3BvdmVyRGlyZWN0aXZlIGV4dGVuZHMgVG9vbHRpcERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuXHJcbiAgICAvKiogQ29udGFpbnMgdGhlIGNvbnRlbnQgb2YgdGhlIHBvcG92ZXIgb3IgYSBUZW1wbGF0ZVJlZiBmb3IgbW9yZSBkZXRhaWxlZCBjb250ZW50ICovXHJcbiAgICBASW5wdXQoJ3V4UG9wb3ZlcicpIGNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gICAgLyoqIE9wdGlvbmFsbHkgZGlzcGxheSBhIHRpdGxlIGluIHRoZSBwb3BvdmVyICovXHJcbiAgICBASW5wdXQoJ3BvcG92ZXJUaXRsZScpIHRpdGxlOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqIEFsbG93IHRoZSBwb3BvdmVyIHRvIGJlIGNvbmRpdGlvbmFsbHkgZGlzYWJsZWQgKi9cclxuICAgIEBJbnB1dCgncG9wb3ZlckRpc2FibGVkJykgZGlzYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqIEFsbCB0aGUgdXNlciB0byBhZGQgYSBjdXN0b20gY2xhc3MgdG8gdGhlIHBvcG92ZXIgKi9cclxuICAgIEBJbnB1dCgncG9wb3ZlckNsYXNzJykgY3VzdG9tQ2xhc3M6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgIC8qKiBBbGwgdGhlIHVzZXIgdG8gYWRkIGEgcm9sZSB0byB0aGUgcG9wb3ZlciAtIGRlZmF1bHQgaXMgdG9vbHRpcCAqL1xyXG4gICAgQElucHV0KCdwb3BvdmVyUm9sZScpIHJvbGU6IHN0cmluZyA9ICd0b29sdGlwJztcclxuXHJcbiAgICAvKiogUHJvdmlkZSB0aGUgVGVtcGxhdGVSZWYgYSBjb250ZXh0IG9iamVjdCAqL1xyXG4gICAgQElucHV0KCdwb3BvdmVyQ29udGV4dCcpIGNvbnRleHQ6IGFueSA9IHt9O1xyXG5cclxuICAgIC8qKiBEZWxheSB0aGUgc2hvd2luZyBvZiB0aGUgcG9wb3ZlciBieSBhIG51bWJlciBvZiBtaWxpc2Vjb25kcyAqL1xyXG4gICAgQElucHV0KCdwb3BvdmVyRGVsYXknKSBkZWxheTogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvKiogU3BlY2lmeSB3aGljaCBldmVudHMgc2hvdWxkIHNob3cgdGhlIHBvcG92ZXIgKi9cclxuICAgIEBJbnB1dCgpIHNob3dUcmlnZ2Vyczogc3RyaW5nW10gPSBbJ2NsaWNrJ107XHJcblxyXG4gICAgLyoqIFNwZWNpZnkgd2hpY2ggZXZlbnRzIHNob3VsZCBoaWRlIHRoZSBwb3BvdmVyICovXHJcbiAgICBASW5wdXQoKSBoaWRlVHJpZ2dlcnM6IHN0cmluZ1tdID0gWydjbGljaycsICdjbGlja291dHNpZGUnLCAnZXNjYXBlJ107XHJcblxyXG4gICAgLyoqIEtlZXAgdHJhY2sgb2YgdGhlIHRvb2x0aXAgdmlzaWJpbGl0eSBhbmQgdXBkYXRlIGFyaWEtZXhwYW5kZWQgYXR0cmlidXRlICovXHJcbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1leHBhbmRlZCcpIGlzVmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8qKiBBIHJlZmVyZW5jZSB0byB0aGUgQ0RLIHBvcnRhbCBjb250YWluaW5nIHRoZSBvdmVybGF5ICovXHJcbiAgICBwcm90ZWN0ZWQgX3BvcnRhbDogQ29tcG9uZW50UG9ydGFsPFBvcG92ZXJDb21wb25lbnQ+O1xyXG5cclxuICAgIC8qKiBBIHJlZmVyZW5jZSB0byB0aGUgaW5zdGFuY2Ugb2YgdGhlIHBvcG92ZXIgY29tcG9uZW50IHdoZW4gY3JlYXRlZCAqL1xyXG4gICAgcHJvdGVjdGVkIF9pbnN0YW5jZTogUG9wb3ZlckNvbXBvbmVudDtcclxuXHJcbiAgICAvKiogRGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IGFuIGFyaWEtZGVzY3JpYmVkYnkgcHJvcGVydHkgb3JpZ2luYWxseSBleGlzdGVkIG9uIHRoZSBlbGVtZW50ICovXHJcbiAgICBwcml2YXRlIF9hcmlhRGVzY3JpYmVkQnk6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqIEludGVybmFsbHkgc3RvcmUgdGhlIHR5cGUgb2YgdGhpcyBjb21wb25lbnQgLSB1c3VhbCBmb3IgZGlzdGluY3Rpb25zIHdoZW4gZXh0ZW5kaW5nIHRoZSB0b29sdGlwIGNsYXNzICovXHJcbiAgICBwcm90ZWN0ZWQgX3R5cGU6IHN0cmluZyA9ICdwb3BvdmVyJztcclxuXHJcbiAgICAvKiogU2V0IHVwIHRoZSB0cmlnZ2VycyBhbmQgYmluZCB0byB0aGUgc2hvdy9oaWRlIGV2ZW50cyB0byBrZWVwIHZpc2liaWxpdHkgaW4gc3luYyAqL1xyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIC8vIHNldCB1cCB0aGUgZXZlbnQgdHJpZ2dlcnNcclxuICAgICAgICBmcm9tRXZlbnQoZG9jdW1lbnQsICdrZXlkb3duJykucGlwZSh0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KSkuc3Vic2NyaWJlKHRoaXMub25LZXlEb3duLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICAvLyBjaGVjayBpZiB0aGVyZSBpcyBhbiBhcmlhLWRlc2NyaWJlZCBieSBhdHRyaWJ1dGVcclxuICAgICAgICB0aGlzLl9hcmlhRGVzY3JpYmVkQnkgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuaGFzQXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5Jyk7XHJcblxyXG4gICAgICAgIC8vIHNldCB1cCB0aGUgZGVmYXVsdCBldmVudCB0cmlnZ2Vyc1xyXG4gICAgICAgIHN1cGVyLm5nT25Jbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXZSBuZWVkIHRvIHNlbmQgaW5wdXQgY2hhbmdlcyB0byB0aGUgcG9wb3ZlciBjb21wb25lbnRcclxuICAgICAqIFdlIGNhbid0IHVzZSBzZXR0ZXJzIGFzIHRoZXkgbWF5IHRyaWdnZXIgYmVmb3JlIHBvcG92ZXIgaW5pdGlhbGlzZWQgYW5kIGNhbid0IHJlc2VuZCBvbmNlIGluaXRpYWxpc2VkXHJcbiAgICAgKiovXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9pbnN0YW5jZSAmJiBjaGFuZ2VzLnRpdGxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlLnNldFRpdGxlKGNoYW5nZXMudGl0bGUuY3VycmVudFZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUluc3RhbmNlKG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYpOiBQb3BvdmVyQ29tcG9uZW50IHtcclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG92ZXJsYXlSZWYuYXR0YWNoKHRoaXMuX3BvcnRhbCkuaW5zdGFuY2UgYXMgUG9wb3ZlckNvbXBvbmVudDtcclxuXHJcbiAgICAgICAgLy8gc3VwcGx5IHRoZSB0b29sdGlwIHdpdGggdGhlIGNvcnJlY3QgcHJvcGVydGllc1xyXG4gICAgICAgIGluc3RhbmNlLnNldFRpdGxlKHRoaXMudGl0bGUpO1xyXG4gICAgICAgIGluc3RhbmNlLnNldENvbnRlbnQodGhpcy5jb250ZW50KTtcclxuICAgICAgICBpbnN0YW5jZS5zZXRQbGFjZW1lbnQodGhpcy5wbGFjZW1lbnQpO1xyXG4gICAgICAgIGluc3RhbmNlLnNldENsYXNzKHRoaXMuY3VzdG9tQ2xhc3MpO1xyXG4gICAgICAgIGluc3RhbmNlLnNldENvbnRleHQodGhpcy5jb250ZXh0KTtcclxuICAgICAgICBpbnN0YW5jZS5zZXRSb2xlKHRoaXMucm9sZSk7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgYXJpYS1kZXNjcmliZWRieSBhdHRyaWJ1dGVcclxuICAgICAgICB0aGlzLnNldEFyaWFEZXNjcmliZWRCeShpbnN0YW5jZS5pZCk7XHJcblxyXG4gICAgICAgIC8vIHN1YnNjcmliZSB0byB0aGUgb3V0c2lkZSBjbGljayBldmVudFxyXG4gICAgICAgIGluc3RhbmNlLmNsaWNrT3V0c2lkZSQucGlwZSh0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KSkuc3Vic2NyaWJlKHRoaXMub25DbGlja091dHNpZGUuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY3JlYXRlUG9ydGFsKCk6IENvbXBvbmVudFBvcnRhbDxQb3BvdmVyQ29tcG9uZW50PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BvcnRhbCB8fCBuZXcgQ29tcG9uZW50UG9ydGFsKFBvcG92ZXJDb21wb25lbnQsIHRoaXMuX3ZpZXdDb250YWluZXJSZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcblxyXG4gICAgICAgIC8vIGlmIHZpc2libGUgYW5kIHRoZSBlc2NhcGUga2V5IGlzIHByZXNzZWQgYW5kIGl0IGlzIG9uZSBvZiB0aGUgaGlkZSB0cmlnZ2Vyc1xyXG4gICAgICAgIGlmICh0aGlzLmlzVmlzaWJsZSAmJiBldmVudC5rZXlDb2RlID09PSBFU0NBUEUgJiYgdGhpcy5pbmNsdWRlcyh0aGlzLmhpZGVUcmlnZ2VycywgJ2VzY2FwZScpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQ2xpY2tPdXRzaWRlKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGlmIHZpc2libGUgYW5kIGl0IGlzIG9uZSBvZiB0aGUgaGlkZSB0cmlnZ2Vyc1xyXG4gICAgICAgIGlmICh0aGlzLmlzVmlzaWJsZSAmJiB0aGlzLmluY2x1ZGVzKHRoaXMuaGlkZVRyaWdnZXJzLCAnY2xpY2tvdXRzaWRlJykpIHtcclxuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBQcm9ncmFtbWF0aWNhbGx5IHVwZGF0ZSB0aGUgYXJpYS1kZXNjcmliZWRieSBwcm9wZXJ0eSAqL1xyXG4gICAgcHJvdGVjdGVkIHNldEFyaWFEZXNjcmliZWRCeShpZDogc3RyaW5nIHwgbnVsbCk6IHZvaWQge1xyXG5cclxuICAgICAgICAvLyB3ZSBvbmx5IHdhbnQgdG8gc2V0IHRoZSBhcmlhLWRlc2NyaWJlZGJ5IGF0dHIgd2hlbiB0aGUgY29udGVudCBpcyBhIHN0cmluZyBhbmQgdGhlcmUgd2FzIG5vIHVzZXIgZGVmaW5lZCBhdHRyaWJ1dGUgYWxyZWFkeVxyXG4gICAgICAgIGlmICh0aGlzLl9hcmlhRGVzY3JpYmVkQnkgPT09IGZhbHNlICYmIHR5cGVvZiB0aGlzLmNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLnNldEFyaWFEZXNjcmliZWRCeShpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSJdfQ==