/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { DashboardService, defaultOptions } from './dashboard.service';
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(dashboardService) {
        var _this = this;
        this.dashboardService = dashboardService;
        this.layoutChange = new EventEmitter();
        dashboardService.layout$.subscribe(function (layout) { return _this.layoutChange.emit(layout); });
    }
    Object.defineProperty(DashboardComponent.prototype, "layout", {
        set: /**
         * @param {?} layout
         * @return {?}
         */
        function (layout) {
            if (layout) {
                this.dashboardService.layout$.next(layout);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardComponent.prototype, "options", {
        set: /**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            this.dashboardService.options$.next(tslib_1.__assign({}, defaultOptions, options));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Set the initial dimensions
     */
    /**
     * Set the initial dimensions
     * @return {?}
     */
    DashboardComponent.prototype.ngAfterViewInit = /**
     * Set the initial dimensions
     * @return {?}
     */
    function () {
        this.dashboardService.setDimensions(this.dashboardElement.nativeElement.offsetWidth, this.dashboardElement.nativeElement.offsetHeight);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DashboardComponent.prototype.onResize = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.dashboardService.setDimensions(event.width, event.height);
    };
    DashboardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-dashboard',
                    template: "<div #dashboard class=\"dashboard-container\" [style.height.px]=\"dashboardService.height$ | async\">\n    <div (uxResize)=\"onResize($event)\" [throttle]=\"16\" class=\"dashboard\">\n        <ng-content></ng-content>\n    </div>\n    \n    <div class=\"position-indicator\" *ngIf=\"(dashboardService.placeholder$ | async).visible\" \n        [style.left.px]=\"(dashboardService.placeholder$ | async).x\" \n        [style.top.px]=\"(dashboardService.placeholder$ | async).y\" \n        [style.width.px]=\"(dashboardService.placeholder$ | async).width\"\n        [style.height.px]=\"(dashboardService.placeholder$ | async).height\"></div>\n</div>",
                    providers: [DashboardService],
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    DashboardComponent.ctorParameters = function () { return [
        { type: DashboardService, },
    ]; };
    DashboardComponent.propDecorators = {
        "layout": [{ type: Input },],
        "options": [{ type: Input },],
        "layoutChange": [{ type: Output },],
        "dashboardElement": [{ type: ViewChild, args: ['dashboard',] },],
    };
    return DashboardComponent;
}());
export { DashboardComponent };
function DashboardComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    DashboardComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    DashboardComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    DashboardComponent.propDecorators;
    /** @type {?} */
    DashboardComponent.prototype.layoutChange;
    /** @type {?} */
    DashboardComponent.prototype.dashboardElement;
    /** @type {?} */
    DashboardComponent.prototype.dashboardService;
}
/**
 * @record
 */
export function DashboardOptions() { }
function DashboardOptions_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    DashboardOptions.prototype.columns;
    /** @type {?|undefined} */
    DashboardOptions.prototype.padding;
    /** @type {?|undefined} */
    DashboardOptions.prototype.minWidth;
    /** @type {?|undefined} */
    DashboardOptions.prototype.minHeight;
    /** @type {?|undefined} */
    DashboardOptions.prototype.rowHeight;
    /** @type {?|undefined} */
    DashboardOptions.prototype.emptyRow;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFpQix1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV0SSxPQUFPLEVBQXVCLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztJQWtDeEYsNEJBQW1CLGdCQUFrQztRQUFyRCxpQkFFQztRQUZrQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCOzRCQUo1QixJQUFJLFlBQVksRUFBeUI7UUFLOUQsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUE5QixDQUE4QixDQUFDLENBQUM7S0FDaEY7MEJBaEJZLHNDQUFNOzs7OztrQkFBQyxNQUE2QjtZQUM3QyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNULElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzlDOzs7OzswQkFHUSx1Q0FBTzs7Ozs7a0JBQUMsT0FBeUI7WUFDMUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLHNCQUFNLGNBQWMsRUFBSyxPQUFPLEVBQUcsQ0FBQzs7Ozs7SUFXM0U7O09BRUc7Ozs7O0lBQ0gsNENBQWU7Ozs7SUFBZjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztLQUMxSTs7Ozs7SUFFRCxxQ0FBUTs7OztJQUFSLFVBQVMsS0FBdUI7UUFDNUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNsRTs7Z0JBN0NKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLHVvQkFVUDtvQkFDSCxTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDN0IsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2xEOzs7O2dCQWpCNkIsZ0JBQWdCOzs7MkJBb0J6QyxLQUFLOzRCQU1MLEtBQUs7aUNBSUwsTUFBTTtxQ0FFTixTQUFTLFNBQUMsV0FBVzs7NkJBbEMxQjs7U0FvQmEsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVzaXplRGltZW5zaW9ucyB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvcmVzaXplL3Jlc2l6ZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGFzaGJvYXJkTGF5b3V0RGF0YSwgRGFzaGJvYXJkU2VydmljZSwgZGVmYXVsdE9wdGlvbnMgfSBmcm9tICcuL2Rhc2hib2FyZC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd1eC1kYXNoYm9hcmQnLFxyXG4gICAgdGVtcGxhdGU6IGA8ZGl2ICNkYXNoYm9hcmQgY2xhc3M9XCJkYXNoYm9hcmQtY29udGFpbmVyXCIgW3N0eWxlLmhlaWdodC5weF09XCJkYXNoYm9hcmRTZXJ2aWNlLmhlaWdodCQgfCBhc3luY1wiPlxyXG4gICAgPGRpdiAodXhSZXNpemUpPVwib25SZXNpemUoJGV2ZW50KVwiIFt0aHJvdHRsZV09XCIxNlwiIGNsYXNzPVwiZGFzaGJvYXJkXCI+XHJcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuICAgIDxkaXYgY2xhc3M9XCJwb3NpdGlvbi1pbmRpY2F0b3JcIiAqbmdJZj1cIihkYXNoYm9hcmRTZXJ2aWNlLnBsYWNlaG9sZGVyJCB8IGFzeW5jKS52aXNpYmxlXCIgXHJcbiAgICAgICAgW3N0eWxlLmxlZnQucHhdPVwiKGRhc2hib2FyZFNlcnZpY2UucGxhY2Vob2xkZXIkIHwgYXN5bmMpLnhcIiBcclxuICAgICAgICBbc3R5bGUudG9wLnB4XT1cIihkYXNoYm9hcmRTZXJ2aWNlLnBsYWNlaG9sZGVyJCB8IGFzeW5jKS55XCIgXHJcbiAgICAgICAgW3N0eWxlLndpZHRoLnB4XT1cIihkYXNoYm9hcmRTZXJ2aWNlLnBsYWNlaG9sZGVyJCB8IGFzeW5jKS53aWR0aFwiXHJcbiAgICAgICAgW3N0eWxlLmhlaWdodC5weF09XCIoZGFzaGJvYXJkU2VydmljZS5wbGFjZWhvbGRlciQgfCBhc3luYykuaGVpZ2h0XCI+PC9kaXY+XHJcbjwvZGl2PmAsXHJcbiAgICBwcm92aWRlcnM6IFtEYXNoYm9hcmRTZXJ2aWNlXSxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgICBASW5wdXQoKSBzZXQgbGF5b3V0KGxheW91dDogRGFzaGJvYXJkTGF5b3V0RGF0YVtdKSB7XHJcbiAgICAgICAgaWYgKGxheW91dCkge1xyXG4gICAgICAgICAgICB0aGlzLmRhc2hib2FyZFNlcnZpY2UubGF5b3V0JC5uZXh0KGxheW91dCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpIHNldCBvcHRpb25zKG9wdGlvbnM6IERhc2hib2FyZE9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmRhc2hib2FyZFNlcnZpY2Uub3B0aW9ucyQubmV4dCh7IC4uLmRlZmF1bHRPcHRpb25zLCAuLi5vcHRpb25zIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIEBPdXRwdXQoKSBsYXlvdXRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERhc2hib2FyZExheW91dERhdGFbXT4oKTtcclxuXHJcbiAgICBAVmlld0NoaWxkKCdkYXNoYm9hcmQnKSBkYXNoYm9hcmRFbGVtZW50OiBFbGVtZW50UmVmO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBkYXNoYm9hcmRTZXJ2aWNlOiBEYXNoYm9hcmRTZXJ2aWNlKSB7XHJcbiAgICAgICAgZGFzaGJvYXJkU2VydmljZS5sYXlvdXQkLnN1YnNjcmliZShsYXlvdXQgPT4gdGhpcy5sYXlvdXRDaGFuZ2UuZW1pdChsYXlvdXQpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCB0aGUgaW5pdGlhbCBkaW1lbnNpb25zXHJcbiAgICAgKi9cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRhc2hib2FyZFNlcnZpY2Uuc2V0RGltZW5zaW9ucyh0aGlzLmRhc2hib2FyZEVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCwgdGhpcy5kYXNoYm9hcmRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBvblJlc2l6ZShldmVudDogUmVzaXplRGltZW5zaW9ucyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGFzaGJvYXJkU2VydmljZS5zZXREaW1lbnNpb25zKGV2ZW50LndpZHRoLCBldmVudC5oZWlnaHQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERhc2hib2FyZE9wdGlvbnMge1xyXG4gICAgY29sdW1ucz86IG51bWJlcjtcclxuICAgIHBhZGRpbmc/OiBudW1iZXI7XHJcbiAgICBtaW5XaWR0aD86IG51bWJlcjtcclxuICAgIG1pbkhlaWdodD86IG51bWJlcjtcclxuICAgIHJvd0hlaWdodD86IG51bWJlcjtcclxuICAgIGVtcHR5Um93PzogYm9vbGVhbjtcclxufSJdfQ==