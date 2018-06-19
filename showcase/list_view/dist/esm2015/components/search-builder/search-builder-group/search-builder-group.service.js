/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SearchBuilderService } from '../search-builder.service';
export class SearchBuilderGroupService {
    /**
     * @param {?} _searchBuilderService
     */
    constructor(_searchBuilderService) {
        this._searchBuilderService = _searchBuilderService;
    }
    /**
     * Initialise the group by defining an id
     * @param {?} id
     * @return {?}
     */
    init(id) {
        // store the name of the group
        this._id = id;
        // create the entry in the query object if it doesn't exist
        if (!this._searchBuilderService.query[this._id]) {
            // create the section
            this._searchBuilderService.query[this._id] = [];
            // emit the changes after the initial setup
            setTimeout(() => this._searchBuilderService.queryHasChanged());
        }
    }
    /**
     * Remove a field from the search builder query
     * @param {?} field
     * @return {?}
     */
    remove(field) {
        // get the query for this group
        const /** @type {?} */ query = this.getQuery();
        // remove the field from the array
        query.splice(query.indexOf(field), 1);
    }
    /**
     * Get the query for this specific search group
     * @return {?}
     */
    getQuery() {
        return this._searchBuilderService.query[this._id] ? this._searchBuilderService.query[this._id] : [];
    }
}
SearchBuilderGroupService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
SearchBuilderGroupService.ctorParameters = () => [
    { type: SearchBuilderService, },
];
function SearchBuilderGroupService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SearchBuilderGroupService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SearchBuilderGroupService.ctorParameters;
    /** @type {?} */
    SearchBuilderGroupService.prototype._id;
    /** @type {?} */
    SearchBuilderGroupService.prototype._searchBuilderService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJ1aWxkZXItZ3JvdXAuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3NlYXJjaC1idWlsZGVyL3NlYXJjaC1idWlsZGVyLWdyb3VwL3NlYXJjaC1idWlsZGVyLWdyb3VwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHakUsTUFBTTs7OztJQUlKLFlBQW9CLHFCQUEyQztRQUEzQywwQkFBcUIsR0FBckIscUJBQXFCLENBQXNCO0tBQUs7Ozs7OztJQUtwRSxJQUFJLENBQUMsRUFBVTs7UUFFYixJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQzs7UUFHZCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7WUFHaEQsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDOztZQUdoRCxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7U0FDaEU7S0FDRjs7Ozs7O0lBS0QsTUFBTSxDQUFDLEtBQThCOztRQUVuQyx1QkFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDOztRQUc5QixLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDdkM7Ozs7O0lBS0QsUUFBUTtRQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztLQUNyRzs7O1lBekNGLFVBQVU7Ozs7WUFGRixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNlYXJjaEJ1aWxkZXJHcm91cFF1ZXJ5IH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9ncm91cC1xdWVyeS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBTZWFyY2hCdWlsZGVyU2VydmljZSB9IGZyb20gJy4uL3NlYXJjaC1idWlsZGVyLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoQnVpbGRlckdyb3VwU2VydmljZSB7XHJcblxyXG4gIHByaXZhdGUgX2lkOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NlYXJjaEJ1aWxkZXJTZXJ2aWNlOiBTZWFyY2hCdWlsZGVyU2VydmljZSkgeyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpc2UgdGhlIGdyb3VwIGJ5IGRlZmluaW5nIGFuIGlkXHJcbiAgICovXHJcbiAgaW5pdChpZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAvLyBzdG9yZSB0aGUgbmFtZSBvZiB0aGUgZ3JvdXBcclxuICAgIHRoaXMuX2lkID0gaWQ7XHJcblxyXG4gICAgLy8gY3JlYXRlIHRoZSBlbnRyeSBpbiB0aGUgcXVlcnkgb2JqZWN0IGlmIGl0IGRvZXNuJ3QgZXhpc3RcclxuICAgIGlmICghdGhpcy5fc2VhcmNoQnVpbGRlclNlcnZpY2UucXVlcnlbdGhpcy5faWRdKSB7XHJcblxyXG4gICAgICAvLyBjcmVhdGUgdGhlIHNlY3Rpb25cclxuICAgICAgdGhpcy5fc2VhcmNoQnVpbGRlclNlcnZpY2UucXVlcnlbdGhpcy5faWRdID0gW107XHJcblxyXG4gICAgICAvLyBlbWl0IHRoZSBjaGFuZ2VzIGFmdGVyIHRoZSBpbml0aWFsIHNldHVwXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5fc2VhcmNoQnVpbGRlclNlcnZpY2UucXVlcnlIYXNDaGFuZ2VkKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlIGEgZmllbGQgZnJvbSB0aGUgc2VhcmNoIGJ1aWxkZXIgcXVlcnlcclxuICAgKi9cclxuICByZW1vdmUoZmllbGQ6IFNlYXJjaEJ1aWxkZXJHcm91cFF1ZXJ5KTogdm9pZCB7XHJcbiAgICAvLyBnZXQgdGhlIHF1ZXJ5IGZvciB0aGlzIGdyb3VwXHJcbiAgICBjb25zdCBxdWVyeSA9IHRoaXMuZ2V0UXVlcnkoKTtcclxuXHJcbiAgICAvLyByZW1vdmUgdGhlIGZpZWxkIGZyb20gdGhlIGFycmF5XHJcbiAgICBxdWVyeS5zcGxpY2UocXVlcnkuaW5kZXhPZihmaWVsZCksIDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHRoZSBxdWVyeSBmb3IgdGhpcyBzcGVjaWZpYyBzZWFyY2ggZ3JvdXBcclxuICAgKi9cclxuICBnZXRRdWVyeSgpOiBTZWFyY2hCdWlsZGVyR3JvdXBRdWVyeVtdIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWFyY2hCdWlsZGVyU2VydmljZS5xdWVyeVt0aGlzLl9pZF0gPyB0aGlzLl9zZWFyY2hCdWlsZGVyU2VydmljZS5xdWVyeVt0aGlzLl9pZF0gOiBbXTtcclxuICB9XHJcbn1cclxuIl19