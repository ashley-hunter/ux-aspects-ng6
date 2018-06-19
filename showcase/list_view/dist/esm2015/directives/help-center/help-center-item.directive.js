/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { HelpCenterService } from './help-center.service';
export class HelpCenterItemDirective {
    /**
     * @param {?} _helpCenterService
     */
    constructor(_helpCenterService) {
        this._helpCenterService = _helpCenterService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // register the item in the service
        this._helpCenterService.registerItem(this.uxHelpCenterItem);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // remove this item when it is destroyed
        this._helpCenterService.unregisterItem(this.uxHelpCenterItem);
    }
}
HelpCenterItemDirective.decorators = [
    { type: Directive, args: [{ selector: '[uxHelpCenterItem]' },] },
];
/** @nocollapse */
HelpCenterItemDirective.ctorParameters = () => [
    { type: HelpCenterService, },
];
HelpCenterItemDirective.propDecorators = {
    "uxHelpCenterItem": [{ type: Input },],
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC1jZW50ZXItaXRlbS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlcy9oZWxwLWNlbnRlci9oZWxwLWNlbnRlci1pdGVtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxpQkFBaUIsRUFBa0IsTUFBTSx1QkFBdUIsQ0FBQztBQUcxRSxNQUFNOzs7O0lBSUYsWUFBb0Isa0JBQXFDO1FBQXJDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7S0FBSzs7OztJQUU5RCxRQUFROztRQUdKLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7S0FDL0Q7Ozs7SUFFRCxXQUFXOztRQUVQLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7S0FDakU7OztZQWhCSixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsb0JBQW9CLEVBQUU7Ozs7WUFGcEMsaUJBQWlCOzs7aUNBS3JCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIZWxwQ2VudGVyU2VydmljZSwgSGVscENlbnRlckl0ZW0gfSBmcm9tICcuL2hlbHAtY2VudGVyLnNlcnZpY2UnO1xyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW3V4SGVscENlbnRlckl0ZW1dJyB9KVxyXG5leHBvcnQgY2xhc3MgSGVscENlbnRlckl0ZW1EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gICAgQElucHV0KCkgdXhIZWxwQ2VudGVySXRlbTogSGVscENlbnRlckl0ZW07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaGVscENlbnRlclNlcnZpY2U6IEhlbHBDZW50ZXJTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gcmVnaXN0ZXIgdGhlIGl0ZW0gaW4gdGhlIHNlcnZpY2VcclxuICAgICAgICB0aGlzLl9oZWxwQ2VudGVyU2VydmljZS5yZWdpc3Rlckl0ZW0odGhpcy51eEhlbHBDZW50ZXJJdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICAvLyByZW1vdmUgdGhpcyBpdGVtIHdoZW4gaXQgaXMgZGVzdHJveWVkXHJcbiAgICAgICAgdGhpcy5faGVscENlbnRlclNlcnZpY2UudW5yZWdpc3Rlckl0ZW0odGhpcy51eEhlbHBDZW50ZXJJdGVtKTtcclxuICAgIH1cclxufSJdfQ==