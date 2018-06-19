/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Subject } from 'rxjs';
import { TooltipComponent } from '../tooltip/index';
let /** @type {?} */ uniquePopoverId = 0;
export class PopoverComponent extends TooltipComponent {
    constructor() {
        super(...arguments);
        /**
         * Define a unique id for each popover
         */
        this.id = `ux-popover-${++uniquePopoverId}`;
        /**
         * This will emit an event any time the user clicks outside the popover
         */
        this.clickOutside$ = new Subject();
    }
    /**
     * This will update the title of the popover and trigger change detection
     * @param {?} title
     * @return {?}
     */
    setTitle(title) {
        this.title = title;
        this._changeDetectorRef.markForCheck();
    }
}
PopoverComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-popover',
                template: `<div class="popover show" [ngClass]="[placement, customClass]" [id]="id" [attr.role]="role" (uxClickOutside)="clickOutside$.next($event)">
    <div class="arrow"></div>
    <h3 class="popover-title" *ngIf="title">{{ title }}</h3>
    <div class="popover-content" (cdkObserveContent)="reposition()">
        <ng-container *ngIf="!isTemplateRef">{{ content }}</ng-container>
        <ng-container *ngIf="isTemplateRef" [ngTemplateOutlet]="content" [ngTemplateOutletContext]="context"></ng-container>
    </div>
</div>`,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
function PopoverComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    PopoverComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    PopoverComponent.ctorParameters;
    /**
     * Define a unique id for each popover
     * @type {?}
     */
    PopoverComponent.prototype.id;
    /**
     * If specified allows the popover to show a title
     * @type {?}
     */
    PopoverComponent.prototype.title;
    /**
     * This will emit an event any time the user clicks outside the popover
     * @type {?}
     */
    PopoverComponent.prototype.clickOutside$;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9wb3BvdmVyL3BvcG92ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFcEQscUJBQUksZUFBZSxHQUFHLENBQUMsQ0FBQztBQWN4QixNQUFNLHVCQUF3QixTQUFRLGdCQUFnQjs7Ozs7O2tCQUd2QyxjQUFjLEVBQUUsZUFBZSxFQUFFOzs7OzZCQU05QixJQUFJLE9BQU8sRUFBYzs7Ozs7OztJQUd6QyxRQUFRLENBQUMsS0FBYTtRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDeEM7OztZQTNCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRTs7Ozs7OztPQU9MO2dCQUNMLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFRvb2x0aXBDb21wb25lbnQgfSBmcm9tICcuLi90b29sdGlwL2luZGV4JztcclxuXHJcbmxldCB1bmlxdWVQb3BvdmVySWQgPSAwO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd1eC1wb3BvdmVyJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJwb3BvdmVyIHNob3dcIiBbbmdDbGFzc109XCJbcGxhY2VtZW50LCBjdXN0b21DbGFzc11cIiBbaWRdPVwiaWRcIiBbYXR0ci5yb2xlXT1cInJvbGVcIiAodXhDbGlja091dHNpZGUpPVwiY2xpY2tPdXRzaWRlJC5uZXh0KCRldmVudClcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJhcnJvd1wiPjwvZGl2PlxyXG4gICAgPGgzIGNsYXNzPVwicG9wb3Zlci10aXRsZVwiICpuZ0lmPVwidGl0bGVcIj57eyB0aXRsZSB9fTwvaDM+XHJcbiAgICA8ZGl2IGNsYXNzPVwicG9wb3Zlci1jb250ZW50XCIgKGNka09ic2VydmVDb250ZW50KT1cInJlcG9zaXRpb24oKVwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNUZW1wbGF0ZVJlZlwiPnt7IGNvbnRlbnQgfX08L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNUZW1wbGF0ZVJlZlwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbnRlbnRcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwiY29udGV4dFwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PmAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvcG92ZXJDb21wb25lbnQgZXh0ZW5kcyBUb29sdGlwQ29tcG9uZW50IHtcclxuXHJcbiAgLyoqIERlZmluZSBhIHVuaXF1ZSBpZCBmb3IgZWFjaCBwb3BvdmVyICovXHJcbiAgaWQ6IHN0cmluZyA9IGB1eC1wb3BvdmVyLSR7Kyt1bmlxdWVQb3BvdmVySWR9YDtcclxuXHJcbiAgLyoqIElmIHNwZWNpZmllZCBhbGxvd3MgdGhlIHBvcG92ZXIgdG8gc2hvdyBhIHRpdGxlICovXHJcbiAgdGl0bGU6IHN0cmluZztcclxuXHJcbiAgLyoqIFRoaXMgd2lsbCBlbWl0IGFuIGV2ZW50IGFueSB0aW1lIHRoZSB1c2VyIGNsaWNrcyBvdXRzaWRlIHRoZSBwb3BvdmVyICovXHJcbiAgY2xpY2tPdXRzaWRlJCA9IG5ldyBTdWJqZWN0PE1vdXNlRXZlbnQ+KCk7XHJcblxyXG4gIC8qKiBUaGlzIHdpbGwgdXBkYXRlIHRoZSB0aXRsZSBvZiB0aGUgcG9wb3ZlciBhbmQgdHJpZ2dlciBjaGFuZ2UgZGV0ZWN0aW9uICovXHJcbiAgc2V0VGl0bGUodGl0bGU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG59Il19