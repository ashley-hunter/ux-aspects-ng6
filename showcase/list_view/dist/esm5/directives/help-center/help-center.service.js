/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
var HelpCenterService = /** @class */ (function () {
    function HelpCenterService() {
        this.items = new BehaviorSubject([]);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    HelpCenterService.prototype.registerItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        // get the current items
        var /** @type {?} */ items = this.items.getValue();
        // add the new item to the list
        items.push(item);
        // update the observable
        this.items.next(items);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    HelpCenterService.prototype.unregisterItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        // get the current items
        var /** @type {?} */ items = this.items.getValue();
        // remove the item being unregistered
        items = items.filter(function (itm) { return itm !== item; });
        // update the observable
        this.items.next(items);
    };
    HelpCenterService.decorators = [
        { type: Injectable },
    ];
    return HelpCenterService;
}());
export { HelpCenterService };
function HelpCenterService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    HelpCenterService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    HelpCenterService.ctorParameters;
    /** @type {?} */
    HelpCenterService.prototype.items;
}
/**
 * @record
 */
export function HelpCenterItem() { }
function HelpCenterItem_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    HelpCenterItem.prototype.icon;
    /** @type {?} */
    HelpCenterItem.prototype.title;
    /** @type {?|undefined} */
    HelpCenterItem.prototype.select;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC1jZW50ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL2hlbHAtY2VudGVyL2hlbHAtY2VudGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7O3FCQUtRLElBQUksZUFBZSxDQUFtQixFQUFFLENBQUM7Ozs7OztJQUVwRix3Q0FBWTs7OztJQUFaLFVBQWEsSUFBb0I7O1FBRzdCLHFCQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDOztRQUdsQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOztRQUdqQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMxQjs7Ozs7SUFFRCwwQ0FBYzs7OztJQUFkLFVBQWUsSUFBb0I7O1FBRy9CLHFCQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDOztRQUdsQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsS0FBSyxJQUFJLEVBQVosQ0FBWSxDQUFDLENBQUM7O1FBRzFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzFCOztnQkEzQkosVUFBVTs7NEJBSFg7O1NBSWEsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhlbHBDZW50ZXJTZXJ2aWNlIHtcclxuXHJcbiAgICBpdGVtczogQmVoYXZpb3JTdWJqZWN0PEhlbHBDZW50ZXJJdGVtW10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxIZWxwQ2VudGVySXRlbVtdPihbXSk7XHJcblxyXG4gICAgcmVnaXN0ZXJJdGVtKGl0ZW06IEhlbHBDZW50ZXJJdGVtKTogdm9pZCB7XHJcblxyXG4gICAgICAgIC8vIGdldCB0aGUgY3VycmVudCBpdGVtc1xyXG4gICAgICAgIGxldCBpdGVtcyA9IHRoaXMuaXRlbXMuZ2V0VmFsdWUoKTtcclxuXHJcbiAgICAgICAgLy8gYWRkIHRoZSBuZXcgaXRlbSB0byB0aGUgbGlzdFxyXG4gICAgICAgIGl0ZW1zLnB1c2goaXRlbSk7XHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgb2JzZXJ2YWJsZVxyXG4gICAgICAgIHRoaXMuaXRlbXMubmV4dChpdGVtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdW5yZWdpc3Rlckl0ZW0oaXRlbTogSGVscENlbnRlckl0ZW0pOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gZ2V0IHRoZSBjdXJyZW50IGl0ZW1zXHJcbiAgICAgICAgbGV0IGl0ZW1zID0gdGhpcy5pdGVtcy5nZXRWYWx1ZSgpO1xyXG5cclxuICAgICAgICAvLyByZW1vdmUgdGhlIGl0ZW0gYmVpbmcgdW5yZWdpc3RlcmVkXHJcbiAgICAgICAgaXRlbXMgPSBpdGVtcy5maWx0ZXIoaXRtID0+IGl0bSAhPT0gaXRlbSk7XHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgb2JzZXJ2YWJsZVxyXG4gICAgICAgIHRoaXMuaXRlbXMubmV4dChpdGVtcyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSGVscENlbnRlckl0ZW0ge1xyXG4gICAgaWNvbj86IHN0cmluZztcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBzZWxlY3Q/OiAoKSA9PiB2b2lkO1xyXG59Il19