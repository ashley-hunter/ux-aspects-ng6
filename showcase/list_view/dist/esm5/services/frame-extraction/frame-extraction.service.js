/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { concat, fromEvent, Observable } from 'rxjs';
var FrameExtractionService = /** @class */ (function () {
    function FrameExtractionService() {
    }
    /**
     * @param {?} source
     * @return {?}
     */
    FrameExtractionService.prototype.createVideoPlayer = /**
     * @param {?} source
     * @return {?}
     */
    function (source) {
        var /** @type {?} */ videoPlayer = document.createElement('video');
        videoPlayer.preload = 'auto';
        videoPlayer.src = source;
        return videoPlayer;
    };
    /**
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    FrameExtractionService.prototype.createCanvas = /**
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    function (width, height) {
        var /** @type {?} */ canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        return canvas;
    };
    /**
     * @param {?} videoPlayer
     * @param {?} time
     * @return {?}
     */
    FrameExtractionService.prototype.goToFrame = /**
     * @param {?} videoPlayer
     * @param {?} time
     * @return {?}
     */
    function (videoPlayer, time) {
        videoPlayer.currentTime = time;
        return fromEvent(videoPlayer, time === 0 ? 'loadeddata' : 'seeked');
    };
    /**
     * @param {?} videoPlayer
     * @param {?} canvas
     * @param {?} time
     * @param {?=} width
     * @param {?=} height
     * @return {?}
     */
    FrameExtractionService.prototype.getThumbnail = /**
     * @param {?} videoPlayer
     * @param {?} canvas
     * @param {?} time
     * @param {?=} width
     * @param {?=} height
     * @return {?}
     */
    function (videoPlayer, canvas, time, width, height) {
        var _this = this;
        if (width === void 0) { width = 160; }
        if (height === void 0) { height = 90; }
        return Observable.create(function (observer) {
            // go to specified frame
            var /** @type {?} */ subscription = _this.goToFrame(videoPlayer, time).subscribe(function () {
                // create image from current frame
                canvas.getContext('2d').drawImage(videoPlayer, 0, 0, width, height);
                observer.next({ image: canvas.toDataURL(), width: width, height: height, time: time });
                observer.complete();
                subscription.unsubscribe();
            });
        });
    };
    /**
     * @param {?} source
     * @param {?} width
     * @param {?} height
     * @param {?} time
     * @return {?}
     */
    FrameExtractionService.prototype.getFrameThumbnail = /**
     * @param {?} source
     * @param {?} width
     * @param {?} height
     * @param {?} time
     * @return {?}
     */
    function (source, width, height, time) {
        // create required elements
        var /** @type {?} */ videoPlayer = this.createVideoPlayer(source);
        var /** @type {?} */ canvas = this.createCanvas(width, height);
        var /** @type {?} */ frameSubscription = this.getThumbnail(videoPlayer, canvas, time, width, height);
        // ensure we release memory after we are finished
        frameSubscription.subscribe(null, null, function () {
            videoPlayer = null;
            canvas = null;
        });
        return frameSubscription;
    };
    /**
     * @param {?} source
     * @param {?} width
     * @param {?} height
     * @param {?} start
     * @param {?} end
     * @param {?=} skip
     * @return {?}
     */
    FrameExtractionService.prototype.getFrameThumbnails = /**
     * @param {?} source
     * @param {?} width
     * @param {?} height
     * @param {?} start
     * @param {?} end
     * @param {?=} skip
     * @return {?}
     */
    function (source, width, height, start, end, skip) {
        var _this = this;
        if (skip === void 0) { skip = 5; }
        // create required elements
        var /** @type {?} */ videoPlayer = this.createVideoPlayer(source);
        var /** @type {?} */ canvas = this.createCanvas(width, height);
        return Observable.create(function (observer) {
            fromEvent(videoPlayer, 'loadedmetadata').subscribe(function () {
                // calculate the frames required
                var /** @type {?} */ frames = [];
                for (var /** @type {?} */ idx = start; idx < end; idx += skip) {
                    frames.push(_this.getThumbnail(videoPlayer, canvas, idx, width, height));
                }
                concat.apply(void 0, tslib_1.__spread(frames)).subscribe(function (frame) { return observer.next(frame); }, null, function () {
                    videoPlayer = null;
                    canvas = null;
                    observer.complete();
                });
            });
        });
    };
    FrameExtractionService.decorators = [
        { type: Injectable },
    ];
    return FrameExtractionService;
}());
export { FrameExtractionService };
function FrameExtractionService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FrameExtractionService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FrameExtractionService.ctorParameters;
}
/**
 * @record
 */
