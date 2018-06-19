/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, HostBinding, Input, ViewChild } from '@angular/core';
import { CardTabsService } from '../card-tabs.service';
export class CardTabsetComponent {
    /**
     * @param {?} tabService
     */
    constructor(tabService) {
        this.tabService = tabService;
        this.offset = 0;
        this.bounds = { lower: 0, upper: 0 };
    }
    /**
     * @param {?} direction
     * @return {?}
     */
    set position(direction) {
        this.tabService.setPosition(direction);
    }
    /**
     * @return {?}
     */
    get position() {
        return this.tabService.position$.getValue();
    }
    /**
     * @param {?} tab
     * @param {?} element
     * @return {?}
     */
    select(tab, element) {
        // select the tab
        this.tabService.select(tab);
        // ensure the tab is moved into view if required
        this.moveIntoView(element);
    }
    /**
     * @param {?} dimensions
     * @return {?}
     */
    resize(dimensions) {
        this._width = dimensions.width;
        this._innerWidth = this.tablist.nativeElement.scrollWidth;
        this.bounds.lower = 0;
        this.bounds.upper = -(this._innerWidth - this._width);
    }
    /**
     * @return {?}
     */
    previous() {
        this.offset += this._width;
        // ensure it remains within the allowed bounds
        this.offset = Math.min(this.offset, this.bounds.lower);
    }
    /**
     * @return {?}
     */
    next() {
        this.offset -= this._width;
        // ensure it remains within the allowed bounds
        this.offset = Math.max(this.offset, this.bounds.upper);
    }
    /**
     * @param {?} element
     * @return {?}
     */
    moveIntoView(element) {
        // if we dont have the dimensions we cant check
        if (!this._width || !this._innerWidth) {
            return;
        }
        // get the current element bounds
        const { offsetLeft, offsetWidth } = element;
        const { marginLeft, marginRight } = getComputedStyle(element);
        // calculate the visible area
        const /** @type {?} */ viewportStart = Math.abs(this.offset);
        const /** @type {?} */ viewportEnd = viewportStart + this._width;
        const /** @type {?} */ cardWidth = parseFloat(marginLeft) + offsetWidth + parseFloat(marginRight);
        // if we need to move to the left - figure out how much
        if (offsetLeft < viewportStart) {
            this.offset -= (offsetLeft - parseFloat(marginLeft)) - viewportStart;
        }
        // if we need to move to the right - figure out how much
        if ((offsetLeft + cardWidth) > viewportEnd) {
            this.offset -= (offsetLeft + cardWidth) - viewportEnd;
        }
    }
}
CardTabsetComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-card-tabset',
                template: `<div class="card-tab-content" role="tabpanel" *ngIf="(tabService.tab$ | async)">
    <ng-content></ng-content>
</div>

<div class="card-tabs" #tabs>

    <button class="card-tabs-paging-btn card-tabs-paging-btn-previous" aria-label="Previous Tabs" (click)="previous()" *ngIf="offset < bounds.lower">
        <i class="hpe-icon hpe-previous"></i>
    </button>

    <div class="card-tabs-list" role="tablist" #tablist (uxResize)="resize($event)" [style.transform]="'translateX(' + offset + 'px)'">

        <div class="card-tab"
            role="tab"
            tabindex="0" #card
            *ngFor="let tab of tabService.tabs$ | async"
            [ngClass]="tabService.position$ | async"
            [class.active]="tab.active$ | async"
            [attr.aria-selected]="tab.active$ | async"
            (click)="select(tab, card)"
            (focus)="tabs.scrollLeft = 0"
            (keydown.enter)="select(tab, card)">

            <ng-container [ngTemplateOutlet]="tab.content"></ng-container>
        </div>

    </div>

    <button class="card-tabs-paging-btn card-tabs-paging-btn-next" aria-label="Next Tabs" (click)="next()" *ngIf="offset > bounds.upper">
        <i class="hpe-icon hpe-next"></i>
    </button>
</div>`,
                providers: [CardTabsService]
            },] },
];
/** @nocollapse */
CardTabsetComponent.ctorParameters = () => [
    { type: CardTabsService, },
];
CardTabsetComponent.propDecorators = {
    "position": [{ type: HostBinding, args: ['class',] }, { type: Input },],
    "tablist": [{ type: ViewChild, args: ['tablist',] },],
};
function CardTabsetComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    CardTabsetComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    CardTabsetComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    CardTabsetComponent.propDecorators;
    /** @type {?} */
    CardTabsetComponent.prototype.tablist;
    /** @type {?} */
    CardTabsetComponent.prototype.offset;
    /** @type {?} */
    CardTabsetComponent.prototype.bounds;
    /** @type {?} */
    CardTabsetComponent.prototype._width;
    /** @type {?} */
    CardTabsetComponent.prototype._innerWidth;
    /** @type {?} */
    CardTabsetComponent.prototype.tabService;
}
/**
 * @record
 */
