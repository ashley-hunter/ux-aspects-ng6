/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { BehaviorSubject, Subscription, combineLatest } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { TypeaheadOptionEvent } from './typeahead-event';
import { TypeaheadService } from './typeahead.service';
var /** @type {?} */ uniqueId = 0;
var TypeaheadComponent = /** @class */ (function () {
    function TypeaheadComponent(typeaheadElement, _cdRef, _service) {
        var _this = this;
        this.typeaheadElement = typeaheadElement;
        this._cdRef = _cdRef;
        this._service = _service;
        this.id = "ux-typeahead-" + ++uniqueId;
        this.openChange = new EventEmitter();
        this.dropDirection = 'down';
        this.maxHeight = '250px';
        this.multiselectable = false;
        this.openOnFilterChange = true;
        this.pageSize = 20;
        this.selectFirst = true;
        this.optionSelected = new EventEmitter();
        this.highlightedChange = new EventEmitter();
        this.highlightedElementChange = new EventEmitter();
        this.visibleOptions$ = new BehaviorSubject([]);
        this.loading = false;
        this.clicking = false;
        this.highlighted$ = new BehaviorSubject(null);
        this._open = false;
        this._subscription = new Subscription();
        this.optionApi = {
            getKey: this.getKey.bind(this),
            getDisplay: this.getDisplay.bind(this),
            getDisplayHtml: this.getDisplayHtml.bind(this)
        };
        this.loadOptionsCallback = function (pageNum, pageSize, filter) {
            if (typeof _this.options === 'function') {
                return _this.options(pageNum, pageSize, filter);
            }
            return null;
        };
        this._subscription.add(this._service.open$.pipe(distinctUntilChanged()).subscribe(function (next) {
            _this.openChange.emit(next);
            if (next) {
                _this.initOptions();
            }
        }));
        this._subscription.add(this.highlighted$.subscribe(function (next) {
            _this.highlightedChange.emit(next ? next.value : null);
        }));
        this._subscription.add(combineLatest(this._service.open$, this._service.highlightedElement$, this.visibleOptions$)
            .subscribe(function (_a) {
            var _b = tslib_1.__read(_a, 3), open = _b[0], highlightedElement = _b[1], visibleOptions = _b[2];
            _this.highlightedElementChange.emit(open && visibleOptions.length > 0 ? highlightedElement : null);
        }));
    }
    Object.defineProperty(TypeaheadComponent.prototype, "open", {
        get: /**
         * @return {?}
         */
        function () {
            return this._service.open$.getValue();
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._service.open$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadComponent.prototype, "highlighted", {
        get: /**
         * @return {?}
         */
        function () {
            var /** @type {?} */ value = this.highlighted$.getValue();
            return value ? value.value : null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TypeaheadComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        // Attach default loading template
        if (!this.loadingTemplate) {
            this.loadingTemplate = this._defaultLoadingTemplate;
        }
        // Attach default option template
        if (!this.optionTemplate) {
            this.optionTemplate = this._defaultOptionTemplate;
        }
        // Attach default "no results" template
        if (!this.noOptionsTemplate) {
            this.noOptionsTemplate = this._defaultNoOptionsTemplate;
        }
        this._cdRef.detectChanges();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    TypeaheadComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        // Open the dropdown if the filter value updates
        if (changes["filter"]) {
            if (this.openOnFilterChange && changes["filter"].currentValue && changes["filter"].currentValue.length > 0) {
                this.open = true;
            }
        }
        // Re-filter visibleOptions
        this.updateOptions();
    };
    /**
     * @return {?}
     */
    TypeaheadComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._subscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    TypeaheadComponent.prototype.mousedownHandler = /**
     * @return {?}
     */
    function () {
        this.clicking = true;
    };
    /**
     * @return {?}
     */
    TypeaheadComponent.prototype.mouseupHandler = /**
     * @return {?}
     */
    function () {
        this.clicking = false;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TypeaheadComponent.prototype.optionMousedownHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // Workaround to prevent focus changing when an option is clicked
        event.preventDefault();
    };
    /**
     * @param {?} event
     * @param {?} option
     * @return {?}
     */
    TypeaheadComponent.prototype.optionClickHandler = /**
     * @param {?} event
     * @param {?} option
     * @return {?}
     */
    function (event, option) {
        this.select(option);
    };
    /**
     * Returns the unique key value of the given option.
     */
    /**
     * Returns the unique key value of the given option.
     * @param {?} option
     * @return {?}
     */
    TypeaheadComponent.prototype.getKey = /**
     * Returns the unique key value of the given option.
     * @param {?} option
     * @return {?}
     */
    function (option) {
        if (typeof this.key === 'function') {
            return this.key(option);
        }
        if (typeof this.key === 'string' && option && option.hasOwnProperty(this.key)) {
            return option[/** @type {?} */ (this.key)];
        }
        return this.getDisplay(option);
    };
    /**
     * Returns the display value of the given option.
     */
    /**
     * Returns the display value of the given option.
     * @param {?} option
     * @return {?}
     */
    TypeaheadComponent.prototype.getDisplay = /**
     * Returns the display value of the given option.
     * @param {?} option
     * @return {?}
     */
    function (option) {
        if (typeof this.display === 'function') {
            return this.display(option);
        }
        if (typeof this.display === 'string' && option && option.hasOwnProperty(this.display)) {
            return option[/** @type {?} */ (this.display)];
        }
        return option;
    };
    /**
     * Returns the display value of the given option with HTML markup added to highlight the part which matches the current filter value.
     * @param option
     */
    /**
     * Returns the display value of the given option with HTML markup added to highlight the part which matches the current filter value.
     * @param {?} option
     * @return {?}
     */
    TypeaheadComponent.prototype.getDisplayHtml = /**
     * Returns the display value of the given option with HTML markup added to highlight the part which matches the current filter value.
     * @param {?} option
     * @return {?}
     */
    function (option) {
        var /** @type {?} */ displayText;
        if (typeof option === 'string') {
            displayText = this.getDisplay(option).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        }
        else {
            displayText = this.getDisplay(option.name).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        }
        var /** @type {?} */ displayHtml = displayText;
        if (this.filter) {
            var /** @type {?} */ length_1 = this.filter.length;
            var /** @type {?} */ matchIndex = displayText.toLowerCase().indexOf(this.filter.toLowerCase());
            if (matchIndex >= 0) {
                var /** @type {?} */ highlight = "<span class=\"ux-filter-match\">" + displayText.substr(matchIndex, length_1) + "</span>";
                displayHtml = displayText.substr(0, matchIndex) + highlight + displayText.substr(matchIndex + length_1);
            }
        }
        return displayHtml;
    };
    /**
     * Returns true if the infinite scroll component should load
     */
    /**
     * Returns true if the infinite scroll component should load
     * @return {?}
     */
    TypeaheadComponent.prototype.isInfiniteScroll = /**
     * Returns true if the infinite scroll component should load
     * @return {?}
     */
    function () {
        return typeof this.options === 'function';
    };
    /**
     * Selects the given option, emitting the optionSelected event and closing the dropdown.
     */
    /**
     * Selects the given option, emitting the optionSelected event and closing the dropdown.
     * @param {?} option
     * @return {?}
     */
    TypeaheadComponent.prototype.select = /**
     * Selects the given option, emitting the optionSelected event and closing the dropdown.
     * @param {?} option
     * @return {?}
     */
    function (option) {
        if (!this.isDisabled(option)) {
            this.optionSelected.emit(new TypeaheadOptionEvent(option.value));
            this.highlighted$.next(null);
            this.open = false;
        }
    };
    /**
     * Returns true if the given option is part of the disabledOptions array.
     */
    /**
     * Returns true if the given option is part of the disabledOptions array.
     * @param {?} option
     * @return {?}
     */
    TypeaheadComponent.prototype.isDisabled = /**
     * Returns true if the given option is part of the disabledOptions array.
     * @param {?} option
     * @return {?}
     */
    function (option) {
        var _this = this;
        if (this.disabledOptions) {
            var /** @type {?} */ result = this.disabledOptions.find(function (selectedOption) {
                return _this.getKey(selectedOption) === option.key;
            });
            return result !== undefined;
        }
        return false;
    };
    /**
     * Set the given option as the current highlighted option, available in the highlightedOption parameter.
     */
    /**
     * Set the given option as the current highlighted option, available in the highlightedOption parameter.
     * @param {?} option
     * @return {?}
     */
    TypeaheadComponent.prototype.highlight = /**
     * Set the given option as the current highlighted option, available in the highlightedOption parameter.
     * @param {?} option
     * @return {?}
     */
    function (option) {
        if (!this.isDisabled(option)) {
            this.highlighted$.next(option);
        }
    };
    /**
     * Increment or decrement the highlighted option in the list. Disabled options are skipped.
     * @param d Value to be added to the index of the highlighted option, i.e. -1 to move backwards, +1 to move forwards.
     */
    /**
     * Increment or decrement the highlighted option in the list. Disabled options are skipped.
     * @param {?} d Value to be added to the index of the highlighted option, i.e. -1 to move backwards, +1 to move forwards.
     * @return {?}
     */
    TypeaheadComponent.prototype.moveHighlight = /**
     * Increment or decrement the highlighted option in the list. Disabled options are skipped.
     * @param {?} d Value to be added to the index of the highlighted option, i.e. -1 to move backwards, +1 to move forwards.
     * @return {?}
     */
    function (d) {
        var /** @type {?} */ visibleOptions = this.visibleOptions$.getValue();
        var /** @type {?} */ highlightIndex = this.indexOfVisibleOption(this.highlighted);
        var /** @type {?} */ newIndex = highlightIndex;
        var /** @type {?} */ disabled = true;
        var /** @type {?} */ inBounds = true;
        do {
            newIndex = newIndex + d;
            inBounds = (newIndex >= 0 && newIndex < visibleOptions.length);
            disabled = inBounds && this.isDisabled(visibleOptions[newIndex]);
        } while (inBounds && disabled);
        if (!disabled && inBounds) {
            this.highlighted$.next(visibleOptions[newIndex]);
        }
        return this.highlighted;
    };
    /**
     * Set up the options before the dropdown is displayed.
     */
    /**
     * Set up the options before the dropdown is displayed.
     * @return {?}
     */
    TypeaheadComponent.prototype.initOptions = /**
     * Set up the options before the dropdown is displayed.
     * @return {?}
     */
    function () {
        // Clear previous highlight
        this.highlighted$.next(null);
        if (this.selectFirst) {
            // This will highlight the first non-disabled option.
            this.moveHighlight(1);
        }
    };
    /**
     * Update the visibleOptions array with the current filter.
     */
    /**
     * Update the visibleOptions array with the current filter.
     * @return {?}
     */
    TypeaheadComponent.prototype.updateOptions = /**
     * Update the visibleOptions array with the current filter.
     * @return {?}
     */
    function () {
        var _this = this;
        if (typeof this.options === 'object') {
            var /** @type {?} */ normalisedInput_1 = (this.filter || '').toLowerCase();
            var /** @type {?} */ visibleOptions = this.options
                .filter(function (option) {
                return _this.getDisplay(option).toLowerCase().indexOf(normalisedInput_1) >= 0;
            })
                .map(function (value) {
                return {
                    value: value,
                    key: _this.getKey(value)
                };
            });
            this.visibleOptions$.next(visibleOptions);
        }
        this.initOptions();
    };
    /**
     * Return the index of the given option in the visibleOptions array. Returns -1 if the option is not currently visible.
     * @param {?} option
     * @return {?}
     */
    TypeaheadComponent.prototype.indexOfVisibleOption = /**
     * Return the index of the given option in the visibleOptions array. Returns -1 if the option is not currently visible.
     * @param {?} option
     * @return {?}
     */
    function (option) {
        if (option) {
            var /** @type {?} */ optionKey_1 = this.getKey(option);
            return this.visibleOptions$.getValue().findIndex(function (el) {
                return el.key === optionKey_1;
            });
        }
        return -1;
    };
    TypeaheadComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-typeahead',
                    template: "<div class=\"ux-typeahead-options\"\n    [uxInfiniteScroll]=\"loadOptionsCallback\"\n    [collection]=\"visibleOptions$ | async\"\n    (collectionChange)=\"visibleOptions$.next($event)\"\n    [enabled]=\"isInfiniteScroll()\"\n    [filter]=\"filter\"\n    [loadOnScroll]=\"true\"\n    [pageSize]=\"pageSize\"\n    [scrollElement]=\"typeaheadElement\"\n    (loading)=\"loading = true\"\n    (loaded)=\"loading = false\">\n\n    <ol *ngIf=\"(visibleOptions$ | async).length > 0\">\n        <li *ngFor=\"let option of (visibleOptions$ | async); let i = index\"\n            [attr.id]=\"id + '-option-' + i\"\n            [class.disabled]=\"isDisabled(option)\"\n            [class.highlighted]=\"(highlighted$ | async).key === option.key\"\n            [attr.aria-selected]=\"multiselectable ? isDisabled(option) : null\"\n            [uxTypeaheadHighlight]=\"(highlighted$ | async).key === option.key\"\n            [uxScrollIntoViewIf]=\"(highlighted$ | async).key === option.key\"\n            [scrollParent]=\"typeaheadElement.nativeElement\"\n            (mousedown)=\"optionMousedownHandler($event)\"\n            (click)=\"optionClickHandler($event, option)\"\n            (mouseover)=\"highlight(option)\">\n\n            <ng-container [ngTemplateOutlet]=\"optionTemplate\"\n                [ngTemplateOutletContext]=\"{option: option.value, api: optionApi}\">\n            </ng-container>\n\n        </li>\n    </ol>\n\n    <div *uxInfiniteScrollLoading>\n        <ng-container [ngTemplateOutlet]=\"loadingTemplate\">\n        </ng-container>\n    </div>\n\n</div>\n<div *ngIf=\"(visibleOptions$ | async).length === 0 && !loading\">\n    <ng-container [ngTemplateOutlet]=\"noOptionsTemplate\">\n    </ng-container>\n</div>\n\n<ng-template #defaultLoadingTemplate>\n    <div class=\"ux-typeahead-loading\">\n        <div class=\"spinner spinner-accent spinner-bounce-middle\"></div>\n        <div>Loading...</div>\n    </div>\n</ng-template>\n\n<ng-template #defaultOptionTemplate let-option=\"option\" let-api=\"api\">\n    <span class=\"ux-typeahead-option\" [innerHtml]=\"api.getDisplayHtml(option)\"></span>\n</ng-template>\n\n<ng-template #defaultNoOptionsTemplate>\n    <span class=\"ux-typeahead-no-options\">No results</span>\n</ng-template>",
                    providers: [TypeaheadService],
                    host: {
                        'role': 'listbox',
                        '[class.open]': 'open',
                        '[class.drop-up]': 'dropDirection === "up"',
                        '[style.maxHeight]': 'maxHeight'
                    }
                },] },
    ];
    /** @nocollapse */
    TypeaheadComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: ChangeDetectorRef, },
        { type: TypeaheadService, },
    ]; };
    TypeaheadComponent.propDecorators = {
        "id": [{ type: Input }, { type: HostBinding, args: ['attr.id',] },],
        "options": [{ type: Input },],
        "filter": [{ type: Input },],
        "open": [{ type: Input, args: ['open',] },],
        "openChange": [{ type: Output },],
        "display": [{ type: Input },],
        "key": [{ type: Input },],
        "disabledOptions": [{ type: Input },],
        "dropDirection": [{ type: Input },],
        "maxHeight": [{ type: Input },],
        "multiselectable": [{ type: Input }, { type: HostBinding, args: ['attr.aria-multiselectable',] },],
        "openOnFilterChange": [{ type: Input },],
        "pageSize": [{ type: Input },],
        "selectFirst": [{ type: Input },],
        "loadingTemplate": [{ type: Input },],
        "optionTemplate": [{ type: Input },],
        "noOptionsTemplate": [{ type: Input },],
        "optionSelected": [{ type: Output },],
        "highlightedChange": [{ type: Output },],
        "highlightedElementChange": [{ type: Output },],
        "_defaultLoadingTemplate": [{ type: ViewChild, args: ['defaultLoadingTemplate',] },],
        "_defaultOptionTemplate": [{ type: ViewChild, args: ['defaultOptionTemplate',] },],
        "_defaultNoOptionsTemplate": [{ type: ViewChild, args: ['defaultNoOptionsTemplate',] },],
        "mousedownHandler": [{ type: HostListener, args: ['mousedown',] },],
        "mouseupHandler": [{ type: HostListener, args: ['mouseup',] },],
    };
    return TypeaheadComponent;
}());
export { TypeaheadComponent };
function TypeaheadComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TypeaheadComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TypeaheadComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    TypeaheadComponent.propDecorators;
    /** @type {?} */
    TypeaheadComponent.prototype.id;
    /** @type {?} */
    TypeaheadComponent.prototype.options;
    /** @type {?} */
    TypeaheadComponent.prototype.filter;
    /** @type {?} */
    TypeaheadComponent.prototype.openChange;
    /** @type {?} */
    TypeaheadComponent.prototype.display;
    /** @type {?} */
    TypeaheadComponent.prototype.key;
    /** @type {?} */
    TypeaheadComponent.prototype.disabledOptions;
    /** @type {?} */
    TypeaheadComponent.prototype.dropDirection;
    /** @type {?} */
    TypeaheadComponent.prototype.maxHeight;
    /** @type {?} */
    TypeaheadComponent.prototype.multiselectable;
    /** @type {?} */
    TypeaheadComponent.prototype.openOnFilterChange;
    /** @type {?} */
    TypeaheadComponent.prototype.pageSize;
    /** @type {?} */
    TypeaheadComponent.prototype.selectFirst;
    /** @type {?} */
    TypeaheadComponent.prototype.loadingTemplate;
    /** @type {?} */
    TypeaheadComponent.prototype.optionTemplate;
    /** @type {?} */
    TypeaheadComponent.prototype.noOptionsTemplate;
    /** @type {?} */
    TypeaheadComponent.prototype.optionSelected;
    /** @type {?} */
    TypeaheadComponent.prototype.highlightedChange;
    /** @type {?} */
    TypeaheadComponent.prototype.highlightedElementChange;
    /** @type {?} */
    TypeaheadComponent.prototype._defaultLoadingTemplate;
    /** @type {?} */
    TypeaheadComponent.prototype._defaultOptionTemplate;
    /** @type {?} */
    TypeaheadComponent.prototype._defaultNoOptionsTemplate;
    /** @type {?} */
    TypeaheadComponent.prototype.loadOptionsCallback;
    /** @type {?} */
    TypeaheadComponent.prototype.visibleOptions$;
    /** @type {?} */
    TypeaheadComponent.prototype.loading;
    /** @type {?} */
    TypeaheadComponent.prototype.clicking;
    /** @type {?} */
    TypeaheadComponent.prototype.highlighted$;
    /** @type {?} */
    TypeaheadComponent.prototype._open;
    /** @type {?} */
    TypeaheadComponent.prototype._subscription;
    /** @type {?} */
    TypeaheadComponent.prototype.optionApi;
    /** @type {?} */
    TypeaheadComponent.prototype.typeaheadElement;
    /** @type {?} */
    TypeaheadComponent.prototype._cdRef;
    /** @type {?} */
    TypeaheadComponent.prototype._service;
}
/**
 * The API available to option templates.
 * @record
 */
