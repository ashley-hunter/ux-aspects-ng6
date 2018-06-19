/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { SelectionStrategy } from './selection.strategy';
var RowSelectionStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(RowSelectionStrategy, _super);
    function RowSelectionStrategy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._selection = { start: null, end: null };
        return _this;
    }
    /**
     * By default on shift click the browser will highlight
     * text. This looks bad and we don't want this to occur
     */
    /**
     * By default on shift click the browser will highlight
     * text. This looks bad and we don't want this to occur
     * @param {?} event
     * @return {?}
     */
    RowSelectionStrategy.prototype.mousedown = /**
     * By default on shift click the browser will highlight
     * text. This looks bad and we don't want this to occur
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
    };
    /**
     * When a row is clicked we want to handle selection
     */
    /**
     * When a row is clicked we want to handle selection
     * @param {?} event
     * @param {?} data
     * @return {?}
     */
    RowSelectionStrategy.prototype.click = /**
     * When a row is clicked we want to handle selection
     * @param {?} event
     * @param {?} data
     * @return {?}
     */
    function (event, data) {
        // determine which modifier keys are pressed
        var ctrlKey = event.ctrlKey, shiftKey = event.shiftKey;
        // if the shift key is pressed we want to perform a multiple selection
        if (shiftKey) {
            return this.multipleSelect(data);
        }
        // if the control key is pressed we want to perform an additive toggle selection
        if (ctrlKey) {
            return this.toggle(data);
        }
        // perform a single selection where all other rows are deselected
        this.singleSelect(data);
    };
    /**
     * To support full keyboard control we need to support the following:
     * 1. Arrow keys to navigate up and down
     * 2. Spacebar to toggle selection
     * 3. Shift + Arrow keys to multiple select
     * 4. Ctrl + Arrow keys to allow retained selection and navigation
     */
    /**
     * To support full keyboard control we need to support the following:
     * 1. Arrow keys to navigate up and down
     * 2. Spacebar to toggle selection
     * 3. Shift + Arrow keys to multiple select
     * 4. Ctrl + Arrow keys to allow retained selection and navigation
     * @param {?} event
     * @param {?} data
     * @return {?}
     */
    RowSelectionStrategy.prototype.keydown = /**
     * To support full keyboard control we need to support the following:
     * 1. Arrow keys to navigate up and down
     * 2. Spacebar to toggle selection
     * 3. Shift + Arrow keys to multiple select
     * 4. Ctrl + Arrow keys to allow retained selection and navigation
     * @param {?} event
     * @param {?} data
     * @return {?}
     */
    function (event, data) {
        switch (event.keyCode) {
            case KeyCode.UpArrow:
            case KeyCode.DownArrow:
                event.preventDefault();
                this.navigate(event, data);
                break;
            case KeyCode.Spacebar:
                event.preventDefault();
                this.selectionService.strategy.toggle(data, true);
                break;
        }
    };
    /**
     * Override the standard toggle function to store or clear the
     * most recently selected item
     */
    /**
     * Override the standard toggle function to store or clear the
     * most recently selected item
     * @param {?} data
     * @param {?=} activate
     * @return {?}
     */
    RowSelectionStrategy.prototype.toggle = /**
     * Override the standard toggle function to store or clear the
     * most recently selected item
     * @param {?} data
     * @param {?=} activate
     * @return {?}
     */
    function (data, activate) {
        if (activate === void 0) { activate = false; }
        _super.prototype.toggle.call(this, data);
        // store or clear the selection
        this.selectionService.isSelected(data) ? this.setSelectionStart(data) : this.clearSelection();
        // if we want to keep the item activated then activate
        if (activate) {
            this.selectionService.activate(data);
        }
    };
    /**
     * Clear all other selected items and select only
     * the most recently selected item
     * @param {?} data
     * @return {?}
     */
    RowSelectionStrategy.prototype.singleSelect = /**
     * Clear all other selected items and select only
     * the most recently selected item
     * @param {?} data
     * @return {?}
     */
    function (data) {
        // deselect all other rows if neither modifier key is pressed
        this.deselectAll();
        // select the current row
        this.select(data);
        // store the current item as the selection start
        this.setSelectionStart(data);
    };
    /**
     * Handle multiple selection:
     * 1. If no start item selected - select it
     * 2. If a start item has been selected - select all in between
     * 3. If a start and end item have been selected clear the range and then select the new range
     * @param {?} data
     * @return {?}
     */
    RowSelectionStrategy.prototype.multipleSelect = /**
     * Handle multiple selection:
     * 1. If no start item selected - select it
     * 2. If a start item has been selected - select all in between
     * 3. If a start and end item have been selected clear the range and then select the new range
     * @param {?} data
     * @return {?}
     */
    function (data) {
        // if no selection currently exists then perform initial selection
        if (!this._selection.start) {
            // select the row
            this.select(data);
            // store the starting point
            return this.setSelectionStart(data);
        }
        // if a multiple selection already took place - clear the previous selection
        if (this._selection.start && this._selection.end) {
            this.deselect.apply(this, tslib_1.__spread(this.getSelectedItems()));
        }
        // set the new selection end point
        this.setSelectionEnd(data);
        // select all the items in the range
        this.select.apply(this, tslib_1.__spread(this.getSelectedItems()));
    };
    /**
     * Set the selection start point. If there was previously a
     * selection end point then clear it as this is a new selection
     * @param {?} data
     * @return {?}
     */
    RowSelectionStrategy.prototype.setSelectionStart = /**
     * Set the selection start point. If there was previously a
     * selection end point then clear it as this is a new selection
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this._selection.start = data;
        this._selection.end = null;
        // activate the item
        this.selectionService.activate(data);
    };
    /**
     * Set the selection end point
     * @param {?} data
     * @return {?}
     */
    RowSelectionStrategy.prototype.setSelectionEnd = /**
     * Set the selection end point
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this._selection.end = data;
        // activate the item
        this.selectionService.activate(data);
    };
    /**
     * Clear both start and end selection points
     * @param {?=} deactivate
     * @return {?}
     */
    RowSelectionStrategy.prototype.clearSelection = /**
     * Clear both start and end selection points
     * @param {?=} deactivate
     * @return {?}
     */
    function (deactivate) {
        if (deactivate === void 0) { deactivate = true; }
        // reset the selected item
        this._selection = { start: null, end: null };
        // remove the current active item
        if (deactivate) {
            this.selectionService.deactivate();
        }
    };
    /**
     * Determine all the items affected by the current selection.
     * Note that the end point may be above the start point so
     * we need to account for this.
     * @return {?}
     */
    RowSelectionStrategy.prototype.getSelectedItems = /**
     * Determine all the items affected by the current selection.
     * Note that the end point may be above the start point so
     * we need to account for this.
     * @return {?}
     */
    function () {
        // get the latest dataset
        var dataset = this.selectionService.dataset;
        // get the indexes of the start and end point
        var /** @type {?} */ startIdx = dataset.indexOf(this._selection.start);
        var /** @type {?} */ endIdx = dataset.indexOf(this._selection.end);
        // get the region of the array that is selected - note the endIdx may be before the startIdx so account for this
        return dataset.slice(Math.min(startIdx, endIdx), Math.max(startIdx, endIdx) + 1);
    };
    /**
     * Activate the sibling item when arrow keys are pressed
     * @param {?} event
     * @param {?} data
     * @return {?}
     */
    RowSelectionStrategy.prototype.navigate = /**
     * Activate the sibling item when arrow keys are pressed
     * @param {?} event
     * @param {?} data
     * @return {?}
     */
    function (event, data) {
        // determine which modifier keys are pressed
        var ctrlKey = event.ctrlKey, shiftKey = event.shiftKey;
        // if no modifier keys are pressed then deselect all and clear the selection
        if (!ctrlKey && !shiftKey) {
            this.deselectAll();
            this.clearSelection(false);
        }
        // activate the sibling - if the up arrow is pressed then navigate to the previous sibling
        var /** @type {?} */ sibling = this.selectionService.activateSibling(event.keyCode === KeyCode.UpArrow);
        // if the shift key is pressed then we also want to toggle the state if the item
        if (shiftKey && sibling) {
            // if there is no current selection start then select the current row
            if (!this._selection.start) {
                this.multipleSelect(data);
            }
            this.multipleSelect(sibling);
        }
    };
    return RowSelectionStrategy;
}(SelectionStrategy));
export { RowSelectionStrategy };
function RowSelectionStrategy_tsickle_Closure_declarations() {
    /** @type {?} */
    RowSelectionStrategy.prototype._selection;
}
/**
 * @record
 */