export function CardTabsBounds() { }
function CardTabsBounds_tsickle_Closure_declarations() {
    /** @type {?} */
    CardTabsBounds.prototype.lower;
    /** @type {?} */
    CardTabsBounds.prototype.upper;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC10YWJzZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2FyZC10YWJzL2NhcmQtdGFic2V0L2NhcmQtdGFic2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHckYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBc0N2RCxNQUFNOzs7O0lBbUJKLFlBQW1CLFVBQTJCO1FBQTNCLGVBQVUsR0FBVixVQUFVLENBQWlCO3NCQU43QixDQUFDO3NCQUNPLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO0tBS0c7Ozs7O1FBaEJyQyxRQUFRLENBQUMsU0FBaUI7UUFDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7Ozs7O0lBR3pDLElBQUksUUFBUTtRQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUM3Qzs7Ozs7O0lBWUQsTUFBTSxDQUFDLEdBQXFCLEVBQUUsT0FBb0I7O1FBRWhELElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDOztRQUc1QixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzVCOzs7OztJQUVELE1BQU0sQ0FBQyxVQUE0QjtRQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7UUFFMUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUN2RDs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUM7O1FBRzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDeEQ7Ozs7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDOztRQUczQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3hEOzs7OztJQUVPLFlBQVksQ0FBQyxPQUFvQjs7UUFHdkMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDdEMsTUFBTSxDQUFDO1NBQ1I7O1FBR0QsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsR0FBRyxPQUFPLENBQUM7UUFDNUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsR0FBRyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7UUFHOUQsdUJBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLHVCQUFNLFdBQVcsR0FBRyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNoRCx1QkFBTSxTQUFTLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQyxHQUFHLFdBQVcsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7O1FBR2pGLEVBQUUsQ0FBQyxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsYUFBYSxDQUFDO1NBQ3RFOztRQUdELEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUMsR0FBRyxXQUFXLENBQUM7U0FDdkQ7Ozs7WUEvR0osU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQStCTDtnQkFDTCxTQUFTLEVBQUUsQ0FBQyxlQUFlLENBQUM7YUFDN0I7Ozs7WUFyQ1EsZUFBZTs7O3lCQXdDckIsV0FBVyxTQUFDLE9BQU8sY0FDbkIsS0FBSzt3QkFRTCxTQUFTLFNBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVzaXplRGltZW5zaW9ucyB9IGZyb20gJy4uLy4uLy4uL2RpcmVjdGl2ZXMvcmVzaXplJztcclxuaW1wb3J0IHsgQ2FyZFRhYkNvbXBvbmVudCB9IGZyb20gJy4uL2NhcmQtdGFiL2NhcmQtdGFiLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENhcmRUYWJzU2VydmljZSB9IGZyb20gJy4uL2NhcmQtdGFicy5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndXgtY2FyZC10YWJzZXQnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImNhcmQtdGFiLWNvbnRlbnRcIiByb2xlPVwidGFicGFuZWxcIiAqbmdJZj1cIih0YWJTZXJ2aWNlLnRhYiQgfCBhc3luYylcIj5cclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9kaXY+XHJcblxyXG48ZGl2IGNsYXNzPVwiY2FyZC10YWJzXCIgI3RhYnM+XHJcblxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImNhcmQtdGFicy1wYWdpbmctYnRuIGNhcmQtdGFicy1wYWdpbmctYnRuLXByZXZpb3VzXCIgYXJpYS1sYWJlbD1cIlByZXZpb3VzIFRhYnNcIiAoY2xpY2spPVwicHJldmlvdXMoKVwiICpuZ0lmPVwib2Zmc2V0IDwgYm91bmRzLmxvd2VyXCI+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJocGUtaWNvbiBocGUtcHJldmlvdXNcIj48L2k+XHJcbiAgICA8L2J1dHRvbj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC10YWJzLWxpc3RcIiByb2xlPVwidGFibGlzdFwiICN0YWJsaXN0ICh1eFJlc2l6ZSk9XCJyZXNpemUoJGV2ZW50KVwiIFtzdHlsZS50cmFuc2Zvcm1dPVwiJ3RyYW5zbGF0ZVgoJyArIG9mZnNldCArICdweCknXCI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRhYlwiXHJcbiAgICAgICAgICAgIHJvbGU9XCJ0YWJcIlxyXG4gICAgICAgICAgICB0YWJpbmRleD1cIjBcIiAjY2FyZFxyXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgdGFiIG9mIHRhYlNlcnZpY2UudGFicyQgfCBhc3luY1wiXHJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cInRhYlNlcnZpY2UucG9zaXRpb24kIHwgYXN5bmNcIlxyXG4gICAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cInRhYi5hY3RpdmUkIHwgYXN5bmNcIlxyXG4gICAgICAgICAgICBbYXR0ci5hcmlhLXNlbGVjdGVkXT1cInRhYi5hY3RpdmUkIHwgYXN5bmNcIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0KHRhYiwgY2FyZClcIlxyXG4gICAgICAgICAgICAoZm9jdXMpPVwidGFicy5zY3JvbGxMZWZ0ID0gMFwiXHJcbiAgICAgICAgICAgIChrZXlkb3duLmVudGVyKT1cInNlbGVjdCh0YWIsIGNhcmQpXCI+XHJcblxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRhYi5jb250ZW50XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImNhcmQtdGFicy1wYWdpbmctYnRuIGNhcmQtdGFicy1wYWdpbmctYnRuLW5leHRcIiBhcmlhLWxhYmVsPVwiTmV4dCBUYWJzXCIgKGNsaWNrKT1cIm5leHQoKVwiICpuZ0lmPVwib2Zmc2V0ID4gYm91bmRzLnVwcGVyXCI+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJocGUtaWNvbiBocGUtbmV4dFwiPjwvaT5cclxuICAgIDwvYnV0dG9uPlxyXG48L2Rpdj5gLFxyXG4gIHByb3ZpZGVyczogW0NhcmRUYWJzU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIENhcmRUYWJzZXRDb21wb25lbnQge1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcclxuICBASW5wdXQoKSBzZXQgcG9zaXRpb24oZGlyZWN0aW9uOiBzdHJpbmcpIHtcclxuICAgIHRoaXMudGFiU2VydmljZS5zZXRQb3NpdGlvbihkaXJlY3Rpb24pO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBvc2l0aW9uKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy50YWJTZXJ2aWNlLnBvc2l0aW9uJC5nZXRWYWx1ZSgpO1xyXG4gIH1cclxuXHJcbiAgQFZpZXdDaGlsZCgndGFibGlzdCcpIHRhYmxpc3Q6IEVsZW1lbnRSZWY7XHJcblxyXG4gIG9mZnNldDogbnVtYmVyID0gMDtcclxuICBib3VuZHM6IENhcmRUYWJzQm91bmRzID0geyBsb3dlcjogMCwgdXBwZXI6IDAgfTtcclxuXHJcbiAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlcjtcclxuICBwcml2YXRlIF9pbm5lcldpZHRoOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0YWJTZXJ2aWNlOiBDYXJkVGFic1NlcnZpY2UpIHt9XHJcblxyXG4gIHNlbGVjdCh0YWI6IENhcmRUYWJDb21wb25lbnQsIGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcbiAgICAvLyBzZWxlY3QgdGhlIHRhYlxyXG4gICAgdGhpcy50YWJTZXJ2aWNlLnNlbGVjdCh0YWIpO1xyXG5cclxuICAgIC8vIGVuc3VyZSB0aGUgdGFiIGlzIG1vdmVkIGludG8gdmlldyBpZiByZXF1aXJlZFxyXG4gICAgdGhpcy5tb3ZlSW50b1ZpZXcoZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICByZXNpemUoZGltZW5zaW9uczogUmVzaXplRGltZW5zaW9ucyk6IHZvaWQge1xyXG4gICAgdGhpcy5fd2lkdGggPSBkaW1lbnNpb25zLndpZHRoO1xyXG4gICAgdGhpcy5faW5uZXJXaWR0aCA9IHRoaXMudGFibGlzdC5uYXRpdmVFbGVtZW50LnNjcm9sbFdpZHRoO1xyXG5cclxuICAgIHRoaXMuYm91bmRzLmxvd2VyID0gMDtcclxuICAgIHRoaXMuYm91bmRzLnVwcGVyID0gLSh0aGlzLl9pbm5lcldpZHRoIC0gdGhpcy5fd2lkdGgpO1xyXG4gIH1cclxuXHJcbiAgcHJldmlvdXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLm9mZnNldCArPSB0aGlzLl93aWR0aDtcclxuXHJcbiAgICAvLyBlbnN1cmUgaXQgcmVtYWlucyB3aXRoaW4gdGhlIGFsbG93ZWQgYm91bmRzXHJcbiAgICB0aGlzLm9mZnNldCA9IE1hdGgubWluKHRoaXMub2Zmc2V0LCB0aGlzLmJvdW5kcy5sb3dlcik7XHJcbiAgfVxyXG5cclxuICBuZXh0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5vZmZzZXQgLT0gdGhpcy5fd2lkdGg7XHJcblxyXG4gICAgLy8gZW5zdXJlIGl0IHJlbWFpbnMgd2l0aGluIHRoZSBhbGxvd2VkIGJvdW5kc1xyXG4gICAgdGhpcy5vZmZzZXQgPSBNYXRoLm1heCh0aGlzLm9mZnNldCwgdGhpcy5ib3VuZHMudXBwZXIpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtb3ZlSW50b1ZpZXcoZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuXHJcbiAgICAvLyBpZiB3ZSBkb250IGhhdmUgdGhlIGRpbWVuc2lvbnMgd2UgY2FudCBjaGVja1xyXG4gICAgaWYgKCF0aGlzLl93aWR0aCB8fCAhdGhpcy5faW5uZXJXaWR0aCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2V0IHRoZSBjdXJyZW50IGVsZW1lbnQgYm91bmRzXHJcbiAgICBjb25zdCB7IG9mZnNldExlZnQsIG9mZnNldFdpZHRoIH0gPSBlbGVtZW50O1xyXG4gICAgY29uc3QgeyBtYXJnaW5MZWZ0LCBtYXJnaW5SaWdodCB9ID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcclxuXHJcbiAgICAvLyBjYWxjdWxhdGUgdGhlIHZpc2libGUgYXJlYVxyXG4gICAgY29uc3Qgdmlld3BvcnRTdGFydCA9IE1hdGguYWJzKHRoaXMub2Zmc2V0KTtcclxuICAgIGNvbnN0IHZpZXdwb3J0RW5kID0gdmlld3BvcnRTdGFydCArIHRoaXMuX3dpZHRoO1xyXG4gICAgY29uc3QgY2FyZFdpZHRoID0gcGFyc2VGbG9hdChtYXJnaW5MZWZ0KSArIG9mZnNldFdpZHRoICsgcGFyc2VGbG9hdChtYXJnaW5SaWdodCk7XHJcblxyXG4gICAgLy8gaWYgd2UgbmVlZCB0byBtb3ZlIHRvIHRoZSBsZWZ0IC0gZmlndXJlIG91dCBob3cgbXVjaFxyXG4gICAgaWYgKG9mZnNldExlZnQgPCB2aWV3cG9ydFN0YXJ0KSB7XHJcbiAgICAgIHRoaXMub2Zmc2V0IC09IChvZmZzZXRMZWZ0IC0gcGFyc2VGbG9hdChtYXJnaW5MZWZ0KSkgLSB2aWV3cG9ydFN0YXJ0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBpZiB3ZSBuZWVkIHRvIG1vdmUgdG8gdGhlIHJpZ2h0IC0gZmlndXJlIG91dCBob3cgbXVjaFxyXG4gICAgaWYgKChvZmZzZXRMZWZ0ICsgY2FyZFdpZHRoKSA+IHZpZXdwb3J0RW5kKSB7XHJcbiAgICAgIHRoaXMub2Zmc2V0IC09IChvZmZzZXRMZWZ0ICsgY2FyZFdpZHRoKSAtIHZpZXdwb3J0RW5kO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDYXJkVGFic0JvdW5kcyB7XHJcbiAgbG93ZXI6IG51bWJlcjtcclxuICB1cHBlcjogbnVtYmVyO1xyXG59XHJcbiJdfQ==