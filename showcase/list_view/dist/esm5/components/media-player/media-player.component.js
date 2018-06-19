/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { fromEvent, of, Subject } from 'rxjs';
import { debounceTime, switchMap, takeUntil } from 'rxjs/operators';
import { AudioService } from '../../services/audio/index';
import { MediaPlayerService } from './media-player.service';
var MediaPlayerComponent = /** @class */ (function () {
    function MediaPlayerComponent(mediaPlayerService, _audioService, _elementRef) {
        var _this = this;
        this.mediaPlayerService = mediaPlayerService;
        this._audioService = _audioService;
        this._elementRef = _elementRef;
        this.hovering = false;
        this._onDestroy = new Subject();
        // show controls when hovering and in quiet mode
        fromEvent(this._elementRef.nativeElement, 'mousemove').pipe(switchMap(function (event) {
            _this.hovering = true;
            return of(event);
        }), debounceTime(2000), takeUntil(this._onDestroy)).subscribe(function () { return _this.hovering = false; });
    }
    Object.defineProperty(MediaPlayerComponent.prototype, "source", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mediaPlayerService.source;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.mediaPlayerService.source = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaPlayerComponent.prototype, "type", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mediaPlayerService.type;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.mediaPlayerService.type = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaPlayerComponent.prototype, "quietMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mediaPlayerService.quietMode;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.mediaPlayerService.quietMode = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MediaPlayerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.mediaPlayerService.setMediaPlayer(this._elementRef.nativeElement, this._playerRef.nativeElement);
        this.audioMetadata = this._audioService.getAudioFileMetadata(this._playerRef.nativeElement);
        this.mediaPlayerService.playingEvent.pipe(takeUntil(this._onDestroy)).subscribe(function () { return _this.mediaPlayerService.playing.next(true); });
        this.mediaPlayerService.pauseEvent.pipe(takeUntil(this._onDestroy)).subscribe(function () { return _this.mediaPlayerService.playing.next(false); });
        this.mediaPlayerService.mediaClickEvent.pipe(takeUntil(this._onDestroy)).subscribe(function () { return _this.mediaPlayerService.togglePlay(); });
        this.mediaPlayerService.loadedMetadataEvent.pipe(takeUntil(this._onDestroy)).subscribe(function () { return _this.mediaPlayerService.loaded = true; });
    };
    /**
     * @return {?}
     */
    MediaPlayerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._onDestroy.next();
        this._onDestroy.complete();
    };
    MediaPlayerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-media-player',
                    template: "<div class=\"video-player-container\" *ngIf=\"type === 'video'\">\n\n    <video class=\"video-player\"\n        #player\n        [src]=\"source\"\n        (abort)=\"mediaPlayerService.abortEvent.next()\"\n        (canplay)=\"mediaPlayerService.canPlayEvent.next(true)\"\n        (canplaythrough)=\"mediaPlayerService.canPlayThroughEvent.next(true)\"\n        (durationchange)=\"mediaPlayerService.durationChangeEvent.next(player.duration)\"\n        (ended)=\"mediaPlayerService.endedEvent.next()\"\n        (error)=\"mediaPlayerService.errorEvent.next($event)\"\n        (loadeddata)=\"mediaPlayerService.loadedDataEvent.next($event)\"\n        (loadedmetadata)=\"mediaPlayerService.loadedMetadataEvent.next($event)\"\n        (loadstart)=\"mediaPlayerService.loadStartEvent.next()\"\n        (pause)=\"mediaPlayerService.pauseEvent.next()\"\n        (play)=\"mediaPlayerService.playEvent.next()\"\n        (playing)=\"mediaPlayerService.playingEvent.next(!player.paused)\"\n        (ratechange)=\"mediaPlayerService.rateChangeEvent.next(player.playbackRate)\"\n        (seeked)=\"mediaPlayerService.seekedEvent.next(player.currentTime)\"\n        (seeking)=\"mediaPlayerService.seekingEvent.next(player.currentTime)\"\n        (stalled)=\"mediaPlayerService.stalledEvent.next()\"\n        (suspend)=\"mediaPlayerService.suspendEvent.next()\"\n        (timeupdate)=\"mediaPlayerService.timeUpdateEvent.next(player.currentTime)\"\n        (volumechange)=\"mediaPlayerService.volumeChangeEvent.next(player.volume)\"\n        (waiting)=\"mediaPlayerService.waitingEvent.next()\"\n        (click)=\"mediaPlayerService.mediaClickEvent.next($event)\">\n    </video>\n\n    <div class=\"video-overlay\" [class.playing]=\"mediaPlayerService.playing | async\">\n        <svg class=\"play-graphic\" x=\"0px\" y=\"0px\" viewBox=\"0 0 64 64\">\n            <circle class=\"play-circle\" cx=\"32.2\" cy=\"31.8\" r=\"31.8\" />\n            <polygon class=\"play-triangle\" points=\"23,14.1 23,50.8 48.3,32.5\" />\n        </svg>\n    </div>\n\n</div>\n\n\n<div class=\"audio-player\" *ngIf=\"type === 'audio'\">\n\n    <svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\">\n        <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n            <g transform=\"translate(-98.000000, -458.000000)\">\n                <g transform=\"translate(98.000000, 458.000000)\">\n                    <path d=\"M4.5,0.5 L18.0435308,0.5 L23.5,6.22251502 L23.5,23.5 L4.5,23.5 L4.5,0.5 Z\" fill=\"#CCEAE2\"></path>\n                    <path d=\"M4.5,8 L4.5,0.5 L18,0.5 L23.5,6 L23.5,23.5 L18,23.5\" stroke=\"#60798D\" fill=\"#CCEAE2\"></path>\n                    <path d=\"M4,13.5 L0.5,13.5 L0.5,18.5 L4,18.5 L9.5,22.5 L9.5,9.5 L4,13.5 Z\" stroke=\"#60798D\" fill=\"#85D2BE\"></path>\n                    <path d=\"M11.5,12.5137939 C13.7576225,12.5137939 14.5,14.3709236 14.5,16 C14.5,17.6849236 13.7089152,19.5420532 11.5,19.5420532\"\n                        stroke=\"#60798D\"></path>\n                    <path d=\"M11.5,9 C15.8037643,9.04168701 18.5,11.6604805 18.5,16 C18.5,20.3395195 15.8804302,23.0079956 11.5,23\" stroke=\"#60798D\"></path>\n                    <path d=\"M17.5219116,0.761413574 L17.5219116,6 L23,6\" stroke=\"#60798D\" fill=\"#85D2BE\"></path>\n                </g>\n            </g>\n        </g>\n    </svg>\n\n    <p class=\"audio-file-name\">{{ (audioMetadata | async)?.filename }}</p>\n    <p class=\"audio-file-format\">{{ (audioMetadata | async)?.description }}</p>\n    <p class=\"audio-file-size\">{{ (audioMetadata | async)?.size | fileSize }}</p>\n\n    <audio #player\n        [src]=\"source\"\n        (abort)=\"mediaPlayerService.abortEvent.next()\"\n        (canplay)=\"mediaPlayerService.canPlayEvent.next(true)\"\n        (canplaythrough)=\"mediaPlayerService.canPlayThroughEvent.next(true)\"\n        (durationchange)=\"mediaPlayerService.durationChangeEvent.next(player.duration)\"\n        (ended)=\"mediaPlayerService.endedEvent.next()\"\n        (error)=\"mediaPlayerService.errorEvent.next($event)\"\n        (loadeddata)=\"mediaPlayerService.loadedDataEvent.next($event)\"\n        (loadedmetadata)=\"mediaPlayerService.loadedMetadataEvent.next($event)\"\n        (loadstart)=\"mediaPlayerService.loadStartEvent.next()\"\n        (pause)=\"mediaPlayerService.pauseEvent.next()\"\n        (play)=\"mediaPlayerService.playEvent.next()\"\n        (playing)=\"mediaPlayerService.playingEvent.next(!player.paused)\"\n        (ratechange)=\"mediaPlayerService.rateChangeEvent.next(player.playbackRate)\"\n        (seeked)=\"mediaPlayerService.seekedEvent.next(player.currentTime)\"\n        (seeking)=\"mediaPlayerService.seekingEvent.next(player.currentTime)\"\n        (stalled)=\"mediaPlayerService.stalledEvent.next()\"\n        (suspend)=\"mediaPlayerService.suspendEvent.next()\"\n        (timeupdate)=\"mediaPlayerService.timeUpdateEvent.next(player.currentTime)\"\n        (volumechange)=\"mediaPlayerService.volumeChangeEvent.next(player.volume)\"\n        (waiting)=\"mediaPlayerService.waitingEvent.next()\"\n        (click)=\"mediaPlayerService.mediaClickEvent.next($event)\">\n    </audio>\n</div>\n\n<div class=\"control-bar\">\n    <ux-media-player-timeline></ux-media-player-timeline>\n    <ux-media-player-controls></ux-media-player-controls>\n</div>",
                    providers: [MediaPlayerService],
                    host: {
                        'tabindex': '0',
                        '(keydown.Space)': 'mediaPlayerService.togglePlay()',
                        '[class.standard]': '!mediaPlayerService.fullscreen',
                        '[class.fullscreen]': 'mediaPlayerService.fullscreen',
                        '[class.quiet]': 'quietMode && type === "video" || mediaPlayerService.fullscreen',
                        '[class.hover]': 'hovering',
                        '[class.video]': 'type === "video"',
                        '[class.audio]': 'type === "audio"',
                        '(mouseenter)': 'hovering = true',
                        '(mouseleave)': 'hovering = false',
                        '(document:webkitfullscreenchange)': 'mediaPlayerService.fullscreenChange($event)',
                        '(document:mozfullscreenchange)': 'mediaPlayerService.fullscreenChange($event)',
                        '(document:MSFullscreenChange)': 'mediaPlayerService.fullscreenChange($event)'
                    }
                },] },
    ];
    /** @nocollapse */
    MediaPlayerComponent.ctorParameters = function () { return [
        { type: MediaPlayerService, },
        { type: AudioService, },
        { type: ElementRef, },
    ]; };
    MediaPlayerComponent.propDecorators = {
        "_playerRef": [{ type: ViewChild, args: ['player',] },],
        "source": [{ type: Input },],
        "type": [{ type: Input },],
        "quietMode": [{ type: Input },],
    };
    return MediaPlayerComponent;
}());
export { MediaPlayerComponent };
function MediaPlayerComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MediaPlayerComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MediaPlayerComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MediaPlayerComponent.propDecorators;
    /** @type {?} */
    MediaPlayerComponent.prototype._playerRef;
    /** @type {?} */
    MediaPlayerComponent.prototype.hovering;
    /** @type {?} */
    MediaPlayerComponent.prototype.audioMetadata;
    /** @type {?} */
    MediaPlayerComponent.prototype._onDestroy;
    /** @type {?} */
    MediaPlayerComponent.prototype.mediaPlayerService;
    /** @type {?} */
    MediaPlayerComponent.prototype._audioService;
    /** @type {?} */
    MediaPlayerComponent.prototype._elementRef;
}
/**
 * @record
 */
export function MediaPlayerBuffer() { }
function MediaPlayerBuffer_tsickle_Closure_declarations() {
    /** @type {?} */
    MediaPlayerBuffer.prototype.start;
    /** @type {?} */
    MediaPlayerBuffer.prototype.end;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEtcGxheWVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL21lZGlhLXBsYXllci9tZWRpYS1wbGF5ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFhLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRyxPQUFPLEVBQWdCLFNBQVMsRUFBSSxFQUFFLEVBQUksT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBaUIsWUFBWSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDekUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0lBbUp4RCw4QkFBbUIsa0JBQXNDLEVBQVUsYUFBMkIsRUFBVSxXQUF1QjtRQUEvSCxpQkFXQztRQVhrQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBWTt3QkFoQzNHLEtBQUs7MEJBOEJKLElBQUksT0FBTyxFQUFROztRQUtwQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUN2RCxTQUFTLENBQUMsVUFBQyxLQUFpQjtZQUN4QixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BCLENBQUMsRUFDRixZQUFZLENBQUMsSUFBSSxDQUFDLEVBQ2xCLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQzdCLENBQUMsU0FB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Q2pGLGVBQWUsRUFBRSxVQUFVO3dCQUMzQixlQUFlLEVBQUUsa0JBQWtCO3dCQUNuQyxlQUFlLEVBQUUsa0JBQWtCO3dCQUNuQyxjQUFjLEVBQUUsaUJBQWlCO3dCQUNqQyxjQUFjLEVBQUUsa0JBQWtCO3dCQUNsQyxtQ0FBbUMsRUFBRSw2Q0FBNkM7d0JBQ2xGLGdDQUFnQyxFQUFFLDZDQUE2Qzt3QkFDL0UsK0JBQStCLEVBQUUsNkNBQTZDO3FCQUNqRjtpQkFDSjs7OztnQkE5R1Esa0JBQWtCO2dCQURILFlBQVk7Z0JBSEQsVUFBVTs7OytCQXFIeEMsU0FBUyxTQUFDLFFBQVE7MkJBU2xCLEtBQUs7eUJBU0wsS0FBSzs4QkFTTCxLQUFLOzsrQkFoSlY7O1NBbUhhLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uRGVzdHJveSwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgLCAgZnJvbUV2ZW50ICwgIG9mICwgIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBzd2l0Y2hNYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQXVkaW9NZXRhZGF0YSwgQXVkaW9TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXVkaW8vaW5kZXgnO1xyXG5pbXBvcnQgeyBNZWRpYVBsYXllclNlcnZpY2UgfSBmcm9tICcuL21lZGlhLXBsYXllci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd1eC1tZWRpYS1wbGF5ZXInLFxyXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwidmlkZW8tcGxheWVyLWNvbnRhaW5lclwiICpuZ0lmPVwidHlwZSA9PT0gJ3ZpZGVvJ1wiPlxyXG5cclxuICAgIDx2aWRlbyBjbGFzcz1cInZpZGVvLXBsYXllclwiXHJcbiAgICAgICAgI3BsYXllclxyXG4gICAgICAgIFtzcmNdPVwic291cmNlXCJcclxuICAgICAgICAoYWJvcnQpPVwibWVkaWFQbGF5ZXJTZXJ2aWNlLmFib3J0RXZlbnQubmV4dCgpXCJcclxuICAgICAgICAoY2FucGxheSk9XCJtZWRpYVBsYXllclNlcnZpY2UuY2FuUGxheUV2ZW50Lm5leHQodHJ1ZSlcIlxyXG4gICAgICAgIChjYW5wbGF5dGhyb3VnaCk9XCJtZWRpYVBsYXllclNlcnZpY2UuY2FuUGxheVRocm91Z2hFdmVudC5uZXh0KHRydWUpXCJcclxuICAgICAgICAoZHVyYXRpb25jaGFuZ2UpPVwibWVkaWFQbGF5ZXJTZXJ2aWNlLmR1cmF0aW9uQ2hhbmdlRXZlbnQubmV4dChwbGF5ZXIuZHVyYXRpb24pXCJcclxuICAgICAgICAoZW5kZWQpPVwibWVkaWFQbGF5ZXJTZXJ2aWNlLmVuZGVkRXZlbnQubmV4dCgpXCJcclxuICAgICAgICAoZXJyb3IpPVwibWVkaWFQbGF5ZXJTZXJ2aWNlLmVycm9yRXZlbnQubmV4dCgkZXZlbnQpXCJcclxuICAgICAgICAobG9hZGVkZGF0YSk9XCJtZWRpYVBsYXllclNlcnZpY2UubG9hZGVkRGF0YUV2ZW50Lm5leHQoJGV2ZW50KVwiXHJcbiAgICAgICAgKGxvYWRlZG1ldGFkYXRhKT1cIm1lZGlhUGxheWVyU2VydmljZS5sb2FkZWRNZXRhZGF0YUV2ZW50Lm5leHQoJGV2ZW50KVwiXHJcbiAgICAgICAgKGxvYWRzdGFydCk9XCJtZWRpYVBsYXllclNlcnZpY2UubG9hZFN0YXJ0RXZlbnQubmV4dCgpXCJcclxuICAgICAgICAocGF1c2UpPVwibWVkaWFQbGF5ZXJTZXJ2aWNlLnBhdXNlRXZlbnQubmV4dCgpXCJcclxuICAgICAgICAocGxheSk9XCJtZWRpYVBsYXllclNlcnZpY2UucGxheUV2ZW50Lm5leHQoKVwiXHJcbiAgICAgICAgKHBsYXlpbmcpPVwibWVkaWFQbGF5ZXJTZXJ2aWNlLnBsYXlpbmdFdmVudC5uZXh0KCFwbGF5ZXIucGF1c2VkKVwiXHJcbiAgICAgICAgKHJhdGVjaGFuZ2UpPVwibWVkaWFQbGF5ZXJTZXJ2aWNlLnJhdGVDaGFuZ2VFdmVudC5uZXh0KHBsYXllci5wbGF5YmFja1JhdGUpXCJcclxuICAgICAgICAoc2Vla2VkKT1cIm1lZGlhUGxheWVyU2VydmljZS5zZWVrZWRFdmVudC5uZXh0KHBsYXllci5jdXJyZW50VGltZSlcIlxyXG4gICAgICAgIChzZWVraW5nKT1cIm1lZGlhUGxheWVyU2VydmljZS5zZWVraW5nRXZlbnQubmV4dChwbGF5ZXIuY3VycmVudFRpbWUpXCJcclxuICAgICAgICAoc3RhbGxlZCk9XCJtZWRpYVBsYXllclNlcnZpY2Uuc3RhbGxlZEV2ZW50Lm5leHQoKVwiXHJcbiAgICAgICAgKHN1c3BlbmQpPVwibWVkaWFQbGF5ZXJTZXJ2aWNlLnN1c3BlbmRFdmVudC5uZXh0KClcIlxyXG4gICAgICAgICh0aW1ldXBkYXRlKT1cIm1lZGlhUGxheWVyU2VydmljZS50aW1lVXBkYXRlRXZlbnQubmV4dChwbGF5ZXIuY3VycmVudFRpbWUpXCJcclxuICAgICAgICAodm9sdW1lY2hhbmdlKT1cIm1lZGlhUGxheWVyU2VydmljZS52b2x1bWVDaGFuZ2VFdmVudC5uZXh0KHBsYXllci52b2x1bWUpXCJcclxuICAgICAgICAod2FpdGluZyk9XCJtZWRpYVBsYXllclNlcnZpY2Uud2FpdGluZ0V2ZW50Lm5leHQoKVwiXHJcbiAgICAgICAgKGNsaWNrKT1cIm1lZGlhUGxheWVyU2VydmljZS5tZWRpYUNsaWNrRXZlbnQubmV4dCgkZXZlbnQpXCI+XHJcbiAgICA8L3ZpZGVvPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJ2aWRlby1vdmVybGF5XCIgW2NsYXNzLnBsYXlpbmddPVwibWVkaWFQbGF5ZXJTZXJ2aWNlLnBsYXlpbmcgfCBhc3luY1wiPlxyXG4gICAgICAgIDxzdmcgY2xhc3M9XCJwbGF5LWdyYXBoaWNcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHZpZXdCb3g9XCIwIDAgNjQgNjRcIj5cclxuICAgICAgICAgICAgPGNpcmNsZSBjbGFzcz1cInBsYXktY2lyY2xlXCIgY3g9XCIzMi4yXCIgY3k9XCIzMS44XCIgcj1cIjMxLjhcIiAvPlxyXG4gICAgICAgICAgICA8cG9seWdvbiBjbGFzcz1cInBsYXktdHJpYW5nbGVcIiBwb2ludHM9XCIyMywxNC4xIDIzLDUwLjggNDguMywzMi41XCIgLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgIDwvZGl2PlxyXG5cclxuPC9kaXY+XHJcblxyXG5cclxuPGRpdiBjbGFzcz1cImF1ZGlvLXBsYXllclwiICpuZ0lmPVwidHlwZSA9PT0gJ2F1ZGlvJ1wiPlxyXG5cclxuICAgIDxzdmcgd2lkdGg9XCIyNHB4XCIgaGVpZ2h0PVwiMjRweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgICAgICA8ZyBzdHJva2U9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPlxyXG4gICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTk4LjAwMDAwMCwgLTQ1OC4wMDAwMDApXCI+XHJcbiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOTguMDAwMDAwLCA0NTguMDAwMDAwKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNC41LDAuNSBMMTguMDQzNTMwOCwwLjUgTDIzLjUsNi4yMjI1MTUwMiBMMjMuNSwyMy41IEw0LjUsMjMuNSBMNC41LDAuNSBaXCIgZmlsbD1cIiNDQ0VBRTJcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk00LjUsOCBMNC41LDAuNSBMMTgsMC41IEwyMy41LDYgTDIzLjUsMjMuNSBMMTgsMjMuNVwiIHN0cm9rZT1cIiM2MDc5OERcIiBmaWxsPVwiI0NDRUFFMlwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTQsMTMuNSBMMC41LDEzLjUgTDAuNSwxOC41IEw0LDE4LjUgTDkuNSwyMi41IEw5LjUsOS41IEw0LDEzLjUgWlwiIHN0cm9rZT1cIiM2MDc5OERcIiBmaWxsPVwiIzg1RDJCRVwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTExLjUsMTIuNTEzNzkzOSBDMTMuNzU3NjIyNSwxMi41MTM3OTM5IDE0LjUsMTQuMzcwOTIzNiAxNC41LDE2IEMxNC41LDE3LjY4NDkyMzYgMTMuNzA4OTE1MiwxOS41NDIwNTMyIDExLjUsMTkuNTQyMDUzMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cIiM2MDc5OERcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMS41LDkgQzE1LjgwMzc2NDMsOS4wNDE2ODcwMSAxOC41LDExLjY2MDQ4MDUgMTguNSwxNiBDMTguNSwyMC4zMzk1MTk1IDE1Ljg4MDQzMDIsMjMuMDA3OTk1NiAxMS41LDIzXCIgc3Ryb2tlPVwiIzYwNzk4RFwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE3LjUyMTkxMTYsMC43NjE0MTM1NzQgTDE3LjUyMTkxMTYsNiBMMjMsNlwiIHN0cm9rZT1cIiM2MDc5OERcIiBmaWxsPVwiIzg1RDJCRVwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgIDwvZz5cclxuICAgIDwvc3ZnPlxyXG5cclxuICAgIDxwIGNsYXNzPVwiYXVkaW8tZmlsZS1uYW1lXCI+e3sgKGF1ZGlvTWV0YWRhdGEgfCBhc3luYyk/LmZpbGVuYW1lIH19PC9wPlxyXG4gICAgPHAgY2xhc3M9XCJhdWRpby1maWxlLWZvcm1hdFwiPnt7IChhdWRpb01ldGFkYXRhIHwgYXN5bmMpPy5kZXNjcmlwdGlvbiB9fTwvcD5cclxuICAgIDxwIGNsYXNzPVwiYXVkaW8tZmlsZS1zaXplXCI+e3sgKGF1ZGlvTWV0YWRhdGEgfCBhc3luYyk/LnNpemUgfCBmaWxlU2l6ZSB9fTwvcD5cclxuXHJcbiAgICA8YXVkaW8gI3BsYXllclxyXG4gICAgICAgIFtzcmNdPVwic291cmNlXCJcclxuICAgICAgICAoYWJvcnQpPVwibWVkaWFQbGF5ZXJTZXJ2aWNlLmFib3J0RXZlbnQubmV4dCgpXCJcclxuICAgICAgICAoY2FucGxheSk9XCJtZWRpYVBsYXllclNlcnZpY2UuY2FuUGxheUV2ZW50Lm5leHQodHJ1ZSlcIlxyXG4gICAgICAgIChjYW5wbGF5dGhyb3VnaCk9XCJtZWRpYVBsYXllclNlcnZpY2UuY2FuUGxheVRocm91Z2hFdmVudC5uZXh0KHRydWUpXCJcclxuICAgICAgICAoZHVyYXRpb25jaGFuZ2UpPVwibWVkaWFQbGF5ZXJTZXJ2aWNlLmR1cmF0aW9uQ2hhbmdlRXZlbnQubmV4dChwbGF5ZXIuZHVyYXRpb24pXCJcclxuICAgICAgICAoZW5kZWQpPVwibWVkaWFQbGF5ZXJTZXJ2aWNlLmVuZGVkRXZlbnQubmV4dCgpXCJcclxuICAgICAgICAoZXJyb3IpPVwibWVkaWFQbGF5ZXJTZXJ2aWNlLmVycm9yRXZlbnQubmV4dCgkZXZlbnQpXCJcclxuICAgICAgICAobG9hZGVkZGF0YSk9XCJtZWRpYVBsYXllclNlcnZpY2UubG9hZGVkRGF0YUV2ZW50Lm5leHQoJGV2ZW50KVwiXHJcbiAgICAgICAgKGxvYWRlZG1ldGFkYXRhKT1cIm1lZGlhUGxheWVyU2VydmljZS5sb2FkZWRNZXRhZGF0YUV2ZW50Lm5leHQoJGV2ZW50KVwiXHJcbiAgICAgICAgKGxvYWRzdGFydCk9XCJtZWRpYVBsYXllclNlcnZpY2UubG9hZFN0YXJ0RXZlbnQubmV4dCgpXCJcclxuICAgICAgICAocGF1c2UpPVwibWVkaWFQbGF5ZXJTZXJ2aWNlLnBhdXNlRXZlbnQubmV4dCgpXCJcclxuICAgICAgICAocGxheSk9XCJtZWRpYVBsYXllclNlcnZpY2UucGxheUV2ZW50Lm5leHQoKVwiXHJcbiAgICAgICAgKHBsYXlpbmcpPVwibWVkaWFQbGF5ZXJTZXJ2aWNlLnBsYXlpbmdFdmVudC5uZXh0KCFwbGF5ZXIucGF1c2VkKVwiXHJcbiAgICAgICAgKHJhdGVjaGFuZ2UpPVwibWVkaWFQbGF5ZXJTZXJ2aWNlLnJhdGVDaGFuZ2VFdmVudC5uZXh0KHBsYXllci5wbGF5YmFja1JhdGUpXCJcclxuICAgICAgICAoc2Vla2VkKT1cIm1lZGlhUGxheWVyU2VydmljZS5zZWVrZWRFdmVudC5uZXh0KHBsYXllci5jdXJyZW50VGltZSlcIlxyXG4gICAgICAgIChzZWVraW5nKT1cIm1lZGlhUGxheWVyU2VydmljZS5zZWVraW5nRXZlbnQubmV4dChwbGF5ZXIuY3VycmVudFRpbWUpXCJcclxuICAgICAgICAoc3RhbGxlZCk9XCJtZWRpYVBsYXllclNlcnZpY2Uuc3RhbGxlZEV2ZW50Lm5leHQoKVwiXHJcbiAgICAgICAgKHN1c3BlbmQpPVwibWVkaWFQbGF5ZXJTZXJ2aWNlLnN1c3BlbmRFdmVudC5uZXh0KClcIlxyXG4gICAgICAgICh0aW1ldXBkYXRlKT1cIm1lZGlhUGxheWVyU2VydmljZS50aW1lVXBkYXRlRXZlbnQubmV4dChwbGF5ZXIuY3VycmVudFRpbWUpXCJcclxuICAgICAgICAodm9sdW1lY2hhbmdlKT1cIm1lZGlhUGxheWVyU2VydmljZS52b2x1bWVDaGFuZ2VFdmVudC5uZXh0KHBsYXllci52b2x1bWUpXCJcclxuICAgICAgICAod2FpdGluZyk9XCJtZWRpYVBsYXllclNlcnZpY2Uud2FpdGluZ0V2ZW50Lm5leHQoKVwiXHJcbiAgICAgICAgKGNsaWNrKT1cIm1lZGlhUGxheWVyU2VydmljZS5tZWRpYUNsaWNrRXZlbnQubmV4dCgkZXZlbnQpXCI+XHJcbiAgICA8L2F1ZGlvPlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJjb250cm9sLWJhclwiPlxyXG4gICAgPHV4LW1lZGlhLXBsYXllci10aW1lbGluZT48L3V4LW1lZGlhLXBsYXllci10aW1lbGluZT5cclxuICAgIDx1eC1tZWRpYS1wbGF5ZXItY29udHJvbHM+PC91eC1tZWRpYS1wbGF5ZXItY29udHJvbHM+XHJcbjwvZGl2PmAsXHJcbiAgICBwcm92aWRlcnM6IFtNZWRpYVBsYXllclNlcnZpY2VdLFxyXG4gICAgaG9zdDoge1xyXG4gICAgICAgICd0YWJpbmRleCc6ICcwJyxcclxuICAgICAgICAnKGtleWRvd24uU3BhY2UpJzogJ21lZGlhUGxheWVyU2VydmljZS50b2dnbGVQbGF5KCknLFxyXG4gICAgICAgICdbY2xhc3Muc3RhbmRhcmRdJzogJyFtZWRpYVBsYXllclNlcnZpY2UuZnVsbHNjcmVlbicsXHJcbiAgICAgICAgJ1tjbGFzcy5mdWxsc2NyZWVuXSc6ICdtZWRpYVBsYXllclNlcnZpY2UuZnVsbHNjcmVlbicsXHJcbiAgICAgICAgJ1tjbGFzcy5xdWlldF0nOiAncXVpZXRNb2RlICYmIHR5cGUgPT09IFwidmlkZW9cIiB8fCBtZWRpYVBsYXllclNlcnZpY2UuZnVsbHNjcmVlbicsXHJcbiAgICAgICAgJ1tjbGFzcy5ob3Zlcl0nOiAnaG92ZXJpbmcnLFxyXG4gICAgICAgICdbY2xhc3MudmlkZW9dJzogJ3R5cGUgPT09IFwidmlkZW9cIicsXHJcbiAgICAgICAgJ1tjbGFzcy5hdWRpb10nOiAndHlwZSA9PT0gXCJhdWRpb1wiJyxcclxuICAgICAgICAnKG1vdXNlZW50ZXIpJzogJ2hvdmVyaW5nID0gdHJ1ZScsXHJcbiAgICAgICAgJyhtb3VzZWxlYXZlKSc6ICdob3ZlcmluZyA9IGZhbHNlJyxcclxuICAgICAgICAnKGRvY3VtZW50OndlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UpJzogJ21lZGlhUGxheWVyU2VydmljZS5mdWxsc2NyZWVuQ2hhbmdlKCRldmVudCknLFxyXG4gICAgICAgICcoZG9jdW1lbnQ6bW96ZnVsbHNjcmVlbmNoYW5nZSknOiAnbWVkaWFQbGF5ZXJTZXJ2aWNlLmZ1bGxzY3JlZW5DaGFuZ2UoJGV2ZW50KScsXHJcbiAgICAgICAgJyhkb2N1bWVudDpNU0Z1bGxzY3JlZW5DaGFuZ2UpJzogJ21lZGlhUGxheWVyU2VydmljZS5mdWxsc2NyZWVuQ2hhbmdlKCRldmVudCknXHJcbiAgICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZWRpYVBsYXllckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gICAgQFZpZXdDaGlsZCgncGxheWVyJykgcHJpdmF0ZSBfcGxheWVyUmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICAgIGhvdmVyaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBhdWRpb01ldGFkYXRhOiBPYnNlcnZhYmxlPEF1ZGlvTWV0YWRhdGE+O1xyXG5cclxuICAgIGdldCBzb3VyY2UoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tZWRpYVBsYXllclNlcnZpY2Uuc291cmNlO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBzZXQgc291cmNlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLm1lZGlhUGxheWVyU2VydmljZS5zb3VyY2UgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdHlwZSgpOiBNZWRpYVBsYXllclR5cGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1lZGlhUGxheWVyU2VydmljZS50eXBlO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBzZXQgdHlwZSh2YWx1ZTogTWVkaWFQbGF5ZXJUeXBlKSB7XHJcbiAgICAgICAgdGhpcy5tZWRpYVBsYXllclNlcnZpY2UudHlwZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBxdWlldE1vZGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWVkaWFQbGF5ZXJTZXJ2aWNlLnF1aWV0TW9kZTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgc2V0IHF1aWV0TW9kZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMubWVkaWFQbGF5ZXJTZXJ2aWNlLnF1aWV0TW9kZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX29uRGVzdHJveSA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIG1lZGlhUGxheWVyU2VydmljZTogTWVkaWFQbGF5ZXJTZXJ2aWNlLCBwcml2YXRlIF9hdWRpb1NlcnZpY2U6IEF1ZGlvU2VydmljZSwgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xyXG5cclxuICAgICAgICAvLyBzaG93IGNvbnRyb2xzIHdoZW4gaG92ZXJpbmcgYW5kIGluIHF1aWV0IG1vZGVcclxuICAgICAgICBmcm9tRXZlbnQodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnbW91c2Vtb3ZlJykucGlwZShcclxuICAgICAgICAgICAgc3dpdGNoTWFwKChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ob3ZlcmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb2YoZXZlbnQpO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgZGVib3VuY2VUaW1lKDIwMDApLFxyXG4gICAgICAgICAgICB0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KVxyXG4gICAgICAgICkuc3Vic2NyaWJlKCgpID0+IHRoaXMuaG92ZXJpbmcgPSBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubWVkaWFQbGF5ZXJTZXJ2aWNlLnNldE1lZGlhUGxheWVyKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5fcGxheWVyUmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG5cclxuICAgICAgICB0aGlzLmF1ZGlvTWV0YWRhdGEgPSB0aGlzLl9hdWRpb1NlcnZpY2UuZ2V0QXVkaW9GaWxlTWV0YWRhdGEodGhpcy5fcGxheWVyUmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMubWVkaWFQbGF5ZXJTZXJ2aWNlLnBsYXlpbmdFdmVudC5waXBlKHRha2VVbnRpbCh0aGlzLl9vbkRlc3Ryb3kpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5tZWRpYVBsYXllclNlcnZpY2UucGxheWluZy5uZXh0KHRydWUpKTtcclxuICAgICAgICB0aGlzLm1lZGlhUGxheWVyU2VydmljZS5wYXVzZUV2ZW50LnBpcGUodGFrZVVudGlsKHRoaXMuX29uRGVzdHJveSkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLm1lZGlhUGxheWVyU2VydmljZS5wbGF5aW5nLm5leHQoZmFsc2UpKTtcclxuICAgICAgICB0aGlzLm1lZGlhUGxheWVyU2VydmljZS5tZWRpYUNsaWNrRXZlbnQucGlwZSh0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KSkuc3Vic2NyaWJlKCgpID0+IHRoaXMubWVkaWFQbGF5ZXJTZXJ2aWNlLnRvZ2dsZVBsYXkoKSk7XHJcbiAgICAgICAgdGhpcy5tZWRpYVBsYXllclNlcnZpY2UubG9hZGVkTWV0YWRhdGFFdmVudC5waXBlKHRha2VVbnRpbCh0aGlzLl9vbkRlc3Ryb3kpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5tZWRpYVBsYXllclNlcnZpY2UubG9hZGVkID0gdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fb25EZXN0cm95Lm5leHQoKTtcclxuICAgICAgICB0aGlzLl9vbkRlc3Ryb3kuY29tcGxldGUoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgTWVkaWFQbGF5ZXJUeXBlID0gJ3ZpZGVvJyB8ICdhdWRpbyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1lZGlhUGxheWVyQnVmZmVyIHtcclxuICAgIHN0YXJ0OiBudW1iZXI7XHJcbiAgICBlbmQ6IG51bWJlcjtcclxufSJdfQ==