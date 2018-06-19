/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, HostBinding } from '@angular/core';
import { DashboardService } from '../dashboard.service';
var DashboardWidgetComponent = /** @class */ (function () {
    function DashboardWidgetComponent(dashboardService) {
        var _this = this;
        this.dashboardService = dashboardService;
        this.colSpan = 1;
        this.rowSpan = 1;
        this.resizable = false;
        this.x = 0;
        this.y = 0;
        this.width = 100;
        this.height = 100;
        this.padding = 0;
        this.zIndex = 0;
        this._column = { regular: undefined, stacked: undefined };
        this._row = { regular: undefined, stacked: undefined };
        this._columnSpan = { regular: 1, stacked: 1 };
        this._rowSpan = { regular: 1, stacked: 1 };
        this._subscription = dashboardService.options$.subscribe(function () { return _this.update(); });
    }
    /**
     * @return {?}
     */
    DashboardWidgetComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._columnSpan.regular = this.colSpan;
        this._rowSpan.regular = this.rowSpan;
        if (!this.id) {
            console.warn('Dashboard Widget is missing an ID.');
            // set random id - keeps things working but prevents exporting of positions
            this.id = Math.floor(Math.random() * 100000).toString();
        }
    };
    /**
     * @return {?}
     */
    DashboardWidgetComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        // add the widget to the dashboard
        this.dashboardService.addWidget(this);
        // apply the current options
        this.update();
    };
    /**
     * If component is removed, then unregister it from the service
     */
    /**
     * If component is removed, then unregister it from the service
     * @return {?}
     */
    DashboardWidgetComponent.prototype.ngOnDestroy = /**
     * If component is removed, then unregister it from the service
     * @return {?}
     */
    function () {
        this._subscription.unsubscribe();
        this.dashboardService.removeWidget(this);
    };
    /**
     * Apply the current dashboard options
     */
    /**
     * Apply the current dashboard options
     * @return {?}
     */
    DashboardWidgetComponent.prototype.update = /**
     * Apply the current dashboard options
     * @return {?}
     */
    function () {
        // get the current options at the time
        var _a = this.dashboardService.options, padding = _a.padding, columns = _a.columns;
        this.padding = padding;
        this._columnSpan.stacked = columns;
    };
    /**
     * Set the actual position and size values
     */
    /**
     * Set the actual position and size values
     * @return {?}
     */
    DashboardWidgetComponent.prototype.render = /**
     * Set the actual position and size values
     * @return {?}
     */
    function () {
        this.x = this.getColumn() * this.dashboardService.getColumnWidth();
        this.y = this.getRow() * this.dashboardService.getRowHeight();
        this.width = this.getColumnSpan() * this.dashboardService.getColumnWidth();
        this.height = this.getRowSpan() * this.dashboardService.getRowHeight();
    };
    /**
     * @return {?}
     */
    DashboardWidgetComponent.prototype.getColumn = /**
     * @return {?}
     */
    function () {
        return this.getStackableValue(this._column);
    };
    /**
     * @return {?}
     */
    DashboardWidgetComponent.prototype.getRow = /**
     * @return {?}
     */
    function () {
        return this.getStackableValue(this._row);
    };
    /**
     * @param {?} column
     * @param {?=} render
     * @return {?}
     */
    DashboardWidgetComponent.prototype.setColumn = /**
     * @param {?} column
     * @param {?=} render
     * @return {?}
     */
    function (column, render) {
        if (render === void 0) { render = true; }
        this.setStackableValue(this._column, column);
        if (render) {
            this.render();
        }
    };
    /**
     * @param {?} row
     * @param {?=} render
     * @return {?}
     */
    DashboardWidgetComponent.prototype.setRow = /**
     * @param {?} row
     * @param {?=} render
     * @return {?}
     */
    function (row, render) {
        if (render === void 0) { render = true; }
        this.setStackableValue(this._row, row);
        if (render) {
            this.render();
        }
    };
    /**
     * @return {?}
     */
    DashboardWidgetComponent.prototype.getColumnSpan = /**
     * @return {?}
     */
    function () {
        return this.getStackableValue(this._columnSpan);
    };
    /**
     * @return {?}
     */
    DashboardWidgetComponent.prototype.getRowSpan = /**
     * @return {?}
     */
    function () {
        return this.getStackableValue(this._rowSpan);
    };
    /**
     * @param {?} columnSpan
     * @param {?=} render
     * @return {?}
     */
    DashboardWidgetComponent.prototype.setColumnSpan = /**
     * @param {?} columnSpan
     * @param {?=} render
     * @return {?}
     */
    function (columnSpan, render) {
        if (render === void 0) { render = true; }
        this.setStackableValue(this._columnSpan, columnSpan);
        if (render) {
            this.render();
        }
    };
    /**
     * @param {?} rowSpan
     * @param {?=} render
     * @return {?}
     */
    DashboardWidgetComponent.prototype.setRowSpan = /**
     * @param {?} rowSpan
     * @param {?=} render
     * @return {?}
     */
    function (rowSpan, render) {
        if (render === void 0) { render = true; }
        this.setStackableValue(this._rowSpan, rowSpan);
        if (render) {
            this.render();
        }
    };
    /**
     * @return {?}
     */
    DashboardWidgetComponent.prototype.bringToFront = /**
     * @return {?}
     */
    function () {
        this.zIndex = 1;
    };
    /**
     * @return {?}
     */
    DashboardWidgetComponent.prototype.sendToBack = /**
     * @return {?}
     */
    function () {
        this.zIndex = 0;
    };
    /**
     * @param {?} x
     * @param {?} y
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    DashboardWidgetComponent.prototype.setBounds = /**
     * @param {?} x
     * @param {?} y
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    function (x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    };
    /**
     * @param {?} handle
     * @param {?} event
     * @param {?} direction
     * @return {?}
     */
    DashboardWidgetComponent.prototype.dragstart = /**
     * @param {?} handle
     * @param {?} event
     * @param {?} direction
     * @return {?}
     */
    function (handle, event, direction) {
        this.dashboardService.onResizeStart({ widget: this, direction: direction, event: event, handle: handle });
    };
    /**
     * @param {?} handle
     * @param {?} event
     * @param {?} direction
     * @return {?}
     */
    DashboardWidgetComponent.prototype.drag = /**
     * @param {?} handle
     * @param {?} event
     * @param {?} direction
     * @return {?}
     */
    function (handle, event, direction) {
        this.dashboardService.onResizeDrag({ widget: this, direction: direction, event: event, handle: handle });
    };
    /**
     * @return {?}
     */
    DashboardWidgetComponent.prototype.dragend = /**
     * @return {?}
     */
    function () {
        this.dashboardService.onResizeEnd();
    };
    /**
     * Allows automatic setting of stackable value
     * @param {?} property The current StackableValue object
     * @param {?} value The value to set in the appropriate field
     * @return {?}
     */
    DashboardWidgetComponent.prototype.setStackableValue = /**
     * Allows automatic setting of stackable value
     * @param {?} property The current StackableValue object
     * @param {?} value The value to set in the appropriate field
     * @return {?}
     */
    function (property, value) {
        if (this.dashboardService.stacked) {
            property.stacked = value;
        }
        else {
            property.regular = value;
        }
    };
    /**
     * Return the appropriate value from a stackable value
     * @param {?} property The Stackable value object
     * @return {?}
     */
    DashboardWidgetComponent.prototype.getStackableValue = /**
     * Return the appropriate value from a stackable value
     * @param {?} property The Stackable value object
     * @return {?}
     */
    function (property) {
        return this.dashboardService.stacked ? property.stacked : property.regular;
    };
    DashboardWidgetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-dashboard-widget',
                    template: "<div class=\"widget-content widget-col-span-{{ getColumnSpan() }} widget-row-span-{{ getRowSpan() }}\">\n    <ng-content></ng-content>\n</div>\n\n<div uxDrag #handleTop class=\"resizer-handle handle-top\" \n    (dragstart)=\"dragstart(handleTop, $event, 0)\"\n    (drag)=\"drag(handleTop, $event, 0)\"\n    (dragend)=\"dragend()\"\n    [style.top.px]=\"padding\" \n    [hidden]=\"!resizable\">\n</div>\n\n<div uxDrag #handleTopRight class=\"resizer-handle handle-top-right\" \n    (dragstart)=\"dragstart(handleTopRight, $event, 1)\"\n    (drag)=\"drag(handleTopRight, $event, 1)\"\n    (dragend)=\"dragend()\"\n    [style.top.px]=\"padding\" \n    [style.right.px]=\"padding\" \n    [hidden]=\"!resizable && !(dashboardService.stacked$ | async)\">\n</div>\n\n<div uxDrag #handleRight class=\"resizer-handle handle-right\" \n    (dragstart)=\"dragstart(handleRight, $event, 2)\"\n    (drag)=\"drag(handleRight, $event, 2)\"\n    (dragend)=\"dragend()\"\n    [style.right.px]=\"padding\" \n    [hidden]=\"!resizable || (dashboardService.stacked$ | async)\">\n</div>\n\n<div uxDrag #handleBottomRight class=\"resizer-handle handle-bottom-right\" \n    (dragstart)=\"dragstart(handleBottomRight, $event, 3)\"\n    (drag)=\"drag(handleBottomRight, $event, 3)\"\n    (dragend)=\"dragend()\"\n    [style.bottom.px]=\"padding\" \n    [style.right.px]=\"padding\" \n    [hidden]=\"!resizable && !(dashboardService.stacked$ | async)\">\n</div>\n\n<div uxDrag #handleBottom class=\"resizer-handle handle-bottom\" \n    (dragstart)=\"dragstart(handleBottom, $event, 4)\"\n    (drag)=\"drag(handleBottom, $event, 4)\"\n    (dragend)=\"dragend()\"\n    [style.bottom.px]=\"padding\" \n    [hidden]=\"!resizable\">\n</div>\n\n<div uxDrag #handleBottomLeft class=\"resizer-handle handle-bottom-left\" \n    (dragstart)=\"dragstart(handleBottomLeft, $event, 5)\"\n    (drag)=\"drag(handleBottomLeft, $event, 5)\"\n    (dragend)=\"dragend()\"\n    [style.bottom.px]=\"padding\" \n    [style.left.px]=\"padding\" \n    [hidden]=\"!resizable && !(dashboardService.stacked$ | async)\">\n</div>\n\n<div uxDrag #handleLeft class=\"resizer-handle handle-left\" \n    (dragstart)=\"dragstart(handleLeft, $event, 6)\"\n    (drag)=\"drag(handleLeft, $event, 6)\"\n    (dragend)=\"dragend()\"\n    [style.left.px]=\"padding\" \n    [hidden]=\"!resizable || (dashboardService.stacked$ | async)\">\n</div>\n\n<div uxDrag #handleTopLeft class=\"resizer-handle handle-top-left\" \n    (dragstart)=\"dragstart(handleTopLeft, $event, 7)\"\n    (drag)=\"drag(handleTopLeft, $event, 7)\"\n    (dragend)=\"dragend()\"\n    [style.top.px]=\"padding\" \n    [style.left.px]=\"padding\" \n    [hidden]=\"!resizable && !(dashboardService.stacked$ | async)\">\n</div>"
                },] },
    ];
    /** @nocollapse */
    DashboardWidgetComponent.ctorParameters = function () { return [
        { type: DashboardService, },
    ]; };
    DashboardWidgetComponent.propDecorators = {
        "id": [{ type: Input },],
        "col": [{ type: Input },],
        "row": [{ type: Input },],
        "colSpan": [{ type: Input },],
        "rowSpan": [{ type: Input },],
        "resizable": [{ type: Input },],
        "x": [{ type: HostBinding, args: ['style.left.px',] },],
        "y": [{ type: HostBinding, args: ['style.top.px',] },],
        "width": [{ type: HostBinding, args: ['style.width.px',] },],
        "height": [{ type: HostBinding, args: ['style.height.px',] },],
        "padding": [{ type: HostBinding, args: ['style.padding.px',] },],
        "zIndex": [{ type: HostBinding, args: ['style.z-index',] },],
    };
    return DashboardWidgetComponent;
}());
export { DashboardWidgetComponent };
function DashboardWidgetComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    DashboardWidgetComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    DashboardWidgetComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    DashboardWidgetComponent.propDecorators;
    /** @type {?} */
    DashboardWidgetComponent.prototype.id;
    /** @type {?} */
    DashboardWidgetComponent.prototype.col;
    /** @type {?} */
    DashboardWidgetComponent.prototype.row;
    /** @type {?} */
    DashboardWidgetComponent.prototype.colSpan;
    /** @type {?} */
    DashboardWidgetComponent.prototype.rowSpan;
    /** @type {?} */
    DashboardWidgetComponent.prototype.resizable;
    /** @type {?} */
    DashboardWidgetComponent.prototype.x;
    /** @type {?} */
    DashboardWidgetComponent.prototype.y;
    /** @type {?} */
    DashboardWidgetComponent.prototype.width;
    /** @type {?} */
    DashboardWidgetComponent.prototype.height;
    /** @type {?} */
    DashboardWidgetComponent.prototype.padding;
    /** @type {?} */
    DashboardWidgetComponent.prototype.zIndex;
    /** @type {?} */
    DashboardWidgetComponent.prototype._column;
    /** @type {?} */
    DashboardWidgetComponent.prototype._row;
    /** @type {?} */
    DashboardWidgetComponent.prototype._columnSpan;
    /** @type {?} */
    DashboardWidgetComponent.prototype._rowSpan;
    /** @type {?} */
    DashboardWidgetComponent.prototype._subscription;
    /** @type {?} */
    DashboardWidgetComponent.prototype.dashboardService;
}
/**
 * @record
 */
