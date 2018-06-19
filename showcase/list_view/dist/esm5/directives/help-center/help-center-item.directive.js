/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { HelpCenterService } from './help-center.service';
var HelpCenterItemDirective = /** @class */ (function () {
    function HelpCenterItemDirective(_helpCenterService) {
        this._helpCenterService = _helpCenterService;
    }
    /**
     * @return {?}
     */
    HelpCenterItemDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // register the item in the service
        this._helpCenterService.registerItem(this.uxHelpCenterItem);
    };
    /**
     * @return {?}
     */
    HelpCenterItemDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // remove this item when it is destroyed
        this._helpCenterService.unregisterItem(this.uxHelpCenterItem);
    };
    HelpCenterItemDirective.decorators = [
        { type: Directive, args: [{ selector: '[uxHelpCenterItem]' },] },
    ];
    /** @nocollapse */
    HelpCenterItemDirective.ctorParameters = function () { return [
        { type: HelpCenterService, },
    ]; };
    HelpCenterItemDirective.propDecorators = {
        "uxHelpCenterItem": [{ type: Input },],
    };
    return HelpCenterItemDirective;
}());
export { HelpCenterItemDirective };
function HelpCenterItemDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    HelpCenterItemDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    HelpCenterItemDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    HelpCenterItemDirective.propDecorators;
    /** @type {?} */
    HelpCenterItemDirective.prototype.uxHelpCenterItem;
    /** @type {?} */
    HelpCenterItemDirective.prototype._helpCenterService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC1jZW50ZXItaXRlbS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlcy9oZWxwLWNlbnRlci9oZWxwLWNlbnRlci1pdGVtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxpQkFBaUIsRUFBa0IsTUFBTSx1QkFBdUIsQ0FBQzs7SUFPdEUsaUNBQW9CLGtCQUFxQztRQUFyQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO0tBQUs7Ozs7SUFFOUQsMENBQVE7OztJQUFSOztRQUdJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7S0FDL0Q7Ozs7SUFFRCw2Q0FBVzs7O0lBQVg7O1FBRUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztLQUNqRTs7Z0JBaEJKLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxvQkFBb0IsRUFBRTs7OztnQkFGcEMsaUJBQWlCOzs7cUNBS3JCLEtBQUs7O2tDQU5WOztTQUlhLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhlbHBDZW50ZXJTZXJ2aWNlLCBIZWxwQ2VudGVySXRlbSB9IGZyb20gJy4vaGVscC1jZW50ZXIuc2VydmljZSc7XHJcblxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbdXhIZWxwQ2VudGVySXRlbV0nIH0pXHJcbmV4cG9ydCBjbGFzcyBIZWxwQ2VudGVySXRlbURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgICBASW5wdXQoKSB1eEhlbHBDZW50ZXJJdGVtOiBIZWxwQ2VudGVySXRlbTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9oZWxwQ2VudGVyU2VydmljZTogSGVscENlbnRlclNlcnZpY2UpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgICAgICAvLyByZWdpc3RlciB0aGUgaXRlbSBpbiB0aGUgc2VydmljZVxyXG4gICAgICAgIHRoaXMuX2hlbHBDZW50ZXJTZXJ2aWNlLnJlZ2lzdGVySXRlbSh0aGlzLnV4SGVscENlbnRlckl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIHJlbW92ZSB0aGlzIGl0ZW0gd2hlbiBpdCBpcyBkZXN0cm95ZWRcclxuICAgICAgICB0aGlzLl9oZWxwQ2VudGVyU2VydmljZS51bnJlZ2lzdGVySXRlbSh0aGlzLnV4SGVscENlbnRlckl0ZW0pO1xyXG4gICAgfVxyXG59Il19