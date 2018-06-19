/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CookieAdapter } from './adapters/cookie-adapter';
import { LocalStorageAdapter } from './adapters/local-storage-adapter';
import { SessionStorageAdapter } from './adapters/session-storage-adapter';
var PersistentDataService = /** @class */ (function () {
    function PersistentDataService() {
    }
    /**
     * Save the item in some form of persistent storage
     */
    /**
     * Save the item in some form of persistent storage
     * @param {?} key
     * @param {?} value
     * @param {?=} type
     * @return {?}
     */
    PersistentDataService.prototype.setItem = /**
     * Save the item in some form of persistent storage
     * @param {?} key
     * @param {?} value
     * @param {?=} type
     * @return {?}
     */
    function (key, value, type) {
        if (type === void 0) { type = PersistentDataStorageType.LocalStorage; }
        this.getAdapter(type).setItem(key, value);
    };
    /**
     * Get a stored value from persistent storage
     */
    /**
     * Get a stored value from persistent storage
     * @param {?} key
     * @param {?=} type
     * @return {?}
     */
    PersistentDataService.prototype.getItem = /**
     * Get a stored value from persistent storage
     * @param {?} key
     * @param {?=} type
     * @return {?}
     */
    function (key, type) {
        if (type === void 0) { type = PersistentDataStorageType.LocalStorage; }
        return this.getAdapter(type).getItem(key);
    };
    /**
     * Remove a stored value from persistent storage
     */
    /**
     * Remove a stored value from persistent storage
     * @param {?} key
     * @param {?=} type
     * @return {?}
     */
    PersistentDataService.prototype.removeItem = /**
     * Remove a stored value from persistent storage
     * @param {?} key
     * @param {?=} type
     * @return {?}
     */
    function (key, type) {
        if (type === void 0) { type = PersistentDataStorageType.LocalStorage; }
        this.getAdapter(type).removeItem(key);
    };
    /**
     * Remove a stored value from persistent storage
     */
    /**
     * Remove a stored value from persistent storage
     * @param {?=} type
     * @return {?}
     */
    PersistentDataService.prototype.clear = /**
     * Remove a stored value from persistent storage
     * @param {?=} type
     * @return {?}
     */
    function (type) {
        if (type === void 0) { type = PersistentDataStorageType.LocalStorage; }
        this.getAdapter(type).clear();
    };
    /**
     * Return the appropriate adapter based on the type requested
     * @param {?} type
     * @return {?}
     */
    PersistentDataService.prototype.getAdapter = /**
     * Return the appropriate adapter based on the type requested
     * @param {?} type
     * @return {?}
     */
    function (type) {
        switch (type) {
            case PersistentDataStorageType.Cookie:
                return new CookieAdapter();
            case PersistentDataStorageType.LocalStorage:
                var /** @type {?} */ localStorageAdapter = new LocalStorageAdapter();
                return localStorageAdapter.getSupported();
            case PersistentDataStorageType.SessionStorage:
                var /** @type {?} */ sessionStorageAdapter = new SessionStorageAdapter();
                return sessionStorageAdapter.getSupported();
        }
    };
    PersistentDataService.decorators = [
        { type: Injectable },
    ];
    return PersistentDataService;
}());
export { PersistentDataService };
function PersistentDataService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    PersistentDataService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    PersistentDataService.ctorParameters;
}
/** @enum {number} */
var PersistentDataStorageType = {
    LocalStorage: 0,
    Cookie: 1,
    SessionStorage: 2,
};
export { PersistentDataStorageType };
PersistentDataStorageType[PersistentDataStorageType.LocalStorage] = "LocalStorage";
PersistentDataStorageType[PersistentDataStorageType.Cookie] = "Cookie";
PersistentDataStorageType[PersistentDataStorageType.SessionStorage] = "SessionStorage";

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc2lzdGVudC1kYXRhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsic2VydmljZXMvcGVyc2lzdGVudC1kYXRhL3BlcnNpc3RlbnQtZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7OztJQUt2RTs7T0FFRzs7Ozs7Ozs7SUFDSCx1Q0FBTzs7Ozs7OztJQUFQLFVBQVEsR0FBVyxFQUFFLEtBQWEsRUFBRSxJQUF3RTtRQUF4RSxxQkFBQSxFQUFBLE9BQWtDLHlCQUF5QixDQUFDLFlBQVk7UUFDeEcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQzdDO0lBRUQ7O09BRUc7Ozs7Ozs7SUFDSCx1Q0FBTzs7Ozs7O0lBQVAsVUFBUSxHQUFXLEVBQUUsSUFBd0U7UUFBeEUscUJBQUEsRUFBQSxPQUFrQyx5QkFBeUIsQ0FBQyxZQUFZO1FBQ3pGLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUM3QztJQUVEOztPQUVHOzs7Ozs7O0lBQ0gsMENBQVU7Ozs7OztJQUFWLFVBQVcsR0FBVyxFQUFFLElBQXdFO1FBQXhFLHFCQUFBLEVBQUEsT0FBa0MseUJBQXlCLENBQUMsWUFBWTtRQUM1RixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUN6QztJQUVEOztPQUVHOzs7Ozs7SUFDSCxxQ0FBSzs7Ozs7SUFBTCxVQUFNLElBQXdFO1FBQXhFLHFCQUFBLEVBQUEsT0FBa0MseUJBQXlCLENBQUMsWUFBWTtRQUMxRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQ2pDOzs7Ozs7SUFLTywwQ0FBVTs7Ozs7Y0FBQyxJQUErQjtRQUU5QyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBRVgsS0FBSyx5QkFBeUIsQ0FBQyxNQUFNO2dCQUNqQyxNQUFNLENBQUMsSUFBSSxhQUFhLEVBQUUsQ0FBQztZQUUvQixLQUFLLHlCQUF5QixDQUFDLFlBQVk7Z0JBQ3ZDLHFCQUFNLG1CQUFtQixHQUFHLElBQUksbUJBQW1CLEVBQUUsQ0FBQztnQkFDdEQsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFlBQVksRUFBRSxDQUFDO1lBRTlDLEtBQUsseUJBQXlCLENBQUMsY0FBYztnQkFDekMscUJBQU0scUJBQXFCLEdBQUcsSUFBSSxxQkFBcUIsRUFBRSxDQUFDO2dCQUMxRCxNQUFNLENBQUMscUJBQXFCLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDbkQ7OztnQkFoRFIsVUFBVTs7Z0NBTlg7O1NBT2EscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdG9yYWdlQWRhcHRlciB9IGZyb20gJy4vYWRhcHRlcnMvc3RvcmFnZS1hZGFwdGVyJztcclxuaW1wb3J0IHsgQ29va2llQWRhcHRlciB9IGZyb20gJy4vYWRhcHRlcnMvY29va2llLWFkYXB0ZXInO1xyXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VBZGFwdGVyIH0gZnJvbSAnLi9hZGFwdGVycy9sb2NhbC1zdG9yYWdlLWFkYXB0ZXInO1xyXG5pbXBvcnQgeyBTZXNzaW9uU3RvcmFnZUFkYXB0ZXIgfSBmcm9tICcuL2FkYXB0ZXJzL3Nlc3Npb24tc3RvcmFnZS1hZGFwdGVyJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBlcnNpc3RlbnREYXRhU2VydmljZSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTYXZlIHRoZSBpdGVtIGluIHNvbWUgZm9ybSBvZiBwZXJzaXN0ZW50IHN0b3JhZ2VcclxuICAgICAqL1xyXG4gICAgc2V0SXRlbShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZywgdHlwZTogUGVyc2lzdGVudERhdGFTdG9yYWdlVHlwZSA9IFBlcnNpc3RlbnREYXRhU3RvcmFnZVR5cGUuTG9jYWxTdG9yYWdlKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5nZXRBZGFwdGVyKHR5cGUpLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYSBzdG9yZWQgdmFsdWUgZnJvbSBwZXJzaXN0ZW50IHN0b3JhZ2VcclxuICAgICAqL1xyXG4gICAgZ2V0SXRlbShrZXk6IHN0cmluZywgdHlwZTogUGVyc2lzdGVudERhdGFTdG9yYWdlVHlwZSA9IFBlcnNpc3RlbnREYXRhU3RvcmFnZVR5cGUuTG9jYWxTdG9yYWdlKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRBZGFwdGVyKHR5cGUpLmdldEl0ZW0oa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZSBhIHN0b3JlZCB2YWx1ZSBmcm9tIHBlcnNpc3RlbnQgc3RvcmFnZVxyXG4gICAgICovXHJcbiAgICByZW1vdmVJdGVtKGtleTogc3RyaW5nLCB0eXBlOiBQZXJzaXN0ZW50RGF0YVN0b3JhZ2VUeXBlID0gUGVyc2lzdGVudERhdGFTdG9yYWdlVHlwZS5Mb2NhbFN0b3JhZ2UpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmdldEFkYXB0ZXIodHlwZSkucmVtb3ZlSXRlbShrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlIGEgc3RvcmVkIHZhbHVlIGZyb20gcGVyc2lzdGVudCBzdG9yYWdlXHJcbiAgICAgKi9cclxuICAgIGNsZWFyKHR5cGU6IFBlcnNpc3RlbnREYXRhU3RvcmFnZVR5cGUgPSBQZXJzaXN0ZW50RGF0YVN0b3JhZ2VUeXBlLkxvY2FsU3RvcmFnZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZ2V0QWRhcHRlcih0eXBlKS5jbGVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJuIHRoZSBhcHByb3ByaWF0ZSBhZGFwdGVyIGJhc2VkIG9uIHRoZSB0eXBlIHJlcXVlc3RlZFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdldEFkYXB0ZXIodHlwZTogUGVyc2lzdGVudERhdGFTdG9yYWdlVHlwZSk6IFN0b3JhZ2VBZGFwdGVyIHtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFBlcnNpc3RlbnREYXRhU3RvcmFnZVR5cGUuQ29va2llOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb29raWVBZGFwdGVyKCk7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFBlcnNpc3RlbnREYXRhU3RvcmFnZVR5cGUuTG9jYWxTdG9yYWdlOlxyXG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxTdG9yYWdlQWRhcHRlciA9IG5ldyBMb2NhbFN0b3JhZ2VBZGFwdGVyKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlQWRhcHRlci5nZXRTdXBwb3J0ZWQoKTtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgUGVyc2lzdGVudERhdGFTdG9yYWdlVHlwZS5TZXNzaW9uU3RvcmFnZTpcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlc3Npb25TdG9yYWdlQWRhcHRlciA9IG5ldyBTZXNzaW9uU3RvcmFnZUFkYXB0ZXIoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZUFkYXB0ZXIuZ2V0U3VwcG9ydGVkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBQZXJzaXN0ZW50RGF0YVN0b3JhZ2VUeXBlIHtcclxuICAgIExvY2FsU3RvcmFnZSxcclxuICAgIENvb2tpZSxcclxuICAgIFNlc3Npb25TdG9yYWdlXHJcbn0iXX0=