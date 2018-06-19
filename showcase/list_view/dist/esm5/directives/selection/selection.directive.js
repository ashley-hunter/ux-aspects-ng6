/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ContentChildren, Directive, EventEmitter, HostBinding, HostListener, Input, Output, QueryList } from '@angular/core';
import { Subscription } from 'rxjs';
import { SelectionItemDirective } from './selection-item.directive';
import { SelectionService } from './selection.service';
var SelectionDirective = /** @class */ (function () {
    function SelectionDirective(_selectionService) {
        var _this = this;
        this._selectionService = _selectionService;
        this.tabindex = 0;
        this.uxSelectionChange = new EventEmitter();
        this._subscriptions = new Subscription();
        this._subscriptions.add(_selectionService.selection$.subscribe(function (items) { return _this.uxSelectionChange.emit(items); }));
    }
    Object.defineProperty(SelectionDirective.prototype, "uxSelection", {
        set: /**
         * @param {?} items
         * @return {?}
         */
        function (items) {
            (_a = this._selectionService).select.apply(_a, tslib_1.__spread(items));
            var _a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectionDirective.prototype, "disabled", {
        set: /**
         * @param {?} disabled
         * @return {?}
         */
        function (disabled) {
            this._selectionService.setDisabled(disabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectionDirective.prototype, "mode", {
        set: /**
         * @param {?} mode
         * @return {?}
         */
        function (mode) {
            this._selectionService.setMode(mode);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectionDirective.prototype, "clickSelection", {
        set: /**
         * @param {?} enabled
         * @return {?}
         */
        function (enabled) {
            this._selectionService.clickEnabled = enabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectionDirective.prototype, "keyboardSelection", {
        set: /**
         * @param {?} enabled
         * @return {?}
         */
        function (enabled) {
            this._selectionService.keyboardEnabled = enabled;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SelectionDirective.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // provide the initial list of selection items
        this.update();
        // if the list changes then inform the service
        this._subscriptions.add(this.items.changes.subscribe(function () { return _this.update(); }));
    };
    /**
     * @return {?}
     */
    SelectionDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscriptions.unsubscribe();
    };
    /**
     * If the directive element receives focus then activate the first item
     * @return {?}
     */
    SelectionDirective.prototype.focus = /**
     * If the directive element receives focus then activate the first item
     * @return {?}
     */
    function () {
        if (this._selectionService.enabled && this._selectionService.dataset.length > 0) {
            this._selectionService.activate(this._selectionService.dataset[0]);
        }
    };
    /**
     * Update the dataset to reflect the latest selection items
     */
    /**
     * Update the dataset to reflect the latest selection items
     * @return {?}
     */
    SelectionDirective.prototype.update = /**
     * Update the dataset to reflect the latest selection items
     * @return {?}
     */
    function () {
        this._selectionService.dataset = this.items.map(function (item) { return item.uxSelectionItem; });
    };
    /**
     * Select all the items in the list
     */
    /**
     * Select all the items in the list
     * @return {?}
     */
    SelectionDirective.prototype.selectAll = /**
     * Select all the items in the list
     * @return {?}
     */
    function () {
        if (this._selectionService.enabled) {
            this._selectionService.strategy.selectAll();
        }
    };
    /**
     * Deselect all currently selected items
     */
    /**
     * Deselect all currently selected items
     * @return {?}
     */
    SelectionDirective.prototype.deselectAll = /**
     * Deselect all currently selected items
     * @return {?}
     */
    function () {
        if (this._selectionService.enabled) {
            this._selectionService.strategy.deselectAll();
        }
    };
    SelectionDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[uxSelection]',
                    exportAs: 'ux-selection',
                    providers: [SelectionService]
                },] },
    ];
    /** @nocollapse */
    SelectionDirective.ctorParameters = function () { return [
        { type: SelectionService, },
    ]; };
    SelectionDirective.propDecorators = {
        "uxSelection": [{ type: Input },],
        "disabled": [{ type: Input },],
        "mode": [{ type: Input },],
        "clickSelection": [{ type: Input },],
        "keyboardSelection": [{ type: Input },],
        "tabindex": [{ type: Input }, { type: HostBinding, args: ['tabindex',] },],
        "uxSelectionChange": [{ type: Output },],
        "items": [{ type: ContentChildren, args: [SelectionItemDirective,] },],
        "focus": [{ type: HostListener, args: ['focus',] },],
    };
    return SelectionDirective;
}());
export { SelectionDirective };
function SelectionDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SelectionDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SelectionDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    SelectionDirective.propDecorators;
    /** @type {?} */
    SelectionDirective.prototype.tabindex;
    /** @type {?} */
    SelectionDirective.prototype.uxSelectionChange;
    /** @type {?} */
    SelectionDirective.prototype.items;
    /** @type {?} */
    SelectionDirective.prototype._subscriptions;
    /** @type {?} */
    SelectionDirective.prototype._selectionService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL3NlbGVjdGlvbi9zZWxlY3Rpb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFvQixlQUFlLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNKLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFpQixnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztJQXNDcEUsNEJBQW9CLGlCQUFtQztRQUF2RCxpQkFFQztRQUZtQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO3dCQVJGLENBQUM7aUNBRXhCLElBQUksWUFBWSxFQUFTOzhCQUk5QixJQUFJLFlBQVksRUFBRTtRQUd6QyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBbEMsQ0FBa0MsQ0FBQyxDQUFDLENBQUM7S0FDOUc7MEJBOUJZLDJDQUFXOzs7OztrQkFBQyxLQUFZO1lBQ25DLENBQUEsS0FBQSxJQUFJLENBQUMsaUJBQWlCLENBQUEsQ0FBQyxNQUFNLDRCQUFJLEtBQUssR0FBRTs7Ozs7OzBCQUc3Qix3Q0FBUTs7Ozs7a0JBQUMsUUFBaUI7WUFDckMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Ozs7MEJBR2xDLG9DQUFJOzs7OztrQkFBQyxJQUFtQjtZQUNuQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDOzs7OzswQkFHMUIsOENBQWM7Ozs7O2tCQUFDLE9BQWdCO1lBQzFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDOzs7OzswQkFHbkMsaURBQWlCOzs7OztrQkFBQyxPQUFnQjtZQUM3QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQzs7Ozs7Ozs7SUFlbkQsK0NBQWtCOzs7SUFBbEI7UUFBQSxpQkFNQzs7UUFKQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7O1FBR2QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxFQUFFLEVBQWIsQ0FBYSxDQUFDLENBQUMsQ0FBQztLQUM1RTs7OztJQUVELHdDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDbkM7Ozs7O0lBS3NCLGtDQUFLOzs7OztRQUMxQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEYsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDcEU7O0lBR0g7O09BRUc7Ozs7O0lBQ0gsbUNBQU07Ozs7SUFBTjtRQUNFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsZUFBZSxFQUFwQixDQUFvQixDQUFDLENBQUM7S0FDL0U7SUFFRDs7T0FFRzs7Ozs7SUFDSCxzQ0FBUzs7OztJQUFUO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUM3QztLQUNGO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsd0NBQVc7Ozs7SUFBWDtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDL0M7S0FDRjs7Z0JBbkZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFNBQVMsRUFBRSxDQUFFLGdCQUFnQixDQUFFO2lCQUNoQzs7OztnQkFQdUIsZ0JBQWdCOzs7Z0NBVXJDLEtBQUs7NkJBSUwsS0FBSzt5QkFJTCxLQUFLO21DQUlMLEtBQUs7c0NBSUwsS0FBSzs2QkFJTCxLQUFLLFlBQUksV0FBVyxTQUFDLFVBQVU7c0NBRS9CLE1BQU07MEJBRU4sZUFBZSxTQUFDLHNCQUFzQjswQkF1QnRDLFlBQVksU0FBQyxPQUFPOzs2QkE1RHZCOztTQVdhLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENvbnRlbnRDaGlsZHJlbiwgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkRlc3Ryb3ksIE91dHB1dCwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBTZWxlY3Rpb25JdGVtRGlyZWN0aXZlIH0gZnJvbSAnLi9zZWxlY3Rpb24taXRlbS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBTZWxlY3Rpb25Nb2RlLCBTZWxlY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi9zZWxlY3Rpb24uc2VydmljZSc7XHJcblxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbdXhTZWxlY3Rpb25dJyxcclxuICBleHBvcnRBczogJ3V4LXNlbGVjdGlvbicsXHJcbiAgcHJvdmlkZXJzOiBbIFNlbGVjdGlvblNlcnZpY2UgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VsZWN0aW9uRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgQElucHV0KCkgc2V0IHV4U2VsZWN0aW9uKGl0ZW1zOiBhbnlbXSkge1xyXG4gICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5zZWxlY3QoLi4uaXRlbXMpO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgc2V0IGRpc2FibGVkKGRpc2FibGVkOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLnNldERpc2FibGVkKGRpc2FibGVkKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIHNldCBtb2RlKG1vZGU6IFNlbGVjdGlvbk1vZGUpIHtcclxuICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2Uuc2V0TW9kZShtb2RlKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIHNldCBjbGlja1NlbGVjdGlvbihlbmFibGVkOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLmNsaWNrRW5hYmxlZCA9IGVuYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBzZXQga2V5Ym9hcmRTZWxlY3Rpb24oZW5hYmxlZDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5rZXlib2FyZEVuYWJsZWQgPSBlbmFibGVkO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCd0YWJpbmRleCcpIHRhYmluZGV4OiBudW1iZXIgPSAwO1xyXG5cclxuICBAT3V0cHV0KCkgdXhTZWxlY3Rpb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueVtdPigpO1xyXG5cclxuICBAQ29udGVudENoaWxkcmVuKFNlbGVjdGlvbkl0ZW1EaXJlY3RpdmUpIGl0ZW1zOiBRdWVyeUxpc3Q8U2VsZWN0aW9uSXRlbURpcmVjdGl2ZT47XHJcblxyXG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbnMgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NlbGVjdGlvblNlcnZpY2U6IFNlbGVjdGlvblNlcnZpY2UpIHtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKF9zZWxlY3Rpb25TZXJ2aWNlLnNlbGVjdGlvbiQuc3Vic2NyaWJlKGl0ZW1zID0+IHRoaXMudXhTZWxlY3Rpb25DaGFuZ2UuZW1pdChpdGVtcykpKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIHByb3ZpZGUgdGhlIGluaXRpYWwgbGlzdCBvZiBzZWxlY3Rpb24gaXRlbXNcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcblxyXG4gICAgLy8gaWYgdGhlIGxpc3QgY2hhbmdlcyB0aGVuIGluZm9ybSB0aGUgc2VydmljZVxyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5pdGVtcy5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZSgpKSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIElmIHRoZSBkaXJlY3RpdmUgZWxlbWVudCByZWNlaXZlcyBmb2N1cyB0aGVuIGFjdGl2YXRlIHRoZSBmaXJzdCBpdGVtXHJcbiAgICovXHJcbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKSBmb2N1cygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLmVuYWJsZWQgJiYgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5kYXRhc2V0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5hY3RpdmF0ZSh0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLmRhdGFzZXRbMF0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlIHRoZSBkYXRhc2V0IHRvIHJlZmxlY3QgdGhlIGxhdGVzdCBzZWxlY3Rpb24gaXRlbXNcclxuICAgKi9cclxuICB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLmRhdGFzZXQgPSB0aGlzLml0ZW1zLm1hcChpdGVtID0+IGl0ZW0udXhTZWxlY3Rpb25JdGVtKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlbGVjdCBhbGwgdGhlIGl0ZW1zIGluIHRoZSBsaXN0XHJcbiAgICovXHJcbiAgc2VsZWN0QWxsKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX3NlbGVjdGlvblNlcnZpY2UuZW5hYmxlZCkge1xyXG4gICAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLnN0cmF0ZWd5LnNlbGVjdEFsbCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVzZWxlY3QgYWxsIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtc1xyXG4gICAqL1xyXG4gIGRlc2VsZWN0QWxsKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX3NlbGVjdGlvblNlcnZpY2UuZW5hYmxlZCkge1xyXG4gICAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLnN0cmF0ZWd5LmRlc2VsZWN0QWxsKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==