/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, HostListener, Optional, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
const /** @type {?} */ KEYS = {
    ENTER: 13,
    ESCAPE: 27
};
export class ToolbarSearchFieldDirective {
    /**
     * @param {?} _elementRef
     * @param {?} _ngModel
     */
    constructor(_elementRef, _ngModel) {
        this._elementRef = _elementRef;
        this._ngModel = _ngModel;
        this.cancel = new EventEmitter();
        this.submit = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get text() {
        // Use ngModel if specified on the host; otherwise read the DOM
        if (this._ngModel) {
            return this._ngModel.value;
        }
        return this._elementRef.nativeElement.value;
    }
    /**
     * @return {?}
     */
    focus() {
        setTimeout(() => {
            this._elementRef.nativeElement.focus();
        });
    }
    /**
     * @return {?}
     */
    blur() {
        setTimeout(() => {
            this._elementRef.nativeElement.blur();
        });
    }
    /**
     * @return {?}
     */
    clear() {
        // Use ngModel if specified on the host; otherwise use the DOM
        if (this._ngModel) {
            this._ngModel.reset();
        }
        else {
            this._elementRef.nativeElement.value = '';
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keydownHandler(event) {
        setTimeout(() => {
            if (event.keyCode === KEYS.ENTER) {
                this.submit.emit(this.text);
            }
            else if (event.keyCode === KEYS.ESCAPE) {
                this._elementRef.nativeElement.blur();
                this.cancel.emit();
            }
        });
    }
}
ToolbarSearchFieldDirective.decorators = [
    { type: Directive, args: [{
                selector: '[uxToolbarSearchField]'
            },] },
];
/** @nocollapse */
ToolbarSearchFieldDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: NgModel, decorators: [{ type: Optional },] },
];
ToolbarSearchFieldDirective.propDecorators = {
    "cancel": [{ type: Output },],
    "submit": [{ type: Output },],
    "keydownHandler": [{ type: HostListener, args: ['keydown', ['$event'],] },],
};
function ToolbarSearchFieldDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ToolbarSearchFieldDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ToolbarSearchFieldDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    ToolbarSearchFieldDirective.propDecorators;
    /** @type {?} */
    ToolbarSearchFieldDirective.prototype.cancel;
    /** @type {?} */
    ToolbarSearchFieldDirective.prototype.submit;
    /** @type {?} */
    ToolbarSearchFieldDirective.prototype._elementRef;
    /** @type {?} */
    ToolbarSearchFieldDirective.prototype._ngModel;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci1zZWFyY2gtZmllbGQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdG9vbGJhci1zZWFyY2gvdG9vbGJhci1zZWFyY2gtZmllbGQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEcsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpDLHVCQUFNLElBQUksR0FBRztJQUNULEtBQUssRUFBRSxFQUFFO0lBQ1QsTUFBTSxFQUFFLEVBQUU7Q0FDYixDQUFDO0FBS0YsTUFBTTs7Ozs7SUFpQkYsWUFDWSxhQUNZO1FBRFosZ0JBQVcsR0FBWCxXQUFXO1FBQ0MsYUFBUSxHQUFSLFFBQVE7c0JBaEJ2QixJQUFJLFlBQVksRUFBUTtzQkFHeEIsSUFBSSxZQUFZLEVBQVU7S0FhVzs7OztJQVg5QyxJQUFJLElBQUk7O1FBRUosRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1NBQzlCO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztLQUMvQzs7OztJQU1ELEtBQUs7UUFDRCxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDMUMsQ0FBQyxDQUFDO0tBQ047Ozs7SUFFRCxJQUFJO1FBQ0EsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3pDLENBQUMsQ0FBQztLQUNOOzs7O0lBRUQsS0FBSzs7UUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3pCO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1NBQzdDO0tBQ0o7Ozs7O0lBR0QsY0FBYyxDQUFDLEtBQW9CO1FBQy9CLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDWixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDL0I7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDdEI7U0FDSixDQUFDLENBQUM7Ozs7WUF0RFYsU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSx3QkFBd0I7YUFDckM7Ozs7WUFWbUIsVUFBVTtZQUNyQixPQUFPLHVCQTZCUCxRQUFROzs7dUJBakJaLE1BQU07dUJBR04sTUFBTTsrQkFxQ04sWUFBWSxTQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIE9wdGlvbmFsLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdNb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmNvbnN0IEtFWVMgPSB7XHJcbiAgICBFTlRFUjogMTMsXHJcbiAgICBFU0NBUEU6IDI3XHJcbn07XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW3V4VG9vbGJhclNlYXJjaEZpZWxkXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRvb2xiYXJTZWFyY2hGaWVsZERpcmVjdGl2ZSB7XHJcblxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBjYW5jZWwgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBzdWJtaXQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgICBnZXQgdGV4dCgpOiBzdHJpbmcge1xyXG4gICAgICAgIC8vIFVzZSBuZ01vZGVsIGlmIHNwZWNpZmllZCBvbiB0aGUgaG9zdDsgb3RoZXJ3aXNlIHJlYWQgdGhlIERPTVxyXG4gICAgICAgIGlmICh0aGlzLl9uZ01vZGVsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9uZ01vZGVsLnZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgICAgIEBPcHRpb25hbCgpIHByaXZhdGUgX25nTW9kZWw6IE5nTW9kZWwpIHsgfVxyXG5cclxuICAgIGZvY3VzKCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBibHVyKCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIC8vIFVzZSBuZ01vZGVsIGlmIHNwZWNpZmllZCBvbiB0aGUgaG9zdDsgb3RoZXJ3aXNlIHVzZSB0aGUgRE9NXHJcbiAgICAgICAgaWYgKHRoaXMuX25nTW9kZWwpIHtcclxuICAgICAgICAgICAgdGhpcy5fbmdNb2RlbC5yZXNldCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcclxuICAgIGtleWRvd25IYW5kbGVyKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLRVlTLkVOVEVSKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdC5lbWl0KHRoaXMudGV4dCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS0VZUy5FU0NBUEUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5ibHVyKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbmNlbC5lbWl0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=