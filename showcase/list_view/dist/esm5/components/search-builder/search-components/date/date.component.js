/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { BaseSearchComponent } from '../base-search.component';
var SearchDateComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SearchDateComponent, _super);
    function SearchDateComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'date';
        return _this;
    }
    Object.defineProperty(SearchDateComponent.prototype, "label", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.label;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchDateComponent.prototype, "placeholder", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.placeholder || 'Enter date';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SearchDateComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // by default set to the current date if not specified
        if (!this.value) {
            this.value = new Date();
        }
    };
    SearchDateComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-search-date',
                    template: "<label class=\"form-label\" *ngIf=\"label\">{{ label }}</label>\n\n<div class=\"input-group date m-nil\">\n    <span class=\"input-group-addon\" tabindex=\"1\" (click)=\"popover.show()\">\n        <i class=\"hpe-icon hpe-calendar\" aria-hidden=\"true\"></i>\n    </span>\n    <input type=\"text\" #popover=\"ux-popover\" [ngModel]=\"value | date:'dd MMMM yyyy'\" [uxPopover]=\"popoverTemplate\"\n        placement=\"bottom\" popoverClass=\"date-time-picker-popover\" class=\"form-control\" aria-label=\"Selected date\" [placeholder]=\"placeholder\">\n</div>\n\n<ng-template #popoverTemplate>\n    <ux-date-time-picker [(date)]=\"value\" [showTime]=\"false\"></ux-date-time-picker>\n</ng-template>"
                },] },
    ];
    return SearchDateComponent;
}(BaseSearchComponent));
export { SearchDateComponent };
function SearchDateComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SearchDateComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SearchDateComponent.ctorParameters;
    /** @type {?} */
    SearchDateComponent.prototype.type;
}
/**
 * @record
 */
export function SearchDateConfig() { }
function SearchDateConfig_tsickle_Closure_declarations() {
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9zZWFyY2gtYnVpbGRlci9zZWFyY2gtY29tcG9uZW50cy9kYXRlL2RhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsbUJBQW1CLEVBQTZCLE1BQU0sMEJBQTBCLENBQUM7O0lBa0JqRCwrQ0FBbUI7OztxQkFFM0MsTUFBTTs7O0lBRXJCLHNCQUFJLHNDQUFLOzs7O1FBQVQ7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDMUI7OztPQUFBO0lBRUQsc0JBQUksNENBQVc7Ozs7UUFBZjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsSUFBSSxZQUFZLENBQUM7U0FDaEQ7OztPQUFBOzs7O0lBRUQsc0NBQVE7OztJQUFSOztRQUdFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1NBQ3pCO0tBQ0Y7O2dCQWxDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLDByQkFZRztpQkFDZDs7OEJBbEJEO0VBbUJ5QyxtQkFBbUI7U0FBL0MsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmFzZVNlYXJjaENvbXBvbmVudCwgQmFzZVNlYXJjaENvbXBvbmVudENvbmZpZyB9IGZyb20gJy4uL2Jhc2Utc2VhcmNoLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3V4LXNlYXJjaC1kYXRlJyxcclxuICB0ZW1wbGF0ZTogYDxsYWJlbCBjbGFzcz1cImZvcm0tbGFiZWxcIiAqbmdJZj1cImxhYmVsXCI+e3sgbGFiZWwgfX08L2xhYmVsPlxyXG5cclxuPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIGRhdGUgbS1uaWxcIj5cclxuICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIiB0YWJpbmRleD1cIjFcIiAoY2xpY2spPVwicG9wb3Zlci5zaG93KClcIj5cclxuICAgICAgICA8aSBjbGFzcz1cImhwZS1pY29uIGhwZS1jYWxlbmRhclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgIDwvc3Bhbj5cclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNwb3BvdmVyPVwidXgtcG9wb3ZlclwiIFtuZ01vZGVsXT1cInZhbHVlIHwgZGF0ZTonZGQgTU1NTSB5eXl5J1wiIFt1eFBvcG92ZXJdPVwicG9wb3ZlclRlbXBsYXRlXCJcclxuICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21cIiBwb3BvdmVyQ2xhc3M9XCJkYXRlLXRpbWUtcGlja2VyLXBvcG92ZXJcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGFyaWEtbGFiZWw9XCJTZWxlY3RlZCBkYXRlXCIgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCI+XHJcbjwvZGl2PlxyXG5cclxuPG5nLXRlbXBsYXRlICNwb3BvdmVyVGVtcGxhdGU+XHJcbiAgICA8dXgtZGF0ZS10aW1lLXBpY2tlciBbKGRhdGUpXT1cInZhbHVlXCIgW3Nob3dUaW1lXT1cImZhbHNlXCI+PC91eC1kYXRlLXRpbWUtcGlja2VyPlxyXG48L25nLXRlbXBsYXRlPmBcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlYXJjaERhdGVDb21wb25lbnQgZXh0ZW5kcyBCYXNlU2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgdHlwZTogc3RyaW5nID0gJ2RhdGUnO1xyXG5cclxuICBnZXQgbGFiZWwoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZy5sYWJlbDtcclxuICB9XHJcblxyXG4gIGdldCBwbGFjZWhvbGRlcigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLnBsYWNlaG9sZGVyIHx8ICdFbnRlciBkYXRlJztcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgIC8vIGJ5IGRlZmF1bHQgc2V0IHRvIHRoZSBjdXJyZW50IGRhdGUgaWYgbm90IHNwZWNpZmllZFxyXG4gICAgaWYgKCF0aGlzLnZhbHVlKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZWFyY2hEYXRlQ29uZmlnIGV4dGVuZHMgQmFzZVNlYXJjaENvbXBvbmVudENvbmZpZyB7IH0iXX0=