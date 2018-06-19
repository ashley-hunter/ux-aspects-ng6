/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { BaseSearchComponent } from '../base-search.component';
export class SearchDateComponent extends BaseSearchComponent {
    constructor() {
        super(...arguments);
        this.type = 'date';
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
        return this.config.placeholder || 'Enter date';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // by default set to the current date if not specified
        if (!this.value) {
            this.value = new Date();
        }
    }
}
SearchDateComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-search-date',
                template: `<label class="form-label" *ngIf="label">{{ label }}</label>

<div class="input-group date m-nil">
    <span class="input-group-addon" tabindex="1" (click)="popover.show()">
        <i class="hpe-icon hpe-calendar" aria-hidden="true"></i>
    </span>
    <input type="text" #popover="ux-popover" [ngModel]="value | date:'dd MMMM yyyy'" [uxPopover]="popoverTemplate"
        placement="bottom" popoverClass="date-time-picker-popover" class="form-control" aria-label="Selected date" [placeholder]="placeholder">
</div>

<ng-template #popoverTemplate>
    <ux-date-time-picker [(date)]="value" [showTime]="false"></ux-date-time-picker>
</ng-template>`
            },] },
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9zZWFyY2gtYnVpbGRlci9zZWFyY2gtY29tcG9uZW50cy9kYXRlL2RhdGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxtQkFBbUIsRUFBNkIsTUFBTSwwQkFBMEIsQ0FBQztBQWtCMUYsTUFBTSwwQkFBMkIsU0FBUSxtQkFBbUI7OztvQkFFM0MsTUFBTTs7Ozs7SUFFckIsSUFBSSxLQUFLO1FBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0tBQzFCOzs7O0lBRUQsSUFBSSxXQUFXO1FBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxJQUFJLFlBQVksQ0FBQztLQUNoRDs7OztJQUVELFFBQVE7O1FBR04sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7U0FDekI7S0FDRjs7O1lBbENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7OztlQVlHO2FBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCYXNlU2VhcmNoQ29tcG9uZW50LCBCYXNlU2VhcmNoQ29tcG9uZW50Q29uZmlnIH0gZnJvbSAnLi4vYmFzZS1zZWFyY2guY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndXgtc2VhcmNoLWRhdGUnLFxyXG4gIHRlbXBsYXRlOiBgPGxhYmVsIGNsYXNzPVwiZm9ybS1sYWJlbFwiICpuZ0lmPVwibGFiZWxcIj57eyBsYWJlbCB9fTwvbGFiZWw+XHJcblxyXG48ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgZGF0ZSBtLW5pbFwiPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiIHRhYmluZGV4PVwiMVwiIChjbGljayk9XCJwb3BvdmVyLnNob3coKVwiPlxyXG4gICAgICAgIDxpIGNsYXNzPVwiaHBlLWljb24gaHBlLWNhbGVuZGFyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgPC9zcGFuPlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3BvcG92ZXI9XCJ1eC1wb3BvdmVyXCIgW25nTW9kZWxdPVwidmFsdWUgfCBkYXRlOidkZCBNTU1NIHl5eXknXCIgW3V4UG9wb3Zlcl09XCJwb3BvdmVyVGVtcGxhdGVcIlxyXG4gICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiIHBvcG92ZXJDbGFzcz1cImRhdGUtdGltZS1waWNrZXItcG9wb3ZlclwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgYXJpYS1sYWJlbD1cIlNlbGVjdGVkIGRhdGVcIiBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIj5cclxuPC9kaXY+XHJcblxyXG48bmctdGVtcGxhdGUgI3BvcG92ZXJUZW1wbGF0ZT5cclxuICAgIDx1eC1kYXRlLXRpbWUtcGlja2VyIFsoZGF0ZSldPVwidmFsdWVcIiBbc2hvd1RpbWVdPVwiZmFsc2VcIj48L3V4LWRhdGUtdGltZS1waWNrZXI+XHJcbjwvbmctdGVtcGxhdGU+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoRGF0ZUNvbXBvbmVudCBleHRlbmRzIEJhc2VTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICB0eXBlOiBzdHJpbmcgPSAnZGF0ZSc7XHJcblxyXG4gIGdldCBsYWJlbCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmxhYmVsO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBsYWNlaG9sZGVyKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWcucGxhY2Vob2xkZXIgfHwgJ0VudGVyIGRhdGUnO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gICAgLy8gYnkgZGVmYXVsdCBzZXQgdG8gdGhlIGN1cnJlbnQgZGF0ZSBpZiBub3Qgc3BlY2lmaWVkXHJcbiAgICBpZiAoIXRoaXMudmFsdWUpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNlYXJjaERhdGVDb25maWcgZXh0ZW5kcyBCYXNlU2VhcmNoQ29tcG9uZW50Q29uZmlnIHsgfSJdfQ==