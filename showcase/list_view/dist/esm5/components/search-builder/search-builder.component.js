/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { distinctUntilChanged } from 'rxjs/operators';
import { SearchBuilderService } from './search-builder.service';
var SearchBuilderComponent = /** @class */ (function () {
    /**
     * Register the default search builder components
     */
    function SearchBuilderComponent(_searchBuilderService) {
        var _this = this;
        this._searchBuilderService = _searchBuilderService;
        this.queryChange = new EventEmitter();
        this.valid = new EventEmitter(true);
        // watch for any query changes
        this._querySubscription = _searchBuilderService.queryChange.subscribe(function (query) { return _this.queryChange.emit(query); });
        // watch for any changes to the validation
        this._validSubscription = _searchBuilderService.validationChange.pipe(distinctUntilChanged()).subscribe(function (valid) { return _this.valid.emit(valid); });
    }
    Object.defineProperty(SearchBuilderComponent.prototype, "components", {
        set: /**
         * @param {?} components
         * @return {?}
         */
        function (components) {
            this._searchBuilderService.registerComponents(components);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchBuilderComponent.prototype, "query", {
        get: /**
         * @return {?}
         */
        function () {
            return this._searchBuilderService.getQuery();
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._searchBuilderService.setQuery(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Remove any subscriptions and cleanup
     */
    /**
     * Remove any subscriptions and cleanup
     * @return {?}
     */
    SearchBuilderComponent.prototype.ngOnDestroy = /**
     * Remove any subscriptions and cleanup
     * @return {?}
     */
    function () {
        this._querySubscription.unsubscribe();
        this._validSubscription.unsubscribe();
    };
    SearchBuilderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-search-builder',
                    template: "<ng-content></ng-content>",
                    providers: [SearchBuilderService]
                },] },
    ];
    /** @nocollapse */
    SearchBuilderComponent.ctorParameters = function () { return [
        { type: SearchBuilderService, },
    ]; };
    SearchBuilderComponent.propDecorators = {
        "components": [{ type: Input },],
        "query": [{ type: Input },],
        "queryChange": [{ type: Output },],
        "valid": [{ type: Output },],
    };
    return SearchBuilderComponent;
}());
export { SearchBuilderComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJ1aWxkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VhcmNoLWJ1aWxkZXIvc2VhcmNoLWJ1aWxkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSXRELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztJQTZCOUQ7O09BRUc7SUFDSCxnQ0FBb0IscUJBQTJDO1FBQS9ELGlCQU9DO1FBUG1CLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBc0I7MkJBVEwsSUFBSSxZQUFZLEVBQXNCO3FCQUN2RCxJQUFJLFlBQVksQ0FBVSxJQUFJLENBQUM7O1FBV3RFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FBQzs7UUFHN0csSUFBSSxDQUFDLGtCQUFrQixHQUFHLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQXRCLENBQXNCLENBQUMsQ0FBQztLQUMxSTswQkE3QkcsOENBQVU7Ozs7O2tCQUFDLFVBQThDO1lBQzNELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQzs7Ozs7MEJBSXhELHlDQUFLOzs7O1FBSVQ7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQzlDOzs7OztrQkFOUyxLQUF5QjtZQUNqQyxJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7OztJQXlCN0M7O09BRUc7Ozs7O0lBQ0gsNENBQVc7Ozs7SUFBWDtRQUNFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDdkM7O2dCQTdDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7aUJBQ2xDOzs7O2dCQU5RLG9CQUFvQjs7OytCQVMxQixLQUFLOzBCQUtMLEtBQUs7Z0NBU0wsTUFBTTswQkFDTixNQUFNOztpQ0E3QlQ7O1NBWWEsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkRlc3Ryb3ksIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFNlYXJjaEJ1aWxkZXJDb21wb25lbnREZWZpbml0aW9uIH0gZnJvbSAnLi9pbnRlcmZhY2VzL2NvbXBvbmVudC1kZWZpbml0aW9uLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFNlYXJjaEJ1aWxkZXJRdWVyeSB9IGZyb20gJy4vaW50ZXJmYWNlcy9xdWVyeS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBTZWFyY2hCdWlsZGVyU2VydmljZSB9IGZyb20gJy4vc2VhcmNoLWJ1aWxkZXIuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3V4LXNlYXJjaC1idWlsZGVyJyxcclxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxyXG4gIHByb3ZpZGVyczogW1NlYXJjaEJ1aWxkZXJTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoQnVpbGRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGNvbXBvbmVudHMoY29tcG9uZW50czogU2VhcmNoQnVpbGRlckNvbXBvbmVudERlZmluaXRpb25bXSkge1xyXG4gICAgdGhpcy5fc2VhcmNoQnVpbGRlclNlcnZpY2UucmVnaXN0ZXJDb21wb25lbnRzKGNvbXBvbmVudHMpO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgcXVlcnkodmFsdWU6IFNlYXJjaEJ1aWxkZXJRdWVyeSkge1xyXG4gICAgdGhpcy5fc2VhcmNoQnVpbGRlclNlcnZpY2Uuc2V0UXVlcnkodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHF1ZXJ5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlYXJjaEJ1aWxkZXJTZXJ2aWNlLmdldFF1ZXJ5KCk7XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KCkgcXVlcnlDaGFuZ2U6IEV2ZW50RW1pdHRlcjxTZWFyY2hCdWlsZGVyUXVlcnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxTZWFyY2hCdWlsZGVyUXVlcnk+KCk7XHJcbiAgQE91dHB1dCgpIHZhbGlkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KHRydWUpO1xyXG5cclxuICBwcml2YXRlIF9xdWVyeVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIHByaXZhdGUgX3ZhbGlkU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZ2lzdGVyIHRoZSBkZWZhdWx0IHNlYXJjaCBidWlsZGVyIGNvbXBvbmVudHNcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zZWFyY2hCdWlsZGVyU2VydmljZTogU2VhcmNoQnVpbGRlclNlcnZpY2UpIHtcclxuXHJcbiAgICAvLyB3YXRjaCBmb3IgYW55IHF1ZXJ5IGNoYW5nZXNcclxuICAgIHRoaXMuX3F1ZXJ5U3Vic2NyaXB0aW9uID0gX3NlYXJjaEJ1aWxkZXJTZXJ2aWNlLnF1ZXJ5Q2hhbmdlLnN1YnNjcmliZShxdWVyeSA9PiB0aGlzLnF1ZXJ5Q2hhbmdlLmVtaXQocXVlcnkpKTtcclxuXHJcbiAgICAvLyB3YXRjaCBmb3IgYW55IGNoYW5nZXMgdG8gdGhlIHZhbGlkYXRpb25cclxuICAgIHRoaXMuX3ZhbGlkU3Vic2NyaXB0aW9uID0gX3NlYXJjaEJ1aWxkZXJTZXJ2aWNlLnZhbGlkYXRpb25DaGFuZ2UucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKS5zdWJzY3JpYmUodmFsaWQgPT4gdGhpcy52YWxpZC5lbWl0KHZhbGlkKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmUgYW55IHN1YnNjcmlwdGlvbnMgYW5kIGNsZWFudXBcclxuICAgKi9cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuX3F1ZXJ5U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLl92YWxpZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19