export function ExtractedFrame() { }
function ExtractedFrame_tsickle_Closure_declarations() {
    /** @type {?} */
    ExtractedFrame.prototype.image;
    /** @type {?} */
    ExtractedFrame.prototype.width;
    /** @type {?} */
    ExtractedFrame.prototype.height;
    /** @type {?} */
    ExtractedFrame.prototype.time;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWUtZXh0cmFjdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL2ZyYW1lLWV4dHJhY3Rpb24vZnJhbWUtZXh0cmFjdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVksTUFBTSxNQUFNLENBQUM7Ozs7Ozs7O0lBS25ELGtEQUFpQjs7OztjQUFDLE1BQWM7UUFDcEMscUJBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEQsV0FBVyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDN0IsV0FBVyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7UUFDekIsTUFBTSxDQUFDLFdBQVcsQ0FBQzs7Ozs7OztJQUdmLDZDQUFZOzs7OztjQUFDLEtBQWEsRUFBRSxNQUFjO1FBQzlDLHFCQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxNQUFNLENBQUM7Ozs7Ozs7SUFHViwwQ0FBUzs7Ozs7Y0FBQyxXQUE2QixFQUFFLElBQVk7UUFDekQsV0FBVyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDL0IsTUFBTSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Ozs7Ozs7OztJQUdoRSw2Q0FBWTs7Ozs7Ozs7Y0FBQyxXQUE2QixFQUFFLE1B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QUN2QixDQUFDLENBQUM7YUFDTixDQUFDLENBQUM7U0FFTixDQUFDLENBQUM7S0FDTjs7Z0JBL0VKLFVBQVU7O2lDQUhYOztTQUlhLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgY29uY2F0LCBmcm9tRXZlbnQsIE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGcmFtZUV4dHJhY3Rpb25TZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZVZpZGVvUGxheWVyKHNvdXJjZTogc3RyaW5nKTogSFRNTFZpZGVvRWxlbWVudCB7XHJcbiAgICAgICAgbGV0IHZpZGVvUGxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcclxuICAgICAgICB2aWRlb1BsYXllci5wcmVsb2FkID0gJ2F1dG8nO1xyXG4gICAgICAgIHZpZGVvUGxheWVyLnNyYyA9IHNvdXJjZTtcclxuICAgICAgICByZXR1cm4gdmlkZW9QbGF5ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVDYW52YXMod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpOiBIVE1MQ2FudmFzRWxlbWVudCB7XHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgcmV0dXJuIGNhbnZhcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdvVG9GcmFtZSh2aWRlb1BsYXllcjogSFRNTFZpZGVvRWxlbWVudCwgdGltZTogbnVtYmVyKTogT2JzZXJ2YWJsZTxFdmVudD4ge1xyXG4gICAgICAgIHZpZGVvUGxheWVyLmN1cnJlbnRUaW1lID0gdGltZTtcclxuICAgICAgICByZXR1cm4gZnJvbUV2ZW50KHZpZGVvUGxheWVyLCB0aW1lID09PSAwID8gJ2xvYWRlZGRhdGEnIDogJ3NlZWtlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0VGh1bWJuYWlsKHZpZGVvUGxheWVyOiBIVE1MVmlkZW9FbGVtZW50LCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCB0aW1lOiBudW1iZXIsIHdpZHRoOiBudW1iZXIgPSAxNjAsIGhlaWdodDogbnVtYmVyID0gOTApOiBPYnNlcnZhYmxlPEV4dHJhY3RlZEZyYW1lPiB7XHJcblxyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXI6IE9ic2VydmVyPEV4dHJhY3RlZEZyYW1lPikgPT4ge1xyXG5cclxuICAgICAgICAgICAgLy8gZ28gdG8gc3BlY2lmaWVkIGZyYW1lXHJcbiAgICAgICAgICAgIGxldCBzdWJzY3JpcHRpb24gPSB0aGlzLmdvVG9GcmFtZSh2aWRlb1BsYXllciwgdGltZSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBpbWFnZSBmcm9tIGN1cnJlbnQgZnJhbWVcclxuICAgICAgICAgICAgICAgIGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLmRyYXdJbWFnZSh2aWRlb1BsYXllciwgMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHsgaW1hZ2U6IGNhbnZhcy50b0RhdGFVUkwoKSwgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCwgdGltZTogdGltZSB9KTtcclxuICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RnJhbWVUaHVtYm5haWwoc291cmNlOiBzdHJpbmcsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCB0aW1lOiBudW1iZXIpOiBPYnNlcnZhYmxlPEV4dHJhY3RlZEZyYW1lPiB7XHJcblxyXG4gICAgICAgIC8vIGNyZWF0ZSByZXF1aXJlZCBlbGVtZW50c1xyXG4gICAgICAgIGxldCB2aWRlb1BsYXllciA9IHRoaXMuY3JlYXRlVmlkZW9QbGF5ZXIoc291cmNlKTtcclxuICAgICAgICBsZXQgY2FudmFzID0gdGhpcy5jcmVhdGVDYW52YXMod2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgIGxldCBmcmFtZVN1YnNjcmlwdGlvbiA9IHRoaXMuZ2V0VGh1bWJuYWlsKHZpZGVvUGxheWVyLCBjYW52YXMsIHRpbWUsIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICAvLyBlbnN1cmUgd2UgcmVsZWFzZSBtZW1vcnkgYWZ0ZXIgd2UgYXJlIGZpbmlzaGVkXHJcbiAgICAgICAgZnJhbWVTdWJzY3JpcHRpb24uc3Vic2NyaWJlKG51bGwsIG51bGwsICgpID0+IHtcclxuICAgICAgICAgICAgdmlkZW9QbGF5ZXIgPSBudWxsO1xyXG4gICAgICAgICAgICBjYW52YXMgPSBudWxsO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZnJhbWVTdWJzY3JpcHRpb247XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RnJhbWVUaHVtYm5haWxzKHNvdXJjZTogc3RyaW5nLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIsIHNraXA6IG51bWJlciA9IDUpOiBPYnNlcnZhYmxlPEV4dHJhY3RlZEZyYW1lPiB7XHJcblxyXG4gICAgICAgIC8vIGNyZWF0ZSByZXF1aXJlZCBlbGVtZW50c1xyXG4gICAgICAgIGxldCB2aWRlb1BsYXllciA9IHRoaXMuY3JlYXRlVmlkZW9QbGF5ZXIoc291cmNlKTtcclxuICAgICAgICBsZXQgY2FudmFzID0gdGhpcy5jcmVhdGVDYW52YXMod2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXI6IE9ic2VydmVyPEV4dHJhY3RlZEZyYW1lPikgPT4ge1xyXG5cclxuICAgICAgICAgICAgZnJvbUV2ZW50KHZpZGVvUGxheWVyLCAnbG9hZGVkbWV0YWRhdGEnKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgZnJhbWVzIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBsZXQgZnJhbWVzID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaWR4ID0gc3RhcnQ7IGlkeCA8IGVuZDsgaWR4ICs9IHNraXApIHtcclxuICAgICAgICAgICAgICAgICAgICBmcmFtZXMucHVzaCh0aGlzLmdldFRodW1ibmFpbCh2aWRlb1BsYXllciwgY2FudmFzLCBpZHgsIHdpZHRoLCBoZWlnaHQpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25jYXQoLi4uZnJhbWVzKS5zdWJzY3JpYmUoKGZyYW1lOiBFeHRyYWN0ZWRGcmFtZSkgPT4gb2JzZXJ2ZXIubmV4dChmcmFtZSksIG51bGwsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2aWRlb1BsYXllciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FudmFzID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXh0cmFjdGVkRnJhbWUge1xyXG4gICAgaW1hZ2U6IHN0cmluZztcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuICAgIHRpbWU6IG51bWJlcjtcclxufSJdfQ==