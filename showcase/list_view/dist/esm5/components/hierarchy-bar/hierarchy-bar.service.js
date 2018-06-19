/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { first } from 'rxjs/operators';
var HierarchyBarService = /** @class */ (function () {
    function HierarchyBarService() {
        this.nodes$ = new BehaviorSubject([]);
        this._nodes = [];
    }
    /**
     * Store the root node of the hierarchy tree
     */
    /**
     * Store the root node of the hierarchy tree
     * @param {?} root
     * @return {?}
     */
    HierarchyBarService.prototype.setRootNode = /**
     * Store the root node of the hierarchy tree
     * @param {?} root
     * @return {?}
     */
    function (root) {
        // store the root node
        this._root = root;
        // create a flat structure of nodes
        this._nodes = this.getNodeList(root);
        // flatten the array - based on the selected node
        this.nodes$.next(this.getSelectedChildren(root));
    };
    /**
     * Select a node. This causes all nodes to be
     * deselected and the path to the selected node
     * to be selected
     */
    /**
     * Select a node. This causes all nodes to be
     * deselected and the path to the selected node
     * to be selected
     * @param {?} node
     * @return {?}
     */
    HierarchyBarService.prototype.selectNode = /**
     * Select a node. This causes all nodes to be
     * deselected and the path to the selected node
     * to be selected
     * @param {?} node
     * @return {?}
     */
    function (node) {
        // deselect all nodes
        this.deselectAll();
        // ensure the current node is selected and its parents
        this.select(node);
        // emit a new node list to trigger change detection
        this.nodes$.next(this.getSelectedChildren(this._root));
    };
    /**
     * Handles getting children with support for both arrays and observables
     */
    /**
     * Handles getting children with support for both arrays and observables
     * @param {?} node
     * @return {?}
     */
    HierarchyBarService.prototype.getChildren = /**
     * Handles getting children with support for both arrays and observables
     * @param {?} node
     * @return {?}
     */
    function (node) {
        var _this = this;
        if (Array.isArray(node.children)) {
            return of({ loading: false, children: node.children });
        }
        var /** @type {?} */ children$ = node.children;
        // if it is an observable then handle loading
        return Observable.create(function (observer) {
            // emit initial value
            observer.next({ loading: true, children: [] });
            // now wait until the children observable completes
            children$.pipe(first()).subscribe(function (children) {
                // replace the observable with an array for future loading
                node.children = children;
                // rebuild the node tree
                // rebuild the node tree
                _this.setRootNode(_this._root);
                // emit the latest value
                observer.next({ loading: false, children: children });
                // close the observable stream
                observer.complete();
            });
        });
    };
    /**
     * Traverses all the parents to ensure they are selected
     * @param {?} node
     * @return {?}
     */
    HierarchyBarService.prototype.select = /**
     * Traverses all the parents to ensure they are selected
     * @param {?} node
     * @return {?}
     */
    function (node) {
        node.selected = true;
        if (node.parent) {
            this.select(node.parent);
        }
    };
    /**
     * Deselects all nodes
     * @return {?}
     */
    HierarchyBarService.prototype.deselectAll = /**
     * Deselects all nodes
     * @return {?}
     */
    function () {
        this._nodes.forEach(function (node) { return node.selected = false; });
    };
    /**
     * Gets all the nodes in the tree as a flat array.
     * It also stores the parent node in a parent property
     * on the node for easy traversal in both directions
     * @param {?} node
     * @return {?}
     */
    HierarchyBarService.prototype.getNodeList = /**
     * Gets all the nodes in the tree as a flat array.
     * It also stores the parent node in a parent property
     * on the node for easy traversal in both directions
     * @param {?} node
     * @return {?}
     */
    function (node) {
        var _this = this;
        // if there are no children then return only itself
        if (!node.children || node.children instanceof Observable || node.children.length === 0) {
            return [node];
        }
        // store the parent property
        node.children.forEach(function (child) { return child.parent = node; });
        // get all descendants of this node
        var /** @type {?} */ descendants = node.children.reduce(function (nodes, current) { return tslib_1.__spread(nodes, _this.getNodeList(current)); }, []);
        return tslib_1.__spread([node], descendants);
    };
    /**
     * Gets all selected nodes from the parent node.
     * @param {?} node
     * @return {?}
     */
    HierarchyBarService.prototype.getSelectedChildren = /**
     * Gets all selected nodes from the parent node.
     * @param {?} node
     * @return {?}
     */
    function (node) {
        if (node.children instanceof Observable) {
            return [node];
        }
        // get the children - and account for when there is none
        var /** @type {?} */ children = node.children || [];
        // check if any child is selected
        var /** @type {?} */ child = children.find(function (_child) { return _child.selected; });
        // return the remaining chain of selected items
        return child ? tslib_1.__spread([node], this.getSelectedChildren(child)) : [node];
    };
    HierarchyBarService.decorators = [
        { type: Injectable },
    ];
    return HierarchyBarService;
}());
export { HierarchyBarService };
function HierarchyBarService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    HierarchyBarService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    HierarchyBarService.ctorParameters;
    /** @type {?} */
    HierarchyBarService.prototype.nodes$;
    /** @type {?} */
    HierarchyBarService.prototype._root;
    /** @type {?} */
    HierarchyBarService.prototype._nodes;
}
/**
 * @record
 */
