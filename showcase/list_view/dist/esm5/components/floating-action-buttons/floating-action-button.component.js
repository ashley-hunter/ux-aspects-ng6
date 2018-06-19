/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Attribute, ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { FloatingActionButtonsService } from './floating-action-buttons.service';
var FloatingActionButtonComponent = /** @class */ (function () {
    function FloatingActionButtonComponent(primary, fab) {
        this.fab = fab;
        this.tabindex = 1;
        this.primary = false;
        this.primary = primary !== null;
    }
    FloatingActionButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-floating-action-button',
                    template: "<button class=\"btn floating-action-button\" \n        [class.button-primary]=\"primary\" \n        [class.button-secondary]=\"!primary\" \n        (click)=\"primary ? fab.open() : fab.close()\">\n\n    <span class=\"hpe-icon floating-action-button-icon\" *ngIf=\"icon\" [ngClass]=\"icon\"></span>\n    <ng-content *ngIf=\"!icon\"></ng-content>\n\n</button>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false
                },] },
    ];
    /** @nocollapse */
    FloatingActionButtonComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Attribute, args: ['fab-primary',] },] },
        { type: FloatingActionButtonsService, },
    ]; };
    FloatingActionButtonComponent.propDecorators = {
        "icon": [{ type: Input },],
        "tabindex": [{ type: HostBinding },],
    };
    return FloatingActionButtonComponent;
}());
export { FloatingActionButtonComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvYXRpbmctYWN0aW9uLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9mbG9hdGluZy1hY3Rpb24tYnV0dG9ucy9mbG9hdGluZy1hY3Rpb24tYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7SUF1QjdFLHVDQUFzQyxTQUF3QixHQUFpQztRQUFqQyxRQUFHLEdBQUgsR0FBRyxDQUE4Qjt3QkFKckUsQ0FBQzt1QkFFUixLQUFLO1FBR3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxLQUFLLElBQUksQ0FBQztLQUNuQzs7Z0JBdkJKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxRQUFRLEVBQUUsdVdBUUo7b0JBQ04sZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLG1CQUFtQixFQUFFLEtBQUs7aUJBQzdCOzs7O2dEQVFnQixTQUFTLFNBQUMsYUFBYTtnQkF2Qi9CLDRCQUE0Qjs7O3lCQWtCaEMsS0FBSzs2QkFDTCxXQUFXOzt3Q0FwQmhCOztTQWlCYSw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdHRyaWJ1dGUsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGbG9hdGluZ0FjdGlvbkJ1dHRvbnNTZXJ2aWNlIH0gZnJvbSAnLi9mbG9hdGluZy1hY3Rpb24tYnV0dG9ucy5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd1eC1mbG9hdGluZy1hY3Rpb24tYnV0dG9uJyxcclxuICAgIHRlbXBsYXRlOiBgPGJ1dHRvbiBjbGFzcz1cImJ0biBmbG9hdGluZy1hY3Rpb24tYnV0dG9uXCIgXHJcbiAgICAgICAgW2NsYXNzLmJ1dHRvbi1wcmltYXJ5XT1cInByaW1hcnlcIiBcclxuICAgICAgICBbY2xhc3MuYnV0dG9uLXNlY29uZGFyeV09XCIhcHJpbWFyeVwiIFxyXG4gICAgICAgIChjbGljayk9XCJwcmltYXJ5ID8gZmFiLm9wZW4oKSA6IGZhYi5jbG9zZSgpXCI+XHJcblxyXG4gICAgPHNwYW4gY2xhc3M9XCJocGUtaWNvbiBmbG9hdGluZy1hY3Rpb24tYnV0dG9uLWljb25cIiAqbmdJZj1cImljb25cIiBbbmdDbGFzc109XCJpY29uXCI+PC9zcGFuPlxyXG4gICAgPG5nLWNvbnRlbnQgKm5nSWY9XCIhaWNvblwiPjwvbmctY29udGVudD5cclxuXHJcbjwvYnV0dG9uPmAsXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAgIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGbG9hdGluZ0FjdGlvbkJ1dHRvbkNvbXBvbmVudCB7XHJcblxyXG4gICAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xyXG4gICAgQEhvc3RCaW5kaW5nKCkgdGFiaW5kZXggPSAxO1xyXG5cclxuICAgIHByaW1hcnk6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihAQXR0cmlidXRlKCdmYWItcHJpbWFyeScpIHByaW1hcnk6IHN0cmluZywgcHVibGljIGZhYjogRmxvYXRpbmdBY3Rpb25CdXR0b25zU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMucHJpbWFyeSA9IHByaW1hcnkgIT09IG51bGw7XHJcbiAgICB9XHJcbn0iXX0=