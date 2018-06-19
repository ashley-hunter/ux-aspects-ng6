/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { map } from 'rxjs/operators';
import { TabsetService } from '../tabset.service';
let /** @type {?} */ uniqueTabId = 0;
export class TabComponent {
    /**
     * @param {?} _tabset
     */
    constructor(_tabset) {
        this._tabset = _tabset;
        this.id = `ux-tab-${++uniqueTabId}`;
        this.disabled = false;
        this.select = new EventEmitter();
        this.deselect = new EventEmitter();
        this.active$ = this._tabset.active$.pipe(map(active => active === this));
        _tabset.add(this);
        this._subscription = this.active$.subscribe(active => active ? this.select.emit() : this.deselect.emit());
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set active(value) {
        if (value) {
            this._tabset.select(this);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._tabset.remove(this);
        this._subscription.unsubscribe();
    }
}
TabComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-tab',
                template: `<div role="tabpanel"
     class="tab-pane"
     [class.active]="active$ | async"
     [id]="id + '-panel'"
     [attr.aria-labelledby]="id"
     [attr.aria-hidden]="!(active$ | async)">
  <ng-content></ng-content>
</div>`,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
TabComponent.ctorParameters = () => [
    { type: TabsetService, },
];
TabComponent.propDecorators = {
    "id": [{ type: Input },],
    "disabled": [{ type: Input },],
    "heading": [{ type: Input },],
    "customClass": [{ type: Input },],
    "select": [{ type: Output },],
    "deselect": [{ type: Output },],
    "active": [{ type: Input },],
};
function TabComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TabComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TabComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    TabComponent.propDecorators;
    /** @type {?} */
    TabComponent.prototype.id;
    /** @type {?} */
    TabComponent.prototype.disabled;
    /** @type {?} */
    TabComponent.prototype.heading;
    /** @type {?} */
    TabComponent.prototype.customClass;
    /** @type {?} */
    TabComponent.prototype.select;
    /** @type {?} */
    TabComponent.prototype.deselect;
    /** @type {?} */
    TabComponent.prototype.headingRef;
    /** @type {?} */
    TabComponent.prototype.active$;
    /** @type {?} */
    TabComponent.prototype._subscription;
    /** @type {?} */
    TabComponent.prototype._tabset;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3RhYnNldC90YWIvdGFiLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFhLE1BQU0sRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUV4SCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWxELHFCQUFJLFdBQVcsR0FBRyxDQUFDLENBQUM7QUFjcEIsTUFBTTs7OztJQXFCRixZQUFvQixPQUFzQjtRQUF0QixZQUFPLEdBQVAsT0FBTyxDQUFlO2tCQW5CcEIsVUFBVSxFQUFFLFdBQVcsRUFBRTt3QkFDbEIsS0FBSztzQkFJZixJQUFJLFlBQVksRUFBUTt3QkFDdEIsSUFBSSxZQUFZLEVBQVE7dUJBU2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQztRQUtwRixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWxCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztLQUM3Rzs7Ozs7UUFmWSxNQUFNLENBQUMsS0FBYztRQUM5QixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDN0I7Ozs7O0lBY0wsV0FBVztRQUNQLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDcEM7OztZQTFDSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLFFBQVEsRUFBRTs7Ozs7OztPQU9QO2dCQUNILGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2xEOzs7O1lBZlEsYUFBYTs7O21CQWtCakIsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7NEJBQ0wsS0FBSzt1QkFFTCxNQUFNO3lCQUNOLE1BQU07dUJBRU4sS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT3V0cHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlICwgIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFRhYnNldFNlcnZpY2UgfSBmcm9tICcuLi90YWJzZXQuc2VydmljZSc7XHJcblxyXG5sZXQgdW5pcXVlVGFiSWQgPSAwO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3V4LXRhYicsXHJcbiAgICB0ZW1wbGF0ZTogYDxkaXYgcm9sZT1cInRhYnBhbmVsXCJcclxuICAgICBjbGFzcz1cInRhYi1wYW5lXCJcclxuICAgICBbY2xhc3MuYWN0aXZlXT1cImFjdGl2ZSQgfCBhc3luY1wiXHJcbiAgICAgW2lkXT1cImlkICsgJy1wYW5lbCdcIlxyXG4gICAgIFthdHRyLmFyaWEtbGFiZWxsZWRieV09XCJpZFwiXHJcbiAgICAgW2F0dHIuYXJpYS1oaWRkZW5dPVwiIShhY3RpdmUkIHwgYXN5bmMpXCI+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5gLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcblxyXG4gICAgQElucHV0KCkgaWQ6IHN0cmluZyA9IGB1eC10YWItJHsrK3VuaXF1ZVRhYklkfWA7XHJcbiAgICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgaGVhZGluZzogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgY3VzdG9tQ2xhc3M6IHN0cmluZztcclxuXHJcbiAgICBAT3V0cHV0KCkgc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gICAgQE91dHB1dCgpIGRlc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICAgIEBJbnB1dCgpIHNldCBhY3RpdmUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5fdGFic2V0LnNlbGVjdCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGVhZGluZ1JlZjogVGVtcGxhdGVSZWY8YW55PjtcclxuICAgIGFjdGl2ZSQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLl90YWJzZXQuYWN0aXZlJC5waXBlKG1hcChhY3RpdmUgPT4gYWN0aXZlID09PSB0aGlzKSk7XHJcblxyXG4gICAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfdGFic2V0OiBUYWJzZXRTZXJ2aWNlKSB7XHJcbiAgICAgICAgX3RhYnNldC5hZGQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMuYWN0aXZlJC5zdWJzY3JpYmUoYWN0aXZlID0+IGFjdGl2ZSA/IHRoaXMuc2VsZWN0LmVtaXQoKSA6IHRoaXMuZGVzZWxlY3QuZW1pdCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl90YWJzZXQucmVtb3ZlKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==