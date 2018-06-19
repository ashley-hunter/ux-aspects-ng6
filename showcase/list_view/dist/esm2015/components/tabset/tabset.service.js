/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export class TabsetService {
    constructor() {
        this.tabs$ = new BehaviorSubject([]);
        this.active$ = new BehaviorSubject(null);
        this.focused$ = new BehaviorSubject(false);
        this.highlighted$ = new BehaviorSubject(null);
    }
    /**
     * @param {?} tab
     * @return {?}
     */
    add(tab) {
        this.tabs$.next([...this.tabs$.value, tab]);
        // check if this is the only tab. If so select this by default
        if (!this.active$.value) {
            this.select(tab);
        }
    }
    /**
     * @param {?} tab
     * @return {?}
     */
    remove(tab) {
        // remove the tab
        this.tabs$.next(this.tabs$.value.filter(_tab => _tab !== tab));
    }
    /**
     * @param {?} tab
     * @return {?}
     */
    select(tab) {
        if (!tab.disabled) {
            this.active$.next(tab);
            this.highlighted$.next(tab);
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    selectAtIndex(index) {
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
        const /** @type {?} */ target = this.tabs$.value[index];
        if (target) {
            this.select(target);
        }
    }
    /**
     * @return {?}
     */
    selectNextTab() {
        // find the currently selected index
        const /** @type {?} */ index = this.tabs$.value.indexOf(this.active$.value);
        // check the tabs after the active one to see if there are any selectable tabs
        const /** @type {?} */ tabs = this.tabs$.value.slice(index + 1);
        // check if any of the tabs are not disabled
        for (let /** @type {?} */ tab of tabs) {
            if (!tab.disabled) {
                return this.select(tab);
            }
        }
        // if we reach here then no tab could be selected - select the first tab
        this.selectFirstTab();
    }
    /**
     * @return {?}
     */
    selectPreviousTab() {
        // find the currently selected index
        const /** @type {?} */ index = this.tabs$.value.indexOf(this.active$.value);
        // check the tabs before the active one to see if there are any selectable tabs
        const /** @type {?} */ tabs = this.tabs$.value.slice(0, index);
        // check if any of the tabs are not disabled
        for (let /** @type {?} */ tab of tabs.reverse()) {
            if (!tab.disabled) {
                return this.select(tab);
            }
        }
        // if we reach here then no previous tab could be selected - select the last tab
        this.selectLastTab();
    }
    /**
     * @return {?}
     */
    selectFirstTab() {
        // find the index of the first non-disabled tab
        const /** @type {?} */ tabIndex = this.tabs$.value.findIndex(tab => !tab.disabled);
        if (tabIndex !== -1) {
            this.selectAtIndex(tabIndex);
        }
    }
    /**
     * @return {?}
     */
    selectLastTab() {
        // find the index of the first non-disabled tab
        const /** @type {?} */ tabIndex = this.tabs$.value.slice().reverse().findIndex(tab => !tab.disabled);
        if (tabIndex !== -1) {
            this.selectAtIndex((this.tabs$.value.length - 1) - tabIndex);
        }
    }
}
TabsetService.decorators = [
    { type: Injectable },
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFic2V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy90YWJzZXQvdGFic2V0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUl2QyxNQUFNOztxQkFFTSxJQUFJLGVBQWUsQ0FBaUIsRUFBRSxDQUFDO3VCQUNyQyxJQUFJLGVBQWUsQ0FBZSxJQUFJLENBQUM7d0JBQ3RDLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQzs0QkFDL0IsSUFBSSxlQUFlLENBQWUsSUFBSSxDQUFDOzs7Ozs7SUFFdEQsR0FBRyxDQUFDLEdBQWlCO1FBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDOztRQUc1QyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3BCO0tBQ0o7Ozs7O0lBRUQsTUFBTSxDQUFDLEdBQWlCOztRQUdwQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztLQUNsRTs7Ozs7SUFFRCxNQUFNLENBQUMsR0FBaUI7UUFDcEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxH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QUFFLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFcEYsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDO1NBQ2hFO0tBQ0o7OztZQXZHSixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgVGFiQ29tcG9uZW50IH0gZnJvbSAnLi90YWIvdGFiLmNvbXBvbmVudCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUYWJzZXRTZXJ2aWNlIHtcclxuXHJcbiAgICB0YWJzJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8VGFiQ29tcG9uZW50W10+KFtdKTtcclxuICAgIGFjdGl2ZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFRhYkNvbXBvbmVudD4obnVsbCk7XHJcbiAgICBmb2N1c2VkJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgaGlnaGxpZ2h0ZWQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxUYWJDb21wb25lbnQ+KG51bGwpO1xyXG5cclxuICAgIGFkZCh0YWI6IFRhYkNvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudGFicyQubmV4dChbLi4udGhpcy50YWJzJC52YWx1ZSwgdGFiXSk7XHJcblxyXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoaXMgaXMgdGhlIG9ubHkgdGFiLiBJZiBzbyBzZWxlY3QgdGhpcyBieSBkZWZhdWx0XHJcbiAgICAgICAgaWYgKCF0aGlzLmFjdGl2ZSQudmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3QodGFiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKHRhYjogVGFiQ29tcG9uZW50KTogdm9pZCB7XHJcblxyXG4gICAgICAgIC8vIHJlbW92ZSB0aGUgdGFiXHJcbiAgICAgICAgdGhpcy50YWJzJC5uZXh0KHRoaXMudGFicyQudmFsdWUuZmlsdGVyKF90YWIgPT4gX3RhYiAhPT0gdGFiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0KHRhYjogVGFiQ29tcG9uZW50KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0YWIuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmUkLm5leHQodGFiKTtcclxuICAgICAgICAgICAgdGhpcy5oaWdobGlnaHRlZCQubmV4dCh0YWIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RBdEluZGV4KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gaWYgdGhlcmUgYXJlIG5vIHRhYnMgdGhlbiBkbyBub3RoaW5nXHJcbiAgICAgICAgaWYgKHRoaXMudGFicyQudmFsdWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZSBpbmRleCBpcyB3aXRoaW4gdGhlIGJvdW5kc1xyXG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0QXRJbmRleCh0aGlzLnRhYnMkLnZhbHVlLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPj0gdGhpcy50YWJzJC52YWx1ZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0QXRJbmRleCgwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMudGFicyQudmFsdWVbaW5kZXhdO1xyXG5cclxuICAgICAgICBpZiAodGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0KHRhcmdldCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdE5leHRUYWIoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gZmluZCB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGluZGV4XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnRhYnMkLnZhbHVlLmluZGV4T2YodGhpcy5hY3RpdmUkLnZhbHVlKTtcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgdGhlIHRhYnMgYWZ0ZXIgdGhlIGFjdGl2ZSBvbmUgdG8gc2VlIGlmIHRoZXJlIGFyZSBhbnkgc2VsZWN0YWJsZSB0YWJzXHJcbiAgICAgICAgY29uc3QgdGFicyA9IHRoaXMudGFicyQudmFsdWUuc2xpY2UoaW5kZXggKyAxKTtcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgaWYgYW55IG9mIHRoZSB0YWJzIGFyZSBub3QgZGlzYWJsZWRcclxuICAgICAgICBmb3IgKGxldCB0YWIgb2YgdGFicykge1xyXG4gICAgICAgICAgICBpZiAoIXRhYi5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0KHRhYik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlmIHdlIHJlYWNoIGhlcmUgdGhlbiBubyB0YWIgY291bGQgYmUgc2VsZWN0ZWQgLSBzZWxlY3QgdGhlIGZpcnN0IHRhYlxyXG4gICAgICAgIHRoaXMuc2VsZWN0Rmlyc3RUYWIoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RQcmV2aW91c1RhYigpOiB2b2lkIHtcclxuICAgICAgICAvLyBmaW5kIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgaW5kZXhcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMudGFicyQudmFsdWUuaW5kZXhPZih0aGlzLmFjdGl2ZSQudmFsdWUpO1xyXG5cclxuICAgICAgICAvLyBjaGVjayB0aGUgdGFicyBiZWZvcmUgdGhlIGFjdGl2ZSBvbmUgdG8gc2VlIGlmIHRoZXJlIGFyZSBhbnkgc2VsZWN0YWJsZSB0YWJzXHJcbiAgICAgICAgY29uc3QgdGFicyA9IHRoaXMudGFicyQudmFsdWUuc2xpY2UoMCwgaW5kZXgpO1xyXG5cclxuICAgICAgICAvLyBjaGVjayBpZiBhbnkgb2YgdGhlIHRhYnMgYXJlIG5vdCBkaXNhYmxlZFxyXG4gICAgICAgIGZvciAobGV0IHRhYiBvZiB0YWJzLnJldmVyc2UoKSkge1xyXG4gICAgICAgICAgICBpZiAoIXRhYi5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0KHRhYik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlmIHdlIHJlYWNoIGhlcmUgdGhlbiBubyBwcmV2aW91cyB0YWIgY291bGQgYmUgc2VsZWN0ZWQgLSBzZWxlY3QgdGhlIGxhc3QgdGFiXHJcbiAgICAgICAgdGhpcy5zZWxlY3RMYXN0VGFiKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0Rmlyc3RUYWIoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gZmluZCB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IG5vbi1kaXNhYmxlZCB0YWJcclxuICAgICAgICBjb25zdCB0YWJJbmRleCA9IHRoaXMudGFicyQudmFsdWUuZmluZEluZGV4KHRhYiA9PiAhdGFiLmRpc2FibGVkKTtcclxuXHJcbiAgICAgICAgaWYgKHRhYkluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdEF0SW5kZXgodGFiSW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RMYXN0VGFiKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGZpbmQgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBub24tZGlzYWJsZWQgdGFiXHJcbiAgICAgICAgY29uc3QgdGFiSW5kZXggPSB0aGlzLnRhYnMkLnZhbHVlLnNsaWNlKCkucmV2ZXJzZSgpLmZpbmRJbmRleCh0YWIgPT4gIXRhYi5kaXNhYmxlZCk7XHJcblxyXG4gICAgICAgIGlmICh0YWJJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RBdEluZGV4KCh0aGlzLnRhYnMkLnZhbHVlLmxlbmd0aCAtIDEpIC0gdGFiSW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSAiXX0=