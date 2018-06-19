/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
var PdfService = /** @class */ (function () {
    function PdfService(_pdfService) {
        this._pdfService = _pdfService;
    }
    /**
     * @param {?} columns
     * @param {?} rows
     * @param {?=} options
     * @return {?}
     */
    PdfService.prototype.createTable = /**
     * @param {?} columns
     * @param {?} rows
     * @param {?=} options
     * @return {?}
     */
    function (columns, rows, options) {
        if (options === void 0) { options = {}; }
        return this._pdfService.createTable(columns, rows, options);
    };
    PdfService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    PdfService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['$pdf',] },] },
    ]; };
    return PdfService;
}());
export { PdfService };
function PdfService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    PdfService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    PdfService.ctorParameters;
    /** @type {?} */
    PdfService.prototype._pdfService;
}
/**
 * @param {?} injector
 * @return {?}
 */
export function pdfServiceFactory(injector) {
    return injector.get('$pdf');
}
export var /** @type {?} */ pdfServiceProvider = {
    provide: '$pdf',
    useFactory: pdfServiceFactory,
    deps: ['$injector']
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiaHlicmlkL3NlcnZpY2VzL3BkZi9wZGYuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQVksTUFBTSxlQUFlLENBQUM7O0lBTXpELG9CQUFvQztRQUFBLGdCQUFXLEdBQVgsV0FBVztLQUFrQjs7Ozs7OztJQUVqRSxnQ0FBVzs7Ozs7O0lBQVgsVUFBWSxPQUFtQixFQUFFLElBQVcsRUFBRSxPQUF3QjtRQUF4Qix3QkFBQSxFQUFBLFlBQXdCO1FBQ2xFLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQy9EOztnQkFQSixVQUFVOzs7O2dEQUdNLE1BQU0sU0FBQyxNQUFNOztxQkFOOUI7O1NBSWEsVUFBVTs7Ozs7Ozs7Ozs7Ozs7OztBQVN2QixNQUFNLDRCQUE0QixRQUFrQjtJQUNoRCxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztDQUMvQjtBQUVELE1BQU0sQ0FBQyxxQkFBTSxrQkFBa0IsR0FBRztJQUM5QixPQUFPLEVBQUUsTUFBTTtJQUNmLFVBQVUsRUFBRSxpQkFBaUI7SUFDN0IsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDO0NBQ3RCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElQZGZTZXJ2aWNlLCBQZGZDb2x1bW5zLCBQZGZPcHRpb25zLCBQZGZEb2N1bWVudCB9IGZyb20gJy4vcGRmLmludGVyZmFjZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQZGZTZXJ2aWNlIGltcGxlbWVudHMgSVBkZlNlcnZpY2Uge1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KCckcGRmJykgcHJpdmF0ZSBfcGRmU2VydmljZTogSVBkZlNlcnZpY2UpIHsgfVxyXG4gICAgXHJcbiAgICBjcmVhdGVUYWJsZShjb2x1bW5zOiBQZGZDb2x1bW5zLCByb3dzOiBhbnlbXSwgb3B0aW9uczogUGRmT3B0aW9ucyA9IHt9KTogUGRmRG9jdW1lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wZGZTZXJ2aWNlLmNyZWF0ZVRhYmxlKGNvbHVtbnMsIHJvd3MsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGRmU2VydmljZUZhY3RvcnkoaW5qZWN0b3I6IEluamVjdG9yKSB7XHJcbiAgICByZXR1cm4gaW5qZWN0b3IuZ2V0KCckcGRmJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwZGZTZXJ2aWNlUHJvdmlkZXIgPSB7XHJcbiAgICBwcm92aWRlOiAnJHBkZicsXHJcbiAgICB1c2VGYWN0b3J5OiBwZGZTZXJ2aWNlRmFjdG9yeSxcclxuICAgIGRlcHM6IFsnJGluamVjdG9yJ11cclxufTsiXX0=