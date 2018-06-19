/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ContentChildren, Directive, EventEmitter, HostBinding, HostListener, Input, Output, QueryList } from '@angular/core';
import { Subscription } from 'rxjs';
import { SelectionItemDirective } from './selection-item.directive';
import { SelectionService } from './selection.service';
export class SelectionDirective {
    /**
     * @param {?} _selectionService
     */
    constructor(_selectionService) {
        this._selectionService = _selectionService;
        this.tabindex = 0;
        this.uxSelectionChange = new EventEmitter();
        this._subscriptions = new Subscription();
        this._subscriptions.add(_selectionService.selection$.subscribe(items => this.uxSelectionChange.emit(items)));
    }
    /**
     * @param {?} items
     * @return {?}
     */
    set uxSelection(items) {
        this._selectionService.select(...items);
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    set disabled(disabled) {
        this._selectionService.setDisabled(disabled);
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    set mode(mode) {
        this._selectionService.setMode(mode);
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    set clickSelection(enabled) {
        this._selectionService.clickEnabled = enabled;
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    set keyboardSelection(enabled) {
        this._selectionService.keyboardEnabled = enabled;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        // provide the initial list of selection items
        this.update();
        // if the list changes then inform the service
        this._subscriptions.add(this.items.changes.subscribe(() => this.update()));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._subscriptions.unsubscribe();
    }
    /**
     * If the directive element receives focus then activate the first item
     * @return {?}
     */
    focus() {
        if (this._selectionService.enabled && this._selectionService.dataset.length > 0) {
            this._selectionService.activate(this._selectionService.dataset[0]);
        }
    }
    /**
     * Update the dataset to reflect the latest selection items
     * @return {?}
     */
    update() {
        this._selectionService.dataset = this.items.map(item => item.uxSelectionItem);
    }
    /**
     * Select all the items in the list
     * @return {?}
     */
    selectAll() {
        if (this._selectionService.enabled) {
            this._selectionService.strategy.selectAll();
        }
    }
    /**
     * Deselect all currently selected items
     * @return {?}
     */
    deselectAll() {
        if (this._selectionService.enabled) {
            this._selectionService.strategy.deselectAll();
        }
    }
}
SelectionDirective.decorators = [
    { type: Directive, args: [{
                selector: '[uxSelection]',
                exportAs: 'ux-selection',
                providers: [SelectionService]
            },] },
];
/** @nocollapse */
SelectionDirective.ctorParameters = () => [
    { type: SelectionService, },
];
SelectionDirective.propDecorators = {
    "uxSelection": [{ type: Input },],
    "disabled": [{ type: Input },],
    "mode": [{ type: Input },],
    "clickSelection": [{ type: Input },],
    "keyboardSelection": [{ type: Input },],
    "tabindex": [{ type: Input }, { type: HostBinding, args: ['tabindex',] },],
    "uxSelectionChange": [{ type: Output },],
    "items": [{ type: ContentChildren, args: [SelectionItemDirective,] },],
    "focus": [{ type: HostListener, args: ['focus',] },],
};
function SelectionDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SelectionDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SelectionDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    SelectionDirective.propDecorators;
    /** @type {?} */
    SelectionDirective.prototype.tabindex;
    /** @type {?} */
    SelectionDirective.prototype.uxSelectionChange;
    /** @type {?} */
    SelectionDirective.prototype.items;
    /** @type {?} */
    SelectionDirective.prototype._subscriptions;
    /** @type {?} */
    SelectionDirective.prototype._selectionService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL3NlbGVjdGlvbi9zZWxlY3Rpb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQW9CLGVBQWUsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFhLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0osT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQWlCLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFRdEUsTUFBTTs7OztJQThCSixZQUFvQixpQkFBbUM7UUFBbkMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjt3QkFSRixDQUFDO2lDQUV4QixJQUFJLFlBQVksRUFBUzs4QkFJOUIsSUFBSSxZQUFZLEVBQUU7UUFHekMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzlHOzs7OztRQTlCWSxXQUFXLENBQUMsS0FBWTtRQUNuQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7Ozs7OztRQUc3QixRQUFRLENBQUMsUUFBaUI7UUFDckMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Ozs7O1FBR2xDLElBQUksQ0FBQyxJQUFtQjtRQUNuQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDOzs7Ozs7UUFHMUIsY0FBYyxDQUFDLE9BQWdCO1FBQzFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDOzs7Ozs7UUFHbkMsaUJBQWlCLENBQUMsT0FBZ0I7UUFDN0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUM7Ozs7O0lBZW5ELGtCQUFrQjs7UUFFaEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDOztRQUdkLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQzVFOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDbkM7Ozs7O0lBS3NCLEtBQUs7UUFDMUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BFOzs7Ozs7SUFNSCxNQUFNO1FBQ0osSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztLQUMvRTs7Ozs7SUFLRCxTQUFTO1FBQ1AsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUM3QztLQUNGOzs7OztJQUtELFdBQVc7UUFDVCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQy9DO0tBQ0Y7OztZQW5GRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixTQUFTLEVBQUUsQ0FBRSxnQkFBZ0IsQ0FBRTthQUNoQzs7OztZQVB1QixnQkFBZ0I7Ozs0QkFVckMsS0FBSzt5QkFJTCxLQUFLO3FCQUlMLEtBQUs7K0JBSUwsS0FBSztrQ0FJTCxLQUFLO3lCQUlMLEtBQUssWUFBSSxXQUFXLFNBQUMsVUFBVTtrQ0FFL0IsTUFBTTtzQkFFTixlQUFlLFNBQUMsc0JBQXNCO3NCQXVCdEMsWUFBWSxTQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBDb250ZW50Q2hpbGRyZW4sIERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25EZXN0cm95LCBPdXRwdXQsIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgU2VsZWN0aW9uSXRlbURpcmVjdGl2ZSB9IGZyb20gJy4vc2VsZWN0aW9uLWl0ZW0uZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgU2VsZWN0aW9uTW9kZSwgU2VsZWN0aW9uU2VydmljZSB9IGZyb20gJy4vc2VsZWN0aW9uLnNlcnZpY2UnO1xyXG5cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW3V4U2VsZWN0aW9uXScsXHJcbiAgZXhwb3J0QXM6ICd1eC1zZWxlY3Rpb24nLFxyXG4gIHByb3ZpZGVyczogWyBTZWxlY3Rpb25TZXJ2aWNlIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlbGVjdGlvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gIEBJbnB1dCgpIHNldCB1eFNlbGVjdGlvbihpdGVtczogYW55W10pIHtcclxuICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2Uuc2VsZWN0KC4uLml0ZW1zKTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIHNldCBkaXNhYmxlZChkaXNhYmxlZDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5zZXREaXNhYmxlZChkaXNhYmxlZCk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBzZXQgbW9kZShtb2RlOiBTZWxlY3Rpb25Nb2RlKSB7XHJcbiAgICB0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLnNldE1vZGUobW9kZSk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBzZXQgY2xpY2tTZWxlY3Rpb24oZW5hYmxlZDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5jbGlja0VuYWJsZWQgPSBlbmFibGVkO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgc2V0IGtleWJvYXJkU2VsZWN0aW9uKGVuYWJsZWQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2Uua2V5Ym9hcmRFbmFibGVkID0gZW5hYmxlZDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIEBIb3N0QmluZGluZygndGFiaW5kZXgnKSB0YWJpbmRleDogbnVtYmVyID0gMDtcclxuXHJcbiAgQE91dHB1dCgpIHV4U2VsZWN0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnlbXT4oKTtcclxuXHJcbiAgQENvbnRlbnRDaGlsZHJlbihTZWxlY3Rpb25JdGVtRGlyZWN0aXZlKSBpdGVtczogUXVlcnlMaXN0PFNlbGVjdGlvbkl0ZW1EaXJlY3RpdmU+O1xyXG5cclxuICBwcml2YXRlIF9zdWJzY3JpcHRpb25zID0gbmV3IFN1YnNjcmlwdGlvbigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zZWxlY3Rpb25TZXJ2aWNlOiBTZWxlY3Rpb25TZXJ2aWNlKSB7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmFkZChfc2VsZWN0aW9uU2VydmljZS5zZWxlY3Rpb24kLnN1YnNjcmliZShpdGVtcyA9PiB0aGlzLnV4U2VsZWN0aW9uQ2hhbmdlLmVtaXQoaXRlbXMpKSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICAvLyBwcm92aWRlIHRoZSBpbml0aWFsIGxpc3Qgb2Ygc2VsZWN0aW9uIGl0ZW1zXHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG5cclxuICAgIC8vIGlmIHRoZSBsaXN0IGNoYW5nZXMgdGhlbiBpbmZvcm0gdGhlIHNlcnZpY2VcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuYWRkKHRoaXMuaXRlbXMuY2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGUoKSkpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJZiB0aGUgZGlyZWN0aXZlIGVsZW1lbnQgcmVjZWl2ZXMgZm9jdXMgdGhlbiBhY3RpdmF0ZSB0aGUgZmlyc3QgaXRlbVxyXG4gICAqL1xyXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJykgZm9jdXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fc2VsZWN0aW9uU2VydmljZS5lbmFibGVkICYmIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UuZGF0YXNldC5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuX3NlbGVjdGlvblNlcnZpY2UuYWN0aXZhdGUodGhpcy5fc2VsZWN0aW9uU2VydmljZS5kYXRhc2V0WzBdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZSB0aGUgZGF0YXNldCB0byByZWZsZWN0IHRoZSBsYXRlc3Qgc2VsZWN0aW9uIGl0ZW1zXHJcbiAgICovXHJcbiAgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5kYXRhc2V0ID0gdGhpcy5pdGVtcy5tYXAoaXRlbSA9PiBpdGVtLnV4U2VsZWN0aW9uSXRlbSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZWxlY3QgYWxsIHRoZSBpdGVtcyBpbiB0aGUgbGlzdFxyXG4gICAqL1xyXG4gIHNlbGVjdEFsbCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLmVuYWJsZWQpIHtcclxuICAgICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5zdHJhdGVneS5zZWxlY3RBbGwoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlc2VsZWN0IGFsbCBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbXNcclxuICAgKi9cclxuICBkZXNlbGVjdEFsbCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9zZWxlY3Rpb25TZXJ2aWNlLmVuYWJsZWQpIHtcclxuICAgICAgdGhpcy5fc2VsZWN0aW9uU2VydmljZS5zdHJhdGVneS5kZXNlbGVjdEFsbCgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=