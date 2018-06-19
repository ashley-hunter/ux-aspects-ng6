/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { fromEvent, timer, Subject } from 'rxjs';
import { debounceTime, filter, switchMap, takeUntil } from 'rxjs/operators';
import { MediaPlayerBaseExtensionDirective } from '../base-extension.directive';
var MediaPlayerControlsExtensionComponent = /** @class */ (function (_super) {
    tslib_1.__extends(MediaPlayerControlsExtensionComponent, _super);
    function MediaPlayerControlsExtensionComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fullscreen = false;
        _this.volumeActive = false;
        _this.volumeDragging = false;
        _this._volume = 50;
        _this._previousVolume = 50;
        _this._onDestroy = new Subject();
        return _this;
    }
    Object.defineProperty(MediaPlayerControlsExtensionComponent.prototype, "volume", {
        get: /**
         * @return {?}
         */
        function () {
            return this._volume;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value === 0 && this._volume !== 0) {
                this._previousVolume = this._volume;
            }
            this._volume = Math.min(Math.max(value, 0), 100);
            this.mediaPlayerService.volume = this._volume / 100;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MediaPlayerControlsExtensionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.mediaPlayerService.playEvent.pipe(takeUntil(this._onDestroy)).subscribe(function (_) { return _this.playing = true; });
        this.mediaPlayerService.pauseEvent.pipe(takeUntil(this._onDestroy)).subscribe(function (_) { return _this.playing = false; });
        this.mediaPlayerService.quietModeEvent.pipe(takeUntil(this._onDestroy)).subscribe(function (quietMode) { return _this.quietMode = quietMode; });
        this.mediaPlayerService.volumeChangeEvent.pipe(takeUntil(this._onDestroy)).subscribe(function (volume) { return _this.volume = volume * 100; });
        this.mediaPlayerService.initEvent.pipe(debounceTime(1), filter(function (init) { return init === true; }), takeUntil(this._onDestroy)).subscribe(function () { return _this.volume = _this.mediaPlayerService.volume * 100; });
        this.mediaPlayerService.fullscreenEvent.pipe(takeUntil(this._onDestroy)).subscribe(function (fullscreen) { return _this.fullscreen = fullscreen; });
        var /** @type {?} */ mouseenter$ = fromEvent(this.volumeIcon.nativeElement, 'mouseenter');
        var /** @type {?} */ mouseenterContainer$ = fromEvent(this.volumeContainer.nativeElement, 'mouseenter');
        var /** @type {?} */ mouseleaveContainer$ = fromEvent(this.volumeContainer.nativeElement, 'mouseleave');
        mouseenter$.pipe(takeUntil(this._onDestroy)).subscribe(function () { return _this.volumeActive = true; });
        mouseleaveContainer$.pipe(switchMap(function () { return timer(1500).pipe(takeUntil(mouseenterContainer$)); }), takeUntil(this._onDestroy)).subscribe(function () { return _this.volumeActive = false; });
    };
    /**
     * @return {?}
     */
    MediaPlayerControlsExtensionComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._onDestroy.next();
        this._onDestroy.complete();
    };
    /**
     * @return {?}
     */
    MediaPlayerControlsExtensionComponent.prototype.toggleMute = /**
     * @return {?}
     */
    function () {
        if (this.volume === 0) {
            this.volume = this._previousVolume;
        }
        else {
            this.volume = 0;
        }
    };
    /**
     * @return {?}
     */
    MediaPlayerControlsExtensionComponent.prototype.togglePlay = /**
     * @return {?}
     */
    function () {
        if (this.playing) {
            this.mediaPlayerService.pause();
        }
        else {
            this.mediaPlayerService.play();
        }
    };
    /**
     * @return {?}
     */
    MediaPlayerControlsExtensionComponent.prototype.setFullscreen = /**
     * @return {?}
     */
    function () {
        this.mediaPlayerService.toggleFullscreen();
    };
    /**
     * @return {?}
     */
    MediaPlayerControlsExtensionComponent.prototype.goToStart = /**
     * @return {?}
     */
    function () {
        this.mediaPlayerService.currentTime = 0;
    };
    /**
     * @return {?}
     */
    MediaPlayerControlsExtensionComponent.prototype.goToEnd = /**
     * @return {?}
     */
    function () {
        this.mediaPlayerService.currentTime = this.mediaPlayerService.duration;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MediaPlayerControlsExtensionComponent.prototype.dragStart = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        this.volumeDragging = true;
        var /** @type {?} */ thumb = /** @type {?} */ (event.target);
        thumb.focus();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MediaPlayerControlsExtensionComponent.prototype.dragMove = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.volumeDragging) {
            return;
        }
        event.preventDefault();
        var /** @type {?} */ slider = /** @type {?} */ (this.volumeSlider.nativeElement);
        var /** @type {?} */ bounds = slider.getBoundingClientRect();
        var /** @type {?} */ x = Math.min(bounds.width, Math.max(0, event.pageX - bounds.left));
        // convert to a percentage
        this.volume = (x / bounds.width) * 100;
    };
    /**
     * @return {?}
     */
    MediaPlayerControlsExtensionComponent.prototype.dragEnd = /**
     * @return {?}
     */
    function () {
        this.volumeDragging = false;
    };
    MediaPlayerControlsExtensionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-media-player-controls',
                    template: "<div class=\"volume-container\">\n\n    <div class=\"volume-slider-container\" #volumeContainer [class.active]=\"volumeActive\">\n        <div class=\"volume-slider-icon\" #volumeIcon>\n            <span class=\"hpe-icon\" [class.hpe-volume-mute]=\"volume === 0\" [class.hpe-volume-low]=\"volume > 0 && volume <= 70\" [class.hpe-volume]=\"volume > 70\" [uxTooltip]=\"muteTooltip\" (click)=\"toggleMute()\"></span>\n        </div>\n        \n        <div class=\"volume-slider-node\">\n            <div class=\"volume-slider\" #volumeSlider>\n                <div class=\"volume-track-lower\" [style.width.%]=\"volume\"></div>\n                <div class=\"volume-slider-thumb\" (mousedown)=\"dragStart($event)\" [style.left.%]=\"volume\" tabindex=\"0\" (keydown.ArrowRight)=\"volume = volume + 10\" (keydown.ArrowLeft)=\"volume = volume - 10\"></div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"spacer\"></div>\n\n<svg viewBox=\"0 0 51.5 64\" width=\"14\" height=\"17\" class=\"control-button\" (click)=\"goToStart()\">\n    <rect x=\"0\" y=\"0\" width=\"7.5\" height=\"64\" />\n    <polygon points=\"51.5,64 51.5,0 7.4,32 \" />\n</svg>\n\n<svg viewBox=\"0 0 45 64\" width=\"20\" height=\"29\" class=\"control-button\" *ngIf=\"!playing\" (click)=\"togglePlay()\">\n    <polygon points=\"0.4,0 0.4,64 44.6,32\" />\n</svg>\n\n<svg viewBox=\"0 0 43 56.9\" class=\"control-button\" width=\"20\" height=\"29\" *ngIf=\"playing\" (click)=\"togglePlay()\">\n    <rect y=\"0.1\" width=\"15.7\" height=\"56.9\" />\n    <rect x=\"27.3\" y=\"0.1\" width=\"15.7\" height=\"56.9\" />\n</svg>\n\n<svg viewBox=\"0 0 51.5 64\" width=\"14\" height=\"17\" class=\"control-button\" (click)=\"goToEnd()\">\n    <rect x=\"44.1\" y=\"0\" width=\"7.5\" height=\"64\" />\n    <polygon points=\"0,64 0,0 44.1,32 \" />\n</svg>\n\n<div class=\"spacer\"></div>\n\n<span class=\"hpe-icon\" *ngIf=\"mediaPlayerService.type !== 'audio'\" [class.hpe-expand]=\"!mediaPlayerService.fullscreen\" [class.hpe-contract]=\"mediaPlayerService.fullscreen\"\n    (click)=\"setFullscreen()\"></span>\n\n<ng-template #muteTooltip>{{ volume === 0 ? 'Unmute' : 'Mute' }}</ng-template>",
                    host: {
                        '[class.quiet]': 'quietMode || fullscreen'
                    }
                },] },
    ];
    /** @nocollapse */
    MediaPlayerControlsExtensionComponent.propDecorators = {
        "volumeIcon": [{ type: ViewChild, args: ['volumeIcon',] },],
        "volumeSlider": [{ type: ViewChild, args: ['volumeSlider',] },],
        "volumeContainer": [{ type: ViewChild, args: ['volumeContainer',] },],
        "dragMove": [{ type: HostListener, args: ['document:mousemove', ['$event'],] },],
        "dragEnd": [{ type: HostListener, args: ['document:mouseup',] },],
    };
    return MediaPlayerControlsExtensionComponent;
}(MediaPlayerBaseExtensionDirective));
export { MediaPlayerControlsExtensionComponent };
function MediaPlayerControlsExtensionComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MediaPlayerControlsExtensionComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MediaPlayerControlsExtensionComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MediaPlayerControlsExtensionComponent.propDecorators;
    /** @type {?} */
    MediaPlayerControlsExtensionComponent.prototype.playing;
    /** @type {?} */
    MediaPlayerControlsExtensionComponent.prototype.quietMode;
    /** @type {?} */
    MediaPlayerControlsExtensionComponent.prototype.fullscreen;
    /** @type {?} */
    MediaPlayerControlsExtensionComponent.prototype.volumeActive;
    /** @type {?} */
    MediaPlayerControlsExtensionComponent.prototype.volumeDragging;
    /** @type {?} */
    MediaPlayerControlsExtensionComponent.prototype.volumeIcon;
    /** @type {?} */
    MediaPlayerControlsExtensionComponent.prototype.volumeSlider;
    /** @type {?} */
    MediaPlayerControlsExtensionComponent.prototype.volumeContainer;
    /** @type {?} */
    MediaPlayerControlsExtensionComponent.prototype._volume;
    /** @type {?} */
    MediaPlayerControlsExtensionComponent.prototype._previousVolume;
    /** @type {?} */
    MediaPlayerControlsExtensionComponent.prototype._onDestroy;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWVkaWEtcGxheWVyL2V4dGVuc2lvbnMvY29udHJvbHMvY29udHJvbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFxQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEcsT0FBTyxFQUFFLFNBQVMsRUFBSSxLQUFLLEVBQUksT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7SUFtRHJCLGlFQUFpQzs7OzJCQUlsRSxLQUFLOzZCQUNILEtBQUs7K0JBQ0gsS0FBSzt3QkFNTCxFQUFFO2dDQUNGLEVBQUU7MkJBQ1AsSUFBSSxPQUFPLEVBQVE7OztJQUV4QyxzQkFBSSx5REFBTTs7OztRQUFWO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDdkI7Ozs7O1FBRUQsVUFBVyxLQUFhO1lBRXBCLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDdkM7WUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0s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UmVmLCBIb3N0TGlzdGVuZXIsIE9uRGVzdHJveSwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50ICwgIHRpbWVyICwgIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBmaWx0ZXIsIHN3aXRjaE1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBNZWRpYVBsYXllckJhc2VFeHRlbnNpb25EaXJlY3RpdmUgfSBmcm9tICcuLi9iYXNlLWV4dGVuc2lvbi5kaXJlY3RpdmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3V4LW1lZGlhLXBsYXllci1jb250cm9scycsXHJcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJ2b2x1bWUtY29udGFpbmVyXCI+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInZvbHVtZS1zbGlkZXItY29udGFpbmVyXCIgI3ZvbHVtZUNvbnRhaW5lciBbY2xhc3MuYWN0aXZlXT1cInZvbHVtZUFjdGl2ZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ2b2x1bWUtc2xpZGVyLWljb25cIiAjdm9sdW1lSWNvbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJocGUtaWNvblwiIFtjbGFzcy5ocGUtdm9sdW1lLW11dGVdPVwidm9sdW1lID09PSAwXCIgW2NsYXNzLmhwZS12b2x1bWUtbG93XT1cInZvbHVtZSA+IDAgJiYgdm9sdW1lIDw9IDcwXCIgW2NsYXNzLmhwZS12b2x1bWVdPVwidm9sdW1lID4gNzBcIiBbdXhUb29sdGlwXT1cIm11dGVUb29sdGlwXCIgKGNsaWNrKT1cInRvZ2dsZU11dGUoKVwiPjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwidm9sdW1lLXNsaWRlci1ub2RlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2b2x1bWUtc2xpZGVyXCIgI3ZvbHVtZVNsaWRlcj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2b2x1bWUtdHJhY2stbG93ZXJcIiBbc3R5bGUud2lkdGguJV09XCJ2b2x1bWVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2b2x1bWUtc2xpZGVyLXRodW1iXCIgKG1vdXNlZG93bik9XCJkcmFnU3RhcnQoJGV2ZW50KVwiIFtzdHlsZS5sZWZ0LiVdPVwidm9sdW1lXCIgdGFiaW5kZXg9XCIwXCIgKGtleWRvd24uQXJyb3dSaWdodCk9XCJ2b2x1bWUgPSB2b2x1bWUgKyAxMFwiIChrZXlkb3duLkFycm93TGVmdCk9XCJ2b2x1bWUgPSB2b2x1bWUgLSAxMFwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJzcGFjZXJcIj48L2Rpdj5cclxuXHJcbjxzdmcgdmlld0JveD1cIjAgMCA1MS41IDY0XCIgd2lkdGg9XCIxNFwiIGhlaWdodD1cIjE3XCIgY2xhc3M9XCJjb250cm9sLWJ1dHRvblwiIChjbGljayk9XCJnb1RvU3RhcnQoKVwiPlxyXG4gICAgPHJlY3QgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiNy41XCIgaGVpZ2h0PVwiNjRcIiAvPlxyXG4gICAgPHBvbHlnb24gcG9pbnRzPVwiNTEuNSw2NCA1MS41LDAgNy40LDMyIFwiIC8+XHJcbjwvc3ZnPlxyXG5cclxuPHN2ZyB2aWV3Qm94PVwiMCAwIDQ1IDY0XCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjI5XCIgY2xhc3M9XCJjb250cm9sLWJ1dHRvblwiICpuZ0lmPVwiIXBsYXlpbmdcIiAoY2xpY2spPVwidG9nZ2xlUGxheSgpXCI+XHJcbiAgICA8cG9seWdvbiBwb2ludHM9XCIwLjQsMCAwLjQsNjQgNDQuNiwzMlwiIC8+XHJcbjwvc3ZnPlxyXG5cclxuPHN2ZyB2aWV3Qm94PVwiMCAwIDQzIDU2LjlcIiBjbGFzcz1cImNvbnRyb2wtYnV0dG9uXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjI5XCIgKm5nSWY9XCJwbGF5aW5nXCIgKGNsaWNrKT1cInRvZ2dsZVBsYXkoKVwiPlxyXG4gICAgPHJlY3QgeT1cIjAuMVwiIHdpZHRoPVwiMTUuN1wiIGhlaWdodD1cIjU2LjlcIiAvPlxyXG4gICAgPHJlY3QgeD1cIjI3LjNcIiB5PVwiMC4xXCIgd2lkdGg9XCIxNS43XCIgaGVpZ2h0PVwiNTYuOVwiIC8+XHJcbjwvc3ZnPlxyXG5cclxuPHN2ZyB2aWV3Qm94PVwiMCAwIDUxLjUgNjRcIiB3aWR0aD1cIjE0XCIgaGVpZ2h0PVwiMTdcIiBjbGFzcz1cImNvbnRyb2wtYnV0dG9uXCIgKGNsaWNrKT1cImdvVG9FbmQoKVwiPlxyXG4gICAgPHJlY3QgeD1cIjQ0LjFcIiB5PVwiMFwiIHdpZHRoPVwiNy41XCIgaGVpZ2h0PVwiNjRcIiAvPlxyXG4gICAgPHBvbHlnb24gcG9pbnRzPVwiMCw2NCAwLDAgNDQuMSwzMiBcIiAvPlxyXG48L3N2Zz5cclxuXHJcbjxkaXYgY2xhc3M9XCJzcGFjZXJcIj48L2Rpdj5cclxuXHJcbjxzcGFuIGNsYXNzPVwiaHBlLWljb25cIiAqbmdJZj1cIm1lZGlhUGxheWVyU2VydmljZS50eXBlICE9PSAnYXVkaW8nXCIgW2NsYXNzLmhwZS1leHBhbmRdPVwiIW1lZGlhUGxheWVyU2VydmljZS5mdWxsc2NyZWVuXCIgW2NsYXNzLmhwZS1jb250cmFjdF09XCJtZWRpYVBsYXllclNlcnZpY2UuZnVsbHNjcmVlblwiXHJcbiAgICAoY2xpY2spPVwic2V0RnVsbHNjcmVlbigpXCI+PC9zcGFuPlxyXG5cclxuPG5nLXRlbXBsYXRlICNtdXRlVG9vbHRpcD57eyB2b2x1bWUgPT09IDAgPyAnVW5tdXRlJyA6ICdNdXRlJyB9fTwvbmctdGVtcGxhdGU+YCxcclxuICAgIGhvc3Q6IHtcclxuICAgICAgICAnW2NsYXNzLnF1aWV0XSc6ICdxdWlldE1vZGUgfHwgZnVsbHNjcmVlbidcclxuICAgIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1lZGlhUGxheWVyQ29udHJvbHNFeHRlbnNpb25Db21wb25lbnQgZXh0ZW5kcyBNZWRpYVBsYXllckJhc2VFeHRlbnNpb25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gICAgcGxheWluZzogYm9vbGVhbjtcclxuICAgIHF1aWV0TW9kZTogYm9vbGVhbjtcclxuICAgIGZ1bGxzY3JlZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHZvbHVtZUFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgdm9sdW1lRHJhZ2dpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBAVmlld0NoaWxkKCd2b2x1bWVJY29uJykgdm9sdW1lSWNvbjogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoJ3ZvbHVtZVNsaWRlcicpIHZvbHVtZVNsaWRlcjogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoJ3ZvbHVtZUNvbnRhaW5lcicpIHZvbHVtZUNvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuXHJcbiAgICBwcml2YXRlIF92b2x1bWU6IG51bWJlciA9IDUwO1xyXG4gICAgcHJpdmF0ZSBfcHJldmlvdXNWb2x1bWUgPSA1MDtcclxuICAgIHByaXZhdGUgX29uRGVzdHJveSA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gICAgZ2V0IHZvbHVtZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92b2x1bWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHZvbHVtZSh2YWx1ZTogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gMCAmJiB0aGlzLl92b2x1bWUgIT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fcHJldmlvdXNWb2x1bWUgPSB0aGlzLl92b2x1bWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl92b2x1bWUgPSBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgMCksIDEwMCk7XHJcbiAgICAgICAgdGhpcy5tZWRpYVBsYXllclNlcnZpY2Uudm9sdW1lID0gdGhpcy5fdm9sdW1lIC8gMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubWVkaWFQbGF5ZXJTZXJ2aWNlLnBsYXlFdmVudC5waXBlKHRha2VVbnRpbCh0aGlzLl9vbkRlc3Ryb3kpKS5zdWJzY3JpYmUoXyA9PiB0aGlzLnBsYXlpbmcgPSB0cnVlKTtcclxuICAgICAgICB0aGlzLm1lZGlhUGxheWVyU2VydmljZS5wYXVzZUV2ZW50LnBpcGUodGFrZVVudGlsKHRoaXMuX29uRGVzdHJveSkpLnN1YnNjcmliZShfID0+IHRoaXMucGxheWluZyA9IGZhbHNlKTtcclxuICAgICAgICB0aGlzLm1lZGlhUGxheWVyU2VydmljZS5xdWlldE1vZGVFdmVudC5waXBlKHRha2VVbnRpbCh0aGlzLl9vbkRlc3Ryb3kpKS5zdWJzY3JpYmUocXVpZXRNb2RlID0+IHRoaXMucXVpZXRNb2RlID0gcXVpZXRNb2RlKTtcclxuICAgICAgICB0aGlzLm1lZGlhUGxheWVyU2VydmljZS52b2x1bWVDaGFuZ2VFdmVudC5waXBlKHRha2VVbnRpbCh0aGlzLl9vbkRlc3Ryb3kpKS5zdWJzY3JpYmUodm9sdW1lID0+IHRoaXMudm9sdW1lID0gdm9sdW1lICogMTAwKTtcclxuICAgICAgICB0aGlzLm1lZGlhUGxheWVyU2VydmljZS5pbml0RXZlbnQucGlwZShkZWJvdW5jZVRpbWUoMSksIGZpbHRlcihpbml0ID0+IGluaXQgPT09IHRydWUpLCB0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KSkuc3Vic2NyaWJlKCgpID0+IHRoaXMudm9sdW1lID0gdGhpcy5tZWRpYVBsYXllclNlcnZpY2Uudm9sdW1lICogMTAwKTtcclxuICAgICAgICB0aGlzLm1lZGlhUGxheWVyU2VydmljZS5mdWxsc2NyZWVuRXZlbnQucGlwZSh0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KSkuc3Vic2NyaWJlKGZ1bGxzY3JlZW4gPT4gdGhpcy5mdWxsc2NyZWVuID0gZnVsbHNjcmVlbik7XHJcblxyXG4gICAgICAgIGNvbnN0IG1vdXNlZW50ZXIkID0gZnJvbUV2ZW50KHRoaXMudm9sdW1lSWNvbi5uYXRpdmVFbGVtZW50LCAnbW91c2VlbnRlcicpO1xyXG4gICAgICAgIGNvbnN0IG1vdXNlZW50ZXJDb250YWluZXIkID0gZnJvbUV2ZW50KHRoaXMudm9sdW1lQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsICdtb3VzZWVudGVyJyk7XHJcbiAgICAgICAgY29uc3QgbW91c2VsZWF2ZUNvbnRhaW5lciQgPSBmcm9tRXZlbnQodGhpcy52b2x1bWVDb250YWluZXIubmF0aXZlRWxlbWVudCwgJ21vdXNlbGVhdmUnKTtcclxuXHJcbiAgICAgICAgbW91c2VlbnRlciQucGlwZSh0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KSkuc3Vic2NyaWJlKCgpID0+IHRoaXMudm9sdW1lQWN0aXZlID0gdHJ1ZSk7XHJcbiAgICAgICAgbW91c2VsZWF2ZUNvbnRhaW5lciQucGlwZShcclxuICAgICAgICAgICAgc3dpdGNoTWFwKCgpID0+IHRpbWVyKDE1MDApLnBpcGUodGFrZVVudGlsKG1vdXNlZW50ZXJDb250YWluZXIkKSkpLFxyXG4gICAgICAgICAgICB0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KVxyXG4gICAgICAgICkuc3Vic2NyaWJlKCgpID0+IHRoaXMudm9sdW1lQWN0aXZlID0gZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX29uRGVzdHJveS5uZXh0KCk7XHJcbiAgICAgICAgdGhpcy5fb25EZXN0cm95LmNvbXBsZXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlTXV0ZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy52b2x1bWUgPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy52b2x1bWUgPSB0aGlzLl9wcmV2aW91c1ZvbHVtZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnZvbHVtZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVBsYXkoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWluZykge1xyXG4gICAgICAgICAgICB0aGlzLm1lZGlhUGxheWVyU2VydmljZS5wYXVzZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVkaWFQbGF5ZXJTZXJ2aWNlLnBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RnVsbHNjcmVlbigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1lZGlhUGxheWVyU2VydmljZS50b2dnbGVGdWxsc2NyZWVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ29Ub1N0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubWVkaWFQbGF5ZXJTZXJ2aWNlLmN1cnJlbnRUaW1lID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBnb1RvRW5kKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubWVkaWFQbGF5ZXJTZXJ2aWNlLmN1cnJlbnRUaW1lID0gdGhpcy5tZWRpYVBsYXllclNlcnZpY2UuZHVyYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgZHJhZ1N0YXJ0KGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLnZvbHVtZURyYWdnaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgY29uc3QgdGh1bWIgPSBldmVudC50YXJnZXQgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgdGh1bWIuZm9jdXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDptb3VzZW1vdmUnLCBbJyRldmVudCddKVxyXG4gICAgZHJhZ01vdmUoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMudm9sdW1lRHJhZ2dpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2xpZGVyID0gdGhpcy52b2x1bWVTbGlkZXIubmF0aXZlRWxlbWVudCBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICBjb25zdCBib3VuZHMgPSBzbGlkZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHggPSBNYXRoLm1pbihib3VuZHMud2lkdGgsIE1hdGgubWF4KDAsIGV2ZW50LnBhZ2VYIC0gYm91bmRzLmxlZnQpKTtcclxuXHJcbiAgICAgICAgLy8gY29udmVydCB0byBhIHBlcmNlbnRhZ2VcclxuICAgICAgICB0aGlzLnZvbHVtZSA9ICh4IC8gYm91bmRzLndpZHRoKSAqIDEwMDtcclxuICAgIH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDptb3VzZXVwJylcclxuICAgIGRyYWdFbmQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy52b2x1bWVEcmFnZ2luZyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxufSJdfQ==