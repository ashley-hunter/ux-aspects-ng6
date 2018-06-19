/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, EventEmitter } from '@angular/core';
var WizardStepComponent = /** @class */ (function () {
    function WizardStepComponent() {
        this.valid = true;
        this.visitedChange = new EventEmitter();
        this._active = false;
        this._visited = false;
    }
    Object.defineProperty(WizardStepComponent.prototype, "visited", {
        get: /**
         * @return {?}
         */
        function () {
            return this._visited;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._visited = value;
            this.visitedChange.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardStepComponent.prototype, "active", {
        get: /**
         * @return {?}
         */
        function () {
            return this._active;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            // store the active state of the step
            this._active = value;
            // if the value is true then the step should also be marked as visited
            if (value === true) {
                this.visited = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    WizardStepComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-wizard-step',
                    template: "<ng-container *ngIf=\"active\">\n    <ng-content></ng-content>\n</ng-container>"
                },] },
    ];
    /** @nocollapse */
    WizardStepComponent.propDecorators = {
        "header": [{ type: Input },],
        "valid": [{ type: Input },],
        "visitedChange": [{ type: Input },],
        "visited": [{ type: Input },],
    };
    return WizardStepComponent;
}());
export { WizardStepComponent };
function WizardStepComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    WizardStepComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    WizardStepComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    WizardStepComponent.propDecorators;
    /** @type {?} */
    WizardStepComponent.prototype.header;
    /** @type {?} */
    WizardStepComponent.prototype.valid;
    /** @type {?} */
    WizardStepComponent.prototype.visitedChange;
    /** @type {?} */
    WizardStepComponent.prototype._active;
    /** @type {?} */
    WizardStepComponent.prototype._visited;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLXN0ZXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvd2l6YXJkL3dpemFyZC1zdGVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7cUJBV2pDLElBQUk7NkJBQ0wsSUFBSSxZQUFZLEVBQVc7dUJBRXpCLEtBQUs7d0JBQ0osS0FBSzs7MEJBRzdCLHdDQUFPOzs7OztZQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDOzs7Ozs7UUFHekIsVUFBWSxLQUFjO1lBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2xDOzs7O0lBRUQsc0JBQUksdUNBQU07Ozs7UUFXVjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3ZCOzs7OztRQWJELFVBQVcsS0FBYzs7WUFHckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7O1lBR3JCLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzthQUN2QjtTQUNKOzs7T0FBQTs7Z0JBbENKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsaUZBRUU7aUJBQ2Y7Ozs7MkJBR0ksS0FBSzswQkFDTCxLQUFLO2tDQUNMLEtBQUs7NEJBS0wsS0FBSzs7OEJBakJWOztTQVFhLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3V4LXdpemFyZC1zdGVwJyxcclxuICAgIHRlbXBsYXRlOiBgPG5nLWNvbnRhaW5lciAqbmdJZj1cImFjdGl2ZVwiPlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L25nLWNvbnRhaW5lcj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXaXphcmRTdGVwQ29tcG9uZW50IHtcclxuICAgIFxyXG4gICAgQElucHV0KCkgaGVhZGVyOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSB2YWxpZDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBASW5wdXQoKSB2aXNpdGVkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICAgIHByaXZhdGUgX2FjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfdmlzaXRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIEBJbnB1dCgpIFxyXG4gICAgZ2V0IHZpc2l0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Zpc2l0ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHZpc2l0ZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl92aXNpdGVkID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy52aXNpdGVkQ2hhbmdlLm5leHQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBhY3RpdmUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICBcclxuICAgICAgICAvLyBzdG9yZSB0aGUgYWN0aXZlIHN0YXRlIG9mIHRoZSBzdGVwXHJcbiAgICAgICAgdGhpcy5fYWN0aXZlID0gdmFsdWU7XHJcblxyXG4gICAgICAgIC8vIGlmIHRoZSB2YWx1ZSBpcyB0cnVlIHRoZW4gdGhlIHN0ZXAgc2hvdWxkIGFsc28gYmUgbWFya2VkIGFzIHZpc2l0ZWRcclxuICAgICAgICBpZiAodmFsdWUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgdGhpcy52aXNpdGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGFjdGl2ZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYWN0aXZlO1xyXG4gICAgfVxyXG5cclxufSJdfQ==