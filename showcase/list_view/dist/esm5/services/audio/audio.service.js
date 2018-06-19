/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Http, ResponseContentType } from '@angular/http';
import { Observable, of } from 'rxjs';
var AudioService = /** @class */ (function () {
    function AudioService(_http) {
        this._http = _http;
    }
    /**
     * @param {?} mediaElement
     * @return {?}
     */
    AudioService.prototype.getAudioFileMetadata = /**
     * @param {?} mediaElement
     * @return {?}
     */
    function (mediaElement) {
        var _this = this;
        return Observable.create(function (observer) {
            _this._http.request(mediaElement.src, { responseType: ResponseContentType.Blob }).subscribe(function (response) {
                var /** @type {?} */ filename = mediaElement.src.substring(mediaElement.src.lastIndexOf('/') + 1);
                var /** @type {?} */ extension = mediaElement.src.substring(mediaElement.src.lastIndexOf('.') + 1).toLowerCase();
                var /** @type {?} */ blob = response.blob();
                var /** @type {?} */ description;
                switch (extension) {
                    case 'mp3':
                        description = 'MPEG audio layer 3 file';
                        break;
                    case 'wma':
                        description = 'Windows media audio file';
                        break;
                    case 'wav':
                        description = 'WAVE audio file';
                        break;
                    case 'ogg':
                        description = 'Ogg Vorbis file';
                        break;
                    case 'aac':
                        description = 'Advanced audio coding file';
                        break;
                    case 'midi':
                        description = 'Musical instrument digital interface file';
                        break;
                    default:
                        description = 'Audio file';
                        break;
                }
                observer.next({
                    filename: filename,
                    extension: extension,
                    description: description,
                    size: blob.size
                });
            });
        });
    };
    /**
     * @param {?} url
     * @return {?}
     */
    AudioService.prototype.getWaveformFromUrl = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        var _this = this;
        // if audio context is not support return a stream of empty data
        if (!(/** @type {?} */ (window)).AudioContext) {
            return of([new Float32Array(0)]);
        }
        this._audioContext = new AudioContext();
        this.createVolumeNode();
        this.createAnalyserNode();
        return Observable.create(function (observer) {
            // load the media from the URL provided
            // load the media from the URL provided
            _this._http.request(url, { responseType: ResponseContentType.ArrayBuffer }).subscribe(function (response) {
                _this.getAudioBuffer(response.arrayBuffer()).subscribe(function (audioBuffer) {
                    // create the buffer source
                    // create the buffer source
                    _this.createBufferSource(audioBuffer);
                    var /** @type {?} */ dataPoints = [];
                    var /** @type {?} */ channels = _this._audioBuffer.numberOfChannels;
                    // extract the data from each channel
                    for (var /** @type {?} */ channelIdx = 0; channelIdx < channels; channelIdx++) {
                        dataPoints[channelIdx] = _this._audioBuffer.getChannelData(channelIdx);
                    }
                    observer.next(dataPoints);
                    observer.complete();
                    // cleanup after ourselves
                    dataPoints = null;
                }, function (error) { return observer.error(error); });
            }, function (error) { return observer.error(error); });
        });
    };
    /**
     * @param {?=} channels
     * @param {?=} skip
     * @return {?}
     */
    AudioService.prototype.getWaveformPoints = /**
     * @param {?=} channels
     * @param {?=} skip
     * @return {?}
     */
    function (channels, skip) {
        if (channels === void 0) { channels = []; }
        if (skip === void 0) { skip = 1000; }
        var /** @type {?} */ waveform = [];
        var /** @type {?} */ duration = channels.length > 0 ? channels[0].length : 0;
        var _loop_1 = function (idx) {
            // get all the channel data for a specific point
            var /** @type {?} */ points = channels.map(function (channel) { return channel[idx]; });
            // find the minimum point and maximum points at each position across all channels
            waveform.push({
                min: points.reduce(function (previous, current) { return current < previous ? current : previous; }),
                max: points.reduce(function (previous, current) { return current > previous ? current : previous; })
            });
        };
        // convert each channel data to a series of waveform points
        for (var /** @type {?} */ idx = 0; idx < duration; idx += skip) {
            _loop_1(idx);
        }
        return waveform;
    };
    /**
     * @param {?} arrayBuffer
     * @return {?}
     */
    AudioService.prototype.getAudioBuffer = /**
     * @param {?} arrayBuffer
     * @return {?}
     */
    function (arrayBuffer) {
        var _this = this;
        return Observable.create(function (observer) {
            _this.getOfflineAudioContext().decodeAudioData(arrayBuffer, function (audioBuffer) {
                observer.next(audioBuffer);
                observer.complete();
            }, function (error) { return observer.error(error); });
        });
    };
    /**
     * @return {?}
     */
    AudioService.prototype.getOfflineAudioContext = /**
     * @return {?}
     */
    function () {
        return new OfflineAudioContext(1, 2, this._audioContext.sampleRate || 44100);
    };
    /**
     * @param {?} audioBuffer
     * @return {?}
     */
    AudioService.prototype.createBufferSource = /**
     * @param {?} audioBuffer
     * @return {?}
     */
    function (audioBuffer) {
        this.disconnectSource();
        this._audioBuffer = audioBuffer;
        this._audioBufferSource = this._audioContext.createBufferSource();
        this._audioBufferSource.buffer = this._audioBuffer;
        this._audioBufferSource.connect(this._analyserNode);
    };
    /**
     * @return {?}
     */
    AudioService.prototype.createVolumeNode = /**
     * @return {?}
     */
    function () {
        this._gainNode = this._audioContext.createGain();
        this._gainNode.connect(this._audioContext.destination);
    };
    /**
     * @return {?}
     */
    AudioService.prototype.createAnalyserNode = /**
     * @return {?}
     */
    function () {
        this._analyserNode = this._audioContext.createAnalyser();
        this._analyserNode.connect(this._gainNode);
    };
    /**
     * @return {?}
     */
    AudioService.prototype.disconnectSource = /**
     * @return {?}
     */
    function () {
        if (this._audioBufferSource) {
            this._audioBufferSource.disconnect();
        }
    };
    AudioService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AudioService.ctorParameters = function () { return [
        { type: Http, },
    ]; };
    return AudioService;
}());
export { AudioService };
function AudioService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AudioService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AudioService.ctorParameters;
    /** @type {?} */
    AudioService.prototype._audioBuffer;
    /** @type {?} */
    AudioService.prototype._audioBufferSource;
    /** @type {?} */
    AudioService.prototype._audioContext;
    /** @type {?} */
    AudioService.prototype._gainNode;
    /** @type {?} */
    AudioService.prototype._analyserNode;
    /** @type {?} */
    AudioService.prototype._http;
}
/**
 * @record
 */
