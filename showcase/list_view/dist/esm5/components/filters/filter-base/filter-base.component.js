/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, Host, Input } from '@angular/core';
import { filter } from 'rxjs/operators';
import { FilterContainerComponent, FilterRemoveAllEvent } from '../filter-container.component';
var FilterBaseComponent = /** @class */ (function () {
    function FilterBaseComponent(filtersContainer) {
        this.filtersContainer = filtersContainer;
        this._subscription = filtersContainer.events.pipe(filter(function (event) { return event instanceof FilterRemoveAllEvent; })).subscribe(this.removeFilter.bind(this));
    }
    /**
     * @return {?}
     */
    FilterBaseComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscription.unsubscribe();
    };
    /**
     * @param {?} _filter
     * @return {?}
     */
    FilterBaseComponent.prototype.addFilter = /**
     * @param {?} _filter
     * @return {?}
     */
    function (_filter) {
        if (!_filter.initial) {
            this.filtersContainer.addFilter(_filter);
        }
    };
    /**
     * @param {?} _filter
     * @return {?}
     */
    FilterBaseComponent.prototype.removeFilter = /**
     * @param {?} _filter
     * @return {?}
     */
    function (_filter) {
        if (!_filter) {
            return;
        }
        this.filtersContainer.removeFilter(_filter);
    };
    FilterBaseComponent.decorators = [
        { type: Directive, args: [{
                    selector: 'ux-filter-base'
                },] },
    ];
    /** @nocollapse */
    FilterBaseComponent.ctorParameters = function () { return [
        { type: FilterContainerComponent, decorators: [{ type: Host },] },
    ]; };
    FilterBaseComponent.propDecorators = {
        "filters": [{ type: Input },],
    };
    return FilterBaseComponent;
}());
export { FilterBaseComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWJhc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmlsdGVycy9maWx0ZXItYmFzZS9maWx0ZXItYmFzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNsRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEMsT0FBTyxFQUFVLHdCQUF3QixFQUFFLG9CQUFvQixFQUFFLE1BQU0sK0JBQStCLENBQUM7O0lBV25HLDZCQUE0QjtRQUFBLHFCQUFnQixHQUFoQixnQkFBZ0I7UUFDeEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssWUFBWSxvQkFBb0IsRUFBckMsQ0FBcUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7S0FDcko7Ozs7SUFFRCx5Q0FBVzs7O0lBQVg7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3BDOzs7OztJQUVELHVDQUFTOzs7O0lBQVQsVUFBVSxPQUFlO1FBQ3JCLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM1QztLQUNKOzs7OztJQUVELDBDQUFZOzs7O0lBQVosVUFBYSxPQUFlO1FBQ3hCLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNYLE1BQU0sQ0FBQztTQUNWO1FBRUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUMvQzs7Z0JBN0JKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsZ0JBQWdCO2lCQUM3Qjs7OztnQkFKZ0Isd0JBQXdCLHVCQVd4QixJQUFJOzs7NEJBSmhCLEtBQUs7OzhCQVhWOztTQVNhLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3QsIElucHV0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgRmlsdGVyLCBGaWx0ZXJDb250YWluZXJDb21wb25lbnQsIEZpbHRlclJlbW92ZUFsbEV2ZW50IH0gZnJvbSAnLi4vZmlsdGVyLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ3V4LWZpbHRlci1iYXNlJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRmlsdGVyQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcblxyXG4gICAgQElucHV0KCkgZmlsdGVyczogRmlsdGVyW107XHJcblxyXG4gICAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IoQEhvc3QoKSBwcml2YXRlIGZpbHRlcnNDb250YWluZXI6IEZpbHRlckNvbnRhaW5lckNvbXBvbmVudCkge1xyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IGZpbHRlcnNDb250YWluZXIuZXZlbnRzLnBpcGUoZmlsdGVyKGV2ZW50ID0+IGV2ZW50IGluc3RhbmNlb2YgRmlsdGVyUmVtb3ZlQWxsRXZlbnQpKS5zdWJzY3JpYmUodGhpcy5yZW1vdmVGaWx0ZXIuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRmlsdGVyKF9maWx0ZXI6IEZpbHRlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICghX2ZpbHRlci5pbml0aWFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyc0NvbnRhaW5lci5hZGRGaWx0ZXIoX2ZpbHRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUZpbHRlcihfZmlsdGVyOiBGaWx0ZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIV9maWx0ZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5maWx0ZXJzQ29udGFpbmVyLnJlbW92ZUZpbHRlcihfZmlsdGVyKTtcclxuICAgIH1cclxuXHJcbn0iXX0=