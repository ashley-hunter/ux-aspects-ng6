/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Http, ResponseContentType } from '@angular/http';
import { Observable, of } from 'rxjs';
export class AudioService {
    /**
     * @param {?} _http
     */
    constructor(_http) {
        this._http = _http;
    }
    /**
     * @param {?} mediaElement
     * @return {?}
     */
    getAudioFileMetadata(mediaElement) {
        return Observable.create((observer) => {
            this._http.request(mediaElement.src, { responseType: ResponseContentType.Blob }).subscribe(response => {
                const /** @type {?} */ filename = mediaElement.src.substring(mediaElement.src.lastIndexOf('/') + 1);
                const /** @type {?} */ extension = mediaElement.src.substring(mediaElement.src.lastIndexOf('.') + 1).toLowerCase();
                const /** @type {?} */ blob = response.blob();
                let /** @type {?} */ description;
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
    }
    /**
     * @param {?} url
     * @return {?}
     */
    getWaveformFromUrl(url) {
        // if audio context is not support return a stream of empty data
        if (!(/** @type {?} */ (window)).AudioContext) {
            return of([new Float32Array(0)]);
        }
        this._audioContext = new AudioContext();
        this.createVolumeNode();
        this.createAnalyserNode();
        return Observable.create((observer) => {
            // load the media from the URL provided
            this._http.request(url, { responseType: ResponseContentType.ArrayBuffer }).subscribe(response => {
                this.getAudioBuffer(response.arrayBuffer()).subscribe(audioBuffer => {
                    // create the buffer source
                    this.createBufferSource(audioBuffer);
                    let /** @type {?} */ dataPoints = [];
                    const /** @type {?} */ channels = this._audioBuffer.numberOfChannels;
                    // extract the data from each channel
                    for (let /** @type {?} */ channelIdx = 0; channelIdx < channels; channelIdx++) {
                        dataPoints[channelIdx] = this._audioBuffer.getChannelData(channelIdx);
                    }
                    observer.next(dataPoints);
                    observer.complete();
                    // cleanup after ourselves
                    dataPoints = null;
                }, (error) => observer.error(error));
            }, (error) => observer.error(error));
        });
    }
    /**
     * @param {?=} channels
     * @param {?=} skip
     * @return {?}
     */
    getWaveformPoints(channels = [], skip = 1000) {
        const /** @type {?} */ waveform = [];
        const /** @type {?} */ duration = channels.length > 0 ? channels[0].length : 0;
        // convert each channel data to a series of waveform points
        for (let /** @type {?} */ idx = 0; idx < duration; idx += skip) {
            // get all the channel data for a specific point
            const /** @type {?} */ points = channels.map(channel => channel[idx]);
            // find the minimum point and maximum points at each position across all channels
            waveform.push({
                min: points.reduce((previous, current) => current < previous ? current : previous),
                max: points.reduce((previous, current) => current > previous ? current : previous)
            });
        }
        return waveform;
    }
    /**
     * @param {?} arrayBuffer
     * @return {?}
     */
    getAudioBuffer(arrayBuffer) {
        return Observable.create((observer) => {
            this.getOfflineAudioContext().decodeAudioData(arrayBuffer, (audioBuffer) => {
                observer.next(audioBuffer);
                observer.complete();
            }, (error) => observer.error(error));
        });
    }
    /**
     * @return {?}
     */
    getOfflineAudioContext() {
        return new OfflineAudioContext(1, 2, this._audioContext.sampleRate || 44100);
    }
    /**
     * @param {?} audioBuffer
     * @return {?}
     */
    createBufferSource(audioBuffer) {
        this.disconnectSource();
        this._audioBuffer = audioBuffer;
        this._audioBufferSource = this._audioContext.createBufferSource();
        this._audioBufferSource.buffer = this._audioBuffer;
        this._audioBufferSource.connect(this._analyserNode);
    }
    /**
     * @return {?}
     */
    createVolumeNode() {
        this._gainNode = this._audioContext.createGain();
        this._gainNode.connect(this._audioContext.destination);
    }
    /**
     * @return {?}
     */
    createAnalyserNode() {
        this._analyserNode = this._audioContext.createAnalyser();
        this._analyserNode.connect(this._gainNode);
    }
    /**
     * @return {?}
     */
    disconnectSource() {
        if (this._audioBufferSource) {
            this._audioBufferSource.disconnect();
        }
    }
}
AudioService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
AudioService.ctorParameters = () => [
    { type: Http, },
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVkaW8uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9hdWRpby9hdWRpby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLFVBQVUsRUFBSSxFQUFFLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFHcEQsTUFBTTs7OztJQVFGLFlBQW9CLEtBQVc7UUFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO0tBQUs7Ozs7O0lBRXBDLG9CQUFvQixDQUFDLFlBQThCO1FBQy9DLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBaUMsRUFBRSxFQUFFO1lBQzNELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsRUFBRSxZQUFZLEVBQUUsbUJBQW1CLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBRWxHLHVCQUFNLFFBQVEsR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDbkYsdUJBQU0sU0FBUyxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNsRyx1QkFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUM3QixxQkFBSSxXQUFXLENBQUM7Z0JBRWhCLE1BQU0sQ0FB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Ozs7WUExSlIsVUFBVTs7OztZQUhGLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlQ29udGVudFR5cGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSAsICBvZiAsICBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXVkaW9TZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIF9hdWRpb0J1ZmZlcjogQXVkaW9CdWZmZXI7XHJcbiAgICBwcml2YXRlIF9hdWRpb0J1ZmZlclNvdXJjZTogQXVkaW9CdWZmZXJTb3VyY2VOb2RlO1xyXG4gICAgcHJpdmF0ZSBfYXVkaW9Db250ZXh0OiBBdWRpb0NvbnRleHQ7XHJcbiAgICBwcml2YXRlIF9nYWluTm9kZTogR2Fpbk5vZGU7XHJcbiAgICBwcml2YXRlIF9hbmFseXNlck5vZGU6IEFuYWx5c2VyTm9kZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKSB7IH1cclxuXHJcbiAgICBnZXRBdWRpb0ZpbGVNZXRhZGF0YShtZWRpYUVsZW1lbnQ6IEhUTUxNZWRpYUVsZW1lbnQpOiBPYnNlcnZhYmxlPEF1ZGlvTWV0YWRhdGE+IHtcclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyOiBPYnNlcnZlcjxBdWRpb01ldGFkYXRhPikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9odHRwLnJlcXVlc3QobWVkaWFFbGVtZW50LnNyYywgeyByZXNwb25zZVR5cGU6IFJlc3BvbnNlQ29udGVudFR5cGUuQmxvYiB9KS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVuYW1lID0gbWVkaWFFbGVtZW50LnNyYy5zdWJzdHJpbmcobWVkaWFFbGVtZW50LnNyYy5sYXN0SW5kZXhPZignLycpICsgMSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBleHRlbnNpb24gPSBtZWRpYUVsZW1lbnQuc3JjLnN1YnN0cmluZyhtZWRpYUVsZW1lbnQuc3JjLmxhc3RJbmRleE9mKCcuJykgKyAxKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmxvYiA9IHJlc3BvbnNlLmJsb2IoKTtcclxuICAgICAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbjtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGV4dGVuc2lvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ21wMyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uID0gJ01QRUcgYXVkaW8gbGF5ZXIgMyBmaWxlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3dtYSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uID0gJ1dpbmRvd3MgbWVkaWEgYXVkaW8gZmlsZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlICd3YXYnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbiA9ICdXQVZFIGF1ZGlvIGZpbGUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnb2dnJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24gPSAnT2dnIFZvcmJpcyBmaWxlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2FhYyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uID0gJ0FkdmFuY2VkIGF1ZGlvIGNvZGluZyBmaWxlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ21pZGknOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbiA9ICdNdXNpY2FsIGluc3RydW1lbnQgZGlnaXRhbCBpbnRlcmZhY2UgZmlsZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbiA9ICdBdWRpbyBmaWxlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsZW5hbWU6IGZpbGVuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGV4dGVuc2lvbjogZXh0ZW5zaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBzaXplOiBibG9iLnNpemVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRXYXZlZm9ybUZyb21VcmwodXJsOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEZsb2F0MzJBcnJheVtdPiB7XHJcblxyXG4gICAgICAgIC8vIGlmIGF1ZGlvIGNvbnRleHQgaXMgbm90IHN1cHBvcnQgcmV0dXJuIGEgc3RyZWFtIG9mIGVtcHR5IGRhdGFcclxuICAgICAgICBpZiAoISg8YW55PndpbmRvdykuQXVkaW9Db250ZXh0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvZjxGbG9hdDMyQXJyYXlbXT4oW25ldyBGbG9hdDMyQXJyYXkoMCldKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2F1ZGlvQ29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVZvbHVtZU5vZGUoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUFuYWx5c2VyTm9kZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyOiBPYnNlcnZlcjxGbG9hdDMyQXJyYXlbXT4pID0+IHtcclxuXHJcbiAgICAgICAgICAgIC8vIGxvYWQgdGhlIG1lZGlhIGZyb20gdGhlIFVSTCBwcm92aWRlZFxyXG4gICAgICAgICAgICB0aGlzLl9odHRwLnJlcXVlc3QodXJsLCB7IHJlc3BvbnNlVHlwZTogUmVzcG9uc2VDb250ZW50VHlwZS5BcnJheUJ1ZmZlciB9KS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRBdWRpb0J1ZmZlcihyZXNwb25zZS5hcnJheUJ1ZmZlcigpKS5zdWJzY3JpYmUoYXVkaW9CdWZmZXIgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBjcmVhdGUgdGhlIGJ1ZmZlciBzb3VyY2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUJ1ZmZlclNvdXJjZShhdWRpb0J1ZmZlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhUG9pbnRzOiBGbG9hdDMyQXJyYXlbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoYW5uZWxzID0gdGhpcy5fYXVkaW9CdWZmZXIubnVtYmVyT2ZDaGFubmVscztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZXh0cmFjdCB0aGUgZGF0YSBmcm9tIGVhY2ggY2hhbm5lbFxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGNoYW5uZWxJZHggPSAwOyBjaGFubmVsSWR4IDwgY2hhbm5lbHM7IGNoYW5uZWxJZHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhUG9pbnRzW2NoYW5uZWxJZHhdID0gdGhpcy5fYXVkaW9CdWZmZXIuZ2V0Q2hhbm5lbERhdGEoY2hhbm5lbElkeCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KGRhdGFQb2ludHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNsZWFudXAgYWZ0ZXIgb3Vyc2VsdmVzXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVBvaW50cyA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9LCAoZXJyb3IpID0+IG9ic2VydmVyLmVycm9yKGVycm9yKSk7XHJcbiAgICAgICAgICAgIH0sIChlcnJvcikgPT4gb2JzZXJ2ZXIuZXJyb3IoZXJyb3IpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRXYXZlZm9ybVBvaW50cyhjaGFubmVsczogRmxvYXQzMkFycmF5W10gPSBbXSwgc2tpcDogbnVtYmVyID0gMTAwMCk6IFdhdmVmb3JtUG9pbnRbXSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHdhdmVmb3JtOiBXYXZlZm9ybVBvaW50W10gPSBbXTtcclxuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IGNoYW5uZWxzLmxlbmd0aCA+IDAgPyBjaGFubmVsc1swXS5sZW5ndGggOiAwO1xyXG5cclxuICAgICAgICAvLyBjb252ZXJ0IGVhY2ggY2hhbm5lbCBkYXRhIHRvIGEgc2VyaWVzIG9mIHdhdmVmb3JtIHBvaW50c1xyXG4gICAgICAgIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IGR1cmF0aW9uOyBpZHggKz0gc2tpcCkge1xyXG5cclxuICAgICAgICAgICAgLy8gZ2V0IGFsbCB0aGUgY2hhbm5lbCBkYXRhIGZvciBhIHNwZWNpZmljIHBvaW50XHJcbiAgICAgICAgICAgIGNvbnN0IHBvaW50cyA9IGNoYW5uZWxzLm1hcChjaGFubmVsID0+IGNoYW5uZWxbaWR4XSk7XHJcblxyXG4gICAgICAgICAgICAvLyBmaW5kIHRoZSBtaW5pbXVtIHBvaW50IGFuZCBtYXhpbXVtIHBvaW50cyBhdCBlYWNoIHBvc2l0aW9uIGFjcm9zcyBhbGwgY2hhbm5lbHNcclxuICAgICAgICAgICAgd2F2ZWZvcm0ucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBtaW46IHBvaW50cy5yZWR1Y2UoKHByZXZpb3VzLCBjdXJyZW50KSA9PiBjdXJyZW50IDwgcHJldmlvdXMgPyBjdXJyZW50IDogcHJldmlvdXMpLFxyXG4gICAgICAgICAgICAgICAgbWF4OiBwb2ludHMucmVkdWNlKChwcmV2aW91cywgY3VycmVudCkgPT4gY3VycmVudCA+IHByZXZpb3VzID8gY3VycmVudCA6IHByZXZpb3VzKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB3YXZlZm9ybTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEF1ZGlvQnVmZmVyKGFycmF5QnVmZmVyOiBBcnJheUJ1ZmZlcik6IE9ic2VydmFibGU8QXVkaW9CdWZmZXI+IHtcclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyOiBPYnNlcnZlcjxBdWRpb0J1ZmZlcj4pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5nZXRPZmZsaW5lQXVkaW9Db250ZXh0KCkuZGVjb2RlQXVkaW9EYXRhKGFycmF5QnVmZmVyLCAoYXVkaW9CdWZmZXI6IEF1ZGlvQnVmZmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KGF1ZGlvQnVmZmVyKTtcclxuICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgIH0sIChlcnJvcikgPT4gb2JzZXJ2ZXIuZXJyb3IoZXJyb3IpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldE9mZmxpbmVBdWRpb0NvbnRleHQoKTogT2ZmbGluZUF1ZGlvQ29udGV4dCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBPZmZsaW5lQXVkaW9Db250ZXh0KDEsIDIsIHRoaXMuX2F1ZGlvQ29udGV4dC5zYW1wbGVSYXRlIHx8IDQ0MTAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZUJ1ZmZlclNvdXJjZShhdWRpb0J1ZmZlcjogQXVkaW9CdWZmZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRpc2Nvbm5lY3RTb3VyY2UoKTtcclxuXHJcbiAgICAgICAgdGhpcy5fYXVkaW9CdWZmZXIgPSBhdWRpb0J1ZmZlcjtcclxuICAgICAgICB0aGlzLl9hdWRpb0J1ZmZlclNvdXJjZSA9IHRoaXMuX2F1ZGlvQ29udGV4dC5jcmVhdGVCdWZmZXJTb3VyY2UoKTtcclxuICAgICAgICB0aGlzLl9hdWRpb0J1ZmZlclNvdXJjZS5idWZmZXIgPSB0aGlzLl9hdWRpb0J1ZmZlcjtcclxuICAgICAgICB0aGlzLl9hdWRpb0J1ZmZlclNvdXJjZS5jb25uZWN0KHRoaXMuX2FuYWx5c2VyTm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVWb2x1bWVOb2RlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2dhaW5Ob2RlID0gdGhpcy5fYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKTtcclxuICAgICAgICB0aGlzLl9nYWluTm9kZS5jb25uZWN0KHRoaXMuX2F1ZGlvQ29udGV4dC5kZXN0aW5hdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVBbmFseXNlck5vZGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fYW5hbHlzZXJOb2RlID0gdGhpcy5fYXVkaW9Db250ZXh0LmNyZWF0ZUFuYWx5c2VyKCk7XHJcbiAgICAgICAgdGhpcy5fYW5hbHlzZXJOb2RlLmNvbm5lY3QodGhpcy5fZ2Fpbk5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZGlzY29ubmVjdFNvdXJjZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5fYXVkaW9CdWZmZXJTb3VyY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5fYXVkaW9CdWZmZXJTb3VyY2UuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXYXZlZm9ybVBvaW50IHtcclxuICAgIG1pbjogbnVtYmVyO1xyXG4gICAgbWF4OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXVkaW9NZXRhZGF0YSB7XHJcbiAgICBmaWxlbmFtZTogc3RyaW5nO1xyXG4gICAgZXh0ZW5zaW9uOiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgc2l6ZTogbnVtYmVyO1xyXG59Il19