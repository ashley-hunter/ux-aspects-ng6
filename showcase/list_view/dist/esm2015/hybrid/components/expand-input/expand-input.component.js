/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Injector, Input, Output, EventEmitter } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
export class ExpandInputNg1Component extends UpgradeComponent {
    /**
     * @param {?} elementRef
     * @param {?} injector
     */
    constructor(elementRef, injector) {
        super('expandInput', elementRef, injector);
        this.focus = new EventEmitter();
    }
}
ExpandInputNg1Component.decorators = [
    { type: Directive, args: [{
                selector: 'expand-input'
            },] },
];
/** @nocollapse */
ExpandInputNg1Component.ctorParameters = () => [
    { type: ElementRef, },
    { type: Injector, },
];
ExpandInputNg1Component.propDecorators = {
    "elname": [{ type: Input },],
    "placeHolder": [{ type: Input },],
    "className": [{ type: Input },],
    "clearTextIcon": [{ type: Input },],
    "closeSearch": [{ type: Input },],
    "expandAlways": [{ type: Input },],
    "onEnter": [{ type: Input },],
    "focus": [{ type: Output },],
};
function ExpandInputNg1Component_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ExpandInputNg1Component.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ExpandInputNg1Component.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    ExpandInputNg1Component.propDecorators;
    /** @type {?} */
    ExpandInputNg1Component.prototype.elname;
    /** @type {?} */
    ExpandInputNg1Component.prototype.placeHolder;
    /** @type {?} */
    ExpandInputNg1Component.prototype.className;
    /** @type {?} */
    ExpandInputNg1Component.prototype.clearTextIcon;
    /** @type {?} */
    ExpandInputNg1Component.prototype.closeSearch;
    /** @type {?} */
    ExpandInputNg1Component.prototype.expandAlways;
    /** @type {?} */
    ExpandInputNg1Component.prototype.onEnter;
    /** @type {?} */
    ExpandInputNg1Component.prototype.focus;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5kLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJoeWJyaWQvY29tcG9uZW50cy9leHBhbmQtaW5wdXQvZXhwYW5kLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBSzNELE1BQU0sOEJBQStCLFNBQVEsZ0JBQWdCOzs7OztJQVl6RCxZQUFZLFVBQXNCLEVBQUUsUUFBa0I7UUFDbEQsS0FBSyxDQUFDLGFBQWEsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7cUJBSFAsSUFBSSxZQUFZLEVBQVU7S0FJakU7OztZQWpCSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGNBQWM7YUFDM0I7Ozs7WUFMbUIsVUFBVTtZQUFFLFFBQVE7Ozt1QkFRbkMsS0FBSzs0QkFDTCxLQUFLOzBCQUNMLEtBQUs7OEJBQ0wsS0FBSzs0QkFDTCxLQUFLOzZCQUNMLEtBQUs7d0JBQ0wsS0FBSztzQkFFTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbmplY3RvciwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFVwZ3JhZGVDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci91cGdyYWRlL3N0YXRpYyc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnZXhwYW5kLWlucHV0J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRXhwYW5kSW5wdXROZzFDb21wb25lbnQgZXh0ZW5kcyBVcGdyYWRlQ29tcG9uZW50IHtcclxuXHJcbiAgICBASW5wdXQoKSBlbG5hbWU6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHBsYWNlSG9sZGVyOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBjbGFzc05hbWU6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGNsZWFyVGV4dEljb246IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGNsb3NlU2VhcmNoOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBleHBhbmRBbHdheXM6IGJvb2xlYW47XHJcbiAgICBASW5wdXQoKSBvbkVudGVyOiBGdW5jdGlvbjtcclxuXHJcbiAgICBAT3V0cHV0KCkgZm9jdXM6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcbiAgICAgICAgc3VwZXIoJ2V4cGFuZElucHV0JywgZWxlbWVudFJlZiwgaW5qZWN0b3IpO1xyXG4gICAgfVxyXG59Il19