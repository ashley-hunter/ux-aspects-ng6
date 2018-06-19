/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { BaseSearchComponent } from '../base-search.component';
var SearchTextComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SearchTextComponent, _super);
    function SearchTextComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'text';
        return _this;
    }
    Object.defineProperty(SearchTextComponent.prototype, "label", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.label;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchTextComponent.prototype, "placeholder", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.placeholder || 'Enter text';
        },
        enumerable: true,
        configurable: true
    });
    SearchTextComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-search-text',
                    template: "<label class=\"form-label\" *ngIf=\"label\">{{ label }}</label>\n<input [placeholder]=\"placeholder\" [(ngModel)]=\"value\" class=\"form-control\">"
                },] },
    ];
    return SearchTextComponent;
}(BaseSearchComponent));
export { SearchTextComponent };
function SearchTextComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SearchTextComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SearchTextComponent.ctorParameters;
    /** @type {?} */
    SearchTextComponent.prototype.type;
}
/**
 * @record
 */
export function SearchTextConfig() { }
function SearchTextConfig_tsickle_Closure_declarations() {
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9zZWFyY2gtYnVpbGRlci9zZWFyY2gtY29tcG9uZW50cy90ZXh0L3RleHQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsbUJBQW1CLEVBQTZCLE1BQU0sMEJBQTBCLENBQUM7O0lBT2pELCtDQUFtQjs7O3FCQUUzQyxNQUFNOzs7SUFFckIsc0JBQUksc0NBQUs7Ozs7UUFBVDtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUMxQjs7O09BQUE7SUFFRCxzQkFBSSw0Q0FBVzs7OztRQUFmO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxJQUFJLFlBQVksQ0FBQztTQUNoRDs7O09BQUE7O2dCQWZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUscUpBQ2lFO2lCQUM1RTs7OEJBUEQ7RUFReUMsbUJBQW1CO1NBQS9DLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCYXNlU2VhcmNoQ29tcG9uZW50LCBCYXNlU2VhcmNoQ29tcG9uZW50Q29uZmlnIH0gZnJvbSAnLi4vYmFzZS1zZWFyY2guY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndXgtc2VhcmNoLXRleHQnLFxyXG4gIHRlbXBsYXRlOiBgPGxhYmVsIGNsYXNzPVwiZm9ybS1sYWJlbFwiICpuZ0lmPVwibGFiZWxcIj57eyBsYWJlbCB9fTwvbGFiZWw+XHJcbjxpbnB1dCBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiBbKG5nTW9kZWwpXT1cInZhbHVlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hUZXh0Q29tcG9uZW50IGV4dGVuZHMgQmFzZVNlYXJjaENvbXBvbmVudCB7XHJcblxyXG4gIHR5cGU6IHN0cmluZyA9ICd0ZXh0JztcclxuXHJcbiAgZ2V0IGxhYmVsKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcubGFiZWw7XHJcbiAgfVxyXG5cclxuICBnZXQgcGxhY2Vob2xkZXIoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5wbGFjZWhvbGRlciB8fCAnRW50ZXIgdGV4dCc7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNlYXJjaFRleHRDb25maWcgZXh0ZW5kcyBCYXNlU2VhcmNoQ29tcG9uZW50Q29uZmlnIHsgfSJdfQ==