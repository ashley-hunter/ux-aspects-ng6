/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable, EventEmitter } from '@angular/core';
import { dragula } from './dragula';
export class ReorderableService {
    constructor() {
        this._groups = {};
        this._uniqueGroupId = 0;
    }
    /**
     * Returns a unique string which can be used as a group name if one was not configured.
     * @return {?}
     */
    getUniqueGroupName() {
        return '_uxReorderable_' + this._uniqueGroupId++;
    }
    /**
     * Adds the container to the named group.
     * @param {?} groupName
     * @param {?} container
     * @return {?}
     */
    register(groupName, container) {
        if (!this._groups[groupName]) {
            this._groups[groupName] = new ReorderableGroup();
        }
        this._groups[groupName].register(container);
        return this._groups[groupName];
    }
    /**
     * Removes the container from the named group. If it was the last container in the group, destroys the group.
     * @param {?} groupName
     * @param {?} container
     * @return {?}
     */
    unregister(groupName, container) {
        const /** @type {?} */ group = this._groups[groupName];
        if (group) {
            group.unregister(container);
            if (group.isEmpty()) {
                group.destroy();
                delete this._groups[groupName];
            }
        }
    }
    /**
     * Creates the dragula instance with the current config and attaches the events, if not already created.
     * @param {?} groupName
     * @return {?}
     */
    initialize(groupName) {
        const /** @type {?} */ group = this._groups[groupName];
        if (group) {
            group.initialize();
        }
        return group;
    }
    /**
     * Returns the group object for the given name.
     * @param {?} group
     * @return {?}
     */
    getGroup(group) {
        return this._groups[group];
    }
}
ReorderableService.decorators = [
    { type: Injectable },
];
function ReorderableService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ReorderableService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ReorderableService.ctorParameters;
    /** @type {?} */
    ReorderableService.prototype._groups;
    /** @type {?} */
    ReorderableService.prototype._uniqueGroupId;
}
/**
 * @record
 */
export function ReorderableContainer() { }
function ReorderableContainer_tsickle_Closure_declarations() {
    /** @type {?} */
    ReorderableContainer.prototype.element;
    /** @type {?} */
    ReorderableContainer.prototype.getModelFromElement;
    /** @type {?} */
    ReorderableContainer.prototype.canMove;
}
/**
 * @record
 */
export function ReorderableDragEvent() { }
function ReorderableDragEvent_tsickle_Closure_declarations() {
    /** @type {?} */
    ReorderableDragEvent.prototype.model;
    /** @type {?} */
    ReorderableDragEvent.prototype.element;
    /** @type {?} */
    ReorderableDragEvent.prototype.source;
}
/**
 * @record
 */
export function ReorderableDragEndEvent() { }
function ReorderableDragEndEvent_tsickle_Closure_declarations() {
    /** @type {?} */
    ReorderableDragEndEvent.prototype.model;
    /** @type {?} */
    ReorderableDragEndEvent.prototype.element;
}
/**
 * @record
 */
export function ReorderableDropEvent() { }
function ReorderableDropEvent_tsickle_Closure_declarations() {
    /** @type {?} */
    ReorderableDropEvent.prototype.model;
    /** @type {?} */
    ReorderableDropEvent.prototype.element;
    /** @type {?} */
    ReorderableDropEvent.prototype.target;
    /** @type {?} */
    ReorderableDropEvent.prototype.source;
    /** @type {?} */
    ReorderableDropEvent.prototype.sibling;
}
/**
 * @record
 */
export function ReorderableCancelEvent() { }
function ReorderableCancelEvent_tsickle_Closure_declarations() {
    /** @type {?} */
    ReorderableCancelEvent.prototype.model;
    /** @type {?} */
    ReorderableCancelEvent.prototype.element;
}
/**
 * @record
 */
export function ReorderableClonedEvent() { }
function ReorderableClonedEvent_tsickle_Closure_declarations() {
    /** @type {?} */
    ReorderableClonedEvent.prototype.clone;
    /** @type {?} */
    ReorderableClonedEvent.prototype.element;
    /** @type {?} */
    ReorderableClonedEvent.prototype.type;
}
/**
 * Represents a collection of drag-and-drop containers (uxReorderable) that items can be dragged between.
 */
