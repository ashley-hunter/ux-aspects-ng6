/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ColorService } from '../../services/color/index';
export class NotificationService {
    /**
     * @param {?} _colorService
     */
    constructor(_colorService) {
        this._colorService = _colorService;
        // provide default options
        this.options = {
            duration: 4,
            height: 100,
            spacing: 10,
            backgroundColor: this._colorService.getColor('accent').toHex(),
            iconColor: this._colorService.getColor('accent').toHex()
        };
        this.direction = 'above';
        this.notifications$ = new BehaviorSubject([]);
    }
    /**
     * @param {?} templateRef
     * @param {?=} options
     * @param {?=} data
     * @return {?}
     */
    show(templateRef, options = this.options, data = {}) {
        options = Object.assign({}, this.options, options);
        const /** @type {?} */ notificationRef = {
            templateRef: templateRef,
            duration: options.duration,
            date: new Date(),
            visible: true,
            height: options.height,
            spacing: options.spacing,
            backgroundColor: options.backgroundColor,
            iconColor: options.iconColor,
            data: data
        };
        const /** @type {?} */ notifications = this.notifications$.getValue();
        if (this.direction === 'above') {
            notifications.unshift(notificationRef);
        }
        else {
            notifications.push(notificationRef);
        }
        this.notifications$.next(notifications);
        // remove notification after delay
        if (options.duration !== 0) {
            setTimeout(() => this.dismiss(notificationRef), options.duration * 1000);
        }
        return notificationRef;
    }
    /**
     * @return {?}
     */
    getHistory() {
        return this.notifications$.getValue();
    }
    /**
     * @param {?} notificationRef
     * @return {?}
     */
    dismiss(notificationRef) {
        notificationRef.visible = false;
        this.notifications$.next(this.notifications$.getValue());
    }
    /**
     * @return {?}
     */
    dismissAll() {
        this.notifications$.getValue().forEach(notificationRef => notificationRef.visible = false);
        this.notifications$.next(this.notifications$.getValue());
    }
}
NotificationService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
NotificationService.ctorParameters = () => [
    { type: ColorService, },
];
function NotificationService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    NotificationService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    NotificationService.ctorParameters;
    /** @type {?} */
    NotificationService.prototype.options;
    /** @type {?} */
    NotificationService.prototype.direction;
    /** @type {?} */
    NotificationService.prototype.notifications$;
    /** @type {?} */
    NotificationService.prototype._colorService;
}
/**
 * @record
 */
export function NotificationRef() { }
function NotificationRef_tsickle_Closure_declarations() {
    /** @type {?} */
    NotificationRef.prototype.templateRef;
    /** @type {?} */
    NotificationRef.prototype.duration;
    /** @type {?} */
    NotificationRef.prototype.date;
    /** @type {?|undefined} */
    NotificationRef.prototype.visible;
    /** @type {?|undefined} */
    NotificationRef.prototype.height;
    /** @type {?|undefined} */
    NotificationRef.prototype.spacing;
    /** @type {?|undefined} */
    NotificationRef.prototype.backgroundColor;
    /** @type {?|undefined} */
    NotificationRef.prototype.iconColor;
    /** @type {?} */
    NotificationRef.prototype.data;
}
/**
 * @record
 */
