/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe, Injectable } from '@angular/core';
export class StringFilterPipe {
    /**
     * @param {?} items
     * @param {?} value
     * @return {?}
     */
    transform(items, value) {
        if (!items) {
            return [];
        }
        return items.filter(it => it.toLowerCase().indexOf(value.toLowerCase()) >= 0);
    }
}
StringFilterPipe.decorators = [
    { type: Pipe, args: [{
                name: 'stringFilter'
            },] },
    { type: Injectable },
];
function StringFilterPipe_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    StringFilterPipe.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    StringFilterPipe.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLWZpbHRlci5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHV4LWFzcGVjdHMvdXgtYXNwZWN0cy8iLCJzb3VyY2VzIjpbInBpcGVzL3N0cmluZy1maWx0ZXIvc3RyaW5nLWZpbHRlci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFNaEUsTUFBTTs7Ozs7O0lBQ0YsU0FBUyxDQUFDLEtBQVksRUFBRSxLQUFhO1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNULE1BQU0sQ0FBQyxFQUFFLENBQUM7U0FDYjtRQUNELE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztLQUNqRjs7O1lBVkosSUFBSSxTQUFDO2dCQUNGLElBQUksRUFBRSxjQUFjO2FBQ3ZCO1lBQ0EsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIEluamVjdGFibGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHtcclxuICAgIG5hbWU6ICdzdHJpbmdGaWx0ZXInXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFN0cmluZ0ZpbHRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHRyYW5zZm9ybShpdGVtczogYW55W10sIHZhbHVlOiBzdHJpbmcpOiBhbnlbXSB7ICBcclxuICAgICAgICBpZiAoIWl0ZW1zKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zLmZpbHRlcihpdCA9PiBpdC50b0xvd2VyQ2FzZSgpLmluZGV4T2YodmFsdWUudG9Mb3dlckNhc2UoKSkgPj0gMCk7XHJcbiAgICB9XHJcbn0iXX0=