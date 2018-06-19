/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe } from '@angular/core';
export class TimeFormatPipe {
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        return value < 10 ? '0' + value : value;
    }
}
TimeFormatPipe.decorators = [
    { type: Pipe, args: [{
                name: 'timeFormat'
            },] },
];
function TimeFormatPipe_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TimeFormatPipe.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TimeFormatPipe.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1mb3JtYXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3RpbWUtcGlja2VyL3RpbWUtZm9ybWF0LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBS3BELE1BQU07Ozs7O0lBRUosU0FBUyxDQUFDLEtBQWE7UUFDckIsTUFBTSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztLQUN6Qzs7O1lBUEYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxZQUFZO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICd0aW1lRm9ybWF0J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVGltZUZvcm1hdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIpOiBzdHJpbmcgfCBudW1iZXIge1xyXG4gICAgcmV0dXJuIHZhbHVlIDwgMTAgPyAnMCcgKyB2YWx1ZSA6IHZhbHVlO1xyXG4gIH1cclxuXHJcbn0iXX0=