/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';
import { MenuNavigationService } from './menu-navigation.service';
export class MenuNavigationItemDirective {
    /**
     * @param {?} service
     * @param {?} _elementRef
     */
    constructor(service, _elementRef) {
        this._elementRef = _elementRef;
        this.activated = new EventEmitter();
        this._subscription = service.active$.subscribe((next) => {
            if (next === this) {
                this.setActive();
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
    /**
     * @return {?}
     */
    setActive() {
        this._elementRef.nativeElement.focus();
        this.activated.emit();
    }
}
MenuNavigationItemDirective.decorators = [
    { type: Directive, args: [{
                selector: '[uxMenuNavigationItem]'
            },] },
];
/** @nocollapse */
MenuNavigationItemDirective.ctorParameters = () => [
    { type: MenuNavigationService, },
    { type: ElementRef, },
];
MenuNavigationItemDirective.propDecorators = {
    "activated": [{ type: Output },],
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1uYXZpZ2F0aW9uLWl0ZW0uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvbWVudS1uYXZpZ2F0aW9uL21lbnUtbmF2aWdhdGlvbi1pdGVtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFhLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUtsRSxNQUFNOzs7OztJQU1GLFlBQVksT0FBOEIsRUFBVSxXQUF1QjtRQUF2QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTt5QkFKckQsSUFBSSxZQUFZLEVBQUU7UUFLcEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ3BELEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDcEI7U0FDSixDQUFDLENBQUM7S0FDTjs7OztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3BDOzs7O0lBRUQsU0FBUztRQUNMLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDekI7OztZQXhCSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLHdCQUF3QjthQUNyQzs7OztZQUpRLHFCQUFxQjtZQUZWLFVBQVU7OzswQkFTekIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3ksIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTWVudU5hdmlnYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9tZW51LW5hdmlnYXRpb24uc2VydmljZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW3V4TWVudU5hdmlnYXRpb25JdGVtXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE1lbnVOYXZpZ2F0aW9uSXRlbURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcblxyXG4gICAgQE91dHB1dCgpIGFjdGl2YXRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBwcml2YXRlIF9zdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzZXJ2aWNlOiBNZW51TmF2aWdhdGlvblNlcnZpY2UsIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcclxuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSBzZXJ2aWNlLmFjdGl2ZSQuc3Vic2NyaWJlKChuZXh0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChuZXh0ID09PSB0aGlzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGl2ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QWN0aXZlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICAgIHRoaXMuYWN0aXZhdGVkLmVtaXQoKTtcclxuICAgIH1cclxufSJdfQ==