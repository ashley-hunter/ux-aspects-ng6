/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export class HelpCenterService {
    constructor() {
        this.items = new BehaviorSubject([]);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    registerItem(item) {
        // get the current items
        let /** @type {?} */ items = this.items.getValue();
        // add the new item to the list
        items.push(item);
        // update the observable
        this.items.next(items);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    unregisterItem(item) {
        // get the current items
        let /** @type {?} */ items = this.items.getValue();
        // remove the item being unregistered
        items = items.filter(itm => itm !== item);
        // update the observable
        this.items.next(items);
    }
}
HelpCenterService.decorators = [
    { type: Injectable },
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC1jZW50ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL2hlbHAtY2VudGVyL2hlbHAtY2VudGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUd2QyxNQUFNOztxQkFFeUMsSUFBSSxlQUFlLENBQW1CLEVBQUUsQ0FBQzs7Ozs7O0lBRXBGLFlBQVksQ0FBQyxJQUFvQjs7UUFHN0IscUJBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7O1FBR2xDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7O1FBR2pCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzFCOzs7OztJQUVELGNBQWMsQ0FBQyxJQUFvQjs7UUFHL0IscUJBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7O1FBR2xDLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDOztRQUcxQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMxQjs7O1lBM0JKLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSGVscENlbnRlclNlcnZpY2Uge1xyXG5cclxuICAgIGl0ZW1zOiBCZWhhdmlvclN1YmplY3Q8SGVscENlbnRlckl0ZW1bXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEhlbHBDZW50ZXJJdGVtW10+KFtdKTtcclxuXHJcbiAgICByZWdpc3Rlckl0ZW0oaXRlbTogSGVscENlbnRlckl0ZW0pOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gZ2V0IHRoZSBjdXJyZW50IGl0ZW1zXHJcbiAgICAgICAgbGV0IGl0ZW1zID0gdGhpcy5pdGVtcy5nZXRWYWx1ZSgpO1xyXG5cclxuICAgICAgICAvLyBhZGQgdGhlIG5ldyBpdGVtIHRvIHRoZSBsaXN0XHJcbiAgICAgICAgaXRlbXMucHVzaChpdGVtKTtcclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIHRoZSBvYnNlcnZhYmxlXHJcbiAgICAgICAgdGhpcy5pdGVtcy5uZXh0KGl0ZW1zKTtcclxuICAgIH1cclxuXHJcbiAgICB1bnJlZ2lzdGVySXRlbShpdGVtOiBIZWxwQ2VudGVySXRlbSk6IHZvaWQge1xyXG5cclxuICAgICAgICAvLyBnZXQgdGhlIGN1cnJlbnQgaXRlbXNcclxuICAgICAgICBsZXQgaXRlbXMgPSB0aGlzLml0ZW1zLmdldFZhbHVlKCk7XHJcblxyXG4gICAgICAgIC8vIHJlbW92ZSB0aGUgaXRlbSBiZWluZyB1bnJlZ2lzdGVyZWRcclxuICAgICAgICBpdGVtcyA9IGl0ZW1zLmZpbHRlcihpdG0gPT4gaXRtICE9PSBpdGVtKTtcclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIHRoZSBvYnNlcnZhYmxlXHJcbiAgICAgICAgdGhpcy5pdGVtcy5uZXh0KGl0ZW1zKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIZWxwQ2VudGVySXRlbSB7XHJcbiAgICBpY29uPzogc3RyaW5nO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIHNlbGVjdD86ICgpID0+IHZvaWQ7XHJcbn0iXX0=