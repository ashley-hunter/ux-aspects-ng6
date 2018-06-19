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
export class MenuNavigationDirective {
    /**
     * @param {?} _service
     * @param {?} _elementRef
     * @param {?} document
     */
    constructor(_service, _elementRef, document) {
        this._service = _service;
        this._elementRef = _elementRef;
        this.toggleButtonPosition = 'top';
        this.navigatedOut = new EventEmitter();
        this._subscription = new Subscription();
        this._document = document;
    }
    /**
     * @return {?}
     */
    get activeIndex() {
        return this._itemsOrdered.indexOf(this._service.active$.value);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.toggleButton) {
            this._subscription.add(this.toggleButton.keyEnter.subscribe(this.focusFirst.bind(this)));
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._subscription.add(this.items.changes.subscribe(() => {
            this._itemsOrdered = this.items.toArray();
        }));
        this._itemsOrdered = this.items.toArray();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
    /**
     * @return {?}
     */
    focusFirst() {
        this.moveFirst();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keydownHandler(event) {
        // Only handle events when focus in within the list of menu items
        if (!this._elementRef.nativeElement.contains(this._document.activeElement)) {
            return;
        }
        let /** @type {?} */ handled = false;
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
    }
    /**
     * @param {?} event
     * @return {?}
     */
    moveNext(event) {
        // Do nothing if there's no active menu item registered
        if (this.activeIndex < 0) {
            return;
        }
        const /** @type {?} */ nextIndex = this.activeIndex + 1;
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
    }
    /**
     * @param {?} event
     * @return {?}
     */
    movePrevious(event) {
        // Do nothing if there's no active menu item registered
        if (this.activeIndex < 0) {
            return;
        }
        const /** @type {?} */ nextIndex = this.activeIndex - 1;
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
    }
    /**
     * @return {?}
     */
    moveFirst() {
        if (this._itemsOrdered.length > 0) {
            this._service.active$.next(this._itemsOrdered[0]);
        }
    }
    /**
     * @return {?}
     */
    moveLast() {
        if (this._itemsOrdered.length > 0) {
            this._service.active$.next(this._itemsOrdered[this._itemsOrdered.length - 1]);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    moveToToggleButton(event) {
        if (this.toggleButton) {
            this.toggleButton.focus();
            this.toggleButton.menuOpen = false;
        }
        this.navigatedOut.emit(event);
    }
}
MenuNavigationDirective.decorators = [
    { type: Directive, args: [{
                selector: '[uxMenuNavigation]',
                exportAs: 'uxMenuNavigation',
                providers: [MenuNavigationService]
            },] },
];
/** @nocollapse */
MenuNavigationDirective.ctorParameters = () => [
    { type: MenuNavigationService, },
    { type: ElementRef, },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] },] },
];
MenuNavigationDirective.propDecorators = {
    "toggleButton": [{ type: Input },],
    "toggleButtonPosition": [{ type: Input },],
    "navigatedOut": [{ type: Output },],
    "items": [{ type: ContentChildren, args: [MenuNavigationItemDirective, { descendants: true },] },],
    "keydownHandler": [{ type: HostListener, args: ['document:keydown', ['$event'],] },],
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1uYXZpZ2F0aW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL21lbnUtbmF2aWdhdGlvbi9tZW51LW5hdmlnYXRpb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQW9CLGVBQWUsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxSyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNuRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQU9sRSxNQUFNOzs7Ozs7SUF3QkYsWUFDWSxVQUNBLGFBQ1U7UUFGVixhQUFRLEdBQVIsUUFBUTtRQUNSLGdCQUFXLEdBQVgsV0FBVztvQ0FwQnFDLEtBQUs7NEJBR2xELElBQUksWUFBWSxFQUFpQjs2QkFheEIsSUFBSSxZQUFZLEVBQUU7UUFPdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7S0FDN0I7Ozs7SUFoQkQsSUFBSSxXQUFXO1FBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2xFOzs7O0lBZ0JELFFBQVE7UUFDSixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJ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dCwgQ29udGVudENoaWxkcmVuLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBJbmplY3QsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE1lbnVOYXZpZ2F0aW9uSXRlbURpcmVjdGl2ZSB9IGZyb20gJy4vbWVudS1uYXZpZ2F0aW9uLWl0ZW0uZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTWVudU5hdmlnYXRpb25Ub2dnbGVEaXJlY3RpdmUgfSBmcm9tICcuL21lbnUtbmF2aWdhdGlvbi10b2dnbGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTWVudU5hdmlnYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9tZW51LW5hdmlnYXRpb24uc2VydmljZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW3V4TWVudU5hdmlnYXRpb25dJyxcclxuICAgIGV4cG9ydEFzOiAndXhNZW51TmF2aWdhdGlvbicsXHJcbiAgICBwcm92aWRlcnM6IFtNZW51TmF2aWdhdGlvblNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZW51TmF2aWdhdGlvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgdG9nZ2xlQnV0dG9uOiBNZW51TmF2aWdhdGlvblRvZ2dsZURpcmVjdGl2ZTtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgdG9nZ2xlQnV0dG9uUG9zaXRpb246ICd0b3AnIHwgJ3JpZ2h0JyB8ICdib3R0b20nIHwgJ2xlZnQnID0gJ3RvcCc7XHJcblxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBuYXZpZ2F0ZWRPdXQgPSBuZXcgRXZlbnRFbWl0dGVyPEtleWJvYXJkRXZlbnQ+KCk7XHJcblxyXG4gICAgQENvbnRlbnRDaGlsZHJlbihNZW51TmF2aWdhdGlvbkl0ZW1EaXJlY3RpdmUsIHsgZGVzY2VuZGFudHM6IHRydWUgfSlcclxuICAgIGl0ZW1zOiBRdWVyeUxpc3Q8TWVudU5hdmlnYXRpb25JdGVtRGlyZWN0aXZlPjtcclxuXHJcbiAgICBnZXQgYWN0aXZlSW5kZXgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXNPcmRlcmVkLmluZGV4T2YodGhpcy5fc2VydmljZS5hY3RpdmUkLnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pdGVtc09yZGVyZWQ6IE1lbnVOYXZpZ2F0aW9uSXRlbURpcmVjdGl2ZVtdO1xyXG5cclxuICAgIHByaXZhdGUgX2RvY3VtZW50OiBhbnk7XHJcblxyXG4gICAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX3NlcnZpY2U6IE1lbnVOYXZpZ2F0aW9uU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgICAgIEBJbmplY3QoRE9DVU1FTlQpIGRvY3VtZW50OiBhbnlcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuX2RvY3VtZW50ID0gZG9jdW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMudG9nZ2xlQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbi5hZGQoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUJ1dHRvbi5rZXlFbnRlci5zdWJzY3JpYmUodGhpcy5mb2N1c0ZpcnN0LmJpbmQodGhpcykpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uLmFkZChcclxuICAgICAgICAgICAgdGhpcy5pdGVtcy5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pdGVtc09yZGVyZWQgPSB0aGlzLml0ZW1zLnRvQXJyYXkoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLl9pdGVtc09yZGVyZWQgPSB0aGlzLml0ZW1zLnRvQXJyYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBmb2N1c0ZpcnN0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubW92ZUZpcnN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5ZG93bicsIFsnJGV2ZW50J10pXHJcbiAgICBrZXlkb3duSGFuZGxlcihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG5cclxuICAgICAgICAvLyBPbmx5IGhhbmRsZSBldmVudHMgd2hlbiBmb2N1cyBpbiB3aXRoaW4gdGhlIGxpc3Qgb2YgbWVudSBpdGVtc1xyXG4gICAgICAgIGlmICghdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKHRoaXMuX2RvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBoYW5kbGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdBcnJvd1VwJzpcclxuICAgICAgICAgICAgY2FzZSAnVXAnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlUHJldmlvdXMoZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93RG93bic6XHJcbiAgICAgICAgICAgIGNhc2UgJ0Rvd24nOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlTmV4dChldmVudCk7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcclxuICAgICAgICAgICAgY2FzZSAnTGVmdCc6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50b2dnbGVCdXR0b25Qb3NpdGlvbiA9PT0gJ2xlZnQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlVG9Ub2dnbGVCdXR0b24oZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcclxuICAgICAgICAgICAgY2FzZSAnUmlnaHQnOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudG9nZ2xlQnV0dG9uUG9zaXRpb24gPT09ICdyaWdodCcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVUb1RvZ2dsZUJ1dHRvbihldmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ0hvbWUnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlRmlyc3QoKTtcclxuICAgICAgICAgICAgICAgIGhhbmRsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdFbmQnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlTGFzdCgpO1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ0VzY2FwZSc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlZE91dC5lbWl0KGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIGhhbmRsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaGFuZGxlZCkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtb3ZlTmV4dChldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG5cclxuICAgICAgICAvLyBEbyBub3RoaW5nIGlmIHRoZXJlJ3Mgbm8gYWN0aXZlIG1lbnUgaXRlbSByZWdpc3RlcmVkXHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlSW5kZXggPCAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG5leHRJbmRleCA9IHRoaXMuYWN0aXZlSW5kZXggKyAxO1xyXG4gICAgICAgIGlmIChuZXh0SW5kZXggPCB0aGlzLl9pdGVtc09yZGVyZWQubGVuZ3RoKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBBY3RpdmF0ZSB0aGUgbmV4dCBtZW51IGl0ZW1cclxuICAgICAgICAgICAgLy8gKHV4TWVudU5hdmlnYXRpb25JdGVtIHN1YnNjcmliZXMgdG8gdGhpcyBhbmQgYXBwbGllcyBmb2N1cyBpZiBpdCBtYXRjaGVzKVxyXG4gICAgICAgICAgICB0aGlzLl9zZXJ2aWNlLmFjdGl2ZSQubmV4dCh0aGlzLl9pdGVtc09yZGVyZWRbbmV4dEluZGV4XSk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAvLyBDaGVjayBpZiBmb2N1cyB3ZW50IG91dCBvZiBib3VuZHMgaW4gdGhlIGRpcmVjdGlvbiBvZiB0aGUgb3JpZ2luIHRvZ2dsZSBidXR0b25cclxuICAgICAgICAgICAgaWYgKHRoaXMudG9nZ2xlQnV0dG9uUG9zaXRpb24gPT09ICdib3R0b20nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVUb1RvZ2dsZUJ1dHRvbihldmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtb3ZlUHJldmlvdXMoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gRG8gbm90aGluZyBpZiB0aGVyZSdzIG5vIGFjdGl2ZSBtZW51IGl0ZW0gcmVnaXN0ZXJlZFxyXG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZUluZGV4IDwgMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBuZXh0SW5kZXggPSB0aGlzLmFjdGl2ZUluZGV4IC0gMTtcclxuICAgICAgICBpZiAobmV4dEluZGV4ID49IDApIHtcclxuXHJcbiAgICAgICAgICAgIC8vIEFjdGl2YXRlIHRoZSBwcmV2aW91cyBtZW51IGl0ZW1cclxuICAgICAgICAgICAgLy8gKHV4TWVudU5hdmlnYXRpb25JdGVtIHN1YnNjcmliZXMgdG8gdGhpcyBhbmQgYXBwbGllcyBmb2N1cyBpZiBpdCBtYXRjaGVzKVxyXG4gICAgICAgICAgICB0aGlzLl9zZXJ2aWNlLmFjdGl2ZSQubmV4dCh0aGlzLl9pdGVtc09yZGVyZWRbbmV4dEluZGV4XSk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAvLyBDaGVjayBpZiBmb2N1cyB3ZW50IG91dCBvZiBib3VuZHMgaW4gdGhlIGRpcmVjdGlvbiBvZiB0aGUgb3JpZ2luIHRvZ2dsZSBidXR0b25cclxuICAgICAgICAgICAgaWYgKHRoaXMudG9nZ2xlQnV0dG9uUG9zaXRpb24gPT09ICd0b3AnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVUb1RvZ2dsZUJ1dHRvbihldmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtb3ZlRmlyc3QoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2l0ZW1zT3JkZXJlZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NlcnZpY2UuYWN0aXZlJC5uZXh0KHRoaXMuX2l0ZW1zT3JkZXJlZFswXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbW92ZUxhc3QoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2l0ZW1zT3JkZXJlZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NlcnZpY2UuYWN0aXZlJC5uZXh0KHRoaXMuX2l0ZW1zT3JkZXJlZFt0aGlzLl9pdGVtc09yZGVyZWQubGVuZ3RoIC0gMV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1vdmVUb1RvZ2dsZUJ1dHRvbihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnRvZ2dsZUJ1dHRvbikge1xyXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUJ1dHRvbi5mb2N1cygpO1xyXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUJ1dHRvbi5tZW51T3BlbiA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZWRPdXQuZW1pdChldmVudCk7XHJcbiAgICB9XHJcbn0iXX0=