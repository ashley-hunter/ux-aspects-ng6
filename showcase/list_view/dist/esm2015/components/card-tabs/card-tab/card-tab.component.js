/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ContentChild, TemplateRef } from '@angular/core';
import { map } from 'rxjs/operators';
import { CardTabsService } from '../card-tabs.service';
import { CardTabContentDirective } from './card-tab-content.directive';
export class CardTabComponent {
    /**
     * @param {?} _tabService
     */
    constructor(_tabService) {
        this._tabService = _tabService;
        this.active$ = this._tabService.tab$.pipe(map(tab => tab === this));
        this._tabService.addTab(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._tabService.removeTab(this);
    }
}
CardTabComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-card-tab',
                template: `<ng-content *ngIf="active$ | async"></ng-content>`,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
CardTabComponent.ctorParameters = () => [
    { type: CardTabsService, },
];
CardTabComponent.propDecorators = {
    "content": [{ type: ContentChild, args: [CardTabContentDirective, { read: TemplateRef },] },],
};
function CardTabComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    CardTabComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    CardTabComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    CardTabComponent.propDecorators;
    /** @type {?} */
    CardTabComponent.prototype.active$;
    /** @type {?} */
    CardTabComponent.prototype.content;
    /** @type {?} */
    CardTabComponent.prototype._tabService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC10YWIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2FyZC10YWJzL2NhcmQtdGFiL2NhcmQtdGFiLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQWEsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpHLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFPdkUsTUFBTTs7OztJQUtKLFlBQW9CLFdBQTRCO1FBQTVCLGdCQUFXLEdBQVgsV0FBVyxDQUFpQjt1QkFIakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQztRQUlqRixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUMvQjs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNsQzs7O1lBaEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFLG1EQUFtRDtnQkFDN0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFQUSxlQUFlOzs7d0JBV3JCLFlBQVksU0FBQyx1QkFBdUIsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIE9uRGVzdHJveSwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IENhcmRUYWJzU2VydmljZSB9IGZyb20gJy4uL2NhcmQtdGFicy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ2FyZFRhYkNvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuL2NhcmQtdGFiLWNvbnRlbnQuZGlyZWN0aXZlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndXgtY2FyZC10YWInLFxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQgKm5nSWY9XCJhY3RpdmUkIHwgYXN5bmNcIj48L25nLWNvbnRlbnQ+YCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FyZFRhYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcblxyXG4gIGFjdGl2ZSQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLl90YWJTZXJ2aWNlLnRhYiQucGlwZShtYXAodGFiID0+IHRhYiA9PT0gdGhpcykpO1xyXG4gIEBDb250ZW50Q2hpbGQoQ2FyZFRhYkNvbnRlbnREaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgY29udGVudDogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdGFiU2VydmljZTogQ2FyZFRhYnNTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLl90YWJTZXJ2aWNlLmFkZFRhYih0aGlzKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5fdGFiU2VydmljZS5yZW1vdmVUYWIodGhpcyk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=