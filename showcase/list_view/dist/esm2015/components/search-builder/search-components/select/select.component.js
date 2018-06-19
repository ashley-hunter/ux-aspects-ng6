/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { BaseSearchComponent } from '../base-search.component';
export class SearchSelectComponent extends BaseSearchComponent {
    constructor() {
        super(...arguments);
        this.type = 'select';
    }
    /**
     * Provide defaults for undefined properties
     * @return {?}
     */
    get label() {
        return this.config.label;
    }
    /**
     * @return {?}
     */
    get options() {
        return this.config.options || [];
    }
    /**
     * @return {?}
     */
    get multiple() {
        return this.config.multiple || false;
    }
    /**
     * @return {?}
     */
    get placeholder() {
        return this.config.placeholder || 'Select item';
    }
    /**
     * @return {?}
     */
    get dropDirection() {
        return this.config.dropDirection || 'down';
    }
    /**
     * @return {?}
     */
    get allowNull() {
        return this.config.allowNull || false;
    }
    /**
     * @return {?}
     */
    get disabled() {
        return this.config.disabled || false;
    }
    /**
     * @return {?}
     */
    get maxHeight() {
        return this.config.maxHeight || '250px';
    }
    /**
     * @return {?}
     */
    get pageSize() {
        return this.config.pageSize || 20;
    }
}
SearchSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-search-select',
                template: `<label class="form-label" *ngIf="label">{{ label }}</label>

<ux-select [(value)]="value" 
           [options]="options" 
           [multiple]="multiple" 
           [placeholder]="placeholder" 
           [dropDirection]="dropDirection"
           [pageSize]="pageSize"
           [allowNull]="allowNull"
           [disabled]="disabled"
           [maxHeight]="maxHeight"
           [key]="config.key"
           [display]="config.display"
           [loadingTemplate]="config.loadingTemplate"
           [optionTemplate]="config.optionTemplate"
           [noOptionsTemplate]="config.noOptionsTemplate">
</ux-select>`
            },] },
];
function SearchSelectComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SearchSelectComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SearchSelectComponent.ctorParameters;
    /** @type {?} */
    SearchSelectComponent.prototype.type;
}
/**
 * @record
 */
