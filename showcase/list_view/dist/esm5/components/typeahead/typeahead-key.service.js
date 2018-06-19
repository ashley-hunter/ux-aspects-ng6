/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
var TypeaheadKeyService = /** @class */ (function () {
    function TypeaheadKeyService() {
    }
    /**
     * @param {?} event
     * @param {?} typeahead
     * @return {?}
     */
    TypeaheadKeyService.prototype.handleKey = /**
     * @param {?} event
     * @param {?} typeahead
     * @return {?}
     */
    function (event, typeahead) {
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
    };
    TypeaheadKeyService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    TypeaheadKeyService.ctorParameters = function () { return []; };
    return TypeaheadKeyService;
}());
export { TypeaheadKeyService };
function TypeaheadKeyService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TypeaheadKeyService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TypeaheadKeyService.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZWFoZWFkLWtleS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdHlwZWFoZWFkL3R5cGVhaGVhZC1rZXkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUFLdkM7S0FBaUI7Ozs7OztJQUVqQix1Q0FBUzs7Ozs7SUFBVCxVQUFVLEtBQW9CLEVBQUUsU0FBNkI7UUFDekQsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNaLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixLQUFLLFNBQVMsQ0FBQztnQkFDZixLQUFLLElBQUk7b0JBQ0wsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDbEIsU0FBUyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7cUJBQ3pCO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDL0I7b0JBQ0QsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN2QixLQUFLLENBQUM7Z0JBQ1YsS0FBSyxXQUFXLENBQUM7Z0JBQ2pCLEtBQUssTUFBTTtvQkFDUCxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUNsQixTQUFTLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztxQkFDekI7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ0osU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDOUI7b0JBQ0QsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN2QixLQUFLLENBQUM7Z0JBQ1YsS0FBSyxRQUFRLENBQUM7Z0JBQ2QsS0FBSyxLQUFLO29CQUNOLFNBQVMsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO29CQUN2QixLQUFLLENBQUM7YUFDYjtTQUNKO0tBQ0o7O2dCQWhDSixVQUFVOzs7OzhCQUhYOztTQUlhLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGVhaGVhZENvbXBvbmVudCB9IGZyb20gJy4vaW5kZXgnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUeXBlYWhlYWRLZXlTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIGhhbmRsZUtleShldmVudDogS2V5Ym9hcmRFdmVudCwgdHlwZWFoZWFkOiBUeXBlYWhlYWRDb21wb25lbnQpIHtcclxuICAgICAgICBpZiAodHlwZWFoZWFkKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdBcnJvd1VwJzpcclxuICAgICAgICAgICAgICAgIGNhc2UgJ1VwJzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXR5cGVhaGVhZC5vcGVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVhaGVhZC5vcGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlYWhlYWQubW92ZUhpZ2hsaWdodCgtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdBcnJvd0Rvd24nOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnRG93bic6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0eXBlYWhlYWQub3Blbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlYWhlYWQub3BlbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZWFoZWFkLm1vdmVIaWdobGlnaHQoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdFc2NhcGUnOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnRXNjJzpcclxuICAgICAgICAgICAgICAgICAgICB0eXBlYWhlYWQub3BlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19