/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, ContentChildren, ElementRef, HostListener, Input, QueryList } from '@angular/core';
import { TooltipDirective } from 'ngx-bootstrap/tooltip';
import { filter } from 'rxjs/operators';
import { FloatingActionButtonsService } from './floating-action-buttons.service';
export class FloatingActionButtonsComponent {
    /**
     * @param {?} fab
     * @param {?} _elementRef
     */
    constructor(fab, _elementRef) {
        this.fab = fab;
        this._elementRef = _elementRef;
        this.direction = 'top';
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._subscription = this.fab.open$.pipe(filter(open => open === false))
            .subscribe(() => this.tooltips.forEach(tooltip => tooltip.hide()));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
    /**
     * @param {?} target
     * @return {?}
     */
    close(target) {
        if (!this._elementRef.nativeElement.contains(target)) {
            this.fab.close();
        }
    }
}
FloatingActionButtonsComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-floating-action-buttons',
                template: `<ng-content select="[fab-primary]"></ng-content>

<div class="floating-action-button-list" [@fabAnimation]="fab.open$ | async" [ngClass]="direction" *ngIf="fab.open$ | async">
    <ng-content></ng-content>
</div>`,
                providers: [FloatingActionButtonsService],
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                animations: [
                    trigger('fabAnimation', [
                        transition('void => true', [
                            query('ux-floating-action-button', style({ opacity: 0 })),
                            query('ux-floating-action-button', stagger(50, animate(250, style({ opacity: 1 }))))
                        ]),
                        transition('true => void', [
                            query('ux-floating-action-button', stagger(-50, animate(250, style({ opacity: 0 }))))
                        ])
                    ])
                ]
            },] },
];
/** @nocollapse */
FloatingActionButtonsComponent.ctorParameters = () => [
    { type: FloatingActionButtonsService, },
    { type: ElementRef, },
];
FloatingActionButtonsComponent.propDecorators = {
    "direction": [{ type: Input },],
    "tooltips": [{ type: ContentChildren, args: [TooltipDirective,] },],
    "close": [{ type: HostListener, args: ['document:click', ['$event.target'],] },],
};
function FloatingActionButtonsComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FloatingActionButtonsComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FloatingActionButtonsComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    FloatingActionButtonsComponent.propDecorators;
    /** @type {?} */
    FloatingActionButtonsComponent.prototype.direction;
    /** @type {?} */
    FloatingActionButtonsComponent.prototype.tooltips;
    /** @type {?} */
    FloatingActionButtonsComponent.prototype._subscription;
    /** @type {?} */
    FloatingActionButtonsComponent.prototype.fab;
    /** @type {?} */
    FloatingActionButtonsComponent.prototype._elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvYXRpbmctYWN0aW9uLWJ1dHRvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmxvYXRpbmctYWN0aW9uLWJ1dHRvbnMvZmxvYXRpbmctYWN0aW9uLWJ1dHRvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMxRixPQUFPLEVBQWlCLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFKLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQXdCakYsTUFBTTs7Ozs7SUFPRixZQUFtQixHQUFpQyxFQUFVLFdBQXVCO1FBQWxFLFFBQUcsR0FBSCxHQUFHLENBQThCO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQVk7eUJBTGpDLEtBQUs7S0FLaUM7Ozs7SUFFMUYsZUFBZTtRQUNYLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQzthQUNuRSxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQzFFOzs7O0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDcEM7Ozs7O0lBS2tELEtBQUssQ0FBQyxNQUFtQjtRQUN4RSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNwQjs7OztZQTlDUixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsUUFBUSxFQUFFOzs7O09BSVA7Z0JBQ0gsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7Z0JBQ3pDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixVQUFVLEVBQUU7b0JBQ1IsT0FBTyxDQUFDLGNBQWMsRUFBRTt3QkFDcEIsVUFBVSxDQUFDLGNBQWMsRUFBRTs0QkFDdkIsS0FBSyxDQUFDLDJCQUEyQixFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDOzRCQUN6RCxLQUFLLENBQUMsMkJBQTJCLEVBQUUsT0FBTyxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzt5QkFDdkYsQ0FBQzt3QkFDRixVQUFVLENBQUMsY0FBYyxFQUFFOzRCQUN2QixLQUFLLENBQUMsMkJBQTJCLEVBQUUsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUN4RixDQUFDO3FCQUNMLENBQUM7aUJBQ0w7YUFDSjs7OztZQXZCUSw0QkFBNEI7WUFKd0MsVUFBVTs7OzBCQThCbEYsS0FBSzt5QkFDTCxlQUFlLFNBQUMsZ0JBQWdCO3NCQWtCaEMsWUFBWSxTQUFDLGdCQUFnQixFQUFFLENBQUMsZUFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYW5pbWF0ZSwgcXVlcnksIHN0YWdnZXIsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25EZXN0cm95LCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVG9vbHRpcERpcmVjdGl2ZSB9IGZyb20gJ25neC1ib290c3RyYXAvdG9vbHRpcCc7XHJcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEZsb2F0aW5nQWN0aW9uQnV0dG9uc1NlcnZpY2UgfSBmcm9tICcuL2Zsb2F0aW5nLWFjdGlvbi1idXR0b25zLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3V4LWZsb2F0aW5nLWFjdGlvbi1idXR0b25zJyxcclxuICAgIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW2ZhYi1wcmltYXJ5XVwiPjwvbmctY29udGVudD5cclxuXHJcbjxkaXYgY2xhc3M9XCJmbG9hdGluZy1hY3Rpb24tYnV0dG9uLWxpc3RcIiBbQGZhYkFuaW1hdGlvbl09XCJmYWIub3BlbiQgfCBhc3luY1wiIFtuZ0NsYXNzXT1cImRpcmVjdGlvblwiICpuZ0lmPVwiZmFiLm9wZW4kIHwgYXN5bmNcIj5cclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuPC9kaXY+YCxcclxuICAgIHByb3ZpZGVyczogW0Zsb2F0aW5nQWN0aW9uQnV0dG9uc1NlcnZpY2VdLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICAgIGFuaW1hdGlvbnM6IFtcclxuICAgICAgICB0cmlnZ2VyKCdmYWJBbmltYXRpb24nLCBbXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gdHJ1ZScsIFtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5KCd1eC1mbG9hdGluZy1hY3Rpb24tYnV0dG9uJywgc3R5bGUoeyBvcGFjaXR5OiAwIH0pKSxcclxuICAgICAgICAgICAgICAgIHF1ZXJ5KCd1eC1mbG9hdGluZy1hY3Rpb24tYnV0dG9uJywgc3RhZ2dlcig1MCwgYW5pbWF0ZSgyNTAsIHN0eWxlKHsgb3BhY2l0eTogMSB9KSkpKVxyXG4gICAgICAgICAgICBdKSxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbigndHJ1ZSA9PiB2b2lkJywgW1xyXG4gICAgICAgICAgICAgICAgcXVlcnkoJ3V4LWZsb2F0aW5nLWFjdGlvbi1idXR0b24nLCBzdGFnZ2VyKC01MCwgYW5pbWF0ZSgyNTAsIHN0eWxlKHsgb3BhY2l0eTogMCB9KSkpKVxyXG4gICAgICAgICAgICBdKVxyXG4gICAgICAgIF0pXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGbG9hdGluZ0FjdGlvbkJ1dHRvbnNDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAgIEBJbnB1dCgpIGRpcmVjdGlvbjogRmxvYXRpbmdBY3Rpb25CdXR0b25EaXJlY3Rpb24gPSAndG9wJztcclxuICAgIEBDb250ZW50Q2hpbGRyZW4oVG9vbHRpcERpcmVjdGl2ZSkgdG9vbHRpcHM6IFF1ZXJ5TGlzdDxUb29sdGlwRGlyZWN0aXZlPjtcclxuXHJcbiAgICBwcml2YXRlIF9zdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZmFiOiBGbG9hdGluZ0FjdGlvbkJ1dHRvbnNTZXJ2aWNlLCBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7IH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uID0gdGhpcy5mYWIub3BlbiQucGlwZShmaWx0ZXIob3BlbiA9PiBvcGVuID09PSBmYWxzZSkpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy50b29sdGlwcy5mb3JFYWNoKHRvb2x0aXAgPT4gdG9vbHRpcC5oaWRlKCkpKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgICogRGV0ZWN0IGFueSBjbGlja3MgdG8gdHJpZ2dlciBjbG9zZSBvZiB0aGUgbWVudVxyXG4gICAgICovXHJcbiAgICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50LnRhcmdldCddKSBjbG9zZSh0YXJnZXQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnModGFyZ2V0KSkge1xyXG4gICAgICAgICAgICB0aGlzLmZhYi5jbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgRmxvYXRpbmdBY3Rpb25CdXR0b25EaXJlY3Rpb24gPSAndG9wJyB8ICdyaWdodCcgfCAnYm90dG9tJyB8ICdsZWZ0JzsiXX0=