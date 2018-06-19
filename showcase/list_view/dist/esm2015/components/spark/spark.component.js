/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ColorService } from '../../services/color/index';
export class SparkComponent {
    /**
     * @param {?} _colorService
     */
    constructor(_colorService) {
        this._colorService = _colorService;
        this.values = [];
        this.barHeight = 10;
        this._theme = 'primary';
        this._barColor = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set theme(value) {
        this._theme = this._colorService.resolveColorName(value);
    }
    /**
     * @return {?}
     */
    get theme() {
        return this._theme;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set trackColor(value) {
        this._trackColor = this._colorService.resolve(value);
    }
    /**
     * @return {?}
     */
    get trackColor() {
        return this._trackColor;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set barColor(value) {
        if (Array.isArray(value)) {
            this._barColor = value.map(color => this._colorService.resolve(color));
        }
        else {
            this._barColor = [this._colorService.resolve(value)];
        }
    }
    /**
     * @return {?}
     */
    get barColor() {
        return this._barColor;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        // ensure 'value' is an array at this point
        const /** @type {?} */ values = Array.isArray(value) ? value : [value];
        // get the total value of all lines
        const /** @type {?} */ total = Math.max(values.reduce((previous, current) => previous + current, 0), 100);
        // figure out the percentages for each spark line
        this.values = values.map(val => (val / total) * 100);
    }
    /**
     * @return {?}
     */
    get value() {
        return this.values;
    }
}
SparkComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-spark',
                template: `<!-- Inline Spark Chart -->
<div *ngIf="inlineLabel" class="ux-spark-inline-label-container">

    <div class="ux-spark-inline-label-left" [innerHtml]="inlineLabel"></div>

    <div class="ux-spark-line">

        <div class="ux-spark-top-container" *ngIf="topLeftLabel || topRightLabel">
            <div class="ux-spark-label-top-left" *ngIf="topLeftLabel" [innerHtml]="topLeftLabel"></div>
            <div class="ux-spark-label-top-right" *ngIf="topRightLabel" [innerHtml]="topRightLabel"></div>
        </div>

        <div class="ux-spark ux-inline ux-spark-theme-{{theme}}" [style.height.px]="barHeight" [style.backgroundColor]="trackColor" [uxTooltip]="tooltip">
            <div class="ux-spark-bar" *ngFor="let line of values; let idx = index;" [style.width.%]="line" [style.backgroundColor]="barColor[idx]"></div>
        </div>

        <div class="ux-spark-bottom-container" *ngIf="bottomLeftLabel || bottomRightLabel">
            <div class="ux-spark-label-bottom-left" *ngIf="bottomLeftLabel" [innerHtml]="bottomLeftLabel"></div>
            <div class="ux-spark-label-bottom-right" *ngIf="bottomRightLabel" [innerHtml]="bottomRightLabel"></div>
        </div>

    </div>
</div>

<!-- End Inline Spark Chart -->


<!-- Non Inline Spark Chart -->
<div *ngIf="!inlineLabel">

    <div class="ux-spark-top-container" *ngIf="topLeftLabel || topRightLabel">
        <div class="ux-spark-label-top-left" *ngIf="topLeftLabel" [innerHtml]="topLeftLabel"></div>
        <div class="ux-spark-label-top-right" *ngIf="topRightLabel" [innerHtml]="topRightLabel"></div>
    </div>

    <div class="ux-spark ux-spark-theme-{{theme}}" [class.ux-spark-multi-value]="values.length > 1" [style.height.px]="barHeight" [style.backgroundColor]="trackColor"
        [uxTooltip]="tooltip">
        <div class="ux-spark-bar" *ngFor="let line of value; let idx = index;" [style.width.%]="line" [style.backgroundColor]="barColor[idx]"></div>
    </div>

    <div class="ux-spark-bottom-container" *ngIf="bottomLeftLabel || bottomRightLabel">
        <div class="ux-spark-label-bottom-left" *ngIf="bottomLeftLabel" [innerHtml]="bottomLeftLabel"></div>
        <div class="ux-spark-label-bottom-right" *ngIf="bottomRightLabel" [innerHtml]="bottomRightLabel"></div>
    </div>
</div>

<!-- End Non Inline Spark Chart -->`,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SparkComponent.ctorParameters = () => [
    { type: ColorService, },
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BhcmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc3Bhcmsvc3BhcmsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFzRDFELE1BQU07Ozs7SUFpRUYsWUFBb0IsYUFBMkI7UUFBM0Isa0JBQWEsR0FBYixhQUFhLENBQWM7c0JBL0Q1QixFQUFFO3lCQUVRLEVBQUU7c0JBU0csU0FBUzt5QkFDSixFQUFFO0tBbURXOzs7OztRQWhEaEQsS0FBSyxDQUFDLEtBQWE7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDOzs7OztJQUc3RCxJQUFJLEtBQUs7UUFDTCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztLQUN0Qjs7Ozs7UUFHRyxVQUFVLENBQUMsS0FBYTtRQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7OztJQUd6RCxJQUFJLFVBQVU7UUFDVixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztLQUMzQjs7Ozs7UUFHRyxRQUFRLENBQUMsS0FBd0I7UUFFakMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUMxRTtRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDeEQ7Ozs7O0lBR0wsSUFBSSxRQUFRO1FBQ1IsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDekI7Ozs7O1FBR0csS0FBSyxDQUFDLEtBQXdCOztRQUc5Qix1QkFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDOztRQUd0RCx1QkFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsUUFBUSxHQUFHLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQzs7UUFHekYsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7Ozs7O0lBR3pELElBQUksS0FBSztRQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0tBQ3RCOzs7WUFsSEosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBOENzQjtnQkFDaEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDbEQ7Ozs7WUFyRFEsWUFBWTs7OzBCQTBEaEIsS0FBSzs0QkFDTCxLQUFLOzZCQUNMLEtBQUs7OEJBQ0wsS0FBSztnQ0FDTCxLQUFLO2lDQUNMLEtBQUs7d0JBQ0wsS0FBSztzQkFNTCxLQUFLOzJCQVNMLEtBQUs7eUJBU0wsS0FBSztzQkFjTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29sb3JTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29sb3IvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb2xvcklkZW50aWZpZXIgfSBmcm9tICcuLi8uLi9pbmRleCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndXgtc3BhcmsnLFxyXG4gICAgdGVtcGxhdGU6IGA8IS0tIElubGluZSBTcGFyayBDaGFydCAtLT5cclxuPGRpdiAqbmdJZj1cImlubGluZUxhYmVsXCIgY2xhc3M9XCJ1eC1zcGFyay1pbmxpbmUtbGFiZWwtY29udGFpbmVyXCI+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInV4LXNwYXJrLWlubGluZS1sYWJlbC1sZWZ0XCIgW2lubmVySHRtbF09XCJpbmxpbmVMYWJlbFwiPjwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJ1eC1zcGFyay1saW5lXCI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1eC1zcGFyay10b3AtY29udGFpbmVyXCIgKm5nSWY9XCJ0b3BMZWZ0TGFiZWwgfHwgdG9wUmlnaHRMYWJlbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXgtc3BhcmstbGFiZWwtdG9wLWxlZnRcIiAqbmdJZj1cInRvcExlZnRMYWJlbFwiIFtpbm5lckh0bWxdPVwidG9wTGVmdExhYmVsXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1eC1zcGFyay1sYWJlbC10b3AtcmlnaHRcIiAqbmdJZj1cInRvcFJpZ2h0TGFiZWxcIiBbaW5uZXJIdG1sXT1cInRvcFJpZ2h0TGFiZWxcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInV4LXNwYXJrIHV4LWlubGluZSB1eC1zcGFyay10aGVtZS17e3RoZW1lfX1cIiBbc3R5bGUuaGVpZ2h0LnB4XT1cImJhckhlaWdodFwiIFtzdHlsZS5iYWNrZ3JvdW5kQ29sb3JdPVwidHJhY2tDb2xvclwiIFt1eFRvb2x0aXBdPVwidG9vbHRpcFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXgtc3BhcmstYmFyXCIgKm5nRm9yPVwibGV0IGxpbmUgb2YgdmFsdWVzOyBsZXQgaWR4ID0gaW5kZXg7XCIgW3N0eWxlLndpZHRoLiVdPVwibGluZVwiIFtzdHlsZS5iYWNrZ3JvdW5kQ29sb3JdPVwiYmFyQ29sb3JbaWR4XVwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidXgtc3BhcmstYm90dG9tLWNvbnRhaW5lclwiICpuZ0lmPVwiYm90dG9tTGVmdExhYmVsIHx8IGJvdHRvbVJpZ2h0TGFiZWxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInV4LXNwYXJrLWxhYmVsLWJvdHRvbS1sZWZ0XCIgKm5nSWY9XCJib3R0b21MZWZ0TGFiZWxcIiBbaW5uZXJIdG1sXT1cImJvdHRvbUxlZnRMYWJlbFwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXgtc3BhcmstbGFiZWwtYm90dG9tLXJpZ2h0XCIgKm5nSWY9XCJib3R0b21SaWdodExhYmVsXCIgW2lubmVySHRtbF09XCJib3R0b21SaWdodExhYmVsXCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPCEtLSBFbmQgSW5saW5lIFNwYXJrIENoYXJ0IC0tPlxyXG5cclxuXHJcbjwhLS0gTm9uIElubGluZSBTcGFyayBDaGFydCAtLT5cclxuPGRpdiAqbmdJZj1cIiFpbmxpbmVMYWJlbFwiPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJ1eC1zcGFyay10b3AtY29udGFpbmVyXCIgKm5nSWY9XCJ0b3BMZWZ0TGFiZWwgfHwgdG9wUmlnaHRMYWJlbFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1eC1zcGFyay1sYWJlbC10b3AtbGVmdFwiICpuZ0lmPVwidG9wTGVmdExhYmVsXCIgW2lubmVySHRtbF09XCJ0b3BMZWZ0TGFiZWxcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidXgtc3BhcmstbGFiZWwtdG9wLXJpZ2h0XCIgKm5nSWY9XCJ0b3BSaWdodExhYmVsXCIgW2lubmVySHRtbF09XCJ0b3BSaWdodExhYmVsXCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwidXgtc3BhcmsgdXgtc3BhcmstdGhlbWUte3t0aGVtZX19XCIgW2NsYXNzLnV4LXNwYXJrLW11bHRpLXZhbHVlXT1cInZhbHVlcy5sZW5ndGggPiAxXCIgW3N0eWxlLmhlaWdodC5weF09XCJiYXJIZWlnaHRcIiBbc3R5bGUuYmFja2dyb3VuZENvbG9yXT1cInRyYWNrQ29sb3JcIlxyXG4gICAgICAgIFt1eFRvb2x0aXBdPVwidG9vbHRpcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1eC1zcGFyay1iYXJcIiAqbmdGb3I9XCJsZXQgbGluZSBvZiB2YWx1ZTsgbGV0IGlkeCA9IGluZGV4O1wiIFtzdHlsZS53aWR0aC4lXT1cImxpbmVcIiBbc3R5bGUuYmFja2dyb3VuZENvbG9yXT1cImJhckNvbG9yW2lkeF1cIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJ1eC1zcGFyay1ib3R0b20tY29udGFpbmVyXCIgKm5nSWY9XCJib3R0b21MZWZ0TGFiZWwgfHwgYm90dG9tUmlnaHRMYWJlbFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1eC1zcGFyay1sYWJlbC1ib3R0b20tbGVmdFwiICpuZ0lmPVwiYm90dG9tTGVmdExhYmVsXCIgW2lubmVySHRtbF09XCJib3R0b21MZWZ0TGFiZWxcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidXgtc3BhcmstbGFiZWwtYm90dG9tLXJpZ2h0XCIgKm5nSWY9XCJib3R0b21SaWdodExhYmVsXCIgW2lubmVySHRtbF09XCJib3R0b21SaWdodExhYmVsXCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48IS0tIEVuZCBOb24gSW5saW5lIFNwYXJrIENoYXJ0IC0tPmAsXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3BhcmtDb21wb25lbnQge1xyXG5cclxuICAgIHZhbHVlczogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICBASW5wdXQoKSBiYXJIZWlnaHQ6IG51bWJlciA9IDEwO1xyXG4gICAgQElucHV0KCkgaW5saW5lTGFiZWw6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHRvcExlZnRMYWJlbDogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgdG9wUmlnaHRMYWJlbDogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgYm90dG9tTGVmdExhYmVsOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBib3R0b21SaWdodExhYmVsOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSB0b29sdGlwOiBzdHJpbmc7XHJcblxyXG4gICAgcHJpdmF0ZSBfdHJhY2tDb2xvcjogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfdGhlbWU6IENvbG9ySWRlbnRpZmllciA9ICdwcmltYXJ5JzsgICAgXHJcbiAgICBwcml2YXRlIF9iYXJDb2xvcjogc3RyaW5nIHwgc3RyaW5nW10gPSBbXTtcclxuICAgIFxyXG4gICAgQElucHV0KCkgXHJcbiAgICBzZXQgdGhlbWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3RoZW1lID0gdGhpcy5fY29sb3JTZXJ2aWNlLnJlc29sdmVDb2xvck5hbWUodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB0aGVtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90aGVtZTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKSBcclxuICAgIHNldCB0cmFja0NvbG9yKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl90cmFja0NvbG9yID0gdGhpcy5fY29sb3JTZXJ2aWNlLnJlc29sdmUodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB0cmFja0NvbG9yKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyYWNrQ29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KCkgXHJcbiAgICBzZXQgYmFyQ29sb3IodmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdKSB7XHJcblxyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9iYXJDb2xvciA9IHZhbHVlLm1hcChjb2xvciA9PiB0aGlzLl9jb2xvclNlcnZpY2UucmVzb2x2ZShjb2xvcikpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2JhckNvbG9yID0gW3RoaXMuX2NvbG9yU2VydmljZS5yZXNvbHZlKHZhbHVlKV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBiYXJDb2xvcigpOiBzdHJpbmcgfCBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JhckNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBzZXQgdmFsdWUodmFsdWU6IG51bWJlciB8IG51bWJlcltdKSB7XHJcblxyXG4gICAgICAgIC8vIGVuc3VyZSAndmFsdWUnIGlzIGFuIGFycmF5IGF0IHRoaXMgcG9pbnRcclxuICAgICAgICBjb25zdCB2YWx1ZXMgPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXTtcclxuXHJcbiAgICAgICAgLy8gZ2V0IHRoZSB0b3RhbCB2YWx1ZSBvZiBhbGwgbGluZXNcclxuICAgICAgICBjb25zdCB0b3RhbCA9IE1hdGgubWF4KHZhbHVlcy5yZWR1Y2UoKHByZXZpb3VzLCBjdXJyZW50KSA9PiBwcmV2aW91cyArIGN1cnJlbnQsIDApLCAxMDApO1xyXG5cclxuICAgICAgICAvLyBmaWd1cmUgb3V0IHRoZSBwZXJjZW50YWdlcyBmb3IgZWFjaCBzcGFyayBsaW5lXHJcbiAgICAgICAgdGhpcy52YWx1ZXMgPSB2YWx1ZXMubWFwKHZhbCA9PiAodmFsIC8gdG90YWwpICogMTAwKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdmFsdWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NvbG9yU2VydmljZTogQ29sb3JTZXJ2aWNlKSB7IH1cclxufSJdfQ==