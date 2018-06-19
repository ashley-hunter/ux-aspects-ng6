/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
export class CardTabsService {
    constructor() {
        this.tab$ = new BehaviorSubject(null);
        this.tabs$ = new BehaviorSubject([]);
        this.position$ = new BehaviorSubject('top');
        // when a tab is added or removed ensure we always select one if any are available
        this._subscription = this.tabs$.pipe(filter(tabs => !this.tab$.value || !tabs.find(tab => tab === this.tab$.value))).subscribe(tabs => this.tab$.next(tabs.length > 0 ? tabs[0] : null));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
    /**
     * Add a tab to the list of tabs
     * @param {?} tab
     * @return {?}
     */
    addTab(tab) {
        this.tabs$.next([...this.tabs$.value, tab]);
    }
    /**
     * Remove a tab from the list
     * @param {?} tab
     * @return {?}
     */
    removeTab(tab) {
        this.tabs$.next(this.tabs$.value.filter(_tab => _tab !== tab));
    }
    /**
     * Select the tab
     * @param {?} tab
     * @return {?}
     */
    select(tab) {
        this.tab$.next(tab);
    }
    /**
     * Set the position of the tab content
     * @param {?} position
     * @return {?}
     */
    setPosition(position) {
        this.position$.next(position);
    }
}
CardTabsService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
CardTabsService.ctorParameters = () => [];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC10YWJzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9jYXJkLXRhYnMvY2FyZC10YWJzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBa0IsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSXhDLE1BQU07SUFRSjtvQkFOTyxJQUFJLGVBQWUsQ0FBbUIsSUFBSSxDQUFDO3FCQUMxQyxJQUFJLGVBQWUsQ0FBcUIsRUFBRSxDQUFDO3lCQUN2QyxJQUFJLGVBQWUsQ0FBUyxLQUFLLENBQUM7O1FBTzVDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDL0UsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQ3ZFOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDbEM7Ozs7OztJQUtELE1BQU0sQ0FBQyxHQUFxQjtRQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUM3Qzs7Ozs7O0lBS0QsU0FBUyxDQUFDLEdBQXFCO1FBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ2hFOzs7Ozs7SUFLRCxNQUFNLENBQUMsR0FBcUI7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDckI7Ozs7OztJQUtELFdBQVcsQ0FBQyxRQUFnQjtRQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUMvQjs7O1lBL0NGLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0ICwgIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IENhcmRUYWJDb21wb25lbnQgfSBmcm9tICcuL2NhcmQtdGFiL2NhcmQtdGFiLmNvbXBvbmVudCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDYXJkVGFic1NlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG5cclxuICB0YWIkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxDYXJkVGFiQ29tcG9uZW50PihudWxsKTtcclxuICB0YWJzJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Q2FyZFRhYkNvbXBvbmVudFtdPihbXSk7XHJcbiAgcG9zaXRpb24kID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KCd0b3AnKTtcclxuXHJcbiAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIC8vIHdoZW4gYSB0YWIgaXMgYWRkZWQgb3IgcmVtb3ZlZCBlbnN1cmUgd2UgYWx3YXlzIHNlbGVjdCBvbmUgaWYgYW55IGFyZSBhdmFpbGFibGVcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMudGFicyQucGlwZShcclxuICAgICAgZmlsdGVyKHRhYnMgPT4gIXRoaXMudGFiJC52YWx1ZSB8fCAhdGFicy5maW5kKHRhYiA9PiB0YWIgPT09IHRoaXMudGFiJC52YWx1ZSkpLFxyXG4gICAgKS5zdWJzY3JpYmUodGFicyA9PiB0aGlzLnRhYiQubmV4dCh0YWJzLmxlbmd0aCA+IDAgPyB0YWJzWzBdIDogbnVsbCkpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZCBhIHRhYiB0byB0aGUgbGlzdCBvZiB0YWJzXHJcbiAgICovXHJcbiAgYWRkVGFiKHRhYjogQ2FyZFRhYkNvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy50YWJzJC5uZXh0KFsuLi50aGlzLnRhYnMkLnZhbHVlLCB0YWJdKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSBhIHRhYiBmcm9tIHRoZSBsaXN0XHJcbiAgICovXHJcbiAgcmVtb3ZlVGFiKHRhYjogQ2FyZFRhYkNvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy50YWJzJC5uZXh0KHRoaXMudGFicyQudmFsdWUuZmlsdGVyKF90YWIgPT4gX3RhYiAhPT0gdGFiKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZWxlY3QgdGhlIHRhYlxyXG4gICAqL1xyXG4gIHNlbGVjdCh0YWI6IENhcmRUYWJDb21wb25lbnQpOiB2b2lkIHtcclxuICAgIHRoaXMudGFiJC5uZXh0KHRhYik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXQgdGhlIHBvc2l0aW9uIG9mIHRoZSB0YWIgY29udGVudFxyXG4gICAqL1xyXG4gIHNldFBvc2l0aW9uKHBvc2l0aW9uOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMucG9zaXRpb24kLm5leHQocG9zaXRpb24pO1xyXG4gIH1cclxufVxyXG4iXX0=