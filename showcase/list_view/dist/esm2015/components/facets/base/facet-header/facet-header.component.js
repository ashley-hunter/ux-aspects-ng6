/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Output, EventEmitter, Input } from '@angular/core';
export class FacetHeaderComponent {
    constructor() {
        this.canExpand = true;
        this.expanded = true;
        this.expandedChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    toggleExpand() {
        // if not expandable then do nothing
        if (this.canExpand) {
            this.expanded = !this.expanded;
            this.expandedChange.emit(this.expanded);
        }
    }
}
FacetHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-facet-header',
                template: `<span class="facet-header-title">{{ header }}</span>
<span class="hpe-icon" [class.hpe-down]="expanded" [class.hpe-previous]="!expanded" *ngIf="canExpand"></span>`,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2ZhY2V0cy9iYXNlL2ZhY2V0LWhlYWRlci9mYWNldC1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBWXZFLE1BQU07O3lCQUc0QixJQUFJO3dCQUNMLElBQUk7OEJBQ2lCLElBQUksWUFBWSxFQUFXOzs7OztJQUU3RSxZQUFZOztRQUdSLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMzQztLQUNKOzs7WUF4QkosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRTs4R0FDZ0c7Z0JBQzFHLElBQUksRUFBRTtvQkFDRixVQUFVLEVBQUUsR0FBRztvQkFDZixTQUFTLEVBQUUsZ0JBQWdCO29CQUMzQixlQUFlLEVBQUUsZ0JBQWdCO2lCQUNwQzthQUNKOzs7O3VCQUdJLEtBQUs7MEJBQ0wsS0FBSzt5QkFDTCxLQUFLOytCQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3V4LWZhY2V0LWhlYWRlcicsXHJcbiAgICB0ZW1wbGF0ZTogYDxzcGFuIGNsYXNzPVwiZmFjZXQtaGVhZGVyLXRpdGxlXCI+e3sgaGVhZGVyIH19PC9zcGFuPlxyXG48c3BhbiBjbGFzcz1cImhwZS1pY29uXCIgW2NsYXNzLmhwZS1kb3duXT1cImV4cGFuZGVkXCIgW2NsYXNzLmhwZS1wcmV2aW91c109XCIhZXhwYW5kZWRcIiAqbmdJZj1cImNhbkV4cGFuZFwiPjwvc3Bhbj5gLFxyXG4gICAgaG9zdDoge1xyXG4gICAgICAgICd0YWJpbmRleCc6ICcwJyxcclxuICAgICAgICAnKGNsaWNrKSc6ICd0b2dnbGVFeHBhbmQoKScsXHJcbiAgICAgICAgJyhrZXl1cC5lbnRlciknOiAndG9nZ2xlRXhwYW5kKCknXHJcbiAgICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGYWNldEhlYWRlckNvbXBvbmVudCB7XHJcblxyXG4gICAgQElucHV0KCkgaGVhZGVyOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBjYW5FeHBhbmQ6IGJvb2xlYW4gPSB0cnVlOyAgICBcclxuICAgIEBJbnB1dCgpIGV4cGFuZGVkOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIEBPdXRwdXQoKSBleHBhbmRlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICAgIHRvZ2dsZUV4cGFuZCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gaWYgbm90IGV4cGFuZGFibGUgdGhlbiBkbyBub3RoaW5nXHJcbiAgICAgICAgaWYgKHRoaXMuY2FuRXhwYW5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kZWQgPSAhdGhpcy5leHBhbmRlZDtcclxuICAgICAgICAgICAgdGhpcy5leHBhbmRlZENoYW5nZS5lbWl0KHRoaXMuZXhwYW5kZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==