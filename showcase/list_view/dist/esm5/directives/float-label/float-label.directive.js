/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, HostBinding, Input, Renderer2 } from '@angular/core';
var FloatLabelDirective = /** @class */ (function () {
    function FloatLabelDirective(_elementRef, _renderer) {
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
    FloatLabelDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._eventHandles.push(this._renderer.listen(this.input, 'focus', this.inputFocus.bind(this)), this._renderer.listen(this.input, 'blur', this.inputBlur.bind(this)), this._renderer.listen(this.input, 'input', this.inputChange.bind(this)));
        // Check initial input value
        this.raised = this.hasText();
        // Ensure that the `for` attribute is set
        if (!this._elementRef.nativeElement.getAttribute('for') && this.input.getAttribute('id')) {
            this._renderer.setAttribute(this._elementRef.nativeElement, 'for', this.input.getAttribute('id'));
        }
    };
    /**
     * @return {?}
     */
    FloatLabelDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (!(this.mode === 'focus' && this._focused)) {
            this.raised = this.hasText();
        }
    };
    /**
     * @return {?}
     */
    FloatLabelDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // Unsubscribe event handles
        this._eventHandles.forEach(function (eventHandle) { return eventHandle(); });
    };
    /**
     * @return {?}
     */
    FloatLabelDirective.prototype.hasText = /**
     * @return {?}
     */
    function () {
        if (this.value === undefined) {
            return !!this.input.value;
        }
        return !!this.value;
    };
    /**
     * @return {?}
     */
    FloatLabelDirective.prototype.inputFocus = /**
     * @return {?}
     */
    function () {
        if (this.mode === 'focus') {
            this._focused = true;
            this.raised = true;
        }
    };
    /**
     * @return {?}
     */
    FloatLabelDirective.prototype.inputBlur = /**
     * @return {?}
     */
    function () {
        if (this.mode === 'focus') {
            this._focused = false;
            this.raised = this.hasText();
        }
    };
    /**
     * @return {?}
     */
    FloatLabelDirective.prototype.inputChange = /**
     * @return {?}
     */
    function () {
        if (this.mode === 'input') {
            this.raised = this.hasText();
        }
    };
    FloatLabelDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[uxFloatLabel]',
                    host: {
                        'class': 'ux-float-label'
                    }
                },] },
    ];
    /** @nocollapse */
    FloatLabelDirective.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer2, },
    ]; };
    FloatLabelDirective.propDecorators = {
        "input": [{ type: Input, args: ['uxFloatLabel',] },],
        "value": [{ type: Input },],
        "mode": [{ type: Input },],
        "raised": [{ type: HostBinding, args: ['class.ux-float-label-raised',] },],
    };
    return FloatLabelDirective;
}());
export { FloatLabelDirective };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvYXQtbGFiZWwuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvZmxvYXQtbGFiZWwvZmxvYXQtbGFiZWwuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFnQyxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7O0lBMEIvRyw2QkFBb0IsV0FBdUIsRUFBVSxTQUFvQjtRQUFyRCxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7b0JBVC9DLE9BQU87c0JBR2YsS0FBSzt3QkFHSixLQUFLOzZCQUNPLEVBQUU7S0FFNkM7Ozs7SUFFOUUsc0NBQVE7OztJQUFSO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ3RFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ3BFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQzFFLENBQUM7O1FBR0YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7O1FBRzdCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2RixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUNyRztLQUNKOzs7O0lBRUQseUNBQVc7OztJQUFYO1FBQ0ksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDaEM7S0FDSjs7OztJQUVELHlDQUFXOzs7SUFBWDs7UUFFSSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFDLFdBQVcsSUFBSyxPQUFBLFdBQVcsRUFBRSxFQUFiLENBQWEsQ0FBQyxDQUFDO0tBQzlEOzs7O0lBRU8scUNBQU87Ozs7UUFDWCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztTQUM3QjtRQUNELE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzs7Ozs7SUFHaEIsd0NBQVU7Ozs7UUFDZCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDdEI7Ozs7O0lBR0csdUNBQVM7Ozs7UUFDYixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDaEM7Ozs7O0lBR0cseUNBQVc7Ozs7UUFDZixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDaEM7OztnQkE3RVIsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLElBQUksRUFBRTt3QkFDRixPQUFPLEVBQUUsZ0JBQWdCO3FCQUM1QjtpQkFDSjs7OztnQkFQbUIsVUFBVTtnQkFBb0QsU0FBUzs7OzBCQVV0RixLQUFLLFNBQUMsY0FBYzswQkFHcEIsS0FBSzt5QkFHTCxLQUFLOzJCQUdMLFdBQVcsU0FBQyw2QkFBNkI7OzhCQW5COUM7O1NBUWEsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1t1eEZsb2F0TGFiZWxdJyxcclxuICAgIGhvc3Q6IHtcclxuICAgICAgICAnY2xhc3MnOiAndXgtZmxvYXQtbGFiZWwnXHJcbiAgICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGbG9hdExhYmVsRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcblxyXG4gICAgQElucHV0KCd1eEZsb2F0TGFiZWwnKVxyXG4gICAgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHZhbHVlOiBhbnk7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIG1vZGU6ICdmb2N1cycgfCAnaW5wdXQnID0gJ2ZvY3VzJztcclxuXHJcbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLnV4LWZsb2F0LWxhYmVsLXJhaXNlZCcpXHJcbiAgICByYWlzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBfZm9jdXNlZCA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfZXZlbnRIYW5kbGVzOiBhbnlbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcy5wdXNoKFxyXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5saXN0ZW4odGhpcy5pbnB1dCwgJ2ZvY3VzJywgdGhpcy5pbnB1dEZvY3VzLmJpbmQodGhpcykpLFxyXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5saXN0ZW4odGhpcy5pbnB1dCwgJ2JsdXInLCB0aGlzLmlucHV0Qmx1ci5iaW5kKHRoaXMpKSxcclxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIubGlzdGVuKHRoaXMuaW5wdXQsICdpbnB1dCcsIHRoaXMuaW5wdXRDaGFuZ2UuYmluZCh0aGlzKSlcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBDaGVjayBpbml0aWFsIGlucHV0IHZhbHVlXHJcbiAgICAgICAgdGhpcy5yYWlzZWQgPSB0aGlzLmhhc1RleHQoKTtcclxuXHJcbiAgICAgICAgLy8gRW5zdXJlIHRoYXQgdGhlIGBmb3JgIGF0dHJpYnV0ZSBpcyBzZXRcclxuICAgICAgICBpZiAoIXRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2ZvcicpICYmIHRoaXMuaW5wdXQuZ2V0QXR0cmlidXRlKCdpZCcpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdmb3InLCB0aGlzLmlucHV0LmdldEF0dHJpYnV0ZSgnaWQnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghKHRoaXMubW9kZSA9PT0gJ2ZvY3VzJyAmJiB0aGlzLl9mb2N1c2VkKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJhaXNlZCA9IHRoaXMuaGFzVGV4dCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBVbnN1YnNjcmliZSBldmVudCBoYW5kbGVzXHJcbiAgICAgICAgdGhpcy5fZXZlbnRIYW5kbGVzLmZvckVhY2goKGV2ZW50SGFuZGxlKSA9PiBldmVudEhhbmRsZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhc1RleHQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gISF0aGlzLmlucHV0LnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gISF0aGlzLnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5wdXRGb2N1cygpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5tb2RlID09PSAnZm9jdXMnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZvY3VzZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnJhaXNlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5wdXRCbHVyKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLm1vZGUgPT09ICdmb2N1cycpIHtcclxuICAgICAgICAgICAgdGhpcy5fZm9jdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnJhaXNlZCA9IHRoaXMuaGFzVGV4dCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlucHV0Q2hhbmdlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLm1vZGUgPT09ICdpbnB1dCcpIHtcclxuICAgICAgICAgICAgdGhpcy5yYWlzZWQgPSB0aGlzLmhhc1RleHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=