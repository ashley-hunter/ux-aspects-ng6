/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
export class PageHeaderService {
    constructor() {
        this.items$ = new BehaviorSubject([]);
        this.selected$ = new BehaviorSubject(null);
        this.selectedRoot$ = new BehaviorSubject(null);
        this.secondary$ = new BehaviorSubject(false);
        this.activeIconMenu$ = new BehaviorSubject(null);
        this._subscription = this.selected$.pipe(map(selected => this.getRoot(selected))).subscribe(root => this.selectedRoot$.next(root));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    select(item) {
        // do nothing if this item is already selected
        if (item === this.selected$.getValue()) {
            return;
        }
        // if we are in secondary navigation mode and we click a parent - dont deselect the child
        if (this.secondary$.getValue() === true && this.isParentOf(this.selected$.getValue(), item)) {
            return;
        }
        // deselect all current items
        this.deselectAll();
        // call the select function if present
        if (item.select) {
            item.select.call(item, item);
        }
        // store the selected state
        item.selected = true;
        // select all parent items too
        this.selectParents(item);
        // emit the new selected item
        this.selected$.next(item);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    deselect(item) {
        // deselect the current item
        item.selected = false;
        // iterate any children and deselect them
        if (item.children) {
            item.children.forEach(_item => this.deselect(_item));
        }
    }
    /**
     * @return {?}
     */
    deselectAll() {
        this.items$.getValue().forEach(item => this.deselect(item));
    }
    /**
     * @param {?=} items
     * @return {?}
     */
    setItems(items = []) {
        // identify all parent elements
        items.forEach(item => this.setParent(item));
        this.items$.next(items);
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    setSecondaryNavigation(enabled) {
        this.secondary$.next(enabled);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    getRoot(item) {
        return item && item.parent ? this.getRoot(item.parent) : item;
    }
    /**
     * @param {?} item
     * @param {?=} parent
     * @return {?}
     */
    setParent(item, parent) {
        // set the parent field
        item.parent = parent;
        // call this function recursively on all children
        if (item.children) {
            item.children.forEach(child => this.setParent(child, item));
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    selectParents(item) {
        // if there is a parent then we want to set it to selected
        if (item.parent) {
            item.parent.selected = true;
            // check if it has any parents
            this.selectParents(item.parent);
        }
    }
    /**
     * @param {?} node
     * @param {?} parent
     * @return {?}
     */
    isParentOf(node, parent) {
        // if there are no parents return false
        if (!node || !node.parent) {
            return false;
        }
        // if the parent is the match we are looking for return true
        if (node.parent === parent) {
            return true;
        }
        // if there are potentially grandparents then check them too
        return this.isParentOf(node.parent, parent);
    }
}
PageHeaderService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
PageHeaderService.ctorParameters = () => [];
function PageHeaderService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    PageHeaderService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    PageHeaderService.ctorParameters;
    /** @type {?} */
    PageHeaderService.prototype.items$;
    /** @type {?} */
    PageHeaderService.prototype.selected$;
    /** @type {?} */
    PageHeaderService.prototype.selectedRoot$;
    /** @type {?} */
    PageHeaderService.prototype.secondary$;
    /** @type {?} */
    PageHeaderService.prototype.activeIconMenu$;
    /** @type {?} */
    PageHeaderService.prototype._subscription;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1oZWFkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3BhZ2UtaGVhZGVyL3BhZ2UtaGVhZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBa0IsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBS3JDLE1BQU07SUFVRjtzQkFSUyxJQUFJLGVBQWUsQ0FBNkIsRUFBRSxDQUFDO3lCQUNoRCxJQUFJLGVBQWUsQ0FBMkIsSUFBSSxDQUFDOzZCQUMvQyxJQUFJLGVBQWUsQ0FBMkIsSUFBSSxDQUFDOzBCQUN0RCxJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUM7K0JBQzlCLElBQUksZUFBZSxDQUFxQixJQUFJLENBQUM7UUFLM0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQ3RJOzs7O0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDcEM7Ozs7O0lBRUQsTUFBTSxDQUFDLElBQThCOztRQUdqQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDckMsTUFBTSxDQUFDO1NBQ1Y7O1FBR0QsRUFBRSxDQUFDLENBQUMs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QUFDLENBQUM7WUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQztTQUNmOztRQUdELE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7Ozs7WUFoSG5ELFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0ICwgIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFBhZ2VIZWFkZXJJY29uTWVudSB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IFBhZ2VIZWFkZXJOYXZpZ2F0aW9uRHJvcGRvd25JdGVtLCBQYWdlSGVhZGVyTmF2aWdhdGlvbkl0ZW0gfSBmcm9tICcuL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUGFnZUhlYWRlclNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG5cclxuICAgIGl0ZW1zJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8UGFnZUhlYWRlck5hdmlnYXRpb25JdGVtW10+KFtdKTtcclxuICAgIHNlbGVjdGVkJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8UGFnZUhlYWRlck5hdmlnYXRpb25JdGVtPihudWxsKTtcclxuICAgIHNlbGVjdGVkUm9vdCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFBhZ2VIZWFkZXJOYXZpZ2F0aW9uSXRlbT4obnVsbCk7XHJcbiAgICBzZWNvbmRhcnkkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XHJcbiAgICBhY3RpdmVJY29uTWVudSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFBhZ2VIZWFkZXJJY29uTWVudT4obnVsbCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uID0gdGhpcy5zZWxlY3RlZCQucGlwZShtYXAoc2VsZWN0ZWQgPT4gdGhpcy5nZXRSb290KHNlbGVjdGVkKSkpLnN1YnNjcmliZShyb290ID0+IHRoaXMuc2VsZWN0ZWRSb290JC5uZXh0KHJvb3QpKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3QoaXRlbTogUGFnZUhlYWRlck5hdmlnYXRpb25JdGVtKTogdm9pZCB7XHJcblxyXG4gICAgICAgIC8vIGRvIG5vdGhpbmcgaWYgdGhpcyBpdGVtIGlzIGFscmVhZHkgc2VsZWN0ZWRcclxuICAgICAgICBpZiAoaXRlbSA9PT0gdGhpcy5zZWxlY3RlZCQuZ2V0VmFsdWUoKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiB3ZSBhcmUgaW4gc2Vjb25kYXJ5IG5hdmlnYXRpb24gbW9kZSBhbmQgd2UgY2xpY2sgYSBwYXJlbnQgLSBkb250IGRlc2VsZWN0IHRoZSBjaGlsZFxyXG4gICAgICAgIGlmICh0aGlzLnNlY29uZGFyeSQuZ2V0VmFsdWUoKSA9PT0gdHJ1ZSAmJiB0aGlzLmlzUGFyZW50T2YodGhpcy5zZWxlY3RlZCQuZ2V0VmFsdWUoKSwgaXRlbSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZGVzZWxlY3QgYWxsIGN1cnJlbnQgaXRlbXNcclxuICAgICAgICB0aGlzLmRlc2VsZWN0QWxsKCk7XHJcblxyXG4gICAgICAgIC8vIGNhbGwgdGhlIHNlbGVjdCBmdW5jdGlvbiBpZiBwcmVzZW50XHJcbiAgICAgICAgaWYgKGl0ZW0uc2VsZWN0KSB7XHJcbiAgICAgICAgICAgIGl0ZW0uc2VsZWN0LmNhbGwoaXRlbSwgaXRlbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzdG9yZSB0aGUgc2VsZWN0ZWQgc3RhdGVcclxuICAgICAgICBpdGVtLnNlbGVjdGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gc2VsZWN0IGFsbCBwYXJlbnQgaXRlbXMgdG9vXHJcbiAgICAgICAgdGhpcy5zZWxlY3RQYXJlbnRzKGl0ZW0pO1xyXG5cclxuICAgICAgICAvLyBlbWl0IHRoZSBuZXcgc2VsZWN0ZWQgaXRlbVxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQkLm5leHQoaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzZWxlY3QoaXRlbTogUGFnZUhlYWRlck5hdmlnYXRpb25JdGVtIHwgUGFnZUhlYWRlck5hdmlnYXRpb25Ecm9wZG93bkl0ZW0pOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gZGVzZWxlY3QgdGhlIGN1cnJlbnQgaXRlbVxyXG4gICAgICAgIGl0ZW0uc2VsZWN0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gaXRlcmF0ZSBhbnkgY2hpbGRyZW4gYW5kIGRlc2VsZWN0IHRoZW1cclxuICAgICAgICBpZiAoaXRlbS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICBpdGVtLmNoaWxkcmVuLmZvckVhY2goX2l0ZW0gPT4gdGhpcy5kZXNlbGVjdChfaXRlbSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZXNlbGVjdEFsbCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLml0ZW1zJC5nZXRWYWx1ZSgpLmZvckVhY2goaXRlbSA9PiB0aGlzLmRlc2VsZWN0KGl0ZW0pKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRJdGVtcyhpdGVtczogUGFnZUhlYWRlck5hdmlnYXRpb25JdGVtW10gPSBbXSk6IHZvaWQge1xyXG4gICAgICAgIC8vIGlkZW50aWZ5IGFsbCBwYXJlbnQgZWxlbWVudHNcclxuICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4gdGhpcy5zZXRQYXJlbnQoaXRlbSkpO1xyXG5cclxuICAgICAgICB0aGlzLml0ZW1zJC5uZXh0KGl0ZW1zKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTZWNvbmRhcnlOYXZpZ2F0aW9uKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNlY29uZGFyeSQubmV4dChlbmFibGVkKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFJvb3QoaXRlbTogUGFnZUhlYWRlck5hdmlnYXRpb24pOiBQYWdlSGVhZGVyTmF2aWdhdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0gJiYgaXRlbS5wYXJlbnQgPyB0aGlzLmdldFJvb3QoaXRlbS5wYXJlbnQpIDogaXRlbTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFBhcmVudChpdGVtOiBQYWdlSGVhZGVyTmF2aWdhdGlvbiwgcGFyZW50PzogUGFnZUhlYWRlck5hdmlnYXRpb24gfCBudWxsKTogdm9pZCB7XHJcbiAgICAgICAgLy8gc2V0IHRoZSBwYXJlbnQgZmllbGRcclxuICAgICAgICBpdGVtLnBhcmVudCA9IHBhcmVudDtcclxuXHJcbiAgICAgICAgLy8gY2FsbCB0aGlzIGZ1bmN0aW9uIHJlY3Vyc2l2ZWx5IG9uIGFsbCBjaGlsZHJlblxyXG4gICAgICAgIGlmIChpdGVtLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGl0ZW0uY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB0aGlzLnNldFBhcmVudChjaGlsZCwgaXRlbSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNlbGVjdFBhcmVudHMoaXRlbTogUGFnZUhlYWRlck5hdmlnYXRpb24pOiB2b2lkIHtcclxuICAgICAgICAvLyBpZiB0aGVyZSBpcyBhIHBhcmVudCB0aGVuIHdlIHdhbnQgdG8gc2V0IGl0IHRvIHNlbGVjdGVkXHJcbiAgICAgICAgaWYgKGl0ZW0ucGFyZW50KSB7XHJcbiAgICAgICAgICAgIGl0ZW0ucGFyZW50LnNlbGVjdGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIGl0IGhhcyBhbnkgcGFyZW50c1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdFBhcmVudHMoaXRlbS5wYXJlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzUGFyZW50T2Yobm9kZTogUGFnZUhlYWRlck5hdmlnYXRpb24sIHBhcmVudDogUGFnZUhlYWRlck5hdmlnYXRpb24pOiBib29sZWFuIHtcclxuXHJcbiAgICAgICAgLy8gaWYgdGhlcmUgYXJlIG5vIHBhcmVudHMgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgaWYgKCFub2RlIHx8ICFub2RlLnBhcmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiB0aGUgcGFyZW50IGlzIHRoZSBtYXRjaCB3ZSBhcmUgbG9va2luZyBmb3IgcmV0dXJuIHRydWVcclxuICAgICAgICBpZiAobm9kZS5wYXJlbnQgPT09IHBhcmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlmIHRoZXJlIGFyZSBwb3RlbnRpYWxseSBncmFuZHBhcmVudHMgdGhlbiBjaGVjayB0aGVtIHRvb1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzUGFyZW50T2Yobm9kZS5wYXJlbnQsIHBhcmVudCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFBhZ2VIZWFkZXJOYXZpZ2F0aW9uID0gUGFnZUhlYWRlck5hdmlnYXRpb25JdGVtIHwgUGFnZUhlYWRlck5hdmlnYXRpb25Ecm9wZG93bkl0ZW07Il19