export function Selection() { }
function Selection_tsickle_Closure_declarations() {
    /** @type {?} */
    Selection.prototype.start;
    /** @type {?} */
    Selection.prototype.end;
}
/** @enum {number} */
var KeyCode = {
    UpArrow: 38,
    DownArrow: 40,
    Spacebar: 32,
};
KeyCode[KeyCode.UpArrow] = "UpArrow";
KeyCode[KeyCode.DownArrow] = "DownArrow";
KeyCode[KeyCode.Spacebar] = "Spacebar";

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LXNlbGVjdGlvbi5zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL3NlbGVjdGlvbi9zdHJhdGVnaWVzL3Jvdy1zZWxlY3Rpb24uc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV6RCxJQUFBO0lBQTBDLGdEQUFpQjs7OzJCQUd6QixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRTs7O0lBRTFEOzs7T0FHRzs7Ozs7OztJQUNILHdDQUFTOzs7Ozs7SUFBVCxVQUFVLEtBQWlCO1FBQ3pCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztLQUN4QjtJQUVEOztPQUVHOzs7Ozs7O0lBQ0gsb0NBQUs7Ozs7OztJQUFMLFVBQU0sS0FBaUIsRUFBRSxJQUFTOztRQUd4QixJQUFBLHVCQUFPLEVBQUUseUJBQVEsQ0FBVzs7UUFHcEMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2xDOztRQUdELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDWixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMxQjs7UUFHRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3pCO0lBRUQ7Ozs7OztPQU1HOzs7Ozs7Ozs7OztJQUNILHNDQUFPOzs7Ozs7Ozs7O0lBQVAsVUFBUSxLQUFvQixFQUFFLElBQVM7UUFFckMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFFdEIsS0FBSyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQ3JCLEtB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QTRNMUQsQ0FBQTtBQTVNRCxnQ0E0TUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZWxlY3Rpb25TdHJhdGVneSB9IGZyb20gJy4vc2VsZWN0aW9uLnN0cmF0ZWd5JztcclxuXHJcbmV4cG9ydCBjbGFzcyBSb3dTZWxlY3Rpb25TdHJhdGVneSBleHRlbmRzIFNlbGVjdGlvblN0cmF0ZWd5IHtcclxuXHJcbiAgLy8gc3RvcmUgdGhlIG1vc3QgcmVjZW50bHkgc2VsZWN0ZWQgcm93XHJcbiAgcHJpdmF0ZSBfc2VsZWN0aW9uOiBTZWxlY3Rpb24gPSB7IHN0YXJ0OiBudWxsLCBlbmQ6IG51bGwgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQnkgZGVmYXVsdCBvbiBzaGlmdCBjbGljayB0aGUgYnJvd3NlciB3aWxsIGhpZ2hsaWdodFxyXG4gICAqIHRleHQuIFRoaXMgbG9va3MgYmFkIGFuZCB3ZSBkb24ndCB3YW50IHRoaXMgdG8gb2NjdXJcclxuICAgKi9cclxuICBtb3VzZWRvd24oZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBXaGVuIGEgcm93IGlzIGNsaWNrZWQgd2Ugd2FudCB0byBoYW5kbGUgc2VsZWN0aW9uXHJcbiAgICovXHJcbiAgY2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQsIGRhdGE6IGFueSk6IHZvaWQge1xyXG5cclxuICAgIC8vIGRldGVybWluZSB3aGljaCBtb2RpZmllciBrZXlzIGFyZSBwcmVzc2VkXHJcbiAgICBjb25zdCB7IGN0cmxLZXksIHNoaWZ0S2V5IH0gPSBldmVudDtcclxuXHJcbiAgICAvLyBpZiB0aGUgc2hpZnQga2V5IGlzIHByZXNzZWQgd2Ugd2FudCB0byBwZXJmb3JtIGEgbXVsdGlwbGUgc2VsZWN0aW9uXHJcbiAgICBpZiAoc2hpZnRLZXkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMubXVsdGlwbGVTZWxlY3QoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaWYgdGhlIGNvbnRyb2wga2V5IGlzIHByZXNzZWQgd2Ugd2FudCB0byBwZXJmb3JtIGFuIGFkZGl0aXZlIHRvZ2dsZSBzZWxlY3Rpb25cclxuICAgIGlmIChjdHJsS2V5KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnRvZ2dsZShkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBwZXJmb3JtIGEgc2luZ2xlIHNlbGVjdGlvbiB3aGVyZSBhbGwgb3RoZXIgcm93cyBhcmUgZGVzZWxlY3RlZFxyXG4gICAgdGhpcy5zaW5nbGVTZWxlY3QoZGF0YSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUbyBzdXBwb3J0IGZ1bGwga2V5Ym9hcmQgY29udHJvbCB3ZSBuZWVkIHRvIHN1cHBvcnQgdGhlIGZvbGxvd2luZzpcclxuICAgKiAxLiBBcnJvdyBrZXlzIHRvIG5hdmlnYXRlIHVwIGFuZCBkb3duXHJcbiAgICogMi4gU3BhY2ViYXIgdG8gdG9nZ2xlIHNlbGVjdGlvblxyXG4gICAqIDMuIFNoaWZ0ICsgQXJyb3cga2V5cyB0byBtdWx0aXBsZSBzZWxlY3RcclxuICAgKiA0LiBDdHJsICsgQXJyb3cga2V5cyB0byBhbGxvdyByZXRhaW5lZCBzZWxlY3Rpb24gYW5kIG5hdmlnYXRpb25cclxuICAgKi9cclxuICBrZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50LCBkYXRhOiBhbnkpOiB2b2lkIHtcclxuXHJcbiAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcclxuXHJcbiAgICAgIGNhc2UgS2V5Q29kZS5VcEFycm93OlxyXG4gICAgICBjYXNlIEtleUNvZGUuRG93bkFycm93OlxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5uYXZpZ2F0ZShldmVudCwgZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgXHJcbiAgICAgIGNhc2UgS2V5Q29kZS5TcGFjZWJhcjpcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uU2VydmljZS5zdHJhdGVneS50b2dnbGUoZGF0YSwgdHJ1ZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT3ZlcnJpZGUgdGhlIHN0YW5kYXJkIHRvZ2dsZSBmdW5jdGlvbiB0byBzdG9yZSBvciBjbGVhciB0aGVcclxuICAgKiBtb3N0IHJlY2VudGx5IHNlbGVjdGVkIGl0ZW1cclxuICAgKi9cclxuICB0b2dnbGUoZGF0YTogYW55LCBhY3RpdmF0ZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICBzdXBlci50b2dnbGUoZGF0YSk7XHJcblxyXG4gICAgLy8gc3RvcmUgb3IgY2xlYXIgdGhlIHNlbGVjdGlvblxyXG4gICAgdGhpcy5zZWxlY3Rpb25TZXJ2aWNlLmlzU2VsZWN0ZWQoZGF0YSkgPyB0aGlzLnNldFNlbGVjdGlvblN0YXJ0KGRhdGEpIDogdGhpcy5jbGVhclNlbGVjdGlvbigpO1xyXG5cclxuICAgIC8vIGlmIHdlIHdhbnQgdG8ga2VlcCB0aGUgaXRlbSBhY3RpdmF0ZWQgdGhlbiBhY3RpdmF0ZVxyXG4gICAgaWYgKGFjdGl2YXRlKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0aW9uU2VydmljZS5hY3RpdmF0ZShkYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENsZWFyIGFsbCBvdGhlciBzZWxlY3RlZCBpdGVtcyBhbmQgc2VsZWN0IG9ubHlcclxuICAgKiB0aGUgbW9zdCByZWNlbnRseSBzZWxlY3RlZCBpdGVtXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzaW5nbGVTZWxlY3QoZGF0YTogYW55KTogdm9pZCB7XHJcblxyXG4gICAgLy8gZGVzZWxlY3QgYWxsIG90aGVyIHJvd3MgaWYgbmVpdGhlciBtb2RpZmllciBrZXkgaXMgcHJlc3NlZFxyXG4gICAgdGhpcy5kZXNlbGVjdEFsbCgpO1xyXG5cclxuICAgIC8vIHNlbGVjdCB0aGUgY3VycmVudCByb3dcclxuICAgIHRoaXMuc2VsZWN0KGRhdGEpO1xyXG5cclxuICAgIC8vIHN0b3JlIHRoZSBjdXJyZW50IGl0ZW0gYXMgdGhlIHNlbGVjdGlvbiBzdGFydFxyXG4gICAgdGhpcy5zZXRTZWxlY3Rpb25TdGFydChkYXRhKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEhhbmRsZSBtdWx0aXBsZSBzZWxlY3Rpb246XHJcbiAgICogMS4gSWYgbm8gc3RhcnQgaXRlbSBzZWxlY3RlZCAtIHNlbGVjdCBpdFxyXG4gICAqIDIuIElmIGEgc3RhcnQgaXRlbSBoYXMgYmVlbiBzZWxlY3RlZCAtIHNlbGVjdCBhbGwgaW4gYmV0d2VlblxyXG4gICAqIDMuIElmIGEgc3RhcnQgYW5kIGVuZCBpdGVtIGhhdmUgYmVlbiBzZWxlY3RlZCBjbGVhciB0aGUgcmFuZ2UgYW5kIHRoZW4gc2VsZWN0IHRoZSBuZXcgcmFuZ2VcclxuICAgKi9cclxuICBwcml2YXRlIG11bHRpcGxlU2VsZWN0KGRhdGE6IGFueSk6IHZvaWQge1xyXG5cclxuICAgIC8vIGlmIG5vIHNlbGVjdGlvbiBjdXJyZW50bHkgZXhpc3RzIHRoZW4gcGVyZm9ybSBpbml0aWFsIHNlbGVjdGlvblxyXG4gICAgaWYgKCF0aGlzLl9zZWxlY3Rpb24uc3RhcnQpIHtcclxuXHJcbiAgICAgIC8vIHNlbGVjdCB0aGUgcm93XHJcbiAgICAgIHRoaXMuc2VsZWN0KGRhdGEpO1xyXG5cclxuICAgICAgLy8gc3RvcmUgdGhlIHN0YXJ0aW5nIHBvaW50XHJcbiAgICAgIHJldHVybiB0aGlzLnNldFNlbGVjdGlvblN0YXJ0KGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGlmIGEgbXVsdGlwbGUgc2VsZWN0aW9uIGFscmVhZHkgdG9vayBwbGFjZSAtIGNsZWFyIHRoZSBwcmV2aW91cyBzZWxlY3Rpb25cclxuICAgIGlmICh0aGlzLl9zZWxlY3Rpb24uc3RhcnQgJiYgdGhpcy5fc2VsZWN0aW9uLmVuZCkge1xyXG4gICAgICB0aGlzLmRlc2VsZWN0KC4uLnRoaXMuZ2V0U2VsZWN0ZWRJdGVtcygpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzZXQgdGhlIG5ldyBzZWxlY3Rpb24gZW5kIHBvaW50XHJcbiAgICB0aGlzLnNldFNlbGVjdGlvbkVuZChkYXRhKTtcclxuXHJcbiAgICAvLyBzZWxlY3QgYWxsIHRoZSBpdGVtcyBpbiB0aGUgcmFuZ2VcclxuICAgIHRoaXMuc2VsZWN0KC4uLnRoaXMuZ2V0U2VsZWN0ZWRJdGVtcygpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCB0aGUgc2VsZWN0aW9uIHN0YXJ0IHBvaW50LiBJZiB0aGVyZSB3YXMgcHJldmlvdXNseSBhXHJcbiAgICogc2VsZWN0aW9uIGVuZCBwb2ludCB0aGVuIGNsZWFyIGl0IGFzIHRoaXMgaXMgYSBuZXcgc2VsZWN0aW9uXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzZXRTZWxlY3Rpb25TdGFydChkYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMuX3NlbGVjdGlvbi5zdGFydCA9IGRhdGE7XHJcbiAgICB0aGlzLl9zZWxlY3Rpb24uZW5kID0gbnVsbDtcclxuXHJcbiAgICAvLyBhY3RpdmF0ZSB0aGUgaXRlbVxyXG4gICAgdGhpcy5zZWxlY3Rpb25TZXJ2aWNlLmFjdGl2YXRlKGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IHRoZSBzZWxlY3Rpb24gZW5kIHBvaW50XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzZXRTZWxlY3Rpb25FbmQoZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLl9zZWxlY3Rpb24uZW5kID0gZGF0YTtcclxuXHJcbiAgICAvLyBhY3RpdmF0ZSB0aGUgaXRlbVxyXG4gICAgdGhpcy5zZWxlY3Rpb25TZXJ2aWNlLmFjdGl2YXRlKGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2xlYXIgYm90aCBzdGFydCBhbmQgZW5kIHNlbGVjdGlvbiBwb2ludHNcclxuICAgKi9cclxuICBwcml2YXRlIGNsZWFyU2VsZWN0aW9uKGRlYWN0aXZhdGU6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XHJcblxyXG4gICAgLy8gcmVzZXQgdGhlIHNlbGVjdGVkIGl0ZW1cclxuICAgIHRoaXMuX3NlbGVjdGlvbiA9IHsgc3RhcnQ6IG51bGwsIGVuZDogbnVsbCB9O1xyXG5cclxuICAgIC8vIHJlbW92ZSB0aGUgY3VycmVudCBhY3RpdmUgaXRlbVxyXG4gICAgaWYgKGRlYWN0aXZhdGUpIHtcclxuICAgICAgdGhpcy5zZWxlY3Rpb25TZXJ2aWNlLmRlYWN0aXZhdGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERldGVybWluZSBhbGwgdGhlIGl0ZW1zIGFmZmVjdGVkIGJ5IHRoZSBjdXJyZW50IHNlbGVjdGlvbi5cclxuICAgKiBOb3RlIHRoYXQgdGhlIGVuZCBwb2ludCBtYXkgYmUgYWJvdmUgdGhlIHN0YXJ0IHBvaW50IHNvXHJcbiAgICogd2UgbmVlZCB0byBhY2NvdW50IGZvciB0aGlzLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgZ2V0U2VsZWN0ZWRJdGVtcygpOiBhbnlbXSB7XHJcblxyXG4gICAgLy8gZ2V0IHRoZSBsYXRlc3QgZGF0YXNldFxyXG4gICAgY29uc3QgeyBkYXRhc2V0IH0gPSB0aGlzLnNlbGVjdGlvblNlcnZpY2U7XHJcblxyXG4gICAgLy8gZ2V0IHRoZSBpbmRleGVzIG9mIHRoZSBzdGFydCBhbmQgZW5kIHBvaW50XHJcbiAgICBjb25zdCBzdGFydElkeCA9IGRhdGFzZXQuaW5kZXhPZih0aGlzLl9zZWxlY3Rpb24uc3RhcnQpO1xyXG4gICAgY29uc3QgZW5kSWR4ID0gZGF0YXNldC5pbmRleE9mKHRoaXMuX3NlbGVjdGlvbi5lbmQpO1xyXG5cclxuICAgIC8vIGdldCB0aGUgcmVnaW9uIG9mIHRoZSBhcnJheSB0aGF0IGlzIHNlbGVjdGVkIC0gbm90ZSB0aGUgZW5kSWR4IG1heSBiZSBiZWZvcmUgdGhlIHN0YXJ0SWR4IHNvIGFjY291bnQgZm9yIHRoaXNcclxuICAgIHJldHVybiBkYXRhc2V0LnNsaWNlKE1hdGgubWluKHN0YXJ0SWR4LCBlbmRJZHgpLCBNYXRoLm1heChzdGFydElkeCwgZW5kSWR4KSArIDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWN0aXZhdGUgdGhlIHNpYmxpbmcgaXRlbSB3aGVuIGFycm93IGtleXMgYXJlIHByZXNzZWRcclxuICAgKi9cclxuICBwcml2YXRlIG5hdmlnYXRlKGV2ZW50OiBLZXlib2FyZEV2ZW50LCBkYXRhOiBhbnkpOiB2b2lkIHtcclxuXHJcbiAgICAvLyBkZXRlcm1pbmUgd2hpY2ggbW9kaWZpZXIga2V5cyBhcmUgcHJlc3NlZFxyXG4gICAgY29uc3QgeyBjdHJsS2V5LCBzaGlmdEtleSB9ID0gZXZlbnQ7XHJcblxyXG4gICAgLy8gaWYgbm8gbW9kaWZpZXIga2V5cyBhcmUgcHJlc3NlZCB0aGVuIGRlc2VsZWN0IGFsbCBhbmQgY2xlYXIgdGhlIHNlbGVjdGlvblxyXG4gICAgaWYgKCFjdHJsS2V5ICYmICFzaGlmdEtleSkge1xyXG4gICAgICB0aGlzLmRlc2VsZWN0QWxsKCk7XHJcbiAgICAgIHRoaXMuY2xlYXJTZWxlY3Rpb24oZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFjdGl2YXRlIHRoZSBzaWJsaW5nIC0gaWYgdGhlIHVwIGFycm93IGlzIHByZXNzZWQgdGhlbiBuYXZpZ2F0ZSB0byB0aGUgcHJldmlvdXMgc2libGluZ1xyXG4gICAgY29uc3Qgc2libGluZyA9IHRoaXMuc2VsZWN0aW9uU2VydmljZS5hY3RpdmF0ZVNpYmxpbmcoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZS5VcEFycm93KTtcclxuXHJcbiAgICAvLyBpZiB0aGUgc2hpZnQga2V5IGlzIHByZXNzZWQgdGhlbiB3ZSBhbHNvIHdhbnQgdG8gdG9nZ2xlIHRoZSBzdGF0ZSBpZiB0aGUgaXRlbVxyXG4gICAgaWYgKHNoaWZ0S2V5ICYmIHNpYmxpbmcpIHtcclxuXHJcbiAgICAgIC8vIGlmIHRoZXJlIGlzIG5vIGN1cnJlbnQgc2VsZWN0aW9uIHN0YXJ0IHRoZW4gc2VsZWN0IHRoZSBjdXJyZW50IHJvd1xyXG4gICAgICBpZiAoIXRoaXMuX3NlbGVjdGlvbi5zdGFydCkge1xyXG4gICAgICAgIHRoaXMubXVsdGlwbGVTZWxlY3QoZGF0YSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMubXVsdGlwbGVTZWxlY3Qoc2libGluZyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNlbGVjdGlvbiB7XHJcbiAgc3RhcnQ6IGFueTtcclxuICBlbmQ6IGFueTtcclxufVxyXG5cclxuZW51bSBLZXlDb2RlIHtcclxuICBVcEFycm93ID0gMzgsXHJcbiAgRG93bkFycm93ID0gNDAsXHJcbiAgU3BhY2ViYXIgPSAzMlxyXG59XHJcbiJdfQ==