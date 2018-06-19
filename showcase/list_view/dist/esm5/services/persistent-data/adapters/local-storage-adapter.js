/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { CookieAdapter } from './cookie-adapter';
var LocalStorageAdapter = /** @class */ (function () {
    function LocalStorageAdapter() {
    }
    /**
     * @param {?} key
     * @return {?}
     */
    LocalStorageAdapter.prototype.getItem = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return localStorage.getItem(key);
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    LocalStorageAdapter.prototype.setItem = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        localStorage.setItem(key, value);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    LocalStorageAdapter.prototype.removeItem = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        localStorage.removeItem(key);
    };
    /**
     * @return {?}
     */
    LocalStorageAdapter.prototype.clear = /**
     * @return {?}
     */
    function () {
        localStorage.clear();
    };
    /**
     * @return {?}
     */
    LocalStorageAdapter.prototype.getSupported = /**
     * @return {?}
     */
    function () {
        // if local storage variable does not exist fall back to cookies
        if (!localStorage) {
            return new CookieAdapter();
        }
        // try to make a test save to local storage to see if there are any exceptions
        try {
            localStorage.setItem('ux-persistent-data-service', 'ux-persistent-data-service');
            localStorage.removeItem('ux-persistent-data-service');
            return this;
        }
        catch (/** @type {?} */ err) {
            return new CookieAdapter();
        }
    };
    return LocalStorageAdapter;
}());
export { LocalStorageAdapter };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RvcmFnZS1hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL3BlcnNpc3RlbnQtZGF0YS9hZGFwdGVycy9sb2NhbC1zdG9yYWdlLWFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVqRCxJQUFBOzs7Ozs7O0lBRUkscUNBQU87Ozs7SUFBUCxVQUFRLEdBQVc7UUFDZixNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNwQzs7Ozs7O0lBRUQscUNBQU87Ozs7O0lBQVAsVUFBUSxHQUFXLEVBQUUsS0FBYTtRQUM5QixZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztLQUNwQzs7Ozs7SUFFRCx3Q0FBVTs7OztJQUFWLFVBQVcsR0FBVztRQUNsQixZQUFZLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2hDOzs7O0lBRUQsbUNBQUs7OztJQUFMO1FBQ0ksWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQ3hCOzs7O0lBRUQsMENBQVk7OztJQUFaOztRQUdJLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNoQixNQUFNLENBQUMsSUFBSSxhQUFhLEVBQUUsQ0FBQztTQUM5Qjs7UUFHRCxJQUFJLENBQUM7WUFDRCxZQUFZLENBQUMsT0FBTyxDQUFDLDRCQUE0QixFQUFFLDRCQUE0QixDQUFDLENBQUM7WUFDakYsWUFBWSxDQUFDLFVBQVUsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1lBRXRELE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDZjtRQUFDLEtBQUssQ0FBQyxDQUFDLGlCQUFBLEdBQUcsRUFBRSxDQUFDO1lBQ1gsTUFBTSxDQUFDLElBQUksYUFBYSxFQUFFLENBQUM7U0FDOUI7S0FDSjs4QkFyQ0w7SUF1Q0MsQ0FBQTtBQXBDRCwrQkFvQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdG9yYWdlQWRhcHRlciB9IGZyb20gJy4vc3RvcmFnZS1hZGFwdGVyJztcclxuaW1wb3J0IHsgQ29va2llQWRhcHRlciB9IGZyb20gJy4vY29va2llLWFkYXB0ZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvY2FsU3RvcmFnZUFkYXB0ZXIgaW1wbGVtZW50cyBTdG9yYWdlQWRhcHRlciB7XHJcblxyXG4gICAgZ2V0SXRlbShrZXk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SXRlbShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCk6IHZvaWQge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN1cHBvcnRlZCgpOiBTdG9yYWdlQWRhcHRlciB7XHJcblxyXG4gICAgICAgIC8vIGlmIGxvY2FsIHN0b3JhZ2UgdmFyaWFibGUgZG9lcyBub3QgZXhpc3QgZmFsbCBiYWNrIHRvIGNvb2tpZXNcclxuICAgICAgICBpZiAoIWxvY2FsU3RvcmFnZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENvb2tpZUFkYXB0ZXIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRyeSB0byBtYWtlIGEgdGVzdCBzYXZlIHRvIGxvY2FsIHN0b3JhZ2UgdG8gc2VlIGlmIHRoZXJlIGFyZSBhbnkgZXhjZXB0aW9uc1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1eC1wZXJzaXN0ZW50LWRhdGEtc2VydmljZScsICd1eC1wZXJzaXN0ZW50LWRhdGEtc2VydmljZScpO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXgtcGVyc2lzdGVudC1kYXRhLXNlcnZpY2UnKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENvb2tpZUFkYXB0ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59Il19