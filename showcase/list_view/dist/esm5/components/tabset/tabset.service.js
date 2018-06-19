/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
var TabsetService = /** @class */ (function () {
    function TabsetService() {
        this.tabs$ = new BehaviorSubject([]);
        this.active$ = new BehaviorSubject(null);
        this.focused$ = new BehaviorSubject(false);
        this.highlighted$ = new BehaviorSubject(null);
    }
    /**
     * @param {?} tab
     * @return {?}
     */
    TabsetService.prototype.add = /**
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
        this.tabs$.next(tslib_1.__spread(this.tabs$.value, [tab]));
        // check if this is the only tab. If so select this by default
        if (!this.active$.value) {
            this.select(tab);
        }
    };
    /**
     * @param {?} tab
     * @return {?}
     */
    TabsetService.prototype.remove = /**
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
        // remove the tab
        this.tabs$.next(this.tabs$.value.filter(function (_tab) { return _tab !== tab; }));
    };
    /**
     * @param {?} tab
     * @return {?}
     */
    TabsetService.prototype.select = /**
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
        if (!tab.disabled) {
            this.active$.next(tab);
            this.highlighted$.next(tab);
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    TabsetService.prototype.selectAtIndex = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        // if there are no tabs then do nothing
        if (this.tabs$.value.length === 0) {
            return;
        }
        // check if the index is within the bounds
        if (index < 0) {
            return this.selectAtIndex(this.tabs$.value.length - 1);
        }
        else if (index >= this.tabs$.value.length) {
            return this.selectAtIndex(0);
        }
        var /** @type {?} */ target = this.tabs$.value[index];
        if (target) {
            this.select(target);
        }
    };
    /**
     * @return {?}
     */
    TabsetService.prototype.selectNextTab = /**
     * @return {?}
     */
    function () {
        // find the currently selected index
        var /** @type {?} */ index = this.tabs$.value.indexOf(this.active$.value);
        // check the tabs after the active one to see if there are any selectable tabs
        var /** @type {?} */ tabs = this.tabs$.value.slice(index + 1);
        try {
            // check if any of the tabs are not disabled
            for (var tabs_1 = tslib_1.__values(tabs), tabs_1_1 = tabs_1.next(); !tabs_1_1.done; tabs_1_1 = tabs_1.next()) {
                var tab = tabs_1_1.value;
                if (!tab.disabled) {
                    return this.select(tab);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (tabs_1_1 && !tabs_1_1.done && (_a = tabs_1.return)) _a.call(tabs_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        // if we reach here then no tab could be selected - select the first tab
        this.selectFirstTab();
        var e_1, _a;
    };
    /**
     * @return {?}
     */
    TabsetService.prototype.selectPreviousTab = /**
     * @return {?}
     */
    function () {
        // find the currently selected index
        var /** @type {?} */ index = this.tabs$.value.indexOf(this.active$.value);
        // check the tabs before the active one to see if there are any selectable tabs
        var /** @type {?} */ tabs = this.tabs$.value.slice(0, index);
        try {
            // check if any of the tabs are not disabled
            for (var _a = tslib_1.__values(tabs.reverse()), _b = _a.next(); !_b.done; _b = _a.next()) {
                var tab = _b.value;
                if (!tab.disabled) {
                    return this.select(tab);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_2) throw e_2.error; }
        }
        // if we reach here then no previous tab could be selected - select the last tab
        this.selectLastTab();
        var e_2, _c;
    };
    /**
     * @return {?}
     */
    TabsetService.prototype.selectFirstTab = /**
     * @return {?}
     */
    function () {
        // find the index of the first non-disabled tab
        var /** @type {?} */ tabIndex = this.tabs$.value.findIndex(function (tab) { return !tab.disabled; });
        if (tabIndex !== -1) {
            this.selectAtIndex(tabIndex);
        }
    };
    /**
     * @return {?}
     */
    TabsetService.prototype.selectLastTab = /**
     * @return {?}
     */
    function () {
        // find the index of the first non-disabled tab
        var /** @type {?} */ tabIndex = this.tabs$.value.slice().reverse().findIndex(function (tab) { return !tab.disabled; });
        if (tabIndex !== -1) {
            this.selectAtIndex((this.tabs$.value.length - 1) - tabIndex);
        }
    };
    TabsetService.decorators = [
        { type: Injectable },
    ];
    return TabsetService;
}());
export { TabsetService };
function TabsetService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TabsetService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TabsetService.ctorParameters;
    /** @type {?} */
    TabsetService.prototype.tabs$;
    /** @type {?} */
    TabsetService.prototype.active$;
    /** @type {?} */
    TabsetService.prototype.focused$;
    /** @type {?} */
    TabsetService.prototype.highlighted$;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFic2V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy90YWJzZXQvdGFic2V0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7OztxQkFNM0IsSUFBSSxlQUFlLENBQWlCLEVBQUUsQ0FBQzt1QkFDckMsSUFBSSxlQUFlLENBQWUsSUFBSSxDQUFDO3dCQUN0QyxJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUM7NEJBQy9CLElBQUksZUFBZSxDQUFlLElBQUksQ0FBQzs7Ozs7O0lBRXRELDJCQUFHOzs7O0lBQUgsVUFBSSxHQUFpQjtRQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksa0JBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUUsR0FBRyxHQUFFLENBQUM7O1FBRzVDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDcEI7S0FDSjs7Ozs7SUFFRCw4QkFBTTs7OztJQUFOLFVBQU8sR0FBaUI7O1FBR3BCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksS0FBSyxHQUFHLEVBQVosQ0FBWSxDQUFDLENBQUMsQ0FBQztLQUNsRTs7Ozs7SUFFRCw4QkFBTTs7OztJQUFOLFVBQU8sR0FBaUI7UUFDcEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsT0FBTyxD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QyxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2hDO0tBQ0o7Ozs7SUFFRCxxQ0FBYTs7O0lBQWI7O1FBRUkscUJBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBYixDQUFhLENBQUMsQ0FBQztRQUVwRixFQUFFLENBQUMsQ0FBQyxRQUFRLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUM7U0FDaEU7S0FDSjs7Z0JBdkdKLFVBQVU7O3dCQUpYOztTQUthLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBUYWJDb21wb25lbnQgfSBmcm9tICcuL3RhYi90YWIuY29tcG9uZW50JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRhYnNldFNlcnZpY2Uge1xyXG5cclxuICAgIHRhYnMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxUYWJDb21wb25lbnRbXT4oW10pO1xyXG4gICAgYWN0aXZlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8VGFiQ29tcG9uZW50PihudWxsKTtcclxuICAgIGZvY3VzZWQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XHJcbiAgICBoaWdobGlnaHRlZCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFRhYkNvbXBvbmVudD4obnVsbCk7XHJcblxyXG4gICAgYWRkKHRhYjogVGFiQ29tcG9uZW50KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50YWJzJC5uZXh0KFsuLi50aGlzLnRhYnMkLnZhbHVlLCB0YWJdKTtcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgaWYgdGhpcyBpcyB0aGUgb25seSB0YWIuIElmIHNvIHNlbGVjdCB0aGlzIGJ5IGRlZmF1bHRcclxuICAgICAgICBpZiAoIXRoaXMuYWN0aXZlJC52YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdCh0YWIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmUodGFiOiBUYWJDb21wb25lbnQpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gcmVtb3ZlIHRoZSB0YWJcclxuICAgICAgICB0aGlzLnRhYnMkLm5leHQodGhpcy50YWJzJC52YWx1ZS5maWx0ZXIoX3RhYiA9PiBfdGFiICE9PSB0YWIpKTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3QodGFiOiBUYWJDb21wb25lbnQpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRhYi5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZSQubmV4dCh0YWIpO1xyXG4gICAgICAgICAgICB0aGlzLmhpZ2hsaWdodGVkJC5uZXh0KHRhYik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdEF0SW5kZXgoaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG5cclxuICAgICAgICAvLyBpZiB0aGVyZSBhcmUgbm8gdGFicyB0aGVuIGRvIG5vdGhpbmdcclxuICAgICAgICBpZiAodGhpcy50YWJzJC52YWx1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGluZGV4IGlzIHdpdGhpbiB0aGUgYm91bmRzXHJcbiAgICAgICAgaWYgKGluZGV4IDwgMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RBdEluZGV4KHRoaXMudGFicyQudmFsdWUubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA+PSB0aGlzLnRhYnMkLnZhbHVlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RBdEluZGV4KDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy50YWJzJC52YWx1ZVtpbmRleF07XHJcblxyXG4gICAgICAgIGlmICh0YXJnZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3QodGFyZ2V0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0TmV4dFRhYigpOiB2b2lkIHtcclxuICAgICAgICAvLyBmaW5kIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgaW5kZXhcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMudGFicyQudmFsdWUuaW5kZXhPZih0aGlzLmFjdGl2ZSQudmFsdWUpO1xyXG5cclxuICAgICAgICAvLyBjaGVjayB0aGUgdGFicyBhZnRlciB0aGUgYWN0aXZlIG9uZSB0byBzZWUgaWYgdGhlcmUgYXJlIGFueSBzZWxlY3RhYmxlIHRhYnNcclxuICAgICAgICBjb25zdCB0YWJzID0gdGhpcy50YWJzJC52YWx1ZS5zbGljZShpbmRleCArIDEpO1xyXG5cclxuICAgICAgICAvLyBjaGVjayBpZiBhbnkgb2YgdGhlIHRhYnMgYXJlIG5vdCBkaXNhYmxlZFxyXG4gICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKSB7XHJcbiAgICAgICAgICAgIGlmICghdGFiLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3QodGFiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYgd2UgcmVhY2ggaGVyZSB0aGVuIG5vIHRhYiBjb3VsZCBiZSBzZWxlY3RlZCAtIHNlbGVjdCB0aGUgZmlyc3QgdGFiXHJcbiAgICAgICAgdGhpcy5zZWxlY3RGaXJzdFRhYigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdFByZXZpb3VzVGFiKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGZpbmQgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBpbmRleFxyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy50YWJzJC52YWx1ZS5pbmRleE9mKHRoaXMuYWN0aXZlJC52YWx1ZSk7XHJcblxyXG4gICAgICAgIC8vIGNoZWNrIHRoZSB0YWJzIGJlZm9yZSB0aGUgYWN0aXZlIG9uZSB0byBzZWUgaWYgdGhlcmUgYXJlIGFueSBzZWxlY3RhYmxlIHRhYnNcclxuICAgICAgICBjb25zdCB0YWJzID0gdGhpcy50YWJzJC52YWx1ZS5zbGljZSgwLCBpbmRleCk7XHJcblxyXG4gICAgICAgIC8vIGNoZWNrIGlmIGFueSBvZiB0aGUgdGFicyBhcmUgbm90IGRpc2FibGVkXHJcbiAgICAgICAgZm9yIChsZXQgdGFiIG9mIHRhYnMucmV2ZXJzZSgpKSB7XHJcbiAgICAgICAgICAgIGlmICghdGFiLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3QodGFiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYgd2UgcmVhY2ggaGVyZSB0aGVuIG5vIHByZXZpb3VzIHRhYiBjb3VsZCBiZSBzZWxlY3RlZCAtIHNlbGVjdCB0aGUgbGFzdCB0YWJcclxuICAgICAgICB0aGlzLnNlbGVjdExhc3RUYWIoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RGaXJzdFRhYigpOiB2b2lkIHtcclxuICAgICAgICAvLyBmaW5kIHRoZSBpbmRleCBvZiB0aGUgZmlyc3Qgbm9uLWRpc2FibGVkIHRhYlxyXG4gICAgICAgIGNvbnN0IHRhYkluZGV4ID0gdGhpcy50YWJzJC52YWx1ZS5maW5kSW5kZXgodGFiID0+ICF0YWIuZGlzYWJsZWQpO1xyXG5cclxuICAgICAgICBpZiAodGFiSW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0QXRJbmRleCh0YWJJbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdExhc3RUYWIoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gZmluZCB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IG5vbi1kaXNhYmxlZCB0YWJcclxuICAgICAgICBjb25zdCB0YWJJbmRleCA9IHRoaXMudGFicyQudmFsdWUuc2xpY2UoKS5yZXZlcnNlKCkuZmluZEluZGV4KHRhYiA9PiAhdGFiLmRpc2FibGVkKTtcclxuXHJcbiAgICAgICAgaWYgKHRhYkluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdEF0SW5kZXgoKHRoaXMudGFicyQudmFsdWUubGVuZ3RoIC0gMSkgLSB0YWJJbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59ICJdfQ==