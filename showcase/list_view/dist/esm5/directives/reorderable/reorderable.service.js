/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, EventEmitter } from '@angular/core';
import { dragula } from './dragula';
var ReorderableService = /** @class */ (function () {
    function ReorderableService() {
        this._groups = {};
        this._uniqueGroupId = 0;
    }
    /**
     * Returns a unique string which can be used as a group name if one was not configured.
     */
    /**
     * Returns a unique string which can be used as a group name if one was not configured.
     * @return {?}
     */
    ReorderableService.prototype.getUniqueGroupName = /**
     * Returns a unique string which can be used as a group name if one was not configured.
     * @return {?}
     */
    function () {
        return '_uxReorderable_' + this._uniqueGroupId++;
    };
    /**
     * Adds the container to the named group.
     */
    /**
     * Adds the container to the named group.
     * @param {?} groupName
     * @param {?} container
     * @return {?}
     */
    ReorderableService.prototype.register = /**
     * Adds the container to the named group.
     * @param {?} groupName
     * @param {?} container
     * @return {?}
     */
    function (groupName, container) {
        if (!this._groups[groupName]) {
            this._groups[groupName] = new ReorderableGroup();
        }
        this._groups[groupName].register(container);
        return this._groups[groupName];
    };
    /**
     * Removes the container from the named group. If it was the last container in the group, destroys the group.
     */
    /**
     * Removes the container from the named group. If it was the last container in the group, destroys the group.
     * @param {?} groupName
     * @param {?} container
     * @return {?}
     */
    ReorderableService.prototype.unregister = /**
     * Removes the container from the named group. If it was the last container in the group, destroys the group.
     * @param {?} groupName
     * @param {?} container
     * @return {?}
     */
    function (groupName, container) {
        var /** @type {?} */ group = this._groups[groupName];
        if (group) {
            group.unregister(container);
            if (group.isEmpty()) {
                group.destroy();
                delete this._groups[groupName];
            }
        }
    };
    /**
     * Creates the dragula instance with the current config and attaches the events, if not already created.
     */
    /**
     * Creates the dragula instance with the current config and attaches the events, if not already created.
     * @param {?} groupName
     * @return {?}
     */
    ReorderableService.prototype.initialize = /**
     * Creates the dragula instance with the current config and attaches the events, if not already created.
     * @param {?} groupName
     * @return {?}
     */
    function (groupName) {
        var /** @type {?} */ group = this._groups[groupName];
        if (group) {
            group.initialize();
        }
        return group;
    };
    /**
     * Returns the group object for the given name.
     */
    /**
     * Returns the group object for the given name.
     * @param {?} group
     * @return {?}
     */
    ReorderableService.prototype.getGroup = /**
     * Returns the group object for the given name.
     * @param {?} group
     * @return {?}
     */
    function (group) {
        return this._groups[group];
    };
    ReorderableService.decorators = [
        { type: Injectable },
    ];
    return ReorderableService;
}());
export { ReorderableService };
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
var /**
 * Represents a collection of drag-and-drop containers (uxReorderable) that items can be dragged between.
 */
