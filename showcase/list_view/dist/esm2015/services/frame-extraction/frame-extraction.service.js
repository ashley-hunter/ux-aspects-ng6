/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { concat, fromEvent, Observable } from 'rxjs';
export class FrameExtractionService {
    /**
     * @param {?} source
     * @return {?}
     */
    createVideoPlayer(source) {
        let /** @type {?} */ videoPlayer = document.createElement('video');
        videoPlayer.preload = 'auto';
        videoPlayer.src = source;
        return videoPlayer;
    }
    /**
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    createCanvas(width, height) {
        let /** @type {?} */ canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        return canvas;
    }
    /**
     * @param {?} videoPlayer
     * @param {?} time
     * @return {?}
     */
    goToFrame(videoPlayer, time) {
        videoPlayer.currentTime = time;
        return fromEvent(videoPlayer, time === 0 ? 'loadeddata' : 'seeked');
    }
    /**
     * @param {?} videoPlayer
     * @param {?} canvas
     * @param {?} time
     * @param {?=} width
     * @param {?=} height
     * @return {?}
     */
    getThumbnail(videoPlayer, canvas, time, width = 160, height = 90) {
        return Observable.create((observer) => {
            // go to specified frame
            let /** @type {?} */ subscription = this.goToFrame(videoPlayer, time).subscribe(() => {
                // create image from current frame
                canvas.getContext('2d').drawImage(videoPlayer, 0, 0, width, height);
                observer.next({ image: canvas.toDataURL(), width: width, height: height, time: time });
                observer.complete();
                subscription.unsubscribe();
            });
        });
    }
    /**
     * @param {?} source
     * @param {?} width
     * @param {?} height
     * @param {?} time
     * @return {?}
     */
    getFrameThumbnail(source, width, height, time) {
        // create required elements
        let /** @type {?} */ videoPlayer = this.createVideoPlayer(source);
        let /** @type {?} */ canvas = this.createCanvas(width, height);
        let /** @type {?} */ frameSubscription = this.getThumbnail(videoPlayer, canvas, time, width, height);
        // ensure we release memory after we are finished
        frameSubscription.subscribe(null, null, () => {
            videoPlayer = null;
            canvas = null;
        });
        return frameSubscription;
    }
    /**
     * @param {?} source
     * @param {?} width
     * @param {?} height
     * @param {?} start
     * @param {?} end
     * @param {?=} skip
     * @return {?}
     */
    getFrameThumbnails(source, width, height, start, end, skip = 5) {
        // create required elements
        let /** @type {?} */ videoPlayer = this.createVideoPlayer(source);
        let /** @type {?} */ canvas = this.createCanvas(width, height);
        return Observable.create((observer) => {
            fromEvent(videoPlayer, 'loadedmetadata').subscribe(() => {
                // calculate the frames required
                let /** @type {?} */ frames = [];
                for (let /** @type {?} */ idx = start; idx < end; idx += skip) {
                    frames.push(this.getThumbnail(videoPlayer, canvas, idx, width, height));
                }
                concat(...frames).subscribe((frame) => observer.next(frame), null, () => {
                    videoPlayer = null;
                    canvas = null;
                    observer.complete();
                });
            });
        });
    }
}
FrameExtractionService.decorators = [
    { type: Injectable },
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWUtZXh0cmFjdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL2ZyYW1lLWV4dHJhY3Rpb24vZnJhbWUtZXh0cmFjdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQztBQUcvRCxNQUFNOzs7OztJQUVNLGlCQUFpQixDQUFDLE1BQWM7UUFDcEMscUJBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEQsV0FBVyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDN0IsV0FBVyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7UUFDekIsTUFBTSxDQUFDLFdBQVcsQ0FBQzs7Ozs7OztJQUdmLFlBQVksQ0FBQyxLQUFhLEVBQUUsTUFBYztRQUM5QyxxQkFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QyxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNyQixNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN2QixNQUFNLENBQUMsTUFBTSxDQUFDOzs7Ozs7O0lBR1YsU0FBUyxDQUFDLFdBQTZCLEVBQUUsSUFBWTtRQUN6RCxXQUFXLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUMvQixNQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7Ozs7Ozs7O0lBR2hFLFlBQVksQ0FBQyxXQUE2QixFQUFFLE1BQXlCLEVBQUUsSUFBWSxF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OztZQS9FSixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBjb25jYXQsIGZyb21FdmVudCwgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZyYW1lRXh0cmFjdGlvblNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlVmlkZW9QbGF5ZXIoc291cmNlOiBzdHJpbmcpOiBIVE1MVmlkZW9FbGVtZW50IHtcclxuICAgICAgICBsZXQgdmlkZW9QbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xyXG4gICAgICAgIHZpZGVvUGxheWVyLnByZWxvYWQgPSAnYXV0byc7XHJcbiAgICAgICAgdmlkZW9QbGF5ZXIuc3JjID0gc291cmNlO1xyXG4gICAgICAgIHJldHVybiB2aWRlb1BsYXllcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZUNhbnZhcyh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IEhUTUxDYW52YXNFbGVtZW50IHtcclxuICAgICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICByZXR1cm4gY2FudmFzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ29Ub0ZyYW1lKHZpZGVvUGxheWVyOiBIVE1MVmlkZW9FbGVtZW50LCB0aW1lOiBudW1iZXIpOiBPYnNlcnZhYmxlPEV2ZW50PiB7XHJcbiAgICAgICAgdmlkZW9QbGF5ZXIuY3VycmVudFRpbWUgPSB0aW1lO1xyXG4gICAgICAgIHJldHVybiBmcm9tRXZlbnQodmlkZW9QbGF5ZXIsIHRpbWUgPT09IDAgPyAnbG9hZGVkZGF0YScgOiAnc2Vla2VkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRUaHVtYm5haWwodmlkZW9QbGF5ZXI6IEhUTUxWaWRlb0VsZW1lbnQsIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIHRpbWU6IG51bWJlciwgd2lkdGg6IG51bWJlciA9IDE2MCwgaGVpZ2h0OiBudW1iZXIgPSA5MCk6IE9ic2VydmFibGU8RXh0cmFjdGVkRnJhbWU+IHtcclxuXHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcjogT2JzZXJ2ZXI8RXh0cmFjdGVkRnJhbWU+KSA9PiB7XHJcblxyXG4gICAgICAgICAgICAvLyBnbyB0byBzcGVjaWZpZWQgZnJhbWVcclxuICAgICAgICAgICAgbGV0IHN1YnNjcmlwdGlvbiA9IHRoaXMuZ29Ub0ZyYW1lKHZpZGVvUGxheWVyLCB0aW1lKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIGltYWdlIGZyb20gY3VycmVudCBmcmFtZVxyXG4gICAgICAgICAgICAgICAgY2FudmFzLmdldENvbnRleHQoJzJkJykuZHJhd0ltYWdlKHZpZGVvUGxheWVyLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoeyBpbWFnZTogY2FudmFzLnRvRGF0YVVSTCgpLCB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0LCB0aW1lOiB0aW1lIH0pO1xyXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcclxuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGcmFtZVRodW1ibmFpbChzb3VyY2U6IHN0cmluZywgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHRpbWU6IG51bWJlcik6IE9ic2VydmFibGU8RXh0cmFjdGVkRnJhbWU+IHtcclxuXHJcbiAgICAgICAgLy8gY3JlYXRlIHJlcXVpcmVkIGVsZW1lbnRzXHJcbiAgICAgICAgbGV0IHZpZGVvUGxheWVyID0gdGhpcy5jcmVhdGVWaWRlb1BsYXllcihzb3VyY2UpO1xyXG4gICAgICAgIGxldCBjYW52YXMgPSB0aGlzLmNyZWF0ZUNhbnZhcyh3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgbGV0IGZyYW1lU3Vic2NyaXB0aW9uID0gdGhpcy5nZXRUaHVtYm5haWwodmlkZW9QbGF5ZXIsIGNhbnZhcywgdGltZSwgd2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgIC8vIGVuc3VyZSB3ZSByZWxlYXNlIG1lbW9yeSBhZnRlciB3ZSBhcmUgZmluaXNoZWRcclxuICAgICAgICBmcmFtZVN1YnNjcmlwdGlvbi5zdWJzY3JpYmUobnVsbCwgbnVsbCwgKCkgPT4ge1xyXG4gICAgICAgICAgICB2aWRlb1BsYXllciA9IG51bGw7XHJcbiAgICAgICAgICAgIGNhbnZhcyA9IG51bGw7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmcmFtZVN1YnNjcmlwdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGcmFtZVRodW1ibmFpbHMoc291cmNlOiBzdHJpbmcsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlciwgc2tpcDogbnVtYmVyID0gNSk6IE9ic2VydmFibGU8RXh0cmFjdGVkRnJhbWU+IHtcclxuXHJcbiAgICAgICAgLy8gY3JlYXRlIHJlcXVpcmVkIGVsZW1lbnRzXHJcbiAgICAgICAgbGV0IHZpZGVvUGxheWVyID0gdGhpcy5jcmVhdGVWaWRlb1BsYXllcihzb3VyY2UpO1xyXG4gICAgICAgIGxldCBjYW52YXMgPSB0aGlzLmNyZWF0ZUNhbnZhcyh3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcjogT2JzZXJ2ZXI8RXh0cmFjdGVkRnJhbWU+KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBmcm9tRXZlbnQodmlkZW9QbGF5ZXIsICdsb2FkZWRtZXRhZGF0YScpLnN1YnNjcmliZSgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBmcmFtZXMgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIGxldCBmcmFtZXMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpZHggPSBzdGFydDsgaWR4IDwgZW5kOyBpZHggKz0gc2tpcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyYW1lcy5wdXNoKHRoaXMuZ2V0VGh1bWJuYWlsKHZpZGVvUGxheWVyLCBjYW52YXMsIGlkeCwgd2lkdGgsIGhlaWdodCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbmNhdCguLi5mcmFtZXMpLnN1YnNjcmliZSgoZnJhbWU6IEV4dHJhY3RlZEZyYW1lKSA9PiBvYnNlcnZlci5uZXh0KGZyYW1lKSwgbnVsbCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZpZGVvUGxheWVyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBjYW52YXMgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFeHRyYWN0ZWRGcmFtZSB7XHJcbiAgICBpbWFnZTogc3RyaW5nO1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG4gICAgdGltZTogbnVtYmVyO1xyXG59Il19