export function SearchSelectConfig() { }
function SearchSelectConfig_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    SearchSelectConfig.prototype.options;
    /** @type {?|undefined} */
    SearchSelectConfig.prototype.multiple;
    /** @type {?|undefined} */
    SearchSelectConfig.prototype.dropDirection;
    /** @type {?|undefined} */
    SearchSelectConfig.prototype.allowNull;
    /** @type {?|undefined} */
    SearchSelectConfig.prototype.disabled;
    /** @type {?|undefined} */
    SearchSelectConfig.prototype.maxHeight;
    /** @type {?|undefined} */
    SearchSelectConfig.prototype.pageSize;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3NlYXJjaC1idWlsZGVyL3NlYXJjaC1jb21wb25lbnRzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxtQkFBbUIsRUFBNkIsTUFBTSwwQkFBMEIsQ0FBQztBQXVCMUYsTUFBTSw0QkFBNkIsU0FBUSxtQkFBbUI7OztvQkFFN0MsUUFBUTs7Ozs7O0lBS3ZCLElBQUksS0FBSztRQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztLQUMxQjs7OztJQUVELElBQUksT0FBTztRQUNULE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7S0FDbEM7Ozs7SUFFRCxJQUFJLFFBQVE7UUFDVixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDO0tBQ3RDOzs7O0lBRUQsSUFBSSxXQUFXO1FBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxJQUFJLGFBQWEsQ0FBQztLQUNqRDs7OztJQUVELElBQUksYUFBYTtRQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsSUFBSSxNQUFNLENBQUM7S0FDNUM7Ozs7SUFFRCxJQUFJLFNBQVM7UUFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksS0FBSyxDQUFDO0tBQ3ZDOzs7O0lBRUQsSUFBSSxRQUFRO1FBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQztLQUN0Qzs7OztJQUVELElBQUksU0FBUztRQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsSUFBSSxPQUFPLENBQUM7S0FDekM7Ozs7SUFFRCxJQUFJLFFBQVE7UUFDVixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDO0tBQ25DOzs7WUE3REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OzthQWdCQzthQUNaIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJhc2VTZWFyY2hDb21wb25lbnQsIEJhc2VTZWFyY2hDb21wb25lbnRDb25maWcgfSBmcm9tICcuLi9iYXNlLXNlYXJjaC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJbmZpbml0ZVNjcm9sbExvYWRGdW5jdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL2luZGV4JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndXgtc2VhcmNoLXNlbGVjdCcsXHJcbiAgdGVtcGxhdGU6IGA8bGFiZWwgY2xhc3M9XCJmb3JtLWxhYmVsXCIgKm5nSWY9XCJsYWJlbFwiPnt7IGxhYmVsIH19PC9sYWJlbD5cclxuXHJcbjx1eC1zZWxlY3QgWyh2YWx1ZSldPVwidmFsdWVcIiBcclxuICAgICAgICAgICBbb3B0aW9uc109XCJvcHRpb25zXCIgXHJcbiAgICAgICAgICAgW211bHRpcGxlXT1cIm11bHRpcGxlXCIgXHJcbiAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCIgXHJcbiAgICAgICAgICAgW2Ryb3BEaXJlY3Rpb25dPVwiZHJvcERpcmVjdGlvblwiXHJcbiAgICAgICAgICAgW3BhZ2VTaXplXT1cInBhZ2VTaXplXCJcclxuICAgICAgICAgICBbYWxsb3dOdWxsXT1cImFsbG93TnVsbFwiXHJcbiAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgICAgICBbbWF4SGVpZ2h0XT1cIm1heEhlaWdodFwiXHJcbiAgICAgICAgICAgW2tleV09XCJjb25maWcua2V5XCJcclxuICAgICAgICAgICBbZGlzcGxheV09XCJjb25maWcuZGlzcGxheVwiXHJcbiAgICAgICAgICAgW2xvYWRpbmdUZW1wbGF0ZV09XCJjb25maWcubG9hZGluZ1RlbXBsYXRlXCJcclxuICAgICAgICAgICBbb3B0aW9uVGVtcGxhdGVdPVwiY29uZmlnLm9wdGlvblRlbXBsYXRlXCJcclxuICAgICAgICAgICBbbm9PcHRpb25zVGVtcGxhdGVdPVwiY29uZmlnLm5vT3B0aW9uc1RlbXBsYXRlXCI+XHJcbjwvdXgtc2VsZWN0PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlYXJjaFNlbGVjdENvbXBvbmVudCBleHRlbmRzIEJhc2VTZWFyY2hDb21wb25lbnQge1xyXG5cclxuICB0eXBlOiBzdHJpbmcgPSAnc2VsZWN0JztcclxuXHJcbiAgLyoqXHJcbiAgICogUHJvdmlkZSBkZWZhdWx0cyBmb3IgdW5kZWZpbmVkIHByb3BlcnRpZXNcclxuICAgKi9cclxuICBnZXQgbGFiZWwoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5sYWJlbDtcclxuICB9XHJcblxyXG4gIGdldCBvcHRpb25zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLm9wdGlvbnMgfHwgW107XHJcbiAgfVxyXG5cclxuICBnZXQgbXVsdGlwbGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcubXVsdGlwbGUgfHwgZmFsc2U7XHJcbiAgfVxyXG5cclxuICBnZXQgcGxhY2Vob2xkZXIoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5wbGFjZWhvbGRlciB8fCAnU2VsZWN0IGl0ZW0nO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRyb3BEaXJlY3Rpb24oKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5kcm9wRGlyZWN0aW9uIHx8ICdkb3duJztcclxuICB9XHJcblxyXG4gIGdldCBhbGxvd051bGwoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcuYWxsb3dOdWxsIHx8IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmRpc2FibGVkIHx8IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG1heEhlaWdodCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLm1heEhlaWdodCB8fCAnMjUwcHgnO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBhZ2VTaXplKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcucGFnZVNpemUgfHwgMjA7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNlYXJjaFNlbGVjdENvbmZpZyBleHRlbmRzIEJhc2VTZWFyY2hDb21wb25lbnRDb25maWcge1xyXG4gIG9wdGlvbnM/OiBhbnlbXSB8IEluZmluaXRlU2Nyb2xsTG9hZEZ1bmN0aW9uO1xyXG4gIG11bHRpcGxlPzogYm9vbGVhbjtcclxuICBkcm9wRGlyZWN0aW9uPzogJ3VwJyB8ICdkb3duJztcclxuICBhbGxvd051bGw/OiBib29sZWFuO1xyXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICBtYXhIZWlnaHQ/OiBzdHJpbmc7XHJcbiAgcGFnZVNpemU/OiBudW1iZXI7XHJcbn0iXX0=