export class ReorderableGroup {
    constructor() {
        this.drag = new EventEmitter();
        this.dragEnd = new EventEmitter();
        this.drop = new EventEmitter();
        this.cancel = new EventEmitter();
        this.cloned = new EventEmitter();
        this._containers = [];
        this._config = {
            moves: this.canMove.bind(this)
        };
    }
    /**
     * Returns true if there are no containers registered with the group.
     * @return {?}
     */
    isEmpty() {
        return this._containers.length === 0;
    }
    /**
     * Returns the model object (uxReorderableModel) for an elements in one of the containers in the group.
     * @param {?} element
     * @return {?}
     */
    getModelForElement(element) {
        for (const /** @type {?} */ container of this._containers) {
            const /** @type {?} */ model = container.getModelFromElement(element);
            if (model) {
                return model;
            }
        }
        return null;
    }
    /**
     * Adds the container to the group.
     * @param {?} container
     * @return {?}
     */
    register(container) {
        this._containers.push(container);
        if (this._instance) {
            this._instance.containers = this._containers.map((c) => c.element);
        }
        if (!this._config.mirrorContainer) {
            this._config.mirrorContainer = container.element;
        }
    }
    /**
     * Removes the container from the group.
     * @param {?} container
     * @return {?}
     */
    unregister(container) {
        const /** @type {?} */ index = this._containers.indexOf(container);
        if (index >= 0) {
            this._containers.splice(index, 1);
            if (this._instance) {
                this._instance.containers = this._containers.map((c) => c.element);
            }
        }
    }
    /**
     * Creates the dragula instance with the current config and attaches the events, if not already created.
     * @return {?}
     */
    initialize() {
        if (this._instance) {
            return;
        }
        this._instance = dragula(this._containers.map((c) => c.element), this._config);
        this._instance.on('drag', (element, source) => {
            this.drag.emit({
                model: this.getModelForElement(element),
                element: element,
                source: source
            });
        });
        this._instance.on('dragend', (element) => {
            this.dragEnd.emit({
                model: this.getModelForElement(element),
                element: element
            });
        });
        this._instance.on('drop', (element, target, source, sibling) => {
            this.drop.emit({
                model: this.getModelForElement(element),
                element: element,
                target: target,
                source: source,
                sibling: sibling
            });
        });
        this._instance.on('cancel', (element) => {
            this.cancel.emit({
                model: this.getModelForElement(element),
                element: element
            });
        });
        this._instance.on('cloned', (clone, element, type) => {
            this.cloned.emit({
                clone: clone,
                element: element,
                type: type
            });
        });
    }
    /**
     * Destroys the dragula instance.
     * @return {?}
     */
    destroy() {
        if (this._instance) {
            this._instance.destroy();
            this._instance = null;
        }
    }
    /**
     * Finds the container for the containerElement and returns the results of canMove.
     * @param {?} element
     * @param {?} containerElement
     * @param {?} handle
     * @return {?}
     */
    canMove(element, containerElement, handle) {
        for (let /** @type {?} */ container of this._containers) {
            if (container.element.isSameNode(containerElement)) {
                return container.canMove(element, containerElement, handle);
            }
        }
    }
}
function ReorderableGroup_tsickle_Closure_declarations() {
    /** @type {?} */
    ReorderableGroup.prototype.drag;
    /** @type {?} */
    ReorderableGroup.prototype.dragEnd;
    /** @type {?} */
    ReorderableGroup.prototype.drop;
    /** @type {?} */
    ReorderableGroup.prototype.cancel;
    /** @type {?} */
    ReorderableGroup.prototype.cloned;
    /** @type {?} */
    ReorderableGroup.prototype._instance;
    /** @type {?} */
    ReorderableGroup.prototype._containers;
    /** @type {?} */
    ReorderableGroup.prototype._config;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVvcmRlcmFibGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL3Jlb3JkZXJhYmxlL3Jlb3JkZXJhYmxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFHcEMsTUFBTTs7dUJBRW1ELEVBQUU7OEJBQzlCLENBQUM7Ozs7OztJQUsxQixrQkFBa0I7UUFDZCxNQUFNLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0tBQ3BEOzs7Ozs7O0lBS0QsUUFBUSxDQUFDLFNBQWlCLEVBQUUsU0FBK0I7UUFFdkQsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztTQUNwRDtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTVDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ2xDOzs7Ozs7O0lBS0QsVUFBVSxDQUFDLFNBQWlCLEVBQUUsU0FBK0I7UUFFekQsdUJBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFdEMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNSLEtBQUssQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7WUFFNUIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFD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O2FBQy9EO1NBQ0o7O0NBRVIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRHJha2UsIERyYWd1bGFPcHRpb25zIH0gZnJvbSAnZHJhZ3VsYSc7XHJcbmltcG9ydCB7IGRyYWd1bGEgfSBmcm9tICcuL2RyYWd1bGEnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUmVvcmRlcmFibGVTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIF9ncm91cHM6IHsgW2s6IHN0cmluZ106IFJlb3JkZXJhYmxlR3JvdXAgfSA9IHt9O1xyXG4gICAgcHJpdmF0ZSBfdW5pcXVlR3JvdXBJZCA9IDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGEgdW5pcXVlIHN0cmluZyB3aGljaCBjYW4gYmUgdXNlZCBhcyBhIGdyb3VwIG5hbWUgaWYgb25lIHdhcyBub3QgY29uZmlndXJlZC5cclxuICAgICAqL1xyXG4gICAgZ2V0VW5pcXVlR3JvdXBOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICdfdXhSZW9yZGVyYWJsZV8nICsgdGhpcy5fdW5pcXVlR3JvdXBJZCsrO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkcyB0aGUgY29udGFpbmVyIHRvIHRoZSBuYW1lZCBncm91cC5cclxuICAgICAqL1xyXG4gICAgcmVnaXN0ZXIoZ3JvdXBOYW1lOiBzdHJpbmcsIGNvbnRhaW5lcjogUmVvcmRlcmFibGVDb250YWluZXIpOiBSZW9yZGVyYWJsZUdyb3VwIHtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9ncm91cHNbZ3JvdXBOYW1lXSkge1xyXG4gICAgICAgICAgICB0aGlzLl9ncm91cHNbZ3JvdXBOYW1lXSA9IG5ldyBSZW9yZGVyYWJsZUdyb3VwKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9ncm91cHNbZ3JvdXBOYW1lXS5yZWdpc3Rlcihjb250YWluZXIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5fZ3JvdXBzW2dyb3VwTmFtZV07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIHRoZSBjb250YWluZXIgZnJvbSB0aGUgbmFtZWQgZ3JvdXAuIElmIGl0IHdhcyB0aGUgbGFzdCBjb250YWluZXIgaW4gdGhlIGdyb3VwLCBkZXN0cm95cyB0aGUgZ3JvdXAuXHJcbiAgICAgKi9cclxuICAgIHVucmVnaXN0ZXIoZ3JvdXBOYW1lOiBzdHJpbmcsIGNvbnRhaW5lcjogUmVvcmRlcmFibGVDb250YWluZXIpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgY29uc3QgZ3JvdXAgPSB0aGlzLl9ncm91cHNbZ3JvdXBOYW1lXTtcclxuXHJcbiAgICAgICAgaWYgKGdyb3VwKSB7XHJcbiAgICAgICAgICAgIGdyb3VwLnVucmVnaXN0ZXIoY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChncm91cC5pc0VtcHR5KCkpIHtcclxuICAgICAgICAgICAgICAgIGdyb3VwLmRlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fZ3JvdXBzW2dyb3VwTmFtZV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIHRoZSBkcmFndWxhIGluc3RhbmNlIHdpdGggdGhlIGN1cnJlbnQgY29uZmlnIGFuZCBhdHRhY2hlcyB0aGUgZXZlbnRzLCBpZiBub3QgYWxyZWFkeSBjcmVhdGVkLlxyXG4gICAgICovXHJcbiAgICBpbml0aWFsaXplKGdyb3VwTmFtZTogc3RyaW5nKTogUmVvcmRlcmFibGVHcm91cCB7XHJcblxyXG4gICAgICAgIGNvbnN0IGdyb3VwID0gdGhpcy5fZ3JvdXBzW2dyb3VwTmFtZV07XHJcblxyXG4gICAgICAgIGlmIChncm91cCkge1xyXG4gICAgICAgICAgICBncm91cC5pbml0aWFsaXplKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZ3JvdXA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBncm91cCBvYmplY3QgZm9yIHRoZSBnaXZlbiBuYW1lLlxyXG4gICAgICovXHJcbiAgICBnZXRHcm91cChncm91cDogc3RyaW5nKTogUmVvcmRlcmFibGVHcm91cCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dyb3Vwc1tncm91cF07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVvcmRlcmFibGVDb250YWluZXIge1xyXG4gICAgZWxlbWVudDogRWxlbWVudDtcclxuICAgIGdldE1vZGVsRnJvbUVsZW1lbnQ6IChlbGVtZW50OiBFbGVtZW50KSA9PiBhbnk7XHJcbiAgICBjYW5Nb3ZlOiAoZWxlbWVudDogRWxlbWVudCwgY29udGFpbmVyOiBFbGVtZW50LCBoYW5kbGU6IEVsZW1lbnQpID0+IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVvcmRlcmFibGVEcmFnRXZlbnQge1xyXG4gICAgbW9kZWw6IGFueTtcclxuICAgIGVsZW1lbnQ6IEVsZW1lbnQ7XHJcbiAgICBzb3VyY2U6IEVsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVvcmRlcmFibGVEcmFnRW5kRXZlbnQge1xyXG4gICAgbW9kZWw6IGFueTtcclxuICAgIGVsZW1lbnQ6IEVsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVvcmRlcmFibGVEcm9wRXZlbnQge1xyXG4gICAgbW9kZWw6IGFueTtcclxuICAgIGVsZW1lbnQ6IEVsZW1lbnQ7XHJcbiAgICB0YXJnZXQ6IEVsZW1lbnQ7XHJcbiAgICBzb3VyY2U6IEVsZW1lbnQ7XHJcbiAgICBzaWJsaW5nOiBFbGVtZW50O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJlb3JkZXJhYmxlQ2FuY2VsRXZlbnQge1xyXG4gICAgbW9kZWw6IGFueTtcclxuICAgIGVsZW1lbnQ6IEVsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVvcmRlcmFibGVDbG9uZWRFdmVudCB7XHJcbiAgICBjbG9uZTogRWxlbWVudDtcclxuICAgIGVsZW1lbnQ6IEVsZW1lbnQ7XHJcbiAgICB0eXBlOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGEgY29sbGVjdGlvbiBvZiBkcmFnLWFuZC1kcm9wIGNvbnRhaW5lcnMgKHV4UmVvcmRlcmFibGUpIHRoYXQgaXRlbXMgY2FuIGJlIGRyYWdnZWQgYmV0d2Vlbi5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBSZW9yZGVyYWJsZUdyb3VwIHtcclxuXHJcbiAgICBkcmFnID0gbmV3IEV2ZW50RW1pdHRlcjxSZW9yZGVyYWJsZURyYWdFdmVudD4oKTtcclxuICAgIGRyYWdFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPFJlb3JkZXJhYmxlRHJhZ0VuZEV2ZW50PigpO1xyXG4gICAgZHJvcCA9IG5ldyBFdmVudEVtaXR0ZXI8UmVvcmRlcmFibGVEcm9wRXZlbnQ+KCk7XHJcbiAgICBjYW5jZWwgPSBuZXcgRXZlbnRFbWl0dGVyPFJlb3JkZXJhYmxlQ2FuY2VsRXZlbnQ+KCk7XHJcbiAgICBjbG9uZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFJlb3JkZXJhYmxlQ2xvbmVkRXZlbnQ+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfaW5zdGFuY2U6IERyYWtlO1xyXG4gICAgcHJpdmF0ZSBfY29udGFpbmVyczogUmVvcmRlcmFibGVDb250YWluZXJbXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgX2NvbmZpZzogRHJhZ3VsYU9wdGlvbnMgPSB7XHJcbiAgICAgICAgbW92ZXM6IHRoaXMuY2FuTW92ZS5iaW5kKHRoaXMpXHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZXJlIGFyZSBubyBjb250YWluZXJzIHJlZ2lzdGVyZWQgd2l0aCB0aGUgZ3JvdXAuXHJcbiAgICAgKi9cclxuICAgIGlzRW1wdHkoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lcnMubGVuZ3RoID09PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgbW9kZWwgb2JqZWN0ICh1eFJlb3JkZXJhYmxlTW9kZWwpIGZvciBhbiBlbGVtZW50cyBpbiBvbmUgb2YgdGhlIGNvbnRhaW5lcnMgaW4gdGhlIGdyb3VwLlxyXG4gICAgICovXHJcbiAgICBnZXRNb2RlbEZvckVsZW1lbnQoZWxlbWVudDogRWxlbWVudCk6IGFueSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBjb250YWluZXIgb2YgdGhpcy5fY29udGFpbmVycykge1xyXG4gICAgICAgICAgICBjb25zdCBtb2RlbCA9IGNvbnRhaW5lci5nZXRNb2RlbEZyb21FbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgICAgICAgICBpZiAobW9kZWwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtb2RlbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIHRoZSBjb250YWluZXIgdG8gdGhlIGdyb3VwLlxyXG4gICAgICovXHJcbiAgICByZWdpc3Rlcihjb250YWluZXI6IFJlb3JkZXJhYmxlQ29udGFpbmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY29udGFpbmVycy5wdXNoKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZS5jb250YWluZXJzID0gdGhpcy5fY29udGFpbmVycy5tYXAoKGMpID0+IGMuZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuX2NvbmZpZy5taXJyb3JDb250YWluZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5fY29uZmlnLm1pcnJvckNvbnRhaW5lciA9IGNvbnRhaW5lci5lbGVtZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgdGhlIGNvbnRhaW5lciBmcm9tIHRoZSBncm91cC5cclxuICAgICAqL1xyXG4gICAgdW5yZWdpc3Rlcihjb250YWluZXI6IFJlb3JkZXJhYmxlQ29udGFpbmVyKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLl9jb250YWluZXJzLmluZGV4T2YoY29udGFpbmVyKTtcclxuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jb250YWluZXJzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UuY29udGFpbmVycyA9IHRoaXMuX2NvbnRhaW5lcnMubWFwKChjKSA9PiBjLmVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyB0aGUgZHJhZ3VsYSBpbnN0YW5jZSB3aXRoIHRoZSBjdXJyZW50IGNvbmZpZyBhbmQgYXR0YWNoZXMgdGhlIGV2ZW50cywgaWYgbm90IGFscmVhZHkgY3JlYXRlZC5cclxuICAgICAqL1xyXG4gICAgaW5pdGlhbGl6ZSgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2luc3RhbmNlID0gZHJhZ3VsYSh0aGlzLl9jb250YWluZXJzLm1hcCgoYykgPT4gYy5lbGVtZW50KSwgdGhpcy5fY29uZmlnKTtcclxuXHJcbiAgICAgICAgdGhpcy5faW5zdGFuY2Uub24oJ2RyYWcnLCAoZWxlbWVudDogRWxlbWVudCwgc291cmNlOiBFbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhZy5lbWl0KHtcclxuICAgICAgICAgICAgICAgIG1vZGVsOiB0aGlzLmdldE1vZGVsRm9yRWxlbWVudChlbGVtZW50KSxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6IHNvdXJjZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9pbnN0YW5jZS5vbignZHJhZ2VuZCcsIChlbGVtZW50OiBFbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhZ0VuZC5lbWl0KHtcclxuICAgICAgICAgICAgICAgIG1vZGVsOiB0aGlzLmdldE1vZGVsRm9yRWxlbWVudChlbGVtZW50KSxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGVsZW1lbnRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5faW5zdGFuY2Uub24oJ2Ryb3AnLCAoZWxlbWVudDogRWxlbWVudCwgdGFyZ2V0OiBFbGVtZW50LCBzb3VyY2U6IEVsZW1lbnQsIHNpYmxpbmc6IEVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kcm9wLmVtaXQoe1xyXG4gICAgICAgICAgICAgICAgbW9kZWw6IHRoaXMuZ2V0TW9kZWxGb3JFbGVtZW50KGVsZW1lbnQpLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogZWxlbWVudCxcclxuICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgc291cmNlOiBzb3VyY2UsXHJcbiAgICAgICAgICAgICAgICBzaWJsaW5nOiBzaWJsaW5nXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX2luc3RhbmNlLm9uKCdjYW5jZWwnLCAoZWxlbWVudDogRWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNhbmNlbC5lbWl0KHtcclxuICAgICAgICAgICAgICAgIG1vZGVsOiB0aGlzLmdldE1vZGVsRm9yRWxlbWVudChlbGVtZW50KSxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGVsZW1lbnRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5faW5zdGFuY2Uub24oJ2Nsb25lZCcsIChjbG9uZTogRWxlbWVudCwgZWxlbWVudDogRWxlbWVudCwgdHlwZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvbmVkLmVtaXQoe1xyXG4gICAgICAgICAgICAgICAgY2xvbmU6IGNsb25lLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogZWxlbWVudCxcclxuICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXN0cm95cyB0aGUgZHJhZ3VsYSBpbnN0YW5jZS5cclxuICAgICAqL1xyXG4gICAgZGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmluZHMgdGhlIGNvbnRhaW5lciBmb3IgdGhlIGNvbnRhaW5lckVsZW1lbnQgYW5kIHJldHVybnMgdGhlIHJlc3VsdHMgb2YgY2FuTW92ZS5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjYW5Nb3ZlKGVsZW1lbnQ6IEVsZW1lbnQsIGNvbnRhaW5lckVsZW1lbnQ6IEVsZW1lbnQsIGhhbmRsZTogRWxlbWVudCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGZvciAobGV0IGNvbnRhaW5lciBvZiB0aGlzLl9jb250YWluZXJzKSB7XHJcbiAgICAgICAgICAgIGlmIChjb250YWluZXIuZWxlbWVudC5pc1NhbWVOb2RlKGNvbnRhaW5lckVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGFpbmVyLmNhbk1vdmUoZWxlbWVudCwgY29udGFpbmVyRWxlbWVudCwgaGFuZGxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=