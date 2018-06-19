/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { SelectionStrategy } from './selection.strategy';
var SimpleSelectionStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(SimpleSelectionStrategy, _super);
    function SimpleSelectionStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * When the item is clicked simply toggle the current selected state
     */
    /**
     * When the item is clicked simply toggle the current selected state
     * @param {?} event
     * @param {?} data
     * @return {?}
     */
    SimpleSelectionStrategy.prototype.click = /**
     * When the item is clicked simply toggle the current selected state
     * @param {?} event
     * @param {?} data
     * @return {?}
     */
    function (event, data) {
        this.toggle(data);
    };
    /**
     * Add basic keyboard support for navigating
     * and selecting/deselecting items
     */
    /**
     * Add basic keyboard support for navigating
     * and selecting/deselecting items
     * @param {?} event
     * @param {?} data
     * @return {?}
     */
    SimpleSelectionStrategy.prototype.keydown = /**
     * Add basic keyboard support for navigating
     * and selecting/deselecting items
     * @param {?} event
     * @param {?} data
     * @return {?}
     */
    function (event, data) {
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
    };
    /**
     * Override the standard toggle function to always activate the item
     */
    /**
     * Override the standard toggle function to always activate the item
     * @param {?} data
     * @return {?}
     */
    SimpleSelectionStrategy.prototype.toggle = /**
     * Override the standard toggle function to always activate the item
     * @param {?} data
     * @return {?}
     */
    function (data) {
        _super.prototype.toggle.call(this, data);
        this.selectionService.activate(data);
    };
    return SimpleSelectionStrategy;
}(SelectionStrategy));
export { SimpleSelectionStrategy };
/** @enum {number} */
var KeyCode = {
    UpArrow: 38,
    DownArrow: 40,
    Spacebar: 32,
};
KeyCode[KeyCode.UpArrow] = "UpArrow";
KeyCode[KeyCode.DownArrow] = "DownArrow";
KeyCode[KeyCode.Spacebar] = "Spacebar";

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLXNlbGVjdGlvbi5zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL3NlbGVjdGlvbi9zdHJhdGVnaWVzL3NpbXBsZS1zZWxlY3Rpb24uc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV6RCxJQUFBO0lBQTZDLG1EQUFpQjs7OztJQUU1RDs7T0FFRzs7Ozs7OztJQUNILHVDQUFLOzs7Ozs7SUFBTCxVQUFNLEtBQWlCLEVBQUUsSUFBUztRQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ25CO0lBRUQ7OztPQUdHOzs7Ozs7OztJQUNILHlDQUFPOzs7Ozs7O0lBQVAsVUFBUSxLQUFvQixFQUFFLElBQVM7UUFFckMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFFdEIsS0FBSyxPQUFPLENBQUMsT0FBTztnQkFDbEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVyRCxLQUFLLE9BQU8sQ0FBQyxTQUFTO2dCQUNwQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRXRELEtBQUssT0FBTyxDQUFDLFFBQVE7Z0JBQ25CLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUI7S0FDRjtJQUVEOztPQUVHOzs7Ozs7SUFDSCx3Q0FBTTs7Ozs7SUFBTixVQUFPLElBQVM7UUFDZCxpQkFBTSxNQUFNLFlBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN0QztrQ0F2Q0g7RUFFNkMsaUJBQWlCLEVBc0M3RCxDQUFBO0FBdENELG1DQXNDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlbGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnLi9zZWxlY3Rpb24uc3RyYXRlZ3knO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNpbXBsZVNlbGVjdGlvblN0cmF0ZWd5IGV4dGVuZHMgU2VsZWN0aW9uU3RyYXRlZ3kge1xyXG5cclxuICAvKipcclxuICAgKiBXaGVuIHRoZSBpdGVtIGlzIGNsaWNrZWQgc2ltcGx5IHRvZ2dsZSB0aGUgY3VycmVudCBzZWxlY3RlZCBzdGF0ZVxyXG4gICAqL1xyXG4gIGNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50LCBkYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMudG9nZ2xlKGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkIGJhc2ljIGtleWJvYXJkIHN1cHBvcnQgZm9yIG5hdmlnYXRpbmdcclxuICAgKiBhbmQgc2VsZWN0aW5nL2Rlc2VsZWN0aW5nIGl0ZW1zXHJcbiAgICovXHJcbiAga2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCwgZGF0YTogYW55KTogdm9pZCB7XHJcblxyXG4gICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgIFxyXG4gICAgICBjYXNlIEtleUNvZGUuVXBBcnJvdzpcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGlvblNlcnZpY2UuYWN0aXZhdGVTaWJsaW5nKHRydWUpO1xyXG4gICAgICAgIFxyXG4gICAgICBjYXNlIEtleUNvZGUuRG93bkFycm93OlxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uU2VydmljZS5hY3RpdmF0ZVNpYmxpbmcoZmFsc2UpO1xyXG4gICAgICBcclxuICAgICAgY2FzZSBLZXlDb2RlLlNwYWNlYmFyOlxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7ICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9nZ2xlKGRhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT3ZlcnJpZGUgdGhlIHN0YW5kYXJkIHRvZ2dsZSBmdW5jdGlvbiB0byBhbHdheXMgYWN0aXZhdGUgdGhlIGl0ZW1cclxuICAgKi9cclxuICB0b2dnbGUoZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICBzdXBlci50b2dnbGUoZGF0YSk7XHJcbiAgICB0aGlzLnNlbGVjdGlvblNlcnZpY2UuYWN0aXZhdGUoZGF0YSk7XHJcbiAgfVxyXG59XHJcblxyXG5lbnVtIEtleUNvZGUge1xyXG4gIFVwQXJyb3cgPSAzOCxcclxuICBEb3duQXJyb3cgPSA0MCxcclxuICBTcGFjZWJhciA9IDMyXHJcbn1cclxuIl19