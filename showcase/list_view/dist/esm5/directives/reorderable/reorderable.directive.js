/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ContentChildren, Directive, ElementRef, EventEmitter, HostBinding, Input, Output, QueryList, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReorderableHandleDirective } from './reorderable-handle.directive';
import { ReorderableModelDirective } from './reorderable-model.directive';
import { ReorderableService } from './reorderable.service';
var ReorderableDirective = /** @class */ (function () {
    function ReorderableDirective(_elementRef, _renderer, _service) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._service = _service;
        this.reorderingDisabled = false;
        this.reorderableModelChange = new EventEmitter();
        this.reorderStart = new EventEmitter();
        this.reorderCancel = new EventEmitter();
        this.reorderEnd = new EventEmitter();
        this.dragging = false;
        this._subscriptions = new Subscription();
    }
    /**
     * Initialise dragula and bind to all the required events
     */
    /**
     * Initialise dragula and bind to all the required events
     * @return {?}
     */
    ReorderableDirective.prototype.ngOnInit = /**
     * Initialise dragula and bind to all the required events
     * @return {?}
     */
    function () {
        var _this = this;
        // If no group name then generate a unique one for this instance only
        if (!this.reorderableGroup) {
            this.reorderableGroup = this._service.getUniqueGroupName();
        }
        this._container = {
            element: this._elementRef.nativeElement,
            getModelFromElement: this.getModelFromElement.bind(this),
            canMove: this.canMove.bind(this)
        };
        // Register for drag events on this element
        var /** @type {?} */ group = this._service.register(this.reorderableGroup, this._container);
        this._subscriptions.add(group.drag.subscribe(this.onDrag.bind(this)));
        this._subscriptions.add(group.dragEnd.subscribe(this.onDragEnd.bind(this)));
        this._subscriptions.add(group.drop.subscribe(this.onDrop.bind(this)));
        this._subscriptions.add(group.cancel.subscribe(function (event) { return _this.reorderCancel.emit({ element: event.element, model: event.model }); }));
        this._subscriptions.add(group.cloned.subscribe(this.onClone.bind(this)));
    };
    /**
     * @return {?}
     */
    ReorderableDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this._service.initialize(this.reorderableGroup);
    };
    /**
     * We need to destroy the dragula instance on component destroy
     */
    /**
     * We need to destroy the dragula instance on component destroy
     * @return {?}
     */
    ReorderableDirective.prototype.ngOnDestroy = /**
     * We need to destroy the dragula instance on component destroy
     * @return {?}
     */
    function () {
        this._service.unregister(this.reorderableGroup, this._container);
        this._subscriptions.unsubscribe();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ReorderableDirective.prototype.onDrag = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.dragging = true;
        this.reorderStart.emit({ element: event.element, model: event.model });
    };
    /**
     * This is fired when items get reordered - we need to emit the new order of the models
     */
    /**
     * This is fired when items get reordered - we need to emit the new order of the models
     * @param {?} event
     * @return {?}
     */
    ReorderableDirective.prototype.onDrop = /**
     * This is fired when items get reordered - we need to emit the new order of the models
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // if there is no provided module we can skip this
        if (!this.reorderableModel) {
            return;
        }
        var /** @type {?} */ changed = false;
        if (event.source.isSameNode(this._elementRef.nativeElement)) {
            // remove this model from the list of models
            var /** @type {?} */ index = this.reorderableModel.indexOf(event.model);
            if (index >= 0) {
                this.reorderableModel.splice(index, 1);
                changed = true;
            }
        }
        if (event.target.isSameNode(this._elementRef.nativeElement)) {
            // get the position of sibling element
            var /** @type {?} */ index = event.sibling && !event.sibling.classList.contains('gu-mirror') ?
                this.reorderableModel.indexOf(this.getModelFromElement(event.sibling)) :
                this.reorderableModel.length;
            // insert the model at its new location
            this.reorderableModel.splice(index, 0, event.model);
            changed = true;
        }
        // Emit event if any changes were made
        if (changed) {
            this.reorderableModelChange.emit(this.reorderableModel);
        }
    };
    /**
     * Return the model assciated with a particular element in the list.
     * This should ensure that the items have the draggable model directive applied
     */
    /**
     * Return the model assciated with a particular element in the list.
     * This should ensure that the items have the draggable model directive applied
     * @param {?} element
     * @return {?}
     */
    ReorderableDirective.prototype.getModelFromElement = /**
     * Return the model assciated with a particular element in the list.
     * This should ensure that the items have the draggable model directive applied
     * @param {?} element
     * @return {?}
     */
    function (element) {
        var /** @type {?} */ model = this.models.find(function (_model) { return _model.elementRef.nativeElement === element; });
        if (!model) {
            return null;
        }
        return model.uxReorderableModel;
    };
    /**
     * When we finish dragging remove the utillity class from the element being moved
     */
    /**
     * When we finish dragging remove the utillity class from the element being moved
     * @param {?} event
     * @return {?}
     */
    ReorderableDirective.prototype.onDragEnd = /**
     * When we finish dragging remove the utillity class from the element being moved
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.dragging = false;
        if (this._elementRef.nativeElement.contains(event.element)) {
            this._renderer.removeClass(event.element, 'ux-reorderable-moving');
            this.reorderEnd.emit({
                element: event.element,
                model: event.model
            });
        }
    };
    /**
     * We want to ensure that the cloned element is identical
     * to the original, regardless of it's location in the DOM tree
     */
    /**
     * We want to ensure that the cloned element is identical
     * to the original, regardless of it's location in the DOM tree
     * @param {?} event
     * @return {?}
     */
    ReorderableDirective.prototype.onClone = /**
     * We want to ensure that the cloned element is identical
     * to the original, regardless of it's location in the DOM tree
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this._elementRef.nativeElement.contains(event.element)) {
            this.setTableCellWidths(event.element, event.clone);
            this.captureCanvases(event.element, event.clone);
            this._renderer.addClass(event.element, 'ux-reorderable-moving');
        }
    };
    /**
     * If elements contain handles then only drag when the handle is dragged
     * otherwise drag whenever an immediate child is specified
     */
    /**
     * If elements contain handles then only drag when the handle is dragged
     * otherwise drag whenever an immediate child is specified
     * @param {?} element
     * @param {?} container
     * @param {?} handle
     * @return {?}
     */
    ReorderableDirective.prototype.canMove = /**
     * If elements contain handles then only drag when the handle is dragged
     * otherwise drag whenever an immediate child is specified
     * @param {?} element
     * @param {?} container
     * @param {?} handle
     * @return {?}
     */
    function (element, container, handle) {
        if (this.reorderingDisabled) {
            return false;
        }
        return this.handles.length === 0 ? true : !!this.handles.find(function (_handle) { return _handle.nativeElement === handle; });
    };
    /**
     * @param {?} source
     * @param {?} target
     * @return {?}
     */
    ReorderableDirective.prototype.setTableCellWidths = /**
     * @param {?} source
     * @param {?} target
     * @return {?}
     */
    function (source, target) {
        // if it is not a table row then skip this
        if (source.tagName !== 'TR') {
            return;
        }
        // find any immediate td children and fix their width
        var /** @type {?} */ sourceCells = /** @type {?} */ (Array.from(source.children));
        var /** @type {?} */ targetCells = /** @type {?} */ (Array.from(target.children));
        // fix the width of these cells
        sourceCells.forEach(function (cell, idx) { return targetCells[idx].style.minWidth = getComputedStyle(cell).getPropertyValue('width'); });
    };
    /**
     * @param {?} source
     * @param {?} target
     * @return {?}
     */
    ReorderableDirective.prototype.captureCanvases = /**
     * @param {?} source
     * @param {?} target
     * @return {?}
     */
    function (source, target) {
        // find all child canvas elements
        var /** @type {?} */ sourceCanvases = Array.from(source.querySelectorAll('canvas'));
        var /** @type {?} */ targetCanvases = Array.from(target.querySelectorAll('canvas'));
        // replicate the canvas content
        targetCanvases.map(function (canvas) { return canvas.getContext('2d'); })
            .forEach(function (context, idx) { return context.drawImage(sourceCanvases[idx], 0, 0); });
    };
    ReorderableDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[uxReorderable]'
                },] },
    ];
    /** @nocollapse */
    ReorderableDirective.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer2, },
        { type: ReorderableService, },
    ]; };
    ReorderableDirective.propDecorators = {
        "reorderableModel": [{ type: Input },],
        "reorderableGroup": [{ type: Input },],
        "reorderingDisabled": [{ type: Input },],
        "reorderableModelChange": [{ type: Output },],
        "reorderStart": [{ type: Output },],
        "reorderCancel": [{ type: Output },],
        "reorderEnd": [{ type: Output },],
        "handles": [{ type: ContentChildren, args: [ReorderableHandleDirective, { read: ElementRef, descendants: true },] },],
        "models": [{ type: ContentChildren, args: [ReorderableModelDirective,] },],
        "dragging": [{ type: HostBinding, args: ['class.ux-reorderable-container-moving',] },],
    };
    return ReorderableDirective;
}());
export { ReorderableDirective };
function ReorderableDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ReorderableDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ReorderableDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    ReorderableDirective.propDecorators;
    /** @type {?} */
    ReorderableDirective.prototype.reorderableModel;
    /** @type {?} */
    ReorderableDirective.prototype.reorderableGroup;
    /** @type {?} */
    ReorderableDirective.prototype.reorderingDisabled;
    /** @type {?} */
    ReorderableDirective.prototype.reorderableModelChange;
    /** @type {?} */
    ReorderableDirective.prototype.reorderStart;
    /** @type {?} */
    ReorderableDirective.prototype.reorderCancel;
    /** @type {?} */
    ReorderableDirective.prototype.reorderEnd;
    /** @type {?} */
    ReorderableDirective.prototype.handles;
    /** @type {?} */
    ReorderableDirective.prototype.models;
    /** @type {?} */
    ReorderableDirective.prototype._container;
    /** @type {?} */
    ReorderableDirective.prototype.dragging;
    /** @type {?} */
    ReorderableDirective.prototype._subscriptions;
    /** @type {?} */
    ReorderableDirective.prototype._elementRef;
    /** @type {?} */
    ReorderableDirective.prototype._renderer;
    /** @type {?} */
    ReorderableDirective.prototype._service;
}
/**
 * @record
 */
