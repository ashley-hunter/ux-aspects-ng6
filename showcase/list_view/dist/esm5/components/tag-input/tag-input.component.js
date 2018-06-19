/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ContentChildren, ElementRef, EventEmitter, HostListener, Inject, Input, Output, QueryList, TemplateRef, ViewChild, forwardRef, HostBinding } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DOCUMENT } from '@angular/platform-browser';
import { TypeaheadComponent, TypeaheadKeyService } from '../typeahead/index';
import { TagInputEvent } from './tag-input-event';
var /** @type {?} */ uniqueId = 0;
var /** @type {?} */ TAGINPUT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return TagInputComponent; }),
    multi: true
};
var /** @type {?} */ TAGINPUT_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(function () { return TagInputComponent; }),
    multi: true
};
var TagInputComponent = /** @class */ (function () {
    function TagInputComponent(_element, _document, _typeaheadKeyService) {
        this._element = _element;
        this._document = _document;
        this._typeaheadKeyService = _typeaheadKeyService;
        this.id = "ux-tag-input-" + ++uniqueId;
        this.tagsChange = new EventEmitter();
        this.inputChange = new EventEmitter();
        this.addOnPaste = true;
        this.disabled = false;
        this.enforceTagLimits = false;
        this.freeInput = true;
        this.maxTags = Number.MAX_VALUE;
        this.minTags = 0;
        this.placeholder = '';
        this.showTypeaheadOnClick = false;
        this.tagDelimiters = '';
        this.tagClass = function () { return undefined; };
        this.validationErrors = {};
        this.tagAdding = new EventEmitter();
        this.tagAdded = new EventEmitter();
        this.tagInvalidated = new EventEmitter();
        this.tagRemoving = new EventEmitter();
        this.tagRemoved = new EventEmitter();
        this.tagClick = new EventEmitter();
        this.selectedIndex = -1;
        this.tagApi = {
            getTagDisplay: this.getTagDisplay.bind(this),
            removeTagAt: this.removeTagAt.bind(this),
            canRemoveTagAt: this.canRemoveTagAt.bind(this)
        };
        this.valid = true;
        this.inputValid = true;
        this._input = '';
        this._tags = [];
        this._onChangeHandler = function () { };
        this._onTouchedHandler = function () { };
    }
    Object.defineProperty(TagInputComponent.prototype, "tags", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this._tags) {
                this._tags = [];
            }
            return this._tags;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._tags = value;
            this._onChangeHandler(this._tags);
            this.tagsChange.emit(this._tags);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagInputComponent.prototype, "input", {
        get: /**
         * @return {?}
         */
        function () {
            return this._input;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._input = value;
            this.inputChange.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TagInputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.tagTemplate) {
            this.tagTemplate = this._defaultTagTemplate;
        }
    };
    /**
     * @return {?}
     */
    TagInputComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Watch for optional child typeahead control
        this.connectTypeahead(this.typeaheadQuery.first);
        this.typeaheadQuery.changes.subscribe(function (query) {
            _this.connectTypeahead(query.first);
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    TagInputComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["disabled"]) {
            if (changes["disabled"].currentValue) {
                // Clear selection and close dropdown
                this.selectedIndex = -1;
                if (this.typeahead) {
                    this.typeahead.open = false;
                }
            }
        }
        // Update validation status
        this.validate();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TagInputComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value) {
            this.tags = value;
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    TagInputComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChangeHandler = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    TagInputComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouchedHandler = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    TagInputComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
    /**
     * @return {?}
     */
    TagInputComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._typeaheadSubscription) {
            this._typeaheadSubscription.unsubscribe();
        }
    };
    /**
     * Validate the value of the control (tags property).
     */
    /**
     * Validate the value of the control (tags property).
     * @return {?}
     */
    TagInputComponent.prototype.validate = /**
     * Validate the value of the control (tags property).
     * @return {?}
     */
    function () {
        this.valid = true;
        var /** @type {?} */ tagRangeError = null;
        if (this.tags && (this.tags.length < this.minTags || this.tags.length > this.maxTags)) {
            tagRangeError = {
                given: this.tags.length,
                min: this.minTags,
                max: this.maxTags
            };
            this.valid = false;
        }
        this.validationErrors['tagRangeError'] = tagRangeError;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TagInputComponent.prototype.keyHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.disabled) {
            return;
        }
        // Get the input field cursor location
        var /** @type {?} */ inputCursorPos = this.tagInput.nativeElement.selectionStart;
        // Determine if the input field has any text selected
        var /** @type {?} */ hasSelection = this.tagInput.nativeElement.selectionStart !== this.tagInput.nativeElement.selectionEnd;
        // Determine if a tag has focus
        var /** @type {?} */ tagSelected = this.isValidTagIndex(this.selectedIndex);
        var /** @type {?} */ inputLength = this.input ? this.input.length : 0;
        // Check whether the arrow keys can move the selection. Otherwise the input field takes the event.
        var /** @type {?} */ canNavigateLeft = tagSelected || (inputCursorPos <= 0 && !hasSelection);
        var /** @type {?} */ canNavigateRight = tagSelected || (inputCursorPos >= inputLength && !hasSelection);
        // Forward key events to the typeahead component.
        this._typeaheadKeyService.handleKey(event, this.typeahead);
        switch (event.key) {
            case 'Enter':
                // Check if a typeahead option is highlighted
                if (this.typeahead && this.typeahead.open && this.typeahead.highlighted) {
                    // Add the typeahead option as a tag, clear the input, and close the dropdown
                    this.commitTypeahead(this.typeahead.highlighted);
                    this.typeahead.open = false;
                }
                else {
                    // Validate and add the input text as a tag, if possible
                    this.commitInput();
                }
                event.preventDefault();
                break;
            case 'Backspace':
                if (canNavigateLeft) {
                    this.backspace();
                    event.stopPropagation();
                    event.preventDefault();
                }
                break;
            case 'Delete':
            case 'Del':
                if (tagSelected) {
                    this.removeTagAt(this.selectedIndex);
                }
                break;
            case 'ArrowLeft':
            case 'Left':
                if (canNavigateLeft) {
                    this.moveSelection(-1);
                    event.preventDefault();
                }
                break;
            case 'ArrowRight':
            case 'Right':
                if (canNavigateRight) {
                    this.moveSelection(1);
                    event.preventDefault();
                }
                break;
        }
        // Check for keys in the tagDelimiters
        if (this.tagDelimiters && this.tagDelimiters.indexOf(this.getKeyChar(event)) >= 0) {
            // Commit previous text
            this.commitInput();
            event.stopPropagation();
            event.preventDefault();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TagInputComponent.prototype.focusOutHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        // If a click on the typeahead is in progress, don't do anything.
        // This works around an issue in IE where clicking a scrollbar drops focus.
        if (this.typeahead && this.typeahead.clicking) {
            return;
        }
        // Close the dropdown on blur
        setTimeout(function () {
            if (!_this._element.nativeElement.contains(_this._document.activeElement)) {
                _this.selectedIndex = -1;
                if (_this.typeahead) {
                    _this.typeahead.open = false;
                }
            }
        }, 200);
    };
    /**
     * @param {?} event
     * @param {?} tag
     * @param {?} index
     * @return {?}
     */
    TagInputComponent.prototype.tagClickHandler = /**
     * @param {?} event
     * @param {?} tag
     * @param {?} index
     * @return {?}
     */
    function (event, tag, index) {
        if (this.disabled) {
            return;
        }
        // Send tagClick event
        var /** @type {?} */ tagClickEvent = new TagInputEvent(tag);
        this.tagClick.emit(tagClickEvent);
        // Prevent focus if preventDefault() was called
        if (tagClickEvent.defaultPrevented()) {
            event.preventDefault();
            return;
        }
        // Select the tag (for IE that doesn't propagate focus)
        this.selectTagAt(index);
    };
    /**
     * @return {?}
     */
    TagInputComponent.prototype.inputClickHandler = /**
     * @return {?}
     */
    function () {
        if (this.disabled) {
            return;
        }
        if (this.typeahead && this.showTypeaheadOnClick) {
            this.typeahead.open = true;
        }
    };
    /**
     * @return {?}
     */
    TagInputComponent.prototype.inputFocusHandler = /**
     * @return {?}
     */
    function () {
        if (this.disabled) {
            return;
        }
        this.selectInput();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TagInputComponent.prototype.inputPasteHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.disabled) {
            return;
        }
        if (this.addOnPaste) {
            // Get text from the clipboard
            var /** @type {?} */ input = null;
            if (event.clipboardData) {
                input = event.clipboardData.getData('text/plain');
            }
            else if ((/** @type {?} */ (window)).clipboardData) {
                // Internet Explorer only
                input = (/** @type {?} */ (window)).clipboardData.getData('Text');
            }
            // Commit the clipboard text directly
            if (this.commit(input)) {
                this.selectInput();
                event.stopPropagation();
                event.preventDefault();
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TagInputComponent.prototype.typeaheadOptionSelectedHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.disabled) {
            return;
        }
        // When the typeahead sends the optionSelected event, commit the object directly
        this.commitTypeahead(event.option);
    };
    /**
     * Commit the current input value and clear the input field if successful.
     */
    /**
     * Commit the current input value and clear the input field if successful.
     * @return {?}
     */
    TagInputComponent.prototype.commitInput = /**
     * Commit the current input value and clear the input field if successful.
     * @return {?}
     */
    function () {
        if (this.commit(this.input)) {
            this.selectInput();
            this.input = '';
        }
    };
    /**
     * Commit the given tag object and clear the input if successful.
     */
    /**
     * Commit the given tag object and clear the input if successful.
     * @param {?} tag
     * @return {?}
     */
    TagInputComponent.prototype.commitTypeahead = /**
     * Commit the given tag object and clear the input if successful.
     * @param {?} tag
     * @return {?}
     */
    function (tag) {
        if (this.addTag(tag)) {
            this.selectInput();
            this.input = '';
        }
    };
    /**
     * Commit the given string value as one or more tags, if validation passes. Returns true if the tag(s) were created.
     */
    /**
     * Commit the given string value as one or more tags, if validation passes. Returns true if the tag(s) were created.
     * @param {?} input
     * @return {?}
     */
    TagInputComponent.prototype.commit = /**
     * Commit the given string value as one or more tags, if validation passes. Returns true if the tag(s) were created.
     * @param {?} input
     * @return {?}
     */
    function (input) {
        if (input && this.freeInput) {
            // Split the tags by the tagDelimiters if configured
            var /** @type {?} */ newTags = this.splitTagInput(input);
            // Check tag validation for all of the individual values
            var /** @type {?} */ allValid = true;
            try {
                for (var newTags_1 = tslib_1.__values(newTags), newTags_1_1 = newTags_1.next(); !newTags_1_1.done; newTags_1_1 = newTags_1.next()) {
                    var newTag = newTags_1_1.value;
                    var /** @type {?} */ valid = this.validateTag(newTag);
                    if (!valid) {
                        allValid = false;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (newTags_1_1 && !newTags_1_1.done && (_a = newTags_1.return)) _a.call(newTags_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            // Add the tags if all are valid
            if (allValid) {
                try {
                    for (var newTags_2 = tslib_1.__values(newTags), newTags_2_1 = newTags_2.next(); !newTags_2_1.done; newTags_2_1 = newTags_2.next()) {
                        var newTag = newTags_2_1.value;
                        this.addTag(this.createTag(newTag));
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (newTags_2_1 && !newTags_2_1.done && (_b = newTags_2.return)) _b.call(newTags_2);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                return true;
            }
        }
        return false;
        var e_1, _a, e_2, _b;
    };
    /**
     * If no tag is selected, select the rightmost tag. If a tag is selected, remove it.
     */
    /**
     * If no tag is selected, select the rightmost tag. If a tag is selected, remove it.
     * @return {?}
     */
    TagInputComponent.prototype.backspace = /**
     * If no tag is selected, select the rightmost tag. If a tag is selected, remove it.
     * @return {?}
     */
    function () {
        if (this.disabled) {
            return;
        }
        if (!this.isValidTagIndex(this.selectedIndex)) {
            this.selectTagAt(this.tags.length - 1);
        }
        else {
            this.removeTagAt(this.selectedIndex);
        }
    };
    /**
     * Move the highlighted option forwards or backwards in the list. Wraps at the limits.
     * @param d Value to be added to the selected index, i.e. -1 to move backwards, +1 to move forwards.
     */
    /**
     * Move the highlighted option forwards or backwards in the list. Wraps at the limits.
     * @param {?} d Value to be added to the selected index, i.e. -1 to move backwards, +1 to move forwards.
     * @return {?}
     */
    TagInputComponent.prototype.moveSelection = /**
     * Move the highlighted option forwards or backwards in the list. Wraps at the limits.
     * @param {?} d Value to be added to the selected index, i.e. -1 to move backwards, +1 to move forwards.
     * @return {?}
     */
    function (d) {
        if (this.disabled) {
            return;
        }
        if (this.isValidSelectIndex(this.selectedIndex)) {
            this.selectedIndex += d;
            // Do wrapping of selection when out of bounds
            if (this.selectedIndex < 0) {
                this.selectedIndex = this.tags.length;
            }
            else if (this.selectedIndex > this.tags.length) {
                this.selectedIndex = 0;
            }
        }
    };
    /**
     * Returns a value to display for the given tag. Uses display function/property name if set, otherwise assumes that the tag is a simple string.
     */
    /**
     * Returns a value to display for the given tag. Uses display function/property name if set, otherwise assumes that the tag is a simple string.
     * @param {?} tag
     * @return {?}
     */
    TagInputComponent.prototype.getTagDisplay = /**
     * Returns a value to display for the given tag. Uses display function/property name if set, otherwise assumes that the tag is a simple string.
     * @param {?} tag
     * @return {?}
     */
    function (tag) {
        if (typeof this.display === 'function') {
            return this.display(tag);
        }
        if (typeof this.display === 'string') {
            return tag[/** @type {?} */ (this.display)];
        }
        return tag;
    };
    /**
     * Returns true if the given index is selected (tag index or input field).
     */
    /**
     * Returns true if the given index is selected (tag index or input field).
     * @param {?} index
     * @return {?}
     */
    TagInputComponent.prototype.isSelected = /**
     * Returns true if the given index is selected (tag index or input field).
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return index === this.selectedIndex;
    };
    /**
     * Select the tag at the given index. Does nothing if disabled is true.
     */
    /**
     * Select the tag at the given index. Does nothing if disabled is true.
     * @param {?} tagIndex
     * @return {?}
     */
    TagInputComponent.prototype.selectTagAt = /**
     * Select the tag at the given index. Does nothing if disabled is true.
     * @param {?} tagIndex
     * @return {?}
     */
    function (tagIndex) {
        if (this.disabled) {
            return;
        }
        if (this.isValidTagIndex(tagIndex)) {
            this.selectedIndex = tagIndex;
        }
    };
    /**
     * Select the input field, giving it focus. Does nothing if disabled is true.
     */
    /**
     * Select the input field, giving it focus. Does nothing if disabled is true.
     * @return {?}
     */
    TagInputComponent.prototype.selectInput = /**
     * Select the input field, giving it focus. Does nothing if disabled is true.
     * @return {?}
     */
    function () {
        if (this.disabled) {
            return;
        }
        this.selectedIndex = this.tags.length;
    };
    /**
     * Remove the tag at the given index. Does nothing if disabled is true or the minTags property prevents removal.
     */
    /**
     * Remove the tag at the given index. Does nothing if disabled is true or the minTags property prevents removal.
     * @param {?} tagIndex
     * @return {?}
     */
    TagInputComponent.prototype.removeTagAt = /**
     * Remove the tag at the given index. Does nothing if disabled is true or the minTags property prevents removal.
     * @param {?} tagIndex
     * @return {?}
     */
    function (tagIndex) {
        if (this.disabled || !this.canRemoveTagAt(tagIndex)) {
            return;
        }
        // Check that the tagIndex is in range
        if (this.isValidTagIndex(tagIndex)) {
            var /** @type {?} */ tag = this.tags[tagIndex];
            var /** @type {?} */ tagRemovingEvent = new TagInputEvent(tag);
            this.tagRemoving.emit(tagRemovingEvent);
            if (!tagRemovingEvent.defaultPrevented()) {
                // Select input first to avoid issues with dropping focus
                this.selectInput();
                // Remove the tag
                this.tags.splice(tagIndex, 1);
                // Set focus again since indices have changed
                this.selectInput();
                this.tagRemoved.emit(new TagInputEvent(tag));
                this.validate();
            }
        }
    };
    /**
     * Returns true if the tag at the given index can be removed.
     */
    /**
     * Returns true if the tag at the given index can be removed.
     * @param {?} tagIndex
     * @return {?}
     */
    TagInputComponent.prototype.canRemoveTagAt = /**
     * Returns true if the tag at the given index can be removed.
     * @param {?} tagIndex
     * @return {?}
     */
    function (tagIndex) {
        return this.tags.length > this.minTags || !this.enforceTagLimits;
    };
    /**
     * Returns true if the input field should be available.
     */
    /**
     * Returns true if the input field should be available.
     * @return {?}
     */
    TagInputComponent.prototype.isInputVisible = /**
     * Returns true if the input field should be available.
     * @return {?}
     */
    function () {
        return this.tags.length < this.maxTags || !this.enforceTagLimits;
    };
    /**
     * Returns true if any part of the control has focus.
     */
    /**
     * Returns true if any part of the control has focus.
     * @return {?}
     */
    TagInputComponent.prototype.hasFocus = /**
     * Returns true if any part of the control has focus.
     * @return {?}
     */
    function () {
        return this.isValidSelectIndex(this.selectedIndex);
    };
    /**
     * @param {?} typeahead
     * @return {?}
     */
    TagInputComponent.prototype.connectTypeahead = /**
     * @param {?} typeahead
     * @return {?}
     */
    function (typeahead) {
        var _this = this;
        if (this._typeaheadSubscription) {
            this._typeaheadSubscription.unsubscribe();
            this._typeaheadSubscription = null;
        }
        this.typeahead = typeahead;
        if (this.typeahead) {
            // Set up event handler for selected options
            this._typeaheadSubscription = this.typeahead.optionSelected.subscribe(this.typeaheadOptionSelectedHandler.bind(this));
            this._typeaheadSubscription.add(this.typeahead.highlightedElementChange.subscribe(function (element) {
                _this.highlightedElement = element;
            }));
        }
    };
    /**
     * Validate the given tagValue with the tagPattern, if set. Update validationErrors on validation failure.
     * @param {?} tagValue
     * @return {?}
     */
    TagInputComponent.prototype.validateTag = /**
     * Validate the given tagValue with the tagPattern, if set. Update validationErrors on validation failure.
     * @param {?} tagValue
     * @return {?}
     */
    function (tagValue) {
        var /** @type {?} */ inputPattern = null;
        this.inputValid = true;
        if (this.tagPattern && !this.tagPattern.test(tagValue)) {
            inputPattern = {
                given: tagValue,
                pattern: this.tagPattern
            };
            this.inputValid = false;
        }
        this.validationErrors['inputPattern'] = inputPattern;
        return this.inputValid;
    };
    /**
     * Create a tag object for the given tagValue. If createTagHandler is specified, use it; otherwise if displayProperty is specified, create an object with the tagValue as the single named property; otherwise return the tagValue itself.
     * @param {?} tagValue
     * @return {?}
     */
    TagInputComponent.prototype.createTag = /**
     * Create a tag object for the given tagValue. If createTagHandler is specified, use it; otherwise if displayProperty is specified, create an object with the tagValue as the single named property; otherwise return the tagValue itself.
     * @param {?} tagValue
     * @return {?}
     */
    function (tagValue) {
        var /** @type {?} */ tag = null;
        if (this.createTagHandler && typeof this.createTagHandler === 'function') {
            tag = this.createTagHandler(tagValue);
        }
        else if (typeof this.display === 'string') {
            tag = {};
            tag[/** @type {?} */ (this.display)] = tagValue;
        }
        else {
            tag = tagValue;
        }
        return tag;
    };
    /**
     * Add a tag object, calling the tagAdding and tagAdded events. Returns true if the tag was added to the tags array.
     * @param {?} tag
     * @return {?}
     */
    TagInputComponent.prototype.addTag = /**
     * Add a tag object, calling the tagAdding and tagAdded events. Returns true if the tag was added to the tags array.
     * @param {?} tag
     * @return {?}
     */
    function (tag) {
        if (tag) {
            // Verify that the new tag can be displayed
            var /** @type {?} */ displayValue = this.getTagDisplay(tag);
            if (displayValue && typeof displayValue === 'string' && displayValue.length > 0) {
                var /** @type {?} */ tagAddingEvent = new TagInputEvent(tag);
                this.tagAdding.emit(tagAddingEvent);
                if (!tagAddingEvent.defaultPrevented()) {
                    this.tags = this.tags || [];
                    this.tags.push(tag);
                    this.tagAdded.emit(new TagInputEvent(tag));
                    this.validate();
                    return true;
                }
            }
        }
        return false;
    };
    /**
     * Returns true if the given tagIndex is a valid tag index.
     * @param {?} tagIndex
     * @return {?}
     */
    TagInputComponent.prototype.isValidTagIndex = /**
     * Returns true if the given tagIndex is a valid tag index.
     * @param {?} tagIndex
     * @return {?}
     */
    function (tagIndex) {
        return tagIndex >= 0 && tagIndex < this.tags.length;
    };
    /**
     * Returns true if the given index is a valid selection index (tags or input field).
     * @param {?} index
     * @return {?}
     */
    TagInputComponent.prototype.isValidSelectIndex = /**
     * Returns true if the given index is a valid selection index (tags or input field).
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return index >= 0 && index <= this.tags.length;
    };
    /**
     * Returns the character corresponding to the given key event, mainly for IE compatibility.
     * @param {?} event
     * @return {?}
     */
    TagInputComponent.prototype.getKeyChar = /**
     * Returns the character corresponding to the given key event, mainly for IE compatibility.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        switch (event.key) {
            case 'Spacebar':
                return ' ';
        }
        return event.key;
    };
    /**
     * Returns an array of strings corresponding to the input string split by the tagDelimiters characters.
     * @param {?} input
     * @return {?}
     */
    TagInputComponent.prototype.splitTagInput = /**
     * Returns an array of strings corresponding to the input string split by the tagDelimiters characters.
     * @param {?} input
     * @return {?}
     */
    function (input) {
        var /** @type {?} */ tagValues = [input];
        if (this.tagDelimiters && typeof this.tagDelimiters === 'string') {
            var /** @type {?} */ escapedDelimiters = this.tagDelimiters.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
            var /** @type {?} */ delimiterRegex = new RegExp("[" + escapedDelimiters + "]", 'g');
            tagValues = input.split(delimiterRegex).filter(function (s) { return s.length > 0; });
        }
        return tagValues;
    };
    TagInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ux-tag-input',
                    template: "<ol [attr.role]=\"typeahead ? 'combobox' : 'none'\" [attr.aria-haspopup]=\"typeahead ? 'listbox' : null\">\n    <li *ngFor=\"let tag of tags; let i = index\" class=\"ux-tag\"\n        [class.disabled]=\"disabled\"\n        [ngClass]=\"tagClass(tag, i, isSelected(i))\"\n        [attr.tabindex]=\"disabled ? null : 0\"\n        [focusIf]=\"isSelected(i)\"\n        (click)=\"tagClickHandler($event, tag, i)\"\n        (focus)=\"selectTagAt(i)\">\n\n        <ng-container [ngTemplateOutlet]=\"tagTemplate\"\n            [ngTemplateOutletContext]=\"{tag: tag, index: i, disabled: disabled, api: tagApi}\">\n        </ng-container>\n\n    </li>\n    <li *ngIf=\"isInputVisible()\" class=\"ux-tag-input\" role=\"none\">\n        <input #tagInput type=\"text\" [attr.id]=\"id\" class=\"ux-tag-input\"\n            [(ngModel)]=\"input\"\n            [class.invalid]=\"!inputValid\"\n            [attr.aria-activedescendant]=\"highlightedElement?.id\"\n            [attr.aria-autocomplete]=\"typeahead ? 'list' : 'none'\"\n            [attr.aria-controls]=\"typeahead?.id\"\n            aria-multiline=\"false\"\n            [placeholder]=\"disabled ? '' : (placeholder || '')\"\n            [disabled]=\"disabled\"\n            [focusIf]=\"isSelected(tags.length)\"\n            (click)=\"inputClickHandler()\"\n            (focus)=\"inputFocusHandler()\"\n            (paste)=\"inputPasteHandler($event)\">\n    </li>\n</ol>\n\n<ng-content #typeahead></ng-content>\n\n<ng-template #defaultTagTemplate let-tag=\"tag\" let-index=\"index\" let-disabled=\"disabled\" let-api=\"api\">\n    <span class=\"ux-tag-text\">{{api.getTagDisplay(tag)}}</span>\n    <button *ngIf=\"api.canRemoveTagAt(index)\"\n        type=\"button\"\n        class=\"ux-tag-remove\"\n        aria-label=\"Remove Item\"\n        [disabled]=\"disabled\"\n        (click)=\"api.removeTagAt(index); $event.stopPropagation();\">\n        <span class=\"hpe-icon hpe-close\"></span>\n    </button>\n</ng-template>",
                    providers: [TAGINPUT_VALUE_ACCESSOR, TAGINPUT_VALIDATOR],
                    host: {
                        '[class.disabled]': 'disabled',
                        '[class.focus]': 'hasFocus()',
                        '[class.invalid]': '!valid || !inputValid'
                    }
                },] },
    ];
    /** @nocollapse */
    TagInputComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] },] },
        { type: TypeaheadKeyService, },
    ]; };
    TagInputComponent.propDecorators = {
        "id": [{ type: Input }, { type: HostBinding, args: ['attr.id',] },],
        "tags": [{ type: Input, args: ['tags',] },],
        "tagsChange": [{ type: Output },],
        "input": [{ type: Input, args: ['input',] },],
        "inputChange": [{ type: Output },],
        "display": [{ type: Input },],
        "addOnPaste": [{ type: Input },],
        "disabled": [{ type: Input },],
        "enforceTagLimits": [{ type: Input },],
        "freeInput": [{ type: Input },],
        "maxTags": [{ type: Input },],
        "minTags": [{ type: Input },],
        "placeholder": [{ type: Input },],
        "showTypeaheadOnClick": [{ type: Input },],
        "tagDelimiters": [{ type: Input },],
        "tagPattern": [{ type: Input },],
        "tagTemplate": [{ type: Input },],
        "tagClass": [{ type: Input },],
        "validationErrors": [{ type: Input },],
        "createTagHandler": [{ type: Input, args: ['createTag',] },],
        "tagAdding": [{ type: Output },],
        "tagAdded": [{ type: Output },],
        "tagInvalidated": [{ type: Output },],
        "tagRemoving": [{ type: Output },],
        "tagRemoved": [{ type: Output },],
        "tagClick": [{ type: Output },],
        "typeaheadQuery": [{ type: ContentChildren, args: [TypeaheadComponent,] },],
        "tagInput": [{ type: ViewChild, args: ['tagInput',] },],
        "_defaultTagTemplate": [{ type: ViewChild, args: ['defaultTagTemplate',] },],
        "keyHandler": [{ type: HostListener, args: ['keydown', ['$event'],] },],
        "focusOutHandler": [{ type: HostListener, args: ['focusout', ['$event'],] },],
    };
    return TagInputComponent;
}());
export { TagInputComponent };
function TagInputComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TagInputComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TagInputComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    TagInputComponent.propDecorators;
    /** @type {?} */
    TagInputComponent.prototype.id;
    /** @type {?} */
    TagInputComponent.prototype.tagsChange;
    /** @type {?} */
    TagInputComponent.prototype.inputChange;
    /** @type {?} */
    TagInputComponent.prototype.display;
    /** @type {?} */
    TagInputComponent.prototype.addOnPaste;
    /** @type {?} */
    TagInputComponent.prototype.disabled;
    /** @type {?} */
    TagInputComponent.prototype.enforceTagLimits;
    /** @type {?} */
    TagInputComponent.prototype.freeInput;
    /** @type {?} */
    TagInputComponent.prototype.maxTags;
    /** @type {?} */
    TagInputComponent.prototype.minTags;
    /** @type {?} */
    TagInputComponent.prototype.placeholder;
    /** @type {?} */
    TagInputComponent.prototype.showTypeaheadOnClick;
    /** @type {?} */
    TagInputComponent.prototype.tagDelimiters;
    /** @type {?} */
    TagInputComponent.prototype.tagPattern;
    /** @type {?} */
    TagInputComponent.prototype.tagTemplate;
    /** @type {?} */
    TagInputComponent.prototype.tagClass;
    /** @type {?} */
    TagInputComponent.prototype.validationErrors;
    /** @type {?} */
    TagInputComponent.prototype.createTagHandler;
    /** @type {?} */
    TagInputComponent.prototype.tagAdding;
    /** @type {?} */
    TagInputComponent.prototype.tagAdded;
    /** @type {?} */
    TagInputComponent.prototype.tagInvalidated;
    /** @type {?} */
    TagInputComponent.prototype.tagRemoving;
    /** @type {?} */
    TagInputComponent.prototype.tagRemoved;
    /** @type {?} */
    TagInputComponent.prototype.tagClick;
    /** @type {?} */
    TagInputComponent.prototype.typeaheadQuery;
    /** @type {?} */
    TagInputComponent.prototype.tagInput;
    /** @type {?} */
    TagInputComponent.prototype._defaultTagTemplate;
    /** @type {?} */
    TagInputComponent.prototype.selectedIndex;
    /** @type {?} */
    TagInputComponent.prototype.tagApi;
    /** @type {?} */
    TagInputComponent.prototype.valid;
    /** @type {?} */
    TagInputComponent.prototype.inputValid;
    /** @type {?} */
    TagInputComponent.prototype.typeahead;
    /** @type {?} */
    TagInputComponent.prototype.highlightedElement;
    /** @type {?} */
    TagInputComponent.prototype._input;
    /** @type {?} */
    TagInputComponent.prototype._tags;
    /** @type {?} */
    TagInputComponent.prototype._onChangeHandler;
    /** @type {?} */
    TagInputComponent.prototype._onTouchedHandler;
    /** @type {?} */
    TagInputComponent.prototype._typeaheadSubscription;
    /** @type {?} */
    TagInputComponent.prototype._element;
    /** @type {?} */
    TagInputComponent.prototype._document;
    /** @type {?} */
    TagInputComponent.prototype._typeaheadKeyService;
}
/**
 * The API available to tag templates.
 * @record
 */
