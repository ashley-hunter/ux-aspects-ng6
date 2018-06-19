/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { MediaPlayerBaseExtensionDirective } from '../base-extension.directive';
export class MediaPlayerTimelineExtensionComponent extends MediaPlayerBaseExtensionDirective {
    constructor() {
        super(...arguments);
        this.current = 0;
        this.position = 0;
        this.duration = 0;
        this.buffered = [];
        this.mouseDown = false;
        this.quietMode = false;
        this.fullscreen = false;
        this.scrub = { visible: false, position: 0, time: 0 };
        this._onDestroy = new Subject();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // watch for changes to the current time
        this.mediaPlayerService.durationChangeEvent.pipe(takeUntil(this._onDestroy)).subscribe(duration => this.duration = duration);
        this.mediaPlayerService.quietModeEvent.pipe(takeUntil(this._onDestroy)).subscribe(quietMode => this.quietMode = quietMode);
        this.mediaPlayerService.fullscreenEvent.pipe(takeUntil(this._onDestroy)).subscribe(fullscreen => {
            this.fullscreen = fullscreen;
            this.scrub.position = 0;
        });
        this.mediaPlayerService.timeUpdateEvent.pipe(takeUntil(this._onDestroy)).subscribe(current => {
            this.current = current;
            this.position = (this.current / this.duration) * 100;
        });
        this.mediaPlayerService.progressEvent.pipe(takeUntil(this._onDestroy)).subscribe((buffered) => {
            this.buffered = [];
            for (let /** @type {?} */ idx = 0; idx < buffered.length; idx++) {
                this.buffered.push({ start: (buffered.start(idx) / this.duration) * 100, end: (buffered.end(idx) / this.duration) * 100 });
            }
        });
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        const /** @type {?} */ mousedown$ = fromEvent(this.thumb.nativeElement, 'mousedown');
        const /** @type {?} */ mousemove$ = fromEvent(document, 'mousemove');
        const /** @type {?} */ mouseup$ = fromEvent(document, 'mouseup');
        mousedown$.pipe(switchMap(() => mousemove$.pipe(takeUntil(mouseup$))), takeUntil(this._onDestroy)).subscribe(() => this.scrub.visible = false);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._onDestroy.next();
        this._onDestroy.complete();
    }
    /**
     * @param {?=} event
     * @return {?}
     */
    updateScrub(event) {
        const /** @type {?} */ target = /** @type {?} */ (event.target);
        if (target.classList.contains('media-progress-bar-thumb')) {
            return;
        }
        const /** @type {?} */ timeline = /** @type {?} */ (this.timelineRef.nativeElement);
        const /** @type {?} */ bounds = timeline.getBoundingClientRect();
        this.scrub.position = event.offsetX;
        this.scrub.time = (event.offsetX / bounds.width) * this.mediaPlayerService.duration;
        if (this.mouseDown) {
            this.mediaPlayerService.pause();
            this.mediaPlayerService.currentTime = this.scrub.time;
        }
    }
}
MediaPlayerTimelineExtensionComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-media-player-timeline',
                template: `<p class="current-time">{{ current | duration }}</p>

<div #timeline class="timeline-bar" (mouseenter)="scrub.visible = true; pop.show()" (mouseleave)="scrub.visible = false; pop.hide()"
    (mousemove)="updateScrub($event)" (mouseup)="updateScrub($event)" (mousedown)="mouseDown = true; $event.preventDefault()">

    <div class="buffered-bar" *ngFor="let buffer of buffered" [style.left.%]="buffer.start" [style.width.%]="buffer.end - buffer.start"></div>

    <div class="media-progress-bar" [style.width.%]="position">
        <div #progressThumb class="media-progress-bar-thumb" (mouseenter)="scrub.visible = false; pop.hide(); $event.stopPropagation()"
            (mouseleave)="scrub.visible = true; pop.show(); $event.stopPropagation()"></div>
    </div>

    <div class="scrub-handle"
         [class.scrub-handle-hidden]="!scrub.visible"
         [style.left.px]="scrub.position"
         [uxTooltip]="popTemplate"
         placement="top"
         [showTriggers]="[]"
         [hideTriggers]="[]"
         #pop="ux-tooltip"
         [tooltipDelay]="100"
         [tooltipDisabled]="duration === 0"></div>
</div>

<p class="duration-time">{{ duration | duration }}</p>

<ng-template #popTemplate>
    <span>{{ scrub.time | duration }}</span>
</ng-template>`,
                host: {
                    '(document:mouseup)': 'mouseDown = false',
                    '[class.quiet]': 'quietMode || fullscreen'
                }
            },] },
];
/** @nocollapse */
MediaPlayerTimelineExtensionComponent.propDecorators = {
    "thumb": [{ type: ViewChild, args: ['progressThumb',] },],
    "timelineRef": [{ type: ViewChild, args: ['timeline',] },],
};
function MediaPlayerTimelineExtensionComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MediaPlayerTimelineExtensionComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MediaPlayerTimelineExtensionComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    MediaPlayerTimelineExtensionComponent.propDecorators;
    /** @type {?} */
    MediaPlayerTimelineExtensionComponent.prototype.thumb;
    /** @type {?} */
    MediaPlayerTimelineExtensionComponent.prototype.timelineRef;
    /** @type {?} */
    MediaPlayerTimelineExtensionComponent.prototype.current;
    /** @type {?} */
    MediaPlayerTimelineExtensionComponent.prototype.position;
    /** @type {?} */
    MediaPlayerTimelineExtensionComponent.prototype.duration;
    /** @type {?} */
    MediaPlayerTimelineExtensionComponent.prototype.buffered;
    /** @type {?} */
    MediaPlayerTimelineExtensionComponent.prototype.mouseDown;
    /** @type {?} */
    MediaPlayerTimelineExtensionComponent.prototype.quietMode;
    /** @type {?} */
    MediaPlayerTimelineExtensionComponent.prototype.fullscreen;
    /** @type {?} */
    MediaPlayerTimelineExtensionComponent.prototype.scrub;
    /** @type {?} */
    MediaPlayerTimelineExtensionComponent.prototype._onDestroy;
}
/**
 * @record
 */
