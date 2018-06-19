/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Injector, Input, Output, EventEmitter } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
var ContactsNg1Component = /** @class */ (function (_super) {
    tslib_1.__extends(ContactsNg1Component, _super);
    function ContactsNg1Component(elementRef, injector) {
        var _this = _super.call(this, 'contactGroup', elementRef, injector) || this;
        _this.overflowClick = new EventEmitter();
        return _this;
    }
    ContactsNg1Component.decorators = [
        { type: Directive, args: [{
                    selector: 'contact-group'
                },] },
    ];
    /** @nocollapse */
    ContactsNg1Component.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Injector, },
    ]; };
    ContactsNg1Component.propDecorators = {
        "contacts": [{ type: Input },],
        "organization": [{ type: Input },],
        "size": [{ type: Input },],
        "colors": [{ type: Input },],
        "maxContacts": [{ type: Input },],
        "overflowClick": [{ type: Output },],
    };
    return ContactsNg1Component;
}(UpgradeComponent));
export { ContactsNg1Component };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImh5YnJpZC9jb21wb25lbnRzL2NvbnRhY3RzL2NvbnRhY3RzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7SUFLakIsZ0RBQWdCO0lBVXRELDhCQUFZLFVBQXNCLEVBQUUsUUFBa0I7UUFBdEQsWUFDSSxrQkFBTSxjQUFjLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxTQUM5Qzs4QkFKNkMsSUFBSSxZQUFZLEVBQVE7O0tBSXJFOztnQkFmSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGVBQWU7aUJBQzVCOzs7O2dCQUxtQixVQUFVO2dCQUFFLFFBQVE7Ozs2QkFRbkMsS0FBSztpQ0FDTCxLQUFLO3lCQUNMLEtBQUs7MkJBQ0wsS0FBSztnQ0FDTCxLQUFLO2tDQUVMLE1BQU07OytCQWRYO0VBTTBDLGdCQUFnQjtTQUE3QyxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEluamVjdG9yLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVXBncmFkZUNvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL3VwZ3JhZGUvc3RhdGljJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdjb250YWN0LWdyb3VwJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udGFjdHNOZzFDb21wb25lbnQgZXh0ZW5kcyBVcGdyYWRlQ29tcG9uZW50IHtcclxuXHJcbiAgICBASW5wdXQoKSBjb250YWN0czogQ29udGFjdFtdO1xyXG4gICAgQElucHV0KCkgb3JnYW5pemF0aW9uOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBzaXplOiAnbWVkaXVtJyB8ICdzbWFsbCc7XHJcbiAgICBASW5wdXQoKSBjb2xvcnM6IGFueTtcclxuICAgIEBJbnB1dCgpIG1heENvbnRhY3RzOiBudW1iZXI7XHJcblxyXG4gICAgQE91dHB1dCgpIG92ZXJmbG93Q2xpY2s6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBpbmplY3RvcjogSW5qZWN0b3IpIHtcclxuICAgICAgICBzdXBlcignY29udGFjdEdyb3VwJywgZWxlbWVudFJlZiwgaW5qZWN0b3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbnRhY3Qge1xyXG4gICAgdGVzdDogc3RyaW5nO1xyXG4gICAgc3RhdHVzOiAnYWN0aXZlJyB8ICdwYXNzaXZlJztcclxuICAgIGN1c3RvbVRvb2x0aXA/OiB7XHJcbiAgICAgICAgdGVtcGxhdGU6IHN0cmluZyxcclxuICAgICAgICB0b29sdGlwUG9zaXRpb246IHN0cmluZztcclxuICAgICAgICBkYXRhPzogYW55O1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBPcmdhbml6YXRpb24ge1xyXG4gICAgdGV4dDogc3RyaW5nO1xyXG4gICAgbGFiZWw6ICdleHRlcm5hbCcgfCAncmlzayc7XHJcbiAgICB0b29sdGlwPzogc3RyaW5nO1xyXG4gICAgY3VzdG9tVG9vbHRpcD86IHtcclxuICAgICAgICB0ZW1wbGF0ZTogc3RyaW5nLFxyXG4gICAgICAgIHRvb2x0aXBQb3NpdGlvbjogc3RyaW5nO1xyXG4gICAgICAgIGRhdGE/OiBhbnk7XHJcbiAgICB9O1xyXG59Il19