/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ColumnSortingComponent, ColumnSortingState } from './column-sorting.component';
import { Directive, QueryList, ContentChildren, Input } from '@angular/core';
import { Subject } from 'rxjs';
export class ColumnSortingDirective {
    constructor() {
        this.events = new Subject();
        this.order = [];
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.components.forEach(component => component.initParent(this));
    }
    /**
     * @param {?} key
     * @param {?} state
     * @return {?}
     */
    toggleColumn(key, state) {
        if (this.singleSort) {
            if (state === ColumnSortingState.NoSort) {
                this.order = [];
            }
            else {
                this.order = [{ key: key, state: state }];
            }
        }
        else {
            // reorder columns here
            let /** @type {?} */ idx = this.order.findIndex(column => column.key === key);
            // if wasnt previously selected add to list
            if (idx === -1) {
                this.order.push({ key: key, state: state });
            }
            else if (state === ColumnSortingState.Ascending || state === ColumnSortingState.Descending) {
                this.order.splice(idx, 1);
                this.order.push({ key: key, state: state });
            }
            else {
                this.order.splice(idx, 1);
            }
        }
        this.events.next(this.order);
        // return the order
        return this.order;
    }
}
ColumnSortingDirective.decorators = [
    { type: Directive, args: [{
                selector: '[uxColumnSorting]'
            },] },
];
/** @nocollapse */
ColumnSortingDirective.propDecorators = {
    "singleSort": [{ type: Input },],
    "components": [{ type: ContentChildren, args: [ColumnSortingComponent,] },],
};
function ColumnSortingDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ColumnSortingDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ColumnSortingDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    ColumnSortingDirective.propDecorators;
    /** @type {?} */
    ColumnSortingDirective.prototype.singleSort;
    /** @type {?} */
    ColumnSortingDirective.prototype.components;
    /** @type {?} */
    ColumnSortingDirective.prototype.events;
    /** @type {?} */
    ColumnSortingDirective.prototype.order;
}
/**
 * @record
 */
export function ColumnSortingOrder() { }
function ColumnSortingOrder_tsickle_Closure_declarations() {
    /** @type {?} */
    ColumnSortingOrder.prototype.key;
    /** @type {?} */
    ColumnSortingOrder.prototype.state;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLXNvcnRpbmcuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29sdW1uLXNvcnRpbmcvY29sdW1uLXNvcnRpbmcuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN4RixPQUFPLEVBQUUsU0FBUyxFQUFRLFNBQVMsRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFLL0IsTUFBTTs7c0JBS3NDLElBQUksT0FBTyxFQUF3QjtxQkFDN0MsRUFBRTs7Ozs7SUFFaEMsZUFBZTtRQUNYLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQ3BFOzs7Ozs7SUFFRCxZQUFZLENBQUMsR0FBVyxFQUFFLEtBQXlCO1FBRS9DLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQzthQUNuQjtZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7YUFDM0M7U0FDSjtRQUFDLElBQUksQ0FBQyxDQUFDOztZQUVKLHFCQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7O1lBRzdELEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO2FBQzlDO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxrQkFBa0IsQ0FBQyxTQUFTLElBQUksS0FBSyxLQUFLLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQzNGLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO2FBQzlDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzdCO1NBQ0o7UUFFRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7O1FBRTdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0tBRXpCOzs7WUExQ0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxtQkFBbUI7YUFDaEM7Ozs7MkJBR0ksS0FBSzsyQkFDTCxlQUFlLFNBQUMsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uU29ydGluZ0NvbXBvbmVudCwgQ29sdW1uU29ydGluZ1N0YXRlIH0gZnJvbSAnLi9jb2x1bW4tc29ydGluZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3QsIFF1ZXJ5TGlzdCwgQ29udGVudENoaWxkcmVuLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW3V4Q29sdW1uU29ydGluZ10nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb2x1bW5Tb3J0aW5nRGlyZWN0aXZlIHtcclxuXHJcbiAgICBASW5wdXQoKSBzaW5nbGVTb3J0OiBib29sZWFuO1xyXG4gICAgQENvbnRlbnRDaGlsZHJlbihDb2x1bW5Tb3J0aW5nQ29tcG9uZW50KSBjb21wb25lbnRzOiBRdWVyeUxpc3Q8Q29sdW1uU29ydGluZ0NvbXBvbmVudD47XHJcblxyXG4gICAgZXZlbnRzOiBTdWJqZWN0PENvbHVtblNvcnRpbmdPcmRlcltdPiA9IG5ldyBTdWJqZWN0PENvbHVtblNvcnRpbmdPcmRlcltdPigpO1xyXG4gICAgb3JkZXI6IENvbHVtblNvcnRpbmdPcmRlcltdID0gW107XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiBjb21wb25lbnQuaW5pdFBhcmVudCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlQ29sdW1uKGtleTogc3RyaW5nLCBzdGF0ZTogQ29sdW1uU29ydGluZ1N0YXRlKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNpbmdsZVNvcnQpIHtcclxuICAgICAgICAgICAgaWYgKHN0YXRlID09PSBDb2x1bW5Tb3J0aW5nU3RhdGUuTm9Tb3J0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyID0gW107XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyID0gW3trZXk6IGtleSwgc3RhdGU6IHN0YXRlfV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyByZW9yZGVyIGNvbHVtbnMgaGVyZVxyXG4gICAgICAgICAgICBsZXQgaWR4ID0gdGhpcy5vcmRlci5maW5kSW5kZXgoY29sdW1uID0+IGNvbHVtbi5rZXkgPT09IGtleSk7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiB3YXNudCBwcmV2aW91c2x5IHNlbGVjdGVkIGFkZCB0byBsaXN0XHJcbiAgICAgICAgICAgIGlmIChpZHggPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyLnB1c2goeyBrZXk6IGtleSwgc3RhdGU6IHN0YXRlfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT09IENvbHVtblNvcnRpbmdTdGF0ZS5Bc2NlbmRpbmcgfHwgc3RhdGUgPT09IENvbHVtblNvcnRpbmdTdGF0ZS5EZXNjZW5kaW5nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyLnNwbGljZShpZHgsIDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlci5wdXNoKHsga2V5OiBrZXksIHN0YXRlOiBzdGF0ZX0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlci5zcGxpY2UoaWR4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzLm5leHQodGhpcy5vcmRlcik7XHJcbiAgICAgICAgICAgIC8vIHJldHVybiB0aGUgb3JkZXJcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3JkZXI7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbHVtblNvcnRpbmdPcmRlciB7XHJcbiAgICBrZXk6IHN0cmluZztcclxuICAgIHN0YXRlOiBDb2x1bW5Tb3J0aW5nU3RhdGU7IFxyXG59Il19