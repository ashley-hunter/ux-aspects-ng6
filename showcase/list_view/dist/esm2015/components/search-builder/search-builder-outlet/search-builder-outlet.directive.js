/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ComponentFactoryResolver, Directive, Input, ViewContainerRef } from '@angular/core';
import { SearchBuilderService } from '../search-builder.service';
export class SearchBuilderOutletDirective {
    /**
     * @param {?} _viewContainerRef
     * @param {?} _componentFactoryResolver
     * @param {?} _searchBuilderService
     */
    constructor(_viewContainerRef, _componentFactoryResolver, _searchBuilderService) {
        this._viewContainerRef = _viewContainerRef;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._searchBuilderService = _searchBuilderService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // get the class from the type
        const /** @type {?} */ componentDefinition = this._searchBuilderService.getComponent(this.uxSearchBuilderOutlet);
        // create the component factory
        const /** @type {?} */ componentFactory = this._componentFactoryResolver.resolveComponentFactory(componentDefinition.component);
        // create the component instance
        this._componentRef = this._viewContainerRef.createComponent(componentFactory);
        // combine the predefined config with any dynmaic config
        const /** @type {?} */ config = Object.assign({}, componentDefinition.config, this.uxSearchBuilderOutletContext.config || {});
        // set the context and config property on the component instance
        this._componentRef.instance.context = this.uxSearchBuilderOutletContext;
        this._componentRef.instance.config = config;
    }
}
SearchBuilderOutletDirective.decorators = [
    { type: Directive, args: [{
                selector: '[uxSearchBuilderOutlet]'
            },] },
];
/** @nocollapse */
SearchBuilderOutletDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
    { type: ComponentFactoryResolver, },
    { type: SearchBuilderService, },
];
SearchBuilderOutletDirective.propDecorators = {
    "uxSearchBuilderOutlet": [{ type: Input },],
    "uxSearchBuilderOutletContext": [{ type: Input },],
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJ1aWxkZXItb3V0bGV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3NlYXJjaC1idWlsZGVyL3NlYXJjaC1idWlsZGVyLW91dGxldC9zZWFyY2gtYnVpbGRlci1vdXRsZXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsd0JBQXdCLEVBQWdCLFNBQVMsRUFBRSxLQUFLLEVBQVUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkgsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFLakUsTUFBTTs7Ozs7O0lBT0YsWUFDWSxtQkFDQSwyQkFDQTtRQUZBLHNCQUFpQixHQUFqQixpQkFBaUI7UUFDakIsOEJBQXlCLEdBQXpCLHlCQUF5QjtRQUN6QiwwQkFBcUIsR0FBckIscUJBQXFCO0tBQzVCOzs7O0lBRUwsUUFBUTs7UUFHSix1QkFBTSxtQkFBbUIsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDOztRQUdoRyx1QkFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsdUJBQXVCLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLENBQUM7O1FBRy9HLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDOztRQUc5RSx1QkFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsbUJBQW1CLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLENBQUM7O1FBRzdHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsNEJBQTRCLENBQUM7UUFDeEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztLQUMvQzs7O1lBakNKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUseUJBQXlCO2FBQ3RDOzs7O1lBTDBFLGdCQUFnQjtZQUFsRix3QkFBd0I7WUFDeEIsb0JBQW9COzs7c0NBT3hCLEtBQUs7NkNBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgQ29tcG9uZW50UmVmLCBEaXJlY3RpdmUsIElucHV0LCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2VhcmNoQnVpbGRlclNlcnZpY2UgfSBmcm9tICcuLi9zZWFyY2gtYnVpbGRlci5zZXJ2aWNlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbdXhTZWFyY2hCdWlsZGVyT3V0bGV0XSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlYXJjaEJ1aWxkZXJPdXRsZXREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIEBJbnB1dCgpIHV4U2VhcmNoQnVpbGRlck91dGxldDogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgdXhTZWFyY2hCdWlsZGVyT3V0bGV0Q29udGV4dDogYW55O1xyXG5cclxuICAgIHByaXZhdGUgX2NvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPGFueT47XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgICAgICBwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgICAgICBwcml2YXRlIF9zZWFyY2hCdWlsZGVyU2VydmljZTogU2VhcmNoQnVpbGRlclNlcnZpY2VcclxuICAgICkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIC8vIGdldCB0aGUgY2xhc3MgZnJvbSB0aGUgdHlwZVxyXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudERlZmluaXRpb24gPSB0aGlzLl9zZWFyY2hCdWlsZGVyU2VydmljZS5nZXRDb21wb25lbnQodGhpcy51eFNlYXJjaEJ1aWxkZXJPdXRsZXQpO1xyXG5cclxuICAgICAgICAvLyBjcmVhdGUgdGhlIGNvbXBvbmVudCBmYWN0b3J5XHJcbiAgICAgICAgY29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnREZWZpbml0aW9uLmNvbXBvbmVudCk7XHJcblxyXG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgY29tcG9uZW50IGluc3RhbmNlXHJcbiAgICAgICAgdGhpcy5fY29tcG9uZW50UmVmID0gdGhpcy5fdmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSk7XHJcblxyXG4gICAgICAgIC8vIGNvbWJpbmUgdGhlIHByZWRlZmluZWQgY29uZmlnIHdpdGggYW55IGR5bm1haWMgY29uZmlnXHJcbiAgICAgICAgY29uc3QgY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgY29tcG9uZW50RGVmaW5pdGlvbi5jb25maWcsIHRoaXMudXhTZWFyY2hCdWlsZGVyT3V0bGV0Q29udGV4dC5jb25maWcgfHwge30pO1xyXG5cclxuICAgICAgICAvLyBzZXQgdGhlIGNvbnRleHQgYW5kIGNvbmZpZyBwcm9wZXJ0eSBvbiB0aGUgY29tcG9uZW50IGluc3RhbmNlXHJcbiAgICAgICAgdGhpcy5fY29tcG9uZW50UmVmLmluc3RhbmNlLmNvbnRleHQgPSB0aGlzLnV4U2VhcmNoQnVpbGRlck91dGxldENvbnRleHQ7XHJcbiAgICAgICAgdGhpcy5fY29tcG9uZW50UmVmLmluc3RhbmNlLmNvbmZpZyA9IGNvbmZpZztcclxuICAgIH1cclxufVxyXG4iXX0=