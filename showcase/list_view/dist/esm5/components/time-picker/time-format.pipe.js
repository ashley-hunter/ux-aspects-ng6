/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe } from '@angular/core';
var TimeFormatPipe = /** @class */ (function () {
    function TimeFormatPipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    TimeFormatPipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value < 10 ? '0' + value : value;
    };
    TimeFormatPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'timeFormat'
                },] },
    ];
    return TimeFormatPipe;
}());
export { TimeFormatPipe };
function TimeFormatPipe_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TimeFormatPipe.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TimeFormatPipe.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1mb3JtYXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3RpbWUtcGlja2VyL3RpbWUtZm9ybWF0LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztJQU9sRCxrQ0FBUzs7OztJQUFULFVBQVUsS0FBYTtRQUNyQixNQUFNLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0tBQ3pDOztnQkFQRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLFlBQVk7aUJBQ25COzt5QkFKRDs7U0FLYSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICd0aW1lRm9ybWF0J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVGltZUZvcm1hdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIpOiBzdHJpbmcgfCBudW1iZXIge1xyXG4gICAgcmV0dXJuIHZhbHVlIDwgMTAgPyAnMCcgKyB2YWx1ZSA6IHZhbHVlO1xyXG4gIH1cclxuXHJcbn0iXX0=