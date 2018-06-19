/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Convert a single dimension array to a double dimension array
 * @template T
 * @param {?} items the single dimension array to convert
 * @param {?} columns the number of items each array should have
 * @return {?}
 */
export function gridify(items, columns) {
    // create a copy of array so not to effect the original
    items = items.slice(0);
    var /** @type {?} */ grid = [];
    while (items.length) {
        grid.push(items.splice(0, columns));
    }
    return grid;
}
/**
 * Create an array of numbers between two limits
 * @param {?} start the lower limit
 * @param {?} end the upper limit
 * @return {?}
 */
export function range(start, end) {
    var /** @type {?} */ list = [];
    for (var /** @type {?} */ idx = start; idx <= end; idx++) {
        list.push(idx);
    }
    return list;
}
/**
 * Create an array of dates between two points
 * @param {?} start the date to start the array
 * @param {?} end the date to end the array
 * @return {?}
 */
export function dateRange(start, end) {
    var /** @type {?} */ dates = [];
    // loop through all the days between the date range
    while (start <= end) {
        // add the date to the array
        dates.push(new Date(start));
        // move to the next day
        start.setDate(start.getDate() + 1);
    }
    return dates;
}
/**
 * Compare two dates to see if they are on the same day
 * @param {?} day1 the first date to compare
 * @param {?} day2 the second date to compare
 * @return {?}
 */
export function compareDays(day1, day2) {
    return day1.getDate() === day2.getDate() &&
        day1.getMonth() === day2.getMonth() &&
        day1.getFullYear() === day2.getFullYear();
}
/**
 * Date comparison for use primarily with distinctUntilChanged
 * @param {?} dateOne
 * @param {?} dateTwo
 * @return {?}
 */
export function dateComparator(dateOne, dateTwo) {
    return dateOne.getTime() === dateTwo.getTime();
}
/**
 * Timezone comparison for use primarily with distinctUntilChanged
 * @param {?} zoneOne
 * @param {?} zoneTwo
 * @return {?}
 */
export function timezoneComparator(zoneOne, zoneTwo) {
    return zoneOne.name === zoneTwo.name && zoneOne.offset === zoneTwo.offset;
}
/**
 * Export an array of all the available months
 */
export var /** @type {?} */ months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export var /** @type {?} */ monthsShort = months.map(function (month) { return month.substring(0, 3); });
/**
 * Export an array of all the available days of the week
 */
