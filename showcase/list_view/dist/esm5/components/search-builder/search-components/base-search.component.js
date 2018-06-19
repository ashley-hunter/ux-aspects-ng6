/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { SearchBuilderGroupService } from '../search-builder-group/search-builder-group.service';
import { SearchBuilderService } from '../search-builder.service';
var BaseSearchComponent = /** @class */ (function () {
    function BaseSearchComponent(_searchBuilderService, _searchBuilderGroupService) {
        this._searchBuilderService = _searchBuilderService;
        this._searchBuilderGroupService = _searchBuilderGroupService;
        this._id = this._searchBuilderService.generateComponentId();
        this._valid = true;
    }
    Object.defineProperty(BaseSearchComponent.prototype, "value", {
        /**
         * Get the current value of the component
         */
        get: /**
         * Get the current value of the component
         * @return {?}
         */
        function () {
            return this.context.value;
        },
        /**
         * Set the current value of the component
         */
        set: /**
         * Set the current value of the component
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.context.value = value;
            this._searchBuilderService.queryHasChanged();
            // if value has been set perform validation
            this.validate();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseSearchComponent.prototype, "valid", {
        get: /**
         * @return {?}
         */
        function () {
            return this._valid;
        },
        set: /**
         * @param {?} valid
         * @return {?}
         */
        function (valid) {
            this._valid = valid;
            this._searchBuilderService.setValid(this._id, valid);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Make sure we clean up after ourselves
     */
    /**
     * Make sure we clean up after ourselves
     * @return {?}
     */
    BaseSearchComponent.prototype.ngOnDestroy = /**
     * Make sure we clean up after ourselves
     * @return {?}
     */
    function () {
        this.valid = true;
    };
    /**
     * Perform any required validation on the value
     */
    /**
     * Perform any required validation on the value
     * @return {?}
     */
    BaseSearchComponent.prototype.validate = /**
     * Perform any required validation on the value
     * @return {?}
     */
    function () {
        // if a custom validation function has been provided then use it
        this.valid = this.config.validation ? this.config.validation(this, this.value) : true;
    };
    BaseSearchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-base-search',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    BaseSearchComponent.ctorParameters = function () { return [
        { type: SearchBuilderService, },
        { type: SearchBuilderGroupService, },
    ]; };
    return BaseSearchComponent;
}());
export { BaseSearchComponent };
function BaseSearchComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    BaseSearchComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    BaseSearchComponent.ctorParameters;
    /** @type {?} */
    BaseSearchComponent.prototype.type;
    /** @type {?} */
    BaseSearchComponent.prototype.config;
    /** @type {?} */
    BaseSearchComponent.prototype.context;
    /** @type {?} */
    BaseSearchComponent.prototype._id;
    /** @type {?} */
    BaseSearchComponent.prototype._valid;
    /** @type {?} */
    BaseSearchComponent.prototype._searchBuilderService;
    /** @type {?} */
    BaseSearchComponent.prototype._searchBuilderGroupService;
}
/**
 * @record
 */
