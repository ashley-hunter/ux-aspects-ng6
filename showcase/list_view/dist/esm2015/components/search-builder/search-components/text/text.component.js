/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { BaseSearchComponent } from '../base-search.component';
export class SearchTextComponent extends BaseSearchComponent {
    constructor() {
        super(...arguments);
        this.type = 'text';
    }
    /**
     * @return {?}
     */
    get label() {
        return this.config.label;
    }
    /**
     * @return {?}
     */
    get placeholder() {
        return this.config.placeholder || 'Enter text';
    }
}
SearchTextComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-search-text',
                template: `<label class="form-label" *ngIf="label">{{ label }}</label>
<input [placeholder]="placeholder" [(ngModel)]="value" class="form-control">`
            },] },
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9zZWFyY2gtYnVpbGRlci9zZWFyY2gtY29tcG9uZW50cy90ZXh0L3RleHQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxtQkFBbUIsRUFBNkIsTUFBTSwwQkFBMEIsQ0FBQztBQU8xRixNQUFNLDBCQUEyQixTQUFRLG1CQUFtQjs7O29CQUUzQyxNQUFNOzs7OztJQUVyQixJQUFJLEtBQUs7UUFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7S0FDMUI7Ozs7SUFFRCxJQUFJLFdBQVc7UUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLElBQUksWUFBWSxDQUFDO0tBQ2hEOzs7WUFmRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFOzZFQUNpRTthQUM1RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCYXNlU2VhcmNoQ29tcG9uZW50LCBCYXNlU2VhcmNoQ29tcG9uZW50Q29uZmlnIH0gZnJvbSAnLi4vYmFzZS1zZWFyY2guY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndXgtc2VhcmNoLXRleHQnLFxyXG4gIHRlbXBsYXRlOiBgPGxhYmVsIGNsYXNzPVwiZm9ybS1sYWJlbFwiICpuZ0lmPVwibGFiZWxcIj57eyBsYWJlbCB9fTwvbGFiZWw+XHJcbjxpbnB1dCBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiBbKG5nTW9kZWwpXT1cInZhbHVlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hUZXh0Q29tcG9uZW50IGV4dGVuZHMgQmFzZVNlYXJjaENvbXBvbmVudCB7XHJcblxyXG4gIHR5cGU6IHN0cmluZyA9ICd0ZXh0JztcclxuXHJcbiAgZ2V0IGxhYmVsKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcubGFiZWw7XHJcbiAgfVxyXG5cclxuICBnZXQgcGxhY2Vob2xkZXIoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5wbGFjZWhvbGRlciB8fCAnRW50ZXIgdGV4dCc7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNlYXJjaFRleHRDb25maWcgZXh0ZW5kcyBCYXNlU2VhcmNoQ29tcG9uZW50Q29uZmlnIHsgfSJdfQ==