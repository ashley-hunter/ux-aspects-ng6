/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TabsetService } from './tabset.service';
export class TabsetComponent {
    /**
     * @param {?} tabset
     */
    constructor(tabset) {
        this.tabset = tabset;
        this.minimal = true;
        this.stacked = 'none';
    }
    /**
     * Allow manual tab selected
     * @param {?} tab
     * @return {?}
     */
    select(tab) {
        this.tabset.select(tab);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    selectPreviousTab(event) {
        // determine which arrow key is pressed
        const /** @type {?} */ arrowLeft = event.key === 'ArrowLeft' || event.keyCode === 37;
        const /** @type {?} */ arrowUp = event.key === 'ArrowUp' || event.keyCode === 38;
        // only perform action if the arrow key matches the orientation
        if (arrowLeft && this.stacked !== 'none' || arrowUp && this.stacked === 'none') {
            return;
        }
        // perform selection
        this.tabset.selectPreviousTab();
        // prevent the browser from scrolling when arrow keys are pressed
        event.preventDefault();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    selectNextTab(event) {
        // determine which arrow key is pressed
        const /** @type {?} */ arrowRight = event.key === 'ArrowRight' || event.keyCode === 39;
        const /** @type {?} */ arrowDown = event.key === 'ArrowDown' || event.keyCode === 40;
        // only perform action if the arrow key matches the orientation
        if (arrowRight && this.stacked !== 'none' || arrowDown && this.stacked === 'none') {
            return;
        }
        // perform selection
        this.tabset.selectNextTab();
        // prevent the browser from scrolling when arrow keys are pressed
        event.preventDefault();
    }
}
TabsetComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-tabset',
                template: `<!-- Nav tabs -->
<ul role="tablist"
    class="nav nav-tabs"
    [class.minimal-tab]="minimal"
    [attr.aria-label]="ariaLabel"
    [attr.aria-orientation]="stacked === 'none' ? 'horizontal' : 'vertical'">

	<li role="presentation" 
        class="nav-item"
        *ngFor="let tab of tabset.tabs$ | async; let index = index"
        [class.active]="tab.active$ | async"
        [class.disabled]="tab.disabled"
        [ngClass]="tab.customClass">

        <a class="nav-link"
            [id]="tab.id"
            role="tab"
            [uxTabFocus]="tab"
            [tabindex]="(tab.active$ | async) ? 0 : -1"
            [class.highlighted]="(tabset.focused$ | async) && (tabset.highlighted$ | async) === tab"            
            (mousedown)="tabset.select(tab)"
            (focus)="tabset.focused$.next(true)"
            (blur)="tabset.focused$.next(false)"
            (mousedown)="tabset.focused$.next(true)"
            (keydown.ArrowUp)="selectPreviousTab($event)"
            (keydown.ArrowLeft)="selectPreviousTab($event)"
            (keydown.ArrowRight)="selectNextTab($event)"
            (keydown.ArrowDown)="selectNextTab($event)"
            (keydown.Home)="tabset.selectFirstTab(); $event.preventDefault()"
            (keydown.End)="tabset.selectLastTab(); $event.preventDefault()"
            [attr.aria-controls]="tab.id"
            [attr.aria-selected]="tab.active$ | async"
            [attr.aria-disabled]="tab.disabled">

            <span *ngIf="!tab.headingRef">{{ tab.heading }}</span>

            <ng-container *ngIf="tab.headingRef" [ngTemplateOutlet]="tab.headingRef"></ng-container>
        </a>

	</li>

</ul>

<!-- Tab panes -->
<div class="tab-content">
	<ng-content></ng-content>
</div>`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [TabsetService],
                host: {
                    '[class.tabs-left]': 'stacked === "left"',
                    '[class.tabs-right]': 'stacked === "right"',
                }
            },] },
];
/** @nocollapse */
TabsetComponent.ctorParameters = () => [
    { type: TabsetService, },
];
TabsetComponent.propDecorators = {
    "minimal": [{ type: Input },],
    "stacked": [{ type: Input },],
    "ariaLabel": [{ type: Input, args: ['aria-label',] },],
};
function TabsetComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TabsetComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TabsetComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    TabsetComponent.propDecorators;
    /** @type {?} */
    TabsetComponent.prototype.minimal;
    /** @type {?} */
    TabsetComponent.prototype.stacked;
    /** @type {?} */
    TabsetComponent.prototype.ariaLabel;
    /** @type {?} */
    TabsetComponent.prototype.tabset;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFic2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3RhYnNldC90YWJzZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUEwRGpELE1BQU07Ozs7SUFNRixZQUFtQixNQUFxQjtRQUFyQixXQUFNLEdBQU4sTUFBTSxDQUFlO3VCQUpaLElBQUk7dUJBQ2MsTUFBTTtLQUdQOzs7Ozs7SUFLN0MsTUFBTSxDQUFDLEdBQWlCO1FBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzNCOzs7OztJQUVELGlCQUFpQixDQUFDLEtBQW9COztRQUdsQyx1QkFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLEdBQUcsS0FBSyxXQUFXLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7UUFDcEUsdUJBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxHQUFHLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssRUFBRSxDQUFDOztRQUdoRSxFQUFFLENBQUMsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxNQUFNLElBQUksT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQztZQUM3RSxNQUFNLENBQUM7U0FDVjs7UUFHRCxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUM7O1FBR2hDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztLQUMxQjs7Ozs7SUFFRCxhQUFhLENBQUMsS0FBb0I7O1FBRzlCLHVCQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsR0FBRyxLQUFLLFlBQVksSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQztRQUN0RSx1QkFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLEdBQUcsS0FBSyxXQUFXLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7O1FBR3BFLEVBQUUsQ0FBQyxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLE1BQU0sSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2hGLE1BQU0sQ0FBQztTQUNWOztRQUdELElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7O1FBRzVCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztLQUMxQjs7O1lBekdKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BOENQO2dCQUNILGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUM7Z0JBQzFCLElBQUksRUFBRTtvQkFDRixtQkFBbUIsRUFBRSxvQkFBb0I7b0JBQ3pDLG9CQUFvQixFQUFFLHFCQUFxQjtpQkFDOUM7YUFDSjs7OztZQXpEUSxhQUFhOzs7d0JBNERqQixLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSyxTQUFDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUYWJDb21wb25lbnQgfSBmcm9tICcuL3RhYi90YWIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGFic2V0U2VydmljZSB9IGZyb20gJy4vdGFic2V0LnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3V4LXRhYnNldCcsXHJcbiAgICB0ZW1wbGF0ZTogYDwhLS0gTmF2IHRhYnMgLS0+XHJcbjx1bCByb2xlPVwidGFibGlzdFwiXHJcbiAgICBjbGFzcz1cIm5hdiBuYXYtdGFic1wiXHJcbiAgICBbY2xhc3MubWluaW1hbC10YWJdPVwibWluaW1hbFwiXHJcbiAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImFyaWFMYWJlbFwiXHJcbiAgICBbYXR0ci5hcmlhLW9yaWVudGF0aW9uXT1cInN0YWNrZWQgPT09ICdub25lJyA/ICdob3Jpem9udGFsJyA6ICd2ZXJ0aWNhbCdcIj5cclxuXHJcblx0PGxpIHJvbGU9XCJwcmVzZW50YXRpb25cIiBcclxuICAgICAgICBjbGFzcz1cIm5hdi1pdGVtXCJcclxuICAgICAgICAqbmdGb3I9XCJsZXQgdGFiIG9mIHRhYnNldC50YWJzJCB8IGFzeW5jOyBsZXQgaW5kZXggPSBpbmRleFwiXHJcbiAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJ0YWIuYWN0aXZlJCB8IGFzeW5jXCJcclxuICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwidGFiLmRpc2FibGVkXCJcclxuICAgICAgICBbbmdDbGFzc109XCJ0YWIuY3VzdG9tQ2xhc3NcIj5cclxuXHJcbiAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiXHJcbiAgICAgICAgICAgIFtpZF09XCJ0YWIuaWRcIlxyXG4gICAgICAgICAgICByb2xlPVwidGFiXCJcclxuICAgICAgICAgICAgW3V4VGFiRm9jdXNdPVwidGFiXCJcclxuICAgICAgICAgICAgW3RhYmluZGV4XT1cIih0YWIuYWN0aXZlJCB8IGFzeW5jKSA/IDAgOiAtMVwiXHJcbiAgICAgICAgICAgIFtjbGFzcy5oaWdobGlnaHRlZF09XCIodGFic2V0LmZvY3VzZWQkIHwgYXN5bmMpICYmICh0YWJzZXQuaGlnaGxpZ2h0ZWQkIHwgYXN5bmMpID09PSB0YWJcIiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAobW91c2Vkb3duKT1cInRhYnNldC5zZWxlY3QodGFiKVwiXHJcbiAgICAgICAgICAgIChmb2N1cyk9XCJ0YWJzZXQuZm9jdXNlZCQubmV4dCh0cnVlKVwiXHJcbiAgICAgICAgICAgIChibHVyKT1cInRhYnNldC5mb2N1c2VkJC5uZXh0KGZhbHNlKVwiXHJcbiAgICAgICAgICAgIChtb3VzZWRvd24pPVwidGFic2V0LmZvY3VzZWQkLm5leHQodHJ1ZSlcIlxyXG4gICAgICAgICAgICAoa2V5ZG93bi5BcnJvd1VwKT1cInNlbGVjdFByZXZpb3VzVGFiKCRldmVudClcIlxyXG4gICAgICAgICAgICAoa2V5ZG93bi5BcnJvd0xlZnQpPVwic2VsZWN0UHJldmlvdXNUYWIoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgIChrZXlkb3duLkFycm93UmlnaHQpPVwic2VsZWN0TmV4dFRhYigkZXZlbnQpXCJcclxuICAgICAgICAgICAgKGtleWRvd24uQXJyb3dEb3duKT1cInNlbGVjdE5leHRUYWIoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgIChrZXlkb3duLkhvbWUpPVwidGFic2V0LnNlbGVjdEZpcnN0VGFiKCk7ICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCJcclxuICAgICAgICAgICAgKGtleWRvd24uRW5kKT1cInRhYnNldC5zZWxlY3RMYXN0VGFiKCk7ICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCJcclxuICAgICAgICAgICAgW2F0dHIuYXJpYS1jb250cm9sc109XCJ0YWIuaWRcIlxyXG4gICAgICAgICAgICBbYXR0ci5hcmlhLXNlbGVjdGVkXT1cInRhYi5hY3RpdmUkIHwgYXN5bmNcIlxyXG4gICAgICAgICAgICBbYXR0ci5hcmlhLWRpc2FibGVkXT1cInRhYi5kaXNhYmxlZFwiPlxyXG5cclxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCIhdGFiLmhlYWRpbmdSZWZcIj57eyB0YWIuaGVhZGluZyB9fTwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0YWIuaGVhZGluZ1JlZlwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRhYi5oZWFkaW5nUmVmXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9hPlxyXG5cclxuXHQ8L2xpPlxyXG5cclxuPC91bD5cclxuXHJcbjwhLS0gVGFiIHBhbmVzIC0tPlxyXG48ZGl2IGNsYXNzPVwidGFiLWNvbnRlbnRcIj5cclxuXHQ8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PmAsXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAgIHByb3ZpZGVyczogW1RhYnNldFNlcnZpY2VdLFxyXG4gICAgaG9zdDoge1xyXG4gICAgICAgICdbY2xhc3MudGFicy1sZWZ0XSc6ICdzdGFja2VkID09PSBcImxlZnRcIicsXHJcbiAgICAgICAgJ1tjbGFzcy50YWJzLXJpZ2h0XSc6ICdzdGFja2VkID09PSBcInJpZ2h0XCInLFxyXG4gICAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFic2V0Q29tcG9uZW50IHtcclxuXHJcbiAgICBASW5wdXQoKSBtaW5pbWFsOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgpIHN0YWNrZWQ6ICdsZWZ0JyB8ICdyaWdodCcgfCAnbm9uZScgPSAnbm9uZSc7XHJcbiAgICBASW5wdXQoJ2FyaWEtbGFiZWwnKSBhcmlhTGFiZWw6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGFic2V0OiBUYWJzZXRTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFsbG93IG1hbnVhbCB0YWIgc2VsZWN0ZWRcclxuICAgICAqL1xyXG4gICAgc2VsZWN0KHRhYjogVGFiQ29tcG9uZW50KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50YWJzZXQuc2VsZWN0KHRhYik7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0UHJldmlvdXNUYWIoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gZGV0ZXJtaW5lIHdoaWNoIGFycm93IGtleSBpcyBwcmVzc2VkXHJcbiAgICAgICAgY29uc3QgYXJyb3dMZWZ0ID0gZXZlbnQua2V5ID09PSAnQXJyb3dMZWZ0JyB8fCBldmVudC5rZXlDb2RlID09PSAzNztcclxuICAgICAgICBjb25zdCBhcnJvd1VwID0gZXZlbnQua2V5ID09PSAnQXJyb3dVcCcgfHwgZXZlbnQua2V5Q29kZSA9PT0gMzg7XHJcblxyXG4gICAgICAgIC8vIG9ubHkgcGVyZm9ybSBhY3Rpb24gaWYgdGhlIGFycm93IGtleSBtYXRjaGVzIHRoZSBvcmllbnRhdGlvblxyXG4gICAgICAgIGlmIChhcnJvd0xlZnQgJiYgdGhpcy5zdGFja2VkICE9PSAnbm9uZScgfHwgYXJyb3dVcCAmJiB0aGlzLnN0YWNrZWQgPT09ICdub25lJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBwZXJmb3JtIHNlbGVjdGlvblxyXG4gICAgICAgIHRoaXMudGFic2V0LnNlbGVjdFByZXZpb3VzVGFiKCk7XHJcblxyXG4gICAgICAgIC8vIHByZXZlbnQgdGhlIGJyb3dzZXIgZnJvbSBzY3JvbGxpbmcgd2hlbiBhcnJvdyBrZXlzIGFyZSBwcmVzc2VkXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3ROZXh0VGFiKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcblxyXG4gICAgICAgIC8vIGRldGVybWluZSB3aGljaCBhcnJvdyBrZXkgaXMgcHJlc3NlZFxyXG4gICAgICAgIGNvbnN0IGFycm93UmlnaHQgPSBldmVudC5rZXkgPT09ICdBcnJvd1JpZ2h0JyB8fCBldmVudC5rZXlDb2RlID09PSAzOTtcclxuICAgICAgICBjb25zdCBhcnJvd0Rvd24gPSBldmVudC5rZXkgPT09ICdBcnJvd0Rvd24nIHx8IGV2ZW50LmtleUNvZGUgPT09IDQwO1xyXG5cclxuICAgICAgICAvLyBvbmx5IHBlcmZvcm0gYWN0aW9uIGlmIHRoZSBhcnJvdyBrZXkgbWF0Y2hlcyB0aGUgb3JpZW50YXRpb25cclxuICAgICAgICBpZiAoYXJyb3dSaWdodCAmJiB0aGlzLnN0YWNrZWQgIT09ICdub25lJyB8fCBhcnJvd0Rvd24gJiYgdGhpcy5zdGFja2VkID09PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcGVyZm9ybSBzZWxlY3Rpb25cclxuICAgICAgICB0aGlzLnRhYnNldC5zZWxlY3ROZXh0VGFiKCk7XHJcblxyXG4gICAgICAgIC8vIHByZXZlbnQgdGhlIGJyb3dzZXIgZnJvbSBzY3JvbGxpbmcgd2hlbiBhcnJvdyBrZXlzIGFyZSBwcmVzc2VkXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxufSJdfQ==