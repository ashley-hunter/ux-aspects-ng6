/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { distinctUntilChanged } from 'rxjs/operators';
import { SearchBuilderService } from './search-builder.service';
export class SearchBuilderComponent {
    /**
     * Register the default search builder components
     * @param {?} _searchBuilderService
     */
    constructor(_searchBuilderService) {
        this._searchBuilderService = _searchBuilderService;
        this.queryChange = new EventEmitter();
        this.valid = new EventEmitter(true);
        // watch for any query changes
        this._querySubscription = _searchBuilderService.queryChange.subscribe(query => this.queryChange.emit(query));
        // watch for any changes to the validation
        this._validSubscription = _searchBuilderService.validationChange.pipe(distinctUntilChanged()).subscribe(valid => this.valid.emit(valid));
    }
    /**
     * @param {?} components
     * @return {?}
     */
    set components(components) {
        this._searchBuilderService.registerComponents(components);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set query(value) {
        this._searchBuilderService.setQuery(value);
    }
    /**
     * @return {?}
     */
    get query() {
        return this._searchBuilderService.getQuery();
    }
    /**
     * Remove any subscriptions and cleanup
     * @return {?}
     */
    ngOnDestroy() {
        this._querySubscription.unsubscribe();
        this._validSubscription.unsubscribe();
    }
}
SearchBuilderComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-search-builder',
                template: `<ng-content></ng-content>`,
                providers: [SearchBuilderService]
            },] },
];
/** @nocollapse */
SearchBuilderComponent.ctorParameters = () => [
    { type: SearchBuilderService, },
];
SearchBuilderComponent.propDecorators = {
    "components": [{ type: Input },],
    "query": [{ type: Input },],
    "queryChange": [{ type: Output },],
    "valid": [{ type: Output },],
};
function SearchBuilderComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SearchBuilderComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SearchBuilderComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    SearchBuilderComponent.propDecorators;
    /** @type {?} */
    SearchBuilderComponent.prototype.queryChange;
    /** @type {?} */
    SearchBuilderComponent.prototype.valid;
    /** @type {?} */
    SearchBuilderComponent.prototype._querySubscription;
    /** @type {?} */
    SearchBuilderComponent.prototype._validSubscription;
    /** @type {?} */
    SearchBuilderComponent.prototype._searchBuilderService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJ1aWxkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VhcmNoLWJ1aWxkZXIvc2VhcmNoLWJ1aWxkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSXRELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBT2hFLE1BQU07Ozs7O0lBeUJKLFlBQW9CLHFCQUEyQztRQUEzQywwQkFBcUIsR0FBckIscUJBQXFCLENBQXNCOzJCQVRMLElBQUksWUFBWSxFQUFzQjtxQkFDdkQsSUFBSSxZQUFZLENBQVUsSUFBSSxDQUFDOztRQVd0RSxJQUFJLENBQUMsa0JBQWtCLEdBQUcscUJBQXFCLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7O1FBRzdHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDMUk7Ozs7O1FBN0JHLFVBQVUsQ0FBQyxVQUE4QztRQUMzRCxJQUFJLENBQUMscUJBQXFCLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7Ozs7OztRQUl4RCxLQUFLLENBQUMsS0FBeUI7UUFDakMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7SUFHN0MsSUFBSSxLQUFLO1FBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUM5Qzs7Ozs7SUF1QkQsV0FBVztRQUNULElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDdkM7OztZQTdDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7YUFDbEM7Ozs7WUFOUSxvQkFBb0I7OzsyQkFTMUIsS0FBSztzQkFLTCxLQUFLOzRCQVNMLE1BQU07c0JBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBTZWFyY2hCdWlsZGVyQ29tcG9uZW50RGVmaW5pdGlvbiB9IGZyb20gJy4vaW50ZXJmYWNlcy9jb21wb25lbnQtZGVmaW5pdGlvbi5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBTZWFyY2hCdWlsZGVyUXVlcnkgfSBmcm9tICcuL2ludGVyZmFjZXMvcXVlcnkuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgU2VhcmNoQnVpbGRlclNlcnZpY2UgfSBmcm9tICcuL3NlYXJjaC1idWlsZGVyLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd1eC1zZWFyY2gtYnVpbGRlcicsXHJcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcclxuICBwcm92aWRlcnM6IFtTZWFyY2hCdWlsZGVyU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlYXJjaEJ1aWxkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBjb21wb25lbnRzKGNvbXBvbmVudHM6IFNlYXJjaEJ1aWxkZXJDb21wb25lbnREZWZpbml0aW9uW10pIHtcclxuICAgIHRoaXMuX3NlYXJjaEJ1aWxkZXJTZXJ2aWNlLnJlZ2lzdGVyQ29tcG9uZW50cyhjb21wb25lbnRzKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHF1ZXJ5KHZhbHVlOiBTZWFyY2hCdWlsZGVyUXVlcnkpIHtcclxuICAgIHRoaXMuX3NlYXJjaEJ1aWxkZXJTZXJ2aWNlLnNldFF1ZXJ5KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldCBxdWVyeSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWFyY2hCdWlsZGVyU2VydmljZS5nZXRRdWVyeSgpO1xyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgpIHF1ZXJ5Q2hhbmdlOiBFdmVudEVtaXR0ZXI8U2VhcmNoQnVpbGRlclF1ZXJ5PiA9IG5ldyBFdmVudEVtaXR0ZXI8U2VhcmNoQnVpbGRlclF1ZXJ5PigpO1xyXG4gIEBPdXRwdXQoKSB2YWxpZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPih0cnVlKTtcclxuXHJcbiAgcHJpdmF0ZSBfcXVlcnlTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICBwcml2YXRlIF92YWxpZFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICAvKipcclxuICAgKiBSZWdpc3RlciB0aGUgZGVmYXVsdCBzZWFyY2ggYnVpbGRlciBjb21wb25lbnRzXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2VhcmNoQnVpbGRlclNlcnZpY2U6IFNlYXJjaEJ1aWxkZXJTZXJ2aWNlKSB7XHJcblxyXG4gICAgLy8gd2F0Y2ggZm9yIGFueSBxdWVyeSBjaGFuZ2VzXHJcbiAgICB0aGlzLl9xdWVyeVN1YnNjcmlwdGlvbiA9IF9zZWFyY2hCdWlsZGVyU2VydmljZS5xdWVyeUNoYW5nZS5zdWJzY3JpYmUocXVlcnkgPT4gdGhpcy5xdWVyeUNoYW5nZS5lbWl0KHF1ZXJ5KSk7XHJcblxyXG4gICAgLy8gd2F0Y2ggZm9yIGFueSBjaGFuZ2VzIHRvIHRoZSB2YWxpZGF0aW9uXHJcbiAgICB0aGlzLl92YWxpZFN1YnNjcmlwdGlvbiA9IF9zZWFyY2hCdWlsZGVyU2VydmljZS52YWxpZGF0aW9uQ2hhbmdlLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSkuc3Vic2NyaWJlKHZhbGlkID0+IHRoaXMudmFsaWQuZW1pdCh2YWxpZCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlIGFueSBzdWJzY3JpcHRpb25zIGFuZCBjbGVhbnVwXHJcbiAgICovXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLl9xdWVyeVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5fdmFsaWRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==