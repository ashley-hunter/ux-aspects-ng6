/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Attribute, ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { FloatingActionButtonsService } from './floating-action-buttons.service';
export class FloatingActionButtonComponent {
    /**
     * @param {?} primary
     * @param {?} fab
     */
    constructor(primary, fab) {
        this.fab = fab;
        this.tabindex = 1;
        this.primary = false;
        this.primary = primary !== null;
    }
}
FloatingActionButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-floating-action-button',
                template: `<button class="btn floating-action-button" 
        [class.button-primary]="primary" 
        [class.button-secondary]="!primary" 
        (click)="primary ? fab.open() : fab.close()">

    <span class="hpe-icon floating-action-button-icon" *ngIf="icon" [ngClass]="icon"></span>
    <ng-content *ngIf="!icon"></ng-content>

</button>`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false
            },] },
];
/** @nocollapse */
FloatingActionButtonComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Attribute, args: ['fab-primary',] },] },
    { type: FloatingActionButtonsService, },
];
FloatingActionButtonComponent.propDecorators = {
    "icon": [{ type: Input },],
    "tabindex": [{ type: HostBinding },],
};
function FloatingActionButtonComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FloatingActionButtonComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FloatingActionButtonComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    FloatingActionButtonComponent.propDecorators;
    /** @type {?} */
    FloatingActionButtonComponent.prototype.icon;
    /** @type {?} */
    FloatingActionButtonComponent.prototype.tabindex;
    /** @type {?} */
    FloatingActionButtonComponent.prototype.primary;
    /** @type {?} */
    FloatingActionButtonComponent.prototype.fab;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvYXRpbmctYWN0aW9uLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9mbG9hdGluZy1hY3Rpb24tYnV0dG9ucy9mbG9hdGluZy1hY3Rpb24tYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQWdCakYsTUFBTTs7Ozs7SUFPRixZQUFzQyxTQUF3QixHQUFpQztRQUFqQyxRQUFHLEdBQUgsR0FBRyxDQUE4Qjt3QkFKckUsQ0FBQzt1QkFFUixLQUFLO1FBR3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxLQUFLLElBQUksQ0FBQztLQUNuQzs7O1lBdkJKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxRQUFRLEVBQUU7Ozs7Ozs7O1VBUUo7Z0JBQ04sZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLG1CQUFtQixFQUFFLEtBQUs7YUFDN0I7Ozs7NENBUWdCLFNBQVMsU0FBQyxhQUFhO1lBdkIvQiw0QkFBNEI7OztxQkFrQmhDLEtBQUs7eUJBQ0wsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF0dHJpYnV0ZSwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZsb2F0aW5nQWN0aW9uQnV0dG9uc1NlcnZpY2UgfSBmcm9tICcuL2Zsb2F0aW5nLWFjdGlvbi1idXR0b25zLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3V4LWZsb2F0aW5nLWFjdGlvbi1idXR0b24nLFxyXG4gICAgdGVtcGxhdGU6IGA8YnV0dG9uIGNsYXNzPVwiYnRuIGZsb2F0aW5nLWFjdGlvbi1idXR0b25cIiBcclxuICAgICAgICBbY2xhc3MuYnV0dG9uLXByaW1hcnldPVwicHJpbWFyeVwiIFxyXG4gICAgICAgIFtjbGFzcy5idXR0b24tc2Vjb25kYXJ5XT1cIiFwcmltYXJ5XCIgXHJcbiAgICAgICAgKGNsaWNrKT1cInByaW1hcnkgPyBmYWIub3BlbigpIDogZmFiLmNsb3NlKClcIj5cclxuXHJcbiAgICA8c3BhbiBjbGFzcz1cImhwZS1pY29uIGZsb2F0aW5nLWFjdGlvbi1idXR0b24taWNvblwiICpuZ0lmPVwiaWNvblwiIFtuZ0NsYXNzXT1cImljb25cIj48L3NwYW4+XHJcbiAgICA8bmctY29udGVudCAqbmdJZj1cIiFpY29uXCI+PC9uZy1jb250ZW50PlxyXG5cclxuPC9idXR0b24+YCxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gICAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2VcclxufSlcclxuZXhwb3J0IGNsYXNzIEZsb2F0aW5nQWN0aW9uQnV0dG9uQ29tcG9uZW50IHtcclxuXHJcbiAgICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XHJcbiAgICBASG9zdEJpbmRpbmcoKSB0YWJpbmRleCA9IDE7XHJcblxyXG4gICAgcHJpbWFyeTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBBdHRyaWJ1dGUoJ2ZhYi1wcmltYXJ5JykgcHJpbWFyeTogc3RyaW5nLCBwdWJsaWMgZmFiOiBGbG9hdGluZ0FjdGlvbkJ1dHRvbnNTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5wcmltYXJ5ID0gcHJpbWFyeSAhPT0gbnVsbDtcclxuICAgIH1cclxufSJdfQ==