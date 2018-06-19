/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FacetSelect, FacetDeselect, FacetDeselectAll } from './facet-events';
var FacetContainerComponent = /** @class */ (function () {
    function FacetContainerComponent() {
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
    FacetContainerComponent.prototype.selectFacet = /**
     * @param {?} facet
     * @return {?}
     */
    function (facet) {
        // push the facet on to the list
        this.facets.push(facet);
        // update the two way binding
        this.facetsChange.emit(this.facets);
        // trigger event
        this.triggerEvent(new FacetSelect(facet));
    };
    /**
     * @param {?} facet
     * @return {?}
     */
    FacetContainerComponent.prototype.deselectFacet = /**
     * @param {?} facet
     * @return {?}
     */
    function (facet) {
        // find the index of the item in the selected array
        var /** @type {?} */ idx = this.facets.findIndex(function (selectedFacet) { return facet === selectedFacet; });
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
    };
    /**
     * @return {?}
     */
    FacetContainerComponent.prototype.deselectAllFacets = /**
     * @return {?}
     */
    function () {
        // empty the selected array
        this.facets = [];
        // update the two way binding
        this.facetsChange.emit(this.facets);
        // trigger event
        this.triggerEvent(new FacetDeselectAll());
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FacetContainerComponent.prototype.triggerEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.events.next(event);
    };
    FacetContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-facet-container',
                    template: "<!-- Display Any Selected Facets -->\n<div class=\"facets-selected-container\">\n\n    <!-- Display Title an Clear Button -->\n    <div class=\"facets-selected-header-container\">\n\n        <!-- Show The Selected Text -->\n        <span class=\"facets-selected-header-label\">{{ header }}</span>\n\n        <!-- Add a Clear Button -->\n        <div class=\"facets-selected-clear-button\" tabindex=\"0\" [uxTooltip]=\"clearTooltip\" placement=\"left\" (click)=\"deselectAllFacets()\"\n            (keyup.enter)=\"deselectAllFacets()\" *ngIf=\"facets.length > 0\">\n\n            <svg class=\"facets-selected-clear-graphic\" viewBox=\"0 0 19 12\" shape-rendering=\"geometricPrecision\">\n                <rect class=\"light-grey\" x=\"0\" y=\"2\" width=\"7\" height=\"2\"></rect>\n                <rect class=\"dark-grey\" x=\"0\" y=\"5\" width=\"9\" height=\"2\"></rect>\n                <rect class=\"light-grey\" x=\"0\" y=\"8\" width=\"7\" height=\"2\"></rect>\n                <path class=\"dark-grey\" d=\"M9,1 h1 l9,9 v1 h-1 l-9,-9 v-1 Z\"></path>\n                <path class=\"dark-grey\" d=\"M9,11 v-1 l9,-9 h1 v1 l-9,9 h-1 Z\"></path>\n            </svg>\n        </div>\n\n    </div>\n\n    <!-- Display Tags For Selected Items -->\n    <div class=\"facets-selected-list\" uxReorderable [reorderingDisabled]=\"!facetsReorderable\" [(reorderableModel)]=\"facets\" (reorderableModelChange)=\"facetsChange.emit(facets)\">\n\n        <!-- Show Selected Tags -->\n        <div class=\"facet-selected-tag\" tabindex=\"0\" *ngFor=\"let facet of facets\" (mousedown)=\"$event.preventDefault()\" (click)=\"deselectFacet(facet)\" (keyup.enter)=\"deselectFacet(facet)\"\n             [uxReorderableModel]=\"facet\">\n\n            <!-- Display Label -->\n            <span class=\"facet-selected-tag-label\" uxReorderableHandle>{{ facet.title }}</span>\n\n            <!-- Display Remove Icon -->\n            <span class=\"hpe-icon hpe-close\"></span>\n        </div>\n\n    </div>\n\n    <!-- Show Message Here if No Facets Selected -->\n    <p class=\"facets-selected-none-label\" *ngIf=\"emptyText && facets.length === 0\">{{ emptyText }}</p>\n\n</div>\n\n<!-- Any Facet Elements Should be Added Here By User -->\n<div class=\"facets-region\">\n    <ng-content></ng-content>\n</div>"
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
    return FacetContainerComponent;
}());
export { FacetContainerComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2ZhY2V0cy9mYWNldC1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBYyxXQUFXLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztzQkF5RDVELFdBQVc7NEJBQ0wsV0FBVzt5QkFDZCxVQUFVO3NCQUNaLEVBQUU7aUNBQ1MsS0FBSzs0QkFFSyxJQUFJLFlBQVksRUFBVztzQkFDOUIsSUFBSSxZQUFZLEVBQWM7Ozs7OztJQUUzRSw2Q0FBVzs7OztJQUFYLFVBQVksS0FBWTs7UUFFcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7O1FBR3hCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzs7UUFHcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQzdDOzs7OztJQUVELCtDQUFhOzs7O0lBQWIsVUFBYyxLQUFZOztRQUd0QixxQkFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxhQUFhLElBQUksT0FBQSxLQUFLLEtBQUssYUFBYSxFQUF2QixDQUF1QixDQUFDLENBQUM7O1FBRzFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDYixNQUFNLENBQUM7U0FDVjs7UUFHRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7O1FBRzNCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzs7UUFHcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQy9DOzs7O0lBRUQsbURBQWlCOzs7SUFBakI7O1FBR0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7O1FBR2pCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzs7UUFHcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLGdCQUFnQixFQUFFLENBQUMsQ0FBQztLQUM3Qzs7Ozs7SUFFTyw4Q0FBWTs7OztjQUFDLEtBQWlCO1FBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7Z0JBM0cvQixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsUUFBUSxFQUFFLGd2RUFnRFA7aUJBQ047Ozs7MkJBR0ksS0FBSztpQ0FDTCxLQUFLOzhCQUNMLEtBQUs7MkJBQ0wsS0FBSztzQ0FDTCxLQUFLO2lDQUVMLE1BQU07MkJBQ04sTUFBTTs7a0NBakVYOztTQXdEYSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGYWNldEV2ZW50LCBGYWNldFNlbGVjdCwgRmFjZXREZXNlbGVjdCwgRmFjZXREZXNlbGVjdEFsbCB9IGZyb20gJy4vZmFjZXQtZXZlbnRzJztcclxuaW1wb3J0IHsgRmFjZXQgfSBmcm9tICcuL21vZGVscy9mYWNldCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndXgtZmFjZXQtY29udGFpbmVyJyxcclxuICAgIHRlbXBsYXRlOiBgPCEtLSBEaXNwbGF5IEFueSBTZWxlY3RlZCBGYWNldHMgLS0+XHJcbjxkaXYgY2xhc3M9XCJmYWNldHMtc2VsZWN0ZWQtY29udGFpbmVyXCI+XHJcblxyXG4gICAgPCEtLSBEaXNwbGF5IFRpdGxlIGFuIENsZWFyIEJ1dHRvbiAtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJmYWNldHMtc2VsZWN0ZWQtaGVhZGVyLWNvbnRhaW5lclwiPlxyXG5cclxuICAgICAgICA8IS0tIFNob3cgVGhlIFNlbGVjdGVkIFRleHQgLS0+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmYWNldHMtc2VsZWN0ZWQtaGVhZGVyLWxhYmVsXCI+e3sgaGVhZGVyIH19PC9zcGFuPlxyXG5cclxuICAgICAgICA8IS0tIEFkZCBhIENsZWFyIEJ1dHRvbiAtLT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmFjZXRzLXNlbGVjdGVkLWNsZWFyLWJ1dHRvblwiIHRhYmluZGV4PVwiMFwiIFt1eFRvb2x0aXBdPVwiY2xlYXJUb29sdGlwXCIgcGxhY2VtZW50PVwibGVmdFwiIChjbGljayk9XCJkZXNlbGVjdEFsbEZhY2V0cygpXCJcclxuICAgICAgICAgICAgKGtleXVwLmVudGVyKT1cImRlc2VsZWN0QWxsRmFjZXRzKClcIiAqbmdJZj1cImZhY2V0cy5sZW5ndGggPiAwXCI+XHJcblxyXG4gICAgICAgICAgICA8c3ZnIGNsYXNzPVwiZmFjZXRzLXNlbGVjdGVkLWNsZWFyLWdyYXBoaWNcIiB2aWV3Qm94PVwiMCAwIDE5IDEyXCIgc2hhcGUtcmVuZGVyaW5nPVwiZ2VvbWV0cmljUHJlY2lzaW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8cmVjdCBjbGFzcz1cImxpZ2h0LWdyZXlcIiB4PVwiMFwiIHk9XCIyXCIgd2lkdGg9XCI3XCIgaGVpZ2h0PVwiMlwiPjwvcmVjdD5cclxuICAgICAgICAgICAgICAgIDxyZWN0IGNsYXNzPVwiZGFyay1ncmV5XCIgeD1cIjBcIiB5PVwiNVwiIHdpZHRoPVwiOVwiIGhlaWdodD1cIjJcIj48L3JlY3Q+XHJcbiAgICAgICAgICAgICAgICA8cmVjdCBjbGFzcz1cImxpZ2h0LWdyZXlcIiB4PVwiMFwiIHk9XCI4XCIgd2lkdGg9XCI3XCIgaGVpZ2h0PVwiMlwiPjwvcmVjdD5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiZGFyay1ncmV5XCIgZD1cIk05LDEgaDEgbDksOSB2MSBoLTEgbC05LC05IHYtMSBaXCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJkYXJrLWdyZXlcIiBkPVwiTTksMTEgdi0xIGw5LC05IGgxIHYxIGwtOSw5IGgtMSBaXCI+PC9wYXRoPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8IS0tIERpc3BsYXkgVGFncyBGb3IgU2VsZWN0ZWQgSXRlbXMgLS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZmFjZXRzLXNlbGVjdGVkLWxpc3RcIiB1eFJlb3JkZXJhYmxlIFtyZW9yZGVyaW5nRGlzYWJsZWRdPVwiIWZhY2V0c1Jlb3JkZXJhYmxlXCIgWyhyZW9yZGVyYWJsZU1vZGVsKV09XCJmYWNldHNcIiAocmVvcmRlcmFibGVNb2RlbENoYW5nZSk9XCJmYWNldHNDaGFuZ2UuZW1pdChmYWNldHMpXCI+XHJcblxyXG4gICAgICAgIDwhLS0gU2hvdyBTZWxlY3RlZCBUYWdzIC0tPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmYWNldC1zZWxlY3RlZC10YWdcIiB0YWJpbmRleD1cIjBcIiAqbmdGb3I9XCJsZXQgZmFjZXQgb2YgZmFjZXRzXCIgKG1vdXNlZG93bik9XCIkZXZlbnQucHJldmVudERlZmF1bHQoKVwiIChjbGljayk9XCJkZXNlbGVjdEZhY2V0KGZhY2V0KVwiIChrZXl1cC5lbnRlcik9XCJkZXNlbGVjdEZhY2V0KGZhY2V0KVwiXHJcbiAgICAgICAgICAgICBbdXhSZW9yZGVyYWJsZU1vZGVsXT1cImZhY2V0XCI+XHJcblxyXG4gICAgICAgICAgICA8IS0tIERpc3BsYXkgTGFiZWwgLS0+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmFjZXQtc2VsZWN0ZWQtdGFnLWxhYmVsXCIgdXhSZW9yZGVyYWJsZUhhbmRsZT57eyBmYWNldC50aXRsZSB9fTwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gRGlzcGxheSBSZW1vdmUgSWNvbiAtLT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJocGUtaWNvbiBocGUtY2xvc2VcIj48L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPCEtLSBTaG93IE1lc3NhZ2UgSGVyZSBpZiBObyBGYWNldHMgU2VsZWN0ZWQgLS0+XHJcbiAgICA8cCBjbGFzcz1cImZhY2V0cy1zZWxlY3RlZC1ub25lLWxhYmVsXCIgKm5nSWY9XCJlbXB0eVRleHQgJiYgZmFjZXRzLmxlbmd0aCA9PT0gMFwiPnt7IGVtcHR5VGV4dCB9fTwvcD5cclxuXHJcbjwvZGl2PlxyXG5cclxuPCEtLSBBbnkgRmFjZXQgRWxlbWVudHMgU2hvdWxkIGJlIEFkZGVkIEhlcmUgQnkgVXNlciAtLT5cclxuPGRpdiBjbGFzcz1cImZhY2V0cy1yZWdpb25cIj5cclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFjZXRDb250YWluZXJDb21wb25lbnQge1xyXG5cclxuICAgIEBJbnB1dCgpIGhlYWRlcjogc3RyaW5nID0gJ1NlbGVjdGVkOic7XHJcbiAgICBASW5wdXQoKSBjbGVhclRvb2x0aXA6IHN0cmluZyA9ICdDbGVhciBBbGwnO1xyXG4gICAgQElucHV0KCkgZW1wdHlUZXh0OiBzdHJpbmcgPSAnTm8gSXRlbXMnO1xyXG4gICAgQElucHV0KCkgZmFjZXRzOiBGYWNldFtdID0gW107XHJcbiAgICBASW5wdXQoKSBmYWNldHNSZW9yZGVyYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIEBPdXRwdXQoKSBmYWNldHNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxGYWNldFtdPiA9IG5ldyBFdmVudEVtaXR0ZXI8RmFjZXRbXT4oKTtcclxuICAgIEBPdXRwdXQoKSBldmVudHM6IEV2ZW50RW1pdHRlcjxGYWNldEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8RmFjZXRFdmVudD4oKTtcclxuXHJcbiAgICBzZWxlY3RGYWNldChmYWNldDogRmFjZXQpOiB2b2lkIHtcclxuICAgICAgICAvLyBwdXNoIHRoZSBmYWNldCBvbiB0byB0aGUgbGlzdFxyXG4gICAgICAgIHRoaXMuZmFjZXRzLnB1c2goZmFjZXQpO1xyXG5cclxuICAgICAgICAvLyB1cGRhdGUgdGhlIHR3byB3YXkgYmluZGluZ1xyXG4gICAgICAgIHRoaXMuZmFjZXRzQ2hhbmdlLmVtaXQodGhpcy5mYWNldHMpO1xyXG5cclxuICAgICAgICAvLyB0cmlnZ2VyIGV2ZW50XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQobmV3IEZhY2V0U2VsZWN0KGZhY2V0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzZWxlY3RGYWNldChmYWNldDogRmFjZXQpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gZmluZCB0aGUgaW5kZXggb2YgdGhlIGl0ZW0gaW4gdGhlIHNlbGVjdGVkIGFycmF5XHJcbiAgICAgICAgbGV0IGlkeCA9IHRoaXMuZmFjZXRzLmZpbmRJbmRleChzZWxlY3RlZEZhY2V0ID0+IGZhY2V0ID09PSBzZWxlY3RlZEZhY2V0KTtcclxuXHJcbiAgICAgICAgLy8gaWYgbWF0Y2ggdGhlcmUgd2FzIG5vIG1hdGNoIHRoZW4gZmluaXNoXHJcbiAgICAgICAgaWYgKGlkeCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcmVtb3ZlIHRoZSBsYXN0IGl0ZW1cclxuICAgICAgICB0aGlzLmZhY2V0cy5zcGxpY2UoaWR4LCAxKTtcclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIHRoZSB0d28gd2F5IGJpbmRpbmdcclxuICAgICAgICB0aGlzLmZhY2V0c0NoYW5nZS5lbWl0KHRoaXMuZmFjZXRzKTtcclxuXHJcbiAgICAgICAgLy8gdHJpZ2dlciBldmVudFxyXG4gICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KG5ldyBGYWNldERlc2VsZWN0KGZhY2V0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzZWxlY3RBbGxGYWNldHMoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIC8vIGVtcHR5IHRoZSBzZWxlY3RlZCBhcnJheVxyXG4gICAgICAgIHRoaXMuZmFjZXRzID0gW107XHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgdHdvIHdheSBiaW5kaW5nXHJcbiAgICAgICAgdGhpcy5mYWNldHNDaGFuZ2UuZW1pdCh0aGlzLmZhY2V0cyk7XHJcblxyXG4gICAgICAgIC8vIHRyaWdnZXIgZXZlbnRcclxuICAgICAgICB0aGlzLnRyaWdnZXJFdmVudChuZXcgRmFjZXREZXNlbGVjdEFsbCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRyaWdnZXJFdmVudChldmVudDogRmFjZXRFdmVudCkge1xyXG4gICAgICAgIHRoaXMuZXZlbnRzLm5leHQoZXZlbnQpO1xyXG4gICAgfVxyXG59Il19