/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
var FloatingActionButtonsService = /** @class */ (function () {
    function FloatingActionButtonsService() {
        this.open$ = new BehaviorSubject(false);
    }
    /**
     * @return {?}
     */
    FloatingActionButtonsService.prototype.open = /**
     * @return {?}
     */
    function () {
        this.open$.next(true);
    };
    /**
     * @return {?}
     */
    FloatingActionButtonsService.prototype.toggle = /**
     * @return {?}
     */
    function () {
        this.open$.next(!this.open$.getValue());
    };
    /**
     * @return {?}
     */
    FloatingActionButtonsService.prototype.close = /**
     * @return {?}
     */
    function () {
        this.open$.next(false);
    };
    FloatingActionButtonsService.decorators = [
        { type: Injectable },
    ];
    return FloatingActionButtonsService;
}());
export { FloatingActionButtonsService };
function FloatingActionButtonsService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FloatingActionButtonsService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FloatingActionButtonsService.ctorParameters;
    /** @type {?} */
    FloatingActionButtonsService.prototype.open$;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvYXRpbmctYWN0aW9uLWJ1dHRvbnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2Zsb2F0aW5nLWFjdGlvbi1idXR0b25zL2Zsb2F0aW5nLWFjdGlvbi1idXR0b25zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O3FCQUszQixJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUM7Ozs7O0lBRTNDLDJDQUFJOzs7SUFBSjtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3pCOzs7O0lBRUQsNkNBQU07OztJQUFOO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7S0FDM0M7Ozs7SUFFRCw0Q0FBSzs7O0lBQUw7UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMxQjs7Z0JBZkosVUFBVTs7dUNBSFg7O1NBSWEsNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZsb2F0aW5nQWN0aW9uQnV0dG9uc1NlcnZpY2Uge1xyXG5cclxuICAgIG9wZW4kID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gICAgb3BlbigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9wZW4kLm5leHQodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub3BlbiQubmV4dCghdGhpcy5vcGVuJC5nZXRWYWx1ZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9wZW4kLm5leHQoZmFsc2UpO1xyXG4gICAgfVxyXG59Il19