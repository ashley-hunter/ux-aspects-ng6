/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe } from '@angular/core';
var FileSizePipe = /** @class */ (function () {
    function FileSizePipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    FileSizePipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        // allow for async values
        if (!value) {
            return value;
        }
        var /** @type {?} */ units = ['B', 'KB', 'MB', 'GB', 'TB'];
        // calculate the which unit bracket the values should be a part of
        var /** @type {?} */ idx = Math.floor(Math.log(value) / Math.log(1024));
        var /** @type {?} */ formattedValue = value / Math.pow(1024, idx);
        return formattedValue.toFixed(2) + " " + units[idx];
    };
    FileSizePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'fileSize'
                },] },
    ];
    return FileSizePipe;
}());
export { FileSizePipe };
function FileSizePipe_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FileSizePipe.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FileSizePipe.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1zaXplLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsicGlwZXMvZmlsZS1zaXplL2ZpbGUtc2l6ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7SUFPaEQsZ0NBQVM7Ozs7SUFBVCxVQUFVLEtBQWE7O1FBR25CLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNULE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDaEI7UUFFRCxxQkFBSSxLQUFLLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7O1FBRzFDLHFCQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELHFCQUFJLGNBQWMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFakQsTUFBTSxDQUFJLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQUksS0FBSyxDQUFDLEdBQUcsQ0FBRyxDQUFDO0tBQ3ZEOztnQkFuQkosSUFBSSxTQUFDO29CQUNGLElBQUksRUFBRSxVQUFVO2lCQUNuQjs7dUJBSkQ7O1NBS2EsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHtcclxuICAgIG5hbWU6ICdmaWxlU2l6ZSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEZpbGVTaXplUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICAgIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyKTogYW55IHtcclxuXHJcbiAgICAgICAgLy8gYWxsb3cgZm9yIGFzeW5jIHZhbHVlc1xyXG4gICAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBsZXQgdW5pdHMgPSBbJ0InLCAnS0InLCAnTUInLCAnR0InLCAnVEInXTtcclxuXHJcbiAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSB3aGljaCB1bml0IGJyYWNrZXQgdGhlIHZhbHVlcyBzaG91bGQgYmUgYSBwYXJ0IG9mXHJcbiAgICAgICAgbGV0IGlkeCA9IE1hdGguZmxvb3IoTWF0aC5sb2codmFsdWUpIC8gTWF0aC5sb2coMTAyNCkpO1xyXG4gICAgICAgIGxldCBmb3JtYXR0ZWRWYWx1ZSA9IHZhbHVlIC8gTWF0aC5wb3coMTAyNCwgaWR4KTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gYCR7Zm9ybWF0dGVkVmFsdWUudG9GaXhlZCgyKX0gJHt1bml0c1tpZHhdfWA7XHJcbiAgICB9XHJcbn0iXX0=