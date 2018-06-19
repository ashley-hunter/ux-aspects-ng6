/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
var FilterContainerComponent = /** @class */ (function () {
    function FilterContainerComponent() {
        this.filters = [];
        this.filtersChange = new EventEmitter();
        this.events = new EventEmitter();
    }
    /**
     * @param {?} filter
     * @return {?}
     */
    FilterContainerComponent.prototype.addFilter = /**
     * @param {?} filter
     * @return {?}
     */
    function (filter) {
        this.filters.push(filter);
        this.events.next(new FilterAddEvent(filter));
        this.filtersChange.emit(this.filters);
    };
    /**
     * @param {?} filter
     * @return {?}
     */
    FilterContainerComponent.prototype.removeFilter = /**
     * @param {?} filter
     * @return {?}
     */
    function (filter) {
        var /** @type {?} */ idx = this.filters.findIndex(function (filters) { return filters === filter; });
        if (idx !== -1) {
            this.filters.splice(idx, 1);
            this.events.next(new FilterRemoveEvent(filter));
            this.filtersChange.emit(this.filters);
        }
    };
    /**
     * @return {?}
     */
    FilterContainerComponent.prototype.removeAll = /**
     * @return {?}
     */
    function () {
        this.events.next(new FilterRemoveAllEvent());
    };
    FilterContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-filter-container',
                    template: "<ng-content></ng-content>\n\n<!-- Add a Clear Button -->\n<div class=\"filter-selected-clear-button\" *ngIf=\"filters.length > 0\" [uxTooltip]=\"clearTooltip || 'Clear All'\" (click)=\"removeAll()\">\n\n    <svg class=\"filter-selected-clear-graphic\" width=\"19\" height=\"12\" viewBox=\"0 0 19 12\" shape-rendering=\"geometricPrecision\">\n        <rect class=\"light-grey\" x=\"0\" y=\"2\" width=\"7\" height=\"2\"></rect>\n        <rect class=\"dark-grey\" x=\"0\" y=\"5\" width=\"9\" height=\"2\"></rect>\n        <rect class=\"light-grey\" x=\"0\" y=\"8\" width=\"7\" height=\"2\"></rect>\n        <path class=\"dark-grey\" d=\"M9,1 h1 l9,9 v1 h-1 l-9,-9 v-1 Z\"></path>\n        <path class=\"dark-grey\" d=\"M9,11 v-1 l9,-9 h1 v1 l-9,9 h-1 Z\"></path>\n    </svg>\n\n</div>"
                },] },
    ];
    /** @nocollapse */
    FilterContainerComponent.propDecorators = {
        "filters": [{ type: Input },],
        "clearTooltip": [{ type: Input },],
        "filtersChange": [{ type: Output },],
        "events": [{ type: Output },],
    };
    return FilterContainerComponent;
}());
export { FilterContainerComponent };
function FilterContainerComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FilterContainerComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FilterContainerComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    FilterContainerComponent.propDecorators;
    /** @type {?} */
    FilterContainerComponent.prototype.filters;
    /** @type {?} */
    FilterContainerComponent.prototype.clearTooltip;
    /** @type {?} */
    FilterContainerComponent.prototype.filtersChange;
    /** @type {?} */
    FilterContainerComponent.prototype.events;
}
/**
 * @record
 */
