/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, QueryList, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { HierarchyBarService } from './hierarchy-bar.service';
var HierarchyBarComponent = /** @class */ (function () {
    function HierarchyBarComponent(hierarchyBar) {
        var _this = this;
        this.hierarchyBar = hierarchyBar;
        this.selectedChange = new EventEmitter();
        this.overflow$ = new BehaviorSubject(false);
        this.overflowNodes$ = new BehaviorSubject([]);
        this._subscription = new Subscription();
        // subscribe to changes in the selected node
        var /** @type {?} */ selected = hierarchyBar.nodes$.subscribe(function (nodes) { return _this.selectedChange.emit(nodes.length === 0 ? null : nodes[nodes.length - 1]); });
        var /** @type {?} */ changed = hierarchyBar.nodes$.pipe(debounceTime(0)).subscribe(function () { return _this.scrollIntoView(); });
        // store subscriptions
        this._subscription.add(selected);
        this._subscription.add(changed);
    }
    Object.defineProperty(HierarchyBarComponent.prototype, "root", {
        set: /**
         * @param {?} node
         * @return {?}
         */
        function (node) {
            this.hierarchyBar.setRootNode(node);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HierarchyBarComponent.prototype, "selected", {
        set: /**
         * @param {?} node
         * @return {?}
         */
        function (node) {
            this.hierarchyBar.selectNode(node);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    HierarchyBarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscription.unsubscribe();
    };
    /**
     * When there is overflow ensure that the rightmost
     * node remains in view at all times. The nodes no longer
     * visible be be displayed in a popover available on the
     * overflow indicator
     */
    /**
     * When there is overflow ensure that the rightmost
     * node remains in view at all times. The nodes no longer
     * visible be be displayed in a popover available on the
     * overflow indicator
     * @return {?}
     */
    HierarchyBarComponent.prototype.scrollIntoView = /**
     * When there is overflow ensure that the rightmost
     * node remains in view at all times. The nodes no longer
     * visible be be displayed in a popover available on the
     * overflow indicator
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.nodelist) {
            return;
        }
        // get the native element
        var nativeElement = this.nodelist.nativeElement;
        // emit whether or not there is overflow
        this.overflow$.next(nativeElement.scrollWidth > nativeElement.offsetWidth);
        // if the hierarchy bar contents do not overflow then do nothing
        if (nativeElement.scrollWidth > nativeElement.offsetWidth) {
            // determine the amount of overflow
            var /** @type {?} */ overflowAmount_1 = nativeElement.scrollWidth - nativeElement.offsetWidth;
            // determine which nodes are not fully visible
            this.overflowNodes$.next(this.nodes.filter(function (node) { return node.nativeElement.offsetLeft < overflowAmount_1; })
                .map(function (node, index) { return _this.hierarchyBar.nodes$.value[index]; }));
            // move the scroll position to always show the last itme
            this.nodelist.nativeElement.scrollLeft = overflowAmount_1;
        }
    };
    HierarchyBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-hierarchy-bar',
                    template: "<!-- Allow content to be placed on the left of the items -->\n<aside class=\"hierarchy-bar-addons\">\n    <ng-content select=\"[uxHierarchyBarLeftAddon]\"></ng-content>\n</aside>\n\n<main #nodelist class=\"hierarchy-bar-nodes\" (uxResize)=\"scrollIntoView()\">\n\n    <div *ngIf=\"overflow$ | async\"\n         #popover=\"ux-popover\"\n         class=\"hierarchy-bar-overflow-indicator\"\n         [style.left.px]=\"nodelist.scrollLeft\"\n         [uxPopover]=\"overflow\"\n         [popoverContext]=\"{ popover: popover }\"\n         placement=\"bottom\"\n         popoverClass=\"hierarchy-bar-popover\">\n        . . .\n    </div>\n\n    <div #nodeElement class=\"hierarchy-bar-node\"\n         *ngFor=\"let node of hierarchyBar.nodes$ | async\">\n\n        <button class=\"hierarchy-bar-node-content\"\n                [attr.aria-label]=\"node.title\"\n                (click)=\"hierarchyBar.selectNode(node)\">\n\n            <!-- Show an icon if specifed -->\n            <img class=\"hierarchy-bar-node-icon\" *ngIf=\"node.icon\" [src]=\"node.icon\" alt=\"Hierarchy Bar Icon\">\n\n            <!-- Show the name of the current node -->\n            <span class=\"hierarchy-bar-node-title\">{{ node.title }}</span>\n\n        </button>\n\n        <!-- Show a dropdown arrow if there are children -->\n        <button *ngIf=\"node.children\"\n              #popover=\"ux-popover\"\n              aria-label=\"Show children\"\n              role=\"button\"\n              class=\"hierarchy-bar-node-arrow hpe-icon hpe-next\"\n              [uxPopover]=\"content\"\n              [popoverContext]=\"{ node: node, popover: popover }\"\n              placement=\"bottom\"\n              popoverClass=\"hierarchy-bar-popover\"\n              tabindex=\"0\">\n        </button>\n\n    </div>\n\n</main>\n\n<!-- Allow content to be placed on the right of the items -->\n<aside class=\"hierarchy-bar-addons\">\n    <ng-content select=\"[uxHierarchyBarRightAddon]\"></ng-content>\n</aside>\n\n<!-- Template for the popover list -->\n<ng-template #content let-node=\"node\" let-popover=\"popover\">\n\n    <!-- Loading Indicator -->\n    <ul class=\"hierarchy-bar-node-list\" *ngIf=\"(hierarchyBar.getChildren(node) | async).loading\">\n\n        <li class=\"hierarchy-bar-node-list-item\">\n            <ng-container [ngTemplateOutlet]=\"loadingIndicator || defaultLoadingIndicator\"></ng-container>\n        </li>\n    </ul>\n\n    <!-- List of children -->\n    <ul class=\"hierarchy-bar-node-list\" *ngIf=\"!(hierarchyBar.getChildren(node) | async).loading\">\n\n        <li *ngFor=\"let child of (hierarchyBar.getChildren(node) | async).children; let first = first\"\n            class=\"hierarchy-bar-node-list-item\"\n            [focusIf]=\"first\"\n            tabindex=\"0\"\n            (keydown.enter)=\"hierarchyBar.selectNode(child); popover.hide()\"\n            (click)=\"hierarchyBar.selectNode(child); popover.hide()\">\n\n            <!-- Show an icon if specifed -->\n            <img class=\"hierarchy-bar-node-icon\" *ngIf=\"child.icon\" [src]=\"child.icon\" alt=\"Hierarchy Bar Icon\">\n\n            <!-- Show the name of the current node -->\n            <span class=\"hierarchy-bar-node-title\">{{ child.title }}</span>\n\n        </li>\n\n    </ul>\n</ng-template>\n\n<!-- Template for the overflow popover list -->\n<ng-template #overflow let-popover=\"popover\">\n\n    <ul class=\"hierarchy-bar-node-list\">\n\n        <li *ngFor=\"let child of overflowNodes$ | async; let first = first\"\n            class=\"hierarchy-bar-node-list-item\"\n            tabindex=\"0\"\n            [focusIf]=\"first\"\n            (click)=\"hierarchyBar.selectNode(child); popover.hide()\"\n            (keydown.enter)=\"hierarchyBar.selectNode(child); popover.hide()\">\n\n            <!-- Show an icon if specifed -->\n            <img class=\"hierarchy-bar-node-icon\" *ngIf=\"child.icon\" [src]=\"child.icon\" alt=\"Hierarchy Bar Icon\">\n\n            <!-- Show the name of the current node -->\n            <span class=\"hierarchy-bar-node-title\">{{ child.title }}</span>\n\n        </li>\n\n    </ul>\n</ng-template>\n\n<!-- Loading Indicator Template -->\n<ng-template #defaultLoadingIndicator>\n    <div class=\"hierarchy-bar-node-icon\" alt=\"Hierarchy Bar Loading Indicator\">\n        <div class=\"spinner spinner-accent spinner-bounce-middle\"></div>\n    </div>\n\n    <!-- Show the name of the current node -->\n    <span class=\"hierarchy-bar-node-title\">Loading...</span>\n</ng-template>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    viewProviders: [HierarchyBarService]
                },] },
    ];
    /** @nocollapse */
    HierarchyBarComponent.ctorParameters = function () { return [
        { type: HierarchyBarService, },
    ]; };
    HierarchyBarComponent.propDecorators = {
        "root": [{ type: Input },],
        "selected": [{ type: Input },],
        "loadingIndicator": [{ type: Input },],
        "selectedChange": [{ type: Output },],
        "nodelist": [{ type: ViewChild, args: ['nodelist',] },],
        "nodes": [{ type: ViewChildren, args: ['nodeElement',] },],
    };
    return HierarchyBarComponent;
}());
export { HierarchyBarComponent };
function HierarchyBarComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    HierarchyBarComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    HierarchyBarComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    HierarchyBarComponent.propDecorators;
    /** @type {?} */
    HierarchyBarComponent.prototype.loadingIndicator;
    /** @type {?} */
    HierarchyBarComponent.prototype.selectedChange;
    /** @type {?} */
    HierarchyBarComponent.prototype.nodelist;
    /** @type {?} */
    HierarchyBarComponent.prototype.nodes;
    /** @type {?} */
    HierarchyBarComponent.prototype.overflow$;
    /** @type {?} */
    HierarchyBarComponent.prototype.overflowNodes$;
    /** @type {?} */
    HierarchyBarComponent.prototype._subscription;
    /** @type {?} */
    HierarchyBarComponent.prototype.hierarchyBar;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGllcmFyY2h5LWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9oaWVyYXJjaHktYmFyL2hpZXJhcmNoeS1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFhLE1BQU0sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEssT0FBTyxFQUFFLGVBQWUsRUFBSSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBb0IsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7SUFtSjVFLCtCQUFtQixZQUFpQztRQUFwRCxpQkFTQztRQVRrQixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7OEJBVHpCLElBQUksWUFBWSxFQUFvQjt5QkFJbkQsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDOzhCQUM5QixJQUFJLGVBQWUsQ0FBcUIsRUFBRSxDQUFDOzZCQUVwQyxJQUFJLFlBQVksRUFBRTs7UUFLdEMscUJBQU0sUUFBUSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBN0UsQ0FBNkUsQ0FBQyxDQUFDO1FBQ3ZJLHFCQUFNLE9BQU8sR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxjQUFjLEVBQUUsRUFBckIsQ0FBcUIsQ0FBQyxDQUFDOztRQUdqRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUNuQzswQkE1QlksdUNBQUk7Ozs7O2tCQUFDLElBQXNCO1lBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDOzs7OzswQkFHM0IsMkNBQVE7Ozs7O2tCQUFDLElBQXNCO1lBQ3hDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDOzs7Ozs7OztJQXlCdkMsMkNBQVc7OztJQUFYO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUNwQztJQUVEOzs7OztPQUtHOzs7Ozs7OztJQUNILDhDQUFjOzs7Ozs7O0lBQWQ7UUFBQSxpQkEyQkM7UUF6QkcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNqQixNQUFNLENBQUM7U0FDVjs7UUFHTyxJQUFBLDJDQUFhLENBQW1COztRQUd4QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQzs7UUFHM0UsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQzs7WUFHeEQscUJBQU0sZ0JBQWMsR0FBRyxhQUFhLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQyxXQUFXLENBQUM7O1lBRzdFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLGdCQUFjLEVBQTlDLENBQThDLENBQUM7aUJBQ3BFLEdBQUcsQ0FBQyxVQUFDLElBQUksRUFBRSxLQUFLLElBQUssT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQXJDLENBQXFDLENBQUMsQ0FDbkUsQ0FBQzs7WUFHRixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEdBQUcsZ0JBQWMsQ0FBQztTQUMzRDtLQUNKOztnQkFqTUosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSxvNklBc0hDO29CQUNYLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztpQkFDdkM7Ozs7Z0JBN0gwQixtQkFBbUI7Ozt5QkFnSXpDLEtBQUs7NkJBSUwsS0FBSztxQ0FJTCxLQUFLO21DQUVMLE1BQU07NkJBQ04sU0FBUyxTQUFDLFVBQVU7MEJBQ3BCLFlBQVksU0FBQyxhQUFhOztnQ0EvSS9COztTQWlJYSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkRlc3Ryb3ksIE91dHB1dCwgUXVlcnlMaXN0LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkLCBWaWV3Q2hpbGRyZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0ICwgIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IEhpZXJhcmNoeUJhck5vZGUsIEhpZXJhcmNoeUJhclNlcnZpY2UgfSBmcm9tICcuL2hpZXJhcmNoeS1iYXIuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndXgtaGllcmFyY2h5LWJhcicsXHJcbiAgICB0ZW1wbGF0ZTogYDwhLS0gQWxsb3cgY29udGVudCB0byBiZSBwbGFjZWQgb24gdGhlIGxlZnQgb2YgdGhlIGl0ZW1zIC0tPlxyXG48YXNpZGUgY2xhc3M9XCJoaWVyYXJjaHktYmFyLWFkZG9uc1wiPlxyXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3V4SGllcmFyY2h5QmFyTGVmdEFkZG9uXVwiPjwvbmctY29udGVudD5cclxuPC9hc2lkZT5cclxuXHJcbjxtYWluICNub2RlbGlzdCBjbGFzcz1cImhpZXJhcmNoeS1iYXItbm9kZXNcIiAodXhSZXNpemUpPVwic2Nyb2xsSW50b1ZpZXcoKVwiPlxyXG5cclxuICAgIDxkaXYgKm5nSWY9XCJvdmVyZmxvdyQgfCBhc3luY1wiXHJcbiAgICAgICAgICNwb3BvdmVyPVwidXgtcG9wb3ZlclwiXHJcbiAgICAgICAgIGNsYXNzPVwiaGllcmFyY2h5LWJhci1vdmVyZmxvdy1pbmRpY2F0b3JcIlxyXG4gICAgICAgICBbc3R5bGUubGVmdC5weF09XCJub2RlbGlzdC5zY3JvbGxMZWZ0XCJcclxuICAgICAgICAgW3V4UG9wb3Zlcl09XCJvdmVyZmxvd1wiXHJcbiAgICAgICAgIFtwb3BvdmVyQ29udGV4dF09XCJ7IHBvcG92ZXI6IHBvcG92ZXIgfVwiXHJcbiAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXHJcbiAgICAgICAgIHBvcG92ZXJDbGFzcz1cImhpZXJhcmNoeS1iYXItcG9wb3ZlclwiPlxyXG4gICAgICAgIC4gLiAuXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2ICNub2RlRWxlbWVudCBjbGFzcz1cImhpZXJhcmNoeS1iYXItbm9kZVwiXHJcbiAgICAgICAgICpuZ0Zvcj1cImxldCBub2RlIG9mIGhpZXJhcmNoeUJhci5ub2RlcyQgfCBhc3luY1wiPlxyXG5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiaGllcmFyY2h5LWJhci1ub2RlLWNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJub2RlLnRpdGxlXCJcclxuICAgICAgICAgICAgICAgIChjbGljayk9XCJoaWVyYXJjaHlCYXIuc2VsZWN0Tm9kZShub2RlKVwiPlxyXG5cclxuICAgICAgICAgICAgPCEtLSBTaG93IGFuIGljb24gaWYgc3BlY2lmZWQgLS0+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJoaWVyYXJjaHktYmFyLW5vZGUtaWNvblwiICpuZ0lmPVwibm9kZS5pY29uXCIgW3NyY109XCJub2RlLmljb25cIiBhbHQ9XCJIaWVyYXJjaHkgQmFyIEljb25cIj5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gU2hvdyB0aGUgbmFtZSBvZiB0aGUgY3VycmVudCBub2RlIC0tPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhpZXJhcmNoeS1iYXItbm9kZS10aXRsZVwiPnt7IG5vZGUudGl0bGUgfX08L3NwYW4+XHJcblxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICA8IS0tIFNob3cgYSBkcm9wZG93biBhcnJvdyBpZiB0aGVyZSBhcmUgY2hpbGRyZW4gLS0+XHJcbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIm5vZGUuY2hpbGRyZW5cIlxyXG4gICAgICAgICAgICAgICNwb3BvdmVyPVwidXgtcG9wb3ZlclwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNob3cgY2hpbGRyZW5cIlxyXG4gICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiaGllcmFyY2h5LWJhci1ub2RlLWFycm93IGhwZS1pY29uIGhwZS1uZXh0XCJcclxuICAgICAgICAgICAgICBbdXhQb3BvdmVyXT1cImNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgIFtwb3BvdmVyQ29udGV4dF09XCJ7IG5vZGU6IG5vZGUsIHBvcG92ZXI6IHBvcG92ZXIgfVwiXHJcbiAgICAgICAgICAgICAgcGxhY2VtZW50PVwiYm90dG9tXCJcclxuICAgICAgICAgICAgICBwb3BvdmVyQ2xhc3M9XCJoaWVyYXJjaHktYmFyLXBvcG92ZXJcIlxyXG4gICAgICAgICAgICAgIHRhYmluZGV4PVwiMFwiPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuPC9tYWluPlxyXG5cclxuPCEtLSBBbGxvdyBjb250ZW50IHRvIGJlIHBsYWNlZCBvbiB0aGUgcmlnaHQgb2YgdGhlIGl0ZW1zIC0tPlxyXG48YXNpZGUgY2xhc3M9XCJoaWVyYXJjaHktYmFyLWFkZG9uc1wiPlxyXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3V4SGllcmFyY2h5QmFyUmlnaHRBZGRvbl1cIj48L25nLWNvbnRlbnQ+XHJcbjwvYXNpZGU+XHJcblxyXG48IS0tIFRlbXBsYXRlIGZvciB0aGUgcG9wb3ZlciBsaXN0IC0tPlxyXG48bmctdGVtcGxhdGUgI2NvbnRlbnQgbGV0LW5vZGU9XCJub2RlXCIgbGV0LXBvcG92ZXI9XCJwb3BvdmVyXCI+XHJcblxyXG4gICAgPCEtLSBMb2FkaW5nIEluZGljYXRvciAtLT5cclxuICAgIDx1bCBjbGFzcz1cImhpZXJhcmNoeS1iYXItbm9kZS1saXN0XCIgKm5nSWY9XCIoaGllcmFyY2h5QmFyLmdldENoaWxkcmVuKG5vZGUpIHwgYXN5bmMpLmxvYWRpbmdcIj5cclxuXHJcbiAgICAgICAgPGxpIGNsYXNzPVwiaGllcmFyY2h5LWJhci1ub2RlLWxpc3QtaXRlbVwiPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImxvYWRpbmdJbmRpY2F0b3IgfHwgZGVmYXVsdExvYWRpbmdJbmRpY2F0b3JcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgPC91bD5cclxuXHJcbiAgICA8IS0tIExpc3Qgb2YgY2hpbGRyZW4gLS0+XHJcbiAgICA8dWwgY2xhc3M9XCJoaWVyYXJjaHktYmFyLW5vZGUtbGlzdFwiICpuZ0lmPVwiIShoaWVyYXJjaHlCYXIuZ2V0Q2hpbGRyZW4obm9kZSkgfCBhc3luYykubG9hZGluZ1wiPlxyXG5cclxuICAgICAgICA8bGkgKm5nRm9yPVwibGV0IGNoaWxkIG9mIChoaWVyYXJjaHlCYXIuZ2V0Q2hpbGRyZW4obm9kZSkgfCBhc3luYykuY2hpbGRyZW47IGxldCBmaXJzdCA9IGZpcnN0XCJcclxuICAgICAgICAgICAgY2xhc3M9XCJoaWVyYXJjaHktYmFyLW5vZGUtbGlzdC1pdGVtXCJcclxuICAgICAgICAgICAgW2ZvY3VzSWZdPVwiZmlyc3RcIlxyXG4gICAgICAgICAgICB0YWJpbmRleD1cIjBcIlxyXG4gICAgICAgICAgICAoa2V5ZG93bi5lbnRlcik9XCJoaWVyYXJjaHlCYXIuc2VsZWN0Tm9kZShjaGlsZCk7IHBvcG92ZXIuaGlkZSgpXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cImhpZXJhcmNoeUJhci5zZWxlY3ROb2RlKGNoaWxkKTsgcG9wb3Zlci5oaWRlKClcIj5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gU2hvdyBhbiBpY29uIGlmIHNwZWNpZmVkIC0tPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwiaGllcmFyY2h5LWJhci1ub2RlLWljb25cIiAqbmdJZj1cImNoaWxkLmljb25cIiBbc3JjXT1cImNoaWxkLmljb25cIiBhbHQ9XCJIaWVyYXJjaHkgQmFyIEljb25cIj5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gU2hvdyB0aGUgbmFtZSBvZiB0aGUgY3VycmVudCBub2RlIC0tPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhpZXJhcmNoeS1iYXItbm9kZS10aXRsZVwiPnt7IGNoaWxkLnRpdGxlIH19PC9zcGFuPlxyXG5cclxuICAgICAgICA8L2xpPlxyXG5cclxuICAgIDwvdWw+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48IS0tIFRlbXBsYXRlIGZvciB0aGUgb3ZlcmZsb3cgcG9wb3ZlciBsaXN0IC0tPlxyXG48bmctdGVtcGxhdGUgI292ZXJmbG93IGxldC1wb3BvdmVyPVwicG9wb3ZlclwiPlxyXG5cclxuICAgIDx1bCBjbGFzcz1cImhpZXJhcmNoeS1iYXItbm9kZS1saXN0XCI+XHJcblxyXG4gICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgY2hpbGQgb2Ygb3ZlcmZsb3dOb2RlcyQgfCBhc3luYzsgbGV0IGZpcnN0ID0gZmlyc3RcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImhpZXJhcmNoeS1iYXItbm9kZS1saXN0LWl0ZW1cIlxyXG4gICAgICAgICAgICB0YWJpbmRleD1cIjBcIlxyXG4gICAgICAgICAgICBbZm9jdXNJZl09XCJmaXJzdFwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJoaWVyYXJjaHlCYXIuc2VsZWN0Tm9kZShjaGlsZCk7IHBvcG92ZXIuaGlkZSgpXCJcclxuICAgICAgICAgICAgKGtleWRvd24uZW50ZXIpPVwiaGllcmFyY2h5QmFyLnNlbGVjdE5vZGUoY2hpbGQpOyBwb3BvdmVyLmhpZGUoKVwiPlxyXG5cclxuICAgICAgICAgICAgPCEtLSBTaG93IGFuIGljb24gaWYgc3BlY2lmZWQgLS0+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJoaWVyYXJjaHktYmFyLW5vZGUtaWNvblwiICpuZ0lmPVwiY2hpbGQuaWNvblwiIFtzcmNdPVwiY2hpbGQuaWNvblwiIGFsdD1cIkhpZXJhcmNoeSBCYXIgSWNvblwiPlxyXG5cclxuICAgICAgICAgICAgPCEtLSBTaG93IHRoZSBuYW1lIG9mIHRoZSBjdXJyZW50IG5vZGUgLS0+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGllcmFyY2h5LWJhci1ub2RlLXRpdGxlXCI+e3sgY2hpbGQudGl0bGUgfX08L3NwYW4+XHJcblxyXG4gICAgICAgIDwvbGk+XHJcblxyXG4gICAgPC91bD5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjwhLS0gTG9hZGluZyBJbmRpY2F0b3IgVGVtcGxhdGUgLS0+XHJcbjxuZy10ZW1wbGF0ZSAjZGVmYXVsdExvYWRpbmdJbmRpY2F0b3I+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaGllcmFyY2h5LWJhci1ub2RlLWljb25cIiBhbHQ9XCJIaWVyYXJjaHkgQmFyIExvYWRpbmcgSW5kaWNhdG9yXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXIgc3Bpbm5lci1hY2NlbnQgc3Bpbm5lci1ib3VuY2UtbWlkZGxlXCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8IS0tIFNob3cgdGhlIG5hbWUgb2YgdGhlIGN1cnJlbnQgbm9kZSAtLT5cclxuICAgIDxzcGFuIGNsYXNzPVwiaGllcmFyY2h5LWJhci1ub2RlLXRpdGxlXCI+TG9hZGluZy4uLjwvc3Bhbj5cclxuPC9uZy10ZW1wbGF0ZT5gLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgICB2aWV3UHJvdmlkZXJzOiBbSGllcmFyY2h5QmFyU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhpZXJhcmNoeUJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcblxyXG4gICAgQElucHV0KCkgc2V0IHJvb3Qobm9kZTogSGllcmFyY2h5QmFyTm9kZSkge1xyXG4gICAgICAgIHRoaXMuaGllcmFyY2h5QmFyLnNldFJvb3ROb2RlKG5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpIHNldCBzZWxlY3RlZChub2RlOiBIaWVyYXJjaHlCYXJOb2RlKSB7XHJcbiAgICAgICAgdGhpcy5oaWVyYXJjaHlCYXIuc2VsZWN0Tm9kZShub2RlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKSBsb2FkaW5nSW5kaWNhdG9yOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICAgIEBPdXRwdXQoKSBzZWxlY3RlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8SGllcmFyY2h5QmFyTm9kZT4oKTtcclxuICAgIEBWaWV3Q2hpbGQoJ25vZGVsaXN0Jykgbm9kZWxpc3Q6IEVsZW1lbnRSZWY7XHJcbiAgICBAVmlld0NoaWxkcmVuKCdub2RlRWxlbWVudCcpIG5vZGVzOiBRdWVyeUxpc3Q8RWxlbWVudFJlZj47XHJcblxyXG4gICAgb3ZlcmZsb3ckID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XHJcbiAgICBvdmVyZmxvd05vZGVzJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8SGllcmFyY2h5QmFyTm9kZVtdPihbXSk7XHJcblxyXG4gICAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBoaWVyYXJjaHlCYXI6IEhpZXJhcmNoeUJhclNlcnZpY2UpIHtcclxuXHJcbiAgICAgICAgLy8gc3Vic2NyaWJlIHRvIGNoYW5nZXMgaW4gdGhlIHNlbGVjdGVkIG5vZGVcclxuICAgICAgICBjb25zdCBzZWxlY3RlZCA9IGhpZXJhcmNoeUJhci5ub2RlcyQuc3Vic2NyaWJlKG5vZGVzID0+IHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdChub2Rlcy5sZW5ndGggPT09IDAgPyBudWxsIDogbm9kZXNbbm9kZXMubGVuZ3RoIC0gMV0pKTtcclxuICAgICAgICBjb25zdCBjaGFuZ2VkID0gaGllcmFyY2h5QmFyLm5vZGVzJC5waXBlKGRlYm91bmNlVGltZSgwKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2Nyb2xsSW50b1ZpZXcoKSk7XHJcblxyXG4gICAgICAgIC8vIHN0b3JlIHN1YnNjcmlwdGlvbnNcclxuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb24uYWRkKHNlbGVjdGVkKTtcclxuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb24uYWRkKGNoYW5nZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2hlbiB0aGVyZSBpcyBvdmVyZmxvdyBlbnN1cmUgdGhhdCB0aGUgcmlnaHRtb3N0XHJcbiAgICAgKiBub2RlIHJlbWFpbnMgaW4gdmlldyBhdCBhbGwgdGltZXMuIFRoZSBub2RlcyBubyBsb25nZXJcclxuICAgICAqIHZpc2libGUgYmUgYmUgZGlzcGxheWVkIGluIGEgcG9wb3ZlciBhdmFpbGFibGUgb24gdGhlXHJcbiAgICAgKiBvdmVyZmxvdyBpbmRpY2F0b3JcclxuICAgICAqL1xyXG4gICAgc2Nyb2xsSW50b1ZpZXcoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5ub2RlbGlzdCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBnZXQgdGhlIG5hdGl2ZSBlbGVtZW50XHJcbiAgICAgICAgY29uc3QgeyBuYXRpdmVFbGVtZW50IH0gPSB0aGlzLm5vZGVsaXN0O1xyXG5cclxuICAgICAgICAvLyBlbWl0IHdoZXRoZXIgb3Igbm90IHRoZXJlIGlzIG92ZXJmbG93XHJcbiAgICAgICAgdGhpcy5vdmVyZmxvdyQubmV4dChuYXRpdmVFbGVtZW50LnNjcm9sbFdpZHRoID4gbmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCk7XHJcblxyXG4gICAgICAgIC8vIGlmIHRoZSBoaWVyYXJjaHkgYmFyIGNvbnRlbnRzIGRvIG5vdCBvdmVyZmxvdyB0aGVuIGRvIG5vdGhpbmdcclxuICAgICAgICBpZiAobmF0aXZlRWxlbWVudC5zY3JvbGxXaWR0aCA+IG5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGgpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIGRldGVybWluZSB0aGUgYW1vdW50IG9mIG92ZXJmbG93XHJcbiAgICAgICAgICAgIGNvbnN0IG92ZXJmbG93QW1vdW50ID0gbmF0aXZlRWxlbWVudC5zY3JvbGxXaWR0aCAtIG5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XHJcblxyXG4gICAgICAgICAgICAvLyBkZXRlcm1pbmUgd2hpY2ggbm9kZXMgYXJlIG5vdCBmdWxseSB2aXNpYmxlXHJcbiAgICAgICAgICAgIHRoaXMub3ZlcmZsb3dOb2RlcyQubmV4dChcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZXMuZmlsdGVyKG5vZGUgPT4gbm9kZS5uYXRpdmVFbGVtZW50Lm9mZnNldExlZnQgPCBvdmVyZmxvd0Ftb3VudClcclxuICAgICAgICAgICAgICAgICAgICAubWFwKChub2RlLCBpbmRleCkgPT4gdGhpcy5oaWVyYXJjaHlCYXIubm9kZXMkLnZhbHVlW2luZGV4XSlcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIG1vdmUgdGhlIHNjcm9sbCBwb3NpdGlvbiB0byBhbHdheXMgc2hvdyB0aGUgbGFzdCBpdG1lXHJcbiAgICAgICAgICAgIHRoaXMubm9kZWxpc3QubmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0ID0gb3ZlcmZsb3dBbW91bnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19