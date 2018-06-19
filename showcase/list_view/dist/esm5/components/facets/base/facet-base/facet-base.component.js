/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Host, Input, Output } from '@angular/core';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { FacetContainerComponent } from '../../facet-container.component';
import { FacetDeselect, FacetDeselectAll, FacetSelect } from '../../facet-events';
var FacetBaseComponent = /** @class */ (function () {
    function FacetBaseComponent(facetContainer, _elementRef) {
        var _this = this;
        this.facetContainer = facetContainer;
        this._elementRef = _elementRef;
        this.selected = [];
        this.selectedChange = new EventEmitter();
        this.events = new Subject();
        this._onDestroy = new Subject();
        if (facetContainer) {
            // subscribe to any deselect events from the facet container
            facetContainer.events.pipe(filter(function (event) { return event instanceof FacetDeselect; }), filter(function (event) { return !!_this.selected.find(function (facet) { return facet === event.facet; }); }), takeUntil(this._onDestroy)).subscribe(function (event) { return _this.deselectFacet(event.facet); });
            // subscribe to any deselect all events from facet container
            facetContainer.events.pipe(filter(function (event) { return event instanceof FacetDeselectAll; }), takeUntil(this._onDestroy)).subscribe(function (_) { return _this.deselectAll(); });
        }
    }
    /**
     * @return {?}
     */
    FacetBaseComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // check if there should be any facets initially selected
        if (this.facetContainer) {
            this.selected.forEach(function (facet) { return _this.facetContainer.selectFacet(facet); });
        }
    };
    /**
     * @return {?}
     */
    FacetBaseComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._onDestroy.next();
        this._onDestroy.complete();
    };
    /**
     * @param {?} facet
     * @return {?}
     */
    FacetBaseComponent.prototype.selectFacet = /**
     * @param {?} facet
     * @return {?}
     */
    function (facet) {
        // if the facet is disabled it should not be selected
        if (facet.disabled) {
            return;
        }
        // add the facet to the list of selected facets
        this.selected.push(facet);
        // send the new value to the event emitter
        this.selectedChange.emit(this.selected);
        // fire the event to the observable
        this.triggerEvent(new FacetSelect(facet));
        // tell the facet container about the selected facet
        if (this.facetContainer) {
            this.facetContainer.selectFacet(facet);
        }
    };
    /**
     * @param {?} facet
     * @return {?}
     */
    FacetBaseComponent.prototype.deselectFacet = /**
     * @param {?} facet
     * @return {?}
     */
    function (facet) {
        // find facet to remove
        var /** @type {?} */ index = this.selected.findIndex(function (selectedFacet) { return selectedFacet === facet; });
        // only continue if facet is found
        if (index !== -1) {
            // remove the facet from the selected list
            this.selected.splice(index, 1);
            // emit the changes to selected event emitter
            this.selectedChange.emit(this.selected);
            // fire the event to the observable
            this.triggerEvent(new FacetDeselect(facet));
            // deselect the facet in the facet container
            if (this.facetContainer) {
                this.facetContainer.deselectFacet(facet);
            }
        }
    };
    /**
     * @return {?}
     */
    FacetBaseComponent.prototype.deselectAll = /**
     * @return {?}
     */
    function () {
        // remove all selected facets
        this.selected = [];
        // fire the event to the observable
        this.triggerEvent(new FacetDeselectAll());
        // emit the changes to the selected event emitter
        this.selectedChange.emit(this.selected);
    };
    /**
     * @param {?} facet
     * @return {?}
     */
    FacetBaseComponent.prototype.toggleFacetSelection = /**
     * @param {?} facet
     * @return {?}
     */
    function (facet) {
        // if the facet is selected then deselect - otherwise select it
        if (this.isFacetSelected(facet)) {
            this.deselectFacet(facet);
        }
        else {
            this.selectFacet(facet);
        }
    };
    /**
     * @param {?} facet
     * @return {?}
     */
    FacetBaseComponent.prototype.isFacetSelected = /**
     * @param {?} facet
     * @return {?}
     */
    function (facet) {
        // determine if a facet is currently selected
        return !!this.selected.find(function (selectedFacet) { return selectedFacet === facet; });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FacetBaseComponent.prototype.triggerEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.events.next(event);
    };
    FacetBaseComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-facet-base',
                    template: '',
                },] },
    ];
    /** @nocollapse */
    FacetBaseComponent.ctorParameters = function () { return [
        { type: FacetContainerComponent, decorators: [{ type: Host },] },
        { type: ElementRef, },
    ]; };
    FacetBaseComponent.propDecorators = {
        "selected": [{ type: Input },],
        "selectedChange": [{ type: Output },],
        "events": [{ type: Output },],
    };
    return FacetBaseComponent;
}());
export { FacetBaseComponent };
function FacetBaseComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FacetBaseComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FacetBaseComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    FacetBaseComponent.propDecorators;
    /** @type {?} */
    FacetBaseComponent.prototype.selected;
    /** @type {?} */
    FacetBaseComponent.prototype.selectedChange;
    /** @type {?} */
    FacetBaseComponent.prototype.events;
    /** @type {?} */
    FacetBaseComponent.prototype._onDestroy;
    /** @type {?} */
    FacetBaseComponent.prototype.facetContainer;
    /** @type {?} */
    FacetBaseComponent.prototype._elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9mYWNldHMvYmFzZS9mYWNldC1iYXNlL2ZhY2V0LWJhc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVHLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFjLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztJQWUxRiw0QkFBNkIsZ0JBQWdELFdBQXVCO1FBQXBHLGlCQWtCQztRQWxCNEIsbUJBQWMsR0FBZCxjQUFjO1FBQWtDLGdCQUFXLEdBQVgsV0FBVyxDQUFZO3dCQU52RSxFQUFFOzhCQUNtQixJQUFJLFlBQVksRUFBVztzQkFDckMsSUFBSSxPQUFPLEVBQWM7MEJBRTFDLElBQUksT0FBTyxFQUFRO1FBSXRDLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7O1lBR2pCLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUN0QixNQUFNLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLFlBQVksYUFBYSxFQUE5QixDQUE4QixDQUFDLEVBQy9DLE1BQU0sQ0FBQyxVQUFDLEtBQW9CLElBQUssT0FBQSxDQUFDLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLEtBQUss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QUFRLENBQUMsQ0FBQztLQUMzQzs7Ozs7SUFFRCxpREFBb0I7Ozs7SUFBcEIsVUFBcUIsS0FBWTs7UUFHN0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QjtRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzQjtLQUVKOzs7OztJQUVELDRDQUFlOzs7O0lBQWYsVUFBZ0IsS0FBWTs7UUFFeEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFBLGFBQWEsSUFBSSxPQUFBLGFBQWEsS0FBSyxLQUFLLEVBQXZCLENBQXVCLENBQUMsQ0FBQztLQUN6RTs7Ozs7SUFFTyx5Q0FBWTs7OztjQUFDLEtBQWlCO1FBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7Z0JBdkgvQixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSxFQUFFO2lCQUNmOzs7O2dCQVBRLHVCQUF1Qix1QkFnQmQsSUFBSTtnQkFuQkYsVUFBVTs7OzZCQWF6QixLQUFLO21DQUNMLE1BQU07MkJBQ04sTUFBTTs7NkJBZlg7O1NBV2Esa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3QsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEZhY2V0Q29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmFjZXQtY29udGFpbmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZhY2V0RGVzZWxlY3QsIEZhY2V0RGVzZWxlY3RBbGwsIEZhY2V0RXZlbnQsIEZhY2V0U2VsZWN0IH0gZnJvbSAnLi4vLi4vZmFjZXQtZXZlbnRzJztcclxuaW1wb3J0IHsgRmFjZXQgfSBmcm9tICcuLi8uLi9tb2RlbHMvZmFjZXQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3V4LWZhY2V0LWJhc2UnLFxyXG4gICAgdGVtcGxhdGU6ICcnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFjZXRCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAgIEBJbnB1dCgpIHNlbGVjdGVkOiBGYWNldFtdID0gW107XHJcbiAgICBAT3V0cHV0KCkgc2VsZWN0ZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxGYWNldFtdPiA9IG5ldyBFdmVudEVtaXR0ZXI8RmFjZXRbXT4oKTtcclxuICAgIEBPdXRwdXQoKSBldmVudHM6IFN1YmplY3Q8RmFjZXRFdmVudD4gPSBuZXcgU3ViamVjdDxGYWNldEV2ZW50PigpO1xyXG5cclxuICAgIHByb3RlY3RlZCBfb25EZXN0cm95ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggQEhvc3QoKSBwcml2YXRlIGZhY2V0Q29udGFpbmVyOiBGYWNldENvbnRhaW5lckNvbXBvbmVudCwgcHVibGljIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XHJcblxyXG4gICAgICAgIGlmIChmYWNldENvbnRhaW5lcikge1xyXG5cclxuICAgICAgICAgICAgLy8gc3Vic2NyaWJlIHRvIGFueSBkZXNlbGVjdCBldmVudHMgZnJvbSB0aGUgZmFjZXQgY29udGFpbmVyXHJcbiAgICAgICAgICAgIGZhY2V0Q29udGFpbmVyLmV2ZW50cy5waXBlKFxyXG4gICAgICAgICAgICAgICAgZmlsdGVyKGV2ZW50ID0+IGV2ZW50IGluc3RhbmNlb2YgRmFjZXREZXNlbGVjdCksXHJcbiAgICAgICAgICAgICAgICBmaWx0ZXIoKGV2ZW50OiBGYWNldERlc2VsZWN0KSA9PiAhIXRoaXMuc2VsZWN0ZWQuZmluZChmYWNldCA9PiBmYWNldCA9PT0gZXZlbnQuZmFjZXQpKSxcclxuICAgICAgICAgICAgICAgIHRha2VVbnRpbCh0aGlzLl9vbkRlc3Ryb3kpXHJcbiAgICAgICAgICAgICkuc3Vic2NyaWJlKChldmVudDogRmFjZXREZXNlbGVjdCkgPT4gdGhpcy5kZXNlbGVjdEZhY2V0KGV2ZW50LmZhY2V0KSk7XHJcblxyXG4gICAgICAgICAgICAvLyBzdWJzY3JpYmUgdG8gYW55IGRlc2VsZWN0IGFsbCBldmVudHMgZnJvbSBmYWNldCBjb250YWluZXJcclxuICAgICAgICAgICAgZmFjZXRDb250YWluZXIuZXZlbnRzLnBpcGUoXHJcbiAgICAgICAgICAgICAgICBmaWx0ZXIoZXZlbnQgPT4gZXZlbnQgaW5zdGFuY2VvZiBGYWNldERlc2VsZWN0QWxsKSxcclxuICAgICAgICAgICAgICAgIHRha2VVbnRpbCh0aGlzLl9vbkRlc3Ryb3kpXHJcbiAgICAgICAgICAgICkuc3Vic2NyaWJlKF8gPT4gdGhpcy5kZXNlbGVjdEFsbCgpKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZXJlIHNob3VsZCBiZSBhbnkgZmFjZXRzIGluaXRpYWxseSBzZWxlY3RlZFxyXG4gICAgICAgIGlmICh0aGlzLmZhY2V0Q29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQuZm9yRWFjaChmYWNldCA9PiB0aGlzLmZhY2V0Q29udGFpbmVyLnNlbGVjdEZhY2V0KGZhY2V0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX29uRGVzdHJveS5uZXh0KCk7XHJcbiAgICAgICAgdGhpcy5fb25EZXN0cm95LmNvbXBsZXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0RmFjZXQoZmFjZXQ6IEZhY2V0KTogdm9pZCB7XHJcblxyXG4gICAgICAgIC8vIGlmIHRoZSBmYWNldCBpcyBkaXNhYmxlZCBpdCBzaG91bGQgbm90IGJlIHNlbGVjdGVkXHJcbiAgICAgICAgaWYgKGZhY2V0LmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGFkZCB0aGUgZmFjZXQgdG8gdGhlIGxpc3Qgb2Ygc2VsZWN0ZWQgZmFjZXRzXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZC5wdXNoKGZhY2V0KTtcclxuXHJcbiAgICAgICAgLy8gc2VuZCB0aGUgbmV3IHZhbHVlIHRvIHRoZSBldmVudCBlbWl0dGVyXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWQpO1xyXG5cclxuICAgICAgICAvLyBmaXJlIHRoZSBldmVudCB0byB0aGUgb2JzZXJ2YWJsZVxyXG4gICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KG5ldyBGYWNldFNlbGVjdChmYWNldCkpO1xyXG5cclxuICAgICAgICAvLyB0ZWxsIHRoZSBmYWNldCBjb250YWluZXIgYWJvdXQgdGhlIHNlbGVjdGVkIGZhY2V0XHJcbiAgICAgICAgaWYgKHRoaXMuZmFjZXRDb250YWluZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5mYWNldENvbnRhaW5lci5zZWxlY3RGYWNldChmYWNldCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlc2VsZWN0RmFjZXQoZmFjZXQ6IEZhY2V0KTogdm9pZCB7XHJcblxyXG4gICAgICAgIC8vIGZpbmQgZmFjZXQgdG8gcmVtb3ZlXHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5zZWxlY3RlZC5maW5kSW5kZXgoc2VsZWN0ZWRGYWNldCA9PiBzZWxlY3RlZEZhY2V0ID09PSBmYWNldCk7XHJcblxyXG4gICAgICAgIC8vIG9ubHkgY29udGludWUgaWYgZmFjZXQgaXMgZm91bmRcclxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcblxyXG4gICAgICAgICAgICAvLyByZW1vdmUgdGhlIGZhY2V0IGZyb20gdGhlIHNlbGVjdGVkIGxpc3RcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZC5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgICAgICAgICAgLy8gZW1pdCB0aGUgY2hhbmdlcyB0byBzZWxlY3RlZCBldmVudCBlbWl0dGVyXHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGZpcmUgdGhlIGV2ZW50IHRvIHRoZSBvYnNlcnZhYmxlXHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KG5ldyBGYWNldERlc2VsZWN0KGZhY2V0KSk7XHJcblxyXG4gICAgICAgICAgICAvLyBkZXNlbGVjdCB0aGUgZmFjZXQgaW4gdGhlIGZhY2V0IGNvbnRhaW5lclxyXG4gICAgICAgICAgICBpZiAodGhpcy5mYWNldENvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mYWNldENvbnRhaW5lci5kZXNlbGVjdEZhY2V0KGZhY2V0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZXNlbGVjdEFsbCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gcmVtb3ZlIGFsbCBzZWxlY3RlZCBmYWNldHNcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gW107XHJcblxyXG4gICAgICAgIC8vIGZpcmUgdGhlIGV2ZW50IHRvIHRoZSBvYnNlcnZhYmxlXHJcbiAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQobmV3IEZhY2V0RGVzZWxlY3RBbGwoKSk7XHJcblxyXG4gICAgICAgIC8vIGVtaXQgdGhlIGNoYW5nZXMgdG8gdGhlIHNlbGVjdGVkIGV2ZW50IGVtaXR0ZXJcclxuICAgICAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlRmFjZXRTZWxlY3Rpb24oZmFjZXQ6IEZhY2V0KTogdm9pZCB7XHJcblxyXG4gICAgICAgIC8vIGlmIHRoZSBmYWNldCBpcyBzZWxlY3RlZCB0aGVuIGRlc2VsZWN0IC0gb3RoZXJ3aXNlIHNlbGVjdCBpdFxyXG4gICAgICAgIGlmICh0aGlzLmlzRmFjZXRTZWxlY3RlZChmYWNldCkpIHtcclxuICAgICAgICAgICAgdGhpcy5kZXNlbGVjdEZhY2V0KGZhY2V0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdEZhY2V0KGZhY2V0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlzRmFjZXRTZWxlY3RlZChmYWNldDogRmFjZXQpOiBib29sZWFuIHtcclxuICAgICAgICAvLyBkZXRlcm1pbmUgaWYgYSBmYWNldCBpcyBjdXJyZW50bHkgc2VsZWN0ZWRcclxuICAgICAgICByZXR1cm4gISF0aGlzLnNlbGVjdGVkLmZpbmQoc2VsZWN0ZWRGYWNldCA9PiBzZWxlY3RlZEZhY2V0ID09PSBmYWNldCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0cmlnZ2VyRXZlbnQoZXZlbnQ6IEZhY2V0RXZlbnQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmV2ZW50cy5uZXh0KGV2ZW50KTtcclxuICAgIH1cclxufSJdfQ==