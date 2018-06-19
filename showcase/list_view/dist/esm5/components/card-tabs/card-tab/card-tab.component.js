/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ContentChild, TemplateRef } from '@angular/core';
import { map } from 'rxjs/operators';
import { CardTabsService } from '../card-tabs.service';
import { CardTabContentDirective } from './card-tab-content.directive';
var CardTabComponent = /** @class */ (function () {
    function CardTabComponent(_tabService) {
        var _this = this;
        this._tabService = _tabService;
        this.active$ = this._tabService.tab$.pipe(map(function (tab) { return tab === _this; }));
        this._tabService.addTab(this);
    }
    /**
     * @return {?}
     */
    CardTabComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._tabService.removeTab(this);
    };
    CardTabComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-card-tab',
                    template: "<ng-content *ngIf=\"active$ | async\"></ng-content>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    CardTabComponent.ctorParameters = function () { return [
        { type: CardTabsService, },
    ]; };
    CardTabComponent.propDecorators = {
        "content": [{ type: ContentChild, args: [CardTabContentDirective, { read: TemplateRef },] },],
    };
    return CardTabComponent;
}());
export { CardTabComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC10YWIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2FyZC10YWJzL2NhcmQtdGFiL2NhcmQtdGFiLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQWEsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpHLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7O0lBWXJFLDBCQUFvQixXQUE0QjtRQUFoRCxpQkFFQztRQUZtQixnQkFBVyxHQUFYLFdBQVcsQ0FBaUI7dUJBSGpCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLEtBQUssS0FBSSxFQUFaLENBQVksQ0FBQyxDQUFDO1FBSWpGLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQy9COzs7O0lBRUQsc0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDbEM7O2dCQWhCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRSxxREFBbUQ7b0JBQzdELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFQUSxlQUFlOzs7NEJBV3JCLFlBQVksU0FBQyx1QkFBdUIsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7OzJCQWQ5RDs7U0FXYSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIE9uRGVzdHJveSwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IENhcmRUYWJzU2VydmljZSB9IGZyb20gJy4uL2NhcmQtdGFicy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ2FyZFRhYkNvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuL2NhcmQtdGFiLWNvbnRlbnQuZGlyZWN0aXZlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndXgtY2FyZC10YWInLFxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQgKm5nSWY9XCJhY3RpdmUkIHwgYXN5bmNcIj48L25nLWNvbnRlbnQ+YCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FyZFRhYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcblxyXG4gIGFjdGl2ZSQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLl90YWJTZXJ2aWNlLnRhYiQucGlwZShtYXAodGFiID0+IHRhYiA9PT0gdGhpcykpO1xyXG4gIEBDb250ZW50Q2hpbGQoQ2FyZFRhYkNvbnRlbnREaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgY29udGVudDogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdGFiU2VydmljZTogQ2FyZFRhYnNTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLl90YWJTZXJ2aWNlLmFkZFRhYih0aGlzKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5fdGFiU2VydmljZS5yZW1vdmVUYWIodGhpcyk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=