export function BaseSearchComponentConfig() { }
function BaseSearchComponentConfig_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    BaseSearchComponentConfig.prototype.label;
    /** @type {?|undefined} */
    BaseSearchComponentConfig.prototype.placeholder;
    /** @type {?|undefined} */
    BaseSearchComponentConfig.prototype.validation;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zZWFyY2guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VhcmNoLWJ1aWxkZXIvc2VhcmNoLWNvbXBvbmVudHMvYmFzZS1zZWFyY2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRXJELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztJQTBDN0QsNkJBQ1ksdUJBQ0E7UUFEQSwwQkFBcUIsR0FBckIscUJBQXFCO1FBQ3JCLCtCQUEwQixHQUExQiwwQkFBMEI7bUJBaENoQixJQUFJLENBQUMscUJBQXFCLENBQUMsbUJBQW1CLEVBQUU7c0JBQzVDLElBQUk7S0FnQ3pCO0lBM0JMLHNCQUFJLHNDQUFLO1FBSFQ7O1dBRUc7Ozs7O1FBQ0g7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7U0FDN0I7UUFFRDs7V0FFRzs7Ozs7O1FBQ0gsVUFBVSxLQUFVO1lBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMscUJBQXFCLENBQUMsZUFBZSxFQUFFLENBQUM7O1lBRzdDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNuQjs7O09BWEE7SUFhRCxzQkFBSSxzQ0FBSzs7OztRQUFUO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDdEI7Ozs7O1FBRUQsVUFBVSxLQUFjO1lBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN4RDs7O09BTEE7SUFZRDs7T0FFRzs7Ozs7SUFDSCx5Q0FBVzs7OztJQUFYO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7S0FDckI7SUFFRDs7T0FFRzs7Ozs7SUFDSCxzQ0FBUTs7OztJQUFSOztRQUVJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztLQUN6Rjs7Z0JBMURKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsRUFBRTtpQkFDZjs7OztnQkFMUSxvQkFBb0I7Z0JBRHBCLHlCQUF5Qjs7OEJBRmxDOztTQVNhLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNlYXJjaEJ1aWxkZXJDb21wb25lbnRDb250ZXh0IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9jb21wb25lbnQtY29udGV4dC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBTZWFyY2hCdWlsZGVyR3JvdXBTZXJ2aWNlIH0gZnJvbSAnLi4vc2VhcmNoLWJ1aWxkZXItZ3JvdXAvc2VhcmNoLWJ1aWxkZXItZ3JvdXAuc2VydmljZSc7XHJcbmltcG9ydCB7IFNlYXJjaEJ1aWxkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VhcmNoLWJ1aWxkZXIuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndXgtYmFzZS1zZWFyY2gnLFxyXG4gICAgdGVtcGxhdGU6ICcnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCYXNlU2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuXHJcbiAgICB0eXBlOiBzdHJpbmc7XHJcbiAgICBjb25maWc6IGFueTtcclxuICAgIGNvbnRleHQ6IFNlYXJjaEJ1aWxkZXJDb21wb25lbnRDb250ZXh0O1xyXG5cclxuICAgIHByaXZhdGUgX2lkOiBudW1iZXIgPSB0aGlzLl9zZWFyY2hCdWlsZGVyU2VydmljZS5nZW5lcmF0ZUNvbXBvbmVudElkKCk7XHJcbiAgICBwcml2YXRlIF92YWxpZDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIGNvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICBnZXQgdmFsdWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCB0aGUgY3VycmVudCB2YWx1ZSBvZiB0aGUgY29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIHNldCB2YWx1ZSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5fc2VhcmNoQnVpbGRlclNlcnZpY2UucXVlcnlIYXNDaGFuZ2VkKCk7XHJcblxyXG4gICAgICAgIC8vIGlmIHZhbHVlIGhhcyBiZWVuIHNldCBwZXJmb3JtIHZhbGlkYXRpb25cclxuICAgICAgICB0aGlzLnZhbGlkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHZhbGlkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92YWxpZDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgdmFsaWQodmFsaWQ6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl92YWxpZCA9IHZhbGlkO1xyXG4gICAgICAgIHRoaXMuX3NlYXJjaEJ1aWxkZXJTZXJ2aWNlLnNldFZhbGlkKHRoaXMuX2lkLCB2YWxpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBfc2VhcmNoQnVpbGRlclNlcnZpY2U6IFNlYXJjaEJ1aWxkZXJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX3NlYXJjaEJ1aWxkZXJHcm91cFNlcnZpY2U6IFNlYXJjaEJ1aWxkZXJHcm91cFNlcnZpY2VcclxuICAgICkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYWtlIHN1cmUgd2UgY2xlYW4gdXAgYWZ0ZXIgb3Vyc2VsdmVzXHJcbiAgICAgKi9cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudmFsaWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUGVyZm9ybSBhbnkgcmVxdWlyZWQgdmFsaWRhdGlvbiBvbiB0aGUgdmFsdWVcclxuICAgICAqL1xyXG4gICAgdmFsaWRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gaWYgYSBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbiBoYXMgYmVlbiBwcm92aWRlZCB0aGVuIHVzZSBpdFxyXG4gICAgICAgIHRoaXMudmFsaWQgPSB0aGlzLmNvbmZpZy52YWxpZGF0aW9uID8gdGhpcy5jb25maWcudmFsaWRhdGlvbih0aGlzLCB0aGlzLnZhbHVlKSA6IHRydWU7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJhc2VTZWFyY2hDb21wb25lbnRDb25maWcge1xyXG4gICAgbGFiZWw/OiBzdHJpbmc7XHJcbiAgICBwbGFjZWhvbGRlcj86IHN0cmluZztcclxuICAgIHZhbGlkYXRpb24/OiAodmFsdWU6IGFueSkgPT4gYm9vbGVhbjtcclxufSJdfQ==