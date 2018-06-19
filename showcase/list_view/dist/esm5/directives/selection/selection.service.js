/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { RowSelectionStrategy } from './strategies/row-selection.strategy';
import { SimpleSelectionStrategy } from './strategies/simple-selection.strategy';
var SelectionService = /** @class */ (function () {
    function SelectionService() {
        this._selection = new Set();
        this._rowStrategy = new RowSelectionStrategy(this);
        this._simpleStrategy = new SimpleSelectionStrategy(this);
        this.dataset = [];
        this.enabled = true;
        this.clickEnabled = true;
        this.keyboardEnabled = true;
        this.strategy = this._simpleStrategy;
        this.active$ = new BehaviorSubject(null);
        this.selection$ = new BehaviorSubject([]);
    }
    /**
     * @return {?}
     */
    SelectionService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._rowStrategy.destroy();
        this._simpleStrategy.destroy();
    };
    /**
     * If the item is not currently selected then add it
     * to the list of selected items
     */
    /**
     * If the item is not currently selected then add it
     * to the list of selected items
     * @param {...?} selections
     * @return {?}
     */
    SelectionService.prototype.select = /**
     * If the item is not currently selected then add it
     * to the list of selected items
     * @param {...?} selections
     * @return {?}
     */
    function () {
        var _this = this;
        var selections = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            selections[_i] = arguments[_i];
        }
        // add each selection to the set
        selections.forEach(function (selection) { return _this._selection.add(selection); });
        // propagate the changes
        this.selectionHasMutated();
    };
    /**
     * Remove an item from the list of selected items
     */
    /**
     * Remove an item from the list of selected items
     * @param {...?} selections
     * @return {?}
     */
    SelectionService.prototype.deselect = /**
     * Remove an item from the list of selected items
     * @param {...?} selections
     * @return {?}
     */
    function () {
        var _this = this;
        var selections = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            selections[_i] = arguments[_i];
        }
        // remove each item from the set
        selections.forEach(function (selection) { return _this._selection.delete(selection); });
        // propagate the changes
        this.selectionHasMutated();
    };
    /**
     * Toggle the selected state of any specified items
     */
    /**
     * Toggle the selected state of any specified items
     * @param {...?} selections
     * @return {?}
     */
    SelectionService.prototype.toggle = /**
     * Toggle the selected state of any specified items
     * @param {...?} selections
     * @return {?}
     */
    function () {
        var _this = this;
        var selections = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            selections[_i] = arguments[_i];
        }
        selections.forEach(function (selection) { return _this.isSelected(selection) ? _this.deselect(selection) : _this.select(selection); });
    };
    /**
     * Determine whether or not a specific item is currently selected
     */
    /**
     * Determine whether or not a specific item is currently selected
     * @param {?} data
     * @return {?}
     */
    SelectionService.prototype.isSelected = /**
     * Determine whether or not a specific item is currently selected
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return this._selection.has(data);
    };
    /**
     * Return an observable specifically for notifying the subscriber
     * only when the selection state of a specific object has changed
     */
    /**
     * Return an observable specifically for notifying the subscriber
     * only when the selection state of a specific object has changed
     * @param {?} data
     * @return {?}
     */
    SelectionService.prototype.selected$ = /**
     * Return an observable specifically for notifying the subscriber
     * only when the selection state of a specific object has changed
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        return this.selection$.pipe(map(function () { return _this.isSelected(data); }), distinctUntilChanged());
    };
    /**
     * Define how selections should be performed.
     * This allows us to use an strategy pattern to handle the various keyboard
     * and mouse interactions while keeping each mode separated and
     * easily extensible if we want to add more modes in future!
     */
    /**
     * Define how selections should be performed.
     * This allows us to use an strategy pattern to handle the various keyboard
     * and mouse interactions while keeping each mode separated and
     * easily extensible if we want to add more modes in future!
     * @param {?} mode
     * @return {?}
     */
    SelectionService.prototype.setMode = /**
     * Define how selections should be performed.
     * This allows us to use an strategy pattern to handle the various keyboard
     * and mouse interactions while keeping each mode separated and
     * easily extensible if we want to add more modes in future!
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        switch (mode.toLowerCase().trim()) {
            case 'simple':
                this.strategy = this._simpleStrategy;
                break;
            case 'row':
                this.strategy = this._rowStrategy;
                break;
            default:
                throw new Error("The selection mode '" + mode + "' does not exist. Valid modes are 'simple' or 'row'.");
        }
    };
    /**
     * Set the current active item
     */
    /**
     * Set the current active item
     * @param {?} data
     * @return {?}
     */
    SelectionService.prototype.activate = /**
     * Set the current active item
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.active$.next(data);
    };
    /**
     * Deactive all items
     */
    /**
     * Deactive all items
     * @return {?}
     */
    SelectionService.prototype.deactivate = /**
     * Deactive all items
     * @return {?}
     */
    function () {
        this.active$.next(null);
    };
    /**
     * Activate the sibling of the current active item.
     * If previous is set to true the previous sibling will be activated
     * rather than the next sibling. This function will also return the
     * data of the newly activated sibling
     */
    /**
     * Activate the sibling of the current active item.
     * If previous is set to true the previous sibling will be activated
     * rather than the next sibling. This function will also return the
     * data of the newly activated sibling
     * @param {?=} previous
     * @return {?}
     */
    SelectionService.prototype.activateSibling = /**
     * Activate the sibling of the current active item.
     * If previous is set to true the previous sibling will be activated
     * rather than the next sibling. This function will also return the
     * data of the newly activated sibling
     * @param {?=} previous
     * @return {?}
     */
    function (previous) {
        if (previous === void 0) { previous = false; }
        // get the currently active item
        var /** @type {?} */ current = this.active$.getValue();
        // check if there is a current active item
        if (!current) {
            return;
        }
        // get the index of the current item
        var /** @type {?} */ idx = this.dataset.indexOf(current);
        var /** @type {?} */ target = this.dataset[previous ? idx - 1 : idx + 1];
        // check if the target exists
        if (target) {
            this.activate(target);
        }
        return target;
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    SelectionService.prototype.setDisabled = /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        // store the current disabled state
        this.enabled = !disabled;
        // clear any stateful data
        this.active$.next(null);
        this._selection.clear();
        // emit the selection change information
        this.selectionHasMutated();
    };
    /**
     * @return {?}
     */
    SelectionService.prototype.selectionHasMutated = /**
     * @return {?}
     */
    function () {
        this.selection$.next(Array.from(this._selection));
    };
    SelectionService.decorators = [
        { type: Injectable },
    ];
    return SelectionService;
}());
export { SelectionService };
function SelectionService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SelectionService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SelectionService.ctorParameters;
    /** @type {?} */
    SelectionService.prototype._selection;
    /** @type {?} */
    SelectionService.prototype._rowStrategy;
    /** @type {?} */
    SelectionService.prototype._simpleStrategy;
    /** @type {?} */
    SelectionService.prototype.dataset;
    /** @type {?} */
    SelectionService.prototype.enabled;
    /** @type {?} */
    SelectionService.prototype.clickEnabled;
    /** @type {?} */
    SelectionService.prototype.keyboardEnabled;
    /** @type {?} */
    SelectionService.prototype.strategy;
    /** @type {?} */
    SelectionService.prototype.active$;
    /** @type {?} */
    SelectionService.prototype.selection$;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlcy9zZWxlY3Rpb24vc2VsZWN0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRTNFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDOzs7MEJBSzFELElBQUksR0FBRyxFQUFFOzRCQUNQLElBQUksb0JBQW9CLENBQUMsSUFBSSxDQUFDOytCQUMzQixJQUFJLHVCQUF1QixDQUFDLElBQUksQ0FBQzt1QkFFMUMsRUFBRTt1QkFDQSxJQUFJOzRCQUNDLElBQUk7K0JBQ0QsSUFBSTt3QkFDRCxJQUFJLENBQUMsZUFBZTt1QkFFeEMsSUFBSSxlQUFlLENBQU0sSUFBSSxDQUFDOzBCQUMzQixJQUFJLGVBQWUsQ0FBUSxFQUFFLENBQUM7Ozs7O0lBRTNDLHNDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUNoQztJQUVEOzs7T0FHRzs7Ozs7OztJQUNILGlDQUFNOzs7Ozs7SUFBTjtRQUFBLGlCQU9DO1FBUE0sb0JBQW9CO2FBQXBCLFVBQW9CLEVBQXBCLHFCQUFvQixFQUFwQixJQUFvQjtZQUFwQiwrQkFBb0I7OztRQUd6QixVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUEsU0FBUyxJQUFJLE9BQUEsS0FBSSxDQUFDLFVB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QkFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQzs7UUFHMUQsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNYLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDdkI7UUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2Y7Ozs7O0lBRUQsc0NBQVc7Ozs7SUFBWCxVQUFZLFFBQWlCOztRQUUzQixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsUUFBUSxDQUFDOztRQUd6QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDOztRQUd4QixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztLQUM1Qjs7OztJQUVPLDhDQUFtQjs7OztRQUN6QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDOzs7Z0JBakpyRCxVQUFVOzsyQkFQWDs7U0FRYSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0ICwgIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgUm93U2VsZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICcuL3N0cmF0ZWdpZXMvcm93LXNlbGVjdGlvbi5zdHJhdGVneSc7XHJcbmltcG9ydCB7IFNlbGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnLi9zdHJhdGVnaWVzL3NlbGVjdGlvbi5zdHJhdGVneSc7XHJcbmltcG9ydCB7IFNpbXBsZVNlbGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnLi9zdHJhdGVnaWVzL3NpbXBsZS1zZWxlY3Rpb24uc3RyYXRlZ3knO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2VsZWN0aW9uU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcblxyXG4gIHByaXZhdGUgX3NlbGVjdGlvbiA9IG5ldyBTZXQoKTtcclxuICBwcml2YXRlIF9yb3dTdHJhdGVneSA9IG5ldyBSb3dTZWxlY3Rpb25TdHJhdGVneSh0aGlzKTtcclxuICBwcml2YXRlIF9zaW1wbGVTdHJhdGVneSA9IG5ldyBTaW1wbGVTZWxlY3Rpb25TdHJhdGVneSh0aGlzKTtcclxuXHJcbiAgZGF0YXNldDogYW55W10gPSBbXTtcclxuICBlbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcclxuICBjbGlja0VuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIGtleWJvYXJkRW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XHJcbiAgc3RyYXRlZ3k6IFNlbGVjdGlvblN0cmF0ZWd5ID0gdGhpcy5fc2ltcGxlU3RyYXRlZ3k7XHJcblxyXG4gIGFjdGl2ZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4obnVsbCk7XHJcbiAgc2VsZWN0aW9uJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55W10+KFtdKTtcclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLl9yb3dTdHJhdGVneS5kZXN0cm95KCk7XHJcbiAgICB0aGlzLl9zaW1wbGVTdHJhdGVneS5kZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJZiB0aGUgaXRlbSBpcyBub3QgY3VycmVudGx5IHNlbGVjdGVkIHRoZW4gYWRkIGl0XHJcbiAgICogdG8gdGhlIGxpc3Qgb2Ygc2VsZWN0ZWQgaXRlbXNcclxuICAgKi9cclxuICBzZWxlY3QoLi4uc2VsZWN0aW9uczogYW55W10pOiB2b2lkIHtcclxuXHJcbiAgICAvLyBhZGQgZWFjaCBzZWxlY3Rpb24gdG8gdGhlIHNldFxyXG4gICAgc2VsZWN0aW9ucy5mb3JFYWNoKHNlbGVjdGlvbiA9PiB0aGlzLl9zZWxlY3Rpb24uYWRkKHNlbGVjdGlvbikpO1xyXG5cclxuICAgIC8vIHByb3BhZ2F0ZSB0aGUgY2hhbmdlc1xyXG4gICAgdGhpcy5zZWxlY3Rpb25IYXNNdXRhdGVkKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmUgYW4gaXRlbSBmcm9tIHRoZSBsaXN0IG9mIHNlbGVjdGVkIGl0ZW1zXHJcbiAgICovXHJcbiAgZGVzZWxlY3QoLi4uc2VsZWN0aW9uczogYW55W10pOiB2b2lkIHtcclxuICAgIC8vIHJlbW92ZSBlYWNoIGl0ZW0gZnJvbSB0aGUgc2V0XHJcbiAgICBzZWxlY3Rpb25zLmZvckVhY2goc2VsZWN0aW9uID0+IHRoaXMuX3NlbGVjdGlvbi5kZWxldGUoc2VsZWN0aW9uKSk7XHJcblxyXG4gICAgLy8gcHJvcGFnYXRlIHRoZSBjaGFuZ2VzXHJcbiAgICB0aGlzLnNlbGVjdGlvbkhhc011dGF0ZWQoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRvZ2dsZSB0aGUgc2VsZWN0ZWQgc3RhdGUgb2YgYW55IHNwZWNpZmllZCBpdGVtc1xyXG4gICAqL1xyXG4gIHRvZ2dsZSguLi5zZWxlY3Rpb25zOiBhbnlbXSk6IHZvaWQge1xyXG4gICAgc2VsZWN0aW9ucy5mb3JFYWNoKHNlbGVjdGlvbiA9PiB0aGlzLmlzU2VsZWN0ZWQoc2VsZWN0aW9uKSA/IHRoaXMuZGVzZWxlY3Qoc2VsZWN0aW9uKSA6IHRoaXMuc2VsZWN0KHNlbGVjdGlvbikpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IGEgc3BlY2lmaWMgaXRlbSBpcyBjdXJyZW50bHkgc2VsZWN0ZWRcclxuICAgKi9cclxuICBpc1NlbGVjdGVkKGRhdGE6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGlvbi5oYXMoZGF0YSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm4gYW4gb2JzZXJ2YWJsZSBzcGVjaWZpY2FsbHkgZm9yIG5vdGlmeWluZyB0aGUgc3Vic2NyaWJlclxyXG4gICAqIG9ubHkgd2hlbiB0aGUgc2VsZWN0aW9uIHN0YXRlIG9mIGEgc3BlY2lmaWMgb2JqZWN0IGhhcyBjaGFuZ2VkXHJcbiAgICovXHJcbiAgc2VsZWN0ZWQkKGRhdGE6IGFueSk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uJC5waXBlKG1hcCgoKSA9PiB0aGlzLmlzU2VsZWN0ZWQoZGF0YSkpLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlZmluZSBob3cgc2VsZWN0aW9ucyBzaG91bGQgYmUgcGVyZm9ybWVkLlxyXG4gICAqIFRoaXMgYWxsb3dzIHVzIHRvIHVzZSBhbiBzdHJhdGVneSBwYXR0ZXJuIHRvIGhhbmRsZSB0aGUgdmFyaW91cyBrZXlib2FyZFxyXG4gICAqIGFuZCBtb3VzZSBpbnRlcmFjdGlvbnMgd2hpbGUga2VlcGluZyBlYWNoIG1vZGUgc2VwYXJhdGVkIGFuZFxyXG4gICAqIGVhc2lseSBleHRlbnNpYmxlIGlmIHdlIHdhbnQgdG8gYWRkIG1vcmUgbW9kZXMgaW4gZnV0dXJlIVxyXG4gICAqL1xyXG4gIHNldE1vZGUobW9kZTogU2VsZWN0aW9uTW9kZSk6IHZvaWQge1xyXG5cclxuICAgIHN3aXRjaCAobW9kZS50b0xvd2VyQ2FzZSgpLnRyaW0oKSkge1xyXG5cclxuICAgICAgY2FzZSAnc2ltcGxlJzpcclxuICAgICAgICB0aGlzLnN0cmF0ZWd5ID0gdGhpcy5fc2ltcGxlU3RyYXRlZ3k7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlICdyb3cnOlxyXG4gICAgICAgIHRoaXMuc3RyYXRlZ3kgPSB0aGlzLl9yb3dTdHJhdGVneTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgc2VsZWN0aW9uIG1vZGUgJyR7bW9kZX0nIGRvZXMgbm90IGV4aXN0LiBWYWxpZCBtb2RlcyBhcmUgJ3NpbXBsZScgb3IgJ3JvdycuYCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXQgdGhlIGN1cnJlbnQgYWN0aXZlIGl0ZW1cclxuICAgKi9cclxuICBhY3RpdmF0ZShkYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMuYWN0aXZlJC5uZXh0KGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVhY3RpdmUgYWxsIGl0ZW1zXHJcbiAgICovXHJcbiAgZGVhY3RpdmF0ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuYWN0aXZlJC5uZXh0KG51bGwpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWN0aXZhdGUgdGhlIHNpYmxpbmcgb2YgdGhlIGN1cnJlbnQgYWN0aXZlIGl0ZW0uXHJcbiAgICogSWYgcHJldmlvdXMgaXMgc2V0IHRvIHRydWUgdGhlIHByZXZpb3VzIHNpYmxpbmcgd2lsbCBiZSBhY3RpdmF0ZWRcclxuICAgKiByYXRoZXIgdGhhbiB0aGUgbmV4dCBzaWJsaW5nLiBUaGlzIGZ1bmN0aW9uIHdpbGwgYWxzbyByZXR1cm4gdGhlXHJcbiAgICogZGF0YSBvZiB0aGUgbmV3bHkgYWN0aXZhdGVkIHNpYmxpbmdcclxuICAgKi9cclxuICBhY3RpdmF0ZVNpYmxpbmcocHJldmlvdXM6IGJvb2xlYW4gPSBmYWxzZSk6IGFueSB7XHJcblxyXG4gICAgLy8gZ2V0IHRoZSBjdXJyZW50bHkgYWN0aXZlIGl0ZW1cclxuICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLmFjdGl2ZSQuZ2V0VmFsdWUoKTtcclxuXHJcbiAgICAvLyBjaGVjayBpZiB0aGVyZSBpcyBhIGN1cnJlbnQgYWN0aXZlIGl0ZW1cclxuICAgIGlmICghY3VycmVudCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2V0IHRoZSBpbmRleCBvZiB0aGUgY3VycmVudCBpdGVtXHJcbiAgICBjb25zdCBpZHggPSB0aGlzLmRhdGFzZXQuaW5kZXhPZihjdXJyZW50KTtcclxuICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuZGF0YXNldFtwcmV2aW91cyA/IGlkeCAtIDEgOiBpZHggKyAxXTtcclxuXHJcbiAgICAvLyBjaGVjayBpZiB0aGUgdGFyZ2V0IGV4aXN0c1xyXG4gICAgaWYgKHRhcmdldCkge1xyXG4gICAgICB0aGlzLmFjdGl2YXRlKHRhcmdldCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRhcmdldDtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAvLyBzdG9yZSB0aGUgY3VycmVudCBkaXNhYmxlZCBzdGF0ZVxyXG4gICAgdGhpcy5lbmFibGVkID0gIWRpc2FibGVkO1xyXG5cclxuICAgIC8vIGNsZWFyIGFueSBzdGF0ZWZ1bCBkYXRhXHJcbiAgICB0aGlzLmFjdGl2ZSQubmV4dChudWxsKTtcclxuICAgIHRoaXMuX3NlbGVjdGlvbi5jbGVhcigpO1xyXG5cclxuICAgIC8vIGVtaXQgdGhlIHNlbGVjdGlvbiBjaGFuZ2UgaW5mb3JtYXRpb25cclxuICAgIHRoaXMuc2VsZWN0aW9uSGFzTXV0YXRlZCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZWxlY3Rpb25IYXNNdXRhdGVkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWxlY3Rpb24kLm5leHQoQXJyYXkuZnJvbSh0aGlzLl9zZWxlY3Rpb24pKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFNlbGVjdGlvbk1vZGUgPSAnc2ltcGxlJyB8ICdyb3cnO1xyXG4iXX0=