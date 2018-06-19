/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ContentChildren, Directive, ElementRef, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { BehaviorSubject, from, fromEvent, of, Subject } from 'rxjs';
import { auditTime, combineLatest, filter as filterOperator, first, takeUntil } from 'rxjs/operators';
import { InfiniteScrollLoadButtonDirective } from './infinite-scroll-load-button.directive';
import { InfiniteScrollLoadingDirective } from './infinite-scroll-loading.directive';
export class InfiniteScrollDirective {
    /**
     * @param {?} _element
     */
    constructor(_element) {
        this._element = _element;
        this._collection = [];
        this.enabled = true;
        this.loadOnInit = true;
        this.loadOnScroll = true;
        this.pageSize = 20;
        this.collectionChange = new EventEmitter();
        this.loadingEvent = new EventEmitter();
        this.loadedEvent = new EventEmitter();
        this.loadErrorEvent = new EventEmitter();
        this._nextPageNum = 0;
        this._updateRequests = new Subject();
        this._isLoading = new BehaviorSubject(false);
        this._isExhausted = new BehaviorSubject(false);
        this._loadButtonEnabled = new BehaviorSubject(false);
        this._subscriptions = [];
        this._loadButtonSubscriptions = [];
        this._onDestroy = new Subject();
        this._canLoadManually = this._isLoading.pipe(combineLatest(this._isExhausted, this._loadButtonEnabled, (isLoading, isExhausted, loadButtonEnabled) => {
            return !isLoading && !isExhausted && loadButtonEnabled;
        }));
    }
    /**
     * @return {?}
     */
    get collection() {
        return this._collection;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set collection(value) {
        this.collectionChange.emit(value);
        this._collection = value;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    set scrollElement(element) {
        this._scrollElement = element instanceof ElementRef ? element : new ElementRef(element);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this._scrollElement) {
            this._scrollElement = this._element;
        }
        this._loadButtonEnabled.next(!this.loadOnScroll);
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        // There are two kinds of update requests: check and load.
        // Check requests are throttled and will only cause an update if more data is required
        // to fill the scrolling view, and it isn't already loading some.
        // Load requests are not throttled and always request a page of data.
        this._updateRequests.pipe(filterOperator(request => request.check), auditTime(200), takeUntil(this._onDestroy)).subscribe(this.doRequest.bind(this));
        this._updateRequests.pipe(filterOperator(request => !request.check), takeUntil(this._onDestroy)).subscribe(this.doRequest.bind(this));
        if (this.enabled) {
            // Subscribe to scroll events and DOM changes.
            this.attachEventHandlers();
        }
        // Connect the Load More button visible state.
        this._canLoadManually.pipe(takeUntil(this._onDestroy)).subscribe(canLoad => {
            this._loadButtonQuery.forEach(loadButton => {
                loadButton.visible = canLoad;
            });
        });
        // Connect the loading indicator visible state.
        this._isLoading.pipe(takeUntil(this._onDestroy)).subscribe(isLoading => {
            this._loadingIndicatorQuery.forEach(loading => {
                loading.visible = isLoading;
            });
        });
        // Link the Load More button click event to trigger an update.
        this.attachLoadButtonEvents();
        this._loadButtonQuery.changes.pipe(takeUntil(this._onDestroy)).subscribe(() => {
            this.attachLoadButtonEvents();
        });
        // Initial update.
        if (this.loadOnInit) {
            this.loadNextPage();
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        let /** @type {?} */ check = true;
        if (changes["enabled"] && changes["enabled"].currentValue !== changes["enabled"].previousValue) {
            if (changes["enabled"].currentValue) {
                this.attachEventHandlers();
                this.reset();
                check = false;
            }
            else {
                this.detachEventHandlers();
            }
        }
        if (this.enabled) {
            if (changes["filter"] && changes["filter"].currentValue !== changes["filter"].previousValue) {
                this.reset();
                check = false;
            }
            if (changes["loadOnScroll"]) {
                this._loadButtonEnabled.next(!changes["loadOnScroll"].currentValue);
            }
            if (changes["pageSize"] && changes["pageSize"].currentValue !== changes["pageSize"].previousValue) {
                this.reset();
                check = false;
            }
            this._updateRequests.next({
                check: check,
                pageNumber: this._nextPageNum,
                pageSize: this.pageSize,
                filter: this.filter
            });
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.detachEventHandlers();
        this._onDestroy.next();
        this._onDestroy.complete();
    }
    /**
     * Request an additional page of data.
     * @return {?}
     */
    loadNextPage() {
        if (!this.enabled) {
            return;
        }
        this._updateRequests.next({
            check: false,
            pageNumber: this._nextPageNum,
            pageSize: this.pageSize,
            filter: this.filter
        });
    }
    /**
     * Request a check for whether an additional page of data is required. This is throttled.
     * @return {?}
     */
    check() {
        if (!this.enabled) {
            return;
        }
        this._updateRequests.next({
            check: true,
            pageNumber: this._nextPageNum,
            pageSize: this.pageSize,
            filter: this.filter
        });
    }
    /**
     * Clear the collection. Future requests will load from page 0.
     * @return {?}
     */
    reset() {
        if (!this.enabled) {
            return;
        }
        // Reset the page counter.
        this._nextPageNum = 0;
        this._pages = [];
        // Clear the collection (without changing the reference).
        if (this.collection) {
            this.collection.length = 0;
        }
        // Reset the exhausted flag, allowing the Load More button to appear.
        this._isExhausted.next(false);
        // Cancel any pending requests
        if (this._subscriptions) {
            this._subscriptions.forEach(request => request.unsubscribe());
        }
    }
    /**
     * Reload the data without clearing the view.
     * @return {?}
     */
    reload() {
        this._pages.forEach((page, i) => this.reloadPage(i));
    }
    /**
     * Reload the data in a specific page without clearing the view.
     * @param {?} pageNum Page number
     * @return {?}
     */
    reloadPage(pageNum) {
        if (!this.enabled) {
            return;
        }
        this._updateRequests.next({
            check: false,
            pageNumber: pageNum,
            pageSize: this.pageSize,
            filter: this.filter,
            reload: true
        });
    }
    /**
     * Attach scroll event handler and DOM observer.
     * @return {?}
     */
    attachEventHandlers() {
        // if the scrollElement is documentElement we must watch for a scroll event on the document
        const /** @type {?} */ target = this._scrollElement.nativeElement instanceof HTMLHtmlElement ? document : this._scrollElement.nativeElement;
        // Subscribe to the scroll event on the target element.
        this._scrollEventSub = fromEvent(target, 'scroll').subscribe(this.check.bind(this));
        // Subscribe to child DOM changes. The main effect of this is to check whether even more data is
        // required after the initial load.
        this._domObserver = new MutationObserver(this.check.bind(this));
        this._domObserver.observe(this._scrollElement.nativeElement, {
            childList: true,
            subtree: true
        });
    }
    /**
     * Detach scroll event handler and DOM observer.
     * @return {?}
     */
    detachEventHandlers() {
        if (this._scrollEventSub) {
            this._scrollEventSub.unsubscribe();
            this._scrollEventSub = null;
        }
        if (this._domObserver) {
            this._domObserver.disconnect();
            this._domObserver = null;
        }
    }
    /**
     * Remove any existing event subscriptions for the load button `load` event, then attach subscriptions
     * for any in the query.
     * @return {?}
     */
    attachLoadButtonEvents() {
        this._loadButtonSubscriptions.forEach(s => s.unsubscribe());
        this._loadButtonSubscriptions = this._loadButtonQuery.map(loadButton => loadButton.load.subscribe(this.loadNextPage.bind(this)));
    }
    /**
     * Conditionally loads a page into the collection based on directive state and request parameters.
     * @param {?} request
     * @return {?}
     */
    doRequest(request) {
        // Load a new page if the scroll position is beyond the threshhold and if the client code did not
        // cancel.
        if (this.needsData(request) && this.beginLoading(request)) {
            // Invoke the callback load function, which returns a promose or plain data.
            const /** @type {?} */ loadResult = this.load(request.pageNumber, request.pageSize, request.filter);
            const /** @type {?} */ observable = Array.isArray(loadResult) ? of(loadResult) : from(loadResult);
            const /** @type {?} */ subscription = observable.pipe(first()).subscribe(items => {
                // Make sure that the parameters have not changed since the load started;
                // otherwise discard the results.
                if (request.filter === this.filter && request.pageSize === this.pageSize) {
                    if (items && items.length) {
                        this.setPageItems(request.pageNumber, items);
                    }
                    // Emit the loaded event
                    this.endLoading(request, items);
                }
            }, reason => {
                // Emit the loadError event
                this.endLoadingWithError(request, reason);
            }, () => {
                // remove this request from the list
                this._subscriptions = this._subscriptions.filter(s => s !== subscription);
            });
            // add the subscription to the list of requests
            this._subscriptions.push(subscription);
        }
    }
    /**
     * Returns true if the request should be fulfilled.
     * @param {?} request
     * @return {?}
     */
    needsData(request) {
        if (!this.enabled) {
            return false;
        }
        // Always load for a load request
        if (!request.check) {
            return true;
        }
        // Ignore a check request when the end of data has been detected, or if data is currently loading.
        if (this._isExhausted.getValue() || this._isLoading.getValue()) {
            return false;
        }
        // Load if the remaining scroll area is <= the element height.
        if (this._scrollElement && this.loadOnScroll) {
            const /** @type {?} */ element = /** @type {?} */ (this._scrollElement.nativeElement);
            const /** @type {?} */ remainingScroll = element.scrollHeight -
                (element.scrollTop + element.clientHeight);
            return remainingScroll <= element.clientHeight;
        }
        return false;
    }
    /**
     * Updates state for the beginning of a load. Returns false if the `loading` event was cancelled.
     * @param {?} request
     * @return {?}
     */
    beginLoading(request) {
        const /** @type {?} */ event = new InfiniteScrollLoadingEvent(request.pageNumber, request.pageSize, request.filter);
        this.loadingEvent.emit(event);
        this._isLoading.next(!event.defaultPrevented());
        return !event.defaultPrevented();
    }
    /**
     * @param {?} pageNum
     * @param {?} items
     * @return {?}
     */
    setPageItems(pageNum, items) {
        this._pages[pageNum] = items;
        this.collection = this._pages.reduce((previous, current) => previous.concat(current), []);
    }
    /**
     * Updates state from a successful load. Raises the `loaded` event.
     * @param {?} request
     * @param {?=} data
     * @return {?}
     */
    endLoading(request, data) {
        this._isLoading.next(false);
        const /** @type {?} */ isExhausted = !!(data && data.length < this.pageSize);
        this._isExhausted.next(isExhausted);
        this.loadedEvent.emit(new InfiniteScrollLoadedEvent(request.pageNumber, request.pageSize, request.filter, data, isExhausted));
        if (!request.reload) {
            this._nextPageNum += 1;
        }
    }
    /**
     * Updates state from a failed load. Raises the `loadError` event.
     * @param {?} request
     * @param {?} error
     * @return {?}
     */
    endLoadingWithError(request, error) {
        this._isLoading.next(false);
        this.loadErrorEvent.emit(new InfiniteScrollLoadErrorEvent(request.pageNumber, request.pageSize, request.filter, error));
    }
}
InfiniteScrollDirective.decorators = [
    { type: Directive, args: [{
                selector: '[uxInfiniteScroll]',
                exportAs: 'uxInfiniteScroll'
            },] },
];
/** @nocollapse */
InfiniteScrollDirective.ctorParameters = () => [
    { type: ElementRef, },
];
InfiniteScrollDirective.propDecorators = {
    "load": [{ type: Input, args: ['uxInfiniteScroll',] },],
    "_collection": [{ type: Input, args: ['collection',] },],
    "scrollElement": [{ type: Input },],
    "enabled": [{ type: Input },],
    "filter": [{ type: Input },],
    "loadOnInit": [{ type: Input },],
    "loadOnScroll": [{ type: Input },],
    "pageSize": [{ type: Input },],
    "collectionChange": [{ type: Output },],
    "loadingEvent": [{ type: Output, args: ['loading',] },],
    "loadedEvent": [{ type: Output, args: ['loaded',] },],
    "loadErrorEvent": [{ type: Output, args: ['loadError',] },],
    "_loadButtonQuery": [{ type: ContentChildren, args: [InfiniteScrollLoadButtonDirective,] },],
    "_loadingIndicatorQuery": [{ type: ContentChildren, args: [InfiniteScrollLoadingDirective,] },],
};
function InfiniteScrollDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    InfiniteScrollDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    InfiniteScrollDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    InfiniteScrollDirective.propDecorators;
    /** @type {?} */
    InfiniteScrollDirective.prototype.load;
    /** @type {?} */
    InfiniteScrollDirective.prototype._collection;
    /** @type {?} */
    InfiniteScrollDirective.prototype.enabled;
    /** @type {?} */
    InfiniteScrollDirective.prototype.filter;
    /** @type {?} */
    InfiniteScrollDirective.prototype.loadOnInit;
    /** @type {?} */
    InfiniteScrollDirective.prototype.loadOnScroll;
    /** @type {?} */
    InfiniteScrollDirective.prototype.pageSize;
    /** @type {?} */
    InfiniteScrollDirective.prototype.collectionChange;
    /** @type {?} */
    InfiniteScrollDirective.prototype.loadingEvent;
    /** @type {?} */
    InfiniteScrollDirective.prototype.loadedEvent;
    /** @type {?} */
    InfiniteScrollDirective.prototype.loadErrorEvent;
    /** @type {?} */
    InfiniteScrollDirective.prototype._loadButtonQuery;
    /** @type {?} */
    InfiniteScrollDirective.prototype._loadingIndicatorQuery;
    /** @type {?} */
    InfiniteScrollDirective.prototype._pages;
    /** @type {?} */
    InfiniteScrollDirective.prototype._nextPageNum;
    /** @type {?} */
    InfiniteScrollDirective.prototype._domObserver;
    /** @type {?} */
    InfiniteScrollDirective.prototype._scrollEventSub;
    /** @type {?} */
    InfiniteScrollDirective.prototype._updateRequests;
    /** @type {?} */
    InfiniteScrollDirective.prototype._isLoading;
    /** @type {?} */
    InfiniteScrollDirective.prototype._isExhausted;
    /** @type {?} */
    InfiniteScrollDirective.prototype._loadButtonEnabled;
    /** @type {?} */
    InfiniteScrollDirective.prototype._canLoadManually;
    /** @type {?} */
    InfiniteScrollDirective.prototype._scrollElement;
    /** @type {?} */
    InfiniteScrollDirective.prototype._subscriptions;
    /** @type {?} */
    InfiniteScrollDirective.prototype._loadButtonSubscriptions;
    /** @type {?} */
    InfiniteScrollDirective.prototype._onDestroy;
    /** @type {?} */
    InfiniteScrollDirective.prototype._element;
}
/**
 * The internal data associated with a load/check request.
 */
class InfiniteScrollRequest {
}
function InfiniteScrollRequest_tsickle_Closure_declarations() {
    /** @type {?} */
    InfiniteScrollRequest.prototype.check;
    /** @type {?} */
    InfiniteScrollRequest.prototype.pageNumber;
    /** @type {?} */
    InfiniteScrollRequest.prototype.pageSize;
    /** @type {?} */
    InfiniteScrollRequest.prototype.filter;
    /** @type {?} */
    InfiniteScrollRequest.prototype.reload;
}
/**
 * Event raised before the `loading` function is called.
 */
export class InfiniteScrollLoadingEvent {
    /**
     * @param {?} pageNumber
     * @param {?} pageSize
     * @param {?} filter
     */
    constructor(pageNumber, pageSize, filter) {
        this.pageNumber = pageNumber;
        this.pageSize = pageSize;
        this.filter = filter;
        this._defaultPrevented = false;
    }
    /**
     * Prevents the default behaviour of the `loading` event (loading function will not be called).
     * @return {?}
     */
    preventDefault() {
        this._defaultPrevented = true;
    }
    /**
     * @return {?}
     */
    defaultPrevented() {
        return this._defaultPrevented;
    }
}
function InfiniteScrollLoadingEvent_tsickle_Closure_declarations() {
    /** @type {?} */
    InfiniteScrollLoadingEvent.prototype._defaultPrevented;
    /**
     * The index of the requested page, starting from 0.
     * @type {?}
     */
    InfiniteScrollLoadingEvent.prototype.pageNumber;
    /**
     * The number of items requested.
     * @type {?}
     */
    InfiniteScrollLoadingEvent.prototype.pageSize;
    /**
     * The filter details as provided via the `filter` binding.
     * @type {?}
     */
    InfiniteScrollLoadingEvent.prototype.filter;
}
/**
 * Event raised when the loading function result has been resolved and added to the collection.
 */
export class InfiniteScrollLoadedEvent {
    /**
     * @param {?} pageNumber
     * @param {?} pageSize
     * @param {?} filter
     * @param {?} data
     * @param {?} exhausted
     */
    constructor(pageNumber, pageSize, filter, data, exhausted) {
        this.pageNumber = pageNumber;
        this.pageSize = pageSize;
        this.filter = filter;
        this.data = data;
        this.exhausted = exhausted;
    }
}
function InfiniteScrollLoadedEvent_tsickle_Closure_declarations() {
    /**
     * The index of the requested page, starting from 0.
     * @type {?}
     */
    InfiniteScrollLoadedEvent.prototype.pageNumber;
    /**
     * The number of items requested.
     * @type {?}
     */
    InfiniteScrollLoadedEvent.prototype.pageSize;
    /**
     * The filter details as provided via the `filter` binding.
     * @type {?}
     */
    InfiniteScrollLoadedEvent.prototype.filter;
    /**
     * The result of the promise returned from the loading function.
     * @type {?}
     */
    InfiniteScrollLoadedEvent.prototype.data;
    /**
     * True if the data is considered exhausted (number of items returned less than `pageSize`).
     * @type {?}
     */
    InfiniteScrollLoadedEvent.prototype.exhausted;
}
/**
 * Event raised if the loading function returns a rejected promise.
 */
export class InfiniteScrollLoadErrorEvent {
    /**
     * @param {?} pageNumber
     * @param {?} pageSize
     * @param {?} filter
     * @param {?} error
     */
    constructor(pageNumber, pageSize, filter, error) {
        this.pageNumber = pageNumber;
        this.pageSize = pageSize;
        this.filter = filter;
        this.error = error;
    }
}
function InfiniteScrollLoadErrorEvent_tsickle_Closure_declarations() {
    /**
     * The index of the requested page, starting from 0.
     * @type {?}
     */
    InfiniteScrollLoadErrorEvent.prototype.pageNumber;
    /**
     * The number of items requested.
     * @type {?}
     */
    InfiniteScrollLoadErrorEvent.prototype.pageSize;
    /**
     * The filter details as provided via the `filter` binding.
     * @type {?}
     */
    InfiniteScrollLoadErrorEvent.prototype.filter;
    /**
     * The object provided when rejecting the promise.
     * @type {?}
     */
    InfiniteScrollLoadErrorEvent.prototype.error;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5maW5pdGUtc2Nyb2xsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL2luZmluaXRlLXNjcm9sbC9pbmZpbml0ZS1zY3JvbGwuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQW9CLGVBQWUsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWdDLE1BQU0sRUFBRSxTQUFTLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQzlLLE9BQU8sRUFBRSxlQUFlLEVBQWtCLElBQUksRUFBSSxTQUFTLEVBQUksRUFBRSxFQUFJLE9BQU8sRUFBa0IsTUFBTSxNQUFNLENBQUM7QUFDM0csT0FBTyxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsTUFBTSxJQUFJLGNBQWMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEcsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDNUYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFNckYsTUFBTTs7OztJQXlERixZQUFvQixRQUFvQjtRQUFwQixhQUFRLEdBQVIsUUFBUSxDQUFZOzJCQXJERSxFQUFFO3VCQWNoQixJQUFJOzBCQUVELElBQUk7NEJBQ0YsSUFBSTt3QkFDVCxFQUFFO2dDQUVELElBQUksWUFBWSxFQUFTOzRCQUd2QyxJQUFJLFlBQVksRUFBOEI7MkJBRy9DLElBQUksWUFBWSxFQUE2Qjs4QkFHMUMsSUFBSSxZQUFZLEVBQWdDOzRCQVMxQyxDQUFDOytCQUdFLElBQUksT0FBTyxFQUF5QjswQkFFekMsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDOzRCQUNqQyxJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUM7a0NBQzdCLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQzs4QkFJ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QU4sTUFBTTtpQ0FkVyxLQUFLO0tBZTVCOzs7OztJQUtMLGNBQWM7UUFDVixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO0tBQ2pDOzs7O0lBRUQsZ0JBQWdCO1FBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztLQUNqQztDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtELE1BQU07Ozs7Ozs7O0lBQ0YsWUFJVyxZQUlBLFVBSUEsUUFJQSxNQUlBO1FBaEJBLGVBQVUsR0FBVixVQUFVO1FBSVYsYUFBUSxHQUFSLFFBQVE7UUFJUixXQUFNLEdBQU4sTUFBTTtRQUlOLFNBQUksR0FBSixJQUFJO1FBSUosY0FBUyxHQUFULFNBQVM7S0FDZjtDQUNSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0QsTUFBTTs7Ozs7OztJQUNGLFlBSVcsWUFJQSxVQUlBLFFBSUE7UUFaQSxlQUFVLEdBQVYsVUFBVTtRQUlWLGFBQVEsR0FBUixRQUFRO1FBSVIsV0FBTSxHQUFOLE1BQU07UUFJTixVQUFLLEdBQUwsS0FBSztLQUNYO0NBQ1IiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgQ29udGVudENoaWxkcmVuLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgUXVlcnlMaXN0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCAsICBPYnNlcnZhYmxlICwgIGZyb20gLCAgZnJvbUV2ZW50ICwgIG9mICwgIFN1YmplY3QgLCAgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGF1ZGl0VGltZSwgY29tYmluZUxhdGVzdCwgZmlsdGVyIGFzIGZpbHRlck9wZXJhdG9yLCBmaXJzdCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBJbmZpbml0ZVNjcm9sbExvYWRCdXR0b25EaXJlY3RpdmUgfSBmcm9tICcuL2luZmluaXRlLXNjcm9sbC1sb2FkLWJ1dHRvbi5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBJbmZpbml0ZVNjcm9sbExvYWRpbmdEaXJlY3RpdmUgfSBmcm9tICcuL2luZmluaXRlLXNjcm9sbC1sb2FkaW5nLmRpcmVjdGl2ZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW3V4SW5maW5pdGVTY3JvbGxdJyxcclxuICAgIGV4cG9ydEFzOiAndXhJbmZpbml0ZVNjcm9sbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEluZmluaXRlU2Nyb2xsRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcblxyXG4gICAgQElucHV0KCd1eEluZmluaXRlU2Nyb2xsJykgbG9hZDogSW5maW5pdGVTY3JvbGxMb2FkRnVuY3Rpb247XHJcblxyXG4gICAgQElucHV0KCdjb2xsZWN0aW9uJykgX2NvbGxlY3Rpb246IGFueVtdID0gW107XHJcbiAgICBnZXQgY29sbGVjdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29sbGVjdGlvbjtcclxuICAgIH1cclxuICAgIHNldCBjb2xsZWN0aW9uKHZhbHVlOiBhbnlbXSkge1xyXG4gICAgICAgIHRoaXMuY29sbGVjdGlvbkNoYW5nZS5lbWl0KHZhbHVlKTtcclxuICAgICAgICB0aGlzLl9jb2xsZWN0aW9uID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIEBJbnB1dCgpIHNldCBzY3JvbGxFbGVtZW50KGVsZW1lbnQ6IEVsZW1lbnRSZWYgfCBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuX3Njcm9sbEVsZW1lbnQgPSBlbGVtZW50IGluc3RhbmNlb2YgRWxlbWVudFJlZiA/IGVsZW1lbnQgOiBuZXcgRWxlbWVudFJlZihlbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKSBlbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgpIGZpbHRlcjogYW55O1xyXG4gICAgQElucHV0KCkgbG9hZE9uSW5pdDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBsb2FkT25TY3JvbGw6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgQElucHV0KCkgcGFnZVNpemU6IG51bWJlciA9IDIwO1xyXG5cclxuICAgIEBPdXRwdXQoKSBjb2xsZWN0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnlbXT4oKTtcclxuXHJcbiAgICBAT3V0cHV0KCdsb2FkaW5nJylcclxuICAgIGxvYWRpbmdFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8SW5maW5pdGVTY3JvbGxMb2FkaW5nRXZlbnQ+KCk7XHJcblxyXG4gICAgQE91dHB1dCgnbG9hZGVkJylcclxuICAgIGxvYWRlZEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxJbmZpbml0ZVNjcm9sbExvYWRlZEV2ZW50PigpO1xyXG5cclxuICAgIEBPdXRwdXQoJ2xvYWRFcnJvcicpXHJcbiAgICBsb2FkRXJyb3JFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8SW5maW5pdGVTY3JvbGxMb2FkRXJyb3JFdmVudD4oKTtcclxuXHJcbiAgICBAQ29udGVudENoaWxkcmVuKEluZmluaXRlU2Nyb2xsTG9hZEJ1dHRvbkRpcmVjdGl2ZSlcclxuICAgIHByaXZhdGUgX2xvYWRCdXR0b25RdWVyeTogUXVlcnlMaXN0PEluZmluaXRlU2Nyb2xsTG9hZEJ1dHRvbkRpcmVjdGl2ZT47XHJcblxyXG4gICAgQENvbnRlbnRDaGlsZHJlbihJbmZpbml0ZVNjcm9sbExvYWRpbmdEaXJlY3RpdmUpXHJcbiAgICBwcml2YXRlIF9sb2FkaW5nSW5kaWNhdG9yUXVlcnk6IFF1ZXJ5TGlzdDxJbmZpbml0ZVNjcm9sbExvYWRpbmdEaXJlY3RpdmU+O1xyXG5cclxuICAgIHByaXZhdGUgX3BhZ2VzOiBhbnlbXVtdO1xyXG4gICAgcHJpdmF0ZSBfbmV4dFBhZ2VOdW0gPSAwO1xyXG4gICAgcHJpdmF0ZSBfZG9tT2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXI7XHJcbiAgICBwcml2YXRlIF9zY3JvbGxFdmVudFN1YjogU3Vic2NyaXB0aW9uO1xyXG4gICAgcHJpdmF0ZSBfdXBkYXRlUmVxdWVzdHMgPSBuZXcgU3ViamVjdDxJbmZpbml0ZVNjcm9sbFJlcXVlc3Q+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfaXNMb2FkaW5nID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XHJcbiAgICBwcml2YXRlIF9pc0V4aGF1c3RlZCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgcHJpdmF0ZSBfbG9hZEJ1dHRvbkVuYWJsZWQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIHByaXZhdGUgX2NhbkxvYWRNYW51YWxseTogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuXHJcbiAgICBwcml2YXRlIF9zY3JvbGxFbGVtZW50OiBFbGVtZW50UmVmO1xyXG4gICAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcclxuICAgIHByaXZhdGUgX2xvYWRCdXR0b25TdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfb25EZXN0cm95ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50UmVmKSB7XHJcbiAgICAgICAgdGhpcy5fY2FuTG9hZE1hbnVhbGx5ID0gdGhpcy5faXNMb2FkaW5nLnBpcGUoY29tYmluZUxhdGVzdChcclxuICAgICAgICAgICAgdGhpcy5faXNFeGhhdXN0ZWQsXHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRCdXR0b25FbmFibGVkLFxyXG4gICAgICAgICAgICAoaXNMb2FkaW5nLCBpc0V4aGF1c3RlZCwgbG9hZEJ1dHRvbkVuYWJsZWQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAhaXNMb2FkaW5nICYmICFpc0V4aGF1c3RlZCAmJiBsb2FkQnV0dG9uRW5hYmxlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICkpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fc2Nyb2xsRWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxFbGVtZW50ID0gdGhpcy5fZWxlbWVudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2xvYWRCdXR0b25FbmFibGVkLm5leHQoIXRoaXMubG9hZE9uU2Nyb2xsKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcblxyXG4gICAgICAgIC8vIFRoZXJlIGFyZSB0d28ga2luZHMgb2YgdXBkYXRlIHJlcXVlc3RzOiBjaGVjayBhbmQgbG9hZC5cclxuICAgICAgICAvLyBDaGVjayByZXF1ZXN0cyBhcmUgdGhyb3R0bGVkIGFuZCB3aWxsIG9ubHkgY2F1c2UgYW4gdXBkYXRlIGlmIG1vcmUgZGF0YSBpcyByZXF1aXJlZFxyXG4gICAgICAgIC8vIHRvIGZpbGwgdGhlIHNjcm9sbGluZyB2aWV3LCBhbmQgaXQgaXNuJ3QgYWxyZWFkeSBsb2FkaW5nIHNvbWUuXHJcbiAgICAgICAgLy8gTG9hZCByZXF1ZXN0cyBhcmUgbm90IHRocm90dGxlZCBhbmQgYWx3YXlzIHJlcXVlc3QgYSBwYWdlIG9mIGRhdGEuXHJcbiAgICAgICAgdGhpcy5fdXBkYXRlUmVxdWVzdHMucGlwZShmaWx0ZXJPcGVyYXRvcihyZXF1ZXN0ID0+IHJlcXVlc3QuY2hlY2spLCBhdWRpdFRpbWUoMjAwKSwgdGFrZVVudGlsKHRoaXMuX29uRGVzdHJveSkpLnN1YnNjcmliZSh0aGlzLmRvUmVxdWVzdC5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLl91cGRhdGVSZXF1ZXN0cy5waXBlKGZpbHRlck9wZXJhdG9yKHJlcXVlc3QgPT4gIXJlcXVlc3QuY2hlY2spLCB0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KSkuc3Vic2NyaWJlKHRoaXMuZG9SZXF1ZXN0LmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgIC8vIFN1YnNjcmliZSB0byBzY3JvbGwgZXZlbnRzIGFuZCBET00gY2hhbmdlcy5cclxuICAgICAgICAgICAgdGhpcy5hdHRhY2hFdmVudEhhbmRsZXJzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDb25uZWN0IHRoZSBMb2FkIE1vcmUgYnV0dG9uIHZpc2libGUgc3RhdGUuXHJcbiAgICAgICAgdGhpcy5fY2FuTG9hZE1hbnVhbGx5LnBpcGUodGFrZVVudGlsKHRoaXMuX29uRGVzdHJveSkpLnN1YnNjcmliZShjYW5Mb2FkID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fbG9hZEJ1dHRvblF1ZXJ5LmZvckVhY2gobG9hZEJ1dHRvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICBsb2FkQnV0dG9uLnZpc2libGUgPSBjYW5Mb2FkO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQ29ubmVjdCB0aGUgbG9hZGluZyBpbmRpY2F0b3IgdmlzaWJsZSBzdGF0ZS5cclxuICAgICAgICB0aGlzLl9pc0xvYWRpbmcucGlwZSh0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KSkuc3Vic2NyaWJlKGlzTG9hZGluZyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRpbmdJbmRpY2F0b3JRdWVyeS5mb3JFYWNoKGxvYWRpbmcgPT4ge1xyXG4gICAgICAgICAgICAgICAgbG9hZGluZy52aXNpYmxlID0gaXNMb2FkaW5nO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gTGluayB0aGUgTG9hZCBNb3JlIGJ1dHRvbiBjbGljayBldmVudCB0byB0cmlnZ2VyIGFuIHVwZGF0ZS5cclxuICAgICAgICB0aGlzLmF0dGFjaExvYWRCdXR0b25FdmVudHMoKTtcclxuICAgICAgICB0aGlzLl9sb2FkQnV0dG9uUXVlcnkuY2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLl9vbkRlc3Ryb3kpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmF0dGFjaExvYWRCdXR0b25FdmVudHMoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gSW5pdGlhbCB1cGRhdGUuXHJcbiAgICAgICAgaWYgKHRoaXMubG9hZE9uSW5pdCkge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWROZXh0UGFnZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICAgICAgbGV0IGNoZWNrID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKGNoYW5nZXMuZW5hYmxlZCAmJiBjaGFuZ2VzLmVuYWJsZWQuY3VycmVudFZhbHVlICE9PSBjaGFuZ2VzLmVuYWJsZWQucHJldmlvdXNWYWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAoY2hhbmdlcy5lbmFibGVkLmN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdHRhY2hFdmVudEhhbmRsZXJzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICBjaGVjayA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXRhY2hFdmVudEhhbmRsZXJzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgaWYgKGNoYW5nZXMuZmlsdGVyICYmIGNoYW5nZXMuZmlsdGVyLmN1cnJlbnRWYWx1ZSAhPT0gY2hhbmdlcy5maWx0ZXIucHJldmlvdXNWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgY2hlY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGNoYW5nZXMubG9hZE9uU2Nyb2xsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2FkQnV0dG9uRW5hYmxlZC5uZXh0KFxyXG4gICAgICAgICAgICAgICAgICAgICFjaGFuZ2VzLmxvYWRPblNjcm9sbC5jdXJyZW50VmFsdWVcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjaGFuZ2VzLnBhZ2VTaXplICYmIGNoYW5nZXMucGFnZVNpemUuY3VycmVudFZhbHVlICE9PSBjaGFuZ2VzLnBhZ2VTaXplLnByZXZpb3VzVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgIGNoZWNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVJlcXVlc3RzLm5leHQoe1xyXG4gICAgICAgICAgICAgICAgY2hlY2s6IGNoZWNrLFxyXG4gICAgICAgICAgICAgICAgcGFnZU51bWJlcjogdGhpcy5fbmV4dFBhZ2VOdW0sXHJcbiAgICAgICAgICAgICAgICBwYWdlU2l6ZTogdGhpcy5wYWdlU2l6ZSxcclxuICAgICAgICAgICAgICAgIGZpbHRlcjogdGhpcy5maWx0ZXJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuZGV0YWNoRXZlbnRIYW5kbGVycygpO1xyXG4gICAgICAgIHRoaXMuX29uRGVzdHJveS5uZXh0KCk7XHJcbiAgICAgICAgdGhpcy5fb25EZXN0cm95LmNvbXBsZXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXF1ZXN0IGFuIGFkZGl0aW9uYWwgcGFnZSBvZiBkYXRhLlxyXG4gICAgICovXHJcbiAgICBsb2FkTmV4dFBhZ2UoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fdXBkYXRlUmVxdWVzdHMubmV4dCh7XHJcbiAgICAgICAgICAgIGNoZWNrOiBmYWxzZSxcclxuICAgICAgICAgICAgcGFnZU51bWJlcjogdGhpcy5fbmV4dFBhZ2VOdW0sXHJcbiAgICAgICAgICAgIHBhZ2VTaXplOiB0aGlzLnBhZ2VTaXplLFxyXG4gICAgICAgICAgICBmaWx0ZXI6IHRoaXMuZmlsdGVyXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXF1ZXN0IGEgY2hlY2sgZm9yIHdoZXRoZXIgYW4gYWRkaXRpb25hbCBwYWdlIG9mIGRhdGEgaXMgcmVxdWlyZWQuIFRoaXMgaXMgdGhyb3R0bGVkLlxyXG4gICAgICovXHJcbiAgICBjaGVjaygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl91cGRhdGVSZXF1ZXN0cy5uZXh0KHtcclxuICAgICAgICAgICAgY2hlY2s6IHRydWUsXHJcbiAgICAgICAgICAgIHBhZ2VOdW1iZXI6IHRoaXMuX25leHRQYWdlTnVtLFxyXG4gICAgICAgICAgICBwYWdlU2l6ZTogdGhpcy5wYWdlU2l6ZSxcclxuICAgICAgICAgICAgZmlsdGVyOiB0aGlzLmZpbHRlclxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2xlYXIgdGhlIGNvbGxlY3Rpb24uIEZ1dHVyZSByZXF1ZXN0cyB3aWxsIGxvYWQgZnJvbSBwYWdlIDAuXHJcbiAgICAgKi9cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFJlc2V0IHRoZSBwYWdlIGNvdW50ZXIuXHJcbiAgICAgICAgdGhpcy5fbmV4dFBhZ2VOdW0gPSAwO1xyXG5cclxuICAgICAgICB0aGlzLl9wYWdlcyA9IFtdO1xyXG5cclxuICAgICAgICAvLyBDbGVhciB0aGUgY29sbGVjdGlvbiAod2l0aG91dCBjaGFuZ2luZyB0aGUgcmVmZXJlbmNlKS5cclxuICAgICAgICBpZiAodGhpcy5jb2xsZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sbGVjdGlvbi5sZW5ndGggPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUmVzZXQgdGhlIGV4aGF1c3RlZCBmbGFnLCBhbGxvd2luZyB0aGUgTG9hZCBNb3JlIGJ1dHRvbiB0byBhcHBlYXIuXHJcbiAgICAgICAgdGhpcy5faXNFeGhhdXN0ZWQubmV4dChmYWxzZSk7XHJcblxyXG4gICAgICAgIC8vIENhbmNlbCBhbnkgcGVuZGluZyByZXF1ZXN0c1xyXG4gICAgICAgIGlmICh0aGlzLl9zdWJzY3JpcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuZm9yRWFjaChyZXF1ZXN0ID0+IHJlcXVlc3QudW5zdWJzY3JpYmUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVsb2FkIHRoZSBkYXRhIHdpdGhvdXQgY2xlYXJpbmcgdGhlIHZpZXcuXHJcbiAgICAgKi9cclxuICAgIHJlbG9hZCgpIHtcclxuICAgICAgICB0aGlzLl9wYWdlcy5mb3JFYWNoKChwYWdlLCBpKSA9PiB0aGlzLnJlbG9hZFBhZ2UoaSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVsb2FkIHRoZSBkYXRhIGluIGEgc3BlY2lmaWMgcGFnZSB3aXRob3V0IGNsZWFyaW5nIHRoZSB2aWV3LlxyXG4gICAgICogQHBhcmFtIHBhZ2VOdW0gUGFnZSBudW1iZXJcclxuICAgICAqL1xyXG4gICAgcmVsb2FkUGFnZShwYWdlTnVtOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl91cGRhdGVSZXF1ZXN0cy5uZXh0KHtcclxuICAgICAgICAgICAgY2hlY2s6IGZhbHNlLFxyXG4gICAgICAgICAgICBwYWdlTnVtYmVyOiBwYWdlTnVtLFxyXG4gICAgICAgICAgICBwYWdlU2l6ZTogdGhpcy5wYWdlU2l6ZSxcclxuICAgICAgICAgICAgZmlsdGVyOiB0aGlzLmZpbHRlcixcclxuICAgICAgICAgICAgcmVsb2FkOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBdHRhY2ggc2Nyb2xsIGV2ZW50IGhhbmRsZXIgYW5kIERPTSBvYnNlcnZlci5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhdHRhY2hFdmVudEhhbmRsZXJzKCkge1xyXG5cclxuICAgICAgICAvLyBpZiB0aGUgc2Nyb2xsRWxlbWVudCBpcyBkb2N1bWVudEVsZW1lbnQgd2UgbXVzdCB3YXRjaCBmb3IgYSBzY3JvbGwgZXZlbnQgb24gdGhlIGRvY3VtZW50XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5fc2Nyb2xsRWxlbWVudC5uYXRpdmVFbGVtZW50IGluc3RhbmNlb2YgSFRNTEh0bWxFbGVtZW50ID8gZG9jdW1lbnQgOiB0aGlzLl9zY3JvbGxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG4gICAgICAgIC8vIFN1YnNjcmliZSB0byB0aGUgc2Nyb2xsIGV2ZW50IG9uIHRoZSB0YXJnZXQgZWxlbWVudC5cclxuICAgICAgICB0aGlzLl9zY3JvbGxFdmVudFN1YiA9IGZyb21FdmVudCh0YXJnZXQsICdzY3JvbGwnKS5zdWJzY3JpYmUodGhpcy5jaGVjay5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgLy8gU3Vic2NyaWJlIHRvIGNoaWxkIERPTSBjaGFuZ2VzLiBUaGUgbWFpbiBlZmZlY3Qgb2YgdGhpcyBpcyB0byBjaGVjayB3aGV0aGVyIGV2ZW4gbW9yZSBkYXRhIGlzXHJcbiAgICAgICAgLy8gcmVxdWlyZWQgYWZ0ZXIgdGhlIGluaXRpYWwgbG9hZC5cclxuICAgICAgICB0aGlzLl9kb21PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuY2hlY2suYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5fZG9tT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLl9zY3JvbGxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHtcclxuICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gICAgICAgICAgICBzdWJ0cmVlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXRhY2ggc2Nyb2xsIGV2ZW50IGhhbmRsZXIgYW5kIERPTSBvYnNlcnZlci5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBkZXRhY2hFdmVudEhhbmRsZXJzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zY3JvbGxFdmVudFN1Yikge1xyXG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxFdmVudFN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxFdmVudFN1YiA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5fZG9tT2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5fZG9tT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9kb21PYnNlcnZlciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlIGFueSBleGlzdGluZyBldmVudCBzdWJzY3JpcHRpb25zIGZvciB0aGUgbG9hZCBidXR0b24gYGxvYWRgIGV2ZW50LCB0aGVuIGF0dGFjaCBzdWJzY3JpcHRpb25zXHJcbiAgICAgKiBmb3IgYW55IGluIHRoZSBxdWVyeS5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhdHRhY2hMb2FkQnV0dG9uRXZlbnRzKCkge1xyXG4gICAgICAgIHRoaXMuX2xvYWRCdXR0b25TdWJzY3JpcHRpb25zLmZvckVhY2gocyA9PiBzLnVuc3Vic2NyaWJlKCkpO1xyXG4gICAgICAgIHRoaXMuX2xvYWRCdXR0b25TdWJzY3JpcHRpb25zID0gdGhpcy5fbG9hZEJ1dHRvblF1ZXJ5Lm1hcChcclxuICAgICAgICAgICAgbG9hZEJ1dHRvbiA9PiBsb2FkQnV0dG9uLmxvYWQuc3Vic2NyaWJlKHRoaXMubG9hZE5leHRQYWdlLmJpbmQodGhpcykpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmRpdGlvbmFsbHkgbG9hZHMgYSBwYWdlIGludG8gdGhlIGNvbGxlY3Rpb24gYmFzZWQgb24gZGlyZWN0aXZlIHN0YXRlIGFuZCByZXF1ZXN0IHBhcmFtZXRlcnMuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZG9SZXF1ZXN0KHJlcXVlc3Q6IEluZmluaXRlU2Nyb2xsUmVxdWVzdCkge1xyXG5cclxuICAgICAgICAvLyBMb2FkIGEgbmV3IHBhZ2UgaWYgdGhlIHNjcm9sbCBwb3NpdGlvbiBpcyBiZXlvbmQgdGhlIHRocmVzaGhvbGQgYW5kIGlmIHRoZSBjbGllbnQgY29kZSBkaWQgbm90XHJcbiAgICAgICAgLy8gY2FuY2VsLlxyXG4gICAgICAgIGlmICh0aGlzLm5lZWRzRGF0YShyZXF1ZXN0KSAmJiB0aGlzLmJlZ2luTG9hZGluZyhyZXF1ZXN0KSkge1xyXG5cclxuICAgICAgICAgICAgLy8gSW52b2tlIHRoZSBjYWxsYmFjayBsb2FkIGZ1bmN0aW9uLCB3aGljaCByZXR1cm5zIGEgcHJvbW9zZSBvciBwbGFpbiBkYXRhLlxyXG4gICAgICAgICAgICBjb25zdCBsb2FkUmVzdWx0ID0gdGhpcy5sb2FkKHJlcXVlc3QucGFnZU51bWJlciwgcmVxdWVzdC5wYWdlU2l6ZSwgcmVxdWVzdC5maWx0ZXIpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgb2JzZXJ2YWJsZSA9IEFycmF5LmlzQXJyYXkobG9hZFJlc3VsdCkgPyBvZihsb2FkUmVzdWx0KSA6IGZyb208YW55W10+KGxvYWRSZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gb2JzZXJ2YWJsZS5waXBlKGZpcnN0KCkpLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGl0ZW1zID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhhdCB0aGUgcGFyYW1ldGVycyBoYXZlIG5vdCBjaGFuZ2VkIHNpbmNlIHRoZSBsb2FkIHN0YXJ0ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIGRpc2NhcmQgdGhlIHJlc3VsdHMuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcXVlc3QuZmlsdGVyID09PSB0aGlzLmZpbHRlciAmJiByZXF1ZXN0LnBhZ2VTaXplID09PSB0aGlzLnBhZ2VTaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtcyAmJiBpdGVtcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UGFnZUl0ZW1zKHJlcXVlc3QucGFnZU51bWJlciwgaXRlbXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBFbWl0IHRoZSBsb2FkZWQgZXZlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmRMb2FkaW5nKHJlcXVlc3QsIGl0ZW1zKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmVhc29uID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBFbWl0IHRoZSBsb2FkRXJyb3IgZXZlbnRcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZExvYWRpbmdXaXRoRXJyb3IocmVxdWVzdCwgcmVhc29uKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHRoaXMgcmVxdWVzdCBmcm9tIHRoZSBsaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucyA9IHRoaXMuX3N1YnNjcmlwdGlvbnMuZmlsdGVyKHMgPT4gcyAhPT0gc3Vic2NyaXB0aW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGFkZCB0aGUgc3Vic2NyaXB0aW9uIHRvIHRoZSBsaXN0IG9mIHJlcXVlc3RzXHJcbiAgICAgICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMucHVzaChzdWJzY3JpcHRpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcmVxdWVzdCBzaG91bGQgYmUgZnVsZmlsbGVkLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG5lZWRzRGF0YShyZXF1ZXN0OiBJbmZpbml0ZVNjcm9sbFJlcXVlc3QpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBbHdheXMgbG9hZCBmb3IgYSBsb2FkIHJlcXVlc3RcclxuICAgICAgICBpZiAoIXJlcXVlc3QuY2hlY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZ25vcmUgYSBjaGVjayByZXF1ZXN0IHdoZW4gdGhlIGVuZCBvZiBkYXRhIGhhcyBiZWVuIGRldGVjdGVkLCBvciBpZiBkYXRhIGlzIGN1cnJlbnRseSBsb2FkaW5nLlxyXG4gICAgICAgIGlmICh0aGlzLl9pc0V4aGF1c3RlZC5nZXRWYWx1ZSgpIHx8IHRoaXMuX2lzTG9hZGluZy5nZXRWYWx1ZSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIExvYWQgaWYgdGhlIHJlbWFpbmluZyBzY3JvbGwgYXJlYSBpcyA8PSB0aGUgZWxlbWVudCBoZWlnaHQuXHJcbiAgICAgICAgaWYgKHRoaXMuX3Njcm9sbEVsZW1lbnQgJiYgdGhpcy5sb2FkT25TY3JvbGwpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+dGhpcy5fc2Nyb2xsRWxlbWVudC5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgICAgICBjb25zdCByZW1haW5pbmdTY3JvbGwgPVxyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zY3JvbGxIZWlnaHQgLVxyXG4gICAgICAgICAgICAgICAgKGVsZW1lbnQuc2Nyb2xsVG9wICsgZWxlbWVudC5jbGllbnRIZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlbWFpbmluZ1Njcm9sbCA8PSBlbGVtZW50LmNsaWVudEhlaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgc3RhdGUgZm9yIHRoZSBiZWdpbm5pbmcgb2YgYSBsb2FkLiBSZXR1cm5zIGZhbHNlIGlmIHRoZSBgbG9hZGluZ2AgZXZlbnQgd2FzIGNhbmNlbGxlZC5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBiZWdpbkxvYWRpbmcocmVxdWVzdDogSW5maW5pdGVTY3JvbGxSZXF1ZXN0KTogYm9vbGVhbiB7XHJcblxyXG4gICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEluZmluaXRlU2Nyb2xsTG9hZGluZ0V2ZW50KFxyXG4gICAgICAgICAgICByZXF1ZXN0LnBhZ2VOdW1iZXIsXHJcbiAgICAgICAgICAgIHJlcXVlc3QucGFnZVNpemUsXHJcbiAgICAgICAgICAgIHJlcXVlc3QuZmlsdGVyXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmxvYWRpbmdFdmVudC5lbWl0KGV2ZW50KTtcclxuXHJcbiAgICAgICAgdGhpcy5faXNMb2FkaW5nLm5leHQoIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQoKSk7XHJcblxyXG4gICAgICAgIHJldHVybiAhZXZlbnQuZGVmYXVsdFByZXZlbnRlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0UGFnZUl0ZW1zKHBhZ2VOdW06IG51bWJlciwgaXRlbXM6IGFueVtdKSB7XHJcbiAgICAgICAgdGhpcy5fcGFnZXNbcGFnZU51bV0gPSBpdGVtcztcclxuICAgICAgICB0aGlzLmNvbGxlY3Rpb24gPSB0aGlzLl9wYWdlcy5yZWR1Y2UoKHByZXZpb3VzLCBjdXJyZW50KSA9PiBwcmV2aW91cy5jb25jYXQoY3VycmVudCksIFtdKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgc3RhdGUgZnJvbSBhIHN1Y2Nlc3NmdWwgbG9hZC4gUmFpc2VzIHRoZSBgbG9hZGVkYCBldmVudC5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBlbmRMb2FkaW5nKHJlcXVlc3Q6IEluZmluaXRlU2Nyb2xsUmVxdWVzdCwgZGF0YT86IGFueSkge1xyXG4gICAgICAgIHRoaXMuX2lzTG9hZGluZy5uZXh0KGZhbHNlKTtcclxuXHJcbiAgICAgICAgY29uc3QgaXNFeGhhdXN0ZWQgPSAhIShkYXRhICYmIGRhdGEubGVuZ3RoIDwgdGhpcy5wYWdlU2l6ZSk7XHJcbiAgICAgICAgdGhpcy5faXNFeGhhdXN0ZWQubmV4dChpc0V4aGF1c3RlZCk7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZGVkRXZlbnQuZW1pdChcclxuICAgICAgICAgICAgbmV3IEluZmluaXRlU2Nyb2xsTG9hZGVkRXZlbnQoXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0LnBhZ2VOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0LnBhZ2VTaXplLFxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5maWx0ZXIsXHJcbiAgICAgICAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgICAgICAgaXNFeGhhdXN0ZWRcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmICghcmVxdWVzdC5yZWxvYWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fbmV4dFBhZ2VOdW0gKz0gMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIHN0YXRlIGZyb20gYSBmYWlsZWQgbG9hZC4gUmFpc2VzIHRoZSBgbG9hZEVycm9yYCBldmVudC5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBlbmRMb2FkaW5nV2l0aEVycm9yKHJlcXVlc3Q6IEluZmluaXRlU2Nyb2xsUmVxdWVzdCwgZXJyb3I6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX2lzTG9hZGluZy5uZXh0KGZhbHNlKTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkRXJyb3JFdmVudC5lbWl0KFxyXG4gICAgICAgICAgICBuZXcgSW5maW5pdGVTY3JvbGxMb2FkRXJyb3JFdmVudChcclxuICAgICAgICAgICAgICAgIHJlcXVlc3QucGFnZU51bWJlcixcclxuICAgICAgICAgICAgICAgIHJlcXVlc3QucGFnZVNpemUsXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0LmZpbHRlcixcclxuICAgICAgICAgICAgICAgIGVycm9yXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogVGhlIGludGVybmFsIGRhdGEgYXNzb2NpYXRlZCB3aXRoIGEgbG9hZC9jaGVjayByZXF1ZXN0LlxyXG4gKi9cclxuY2xhc3MgSW5maW5pdGVTY3JvbGxSZXF1ZXN0IHtcclxuICAgIGNoZWNrOiBib29sZWFuO1xyXG4gICAgcGFnZU51bWJlcjogbnVtYmVyO1xyXG4gICAgcGFnZVNpemU6IG51bWJlcjtcclxuICAgIGZpbHRlcjogYW55O1xyXG4gICAgcmVsb2FkPzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgSW5maW5pdGVTY3JvbGxMb2FkRnVuY3Rpb24gPSAoXHJcbiAgICBwYWdlTnVtOiBudW1iZXIsXHJcbiAgICBwYWdlU2l6ZTogbnVtYmVyLFxyXG4gICAgZmlsdGVyOiBhbnlcclxuKSA9PiBhbnkgfCBQcm9taXNlPGFueT47XHJcblxyXG4vKipcclxuICogRXZlbnQgcmFpc2VkIGJlZm9yZSB0aGUgYGxvYWRpbmdgIGZ1bmN0aW9uIGlzIGNhbGxlZC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBJbmZpbml0ZVNjcm9sbExvYWRpbmdFdmVudCB7XHJcbiAgICBwcml2YXRlIF9kZWZhdWx0UHJldmVudGVkID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIGluZGV4IG9mIHRoZSByZXF1ZXN0ZWQgcGFnZSwgc3RhcnRpbmcgZnJvbSAwLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBwYWdlTnVtYmVyOiBudW1iZXIsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIG51bWJlciBvZiBpdGVtcyByZXF1ZXN0ZWQuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHBhZ2VTaXplOiBudW1iZXIsXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIGZpbHRlciBkZXRhaWxzIGFzIHByb3ZpZGVkIHZpYSB0aGUgYGZpbHRlcmAgYmluZGluZy5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZmlsdGVyOiBhbnlcclxuICAgICkgeyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQcmV2ZW50cyB0aGUgZGVmYXVsdCBiZWhhdmlvdXIgb2YgdGhlIGBsb2FkaW5nYCBldmVudCAobG9hZGluZyBmdW5jdGlvbiB3aWxsIG5vdCBiZSBjYWxsZWQpLlxyXG4gICAgICovXHJcbiAgICBwcmV2ZW50RGVmYXVsdCgpIHtcclxuICAgICAgICB0aGlzLl9kZWZhdWx0UHJldmVudGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBkZWZhdWx0UHJldmVudGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kZWZhdWx0UHJldmVudGVkO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogRXZlbnQgcmFpc2VkIHdoZW4gdGhlIGxvYWRpbmcgZnVuY3Rpb24gcmVzdWx0IGhhcyBiZWVuIHJlc29sdmVkIGFuZCBhZGRlZCB0byB0aGUgY29sbGVjdGlvbi5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBJbmZpbml0ZVNjcm9sbExvYWRlZEV2ZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBpbmRleCBvZiB0aGUgcmVxdWVzdGVkIHBhZ2UsIHN0YXJ0aW5nIGZyb20gMC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgcGFnZU51bWJlcjogbnVtYmVyLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBudW1iZXIgb2YgaXRlbXMgcmVxdWVzdGVkLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBwYWdlU2l6ZTogbnVtYmVyLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBmaWx0ZXIgZGV0YWlscyBhcyBwcm92aWRlZCB2aWEgdGhlIGBmaWx0ZXJgIGJpbmRpbmcuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGZpbHRlcjogYW55LFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSByZXN1bHQgb2YgdGhlIHByb21pc2UgcmV0dXJuZWQgZnJvbSB0aGUgbG9hZGluZyBmdW5jdGlvbi5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZGF0YTogYW55LFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRydWUgaWYgdGhlIGRhdGEgaXMgY29uc2lkZXJlZCBleGhhdXN0ZWQgKG51bWJlciBvZiBpdGVtcyByZXR1cm5lZCBsZXNzIHRoYW4gYHBhZ2VTaXplYCkuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGV4aGF1c3RlZDogYm9vbGVhblxyXG4gICAgKSB7IH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEV2ZW50IHJhaXNlZCBpZiB0aGUgbG9hZGluZyBmdW5jdGlvbiByZXR1cm5zIGEgcmVqZWN0ZWQgcHJvbWlzZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBJbmZpbml0ZVNjcm9sbExvYWRFcnJvckV2ZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBpbmRleCBvZiB0aGUgcmVxdWVzdGVkIHBhZ2UsIHN0YXJ0aW5nIGZyb20gMC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgcGFnZU51bWJlcjogbnVtYmVyLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBudW1iZXIgb2YgaXRlbXMgcmVxdWVzdGVkLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBwYWdlU2l6ZTogbnVtYmVyLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBmaWx0ZXIgZGV0YWlscyBhcyBwcm92aWRlZCB2aWEgdGhlIGBmaWx0ZXJgIGJpbmRpbmcuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGZpbHRlcjogYW55LFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBvYmplY3QgcHJvdmlkZWQgd2hlbiByZWplY3RpbmcgdGhlIHByb21pc2UuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGVycm9yOiBhbnlcclxuICAgICkgeyB9XHJcbn1cclxuIl19