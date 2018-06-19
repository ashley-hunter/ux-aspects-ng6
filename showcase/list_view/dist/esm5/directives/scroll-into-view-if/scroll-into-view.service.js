/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
var ScrollIntoViewService = /** @class */ (function () {
    function ScrollIntoViewService() {
    }
    /**
     * @param {?} elem
     * @param {?} scrollParent
     * @return {?}
     */
    ScrollIntoViewService.prototype.scrollIntoView = /**
     * @param {?} elem
     * @param {?} scrollParent
     * @return {?}
     */
    function (elem, scrollParent) {
        var /** @type {?} */ offsetTop = (elem.getBoundingClientRect().top + scrollParent.scrollTop) - scrollParent.getBoundingClientRect().top;
        if (offsetTop < scrollParent.scrollTop) {
            scrollParent.scrollTop = offsetTop;
        }
        else {
            var /** @type {?} */ offsetBottom = offsetTop + elem.offsetHeight;
            if (offsetBottom > (scrollParent.scrollTop + scrollParent.clientHeight)) {
                scrollParent.scrollTop = offsetBottom - scrollParent.clientHeight;
            }
        }
    };
    ScrollIntoViewService.decorators = [
        { type: Injectable },
    ];
    return ScrollIntoViewService;
}());
export { ScrollIntoViewService };
function ScrollIntoViewService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ScrollIntoViewService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ScrollIntoViewService.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLWludG8tdmlldy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvc2Nyb2xsLWludG8tdmlldy1pZi9zY3JvbGwtaW50by12aWV3LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7OztJQUt2Qyw4Q0FBYzs7Ozs7SUFBZCxVQUFlLElBQWlCLEVBQUUsWUFBeUI7UUFDdkQscUJBQU0sU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxZQUFZLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFDekgsRUFBRSxDQUFDLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLFlBQVksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1NBQ3RDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixxQkFBTSxZQUFZLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDbkQsRUFBRSxDQUFDLENBQUMsWUFBWSxHQUFHLENBQUMsWUFBWSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0RSxZQUFZLENBQUMsU0FBUyxHQUFHLFlBQVksR0FBRyxZQUFZLENBQUMsWUFBWSxDQUFDO2FBQ3JFO1NBQ0o7S0FDSjs7Z0JBYkosVUFBVTs7Z0NBRlg7O1NBR2EscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2Nyb2xsSW50b1ZpZXdTZXJ2aWNlIHtcclxuXHJcbiAgICBzY3JvbGxJbnRvVmlldyhlbGVtOiBIVE1MRWxlbWVudCwgc2Nyb2xsUGFyZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IG9mZnNldFRvcCA9IChlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHNjcm9sbFBhcmVudC5zY3JvbGxUb3ApIC0gc2Nyb2xsUGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuICAgICAgICBpZiAob2Zmc2V0VG9wIDwgc2Nyb2xsUGFyZW50LnNjcm9sbFRvcCkge1xyXG4gICAgICAgICAgICBzY3JvbGxQYXJlbnQuc2Nyb2xsVG9wID0gb2Zmc2V0VG9wO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldEJvdHRvbSA9IG9mZnNldFRvcCArIGVsZW0ub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgICAgICBpZiAob2Zmc2V0Qm90dG9tID4gKHNjcm9sbFBhcmVudC5zY3JvbGxUb3AgKyBzY3JvbGxQYXJlbnQuY2xpZW50SGVpZ2h0KSkge1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsUGFyZW50LnNjcm9sbFRvcCA9IG9mZnNldEJvdHRvbSAtIHNjcm9sbFBhcmVudC5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=