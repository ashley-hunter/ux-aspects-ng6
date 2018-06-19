/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { fromEvent, of, Subject } from 'rxjs';
import { debounceTime, switchMap, takeUntil } from 'rxjs/operators';
import { AudioService } from '../../services/audio/index';
import { MediaPlayerService } from './media-player.service';
export class MediaPlayerComponent {
    /**
     * @param {?} mediaPlayerService
     * @param {?} _audioService
     * @param {?} _elementRef
     */
    constructor(mediaPlayerService, _audioService, _elementRef) {
        this.mediaPlayerService = mediaPlayerService;
        this._audioService = _audioService;
        this._elementRef = _elementRef;
        this.hovering = false;
        this._onDestroy = new Subject();
        // show controls when hovering and in quiet mode
        fromEvent(this._elementRef.nativeElement, 'mousemove').pipe(switchMap((event) => {
            this.hovering = true;
            return of(event);
        }), debounceTime(2000), takeUntil(this._onDestroy)).subscribe(() => this.hovering = false);
    }
    /**
     * @return {?}
     */
    get source() {
        return this.mediaPlayerService.source;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set source(value) {
        this.mediaPlayerService.source = value;
    }
    /**
     * @return {?}
     */
    get type() {
        return this.mediaPlayerService.type;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set type(value) {
        this.mediaPlayerService.type = value;
    }
    /**
     * @return {?}
     */
    get quietMode() {
        return this.mediaPlayerService.quietMode;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set quietMode(value) {
        this.mediaPlayerService.quietMode = value;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.mediaPlayerService.setMediaPlayer(this._elementRef.nativeElement, this._playerRef.nativeElement);
        this.audioMetadata = this._audioService.getAudioFileMetadata(this._playerRef.nativeElement);
        this.mediaPlayerService.playingEvent.pipe(takeUntil(this._onDestroy)).subscribe(() => this.mediaPlayerService.playing.next(true));
        this.mediaPlayerService.pauseEvent.pipe(takeUntil(this._onDestroy)).subscribe(() => this.mediaPlayerService.playing.next(false));
        this.mediaPlayerService.mediaClickEvent.pipe(takeUntil(this._onDestroy)).subscribe(() => this.mediaPlayerService.togglePlay());
        this.mediaPlayerService.loadedMetadataEvent.pipe(takeUntil(this._onDestroy)).subscribe(() => this.mediaPlayerService.loaded = true);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._onDestroy.next();
        this._onDestroy.complete();
    }
}
MediaPlayerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-media-player',
                template: `<div class="video-player-container" *ngIf="type === 'video'">

    <video class="video-player"
        #player
        [src]="source"
        (abort)="mediaPlayerService.abortEvent.next()"
        (canplay)="mediaPlayerService.canPlayEvent.next(true)"
        (canplaythrough)="mediaPlayerService.canPlayThroughEvent.next(true)"
        (durationchange)="mediaPlayerService.durationChangeEvent.next(player.duration)"
        (ended)="mediaPlayerService.endedEvent.next()"
        (error)="mediaPlayerService.errorEvent.next($event)"
        (loadeddata)="mediaPlayerService.loadedDataEvent.next($event)"
        (loadedmetadata)="mediaPlayerService.loadedMetadataEvent.next($event)"
        (loadstart)="mediaPlayerService.loadStartEvent.next()"
        (pause)="mediaPlayerService.pauseEvent.next()"
        (play)="mediaPlayerService.playEvent.next()"
        (playing)="mediaPlayerService.playingEvent.next(!player.paused)"
        (ratechange)="mediaPlayerService.rateChangeEvent.next(player.playbackRate)"
        (seeked)="mediaPlayerService.seekedEvent.next(player.currentTime)"
        (seeking)="mediaPlayerService.seekingEvent.next(player.currentTime)"
        (stalled)="mediaPlayerService.stalledEvent.next()"
        (suspend)="mediaPlayerService.suspendEvent.next()"
        (timeupdate)="mediaPlayerService.timeUpdateEvent.next(player.currentTime)"
        (volumechange)="mediaPlayerService.volumeChangeEvent.next(player.volume)"
        (waiting)="mediaPlayerService.waitingEvent.next()"
        (click)="mediaPlayerService.mediaClickEvent.next($event)">
    </video>

    <div class="video-overlay" [class.playing]="mediaPlayerService.playing | async">
        <svg class="play-graphic" x="0px" y="0px" viewBox="0 0 64 64">
            <circle class="play-circle" cx="32.2" cy="31.8" r="31.8" />
            <polygon class="play-triangle" points="23,14.1 23,50.8 48.3,32.5" />
        </svg>
    </div>

</div>


<div class="audio-player" *ngIf="type === 'audio'">

    <svg width="24px" height="24px" viewBox="0 0 24 24">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(-98.000000, -458.000000)">
                <g transform="translate(98.000000, 458.000000)">
                    <path d="M4.5,0.5 L18.0435308,0.5 L23.5,6.22251502 L23.5,23.5 L4.5,23.5 L4.5,0.5 Z" fill="#CCEAE2"></path>
                    <path d="M4.5,8 L4.5,0.5 L18,0.5 L23.5,6 L23.5,23.5 L18,23.5" stroke="#60798D" fill="#CCEAE2"></path>
                    <path d="M4,13.5 L0.5,13.5 L0.5,18.5 L4,18.5 L9.5,22.5 L9.5,9.5 L4,13.5 Z" stroke="#60798D" fill="#85D2BE"></path>
                    <path d="M11.5,12.5137939 C13.7576225,12.5137939 14.5,14.3709236 14.5,16 C14.5,17.6849236 13.7089152,19.5420532 11.5,19.5420532"
                        stroke="#60798D"></path>
                    <path d="M11.5,9 C15.8037643,9.04168701 18.5,11.6604805 18.5,16 C18.5,20.3395195 15.8804302,23.0079956 11.5,23" stroke="#60798D"></path>
                    <path d="M17.5219116,0.761413574 L17.5219116,6 L23,6" stroke="#60798D" fill="#85D2BE"></path>
                </g>
            </g>
        </g>
    </svg>

    <p class="audio-file-name">{{ (audioMetadata | async)?.filename }}</p>
    <p class="audio-file-format">{{ (audioMetadata | async)?.description }}</p>
    <p class="audio-file-size">{{ (audioMetadata | async)?.size | fileSize }}</p>

    <audio #player
        [src]="source"
        (abort)="mediaPlayerService.abortEvent.next()"
        (canplay)="mediaPlayerService.canPlayEvent.next(true)"
        (canplaythrough)="mediaPlayerService.canPlayThroughEvent.next(true)"
        (durationchange)="mediaPlayerService.durationChangeEvent.next(player.duration)"
        (ended)="mediaPlayerService.endedEvent.next()"
        (error)="mediaPlayerService.errorEvent.next($event)"
        (loadeddata)="mediaPlayerService.loadedDataEvent.next($event)"
        (loadedmetadata)="mediaPlayerService.loadedMetadataEvent.next($event)"
        (loadstart)="mediaPlayerService.loadStartEvent.next()"
        (pause)="mediaPlayerService.pauseEvent.next()"
        (play)="mediaPlayerService.playEvent.next()"
        (playing)="mediaPlayerService.playingEvent.next(!player.paused)"
        (ratechange)="mediaPlayerService.rateChangeEvent.next(player.playbackRate)"
        (seeked)="mediaPlayerService.seekedEvent.next(player.currentTime)"
        (seeking)="mediaPlayerService.seekingEvent.next(player.currentTime)"
        (stalled)="mediaPlayerService.stalledEvent.next()"
        (suspend)="mediaPlayerService.suspendEvent.next()"
        (timeupdate)="mediaPlayerService.timeUpdateEvent.next(player.currentTime)"
        (volumechange)="mediaPlayerService.volumeChangeEvent.next(player.volume)"
        (waiting)="mediaPlayerService.waitingEvent.next()"
        (click)="mediaPlayerService.mediaClickEvent.next($event)">
    </audio>
</div>

<div class="control-bar">
    <ux-media-player-timeline></ux-media-player-timeline>
    <ux-media-player-controls></ux-media-player-controls>
</div>`,
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
MediaPlayerComponent.ctorParameters = () => [
    { type: MediaPlayerService, },
    { type: AudioService, },
    { type: ElementRef, },
];
MediaPlayerComponent.propDecorators = {
    "_playerRef": [{ type: ViewChild, args: ['player',] },],
    "source": [{ type: Input },],
    "type": [{ type: Input },],
    "quietMode": [{ type: Input },],
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEtcGxheWVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL21lZGlhLXBsYXllci9tZWRpYS1wbGF5ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFhLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRyxPQUFPLEVBQWdCLFNBQVMsRUFBSSxFQUFFLEVBQUksT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBaUIsWUFBWSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDekUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUErRzVELE1BQU07Ozs7OztJQW9DRixZQUFtQixrQkFBc0MsRUFBVSxhQUEyQixFQUFVLFdBQXVCO1FBQTVHLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFZO3dCQWhDM0csS0FBSzswQkE4QkosSUFBSSxPQUFPLEVBQVE7O1FBS3BDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQ3ZELFNBQVMsQ0FBQyxDQUFDLEtBQWlCLEVBQUUsRUFBRTtZQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BCLENBQUMsRUFDRixZQUFZLENBQUMsSUFBSSxDQUFDLEVBQ2xCLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENB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LGVBQWUsRUFBRSxnRUFBZ0U7b0JBQ2pGLGVBQWUsRUFBRSxVQUFVO29CQUMzQixlQUFlLEVBQUUsa0JBQWtCO29CQUNuQyxlQUFlLEVBQUUsa0JBQWtCO29CQUNuQyxjQUFjLEVBQUUsaUJBQWlCO29CQUNqQyxjQUFjLEVBQUUsa0JBQWtCO29CQUNsQyxtQ0FBbUMsRUFBRSw2Q0FBNkM7b0JBQ2xGLGdDQUFnQyxFQUFFLDZDQUE2QztvQkFDL0UsK0JBQStCLEVBQUUsNkNBQTZDO2lCQUNqRjthQUNKOzs7O1lBOUdRLGtCQUFrQjtZQURILFlBQVk7WUFIRCxVQUFVOzs7MkJBcUh4QyxTQUFTLFNBQUMsUUFBUTt1QkFTbEIsS0FBSztxQkFTTCxLQUFLOzBCQVNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkRlc3Ryb3ksIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlICwgIGZyb21FdmVudCAsICBvZiAsICBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgc3dpdGNoTWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IEF1ZGlvTWV0YWRhdGEsIEF1ZGlvU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1ZGlvL2luZGV4JztcclxuaW1wb3J0IHsgTWVkaWFQbGF5ZXJTZXJ2aWNlIH0gZnJvbSAnLi9tZWRpYS1wbGF5ZXIuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndXgtbWVkaWEtcGxheWVyJyxcclxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInZpZGVvLXBsYXllci1jb250YWluZXJcIiAqbmdJZj1cInR5cGUgPT09ICd2aWRlbydcIj5cclxuXHJcbiAgICA8dmlkZW8gY2xhc3M9XCJ2aWRlby1wbGF5ZXJcIlxyXG4gICAgICAgICNwbGF5ZXJcclxuICAgICAgICBbc3JjXT1cInNvdXJjZVwiXHJcbiAgICAgICAgKGFib3J0KT1cIm1lZGlhUGxheWVyU2VydmljZS5hYm9ydEV2ZW50Lm5leHQoKVwiXHJcbiAgICAgICAgKGNhbnBsYXkpPVwibWVkaWFQbGF5ZXJTZXJ2aWNlLmNhblBsYXlFdmVudC5uZXh0KHRydWUpXCJcclxuICAgICAgICAoY2FucGxheXRocm91Z2gpPVwibWVkaWFQbGF5ZXJTZXJ2aWNlLmNhblBsYXlUaHJvdWdoRXZlbnQubmV4dCh0cnVlKVwiXHJcbiAgICAgICAgKGR1cmF0aW9uY2hhbmdlKT1cIm1lZGlhUGxheWVyU2VydmljZS5kdXJhdGlvbkNoYW5nZUV2ZW50Lm5leHQocGxheWVyLmR1cmF0aW9uKVwiXHJcbiAgICAgICAgKGVuZGVkKT1cIm1lZGlhUGxheWVyU2VydmljZS5lbmRlZEV2ZW50Lm5leHQoKVwiXHJcbiAgICAgICAgKGVycm9yKT1cIm1lZGlhUGxheWVyU2VydmljZS5lcnJvckV2ZW50Lm5leHQoJGV2ZW50KVwiXHJcbiAgICAgICAgKGxvYWRlZGRhdGEpPVwibWVkaWFQbGF5ZXJTZXJ2aWNlLmxvYWRlZERhdGFFdmVudC5uZXh0KCRldmVudClcIlxyXG4gICAgICAgIChsb2FkZWRtZXRhZGF0YSk9XCJtZWRpYVBsYXllclNlcnZpY2UubG9hZGVkTWV0YWRhdGFFdmVudC5uZXh0KCRldmVudClcIlxyXG4gICAgICAgIChsb2Fkc3RhcnQpPVwibWVkaWFQbGF5ZXJTZXJ2aWNlLmxvYWRTdGFydEV2ZW50Lm5leHQoKVwiXHJcbiAgICAgICAgKHBhdXNlKT1cIm1lZGlhUGxheWVyU2VydmljZS5wYXVzZUV2ZW50Lm5leHQoKVwiXHJcbiAgICAgICAgKHBsYXkpPVwibWVkaWFQbGF5ZXJTZXJ2aWNlLnBsYXlFdmVudC5uZXh0KClcIlxyXG4gICAgICAgIChwbGF5aW5nKT1cIm1lZGlhUGxheWVyU2VydmljZS5wbGF5aW5nRXZlbnQubmV4dCghcGxheWVyLnBhdXNlZClcIlxyXG4gICAgICAgIChyYXRlY2hhbmdlKT1cIm1lZGlhUGxheWVyU2VydmljZS5yYXRlQ2hhbmdlRXZlbnQubmV4dChwbGF5ZXIucGxheWJhY2tSYXRlKVwiXHJcbiAgICAgICAgKHNlZWtlZCk9XCJtZWRpYVBsYXllclNlcnZpY2Uuc2Vla2VkRXZlbnQubmV4dChwbGF5ZXIuY3VycmVudFRpbWUpXCJcclxuICAgICAgICAoc2Vla2luZyk9XCJtZWRpYVBsYXllclNlcnZpY2Uuc2Vla2luZ0V2ZW50Lm5leHQocGxheWVyLmN1cnJlbnRUaW1lKVwiXHJcbiAgICAgICAgKHN0YWxsZWQpPVwibWVkaWFQbGF5ZXJTZXJ2aWNlLnN0YWxsZWRFdmVudC5uZXh0KClcIlxyXG4gICAgICAgIChzdXNwZW5kKT1cIm1lZGlhUGxheWVyU2VydmljZS5zdXNwZW5kRXZlbnQubmV4dCgpXCJcclxuICAgICAgICAodGltZXVwZGF0ZSk9XCJtZWRpYVBsYXllclNlcnZpY2UudGltZVVwZGF0ZUV2ZW50Lm5leHQocGxheWVyLmN1cnJlbnRUaW1lKVwiXHJcbiAgICAgICAgKHZvbHVtZWNoYW5nZSk9XCJtZWRpYVBsYXllclNlcnZpY2Uudm9sdW1lQ2hhbmdlRXZlbnQubmV4dChwbGF5ZXIudm9sdW1lKVwiXHJcbiAgICAgICAgKHdhaXRpbmcpPVwibWVkaWFQbGF5ZXJTZXJ2aWNlLndhaXRpbmdFdmVudC5uZXh0KClcIlxyXG4gICAgICAgIChjbGljayk9XCJtZWRpYVBsYXllclNlcnZpY2UubWVkaWFDbGlja0V2ZW50Lm5leHQoJGV2ZW50KVwiPlxyXG4gICAgPC92aWRlbz5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwidmlkZW8tb3ZlcmxheVwiIFtjbGFzcy5wbGF5aW5nXT1cIm1lZGlhUGxheWVyU2VydmljZS5wbGF5aW5nIHwgYXN5bmNcIj5cclxuICAgICAgICA8c3ZnIGNsYXNzPVwicGxheS1ncmFwaGljXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDY0IDY0XCI+XHJcbiAgICAgICAgICAgIDxjaXJjbGUgY2xhc3M9XCJwbGF5LWNpcmNsZVwiIGN4PVwiMzIuMlwiIGN5PVwiMzEuOFwiIHI9XCIzMS44XCIgLz5cclxuICAgICAgICAgICAgPHBvbHlnb24gY2xhc3M9XCJwbGF5LXRyaWFuZ2xlXCIgcG9pbnRzPVwiMjMsMTQuMSAyMyw1MC44IDQ4LjMsMzIuNVwiIC8+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICA8L2Rpdj5cclxuXHJcbjwvZGl2PlxyXG5cclxuXHJcbjxkaXYgY2xhc3M9XCJhdWRpby1wbGF5ZXJcIiAqbmdJZj1cInR5cGUgPT09ICdhdWRpbydcIj5cclxuXHJcbiAgICA8c3ZnIHdpZHRoPVwiMjRweFwiIGhlaWdodD1cIjI0cHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcbiAgICAgICAgPGcgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjFcIiBmaWxsPVwibm9uZVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIj5cclxuICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC05OC4wMDAwMDAsIC00NTguMDAwMDAwKVwiPlxyXG4gICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDk4LjAwMDAwMCwgNDU4LjAwMDAwMClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTQuNSwwLjUgTDE4LjA0MzUzMDgsMC41IEwyMy41LDYuMjIyNTE1MDIgTDIzLjUsMjMuNSBMNC41LDIzLjUgTDQuNSwwLjUgWlwiIGZpbGw9XCIjQ0NFQUUyXCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNC41LDggTDQuNSwwLjUgTDE4LDAuNSBMMjMuNSw2IEwyMy41LDIzLjUgTDE4LDIzLjVcIiBzdHJva2U9XCIjNjA3OThEXCIgZmlsbD1cIiNDQ0VBRTJcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk00LDEzLjUgTDAuNSwxMy41IEwwLjUsMTguNSBMNCwxOC41IEw5LjUsMjIuNSBMOS41LDkuNSBMNCwxMy41IFpcIiBzdHJva2U9XCIjNjA3OThEXCIgZmlsbD1cIiM4NUQyQkVcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMS41LDEyLjUxMzc5MzkgQzEzLjc1NzYyMjUsMTIuNTEzNzkzOSAxNC41LDE0LjM3MDkyMzYgMTQuNSwxNiBDMTQuNSwxNy42ODQ5MjM2IDEzLjcwODkxNTIsMTkuNTQyMDUzMiAxMS41LDE5LjU0MjA1MzJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9XCIjNjA3OThEXCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTEuNSw5IEMxNS44MDM3NjQzLDkuMDQxNjg3MDEgMTguNSwxMS42NjA0ODA1IDE4LjUsMTYgQzE4LjUsMjAuMzM5NTE5NSAxNS44ODA0MzAyLDIzLjAwNzk5NTYgMTEuNSwyM1wiIHN0cm9rZT1cIiM2MDc5OERcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNy41MjE5MTE2LDAuNzYxNDEzNTc0IEwxNy41MjE5MTE2LDYgTDIzLDZcIiBzdHJva2U9XCIjNjA3OThEXCIgZmlsbD1cIiM4NUQyQkVcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICA8L2c+XHJcbiAgICA8L3N2Zz5cclxuXHJcbiAgICA8cCBjbGFzcz1cImF1ZGlvLWZpbGUtbmFtZVwiPnt7IChhdWRpb01ldGFkYXRhIHwgYXN5bmMpPy5maWxlbmFtZSB9fTwvcD5cclxuICAgIDxwIGNsYXNzPVwiYXVkaW8tZmlsZS1mb3JtYXRcIj57eyAoYXVkaW9NZXRhZGF0YSB8IGFzeW5jKT8uZGVzY3JpcHRpb24gfX08L3A+XHJcbiAgICA8cCBjbGFzcz1cImF1ZGlvLWZpbGUtc2l6ZVwiPnt7IChhdWRpb01ldGFkYXRhIHwgYXN5bmMpPy5zaXplIHwgZmlsZVNpemUgfX08L3A+XHJcblxyXG4gICAgPGF1ZGlvICNwbGF5ZXJcclxuICAgICAgICBbc3JjXT1cInNvdXJjZVwiXHJcbiAgICAgICAgKGFib3J0KT1cIm1lZGlhUGxheWVyU2VydmljZS5hYm9ydEV2ZW50Lm5leHQoKVwiXHJcbiAgICAgICAgKGNhbnBsYXkpPVwibWVkaWFQbGF5ZXJTZXJ2aWNlLmNhblBsYXlFdmVudC5uZXh0KHRydWUpXCJcclxuICAgICAgICAoY2FucGxheXRocm91Z2gpPVwibWVkaWFQbGF5ZXJTZXJ2aWNlLmNhblBsYXlUaHJvdWdoRXZlbnQubmV4dCh0cnVlKVwiXHJcbiAgICAgICAgKGR1cmF0aW9uY2hhbmdlKT1cIm1lZGlhUGxheWVyU2VydmljZS5kdXJhdGlvbkNoYW5nZUV2ZW50Lm5leHQocGxheWVyLmR1cmF0aW9uKVwiXHJcbiAgICAgICAgKGVuZGVkKT1cIm1lZGlhUGxheWVyU2VydmljZS5lbmRlZEV2ZW50Lm5leHQoKVwiXHJcbiAgICAgICAgKGVycm9yKT1cIm1lZGlhUGxheWVyU2VydmljZS5lcnJvckV2ZW50Lm5leHQoJGV2ZW50KVwiXHJcbiAgICAgICAgKGxvYWRlZGRhdGEpPVwibWVkaWFQbGF5ZXJTZXJ2aWNlLmxvYWRlZERhdGFFdmVudC5uZXh0KCRldmVudClcIlxyXG4gICAgICAgIChsb2FkZWRtZXRhZGF0YSk9XCJtZWRpYVBsYXllclNlcnZpY2UubG9hZGVkTWV0YWRhdGFFdmVudC5uZXh0KCRldmVudClcIlxyXG4gICAgICAgIChsb2Fkc3RhcnQpPVwibWVkaWFQbGF5ZXJTZXJ2aWNlLmxvYWRTdGFydEV2ZW50Lm5leHQoKVwiXHJcbiAgICAgICAgKHBhdXNlKT1cIm1lZGlhUGxheWVyU2VydmljZS5wYXVzZUV2ZW50Lm5leHQoKVwiXHJcbiAgICAgICAgKHBsYXkpPVwibWVkaWFQbGF5ZXJTZXJ2aWNlLnBsYXlFdmVudC5uZXh0KClcIlxyXG4gICAgICAgIChwbGF5aW5nKT1cIm1lZGlhUGxheWVyU2VydmljZS5wbGF5aW5nRXZlbnQubmV4dCghcGxheWVyLnBhdXNlZClcIlxyXG4gICAgICAgIChyYXRlY2hhbmdlKT1cIm1lZGlhUGxheWVyU2VydmljZS5yYXRlQ2hhbmdlRXZlbnQubmV4dChwbGF5ZXIucGxheWJhY2tSYXRlKVwiXHJcbiAgICAgICAgKHNlZWtlZCk9XCJtZWRpYVBsYXllclNlcnZpY2Uuc2Vla2VkRXZlbnQubmV4dChwbGF5ZXIuY3VycmVudFRpbWUpXCJcclxuICAgICAgICAoc2Vla2luZyk9XCJtZWRpYVBsYXllclNlcnZpY2Uuc2Vla2luZ0V2ZW50Lm5leHQocGxheWVyLmN1cnJlbnRUaW1lKVwiXHJcbiAgICAgICAgKHN0YWxsZWQpPVwibWVkaWFQbGF5ZXJTZXJ2aWNlLnN0YWxsZWRFdmVudC5uZXh0KClcIlxyXG4gICAgICAgIChzdXNwZW5kKT1cIm1lZGlhUGxheWVyU2VydmljZS5zdXNwZW5kRXZlbnQubmV4dCgpXCJcclxuICAgICAgICAodGltZXVwZGF0ZSk9XCJtZWRpYVBsYXllclNlcnZpY2UudGltZVVwZGF0ZUV2ZW50Lm5leHQocGxheWVyLmN1cnJlbnRUaW1lKVwiXHJcbiAgICAgICAgKHZvbHVtZWNoYW5nZSk9XCJtZWRpYVBsYXllclNlcnZpY2Uudm9sdW1lQ2hhbmdlRXZlbnQubmV4dChwbGF5ZXIudm9sdW1lKVwiXHJcbiAgICAgICAgKHdhaXRpbmcpPVwibWVkaWFQbGF5ZXJTZXJ2aWNlLndhaXRpbmdFdmVudC5uZXh0KClcIlxyXG4gICAgICAgIChjbGljayk9XCJtZWRpYVBsYXllclNlcnZpY2UubWVkaWFDbGlja0V2ZW50Lm5leHQoJGV2ZW50KVwiPlxyXG4gICAgPC9hdWRpbz5cclxuPC9kaXY+XHJcblxyXG48ZGl2IGNsYXNzPVwiY29udHJvbC1iYXJcIj5cclxuICAgIDx1eC1tZWRpYS1wbGF5ZXItdGltZWxpbmU+PC91eC1tZWRpYS1wbGF5ZXItdGltZWxpbmU+XHJcbiAgICA8dXgtbWVkaWEtcGxheWVyLWNvbnRyb2xzPjwvdXgtbWVkaWEtcGxheWVyLWNvbnRyb2xzPlxyXG48L2Rpdj5gLFxyXG4gICAgcHJvdmlkZXJzOiBbTWVkaWFQbGF5ZXJTZXJ2aWNlXSxcclxuICAgIGhvc3Q6IHtcclxuICAgICAgICAndGFiaW5kZXgnOiAnMCcsXHJcbiAgICAgICAgJyhrZXlkb3duLlNwYWNlKSc6ICdtZWRpYVBsYXllclNlcnZpY2UudG9nZ2xlUGxheSgpJyxcclxuICAgICAgICAnW2NsYXNzLnN0YW5kYXJkXSc6ICchbWVkaWFQbGF5ZXJTZXJ2aWNlLmZ1bGxzY3JlZW4nLFxyXG4gICAgICAgICdbY2xhc3MuZnVsbHNjcmVlbl0nOiAnbWVkaWFQbGF5ZXJTZXJ2aWNlLmZ1bGxzY3JlZW4nLFxyXG4gICAgICAgICdbY2xhc3MucXVpZXRdJzogJ3F1aWV0TW9kZSAmJiB0eXBlID09PSBcInZpZGVvXCIgfHwgbWVkaWFQbGF5ZXJTZXJ2aWNlLmZ1bGxzY3JlZW4nLFxyXG4gICAgICAgICdbY2xhc3MuaG92ZXJdJzogJ2hvdmVyaW5nJyxcclxuICAgICAgICAnW2NsYXNzLnZpZGVvXSc6ICd0eXBlID09PSBcInZpZGVvXCInLFxyXG4gICAgICAgICdbY2xhc3MuYXVkaW9dJzogJ3R5cGUgPT09IFwiYXVkaW9cIicsXHJcbiAgICAgICAgJyhtb3VzZWVudGVyKSc6ICdob3ZlcmluZyA9IHRydWUnLFxyXG4gICAgICAgICcobW91c2VsZWF2ZSknOiAnaG92ZXJpbmcgPSBmYWxzZScsXHJcbiAgICAgICAgJyhkb2N1bWVudDp3ZWJraXRmdWxsc2NyZWVuY2hhbmdlKSc6ICdtZWRpYVBsYXllclNlcnZpY2UuZnVsbHNjcmVlbkNoYW5nZSgkZXZlbnQpJyxcclxuICAgICAgICAnKGRvY3VtZW50Om1vemZ1bGxzY3JlZW5jaGFuZ2UpJzogJ21lZGlhUGxheWVyU2VydmljZS5mdWxsc2NyZWVuQ2hhbmdlKCRldmVudCknLFxyXG4gICAgICAgICcoZG9jdW1lbnQ6TVNGdWxsc2NyZWVuQ2hhbmdlKSc6ICdtZWRpYVBsYXllclNlcnZpY2UuZnVsbHNjcmVlbkNoYW5nZSgkZXZlbnQpJ1xyXG4gICAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWVkaWFQbGF5ZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ3BsYXllcicpIHByaXZhdGUgX3BsYXllclJlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgICBob3ZlcmluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgYXVkaW9NZXRhZGF0YTogT2JzZXJ2YWJsZTxBdWRpb01ldGFkYXRhPjtcclxuXHJcbiAgICBnZXQgc291cmNlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWVkaWFQbGF5ZXJTZXJ2aWNlLnNvdXJjZTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgc2V0IHNvdXJjZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5tZWRpYVBsYXllclNlcnZpY2Uuc291cmNlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHR5cGUoKTogTWVkaWFQbGF5ZXJUeXBlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tZWRpYVBsYXllclNlcnZpY2UudHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgc2V0IHR5cGUodmFsdWU6IE1lZGlhUGxheWVyVHlwZSkge1xyXG4gICAgICAgIHRoaXMubWVkaWFQbGF5ZXJTZXJ2aWNlLnR5cGUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcXVpZXRNb2RlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1lZGlhUGxheWVyU2VydmljZS5xdWlldE1vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHNldCBxdWlldE1vZGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLm1lZGlhUGxheWVyU2VydmljZS5xdWlldE1vZGUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9vbkRlc3Ryb3kgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBtZWRpYVBsYXllclNlcnZpY2U6IE1lZGlhUGxheWVyU2VydmljZSwgcHJpdmF0ZSBfYXVkaW9TZXJ2aWNlOiBBdWRpb1NlcnZpY2UsIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcclxuXHJcbiAgICAgICAgLy8gc2hvdyBjb250cm9scyB3aGVuIGhvdmVyaW5nIGFuZCBpbiBxdWlldCBtb2RlXHJcbiAgICAgICAgZnJvbUV2ZW50KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ21vdXNlbW92ZScpLnBpcGUoXHJcbiAgICAgICAgICAgIHN3aXRjaE1hcCgoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG92ZXJpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9mKGV2ZW50KTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGRlYm91bmNlVGltZSgyMDAwKSxcclxuICAgICAgICAgICAgdGFrZVVudGlsKHRoaXMuX29uRGVzdHJveSlcclxuICAgICAgICApLnN1YnNjcmliZSgoKSA9PiB0aGlzLmhvdmVyaW5nID0gZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1lZGlhUGxheWVyU2VydmljZS5zZXRNZWRpYVBsYXllcih0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX3BsYXllclJlZi5uYXRpdmVFbGVtZW50KTtcclxuXHJcbiAgICAgICAgdGhpcy5hdWRpb01ldGFkYXRhID0gdGhpcy5fYXVkaW9TZXJ2aWNlLmdldEF1ZGlvRmlsZU1ldGFkYXRhKHRoaXMuX3BsYXllclJlZi5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgICB0aGlzLm1lZGlhUGxheWVyU2VydmljZS5wbGF5aW5nRXZlbnQucGlwZSh0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KSkuc3Vic2NyaWJlKCgpID0+IHRoaXMubWVkaWFQbGF5ZXJTZXJ2aWNlLnBsYXlpbmcubmV4dCh0cnVlKSk7XHJcbiAgICAgICAgdGhpcy5tZWRpYVBsYXllclNlcnZpY2UucGF1c2VFdmVudC5waXBlKHRha2VVbnRpbCh0aGlzLl9vbkRlc3Ryb3kpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5tZWRpYVBsYXllclNlcnZpY2UucGxheWluZy5uZXh0KGZhbHNlKSk7XHJcbiAgICAgICAgdGhpcy5tZWRpYVBsYXllclNlcnZpY2UubWVkaWFDbGlja0V2ZW50LnBpcGUodGFrZVVudGlsKHRoaXMuX29uRGVzdHJveSkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLm1lZGlhUGxheWVyU2VydmljZS50b2dnbGVQbGF5KCkpO1xyXG4gICAgICAgIHRoaXMubWVkaWFQbGF5ZXJTZXJ2aWNlLmxvYWRlZE1ldGFkYXRhRXZlbnQucGlwZSh0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KSkuc3Vic2NyaWJlKCgpID0+IHRoaXMubWVkaWFQbGF5ZXJTZXJ2aWNlLmxvYWRlZCA9IHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX29uRGVzdHJveS5uZXh0KCk7XHJcbiAgICAgICAgdGhpcy5fb25EZXN0cm95LmNvbXBsZXRlKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIE1lZGlhUGxheWVyVHlwZSA9ICd2aWRlbycgfCAnYXVkaW8nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNZWRpYVBsYXllckJ1ZmZlciB7XHJcbiAgICBzdGFydDogbnVtYmVyO1xyXG4gICAgZW5kOiBudW1iZXI7XHJcbn0iXX0=