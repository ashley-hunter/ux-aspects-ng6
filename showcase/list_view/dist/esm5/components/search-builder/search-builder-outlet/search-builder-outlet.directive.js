/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ComponentFactoryResolver, Directive, Input, ViewContainerRef } from '@angular/core';
import { SearchBuilderService } from '../search-builder.service';
var SearchBuilderOutletDirective = /** @class */ (function () {
    function SearchBuilderOutletDirective(_viewContainerRef, _componentFactoryResolver, _searchBuilderService) {
        this._viewContainerRef = _viewContainerRef;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._searchBuilderService = _searchBuilderService;
    }
    /**
     * @return {?}
     */
    SearchBuilderOutletDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // get the class from the type
        var /** @type {?} */ componentDefinition = this._searchBuilderService.getComponent(this.uxSearchBuilderOutlet);
        // create the component factory
        var /** @type {?} */ componentFactory = this._componentFactoryResolver.resolveComponentFactory(componentDefinition.component);
        // create the component instance
        this._componentRef = this._viewContainerRef.createComponent(componentFactory);
        // combine the predefined config with any dynmaic config
        var /** @type {?} */ config = Object.assign({}, componentDefinition.config, this.uxSearchBuilderOutletContext.config || {});
        // set the context and config property on the component instance
        this._componentRef.instance.context = this.uxSearchBuilderOutletContext;
        this._componentRef.instance.config = config;
    };
    SearchBuilderOutletDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[uxSearchBuilderOutlet]'
                },] },
    ];
    /** @nocollapse */
    SearchBuilderOutletDirective.ctorParameters = function () { return [
        { type: ViewContainerRef, },
        { type: ComponentFactoryResolver, },
        { type: SearchBuilderService, },
    ]; };
    SearchBuilderOutletDirective.propDecorators = {
        "uxSearchBuilderOutlet": [{ type: Input },],
        "uxSearchBuilderOutletContext": [{ type: Input },],
    };
    return SearchBuilderOutletDirective;
}());
export { SearchBuilderOutletDirective };
function SearchBuilderOutletDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SearchBuilderOutletDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SearchBuilderOutletDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    SearchBuilderOutletDirective.propDecorators;
    /** @type {?} */
    SearchBuilderOutletDirective.prototype.uxSearchBuilderOutlet;
    /** @type {?} */
    SearchBuilderOutletDirective.prototype.uxSearchBuilderOutletContext;
    /** @type {?} */
    SearchBuilderOutletDirective.prototype._componentRef;
    /** @type {?} */
    SearchBuilderOutletDirective.prototype._viewContainerRef;
    /** @type {?} */
    SearchBuilderOutletDirective.prototype._componentFactoryResolver;
    /** @type {?} */
    SearchBuilderOutletDirective.prototype._searchBuilderService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJ1aWxkZXItb3V0bGV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3NlYXJjaC1idWlsZGVyL3NlYXJjaC1idWlsZGVyLW91dGxldC9zZWFyY2gtYnVpbGRlci1vdXRsZXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsd0JBQXdCLEVBQWdCLFNBQVMsRUFBRSxLQUFLLEVBQVUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkgsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0lBWTdELHNDQUNZLG1CQUNBLDJCQUNBO1FBRkEsc0JBQWlCLEdBQWpCLGlCQUFpQjtRQUNqQiw4QkFBeUIsR0FBekIseUJBQXlCO1FBQ3pCLDBCQUFxQixHQUFyQixxQkFBcUI7S0FDNUI7Ozs7SUFFTCwrQ0FBUTs7O0lBQVI7O1FBR0kscUJBQU0sbUJBQW1CLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQzs7UUFHaEcscUJBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLHVCQUF1QixDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxDQUFDOztRQUcvRyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzs7UUFHOUUscUJBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsNEJBQTRCLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDOztRQUc3RyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDO1FBQ3hFLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7S0FDL0M7O2dCQWpDSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLHlCQUF5QjtpQkFDdEM7Ozs7Z0JBTDBFLGdCQUFnQjtnQkFBbEYsd0JBQXdCO2dCQUN4QixvQkFBb0I7OzswQ0FPeEIsS0FBSztpREFDTCxLQUFLOzt1Q0FUVjs7U0FNYSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIENvbXBvbmVudFJlZiwgRGlyZWN0aXZlLCBJbnB1dCwgT25Jbml0LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNlYXJjaEJ1aWxkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VhcmNoLWJ1aWxkZXIuc2VydmljZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW3V4U2VhcmNoQnVpbGRlck91dGxldF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hCdWlsZGVyT3V0bGV0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBASW5wdXQoKSB1eFNlYXJjaEJ1aWxkZXJPdXRsZXQ6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHV4U2VhcmNoQnVpbGRlck91dGxldENvbnRleHQ6IGFueTtcclxuXHJcbiAgICBwcml2YXRlIF9jb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxhbnk+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBfc2VhcmNoQnVpbGRlclNlcnZpY2U6IFNlYXJjaEJ1aWxkZXJTZXJ2aWNlXHJcbiAgICApIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgICAgICAvLyBnZXQgdGhlIGNsYXNzIGZyb20gdGhlIHR5cGVcclxuICAgICAgICBjb25zdCBjb21wb25lbnREZWZpbml0aW9uID0gdGhpcy5fc2VhcmNoQnVpbGRlclNlcnZpY2UuZ2V0Q29tcG9uZW50KHRoaXMudXhTZWFyY2hCdWlsZGVyT3V0bGV0KTtcclxuXHJcbiAgICAgICAgLy8gY3JlYXRlIHRoZSBjb21wb25lbnQgZmFjdG9yeVxyXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLl9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29tcG9uZW50RGVmaW5pdGlvbi5jb21wb25lbnQpO1xyXG5cclxuICAgICAgICAvLyBjcmVhdGUgdGhlIGNvbXBvbmVudCBpbnN0YW5jZVxyXG4gICAgICAgIHRoaXMuX2NvbXBvbmVudFJlZiA9IHRoaXMuX3ZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xyXG5cclxuICAgICAgICAvLyBjb21iaW5lIHRoZSBwcmVkZWZpbmVkIGNvbmZpZyB3aXRoIGFueSBkeW5tYWljIGNvbmZpZ1xyXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIGNvbXBvbmVudERlZmluaXRpb24uY29uZmlnLCB0aGlzLnV4U2VhcmNoQnVpbGRlck91dGxldENvbnRleHQuY29uZmlnIHx8IHt9KTtcclxuXHJcbiAgICAgICAgLy8gc2V0IHRoZSBjb250ZXh0IGFuZCBjb25maWcgcHJvcGVydHkgb24gdGhlIGNvbXBvbmVudCBpbnN0YW5jZVxyXG4gICAgICAgIHRoaXMuX2NvbXBvbmVudFJlZi5pbnN0YW5jZS5jb250ZXh0ID0gdGhpcy51eFNlYXJjaEJ1aWxkZXJPdXRsZXRDb250ZXh0O1xyXG4gICAgICAgIHRoaXMuX2NvbXBvbmVudFJlZi5pbnN0YW5jZS5jb25maWcgPSBjb25maWc7XHJcbiAgICB9XHJcbn1cclxuIl19