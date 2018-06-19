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
var TooltipDirective = /** @class */ (function () {
    function TooltipDirective(_elementRef, _viewContainerRef, _overlay, _scrollDispatcher, _changeDetectorRef, _renderer, _tooltipService) {
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
    /** Set up the triggers and bind to the show/hide events to keep visibility in sync */
    /**
     * Set up the triggers and bind to the show/hide events to keep visibility in sync
     * @return {?}
     */
    TooltipDirective.prototype.ngOnInit = /**
     * Set up the triggers and bind to the show/hide events to keep visibility in sync
     * @return {?}
     */
    function () {
        var _this = this;
        // set up show and hide event triggers
        fromEvent(this._elementRef.nativeElement, 'click').pipe(takeUntil(this._onDestroy)).subscribe(this.onClick.bind(this));
        fromEvent(this._elementRef.nativeElement, 'mouseenter').pipe(takeUntil(this._onDestroy)).subscribe(this.onMouseEnter.bind(this));
        fromEvent(this._elementRef.nativeElement, 'mouseleave').pipe(takeUntil(this._onDestroy)).subscribe(this.onMouseLeave.bind(this));
        fromEvent(this._elementRef.nativeElement, 'focus').pipe(takeUntil(this._onDestroy)).subscribe(this.onFocus.bind(this));
        fromEvent(this._elementRef.nativeElement, 'blur').pipe(takeUntil(this._onDestroy)).subscribe(this.onBlur.bind(this));
        // when any other tooltips open hide this one
        this._tooltipService.shown$.pipe(filter(function () { return _this._type === 'tooltip'; }), filter(function (tooltip) { return tooltip !== _this._instance; }), takeUntil(this._onDestroy)).subscribe(this.hide.bind(this));
        // if the tooltip should be initially visible then open it
        if (this.isOpen) {
            this.show();
        }
    };
    /**
     * We need to send input changes to the tooltip component
     * We can't use setters as they may trigger before tooltip initialised and can't resend once initialised
     **/
    /**
     * We need to send input changes to the tooltip component
     * We can't use setters as they may trigger before tooltip initialised and can't resend once initialised
     *
     * @param {?} changes
     * @return {?}
     */
    TooltipDirective.prototype.ngOnChanges = /**
     * We need to send input changes to the tooltip component
     * We can't use setters as they may trigger before tooltip initialised and can't resend once initialised
     *
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
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
    };
    /** Ensure we clean up after ourselves */
    /**
     * Ensure we clean up after ourselves
     * @return {?}
     */
    TooltipDirective.prototype.ngOnDestroy = /**
     * Ensure we clean up after ourselves
     * @return {?}
     */
    function () {
        // ensure we close the tooltip when the host is destroyed
        if (this._overlayRef) {
            this._overlayRef.dispose();
            this._instance = null;
        }
        // emit this event to automatically unsubscribe from all subscriptions
        this._onDestroy.next();
        this._onDestroy.complete();
    };
    /** Make the tooltip open */
    /**
     * Make the tooltip open
     * @return {?}
     */
    TooltipDirective.prototype.show = /**
     * Make the tooltip open
     * @return {?}
     */
    function () {
        var _this = this;
        // if the tooltip is disabled then do nothing
        if (this.disabled || this.isVisible || this._showTimeoutId || !this.content) {
            return;
        }
        // delay the show by the delay amount
        this._showTimeoutId = window.setTimeout(function () {
            // create the tooltip and get the overlay ref
            var /** @type {?} */ overlayRef = _this.createOverlay();
            // create the portal to create the tooltip component
            // create the portal to create the tooltip component
            _this._portal = _this.createPortal();
            _this._instance = _this.createInstance(overlayRef);
            // watch for any changes to the content
            // watch for any changes to the content
            _this._instance.reposition$.pipe(takeUntil(_this._onDestroy)).subscribe(_this.reposition.bind(_this));
            // store the visible state
            // store the visible state
            _this.isVisible = true;
            // ensure the overlay has the correct initial position
            // ensure the overlay has the correct initial position
            _this.reposition();
            // emit the show events
            // emit the show events
            _this.shown.emit();
            _this.isOpenChange.next(true);
            // clear the interval id
            // clear the interval id
            _this._showTimeoutId = null;
            // emit the show event to close any other tooltips
            // emit the show event to close any other tooltips
            _this._tooltipService.shown$.next(_this._instance);
            // ensure change detection is run
            // ensure change detection is run
            _this._changeDetectorRef.detectChanges();
        }, this.delay);
    };
    /** If a tooltip exists and is visible, hide it */
    /**
     * If a tooltip exists and is visible, hide it
     * @return {?}
     */
    TooltipDirective.prototype.hide = /**
     * If a tooltip exists and is visible, hide it
     * @return {?}
     */
    function () {
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
    };
    /** Toggle the visibility of the tooltip */
    /**
     * Toggle the visibility of the tooltip
     * @return {?}
     */
    TooltipDirective.prototype.toggle = /**
     * Toggle the visibility of the tooltip
     * @return {?}
     */
    function () {
        this.isVisible ? this.hide() : this.show();
    };
    /** Recalculate the position of the popover */
    /**
     * Recalculate the position of the popover
     * @return {?}
     */
    TooltipDirective.prototype.reposition = /**
     * Recalculate the position of the popover
     * @return {?}
     */
    function () {
        if (this.isVisible && this._overlayRef) {
            this._overlayRef.updatePosition();
        }
    };
    /** Create an instance from the overlay ref - allows overriding and additional logic here */
    /**
     * Create an instance from the overlay ref - allows overriding and additional logic here
     * @param {?} overlayRef
     * @return {?}
     */
    TooltipDirective.prototype.createInstance = /**
     * Create an instance from the overlay ref - allows overriding and additional logic here
     * @param {?} overlayRef
     * @return {?}
     */
    function (overlayRef) {
        var /** @type {?} */ instance = /** @type {?} */ (overlayRef.attach(this._portal).instance);
        // supply the tooltip with the correct properties
        instance.setContent(this.content);
        instance.setPlacement(this.placement);
        instance.setClass(this.customClass);
        instance.setContext(this.context);
        instance.setRole(this.role);
        // Update the aria-describedby attribute
        this.setAriaDescribedBy(instance.id);
        return instance;
    };
    /** Create the component portal - allows overriding to allow other portals eg. popovers */
    /**
     * Create the component portal - allows overriding to allow other portals eg. popovers
     * @return {?}
     */
    TooltipDirective.prototype.createPortal = /**
     * Create the component portal - allows overriding to allow other portals eg. popovers
     * @return {?}
     */
    function () {
        return this._portal || new ComponentPortal(TooltipComponent, this._viewContainerRef);
    };
    /**
     * Create the overlay and set up the scroll handling behavior
     * @return {?}
     */
    TooltipDirective.prototype.createOverlay = /**
     * Create the overlay and set up the scroll handling behavior
     * @return {?}
     */
    function () {
        // if the tooltip has already been created then just return the existing instance
        if (this._overlayRef) {
            return this._overlayRef;
        }
        // configure the tooltip
        var /** @type {?} */ strategy = this._overlay.position()
            .connectedTo(this._elementRef, this.getOrigin(), this.getOverlayPosition());
        // correctly handle scrolling
        var /** @type {?} */ scrollableAncestors = this._scrollDispatcher
            .getAncestorScrollContainers(this._elementRef);
        strategy.withScrollableContainers(scrollableAncestors);
        this._overlayRef = this._overlay.create({
            positionStrategy: strategy,
            panelClass: 'ux-overlay-pane',
            scrollStrategy: this._overlay.scrollStrategies.reposition({ scrollThrottle: 0 }),
            hasBackdrop: false
        });
        return this._overlayRef;
    };
    /**
     * Recreate the overlay ref using the updated origin and overlay positions
     * @return {?}
     */
    TooltipDirective.prototype.destroyOverlay = /**
     * Recreate the overlay ref using the updated origin and overlay positions
     * @return {?}
     */
    function () {
        // destroy the existing overlay
        if (this._overlayRef && this._overlayRef.hasAttached()) {
            this._overlayRef.detach();
        }
        if (this._overlayRef) {
            this._overlayRef.dispose();
            this._overlayRef = null;
        }
        this.isVisible = false;
    };
    /**
     * Get the origin position based on the specified tooltip placement
     * @return {?}
     */
    TooltipDirective.prototype.getOrigin = /**
     * Get the origin position based on the specified tooltip placement
     * @return {?}
     */
    function () {
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
    };
    /**
     * Calculate the overlay position based on the specified tooltip placement
     * @return {?}
     */
    TooltipDirective.prototype.getOverlayPosition = /**
     * Calculate the overlay position based on the specified tooltip placement
     * @return {?}
     */
    function () {
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
    };
    /**
     * Simple utility method - because IE doesn't support array.includes
     * And it isn't included in the core-js/es6 polyfills which are the
     * only ones required by Angular and guaranteed to be there
     **/
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
    TooltipDirective.prototype.includes = /**
     * Simple utility method - because IE doesn't support array.includes
     * And it isn't included in the core-js/es6 polyfills which are the
     * only ones required by Angular and guaranteed to be there
     *
     * @template T
     * @param {?} array
     * @param {?} value
     * @return {?}
     */
    function (array, value) {
        return Array.isArray(array) && !!array.find(function (item) { return item === value; });
    };
    /** Handle the click event - show or hide accordingly */
    /**
     * Handle the click event - show or hide accordingly
     * @param {?} event
     * @return {?}
     */
    TooltipDirective.prototype.onClick = /**
     * Handle the click event - show or hide accordingly
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // if its not visible and click is a show trigger open it
        if (!this.isVisible && this.includes(this.showTriggers, 'click')) {
            return this.show();
        }
        // if its visible and click is a hide trigger close it
        if (this.isVisible && this.includes(this.hideTriggers, 'click')) {
            return this.hide();
        }
    };
    /** Handle the mouse enter event - show or hide accordingly */
    /**
     * Handle the mouse enter event - show or hide accordingly
     * @param {?} event
     * @return {?}
     */
    TooltipDirective.prototype.onMouseEnter = /**
     * Handle the mouse enter event - show or hide accordingly
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // this is an show only trigger - if already open or it isn't a trigger do nothing
        if (this.isVisible || !this.includes(this.showTriggers, 'mouseenter')) {
            return;
        }
        // otherwise open the tooltip
        this.show();
    };
    /** Handle the mouse leave event - show or hide accordingly */
    /**
     * Handle the mouse leave event - show or hide accordingly
     * @param {?} event
     * @return {?}
     */
    TooltipDirective.prototype.onMouseLeave = /**
     * Handle the mouse leave event - show or hide accordingly
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // this is an hide only trigger - if not open or it isn't a trigger do nothing
        if (!this.isVisible || !this.includes(this.hideTriggers, 'mouseleave')) {
            return;
        }
        // otherwise close the tooltip
        this.hide();
    };
    /** Handle the focus event - show or hide accordingly */
    /**
     * Handle the focus event - show or hide accordingly
     * @param {?} event
     * @return {?}
     */
    TooltipDirective.prototype.onFocus = /**
     * Handle the focus event - show or hide accordingly
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // this is an show only trigger - if already open or it isn't a trigger do nothing
        if (this.isVisible || !this.includes(this.showTriggers, 'focus')) {
            return;
        }
        // otherwise open the tooltip
        this.show();
    };
    /** Handle the blur event - show or hide accordingly */
    /**
     * Handle the blur event - show or hide accordingly
     * @param {?} event
     * @return {?}
     */
    TooltipDirective.prototype.onBlur = /**
     * Handle the blur event - show or hide accordingly
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // this is an hide only trigger - if not open or it isn't a trigger do nothing
        if (!this.isVisible || !this.includes(this.hideTriggers, 'blur')) {
            return;
        }
        // otherwise close the tooltip
        this.hide();
    };
    /**
     * Determine if the trigger element is focused
     * @return {?}
     */
    TooltipDirective.prototype.isFocused = /**
     * Determine if the trigger element is focused
     * @return {?}
     */
    function () {
        return document.activeElement === this._elementRef.nativeElement;
    };
    /** Programmatically update the aria-describedby property */
    /**
     * Programmatically update the aria-describedby property
     * @param {?} id
     * @return {?}
     */
    TooltipDirective.prototype.setAriaDescribedBy = /**
     * Programmatically update the aria-describedby property
     * @param {?} id
     * @return {?}
     */
    function (id) {
        if (id === null) {
            this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
        }
        else {
            this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', id);
        }
    };
    TooltipDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[uxTooltip]',
                    exportAs: 'ux-tooltip'
                },] },
    ];
    /** @nocollapse */
    TooltipDirective.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: ViewContainerRef, },
        { type: Overlay, },
        { type: ScrollDispatcher, },
        { type: ChangeDetectorRef, },
        { type: Renderer2, },
        { type: TooltipService, },
    ]; };
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
    return TooltipDirective;
}());
export { TooltipDirective };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy90b29sdGlwL3Rvb2x0aXAuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQTRCLE9BQU8sRUFBeUMsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsSSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBZ0MsTUFBTSxFQUFFLFNBQVMsRUFBOEIsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0wsT0FBTyxFQUFFLE9BQU8sRUFBSSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDNUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0lBb0UvQywwQkFDYyxXQUF1QixFQUN2QixpQkFBbUMsRUFDbkMsUUFBaUIsRUFDakIsaUJBQW1DLEVBQ3JDLG9CQUNBLFdBQ0E7UUFORSxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQ25DLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUNyQyx1QkFBa0IsR0FBbEIsa0JBQWtCO1FBQ2xCLGNBQVMsR0FBVCxTQUFTO1FBQ1Qsb0JBQWUsR0FBZixlQUFlOzs7OzJCQTVEa0IsRUFBRTs7OztvQkFHVixTQUFTOzs7O3VCQUdOLEVBQUU7Ozs7cUJBR0gsQ0FBQzs7OztzQkFH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QUE0RDs7Ozs7O0lBQ2xELDZDQUFrQjs7Ozs7SUFBNUIsVUFBNkIsRUFBaUI7UUFDMUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1NBQ3RGO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUN2RjtLQUNKOztnQkEvWkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUUsWUFBWTtpQkFDekI7Ozs7Z0JBVHNDLFVBQVU7Z0JBQW9HLGdCQUFnQjtnQkFGbEksT0FBTztnQkFBeUMsZ0JBQWdCO2dCQUUxRixpQkFBaUI7Z0JBQW9GLFNBQVM7Z0JBSTlHLGNBQWM7Ozs0QkFTbEIsS0FBSyxTQUFDLFdBQVc7NkJBR2pCLEtBQUssU0FBQyxpQkFBaUI7Z0NBR3ZCLEtBQUssU0FBQyxjQUFjO3lCQUdwQixLQUFLLFNBQUMsYUFBYTs0QkFHbkIsS0FBSyxTQUFDLGdCQUFnQjswQkFHdEIsS0FBSyxTQUFDLGNBQWM7MkJBR3BCLEtBQUs7OEJBR0wsS0FBSztpQ0FHTCxLQUFLO2lDQUdMLEtBQUs7MEJBR0wsTUFBTTsyQkFHTixNQUFNO2lDQUdOLE1BQU07OzJCQW5EWDs7U0FZYSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPcmlnaW5Db25uZWN0aW9uUG9zaXRpb24sIE92ZXJsYXksIE92ZXJsYXlDb25uZWN0aW9uUG9zaXRpb24sIE92ZXJsYXlSZWYsIFNjcm9sbERpc3BhdGNoZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcywgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCAsICBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFRvb2x0aXBDb21wb25lbnQgfSBmcm9tICcuL3Rvb2x0aXAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVG9vbHRpcFNlcnZpY2UgfSBmcm9tICcuL3Rvb2x0aXAuc2VydmljZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW3V4VG9vbHRpcF0nLFxyXG4gICAgZXhwb3J0QXM6ICd1eC10b29sdGlwJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9vbHRpcERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG5cclxuICAgIC8qKiBDb250YWlucyB0aGUgY29udGVudCBvZiB0aGUgdG9vbHRpcCBvciBhIFRlbXBsYXRlUmVmIGZvciBtb3JlIGRldGFpbGVkIGNvbnRlbnQgKi9cclxuICAgIEBJbnB1dCgndXhUb29sdGlwJykgY29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgICAvKiogQWxsb3cgdGhlIHRvb2x0aXAgdG8gYmUgY29uZGl0aW9uYWxseSBkaXNhYmxlZCAqL1xyXG4gICAgQElucHV0KCd0b29sdGlwRGlzYWJsZWQnKSBkaXNhYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgICAvKiogQWxsIHRoZSB1c2VyIHRvIGFkZCBhIGN1c3RvbSBjbGFzcyB0byB0aGUgdG9vbHRpcCAqL1xyXG4gICAgQElucHV0KCd0b29sdGlwQ2xhc3MnKSBjdXN0b21DbGFzczogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgLyoqIEFsbCB0aGUgdXNlciB0byBhZGQgYSByb2xlIHRvIHRoZSB0b29sdGlwIC0gZGVmYXVsdCBpcyB0b29sdGlwICovXHJcbiAgICBASW5wdXQoJ3Rvb2x0aXBSb2xlJykgcm9sZTogc3RyaW5nID0gJ3Rvb2x0aXAnO1xyXG5cclxuICAgIC8qKiBQcm92aWRlIHRoZSBUZW1wbGF0ZVJlZiBhIGNvbnRleHQgb2JqZWN0ICovXHJcbiAgICBASW5wdXQoJ3Rvb2x0aXBDb250ZXh0JykgY29udGV4dDogYW55ID0ge307XHJcblxyXG4gICAgLyoqIERlbGF5IHRoZSBzaG93aW5nIG9mIHRoZSB0b29sdGlwIGJ5IGEgbnVtYmVyIG9mIG1pbGlzZWNvbmRzICovXHJcbiAgICBASW5wdXQoJ3Rvb2x0aXBEZWxheScpIGRlbGF5OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8qKiBQcm9ncmFtbWF0aWNhbGx5IHNob3cgYW5kIGhpZGUgdGhlIHRvb2x0aXAgKi9cclxuICAgIEBJbnB1dCgpIGlzT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8qKiBDdXN0b21pemUgaG93IHRoZSB0b29sdGlwIHNob3VsZCBiZSBwb3NpdGlvbmVkIHJlbGF0aXZlIHRvIHRoZSBlbGVtZW50ICovXHJcbiAgICBASW5wdXQoKSBwbGFjZW1lbnQ6IEFuY2hvclBsYWNlbWVudCA9ICd0b3AnO1xyXG5cclxuICAgIC8qKiBTcGVjaWZ5IHdoaWNoIGV2ZW50cyBzaG91bGQgc2hvdyB0aGUgdG9vbHRpcCAqL1xyXG4gICAgQElucHV0KCkgc2hvd1RyaWdnZXJzOiBzdHJpbmdbXSA9IFsnbW91c2VlbnRlcicsICdmb2N1cyddO1xyXG5cclxuICAgIC8qKiBTcGVjaWZ5IHdoaWNoIGV2ZW50cyBzaG91bGQgaGlkZSB0aGUgdG9vbHRpcCAqL1xyXG4gICAgQElucHV0KCkgaGlkZVRyaWdnZXJzOiBzdHJpbmdbXSA9IFsnbW91c2VsZWF2ZScsICdibHVyJ107XHJcblxyXG4gICAgLyoqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIHRvb2x0aXAgaXMgc2hvd24gKi9cclxuICAgIEBPdXRwdXQoKSBzaG93biA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgICAvKiogRW1pdHMgYSBldmVudCB3aGVuIHRoZSB0b29sdGlwIGlzIGhpZGRlbiAqL1xyXG4gICAgQE91dHB1dCgpIGhpZGRlbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgICAvKiogQWxsb3cgdHdvIHdheSBiaW5kaW5nIHRvIHRyYWNrIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSB0b29sdGlwICovXHJcbiAgICBAT3V0cHV0KCkgaXNPcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICAgIC8qKiBLZWVwIHRyYWNrIG9mIHRoZSB0b29sdGlwIHZpc2liaWxpdHkgKi9cclxuICAgIGlzVmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8qKiBBIHJlZmVyZW5jZSB0byB0aGUgQ0RLIHBvcnRhbCBjb250YWluaW5nIHRoZSBvdmVybGF5ICovXHJcbiAgICBwcm90ZWN0ZWQgX3BvcnRhbDogQ29tcG9uZW50UG9ydGFsPFRvb2x0aXBDb21wb25lbnQ+O1xyXG5cclxuICAgIC8qKiBBIHJlZmVyZW5jZSB0byB0aGUgb3ZlcmxheSB0aGUgdG9vbHRpcCB3aWxsIGJlIGluc2VydGVkIGludG8gKi9cclxuICAgIHByb3RlY3RlZCBfb3ZlcmxheVJlZjogT3ZlcmxheVJlZjtcclxuXHJcbiAgICAvKiogQSByZWZlcmVuY2UgdG8gdGhlIGluc3RhbmNlIG9mIHRoZSB0b29sdGlwIGNvbXBvbmVudCB3aGVuIGNyZWF0ZWQgKi9cclxuICAgIHByb3RlY3RlZCBfaW5zdGFuY2U6IFRvb2x0aXBDb21wb25lbnQ7XHJcblxyXG4gICAgLyoqIFRoaXMgd2lsbCBlbWl0IHdoZW4gdGhlIGRpcmVjdGl2ZSBpcyBkZXN0cm95ZWQgYWxsb3dpbmcgdXMgdG8gdW5zdWJzY3JpYmUgYWxsIHN1YnNjcmlwdGlvbnMgYXV0b21hdGljYWxseSAqL1xyXG4gICAgcHJvdGVjdGVkIF9vbkRlc3Ryb3kgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuICAgIC8qKiBTdG9yZSB0aGUgdGltZW91dCBpbnRlcnZhbCBmb3IgY2FuY2VsYXRpb24gKi9cclxuICAgIHByaXZhdGUgX3Nob3dUaW1lb3V0SWQ6IG51bWJlcjtcclxuXHJcbiAgICAvKiogSW50ZXJuYWxseSBzdG9yZSB0aGUgdHlwZSBvZiB0aGlzIGNvbXBvbmVudCAtIHVzdWFsIGZvciBkaXN0aW5jdGlvbnMgd2hlbiBleHRlbmRpbmcgdGhpcyBjbGFzcyAqL1xyXG4gICAgcHJvdGVjdGVkIF90eXBlOiBzdHJpbmcgPSAndG9vbHRpcCc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJvdGVjdGVkIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgICAgIHByb3RlY3RlZCBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgICAgICBwcm90ZWN0ZWQgX292ZXJsYXk6IE92ZXJsYXksXHJcbiAgICAgICAgcHJvdGVjdGVkIF9zY3JvbGxEaXNwYXRjaGVyOiBTY3JvbGxEaXNwYXRjaGVyLFxyXG4gICAgICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgICAgIHByaXZhdGUgX3Rvb2x0aXBTZXJ2aWNlOiBUb29sdGlwU2VydmljZVxyXG4gICAgKSB7IH1cclxuXHJcbiAgICAvKiogU2V0IHVwIHRoZSB0cmlnZ2VycyBhbmQgYmluZCB0byB0aGUgc2hvdy9oaWRlIGV2ZW50cyB0byBrZWVwIHZpc2liaWxpdHkgaW4gc3luYyAqL1xyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIC8vIHNldCB1cCBzaG93IGFuZCBoaWRlIGV2ZW50IHRyaWdnZXJzXHJcbiAgICAgICAgZnJvbUV2ZW50KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2NsaWNrJykucGlwZSh0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KSkuc3Vic2NyaWJlKHRoaXMub25DbGljay5iaW5kKHRoaXMpKTtcclxuICAgICAgICBmcm9tRXZlbnQodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbW91c2VlbnRlcicpLnBpcGUodGFrZVVudGlsKHRoaXMuX29uRGVzdHJveSkpLnN1YnNjcmliZSh0aGlzLm9uTW91c2VFbnRlci5iaW5kKHRoaXMpKTtcclxuICAgICAgICBmcm9tRXZlbnQodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbW91c2VsZWF2ZScpLnBpcGUodGFrZVVudGlsKHRoaXMuX29uRGVzdHJveSkpLnN1YnNjcmliZSh0aGlzLm9uTW91c2VMZWF2ZS5iaW5kKHRoaXMpKTtcclxuICAgICAgICBmcm9tRXZlbnQodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZm9jdXMnKS5waXBlKHRha2VVbnRpbCh0aGlzLl9vbkRlc3Ryb3kpKS5zdWJzY3JpYmUodGhpcy5vbkZvY3VzLmJpbmQodGhpcykpO1xyXG4gICAgICAgIGZyb21FdmVudCh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdibHVyJykucGlwZSh0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KSkuc3Vic2NyaWJlKHRoaXMub25CbHVyLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICAvLyB3aGVuIGFueSBvdGhlciB0b29sdGlwcyBvcGVuIGhpZGUgdGhpcyBvbmVcclxuICAgICAgICB0aGlzLl90b29sdGlwU2VydmljZS5zaG93biQucGlwZShcclxuICAgICAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMuX3R5cGUgPT09ICd0b29sdGlwJyksXHJcbiAgICAgICAgICAgIGZpbHRlcih0b29sdGlwID0+IHRvb2x0aXAgIT09IHRoaXMuX2luc3RhbmNlKSxcclxuICAgICAgICAgICAgdGFrZVVudGlsKHRoaXMuX29uRGVzdHJveSlcclxuICAgICAgICApLnN1YnNjcmliZSh0aGlzLmhpZGUuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIC8vIGlmIHRoZSB0b29sdGlwIHNob3VsZCBiZSBpbml0aWFsbHkgdmlzaWJsZSB0aGVuIG9wZW4gaXRcclxuICAgICAgICBpZiAodGhpcy5pc09wZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2UgbmVlZCB0byBzZW5kIGlucHV0IGNoYW5nZXMgdG8gdGhlIHRvb2x0aXAgY29tcG9uZW50XHJcbiAgICAgKiBXZSBjYW4ndCB1c2Ugc2V0dGVycyBhcyB0aGV5IG1heSB0cmlnZ2VyIGJlZm9yZSB0b29sdGlwIGluaXRpYWxpc2VkIGFuZCBjYW4ndCByZXNlbmQgb25jZSBpbml0aWFsaXNlZFxyXG4gICAgICoqL1xyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG5cclxuICAgICAgICAvLyB3ZSBjYW4gaWdub3JlIHRoZSBmaXJzdCBjaGFuZ2UgYXMgaXQncyBoYW5kbGVkIGluIG5nT25Jbml0XHJcbiAgICAgICAgaWYgKGNoYW5nZXMuaXNPcGVuICYmICFjaGFuZ2VzLmlzT3Blbi5maXJzdENoYW5nZSAmJiBjaGFuZ2VzLmlzT3Blbi5jdXJyZW50VmFsdWUgIT09IHRoaXMuaXNWaXNpYmxlKSB7XHJcbiAgICAgICAgICAgIGNoYW5nZXMuaXNPcGVuLmN1cnJlbnRWYWx1ZSA/IHRoaXMuc2hvdygpIDogdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBkZXN0cm95IHRoZSBvdmVybGF5IHJlZiBzbyBhIG5ldyBjb3JyZWN0bHkgcG9zaXRpb25lZCBpbnN0YW5jZSB3aWxsIGJlIGNyZWF0ZWQgbmV4dCB0aW1lXHJcbiAgICAgICAgaWYgKGNoYW5nZXMucGxhY2VtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveU92ZXJsYXkoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9pbnN0YW5jZSAmJiBjaGFuZ2VzLnBsYWNlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZS5zZXRQbGFjZW1lbnQoY2hhbmdlcy5wbGFjZW1lbnQuY3VycmVudFZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9pbnN0YW5jZSAmJiBjaGFuZ2VzLmNvbnRlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2Uuc2V0Q29udGVudChjaGFuZ2VzLmNvbnRlbnQuY3VycmVudFZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9pbnN0YW5jZSAmJiBjaGFuZ2VzLmN1c3RvbUNsYXNzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlLnNldENsYXNzKGNoYW5nZXMuY3VzdG9tQ2xhc3MuY3VycmVudFZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9pbnN0YW5jZSAmJiBjaGFuZ2VzLmNvbnRleHQpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2Uuc2V0Q29udGV4dChjaGFuZ2VzLmNvbnRleHQuY3VycmVudFZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9pbnN0YW5jZSAmJiBjaGFuZ2VzLnJvbGUpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2Uuc2V0Q29udGV4dChjaGFuZ2VzLnJvbGUuY3VycmVudFZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEVuc3VyZSB3ZSBjbGVhbiB1cCBhZnRlciBvdXJzZWx2ZXMgKi9cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG5cclxuICAgICAgICAvLyBlbnN1cmUgd2UgY2xvc2UgdGhlIHRvb2x0aXAgd2hlbiB0aGUgaG9zdCBpcyBkZXN0cm95ZWRcclxuICAgICAgICBpZiAodGhpcy5fb3ZlcmxheVJlZikge1xyXG4gICAgICAgICAgICB0aGlzLl9vdmVybGF5UmVmLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZW1pdCB0aGlzIGV2ZW50IHRvIGF1dG9tYXRpY2FsbHkgdW5zdWJzY3JpYmUgZnJvbSBhbGwgc3Vic2NyaXB0aW9uc1xyXG4gICAgICAgIHRoaXMuX29uRGVzdHJveS5uZXh0KCk7XHJcbiAgICAgICAgdGhpcy5fb25EZXN0cm95LmNvbXBsZXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIE1ha2UgdGhlIHRvb2x0aXAgb3BlbiAqL1xyXG4gICAgc2hvdygpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gaWYgdGhlIHRvb2x0aXAgaXMgZGlzYWJsZWQgdGhlbiBkbyBub3RoaW5nXHJcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5pc1Zpc2libGUgfHwgdGhpcy5fc2hvd1RpbWVvdXRJZCB8fCAhdGhpcy5jb250ZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGRlbGF5IHRoZSBzaG93IGJ5IHRoZSBkZWxheSBhbW91bnRcclxuICAgICAgICB0aGlzLl9zaG93VGltZW91dElkID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgLy8gY3JlYXRlIHRoZSB0b29sdGlwIGFuZCBnZXQgdGhlIG92ZXJsYXkgcmVmXHJcbiAgICAgICAgICAgIGNvbnN0IG92ZXJsYXlSZWYgPSB0aGlzLmNyZWF0ZU92ZXJsYXkoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgcG9ydGFsIHRvIGNyZWF0ZSB0aGUgdG9vbHRpcCBjb21wb25lbnRcclxuICAgICAgICAgICAgdGhpcy5fcG9ydGFsID0gdGhpcy5jcmVhdGVQb3J0YWwoKTtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSB0aGlzLmNyZWF0ZUluc3RhbmNlKG92ZXJsYXlSZWYpO1xyXG5cclxuICAgICAgICAgICAgLy8gd2F0Y2ggZm9yIGFueSBjaGFuZ2VzIHRvIHRoZSBjb250ZW50XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlLnJlcG9zaXRpb24kLnBpcGUodGFrZVVudGlsKHRoaXMuX29uRGVzdHJveSkpLnN1YnNjcmliZSh0aGlzLnJlcG9zaXRpb24uYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgICAgICAvLyBzdG9yZSB0aGUgdmlzaWJsZSBzdGF0ZVxyXG4gICAgICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAvLyBlbnN1cmUgdGhlIG92ZXJsYXkgaGFzIHRoZSBjb3JyZWN0IGluaXRpYWwgcG9zaXRpb25cclxuICAgICAgICAgICAgdGhpcy5yZXBvc2l0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBlbWl0IHRoZSBzaG93IGV2ZW50c1xyXG4gICAgICAgICAgICB0aGlzLnNob3duLmVtaXQoKTtcclxuICAgICAgICAgICAgdGhpcy5pc09wZW5DaGFuZ2UubmV4dCh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNsZWFyIHRoZSBpbnRlcnZhbCBpZFxyXG4gICAgICAgICAgICB0aGlzLl9zaG93VGltZW91dElkID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIC8vIGVtaXQgdGhlIHNob3cgZXZlbnQgdG8gY2xvc2UgYW55IG90aGVyIHRvb2x0aXBzXHJcbiAgICAgICAgICAgIHRoaXMuX3Rvb2x0aXBTZXJ2aWNlLnNob3duJC5uZXh0KHRoaXMuX2luc3RhbmNlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGVuc3VyZSBjaGFuZ2UgZGV0ZWN0aW9uIGlzIHJ1blxyXG4gICAgICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgfSwgdGhpcy5kZWxheSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKiBJZiBhIHRvb2x0aXAgZXhpc3RzIGFuZCBpcyB2aXNpYmxlLCBoaWRlIGl0ICovXHJcbiAgICBoaWRlKCkge1xyXG5cclxuICAgICAgICAvLyBpZiB3ZSBhcmUgd2FpdGluZyB0byBzaG93IGEgdG9vbHRpcCB0aGVuIGNhbmNlbCB0aGUgcGVuZGluZyB0aW1lb3V0XHJcbiAgICAgICAgaWYgKHRoaXMuX3Nob3dUaW1lb3V0SWQpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX3Nob3dUaW1lb3V0SWQpO1xyXG4gICAgICAgICAgICB0aGlzLl9zaG93VGltZW91dElkID0gbnVsbDtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX292ZXJsYXlSZWYgJiYgdGhpcy5fb3ZlcmxheVJlZi5oYXNBdHRhY2hlZCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX292ZXJsYXlSZWYuZGV0YWNoKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldEFyaWFEZXNjcmliZWRCeShudWxsKTtcclxuICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG51bGw7XHJcblxyXG4gICAgICAgIC8vIHN0b3JlIHRoZSB2aXNpYmxlIHN0YXRlXHJcbiAgICAgICAgdGhpcy5pc1Zpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gZW1pdCB0aGUgaGlkZSBldmVudHNcclxuICAgICAgICB0aGlzLmhpZGRlbi5lbWl0KCk7XHJcbiAgICAgICAgdGhpcy5pc09wZW5DaGFuZ2UubmV4dChmYWxzZSk7XHJcblxyXG4gICAgICAgIC8vIGVuc3VyZSBjaGFuZ2UgZGV0ZWN0aW9uIGlzIHJ1blxyXG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogVG9nZ2xlIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSB0b29sdGlwICovXHJcbiAgICB0b2dnbGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pc1Zpc2libGUgPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBSZWNhbGN1bGF0ZSB0aGUgcG9zaXRpb24gb2YgdGhlIHBvcG92ZXIgKi9cclxuICAgIHJlcG9zaXRpb24oKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNWaXNpYmxlICYmIHRoaXMuX292ZXJsYXlSZWYpIHtcclxuICAgICAgICAgICAgdGhpcy5fb3ZlcmxheVJlZi51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiogQ3JlYXRlIGFuIGluc3RhbmNlIGZyb20gdGhlIG92ZXJsYXkgcmVmIC0gYWxsb3dzIG92ZXJyaWRpbmcgYW5kIGFkZGl0aW9uYWwgbG9naWMgaGVyZSAqL1xyXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUluc3RhbmNlKG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYpOiBUb29sdGlwQ29tcG9uZW50IHtcclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG92ZXJsYXlSZWYuYXR0YWNoKHRoaXMuX3BvcnRhbCkuaW5zdGFuY2UgYXMgVG9vbHRpcENvbXBvbmVudDtcclxuXHJcbiAgICAgICAgLy8gc3VwcGx5IHRoZSB0b29sdGlwIHdpdGggdGhlIGNvcnJlY3QgcHJvcGVydGllc1xyXG4gICAgICAgIGluc3RhbmNlLnNldENvbnRlbnQodGhpcy5jb250ZW50KTtcclxuICAgICAgICBpbnN0YW5jZS5zZXRQbGFjZW1lbnQodGhpcy5wbGFjZW1lbnQpO1xyXG4gICAgICAgIGluc3RhbmNlLnNldENsYXNzKHRoaXMuY3VzdG9tQ2xhc3MpO1xyXG4gICAgICAgIGluc3RhbmNlLnNldENvbnRleHQodGhpcy5jb250ZXh0KTtcclxuICAgICAgICBpbnN0YW5jZS5zZXRSb2xlKHRoaXMucm9sZSk7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgYXJpYS1kZXNjcmliZWRieSBhdHRyaWJ1dGVcclxuICAgICAgICB0aGlzLnNldEFyaWFEZXNjcmliZWRCeShpbnN0YW5jZS5pZCk7XHJcblxyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQ3JlYXRlIHRoZSBjb21wb25lbnQgcG9ydGFsIC0gYWxsb3dzIG92ZXJyaWRpbmcgdG8gYWxsb3cgb3RoZXIgcG9ydGFscyBlZy4gcG9wb3ZlcnMgKi9cclxuICAgIHByb3RlY3RlZCBjcmVhdGVQb3J0YWwoKTogQ29tcG9uZW50UG9ydGFsPGFueT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wb3J0YWwgfHwgbmV3IENvbXBvbmVudFBvcnRhbChUb29sdGlwQ29tcG9uZW50LCB0aGlzLl92aWV3Q29udGFpbmVyUmVmKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQ3JlYXRlIHRoZSBvdmVybGF5IGFuZCBzZXQgdXAgdGhlIHNjcm9sbCBoYW5kbGluZyBiZWhhdmlvciAqL1xyXG4gICAgcHJpdmF0ZSBjcmVhdGVPdmVybGF5KCk6IE92ZXJsYXlSZWYge1xyXG5cclxuICAgICAgICAvLyBpZiB0aGUgdG9vbHRpcCBoYXMgYWxyZWFkeSBiZWVuIGNyZWF0ZWQgdGhlbiBqdXN0IHJldHVybiB0aGUgZXhpc3RpbmcgaW5zdGFuY2VcclxuICAgICAgICBpZiAodGhpcy5fb3ZlcmxheVJlZikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fb3ZlcmxheVJlZjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNvbmZpZ3VyZSB0aGUgdG9vbHRpcFxyXG4gICAgICAgIGNvbnN0IHN0cmF0ZWd5ID0gdGhpcy5fb3ZlcmxheS5wb3NpdGlvbigpXHJcbiAgICAgICAgICAgIC5jb25uZWN0ZWRUbyh0aGlzLl9lbGVtZW50UmVmLCB0aGlzLmdldE9yaWdpbigpLCB0aGlzLmdldE92ZXJsYXlQb3NpdGlvbigpKTtcclxuXHJcbiAgICAgICAgLy8gY29ycmVjdGx5IGhhbmRsZSBzY3JvbGxpbmdcclxuICAgICAgICBjb25zdCBzY3JvbGxhYmxlQW5jZXN0b3JzID0gdGhpcy5fc2Nyb2xsRGlzcGF0Y2hlclxyXG4gICAgICAgICAgICAuZ2V0QW5jZXN0b3JTY3JvbGxDb250YWluZXJzKHRoaXMuX2VsZW1lbnRSZWYpO1xyXG5cclxuICAgICAgICBzdHJhdGVneS53aXRoU2Nyb2xsYWJsZUNvbnRhaW5lcnMoc2Nyb2xsYWJsZUFuY2VzdG9ycyk7XHJcblxyXG4gICAgICAgIHRoaXMuX292ZXJsYXlSZWYgPSB0aGlzLl9vdmVybGF5LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IHN0cmF0ZWd5LFxyXG4gICAgICAgICAgICBwYW5lbENsYXNzOiAndXgtb3ZlcmxheS1wYW5lJyxcclxuICAgICAgICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMuX292ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5yZXBvc2l0aW9uKHsgc2Nyb2xsVGhyb3R0bGU6IDAgfSksXHJcbiAgICAgICAgICAgIGhhc0JhY2tkcm9wOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fb3ZlcmxheVJlZjtcclxuICAgIH1cclxuXHJcbiAgICAvKiogUmVjcmVhdGUgdGhlIG92ZXJsYXkgcmVmIHVzaW5nIHRoZSB1cGRhdGVkIG9yaWdpbiBhbmQgb3ZlcmxheSBwb3NpdGlvbnMgKi9cclxuICAgIHByaXZhdGUgZGVzdHJveU92ZXJsYXkoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIC8vIGRlc3Ryb3kgdGhlIGV4aXN0aW5nIG92ZXJsYXlcclxuICAgICAgICBpZiAodGhpcy5fb3ZlcmxheVJlZiAmJiB0aGlzLl9vdmVybGF5UmVmLmhhc0F0dGFjaGVkKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fb3ZlcmxheVJlZi5kZXRhY2goKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9vdmVybGF5UmVmKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX292ZXJsYXlSZWYuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLl9vdmVybGF5UmVmID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaXNWaXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEdldCB0aGUgb3JpZ2luIHBvc2l0aW9uIGJhc2VkIG9uIHRoZSBzcGVjaWZpZWQgdG9vbHRpcCBwbGFjZW1lbnQgKi9cclxuICAgIHByaXZhdGUgZ2V0T3JpZ2luKCk6IE9yaWdpbkNvbm5lY3Rpb25Qb3NpdGlvbiB7XHJcblxyXG4gICAgICAgIC8vIGVuc3VyZSBwbGFjZW1lbnQgaXMgZGVmaW5lZFxyXG4gICAgICAgIHRoaXMucGxhY2VtZW50ID0gdGhpcy5wbGFjZW1lbnQgfHwgJ3RvcCc7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBsYWNlbWVudCA9PSAndG9wJyB8fCB0aGlzLnBsYWNlbWVudCA9PSAnYm90dG9tJykge1xyXG4gICAgICAgICAgICByZXR1cm4geyBvcmlnaW5YOiAnY2VudGVyJywgb3JpZ2luWTogdGhpcy5wbGFjZW1lbnQgfTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGxhY2VtZW50ID09ICdsZWZ0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4geyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAnY2VudGVyJyB9O1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wbGFjZW1lbnQgPT0gJ3JpZ2h0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4geyBvcmlnaW5YOiAnZW5kJywgb3JpZ2luWTogJ2NlbnRlcicgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIENhbGN1bGF0ZSB0aGUgb3ZlcmxheSBwb3NpdGlvbiBiYXNlZCBvbiB0aGUgc3BlY2lmaWVkIHRvb2x0aXAgcGxhY2VtZW50ICovXHJcbiAgICBwcml2YXRlIGdldE92ZXJsYXlQb3NpdGlvbigpOiBPdmVybGF5Q29ubmVjdGlvblBvc2l0aW9uIHtcclxuXHJcbiAgICAgICAgLy8gZW5zdXJlIHBsYWNlbWVudCBpcyBkZWZpbmVkXHJcbiAgICAgICAgdGhpcy5wbGFjZW1lbnQgPSB0aGlzLnBsYWNlbWVudCB8fCAndG9wJztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucGxhY2VtZW50ID09ICd0b3AnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IG92ZXJsYXlYOiAnY2VudGVyJywgb3ZlcmxheVk6ICdib3R0b20nIH07XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBsYWNlbWVudCA9PSAnYm90dG9tJykge1xyXG4gICAgICAgICAgICByZXR1cm4geyBvdmVybGF5WDogJ2NlbnRlcicsIG92ZXJsYXlZOiAndG9wJyB9O1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wbGFjZW1lbnQgPT0gJ2xlZnQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IG92ZXJsYXlYOiAnZW5kJywgb3ZlcmxheVk6ICdjZW50ZXInIH07XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBsYWNlbWVudCA9PSAncmlnaHQnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ2NlbnRlcicgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTaW1wbGUgdXRpbGl0eSBtZXRob2QgLSBiZWNhdXNlIElFIGRvZXNuJ3Qgc3VwcG9ydCBhcnJheS5pbmNsdWRlc1xyXG4gICAgICogQW5kIGl0IGlzbid0IGluY2x1ZGVkIGluIHRoZSBjb3JlLWpzL2VzNiBwb2x5ZmlsbHMgd2hpY2ggYXJlIHRoZVxyXG4gICAgICogb25seSBvbmVzIHJlcXVpcmVkIGJ5IEFuZ3VsYXIgYW5kIGd1YXJhbnRlZWQgdG8gYmUgdGhlcmVcclxuICAgICAqKi9cclxuICAgIHByb3RlY3RlZCBpbmNsdWRlczxUPihhcnJheTogQXJyYXk8VD4sIHZhbHVlOiBUKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJyYXkpICYmICEhYXJyYXkuZmluZChpdGVtID0+IGl0ZW0gPT09IHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogSGFuZGxlIHRoZSBjbGljayBldmVudCAtIHNob3cgb3IgaGlkZSBhY2NvcmRpbmdseSAqL1xyXG4gICAgcHJvdGVjdGVkIG9uQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gaWYgaXRzIG5vdCB2aXNpYmxlIGFuZCBjbGljayBpcyBhIHNob3cgdHJpZ2dlciBvcGVuIGl0XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVmlzaWJsZSAmJiB0aGlzLmluY2x1ZGVzKHRoaXMuc2hvd1RyaWdnZXJzLCAnY2xpY2snKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zaG93KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiBpdHMgdmlzaWJsZSBhbmQgY2xpY2sgaXMgYSBoaWRlIHRyaWdnZXIgY2xvc2UgaXRcclxuICAgICAgICBpZiAodGhpcy5pc1Zpc2libGUgJiYgdGhpcy5pbmNsdWRlcyh0aGlzLmhpZGVUcmlnZ2VycywgJ2NsaWNrJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEhhbmRsZSB0aGUgbW91c2UgZW50ZXIgZXZlbnQgLSBzaG93IG9yIGhpZGUgYWNjb3JkaW5nbHkgKi9cclxuICAgIHByb3RlY3RlZCBvbk1vdXNlRW50ZXIoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gdGhpcyBpcyBhbiBzaG93IG9ubHkgdHJpZ2dlciAtIGlmIGFscmVhZHkgb3BlbiBvciBpdCBpc24ndCBhIHRyaWdnZXIgZG8gbm90aGluZ1xyXG4gICAgICAgIGlmICh0aGlzLmlzVmlzaWJsZSB8fCAhdGhpcy5pbmNsdWRlcyh0aGlzLnNob3dUcmlnZ2VycywgJ21vdXNlZW50ZXInKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBvdGhlcndpc2Ugb3BlbiB0aGUgdG9vbHRpcFxyXG4gICAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBIYW5kbGUgdGhlIG1vdXNlIGxlYXZlIGV2ZW50IC0gc2hvdyBvciBoaWRlIGFjY29yZGluZ2x5ICovXHJcbiAgICBwcm90ZWN0ZWQgb25Nb3VzZUxlYXZlKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcblxyXG4gICAgICAgIC8vIHRoaXMgaXMgYW4gaGlkZSBvbmx5IHRyaWdnZXIgLSBpZiBub3Qgb3BlbiBvciBpdCBpc24ndCBhIHRyaWdnZXIgZG8gbm90aGluZ1xyXG4gICAgICAgIGlmICghdGhpcy5pc1Zpc2libGUgfHwgIXRoaXMuaW5jbHVkZXModGhpcy5oaWRlVHJpZ2dlcnMsICdtb3VzZWxlYXZlJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gb3RoZXJ3aXNlIGNsb3NlIHRoZSB0b29sdGlwXHJcbiAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIEhhbmRsZSB0aGUgZm9jdXMgZXZlbnQgLSBzaG93IG9yIGhpZGUgYWNjb3JkaW5nbHkgKi9cclxuICAgIHByb3RlY3RlZCBvbkZvY3VzKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG5cclxuICAgICAgICAvLyB0aGlzIGlzIGFuIHNob3cgb25seSB0cmlnZ2VyIC0gaWYgYWxyZWFkeSBvcGVuIG9yIGl0IGlzbid0IGEgdHJpZ2dlciBkbyBub3RoaW5nXHJcbiAgICAgICAgaWYgKHRoaXMuaXNWaXNpYmxlIHx8ICF0aGlzLmluY2x1ZGVzKHRoaXMuc2hvd1RyaWdnZXJzLCAnZm9jdXMnKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBvdGhlcndpc2Ugb3BlbiB0aGUgdG9vbHRpcFxyXG4gICAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBIYW5kbGUgdGhlIGJsdXIgZXZlbnQgLSBzaG93IG9yIGhpZGUgYWNjb3JkaW5nbHkgKi9cclxuICAgIHByb3RlY3RlZCBvbkJsdXIoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcblxyXG4gICAgICAgIC8vIHRoaXMgaXMgYW4gaGlkZSBvbmx5IHRyaWdnZXIgLSBpZiBub3Qgb3BlbiBvciBpdCBpc24ndCBhIHRyaWdnZXIgZG8gbm90aGluZ1xyXG4gICAgICAgIGlmICghdGhpcy5pc1Zpc2libGUgfHwgIXRoaXMuaW5jbHVkZXModGhpcy5oaWRlVHJpZ2dlcnMsICdibHVyJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gb3RoZXJ3aXNlIGNsb3NlIHRoZSB0b29sdGlwXHJcbiAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIERldGVybWluZSBpZiB0aGUgdHJpZ2dlciBlbGVtZW50IGlzIGZvY3VzZWQgKi9cclxuICAgIHByaXZhdGUgaXNGb2N1c2VkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFByb2dyYW1tYXRpY2FsbHkgdXBkYXRlIHRoZSBhcmlhLWRlc2NyaWJlZGJ5IHByb3BlcnR5ICovXHJcbiAgICBwcm90ZWN0ZWQgc2V0QXJpYURlc2NyaWJlZEJ5KGlkOiBzdHJpbmcgfCBudWxsKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGlkID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhcmlhLWRlc2NyaWJlZGJ5Jyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FyaWEtZGVzY3JpYmVkYnknLCBpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQW5jaG9yUGxhY2VtZW50ID0gJ3RvcCcgfCAncmlnaHQnIHwgJ2JvdHRvbScgfCAnbGVmdCc7Il19