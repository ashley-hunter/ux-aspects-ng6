/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FacetBaseComponent } from '../base/facet-base/facet-base.component';
export class FacetCheckListComponent extends FacetBaseComponent {
    constructor() {
        super(...arguments);
        this.facets = [];
        this.scrollbar = true;
        this.expanded = true;
    }
}
FacetCheckListComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-facet-check-list',
                template: `<ux-facet-header [header]="header" [(expanded)]="expanded"></ux-facet-header>

<!-- Create a container which will show when section is expanded -->
<div class="facet-check-list-container" [class.facet-check-list-scrollbar]="scrollbar" *ngIf="expanded">

    <!-- Iterate through each possible facet -->
    <div class="facet-check-list-item" *ngFor="let facet of facets" [class.facet-active]="isFacetSelected(facet)" tabindex="0"
        (click)="toggleFacetSelection(facet)" (keyup.enter)="toggleFacetSelection(facet)" [class.disabled]="facet.disabled">

        <!-- Show check icon to indicate the state -->
        <span class="facet-check-list-item-check">
            <span class="hpe-icon hpe-active"></span>
        </span>

        <!-- Display the title -->
        <span class="facet-check-list-item-title">{{ facet.title }}</span>

        <!-- Display the count if specified -->
        <span class="facet-check-list-item-count" *ngIf="facet.count !== undefined">({{ facet.count }})</span>
    </div>
</div>`
            },] },
];
/** @nocollapse */
FacetCheckListComponent.propDecorators = {
    "facets": [{ type: Input },],
    "header": [{ type: Input },],
    "scrollbar": [{ type: Input },],
    "expanded": [{ type: Input },],
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtY2hlY2stbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9mYWNldHMvZmFjZXQtY2hlY2stbGlzdC9mYWNldC1jaGVjay1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUEyQjdFLE1BQU0sOEJBQStCLFNBQVEsa0JBQWtCOzs7c0JBRWhDLEVBQUU7eUJBRUMsSUFBSTt3QkFDTCxJQUFJOzs7O1lBN0JwQyxTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQW9CUDthQUNOOzs7O3VCQUdJLEtBQUs7dUJBQ0wsS0FBSzswQkFDTCxLQUFLO3lCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZhY2V0QmFzZUNvbXBvbmVudCB9IGZyb20gJy4uL2Jhc2UvZmFjZXQtYmFzZS9mYWNldC1iYXNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZhY2V0IH0gZnJvbSAnLi4vbW9kZWxzL2ZhY2V0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd1eC1mYWNldC1jaGVjay1saXN0JyxcclxuICAgIHRlbXBsYXRlOiBgPHV4LWZhY2V0LWhlYWRlciBbaGVhZGVyXT1cImhlYWRlclwiIFsoZXhwYW5kZWQpXT1cImV4cGFuZGVkXCI+PC91eC1mYWNldC1oZWFkZXI+XHJcblxyXG48IS0tIENyZWF0ZSBhIGNvbnRhaW5lciB3aGljaCB3aWxsIHNob3cgd2hlbiBzZWN0aW9uIGlzIGV4cGFuZGVkIC0tPlxyXG48ZGl2IGNsYXNzPVwiZmFjZXQtY2hlY2stbGlzdC1jb250YWluZXJcIiBbY2xhc3MuZmFjZXQtY2hlY2stbGlzdC1zY3JvbGxiYXJdPVwic2Nyb2xsYmFyXCIgKm5nSWY9XCJleHBhbmRlZFwiPlxyXG5cclxuICAgIDwhLS0gSXRlcmF0ZSB0aHJvdWdoIGVhY2ggcG9zc2libGUgZmFjZXQgLS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZmFjZXQtY2hlY2stbGlzdC1pdGVtXCIgKm5nRm9yPVwibGV0IGZhY2V0IG9mIGZhY2V0c1wiIFtjbGFzcy5mYWNldC1hY3RpdmVdPVwiaXNGYWNldFNlbGVjdGVkKGZhY2V0KVwiIHRhYmluZGV4PVwiMFwiXHJcbiAgICAgICAgKGNsaWNrKT1cInRvZ2dsZUZhY2V0U2VsZWN0aW9uKGZhY2V0KVwiIChrZXl1cC5lbnRlcik9XCJ0b2dnbGVGYWNldFNlbGVjdGlvbihmYWNldClcIiBbY2xhc3MuZGlzYWJsZWRdPVwiZmFjZXQuZGlzYWJsZWRcIj5cclxuXHJcbiAgICAgICAgPCEtLSBTaG93IGNoZWNrIGljb24gdG8gaW5kaWNhdGUgdGhlIHN0YXRlIC0tPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZmFjZXQtY2hlY2stbGlzdC1pdGVtLWNoZWNrXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaHBlLWljb24gaHBlLWFjdGl2ZVwiPjwvc3Bhbj5cclxuICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgIDwhLS0gRGlzcGxheSB0aGUgdGl0bGUgLS0+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmYWNldC1jaGVjay1saXN0LWl0ZW0tdGl0bGVcIj57eyBmYWNldC50aXRsZSB9fTwvc3Bhbj5cclxuXHJcbiAgICAgICAgPCEtLSBEaXNwbGF5IHRoZSBjb3VudCBpZiBzcGVjaWZpZWQgLS0+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmYWNldC1jaGVjay1saXN0LWl0ZW0tY291bnRcIiAqbmdJZj1cImZhY2V0LmNvdW50ICE9PSB1bmRlZmluZWRcIj4oe3sgZmFjZXQuY291bnQgfX0pPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIEZhY2V0Q2hlY2tMaXN0Q29tcG9uZW50IGV4dGVuZHMgRmFjZXRCYXNlQ29tcG9uZW50IHtcclxuXHJcbiAgICBASW5wdXQoKSBmYWNldHM6IEZhY2V0W10gPSBbXTtcclxuICAgIEBJbnB1dCgpIGhlYWRlcjogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgc2Nyb2xsYmFyOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgpIGV4cGFuZGVkOiBib29sZWFuID0gdHJ1ZTtcclxufSJdfQ==