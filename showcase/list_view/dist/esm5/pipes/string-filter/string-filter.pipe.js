/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe, Injectable } from '@angular/core';
var StringFilterPipe = /** @class */ (function () {
    function StringFilterPipe() {
    }
    /**
     * @param {?} items
     * @param {?} value
     * @return {?}
     */
    StringFilterPipe.prototype.transform = /**
     * @param {?} items
     * @param {?} value
     * @return {?}
     */
    function (items, value) {
        if (!items) {
            return [];
        }
        return items.filter(function (it) { return it.toLowerCase().indexOf(value.toLowerCase()) >= 0; });
    };
    StringFilterPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'stringFilter'
                },] },
        { type: Injectable },
    ];
    return StringFilterPipe;
}());
export { StringFilterPipe };
function StringFilterPipe_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    StringFilterPipe.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    StringFilterPipe.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLWZpbHRlci5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbInBpcGVzL3N0cmluZy1maWx0ZXIvc3RyaW5nLWZpbHRlci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBaUIsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7OztJQU81RCxvQ0FBUzs7Ozs7SUFBVCxVQUFVLEtBQVksRUFBRSxLQUFhO1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNULE1BQU0sQ0FBQyxFQUFFLENBQUM7U0FDYjtRQUNELE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQWxELENBQWtELENBQUMsQ0FBQztLQUNqRjs7Z0JBVkosSUFBSSxTQUFDO29CQUNGLElBQUksRUFBRSxjQUFjO2lCQUN2QjtnQkFDQSxVQUFVOzsyQkFMWDs7U0FNYSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBJbmplY3RhYmxlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgICBuYW1lOiAnc3RyaW5nRmlsdGVyJ1xyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTdHJpbmdGaWx0ZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICB0cmFuc2Zvcm0oaXRlbXM6IGFueVtdLCB2YWx1ZTogc3RyaW5nKTogYW55W10geyAgXHJcbiAgICAgICAgaWYgKCFpdGVtcykge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpdGVtcy5maWx0ZXIoaXQgPT4gaXQudG9Mb3dlckNhc2UoKS5pbmRleE9mKHZhbHVlLnRvTG93ZXJDYXNlKCkpID49IDApO1xyXG4gICAgfVxyXG59Il19