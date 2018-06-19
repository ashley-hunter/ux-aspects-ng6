/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, HostBinding } from '@angular/core';
import { DashboardService } from '../dashboard.service';
export class DashboardWidgetComponent {
    /**
     * @param {?} dashboardService
     */
    constructor(dashboardService) {
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
        this._subscription = dashboardService.options$.subscribe(() => this.update());
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._columnSpan.regular = this.colSpan;
        this._rowSpan.regular = this.rowSpan;
        if (!this.id) {
            console.warn('Dashboard Widget is missing an ID.');
            // set random id - keeps things working but prevents exporting of positions
            this.id = Math.floor(Math.random() * 100000).toString();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // add the widget to the dashboard
        this.dashboardService.addWidget(this);
        // apply the current options
        this.update();
    }
    /**
     * If component is removed, then unregister it from the service
     * @return {?}
     */
    ngOnDestroy() {
        this._subscription.unsubscribe();
        this.dashboardService.removeWidget(this);
    }
    /**
     * Apply the current dashboard options
     * @return {?}
     */
    update() {
        // get the current options at the time
        const { padding, columns } = this.dashboardService.options;
        this.padding = padding;
        this._columnSpan.stacked = columns;
    }
    /**
     * Set the actual position and size values
     * @return {?}
     */
    render() {
        this.x = this.getColumn() * this.dashboardService.getColumnWidth();
        this.y = this.getRow() * this.dashboardService.getRowHeight();
        this.width = this.getColumnSpan() * this.dashboardService.getColumnWidth();
        this.height = this.getRowSpan() * this.dashboardService.getRowHeight();
    }
    /**
     * @return {?}
     */
    getColumn() {
        return this.getStackableValue(this._column);
    }
    /**
     * @return {?}
     */
    getRow() {
        return this.getStackableValue(this._row);
    }
    /**
     * @param {?} column
     * @param {?=} render
     * @return {?}
     */
    setColumn(column, render = true) {
        this.setStackableValue(this._column, column);
        if (render) {
            this.render();
        }
    }
    /**
     * @param {?} row
     * @param {?=} render
     * @return {?}
     */
    setRow(row, render = true) {
        this.setStackableValue(this._row, row);
        if (render) {
            this.render();
        }
    }
    /**
     * @return {?}
     */
    getColumnSpan() {
        return this.getStackableValue(this._columnSpan);
    }
    /**
     * @return {?}
     */
    getRowSpan() {
        return this.getStackableValue(this._rowSpan);
    }
    /**
     * @param {?} columnSpan
     * @param {?=} render
     * @return {?}
     */
    setColumnSpan(columnSpan, render = true) {
        this.setStackableValue(this._columnSpan, columnSpan);
        if (render) {
            this.render();
        }
    }
    /**
     * @param {?} rowSpan
     * @param {?=} render
     * @return {?}
     */
    setRowSpan(rowSpan, render = true) {
        this.setStackableValue(this._rowSpan, rowSpan);
        if (render) {
            this.render();
        }
    }
    /**
     * @return {?}
     */
    bringToFront() {
        this.zIndex = 1;
    }
    /**
     * @return {?}
     */
    sendToBack() {
        this.zIndex = 0;
    }
    /**
     * @param {?} x
     * @param {?} y
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    setBounds(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    /**
     * @param {?} handle
     * @param {?} event
     * @param {?} direction
     * @return {?}
     */
    dragstart(handle, event, direction) {
        this.dashboardService.onResizeStart({ widget: this, direction: direction, event: event, handle: handle });
    }
    /**
     * @param {?} handle
     * @param {?} event
     * @param {?} direction
     * @return {?}
     */
    drag(handle, event, direction) {
        this.dashboardService.onResizeDrag({ widget: this, direction: direction, event: event, handle: handle });
    }
    /**
     * @return {?}
     */
    dragend() {
        this.dashboardService.onResizeEnd();
    }
    /**
     * Allows automatic setting of stackable value
     * @param {?} property The current StackableValue object
     * @param {?} value The value to set in the appropriate field
     * @return {?}
     */
    setStackableValue(property, value) {
        if (this.dashboardService.stacked) {
            property.stacked = value;
        }
        else {
            property.regular = value;
        }
    }
    /**
     * Return the appropriate value from a stackable value
     * @param {?} property The Stackable value object
     * @return {?}
     */
    getStackableValue(property) {
        return this.dashboardService.stacked ? property.stacked : property.regular;
    }
}
DashboardWidgetComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-dashboard-widget',
                template: `<div class="widget-content widget-col-span-{{ getColumnSpan() }} widget-row-span-{{ getRowSpan() }}">
    <ng-content></ng-content>
</div>

<div uxDrag #handleTop class="resizer-handle handle-top" 
    (dragstart)="dragstart(handleTop, $event, 0)"
    (drag)="drag(handleTop, $event, 0)"
    (dragend)="dragend()"
    [style.top.px]="padding" 
    [hidden]="!resizable">
</div>

<div uxDrag #handleTopRight class="resizer-handle handle-top-right" 
    (dragstart)="dragstart(handleTopRight, $event, 1)"
    (drag)="drag(handleTopRight, $event, 1)"
    (dragend)="dragend()"
    [style.top.px]="padding" 
    [style.right.px]="padding" 
    [hidden]="!resizable && !(dashboardService.stacked$ | async)">
</div>

<div uxDrag #handleRight class="resizer-handle handle-right" 
    (dragstart)="dragstart(handleRight, $event, 2)"
    (drag)="drag(handleRight, $event, 2)"
    (dragend)="dragend()"
    [style.right.px]="padding" 
    [hidden]="!resizable || (dashboardService.stacked$ | async)">
</div>

<div uxDrag #handleBottomRight class="resizer-handle handle-bottom-right" 
    (dragstart)="dragstart(handleBottomRight, $event, 3)"
    (drag)="drag(handleBottomRight, $event, 3)"
    (dragend)="dragend()"
    [style.bottom.px]="padding" 
    [style.right.px]="padding" 
    [hidden]="!resizable && !(dashboardService.stacked$ | async)">
</div>

<div uxDrag #handleBottom class="resizer-handle handle-bottom" 
    (dragstart)="dragstart(handleBottom, $event, 4)"
    (drag)="drag(handleBottom, $event, 4)"
    (dragend)="dragend()"
    [style.bottom.px]="padding" 
    [hidden]="!resizable">
</div>

<div uxDrag #handleBottomLeft class="resizer-handle handle-bottom-left" 
    (dragstart)="dragstart(handleBottomLeft, $event, 5)"
    (drag)="drag(handleBottomLeft, $event, 5)"
    (dragend)="dragend()"
    [style.bottom.px]="padding" 
    [style.left.px]="padding" 
    [hidden]="!resizable && !(dashboardService.stacked$ | async)">
</div>

<div uxDrag #handleLeft class="resizer-handle handle-left" 
    (dragstart)="dragstart(handleLeft, $event, 6)"
    (drag)="drag(handleLeft, $event, 6)"
    (dragend)="dragend()"
    [style.left.px]="padding" 
    [hidden]="!resizable || (dashboardService.stacked$ | async)">
</div>

<div uxDrag #handleTopLeft class="resizer-handle handle-top-left" 
    (dragstart)="dragstart(handleTopLeft, $event, 7)"
    (drag)="drag(handleTopLeft, $event, 7)"
    (dragend)="dragend()"
    [style.top.px]="padding" 
    [style.left.px]="padding" 
    [hidden]="!resizable && !(dashboardService.stacked$ | async)">
</div>`
            },] },
];
/** @nocollapse */
DashboardWidgetComponent.ctorParameters = () => [
    { type: DashboardService, },
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLXdpZGdldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9kYXNoYm9hcmQvd2lkZ2V0L2Rhc2hib2FyZC13aWRnZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsV0FBVyxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNoRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQW1CLE1BQU0sc0JBQXNCLENBQUM7QUE2RXpFLE1BQU07Ozs7SUFzQkYsWUFBbUIsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7dUJBakIxQixDQUFDO3VCQUNELENBQUM7eUJBQ0UsS0FBSztpQkFFTyxDQUFDO2lCQUNGLENBQUM7cUJBQ0ssR0FBRztzQkFDRCxHQUFHO3VCQUNELENBQUM7c0JBQ0wsQ0FBQzt1QkFFZCxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRTtvQkFDN0MsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUU7MkJBQ25DLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFO3dCQUM3QixFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRTtRQUl6RCxJQUFJLENBQUMsYUFBYSxHQUFHLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7S0FDakY7Ozs7SUFFRCxRQUFRO1FBRUosSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMs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LEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7S0FDNUc7Ozs7SUFFRCxPQUFPO1FBQ0gsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3ZDOzs7Ozs7O0lBT08saUJBQWlCLENBQUMsUUFBd0IsRUFBRSxLQUFhO1FBRTdELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1NBQzVCO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixRQUFRLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztTQUM1Qjs7Ozs7OztJQU9HLGlCQUFpQixDQUFDLFFBQXdCO1FBQzlDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDOzs7O1lBclBsRixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09Bc0VQO2FBQ047Ozs7WUE1RVEsZ0JBQWdCOzs7bUJBK0VwQixLQUFLO29CQUNMLEtBQUs7b0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSztrQkFFTCxXQUFXLFNBQUMsZUFBZTtrQkFDM0IsV0FBVyxTQUFDLGNBQWM7c0JBQzFCLFdBQVcsU0FBQyxnQkFBZ0I7dUJBQzVCLFdBQVcsU0FBQyxpQkFBaUI7d0JBQzdCLFdBQVcsU0FBQyxrQkFBa0I7dUJBQzlCLFdBQVcsU0FBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPbkRlc3Ryb3ksIEhvc3RCaW5kaW5nLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERhc2hib2FyZFNlcnZpY2UsIEFjdGlvbkRpcmVjdGlvbiB9IGZyb20gJy4uL2Rhc2hib2FyZC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndXgtZGFzaGJvYXJkLXdpZGdldCcsXHJcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJ3aWRnZXQtY29udGVudCB3aWRnZXQtY29sLXNwYW4te3sgZ2V0Q29sdW1uU3BhbigpIH19IHdpZGdldC1yb3ctc3Bhbi17eyBnZXRSb3dTcGFuKCkgfX1cIj5cclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9kaXY+XHJcblxyXG48ZGl2IHV4RHJhZyAjaGFuZGxlVG9wIGNsYXNzPVwicmVzaXplci1oYW5kbGUgaGFuZGxlLXRvcFwiIFxyXG4gICAgKGRyYWdzdGFydCk9XCJkcmFnc3RhcnQoaGFuZGxlVG9wLCAkZXZlbnQsIDApXCJcclxuICAgIChkcmFnKT1cImRyYWcoaGFuZGxlVG9wLCAkZXZlbnQsIDApXCJcclxuICAgIChkcmFnZW5kKT1cImRyYWdlbmQoKVwiXHJcbiAgICBbc3R5bGUudG9wLnB4XT1cInBhZGRpbmdcIiBcclxuICAgIFtoaWRkZW5dPVwiIXJlc2l6YWJsZVwiPlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgdXhEcmFnICNoYW5kbGVUb3BSaWdodCBjbGFzcz1cInJlc2l6ZXItaGFuZGxlIGhhbmRsZS10b3AtcmlnaHRcIiBcclxuICAgIChkcmFnc3RhcnQpPVwiZHJhZ3N0YXJ0KGhhbmRsZVRvcFJpZ2h0LCAkZXZlbnQsIDEpXCJcclxuICAgIChkcmFnKT1cImRyYWcoaGFuZGxlVG9wUmlnaHQsICRldmVudCwgMSlcIlxyXG4gICAgKGRyYWdlbmQpPVwiZHJhZ2VuZCgpXCJcclxuICAgIFtzdHlsZS50b3AucHhdPVwicGFkZGluZ1wiIFxyXG4gICAgW3N0eWxlLnJpZ2h0LnB4XT1cInBhZGRpbmdcIiBcclxuICAgIFtoaWRkZW5dPVwiIXJlc2l6YWJsZSAmJiAhKGRhc2hib2FyZFNlcnZpY2Uuc3RhY2tlZCQgfCBhc3luYylcIj5cclxuPC9kaXY+XHJcblxyXG48ZGl2IHV4RHJhZyAjaGFuZGxlUmlnaHQgY2xhc3M9XCJyZXNpemVyLWhhbmRsZSBoYW5kbGUtcmlnaHRcIiBcclxuICAgIChkcmFnc3RhcnQpPVwiZHJhZ3N0YXJ0KGhhbmRsZVJpZ2h0LCAkZXZlbnQsIDIpXCJcclxuICAgIChkcmFnKT1cImRyYWcoaGFuZGxlUmlnaHQsICRldmVudCwgMilcIlxyXG4gICAgKGRyYWdlbmQpPVwiZHJhZ2VuZCgpXCJcclxuICAgIFtzdHlsZS5yaWdodC5weF09XCJwYWRkaW5nXCIgXHJcbiAgICBbaGlkZGVuXT1cIiFyZXNpemFibGUgfHwgKGRhc2hib2FyZFNlcnZpY2Uuc3RhY2tlZCQgfCBhc3luYylcIj5cclxuPC9kaXY+XHJcblxyXG48ZGl2IHV4RHJhZyAjaGFuZGxlQm90dG9tUmlnaHQgY2xhc3M9XCJyZXNpemVyLWhhbmRsZSBoYW5kbGUtYm90dG9tLXJpZ2h0XCIgXHJcbiAgICAoZHJhZ3N0YXJ0KT1cImRyYWdzdGFydChoYW5kbGVCb3R0b21SaWdodCwgJGV2ZW50LCAzKVwiXHJcbiAgICAoZHJhZyk9XCJkcmFnKGhhbmRsZUJvdHRvbVJpZ2h0LCAkZXZlbnQsIDMpXCJcclxuICAgIChkcmFnZW5kKT1cImRyYWdlbmQoKVwiXHJcbiAgICBbc3R5bGUuYm90dG9tLnB4XT1cInBhZGRpbmdcIiBcclxuICAgIFtzdHlsZS5yaWdodC5weF09XCJwYWRkaW5nXCIgXHJcbiAgICBbaGlkZGVuXT1cIiFyZXNpemFibGUgJiYgIShkYXNoYm9hcmRTZXJ2aWNlLnN0YWNrZWQkIHwgYXN5bmMpXCI+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiB1eERyYWcgI2hhbmRsZUJvdHRvbSBjbGFzcz1cInJlc2l6ZXItaGFuZGxlIGhhbmRsZS1ib3R0b21cIiBcclxuICAgIChkcmFnc3RhcnQpPVwiZHJhZ3N0YXJ0KGhhbmRsZUJvdHRvbSwgJGV2ZW50LCA0KVwiXHJcbiAgICAoZHJhZyk9XCJkcmFnKGhhbmRsZUJvdHRvbSwgJGV2ZW50LCA0KVwiXHJcbiAgICAoZHJhZ2VuZCk9XCJkcmFnZW5kKClcIlxyXG4gICAgW3N0eWxlLmJvdHRvbS5weF09XCJwYWRkaW5nXCIgXHJcbiAgICBbaGlkZGVuXT1cIiFyZXNpemFibGVcIj5cclxuPC9kaXY+XHJcblxyXG48ZGl2IHV4RHJhZyAjaGFuZGxlQm90dG9tTGVmdCBjbGFzcz1cInJlc2l6ZXItaGFuZGxlIGhhbmRsZS1ib3R0b20tbGVmdFwiIFxyXG4gICAgKGRyYWdzdGFydCk9XCJkcmFnc3RhcnQoaGFuZGxlQm90dG9tTGVmdCwgJGV2ZW50LCA1KVwiXHJcbiAgICAoZHJhZyk9XCJkcmFnKGhhbmRsZUJvdHRvbUxlZnQsICRldmVudCwgNSlcIlxyXG4gICAgKGRyYWdlbmQpPVwiZHJhZ2VuZCgpXCJcclxuICAgIFtzdHlsZS5ib3R0b20ucHhdPVwicGFkZGluZ1wiIFxyXG4gICAgW3N0eWxlLmxlZnQucHhdPVwicGFkZGluZ1wiIFxyXG4gICAgW2hpZGRlbl09XCIhcmVzaXphYmxlICYmICEoZGFzaGJvYXJkU2VydmljZS5zdGFja2VkJCB8IGFzeW5jKVwiPlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgdXhEcmFnICNoYW5kbGVMZWZ0IGNsYXNzPVwicmVzaXplci1oYW5kbGUgaGFuZGxlLWxlZnRcIiBcclxuICAgIChkcmFnc3RhcnQpPVwiZHJhZ3N0YXJ0KGhhbmRsZUxlZnQsICRldmVudCwgNilcIlxyXG4gICAgKGRyYWcpPVwiZHJhZyhoYW5kbGVMZWZ0LCAkZXZlbnQsIDYpXCJcclxuICAgIChkcmFnZW5kKT1cImRyYWdlbmQoKVwiXHJcbiAgICBbc3R5bGUubGVmdC5weF09XCJwYWRkaW5nXCIgXHJcbiAgICBbaGlkZGVuXT1cIiFyZXNpemFibGUgfHwgKGRhc2hib2FyZFNlcnZpY2Uuc3RhY2tlZCQgfCBhc3luYylcIj5cclxuPC9kaXY+XHJcblxyXG48ZGl2IHV4RHJhZyAjaGFuZGxlVG9wTGVmdCBjbGFzcz1cInJlc2l6ZXItaGFuZGxlIGhhbmRsZS10b3AtbGVmdFwiIFxyXG4gICAgKGRyYWdzdGFydCk9XCJkcmFnc3RhcnQoaGFuZGxlVG9wTGVmdCwgJGV2ZW50LCA3KVwiXHJcbiAgICAoZHJhZyk9XCJkcmFnKGhhbmRsZVRvcExlZnQsICRldmVudCwgNylcIlxyXG4gICAgKGRyYWdlbmQpPVwiZHJhZ2VuZCgpXCJcclxuICAgIFtzdHlsZS50b3AucHhdPVwicGFkZGluZ1wiIFxyXG4gICAgW3N0eWxlLmxlZnQucHhdPVwicGFkZGluZ1wiIFxyXG4gICAgW2hpZGRlbl09XCIhcmVzaXphYmxlICYmICEoZGFzaGJvYXJkU2VydmljZS5zdGFja2VkJCB8IGFzeW5jKVwiPlxyXG48L2Rpdj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRXaWRnZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gICAgQElucHV0KCkgaWQ6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGNvbDogbnVtYmVyO1xyXG4gICAgQElucHV0KCkgcm93OiBudW1iZXI7XHJcbiAgICBASW5wdXQoKSBjb2xTcGFuOiBudW1iZXIgPSAxO1xyXG4gICAgQElucHV0KCkgcm93U3BhbjogbnVtYmVyID0gMTtcclxuICAgIEBJbnB1dCgpIHJlc2l6YWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIEBIb3N0QmluZGluZygnc3R5bGUubGVmdC5weCcpIHg6IG51bWJlciA9IDA7XHJcbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLnRvcC5weCcpIHk6IG51bWJlciA9IDA7XHJcbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLndpZHRoLnB4Jykgd2lkdGg6IG51bWJlciA9IDEwMDtcclxuICAgIEBIb3N0QmluZGluZygnc3R5bGUuaGVpZ2h0LnB4JykgaGVpZ2h0OiBudW1iZXIgPSAxMDA7XHJcbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLnBhZGRpbmcucHgnKSBwYWRkaW5nOiBudW1iZXIgPSAwO1xyXG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS56LWluZGV4JykgekluZGV4OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgX2NvbHVtbjogU3RhY2thYmxlVmFsdWUgPSB7IHJlZ3VsYXI6IHVuZGVmaW5lZCwgc3RhY2tlZDogdW5kZWZpbmVkIH07XHJcbiAgICBwcml2YXRlIF9yb3c6IFN0YWNrYWJsZVZhbHVlID0geyByZWd1bGFyOiB1bmRlZmluZWQsIHN0YWNrZWQ6IHVuZGVmaW5lZCB9O1xyXG4gICAgcHJpdmF0ZSBfY29sdW1uU3BhbjogU3RhY2thYmxlVmFsdWUgPSB7IHJlZ3VsYXI6IDEsIHN0YWNrZWQ6IDEgfTtcclxuICAgIHByaXZhdGUgX3Jvd1NwYW46IFN0YWNrYWJsZVZhbHVlID0geyByZWd1bGFyOiAxLCBzdGFja2VkOiAxIH07XHJcbiAgICBwcml2YXRlIF9zdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZGFzaGJvYXJkU2VydmljZTogRGFzaGJvYXJkU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IGRhc2hib2FyZFNlcnZpY2Uub3B0aW9ucyQuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLl9jb2x1bW5TcGFuLnJlZ3VsYXIgPSB0aGlzLmNvbFNwYW47XHJcbiAgICAgICAgdGhpcy5fcm93U3Bhbi5yZWd1bGFyID0gdGhpcy5yb3dTcGFuO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdEYXNoYm9hcmQgV2lkZ2V0IGlzIG1pc3NpbmcgYW4gSUQuJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBzZXQgcmFuZG9tIGlkIC0ga2VlcHMgdGhpbmdzIHdvcmtpbmcgYnV0IHByZXZlbnRzIGV4cG9ydGluZyBvZiBwb3NpdGlvbnNcclxuICAgICAgICAgICAgdGhpcy5pZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMCkudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGFkZCB0aGUgd2lkZ2V0IHRvIHRoZSBkYXNoYm9hcmRcclxuICAgICAgICB0aGlzLmRhc2hib2FyZFNlcnZpY2UuYWRkV2lkZ2V0KHRoaXMpO1xyXG5cclxuICAgICAgICAvLyBhcHBseSB0aGUgY3VycmVudCBvcHRpb25zXHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIElmIGNvbXBvbmVudCBpcyByZW1vdmVkLCB0aGVuIHVucmVnaXN0ZXIgaXQgZnJvbSB0aGUgc2VydmljZVxyXG4gICAgICovXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB0aGlzLmRhc2hib2FyZFNlcnZpY2UucmVtb3ZlV2lkZ2V0KHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQXBwbHkgdGhlIGN1cnJlbnQgZGFzaGJvYXJkIG9wdGlvbnNcclxuICAgICAqL1xyXG4gICAgdXBkYXRlKCk6IHZvaWQge1xyXG5cclxuICAgICAgICAvLyBnZXQgdGhlIGN1cnJlbnQgb3B0aW9ucyBhdCB0aGUgdGltZSBcclxuICAgICAgICBjb25zdCB7IHBhZGRpbmcsIGNvbHVtbnMgfSA9IHRoaXMuZGFzaGJvYXJkU2VydmljZS5vcHRpb25zO1xyXG5cclxuICAgICAgICB0aGlzLnBhZGRpbmcgPSBwYWRkaW5nO1xyXG4gICAgICAgIHRoaXMuX2NvbHVtblNwYW4uc3RhY2tlZCA9IGNvbHVtbnM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhlIGFjdHVhbCBwb3NpdGlvbiBhbmQgc2l6ZSB2YWx1ZXNcclxuICAgICAqL1xyXG4gICAgcmVuZGVyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMueCA9IHRoaXMuZ2V0Q29sdW1uKCkgKiB0aGlzLmRhc2hib2FyZFNlcnZpY2UuZ2V0Q29sdW1uV2lkdGgoKTtcclxuICAgICAgICB0aGlzLnkgPSB0aGlzLmdldFJvdygpICogdGhpcy5kYXNoYm9hcmRTZXJ2aWNlLmdldFJvd0hlaWdodCgpO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB0aGlzLmdldENvbHVtblNwYW4oKSAqIHRoaXMuZGFzaGJvYXJkU2VydmljZS5nZXRDb2x1bW5XaWR0aCgpO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5nZXRSb3dTcGFuKCkgKiB0aGlzLmRhc2hib2FyZFNlcnZpY2UuZ2V0Um93SGVpZ2h0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29sdW1uKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RhY2thYmxlVmFsdWUodGhpcy5fY29sdW1uKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSb3coKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRTdGFja2FibGVWYWx1ZSh0aGlzLl9yb3cpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENvbHVtbihjb2x1bW46IG51bWJlciwgcmVuZGVyOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhY2thYmxlVmFsdWUodGhpcy5fY29sdW1uLCBjb2x1bW4pO1xyXG5cclxuICAgICAgICBpZiAocmVuZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFJvdyhyb3c6IG51bWJlciwgcmVuZGVyOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhY2thYmxlVmFsdWUodGhpcy5fcm93LCByb3cpO1xyXG5cclxuICAgICAgICBpZiAocmVuZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldENvbHVtblNwYW4oKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRTdGFja2FibGVWYWx1ZSh0aGlzLl9jb2x1bW5TcGFuKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSb3dTcGFuKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RhY2thYmxlVmFsdWUodGhpcy5fcm93U3Bhbik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q29sdW1uU3Bhbihjb2x1bW5TcGFuOiBudW1iZXIsIHJlbmRlcjogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldFN0YWNrYWJsZVZhbHVlKHRoaXMuX2NvbHVtblNwYW4sIGNvbHVtblNwYW4pO1xyXG5cclxuICAgICAgICBpZiAocmVuZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFJvd1NwYW4ocm93U3BhbjogbnVtYmVyLCByZW5kZXI6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGFja2FibGVWYWx1ZSh0aGlzLl9yb3dTcGFuLCByb3dTcGFuKTtcclxuXHJcbiAgICAgICAgaWYgKHJlbmRlcikge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBicmluZ1RvRnJvbnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy56SW5kZXggPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbmRUb0JhY2soKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy56SW5kZXggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEJvdW5kcyh4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIGRyYWdzdGFydChoYW5kbGU6IEhUTUxFbGVtZW50LCBldmVudDogTW91c2VFdmVudCwgZGlyZWN0aW9uOiBBY3Rpb25EaXJlY3Rpb24pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRhc2hib2FyZFNlcnZpY2Uub25SZXNpemVTdGFydCh7IHdpZGdldDogdGhpcywgZGlyZWN0aW9uOiBkaXJlY3Rpb24sIGV2ZW50OiBldmVudCwgaGFuZGxlOiBoYW5kbGUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhZyhoYW5kbGU6IEhUTUxFbGVtZW50LCBldmVudDogTW91c2VFdmVudCwgZGlyZWN0aW9uOiBBY3Rpb25EaXJlY3Rpb24pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRhc2hib2FyZFNlcnZpY2Uub25SZXNpemVEcmFnKHsgd2lkZ2V0OiB0aGlzLCBkaXJlY3Rpb246IGRpcmVjdGlvbiwgZXZlbnQ6IGV2ZW50LCBoYW5kbGU6IGhhbmRsZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkcmFnZW5kKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGFzaGJvYXJkU2VydmljZS5vblJlc2l6ZUVuZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWxsb3dzIGF1dG9tYXRpYyBzZXR0aW5nIG9mIHN0YWNrYWJsZSB2YWx1ZVxyXG4gICAgICogQHBhcmFtIHByb3BlcnR5IFRoZSBjdXJyZW50IFN0YWNrYWJsZVZhbHVlIG9iamVjdFxyXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQgaW4gdGhlIGFwcHJvcHJpYXRlIGZpZWxkXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc2V0U3RhY2thYmxlVmFsdWUocHJvcGVydHk6IFN0YWNrYWJsZVZhbHVlLCB2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRhc2hib2FyZFNlcnZpY2Uuc3RhY2tlZCkge1xyXG4gICAgICAgICAgICBwcm9wZXJ0eS5zdGFja2VkID0gdmFsdWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcHJvcGVydHkucmVndWxhciA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybiB0aGUgYXBwcm9wcmlhdGUgdmFsdWUgZnJvbSBhIHN0YWNrYWJsZSB2YWx1ZVxyXG4gICAgICogQHBhcmFtIHByb3BlcnR5IFRoZSBTdGFja2FibGUgdmFsdWUgb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ2V0U3RhY2thYmxlVmFsdWUocHJvcGVydHk6IFN0YWNrYWJsZVZhbHVlKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXNoYm9hcmRTZXJ2aWNlLnN0YWNrZWQgPyBwcm9wZXJ0eS5zdGFja2VkIDogcHJvcGVydHkucmVndWxhcjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGFja2FibGVWYWx1ZSB7XHJcbiAgICByZWd1bGFyOiBudW1iZXI7XHJcbiAgICBzdGFja2VkOiBudW1iZXI7XHJcbn0iXX0=