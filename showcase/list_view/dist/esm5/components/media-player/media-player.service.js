/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, from, Subject } from 'rxjs';
import { FrameExtractionService } from '../../services/frame-extraction/index';
var MediaPlayerService = /** @class */ (function () {
    function MediaPlayerService(_frameExtractionService) {
        var _this = this;
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
        this.progressEvent = Observable.create(function (observer) {
            // repeat until the whole video has fully loaded
            var /** @type {?} */ interval = setInterval(function () {
                var /** @type {?} */ buffered = /** @type {?} */ (_this._mediaPlayer.buffered);
                observer.next(buffered);
                if (buffered.length === 1 && buffered.start(0) === 0 && buffered.end(0) === _this.duration) {
                    observer.complete();
                    clearInterval(interval);
                }
            }, 1000);
        });
        this._fullscreen = false;
    }
    Object.defineProperty(MediaPlayerService.prototype, "mediaPlayer", {
        /*
            Create all the getters and setters the can be used by media player extensions
        */
        get: /**
         * @return {?}
         */
        function () {
            return this._mediaPlayer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaPlayerService.prototype, "quietMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this._quietMode;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            // quiet mode cannot be enabled on audio player
            if (this.type === 'audio') {
                value = false;
            }
            this._quietMode = value;
            this.quietModeEvent.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaPlayerService.prototype, "mediaPlayerWidth", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mediaPlayer ? this._mediaPlayer.offsetWidth : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaPlayerService.prototype, "mediaPlayerHeight", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mediaPlayer ? this._mediaPlayer.offsetHeight : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaPlayerService.prototype, "audioTracks", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mediaPlayer ? this._mediaPlayer.audioTracks : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaPlayerService.prototype, "autoplay", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mediaPlayer ? this._mediaPlayer.autoplay : false;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._mediaPlayer.autoplay = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaPlayerService.prototype, "buffered", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mediaPlayer ? this._mediaPlayer.buffered : new TimeRanges();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaPlayerService.prototype, "crossOrigin", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mediaPlayer ? this._mediaPlayer.crossOrigin : null;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._mediaPlayer.crossOrigin = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaPlayerService.prototype, "currentSrc", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mediaPlayer ? this._mediaPlayer.currentSrc : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaPlayerService.prototype, "currentTime", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mediaPlayer ? this._mediaPlayer.currentTime : 0;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._mediaPlayer.currentTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaPlayerService.prototype, "defaultMuted", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mediaPlayer ? this._mediaPlayer.defaultMuted : false;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._mediaPlayer.defaultMuted = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaPlayerService.prototype, "defaultPlaybackRate", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mediaPlayer ? this._mediaPlayer.defaultPlaybackRate : 1;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._mediaPlayer.defaultPlaybackRate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaPlayerService.prototype, "duration", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mediaPlayer ? this._mediaPlayer.duration : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaPlayerService.prototype, "ended", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mediaPlayer ? this._mediaPlayer.ended : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaPlayerService.prototype, "loop", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mediaPlayer ? this._mediaPlayer.loop : false;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._mediaPlayer.loop = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaPlayerService.prototype, "muted", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mediaPlayer ? this._mediaPlayer.muted : false;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._mediaPlayer.muted = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaPlayerService.prototype, "networkState", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mediaPlayer.networkState;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaPlayerService.prototype, "paused", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mediaPlayer ? this._mediaPlayer.paused : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaPlayerService.prototype, "playbackRate", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mediaPlayer ? this._mediaPlayer.playbackRate : 1;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._mediaPlayer.playbackRate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaPlayerService.prototype, "played", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mediaPlayer ? this._mediaPlayer.played : new TimeRanges();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaPlayerService.prototype, "preload", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mediaPlayer ? this._mediaPlayer.preload : 'auto';
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._mediaPlayer.preload = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaPlayerService.prototype, "readyState", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mediaPlayer ? this._mediaPlayer.readyState : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaPlayerService.prototype, "seekable", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mediaPlayer ? this._mediaPlayer.seekable : new TimeRanges();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaPlayerService.prototype, "seeking", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mediaPlayer ? this._mediaPlayer.seeking : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaPlayerService.prototype, "src", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mediaPlayer ? this._mediaPlayer.src : '';
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._mediaPlayer.src = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaPlayerService.prototype, "textTracks", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mediaPlayer ? this._mediaPlayer.textTracks : new TextTrackList();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaPlayerService.prototype, "videoTracks", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mediaPlayer ? this._mediaPlayer.videoTracks : new VideoTrackList();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaPlayerService.prototype, "volume", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mediaPlayer ? this._mediaPlayer.volume : 1;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._mediaPlayer.volume = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaPlayerService.prototype, "fullscreen", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mediaPlayer ? this._fullscreen : false;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._fullscreen = value;
            this.fullscreenEvent.next(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} hostElement
     * @param {?} mediaPlayer
     * @return {?}
     */
    MediaPlayerService.prototype.setMediaPlayer = /**
     * @param {?} hostElement
     * @param {?} mediaPlayer
     * @return {?}
     */
    function (hostElement, mediaPlayer) {
        this._hostElement = hostElement;
        this._mediaPlayer = mediaPlayer;
        this.initEvent.next(true);
    };
    /**
     * Toggle playing state
     */
    /**
     * Toggle playing state
     * @return {?}
     */
    MediaPlayerService.prototype.togglePlay = /**
     * Toggle playing state
     * @return {?}
     */
    function () {
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
    };
    /**
     * Starts playing the audio/video
     */
    /**
     * Starts playing the audio/video
     * @return {?}
     */
    MediaPlayerService.prototype.play = /**
     * Starts playing the audio/video
     * @return {?}
     */
    function () {
        this._mediaPlayer.play();
    };
    /**
     * Pauses the currently playing audio/video
     */
    /**
     * Pauses the currently playing audio/video
     * @return {?}
     */
    MediaPlayerService.prototype.pause = /**
     * Pauses the currently playing audio/video
     * @return {?}
     */
    function () {
        this._mediaPlayer.pause();
    };
    /**
     * Re-loads the audio/video element
     */
    /**
     * Re-loads the audio/video element
     * @return {?}
     */
    MediaPlayerService.prototype.load = /**
     * Re-loads the audio/video element
     * @return {?}
     */
    function () {
        this._mediaPlayer.load();
    };
    /**
     * Checks if the browser can play the specified audio/video type
     */
    /**
     * Checks if the browser can play the specified audio/video type
     * @param {?} type
     * @return {?}
     */
    MediaPlayerService.prototype.canPlayType = /**
     * Checks if the browser can play the specified audio/video type
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return this._mediaPlayer.canPlayType(type);
    };
    /**
     * Adds a new text track to the audio/video
     */
    /**
     * Adds a new text track to the audio/video
     * @param {?} kind
     * @param {?} label
     * @param {?} language
     * @return {?}
     */
    MediaPlayerService.prototype.addTextTrack = /**
     * Adds a new text track to the audio/video
     * @param {?} kind
     * @param {?} label
     * @param {?} language
     * @return {?}
     */
    function (kind, label, language) {
        return this._mediaPlayer.addTextTrack(kind, label, language);
    };
    /**
     * Attempt to display media in fullscreen mode
     */
    /**
     * Attempt to display media in fullscreen mode
     * @return {?}
     */
    MediaPlayerService.prototype.requestFullscreen = /**
     * Attempt to display media in fullscreen mode
     * @return {?}
     */
    function () {
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
    };
    /**
     * Exit full screen mode
     */
    /**
     * Exit full screen mode
     * @return {?}
     */
    MediaPlayerService.prototype.exitFullscreen = /**
     * Exit full screen mode
     * @return {?}
     */
    function () {
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
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MediaPlayerService.prototype.fullscreenChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.fullscreen = (/** @type {?} */ (document)).fullscreen || document.webkitIsFullScreen || (/** @type {?} */ (document)).mozFullScreen || (/** @type {?} */ (document)).msFullscreenElement !== null && (/** @type {?} */ (document)).msFullscreenElement !== undefined;
        this.fullscreenEvent.next(this.fullscreen);
    };
    /**
     * Toggle Fullscreen State
     */
    /**
     * Toggle Fullscreen State
     * @return {?}
     */
    MediaPlayerService.prototype.toggleFullscreen = /**
     * Toggle Fullscreen State
     * @return {?}
     */
    function () {
        if (this.fullscreen) {
            this.exitFullscreen();
        }
        else {
            this.requestFullscreen();
        }
    };
    /**
     * Extract the frames from the video
     */
    /**
     * Extract the frames from the video
     * @param {?} width
     * @param {?} height
     * @param {?} skip
     * @return {?}
     */
    MediaPlayerService.prototype.getFrames = /**
     * Extract the frames from the video
     * @param {?} width
     * @param {?} height
     * @param {?} skip
     * @return {?}
     */
    function (width, height, skip) {
        if (this.type === 'video') {
            return this._frameExtractionService.getFrameThumbnails(this.source, width, height, 0, this.duration, 10);
        }
        return from([]);
    };
    MediaPlayerService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    MediaPlayerService.ctorParameters = function () { return [
        { type: FrameExtractionService, },
    ]; };
    return MediaPlayerService;
}());
export { MediaPlayerService };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEtcGxheWVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9tZWRpYS1wbGF5ZXIvbWVkaWEtcGxheWVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBSSxVQUFVLEVBQUksSUFBSSxFQUFnQixPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEYsT0FBTyxFQUFrQixzQkFBc0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOztJQTBEM0YsNEJBQW9CLHVCQUErQztRQUFuRSxpQkFBdUU7UUFBbkQsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF3QjtvQkFuRDNDLE9BQU87c0JBQ2IsS0FBSzs7Ozt1QkFLYSxJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUM7eUJBQ2pDLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQzswQkFDN0MsSUFBSSxPQUFPLEVBQVE7NEJBQ04sSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDO21DQUM1QixJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUM7bUNBQzVDLElBQUksT0FBTyxFQUFVOzBCQUNoQyxJQUFJLE9BQU8sRUFBUTswQkFDcEIsSUFBSSxPQUFPLEVBQU87K0JBQ2IsSUFBSSxPQUFPLEVBQU87bUNBQ2QsSUFBSSxPQUFPLEVBQU87OEJBQ3RCLElBQUksT0FBTyxFQUFROzBCQUN2QixJQUFJLE9BQU8sRUFBUTt5QkFDcEIsSUFBSSxPQUFPLEVBQVE7NEJBQ2IsSUFBSSxPQUFPLEVBQVc7K0JBQ3BCLElBQUksT0FBTyxFQUFVOzJCQUN6QixJQUFJLE9BQU8sRUFBVTs0QkFDcEIsSUFBSSxPQUFPLEVBQVU7NEJBQ3ZCLElBQUksT0FBTyxFQUFROzRCQUNuQixJQUFJLE9BQU8sRUFBUTsrQkFDZCxJQUFJLE9BQU8s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Q0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDNUc7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ25COztnQkFyVkosVUFBVTs7OztnQkFIYyxzQkFBc0I7OzZCQUYvQzs7U0FNYSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCAsICBPYnNlcnZhYmxlICwgIGZyb20gLCAgT2JzZXJ2ZXIgLCAgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBFeHRyYWN0ZWRGcmFtZSwgRnJhbWVFeHRyYWN0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZyYW1lLWV4dHJhY3Rpb24vaW5kZXgnO1xyXG5pbXBvcnQgeyBNZWRpYVBsYXllclR5cGUgfSBmcm9tICcuL21lZGlhLXBsYXllci5jb21wb25lbnQnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTWVkaWFQbGF5ZXJTZXJ2aWNlIHtcclxuXHJcbiAgICBzb3VyY2U6IHN0cmluZztcclxuICAgIHR5cGU6IE1lZGlhUGxheWVyVHlwZSA9ICd2aWRlbyc7XHJcbiAgICBsb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvKlxyXG4gICAgICAgIENyZWF0ZSBvYnNlcnZhYmxlcyBmb3IgbWVkaWEgcGxheWVyIGV2ZW50c1xyXG4gICAgKi9cclxuICAgIHBsYXlpbmc6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgaW5pdEV2ZW50OiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGFib3J0RXZlbnQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gICAgY2FuUGxheUV2ZW50OiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNhblBsYXlUaHJvdWdoRXZlbnQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgZHVyYXRpb25DaGFuZ2VFdmVudDogU3ViamVjdDxudW1iZXI+ID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xyXG4gICAgZW5kZWRFdmVudDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgICBlcnJvckV2ZW50OiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XHJcbiAgICBsb2FkZWREYXRhRXZlbnQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuICAgIGxvYWRlZE1ldGFkYXRhRXZlbnQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcclxuICAgIGxvYWRTdGFydEV2ZW50OiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICAgIHBhdXNlRXZlbnQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gICAgcGxheUV2ZW50OiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICAgIHBsYXlpbmdFdmVudDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgICByYXRlQ2hhbmdlRXZlbnQ6IFN1YmplY3Q8bnVtYmVyPiA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcclxuICAgIHNlZWtlZEV2ZW50OiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XHJcbiAgICBzZWVraW5nRXZlbnQ6IFN1YmplY3Q8bnVtYmVyPiA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcclxuICAgIHN0YWxsZWRFdmVudDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgICBzdXNwZW5kRXZlbnQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gICAgdGltZVVwZGF0ZUV2ZW50OiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XHJcbiAgICB2b2x1bWVDaGFuZ2VFdmVudDogU3ViamVjdDxudW1iZXI+ID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xyXG4gICAgd2FpdGluZ0V2ZW50OiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICAgIG1lZGlhQ2xpY2tFdmVudDogU3ViamVjdDxNb3VzZUV2ZW50PiA9IG5ldyBTdWJqZWN0PE1vdXNlRXZlbnQ+KCk7XHJcbiAgICBmdWxsc2NyZWVuRXZlbnQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgcXVpZXRNb2RlRXZlbnQ6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgcHJvZ3Jlc3NFdmVudDogT2JzZXJ2YWJsZTxUaW1lUmFuZ2VzPiA9IE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcjogT2JzZXJ2ZXI8VGltZVJhbmdlcz4pID0+IHtcclxuXHJcbiAgICAgICAgLy8gcmVwZWF0IHVudGlsIHRoZSB3aG9sZSB2aWRlbyBoYXMgZnVsbHkgbG9hZGVkXHJcbiAgICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgbGV0IGJ1ZmZlcmVkID0gdGhpcy5fbWVkaWFQbGF5ZXIuYnVmZmVyZWQgYXMgVGltZVJhbmdlcztcclxuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChidWZmZXJlZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoYnVmZmVyZWQubGVuZ3RoID09PSAxICYmIGJ1ZmZlcmVkLnN0YXJ0KDApID09PSAwICYmIGJ1ZmZlcmVkLmVuZCgwKSA9PT0gdGhpcy5kdXJhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBwcml2YXRlIF9tZWRpYVBsYXllcjogSFRNTE1lZGlhRWxlbWVudDtcclxuICAgIHByaXZhdGUgX2hvc3RFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgX2Z1bGxzY3JlZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX3F1aWV0TW9kZTogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mcmFtZUV4dHJhY3Rpb25TZXJ2aWNlOiBGcmFtZUV4dHJhY3Rpb25TZXJ2aWNlKSB7fVxyXG5cclxuICAgIC8qXHJcbiAgICAgICAgQ3JlYXRlIGFsbCB0aGUgZ2V0dGVycyBhbmQgc2V0dGVycyB0aGUgY2FuIGJlIHVzZWQgYnkgbWVkaWEgcGxheWVyIGV4dGVuc2lvbnNcclxuICAgICovXHJcbiAgICBnZXQgbWVkaWFQbGF5ZXIoKTogSFRNTE1lZGlhRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21lZGlhUGxheWVyO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBxdWlldE1vZGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3F1aWV0TW9kZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgcXVpZXRNb2RlKHZhbHVlOiBib29sZWFuKSB7XHJcblxyXG4gICAgICAgIC8vIHF1aWV0IG1vZGUgY2Fubm90IGJlIGVuYWJsZWQgb24gYXVkaW8gcGxheWVyXHJcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ2F1ZGlvJykge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fcXVpZXRNb2RlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5xdWlldE1vZGVFdmVudC5uZXh0KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbWVkaWFQbGF5ZXJXaWR0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZWRpYVBsYXllciA/IHRoaXMuX21lZGlhUGxheWVyLm9mZnNldFdpZHRoIDogMDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbWVkaWFQbGF5ZXJIZWlnaHQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWVkaWFQbGF5ZXIgPyB0aGlzLl9tZWRpYVBsYXllci5vZmZzZXRIZWlnaHQgOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBhdWRpb1RyYWNrcygpOiBBdWRpb1RyYWNrTGlzdCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21lZGlhUGxheWVyID8gdGhpcy5fbWVkaWFQbGF5ZXIuYXVkaW9UcmFja3MgOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBhdXRvcGxheSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWVkaWFQbGF5ZXIgPyB0aGlzLl9tZWRpYVBsYXllci5hdXRvcGxheSA6IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgc2V0IGF1dG9wbGF5KHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fbWVkaWFQbGF5ZXIuYXV0b3BsYXkgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYnVmZmVyZWQoKTogVGltZVJhbmdlcyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21lZGlhUGxheWVyID8gdGhpcy5fbWVkaWFQbGF5ZXIuYnVmZmVyZWQgOiBuZXcgVGltZVJhbmdlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjcm9zc09yaWdpbigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZWRpYVBsYXllciA/IHRoaXMuX21lZGlhUGxheWVyLmNyb3NzT3JpZ2luIDogbnVsbDtcclxuICAgIH1cclxuICAgIHNldCBjcm9zc09yaWdpbih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fbWVkaWFQbGF5ZXIuY3Jvc3NPcmlnaW4gPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY3VycmVudFNyYygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZWRpYVBsYXllciA/IHRoaXMuX21lZGlhUGxheWVyLmN1cnJlbnRTcmMgOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjdXJyZW50VGltZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZWRpYVBsYXllciA/IHRoaXMuX21lZGlhUGxheWVyLmN1cnJlbnRUaW1lIDogMDtcclxuICAgIH1cclxuICAgIHNldCBjdXJyZW50VGltZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fbWVkaWFQbGF5ZXIuY3VycmVudFRpbWUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZGVmYXVsdE11dGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZWRpYVBsYXllciA/IHRoaXMuX21lZGlhUGxheWVyLmRlZmF1bHRNdXRlZCA6IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgc2V0IGRlZmF1bHRNdXRlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX21lZGlhUGxheWVyLmRlZmF1bHRNdXRlZCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBkZWZhdWx0UGxheWJhY2tSYXRlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21lZGlhUGxheWVyID8gdGhpcy5fbWVkaWFQbGF5ZXIuZGVmYXVsdFBsYXliYWNrUmF0ZSA6IDE7XHJcbiAgICB9XHJcbiAgICBzZXQgZGVmYXVsdFBsYXliYWNrUmF0ZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fbWVkaWFQbGF5ZXIuZGVmYXVsdFBsYXliYWNrUmF0ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBkdXJhdGlvbigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZWRpYVBsYXllciA/IHRoaXMuX21lZGlhUGxheWVyLmR1cmF0aW9uIDogMDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZW5kZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21lZGlhUGxheWVyID8gdGhpcy5fbWVkaWFQbGF5ZXIuZW5kZWQgOiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbG9vcCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWVkaWFQbGF5ZXIgPyB0aGlzLl9tZWRpYVBsYXllci5sb29wIDogZmFsc2U7XHJcbiAgICB9XHJcbiAgICBzZXQgbG9vcCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX21lZGlhUGxheWVyLmxvb3AgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbXV0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21lZGlhUGxheWVyID8gdGhpcy5fbWVkaWFQbGF5ZXIubXV0ZWQgOiBmYWxzZTtcclxuICAgIH1cclxuICAgIHNldCBtdXRlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX21lZGlhUGxheWVyLm11dGVkID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG5ldHdvcmtTdGF0ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZWRpYVBsYXllci5uZXR3b3JrU3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHBhdXNlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWVkaWFQbGF5ZXIgPyB0aGlzLl9tZWRpYVBsYXllci5wYXVzZWQgOiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwbGF5YmFja1JhdGUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWVkaWFQbGF5ZXIgPyB0aGlzLl9tZWRpYVBsYXllci5wbGF5YmFja1JhdGUgOiAxO1xyXG4gICAgfVxyXG4gICAgc2V0IHBsYXliYWNrUmF0ZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fbWVkaWFQbGF5ZXIucGxheWJhY2tSYXRlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHBsYXllZCgpOiBUaW1lUmFuZ2VzIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWVkaWFQbGF5ZXIgPyB0aGlzLl9tZWRpYVBsYXllci5wbGF5ZWQgOiBuZXcgVGltZVJhbmdlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwcmVsb2FkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21lZGlhUGxheWVyID8gdGhpcy5fbWVkaWFQbGF5ZXIucHJlbG9hZCA6ICdhdXRvJztcclxuICAgIH1cclxuICAgIHNldCBwcmVsb2FkKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9tZWRpYVBsYXllci5wcmVsb2FkID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHJlYWR5U3RhdGUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWVkaWFQbGF5ZXIgPyB0aGlzLl9tZWRpYVBsYXllci5yZWFkeVN0YXRlIDogMDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2Vla2FibGUoKTogVGltZVJhbmdlcyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21lZGlhUGxheWVyID8gdGhpcy5fbWVkaWFQbGF5ZXIuc2Vla2FibGUgOiBuZXcgVGltZVJhbmdlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzZWVraW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZWRpYVBsYXllciA/IHRoaXMuX21lZGlhUGxheWVyLnNlZWtpbmcgOiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3JjKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21lZGlhUGxheWVyID8gdGhpcy5fbWVkaWFQbGF5ZXIuc3JjIDogJyc7XHJcbiAgICB9XHJcbiAgICBzZXQgc3JjKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9tZWRpYVBsYXllci5zcmMgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdGV4dFRyYWNrcygpOiBUZXh0VHJhY2tMaXN0IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWVkaWFQbGF5ZXIgPyB0aGlzLl9tZWRpYVBsYXllci50ZXh0VHJhY2tzIDogbmV3IFRleHRUcmFja0xpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdmlkZW9UcmFja3MoKTogVmlkZW9UcmFja0xpc3Qge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZWRpYVBsYXllciA/IHRoaXMuX21lZGlhUGxheWVyLnZpZGVvVHJhY2tzIDogbmV3IFZpZGVvVHJhY2tMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHZvbHVtZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tZWRpYVBsYXllciA/IHRoaXMuX21lZGlhUGxheWVyLnZvbHVtZSA6IDE7XHJcbiAgICB9XHJcbiAgICBzZXQgdm9sdW1lKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9tZWRpYVBsYXllci52b2x1bWUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZnVsbHNjcmVlbigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWVkaWFQbGF5ZXIgPyB0aGlzLl9mdWxsc2NyZWVuIDogZmFsc2U7XHJcbiAgICB9XHJcbiAgICBzZXQgZnVsbHNjcmVlbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX2Z1bGxzY3JlZW4gPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmZ1bGxzY3JlZW5FdmVudC5uZXh0KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRNZWRpYVBsYXllcihob3N0RWxlbWVudDogSFRNTEVsZW1lbnQsIG1lZGlhUGxheWVyOiBIVE1MTWVkaWFFbGVtZW50KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5faG9zdEVsZW1lbnQgPSBob3N0RWxlbWVudDtcclxuICAgICAgICB0aGlzLl9tZWRpYVBsYXllciA9IG1lZGlhUGxheWVyO1xyXG5cclxuICAgICAgICB0aGlzLmluaXRFdmVudC5uZXh0KHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVG9nZ2xlIHBsYXlpbmcgc3RhdGVcclxuICAgICAqL1xyXG4gICAgdG9nZ2xlUGxheSgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gcHJldmVudCBhbnkgYWN0aW9uIGlzIG5vdCBsb2FkZWRcclxuICAgICAgICBpZiAodGhpcy5sb2FkZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBhdXNlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXkoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBhdXNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RhcnRzIHBsYXlpbmcgdGhlIGF1ZGlvL3ZpZGVvXHJcbiAgICAgKi9cclxuICAgIHBsYXkoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fbWVkaWFQbGF5ZXIucGxheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUGF1c2VzIHRoZSBjdXJyZW50bHkgcGxheWluZyBhdWRpby92aWRlb1xyXG4gICAgICovXHJcbiAgICBwYXVzZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9tZWRpYVBsYXllci5wYXVzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmUtbG9hZHMgdGhlIGF1ZGlvL3ZpZGVvIGVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgbG9hZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9tZWRpYVBsYXllci5sb2FkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3MgaWYgdGhlIGJyb3dzZXIgY2FuIHBsYXkgdGhlIHNwZWNpZmllZCBhdWRpby92aWRlbyB0eXBlXHJcbiAgICAgKi9cclxuICAgIGNhblBsYXlUeXBlKHR5cGU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21lZGlhUGxheWVyLmNhblBsYXlUeXBlKHR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBhIG5ldyB0ZXh0IHRyYWNrIHRvIHRoZSBhdWRpby92aWRlb1xyXG4gICAgICovXHJcbiAgICBhZGRUZXh0VHJhY2soa2luZDogc3RyaW5nLCBsYWJlbDogc3RyaW5nLCBsYW5ndWFnZTogc3RyaW5nKTogVGV4dFRyYWNrIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWVkaWFQbGF5ZXIuYWRkVGV4dFRyYWNrKGtpbmQsIGxhYmVsLCBsYW5ndWFnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBdHRlbXB0IHRvIGRpc3BsYXkgbWVkaWEgaW4gZnVsbHNjcmVlbiBtb2RlXHJcbiAgICAgKi9cclxuICAgIHJlcXVlc3RGdWxsc2NyZWVuKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5faG9zdEVsZW1lbnQucmVxdWVzdEZ1bGxzY3JlZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5faG9zdEVsZW1lbnQucmVxdWVzdEZ1bGxzY3JlZW4oKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2hvc3RFbGVtZW50LndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2hvc3RFbGVtZW50LndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICgoPGFueT50aGlzLl9ob3N0RWxlbWVudCkubXNSZXF1ZXN0RnVsbHNjcmVlbikge1xyXG4gICAgICAgICAgICAoPGFueT50aGlzLl9ob3N0RWxlbWVudCkubXNSZXF1ZXN0RnVsbHNjcmVlbigpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoKDxhbnk+dGhpcy5faG9zdEVsZW1lbnQpLm1velJlcXVlc3RGdWxsU2NyZWVuKSB7XHJcbiAgICAgICAgICAgICg8YW55PnRoaXMuX2hvc3RFbGVtZW50KS5tb3pSZXF1ZXN0RnVsbFNjcmVlbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEV4aXQgZnVsbCBzY3JlZW4gbW9kZVxyXG4gICAgICovXHJcbiAgICBleGl0RnVsbHNjcmVlbigpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKCg8YW55PnRoaXMuX2hvc3RFbGVtZW50KS5leGl0RnVsbHNjcmVlbikge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5leGl0RnVsbHNjcmVlbigpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4pIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4oKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCg8YW55PmRvY3VtZW50KS5tc0V4aXRGdWxsc2NyZWVuKSB7XHJcbiAgICAgICAgICAgICg8YW55PmRvY3VtZW50KS5tc0V4aXRGdWxsc2NyZWVuKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICgoPGFueT5kb2N1bWVudCkubW96Q2FuY2VsRnVsbFNjcmVlbikge1xyXG4gICAgICAgICAgICAoPGFueT5kb2N1bWVudCkubW96Q2FuY2VsRnVsbFNjcmVlbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdWxsc2NyZWVuQ2hhbmdlKGV2ZW50OiBFdmVudCkge1xyXG4gICAgICAgIHRoaXMuZnVsbHNjcmVlbiA9ICg8YW55PmRvY3VtZW50KS5mdWxsc2NyZWVuIHx8IGRvY3VtZW50LndlYmtpdElzRnVsbFNjcmVlbiB8fCAoPGFueT5kb2N1bWVudCkubW96RnVsbFNjcmVlbiB8fCAoPGFueT5kb2N1bWVudCkubXNGdWxsc2NyZWVuRWxlbWVudCAhPT0gbnVsbCAmJiAoPGFueT5kb2N1bWVudCkubXNGdWxsc2NyZWVuRWxlbWVudCAhPT0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuZnVsbHNjcmVlbkV2ZW50Lm5leHQodGhpcy5mdWxsc2NyZWVuKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRvZ2dsZSBGdWxsc2NyZWVuIFN0YXRlXHJcbiAgICAgKi9cclxuICAgIHRvZ2dsZUZ1bGxzY3JlZW4oKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZnVsbHNjcmVlbikge1xyXG4gICAgICAgICAgICB0aGlzLmV4aXRGdWxsc2NyZWVuKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0RnVsbHNjcmVlbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEV4dHJhY3QgdGhlIGZyYW1lcyBmcm9tIHRoZSB2aWRlb1xyXG4gICAgICovXHJcbiAgICBnZXRGcmFtZXMod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHNraXA6IG51bWJlcik6IE9ic2VydmFibGU8RXh0cmFjdGVkRnJhbWU+IHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ3ZpZGVvJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZnJhbWVFeHRyYWN0aW9uU2VydmljZS5nZXRGcmFtZVRodW1ibmFpbHModGhpcy5zb3VyY2UsIHdpZHRoLCBoZWlnaHQsIDAsIHRoaXMuZHVyYXRpb24sIDEwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmcm9tKFtdKTtcclxuICAgIH1cclxufSJdfQ==