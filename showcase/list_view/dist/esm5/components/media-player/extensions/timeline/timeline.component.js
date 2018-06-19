/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { MediaPlayerBaseExtensionDirective } from '../base-extension.directive';
var MediaPlayerTimelineExtensionComponent = /** @class */ (function (_super) {
    tslib_1.__extends(MediaPlayerTimelineExtensionComponent, _super);
    function MediaPlayerTimelineExtensionComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.current = 0;
        _this.position = 0;
        _this.duration = 0;
        _this.buffered = [];
        _this.mouseDown = false;
        _this.quietMode = false;
        _this.fullscreen = false;
        _this.scrub = { visible: false, position: 0, time: 0 };
        _this._onDestroy = new Subject();
        return _this;
    }
    /**
     * @return {?}
     */
    MediaPlayerTimelineExtensionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // watch for changes to the current time
        this.mediaPlayerService.durationChangeEvent.pipe(takeUntil(this._onDestroy)).subscribe(function (duration) { return _this.duration = duration; });
        this.mediaPlayerService.quietModeEvent.pipe(takeUntil(this._onDestroy)).subscribe(function (quietMode) { return _this.quietMode = quietMode; });
        this.mediaPlayerService.fullscreenEvent.pipe(takeUntil(this._onDestroy)).subscribe(function (fullscreen) {
            _this.fullscreen = fullscreen;
            _this.scrub.position = 0;
        });
        this.mediaPlayerService.timeUpdateEvent.pipe(takeUntil(this._onDestroy)).subscribe(function (current) {
            _this.current = current;
            _this.position = (_this.current / _this.duration) * 100;
        });
        this.mediaPlayerService.progressEvent.pipe(takeUntil(this._onDestroy)).subscribe(function (buffered) {
            _this.buffered = [];
            for (var /** @type {?} */ idx = 0; idx < buffered.length; idx++) {
                _this.buffered.push({ start: (buffered.start(idx) / _this.duration) * 100, end: (buffered.end(idx) / _this.duration) * 100 });
            }
        });
    };
    /**
     * @return {?}
     */
    MediaPlayerTimelineExtensionComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ mousedown$ = fromEvent(this.thumb.nativeElement, 'mousedown');
        var /** @type {?} */ mousemove$ = fromEvent(document, 'mousemove');
        var /** @type {?} */ mouseup$ = fromEvent(document, 'mouseup');
        mousedown$.pipe(switchMap(function () { return mousemove$.pipe(takeUntil(mouseup$)); }), takeUntil(this._onDestroy)).subscribe(function () { return _this.scrub.visible = false; });
    };
    /**
     * @return {?}
     */
    MediaPlayerTimelineExtensionComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._onDestroy.next();
        this._onDestroy.complete();
    };
    /**
     * @param {?=} event
     * @return {?}
     */
    MediaPlayerTimelineExtensionComponent.prototype.updateScrub = /**
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        var /** @type {?} */ target = /** @type {?} */ (event.target);
        if (target.classList.contains('media-progress-bar-thumb')) {
            return;
        }
        var /** @type {?} */ timeline = /** @type {?} */ (this.timelineRef.nativeElement);
        var /** @type {?} */ bounds = timeline.getBoundingClientRect();
        this.scrub.position = event.offsetX;
        this.scrub.time = (event.offsetX / bounds.width) * this.mediaPlayerService.duration;
        if (this.mouseDown) {
            this.mediaPlayerService.pause();
            this.mediaPlayerService.currentTime = this.scrub.time;
        }
    };
    MediaPlayerTimelineExtensionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-media-player-timeline',
                    template: "<p class=\"current-time\">{{ current | duration }}</p>\n\n<div #timeline class=\"timeline-bar\" (mouseenter)=\"scrub.visible = true; pop.show()\" (mouseleave)=\"scrub.visible = false; pop.hide()\"\n    (mousemove)=\"updateScrub($event)\" (mouseup)=\"updateScrub($event)\" (mousedown)=\"mouseDown = true; $event.preventDefault()\">\n\n    <div class=\"buffered-bar\" *ngFor=\"let buffer of buffered\" [style.left.%]=\"buffer.start\" [style.width.%]=\"buffer.end - buffer.start\"></div>\n\n    <div class=\"media-progress-bar\" [style.width.%]=\"position\">\n        <div #progressThumb class=\"media-progress-bar-thumb\" (mouseenter)=\"scrub.visible = false; pop.hide(); $event.stopPropagation()\"\n            (mouseleave)=\"scrub.visible = true; pop.show(); $event.stopPropagation()\"></div>\n    </div>\n\n    <div class=\"scrub-handle\"\n         [class.scrub-handle-hidden]=\"!scrub.visible\"\n         [style.left.px]=\"scrub.position\"\n         [uxTooltip]=\"popTemplate\"\n         placement=\"top\"\n         [showTriggers]=\"[]\"\n         [hideTriggers]=\"[]\"\n         #pop=\"ux-tooltip\"\n         [tooltipDelay]=\"100\"\n         [tooltipDisabled]=\"duration === 0\"></div>\n</div>\n\n<p class=\"duration-time\">{{ duration | duration }}</p>\n\n<ng-template #popTemplate>\n    <span>{{ scrub.time | duration }}</span>\n</ng-template>",
                    host: {
                        '(document:mouseup)': 'mouseDown = false',
                        '[class.quiet]': 'quietMode || fullscreen'
                    }
                },] },
    ];
    /** @nocollapse */
    MediaPlayerTimelineExtensionComponent.propDecorators = {
        "thumb": [{ type: ViewChild, args: ['progressThumb',] },],
        "timelineRef": [{ type: ViewChild, args: ['timeline',] },],
    };
    return MediaPlayerTimelineExtensionComponent;
}(MediaPlayerBaseExtensionDirective));
export { MediaPlayerTimelineExtensionComponent };
function MediaPlayerTimelineExtensionComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MediaPlayerTimelineExtensionComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MediaPlayerTimelineExtensionComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MediaPlayerTimelineExtensionComponent.propDecorators;
    /** @type {?} */
    MediaPlayerTimelineExtensionComponent.prototype.thumb;
    /** @type {?} */
    MediaPlayerTimelineExtensionComponent.prototype.timelineRef;
    /** @type {?} */
    MediaPlayerTimelineExtensionComponent.prototype.current;
    /** @type {?} */
    MediaPlayerTimelineExtensionComponent.prototype.position;
    /** @type {?} */
    MediaPlayerTimelineExtensionComponent.prototype.duration;
    /** @type {?} */
    MediaPlayerTimelineExtensionComponent.prototype.buffered;
    /** @type {?} */
    MediaPlayerTimelineExtensionComponent.prototype.mouseDown;
    /** @type {?} */
    MediaPlayerTimelineExtensionComponent.prototype.quietMode;
    /** @type {?} */
    MediaPlayerTimelineExtensionComponent.prototype.fullscreen;
    /** @type {?} */
    MediaPlayerTimelineExtensionComponent.prototype.scrub;
    /** @type {?} */
    MediaPlayerTimelineExtensionComponent.prototype._onDestroy;
}
/**
 * @record
 */
