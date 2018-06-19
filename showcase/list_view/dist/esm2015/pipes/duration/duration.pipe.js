/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe } from '@angular/core';
export class DurationPipe {
    /**
     * @param {?} seconds
     * @return {?}
     */
    transform(seconds) {
        let /** @type {?} */ minutes = Math.floor(seconds / 60);
        let /** @type {?} */ hours = Math.floor(minutes / 60);
        let /** @type {?} */ days = Math.floor(hours / 24);
        hours = hours - (days * 24);
        minutes = minutes - (days * 24 * 60) - (hours * 60);
        seconds = Math.floor(seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60));
        if (hours > 0) {
            return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`;
        }
        else {
            return `${this.pad(minutes)}:${this.pad(seconds)}`;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    pad(value) {
        if (value < 10) {
            return `0${value}`;
        }
        return value.toString();
    }
}
DurationPipe.decorators = [
    { type: Pipe, args: [{
                name: 'duration'
            },] },
];
function DurationPipe_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    DurationPipe.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    DurationPipe.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHVyYXRpb24ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJwaXBlcy9kdXJhdGlvbi9kdXJhdGlvbi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUtwRCxNQUFNOzs7OztJQUVGLFNBQVMsQ0FBQyxPQUFlO1FBRXJCLHFCQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQztRQUN2QyxxQkFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDckMscUJBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBRWxDLEtBQUssR0FBRyxLQUFLLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDNUIsT0FBTyxHQUFHLE9BQU8sR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDcEQsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFM0YsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDWixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1NBQ3pFO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztTQUN0RDtLQUNKOzs7OztJQUVELEdBQUcsQ0FBQyxLQUFhO1FBQ2IsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDYixNQUFNLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQztTQUN0QjtRQUVELE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDM0I7OztZQTVCSixJQUFJLFNBQUM7Z0JBQ0YsSUFBSSxFQUFFLFVBQVU7YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgICBuYW1lOiAnZHVyYXRpb24nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEdXJhdGlvblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIFxyXG4gICAgdHJhbnNmb3JtKHNlY29uZHM6IG51bWJlcik6IGFueSB7XHJcblxyXG4gICAgICAgIGxldCBtaW51dGVzID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gNjApO1xyXG4gICAgICAgIGxldCBob3VycyA9IE1hdGguZmxvb3IobWludXRlcyAvIDYwKTtcclxuICAgICAgICBsZXQgZGF5cyA9IE1hdGguZmxvb3IoaG91cnMgLyAyNCk7XHJcblxyXG4gICAgICAgIGhvdXJzID0gaG91cnMgLSAoZGF5cyAqIDI0KTtcclxuICAgICAgICBtaW51dGVzID0gbWludXRlcyAtIChkYXlzICogMjQgKiA2MCkgLSAoaG91cnMgKiA2MCk7XHJcbiAgICAgICAgc2Vjb25kcyA9IE1hdGguZmxvb3Ioc2Vjb25kcyAtIChkYXlzICogMjQgKiA2MCAqIDYwKSAtIChob3VycyAqIDYwICogNjApIC0gKG1pbnV0ZXMgKiA2MCkpO1xyXG5cclxuICAgICAgICBpZiAoaG91cnMgPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLnBhZChob3Vycyl9OiR7dGhpcy5wYWQobWludXRlcyl9OiR7dGhpcy5wYWQoc2Vjb25kcyl9YDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gYCR7dGhpcy5wYWQobWludXRlcyl9OiR7dGhpcy5wYWQoc2Vjb25kcyl9YDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcGFkKHZhbHVlOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh2YWx1ZSA8IDEwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgMCR7dmFsdWV9YDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xyXG4gICAgfVxyXG59Il19