/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaPlayerComponent } from './media-player.component';
import { MediaPlayerTimelineExtensionComponent } from './extensions/timeline/timeline.component';
import { MediaPlayerBaseExtensionDirective } from './extensions/base-extension.directive';
import { MediaPlayerControlsExtensionComponent } from './extensions/controls/controls.component';
import { FrameExtractionModule } from '../../services/frame-extraction/frame-extraction.module';
import { AudioServiceModule } from '../../services/audio/index';
import { DurationPipeModule } from '../../pipes/duration/index';
import { FileSizePipeModule } from '../../pipes/file-size/index';
import { MediaPlayerService } from './media-player.service';
import { TooltipModule } from '../tooltip/index';
const /** @type {?} */ DECLARATIONS = [
    MediaPlayerComponent,
    MediaPlayerTimelineExtensionComponent,
    MediaPlayerBaseExtensionDirective,
    MediaPlayerControlsExtensionComponent
];
export class MediaPlayerModule {
}
MediaPlayerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FrameExtractionModule,
                    TooltipModule,
                    AudioServiceModule,
                    DurationPipeModule,
                    FileSizePipeModule
                ],
                exports: DECLARATIONS,
                declarations: DECLARATIONS,
                providers: [MediaPlayerService]
            },] },
];
function MediaPlayerModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MediaPlayerModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MediaPlayerModule.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEtcGxheWVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL21lZGlhLXBsYXllci9tZWRpYS1wbGF5ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNqRyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRixPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNqRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUNoRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFakQsdUJBQU0sWUFBWSxHQUFHO0lBQ2pCLG9CQUFvQjtJQUNwQixxQ0FBcUM7SUFDckMsaUNBQWlDO0lBQ2pDLHFDQUFxQztDQUN4QyxDQUFDO0FBZUYsTUFBTTs7O1lBYkwsUUFBUSxTQUFDO2dCQUNOLE9BQU8sRUFBRTtvQkFDTCxZQUFZO29CQUNaLHFCQUFxQjtvQkFDckIsYUFBYTtvQkFDYixrQkFBa0I7b0JBQ2xCLGtCQUFrQjtvQkFDbEIsa0JBQWtCO2lCQUNyQjtnQkFDRCxPQUFPLEVBQUUsWUFBWTtnQkFDckIsWUFBWSxFQUFFLFlBQVk7Z0JBQzFCLFNBQVMsRUFBRSxDQUFDLGtCQUFrQixDQUFDO2FBQ2xDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IE1lZGlhUGxheWVyQ29tcG9uZW50IH0gZnJvbSAnLi9tZWRpYS1wbGF5ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWVkaWFQbGF5ZXJUaW1lbGluZUV4dGVuc2lvbkNvbXBvbmVudCB9IGZyb20gJy4vZXh0ZW5zaW9ucy90aW1lbGluZS90aW1lbGluZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNZWRpYVBsYXllckJhc2VFeHRlbnNpb25EaXJlY3RpdmUgfSBmcm9tICcuL2V4dGVuc2lvbnMvYmFzZS1leHRlbnNpb24uZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTWVkaWFQbGF5ZXJDb250cm9sc0V4dGVuc2lvbkNvbXBvbmVudCB9IGZyb20gJy4vZXh0ZW5zaW9ucy9jb250cm9scy9jb250cm9scy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGcmFtZUV4dHJhY3Rpb25Nb2R1bGUgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mcmFtZS1leHRyYWN0aW9uL2ZyYW1lLWV4dHJhY3Rpb24ubW9kdWxlJztcclxuaW1wb3J0IHsgQXVkaW9TZXJ2aWNlTW9kdWxlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXVkaW8vaW5kZXgnO1xyXG5pbXBvcnQgeyBEdXJhdGlvblBpcGVNb2R1bGUgfSBmcm9tICcuLi8uLi9waXBlcy9kdXJhdGlvbi9pbmRleCc7XHJcbmltcG9ydCB7IEZpbGVTaXplUGlwZU1vZHVsZSB9IGZyb20gJy4uLy4uL3BpcGVzL2ZpbGUtc2l6ZS9pbmRleCc7XHJcbmltcG9ydCB7IE1lZGlhUGxheWVyU2VydmljZSB9IGZyb20gJy4vbWVkaWEtcGxheWVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUb29sdGlwTW9kdWxlIH0gZnJvbSAnLi4vdG9vbHRpcC9pbmRleCc7XHJcblxyXG5jb25zdCBERUNMQVJBVElPTlMgPSBbXHJcbiAgICBNZWRpYVBsYXllckNvbXBvbmVudCxcclxuICAgIE1lZGlhUGxheWVyVGltZWxpbmVFeHRlbnNpb25Db21wb25lbnQsXHJcbiAgICBNZWRpYVBsYXllckJhc2VFeHRlbnNpb25EaXJlY3RpdmUsXHJcbiAgICBNZWRpYVBsYXllckNvbnRyb2xzRXh0ZW5zaW9uQ29tcG9uZW50XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvbW1vbk1vZHVsZSxcclxuICAgICAgICBGcmFtZUV4dHJhY3Rpb25Nb2R1bGUsXHJcbiAgICAgICAgVG9vbHRpcE1vZHVsZSxcclxuICAgICAgICBBdWRpb1NlcnZpY2VNb2R1bGUsXHJcbiAgICAgICAgRHVyYXRpb25QaXBlTW9kdWxlLFxyXG4gICAgICAgIEZpbGVTaXplUGlwZU1vZHVsZVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IERFQ0xBUkFUSU9OUyxcclxuICAgIGRlY2xhcmF0aW9uczogREVDTEFSQVRJT05TLFxyXG4gICAgcHJvdmlkZXJzOiBbTWVkaWFQbGF5ZXJTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWVkaWFQbGF5ZXJNb2R1bGUgeyB9XHJcbiJdfQ==