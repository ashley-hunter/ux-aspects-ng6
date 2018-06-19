/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
export class ProgressBarComponent {
    constructor() {
        this.value = 0;
        this.max = 100;
        this.indeterminate = false;
    }
}
ProgressBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-progress-bar',
                template: `<div *ngIf="!indeterminate" class="progressbar-track" [style.width.%]="(value / max) * 100" [style.backgroundColor]="barColor">
    <ng-content></ng-content>
</div>
<div *ngIf="indeterminate" class="progressbar-track indeterminate" [style.backgroundColor]="barColor">
    <ng-content></ng-content>
</div>`,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
ProgressBarComponent.propDecorators = {
    "value": [{ type: Input },],
    "max": [{ type: Input },],
    "indeterminate": [{ type: Input },],
    "trackColor": [{ type: Input },],
    "barColor": [{ type: Input },],
};
function ProgressBarComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ProgressBarComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ProgressBarComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    ProgressBarComponent.propDecorators;
    /** @type {?} */
    ProgressBarComponent.prototype.value;
    /** @type {?} */
    ProgressBarComponent.prototype.max;
    /** @type {?} */
    ProgressBarComponent.prototype.indeterminate;
    /** @type {?} */
    ProgressBarComponent.prototype.trackColor;
    /** @type {?} */
    ProgressBarComponent.prototype.barColor;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVkxRSxNQUFNOztxQkFDdUIsQ0FBQzttQkFDSCxHQUFHOzZCQUNRLEtBQUs7Ozs7WUFiMUMsU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRTs7Ozs7T0FLUDtnQkFDSCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNsRDs7OztzQkFFSSxLQUFLO29CQUNMLEtBQUs7OEJBQ0wsS0FBSzsyQkFDTCxLQUFLO3lCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3V4LXByb2dyZXNzLWJhcicsXHJcbiAgICB0ZW1wbGF0ZTogYDxkaXYgKm5nSWY9XCIhaW5kZXRlcm1pbmF0ZVwiIGNsYXNzPVwicHJvZ3Jlc3NiYXItdHJhY2tcIiBbc3R5bGUud2lkdGguJV09XCIodmFsdWUgLyBtYXgpICogMTAwXCIgW3N0eWxlLmJhY2tncm91bmRDb2xvcl09XCJiYXJDb2xvclwiPlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5cclxuPGRpdiAqbmdJZj1cImluZGV0ZXJtaW5hdGVcIiBjbGFzcz1cInByb2dyZXNzYmFyLXRyYWNrIGluZGV0ZXJtaW5hdGVcIiBbc3R5bGUuYmFja2dyb3VuZENvbG9yXT1cImJhckNvbG9yXCI+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PmAsXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NCYXJDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgdmFsdWU6IG51bWJlciA9IDA7XHJcbiAgICBASW5wdXQoKSBtYXg6IG51bWJlciA9IDEwMDtcclxuICAgIEBJbnB1dCgpIGluZGV0ZXJtaW5hdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHRyYWNrQ29sb3I6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGJhckNvbG9yOiBzdHJpbmc7XHJcbn1cclxuIl19