export function StackableValue() { }
function StackableValue_tsickle_Closure_declarations() {
    /** @type {?} */
    StackableValue.prototype.regular;
    /** @type {?} */
    StackableValue.prototype.stacked;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9kYXNoYm9hcmQvd2lkZ2V0L2Rhc2hib2FyZC13aWRnZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsV0FBVyxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNoRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQW1CLE1BQU0sc0JBQXNCLENBQUM7O0lBbUdyRSxrQ0FBbUIsZ0JBQWtDO1FBQXJELGlCQUVDO1FBRmtCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7dUJBakIxQixDQUFDO3VCQUNELENBQUM7eUJBQ0UsS0FBSztpQkFFTyxDQUFDO2lCQUNGLENBQUM7cUJBQ0ssR0FBRztzQkFDRCxHQUFHO3VCQUNELENBQUM7c0JBQ0wsQ0FBQzt1QkFFZCxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRTtvQkFDN0MsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUU7MkJBQ25DLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFO3dCQUM3QixFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRTtRQUl6RCxJQUFJLENBQUMsYUFBYSxHQUFHLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLEVBQUUsRUFBYixDQUFhLENBQUMsQ0FBQztLQUNqRjs7OztJQUVELDJDQUFROzs7SUFBUjtRQUVJLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUVyQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ1gsT0FBTyxDQUFDLElBQUksQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDOztZQUduRCxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQzNEO0tBQ0o7Ozs7SUFFRCxrREFBZTs7O0lBQWY7O1FBRUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7UUFHdEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQ2pCO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsOENBQVc7Ozs7SUFBWDtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM1QztJQUVEOztPQUVHOzs7OztJQUNILHlDQUFNOzs7O0lBQU47O1FBR0ksd0NBQVEsb0JBQU8sRUFBRSxvQkFBTyxDQUFtQztRQUUzRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7S0FDdEM7SUFFRDs7T0FFRzs7Ozs7SUFDSCx5Q0FBTTs7OztJQUFOO1FBQ0ksSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25FLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM5RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDM0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxDQUFDO0tBQzFFOzs7O0lBRUQsNENBQVM7OztJQUFUO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDL0M7Ozs7SUFFRCx5Q0FBTTs7O0lBQU47UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM1Qzs7Ozs7O0lBRUQsNENBQVM7Ozs7O0lBQVQsVUFBVSxNQUFjLEVBQUUsTUFBc0I7UUFBdEIsdUJBQUEsRUFBQSxhQUFzQjtRQUM1QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUU3QyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ1QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2pCO0tBQ0o7Ozs7OztJQUVELHlDQUFNOzs7OztJQUFOLFVBQU8sR0FBVyxFQUFFLE1BQXNCO1FBQXRCLHVCQUFBLEVBQUEsYUFBc0I7UUFDdEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFdkMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNULElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNqQjtLQUNKOzs7O0lBRUQsZ0RBQWE7OztJQUFiO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDbkQ7Ozs7SUFFRCw2Q0FBVTs7O0lBQVY7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUNoRDs7Ozs7O0lBRUQsZ0RBQWE7Ozs7O0lBQWIsVUFBYyxVQUFrQixFQUFFLE1BQXNCO1FBQXRCLHVCQUFBLEVBQUEsYUFBc0I7UUFDcEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFFckQsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNULElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNqQjtLQUNKOzs7Ozs7SUFFRCw2Q0FBVTs7Ozs7SUFBVixVQUFXLE9BQWUsRUFBRSxNQUFzQjtRQUF0Qix1QkFBQSxFQUFBLGFBQXNCO1FBQzlDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRS9DLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDVCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDakI7S0FDSjs7OztJQUVELCtDQUFZOzs7SUFBWjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0tBQ25COzs7O0lBRUQsNkNBQVU7OztJQUFWO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7S0FDbkI7Ozs7Ozs7O0lBRUQsNENBQVM7Ozs7Ozs7SUFBVCxVQUFVLENBQVMsRUFBRSxDQUFTLEVBQUUsS0FBYSxFQUFFLE1BQWM7UUFDekQsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0tBQ3hCOzs7Ozs7O0lBRUQsNENBQVM7Ozs7OztJQUFULFVBQVUsTUFBbUIsRUFBRSxLQUFpQixFQUFFLFNBQTBCO1FBQ3hFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztLQUM3Rzs7Ozs7OztJQUVELHVDQUFJOzs7Ozs7SUFBSixVQUFLLE1BQW1CLEVBQUUsS0FBaUIsRUFBRSxTQUEwQjtRQUNuRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7S0FDNUc7Ozs7SUFFRCwwQ0FBTzs7O0lBQVA7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDdkM7Ozs7Ozs7SUFPTyxvREFBaUI7Ozs7OztjQUFDLFFBQXdCLEVBQUUsS0FBYTtRQUU3RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNoQyxRQUFRLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztTQUM1QjtRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osUUFBUSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7U0FDNUI7Ozs7Ozs7SUFPRyxvREFBaUI7Ozs7O2NBQUMsUUFBd0I7UUFDOUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7OztnQkFyUGxGLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUUsd3FGQXNFUDtpQkFDTjs7OztnQkE1RVEsZ0JBQWdCOzs7dUJBK0VwQixLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzs0QkFDTCxLQUFLOzRCQUNMLEtBQUs7OEJBQ0wsS0FBSztzQkFFTCxXQUFXLFNBQUMsZUFBZTtzQkFDM0IsV0FBVyxTQUFDLGNBQWM7MEJBQzFCLFdBQVcsU0FBQyxnQkFBZ0I7MkJBQzVCLFdBQVcsU0FBQyxpQkFBaUI7NEJBQzdCLFdBQVcsU0FBQyxrQkFBa0I7MkJBQzlCLFdBQVcsU0FBQyxlQUFlOzttQ0E1RmhDOztTQThFYSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE9uRGVzdHJveSwgSG9zdEJpbmRpbmcsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGFzaGJvYXJkU2VydmljZSwgQWN0aW9uRGlyZWN0aW9uIH0gZnJvbSAnLi4vZGFzaGJvYXJkLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd1eC1kYXNoYm9hcmQtd2lkZ2V0JyxcclxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIndpZGdldC1jb250ZW50IHdpZGdldC1jb2wtc3Bhbi17eyBnZXRDb2x1bW5TcGFuKCkgfX0gd2lkZ2V0LXJvdy1zcGFuLXt7IGdldFJvd1NwYW4oKSB9fVwiPlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgdXhEcmFnICNoYW5kbGVUb3AgY2xhc3M9XCJyZXNpemVyLWhhbmRsZSBoYW5kbGUtdG9wXCIgXHJcbiAgICAoZHJhZ3N0YXJ0KT1cImRyYWdzdGFydChoYW5kbGVUb3AsICRldmVudCwgMClcIlxyXG4gICAgKGRyYWcpPVwiZHJhZyhoYW5kbGVUb3AsICRldmVudCwgMClcIlxyXG4gICAgKGRyYWdlbmQpPVwiZHJhZ2VuZCgpXCJcclxuICAgIFtzdHlsZS50b3AucHhdPVwicGFkZGluZ1wiIFxyXG4gICAgW2hpZGRlbl09XCIhcmVzaXphYmxlXCI+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiB1eERyYWcgI2hhbmRsZVRvcFJpZ2h0IGNsYXNzPVwicmVzaXplci1oYW5kbGUgaGFuZGxlLXRvcC1yaWdodFwiIFxyXG4gICAgKGRyYWdzdGFydCk9XCJkcmFnc3RhcnQoaGFuZGxlVG9wUmlnaHQsICRldmVudCwgMSlcIlxyXG4gICAgKGRyYWcpPVwiZHJhZyhoYW5kbGVUb3BSaWdodCwgJGV2ZW50LCAxKVwiXHJcbiAgICAoZHJhZ2VuZCk9XCJkcmFnZW5kKClcIlxyXG4gICAgW3N0eWxlLnRvcC5weF09XCJwYWRkaW5nXCIgXHJcbiAgICBbc3R5bGUucmlnaHQucHhdPVwicGFkZGluZ1wiIFxyXG4gICAgW2hpZGRlbl09XCIhcmVzaXphYmxlICYmICEoZGFzaGJvYXJkU2VydmljZS5zdGFja2VkJCB8IGFzeW5jKVwiPlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgdXhEcmFnICNoYW5kbGVSaWdodCBjbGFzcz1cInJlc2l6ZXItaGFuZGxlIGhhbmRsZS1yaWdodFwiIFxyXG4gICAgKGRyYWdzdGFydCk9XCJkcmFnc3RhcnQoaGFuZGxlUmlnaHQsICRldmVudCwgMilcIlxyXG4gICAgKGRyYWcpPVwiZHJhZyhoYW5kbGVSaWdodCwgJGV2ZW50LCAyKVwiXHJcbiAgICAoZHJhZ2VuZCk9XCJkcmFnZW5kKClcIlxyXG4gICAgW3N0eWxlLnJpZ2h0LnB4XT1cInBhZGRpbmdcIiBcclxuICAgIFtoaWRkZW5dPVwiIXJlc2l6YWJsZSB8fCAoZGFzaGJvYXJkU2VydmljZS5zdGFja2VkJCB8IGFzeW5jKVwiPlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgdXhEcmFnICNoYW5kbGVCb3R0b21SaWdodCBjbGFzcz1cInJlc2l6ZXItaGFuZGxlIGhhbmRsZS1ib3R0b20tcmlnaHRcIiBcclxuICAgIChkcmFnc3RhcnQpPVwiZHJhZ3N0YXJ0KGhhbmRsZUJvdHRvbVJpZ2h0LCAkZXZlbnQsIDMpXCJcclxuICAgIChkcmFnKT1cImRyYWcoaGFuZGxlQm90dG9tUmlnaHQsICRldmVudCwgMylcIlxyXG4gICAgKGRyYWdlbmQpPVwiZHJhZ2VuZCgpXCJcclxuICAgIFtzdHlsZS5ib3R0b20ucHhdPVwicGFkZGluZ1wiIFxyXG4gICAgW3N0eWxlLnJpZ2h0LnB4XT1cInBhZGRpbmdcIiBcclxuICAgIFtoaWRkZW5dPVwiIXJlc2l6YWJsZSAmJiAhKGRhc2hib2FyZFNlcnZpY2Uuc3RhY2tlZCQgfCBhc3luYylcIj5cclxuPC9kaXY+XHJcblxyXG48ZGl2IHV4RHJhZyAjaGFuZGxlQm90dG9tIGNsYXNzPVwicmVzaXplci1oYW5kbGUgaGFuZGxlLWJvdHRvbVwiIFxyXG4gICAgKGRyYWdzdGFydCk9XCJkcmFnc3RhcnQoaGFuZGxlQm90dG9tLCAkZXZlbnQsIDQpXCJcclxuICAgIChkcmFnKT1cImRyYWcoaGFuZGxlQm90dG9tLCAkZXZlbnQsIDQpXCJcclxuICAgIChkcmFnZW5kKT1cImRyYWdlbmQoKVwiXHJcbiAgICBbc3R5bGUuYm90dG9tLnB4XT1cInBhZGRpbmdcIiBcclxuICAgIFtoaWRkZW5dPVwiIXJlc2l6YWJsZVwiPlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgdXhEcmFnICNoYW5kbGVCb3R0b21MZWZ0IGNsYXNzPVwicmVzaXplci1oYW5kbGUgaGFuZGxlLWJvdHRvbS1sZWZ0XCIgXHJcbiAgICAoZHJhZ3N0YXJ0KT1cImRyYWdzdGFydChoYW5kbGVCb3R0b21MZWZ0LCAkZXZlbnQsIDUpXCJcclxuICAgIChkcmFnKT1cImRyYWcoaGFuZGxlQm90dG9tTGVmdCwgJGV2ZW50LCA1KVwiXHJcbiAgICAoZHJhZ2VuZCk9XCJkcmFnZW5kKClcIlxyXG4gICAgW3N0eWxlLmJvdHRvbS5weF09XCJwYWRkaW5nXCIgXHJcbiAgICBbc3R5bGUubGVmdC5weF09XCJwYWRkaW5nXCIgXHJcbiAgICBbaGlkZGVuXT1cIiFyZXNpemFibGUgJiYgIShkYXNoYm9hcmRTZXJ2aWNlLnN0YWNrZWQkIHwgYXN5bmMpXCI+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiB1eERyYWcgI2hhbmRsZUxlZnQgY2xhc3M9XCJyZXNpemVyLWhhbmRsZSBoYW5kbGUtbGVmdFwiIFxyXG4gICAgKGRyYWdzdGFydCk9XCJkcmFnc3RhcnQoaGFuZGxlTGVmdCwgJGV2ZW50LCA2KVwiXHJcbiAgICAoZHJhZyk9XCJkcmFnKGhhbmRsZUxlZnQsICRldmVudCwgNilcIlxyXG4gICAgKGRyYWdlbmQpPVwiZHJhZ2VuZCgpXCJcclxuICAgIFtzdHlsZS5sZWZ0LnB4XT1cInBhZGRpbmdcIiBcclxuICAgIFtoaWRkZW5dPVwiIXJlc2l6YWJsZSB8fCAoZGFzaGJvYXJkU2VydmljZS5zdGFja2VkJCB8IGFzeW5jKVwiPlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgdXhEcmFnICNoYW5kbGVUb3BMZWZ0IGNsYXNzPVwicmVzaXplci1oYW5kbGUgaGFuZGxlLXRvcC1sZWZ0XCIgXHJcbiAgICAoZHJhZ3N0YXJ0KT1cImRyYWdzdGFydChoYW5kbGVUb3BMZWZ0LCAkZXZlbnQsIDcpXCJcclxuICAgIChkcmFnKT1cImRyYWcoaGFuZGxlVG9wTGVmdCwgJGV2ZW50LCA3KVwiXHJcbiAgICAoZHJhZ2VuZCk9XCJkcmFnZW5kKClcIlxyXG4gICAgW3N0eWxlLnRvcC5weF09XCJwYWRkaW5nXCIgXHJcbiAgICBbc3R5bGUubGVmdC5weF09XCJwYWRkaW5nXCIgXHJcbiAgICBbaGlkZGVuXT1cIiFyZXNpemFibGUgJiYgIShkYXNoYm9hcmRTZXJ2aWNlLnN0YWNrZWQkIHwgYXN5bmMpXCI+XHJcbjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIERhc2hib2FyZFdpZGdldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgICBASW5wdXQoKSBpZDogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgY29sOiBudW1iZXI7XHJcbiAgICBASW5wdXQoKSByb3c6IG51bWJlcjtcclxuICAgIEBJbnB1dCgpIGNvbFNwYW46IG51bWJlciA9IDE7XHJcbiAgICBASW5wdXQoKSByb3dTcGFuOiBudW1iZXIgPSAxO1xyXG4gICAgQElucHV0KCkgcmVzaXphYmxlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS5sZWZ0LnB4JykgeDogbnVtYmVyID0gMDtcclxuICAgIEBIb3N0QmluZGluZygnc3R5bGUudG9wLnB4JykgeTogbnVtYmVyID0gMDtcclxuICAgIEBIb3N0QmluZGluZygnc3R5bGUud2lkdGgucHgnKSB3aWR0aDogbnVtYmVyID0gMTAwO1xyXG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS5oZWlnaHQucHgnKSBoZWlnaHQ6IG51bWJlciA9IDEwMDtcclxuICAgIEBIb3N0QmluZGluZygnc3R5bGUucGFkZGluZy5weCcpIHBhZGRpbmc6IG51bWJlciA9IDA7XHJcbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLnotaW5kZXgnKSB6SW5kZXg6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBfY29sdW1uOiBTdGFja2FibGVWYWx1ZSA9IHsgcmVndWxhcjogdW5kZWZpbmVkLCBzdGFja2VkOiB1bmRlZmluZWQgfTtcclxuICAgIHByaXZhdGUgX3JvdzogU3RhY2thYmxlVmFsdWUgPSB7IHJlZ3VsYXI6IHVuZGVmaW5lZCwgc3RhY2tlZDogdW5kZWZpbmVkIH07XHJcbiAgICBwcml2YXRlIF9jb2x1bW5TcGFuOiBTdGFja2FibGVWYWx1ZSA9IHsgcmVndWxhcjogMSwgc3RhY2tlZDogMSB9O1xyXG4gICAgcHJpdmF0ZSBfcm93U3BhbjogU3RhY2thYmxlVmFsdWUgPSB7IHJlZ3VsYXI6IDEsIHN0YWNrZWQ6IDEgfTtcclxuICAgIHByaXZhdGUgX3N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBkYXNoYm9hcmRTZXJ2aWNlOiBEYXNoYm9hcmRTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uID0gZGFzaGJvYXJkU2VydmljZS5vcHRpb25zJC5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGUoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuX2NvbHVtblNwYW4ucmVndWxhciA9IHRoaXMuY29sU3BhbjtcclxuICAgICAgICB0aGlzLl9yb3dTcGFuLnJlZ3VsYXIgPSB0aGlzLnJvd1NwYW47XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5pZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0Rhc2hib2FyZCBXaWRnZXQgaXMgbWlzc2luZyBhbiBJRC4nKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHNldCByYW5kb20gaWQgLSBrZWVwcyB0aGluZ3Mgd29ya2luZyBidXQgcHJldmVudHMgZXhwb3J0aW5nIG9mIHBvc2l0aW9uc1xyXG4gICAgICAgICAgICB0aGlzLmlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwKS50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gYWRkIHRoZSB3aWRnZXQgdG8gdGhlIGRhc2hib2FyZFxyXG4gICAgICAgIHRoaXMuZGFzaGJvYXJkU2VydmljZS5hZGRXaWRnZXQodGhpcyk7XHJcblxyXG4gICAgICAgIC8vIGFwcGx5IHRoZSBjdXJyZW50IG9wdGlvbnNcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSWYgY29tcG9uZW50IGlzIHJlbW92ZWQsIHRoZW4gdW5yZWdpc3RlciBpdCBmcm9tIHRoZSBzZXJ2aWNlXHJcbiAgICAgKi9cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIHRoaXMuZGFzaGJvYXJkU2VydmljZS5yZW1vdmVXaWRnZXQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBcHBseSB0aGUgY3VycmVudCBkYXNoYm9hcmQgb3B0aW9uc1xyXG4gICAgICovXHJcbiAgICB1cGRhdGUoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIC8vIGdldCB0aGUgY3VycmVudCBvcHRpb25zIGF0IHRoZSB0aW1lIFxyXG4gICAgICAgIGNvbnN0IHsgcGFkZGluZywgY29sdW1ucyB9ID0gdGhpcy5kYXNoYm9hcmRTZXJ2aWNlLm9wdGlvbnM7XHJcblxyXG4gICAgICAgIHRoaXMucGFkZGluZyA9IHBhZGRpbmc7XHJcbiAgICAgICAgdGhpcy5fY29sdW1uU3Bhbi5zdGFja2VkID0gY29sdW1ucztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCB0aGUgYWN0dWFsIHBvc2l0aW9uIGFuZCBzaXplIHZhbHVlc1xyXG4gICAgICovXHJcbiAgICByZW5kZXIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy54ID0gdGhpcy5nZXRDb2x1bW4oKSAqIHRoaXMuZGFzaGJvYXJkU2VydmljZS5nZXRDb2x1bW5XaWR0aCgpO1xyXG4gICAgICAgIHRoaXMueSA9IHRoaXMuZ2V0Um93KCkgKiB0aGlzLmRhc2hib2FyZFNlcnZpY2UuZ2V0Um93SGVpZ2h0KCk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuZ2V0Q29sdW1uU3BhbigpICogdGhpcy5kYXNoYm9hcmRTZXJ2aWNlLmdldENvbHVtbldpZHRoKCk7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmdldFJvd1NwYW4oKSAqIHRoaXMuZGFzaGJvYXJkU2VydmljZS5nZXRSb3dIZWlnaHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb2x1bW4oKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRTdGFja2FibGVWYWx1ZSh0aGlzLl9jb2x1bW4pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJvdygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFN0YWNrYWJsZVZhbHVlKHRoaXMuX3Jvdyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q29sdW1uKGNvbHVtbjogbnVtYmVyLCByZW5kZXI6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGFja2FibGVWYWx1ZSh0aGlzLl9jb2x1bW4sIGNvbHVtbik7XHJcblxyXG4gICAgICAgIGlmIChyZW5kZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Um93KHJvdzogbnVtYmVyLCByZW5kZXI6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGFja2FibGVWYWx1ZSh0aGlzLl9yb3csIHJvdyk7XHJcblxyXG4gICAgICAgIGlmIChyZW5kZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29sdW1uU3BhbigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFN0YWNrYWJsZVZhbHVlKHRoaXMuX2NvbHVtblNwYW4pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJvd1NwYW4oKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRTdGFja2FibGVWYWx1ZSh0aGlzLl9yb3dTcGFuKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDb2x1bW5TcGFuKGNvbHVtblNwYW46IG51bWJlciwgcmVuZGVyOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhY2thYmxlVmFsdWUodGhpcy5fY29sdW1uU3BhbiwgY29sdW1uU3Bhbik7XHJcblxyXG4gICAgICAgIGlmIChyZW5kZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Um93U3Bhbihyb3dTcGFuOiBudW1iZXIsIHJlbmRlcjogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldFN0YWNrYWJsZVZhbHVlKHRoaXMuX3Jvd1NwYW4sIHJvd1NwYW4pO1xyXG5cclxuICAgICAgICBpZiAocmVuZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJyaW5nVG9Gcm9udCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnpJbmRleCA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgc2VuZFRvQmFjaygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnpJbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Qm91bmRzKHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhZ3N0YXJ0KGhhbmRsZTogSFRNTEVsZW1lbnQsIGV2ZW50OiBNb3VzZUV2ZW50LCBkaXJlY3Rpb246IEFjdGlvbkRpcmVjdGlvbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGFzaGJvYXJkU2VydmljZS5vblJlc2l6ZVN0YXJ0KHsgd2lkZ2V0OiB0aGlzLCBkaXJlY3Rpb246IGRpcmVjdGlvbiwgZXZlbnQ6IGV2ZW50LCBoYW5kbGU6IGhhbmRsZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkcmFnKGhhbmRsZTogSFRNTEVsZW1lbnQsIGV2ZW50OiBNb3VzZUV2ZW50LCBkaXJlY3Rpb246IEFjdGlvbkRpcmVjdGlvbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGFzaGJvYXJkU2VydmljZS5vblJlc2l6ZURyYWcoeyB3aWRnZXQ6IHRoaXMsIGRpcmVjdGlvbjogZGlyZWN0aW9uLCBldmVudDogZXZlbnQsIGhhbmRsZTogaGFuZGxlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYWdlbmQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kYXNoYm9hcmRTZXJ2aWNlLm9uUmVzaXplRW5kKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbGxvd3MgYXV0b21hdGljIHNldHRpbmcgb2Ygc3RhY2thYmxlIHZhbHVlXHJcbiAgICAgKiBAcGFyYW0gcHJvcGVydHkgVGhlIGN1cnJlbnQgU3RhY2thYmxlVmFsdWUgb2JqZWN0XHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldCBpbiB0aGUgYXBwcm9wcmlhdGUgZmllbGRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzZXRTdGFja2FibGVWYWx1ZShwcm9wZXJ0eTogU3RhY2thYmxlVmFsdWUsIHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGFzaGJvYXJkU2VydmljZS5zdGFja2VkKSB7XHJcbiAgICAgICAgICAgIHByb3BlcnR5LnN0YWNrZWQgPSB2YWx1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwcm9wZXJ0eS5yZWd1bGFyID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRoZSBhcHByb3ByaWF0ZSB2YWx1ZSBmcm9tIGEgc3RhY2thYmxlIHZhbHVlXHJcbiAgICAgKiBAcGFyYW0gcHJvcGVydHkgVGhlIFN0YWNrYWJsZSB2YWx1ZSBvYmplY3RcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnZXRTdGFja2FibGVWYWx1ZShwcm9wZXJ0eTogU3RhY2thYmxlVmFsdWUpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhc2hib2FyZFNlcnZpY2Uuc3RhY2tlZCA/IHByb3BlcnR5LnN0YWNrZWQgOiBwcm9wZXJ0eS5yZWd1bGFyO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YWNrYWJsZVZhbHVlIHtcclxuICAgIHJlZ3VsYXI6IG51bWJlcjtcclxuICAgIHN0YWNrZWQ6IG51bWJlcjtcclxufSJdfQ==