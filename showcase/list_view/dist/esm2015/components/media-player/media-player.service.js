/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, from, Subject } from 'rxjs';
import { FrameExtractionService } from '../../services/frame-extraction/index';
export class MediaPlayerService {
    /**
     * @param {?} _frameExtractionService
     */
    constructor(_frameExtractionService) {
        this._frameExtractionService = _frameExtractionService;
        this.type = 'video';
        this.loaded = false;
        /*
                Create observables for media player events
            */
        this.playing = new BehaviorSubject(false);
        this.initEvent = new BehaviorSubject(false);
        this.abortEvent = new Subject();
        this.canPlayEvent = new BehaviorSubject(false);
        this.canPlayThroughEvent = new BehaviorSubject(false);
        this.durationChangeEvent = new Subject();
        this.endedEvent = new Subject();
        this.errorEvent = new Subject();
        this.loadedDataEvent = new Subject();
        this.loadedMetadataEvent = new Subject();
        this.loadStartEvent = new Subject();
        this.pauseEvent = new Subject();
        this.playEvent = new Subject();
        this.playingEvent = new Subject();
        this.rateChangeEvent = new Subject();
        this.seekedEvent = new Subject();
        this.seekingEvent = new Subject();
        this.stalledEvent = new Subject();
        this.suspendEvent = new Subject();
        this.timeUpdateEvent = new Subject();
        this.volumeChangeEvent = new Subject();
        this.waitingEvent = new Subject();
        this.mediaClickEvent = new Subject();
        this.fullscreenEvent = new BehaviorSubject(false);
        this.quietModeEvent = new BehaviorSubject(false);
        this.progressEvent = Observable.create((observer) => {
            // repeat until the whole video has fully loaded
            let /** @type {?} */ interval = setInterval(() => {
                let /** @type {?} */ buffered = /** @type {?} */ (this._mediaPlayer.buffered);
                observer.next(buffered);
                if (buffered.length === 1 && buffered.start(0) === 0 && buffered.end(0) === this.duration) {
                    observer.complete();
                    clearInterval(interval);
                }
            }, 1000);
        });
        this._fullscreen = false;
    }
    /**
     * @return {?}
     */
    get mediaPlayer() {
        return this._mediaPlayer;
    }
    /**
     * @return {?}
     */
    get quietMode() {
        return this._quietMode;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set quietMode(value) {
        // quiet mode cannot be enabled on audio player
        if (this.type === 'audio') {
            value = false;
        }
        this._quietMode = value;
        this.quietModeEvent.next(value);
    }
    /**
     * @return {?}
     */
    get mediaPlayerWidth() {
        return this._mediaPlayer ? this._mediaPlayer.offsetWidth : 0;
    }
    /**
     * @return {?}
     */
    get mediaPlayerHeight() {
        return this._mediaPlayer ? this._mediaPlayer.offsetHeight : 0;
    }
    /**
     * @return {?}
     */
    get audioTracks() {
        return this._mediaPlayer ? this._mediaPlayer.audioTracks : null;
    }
    /**
     * @return {?}
     */
    get autoplay() {
        return this._mediaPlayer ? this._mediaPlayer.autoplay : false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set autoplay(value) {
        this._mediaPlayer.autoplay = value;
    }
    /**
     * @return {?}
     */
    get buffered() {
        return this._mediaPlayer ? this._mediaPlayer.buffered : new TimeRanges();
    }
    /**
     * @return {?}
     */
    get crossOrigin() {
        return this._mediaPlayer ? this._mediaPlayer.crossOrigin : null;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set crossOrigin(value) {
        this._mediaPlayer.crossOrigin = value;
    }
    /**
     * @return {?}
     */
    get currentSrc() {
        return this._mediaPlayer ? this._mediaPlayer.currentSrc : null;
    }
    /**
     * @return {?}
     */
    get currentTime() {
        return this._mediaPlayer ? this._mediaPlayer.currentTime : 0;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set currentTime(value) {
        this._mediaPlayer.currentTime = value;
    }
    /**
     * @return {?}
     */
    get defaultMuted() {
        return this._mediaPlayer ? this._mediaPlayer.defaultMuted : false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set defaultMuted(value) {
        this._mediaPlayer.defaultMuted = value;
    }
    /**
     * @return {?}
     */
    get defaultPlaybackRate() {
        return this._mediaPlayer ? this._mediaPlayer.defaultPlaybackRate : 1;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set defaultPlaybackRate(value) {
        this._mediaPlayer.defaultPlaybackRate = value;
    }
    /**
     * @return {?}
     */
    get duration() {
        return this._mediaPlayer ? this._mediaPlayer.duration : 0;
    }
    /**
     * @return {?}
     */
    get ended() {
        return this._mediaPlayer ? this._mediaPlayer.ended : false;
    }
    /**
     * @return {?}
     */
    get loop() {
        return this._mediaPlayer ? this._mediaPlayer.loop : false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set loop(value) {
        this._mediaPlayer.loop = value;
    }
    /**
     * @return {?}
     */
    get muted() {
        return this._mediaPlayer ? this._mediaPlayer.muted : false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set muted(value) {
        this._mediaPlayer.muted = value;
    }
    /**
     * @return {?}
     */
    get networkState() {
        return this._mediaPlayer.networkState;
    }
    /**
     * @return {?}
     */
    get paused() {
        return this._mediaPlayer ? this._mediaPlayer.paused : true;
    }
    /**
     * @return {?}
     */
    get playbackRate() {
        return this._mediaPlayer ? this._mediaPlayer.playbackRate : 1;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set playbackRate(value) {
        this._mediaPlayer.playbackRate = value;
    }
    /**
     * @return {?}
     */
    get played() {
        return this._mediaPlayer ? this._mediaPlayer.played : new TimeRanges();
    }
    /**
     * @return {?}
     */
    get preload() {
        return this._mediaPlayer ? this._mediaPlayer.preload : 'auto';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set preload(value) {
        this._mediaPlayer.preload = value;
    }
    /**
     * @return {?}
     */
    get readyState() {
        return this._mediaPlayer ? this._mediaPlayer.readyState : 0;
    }
    /**
     * @return {?}
     */
    get seekable() {
        return this._mediaPlayer ? this._mediaPlayer.seekable : new TimeRanges();
    }
    /**
     * @return {?}
     */
    get seeking() {
        return this._mediaPlayer ? this._mediaPlayer.seeking : false;
    }
    /**
     * @return {?}
     */
    get src() {
        return this._mediaPlayer ? this._mediaPlayer.src : '';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set src(value) {
        this._mediaPlayer.src = value;
    }
    /**
     * @return {?}
     */
    get textTracks() {
        return this._mediaPlayer ? this._mediaPlayer.textTracks : new TextTrackList();
    }
    /**
     * @return {?}
     */
    get videoTracks() {
        return this._mediaPlayer ? this._mediaPlayer.videoTracks : new VideoTrackList();
    }
    /**
     * @return {?}
     */
    get volume() {
        return this._mediaPlayer ? this._mediaPlayer.volume : 1;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set volume(value) {
        this._mediaPlayer.volume = value;
    }
    /**
     * @return {?}
     */
    get fullscreen() {
        return this._mediaPlayer ? this._fullscreen : false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set fullscreen(value) {
        this._fullscreen = value;
        this.fullscreenEvent.next(value);
    }
    /**
     * @param {?} hostElement
     * @param {?} mediaPlayer
     * @return {?}
     */
    setMediaPlayer(hostElement, mediaPlayer) {
        this._hostElement = hostElement;
        this._mediaPlayer = mediaPlayer;
        this.initEvent.next(true);
    }
    /**
     * Toggle playing state
     * @return {?}
     */
    togglePlay() {
        // prevent any action is not loaded
        if (this.loaded === false) {
            return;
        }
        if (this.paused) {
            this.play();
        }
        else {
            this.pause();
        }
    }
    /**
     * Starts playing the audio/video
     * @return {?}
     */
    play() {
        this._mediaPlayer.play();
    }
    /**
     * Pauses the currently playing audio/video
     * @return {?}
     */
    pause() {
        this._mediaPlayer.pause();
    }
    /**
     * Re-loads the audio/video element
     * @return {?}
     */
    load() {
        this._mediaPlayer.load();
    }
    /**
     * Checks if the browser can play the specified audio/video type
     * @param {?} type
     * @return {?}
     */
    canPlayType(type) {
        return this._mediaPlayer.canPlayType(type);
    }
    /**
     * Adds a new text track to the audio/video
     * @param {?} kind
     * @param {?} label
     * @param {?} language
     * @return {?}
     */
    addTextTrack(kind, label, language) {
        return this._mediaPlayer.addTextTrack(kind, label, language);
    }
    /**
     * Attempt to display media in fullscreen mode
     * @return {?}
     */
    requestFullscreen() {
        if (this._hostElement.requestFullscreen) {
            this._hostElement.requestFullscreen();
        }
        else if (this._hostElement.webkitRequestFullscreen) {
            this._hostElement.webkitRequestFullscreen();
        }
        else if ((/** @type {?} */ (this._hostElement)).msRequestFullscreen) {
            (/** @type {?} */ (this._hostElement)).msRequestFullscreen();
        }
        else if ((/** @type {?} */ (this._hostElement)).mozRequestFullScreen) {
            (/** @type {?} */ (this._hostElement)).mozRequestFullScreen();
        }
    }
    /**
     * Exit full screen mode
     * @return {?}
     */
    exitFullscreen() {
        if ((/** @type {?} */ (this._hostElement)).exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        else if ((/** @type {?} */ (document)).msExitFullscreen) {
            (/** @type {?} */ (document)).msExitFullscreen();
        }
        else if ((/** @type {?} */ (document)).mozCancelFullScreen) {
            (/** @type {?} */ (document)).mozCancelFullScreen();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    fullscreenChange(event) {
        this.fullscreen = (/** @type {?} */ (document)).fullscreen || document.webkitIsFullScreen || (/** @type {?} */ (document)).mozFullScreen || (/** @type {?} */ (document)).msFullscreenElement !== null && (/** @type {?} */ (document)).msFullscreenElement !== undefined;
        this.fullscreenEvent.next(this.fullscreen);
    }
    /**
     * Toggle Fullscreen State
     * @return {?}
     */
    toggleFullscreen() {
        if (this.fullscreen) {
            this.exitFullscreen();
        }
        else {
            this.requestFullscreen();
        }
    }
    /**
     * Extract the frames from the video
     * @param {?} width
     * @param {?} height
     * @param {?} skip
     * @return {?}
     */
    getFrames(width, height, skip) {
        if (this.type === 'video') {
            return this._frameExtractionService.getFrameThumbnails(this.source, width, height, 0, this.duration, 10);
        }
        return from([]);
    }
}
MediaPlayerService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
MediaPlayerService.ctorParameters = () => [
    { type: FrameExtractionService, },
];
function MediaPlayerService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MediaPlayerService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MediaPlayerService.ctorParameters;
    /** @type {?} */
    MediaPlayerService.prototype.source;
    /** @type {?} */
    MediaPlayerService.prototype.type;
    /** @type {?} */
    MediaPlayerService.prototype.loaded;
    /** @type {?} */
    MediaPlayerService.prototype.playing;
    /** @type {?} */
    MediaPlayerService.prototype.initEvent;
    /** @type {?} */
    MediaPlayerService.prototype.abortEvent;
    /** @type {?} */
    MediaPlayerService.prototype.canPlayEvent;
    /** @type {?} */
    MediaPlayerService.prototype.canPlayThroughEvent;
    /** @type {?} */
    MediaPlayerService.prototype.durationChangeEvent;
    /** @type {?} */
    MediaPlayerService.prototype.endedEvent;
    /** @type {?} */
    MediaPlayerService.prototype.errorEvent;
    /** @type {?} */
    MediaPlayerService.prototype.loadedDataEvent;
    /** @type {?} */
    MediaPlayerService.prototype.loadedMetadataEvent;
    /** @type {?} */
    MediaPlayerService.prototype.loadStartEvent;
    /** @type {?} */
    MediaPlayerService.prototype.pauseEvent;
    /** @type {?} */
    MediaPlayerService.prototype.playEvent;
    /** @type {?} */
    MediaPlayerService.prototype.playingEvent;
    /** @type {?} */
    MediaPlayerService.prototype.rateChangeEvent;
    /** @type {?} */
    MediaPlayerService.prototype.seekedEvent;
    /** @type {?} */
    MediaPlayerService.prototype.seekingEvent;
    /** @type {?} */
    MediaPlayerService.prototype.stalledEvent;
    /** @type {?} */
    MediaPlayerService.prototype.suspendEvent;
    /** @type {?} */
    MediaPlayerService.prototype.timeUpdateEvent;
    /** @type {?} */
    MediaPlayerService.prototype.volumeChangeEvent;
    /** @type {?} */
    MediaPlayerService.prototype.waitingEvent;
    /** @type {?} */
    MediaPlayerService.prototype.mediaClickEvent;
    /** @type {?} */
    MediaPlayerService.prototype.fullscreenEvent;
    /** @type {?} */
    MediaPlayerService.prototype.quietModeEvent;
    /** @type {?} */
    MediaPlayerService.prototype.progressEvent;
    /** @type {?} */
    MediaPlayerService.prototype._mediaPlayer;
    /** @type {?} */
    MediaPlayerService.prototype._hostElement;
    /** @type {?} */
    MediaPlayerService.prototype._fullscreen;
    /** @type {?} */
    MediaPlayerService.prototype._quietMode;
    /** @type {?} */
    MediaPlayerService.prototype._frameExtractionService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEtcGxheWVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9tZWRpYS1wbGF5ZXIvbWVkaWEtcGxheWVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBSSxVQUFVLEVBQUksSUFBSSxFQUFnQixPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEYsT0FBTyxFQUFrQixzQkFBc0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBSS9GLE1BQU07Ozs7SUFzREYsWUFBb0IsdUJBQStDO1FBQS9DLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBd0I7b0JBbkQzQyxPQUFPO3NCQUNiLEtBQUs7Ozs7dUJBS2EsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDO3lCQUNqQyxJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUM7MEJBQzdDLElBQUksT0FBTyxFQUFROzRCQUNOLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQzttQ0FDNUIsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDO21DQUM1QyxJQUFJLE9BQU8sRUFBVTswQkFDaEMsSUFBSSxPQUFPLEVBQVE7MEJBQ3BCLElBQUksT0FBTyxFQUFPOytCQUNiLElBQUksT0FBTyxFQUFPO21DQUNkLElBQUksT0FBTyxFQUFPOzhCQUN0QixJQUFJLE9BQU8sRUFBUTswQkFDdkIsSUFBSSxPQUFPLEVBQVE7eUJBQ3BCLElBQUksT0FBTyxFQUFROzRCQUNiLElBQUksT0FBTyxFQUFXOytCQUNwQixJQUFJLE9BQU8sRUFBVTsyQkFDekIsSUFBSSxPQUFPLEVBQVU7NEJBQ3BCLElBQUksT0FBTyxFQUFVOzRCQUN2QixJQUFJLE9BQU8sRUFBUTs0QkFDbkIsSUFBSSxPQUFPLEVBQVE7K0JBQ2QsSUFBSSxPQUFPLEVB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SztRQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0tBQzlEOzs7O0lBRUQsSUFBSSxJQUFJO1FBQ0osTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7S0FDN0Q7Ozs7O0lBQ0QsSUFBSSxJQUFJLENBQUMsS0FBYztRQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7S0FDbEM7Ozs7SUFFRCxJQUFJLEtBQUs7UUFDTCxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztLQUM5RDs7Ozs7SUFDRCxJQUFJLEtBQUssQ0FBQyxLQUFjO1FBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztLQUNuQzs7OztJQUVELElBQUksWUFBWTtRQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQztLQUN6Qzs7OztJQUVELElBQUksTUFBTTtRQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0tBQzlEOzs7O0lBRUQsSUFBSSxZQUFZO1FBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDakU7Ozs7O0lBQ0QsSUFBSSxZQUFZLENBQUMsS0FBYTtRQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7S0FDMUM7Ozs7SUFFRCxJ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QUFDLG1CQUFtQixLQUFLLFNBQVMsQ0FBQztRQUNsTixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDOUM7Ozs7O0lBS0QsZ0JBQWdCO1FBQ1osRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3pCO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUM1QjtLQUNKOzs7Ozs7OztJQUtELFNBQVMsQ0FBQyxLQUFhLEVBQUUsTUFBYyxFQUFFLElBQVk7UUFFakQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzVHO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNuQjs7O1lBclZKLFVBQVU7Ozs7WUFIYyxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCAsICBPYnNlcnZhYmxlICwgIGZyb20gLCAgT2JzZXJ2ZXIgLCAgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBFeHRyYWN0ZWRGcmFtZSwgRnJhbWVFeHRyYWN0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZyYW1lLWV4dHJhY3Rpb24vaW5kZXgnO1xyXG5pbXBvcnQgeyBNZWRpYVBsYXllclR5cGUgfSBmcm9tICcuL21lZGlhLXBsYXllci5jb21wb25lbnQnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTWVkaWFQbGF5ZXJTZXJ2aWNlIHtcclxuXHJcbiAgICBzb3VyY2U6IHN0cmluZztcclxuICAgIHR5cGU6IE1lZGlhUGxheWVyVHlwZSA9ICd2aWRlbyc7XHJcbiAgICBsb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvKlxyXG4gICAgICAgIENyZWF0ZSBvYnNlcnZhYmxlcyBmb3IgbWVkaWEgcGxheWVyIGV2ZW50c1xyXG4gICAgKi9cclxuICAgIHBsYXlpbmc6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgaW5pdEV2ZW50OiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGFib3J0RXZlbnQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gICAgY2FuUGxheUV2ZW50OiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNhblBsYXlUaHJvdWdoRXZlbnQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgZHVyYXRpb25DaGFuZ2VFdmVudDogU3ViamVjdDxudW1iZXI+ID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xyXG4gICAgZW5kZWRFdmVudDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgICBlcnJvckV2ZW50OiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XHJcbiAgICBsb2FkZWREYXRhRXZlbnQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuICAgIGxvYWRlZE1ldGFkYXRhRXZlbnQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuICAgIGxvYWRTdGFydEV2ZW50OiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICAgIHBhdXNlRXZlbnQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gICAgcGxheUV2ZW50OiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICAgIHBsYXlpbmdFdmVudDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgICByYXRlQ2hhbmdlRXZlbnQ6IFN1YmplY3Q8bnVtYmVyPiA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcclxuICAgIHNlZWtlZEV2ZW50OiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XHJcbiAgICBzZWVraW5nRXZlbnQ6IFN1YmplY3Q8bnVtYmVyPiA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcclxuICAgIHN0YWxsZWRFdmVudDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgICBzdXNwZW5kRXZlbnQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gICAgdGltZVVwZGF0ZUV2ZW50OiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XHJcbiAgICB2b2x1bWVDaGFuZ2VFdmVudDogU3ViamVjdDxudW1iZXI+ID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xyXG4gICAgd2FpdGluZ0V2ZW50OiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICAgIG1lZGlhQ2xpY2tFdmVudDogU3ViamVjdDxNb3VzZUV2ZW50PiA9IG5ldyBTdWJqZWN0PE1vdXNlRXZlbnQ+KCk7XHJcbiAgICBmdWxsc2NyZWVuRXZlbnQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgcXVpZXRNb2RlRXZlbnQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgcHJvZ3Jlc3NFdmVudDogT2JzZXJ2YWJsZTxUaW1lUmFuZ2VzPiA9IE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcjogT2JzZXJ2ZXI8VGltZVJhbmdlcz4pID0+IHtcclxuXHJcbiAgICAgICAgLy8gcmVwZWF0IHVudGlsIHRoZSB3aG9sZSB2aWRlbyBoYXMgZnVsbHkgbG9hZGVkXHJcbiAgICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgbGV0IGJ1ZmZlcmVkID0gdGhpcy5fbWVkaWFQbGF5ZXIuYnVmZmVyZWQgYXMgVGltZVJhbmdlcztcclxuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChidWZmZXJlZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoYnVmZmVyZWQubGVuZ3RoID09PSAxICYmIGJ1ZmZlcmVkLnN0YXJ0KDApID09PSAwICYmIGJ1ZmZlcmVkLmVuZCgwKSA9PT0gdGhpcy5kdXJhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBwcml2YXRlIF9tZWRpYVBsYXllcjogSFRNTE1lZGlhRWxlbWVudDtcclxuICAgIHByaXZhdGUgX2hvc3RFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgX2Z1bGxzY3JlZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX3F1aWV0TW9kZTogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mcmFtZUV4dHJhY3Rpb25TZXJ2aWNlOiBGcmFtZUV4dHJhY3Rpb25TZXJ2aWNlKSB7fVxyXG5cclxuICAgIC8qXHJcbiAgICAgICAgQ3JlYXRlIGFsbCB0aGUgZ2V0dGVycyBhbmQgc2V0dGVycyB0aGUgY2FuIGJlIHVzZWQgYnkgbWVkaWEgcGxheWVyIGV4dGVuc2lvbnNcclxuICAgICovXHJcbiAgICBnZXQgbWVkaWFQbGF5ZXIoKTogSFRNTE1lZGlhRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21lZGlhUGxheWVyO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBxdWlldE1vZGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3F1aWV0TW9kZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgcXVpZXRNb2RlKHZhbHVlOiBib29sZWFuKSB7XHJcblxyXG4gICAgICAgIC8vIHF1aWV0IG1vZGUgY2Fubm90IGJlIGVuYWJsZWQgb24gYXVkaW8gcGxheWVyXHJcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ2F1ZGlvJykge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fcXVpZXRNb2RlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5xdWlldE1vZGVFdmVudC5uZXh0KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbWVkaWFQbGF5ZXJXaWR0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZWRpYVBsYXllciA/IHRoaXMuX21lZGlhUGxheWVyLm9mZnNldFdpZHRoIDogMDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbWVkaWFQbGF5ZXJIZWlnaHQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWVkaWFQbGF5ZXIgPyB0aGlzLl9tZWRpYVBsYXllci5vZmZzZXRIZWlnaHQgOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBhdWRpb1RyYWNrcygpOiBBdWRpb1RyYWNrTGlzdCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21lZGlhUGxheWVyID8gdGhpcy5fbWVkaWFQbGF5ZXIuYXVkaW9UcmFja3MgOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBhdXRvcGxheSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWVkaWFQbGF5ZXIgPyB0aGlzLl9tZWRpYVBsYXllci5hdXRvcGxheSA6IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgc2V0IGF1dG9wbGF5KHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fbWVkaWFQbGF5ZXIuYXV0b3BsYXkgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYnVmZmVyZWQoKTogVGltZVJhbmdlcyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21lZGlhUGxheWVyID8gdGhpcy5fbWVkaWFQbGF5ZXIuYnVmZmVyZWQgOiBuZXcgVGltZVJhbmdlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjcm9zc09yaWdpbigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZWRpYVBsYXllciA/IHRoaXMuX21lZGlhUGxheWVyLmNyb3NzT3JpZ2luIDogbnVsbDtcclxuICAgIH1cclxuICAgIHNldCBjcm9zc09yaWdpbih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fbWVkaWFQbGF5ZXIuY3Jvc3NPcmlnaW4gPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY3VycmVudFNyYygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZWRpYVBsYXllciA/IHRoaXMuX21lZGlhUGxheWVyLmN1cnJlbnRTcmMgOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjdXJyZW50VGltZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZWRpYVBsYXllciA/IHRoaXMuX21lZGlhUGxheWVyLmN1cnJlbnRUaW1lIDogMDtcclxuICAgIH1cclxuICAgIHNldCBjdXJyZW50VGltZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fbWVkaWFQbGF5ZXIuY3VycmVudFRpbWUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZGVmYXVsdE11dGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZWRpYVBsYXllciA/IHRoaXMuX21lZGlhUGxheWVyLmRlZmF1bHRNdXRlZCA6IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgc2V0IGRlZmF1bHRNdXRlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX21lZGlhUGxheWVyLmRlZmF1bHRNdXRlZCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBkZWZhdWx0UGxheWJhY2tSYXRlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21lZGlhUGxheWVyID8gdGhpcy5fbWVkaWFQbGF5ZXIuZGVmYXVsdFBsYXliYWNrUmF0ZSA6IDE7XHJcbiAgICB9XHJcbiAgICBzZXQgZGVmYXVsdFBsYXliYWNrUmF0ZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fbWVkaWFQbGF5ZXIuZGVmYXVsdFBsYXliYWNrUmF0ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBkdXJhdGlvbigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZWRpYVBsYXllciA/IHRoaXMuX21lZGlhUGxheWVyLmR1cmF0aW9uIDogMDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZW5kZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21lZGlhUGxheWVyID8gdGhpcy5fbWVkaWFQbGF5ZXIuZW5kZWQgOiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbG9vcCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWVkaWFQbGF5ZXIgPyB0aGlzLl9tZWRpYVBsYXllci5sb29wIDogZmFsc2U7XHJcbiAgICB9XHJcbiAgICBzZXQgbG9vcCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX21lZGlhUGxheWVyLmxvb3AgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbXV0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21lZGlhUGxheWVyID8gdGhpcy5fbWVkaWFQbGF5ZXIubXV0ZWQgOiBmYWxzZTtcclxuICAgIH1cclxuICAgIHNldCBtdXRlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX21lZGlhUGxheWVyLm11dGVkID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG5ldHdvcmtTdGF0ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZWRpYVBsYXllci5uZXR3b3JrU3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHBhdXNlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWVkaWFQbGF5ZXIgPyB0aGlzLl9tZWRpYVBsYXllci5wYXVzZWQgOiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwbGF5YmFja1JhdGUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWVkaWFQbGF5ZXIgPyB0aGlzLl9tZWRpYVBsYXllci5wbGF5YmFja1JhdGUgOiAxO1xyXG4gICAgfVxyXG4gICAgc2V0IHBsYXliYWNrUmF0ZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fbWVkaWFQbGF5ZXIucGxheWJhY2tSYXRlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHBsYXllZCgpOiBUaW1lUmFuZ2VzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWVkaWFQbGF5ZXIgPyB0aGlzLl9tZWRpYVBsYXllci5wbGF5ZWQgOiBuZXcgVGltZVJhbmdlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwcmVsb2FkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21lZGlhUGxheWVyID8gdGhpcy5fbWVkaWFQbGF5ZXIucHJlbG9hZCA6ICdhdXRvJztcclxuICAgIH1cclxuICAgIHNldCBwcmVsb2FkKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9tZWRpYVBsYXllci5wcmVsb2FkID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHJlYWR5U3RhdGUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWVkaWFQbGF5ZXIgPyB0aGlzLl9tZWRpYVBsYXllci5yZWFkeVN0YXRlIDogMDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2Vla2FibGUoKTogVGltZVJhbmdlcyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21lZGlhUGxheWVyID8gdGhpcy5fbWVkaWFQbGF5ZXIuc2Vla2FibGUgOiBuZXcgVGltZVJhbmdlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzZWVraW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZWRpYVBsYXllciA/IHRoaXMuX21lZGlhUGxheWVyLnNlZWtpbmcgOiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3JjKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21lZGlhUGxheWVyID8gdGhpcy5fbWVkaWFQbGF5ZXIuc3JjIDogJyc7XHJcbiAgICB9XHJcbiAgICBzZXQgc3JjKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9tZWRpYVBsYXllci5zcmMgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdGV4dFRyYWNrcygpOiBUZXh0VHJhY2tMaXN0IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWVkaWFQbGF5ZXIgPyB0aGlzLl9tZWRpYVBsYXllci50ZXh0VHJhY2tzIDogbmV3IFRleHRUcmFja0xpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdmlkZW9UcmFja3MoKTogVmlkZW9UcmFja0xpc3Qge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZWRpYVBsYXllciA/IHRoaXMuX21lZGlhUGxheWVyLnZpZGVvVHJhY2tzIDogbmV3IFZpZGVvVHJhY2tMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHZvbHVtZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZWRpYVBsYXllciA/IHRoaXMuX21lZGlhUGxheWVyLnZvbHVtZSA6IDE7XHJcbiAgICB9XHJcbiAgICBzZXQgdm9sdW1lKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9tZWRpYVBsYXllci52b2x1bWUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZnVsbHNjcmVlbigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWVkaWFQbGF5ZXIgPyB0aGlzLl9mdWxsc2NyZWVuIDogZmFsc2U7XHJcbiAgICB9XHJcbiAgICBzZXQgZnVsbHNjcmVlbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX2Z1bGxzY3JlZW4gPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmZ1bGxzY3JlZW5FdmVudC5uZXh0KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRNZWRpYVBsYXllcihob3N0RWxlbWVudDogSFRNTEVsZW1lbnQsIG1lZGlhUGxheWVyOiBIVE1MTWVkaWFFbGVtZW50KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5faG9zdEVsZW1lbnQgPSBob3N0RWxlbWVudDtcclxuICAgICAgICB0aGlzLl9tZWRpYVBsYXllciA9IG1lZGlhUGxheWVyO1xyXG5cclxuICAgICAgICB0aGlzLmluaXRFdmVudC5uZXh0KHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVG9nZ2xlIHBsYXlpbmcgc3RhdGVcclxuICAgICAqL1xyXG4gICAgdG9nZ2xlUGxheSgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gcHJldmVudCBhbnkgYWN0aW9uIGlzIG5vdCBsb2FkZWRcclxuICAgICAgICBpZiAodGhpcy5sb2FkZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBhdXNlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXkoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBhdXNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RhcnRzIHBsYXlpbmcgdGhlIGF1ZGlvL3ZpZGVvXHJcbiAgICAgKi9cclxuICAgIHBsYXkoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fbWVkaWFQbGF5ZXIucGxheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUGF1c2VzIHRoZSBjdXJyZW50bHkgcGxheWluZyBhdWRpby92aWRlb1xyXG4gICAgICovXHJcbiAgICBwYXVzZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9tZWRpYVBsYXllci5wYXVzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmUtbG9hZHMgdGhlIGF1ZGlvL3ZpZGVvIGVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgbG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9tZWRpYVBsYXllci5sb2FkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3MgaWYgdGhlIGJyb3dzZXIgY2FuIHBsYXkgdGhlIHNwZWNpZmllZCBhdWRpby92aWRlbyB0eXBlXHJcbiAgICAgKi9cclxuICAgIGNhblBsYXlUeXBlKHR5cGU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21lZGlhUGxheWVyLmNhblBsYXlUeXBlKHR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBhIG5ldyB0ZXh0IHRyYWNrIHRvIHRoZSBhdWRpby92aWRlb1xyXG4gICAgICovXHJcbiAgICBhZGRUZXh0VHJhY2soa2luZDogc3RyaW5nLCBsYWJlbDogc3RyaW5nLCBsYW5ndWFnZTogc3RyaW5nKTogVGV4dFRyYWNrIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWVkaWFQbGF5ZXIuYWRkVGV4dFRyYWNrKGtpbmQsIGxhYmVsLCBsYW5ndWFnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBdHRlbXB0IHRvIGRpc3BsYXkgbWVkaWEgaW4gZnVsbHNjcmVlbiBtb2RlXHJcbiAgICAgKi9cclxuICAgIHJlcXVlc3RGdWxsc2NyZWVuKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5faG9zdEVsZW1lbnQucmVxdWVzdEZ1bGxzY3JlZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5faG9zdEVsZW1lbnQucmVxdWVzdEZ1bGxzY3JlZW4oKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2hvc3RFbGVtZW50LndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2hvc3RFbGVtZW50LndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICgoPGFueT50aGlzLl9ob3N0RWxlbWVudCkubXNSZXF1ZXN0RnVsbHNjcmVlbikge1xyXG4gICAgICAgICAgICAoPGFueT50aGlzLl9ob3N0RWxlbWVudCkubXNSZXF1ZXN0RnVsbHNjcmVlbigpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoKDxhbnk+dGhpcy5faG9zdEVsZW1lbnQpLm1velJlcXVlc3RGdWxsU2NyZWVuKSB7XHJcbiAgICAgICAgICAgICg8YW55PnRoaXMuX2hvc3RFbGVtZW50KS5tb3pSZXF1ZXN0RnVsbFNjcmVlbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEV4aXQgZnVsbCBzY3JlZW4gbW9kZVxyXG4gICAgICovXHJcbiAgICBleGl0RnVsbHNjcmVlbigpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKCg8YW55PnRoaXMuX2hvc3RFbGVtZW50KS5leGl0RnVsbHNjcmVlbikge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5leGl0RnVsbHNjcmVlbigpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4pIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4oKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCg8YW55PmRvY3VtZW50KS5tc0V4aXRGdWxsc2NyZWVuKSB7XHJcbiAgICAgICAgICAgICg8YW55PmRvY3VtZW50KS5tc0V4aXRGdWxsc2NyZWVuKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICgoPGFueT5kb2N1bWVudCkubW96Q2FuY2VsRnVsbFNjcmVlbikge1xyXG4gICAgICAgICAgICAoPGFueT5kb2N1bWVudCkubW96Q2FuY2VsRnVsbFNjcmVlbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdWxsc2NyZWVuQ2hhbmdlKGV2ZW50OiBFdmVudCkge1xyXG4gICAgICAgIHRoaXMuZnVsbHNjcmVlbiA9ICg8YW55PmRvY3VtZW50KS5mdWxsc2NyZWVuIHx8IGRvY3VtZW50LndlYmtpdElzRnVsbFNjcmVlbiB8fCAoPGFueT5kb2N1bWVudCkubW96RnVsbFNjcmVlbiB8fCAoPGFueT5kb2N1bWVudCkubXNGdWxsc2NyZWVuRWxlbWVudCAhPT0gbnVsbCAmJiAoPGFueT5kb2N1bWVudCkubXNGdWxsc2NyZWVuRWxlbWVudCAhPT0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuZnVsbHNjcmVlbkV2ZW50Lm5leHQodGhpcy5mdWxsc2NyZWVuKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRvZ2dsZSBGdWxsc2NyZWVuIFN0YXRlXHJcbiAgICAgKi9cclxuICAgIHRvZ2dsZUZ1bGxzY3JlZW4oKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZnVsbHNjcmVlbikge1xyXG4gICAgICAgICAgICB0aGlzLmV4aXRGdWxsc2NyZWVuKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0RnVsbHNjcmVlbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEV4dHJhY3QgdGhlIGZyYW1lcyBmcm9tIHRoZSB2aWRlb1xyXG4gICAgICovXHJcbiAgICBnZXRGcmFtZXMod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHNraXA6IG51bWJlcik6IE9ic2VydmFibGU8RXh0cmFjdGVkRnJhbWU+IHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ3ZpZGVvJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZnJhbWVFeHRyYWN0aW9uU2VydmljZS5nZXRGcmFtZVRodW1ibmFpbHModGhpcy5zb3VyY2UsIHdpZHRoLCBoZWlnaHQsIDAsIHRoaXMuZHVyYXRpb24sIDEwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmcm9tKFtdKTtcclxuICAgIH1cclxufSJdfQ==