/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Overlay, ScrollDispatcher } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ChangeDetectorRef, Directive, ElementRef, EventEmitter, Input, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { Subject, fromEvent } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { TooltipComponent } from './tooltip.component';
import { TooltipService } from './tooltip.service';
export class TooltipDirective {
    /**
     * @param {?} _elementRef
     * @param {?} _viewContainerRef
     * @param {?} _overlay
     * @param {?} _scrollDispatcher
     * @param {?} _changeDetectorRef
     * @param {?} _renderer
     * @param {?} _tooltipService
     */
    constructor(_elementRef, _viewContainerRef, _overlay, _scrollDispatcher, _changeDetectorRef, _renderer, _tooltipService) {
        this._elementRef = _elementRef;
        this._viewContainerRef = _viewContainerRef;
        this._overlay = _overlay;
        this._scrollDispatcher = _scrollDispatcher;
        this._changeDetectorRef = _changeDetectorRef;
        this._renderer = _renderer;
        this._tooltipService = _tooltipService;
        /**
         * All the user to add a custom class to the tooltip
         */
        this.customClass = '';
        /**
         * All the user to add a role to the tooltip - default is tooltip
         */
        this.role = 'tooltip';
        /**
         * Provide the TemplateRef a context object
         */
        this.context = {};
        /**
         * Delay the showing of the tooltip by a number of miliseconds
         */
        this.delay = 0;
        /**
         * Programmatically show and hide the tooltip
         */
        this.isOpen = false;
        /**
         * Customize how the tooltip should be positioned relative to the element
         */
        this.placement = 'top';
        /**
         * Specify which events should show the tooltip
         */
        this.showTriggers = ['mouseenter', 'focus'];
        /**
         * Specify which events should hide the tooltip
         */
        this.hideTriggers = ['mouseleave', 'blur'];
        /**
         * Emits an event when the tooltip is shown
         */
        this.shown = new EventEmitter();
        /**
         * Emits a event when the tooltip is hidden
         */
        this.hidden = new EventEmitter();
        /**
         * Allow two way binding to track the visibility of the tooltip
         */
        this.isOpenChange = new EventEmitter();
        /**
         * Keep track of the tooltip visibility
         */
        this.isVisible = false;
        /**
         * This will emit when the directive is destroyed allowing us to unsubscribe all subscriptions automatically
         */
        this._onDestroy = new Subject();
        /**
         * Internally store the type of this component - usual for distinctions when extending this class
         */
        this._type = 'tooltip';
    }
    /**
     * Set up the triggers and bind to the show/hide events to keep visibility in sync
     * @return {?}
     */
    ngOnInit() {
        // set up show and hide event triggers
        fromEvent(this._elementRef.nativeElement, 'click').pipe(takeUntil(this._onDestroy)).subscribe(this.onClick.bind(this));
        fromEvent(this._elementRef.nativeElement, 'mouseenter').pipe(takeUntil(this._onDestroy)).subscribe(this.onMouseEnter.bind(this));
        fromEvent(this._elementRef.nativeElement, 'mouseleave').pipe(takeUntil(this._onDestroy)).subscribe(this.onMouseLeave.bind(this));
        fromEvent(this._elementRef.nativeElement, 'focus').pipe(takeUntil(this._onDestroy)).subscribe(this.onFocus.bind(this));
        fromEvent(this._elementRef.nativeElement, 'blur').pipe(takeUntil(this._onDestroy)).subscribe(this.onBlur.bind(this));
        // when any other tooltips open hide this one
        this._tooltipService.shown$.pipe(filter(() => this._type === 'tooltip'), filter(tooltip => tooltip !== this._instance), takeUntil(this._onDestroy)).subscribe(this.hide.bind(this));
        // if the tooltip should be initially visible then open it
        if (this.isOpen) {
            this.show();
        }
    }
    /**
     * We need to send input changes to the tooltip component
     * We can't use setters as they may trigger before tooltip initialised and can't resend once initialised
     *
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        // we can ignore the first change as it's handled in ngOnInit
        if (changes["isOpen"] && !changes["isOpen"].firstChange && changes["isOpen"].currentValue !== this.isVisible) {
            changes["isOpen"].currentValue ? this.show() : this.hide();
        }
        // destroy the overlay ref so a new correctly positioned instance will be created next time
        if (changes["placement"]) {
            this.destroyOverlay();
        }
        if (this._instance && changes["placement"]) {
            this._instance.setPlacement(changes["placement"].currentValue);
        }
        if (this._instance && changes["content"]) {
            this._instance.setContent(changes["content"].currentValue);
        }
        if (this._instance && changes["customClass"]) {
            this._instance.setClass(changes["customClass"].currentValue);
        }
        if (this._instance && changes["context"]) {
            this._instance.setContext(changes["context"].currentValue);
        }
        if (this._instance && changes["role"]) {
            this._instance.setContext(changes["role"].currentValue);
        }
    }
    /**
     * Ensure we clean up after ourselves
     * @return {?}
     */
    ngOnDestroy() {
        // ensure we close the tooltip when the host is destroyed
        if (this._overlayRef) {
            this._overlayRef.dispose();
            this._instance = null;
        }
        // emit this event to automatically unsubscribe from all subscriptions
        this._onDestroy.next();
        this._onDestroy.complete();
    }
    /**
     * Make the tooltip open
     * @return {?}
     */
    show() {
        // if the tooltip is disabled then do nothing
        if (this.disabled || this.isVisible || this._showTimeoutId || !this.content) {
            return;
        }
        // delay the show by the delay amount
        this._showTimeoutId = window.setTimeout(() => {
            // create the tooltip and get the overlay ref
            const /** @type {?} */ overlayRef = this.createOverlay();
            // create the portal to create the tooltip component
            this._portal = this.createPortal();
            this._instance = this.createInstance(overlayRef);
            // watch for any changes to the content
            this._instance.reposition$.pipe(takeUntil(this._onDestroy)).subscribe(this.reposition.bind(this));
            // store the visible state
            this.isVisible = true;
            // ensure the overlay has the correct initial position
            this.reposition();
            // emit the show events
            this.shown.emit();
            this.isOpenChange.next(true);
            // clear the interval id
            this._showTimeoutId = null;
            // emit the show event to close any other tooltips
            this._tooltipService.shown$.next(this._instance);
            // ensure change detection is run
            this._changeDetectorRef.detectChanges();
        }, this.delay);
    }
    /**
     * If a tooltip exists and is visible, hide it
     * @return {?}
     */
    hide() {
        // if we are waiting to show a tooltip then cancel the pending timeout
        if (this._showTimeoutId) {
            clearTimeout(this._showTimeoutId);
            this._showTimeoutId = null;
            return;
        }
        if (this._overlayRef && this._overlayRef.hasAttached()) {
            this._overlayRef.detach();
        }
        this.setAriaDescribedBy(null);
        this._instance = null;
        // store the visible state
        this.isVisible = false;
        // emit the hide events
        this.hidden.emit();
        this.isOpenChange.next(false);
        // ensure change detection is run
        this._changeDetectorRef.detectChanges();
    }
    /**
     * Toggle the visibility of the tooltip
     * @return {?}
     */
    toggle() {
        this.isVisible ? this.hide() : this.show();
    }
    /**
     * Recalculate the position of the popover
     * @return {?}
     */
    reposition() {
        if (this.isVisible && this._overlayRef) {
            this._overlayRef.updatePosition();
        }
    }
    /**
     * Create an instance from the overlay ref - allows overriding and additional logic here
     * @param {?} overlayRef
     * @return {?}
     */
    createInstance(overlayRef) {
        const /** @type {?} */ instance = /** @type {?} */ (overlayRef.attach(this._portal).instance);
        // supply the tooltip with the correct properties
        instance.setContent(this.content);
        instance.setPlacement(this.placement);
        instance.setClass(this.customClass);
        instance.setContext(this.context);
        instance.setRole(this.role);
        // Update the aria-describedby attribute
        this.setAriaDescribedBy(instance.id);
        return instance;
    }
    /**
     * Create the component portal - allows overriding to allow other portals eg. popovers
     * @return {?}
     */
    createPortal() {
        return this._portal || new ComponentPortal(TooltipComponent, this._viewContainerRef);
    }
    /**
     * Create the overlay and set up the scroll handling behavior
     * @return {?}
     */
    createOverlay() {
        // if the tooltip has already been created then just return the existing instance
        if (this._overlayRef) {
            return this._overlayRef;
        }
        // configure the tooltip
        const /** @type {?} */ strategy = this._overlay.position()
            .connectedTo(this._elementRef, this.getOrigin(), this.getOverlayPosition());
        // correctly handle scrolling
        const /** @type {?} */ scrollableAncestors = this._scrollDispatcher
            .getAncestorScrollContainers(this._elementRef);
        strategy.withScrollableContainers(scrollableAncestors);
        this._overlayRef = this._overlay.create({
            positionStrategy: strategy,
            panelClass: 'ux-overlay-pane',
            scrollStrategy: this._overlay.scrollStrategies.reposition({ scrollThrottle: 0 }),
            hasBackdrop: false
        });
        return this._overlayRef;
    }
    /**
     * Recreate the overlay ref using the updated origin and overlay positions
     * @return {?}
     */
    destroyOverlay() {
        // destroy the existing overlay
        if (this._overlayRef && this._overlayRef.hasAttached()) {
            this._overlayRef.detach();
        }
        if (this._overlayRef) {
            this._overlayRef.dispose();
            this._overlayRef = null;
        }
        this.isVisible = false;
    }
    /**
     * Get the origin position based on the specified tooltip placement
     * @return {?}
     */
    getOrigin() {
        // ensure placement is defined
        this.placement = this.placement || 'top';
        if (this.placement == 'top' || this.placement == 'bottom') {
            return { originX: 'center', originY: this.placement };
        }
        else if (this.placement == 'left') {
            return { originX: 'start', originY: 'center' };
        }
        else if (this.placement == 'right') {
            return { originX: 'end', originY: 'center' };
        }
    }
    /**
     * Calculate the overlay position based on the specified tooltip placement
     * @return {?}
     */
    getOverlayPosition() {
        // ensure placement is defined
        this.placement = this.placement || 'top';
        if (this.placement == 'top') {
            return { overlayX: 'center', overlayY: 'bottom' };
        }
        else if (this.placement == 'bottom') {
            return { overlayX: 'center', overlayY: 'top' };
        }
        else if (this.placement == 'left') {
            return { overlayX: 'end', overlayY: 'center' };
        }
        else if (this.placement == 'right') {
            return { overlayX: 'start', overlayY: 'center' };
        }
    }
    /**
     * Simple utility method - because IE doesn't support array.includes
     * And it isn't included in the core-js/es6 polyfills which are the
     * only ones required by Angular and guaranteed to be there
     *
     * @template T
     * @param {?} array
     * @param {?} value
     * @return {?}
     */
    includes(array, value) {
        return Array.isArray(array) && !!array.find(item => item === value);
    }
    /**
     * Handle the click event - show or hide accordingly
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        // if its not visible and click is a show trigger open it
        if (!this.isVisible && this.includes(this.showTriggers, 'click')) {
            return this.show();
        }
        // if its visible and click is a hide trigger close it
        if (this.isVisible && this.includes(this.hideTriggers, 'click')) {
            return this.hide();
        }
    }
    /**
     * Handle the mouse enter event - show or hide accordingly
     * @param {?} event
     * @return {?}
     */
    onMouseEnter(event) {
        // this is an show only trigger - if already open or it isn't a trigger do nothing
        if (this.isVisible || !this.includes(this.showTriggers, 'mouseenter')) {
            return;
        }
        // otherwise open the tooltip
        this.show();
    }
    /**
     * Handle the mouse leave event - show or hide accordingly
     * @param {?} event
     * @return {?}
     */
    onMouseLeave(event) {
        // this is an hide only trigger - if not open or it isn't a trigger do nothing
        if (!this.isVisible || !this.includes(this.hideTriggers, 'mouseleave')) {
            return;
        }
        // otherwise close the tooltip
        this.hide();
    }
    /**
     * Handle the focus event - show or hide accordingly
     * @param {?} event
     * @return {?}
     */
    onFocus(event) {
        // this is an show only trigger - if already open or it isn't a trigger do nothing
        if (this.isVisible || !this.includes(this.showTriggers, 'focus')) {
            return;
        }
        // otherwise open the tooltip
        this.show();
    }
    /**
     * Handle the blur event - show or hide accordingly
     * @param {?} event
     * @return {?}
     */
    onBlur(event) {
        // this is an hide only trigger - if not open or it isn't a trigger do nothing
        if (!this.isVisible || !this.includes(this.hideTriggers, 'blur')) {
            return;
        }
        // otherwise close the tooltip
        this.hide();
    }
    /**
     * Determine if the trigger element is focused
     * @return {?}
     */
    isFocused() {
        return document.activeElement === this._elementRef.nativeElement;
    }
    /**
     * Programmatically update the aria-describedby property
     * @param {?} id
     * @return {?}
     */
    setAriaDescribedBy(id) {
        if (id === null) {
            this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
        }
        else {
            this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', id);
        }
    }
}
TooltipDirective.decorators = [
    { type: Directive, args: [{
                selector: '[uxTooltip]',
                exportAs: 'ux-tooltip'
            },] },
];
/** @nocollapse */
TooltipDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: ViewContainerRef, },
    { type: Overlay, },
    { type: ScrollDispatcher, },
    { type: ChangeDetectorRef, },
    { type: Renderer2, },
    { type: TooltipService, },
];
TooltipDirective.propDecorators = {
    "content": [{ type: Input, args: ['uxTooltip',] },],
    "disabled": [{ type: Input, args: ['tooltipDisabled',] },],
    "customClass": [{ type: Input, args: ['tooltipClass',] },],
    "role": [{ type: Input, args: ['tooltipRole',] },],
    "context": [{ type: Input, args: ['tooltipContext',] },],
    "delay": [{ type: Input, args: ['tooltipDelay',] },],
    "isOpen": [{ type: Input },],
    "placement": [{ type: Input },],
    "showTriggers": [{ type: Input },],
    "hideTriggers": [{ type: Input },],
    "shown": [{ type: Output },],
    "hidden": [{ type: Output },],
    "isOpenChange": [{ type: Output },],
};
function TooltipDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TooltipDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TooltipDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    TooltipDirective.propDecorators;
    /**
     * Contains the content of the tooltip or a TemplateRef for more detailed content
     * @type {?}
     */
    TooltipDirective.prototype.content;
    /**
     * Allow the tooltip to be conditionally disabled
     * @type {?}
     */
    TooltipDirective.prototype.disabled;
    /**
     * All the user to add a custom class to the tooltip
     * @type {?}
     */
    TooltipDirective.prototype.customClass;
    /**
     * All the user to add a role to the tooltip - default is tooltip
     * @type {?}
     */
    TooltipDirective.prototype.role;
    /**
     * Provide the TemplateRef a context object
     * @type {?}
     */
    TooltipDirective.prototype.context;
    /**
     * Delay the showing of the tooltip by a number of miliseconds
     * @type {?}
     */
    TooltipDirective.prototype.delay;
    /**
     * Programmatically show and hide the tooltip
     * @type {?}
     */
    TooltipDirective.prototype.isOpen;
    /**
     * Customize how the tooltip should be positioned relative to the element
     * @type {?}
     */
    TooltipDirective.prototype.placement;
    /**
     * Specify which events should show the tooltip
     * @type {?}
     */
    TooltipDirective.prototype.showTriggers;
    /**
     * Specify which events should hide the tooltip
     * @type {?}
     */
    TooltipDirective.prototype.hideTriggers;
    /**
     * Emits an event when the tooltip is shown
     * @type {?}
     */
    TooltipDirective.prototype.shown;
    /**
     * Emits a event when the tooltip is hidden
     * @type {?}
     */
    TooltipDirective.prototype.hidden;
    /**
     * Allow two way binding to track the visibility of the tooltip
     * @type {?}
     */
    TooltipDirective.prototype.isOpenChange;
    /**
     * Keep track of the tooltip visibility
     * @type {?}
     */
    TooltipDirective.prototype.isVisible;
    /**
     * A reference to the CDK portal containing the overlay
     * @type {?}
     */
    TooltipDirective.prototype._portal;
    /**
     * A reference to the overlay the tooltip will be inserted into
     * @type {?}
     */
    TooltipDirective.prototype._overlayRef;
    /**
     * A reference to the instance of the tooltip component when created
     * @type {?}
     */
    TooltipDirective.prototype._instance;
    /**
     * This will emit when the directive is destroyed allowing us to unsubscribe all subscriptions automatically
     * @type {?}
     */
    TooltipDirective.prototype._onDestroy;
    /**
     * Store the timeout interval for cancelation
     * @type {?}
     */
    TooltipDirective.prototype._showTimeoutId;
    /**
     * Internally store the type of this component - usual for distinctions when extending this class
     * @type {?}
     */
    TooltipDirective.prototype._type;
    /** @type {?} */
    TooltipDirective.prototype._elementRef;
    /** @type {?} */
    TooltipDirective.prototype._viewContainerRef;
    /** @type {?} */
    TooltipDirective.prototype._overlay;
    /** @type {?} */
    TooltipDirective.prototype._scrollDispatcher;
    /** @type {?} */
    TooltipDirective.prototype._changeDetectorRef;
    /** @type {?} */
    TooltipDirective.prototype._renderer;
    /** @type {?} */
    TooltipDirective.prototype._tooltipService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy90b29sdGlwL3Rvb2x0aXAuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQTRCLE9BQU8sRUFBeUMsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsSSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBZ0MsTUFBTSxFQUFFLFNBQVMsRUFBOEIsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0wsT0FBTyxFQUFFLE9BQU8sRUFBSSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDNUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFNbkQsTUFBTTs7Ozs7Ozs7OztJQThERixZQUNjLFdBQXVCLEVBQ3ZCLGlCQUFtQyxFQUNuQyxRQUFpQixFQUNqQixpQkFBbUMsRUFDckMsb0JBQ0EsV0FDQTtRQU5FLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFDbkMsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQ3JDLHVCQUFrQixHQUFsQixrQkFBa0I7UUFDbEIsY0FBUyxHQUFULFNBQVM7UUFDVCxvQkFBZSxHQUFmLGVBQWU7Ozs7MkJBNURrQixFQUFFOzs7O29CQUdWLFNBQVM7Ozs7dUJBR04sRUFBRTs7Oztx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QUd0QixLQUFLLFNBQUMsY0FBYzt1QkFHcEIsS0FBSzswQkFHTCxLQUFLOzZCQUdMLEtBQUs7NkJBR0wsS0FBSztzQkFHTCxNQUFNO3VCQUdOLE1BQU07NkJBR04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9yaWdpbkNvbm5lY3Rpb25Qb3NpdGlvbiwgT3ZlcmxheSwgT3ZlcmxheUNvbm5lY3Rpb25Qb3NpdGlvbiwgT3ZlcmxheVJlZiwgU2Nyb2xsRGlzcGF0Y2hlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0ICwgIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgVG9vbHRpcENvbXBvbmVudCB9IGZyb20gJy4vdG9vbHRpcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUb29sdGlwU2VydmljZSB9IGZyb20gJy4vdG9vbHRpcC5zZXJ2aWNlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbdXhUb29sdGlwXScsXHJcbiAgICBleHBvcnRBczogJ3V4LXRvb2x0aXAnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb29sdGlwRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcblxyXG4gICAgLyoqIENvbnRhaW5zIHRoZSBjb250ZW50IG9mIHRoZSB0b29sdGlwIG9yIGEgVGVtcGxhdGVSZWYgZm9yIG1vcmUgZGV0YWlsZWQgY29udGVudCAqL1xyXG4gICAgQElucHV0KCd1eFRvb2x0aXAnKSBjb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICAgIC8qKiBBbGxvdyB0aGUgdG9vbHRpcCB0byBiZSBjb25kaXRpb25hbGx5IGRpc2FibGVkICovXHJcbiAgICBASW5wdXQoJ3Rvb2x0aXBEaXNhYmxlZCcpIGRpc2FibGVkOiBib29sZWFuO1xyXG5cclxuICAgIC8qKiBBbGwgdGhlIHVzZXIgdG8gYWRkIGEgY3VzdG9tIGNsYXNzIHRvIHRoZSB0b29sdGlwICovXHJcbiAgICBASW5wdXQoJ3Rvb2x0aXBDbGFzcycpIGN1c3RvbUNsYXNzOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICAvKiogQWxsIHRoZSB1c2VyIHRvIGFkZCBhIHJvbGUgdG8gdGhlIHRvb2x0aXAgLSBkZWZhdWx0IGlzIHRvb2x0aXAgKi9cclxuICAgIEBJbnB1dCgndG9vbHRpcFJvbGUnKSByb2xlOiBzdHJpbmcgPSAndG9vbHRpcCc7XHJcblxyXG4gICAgLyoqIFByb3ZpZGUgdGhlIFRlbXBsYXRlUmVmIGEgY29udGV4dCBvYmplY3QgKi9cclxuICAgIEBJbnB1dCgndG9vbHRpcENvbnRleHQnKSBjb250ZXh0OiBhbnkgPSB7fTtcclxuXHJcbiAgICAvKiogRGVsYXkgdGhlIHNob3dpbmcgb2YgdGhlIHRvb2x0aXAgYnkgYSBudW1iZXIgb2YgbWlsaXNlY29uZHMgKi9cclxuICAgIEBJbnB1dCgndG9vbHRpcERlbGF5JykgZGVsYXk6IG51bWJlciA9IDA7XHJcblxyXG4gICAgLyoqIFByb2dyYW1tYXRpY2FsbHkgc2hvdyBhbmQgaGlkZSB0aGUgdG9vbHRpcCAqL1xyXG4gICAgQElucHV0KCkgaXNPcGVuOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLyoqIEN1c3RvbWl6ZSBob3cgdGhlIHRvb2x0aXAgc2hvdWxkIGJlIHBvc2l0aW9uZWQgcmVsYXRpdmUgdG8gdGhlIGVsZW1lbnQgKi9cclxuICAgIEBJbnB1dCgpIHBsYWNlbWVudDogQW5jaG9yUGxhY2VtZW50ID0gJ3RvcCc7XHJcblxyXG4gICAgLyoqIFNwZWNpZnkgd2hpY2ggZXZlbnRzIHNob3VsZCBzaG93IHRoZSB0b29sdGlwICovXHJcbiAgICBASW5wdXQoKSBzaG93VHJpZ2dlcnM6IHN0cmluZ1tdID0gWydtb3VzZWVudGVyJywgJ2ZvY3VzJ107XHJcblxyXG4gICAgLyoqIFNwZWNpZnkgd2hpY2ggZXZlbnRzIHNob3VsZCBoaWRlIHRoZSB0b29sdGlwICovXHJcbiAgICBASW5wdXQoKSBoaWRlVHJpZ2dlcnM6IHN0cmluZ1tdID0gWydtb3VzZWxlYXZlJywgJ2JsdXInXTtcclxuXHJcbiAgICAvKiogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgdG9vbHRpcCBpcyBzaG93biAqL1xyXG4gICAgQE91dHB1dCgpIHNob3duID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICAgIC8qKiBFbWl0cyBhIGV2ZW50IHdoZW4gdGhlIHRvb2x0aXAgaXMgaGlkZGVuICovXHJcbiAgICBAT3V0cHV0KCkgaGlkZGVuID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICAgIC8qKiBBbGxvdyB0d28gd2F5IGJpbmRpbmcgdG8gdHJhY2sgdGhlIHZpc2liaWxpdHkgb2YgdGhlIHRvb2x0aXAgKi9cclxuICAgIEBPdXRwdXQoKSBpc09wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gICAgLyoqIEtlZXAgdHJhY2sgb2YgdGhlIHRvb2x0aXAgdmlzaWJpbGl0eSAqL1xyXG4gICAgaXNWaXNpYmxlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLyoqIEEgcmVmZXJlbmNlIHRvIHRoZSBDREsgcG9ydGFsIGNvbnRhaW5pbmcgdGhlIG92ZXJsYXkgKi9cclxuICAgIHByb3RlY3RlZCBfcG9ydGFsOiBDb21wb25lbnRQb3J0YWw8VG9vbHRpcENvbXBvbmVudD47XHJcblxyXG4gICAgLyoqIEEgcmVmZXJlbmNlIHRvIHRoZSBvdmVybGF5IHRoZSB0b29sdGlwIHdpbGwgYmUgaW5zZXJ0ZWQgaW50byAqL1xyXG4gICAgcHJvdGVjdGVkIF9vdmVybGF5UmVmOiBPdmVybGF5UmVmO1xyXG5cclxuICAgIC8qKiBBIHJlZmVyZW5jZSB0byB0aGUgaW5zdGFuY2Ugb2YgdGhlIHRvb2x0aXAgY29tcG9uZW50IHdoZW4gY3JlYXRlZCAqL1xyXG4gICAgcHJvdGVjdGVkIF9pbnN0YW5jZTogVG9vbHRpcENvbXBvbmVudDtcclxuXHJcbiAgICAvKiogVGhpcyB3aWxsIGVtaXQgd2hlbiB0aGUgZGlyZWN0aXZlIGlzIGRlc3Ryb3llZCBhbGxvd2luZyB1cyB0byB1bnN1YnNjcmliZSBhbGwgc3Vic2NyaXB0aW9ucyBhdXRvbWF0aWNhbGx5ICovXHJcbiAgICBwcm90ZWN0ZWQgX29uRGVzdHJveSA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gICAgLyoqIFN0b3JlIHRoZSB0aW1lb3V0IGludGVydmFsIGZvciBjYW5jZWxhdGlvbiAqL1xyXG4gICAgcHJpdmF0ZSBfc2hvd1RpbWVvdXRJZDogbnVtYmVyO1xyXG5cclxuICAgIC8qKiBJbnRlcm5hbGx5IHN0b3JlIHRoZSB0eXBlIG9mIHRoaXMgY29tcG9uZW50IC0gdXN1YWwgZm9yIGRpc3RpbmN0aW9ucyB3aGVuIGV4dGVuZGluZyB0aGlzIGNsYXNzICovXHJcbiAgICBwcm90ZWN0ZWQgX3R5cGU6IHN0cmluZyA9ICd0b29sdGlwJztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcm90ZWN0ZWQgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgcHJvdGVjdGVkIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgIHByb3RlY3RlZCBfb3ZlcmxheTogT3ZlcmxheSxcclxuICAgICAgICBwcm90ZWN0ZWQgX3Njcm9sbERpc3BhdGNoZXI6IFNjcm9sbERpc3BhdGNoZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICAgICAgcHJpdmF0ZSBfdG9vbHRpcFNlcnZpY2U6IFRvb2x0aXBTZXJ2aWNlXHJcbiAgICApIHsgfVxyXG5cclxuICAgIC8qKiBTZXQgdXAgdGhlIHRyaWdnZXJzIGFuZCBiaW5kIHRvIHRoZSBzaG93L2hpZGUgZXZlbnRzIHRvIGtlZXAgdmlzaWJpbGl0eSBpbiBzeW5jICovXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gc2V0IHVwIHNob3cgYW5kIGhpZGUgZXZlbnQgdHJpZ2dlcnNcclxuICAgICAgICBmcm9tRXZlbnQodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnY2xpY2snKS5waXBlKHRha2VVbnRpbCh0aGlzLl9vbkRlc3Ryb3kpKS5zdWJzY3JpYmUodGhpcy5vbkNsaWNrLmJpbmQodGhpcykpO1xyXG4gICAgICAgIGZyb21FdmVudCh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtb3VzZWVudGVyJykucGlwZSh0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KSkuc3Vic2NyaWJlKHRoaXMub25Nb3VzZUVudGVyLmJpbmQodGhpcykpO1xyXG4gICAgICAgIGZyb21FdmVudCh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdtb3VzZWxlYXZlJykucGlwZSh0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KSkuc3Vic2NyaWJlKHRoaXMub25Nb3VzZUxlYXZlLmJpbmQodGhpcykpO1xyXG4gICAgICAgIGZyb21FdmVudCh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdmb2N1cycpLnBpcGUodGFrZVVudGlsKHRoaXMuX29uRGVzdHJveSkpLnN1YnNjcmliZSh0aGlzLm9uRm9jdXMuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgZnJvbUV2ZW50KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2JsdXInKS5waXBlKHRha2VVbnRpbCh0aGlzLl9vbkRlc3Ryb3kpKS5zdWJzY3JpYmUodGhpcy5vbkJsdXIuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIC8vIHdoZW4gYW55IG90aGVyIHRvb2x0aXBzIG9wZW4gaGlkZSB0aGlzIG9uZVxyXG4gICAgICAgIHRoaXMuX3Rvb2x0aXBTZXJ2aWNlLnNob3duJC5waXBlKFxyXG4gICAgICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5fdHlwZSA9PT0gJ3Rvb2x0aXAnKSxcclxuICAgICAgICAgICAgZmlsdGVyKHRvb2x0aXAgPT4gdG9vbHRpcCAhPT0gdGhpcy5faW5zdGFuY2UpLFxyXG4gICAgICAgICAgICB0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KVxyXG4gICAgICAgICkuc3Vic2NyaWJlKHRoaXMuaGlkZS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgLy8gaWYgdGhlIHRvb2x0aXAgc2hvdWxkIGJlIGluaXRpYWxseSB2aXNpYmxlIHRoZW4gb3BlbiBpdFxyXG4gICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xyXG4gICAgICAgICAgICB0aGlzLnNob3coKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXZSBuZWVkIHRvIHNlbmQgaW5wdXQgY2hhbmdlcyB0byB0aGUgdG9vbHRpcCBjb21wb25lbnRcclxuICAgICAqIFdlIGNhbid0IHVzZSBzZXR0ZXJzIGFzIHRoZXkgbWF5IHRyaWdnZXIgYmVmb3JlIHRvb2x0aXAgaW5pdGlhbGlzZWQgYW5kIGNhbid0IHJlc2VuZCBvbmNlIGluaXRpYWxpc2VkXHJcbiAgICAgKiovXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcblxyXG4gICAgICAgIC8vIHdlIGNhbiBpZ25vcmUgdGhlIGZpcnN0IGNoYW5nZSBhcyBpdCdzIGhhbmRsZWQgaW4gbmdPbkluaXRcclxuICAgICAgICBpZiAoY2hhbmdlcy5pc09wZW4gJiYgIWNoYW5nZXMuaXNPcGVuLmZpcnN0Q2hhbmdlICYmIGNoYW5nZXMuaXNPcGVuLmN1cnJlbnRWYWx1ZSAhPT0gdGhpcy5pc1Zpc2libGUpIHtcclxuICAgICAgICAgICAgY2hhbmdlcy5pc09wZW4uY3VycmVudFZhbHVlID8gdGhpcy5zaG93KCkgOiB0aGlzLmhpZGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGRlc3Ryb3kgdGhlIG92ZXJsYXkgcmVmIHNvIGEgbmV3IGNvcnJlY3RseSBwb3NpdGlvbmVkIGluc3RhbmNlIHdpbGwgYmUgY3JlYXRlZCBuZXh0IHRpbWVcclxuICAgICAgICBpZiAoY2hhbmdlcy5wbGFjZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5kZXN0cm95T3ZlcmxheSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlICYmIGNoYW5nZXMucGxhY2VtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlLnNldFBsYWNlbWVudChjaGFuZ2VzLnBsYWNlbWVudC5jdXJyZW50VmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlICYmIGNoYW5nZXMuY29udGVudCkge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZS5zZXRDb250ZW50KGNoYW5nZXMuY29udGVudC5jdXJyZW50VmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlICYmIGNoYW5nZXMuY3VzdG9tQ2xhc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2Uuc2V0Q2xhc3MoY2hhbmdlcy5jdXN0b21DbGFzcy5jdXJyZW50VmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlICYmIGNoYW5nZXMuY29udGV4dCkge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZS5zZXRDb250ZXh0KGNoYW5nZXMuY29udGV4dC5jdXJyZW50VmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlICYmIGNoYW5nZXMucm9sZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZS5zZXRDb250ZXh0KGNoYW5nZXMucm9sZS5jdXJyZW50VmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiogRW5zdXJlIHdlIGNsZWFuIHVwIGFmdGVyIG91cnNlbHZlcyAqL1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcblxyXG4gICAgICAgIC8vIGVuc3VyZSB3ZSBjbG9zZSB0aGUgdG9vbHRpcCB3aGVuIHRoZSBob3N0IGlzIGRlc3Ryb3llZFxyXG4gICAgICAgIGlmICh0aGlzLl9vdmVybGF5UmVmKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX292ZXJsYXlSZWYuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBlbWl0IHRoaXMgZXZlbnQgdG8gYXV0b21hdGljYWxseSB1bnN1YnNjcmliZSBmcm9tIGFsbCBzdWJzY3JpcHRpb25zXHJcbiAgICAgICAgdGhpcy5fb25EZXN0cm95Lm5leHQoKTtcclxuICAgICAgICB0aGlzLl9vbkRlc3Ryb3kuY29tcGxldGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogTWFrZSB0aGUgdG9vbHRpcCBvcGVuICovXHJcbiAgICBzaG93KCk6IHZvaWQge1xyXG5cclxuICAgICAgICAvLyBpZiB0aGUgdG9vbHRpcCBpcyBkaXNhYmxlZCB0aGVuIGRvIG5vdGhpbmdcclxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCB0aGlzLmlzVmlzaWJsZSB8fCB0aGlzLl9zaG93VGltZW91dElkIHx8ICF0aGlzLmNvbnRlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZGVsYXkgdGhlIHNob3cgYnkgdGhlIGRlbGF5IGFtb3VudFxyXG4gICAgICAgIHRoaXMuX3Nob3dUaW1lb3V0SWQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAvLyBjcmVhdGUgdGhlIHRvb2x0aXAgYW5kIGdldCB0aGUgb3ZlcmxheSByZWZcclxuICAgICAgICAgICAgY29uc3Qgb3ZlcmxheVJlZiA9IHRoaXMuY3JlYXRlT3ZlcmxheSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gY3JlYXRlIHRoZSBwb3J0YWwgdG8gY3JlYXRlIHRoZSB0b29sdGlwIGNvbXBvbmVudFxyXG4gICAgICAgICAgICB0aGlzLl9wb3J0YWwgPSB0aGlzLmNyZWF0ZVBvcnRhbCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IHRoaXMuY3JlYXRlSW5zdGFuY2Uob3ZlcmxheVJlZik7XHJcblxyXG4gICAgICAgICAgICAvLyB3YXRjaCBmb3IgYW55IGNoYW5nZXMgdG8gdGhlIGNvbnRlbnRcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UucmVwb3NpdGlvbiQucGlwZSh0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KSkuc3Vic2NyaWJlKHRoaXMucmVwb3NpdGlvbi5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHN0b3JlIHRoZSB2aXNpYmxlIHN0YXRlXHJcbiAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIGVuc3VyZSB0aGUgb3ZlcmxheSBoYXMgdGhlIGNvcnJlY3QgaW5pdGlhbCBwb3NpdGlvblxyXG4gICAgICAgICAgICB0aGlzLnJlcG9zaXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGVtaXQgdGhlIHNob3cgZXZlbnRzXHJcbiAgICAgICAgICAgIHRoaXMuc2hvd24uZW1pdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmlzT3BlbkNoYW5nZS5uZXh0KHRydWUpO1xyXG5cclxuICAgICAgICAgICAgLy8gY2xlYXIgdGhlIGludGVydmFsIGlkXHJcbiAgICAgICAgICAgIHRoaXMuX3Nob3dUaW1lb3V0SWQgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgLy8gZW1pdCB0aGUgc2hvdyBldmVudCB0byBjbG9zZSBhbnkgb3RoZXIgdG9vbHRpcHNcclxuICAgICAgICAgICAgdGhpcy5fdG9vbHRpcFNlcnZpY2Uuc2hvd24kLm5leHQodGhpcy5faW5zdGFuY2UpO1xyXG5cclxuICAgICAgICAgICAgLy8gZW5zdXJlIGNoYW5nZSBkZXRlY3Rpb24gaXMgcnVuXHJcbiAgICAgICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICB9LCB0aGlzLmRlbGF5KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqIElmIGEgdG9vbHRpcCBleGlzdHMgYW5kIGlzIHZpc2libGUsIGhpZGUgaXQgKi9cclxuICAgIGhpZGUoKSB7XHJcblxyXG4gICAgICAgIC8vIGlmIHdlIGFyZSB3YWl0aW5nIHRvIHNob3cgYSB0b29sdGlwIHRoZW4gY2FuY2VsIHRoZSBwZW5kaW5nIHRpbWVvdXRcclxuICAgICAgICBpZiAodGhpcy5fc2hvd1RpbWVvdXRJZCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fc2hvd1RpbWVvdXRJZCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Nob3dUaW1lb3V0SWQgPSBudWxsO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fb3ZlcmxheVJlZiAmJiB0aGlzLl9vdmVybGF5UmVmLmhhc0F0dGFjaGVkKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fb3ZlcmxheVJlZi5kZXRhY2goKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0QXJpYURlc2NyaWJlZEJ5KG51bGwpO1xyXG4gICAgICAgIHRoaXMuX2luc3RhbmNlID0gbnVsbDtcclxuXHJcbiAgICAgICAgLy8gc3RvcmUgdGhlIHZpc2libGUgc3RhdGVcclxuICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyBlbWl0IHRoZSBoaWRlIGV2ZW50c1xyXG4gICAgICAgIHRoaXMuaGlkZGVuLmVtaXQoKTtcclxuICAgICAgICB0aGlzLmlzT3BlbkNoYW5nZS5uZXh0KGZhbHNlKTtcclxuXHJcbiAgICAgICAgLy8gZW5zdXJlIGNoYW5nZSBkZXRlY3Rpb24gaXMgcnVuXHJcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBUb2dnbGUgdGhlIHZpc2liaWxpdHkgb2YgdGhlIHRvb2x0aXAgKi9cclxuICAgIHRvZ2dsZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlzVmlzaWJsZSA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFJlY2FsY3VsYXRlIHRoZSBwb3NpdGlvbiBvZiB0aGUgcG9wb3ZlciAqL1xyXG4gICAgcmVwb3NpdGlvbigpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5pc1Zpc2libGUgJiYgdGhpcy5fb3ZlcmxheVJlZikge1xyXG4gICAgICAgICAgICB0aGlzLl9vdmVybGF5UmVmLnVwZGF0ZVBvc2l0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBDcmVhdGUgYW4gaW5zdGFuY2UgZnJvbSB0aGUgb3ZlcmxheSByZWYgLSBhbGxvd3Mgb3ZlcnJpZGluZyBhbmQgYWRkaXRpb25hbCBsb2dpYyBoZXJlICovXHJcbiAgICBwcm90ZWN0ZWQgY3JlYXRlSW5zdGFuY2Uob3ZlcmxheVJlZjogT3ZlcmxheVJlZik6IFRvb2x0aXBDb21wb25lbnQge1xyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gb3ZlcmxheVJlZi5hdHRhY2godGhpcy5fcG9ydGFsKS5pbnN0YW5jZSBhcyBUb29sdGlwQ29tcG9uZW50O1xyXG5cclxuICAgICAgICAvLyBzdXBwbHkgdGhlIHRvb2x0aXAgd2l0aCB0aGUgY29ycmVjdCBwcm9wZXJ0aWVzXHJcbiAgICAgICAgaW5zdGFuY2Uuc2V0Q29udGVudCh0aGlzLmNvbnRlbnQpO1xyXG4gICAgICAgIGluc3RhbmNlLnNldFBsYWNlbWVudCh0aGlzLnBsYWNlbWVudCk7XHJcbiAgICAgICAgaW5zdGFuY2Uuc2V0Q2xhc3ModGhpcy5jdXN0b21DbGFzcyk7XHJcbiAgICAgICAgaW5zdGFuY2Uuc2V0Q29udGV4dCh0aGlzLmNvbnRleHQpO1xyXG4gICAgICAgIGluc3RhbmNlLnNldFJvbGUodGhpcy5yb2xlKTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBhcmlhLWRlc2NyaWJlZGJ5IGF0dHJpYnV0ZVxyXG4gICAgICAgIHRoaXMuc2V0QXJpYURlc2NyaWJlZEJ5KGluc3RhbmNlLmlkKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBDcmVhdGUgdGhlIGNvbXBvbmVudCBwb3J0YWwgLSBhbGxvd3Mgb3ZlcnJpZGluZyB0byBhbGxvdyBvdGhlciBwb3J0YWxzIGVnLiBwb3BvdmVycyAqL1xyXG4gICAgcHJvdGVjdGVkIGNyZWF0ZVBvcnRhbCgpOiBDb21wb25lbnRQb3J0YWw8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BvcnRhbCB8fCBuZXcgQ29tcG9uZW50UG9ydGFsKFRvb2x0aXBDb21wb25lbnQsIHRoaXMuX3ZpZXdDb250YWluZXJSZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBDcmVhdGUgdGhlIG92ZXJsYXkgYW5kIHNldCB1cCB0aGUgc2Nyb2xsIGhhbmRsaW5nIGJlaGF2aW9yICovXHJcbiAgICBwcml2YXRlIGNyZWF0ZU92ZXJsYXkoKTogT3ZlcmxheVJlZiB7XHJcblxyXG4gICAgICAgIC8vIGlmIHRoZSB0b29sdGlwIGhhcyBhbHJlYWR5IGJlZW4gY3JlYXRlZCB0aGVuIGp1c3QgcmV0dXJuIHRoZSBleGlzdGluZyBpbnN0YW5jZVxyXG4gICAgICAgIGlmICh0aGlzLl9vdmVybGF5UmVmKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9vdmVybGF5UmVmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY29uZmlndXJlIHRoZSB0b29sdGlwXHJcbiAgICAgICAgY29uc3Qgc3RyYXRlZ3kgPSB0aGlzLl9vdmVybGF5LnBvc2l0aW9uKClcclxuICAgICAgICAgICAgLmNvbm5lY3RlZFRvKHRoaXMuX2VsZW1lbnRSZWYsIHRoaXMuZ2V0T3JpZ2luKCksIHRoaXMuZ2V0T3ZlcmxheVBvc2l0aW9uKCkpO1xyXG5cclxuICAgICAgICAvLyBjb3JyZWN0bHkgaGFuZGxlIHNjcm9sbGluZ1xyXG4gICAgICAgIGNvbnN0IHNjcm9sbGFibGVBbmNlc3RvcnMgPSB0aGlzLl9zY3JvbGxEaXNwYXRjaGVyXHJcbiAgICAgICAgICAgIC5nZXRBbmNlc3RvclNjcm9sbENvbnRhaW5lcnModGhpcy5fZWxlbWVudFJlZik7XHJcblxyXG4gICAgICAgIHN0cmF0ZWd5LndpdGhTY3JvbGxhYmxlQ29udGFpbmVycyhzY3JvbGxhYmxlQW5jZXN0b3JzKTtcclxuXHJcbiAgICAgICAgdGhpcy5fb3ZlcmxheVJlZiA9IHRoaXMuX292ZXJsYXkuY3JlYXRlKHtcclxuICAgICAgICAgICAgcG9zaXRpb25TdHJhdGVneTogc3RyYXRlZ3ksXHJcbiAgICAgICAgICAgIHBhbmVsQ2xhc3M6ICd1eC1vdmVybGF5LXBhbmUnLFxyXG4gICAgICAgICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5fb3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLnJlcG9zaXRpb24oeyBzY3JvbGxUaHJvdHRsZTogMCB9KSxcclxuICAgICAgICAgICAgaGFzQmFja2Ryb3A6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9vdmVybGF5UmVmO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBSZWNyZWF0ZSB0aGUgb3ZlcmxheSByZWYgdXNpbmcgdGhlIHVwZGF0ZWQgb3JpZ2luIGFuZCBvdmVybGF5IHBvc2l0aW9ucyAqL1xyXG4gICAgcHJpdmF0ZSBkZXN0cm95T3ZlcmxheSgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gZGVzdHJveSB0aGUgZXhpc3Rpbmcgb3ZlcmxheVxyXG4gICAgICAgIGlmICh0aGlzLl9vdmVybGF5UmVmICYmIHRoaXMuX292ZXJsYXlSZWYuaGFzQXR0YWNoZWQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9vdmVybGF5UmVmLmRldGFjaCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX292ZXJsYXlSZWYpIHtcclxuICAgICAgICAgICAgdGhpcy5fb3ZlcmxheVJlZi5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX292ZXJsYXlSZWYgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pc1Zpc2libGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogR2V0IHRoZSBvcmlnaW4gcG9zaXRpb24gYmFzZWQgb24gdGhlIHNwZWNpZmllZCB0b29sdGlwIHBsYWNlbWVudCAqL1xyXG4gICAgcHJpdmF0ZSBnZXRPcmlnaW4oKTogT3JpZ2luQ29ubmVjdGlvblBvc2l0aW9uIHtcclxuXHJcbiAgICAgICAgLy8gZW5zdXJlIHBsYWNlbWVudCBpcyBkZWZpbmVkXHJcbiAgICAgICAgdGhpcy5wbGFjZW1lbnQgPSB0aGlzLnBsYWNlbWVudCB8fCAndG9wJztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucGxhY2VtZW50ID09ICd0b3AnIHx8IHRoaXMucGxhY2VtZW50ID09ICdib3R0b20nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IG9yaWdpblg6ICdjZW50ZXInLCBvcmlnaW5ZOiB0aGlzLnBsYWNlbWVudCB9O1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wbGFjZW1lbnQgPT0gJ2xlZnQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICdjZW50ZXInIH07XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBsYWNlbWVudCA9PSAncmlnaHQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IG9yaWdpblg6ICdlbmQnLCBvcmlnaW5ZOiAnY2VudGVyJyB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiogQ2FsY3VsYXRlIHRoZSBvdmVybGF5IHBvc2l0aW9uIGJhc2VkIG9uIHRoZSBzcGVjaWZpZWQgdG9vbHRpcCBwbGFjZW1lbnQgKi9cclxuICAgIHByaXZhdGUgZ2V0T3ZlcmxheVBvc2l0aW9uKCk6IE92ZXJsYXlDb25uZWN0aW9uUG9zaXRpb24ge1xyXG5cclxuICAgICAgICAvLyBlbnN1cmUgcGxhY2VtZW50IGlzIGRlZmluZWRcclxuICAgICAgICB0aGlzLnBsYWNlbWVudCA9IHRoaXMucGxhY2VtZW50IHx8ICd0b3AnO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wbGFjZW1lbnQgPT0gJ3RvcCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgb3ZlcmxheVg6ICdjZW50ZXInLCBvdmVybGF5WTogJ2JvdHRvbScgfTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGxhY2VtZW50ID09ICdib3R0b20nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IG92ZXJsYXlYOiAnY2VudGVyJywgb3ZlcmxheVk6ICd0b3AnIH07XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBsYWNlbWVudCA9PSAnbGVmdCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgb3ZlcmxheVg6ICdlbmQnLCBvdmVybGF5WTogJ2NlbnRlcicgfTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGxhY2VtZW50ID09ICdyaWdodCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAnY2VudGVyJyB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNpbXBsZSB1dGlsaXR5IG1ldGhvZCAtIGJlY2F1c2UgSUUgZG9lc24ndCBzdXBwb3J0IGFycmF5LmluY2x1ZGVzXHJcbiAgICAgKiBBbmQgaXQgaXNuJ3QgaW5jbHVkZWQgaW4gdGhlIGNvcmUtanMvZXM2IHBvbHlmaWxscyB3aGljaCBhcmUgdGhlXHJcbiAgICAgKiBvbmx5IG9uZXMgcmVxdWlyZWQgYnkgQW5ndWxhciBhbmQgZ3VhcmFudGVlZCB0byBiZSB0aGVyZVxyXG4gICAgICoqL1xyXG4gICAgcHJvdGVjdGVkIGluY2x1ZGVzPFQ+KGFycmF5OiBBcnJheTxUPiwgdmFsdWU6IFQpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShhcnJheSkgJiYgISFhcnJheS5maW5kKGl0ZW0gPT4gaXRlbSA9PT0gdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBIYW5kbGUgdGhlIGNsaWNrIGV2ZW50IC0gc2hvdyBvciBoaWRlIGFjY29yZGluZ2x5ICovXHJcbiAgICBwcm90ZWN0ZWQgb25DbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG5cclxuICAgICAgICAvLyBpZiBpdHMgbm90IHZpc2libGUgYW5kIGNsaWNrIGlzIGEgc2hvdyB0cmlnZ2VyIG9wZW4gaXRcclxuICAgICAgICBpZiAoIXRoaXMuaXNWaXNpYmxlICYmIHRoaXMuaW5jbHVkZXModGhpcy5zaG93VHJpZ2dlcnMsICdjbGljaycpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNob3coKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlmIGl0cyB2aXNpYmxlIGFuZCBjbGljayBpcyBhIGhpZGUgdHJpZ2dlciBjbG9zZSBpdFxyXG4gICAgICAgIGlmICh0aGlzLmlzVmlzaWJsZSAmJiB0aGlzLmluY2x1ZGVzKHRoaXMuaGlkZVRyaWdnZXJzLCAnY2xpY2snKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKiogSGFuZGxlIHRoZSBtb3VzZSBlbnRlciBldmVudCAtIHNob3cgb3IgaGlkZSBhY2NvcmRpbmdseSAqL1xyXG4gICAgcHJvdGVjdGVkIG9uTW91c2VFbnRlcihldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG5cclxuICAgICAgICAvLyB0aGlzIGlzIGFuIHNob3cgb25seSB0cmlnZ2VyIC0gaWYgYWxyZWFkeSBvcGVuIG9yIGl0IGlzbid0IGEgdHJpZ2dlciBkbyBub3RoaW5nXHJcbiAgICAgICAgaWYgKHRoaXMuaXNWaXNpYmxlIHx8ICF0aGlzLmluY2x1ZGVzKHRoaXMuc2hvd1RyaWdnZXJzLCAnbW91c2VlbnRlcicpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIG90aGVyd2lzZSBvcGVuIHRoZSB0b29sdGlwXHJcbiAgICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEhhbmRsZSB0aGUgbW91c2UgbGVhdmUgZXZlbnQgLSBzaG93IG9yIGhpZGUgYWNjb3JkaW5nbHkgKi9cclxuICAgIHByb3RlY3RlZCBvbk1vdXNlTGVhdmUoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gdGhpcyBpcyBhbiBoaWRlIG9ubHkgdHJpZ2dlciAtIGlmIG5vdCBvcGVuIG9yIGl0IGlzbid0IGEgdHJpZ2dlciBkbyBub3RoaW5nXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVmlzaWJsZSB8fCAhdGhpcy5pbmNsdWRlcyh0aGlzLmhpZGVUcmlnZ2VycywgJ21vdXNlbGVhdmUnKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBvdGhlcndpc2UgY2xvc2UgdGhlIHRvb2x0aXBcclxuICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogSGFuZGxlIHRoZSBmb2N1cyBldmVudCAtIHNob3cgb3IgaGlkZSBhY2NvcmRpbmdseSAqL1xyXG4gICAgcHJvdGVjdGVkIG9uRm9jdXMoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcblxyXG4gICAgICAgIC8vIHRoaXMgaXMgYW4gc2hvdyBvbmx5IHRyaWdnZXIgLSBpZiBhbHJlYWR5IG9wZW4gb3IgaXQgaXNuJ3QgYSB0cmlnZ2VyIGRvIG5vdGhpbmdcclxuICAgICAgICBpZiAodGhpcy5pc1Zpc2libGUgfHwgIXRoaXMuaW5jbHVkZXModGhpcy5zaG93VHJpZ2dlcnMsICdmb2N1cycpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIG90aGVyd2lzZSBvcGVuIHRoZSB0b29sdGlwXHJcbiAgICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEhhbmRsZSB0aGUgYmx1ciBldmVudCAtIHNob3cgb3IgaGlkZSBhY2NvcmRpbmdseSAqL1xyXG4gICAgcHJvdGVjdGVkIG9uQmx1cihldmVudDogRXZlbnQpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gdGhpcyBpcyBhbiBoaWRlIG9ubHkgdHJpZ2dlciAtIGlmIG5vdCBvcGVuIG9yIGl0IGlzbid0IGEgdHJpZ2dlciBkbyBub3RoaW5nXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVmlzaWJsZSB8fCAhdGhpcy5pbmNsdWRlcyh0aGlzLmhpZGVUcmlnZ2VycywgJ2JsdXInKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBvdGhlcndpc2UgY2xvc2UgdGhlIHRvb2x0aXBcclxuICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogRGV0ZXJtaW5lIGlmIHRoZSB0cmlnZ2VyIGVsZW1lbnQgaXMgZm9jdXNlZCAqL1xyXG4gICAgcHJpdmF0ZSBpc0ZvY3VzZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICAvKiogUHJvZ3JhbW1hdGljYWxseSB1cGRhdGUgdGhlIGFyaWEtZGVzY3JpYmVkYnkgcHJvcGVydHkgKi9cclxuICAgIHByb3RlY3RlZCBzZXRBcmlhRGVzY3JpYmVkQnkoaWQ6IHN0cmluZyB8IG51bGwpOiB2b2lkIHtcclxuICAgICAgICBpZiAoaWQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FyaWEtZGVzY3JpYmVkYnknKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYXJpYS1kZXNjcmliZWRieScsIGlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBBbmNob3JQbGFjZW1lbnQgPSAndG9wJyB8ICdyaWdodCcgfCAnYm90dG9tJyB8ICdsZWZ0JzsiXX0=