/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CookieAdapter = /** @class */ (function () {
    function CookieAdapter() {
    }
    /**
     * @param {?} key
     * @return {?}
     */
    CookieAdapter.prototype.getItem = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        if (document.cookie) {
            // get all the cookies for this site
            var /** @type {?} */ cookies = document.cookie.split(';');
            // process the cookies into a from we can easily manage
            var /** @type {?} */ match = cookies
                .map(function (cookie) { return ({ key: cookie.split('=')[0].trim(), value: cookie.split('=')[1].trim() }); })
                .find(function (cookie) { return cookie.key === key; });
            return match ? match.value : null;
        }
        return null;
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    CookieAdapter.prototype.setItem = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        document.cookie = key + "=" + value + "; path=/";
    };
    /**
     * @param {?} key
     * @return {?}
     */
    CookieAdapter.prototype.removeItem = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        document.cookie.split(';').forEach(function (cookie) {
            var /** @type {?} */ eqPos = cookie.indexOf('=');
            var /** @type {?} */ name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie;
            if (name === key) {
                document.cookie = cookie.trim().replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
            }
        });
    };
    /**
     * @return {?}
     */
    CookieAdapter.prototype.clear = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // call remove item on each cookie
        document.cookie.split(';').map(function (cookie) { return cookie.split('=')[0].trim(); })
            .forEach(function (cookie) { return _this.removeItem(cookie); });
    };
    /**
     * @return {?}
     */
    CookieAdapter.prototype.getSupported = /**
     * @return {?}
     */
    function () {
        // cookies are supported in all browsers
        return this;
    };
    return CookieAdapter;
}());
export { CookieAdapter };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29va2llLWFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsic2VydmljZXMvcGVyc2lzdGVudC1kYXRhL2FkYXB0ZXJzL2Nvb2tpZS1hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxJQUFBOzs7Ozs7O0lBRUksK0JBQU87Ozs7SUFBUCxVQUFRLEdBQVc7UUFFZixFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs7WUFHbEIscUJBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztZQUczQyxxQkFBTSxLQUFLLEdBQUcsT0FBTztpQkFDaEIsR0FBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBMUUsQ0FBMEUsQ0FBQztpQkFDekYsSUFBSSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQWxCLENBQWtCLENBQUMsQ0FBQztZQUV4QyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7U0FDckM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO0tBQ2Y7Ozs7OztJQUVELCtCQUFPOzs7OztJQUFQLFVBQVEsR0FBVyxFQUFFLEtBQWE7UUFDOUIsUUFBUSxDQUFDLE1BQU0sR0FBTSxHQUFHLFNBQUksS0FBSyxhQUFVLENBQUM7S0FDL0M7Ozs7O0lBRUQsa0NBQVU7Ozs7SUFBVixVQUFXLEdBQVc7UUFFbEIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsTUFBTTtZQUNyQyxxQkFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQyxxQkFBTSxJQUFJLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBRWxFLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNmLFFBQVEsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsZUFBYSxJQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxZQUFTLENBQUMsQ0FBQzthQUNsRztTQUNKLENBQUMsQ0FBQztLQUNOOzs7O0lBRUQsNkJBQUs7OztJQUFMO1FBQUEsaUJBS0M7O1FBRkcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBM0IsQ0FBMkIsQ0FBQzthQUNoRSxPQUFPLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUF2QixDQUF1QixDQUFDLENBQUM7S0FDbkQ7Ozs7SUFFRCxvQ0FBWTs7O0lBQVo7O1FBRUksTUFBTSxDQUFDLElBQUksQ0FBQztLQUNmO3dCQWhETDtJQWtEQyxDQUFBO0FBaERELHlCQWdEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0b3JhZ2VBZGFwdGVyIH0gZnJvbSAnLi9zdG9yYWdlLWFkYXB0ZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvb2tpZUFkYXB0ZXIgaW1wbGVtZW50cyBTdG9yYWdlQWRhcHRlciB7XHJcblxyXG4gICAgZ2V0SXRlbShrZXk6IHN0cmluZyk6IHN0cmluZyB7XHJcblxyXG4gICAgICAgIGlmIChkb2N1bWVudC5jb29raWUpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIGdldCBhbGwgdGhlIGNvb2tpZXMgZm9yIHRoaXMgc2l0ZVxyXG4gICAgICAgICAgICBjb25zdCBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XHJcblxyXG4gICAgICAgICAgICAvLyBwcm9jZXNzIHRoZSBjb29raWVzIGludG8gYSBmcm9tIHdlIGNhbiBlYXNpbHkgbWFuYWdlXHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gY29va2llc1xyXG4gICAgICAgICAgICAgICAgLm1hcChjb29raWUgPT4gKHsga2V5OiBjb29raWUuc3BsaXQoJz0nKVswXS50cmltKCksIHZhbHVlOiBjb29raWUuc3BsaXQoJz0nKVsxXS50cmltKCkgfSkpXHJcbiAgICAgICAgICAgICAgICAuZmluZChjb29raWUgPT4gY29va2llLmtleSA9PT0ga2V5KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBtYXRjaCA/IG1hdGNoLnZhbHVlIDogbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEl0ZW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBgJHtrZXl9PSR7dmFsdWV9OyBwYXRoPS9gO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuY29va2llLnNwbGl0KCc7JykuZm9yRWFjaChjb29raWUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBlcVBvcyA9IGNvb2tpZS5pbmRleE9mKCc9Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBlcVBvcyA+IC0xID8gY29va2llLnN1YnN0cigwLCBlcVBvcykudHJpbSgpIDogY29va2llO1xyXG5cclxuICAgICAgICAgICAgaWYgKG5hbWUgPT09IGtleSkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLnRyaW0oKS5yZXBsYWNlKC89LiovLCBgPTtleHBpcmVzPSR7bmV3IERhdGUoKS50b1VUQ1N0cmluZygpfTtwYXRoPS9gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCk6IHZvaWQge1xyXG5cclxuICAgICAgICAvLyBjYWxsIHJlbW92ZSBpdGVtIG9uIGVhY2ggY29va2llXHJcbiAgICAgICAgZG9jdW1lbnQuY29va2llLnNwbGl0KCc7JykubWFwKGNvb2tpZSA9PiBjb29raWUuc3BsaXQoJz0nKVswXS50cmltKCkpXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKGNvb2tpZSA9PiB0aGlzLnJlbW92ZUl0ZW0oY29va2llKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3VwcG9ydGVkKCk6IFN0b3JhZ2VBZGFwdGVyIHtcclxuICAgICAgICAvLyBjb29raWVzIGFyZSBzdXBwb3J0ZWQgaW4gYWxsIGJyb3dzZXJzXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG59Il19