export function MediaPlayerBuffered() { }
function MediaPlayerBuffered_tsickle_Closure_declarations() {
    /** @type {?} */
    MediaPlayerBuffered.prototype.start;
    /** @type {?} */
    MediaPlayerBuffered.prototype.end;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWVkaWEtcGxheWVyL2V4dGVuc2lvbnMvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFxQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkcsT0FBTyxFQUFFLFNBQVMsRUFBSSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDNUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7SUF1Q3JCLGlFQUFpQzs7O3dCQUt0RSxDQUFDO3lCQUNBLENBQUM7eUJBQ0QsQ0FBQzt5QkFDYyxFQUFFOzBCQUNmLEtBQUs7MEJBQ0wsS0FBSzsyQkFDSixLQUFLO3NCQUNuQixFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFOzJCQUUzQixJQUFJLE9BQU8sRUFBUTs7Ozs7O0lBRXhDLHdEQUFROzs7SUFBUjtRQUFBLGlCQXNCQzs7UUFuQkcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLEVBQXhCLENBQXdCLENBQUMsQ0FBQztRQUM3SCxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVB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K0IsQ0FBQSxDQUFDO1FBQ2xFLHFCQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUVoRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQztRQUVwRixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztTQUN6RDtLQUNKOztnQkE5R0osU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLFFBQVEsRUFBRSxzMENBNEJDO29CQUNYLElBQUksRUFBRTt3QkFDRixvQkFBb0IsRUFBRSxtQkFBbUI7d0JBQ3pDLGVBQWUsRUFBRSx5QkFBeUI7cUJBQzdDO2lCQUNKOzs7OzBCQUdJLFNBQVMsU0FBQyxlQUFlO2dDQUN6QixTQUFTLFNBQUMsVUFBVTs7Z0RBN0N6QjtFQTBDMkQsaUNBQWlDO1NBQS9FLHFDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQgLCAgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBzd2l0Y2hNYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTWVkaWFQbGF5ZXJCYXNlRXh0ZW5zaW9uRGlyZWN0aXZlIH0gZnJvbSAnLi4vYmFzZS1leHRlbnNpb24uZGlyZWN0aXZlJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndXgtbWVkaWEtcGxheWVyLXRpbWVsaW5lJyxcclxuICAgIHRlbXBsYXRlOiBgPHAgY2xhc3M9XCJjdXJyZW50LXRpbWVcIj57eyBjdXJyZW50IHwgZHVyYXRpb24gfX08L3A+XHJcblxyXG48ZGl2ICN0aW1lbGluZSBjbGFzcz1cInRpbWVsaW5lLWJhclwiIChtb3VzZWVudGVyKT1cInNjcnViLnZpc2libGUgPSB0cnVlOyBwb3Auc2hvdygpXCIgKG1vdXNlbGVhdmUpPVwic2NydWIudmlzaWJsZSA9IGZhbHNlOyBwb3AuaGlkZSgpXCJcclxuICAgIChtb3VzZW1vdmUpPVwidXBkYXRlU2NydWIoJGV2ZW50KVwiIChtb3VzZXVwKT1cInVwZGF0ZVNjcnViKCRldmVudClcIiAobW91c2Vkb3duKT1cIm1vdXNlRG93biA9IHRydWU7ICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCI+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImJ1ZmZlcmVkLWJhclwiICpuZ0Zvcj1cImxldCBidWZmZXIgb2YgYnVmZmVyZWRcIiBbc3R5bGUubGVmdC4lXT1cImJ1ZmZlci5zdGFydFwiIFtzdHlsZS53aWR0aC4lXT1cImJ1ZmZlci5lbmQgLSBidWZmZXIuc3RhcnRcIj48L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwibWVkaWEtcHJvZ3Jlc3MtYmFyXCIgW3N0eWxlLndpZHRoLiVdPVwicG9zaXRpb25cIj5cclxuICAgICAgICA8ZGl2ICNwcm9ncmVzc1RodW1iIGNsYXNzPVwibWVkaWEtcHJvZ3Jlc3MtYmFyLXRodW1iXCIgKG1vdXNlZW50ZXIpPVwic2NydWIudmlzaWJsZSA9IGZhbHNlOyBwb3AuaGlkZSgpOyAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIlxyXG4gICAgICAgICAgICAobW91c2VsZWF2ZSk9XCJzY3J1Yi52aXNpYmxlID0gdHJ1ZTsgcG9wLnNob3coKTsgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwic2NydWItaGFuZGxlXCJcclxuICAgICAgICAgW2NsYXNzLnNjcnViLWhhbmRsZS1oaWRkZW5dPVwiIXNjcnViLnZpc2libGVcIlxyXG4gICAgICAgICBbc3R5bGUubGVmdC5weF09XCJzY3J1Yi5wb3NpdGlvblwiXHJcbiAgICAgICAgIFt1eFRvb2x0aXBdPVwicG9wVGVtcGxhdGVcIlxyXG4gICAgICAgICBwbGFjZW1lbnQ9XCJ0b3BcIlxyXG4gICAgICAgICBbc2hvd1RyaWdnZXJzXT1cIltdXCJcclxuICAgICAgICAgW2hpZGVUcmlnZ2Vyc109XCJbXVwiXHJcbiAgICAgICAgICNwb3A9XCJ1eC10b29sdGlwXCJcclxuICAgICAgICAgW3Rvb2x0aXBEZWxheV09XCIxMDBcIlxyXG4gICAgICAgICBbdG9vbHRpcERpc2FibGVkXT1cImR1cmF0aW9uID09PSAwXCI+PC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPHAgY2xhc3M9XCJkdXJhdGlvbi10aW1lXCI+e3sgZHVyYXRpb24gfCBkdXJhdGlvbiB9fTwvcD5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjcG9wVGVtcGxhdGU+XHJcbiAgICA8c3Bhbj57eyBzY3J1Yi50aW1lIHwgZHVyYXRpb24gfX08L3NwYW4+XHJcbjwvbmctdGVtcGxhdGU+YCxcclxuICAgIGhvc3Q6IHtcclxuICAgICAgICAnKGRvY3VtZW50Om1vdXNldXApJzogJ21vdXNlRG93biA9IGZhbHNlJyxcclxuICAgICAgICAnW2NsYXNzLnF1aWV0XSc6ICdxdWlldE1vZGUgfHwgZnVsbHNjcmVlbidcclxuICAgIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1lZGlhUGxheWVyVGltZWxpbmVFeHRlbnNpb25Db21wb25lbnQgZXh0ZW5kcyBNZWRpYVBsYXllckJhc2VFeHRlbnNpb25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gICAgQFZpZXdDaGlsZCgncHJvZ3Jlc3NUaHVtYicpIHRodW1iOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZCgndGltZWxpbmUnKSB0aW1lbGluZVJlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgICBjdXJyZW50OiBudW1iZXIgPSAwO1xyXG4gICAgcG9zaXRpb246IG51bWJlciA9IDA7XHJcbiAgICBkdXJhdGlvbjogbnVtYmVyID0gMDtcclxuICAgIGJ1ZmZlcmVkOiBNZWRpYVBsYXllckJ1ZmZlcmVkW10gPSBbXTtcclxuICAgIG1vdXNlRG93bjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcXVpZXRNb2RlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBmdWxsc2NyZWVuOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzY3J1YiA9IHsgdmlzaWJsZTogZmFsc2UsIHBvc2l0aW9uOiAwLCB0aW1lOiAwIH07XHJcblxyXG4gICAgcHJpdmF0ZSBfb25EZXN0cm95ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gd2F0Y2ggZm9yIGNoYW5nZXMgdG8gdGhlIGN1cnJlbnQgdGltZVxyXG4gICAgICAgIHRoaXMubWVkaWFQbGF5ZXJTZXJ2aWNlLmR1cmF0aW9uQ2hhbmdlRXZlbnQucGlwZSh0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KSkuc3Vic2NyaWJlKGR1cmF0aW9uID0+IHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbik7XHJcbiAgICAgICAgdGhpcy5tZWRpYVBsYXllclNlcnZpY2UucXVpZXRNb2RlRXZlbnQucGlwZSh0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KSkuc3Vic2NyaWJlKHF1aWV0TW9kZSA9PiB0aGlzLnF1aWV0TW9kZSA9IHF1aWV0TW9kZSk7XHJcbiAgICAgICAgdGhpcy5tZWRpYVBsYXllclNlcnZpY2UuZnVsbHNjcmVlbkV2ZW50LnBpcGUodGFrZVVudGlsKHRoaXMuX29uRGVzdHJveSkpLnN1YnNjcmliZShmdWxsc2NyZWVuID0+IHtcclxuICAgICAgICAgICAgdGhpcy5mdWxsc2NyZWVuID0gZnVsbHNjcmVlbjtcclxuICAgICAgICAgICAgdGhpcy5zY3J1Yi5wb3NpdGlvbiA9IDA7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubWVkaWFQbGF5ZXJTZXJ2aWNlLnRpbWVVcGRhdGVFdmVudC5waXBlKHRha2VVbnRpbCh0aGlzLl9vbkRlc3Ryb3kpKS5zdWJzY3JpYmUoY3VycmVudCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IGN1cnJlbnQ7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSAodGhpcy5jdXJyZW50IC8gdGhpcy5kdXJhdGlvbikgKiAxMDA7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubWVkaWFQbGF5ZXJTZXJ2aWNlLnByb2dyZXNzRXZlbnQucGlwZSh0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KSkuc3Vic2NyaWJlKChidWZmZXJlZDogVGltZVJhbmdlcykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJ1ZmZlcmVkID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpZHggPSAwOyBpZHggPCBidWZmZXJlZC5sZW5ndGg7IGlkeCsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1ZmZlcmVkLnB1c2goeyBzdGFydDogKGJ1ZmZlcmVkLnN0YXJ0KGlkeCkgLyB0aGlzLmR1cmF0aW9uKSAqIDEwMCwgZW5kOiAoYnVmZmVyZWQuZW5kKGlkeCkgLyB0aGlzLmR1cmF0aW9uKSAqIDEwMCB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBtb3VzZWRvd24kID0gZnJvbUV2ZW50KHRoaXMudGh1bWIubmF0aXZlRWxlbWVudCwgJ21vdXNlZG93bicpO1xyXG4gICAgICAgIGNvbnN0IG1vdXNlbW92ZSQgPSBmcm9tRXZlbnQoZG9jdW1lbnQsICdtb3VzZW1vdmUnKTtcclxuICAgICAgICBjb25zdCBtb3VzZXVwJCA9IGZyb21FdmVudChkb2N1bWVudCwgJ21vdXNldXAnKTtcclxuXHJcbiAgICAgICAgbW91c2Vkb3duJC5waXBlKFxyXG4gICAgICAgICAgICBzd2l0Y2hNYXAoKCkgPT4gbW91c2Vtb3ZlJC5waXBlKHRha2VVbnRpbChtb3VzZXVwJCkpKSxcclxuICAgICAgICAgICAgdGFrZVVudGlsKHRoaXMuX29uRGVzdHJveSlcclxuICAgICAgICApLnN1YnNjcmliZSgoKSA9PiB0aGlzLnNjcnViLnZpc2libGUgPSBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5fb25EZXN0cm95Lm5leHQoKTtcclxuICAgICAgICB0aGlzLl9vbkRlc3Ryb3kuY29tcGxldGUoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTY3J1YihldmVudD86IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbWVkaWEtcHJvZ3Jlc3MtYmFyLXRodW1iJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdGltZWxpbmUgPSB0aGlzLnRpbWVsaW5lUmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3QgYm91bmRzID0gdGltZWxpbmUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NydWIucG9zaXRpb24gPSBldmVudC5vZmZzZXRYO1xyXG4gICAgICAgIHRoaXMuc2NydWIudGltZSA9IChldmVudC5vZmZzZXRYIC8gYm91bmRzLndpZHRoKSAqIHRoaXMubWVkaWFQbGF5ZXJTZXJ2aWNlLmR1cmF0aW9uO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5tb3VzZURvd24pIHtcclxuICAgICAgICAgICAgdGhpcy5tZWRpYVBsYXllclNlcnZpY2UucGF1c2UoKTtcclxuICAgICAgICAgICAgdGhpcy5tZWRpYVBsYXllclNlcnZpY2UuY3VycmVudFRpbWUgPSB0aGlzLnNjcnViLnRpbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1lZGlhUGxheWVyQnVmZmVyZWQge1xyXG4gICAgc3RhcnQ6IG51bWJlcjtcclxuICAgIGVuZDogbnVtYmVyO1xyXG59XHJcbiJdfQ==