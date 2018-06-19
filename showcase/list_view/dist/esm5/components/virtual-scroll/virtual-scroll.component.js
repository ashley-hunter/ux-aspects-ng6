/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter, Output, Input, HostListener, ElementRef, ContentChild, TemplateRef } from '@angular/core';
import { ResizeService } from '../../directives/resize/index';
import { VirtualScrollLoadingDirective } from './directives/virtual-scroll-loading.directive';
import { VirtualScrollLoadButtonDirective } from './directives/virtual-scroll-load-button.directive';
import { VirtualScrollCellDirective } from './directives/virtual-scroll-cell.directive';
import { BehaviorSubject, Observable } from 'rxjs';
var VirtualScrollComponent = /** @class */ (function () {
    function VirtualScrollComponent(_elementRef, resizeService) {
        var _this = this;
        this._elementRef = _elementRef;
        this.collection = Observable.create();
        this.loadOnScroll = true;
        this.loading = new EventEmitter();
        this.cells = new BehaviorSubject([]);
        this.scrollTop = 0;
        this.isLoading = false;
        this.pageNumber = 0;
        this.data = [];
        this.loadingComplete = false;
        // watch for any future changes to size
        resizeService.addResizeListener(_elementRef.nativeElement).subscribe(function (event) { return _this._height = event.height; });
    }
    /**
     * @return {?}
     */
    VirtualScrollComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.cellHeight) {
            throw new Error('Virtual Scroll Component requires "cellHeight" property to be defined.');
        }
        // subscribe to the collection
        this.setupObservable();
        // load the first page of data
        this.loadNextPage();
    };
    /**
     * @return {?}
     */
    VirtualScrollComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        // re-render cells now that we can display any loading indicator or loading button
        this.renderCells();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    VirtualScrollComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["collection"] && changes["collection"].currentValue !== changes["collection"].previousValue && !changes["collection"].isFirstChange()) {
            this.setupObservable();
            this.reset();
        }
    };
    /**
     * @return {?}
     */
    VirtualScrollComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    VirtualScrollComponent.prototype.setupObservable = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // if there is a current subscription, unsubscribe
        if (this._subscription && this._subscription.unsubscribe) {
            this._subscription.unsubscribe();
        }
        this._subscription = this.collection.subscribe(function (collection) {
            (_a = _this.data).push.apply(_a, tslib_1.__spread(collection));
            _this.renderCells();
            _this.isLoading = false;
            var _a;
        }, null, function () {
            _this.loadingComplete = true;
        });
    };
    /**
     * @return {?}
     */
    VirtualScrollComponent.prototype.renderCells = /**
     * @return {?}
     */
    function () {
        this.cells.next(this.getVisibleCells());
        if (this.loadOnScroll && !this.isLoading && !this.loadingComplete) {
            var /** @type {?} */ remainingScroll = this._elementRef.nativeElement.scrollHeight - (this._elementRef.nativeElement.scrollTop + this._elementRef.nativeElement.clientHeight);
            // if the current cells take up less than the height of the component then load the next page
            if (remainingScroll <= this._elementRef.nativeElement.clientHeight) {
                this.loadNextPage();
            }
        }
    };
    /**
     * @return {?}
     */
    VirtualScrollComponent.prototype.getVisibleCells = /**
     * @return {?}
     */
    function () {
        // store the initial element height
        if (!this._height) {
            this._height = this._elementRef.nativeElement.offsetHeight;
        }
        // perform some calculations
        var /** @type {?} */ scrollTop = this._elementRef.nativeElement.scrollTop;
        var /** @type {?} */ startCell = Math.floor(scrollTop / this.cellHeight);
        var /** @type {?} */ endCell = Math.ceil(this._height / this.cellHeight) + 1;
        // update the scroll position
        this.scrollTop = scrollTop - (scrollTop % this.cellHeight);
        // return a sublist of items visible on the screen
        return this.data.slice(startCell, startCell + endCell);
    };
    /**
     * @return {?}
     */
    VirtualScrollComponent.prototype.getTotalHeight = /**
     * @return {?}
     */
    function () {
        return this.cellHeight * this.data.length;
    };
    /**
     * @return {?}
     */
    VirtualScrollComponent.prototype.loadNextPage = /**
     * @return {?}
     */
    function () {
        this.isLoading = true;
        this.loading.next(this.pageNumber);
        this.pageNumber++;
    };
    /**
     * @return {?}
     */
    VirtualScrollComponent.prototype.reset = /**
     * @return {?}
     */
    function () {
        // reset all values
        this.scrollTop = 0;
        this.data = [];
        this._height = undefined;
        this.pageNumber = 0;
        this.loadingComplete = false;
        // set scroll position
        this._elementRef.nativeElement.scrollTop = 0;
        // clear the current cells
        this.renderCells();
        // reload first page
        this.loadNextPage();
    };
    VirtualScrollComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-virtual-scroll',
                    template: "<div class=\"virtual-scroll-content-height\" [style.height.px]=\"getTotalHeight()\"></div>\n<div class=\"virtual-scroll-content\" [style.transform]=\"'translateY(' + scrollTop + 'px)'\">\n\n    <!-- Virtually Render Cells -->\n    <ng-container *ngFor=\"let cell of cells | async\">\n        <ng-container *ngTemplateOutlet=\"cellTemplate; context: { cell: cell }\"></ng-container>\n    </ng-container>\n\n    <!-- Loading Indicator -->\n    <ng-container *ngIf=\"loadingIndicatorTemplate && isLoading\" [ngTemplateOutlet]=\"loadingIndicatorTemplate\"></ng-container>\n\n    <!-- Loading Button -->\n    <div class=\"virtual-scroll-load-button\" *ngIf=\"loadButtonTemplate && !loadOnScroll && !loadingComplete && !isLoading\" (click)=\"loadNextPage()\">\n        <ng-container *ngTemplateOutlet=\"loadButtonTemplate\"></ng-container>\n    </div>\n    \n</div>"
                },] },
    ];
    /** @nocollapse */
    VirtualScrollComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: ResizeService, },
    ]; };
    VirtualScrollComponent.propDecorators = {
        "collection": [{ type: Input },],
        "cellHeight": [{ type: Input },],
        "loadOnScroll": [{ type: Input },],
        "loading": [{ type: Output },],
        "cellTemplate": [{ type: ContentChild, args: [VirtualScrollCellDirective, { read: TemplateRef },] },],
        "loadingIndicatorTemplate": [{ type: ContentChild, args: [VirtualScrollLoadingDirective, { read: TemplateRef },] },],
        "loadButtonTemplate": [{ type: ContentChild, args: [VirtualScrollLoadButtonDirective, { read: TemplateRef },] },],
        "renderCells": [{ type: HostListener, args: ['scroll',] },],
    };
    return VirtualScrollComponent;
}());
export { VirtualScrollComponent };
function VirtualScrollComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    VirtualScrollComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    VirtualScrollComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    VirtualScrollComponent.propDecorators;
    /** @type {?} */
    VirtualScrollComponent.prototype.collection;
    /** @type {?} */
    VirtualScrollComponent.prototype.cellHeight;
    /** @type {?} */
    VirtualScrollComponent.prototype.loadOnScroll;
    /** @type {?} */
    VirtualScrollComponent.prototype.loading;
    /** @type {?} */
    VirtualScrollComponent.prototype.cellTemplate;
    /** @type {?} */
    VirtualScrollComponent.prototype.loadingIndicatorTemplate;
    /** @type {?} */
    VirtualScrollComponent.prototype.loadButtonTemplate;
    /** @type {?} */
    VirtualScrollComponent.prototype.cells;
    /** @type {?} */
    VirtualScrollComponent.prototype.scrollTop;
    /** @type {?} */
    VirtualScrollComponent.prototype.isLoading;
    /** @type {?} */
    VirtualScrollComponent.prototype.pageNumber;
    /** @type {?} */
    VirtualScrollComponent.prototype.data;
    /** @type {?} */
    VirtualScrollComponent.prototype.loadingComplete;
    /** @type {?} */
    VirtualScrollComponent.prototype._subscription;
    /** @type {?} */
    VirtualScrollComponent.prototype._height;
    /** @type {?} */
    VirtualScrollComponent.prototype._elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlydHVhbC1zY3JvbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdmlydHVhbC1zY3JvbGwvdmlydHVhbC1zY3JvbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxZQUFZLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFvQixZQUFZLEVBQUUsV0FBVyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUNoTCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDOUQsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDOUYsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDckcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDeEYsT0FBTyxFQUFFLGVBQWUsRUFBSSxVQUFVLEVBQWtCLE1BQU0sTUFBTSxDQUFDOztJQTRDakUsZ0NBQW9CLFdBQXVCLEVBQUUsYUFBNEI7UUFBekUsaUJBSUM7UUFKbUIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7MEJBcEJGLFVBQVUsQ0FBQyxNQUFNLEVBQUU7NEJBRTNCLElBQUk7dUJBRUssSUFBSSxZQUFZLEVBQVU7cUJBTXBDLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQzt5QkFDbkMsQ0FBQzt5QkFDQSxLQUFLOzBCQUNMLENBQUM7b0JBQ1IsRUFBRTsrQkFDVyxLQUFLOztRQVE1QixhQUFhLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBM0IsQ0FBMkIsQ0FBQyxDQUFDO0tBQzlHOzs7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QUFNO2lDQUVOLFlBQVksU0FBQywwQkFBMEIsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7NkNBQzlELFlBQVksU0FBQyw2QkFBNkIsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7dUNBQ2pFLFlBQVksU0FBQyxnQ0FBZ0MsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7Z0NBK0RwRSxZQUFZLFNBQUMsUUFBUTs7aUNBcEcxQjs7U0EyQmEsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBJbnB1dCwgSG9zdExpc3RlbmVyLCBFbGVtZW50UmVmLCBBZnRlckNvbnRlbnRJbml0LCBDb250ZW50Q2hpbGQsIFRlbXBsYXRlUmVmLCBPbkRlc3Ryb3ksIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVzaXplU2VydmljZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvcmVzaXplL2luZGV4JztcclxuaW1wb3J0IHsgVmlydHVhbFNjcm9sbExvYWRpbmdEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvdmlydHVhbC1zY3JvbGwtbG9hZGluZy5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBWaXJ0dWFsU2Nyb2xsTG9hZEJ1dHRvbkRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy92aXJ0dWFsLXNjcm9sbC1sb2FkLWJ1dHRvbi5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBWaXJ0dWFsU2Nyb2xsQ2VsbERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy92aXJ0dWFsLXNjcm9sbC1jZWxsLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCAsICBPYnNlcnZhYmxlICwgIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3V4LXZpcnR1YWwtc2Nyb2xsJyxcclxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInZpcnR1YWwtc2Nyb2xsLWNvbnRlbnQtaGVpZ2h0XCIgW3N0eWxlLmhlaWdodC5weF09XCJnZXRUb3RhbEhlaWdodCgpXCI+PC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJ2aXJ0dWFsLXNjcm9sbC1jb250ZW50XCIgW3N0eWxlLnRyYW5zZm9ybV09XCIndHJhbnNsYXRlWSgnICsgc2Nyb2xsVG9wICsgJ3B4KSdcIj5cclxuXHJcbiAgICA8IS0tIFZpcnR1YWxseSBSZW5kZXIgQ2VsbHMgLS0+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBjZWxsIG9mIGNlbGxzIHwgYXN5bmNcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY2VsbFRlbXBsYXRlOyBjb250ZXh0OiB7IGNlbGw6IGNlbGwgfVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPCEtLSBMb2FkaW5nIEluZGljYXRvciAtLT5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJsb2FkaW5nSW5kaWNhdG9yVGVtcGxhdGUgJiYgaXNMb2FkaW5nXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwibG9hZGluZ0luZGljYXRvclRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPCEtLSBMb2FkaW5nIEJ1dHRvbiAtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJ2aXJ0dWFsLXNjcm9sbC1sb2FkLWJ1dHRvblwiICpuZ0lmPVwibG9hZEJ1dHRvblRlbXBsYXRlICYmICFsb2FkT25TY3JvbGwgJiYgIWxvYWRpbmdDb21wbGV0ZSAmJiAhaXNMb2FkaW5nXCIgKGNsaWNrKT1cImxvYWROZXh0UGFnZSgpXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImxvYWRCdXR0b25UZW1wbGF0ZVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgICBcclxuPC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVmlydHVhbFNjcm9sbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgICBASW5wdXQoKSBjb2xsZWN0aW9uOiBPYnNlcnZhYmxlPGFueVtdPiA9IE9ic2VydmFibGUuY3JlYXRlKCk7XHJcbiAgICBASW5wdXQoKSBjZWxsSGVpZ2h0OiBudW1iZXI7XHJcbiAgICBASW5wdXQoKSBsb2FkT25TY3JvbGw6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIEBPdXRwdXQoKSBsb2FkaW5nOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG5cclxuICAgIEBDb250ZW50Q2hpbGQoVmlydHVhbFNjcm9sbENlbGxEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgY2VsbFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gICAgQENvbnRlbnRDaGlsZChWaXJ0dWFsU2Nyb2xsTG9hZGluZ0RpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSBsb2FkaW5nSW5kaWNhdG9yVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgICBAQ29udGVudENoaWxkKFZpcnR1YWxTY3JvbGxMb2FkQnV0dG9uRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pIGxvYWRCdXR0b25UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgICBjZWxsczogQmVoYXZpb3JTdWJqZWN0PGFueVtdPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xyXG4gICAgc2Nyb2xsVG9wOiBudW1iZXIgPSAwO1xyXG4gICAgaXNMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwYWdlTnVtYmVyOiBudW1iZXIgPSAwO1xyXG4gICAgZGF0YTogYW55W10gPSBbXTtcclxuICAgIGxvYWRpbmdDb21wbGV0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX3N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gICAgcHJpdmF0ZSBfaGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcmVzaXplU2VydmljZTogUmVzaXplU2VydmljZSkge1xyXG5cclxuICAgICAgICAvLyB3YXRjaCBmb3IgYW55IGZ1dHVyZSBjaGFuZ2VzIHRvIHNpemVcclxuICAgICAgICByZXNpemVTZXJ2aWNlLmFkZFJlc2l6ZUxpc3RlbmVyKF9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLnN1YnNjcmliZShldmVudCA9PiB0aGlzLl9oZWlnaHQgPSBldmVudC5oZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuY2VsbEhlaWdodCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1ZpcnR1YWwgU2Nyb2xsIENvbXBvbmVudCByZXF1aXJlcyBcImNlbGxIZWlnaHRcIiBwcm9wZXJ0eSB0byBiZSBkZWZpbmVkLicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc3Vic2NyaWJlIHRvIHRoZSBjb2xsZWN0aW9uXHJcbiAgICAgICAgdGhpcy5zZXR1cE9ic2VydmFibGUoKTtcclxuXHJcbiAgICAgICAgLy8gbG9hZCB0aGUgZmlyc3QgcGFnZSBvZiBkYXRhXHJcbiAgICAgICAgdGhpcy5sb2FkTmV4dFBhZ2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gcmUtcmVuZGVyIGNlbGxzIG5vdyB0aGF0IHdlIGNhbiBkaXNwbGF5IGFueSBsb2FkaW5nIGluZGljYXRvciBvciBsb2FkaW5nIGJ1dHRvblxyXG4gICAgICAgIHRoaXMucmVuZGVyQ2VsbHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNoYW5nZXMuY29sbGVjdGlvbiAmJiBjaGFuZ2VzLmNvbGxlY3Rpb24uY3VycmVudFZhbHVlICE9PSBjaGFuZ2VzLmNvbGxlY3Rpb24ucHJldmlvdXNWYWx1ZSAmJiAhY2hhbmdlcy5jb2xsZWN0aW9uLmlzRmlyc3RDaGFuZ2UoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldHVwT2JzZXJ2YWJsZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldHVwT2JzZXJ2YWJsZSgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgYSBjdXJyZW50IHN1YnNjcmlwdGlvbiwgdW5zdWJzY3JpYmVcclxuICAgICAgICBpZiAodGhpcy5fc3Vic2NyaXB0aW9uICYmIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMuY29sbGVjdGlvbi5zdWJzY3JpYmUoY29sbGVjdGlvbiA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5wdXNoKC4uLmNvbGxlY3Rpb24pO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlckNlbGxzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSwgbnVsbCwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdDb21wbGV0ZSA9IHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignc2Nyb2xsJykgcmVuZGVyQ2VsbHMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jZWxscy5uZXh0KHRoaXMuZ2V0VmlzaWJsZUNlbGxzKCkpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5sb2FkT25TY3JvbGwgJiYgIXRoaXMuaXNMb2FkaW5nICYmICF0aGlzLmxvYWRpbmdDb21wbGV0ZSkge1xyXG4gICAgICAgICAgICBjb25zdCByZW1haW5pbmdTY3JvbGwgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgKyB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIGlmIHRoZSBjdXJyZW50IGNlbGxzIHRha2UgdXAgbGVzcyB0aGFuIHRoZSBoZWlnaHQgb2YgdGhlIGNvbXBvbmVudCB0aGVuIGxvYWQgdGhlIG5leHQgcGFnZVxyXG4gICAgICAgICAgICBpZiAocmVtYWluaW5nU2Nyb2xsIDw9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZE5leHRQYWdlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VmlzaWJsZUNlbGxzKCk6IGFueVtdIHtcclxuXHJcbiAgICAgICAgLy8gc3RvcmUgdGhlIGluaXRpYWwgZWxlbWVudCBoZWlnaHRcclxuICAgICAgICBpZiAoIXRoaXMuX2hlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLl9oZWlnaHQgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcGVyZm9ybSBzb21lIGNhbGN1bGF0aW9uc1xyXG4gICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRDZWxsID0gTWF0aC5mbG9vcihzY3JvbGxUb3AgLyB0aGlzLmNlbGxIZWlnaHQpO1xyXG4gICAgICAgIGNvbnN0IGVuZENlbGwgPSBNYXRoLmNlaWwodGhpcy5faGVpZ2h0IC8gdGhpcy5jZWxsSGVpZ2h0KSArIDE7XHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgc2Nyb2xsIHBvc2l0aW9uXHJcbiAgICAgICAgdGhpcy5zY3JvbGxUb3AgPSBzY3JvbGxUb3AgLSAoc2Nyb2xsVG9wICUgdGhpcy5jZWxsSGVpZ2h0KTtcclxuXHJcbiAgICAgICAgLy8gcmV0dXJuIGEgc3VibGlzdCBvZiBpdGVtcyB2aXNpYmxlIG9uIHRoZSBzY3JlZW5cclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLnNsaWNlKHN0YXJ0Q2VsbCwgc3RhcnRDZWxsICsgZW5kQ2VsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VG90YWxIZWlnaHQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jZWxsSGVpZ2h0ICogdGhpcy5kYXRhLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkTmV4dFBhZ2UoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubG9hZGluZy5uZXh0KHRoaXMucGFnZU51bWJlcik7XHJcbiAgICAgICAgdGhpcy5wYWdlTnVtYmVyKys7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXQoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIC8vIHJlc2V0IGFsbCB2YWx1ZXNcclxuICAgICAgICB0aGlzLnNjcm9sbFRvcCA9IDA7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gW107XHJcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMucGFnZU51bWJlciA9IDA7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nQ29tcGxldGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gc2V0IHNjcm9sbCBwb3NpdGlvblxyXG4gICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgPSAwO1xyXG5cclxuICAgICAgICAvLyBjbGVhciB0aGUgY3VycmVudCBjZWxsc1xyXG4gICAgICAgIHRoaXMucmVuZGVyQ2VsbHMoKTtcclxuXHJcbiAgICAgICAgLy8gcmVsb2FkIGZpcnN0IHBhZ2VcclxuICAgICAgICB0aGlzLmxvYWROZXh0UGFnZSgpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==