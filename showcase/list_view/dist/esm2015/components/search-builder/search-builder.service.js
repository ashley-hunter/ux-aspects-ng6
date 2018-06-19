/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
export class SearchBuilderService {
    constructor() {
        this.query = {};
        this.queryChange = new Subject();
        this.validationChange = new BehaviorSubject(true);
        this._componentId = 0;
        this._components = [];
        this._validation = {};
    }
    /**
     * Add a component to the internal list of components
     * @param {?} component
     * @return {?}
     */
    registerComponent(component) {
        // ensure there are no components with a matching name
        if (this._components.find(cmp => cmp.name === component.name)) {
            throw new Error(`Search builder components must have a unique name. The name ${component.name} has already been used.`);
        }
        // if unique then add the component to the list
        this._components.push(component);
    }
    /**
     * Bulk registration of components
     * (Just a helper method)
     * @param {?} components
     * @return {?}
     */
    registerComponents(components) {
        components.forEach(component => this.registerComponent(component));
    }
    /**
     * Get a registered component class
     * @param {?} name
     * @return {?}
     */
    getComponent(name) {
        // find the component
        const /** @type {?} */ component = this._components.find(cmp => cmp.name === name);
        // if there is no match throw an exception
        if (!component) {
            throw new Error(`No search build component with the name ${name} exists`);
        }
        // ensure config is defined - at least to an empty object
        component.config = component.config || {};
        return component;
    }
    /**
     * Update the internal search query state
     * note that the query will be immutable
     * @param {?} query
     * @return {?}
     */
    setQuery(query) {
        this.query = Object.assign({}, query);
    }
    /**
     * Return the current query state
     * @return {?}
     */
    getQuery() {
        return this.query;
    }
    /**
     * Trigger the observable to indicate the query has been updated
     * @return {?}
     */
    queryHasChanged() {
        this.queryChange.next(this.query);
    }
    /**
     * Store the validation state of the query
     * @param {?} id
     * @param {?} valid
     * @return {?}
     */
    setValid(id, valid) {
        // store the state for this specific component
        this._validation[id] = valid;
        // evaluate the entire validation state
        this.validationChange.next(!Object.keys(this._validation).some(key => !this._validation[key]));
    }
    /**
     * Generate a unique id for each component
     * @return {?}
     */
    generateComponentId() {
        return this._componentId++;
    }
}
SearchBuilderService.decorators = [
    { type: Injectable },
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJ1aWxkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3NlYXJjaC1idWlsZGVyL3NlYXJjaC1idWlsZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBSSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFLbEQsTUFBTTs7cUJBRXdCLEVBQUU7MkJBQ2EsSUFBSSxPQUFPLEVBQXNCO2dDQUMvQixJQUFJLGVBQWUsQ0FBVSxJQUFJLENBQUM7NEJBRWhELENBQUM7MkJBQzBCLEVBQUU7MkJBQ1YsRUFBRTs7Ozs7OztJQUtwRCxpQkFBaUIsQ0FBQyxTQUEyQzs7UUFHM0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUQsTUFBTSxJQUFJLEtBQUssQ0FBQywrREFBK0QsU0FBUyxDQUFDLElBQUkseUJBQXlCLENBQUMsQ0FBQztTQUN6SDs7UUFHRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUNsQzs7Ozs7OztJQU1ELGtCQUFrQixDQUFDLFVBQThDO1FBQy9ELFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztLQUNwRTs7Ozs7O0lBS0QsWUFBWSxDQUFDLElBQVk7O1FBR3ZCLHVCQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUM7O1FBR2xFLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNmLE1BQU0sSUFBSSxLQUFLLENBQUMsMkNBQTJDLElBQUksU0FBUyxDQUFDLENBQUM7U0FDM0U7O1FBR0QsU0FBUyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUUxQyxNQUFNLENBQUMsU0FBUyxDQUFDO0tBQ2xCOzs7Ozs7O0lBTUQsUUFBUSxDQUFDLEtBQXlCO1FBQ2hDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDdkM7Ozs7O0lBS0QsUUFBUTtRQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0tBQ25COzs7OztJQUtELGVBQWU7UUFDYixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbkM7Ozs7Ozs7SUFLRCxRQUFRLENBQUMsRUFBVSxFQUFFLEtBQWM7O1FBR2pDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDOztRQUc3QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNoRzs7Ozs7SUFLRCxtQkFBbUI7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUM1Qjs7O1lBM0ZGLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCAsICBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFNlYXJjaEJ1aWxkZXJDb21wb25lbnREZWZpbml0aW9uIH0gZnJvbSAnLi9pbnRlcmZhY2VzL2NvbXBvbmVudC1kZWZpbml0aW9uLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFNlYXJjaEJ1aWxkZXJRdWVyeSB9IGZyb20gJy4vaW50ZXJmYWNlcy9xdWVyeS5pbnRlcmZhY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoQnVpbGRlclNlcnZpY2Uge1xyXG5cclxuICBxdWVyeTogU2VhcmNoQnVpbGRlclF1ZXJ5ID0ge307XHJcbiAgcXVlcnlDaGFuZ2U6IFN1YmplY3Q8U2VhcmNoQnVpbGRlclF1ZXJ5PiA9IG5ldyBTdWJqZWN0PFNlYXJjaEJ1aWxkZXJRdWVyeT4oKTtcclxuICB2YWxpZGF0aW9uQ2hhbmdlOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KHRydWUpO1xyXG5cclxuICBwcml2YXRlIF9jb21wb25lbnRJZDogbnVtYmVyID0gMDtcclxuICBwcml2YXRlIF9jb21wb25lbnRzOiBTZWFyY2hCdWlsZGVyQ29tcG9uZW50RGVmaW5pdGlvbltdID0gW107XHJcbiAgcHJpdmF0ZSBfdmFsaWRhdGlvbjogeyBba2V5OiBudW1iZXJdOiBib29sZWFuIH0gPSB7fTtcclxuXHJcbiAgLyoqXHJcbiAgICogQWRkIGEgY29tcG9uZW50IHRvIHRoZSBpbnRlcm5hbCBsaXN0IG9mIGNvbXBvbmVudHNcclxuICAgKi9cclxuICByZWdpc3RlckNvbXBvbmVudChjb21wb25lbnQ6IFNlYXJjaEJ1aWxkZXJDb21wb25lbnREZWZpbml0aW9uKTogdm9pZCB7XHJcblxyXG4gICAgLy8gZW5zdXJlIHRoZXJlIGFyZSBubyBjb21wb25lbnRzIHdpdGggYSBtYXRjaGluZyBuYW1lXHJcbiAgICBpZiAodGhpcy5fY29tcG9uZW50cy5maW5kKGNtcCA9PiBjbXAubmFtZSA9PT0gY29tcG9uZW50Lm5hbWUpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgU2VhcmNoIGJ1aWxkZXIgY29tcG9uZW50cyBtdXN0IGhhdmUgYSB1bmlxdWUgbmFtZS4gVGhlIG5hbWUgJHtjb21wb25lbnQubmFtZX0gaGFzIGFscmVhZHkgYmVlbiB1c2VkLmApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGlmIHVuaXF1ZSB0aGVuIGFkZCB0aGUgY29tcG9uZW50IHRvIHRoZSBsaXN0XHJcbiAgICB0aGlzLl9jb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEJ1bGsgcmVnaXN0cmF0aW9uIG9mIGNvbXBvbmVudHNcclxuICAgKiAoSnVzdCBhIGhlbHBlciBtZXRob2QpXHJcbiAgICovXHJcbiAgcmVnaXN0ZXJDb21wb25lbnRzKGNvbXBvbmVudHM6IFNlYXJjaEJ1aWxkZXJDb21wb25lbnREZWZpbml0aW9uW10pOiB2b2lkIHtcclxuICAgIGNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4gdGhpcy5yZWdpc3RlckNvbXBvbmVudChjb21wb25lbnQpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBhIHJlZ2lzdGVyZWQgY29tcG9uZW50IGNsYXNzXHJcbiAgICovXHJcbiAgZ2V0Q29tcG9uZW50KG5hbWU6IHN0cmluZyk6IGFueSB7XHJcblxyXG4gICAgLy8gZmluZCB0aGUgY29tcG9uZW50XHJcbiAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLl9jb21wb25lbnRzLmZpbmQoY21wID0+IGNtcC5uYW1lID09PSBuYW1lKTtcclxuXHJcbiAgICAvLyBpZiB0aGVyZSBpcyBubyBtYXRjaCB0aHJvdyBhbiBleGNlcHRpb25cclxuICAgIGlmICghY29tcG9uZW50KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gc2VhcmNoIGJ1aWxkIGNvbXBvbmVudCB3aXRoIHRoZSBuYW1lICR7bmFtZX0gZXhpc3RzYCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZW5zdXJlIGNvbmZpZyBpcyBkZWZpbmVkIC0gYXQgbGVhc3QgdG8gYW4gZW1wdHkgb2JqZWN0XHJcbiAgICBjb21wb25lbnQuY29uZmlnID0gY29tcG9uZW50LmNvbmZpZyB8fCB7fTtcclxuXHJcbiAgICByZXR1cm4gY29tcG9uZW50O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlIHRoZSBpbnRlcm5hbCBzZWFyY2ggcXVlcnkgc3RhdGVcclxuICAgKiBub3RlIHRoYXQgdGhlIHF1ZXJ5IHdpbGwgYmUgaW1tdXRhYmxlXHJcbiAgICovXHJcbiAgc2V0UXVlcnkocXVlcnk6IFNlYXJjaEJ1aWxkZXJRdWVyeSk6IHZvaWQge1xyXG4gICAgdGhpcy5xdWVyeSA9IE9iamVjdC5hc3NpZ24oe30sIHF1ZXJ5KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybiB0aGUgY3VycmVudCBxdWVyeSBzdGF0ZVxyXG4gICAqL1xyXG4gIGdldFF1ZXJ5KCk6IFNlYXJjaEJ1aWxkZXJRdWVyeSB7XHJcbiAgICByZXR1cm4gdGhpcy5xdWVyeTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRyaWdnZXIgdGhlIG9ic2VydmFibGUgdG8gaW5kaWNhdGUgdGhlIHF1ZXJ5IGhhcyBiZWVuIHVwZGF0ZWRcclxuICAgKi9cclxuICBxdWVyeUhhc0NoYW5nZWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnF1ZXJ5Q2hhbmdlLm5leHQodGhpcy5xdWVyeSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdG9yZSB0aGUgdmFsaWRhdGlvbiBzdGF0ZSBvZiB0aGUgcXVlcnlcclxuICAgKi9cclxuICBzZXRWYWxpZChpZDogbnVtYmVyLCB2YWxpZDogYm9vbGVhbik6IHZvaWQge1xyXG5cclxuICAgIC8vIHN0b3JlIHRoZSBzdGF0ZSBmb3IgdGhpcyBzcGVjaWZpYyBjb21wb25lbnRcclxuICAgIHRoaXMuX3ZhbGlkYXRpb25baWRdID0gdmFsaWQ7XHJcblxyXG4gICAgLy8gZXZhbHVhdGUgdGhlIGVudGlyZSB2YWxpZGF0aW9uIHN0YXRlXHJcbiAgICB0aGlzLnZhbGlkYXRpb25DaGFuZ2UubmV4dCghT2JqZWN0LmtleXModGhpcy5fdmFsaWRhdGlvbikuc29tZShrZXkgPT4gIXRoaXMuX3ZhbGlkYXRpb25ba2V5XSkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2VuZXJhdGUgYSB1bmlxdWUgaWQgZm9yIGVhY2ggY29tcG9uZW50XHJcbiAgICovXHJcbiAgZ2VuZXJhdGVDb21wb25lbnRJZCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbXBvbmVudElkKys7XHJcbiAgfVxyXG59XHJcbiJdfQ==