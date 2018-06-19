/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, HostBinding, Input, Renderer2 } from '@angular/core';
export class FloatLabelDirective {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this.mode = 'focus';
        this.raised = false;
        this._focused = false;
        this._eventHandles = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._eventHandles.push(this._renderer.listen(this.input, 'focus', this.inputFocus.bind(this)), this._renderer.listen(this.input, 'blur', this.inputBlur.bind(this)), this._renderer.listen(this.input, 'input', this.inputChange.bind(this)));
        // Check initial input value
        this.raised = this.hasText();
        // Ensure that the `for` attribute is set
        if (!this._elementRef.nativeElement.getAttribute('for') && this.input.getAttribute('id')) {
            this._renderer.setAttribute(this._elementRef.nativeElement, 'for', this.input.getAttribute('id'));
        }
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (!(this.mode === 'focus' && this._focused)) {
            this.raised = this.hasText();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // Unsubscribe event handles
        this._eventHandles.forEach((eventHandle) => eventHandle());
    }
    /**
     * @return {?}
     */
    hasText() {
        if (this.value === undefined) {
            return !!this.input.value;
        }
        return !!this.value;
    }
    /**
     * @return {?}
     */
    inputFocus() {
        if (this.mode === 'focus') {
            this._focused = true;
            this.raised = true;
        }
    }
    /**
     * @return {?}
     */
    inputBlur() {
        if (this.mode === 'focus') {
            this._focused = false;
            this.raised = this.hasText();
        }
    }
    /**
     * @return {?}
     */
    inputChange() {
        if (this.mode === 'input') {
            this.raised = this.hasText();
        }
    }
}
FloatLabelDirective.decorators = [
    { type: Directive, args: [{
                selector: '[uxFloatLabel]',
                host: {
                    'class': 'ux-float-label'
                }
            },] },
];
/** @nocollapse */
FloatLabelDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
FloatLabelDirective.propDecorators = {
    "input": [{ type: Input, args: ['uxFloatLabel',] },],
    "value": [{ type: Input },],
    "mode": [{ type: Input },],
    "raised": [{ type: HostBinding, args: ['class.ux-float-label-raised',] },],
};
function FloatLabelDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FloatLabelDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FloatLabelDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    FloatLabelDirective.propDecorators;
    /** @type {?} */
    FloatLabelDirective.prototype.input;
    /** @type {?} */
    FloatLabelDirective.prototype.value;
    /** @type {?} */
    FloatLabelDirective.prototype.mode;
    /** @type {?} */
    FloatLabelDirective.prototype.raised;
    /** @type {?} */
    FloatLabelDirective.prototype._focused;
    /** @type {?} */
    FloatLabelDirective.prototype._eventHandles;
    /** @type {?} */
    FloatLabelDirective.prototype._elementRef;
    /** @type {?} */
    FloatLabelDirective.prototype._renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvYXQtbGFiZWwuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvZmxvYXQtbGFiZWwvZmxvYXQtbGFiZWwuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFnQyxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRbkgsTUFBTTs7Ozs7SUFrQkYsWUFBb0IsV0FBdUIsRUFBVSxTQUFvQjtRQUFyRCxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7b0JBVC9DLE9BQU87c0JBR2YsS0FBSzt3QkFHSixLQUFLOzZCQUNPLEVBQUU7S0FFNkM7Ozs7SUFFOUUsUUFBUTtRQUNKLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUN0RSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUNwRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUMxRSxDQUFDOztRQUdGLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDOztRQUc3QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDckc7S0FDSjs7OztJQUVELFdBQVc7UUFDUCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoQztLQUNKOzs7O0lBRUQsV0FBVzs7UUFFUCxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztLQUM5RDs7OztJQUVPLE9BQU87UUFDWCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztTQUM3QjtRQUNELE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzs7Ozs7SUFHaEIsVUFBVTtRQUNkLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUN0Qjs7Ozs7SUFHRyxTQUFTO1FBQ2IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2hDOzs7OztJQUdHLFdBQVc7UUFDZixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDaEM7Ozs7WUE3RVIsU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLElBQUksRUFBRTtvQkFDRixPQUFPLEVBQUUsZ0JBQWdCO2lCQUM1QjthQUNKOzs7O1lBUG1CLFVBQVU7WUFBb0QsU0FBUzs7O3NCQVV0RixLQUFLLFNBQUMsY0FBYztzQkFHcEIsS0FBSztxQkFHTCxLQUFLO3VCQUdMLFdBQVcsU0FBQyw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW3V4RmxvYXRMYWJlbF0nLFxyXG4gICAgaG9zdDoge1xyXG4gICAgICAgICdjbGFzcyc6ICd1eC1mbG9hdC1sYWJlbCdcclxuICAgIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZsb2F0TGFiZWxEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuXHJcbiAgICBASW5wdXQoJ3V4RmxvYXRMYWJlbCcpXHJcbiAgICBpbnB1dDogSFRNTElucHV0RWxlbWVudDtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgdmFsdWU6IGFueTtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgbW9kZTogJ2ZvY3VzJyB8ICdpbnB1dCcgPSAnZm9jdXMnO1xyXG5cclxuICAgIEBIb3N0QmluZGluZygnY2xhc3MudXgtZmxvYXQtbGFiZWwtcmFpc2VkJylcclxuICAgIHJhaXNlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIF9mb2N1c2VkID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9ldmVudEhhbmRsZXM6IGFueVtdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMikgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRIYW5kbGVzLnB1c2goXHJcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmxpc3Rlbih0aGlzLmlucHV0LCAnZm9jdXMnLCB0aGlzLmlucHV0Rm9jdXMuYmluZCh0aGlzKSksXHJcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmxpc3Rlbih0aGlzLmlucHV0LCAnYmx1cicsIHRoaXMuaW5wdXRCbHVyLmJpbmQodGhpcykpLFxyXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5saXN0ZW4odGhpcy5pbnB1dCwgJ2lucHV0JywgdGhpcy5pbnB1dENoYW5nZS5iaW5kKHRoaXMpKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGluaXRpYWwgaW5wdXQgdmFsdWVcclxuICAgICAgICB0aGlzLnJhaXNlZCA9IHRoaXMuaGFzVGV4dCgpO1xyXG5cclxuICAgICAgICAvLyBFbnN1cmUgdGhhdCB0aGUgYGZvcmAgYXR0cmlidXRlIGlzIHNldFxyXG4gICAgICAgIGlmICghdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEF0dHJpYnV0ZSgnZm9yJykgJiYgdGhpcy5pbnB1dC5nZXRBdHRyaWJ1dGUoJ2lkJykpIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2ZvcicsIHRoaXMuaW5wdXQuZ2V0QXR0cmlidXRlKCdpZCcpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCEodGhpcy5tb2RlID09PSAnZm9jdXMnICYmIHRoaXMuX2ZvY3VzZWQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmFpc2VkID0gdGhpcy5oYXNUZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIFVuc3Vic2NyaWJlIGV2ZW50IGhhbmRsZXNcclxuICAgICAgICB0aGlzLl9ldmVudEhhbmRsZXMuZm9yRWFjaCgoZXZlbnRIYW5kbGUpID0+IGV2ZW50SGFuZGxlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFzVGV4dCgpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy52YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAhIXRoaXMuaW5wdXQudmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAhIXRoaXMudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbnB1dEZvY3VzKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLm1vZGUgPT09ICdmb2N1cycpIHtcclxuICAgICAgICAgICAgdGhpcy5fZm9jdXNlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMucmFpc2VkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbnB1dEJsdXIoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubW9kZSA9PT0gJ2ZvY3VzJykge1xyXG4gICAgICAgICAgICB0aGlzLl9mb2N1c2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMucmFpc2VkID0gdGhpcy5oYXNUZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5wdXRDaGFuZ2UoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubW9kZSA9PT0gJ2lucHV0Jykge1xyXG4gICAgICAgICAgICB0aGlzLnJhaXNlZCA9IHRoaXMuaGFzVGV4dCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==