/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Host, Input, Output } from '@angular/core';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { FacetContainerComponent } from '../../facet-container.component';
import { FacetDeselect, FacetDeselectAll, FacetSelect } from '../../facet-events';
export class FacetBaseComponent {
    /**
     * @param {?} facetContainer
     * @param {?} _elementRef
     */
    constructor(facetContainer, _elementRef) {
        this.facetContainer = facetContainer;
        this._elementRef = _elementRef;
        this.selected = [];
        this.selectedChange = new EventEmitter();
        this.events = new Subject();
        this._onDestroy = new Subject();
        if (facetContainer) {
            // subscribe to any deselect events from the facet container
            facetContainer.events.pipe(filter(event => event instanceof FacetDeselect), filter((event) => !!this.selected.find(facet => facet === event.facet)), takeUntil(this._onDestroy)).subscribe((event) => this.deselectFacet(event.facet));
            // subscribe to any deselect all events from facet container
            facetContainer.events.pipe(filter(event => event instanceof FacetDeselectAll), takeUntil(this._onDestroy)).subscribe(_ => this.deselectAll());
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // check if there should be any facets initially selected
        if (this.facetContainer) {
            this.selected.forEach(facet => this.facetContainer.selectFacet(facet));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._onDestroy.next();
        this._onDestroy.complete();
    }
    /**
     * @param {?} facet
     * @return {?}
     */
    selectFacet(facet) {
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
    }
    /**
     * @param {?} facet
     * @return {?}
     */
    deselectFacet(facet) {
        // find facet to remove
        let /** @type {?} */ index = this.selected.findIndex(selectedFacet => selectedFacet === facet);
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
    }
    /**
     * @return {?}
     */
    deselectAll() {
        // remove all selected facets
        this.selected = [];
        // fire the event to the observable
        this.triggerEvent(new FacetDeselectAll());
        // emit the changes to the selected event emitter
        this.selectedChange.emit(this.selected);
    }
    /**
     * @param {?} facet
     * @return {?}
     */
    toggleFacetSelection(facet) {
        // if the facet is selected then deselect - otherwise select it
        if (this.isFacetSelected(facet)) {
            this.deselectFacet(facet);
        }
        else {
            this.selectFacet(facet);
        }
    }
    /**
     * @param {?} facet
     * @return {?}
     */
    isFacetSelected(facet) {
        // determine if a facet is currently selected
        return !!this.selected.find(selectedFacet => selectedFacet === facet);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    triggerEvent(event) {
        this.events.next(event);
    }
}
FacetBaseComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-facet-base',
                template: '',
            },] },
];
/** @nocollapse */
FacetBaseComponent.ctorParameters = () => [
    { type: FacetContainerComponent, decorators: [{ type: Host },] },
    { type: ElementRef, },
];
FacetBaseComponent.propDecorators = {
    "selected": [{ type: Input },],
    "selectedChange": [{ type: Output },],
    "events": [{ type: Output },],
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9mYWNldHMvYmFzZS9mYWNldC1iYXNlL2ZhY2V0LWJhc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVHLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFjLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBTzlGLE1BQU07Ozs7O0lBUUYsWUFBNkIsZ0JBQWdELFdBQXVCO1FBQXZFLG1CQUFjLEdBQWQsY0FBYztRQUFrQyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTt3QkFOdkUsRUFBRTs4QkFDbUIsSUFBSSxZQUFZLEVBQVc7c0JBQ3JDLElBQUksT0FBTyxFQUFjOzBCQUUxQyxJQUFJLE9BQU8sRUFBUTtRQUl0QyxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDOztZQUdqQixjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDdEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxZQUFZLGFBQWEsQ0FBQyxFQUMvQyxNQUFNLENBQUMsQ0FBQyxLQUFvQixFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFD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QUssQ0FBQyxDQUFDO1NBQzdCO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNCO0tBRUo7Ozs7O0lBRUQsZUFBZSxDQUFDLEtBQVk7O1FBRXhCLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEtBQUssS0FBSyxDQUFDLENBQUM7S0FDekU7Ozs7O0lBRU8sWUFBWSxDQUFDLEtBQWlCO1FBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7O1lBdkgvQixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRSxFQUFFO2FBQ2Y7Ozs7WUFQUSx1QkFBdUIsdUJBZ0JkLElBQUk7WUFuQkYsVUFBVTs7O3lCQWF6QixLQUFLOytCQUNMLE1BQU07dUJBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBIb3N0LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBGYWNldENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZhY2V0LWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGYWNldERlc2VsZWN0LCBGYWNldERlc2VsZWN0QWxsLCBGYWNldEV2ZW50LCBGYWNldFNlbGVjdCB9IGZyb20gJy4uLy4uL2ZhY2V0LWV2ZW50cyc7XHJcbmltcG9ydCB7IEZhY2V0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2ZhY2V0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd1eC1mYWNldC1iYXNlJyxcclxuICAgIHRlbXBsYXRlOiAnJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhY2V0QmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgICBASW5wdXQoKSBzZWxlY3RlZDogRmFjZXRbXSA9IFtdO1xyXG4gICAgQE91dHB1dCgpIHNlbGVjdGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RmFjZXRbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPEZhY2V0W10+KCk7XHJcbiAgICBAT3V0cHV0KCkgZXZlbnRzOiBTdWJqZWN0PEZhY2V0RXZlbnQ+ID0gbmV3IFN1YmplY3Q8RmFjZXRFdmVudD4oKTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX29uRGVzdHJveSA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoIEBIb3N0KCkgcHJpdmF0ZSBmYWNldENvbnRhaW5lcjogRmFjZXRDb250YWluZXJDb21wb25lbnQsIHB1YmxpYyBfZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xyXG5cclxuICAgICAgICBpZiAoZmFjZXRDb250YWluZXIpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIHN1YnNjcmliZSB0byBhbnkgZGVzZWxlY3QgZXZlbnRzIGZyb20gdGhlIGZhY2V0IGNvbnRhaW5lclxyXG4gICAgICAgICAgICBmYWNldENvbnRhaW5lci5ldmVudHMucGlwZShcclxuICAgICAgICAgICAgICAgIGZpbHRlcihldmVudCA9PiBldmVudCBpbnN0YW5jZW9mIEZhY2V0RGVzZWxlY3QpLFxyXG4gICAgICAgICAgICAgICAgZmlsdGVyKChldmVudDogRmFjZXREZXNlbGVjdCkgPT4gISF0aGlzLnNlbGVjdGVkLmZpbmQoZmFjZXQgPT4gZmFjZXQgPT09IGV2ZW50LmZhY2V0KSksXHJcbiAgICAgICAgICAgICAgICB0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KVxyXG4gICAgICAgICAgICApLnN1YnNjcmliZSgoZXZlbnQ6IEZhY2V0RGVzZWxlY3QpID0+IHRoaXMuZGVzZWxlY3RGYWNldChldmVudC5mYWNldCkpO1xyXG5cclxuICAgICAgICAgICAgLy8gc3Vic2NyaWJlIHRvIGFueSBkZXNlbGVjdCBhbGwgZXZlbnRzIGZyb20gZmFjZXQgY29udGFpbmVyXHJcbiAgICAgICAgICAgIGZhY2V0Q29udGFpbmVyLmV2ZW50cy5waXBlKFxyXG4gICAgICAgICAgICAgICAgZmlsdGVyKGV2ZW50ID0+IGV2ZW50IGluc3RhbmNlb2YgRmFjZXREZXNlbGVjdEFsbCksXHJcbiAgICAgICAgICAgICAgICB0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KVxyXG4gICAgICAgICAgICApLnN1YnNjcmliZShfID0+IHRoaXMuZGVzZWxlY3RBbGwoKSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBjaGVjayBpZiB0aGVyZSBzaG91bGQgYmUgYW55IGZhY2V0cyBpbml0aWFsbHkgc2VsZWN0ZWRcclxuICAgICAgICBpZiAodGhpcy5mYWNldENvbnRhaW5lcikge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkLmZvckVhY2goZmFjZXQgPT4gdGhpcy5mYWNldENvbnRhaW5lci5zZWxlY3RGYWNldChmYWNldCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9vbkRlc3Ryb3kubmV4dCgpO1xyXG4gICAgICAgIHRoaXMuX29uRGVzdHJveS5jb21wbGV0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdEZhY2V0KGZhY2V0OiBGYWNldCk6IHZvaWQge1xyXG5cclxuICAgICAgICAvLyBpZiB0aGUgZmFjZXQgaXMgZGlzYWJsZWQgaXQgc2hvdWxkIG5vdCBiZSBzZWxlY3RlZFxyXG4gICAgICAgIGlmIChmYWNldC5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBhZGQgdGhlIGZhY2V0IHRvIHRoZSBsaXN0IG9mIHNlbGVjdGVkIGZhY2V0c1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQucHVzaChmYWNldCk7XHJcblxyXG4gICAgICAgIC8vIHNlbmQgdGhlIG5ldyB2YWx1ZSB0byB0aGUgZXZlbnQgZW1pdHRlclxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkKTtcclxuXHJcbiAgICAgICAgLy8gZmlyZSB0aGUgZXZlbnQgdG8gdGhlIG9ic2VydmFibGVcclxuICAgICAgICB0aGlzLnRyaWdnZXJFdmVudChuZXcgRmFjZXRTZWxlY3QoZmFjZXQpKTtcclxuXHJcbiAgICAgICAgLy8gdGVsbCB0aGUgZmFjZXQgY29udGFpbmVyIGFib3V0IHRoZSBzZWxlY3RlZCBmYWNldFxyXG4gICAgICAgIGlmICh0aGlzLmZhY2V0Q29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmFjZXRDb250YWluZXIuc2VsZWN0RmFjZXQoZmFjZXQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZXNlbGVjdEZhY2V0KGZhY2V0OiBGYWNldCk6IHZvaWQge1xyXG5cclxuICAgICAgICAvLyBmaW5kIGZhY2V0IHRvIHJlbW92ZVxyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuc2VsZWN0ZWQuZmluZEluZGV4KHNlbGVjdGVkRmFjZXQgPT4gc2VsZWN0ZWRGYWNldCA9PT0gZmFjZXQpO1xyXG5cclxuICAgICAgICAvLyBvbmx5IGNvbnRpbnVlIGlmIGZhY2V0IGlzIGZvdW5kXHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG5cclxuICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBmYWNldCBmcm9tIHRoZSBzZWxlY3RlZCBsaXN0XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQuc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGVtaXQgdGhlIGNoYW5nZXMgdG8gc2VsZWN0ZWQgZXZlbnQgZW1pdHRlclxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZCk7XHJcblxyXG4gICAgICAgICAgICAvLyBmaXJlIHRoZSBldmVudCB0byB0aGUgb2JzZXJ2YWJsZVxyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudChuZXcgRmFjZXREZXNlbGVjdChmYWNldCkpO1xyXG5cclxuICAgICAgICAgICAgLy8gZGVzZWxlY3QgdGhlIGZhY2V0IGluIHRoZSBmYWNldCBjb250YWluZXJcclxuICAgICAgICAgICAgaWYgKHRoaXMuZmFjZXRDb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmFjZXRDb250YWluZXIuZGVzZWxlY3RGYWNldChmYWNldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVzZWxlY3RBbGwoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIC8vIHJlbW92ZSBhbGwgc2VsZWN0ZWQgZmFjZXRzXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IFtdO1xyXG5cclxuICAgICAgICAvLyBmaXJlIHRoZSBldmVudCB0byB0aGUgb2JzZXJ2YWJsZVxyXG4gICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KG5ldyBGYWNldERlc2VsZWN0QWxsKCkpO1xyXG5cclxuICAgICAgICAvLyBlbWl0IHRoZSBjaGFuZ2VzIHRvIHRoZSBzZWxlY3RlZCBldmVudCBlbWl0dGVyXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUZhY2V0U2VsZWN0aW9uKGZhY2V0OiBGYWNldCk6IHZvaWQge1xyXG5cclxuICAgICAgICAvLyBpZiB0aGUgZmFjZXQgaXMgc2VsZWN0ZWQgdGhlbiBkZXNlbGVjdCAtIG90aGVyd2lzZSBzZWxlY3QgaXRcclxuICAgICAgICBpZiAodGhpcy5pc0ZhY2V0U2VsZWN0ZWQoZmFjZXQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzZWxlY3RGYWNldChmYWNldCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RGYWNldChmYWNldCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBpc0ZhY2V0U2VsZWN0ZWQoZmFjZXQ6IEZhY2V0KTogYm9vbGVhbiB7XHJcbiAgICAgICAgLy8gZGV0ZXJtaW5lIGlmIGEgZmFjZXQgaXMgY3VycmVudGx5IHNlbGVjdGVkXHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5zZWxlY3RlZC5maW5kKHNlbGVjdGVkRmFjZXQgPT4gc2VsZWN0ZWRGYWNldCA9PT0gZmFjZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdHJpZ2dlckV2ZW50KGV2ZW50OiBGYWNldEV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ldmVudHMubmV4dChldmVudCk7XHJcbiAgICB9XHJcbn0iXX0=