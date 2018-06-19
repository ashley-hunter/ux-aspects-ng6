/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export class HoverActionService {
    constructor() {
        this.active = new BehaviorSubject(false);
        this._focused = false;
        this._hovered = false;
        this._actions = [];
    }
    /**
     * @param {?} action
     * @return {?}
     */
    register(action) {
        this._actions.push(action);
    }
    /**
     * @param {?} action
     * @return {?}
     */
    unregister(action) {
        this._actions = this._actions.filter(actn => actn !== action);
    }
    /**
     * @param {?} container
     * @return {?}
     */
    setContainer(container) {
        this._container = container;
    }
    /**
     * @param {?} focus
     * @return {?}
     */
    setFocusState(focus) {
        this._focused = focus;
        this.updateVisibility();
    }
    /**
     * @param {?} hover
     * @return {?}
     */
    setHoverState(hover) {
        this._hovered = hover;
        this.updateVisibility();
    }
    /**
     * @return {?}
     */
    next() {
        // if container has focus then focus the first hover action
        if (this.containerHasFocus()) {
            this.focusActionAtIndex(0);
            return this.updateVisibility();
        }
        // if a hover action has focus then focus the next action
        if (this.actionHasFocus()) {
            let /** @type {?} */ index = this.getFocusedActionIndex() + 1;
            this.focusActionAtIndex(index);
            this.updateVisibility();
        }
    }
    /**
     * @return {?}
     */
    previous() {
        // if a hover action has focus then focus the previous action
        if (this.actionHasFocus()) {
            let /** @type {?} */ index = this.getFocusedActionIndex() - 1;
            if (index >= 0) {
                this.focusActionAtIndex(index);
            }
            else {
                this._container.focus();
            }
        }
        this.updateVisibility();
    }
    /**
     * @return {?}
     */
    updateVisibility() {
        this.active.next(this._focused || this._hovered || this.actionHasFocus());
    }
    /**
     * @param {?} index
     * @return {?}
     */
    focusActionAtIndex(index) {
        if (index >= 0 && index < this._actions.length) {
            this._actions[index].focus();
        }
    }
    /**
     * @return {?}
     */
    getFocusedActionIndex() {
        return this._actions.findIndex(action => action === this.getFocusedAction());
    }
    /**
     * @return {?}
     */
    containerHasFocus() {
        return this._focused;
    }
    /**
     * @return {?}
     */
    actionHasFocus() {
        return !!this.getFocusedAction();
    }
    /**
     * @return {?}
     */
    getFocusedAction() {
        return this._actions.find(action => action.focused);
    }
}
HoverActionService.decorators = [
    { type: Injectable },
];
function HoverActionService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    HoverActionService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    HoverActionService.ctorParameters;
    /** @type {?} */
    HoverActionService.prototype.active;
    /** @type {?} */
    HoverActionService.prototype._container;
    /** @type {?} */
    HoverActionService.prototype._focused;
    /** @type {?} */
    HoverActionService.prototype._hovered;
    /** @type {?} */
    HoverActionService.prototype._actions;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG92ZXItYWN0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlcy9ob3Zlci1hY3Rpb24vaG92ZXItYWN0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUt2QyxNQUFNOztzQkFFaUMsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDO3dCQUcxQyxLQUFLO3dCQUNMLEtBQUs7d0JBQ1UsRUFBRTs7Ozs7O0lBRTdDLFFBQVEsQ0FBQyxNQUE0QjtRQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUM5Qjs7Ozs7SUFFRCxVQUFVLENBQUMsTUFBNEI7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsQ0FBQztLQUNqRTs7Ozs7SUFFRCxZQUFZLENBQUMsU0FBd0M7UUFDakQsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7S0FDL0I7Ozs7O0lBRUQsYUFBYSxDQUFDLEtBQWM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7S0FDM0I7Ozs7O0lBRUQsYUFBYSxDQUFDLEtBQWM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7S0FDM0I7Ozs7SUFFRCxJQUFJOztRQUdBLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ2xDOztRQUdELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDeEIscUJBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDM0I7S0FDSjs7OztJQUVELFFBQVE7O1FBRUosRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN4QixxQkFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBRTdDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNiLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNsQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDM0I7U0FDSjtRQUVELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0tBQzNCOzs7O0lBRUQsZ0JBQWdCO1FBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0tBQzdFOzs7OztJQUVPLGtCQUFrQixDQUFDLEtBQWE7UUFDcEMsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDaEM7Ozs7O0lBR0cscUJBQXFCO1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDOzs7OztJQUd6RSxpQkFBaUI7UUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7Ozs7O0lBR2pCLGNBQWM7UUFDbEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzs7Ozs7SUFHN0IsZ0JBQWdCO1FBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzs7OztZQXRGM0QsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEhvdmVyQWN0aW9uQ29udGFpbmVyRGlyZWN0aXZlIH0gZnJvbSAnLi9ob3Zlci1hY3Rpb24tY29udGFpbmVyLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEhvdmVyQWN0aW9uRGlyZWN0aXZlIH0gZnJvbSAnLi9ob3Zlci1hY3Rpb24uZGlyZWN0aXZlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhvdmVyQWN0aW9uU2VydmljZSB7XHJcblxyXG4gICAgYWN0aXZlOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgICBwcml2YXRlIF9jb250YWluZXI6IEhvdmVyQWN0aW9uQ29udGFpbmVyRGlyZWN0aXZlO1xyXG4gICAgcHJpdmF0ZSBfZm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfaG92ZXJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfYWN0aW9uczogSG92ZXJBY3Rpb25EaXJlY3RpdmVbXSA9IFtdO1xyXG5cclxuICAgIHJlZ2lzdGVyKGFjdGlvbjogSG92ZXJBY3Rpb25EaXJlY3RpdmUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9hY3Rpb25zLnB1c2goYWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICB1bnJlZ2lzdGVyKGFjdGlvbjogSG92ZXJBY3Rpb25EaXJlY3RpdmUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9hY3Rpb25zID0gdGhpcy5fYWN0aW9ucy5maWx0ZXIoYWN0biA9PiBhY3RuICE9PSBhY3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENvbnRhaW5lcihjb250YWluZXI6IEhvdmVyQWN0aW9uQ29udGFpbmVyRGlyZWN0aXZlKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY29udGFpbmVyID0gY29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEZvY3VzU3RhdGUoZm9jdXM6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9mb2N1c2VkID0gZm9jdXM7XHJcbiAgICAgICAgdGhpcy51cGRhdGVWaXNpYmlsaXR5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SG92ZXJTdGF0ZShob3ZlcjogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2hvdmVyZWQgPSBob3ZlcjtcclxuICAgICAgICB0aGlzLnVwZGF0ZVZpc2liaWxpdHkoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZXh0KCk6IHZvaWQge1xyXG5cclxuICAgICAgICAvLyBpZiBjb250YWluZXIgaGFzIGZvY3VzIHRoZW4gZm9jdXMgdGhlIGZpcnN0IGhvdmVyIGFjdGlvblxyXG4gICAgICAgIGlmICh0aGlzLmNvbnRhaW5lckhhc0ZvY3VzKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5mb2N1c0FjdGlvbkF0SW5kZXgoMCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZVZpc2liaWxpdHkoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlmIGEgaG92ZXIgYWN0aW9uIGhhcyBmb2N1cyB0aGVuIGZvY3VzIHRoZSBuZXh0IGFjdGlvblxyXG4gICAgICAgIGlmICh0aGlzLmFjdGlvbkhhc0ZvY3VzKCkpIHtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5nZXRGb2N1c2VkQWN0aW9uSW5kZXgoKSArIDE7XHJcbiAgICAgICAgICAgIHRoaXMuZm9jdXNBY3Rpb25BdEluZGV4KGluZGV4KTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVWaXNpYmlsaXR5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByZXZpb3VzKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGlmIGEgaG92ZXIgYWN0aW9uIGhhcyBmb2N1cyB0aGVuIGZvY3VzIHRoZSBwcmV2aW91cyBhY3Rpb25cclxuICAgICAgICBpZiAodGhpcy5hY3Rpb25IYXNGb2N1cygpKSB7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuZ2V0Rm9jdXNlZEFjdGlvbkluZGV4KCkgLSAxO1xyXG5cclxuICAgICAgICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNBY3Rpb25BdEluZGV4KGluZGV4KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvbnRhaW5lci5mb2N1cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZVZpc2liaWxpdHkoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVWaXNpYmlsaXR5KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlLm5leHQodGhpcy5fZm9jdXNlZCB8fCB0aGlzLl9ob3ZlcmVkIHx8IHRoaXMuYWN0aW9uSGFzRm9jdXMoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmb2N1c0FjdGlvbkF0SW5kZXgoaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgdGhpcy5fYWN0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5fYWN0aW9uc1tpbmRleF0uZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRGb2N1c2VkQWN0aW9uSW5kZXgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYWN0aW9ucy5maW5kSW5kZXgoYWN0aW9uID0+IGFjdGlvbiA9PT0gdGhpcy5nZXRGb2N1c2VkQWN0aW9uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29udGFpbmVySGFzRm9jdXMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZvY3VzZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhY3Rpb25IYXNGb2N1cygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLmdldEZvY3VzZWRBY3Rpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEZvY3VzZWRBY3Rpb24oKTogSG92ZXJBY3Rpb25EaXJlY3RpdmUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hY3Rpb25zLmZpbmQoYWN0aW9uID0+IGFjdGlvbi5mb2N1c2VkKTtcclxuICAgIH1cclxufSJdfQ==