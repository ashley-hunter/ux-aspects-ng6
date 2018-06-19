/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
export class SelectionStrategy {
    /**
     * @param {?} selectionService
     */
    constructor(selectionService) {
        this.selectionService = selectionService;
    }
    /**
     * @param {?} event
     * @param {?} data
     * @return {?}
     */
    mousedown(event, data) { }
    /**
     * @param {?} event
     * @param {?} data
     * @return {?}
     */
    click(event, data) { }
    /**
     * @param {?} event
     * @param {?} data
     * @return {?}
     */
    keydown(event, data) { }
    /**
     * Select the item - default behavior
     * @param {...?} data
     * @return {?}
     */
    select(...data) {
        this.selectionService.select(...data);
    }
    /**
     * Toggle the item's selected state - default behavior
     * @param {...?} data
     * @return {?}
     */
    toggle(...data) {
        this.selectionService.toggle(...data);
    }
    /**
     * Deselect the item - default behavior
     * @param {...?} data
     * @return {?}
     */
    deselect(...data) {
        this.selectionService.deselect(...data);
    }
    /**
     * Select all items - default behavior
     * @return {?}
     */
    selectAll() {
        this.select(...this.selectionService.dataset);
    }
    /**
     * Deselect all items - default behavior
     * @return {?}
     */
    deselectAll() {
        this.deselect(...this.selectionService.dataset);
    }
    /**
     * @return {?}
     */
    destroy() { }
}
function SelectionStrategy_tsickle_Closure_declarations() {
    /** @type {?} */
    SelectionStrategy.prototype.selectionService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLnN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvc2VsZWN0aW9uL3N0cmF0ZWdpZXMvc2VsZWN0aW9uLnN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxNQUFNOzs7O0lBRUosWUFBc0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7S0FBSzs7Ozs7O0lBRTdELFNBQVMsQ0FBQyxLQUFpQixFQUFFLElBQVMsS0FBVzs7Ozs7O0lBRWpELEtBQUssQ0FBQyxLQUFpQixFQUFFLElBQVMsS0FBVzs7Ozs7O0lBRTdDLE9BQU8sQ0FBQyxLQUFvQixFQUFFLElBQVMsS0FBVzs7Ozs7O0lBS2xELE1BQU0sQ0FBQyxHQUFHLElBQVc7UUFDbkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0tBQ3ZDOzs7Ozs7SUFLRCxNQUFNLENBQUMsR0FBRyxJQUFXO1FBQ25CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztLQUN2Qzs7Ozs7O0lBS0QsUUFBUSxDQUFDLEdBQUcsSUFBVztRQUNyQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7S0FDekM7Ozs7O0lBS0QsU0FBUztRQUNQLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDL0M7Ozs7O0lBS0QsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDakQ7Ozs7SUFFRCxPQUFPLE1BQVk7Q0FDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZWxlY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VsZWN0aW9uLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNlbGVjdGlvblN0cmF0ZWd5IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHNlbGVjdGlvblNlcnZpY2U6IFNlbGVjdGlvblNlcnZpY2UpIHsgfVxyXG5cclxuICBtb3VzZWRvd24oZXZlbnQ6IE1vdXNlRXZlbnQsIGRhdGE6IGFueSk6IHZvaWQgeyB9XHJcblxyXG4gIGNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50LCBkYXRhOiBhbnkpOiB2b2lkIHsgfVxyXG5cclxuICBrZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50LCBkYXRhOiBhbnkpOiB2b2lkIHsgfVxyXG5cclxuICAvKipcclxuICAgKiBTZWxlY3QgdGhlIGl0ZW0gLSBkZWZhdWx0IGJlaGF2aW9yXHJcbiAgICovXHJcbiAgc2VsZWN0KC4uLmRhdGE6IGFueVtdKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlbGVjdGlvblNlcnZpY2Uuc2VsZWN0KC4uLmRhdGEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVG9nZ2xlIHRoZSBpdGVtJ3Mgc2VsZWN0ZWQgc3RhdGUgLSBkZWZhdWx0IGJlaGF2aW9yXHJcbiAgICovXHJcbiAgdG9nZ2xlKC4uLmRhdGE6IGFueVtdKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlbGVjdGlvblNlcnZpY2UudG9nZ2xlKC4uLmRhdGEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVzZWxlY3QgdGhlIGl0ZW0gLSBkZWZhdWx0IGJlaGF2aW9yXHJcbiAgICovXHJcbiAgZGVzZWxlY3QoLi4uZGF0YTogYW55W10pOiB2b2lkIHtcclxuICAgIHRoaXMuc2VsZWN0aW9uU2VydmljZS5kZXNlbGVjdCguLi5kYXRhKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlbGVjdCBhbGwgaXRlbXMgLSBkZWZhdWx0IGJlaGF2aW9yXHJcbiAgICovXHJcbiAgc2VsZWN0QWxsKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWxlY3QoLi4udGhpcy5zZWxlY3Rpb25TZXJ2aWNlLmRhdGFzZXQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVzZWxlY3QgYWxsIGl0ZW1zIC0gZGVmYXVsdCBiZWhhdmlvclxyXG4gICAqL1xyXG4gIGRlc2VsZWN0QWxsKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXNlbGVjdCguLi50aGlzLnNlbGVjdGlvblNlcnZpY2UuZGF0YXNldCk7XHJcbiAgfVxyXG5cclxuICBkZXN0cm95KCk6IHZvaWQgeyB9XHJcbn1cclxuIl19