export function ReorderEvent() { }
function ReorderEvent_tsickle_Closure_declarations() {
    /** @type {?} */
    ReorderEvent.prototype.element;
    /** @type {?} */
    ReorderEvent.prototype.model;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVvcmRlcmFibGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvcmVvcmRlcmFibGUvcmVvcmRlcmFibGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLGVBQWUsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6SyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzFFLE9BQU8sRUFBNkksa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7SUF3QmxNLDhCQUNZLGFBQ0EsV0FDQTtRQUZBLGdCQUFXLEdBQVgsV0FBVztRQUNYLGNBQVMsR0FBVCxTQUFTO1FBQ1QsYUFBUSxHQUFSLFFBQVE7a0NBbEJtQixLQUFLO3NDQUNULElBQUksWUFBWSxFQUFjOzRCQUN4QyxJQUFJLFlBQVksRUFBZ0I7NkJBQy9CLElBQUksWUFBWSxFQUFnQjswQkFDbkMsSUFBSSxZQUFZLEVBQWdCO3dCQU9VLEtBQUs7OEJBRTdDLElBQUksWUFBWSxFQUFFO0tBTXRDO0lBRUw7O09BRUc7Ozs7O0lBQ0gsdUNBQVE7Ozs7SUFBUjtRQUFBLGlCQW9CQzs7UUFqQkcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDOUQ7UUFFRCxJQUFJLENBQUMsVUFB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TSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7O1FBR3JFLGNBQWMsQ0FBQyxHQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUF2QixDQUF1QixDQUFDO2FBQ2hELE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxHQUFHLElBQUssT0FBQSxPQUFPLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQTVDLENBQTRDLENBQUMsQ0FBQzs7O2dCQWxNcEYsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxpQkFBaUI7aUJBQzlCOzs7O2dCQVJtRCxVQUFVO2dCQUEwRSxTQUFTO2dCQUlHLGtCQUFrQjs7O3FDQU9qSyxLQUFLO3FDQUNMLEtBQUs7dUNBQ0wsS0FBSzsyQ0FDTCxNQUFNO2lDQUNOLE1BQU07a0NBQ04sTUFBTTsrQkFDTixNQUFNOzRCQUVOLGVBQWUsU0FBQywwQkFBMEIsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTsyQkFDbkYsZUFBZSxTQUFDLHlCQUF5Qjs2QkFJekMsV0FBVyxTQUFDLHVDQUF1Qzs7K0JBeEJ4RDs7U0FTYSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb250ZW50Q2hpbGRyZW4sIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZywgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFF1ZXJ5TGlzdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBSZW9yZGVyYWJsZUhhbmRsZURpcmVjdGl2ZSB9IGZyb20gJy4vcmVvcmRlcmFibGUtaGFuZGxlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFJlb3JkZXJhYmxlTW9kZWxEaXJlY3RpdmUgfSBmcm9tICcuL3Jlb3JkZXJhYmxlLW1vZGVsLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFJlb3JkZXJhYmxlQ2FuY2VsRXZlbnQsIFJlb3JkZXJhYmxlQ2xvbmVkRXZlbnQsIFJlb3JkZXJhYmxlQ29udGFpbmVyLCBSZW9yZGVyYWJsZURyYWdFbmRFdmVudCwgUmVvcmRlcmFibGVEcmFnRXZlbnQsIFJlb3JkZXJhYmxlRHJvcEV2ZW50LCBSZW9yZGVyYWJsZVNlcnZpY2UgfSBmcm9tICcuL3Jlb3JkZXJhYmxlLnNlcnZpY2UnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1t1eFJlb3JkZXJhYmxlXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFJlb3JkZXJhYmxlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAgIEBJbnB1dCgpIHJlb3JkZXJhYmxlTW9kZWw6IEFycmF5PGFueT47XHJcbiAgICBASW5wdXQoKSByZW9yZGVyYWJsZUdyb3VwOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSByZW9yZGVyaW5nRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBPdXRwdXQoKSByZW9yZGVyYWJsZU1vZGVsQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxBcnJheTxhbnk+PigpO1xyXG4gICAgQE91dHB1dCgpIHJlb3JkZXJTdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8UmVvcmRlckV2ZW50PigpO1xyXG4gICAgQE91dHB1dCgpIHJlb3JkZXJDYW5jZWwgPSBuZXcgRXZlbnRFbWl0dGVyPFJlb3JkZXJFdmVudD4oKTtcclxuICAgIEBPdXRwdXQoKSByZW9yZGVyRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxSZW9yZGVyRXZlbnQ+KCk7XHJcblxyXG4gICAgQENvbnRlbnRDaGlsZHJlbihSZW9yZGVyYWJsZUhhbmRsZURpcmVjdGl2ZSwgeyByZWFkOiBFbGVtZW50UmVmLCBkZXNjZW5kYW50czogdHJ1ZSB9KSBoYW5kbGVzOiBRdWVyeUxpc3Q8RWxlbWVudFJlZj47XHJcbiAgICBAQ29udGVudENoaWxkcmVuKFJlb3JkZXJhYmxlTW9kZWxEaXJlY3RpdmUpIG1vZGVsczogUXVlcnlMaXN0PFJlb3JkZXJhYmxlTW9kZWxEaXJlY3RpdmU+O1xyXG5cclxuICAgIHByaXZhdGUgX2NvbnRhaW5lcjogUmVvcmRlcmFibGVDb250YWluZXI7XHJcblxyXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy51eC1yZW9yZGVyYWJsZS1jb250YWluZXItbW92aW5nJykgZHJhZ2dpbmcgPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIF9zdWJzY3JpcHRpb25zID0gbmV3IFN1YnNjcmlwdGlvbigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgICAgICBwcml2YXRlIF9zZXJ2aWNlOiBSZW9yZGVyYWJsZVNlcnZpY2VcclxuICAgICkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXNlIGRyYWd1bGEgYW5kIGJpbmQgdG8gYWxsIHRoZSByZXF1aXJlZCBldmVudHNcclxuICAgICAqL1xyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIC8vIElmIG5vIGdyb3VwIG5hbWUgdGhlbiBnZW5lcmF0ZSBhIHVuaXF1ZSBvbmUgZm9yIHRoaXMgaW5zdGFuY2Ugb25seVxyXG4gICAgICAgIGlmICghdGhpcy5yZW9yZGVyYWJsZUdyb3VwKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVvcmRlcmFibGVHcm91cCA9IHRoaXMuX3NlcnZpY2UuZ2V0VW5pcXVlR3JvdXBOYW1lKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9jb250YWluZXIgPSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAgICAgZ2V0TW9kZWxGcm9tRWxlbWVudDogdGhpcy5nZXRNb2RlbEZyb21FbGVtZW50LmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIGNhbk1vdmU6IHRoaXMuY2FuTW92ZS5iaW5kKHRoaXMpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gUmVnaXN0ZXIgZm9yIGRyYWcgZXZlbnRzIG9uIHRoaXMgZWxlbWVudFxyXG4gICAgICAgIGNvbnN0IGdyb3VwID0gdGhpcy5fc2VydmljZS5yZWdpc3Rlcih0aGlzLnJlb3JkZXJhYmxlR3JvdXAsIHRoaXMuX2NvbnRhaW5lcik7XHJcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQoZ3JvdXAuZHJhZy5zdWJzY3JpYmUodGhpcy5vbkRyYWcuYmluZCh0aGlzKSkpO1xyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKGdyb3VwLmRyYWdFbmQuc3Vic2NyaWJlKHRoaXMub25EcmFnRW5kLmJpbmQodGhpcykpKTtcclxuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZChncm91cC5kcm9wLnN1YnNjcmliZSh0aGlzLm9uRHJvcC5iaW5kKHRoaXMpKSk7XHJcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQoZ3JvdXAuY2FuY2VsLnN1YnNjcmliZSgoZXZlbnQ6IFJlb3JkZXJhYmxlQ2FuY2VsRXZlbnQpID0+IHRoaXMucmVvcmRlckNhbmNlbC5lbWl0KHsgZWxlbWVudDogZXZlbnQuZWxlbWVudCwgbW9kZWw6IGV2ZW50Lm1vZGVsIH0pKSk7XHJcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQoZ3JvdXAuY2xvbmVkLnN1YnNjcmliZSh0aGlzLm9uQ2xvbmUuYmluZCh0aGlzKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zZXJ2aWNlLmluaXRpYWxpemUodGhpcy5yZW9yZGVyYWJsZUdyb3VwKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFdlIG5lZWQgdG8gZGVzdHJveSB0aGUgZHJhZ3VsYSBpbnN0YW5jZSBvbiBjb21wb25lbnQgZGVzdHJveVxyXG4gICAgICovXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zZXJ2aWNlLnVucmVnaXN0ZXIodGhpcy5yZW9yZGVyYWJsZUdyb3VwLCB0aGlzLl9jb250YWluZXIpO1xyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRyYWcoZXZlbnQ6IFJlb3JkZXJhYmxlRHJhZ0V2ZW50KTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLnJlb3JkZXJTdGFydC5lbWl0KHsgZWxlbWVudDogZXZlbnQuZWxlbWVudCwgbW9kZWw6IGV2ZW50Lm1vZGVsIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBpcyBmaXJlZCB3aGVuIGl0ZW1zIGdldCByZW9yZGVyZWQgLSB3ZSBuZWVkIHRvIGVtaXQgdGhlIG5ldyBvcmRlciBvZiB0aGUgbW9kZWxzXHJcbiAgICAgKi9cclxuICAgIG9uRHJvcChldmVudDogUmVvcmRlcmFibGVEcm9wRXZlbnQpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgbm8gcHJvdmlkZWQgbW9kdWxlIHdlIGNhbiBza2lwIHRoaXNcclxuICAgICAgICBpZiAoIXRoaXMucmVvcmRlcmFibGVNb2RlbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgY2hhbmdlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoZXZlbnQuc291cmNlLmlzU2FtZU5vZGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSkge1xyXG5cclxuICAgICAgICAgICAgLy8gcmVtb3ZlIHRoaXMgbW9kZWwgZnJvbSB0aGUgbGlzdCBvZiBtb2RlbHNcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnJlb3JkZXJhYmxlTW9kZWwuaW5kZXhPZihldmVudC5tb2RlbCk7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlb3JkZXJhYmxlTW9kZWwuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmlzU2FtZU5vZGUodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSkge1xyXG5cclxuICAgICAgICAgICAgLy8gZ2V0IHRoZSBwb3NpdGlvbiBvZiBzaWJsaW5nIGVsZW1lbnRcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBldmVudC5zaWJsaW5nICYmICFldmVudC5zaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucygnZ3UtbWlycm9yJykgP1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW9yZGVyYWJsZU1vZGVsLmluZGV4T2YodGhpcy5nZXRNb2RlbEZyb21FbGVtZW50KGV2ZW50LnNpYmxpbmcpKSA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlb3JkZXJhYmxlTW9kZWwubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgLy8gaW5zZXJ0IHRoZSBtb2RlbCBhdCBpdHMgbmV3IGxvY2F0aW9uXHJcbiAgICAgICAgICAgIHRoaXMucmVvcmRlcmFibGVNb2RlbC5zcGxpY2UoaW5kZXgsIDAsIGV2ZW50Lm1vZGVsKTtcclxuICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBFbWl0IGV2ZW50IGlmIGFueSBjaGFuZ2VzIHdlcmUgbWFkZVxyXG4gICAgICAgIGlmIChjaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVvcmRlcmFibGVNb2RlbENoYW5nZS5lbWl0KHRoaXMucmVvcmRlcmFibGVNb2RlbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRoZSBtb2RlbCBhc3NjaWF0ZWQgd2l0aCBhIHBhcnRpY3VsYXIgZWxlbWVudCBpbiB0aGUgbGlzdC5cclxuICAgICAqIFRoaXMgc2hvdWxkIGVuc3VyZSB0aGF0IHRoZSBpdGVtcyBoYXZlIHRoZSBkcmFnZ2FibGUgbW9kZWwgZGlyZWN0aXZlIGFwcGxpZWRcclxuICAgICAqL1xyXG4gICAgZ2V0TW9kZWxGcm9tRWxlbWVudChlbGVtZW50OiBFbGVtZW50KTogYW55IHtcclxuXHJcbiAgICAgICAgY29uc3QgbW9kZWwgPSB0aGlzLm1vZGVscy5maW5kKF9tb2RlbCA9PiBfbW9kZWwuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50ID09PSBlbGVtZW50KTtcclxuXHJcbiAgICAgICAgaWYgKCFtb2RlbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBtb2RlbC51eFJlb3JkZXJhYmxlTW9kZWw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGVuIHdlIGZpbmlzaCBkcmFnZ2luZyByZW1vdmUgdGhlIHV0aWxsaXR5IGNsYXNzIGZyb20gdGhlIGVsZW1lbnQgYmVpbmcgbW92ZWRcclxuICAgICAqL1xyXG4gICAgb25EcmFnRW5kKGV2ZW50OiBSZW9yZGVyYWJsZURyYWdFbmRFdmVudCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQuZWxlbWVudCkpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKGV2ZW50LmVsZW1lbnQsICd1eC1yZW9yZGVyYWJsZS1tb3ZpbmcnKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVvcmRlckVuZC5lbWl0KHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGV2ZW50LmVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICBtb2RlbDogZXZlbnQubW9kZWxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2Ugd2FudCB0byBlbnN1cmUgdGhhdCB0aGUgY2xvbmVkIGVsZW1lbnQgaXMgaWRlbnRpY2FsXHJcbiAgICAgKiB0byB0aGUgb3JpZ2luYWwsIHJlZ2FyZGxlc3Mgb2YgaXQncyBsb2NhdGlvbiBpbiB0aGUgRE9NIHRyZWVcclxuICAgICAqL1xyXG4gICAgb25DbG9uZShldmVudDogUmVvcmRlcmFibGVDbG9uZWRFdmVudCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LmVsZW1lbnQpKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldFRhYmxlQ2VsbFdpZHRocyhldmVudC5lbGVtZW50LCBldmVudC5jbG9uZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FwdHVyZUNhbnZhc2VzKGV2ZW50LmVsZW1lbnQsIGV2ZW50LmNsb25lKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKGV2ZW50LmVsZW1lbnQsICd1eC1yZW9yZGVyYWJsZS1tb3ZpbmcnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJZiBlbGVtZW50cyBjb250YWluIGhhbmRsZXMgdGhlbiBvbmx5IGRyYWcgd2hlbiB0aGUgaGFuZGxlIGlzIGRyYWdnZWRcclxuICAgICAqIG90aGVyd2lzZSBkcmFnIHdoZW5ldmVyIGFuIGltbWVkaWF0ZSBjaGlsZCBpcyBzcGVjaWZpZWRcclxuICAgICAqL1xyXG4gICAgY2FuTW92ZShlbGVtZW50OiBFbGVtZW50LCBjb250YWluZXI6IEVsZW1lbnQsIGhhbmRsZTogRWxlbWVudCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLnJlb3JkZXJpbmdEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZXMubGVuZ3RoID09PSAwID8gdHJ1ZSA6ICEhdGhpcy5oYW5kbGVzLmZpbmQoX2hhbmRsZSA9PiBfaGFuZGxlLm5hdGl2ZUVsZW1lbnQgPT09IGhhbmRsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRUYWJsZUNlbGxXaWR0aHMoc291cmNlOiBFbGVtZW50LCB0YXJnZXQ6IEVsZW1lbnQpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gaWYgaXQgaXMgbm90IGEgdGFibGUgcm93IHRoZW4gc2tpcCB0aGlzXHJcbiAgICAgICAgaWYgKHNvdXJjZS50YWdOYW1lICE9PSAnVFInKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGZpbmQgYW55IGltbWVkaWF0ZSB0ZCBjaGlsZHJlbiBhbmQgZml4IHRoZWlyIHdpZHRoXHJcbiAgICAgICAgY29uc3Qgc291cmNlQ2VsbHMgPSBBcnJheS5mcm9tKHNvdXJjZS5jaGlsZHJlbikgYXMgSFRNTFRhYmxlQ2VsbEVsZW1lbnRbXTtcclxuICAgICAgICBjb25zdCB0YXJnZXRDZWxscyA9IEFycmF5LmZyb20odGFyZ2V0LmNoaWxkcmVuKSBhcyBIVE1MVGFibGVDZWxsRWxlbWVudFtdO1xyXG5cclxuICAgICAgICAvLyBmaXggdGhlIHdpZHRoIG9mIHRoZXNlIGNlbGxzXHJcbiAgICAgICAgc291cmNlQ2VsbHMuZm9yRWFjaCgoY2VsbCwgaWR4KSA9PiB0YXJnZXRDZWxsc1tpZHhdLnN0eWxlLm1pbldpZHRoID0gZ2V0Q29tcHV0ZWRTdHlsZShjZWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCd3aWR0aCcpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNhcHR1cmVDYW52YXNlcyhzb3VyY2U6IEVsZW1lbnQsIHRhcmdldDogRWxlbWVudCk6IHZvaWQge1xyXG5cclxuICAgICAgICAvLyBmaW5kIGFsbCBjaGlsZCBjYW52YXMgZWxlbWVudHNcclxuICAgICAgICBjb25zdCBzb3VyY2VDYW52YXNlcyA9IEFycmF5LmZyb20oc291cmNlLnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbnZhcycpKTtcclxuICAgICAgICBjb25zdCB0YXJnZXRDYW52YXNlcyA9IEFycmF5LmZyb20odGFyZ2V0LnF1ZXJ5U2VsZWN0b3JBbGwoJ2NhbnZhcycpKTtcclxuXHJcbiAgICAgICAgLy8gcmVwbGljYXRlIHRoZSBjYW52YXMgY29udGVudFxyXG4gICAgICAgIHRhcmdldENhbnZhc2VzLm1hcChjYW52YXMgPT4gY2FudmFzLmdldENvbnRleHQoJzJkJykpXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKChjb250ZXh0LCBpZHgpID0+IGNvbnRleHQuZHJhd0ltYWdlKHNvdXJjZUNhbnZhc2VzW2lkeF0sIDAsIDApKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJlb3JkZXJFdmVudCB7XHJcbiAgICBlbGVtZW50OiBFbGVtZW50O1xyXG4gICAgbW9kZWw6IGFueTtcclxufVxyXG4iXX0=