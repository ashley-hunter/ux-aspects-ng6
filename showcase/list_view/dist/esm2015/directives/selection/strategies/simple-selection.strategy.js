/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { SelectionStrategy } from './selection.strategy';
export class SimpleSelectionStrategy extends SelectionStrategy {
    /**
     * When the item is clicked simply toggle the current selected state
     * @param {?} event
     * @param {?} data
     * @return {?}
     */
    click(event, data) {
        this.toggle(data);
    }
    /**
     * Add basic keyboard support for navigating
     * and selecting/deselecting items
     * @param {?} event
     * @param {?} data
     * @return {?}
     */
    keydown(event, data) {
        switch (event.keyCode) {
            case KeyCode.UpArrow:
                event.preventDefault();
                return this.selectionService.activateSibling(true);
            case KeyCode.DownArrow:
                event.preventDefault();
                return this.selectionService.activateSibling(false);
            case KeyCode.Spacebar:
                event.preventDefault();
                return this.toggle(data);
        }
    }
    /**
     * Override the standard toggle function to always activate the item
     * @param {?} data
     * @return {?}
     */
    toggle(data) {
        super.toggle(data);
        this.selectionService.activate(data);
    }
}
/** @enum {number} */
const KeyCode = {
    UpArrow: 38,
    DownArrow: 40,
    Spacebar: 32,
};
KeyCode[KeyCode.UpArrow] = "UpArrow";
KeyCode[KeyCode.DownArrow] = "DownArrow";
KeyCode[KeyCode.Spacebar] = "Spacebar";

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLXNlbGVjdGlvbi5zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL3NlbGVjdGlvbi9zdHJhdGVnaWVzL3NpbXBsZS1zZWxlY3Rpb24uc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXpELE1BQU0sOEJBQStCLFNBQVEsaUJBQWlCOzs7Ozs7O0lBSzVELEtBQUssQ0FBQyxLQUFpQixFQUFFLElBQVM7UUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNuQjs7Ozs7Ozs7SUFNRCxPQUFPLENBQUMsS0FBb0IsRUFBRSxJQUFTO1FBRXJDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBRXRCLEtBQUssT0FBTyxDQUFDLE9BQU87Z0JBQ2xCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFckQsS0FBSyxPQUFPLENBQUMsU0FBUztnQkFDcEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUV0RCxLQUFLLE9BQU8sQ0FBQyxRQUFRO2dCQUNuQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzVCO0tBQ0Y7Ozs7OztJQUtELE1BQU0sQ0FBQyxJQUFTO1FBQ2QsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3RDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZWxlY3Rpb25TdHJhdGVneSB9IGZyb20gJy4vc2VsZWN0aW9uLnN0cmF0ZWd5JztcclxuXHJcbmV4cG9ydCBjbGFzcyBTaW1wbGVTZWxlY3Rpb25TdHJhdGVneSBleHRlbmRzIFNlbGVjdGlvblN0cmF0ZWd5IHtcclxuXHJcbiAgLyoqXHJcbiAgICogV2hlbiB0aGUgaXRlbSBpcyBjbGlja2VkIHNpbXBseSB0b2dnbGUgdGhlIGN1cnJlbnQgc2VsZWN0ZWQgc3RhdGVcclxuICAgKi9cclxuICBjbGljayhldmVudDogTW91c2VFdmVudCwgZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLnRvZ2dsZShkYXRhKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZCBiYXNpYyBrZXlib2FyZCBzdXBwb3J0IGZvciBuYXZpZ2F0aW5nXHJcbiAgICogYW5kIHNlbGVjdGluZy9kZXNlbGVjdGluZyBpdGVtc1xyXG4gICAqL1xyXG4gIGtleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQsIGRhdGE6IGFueSk6IHZvaWQge1xyXG5cclxuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICBcclxuICAgICAgY2FzZSBLZXlDb2RlLlVwQXJyb3c6XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3Rpb25TZXJ2aWNlLmFjdGl2YXRlU2libGluZyh0cnVlKTtcclxuICAgICAgICBcclxuICAgICAgY2FzZSBLZXlDb2RlLkRvd25BcnJvdzpcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGlvblNlcnZpY2UuYWN0aXZhdGVTaWJsaW5nKGZhbHNlKTtcclxuICAgICAgXHJcbiAgICAgIGNhc2UgS2V5Q29kZS5TcGFjZWJhcjpcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLnRvZ2dsZShkYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE92ZXJyaWRlIHRoZSBzdGFuZGFyZCB0b2dnbGUgZnVuY3Rpb24gdG8gYWx3YXlzIGFjdGl2YXRlIHRoZSBpdGVtXHJcbiAgICovXHJcbiAgdG9nZ2xlKGRhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgc3VwZXIudG9nZ2xlKGRhdGEpO1xyXG4gICAgdGhpcy5zZWxlY3Rpb25TZXJ2aWNlLmFjdGl2YXRlKGRhdGEpO1xyXG4gIH1cclxufVxyXG5cclxuZW51bSBLZXlDb2RlIHtcclxuICBVcEFycm93ID0gMzgsXHJcbiAgRG93bkFycm93ID0gNDAsXHJcbiAgU3BhY2ViYXIgPSAzMlxyXG59XHJcbiJdfQ==