export function WaveformPoint() { }
function WaveformPoint_tsickle_Closure_declarations() {
    /** @type {?} */
    WaveformPoint.prototype.min;
    /** @type {?} */
    WaveformPoint.prototype.max;
}
/**
 * @record
 */
export function AudioMetadata() { }
function AudioMetadata_tsickle_Closure_declarations() {
    /** @type {?} */
    AudioMetadata.prototype.filename;
    /** @type {?} */
    AudioMetadata.prototype.extension;
    /** @type {?} */
    AudioMetadata.prototype.description;
    /** @type {?} */
    AudioMetadata.prototype.size;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVkaW8uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9hdWRpby9hdWRpby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLFVBQVUsRUFBSSxFQUFFLEVBQWMsTUFBTSxNQUFNLENBQUM7O0lBV2hELHNCQUFvQixLQUFXO1FBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtLQUFLOzs7OztJQUVwQywyQ0FBb0I7Ozs7SUFBcEIsVUFBcUIsWUFBOEI7UUFBbkQsaUJBK0NDO1FBOUNHLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQUMsUUFBaUM7WUFDdkQsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxFQUFFLFlBQVksRUFBRSxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLFFBQVE7Z0JBRS9GLHFCQUFNLFFBQVEsR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDbkYscUJBQU0sU0FBUyxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNsRyxxQkFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUM3QixxQkFBSSxXQUFXLENBQUM7Z0JBRWhCLE1BQU0sQ0FBQyxD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Q0FBQyxTQUFTLENBQUMsQ0FBQzs7Ozs7SUFHdkMsdUNBQWdCOzs7O1FBQ3BCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ3hDOzs7Z0JBMUpSLFVBQVU7Ozs7Z0JBSEYsSUFBSTs7dUJBRGI7O1NBS2EsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2VDb250ZW50VHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlICwgIG9mICwgIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBdWRpb1NlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgX2F1ZGlvQnVmZmVyOiBBdWRpb0J1ZmZlcjtcclxuICAgIHByaXZhdGUgX2F1ZGlvQnVmZmVyU291cmNlOiBBdWRpb0J1ZmZlclNvdXJjZU5vZGU7XHJcbiAgICBwcml2YXRlIF9hdWRpb0NvbnRleHQ6IEF1ZGlvQ29udGV4dDtcclxuICAgIHByaXZhdGUgX2dhaW5Ob2RlOiBHYWluTm9kZTtcclxuICAgIHByaXZhdGUgX2FuYWx5c2VyTm9kZTogQW5hbHlzZXJOb2RlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApIHsgfVxyXG5cclxuICAgIGdldEF1ZGlvRmlsZU1ldGFkYXRhKG1lZGlhRWxlbWVudDogSFRNTE1lZGlhRWxlbWVudCk6IE9ic2VydmFibGU8QXVkaW9NZXRhZGF0YT4ge1xyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXI6IE9ic2VydmVyPEF1ZGlvTWV0YWRhdGE+KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2h0dHAucmVxdWVzdChtZWRpYUVsZW1lbnQuc3JjLCB7IHJlc3BvbnNlVHlwZTogUmVzcG9uc2VDb250ZW50VHlwZS5CbG9iIH0pLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZW5hbWUgPSBtZWRpYUVsZW1lbnQuc3JjLnN1YnN0cmluZyhtZWRpYUVsZW1lbnQuc3JjLmxhc3RJbmRleE9mKCcvJykgKyAxKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IG1lZGlhRWxlbWVudC5zcmMuc3Vic3RyaW5nKG1lZGlhRWxlbWVudC5zcmMubGFzdEluZGV4T2YoJy4nKSArIDEpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBibG9iID0gcmVzcG9uc2UuYmxvYigpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRlc2NyaXB0aW9uO1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZXh0ZW5zaW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbXAzJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24gPSAnTVBFRyBhdWRpbyBsYXllciAzIGZpbGUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnd21hJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24gPSAnV2luZG93cyBtZWRpYSBhdWRpbyBmaWxlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3dhdic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uID0gJ1dBVkUgYXVkaW8gZmlsZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdvZ2cnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbiA9ICdPZ2cgVm9yYmlzIGZpbGUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYWFjJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24gPSAnQWR2YW5jZWQgYXVkaW8gY29kaW5nIGZpbGUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbWlkaSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uID0gJ011c2ljYWwgaW5zdHJ1bWVudCBkaWdpdGFsIGludGVyZmFjZSBmaWxlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uID0gJ0F1ZGlvIGZpbGUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHtcclxuICAgICAgICAgICAgICAgICAgICBmaWxlbmFtZTogZmlsZW5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZXh0ZW5zaW9uOiBleHRlbnNpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IGJsb2Iuc2l6ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFdhdmVmb3JtRnJvbVVybCh1cmw6IHN0cmluZyk6IE9ic2VydmFibGU8RmxvYXQzMkFycmF5W10+IHtcclxuXHJcbiAgICAgICAgLy8gaWYgYXVkaW8gY29udGV4dCBpcyBub3Qgc3VwcG9ydCByZXR1cm4gYSBzdHJlYW0gb2YgZW1wdHkgZGF0YVxyXG4gICAgICAgIGlmICghKDxhbnk+d2luZG93KS5BdWRpb0NvbnRleHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9mPEZsb2F0MzJBcnJheVtdPihbbmV3IEZsb2F0MzJBcnJheSgwKV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fYXVkaW9Db250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlVm9sdW1lTm9kZSgpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQW5hbHlzZXJOb2RlKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXI6IE9ic2VydmVyPEZsb2F0MzJBcnJheVtdPikgPT4ge1xyXG5cclxuICAgICAgICAgICAgLy8gbG9hZCB0aGUgbWVkaWEgZnJvbSB0aGUgVVJMIHByb3ZpZGVkXHJcbiAgICAgICAgICAgIHRoaXMuX2h0dHAucmVxdWVzdCh1cmwsIHsgcmVzcG9uc2VUeXBlOiBSZXNwb25zZUNvbnRlbnRUeXBlLkFycmF5QnVmZmVyIH0pLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldEF1ZGlvQnVmZmVyKHJlc3BvbnNlLmFycmF5QnVmZmVyKCkpLnN1YnNjcmliZShhdWRpb0J1ZmZlciA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgYnVmZmVyIHNvdXJjZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlQnVmZmVyU291cmNlKGF1ZGlvQnVmZmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGFQb2ludHM6IEZsb2F0MzJBcnJheVtdID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hhbm5lbHMgPSB0aGlzLl9hdWRpb0J1ZmZlci5udW1iZXJPZkNoYW5uZWxzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBleHRyYWN0IHRoZSBkYXRhIGZyb20gZWFjaCBjaGFubmVsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgY2hhbm5lbElkeCA9IDA7IGNoYW5uZWxJZHggPCBjaGFubmVsczsgY2hhbm5lbElkeCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFQb2ludHNbY2hhbm5lbElkeF0gPSB0aGlzLl9hdWRpb0J1ZmZlci5nZXRDaGFubmVsRGF0YShjaGFubmVsSWR4KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoZGF0YVBvaW50cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xlYW51cCBhZnRlciBvdXJzZWx2ZXNcclxuICAgICAgICAgICAgICAgICAgICBkYXRhUG9pbnRzID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH0sIChlcnJvcikgPT4gb2JzZXJ2ZXIuZXJyb3IoZXJyb3IpKTtcclxuICAgICAgICAgICAgfSwgKGVycm9yKSA9PiBvYnNlcnZlci5lcnJvcihlcnJvcikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFdhdmVmb3JtUG9pbnRzKGNoYW5uZWxzOiBGbG9hdDMyQXJyYXlbXSA9IFtdLCBza2lwOiBudW1iZXIgPSAxMDAwKTogV2F2ZWZvcm1Qb2ludFtdIHtcclxuXHJcbiAgICAgICAgY29uc3Qgd2F2ZWZvcm06IFdhdmVmb3JtUG9pbnRbXSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gY2hhbm5lbHMubGVuZ3RoID4gMCA/IGNoYW5uZWxzWzBdLmxlbmd0aCA6IDA7XHJcblxyXG4gICAgICAgIC8vIGNvbnZlcnQgZWFjaCBjaGFubmVsIGRhdGEgdG8gYSBzZXJpZXMgb2Ygd2F2ZWZvcm0gcG9pbnRzXHJcbiAgICAgICAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgZHVyYXRpb247IGlkeCArPSBza2lwKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBnZXQgYWxsIHRoZSBjaGFubmVsIGRhdGEgZm9yIGEgc3BlY2lmaWMgcG9pbnRcclxuICAgICAgICAgICAgY29uc3QgcG9pbnRzID0gY2hhbm5lbHMubWFwKGNoYW5uZWwgPT4gY2hhbm5lbFtpZHhdKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGZpbmQgdGhlIG1pbmltdW0gcG9pbnQgYW5kIG1heGltdW0gcG9pbnRzIGF0IGVhY2ggcG9zaXRpb24gYWNyb3NzIGFsbCBjaGFubmVsc1xyXG4gICAgICAgICAgICB3YXZlZm9ybS5wdXNoKHtcclxuICAgICAgICAgICAgICAgIG1pbjogcG9pbnRzLnJlZHVjZSgocHJldmlvdXMsIGN1cnJlbnQpID0+IGN1cnJlbnQgPCBwcmV2aW91cyA/IGN1cnJlbnQgOiBwcmV2aW91cyksXHJcbiAgICAgICAgICAgICAgICBtYXg6IHBvaW50cy5yZWR1Y2UoKHByZXZpb3VzLCBjdXJyZW50KSA9PiBjdXJyZW50ID4gcHJldmlvdXMgPyBjdXJyZW50IDogcHJldmlvdXMpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHdhdmVmb3JtO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0QXVkaW9CdWZmZXIoYXJyYXlCdWZmZXI6IEFycmF5QnVmZmVyKTogT2JzZXJ2YWJsZTxBdWRpb0J1ZmZlcj4ge1xyXG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXI6IE9ic2VydmVyPEF1ZGlvQnVmZmVyPikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmdldE9mZmxpbmVBdWRpb0NvbnRleHQoKS5kZWNvZGVBdWRpb0RhdGEoYXJyYXlCdWZmZXIsIChhdWRpb0J1ZmZlcjogQXVkaW9CdWZmZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoYXVkaW9CdWZmZXIpO1xyXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcclxuICAgICAgICAgICAgfSwgKGVycm9yKSA9PiBvYnNlcnZlci5lcnJvcihlcnJvcikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0T2ZmbGluZUF1ZGlvQ29udGV4dCgpOiBPZmZsaW5lQXVkaW9Db250ZXh0IHtcclxuICAgICAgICByZXR1cm4gbmV3IE9mZmxpbmVBdWRpb0NvbnRleHQoMSwgMiwgdGhpcy5fYXVkaW9Db250ZXh0LnNhbXBsZVJhdGUgfHwgNDQxMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlQnVmZmVyU291cmNlKGF1ZGlvQnVmZmVyOiBBdWRpb0J1ZmZlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGlzY29ubmVjdFNvdXJjZSgpO1xyXG5cclxuICAgICAgICB0aGlzLl9hdWRpb0J1ZmZlciA9IGF1ZGlvQnVmZmVyO1xyXG4gICAgICAgIHRoaXMuX2F1ZGlvQnVmZmVyU291cmNlID0gdGhpcy5fYXVkaW9Db250ZXh0LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xyXG4gICAgICAgIHRoaXMuX2F1ZGlvQnVmZmVyU291cmNlLmJ1ZmZlciA9IHRoaXMuX2F1ZGlvQnVmZmVyO1xyXG4gICAgICAgIHRoaXMuX2F1ZGlvQnVmZmVyU291cmNlLmNvbm5lY3QodGhpcy5fYW5hbHlzZXJOb2RlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZVZvbHVtZU5vZGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fZ2Fpbk5vZGUgPSB0aGlzLl9hdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpO1xyXG4gICAgICAgIHRoaXMuX2dhaW5Ob2RlLmNvbm5lY3QodGhpcy5fYXVkaW9Db250ZXh0LmRlc3RpbmF0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZUFuYWx5c2VyTm9kZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9hbmFseXNlck5vZGUgPSB0aGlzLl9hdWRpb0NvbnRleHQuY3JlYXRlQW5hbHlzZXIoKTtcclxuICAgICAgICB0aGlzLl9hbmFseXNlck5vZGUuY29ubmVjdCh0aGlzLl9nYWluTm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkaXNjb25uZWN0U291cmNlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9hdWRpb0J1ZmZlclNvdXJjZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9hdWRpb0J1ZmZlclNvdXJjZS5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdhdmVmb3JtUG9pbnQge1xyXG4gICAgbWluOiBudW1iZXI7XHJcbiAgICBtYXg6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdWRpb01ldGFkYXRhIHtcclxuICAgIGZpbGVuYW1lOiBzdHJpbmc7XHJcbiAgICBleHRlbnNpb246IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBzaXplOiBudW1iZXI7XHJcbn0iXX0=