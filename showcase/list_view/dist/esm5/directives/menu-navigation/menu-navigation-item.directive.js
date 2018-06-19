/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';
import { MenuNavigationService } from './menu-navigation.service';
var MenuNavigationItemDirective = /** @class */ (function () {
    function MenuNavigationItemDirective(service, _elementRef) {
        var _this = this;
        this._elementRef = _elementRef;
        this.activated = new EventEmitter();
        this._subscription = service.active$.subscribe(function (next) {
            if (next === _this) {
                _this.setActive();
            }
        });
    }
    /**
     * @return {?}
     */
    MenuNavigationItemDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    MenuNavigationItemDirective.prototype.setActive = /**
     * @return {?}
     */
    function () {
        this._elementRef.nativeElement.focus();
        this.activated.emit();
    };
    MenuNavigationItemDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[uxMenuNavigationItem]'
                },] },
    ];
    /** @nocollapse */
    MenuNavigationItemDirective.ctorParameters = function () { return [
        { type: MenuNavigationService, },
        { type: ElementRef, },
    ]; };
    MenuNavigationItemDirective.propDecorators = {
        "activated": [{ type: Output },],
    };
    return MenuNavigationItemDirective;
}());
export { MenuNavigationItemDirective };
function MenuNavigationItemDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MenuNavigationItemDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MenuNavigationItemDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MenuNavigationItemDirective.propDecorators;
    /** @type {?} */
    MenuNavigationItemDirective.prototype.activated;
    /** @type {?} */
    MenuNavigationItemDirective.prototype._subscription;
    /** @type {?} */
    MenuNavigationItemDirective.prototype._elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1uYXZpZ2F0aW9uLWl0ZW0uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvbWVudS1uYXZpZ2F0aW9uL21lbnUtbmF2aWdhdGlvbi1pdGVtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFhLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7SUFXOUQscUNBQVksT0FBOEIsRUFBVSxXQUF1QjtRQUEzRSxpQkFNQztRQU5tRCxnQkFBVyxHQUFYLFdBQVcsQ0FBWTt5QkFKckQsSUFBSSxZQUFZLEVBQUU7UUFLcEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQUk7WUFDaEQsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLEtBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUNwQjtTQUNKLENBQUMsQ0FBQztLQUNOOzs7O0lBRUQsaURBQVc7OztJQUFYO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUNwQzs7OztJQUVELCtDQUFTOzs7SUFBVDtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDekI7O2dCQXhCSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLHdCQUF3QjtpQkFDckM7Ozs7Z0JBSlEscUJBQXFCO2dCQUZWLFVBQVU7Ozs4QkFTekIsTUFBTTs7c0NBVFg7O1NBT2EsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBNZW51TmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuL21lbnUtbmF2aWdhdGlvbi5zZXJ2aWNlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbdXhNZW51TmF2aWdhdGlvbkl0ZW1dJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTWVudU5hdmlnYXRpb25JdGVtRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuXHJcbiAgICBAT3V0cHV0KCkgYWN0aXZhdGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIHByaXZhdGUgX3N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNlcnZpY2U6IE1lbnVOYXZpZ2F0aW9uU2VydmljZSwgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IHNlcnZpY2UuYWN0aXZlJC5zdWJzY3JpYmUoKG5leHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKG5leHQgPT09IHRoaXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRBY3RpdmUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgICAgdGhpcy5hY3RpdmF0ZWQuZW1pdCgpO1xyXG4gICAgfVxyXG59Il19