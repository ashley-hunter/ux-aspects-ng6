/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter, HostBinding, HostListener, ElementRef } from '@angular/core';
import { SidePanelService } from './side-panel.service';
var SidePanelComponent = /** @class */ (function () {
    function SidePanelComponent(service, _elementRef) {
        this.service = service;
        this._elementRef = _elementRef;
        this.inline = false;
        this.attachTo = 'window';
        this.width = '50%';
        this.top = '0';
        this.modal = false;
        this.animate = false;
        this.closeOnExternalClick = false;
        this.openChange = new EventEmitter();
    }
    Object.defineProperty(SidePanelComponent.prototype, "open", {
        get: /**
         * @return {?}
         */
        function () {
            return this.service.open$.value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.service.open$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidePanelComponent.prototype, "position", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.inline) {
                return 'static';
            }
            if (this.attachTo === 'container') {
                return 'absolute';
            }
            return 'fixed';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidePanelComponent.prototype, "cssWidth", {
        get: /**
         * @return {?}
         */
        function () {
            if (typeof this.width === 'number') {
                return this.width === 0 ? '0' : this.width + 'px';
            }
            return this.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidePanelComponent.prototype, "cssTop", {
        get: /**
         * @return {?}
         */
        function () {
            if (typeof this.top === 'number') {
                return this.top === 0 ? '0' : this.top + 'px';
            }
            return this.top;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidePanelComponent.prototype, "componentWidth", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.inline) {
                return this.open ? this.cssWidth : '0';
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SidePanelComponent.prototype, "hostWidth", {
        get: /**
         * @return {?}
         */
        function () {
            return this.inline ? '100%' : this.cssWidth;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SidePanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._subscription = this.service.open$.subscribe(function (next) {
            _this.openChange.emit(next);
        });
    };
    /**
     * @return {?}
     */
    SidePanelComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    SidePanelComponent.prototype.openPanel = /**
     * @return {?}
     */
    function () {
        this.service.open();
    };
    /**
     * @return {?}
     */
    SidePanelComponent.prototype.closePanel = /**
     * @return {?}
     */
    function () {
        this.service.close();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SidePanelComponent.prototype.clickHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.open || !this.closeOnExternalClick) {
            return;
        }
        var /** @type {?} */ target = /** @type {?} */ (event.target);
        if (!this._elementRef.nativeElement.contains(target) ||
            (target && target.classList.contains('modal-backdrop'))) {
            this.closePanel();
        }
    };
    SidePanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-side-panel',
                    exportAs: 'ux-side-panel',
                    template: "<div *ngIf=\"modal && open\" class=\"modal-backdrop\"\n    [style.position]=\"position\"\n    [style.top]=\"cssTop\"></div>\n\n<div class=\"ux-side-panel-host\"\n    [class.modal-panel]=\"modal\"\n    [style.position]=\"position\"\n    [style.width]=\"hostWidth\"\n    [style.top]=\"cssTop\">\n    <ng-content></ng-content>\n</div>\n",
                    providers: [SidePanelService],
                    host: {
                        'class': 'ux-side-panel'
                    }
                },] },
    ];
    /** @nocollapse */
    SidePanelComponent.ctorParameters = function () { return [
        { type: SidePanelService, },
        { type: ElementRef, },
    ]; };
    SidePanelComponent.propDecorators = {
        "open": [{ type: Input }, { type: HostBinding, args: ['class.open',] },],
        "inline": [{ type: Input }, { type: HostBinding, args: ['class.inline',] },],
        "attachTo": [{ type: Input },],
        "width": [{ type: Input },],
        "top": [{ type: Input },],
        "modal": [{ type: Input }, { type: HostBinding, args: ['attr.aria-modal',] },],
        "animate": [{ type: Input }, { type: HostBinding, args: ['class.animate',] },],
        "closeOnExternalClick": [{ type: Input },],
        "openChange": [{ type: Output },],
        "componentWidth": [{ type: HostBinding, args: ['style.width',] },],
        "closePanel": [{ type: HostListener, args: ['document:keyup.escape',] },],
        "clickHandler": [{ type: HostListener, args: ['document:click', ['$event'],] },],
    };
    return SidePanelComponent;
}());
export { SidePanelComponent };
function SidePanelComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SidePanelComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SidePanelComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    SidePanelComponent.propDecorators;
    /** @type {?} */
    SidePanelComponent.prototype.inline;
    /** @type {?} */
    SidePanelComponent.prototype.attachTo;
    /** @type {?} */
    SidePanelComponent.prototype.width;
    /** @type {?} */
    SidePanelComponent.prototype.top;
    /** @type {?} */
    SidePanelComponent.prototype.modal;
    /** @type {?} */
    SidePanelComponent.prototype.animate;
    /** @type {?} */
    SidePanelComponent.prototype.closeOnExternalClick;
    /** @type {?} */
    SidePanelComponent.prototype.openChange;
    /** @type {?} */
    SidePanelComponent.prototype._subscription;
    /** @type {?} */
    SidePanelComponent.prototype.service;
    /** @type {?} */
    SidePanelComponent.prototype._elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9zaWRlLXBhbmVsL3NpZGUtcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFhLFdBQVcsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpJLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztJQW1HcEQsNEJBQ2MsT0FBeUIsRUFDM0I7UUFERSxZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUMzQixnQkFBVyxHQUFYLFdBQVc7c0JBakVkLEtBQUs7d0JBR3FCLFFBQVE7cUJBR2xCLEtBQUs7bUJBR1AsR0FBRztxQkFJbEIsS0FBSzt1QkFJSCxLQUFLO29DQUdRLEtBQUs7MEJBR2YsSUFBSSxZQUFZLEVBQVc7S0EyQ25DOzBCQTVFRCxvQ0FBSTs7Ozs7WUFDSixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDOzs7Ozs7UUFHcEMsVUFBUyxLQUFjO1lBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNsQzs7OztJQTZCRCxzQkFBSSx3Q0FBUTs7OztRQUFaO1lBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsTUFBTSxDQUFDLFFBQVEsQ0FBQzthQUNuQjtZQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDaEMsTUFBTSxDQUFDLFVBQVUsQ0FBQzthQUNyQjtZQUNELE1BQU0sQ0FBQyxPQUFPLENBQUM7U0FDbEI7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WTsyQkFTeEIsS0FBSyxZQUNMLFdBQVcsU0FBQyxjQUFjOzZCQUcxQixLQUFLOzBCQUdMLEtBQUs7d0JBR0wsS0FBSzswQkFHTCxLQUFLLFlBQ0wsV0FBVyxTQUFDLGlCQUFpQjs0QkFHN0IsS0FBSyxZQUNMLFdBQVcsU0FBQyxlQUFlO3lDQUczQixLQUFLOytCQUdMLE1BQU07bUNBMkJOLFdBQVcsU0FBQyxhQUFhOytCQWlDekIsWUFBWSxTQUFDLHVCQUF1QjtpQ0FLcEMsWUFBWSxTQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDOzs2QkE3SDlDOztTQXdCYSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3ksIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFNpZGVQYW5lbFNlcnZpY2UgfSBmcm9tICcuL3NpZGUtcGFuZWwuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndXgtc2lkZS1wYW5lbCcsXHJcbiAgICBleHBvcnRBczogJ3V4LXNpZGUtcGFuZWwnLFxyXG4gICAgdGVtcGxhdGU6IGA8ZGl2ICpuZ0lmPVwibW9kYWwgJiYgb3BlblwiIGNsYXNzPVwibW9kYWwtYmFja2Ryb3BcIlxyXG4gICAgW3N0eWxlLnBvc2l0aW9uXT1cInBvc2l0aW9uXCJcclxuICAgIFtzdHlsZS50b3BdPVwiY3NzVG9wXCI+PC9kaXY+XHJcblxyXG48ZGl2IGNsYXNzPVwidXgtc2lkZS1wYW5lbC1ob3N0XCJcclxuICAgIFtjbGFzcy5tb2RhbC1wYW5lbF09XCJtb2RhbFwiXHJcbiAgICBbc3R5bGUucG9zaXRpb25dPVwicG9zaXRpb25cIlxyXG4gICAgW3N0eWxlLndpZHRoXT1cImhvc3RXaWR0aFwiXHJcbiAgICBbc3R5bGUudG9wXT1cImNzc1RvcFwiPlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5cclxuYCxcclxuICAgIHByb3ZpZGVyczogW1NpZGVQYW5lbFNlcnZpY2VdLFxyXG4gICAgaG9zdDoge1xyXG4gICAgICAgICdjbGFzcyc6ICd1eC1zaWRlLXBhbmVsJ1xyXG4gICAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lkZVBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLm9wZW4nKVxyXG4gICAgZ2V0IG9wZW4oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZS5vcGVuJC52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgb3Blbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuc2VydmljZS5vcGVuJC5uZXh0KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pbmxpbmUnKVxyXG4gICAgaW5saW5lID0gZmFsc2U7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGF0dGFjaFRvOiAnd2luZG93JyB8ICdjb250YWluZXInID0gJ3dpbmRvdyc7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHdpZHRoOiBzdHJpbmcgfCBudW1iZXIgPSAnNTAlJztcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgdG9wOiBzdHJpbmcgfCBudW1iZXIgPSAnMCc7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLW1vZGFsJylcclxuICAgIG1vZGFsID0gZmFsc2U7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuYW5pbWF0ZScpXHJcbiAgICBhbmltYXRlID0gZmFsc2U7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGNsb3NlT25FeHRlcm5hbENsaWNrID0gZmFsc2U7XHJcblxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBvcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICAgIGdldCBwb3NpdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5pbmxpbmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdzdGF0aWMnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5hdHRhY2hUbyA9PT0gJ2NvbnRhaW5lcicpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAnZml4ZWQnO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjc3NXaWR0aCgpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy53aWR0aCA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMud2lkdGggPT09IDAgPyAnMCcgOiB0aGlzLndpZHRoICsgJ3B4JztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNzc1RvcCgpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy50b3AgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvcCA9PT0gMCA/ICcwJyA6IHRoaXMudG9wICsgJ3B4JztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9wO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0QmluZGluZygnc3R5bGUud2lkdGgnKVxyXG4gICAgZ2V0IGNvbXBvbmVudFdpZHRoKCk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5saW5lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wZW4gPyB0aGlzLmNzc1dpZHRoIDogJzAnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaG9zdFdpZHRoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlubGluZSA/ICcxMDAlJyA6IHRoaXMuY3NzV2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJvdGVjdGVkIHNlcnZpY2U6IFNpZGVQYW5lbFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZlxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb24gPSB0aGlzLnNlcnZpY2Uub3BlbiQuc3Vic2NyaWJlKChuZXh0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub3BlbkNoYW5nZS5lbWl0KG5leHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5QYW5lbCgpIHtcclxuICAgICAgICB0aGlzLnNlcnZpY2Uub3BlbigpO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmtleXVwLmVzY2FwZScpXHJcbiAgICBjbG9zZVBhbmVsKCkge1xyXG4gICAgICAgIHRoaXMuc2VydmljZS5jbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQnXSlcclxuICAgIGNsaWNrSGFuZGxlcihldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgICAgIGlmICghdGhpcy5vcGVuIHx8ICF0aGlzLmNsb3NlT25FeHRlcm5hbENsaWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnModGFyZ2V0KSB8fFxyXG4gICAgICAgICAgICAodGFyZ2V0ICYmIHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsLWJhY2tkcm9wJykpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VQYW5lbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==