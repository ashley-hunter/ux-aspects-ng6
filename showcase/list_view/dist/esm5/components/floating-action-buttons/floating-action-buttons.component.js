/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, ContentChildren, ElementRef, HostListener, Input, QueryList } from '@angular/core';
import { TooltipDirective } from 'ngx-bootstrap/tooltip';
import { filter } from 'rxjs/operators';
import { FloatingActionButtonsService } from './floating-action-buttons.service';
var FloatingActionButtonsComponent = /** @class */ (function () {
    function FloatingActionButtonsComponent(fab, _elementRef) {
        this.fab = fab;
        this._elementRef = _elementRef;
        this.direction = 'top';
    }
    /**
     * @return {?}
     */
    FloatingActionButtonsComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._subscription = this.fab.open$.pipe(filter(function (open) { return open === false; }))
            .subscribe(function () { return _this.tooltips.forEach(function (tooltip) { return tooltip.hide(); }); });
    };
    /**
     * @return {?}
     */
    FloatingActionButtonsComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscription.unsubscribe();
    };
    /**
     * @param {?} target
     * @return {?}
     */
    FloatingActionButtonsComponent.prototype.close = /**
     * @param {?} target
     * @return {?}
     */
    function (target) {
        if (!this._elementRef.nativeElement.contains(target)) {
            this.fab.close();
        }
    };
    FloatingActionButtonsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-floating-action-buttons',
                    template: "<ng-content select=\"[fab-primary]\"></ng-content>\n\n<div class=\"floating-action-button-list\" [@fabAnimation]=\"fab.open$ | async\" [ngClass]=\"direction\" *ngIf=\"fab.open$ | async\">\n    <ng-content></ng-content>\n</div>",
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
    FloatingActionButtonsComponent.ctorParameters = function () { return [
        { type: FloatingActionButtonsService, },
        { type: ElementRef, },
    ]; };
    FloatingActionButtonsComponent.propDecorators = {
        "direction": [{ type: Input },],
        "tooltips": [{ type: ContentChildren, args: [TooltipDirective,] },],
        "close": [{ type: HostListener, args: ['document:click', ['$event.target'],] },],
    };
    return FloatingActionButtonsComponent;
}());
export { FloatingActionButtonsComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvYXRpbmctYWN0aW9uLWJ1dHRvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmxvYXRpbmctYWN0aW9uLWJ1dHRvbnMvZmxvYXRpbmctYWN0aW9uLWJ1dHRvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMxRixPQUFPLEVBQWlCLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFKLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7SUErQjdFLHdDQUFtQixHQUFpQyxFQUFVLFdBQXVCO1FBQWxFLFFBQUcsR0FBSCxHQUFHLENBQThCO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQVk7eUJBTGpDLEtBQUs7S0FLaUM7Ozs7SUFFMUYsd0RBQWU7OztJQUFmO1FBQUEsaUJBR0M7UUFGRyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLEtBQUssS0FBSyxFQUFkLENBQWMsQ0FBQyxDQUFDO2FBQ25FLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQWQsQ0FBYyxDQUFDLEVBQWhELENBQWdELENBQUMsQ0FBQztLQUMxRTs7OztJQUVELG9EQUFXOzs7SUFBWDtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDcEM7Ozs7O0lBS2tELDhDQUFLOzs7O2NBQUMsTUFBbUI7UUFDeEUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDcEI7OztnQkE5Q1IsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLFFBQVEsRUFBRSxvT0FJUDtvQkFDSCxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztvQkFDekMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLFVBQVUsRUFBRTt3QkFDUixPQUFPLENBQUMsY0FBYyxFQUFFOzRCQUNwQixVQUFVLENBQUMsY0FBYyxFQUFFO2dDQUN2QixLQUFLLENBQUMsMkJBQTJCLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Z0NBQ3pELEtBQUssQ0FBQywyQkFBMkIsRUFBRSxPQUFPLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDOzZCQUN2RixDQUFDOzRCQUNGLFVBQVUsQ0FBQyxjQUFjLEVBQUU7Z0NBQ3ZCLEtBQUssQ0FBQywyQkFBMkIsRUFBRSxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7NkJBQ3hGLENBQUM7eUJBQ0wsQ0FBQztxQkFDTDtpQkFDSjs7OztnQkF2QlEsNEJBQTRCO2dCQUp3QyxVQUFVOzs7OEJBOEJsRixLQUFLOzZCQUNMLGVBQWUsU0FBQyxnQkFBZ0I7MEJBa0JoQyxZQUFZLFNBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxlQUFlLENBQUM7O3lDQWxEckQ7O1NBNkJhLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFuaW1hdGUsIHF1ZXJ5LCBzdGFnZ2VyLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uRGVzdHJveSwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRvb2x0aXBEaXJlY3RpdmUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3Rvb2x0aXAnO1xyXG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBGbG9hdGluZ0FjdGlvbkJ1dHRvbnNTZXJ2aWNlIH0gZnJvbSAnLi9mbG9hdGluZy1hY3Rpb24tYnV0dG9ucy5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd1eC1mbG9hdGluZy1hY3Rpb24tYnV0dG9ucycsXHJcbiAgICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50IHNlbGVjdD1cIltmYWItcHJpbWFyeV1cIj48L25nLWNvbnRlbnQ+XHJcblxyXG48ZGl2IGNsYXNzPVwiZmxvYXRpbmctYWN0aW9uLWJ1dHRvbi1saXN0XCIgW0BmYWJBbmltYXRpb25dPVwiZmFiLm9wZW4kIHwgYXN5bmNcIiBbbmdDbGFzc109XCJkaXJlY3Rpb25cIiAqbmdJZj1cImZhYi5vcGVuJCB8IGFzeW5jXCI+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PmAsXHJcbiAgICBwcm92aWRlcnM6IFtGbG9hdGluZ0FjdGlvbkJ1dHRvbnNTZXJ2aWNlXSxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gICAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgICBhbmltYXRpb25zOiBbXHJcbiAgICAgICAgdHJpZ2dlcignZmFiQW5pbWF0aW9uJywgW1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IHRydWUnLCBbXHJcbiAgICAgICAgICAgICAgICBxdWVyeSgndXgtZmxvYXRpbmctYWN0aW9uLWJ1dHRvbicsIHN0eWxlKHsgb3BhY2l0eTogMCB9KSksXHJcbiAgICAgICAgICAgICAgICBxdWVyeSgndXgtZmxvYXRpbmctYWN0aW9uLWJ1dHRvbicsIHN0YWdnZXIoNTAsIGFuaW1hdGUoMjUwLCBzdHlsZSh7IG9wYWNpdHk6IDEgfSkpKSlcclxuICAgICAgICAgICAgXSksXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24oJ3RydWUgPT4gdm9pZCcsIFtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5KCd1eC1mbG9hdGluZy1hY3Rpb24tYnV0dG9uJywgc3RhZ2dlcigtNTAsIGFuaW1hdGUoMjUwLCBzdHlsZSh7IG9wYWNpdHk6IDAgfSkpKSlcclxuICAgICAgICAgICAgXSlcclxuICAgICAgICBdKVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmxvYXRpbmdBY3Rpb25CdXR0b25zQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgICBASW5wdXQoKSBkaXJlY3Rpb246IEZsb2F0aW5nQWN0aW9uQnV0dG9uRGlyZWN0aW9uID0gJ3RvcCc7XHJcbiAgICBAQ29udGVudENoaWxkcmVuKFRvb2x0aXBEaXJlY3RpdmUpIHRvb2x0aXBzOiBRdWVyeUxpc3Q8VG9vbHRpcERpcmVjdGl2ZT47XHJcblxyXG4gICAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGZhYjogRmxvYXRpbmdBY3Rpb25CdXR0b25zU2VydmljZSwgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZikgeyB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMuZmFiLm9wZW4kLnBpcGUoZmlsdGVyKG9wZW4gPT4gb3BlbiA9PT0gZmFsc2UpKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMudG9vbHRpcHMuZm9yRWFjaCh0b29sdGlwID0+IHRvb2x0aXAuaGlkZSgpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICAqIERldGVjdCBhbnkgY2xpY2tzIHRvIHRyaWdnZXIgY2xvc2Ugb2YgdGhlIG1lbnVcclxuICAgICAqL1xyXG4gICAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudC50YXJnZXQnXSkgY2xvc2UodGFyZ2V0OiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKHRhcmdldCkpIHtcclxuICAgICAgICAgICAgdGhpcy5mYWIuY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEZsb2F0aW5nQWN0aW9uQnV0dG9uRGlyZWN0aW9uID0gJ3RvcCcgfCAncmlnaHQnIHwgJ2JvdHRvbScgfCAnbGVmdCc7Il19