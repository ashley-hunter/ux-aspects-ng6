/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { BaseSearchComponent } from '../base-search.component';
var SearchSelectComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SearchSelectComponent, _super);
    function SearchSelectComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'select';
        return _this;
    }
    Object.defineProperty(SearchSelectComponent.prototype, "label", {
        /**
         * Provide defaults for undefined properties
         */
        get: /**
         * Provide defaults for undefined properties
         * @return {?}
         */
        function () {
            return this.config.label;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchSelectComponent.prototype, "options", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.options || [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchSelectComponent.prototype, "multiple", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.multiple || false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchSelectComponent.prototype, "placeholder", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.placeholder || 'Select item';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchSelectComponent.prototype, "dropDirection", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.dropDirection || 'down';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchSelectComponent.prototype, "allowNull", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.allowNull || false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchSelectComponent.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.disabled || false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchSelectComponent.prototype, "maxHeight", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.maxHeight || '250px';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchSelectComponent.prototype, "pageSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.pageSize || 20;
        },
        enumerable: true,
        configurable: true
    });
    SearchSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-search-select',
                    template: "<label class=\"form-label\" *ngIf=\"label\">{{ label }}</label>\n\n<ux-select [(value)]=\"value\" \n           [options]=\"options\" \n           [multiple]=\"multiple\" \n           [placeholder]=\"placeholder\" \n           [dropDirection]=\"dropDirection\"\n           [pageSize]=\"pageSize\"\n           [allowNull]=\"allowNull\"\n           [disabled]=\"disabled\"\n           [maxHeight]=\"maxHeight\"\n           [key]=\"config.key\"\n           [display]=\"config.display\"\n           [loadingTemplate]=\"config.loadingTemplate\"\n           [optionTemplate]=\"config.optionTemplate\"\n           [noOptionsTemplate]=\"config.noOptionsTemplate\">\n</ux-select>"
                },] },
    ];
    return SearchSelectComponent;
}(BaseSearchComponent));
export { SearchSelectComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3NlYXJjaC1idWlsZGVyL3NlYXJjaC1jb21wb25lbnRzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsbUJBQW1CLEVBQTZCLE1BQU0sMEJBQTBCLENBQUM7O0lBdUIvQyxpREFBbUI7OztxQkFFN0MsUUFBUTs7O0lBS3ZCLHNCQUFJLHdDQUFLO1FBSFQ7O1dBRUc7Ozs7O1FBQ0g7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDMUI7OztPQUFBO0lBRUQsc0JBQUksMENBQU87Ozs7UUFBWDtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7U0FDbEM7OztPQUFBO0lBRUQsc0JBQUksMkNBQVE7Ozs7UUFBWjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUM7U0FDdEM7OztPQUFBO0lBRUQsc0JBQUksOENBQVc7Ozs7UUFBZjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsSUFBSSxhQUFhLENBQUM7U0FDakQ7OztPQUFBO0lBRUQsc0JBQUksZ0RBQWE7Ozs7UUFBakI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLElBQUksTUFBTSxDQUFDO1NBQzVDOzs7T0FBQTtJQUVELHNCQUFJLDRDQUFTOzs7O1FBQWI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksS0FBSyxDQUFDO1NBQ3ZDOzs7T0FBQTtJQUVELHNCQUFJLDJDQUFROzs7O1FBQVo7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDO1NBQ3RDOzs7T0FBQTtJQUVELHNCQUFJLDRDQUFTOzs7O1FBQWI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksT0FBTyxDQUFDO1NBQ3pDOzs7T0FBQTtJQUVELHNCQUFJLDJDQUFROzs7O1FBQVo7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDO1NBQ25DOzs7T0FBQTs7Z0JBN0RGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUUsK3BCQWdCQztpQkFDWjs7Z0NBdkJEO0VBd0IyQyxtQkFBbUI7U0FBakQscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJhc2VTZWFyY2hDb21wb25lbnQsIEJhc2VTZWFyY2hDb21wb25lbnRDb25maWcgfSBmcm9tICcuLi9iYXNlLXNlYXJjaC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJbmZpbml0ZVNjcm9sbExvYWRGdW5jdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL2luZGV4JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndXgtc2VhcmNoLXNlbGVjdCcsXHJcbiAgdGVtcGxhdGU6IGA8bGFiZWwgY2xhc3M9XCJmb3JtLWxhYmVsXCIgKm5nSWY9XCJsYWJlbFwiPnt7IGxhYmVsIH19PC9sYWJlbD5cclxuXHJcbjx1eC1zZWxlY3QgWyh2YWx1ZSldPVwidmFsdWVcIiBcclxuICAgICAgICAgICBbb3B0aW9uc109XCJvcHRpb25zXCIgXHJcbiAgICAgICAgICAgW211bHRpcGxlXT1cIm11bHRpcGxlXCIgXHJcbiAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCIgXHJcbiAgICAgICAgICAgW2Ryb3BEaXJlY3Rpb25dPVwiZHJvcERpcmVjdGlvblwiXHJcbiAgICAgICAgICAgW3BhZ2VTaXplXT1cInBhZ2VTaXplXCJcclxuICAgICAgICAgICBbYWxsb3dOdWxsXT1cImFsbG93TnVsbFwiXHJcbiAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgICAgICBbbWF4SGVpZ2h0XT1cIm1heEhlaWdodFwiXHJcbiAgICAgICAgICAgW2tleV09XCJjb25maWcua2V5XCJcclxuICAgICAgICAgICBbZGlzcGxheV09XCJjb25maWcuZGlzcGxheVwiXHJcbiAgICAgICAgICAgW2xvYWRpbmdUZW1wbGF0ZV09XCJjb25maWcubG9hZGluZ1RlbXBsYXRlXCJcclxuICAgICAgICAgICBbb3B0aW9uVGVtcGxhdGVdPVwiY29uZmlnLm9wdGlvblRlbXBsYXRlXCJcclxuICAgICAgICAgICBbbm9PcHRpb25zVGVtcGxhdGVdPVwiY29uZmlnLm5vT3B0aW9uc1RlbXBsYXRlXCI+XHJcbjwvdXgtc2VsZWN0PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlYXJjaFNlbGVjdENvbXBvbmVudCBleHRlbmRzIEJhc2VTZWFyY2hDb21wb25lbnQge1xyXG5cclxuICB0eXBlOiBzdHJpbmcgPSAnc2VsZWN0JztcclxuXHJcbiAgLyoqXHJcbiAgICogUHJvdmlkZSBkZWZhdWx0cyBmb3IgdW5kZWZpbmVkIHByb3BlcnRpZXNcclxuICAgKi9cclxuICBnZXQgbGFiZWwoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5sYWJlbDtcclxuICB9XHJcblxyXG4gIGdldCBvcHRpb25zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLm9wdGlvbnMgfHwgW107XHJcbiAgfVxyXG5cclxuICBnZXQgbXVsdGlwbGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcubXVsdGlwbGUgfHwgZmFsc2U7XHJcbiAgfVxyXG5cclxuICBnZXQgcGxhY2Vob2xkZXIoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5wbGFjZWhvbGRlciB8fCAnU2VsZWN0IGl0ZW0nO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRyb3BEaXJlY3Rpb24oKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5kcm9wRGlyZWN0aW9uIHx8ICdkb3duJztcclxuICB9XHJcblxyXG4gIGdldCBhbGxvd051bGwoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcuYWxsb3dOdWxsIHx8IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmRpc2FibGVkIHx8IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG1heEhlaWdodCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLm1heEhlaWdodCB8fCAnMjUwcHgnO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBhZ2VTaXplKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcucGFnZVNpemUgfHwgMjA7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNlYXJjaFNlbGVjdENvbmZpZyBleHRlbmRzIEJhc2VTZWFyY2hDb21wb25lbnRDb25maWcge1xyXG4gIG9wdGlvbnM/OiBhbnlbXSB8IEluZmluaXRlU2Nyb2xsTG9hZEZ1bmN0aW9uO1xyXG4gIG11bHRpcGxlPzogYm9vbGVhbjtcclxuICBkcm9wRGlyZWN0aW9uPzogJ3VwJyB8ICdkb3duJztcclxuICBhbGxvd051bGw/OiBib29sZWFuO1xyXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICBtYXhIZWlnaHQ/OiBzdHJpbmc7XHJcbiAgcGFnZVNpemU/OiBudW1iZXI7XHJcbn0iXX0=