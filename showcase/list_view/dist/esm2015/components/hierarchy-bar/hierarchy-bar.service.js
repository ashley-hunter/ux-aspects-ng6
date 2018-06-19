/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { first } from 'rxjs/operators';
export class HierarchyBarService {
    constructor() {
        this.nodes$ = new BehaviorSubject([]);
        this._nodes = [];
    }
    /**
     * Store the root node of the hierarchy tree
     * @param {?} root
     * @return {?}
     */
    setRootNode(root) {
        // store the root node
        this._root = root;
        // create a flat structure of nodes
        this._nodes = this.getNodeList(root);
        // flatten the array - based on the selected node
        this.nodes$.next(this.getSelectedChildren(root));
    }
    /**
     * Select a node. This causes all nodes to be
     * deselected and the path to the selected node
     * to be selected
     * @param {?} node
     * @return {?}
     */
    selectNode(node) {
        // deselect all nodes
        this.deselectAll();
        // ensure the current node is selected and its parents
        this.select(node);
        // emit a new node list to trigger change detection
        this.nodes$.next(this.getSelectedChildren(this._root));
    }
    /**
     * Handles getting children with support for both arrays and observables
     * @param {?} node
     * @return {?}
     */
    getChildren(node) {
        if (Array.isArray(node.children)) {
            return of({ loading: false, children: node.children });
        }
        const /** @type {?} */ children$ = node.children;
        // if it is an observable then handle loading
        return Observable.create((observer) => {
            // emit initial value
            observer.next({ loading: true, children: [] });
            // now wait until the children observable completes
            children$.pipe(first()).subscribe(children => {
                // replace the observable with an array for future loading
                node.children = children;
                // rebuild the node tree
                this.setRootNode(this._root);
                // emit the latest value
                observer.next({ loading: false, children: children });
                // close the observable stream
                observer.complete();
            });
        });
    }
    /**
     * Traverses all the parents to ensure they are selected
     * @param {?} node
     * @return {?}
     */
    select(node) {
        node.selected = true;
        if (node.parent) {
            this.select(node.parent);
        }
    }
    /**
     * Deselects all nodes
     * @return {?}
     */
    deselectAll() {
        this._nodes.forEach(node => node.selected = false);
    }
    /**
     * Gets all the nodes in the tree as a flat array.
     * It also stores the parent node in a parent property
     * on the node for easy traversal in both directions
     * @param {?} node
     * @return {?}
     */
    getNodeList(node) {
        // if there are no children then return only itself
        if (!node.children || node.children instanceof Observable || node.children.length === 0) {
            return [node];
        }
        // store the parent property
        node.children.forEach(child => child.parent = node);
        // get all descendants of this node
        const /** @type {?} */ descendants = node.children.reduce((nodes, current) => [...nodes, ...this.getNodeList(current)], []);
        return [node, ...descendants];
    }
    /**
     * Gets all selected nodes from the parent node.
     * @param {?} node
     * @return {?}
     */
    getSelectedChildren(node) {
        if (node.children instanceof Observable) {
            return [node];
        }
        // get the children - and account for when there is none
        const /** @type {?} */ children = node.children || [];
        // check if any child is selected
        const /** @type {?} */ child = children.find(_child => _child.selected);
        // return the remaining chain of selected items
        return child ? [node, ...this.getSelectedChildren(child)] : [node];
    }
}
HierarchyBarService.decorators = [
    { type: Injectable },
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGllcmFyY2h5LWJhci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGllcmFyY2h5LWJhci9oaWVyYXJjaHktYmFyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBSSxVQUFVLEVBQWdCLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2RSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHdkMsTUFBTTs7c0JBRU8sSUFBSSxlQUFlLENBQXFCLEVBQUUsQ0FBQztzQkFHZixFQUFFOzs7Ozs7O0lBS3ZDLFdBQVcsQ0FBQyxJQUFzQjs7UUFHOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7O1FBR2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7UUFHckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7S0FDcEQ7Ozs7Ozs7O0lBT0QsVUFBVSxDQUFDLElBQXNCOztRQUc3QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7O1FBR25CLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7O1FBR2xCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUMxRDs7Ozs7O0lBS0QsV0FBVyxDQUFDLElBQXNCO1FBRTlCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixN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dGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCAsICBPYnNlcnZhYmxlICwgIE9ic2VydmVyICwgIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpcnN0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSGllcmFyY2h5QmFyU2VydmljZSB7XHJcblxyXG4gICAgbm9kZXMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxIaWVyYXJjaHlCYXJOb2RlW10+KFtdKTtcclxuXHJcbiAgICBwcml2YXRlIF9yb290OiBIaWVyYXJjaHlCYXJOb2RlO1xyXG4gICAgcHJpdmF0ZSBfbm9kZXM6IEhpZXJhcmNoeUJhck5vZGVbXSA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RvcmUgdGhlIHJvb3Qgbm9kZSBvZiB0aGUgaGllcmFyY2h5IHRyZWVcclxuICAgICAqL1xyXG4gICAgc2V0Um9vdE5vZGUocm9vdDogSGllcmFyY2h5QmFyTm9kZSkge1xyXG5cclxuICAgICAgICAvLyBzdG9yZSB0aGUgcm9vdCBub2RlXHJcbiAgICAgICAgdGhpcy5fcm9vdCA9IHJvb3Q7XHJcblxyXG4gICAgICAgIC8vIGNyZWF0ZSBhIGZsYXQgc3RydWN0dXJlIG9mIG5vZGVzXHJcbiAgICAgICAgdGhpcy5fbm9kZXMgPSB0aGlzLmdldE5vZGVMaXN0KHJvb3QpO1xyXG5cclxuICAgICAgICAvLyBmbGF0dGVuIHRoZSBhcnJheSAtIGJhc2VkIG9uIHRoZSBzZWxlY3RlZCBub2RlXHJcbiAgICAgICAgdGhpcy5ub2RlcyQubmV4dCh0aGlzLmdldFNlbGVjdGVkQ2hpbGRyZW4ocm9vdCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2VsZWN0IGEgbm9kZS4gVGhpcyBjYXVzZXMgYWxsIG5vZGVzIHRvIGJlXHJcbiAgICAgKiBkZXNlbGVjdGVkIGFuZCB0aGUgcGF0aCB0byB0aGUgc2VsZWN0ZWQgbm9kZVxyXG4gICAgICogdG8gYmUgc2VsZWN0ZWRcclxuICAgICAqL1xyXG4gICAgc2VsZWN0Tm9kZShub2RlOiBIaWVyYXJjaHlCYXJOb2RlKTogdm9pZCB7XHJcblxyXG4gICAgICAgIC8vIGRlc2VsZWN0IGFsbCBub2Rlc1xyXG4gICAgICAgIHRoaXMuZGVzZWxlY3RBbGwoKTtcclxuXHJcbiAgICAgICAgLy8gZW5zdXJlIHRoZSBjdXJyZW50IG5vZGUgaXMgc2VsZWN0ZWQgYW5kIGl0cyBwYXJlbnRzXHJcbiAgICAgICAgdGhpcy5zZWxlY3Qobm9kZSk7XHJcblxyXG4gICAgICAgIC8vIGVtaXQgYSBuZXcgbm9kZSBsaXN0IHRvIHRyaWdnZXIgY2hhbmdlIGRldGVjdGlvblxyXG4gICAgICAgIHRoaXMubm9kZXMkLm5leHQodGhpcy5nZXRTZWxlY3RlZENoaWxkcmVuKHRoaXMuX3Jvb3QpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEhhbmRsZXMgZ2V0dGluZyBjaGlsZHJlbiB3aXRoIHN1cHBvcnQgZm9yIGJvdGggYXJyYXlzIGFuZCBvYnNlcnZhYmxlc1xyXG4gICAgICovXHJcbiAgICBnZXRDaGlsZHJlbihub2RlOiBIaWVyYXJjaHlCYXJOb2RlKTogT2JzZXJ2YWJsZTxIaWVyYXJjaHlCYXJOb2RlQ2hpbGRyZW4+IHtcclxuXHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobm9kZS5jaGlsZHJlbikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9mKHsgbG9hZGluZzogZmFsc2UsIGNoaWxkcmVuOiBub2RlLmNoaWxkcmVuIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY2hpbGRyZW4kOiBPYnNlcnZhYmxlPEhpZXJhcmNoeUJhck5vZGVbXT4gPSBub2RlLmNoaWxkcmVuO1xyXG5cclxuICAgICAgICAvLyBpZiBpdCBpcyBhbiBvYnNlcnZhYmxlIHRoZW4gaGFuZGxlIGxvYWRpbmdcclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyOiBPYnNlcnZlcjxIaWVyYXJjaHlCYXJOb2RlQ2hpbGRyZW4+KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGVtaXQgaW5pdGlhbCB2YWx1ZVxyXG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KHsgbG9hZGluZzogdHJ1ZSwgY2hpbGRyZW46IFtdIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gbm93IHdhaXQgdW50aWwgdGhlIGNoaWxkcmVuIG9ic2VydmFibGUgY29tcGxldGVzXHJcbiAgICAgICAgICAgIGNoaWxkcmVuJC5waXBlKGZpcnN0KCkpLnN1YnNjcmliZShjaGlsZHJlbiA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gcmVwbGFjZSB0aGUgb2JzZXJ2YWJsZSB3aXRoIGFuIGFycmF5IGZvciBmdXR1cmUgbG9hZGluZ1xyXG4gICAgICAgICAgICAgICAgbm9kZS5jaGlsZHJlbiA9IGNoaWxkcmVuO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHJlYnVpbGQgdGhlIG5vZGUgdHJlZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRSb290Tm9kZSh0aGlzLl9yb290KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBlbWl0IHRoZSBsYXRlc3QgdmFsdWVcclxuICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoeyBsb2FkaW5nOiBmYWxzZSwgY2hpbGRyZW46IGNoaWxkcmVuIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNsb3NlIHRoZSBvYnNlcnZhYmxlIHN0cmVhbVxyXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUcmF2ZXJzZXMgYWxsIHRoZSBwYXJlbnRzIHRvIGVuc3VyZSB0aGV5IGFyZSBzZWxlY3RlZFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHNlbGVjdChub2RlOiBIaWVyYXJjaHlCYXJOb2RlKTogdm9pZCB7XHJcbiAgICAgICAgbm9kZS5zZWxlY3RlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmIChub2RlLnBhcmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdChub2RlLnBhcmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVzZWxlY3RzIGFsbCBub2Rlc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGRlc2VsZWN0QWxsKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX25vZGVzLmZvckVhY2gobm9kZSA9PiBub2RlLnNlbGVjdGVkID0gZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyBhbGwgdGhlIG5vZGVzIGluIHRoZSB0cmVlIGFzIGEgZmxhdCBhcnJheS5cclxuICAgICAqIEl0IGFsc28gc3RvcmVzIHRoZSBwYXJlbnQgbm9kZSBpbiBhIHBhcmVudCBwcm9wZXJ0eVxyXG4gICAgICogb24gdGhlIG5vZGUgZm9yIGVhc3kgdHJhdmVyc2FsIGluIGJvdGggZGlyZWN0aW9uc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdldE5vZGVMaXN0KG5vZGU6IEhpZXJhcmNoeUJhck5vZGUpOiBIaWVyYXJjaHlCYXJOb2RlW10ge1xyXG5cclxuICAgICAgICAvLyBpZiB0aGVyZSBhcmUgbm8gY2hpbGRyZW4gdGhlbiByZXR1cm4gb25seSBpdHNlbGZcclxuICAgICAgICBpZiAoIW5vZGUuY2hpbGRyZW4gfHwgbm9kZS5jaGlsZHJlbiBpbnN0YW5jZW9mIE9ic2VydmFibGUgfHwgbm9kZS5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtub2RlXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHN0b3JlIHRoZSBwYXJlbnQgcHJvcGVydHlcclxuICAgICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gY2hpbGQucGFyZW50ID0gbm9kZSk7XHJcblxyXG4gICAgICAgIC8vIGdldCBhbGwgZGVzY2VuZGFudHMgb2YgdGhpcyBub2RlXHJcbiAgICAgICAgY29uc3QgZGVzY2VuZGFudHMgPSBub2RlLmNoaWxkcmVuLnJlZHVjZTxIaWVyYXJjaHlCYXJOb2RlW10+KChub2RlcywgY3VycmVudCkgPT4gWy4uLm5vZGVzLCAuLi50aGlzLmdldE5vZGVMaXN0KGN1cnJlbnQpXSwgW10pO1xyXG5cclxuICAgICAgICByZXR1cm4gW25vZGUsIC4uLmRlc2NlbmRhbnRzXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgYWxsIHNlbGVjdGVkIG5vZGVzIGZyb20gdGhlIHBhcmVudCBub2RlLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdldFNlbGVjdGVkQ2hpbGRyZW4obm9kZTogSGllcmFyY2h5QmFyTm9kZSk6IEhpZXJhcmNoeUJhck5vZGVbXSB7XHJcblxyXG4gICAgICAgIGlmIChub2RlLmNoaWxkcmVuIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW25vZGVdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZ2V0IHRoZSBjaGlsZHJlbiAtIGFuZCBhY2NvdW50IGZvciB3aGVuIHRoZXJlIGlzIG5vbmVcclxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW4gfHwgW107XHJcblxyXG4gICAgICAgIC8vIGNoZWNrIGlmIGFueSBjaGlsZCBpcyBzZWxlY3RlZFxyXG4gICAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW4uZmluZChfY2hpbGQgPT4gX2NoaWxkLnNlbGVjdGVkKTtcclxuXHJcbiAgICAgICAgLy8gcmV0dXJuIHRoZSByZW1haW5pbmcgY2hhaW4gb2Ygc2VsZWN0ZWQgaXRlbXNcclxuICAgICAgICByZXR1cm4gY2hpbGQgPyBbbm9kZSwgLi4udGhpcy5nZXRTZWxlY3RlZENoaWxkcmVuKGNoaWxkKV0gOiBbbm9kZV07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSGllcmFyY2h5QmFyTm9kZSB7XHJcbiAgICBpY29uPzogc3RyaW5nO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIHNlbGVjdGVkPzogYm9vbGVhbjtcclxuICAgIHBhcmVudD86IEhpZXJhcmNoeUJhck5vZGU7XHJcbiAgICBjaGlsZHJlbj86IEhpZXJhcmNoeUJhck5vZGVbXSB8IE9ic2VydmFibGU8SGllcmFyY2h5QmFyTm9kZVtdPjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIaWVyYXJjaHlCYXJOb2RlQ2hpbGRyZW4ge1xyXG4gICAgbG9hZGluZzogYm9vbGVhbjtcclxuICAgIGNoaWxkcmVuOiBIaWVyYXJjaHlCYXJOb2RlW107XHJcbn0iXX0=