export function HierarchyBarNode() { }
function HierarchyBarNode_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    HierarchyBarNode.prototype.icon;
    /** @type {?} */
    HierarchyBarNode.prototype.title;
    /** @type {?|undefined} */
    HierarchyBarNode.prototype.selected;
    /** @type {?|undefined} */
    HierarchyBarNode.prototype.parent;
    /** @type {?|undefined} */
    HierarchyBarNode.prototype.children;
}
/**
 * @record
 */
export function HierarchyBarNodeChildren() { }
function HierarchyBarNodeChildren_tsickle_Closure_declarations() {
    /** @type {?} */
    HierarchyBarNodeChildren.prototype.loading;
    /** @type {?} */
    HierarchyBarNodeChildren.prototype.children;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGllcmFyY2h5LWJhci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGllcmFyY2h5LWJhci9oaWVyYXJjaHktYmFyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUksVUFBVSxFQUFnQixFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7c0JBSzFCLElBQUksZUFBZSxDQUFxQixFQUFFLENBQUM7c0JBR2YsRUFBRTs7SUFFdkM7O09BRUc7Ozs7OztJQUNILHlDQUFXOzs7OztJQUFYLFVBQVksSUFBc0I7O1FBRzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDOztRQUdsQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7O1FBR3JDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQ3BEO0lBRUQ7Ozs7T0FJRzs7Ozs7Ozs7SUFDSCx3Q0FBVTs7Ozs7OztJQUFWLFVBQVcsSUFBc0I7O1FBRzdCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7UUFHbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzs7UUFHbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQzFEO0lBRUQ7O09BRUc7Ozs7OztJQUNILHlDQUFXOzs7OztJQUFYLFVBQVksSUFBc0I7UUFBbEMsaUJBNkJDO1FBM0JHLEVBQUUs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QUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7O2dCQWpJMUUsVUFBVTs7OEJBSlg7O1NBS2EsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgLCAgT2JzZXJ2YWJsZSAsICBPYnNlcnZlciAsICBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhpZXJhcmNoeUJhclNlcnZpY2Uge1xyXG5cclxuICAgIG5vZGVzJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8SGllcmFyY2h5QmFyTm9kZVtdPihbXSk7XHJcblxyXG4gICAgcHJpdmF0ZSBfcm9vdDogSGllcmFyY2h5QmFyTm9kZTtcclxuICAgIHByaXZhdGUgX25vZGVzOiBIaWVyYXJjaHlCYXJOb2RlW10gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFN0b3JlIHRoZSByb290IG5vZGUgb2YgdGhlIGhpZXJhcmNoeSB0cmVlXHJcbiAgICAgKi9cclxuICAgIHNldFJvb3ROb2RlKHJvb3Q6IEhpZXJhcmNoeUJhck5vZGUpIHtcclxuXHJcbiAgICAgICAgLy8gc3RvcmUgdGhlIHJvb3Qgbm9kZVxyXG4gICAgICAgIHRoaXMuX3Jvb3QgPSByb290O1xyXG5cclxuICAgICAgICAvLyBjcmVhdGUgYSBmbGF0IHN0cnVjdHVyZSBvZiBub2Rlc1xyXG4gICAgICAgIHRoaXMuX25vZGVzID0gdGhpcy5nZXROb2RlTGlzdChyb290KTtcclxuXHJcbiAgICAgICAgLy8gZmxhdHRlbiB0aGUgYXJyYXkgLSBiYXNlZCBvbiB0aGUgc2VsZWN0ZWQgbm9kZVxyXG4gICAgICAgIHRoaXMubm9kZXMkLm5leHQodGhpcy5nZXRTZWxlY3RlZENoaWxkcmVuKHJvb3QpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlbGVjdCBhIG5vZGUuIFRoaXMgY2F1c2VzIGFsbCBub2RlcyB0byBiZVxyXG4gICAgICogZGVzZWxlY3RlZCBhbmQgdGhlIHBhdGggdG8gdGhlIHNlbGVjdGVkIG5vZGVcclxuICAgICAqIHRvIGJlIHNlbGVjdGVkXHJcbiAgICAgKi9cclxuICAgIHNlbGVjdE5vZGUobm9kZTogSGllcmFyY2h5QmFyTm9kZSk6IHZvaWQge1xyXG5cclxuICAgICAgICAvLyBkZXNlbGVjdCBhbGwgbm9kZXNcclxuICAgICAgICB0aGlzLmRlc2VsZWN0QWxsKCk7XHJcblxyXG4gICAgICAgIC8vIGVuc3VyZSB0aGUgY3VycmVudCBub2RlIGlzIHNlbGVjdGVkIGFuZCBpdHMgcGFyZW50c1xyXG4gICAgICAgIHRoaXMuc2VsZWN0KG5vZGUpO1xyXG5cclxuICAgICAgICAvLyBlbWl0IGEgbmV3IG5vZGUgbGlzdCB0byB0cmlnZ2VyIGNoYW5nZSBkZXRlY3Rpb25cclxuICAgICAgICB0aGlzLm5vZGVzJC5uZXh0KHRoaXMuZ2V0U2VsZWN0ZWRDaGlsZHJlbih0aGlzLl9yb290KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGVzIGdldHRpbmcgY2hpbGRyZW4gd2l0aCBzdXBwb3J0IGZvciBib3RoIGFycmF5cyBhbmQgb2JzZXJ2YWJsZXNcclxuICAgICAqL1xyXG4gICAgZ2V0Q2hpbGRyZW4obm9kZTogSGllcmFyY2h5QmFyTm9kZSk6IE9ic2VydmFibGU8SGllcmFyY2h5QmFyTm9kZUNoaWxkcmVuPiB7XHJcblxyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG5vZGUuY2hpbGRyZW4pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvZih7IGxvYWRpbmc6IGZhbHNlLCBjaGlsZHJlbjogbm9kZS5jaGlsZHJlbiB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuJDogT2JzZXJ2YWJsZTxIaWVyYXJjaHlCYXJOb2RlW10+ID0gbm9kZS5jaGlsZHJlbjtcclxuXHJcbiAgICAgICAgLy8gaWYgaXQgaXMgYW4gb2JzZXJ2YWJsZSB0aGVuIGhhbmRsZSBsb2FkaW5nXHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcjogT2JzZXJ2ZXI8SGllcmFyY2h5QmFyTm9kZUNoaWxkcmVuPikgPT4ge1xyXG4gICAgICAgICAgICAvLyBlbWl0IGluaXRpYWwgdmFsdWVcclxuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCh7IGxvYWRpbmc6IHRydWUsIGNoaWxkcmVuOiBbXSB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIG5vdyB3YWl0IHVudGlsIHRoZSBjaGlsZHJlbiBvYnNlcnZhYmxlIGNvbXBsZXRlc1xyXG4gICAgICAgICAgICBjaGlsZHJlbiQucGlwZShmaXJzdCgpKS5zdWJzY3JpYmUoY2hpbGRyZW4gPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHJlcGxhY2UgdGhlIG9ic2VydmFibGUgd2l0aCBhbiBhcnJheSBmb3IgZnV0dXJlIGxvYWRpbmdcclxuICAgICAgICAgICAgICAgIG5vZGUuY2hpbGRyZW4gPSBjaGlsZHJlbjtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyByZWJ1aWxkIHRoZSBub2RlIHRyZWVcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Um9vdE5vZGUodGhpcy5fcm9vdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gZW1pdCB0aGUgbGF0ZXN0IHZhbHVlXHJcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHsgbG9hZGluZzogZmFsc2UsIGNoaWxkcmVuOiBjaGlsZHJlbiB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjbG9zZSB0aGUgb2JzZXJ2YWJsZSBzdHJlYW1cclxuICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHJhdmVyc2VzIGFsbCB0aGUgcGFyZW50cyB0byBlbnN1cmUgdGhleSBhcmUgc2VsZWN0ZWRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzZWxlY3Qobm9kZTogSGllcmFyY2h5QmFyTm9kZSk6IHZvaWQge1xyXG4gICAgICAgIG5vZGUuc2VsZWN0ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAobm9kZS5wYXJlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3Qobm9kZS5wYXJlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlc2VsZWN0cyBhbGwgbm9kZXNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBkZXNlbGVjdEFsbCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9ub2Rlcy5mb3JFYWNoKG5vZGUgPT4gbm9kZS5zZWxlY3RlZCA9IGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgYWxsIHRoZSBub2RlcyBpbiB0aGUgdHJlZSBhcyBhIGZsYXQgYXJyYXkuXHJcbiAgICAgKiBJdCBhbHNvIHN0b3JlcyB0aGUgcGFyZW50IG5vZGUgaW4gYSBwYXJlbnQgcHJvcGVydHlcclxuICAgICAqIG9uIHRoZSBub2RlIGZvciBlYXN5IHRyYXZlcnNhbCBpbiBib3RoIGRpcmVjdGlvbnNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnZXROb2RlTGlzdChub2RlOiBIaWVyYXJjaHlCYXJOb2RlKTogSGllcmFyY2h5QmFyTm9kZVtdIHtcclxuXHJcbiAgICAgICAgLy8gaWYgdGhlcmUgYXJlIG5vIGNoaWxkcmVuIHRoZW4gcmV0dXJuIG9ubHkgaXRzZWxmXHJcbiAgICAgICAgaWYgKCFub2RlLmNoaWxkcmVuIHx8IG5vZGUuY2hpbGRyZW4gaW5zdGFuY2VvZiBPYnNlcnZhYmxlIHx8IG5vZGUuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbbm9kZV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzdG9yZSB0aGUgcGFyZW50IHByb3BlcnR5XHJcbiAgICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IGNoaWxkLnBhcmVudCA9IG5vZGUpO1xyXG5cclxuICAgICAgICAvLyBnZXQgYWxsIGRlc2NlbmRhbnRzIG9mIHRoaXMgbm9kZVxyXG4gICAgICAgIGNvbnN0IGRlc2NlbmRhbnRzID0gbm9kZS5jaGlsZHJlbi5yZWR1Y2U8SGllcmFyY2h5QmFyTm9kZVtdPigobm9kZXMsIGN1cnJlbnQpID0+IFsuLi5ub2RlcywgLi4udGhpcy5nZXROb2RlTGlzdChjdXJyZW50KV0sIFtdKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFtub2RlLCAuLi5kZXNjZW5kYW50c107XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGFsbCBzZWxlY3RlZCBub2RlcyBmcm9tIHRoZSBwYXJlbnQgbm9kZS5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnZXRTZWxlY3RlZENoaWxkcmVuKG5vZGU6IEhpZXJhcmNoeUJhck5vZGUpOiBIaWVyYXJjaHlCYXJOb2RlW10ge1xyXG5cclxuICAgICAgICBpZiAobm9kZS5jaGlsZHJlbiBpbnN0YW5jZW9mIE9ic2VydmFibGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtub2RlXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGdldCB0aGUgY2hpbGRyZW4gLSBhbmQgYWNjb3VudCBmb3Igd2hlbiB0aGVyZSBpcyBub25lXHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuIHx8IFtdO1xyXG5cclxuICAgICAgICAvLyBjaGVjayBpZiBhbnkgY2hpbGQgaXMgc2VsZWN0ZWRcclxuICAgICAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuLmZpbmQoX2NoaWxkID0+IF9jaGlsZC5zZWxlY3RlZCk7XHJcblxyXG4gICAgICAgIC8vIHJldHVybiB0aGUgcmVtYWluaW5nIGNoYWluIG9mIHNlbGVjdGVkIGl0ZW1zXHJcbiAgICAgICAgcmV0dXJuIGNoaWxkID8gW25vZGUsIC4uLnRoaXMuZ2V0U2VsZWN0ZWRDaGlsZHJlbihjaGlsZCldIDogW25vZGVdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEhpZXJhcmNoeUJhck5vZGUge1xyXG4gICAgaWNvbj86IHN0cmluZztcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBzZWxlY3RlZD86IGJvb2xlYW47XHJcbiAgICBwYXJlbnQ/OiBIaWVyYXJjaHlCYXJOb2RlO1xyXG4gICAgY2hpbGRyZW4/OiBIaWVyYXJjaHlCYXJOb2RlW10gfCBPYnNlcnZhYmxlPEhpZXJhcmNoeUJhck5vZGVbXT47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSGllcmFyY2h5QmFyTm9kZUNoaWxkcmVuIHtcclxuICAgIGxvYWRpbmc6IGJvb2xlYW47XHJcbiAgICBjaGlsZHJlbjogSGllcmFyY2h5QmFyTm9kZVtdO1xyXG59Il19