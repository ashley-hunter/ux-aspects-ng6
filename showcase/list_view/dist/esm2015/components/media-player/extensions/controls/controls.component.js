/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { fromEvent, timer, Subject } from 'rxjs';
import { debounceTime, filter, switchMap, takeUntil } from 'rxjs/operators';
import { MediaPlayerBaseExtensionDirective } from '../base-extension.directive';
export class MediaPlayerControlsExtensionComponent extends MediaPlayerBaseExtensionDirective {
    constructor() {
        super(...arguments);
        this.fullscreen = false;
        this.volumeActive = false;
        this.volumeDragging = false;
        this._volume = 50;
        this._previousVolume = 50;
        this._onDestroy = new Subject();
    }
    /**
     * @return {?}
     */
    get volume() {
        return this._volume;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set volume(value) {
        if (value === 0 && this._volume !== 0) {
            this._previousVolume = this._volume;
        }
        this._volume = Math.min(Math.max(value, 0), 100);
        this.mediaPlayerService.volume = this._volume / 100;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.mediaPlayerService.playEvent.pipe(takeUntil(this._onDestroy)).subscribe(_ => this.playing = true);
        this.mediaPlayerService.pauseEvent.pipe(takeUntil(this._onDestroy)).subscribe(_ => this.playing = false);
        this.mediaPlayerService.quietModeEvent.pipe(takeUntil(this._onDestroy)).subscribe(quietMode => this.quietMode = quietMode);
        this.mediaPlayerService.volumeChangeEvent.pipe(takeUntil(this._onDestroy)).subscribe(volume => this.volume = volume * 100);
        this.mediaPlayerService.initEvent.pipe(debounceTime(1), filter(init => init === true), takeUntil(this._onDestroy)).subscribe(() => this.volume = this.mediaPlayerService.volume * 100);
        this.mediaPlayerService.fullscreenEvent.pipe(takeUntil(this._onDestroy)).subscribe(fullscreen => this.fullscreen = fullscreen);
        const /** @type {?} */ mouseenter$ = fromEvent(this.volumeIcon.nativeElement, 'mouseenter');
        const /** @type {?} */ mouseenterContainer$ = fromEvent(this.volumeContainer.nativeElement, 'mouseenter');
        const /** @type {?} */ mouseleaveContainer$ = fromEvent(this.volumeContainer.nativeElement, 'mouseleave');
        mouseenter$.pipe(takeUntil(this._onDestroy)).subscribe(() => this.volumeActive = true);
        mouseleaveContainer$.pipe(switchMap(() => timer(1500).pipe(takeUntil(mouseenterContainer$))), takeUntil(this._onDestroy)).subscribe(() => this.volumeActive = false);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._onDestroy.next();
        this._onDestroy.complete();
    }
    /**
     * @return {?}
     */
    toggleMute() {
        if (this.volume === 0) {
            this.volume = this._previousVolume;
        }
        else {
            this.volume = 0;
        }
    }
    /**
     * @return {?}
     */
    togglePlay() {
        if (this.playing) {
            this.mediaPlayerService.pause();
        }
        else {
            this.mediaPlayerService.play();
        }
    }
    /**
     * @return {?}
     */
    setFullscreen() {
        this.mediaPlayerService.toggleFullscreen();
    }
    /**
     * @return {?}
     */
    goToStart() {
        this.mediaPlayerService.currentTime = 0;
    }
    /**
     * @return {?}
     */
    goToEnd() {
        this.mediaPlayerService.currentTime = this.mediaPlayerService.duration;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dragStart(event) {
        event.preventDefault();
        this.volumeDragging = true;
        const /** @type {?} */ thumb = /** @type {?} */ (event.target);
        thumb.focus();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dragMove(event) {
        if (!this.volumeDragging) {
            return;
        }
        event.preventDefault();
        const /** @type {?} */ slider = /** @type {?} */ (this.volumeSlider.nativeElement);
        const /** @type {?} */ bounds = slider.getBoundingClientRect();
        const /** @type {?} */ x = Math.min(bounds.width, Math.max(0, event.pageX - bounds.left));
        // convert to a percentage
        this.volume = (x / bounds.width) * 100;
    }
    /**
     * @return {?}
     */
    dragEnd() {
        this.volumeDragging = false;
    }
}
MediaPlayerControlsExtensionComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-media-player-controls',
                template: `<div class="volume-container">

    <div class="volume-slider-container" #volumeContainer [class.active]="volumeActive">
        <div class="volume-slider-icon" #volumeIcon>
            <span class="hpe-icon" [class.hpe-volume-mute]="volume === 0" [class.hpe-volume-low]="volume > 0 && volume <= 70" [class.hpe-volume]="volume > 70" [uxTooltip]="muteTooltip" (click)="toggleMute()"></span>
        </div>
        
        <div class="volume-slider-node">
            <div class="volume-slider" #volumeSlider>
                <div class="volume-track-lower" [style.width.%]="volume"></div>
                <div class="volume-slider-thumb" (mousedown)="dragStart($event)" [style.left.%]="volume" tabindex="0" (keydown.ArrowRight)="volume = volume + 10" (keydown.ArrowLeft)="volume = volume - 10"></div>
            </div>
        </div>
    </div>
</div>

<div class="spacer"></div>

<svg viewBox="0 0 51.5 64" width="14" height="17" class="control-button" (click)="goToStart()">
    <rect x="0" y="0" width="7.5" height="64" />
    <polygon points="51.5,64 51.5,0 7.4,32 " />
</svg>

<svg viewBox="0 0 45 64" width="20" height="29" class="control-button" *ngIf="!playing" (click)="togglePlay()">
    <polygon points="0.4,0 0.4,64 44.6,32" />
</svg>

<svg viewBox="0 0 43 56.9" class="control-button" width="20" height="29" *ngIf="playing" (click)="togglePlay()">
    <rect y="0.1" width="15.7" height="56.9" />
    <rect x="27.3" y="0.1" width="15.7" height="56.9" />
</svg>

<svg viewBox="0 0 51.5 64" width="14" height="17" class="control-button" (click)="goToEnd()">
    <rect x="44.1" y="0" width="7.5" height="64" />
    <polygon points="0,64 0,0 44.1,32 " />
</svg>

<div class="spacer"></div>

<span class="hpe-icon" *ngIf="mediaPlayerService.type !== 'audio'" [class.hpe-expand]="!mediaPlayerService.fullscreen" [class.hpe-contract]="mediaPlayerService.fullscreen"
    (click)="setFullscreen()"></span>

<ng-template #muteTooltip>{{ volume === 0 ? 'Unmute' : 'Mute' }}</ng-template>`,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWVkaWEtcGxheWVyL2V4dGVuc2lvbnMvY29udHJvbHMvY29udHJvbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQXFCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRyxPQUFPLEVBQUUsU0FBUyxFQUFJLEtBQUssRUFBSSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVFLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBbURoRixNQUFNLDRDQUE2QyxTQUFRLGlDQUFpQzs7OzBCQUlsRSxLQUFLOzRCQUNILEtBQUs7OEJBQ0gsS0FBSzt1QkFNTCxFQUFFOytCQUNGLEVBQUU7MEJBQ1AsSUFBSSxPQUFPLEVBQVE7Ozs7O0lBRXhDLElBQUksTUFBTTtRQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0tBQ3ZCOzs7OztJQUVELElBQUksTUFBTSxDQUFDLEtBQWE7UUFFcEIsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3ZDO1FBRUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxr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QUM7UUFFdkIsdUJBQU0sTUFBTSxxQkFBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQStCLENBQUEsQ0FBQztRQUNqRSx1QkFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFFOUMsdUJBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOztRQUd6RSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUM7Ozs7O0lBSTNDLE9BQU87UUFDSCxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQzs7OztZQTlKbkMsU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytFQTBDaUU7Z0JBQzNFLElBQUksRUFBRTtvQkFDRixlQUFlLEVBQUUseUJBQXlCO2lCQUM3QzthQUNKOzs7OzJCQVNJLFNBQVMsU0FBQyxZQUFZOzZCQUN0QixTQUFTLFNBQUMsY0FBYztnQ0FDeEIsU0FBUyxTQUFDLGlCQUFpQjt5QkFnRjNCLFlBQVksU0FBQyxvQkFBb0IsRUFBRSxDQUFDLFFBQVEsQ0FBQzt3QkFpQjdDLFlBQVksU0FBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQgLCAgdGltZXIgLCAgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGZpbHRlciwgc3dpdGNoTWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE1lZGlhUGxheWVyQmFzZUV4dGVuc2lvbkRpcmVjdGl2ZSB9IGZyb20gJy4uL2Jhc2UtZXh0ZW5zaW9uLmRpcmVjdGl2ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndXgtbWVkaWEtcGxheWVyLWNvbnRyb2xzJyxcclxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInZvbHVtZS1jb250YWluZXJcIj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwidm9sdW1lLXNsaWRlci1jb250YWluZXJcIiAjdm9sdW1lQ29udGFpbmVyIFtjbGFzcy5hY3RpdmVdPVwidm9sdW1lQWN0aXZlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInZvbHVtZS1zbGlkZXItaWNvblwiICN2b2x1bWVJY29uPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhwZS1pY29uXCIgW2NsYXNzLmhwZS12b2x1bWUtbXV0ZV09XCJ2b2x1bWUgPT09IDBcIiBbY2xhc3MuaHBlLXZvbHVtZS1sb3ddPVwidm9sdW1lID4gMCAmJiB2b2x1bWUgPD0gNzBcIiBbY2xhc3MuaHBlLXZvbHVtZV09XCJ2b2x1bWUgPiA3MFwiIFt1eFRvb2x0aXBdPVwibXV0ZVRvb2x0aXBcIiAoY2xpY2spPVwidG9nZ2xlTXV0ZSgpXCI+PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ2b2x1bWUtc2xpZGVyLW5vZGVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZvbHVtZS1zbGlkZXJcIiAjdm9sdW1lU2xpZGVyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZvbHVtZS10cmFjay1sb3dlclwiIFtzdHlsZS53aWR0aC4lXT1cInZvbHVtZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZvbHVtZS1zbGlkZXItdGh1bWJcIiAobW91c2Vkb3duKT1cImRyYWdTdGFydCgkZXZlbnQpXCIgW3N0eWxlLmxlZnQuJV09XCJ2b2x1bWVcIiB0YWJpbmRleD1cIjBcIiAoa2V5ZG93bi5BcnJvd1JpZ2h0KT1cInZvbHVtZSA9IHZvbHVtZSArIDEwXCIgKGtleWRvd24uQXJyb3dMZWZ0KT1cInZvbHVtZSA9IHZvbHVtZSAtIDEwXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBjbGFzcz1cInNwYWNlclwiPjwvZGl2PlxyXG5cclxuPHN2ZyB2aWV3Qm94PVwiMCAwIDUxLjUgNjRcIiB3aWR0aD1cIjE0XCIgaGVpZ2h0PVwiMTdcIiBjbGFzcz1cImNvbnRyb2wtYnV0dG9uXCIgKGNsaWNrKT1cImdvVG9TdGFydCgpXCI+XHJcbiAgICA8cmVjdCB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCI3LjVcIiBoZWlnaHQ9XCI2NFwiIC8+XHJcbiAgICA8cG9seWdvbiBwb2ludHM9XCI1MS41LDY0IDUxLjUsMCA3LjQsMzIgXCIgLz5cclxuPC9zdmc+XHJcblxyXG48c3ZnIHZpZXdCb3g9XCIwIDAgNDUgNjRcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjlcIiBjbGFzcz1cImNvbnRyb2wtYnV0dG9uXCIgKm5nSWY9XCIhcGxheWluZ1wiIChjbGljayk9XCJ0b2dnbGVQbGF5KClcIj5cclxuICAgIDxwb2x5Z29uIHBvaW50cz1cIjAuNCwwIDAuNCw2NCA0NC42LDMyXCIgLz5cclxuPC9zdmc+XHJcblxyXG48c3ZnIHZpZXdCb3g9XCIwIDAgNDMgNTYuOVwiIGNsYXNzPVwiY29udHJvbC1idXR0b25cIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjlcIiAqbmdJZj1cInBsYXlpbmdcIiAoY2xpY2spPVwidG9nZ2xlUGxheSgpXCI+XHJcbiAgICA8cmVjdCB5PVwiMC4xXCIgd2lkdGg9XCIxNS43XCIgaGVpZ2h0PVwiNTYuOVwiIC8+XHJcbiAgICA8cmVjdCB4PVwiMjcuM1wiIHk9XCIwLjFcIiB3aWR0aD1cIjE1LjdcIiBoZWlnaHQ9XCI1Ni45XCIgLz5cclxuPC9zdmc+XHJcblxyXG48c3ZnIHZpZXdCb3g9XCIwIDAgNTEuNSA2NFwiIHdpZHRoPVwiMTRcIiBoZWlnaHQ9XCIxN1wiIGNsYXNzPVwiY29udHJvbC1idXR0b25cIiAoY2xpY2spPVwiZ29Ub0VuZCgpXCI+XHJcbiAgICA8cmVjdCB4PVwiNDQuMVwiIHk9XCIwXCIgd2lkdGg9XCI3LjVcIiBoZWlnaHQ9XCI2NFwiIC8+XHJcbiAgICA8cG9seWdvbiBwb2ludHM9XCIwLDY0IDAsMCA0NC4xLDMyIFwiIC8+XHJcbjwvc3ZnPlxyXG5cclxuPGRpdiBjbGFzcz1cInNwYWNlclwiPjwvZGl2PlxyXG5cclxuPHNwYW4gY2xhc3M9XCJocGUtaWNvblwiICpuZ0lmPVwibWVkaWFQbGF5ZXJTZXJ2aWNlLnR5cGUgIT09ICdhdWRpbydcIiBbY2xhc3MuaHBlLWV4cGFuZF09XCIhbWVkaWFQbGF5ZXJTZXJ2aWNlLmZ1bGxzY3JlZW5cIiBbY2xhc3MuaHBlLWNvbnRyYWN0XT1cIm1lZGlhUGxheWVyU2VydmljZS5mdWxsc2NyZWVuXCJcclxuICAgIChjbGljayk9XCJzZXRGdWxsc2NyZWVuKClcIj48L3NwYW4+XHJcblxyXG48bmctdGVtcGxhdGUgI211dGVUb29sdGlwPnt7IHZvbHVtZSA9PT0gMCA/ICdVbm11dGUnIDogJ011dGUnIH19PC9uZy10ZW1wbGF0ZT5gLFxyXG4gICAgaG9zdDoge1xyXG4gICAgICAgICdbY2xhc3MucXVpZXRdJzogJ3F1aWV0TW9kZSB8fCBmdWxsc2NyZWVuJ1xyXG4gICAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWVkaWFQbGF5ZXJDb250cm9sc0V4dGVuc2lvbkNvbXBvbmVudCBleHRlbmRzIE1lZGlhUGxheWVyQmFzZUV4dGVuc2lvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgICBwbGF5aW5nOiBib29sZWFuO1xyXG4gICAgcXVpZXRNb2RlOiBib29sZWFuO1xyXG4gICAgZnVsbHNjcmVlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgdm9sdW1lQWN0aXZlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICB2b2x1bWVEcmFnZ2luZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ3ZvbHVtZUljb24nKSB2b2x1bWVJY29uOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZCgndm9sdW1lU2xpZGVyJykgdm9sdW1lU2xpZGVyOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZCgndm9sdW1lQ29udGFpbmVyJykgdm9sdW1lQ29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG5cclxuICAgIHByaXZhdGUgX3ZvbHVtZTogbnVtYmVyID0gNTA7XHJcbiAgICBwcml2YXRlIF9wcmV2aW91c1ZvbHVtZSA9IDUwO1xyXG4gICAgcHJpdmF0ZSBfb25EZXN0cm95ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgICBnZXQgdm9sdW1lKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZvbHVtZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgdm9sdW1lKHZhbHVlOiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlID09PSAwICYmIHRoaXMuX3ZvbHVtZSAhPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9wcmV2aW91c1ZvbHVtZSA9IHRoaXMuX3ZvbHVtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3ZvbHVtZSA9IE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCAwKSwgMTAwKTtcclxuICAgICAgICB0aGlzLm1lZGlhUGxheWVyU2VydmljZS52b2x1bWUgPSB0aGlzLl92b2x1bWUgLyAxMDA7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tZWRpYVBsYXllclNlcnZpY2UucGxheUV2ZW50LnBpcGUodGFrZVVudGlsKHRoaXMuX29uRGVzdHJveSkpLnN1YnNjcmliZShfID0+IHRoaXMucGxheWluZyA9IHRydWUpO1xyXG4gICAgICAgIHRoaXMubWVkaWFQbGF5ZXJTZXJ2aWNlLnBhdXNlRXZlbnQucGlwZSh0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KSkuc3Vic2NyaWJlKF8gPT4gdGhpcy5wbGF5aW5nID0gZmFsc2UpO1xyXG4gICAgICAgIHRoaXMubWVkaWFQbGF5ZXJTZXJ2aWNlLnF1aWV0TW9kZUV2ZW50LnBpcGUodGFrZVVudGlsKHRoaXMuX29uRGVzdHJveSkpLnN1YnNjcmliZShxdWlldE1vZGUgPT4gdGhpcy5xdWlldE1vZGUgPSBxdWlldE1vZGUpO1xyXG4gICAgICAgIHRoaXMubWVkaWFQbGF5ZXJTZXJ2aWNlLnZvbHVtZUNoYW5nZUV2ZW50LnBpcGUodGFrZVVudGlsKHRoaXMuX29uRGVzdHJveSkpLnN1YnNjcmliZSh2b2x1bWUgPT4gdGhpcy52b2x1bWUgPSB2b2x1bWUgKiAxMDApO1xyXG4gICAgICAgIHRoaXMubWVkaWFQbGF5ZXJTZXJ2aWNlLmluaXRFdmVudC5waXBlKGRlYm91bmNlVGltZSgxKSwgZmlsdGVyKGluaXQgPT4gaW5pdCA9PT0gdHJ1ZSksIHRha2VVbnRpbCh0aGlzLl9vbkRlc3Ryb3kpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy52b2x1bWUgPSB0aGlzLm1lZGlhUGxheWVyU2VydmljZS52b2x1bWUgKiAxMDApO1xyXG4gICAgICAgIHRoaXMubWVkaWFQbGF5ZXJTZXJ2aWNlLmZ1bGxzY3JlZW5FdmVudC5waXBlKHRha2VVbnRpbCh0aGlzLl9vbkRlc3Ryb3kpKS5zdWJzY3JpYmUoZnVsbHNjcmVlbiA9PiB0aGlzLmZ1bGxzY3JlZW4gPSBmdWxsc2NyZWVuKTtcclxuXHJcbiAgICAgICAgY29uc3QgbW91c2VlbnRlciQgPSBmcm9tRXZlbnQodGhpcy52b2x1bWVJY29uLm5hdGl2ZUVsZW1lbnQsICdtb3VzZWVudGVyJyk7XHJcbiAgICAgICAgY29uc3QgbW91c2VlbnRlckNvbnRhaW5lciQgPSBmcm9tRXZlbnQodGhpcy52b2x1bWVDb250YWluZXIubmF0aXZlRWxlbWVudCwgJ21vdXNlZW50ZXInKTtcclxuICAgICAgICBjb25zdCBtb3VzZWxlYXZlQ29udGFpbmVyJCA9IGZyb21FdmVudCh0aGlzLnZvbHVtZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCAnbW91c2VsZWF2ZScpO1xyXG5cclxuICAgICAgICBtb3VzZWVudGVyJC5waXBlKHRha2VVbnRpbCh0aGlzLl9vbkRlc3Ryb3kpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy52b2x1bWVBY3RpdmUgPSB0cnVlKTtcclxuICAgICAgICBtb3VzZWxlYXZlQ29udGFpbmVyJC5waXBlKFxyXG4gICAgICAgICAgICBzd2l0Y2hNYXAoKCkgPT4gdGltZXIoMTUwMCkucGlwZSh0YWtlVW50aWwobW91c2VlbnRlckNvbnRhaW5lciQpKSksXHJcbiAgICAgICAgICAgIHRha2VVbnRpbCh0aGlzLl9vbkRlc3Ryb3kpXHJcbiAgICAgICAgKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy52b2x1bWVBY3RpdmUgPSBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fb25EZXN0cm95Lm5leHQoKTtcclxuICAgICAgICB0aGlzLl9vbkRlc3Ryb3kuY29tcGxldGUoKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVNdXRlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnZvbHVtZSA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnZvbHVtZSA9IHRoaXMuX3ByZXZpb3VzVm9sdW1lO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudm9sdW1lID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlUGxheSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5wbGF5aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVkaWFQbGF5ZXJTZXJ2aWNlLnBhdXNlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tZWRpYVBsYXllclNlcnZpY2UucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRGdWxsc2NyZWVuKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubWVkaWFQbGF5ZXJTZXJ2aWNlLnRvZ2dsZUZ1bGxzY3JlZW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBnb1RvU3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tZWRpYVBsYXllclNlcnZpY2UuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGdvVG9FbmQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tZWRpYVBsYXllclNlcnZpY2UuY3VycmVudFRpbWUgPSB0aGlzLm1lZGlhUGxheWVyU2VydmljZS5kdXJhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBkcmFnU3RhcnQoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMudm9sdW1lRHJhZ2dpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICBjb25zdCB0aHVtYiA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICB0aHVtYi5mb2N1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50Om1vdXNlbW92ZScsIFsnJGV2ZW50J10pXHJcbiAgICBkcmFnTW92ZShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy52b2x1bWVEcmFnZ2luZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBjb25zdCBzbGlkZXIgPSB0aGlzLnZvbHVtZVNsaWRlci5uYXRpdmVFbGVtZW50IGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgIGNvbnN0IGJvdW5kcyA9IHNsaWRlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICAgICAgY29uc3QgeCA9IE1hdGgubWluKGJvdW5kcy53aWR0aCwgTWF0aC5tYXgoMCwgZXZlbnQucGFnZVggLSBib3VuZHMubGVmdCkpO1xyXG5cclxuICAgICAgICAvLyBjb252ZXJ0IHRvIGEgcGVyY2VudGFnZVxyXG4gICAgICAgIHRoaXMudm9sdW1lID0gKHggLyBib3VuZHMud2lkdGgpICogMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50Om1vdXNldXAnKVxyXG4gICAgZHJhZ0VuZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnZvbHVtZURyYWdnaW5nID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG59Il19