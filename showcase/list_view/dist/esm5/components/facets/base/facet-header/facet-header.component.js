/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Output, EventEmitter, Input } from '@angular/core';
var FacetHeaderComponent = /** @class */ (function () {
    function FacetHeaderComponent() {
        this.canExpand = true;
        this.expanded = true;
        this.expandedChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    FacetHeaderComponent.prototype.toggleExpand = /**
     * @return {?}
     */
    function () {
        // if not expandable then do nothing
        if (this.canExpand) {
            this.expanded = !this.expanded;
            this.expandedChange.emit(this.expanded);
        }
    };
    FacetHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-facet-header',
                    template: "<span class=\"facet-header-title\">{{ header }}</span>\n<span class=\"hpe-icon\" [class.hpe-down]=\"expanded\" [class.hpe-previous]=\"!expanded\" *ngIf=\"canExpand\"></span>",
                    host: {
                        'tabindex': '0',
                        '(click)': 'toggleExpand()',
                        '(keyup.enter)': 'toggleExpand()'
                    }
                },] },
    ];
    /** @nocollapse */
    FacetHeaderComponent.propDecorators = {
        "header": [{ type: Input },],
        "canExpand": [{ type: Input },],
        "expanded": [{ type: Input },],
        "expandedChange": [{ type: Output },],
    };
    return FacetHeaderComponent;
}());
export { FacetHeaderComponent };
function FacetHeaderComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FacetHeaderComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FacetHeaderComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    FacetHeaderComponent.propDecorators;
    /** @type {?} */
    FacetHeaderComponent.prototype.header;
    /** @type {?} */
    FacetHeaderComponent.prototype.canExpand;
    /** @type {?} */
    FacetHeaderComponent.prototype.expanded;
    /** @type {?} */
    FacetHeaderComponent.prototype.expandedChange;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2ZhY2V0cy9iYXNlL2ZhY2V0LWhlYWRlci9mYWNldC1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7eUJBZXJDLElBQUk7d0JBQ0wsSUFBSTs4QkFDaUIsSUFBSSxZQUFZLEVBQVc7Ozs7O0lBRTdFLDJDQUFZOzs7SUFBWjs7UUFHSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUMvQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDM0M7S0FDSjs7Z0JBeEJKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsK0tBQ2dHO29CQUMxRyxJQUFJLEVBQUU7d0JBQ0YsVUFBVSxFQUFFLEdBQUc7d0JBQ2YsU0FBUyxFQUFFLGdCQUFnQjt3QkFDM0IsZUFBZSxFQUFFLGdCQUFnQjtxQkFDcEM7aUJBQ0o7Ozs7MkJBR0ksS0FBSzs4QkFDTCxLQUFLOzZCQUNMLEtBQUs7bUNBQ0wsTUFBTTs7K0JBakJYOztTQVlhLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndXgtZmFjZXQtaGVhZGVyJyxcclxuICAgIHRlbXBsYXRlOiBgPHNwYW4gY2xhc3M9XCJmYWNldC1oZWFkZXItdGl0bGVcIj57eyBoZWFkZXIgfX08L3NwYW4+XHJcbjxzcGFuIGNsYXNzPVwiaHBlLWljb25cIiBbY2xhc3MuaHBlLWRvd25dPVwiZXhwYW5kZWRcIiBbY2xhc3MuaHBlLXByZXZpb3VzXT1cIiFleHBhbmRlZFwiICpuZ0lmPVwiY2FuRXhwYW5kXCI+PC9zcGFuPmAsXHJcbiAgICBob3N0OiB7XHJcbiAgICAgICAgJ3RhYmluZGV4JzogJzAnLFxyXG4gICAgICAgICcoY2xpY2spJzogJ3RvZ2dsZUV4cGFuZCgpJyxcclxuICAgICAgICAnKGtleXVwLmVudGVyKSc6ICd0b2dnbGVFeHBhbmQoKSdcclxuICAgIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZhY2V0SGVhZGVyQ29tcG9uZW50IHtcclxuXHJcbiAgICBASW5wdXQoKSBoZWFkZXI6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGNhbkV4cGFuZDogYm9vbGVhbiA9IHRydWU7ICAgIFxyXG4gICAgQElucHV0KCkgZXhwYW5kZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgQE91dHB1dCgpIGV4cGFuZGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gICAgdG9nZ2xlRXhwYW5kKCk6IHZvaWQge1xyXG5cclxuICAgICAgICAvLyBpZiBub3QgZXhwYW5kYWJsZSB0aGVuIGRvIG5vdGhpbmdcclxuICAgICAgICBpZiAodGhpcy5jYW5FeHBhbmQpIHtcclxuICAgICAgICAgICAgdGhpcy5leHBhbmRlZCA9ICF0aGlzLmV4cGFuZGVkO1xyXG4gICAgICAgICAgICB0aGlzLmV4cGFuZGVkQ2hhbmdlLmVtaXQodGhpcy5leHBhbmRlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19