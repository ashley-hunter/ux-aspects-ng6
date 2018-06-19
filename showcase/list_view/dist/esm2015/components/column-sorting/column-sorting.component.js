/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class ColumnSortingComponent {
    constructor() {
        this.stateChange = new EventEmitter();
        this.columnSortingState = ColumnSortingState;
    }
    /**
     * @param {?} parent
     * @return {?}
     */
    initParent(parent) {
        this._parent = parent;
        // watch for any events
        this._parent.events.subscribe(event => {
            let /** @type {?} */ idx = event.findIndex(column => column.key === this.key);
            if (idx == -1) {
                this.state = ColumnSortingState.NoSort;
            }
            // only store the number if we have 2 or more columns being sorted
            if (event.length > 1) {
                this.orderNumber = idx === -1 ? null : idx + 1;
            }
            else {
                this.orderNumber = null;
            }
            this.stateChange.emit(this.state);
        });
    }
    /**
     * @return {?}
     */
    changeState() {
        if (this.state === ColumnSortingState.Ascending) {
            this.state = ColumnSortingState.Descending;
        }
        else if (this.state === ColumnSortingState.Descending) {
            this.state = ColumnSortingState.NoSort;
        }
        else {
            this.state = ColumnSortingState.Ascending;
        }
        // inform parent
        return this._parent.toggleColumn(this.key, this.state);
    }
}
ColumnSortingComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-column-sorting',
                template: `<div class="ux-column-sorting">
    <i class="ux-column-sorting-icon hpe-icon" 
        [class.hpe-ascend]="state === columnSortingState.Ascending" 
        [class.hpe-descend]="state === columnSortingState.Descending" 
        [class.column-sorting-icon-hidden]="state === columnSortingState.NoSort"></i>
    <p class="ux-column-sorting-number">{{ orderNumber }}</p>
</div>`,
                exportAs: 'ux-column-sorting'
            },] },
];
/** @nocollapse */
ColumnSortingComponent.propDecorators = {
    "state": [{ type: Input },],
    "key": [{ type: Input },],
    "orderNumber": [{ type: Input },],
    "stateChange": [{ type: Output },],
};
function ColumnSortingComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ColumnSortingComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ColumnSortingComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    ColumnSortingComponent.propDecorators;
    /** @type {?} */
    ColumnSortingComponent.prototype.state;
    /** @type {?} */
    ColumnSortingComponent.prototype.key;
    /** @type {?} */
    ColumnSortingComponent.prototype.orderNumber;
    /** @type {?} */
    ColumnSortingComponent.prototype.stateChange;
    /** @type {?} */
    ColumnSortingComponent.prototype._parent;
    /** @type {?} */
    ColumnSortingComponent.prototype.columnSortingState;
}
/** @enum {number} */
const ColumnSortingState = {
    Ascending: 0,
    Descending: 1,
    NoSort: 2,
};
export { ColumnSortingState };
ColumnSortingState[ColumnSortingState.Ascending] = "Ascending";
ColumnSortingState[ColumnSortingState.Descending] = "Descending";
ColumnSortingState[ColumnSortingState.NoSort] = "NoSort";

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLXNvcnRpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29sdW1uLXNvcnRpbmcvY29sdW1uLXNvcnRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBYXZFLE1BQU07OzJCQUt3RCxJQUFJLFlBQVksRUFBc0I7a0NBRzNFLGtCQUFrQjs7Ozs7O0lBRXZDLFVBQVUsQ0FBQyxNQUE4QjtRQUNyQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQzs7UUFHdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBRWxDLHFCQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFN0QsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDWixJQUFJLENBQUMsS0FBSyxHQUFHLGtCQUFrQixDQUFDLE1BQU0sQ0FBQzthQUMxQzs7WUFHRCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7YUFDbEQ7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzthQUMzQjtZQUVELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUVyQyxDQUFDLENBQUM7S0FDTjs7OztJQUVELFdBQVc7UUFFUCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLEtBQUssR0FBRyxrQkFBa0IsQ0FBQyxVQUFVLENBQUM7U0FDOUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxLQUFLLEdBQUcsa0JBQWtCLENBQUMsTUFBTSxDQUFDO1NBQzFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsS0FBSyxHQUFHLGtCQUFrQixDQUFDLFNBQVMsQ0FBQztTQUM3Qzs7UUFHRCxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FFMUQ7OztZQTFESixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFOzs7Ozs7T0FNUDtnQkFDSCxRQUFRLEVBQUUsbUJBQW1CO2FBQ2hDOzs7O3NCQUdJLEtBQUs7b0JBQ0wsS0FBSzs0QkFDTCxLQUFLOzRCQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW5Tb3J0aW5nRGlyZWN0aXZlLCBDb2x1bW5Tb3J0aW5nT3JkZXIgfSBmcm9tICcuL2NvbHVtbi1zb3J0aW5nLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndXgtY29sdW1uLXNvcnRpbmcnLFxyXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwidXgtY29sdW1uLXNvcnRpbmdcIj5cclxuICAgIDxpIGNsYXNzPVwidXgtY29sdW1uLXNvcnRpbmctaWNvbiBocGUtaWNvblwiIFxyXG4gICAgICAgIFtjbGFzcy5ocGUtYXNjZW5kXT1cInN0YXRlID09PSBjb2x1bW5Tb3J0aW5nU3RhdGUuQXNjZW5kaW5nXCIgXHJcbiAgICAgICAgW2NsYXNzLmhwZS1kZXNjZW5kXT1cInN0YXRlID09PSBjb2x1bW5Tb3J0aW5nU3RhdGUuRGVzY2VuZGluZ1wiIFxyXG4gICAgICAgIFtjbGFzcy5jb2x1bW4tc29ydGluZy1pY29uLWhpZGRlbl09XCJzdGF0ZSA9PT0gY29sdW1uU29ydGluZ1N0YXRlLk5vU29ydFwiPjwvaT5cclxuICAgIDxwIGNsYXNzPVwidXgtY29sdW1uLXNvcnRpbmctbnVtYmVyXCI+e3sgb3JkZXJOdW1iZXIgfX08L3A+XHJcbjwvZGl2PmAsXHJcbiAgICBleHBvcnRBczogJ3V4LWNvbHVtbi1zb3J0aW5nJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29sdW1uU29ydGluZ0NvbXBvbmVudCB7XHJcblxyXG4gICAgQElucHV0KCkgc3RhdGU6IENvbHVtblNvcnRpbmdTdGF0ZTtcclxuICAgIEBJbnB1dCgpIGtleTogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgb3JkZXJOdW1iZXI6IG51bWJlcjtcclxuICAgIEBPdXRwdXQoKSBzdGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPENvbHVtblNvcnRpbmdTdGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyPENvbHVtblNvcnRpbmdTdGF0ZT4oKTtcclxuXHJcbiAgICBwcml2YXRlIF9wYXJlbnQ6IENvbHVtblNvcnRpbmdEaXJlY3RpdmU7XHJcbiAgICBjb2x1bW5Tb3J0aW5nU3RhdGUgPSBDb2x1bW5Tb3J0aW5nU3RhdGU7XHJcblxyXG4gICAgaW5pdFBhcmVudChwYXJlbnQ6IENvbHVtblNvcnRpbmdEaXJlY3RpdmUpIHtcclxuICAgICAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XHJcblxyXG4gICAgICAgIC8vIHdhdGNoIGZvciBhbnkgZXZlbnRzXHJcbiAgICAgICAgdGhpcy5fcGFyZW50LmV2ZW50cy5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG5cclxuICAgICAgICAgICAgbGV0IGlkeCA9IGV2ZW50LmZpbmRJbmRleChjb2x1bW4gPT4gY29sdW1uLmtleSA9PT0gdGhpcy5rZXkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlkeCA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IENvbHVtblNvcnRpbmdTdGF0ZS5Ob1NvcnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIG9ubHkgc3RvcmUgdGhlIG51bWJlciBpZiB3ZSBoYXZlIDIgb3IgbW9yZSBjb2x1bW5zIGJlaW5nIHNvcnRlZFxyXG4gICAgICAgICAgICBpZiAoZXZlbnQubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlck51bWJlciA9IGlkeCA9PT0gLTEgPyBudWxsIDogaWR4ICsgMTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJOdW1iZXIgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlQ2hhbmdlLmVtaXQodGhpcy5zdGF0ZSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVN0YXRlKCk6IENvbHVtblNvcnRpbmdPcmRlcltdIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IENvbHVtblNvcnRpbmdTdGF0ZS5Bc2NlbmRpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IENvbHVtblNvcnRpbmdTdGF0ZS5EZXNjZW5kaW5nO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gQ29sdW1uU29ydGluZ1N0YXRlLkRlc2NlbmRpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IENvbHVtblNvcnRpbmdTdGF0ZS5Ob1NvcnQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IENvbHVtblNvcnRpbmdTdGF0ZS5Bc2NlbmRpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpbmZvcm0gcGFyZW50XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudC50b2dnbGVDb2x1bW4odGhpcy5rZXksIHRoaXMuc3RhdGUpO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGVudW0gQ29sdW1uU29ydGluZ1N0YXRlIHtcclxuICAgIEFzY2VuZGluZyxcclxuICAgIERlc2NlbmRpbmcsXHJcbiAgICBOb1NvcnRcclxufSJdfQ==