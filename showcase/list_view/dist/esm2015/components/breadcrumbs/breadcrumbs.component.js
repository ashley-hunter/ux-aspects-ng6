/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class BreadcrumbsComponent {
    /**
     * @param {?} event
     * @param {?} crumb
     * @return {?}
     */
    clickCrumb(event, crumb) {
        if (crumb.onClick) {
            crumb.onClick.call(null, event);
        }
    }
}
BreadcrumbsComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-breadcrumbs',
                template: `<nav aria-label="Breadcrumb">
    <ol class="breadcrumb">
        <li *ngFor="let crumb of crumbs">

            <!-- If there is a router link then use a tag -->
            <a *ngIf="crumb.routerLink || crumb.onClick"
                tabindex="0"
                [routerLink]="crumb.routerLink"
                [fragment]="crumb.fragment"
                [queryParams]="crumb.queryParams"
                (click)="clickCrumb($event, crumb)">
                {{ crumb.title }}
            </a>

            <!-- If there is not router link then display text in a span -->
            <span *ngIf="!crumb.routerLink && !crumb.onClick">{{ crumb.title }}</span>
        </li>
    </ol>
</nav>`
            },] },
];
/** @nocollapse */
BreadcrumbsComponent.propDecorators = {
    "crumbs": [{ type: Input },],
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXlCakQsTUFBTTs7Ozs7O0lBSUYsVUFBVSxDQUFDLEtBQWlCLEVBQUUsS0FBaUI7UUFDM0MsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDaEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ25DO0tBQ0o7OztZQS9CSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FrQlA7YUFDTjs7Ozt1QkFJSSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3V4LWJyZWFkY3J1bWJzJyxcclxuICAgIHRlbXBsYXRlOiBgPG5hdiBhcmlhLWxhYmVsPVwiQnJlYWRjcnVtYlwiPlxyXG4gICAgPG9sIGNsYXNzPVwiYnJlYWRjcnVtYlwiPlxyXG4gICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgY3J1bWIgb2YgY3J1bWJzXCI+XHJcblxyXG4gICAgICAgICAgICA8IS0tIElmIHRoZXJlIGlzIGEgcm91dGVyIGxpbmsgdGhlbiB1c2UgYSB0YWcgLS0+XHJcbiAgICAgICAgICAgIDxhICpuZ0lmPVwiY3J1bWIucm91dGVyTGluayB8fCBjcnVtYi5vbkNsaWNrXCJcclxuICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiMFwiXHJcbiAgICAgICAgICAgICAgICBbcm91dGVyTGlua109XCJjcnVtYi5yb3V0ZXJMaW5rXCJcclxuICAgICAgICAgICAgICAgIFtmcmFnbWVudF09XCJjcnVtYi5mcmFnbWVudFwiXHJcbiAgICAgICAgICAgICAgICBbcXVlcnlQYXJhbXNdPVwiY3J1bWIucXVlcnlQYXJhbXNcIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImNsaWNrQ3J1bWIoJGV2ZW50LCBjcnVtYilcIj5cclxuICAgICAgICAgICAgICAgIHt7IGNydW1iLnRpdGxlIH19XHJcbiAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gSWYgdGhlcmUgaXMgbm90IHJvdXRlciBsaW5rIHRoZW4gZGlzcGxheSB0ZXh0IGluIGEgc3BhbiAtLT5cclxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCIhY3J1bWIucm91dGVyTGluayAmJiAhY3J1bWIub25DbGlja1wiPnt7IGNydW1iLnRpdGxlIH19PC9zcGFuPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICA8L29sPlxyXG48L25hdj5gXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYnNDb21wb25lbnQge1xyXG5cclxuICAgIEBJbnB1dCgpIGNydW1iczogQnJlYWRjcnVtYltdO1xyXG5cclxuICAgIGNsaWNrQ3J1bWIoZXZlbnQ6IE1vdXNlRXZlbnQsIGNydW1iOiBCcmVhZGNydW1iKSB7XHJcbiAgICAgICAgaWYgKGNydW1iLm9uQ2xpY2spIHtcclxuICAgICAgICAgICAgY3J1bWIub25DbGljay5jYWxsKG51bGwsIGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQnJlYWRjcnVtYiB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgcm91dGVyTGluaz86IHN0cmluZztcclxuICAgIGZyYWdtZW50Pzogc3RyaW5nO1xyXG4gICAgcXVlcnlQYXJhbXM/OiBhbnk7XHJcbiAgICBvbkNsaWNrPzogKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB2b2lkO1xyXG59Il19