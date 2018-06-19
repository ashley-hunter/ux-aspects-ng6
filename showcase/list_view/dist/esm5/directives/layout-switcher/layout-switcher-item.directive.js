/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
var LayoutSwitcherItemDirective = /** @class */ (function () {
    function LayoutSwitcherItemDirective(_templateRef, _viewContainerRef) {
        this._templateRef = _templateRef;
        this._viewContainerRef = _viewContainerRef;
    }
    /**
     * @return {?}
     */
    LayoutSwitcherItemDirective.prototype.getLayout = /**
     * @return {?}
     */
    function () {
        return this._templateRef;
    };
    /**
     * @return {?}
     */
    LayoutSwitcherItemDirective.prototype.getConfig = /**
     * @return {?}
     */
    function () {
        return this._config;
    };
    /**
     * @return {?}
     */
    LayoutSwitcherItemDirective.prototype.activate = /**
     * @return {?}
     */
    function () {
        this._embeddedView = this._viewContainerRef.createEmbeddedView(this._templateRef);
    };
    /**
     * @return {?}
     */
    LayoutSwitcherItemDirective.prototype.deactivate = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ index = this._viewContainerRef.indexOf(this._embeddedView);
        this._viewContainerRef.remove(index);
        this._embeddedView = null;
    };
    LayoutSwitcherItemDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[uxLayoutSwitcherItem]'
                },] },
    ];
    /** @nocollapse */
    LayoutSwitcherItemDirective.ctorParameters = function () { return [
        { type: TemplateRef, },
        { type: ViewContainerRef, },
    ]; };
    LayoutSwitcherItemDirective.propDecorators = {
        "_config": [{ type: Input, args: ['uxLayoutSwitcherItem',] },],
    };
    return LayoutSwitcherItemDirective;
}());
export { LayoutSwitcherItemDirective };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LXN3aXRjaGVyLWl0ZW0uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvbGF5b3V0LXN3aXRjaGVyL2xheW91dC1zd2l0Y2hlci1pdGVtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBbUIsS0FBSyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUFXN0YscUNBQW9CLFlBQThCLEVBQVUsaUJBQW1DO1FBQTNFLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7S0FBSzs7OztJQUVwRywrQ0FBUzs7O0lBQVQ7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztLQUM1Qjs7OztJQUVELCtDQUFTOzs7SUFBVDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0tBQ3ZCOzs7O0lBRUQsOENBQVE7OztJQUFSO1FBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQ3JGOzs7O0lBRUQsZ0RBQVU7OztJQUFWO1FBQ0kscUJBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7S0FDN0I7O2dCQTNCSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLHdCQUF3QjtpQkFDckM7Ozs7Z0JBSjJDLFdBQVc7Z0JBQUUsZ0JBQWdCOzs7NEJBT3BFLEtBQUssU0FBQyxzQkFBc0I7O3NDQVBqQzs7U0FLYSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVtYmVkZGVkVmlld1JlZiwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW3V4TGF5b3V0U3dpdGNoZXJJdGVtXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIExheW91dFN3aXRjaGVySXRlbURpcmVjdGl2ZSB7XHJcblxyXG4gICAgQElucHV0KCd1eExheW91dFN3aXRjaGVySXRlbScpIHByaXZhdGUgX2NvbmZpZzogTGF5b3V0U3dpdGNoZXJJdGVtO1xyXG5cclxuICAgIHByaXZhdGUgX2VtYmVkZGVkVmlldzogRW1iZWRkZWRWaWV3UmVmPGFueT47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHsgfVxyXG5cclxuICAgIGdldExheW91dCgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGVSZWY7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29uZmlnKCk6IExheW91dFN3aXRjaGVySXRlbSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcclxuICAgIH1cclxuXHJcbiAgICBhY3RpdmF0ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9lbWJlZGRlZFZpZXcgPSB0aGlzLl92aWV3Q29udGFpbmVyUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLl90ZW1wbGF0ZVJlZik7XHJcbiAgICB9XHJcblxyXG4gICAgZGVhY3RpdmF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLl92aWV3Q29udGFpbmVyUmVmLmluZGV4T2YodGhpcy5fZW1iZWRkZWRWaWV3KTtcclxuICAgICAgICB0aGlzLl92aWV3Q29udGFpbmVyUmVmLnJlbW92ZShpbmRleCk7XHJcbiAgICAgICAgdGhpcy5fZW1iZWRkZWRWaWV3ID0gbnVsbDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGF5b3V0U3dpdGNoZXJJdGVtIHtcclxuICAgIGdyb3VwPzogc3RyaW5nO1xyXG4gICAgbWluV2lkdGg/OiBudW1iZXI7XHJcbiAgICBtYXhXaWR0aD86IG51bWJlcjtcclxufSJdfQ==