export function NotificationOptions() { }
function NotificationOptions_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    NotificationOptions.prototype.duration;
    /** @type {?|undefined} */
    NotificationOptions.prototype.height;
    /** @type {?|undefined} */
    NotificationOptions.prototype.spacing;
    /** @type {?|undefined} */
    NotificationOptions.prototype.backgroundColor;
    /** @type {?|undefined} */
    NotificationOptions.prototype.iconColor;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9ub3RpZmljYXRpb24vbm90aWZpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFHMUQsTUFBTTs7OztJQStERixZQUFvQixhQUEyQjtRQUEzQixrQkFBYSxHQUFiLGFBQWEsQ0FBYzs7dUJBNURoQjtZQUMzQixRQUFRLEVBQUUsQ0FBQztZQUNYLE1BQU0sRUFBRSxHQUFHO1lBQ1gsT0FBTyxFQUFFLEVBQUU7WUFDWCxlQUFlLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxFQUFFO1lBQzlELFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEVBQUU7U0FDM0Q7eUJBRXNDLE9BQU87OEJBRU8sSUFBSSxlQUFlLENBQW9CLEVBQUUsQ0FBQztLQW1EOUY7Ozs7Ozs7SUFqREQsSUFBSSxDQUFDLFdBQTZCLEVBQUUsVUFBK0IsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUErQixFQUFFO1FBRTlHLE9BQU8scUJBQVEsSUFBSSxDQUFDLE9BQU8sRUFBSyxPQUFPLENBQUUsQ0FBQztRQUUxQyx1QkFBTSxlQUFlLEdBQW9CO1lBQ3JDLFdBQVcsRUFBRSxXQUFXO1lBQ3hCLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUTtZQUMxQixJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFDaEIsT0FBTyxFQUFFLElBQUk7WUFDYixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07WUFDdEIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPO1lBQ3hCLGVBQWUsRUFBRSxPQUFPLENBQUMsZUFBZTtZQUN4QyxTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVM7WUFDNUIsSUFBSSxFQUFFLElBQUk7U0FDYixDQUFDO1FBRUYsdUJBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFckQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzdCLGFBQWEsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDMUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLGFBQWEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDdkM7UUFFRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzs7UUFHeEMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUM7U0FDNUU7UUFFRCxNQUFNLENBQUMsZUFBZSxDQUFDO0tBQzFCOzs7O0lBRUQsVUFBVTtRQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQ3pDOzs7OztJQUVELE9BQU8sQ0FBQyxlQUFnQztRQUNwQyxlQUFlLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNoQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7S0FDNUQ7Ozs7SUFFRCxVQUFVO1FBQ04sSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQzNGLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztLQUM1RDs7O1lBOURKLFVBQVU7Ozs7WUFGRixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IENvbG9yU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NvbG9yL2luZGV4JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvblNlcnZpY2Uge1xyXG5cclxuICAgIC8vIHByb3ZpZGUgZGVmYXVsdCBvcHRpb25zXHJcbiAgICBvcHRpb25zOiBOb3RpZmljYXRpb25PcHRpb25zID0ge1xyXG4gICAgICAgIGR1cmF0aW9uOiA0LFxyXG4gICAgICAgIGhlaWdodDogMTAwLFxyXG4gICAgICAgIHNwYWNpbmc6IDEwLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5fY29sb3JTZXJ2aWNlLmdldENvbG9yKCdhY2NlbnQnKS50b0hleCgpLFxyXG4gICAgICAgIGljb25Db2xvcjogdGhpcy5fY29sb3JTZXJ2aWNlLmdldENvbG9yKCdhY2NlbnQnKS50b0hleCgpXHJcbiAgICB9O1xyXG5cclxuICAgIGRpcmVjdGlvbjogTm90aWZpY2F0aW9uTGlzdERpcmVjdGlvbiA9ICdhYm92ZSc7XHJcblxyXG4gICAgbm90aWZpY2F0aW9ucyQ6IEJlaGF2aW9yU3ViamVjdDxOb3RpZmljYXRpb25SZWZbXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PE5vdGlmaWNhdGlvblJlZltdPihbXSk7ICAgIFxyXG5cclxuICAgIHNob3codGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sIG9wdGlvbnM6IE5vdGlmaWNhdGlvbk9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsIGRhdGE6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fSk6IE5vdGlmaWNhdGlvblJlZiB7XHJcblxyXG4gICAgICAgIG9wdGlvbnMgPSB7IC4uLnRoaXMub3B0aW9ucywgLi4ub3B0aW9ucyB9O1xyXG5cclxuICAgICAgICBjb25zdCBub3RpZmljYXRpb25SZWY6IE5vdGlmaWNhdGlvblJlZiA9IHtcclxuICAgICAgICAgICAgdGVtcGxhdGVSZWY6IHRlbXBsYXRlUmVmLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogb3B0aW9ucy5kdXJhdGlvbixcclxuICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgaGVpZ2h0OiBvcHRpb25zLmhlaWdodCxcclxuICAgICAgICAgICAgc3BhY2luZzogb3B0aW9ucy5zcGFjaW5nLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IG9wdGlvbnMuYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgICAgICBpY29uQ29sb3I6IG9wdGlvbnMuaWNvbkNvbG9yLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3Qgbm90aWZpY2F0aW9ucyA9IHRoaXMubm90aWZpY2F0aW9ucyQuZ2V0VmFsdWUoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAnYWJvdmUnKSB7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbnMudW5zaGlmdChub3RpZmljYXRpb25SZWYpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbnMucHVzaChub3RpZmljYXRpb25SZWYpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zJC5uZXh0KG5vdGlmaWNhdGlvbnMpO1xyXG5cclxuICAgICAgICAvLyByZW1vdmUgbm90aWZpY2F0aW9uIGFmdGVyIGRlbGF5XHJcbiAgICAgICAgaWYgKG9wdGlvbnMuZHVyYXRpb24gIT09IDApIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmRpc21pc3Mobm90aWZpY2F0aW9uUmVmKSwgb3B0aW9ucy5kdXJhdGlvbiAqIDEwMDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5vdGlmaWNhdGlvblJlZjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRIaXN0b3J5KCk6IE5vdGlmaWNhdGlvblJlZltdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ub3RpZmljYXRpb25zJC5nZXRWYWx1ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc21pc3Mobm90aWZpY2F0aW9uUmVmOiBOb3RpZmljYXRpb25SZWYpOiB2b2lkIHtcclxuICAgICAgICBub3RpZmljYXRpb25SZWYudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9ucyQubmV4dCh0aGlzLm5vdGlmaWNhdGlvbnMkLmdldFZhbHVlKCkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkaXNtaXNzQWxsKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9ucyQuZ2V0VmFsdWUoKS5mb3JFYWNoKG5vdGlmaWNhdGlvblJlZiA9PiBub3RpZmljYXRpb25SZWYudmlzaWJsZSA9IGZhbHNlKTtcclxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbnMkLm5leHQodGhpcy5ub3RpZmljYXRpb25zJC5nZXRWYWx1ZSgpKTsgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NvbG9yU2VydmljZTogQ29sb3JTZXJ2aWNlKSB7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTm90aWZpY2F0aW9uUmVmIHtcclxuICAgIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gICAgZHVyYXRpb246IG51bWJlcjtcclxuICAgIGRhdGU6IERhdGU7XHJcbiAgICB2aXNpYmxlPzogYm9vbGVhbjtcclxuICAgIGhlaWdodD86IG51bWJlcjtcclxuICAgIHNwYWNpbmc/OiBudW1iZXI7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmc7XHJcbiAgICBpY29uQ29sb3I/OiBzdHJpbmc7XHJcbiAgICBkYXRhOiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE5vdGlmaWNhdGlvbk9wdGlvbnMge1xyXG4gICAgZHVyYXRpb24/OiBudW1iZXI7XHJcbiAgICBoZWlnaHQ/OiBudW1iZXI7XHJcbiAgICBzcGFjaW5nPzogbnVtYmVyO1xyXG4gICAgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nO1xyXG4gICAgaWNvbkNvbG9yPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBOb3RpZmljYXRpb25MaXN0RGlyZWN0aW9uID0gJ2Fib3ZlJyB8ICdiZWxvdyc7Il19