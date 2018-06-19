/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ESCAPE } from '@angular/cdk/keycodes';
import { ComponentPortal } from '@angular/cdk/portal';
import { Directive, HostBinding, Input } from '@angular/core';
import { fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TooltipDirective } from '../tooltip/index';
import { PopoverComponent } from './popover.component';
var PopoverDirective = /** @class */ (function (_super) {
    tslib_1.__extends(PopoverDirective, _super);
    function PopoverDirective() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * All the user to add a custom class to the popover
         */
        _this.customClass = '';
        /**
         * All the user to add a role to the popover - default is tooltip
         */
        _this.role = 'tooltip';
        /**
         * Provide the TemplateRef a context object
         */
        _this.context = {};
        /**
         * Delay the showing of the popover by a number of miliseconds
         */
        _this.delay = 0;
        /**
         * Specify which events should show the popover
         */
        _this.showTriggers = ['click'];
        /**
         * Specify which events should hide the popover
         */
        _this.hideTriggers = ['click', 'clickoutside', 'escape'];
        /**
         * Keep track of the tooltip visibility and update aria-expanded attribute
         */
        _this.isVisible = false;
        /**
         * Internally store the type of this component - usual for distinctions when extending the tooltip class
         */
        _this._type = 'popover';
        return _this;
    }
    /** Set up the triggers and bind to the show/hide events to keep visibility in sync */
    /**
     * Set up the triggers and bind to the show/hide events to keep visibility in sync
     * @return {?}
     */
    PopoverDirective.prototype.ngOnInit = /**
     * Set up the triggers and bind to the show/hide events to keep visibility in sync
     * @return {?}
     */
    function () {
        // set up the event triggers
        fromEvent(document, 'keydown').pipe(takeUntil(this._onDestroy)).subscribe(this.onKeyDown.bind(this));
        // check if there is an aria-described by attribute
        this._ariaDescribedBy = this._elementRef.nativeElement.hasAttribute('aria-describedby');
        // set up the default event triggers
        _super.prototype.ngOnInit.call(this);
    };
    /**
     * We need to send input changes to the popover component
     * We can't use setters as they may trigger before popover initialised and can't resend once initialised
     **/
    /**
     * We need to send input changes to the popover component
     * We can't use setters as they may trigger before popover initialised and can't resend once initialised
     *
     * @param {?} changes
     * @return {?}
     */
    PopoverDirective.prototype.ngOnChanges = /**
     * We need to send input changes to the popover component
     * We can't use setters as they may trigger before popover initialised and can't resend once initialised
     *
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
        if (this._instance && changes["title"]) {
            this._instance.setTitle(changes["title"].currentValue);
        }
    };
    /**
     * @param {?} overlayRef
     * @return {?}
     */
    PopoverDirective.prototype.createInstance = /**
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        var /** @type {?} */ instance = /** @type {?} */ (overlayRef.attach(this._portal).instance);
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
    };
    /**
     * @return {?}
     */
    PopoverDirective.prototype.createPortal = /**
     * @return {?}
     */
    function () {
        return this._portal || new ComponentPortal(PopoverComponent, this._viewContainerRef);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    PopoverDirective.prototype.onKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // if visible and the escape key is pressed and it is one of the hide triggers
        if (this.isVisible && event.keyCode === ESCAPE && this.includes(this.hideTriggers, 'escape')) {
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    PopoverDirective.prototype.onClickOutside = /**
     * @return {?}
     */
    function () {
        // if visible and it is one of the hide triggers
        if (this.isVisible && this.includes(this.hideTriggers, 'clickoutside')) {
            this.hide();
        }
    };
    /** Programmatically update the aria-describedby property */
    /**
     * Programmatically update the aria-describedby property
     * @param {?} id
     * @return {?}
     */
    PopoverDirective.prototype.setAriaDescribedBy = /**
     * Programmatically update the aria-describedby property
     * @param {?} id
     * @return {?}
     */
    function (id) {
        // we only want to set the aria-describedby attr when the content is a string and there was no user defined attribute already
        if (this._ariaDescribedBy === false && typeof this.content === 'string') {
            _super.prototype.setAriaDescribedBy.call(this, id);
        }
    };
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
    return PopoverDirective;
}(TooltipDirective));
export { PopoverDirective };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9wb3BvdmVyL3BvcG92ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRS9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQWlELE1BQU0sZUFBZSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztJQU1qQiw0Q0FBZ0I7Ozs7Ozs0QkFZTCxFQUFFOzs7O3FCQUdWLFNBQVM7Ozs7d0JBR04sRUFBRTs7OztzQkFHSCxDQUFDOzs7OzZCQUdOLENBQUMsT0FBTyxDQUFDOzs7OzZCQUdULENBQUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLENBQUM7Ozs7MEJBR2IsS0FBSzs7OztzQkFZbkMsU0FBUzs7O0lBRW5DLHNGQUFzRjs7Ozs7SUFDdEYsbUNBQVE7Ozs7SUFBUjs7UUFHSSxTQUFTLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7O1FBR3JHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFB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U0FBQyxhQUFhOzRCQUduQixLQUFLLFNBQUMsZ0JBQWdCOzBCQUd0QixLQUFLLFNBQUMsY0FBYztpQ0FHcEIsS0FBSztpQ0FHTCxLQUFLOzhCQUdMLFdBQVcsU0FBQyxvQkFBb0I7OzJCQTNDckM7RUFhc0MsZ0JBQWdCO1NBQXpDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVTQ0FQRSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XHJcbmltcG9ydCB7IE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXMsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFRvb2x0aXBEaXJlY3RpdmUgfSBmcm9tICcuLi90b29sdGlwL2luZGV4JztcclxuaW1wb3J0IHsgUG9wb3ZlckNvbXBvbmVudCB9IGZyb20gJy4vcG9wb3Zlci5jb21wb25lbnQnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1t1eFBvcG92ZXJdJyxcclxuICAgIGV4cG9ydEFzOiAndXgtcG9wb3ZlcidcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvcG92ZXJEaXJlY3RpdmUgZXh0ZW5kcyBUb29sdGlwRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG5cclxuICAgIC8qKiBDb250YWlucyB0aGUgY29udGVudCBvZiB0aGUgcG9wb3ZlciBvciBhIFRlbXBsYXRlUmVmIGZvciBtb3JlIGRldGFpbGVkIGNvbnRlbnQgKi9cclxuICAgIEBJbnB1dCgndXhQb3BvdmVyJykgY29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgICAvKiogT3B0aW9uYWxseSBkaXNwbGF5IGEgdGl0bGUgaW4gdGhlIHBvcG92ZXIgKi9cclxuICAgIEBJbnB1dCgncG9wb3ZlclRpdGxlJykgdGl0bGU6IHN0cmluZztcclxuXHJcbiAgICAvKiogQWxsb3cgdGhlIHBvcG92ZXIgdG8gYmUgY29uZGl0aW9uYWxseSBkaXNhYmxlZCAqL1xyXG4gICAgQElucHV0KCdwb3BvdmVyRGlzYWJsZWQnKSBkaXNhYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgICAvKiogQWxsIHRoZSB1c2VyIHRvIGFkZCBhIGN1c3RvbSBjbGFzcyB0byB0aGUgcG9wb3ZlciAqL1xyXG4gICAgQElucHV0KCdwb3BvdmVyQ2xhc3MnKSBjdXN0b21DbGFzczogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgLyoqIEFsbCB0aGUgdXNlciB0byBhZGQgYSByb2xlIHRvIHRoZSBwb3BvdmVyIC0gZGVmYXVsdCBpcyB0b29sdGlwICovXHJcbiAgICBASW5wdXQoJ3BvcG92ZXJSb2xlJykgcm9sZTogc3RyaW5nID0gJ3Rvb2x0aXAnO1xyXG5cclxuICAgIC8qKiBQcm92aWRlIHRoZSBUZW1wbGF0ZVJlZiBhIGNvbnRleHQgb2JqZWN0ICovXHJcbiAgICBASW5wdXQoJ3BvcG92ZXJDb250ZXh0JykgY29udGV4dDogYW55ID0ge307XHJcblxyXG4gICAgLyoqIERlbGF5IHRoZSBzaG93aW5nIG9mIHRoZSBwb3BvdmVyIGJ5IGEgbnVtYmVyIG9mIG1pbGlzZWNvbmRzICovXHJcbiAgICBASW5wdXQoJ3BvcG92ZXJEZWxheScpIGRlbGF5OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8qKiBTcGVjaWZ5IHdoaWNoIGV2ZW50cyBzaG91bGQgc2hvdyB0aGUgcG9wb3ZlciAqL1xyXG4gICAgQElucHV0KCkgc2hvd1RyaWdnZXJzOiBzdHJpbmdbXSA9IFsnY2xpY2snXTtcclxuXHJcbiAgICAvKiogU3BlY2lmeSB3aGljaCBldmVudHMgc2hvdWxkIGhpZGUgdGhlIHBvcG92ZXIgKi9cclxuICAgIEBJbnB1dCgpIGhpZGVUcmlnZ2Vyczogc3RyaW5nW10gPSBbJ2NsaWNrJywgJ2NsaWNrb3V0c2lkZScsICdlc2NhcGUnXTtcclxuXHJcbiAgICAvKiogS2VlcCB0cmFjayBvZiB0aGUgdG9vbHRpcCB2aXNpYmlsaXR5IGFuZCB1cGRhdGUgYXJpYS1leHBhbmRlZCBhdHRyaWJ1dGUgKi9cclxuICAgIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWV4cGFuZGVkJykgaXNWaXNpYmxlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLyoqIEEgcmVmZXJlbmNlIHRvIHRoZSBDREsgcG9ydGFsIGNvbnRhaW5pbmcgdGhlIG92ZXJsYXkgKi9cclxuICAgIHByb3RlY3RlZCBfcG9ydGFsOiBDb21wb25lbnRQb3J0YWw8UG9wb3ZlckNvbXBvbmVudD47XHJcblxyXG4gICAgLyoqIEEgcmVmZXJlbmNlIHRvIHRoZSBpbnN0YW5jZSBvZiB0aGUgcG9wb3ZlciBjb21wb25lbnQgd2hlbiBjcmVhdGVkICovXHJcbiAgICBwcm90ZWN0ZWQgX2luc3RhbmNlOiBQb3BvdmVyQ29tcG9uZW50O1xyXG5cclxuICAgIC8qKiBEZXRlcm1pbmUgd2hldGhlciBvciBub3QgYW4gYXJpYS1kZXNjcmliZWRieSBwcm9wZXJ0eSBvcmlnaW5hbGx5IGV4aXN0ZWQgb24gdGhlIGVsZW1lbnQgKi9cclxuICAgIHByaXZhdGUgX2FyaWFEZXNjcmliZWRCeTogYm9vbGVhbjtcclxuXHJcbiAgICAvKiogSW50ZXJuYWxseSBzdG9yZSB0aGUgdHlwZSBvZiB0aGlzIGNvbXBvbmVudCAtIHVzdWFsIGZvciBkaXN0aW5jdGlvbnMgd2hlbiBleHRlbmRpbmcgdGhlIHRvb2x0aXAgY2xhc3MgKi9cclxuICAgIHByb3RlY3RlZCBfdHlwZTogc3RyaW5nID0gJ3BvcG92ZXInO1xyXG5cclxuICAgIC8qKiBTZXQgdXAgdGhlIHRyaWdnZXJzIGFuZCBiaW5kIHRvIHRoZSBzaG93L2hpZGUgZXZlbnRzIHRvIGtlZXAgdmlzaWJpbGl0eSBpbiBzeW5jICovXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBldmVudCB0cmlnZ2Vyc1xyXG4gICAgICAgIGZyb21FdmVudChkb2N1bWVudCwgJ2tleWRvd24nKS5waXBlKHRha2VVbnRpbCh0aGlzLl9vbkRlc3Ryb3kpKS5zdWJzY3JpYmUodGhpcy5vbktleURvd24uYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZXJlIGlzIGFuIGFyaWEtZGVzY3JpYmVkIGJ5IGF0dHJpYnV0ZVxyXG4gICAgICAgIHRoaXMuX2FyaWFEZXNjcmliZWRCeSA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknKTtcclxuXHJcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBkZWZhdWx0IGV2ZW50IHRyaWdnZXJzXHJcbiAgICAgICAgc3VwZXIubmdPbkluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFdlIG5lZWQgdG8gc2VuZCBpbnB1dCBjaGFuZ2VzIHRvIHRoZSBwb3BvdmVyIGNvbXBvbmVudFxyXG4gICAgICogV2UgY2FuJ3QgdXNlIHNldHRlcnMgYXMgdGhleSBtYXkgdHJpZ2dlciBiZWZvcmUgcG9wb3ZlciBpbml0aWFsaXNlZCBhbmQgY2FuJ3QgcmVzZW5kIG9uY2UgaW5pdGlhbGlzZWRcclxuICAgICAqKi9cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5uZ09uQ2hhbmdlcyhjaGFuZ2VzKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlICYmIGNoYW5nZXMudGl0bGUpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2Uuc2V0VGl0bGUoY2hhbmdlcy50aXRsZS5jdXJyZW50VmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY3JlYXRlSW5zdGFuY2Uob3ZlcmxheVJlZjogT3ZlcmxheVJlZik6IFBvcG92ZXJDb21wb25lbnQge1xyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gb3ZlcmxheVJlZi5hdHRhY2godGhpcy5fcG9ydGFsKS5pbnN0YW5jZSBhcyBQb3BvdmVyQ29tcG9uZW50O1xyXG5cclxuICAgICAgICAvLyBzdXBwbHkgdGhlIHRvb2x0aXAgd2l0aCB0aGUgY29ycmVjdCBwcm9wZXJ0aWVzXHJcbiAgICAgICAgaW5zdGFuY2Uuc2V0VGl0bGUodGhpcy50aXRsZSk7XHJcbiAgICAgICAgaW5zdGFuY2Uuc2V0Q29udGVudCh0aGlzLmNvbnRlbnQpO1xyXG4gICAgICAgIGluc3RhbmNlLnNldFBsYWNlbWVudCh0aGlzLnBsYWNlbWVudCk7XHJcbiAgICAgICAgaW5zdGFuY2Uuc2V0Q2xhc3ModGhpcy5jdXN0b21DbGFzcyk7XHJcbiAgICAgICAgaW5zdGFuY2Uuc2V0Q29udGV4dCh0aGlzLmNvbnRleHQpO1xyXG4gICAgICAgIGluc3RhbmNlLnNldFJvbGUodGhpcy5yb2xlKTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBhcmlhLWRlc2NyaWJlZGJ5IGF0dHJpYnV0ZVxyXG4gICAgICAgIHRoaXMuc2V0QXJpYURlc2NyaWJlZEJ5KGluc3RhbmNlLmlkKTtcclxuXHJcbiAgICAgICAgLy8gc3Vic2NyaWJlIHRvIHRoZSBvdXRzaWRlIGNsaWNrIGV2ZW50XHJcbiAgICAgICAgaW5zdGFuY2UuY2xpY2tPdXRzaWRlJC5waXBlKHRha2VVbnRpbCh0aGlzLl9vbkRlc3Ryb3kpKS5zdWJzY3JpYmUodGhpcy5vbkNsaWNrT3V0c2lkZS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBjcmVhdGVQb3J0YWwoKTogQ29tcG9uZW50UG9ydGFsPFBvcG92ZXJDb21wb25lbnQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcG9ydGFsIHx8IG5ldyBDb21wb25lbnRQb3J0YWwoUG9wb3ZlckNvbXBvbmVudCwgdGhpcy5fdmlld0NvbnRhaW5lclJlZik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gaWYgdmlzaWJsZSBhbmQgdGhlIGVzY2FwZSBrZXkgaXMgcHJlc3NlZCBhbmQgaXQgaXMgb25lIG9mIHRoZSBoaWRlIHRyaWdnZXJzXHJcbiAgICAgICAgaWYgKHRoaXMuaXNWaXNpYmxlICYmIGV2ZW50LmtleUNvZGUgPT09IEVTQ0FQRSAmJiB0aGlzLmluY2x1ZGVzKHRoaXMuaGlkZVRyaWdnZXJzLCAnZXNjYXBlJykpIHtcclxuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25DbGlja091dHNpZGUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gaWYgdmlzaWJsZSBhbmQgaXQgaXMgb25lIG9mIHRoZSBoaWRlIHRyaWdnZXJzXHJcbiAgICAgICAgaWYgKHRoaXMuaXNWaXNpYmxlICYmIHRoaXMuaW5jbHVkZXModGhpcy5oaWRlVHJpZ2dlcnMsICdjbGlja291dHNpZGUnKSkge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFByb2dyYW1tYXRpY2FsbHkgdXBkYXRlIHRoZSBhcmlhLWRlc2NyaWJlZGJ5IHByb3BlcnR5ICovXHJcbiAgICBwcm90ZWN0ZWQgc2V0QXJpYURlc2NyaWJlZEJ5KGlkOiBzdHJpbmcgfCBudWxsKTogdm9pZCB7XHJcblxyXG4gICAgICAgIC8vIHdlIG9ubHkgd2FudCB0byBzZXQgdGhlIGFyaWEtZGVzY3JpYmVkYnkgYXR0ciB3aGVuIHRoZSBjb250ZW50IGlzIGEgc3RyaW5nIGFuZCB0aGVyZSB3YXMgbm8gdXNlciBkZWZpbmVkIGF0dHJpYnV0ZSBhbHJlYWR5XHJcbiAgICAgICAgaWYgKHRoaXMuX2FyaWFEZXNjcmliZWRCeSA9PT0gZmFsc2UgJiYgdHlwZW9mIHRoaXMuY29udGVudCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgc3VwZXIuc2V0QXJpYURlc2NyaWJlZEJ5KGlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59Il19