export function TypeaheadOptionApi() { }
function TypeaheadOptionApi_tsickle_Closure_declarations() {
    /**
     * Returns the unique key value of the given option.
     * @type {?}
     */
    TypeaheadOptionApi.prototype.getKey;
    /**
     * Returns the display value of the given option.
     * @type {?}
     */
    TypeaheadOptionApi.prototype.getDisplay;
    /**
     * Returns the display value of the given option with HTML markup added to highlight the part which matches the current filter value. Override the ux-filter-match class in CSS to modify the default appearance.
     * @type {?}
     */
    TypeaheadOptionApi.prototype.getDisplayHtml;
}
/**
 * @record
 */
export function TypeaheadVisibleOption() { }
function TypeaheadVisibleOption_tsickle_Closure_declarations() {
    /** @type {?} */
    TypeaheadVisibleOption.prototype.value;
    /** @type {?} */
    TypeaheadVisibleOption.prototype.key;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZWFoZWFkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3R5cGVhaGVhZC90eXBlYWhlYWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFpQixpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBd0IsTUFBTSxFQUFpQixXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdNLE9BQU8sRUFBRSxlQUFlLEVBQUksWUFBWSxFQUFJLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN4RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV2RCxxQkFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDOztJQWlJYiw0QkFDVyxrQkFDQyxRQUNBO1FBSFosaUJBbUNDO1FBbENVLHFCQUFnQixHQUFoQixnQkFBZ0I7UUFDZixXQUFNLEdBQU4sTUFBTTtRQUNOLGFBQVEsR0FBUixRQUFRO2tCQTdEMEIsa0JBQWdCLEVBQUUsUUFBVTswQkFhbkQsSUFBSSxZQUFZLEVBQVc7NkJBS1YsTUFBTTt5QkFDakIsT0FBTzsrQkFDMEMsS0FBSztrQ0FDNUMsSUFBSTt3QkFDZixFQUFFOzJCQUNFLElBQUk7OEJBTVQsSUFBSSxZQUFZLEVBQXdCO2lDQUVyQyxJQUFJLFlBQVksRUFBTzt3Q0FDaEIsSUFBSSxZQUFZLEVBQWU7K0JBT2xELElBQUksZUFBZSxDQUEyQixFQUFFLENBQUM7dUJBQ3pELEtBQUs7d0JBQ0osS0FBSzs0QkFDRCxJQUFJLGVBQWUsQ0FBeUIs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QUFFLFNBQVM7d0JBQ2pCLGNBQWMsRUFBRSxNQUFNO3dCQUN0QixpQkFBaUIsRUFBRSx3QkFBd0I7d0JBQzNDLG1CQUFtQixFQUFFLFdBQVc7cUJBQ25DO2lCQUNKOzs7O2dCQTNFcUQsVUFBVTtnQkFBeEMsaUJBQWlCO2dCQUtoQyxnQkFBZ0I7Ozt1QkF5RXBCLEtBQUssWUFBSSxXQUFXLFNBQUMsU0FBUzs0QkFFOUIsS0FBSzsyQkFDTCxLQUFLO3lCQUVMLEtBQUssU0FBQyxNQUFNOytCQVFaLE1BQU07NEJBRU4sS0FBSzt3QkFDTCxLQUFLO29DQUNMLEtBQUs7a0NBQ0wsS0FBSzs4QkFDTCxLQUFLO29DQUNMLEtBQUssWUFBSSxXQUFXLFNBQUMsMkJBQTJCO3VDQUNoRCxLQUFLOzZCQUNMLEtBQUs7Z0NBQ0wsS0FBSztvQ0FFTCxLQUFLO21DQUNMLEtBQUs7c0NBQ0wsS0FBSzttQ0FFTCxNQUFNO3NDQUVOLE1BQU07NkNBQ04sTUFBTTs0Q0FFTixTQUFTLFNBQUMsd0JBQXdCOzJDQUNsQyxTQUFTLFNBQUMsdUJBQXVCOzhDQUNqQyxTQUFTLFNBQUMsMEJBQTBCO3FDQThGcEMsWUFBWSxTQUFDLFdBQVc7bUNBS3hCLFlBQVksU0FBQyxTQUFTOzs2QkFyTjNCOztTQTRFYSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCAsICBTdWJzY3JpcHRpb24gLCAgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgSW5maW5pdGVTY3JvbGxMb2FkRnVuY3Rpb24gfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2luZmluaXRlLXNjcm9sbC9pbmRleCc7XHJcbmltcG9ydCB7IFR5cGVhaGVhZE9wdGlvbkV2ZW50IH0gZnJvbSAnLi90eXBlYWhlYWQtZXZlbnQnO1xyXG5pbXBvcnQgeyBUeXBlYWhlYWRTZXJ2aWNlIH0gZnJvbSAnLi90eXBlYWhlYWQuc2VydmljZSc7XHJcblxyXG5sZXQgdW5pcXVlSWQgPSAwO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3V4LXR5cGVhaGVhZCcsXHJcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJ1eC10eXBlYWhlYWQtb3B0aW9uc1wiXHJcbiAgICBbdXhJbmZpbml0ZVNjcm9sbF09XCJsb2FkT3B0aW9uc0NhbGxiYWNrXCJcclxuICAgIFtjb2xsZWN0aW9uXT1cInZpc2libGVPcHRpb25zJCB8IGFzeW5jXCJcclxuICAgIChjb2xsZWN0aW9uQ2hhbmdlKT1cInZpc2libGVPcHRpb25zJC5uZXh0KCRldmVudClcIlxyXG4gICAgW2VuYWJsZWRdPVwiaXNJbmZpbml0ZVNjcm9sbCgpXCJcclxuICAgIFtmaWx0ZXJdPVwiZmlsdGVyXCJcclxuICAgIFtsb2FkT25TY3JvbGxdPVwidHJ1ZVwiXHJcbiAgICBbcGFnZVNpemVdPVwicGFnZVNpemVcIlxyXG4gICAgW3Njcm9sbEVsZW1lbnRdPVwidHlwZWFoZWFkRWxlbWVudFwiXHJcbiAgICAobG9hZGluZyk9XCJsb2FkaW5nID0gdHJ1ZVwiXHJcbiAgICAobG9hZGVkKT1cImxvYWRpbmcgPSBmYWxzZVwiPlxyXG5cclxuICAgIDxvbCAqbmdJZj1cIih2aXNpYmxlT3B0aW9ucyQgfCBhc3luYykubGVuZ3RoID4gMFwiPlxyXG4gICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mICh2aXNpYmxlT3B0aW9ucyQgfCBhc3luYyk7IGxldCBpID0gaW5kZXhcIlxyXG4gICAgICAgICAgICBbYXR0ci5pZF09XCJpZCArICctb3B0aW9uLScgKyBpXCJcclxuICAgICAgICAgICAgW2NsYXNzLmRpc2FibGVkXT1cImlzRGlzYWJsZWQob3B0aW9uKVwiXHJcbiAgICAgICAgICAgIFtjbGFzcy5oaWdobGlnaHRlZF09XCIoaGlnaGxpZ2h0ZWQkIHwgYXN5bmMpLmtleSA9PT0gb3B0aW9uLmtleVwiXHJcbiAgICAgICAgICAgIFthdHRyLmFyaWEtc2VsZWN0ZWRdPVwibXVsdGlzZWxlY3RhYmxlID8gaXNEaXNhYmxlZChvcHRpb24pIDogbnVsbFwiXHJcbiAgICAgICAgICAgIFt1eFR5cGVhaGVhZEhpZ2hsaWdodF09XCIoaGlnaGxpZ2h0ZWQkIHwgYXN5bmMpLmtleSA9PT0gb3B0aW9uLmtleVwiXHJcbiAgICAgICAgICAgIFt1eFNjcm9sbEludG9WaWV3SWZdPVwiKGhpZ2hsaWdodGVkJCB8IGFzeW5jKS5rZXkgPT09IG9wdGlvbi5rZXlcIlxyXG4gICAgICAgICAgICBbc2Nyb2xsUGFyZW50XT1cInR5cGVhaGVhZEVsZW1lbnQubmF0aXZlRWxlbWVudFwiXHJcbiAgICAgICAgICAgIChtb3VzZWRvd24pPVwib3B0aW9uTW91c2Vkb3duSGFuZGxlcigkZXZlbnQpXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cIm9wdGlvbkNsaWNrSGFuZGxlcigkZXZlbnQsIG9wdGlvbilcIlxyXG4gICAgICAgICAgICAobW91c2VvdmVyKT1cImhpZ2hsaWdodChvcHRpb24pXCI+XHJcblxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIm9wdGlvblRlbXBsYXRlXCJcclxuICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7b3B0aW9uOiBvcHRpb24udmFsdWUsIGFwaTogb3B0aW9uQXBpfVwiPlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgPC9saT5cclxuICAgIDwvb2w+XHJcblxyXG4gICAgPGRpdiAqdXhJbmZpbml0ZVNjcm9sbExvYWRpbmc+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJsb2FkaW5nVGVtcGxhdGVcIj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG5cclxuPC9kaXY+XHJcbjxkaXYgKm5nSWY9XCIodmlzaWJsZU9wdGlvbnMkIHwgYXN5bmMpLmxlbmd0aCA9PT0gMCAmJiAhbG9hZGluZ1wiPlxyXG4gICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJub09wdGlvbnNUZW1wbGF0ZVwiPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbjwvZGl2PlxyXG5cclxuPG5nLXRlbXBsYXRlICNkZWZhdWx0TG9hZGluZ1RlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cInV4LXR5cGVhaGVhZC1sb2FkaW5nXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXIgc3Bpbm5lci1hY2NlbnQgc3Bpbm5lci1ib3VuY2UtbWlkZGxlXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjZGVmYXVsdE9wdGlvblRlbXBsYXRlIGxldC1vcHRpb249XCJvcHRpb25cIiBsZXQtYXBpPVwiYXBpXCI+XHJcbiAgICA8c3BhbiBjbGFzcz1cInV4LXR5cGVhaGVhZC1vcHRpb25cIiBbaW5uZXJIdG1sXT1cImFwaS5nZXREaXNwbGF5SHRtbChvcHRpb24pXCI+PC9zcGFuPlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPG5nLXRlbXBsYXRlICNkZWZhdWx0Tm9PcHRpb25zVGVtcGxhdGU+XHJcbiAgICA8c3BhbiBjbGFzcz1cInV4LXR5cGVhaGVhZC1uby1vcHRpb25zXCI+Tm8gcmVzdWx0czwvc3Bhbj5cclxuPC9uZy10ZW1wbGF0ZT5gLFxyXG4gICAgcHJvdmlkZXJzOiBbVHlwZWFoZWFkU2VydmljZV0sXHJcbiAgICBob3N0OiB7XHJcbiAgICAgICAgJ3JvbGUnOiAnbGlzdGJveCcsXHJcbiAgICAgICAgJ1tjbGFzcy5vcGVuXSc6ICdvcGVuJyxcclxuICAgICAgICAnW2NsYXNzLmRyb3AtdXBdJzogJ2Ryb3BEaXJlY3Rpb24gPT09IFwidXBcIicsXHJcbiAgICAgICAgJ1tzdHlsZS5tYXhIZWlnaHRdJzogJ21heEhlaWdodCdcclxuICAgIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIFR5cGVhaGVhZENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuXHJcbiAgICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2F0dHIuaWQnKSBpZDogc3RyaW5nID0gYHV4LXR5cGVhaGVhZC0keysrdW5pcXVlSWR9YDtcclxuXHJcbiAgICBASW5wdXQoKSBvcHRpb25zOiBhbnlbXSB8IEluZmluaXRlU2Nyb2xsTG9hZEZ1bmN0aW9uO1xyXG4gICAgQElucHV0KCkgZmlsdGVyOiBzdHJpbmc7XHJcblxyXG4gICAgQElucHV0KCdvcGVuJylcclxuICAgIGdldCBvcGVuKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlLm9wZW4kLmdldFZhbHVlKCk7XHJcbiAgICB9XHJcbiAgICBzZXQgb3Blbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NlcnZpY2Uub3BlbiQubmV4dCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQE91dHB1dCgpIG9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gICAgQElucHV0KCkgZGlzcGxheTogKG9wdGlvbjogYW55KSA9PiBzdHJpbmcgfCBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBrZXk6IChvcHRpb246IGFueSkgPT4gc3RyaW5nIHwgc3RyaW5nO1xyXG4gICAgQElucHV0KCkgZGlzYWJsZWRPcHRpb25zOiBhbnlbXTtcclxuICAgIEBJbnB1dCgpIGRyb3BEaXJlY3Rpb246ICd1cCcgfCAnZG93bicgPSAnZG93bic7XHJcbiAgICBASW5wdXQoKSBtYXhIZWlnaHQ6IHN0cmluZyA9ICcyNTBweCc7XHJcbiAgICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1tdWx0aXNlbGVjdGFibGUnKSBtdWx0aXNlbGVjdGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIG9wZW5PbkZpbHRlckNoYW5nZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBwYWdlU2l6ZTogbnVtYmVyID0gMjA7XHJcbiAgICBASW5wdXQoKSBzZWxlY3RGaXJzdDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgQElucHV0KCkgbG9hZGluZ1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gICAgQElucHV0KCkgb3B0aW9uVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgICBASW5wdXQoKSBub09wdGlvbnNUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgICBAT3V0cHV0KCkgb3B0aW9uU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFR5cGVhaGVhZE9wdGlvbkV2ZW50PigpO1xyXG5cclxuICAgIEBPdXRwdXQoKSBoaWdobGlnaHRlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gICAgQE91dHB1dCgpIGhpZ2hsaWdodGVkRWxlbWVudENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8SFRNTEVsZW1lbnQ+KCk7XHJcblxyXG4gICAgQFZpZXdDaGlsZCgnZGVmYXVsdExvYWRpbmdUZW1wbGF0ZScpIHByaXZhdGUgX2RlZmF1bHRMb2FkaW5nVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgICBAVmlld0NoaWxkKCdkZWZhdWx0T3B0aW9uVGVtcGxhdGUnKSBwcml2YXRlIF9kZWZhdWx0T3B0aW9uVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgICBAVmlld0NoaWxkKCdkZWZhdWx0Tm9PcHRpb25zVGVtcGxhdGUnKSBwcml2YXRlIF9kZWZhdWx0Tm9PcHRpb25zVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gICAgbG9hZE9wdGlvbnNDYWxsYmFjazogSW5maW5pdGVTY3JvbGxMb2FkRnVuY3Rpb247XHJcbiAgICB2aXNpYmxlT3B0aW9ucyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFR5cGVhaGVhZFZpc2libGVPcHRpb25bXT4oW10pO1xyXG4gICAgbG9hZGluZyA9IGZhbHNlO1xyXG4gICAgY2xpY2tpbmcgPSBmYWxzZTtcclxuICAgIGhpZ2hsaWdodGVkJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8VHlwZWFoZWFkVmlzaWJsZU9wdGlvbj4obnVsbCk7XHJcblxyXG4gICAgZ2V0IGhpZ2hsaWdodGVkKCk6IGFueSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmhpZ2hsaWdodGVkJC5nZXRWYWx1ZSgpO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZSA/IHZhbHVlLnZhbHVlIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9vcGVuOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9zdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XHJcblxyXG4gICAgb3B0aW9uQXBpOiBUeXBlYWhlYWRPcHRpb25BcGkgPSB7XHJcbiAgICAgICAgZ2V0S2V5OiB0aGlzLmdldEtleS5iaW5kKHRoaXMpLFxyXG4gICAgICAgIGdldERpc3BsYXk6IHRoaXMuZ2V0RGlzcGxheS5iaW5kKHRoaXMpLFxyXG4gICAgICAgIGdldERpc3BsYXlIdG1sOiB0aGlzLmdldERpc3BsYXlIdG1sLmJpbmQodGhpcylcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHR5cGVhaGVhZEVsZW1lbnQ6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSBfY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgIHByaXZhdGUgX3NlcnZpY2U6IFR5cGVhaGVhZFNlcnZpY2VcclxuICAgICkge1xyXG5cclxuICAgICAgICB0aGlzLmxvYWRPcHRpb25zQ2FsbGJhY2sgPSAocGFnZU51bTogbnVtYmVyLCBwYWdlU2l6ZTogbnVtYmVyLCBmaWx0ZXI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucyhwYWdlTnVtLCBwYWdlU2l6ZSwgZmlsdGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb24uYWRkKFxyXG4gICAgICAgICAgICB0aGlzLl9zZXJ2aWNlLm9wZW4kLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSkuc3Vic2NyaWJlKChuZXh0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5DaGFuZ2UuZW1pdChuZXh0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobmV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdE9wdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb24uYWRkKFxyXG4gICAgICAgICAgICB0aGlzLmhpZ2hsaWdodGVkJC5zdWJzY3JpYmUoKG5leHQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0ZWRDaGFuZ2UuZW1pdChuZXh0ID8gbmV4dC52YWx1ZSA6IG51bGwpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbi5hZGQoXHJcbiAgICAgICAgICAgIGNvbWJpbmVMYXRlc3QodGhpcy5fc2VydmljZS5vcGVuJCwgdGhpcy5fc2VydmljZS5oaWdobGlnaHRlZEVsZW1lbnQkLCB0aGlzLnZpc2libGVPcHRpb25zJClcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKFtvcGVuLCBoaWdobGlnaHRlZEVsZW1lbnQsIHZpc2libGVPcHRpb25zXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0ZWRFbGVtZW50Q2hhbmdlLmVtaXQob3BlbiAmJiB2aXNpYmxlT3B0aW9ucy5sZW5ndGggPiAwID8gaGlnaGxpZ2h0ZWRFbGVtZW50IDogbnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIC8vIEF0dGFjaCBkZWZhdWx0IGxvYWRpbmcgdGVtcGxhdGVcclxuICAgICAgICBpZiAoIXRoaXMubG9hZGluZ1RlbXBsYXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGluZ1RlbXBsYXRlID0gdGhpcy5fZGVmYXVsdExvYWRpbmdUZW1wbGF0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEF0dGFjaCBkZWZhdWx0IG9wdGlvbiB0ZW1wbGF0ZVxyXG4gICAgICAgIGlmICghdGhpcy5vcHRpb25UZW1wbGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvblRlbXBsYXRlID0gdGhpcy5fZGVmYXVsdE9wdGlvblRlbXBsYXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQXR0YWNoIGRlZmF1bHQgXCJubyByZXN1bHRzXCIgdGVtcGxhdGVcclxuICAgICAgICBpZiAoIXRoaXMubm9PcHRpb25zVGVtcGxhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5ub09wdGlvbnNUZW1wbGF0ZSA9IHRoaXMuX2RlZmF1bHROb09wdGlvbnNUZW1wbGF0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2NkUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICAgICAgLy8gT3BlbiB0aGUgZHJvcGRvd24gaWYgdGhlIGZpbHRlciB2YWx1ZSB1cGRhdGVzXHJcbiAgICAgICAgaWYgKGNoYW5nZXMuZmlsdGVyKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wZW5PbkZpbHRlckNoYW5nZSAmJiBjaGFuZ2VzLmZpbHRlci5jdXJyZW50VmFsdWUgJiYgY2hhbmdlcy5maWx0ZXIuY3VycmVudFZhbHVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3BlbiA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFJlLWZpbHRlciB2aXNpYmxlT3B0aW9uc1xyXG4gICAgICAgIHRoaXMudXBkYXRlT3B0aW9ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlZG93bicpXHJcbiAgICBtb3VzZWRvd25IYW5kbGVyKCkge1xyXG4gICAgICAgIHRoaXMuY2xpY2tpbmcgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNldXAnKVxyXG4gICAgbW91c2V1cEhhbmRsZXIoKSB7XHJcbiAgICAgICAgdGhpcy5jbGlja2luZyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG9wdGlvbk1vdXNlZG93bkhhbmRsZXIoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICAvLyBXb3JrYXJvdW5kIHRvIHByZXZlbnQgZm9jdXMgY2hhbmdpbmcgd2hlbiBhbiBvcHRpb24gaXMgY2xpY2tlZFxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgb3B0aW9uQ2xpY2tIYW5kbGVyKGV2ZW50OiBNb3VzZUV2ZW50LCBvcHRpb246IFR5cGVhaGVhZFZpc2libGVPcHRpb24pIHtcclxuICAgICAgICB0aGlzLnNlbGVjdChvcHRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgdW5pcXVlIGtleSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gb3B0aW9uLlxyXG4gICAgICovXHJcbiAgICBnZXRLZXkob3B0aW9uOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5rZXkgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMua2V5KG9wdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5rZXkgPT09ICdzdHJpbmcnICYmIG9wdGlvbiAmJiBvcHRpb24uaGFzT3duUHJvcGVydHkodGhpcy5rZXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25bPHN0cmluZz50aGlzLmtleV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldERpc3BsYXkob3B0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIGRpc3BsYXkgdmFsdWUgb2YgdGhlIGdpdmVuIG9wdGlvbi5cclxuICAgICAqL1xyXG4gICAgZ2V0RGlzcGxheShvcHRpb246IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmRpc3BsYXkgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGlzcGxheShvcHRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuZGlzcGxheSA9PT0gJ3N0cmluZycgJiYgb3B0aW9uICYmIG9wdGlvbi5oYXNPd25Qcm9wZXJ0eSh0aGlzLmRpc3BsYXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25bPHN0cmluZz50aGlzLmRpc3BsYXldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb3B0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgZGlzcGxheSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gb3B0aW9uIHdpdGggSFRNTCBtYXJrdXAgYWRkZWQgdG8gaGlnaGxpZ2h0IHRoZSBwYXJ0IHdoaWNoIG1hdGNoZXMgdGhlIGN1cnJlbnQgZmlsdGVyIHZhbHVlLlxyXG4gICAgICogQHBhcmFtIG9wdGlvblxyXG4gICAgICovXHJcbiAgICBnZXREaXNwbGF5SHRtbChvcHRpb246IGFueSkge1xyXG4gICAgICAgIGxldCBkaXNwbGF5VGV4dDtcclxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgZGlzcGxheVRleHQgPSB0aGlzLmdldERpc3BsYXkob3B0aW9uKS5yZXBsYWNlKC8mL2csICcmYW1wOycpLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGlzcGxheVRleHQgPSB0aGlzLmdldERpc3BsYXkob3B0aW9uLm5hbWUpLnJlcGxhY2UoLyYvZywgJyZhbXA7JykucmVwbGFjZSgvPC9nLCAnJmx0OycpLnJlcGxhY2UoLz4vZywgJyZndDsnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGRpc3BsYXlIdG1sID0gZGlzcGxheVRleHQ7XHJcbiAgICAgICAgaWYgKHRoaXMuZmlsdGVyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuZmlsdGVyLmxlbmd0aDtcclxuICAgICAgICAgICAgY29uc3QgbWF0Y2hJbmRleCA9IGRpc3BsYXlUZXh0LnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLmZpbHRlci50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICAgICAgaWYgKG1hdGNoSW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGhpZ2hsaWdodCA9IGA8c3BhbiBjbGFzcz1cInV4LWZpbHRlci1tYXRjaFwiPiR7ZGlzcGxheVRleHQuc3Vic3RyKG1hdGNoSW5kZXgsIGxlbmd0aCl9PC9zcGFuPmA7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5SHRtbCA9IGRpc3BsYXlUZXh0LnN1YnN0cigwLCBtYXRjaEluZGV4KSArIGhpZ2hsaWdodCArIGRpc3BsYXlUZXh0LnN1YnN0cihtYXRjaEluZGV4ICsgbGVuZ3RoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGlzcGxheUh0bWw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGluZmluaXRlIHNjcm9sbCBjb21wb25lbnQgc2hvdWxkIGxvYWRcclxuICAgICAqL1xyXG4gICAgaXNJbmZpbml0ZVNjcm9sbCgpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHRoaXMub3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlbGVjdHMgdGhlIGdpdmVuIG9wdGlvbiwgZW1pdHRpbmcgdGhlIG9wdGlvblNlbGVjdGVkIGV2ZW50IGFuZCBjbG9zaW5nIHRoZSBkcm9wZG93bi5cclxuICAgICAqL1xyXG4gICAgc2VsZWN0KG9wdGlvbjogVHlwZWFoZWFkVmlzaWJsZU9wdGlvbikge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0Rpc2FibGVkKG9wdGlvbikpIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25TZWxlY3RlZC5lbWl0KG5ldyBUeXBlYWhlYWRPcHRpb25FdmVudChvcHRpb24udmFsdWUpKTtcclxuICAgICAgICAgICAgdGhpcy5oaWdobGlnaHRlZCQubmV4dChudWxsKTtcclxuICAgICAgICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBvcHRpb24gaXMgcGFydCBvZiB0aGUgZGlzYWJsZWRPcHRpb25zIGFycmF5LlxyXG4gICAgICovXHJcbiAgICBpc0Rpc2FibGVkKG9wdGlvbjogVHlwZWFoZWFkVmlzaWJsZU9wdGlvbik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkT3B0aW9ucykge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmRpc2FibGVkT3B0aW9ucy5maW5kKChzZWxlY3RlZE9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0S2V5KHNlbGVjdGVkT3B0aW9uKSA9PT0gb3B0aW9uLmtleTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQgIT09IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IHRoZSBnaXZlbiBvcHRpb24gYXMgdGhlIGN1cnJlbnQgaGlnaGxpZ2h0ZWQgb3B0aW9uLCBhdmFpbGFibGUgaW4gdGhlIGhpZ2hsaWdodGVkT3B0aW9uIHBhcmFtZXRlci5cclxuICAgICAqL1xyXG4gICAgaGlnaGxpZ2h0KG9wdGlvbjogVHlwZWFoZWFkVmlzaWJsZU9wdGlvbikge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0Rpc2FibGVkKG9wdGlvbikpIHtcclxuICAgICAgICAgICAgdGhpcy5oaWdobGlnaHRlZCQubmV4dChvcHRpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluY3JlbWVudCBvciBkZWNyZW1lbnQgdGhlIGhpZ2hsaWdodGVkIG9wdGlvbiBpbiB0aGUgbGlzdC4gRGlzYWJsZWQgb3B0aW9ucyBhcmUgc2tpcHBlZC5cclxuICAgICAqIEBwYXJhbSBkIFZhbHVlIHRvIGJlIGFkZGVkIHRvIHRoZSBpbmRleCBvZiB0aGUgaGlnaGxpZ2h0ZWQgb3B0aW9uLCBpLmUuIC0xIHRvIG1vdmUgYmFja3dhcmRzLCArMSB0byBtb3ZlIGZvcndhcmRzLlxyXG4gICAgICovXHJcbiAgICBtb3ZlSGlnaGxpZ2h0KGQ6IG51bWJlcik6IGFueSB7XHJcbiAgICAgICAgY29uc3QgdmlzaWJsZU9wdGlvbnMgPSB0aGlzLnZpc2libGVPcHRpb25zJC5nZXRWYWx1ZSgpO1xyXG4gICAgICAgIGNvbnN0IGhpZ2hsaWdodEluZGV4ID0gdGhpcy5pbmRleE9mVmlzaWJsZU9wdGlvbih0aGlzLmhpZ2hsaWdodGVkKTtcclxuICAgICAgICBsZXQgbmV3SW5kZXggPSBoaWdobGlnaHRJbmRleDtcclxuICAgICAgICBsZXQgZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGxldCBpbkJvdW5kcyA9IHRydWU7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICsgZDtcclxuICAgICAgICAgICAgaW5Cb3VuZHMgPSAobmV3SW5kZXggPj0gMCAmJiBuZXdJbmRleCA8IHZpc2libGVPcHRpb25zLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGRpc2FibGVkID0gaW5Cb3VuZHMgJiYgdGhpcy5pc0Rpc2FibGVkKHZpc2libGVPcHRpb25zW25ld0luZGV4XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlIChpbkJvdW5kcyAmJiBkaXNhYmxlZCk7XHJcblxyXG4gICAgICAgIGlmICghZGlzYWJsZWQgJiYgaW5Cb3VuZHMpIHtcclxuICAgICAgICAgICAgdGhpcy5oaWdobGlnaHRlZCQubmV4dCh2aXNpYmxlT3B0aW9uc1tuZXdJbmRleF0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGlnaGxpZ2h0ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdXAgdGhlIG9wdGlvbnMgYmVmb3JlIHRoZSBkcm9wZG93biBpcyBkaXNwbGF5ZWQuXHJcbiAgICAgKi9cclxuICAgIGluaXRPcHRpb25zKCkge1xyXG4gICAgICAgIC8vIENsZWFyIHByZXZpb3VzIGhpZ2hsaWdodFxyXG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0ZWQkLm5leHQobnVsbCk7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0Rmlyc3QpIHtcclxuICAgICAgICAgICAgLy8gVGhpcyB3aWxsIGhpZ2hsaWdodCB0aGUgZmlyc3Qgbm9uLWRpc2FibGVkIG9wdGlvbi5cclxuICAgICAgICAgICAgdGhpcy5tb3ZlSGlnaGxpZ2h0KDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSB0aGUgdmlzaWJsZU9wdGlvbnMgYXJyYXkgd2l0aCB0aGUgY3VycmVudCBmaWx0ZXIuXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZU9wdGlvbnMoKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbGlzZWRJbnB1dCA9ICh0aGlzLmZpbHRlciB8fCAnJykudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgY29uc3QgdmlzaWJsZU9wdGlvbnMgPSB0aGlzLm9wdGlvbnNcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldERpc3BsYXkob3B0aW9uKS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yobm9ybWFsaXNlZElucHV0KSA+PSAwO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5tYXAoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHRoaXMuZ2V0S2V5KHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy52aXNpYmxlT3B0aW9ucyQubmV4dCh2aXNpYmxlT3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmluaXRPcHRpb25zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm4gdGhlIGluZGV4IG9mIHRoZSBnaXZlbiBvcHRpb24gaW4gdGhlIHZpc2libGVPcHRpb25zIGFycmF5LiBSZXR1cm5zIC0xIGlmIHRoZSBvcHRpb24gaXMgbm90IGN1cnJlbnRseSB2aXNpYmxlLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGluZGV4T2ZWaXNpYmxlT3B0aW9uKG9wdGlvbjogYW55KTogbnVtYmVyIHtcclxuICAgICAgICBpZiAob3B0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbktleSA9IHRoaXMuZ2V0S2V5KG9wdGlvbik7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZpc2libGVPcHRpb25zJC5nZXRWYWx1ZSgpLmZpbmRJbmRleCgoZWwpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbC5rZXkgPT09IG9wdGlvbktleTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgQVBJIGF2YWlsYWJsZSB0byBvcHRpb24gdGVtcGxhdGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBUeXBlYWhlYWRPcHRpb25BcGkge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgdW5pcXVlIGtleSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gb3B0aW9uLlxyXG4gICAgICovXHJcbiAgICBnZXRLZXkob3B0aW9uOiBhbnkpOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBkaXNwbGF5IHZhbHVlIG9mIHRoZSBnaXZlbiBvcHRpb24uXHJcbiAgICAgKi9cclxuICAgIGdldERpc3BsYXkob3B0aW9uOiBhbnkpOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBkaXNwbGF5IHZhbHVlIG9mIHRoZSBnaXZlbiBvcHRpb24gd2l0aCBIVE1MIG1hcmt1cCBhZGRlZCB0byBoaWdobGlnaHQgdGhlIHBhcnQgd2hpY2ggbWF0Y2hlcyB0aGUgY3VycmVudCBmaWx0ZXIgdmFsdWUuIE92ZXJyaWRlIHRoZSB1eC1maWx0ZXItbWF0Y2ggY2xhc3MgaW4gQ1NTIHRvIG1vZGlmeSB0aGUgZGVmYXVsdCBhcHBlYXJhbmNlLlxyXG4gICAgICovXHJcbiAgICBnZXREaXNwbGF5SHRtbChvcHRpb246IGFueSk6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUeXBlYWhlYWRWaXNpYmxlT3B0aW9uIHtcclxuICAgIHZhbHVlOiBhbnk7XHJcbiAgICBrZXk6IHN0cmluZztcclxufSJdfQ==