/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Directive, HostListener, Output, EventEmitter } from '@angular/core';
export class FlippableCardComponent {
    constructor() {
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
    setFlipped(state) {
        this.flipped = state;
        this.flippedChange.emit(this.flipped);
    }
    /**
     * @return {?}
     */
    toggleFlipped() {
        this.setFlipped(!this.flipped);
    }
    /**
     * @return {?}
     */
    clickTrigger() {
        // add or remove the class depending on whether or not the card has been flipped
        if (this.trigger === 'click') {
            this.toggleFlipped();
        }
    }
    /**
     * @return {?}
     */
    hoverEnter() {
        // if the trigger is hover then begin to flip
        if (this.trigger === 'hover') {
            this.setFlipped(true);
        }
    }
    /**
     * @return {?}
     */
    hoverExit() {
        if (this.trigger === 'hover') {
            this.setFlipped(false);
        }
    }
}
FlippableCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-flippable-card',
                template: `<div class="ux-flipper" [class.ux-flip-card]="flipped" [style.width.px]="width" [style.height.px]="height">

    <div class="ux-flippable-card-front" [style.width.px]="width" [style.height.px]="height">
        <ng-content select="ux-flippable-card-front"></ng-content>
    </div>

    <div class="ux-flippable-card-back" [style.width.px]="width" [style.height.px]="height">
        <ng-content select="ux-flippable-card-back"></ng-content>
    </div>
</div>`,
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
export class FlippableCardFrontDirective {
}
FlippableCardFrontDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ux-flippable-card-front'
            },] },
];
function FlippableCardFrontDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FlippableCardFrontDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FlippableCardFrontDirective.ctorParameters;
}
export class FlippableCardBackDirective {
}
FlippableCardBackDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ux-flippable-card-back'
            },] },
];
function FlippableCardBackDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FlippableCardBackDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FlippableCardBackDirective.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxpcHBhYmxlLWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmxpcHBhYmxlLWNhcmQvZmxpcHBhYmxlLWNhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFvQmhHLE1BQU07O3lCQUU4QyxZQUFZO3VCQUNYLE9BQU87cUJBQy9CLEdBQUc7c0JBQ0YsR0FBRzt1QkFDRCxLQUFLOzZCQUNnQixJQUFJLFlBQVksRUFBVzs7Ozs7O0lBRTVFLFVBQVUsQ0FBQyxLQUFjO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUN6Qzs7OztJQUVELGFBQWE7UUFDVCxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ2xDOzs7O0lBRXNCLFlBQVk7O1FBRy9CLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDeEI7Ozs7O0lBR3VCLFVBQVU7O1FBRWxDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3pCOzs7OztJQUd1QixTQUFTO1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzFCOzs7O1lBdERSLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUU7Ozs7Ozs7OztPQVNQO2dCQUNILElBQUksRUFBRTtvQkFDRixvQkFBb0IsRUFBRSw0QkFBNEI7b0JBQ2xELGtCQUFrQixFQUFFLDBCQUEwQjtpQkFDakQ7Z0JBQ0QsUUFBUSxFQUFFLG1CQUFtQjthQUNoQzs7OzswQkFHSSxLQUFLO3dCQUNMLEtBQUs7c0JBQ0wsS0FBSzt1QkFDTCxLQUFLO3dCQUNMLEtBQUs7OEJBQ0wsTUFBTTs2QkFXTixZQUFZLFNBQUMsT0FBTzsyQkFRcEIsWUFBWSxTQUFDLFlBQVk7MEJBT3pCLFlBQVksU0FBQyxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVzlCLE1BQU07OztZQUhMLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUseUJBQXlCO2FBQ3RDOzs7Ozs7Ozs7OztBQU1ELE1BQU07OztZQUhMLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsd0JBQXdCO2FBQ3JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndXgtZmxpcHBhYmxlLWNhcmQnLFxyXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwidXgtZmxpcHBlclwiIFtjbGFzcy51eC1mbGlwLWNhcmRdPVwiZmxpcHBlZFwiIFtzdHlsZS53aWR0aC5weF09XCJ3aWR0aFwiIFtzdHlsZS5oZWlnaHQucHhdPVwiaGVpZ2h0XCI+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInV4LWZsaXBwYWJsZS1jYXJkLWZyb250XCIgW3N0eWxlLndpZHRoLnB4XT1cIndpZHRoXCIgW3N0eWxlLmhlaWdodC5weF09XCJoZWlnaHRcIj5cclxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJ1eC1mbGlwcGFibGUtY2FyZC1mcm9udFwiPjwvbmctY29udGVudD5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJ1eC1mbGlwcGFibGUtY2FyZC1iYWNrXCIgW3N0eWxlLndpZHRoLnB4XT1cIndpZHRoXCIgW3N0eWxlLmhlaWdodC5weF09XCJoZWlnaHRcIj5cclxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJ1eC1mbGlwcGFibGUtY2FyZC1iYWNrXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PmAsXHJcbiAgICBob3N0OiB7XHJcbiAgICAgICAgJ1tjbGFzcy5ob3Jpem9udGFsXSc6ICdkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiJyxcclxuICAgICAgICAnW2NsYXNzLnZlcnRpY2FsXSc6ICdkaXJlY3Rpb24gPT09IFwidmVydGljYWxcIidcclxuICAgIH0sXHJcbiAgICBleHBvcnRBczogJ3V4LWZsaXBwYWJsZS1jYXJkJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRmxpcHBhYmxlQ2FyZENvbXBvbmVudCB7XHJcblxyXG4gICAgQElucHV0KCkgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnID0gJ2hvcml6b250YWwnO1xyXG4gICAgQElucHV0KCkgdHJpZ2dlcjogJ2NsaWNrJyB8ICdob3ZlcicgfCAnbWFudWFsJyA9ICdob3Zlcic7XHJcbiAgICBASW5wdXQoKSB3aWR0aDogbnVtYmVyID0gMjgwO1xyXG4gICAgQElucHV0KCkgaGVpZ2h0OiBudW1iZXIgPSAyMDA7XHJcbiAgICBASW5wdXQoKSBmbGlwcGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAT3V0cHV0KCkgZmxpcHBlZENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICAgIHNldEZsaXBwZWQoc3RhdGU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmZsaXBwZWQgPSBzdGF0ZTtcclxuICAgICAgICB0aGlzLmZsaXBwZWRDaGFuZ2UuZW1pdCh0aGlzLmZsaXBwZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUZsaXBwZWQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRGbGlwcGVkKCF0aGlzLmZsaXBwZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgY2xpY2tUcmlnZ2VyKCkge1xyXG5cclxuICAgICAgICAvLyBhZGQgb3IgcmVtb3ZlIHRoZSBjbGFzcyBkZXBlbmRpbmcgb24gd2hldGhlciBvciBub3QgdGhlIGNhcmQgaGFzIGJlZW4gZmxpcHBlZFxyXG4gICAgICAgIGlmICh0aGlzLnRyaWdnZXIgPT09ICdjbGljaycpIHtcclxuICAgICAgICAgICAgdGhpcy50b2dnbGVGbGlwcGVkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInKSBob3ZlckVudGVyKCkge1xyXG4gICAgICAgIC8vIGlmIHRoZSB0cmlnZ2VyIGlzIGhvdmVyIHRoZW4gYmVnaW4gdG8gZmxpcFxyXG4gICAgICAgIGlmICh0aGlzLnRyaWdnZXIgPT09ICdob3ZlcicpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRGbGlwcGVkKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJykgaG92ZXJFeGl0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRyaWdnZXIgPT09ICdob3ZlcicpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRGbGlwcGVkKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAndXgtZmxpcHBhYmxlLWNhcmQtZnJvbnQnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGbGlwcGFibGVDYXJkRnJvbnREaXJlY3RpdmUgeyB9XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAndXgtZmxpcHBhYmxlLWNhcmQtYmFjaydcclxufSlcclxuZXhwb3J0IGNsYXNzIEZsaXBwYWJsZUNhcmRCYWNrRGlyZWN0aXZlIHsgfVxyXG4iXX0=