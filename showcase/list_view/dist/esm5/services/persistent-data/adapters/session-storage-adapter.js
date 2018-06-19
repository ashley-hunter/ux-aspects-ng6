/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { CookieAdapter } from './cookie-adapter';
var SessionStorageAdapter = /** @class */ (function () {
    function SessionStorageAdapter() {
    }
    /**
     * @param {?} key
     * @return {?}
     */
    SessionStorageAdapter.prototype.getItem = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return sessionStorage.getItem(key);
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    SessionStorageAdapter.prototype.setItem = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        sessionStorage.setItem(key, value);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    SessionStorageAdapter.prototype.removeItem = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        sessionStorage.removeItem(key);
    };
    /**
     * @return {?}
     */
    SessionStorageAdapter.prototype.clear = /**
     * @return {?}
     */
    function () {
        sessionStorage.clear();
    };
    /**
     * @return {?}
     */
    SessionStorageAdapter.prototype.getSupported = /**
     * @return {?}
     */
    function () {
        // if local storage variable does not exist fall back to cookies
        if (!sessionStorage) {
            return new CookieAdapter();
        }
        // try to make a test save to local storage to see if there are any exceptions
        try {
            sessionStorage.setItem('ux-persistent-data-service', 'ux-persistent-data-service');
            sessionStorage.removeItem('ux-persistent-data-service');
            return this;
        }
        catch (/** @type {?} */ err) {
            return new CookieAdapter();
        }
    };
    return SessionStorageAdapter;
}());
export { SessionStorageAdapter };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi1zdG9yYWdlLWFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsic2VydmljZXMvcGVyc2lzdGVudC1kYXRhL2FkYXB0ZXJzL3Nlc3Npb24tc3RvcmFnZS1hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFakQsSUFBQTs7Ozs7OztJQUVJLHVDQUFPOzs7O0lBQVAsVUFBUSxHQUFXO1FBQ2YsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDdEM7Ozs7OztJQUVELHVDQUFPOzs7OztJQUFQLFVBQVEsR0FBVyxFQUFFLEtBQWE7UUFDOUIsY0FBYyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDdEM7Ozs7O0lBRUQsMENBQVU7Ozs7SUFBVixVQUFXLEdBQVc7UUFDbEIsY0FBYyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNsQzs7OztJQUVELHFDQUFLOzs7SUFBTDtRQUNJLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUMxQjs7OztJQUVELDRDQUFZOzs7SUFBWjs7UUFHSSxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsTUFBTSxDQUFDLElBQUksYUFBYSxFQUFFLENBQUM7U0FDOUI7O1FBR0QsSUFBSSxDQUFDO1lBQ0QsY0FBYyxDQUFDLE9BQU8sQ0FBQyw0QkFBNEIsRUFBRSw0QkFBNEIsQ0FBQyxDQUFDO1lBQ25GLGNBQWMsQ0FBQyxVQUFVLENBQUMsNEJBQTRCLENBQUMsQ0FBQztZQUV4RCxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQ2Y7UUFBQyxLQUFLLENBQUMsQ0FBQyxpQkFBQSxHQUFHLEVBQUUsQ0FBQztZQUNYLE1BQU0sQ0FBQyxJQUFJLGFBQWEsRUFBRSxDQUFDO1NBQzlCO0tBQ0o7Z0NBckNMO0lBdUNDLENBQUE7QUFwQ0QsaUNBb0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcmFnZUFkYXB0ZXIgfSBmcm9tICcuL3N0b3JhZ2UtYWRhcHRlcic7XHJcbmltcG9ydCB7IENvb2tpZUFkYXB0ZXIgfSBmcm9tICcuL2Nvb2tpZS1hZGFwdGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTZXNzaW9uU3RvcmFnZUFkYXB0ZXIgaW1wbGVtZW50cyBTdG9yYWdlQWRhcHRlciB7XHJcblxyXG4gICAgZ2V0SXRlbShrZXk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRJdGVtKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVJdGVtKGtleTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCk6IHZvaWQge1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3VwcG9ydGVkKCk6IFN0b3JhZ2VBZGFwdGVyIHtcclxuXHJcbiAgICAgICAgLy8gaWYgbG9jYWwgc3RvcmFnZSB2YXJpYWJsZSBkb2VzIG5vdCBleGlzdCBmYWxsIGJhY2sgdG8gY29va2llc1xyXG4gICAgICAgIGlmICghc2Vzc2lvblN0b3JhZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb29raWVBZGFwdGVyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0cnkgdG8gbWFrZSBhIHRlc3Qgc2F2ZSB0byBsb2NhbCBzdG9yYWdlIHRvIHNlZSBpZiB0aGVyZSBhcmUgYW55IGV4Y2VwdGlvbnNcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd1eC1wZXJzaXN0ZW50LWRhdGEtc2VydmljZScsICd1eC1wZXJzaXN0ZW50LWRhdGEtc2VydmljZScpO1xyXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCd1eC1wZXJzaXN0ZW50LWRhdGEtc2VydmljZScpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29va2llQWRhcHRlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iXX0=