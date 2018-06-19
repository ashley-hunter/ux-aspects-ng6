/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { RowSelectionStrategy } from './strategies/row-selection.strategy';
import { SimpleSelectionStrategy } from './strategies/simple-selection.strategy';
export class SelectionService {
    constructor() {
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
    ngOnDestroy() {
        this._rowStrategy.destroy();
        this._simpleStrategy.destroy();
    }
    /**
     * If the item is not currently selected then add it
     * to the list of selected items
     * @param {...?} selections
     * @return {?}
     */
    select(...selections) {
        // add each selection to the set
        selections.forEach(selection => this._selection.add(selection));
        // propagate the changes
        this.selectionHasMutated();
    }
    /**
     * Remove an item from the list of selected items
     * @param {...?} selections
     * @return {?}
     */
    deselect(...selections) {
        // remove each item from the set
        selections.forEach(selection => this._selection.delete(selection));
        // propagate the changes
        this.selectionHasMutated();
    }
    /**
     * Toggle the selected state of any specified items
     * @param {...?} selections
     * @return {?}
     */
    toggle(...selections) {
        selections.forEach(selection => this.isSelected(selection) ? this.deselect(selection) : this.select(selection));
    }
    /**
     * Determine whether or not a specific item is currently selected
     * @param {?} data
     * @return {?}
     */
    isSelected(data) {
        return this._selection.has(data);
    }
    /**
     * Return an observable specifically for notifying the subscriber
     * only when the selection state of a specific object has changed
     * @param {?} data
     * @return {?}
     */
    selected$(data) {
        return this.selection$.pipe(map(() => this.isSelected(data)), distinctUntilChanged());
    }
    /**
     * Define how selections should be performed.
     * This allows us to use an strategy pattern to handle the various keyboard
     * and mouse interactions while keeping each mode separated and
     * easily extensible if we want to add more modes in future!
     * @param {?} mode
     * @return {?}
     */
    setMode(mode) {
        switch (mode.toLowerCase().trim()) {
            case 'simple':
                this.strategy = this._simpleStrategy;
                break;
            case 'row':
                this.strategy = this._rowStrategy;
                break;
            default:
                throw new Error(`The selection mode '${mode}' does not exist. Valid modes are 'simple' or 'row'.`);
        }
    }
    /**
     * Set the current active item
     * @param {?} data
     * @return {?}
     */
    activate(data) {
        this.active$.next(data);
    }
    /**
     * Deactive all items
     * @return {?}
     */
    deactivate() {
        this.active$.next(null);
    }
    /**
     * Activate the sibling of the current active item.
     * If previous is set to true the previous sibling will be activated
     * rather than the next sibling. This function will also return the
     * data of the newly activated sibling
     * @param {?=} previous
     * @return {?}
     */
    activateSibling(previous = false) {
        // get the currently active item
        const /** @type {?} */ current = this.active$.getValue();
        // check if there is a current active item
        if (!current) {
            return;
        }
        // get the index of the current item
        const /** @type {?} */ idx = this.dataset.indexOf(current);
        const /** @type {?} */ target = this.dataset[previous ? idx - 1 : idx + 1];
        // check if the target exists
        if (target) {
            this.activate(target);
        }
        return target;
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    setDisabled(disabled) {
        // store the current disabled state
        this.enabled = !disabled;
        // clear any stateful data
        this.active$.next(null);
        this._selection.clear();
        // emit the selection change information
        this.selectionHasMutated();
    }
    /**
     * @return {?}
     */
    selectionHasMutated() {
        this.selection$.next(Array.from(this._selection));
    }
}
SelectionService.decorators = [
    { type: Injectable },
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlcy9zZWxlY3Rpb24vc2VsZWN0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRTNFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBR2pGLE1BQU07OzBCQUVpQixJQUFJLEdBQUcsRUFBRTs0QkFDUCxJQUFJLG9CQUFvQixDQUFDLElBQUksQ0FBQzsrQkFDM0IsSUFBSSx1QkFBdUIsQ0FBQyxJQUFJLENBQUM7dUJBRTFDLEVBQUU7dUJBQ0EsSUFBSTs0QkFDQyxJQUFJOytCQUNELElBQUk7d0JBQ0QsSUFBSSxDQUFDLGVBQWU7dUJBRXhDLElBQUksZUFBZSxDQUFNLElBQUksQ0FBQzswQkFDM0IsSUFBSSxlQUFlLENBQVEsRUFBRSxDQUFDOzs7OztJQUUzQyxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQ2hDOzs7Ozs7O0lBTUQsTUFBTSxDQUFDLEdBQUcsVUFBaUI7O1FBR3pCLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDOztRQUdoRSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztLQUM1Qjs7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QUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDOzs7O1lBakpyRCxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCAsICBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFJvd1NlbGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnLi9zdHJhdGVnaWVzL3Jvdy1zZWxlY3Rpb24uc3RyYXRlZ3knO1xyXG5pbXBvcnQgeyBTZWxlY3Rpb25TdHJhdGVneSB9IGZyb20gJy4vc3RyYXRlZ2llcy9zZWxlY3Rpb24uc3RyYXRlZ3knO1xyXG5pbXBvcnQgeyBTaW1wbGVTZWxlY3Rpb25TdHJhdGVneSB9IGZyb20gJy4vc3RyYXRlZ2llcy9zaW1wbGUtc2VsZWN0aW9uLnN0cmF0ZWd5JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNlbGVjdGlvblNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG5cclxuICBwcml2YXRlIF9zZWxlY3Rpb24gPSBuZXcgU2V0KCk7XHJcbiAgcHJpdmF0ZSBfcm93U3RyYXRlZ3kgPSBuZXcgUm93U2VsZWN0aW9uU3RyYXRlZ3kodGhpcyk7XHJcbiAgcHJpdmF0ZSBfc2ltcGxlU3RyYXRlZ3kgPSBuZXcgU2ltcGxlU2VsZWN0aW9uU3RyYXRlZ3kodGhpcyk7XHJcblxyXG4gIGRhdGFzZXQ6IGFueVtdID0gW107XHJcbiAgZW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XHJcbiAgY2xpY2tFbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcclxuICBrZXlib2FyZEVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIHN0cmF0ZWd5OiBTZWxlY3Rpb25TdHJhdGVneSA9IHRoaXMuX3NpbXBsZVN0cmF0ZWd5O1xyXG5cclxuICBhY3RpdmUkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KG51bGwpO1xyXG4gIHNlbGVjdGlvbiQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueVtdPihbXSk7XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5fcm93U3RyYXRlZ3kuZGVzdHJveSgpO1xyXG4gICAgdGhpcy5fc2ltcGxlU3RyYXRlZ3kuZGVzdHJveSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSWYgdGhlIGl0ZW0gaXMgbm90IGN1cnJlbnRseSBzZWxlY3RlZCB0aGVuIGFkZCBpdFxyXG4gICAqIHRvIHRoZSBsaXN0IG9mIHNlbGVjdGVkIGl0ZW1zXHJcbiAgICovXHJcbiAgc2VsZWN0KC4uLnNlbGVjdGlvbnM6IGFueVtdKTogdm9pZCB7XHJcblxyXG4gICAgLy8gYWRkIGVhY2ggc2VsZWN0aW9uIHRvIHRoZSBzZXRcclxuICAgIHNlbGVjdGlvbnMuZm9yRWFjaChzZWxlY3Rpb24gPT4gdGhpcy5fc2VsZWN0aW9uLmFkZChzZWxlY3Rpb24pKTtcclxuXHJcbiAgICAvLyBwcm9wYWdhdGUgdGhlIGNoYW5nZXNcclxuICAgIHRoaXMuc2VsZWN0aW9uSGFzTXV0YXRlZCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlIGFuIGl0ZW0gZnJvbSB0aGUgbGlzdCBvZiBzZWxlY3RlZCBpdGVtc1xyXG4gICAqL1xyXG4gIGRlc2VsZWN0KC4uLnNlbGVjdGlvbnM6IGFueVtdKTogdm9pZCB7XHJcbiAgICAvLyByZW1vdmUgZWFjaCBpdGVtIGZyb20gdGhlIHNldFxyXG4gICAgc2VsZWN0aW9ucy5mb3JFYWNoKHNlbGVjdGlvbiA9PiB0aGlzLl9zZWxlY3Rpb24uZGVsZXRlKHNlbGVjdGlvbikpO1xyXG5cclxuICAgIC8vIHByb3BhZ2F0ZSB0aGUgY2hhbmdlc1xyXG4gICAgdGhpcy5zZWxlY3Rpb25IYXNNdXRhdGVkKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUb2dnbGUgdGhlIHNlbGVjdGVkIHN0YXRlIG9mIGFueSBzcGVjaWZpZWQgaXRlbXNcclxuICAgKi9cclxuICB0b2dnbGUoLi4uc2VsZWN0aW9uczogYW55W10pOiB2b2lkIHtcclxuICAgIHNlbGVjdGlvbnMuZm9yRWFjaChzZWxlY3Rpb24gPT4gdGhpcy5pc1NlbGVjdGVkKHNlbGVjdGlvbikgPyB0aGlzLmRlc2VsZWN0KHNlbGVjdGlvbikgOiB0aGlzLnNlbGVjdChzZWxlY3Rpb24pKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERldGVybWluZSB3aGV0aGVyIG9yIG5vdCBhIHNwZWNpZmljIGl0ZW0gaXMgY3VycmVudGx5IHNlbGVjdGVkXHJcbiAgICovXHJcbiAgaXNTZWxlY3RlZChkYXRhOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWxlY3Rpb24uaGFzKGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJuIGFuIG9ic2VydmFibGUgc3BlY2lmaWNhbGx5IGZvciBub3RpZnlpbmcgdGhlIHN1YnNjcmliZXJcclxuICAgKiBvbmx5IHdoZW4gdGhlIHNlbGVjdGlvbiBzdGF0ZSBvZiBhIHNwZWNpZmljIG9iamVjdCBoYXMgY2hhbmdlZFxyXG4gICAqL1xyXG4gIHNlbGVjdGVkJChkYXRhOiBhbnkpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiB0aGlzLnNlbGVjdGlvbiQucGlwZShtYXAoKCkgPT4gdGhpcy5pc1NlbGVjdGVkKGRhdGEpKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZWZpbmUgaG93IHNlbGVjdGlvbnMgc2hvdWxkIGJlIHBlcmZvcm1lZC5cclxuICAgKiBUaGlzIGFsbG93cyB1cyB0byB1c2UgYW4gc3RyYXRlZ3kgcGF0dGVybiB0byBoYW5kbGUgdGhlIHZhcmlvdXMga2V5Ym9hcmRcclxuICAgKiBhbmQgbW91c2UgaW50ZXJhY3Rpb25zIHdoaWxlIGtlZXBpbmcgZWFjaCBtb2RlIHNlcGFyYXRlZCBhbmRcclxuICAgKiBlYXNpbHkgZXh0ZW5zaWJsZSBpZiB3ZSB3YW50IHRvIGFkZCBtb3JlIG1vZGVzIGluIGZ1dHVyZSFcclxuICAgKi9cclxuICBzZXRNb2RlKG1vZGU6IFNlbGVjdGlvbk1vZGUpOiB2b2lkIHtcclxuXHJcbiAgICBzd2l0Y2ggKG1vZGUudG9Mb3dlckNhc2UoKS50cmltKCkpIHtcclxuXHJcbiAgICAgIGNhc2UgJ3NpbXBsZSc6XHJcbiAgICAgICAgdGhpcy5zdHJhdGVneSA9IHRoaXMuX3NpbXBsZVN0cmF0ZWd5O1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAncm93JzpcclxuICAgICAgICB0aGlzLnN0cmF0ZWd5ID0gdGhpcy5fcm93U3RyYXRlZ3k7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHNlbGVjdGlvbiBtb2RlICcke21vZGV9JyBkb2VzIG5vdCBleGlzdC4gVmFsaWQgbW9kZXMgYXJlICdzaW1wbGUnIG9yICdyb3cnLmApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IHRoZSBjdXJyZW50IGFjdGl2ZSBpdGVtXHJcbiAgICovXHJcbiAgYWN0aXZhdGUoZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLmFjdGl2ZSQubmV4dChkYXRhKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlYWN0aXZlIGFsbCBpdGVtc1xyXG4gICAqL1xyXG4gIGRlYWN0aXZhdGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmFjdGl2ZSQubmV4dChudWxsKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFjdGl2YXRlIHRoZSBzaWJsaW5nIG9mIHRoZSBjdXJyZW50IGFjdGl2ZSBpdGVtLlxyXG4gICAqIElmIHByZXZpb3VzIGlzIHNldCB0byB0cnVlIHRoZSBwcmV2aW91cyBzaWJsaW5nIHdpbGwgYmUgYWN0aXZhdGVkXHJcbiAgICogcmF0aGVyIHRoYW4gdGhlIG5leHQgc2libGluZy4gVGhpcyBmdW5jdGlvbiB3aWxsIGFsc28gcmV0dXJuIHRoZVxyXG4gICAqIGRhdGEgb2YgdGhlIG5ld2x5IGFjdGl2YXRlZCBzaWJsaW5nXHJcbiAgICovXHJcbiAgYWN0aXZhdGVTaWJsaW5nKHByZXZpb3VzOiBib29sZWFuID0gZmFsc2UpOiBhbnkge1xyXG5cclxuICAgIC8vIGdldCB0aGUgY3VycmVudGx5IGFjdGl2ZSBpdGVtXHJcbiAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5hY3RpdmUkLmdldFZhbHVlKCk7XHJcblxyXG4gICAgLy8gY2hlY2sgaWYgdGhlcmUgaXMgYSBjdXJyZW50IGFjdGl2ZSBpdGVtXHJcbiAgICBpZiAoIWN1cnJlbnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGdldCB0aGUgaW5kZXggb2YgdGhlIGN1cnJlbnQgaXRlbVxyXG4gICAgY29uc3QgaWR4ID0gdGhpcy5kYXRhc2V0LmluZGV4T2YoY3VycmVudCk7XHJcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmRhdGFzZXRbcHJldmlvdXMgPyBpZHggLSAxIDogaWR4ICsgMV07XHJcblxyXG4gICAgLy8gY2hlY2sgaWYgdGhlIHRhcmdldCBleGlzdHNcclxuICAgIGlmICh0YXJnZXQpIHtcclxuICAgICAgdGhpcy5hY3RpdmF0ZSh0YXJnZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZChkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgLy8gc3RvcmUgdGhlIGN1cnJlbnQgZGlzYWJsZWQgc3RhdGVcclxuICAgIHRoaXMuZW5hYmxlZCA9ICFkaXNhYmxlZDtcclxuXHJcbiAgICAvLyBjbGVhciBhbnkgc3RhdGVmdWwgZGF0YVxyXG4gICAgdGhpcy5hY3RpdmUkLm5leHQobnVsbCk7XHJcbiAgICB0aGlzLl9zZWxlY3Rpb24uY2xlYXIoKTtcclxuXHJcbiAgICAvLyBlbWl0IHRoZSBzZWxlY3Rpb24gY2hhbmdlIGluZm9ybWF0aW9uXHJcbiAgICB0aGlzLnNlbGVjdGlvbkhhc011dGF0ZWQoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2VsZWN0aW9uSGFzTXV0YXRlZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2VsZWN0aW9uJC5uZXh0KEFycmF5LmZyb20odGhpcy5fc2VsZWN0aW9uKSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBTZWxlY3Rpb25Nb2RlID0gJ3NpbXBsZScgfCAncm93JztcclxuIl19