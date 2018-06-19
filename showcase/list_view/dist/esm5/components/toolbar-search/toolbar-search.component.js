/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { Component, ContentChild, ElementRef, EventEmitter, HostBinding, HostListener, Inject, Input, Output } from '@angular/core';
import { ColorService } from '../../services/color/color.service';
import { ToolbarSearchButtonDirective } from './toolbar-search-button.directive';
import { ToolbarSearchFieldDirective } from './toolbar-search-field.directive';
var ToolbarSearchComponent = /** @class */ (function () {
    function ToolbarSearchComponent(_elementRef, _colorService, _document) {
        this._elementRef = _elementRef;
        this._colorService = _colorService;
        this._document = _document;
        this.direction = 'right';
        this.inverse = false;
        this.expandedChange = new EventEmitter();
        this.search = new EventEmitter();
        this._expanded = false;
        this.position = 'relative';
        this.backgroundColor = 'transparent';
    }
    Object.defineProperty(ToolbarSearchComponent.prototype, "expanded", {
        get: /**
         * @return {?}
         */
        function () {
            return this._expanded;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._expanded = value;
            this.expandedChange.emit(value);
            if (value) {
                // Set focus on the input when expanded
                this.field.focus();
            }
            else {
                // Clear text when contracted
                this.field.clear();
                // Remove focus (works around an IE issue where the caret remains visible)
                this.field.blur();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToolbarSearchComponent.prototype, "background", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.backgroundColor = this._colorService.resolve(value) || 'transparent';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToolbarSearchComponent.prototype, "expandedAnimation", {
        get: /**
         * @return {?}
         */
        function () {
            return {
                value: this.expanded ? 'expanded' : 'collapsed',
                params: {
                    initialWidth: this.button.width + 'px'
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ToolbarSearchComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Subscribe to the submit event on the input field, triggering the search event
        this.field.submit.subscribe(function (text) { return _this.search.emit(text); });
        // Subscribe to cancel events coming from the input field
        this.field.cancel.subscribe(function () { return _this.expanded = false; });
        // Subscribe to the button click event
        this.button.clicked.subscribe(function () {
            if (_this.expanded && _this.field.text) {
                _this.search.emit(_this.field.text);
            }
            else {
                _this.expanded = !_this.expanded;
            }
        });
        // Create placeholder element to avoid changing layout when switching to position: absolute
        this.createPlaceholder();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ToolbarSearchComponent.prototype.animationStart = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.toState === 'expanded') {
            this.position = 'absolute';
            this.enablePlaceholder(true);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ToolbarSearchComponent.prototype.animationDone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.toState === 'collapsed') {
            this.position = 'relative';
            this.enablePlaceholder(false);
        }
    };
    /**
     * @return {?}
     */
    ToolbarSearchComponent.prototype.createPlaceholder = /**
     * @return {?}
     */
    function () {
        // Get width and height of the component
        var /** @type {?} */ styles = getComputedStyle(this._elementRef.nativeElement);
        // Create invisible div with the same dimensions
        this._placeholder = this._document.createElement('div');
        this._placeholder.style.display = 'none';
        this._placeholder.style.width = this.button.width + 'px';
        this._placeholder.style.height = styles.height;
        this._placeholder.style.visibility = 'hidden';
        // Add as a sibling
        this._elementRef.nativeElement.parentNode.insertBefore(this._placeholder, this._elementRef.nativeElement);
    };
    /**
     * @param {?} enabled
     * @return {?}
     */
    ToolbarSearchComponent.prototype.enablePlaceholder = /**
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        this._placeholder.style.display = (enabled ? 'inline-block' : 'none');
    };
    ToolbarSearchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-toolbar-search',
                    template: "<ng-content></ng-content>",
                    animations: [
                        trigger('expanded', [
                            state('collapsed', style({
                                width: '{{initialWidth}}'
                            }), {
                                params: { initialWidth: '30px' }
                            }),
                            state('expanded', style({
                                width: '100%'
                            })),
                            transition('collapsed <=> expanded', [animate('0.3s ease-out')])
                        ])
                    ]
                },] },
    ];
    /** @nocollapse */
    ToolbarSearchComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: ColorService, },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] },] },
    ]; };
    ToolbarSearchComponent.propDecorators = {
        "expanded": [{ type: HostBinding, args: ['class.expanded',] }, { type: Input },],
        "direction": [{ type: Input }, { type: HostBinding, args: ['class',] },],
        "inverse": [{ type: Input }, { type: HostBinding, args: ['class.inverse',] },],
        "background": [{ type: Input },],
        "expandedChange": [{ type: Output },],
        "search": [{ type: Output },],
        "expandedAnimation": [{ type: HostBinding, args: ['@expanded',] },],
        "position": [{ type: HostBinding, args: ['style.position',] },],
        "backgroundColor": [{ type: HostBinding, args: ['style.background-color',] },],
        "field": [{ type: ContentChild, args: [ToolbarSearchFieldDirective,] },],
        "button": [{ type: ContentChild, args: [ToolbarSearchButtonDirective,] },],
        "animationStart": [{ type: HostListener, args: ['@expanded.start', ['$event'],] },],
        "animationDone": [{ type: HostListener, args: ['@expanded.done', ['$event'],] },],
    };
    return ToolbarSearchComponent;
}());
export { ToolbarSearchComponent };
function ToolbarSearchComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ToolbarSearchComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ToolbarSearchComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    ToolbarSearchComponent.propDecorators;
    /** @type {?} */
    ToolbarSearchComponent.prototype.direction;
    /** @type {?} */
    ToolbarSearchComponent.prototype.inverse;
    /** @type {?} */
    ToolbarSearchComponent.prototype.expandedChange;
    /** @type {?} */
    ToolbarSearchComponent.prototype.search;
    /** @type {?} */
    ToolbarSearchComponent.prototype._expanded;
    /** @type {?} */
    ToolbarSearchComponent.prototype.position;
    /** @type {?} */
    ToolbarSearchComponent.prototype.backgroundColor;
    /** @type {?} */
    ToolbarSearchComponent.prototype.field;
    /** @type {?} */
    ToolbarSearchComponent.prototype.button;
    /** @type {?} */
    ToolbarSearchComponent.prototype._placeholder;
    /** @type {?} */
    ToolbarSearchComponent.prototype._elementRef;
    /** @type {?} */
    ToolbarSearchComponent.prototype._colorService;
    /** @type {?} */
    ToolbarSearchComponent.prototype._document;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci1zZWFyY2guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdG9vbGJhci1zZWFyY2gvdG9vbGJhci1zZWFyY2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFrQixLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFvQixTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0SixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbEUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDakYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7O0lBMEYzRSxnQ0FDWSxhQUNBLGVBQ2tCO1FBRmxCLGdCQUFXLEdBQVgsV0FBVztRQUNYLGtCQUFhLEdBQWIsYUFBYTtRQUNLLGNBQVMsR0FBVCxTQUFTO3lCQXZDVCxPQUFPO3VCQUkzQixLQUFLOzhCQVFFLElBQUksWUFBWSxFQUFXO3NCQUduQyxJQUFJLFlBQVksRUFBVTt5QkFFTixLQUFLO3dCQVlRLFVBQVU7K0JBQ0ssYUFBYTtLQVVyRTswQkEvREcsNENBQVE7Ozs7O1lBQ1IsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7Ozs7OztRQUcxQixVQUFhLEtBQWM7WUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFFdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJ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QUssWUFDTCxXQUFXLFNBQUMsZUFBZTsrQkFHM0IsS0FBSzttQ0FLTCxNQUFNOzJCQUdOLE1BQU07c0NBS04sV0FBVyxTQUFDLFdBQVc7NkJBVXZCLFdBQVcsU0FBQyxnQkFBZ0I7b0NBQzVCLFdBQVcsU0FBQyx3QkFBd0I7MEJBQ3BDLFlBQVksU0FBQywyQkFBMkI7MkJBQ3hDLFlBQVksU0FBQyw0QkFBNEI7bUNBOEJ6QyxZQUFZLFNBQUMsaUJBQWlCLEVBQUUsQ0FBQyxRQUFRLENBQUM7a0NBUTFDLFlBQVksU0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7aUNBakk5Qzs7U0FnQ2Esc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYW5pbWF0ZSwgQW5pbWF0aW9uRXZlbnQsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENvbXBvbmVudCwgQ29udGVudENoaWxkLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIEluamVjdCwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb2xvclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb2xvci9jb2xvci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVG9vbGJhclNlYXJjaEJ1dHRvbkRpcmVjdGl2ZSB9IGZyb20gJy4vdG9vbGJhci1zZWFyY2gtYnV0dG9uLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFRvb2xiYXJTZWFyY2hGaWVsZERpcmVjdGl2ZSB9IGZyb20gJy4vdG9vbGJhci1zZWFyY2gtZmllbGQuZGlyZWN0aXZlJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndXgtdG9vbGJhci1zZWFyY2gnLFxyXG4gICAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcclxuICAgIGFuaW1hdGlvbnM6IFtcclxuICAgICAgICB0cmlnZ2VyKCdleHBhbmRlZCcsIFtcclxuICAgICAgICAgICAgc3RhdGUoXHJcbiAgICAgICAgICAgICAgICAnY29sbGFwc2VkJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJ3t7aW5pdGlhbFdpZHRofX0nXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHsgaW5pdGlhbFdpZHRoOiAnMzBweCcgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBzdGF0ZShcclxuICAgICAgICAgICAgICAgICdleHBhbmRlZCcsXHJcbiAgICAgICAgICAgICAgICBzdHlsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbignY29sbGFwc2VkIDw9PiBleHBhbmRlZCcsIFthbmltYXRlKCcwLjNzIGVhc2Utb3V0JyldKVxyXG4gICAgICAgIF0pXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb29sYmFyU2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XHJcblxyXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5leHBhbmRlZCcpXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGV4cGFuZGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9leHBhbmRlZDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgZXhwYW5kZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9leHBhbmRlZCA9IHZhbHVlO1xyXG5cclxuICAgICAgICB0aGlzLmV4cGFuZGVkQ2hhbmdlLmVtaXQodmFsdWUpO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgLy8gU2V0IGZvY3VzIG9uIHRoZSBpbnB1dCB3aGVuIGV4cGFuZGVkXHJcbiAgICAgICAgICAgIHRoaXMuZmllbGQuZm9jdXMoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBDbGVhciB0ZXh0IHdoZW4gY29udHJhY3RlZFxyXG4gICAgICAgICAgICB0aGlzLmZpZWxkLmNsZWFyKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBSZW1vdmUgZm9jdXMgKHdvcmtzIGFyb3VuZCBhbiBJRSBpc3N1ZSB3aGVyZSB0aGUgY2FyZXQgcmVtYWlucyB2aXNpYmxlKVxyXG4gICAgICAgICAgICB0aGlzLmZpZWxkLmJsdXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIEBIb3N0QmluZGluZygnY2xhc3MnKVxyXG4gICAgZGlyZWN0aW9uOiAnbGVmdCcgfCAncmlnaHQnID0gJ3JpZ2h0JztcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pbnZlcnNlJylcclxuICAgIGludmVyc2UgPSBmYWxzZTtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgc2V0IGJhY2tncm91bmQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gdGhpcy5fY29sb3JTZXJ2aWNlLnJlc29sdmUodmFsdWUpIHx8ICd0cmFuc3BhcmVudCc7XHJcbiAgICB9XHJcblxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBleHBhbmRlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgICBAT3V0cHV0KClcclxuICAgIHNlYXJjaCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICAgIHByaXZhdGUgX2V4cGFuZGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgQEhvc3RCaW5kaW5nKCdAZXhwYW5kZWQnKVxyXG4gICAgZ2V0IGV4cGFuZGVkQW5pbWF0aW9uKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdmFsdWU6IHRoaXMuZXhwYW5kZWQgPyAnZXhwYW5kZWQnIDogJ2NvbGxhcHNlZCcsXHJcbiAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgaW5pdGlhbFdpZHRoOiB0aGlzLmJ1dHRvbi53aWR0aCArICdweCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS5wb3NpdGlvbicpIHBvc2l0aW9uID0gJ3JlbGF0aXZlJztcclxuICAgIEBIb3N0QmluZGluZygnc3R5bGUuYmFja2dyb3VuZC1jb2xvcicpIGJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XHJcbiAgICBAQ29udGVudENoaWxkKFRvb2xiYXJTZWFyY2hGaWVsZERpcmVjdGl2ZSkgZmllbGQ6IFRvb2xiYXJTZWFyY2hGaWVsZERpcmVjdGl2ZTtcclxuICAgIEBDb250ZW50Q2hpbGQoVG9vbGJhclNlYXJjaEJ1dHRvbkRpcmVjdGl2ZSkgYnV0dG9uOiBUb29sYmFyU2VhcmNoQnV0dG9uRGlyZWN0aXZlO1xyXG5cclxuICAgIHByaXZhdGUgX3BsYWNlaG9sZGVyOiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgICAgIHByaXZhdGUgX2NvbG9yU2VydmljZTogQ29sb3JTZXJ2aWNlLFxyXG4gICAgICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnkpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICAgICAgLy8gU3Vic2NyaWJlIHRvIHRoZSBzdWJtaXQgZXZlbnQgb24gdGhlIGlucHV0IGZpZWxkLCB0cmlnZ2VyaW5nIHRoZSBzZWFyY2ggZXZlbnRcclxuICAgICAgICB0aGlzLmZpZWxkLnN1Ym1pdC5zdWJzY3JpYmUoKHRleHQ6IHN0cmluZykgPT4gdGhpcy5zZWFyY2guZW1pdCh0ZXh0KSk7XHJcblxyXG4gICAgICAgIC8vIFN1YnNjcmliZSB0byBjYW5jZWwgZXZlbnRzIGNvbWluZyBmcm9tIHRoZSBpbnB1dCBmaWVsZFxyXG4gICAgICAgIHRoaXMuZmllbGQuY2FuY2VsLnN1YnNjcmliZSgoKSA9PiB0aGlzLmV4cGFuZGVkID0gZmFsc2UpO1xyXG5cclxuICAgICAgICAvLyBTdWJzY3JpYmUgdG8gdGhlIGJ1dHRvbiBjbGljayBldmVudFxyXG4gICAgICAgIHRoaXMuYnV0dG9uLmNsaWNrZWQuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZXhwYW5kZWQgJiYgdGhpcy5maWVsZC50ZXh0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaC5lbWl0KHRoaXMuZmllbGQudGV4dCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZGVkID0gIXRoaXMuZXhwYW5kZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIHBsYWNlaG9sZGVyIGVsZW1lbnQgdG8gYXZvaWQgY2hhbmdpbmcgbGF5b3V0IHdoZW4gc3dpdGNoaW5nIHRvIHBvc2l0aW9uOiBhYnNvbHV0ZVxyXG4gICAgICAgIHRoaXMuY3JlYXRlUGxhY2Vob2xkZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdAZXhwYW5kZWQuc3RhcnQnLCBbJyRldmVudCddKVxyXG4gICAgYW5pbWF0aW9uU3RhcnQoZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnRvU3RhdGUgPT09ICdleHBhbmRlZCcpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlUGxhY2Vob2xkZXIodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ0BleHBhbmRlZC5kb25lJywgWyckZXZlbnQnXSlcclxuICAgIGFuaW1hdGlvbkRvbmUoZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LnRvU3RhdGUgPT09ICdjb2xsYXBzZWQnKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSAncmVsYXRpdmUnO1xyXG4gICAgICAgICAgICB0aGlzLmVuYWJsZVBsYWNlaG9sZGVyKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVQbGFjZWhvbGRlcigpIHtcclxuICAgICAgICAvLyBHZXQgd2lkdGggYW5kIGhlaWdodCBvZiB0aGUgY29tcG9uZW50XHJcbiAgICAgICAgY29uc3Qgc3R5bGVzID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgaW52aXNpYmxlIGRpdiB3aXRoIHRoZSBzYW1lIGRpbWVuc2lvbnNcclxuICAgICAgICB0aGlzLl9wbGFjZWhvbGRlciA9IHRoaXMuX2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuX3BsYWNlaG9sZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgdGhpcy5fcGxhY2Vob2xkZXIuc3R5bGUud2lkdGggPSB0aGlzLmJ1dHRvbi53aWR0aCArICdweCc7XHJcbiAgICAgICAgdGhpcy5fcGxhY2Vob2xkZXIuc3R5bGUuaGVpZ2h0ID0gc3R5bGVzLmhlaWdodDtcclxuICAgICAgICB0aGlzLl9wbGFjZWhvbGRlci5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcblxyXG4gICAgICAgIC8vIEFkZCBhcyBhIHNpYmxpbmdcclxuICAgICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpcy5fcGxhY2Vob2xkZXIsIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBlbmFibGVQbGFjZWhvbGRlcihlbmFibGVkOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fcGxhY2Vob2xkZXIuc3R5bGUuZGlzcGxheSA9IChlbmFibGVkID8gJ2lubGluZS1ibG9jaycgOiAnbm9uZScpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==