/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Input } from '@angular/core';
import { filter } from 'rxjs/operators';
import { TabsetService } from '../tabset.service';
import { TabComponent } from './tab.component';
export class TabFocusDirective {
    /**
     * @param {?} _tabset
     * @param {?} _elementRef
     */
    constructor(_tabset, _elementRef) {
        this._tabset = _tabset;
        this._elementRef = _elementRef;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._subscription = this._tabset.highlighted$.pipe(filter(() => this._tabset.focused$.value === true), filter(() => this._tabset.highlighted$.value === this.uxTabFocus)).subscribe(() => this._elementRef.nativeElement.focus());
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
}
TabFocusDirective.decorators = [
    { type: Directive, args: [{
                selector: '[uxTabFocus]'
            },] },
];
/** @nocollapse */
TabFocusDirective.ctorParameters = () => [
    { type: TabsetService, },
    { type: ElementRef, },
];
TabFocusDirective.propDecorators = {
    "uxTabFocus": [{ type: Input },],
};
function TabFocusDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TabFocusDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TabFocusDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    TabFocusDirective.propDecorators;
    /** @type {?} */
    TabFocusDirective.prototype.uxTabFocus;
    /** @type {?} */
    TabFocusDirective.prototype._subscription;
    /** @type {?} */
    TabFocusDirective.prototype._tabset;
    /** @type {?} */
    TabFocusDirective.prototype._elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWZvY3VzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3RhYnNldC90YWIvdGFiLWZvY3VzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUVoRixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUsvQyxNQUFNOzs7OztJQU1GLFlBQW9CLE9BQXNCLEVBQVUsV0FBdUI7UUFBdkQsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFZO0tBQUs7Ozs7SUFFaEYsUUFBUTtRQUNKLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUMvQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxFQUNsRCxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FDcEUsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztLQUM3RDs7OztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3BDOzs7WUFwQkosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxjQUFjO2FBQzNCOzs7O1lBTFEsYUFBYTtZQUhGLFVBQVU7OzsyQkFXekIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFRhYnNldFNlcnZpY2UgfSBmcm9tICcuLi90YWJzZXQuc2VydmljZSc7XHJcbmltcG9ydCB7IFRhYkNvbXBvbmVudCB9IGZyb20gJy4vdGFiLmNvbXBvbmVudCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW3V4VGFiRm9jdXNdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFiRm9jdXNEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gICAgQElucHV0KCkgdXhUYWJGb2N1czogVGFiQ29tcG9uZW50O1xyXG5cclxuICAgIHByaXZhdGUgX3N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3RhYnNldDogVGFic2V0U2VydmljZSwgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZikgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uID0gdGhpcy5fdGFic2V0LmhpZ2hsaWdodGVkJC5waXBlKFxyXG4gICAgICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5fdGFic2V0LmZvY3VzZWQkLnZhbHVlID09PSB0cnVlKSxcclxuICAgICAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMuX3RhYnNldC5oaWdobGlnaHRlZCQudmFsdWUgPT09IHRoaXMudXhUYWJGb2N1cyksXHJcbiAgICAgICAgKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG59Il19