/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
var BreadcrumbsComponent = /** @class */ (function () {
    function BreadcrumbsComponent() {
    }
    /**
     * @param {?} event
     * @param {?} crumb
     * @return {?}
     */
    BreadcrumbsComponent.prototype.clickCrumb = /**
     * @param {?} event
     * @param {?} crumb
     * @return {?}
     */
    function (event, crumb) {
        if (crumb.onClick) {
            crumb.onClick.call(null, event);
        }
    };
    BreadcrumbsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-breadcrumbs',
                    template: "<nav aria-label=\"Breadcrumb\">\n    <ol class=\"breadcrumb\">\n        <li *ngFor=\"let crumb of crumbs\">\n\n            <!-- If there is a router link then use a tag -->\n            <a *ngIf=\"crumb.routerLink || crumb.onClick\"\n                tabindex=\"0\"\n                [routerLink]=\"crumb.routerLink\"\n                [fragment]=\"crumb.fragment\"\n                [queryParams]=\"crumb.queryParams\"\n                (click)=\"clickCrumb($event, crumb)\">\n                {{ crumb.title }}\n            </a>\n\n            <!-- If there is not router link then display text in a span -->\n            <span *ngIf=\"!crumb.routerLink && !crumb.onClick\">{{ crumb.title }}</span>\n        </li>\n    </ol>\n</nav>"
                },] },
    ];
    /** @nocollapse */
    BreadcrumbsComponent.propDecorators = {
        "crumbs": [{ type: Input },],
    };
    return BreadcrumbsComponent;
}());
export { BreadcrumbsComponent };
function BreadcrumbsComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    BreadcrumbsComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    BreadcrumbsComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    BreadcrumbsComponent.propDecorators;
    /** @type {?} */
    BreadcrumbsComponent.prototype.crumbs;
}
/**
 * @record
 */
export function Breadcrumb() { }
function Breadcrumb_tsickle_Closure_declarations() {
    /** @type {?} */
    Breadcrumb.prototype.title;
    /** @type {?|undefined} */
    Breadcrumb.prototype.routerLink;
    /** @type {?|undefined} */
    Breadcrumb.prototype.fragment;
    /** @type {?|undefined} */
    Breadcrumb.prototype.queryParams;
    /** @type {?|undefined} */
    Breadcrumb.prototype.onClick;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7O0lBNkI3Qyx5Q0FBVTs7Ozs7SUFBVixVQUFXLEtBQWlCLEVBQUUsS0FBaUI7UUFDM0MsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDaEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ25DO0tBQ0o7O2dCQS9CSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLDB0QkFrQlA7aUJBQ047Ozs7MkJBSUksS0FBSzs7K0JBM0JWOztTQXlCYSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndXgtYnJlYWRjcnVtYnMnLFxyXG4gICAgdGVtcGxhdGU6IGA8bmF2IGFyaWEtbGFiZWw9XCJCcmVhZGNydW1iXCI+XHJcbiAgICA8b2wgY2xhc3M9XCJicmVhZGNydW1iXCI+XHJcbiAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBjcnVtYiBvZiBjcnVtYnNcIj5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gSWYgdGhlcmUgaXMgYSByb3V0ZXIgbGluayB0aGVuIHVzZSBhIHRhZyAtLT5cclxuICAgICAgICAgICAgPGEgKm5nSWY9XCJjcnVtYi5yb3V0ZXJMaW5rIHx8IGNydW1iLm9uQ2xpY2tcIlxyXG4gICAgICAgICAgICAgICAgdGFiaW5kZXg9XCIwXCJcclxuICAgICAgICAgICAgICAgIFtyb3V0ZXJMaW5rXT1cImNydW1iLnJvdXRlckxpbmtcIlxyXG4gICAgICAgICAgICAgICAgW2ZyYWdtZW50XT1cImNydW1iLmZyYWdtZW50XCJcclxuICAgICAgICAgICAgICAgIFtxdWVyeVBhcmFtc109XCJjcnVtYi5xdWVyeVBhcmFtc1wiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiY2xpY2tDcnVtYigkZXZlbnQsIGNydW1iKVwiPlxyXG4gICAgICAgICAgICAgICAge3sgY3J1bWIudGl0bGUgfX1cclxuICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgPCEtLSBJZiB0aGVyZSBpcyBub3Qgcm91dGVyIGxpbmsgdGhlbiBkaXNwbGF5IHRleHQgaW4gYSBzcGFuIC0tPlxyXG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFjcnVtYi5yb3V0ZXJMaW5rICYmICFjcnVtYi5vbkNsaWNrXCI+e3sgY3J1bWIudGl0bGUgfX08L3NwYW4+XHJcbiAgICAgICAgPC9saT5cclxuICAgIDwvb2w+XHJcbjwvbmF2PmBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1ic0NvbXBvbmVudCB7XHJcblxyXG4gICAgQElucHV0KCkgY3J1bWJzOiBCcmVhZGNydW1iW107XHJcblxyXG4gICAgY2xpY2tDcnVtYihldmVudDogTW91c2VFdmVudCwgY3J1bWI6IEJyZWFkY3J1bWIpIHtcclxuICAgICAgICBpZiAoY3J1bWIub25DbGljaykge1xyXG4gICAgICAgICAgICBjcnVtYi5vbkNsaWNrLmNhbGwobnVsbCwgZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCcmVhZGNydW1iIHtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICByb3V0ZXJMaW5rPzogc3RyaW5nO1xyXG4gICAgZnJhZ21lbnQ/OiBzdHJpbmc7XHJcbiAgICBxdWVyeVBhcmFtcz86IGFueTtcclxuICAgIG9uQ2xpY2s/OiAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHZvaWQ7XHJcbn0iXX0=