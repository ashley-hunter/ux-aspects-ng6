/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, QueryList, ContentChildren, Input, ViewContainerRef } from '@angular/core';
import { ResizeService } from '../resize/index';
import { LayoutSwitcherItemDirective } from './layout-switcher-item.directive';
export class LayoutSwitcherDirective {
    /**
     * @param {?} _elementRef
     * @param {?} resizeService
     * @param {?} _viewContainerRef
     */
    constructor(_elementRef, resizeService, _viewContainerRef) {
        this._elementRef = _elementRef;
        this._viewContainerRef = _viewContainerRef;
        // watch for changes to the container size
        resizeService.addResizeListener(_elementRef.nativeElement).subscribe(event => {
            this._width = event.width;
            // render the appropriate layout
            this.updateActiveLayout();
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        // if the active group has changed then render the appropriate layout
        if (changes["group"].currentValue !== changes["group"].previousValue) {
            this.updateActiveLayout();
        }
    }
    /**
     * @return {?}
     */
    getActiveLayout() {
        // if there are currently no layouts then do nothing
        if (!this._layouts) {
            return null;
        }
        // otherwise find layouts that match the active group and that meet the constraints
        return this._layouts.filter(layout => this.group === layout.getConfig().group).find(layout => {
            let /** @type {?} */ minWidth = layout.getConfig().minWidth || 0;
            let /** @type {?} */ maxWidth = layout.getConfig().maxWidth || Infinity;
            return this._width >= minWidth && this._width < maxWidth;
        });
    }
    /**
     * @return {?}
     */
    updateActiveLayout() {
        // get the layout that should be shown
        let /** @type {?} */ layout = this.getActiveLayout();
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
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        // store the initial current element width
        this._width = this._elementRef.nativeElement.offsetWidth;
        // render the appropriate layout - need a delay as Angular doesn't like changes like this in these lifecycle hooks
        requestAnimationFrame(this.updateActiveLayout.bind(this));
    }
}
LayoutSwitcherDirective.decorators = [
    { type: Directive, args: [{
                selector: '[uxLayoutSwitcher]'
            },] },
];
/** @nocollapse */
LayoutSwitcherDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: ResizeService, },
    { type: ViewContainerRef, },
];
LayoutSwitcherDirective.propDecorators = {
    "group": [{ type: Input },],
    "_layouts": [{ type: ContentChildren, args: [LayoutSwitcherItemDirective,] },],
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LXN3aXRjaGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL2xheW91dC1zd2l0Y2hlci9sYXlvdXQtc3dpdGNoZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBb0IsZ0JBQWdCLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZKLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUsvRSxNQUFNOzs7Ozs7SUFRRixZQUFvQixXQUF1QixFQUFFLGFBQTRCLEVBQzdEO1FBRFEsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDL0Isc0JBQWlCLEdBQWpCLGlCQUFpQjs7UUFHekIsYUFBYSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDekUsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDOztZQUcxQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUM3QixDQUFDLENBQUM7S0FDTjs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7O1FBRzlCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sVUFBTyxZQUFZLEtBQUssT0FBTyxVQUFPLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDN0QsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDN0I7S0FDSjs7OztJQUVELGVBQWU7O1FBR1gsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDO1NBQ2Y7O1FBR0QsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBRXpGLHFCQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQztZQUNoRCxxQkFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUM7WUFFdkQsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksUUFBUSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO1NBQzVELENBQUMsQ0FBQztLQUNOOzs7O0lBRUQsa0JBQWtCOztRQUdkLHFCQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7O1FBR3BDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNoQyxNQUFNLENBQUM7U0FDVjs7UUFHRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25DOztRQUdELElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDOztRQUc1QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2pDO0tBQ0o7Ozs7SUFFRCxrQkFBa0I7O1FBR2QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7O1FBR3pELHFCQUFxQixDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztLQUM3RDs7O1lBL0VKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsb0JBQW9CO2FBQ2pDOzs7O1lBTm1CLFVBQVU7WUFDckIsYUFBYTtZQUQrRCxnQkFBZ0I7OztzQkFTaEcsS0FBSzt5QkFDTCxlQUFlLFNBQUMsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBRdWVyeUxpc3QsIENvbnRlbnRDaGlsZHJlbiwgSW5wdXQsIEFmdGVyQ29udGVudEluaXQsIFZpZXdDb250YWluZXJSZWYsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSZXNpemVTZXJ2aWNlIH0gZnJvbSAnLi4vcmVzaXplL2luZGV4JztcclxuaW1wb3J0IHsgTGF5b3V0U3dpdGNoZXJJdGVtRGlyZWN0aXZlIH0gZnJvbSAnLi9sYXlvdXQtc3dpdGNoZXItaXRlbS5kaXJlY3RpdmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1t1eExheW91dFN3aXRjaGVyXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIExheW91dFN3aXRjaGVyRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzIHtcclxuXHJcbiAgICBASW5wdXQoKSBncm91cDogc3RyaW5nO1xyXG4gICAgQENvbnRlbnRDaGlsZHJlbihMYXlvdXRTd2l0Y2hlckl0ZW1EaXJlY3RpdmUpIHByaXZhdGUgX2xheW91dHM6IFF1ZXJ5TGlzdDxMYXlvdXRTd2l0Y2hlckl0ZW1EaXJlY3RpdmU+O1xyXG4gICAgXHJcbiAgICBwcml2YXRlIF93aWR0aDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfYWN0aXZlTGF5b3V0OiBMYXlvdXRTd2l0Y2hlckl0ZW1EaXJlY3RpdmU7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcmVzaXplU2VydmljZTogUmVzaXplU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XHJcblxyXG4gICAgICAgIC8vIHdhdGNoIGZvciBjaGFuZ2VzIHRvIHRoZSBjb250YWluZXIgc2l6ZVxyXG4gICAgICAgIHJlc2l6ZVNlcnZpY2UuYWRkUmVzaXplTGlzdGVuZXIoX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuc3Vic2NyaWJlKGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fd2lkdGggPSBldmVudC53aWR0aDtcclxuXHJcbiAgICAgICAgICAgIC8vIHJlbmRlciB0aGUgYXBwcm9wcmlhdGUgbGF5b3V0XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQWN0aXZlTGF5b3V0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG5cclxuICAgICAgICAvLyBpZiB0aGUgYWN0aXZlIGdyb3VwIGhhcyBjaGFuZ2VkIHRoZW4gcmVuZGVyIHRoZSBhcHByb3ByaWF0ZSBsYXlvdXRcclxuICAgICAgICBpZiAoY2hhbmdlcy5ncm91cC5jdXJyZW50VmFsdWUgIT09IGNoYW5nZXMuZ3JvdXAucHJldmlvdXNWYWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2ZUxheW91dCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRBY3RpdmVMYXlvdXQoKTogTGF5b3V0U3dpdGNoZXJJdGVtRGlyZWN0aXZlIHwgbnVsbCB7XHJcblxyXG4gICAgICAgIC8vIGlmIHRoZXJlIGFyZSBjdXJyZW50bHkgbm8gbGF5b3V0cyB0aGVuIGRvIG5vdGhpbmdcclxuICAgICAgICBpZiAoIXRoaXMuX2xheW91dHMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBvdGhlcndpc2UgZmluZCBsYXlvdXRzIHRoYXQgbWF0Y2ggdGhlIGFjdGl2ZSBncm91cCBhbmQgdGhhdCBtZWV0IHRoZSBjb25zdHJhaW50c1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sYXlvdXRzLmZpbHRlcihsYXlvdXQgPT4gdGhpcy5ncm91cCA9PT0gbGF5b3V0LmdldENvbmZpZygpLmdyb3VwKS5maW5kKGxheW91dCA9PiB7XHJcblxyXG4gICAgICAgICAgICBsZXQgbWluV2lkdGggPSBsYXlvdXQuZ2V0Q29uZmlnKCkubWluV2lkdGggfHwgMDtcclxuICAgICAgICAgICAgbGV0IG1heFdpZHRoID0gbGF5b3V0LmdldENvbmZpZygpLm1heFdpZHRoIHx8IEluZmluaXR5O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dpZHRoID49IG1pbldpZHRoICYmIHRoaXMuX3dpZHRoIDwgbWF4V2lkdGg7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQWN0aXZlTGF5b3V0KCk6IHZvaWQge1xyXG5cclxuICAgICAgICAvLyBnZXQgdGhlIGxheW91dCB0aGF0IHNob3VsZCBiZSBzaG93blxyXG4gICAgICAgIGxldCBsYXlvdXQgPSB0aGlzLmdldEFjdGl2ZUxheW91dCgpO1xyXG5cclxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBhcmUgY3VycmVudGx5IHNob3dpbmcgdGhlIGxheW91dFxyXG4gICAgICAgIGlmICh0aGlzLl9hY3RpdmVMYXlvdXQgPT09IGxheW91dCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyByZW1vdmUgdGhlIGN1cnJlbnQgbGF5b3V0XHJcbiAgICAgICAgaWYgKHRoaXMuX2FjdGl2ZUxheW91dCkge1xyXG4gICAgICAgICAgICB0aGlzLl9hY3RpdmVMYXlvdXQuZGVhY3RpdmF0ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc3RvcmUgdGhlIG5ldyBhY3RpdmUgbGF5b3V0XHJcbiAgICAgICAgdGhpcy5fYWN0aXZlTGF5b3V0ID0gbGF5b3V0O1xyXG5cclxuICAgICAgICAvLyBpZiB0aGVyZSBpcyBhbiBhY3RpdmUgbGF5b3V0IHRoZW4gYWN0aXZhdGVcclxuICAgICAgICBpZiAodGhpcy5fYWN0aXZlTGF5b3V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FjdGl2ZUxheW91dC5hY3RpdmF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIC8vIHN0b3JlIHRoZSBpbml0aWFsIGN1cnJlbnQgZWxlbWVudCB3aWR0aFxyXG4gICAgICAgIHRoaXMuX3dpZHRoID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG5cclxuICAgICAgICAvLyByZW5kZXIgdGhlIGFwcHJvcHJpYXRlIGxheW91dCAtIG5lZWQgYSBkZWxheSBhcyBBbmd1bGFyIGRvZXNuJ3QgbGlrZSBjaGFuZ2VzIGxpa2UgdGhpcyBpbiB0aGVzZSBsaWZlY3ljbGUgaG9va3NcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGVBY3RpdmVMYXlvdXQuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbn0iXX0=