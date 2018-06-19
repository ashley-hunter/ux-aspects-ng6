/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
export class TypeaheadKeyService {
    constructor() { }
    /**
     * @param {?} event
     * @param {?} typeahead
     * @return {?}
     */
    handleKey(event, typeahead) {
        if (typeahead) {
            switch (event.key) {
                case 'ArrowUp':
                case 'Up':
                    if (!typeahead.open) {
                        typeahead.open = true;
                    }
                    else {
                        typeahead.moveHighlight(-1);
                    }
                    event.preventDefault();
                    break;
                case 'ArrowDown':
                case 'Down':
                    if (!typeahead.open) {
                        typeahead.open = true;
                    }
                    else {
                        typeahead.moveHighlight(1);
                    }
                    event.preventDefault();
                    break;
                case 'Escape':
                case 'Esc':
                    typeahead.open = false;
                    break;
            }
        }
    }
}
TypeaheadKeyService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
TypeaheadKeyService.ctorParameters = () => [];
function TypeaheadKeyService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TypeaheadKeyService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TypeaheadKeyService.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZWFoZWFkLWtleS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdHlwZWFoZWFkL3R5cGVhaGVhZC1rZXkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxNQUFNO0lBRUYsaUJBQWlCOzs7Ozs7SUFFakIsU0FBUyxDQUFDLEtBQW9CLEVBQUUsU0FBNkI7UUFDekQsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNaLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixLQUFLLFNBQVMsQ0FBQztnQkFDZixLQUFLLElBQUk7b0JBQ0wsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDbEIsU0FBUyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7cUJBQ3pCO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDL0I7b0JBQ0QsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN2QixLQUFLLENBQUM7Z0JBQ1YsS0FBSyxXQUFXLENBQUM7Z0JBQ2pCLEtBQUssTUFBTTtvQkFDUCxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUNsQixTQUFTLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztxQkFDekI7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ0osU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDOUI7b0JBQ0QsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN2QixLQUFLLENBQUM7Z0JBQ1YsS0FBSyxRQUFRLENBQUM7Z0JBQ2QsS0FBSyxLQUFLO29CQUNOLFNBQVMsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO29CQUN2QixLQUFLLENBQUM7YUFDYjtTQUNKO0tBQ0o7OztZQWhDSixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZWFoZWFkQ29tcG9uZW50IH0gZnJvbSAnLi9pbmRleCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFR5cGVhaGVhZEtleVNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgaGFuZGxlS2V5KGV2ZW50OiBLZXlib2FyZEV2ZW50LCB0eXBlYWhlYWQ6IFR5cGVhaGVhZENvbXBvbmVudCkge1xyXG4gICAgICAgIGlmICh0eXBlYWhlYWQpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0Fycm93VXAnOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnVXAnOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdHlwZWFoZWFkLm9wZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZWFoZWFkLm9wZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVhaGVhZC5tb3ZlSGlnaGxpZ2h0KC0xKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0Fycm93RG93bic6XHJcbiAgICAgICAgICAgICAgICBjYXNlICdEb3duJzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXR5cGVhaGVhZC5vcGVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVhaGVhZC5vcGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlYWhlYWQubW92ZUhpZ2hsaWdodCgxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0VzY2FwZSc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICdFc2MnOlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVhaGVhZC5vcGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=