export var /** @type {?} */ weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
export var /** @type {?} */ weekdaysShort = weekdays.map(function (weekday) { return weekday.substring(0, 3); });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10aW1lLXBpY2tlci51dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2RhdGUtdGltZS1waWNrZXIvZGF0ZS10aW1lLXBpY2tlci51dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE1BQU0sa0JBQXFCLEtBQVUsRUFBRSxPQUFlOztJQUdsRCxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUV2QixxQkFBTSxJQUFJLEdBQVUsRUFBRSxDQUFDO0lBRXZCLE9BQU8sS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztLQUN2QztJQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7Q0FDZjs7Ozs7OztBQU9ELE1BQU0sZ0JBQWdCLEtBQWEsRUFBRSxHQUFXO0lBQzVDLHFCQUFNLElBQUksR0FBYSxFQUFFLENBQUM7SUFFMUIsR0FBRyxDQUFDLENBQUMscUJBQUksR0FBRyxHQUFHLEtBQUssRUFBRSxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNsQjtJQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7Q0FDZjs7Ozs7OztBQU9ELE1BQU0sb0JBQW9CLEtBQVcsRUFBRSxHQUFTO0lBRTVDLHFCQUFJLEtBQUssR0FBVyxFQUFFLENBQUM7O0lBR3ZCLE9BQU8sS0FBSyxJQUFJLEdBQUcsRUFBRSxDQUFDOztRQUdsQixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7O1FBRzVCLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ3RDO0lBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQztDQUNoQjs7Ozs7OztBQU9ELE1BQU0sc0JBQXNCLElBQVUsRUFBRSxJQUFVO0lBQzlDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssSUFBSSxDQUFDLE9BQU8sRUFBRTtRQUNwQyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssSUFBSSxDQUFDLFFBQVEsRUFBRTtRQUNuQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0NBQ2pEOzs7Ozs7O0FBS0QsTUFBTSx5QkFBeUIsT0FBYSxFQUFFLE9BQWE7SUFDdkQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7Q0FDbEQ7Ozs7Ozs7QUFLRCxNQUFNLDZCQUE2QixPQUErQixFQUFFLE9BQStCO0lBQy9GLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxPQUFPLENBQUMsTUFBTSxDQUFDO0NBQzdFOzs7O0FBS0QsTUFBTSxDQUFDLHFCQUFNLE1BQU0sR0FBRyxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDakosTUFBTSxDQUFDLHFCQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQzs7OztBQUt0RSxNQUFNLENBQUMscUJBQU0sUUFBUSxHQUFHLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDdkcsTUFBTSxDQUFDLHFCQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQXZCLENBQXVCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGVUaW1lUGlja2VyVGltZXpvbmUgfSBmcm9tICcuL2RhdGUtdGltZS1waWNrZXIuc2VydmljZSc7XHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnQgYSBzaW5nbGUgZGltZW5zaW9uIGFycmF5IHRvIGEgZG91YmxlIGRpbWVuc2lvbiBhcnJheVxyXG4gKiBAcGFyYW0gaXRlbXMgdGhlIHNpbmdsZSBkaW1lbnNpb24gYXJyYXkgdG8gY29udmVydFxyXG4gKiBAcGFyYW0gY29sdW1ucyB0aGUgbnVtYmVyIG9mIGl0ZW1zIGVhY2ggYXJyYXkgc2hvdWxkIGhhdmVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBncmlkaWZ5PFQ+KGl0ZW1zOiBUW10sIGNvbHVtbnM6IG51bWJlcik6IFRbXVtdIHtcclxuXHJcbiAgICAvLyBjcmVhdGUgYSBjb3B5IG9mIGFycmF5IHNvIG5vdCB0byBlZmZlY3QgdGhlIG9yaWdpbmFsXHJcbiAgICBpdGVtcyA9IGl0ZW1zLnNsaWNlKDApO1xyXG5cclxuICAgIGNvbnN0IGdyaWQ6IFRbXVtdID0gW107XHJcblxyXG4gICAgd2hpbGUgKGl0ZW1zLmxlbmd0aCkge1xyXG4gICAgICAgIGdyaWQucHVzaChpdGVtcy5zcGxpY2UoMCwgY29sdW1ucykpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBncmlkO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlIGFuIGFycmF5IG9mIG51bWJlcnMgYmV0d2VlbiB0d28gbGltaXRzXHJcbiAqIEBwYXJhbSBzdGFydCB0aGUgbG93ZXIgbGltaXRcclxuICogQHBhcmFtIGVuZCB0aGUgdXBwZXIgbGltaXRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5nZShzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcik6IG51bWJlcltdIHtcclxuICAgIGNvbnN0IGxpc3Q6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaWR4ID0gc3RhcnQ7IGlkeCA8PSBlbmQ7IGlkeCsrKSB7XHJcbiAgICAgICAgbGlzdC5wdXNoKGlkeCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGxpc3Q7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgYW4gYXJyYXkgb2YgZGF0ZXMgYmV0d2VlbiB0d28gcG9pbnRzXHJcbiAqIEBwYXJhbSBzdGFydCB0aGUgZGF0ZSB0byBzdGFydCB0aGUgYXJyYXlcclxuICogQHBhcmFtIGVuZCB0aGUgZGF0ZSB0byBlbmQgdGhlIGFycmF5XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGF0ZVJhbmdlKHN0YXJ0OiBEYXRlLCBlbmQ6IERhdGUpOiBEYXRlW10ge1xyXG5cclxuICAgIGxldCBkYXRlczogRGF0ZVtdID0gW107XHJcblxyXG4gICAgLy8gbG9vcCB0aHJvdWdoIGFsbCB0aGUgZGF5cyBiZXR3ZWVuIHRoZSBkYXRlIHJhbmdlXHJcbiAgICB3aGlsZSAoc3RhcnQgPD0gZW5kKSB7XHJcblxyXG4gICAgICAgIC8vIGFkZCB0aGUgZGF0ZSB0byB0aGUgYXJyYXlcclxuICAgICAgICBkYXRlcy5wdXNoKG5ldyBEYXRlKHN0YXJ0KSk7XHJcblxyXG4gICAgICAgIC8vIG1vdmUgdG8gdGhlIG5leHQgZGF5XHJcbiAgICAgICAgc3RhcnQuc2V0RGF0ZShzdGFydC5nZXREYXRlKCkgKyAxKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0ZXM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb21wYXJlIHR3byBkYXRlcyB0byBzZWUgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgZGF5XHJcbiAqIEBwYXJhbSBkYXkxIHRoZSBmaXJzdCBkYXRlIHRvIGNvbXBhcmVcclxuICogQHBhcmFtIGRheTIgdGhlIHNlY29uZCBkYXRlIHRvIGNvbXBhcmVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlRGF5cyhkYXkxOiBEYXRlLCBkYXkyOiBEYXRlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gZGF5MS5nZXREYXRlKCkgPT09IGRheTIuZ2V0RGF0ZSgpICYmXHJcbiAgICAgICAgZGF5MS5nZXRNb250aCgpID09PSBkYXkyLmdldE1vbnRoKCkgJiZcclxuICAgICAgICBkYXkxLmdldEZ1bGxZZWFyKCkgPT09IGRheTIuZ2V0RnVsbFllYXIoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIERhdGUgY29tcGFyaXNvbiBmb3IgdXNlIHByaW1hcmlseSB3aXRoIGRpc3RpbmN0VW50aWxDaGFuZ2VkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGF0ZUNvbXBhcmF0b3IoZGF0ZU9uZTogRGF0ZSwgZGF0ZVR3bzogRGF0ZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGRhdGVPbmUuZ2V0VGltZSgpID09PSBkYXRlVHdvLmdldFRpbWUoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRpbWV6b25lIGNvbXBhcmlzb24gZm9yIHVzZSBwcmltYXJpbHkgd2l0aCBkaXN0aW5jdFVudGlsQ2hhbmdlZFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRpbWV6b25lQ29tcGFyYXRvcih6b25lT25lOiBEYXRlVGltZVBpY2tlclRpbWV6b25lLCB6b25lVHdvOiBEYXRlVGltZVBpY2tlclRpbWV6b25lKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gem9uZU9uZS5uYW1lID09PSB6b25lVHdvLm5hbWUgJiYgem9uZU9uZS5vZmZzZXQgPT09IHpvbmVUd28ub2Zmc2V0O1xyXG59XHJcblxyXG4vKipcclxuICogRXhwb3J0IGFuIGFycmF5IG9mIGFsbCB0aGUgYXZhaWxhYmxlIG1vbnRoc1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG1vbnRocyA9IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddO1xyXG5leHBvcnQgY29uc3QgbW9udGhzU2hvcnQgPSBtb250aHMubWFwKG1vbnRoID0+IG1vbnRoLnN1YnN0cmluZygwLCAzKSk7XHJcblxyXG4vKipcclxuICogRXhwb3J0IGFuIGFycmF5IG9mIGFsbCB0aGUgYXZhaWxhYmxlIGRheXMgb2YgdGhlIHdlZWtcclxuICovXHJcbmV4cG9ydCBjb25zdCB3ZWVrZGF5cyA9IFsnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheScsICdTdW5kYXknXTtcclxuZXhwb3J0IGNvbnN0IHdlZWtkYXlzU2hvcnQgPSB3ZWVrZGF5cy5tYXAod2Vla2RheSA9PiB3ZWVrZGF5LnN1YnN0cmluZygwLCAzKSk7Il19