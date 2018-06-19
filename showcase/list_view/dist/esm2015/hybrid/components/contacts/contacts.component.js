/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Injector, Input, Output, EventEmitter } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
export class ContactsNg1Component extends UpgradeComponent {
    /**
     * @param {?} elementRef
     * @param {?} injector
     */
    constructor(elementRef, injector) {
        super('contactGroup', elementRef, injector);
        this.overflowClick = new EventEmitter();
    }
}
ContactsNg1Component.decorators = [
    { type: Directive, args: [{
                selector: 'contact-group'
            },] },
];
/** @nocollapse */
ContactsNg1Component.ctorParameters = () => [
    { type: ElementRef, },
    { type: Injector, },
];
ContactsNg1Component.propDecorators = {
    "contacts": [{ type: Input },],
    "organization": [{ type: Input },],
    "size": [{ type: Input },],
    "colors": [{ type: Input },],
    "maxContacts": [{ type: Input },],
    "overflowClick": [{ type: Output },],
};
function ContactsNg1Component_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ContactsNg1Component.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ContactsNg1Component.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    ContactsNg1Component.propDecorators;
    /** @type {?} */
    ContactsNg1Component.prototype.contacts;
    /** @type {?} */
    ContactsNg1Component.prototype.organization;
    /** @type {?} */
    ContactsNg1Component.prototype.size;
    /** @type {?} */
    ContactsNg1Component.prototype.colors;
    /** @type {?} */
    ContactsNg1Component.prototype.maxContacts;
    /** @type {?} */
    ContactsNg1Component.prototype.overflowClick;
}
/**
 * @record
 */
export function Contact() { }
function Contact_tsickle_Closure_declarations() {
    /** @type {?} */
    Contact.prototype.test;
    /** @type {?} */
    Contact.prototype.status;
    /** @type {?|undefined} */
    Contact.prototype.customTooltip;
}
/**
 * @record
 */
export function Organization() { }
function Organization_tsickle_Closure_declarations() {
    /** @type {?} */
    Organization.prototype.text;
    /** @type {?} */
    Organization.prototype.label;
    /** @type {?|undefined} */
    Organization.prototype.tooltip;
    /** @type {?|undefined} */
    Organization.prototype.customTooltip;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImh5YnJpZC9jb21wb25lbnRzL2NvbnRhY3RzL2NvbnRhY3RzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBSzNELE1BQU0sMkJBQTRCLFNBQVEsZ0JBQWdCOzs7OztJQVV0RCxZQUFZLFVBQXNCLEVBQUUsUUFBa0I7UUFDbEQsS0FBSyxDQUFDLGNBQWMsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7NkJBSEYsSUFBSSxZQUFZLEVBQVE7S0FJckU7OztZQWZKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsZUFBZTthQUM1Qjs7OztZQUxtQixVQUFVO1lBQUUsUUFBUTs7O3lCQVFuQyxLQUFLOzZCQUNMLEtBQUs7cUJBQ0wsS0FBSzt1QkFDTCxLQUFLOzRCQUNMLEtBQUs7OEJBRUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5qZWN0b3IsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVcGdyYWRlQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvdXBncmFkZS9zdGF0aWMnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ2NvbnRhY3QtZ3JvdXAnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250YWN0c05nMUNvbXBvbmVudCBleHRlbmRzIFVwZ3JhZGVDb21wb25lbnQge1xyXG5cclxuICAgIEBJbnB1dCgpIGNvbnRhY3RzOiBDb250YWN0W107XHJcbiAgICBASW5wdXQoKSBvcmdhbml6YXRpb246IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHNpemU6ICdtZWRpdW0nIHwgJ3NtYWxsJztcclxuICAgIEBJbnB1dCgpIGNvbG9yczogYW55O1xyXG4gICAgQElucHV0KCkgbWF4Q29udGFjdHM6IG51bWJlcjtcclxuXHJcbiAgICBAT3V0cHV0KCkgb3ZlcmZsb3dDbGljazogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIGluamVjdG9yOiBJbmplY3Rvcikge1xyXG4gICAgICAgIHN1cGVyKCdjb250YWN0R3JvdXAnLCBlbGVtZW50UmVmLCBpbmplY3Rvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29udGFjdCB7XHJcbiAgICB0ZXN0OiBzdHJpbmc7XHJcbiAgICBzdGF0dXM6ICdhY3RpdmUnIHwgJ3Bhc3NpdmUnO1xyXG4gICAgY3VzdG9tVG9vbHRpcD86IHtcclxuICAgICAgICB0ZW1wbGF0ZTogc3RyaW5nLFxyXG4gICAgICAgIHRvb2x0aXBQb3NpdGlvbjogc3RyaW5nO1xyXG4gICAgICAgIGRhdGE/OiBhbnk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE9yZ2FuaXphdGlvbiB7XHJcbiAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICBsYWJlbDogJ2V4dGVybmFsJyB8ICdyaXNrJztcclxuICAgIHRvb2x0aXA/OiBzdHJpbmc7XHJcbiAgICBjdXN0b21Ub29sdGlwPzoge1xyXG4gICAgICAgIHRlbXBsYXRlOiBzdHJpbmcsXHJcbiAgICAgICAgdG9vbHRpcFBvc2l0aW9uOiBzdHJpbmc7XHJcbiAgICAgICAgZGF0YT86IGFueTtcclxuICAgIH07XHJcbn0iXX0=