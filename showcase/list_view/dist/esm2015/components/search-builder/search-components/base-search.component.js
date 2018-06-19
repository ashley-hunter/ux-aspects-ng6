/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { SearchBuilderGroupService } from '../search-builder-group/search-builder-group.service';
import { SearchBuilderService } from '../search-builder.service';
export class BaseSearchComponent {
    /**
     * @param {?} _searchBuilderService
     * @param {?} _searchBuilderGroupService
     */
    constructor(_searchBuilderService, _searchBuilderGroupService) {
        this._searchBuilderService = _searchBuilderService;
        this._searchBuilderGroupService = _searchBuilderGroupService;
        this._id = this._searchBuilderService.generateComponentId();
        this._valid = true;
    }
    /**
     * Get the current value of the component
     * @return {?}
     */
    get value() {
        return this.context.value;
    }
    /**
     * Set the current value of the component
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this.context.value = value;
        this._searchBuilderService.queryHasChanged();
        // if value has been set perform validation
        this.validate();
    }
    /**
     * @return {?}
     */
    get valid() {
        return this._valid;
    }
    /**
     * @param {?} valid
     * @return {?}
     */
    set valid(valid) {
        this._valid = valid;
        this._searchBuilderService.setValid(this._id, valid);
    }
    /**
     * Make sure we clean up after ourselves
     * @return {?}
     */
    ngOnDestroy() {
        this.valid = true;
    }
    /**
     * Perform any required validation on the value
     * @return {?}
     */
    validate() {
        // if a custom validation function has been provided then use it
        this.valid = this.config.validation ? this.config.validation(this, this.value) : true;
    }
}
BaseSearchComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-base-search',
                template: ''
            },] },
];
/** @nocollapse */
BaseSearchComponent.ctorParameters = () => [
    { type: SearchBuilderService, },
    { type: SearchBuilderGroupService, },
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zZWFyY2guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VhcmNoLWJ1aWxkZXIvc2VhcmNoLWNvbXBvbmVudHMvYmFzZS1zZWFyY2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRXJELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBTWpFLE1BQU07Ozs7O0lBb0NGLFlBQ1ksdUJBQ0E7UUFEQSwwQkFBcUIsR0FBckIscUJBQXFCO1FBQ3JCLCtCQUEwQixHQUExQiwwQkFBMEI7bUJBaENoQixJQUFJLENBQUMscUJBQXFCLENBQUMsbUJBQW1CLEVBQUU7c0JBQzVDLElBQUk7S0FnQ3pCOzs7OztJQTNCTCxJQUFJLEtBQUs7UUFDTCxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7S0FDN0I7Ozs7OztJQUtELElBQUksS0FBSyxDQUFDLEtBQVU7UUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLEVBQUUsQ0FBQzs7UUFHN0MsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQ25COzs7O0lBRUQsSUFBSSxLQUFLO1FBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7S0FDdEI7Ozs7O0lBRUQsSUFBSSxLQUFLLENBQUMsS0FBYztRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDeEQ7Ozs7O0lBVUQsV0FBVztRQUNQLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0tBQ3JCOzs7OztJQUtELFFBQVE7O1FBRUosSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0tBQ3pGOzs7WUExREosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRSxFQUFFO2FBQ2Y7Ozs7WUFMUSxvQkFBb0I7WUFEcEIseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2VhcmNoQnVpbGRlckNvbXBvbmVudENvbnRleHQgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2NvbXBvbmVudC1jb250ZXh0LmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFNlYXJjaEJ1aWxkZXJHcm91cFNlcnZpY2UgfSBmcm9tICcuLi9zZWFyY2gtYnVpbGRlci1ncm91cC9zZWFyY2gtYnVpbGRlci1ncm91cC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2VhcmNoQnVpbGRlclNlcnZpY2UgfSBmcm9tICcuLi9zZWFyY2gtYnVpbGRlci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd1eC1iYXNlLXNlYXJjaCcsXHJcbiAgICB0ZW1wbGF0ZTogJydcclxufSlcclxuZXhwb3J0IGNsYXNzIEJhc2VTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG5cclxuICAgIHR5cGU6IHN0cmluZztcclxuICAgIGNvbmZpZzogYW55O1xyXG4gICAgY29udGV4dDogU2VhcmNoQnVpbGRlckNvbXBvbmVudENvbnRleHQ7XHJcblxyXG4gICAgcHJpdmF0ZSBfaWQ6IG51bWJlciA9IHRoaXMuX3NlYXJjaEJ1aWxkZXJTZXJ2aWNlLmdlbmVyYXRlQ29tcG9uZW50SWQoKTtcclxuICAgIHByaXZhdGUgX3ZhbGlkOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgY3VycmVudCB2YWx1ZSBvZiB0aGUgY29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIGdldCB2YWx1ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IHRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBjb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgc2V0IHZhbHVlKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLl9zZWFyY2hCdWlsZGVyU2VydmljZS5xdWVyeUhhc0NoYW5nZWQoKTtcclxuXHJcbiAgICAgICAgLy8gaWYgdmFsdWUgaGFzIGJlZW4gc2V0IHBlcmZvcm0gdmFsaWRhdGlvblxyXG4gICAgICAgIHRoaXMudmFsaWRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdmFsaWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCB2YWxpZCh2YWxpZDogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3ZhbGlkID0gdmFsaWQ7XHJcbiAgICAgICAgdGhpcy5fc2VhcmNoQnVpbGRlclNlcnZpY2Uuc2V0VmFsaWQodGhpcy5faWQsIHZhbGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9zZWFyY2hCdWlsZGVyU2VydmljZTogU2VhcmNoQnVpbGRlclNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfc2VhcmNoQnVpbGRlckdyb3VwU2VydmljZTogU2VhcmNoQnVpbGRlckdyb3VwU2VydmljZVxyXG4gICAgKSB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1ha2Ugc3VyZSB3ZSBjbGVhbiB1cCBhZnRlciBvdXJzZWx2ZXNcclxuICAgICAqL1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy52YWxpZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQZXJmb3JtIGFueSByZXF1aXJlZCB2YWxpZGF0aW9uIG9uIHRoZSB2YWx1ZVxyXG4gICAgICovXHJcbiAgICB2YWxpZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBpZiBhIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9uIGhhcyBiZWVuIHByb3ZpZGVkIHRoZW4gdXNlIGl0XHJcbiAgICAgICAgdGhpcy52YWxpZCA9IHRoaXMuY29uZmlnLnZhbGlkYXRpb24gPyB0aGlzLmNvbmZpZy52YWxpZGF0aW9uKHRoaXMsIHRoaXMudmFsdWUpIDogdHJ1ZTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFzZVNlYXJjaENvbXBvbmVudENvbmZpZyB7XHJcbiAgICBsYWJlbD86IHN0cmluZztcclxuICAgIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xyXG4gICAgdmFsaWRhdGlvbj86ICh2YWx1ZTogYW55KSA9PiBib29sZWFuO1xyXG59Il19