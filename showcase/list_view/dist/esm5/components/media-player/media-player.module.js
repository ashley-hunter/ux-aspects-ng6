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
var /** @type {?} */ DECLARATIONS = [
    MediaPlayerComponent,
    MediaPlayerTimelineExtensionComponent,
    MediaPlayerBaseExtensionDirective,
    MediaPlayerControlsExtensionComponent
];
var MediaPlayerModule = /** @class */ (function () {
    function MediaPlayerModule() {
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
    return MediaPlayerModule;
}());
export { MediaPlayerModule };
function MediaPlayerModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    MediaPlayerModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    MediaPlayerModule.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEtcGxheWVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL21lZGlhLXBsYXllci9tZWRpYS1wbGF5ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNqRyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRixPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNqRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUNoRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFakQscUJBQU0sWUFBWSxHQUFHO0lBQ2pCLG9CQUFvQjtJQUNwQixxQ0FBcUM7SUFDckMsaUNBQWlDO0lBQ2pDLHFDQUFxQztDQUN4QyxDQUFDOzs7OztnQkFFRCxRQUFRLFNBQUM7b0JBQ04sT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1oscUJBQXFCO3dCQUNyQixhQUFhO3dCQUNiLGtCQUFrQjt3QkFDbEIsa0JBQWtCO3dCQUNsQixrQkFBa0I7cUJBQ3JCO29CQUNELE9BQU8sRUFBRSxZQUFZO29CQUNyQixZQUFZLEVBQUUsWUFBWTtvQkFDMUIsU0FBUyxFQUFFLENBQUMsa0JBQWtCLENBQUM7aUJBQ2xDOzs0QkFqQ0Q7O1NBa0NhLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBNZWRpYVBsYXllckNvbXBvbmVudCB9IGZyb20gJy4vbWVkaWEtcGxheWVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1lZGlhUGxheWVyVGltZWxpbmVFeHRlbnNpb25Db21wb25lbnQgfSBmcm9tICcuL2V4dGVuc2lvbnMvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWVkaWFQbGF5ZXJCYXNlRXh0ZW5zaW9uRGlyZWN0aXZlIH0gZnJvbSAnLi9leHRlbnNpb25zL2Jhc2UtZXh0ZW5zaW9uLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE1lZGlhUGxheWVyQ29udHJvbHNFeHRlbnNpb25Db21wb25lbnQgfSBmcm9tICcuL2V4dGVuc2lvbnMvY29udHJvbHMvY29udHJvbHMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRnJhbWVFeHRyYWN0aW9uTW9kdWxlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZnJhbWUtZXh0cmFjdGlvbi9mcmFtZS1leHRyYWN0aW9uLm1vZHVsZSc7XHJcbmltcG9ydCB7IEF1ZGlvU2VydmljZU1vZHVsZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1ZGlvL2luZGV4JztcclxuaW1wb3J0IHsgRHVyYXRpb25QaXBlTW9kdWxlIH0gZnJvbSAnLi4vLi4vcGlwZXMvZHVyYXRpb24vaW5kZXgnO1xyXG5pbXBvcnQgeyBGaWxlU2l6ZVBpcGVNb2R1bGUgfSBmcm9tICcuLi8uLi9waXBlcy9maWxlLXNpemUvaW5kZXgnO1xyXG5pbXBvcnQgeyBNZWRpYVBsYXllclNlcnZpY2UgfSBmcm9tICcuL21lZGlhLXBsYXllci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVG9vbHRpcE1vZHVsZSB9IGZyb20gJy4uL3Rvb2x0aXAvaW5kZXgnO1xyXG5cclxuY29uc3QgREVDTEFSQVRJT05TID0gW1xyXG4gICAgTWVkaWFQbGF5ZXJDb21wb25lbnQsXHJcbiAgICBNZWRpYVBsYXllclRpbWVsaW5lRXh0ZW5zaW9uQ29tcG9uZW50LFxyXG4gICAgTWVkaWFQbGF5ZXJCYXNlRXh0ZW5zaW9uRGlyZWN0aXZlLFxyXG4gICAgTWVkaWFQbGF5ZXJDb250cm9sc0V4dGVuc2lvbkNvbXBvbmVudFxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgRnJhbWVFeHRyYWN0aW9uTW9kdWxlLFxyXG4gICAgICAgIFRvb2x0aXBNb2R1bGUsXHJcbiAgICAgICAgQXVkaW9TZXJ2aWNlTW9kdWxlLFxyXG4gICAgICAgIER1cmF0aW9uUGlwZU1vZHVsZSxcclxuICAgICAgICBGaWxlU2l6ZVBpcGVNb2R1bGVcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBERUNMQVJBVElPTlMsXHJcbiAgICBkZWNsYXJhdGlvbnM6IERFQ0xBUkFUSU9OUyxcclxuICAgIHByb3ZpZGVyczogW01lZGlhUGxheWVyU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1lZGlhUGxheWVyTW9kdWxlIHsgfVxyXG4iXX0=