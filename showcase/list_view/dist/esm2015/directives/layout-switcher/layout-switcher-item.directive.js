/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
export class LayoutSwitcherItemDirective {
    /**
     * @param {?} _templateRef
     * @param {?} _viewContainerRef
     */
    constructor(_templateRef, _viewContainerRef) {
        this._templateRef = _templateRef;
        this._viewContainerRef = _viewContainerRef;
    }
    /**
     * @return {?}
     */
    getLayout() {
        return this._templateRef;
    }
    /**
     * @return {?}
     */
    getConfig() {
        return this._config;
    }
    /**
     * @return {?}
     */
    activate() {
        this._embeddedView = this._viewContainerRef.createEmbeddedView(this._templateRef);
    }
    /**
     * @return {?}
     */
    deactivate() {
        let /** @type {?} */ index = this._viewContainerRef.indexOf(this._embeddedView);
        this._viewContainerRef.remove(index);
        this._embeddedView = null;
    }
}
LayoutSwitcherItemDirective.decorators = [
    { type: Directive, args: [{
                selector: '[uxLayoutSwitcherItem]'
            },] },
];
/** @nocollapse */
LayoutSwitcherItemDirective.ctorParameters = () => [
    { type: TemplateRef, },
    { type: ViewContainerRef, },
];
LayoutSwitcherItemDirective.propDecorators = {
    "_config": [{ type: Input, args: ['uxLayoutSwitcherItem',] },],
};
function LayoutSwitcherItemDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LayoutSwitcherItemDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LayoutSwitcherItemDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    LayoutSwitcherItemDirective.propDecorators;
    /** @type {?} */
    LayoutSwitcherItemDirective.prototype._config;
    /** @type {?} */
    LayoutSwitcherItemDirective.prototype._embeddedView;
    /** @type {?} */
    LayoutSwitcherItemDirective.prototype._templateRef;
    /** @type {?} */
    LayoutSwitcherItemDirective.prototype._viewContainerRef;
}
/**
 * @record
 */
export function LayoutSwitcherItem() { }
function LayoutSwitcherItem_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    LayoutSwitcherItem.prototype.group;
    /** @type {?|undefined} */
    LayoutSwitcherItem.prototype.minWidth;
    /** @type {?|undefined} */
    LayoutSwitcherItem.prototype.maxWidth;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LXN3aXRjaGVyLWl0ZW0uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvbGF5b3V0LXN3aXRjaGVyL2xheW91dC1zd2l0Y2hlci1pdGVtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBbUIsS0FBSyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUtqRyxNQUFNOzs7OztJQU1GLFlBQW9CLFlBQThCLEVBQVUsaUJBQW1DO1FBQTNFLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7S0FBSzs7OztJQUVwRyxTQUFTO1FBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7S0FDNUI7Ozs7SUFFRCxTQUFTO1FBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDdkI7Ozs7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQ3JGOzs7O0lBRUQsVUFBVTtRQUNOLHFCQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO0tBQzdCOzs7WUEzQkosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSx3QkFBd0I7YUFDckM7Ozs7WUFKMkMsV0FBVztZQUFFLGdCQUFnQjs7O3dCQU9wRSxLQUFLLFNBQUMsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbWJlZGRlZFZpZXdSZWYsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1t1eExheW91dFN3aXRjaGVySXRlbV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXRTd2l0Y2hlckl0ZW1EaXJlY3RpdmUge1xyXG5cclxuICAgIEBJbnB1dCgndXhMYXlvdXRTd2l0Y2hlckl0ZW0nKSBwcml2YXRlIF9jb25maWc6IExheW91dFN3aXRjaGVySXRlbTtcclxuXHJcbiAgICBwcml2YXRlIF9lbWJlZGRlZFZpZXc6IEVtYmVkZGVkVmlld1JlZjxhbnk+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3RlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LCBwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7IH1cclxuXHJcbiAgICBnZXRMYXlvdXQoKTogVGVtcGxhdGVSZWY8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlUmVmO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvbmZpZygpOiBMYXlvdXRTd2l0Y2hlckl0ZW0ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb25maWc7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fZW1iZWRkZWRWaWV3ID0gdGhpcy5fdmlld0NvbnRhaW5lclJlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy5fdGVtcGxhdGVSZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlYWN0aXZhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5fdmlld0NvbnRhaW5lclJlZi5pbmRleE9mKHRoaXMuX2VtYmVkZGVkVmlldyk7XHJcbiAgICAgICAgdGhpcy5fdmlld0NvbnRhaW5lclJlZi5yZW1vdmUoaW5kZXgpO1xyXG4gICAgICAgIHRoaXMuX2VtYmVkZGVkVmlldyA9IG51bGw7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExheW91dFN3aXRjaGVySXRlbSB7XHJcbiAgICBncm91cD86IHN0cmluZztcclxuICAgIG1pbldpZHRoPzogbnVtYmVyO1xyXG4gICAgbWF4V2lkdGg/OiBudW1iZXI7XHJcbn0iXX0=