/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ContentChildren, Directive, ElementRef, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { BehaviorSubject, from, fromEvent, of, Subject } from 'rxjs';
import { auditTime, combineLatest, filter as filterOperator, first, takeUntil } from 'rxjs/operators';
import { InfiniteScrollLoadButtonDirective } from './infinite-scroll-load-button.directive';
import { InfiniteScrollLoadingDirective } from './infinite-scroll-loading.directive';
var InfiniteScrollDirective = /** @class */ (function () {
    function InfiniteScrollDirective(_element) {
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
        this._canLoadManually = this._isLoading.pipe(combineLatest(this._isExhausted, this._loadButtonEnabled, function (isLoading, isExhausted, loadButtonEnabled) {
            return !isLoading && !isExhausted && loadButtonEnabled;
        }));
    }
    Object.defineProperty(InfiniteScrollDirective.prototype, "collection", {
        get: /**
         * @return {?}
         */
        function () {
            return this._collection;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.collectionChange.emit(value);
            this._collection = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InfiniteScrollDirective.prototype, "scrollElement", {
        set: /**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            this._scrollElement = element instanceof ElementRef ? element : new ElementRef(element);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    InfiniteScrollDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this._scrollElement) {
            this._scrollElement = this._element;
        }
        this._loadButtonEnabled.next(!this.loadOnScroll);
    };
    /**
     * @return {?}
     */
    InfiniteScrollDirective.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // There are two kinds of update requests: check and load.
        // Check requests are throttled and will only cause an update if more data is required
        // to fill the scrolling view, and it isn't already loading some.
        // Load requests are not throttled and always request a page of data.
        this._updateRequests.pipe(filterOperator(function (request) { return request.check; }), auditTime(200), takeUntil(this._onDestroy)).subscribe(this.doRequest.bind(this));
        this._updateRequests.pipe(filterOperator(function (request) { return !request.check; }), takeUntil(this._onDestroy)).subscribe(this.doRequest.bind(this));
        if (this.enabled) {
            // Subscribe to scroll events and DOM changes.
            this.attachEventHandlers();
        }
        // Connect the Load More button visible state.
        this._canLoadManually.pipe(takeUntil(this._onDestroy)).subscribe(function (canLoad) {
            _this._loadButtonQuery.forEach(function (loadButton) {
                loadButton.visible = canLoad;
            });
        });
        // Connect the loading indicator visible state.
        this._isLoading.pipe(takeUntil(this._onDestroy)).subscribe(function (isLoading) {
            _this._loadingIndicatorQuery.forEach(function (loading) {
                loading.visible = isLoading;
            });
        });
        // Link the Load More button click event to trigger an update.
        this.attachLoadButtonEvents();
        this._loadButtonQuery.changes.pipe(takeUntil(this._onDestroy)).subscribe(function () {
            _this.attachLoadButtonEvents();
        });
        // Initial update.
        if (this.loadOnInit) {
            this.loadNextPage();
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    InfiniteScrollDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var /** @type {?} */ check = true;
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
    };
    /**
     * @return {?}
     */
    InfiniteScrollDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.detachEventHandlers();
        this._onDestroy.next();
        this._onDestroy.complete();
    };
    /**
     * Request an additional page of data.
     */
    /**
     * Request an additional page of data.
     * @return {?}
     */
    InfiniteScrollDirective.prototype.loadNextPage = /**
     * Request an additional page of data.
     * @return {?}
     */
    function () {
        if (!this.enabled) {
            return;
        }
        this._updateRequests.next({
            check: false,
            pageNumber: this._nextPageNum,
            pageSize: this.pageSize,
            filter: this.filter
        });
    };
    /**
     * Request a check for whether an additional page of data is required. This is throttled.
     */
    /**
     * Request a check for whether an additional page of data is required. This is throttled.
     * @return {?}
     */
    InfiniteScrollDirective.prototype.check = /**
     * Request a check for whether an additional page of data is required. This is throttled.
     * @return {?}
     */
    function () {
        if (!this.enabled) {
            return;
        }
        this._updateRequests.next({
            check: true,
            pageNumber: this._nextPageNum,
            pageSize: this.pageSize,
            filter: this.filter
        });
    };
    /**
     * Clear the collection. Future requests will load from page 0.
     */
    /**
     * Clear the collection. Future requests will load from page 0.
     * @return {?}
     */
    InfiniteScrollDirective.prototype.reset = /**
     * Clear the collection. Future requests will load from page 0.
     * @return {?}
     */
    function () {
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
            this._subscriptions.forEach(function (request) { return request.unsubscribe(); });
        }
    };
    /**
     * Reload the data without clearing the view.
     */
    /**
     * Reload the data without clearing the view.
     * @return {?}
     */
    InfiniteScrollDirective.prototype.reload = /**
     * Reload the data without clearing the view.
     * @return {?}
     */
    function () {
        var _this = this;
        this._pages.forEach(function (page, i) { return _this.reloadPage(i); });
    };
    /**
     * Reload the data in a specific page without clearing the view.
     * @param pageNum Page number
     */
    /**
     * Reload the data in a specific page without clearing the view.
     * @param {?} pageNum Page number
     * @return {?}
     */
    InfiniteScrollDirective.prototype.reloadPage = /**
     * Reload the data in a specific page without clearing the view.
     * @param {?} pageNum Page number
     * @return {?}
     */
    function (pageNum) {
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
    };
    /**
     * Attach scroll event handler and DOM observer.
     * @return {?}
     */
    InfiniteScrollDirective.prototype.attachEventHandlers = /**
     * Attach scroll event handler and DOM observer.
     * @return {?}
     */
    function () {
        // if the scrollElement is documentElement we must watch for a scroll event on the document
        var /** @type {?} */ target = this._scrollElement.nativeElement instanceof HTMLHtmlElement ? document : this._scrollElement.nativeElement;
        // Subscribe to the scroll event on the target element.
        this._scrollEventSub = fromEvent(target, 'scroll').subscribe(this.check.bind(this));
        // Subscribe to child DOM changes. The main effect of this is to check whether even more data is
        // required after the initial load.
        this._domObserver = new MutationObserver(this.check.bind(this));
        this._domObserver.observe(this._scrollElement.nativeElement, {
            childList: true,
            subtree: true
        });
    };
    /**
     * Detach scroll event handler and DOM observer.
     * @return {?}
     */
    InfiniteScrollDirective.prototype.detachEventHandlers = /**
     * Detach scroll event handler and DOM observer.
     * @return {?}
     */
    function () {
        if (this._scrollEventSub) {
            this._scrollEventSub.unsubscribe();
            this._scrollEventSub = null;
        }
        if (this._domObserver) {
            this._domObserver.disconnect();
            this._domObserver = null;
        }
    };
    /**
     * Remove any existing event subscriptions for the load button `load` event, then attach subscriptions
     * for any in the query.
     * @return {?}
     */
    InfiniteScrollDirective.prototype.attachLoadButtonEvents = /**
     * Remove any existing event subscriptions for the load button `load` event, then attach subscriptions
     * for any in the query.
     * @return {?}
     */
    function () {
        var _this = this;
        this._loadButtonSubscriptions.forEach(function (s) { return s.unsubscribe(); });
        this._loadButtonSubscriptions = this._loadButtonQuery.map(function (loadButton) { return loadButton.load.subscribe(_this.loadNextPage.bind(_this)); });
    };
    /**
     * Conditionally loads a page into the collection based on directive state and request parameters.
     * @param {?} request
     * @return {?}
     */
    InfiniteScrollDirective.prototype.doRequest = /**
     * Conditionally loads a page into the collection based on directive state and request parameters.
     * @param {?} request
     * @return {?}
     */
    function (request) {
        var _this = this;
        // Load a new page if the scroll position is beyond the threshhold and if the client code did not
        // cancel.
        if (this.needsData(request) && this.beginLoading(request)) {
            // Invoke the callback load function, which returns a promose or plain data.
            var /** @type {?} */ loadResult = this.load(request.pageNumber, request.pageSize, request.filter);
            var /** @type {?} */ observable = Array.isArray(loadResult) ? of(loadResult) : from(loadResult);
            var /** @type {?} */ subscription_1 = observable.pipe(first()).subscribe(function (items) {
                // Make sure that the parameters have not changed since the load started;
                // otherwise discard the results.
                if (request.filter === _this.filter && request.pageSize === _this.pageSize) {
                    if (items && items.length) {
                        _this.setPageItems(request.pageNumber, items);
                    }
                    // Emit the loaded event
                    // Emit the loaded event
                    _this.endLoading(request, items);
                }
            }, function (reason) {
                // Emit the loadError event
                // Emit the loadError event
                _this.endLoadingWithError(request, reason);
            }, function () {
                // remove this request from the list
                // remove this request from the list
                _this._subscriptions = _this._subscriptions.filter(function (s) { return s !== subscription_1; });
            });
            // add the subscription to the list of requests
            this._subscriptions.push(subscription_1);
        }
    };
    /**
     * Returns true if the request should be fulfilled.
     * @param {?} request
     * @return {?}
     */
    InfiniteScrollDirective.prototype.needsData = /**
     * Returns true if the request should be fulfilled.
     * @param {?} request
     * @return {?}
     */
    function (request) {
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
            var /** @type {?} */ element = /** @type {?} */ (this._scrollElement.nativeElement);
            var /** @type {?} */ remainingScroll = element.scrollHeight -
                (element.scrollTop + element.clientHeight);
            return remainingScroll <= element.clientHeight;
        }
        return false;
    };
    /**
     * Updates state for the beginning of a load. Returns false if the `loading` event was cancelled.
     * @param {?} request
     * @return {?}
     */
    InfiniteScrollDirective.prototype.beginLoading = /**
     * Updates state for the beginning of a load. Returns false if the `loading` event was cancelled.
     * @param {?} request
     * @return {?}
     */
    function (request) {
        var /** @type {?} */ event = new InfiniteScrollLoadingEvent(request.pageNumber, request.pageSize, request.filter);
        this.loadingEvent.emit(event);
        this._isLoading.next(!event.defaultPrevented());
        return !event.defaultPrevented();
    };
    /**
     * @param {?} pageNum
     * @param {?} items
     * @return {?}
     */
    InfiniteScrollDirective.prototype.setPageItems = /**
     * @param {?} pageNum
     * @param {?} items
     * @return {?}
     */
    function (pageNum, items) {
        this._pages[pageNum] = items;
        this.collection = this._pages.reduce(function (previous, current) { return previous.concat(current); }, []);
    };
    /**
     * Updates state from a successful load. Raises the `loaded` event.
     * @param {?} request
     * @param {?=} data
     * @return {?}
     */
    InfiniteScrollDirective.prototype.endLoading = /**
     * Updates state from a successful load. Raises the `loaded` event.
     * @param {?} request
     * @param {?=} data
     * @return {?}
     */
    function (request, data) {
        this._isLoading.next(false);
        var /** @type {?} */ isExhausted = !!(data && data.length < this.pageSize);
        this._isExhausted.next(isExhausted);
        this.loadedEvent.emit(new InfiniteScrollLoadedEvent(request.pageNumber, request.pageSize, request.filter, data, isExhausted));
        if (!request.reload) {
            this._nextPageNum += 1;
        }
    };
    /**
     * Updates state from a failed load. Raises the `loadError` event.
     * @param {?} request
     * @param {?} error
     * @return {?}
     */
    InfiniteScrollDirective.prototype.endLoadingWithError = /**
     * Updates state from a failed load. Raises the `loadError` event.
     * @param {?} request
     * @param {?} error
     * @return {?}
     */
    function (request, error) {
        this._isLoading.next(false);
        this.loadErrorEvent.emit(new InfiniteScrollLoadErrorEvent(request.pageNumber, request.pageSize, request.filter, error));
    };
    InfiniteScrollDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[uxInfiniteScroll]',
                    exportAs: 'uxInfiniteScroll'
                },] },
    ];
    /** @nocollapse */
    InfiniteScrollDirective.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
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
    return InfiniteScrollDirective;
}());
export { InfiniteScrollDirective };
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
var /**
 * The internal data associated with a load/check request.
 */
