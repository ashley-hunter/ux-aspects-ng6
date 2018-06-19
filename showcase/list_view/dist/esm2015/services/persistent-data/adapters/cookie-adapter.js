/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
export class CookieAdapter {
    /**
     * @param {?} key
     * @return {?}
     */
    getItem(key) {
        if (document.cookie) {
            // get all the cookies for this site
            const /** @type {?} */ cookies = document.cookie.split(';');
            // process the cookies into a from we can easily manage
            const /** @type {?} */ match = cookies
                .map(cookie => ({ key: cookie.split('=')[0].trim(), value: cookie.split('=')[1].trim() }))
                .find(cookie => cookie.key === key);
            return match ? match.value : null;
        }
        return null;
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    setItem(key, value) {
        document.cookie = `${key}=${value}; path=/`;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    removeItem(key) {
        document.cookie.split(';').forEach(cookie => {
            const /** @type {?} */ eqPos = cookie.indexOf('=');
            const /** @type {?} */ name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie;
            if (name === key) {
                document.cookie = cookie.trim().replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
            }
        });
    }
    /**
     * @return {?}
     */
    clear() {
        // call remove item on each cookie
        document.cookie.split(';').map(cookie => cookie.split('=')[0].trim())
            .forEach(cookie => this.removeItem(cookie));
    }
    /**
     * @return {?}
     */
    getSupported() {
        // cookies are supported in all browsers
        return this;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29va2llLWFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsic2VydmljZXMvcGVyc2lzdGVudC1kYXRhL2FkYXB0ZXJzL2Nvb2tpZS1hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxNQUFNOzs7OztJQUVGLE9BQU8sQ0FBQyxHQUFXO1FBRWYsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7O1lBR2xCLHVCQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzs7WUFHM0MsdUJBQU0sS0FBSyxHQUFHLE9BQU87aUJBQ2hCLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7aUJBQ3pGLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7WUFFeEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1NBQ3JDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztLQUNmOzs7Ozs7SUFFRCxPQUFPLENBQUMsR0FBVyxFQUFFLEtBQWE7UUFDOUIsUUFBUSxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsSUFBSSxLQUFLLFVBQVUsQ0FBQztLQUMvQzs7Ozs7SUFFRCxVQUFVLENBQUMsR0FBVztRQUVsQixRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDeEMsdUJBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbEMsdUJBQU0sSUFBSSxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUVsRSxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDZixRQUFRLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLGFBQWEsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7YUFDbEc7U0FDSixDQUFDLENBQUM7S0FDTjs7OztJQUVELEtBQUs7O1FBR0QsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNoRSxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7S0FDbkQ7Ozs7SUFFRCxZQUFZOztRQUVSLE1BQU0sQ0FBQyxJQUFJLENBQUM7S0FDZjtDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcmFnZUFkYXB0ZXIgfSBmcm9tICcuL3N0b3JhZ2UtYWRhcHRlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29va2llQWRhcHRlciBpbXBsZW1lbnRzIFN0b3JhZ2VBZGFwdGVyIHtcclxuXHJcbiAgICBnZXRJdGVtKGtleTogc3RyaW5nKTogc3RyaW5nIHtcclxuXHJcbiAgICAgICAgaWYgKGRvY3VtZW50LmNvb2tpZSkge1xyXG5cclxuICAgICAgICAgICAgLy8gZ2V0IGFsbCB0aGUgY29va2llcyBmb3IgdGhpcyBzaXRlXHJcbiAgICAgICAgICAgIGNvbnN0IGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHByb2Nlc3MgdGhlIGNvb2tpZXMgaW50byBhIGZyb20gd2UgY2FuIGVhc2lseSBtYW5hZ2VcclxuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBjb29raWVzXHJcbiAgICAgICAgICAgICAgICAubWFwKGNvb2tpZSA9PiAoeyBrZXk6IGNvb2tpZS5zcGxpdCgnPScpWzBdLnRyaW0oKSwgdmFsdWU6IGNvb2tpZS5zcGxpdCgnPScpWzFdLnRyaW0oKSB9KSlcclxuICAgICAgICAgICAgICAgIC5maW5kKGNvb2tpZSA9PiBjb29raWUua2V5ID09PSBrZXkpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG1hdGNoID8gbWF0Y2gudmFsdWUgOiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SXRlbShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGAke2tleX09JHt2YWx1ZX07IHBhdGg9L2A7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlSXRlbShrZXk6IHN0cmluZyk6IHZvaWQge1xyXG5cclxuICAgICAgICBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKS5mb3JFYWNoKGNvb2tpZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVxUG9zID0gY29va2llLmluZGV4T2YoJz0nKTtcclxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGVxUG9zID4gLTEgPyBjb29raWUuc3Vic3RyKDAsIGVxUG9zKS50cmltKCkgOiBjb29raWU7XHJcblxyXG4gICAgICAgICAgICBpZiAobmFtZSA9PT0ga2V5KSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUudHJpbSgpLnJlcGxhY2UoLz0uKi8sIGA9O2V4cGlyZXM9JHtuZXcgRGF0ZSgpLnRvVVRDU3RyaW5nKCl9O3BhdGg9L2ApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIC8vIGNhbGwgcmVtb3ZlIGl0ZW0gb24gZWFjaCBjb29raWVcclxuICAgICAgICBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKS5tYXAoY29va2llID0+IGNvb2tpZS5zcGxpdCgnPScpWzBdLnRyaW0oKSlcclxuICAgICAgICAgICAgLmZvckVhY2goY29va2llID0+IHRoaXMucmVtb3ZlSXRlbShjb29raWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdXBwb3J0ZWQoKTogU3RvcmFnZUFkYXB0ZXIge1xyXG4gICAgICAgIC8vIGNvb2tpZXMgYXJlIHN1cHBvcnRlZCBpbiBhbGwgYnJvd3NlcnNcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbn0iXX0=