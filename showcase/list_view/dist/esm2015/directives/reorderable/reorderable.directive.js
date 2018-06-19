/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ContentChildren, Directive, ElementRef, EventEmitter, HostBinding, Input, Output, QueryList, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReorderableHandleDirective } from './reorderable-handle.directive';
import { ReorderableModelDirective } from './reorderable-model.directive';
import { ReorderableService } from './reorderable.service';
export class ReorderableDirective {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} _service
     */
    constructor(_elementRef, _renderer, _service) {
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
     * @return {?}
     */
    ngOnInit() {
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
        const /** @type {?} */ group = this._service.register(this.reorderableGroup, this._container);
        this._subscriptions.add(group.drag.subscribe(this.onDrag.bind(this)));
        this._subscriptions.add(group.dragEnd.subscribe(this.onDragEnd.bind(this)));
        this._subscriptions.add(group.drop.subscribe(this.onDrop.bind(this)));
        this._subscriptions.add(group.cancel.subscribe((event) => this.reorderCancel.emit({ element: event.element, model: event.model })));
        this._subscriptions.add(group.cloned.subscribe(this.onClone.bind(this)));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._service.initialize(this.reorderableGroup);
    }
    /**
     * We need to destroy the dragula instance on component destroy
     * @return {?}
     */
    ngOnDestroy() {
        this._service.unregister(this.reorderableGroup, this._container);
        this._subscriptions.unsubscribe();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDrag(event) {
        this.dragging = true;
        this.reorderStart.emit({ element: event.element, model: event.model });
    }
    /**
     * This is fired when items get reordered - we need to emit the new order of the models
     * @param {?} event
     * @return {?}
     */
    onDrop(event) {
        // if there is no provided module we can skip this
        if (!this.reorderableModel) {
            return;
        }
        let /** @type {?} */ changed = false;
        if (event.source.isSameNode(this._elementRef.nativeElement)) {
            // remove this model from the list of models
            const /** @type {?} */ index = this.reorderableModel.indexOf(event.model);
            if (index >= 0) {
                this.reorderableModel.splice(index, 1);
                changed = true;
            }
        }
        if (event.target.isSameNode(this._elementRef.nativeElement)) {
            // get the position of sibling element
            const /** @type {?} */ index = event.sibling && !event.sibling.classList.contains('gu-mirror') ?
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
    }
    /**
     * Return the model assciated with a particular element in the list.
     * This should ensure that the items have the draggable model directive applied
     * @param {?} element
     * @return {?}
     */
    getModelFromElement(element) {
        const /** @type {?} */ model = this.models.find(_model => _model.elementRef.nativeElement === element);
        if (!model) {
            return null;
        }
        return model.uxReorderableModel;
    }
    /**
     * When we finish dragging remove the utillity class from the element being moved
     * @param {?} event
     * @return {?}
     */
    onDragEnd(event) {
        this.dragging = false;
        if (this._elementRef.nativeElement.contains(event.element)) {
            this._renderer.removeClass(event.element, 'ux-reorderable-moving');
            this.reorderEnd.emit({
                element: event.element,
                model: event.model
            });
        }
    }
    /**
     * We want to ensure that the cloned element is identical
     * to the original, regardless of it's location in the DOM tree
     * @param {?} event
     * @return {?}
     */
    onClone(event) {
        if (this._elementRef.nativeElement.contains(event.element)) {
            this.setTableCellWidths(event.element, event.clone);
            this.captureCanvases(event.element, event.clone);
            this._renderer.addClass(event.element, 'ux-reorderable-moving');
        }
    }
    /**
     * If elements contain handles then only drag when the handle is dragged
     * otherwise drag whenever an immediate child is specified
     * @param {?} element
     * @param {?} container
     * @param {?} handle
     * @return {?}
     */
    canMove(element, container, handle) {
        if (this.reorderingDisabled) {
            return false;
        }
        return this.handles.length === 0 ? true : !!this.handles.find(_handle => _handle.nativeElement === handle);
    }
    /**
     * @param {?} source
     * @param {?} target
     * @return {?}
     */
    setTableCellWidths(source, target) {
        // if it is not a table row then skip this
        if (source.tagName !== 'TR') {
            return;
        }
        // find any immediate td children and fix their width
        const /** @type {?} */ sourceCells = /** @type {?} */ (Array.from(source.children));
        const /** @type {?} */ targetCells = /** @type {?} */ (Array.from(target.children));
        // fix the width of these cells
        sourceCells.forEach((cell, idx) => targetCells[idx].style.minWidth = getComputedStyle(cell).getPropertyValue('width'));
    }
    /**
     * @param {?} source
     * @param {?} target
     * @return {?}
     */
    captureCanvases(source, target) {
        // find all child canvas elements
        const /** @type {?} */ sourceCanvases = Array.from(source.querySelectorAll('canvas'));
        const /** @type {?} */ targetCanvases = Array.from(target.querySelectorAll('canvas'));
        // replicate the canvas content
        targetCanvases.map(canvas => canvas.getContext('2d'))
            .forEach((context, idx) => context.drawImage(sourceCanvases[idx], 0, 0));
    }
}
ReorderableDirective.decorators = [
    { type: Directive, args: [{
                selector: '[uxReorderable]'
            },] },
];
/** @nocollapse */
ReorderableDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ReorderableService, },
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVvcmRlcmFibGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvcmVvcmRlcmFibGUvcmVvcmRlcmFibGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLGVBQWUsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6SyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzFFLE9BQU8sRUFBNkksa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUt0TSxNQUFNOzs7Ozs7SUFtQkYsWUFDWSxhQUNBLFdBQ0E7UUFGQSxnQkFBVyxHQUFYLFdBQVc7UUFDWCxjQUFTLEdBQVQsU0FBUztRQUNULGFBQVEsR0FBUixRQUFRO2tDQWxCbUIsS0FBSztzQ0FDVCxJQUFJLFlBQVksRUFBYzs0QkFDeEMsSUFBSSxZQUFZLEVBQWdCOzZCQUMvQixJQUFJLFlBQVksRUFBZ0I7MEJBQ25DLElBQUksWUFBWSxFQUFnQjt3QkFPVSxLQUFLOzhCQUU3QyxJQUFJLFlBQVksRUFBRTtLQU10Qzs7Ozs7SUFLTCxRQUFROztRQUdKLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzlEO1FBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRztZQUNkLE9BQU8sRUFB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QUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7OztZQWxNcEYsU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxpQkFBaUI7YUFDOUI7Ozs7WUFSbUQsVUFBVTtZQUEwRSxTQUFTO1lBSUcsa0JBQWtCOzs7aUNBT2pLLEtBQUs7aUNBQ0wsS0FBSzttQ0FDTCxLQUFLO3VDQUNMLE1BQU07NkJBQ04sTUFBTTs4QkFDTixNQUFNOzJCQUNOLE1BQU07d0JBRU4sZUFBZSxTQUFDLDBCQUEwQixFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFO3VCQUNuRixlQUFlLFNBQUMseUJBQXlCO3lCQUl6QyxXQUFXLFNBQUMsdUNBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29udGVudENoaWxkcmVuLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBRdWVyeUxpc3QsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgUmVvcmRlcmFibGVIYW5kbGVEaXJlY3RpdmUgfSBmcm9tICcuL3Jlb3JkZXJhYmxlLWhhbmRsZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBSZW9yZGVyYWJsZU1vZGVsRGlyZWN0aXZlIH0gZnJvbSAnLi9yZW9yZGVyYWJsZS1tb2RlbC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBSZW9yZGVyYWJsZUNhbmNlbEV2ZW50LCBSZW9yZGVyYWJsZUNsb25lZEV2ZW50LCBSZW9yZGVyYWJsZUNvbnRhaW5lciwgUmVvcmRlcmFibGVEcmFnRW5kRXZlbnQsIFJlb3JkZXJhYmxlRHJhZ0V2ZW50LCBSZW9yZGVyYWJsZURyb3BFdmVudCwgUmVvcmRlcmFibGVTZXJ2aWNlIH0gZnJvbSAnLi9yZW9yZGVyYWJsZS5zZXJ2aWNlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbdXhSZW9yZGVyYWJsZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZW9yZGVyYWJsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgICBASW5wdXQoKSByZW9yZGVyYWJsZU1vZGVsOiBBcnJheTxhbnk+O1xyXG4gICAgQElucHV0KCkgcmVvcmRlcmFibGVHcm91cDogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgcmVvcmRlcmluZ0Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAT3V0cHV0KCkgcmVvcmRlcmFibGVNb2RlbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8QXJyYXk8YW55Pj4oKTtcclxuICAgIEBPdXRwdXQoKSByZW9yZGVyU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPFJlb3JkZXJFdmVudD4oKTtcclxuICAgIEBPdXRwdXQoKSByZW9yZGVyQ2FuY2VsID0gbmV3IEV2ZW50RW1pdHRlcjxSZW9yZGVyRXZlbnQ+KCk7XHJcbiAgICBAT3V0cHV0KCkgcmVvcmRlckVuZCA9IG5ldyBFdmVudEVtaXR0ZXI8UmVvcmRlckV2ZW50PigpO1xyXG5cclxuICAgIEBDb250ZW50Q2hpbGRyZW4oUmVvcmRlcmFibGVIYW5kbGVEaXJlY3RpdmUsIHsgcmVhZDogRWxlbWVudFJlZiwgZGVzY2VuZGFudHM6IHRydWUgfSkgaGFuZGxlczogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xyXG4gICAgQENvbnRlbnRDaGlsZHJlbihSZW9yZGVyYWJsZU1vZGVsRGlyZWN0aXZlKSBtb2RlbHM6IFF1ZXJ5TGlzdDxSZW9yZGVyYWJsZU1vZGVsRGlyZWN0aXZlPjtcclxuXHJcbiAgICBwcml2YXRlIF9jb250YWluZXI6IFJlb3JkZXJhYmxlQ29udGFpbmVyO1xyXG5cclxuICAgIEBIb3N0QmluZGluZygnY2xhc3MudXgtcmVvcmRlcmFibGUtY29udGFpbmVyLW1vdmluZycpIGRyYWdnaW5nID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9ucyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICAgICAgcHJpdmF0ZSBfc2VydmljZTogUmVvcmRlcmFibGVTZXJ2aWNlXHJcbiAgICApIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGlzZSBkcmFndWxhIGFuZCBiaW5kIHRvIGFsbCB0aGUgcmVxdWlyZWQgZXZlbnRzXHJcbiAgICAgKi9cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgICAgICAvLyBJZiBubyBncm91cCBuYW1lIHRoZW4gZ2VuZXJhdGUgYSB1bmlxdWUgb25lIGZvciB0aGlzIGluc3RhbmNlIG9ubHlcclxuICAgICAgICBpZiAoIXRoaXMucmVvcmRlcmFibGVHcm91cCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlb3JkZXJhYmxlR3JvdXAgPSB0aGlzLl9zZXJ2aWNlLmdldFVuaXF1ZUdyb3VwTmFtZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fY29udGFpbmVyID0ge1xyXG4gICAgICAgICAgICBlbGVtZW50OiB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgICAgIGdldE1vZGVsRnJvbUVsZW1lbnQ6IHRoaXMuZ2V0TW9kZWxGcm9tRWxlbWVudC5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICBjYW5Nb3ZlOiB0aGlzLmNhbk1vdmUuYmluZCh0aGlzKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIFJlZ2lzdGVyIGZvciBkcmFnIGV2ZW50cyBvbiB0aGlzIGVsZW1lbnRcclxuICAgICAgICBjb25zdCBncm91cCA9IHRoaXMuX3NlcnZpY2UucmVnaXN0ZXIodGhpcy5yZW9yZGVyYWJsZUdyb3VwLCB0aGlzLl9jb250YWluZXIpO1xyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKGdyb3VwLmRyYWcuc3Vic2NyaWJlKHRoaXMub25EcmFnLmJpbmQodGhpcykpKTtcclxuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZChncm91cC5kcmFnRW5kLnN1YnNjcmliZSh0aGlzLm9uRHJhZ0VuZC5iaW5kKHRoaXMpKSk7XHJcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5hZGQoZ3JvdXAuZHJvcC5zdWJzY3JpYmUodGhpcy5vbkRyb3AuYmluZCh0aGlzKSkpO1xyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKGdyb3VwLmNhbmNlbC5zdWJzY3JpYmUoKGV2ZW50OiBSZW9yZGVyYWJsZUNhbmNlbEV2ZW50KSA9PiB0aGlzLnJlb3JkZXJDYW5jZWwuZW1pdCh7IGVsZW1lbnQ6IGV2ZW50LmVsZW1lbnQsIG1vZGVsOiBldmVudC5tb2RlbCB9KSkpO1xyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKGdyb3VwLmNsb25lZC5zdWJzY3JpYmUodGhpcy5vbkNsb25lLmJpbmQodGhpcykpKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fc2VydmljZS5pbml0aWFsaXplKHRoaXMucmVvcmRlcmFibGVHcm91cCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXZSBuZWVkIHRvIGRlc3Ryb3kgdGhlIGRyYWd1bGEgaW5zdGFuY2Ugb24gY29tcG9uZW50IGRlc3Ryb3lcclxuICAgICAqL1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fc2VydmljZS51bnJlZ2lzdGVyKHRoaXMucmVvcmRlcmFibGVHcm91cCwgdGhpcy5fY29udGFpbmVyKTtcclxuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EcmFnKGV2ZW50OiBSZW9yZGVyYWJsZURyYWdFdmVudCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5yZW9yZGVyU3RhcnQuZW1pdCh7IGVsZW1lbnQ6IGV2ZW50LmVsZW1lbnQsIG1vZGVsOiBldmVudC5tb2RlbCB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoaXMgaXMgZmlyZWQgd2hlbiBpdGVtcyBnZXQgcmVvcmRlcmVkIC0gd2UgbmVlZCB0byBlbWl0IHRoZSBuZXcgb3JkZXIgb2YgdGhlIG1vZGVsc1xyXG4gICAgICovXHJcbiAgICBvbkRyb3AoZXZlbnQ6IFJlb3JkZXJhYmxlRHJvcEV2ZW50KTogdm9pZCB7XHJcblxyXG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIG5vIHByb3ZpZGVkIG1vZHVsZSB3ZSBjYW4gc2tpcCB0aGlzXHJcbiAgICAgICAgaWYgKCF0aGlzLnJlb3JkZXJhYmxlTW9kZWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGNoYW5nZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKGV2ZW50LnNvdXJjZS5pc1NhbWVOb2RlKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIHJlbW92ZSB0aGlzIG1vZGVsIGZyb20gdGhlIGxpc3Qgb2YgbW9kZWxzXHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5yZW9yZGVyYWJsZU1vZGVsLmluZGV4T2YoZXZlbnQubW9kZWwpO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW9yZGVyYWJsZU1vZGVsLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5pc1NhbWVOb2RlKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIGdldCB0aGUgcG9zaXRpb24gb2Ygc2libGluZyBlbGVtZW50XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gZXZlbnQuc2libGluZyAmJiAhZXZlbnQuc2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoJ2d1LW1pcnJvcicpID9cclxuICAgICAgICAgICAgICAgIHRoaXMucmVvcmRlcmFibGVNb2RlbC5pbmRleE9mKHRoaXMuZ2V0TW9kZWxGcm9tRWxlbWVudChldmVudC5zaWJsaW5nKSkgOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW9yZGVyYWJsZU1vZGVsLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIC8vIGluc2VydCB0aGUgbW9kZWwgYXQgaXRzIG5ldyBsb2NhdGlvblxyXG4gICAgICAgICAgICB0aGlzLnJlb3JkZXJhYmxlTW9kZWwuc3BsaWNlKGluZGV4LCAwLCBldmVudC5tb2RlbCk7XHJcbiAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRW1pdCBldmVudCBpZiBhbnkgY2hhbmdlcyB3ZXJlIG1hZGVcclxuICAgICAgICBpZiAoY2hhbmdlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlb3JkZXJhYmxlTW9kZWxDaGFuZ2UuZW1pdCh0aGlzLnJlb3JkZXJhYmxlTW9kZWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybiB0aGUgbW9kZWwgYXNzY2lhdGVkIHdpdGggYSBwYXJ0aWN1bGFyIGVsZW1lbnQgaW4gdGhlIGxpc3QuXHJcbiAgICAgKiBUaGlzIHNob3VsZCBlbnN1cmUgdGhhdCB0aGUgaXRlbXMgaGF2ZSB0aGUgZHJhZ2dhYmxlIG1vZGVsIGRpcmVjdGl2ZSBhcHBsaWVkXHJcbiAgICAgKi9cclxuICAgIGdldE1vZGVsRnJvbUVsZW1lbnQoZWxlbWVudDogRWxlbWVudCk6IGFueSB7XHJcblxyXG4gICAgICAgIGNvbnN0IG1vZGVsID0gdGhpcy5tb2RlbHMuZmluZChfbW9kZWwgPT4gX21vZGVsLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCA9PT0gZWxlbWVudCk7XHJcblxyXG4gICAgICAgIGlmICghbW9kZWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbW9kZWwudXhSZW9yZGVyYWJsZU1vZGVsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2hlbiB3ZSBmaW5pc2ggZHJhZ2dpbmcgcmVtb3ZlIHRoZSB1dGlsbGl0eSBjbGFzcyBmcm9tIHRoZSBlbGVtZW50IGJlaW5nIG1vdmVkXHJcbiAgICAgKi9cclxuICAgIG9uRHJhZ0VuZChldmVudDogUmVvcmRlcmFibGVEcmFnRW5kRXZlbnQpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LmVsZW1lbnQpKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyhldmVudC5lbGVtZW50LCAndXgtcmVvcmRlcmFibGUtbW92aW5nJyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJlb3JkZXJFbmQuZW1pdCh7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBldmVudC5lbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgbW9kZWw6IGV2ZW50Lm1vZGVsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFdlIHdhbnQgdG8gZW5zdXJlIHRoYXQgdGhlIGNsb25lZCBlbGVtZW50IGlzIGlkZW50aWNhbFxyXG4gICAgICogdG8gdGhlIG9yaWdpbmFsLCByZWdhcmRsZXNzIG9mIGl0J3MgbG9jYXRpb24gaW4gdGhlIERPTSB0cmVlXHJcbiAgICAgKi9cclxuICAgIG9uQ2xvbmUoZXZlbnQ6IFJlb3JkZXJhYmxlQ2xvbmVkRXZlbnQpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC5lbGVtZW50KSkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRUYWJsZUNlbGxXaWR0aHMoZXZlbnQuZWxlbWVudCwgZXZlbnQuY2xvbmUpO1xyXG4gICAgICAgICAgICB0aGlzLmNhcHR1cmVDYW52YXNlcyhldmVudC5lbGVtZW50LCBldmVudC5jbG9uZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhldmVudC5lbGVtZW50LCAndXgtcmVvcmRlcmFibGUtbW92aW5nJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSWYgZWxlbWVudHMgY29udGFpbiBoYW5kbGVzIHRoZW4gb25seSBkcmFnIHdoZW4gdGhlIGhhbmRsZSBpcyBkcmFnZ2VkXHJcbiAgICAgKiBvdGhlcndpc2UgZHJhZyB3aGVuZXZlciBhbiBpbW1lZGlhdGUgY2hpbGQgaXMgc3BlY2lmaWVkXHJcbiAgICAgKi9cclxuICAgIGNhbk1vdmUoZWxlbWVudDogRWxlbWVudCwgY29udGFpbmVyOiBFbGVtZW50LCBoYW5kbGU6IEVsZW1lbnQpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5yZW9yZGVyaW5nRGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVzLmxlbmd0aCA9PT0gMCA/IHRydWUgOiAhIXRoaXMuaGFuZGxlcy5maW5kKF9oYW5kbGUgPT4gX2hhbmRsZS5uYXRpdmVFbGVtZW50ID09PSBoYW5kbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0VGFibGVDZWxsV2lkdGhzKHNvdXJjZTogRWxlbWVudCwgdGFyZ2V0OiBFbGVtZW50KTogdm9pZCB7XHJcblxyXG4gICAgICAgIC8vIGlmIGl0IGlzIG5vdCBhIHRhYmxlIHJvdyB0aGVuIHNraXAgdGhpc1xyXG4gICAgICAgIGlmIChzb3VyY2UudGFnTmFtZSAhPT0gJ1RSJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBmaW5kIGFueSBpbW1lZGlhdGUgdGQgY2hpbGRyZW4gYW5kIGZpeCB0aGVpciB3aWR0aFxyXG4gICAgICAgIGNvbnN0IHNvdXJjZUNlbGxzID0gQXJyYXkuZnJvbShzb3VyY2UuY2hpbGRyZW4pIGFzIEhUTUxUYWJsZUNlbGxFbGVtZW50W107XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0Q2VsbHMgPSBBcnJheS5mcm9tKHRhcmdldC5jaGlsZHJlbikgYXMgSFRNTFRhYmxlQ2VsbEVsZW1lbnRbXTtcclxuXHJcbiAgICAgICAgLy8gZml4IHRoZSB3aWR0aCBvZiB0aGVzZSBjZWxsc1xyXG4gICAgICAgIHNvdXJjZUNlbGxzLmZvckVhY2goKGNlbGwsIGlkeCkgPT4gdGFyZ2V0Q2VsbHNbaWR4XS5zdHlsZS5taW5XaWR0aCA9IGdldENvbXB1dGVkU3R5bGUoY2VsbCkuZ2V0UHJvcGVydHlWYWx1ZSgnd2lkdGgnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYXB0dXJlQ2FudmFzZXMoc291cmNlOiBFbGVtZW50LCB0YXJnZXQ6IEVsZW1lbnQpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gZmluZCBhbGwgY2hpbGQgY2FudmFzIGVsZW1lbnRzXHJcbiAgICAgICAgY29uc3Qgc291cmNlQ2FudmFzZXMgPSBBcnJheS5mcm9tKHNvdXJjZS5xdWVyeVNlbGVjdG9yQWxsKCdjYW52YXMnKSk7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0Q2FudmFzZXMgPSBBcnJheS5mcm9tKHRhcmdldC5xdWVyeVNlbGVjdG9yQWxsKCdjYW52YXMnKSk7XHJcblxyXG4gICAgICAgIC8vIHJlcGxpY2F0ZSB0aGUgY2FudmFzIGNvbnRlbnRcclxuICAgICAgICB0YXJnZXRDYW52YXNlcy5tYXAoY2FudmFzID0+IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpKVxyXG4gICAgICAgICAgICAuZm9yRWFjaCgoY29udGV4dCwgaWR4KSA9PiBjb250ZXh0LmRyYXdJbWFnZShzb3VyY2VDYW52YXNlc1tpZHhdLCAwLCAwKSk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZW9yZGVyRXZlbnQge1xyXG4gICAgZWxlbWVudDogRWxlbWVudDtcclxuICAgIG1vZGVsOiBhbnk7XHJcbn1cclxuIl19