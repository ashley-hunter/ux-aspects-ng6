/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
export class ScrollIntoViewService {
    /**
     * @param {?} elem
     * @param {?} scrollParent
     * @return {?}
     */
    scrollIntoView(elem, scrollParent) {
        const /** @type {?} */ offsetTop = (elem.getBoundingClientRect().top + scrollParent.scrollTop) - scrollParent.getBoundingClientRect().top;
        if (offsetTop < scrollParent.scrollTop) {
            scrollParent.scrollTop = offsetTop;
        }
        else {
            const /** @type {?} */ offsetBottom = offsetTop + elem.offsetHeight;
            if (offsetBottom > (scrollParent.scrollTop + scrollParent.clientHeight)) {
                scrollParent.scrollTop = offsetBottom - scrollParent.clientHeight;
            }
        }
    }
}
ScrollIntoViewService.decorators = [
    { type: Injectable },
];
function ScrollIntoViewService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ScrollIntoViewService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ScrollIntoViewService.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLWludG8tdmlldy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvc2Nyb2xsLWludG8tdmlldy1pZi9zY3JvbGwtaW50by12aWV3LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsTUFBTTs7Ozs7O0lBRUYsY0FBYyxDQUFDLElBQWlCLEVBQUUsWUFBeUI7UUFDdkQsdUJBQU0sU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxZQUFZLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFDekgsRUFBRSxDQUFDLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLFlBQVksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1NBQ3RDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSix1QkFBTSxZQUFZLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDbkQsRUFBRSxDQUFDLENBQUMsWUFBWSxHQUFHLENBQUMsWUFBWSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0RSxZQUFZLENBQUMsU0FBUyxHQUFHLFlBQVksR0FBRyxZQUFZLENBQUMsWUFBWSxDQUFDO2FBQ3JFO1NBQ0o7S0FDSjs7O1lBYkosVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNjcm9sbEludG9WaWV3U2VydmljZSB7XHJcblxyXG4gICAgc2Nyb2xsSW50b1ZpZXcoZWxlbTogSFRNTEVsZW1lbnQsIHNjcm9sbFBhcmVudDogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBvZmZzZXRUb3AgPSAoZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyBzY3JvbGxQYXJlbnQuc2Nyb2xsVG9wKSAtIHNjcm9sbFBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcbiAgICAgICAgaWYgKG9mZnNldFRvcCA8IHNjcm9sbFBhcmVudC5zY3JvbGxUb3ApIHtcclxuICAgICAgICAgICAgc2Nyb2xsUGFyZW50LnNjcm9sbFRvcCA9IG9mZnNldFRvcDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBvZmZzZXRCb3R0b20gPSBvZmZzZXRUb3AgKyBlbGVtLm9mZnNldEhlaWdodDtcclxuICAgICAgICAgICAgaWYgKG9mZnNldEJvdHRvbSA+IChzY3JvbGxQYXJlbnQuc2Nyb2xsVG9wICsgc2Nyb2xsUGFyZW50LmNsaWVudEhlaWdodCkpIHtcclxuICAgICAgICAgICAgICAgIHNjcm9sbFBhcmVudC5zY3JvbGxUb3AgPSBvZmZzZXRCb3R0b20gLSBzY3JvbGxQYXJlbnQuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19