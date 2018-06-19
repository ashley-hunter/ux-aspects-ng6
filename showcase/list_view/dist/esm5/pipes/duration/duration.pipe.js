/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe } from '@angular/core';
var DurationPipe = /** @class */ (function () {
    function DurationPipe() {
    }
    /**
     * @param {?} seconds
     * @return {?}
     */
    DurationPipe.prototype.transform = /**
     * @param {?} seconds
     * @return {?}
     */
    function (seconds) {
        var /** @type {?} */ minutes = Math.floor(seconds / 60);
        var /** @type {?} */ hours = Math.floor(minutes / 60);
        var /** @type {?} */ days = Math.floor(hours / 24);
        hours = hours - (days * 24);
        minutes = minutes - (days * 24 * 60) - (hours * 60);
        seconds = Math.floor(seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60));
        if (hours > 0) {
            return this.pad(hours) + ":" + this.pad(minutes) + ":" + this.pad(seconds);
        }
        else {
            return this.pad(minutes) + ":" + this.pad(seconds);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DurationPipe.prototype.pad = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value < 10) {
            return "0" + value;
        }
        return value.toString();
    };
    DurationPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'duration'
                },] },
    ];
    return DurationPipe;
}());
export { DurationPipe };
function DurationPipe_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    DurationPipe.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    DurationPipe.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHVyYXRpb24ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJwaXBlcy9kdXJhdGlvbi9kdXJhdGlvbi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7SUFPaEQsZ0NBQVM7Ozs7SUFBVCxVQUFVLE9BQWU7UUFFckIscUJBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLHFCQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNyQyxxQkFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFFbEMsS0FBSyxHQUFHLEtBQUssR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQztRQUM1QixPQUFPLEdBQUcsT0FBTyxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNwRCxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUUzRixFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNaLE1BQU0sQ0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxTQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUcsQ0FBQztTQUN6RTtRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osTUFBTSxDQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUcsQ0FBQztTQUN0RDtLQUNKOzs7OztJQUVELDBCQUFHOzs7O0lBQUgsVUFBSSxLQUFhO1FBQ2IsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDYixNQUFNLENBQUMsTUFBSSxLQUFPLENBQUM7U0FDdEI7UUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQzNCOztnQkE1QkosSUFBSSxTQUFDO29CQUNGLElBQUksRUFBRSxVQUFVO2lCQUNuQjs7dUJBSkQ7O1NBS2EsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHtcclxuICAgIG5hbWU6ICdkdXJhdGlvbidcclxufSlcclxuZXhwb3J0IGNsYXNzIER1cmF0aW9uUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgXHJcbiAgICB0cmFuc2Zvcm0oc2Vjb25kczogbnVtYmVyKTogYW55IHtcclxuXHJcbiAgICAgICAgbGV0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHNlY29uZHMgLyA2MCk7XHJcbiAgICAgICAgbGV0IGhvdXJzID0gTWF0aC5mbG9vcihtaW51dGVzIC8gNjApO1xyXG4gICAgICAgIGxldCBkYXlzID0gTWF0aC5mbG9vcihob3VycyAvIDI0KTtcclxuXHJcbiAgICAgICAgaG91cnMgPSBob3VycyAtIChkYXlzICogMjQpO1xyXG4gICAgICAgIG1pbnV0ZXMgPSBtaW51dGVzIC0gKGRheXMgKiAyNCAqIDYwKSAtIChob3VycyAqIDYwKTtcclxuICAgICAgICBzZWNvbmRzID0gTWF0aC5mbG9vcihzZWNvbmRzIC0gKGRheXMgKiAyNCAqIDYwICogNjApIC0gKGhvdXJzICogNjAgKiA2MCkgLSAobWludXRlcyAqIDYwKSk7XHJcblxyXG4gICAgICAgIGlmIChob3VycyA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGAke3RoaXMucGFkKGhvdXJzKX06JHt0aGlzLnBhZChtaW51dGVzKX06JHt0aGlzLnBhZChzZWNvbmRzKX1gO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLnBhZChtaW51dGVzKX06JHt0aGlzLnBhZChzZWNvbmRzKX1gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwYWQodmFsdWU6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHZhbHVlIDwgMTApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGAwJHt2YWx1ZX1gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbn0iXX0=