/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, Host, Input } from '@angular/core';
import { filter } from 'rxjs/operators';
import { FilterContainerComponent, FilterRemoveAllEvent } from '../filter-container.component';
export class FilterBaseComponent {
    /**
     * @param {?} filtersContainer
     */
    constructor(filtersContainer) {
        this.filtersContainer = filtersContainer;
        this._subscription = filtersContainer.events.pipe(filter(event => event instanceof FilterRemoveAllEvent)).subscribe(this.removeFilter.bind(this));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
    /**
     * @param {?} _filter
     * @return {?}
     */
    addFilter(_filter) {
        if (!_filter.initial) {
            this.filtersContainer.addFilter(_filter);
        }
    }
    /**
     * @param {?} _filter
     * @return {?}
     */
    removeFilter(_filter) {
        if (!_filter) {
            return;
        }
        this.filtersContainer.removeFilter(_filter);
    }
}
FilterBaseComponent.decorators = [
    { type: Directive, args: [{
                selector: 'ux-filter-base'
            },] },
];
/** @nocollapse */
FilterBaseComponent.ctorParameters = () => [
    { type: FilterContainerComponent, decorators: [{ type: Host },] },
];
FilterBaseComponent.propDecorators = {
    "filters": [{ type: Input },],
};
function FilterBaseComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FilterBaseComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FilterBaseComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    FilterBaseComponent.propDecorators;
    /** @type {?} */
    FilterBaseComponent.prototype.filters;
    /** @type {?} */
    FilterBaseComponent.prototype._subscription;
    /** @type {?} */
    FilterBaseComponent.prototype.filtersContainer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWJhc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmlsdGVycy9maWx0ZXItYmFzZS9maWx0ZXItYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNsRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEMsT0FBTyxFQUFVLHdCQUF3QixFQUFFLG9CQUFvQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFLdkcsTUFBTTs7OztJQU1GLFlBQTRCO1FBQUEscUJBQWdCLEdBQWhCLGdCQUFnQjtRQUN4QyxJQUFJLENBQUMsYUFBYSxHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxZQUFZLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztLQUNySjs7OztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3BDOzs7OztJQUVELFNBQVMsQ0FBQyxPQUFlO1FBQ3JCLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM1QztLQUNKOzs7OztJQUVELFlBQVksQ0FBQyxPQUFlO1FBQ3hCLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNYLE1BQU0sQ0FBQztTQUNWO1FBRUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUMvQzs7O1lBN0JKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsZ0JBQWdCO2FBQzdCOzs7O1lBSmdCLHdCQUF3Qix1QkFXeEIsSUFBSTs7O3dCQUpoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdCwgSW5wdXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBGaWx0ZXIsIEZpbHRlckNvbnRhaW5lckNvbXBvbmVudCwgRmlsdGVyUmVtb3ZlQWxsRXZlbnQgfSBmcm9tICcuLi9maWx0ZXItY29udGFpbmVyLmNvbXBvbmVudCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAndXgtZmlsdGVyLWJhc2UnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaWx0ZXJCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuXHJcbiAgICBASW5wdXQoKSBmaWx0ZXJzOiBGaWx0ZXJbXTtcclxuXHJcbiAgICBwcml2YXRlIF9zdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihASG9zdCgpIHByaXZhdGUgZmlsdGVyc0NvbnRhaW5lcjogRmlsdGVyQ29udGFpbmVyQ29tcG9uZW50KSB7XHJcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uID0gZmlsdGVyc0NvbnRhaW5lci5ldmVudHMucGlwZShmaWx0ZXIoZXZlbnQgPT4gZXZlbnQgaW5zdGFuY2VvZiBGaWx0ZXJSZW1vdmVBbGxFdmVudCkpLnN1YnNjcmliZSh0aGlzLnJlbW92ZUZpbHRlci5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRGaWx0ZXIoX2ZpbHRlcjogRmlsdGVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFfZmlsdGVyLmluaXRpYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJzQ29udGFpbmVyLmFkZEZpbHRlcihfZmlsdGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlRmlsdGVyKF9maWx0ZXI6IEZpbHRlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICghX2ZpbHRlcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmZpbHRlcnNDb250YWluZXIucmVtb3ZlRmlsdGVyKF9maWx0ZXIpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==