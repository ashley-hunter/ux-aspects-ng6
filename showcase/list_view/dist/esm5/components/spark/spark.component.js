/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ColorService } from '../../services/color/index';
var SparkComponent = /** @class */ (function () {
    function SparkComponent(_colorService) {
        this._colorService = _colorService;
        this.values = [];
        this.barHeight = 10;
        this._theme = 'primary';
        this._barColor = [];
    }
    Object.defineProperty(SparkComponent.prototype, "theme", {
        get: /**
         * @return {?}
         */
        function () {
            return this._theme;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._theme = this._colorService.resolveColorName(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SparkComponent.prototype, "trackColor", {
        get: /**
         * @return {?}
         */
        function () {
            return this._trackColor;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._trackColor = this._colorService.resolve(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SparkComponent.prototype, "barColor", {
        get: /**
         * @return {?}
         */
        function () {
            return this._barColor;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            if (Array.isArray(value)) {
                this._barColor = value.map(function (color) { return _this._colorService.resolve(color); });
            }
            else {
                this._barColor = [this._colorService.resolve(value)];
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SparkComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this.values;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            // ensure 'value' is an array at this point
            var /** @type {?} */ values = Array.isArray(value) ? value : [value];
            // get the total value of all lines
            var /** @type {?} */ total = Math.max(values.reduce(function (previous, current) { return previous + current; }, 0), 100);
            // figure out the percentages for each spark line
            this.values = values.map(function (val) { return (val / total) * 100; });
        },
        enumerable: true,
        configurable: true
    });
    SparkComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-spark',
                    template: "<!-- Inline Spark Chart -->\n<div *ngIf=\"inlineLabel\" class=\"ux-spark-inline-label-container\">\n\n    <div class=\"ux-spark-inline-label-left\" [innerHtml]=\"inlineLabel\"></div>\n\n    <div class=\"ux-spark-line\">\n\n        <div class=\"ux-spark-top-container\" *ngIf=\"topLeftLabel || topRightLabel\">\n            <div class=\"ux-spark-label-top-left\" *ngIf=\"topLeftLabel\" [innerHtml]=\"topLeftLabel\"></div>\n            <div class=\"ux-spark-label-top-right\" *ngIf=\"topRightLabel\" [innerHtml]=\"topRightLabel\"></div>\n        </div>\n\n        <div class=\"ux-spark ux-inline ux-spark-theme-{{theme}}\" [style.height.px]=\"barHeight\" [style.backgroundColor]=\"trackColor\" [uxTooltip]=\"tooltip\">\n            <div class=\"ux-spark-bar\" *ngFor=\"let line of values; let idx = index;\" [style.width.%]=\"line\" [style.backgroundColor]=\"barColor[idx]\"></div>\n        </div>\n\n        <div class=\"ux-spark-bottom-container\" *ngIf=\"bottomLeftLabel || bottomRightLabel\">\n            <div class=\"ux-spark-label-bottom-left\" *ngIf=\"bottomLeftLabel\" [innerHtml]=\"bottomLeftLabel\"></div>\n            <div class=\"ux-spark-label-bottom-right\" *ngIf=\"bottomRightLabel\" [innerHtml]=\"bottomRightLabel\"></div>\n        </div>\n\n    </div>\n</div>\n\n<!-- End Inline Spark Chart -->\n\n\n<!-- Non Inline Spark Chart -->\n<div *ngIf=\"!inlineLabel\">\n\n    <div class=\"ux-spark-top-container\" *ngIf=\"topLeftLabel || topRightLabel\">\n        <div class=\"ux-spark-label-top-left\" *ngIf=\"topLeftLabel\" [innerHtml]=\"topLeftLabel\"></div>\n        <div class=\"ux-spark-label-top-right\" *ngIf=\"topRightLabel\" [innerHtml]=\"topRightLabel\"></div>\n    </div>\n\n    <div class=\"ux-spark ux-spark-theme-{{theme}}\" [class.ux-spark-multi-value]=\"values.length > 1\" [style.height.px]=\"barHeight\" [style.backgroundColor]=\"trackColor\"\n        [uxTooltip]=\"tooltip\">\n        <div class=\"ux-spark-bar\" *ngFor=\"let line of value; let idx = index;\" [style.width.%]=\"line\" [style.backgroundColor]=\"barColor[idx]\"></div>\n    </div>\n\n    <div class=\"ux-spark-bottom-container\" *ngIf=\"bottomLeftLabel || bottomRightLabel\">\n        <div class=\"ux-spark-label-bottom-left\" *ngIf=\"bottomLeftLabel\" [innerHtml]=\"bottomLeftLabel\"></div>\n        <div class=\"ux-spark-label-bottom-right\" *ngIf=\"bottomRightLabel\" [innerHtml]=\"bottomRightLabel\"></div>\n    </div>\n</div>\n\n<!-- End Non Inline Spark Chart -->",
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    SparkComponent.ctorParameters = function () { return [
        { type: ColorService, },
    ]; };
    SparkComponent.propDecorators = {
        "barHeight": [{ type: Input },],
        "inlineLabel": [{ type: Input },],
        "topLeftLabel": [{ type: Input },],
        "topRightLabel": [{ type: Input },],
        "bottomLeftLabel": [{ type: Input },],
        "bottomRightLabel": [{ type: Input },],
        "tooltip": [{ type: Input },],
        "theme": [{ type: Input },],
        "trackColor": [{ type: Input },],
        "barColor": [{ type: Input },],
        "value": [{ type: Input },],
    };
    return SparkComponent;
}());
export { SparkComponent };
function SparkComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SparkComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SparkComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    SparkComponent.propDecorators;
    /** @type {?} */
    SparkComponent.prototype.values;
    /** @type {?} */
    SparkComponent.prototype.barHeight;
    /** @type {?} */
    SparkComponent.prototype.inlineLabel;
    /** @type {?} */
    SparkComponent.prototype.topLeftLabel;
    /** @type {?} */
    SparkComponent.prototype.topRightLabel;
    /** @type {?} */
    SparkComponent.prototype.bottomLeftLabel;
    /** @type {?} */
    SparkComponent.prototype.bottomRightLabel;
    /** @type {?} */
    SparkComponent.prototype.tooltip;
    /** @type {?} */
    SparkComponent.prototype._trackColor;
    /** @type {?} */
    SparkComponent.prototype._theme;
    /** @type {?} */
    SparkComponent.prototype._barColor;
    /** @type {?} */
    SparkComponent.prototype._colorService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BhcmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc3Bhcmsvc3BhcmsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7O0lBdUh0RCx3QkFBb0IsYUFBMkI7UUFBM0Isa0JBQWEsR0FBYixhQUFhLENBQWM7c0JBL0Q1QixFQUFFO3lCQUVRLEVBQUU7c0JBU0csU0FBUzt5QkFDSixFQUFFO0tBbURXOzBCQWhEaEQsaUNBQUs7Ozs7UUFJVDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3RCOzs7OztrQkFOUyxLQUFhO1lBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7MEJBUXpELHNDQUFVOzs7O1FBSWQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUMzQjs7Ozs7a0JBTmMsS0FBYTtZQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7OzswQkFRckQsb0NBQVE7Ozs7UUFTWjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3pCOzs7OztrQkFYWSxLQUF3Qjs7WUFFakMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFqQyxDQUFpQyxDQUFDLENBQUM7YUFDMUU7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUN4RDs7Ozs7MEJBUUQsaUNBQUs7Ozs7UUFZVDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3RCOzs7OztrQkFkUyxLQUF3Qjs7WUFHOUIscUJBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7WUFHdEQscUJBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFDLFFBQVEsRUFBRSxPQUFPLElBQUssT0FBQSxRQUFRLEdBQUcsT0FBTyxFQUFsQixDQUFrQixFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDOztZQUd6RixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxHQUFHLEVBQW5CLENBQW1CLENBQUMsQ0FBQzs7Ozs7O2dCQTdHNUQsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxVQUFVO29CQUNwQixRQUFRLEVBQUUsaTZFQThDc0I7b0JBQ2hDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNsRDs7OztnQkFyRFEsWUFBWTs7OzhCQTBEaEIsS0FBSztnQ0FDTCxLQUFLO2lDQUNMLEtBQUs7a0NBQ0wsS0FBSztvQ0FDTCxLQUFLO3FDQUNMLEtBQUs7NEJBQ0wsS0FBSzswQkFNTCxLQUFLOytCQVNMLEtBQUs7NkJBU0wsS0FBSzswQkFjTCxLQUFLOzt5QkF2R1Y7O1NBdURhLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb2xvclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb2xvci9pbmRleCc7XHJcbmltcG9ydCB7IENvbG9ySWRlbnRpZmllciB9IGZyb20gJy4uLy4uL2luZGV4JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd1eC1zcGFyaycsXHJcbiAgICB0ZW1wbGF0ZTogYDwhLS0gSW5saW5lIFNwYXJrIENoYXJ0IC0tPlxyXG48ZGl2ICpuZ0lmPVwiaW5saW5lTGFiZWxcIiBjbGFzcz1cInV4LXNwYXJrLWlubGluZS1sYWJlbC1jb250YWluZXJcIj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwidXgtc3BhcmstaW5saW5lLWxhYmVsLWxlZnRcIiBbaW5uZXJIdG1sXT1cImlubGluZUxhYmVsXCI+PC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInV4LXNwYXJrLWxpbmVcIj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInV4LXNwYXJrLXRvcC1jb250YWluZXJcIiAqbmdJZj1cInRvcExlZnRMYWJlbCB8fCB0b3BSaWdodExhYmVsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1eC1zcGFyay1sYWJlbC10b3AtbGVmdFwiICpuZ0lmPVwidG9wTGVmdExhYmVsXCIgW2lubmVySHRtbF09XCJ0b3BMZWZ0TGFiZWxcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInV4LXNwYXJrLWxhYmVsLXRvcC1yaWdodFwiICpuZ0lmPVwidG9wUmlnaHRMYWJlbFwiIFtpbm5lckh0bWxdPVwidG9wUmlnaHRMYWJlbFwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidXgtc3BhcmsgdXgtaW5saW5lIHV4LXNwYXJrLXRoZW1lLXt7dGhlbWV9fVwiIFtzdHlsZS5oZWlnaHQucHhdPVwiYmFySGVpZ2h0XCIgW3N0eWxlLmJhY2tncm91bmRDb2xvcl09XCJ0cmFja0NvbG9yXCIgW3V4VG9vbHRpcF09XCJ0b29sdGlwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1eC1zcGFyay1iYXJcIiAqbmdGb3I9XCJsZXQgbGluZSBvZiB2YWx1ZXM7IGxldCBpZHggPSBpbmRleDtcIiBbc3R5bGUud2lkdGguJV09XCJsaW5lXCIgW3N0eWxlLmJhY2tncm91bmRDb2xvcl09XCJiYXJDb2xvcltpZHhdXCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1eC1zcGFyay1ib3R0b20tY29udGFpbmVyXCIgKm5nSWY9XCJib3R0b21MZWZ0TGFiZWwgfHwgYm90dG9tUmlnaHRMYWJlbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXgtc3BhcmstbGFiZWwtYm90dG9tLWxlZnRcIiAqbmdJZj1cImJvdHRvbUxlZnRMYWJlbFwiIFtpbm5lckh0bWxdPVwiYm90dG9tTGVmdExhYmVsXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1eC1zcGFyay1sYWJlbC1ib3R0b20tcmlnaHRcIiAqbmdJZj1cImJvdHRvbVJpZ2h0TGFiZWxcIiBbaW5uZXJIdG1sXT1cImJvdHRvbVJpZ2h0TGFiZWxcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48IS0tIEVuZCBJbmxpbmUgU3BhcmsgQ2hhcnQgLS0+XHJcblxyXG5cclxuPCEtLSBOb24gSW5saW5lIFNwYXJrIENoYXJ0IC0tPlxyXG48ZGl2ICpuZ0lmPVwiIWlubGluZUxhYmVsXCI+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInV4LXNwYXJrLXRvcC1jb250YWluZXJcIiAqbmdJZj1cInRvcExlZnRMYWJlbCB8fCB0b3BSaWdodExhYmVsXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInV4LXNwYXJrLWxhYmVsLXRvcC1sZWZ0XCIgKm5nSWY9XCJ0b3BMZWZ0TGFiZWxcIiBbaW5uZXJIdG1sXT1cInRvcExlZnRMYWJlbFwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1eC1zcGFyay1sYWJlbC10b3AtcmlnaHRcIiAqbmdJZj1cInRvcFJpZ2h0TGFiZWxcIiBbaW5uZXJIdG1sXT1cInRvcFJpZ2h0TGFiZWxcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJ1eC1zcGFyayB1eC1zcGFyay10aGVtZS17e3RoZW1lfX1cIiBbY2xhc3MudXgtc3BhcmstbXVsdGktdmFsdWVdPVwidmFsdWVzLmxlbmd0aCA+IDFcIiBbc3R5bGUuaGVpZ2h0LnB4XT1cImJhckhlaWdodFwiIFtzdHlsZS5iYWNrZ3JvdW5kQ29sb3JdPVwidHJhY2tDb2xvclwiXHJcbiAgICAgICAgW3V4VG9vbHRpcF09XCJ0b29sdGlwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInV4LXNwYXJrLWJhclwiICpuZ0Zvcj1cImxldCBsaW5lIG9mIHZhbHVlOyBsZXQgaWR4ID0gaW5kZXg7XCIgW3N0eWxlLndpZHRoLiVdPVwibGluZVwiIFtzdHlsZS5iYWNrZ3JvdW5kQ29sb3JdPVwiYmFyQ29sb3JbaWR4XVwiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInV4LXNwYXJrLWJvdHRvbS1jb250YWluZXJcIiAqbmdJZj1cImJvdHRvbUxlZnRMYWJlbCB8fCBib3R0b21SaWdodExhYmVsXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInV4LXNwYXJrLWxhYmVsLWJvdHRvbS1sZWZ0XCIgKm5nSWY9XCJib3R0b21MZWZ0TGFiZWxcIiBbaW5uZXJIdG1sXT1cImJvdHRvbUxlZnRMYWJlbFwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1eC1zcGFyay1sYWJlbC1ib3R0b20tcmlnaHRcIiAqbmdJZj1cImJvdHRvbVJpZ2h0TGFiZWxcIiBbaW5uZXJIdG1sXT1cImJvdHRvbVJpZ2h0TGFiZWxcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbjwhLS0gRW5kIE5vbiBJbmxpbmUgU3BhcmsgQ2hhcnQgLS0+YCxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTcGFya0NvbXBvbmVudCB7XHJcblxyXG4gICAgdmFsdWVzOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgIEBJbnB1dCgpIGJhckhlaWdodDogbnVtYmVyID0gMTA7XHJcbiAgICBASW5wdXQoKSBpbmxpbmVMYWJlbDogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgdG9wTGVmdExhYmVsOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSB0b3BSaWdodExhYmVsOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBib3R0b21MZWZ0TGFiZWw6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGJvdHRvbVJpZ2h0TGFiZWw6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHRvb2x0aXA6IHN0cmluZztcclxuXHJcbiAgICBwcml2YXRlIF90cmFja0NvbG9yOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF90aGVtZTogQ29sb3JJZGVudGlmaWVyID0gJ3ByaW1hcnknOyAgICBcclxuICAgIHByaXZhdGUgX2JhckNvbG9yOiBzdHJpbmcgfCBzdHJpbmdbXSA9IFtdO1xyXG4gICAgXHJcbiAgICBASW5wdXQoKSBcclxuICAgIHNldCB0aGVtZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fdGhlbWUgPSB0aGlzLl9jb2xvclNlcnZpY2UucmVzb2x2ZUNvbG9yTmFtZSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHRoZW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RoZW1lO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpIFxyXG4gICAgc2V0IHRyYWNrQ29sb3IodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3RyYWNrQ29sb3IgPSB0aGlzLl9jb2xvclNlcnZpY2UucmVzb2x2ZSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHRyYWNrQ29sb3IoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJhY2tDb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKSBcclxuICAgIHNldCBiYXJDb2xvcih2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW10pIHtcclxuXHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2JhckNvbG9yID0gdmFsdWUubWFwKGNvbG9yID0+IHRoaXMuX2NvbG9yU2VydmljZS5yZXNvbHZlKGNvbG9yKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fYmFyQ29sb3IgPSBbdGhpcy5fY29sb3JTZXJ2aWNlLnJlc29sdmUodmFsdWUpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGJhckNvbG9yKCk6IHN0cmluZyB8IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYmFyQ29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHNldCB2YWx1ZSh2YWx1ZTogbnVtYmVyIHwgbnVtYmVyW10pIHtcclxuXHJcbiAgICAgICAgLy8gZW5zdXJlICd2YWx1ZScgaXMgYW4gYXJyYXkgYXQgdGhpcyBwb2ludFxyXG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUgOiBbdmFsdWVdO1xyXG5cclxuICAgICAgICAvLyBnZXQgdGhlIHRvdGFsIHZhbHVlIG9mIGFsbCBsaW5lc1xyXG4gICAgICAgIGNvbnN0IHRvdGFsID0gTWF0aC5tYXgodmFsdWVzLnJlZHVjZSgocHJldmlvdXMsIGN1cnJlbnQpID0+IHByZXZpb3VzICsgY3VycmVudCwgMCksIDEwMCk7XHJcblxyXG4gICAgICAgIC8vIGZpZ3VyZSBvdXQgdGhlIHBlcmNlbnRhZ2VzIGZvciBlYWNoIHNwYXJrIGxpbmVcclxuICAgICAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcy5tYXAodmFsID0+ICh2YWwgLyB0b3RhbCkgKiAxMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB2YWx1ZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY29sb3JTZXJ2aWNlOiBDb2xvclNlcnZpY2UpIHsgfVxyXG59Il19