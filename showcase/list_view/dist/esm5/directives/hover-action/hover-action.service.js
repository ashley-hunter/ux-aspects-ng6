/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
var HoverActionService = /** @class */ (function () {
    function HoverActionService() {
        this.active = new BehaviorSubject(false);
        this._focused = false;
        this._hovered = false;
        this._actions = [];
    }
    /**
     * @param {?} action
     * @return {?}
     */
    HoverActionService.prototype.register = /**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        this._actions.push(action);
    };
    /**
     * @param {?} action
     * @return {?}
     */
    HoverActionService.prototype.unregister = /**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        this._actions = this._actions.filter(function (actn) { return actn !== action; });
    };
    /**
     * @param {?} container
     * @return {?}
     */
    HoverActionService.prototype.setContainer = /**
     * @param {?} container
     * @return {?}
     */
    function (container) {
        this._container = container;
    };
    /**
     * @param {?} focus
     * @return {?}
     */
    HoverActionService.prototype.setFocusState = /**
     * @param {?} focus
     * @return {?}
     */
    function (focus) {
        this._focused = focus;
        this.updateVisibility();
    };
    /**
     * @param {?} hover
     * @return {?}
     */
    HoverActionService.prototype.setHoverState = /**
     * @param {?} hover
     * @return {?}
     */
    function (hover) {
        this._hovered = hover;
        this.updateVisibility();
    };
    /**
     * @return {?}
     */
    HoverActionService.prototype.next = /**
     * @return {?}
     */
    function () {
        // if container has focus then focus the first hover action
        if (this.containerHasFocus()) {
            this.focusActionAtIndex(0);
            return this.updateVisibility();
        }
        // if a hover action has focus then focus the next action
        if (this.actionHasFocus()) {
            var /** @type {?} */ index = this.getFocusedActionIndex() + 1;
            this.focusActionAtIndex(index);
            this.updateVisibility();
        }
    };
    /**
     * @return {?}
     */
    HoverActionService.prototype.previous = /**
     * @return {?}
     */
    function () {
        // if a hover action has focus then focus the previous action
        if (this.actionHasFocus()) {
            var /** @type {?} */ index = this.getFocusedActionIndex() - 1;
            if (index >= 0) {
                this.focusActionAtIndex(index);
            }
            else {
                this._container.focus();
            }
        }
        this.updateVisibility();
    };
    /**
     * @return {?}
     */
    HoverActionService.prototype.updateVisibility = /**
     * @return {?}
     */
    function () {
        this.active.next(this._focused || this._hovered || this.actionHasFocus());
    };
    /**
     * @param {?} index
     * @return {?}
     */
    HoverActionService.prototype.focusActionAtIndex = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (index >= 0 && index < this._actions.length) {
            this._actions[index].focus();
        }
    };
    /**
     * @return {?}
     */
    HoverActionService.prototype.getFocusedActionIndex = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this._actions.findIndex(function (action) { return action === _this.getFocusedAction(); });
    };
    /**
     * @return {?}
     */
    HoverActionService.prototype.containerHasFocus = /**
     * @return {?}
     */
    function () {
        return this._focused;
    };
    /**
     * @return {?}
     */
    HoverActionService.prototype.actionHasFocus = /**
     * @return {?}
     */
    function () {
        return !!this.getFocusedAction();
    };
    /**
     * @return {?}
     */
    HoverActionService.prototype.getFocusedAction = /**
     * @return {?}
     */
    function () {
        return this._actions.find(function (action) { return action.focused; });
    };
    HoverActionService.decorators = [
        { type: Injectable },
    ];
    return HoverActionService;
}());
export { HoverActionService };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG92ZXItYWN0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlcy9ob3Zlci1hY3Rpb24vaG92ZXItYWN0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O3NCQU9BLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQzt3QkFHMUMsS0FBSzt3QkFDTCxLQUFLO3dCQUNVLEVBQUU7Ozs7OztJQUU3QyxxQ0FBUTs7OztJQUFSLFVBQVMsTUFBNEI7UUFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDOUI7Ozs7O0lBRUQsdUNBQVU7Ozs7SUFBVixVQUFXLE1BQTRCO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLEtBQUssTUFBTSxFQUFmLENBQWUsQ0FBQyxDQUFDO0tBQ2pFOzs7OztJQUVELHlDQUFZOzs7O0lBQVosVUFBYSxTQUF3QztRQUNqRCxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztLQUMvQjs7Ozs7SUFFRCwwQ0FBYTs7OztJQUFiLFVBQWMsS0FBYztRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztLQUMzQjs7Ozs7SUFFRCwwQ0FBYTs7OztJQUFiLFVBQWMsS0FBYztRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztLQUMzQjs7OztJQUVELGlDQUFJOzs7SUFBSjs7UUFHSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUNsQzs7UUFHRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLHFCQUFJLEtBQUssR0FBRyxJQUFJLENBQUMscUJBQXFCLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQzNCO0tBQ0o7Ozs7SUFFRCxxQ0FBUTs7O0lBQVI7O1FBRUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN4QixxQkFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBRTdDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNiLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNsQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDM0I7U0FDSjtRQUVELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0tBQzNCOzs7O0lBRUQsNkNBQWdCOzs7SUFBaEI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7S0FDN0U7Ozs7O0lBRU8sK0NBQWtCOzs7O2NBQUMsS0FBYTtRQUNwQyxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNoQzs7Ozs7SUFHRyxrREFBcUI7Ozs7O1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sS0FBSyxLQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBbEMsQ0FBa0MsQ0FBQyxDQUFDOzs7OztJQUd6RSw4Q0FBaUI7Ozs7UUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7Ozs7O0lBR2pCLDJDQUFjOzs7O1FBQ2xCLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7Ozs7O0lBRzdCLDZDQUFnQjs7OztRQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FBQyxDQUFDOzs7Z0JBdEYzRCxVQUFVOzs2QkFMWDs7U0FNYSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBIb3ZlckFjdGlvbkNvbnRhaW5lckRpcmVjdGl2ZSB9IGZyb20gJy4vaG92ZXItYWN0aW9uLWNvbnRhaW5lci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBIb3ZlckFjdGlvbkRpcmVjdGl2ZSB9IGZyb20gJy4vaG92ZXItYWN0aW9uLmRpcmVjdGl2ZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBIb3ZlckFjdGlvblNlcnZpY2Uge1xyXG5cclxuICAgIGFjdGl2ZTogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gICAgcHJpdmF0ZSBfY29udGFpbmVyOiBIb3ZlckFjdGlvbkNvbnRhaW5lckRpcmVjdGl2ZTtcclxuICAgIHByaXZhdGUgX2ZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX2hvdmVyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX2FjdGlvbnM6IEhvdmVyQWN0aW9uRGlyZWN0aXZlW10gPSBbXTtcclxuXHJcbiAgICByZWdpc3RlcihhY3Rpb246IEhvdmVyQWN0aW9uRGlyZWN0aXZlKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fYWN0aW9ucy5wdXNoKGFjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgdW5yZWdpc3RlcihhY3Rpb246IEhvdmVyQWN0aW9uRGlyZWN0aXZlKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fYWN0aW9ucyA9IHRoaXMuX2FjdGlvbnMuZmlsdGVyKGFjdG4gPT4gYWN0biAhPT0gYWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDb250YWluZXIoY29udGFpbmVyOiBIb3ZlckFjdGlvbkNvbnRhaW5lckRpcmVjdGl2ZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRGb2N1c1N0YXRlKGZvY3VzOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fZm9jdXNlZCA9IGZvY3VzO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVmlzaWJpbGl0eSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEhvdmVyU3RhdGUoaG92ZXI6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9ob3ZlcmVkID0gaG92ZXI7XHJcbiAgICAgICAgdGhpcy51cGRhdGVWaXNpYmlsaXR5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gaWYgY29udGFpbmVyIGhhcyBmb2N1cyB0aGVuIGZvY3VzIHRoZSBmaXJzdCBob3ZlciBhY3Rpb25cclxuICAgICAgICBpZiAodGhpcy5jb250YWluZXJIYXNGb2N1cygpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9jdXNBY3Rpb25BdEluZGV4KDApO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy51cGRhdGVWaXNpYmlsaXR5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiBhIGhvdmVyIGFjdGlvbiBoYXMgZm9jdXMgdGhlbiBmb2N1cyB0aGUgbmV4dCBhY3Rpb25cclxuICAgICAgICBpZiAodGhpcy5hY3Rpb25IYXNGb2N1cygpKSB7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuZ2V0Rm9jdXNlZEFjdGlvbkluZGV4KCkgKyAxO1xyXG4gICAgICAgICAgICB0aGlzLmZvY3VzQWN0aW9uQXRJbmRleChpbmRleCk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmlzaWJpbGl0eSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcmV2aW91cygpOiB2b2lkIHtcclxuICAgICAgICAvLyBpZiBhIGhvdmVyIGFjdGlvbiBoYXMgZm9jdXMgdGhlbiBmb2N1cyB0aGUgcHJldmlvdXMgYWN0aW9uXHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aW9uSGFzRm9jdXMoKSkge1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmdldEZvY3VzZWRBY3Rpb25JbmRleCgpIC0gMTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzQWN0aW9uQXRJbmRleChpbmRleCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb250YWluZXIuZm9jdXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVWaXNpYmlsaXR5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVmlzaWJpbGl0eSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZS5uZXh0KHRoaXMuX2ZvY3VzZWQgfHwgdGhpcy5faG92ZXJlZCB8fCB0aGlzLmFjdGlvbkhhc0ZvY3VzKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZm9jdXNBY3Rpb25BdEluZGV4KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IHRoaXMuX2FjdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FjdGlvbnNbaW5kZXhdLmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Rm9jdXNlZEFjdGlvbkluZGV4KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FjdGlvbnMuZmluZEluZGV4KGFjdGlvbiA9PiBhY3Rpb24gPT09IHRoaXMuZ2V0Rm9jdXNlZEFjdGlvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvbnRhaW5lckhhc0ZvY3VzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9mb2N1c2VkO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWN0aW9uSGFzRm9jdXMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5nZXRGb2N1c2VkQWN0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRGb2N1c2VkQWN0aW9uKCk6IEhvdmVyQWN0aW9uRGlyZWN0aXZlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYWN0aW9ucy5maW5kKGFjdGlvbiA9PiBhY3Rpb24uZm9jdXNlZCk7XHJcbiAgICB9XHJcbn0iXX0=