export function TagApi() { }
function TagApi_tsickle_Closure_declarations() {
    /**
     * Returns the display value of the given tag, according to the displayProperty property.
     * @type {?}
     */
    TagApi.prototype.getTagDisplay;
    /**
     * Removes the tag at the given index, if possible.
     * @type {?}
     */
    TagApi.prototype.removeTagAt;
    /**
     * 	Returns true if the tag at the given index can be removed.
     * @type {?}
     */
    TagApi.prototype.canRemoveTagAt;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3RhZy1pbnB1dC90YWctaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFvQixTQUFTLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQWdDLE1BQU0sRUFBRSxTQUFTLEVBQWlCLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyUCxPQUFPLEVBQXdCLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU3RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFbEQscUJBQUksUUFBUSxHQUFHLENBQUMsQ0FBQztBQUVqQixxQkFBTSx1QkFBdUIsR0FBRztJQUM1QixPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGlCQUFpQixFQUFqQixDQUFpQixDQUFDO0lBQ2hELEtBQUssRUFBRSxJQUFJO0NBQ2QsQ0FBQztBQUNGLHFCQUFNLGtCQUFrQixHQUFHO0lBQ3ZCLE9BQU8sRUFBRSxhQUFhO0lBQ3RCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGlCQUFpQixFQUFqQixDQUFpQixDQUFDO0lBQ2hELEtBQUssRUFBRSxJQUFJO0NBQ2QsQ0FBQzs7SUF1SUUsMkJBQ1ksVUFDa0IsV0FDbEI7UUFGQSxhQUFRLEdBQVIsUUFBUTtRQUNVLGNBQVMsR0FB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O1NBQ3ZFO1FBQ0QsTUFBTSxDQUFDLFNBQVMsQ0FBQzs7O2dCQTFvQnhCLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLHE3REEyQ0M7b0JBQ1gsU0FBUyxFQUFFLENBQUMsdUJBQXVCLEVBQUUsa0JBQWtCLENBQUM7b0JBQ3hELElBQUksRUFBRTt3QkFDRixrQkFBa0IsRUFBRSxVQUFVO3dCQUM5QixlQUFlLEVBQUUsWUFBWTt3QkFDN0IsaUJBQWlCLEVBQUUsdUJBQXVCO3FCQUM3QztpQkFDSjs7OztnQkF6RXNELFVBQVU7Z0RBNEp4RCxNQUFNLFNBQUMsUUFBUTtnQkF4SkssbUJBQW1COzs7dUJBd0UzQyxLQUFLLFlBQUksV0FBVyxTQUFDLFNBQVM7eUJBRTlCLEtBQUssU0FBQyxNQUFNOytCQWFaLE1BQU07MEJBRU4sS0FBSyxTQUFDLE9BQU87Z0NBU2IsTUFBTTs0QkFFTixLQUFLOytCQUNMLEtBQUs7NkJBQ0wsS0FBSztxQ0FDTCxLQUFLOzhCQUNMLEtBQUs7NEJBQ0wsS0FBSzs0QkFDTCxLQUFLO2dDQUNMLEtBQUs7eUNBQ0wsS0FBSztrQ0FDTCxLQUFLOytCQUNMLEtBQUs7Z0NBQ0wsS0FBSzs2QkFDTCxLQUFLO3FDQUNMLEtBQUs7cUNBQ0wsS0FBSyxTQUFDLFdBQVc7OEJBRWpCLE1BQU07NkJBQ04sTUFBTTttQ0FDTixNQUFNO2dDQUNOLE1BQU07K0JBQ04sTUFBTTs2QkFDTixNQUFNO21DQUVOLGVBQWUsU0FBQyxrQkFBa0I7NkJBRWxDLFNBQVMsU0FBQyxVQUFVO3dDQUVwQixTQUFTLFNBQUMsb0JBQW9COytCQWtHOUIsWUFBWSxTQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQztvQ0EwRWxDLFlBQVksU0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUM7OzRCQS9TeEM7O1NBMEVhLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyQ29udGVudEluaXQsIENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5qZWN0LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBRdWVyeUxpc3QsIFNpbXBsZUNoYW5nZXMsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQsIGZvcndhcmRSZWYsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxJREFUT1JTLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFR5cGVhaGVhZENvbXBvbmVudCwgVHlwZWFoZWFkS2V5U2VydmljZSB9IGZyb20gJy4uL3R5cGVhaGVhZC9pbmRleCc7XHJcbmltcG9ydCB7IFR5cGVhaGVhZE9wdGlvbkV2ZW50IH0gZnJvbSAnLi4vdHlwZWFoZWFkL3R5cGVhaGVhZC1ldmVudCc7XHJcbmltcG9ydCB7IFRhZ0lucHV0RXZlbnQgfSBmcm9tICcuL3RhZy1pbnB1dC1ldmVudCc7XHJcblxyXG5sZXQgdW5pcXVlSWQgPSAwO1xyXG5cclxuY29uc3QgVEFHSU5QVVRfVkFMVUVfQUNDRVNTT1IgPSB7XHJcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRhZ0lucHV0Q29tcG9uZW50KSxcclxuICAgIG11bHRpOiB0cnVlXHJcbn07XHJcbmNvbnN0IFRBR0lOUFVUX1ZBTElEQVRPUiA9IHtcclxuICAgIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUYWdJbnB1dENvbXBvbmVudCksXHJcbiAgICBtdWx0aTogdHJ1ZVxyXG59O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3V4LXRhZy1pbnB1dCcsXHJcbiAgICB0ZW1wbGF0ZTogYDxvbCBbYXR0ci5yb2xlXT1cInR5cGVhaGVhZCA/ICdjb21ib2JveCcgOiAnbm9uZSdcIiBbYXR0ci5hcmlhLWhhc3BvcHVwXT1cInR5cGVhaGVhZCA/ICdsaXN0Ym94JyA6IG51bGxcIj5cclxuICAgIDxsaSAqbmdGb3I9XCJsZXQgdGFnIG9mIHRhZ3M7IGxldCBpID0gaW5kZXhcIiBjbGFzcz1cInV4LXRhZ1wiXHJcbiAgICAgICAgW2NsYXNzLmRpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgICBbbmdDbGFzc109XCJ0YWdDbGFzcyh0YWcsIGksIGlzU2VsZWN0ZWQoaSkpXCJcclxuICAgICAgICBbYXR0ci50YWJpbmRleF09XCJkaXNhYmxlZCA/IG51bGwgOiAwXCJcclxuICAgICAgICBbZm9jdXNJZl09XCJpc1NlbGVjdGVkKGkpXCJcclxuICAgICAgICAoY2xpY2spPVwidGFnQ2xpY2tIYW5kbGVyKCRldmVudCwgdGFnLCBpKVwiXHJcbiAgICAgICAgKGZvY3VzKT1cInNlbGVjdFRhZ0F0KGkpXCI+XHJcblxyXG4gICAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwidGFnVGVtcGxhdGVcIlxyXG4gICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie3RhZzogdGFnLCBpbmRleDogaSwgZGlzYWJsZWQ6IGRpc2FibGVkLCBhcGk6IHRhZ0FwaX1cIj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8L2xpPlxyXG4gICAgPGxpICpuZ0lmPVwiaXNJbnB1dFZpc2libGUoKVwiIGNsYXNzPVwidXgtdGFnLWlucHV0XCIgcm9sZT1cIm5vbmVcIj5cclxuICAgICAgICA8aW5wdXQgI3RhZ0lucHV0IHR5cGU9XCJ0ZXh0XCIgW2F0dHIuaWRdPVwiaWRcIiBjbGFzcz1cInV4LXRhZy1pbnB1dFwiXHJcbiAgICAgICAgICAgIFsobmdNb2RlbCldPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICBbY2xhc3MuaW52YWxpZF09XCIhaW5wdXRWYWxpZFwiXHJcbiAgICAgICAgICAgIFthdHRyLmFyaWEtYWN0aXZlZGVzY2VuZGFudF09XCJoaWdobGlnaHRlZEVsZW1lbnQ/LmlkXCJcclxuICAgICAgICAgICAgW2F0dHIuYXJpYS1hdXRvY29tcGxldGVdPVwidHlwZWFoZWFkID8gJ2xpc3QnIDogJ25vbmUnXCJcclxuICAgICAgICAgICAgW2F0dHIuYXJpYS1jb250cm9sc109XCJ0eXBlYWhlYWQ/LmlkXCJcclxuICAgICAgICAgICAgYXJpYS1tdWx0aWxpbmU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJkaXNhYmxlZCA/ICcnIDogKHBsYWNlaG9sZGVyIHx8ICcnKVwiXHJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgICAgIFtmb2N1c0lmXT1cImlzU2VsZWN0ZWQodGFncy5sZW5ndGgpXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cImlucHV0Q2xpY2tIYW5kbGVyKClcIlxyXG4gICAgICAgICAgICAoZm9jdXMpPVwiaW5wdXRGb2N1c0hhbmRsZXIoKVwiXHJcbiAgICAgICAgICAgIChwYXN0ZSk9XCJpbnB1dFBhc3RlSGFuZGxlcigkZXZlbnQpXCI+XHJcbiAgICA8L2xpPlxyXG48L29sPlxyXG5cclxuPG5nLWNvbnRlbnQgI3R5cGVhaGVhZD48L25nLWNvbnRlbnQ+XHJcblxyXG48bmctdGVtcGxhdGUgI2RlZmF1bHRUYWdUZW1wbGF0ZSBsZXQtdGFnPVwidGFnXCIgbGV0LWluZGV4PVwiaW5kZXhcIiBsZXQtZGlzYWJsZWQ9XCJkaXNhYmxlZFwiIGxldC1hcGk9XCJhcGlcIj5cclxuICAgIDxzcGFuIGNsYXNzPVwidXgtdGFnLXRleHRcIj57e2FwaS5nZXRUYWdEaXNwbGF5KHRhZyl9fTwvc3Bhbj5cclxuICAgIDxidXR0b24gKm5nSWY9XCJhcGkuY2FuUmVtb3ZlVGFnQXQoaW5kZXgpXCJcclxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICBjbGFzcz1cInV4LXRhZy1yZW1vdmVcIlxyXG4gICAgICAgIGFyaWEtbGFiZWw9XCJSZW1vdmUgSXRlbVwiXHJcbiAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgICAoY2xpY2spPVwiYXBpLnJlbW92ZVRhZ0F0KGluZGV4KTsgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1wiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaHBlLWljb24gaHBlLWNsb3NlXCI+PC9zcGFuPlxyXG4gICAgPC9idXR0b24+XHJcbjwvbmctdGVtcGxhdGU+YCxcclxuICAgIHByb3ZpZGVyczogW1RBR0lOUFVUX1ZBTFVFX0FDQ0VTU09SLCBUQUdJTlBVVF9WQUxJREFUT1JdLFxyXG4gICAgaG9zdDoge1xyXG4gICAgICAgICdbY2xhc3MuZGlzYWJsZWRdJzogJ2Rpc2FibGVkJyxcclxuICAgICAgICAnW2NsYXNzLmZvY3VzXSc6ICdoYXNGb2N1cygpJyxcclxuICAgICAgICAnW2NsYXNzLmludmFsaWRdJzogJyF2YWxpZCB8fCAhaW5wdXRWYWxpZCdcclxuICAgIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRhZ0lucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkRlc3Ryb3kge1xyXG5cclxuICAgIEBJbnB1dCgpIEBIb3N0QmluZGluZygnYXR0ci5pZCcpIGlkOiBzdHJpbmcgPSBgdXgtdGFnLWlucHV0LSR7Kyt1bmlxdWVJZH1gO1xyXG5cclxuICAgIEBJbnB1dCgndGFncycpXHJcbiAgICBnZXQgdGFncygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX3RhZ3MpIHtcclxuICAgICAgICAgICAgdGhpcy5fdGFncyA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fdGFncztcclxuICAgIH1cclxuICAgIHNldCB0YWdzKHZhbHVlOiBhbnlbXSkge1xyXG4gICAgICAgIHRoaXMuX3RhZ3MgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLl9vbkNoYW5nZUhhbmRsZXIodGhpcy5fdGFncyk7XHJcbiAgICAgICAgdGhpcy50YWdzQ2hhbmdlLmVtaXQodGhpcy5fdGFncyk7XHJcbiAgICB9XHJcblxyXG4gICAgQE91dHB1dCgpIHRhZ3NDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueVtdPigpO1xyXG5cclxuICAgIEBJbnB1dCgnaW5wdXQnKVxyXG4gICAgZ2V0IGlucHV0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnB1dDtcclxuICAgIH1cclxuICAgIHNldCBpbnB1dCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5faW5wdXQgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmlucHV0Q2hhbmdlLmVtaXQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEBPdXRwdXQoKSBpbnB1dENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICAgIEBJbnB1dCgpIGRpc3BsYXk6IChvcHRpb246IGFueSkgPT4gc3RyaW5nIHwgc3RyaW5nO1xyXG4gICAgQElucHV0KCkgYWRkT25QYXN0ZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgZW5mb3JjZVRhZ0xpbWl0czogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgZnJlZUlucHV0OiBib29sZWFuID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgpIG1heFRhZ3M6IG51bWJlciA9IE51bWJlci5NQVhfVkFMVUU7XHJcbiAgICBASW5wdXQoKSBtaW5UYWdzOiBudW1iZXIgPSAwO1xyXG4gICAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICcnO1xyXG4gICAgQElucHV0KCkgc2hvd1R5cGVhaGVhZE9uQ2xpY2s6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHRhZ0RlbGltaXRlcnM6IHN0cmluZyA9ICcnO1xyXG4gICAgQElucHV0KCkgdGFnUGF0dGVybjogUmVnRXhwO1xyXG4gICAgQElucHV0KCkgdGFnVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgICBASW5wdXQoKSB0YWdDbGFzczogVGFnQ2xhc3NGdW5jdGlvbiA9ICgpID0+IHVuZGVmaW5lZDtcclxuICAgIEBJbnB1dCgpIHZhbGlkYXRpb25FcnJvcnM6IGFueSA9IHt9O1xyXG4gICAgQElucHV0KCdjcmVhdGVUYWcnKSBjcmVhdGVUYWdIYW5kbGVyOiAodmFsdWU6IHN0cmluZykgPT4gYW55O1xyXG5cclxuICAgIEBPdXRwdXQoKSB0YWdBZGRpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPFRhZ0lucHV0RXZlbnQ+KCk7XHJcbiAgICBAT3V0cHV0KCkgdGFnQWRkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFRhZ0lucHV0RXZlbnQ+KCk7XHJcbiAgICBAT3V0cHV0KCkgdGFnSW52YWxpZGF0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFRhZ0lucHV0RXZlbnQ+KCk7XHJcbiAgICBAT3V0cHV0KCkgdGFnUmVtb3ZpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPFRhZ0lucHV0RXZlbnQ+KCk7XHJcbiAgICBAT3V0cHV0KCkgdGFnUmVtb3ZlZCA9IG5ldyBFdmVudEVtaXR0ZXI8VGFnSW5wdXRFdmVudD4oKTtcclxuICAgIEBPdXRwdXQoKSB0YWdDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8VGFnSW5wdXRFdmVudD4oKTtcclxuXHJcbiAgICBAQ29udGVudENoaWxkcmVuKFR5cGVhaGVhZENvbXBvbmVudCkgdHlwZWFoZWFkUXVlcnk6IFF1ZXJ5TGlzdDxUeXBlYWhlYWRDb21wb25lbnQ+O1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ3RhZ0lucHV0JykgdGFnSW5wdXQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgQFZpZXdDaGlsZCgnZGVmYXVsdFRhZ1RlbXBsYXRlJykgcHJpdmF0ZSBfZGVmYXVsdFRhZ1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICAgIHNlbGVjdGVkSW5kZXg6IG51bWJlciA9IC0xO1xyXG5cclxuICAgIHRhZ0FwaTogVGFnQXBpID0ge1xyXG4gICAgICAgIGdldFRhZ0Rpc3BsYXk6IHRoaXMuZ2V0VGFnRGlzcGxheS5iaW5kKHRoaXMpLFxyXG4gICAgICAgIHJlbW92ZVRhZ0F0OiB0aGlzLnJlbW92ZVRhZ0F0LmJpbmQodGhpcyksXHJcbiAgICAgICAgY2FuUmVtb3ZlVGFnQXQ6IHRoaXMuY2FuUmVtb3ZlVGFnQXQuYmluZCh0aGlzKVxyXG4gICAgfTtcclxuXHJcbiAgICB2YWxpZDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBpbnB1dFZhbGlkOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICB0eXBlYWhlYWQ6IFR5cGVhaGVhZENvbXBvbmVudDtcclxuXHJcbiAgICBoaWdobGlnaHRlZEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIHByaXZhdGUgX2lucHV0OiBzdHJpbmcgPSAnJztcclxuICAgIHByaXZhdGUgX3RhZ3M6IGFueVtdID0gW107XHJcbiAgICBwcml2YXRlIF9vbkNoYW5nZUhhbmRsZXI6IChfOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7IH07XHJcbiAgICBwcml2YXRlIF9vblRvdWNoZWRIYW5kbGVyOiAoKSA9PiB2b2lkID0gKCkgPT4geyB9O1xyXG4gICAgcHJpdmF0ZSBfdHlwZWFoZWFkU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBfZWxlbWVudDogRWxlbWVudFJlZixcclxuICAgICAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55LFxyXG4gICAgICAgIHByaXZhdGUgX3R5cGVhaGVhZEtleVNlcnZpY2U6IFR5cGVhaGVhZEtleVNlcnZpY2UpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy50YWdUZW1wbGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnRhZ1RlbXBsYXRlID0gdGhpcy5fZGVmYXVsdFRhZ1RlbXBsYXRlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XHJcbiAgICAgICAgLy8gV2F0Y2ggZm9yIG9wdGlvbmFsIGNoaWxkIHR5cGVhaGVhZCBjb250cm9sXHJcbiAgICAgICAgdGhpcy5jb25uZWN0VHlwZWFoZWFkKHRoaXMudHlwZWFoZWFkUXVlcnkuZmlyc3QpO1xyXG4gICAgICAgIHRoaXMudHlwZWFoZWFkUXVlcnkuY2hhbmdlcy5zdWJzY3JpYmUoKHF1ZXJ5KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdFR5cGVhaGVhZChxdWVyeS5maXJzdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgICAgIGlmIChjaGFuZ2VzLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIGlmIChjaGFuZ2VzLmRpc2FibGVkLmN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ2xlYXIgc2VsZWN0aW9uIGFuZCBjbG9zZSBkcm9wZG93blxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gLTE7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50eXBlYWhlYWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnR5cGVhaGVhZC5vcGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSB2YWxpZGF0aW9uIHN0YXR1c1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBhbnlbXSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnRhZ3MgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fb25DaGFuZ2VIYW5kbGVyID0gZm47XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xyXG4gICAgICAgIHRoaXMuX29uVG91Y2hlZEhhbmRsZXIgPSBmbjtcclxuICAgIH1cclxuXHJcbiAgICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5fdHlwZWFoZWFkU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3R5cGVhaGVhZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFZhbGlkYXRlIHRoZSB2YWx1ZSBvZiB0aGUgY29udHJvbCAodGFncyBwcm9wZXJ0eSkuXHJcbiAgICAgKi9cclxuICAgIHZhbGlkYXRlKCkge1xyXG4gICAgICAgIHRoaXMudmFsaWQgPSB0cnVlO1xyXG4gICAgICAgIGxldCB0YWdSYW5nZUVycm9yID0gbnVsbDtcclxuICAgICAgICBpZiAodGhpcy50YWdzICYmICh0aGlzLnRhZ3MubGVuZ3RoIDwgdGhpcy5taW5UYWdzIHx8IHRoaXMudGFncy5sZW5ndGggPiB0aGlzLm1heFRhZ3MpKSB7XHJcbiAgICAgICAgICAgIHRhZ1JhbmdlRXJyb3IgPSB7XHJcbiAgICAgICAgICAgICAgICBnaXZlbjogdGhpcy50YWdzLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgIG1pbjogdGhpcy5taW5UYWdzLFxyXG4gICAgICAgICAgICAgICAgbWF4OiB0aGlzLm1heFRhZ3NcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy52YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnZhbGlkYXRpb25FcnJvcnNbJ3RhZ1JhbmdlRXJyb3InXSA9IHRhZ1JhbmdlRXJyb3I7XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXHJcbiAgICBrZXlIYW5kbGVyKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICAvLyBHZXQgdGhlIGlucHV0IGZpZWxkIGN1cnNvciBsb2NhdGlvblxyXG4gICAgICAgIGNvbnN0IGlucHV0Q3Vyc29yUG9zID0gdGhpcy50YWdJbnB1dC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvblN0YXJ0O1xyXG5cclxuICAgICAgICAvLyBEZXRlcm1pbmUgaWYgdGhlIGlucHV0IGZpZWxkIGhhcyBhbnkgdGV4dCBzZWxlY3RlZFxyXG4gICAgICAgIGNvbnN0IGhhc1NlbGVjdGlvbiA9IHRoaXMudGFnSW5wdXQubmF0aXZlRWxlbWVudC5zZWxlY3Rpb25TdGFydCAhPT0gdGhpcy50YWdJbnB1dC5uYXRpdmVFbGVtZW50LnNlbGVjdGlvbkVuZDtcclxuXHJcbiAgICAgICAgLy8gRGV0ZXJtaW5lIGlmIGEgdGFnIGhhcyBmb2N1c1xyXG4gICAgICAgIGNvbnN0IHRhZ1NlbGVjdGVkID0gdGhpcy5pc1ZhbGlkVGFnSW5kZXgodGhpcy5zZWxlY3RlZEluZGV4KTtcclxuXHJcbiAgICAgICAgY29uc3QgaW5wdXRMZW5ndGggPSB0aGlzLmlucHV0ID8gdGhpcy5pbnB1dC5sZW5ndGggOiAwO1xyXG5cclxuICAgICAgICAvLyBDaGVjayB3aGV0aGVyIHRoZSBhcnJvdyBrZXlzIGNhbiBtb3ZlIHRoZSBzZWxlY3Rpb24uIE90aGVyd2lzZSB0aGUgaW5wdXQgZmllbGQgdGFrZXMgdGhlIGV2ZW50LlxyXG4gICAgICAgIGNvbnN0IGNhbk5hdmlnYXRlTGVmdCA9IHRhZ1NlbGVjdGVkIHx8IChpbnB1dEN1cnNvclBvcyA8PSAwICYmICFoYXNTZWxlY3Rpb24pO1xyXG4gICAgICAgIGNvbnN0IGNhbk5hdmlnYXRlUmlnaHQgPSB0YWdTZWxlY3RlZCB8fCAoaW5wdXRDdXJzb3JQb3MgPj0gaW5wdXRMZW5ndGggJiYgIWhhc1NlbGVjdGlvbik7XHJcblxyXG4gICAgICAgIC8vIEZvcndhcmQga2V5IGV2ZW50cyB0byB0aGUgdHlwZWFoZWFkIGNvbXBvbmVudC5cclxuICAgICAgICB0aGlzLl90eXBlYWhlYWRLZXlTZXJ2aWNlLmhhbmRsZUtleShldmVudCwgdGhpcy50eXBlYWhlYWQpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xyXG4gICAgICAgICAgICBjYXNlICdFbnRlcic6XHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBhIHR5cGVhaGVhZCBvcHRpb24gaXMgaGlnaGxpZ2h0ZWRcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnR5cGVhaGVhZCAmJiB0aGlzLnR5cGVhaGVhZC5vcGVuICYmIHRoaXMudHlwZWFoZWFkLmhpZ2hsaWdodGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHRoZSB0eXBlYWhlYWQgb3B0aW9uIGFzIGEgdGFnLCBjbGVhciB0aGUgaW5wdXQsIGFuZCBjbG9zZSB0aGUgZHJvcGRvd25cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1pdFR5cGVhaGVhZCh0aGlzLnR5cGVhaGVhZC5oaWdobGlnaHRlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50eXBlYWhlYWQub3BlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBWYWxpZGF0ZSBhbmQgYWRkIHRoZSBpbnB1dCB0ZXh0IGFzIGEgdGFnLCBpZiBwb3NzaWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbWl0SW5wdXQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnQmFja3NwYWNlJzpcclxuICAgICAgICAgICAgICAgIGlmIChjYW5OYXZpZ2F0ZUxlZnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJhY2tzcGFjZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnRGVsZXRlJzpcclxuICAgICAgICAgICAgY2FzZSAnRGVsJzpcclxuICAgICAgICAgICAgICAgIGlmICh0YWdTZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlVGFnQXQodGhpcy5zZWxlY3RlZEluZGV4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxyXG4gICAgICAgICAgICBjYXNlICdMZWZ0JzpcclxuICAgICAgICAgICAgICAgIGlmIChjYW5OYXZpZ2F0ZUxlZnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVTZWxlY3Rpb24oLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XHJcbiAgICAgICAgICAgIGNhc2UgJ1JpZ2h0JzpcclxuICAgICAgICAgICAgICAgIGlmIChjYW5OYXZpZ2F0ZVJpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlU2VsZWN0aW9uKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGZvciBrZXlzIGluIHRoZSB0YWdEZWxpbWl0ZXJzXHJcbiAgICAgICAgaWYgKHRoaXMudGFnRGVsaW1pdGVycyAmJiB0aGlzLnRhZ0RlbGltaXRlcnMuaW5kZXhPZih0aGlzLmdldEtleUNoYXIoZXZlbnQpKSA+PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIENvbW1pdCBwcmV2aW91cyB0ZXh0XHJcbiAgICAgICAgICAgIHRoaXMuY29tbWl0SW5wdXQoKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgWyckZXZlbnQnXSlcclxuICAgIGZvY3VzT3V0SGFuZGxlcihldmVudDogRm9jdXNFdmVudCkge1xyXG5cclxuICAgICAgICAvLyBJZiBhIGNsaWNrIG9uIHRoZSB0eXBlYWhlYWQgaXMgaW4gcHJvZ3Jlc3MsIGRvbid0IGRvIGFueXRoaW5nLlxyXG4gICAgICAgIC8vIFRoaXMgd29ya3MgYXJvdW5kIGFuIGlzc3VlIGluIElFIHdoZXJlIGNsaWNraW5nIGEgc2Nyb2xsYmFyIGRyb3BzIGZvY3VzLlxyXG4gICAgICAgIGlmICh0aGlzLnR5cGVhaGVhZCAmJiB0aGlzLnR5cGVhaGVhZC5jbGlja2luZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDbG9zZSB0aGUgZHJvcGRvd24gb24gYmx1clxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyh0aGlzLl9kb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gLTE7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50eXBlYWhlYWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnR5cGVhaGVhZC5vcGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAyMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHRhZ0NsaWNrSGFuZGxlcihldmVudDogTW91c2VFdmVudCwgdGFnOiBhbnksIGluZGV4OiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgIC8vIFNlbmQgdGFnQ2xpY2sgZXZlbnRcclxuICAgICAgICBjb25zdCB0YWdDbGlja0V2ZW50ID0gbmV3IFRhZ0lucHV0RXZlbnQodGFnKTtcclxuICAgICAgICB0aGlzLnRhZ0NsaWNrLmVtaXQodGFnQ2xpY2tFdmVudCk7XHJcblxyXG4gICAgICAgIC8vIFByZXZlbnQgZm9jdXMgaWYgcHJldmVudERlZmF1bHQoKSB3YXMgY2FsbGVkXHJcbiAgICAgICAgaWYgKHRhZ0NsaWNrRXZlbnQuZGVmYXVsdFByZXZlbnRlZCgpKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNlbGVjdCB0aGUgdGFnIChmb3IgSUUgdGhhdCBkb2Vzbid0IHByb3BhZ2F0ZSBmb2N1cylcclxuICAgICAgICB0aGlzLnNlbGVjdFRhZ0F0KGluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dENsaWNrSGFuZGxlcigpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnR5cGVhaGVhZCAmJiB0aGlzLnNob3dUeXBlYWhlYWRPbkNsaWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHlwZWFoZWFkLm9wZW4gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbnB1dEZvY3VzSGFuZGxlcigpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgIHRoaXMuc2VsZWN0SW5wdXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dFBhc3RlSGFuZGxlcihldmVudDogQ2xpcGJvYXJkRXZlbnQpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmFkZE9uUGFzdGUpIHtcclxuICAgICAgICAgICAgLy8gR2V0IHRleHQgZnJvbSB0aGUgY2xpcGJvYXJkXHJcbiAgICAgICAgICAgIGxldCBpbnB1dDogc3RyaW5nID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmNsaXBib2FyZERhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlucHV0ID0gZXZlbnQuY2xpcGJvYXJkRGF0YS5nZXREYXRhKCd0ZXh0L3BsYWluJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKDxhbnk+d2luZG93KS5jbGlwYm9hcmREYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJbnRlcm5ldCBFeHBsb3JlciBvbmx5XHJcbiAgICAgICAgICAgICAgICBpbnB1dCA9ICg8YW55PndpbmRvdykuY2xpcGJvYXJkRGF0YS5nZXREYXRhKCdUZXh0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIENvbW1pdCB0aGUgY2xpcGJvYXJkIHRleHQgZGlyZWN0bHlcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29tbWl0KGlucHV0KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJbnB1dCgpO1xyXG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHR5cGVhaGVhZE9wdGlvblNlbGVjdGVkSGFuZGxlcihldmVudDogVHlwZWFoZWFkT3B0aW9uRXZlbnQpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgIC8vIFdoZW4gdGhlIHR5cGVhaGVhZCBzZW5kcyB0aGUgb3B0aW9uU2VsZWN0ZWQgZXZlbnQsIGNvbW1pdCB0aGUgb2JqZWN0IGRpcmVjdGx5XHJcbiAgICAgICAgdGhpcy5jb21taXRUeXBlYWhlYWQoZXZlbnQub3B0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbW1pdCB0aGUgY3VycmVudCBpbnB1dCB2YWx1ZSBhbmQgY2xlYXIgdGhlIGlucHV0IGZpZWxkIGlmIHN1Y2Nlc3NmdWwuXHJcbiAgICAgKi9cclxuICAgIGNvbW1pdElucHV0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbW1pdCh0aGlzLmlucHV0KSkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdElucHV0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXQgPSAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb21taXQgdGhlIGdpdmVuIHRhZyBvYmplY3QgYW5kIGNsZWFyIHRoZSBpbnB1dCBpZiBzdWNjZXNzZnVsLlxyXG4gICAgICovXHJcbiAgICBjb21taXRUeXBlYWhlYWQodGFnOiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5hZGRUYWcodGFnKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdElucHV0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXQgPSAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb21taXQgdGhlIGdpdmVuIHN0cmluZyB2YWx1ZSBhcyBvbmUgb3IgbW9yZSB0YWdzLCBpZiB2YWxpZGF0aW9uIHBhc3Nlcy4gUmV0dXJucyB0cnVlIGlmIHRoZSB0YWcocykgd2VyZSBjcmVhdGVkLlxyXG4gICAgICovXHJcbiAgICBjb21taXQoaW5wdXQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmIChpbnB1dCAmJiB0aGlzLmZyZWVJbnB1dCkge1xyXG5cclxuICAgICAgICAgICAgLy8gU3BsaXQgdGhlIHRhZ3MgYnkgdGhlIHRhZ0RlbGltaXRlcnMgaWYgY29uZmlndXJlZFxyXG4gICAgICAgICAgICBjb25zdCBuZXdUYWdzID0gdGhpcy5zcGxpdFRhZ0lucHV0KGlucHV0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIENoZWNrIHRhZyB2YWxpZGF0aW9uIGZvciBhbGwgb2YgdGhlIGluZGl2aWR1YWwgdmFsdWVzXHJcbiAgICAgICAgICAgIGxldCBhbGxWYWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGZvciAobGV0IG5ld1RhZyBvZiBuZXdUYWdzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWxpZCA9IHRoaXMudmFsaWRhdGVUYWcobmV3VGFnKTtcclxuICAgICAgICAgICAgICAgIGlmICghdmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGxWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBBZGQgdGhlIHRhZ3MgaWYgYWxsIGFyZSB2YWxpZFxyXG4gICAgICAgICAgICBpZiAoYWxsVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IG5ld1RhZyBvZiBuZXdUYWdzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRUYWcodGhpcy5jcmVhdGVUYWcobmV3VGFnKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIElmIG5vIHRhZyBpcyBzZWxlY3RlZCwgc2VsZWN0IHRoZSByaWdodG1vc3QgdGFnLiBJZiBhIHRhZyBpcyBzZWxlY3RlZCwgcmVtb3ZlIGl0LlxyXG4gICAgICovXHJcbiAgICBiYWNrc3BhY2UoKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZFRhZ0luZGV4KHRoaXMuc2VsZWN0ZWRJbmRleCkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RUYWdBdCh0aGlzLnRhZ3MubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVUYWdBdCh0aGlzLnNlbGVjdGVkSW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE1vdmUgdGhlIGhpZ2hsaWdodGVkIG9wdGlvbiBmb3J3YXJkcyBvciBiYWNrd2FyZHMgaW4gdGhlIGxpc3QuIFdyYXBzIGF0IHRoZSBsaW1pdHMuXHJcbiAgICAgKiBAcGFyYW0gZCBWYWx1ZSB0byBiZSBhZGRlZCB0byB0aGUgc2VsZWN0ZWQgaW5kZXgsIGkuZS4gLTEgdG8gbW92ZSBiYWNrd2FyZHMsICsxIHRvIG1vdmUgZm9yd2FyZHMuXHJcbiAgICAgKi9cclxuICAgIG1vdmVTZWxlY3Rpb24oZDogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc1ZhbGlkU2VsZWN0SW5kZXgodGhpcy5zZWxlY3RlZEluZGV4KSkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggKz0gZDtcclxuXHJcbiAgICAgICAgICAgIC8vIERvIHdyYXBwaW5nIG9mIHNlbGVjdGlvbiB3aGVuIG91dCBvZiBib3VuZHNcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJbmRleCA8IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHRoaXMudGFncy5sZW5ndGg7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZEluZGV4ID4gdGhpcy50YWdzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYSB2YWx1ZSB0byBkaXNwbGF5IGZvciB0aGUgZ2l2ZW4gdGFnLiBVc2VzIGRpc3BsYXkgZnVuY3Rpb24vcHJvcGVydHkgbmFtZSBpZiBzZXQsIG90aGVyd2lzZSBhc3N1bWVzIHRoYXQgdGhlIHRhZyBpcyBhIHNpbXBsZSBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIGdldFRhZ0Rpc3BsYXkodGFnOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5kaXNwbGF5ID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRpc3BsYXkodGFnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmRpc3BsYXkgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0YWdbPHN0cmluZz50aGlzLmRpc3BsYXldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGFnO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBpbmRleCBpcyBzZWxlY3RlZCAodGFnIGluZGV4IG9yIGlucHV0IGZpZWxkKS5cclxuICAgICAqL1xyXG4gICAgaXNTZWxlY3RlZChpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGluZGV4ID09PSB0aGlzLnNlbGVjdGVkSW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZWxlY3QgdGhlIHRhZyBhdCB0aGUgZ2l2ZW4gaW5kZXguIERvZXMgbm90aGluZyBpZiBkaXNhYmxlZCBpcyB0cnVlLlxyXG4gICAgICovXHJcbiAgICBzZWxlY3RUYWdBdCh0YWdJbmRleDogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc1ZhbGlkVGFnSW5kZXgodGFnSW5kZXgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHRhZ0luZGV4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlbGVjdCB0aGUgaW5wdXQgZmllbGQsIGdpdmluZyBpdCBmb2N1cy4gRG9lcyBub3RoaW5nIGlmIGRpc2FibGVkIGlzIHRydWUuXHJcbiAgICAgKi9cclxuICAgIHNlbGVjdElucHV0KCkge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkgeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdGhpcy50YWdzLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZSB0aGUgdGFnIGF0IHRoZSBnaXZlbiBpbmRleC4gRG9lcyBub3RoaW5nIGlmIGRpc2FibGVkIGlzIHRydWUgb3IgdGhlIG1pblRhZ3MgcHJvcGVydHkgcHJldmVudHMgcmVtb3ZhbC5cclxuICAgICAqL1xyXG4gICAgcmVtb3ZlVGFnQXQodGFnSW5kZXg6IG51bWJlcikge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCB8fCAhdGhpcy5jYW5SZW1vdmVUYWdBdCh0YWdJbmRleCkpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgIC8vIENoZWNrIHRoYXQgdGhlIHRhZ0luZGV4IGlzIGluIHJhbmdlXHJcbiAgICAgICAgaWYgKHRoaXMuaXNWYWxpZFRhZ0luZGV4KHRhZ0luZGV4KSkge1xyXG4gICAgICAgICAgICBjb25zdCB0YWcgPSB0aGlzLnRhZ3NbdGFnSW5kZXhdO1xyXG4gICAgICAgICAgICBjb25zdCB0YWdSZW1vdmluZ0V2ZW50ID0gbmV3IFRhZ0lucHV0RXZlbnQodGFnKTtcclxuICAgICAgICAgICAgdGhpcy50YWdSZW1vdmluZy5lbWl0KHRhZ1JlbW92aW5nRXZlbnQpO1xyXG4gICAgICAgICAgICBpZiAoIXRhZ1JlbW92aW5nRXZlbnQuZGVmYXVsdFByZXZlbnRlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBTZWxlY3QgaW5wdXQgZmlyc3QgdG8gYXZvaWQgaXNzdWVzIHdpdGggZHJvcHBpbmcgZm9jdXNcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0SW5wdXQoKTtcclxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgdGFnXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhZ3Muc3BsaWNlKHRhZ0luZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIC8vIFNldCBmb2N1cyBhZ2FpbiBzaW5jZSBpbmRpY2VzIGhhdmUgY2hhbmdlZFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RJbnB1dCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YWdSZW1vdmVkLmVtaXQobmV3IFRhZ0lucHV0RXZlbnQodGFnKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHRhZyBhdCB0aGUgZ2l2ZW4gaW5kZXggY2FuIGJlIHJlbW92ZWQuXHJcbiAgICAgKi9cclxuICAgIGNhblJlbW92ZVRhZ0F0KHRhZ0luZGV4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50YWdzLmxlbmd0aCA+IHRoaXMubWluVGFncyB8fCAhdGhpcy5lbmZvcmNlVGFnTGltaXRzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBpbnB1dCBmaWVsZCBzaG91bGQgYmUgYXZhaWxhYmxlLlxyXG4gICAgICovXHJcbiAgICBpc0lucHV0VmlzaWJsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50YWdzLmxlbmd0aCA8IHRoaXMubWF4VGFncyB8fCAhdGhpcy5lbmZvcmNlVGFnTGltaXRzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0cnVlIGlmIGFueSBwYXJ0IG9mIHRoZSBjb250cm9sIGhhcyBmb2N1cy5cclxuICAgICAqL1xyXG4gICAgaGFzRm9jdXMoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZFNlbGVjdEluZGV4KHRoaXMuc2VsZWN0ZWRJbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb25uZWN0VHlwZWFoZWFkKHR5cGVhaGVhZDogVHlwZWFoZWFkQ29tcG9uZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3R5cGVhaGVhZFN1YnNjcmlwdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLl90eXBlYWhlYWRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgdGhpcy5fdHlwZWFoZWFkU3Vic2NyaXB0aW9uID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudHlwZWFoZWFkID0gdHlwZWFoZWFkO1xyXG4gICAgICAgIGlmICh0aGlzLnR5cGVhaGVhZCkge1xyXG4gICAgICAgICAgICAvLyBTZXQgdXAgZXZlbnQgaGFuZGxlciBmb3Igc2VsZWN0ZWQgb3B0aW9uc1xyXG4gICAgICAgICAgICB0aGlzLl90eXBlYWhlYWRTdWJzY3JpcHRpb24gPSB0aGlzLnR5cGVhaGVhZC5vcHRpb25TZWxlY3RlZC5zdWJzY3JpYmUodGhpcy50eXBlYWhlYWRPcHRpb25TZWxlY3RlZEhhbmRsZXIuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl90eXBlYWhlYWRTdWJzY3JpcHRpb24uYWRkKFxyXG4gICAgICAgICAgICAgICAgdGhpcy50eXBlYWhlYWQuaGlnaGxpZ2h0ZWRFbGVtZW50Q2hhbmdlLnN1YnNjcmliZSgoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZ2hsaWdodGVkRWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFZhbGlkYXRlIHRoZSBnaXZlbiB0YWdWYWx1ZSB3aXRoIHRoZSB0YWdQYXR0ZXJuLCBpZiBzZXQuIFVwZGF0ZSB2YWxpZGF0aW9uRXJyb3JzIG9uIHZhbGlkYXRpb24gZmFpbHVyZS5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB2YWxpZGF0ZVRhZyh0YWdWYWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IGlucHV0UGF0dGVybiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pbnB1dFZhbGlkID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy50YWdQYXR0ZXJuICYmICF0aGlzLnRhZ1BhdHRlcm4udGVzdCh0YWdWYWx1ZSkpIHtcclxuICAgICAgICAgICAgaW5wdXRQYXR0ZXJuID0ge1xyXG4gICAgICAgICAgICAgICAgZ2l2ZW46IHRhZ1ZhbHVlLFxyXG4gICAgICAgICAgICAgICAgcGF0dGVybjogdGhpcy50YWdQYXR0ZXJuXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnZhbGlkYXRpb25FcnJvcnNbJ2lucHV0UGF0dGVybiddID0gaW5wdXRQYXR0ZXJuO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0VmFsaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSB0YWcgb2JqZWN0IGZvciB0aGUgZ2l2ZW4gdGFnVmFsdWUuIElmIGNyZWF0ZVRhZ0hhbmRsZXIgaXMgc3BlY2lmaWVkLCB1c2UgaXQ7IG90aGVyd2lzZSBpZiBkaXNwbGF5UHJvcGVydHkgaXMgc3BlY2lmaWVkLCBjcmVhdGUgYW4gb2JqZWN0IHdpdGggdGhlIHRhZ1ZhbHVlIGFzIHRoZSBzaW5nbGUgbmFtZWQgcHJvcGVydHk7IG90aGVyd2lzZSByZXR1cm4gdGhlIHRhZ1ZhbHVlIGl0c2VsZi5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjcmVhdGVUYWcodGFnVmFsdWU6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgbGV0IHRhZyA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMuY3JlYXRlVGFnSGFuZGxlciAmJiB0eXBlb2YgdGhpcy5jcmVhdGVUYWdIYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHRhZyA9IHRoaXMuY3JlYXRlVGFnSGFuZGxlcih0YWdWYWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5kaXNwbGF5ID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICB0YWcgPSB7fTtcclxuICAgICAgICAgICAgdGFnWzxzdHJpbmc+dGhpcy5kaXNwbGF5XSA9IHRhZ1ZhbHVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRhZyA9IHRhZ1ZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGFnO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGEgdGFnIG9iamVjdCwgY2FsbGluZyB0aGUgdGFnQWRkaW5nIGFuZCB0YWdBZGRlZCBldmVudHMuIFJldHVybnMgdHJ1ZSBpZiB0aGUgdGFnIHdhcyBhZGRlZCB0byB0aGUgdGFncyBhcnJheS5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhZGRUYWcodGFnOiBhbnkpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGFnKSB7XHJcbiAgICAgICAgICAgIC8vIFZlcmlmeSB0aGF0IHRoZSBuZXcgdGFnIGNhbiBiZSBkaXNwbGF5ZWRcclxuICAgICAgICAgICAgY29uc3QgZGlzcGxheVZhbHVlID0gdGhpcy5nZXRUYWdEaXNwbGF5KHRhZyk7XHJcbiAgICAgICAgICAgIGlmIChkaXNwbGF5VmFsdWUgJiYgdHlwZW9mIGRpc3BsYXlWYWx1ZSA9PT0gJ3N0cmluZycgJiYgZGlzcGxheVZhbHVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhZ0FkZGluZ0V2ZW50ID0gbmV3IFRhZ0lucHV0RXZlbnQodGFnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFnQWRkaW5nLmVtaXQodGFnQWRkaW5nRXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0YWdBZGRpbmdFdmVudC5kZWZhdWx0UHJldmVudGVkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhZ3MgPSB0aGlzLnRhZ3MgfHwgW107XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWdzLnB1c2godGFnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhZ0FkZGVkLmVtaXQobmV3IFRhZ0lucHV0RXZlbnQodGFnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHRhZ0luZGV4IGlzIGEgdmFsaWQgdGFnIGluZGV4LlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGlzVmFsaWRUYWdJbmRleCh0YWdJbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRhZ0luZGV4ID49IDAgJiYgdGFnSW5kZXggPCB0aGlzLnRhZ3MubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBpbmRleCBpcyBhIHZhbGlkIHNlbGVjdGlvbiBpbmRleCAodGFncyBvciBpbnB1dCBmaWVsZCkuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaXNWYWxpZFNlbGVjdEluZGV4KGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gaW5kZXggPj0gMCAmJiBpbmRleCA8PSB0aGlzLnRhZ3MubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgY2hhcmFjdGVyIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGdpdmVuIGtleSBldmVudCwgbWFpbmx5IGZvciBJRSBjb21wYXRpYmlsaXR5LlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdldEtleUNoYXIoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiBzdHJpbmcge1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ1NwYWNlYmFyJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnICc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBldmVudC5rZXk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHN0cmluZ3MgY29ycmVzcG9uZGluZyB0byB0aGUgaW5wdXQgc3RyaW5nIHNwbGl0IGJ5IHRoZSB0YWdEZWxpbWl0ZXJzIGNoYXJhY3RlcnMuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3BsaXRUYWdJbnB1dChpbnB1dDogc3RyaW5nKTogc3RyaW5nW10ge1xyXG4gICAgICAgIGxldCB0YWdWYWx1ZXMgPSBbaW5wdXRdO1xyXG4gICAgICAgIGlmICh0aGlzLnRhZ0RlbGltaXRlcnMgJiYgdHlwZW9mIHRoaXMudGFnRGVsaW1pdGVycyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgY29uc3QgZXNjYXBlZERlbGltaXRlcnMgPSB0aGlzLnRhZ0RlbGltaXRlcnMucmVwbGFjZSgvWy1cXC9cXFxcXiQqKz8uKCl8W1xcXXt9XS9nLCAnXFxcXCQmJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbGltaXRlclJlZ2V4ID0gbmV3IFJlZ0V4cChgWyR7ZXNjYXBlZERlbGltaXRlcnN9XWAsICdnJyk7XHJcbiAgICAgICAgICAgIHRhZ1ZhbHVlcyA9IGlucHV0LnNwbGl0KGRlbGltaXRlclJlZ2V4KS5maWx0ZXIoKHMpID0+IHMubGVuZ3RoID4gMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0YWdWYWx1ZXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgQVBJIGF2YWlsYWJsZSB0byB0YWcgdGVtcGxhdGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBUYWdBcGkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBkaXNwbGF5IHZhbHVlIG9mIHRoZSBnaXZlbiB0YWcsIGFjY29yZGluZyB0byB0aGUgZGlzcGxheVByb3BlcnR5IHByb3BlcnR5LlxyXG4gICAgICovXHJcbiAgICBnZXRUYWdEaXNwbGF5OiAodGFnOiBhbnkpID0+IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZXMgdGhlIHRhZyBhdCB0aGUgZ2l2ZW4gaW5kZXgsIGlmIHBvc3NpYmxlLlxyXG4gICAgICovXHJcbiAgICByZW1vdmVUYWdBdDogKGluZGV4OiBudW1iZXIpID0+IHZvaWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcdFJldHVybnMgdHJ1ZSBpZiB0aGUgdGFnIGF0IHRoZSBnaXZlbiBpbmRleCBjYW4gYmUgcmVtb3ZlZC5cclxuICAgICAqL1xyXG4gICAgY2FuUmVtb3ZlVGFnQXQ6IChpbmRleDogbnVtYmVyKSA9PiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIGZ1bmN0aW9uIHVzZWQgdG8gcmV0dXJuIGN1c3RvbSBjbGFzcyBpbmZvcm1hdGlvbiwgZm9yIHVzZSBpbiBgbmdDbGFzc2AuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBUYWdDbGFzc0Z1bmN0aW9uID0gKHRhZzogYW55LCBpbmRleDogbnVtYmVyLCBzZWxlY3RlZDogYm9vbGVhbikgPT4gKHN0cmluZyB8IHN0cmluZ1tdIHwgU2V0PHN0cmluZz4pOyJdfQ==