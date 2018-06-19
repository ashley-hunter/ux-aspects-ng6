/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { SelectionStrategy } from './selection.strategy';
export class RowSelectionStrategy extends SelectionStrategy {
    constructor() {
        super(...arguments);
        this._selection = { start: null, end: null };
    }
    /**
     * By default on shift click the browser will highlight
     * text. This looks bad and we don't want this to occur
     * @param {?} event
     * @return {?}
     */
    mousedown(event) {
        event.preventDefault();
    }
    /**
     * When a row is clicked we want to handle selection
     * @param {?} event
     * @param {?} data
     * @return {?}
     */
    click(event, data) {
        // determine which modifier keys are pressed
        const { ctrlKey, shiftKey } = event;
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
    }
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
    keydown(event, data) {
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
    }
    /**
     * Override the standard toggle function to store or clear the
     * most recently selected item
     * @param {?} data
     * @param {?=} activate
     * @return {?}
     */
    toggle(data, activate = false) {
        super.toggle(data);
        // store or clear the selection
        this.selectionService.isSelected(data) ? this.setSelectionStart(data) : this.clearSelection();
        // if we want to keep the item activated then activate
        if (activate) {
            this.selectionService.activate(data);
        }
    }
    /**
     * Clear all other selected items and select only
     * the most recently selected item
     * @param {?} data
     * @return {?}
     */
    singleSelect(data) {
        // deselect all other rows if neither modifier key is pressed
        this.deselectAll();
        // select the current row
        this.select(data);
        // store the current item as the selection start
        this.setSelectionStart(data);
    }
    /**
     * Handle multiple selection:
     * 1. If no start item selected - select it
     * 2. If a start item has been selected - select all in between
     * 3. If a start and end item have been selected clear the range and then select the new range
     * @param {?} data
     * @return {?}
     */
    multipleSelect(data) {
        // if no selection currently exists then perform initial selection
        if (!this._selection.start) {
            // select the row
            this.select(data);
            // store the starting point
            return this.setSelectionStart(data);
        }
        // if a multiple selection already took place - clear the previous selection
        if (this._selection.start && this._selection.end) {
            this.deselect(...this.getSelectedItems());
        }
        // set the new selection end point
        this.setSelectionEnd(data);
        // select all the items in the range
        this.select(...this.getSelectedItems());
    }
    /**
     * Set the selection start point. If there was previously a
     * selection end point then clear it as this is a new selection
     * @param {?} data
     * @return {?}
     */
    setSelectionStart(data) {
        this._selection.start = data;
        this._selection.end = null;
        // activate the item
        this.selectionService.activate(data);
    }
    /**
     * Set the selection end point
     * @param {?} data
     * @return {?}
     */
    setSelectionEnd(data) {
        this._selection.end = data;
        // activate the item
        this.selectionService.activate(data);
    }
    /**
     * Clear both start and end selection points
     * @param {?=} deactivate
     * @return {?}
     */
    clearSelection(deactivate = true) {
        // reset the selected item
        this._selection = { start: null, end: null };
        // remove the current active item
        if (deactivate) {
            this.selectionService.deactivate();
        }
    }
    /**
     * Determine all the items affected by the current selection.
     * Note that the end point may be above the start point so
     * we need to account for this.
     * @return {?}
     */
    getSelectedItems() {
        // get the latest dataset
        const { dataset } = this.selectionService;
        // get the indexes of the start and end point
        const /** @type {?} */ startIdx = dataset.indexOf(this._selection.start);
        const /** @type {?} */ endIdx = dataset.indexOf(this._selection.end);
        // get the region of the array that is selected - note the endIdx may be before the startIdx so account for this
        return dataset.slice(Math.min(startIdx, endIdx), Math.max(startIdx, endIdx) + 1);
    }
    /**
     * Activate the sibling item when arrow keys are pressed
     * @param {?} event
     * @param {?} data
     * @return {?}
     */
    navigate(event, data) {
        // determine which modifier keys are pressed
        const { ctrlKey, shiftKey } = event;
        // if no modifier keys are pressed then deselect all and clear the selection
        if (!ctrlKey && !shiftKey) {
            this.deselectAll();
            this.clearSelection(false);
        }
        // activate the sibling - if the up arrow is pressed then navigate to the previous sibling
        const /** @type {?} */ sibling = this.selectionService.activateSibling(event.keyCode === KeyCode.UpArrow);
        // if the shift key is pressed then we also want to toggle the state if the item
        if (shiftKey && sibling) {
            // if there is no current selection start then select the current row
            if (!this._selection.start) {
                this.multipleSelect(data);
            }
            this.multipleSelect(sibling);
        }
    }
}
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
const KeyCode = {
    UpArrow: 38,
    DownArrow: 40,
    Spacebar: 32,
};
KeyCode[KeyCode.UpArrow] = "UpArrow";
KeyCode[KeyCode.DownArrow] = "DownArrow";
KeyCode[KeyCode.Spacebar] = "Spacebar";

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LXNlbGVjdGlvbi5zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL3NlbGVjdGlvbi9zdHJhdGVnaWVzL3Jvdy1zZWxlY3Rpb24uc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXpELE1BQU0sMkJBQTRCLFNBQVEsaUJBQWlCOzs7MEJBR3pCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFOzs7Ozs7OztJQU0xRCxTQUFTLENBQUMsS0FBaUI7UUFDekIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0tBQ3hCOzs7Ozs7O0lBS0QsS0FBSyxDQUFDLEtBQWlCLEVBQUUsSUFBUzs7UUFHaEMsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsR0FBRyxLQUFLLENBQUM7O1FBR3BDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNsQzs7UUFHRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDMUI7O1FBR0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN6Qjs7Ozs7Ozs7Ozs7SUFTRCxPQUFPLENBQUMsS0FBb0IsRUFBRSxJQUFTO1FBRXJDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBRXRCLEtBQUssT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUNyQixLQUFLLE9BQU8sQ0FBQyxTQUFTO2dCQUNwQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JB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LENBQUMsQ0FBQztRQUN4RCx1QkFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDOztRQUdwRCxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7SUFNM0UsUUFBUSxDQUFDLEtBQW9CLEVBQUUsSUFBUzs7UUFHOUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsR0FBRyxLQUFLLENBQUM7O1FBR3BDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM1Qjs7UUFHRCx1QkFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzs7UUFHekYsRUFBRSxDQUFDLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUM7O1lBR3hCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzNCO1lBRUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM5Qjs7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlbGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnLi9zZWxlY3Rpb24uc3RyYXRlZ3knO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJvd1NlbGVjdGlvblN0cmF0ZWd5IGV4dGVuZHMgU2VsZWN0aW9uU3RyYXRlZ3kge1xyXG5cclxuICAvLyBzdG9yZSB0aGUgbW9zdCByZWNlbnRseSBzZWxlY3RlZCByb3dcclxuICBwcml2YXRlIF9zZWxlY3Rpb246IFNlbGVjdGlvbiA9IHsgc3RhcnQ6IG51bGwsIGVuZDogbnVsbCB9O1xyXG5cclxuICAvKipcclxuICAgKiBCeSBkZWZhdWx0IG9uIHNoaWZ0IGNsaWNrIHRoZSBicm93c2VyIHdpbGwgaGlnaGxpZ2h0XHJcbiAgICogdGV4dC4gVGhpcyBsb29rcyBiYWQgYW5kIHdlIGRvbid0IHdhbnQgdGhpcyB0byBvY2N1clxyXG4gICAqL1xyXG4gIG1vdXNlZG93bihldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFdoZW4gYSByb3cgaXMgY2xpY2tlZCB3ZSB3YW50IHRvIGhhbmRsZSBzZWxlY3Rpb25cclxuICAgKi9cclxuICBjbGljayhldmVudDogTW91c2VFdmVudCwgZGF0YTogYW55KTogdm9pZCB7XHJcblxyXG4gICAgLy8gZGV0ZXJtaW5lIHdoaWNoIG1vZGlmaWVyIGtleXMgYXJlIHByZXNzZWRcclxuICAgIGNvbnN0IHsgY3RybEtleSwgc2hpZnRLZXkgfSA9IGV2ZW50O1xyXG5cclxuICAgIC8vIGlmIHRoZSBzaGlmdCBrZXkgaXMgcHJlc3NlZCB3ZSB3YW50IHRvIHBlcmZvcm0gYSBtdWx0aXBsZSBzZWxlY3Rpb25cclxuICAgIGlmIChzaGlmdEtleSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5tdWx0aXBsZVNlbGVjdChkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpZiB0aGUgY29udHJvbCBrZXkgaXMgcHJlc3NlZCB3ZSB3YW50IHRvIHBlcmZvcm0gYW4gYWRkaXRpdmUgdG9nZ2xlIHNlbGVjdGlvblxyXG4gICAgaWYgKGN0cmxLZXkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudG9nZ2xlKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHBlcmZvcm0gYSBzaW5nbGUgc2VsZWN0aW9uIHdoZXJlIGFsbCBvdGhlciByb3dzIGFyZSBkZXNlbGVjdGVkXHJcbiAgICB0aGlzLnNpbmdsZVNlbGVjdChkYXRhKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRvIHN1cHBvcnQgZnVsbCBrZXlib2FyZCBjb250cm9sIHdlIG5lZWQgdG8gc3VwcG9ydCB0aGUgZm9sbG93aW5nOlxyXG4gICAqIDEuIEFycm93IGtleXMgdG8gbmF2aWdhdGUgdXAgYW5kIGRvd25cclxuICAgKiAyLiBTcGFjZWJhciB0byB0b2dnbGUgc2VsZWN0aW9uXHJcbiAgICogMy4gU2hpZnQgKyBBcnJvdyBrZXlzIHRvIG11bHRpcGxlIHNlbGVjdFxyXG4gICAqIDQuIEN0cmwgKyBBcnJvdyBrZXlzIHRvIGFsbG93IHJldGFpbmVkIHNlbGVjdGlvbiBhbmQgbmF2aWdhdGlvblxyXG4gICAqL1xyXG4gIGtleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQsIGRhdGE6IGFueSk6IHZvaWQge1xyXG5cclxuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG5cclxuICAgICAgY2FzZSBLZXlDb2RlLlVwQXJyb3c6XHJcbiAgICAgIGNhc2UgS2V5Q29kZS5Eb3duQXJyb3c6XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLm5hdmlnYXRlKGV2ZW50LCBkYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgICBcclxuICAgICAgY2FzZSBLZXlDb2RlLlNwYWNlYmFyOlxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25TZXJ2aWNlLnN0cmF0ZWd5LnRvZ2dsZShkYXRhLCB0cnVlKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBPdmVycmlkZSB0aGUgc3RhbmRhcmQgdG9nZ2xlIGZ1bmN0aW9uIHRvIHN0b3JlIG9yIGNsZWFyIHRoZVxyXG4gICAqIG1vc3QgcmVjZW50bHkgc2VsZWN0ZWQgaXRlbVxyXG4gICAqL1xyXG4gIHRvZ2dsZShkYXRhOiBhbnksIGFjdGl2YXRlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgIHN1cGVyLnRvZ2dsZShkYXRhKTtcclxuXHJcbiAgICAvLyBzdG9yZSBvciBjbGVhciB0aGUgc2VsZWN0aW9uXHJcbiAgICB0aGlzLnNlbGVjdGlvblNlcnZpY2UuaXNTZWxlY3RlZChkYXRhKSA/IHRoaXMuc2V0U2VsZWN0aW9uU3RhcnQoZGF0YSkgOiB0aGlzLmNsZWFyU2VsZWN0aW9uKCk7XHJcblxyXG4gICAgLy8gaWYgd2Ugd2FudCB0byBrZWVwIHRoZSBpdGVtIGFjdGl2YXRlZCB0aGVuIGFjdGl2YXRlXHJcbiAgICBpZiAoYWN0aXZhdGUpIHtcclxuICAgICAgdGhpcy5zZWxlY3Rpb25TZXJ2aWNlLmFjdGl2YXRlKGRhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2xlYXIgYWxsIG90aGVyIHNlbGVjdGVkIGl0ZW1zIGFuZCBzZWxlY3Qgb25seVxyXG4gICAqIHRoZSBtb3N0IHJlY2VudGx5IHNlbGVjdGVkIGl0ZW1cclxuICAgKi9cclxuICBwcml2YXRlIHNpbmdsZVNlbGVjdChkYXRhOiBhbnkpOiB2b2lkIHtcclxuXHJcbiAgICAvLyBkZXNlbGVjdCBhbGwgb3RoZXIgcm93cyBpZiBuZWl0aGVyIG1vZGlmaWVyIGtleSBpcyBwcmVzc2VkXHJcbiAgICB0aGlzLmRlc2VsZWN0QWxsKCk7XHJcblxyXG4gICAgLy8gc2VsZWN0IHRoZSBjdXJyZW50IHJvd1xyXG4gICAgdGhpcy5zZWxlY3QoZGF0YSk7XHJcblxyXG4gICAgLy8gc3RvcmUgdGhlIGN1cnJlbnQgaXRlbSBhcyB0aGUgc2VsZWN0aW9uIHN0YXJ0XHJcbiAgICB0aGlzLnNldFNlbGVjdGlvblN0YXJ0KGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSGFuZGxlIG11bHRpcGxlIHNlbGVjdGlvbjpcclxuICAgKiAxLiBJZiBubyBzdGFydCBpdGVtIHNlbGVjdGVkIC0gc2VsZWN0IGl0XHJcbiAgICogMi4gSWYgYSBzdGFydCBpdGVtIGhhcyBiZWVuIHNlbGVjdGVkIC0gc2VsZWN0IGFsbCBpbiBiZXR3ZWVuXHJcbiAgICogMy4gSWYgYSBzdGFydCBhbmQgZW5kIGl0ZW0gaGF2ZSBiZWVuIHNlbGVjdGVkIGNsZWFyIHRoZSByYW5nZSBhbmQgdGhlbiBzZWxlY3QgdGhlIG5ldyByYW5nZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgbXVsdGlwbGVTZWxlY3QoZGF0YTogYW55KTogdm9pZCB7XHJcblxyXG4gICAgLy8gaWYgbm8gc2VsZWN0aW9uIGN1cnJlbnRseSBleGlzdHMgdGhlbiBwZXJmb3JtIGluaXRpYWwgc2VsZWN0aW9uXHJcbiAgICBpZiAoIXRoaXMuX3NlbGVjdGlvbi5zdGFydCkge1xyXG5cclxuICAgICAgLy8gc2VsZWN0IHRoZSByb3dcclxuICAgICAgdGhpcy5zZWxlY3QoZGF0YSk7XHJcblxyXG4gICAgICAvLyBzdG9yZSB0aGUgc3RhcnRpbmcgcG9pbnRcclxuICAgICAgcmV0dXJuIHRoaXMuc2V0U2VsZWN0aW9uU3RhcnQoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaWYgYSBtdWx0aXBsZSBzZWxlY3Rpb24gYWxyZWFkeSB0b29rIHBsYWNlIC0gY2xlYXIgdGhlIHByZXZpb3VzIHNlbGVjdGlvblxyXG4gICAgaWYgKHRoaXMuX3NlbGVjdGlvbi5zdGFydCAmJiB0aGlzLl9zZWxlY3Rpb24uZW5kKSB7XHJcbiAgICAgIHRoaXMuZGVzZWxlY3QoLi4udGhpcy5nZXRTZWxlY3RlZEl0ZW1zKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHNldCB0aGUgbmV3IHNlbGVjdGlvbiBlbmQgcG9pbnRcclxuICAgIHRoaXMuc2V0U2VsZWN0aW9uRW5kKGRhdGEpO1xyXG5cclxuICAgIC8vIHNlbGVjdCBhbGwgdGhlIGl0ZW1zIGluIHRoZSByYW5nZVxyXG4gICAgdGhpcy5zZWxlY3QoLi4udGhpcy5nZXRTZWxlY3RlZEl0ZW1zKCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IHRoZSBzZWxlY3Rpb24gc3RhcnQgcG9pbnQuIElmIHRoZXJlIHdhcyBwcmV2aW91c2x5IGFcclxuICAgKiBzZWxlY3Rpb24gZW5kIHBvaW50IHRoZW4gY2xlYXIgaXQgYXMgdGhpcyBpcyBhIG5ldyBzZWxlY3Rpb25cclxuICAgKi9cclxuICBwcml2YXRlIHNldFNlbGVjdGlvblN0YXJ0KGRhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5fc2VsZWN0aW9uLnN0YXJ0ID0gZGF0YTtcclxuICAgIHRoaXMuX3NlbGVjdGlvbi5lbmQgPSBudWxsO1xyXG5cclxuICAgIC8vIGFjdGl2YXRlIHRoZSBpdGVtXHJcbiAgICB0aGlzLnNlbGVjdGlvblNlcnZpY2UuYWN0aXZhdGUoZGF0YSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXQgdGhlIHNlbGVjdGlvbiBlbmQgcG9pbnRcclxuICAgKi9cclxuICBwcml2YXRlIHNldFNlbGVjdGlvbkVuZChkYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMuX3NlbGVjdGlvbi5lbmQgPSBkYXRhO1xyXG5cclxuICAgIC8vIGFjdGl2YXRlIHRoZSBpdGVtXHJcbiAgICB0aGlzLnNlbGVjdGlvblNlcnZpY2UuYWN0aXZhdGUoZGF0YSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDbGVhciBib3RoIHN0YXJ0IGFuZCBlbmQgc2VsZWN0aW9uIHBvaW50c1xyXG4gICAqL1xyXG4gIHByaXZhdGUgY2xlYXJTZWxlY3Rpb24oZGVhY3RpdmF0ZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcclxuXHJcbiAgICAvLyByZXNldCB0aGUgc2VsZWN0ZWQgaXRlbVxyXG4gICAgdGhpcy5fc2VsZWN0aW9uID0geyBzdGFydDogbnVsbCwgZW5kOiBudWxsIH07XHJcblxyXG4gICAgLy8gcmVtb3ZlIHRoZSBjdXJyZW50IGFjdGl2ZSBpdGVtXHJcbiAgICBpZiAoZGVhY3RpdmF0ZSkge1xyXG4gICAgICB0aGlzLnNlbGVjdGlvblNlcnZpY2UuZGVhY3RpdmF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lIGFsbCB0aGUgaXRlbXMgYWZmZWN0ZWQgYnkgdGhlIGN1cnJlbnQgc2VsZWN0aW9uLlxyXG4gICAqIE5vdGUgdGhhdCB0aGUgZW5kIHBvaW50IG1heSBiZSBhYm92ZSB0aGUgc3RhcnQgcG9pbnQgc29cclxuICAgKiB3ZSBuZWVkIHRvIGFjY291bnQgZm9yIHRoaXMuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBnZXRTZWxlY3RlZEl0ZW1zKCk6IGFueVtdIHtcclxuXHJcbiAgICAvLyBnZXQgdGhlIGxhdGVzdCBkYXRhc2V0XHJcbiAgICBjb25zdCB7IGRhdGFzZXQgfSA9IHRoaXMuc2VsZWN0aW9uU2VydmljZTtcclxuXHJcbiAgICAvLyBnZXQgdGhlIGluZGV4ZXMgb2YgdGhlIHN0YXJ0IGFuZCBlbmQgcG9pbnRcclxuICAgIGNvbnN0IHN0YXJ0SWR4ID0gZGF0YXNldC5pbmRleE9mKHRoaXMuX3NlbGVjdGlvbi5zdGFydCk7XHJcbiAgICBjb25zdCBlbmRJZHggPSBkYXRhc2V0LmluZGV4T2YodGhpcy5fc2VsZWN0aW9uLmVuZCk7XHJcblxyXG4gICAgLy8gZ2V0IHRoZSByZWdpb24gb2YgdGhlIGFycmF5IHRoYXQgaXMgc2VsZWN0ZWQgLSBub3RlIHRoZSBlbmRJZHggbWF5IGJlIGJlZm9yZSB0aGUgc3RhcnRJZHggc28gYWNjb3VudCBmb3IgdGhpc1xyXG4gICAgcmV0dXJuIGRhdGFzZXQuc2xpY2UoTWF0aC5taW4oc3RhcnRJZHgsIGVuZElkeCksIE1hdGgubWF4KHN0YXJ0SWR4LCBlbmRJZHgpICsgMSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBY3RpdmF0ZSB0aGUgc2libGluZyBpdGVtIHdoZW4gYXJyb3cga2V5cyBhcmUgcHJlc3NlZFxyXG4gICAqL1xyXG4gIHByaXZhdGUgbmF2aWdhdGUoZXZlbnQ6IEtleWJvYXJkRXZlbnQsIGRhdGE6IGFueSk6IHZvaWQge1xyXG5cclxuICAgIC8vIGRldGVybWluZSB3aGljaCBtb2RpZmllciBrZXlzIGFyZSBwcmVzc2VkXHJcbiAgICBjb25zdCB7IGN0cmxLZXksIHNoaWZ0S2V5IH0gPSBldmVudDtcclxuXHJcbiAgICAvLyBpZiBubyBtb2RpZmllciBrZXlzIGFyZSBwcmVzc2VkIHRoZW4gZGVzZWxlY3QgYWxsIGFuZCBjbGVhciB0aGUgc2VsZWN0aW9uXHJcbiAgICBpZiAoIWN0cmxLZXkgJiYgIXNoaWZ0S2V5KSB7XHJcbiAgICAgIHRoaXMuZGVzZWxlY3RBbGwoKTtcclxuICAgICAgdGhpcy5jbGVhclNlbGVjdGlvbihmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYWN0aXZhdGUgdGhlIHNpYmxpbmcgLSBpZiB0aGUgdXAgYXJyb3cgaXMgcHJlc3NlZCB0aGVuIG5hdmlnYXRlIHRvIHRoZSBwcmV2aW91cyBzaWJsaW5nXHJcbiAgICBjb25zdCBzaWJsaW5nID0gdGhpcy5zZWxlY3Rpb25TZXJ2aWNlLmFjdGl2YXRlU2libGluZyhldmVudC5rZXlDb2RlID09PSBLZXlDb2RlLlVwQXJyb3cpO1xyXG5cclxuICAgIC8vIGlmIHRoZSBzaGlmdCBrZXkgaXMgcHJlc3NlZCB0aGVuIHdlIGFsc28gd2FudCB0byB0b2dnbGUgdGhlIHN0YXRlIGlmIHRoZSBpdGVtXHJcbiAgICBpZiAoc2hpZnRLZXkgJiYgc2libGluZykge1xyXG5cclxuICAgICAgLy8gaWYgdGhlcmUgaXMgbm8gY3VycmVudCBzZWxlY3Rpb24gc3RhcnQgdGhlbiBzZWxlY3QgdGhlIGN1cnJlbnQgcm93XHJcbiAgICAgIGlmICghdGhpcy5fc2VsZWN0aW9uLnN0YXJ0KSB7XHJcbiAgICAgICAgdGhpcy5tdWx0aXBsZVNlbGVjdChkYXRhKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5tdWx0aXBsZVNlbGVjdChzaWJsaW5nKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VsZWN0aW9uIHtcclxuICBzdGFydDogYW55O1xyXG4gIGVuZDogYW55O1xyXG59XHJcblxyXG5lbnVtIEtleUNvZGUge1xyXG4gIFVwQXJyb3cgPSAzOCxcclxuICBEb3duQXJyb3cgPSA0MCxcclxuICBTcGFjZWJhciA9IDMyXHJcbn1cclxuIl19