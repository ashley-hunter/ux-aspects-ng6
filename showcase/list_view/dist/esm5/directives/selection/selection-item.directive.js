/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { SelectionService } from './selection.service';
var SelectionItemDirective = /** @class */ (function () {
    function SelectionItemDirective(_selectionService, _elementRef) {
        this._selectionService = _selectionService;
        this._elementRef = _elementRef;
        this.tabindex = 0;
        this.selectedChange = new EventEmitter();
        this.active = false;
        this._selected = false;
        this._subscriptions = new Subscription();
    }
    Object.defineProperty(SelectionItemDirective.prototype, "selected", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selected;
        },
        set: /**
         * @param {?} selected
         * @return {?}
         */
        function (selected) {
            selected ? this.select() : this.deselect();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SelectionItemDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // if there is no associated data then throw an error
        if (!this.uxSelectionItem) {
            throw new Error('The uxSelectionItem directive must have data associated with it.');
        }
        // subscribe to selection changes on this item
        this._subscriptions.add(this._selectionService.selected$(this.uxSelectionItem).subscribe(function (selected) {
            // store the selected state
            // store the selected state
            _this._selected = selected;
            // emit the selected state
            // emit the selected state
            _this.selectedChange.emit(selected);
        }));
        // subscribe to changes to the active state
        this._subscriptions.add(this._selectionService.active$.pipe(map(function (active) { return active === _this.uxSelectionItem; })).subscribe(function (active) {
            // store the focus state
            // store the focus state
            _this.active = active;
            // if it is active then focus the element
            if (active === true) {
                _this._elementRef.nativeElement.focus();
            }
        }));
    };
    /**
     * @return {?}
     */
    SelectionItemDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscriptions.unsubscribe();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectionItemDirective.prototype.click = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this._selectionService.enabled && this._selectionService.clickEnabled) {
            this._selectionService.strategy.click(event, this.uxSelectionItem);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectionItemDirective.prototype.mousedown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this._selectionService.enabled && this._selectionService.clickEnabled) {
            this._selectionService.strategy.mousedown(event, this.uxSelectionItem);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectionItemDirective.prototype.keydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this._selectionService.enabled && this._selectionService.keyboardEnabled) {
            this._selectionService.strategy.keydown(event, this.uxSelectionItem);
        }
    };
    /**
     * Select this item using the current strategy
     */
    /**
     * Select this item using the current strategy
     * @return {?}
     */
    SelectionItemDirective.prototype.select = /**
     * Select this item using the current strategy
     * @return {?}
     */
    function () {
        if (this._selectionService.enabled) {
            this._selectionService.strategy.select(this.uxSelectionItem);
        }
    };
    /**
     * Deselect this item using the current strategy
     */
    /**
     * Deselect this item using the current strategy
     * @return {?}
     */
    SelectionItemDirective.prototype.deselect = /**
     * Deselect this item using the current strategy
     * @return {?}
     */
    function () {
        if (this._selectionService.enabled) {
            this._selectionService.strategy.deselect(this.uxSelectionItem);
        }
    };
    SelectionItemDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[uxSelectionItem]',
                    exportAs: 'ux-selection-item'
                },] },
    ];
    /** @nocollapse */
    SelectionItemDirective.ctorParameters = function () { return [
        { type: SelectionService, },
        { type: ElementRef, },
    ]; };
    SelectionItemDirective.propDecorators = {
        "uxSelectionItem": [{ type: Input },],
        "selected": [{ type: Input }, { type: HostBinding, args: ['class.ux-selection-selected',] },],
        "tabindex": [{ type: Input }, { type: HostBinding, args: ['tabindex',] },],
        "selectedChange": [{ type: Output },],
        "active": [{ type: HostBinding, args: ['class.ux-selection-focused',] },],
        "click": [{ type: HostListener, args: ['click', ['$event'],] },],
        "mousedown": [{ type: HostListener, args: ['mousedown', ['$event'],] },],
        "keydown": [{ type: HostListener, args: ['keydown', ['$event'],] },],
    };
    return SelectionItemDirective;
}());
export { SelectionItemDirective };
function SelectionItemDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SelectionItemDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SelectionItemDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    SelectionItemDirective.propDecorators;
    /** @type {?} */
    SelectionItemDirective.prototype.uxSelectionItem;
    /** @type {?} */
    SelectionItemDirective.prototype.tabindex;
    /** @type {?} */
    SelectionItemDirective.prototype.selectedChange;
    /** @type {?} */
    SelectionItemDirective.prototype.active;
    /** @type {?} */
    SelectionItemDirective.prototype._selected;
    /** @type {?} */
    SelectionItemDirective.prototype._subscriptions;
    /** @type {?} */
    SelectionItemDirective.prototype._selectionService;
    /** @type {?} */
    SelectionItemDirective.prototype._elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLWl0ZW0uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvc2VsZWN0aW9uL3NlbGVjdGlvbi1pdGVtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakksT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7O0lBMkJyRCxnQ0FBb0IsaUJBQW1DLEVBQVUsV0FBdUI7UUFBcEUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFZO3dCQVJuQyxDQUFDOzhCQUMzQixJQUFJLFlBQVksRUFBVztzQkFFTyxLQUFLO3lCQUVyQyxLQUFLOzhCQUNULElBQUksWUFBWSxFQUFFO0tBRWtEOzBCQWhCekYsNENBQVE7Ozs7UUFJWjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3ZCOzs7OztrQkFOWSxRQUFpQjtZQUM1QixRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDOzs7Ozs7OztJQWlCN0MseUNBQVE7OztJQUFSO1FBQUEsaUJBNEJDOztRQXpCQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQzFCLE1BQU0sSUFBSSxLQUFLLENBQUMsa0VBQWtFLENBQUMsQ0FBQztTQUNyRjs7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O29DQVczQixLQUFLOzZCQUVMLEtBQUssWUFBSSxXQUFXLFNBQUMsNkJBQTZCOzZCQVNsRCxLQUFLLFlBQUksV0FBVyxTQUFDLFVBQVU7bUNBQy9CLE1BQU07MkJBRU4sV0FBVyxTQUFDLDRCQUE0QjswQkF5Q3hDLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7OEJBTWhDLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7NEJBTXBDLFlBQVksU0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7O2lDQTlFckM7O1NBU2Esc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFNlbGVjdGlvblNlcnZpY2UgfSBmcm9tICcuL3NlbGVjdGlvbi5zZXJ2aWNlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW3V4U2VsZWN0aW9uSXRlbV0nLFxyXG4gIGV4cG9ydEFzOiAndXgtc2VsZWN0aW9uLWl0ZW0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3Rpb25JdGVtRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICBASW5wdXQoKSB1eFNlbGVjdGlvbkl0ZW06IGFueTtcclxuXHJcbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdjbGFzcy51eC1zZWxlY3Rpb24tc2VsZWN0ZWQnKVxyXG4gIHNldCBzZWxlY3RlZChzZWxlY3RlZDogYm9vbGVhbikge1xyXG4gICAgc2VsZWN0ZWQgPyB0aGlzLnNlbGVjdCgpIDogdGhpcy5kZXNlbGVjdCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNlbGVjdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xyXG4gIH1cclxuICBcclxuICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ3RhYmluZGV4JykgdGFiaW5kZXg6IG51bWJlciA9IDA7XHJcbiAgQE91dHB1dCgpIHNlbGVjdGVkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnV4LXNlbGVjdGlvbi1mb2N1c2VkJykgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHByaXZhdGUgX3NlbGVjdGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9ucyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2VsZWN0aW9uU2VydmljZTogU2VsZWN0aW9uU2VydmljZSwgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZikgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgIC8vIGlmIHRoZXJlIGlzIG5vIGFzc29jaWF0ZWQgZGF0YSB0aGVuIHRocm93IGFuIGVycm9yXHJcbiAgICBpZiAoIXRoaXMudXhTZWxlY3Rpb25JdGVtKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHV4U2VsZWN0aW9uSXRlbSBkaXJlY3RpdmUgbXVzdCBoYXZlIGRhdGEgYXNzb2NpYXRlZCB3aXRoIGl0LicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHN1YnNjcmliZSB0byBzZWxlY3Rpb24gY2hhbmdlcyBvbiB0aGlzIGl0ZW1cclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKHRoaXMuX3NlbGVjdGlvblNlcnZpY2Uuc2VsZWN0ZWQkKHRoaXMudXhTZWxlY3Rpb25JdGVtKS5zdWJzY3JpYmUoc2VsZWN0ZWQgPT4ge1xyXG5cclxuICAgICAgLy8gc3RvcmUgdGhlIHNlbGVjdGVkIHN0YXRlXHJcbiAgICAgIHRoaXMuX3NlbGVjdGVkID0gc2VsZWN0ZWQ7XHJcblxyXG4gICAgICAvLyBlbWl0IHRoZSBzZWxlY3RlZCBzdGF0ZVxyXG4gICAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQoc2VsZWN0ZWQpO1xyXG4gICAgfSkpO1xyXG5cclxuICAgIC8vIHN1YnNjcmliZSB0byBjaGFuZ2VzIHRvIHRoZSBhY3RpdmUgc3RhdGVcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKHRoaXMuX3NlbGVjdGlvblNlcnZpY2UuYWN0aXZlJC5waXBlKG1hcChhY3RpdmUgPT4gYWN0aXZlID09PSB0aGlzLnV4U2VsZWN0aW9uSXRlbSkpLnN1YnNjcmliZShhY3RpdmUgPT4ge1xyXG5cclxuICAgICAgLy8gc3RvcmUgdGhlIGZvY3VzIHN0YXRlXHJcbiAgICAgIHRoaXMuYWN0aXZlID0gYWN0aXZlO1xyXG5cclxuICAgICAgLy8gaWYgaXQgaXMgYWN0aXZlIHRoZW4gZm9jdXMgdGhlIGVsZW1lbnRcclxuICAgICAgaWYgKGFjdGl2ZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICB9XHJcbiAgICB9KSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSkgY2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLmVuYWJsZWQgJiYgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5jbGlja0VuYWJsZWQpIHtcclxuICAgICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5zdHJhdGVneS5jbGljayhldmVudCwgdGhpcy51eFNlbGVjdGlvbkl0ZW0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJywgWyckZXZlbnQnXSkgbW91c2Vkb3duKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fc2VsZWN0aW9uU2VydmljZS5lbmFibGVkICYmIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UuY2xpY2tFbmFibGVkKSB7XHJcbiAgICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2Uuc3RyYXRlZ3kubW91c2Vkb3duKGV2ZW50LCB0aGlzLnV4U2VsZWN0aW9uSXRlbSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSkga2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX3NlbGVjdGlvblNlcnZpY2UuZW5hYmxlZCAmJiB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLmtleWJvYXJkRW5hYmxlZCkge1xyXG4gICAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLnN0cmF0ZWd5LmtleWRvd24oZXZlbnQsIHRoaXMudXhTZWxlY3Rpb25JdGVtKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlbGVjdCB0aGlzIGl0ZW0gdXNpbmcgdGhlIGN1cnJlbnQgc3RyYXRlZ3lcclxuICAgKi9cclxuICBzZWxlY3QoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fc2VsZWN0aW9uU2VydmljZS5lbmFibGVkKSB7XHJcbiAgICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2Uuc3RyYXRlZ3kuc2VsZWN0KHRoaXMudXhTZWxlY3Rpb25JdGVtKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlc2VsZWN0IHRoaXMgaXRlbSB1c2luZyB0aGUgY3VycmVudCBzdHJhdGVneVxyXG4gICAqL1xyXG4gIGRlc2VsZWN0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX3NlbGVjdGlvblNlcnZpY2UuZW5hYmxlZCkge1xyXG4gICAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLnN0cmF0ZWd5LmRlc2VsZWN0KHRoaXMudXhTZWxlY3Rpb25JdGVtKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19