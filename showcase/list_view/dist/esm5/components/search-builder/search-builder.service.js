/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
var SearchBuilderService = /** @class */ (function () {
    function SearchBuilderService() {
        this.query = {};
        this.queryChange = new Subject();
        this.validationChange = new BehaviorSubject(true);
        this._componentId = 0;
        this._components = [];
        this._validation = {};
    }
    /**
     * Add a component to the internal list of components
     */
    /**
     * Add a component to the internal list of components
     * @param {?} component
     * @return {?}
     */
    SearchBuilderService.prototype.registerComponent = /**
     * Add a component to the internal list of components
     * @param {?} component
     * @return {?}
     */
    function (component) {
        // ensure there are no components with a matching name
        if (this._components.find(function (cmp) { return cmp.name === component.name; })) {
            throw new Error("Search builder components must have a unique name. The name " + component.name + " has already been used.");
        }
        // if unique then add the component to the list
        this._components.push(component);
    };
    /**
     * Bulk registration of components
     * (Just a helper method)
     */
    /**
     * Bulk registration of components
     * (Just a helper method)
     * @param {?} components
     * @return {?}
     */
    SearchBuilderService.prototype.registerComponents = /**
     * Bulk registration of components
     * (Just a helper method)
     * @param {?} components
     * @return {?}
     */
    function (components) {
        var _this = this;
        components.forEach(function (component) { return _this.registerComponent(component); });
    };
    /**
     * Get a registered component class
     */
    /**
     * Get a registered component class
     * @param {?} name
     * @return {?}
     */
    SearchBuilderService.prototype.getComponent = /**
     * Get a registered component class
     * @param {?} name
     * @return {?}
     */
    function (name) {
        // find the component
        var /** @type {?} */ component = this._components.find(function (cmp) { return cmp.name === name; });
        // if there is no match throw an exception
        if (!component) {
            throw new Error("No search build component with the name " + name + " exists");
        }
        // ensure config is defined - at least to an empty object
        component.config = component.config || {};
        return component;
    };
    /**
     * Update the internal search query state
     * note that the query will be immutable
     */
    /**
     * Update the internal search query state
     * note that the query will be immutable
     * @param {?} query
     * @return {?}
     */
    SearchBuilderService.prototype.setQuery = /**
     * Update the internal search query state
     * note that the query will be immutable
     * @param {?} query
     * @return {?}
     */
    function (query) {
        this.query = Object.assign({}, query);
    };
    /**
     * Return the current query state
     */
    /**
     * Return the current query state
     * @return {?}
     */
    SearchBuilderService.prototype.getQuery = /**
     * Return the current query state
     * @return {?}
     */
    function () {
        return this.query;
    };
    /**
     * Trigger the observable to indicate the query has been updated
     */
    /**
     * Trigger the observable to indicate the query has been updated
     * @return {?}
     */
    SearchBuilderService.prototype.queryHasChanged = /**
     * Trigger the observable to indicate the query has been updated
     * @return {?}
     */
    function () {
        this.queryChange.next(this.query);
    };
    /**
     * Store the validation state of the query
     */
    /**
     * Store the validation state of the query
     * @param {?} id
     * @param {?} valid
     * @return {?}
     */
    SearchBuilderService.prototype.setValid = /**
     * Store the validation state of the query
     * @param {?} id
     * @param {?} valid
     * @return {?}
     */
    function (id, valid) {
        var _this = this;
        // store the state for this specific component
        this._validation[id] = valid;
        // evaluate the entire validation state
        this.validationChange.next(!Object.keys(this._validation).some(function (key) { return !_this._validation[key]; }));
    };
    /**
     * Generate a unique id for each component
     */
    /**
     * Generate a unique id for each component
     * @return {?}
     */
    SearchBuilderService.prototype.generateComponentId = /**
     * Generate a unique id for each component
     * @return {?}
     */
    function () {
        return this._componentId++;
    };
    SearchBuilderService.decorators = [
        { type: Injectable },
    ];
    return SearchBuilderService;
}());
export { SearchBuilderService };
function SearchBuilderService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SearchBuilderService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SearchBuilderService.ctorParameters;
    /** @type {?} */
    SearchBuilderService.prototype.query;
    /** @type {?} */
    SearchBuilderService.prototype.queryChange;
    /** @type {?} */
    SearchBuilderService.prototype.validationChange;
    /** @type {?} */
    SearchBuilderService.prototype._componentId;
    /** @type {?} */
    SearchBuilderService.prototype._components;
    /** @type {?} */
    SearchBuilderService.prototype._validation;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJ1aWxkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3NlYXJjaC1idWlsZGVyL3NlYXJjaC1idWlsZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBSSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7OztxQkFPcEIsRUFBRTsyQkFDYSxJQUFJLE9BQU8sRUFBc0I7Z0NBQy9CLElBQUksZUFBZSxDQUFVLElBQUksQ0FBQzs0QkFFaEQsQ0FBQzsyQkFDMEIsRUFBRTsyQkFDVixFQUFFOztJQUVwRDs7T0FFRzs7Ozs7O0lBQ0gsZ0RBQWlCOzs7OztJQUFqQixVQUFrQixTQUEyQzs7UUFHM0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxJQUFJLEVBQTNCLENBQTJCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUQsTUFBTSxJQUFJLEtBQUssQ0FBQyxpRUFBK0QsU0FBUyxDQUFDLElBQUksNEJBQXlCLENBQUMsQ0FBQztTQUN6SDs7UUFHRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUNsQztJQUVEOzs7T0FHRzs7Ozs7OztJQUNILGlEQUFrQjs7Ozs7O0lBQWxCLFVBQW1CLFVBQThDO1FBQWpFLGlCQUVDO1FBREMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFBLFNBQVMsSUFBSSxPQUFBLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsRUFBakMsQ0FBaUMsQ0FBQyxDQUFDO0tBQ3BFO0lBRUQ7O09BRUc7Ozs7OztJQUNILDJDQUFZOzs7OztJQUFaLFVBQWEsSUFBWTs7UUFHdkIscUJBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksS0FBSyxJQUFJLEVBQWpCLENBQWlCLENBQUMsQ0FBQzs7UUFHbEUsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2YsTUFBTSxJQUFJLEtBQUssQ0FBQyw2Q0FBMkMsSUFBSSxZQUFTLENBQUMsQ0FBQztTQUMzRTs7UUFHRCxTQUFTLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDO1FBRTFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7S0FDbEI7SUFFRDs7O09BR0c7Ozs7Ozs7SUFDSCx1Q0FBUTs7Ozs7O0lBQVIsVUFBUyxLQUF5QjtRQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ3ZDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsdUNBQVE7Ozs7SUFBUjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0tBQ25CO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsOENBQWU7Ozs7SUFBZjtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNuQztJQUVEOztPQUVHOzs7Ozs7O0lBQ0gsdUNBQVE7Ozs7OztJQUFSLFVBQVMsRUFBVSxFQUFFLEtBQWM7UUFBbkMsaUJBT0M7O1FBSkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUM7O1FBRzdCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQXRCLENBQXNCLENBQUMsQ0FBQyxDQUFDO0tBQ2hHO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsa0RBQW1COzs7O0lBQW5CO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUM1Qjs7Z0JBM0ZGLFVBQVU7OytCQUxYOztTQU1hLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0ICwgIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgU2VhcmNoQnVpbGRlckNvbXBvbmVudERlZmluaXRpb24gfSBmcm9tICcuL2ludGVyZmFjZXMvY29tcG9uZW50LWRlZmluaXRpb24uaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgU2VhcmNoQnVpbGRlclF1ZXJ5IH0gZnJvbSAnLi9pbnRlcmZhY2VzL3F1ZXJ5LmludGVyZmFjZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hCdWlsZGVyU2VydmljZSB7XHJcblxyXG4gIHF1ZXJ5OiBTZWFyY2hCdWlsZGVyUXVlcnkgPSB7fTtcclxuICBxdWVyeUNoYW5nZTogU3ViamVjdDxTZWFyY2hCdWlsZGVyUXVlcnk+ID0gbmV3IFN1YmplY3Q8U2VhcmNoQnVpbGRlclF1ZXJ5PigpO1xyXG4gIHZhbGlkYXRpb25DaGFuZ2U6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4odHJ1ZSk7XHJcblxyXG4gIHByaXZhdGUgX2NvbXBvbmVudElkOiBudW1iZXIgPSAwO1xyXG4gIHByaXZhdGUgX2NvbXBvbmVudHM6IFNlYXJjaEJ1aWxkZXJDb21wb25lbnREZWZpbml0aW9uW10gPSBbXTtcclxuICBwcml2YXRlIF92YWxpZGF0aW9uOiB7IFtrZXk6IG51bWJlcl06IGJvb2xlYW4gfSA9IHt9O1xyXG5cclxuICAvKipcclxuICAgKiBBZGQgYSBjb21wb25lbnQgdG8gdGhlIGludGVybmFsIGxpc3Qgb2YgY29tcG9uZW50c1xyXG4gICAqL1xyXG4gIHJlZ2lzdGVyQ29tcG9uZW50KGNvbXBvbmVudDogU2VhcmNoQnVpbGRlckNvbXBvbmVudERlZmluaXRpb24pOiB2b2lkIHtcclxuXHJcbiAgICAvLyBlbnN1cmUgdGhlcmUgYXJlIG5vIGNvbXBvbmVudHMgd2l0aCBhIG1hdGNoaW5nIG5hbWVcclxuICAgIGlmICh0aGlzLl9jb21wb25lbnRzLmZpbmQoY21wID0+IGNtcC5uYW1lID09PSBjb21wb25lbnQubmFtZSkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBTZWFyY2ggYnVpbGRlciBjb21wb25lbnRzIG11c3QgaGF2ZSBhIHVuaXF1ZSBuYW1lLiBUaGUgbmFtZSAke2NvbXBvbmVudC5uYW1lfSBoYXMgYWxyZWFkeSBiZWVuIHVzZWQuYCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaWYgdW5pcXVlIHRoZW4gYWRkIHRoZSBjb21wb25lbnQgdG8gdGhlIGxpc3RcclxuICAgIHRoaXMuX2NvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQnVsayByZWdpc3RyYXRpb24gb2YgY29tcG9uZW50c1xyXG4gICAqIChKdXN0IGEgaGVscGVyIG1ldGhvZClcclxuICAgKi9cclxuICByZWdpc3RlckNvbXBvbmVudHMoY29tcG9uZW50czogU2VhcmNoQnVpbGRlckNvbXBvbmVudERlZmluaXRpb25bXSk6IHZvaWQge1xyXG4gICAgY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB0aGlzLnJlZ2lzdGVyQ29tcG9uZW50KGNvbXBvbmVudCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGEgcmVnaXN0ZXJlZCBjb21wb25lbnQgY2xhc3NcclxuICAgKi9cclxuICBnZXRDb21wb25lbnQobmFtZTogc3RyaW5nKTogYW55IHtcclxuXHJcbiAgICAvLyBmaW5kIHRoZSBjb21wb25lbnRcclxuICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuX2NvbXBvbmVudHMuZmluZChjbXAgPT4gY21wLm5hbWUgPT09IG5hbWUpO1xyXG5cclxuICAgIC8vIGlmIHRoZXJlIGlzIG5vIG1hdGNoIHRocm93IGFuIGV4Y2VwdGlvblxyXG4gICAgaWYgKCFjb21wb25lbnQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBzZWFyY2ggYnVpbGQgY29tcG9uZW50IHdpdGggdGhlIG5hbWUgJHtuYW1lfSBleGlzdHNgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBlbnN1cmUgY29uZmlnIGlzIGRlZmluZWQgLSBhdCBsZWFzdCB0byBhbiBlbXB0eSBvYmplY3RcclxuICAgIGNvbXBvbmVudC5jb25maWcgPSBjb21wb25lbnQuY29uZmlnIHx8IHt9O1xyXG5cclxuICAgIHJldHVybiBjb21wb25lbnQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGUgdGhlIGludGVybmFsIHNlYXJjaCBxdWVyeSBzdGF0ZVxyXG4gICAqIG5vdGUgdGhhdCB0aGUgcXVlcnkgd2lsbCBiZSBpbW11dGFibGVcclxuICAgKi9cclxuICBzZXRRdWVyeShxdWVyeTogU2VhcmNoQnVpbGRlclF1ZXJ5KTogdm9pZCB7XHJcbiAgICB0aGlzLnF1ZXJ5ID0gT2JqZWN0LmFzc2lnbih7fSwgcXVlcnkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJuIHRoZSBjdXJyZW50IHF1ZXJ5IHN0YXRlXHJcbiAgICovXHJcbiAgZ2V0UXVlcnkoKTogU2VhcmNoQnVpbGRlclF1ZXJ5IHtcclxuICAgIHJldHVybiB0aGlzLnF1ZXJ5O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHJpZ2dlciB0aGUgb2JzZXJ2YWJsZSB0byBpbmRpY2F0ZSB0aGUgcXVlcnkgaGFzIGJlZW4gdXBkYXRlZFxyXG4gICAqL1xyXG4gIHF1ZXJ5SGFzQ2hhbmdlZCgpOiB2b2lkIHtcclxuICAgIHRoaXMucXVlcnlDaGFuZ2UubmV4dCh0aGlzLnF1ZXJ5KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0b3JlIHRoZSB2YWxpZGF0aW9uIHN0YXRlIG9mIHRoZSBxdWVyeVxyXG4gICAqL1xyXG4gIHNldFZhbGlkKGlkOiBudW1iZXIsIHZhbGlkOiBib29sZWFuKTogdm9pZCB7XHJcblxyXG4gICAgLy8gc3RvcmUgdGhlIHN0YXRlIGZvciB0aGlzIHNwZWNpZmljIGNvbXBvbmVudFxyXG4gICAgdGhpcy5fdmFsaWRhdGlvbltpZF0gPSB2YWxpZDtcclxuXHJcbiAgICAvLyBldmFsdWF0ZSB0aGUgZW50aXJlIHZhbGlkYXRpb24gc3RhdGVcclxuICAgIHRoaXMudmFsaWRhdGlvbkNoYW5nZS5uZXh0KCFPYmplY3Qua2V5cyh0aGlzLl92YWxpZGF0aW9uKS5zb21lKGtleSA9PiAhdGhpcy5fdmFsaWRhdGlvbltrZXldKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZW5lcmF0ZSBhIHVuaXF1ZSBpZCBmb3IgZWFjaCBjb21wb25lbnRcclxuICAgKi9cclxuICBnZW5lcmF0ZUNvbXBvbmVudElkKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29tcG9uZW50SWQrKztcclxuICB9XHJcbn1cclxuIl19