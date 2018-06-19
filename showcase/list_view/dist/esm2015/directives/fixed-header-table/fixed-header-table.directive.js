/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
export class FixedHeaderTableDirective {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this.tablePaging = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // add class to the table
        this._renderer.addClass(this._elementRef.nativeElement, 'ux-fixed-header-table');
        // locate the important elements
        this._tableHead = this._elementRef.nativeElement.querySelector('thead');
        this._tableBody = this._elementRef.nativeElement.querySelector('tbody');
        // bind to scroll events on the table body
        this._renderer.listen(this._tableBody, 'scroll', this.onScroll.bind(this));
        // resize the table header to account for scrollbar
        this.setLayout();
        // trigger the loading of the first page
        this.tablePaging.emit();
    }
    /**
     * Get the table element
     * Primarily used by column width directive
     * @return {?}
     */
    getTable() {
        return this._elementRef.nativeElement;
    }
    /**
     * Handle scroll events
     * @return {?}
     */
    onScroll() {
        // determine if we are scrolled to the bottom and if so load the next page
        if (this._tableBody.scrollTop === (this._tableBody.scrollHeight - this._tableBody.offsetHeight)) {
            this.tablePaging.emit();
        }
    }
    /**
     * Update the size of the table header to account for the scrollbar.
     * This is important to keep the columns aligned
     * @return {?}
     */
    setLayout() {
        // calculate the size of the scrollbar
        const /** @type {?} */ scrollbar = this._tableBody.offsetWidth - this._tableBody.clientWidth;
        // add padding to the header to account for this
        this._renderer.setStyle(this._tableHead, 'padding-right', scrollbar + 'px');
        // set the desired height of the table body
        this._renderer.setStyle(this._tableBody, 'height', typeof this.tableHeight === 'number' ? `${this.tableHeight}px` : this.tableHeight);
    }
}
FixedHeaderTableDirective.decorators = [
    { type: Directive, args: [{
                selector: '[uxFixedHeaderTable]'
            },] },
];
/** @nocollapse */
FixedHeaderTableDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
FixedHeaderTableDirective.propDecorators = {
    "tableHeight": [{ type: Input },],
    "tablePaging": [{ type: Output },],
};
function FixedHeaderTableDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FixedHeaderTableDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FixedHeaderTableDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    FixedHeaderTableDirective.propDecorators;
    /** @type {?} */
    FixedHeaderTableDirective.prototype.tableHeight;
    /** @type {?} */
    FixedHeaderTableDirective.prototype.tablePaging;
    /** @type {?} */
    FixedHeaderTableDirective.prototype._tableHead;
    /** @type {?} */
    FixedHeaderTableDirective.prototype._tableBody;
    /** @type {?} */
    FixedHeaderTableDirective.prototype._elementRef;
    /** @type {?} */
    FixedHeaderTableDirective.prototype._renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZml4ZWQtaGVhZGVyLXRhYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL2ZpeGVkLWhlYWRlci10YWJsZS9maXhlZC1oZWFkZXItdGFibGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLdEcsTUFBTTs7Ozs7SUFRSixZQUFvQixXQUF1QixFQUFVLFNBQW9CO1FBQXJELGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBVzsyQkFMM0IsSUFBSSxZQUFZLEVBQVU7S0FLTTs7OztJQUU5RSxRQUFROztRQUdOLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLHVCQUF1QixDQUFDLENBQUM7O1FBR2pGLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztRQUd4RSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOztRQUczRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7O1FBR2pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDekI7Ozs7OztJQU1ELFFBQVE7UUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7S0FDdkM7Ozs7O0lBS08sUUFBUTs7UUFHZCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDekI7Ozs7Ozs7SUFPSyxTQUFTOztRQUdmLHVCQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQzs7UUFHNUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxlQUFlLEVBQUUsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDOztRQUc1RSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxPQUFPLElBQUksQ0FBQyxXQUFXLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDOzs7O1lBaEV6SSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjthQUNqQzs7OztZQUptQixVQUFVO1lBQXVDLFNBQVM7Ozs0QkFPM0UsS0FBSzs0QkFDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1t1eEZpeGVkSGVhZGVyVGFibGVdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRml4ZWRIZWFkZXJUYWJsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIHRhYmxlSGVpZ2h0OiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgQE91dHB1dCgpIHRhYmxlUGFnaW5nOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG5cclxuICBwcml2YXRlIF90YWJsZUhlYWQ6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgX3RhYmxlQm9keTogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICAvLyBhZGQgY2xhc3MgdG8gdGhlIHRhYmxlXHJcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd1eC1maXhlZC1oZWFkZXItdGFibGUnKTtcclxuXHJcbiAgICAvLyBsb2NhdGUgdGhlIGltcG9ydGFudCBlbGVtZW50c1xyXG4gICAgdGhpcy5fdGFibGVIZWFkID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RoZWFkJyk7XHJcbiAgICB0aGlzLl90YWJsZUJvZHkgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcigndGJvZHknKTtcclxuXHJcbiAgICAvLyBiaW5kIHRvIHNjcm9sbCBldmVudHMgb24gdGhlIHRhYmxlIGJvZHlcclxuICAgIHRoaXMuX3JlbmRlcmVyLmxpc3Rlbih0aGlzLl90YWJsZUJvZHksICdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsLmJpbmQodGhpcykpO1xyXG5cclxuICAgIC8vIHJlc2l6ZSB0aGUgdGFibGUgaGVhZGVyIHRvIGFjY291bnQgZm9yIHNjcm9sbGJhclxyXG4gICAgdGhpcy5zZXRMYXlvdXQoKTtcclxuXHJcbiAgICAvLyB0cmlnZ2VyIHRoZSBsb2FkaW5nIG9mIHRoZSBmaXJzdCBwYWdlXHJcbiAgICB0aGlzLnRhYmxlUGFnaW5nLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgdGFibGUgZWxlbWVudFxyXG4gICAqIFByaW1hcmlseSB1c2VkIGJ5IGNvbHVtbiB3aWR0aCBkaXJlY3RpdmVcclxuICAgKi9cclxuICBnZXRUYWJsZSgpOiBIVE1MVGFibGVFbGVtZW50IHtcclxuICAgIHJldHVybiB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBIYW5kbGUgc2Nyb2xsIGV2ZW50c1xyXG4gICAqL1xyXG4gIHByaXZhdGUgb25TY3JvbGwoKTogdm9pZCB7XHJcblxyXG4gICAgLy8gZGV0ZXJtaW5lIGlmIHdlIGFyZSBzY3JvbGxlZCB0byB0aGUgYm90dG9tIGFuZCBpZiBzbyBsb2FkIHRoZSBuZXh0IHBhZ2VcclxuICAgIGlmICh0aGlzLl90YWJsZUJvZHkuc2Nyb2xsVG9wID09PSAodGhpcy5fdGFibGVCb2R5LnNjcm9sbEhlaWdodCAtIHRoaXMuX3RhYmxlQm9keS5vZmZzZXRIZWlnaHQpKSB7XHJcbiAgICAgIHRoaXMudGFibGVQYWdpbmcuZW1pdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlIHRoZSBzaXplIG9mIHRoZSB0YWJsZSBoZWFkZXIgdG8gYWNjb3VudCBmb3IgdGhlIHNjcm9sbGJhci5cclxuICAgKiBUaGlzIGlzIGltcG9ydGFudCB0byBrZWVwIHRoZSBjb2x1bW5zIGFsaWduZWRcclxuICAgKi9cclxuICBwcml2YXRlIHNldExheW91dCgpOiB2b2lkIHtcclxuXHJcbiAgICAvLyBjYWxjdWxhdGUgdGhlIHNpemUgb2YgdGhlIHNjcm9sbGJhclxyXG4gICAgY29uc3Qgc2Nyb2xsYmFyID0gdGhpcy5fdGFibGVCb2R5Lm9mZnNldFdpZHRoIC0gdGhpcy5fdGFibGVCb2R5LmNsaWVudFdpZHRoO1xyXG5cclxuICAgIC8vIGFkZCBwYWRkaW5nIHRvIHRoZSBoZWFkZXIgdG8gYWNjb3VudCBmb3IgdGhpc1xyXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fdGFibGVIZWFkLCAncGFkZGluZy1yaWdodCcsIHNjcm9sbGJhciArICdweCcpO1xyXG5cclxuICAgIC8vIHNldCB0aGUgZGVzaXJlZCBoZWlnaHQgb2YgdGhlIHRhYmxlIGJvZHlcclxuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX3RhYmxlQm9keSwgJ2hlaWdodCcsIHR5cGVvZiB0aGlzLnRhYmxlSGVpZ2h0ID09PSAnbnVtYmVyJyA/IGAke3RoaXMudGFibGVIZWlnaHR9cHhgIDogdGhpcy50YWJsZUhlaWdodCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=