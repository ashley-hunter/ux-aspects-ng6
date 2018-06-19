/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, QueryList, ContentChildren, Input, ViewContainerRef } from '@angular/core';
import { ResizeService } from '../resize/index';
import { LayoutSwitcherItemDirective } from './layout-switcher-item.directive';
var LayoutSwitcherDirective = /** @class */ (function () {
    function LayoutSwitcherDirective(_elementRef, resizeService, _viewContainerRef) {
        var _this = this;
        this._elementRef = _elementRef;
        this._viewContainerRef = _viewContainerRef;
        // watch for changes to the container size
        resizeService.addResizeListener(_elementRef.nativeElement).subscribe(function (event) {
            _this._width = event.width;
            // render the appropriate layout
            // render the appropriate layout
            _this.updateActiveLayout();
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    LayoutSwitcherDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        // if the active group has changed then render the appropriate layout
        if (changes["group"].currentValue !== changes["group"].previousValue) {
            this.updateActiveLayout();
        }
    };
    /**
     * @return {?}
     */
    LayoutSwitcherDirective.prototype.getActiveLayout = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // if there are currently no layouts then do nothing
        if (!this._layouts) {
            return null;
        }
        // otherwise find layouts that match the active group and that meet the constraints
        return this._layouts.filter(function (layout) { return _this.group === layout.getConfig().group; }).find(function (layout) {
            var /** @type {?} */ minWidth = layout.getConfig().minWidth || 0;
            var /** @type {?} */ maxWidth = layout.getConfig().maxWidth || Infinity;
            return _this._width >= minWidth && _this._width < maxWidth;
        });
    };
    /**
     * @return {?}
     */
    LayoutSwitcherDirective.prototype.updateActiveLayout = /**
     * @return {?}
     */
    function () {
        // get the layout that should be shown
        var /** @type {?} */ layout = this.getActiveLayout();
        // check if we are currently showing the layout
        if (this._activeLayout === layout) {
            return;
        }
        // remove the current layout
        if (this._activeLayout) {
            this._activeLayout.deactivate();
        }
        // store the new active layout
        this._activeLayout = layout;
        // if there is an active layout then activate
        if (this._activeLayout) {
            this._activeLayout.activate();
        }
    };
    /**
     * @return {?}
     */
    LayoutSwitcherDirective.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        // store the initial current element width
        this._width = this._elementRef.nativeElement.offsetWidth;
        // render the appropriate layout - need a delay as Angular doesn't like changes like this in these lifecycle hooks
        requestAnimationFrame(this.updateActiveLayout.bind(this));
    };
    LayoutSwitcherDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[uxLayoutSwitcher]'
                },] },
    ];
    /** @nocollapse */
    LayoutSwitcherDirective.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: ResizeService, },
        { type: ViewContainerRef, },
    ]; };
    LayoutSwitcherDirective.propDecorators = {
        "group": [{ type: Input },],
        "_layouts": [{ type: ContentChildren, args: [LayoutSwitcherItemDirective,] },],
    };
    return LayoutSwitcherDirective;
}());
export { LayoutSwitcherDirective };
function LayoutSwitcherDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    LayoutSwitcherDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    LayoutSwitcherDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    LayoutSwitcherDirective.propDecorators;
    /** @type {?} */
    LayoutSwitcherDirective.prototype.group;
    /** @type {?} */
    LayoutSwitcherDirective.prototype._layouts;
    /** @type {?} */
    LayoutSwitcherDirective.prototype._width;
    /** @type {?} */
    LayoutSwitcherDirective.prototype._activeLayout;
    /** @type {?} */
    LayoutSwitcherDirective.prototype._elementRef;
    /** @type {?} */
    LayoutSwitcherDirective.prototype._viewContainerRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LXN3aXRjaGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL2xheW91dC1zd2l0Y2hlci9sYXlvdXQtc3dpdGNoZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBb0IsZ0JBQWdCLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZKLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7SUFhM0UsaUNBQW9CLFdBQXVCLEVBQUUsYUFBNEIsRUFDN0Q7UUFEWixpQkFVQztRQVZtQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUMvQixzQkFBaUIsR0FBakIsaUJBQWlCOztRQUd6QixhQUFhLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLEtBQUs7WUFDdEUsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDOztZQUcxQixBQURBLGdDQUFnQztZQUNoQyxLQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUM3QixDQUFDLENBQUM7S0FDTjs7Ozs7SUFFRCw2Q0FBVzs7OztJQUFYLFVBQVksT0FBc0I7O1FBRzlCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sVUFBTyxZQUFZLEtBQUssT0FBTyxVQUFPLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDN0QsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDN0I7S0FDSjs7OztJQUVELGlEQUFlOzs7SUFBZjtRQUFBLGlCQWVDOztRQVpHLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQztTQUNmOztRQUdELE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssRUFBdkMsQ0FBdUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07WUFFdEYscUJBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDO1lBQ2hELHFCQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQztZQUV2RCxNQUFNLENBQUMsS0FBSSxDQUFDLE1BQU0sSUFBSSxRQUFRLElBQUksS0FBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7U0FDNUQsQ0FBQyxDQUFDO0tBQ047Ozs7SUFFRCxvREFBa0I7OztJQUFsQjs7UUFHSSxxQkFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDOztRQUdwQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDaEMsTUFBTSxDQUFDO1NBQ1Y7O1FBR0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQzs7UUFHRCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQzs7UUFHNUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNqQztLQUNKOzs7O0lBRUQsb0RBQWtCOzs7SUFBbEI7O1FBR0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7O1FBR3pELHFCQUFxQixDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztLQUM3RDs7Z0JBL0VKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsb0JBQW9CO2lCQUNqQzs7OztnQkFObUIsVUFBVTtnQkFDckIsYUFBYTtnQkFEK0QsZ0JBQWdCOzs7MEJBU2hHLEtBQUs7NkJBQ0wsZUFBZSxTQUFDLDJCQUEyQjs7a0NBVmhEOztTQU9hLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUXVlcnlMaXN0LCBDb250ZW50Q2hpbGRyZW4sIElucHV0LCBBZnRlckNvbnRlbnRJbml0LCBWaWV3Q29udGFpbmVyUmVmLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVzaXplU2VydmljZSB9IGZyb20gJy4uL3Jlc2l6ZS9pbmRleCc7XHJcbmltcG9ydCB7IExheW91dFN3aXRjaGVySXRlbURpcmVjdGl2ZSB9IGZyb20gJy4vbGF5b3V0LXN3aXRjaGVyLWl0ZW0uZGlyZWN0aXZlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbdXhMYXlvdXRTd2l0Y2hlcl0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXRTd2l0Y2hlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcyB7XHJcblxyXG4gICAgQElucHV0KCkgZ3JvdXA6IHN0cmluZztcclxuICAgIEBDb250ZW50Q2hpbGRyZW4oTGF5b3V0U3dpdGNoZXJJdGVtRGlyZWN0aXZlKSBwcml2YXRlIF9sYXlvdXRzOiBRdWVyeUxpc3Q8TGF5b3V0U3dpdGNoZXJJdGVtRGlyZWN0aXZlPjtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2FjdGl2ZUxheW91dDogTGF5b3V0U3dpdGNoZXJJdGVtRGlyZWN0aXZlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHJlc2l6ZVNlcnZpY2U6IFJlc2l6ZVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xyXG5cclxuICAgICAgICAvLyB3YXRjaCBmb3IgY2hhbmdlcyB0byB0aGUgY29udGFpbmVyIHNpemVcclxuICAgICAgICByZXNpemVTZXJ2aWNlLmFkZFJlc2l6ZUxpc3RlbmVyKF9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLnN1YnNjcmliZShldmVudCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3dpZHRoID0gZXZlbnQud2lkdGg7XHJcblxyXG4gICAgICAgICAgICAvLyByZW5kZXIgdGhlIGFwcHJvcHJpYXRlIGxheW91dFxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2ZUxheW91dCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gaWYgdGhlIGFjdGl2ZSBncm91cCBoYXMgY2hhbmdlZCB0aGVuIHJlbmRlciB0aGUgYXBwcm9wcmlhdGUgbGF5b3V0XHJcbiAgICAgICAgaWYgKGNoYW5nZXMuZ3JvdXAuY3VycmVudFZhbHVlICE9PSBjaGFuZ2VzLmdyb3VwLnByZXZpb3VzVmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVBY3RpdmVMYXlvdXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWN0aXZlTGF5b3V0KCk6IExheW91dFN3aXRjaGVySXRlbURpcmVjdGl2ZSB8IG51bGwge1xyXG5cclxuICAgICAgICAvLyBpZiB0aGVyZSBhcmUgY3VycmVudGx5IG5vIGxheW91dHMgdGhlbiBkbyBub3RoaW5nXHJcbiAgICAgICAgaWYgKCF0aGlzLl9sYXlvdXRzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gb3RoZXJ3aXNlIGZpbmQgbGF5b3V0cyB0aGF0IG1hdGNoIHRoZSBhY3RpdmUgZ3JvdXAgYW5kIHRoYXQgbWVldCB0aGUgY29uc3RyYWludHNcclxuICAgICAgICByZXR1cm4gdGhpcy5fbGF5b3V0cy5maWx0ZXIobGF5b3V0ID0+IHRoaXMuZ3JvdXAgPT09IGxheW91dC5nZXRDb25maWcoKS5ncm91cCkuZmluZChsYXlvdXQgPT4ge1xyXG5cclxuICAgICAgICAgICAgbGV0IG1pbldpZHRoID0gbGF5b3V0LmdldENvbmZpZygpLm1pbldpZHRoIHx8IDA7XHJcbiAgICAgICAgICAgIGxldCBtYXhXaWR0aCA9IGxheW91dC5nZXRDb25maWcoKS5tYXhXaWR0aCB8fCBJbmZpbml0eTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl93aWR0aCA+PSBtaW5XaWR0aCAmJiB0aGlzLl93aWR0aCA8IG1heFdpZHRoO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUFjdGl2ZUxheW91dCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gZ2V0IHRoZSBsYXlvdXQgdGhhdCBzaG91bGQgYmUgc2hvd25cclxuICAgICAgICBsZXQgbGF5b3V0ID0gdGhpcy5nZXRBY3RpdmVMYXlvdXQoKTtcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgYXJlIGN1cnJlbnRseSBzaG93aW5nIHRoZSBsYXlvdXRcclxuICAgICAgICBpZiAodGhpcy5fYWN0aXZlTGF5b3V0ID09PSBsYXlvdXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcmVtb3ZlIHRoZSBjdXJyZW50IGxheW91dFxyXG4gICAgICAgIGlmICh0aGlzLl9hY3RpdmVMYXlvdXQpIHtcclxuICAgICAgICAgICAgdGhpcy5fYWN0aXZlTGF5b3V0LmRlYWN0aXZhdGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHN0b3JlIHRoZSBuZXcgYWN0aXZlIGxheW91dFxyXG4gICAgICAgIHRoaXMuX2FjdGl2ZUxheW91dCA9IGxheW91dDtcclxuXHJcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgYW4gYWN0aXZlIGxheW91dCB0aGVuIGFjdGl2YXRlXHJcbiAgICAgICAgaWYgKHRoaXMuX2FjdGl2ZUxheW91dCkge1xyXG4gICAgICAgICAgICB0aGlzLl9hY3RpdmVMYXlvdXQuYWN0aXZhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG5cclxuICAgICAgICAvLyBzdG9yZSB0aGUgaW5pdGlhbCBjdXJyZW50IGVsZW1lbnQgd2lkdGhcclxuICAgICAgICB0aGlzLl93aWR0aCA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcclxuXHJcbiAgICAgICAgLy8gcmVuZGVyIHRoZSBhcHByb3ByaWF0ZSBsYXlvdXQgLSBuZWVkIGEgZGVsYXkgYXMgQW5ndWxhciBkb2Vzbid0IGxpa2UgY2hhbmdlcyBsaWtlIHRoaXMgaW4gdGhlc2UgbGlmZWN5Y2xlIGhvb2tzXHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlQWN0aXZlTGF5b3V0LmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG59Il19