/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Directive, Input, Output, EventEmitter, ContentChild, ElementRef } from '@angular/core';
import { SidePanelComponent } from '../side-panel/side-panel.component';
import { SidePanelService } from '../side-panel/side-panel.service';
export class ItemDisplayPanelContentDirective {
}
ItemDisplayPanelContentDirective.decorators = [
    { type: Directive, args: [{
                selector: '[uxItemDisplayPanelContent]'
            },] },
];
function ItemDisplayPanelContentDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ItemDisplayPanelContentDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ItemDisplayPanelContentDirective.ctorParameters;
}
export class ItemDisplayPanelFooterDirective {
}
ItemDisplayPanelFooterDirective.decorators = [
    { type: Directive, args: [{
                selector: '[uxItemDisplayPanelFooter]'
            },] },
];
function ItemDisplayPanelFooterDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ItemDisplayPanelFooterDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ItemDisplayPanelFooterDirective.ctorParameters;
}
export class ItemDisplayPanelComponent extends SidePanelComponent {
    /**
     * @param {?} service
     * @param {?} elementRef
     */
    constructor(service, elementRef) {
        super(service, elementRef);
        this.boxShadow = true;
        this.closeVisible = true;
        this.shadow = false;
        this.visibleChange = new EventEmitter();
        this.animate = false;
        this.closeOnExternalClick = true;
    }
    /**
     * @return {?}
     */
    get preventClose() {
        return !this.closeOnExternalClick;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set preventClose(value) {
        this.closeOnExternalClick = !value;
    }
    /**
     * @deprecated
     * Title used for adding tooltips and shouldn't be used as an input
     * instead header will be used. This is here to support backward compatibility only
     * this property should not be used.
     * @param {?} value
     * @return {?}
     */
    set title(value) {
        this.header = value;
    }
    /**
     * @return {?}
     */
    get title() {
        return this.header;
    }
    /**
     * @param {?} visible
     * @return {?}
     */
    set visible(visible) {
        this.open = visible;
    }
    /**
     * @return {?}
     */
    get visible() {
        return this.open;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._itemDisplayPanelSubscription = this.service.open$.subscribe((next) => {
            this.visibleChange.emit(next);
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._itemDisplayPanelSubscription.unsubscribe();
    }
}
ItemDisplayPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-item-display-panel',
                template: `<div class="ux-side-panel-host ux-item-display-panel"
    [class.box-shadow]="boxShadow"
    [style.position]="position"
    [style.width]="hostWidth"
    [style.top]="cssTop">

    <div class="ux-side-panel-header" [class.item-display-panel-shadow]="shadow">
        <h3>{{ header }}</h3>
        <button *ngIf="closeVisible" type="button" class="btn btn-lg btn-link btn-icon button-secondary" (click)="visible = false">
            <i class="hpe-icon hpe-close"></i>
        </button>
    </div>

    <div class="ux-side-panel-content">
        <ng-content select="[uxItemDisplayPanelContent]"></ng-content>
    </div>

    <div class="ux-side-panel-footer" *ngIf="footer">
        <ng-content select="[uxItemDisplayPanelFooter]"></ng-content>
    </div>

</div>
`,
                providers: [SidePanelService],
                host: {
                    'class': 'ux-side-panel ux-item-display-panel'
                }
            },] },
];
/** @nocollapse */
ItemDisplayPanelComponent.ctorParameters = () => [
    { type: SidePanelService, },
    { type: ElementRef, },
];
ItemDisplayPanelComponent.propDecorators = {
    "header": [{ type: Input },],
    "boxShadow": [{ type: Input },],
    "closeVisible": [{ type: Input },],
    "preventClose": [{ type: Input },],
    "shadow": [{ type: Input },],
    "footer": [{ type: ContentChild, args: [ItemDisplayPanelFooterDirective,] },],
    "visibleChange": [{ type: Output },],
    "title": [{ type: Input },],
    "visible": [{ type: Input },],
};
function ItemDisplayPanelComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ItemDisplayPanelComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ItemDisplayPanelComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    ItemDisplayPanelComponent.propDecorators;
    /** @type {?} */
    ItemDisplayPanelComponent.prototype.header;
    /** @type {?} */
    ItemDisplayPanelComponent.prototype.boxShadow;
    /** @type {?} */
    ItemDisplayPanelComponent.prototype.closeVisible;
    /** @type {?} */
    ItemDisplayPanelComponent.prototype.shadow;
    /** @type {?} */
    ItemDisplayPanelComponent.prototype.footer;
    /** @type {?} */
    ItemDisplayPanelComponent.prototype.visibleChange;
    /** @type {?} */
    ItemDisplayPanelComponent.prototype._itemDisplayPanelSubscription;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1kaXNwbGF5LXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2l0ZW0tZGlzcGxheS1wYW5lbC9pdGVtLWRpc3BsYXktcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTVHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBS3BFLE1BQU07OztZQUhMLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsNkJBQTZCO2FBQzFDOzs7Ozs7Ozs7OztBQU1ELE1BQU07OztZQUhMLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsNEJBQTRCO2FBQ3pDOzs7Ozs7Ozs7OztBQWlDRCxNQUFNLGdDQUFpQyxTQUFRLGtCQUFrQjs7Ozs7SUFpRDdELFlBQVksT0FBeUIsRUFBRSxVQUFzQjtRQUN6RCxLQUFLLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO3lCQTlDRCxJQUFJOzRCQUVELElBQUk7c0JBV1YsS0FBSzs2QkFJaUIsSUFBSSxZQUFZLEVBQVc7UUErQnhFLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7S0FDcEM7Ozs7SUE5Q0QsSUFBSSxZQUFZO1FBQ1osTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDO0tBQ3JDOzs7OztRQUdHLFlBQVksQ0FBQyxLQUFjO1FBQzNCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxDQUFDLEtBQUssQ0FBQzs7Ozs7Ozs7OztRQWdCbkMsS0FBSyxDQUFDLEtBQWE7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Ozs7O0lBR3hCLElBQUksS0FBSztRQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0tBQ3RCOzs7OztRQUdHLE9BQU8sQ0FBQyxPQUFnQjtRQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQzs7Ozs7SUFHeEIsSUFBSSxPQUFPO1FBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7S0FDcEI7Ozs7SUFXRCxRQUFRO1FBQ0osSUFBSSxDQUFDLDZCQUE2QixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ3ZFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2pDLENBQUMsQ0FBQztLQUNOOzs7O0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUNwRDs7O1lBOUZKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FzQmI7Z0JBQ0csU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7Z0JBQzdCLElBQUksRUFBRTtvQkFDRixPQUFPLEVBQUUscUNBQXFDO2lCQUNqRDthQUNKOzs7O1lBekNRLGdCQUFnQjtZQUhpRCxVQUFVOzs7dUJBK0MvRSxLQUFLOzBCQUVMLEtBQUs7NkJBRUwsS0FBSzs2QkFNTCxLQUFLO3VCQUtMLEtBQUs7dUJBRUwsWUFBWSxTQUFDLCtCQUErQjs4QkFFNUMsTUFBTTtzQkFRTixLQUFLO3dCQVNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDb250ZW50Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFNpZGVQYW5lbENvbXBvbmVudCB9IGZyb20gJy4uL3NpZGUtcGFuZWwvc2lkZS1wYW5lbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTaWRlUGFuZWxTZXJ2aWNlIH0gZnJvbSAnLi4vc2lkZS1wYW5lbC9zaWRlLXBhbmVsLnNlcnZpY2UnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1t1eEl0ZW1EaXNwbGF5UGFuZWxDb250ZW50XSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEl0ZW1EaXNwbGF5UGFuZWxDb250ZW50RGlyZWN0aXZlIHsgfVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1t1eEl0ZW1EaXNwbGF5UGFuZWxGb290ZXJdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSXRlbURpc3BsYXlQYW5lbEZvb3RlckRpcmVjdGl2ZSB7IH1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd1eC1pdGVtLWRpc3BsYXktcGFuZWwnLFxyXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwidXgtc2lkZS1wYW5lbC1ob3N0IHV4LWl0ZW0tZGlzcGxheS1wYW5lbFwiXHJcbiAgICBbY2xhc3MuYm94LXNoYWRvd109XCJib3hTaGFkb3dcIlxyXG4gICAgW3N0eWxlLnBvc2l0aW9uXT1cInBvc2l0aW9uXCJcclxuICAgIFtzdHlsZS53aWR0aF09XCJob3N0V2lkdGhcIlxyXG4gICAgW3N0eWxlLnRvcF09XCJjc3NUb3BcIj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwidXgtc2lkZS1wYW5lbC1oZWFkZXJcIiBbY2xhc3MuaXRlbS1kaXNwbGF5LXBhbmVsLXNoYWRvd109XCJzaGFkb3dcIj5cclxuICAgICAgICA8aDM+e3sgaGVhZGVyIH19PC9oMz5cclxuICAgICAgICA8YnV0dG9uICpuZ0lmPVwiY2xvc2VWaXNpYmxlXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1sZyBidG4tbGluayBidG4taWNvbiBidXR0b24tc2Vjb25kYXJ5XCIgKGNsaWNrKT1cInZpc2libGUgPSBmYWxzZVwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImhwZS1pY29uIGhwZS1jbG9zZVwiPjwvaT5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJ1eC1zaWRlLXBhbmVsLWNvbnRlbnRcIj5cclxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbdXhJdGVtRGlzcGxheVBhbmVsQ29udGVudF1cIj48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwidXgtc2lkZS1wYW5lbC1mb290ZXJcIiAqbmdJZj1cImZvb3RlclwiPlxyXG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIlt1eEl0ZW1EaXNwbGF5UGFuZWxGb290ZXJdXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcblxyXG48L2Rpdj5cclxuYCxcclxuICAgIHByb3ZpZGVyczogW1NpZGVQYW5lbFNlcnZpY2VdLFxyXG4gICAgaG9zdDoge1xyXG4gICAgICAgICdjbGFzcyc6ICd1eC1zaWRlLXBhbmVsIHV4LWl0ZW0tZGlzcGxheS1wYW5lbCdcclxuICAgIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIEl0ZW1EaXNwbGF5UGFuZWxDb21wb25lbnQgZXh0ZW5kcyBTaWRlUGFuZWxDb21wb25lbnQge1xyXG5cclxuICAgIEBJbnB1dCgpIGhlYWRlcjogc3RyaW5nO1xyXG5cclxuICAgIEBJbnB1dCgpIGJveFNoYWRvdzogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgQElucHV0KCkgY2xvc2VWaXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBnZXQgcHJldmVudENsb3NlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5jbG9zZU9uRXh0ZXJuYWxDbGljaztcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgc2V0IHByZXZlbnRDbG9zZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuY2xvc2VPbkV4dGVybmFsQ2xpY2sgPSAhdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KCkgc2hhZG93OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgQENvbnRlbnRDaGlsZChJdGVtRGlzcGxheVBhbmVsRm9vdGVyRGlyZWN0aXZlKSBmb290ZXI6IEl0ZW1EaXNwbGF5UGFuZWxGb290ZXJEaXJlY3RpdmU7XHJcblxyXG4gICAgQE91dHB1dCgpIHZpc2libGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXByZWNhdGVkXHJcbiAgICAgKiBUaXRsZSB1c2VkIGZvciBhZGRpbmcgdG9vbHRpcHMgYW5kIHNob3VsZG4ndCBiZSB1c2VkIGFzIGFuIGlucHV0XHJcbiAgICAgKiBpbnN0ZWFkIGhlYWRlciB3aWxsIGJlIHVzZWQuIFRoaXMgaXMgaGVyZSB0byBzdXBwb3J0IGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgb25seVxyXG4gICAgICogdGhpcyBwcm9wZXJ0eSBzaG91bGQgbm90IGJlIHVzZWQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpXHJcbiAgICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuaGVhZGVyID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHRpdGxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhlYWRlcjtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgc2V0IHZpc2libGUodmlzaWJsZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMub3BlbiA9IHZpc2libGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHZpc2libGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3BlbjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pdGVtRGlzcGxheVBhbmVsU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2VydmljZTogU2lkZVBhbmVsU2VydmljZSwgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xyXG4gICAgICAgIHN1cGVyKHNlcnZpY2UsIGVsZW1lbnRSZWYpO1xyXG5cclxuICAgICAgICB0aGlzLmFuaW1hdGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNsb3NlT25FeHRlcm5hbENsaWNrID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLl9pdGVtRGlzcGxheVBhbmVsU3Vic2NyaXB0aW9uID0gdGhpcy5zZXJ2aWNlLm9wZW4kLnN1YnNjcmliZSgobmV4dCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnZpc2libGVDaGFuZ2UuZW1pdChuZXh0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLl9pdGVtRGlzcGxheVBhbmVsU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbn0iXX0=