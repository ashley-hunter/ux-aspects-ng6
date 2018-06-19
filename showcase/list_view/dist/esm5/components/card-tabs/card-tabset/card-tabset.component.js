/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, HostBinding, Input, ViewChild } from '@angular/core';
import { CardTabsService } from '../card-tabs.service';
var CardTabsetComponent = /** @class */ (function () {
    function CardTabsetComponent(tabService) {
        this.tabService = tabService;
        this.offset = 0;
        this.bounds = { lower: 0, upper: 0 };
    }
    Object.defineProperty(CardTabsetComponent.prototype, "position", {
        get: /**
         * @return {?}
         */
        function () {
            return this.tabService.position$.getValue();
        },
        set: /**
         * @param {?} direction
         * @return {?}
         */
        function (direction) {
            this.tabService.setPosition(direction);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} tab
     * @param {?} element
     * @return {?}
     */
    CardTabsetComponent.prototype.select = /**
     * @param {?} tab
     * @param {?} element
     * @return {?}
     */
    function (tab, element) {
        // select the tab
        this.tabService.select(tab);
        // ensure the tab is moved into view if required
        this.moveIntoView(element);
    };
    /**
     * @param {?} dimensions
     * @return {?}
     */
    CardTabsetComponent.prototype.resize = /**
     * @param {?} dimensions
     * @return {?}
     */
    function (dimensions) {
        this._width = dimensions.width;
        this._innerWidth = this.tablist.nativeElement.scrollWidth;
        this.bounds.lower = 0;
        this.bounds.upper = -(this._innerWidth - this._width);
    };
    /**
     * @return {?}
     */
    CardTabsetComponent.prototype.previous = /**
     * @return {?}
     */
    function () {
        this.offset += this._width;
        // ensure it remains within the allowed bounds
        this.offset = Math.min(this.offset, this.bounds.lower);
    };
    /**
     * @return {?}
     */
    CardTabsetComponent.prototype.next = /**
     * @return {?}
     */
    function () {
        this.offset -= this._width;
        // ensure it remains within the allowed bounds
        this.offset = Math.max(this.offset, this.bounds.upper);
    };
    /**
     * @param {?} element
     * @return {?}
     */
    CardTabsetComponent.prototype.moveIntoView = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        // if we dont have the dimensions we cant check
        if (!this._width || !this._innerWidth) {
            return;
        }
        // get the current element bounds
        var offsetLeft = element.offsetLeft, offsetWidth = element.offsetWidth;
        var _a = getComputedStyle(element), marginLeft = _a.marginLeft, marginRight = _a.marginRight;
        // calculate the visible area
        var /** @type {?} */ viewportStart = Math.abs(this.offset);
        var /** @type {?} */ viewportEnd = viewportStart + this._width;
        var /** @type {?} */ cardWidth = parseFloat(marginLeft) + offsetWidth + parseFloat(marginRight);
        // if we need to move to the left - figure out how much
        if (offsetLeft < viewportStart) {
            this.offset -= (offsetLeft - parseFloat(marginLeft)) - viewportStart;
        }
        // if we need to move to the right - figure out how much
        if ((offsetLeft + cardWidth) > viewportEnd) {
            this.offset -= (offsetLeft + cardWidth) - viewportEnd;
        }
    };
    CardTabsetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-card-tabset',
                    template: "<div class=\"card-tab-content\" role=\"tabpanel\" *ngIf=\"(tabService.tab$ | async)\">\n    <ng-content></ng-content>\n</div>\n\n<div class=\"card-tabs\" #tabs>\n\n    <button class=\"card-tabs-paging-btn card-tabs-paging-btn-previous\" aria-label=\"Previous Tabs\" (click)=\"previous()\" *ngIf=\"offset < bounds.lower\">\n        <i class=\"hpe-icon hpe-previous\"></i>\n    </button>\n\n    <div class=\"card-tabs-list\" role=\"tablist\" #tablist (uxResize)=\"resize($event)\" [style.transform]=\"'translateX(' + offset + 'px)'\">\n\n        <div class=\"card-tab\"\n            role=\"tab\"\n            tabindex=\"0\" #card\n            *ngFor=\"let tab of tabService.tabs$ | async\"\n            [ngClass]=\"tabService.position$ | async\"\n            [class.active]=\"tab.active$ | async\"\n            [attr.aria-selected]=\"tab.active$ | async\"\n            (click)=\"select(tab, card)\"\n            (focus)=\"tabs.scrollLeft = 0\"\n            (keydown.enter)=\"select(tab, card)\">\n\n            <ng-container [ngTemplateOutlet]=\"tab.content\"></ng-container>\n        </div>\n\n    </div>\n\n    <button class=\"card-tabs-paging-btn card-tabs-paging-btn-next\" aria-label=\"Next Tabs\" (click)=\"next()\" *ngIf=\"offset > bounds.upper\">\n        <i class=\"hpe-icon hpe-next\"></i>\n    </button>\n</div>",
                    providers: [CardTabsService]
                },] },
    ];
    /** @nocollapse */
    CardTabsetComponent.ctorParameters = function () { return [
        { type: CardTabsService, },
    ]; };
    CardTabsetComponent.propDecorators = {
        "position": [{ type: HostBinding, args: ['class',] }, { type: Input },],
        "tablist": [{ type: ViewChild, args: ['tablist',] },],
    };
    return CardTabsetComponent;
}());
export { CardTabsetComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC10YWJzZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2FyZC10YWJzL2NhcmQtdGFic2V0L2NhcmQtdGFic2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHckYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztJQXlEckQsNkJBQW1CLFVBQTJCO1FBQTNCLGVBQVUsR0FBVixVQUFVLENBQWlCO3NCQU43QixDQUFDO3NCQUNPLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO0tBS0c7MEJBaEJyQyx5Q0FBUTs7OztRQUlyQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUM3Qzs7Ozs7a0JBTnFCLFNBQWlCO1lBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDOzs7Ozs7Ozs7O0lBaUJ6QyxvQ0FBTTs7Ozs7SUFBTixVQUFPLEdBQXFCLEVBQUUsT0FBb0I7O1FBRWhELElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDOztRQUc1QixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzVCOzs7OztJQUVELG9DQUFNOzs7O0lBQU4sVUFBTyxVQUE0QjtRQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7UUFFMUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUN2RDs7OztJQUVELHNDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQzs7UUFHM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN4RDs7OztJQUVELGtDQUFJOzs7SUFBSjtRQUNFLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQzs7UUFHM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN4RDs7Ozs7SUFFTywwQ0FBWTs7OztjQUFDLE9BQW9COztRQUd2QyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUN0QyxNQUFNLENBQUM7U0FDUjs7UUFHTyxJQUFBLCtCQUFVLEVBQUUsaUNBQVcsQ0FBYTtRQUM1QyxvQ0FBUSwwQkFBVSxFQUFFLDRCQUFXLENBQStCOztRQUc5RCxxQkFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUMscUJBQU0sV0FBVyxHQUFHLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2hELHFCQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsVUFBVSxDQUFDLEdBQUcsV0FBVyxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQzs7UUFHakYsRUFBRSxDQUFDLENBQUMsVUFBVSxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUM7U0FDdEU7O1FBR0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxHQUFHLFdBQVcsQ0FBQztTQUN2RDs7O2dCQS9HSixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLDB5Q0ErQkw7b0JBQ0wsU0FBUyxFQUFFLENBQUMsZUFBZSxDQUFDO2lCQUM3Qjs7OztnQkFyQ1EsZUFBZTs7OzZCQXdDckIsV0FBVyxTQUFDLE9BQU8sY0FDbkIsS0FBSzs0QkFRTCxTQUFTLFNBQUMsU0FBUzs7OEJBcER0Qjs7U0F5Q2EsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSZXNpemVEaW1lbnNpb25zIH0gZnJvbSAnLi4vLi4vLi4vZGlyZWN0aXZlcy9yZXNpemUnO1xyXG5pbXBvcnQgeyBDYXJkVGFiQ29tcG9uZW50IH0gZnJvbSAnLi4vY2FyZC10YWIvY2FyZC10YWIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2FyZFRhYnNTZXJ2aWNlIH0gZnJvbSAnLi4vY2FyZC10YWJzLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd1eC1jYXJkLXRhYnNldCcsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiY2FyZC10YWItY29udGVudFwiIHJvbGU9XCJ0YWJwYW5lbFwiICpuZ0lmPVwiKHRhYlNlcnZpY2UudGFiJCB8IGFzeW5jKVwiPlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJjYXJkLXRhYnNcIiAjdGFicz5cclxuXHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiY2FyZC10YWJzLXBhZ2luZy1idG4gY2FyZC10YWJzLXBhZ2luZy1idG4tcHJldmlvdXNcIiBhcmlhLWxhYmVsPVwiUHJldmlvdXMgVGFic1wiIChjbGljayk9XCJwcmV2aW91cygpXCIgKm5nSWY9XCJvZmZzZXQgPCBib3VuZHMubG93ZXJcIj5cclxuICAgICAgICA8aSBjbGFzcz1cImhwZS1pY29uIGhwZS1wcmV2aW91c1wiPjwvaT5cclxuICAgIDwvYnV0dG9uPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRhYnMtbGlzdFwiIHJvbGU9XCJ0YWJsaXN0XCIgI3RhYmxpc3QgKHV4UmVzaXplKT1cInJlc2l6ZSgkZXZlbnQpXCIgW3N0eWxlLnRyYW5zZm9ybV09XCIndHJhbnNsYXRlWCgnICsgb2Zmc2V0ICsgJ3B4KSdcIj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtdGFiXCJcclxuICAgICAgICAgICAgcm9sZT1cInRhYlwiXHJcbiAgICAgICAgICAgIHRhYmluZGV4PVwiMFwiICNjYXJkXHJcbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCB0YWIgb2YgdGFiU2VydmljZS50YWJzJCB8IGFzeW5jXCJcclxuICAgICAgICAgICAgW25nQ2xhc3NdPVwidGFiU2VydmljZS5wb3NpdGlvbiQgfCBhc3luY1wiXHJcbiAgICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwidGFiLmFjdGl2ZSQgfCBhc3luY1wiXHJcbiAgICAgICAgICAgIFthdHRyLmFyaWEtc2VsZWN0ZWRdPVwidGFiLmFjdGl2ZSQgfCBhc3luY1wiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3QodGFiLCBjYXJkKVwiXHJcbiAgICAgICAgICAgIChmb2N1cyk9XCJ0YWJzLnNjcm9sbExlZnQgPSAwXCJcclxuICAgICAgICAgICAgKGtleWRvd24uZW50ZXIpPVwic2VsZWN0KHRhYiwgY2FyZClcIj5cclxuXHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwidGFiLmNvbnRlbnRcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiY2FyZC10YWJzLXBhZ2luZy1idG4gY2FyZC10YWJzLXBhZ2luZy1idG4tbmV4dFwiIGFyaWEtbGFiZWw9XCJOZXh0IFRhYnNcIiAoY2xpY2spPVwibmV4dCgpXCIgKm5nSWY9XCJvZmZzZXQgPiBib3VuZHMudXBwZXJcIj5cclxuICAgICAgICA8aSBjbGFzcz1cImhwZS1pY29uIGhwZS1uZXh0XCI+PC9pPlxyXG4gICAgPC9idXR0b24+XHJcbjwvZGl2PmAsXHJcbiAgcHJvdmlkZXJzOiBbQ2FyZFRhYnNTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FyZFRhYnNldENvbXBvbmVudCB7XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxyXG4gIEBJbnB1dCgpIHNldCBwb3NpdGlvbihkaXJlY3Rpb246IHN0cmluZykge1xyXG4gICAgdGhpcy50YWJTZXJ2aWNlLnNldFBvc2l0aW9uKGRpcmVjdGlvbik7XHJcbiAgfVxyXG5cclxuICBnZXQgcG9zaXRpb24oKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLnRhYlNlcnZpY2UucG9zaXRpb24kLmdldFZhbHVlKCk7XHJcbiAgfVxyXG5cclxuICBAVmlld0NoaWxkKCd0YWJsaXN0JykgdGFibGlzdDogRWxlbWVudFJlZjtcclxuXHJcbiAgb2Zmc2V0OiBudW1iZXIgPSAwO1xyXG4gIGJvdW5kczogQ2FyZFRhYnNCb3VuZHMgPSB7IGxvd2VyOiAwLCB1cHBlcjogMCB9O1xyXG5cclxuICBwcml2YXRlIF93aWR0aDogbnVtYmVyO1xyXG4gIHByaXZhdGUgX2lubmVyV2lkdGg6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHRhYlNlcnZpY2U6IENhcmRUYWJzU2VydmljZSkge31cclxuXHJcbiAgc2VsZWN0KHRhYjogQ2FyZFRhYkNvbXBvbmVudCwgZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIC8vIHNlbGVjdCB0aGUgdGFiXHJcbiAgICB0aGlzLnRhYlNlcnZpY2Uuc2VsZWN0KHRhYik7XHJcblxyXG4gICAgLy8gZW5zdXJlIHRoZSB0YWIgaXMgbW92ZWQgaW50byB2aWV3IGlmIHJlcXVpcmVkXHJcbiAgICB0aGlzLm1vdmVJbnRvVmlldyhlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHJlc2l6ZShkaW1lbnNpb25zOiBSZXNpemVEaW1lbnNpb25zKTogdm9pZCB7XHJcbiAgICB0aGlzLl93aWR0aCA9IGRpbWVuc2lvbnMud2lkdGg7XHJcbiAgICB0aGlzLl9pbm5lcldpZHRoID0gdGhpcy50YWJsaXN0Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsV2lkdGg7XHJcblxyXG4gICAgdGhpcy5ib3VuZHMubG93ZXIgPSAwO1xyXG4gICAgdGhpcy5ib3VuZHMudXBwZXIgPSAtKHRoaXMuX2lubmVyV2lkdGggLSB0aGlzLl93aWR0aCk7XHJcbiAgfVxyXG5cclxuICBwcmV2aW91cygpOiB2b2lkIHtcclxuICAgIHRoaXMub2Zmc2V0ICs9IHRoaXMuX3dpZHRoO1xyXG5cclxuICAgIC8vIGVuc3VyZSBpdCByZW1haW5zIHdpdGhpbiB0aGUgYWxsb3dlZCBib3VuZHNcclxuICAgIHRoaXMub2Zmc2V0ID0gTWF0aC5taW4odGhpcy5vZmZzZXQsIHRoaXMuYm91bmRzLmxvd2VyKTtcclxuICB9XHJcblxyXG4gIG5leHQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm9mZnNldCAtPSB0aGlzLl93aWR0aDtcclxuXHJcbiAgICAvLyBlbnN1cmUgaXQgcmVtYWlucyB3aXRoaW4gdGhlIGFsbG93ZWQgYm91bmRzXHJcbiAgICB0aGlzLm9mZnNldCA9IE1hdGgubWF4KHRoaXMub2Zmc2V0LCB0aGlzLmJvdW5kcy51cHBlcik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1vdmVJbnRvVmlldyhlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG5cclxuICAgIC8vIGlmIHdlIGRvbnQgaGF2ZSB0aGUgZGltZW5zaW9ucyB3ZSBjYW50IGNoZWNrXHJcbiAgICBpZiAoIXRoaXMuX3dpZHRoIHx8ICF0aGlzLl9pbm5lcldpZHRoKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBnZXQgdGhlIGN1cnJlbnQgZWxlbWVudCBib3VuZHNcclxuICAgIGNvbnN0IHsgb2Zmc2V0TGVmdCwgb2Zmc2V0V2lkdGggfSA9IGVsZW1lbnQ7XHJcbiAgICBjb25zdCB7IG1hcmdpbkxlZnQsIG1hcmdpblJpZ2h0IH0gPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xyXG5cclxuICAgIC8vIGNhbGN1bGF0ZSB0aGUgdmlzaWJsZSBhcmVhXHJcbiAgICBjb25zdCB2aWV3cG9ydFN0YXJ0ID0gTWF0aC5hYnModGhpcy5vZmZzZXQpO1xyXG4gICAgY29uc3Qgdmlld3BvcnRFbmQgPSB2aWV3cG9ydFN0YXJ0ICsgdGhpcy5fd2lkdGg7XHJcbiAgICBjb25zdCBjYXJkV2lkdGggPSBwYXJzZUZsb2F0KG1hcmdpbkxlZnQpICsgb2Zmc2V0V2lkdGggKyBwYXJzZUZsb2F0KG1hcmdpblJpZ2h0KTtcclxuXHJcbiAgICAvLyBpZiB3ZSBuZWVkIHRvIG1vdmUgdG8gdGhlIGxlZnQgLSBmaWd1cmUgb3V0IGhvdyBtdWNoXHJcbiAgICBpZiAob2Zmc2V0TGVmdCA8IHZpZXdwb3J0U3RhcnQpIHtcclxuICAgICAgdGhpcy5vZmZzZXQgLT0gKG9mZnNldExlZnQgLSBwYXJzZUZsb2F0KG1hcmdpbkxlZnQpKSAtIHZpZXdwb3J0U3RhcnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIGlmIHdlIG5lZWQgdG8gbW92ZSB0byB0aGUgcmlnaHQgLSBmaWd1cmUgb3V0IGhvdyBtdWNoXHJcbiAgICBpZiAoKG9mZnNldExlZnQgKyBjYXJkV2lkdGgpID4gdmlld3BvcnRFbmQpIHtcclxuICAgICAgdGhpcy5vZmZzZXQgLT0gKG9mZnNldExlZnQgKyBjYXJkV2lkdGgpIC0gdmlld3BvcnRFbmQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENhcmRUYWJzQm91bmRzIHtcclxuICBsb3dlcjogbnVtYmVyO1xyXG4gIHVwcGVyOiBudW1iZXI7XHJcbn1cclxuIl19