/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { map } from 'rxjs/operators';
import { TabsetService } from '../tabset.service';
var /** @type {?} */ uniqueTabId = 0;
var TabComponent = /** @class */ (function () {
    function TabComponent(_tabset) {
        var _this = this;
        this._tabset = _tabset;
        this.id = "ux-tab-" + ++uniqueTabId;
        this.disabled = false;
        this.select = new EventEmitter();
        this.deselect = new EventEmitter();
        this.active$ = this._tabset.active$.pipe(map(function (active) { return active === _this; }));
        _tabset.add(this);
        this._subscription = this.active$.subscribe(function (active) { return active ? _this.select.emit() : _this.deselect.emit(); });
    }
    Object.defineProperty(TabComponent.prototype, "active", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this._tabset.select(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TabComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._tabset.remove(this);
        this._subscription.unsubscribe();
    };
    TabComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-tab',
                    template: "<div role=\"tabpanel\"\n     class=\"tab-pane\"\n     [class.active]=\"active$ | async\"\n     [id]=\"id + '-panel'\"\n     [attr.aria-labelledby]=\"id\"\n     [attr.aria-hidden]=\"!(active$ | async)\">\n  <ng-content></ng-content>\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    TabComponent.ctorParameters = function () { return [
        { type: TabsetService, },
    ]; };
    TabComponent.propDecorators = {
        "id": [{ type: Input },],
        "disabled": [{ type: Input },],
        "heading": [{ type: Input },],
        "customClass": [{ type: Input },],
        "select": [{ type: Output },],
        "deselect": [{ type: Output },],
        "active": [{ type: Input },],
    };
    return TabComponent;
}());
export { TabComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3RhYnNldC90YWIvdGFiLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFhLE1BQU0sRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUV4SCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWxELHFCQUFJLFdBQVcsR0FBRyxDQUFDLENBQUM7O0lBbUNoQixzQkFBb0IsT0FBc0I7UUFBMUMsaUJBSUM7UUFKbUIsWUFBTyxHQUFQLE9BQU8sQ0FBZTtrQkFuQnBCLFlBQVUsRUFBRSxXQUFhO3dCQUNsQixLQUFLO3NCQUlmLElBQUksWUFBWSxFQUFRO3dCQUN0QixJQUFJLFlBQVksRUFBUTt1QkFTZCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxLQUFLLEtBQUksRUFBZixDQUFlLENBQUMsQ0FBQztRQUtwRixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWxCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWxELENBQWtELENBQUMsQ0FBQztLQUM3RzswQkFmWSxnQ0FBTTs7Ozs7a0JBQUMsS0FBYztZQUM5QixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNSLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzdCOzs7Ozs7OztJQWNMLGtDQUFXOzs7SUFBWDtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDcEM7O2dCQTFDSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLFFBQVEsRUFBRSxpUEFPUDtvQkFDSCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDbEQ7Ozs7Z0JBZlEsYUFBYTs7O3VCQWtCakIsS0FBSzs2QkFDTCxLQUFLOzRCQUNMLEtBQUs7Z0NBQ0wsS0FBSzsyQkFFTCxNQUFNOzZCQUNOLE1BQU07MkJBRU4sS0FBSzs7dUJBN0JWOztTQW1CYSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPdXRwdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgLCAgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgVGFic2V0U2VydmljZSB9IGZyb20gJy4uL3RhYnNldC5zZXJ2aWNlJztcclxuXHJcbmxldCB1bmlxdWVUYWJJZCA9IDA7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndXgtdGFiJyxcclxuICAgIHRlbXBsYXRlOiBgPGRpdiByb2xlPVwidGFicGFuZWxcIlxyXG4gICAgIGNsYXNzPVwidGFiLXBhbmVcIlxyXG4gICAgIFtjbGFzcy5hY3RpdmVdPVwiYWN0aXZlJCB8IGFzeW5jXCJcclxuICAgICBbaWRdPVwiaWQgKyAnLXBhbmVsJ1wiXHJcbiAgICAgW2F0dHIuYXJpYS1sYWJlbGxlZGJ5XT1cImlkXCJcclxuICAgICBbYXR0ci5hcmlhLWhpZGRlbl09XCIhKGFjdGl2ZSQgfCBhc3luYylcIj5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PmAsXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFiQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuXHJcbiAgICBASW5wdXQoKSBpZDogc3RyaW5nID0gYHV4LXRhYi0keysrdW5pcXVlVGFiSWR9YDtcclxuICAgIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBoZWFkaW5nOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBjdXN0b21DbGFzczogc3RyaW5nO1xyXG5cclxuICAgIEBPdXRwdXQoKSBzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgICBAT3V0cHV0KCkgZGVzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gICAgQElucHV0KCkgc2V0IGFjdGl2ZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl90YWJzZXQuc2VsZWN0KHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoZWFkaW5nUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gICAgYWN0aXZlJDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuX3RhYnNldC5hY3RpdmUkLnBpcGUobWFwKGFjdGl2ZSA9PiBhY3RpdmUgPT09IHRoaXMpKTtcclxuXHJcbiAgICBwcml2YXRlIF9zdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF90YWJzZXQ6IFRhYnNldFNlcnZpY2UpIHtcclxuICAgICAgICBfdGFic2V0LmFkZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uID0gdGhpcy5hY3RpdmUkLnN1YnNjcmliZShhY3RpdmUgPT4gYWN0aXZlID8gdGhpcy5zZWxlY3QuZW1pdCgpIDogdGhpcy5kZXNlbGVjdC5lbWl0KCkpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3RhYnNldC5yZW1vdmUodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG59Il19