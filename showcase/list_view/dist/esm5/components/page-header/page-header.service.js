/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
var PageHeaderService = /** @class */ (function () {
    function PageHeaderService() {
        var _this = this;
        this.items$ = new BehaviorSubject([]);
        this.selected$ = new BehaviorSubject(null);
        this.selectedRoot$ = new BehaviorSubject(null);
        this.secondary$ = new BehaviorSubject(false);
        this.activeIconMenu$ = new BehaviorSubject(null);
        this._subscription = this.selected$.pipe(map(function (selected) { return _this.getRoot(selected); })).subscribe(function (root) { return _this.selectedRoot$.next(root); });
    }
    /**
     * @return {?}
     */
    PageHeaderService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscription.unsubscribe();
    };
    /**
     * @param {?} item
     * @return {?}
     */
    PageHeaderService.prototype.select = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
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
    };
    /**
     * @param {?} item
     * @return {?}
     */
    PageHeaderService.prototype.deselect = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _this = this;
        // deselect the current item
        item.selected = false;
        // iterate any children and deselect them
        if (item.children) {
            item.children.forEach(function (_item) { return _this.deselect(_item); });
        }
    };
    /**
     * @return {?}
     */
    PageHeaderService.prototype.deselectAll = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.items$.getValue().forEach(function (item) { return _this.deselect(item); });
    };
    /**
     * @param {?=} items
     * @return {?}
     */
    PageHeaderService.prototype.setItems = /**
     * @param {?=} items
     * @return {?}
     */
    function (items) {
        var _this = this;
        if (items === void 0) { items = []; }
        // identify all parent elements
        items.forEach(function (item) { return _this.setParent(item); });
        this.items$.next(items);
    };
    /**
     * @param {?} enabled
     * @return {?}
     */
    PageHeaderService.prototype.setSecondaryNavigation = /**
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        this.secondary$.next(enabled);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    PageHeaderService.prototype.getRoot = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return item && item.parent ? this.getRoot(item.parent) : item;
    };
    /**
     * @param {?} item
     * @param {?=} parent
     * @return {?}
     */
    PageHeaderService.prototype.setParent = /**
     * @param {?} item
     * @param {?=} parent
     * @return {?}
     */
    function (item, parent) {
        var _this = this;
        // set the parent field
        item.parent = parent;
        // call this function recursively on all children
        if (item.children) {
            item.children.forEach(function (child) { return _this.setParent(child, item); });
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    PageHeaderService.prototype.selectParents = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        // if there is a parent then we want to set it to selected
        if (item.parent) {
            item.parent.selected = true;
            // check if it has any parents
            this.selectParents(item.parent);
        }
    };
    /**
     * @param {?} node
     * @param {?} parent
     * @return {?}
     */
    PageHeaderService.prototype.isParentOf = /**
     * @param {?} node
     * @param {?} parent
     * @return {?}
     */
    function (node, parent) {
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
    };
    PageHeaderService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    PageHeaderService.ctorParameters = function () { return []; };
    return PageHeaderService;
}());
export { PageHeaderService };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1oZWFkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3BhZ2UtaGVhZGVyL3BhZ2UtaGVhZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBa0IsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztJQWVqQztRQUFBLGlCQUVDO3NCQVZRLElBQUksZUFBZSxDQUE2QixFQUFFLENBQUM7eUJBQ2hELElBQUksZUFBZSxDQUEyQixJQUFJLENBQUM7NkJBQy9DLElBQUksZUFBZSxDQUEyQixJQUFJLENBQUM7MEJBQ3RELElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQzsrQkFDOUIsSUFBSSxlQUFlLENBQXFCLElBQUksQ0FBQztRQUszRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQXRCLENBQXNCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUE3QixDQUE2QixDQUFDLENBQUM7S0FDdEk7Ozs7SUFFRCx1Q0FBVzs7O0lBQVg7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3BDOzs7OztJQUVELGtDQUFNOzs7O0lBQU4sVUFBTyxJQUE4Qjs7UUFHakMsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFD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Ozs7O0lBR0csc0NBQVU7Ozs7O2NBQUMsSUFBMEIsRUFBRSxNQUE0Qjs7UUFHdkUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN4QixNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ2hCOztRQUdELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDO1NBQ2Y7O1FBR0QsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQzs7O2dCQWhIbkQsVUFBVTs7Ozs0QkFOWDs7U0FPYSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0ICwgIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFBhZ2VIZWFkZXJJY29uTWVudSB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IFBhZ2VIZWFkZXJOYXZpZ2F0aW9uRHJvcGRvd25JdGVtLCBQYWdlSGVhZGVyTmF2aWdhdGlvbkl0ZW0gfSBmcm9tICcuL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUGFnZUhlYWRlclNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG5cclxuICAgIGl0ZW1zJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8UGFnZUhlYWRlck5hdmlnYXRpb25JdGVtW10+KFtdKTtcclxuICAgIHNlbGVjdGVkJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8UGFnZUhlYWRlck5hdmlnYXRpb25JdGVtPihudWxsKTtcclxuICAgIHNlbGVjdGVkUm9vdCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFBhZ2VIZWFkZXJOYXZpZ2F0aW9uSXRlbT4obnVsbCk7XHJcbiAgICBzZWNvbmRhcnkkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XHJcbiAgICBhY3RpdmVJY29uTWVudSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFBhZ2VIZWFkZXJJY29uTWVudT4obnVsbCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uID0gdGhpcy5zZWxlY3RlZCQucGlwZShtYXAoc2VsZWN0ZWQgPT4gdGhpcy5nZXRSb290KHNlbGVjdGVkKSkpLnN1YnNjcmliZShyb290ID0+IHRoaXMuc2VsZWN0ZWRSb290JC5uZXh0KHJvb3QpKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3QoaXRlbTogUGFnZUhlYWRlck5hdmlnYXRpb25JdGVtKTogdm9pZCB7XHJcblxyXG4gICAgICAgIC8vIGRvIG5vdGhpbmcgaWYgdGhpcyBpdGVtIGlzIGFscmVhZHkgc2VsZWN0ZWRcclxuICAgICAgICBpZiAoaXRlbSA9PT0gdGhpcy5zZWxlY3RlZCQuZ2V0VmFsdWUoKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiB3ZSBhcmUgaW4gc2Vjb25kYXJ5IG5hdmlnYXRpb24gbW9kZSBhbmQgd2UgY2xpY2sgYSBwYXJlbnQgLSBkb250IGRlc2VsZWN0IHRoZSBjaGlsZFxyXG4gICAgICAgIGlmICh0aGlzLnNlY29uZGFyeSQuZ2V0VmFsdWUoKSA9PT0gdHJ1ZSAmJiB0aGlzLmlzUGFyZW50T2YodGhpcy5zZWxlY3RlZCQuZ2V0VmFsdWUoKSwgaXRlbSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZGVzZWxlY3QgYWxsIGN1cnJlbnQgaXRlbXNcclxuICAgICAgICB0aGlzLmRlc2VsZWN0QWxsKCk7XHJcblxyXG4gICAgICAgIC8vIGNhbGwgdGhlIHNlbGVjdCBmdW5jdGlvbiBpZiBwcmVzZW50XHJcbiAgICAgICAgaWYgKGl0ZW0uc2VsZWN0KSB7XHJcbiAgICAgICAgICAgIGl0ZW0uc2VsZWN0LmNhbGwoaXRlbSwgaXRlbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzdG9yZSB0aGUgc2VsZWN0ZWQgc3RhdGVcclxuICAgICAgICBpdGVtLnNlbGVjdGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gc2VsZWN0IGFsbCBwYXJlbnQgaXRlbXMgdG9vXHJcbiAgICAgICAgdGhpcy5zZWxlY3RQYXJlbnRzKGl0ZW0pO1xyXG5cclxuICAgICAgICAvLyBlbWl0IHRoZSBuZXcgc2VsZWN0ZWQgaXRlbVxyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQkLm5leHQoaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzZWxlY3QoaXRlbTogUGFnZUhlYWRlck5hdmlnYXRpb25JdGVtIHwgUGFnZUhlYWRlck5hdmlnYXRpb25Ecm9wZG93bkl0ZW0pOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gZGVzZWxlY3QgdGhlIGN1cnJlbnQgaXRlbVxyXG4gICAgICAgIGl0ZW0uc2VsZWN0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gaXRlcmF0ZSBhbnkgY2hpbGRyZW4gYW5kIGRlc2VsZWN0IHRoZW1cclxuICAgICAgICBpZiAoaXRlbS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICBpdGVtLmNoaWxkcmVuLmZvckVhY2goX2l0ZW0gPT4gdGhpcy5kZXNlbGVjdChfaXRlbSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZXNlbGVjdEFsbCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLml0ZW1zJC5nZXRWYWx1ZSgpLmZvckVhY2goaXRlbSA9PiB0aGlzLmRlc2VsZWN0KGl0ZW0pKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRJdGVtcyhpdGVtczogUGFnZUhlYWRlck5hdmlnYXRpb25JdGVtW10gPSBbXSk6IHZvaWQge1xyXG4gICAgICAgIC8vIGlkZW50aWZ5IGFsbCBwYXJlbnQgZWxlbWVudHNcclxuICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4gdGhpcy5zZXRQYXJlbnQoaXRlbSkpO1xyXG5cclxuICAgICAgICB0aGlzLml0ZW1zJC5uZXh0KGl0ZW1zKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTZWNvbmRhcnlOYXZpZ2F0aW9uKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNlY29uZGFyeSQubmV4dChlbmFibGVkKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFJvb3QoaXRlbTogUGFnZUhlYWRlck5hdmlnYXRpb24pOiBQYWdlSGVhZGVyTmF2aWdhdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0gJiYgaXRlbS5wYXJlbnQgPyB0aGlzLmdldFJvb3QoaXRlbS5wYXJlbnQpIDogaXRlbTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFBhcmVudChpdGVtOiBQYWdlSGVhZGVyTmF2aWdhdGlvbiwgcGFyZW50PzogUGFnZUhlYWRlck5hdmlnYXRpb24gfCBudWxsKTogdm9pZCB7XHJcbiAgICAgICAgLy8gc2V0IHRoZSBwYXJlbnQgZmllbGRcclxuICAgICAgICBpdGVtLnBhcmVudCA9IHBhcmVudDtcclxuXHJcbiAgICAgICAgLy8gY2FsbCB0aGlzIGZ1bmN0aW9uIHJlY3Vyc2l2ZWx5IG9uIGFsbCBjaGlsZHJlblxyXG4gICAgICAgIGlmIChpdGVtLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGl0ZW0uY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB0aGlzLnNldFBhcmVudChjaGlsZCwgaXRlbSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNlbGVjdFBhcmVudHMoaXRlbTogUGFnZUhlYWRlck5hdmlnYXRpb24pOiB2b2lkIHtcclxuICAgICAgICAvLyBpZiB0aGVyZSBpcyBhIHBhcmVudCB0aGVuIHdlIHdhbnQgdG8gc2V0IGl0IHRvIHNlbGVjdGVkXHJcbiAgICAgICAgaWYgKGl0ZW0ucGFyZW50KSB7XHJcbiAgICAgICAgICAgIGl0ZW0ucGFyZW50LnNlbGVjdGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIGl0IGhhcyBhbnkgcGFyZW50c1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdFBhcmVudHMoaXRlbS5wYXJlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzUGFyZW50T2Yobm9kZTogUGFnZUhlYWRlck5hdmlnYXRpb24sIHBhcmVudDogUGFnZUhlYWRlck5hdmlnYXRpb24pOiBib29sZWFuIHtcclxuXHJcbiAgICAgICAgLy8gaWYgdGhlcmUgYXJlIG5vIHBhcmVudHMgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgaWYgKCFub2RlIHx8ICFub2RlLnBhcmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiB0aGUgcGFyZW50IGlzIHRoZSBtYXRjaCB3ZSBhcmUgbG9va2luZyBmb3IgcmV0dXJuIHRydWVcclxuICAgICAgICBpZiAobm9kZS5wYXJlbnQgPT09IHBhcmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlmIHRoZXJlIGFyZSBwb3RlbnRpYWxseSBncmFuZHBhcmVudHMgdGhlbiBjaGVjayB0aGVtIHRvb1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzUGFyZW50T2Yobm9kZS5wYXJlbnQsIHBhcmVudCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFBhZ2VIZWFkZXJOYXZpZ2F0aW9uID0gUGFnZUhlYWRlck5hdmlnYXRpb25JdGVtIHwgUGFnZUhlYWRlck5hdmlnYXRpb25Ecm9wZG93bkl0ZW07Il19