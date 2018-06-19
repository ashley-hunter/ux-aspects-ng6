/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ContentChildren, Directive, ElementRef, EventEmitter, HostListener, Inject, Input, Output, QueryList } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { MenuNavigationItemDirective } from './menu-navigation-item.directive';
import { MenuNavigationToggleDirective } from './menu-navigation-toggle.directive';
import { MenuNavigationService } from './menu-navigation.service';
var MenuNavigationDirective = /** @class */ (function () {
    function MenuNavigationDirective(_service, _elementRef, document) {
        this._service = _service;
        this._elementRef = _elementRef;
        this.toggleButtonPosition = 'top';
        this.navigatedOut = new EventEmitter();
        this._subscription = new Subscription();
        this._document = document;
    }
    Object.defineProperty(MenuNavigationDirective.prototype, "activeIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this._itemsOrdered.indexOf(this._service.active$.value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MenuNavigationDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.toggleButton) {
            this._subscription.add(this.toggleButton.keyEnter.subscribe(this.focusFirst.bind(this)));
        }
    };
    /**
     * @return {?}
     */
    MenuNavigationDirective.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._subscription.add(this.items.changes.subscribe(function () {
            _this._itemsOrdered = _this.items.toArray();
        }));
        this._itemsOrdered = this.items.toArray();
    };
    /**
     * @return {?}
     */
    MenuNavigationDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    MenuNavigationDirective.prototype.focusFirst = /**
     * @return {?}
     */
    function () {
        this.moveFirst();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MenuNavigationDirective.prototype.keydownHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // Only handle events when focus in within the list of menu items
        if (!this._elementRef.nativeElement.contains(this._document.activeElement)) {
            return;
        }
        var /** @type {?} */ handled = false;
        switch (event.key) {
            case 'ArrowUp':
            case 'Up':
                this.movePrevious(event);
                handled = true;
                break;
            case 'ArrowDown':
            case 'Down':
                this.moveNext(event);
                handled = true;
                break;
            case 'ArrowLeft':
            case 'Left':
                if (this.toggleButtonPosition === 'left') {
                    this.moveToToggleButton(event);
                    handled = true;
                }
                break;
            case 'ArrowRight':
            case 'Right':
                if (this.toggleButtonPosition === 'right') {
                    this.moveToToggleButton(event);
                    handled = true;
                }
                break;
            case 'Home':
                this.moveFirst();
                handled = true;
                break;
            case 'End':
                this.moveLast();
                handled = true;
                break;
            case 'Escape':
                this.navigatedOut.emit(event);
                handled = true;
                break;
        }
        if (handled) {
            event.preventDefault();
            event.stopPropagation();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MenuNavigationDirective.prototype.moveNext = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // Do nothing if there's no active menu item registered
        if (this.activeIndex < 0) {
            return;
        }
        var /** @type {?} */ nextIndex = this.activeIndex + 1;
        if (nextIndex < this._itemsOrdered.length) {
            // Activate the next menu item
            // (uxMenuNavigationItem subscribes to this and applies focus if it matches)
            this._service.active$.next(this._itemsOrdered[nextIndex]);
        }
        else {
            // Check if focus went out of bounds in the direction of the origin toggle button
            if (this.toggleButtonPosition === 'bottom') {
                this.moveToToggleButton(event);
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MenuNavigationDirective.prototype.movePrevious = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // Do nothing if there's no active menu item registered
        if (this.activeIndex < 0) {
            return;
        }
        var /** @type {?} */ nextIndex = this.activeIndex - 1;
        if (nextIndex >= 0) {
            // Activate the previous menu item
            // (uxMenuNavigationItem subscribes to this and applies focus if it matches)
            this._service.active$.next(this._itemsOrdered[nextIndex]);
        }
        else {
            // Check if focus went out of bounds in the direction of the origin toggle button
            if (this.toggleButtonPosition === 'top') {
                this.moveToToggleButton(event);
            }
        }
    };
    /**
     * @return {?}
     */
    MenuNavigationDirective.prototype.moveFirst = /**
     * @return {?}
     */
    function () {
        if (this._itemsOrdered.length > 0) {
            this._service.active$.next(this._itemsOrdered[0]);
        }
    };
    /**
     * @return {?}
     */
    MenuNavigationDirective.prototype.moveLast = /**
     * @return {?}
     */
    function () {
        if (this._itemsOrdered.length > 0) {
            this._service.active$.next(this._itemsOrdered[this._itemsOrdered.length - 1]);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MenuNavigationDirective.prototype.moveToToggleButton = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.toggleButton) {
            this.toggleButton.focus();
            this.toggleButton.menuOpen = false;
        }
        this.navigatedOut.emit(event);
    };
    MenuNavigationDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[uxMenuNavigation]',
                    exportAs: 'uxMenuNavigation',
                    providers: [MenuNavigationService]
                },] },
    ];
    /** @nocollapse */
    MenuNavigationDirective.ctorParameters = function () { return [
        { type: MenuNavigationService, },
        { type: ElementRef, },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] },] },
    ]; };
    MenuNavigationDirective.propDecorators = {
        "toggleButton": [{ type: Input },],
        "toggleButtonPosition": [{ type: Input },],
        "navigatedOut": [{ type: Output },],
        "items": [{ type: ContentChildren, args: [MenuNavigationItemDirective, { descendants: true },] },],
        "keydownHandler": [{ type: HostListener, args: ['document:keydown', ['$event'],] },],
    };
    return MenuNavigationDirective;
}());
export { MenuNavigationDirective };
function MenuNavigationDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MenuNavigationDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MenuNavigationDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MenuNavigationDirective.propDecorators;
    /** @type {?} */
    MenuNavigationDirective.prototype.toggleButton;
    /** @type {?} */
    MenuNavigationDirective.prototype.toggleButtonPosition;
    /** @type {?} */
    MenuNavigationDirective.prototype.navigatedOut;
    /** @type {?} */
    MenuNavigationDirective.prototype.items;
    /** @type {?} */
    MenuNavigationDirective.prototype._itemsOrdered;
    /** @type {?} */
    MenuNavigationDirective.prototype._document;
    /** @type {?} */
    MenuNavigationDirective.prototype._subscription;
    /** @type {?} */
    MenuNavigationDirective.prototype._service;
    /** @type {?} */
    MenuNavigationDirective.prototype._elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1uYXZpZ2F0aW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL21lbnUtbmF2aWdhdGlvbi9tZW51LW5hdmlnYXRpb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQW9CLGVBQWUsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxSyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNuRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7SUErQjlELGlDQUNZLFVBQ0EsYUFDVTtRQUZWLGFBQVEsR0FBUixRQUFRO1FBQ1IsZ0JBQVcsR0FBWCxXQUFXO29DQXBCcUMsS0FBSzs0QkFHbEQsSUFBSSxZQUFZLEVBQWlCOzZCQWF4QixJQUFJLFlBQVksRUFBRTtRQU90QyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztLQUM3QjtJQWhCRCxzQkFBSSxnREFBVzs7OztRQUFmO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2xFOzs7T0FBQTs7OztJQWdCRCwwQ0FBUTs7O0lBQVI7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZ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LENBQUMsUUFBUSxDQUFDOztrQ0F2RWhEOztTQVlhLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENvbnRlbnRDaGlsZHJlbiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5qZWN0LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBNZW51TmF2aWdhdGlvbkl0ZW1EaXJlY3RpdmUgfSBmcm9tICcuL21lbnUtbmF2aWdhdGlvbi1pdGVtLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE1lbnVOYXZpZ2F0aW9uVG9nZ2xlRGlyZWN0aXZlIH0gZnJvbSAnLi9tZW51LW5hdmlnYXRpb24tdG9nZ2xlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE1lbnVOYXZpZ2F0aW9uU2VydmljZSB9IGZyb20gJy4vbWVudS1uYXZpZ2F0aW9uLnNlcnZpY2UnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1t1eE1lbnVOYXZpZ2F0aW9uXScsXHJcbiAgICBleHBvcnRBczogJ3V4TWVudU5hdmlnYXRpb24nLFxyXG4gICAgcHJvdmlkZXJzOiBbTWVudU5hdmlnYXRpb25TZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWVudU5hdmlnYXRpb25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHRvZ2dsZUJ1dHRvbjogTWVudU5hdmlnYXRpb25Ub2dnbGVEaXJlY3RpdmU7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHRvZ2dsZUJ1dHRvblBvc2l0aW9uOiAndG9wJyB8ICdyaWdodCcgfCAnYm90dG9tJyB8ICdsZWZ0JyA9ICd0b3AnO1xyXG5cclxuICAgIEBPdXRwdXQoKVxyXG4gICAgbmF2aWdhdGVkT3V0ID0gbmV3IEV2ZW50RW1pdHRlcjxLZXlib2FyZEV2ZW50PigpO1xyXG5cclxuICAgIEBDb250ZW50Q2hpbGRyZW4oTWVudU5hdmlnYXRpb25JdGVtRGlyZWN0aXZlLCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pXHJcbiAgICBpdGVtczogUXVlcnlMaXN0PE1lbnVOYXZpZ2F0aW9uSXRlbURpcmVjdGl2ZT47XHJcblxyXG4gICAgZ2V0IGFjdGl2ZUluZGV4KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zT3JkZXJlZC5pbmRleE9mKHRoaXMuX3NlcnZpY2UuYWN0aXZlJC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaXRlbXNPcmRlcmVkOiBNZW51TmF2aWdhdGlvbkl0ZW1EaXJlY3RpdmVbXTtcclxuXHJcbiAgICBwcml2YXRlIF9kb2N1bWVudDogYW55O1xyXG5cclxuICAgIHByaXZhdGUgX3N1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9zZXJ2aWNlOiBNZW51TmF2aWdhdGlvblNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgICAgICBASW5qZWN0KERPQ1VNRU5UKSBkb2N1bWVudDogYW55XHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLl9kb2N1bWVudCA9IGRvY3VtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnRvZ2dsZUJ1dHRvbikge1xyXG4gICAgICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb24uYWRkKFxyXG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVCdXR0b24ua2V5RW50ZXIuc3Vic2NyaWJlKHRoaXMuZm9jdXNGaXJzdC5iaW5kKHRoaXMpKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbi5hZGQoXHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXMuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faXRlbXNPcmRlcmVkID0gdGhpcy5pdGVtcy50b0FycmF5KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5faXRlbXNPcmRlcmVkID0gdGhpcy5pdGVtcy50b0FycmF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9jdXNGaXJzdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1vdmVGaXJzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmtleWRvd24nLCBbJyRldmVudCddKVxyXG4gICAga2V5ZG93bkhhbmRsZXIoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gT25seSBoYW5kbGUgZXZlbnRzIHdoZW4gZm9jdXMgaW4gd2l0aGluIHRoZSBsaXN0IG9mIG1lbnUgaXRlbXNcclxuICAgICAgICBpZiAoIXRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyh0aGlzLl9kb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaGFuZGxlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnQXJyb3dVcCc6XHJcbiAgICAgICAgICAgIGNhc2UgJ1VwJzpcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZVByZXZpb3VzKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIGhhbmRsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdBcnJvd0Rvd24nOlxyXG4gICAgICAgICAgICBjYXNlICdEb3duJzpcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZU5leHQoZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XHJcbiAgICAgICAgICAgIGNhc2UgJ0xlZnQnOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudG9nZ2xlQnV0dG9uUG9zaXRpb24gPT09ICdsZWZ0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZVRvVG9nZ2xlQnV0dG9uKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XHJcbiAgICAgICAgICAgIGNhc2UgJ1JpZ2h0JzpcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvZ2dsZUJ1dHRvblBvc2l0aW9uID09PSAncmlnaHQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlVG9Ub2dnbGVCdXR0b24oZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdIb21lJzpcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZUZpcnN0KCk7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnRW5kJzpcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZUxhc3QoKTtcclxuICAgICAgICAgICAgICAgIGhhbmRsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdFc2NhcGUnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZWRPdXQuZW1pdChldmVudCk7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGhhbmRsZWQpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbW92ZU5leHQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gRG8gbm90aGluZyBpZiB0aGVyZSdzIG5vIGFjdGl2ZSBtZW51IGl0ZW0gcmVnaXN0ZXJlZFxyXG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZUluZGV4IDwgMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBuZXh0SW5kZXggPSB0aGlzLmFjdGl2ZUluZGV4ICsgMTtcclxuICAgICAgICBpZiAobmV4dEluZGV4IDwgdGhpcy5faXRlbXNPcmRlcmVkLmxlbmd0aCkge1xyXG5cclxuICAgICAgICAgICAgLy8gQWN0aXZhdGUgdGhlIG5leHQgbWVudSBpdGVtXHJcbiAgICAgICAgICAgIC8vICh1eE1lbnVOYXZpZ2F0aW9uSXRlbSBzdWJzY3JpYmVzIHRvIHRoaXMgYW5kIGFwcGxpZXMgZm9jdXMgaWYgaXQgbWF0Y2hlcylcclxuICAgICAgICAgICAgdGhpcy5fc2VydmljZS5hY3RpdmUkLm5leHQodGhpcy5faXRlbXNPcmRlcmVkW25leHRJbmRleF0pO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgZm9jdXMgd2VudCBvdXQgb2YgYm91bmRzIGluIHRoZSBkaXJlY3Rpb24gb2YgdGhlIG9yaWdpbiB0b2dnbGUgYnV0dG9uXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRvZ2dsZUJ1dHRvblBvc2l0aW9uID09PSAnYm90dG9tJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlVG9Ub2dnbGVCdXR0b24oZXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbW92ZVByZXZpb3VzKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcblxyXG4gICAgICAgIC8vIERvIG5vdGhpbmcgaWYgdGhlcmUncyBubyBhY3RpdmUgbWVudSBpdGVtIHJlZ2lzdGVyZWRcclxuICAgICAgICBpZiAodGhpcy5hY3RpdmVJbmRleCA8IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbmV4dEluZGV4ID0gdGhpcy5hY3RpdmVJbmRleCAtIDE7XHJcbiAgICAgICAgaWYgKG5leHRJbmRleCA+PSAwKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBBY3RpdmF0ZSB0aGUgcHJldmlvdXMgbWVudSBpdGVtXHJcbiAgICAgICAgICAgIC8vICh1eE1lbnVOYXZpZ2F0aW9uSXRlbSBzdWJzY3JpYmVzIHRvIHRoaXMgYW5kIGFwcGxpZXMgZm9jdXMgaWYgaXQgbWF0Y2hlcylcclxuICAgICAgICAgICAgdGhpcy5fc2VydmljZS5hY3RpdmUkLm5leHQodGhpcy5faXRlbXNPcmRlcmVkW25leHRJbmRleF0pO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgZm9jdXMgd2VudCBvdXQgb2YgYm91bmRzIGluIHRoZSBkaXJlY3Rpb24gb2YgdGhlIG9yaWdpbiB0b2dnbGUgYnV0dG9uXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRvZ2dsZUJ1dHRvblBvc2l0aW9uID09PSAndG9wJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlVG9Ub2dnbGVCdXR0b24oZXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbW92ZUZpcnN0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9pdGVtc09yZGVyZWQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXJ2aWNlLmFjdGl2ZSQubmV4dCh0aGlzLl9pdGVtc09yZGVyZWRbMF0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1vdmVMYXN0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9pdGVtc09yZGVyZWQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zZXJ2aWNlLmFjdGl2ZSQubmV4dCh0aGlzLl9pdGVtc09yZGVyZWRbdGhpcy5faXRlbXNPcmRlcmVkLmxlbmd0aCAtIDFdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtb3ZlVG9Ub2dnbGVCdXR0b24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy50b2dnbGVCdXR0b24pIHtcclxuICAgICAgICAgICAgdGhpcy50b2dnbGVCdXR0b24uZm9jdXMoKTtcclxuICAgICAgICAgICAgdGhpcy50b2dnbGVCdXR0b24ubWVudU9wZW4gPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubmF2aWdhdGVkT3V0LmVtaXQoZXZlbnQpO1xyXG4gICAgfVxyXG59Il19