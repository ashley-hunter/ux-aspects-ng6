/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Directive, HostListener, Output, EventEmitter } from '@angular/core';
var FlippableCardComponent = /** @class */ (function () {
    function FlippableCardComponent() {
        this.direction = 'horizontal';
        this.trigger = 'hover';
        this.width = 280;
        this.height = 200;
        this.flipped = false;
        this.flippedChange = new EventEmitter();
    }
    /**
     * @param {?} state
     * @return {?}
     */
    FlippableCardComponent.prototype.setFlipped = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this.flipped = state;
        this.flippedChange.emit(this.flipped);
    };
    /**
     * @return {?}
     */
    FlippableCardComponent.prototype.toggleFlipped = /**
     * @return {?}
     */
    function () {
        this.setFlipped(!this.flipped);
    };
    /**
     * @return {?}
     */
    FlippableCardComponent.prototype.clickTrigger = /**
     * @return {?}
     */
    function () {
        // add or remove the class depending on whether or not the card has been flipped
        if (this.trigger === 'click') {
            this.toggleFlipped();
        }
    };
    /**
     * @return {?}
     */
    FlippableCardComponent.prototype.hoverEnter = /**
     * @return {?}
     */
    function () {
        // if the trigger is hover then begin to flip
        if (this.trigger === 'hover') {
            this.setFlipped(true);
        }
    };
    /**
     * @return {?}
     */
    FlippableCardComponent.prototype.hoverExit = /**
     * @return {?}
     */
    function () {
        if (this.trigger === 'hover') {
            this.setFlipped(false);
        }
    };
    FlippableCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-flippable-card',
                    template: "<div class=\"ux-flipper\" [class.ux-flip-card]=\"flipped\" [style.width.px]=\"width\" [style.height.px]=\"height\">\n\n    <div class=\"ux-flippable-card-front\" [style.width.px]=\"width\" [style.height.px]=\"height\">\n        <ng-content select=\"ux-flippable-card-front\"></ng-content>\n    </div>\n\n    <div class=\"ux-flippable-card-back\" [style.width.px]=\"width\" [style.height.px]=\"height\">\n        <ng-content select=\"ux-flippable-card-back\"></ng-content>\n    </div>\n</div>",
                    host: {
                        '[class.horizontal]': 'direction === "horizontal"',
                        '[class.vertical]': 'direction === "vertical"'
                    },
                    exportAs: 'ux-flippable-card'
                },] },
    ];
    /** @nocollapse */
    FlippableCardComponent.propDecorators = {
        "direction": [{ type: Input },],
        "trigger": [{ type: Input },],
        "width": [{ type: Input },],
        "height": [{ type: Input },],
        "flipped": [{ type: Input },],
        "flippedChange": [{ type: Output },],
        "clickTrigger": [{ type: HostListener, args: ['click',] },],
        "hoverEnter": [{ type: HostListener, args: ['mouseenter',] },],
        "hoverExit": [{ type: HostListener, args: ['mouseleave',] },],
    };
    return FlippableCardComponent;
}());
export { FlippableCardComponent };
function FlippableCardComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FlippableCardComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FlippableCardComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    FlippableCardComponent.propDecorators;
    /** @type {?} */
    FlippableCardComponent.prototype.direction;
    /** @type {?} */
    FlippableCardComponent.prototype.trigger;
    /** @type {?} */
    FlippableCardComponent.prototype.width;
    /** @type {?} */
    FlippableCardComponent.prototype.height;
    /** @type {?} */
    FlippableCardComponent.prototype.flipped;
    /** @type {?} */
    FlippableCardComponent.prototype.flippedChange;
}
var FlippableCardFrontDirective = /** @class */ (function () {
    function FlippableCardFrontDirective() {
    }
    FlippableCardFrontDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'ux-flippable-card-front'
                },] },
    ];
    return FlippableCardFrontDirective;
}());
export { FlippableCardFrontDirective };
function FlippableCardFrontDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FlippableCardFrontDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FlippableCardFrontDirective.ctorParameters;
}
var FlippableCardBackDirective = /** @class */ (function () {
    function FlippableCardBackDirective() {
    }
    FlippableCardBackDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'ux-flippable-card-back'
                },] },
    ];
    return FlippableCardBackDirective;
}());
export { FlippableCardBackDirective };
function FlippableCardBackDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FlippableCardBackDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FlippableCardBackDirective.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxpcHBhYmxlLWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmxpcHBhYmxlLWNhcmQvZmxpcHBhYmxlLWNhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozt5QkFzQjVDLFlBQVk7dUJBQ1gsT0FBTztxQkFDL0IsR0FBRztzQkFDRixHQUFHO3VCQUNELEtBQUs7NkJBQ2dCLElBQUksWUFBWSxFQUFXOzs7Ozs7SUFFNUUsMkNBQVU7Ozs7SUFBVixVQUFXLEtBQWM7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ3pDOzs7O0lBRUQsOENBQWE7OztJQUFiO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUNsQzs7OztJQUVzQiw2Q0FBWTs7Ozs7UUFHL0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN4Qjs7Ozs7SUFHdUIsMkNBQVU7Ozs7O1FBRWxDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3pCOzs7OztJQUd1QiwwQ0FBUzs7OztRQUNqQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMxQjs7O2dCQXREUixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLDZlQVNQO29CQUNILElBQUksRUFBRTt3QkFDRixvQkFBb0IsRUFBRSw0QkFBNEI7d0JBQ2xELGtCQUFrQixFQUFFLDBCQUEwQjtxQkFDakQ7b0JBQ0QsUUFBUSxFQUFFLG1CQUFtQjtpQkFDaEM7Ozs7OEJBR0ksS0FBSzs0QkFDTCxLQUFLOzBCQUNMLEtBQUs7MkJBQ0wsS0FBSzs0QkFDTCxLQUFLO2tDQUNMLE1BQU07aUNBV04sWUFBWSxTQUFDLE9BQU87K0JBUXBCLFlBQVksU0FBQyxZQUFZOzhCQU96QixZQUFZLFNBQUMsWUFBWTs7aUNBckQ5Qjs7U0FvQmEsc0JBQXNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQXlDbEMsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSx5QkFBeUI7aUJBQ3RDOztzQ0EvREQ7O1NBZ0VhLDJCQUEyQjs7Ozs7Ozs7Ozs7Ozs7Z0JBRXZDLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsd0JBQXdCO2lCQUNyQzs7cUNBcEVEOztTQXFFYSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd1eC1mbGlwcGFibGUtY2FyZCcsXHJcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJ1eC1mbGlwcGVyXCIgW2NsYXNzLnV4LWZsaXAtY2FyZF09XCJmbGlwcGVkXCIgW3N0eWxlLndpZHRoLnB4XT1cIndpZHRoXCIgW3N0eWxlLmhlaWdodC5weF09XCJoZWlnaHRcIj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwidXgtZmxpcHBhYmxlLWNhcmQtZnJvbnRcIiBbc3R5bGUud2lkdGgucHhdPVwid2lkdGhcIiBbc3R5bGUuaGVpZ2h0LnB4XT1cImhlaWdodFwiPlxyXG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cInV4LWZsaXBwYWJsZS1jYXJkLWZyb250XCI+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInV4LWZsaXBwYWJsZS1jYXJkLWJhY2tcIiBbc3R5bGUud2lkdGgucHhdPVwid2lkdGhcIiBbc3R5bGUuaGVpZ2h0LnB4XT1cImhlaWdodFwiPlxyXG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cInV4LWZsaXBwYWJsZS1jYXJkLWJhY2tcIj48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+YCxcclxuICAgIGhvc3Q6IHtcclxuICAgICAgICAnW2NsYXNzLmhvcml6b250YWxdJzogJ2RpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCInLFxyXG4gICAgICAgICdbY2xhc3MudmVydGljYWxdJzogJ2RpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiJ1xyXG4gICAgfSxcclxuICAgIGV4cG9ydEFzOiAndXgtZmxpcHBhYmxlLWNhcmQnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGbGlwcGFibGVDYXJkQ29tcG9uZW50IHtcclxuXHJcbiAgICBASW5wdXQoKSBkaXJlY3Rpb246ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCcgPSAnaG9yaXpvbnRhbCc7XHJcbiAgICBASW5wdXQoKSB0cmlnZ2VyOiAnY2xpY2snIHwgJ2hvdmVyJyB8ICdtYW51YWwnID0gJ2hvdmVyJztcclxuICAgIEBJbnB1dCgpIHdpZHRoOiBudW1iZXIgPSAyODA7XHJcbiAgICBASW5wdXQoKSBoZWlnaHQ6IG51bWJlciA9IDIwMDtcclxuICAgIEBJbnB1dCgpIGZsaXBwZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBPdXRwdXQoKSBmbGlwcGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gICAgc2V0RmxpcHBlZChzdGF0ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuZmxpcHBlZCA9IHN0YXRlO1xyXG4gICAgICAgIHRoaXMuZmxpcHBlZENoYW5nZS5lbWl0KHRoaXMuZmxpcHBlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlRmxpcHBlZCgpIHtcclxuICAgICAgICB0aGlzLnNldEZsaXBwZWQoIXRoaXMuZmxpcHBlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignY2xpY2snKSBjbGlja1RyaWdnZXIoKSB7XHJcblxyXG4gICAgICAgIC8vIGFkZCBvciByZW1vdmUgdGhlIGNsYXNzIGRlcGVuZGluZyBvbiB3aGV0aGVyIG9yIG5vdCB0aGUgY2FyZCBoYXMgYmVlbiBmbGlwcGVkXHJcbiAgICAgICAgaWYgKHRoaXMudHJpZ2dlciA9PT0gJ2NsaWNrJykge1xyXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUZsaXBwZWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicpIGhvdmVyRW50ZXIoKSB7XHJcbiAgICAgICAgLy8gaWYgdGhlIHRyaWdnZXIgaXMgaG92ZXIgdGhlbiBiZWdpbiB0byBmbGlwXHJcbiAgICAgICAgaWYgKHRoaXMudHJpZ2dlciA9PT0gJ2hvdmVyJykge1xyXG4gICAgICAgICAgICB0aGlzLnNldEZsaXBwZWQodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKSBob3ZlckV4aXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudHJpZ2dlciA9PT0gJ2hvdmVyJykge1xyXG4gICAgICAgICAgICB0aGlzLnNldEZsaXBwZWQoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICd1eC1mbGlwcGFibGUtY2FyZC1mcm9udCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEZsaXBwYWJsZUNhcmRGcm9udERpcmVjdGl2ZSB7IH1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICd1eC1mbGlwcGFibGUtY2FyZC1iYWNrJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRmxpcHBhYmxlQ2FyZEJhY2tEaXJlY3RpdmUgeyB9XHJcbiJdfQ==