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
export class ToolbarSearchComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _colorService
     * @param {?} _document
     */
    constructor(_elementRef, _colorService, _document) {
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
    /**
     * @return {?}
     */
    get expanded() {
        return this._expanded;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set expanded(value) {
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
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set background(value) {
        this.backgroundColor = this._colorService.resolve(value) || 'transparent';
    }
    /**
     * @return {?}
     */
    get expandedAnimation() {
        return {
            value: this.expanded ? 'expanded' : 'collapsed',
            params: {
                initialWidth: this.button.width + 'px'
            }
        };
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        // Subscribe to the submit event on the input field, triggering the search event
        this.field.submit.subscribe((text) => this.search.emit(text));
        // Subscribe to cancel events coming from the input field
        this.field.cancel.subscribe(() => this.expanded = false);
        // Subscribe to the button click event
        this.button.clicked.subscribe(() => {
            if (this.expanded && this.field.text) {
                this.search.emit(this.field.text);
            }
            else {
                this.expanded = !this.expanded;
            }
        });
        // Create placeholder element to avoid changing layout when switching to position: absolute
        this.createPlaceholder();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    animationStart(event) {
        if (event.toState === 'expanded') {
            this.position = 'absolute';
            this.enablePlaceholder(true);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    animationDone(event) {
        if (event.toState === 'collapsed') {
            this.position = 'relative';
            this.enablePlaceholder(false);
        }
    }
    /**
     * @return {?}
     */
    createPlaceholder() {
        // Get width and height of the component
        const /** @type {?} */ styles = getComputedStyle(this._elementRef.nativeElement);
        // Create invisible div with the same dimensions
        this._placeholder = this._document.createElement('div');
        this._placeholder.style.display = 'none';
        this._placeholder.style.width = this.button.width + 'px';
        this._placeholder.style.height = styles.height;
        this._placeholder.style.visibility = 'hidden';
        // Add as a sibling
        this._elementRef.nativeElement.parentNode.insertBefore(this._placeholder, this._elementRef.nativeElement);
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    enablePlaceholder(enabled) {
        this._placeholder.style.display = (enabled ? 'inline-block' : 'none');
    }
}
ToolbarSearchComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-toolbar-search',
                template: `<ng-content></ng-content>`,
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
ToolbarSearchComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: ColorService, },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] },] },
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci1zZWFyY2guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdG9vbGJhci1zZWFyY2gvdG9vbGJhci1zZWFyY2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFrQixLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFvQixTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0SixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbEUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDakYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUEyQi9FLE1BQU07Ozs7OztJQStERixZQUNZLGFBQ0EsZUFDa0I7UUFGbEIsZ0JBQVcsR0FBWCxXQUFXO1FBQ1gsa0JBQWEsR0FBYixhQUFhO1FBQ0ssY0FBUyxHQUFULFNBQVM7eUJBdkNULE9BQU87dUJBSTNCLEtBQUs7OEJBUUUsSUFBSSxZQUFZLEVBQVc7c0JBR25DLElBQUksWUFBWSxFQUFVO3lCQUVOLEtBQUs7d0JBWVEsVUFBVTsrQkFDSyxhQUFhO0tBVXJFOzs7O1FBL0RHLFFBQVE7UUFDUixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzs7Ozs7O0lBRzFCLElBQUksUUFBUSxDQUFDLEtBQWM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFFdkIs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TUFBTTt1QkFHTixNQUFNO2tDQUtOLFdBQVcsU0FBQyxXQUFXO3lCQVV2QixXQUFXLFNBQUMsZ0JBQWdCO2dDQUM1QixXQUFXLFNBQUMsd0JBQXdCO3NCQUNwQyxZQUFZLFNBQUMsMkJBQTJCO3VCQUN4QyxZQUFZLFNBQUMsNEJBQTRCOytCQThCekMsWUFBWSxTQUFDLGlCQUFpQixFQUFFLENBQUMsUUFBUSxDQUFDOzhCQVExQyxZQUFZLFNBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbmltYXRlLCBBbmltYXRpb25FdmVudCwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgSW5qZWN0LCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbG9yU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbG9yL2NvbG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUb29sYmFyU2VhcmNoQnV0dG9uRGlyZWN0aXZlIH0gZnJvbSAnLi90b29sYmFyLXNlYXJjaC1idXR0b24uZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgVG9vbGJhclNlYXJjaEZpZWxkRGlyZWN0aXZlIH0gZnJvbSAnLi90b29sYmFyLXNlYXJjaC1maWVsZC5kaXJlY3RpdmUnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd1eC10b29sYmFyLXNlYXJjaCcsXHJcbiAgICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxyXG4gICAgYW5pbWF0aW9uczogW1xyXG4gICAgICAgIHRyaWdnZXIoJ2V4cGFuZGVkJywgW1xyXG4gICAgICAgICAgICBzdGF0ZShcclxuICAgICAgICAgICAgICAgICdjb2xsYXBzZWQnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAne3tpbml0aWFsV2lkdGh9fSdcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczogeyBpbml0aWFsV2lkdGg6ICczMHB4JyB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIHN0YXRlKFxyXG4gICAgICAgICAgICAgICAgJ2V4cGFuZGVkJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlKHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCdjb2xsYXBzZWQgPD0+IGV4cGFuZGVkJywgW2FuaW1hdGUoJzAuM3MgZWFzZS1vdXQnKV0pXHJcbiAgICAgICAgXSlcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRvb2xiYXJTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcclxuXHJcbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmV4cGFuZGVkJylcclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZXhwYW5kZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V4cGFuZGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBleHBhbmRlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX2V4cGFuZGVkID0gdmFsdWU7XHJcblxyXG4gICAgICAgIHRoaXMuZXhwYW5kZWRDaGFuZ2UuZW1pdCh2YWx1ZSk7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAvLyBTZXQgZm9jdXMgb24gdGhlIGlucHV0IHdoZW4gZXhwYW5kZWRcclxuICAgICAgICAgICAgdGhpcy5maWVsZC5mb2N1cygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIENsZWFyIHRleHQgd2hlbiBjb250cmFjdGVkXHJcbiAgICAgICAgICAgIHRoaXMuZmllbGQuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlbW92ZSBmb2N1cyAod29ya3MgYXJvdW5kIGFuIElFIGlzc3VlIHdoZXJlIHRoZSBjYXJldCByZW1haW5zIHZpc2libGUpXHJcbiAgICAgICAgICAgIHRoaXMuZmllbGQuYmx1cigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXHJcbiAgICBkaXJlY3Rpb246ICdsZWZ0JyB8ICdyaWdodCcgPSAncmlnaHQnO1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmludmVyc2UnKVxyXG4gICAgaW52ZXJzZSA9IGZhbHNlO1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBzZXQgYmFja2dyb3VuZCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLl9jb2xvclNlcnZpY2UucmVzb2x2ZSh2YWx1ZSkgfHwgJ3RyYW5zcGFyZW50JztcclxuICAgIH1cclxuXHJcbiAgICBAT3V0cHV0KClcclxuICAgIGV4cGFuZGVkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICAgIEBPdXRwdXQoKVxyXG4gICAgc2VhcmNoID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfZXhwYW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBASG9zdEJpbmRpbmcoJ0BleHBhbmRlZCcpXHJcbiAgICBnZXQgZXhwYW5kZWRBbmltYXRpb24oKTogYW55IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5leHBhbmRlZCA/ICdleHBhbmRlZCcgOiAnY29sbGFwc2VkJyxcclxuICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICBpbml0aWFsV2lkdGg6IHRoaXMuYnV0dG9uLndpZHRoICsgJ3B4J1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLnBvc2l0aW9uJykgcG9zaXRpb24gPSAncmVsYXRpdmUnO1xyXG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yJykgYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcclxuICAgIEBDb250ZW50Q2hpbGQoVG9vbGJhclNlYXJjaEZpZWxkRGlyZWN0aXZlKSBmaWVsZDogVG9vbGJhclNlYXJjaEZpZWxkRGlyZWN0aXZlO1xyXG4gICAgQENvbnRlbnRDaGlsZChUb29sYmFyU2VhcmNoQnV0dG9uRGlyZWN0aXZlKSBidXR0b246IFRvb2xiYXJTZWFyY2hCdXR0b25EaXJlY3RpdmU7XHJcblxyXG4gICAgcHJpdmF0ZSBfcGxhY2Vob2xkZXI6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSBfY29sb3JTZXJ2aWNlOiBDb2xvclNlcnZpY2UsXHJcbiAgICAgICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueSkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgICAgICAvLyBTdWJzY3JpYmUgdG8gdGhlIHN1Ym1pdCBldmVudCBvbiB0aGUgaW5wdXQgZmllbGQsIHRyaWdnZXJpbmcgdGhlIHNlYXJjaCBldmVudFxyXG4gICAgICAgIHRoaXMuZmllbGQuc3VibWl0LnN1YnNjcmliZSgodGV4dDogc3RyaW5nKSA9PiB0aGlzLnNlYXJjaC5lbWl0KHRleHQpKTtcclxuXHJcbiAgICAgICAgLy8gU3Vic2NyaWJlIHRvIGNhbmNlbCBldmVudHMgY29taW5nIGZyb20gdGhlIGlucHV0IGZpZWxkXHJcbiAgICAgICAgdGhpcy5maWVsZC5jYW5jZWwuc3Vic2NyaWJlKCgpID0+IHRoaXMuZXhwYW5kZWQgPSBmYWxzZSk7XHJcblxyXG4gICAgICAgIC8vIFN1YnNjcmliZSB0byB0aGUgYnV0dG9uIGNsaWNrIGV2ZW50XHJcbiAgICAgICAgdGhpcy5idXR0b24uY2xpY2tlZC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5leHBhbmRlZCAmJiB0aGlzLmZpZWxkLnRleHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoLmVtaXQodGhpcy5maWVsZC50ZXh0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kZWQgPSAhdGhpcy5leHBhbmRlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgcGxhY2Vob2xkZXIgZWxlbWVudCB0byBhdm9pZCBjaGFuZ2luZyBsYXlvdXQgd2hlbiBzd2l0Y2hpbmcgdG8gcG9zaXRpb246IGFic29sdXRlXHJcbiAgICAgICAgdGhpcy5jcmVhdGVQbGFjZWhvbGRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ0BleHBhbmRlZC5zdGFydCcsIFsnJGV2ZW50J10pXHJcbiAgICBhbmltYXRpb25TdGFydChldmVudDogQW5pbWF0aW9uRXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQudG9TdGF0ZSA9PT0gJ2V4cGFuZGVkJykge1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICAgICAgdGhpcy5lbmFibGVQbGFjZWhvbGRlcih0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignQGV4cGFuZGVkLmRvbmUnLCBbJyRldmVudCddKVxyXG4gICAgYW5pbWF0aW9uRG9uZShldmVudDogQW5pbWF0aW9uRXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQudG9TdGF0ZSA9PT0gJ2NvbGxhcHNlZCcpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XHJcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlUGxhY2Vob2xkZXIoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZVBsYWNlaG9sZGVyKCkge1xyXG4gICAgICAgIC8vIEdldCB3aWR0aCBhbmQgaGVpZ2h0IG9mIHRoZSBjb21wb25lbnRcclxuICAgICAgICBjb25zdCBzdHlsZXMgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBpbnZpc2libGUgZGl2IHdpdGggdGhlIHNhbWUgZGltZW5zaW9uc1xyXG4gICAgICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gdGhpcy5fZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5fcGxhY2Vob2xkZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB0aGlzLl9wbGFjZWhvbGRlci5zdHlsZS53aWR0aCA9IHRoaXMuYnV0dG9uLndpZHRoICsgJ3B4JztcclxuICAgICAgICB0aGlzLl9wbGFjZWhvbGRlci5zdHlsZS5oZWlnaHQgPSBzdHlsZXMuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuX3BsYWNlaG9sZGVyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuXHJcbiAgICAgICAgLy8gQWRkIGFzIGEgc2libGluZ1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLl9wbGFjZWhvbGRlciwgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGVuYWJsZVBsYWNlaG9sZGVyKGVuYWJsZWQ6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9wbGFjZWhvbGRlci5zdHlsZS5kaXNwbGF5ID0gKGVuYWJsZWQgPyAnaW5saW5lLWJsb2NrJyA6ICdub25lJyk7XHJcbiAgICB9XHJcbn1cclxuIl19