ReorderableGroup = /** @class */ (function () {
    function ReorderableGroup() {
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
     */
    /**
     * Returns true if there are no containers registered with the group.
     * @return {?}
     */
    ReorderableGroup.prototype.isEmpty = /**
     * Returns true if there are no containers registered with the group.
     * @return {?}
     */
    function () {
        return this._containers.length === 0;
    };
    /**
     * Returns the model object (uxReorderableModel) for an elements in one of the containers in the group.
     */
    /**
     * Returns the model object (uxReorderableModel) for an elements in one of the containers in the group.
     * @param {?} element
     * @return {?}
     */
    ReorderableGroup.prototype.getModelForElement = /**
     * Returns the model object (uxReorderableModel) for an elements in one of the containers in the group.
     * @param {?} element
     * @return {?}
     */
    function (element) {
        try {
            for (var _a = tslib_1.__values(this._containers), _b = _a.next(); !_b.done; _b = _a.next()) {
                var container = _b.value;
                var /** @type {?} */ model = container.getModelFromElement(element);
                if (model) {
                    return model;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return null;
        var e_1, _c;
    };
    /**
     * Adds the container to the group.
     */
    /**
     * Adds the container to the group.
     * @param {?} container
     * @return {?}
     */
    ReorderableGroup.prototype.register = /**
     * Adds the container to the group.
     * @param {?} container
     * @return {?}
     */
    function (container) {
        this._containers.push(container);
        if (this._instance) {
            this._instance.containers = this._containers.map(function (c) { return c.element; });
        }
        if (!this._config.mirrorContainer) {
            this._config.mirrorContainer = container.element;
        }
    };
    /**
     * Removes the container from the group.
     */
    /**
     * Removes the container from the group.
     * @param {?} container
     * @return {?}
     */
    ReorderableGroup.prototype.unregister = /**
     * Removes the container from the group.
     * @param {?} container
     * @return {?}
     */
    function (container) {
        var /** @type {?} */ index = this._containers.indexOf(container);
        if (index >= 0) {
            this._containers.splice(index, 1);
            if (this._instance) {
                this._instance.containers = this._containers.map(function (c) { return c.element; });
            }
        }
    };
    /**
     * Creates the dragula instance with the current config and attaches the events, if not already created.
     */
    /**
     * Creates the dragula instance with the current config and attaches the events, if not already created.
     * @return {?}
     */
    ReorderableGroup.prototype.initialize = /**
     * Creates the dragula instance with the current config and attaches the events, if not already created.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._instance) {
            return;
        }
        this._instance = dragula(this._containers.map(function (c) { return c.element; }), this._config);
        this._instance.on('drag', function (element, source) {
            _this.drag.emit({
                model: _this.getModelForElement(element),
                element: element,
                source: source
            });
        });
        this._instance.on('dragend', function (element) {
            _this.dragEnd.emit({
                model: _this.getModelForElement(element),
                element: element
            });
        });
        this._instance.on('drop', function (element, target, source, sibling) {
            _this.drop.emit({
                model: _this.getModelForElement(element),
                element: element,
                target: target,
                source: source,
                sibling: sibling
            });
        });
        this._instance.on('cancel', function (element) {
            _this.cancel.emit({
                model: _this.getModelForElement(element),
                element: element
            });
        });
        this._instance.on('cloned', function (clone, element, type) {
            _this.cloned.emit({
                clone: clone,
                element: element,
                type: type
            });
        });
    };
    /**
     * Destroys the dragula instance.
     */
    /**
     * Destroys the dragula instance.
     * @return {?}
     */
    ReorderableGroup.prototype.destroy = /**
     * Destroys the dragula instance.
     * @return {?}
     */
    function () {
        if (this._instance) {
            this._instance.destroy();
            this._instance = null;
        }
    };
    /**
     * Finds the container for the containerElement and returns the results of canMove.
     * @param {?} element
     * @param {?} containerElement
     * @param {?} handle
     * @return {?}
     */
    ReorderableGroup.prototype.canMove = /**
     * Finds the container for the containerElement and returns the results of canMove.
     * @param {?} element
     * @param {?} containerElement
     * @param {?} handle
     * @return {?}
     */
    function (element, containerElement, handle) {
        try {
            for (var _a = tslib_1.__values(this._containers), _b = _a.next(); !_b.done; _b = _a.next()) {
                var container = _b.value;
                if (container.element.isSameNode(containerElement)) {
                    return container.canMove(element, containerElement, handle);
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
        var e_2, _c;
    };
    return ReorderableGroup;
}());
/**
 * Represents a collection of drag-and-drop containers (uxReorderable) that items can be dragged between.
 */
export { ReorderableGroup };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVvcmRlcmFibGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL3Jlb3JkZXJhYmxlL3Jlb3JkZXJhYmxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDOzs7dUJBS3FCLEVBQUU7OEJBQzlCLENBQUM7O0lBRTFCOztPQUVHOzs7OztJQUNILCtDQUFrQjs7OztJQUFsQjtRQUNJLE1BQU0sQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7S0FDcEQ7SUFFRDs7T0FFRzs7Ozs7OztJQUNILHFDQUFROzs7Ozs7SUFBUixVQUFTLFNBQWlCLEVBQUUsU0FBK0I7UUFFdkQsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztTQUNwRDtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTVDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ2xDO0lBRUQ7O09BRUc7Ozs7Ozs7SUFDSCx1Q0FBVTs7Ozs7O0lBQVYsVUFBVyxTQUFpQixFQUFFLFNBQStCO1FBRXpELHFCQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXRDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDUixLQUFLLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBRTVCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xCLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFFaEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ2xDO1NBQ0o7S0FDSjtJQUVEOztPQUVHOzs7Ozs7SUFDSCx1Q0FBVTs7Ozs7SUFBVixVQUFXLFNBQWlCO1FBRXhCLHFCQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXRDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDUixLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDdEI7UUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDO0tBQ2hCO0lBRUQ7O09BRUc7Ozs7OztJQUNILHFDQUFROzs7OztJQUFSLFVBQVMsS0FBYTtRQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUM5Qjs7Z0JBaEVKLFVBQVU7OzZCQUpYOztTQUthLGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5Ry9COzs7QUFBQTs7b0JBRVcsSUFBSSxZQUFZLEVBQXdCO3VCQUNyQyxJQUFJLFlBQVksRUFBMkI7b0JBQzlDLElBQUksWUFBWSxFQUF3QjtzQkFDdEMsSUFBSSxZQUFZLEVBQTBCO3NCQUMxQyxJQUFJLFlBQVksRUFBMEI7MkJBR0wsRUFBRTt1QkFFZDtZQUM5QixLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ2pDOztJQUVEOztPQUVHOzs7OztJQUNILGtDQUFPOzs7O0lBQVA7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO0tBQ3hDO0lBRUQ7O09BRUc7Ozs7OztJQUNILDZDQUFrQjs7Ozs7SUFBbEIsVUFBbUIsT0FBZ0I7O1lBQy9CLEdBQUcsQ0FBQyxDQUFvQixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLFdBQVcsQ0FBQSxnQkFBQTtnQkFBbkMsSUFBTSxTQUFTLFdBQUE7Z0JBQ2hCLHFCQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3JELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ1IsTUFBTSxDQUFDLEtBQUssQ0FBQztpQkFDaEI7YUFDSjs7Ozs7Ozs7O1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQzs7S0FDZjtJQUVEOztPQUVHOzs7Ozs7SUFDSCxtQ0FBUTs7Ozs7SUFBUixVQUFTLFNBQStCO1FBQ3BDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRWpDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLE9BQU8sRUFBVCxDQUFTLENBQUMsQ0FBQztTQUN0RTtRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUM7U0FDcEQ7S0FDSjtJQUVEOztPQUVHOzs7Ozs7SUFDSCxxQ0FBVTs7Ozs7SUFBVixVQUFXLFNBQStCO1FBQ3RDLHFCQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsRCxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNiLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNsQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsT0FBTyxFQUFULENBQVMsQ0FBQyxDQUFDO2FBQ3RFO1NBQ0o7S0FDSjtJQUVEOztPQUVHOzs7OztJQUNILHFDQUFVOzs7O0lBQVY7UUFBQSxpQkEyQ0M7UUF6Q0csRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDakIsTUFBTSxDQUFDO1NBQ1Y7UUFFRCxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxPQUFPLEVBQVQsQ0FBUyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRS9FLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFDLE9BQWdCLEVBQUUsTUFBZTtZQUN4RCxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDWCxLQUFLLEVBQUUsS0FBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQztnQkFDdkMsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLE1BQU0sRUFBRSxNQUFNO2FBQ2pCLENBQUMsQ0FBQztTQUNOLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFDLE9BQWdCO1lBQzFDLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO2dCQUNkLEtBQUssRUFBRSxLQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDO2dCQUN2QyxPQUFPLEVBQUUsT0FBTzthQUNuQixDQUFDLENBQUM7U0FDTixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBQyxPQUFnQixFQUFFLE1BQWUsRUFBRSxNQUFlLEVBQUUsT0FBZ0I7WUFDM0YsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ1gsS0FBSyxFQUFFLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7Z0JBQ3ZDLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixNQUFNLEVBQUUsTUFBTTtnQkFDZCxNQUFNLEVBQUUsTUFBTTtnQkFDZCxPQUFPLEVBQUUsT0FBTzthQUNuQixDQUFDLENBQUM7U0FDTixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQyxPQUFnQjtZQUN6QyxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDYixLQUFLLEVBQUUsS0FBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQztnQkFDdkMsT0FBTyxFQUFFLE9BQU87YUFDbkIsQ0FBQyxDQUFDO1NBQ04sQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUMsS0FBYyxFQUFFLE9BQWdCLEVBQUUsSUFBWTtZQUN2RSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDYixLQUFLLEVBQUUsS0FBSztnQkFDWixPQUFPLEVBQUUsT0FBTztnQkFDaEIsSUFBSSxFQUFFLElBQUk7YUFDYixDQUFDLENBQUM7U0FDTixDQUFDLENBQUM7S0FDTjtJQUVEOztPQUVHOzs7OztJQUNILGtDQUFPOzs7O0lBQVA7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3pCO0tBQ0o7Ozs7Ozs7O0lBS08sa0NBQU87Ozs7Ozs7Y0FBQyxPQUFnQixFQUFFLGdCQUF5QixFQUFFLE1BQWU7O1lBQ3hFLEdBQUcsQ0FBQyxDQUFrQixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLFdBQVcsQ0FBQSxnQkFBQTtnQkFBakMsSUFBSSxTQUFTLFdBQUE7Z0JBQ2QsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pELE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsQ0FBQztpQkFDL0Q7YUFDSjs7Ozs7Ozs7Ozs7MkJBaFBUO0lBa1BDLENBQUE7Ozs7QUFwSUQsNEJBb0lDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERyYWtlLCBEcmFndWxhT3B0aW9ucyB9IGZyb20gJ2RyYWd1bGEnO1xyXG5pbXBvcnQgeyBkcmFndWxhIH0gZnJvbSAnLi9kcmFndWxhJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJlb3JkZXJhYmxlU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfZ3JvdXBzOiB7IFtrOiBzdHJpbmddOiBSZW9yZGVyYWJsZUdyb3VwIH0gPSB7fTtcclxuICAgIHByaXZhdGUgX3VuaXF1ZUdyb3VwSWQgPSAwO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhIHVuaXF1ZSBzdHJpbmcgd2hpY2ggY2FuIGJlIHVzZWQgYXMgYSBncm91cCBuYW1lIGlmIG9uZSB3YXMgbm90IGNvbmZpZ3VyZWQuXHJcbiAgICAgKi9cclxuICAgIGdldFVuaXF1ZUdyb3VwTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAnX3V4UmVvcmRlcmFibGVfJyArIHRoaXMuX3VuaXF1ZUdyb3VwSWQrKztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgdGhlIGNvbnRhaW5lciB0byB0aGUgbmFtZWQgZ3JvdXAuXHJcbiAgICAgKi9cclxuICAgIHJlZ2lzdGVyKGdyb3VwTmFtZTogc3RyaW5nLCBjb250YWluZXI6IFJlb3JkZXJhYmxlQ29udGFpbmVyKTogUmVvcmRlcmFibGVHcm91cCB7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5fZ3JvdXBzW2dyb3VwTmFtZV0pIHtcclxuICAgICAgICAgICAgdGhpcy5fZ3JvdXBzW2dyb3VwTmFtZV0gPSBuZXcgUmVvcmRlcmFibGVHcm91cCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fZ3JvdXBzW2dyb3VwTmFtZV0ucmVnaXN0ZXIoY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dyb3Vwc1tncm91cE5hbWVdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlcyB0aGUgY29udGFpbmVyIGZyb20gdGhlIG5hbWVkIGdyb3VwLiBJZiBpdCB3YXMgdGhlIGxhc3QgY29udGFpbmVyIGluIHRoZSBncm91cCwgZGVzdHJveXMgdGhlIGdyb3VwLlxyXG4gICAgICovXHJcbiAgICB1bnJlZ2lzdGVyKGdyb3VwTmFtZTogc3RyaW5nLCBjb250YWluZXI6IFJlb3JkZXJhYmxlQ29udGFpbmVyKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGNvbnN0IGdyb3VwID0gdGhpcy5fZ3JvdXBzW2dyb3VwTmFtZV07XHJcblxyXG4gICAgICAgIGlmIChncm91cCkge1xyXG4gICAgICAgICAgICBncm91cC51bnJlZ2lzdGVyKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICBpZiAoZ3JvdXAuaXNFbXB0eSgpKSB7XHJcbiAgICAgICAgICAgICAgICBncm91cC5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2dyb3Vwc1tncm91cE5hbWVdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyB0aGUgZHJhZ3VsYSBpbnN0YW5jZSB3aXRoIHRoZSBjdXJyZW50IGNvbmZpZyBhbmQgYXR0YWNoZXMgdGhlIGV2ZW50cywgaWYgbm90IGFscmVhZHkgY3JlYXRlZC5cclxuICAgICAqL1xyXG4gICAgaW5pdGlhbGl6ZShncm91cE5hbWU6IHN0cmluZyk6IFJlb3JkZXJhYmxlR3JvdXAge1xyXG5cclxuICAgICAgICBjb25zdCBncm91cCA9IHRoaXMuX2dyb3Vwc1tncm91cE5hbWVdO1xyXG5cclxuICAgICAgICBpZiAoZ3JvdXApIHtcclxuICAgICAgICAgICAgZ3JvdXAuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGdyb3VwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgZ3JvdXAgb2JqZWN0IGZvciB0aGUgZ2l2ZW4gbmFtZS5cclxuICAgICAqL1xyXG4gICAgZ2V0R3JvdXAoZ3JvdXA6IHN0cmluZyk6IFJlb3JkZXJhYmxlR3JvdXAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ncm91cHNbZ3JvdXBdO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJlb3JkZXJhYmxlQ29udGFpbmVyIHtcclxuICAgIGVsZW1lbnQ6IEVsZW1lbnQ7XHJcbiAgICBnZXRNb2RlbEZyb21FbGVtZW50OiAoZWxlbWVudDogRWxlbWVudCkgPT4gYW55O1xyXG4gICAgY2FuTW92ZTogKGVsZW1lbnQ6IEVsZW1lbnQsIGNvbnRhaW5lcjogRWxlbWVudCwgaGFuZGxlOiBFbGVtZW50KSA9PiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJlb3JkZXJhYmxlRHJhZ0V2ZW50IHtcclxuICAgIG1vZGVsOiBhbnk7XHJcbiAgICBlbGVtZW50OiBFbGVtZW50O1xyXG4gICAgc291cmNlOiBFbGVtZW50O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJlb3JkZXJhYmxlRHJhZ0VuZEV2ZW50IHtcclxuICAgIG1vZGVsOiBhbnk7XHJcbiAgICBlbGVtZW50OiBFbGVtZW50O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJlb3JkZXJhYmxlRHJvcEV2ZW50IHtcclxuICAgIG1vZGVsOiBhbnk7XHJcbiAgICBlbGVtZW50OiBFbGVtZW50O1xyXG4gICAgdGFyZ2V0OiBFbGVtZW50O1xyXG4gICAgc291cmNlOiBFbGVtZW50O1xyXG4gICAgc2libGluZzogRWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZW9yZGVyYWJsZUNhbmNlbEV2ZW50IHtcclxuICAgIG1vZGVsOiBhbnk7XHJcbiAgICBlbGVtZW50OiBFbGVtZW50O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJlb3JkZXJhYmxlQ2xvbmVkRXZlbnQge1xyXG4gICAgY2xvbmU6IEVsZW1lbnQ7XHJcbiAgICBlbGVtZW50OiBFbGVtZW50O1xyXG4gICAgdHlwZTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBhIGNvbGxlY3Rpb24gb2YgZHJhZy1hbmQtZHJvcCBjb250YWluZXJzICh1eFJlb3JkZXJhYmxlKSB0aGF0IGl0ZW1zIGNhbiBiZSBkcmFnZ2VkIGJldHdlZW4uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUmVvcmRlcmFibGVHcm91cCB7XHJcblxyXG4gICAgZHJhZyA9IG5ldyBFdmVudEVtaXR0ZXI8UmVvcmRlcmFibGVEcmFnRXZlbnQ+KCk7XHJcbiAgICBkcmFnRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxSZW9yZGVyYWJsZURyYWdFbmRFdmVudD4oKTtcclxuICAgIGRyb3AgPSBuZXcgRXZlbnRFbWl0dGVyPFJlb3JkZXJhYmxlRHJvcEV2ZW50PigpO1xyXG4gICAgY2FuY2VsID0gbmV3IEV2ZW50RW1pdHRlcjxSZW9yZGVyYWJsZUNhbmNlbEV2ZW50PigpO1xyXG4gICAgY2xvbmVkID0gbmV3IEV2ZW50RW1pdHRlcjxSZW9yZGVyYWJsZUNsb25lZEV2ZW50PigpO1xyXG5cclxuICAgIHByaXZhdGUgX2luc3RhbmNlOiBEcmFrZTtcclxuICAgIHByaXZhdGUgX2NvbnRhaW5lcnM6IFJlb3JkZXJhYmxlQ29udGFpbmVyW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIF9jb25maWc6IERyYWd1bGFPcHRpb25zID0ge1xyXG4gICAgICAgIG1vdmVzOiB0aGlzLmNhbk1vdmUuYmluZCh0aGlzKVxyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGVyZSBhcmUgbm8gY29udGFpbmVycyByZWdpc3RlcmVkIHdpdGggdGhlIGdyb3VwLlxyXG4gICAgICovXHJcbiAgICBpc0VtcHR5KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb250YWluZXJzLmxlbmd0aCA9PT0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIG1vZGVsIG9iamVjdCAodXhSZW9yZGVyYWJsZU1vZGVsKSBmb3IgYW4gZWxlbWVudHMgaW4gb25lIG9mIHRoZSBjb250YWluZXJzIGluIHRoZSBncm91cC5cclxuICAgICAqL1xyXG4gICAgZ2V0TW9kZWxGb3JFbGVtZW50KGVsZW1lbnQ6IEVsZW1lbnQpOiBhbnkge1xyXG4gICAgICAgIGZvciAoY29uc3QgY29udGFpbmVyIG9mIHRoaXMuX2NvbnRhaW5lcnMpIHtcclxuICAgICAgICAgICAgY29uc3QgbW9kZWwgPSBjb250YWluZXIuZ2V0TW9kZWxGcm9tRWxlbWVudChlbGVtZW50KTtcclxuICAgICAgICAgICAgaWYgKG1vZGVsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9kZWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkcyB0aGUgY29udGFpbmVyIHRvIHRoZSBncm91cC5cclxuICAgICAqL1xyXG4gICAgcmVnaXN0ZXIoY29udGFpbmVyOiBSZW9yZGVyYWJsZUNvbnRhaW5lcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lcnMucHVzaChjb250YWluZXIpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UuY29udGFpbmVycyA9IHRoaXMuX2NvbnRhaW5lcnMubWFwKChjKSA9PiBjLmVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9jb25maWcubWlycm9yQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbmZpZy5taXJyb3JDb250YWluZXIgPSBjb250YWluZXIuZWxlbWVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIHRoZSBjb250YWluZXIgZnJvbSB0aGUgZ3JvdXAuXHJcbiAgICAgKi9cclxuICAgIHVucmVnaXN0ZXIoY29udGFpbmVyOiBSZW9yZGVyYWJsZUNvbnRhaW5lcik6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fY29udGFpbmVycy5pbmRleE9mKGNvbnRhaW5lcik7XHJcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fY29udGFpbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlLmNvbnRhaW5lcnMgPSB0aGlzLl9jb250YWluZXJzLm1hcCgoYykgPT4gYy5lbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgdGhlIGRyYWd1bGEgaW5zdGFuY2Ugd2l0aCB0aGUgY3VycmVudCBjb25maWcgYW5kIGF0dGFjaGVzIHRoZSBldmVudHMsIGlmIG5vdCBhbHJlYWR5IGNyZWF0ZWQuXHJcbiAgICAgKi9cclxuICAgIGluaXRpYWxpemUoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IGRyYWd1bGEodGhpcy5fY29udGFpbmVycy5tYXAoKGMpID0+IGMuZWxlbWVudCksIHRoaXMuX2NvbmZpZyk7XHJcblxyXG4gICAgICAgIHRoaXMuX2luc3RhbmNlLm9uKCdkcmFnJywgKGVsZW1lbnQ6IEVsZW1lbnQsIHNvdXJjZTogRWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRyYWcuZW1pdCh7XHJcbiAgICAgICAgICAgICAgICBtb2RlbDogdGhpcy5nZXRNb2RlbEZvckVsZW1lbnQoZWxlbWVudCksXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgc291cmNlOiBzb3VyY2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5faW5zdGFuY2Uub24oJ2RyYWdlbmQnLCAoZWxlbWVudDogRWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRyYWdFbmQuZW1pdCh7XHJcbiAgICAgICAgICAgICAgICBtb2RlbDogdGhpcy5nZXRNb2RlbEZvckVsZW1lbnQoZWxlbWVudCksXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBlbGVtZW50XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX2luc3RhbmNlLm9uKCdkcm9wJywgKGVsZW1lbnQ6IEVsZW1lbnQsIHRhcmdldDogRWxlbWVudCwgc291cmNlOiBFbGVtZW50LCBzaWJsaW5nOiBFbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJvcC5lbWl0KHtcclxuICAgICAgICAgICAgICAgIG1vZGVsOiB0aGlzLmdldE1vZGVsRm9yRWxlbWVudChlbGVtZW50KSxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcclxuICAgICAgICAgICAgICAgIHNvdXJjZTogc291cmNlLFxyXG4gICAgICAgICAgICAgICAgc2libGluZzogc2libGluZ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9pbnN0YW5jZS5vbignY2FuY2VsJywgKGVsZW1lbnQ6IEVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jYW5jZWwuZW1pdCh7XHJcbiAgICAgICAgICAgICAgICBtb2RlbDogdGhpcy5nZXRNb2RlbEZvckVsZW1lbnQoZWxlbWVudCksXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBlbGVtZW50XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX2luc3RhbmNlLm9uKCdjbG9uZWQnLCAoY2xvbmU6IEVsZW1lbnQsIGVsZW1lbnQ6IEVsZW1lbnQsIHR5cGU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNsb25lZC5lbWl0KHtcclxuICAgICAgICAgICAgICAgIGNsb25lOiBjbG9uZSxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiB0eXBlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVzdHJveXMgdGhlIGRyYWd1bGEgaW5zdGFuY2UuXHJcbiAgICAgKi9cclxuICAgIGRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZpbmRzIHRoZSBjb250YWluZXIgZm9yIHRoZSBjb250YWluZXJFbGVtZW50IGFuZCByZXR1cm5zIHRoZSByZXN1bHRzIG9mIGNhbk1vdmUuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY2FuTW92ZShlbGVtZW50OiBFbGVtZW50LCBjb250YWluZXJFbGVtZW50OiBFbGVtZW50LCBoYW5kbGU6IEVsZW1lbnQpOiBib29sZWFuIHtcclxuICAgICAgICBmb3IgKGxldCBjb250YWluZXIgb2YgdGhpcy5fY29udGFpbmVycykge1xyXG4gICAgICAgICAgICBpZiAoY29udGFpbmVyLmVsZW1lbnQuaXNTYW1lTm9kZShjb250YWluZXJFbGVtZW50KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lci5jYW5Nb3ZlKGVsZW1lbnQsIGNvbnRhaW5lckVsZW1lbnQsIGhhbmRsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19