InfiniteScrollRequest = /** @class */ (function () {
    function InfiniteScrollRequest() {
    }
    return InfiniteScrollRequest;
}());
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
var /**
 * Event raised before the `loading` function is called.
 */
InfiniteScrollLoadingEvent = /** @class */ (function () {
    function InfiniteScrollLoadingEvent(pageNumber, pageSize, filter) {
        this.pageNumber = pageNumber;
        this.pageSize = pageSize;
        this.filter = filter;
        this._defaultPrevented = false;
    }
    /**
     * Prevents the default behaviour of the `loading` event (loading function will not be called).
     */
    /**
     * Prevents the default behaviour of the `loading` event (loading function will not be called).
     * @return {?}
     */
    InfiniteScrollLoadingEvent.prototype.preventDefault = /**
     * Prevents the default behaviour of the `loading` event (loading function will not be called).
     * @return {?}
     */
    function () {
        this._defaultPrevented = true;
    };
    /**
     * @return {?}
     */
    InfiniteScrollLoadingEvent.prototype.defaultPrevented = /**
     * @return {?}
     */
    function () {
        return this._defaultPrevented;
    };
    return InfiniteScrollLoadingEvent;
}());
/**
 * Event raised before the `loading` function is called.
 */
export { InfiniteScrollLoadingEvent };
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
var /**
 * Event raised when the loading function result has been resolved and added to the collection.
 */
