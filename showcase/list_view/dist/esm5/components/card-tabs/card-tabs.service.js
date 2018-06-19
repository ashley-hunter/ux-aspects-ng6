/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
var CardTabsService = /** @class */ (function () {
    function CardTabsService() {
        var _this = this;
        this.tab$ = new BehaviorSubject(null);
        this.tabs$ = new BehaviorSubject([]);
        this.position$ = new BehaviorSubject('top');
        // when a tab is added or removed ensure we always select one if any are available
        this._subscription = this.tabs$.pipe(filter(function (tabs) { return !_this.tab$.value || !tabs.find(function (tab) { return tab === _this.tab$.value; }); })).subscribe(function (tabs) { return _this.tab$.next(tabs.length > 0 ? tabs[0] : null); });
    }
    /**
     * @return {?}
     */
    CardTabsService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscription.unsubscribe();
    };
    /**
     * Add a tab to the list of tabs
     */
    /**
     * Add a tab to the list of tabs
     * @param {?} tab
     * @return {?}
     */
    CardTabsService.prototype.addTab = /**
     * Add a tab to the list of tabs
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
        this.tabs$.next(tslib_1.__spread(this.tabs$.value, [tab]));
    };
    /**
     * Remove a tab from the list
     */
    /**
     * Remove a tab from the list
     * @param {?} tab
     * @return {?}
     */
    CardTabsService.prototype.removeTab = /**
     * Remove a tab from the list
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
        this.tabs$.next(this.tabs$.value.filter(function (_tab) { return _tab !== tab; }));
    };
    /**
     * Select the tab
     */
    /**
     * Select the tab
     * @param {?} tab
     * @return {?}
     */
    CardTabsService.prototype.select = /**
     * Select the tab
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
        this.tab$.next(tab);
    };
    /**
     * Set the position of the tab content
     */
    /**
     * Set the position of the tab content
     * @param {?} position
     * @return {?}
     */
    CardTabsService.prototype.setPosition = /**
     * Set the position of the tab content
     * @param {?} position
     * @return {?}
     */
    function (position) {
        this.position$.next(position);
    };
    CardTabsService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    CardTabsService.ctorParameters = function () { return []; };
    return CardTabsService;
}());
export { CardTabsService };
function CardTabsService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    CardTabsService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    CardTabsService.ctorParameters;
    /** @type {?} */
    CardTabsService.prototype.tab$;
    /** @type {?} */
    CardTabsService.prototype.tabs$;
    /** @type {?} */
    CardTabsService.prototype.position$;
    /** @type {?} */
    CardTabsService.prototype._subscription;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC10YWJzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9jYXJkLXRhYnMvY2FyZC10YWJzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQWtCLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7SUFZdEM7UUFBQSxpQkFNQztvQkFaTSxJQUFJLGVBQWUsQ0FBbUIsSUFBSSxDQUFDO3FCQUMxQyxJQUFJLGVBQWUsQ0FBcUIsRUFBRSxDQUFDO3lCQUN2QyxJQUFJLGVBQWUsQ0FBUyxLQUFLLENBQUM7O1FBTzVDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ2xDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxLQUFLLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUF2QixDQUF1QixDQUFDLEVBQTlELENBQThELENBQUMsQ0FDL0UsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBaEQsQ0FBZ0QsQ0FBQyxDQUFDO0tBQ3ZFOzs7O0lBRUQscUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUNsQztJQUVEOztPQUVHOzs7Ozs7SUFDSCxnQ0FBTTs7Ozs7SUFBTixVQUFPLEdBQXFCO1FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxrQkFBSyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRSxHQUFHLEdBQUUsQ0FBQztLQUM3QztJQUVEOztPQUVHOzs7Ozs7SUFDSCxtQ0FBUzs7Ozs7SUFBVCxVQUFVLEdBQXFCO1FBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksS0FBSyxHQUFHLEVBQVosQ0FBWSxDQUFDLENBQUMsQ0FBQztLQUNoRTtJQUVEOztPQUVHOzs7Ozs7SUFDSCxnQ0FBTTs7Ozs7SUFBTixVQUFPLEdBQXFCO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3JCO0lBRUQ7O09BRUc7Ozs7OztJQUNILHFDQUFXOzs7OztJQUFYLFVBQVksUUFBZ0I7UUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDL0I7O2dCQS9DRixVQUFVOzs7OzBCQUxYOztTQU1hLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0ICwgIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IENhcmRUYWJDb21wb25lbnQgfSBmcm9tICcuL2NhcmQtdGFiL2NhcmQtdGFiLmNvbXBvbmVudCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDYXJkVGFic1NlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG5cclxuICB0YWIkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxDYXJkVGFiQ29tcG9uZW50PihudWxsKTtcclxuICB0YWJzJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Q2FyZFRhYkNvbXBvbmVudFtdPihbXSk7XHJcbiAgcG9zaXRpb24kID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KCd0b3AnKTtcclxuXHJcbiAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIC8vIHdoZW4gYSB0YWIgaXMgYWRkZWQgb3IgcmVtb3ZlZCBlbnN1cmUgd2UgYWx3YXlzIHNlbGVjdCBvbmUgaWYgYW55IGFyZSBhdmFpbGFibGVcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMudGFicyQucGlwZShcclxuICAgICAgZmlsdGVyKHRhYnMgPT4gIXRoaXMudGFiJC52YWx1ZSB8fCAhdGFicy5maW5kKHRhYiA9PiB0YWIgPT09IHRoaXMudGFiJC52YWx1ZSkpLFxyXG4gICAgKS5zdWJzY3JpYmUodGFicyA9PiB0aGlzLnRhYiQubmV4dCh0YWJzLmxlbmd0aCA+IDAgPyB0YWJzWzBdIDogbnVsbCkpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZCBhIHRhYiB0byB0aGUgbGlzdCBvZiB0YWJzXHJcbiAgICovXHJcbiAgYWRkVGFiKHRhYjogQ2FyZFRhYkNvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy50YWJzJC5uZXh0KFsuLi50aGlzLnRhYnMkLnZhbHVlLCB0YWJdKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSBhIHRhYiBmcm9tIHRoZSBsaXN0XHJcbiAgICovXHJcbiAgcmVtb3ZlVGFiKHRhYjogQ2FyZFRhYkNvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy50YWJzJC5uZXh0KHRoaXMudGFicyQudmFsdWUuZmlsdGVyKF90YWIgPT4gX3RhYiAhPT0gdGFiKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZWxlY3QgdGhlIHRhYlxyXG4gICAqL1xyXG4gIHNlbGVjdCh0YWI6IENhcmRUYWJDb21wb25lbnQpOiB2b2lkIHtcclxuICAgIHRoaXMudGFiJC5uZXh0KHRhYik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXQgdGhlIHBvc2l0aW9uIG9mIHRoZSB0YWIgY29udGVudFxyXG4gICAqL1xyXG4gIHNldFBvc2l0aW9uKHBvc2l0aW9uOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMucG9zaXRpb24kLm5leHQocG9zaXRpb24pO1xyXG4gIH1cclxufVxyXG4iXX0=