export function Filter() { }
function Filter_tsickle_Closure_declarations() {
    /** @type {?} */
    Filter.prototype.group;
    /** @type {?} */
    Filter.prototype.title;
    /** @type {?} */
    Filter.prototype.name;
    /** @type {?|undefined} */
    Filter.prototype.initial;
}
var FilterAddEvent = /** @class */ (function () {
    function FilterAddEvent(filter) {
        this.filter = filter;
    }
    return FilterAddEvent;
}());
export { FilterAddEvent };
function FilterAddEvent_tsickle_Closure_declarations() {
    /** @type {?} */
    FilterAddEvent.prototype.filter;
}
var FilterRemoveEvent = /** @class */ (function () {
    function FilterRemoveEvent(filter) {
        this.filter = filter;
    }
    return FilterRemoveEvent;
}());
export { FilterRemoveEvent };
function FilterRemoveEvent_tsickle_Closure_declarations() {
    /** @type {?} */
    FilterRemoveEvent.prototype.filter;
}
var FilterRemoveAllEvent = /** @class */ (function () {
    function FilterRemoveAllEvent() {
    }
    return FilterRemoveAllEvent;
}());
export { FilterRemoveAllEvent };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9maWx0ZXJzL2ZpbHRlci1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7dUJBcUJ0QyxFQUFFOzZCQUVtQixJQUFJLFlBQVksRUFBWTtzQkFDaEMsSUFBSSxZQUFZLEVBQWU7Ozs7OztJQUc3RSw0Q0FBUzs7OztJQUFULFVBQVUsTUFBYztRQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUN6Qzs7Ozs7SUFFRCwrQ0FBWTs7OztJQUFaLFVBQWEsTUFBYztRQUN2QixxQkFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLEtBQUssTUFBTSxFQUFsQixDQUFrQixDQUFDLENBQUM7UUFFaEUsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDaEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3pDO0tBQ0o7Ozs7SUFFRCw0Q0FBUzs7O0lBQVQ7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLG9CQUFvQixFQUFFLENBQUMsQ0FBQztLQUNoRDs7Z0JBM0NKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUUsK3dCQWFQO2lCQUNOOzs7OzRCQUdJLEtBQUs7aUNBQ0wsS0FBSztrQ0FDTCxNQUFNOzJCQUNOLE1BQU07O21DQXhCWDs7U0FtQmEsd0JBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUNyQyxJQUFBO0lBQ0ksd0JBQW1CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0tBQUk7eUJBekR6QztJQTBEQyxDQUFBO0FBRkQsMEJBRUM7Ozs7O0FBRUQsSUFBQTtJQUNJLDJCQUFtQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtLQUFJOzRCQTdEekM7SUE4REMsQ0FBQTtBQUZELDZCQUVDOzs7OztBQUVELElBQUE7OzsrQkFoRUE7SUFpRUMsQ0FBQTtBQURELGdDQUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd1eC1maWx0ZXItY29udGFpbmVyJyxcclxuICAgIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG5cclxuPCEtLSBBZGQgYSBDbGVhciBCdXR0b24gLS0+XHJcbjxkaXYgY2xhc3M9XCJmaWx0ZXItc2VsZWN0ZWQtY2xlYXItYnV0dG9uXCIgKm5nSWY9XCJmaWx0ZXJzLmxlbmd0aCA+IDBcIiBbdXhUb29sdGlwXT1cImNsZWFyVG9vbHRpcCB8fCAnQ2xlYXIgQWxsJ1wiIChjbGljayk9XCJyZW1vdmVBbGwoKVwiPlxyXG5cclxuICAgIDxzdmcgY2xhc3M9XCJmaWx0ZXItc2VsZWN0ZWQtY2xlYXItZ3JhcGhpY1wiIHdpZHRoPVwiMTlcIiBoZWlnaHQ9XCIxMlwiIHZpZXdCb3g9XCIwIDAgMTkgMTJcIiBzaGFwZS1yZW5kZXJpbmc9XCJnZW9tZXRyaWNQcmVjaXNpb25cIj5cclxuICAgICAgICA8cmVjdCBjbGFzcz1cImxpZ2h0LWdyZXlcIiB4PVwiMFwiIHk9XCIyXCIgd2lkdGg9XCI3XCIgaGVpZ2h0PVwiMlwiPjwvcmVjdD5cclxuICAgICAgICA8cmVjdCBjbGFzcz1cImRhcmstZ3JleVwiIHg9XCIwXCIgeT1cIjVcIiB3aWR0aD1cIjlcIiBoZWlnaHQ9XCIyXCI+PC9yZWN0PlxyXG4gICAgICAgIDxyZWN0IGNsYXNzPVwibGlnaHQtZ3JleVwiIHg9XCIwXCIgeT1cIjhcIiB3aWR0aD1cIjdcIiBoZWlnaHQ9XCIyXCI+PC9yZWN0PlxyXG4gICAgICAgIDxwYXRoIGNsYXNzPVwiZGFyay1ncmV5XCIgZD1cIk05LDEgaDEgbDksOSB2MSBoLTEgbC05LC05IHYtMSBaXCI+PC9wYXRoPlxyXG4gICAgICAgIDxwYXRoIGNsYXNzPVwiZGFyay1ncmV5XCIgZD1cIk05LDExIHYtMSBsOSwtOSBoMSB2MSBsLTksOSBoLTEgWlwiPjwvcGF0aD5cclxuICAgIDwvc3ZnPlxyXG5cclxuPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmlsdGVyQ29udGFpbmVyQ29tcG9uZW50IHtcclxuXHJcbiAgICBASW5wdXQoKSBmaWx0ZXJzOiBGaWx0ZXJbXSA9IFtdO1xyXG4gICAgQElucHV0KCkgY2xlYXJUb29sdGlwOiBzdHJpbmc7XHJcbiAgICBAT3V0cHV0KCkgZmlsdGVyc0NoYW5nZTogRXZlbnRFbWl0dGVyPEZpbHRlcltdPiA9IG5ldyBFdmVudEVtaXR0ZXI8RmlsdGVyW10+KCk7XHJcbiAgICBAT3V0cHV0KCkgZXZlbnRzOiBFdmVudEVtaXR0ZXI8RmlsdGVyRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxGaWx0ZXJFdmVudD4oKTtcclxuXHJcblxyXG4gICAgYWRkRmlsdGVyKGZpbHRlcjogRmlsdGVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJzLnB1c2goZmlsdGVyKTtcclxuICAgICAgICB0aGlzLmV2ZW50cy5uZXh0KG5ldyBGaWx0ZXJBZGRFdmVudChmaWx0ZXIpKTtcclxuICAgICAgICB0aGlzLmZpbHRlcnNDaGFuZ2UuZW1pdCh0aGlzLmZpbHRlcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUZpbHRlcihmaWx0ZXI6IEZpbHRlcik6IHZvaWQge1xyXG4gICAgICAgIGxldCBpZHggPSB0aGlzLmZpbHRlcnMuZmluZEluZGV4KGZpbHRlcnMgPT4gZmlsdGVycyA9PT0gZmlsdGVyKTtcclxuXHJcbiAgICAgICAgaWYgKGlkeCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJzLnNwbGljZShpZHgsIDEpO1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50cy5uZXh0KG5ldyBGaWx0ZXJSZW1vdmVFdmVudChmaWx0ZXIpKTtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJzQ2hhbmdlLmVtaXQodGhpcy5maWx0ZXJzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQWxsKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZXZlbnRzLm5leHQobmV3IEZpbHRlclJlbW92ZUFsbEV2ZW50KCkpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGaWx0ZXIge1xyXG4gICAgZ3JvdXA6IHN0cmluZztcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBpbml0aWFsPzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpbHRlckFkZEV2ZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBmaWx0ZXI6IEZpbHRlcikge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpbHRlclJlbW92ZUV2ZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBmaWx0ZXI6IEZpbHRlcikge31cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpbHRlclJlbW92ZUFsbEV2ZW50IHtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgRmlsdGVyRXZlbnQgPSBGaWx0ZXJBZGRFdmVudCB8IEZpbHRlclJlbW92ZUV2ZW50IHwgRmlsdGVyUmVtb3ZlQWxsRXZlbnQ7Il19