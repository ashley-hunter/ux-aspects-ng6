/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChildren, ElementRef, HostBinding, Input, Optional, QueryList, Renderer2, SkipSelf } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
var NavigationItemComponent = /** @class */ (function () {
    function NavigationItemComponent(_elementRef, _renderer, _parent, _router, _activatedRoute) {
        var _this = this;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._parent = _parent;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this.expanded = false;
        this.level = 1;
        this.indentWithoutArrow = true;
        this.level = _parent ? _parent.level + 1 : 1;
        this._navigationEnd = _router.events.pipe(filter(function (event) { return event instanceof NavigationEnd; }))
            .subscribe(function () { return _this.expanded = _this.hasActiveLink(_this.link); });
    }
    Object.defineProperty(NavigationItemComponent.prototype, "active", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.link) {
                return this._router.isActive(this.link, true);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavigationItemComponent.prototype, "children", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            return this._children.filter(function (item) { return item !== _this; });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NavigationItemComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        // Add classes to parent for styling
        var /** @type {?} */ parentListElement = this._elementRef.nativeElement.parentElement;
        if (parentListElement) {
            var /** @type {?} */ levelClass = this.getLevelClass();
            if (levelClass.length > 0) {
                this._renderer.addClass(parentListElement, 'nav');
                this._renderer.addClass(parentListElement, levelClass);
            }
        }
    };
    /**
     * @return {?}
     */
    NavigationItemComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Set 'indentWithoutArrow'
        this.setIndentWithoutArrow();
        // Update 'indentWithoutArrow' in response to changes to children
        this._childrenChanges = this._children.changes.subscribe(function () { return _this.setIndentWithoutArrow(); });
    };
    /**
     * @return {?}
     */
    NavigationItemComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._navigationEnd.unsubscribe();
        this._childrenChanges.unsubscribe();
    };
    /**
     * @param {?} link
     * @return {?}
     */
    NavigationItemComponent.prototype.hasActiveLink = /**
     * @param {?} link
     * @return {?}
     */
    function (link) {
        var /** @type {?} */ tree = this._router.createUrlTree([link], {
            relativeTo: this._activatedRoute,
            queryParams: this._activatedRoute.snapshot.queryParams,
            fragment: this._activatedRoute.snapshot.fragment
        });
        if (link && this._router.isActive(tree, true)) {
            return true;
        }
        // If this component has children, check if any of them, or their descendants, are active.
        return this.children.some(function (item) { return item.hasActiveLink(item.link); });
    };
    /**
     * @return {?}
     */
    NavigationItemComponent.prototype.getLevelClass = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    NavigationItemComponent.prototype.setIndentWithoutArrow = /**
     * @return {?}
     */
    function () {
        if (this.children.length > 0) {
            // If this element has children it will be indented and will have an arrow
            this.indentWithoutArrow = false;
        }
        else if (this._parent) {
            // If this element has a parent, indent it if any of its siblings have children
            this.indentWithoutArrow = !this._parent.children.every(function (item) { return item.children.length === 0; });
        }
        else {
            // Top-level elements should be indented
            this.indentWithoutArrow = true;
        }
    };
    NavigationItemComponent.decorators = [
        { type: Component, args: [{
                    selector: '[ux-navigation-item]',
                    template: "<a *ngIf=\"link\" [class.has-arrow]=\"children.length > 0\" [class.no-arrow]=\"indentWithoutArrow\" [routerLink]=\"link\">\n    <span>{{header}}</span>\n</a>\n<a *ngIf=\"!link\" (click)=\"expanded = !expanded\" [class.has-arrow]=\"children.length > 0\" [class.no-arrow]=\"indentWithoutArrow\">\n    <span>{{header}}</span>\n</a>\n<ng-content></ng-content>\n",
                },] },
    ];
    /** @nocollapse */
    NavigationItemComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer2, },
        { type: NavigationItemComponent, decorators: [{ type: Optional }, { type: SkipSelf },] },
        { type: Router, },
        { type: ActivatedRoute, },
    ]; };
    NavigationItemComponent.propDecorators = {
        "header": [{ type: Input },],
        "icon": [{ type: Input },],
        "link": [{ type: Input },],
        "expanded": [{ type: Input }, { type: HostBinding, args: ['class.selected',] },],
        "active": [{ type: HostBinding, args: ['class.active',] },],
        "_children": [{ type: ContentChildren, args: [NavigationItemComponent, { descendants: true },] },],
    };
    return NavigationItemComponent;
}());
export { NavigationItemComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi1pdGVtL25hdmlnYXRpb24taXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBbUMsU0FBUyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBYSxRQUFRLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakwsT0FBTyxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFXLE1BQU0saUJBQWlCLENBQUM7QUFDakYsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDOztJQXlDcEMsaUNBQ1ksYUFDQSxXQUN3QixTQUN4QixTQUNBO1FBTFosaUJBV0M7UUFWVyxnQkFBVyxHQUFYLFdBQVc7UUFDWCxjQUFTLEdBQVQsU0FBUztRQUNlLFlBQU8sR0FBUCxPQUFPO1FBQy9CLFlBQU8sR0FBUCxPQUFPO1FBQ1Asb0JBQWUsR0FBZixlQUFlO3dCQTNCaUMsS0FBSztxQkFTakQsQ0FBQztrQ0FDYSxJQUFJO1FBbUI5QixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU3QyxJQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssWUFBWSxhQUFhLEVBQTlCLENBQThCLENBQUMsQ0FBQzthQUNyRixTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FB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QUVELE1BQU0sQ0FBQyxFQUFFLENBQUM7Ozs7O0lBR04sdURBQXFCOzs7O1FBQ3pCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7O1lBRTNCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7U0FDbkM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7O1lBRXRCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFDO1NBQ2hHO1FBQUMsSUFBSSxDQUFDLENBQUM7O1lBRUosSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztTQUNsQzs7O2dCQXJIUixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsUUFBUSxFQUFFLHVXQU9iO2lCQUNBOzs7O2dCQWZxRSxVQUFVO2dCQUFzRCxTQUFTO2dCQWdCbEksdUJBQXVCLHVCQThCM0IsUUFBUSxZQUFJLFFBQVE7Z0JBN0NXLE1BQU07Z0JBQXJDLGNBQWM7OzsyQkFpQmxCLEtBQUs7eUJBQ0wsS0FBSzt5QkFDTCxLQUFLOzZCQUNMLEtBQUssWUFBSSxXQUFXLFNBQUMsZ0JBQWdCOzJCQUVyQyxXQUFXLFNBQUMsY0FBYzs4QkFhMUIsZUFBZSxTQUFDLHVCQUF1QixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTs7a0NBcENuRTs7U0FnQmEsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25EZXN0cm95LCBPcHRpb25hbCwgUXVlcnlMaXN0LCBSZW5kZXJlcjIsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXIsIFVybFRyZWUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ1t1eC1uYXZpZ2F0aW9uLWl0ZW1dJyxcclxuICAgIHRlbXBsYXRlOiBgPGEgKm5nSWY9XCJsaW5rXCIgW2NsYXNzLmhhcy1hcnJvd109XCJjaGlsZHJlbi5sZW5ndGggPiAwXCIgW2NsYXNzLm5vLWFycm93XT1cImluZGVudFdpdGhvdXRBcnJvd1wiIFtyb3V0ZXJMaW5rXT1cImxpbmtcIj5cclxuICAgIDxzcGFuPnt7aGVhZGVyfX08L3NwYW4+XHJcbjwvYT5cclxuPGEgKm5nSWY9XCIhbGlua1wiIChjbGljayk9XCJleHBhbmRlZCA9ICFleHBhbmRlZFwiIFtjbGFzcy5oYXMtYXJyb3ddPVwiY2hpbGRyZW4ubGVuZ3RoID4gMFwiIFtjbGFzcy5uby1hcnJvd109XCJpbmRlbnRXaXRob3V0QXJyb3dcIj5cclxuICAgIDxzcGFuPnt7aGVhZGVyfX08L3NwYW4+XHJcbjwvYT5cclxuPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG5gLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbkl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAgIEBJbnB1dCgpIGhlYWRlcjogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgbGluazogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5zZWxlY3RlZCcpIGV4cGFuZGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKVxyXG4gICAgZ2V0IGFjdGl2ZSgpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5saW5rKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yb3V0ZXIuaXNBY3RpdmUodGhpcy5saW5rLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV2ZWw6IG51bWJlciA9IDE7XHJcbiAgICBpbmRlbnRXaXRob3V0QXJyb3c6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIHByaXZhdGUgX25hdmlnYXRpb25FbmQ6IFN1YnNjcmlwdGlvbjtcclxuICAgIHByaXZhdGUgX2NoaWxkcmVuQ2hhbmdlczogU3Vic2NyaXB0aW9uO1xyXG5cclxuICAgIEBDb250ZW50Q2hpbGRyZW4oTmF2aWdhdGlvbkl0ZW1Db21wb25lbnQsIHsgZGVzY2VuZGFudHM6IHRydWUgfSlcclxuICAgIHByaXZhdGUgX2NoaWxkcmVuOiBRdWVyeUxpc3Q8TmF2aWdhdGlvbkl0ZW1Db21wb25lbnQ+O1xyXG5cclxuICAgIGdldCBjaGlsZHJlbigpOiBOYXZpZ2F0aW9uSXRlbUNvbXBvbmVudFtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2hpbGRyZW4uZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgICAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgICAgIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHByaXZhdGUgX3BhcmVudDogTmF2aWdhdGlvbkl0ZW1Db21wb25lbnQsXHJcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBfYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmxldmVsID0gX3BhcmVudCA/IF9wYXJlbnQubGV2ZWwgKyAxIDogMTtcclxuXHJcbiAgICAgICAgdGhpcy5fbmF2aWdhdGlvbkVuZCA9IF9yb3V0ZXIuZXZlbnRzLnBpcGUoZmlsdGVyKGV2ZW50ID0+IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5leHBhbmRlZCA9IHRoaXMuaGFzQWN0aXZlTGluayh0aGlzLmxpbmspKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gQWRkIGNsYXNzZXMgdG8gcGFyZW50IGZvciBzdHlsaW5nXHJcbiAgICAgICAgY29uc3QgcGFyZW50TGlzdEVsZW1lbnQgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgICBpZiAocGFyZW50TGlzdEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgbGV2ZWxDbGFzczogc3RyaW5nID0gdGhpcy5nZXRMZXZlbENsYXNzKCk7XHJcbiAgICAgICAgICAgIGlmIChsZXZlbENsYXNzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHBhcmVudExpc3RFbGVtZW50LCAnbmF2Jyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhwYXJlbnRMaXN0RWxlbWVudCwgbGV2ZWxDbGFzcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIFNldCAnaW5kZW50V2l0aG91dEFycm93J1xyXG4gICAgICAgIHRoaXMuc2V0SW5kZW50V2l0aG91dEFycm93KCk7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSAnaW5kZW50V2l0aG91dEFycm93JyBpbiByZXNwb25zZSB0byBjaGFuZ2VzIHRvIGNoaWxkcmVuXHJcbiAgICAgICAgdGhpcy5fY2hpbGRyZW5DaGFuZ2VzID0gdGhpcy5fY2hpbGRyZW4uY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zZXRJbmRlbnRXaXRob3V0QXJyb3coKSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fbmF2aWdhdGlvbkVuZC51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIHRoaXMuX2NoaWxkcmVuQ2hhbmdlcy51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFzQWN0aXZlTGluayhsaW5rOiBzdHJpbmcgfCBVcmxUcmVlKTogYm9vbGVhbiB7XHJcblxyXG4gICAgICAgIGNvbnN0IHRyZWUgPSB0aGlzLl9yb3V0ZXIuY3JlYXRlVXJsVHJlZShbbGlua10sIHtcclxuICAgICAgICAgICAgcmVsYXRpdmVUbzogdGhpcy5fYWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB0aGlzLl9hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtcyxcclxuICAgICAgICAgICAgZnJhZ21lbnQ6IHRoaXMuX2FjdGl2YXRlZFJvdXRlLnNuYXBzaG90LmZyYWdtZW50XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChsaW5rICYmIHRoaXMuX3JvdXRlci5pc0FjdGl2ZSh0cmVlLCB0cnVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIHRoaXMgY29tcG9uZW50IGhhcyBjaGlsZHJlbiwgY2hlY2sgaWYgYW55IG9mIHRoZW0sIG9yIHRoZWlyIGRlc2NlbmRhbnRzLCBhcmUgYWN0aXZlLlxyXG4gICAgICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLnNvbWUoKGl0ZW0pID0+IGl0ZW0uaGFzQWN0aXZlTGluayhpdGVtLmxpbmspKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldExldmVsQ2xhc3MoKTogc3RyaW5nIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMubGV2ZWwpIHtcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICduYXYtc2Vjb25kLWxldmVsJztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICduYXYtdGhpcmQtbGV2ZWwnO1xyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ25hdi1mb3VydGgtbGV2ZWwnO1xyXG4gICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ25hdi1maWZ0aC1sZXZlbCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRJbmRlbnRXaXRob3V0QXJyb3coKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAvLyBJZiB0aGlzIGVsZW1lbnQgaGFzIGNoaWxkcmVuIGl0IHdpbGwgYmUgaW5kZW50ZWQgYW5kIHdpbGwgaGF2ZSBhbiBhcnJvd1xyXG4gICAgICAgICAgICB0aGlzLmluZGVudFdpdGhvdXRBcnJvdyA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fcGFyZW50KSB7XHJcbiAgICAgICAgICAgLy8gSWYgdGhpcyBlbGVtZW50IGhhcyBhIHBhcmVudCwgaW5kZW50IGl0IGlmIGFueSBvZiBpdHMgc2libGluZ3MgaGF2ZSBjaGlsZHJlblxyXG4gICAgICAgICAgICB0aGlzLmluZGVudFdpdGhvdXRBcnJvdyA9ICF0aGlzLl9wYXJlbnQuY2hpbGRyZW4uZXZlcnkoKGl0ZW0pID0+IGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID09PSAwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBUb3AtbGV2ZWwgZWxlbWVudHMgc2hvdWxkIGJlIGluZGVudGVkXHJcbiAgICAgICAgICAgIHRoaXMuaW5kZW50V2l0aG91dEFycm93ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19