InfiniteScrollLoadedEvent = /** @class */ (function () {
    function InfiniteScrollLoadedEvent(pageNumber, pageSize, filter, data, exhausted) {
        this.pageNumber = pageNumber;
        this.pageSize = pageSize;
        this.filter = filter;
        this.data = data;
        this.exhausted = exhausted;
    }
    return InfiniteScrollLoadedEvent;
}());
/**
 * Event raised when the loading function result has been resolved and added to the collection.
 */
export { InfiniteScrollLoadedEvent };
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
var /**
 * Event raised if the loading function returns a rejected promise.
 */
InfiniteScrollLoadErrorEvent = /** @class */ (function () {
    function InfiniteScrollLoadErrorEvent(pageNumber, pageSize, filter, error) {
        this.pageNumber = pageNumber;
        this.pageSize = pageSize;
        this.filter = filter;
        this.error = error;
    }
    return InfiniteScrollLoadErrorEvent;
}());
/**
 * Event raised if the loading function returns a rejected promise.
 */
export { InfiniteScrollLoadErrorEvent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5maW5pdGUtc2Nyb2xsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL2luZmluaXRlLXNjcm9sbC9pbmZpbml0ZS1zY3JvbGwuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQW9CLGVBQWUsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWdDLE1BQU0sRUFBRSxTQUFTLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQzlLLE9BQU8sRUFBRSxlQUFlLEVBQWtCLElBQUksRUFBSSxTQUFTLEVBQUksRUFBRSxFQUFJLE9BQU8sRUFBa0IsTUFBTSxNQUFNLENBQUM7QUFDM0csT0FBTyxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsTUFBTSxJQUFJLGNBQWMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEcsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDNUYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0scUNBQXFDLENBQUM7O0lBK0RqRixpQ0FBb0IsUUFBb0I7UUFBcEIsYUFBUSxHQUFSLFFBQVEsQ0FBWTsyQkFyREUsRUFBRTt1QkFjaEIsSUFBSTswQkFFRCxJQUFJOzRCQUNGLElBQUk7d0JBQ1QsRUFBRTtnQ0FFRCxJQUFJLFlBQVksRUFBUzs0QkFHdkMsSUFBSSxZQUFZLEVBQThCOzJCQUcvQyxJQUFJLFlBQVksRUFBNkI7OEJBRzFDLElBQUksWUFBWSxFQUFnQzs0QkFTMUMsQ0FBQzsrQkFHRSxJQUFJLE9BQU8sRUFBeUI7MEJBRXpDLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQzs0QkFDakMsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDO2tDQUM3QixJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUM7OEJBSXZCLEVBQUU7d0NB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LENBQUE7Ozs7QUFuQkQsd0NBbUJDIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENvbnRlbnRDaGlsZHJlbiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFF1ZXJ5TGlzdCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgLCAgT2JzZXJ2YWJsZSAsICBmcm9tICwgIGZyb21FdmVudCAsICBvZiAsICBTdWJqZWN0ICwgIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBhdWRpdFRpbWUsIGNvbWJpbmVMYXRlc3QsIGZpbHRlciBhcyBmaWx0ZXJPcGVyYXRvciwgZmlyc3QsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgSW5maW5pdGVTY3JvbGxMb2FkQnV0dG9uRGlyZWN0aXZlIH0gZnJvbSAnLi9pbmZpbml0ZS1zY3JvbGwtbG9hZC1idXR0b24uZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgSW5maW5pdGVTY3JvbGxMb2FkaW5nRGlyZWN0aXZlIH0gZnJvbSAnLi9pbmZpbml0ZS1zY3JvbGwtbG9hZGluZy5kaXJlY3RpdmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1t1eEluZmluaXRlU2Nyb2xsXScsXHJcbiAgICBleHBvcnRBczogJ3V4SW5maW5pdGVTY3JvbGwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbmZpbml0ZVNjcm9sbERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG5cclxuICAgIEBJbnB1dCgndXhJbmZpbml0ZVNjcm9sbCcpIGxvYWQ6IEluZmluaXRlU2Nyb2xsTG9hZEZ1bmN0aW9uO1xyXG5cclxuICAgIEBJbnB1dCgnY29sbGVjdGlvbicpIF9jb2xsZWN0aW9uOiBhbnlbXSA9IFtdO1xyXG4gICAgZ2V0IGNvbGxlY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbGxlY3Rpb247XHJcbiAgICB9XHJcbiAgICBzZXQgY29sbGVjdGlvbih2YWx1ZTogYW55W10pIHtcclxuICAgICAgICB0aGlzLmNvbGxlY3Rpb25DaGFuZ2UuZW1pdCh2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5fY29sbGVjdGlvbiA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBASW5wdXQoKSBzZXQgc2Nyb2xsRWxlbWVudChlbGVtZW50OiBFbGVtZW50UmVmIHwgSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLl9zY3JvbGxFbGVtZW50ID0gZWxlbWVudCBpbnN0YW5jZW9mIEVsZW1lbnRSZWYgPyBlbGVtZW50IDogbmV3IEVsZW1lbnRSZWYoZWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KCkgZW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBmaWx0ZXI6IGFueTtcclxuICAgIEBJbnB1dCgpIGxvYWRPbkluaXQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgQElucHV0KCkgbG9hZE9uU2Nyb2xsOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgpIHBhZ2VTaXplOiBudW1iZXIgPSAyMDtcclxuXHJcbiAgICBAT3V0cHV0KCkgY29sbGVjdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55W10+KCk7XHJcblxyXG4gICAgQE91dHB1dCgnbG9hZGluZycpXHJcbiAgICBsb2FkaW5nRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPEluZmluaXRlU2Nyb2xsTG9hZGluZ0V2ZW50PigpO1xyXG5cclxuICAgIEBPdXRwdXQoJ2xvYWRlZCcpXHJcbiAgICBsb2FkZWRFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8SW5maW5pdGVTY3JvbGxMb2FkZWRFdmVudD4oKTtcclxuXHJcbiAgICBAT3V0cHV0KCdsb2FkRXJyb3InKVxyXG4gICAgbG9hZEVycm9yRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPEluZmluaXRlU2Nyb2xsTG9hZEVycm9yRXZlbnQ+KCk7XHJcblxyXG4gICAgQENvbnRlbnRDaGlsZHJlbihJbmZpbml0ZVNjcm9sbExvYWRCdXR0b25EaXJlY3RpdmUpXHJcbiAgICBwcml2YXRlIF9sb2FkQnV0dG9uUXVlcnk6IFF1ZXJ5TGlzdDxJbmZpbml0ZVNjcm9sbExvYWRCdXR0b25EaXJlY3RpdmU+O1xyXG5cclxuICAgIEBDb250ZW50Q2hpbGRyZW4oSW5maW5pdGVTY3JvbGxMb2FkaW5nRGlyZWN0aXZlKVxyXG4gICAgcHJpdmF0ZSBfbG9hZGluZ0luZGljYXRvclF1ZXJ5OiBRdWVyeUxpc3Q8SW5maW5pdGVTY3JvbGxMb2FkaW5nRGlyZWN0aXZlPjtcclxuXHJcbiAgICBwcml2YXRlIF9wYWdlczogYW55W11bXTtcclxuICAgIHByaXZhdGUgX25leHRQYWdlTnVtID0gMDtcclxuICAgIHByaXZhdGUgX2RvbU9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyO1xyXG4gICAgcHJpdmF0ZSBfc2Nyb2xsRXZlbnRTdWI6IFN1YnNjcmlwdGlvbjtcclxuICAgIHByaXZhdGUgX3VwZGF0ZVJlcXVlc3RzID0gbmV3IFN1YmplY3Q8SW5maW5pdGVTY3JvbGxSZXF1ZXN0PigpO1xyXG5cclxuICAgIHByaXZhdGUgX2lzTG9hZGluZyA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgcHJpdmF0ZSBfaXNFeGhhdXN0ZWQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIHByaXZhdGUgX2xvYWRCdXR0b25FbmFibGVkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XHJcbiAgICBwcml2YXRlIF9jYW5Mb2FkTWFudWFsbHk6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcblxyXG4gICAgcHJpdmF0ZSBfc2Nyb2xsRWxlbWVudDogRWxlbWVudFJlZjtcclxuICAgIHByaXZhdGUgX3N1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XHJcbiAgICBwcml2YXRlIF9sb2FkQnV0dG9uU3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcclxuICAgIHByaXZhdGUgX29uRGVzdHJveSA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudDogRWxlbWVudFJlZikge1xyXG4gICAgICAgIHRoaXMuX2NhbkxvYWRNYW51YWxseSA9IHRoaXMuX2lzTG9hZGluZy5waXBlKGNvbWJpbmVMYXRlc3QoXHJcbiAgICAgICAgICAgIHRoaXMuX2lzRXhoYXVzdGVkLFxyXG4gICAgICAgICAgICB0aGlzLl9sb2FkQnV0dG9uRW5hYmxlZCxcclxuICAgICAgICAgICAgKGlzTG9hZGluZywgaXNFeGhhdXN0ZWQsIGxvYWRCdXR0b25FbmFibGVkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIWlzTG9hZGluZyAmJiAhaXNFeGhhdXN0ZWQgJiYgbG9hZEJ1dHRvbkVuYWJsZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX3Njcm9sbEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsRWxlbWVudCA9IHRoaXMuX2VsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9sb2FkQnV0dG9uRW5hYmxlZC5uZXh0KCF0aGlzLmxvYWRPblNjcm9sbCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xyXG5cclxuICAgICAgICAvLyBUaGVyZSBhcmUgdHdvIGtpbmRzIG9mIHVwZGF0ZSByZXF1ZXN0czogY2hlY2sgYW5kIGxvYWQuXHJcbiAgICAgICAgLy8gQ2hlY2sgcmVxdWVzdHMgYXJlIHRocm90dGxlZCBhbmQgd2lsbCBvbmx5IGNhdXNlIGFuIHVwZGF0ZSBpZiBtb3JlIGRhdGEgaXMgcmVxdWlyZWRcclxuICAgICAgICAvLyB0byBmaWxsIHRoZSBzY3JvbGxpbmcgdmlldywgYW5kIGl0IGlzbid0IGFscmVhZHkgbG9hZGluZyBzb21lLlxyXG4gICAgICAgIC8vIExvYWQgcmVxdWVzdHMgYXJlIG5vdCB0aHJvdHRsZWQgYW5kIGFsd2F5cyByZXF1ZXN0IGEgcGFnZSBvZiBkYXRhLlxyXG4gICAgICAgIHRoaXMuX3VwZGF0ZVJlcXVlc3RzLnBpcGUoZmlsdGVyT3BlcmF0b3IocmVxdWVzdCA9PiByZXF1ZXN0LmNoZWNrKSwgYXVkaXRUaW1lKDIwMCksIHRha2VVbnRpbCh0aGlzLl9vbkRlc3Ryb3kpKS5zdWJzY3JpYmUodGhpcy5kb1JlcXVlc3QuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlUmVxdWVzdHMucGlwZShmaWx0ZXJPcGVyYXRvcihyZXF1ZXN0ID0+ICFyZXF1ZXN0LmNoZWNrKSwgdGFrZVVudGlsKHRoaXMuX29uRGVzdHJveSkpLnN1YnNjcmliZSh0aGlzLmRvUmVxdWVzdC5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlZCkge1xyXG4gICAgICAgICAgICAvLyBTdWJzY3JpYmUgdG8gc2Nyb2xsIGV2ZW50cyBhbmQgRE9NIGNoYW5nZXMuXHJcbiAgICAgICAgICAgIHRoaXMuYXR0YWNoRXZlbnRIYW5kbGVycygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ29ubmVjdCB0aGUgTG9hZCBNb3JlIGJ1dHRvbiB2aXNpYmxlIHN0YXRlLlxyXG4gICAgICAgIHRoaXMuX2NhbkxvYWRNYW51YWxseS5waXBlKHRha2VVbnRpbCh0aGlzLl9vbkRlc3Ryb3kpKS5zdWJzY3JpYmUoY2FuTG9hZCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvYWRCdXR0b25RdWVyeS5mb3JFYWNoKGxvYWRCdXR0b24gPT4ge1xyXG4gICAgICAgICAgICAgICAgbG9hZEJ1dHRvbi52aXNpYmxlID0gY2FuTG9hZDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIENvbm5lY3QgdGhlIGxvYWRpbmcgaW5kaWNhdG9yIHZpc2libGUgc3RhdGUuXHJcbiAgICAgICAgdGhpcy5faXNMb2FkaW5nLnBpcGUodGFrZVVudGlsKHRoaXMuX29uRGVzdHJveSkpLnN1YnNjcmliZShpc0xvYWRpbmcgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2FkaW5nSW5kaWNhdG9yUXVlcnkuZm9yRWFjaChsb2FkaW5nID0+IHtcclxuICAgICAgICAgICAgICAgIGxvYWRpbmcudmlzaWJsZSA9IGlzTG9hZGluZztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIExpbmsgdGhlIExvYWQgTW9yZSBidXR0b24gY2xpY2sgZXZlbnQgdG8gdHJpZ2dlciBhbiB1cGRhdGUuXHJcbiAgICAgICAgdGhpcy5hdHRhY2hMb2FkQnV0dG9uRXZlbnRzKCk7XHJcbiAgICAgICAgdGhpcy5fbG9hZEJ1dHRvblF1ZXJ5LmNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy5fb25EZXN0cm95KSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hdHRhY2hMb2FkQnV0dG9uRXZlbnRzKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEluaXRpYWwgdXBkYXRlLlxyXG4gICAgICAgIGlmICh0aGlzLmxvYWRPbkluaXQpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkTmV4dFBhZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgICAgIGxldCBjaGVjayA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmIChjaGFuZ2VzLmVuYWJsZWQgJiYgY2hhbmdlcy5lbmFibGVkLmN1cnJlbnRWYWx1ZSAhPT0gY2hhbmdlcy5lbmFibGVkLnByZXZpb3VzVmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKGNoYW5nZXMuZW5hYmxlZC5jdXJyZW50VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNoRXZlbnRIYW5kbGVycygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgY2hlY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGV0YWNoRXZlbnRIYW5kbGVycygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgIGlmIChjaGFuZ2VzLmZpbHRlciAmJiBjaGFuZ2VzLmZpbHRlci5jdXJyZW50VmFsdWUgIT09IGNoYW5nZXMuZmlsdGVyLnByZXZpb3VzVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgIGNoZWNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjaGFuZ2VzLmxvYWRPblNjcm9sbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9hZEJ1dHRvbkVuYWJsZWQubmV4dChcclxuICAgICAgICAgICAgICAgICAgICAhY2hhbmdlcy5sb2FkT25TY3JvbGwuY3VycmVudFZhbHVlXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoY2hhbmdlcy5wYWdlU2l6ZSAmJiBjaGFuZ2VzLnBhZ2VTaXplLmN1cnJlbnRWYWx1ZSAhPT0gY2hhbmdlcy5wYWdlU2l6ZS5wcmV2aW91c1ZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICBjaGVjayA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl91cGRhdGVSZXF1ZXN0cy5uZXh0KHtcclxuICAgICAgICAgICAgICAgIGNoZWNrOiBjaGVjayxcclxuICAgICAgICAgICAgICAgIHBhZ2VOdW1iZXI6IHRoaXMuX25leHRQYWdlTnVtLFxyXG4gICAgICAgICAgICAgICAgcGFnZVNpemU6IHRoaXMucGFnZVNpemUsXHJcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IHRoaXMuZmlsdGVyXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLmRldGFjaEV2ZW50SGFuZGxlcnMoKTtcclxuICAgICAgICB0aGlzLl9vbkRlc3Ryb3kubmV4dCgpO1xyXG4gICAgICAgIHRoaXMuX29uRGVzdHJveS5jb21wbGV0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVxdWVzdCBhbiBhZGRpdGlvbmFsIHBhZ2Ugb2YgZGF0YS5cclxuICAgICAqL1xyXG4gICAgbG9hZE5leHRQYWdlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3VwZGF0ZVJlcXVlc3RzLm5leHQoe1xyXG4gICAgICAgICAgICBjaGVjazogZmFsc2UsXHJcbiAgICAgICAgICAgIHBhZ2VOdW1iZXI6IHRoaXMuX25leHRQYWdlTnVtLFxyXG4gICAgICAgICAgICBwYWdlU2l6ZTogdGhpcy5wYWdlU2l6ZSxcclxuICAgICAgICAgICAgZmlsdGVyOiB0aGlzLmZpbHRlclxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVxdWVzdCBhIGNoZWNrIGZvciB3aGV0aGVyIGFuIGFkZGl0aW9uYWwgcGFnZSBvZiBkYXRhIGlzIHJlcXVpcmVkLiBUaGlzIGlzIHRocm90dGxlZC5cclxuICAgICAqL1xyXG4gICAgY2hlY2soKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fdXBkYXRlUmVxdWVzdHMubmV4dCh7XHJcbiAgICAgICAgICAgIGNoZWNrOiB0cnVlLFxyXG4gICAgICAgICAgICBwYWdlTnVtYmVyOiB0aGlzLl9uZXh0UGFnZU51bSxcclxuICAgICAgICAgICAgcGFnZVNpemU6IHRoaXMucGFnZVNpemUsXHJcbiAgICAgICAgICAgIGZpbHRlcjogdGhpcy5maWx0ZXJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENsZWFyIHRoZSBjb2xsZWN0aW9uLiBGdXR1cmUgcmVxdWVzdHMgd2lsbCBsb2FkIGZyb20gcGFnZSAwLlxyXG4gICAgICovXHJcbiAgICByZXNldCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBSZXNldCB0aGUgcGFnZSBjb3VudGVyLlxyXG4gICAgICAgIHRoaXMuX25leHRQYWdlTnVtID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5fcGFnZXMgPSBbXTtcclxuXHJcbiAgICAgICAgLy8gQ2xlYXIgdGhlIGNvbGxlY3Rpb24gKHdpdGhvdXQgY2hhbmdpbmcgdGhlIHJlZmVyZW5jZSkuXHJcbiAgICAgICAgaWYgKHRoaXMuY29sbGVjdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLmNvbGxlY3Rpb24ubGVuZ3RoID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFJlc2V0IHRoZSBleGhhdXN0ZWQgZmxhZywgYWxsb3dpbmcgdGhlIExvYWQgTW9yZSBidXR0b24gdG8gYXBwZWFyLlxyXG4gICAgICAgIHRoaXMuX2lzRXhoYXVzdGVkLm5leHQoZmFsc2UpO1xyXG5cclxuICAgICAgICAvLyBDYW5jZWwgYW55IHBlbmRpbmcgcmVxdWVzdHNcclxuICAgICAgICBpZiAodGhpcy5fc3Vic2NyaXB0aW9ucykge1xyXG4gICAgICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zLmZvckVhY2gocmVxdWVzdCA9PiByZXF1ZXN0LnVuc3Vic2NyaWJlKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbG9hZCB0aGUgZGF0YSB3aXRob3V0IGNsZWFyaW5nIHRoZSB2aWV3LlxyXG4gICAgICovXHJcbiAgICByZWxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5fcGFnZXMuZm9yRWFjaCgocGFnZSwgaSkgPT4gdGhpcy5yZWxvYWRQYWdlKGkpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbG9hZCB0aGUgZGF0YSBpbiBhIHNwZWNpZmljIHBhZ2Ugd2l0aG91dCBjbGVhcmluZyB0aGUgdmlldy5cclxuICAgICAqIEBwYXJhbSBwYWdlTnVtIFBhZ2UgbnVtYmVyXHJcbiAgICAgKi9cclxuICAgIHJlbG9hZFBhZ2UocGFnZU51bTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fdXBkYXRlUmVxdWVzdHMubmV4dCh7XHJcbiAgICAgICAgICAgIGNoZWNrOiBmYWxzZSxcclxuICAgICAgICAgICAgcGFnZU51bWJlcjogcGFnZU51bSxcclxuICAgICAgICAgICAgcGFnZVNpemU6IHRoaXMucGFnZVNpemUsXHJcbiAgICAgICAgICAgIGZpbHRlcjogdGhpcy5maWx0ZXIsXHJcbiAgICAgICAgICAgIHJlbG9hZDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQXR0YWNoIHNjcm9sbCBldmVudCBoYW5kbGVyIGFuZCBET00gb2JzZXJ2ZXIuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYXR0YWNoRXZlbnRIYW5kbGVycygpIHtcclxuXHJcbiAgICAgICAgLy8gaWYgdGhlIHNjcm9sbEVsZW1lbnQgaXMgZG9jdW1lbnRFbGVtZW50IHdlIG11c3Qgd2F0Y2ggZm9yIGEgc2Nyb2xsIGV2ZW50IG9uIHRoZSBkb2N1bWVudFxyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuX3Njcm9sbEVsZW1lbnQubmF0aXZlRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxIdG1sRWxlbWVudCA/IGRvY3VtZW50IDogdGhpcy5fc2Nyb2xsRWxlbWVudC5uYXRpdmVFbGVtZW50O1xyXG5cclxuICAgICAgICAvLyBTdWJzY3JpYmUgdG8gdGhlIHNjcm9sbCBldmVudCBvbiB0aGUgdGFyZ2V0IGVsZW1lbnQuXHJcbiAgICAgICAgdGhpcy5fc2Nyb2xsRXZlbnRTdWIgPSBmcm9tRXZlbnQodGFyZ2V0LCAnc2Nyb2xsJykuc3Vic2NyaWJlKHRoaXMuY2hlY2suYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIC8vIFN1YnNjcmliZSB0byBjaGlsZCBET00gY2hhbmdlcy4gVGhlIG1haW4gZWZmZWN0IG9mIHRoaXMgaXMgdG8gY2hlY2sgd2hldGhlciBldmVuIG1vcmUgZGF0YSBpc1xyXG4gICAgICAgIC8vIHJlcXVpcmVkIGFmdGVyIHRoZSBpbml0aWFsIGxvYWQuXHJcbiAgICAgICAgdGhpcy5fZG9tT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLmNoZWNrLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMuX2RvbU9ic2VydmVyLm9ic2VydmUodGhpcy5fc2Nyb2xsRWxlbWVudC5uYXRpdmVFbGVtZW50LCB7XHJcbiAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcclxuICAgICAgICAgICAgc3VidHJlZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGV0YWNoIHNjcm9sbCBldmVudCBoYW5kbGVyIGFuZCBET00gb2JzZXJ2ZXIuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZGV0YWNoRXZlbnRIYW5kbGVycygpIHtcclxuICAgICAgICBpZiAodGhpcy5fc2Nyb2xsRXZlbnRTdWIpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsRXZlbnRTdWIudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsRXZlbnRTdWIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2RvbU9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RvbU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgdGhpcy5fZG9tT2JzZXJ2ZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZSBhbnkgZXhpc3RpbmcgZXZlbnQgc3Vic2NyaXB0aW9ucyBmb3IgdGhlIGxvYWQgYnV0dG9uIGBsb2FkYCBldmVudCwgdGhlbiBhdHRhY2ggc3Vic2NyaXB0aW9uc1xyXG4gICAgICogZm9yIGFueSBpbiB0aGUgcXVlcnkuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYXR0YWNoTG9hZEJ1dHRvbkV2ZW50cygpIHtcclxuICAgICAgICB0aGlzLl9sb2FkQnV0dG9uU3Vic2NyaXB0aW9ucy5mb3JFYWNoKHMgPT4gcy51bnN1YnNjcmliZSgpKTtcclxuICAgICAgICB0aGlzLl9sb2FkQnV0dG9uU3Vic2NyaXB0aW9ucyA9IHRoaXMuX2xvYWRCdXR0b25RdWVyeS5tYXAoXHJcbiAgICAgICAgICAgIGxvYWRCdXR0b24gPT4gbG9hZEJ1dHRvbi5sb2FkLnN1YnNjcmliZSh0aGlzLmxvYWROZXh0UGFnZS5iaW5kKHRoaXMpKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25kaXRpb25hbGx5IGxvYWRzIGEgcGFnZSBpbnRvIHRoZSBjb2xsZWN0aW9uIGJhc2VkIG9uIGRpcmVjdGl2ZSBzdGF0ZSBhbmQgcmVxdWVzdCBwYXJhbWV0ZXJzLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGRvUmVxdWVzdChyZXF1ZXN0OiBJbmZpbml0ZVNjcm9sbFJlcXVlc3QpIHtcclxuXHJcbiAgICAgICAgLy8gTG9hZCBhIG5ldyBwYWdlIGlmIHRoZSBzY3JvbGwgcG9zaXRpb24gaXMgYmV5b25kIHRoZSB0aHJlc2hob2xkIGFuZCBpZiB0aGUgY2xpZW50IGNvZGUgZGlkIG5vdFxyXG4gICAgICAgIC8vIGNhbmNlbC5cclxuICAgICAgICBpZiAodGhpcy5uZWVkc0RhdGEocmVxdWVzdCkgJiYgdGhpcy5iZWdpbkxvYWRpbmcocmVxdWVzdCkpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIEludm9rZSB0aGUgY2FsbGJhY2sgbG9hZCBmdW5jdGlvbiwgd2hpY2ggcmV0dXJucyBhIHByb21vc2Ugb3IgcGxhaW4gZGF0YS5cclxuICAgICAgICAgICAgY29uc3QgbG9hZFJlc3VsdCA9IHRoaXMubG9hZChyZXF1ZXN0LnBhZ2VOdW1iZXIsIHJlcXVlc3QucGFnZVNpemUsIHJlcXVlc3QuZmlsdGVyKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG9ic2VydmFibGUgPSBBcnJheS5pc0FycmF5KGxvYWRSZXN1bHQpID8gb2YobG9hZFJlc3VsdCkgOiBmcm9tPGFueVtdPihsb2FkUmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IG9ic2VydmFibGUucGlwZShmaXJzdCgpKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBpdGVtcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoYXQgdGhlIHBhcmFtZXRlcnMgaGF2ZSBub3QgY2hhbmdlZCBzaW5jZSB0aGUgbG9hZCBzdGFydGVkO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG90aGVyd2lzZSBkaXNjYXJkIHRoZSByZXN1bHRzLlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0LmZpbHRlciA9PT0gdGhpcy5maWx0ZXIgJiYgcmVxdWVzdC5wYWdlU2l6ZSA9PT0gdGhpcy5wYWdlU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbXMgJiYgaXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFBhZ2VJdGVtcyhyZXF1ZXN0LnBhZ2VOdW1iZXIsIGl0ZW1zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRW1pdCB0aGUgbG9hZGVkIGV2ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5kTG9hZGluZyhyZXF1ZXN0LCBpdGVtcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJlYXNvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRW1pdCB0aGUgbG9hZEVycm9yIGV2ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmRMb2FkaW5nV2l0aEVycm9yKHJlcXVlc3QsIHJlYXNvbik7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSB0aGlzIHJlcXVlc3QgZnJvbSB0aGUgbGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMgPSB0aGlzLl9zdWJzY3JpcHRpb25zLmZpbHRlcihzID0+IHMgIT09IHN1YnNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAvLyBhZGQgdGhlIHN1YnNjcmlwdGlvbiB0byB0aGUgbGlzdCBvZiByZXF1ZXN0c1xyXG4gICAgICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnB1c2goc3Vic2NyaXB0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHJlcXVlc3Qgc2hvdWxkIGJlIGZ1bGZpbGxlZC5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBuZWVkc0RhdGEocmVxdWVzdDogSW5maW5pdGVTY3JvbGxSZXF1ZXN0KTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQWx3YXlzIGxvYWQgZm9yIGEgbG9hZCByZXF1ZXN0XHJcbiAgICAgICAgaWYgKCFyZXF1ZXN0LmNoZWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWdub3JlIGEgY2hlY2sgcmVxdWVzdCB3aGVuIHRoZSBlbmQgb2YgZGF0YSBoYXMgYmVlbiBkZXRlY3RlZCwgb3IgaWYgZGF0YSBpcyBjdXJyZW50bHkgbG9hZGluZy5cclxuICAgICAgICBpZiAodGhpcy5faXNFeGhhdXN0ZWQuZ2V0VmFsdWUoKSB8fCB0aGlzLl9pc0xvYWRpbmcuZ2V0VmFsdWUoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBMb2FkIGlmIHRoZSByZW1haW5pbmcgc2Nyb2xsIGFyZWEgaXMgPD0gdGhlIGVsZW1lbnQgaGVpZ2h0LlxyXG4gICAgICAgIGlmICh0aGlzLl9zY3JvbGxFbGVtZW50ICYmIHRoaXMubG9hZE9uU2Nyb2xsKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gPEhUTUxFbGVtZW50PnRoaXMuX3Njcm9sbEVsZW1lbnQubmF0aXZlRWxlbWVudDtcclxuICAgICAgICAgICAgY29uc3QgcmVtYWluaW5nU2Nyb2xsID1cclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC1cclxuICAgICAgICAgICAgICAgIChlbGVtZW50LnNjcm9sbFRvcCArIGVsZW1lbnQuY2xpZW50SGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZW1haW5pbmdTY3JvbGwgPD0gZWxlbWVudC5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIHN0YXRlIGZvciB0aGUgYmVnaW5uaW5nIG9mIGEgbG9hZC4gUmV0dXJucyBmYWxzZSBpZiB0aGUgYGxvYWRpbmdgIGV2ZW50IHdhcyBjYW5jZWxsZWQuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYmVnaW5Mb2FkaW5nKHJlcXVlc3Q6IEluZmluaXRlU2Nyb2xsUmVxdWVzdCk6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgICBjb25zdCBldmVudCA9IG5ldyBJbmZpbml0ZVNjcm9sbExvYWRpbmdFdmVudChcclxuICAgICAgICAgICAgcmVxdWVzdC5wYWdlTnVtYmVyLFxyXG4gICAgICAgICAgICByZXF1ZXN0LnBhZ2VTaXplLFxyXG4gICAgICAgICAgICByZXF1ZXN0LmZpbHRlclxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nRXZlbnQuZW1pdChldmVudCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2lzTG9hZGluZy5uZXh0KCFldmVudC5kZWZhdWx0UHJldmVudGVkKCkpO1xyXG5cclxuICAgICAgICByZXR1cm4gIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFBhZ2VJdGVtcyhwYWdlTnVtOiBudW1iZXIsIGl0ZW1zOiBhbnlbXSkge1xyXG4gICAgICAgIHRoaXMuX3BhZ2VzW3BhZ2VOdW1dID0gaXRlbXM7XHJcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uID0gdGhpcy5fcGFnZXMucmVkdWNlKChwcmV2aW91cywgY3VycmVudCkgPT4gcHJldmlvdXMuY29uY2F0KGN1cnJlbnQpLCBbXSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIHN0YXRlIGZyb20gYSBzdWNjZXNzZnVsIGxvYWQuIFJhaXNlcyB0aGUgYGxvYWRlZGAgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZW5kTG9hZGluZyhyZXF1ZXN0OiBJbmZpbml0ZVNjcm9sbFJlcXVlc3QsIGRhdGE/OiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9pc0xvYWRpbmcubmV4dChmYWxzZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGlzRXhoYXVzdGVkID0gISEoZGF0YSAmJiBkYXRhLmxlbmd0aCA8IHRoaXMucGFnZVNpemUpO1xyXG4gICAgICAgIHRoaXMuX2lzRXhoYXVzdGVkLm5leHQoaXNFeGhhdXN0ZWQpO1xyXG5cclxuICAgICAgICB0aGlzLmxvYWRlZEV2ZW50LmVtaXQoXHJcbiAgICAgICAgICAgIG5ldyBJbmZpbml0ZVNjcm9sbExvYWRlZEV2ZW50KFxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5wYWdlTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5wYWdlU2l6ZSxcclxuICAgICAgICAgICAgICAgIHJlcXVlc3QuZmlsdGVyLFxyXG4gICAgICAgICAgICAgICAgZGF0YSxcclxuICAgICAgICAgICAgICAgIGlzRXhoYXVzdGVkXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBpZiAoIXJlcXVlc3QucmVsb2FkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX25leHRQYWdlTnVtICs9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyBzdGF0ZSBmcm9tIGEgZmFpbGVkIGxvYWQuIFJhaXNlcyB0aGUgYGxvYWRFcnJvcmAgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZW5kTG9hZGluZ1dpdGhFcnJvcihyZXF1ZXN0OiBJbmZpbml0ZVNjcm9sbFJlcXVlc3QsIGVycm9yOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9pc0xvYWRpbmcubmV4dChmYWxzZSk7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZEVycm9yRXZlbnQuZW1pdChcclxuICAgICAgICAgICAgbmV3IEluZmluaXRlU2Nyb2xsTG9hZEVycm9yRXZlbnQoXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0LnBhZ2VOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0LnBhZ2VTaXplLFxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5maWx0ZXIsXHJcbiAgICAgICAgICAgICAgICBlcnJvclxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBpbnRlcm5hbCBkYXRhIGFzc29jaWF0ZWQgd2l0aCBhIGxvYWQvY2hlY2sgcmVxdWVzdC5cclxuICovXHJcbmNsYXNzIEluZmluaXRlU2Nyb2xsUmVxdWVzdCB7XHJcbiAgICBjaGVjazogYm9vbGVhbjtcclxuICAgIHBhZ2VOdW1iZXI6IG51bWJlcjtcclxuICAgIHBhZ2VTaXplOiBudW1iZXI7XHJcbiAgICBmaWx0ZXI6IGFueTtcclxuICAgIHJlbG9hZD86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEluZmluaXRlU2Nyb2xsTG9hZEZ1bmN0aW9uID0gKFxyXG4gICAgcGFnZU51bTogbnVtYmVyLFxyXG4gICAgcGFnZVNpemU6IG51bWJlcixcclxuICAgIGZpbHRlcjogYW55XHJcbikgPT4gYW55IHwgUHJvbWlzZTxhbnk+O1xyXG5cclxuLyoqXHJcbiAqIEV2ZW50IHJhaXNlZCBiZWZvcmUgdGhlIGBsb2FkaW5nYCBmdW5jdGlvbiBpcyBjYWxsZWQuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSW5maW5pdGVTY3JvbGxMb2FkaW5nRXZlbnQge1xyXG4gICAgcHJpdmF0ZSBfZGVmYXVsdFByZXZlbnRlZCA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBpbmRleCBvZiB0aGUgcmVxdWVzdGVkIHBhZ2UsIHN0YXJ0aW5nIGZyb20gMC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgcGFnZU51bWJlcjogbnVtYmVyLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBudW1iZXIgb2YgaXRlbXMgcmVxdWVzdGVkLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBwYWdlU2l6ZTogbnVtYmVyLFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBmaWx0ZXIgZGV0YWlscyBhcyBwcm92aWRlZCB2aWEgdGhlIGBmaWx0ZXJgIGJpbmRpbmcuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGZpbHRlcjogYW55XHJcbiAgICApIHsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUHJldmVudHMgdGhlIGRlZmF1bHQgYmVoYXZpb3VyIG9mIHRoZSBgbG9hZGluZ2AgZXZlbnQgKGxvYWRpbmcgZnVuY3Rpb24gd2lsbCBub3QgYmUgY2FsbGVkKS5cclxuICAgICAqL1xyXG4gICAgcHJldmVudERlZmF1bHQoKSB7XHJcbiAgICAgICAgdGhpcy5fZGVmYXVsdFByZXZlbnRlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZGVmYXVsdFByZXZlbnRlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGVmYXVsdFByZXZlbnRlZDtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEV2ZW50IHJhaXNlZCB3aGVuIHRoZSBsb2FkaW5nIGZ1bmN0aW9uIHJlc3VsdCBoYXMgYmVlbiByZXNvbHZlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbGxlY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSW5maW5pdGVTY3JvbGxMb2FkZWRFdmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgaW5kZXggb2YgdGhlIHJlcXVlc3RlZCBwYWdlLCBzdGFydGluZyBmcm9tIDAuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHBhZ2VOdW1iZXI6IG51bWJlcixcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgbnVtYmVyIG9mIGl0ZW1zIHJlcXVlc3RlZC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgcGFnZVNpemU6IG51bWJlcixcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgZmlsdGVyIGRldGFpbHMgYXMgcHJvdmlkZWQgdmlhIHRoZSBgZmlsdGVyYCBiaW5kaW5nLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBmaWx0ZXI6IGFueSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgcmVzdWx0IG9mIHRoZSBwcm9taXNlIHJldHVybmVkIGZyb20gdGhlIGxvYWRpbmcgZnVuY3Rpb24uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGRhdGE6IGFueSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUcnVlIGlmIHRoZSBkYXRhIGlzIGNvbnNpZGVyZWQgZXhoYXVzdGVkIChudW1iZXIgb2YgaXRlbXMgcmV0dXJuZWQgbGVzcyB0aGFuIGBwYWdlU2l6ZWApLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBleGhhdXN0ZWQ6IGJvb2xlYW5cclxuICAgICkgeyB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFdmVudCByYWlzZWQgaWYgdGhlIGxvYWRpbmcgZnVuY3Rpb24gcmV0dXJucyBhIHJlamVjdGVkIHByb21pc2UuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSW5maW5pdGVTY3JvbGxMb2FkRXJyb3JFdmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgaW5kZXggb2YgdGhlIHJlcXVlc3RlZCBwYWdlLCBzdGFydGluZyBmcm9tIDAuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHBhZ2VOdW1iZXI6IG51bWJlcixcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgbnVtYmVyIG9mIGl0ZW1zIHJlcXVlc3RlZC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgcGFnZVNpemU6IG51bWJlcixcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgZmlsdGVyIGRldGFpbHMgYXMgcHJvdmlkZWQgdmlhIHRoZSBgZmlsdGVyYCBiaW5kaW5nLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBmaWx0ZXI6IGFueSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgb2JqZWN0IHByb3ZpZGVkIHdoZW4gcmVqZWN0aW5nIHRoZSBwcm9taXNlLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBlcnJvcjogYW55XHJcbiAgICApIHsgfVxyXG59XHJcbiJdfQ==