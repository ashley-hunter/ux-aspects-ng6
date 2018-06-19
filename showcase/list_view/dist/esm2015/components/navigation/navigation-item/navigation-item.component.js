/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChildren, ElementRef, HostBinding, Input, Optional, QueryList, Renderer2, SkipSelf } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
export class NavigationItemComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} _parent
     * @param {?} _router
     * @param {?} _activatedRoute
     */
    constructor(_elementRef, _renderer, _parent, _router, _activatedRoute) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._parent = _parent;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this.expanded = false;
        this.level = 1;
        this.indentWithoutArrow = true;
        this.level = _parent ? _parent.level + 1 : 1;
        this._navigationEnd = _router.events.pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(() => this.expanded = this.hasActiveLink(this.link));
    }
    /**
     * @return {?}
     */
    get active() {
        if (this.link) {
            return this._router.isActive(this.link, true);
        }
    }
    /**
     * @return {?}
     */
    get children() {
        return this._children.filter(item => item !== this);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // Add classes to parent for styling
        const /** @type {?} */ parentListElement = this._elementRef.nativeElement.parentElement;
        if (parentListElement) {
            const /** @type {?} */ levelClass = this.getLevelClass();
            if (levelClass.length > 0) {
                this._renderer.addClass(parentListElement, 'nav');
                this._renderer.addClass(parentListElement, levelClass);
            }
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        // Set 'indentWithoutArrow'
        this.setIndentWithoutArrow();
        // Update 'indentWithoutArrow' in response to changes to children
        this._childrenChanges = this._children.changes.subscribe(() => this.setIndentWithoutArrow());
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._navigationEnd.unsubscribe();
        this._childrenChanges.unsubscribe();
    }
    /**
     * @param {?} link
     * @return {?}
     */
    hasActiveLink(link) {
        const /** @type {?} */ tree = this._router.createUrlTree([link], {
            relativeTo: this._activatedRoute,
            queryParams: this._activatedRoute.snapshot.queryParams,
            fragment: this._activatedRoute.snapshot.fragment
        });
        if (link && this._router.isActive(tree, true)) {
            return true;
        }
        // If this component has children, check if any of them, or their descendants, are active.
        return this.children.some((item) => item.hasActiveLink(item.link));
    }
    /**
     * @return {?}
     */
    getLevelClass() {
        switch (this.level) {
            case 2:
                return 'nav-second-level';
            case 3:
                return 'nav-third-level';
            case 4:
                return 'nav-fourth-level';
            case 5:
                return 'nav-fifth-level';
        }
        return '';
    }
    /**
     * @return {?}
     */
    setIndentWithoutArrow() {
        if (this.children.length > 0) {
            // If this element has children it will be indented and will have an arrow
            this.indentWithoutArrow = false;
        }
        else if (this._parent) {
            // If this element has a parent, indent it if any of its siblings have children
            this.indentWithoutArrow = !this._parent.children.every((item) => item.children.length === 0);
        }
        else {
            // Top-level elements should be indented
            this.indentWithoutArrow = true;
        }
    }
}
NavigationItemComponent.decorators = [
    { type: Component, args: [{
                selector: '[ux-navigation-item]',
                template: `<a *ngIf="link" [class.has-arrow]="children.length > 0" [class.no-arrow]="indentWithoutArrow" [routerLink]="link">
    <span>{{header}}</span>
</a>
<a *ngIf="!link" (click)="expanded = !expanded" [class.has-arrow]="children.length > 0" [class.no-arrow]="indentWithoutArrow">
    <span>{{header}}</span>
</a>
<ng-content></ng-content>
`,
            },] },
];
/** @nocollapse */
NavigationItemComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: NavigationItemComponent, decorators: [{ type: Optional }, { type: SkipSelf },] },
    { type: Router, },
    { type: ActivatedRoute, },
];
NavigationItemComponent.propDecorators = {
    "header": [{ type: Input },],
    "icon": [{ type: Input },],
    "link": [{ type: Input },],
    "expanded": [{ type: Input }, { type: HostBinding, args: ['class.selected',] },],
    "active": [{ type: HostBinding, args: ['class.active',] },],
    "_children": [{ type: ContentChildren, args: [NavigationItemComponent, { descendants: true },] },],
};
function NavigationItemComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    NavigationItemComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    NavigationItemComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    NavigationItemComponent.propDecorators;
    /** @type {?} */
    NavigationItemComponent.prototype.header;
    /** @type {?} */
    NavigationItemComponent.prototype.icon;
    /** @type {?} */
    NavigationItemComponent.prototype.link;
    /** @type {?} */
    NavigationItemComponent.prototype.expanded;
    /** @type {?} */
    NavigationItemComponent.prototype.level;
    /** @type {?} */
    NavigationItemComponent.prototype.indentWithoutArrow;
    /** @type {?} */
    NavigationItemComponent.prototype._navigationEnd;
    /** @type {?} */
    NavigationItemComponent.prototype._childrenChanges;
    /** @type {?} */
    NavigationItemComponent.prototype._children;
    /** @type {?} */
    NavigationItemComponent.prototype._elementRef;
    /** @type {?} */
    NavigationItemComponent.prototype._renderer;
    /** @type {?} */
    NavigationItemComponent.prototype._parent;
    /** @type {?} */
    NavigationItemComponent.prototype._router;
    /** @type {?} */
    NavigationItemComponent.prototype._activatedRoute;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi1pdGVtL25hdmlnYXRpb24taXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBbUMsU0FBUyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBYSxRQUFRLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakwsT0FBTyxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFXLE1BQU0saUJBQWlCLENBQUM7QUFDakYsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBY3hDLE1BQU07Ozs7Ozs7O0lBMkJGLFlBQ1ksYUFDQSxXQUN3QixTQUN4QixTQUNBO1FBSkEsZ0JBQVcsR0FBWCxXQUFXO1FBQ1gsY0FBUyxHQUFULFNBQVM7UUFDZSxZQUFPLEdBQVAsT0FBTztRQUMvQixZQUFPLEdBQVAsT0FBTztRQUNQLG9CQUFlLEdBQWYsZUFBZTt3QkEzQmlDLEtBQUs7cUJBU2pELENBQUM7a0NBQ2EsSUFBSTtRQW1COUIsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFN0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLFlBQVksYUFBYSxDQUFDLENBQUM7YUFDckYsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJ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RTNCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7U0FDbkM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7O1lBRXRCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDaEc7UUFBQyxJQUFJLENBQUMsQ0FBQzs7WUFFSixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1NBQ2xDOzs7O1lBckhSLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUU7Ozs7Ozs7Q0FPYjthQUNBOzs7O1lBZnFFLFVBQVU7WUFBc0QsU0FBUztZQWdCbEksdUJBQXVCLHVCQThCM0IsUUFBUSxZQUFJLFFBQVE7WUE3Q1csTUFBTTtZQUFyQyxjQUFjOzs7dUJBaUJsQixLQUFLO3FCQUNMLEtBQUs7cUJBQ0wsS0FBSzt5QkFDTCxLQUFLLFlBQUksV0FBVyxTQUFDLGdCQUFnQjt1QkFFckMsV0FBVyxTQUFDLGNBQWM7MEJBYTFCLGVBQWUsU0FBQyx1QkFBdUIsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkRlc3Ryb3ksIE9wdGlvbmFsLCBRdWVyeUxpc3QsIFJlbmRlcmVyMiwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIE5hdmlnYXRpb25FbmQsIFJvdXRlciwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnW3V4LW5hdmlnYXRpb24taXRlbV0nLFxyXG4gICAgdGVtcGxhdGU6IGA8YSAqbmdJZj1cImxpbmtcIiBbY2xhc3MuaGFzLWFycm93XT1cImNoaWxkcmVuLmxlbmd0aCA+IDBcIiBbY2xhc3Mubm8tYXJyb3ddPVwiaW5kZW50V2l0aG91dEFycm93XCIgW3JvdXRlckxpbmtdPVwibGlua1wiPlxyXG4gICAgPHNwYW4+e3toZWFkZXJ9fTwvc3Bhbj5cclxuPC9hPlxyXG48YSAqbmdJZj1cIiFsaW5rXCIgKGNsaWNrKT1cImV4cGFuZGVkID0gIWV4cGFuZGVkXCIgW2NsYXNzLmhhcy1hcnJvd109XCJjaGlsZHJlbi5sZW5ndGggPiAwXCIgW2NsYXNzLm5vLWFycm93XT1cImluZGVudFdpdGhvdXRBcnJvd1wiPlxyXG4gICAgPHNwYW4+e3toZWFkZXJ9fTwvc3Bhbj5cclxuPC9hPlxyXG48bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbmAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gICAgQElucHV0KCkgaGVhZGVyOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBsaW5rOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbGVjdGVkJykgZXhwYW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFjdGl2ZScpXHJcbiAgICBnZXQgYWN0aXZlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLmxpbmspIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JvdXRlci5pc0FjdGl2ZSh0aGlzLmxpbmssIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXZlbDogbnVtYmVyID0gMTtcclxuICAgIGluZGVudFdpdGhvdXRBcnJvdzogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgcHJpdmF0ZSBfbmF2aWdhdGlvbkVuZDogU3Vic2NyaXB0aW9uO1xyXG4gICAgcHJpdmF0ZSBfY2hpbGRyZW5DaGFuZ2VzOiBTdWJzY3JpcHRpb247XHJcblxyXG4gICAgQENvbnRlbnRDaGlsZHJlbihOYXZpZ2F0aW9uSXRlbUNvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxyXG4gICAgcHJpdmF0ZSBfY2hpbGRyZW46IFF1ZXJ5TGlzdDxOYXZpZ2F0aW9uSXRlbUNvbXBvbmVudD47XHJcblxyXG4gICAgZ2V0IGNoaWxkcmVuKCk6IE5hdmlnYXRpb25JdGVtQ29tcG9uZW50W10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jaGlsZHJlbi5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICAgICAgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHJpdmF0ZSBfcGFyZW50OiBOYXZpZ2F0aW9uSXRlbUNvbXBvbmVudCxcclxuICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIF9hY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGVcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMubGV2ZWwgPSBfcGFyZW50ID8gX3BhcmVudC5sZXZlbCArIDEgOiAxO1xyXG5cclxuICAgICAgICB0aGlzLl9uYXZpZ2F0aW9uRW5kID0gX3JvdXRlci5ldmVudHMucGlwZShmaWx0ZXIoZXZlbnQgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmV4cGFuZGVkID0gdGhpcy5oYXNBY3RpdmVMaW5rKHRoaXMubGluaykpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBBZGQgY2xhc3NlcyB0byBwYXJlbnQgZm9yIHN0eWxpbmdcclxuICAgICAgICBjb25zdCBwYXJlbnRMaXN0RWxlbWVudCA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIGlmIChwYXJlbnRMaXN0RWxlbWVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBsZXZlbENsYXNzOiBzdHJpbmcgPSB0aGlzLmdldExldmVsQ2xhc3MoKTtcclxuICAgICAgICAgICAgaWYgKGxldmVsQ2xhc3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MocGFyZW50TGlzdEVsZW1lbnQsICduYXYnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHBhcmVudExpc3RFbGVtZW50LCBsZXZlbENsYXNzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gU2V0ICdpbmRlbnRXaXRob3V0QXJyb3cnXHJcbiAgICAgICAgdGhpcy5zZXRJbmRlbnRXaXRob3V0QXJyb3coKTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlICdpbmRlbnRXaXRob3V0QXJyb3cnIGluIHJlc3BvbnNlIHRvIGNoYW5nZXMgdG8gY2hpbGRyZW5cclxuICAgICAgICB0aGlzLl9jaGlsZHJlbkNoYW5nZXMgPSB0aGlzLl9jaGlsZHJlbi5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLnNldEluZGVudFdpdGhvdXRBcnJvdygpKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9uYXZpZ2F0aW9uRW5kLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgdGhpcy5fY2hpbGRyZW5DaGFuZ2VzLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYXNBY3RpdmVMaW5rKGxpbms6IHN0cmluZyB8IFVybFRyZWUpOiBib29sZWFuIHtcclxuXHJcbiAgICAgICAgY29uc3QgdHJlZSA9IHRoaXMuX3JvdXRlci5jcmVhdGVVcmxUcmVlKFtsaW5rXSwge1xyXG4gICAgICAgICAgICByZWxhdGl2ZVRvOiB0aGlzLl9hY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHRoaXMuX2FjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zLFxyXG4gICAgICAgICAgICBmcmFnbWVudDogdGhpcy5fYWN0aXZhdGVkUm91dGUuc25hcHNob3QuZnJhZ21lbnRcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGxpbmsgJiYgdGhpcy5fcm91dGVyLmlzQWN0aXZlKHRyZWUsIHRydWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgdGhpcyBjb21wb25lbnQgaGFzIGNoaWxkcmVuLCBjaGVjayBpZiBhbnkgb2YgdGhlbSwgb3IgdGhlaXIgZGVzY2VuZGFudHMsIGFyZSBhY3RpdmUuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4uc29tZSgoaXRlbSkgPT4gaXRlbS5oYXNBY3RpdmVMaW5rKGl0ZW0ubGluaykpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TGV2ZWxDbGFzcygpOiBzdHJpbmcge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5sZXZlbCkge1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ25hdi1zZWNvbmQtbGV2ZWwnO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ25hdi10aGlyZC1sZXZlbCc7XHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnbmF2LWZvdXJ0aC1sZXZlbCc7XHJcbiAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnbmF2LWZpZnRoLWxldmVsJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEluZGVudFdpdGhvdXRBcnJvdygpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIC8vIElmIHRoaXMgZWxlbWVudCBoYXMgY2hpbGRyZW4gaXQgd2lsbCBiZSBpbmRlbnRlZCBhbmQgd2lsbCBoYXZlIGFuIGFycm93XHJcbiAgICAgICAgICAgIHRoaXMuaW5kZW50V2l0aG91dEFycm93ID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9wYXJlbnQpIHtcclxuICAgICAgICAgICAvLyBJZiB0aGlzIGVsZW1lbnQgaGFzIGEgcGFyZW50LCBpbmRlbnQgaXQgaWYgYW55IG9mIGl0cyBzaWJsaW5ncyBoYXZlIGNoaWxkcmVuXHJcbiAgICAgICAgICAgIHRoaXMuaW5kZW50V2l0aG91dEFycm93ID0gIXRoaXMuX3BhcmVudC5jaGlsZHJlbi5ldmVyeSgoaXRlbSkgPT4gaXRlbS5jaGlsZHJlbi5sZW5ndGggPT09IDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFRvcC1sZXZlbCBlbGVtZW50cyBzaG91bGQgYmUgaW5kZW50ZWRcclxuICAgICAgICAgICAgdGhpcy5pbmRlbnRXaXRob3V0QXJyb3cgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=