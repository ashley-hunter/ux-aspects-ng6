/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter, HostBinding, HostListener, ElementRef } from '@angular/core';
import { SidePanelService } from './side-panel.service';
export class SidePanelComponent {
    /**
     * @param {?} service
     * @param {?} _elementRef
     */
    constructor(service, _elementRef) {
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
    /**
     * @return {?}
     */
    get open() {
        return this.service.open$.value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set open(value) {
        this.service.open$.next(value);
    }
    /**
     * @return {?}
     */
    get position() {
        if (this.inline) {
            return 'static';
        }
        if (this.attachTo === 'container') {
            return 'absolute';
        }
        return 'fixed';
    }
    /**
     * @return {?}
     */
    get cssWidth() {
        if (typeof this.width === 'number') {
            return this.width === 0 ? '0' : this.width + 'px';
        }
        return this.width;
    }
    /**
     * @return {?}
     */
    get cssTop() {
        if (typeof this.top === 'number') {
            return this.top === 0 ? '0' : this.top + 'px';
        }
        return this.top;
    }
    /**
     * @return {?}
     */
    get componentWidth() {
        if (this.inline) {
            return this.open ? this.cssWidth : '0';
        }
        return null;
    }
    /**
     * @return {?}
     */
    get hostWidth() {
        return this.inline ? '100%' : this.cssWidth;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._subscription = this.service.open$.subscribe((next) => {
            this.openChange.emit(next);
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
    openPanel() {
        this.service.open();
    }
    /**
     * @return {?}
     */
    closePanel() {
        this.service.close();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    clickHandler(event) {
        if (!this.open || !this.closeOnExternalClick) {
            return;
        }
        const /** @type {?} */ target = /** @type {?} */ (event.target);
        if (!this._elementRef.nativeElement.contains(target) ||
            (target && target.classList.contains('modal-backdrop'))) {
            this.closePanel();
        }
    }
}
SidePanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-side-panel',
                exportAs: 'ux-side-panel',
                template: `<div *ngIf="modal && open" class="modal-backdrop"
    [style.position]="position"
    [style.top]="cssTop"></div>

<div class="ux-side-panel-host"
    [class.modal-panel]="modal"
    [style.position]="position"
    [style.width]="hostWidth"
    [style.top]="cssTop">
    <ng-content></ng-content>
</div>
`,
                providers: [SidePanelService],
                host: {
                    'class': 'ux-side-panel'
                }
            },] },
];
/** @nocollapse */
SidePanelComponent.ctorParameters = () => [
    { type: SidePanelService, },
    { type: ElementRef, },
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9zaWRlLXBhbmVsL3NpZGUtcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFhLFdBQVcsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpJLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBc0J4RCxNQUFNOzs7OztJQTZFRixZQUNjLE9BQXlCLEVBQzNCO1FBREUsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFDM0IsZ0JBQVcsR0FBWCxXQUFXO3NCQWpFZCxLQUFLO3dCQUdxQixRQUFRO3FCQUdsQixLQUFLO21CQUdQLEdBQUc7cUJBSWxCLEtBQUs7dUJBSUgsS0FBSztvQ0FHUSxLQUFLOzBCQUdmLElBQUksWUFBWSxFQUFXO0tBMkNuQzs7OztRQTVFRCxJQUFJO1FBQ0osTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQzs7Ozs7O0lBR3BDLElBQUksSUFBSSxDQUFDLEtBQWM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2xDOzs7O0lBNkJELElBQUksUUFBUTtRQUNSLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2QsTUFBTSxDQUFDLFFBQVEsQ0FBQztTQUNuQjtRQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNoQyxNQUFNLENBQUMsVUFBVSxDQUFDO1NBQ3JCO1FBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FB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SyxZQUNMLFdBQVcsU0FBQyxpQkFBaUI7d0JBRzdCLEtBQUssWUFDTCxXQUFXLFNBQUMsZUFBZTtxQ0FHM0IsS0FBSzsyQkFHTCxNQUFNOytCQTJCTixXQUFXLFNBQUMsYUFBYTsyQkFpQ3pCLFlBQVksU0FBQyx1QkFBdUI7NkJBS3BDLFlBQVksU0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgU2lkZVBhbmVsU2VydmljZSB9IGZyb20gJy4vc2lkZS1wYW5lbC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd1eC1zaWRlLXBhbmVsJyxcclxuICAgIGV4cG9ydEFzOiAndXgtc2lkZS1wYW5lbCcsXHJcbiAgICB0ZW1wbGF0ZTogYDxkaXYgKm5nSWY9XCJtb2RhbCAmJiBvcGVuXCIgY2xhc3M9XCJtb2RhbC1iYWNrZHJvcFwiXHJcbiAgICBbc3R5bGUucG9zaXRpb25dPVwicG9zaXRpb25cIlxyXG4gICAgW3N0eWxlLnRvcF09XCJjc3NUb3BcIj48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJ1eC1zaWRlLXBhbmVsLWhvc3RcIlxyXG4gICAgW2NsYXNzLm1vZGFsLXBhbmVsXT1cIm1vZGFsXCJcclxuICAgIFtzdHlsZS5wb3NpdGlvbl09XCJwb3NpdGlvblwiXHJcbiAgICBbc3R5bGUud2lkdGhdPVwiaG9zdFdpZHRoXCJcclxuICAgIFtzdHlsZS50b3BdPVwiY3NzVG9wXCI+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PlxyXG5gLFxyXG4gICAgcHJvdmlkZXJzOiBbU2lkZVBhbmVsU2VydmljZV0sXHJcbiAgICBob3N0OiB7XHJcbiAgICAgICAgJ2NsYXNzJzogJ3V4LXNpZGUtcGFuZWwnXHJcbiAgICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWRlUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIEBIb3N0QmluZGluZygnY2xhc3Mub3BlbicpXHJcbiAgICBnZXQgb3BlbigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLm9wZW4kLnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBvcGVuKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlLm9wZW4kLm5leHQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlubGluZScpXHJcbiAgICBpbmxpbmUgPSBmYWxzZTtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgYXR0YWNoVG86ICd3aW5kb3cnIHwgJ2NvbnRhaW5lcicgPSAnd2luZG93JztcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgd2lkdGg6IHN0cmluZyB8IG51bWJlciA9ICc1MCUnO1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICB0b3A6IHN0cmluZyB8IG51bWJlciA9ICcwJztcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtbW9kYWwnKVxyXG4gICAgbW9kYWwgPSBmYWxzZTtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbmltYXRlJylcclxuICAgIGFuaW1hdGUgPSBmYWxzZTtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgY2xvc2VPbkV4dGVybmFsQ2xpY2sgPSBmYWxzZTtcclxuXHJcbiAgICBAT3V0cHV0KClcclxuICAgIG9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gICAgZ2V0IHBvc2l0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlubGluZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ3N0YXRpYyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmF0dGFjaFRvID09PSAnY29udGFpbmVyJykge1xyXG4gICAgICAgICAgICByZXR1cm4gJ2Fic29sdXRlJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICdmaXhlZCc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNzc1dpZHRoKCk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLndpZHRoID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy53aWR0aCA9PT0gMCA/ICcwJyA6IHRoaXMud2lkdGggKyAncHgnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy53aWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY3NzVG9wKCk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnRvcCA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9wID09PSAwID8gJzAnIDogdGhpcy50b3AgKyAncHgnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy50b3A7XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS53aWR0aCcpXHJcbiAgICBnZXQgY29tcG9uZW50V2lkdGgoKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodGhpcy5pbmxpbmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3BlbiA/IHRoaXMuY3NzV2lkdGggOiAnMCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBob3N0V2lkdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5saW5lID8gJzEwMCUnIDogdGhpcy5jc3NXaWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9zdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcm90ZWN0ZWQgc2VydmljZTogU2lkZVBhbmVsU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmXHJcbiAgICApIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMuc2VydmljZS5vcGVuJC5zdWJzY3JpYmUoKG5leHQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vcGVuQ2hhbmdlLmVtaXQobmV4dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlblBhbmVsKCkge1xyXG4gICAgICAgIHRoaXMuc2VydmljZS5vcGVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5dXAuZXNjYXBlJylcclxuICAgIGNsb3NlUGFuZWwoKSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlLmNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCddKVxyXG4gICAgY2xpY2tIYW5kbGVyKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm9wZW4gfHwgIXRoaXMuY2xvc2VPbkV4dGVybmFsQ2xpY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyh0YXJnZXQpIHx8XHJcbiAgICAgICAgICAgICh0YXJnZXQgJiYgdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwtYmFja2Ryb3AnKSkpIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZVBhbmVsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19