export function MediaPlayerBuffered() { }
function MediaPlayerBuffered_tsickle_Closure_declarations() {
    /** @type {?} */
    MediaPlayerBuffered.prototype.start;
    /** @type {?} */
    MediaPlayerBuffered.prototype.end;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWVkaWEtcGxheWVyL2V4dGVuc2lvbnMvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQXFCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRyxPQUFPLEVBQUUsU0FBUyxFQUFJLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM1QyxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBdUNoRixNQUFNLDRDQUE2QyxTQUFRLGlDQUFpQzs7O3VCQUt0RSxDQUFDO3dCQUNBLENBQUM7d0JBQ0QsQ0FBQzt3QkFDYyxFQUFFO3lCQUNmLEtBQUs7eUJBQ0wsS0FBSzswQkFDSixLQUFLO3FCQUNuQixFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFOzBCQUUzQixJQUFJLE9BQU8sRUFBUTs7Ozs7SUFFeEMsUUFBUTs7UUFHSixJQUFJLENBQUMsa0JBQWtCLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDO1FBQzdILElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJ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O1FBRWhELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDO1FBRXBGLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNoQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1NBQ3pEO0tBQ0o7OztZQTlHSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBNEJDO2dCQUNYLElBQUksRUFBRTtvQkFDRixvQkFBb0IsRUFBRSxtQkFBbUI7b0JBQ3pDLGVBQWUsRUFBRSx5QkFBeUI7aUJBQzdDO2FBQ0o7Ozs7c0JBR0ksU0FBUyxTQUFDLGVBQWU7NEJBQ3pCLFNBQVMsU0FBQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkRlc3Ryb3ksIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGZyb21FdmVudCAsICBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHN3aXRjaE1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBNZWRpYVBsYXllckJhc2VFeHRlbnNpb25EaXJlY3RpdmUgfSBmcm9tICcuLi9iYXNlLWV4dGVuc2lvbi5kaXJlY3RpdmUnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd1eC1tZWRpYS1wbGF5ZXItdGltZWxpbmUnLFxyXG4gICAgdGVtcGxhdGU6IGA8cCBjbGFzcz1cImN1cnJlbnQtdGltZVwiPnt7IGN1cnJlbnQgfCBkdXJhdGlvbiB9fTwvcD5cclxuXHJcbjxkaXYgI3RpbWVsaW5lIGNsYXNzPVwidGltZWxpbmUtYmFyXCIgKG1vdXNlZW50ZXIpPVwic2NydWIudmlzaWJsZSA9IHRydWU7IHBvcC5zaG93KClcIiAobW91c2VsZWF2ZSk9XCJzY3J1Yi52aXNpYmxlID0gZmFsc2U7IHBvcC5oaWRlKClcIlxyXG4gICAgKG1vdXNlbW92ZSk9XCJ1cGRhdGVTY3J1YigkZXZlbnQpXCIgKG1vdXNldXApPVwidXBkYXRlU2NydWIoJGV2ZW50KVwiIChtb3VzZWRvd24pPVwibW91c2VEb3duID0gdHJ1ZTsgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiYnVmZmVyZWQtYmFyXCIgKm5nRm9yPVwibGV0IGJ1ZmZlciBvZiBidWZmZXJlZFwiIFtzdHlsZS5sZWZ0LiVdPVwiYnVmZmVyLnN0YXJ0XCIgW3N0eWxlLndpZHRoLiVdPVwiYnVmZmVyLmVuZCAtIGJ1ZmZlci5zdGFydFwiPjwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1wcm9ncmVzcy1iYXJcIiBbc3R5bGUud2lkdGguJV09XCJwb3NpdGlvblwiPlxyXG4gICAgICAgIDxkaXYgI3Byb2dyZXNzVGh1bWIgY2xhc3M9XCJtZWRpYS1wcm9ncmVzcy1iYXItdGh1bWJcIiAobW91c2VlbnRlcik9XCJzY3J1Yi52aXNpYmxlID0gZmFsc2U7IHBvcC5oaWRlKCk7ICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiXHJcbiAgICAgICAgICAgIChtb3VzZWxlYXZlKT1cInNjcnViLnZpc2libGUgPSB0cnVlOyBwb3Auc2hvdygpOyAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJzY3J1Yi1oYW5kbGVcIlxyXG4gICAgICAgICBbY2xhc3Muc2NydWItaGFuZGxlLWhpZGRlbl09XCIhc2NydWIudmlzaWJsZVwiXHJcbiAgICAgICAgIFtzdHlsZS5sZWZ0LnB4XT1cInNjcnViLnBvc2l0aW9uXCJcclxuICAgICAgICAgW3V4VG9vbHRpcF09XCJwb3BUZW1wbGF0ZVwiXHJcbiAgICAgICAgIHBsYWNlbWVudD1cInRvcFwiXHJcbiAgICAgICAgIFtzaG93VHJpZ2dlcnNdPVwiW11cIlxyXG4gICAgICAgICBbaGlkZVRyaWdnZXJzXT1cIltdXCJcclxuICAgICAgICAgI3BvcD1cInV4LXRvb2x0aXBcIlxyXG4gICAgICAgICBbdG9vbHRpcERlbGF5XT1cIjEwMFwiXHJcbiAgICAgICAgIFt0b29sdGlwRGlzYWJsZWRdPVwiZHVyYXRpb24gPT09IDBcIj48L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48cCBjbGFzcz1cImR1cmF0aW9uLXRpbWVcIj57eyBkdXJhdGlvbiB8IGR1cmF0aW9uIH19PC9wPlxyXG5cclxuPG5nLXRlbXBsYXRlICNwb3BUZW1wbGF0ZT5cclxuICAgIDxzcGFuPnt7IHNjcnViLnRpbWUgfCBkdXJhdGlvbiB9fTwvc3Bhbj5cclxuPC9uZy10ZW1wbGF0ZT5gLFxyXG4gICAgaG9zdDoge1xyXG4gICAgICAgICcoZG9jdW1lbnQ6bW91c2V1cCknOiAnbW91c2VEb3duID0gZmFsc2UnLFxyXG4gICAgICAgICdbY2xhc3MucXVpZXRdJzogJ3F1aWV0TW9kZSB8fCBmdWxsc2NyZWVuJ1xyXG4gICAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWVkaWFQbGF5ZXJUaW1lbGluZUV4dGVuc2lvbkNvbXBvbmVudCBleHRlbmRzIE1lZGlhUGxheWVyQmFzZUV4dGVuc2lvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgICBAVmlld0NoaWxkKCdwcm9ncmVzc1RodW1iJykgdGh1bWI6IEVsZW1lbnRSZWY7XHJcbiAgICBAVmlld0NoaWxkKCd0aW1lbGluZScpIHRpbWVsaW5lUmVmOiBFbGVtZW50UmVmO1xyXG5cclxuICAgIGN1cnJlbnQ6IG51bWJlciA9IDA7XHJcbiAgICBwb3NpdGlvbjogbnVtYmVyID0gMDtcclxuICAgIGR1cmF0aW9uOiBudW1iZXIgPSAwO1xyXG4gICAgYnVmZmVyZWQ6IE1lZGlhUGxheWVyQnVmZmVyZWRbXSA9IFtdO1xyXG4gICAgbW91c2VEb3duOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBxdWlldE1vZGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGZ1bGxzY3JlZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHNjcnViID0geyB2aXNpYmxlOiBmYWxzZSwgcG9zaXRpb246IDAsIHRpbWU6IDAgfTtcclxuXHJcbiAgICBwcml2YXRlIF9vbkRlc3Ryb3kgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgICAgICAvLyB3YXRjaCBmb3IgY2hhbmdlcyB0byB0aGUgY3VycmVudCB0aW1lXHJcbiAgICAgICAgdGhpcy5tZWRpYVBsYXllclNlcnZpY2UuZHVyYXRpb25DaGFuZ2VFdmVudC5waXBlKHRha2VVbnRpbCh0aGlzLl9vbkRlc3Ryb3kpKS5zdWJzY3JpYmUoZHVyYXRpb24gPT4gdGhpcy5kdXJhdGlvbiA9IGR1cmF0aW9uKTtcclxuICAgICAgICB0aGlzLm1lZGlhUGxheWVyU2VydmljZS5xdWlldE1vZGVFdmVudC5waXBlKHRha2VVbnRpbCh0aGlzLl9vbkRlc3Ryb3kpKS5zdWJzY3JpYmUocXVpZXRNb2RlID0+IHRoaXMucXVpZXRNb2RlID0gcXVpZXRNb2RlKTtcclxuICAgICAgICB0aGlzLm1lZGlhUGxheWVyU2VydmljZS5mdWxsc2NyZWVuRXZlbnQucGlwZSh0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KSkuc3Vic2NyaWJlKGZ1bGxzY3JlZW4gPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZ1bGxzY3JlZW4gPSBmdWxsc2NyZWVuO1xyXG4gICAgICAgICAgICB0aGlzLnNjcnViLnBvc2l0aW9uID0gMDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5tZWRpYVBsYXllclNlcnZpY2UudGltZVVwZGF0ZUV2ZW50LnBpcGUodGFrZVVudGlsKHRoaXMuX29uRGVzdHJveSkpLnN1YnNjcmliZShjdXJyZW50ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gY3VycmVudDtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9ICh0aGlzLmN1cnJlbnQgLyB0aGlzLmR1cmF0aW9uKSAqIDEwMDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5tZWRpYVBsYXllclNlcnZpY2UucHJvZ3Jlc3NFdmVudC5waXBlKHRha2VVbnRpbCh0aGlzLl9vbkRlc3Ryb3kpKS5zdWJzY3JpYmUoKGJ1ZmZlcmVkOiBUaW1lUmFuZ2VzKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyZWQgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IGJ1ZmZlcmVkLmxlbmd0aDsgaWR4KyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnVmZmVyZWQucHVzaCh7IHN0YXJ0OiAoYnVmZmVyZWQuc3RhcnQoaWR4KSAvIHRoaXMuZHVyYXRpb24pICogMTAwLCBlbmQ6IChidWZmZXJlZC5lbmQoaWR4KSAvIHRoaXMuZHVyYXRpb24pICogMTAwIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IG1vdXNlZG93biQgPSBmcm9tRXZlbnQodGhpcy50aHVtYi5uYXRpdmVFbGVtZW50LCAnbW91c2Vkb3duJyk7XHJcbiAgICAgICAgY29uc3QgbW91c2Vtb3ZlJCA9IGZyb21FdmVudChkb2N1bWVudCwgJ21vdXNlbW92ZScpO1xyXG4gICAgICAgIGNvbnN0IG1vdXNldXAkID0gZnJvbUV2ZW50KGRvY3VtZW50LCAnbW91c2V1cCcpO1xyXG5cclxuICAgICAgICBtb3VzZWRvd24kLnBpcGUoXHJcbiAgICAgICAgICAgIHN3aXRjaE1hcCgoKSA9PiBtb3VzZW1vdmUkLnBpcGUodGFrZVVudGlsKG1vdXNldXAkKSkpLFxyXG4gICAgICAgICAgICB0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KVxyXG4gICAgICAgICkuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2NydWIudmlzaWJsZSA9IGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLl9vbkRlc3Ryb3kubmV4dCgpO1xyXG4gICAgICAgIHRoaXMuX29uRGVzdHJveS5jb21wbGV0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNjcnViKGV2ZW50PzogTW91c2VFdmVudCk6IHZvaWQge1xyXG5cclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZWRpYS1wcm9ncmVzcy1iYXItdGh1bWInKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0aW1lbGluZSA9IHRoaXMudGltZWxpbmVSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICBjb25zdCBib3VuZHMgPSB0aW1lbGluZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY3J1Yi5wb3NpdGlvbiA9IGV2ZW50Lm9mZnNldFg7XHJcbiAgICAgICAgdGhpcy5zY3J1Yi50aW1lID0gKGV2ZW50Lm9mZnNldFggLyBib3VuZHMud2lkdGgpICogdGhpcy5tZWRpYVBsYXllclNlcnZpY2UuZHVyYXRpb247XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1vdXNlRG93bikge1xyXG4gICAgICAgICAgICB0aGlzLm1lZGlhUGxheWVyU2VydmljZS5wYXVzZSgpO1xyXG4gICAgICAgICAgICB0aGlzLm1lZGlhUGxheWVyU2VydmljZS5jdXJyZW50VGltZSA9IHRoaXMuc2NydWIudGltZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWVkaWFQbGF5ZXJCdWZmZXJlZCB7XHJcbiAgICBzdGFydDogbnVtYmVyO1xyXG4gICAgZW5kOiBudW1iZXI7XHJcbn1cclxuIl19