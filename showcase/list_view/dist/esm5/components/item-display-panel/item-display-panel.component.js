/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Directive, Input, Output, EventEmitter, ContentChild, ElementRef } from '@angular/core';
import { SidePanelComponent } from '../side-panel/side-panel.component';
import { SidePanelService } from '../side-panel/side-panel.service';
var ItemDisplayPanelContentDirective = /** @class */ (function () {
    function ItemDisplayPanelContentDirective() {
    }
    ItemDisplayPanelContentDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[uxItemDisplayPanelContent]'
                },] },
    ];
    return ItemDisplayPanelContentDirective;
}());
export { ItemDisplayPanelContentDirective };
function ItemDisplayPanelContentDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ItemDisplayPanelContentDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ItemDisplayPanelContentDirective.ctorParameters;
}
var ItemDisplayPanelFooterDirective = /** @class */ (function () {
    function ItemDisplayPanelFooterDirective() {
    }
    ItemDisplayPanelFooterDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[uxItemDisplayPanelFooter]'
                },] },
    ];
    return ItemDisplayPanelFooterDirective;
}());
export { ItemDisplayPanelFooterDirective };
function ItemDisplayPanelFooterDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ItemDisplayPanelFooterDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ItemDisplayPanelFooterDirective.ctorParameters;
}
var ItemDisplayPanelComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ItemDisplayPanelComponent, _super);
    function ItemDisplayPanelComponent(service, elementRef) {
        var _this = _super.call(this, service, elementRef) || this;
        _this.boxShadow = true;
        _this.closeVisible = true;
        _this.shadow = false;
        _this.visibleChange = new EventEmitter();
        _this.animate = false;
        _this.closeOnExternalClick = true;
        return _this;
    }
    Object.defineProperty(ItemDisplayPanelComponent.prototype, "preventClose", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.closeOnExternalClick;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.closeOnExternalClick = !value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemDisplayPanelComponent.prototype, "title", {
        get: /**
         * @return {?}
         */
        function () {
            return this.header;
        },
        set: /**
         * @deprecated
         * Title used for adding tooltips and shouldn't be used as an input
         * instead header will be used. This is here to support backward compatibility only
         * this property should not be used.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.header = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemDisplayPanelComponent.prototype, "visible", {
        get: /**
         * @return {?}
         */
        function () {
            return this.open;
        },
        set: /**
         * @param {?} visible
         * @return {?}
         */
        function (visible) {
            this.open = visible;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ItemDisplayPanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._itemDisplayPanelSubscription = this.service.open$.subscribe(function (next) {
            _this.visibleChange.emit(next);
        });
    };
    /**
     * @return {?}
     */
    ItemDisplayPanelComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._itemDisplayPanelSubscription.unsubscribe();
    };
    ItemDisplayPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-item-display-panel',
                    template: "<div class=\"ux-side-panel-host ux-item-display-panel\"\n    [class.box-shadow]=\"boxShadow\"\n    [style.position]=\"position\"\n    [style.width]=\"hostWidth\"\n    [style.top]=\"cssTop\">\n\n    <div class=\"ux-side-panel-header\" [class.item-display-panel-shadow]=\"shadow\">\n        <h3>{{ header }}</h3>\n        <button *ngIf=\"closeVisible\" type=\"button\" class=\"btn btn-lg btn-link btn-icon button-secondary\" (click)=\"visible = false\">\n            <i class=\"hpe-icon hpe-close\"></i>\n        </button>\n    </div>\n\n    <div class=\"ux-side-panel-content\">\n        <ng-content select=\"[uxItemDisplayPanelContent]\"></ng-content>\n    </div>\n\n    <div class=\"ux-side-panel-footer\" *ngIf=\"footer\">\n        <ng-content select=\"[uxItemDisplayPanelFooter]\"></ng-content>\n    </div>\n\n</div>\n",
                    providers: [SidePanelService],
                    host: {
                        'class': 'ux-side-panel ux-item-display-panel'
                    }
                },] },
    ];
    /** @nocollapse */
    ItemDisplayPanelComponent.ctorParameters = function () { return [
        { type: SidePanelService, },
        { type: ElementRef, },
    ]; };
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
    return ItemDisplayPanelComponent;
}(SidePanelComponent));
export { ItemDisplayPanelComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1kaXNwbGF5LXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2l0ZW0tZGlzcGxheS1wYW5lbC9pdGVtLWRpc3BsYXktcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU1RyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7Ozs7Z0JBRW5FLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsNkJBQTZCO2lCQUMxQzs7MkNBUEQ7O1NBUWEsZ0NBQWdDOzs7Ozs7Ozs7Ozs7OztnQkFFNUMsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSw0QkFBNEI7aUJBQ3pDOzswQ0FaRDs7U0FhYSwrQkFBK0I7Ozs7Ozs7Ozs7O0lBZ0NHLHFEQUFrQjtJQWlEN0QsbUNBQVksT0FBeUIsRUFBRSxVQUFzQjtRQUE3RCxZQUNJLGtCQUFNLE9BQU8sRUFBRSxVQUFVLENBQUMsU0FJN0I7MEJBbEQ2QixJQUFJOzZCQUVELElBQUk7dUJBV1YsS0FBSzs4QkFJaUIsSUFBSSxZQUFZLEVBQVc7UUErQnhFLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLEtBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7O0tBQ3BDO0lBOUNELHNCQUFJLG1EQUFZOzs7O1FBQWhCO1lBQ0ksTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDO1NBQ3JDOzs7OztrQkFHZ0IsS0FBYztZQUMzQixJQUFJLENBQUMsb0JBQW9CLEdBQUcsQ0FBQyxLQUFLLENBQUM7Ozs7T0FKdEM7MEJBb0JHLDRDQUFLOzs7O1FBSVQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUN0Qjs7Ozs7Ozs7O2tCQU5TLEtBQWE7WUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Ozs7OzBCQVFwQiw4Q0FBTzs7OztRQUlYO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDcEI7Ozs7O2tCQU5XLE9BQWdCO1lBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDOzs7Ozs7OztJQWdCeEIsNENBQVE7OztJQUFSO1FBQUEsaUJBSUM7UUFIRyxJQUFJLENBQUMsNkJBQTZCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBSTtZQUNuRSxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqQyxDQUFDLENBQUM7S0FDTjs7OztJQUVELCtDQUFXOzs7SUFBWDtRQUNJLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUNwRDs7Z0JBOUZKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxRQUFRLEVBQUUsdXpCQXNCYjtvQkFDRyxTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDN0IsSUFBSSxFQUFFO3dCQUNGLE9BQU8sRUFBRSxxQ0FBcUM7cUJBQ2pEO2lCQUNKOzs7O2dCQXpDUSxnQkFBZ0I7Z0JBSGlELFVBQVU7OzsyQkErQy9FLEtBQUs7OEJBRUwsS0FBSztpQ0FFTCxLQUFLO2lDQU1MLEtBQUs7MkJBS0wsS0FBSzsyQkFFTCxZQUFZLFNBQUMsK0JBQStCO2tDQUU1QyxNQUFNOzBCQVFOLEtBQUs7NEJBU0wsS0FBSzs7b0NBbkZWO0VBNkMrQyxrQkFBa0I7U0FBcEQseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ29udGVudENoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBTaWRlUGFuZWxDb21wb25lbnQgfSBmcm9tICcuLi9zaWRlLXBhbmVsL3NpZGUtcGFuZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2lkZVBhbmVsU2VydmljZSB9IGZyb20gJy4uL3NpZGUtcGFuZWwvc2lkZS1wYW5lbC5zZXJ2aWNlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbdXhJdGVtRGlzcGxheVBhbmVsQ29udGVudF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJdGVtRGlzcGxheVBhbmVsQ29udGVudERpcmVjdGl2ZSB7IH1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbdXhJdGVtRGlzcGxheVBhbmVsRm9vdGVyXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEl0ZW1EaXNwbGF5UGFuZWxGb290ZXJEaXJlY3RpdmUgeyB9XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndXgtaXRlbS1kaXNwbGF5LXBhbmVsJyxcclxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInV4LXNpZGUtcGFuZWwtaG9zdCB1eC1pdGVtLWRpc3BsYXktcGFuZWxcIlxyXG4gICAgW2NsYXNzLmJveC1zaGFkb3ddPVwiYm94U2hhZG93XCJcclxuICAgIFtzdHlsZS5wb3NpdGlvbl09XCJwb3NpdGlvblwiXHJcbiAgICBbc3R5bGUud2lkdGhdPVwiaG9zdFdpZHRoXCJcclxuICAgIFtzdHlsZS50b3BdPVwiY3NzVG9wXCI+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInV4LXNpZGUtcGFuZWwtaGVhZGVyXCIgW2NsYXNzLml0ZW0tZGlzcGxheS1wYW5lbC1zaGFkb3ddPVwic2hhZG93XCI+XHJcbiAgICAgICAgPGgzPnt7IGhlYWRlciB9fTwvaDM+XHJcbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImNsb3NlVmlzaWJsZVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tbGcgYnRuLWxpbmsgYnRuLWljb24gYnV0dG9uLXNlY29uZGFyeVwiIChjbGljayk9XCJ2aXNpYmxlID0gZmFsc2VcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJocGUtaWNvbiBocGUtY2xvc2VcIj48L2k+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwidXgtc2lkZS1wYW5lbC1jb250ZW50XCI+XHJcbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3V4SXRlbURpc3BsYXlQYW5lbENvbnRlbnRdXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInV4LXNpZGUtcGFuZWwtZm9vdGVyXCIgKm5nSWY9XCJmb290ZXJcIj5cclxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbdXhJdGVtRGlzcGxheVBhbmVsRm9vdGVyXVwiPjwvbmctY29udGVudD5cclxuICAgIDwvZGl2PlxyXG5cclxuPC9kaXY+XHJcbmAsXHJcbiAgICBwcm92aWRlcnM6IFtTaWRlUGFuZWxTZXJ2aWNlXSxcclxuICAgIGhvc3Q6IHtcclxuICAgICAgICAnY2xhc3MnOiAndXgtc2lkZS1wYW5lbCB1eC1pdGVtLWRpc3BsYXktcGFuZWwnXHJcbiAgICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJdGVtRGlzcGxheVBhbmVsQ29tcG9uZW50IGV4dGVuZHMgU2lkZVBhbmVsQ29tcG9uZW50IHtcclxuXHJcbiAgICBASW5wdXQoKSBoZWFkZXI6IHN0cmluZztcclxuXHJcbiAgICBASW5wdXQoKSBib3hTaGFkb3c6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIEBJbnB1dCgpIGNsb3NlVmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgZ2V0IHByZXZlbnRDbG9zZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gIXRoaXMuY2xvc2VPbkV4dGVybmFsQ2xpY2s7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHNldCBwcmV2ZW50Q2xvc2UodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmNsb3NlT25FeHRlcm5hbENsaWNrID0gIXZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpIHNoYWRvdzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIEBDb250ZW50Q2hpbGQoSXRlbURpc3BsYXlQYW5lbEZvb3RlckRpcmVjdGl2ZSkgZm9vdGVyOiBJdGVtRGlzcGxheVBhbmVsRm9vdGVyRGlyZWN0aXZlO1xyXG5cclxuICAgIEBPdXRwdXQoKSB2aXNpYmxlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVwcmVjYXRlZFxyXG4gICAgICogVGl0bGUgdXNlZCBmb3IgYWRkaW5nIHRvb2x0aXBzIGFuZCBzaG91bGRuJ3QgYmUgdXNlZCBhcyBhbiBpbnB1dFxyXG4gICAgICogaW5zdGVhZCBoZWFkZXIgd2lsbCBiZSB1c2VkLiBUaGlzIGlzIGhlcmUgdG8gc3VwcG9ydCBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IG9ubHlcclxuICAgICAqIHRoaXMgcHJvcGVydHkgc2hvdWxkIG5vdCBiZSB1c2VkLlxyXG4gICAgICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmhlYWRlciA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB0aXRsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oZWFkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHNldCB2aXNpYmxlKHZpc2libGU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLm9wZW4gPSB2aXNpYmxlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB2aXNpYmxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9wZW47XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaXRlbURpc3BsYXlQYW5lbFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNlcnZpY2U6IFNpZGVQYW5lbFNlcnZpY2UsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcclxuICAgICAgICBzdXBlcihzZXJ2aWNlLCBlbGVtZW50UmVmKTtcclxuXHJcbiAgICAgICAgdGhpcy5hbmltYXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jbG9zZU9uRXh0ZXJuYWxDbGljayA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5faXRlbURpc3BsYXlQYW5lbFN1YnNjcmlwdGlvbiA9IHRoaXMuc2VydmljZS5vcGVuJC5zdWJzY3JpYmUoKG5leHQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy52aXNpYmxlQ2hhbmdlLmVtaXQobmV4dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5faXRlbURpc3BsYXlQYW5lbFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG59Il19