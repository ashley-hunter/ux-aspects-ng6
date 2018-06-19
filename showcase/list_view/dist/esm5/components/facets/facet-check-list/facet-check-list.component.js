/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { FacetBaseComponent } from '../base/facet-base/facet-base.component';
var FacetCheckListComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FacetCheckListComponent, _super);
    function FacetCheckListComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.facets = [];
        _this.scrollbar = true;
        _this.expanded = true;
        return _this;
    }
    FacetCheckListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-facet-check-list',
                    template: "<ux-facet-header [header]=\"header\" [(expanded)]=\"expanded\"></ux-facet-header>\n\n<!-- Create a container which will show when section is expanded -->\n<div class=\"facet-check-list-container\" [class.facet-check-list-scrollbar]=\"scrollbar\" *ngIf=\"expanded\">\n\n    <!-- Iterate through each possible facet -->\n    <div class=\"facet-check-list-item\" *ngFor=\"let facet of facets\" [class.facet-active]=\"isFacetSelected(facet)\" tabindex=\"0\"\n        (click)=\"toggleFacetSelection(facet)\" (keyup.enter)=\"toggleFacetSelection(facet)\" [class.disabled]=\"facet.disabled\">\n\n        <!-- Show check icon to indicate the state -->\n        <span class=\"facet-check-list-item-check\">\n            <span class=\"hpe-icon hpe-active\"></span>\n        </span>\n\n        <!-- Display the title -->\n        <span class=\"facet-check-list-item-title\">{{ facet.title }}</span>\n\n        <!-- Display the count if specified -->\n        <span class=\"facet-check-list-item-count\" *ngIf=\"facet.count !== undefined\">({{ facet.count }})</span>\n    </div>\n</div>"
                },] },
    ];
    /** @nocollapse */
    FacetCheckListComponent.propDecorators = {
        "facets": [{ type: Input },],
        "header": [{ type: Input },],
        "scrollbar": [{ type: Input },],
        "expanded": [{ type: Input },],
    };
    return FacetCheckListComponent;
}(FacetBaseComponent));
export { FacetCheckListComponent };
function FacetCheckListComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FacetCheckListComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FacetCheckListComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    FacetCheckListComponent.propDecorators;
    /** @type {?} */
    FacetCheckListComponent.prototype.facets;
    /** @type {?} */
    FacetCheckListComponent.prototype.header;
    /** @type {?} */
    FacetCheckListComponent.prototype.scrollbar;
    /** @type {?} */
    FacetCheckListComponent.prototype.expanded;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtY2hlY2stbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9mYWNldHMvZmFjZXQtY2hlY2stbGlzdC9mYWNldC1jaGVjay1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOztJQTJCaEMsbURBQWtCOzs7dUJBRWhDLEVBQUU7MEJBRUMsSUFBSTt5QkFDTCxJQUFJOzs7O2dCQTdCcEMsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFFBQVEsRUFBRSxvakNBb0JQO2lCQUNOOzs7OzJCQUdJLEtBQUs7MkJBQ0wsS0FBSzs4QkFDTCxLQUFLOzZCQUNMLEtBQUs7O2tDQWpDVjtFQTRCNkMsa0JBQWtCO1NBQWxELHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmFjZXRCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS9mYWNldC1iYXNlL2ZhY2V0LWJhc2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRmFjZXQgfSBmcm9tICcuLi9tb2RlbHMvZmFjZXQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3V4LWZhY2V0LWNoZWNrLWxpc3QnLFxyXG4gICAgdGVtcGxhdGU6IGA8dXgtZmFjZXQtaGVhZGVyIFtoZWFkZXJdPVwiaGVhZGVyXCIgWyhleHBhbmRlZCldPVwiZXhwYW5kZWRcIj48L3V4LWZhY2V0LWhlYWRlcj5cclxuXHJcbjwhLS0gQ3JlYXRlIGEgY29udGFpbmVyIHdoaWNoIHdpbGwgc2hvdyB3aGVuIHNlY3Rpb24gaXMgZXhwYW5kZWQgLS0+XHJcbjxkaXYgY2xhc3M9XCJmYWNldC1jaGVjay1saXN0LWNvbnRhaW5lclwiIFtjbGFzcy5mYWNldC1jaGVjay1saXN0LXNjcm9sbGJhcl09XCJzY3JvbGxiYXJcIiAqbmdJZj1cImV4cGFuZGVkXCI+XHJcblxyXG4gICAgPCEtLSBJdGVyYXRlIHRocm91Z2ggZWFjaCBwb3NzaWJsZSBmYWNldCAtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJmYWNldC1jaGVjay1saXN0LWl0ZW1cIiAqbmdGb3I9XCJsZXQgZmFjZXQgb2YgZmFjZXRzXCIgW2NsYXNzLmZhY2V0LWFjdGl2ZV09XCJpc0ZhY2V0U2VsZWN0ZWQoZmFjZXQpXCIgdGFiaW5kZXg9XCIwXCJcclxuICAgICAgICAoY2xpY2spPVwidG9nZ2xlRmFjZXRTZWxlY3Rpb24oZmFjZXQpXCIgKGtleXVwLmVudGVyKT1cInRvZ2dsZUZhY2V0U2VsZWN0aW9uKGZhY2V0KVwiIFtjbGFzcy5kaXNhYmxlZF09XCJmYWNldC5kaXNhYmxlZFwiPlxyXG5cclxuICAgICAgICA8IS0tIFNob3cgY2hlY2sgaWNvbiB0byBpbmRpY2F0ZSB0aGUgc3RhdGUgLS0+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmYWNldC1jaGVjay1saXN0LWl0ZW0tY2hlY2tcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJocGUtaWNvbiBocGUtYWN0aXZlXCI+PC9zcGFuPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgPCEtLSBEaXNwbGF5IHRoZSB0aXRsZSAtLT5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImZhY2V0LWNoZWNrLWxpc3QtaXRlbS10aXRsZVwiPnt7IGZhY2V0LnRpdGxlIH19PC9zcGFuPlxyXG5cclxuICAgICAgICA8IS0tIERpc3BsYXkgdGhlIGNvdW50IGlmIHNwZWNpZmllZCAtLT5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImZhY2V0LWNoZWNrLWxpc3QtaXRlbS1jb3VudFwiICpuZ0lmPVwiZmFjZXQuY291bnQgIT09IHVuZGVmaW5lZFwiPih7eyBmYWNldC5jb3VudCB9fSk8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmFjZXRDaGVja0xpc3RDb21wb25lbnQgZXh0ZW5kcyBGYWNldEJhc2VDb21wb25lbnQge1xyXG5cclxuICAgIEBJbnB1dCgpIGZhY2V0czogRmFjZXRbXSA9IFtdO1xyXG4gICAgQElucHV0KCkgaGVhZGVyOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBzY3JvbGxiYXI6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgQElucHV0KCkgZXhwYW5kZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG59Il19