/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FacetSelect, FacetDeselect, FacetDeselectAll } from './facet-events';
export class FacetContainerComponent {
    constructor() {
        this.header = 'Selected:';
        this.clearTooltip = 'Clear All';
        this.emptyText = 'No Items';
        this.facets = [];
        this.facetsReorderable = false;
        this.facetsChange = new EventEmitter();
        this.events = new EventEmitter();
    }
    /**
     * @param {?} facet
     * @return {?}
     */
    selectFacet(facet) {
        // push the facet on to the list
        this.facets.push(facet);
        // update the two way binding
        this.facetsChange.emit(this.facets);
        // trigger event
        this.triggerEvent(new FacetSelect(facet));
    }
    /**
     * @param {?} facet
     * @return {?}
     */
    deselectFacet(facet) {
        // find the index of the item in the selected array
        let /** @type {?} */ idx = this.facets.findIndex(selectedFacet => facet === selectedFacet);
        // if match there was no match then finish
        if (idx === -1) {
            return;
        }
        // remove the last item
        this.facets.splice(idx, 1);
        // update the two way binding
        this.facetsChange.emit(this.facets);
        // trigger event
        this.triggerEvent(new FacetDeselect(facet));
    }
    /**
     * @return {?}
     */
    deselectAllFacets() {
        // empty the selected array
        this.facets = [];
        // update the two way binding
        this.facetsChange.emit(this.facets);
        // trigger event
        this.triggerEvent(new FacetDeselectAll());
    }
    /**
     * @param {?} event
     * @return {?}
     */
    triggerEvent(event) {
        this.events.next(event);
    }
}
FacetContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-facet-container',
                template: `<!-- Display Any Selected Facets -->
<div class="facets-selected-container">

    <!-- Display Title an Clear Button -->
    <div class="facets-selected-header-container">

        <!-- Show The Selected Text -->
        <span class="facets-selected-header-label">{{ header }}</span>

        <!-- Add a Clear Button -->
        <div class="facets-selected-clear-button" tabindex="0" [uxTooltip]="clearTooltip" placement="left" (click)="deselectAllFacets()"
            (keyup.enter)="deselectAllFacets()" *ngIf="facets.length > 0">

            <svg class="facets-selected-clear-graphic" viewBox="0 0 19 12" shape-rendering="geometricPrecision">
                <rect class="light-grey" x="0" y="2" width="7" height="2"></rect>
                <rect class="dark-grey" x="0" y="5" width="9" height="2"></rect>
                <rect class="light-grey" x="0" y="8" width="7" height="2"></rect>
                <path class="dark-grey" d="M9,1 h1 l9,9 v1 h-1 l-9,-9 v-1 Z"></path>
                <path class="dark-grey" d="M9,11 v-1 l9,-9 h1 v1 l-9,9 h-1 Z"></path>
            </svg>
        </div>

    </div>

    <!-- Display Tags For Selected Items -->
    <div class="facets-selected-list" uxReorderable [reorderingDisabled]="!facetsReorderable" [(reorderableModel)]="facets" (reorderableModelChange)="facetsChange.emit(facets)">

        <!-- Show Selected Tags -->
        <div class="facet-selected-tag" tabindex="0" *ngFor="let facet of facets" (mousedown)="$event.preventDefault()" (click)="deselectFacet(facet)" (keyup.enter)="deselectFacet(facet)"
             [uxReorderableModel]="facet">

            <!-- Display Label -->
            <span class="facet-selected-tag-label" uxReorderableHandle>{{ facet.title }}</span>

            <!-- Display Remove Icon -->
            <span class="hpe-icon hpe-close"></span>
        </div>

    </div>

    <!-- Show Message Here if No Facets Selected -->
    <p class="facets-selected-none-label" *ngIf="emptyText && facets.length === 0">{{ emptyText }}</p>

</div>

<!-- Any Facet Elements Should be Added Here By User -->
<div class="facets-region">
    <ng-content></ng-content>
</div>`
            },] },
];
/** @nocollapse */
FacetContainerComponent.propDecorators = {
    "header": [{ type: Input },],
    "clearTooltip": [{ type: Input },],
    "emptyText": [{ type: Input },],
    "facets": [{ type: Input },],
    "facetsReorderable": [{ type: Input },],
    "facetsChange": [{ type: Output },],
    "events": [{ type: Output },],
};
function FacetContainerComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FacetContainerComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FacetContainerComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    FacetContainerComponent.propDecorators;
    /** @type {?} */
    FacetContainerComponent.prototype.header;
    /** @type {?} */
    FacetContainerComponent.prototype.clearTooltip;
    /** @type {?} */
    FacetContainerComponent.prototype.emptyText;
    /** @type {?} */
    FacetContainerComponent.prototype.facets;
    /** @type {?} */
    FacetContainerComponent.prototype.facetsReorderable;
    /** @type {?} */
    FacetContainerComponent.prototype.facetsChange;
    /** @type {?} */
    FacetContainerComponent.prototype.events;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2ZhY2V0cy9mYWNldC1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBYyxXQUFXLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUF1RDFGLE1BQU07O3NCQUV3QixXQUFXOzRCQUNMLFdBQVc7eUJBQ2QsVUFBVTtzQkFDWixFQUFFO2lDQUNTLEtBQUs7NEJBRUssSUFBSSxZQUFZLEVBQVc7c0JBQzlCLElBQUksWUFBWSxFQUFjOzs7Ozs7SUFFM0UsV0FBVyxDQUFDLEtBQVk7O1FBRXBCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOztRQUd4QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7O1FBR3BDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUM3Qzs7Ozs7SUFFRCxhQUFhLENBQUMsS0FBWTs7UUFHdEIscUJBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsS0FBSyxLQUFLLGFBQWEsQ0FBQyxDQUFDOztRQUcxRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2IsTUFBTSxDQUFDO1NBQ1Y7O1FBR0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDOztRQUczQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7O1FBR3BDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUMvQzs7OztJQUVELGlCQUFpQjs7UUFHYixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQzs7UUFHakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDOztRQUdwQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO0tBQzdDOzs7OztJQUVPLFlBQVksQ0FBQyxLQUFpQjtRQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7OztZQTNHL0IsU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BZ0RQO2FBQ047Ozs7dUJBR0ksS0FBSzs2QkFDTCxLQUFLOzBCQUNMLEtBQUs7dUJBQ0wsS0FBSztrQ0FDTCxLQUFLOzZCQUVMLE1BQU07dUJBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZhY2V0RXZlbnQsIEZhY2V0U2VsZWN0LCBGYWNldERlc2VsZWN0LCBGYWNldERlc2VsZWN0QWxsIH0gZnJvbSAnLi9mYWNldC1ldmVudHMnO1xyXG5pbXBvcnQgeyBGYWNldCB9IGZyb20gJy4vbW9kZWxzL2ZhY2V0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd1eC1mYWNldC1jb250YWluZXInLFxyXG4gICAgdGVtcGxhdGU6IGA8IS0tIERpc3BsYXkgQW55IFNlbGVjdGVkIEZhY2V0cyAtLT5cclxuPGRpdiBjbGFzcz1cImZhY2V0cy1zZWxlY3RlZC1jb250YWluZXJcIj5cclxuXHJcbiAgICA8IS0tIERpc3BsYXkgVGl0bGUgYW4gQ2xlYXIgQnV0dG9uIC0tPlxyXG4gICAgPGRpdiBjbGFzcz1cImZhY2V0cy1zZWxlY3RlZC1oZWFkZXItY29udGFpbmVyXCI+XHJcblxyXG4gICAgICAgIDwhLS0gU2hvdyBUaGUgU2VsZWN0ZWQgVGV4dCAtLT5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImZhY2V0cy1zZWxlY3RlZC1oZWFkZXItbGFiZWxcIj57eyBoZWFkZXIgfX08L3NwYW4+XHJcblxyXG4gICAgICAgIDwhLS0gQWRkIGEgQ2xlYXIgQnV0dG9uIC0tPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmYWNldHMtc2VsZWN0ZWQtY2xlYXItYnV0dG9uXCIgdGFiaW5kZXg9XCIwXCIgW3V4VG9vbHRpcF09XCJjbGVhclRvb2x0aXBcIiBwbGFjZW1lbnQ9XCJsZWZ0XCIgKGNsaWNrKT1cImRlc2VsZWN0QWxsRmFjZXRzKClcIlxyXG4gICAgICAgICAgICAoa2V5dXAuZW50ZXIpPVwiZGVzZWxlY3RBbGxGYWNldHMoKVwiICpuZ0lmPVwiZmFjZXRzLmxlbmd0aCA+IDBcIj5cclxuXHJcbiAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJmYWNldHMtc2VsZWN0ZWQtY2xlYXItZ3JhcGhpY1wiIHZpZXdCb3g9XCIwIDAgMTkgMTJcIiBzaGFwZS1yZW5kZXJpbmc9XCJnZW9tZXRyaWNQcmVjaXNpb25cIj5cclxuICAgICAgICAgICAgICAgIDxyZWN0IGNsYXNzPVwibGlnaHQtZ3JleVwiIHg9XCIwXCIgeT1cIjJcIiB3aWR0aD1cIjdcIiBoZWlnaHQ9XCIyXCI+PC9yZWN0PlxyXG4gICAgICAgICAgICAgICAgPHJlY3QgY2xhc3M9XCJkYXJrLWdyZXlcIiB4PVwiMFwiIHk9XCI1XCIgd2lkdGg9XCI5XCIgaGVpZ2h0PVwiMlwiPjwvcmVjdD5cclxuICAgICAgICAgICAgICAgIDxyZWN0IGNsYXNzPVwibGlnaHQtZ3JleVwiIHg9XCIwXCIgeT1cIjhcIiB3aWR0aD1cIjdcIiBoZWlnaHQ9XCIyXCI+PC9yZWN0PlxyXG4gICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJkYXJrLWdyZXlcIiBkPVwiTTksMSBoMSBsOSw5IHYxIGgtMSBsLTksLTkgdi0xIFpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImRhcmstZ3JleVwiIGQ9XCJNOSwxMSB2LTEgbDksLTkgaDEgdjEgbC05LDkgaC0xIFpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDwhLS0gRGlzcGxheSBUYWdzIEZvciBTZWxlY3RlZCBJdGVtcyAtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJmYWNldHMtc2VsZWN0ZWQtbGlzdFwiIHV4UmVvcmRlcmFibGUgW3Jlb3JkZXJpbmdEaXNhYmxlZF09XCIhZmFjZXRzUmVvcmRlcmFibGVcIiBbKHJlb3JkZXJhYmxlTW9kZWwpXT1cImZhY2V0c1wiIChyZW9yZGVyYWJsZU1vZGVsQ2hhbmdlKT1cImZhY2V0c0NoYW5nZS5lbWl0KGZhY2V0cylcIj5cclxuXHJcbiAgICAgICAgPCEtLSBTaG93IFNlbGVjdGVkIFRhZ3MgLS0+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZhY2V0LXNlbGVjdGVkLXRhZ1wiIHRhYmluZGV4PVwiMFwiICpuZ0Zvcj1cImxldCBmYWNldCBvZiBmYWNldHNcIiAobW91c2Vkb3duKT1cIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCIgKGNsaWNrKT1cImRlc2VsZWN0RmFjZXQoZmFjZXQpXCIgKGtleXVwLmVudGVyKT1cImRlc2VsZWN0RmFjZXQoZmFjZXQpXCJcclxuICAgICAgICAgICAgIFt1eFJlb3JkZXJhYmxlTW9kZWxdPVwiZmFjZXRcIj5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gRGlzcGxheSBMYWJlbCAtLT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYWNldC1zZWxlY3RlZC10YWctbGFiZWxcIiB1eFJlb3JkZXJhYmxlSGFuZGxlPnt7IGZhY2V0LnRpdGxlIH19PC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgPCEtLSBEaXNwbGF5IFJlbW92ZSBJY29uIC0tPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhwZS1pY29uIGhwZS1jbG9zZVwiPjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8IS0tIFNob3cgTWVzc2FnZSBIZXJlIGlmIE5vIEZhY2V0cyBTZWxlY3RlZCAtLT5cclxuICAgIDxwIGNsYXNzPVwiZmFjZXRzLXNlbGVjdGVkLW5vbmUtbGFiZWxcIiAqbmdJZj1cImVtcHR5VGV4dCAmJiBmYWNldHMubGVuZ3RoID09PSAwXCI+e3sgZW1wdHlUZXh0IH19PC9wPlxyXG5cclxuPC9kaXY+XHJcblxyXG48IS0tIEFueSBGYWNldCBFbGVtZW50cyBTaG91bGQgYmUgQWRkZWQgSGVyZSBCeSBVc2VyIC0tPlxyXG48ZGl2IGNsYXNzPVwiZmFjZXRzLXJlZ2lvblwiPlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWNldENvbnRhaW5lckNvbXBvbmVudCB7XHJcblxyXG4gICAgQElucHV0KCkgaGVhZGVyOiBzdHJpbmcgPSAnU2VsZWN0ZWQ6JztcclxuICAgIEBJbnB1dCgpIGNsZWFyVG9vbHRpcDogc3RyaW5nID0gJ0NsZWFyIEFsbCc7XHJcbiAgICBASW5wdXQoKSBlbXB0eVRleHQ6IHN0cmluZyA9ICdObyBJdGVtcyc7XHJcbiAgICBASW5wdXQoKSBmYWNldHM6IEZhY2V0W10gPSBbXTtcclxuICAgIEBJbnB1dCgpIGZhY2V0c1Jlb3JkZXJhYmxlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgQE91dHB1dCgpIGZhY2V0c0NoYW5nZTogRXZlbnRFbWl0dGVyPEZhY2V0W10+ID0gbmV3IEV2ZW50RW1pdHRlcjxGYWNldFtdPigpO1xyXG4gICAgQE91dHB1dCgpIGV2ZW50czogRXZlbnRFbWl0dGVyPEZhY2V0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxGYWNldEV2ZW50PigpO1xyXG5cclxuICAgIHNlbGVjdEZhY2V0KGZhY2V0OiBGYWNldCk6IHZvaWQge1xyXG4gICAgICAgIC8vIHB1c2ggdGhlIGZhY2V0IG9uIHRvIHRoZSBsaXN0XHJcbiAgICAgICAgdGhpcy5mYWNldHMucHVzaChmYWNldCk7XHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgdHdvIHdheSBiaW5kaW5nXHJcbiAgICAgICAgdGhpcy5mYWNldHNDaGFuZ2UuZW1pdCh0aGlzLmZhY2V0cyk7XHJcblxyXG4gICAgICAgIC8vIHRyaWdnZXIgZXZlbnRcclxuICAgICAgICB0aGlzLnRyaWdnZXJFdmVudChuZXcgRmFjZXRTZWxlY3QoZmFjZXQpKTtcclxuICAgIH1cclxuXHJcbiAgICBkZXNlbGVjdEZhY2V0KGZhY2V0OiBGYWNldCk6IHZvaWQge1xyXG5cclxuICAgICAgICAvLyBmaW5kIHRoZSBpbmRleCBvZiB0aGUgaXRlbSBpbiB0aGUgc2VsZWN0ZWQgYXJyYXlcclxuICAgICAgICBsZXQgaWR4ID0gdGhpcy5mYWNldHMuZmluZEluZGV4KHNlbGVjdGVkRmFjZXQgPT4gZmFjZXQgPT09IHNlbGVjdGVkRmFjZXQpO1xyXG5cclxuICAgICAgICAvLyBpZiBtYXRjaCB0aGVyZSB3YXMgbm8gbWF0Y2ggdGhlbiBmaW5pc2hcclxuICAgICAgICBpZiAoaWR4ID09PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyByZW1vdmUgdGhlIGxhc3QgaXRlbVxyXG4gICAgICAgIHRoaXMuZmFjZXRzLnNwbGljZShpZHgsIDEpO1xyXG5cclxuICAgICAgICAvLyB1cGRhdGUgdGhlIHR3byB3YXkgYmluZGluZ1xyXG4gICAgICAgIHRoaXMuZmFjZXRzQ2hhbmdlLmVtaXQodGhpcy5mYWNldHMpO1xyXG5cclxuICAgICAgICAvLyB0cmlnZ2VyIGV2ZW50XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQobmV3IEZhY2V0RGVzZWxlY3QoZmFjZXQpKTtcclxuICAgIH1cclxuXHJcbiAgICBkZXNlbGVjdEFsbEZhY2V0cygpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gZW1wdHkgdGhlIHNlbGVjdGVkIGFycmF5XHJcbiAgICAgICAgdGhpcy5mYWNldHMgPSBbXTtcclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIHRoZSB0d28gd2F5IGJpbmRpbmdcclxuICAgICAgICB0aGlzLmZhY2V0c0NoYW5nZS5lbWl0KHRoaXMuZmFjZXRzKTtcclxuXHJcbiAgICAgICAgLy8gdHJpZ2dlciBldmVudFxyXG4gICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KG5ldyBGYWNldERlc2VsZWN0QWxsKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdHJpZ2dlckV2ZW50KGV2ZW50OiBGYWNldEV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5ldmVudHMubmV4dChldmVudCk7XHJcbiAgICB9XHJcbn0iXX0=