/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { delay, distinctUntilChanged, filter, map } from 'rxjs/operators';
var DashboardService = /** @class */ (function () {
    function DashboardService() {
        var _this = this;
        this._rowHeight = 0;
        this.widgets$ = new BehaviorSubject([]);
        this.options$ = new BehaviorSubject(defaultOptions);
        this.dimensions$ = new BehaviorSubject({});
        this.height$ = this.dimensions$.pipe(delay(0), map(function (dimensions) { return dimensions.height; }), distinctUntilChanged());
        this.placeholder$ = new BehaviorSubject({ visible: false, x: 0, y: 0, width: 0, height: 0 });
        this.layout$ = new Subject();
        this.stacked$ = new BehaviorSubject(false);
        this.layout$.subscribe(this.setLayoutData.bind(this));
        this.stacked$.pipe(filter(function (stacked) { return stacked === true; })).subscribe(this.updateWhenStacked.bind(this));
        this.widgets$.pipe(delay(0)).subscribe(function () { return _this.renderDashboard(); });
        this.dimensions$.pipe(delay(0)).subscribe(function () { return _this.renderDashboard(); });
    }
    Object.defineProperty(DashboardService.prototype, "options", {
        get: /**
         * @return {?}
         */
        function () {
            return this.options$.getValue();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardService.prototype, "widgets", {
        get: /**
         * @return {?}
         */
        function () {
            return this.widgets$.getValue();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardService.prototype, "stacked", {
        get: /**
         * @return {?}
         */
        function () {
            return this.stacked$.getValue();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardService.prototype, "dimensions", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dimensions$.getValue();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardService.prototype, "columnWidth", {
        get: /**
         * @return {?}
         */
        function () {
            return this.dimensions.width / this.options.columns;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Add a widget to the dashboard
     * @param widget The widget component to add to the dashboard
     */
    /**
     * Add a widget to the dashboard
     * @param {?} widget The widget component to add to the dashboard
     * @return {?}
     */
    DashboardService.prototype.addWidget = /**
     * Add a widget to the dashboard
     * @param {?} widget The widget component to add to the dashboard
     * @return {?}
     */
    function (widget) {
        this.widgets$.next(tslib_1.__spread(this.widgets$.getValue(), [widget]));
    };
    /**
     * Remove a widget from the dashboard
     * @param widget The widget to remove
     */
    /**
     * Remove a widget from the dashboard
     * @param {?} widget The widget to remove
     * @return {?}
     */
    DashboardService.prototype.removeWidget = /**
     * Remove a widget from the dashboard
     * @param {?} widget The widget to remove
     * @return {?}
     */
    function (widget) {
        this.widgets$.next(this.widgets$.getValue().filter(function (_widget) { return _widget !== widget; }));
    };
    /**
     * Indicate that the dashboard element has been resized
     * @param width The width of the dashboard element in px
     * @param height The height of the dashboard element in px
     */
    /**
     * Indicate that the dashboard element has been resized
     * @param {?=} width The width of the dashboard element in px
     * @param {?=} height The height of the dashboard element in px
     * @return {?}
     */
    DashboardService.prototype.setDimensions = /**
     * Indicate that the dashboard element has been resized
     * @param {?=} width The width of the dashboard element in px
     * @param {?=} height The height of the dashboard element in px
     * @return {?}
     */
    function (width, height) {
        if (width === void 0) { width = this.dimensions.width; }
        if (height === void 0) { height = this.dimensions.height; }
        if (this.dimensions.width !== width || this.dimensions.height !== height) {
            this.dimensions$.next({ width: width, height: height });
        }
    };
    /**
     * Produce an object containing all the required layout data.
     * This can be useful for exporting/saving a layout
     */
    /**
     * Produce an object containing all the required layout data.
     * This can be useful for exporting/saving a layout
     * @return {?}
     */
    DashboardService.prototype.getLayoutData = /**
     * Produce an object containing all the required layout data.
     * This can be useful for exporting/saving a layout
     * @return {?}
     */
    function () {
        return this.widgets.map(function (widget) {
            return { id: widget.id, col: widget.getColumn(), row: widget.getRow(), colSpan: widget.getColumnSpan(), rowSpan: widget.getRowSpan() };
        });
    };
    /**
     * Position widgets programatically
     */
    /**
     * Position widgets programatically
     * @param {?} widgets
     * @return {?}
     */
    DashboardService.prototype.setLayoutData = /**
     * Position widgets programatically
     * @param {?} widgets
     * @return {?}
     */
    function (widgets) {
        var _this = this;
        // iterate through each widget data and find a match
        widgets.forEach(function (widget) {
            // find the matching widget
            var /** @type {?} */ target = _this.widgets.find(function (_widget) { return _widget.id === widget.id; });
            if (target) {
                target.setColumn(widget.col);
                target.setRow(widget.row);
                target.setColumnSpan(widget.colSpan);
                target.setRowSpan(widget.rowSpan);
            }
        });
    };
    /**
     * Update the positions and sizes of the widgets
     */
    /**
     * Update the positions and sizes of the widgets
     * @return {?}
     */
    DashboardService.prototype.renderDashboard = /**
     * Update the positions and sizes of the widgets
     * @return {?}
     */
    function () {
        var _this = this;
        // get the dimensions of the dashboard
        this._rowHeight = this.options.rowHeight || this.columnWidth;
        // ensure the column width is not below the min widths
        this.stacked$.next(this.columnWidth < this.options.minWidth);
        // ensure the row height is not below the min widths
        if (this._rowHeight < this.options.minWidth) {
            this._rowHeight = this.options.minWidth;
        }
        this.setDashboardLayout();
        // iterate through each widget and set the size - except the one being resized
        this.widgets.filter(function (widget) { return !_this._actionWidget || widget !== _this._actionWidget.widget; })
            .forEach(function (widget) { return widget.render(); });
    };
    /**
     * Determine where widgets should be positioned based on their positions, width and the size of the container
     */
    /**
     * Determine where widgets should be positioned based on their positions, width and the size of the container
     * @return {?}
     */
    DashboardService.prototype.setDashboardLayout = /**
     * Determine where widgets should be positioned based on their positions, width and the size of the container
     * @return {?}
     */
    function () {
        var _this = this;
        // find any widgets that do not currently have a position set
        this.widgets.filter(function (widget) { return widget.getColumn() === undefined || widget.getRow() === undefined; })
            .forEach(function (widget) { return _this.setWidgetPosition(widget); });
        this.setDashboardHeight();
    };
    /**
     * @return {?}
     */
    DashboardService.prototype.updateWhenStacked = /**
     * @return {?}
     */
    function () {
        // iterate through each widget set it's stacked state and
        this.getWidgetsByOrder().forEach(function (widget, idx) {
            widget.setColumn(0);
            widget.setRow(idx);
        });
    };
    /**
     * @return {?}
     */
    DashboardService.prototype.getWidgetsByOrder = /**
     * @return {?}
     */
    function () {
        return this.widgets.sort(function (w1, w2) {
            var /** @type {?} */ w1Position = w1.getColumn() * w1.getRow();
            var /** @type {?} */ w2Position = w2.getColumn() * w2.getRow();
            if (w1Position < w2Position) {
                return -1;
            }
            if (w1Position > w2Position) {
                return 1;
            }
            return 0;
        });
    };
    /**
     * Find a position that a widget can fit in the dashboard
     * @param widget The widget to try and position
     */
    /**
     * Find a position that a widget can fit in the dashboard
     * @param {?} widget The widget to try and position
     * @return {?}
     */
    DashboardService.prototype.setWidgetPosition = /**
     * Find a position that a widget can fit in the dashboard
     * @param {?} widget The widget to try and position
     * @return {?}
     */
    function (widget) {
        // find a position for the widget
        var /** @type {?} */ position = 0;
        var /** @type {?} */ success = false;
        // repeat until a space is found
        while (!success) {
            // get a position to try
            var /** @type {?} */ column = position % this.options.columns;
            var /** @type {?} */ row = Math.floor(position / this.options.columns);
            // check the current position
            if (this.getPositionAvailable(column, row, widget.getColumnSpan(), widget.getRowSpan())) {
                success = true;
                widget.setColumn(column);
                widget.setRow(row);
                return;
            }
            if (column === 0 && widget.colSpan > this.options.columns) {
                throw new Error('Dashboard widgets have a colSpan greater than the max number of dashboard columns!');
            }
            position++;
        }
    };
    /**
     * Check if a position in the dashboard is vacant or not
     */
    /**
     * Check if a position in the dashboard is vacant or not
     * @param {?} column
     * @param {?} row
     * @param {?} columnSpan
     * @param {?} rowSpan
     * @param {?=} ignoreWidget
     * @return {?}
     */
    DashboardService.prototype.getPositionAvailable = /**
     * Check if a position in the dashboard is vacant or not
     * @param {?} column
     * @param {?} row
     * @param {?} columnSpan
     * @param {?} rowSpan
     * @param {?=} ignoreWidget
     * @return {?}
     */
    function (column, row, columnSpan, rowSpan, ignoreWidget) {
        // get a list of grid spaces that are populated
        var /** @type {?} */ spaces = this.getOccupiedSpaces();
        // check if the block would still be in bounds
        if (column + columnSpan > this.options.columns) {
            return false;
        }
        var _loop_1 = function (x) {
            var _loop_2 = function (y) {
                if (spaces.find(function (block) { return block.column === x && block.row === y && block.widget !== ignoreWidget; })) {
                    return { value: false };
                }
            };
            for (var /** @type {?} */ y = row; y < row + rowSpan; y++) {
                var state_1 = _loop_2(y);
                if (typeof state_1 === "object")
                    return state_1;
            }
        };
        // check each required position
        for (var /** @type {?} */ x = column; x < column + columnSpan; x++) {
            var state_2 = _loop_1(x);
            if (typeof state_2 === "object")
                return state_2.value;
        }
        return true;
    };
    /**
     * @return {?}
     */
    DashboardService.prototype.getOccupiedSpaces = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // find all spaces that are currently occupied
        return this.widgets.filter(function (widget) { return widget.getColumn() !== undefined && widget.getRow() !== undefined; })
            .reduce(function (value, widget) {
            _this.forEachBlock(widget, function (column, row) { return value.push({ widget: widget, column: column, row: row }); });
            return value;
        }, []);
    };
    /**
     * Begin resizing a widget
     * @param action The the widget to resize
     */
    /**
     * Begin resizing a widget
     * @param {?} action The the widget to resize
     * @return {?}
     */
    DashboardService.prototype.onResizeStart = /**
     * Begin resizing a widget
     * @param {?} action The the widget to resize
     * @return {?}
     */
    function (action) {
        // store the mouse event
        this._mouseEvent = action.event;
        this._actionWidget = action;
        // bring the widget to the font
        this.bringToFront(action.widget);
    };
    /**
     * @param {?} action
     * @return {?}
     */
    DashboardService.prototype.onResizeDrag = /**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        var /** @type {?} */ mousePosX = this._mouseEvent.pageX - pageXOffset;
        var /** @type {?} */ mousePosY = this._mouseEvent.pageY - pageYOffset;
        // if there was no movement then do nothing
        if (action.event.x === mousePosX && action.event.y === mousePosY) {
            return;
        }
        // update the stored mouse event
        this._mouseEvent = action.event;
        // get handle for direction
        var handle = action.handle;
        // get the bounds of the handle
        var /** @type {?} */ bounds = handle.getBoundingClientRect();
        // get the center of the handle
        var /** @type {?} */ centerX = bounds.left + (bounds.width / 2);
        var /** @type {?} */ centerY = bounds.top + (bounds.height / 2);
        // get the current mouse position
        var /** @type {?} */ mouseX = mousePosX - centerX;
        var /** @type {?} */ mouseY = mousePosY - centerY;
        // store the new proposed dimensions for the widget
        var /** @type {?} */ dimensions = {
            x: action.widget.x,
            y: action.widget.y,
            width: action.widget.width,
            height: action.widget.height
        };
        // update widget based on the handle being dragged
        switch (action.direction) {
            case ActionDirection.Right:
                dimensions.width += mouseX;
                break;
            case ActionDirection.Left:
                dimensions.x += mouseX;
                dimensions.width -= mouseX;
                if (dimensions.width < this.options.minWidth) {
                    var /** @type {?} */ difference = this.options.minWidth - dimensions.width;
                    dimensions.x -= difference;
                    dimensions.width += difference;
                }
                break;
            case ActionDirection.Bottom:
                dimensions.height += mouseY;
                break;
            case ActionDirection.Top:
                dimensions.y += mouseY;
                dimensions.height -= mouseY;
                if (dimensions.height < this.options.minHeight) {
                    var /** @type {?} */ difference = this.options.minHeight - dimensions.height;
                    dimensions.y -= difference;
                    dimensions.height += difference;
                }
                break;
            // Support resizing on multiple axis simultaneously
            case ActionDirection.TopLeft:
                dimensions.x += mouseX;
                dimensions.width -= mouseX;
                if (dimensions.width < this.options.minWidth) {
                    var /** @type {?} */ difference = this.options.minWidth - dimensions.width;
                    dimensions.x -= difference;
                    dimensions.width += difference;
                }
                dimensions.y += mouseY;
                dimensions.height -= mouseY;
                if (dimensions.height < this.options.minHeight) {
                    var /** @type {?} */ difference = this.options.minHeight - dimensions.height;
                    dimensions.y -= difference;
                    dimensions.height += difference;
                }
                break;
            case ActionDirection.TopRight:
                dimensions.width += mouseX;
                dimensions.y += mouseY;
                dimensions.height -= mouseY;
                if (dimensions.height < this.options.minHeight) {
                    var /** @type {?} */ difference = this.options.minHeight - dimensions.height;
                    dimensions.y -= difference;
                    dimensions.height += difference;
                }
                break;
            case ActionDirection.BottomLeft:
                dimensions.height += mouseY;
                dimensions.x += mouseX;
                dimensions.width -= mouseX;
                if (dimensions.width < this.options.minWidth) {
                    var /** @type {?} */ difference = this.options.minWidth - dimensions.width;
                    dimensions.x -= difference;
                    dimensions.width += difference;
                }
                break;
            case ActionDirection.BottomRight:
                dimensions.height += mouseY;
                dimensions.width += mouseX;
                break;
        }
        var /** @type {?} */ currentWidth = action.widget.x + action.widget.width;
        var /** @type {?} */ currentHeight = action.widget.y + action.widget.height;
        // ensure values are within the dashboard bounds
        if (dimensions.x < 0) {
            dimensions.x = 0;
            dimensions.width = currentWidth;
        }
        if (dimensions.y < 0) {
            dimensions.y = 0;
            dimensions.height = currentHeight;
        }
        if ((dimensions.x + dimensions.width) > this.dimensions.width) {
            dimensions.width = this.dimensions.width - dimensions.x;
        }
        // if the proposed width is smaller than allowed then reset width to minimum and ignore x changes
        if (dimensions.width < this.options.minWidth) {
            dimensions.x = action.widget.x;
            dimensions.width = this.options.minWidth;
        }
        // if the proposed height is smaller than allowed then reset height to minimum and ignore y changes
        if (dimensions.height < this.options.minHeight) {
            dimensions.y = action.widget.y;
            dimensions.height = this.options.minHeight;
        }
        // update the widget actual values
        action.widget.setBounds(dimensions.x, dimensions.y, dimensions.width, dimensions.height);
        // update placeholder position and value
        this.setPlaceholderBounds(true, dimensions.x, dimensions.y, dimensions.width, dimensions.height);
        // show the widget positions if the current positions and sizes were to persist
        this.updateWidgetPositions(action.widget);
    };
    /**
     * @return {?}
     */
    DashboardService.prototype.onResizeEnd = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ placeholder = this.placeholder$.getValue();
        // commit resize changes
        this.commitWidgetChanges();
        // hide placeholder
        placeholder.visible = false;
        // update the placeholder
        this.placeholder$.next(placeholder);
        this._actionWidget = null;
        this._mouseEvent = null;
        // ensure any vacant upper spaces are filled where required
        this.shiftWidgetsUp();
        // update dashboard height
        this.setDashboardHeight();
        // emit information about the layout
        this.layout$.next(this.getLayoutData());
    };
    /**
     * @param {?} action
     * @return {?}
     */
    DashboardService.prototype.onDragStart = /**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        this.onResizeStart(action);
        // store the starting placeholder position
        this.setWidgetOrigin();
        this.cacheWidgets();
    };
    /**
     * @return {?}
     */
    DashboardService.prototype.onDragEnd = /**
     * @return {?}
     */
    function () {
        this.onResizeEnd();
        this._widgetOrigin = {};
    };
    /**
     * @param {?} action
     * @return {?}
     */
    DashboardService.prototype.onDrag = /**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        // if there was no movement then do nothing
        if (action.event.pageX === this._mouseEvent.pageX && action.event.pageY === this._mouseEvent.pageY) {
            return;
        }
        // get the current mouse position
        var /** @type {?} */ mouseX = action.event.pageX - this._mouseEvent.pageX;
        var /** @type {?} */ mouseY = action.event.pageY - this._mouseEvent.pageY;
        // store the latest event
        this._mouseEvent = action.event;
        var /** @type {?} */ dimensions = {
            x: action.widget.x + mouseX,
            y: action.widget.y + mouseY,
            width: action.widget.width,
            height: action.widget.height
        };
        this.restoreWidgets(true);
        // update widget position
        action.widget.setBounds(dimensions.x, dimensions.y, dimensions.width, dimensions.height);
        // update placeholder position and value
        this.setPlaceholderBounds(true, dimensions.x, dimensions.y, dimensions.width, dimensions.height);
        // show the widget positions if the current positions and sizes were to persist
        this.shiftWidgets();
        this.setDashboardHeight();
    };
    /**
     * @return {?}
     */
    DashboardService.prototype.getRowHeight = /**
     * @return {?}
     */
    function () {
        return this._rowHeight;
    };
    /**
     * @return {?}
     */
    DashboardService.prototype.cacheWidgets = /**
     * @return {?}
     */
    function () {
        this._cache = this.widgets.map(function (widget) { return ({ id: widget.id, column: widget.getColumn(), row: widget.getRow() }); });
    };
    /**
     * @param {?=} ignoreActionWidget
     * @return {?}
     */
    DashboardService.prototype.restoreWidgets = /**
     * @param {?=} ignoreActionWidget
     * @return {?}
     */
    function (ignoreActionWidget) {
        var _this = this;
        if (ignoreActionWidget === void 0) { ignoreActionWidget = false; }
        this._cache.filter(function (widget) { return !ignoreActionWidget || widget.id !== _this._actionWidget.widget.id; }).forEach(function (widget) {
            var /** @type {?} */ match = _this.widgets.find(function (wgt) { return wgt.id === widget.id; });
            if (match) {
                match.setColumn(widget.column);
                match.setRow(widget.row);
            }
        });
    };
    /**
     * When dragging any widgets that need to be moved should be moved to an appropriate position
     */
    /**
     * When dragging any widgets that need to be moved should be moved to an appropriate position
     * @return {?}
     */
    DashboardService.prototype.shiftWidgets = /**
     * When dragging any widgets that need to be moved should be moved to an appropriate position
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ widgetsToMove = [];
        var /** @type {?} */ placeholder = this.placeholder$.getValue();
        var _loop_3 = function (row) {
            var _loop_4 = function (column) {
                // store reference to any widgets that need moved
                this_1.getOccupiedSpaces()
                    .filter(function (space) { return space.column === column && space.row === row && space.widget !== _this._actionWidget.widget; })
                    .forEach(function (space) { return widgetsToMove.push(space.widget); });
            };
            for (var /** @type {?} */ column = placeholder.column; column < placeholder.column + placeholder.columnSpan; column++) {
                _loop_4(column);
            }
        };
        var this_1 = this;
        // check if there are any widgets under the placeholder
        for (var /** @type {?} */ row = placeholder.row; row < placeholder.row + placeholder.rowSpan; row++) {
            _loop_3(row);
        }
        // remove any duplicates
        widgetsToMove = widgetsToMove.filter(function (widget, idx, array) { return array.indexOf(widget) === idx; });
        // if no widgets need moved then we can stop here
        if (widgetsToMove.length === 0) {
            return;
        }
        // create a duplicate we can use to keep track of which have been moved
        var /** @type {?} */ unmovedWidgets = widgetsToMove.slice();
        // attempt to move any widgets to the previous widget position
        widgetsToMove.forEach(function (widget) {
            // get a grid off all occupied spaces - taking into account the placeholder and ignoring widgets that need moved
            var /** @type {?} */ grid = _this.getOccupiedSpaces().filter(function (space) { return !unmovedWidgets.find(function (wgt) { return wgt === space.widget; }); });
            // iterate each free block
            for (var /** @type {?} */ row = _this._widgetOrigin.row; row < _this._widgetOrigin.row + _this._widgetOrigin.rowSpan; row++) {
                for (var /** @type {?} */ column = _this._widgetOrigin.column; column < _this._widgetOrigin.column + _this._widgetOrigin.columnSpan; column++) {
                    // determine if the block can fit in this space
                    var /** @type {?} */ requiredSpaces = _this.getRequiredSpacesFromPoint(widget, column, row);
                    // check if widget would fit in space
                    var /** @type {?} */ available = requiredSpaces.every(function (space) {
                        return !grid.find(function (gridSpace) { return gridSpace.column === space.column && gridSpace.row === space.row; }) && space.column < _this.getColumnCount();
                    });
                    if (available) {
                        widget.setColumn(column);
                        widget.setRow(row);
                        unmovedWidgets.splice(unmovedWidgets.findIndex(function (wgt) { return wgt === widget; }), 1);
                        return;
                    }
                }
            }
            // if we get to here then we can't simply swap the positions - next try moving right
            if (_this.canWidgetMoveRight(widget, true)) {
                // after the shift check if placeholder position is still valid
                // after the shift check if placeholder position is still valid
                _this.validatePlaceholderPosition(ActionDirection.Right);
                return;
            }
            // next try moving left
            if (_this.canWidgetMoveLeft(widget, true)) {
                // after the shift check if placeholder position is still valid
                // after the shift check if placeholder position is still valid
                _this.validatePlaceholderPosition(ActionDirection.Left);
                return;
            }
            // determine the distance that the widget needs to be moved down
            var /** @type {?} */ distance = (_this._actionWidget.widget.getRow() - widget.getRow()) + _this._actionWidget.widget.getRowSpan();
            // as a last resort move the widget downwards
            // as a last resort move the widget downwards
            _this.moveWidgetDown(widget, distance);
        });
    };
    /**
     * After shifts have taken place we should verify the place holder position is still valid
     * @param shiftDirection - the position widgets were shifted
     */
    /**
     * After shifts have taken place we should verify the place holder position is still valid
     * @param {?} shiftDirection - the position widgets were shifted
     * @return {?}
     */
    DashboardService.prototype.validatePlaceholderPosition = /**
     * After shifts have taken place we should verify the place holder position is still valid
     * @param {?} shiftDirection - the position widgets were shifted
     * @return {?}
     */
    function (shiftDirection) {
        var /** @type {?} */ placeholder = this.placeholder$.getValue();
        // check if the placeholder is over a widget
        if (this.getWidgetsAtPosition(placeholder.column, placeholder.row, true).length > 0) {
            // move the placeholder the opposite direction
            switch (shiftDirection) {
                case ActionDirection.Left:
                    this.setPlaceholderBounds(placeholder.visible, placeholder.x + this.getColumnWidth(), placeholder.y, placeholder.width, placeholder.height);
                    break;
                case ActionDirection.Right:
                    this.setPlaceholderBounds(placeholder.visible, placeholder.x - this.getColumnWidth(), placeholder.y, placeholder.width, placeholder.height);
                    break;
            }
            // validate this new position again
            this.validatePlaceholderPosition(shiftDirection);
        }
    };
    /**
     * Determine if a widget can be moved left - or if it can move the widgets to the right to make space for the widget
     */
    /**
     * Determine if a widget can be moved left - or if it can move the widgets to the right to make space for the widget
     * @param {?} widget
     * @param {?=} performMove
     * @return {?}
     */
    DashboardService.prototype.canWidgetMoveLeft = /**
     * Determine if a widget can be moved left - or if it can move the widgets to the right to make space for the widget
     * @param {?} widget
     * @param {?=} performMove
     * @return {?}
     */
    function (widget, performMove) {
        var _this = this;
        if (performMove === void 0) { performMove = false; }
        // check if the widget is the action widget or occupies the first column
        if (widget === this._actionWidget.widget || widget.getColumn() === 0) {
            return false;
        }
        // find the positions required
        var /** @type {?} */ targetSpaces = this.getOccupiedSpaces().filter(function (space) { return space.widget === widget; }).map(function (space) {
            return { column: space.column - widget.getColumnSpan(), row: space.row, widget: space.widget };
        });
        // check if there are widget in the required positions and if so, can they move right?
        var /** @type {?} */ moveable = targetSpaces.every(function (space) { return _this.getWidgetsAtPosition(space.column, space.row).filter(function (wgt) { return wgt !== space.widget; }).every(function (wgt) { return _this.canWidgetMoveLeft(wgt); }); });
        if (performMove && moveable) {
            // move all widgets to the right
            targetSpaces.forEach(function (space) { return _this.getWidgetsAtPosition(space.column, space.row).filter(function (wgt) { return wgt !== space.widget; }).forEach(function (wgt) { return _this.canWidgetMoveLeft(wgt, true); }); });
            // move current widget to the right
            widget.setColumn(widget.getColumn() - 1);
        }
        return moveable;
    };
    /**
     * Determine if a widget can be moved right - or if it can move the widgets to the right to make space for the widget
     */
    /**
     * Determine if a widget can be moved right - or if it can move the widgets to the right to make space for the widget
     * @param {?} widget
     * @param {?=} performMove
     * @return {?}
     */
    DashboardService.prototype.canWidgetMoveRight = /**
     * Determine if a widget can be moved right - or if it can move the widgets to the right to make space for the widget
     * @param {?} widget
     * @param {?=} performMove
     * @return {?}
     */
    function (widget, performMove) {
        var _this = this;
        if (performMove === void 0) { performMove = false; }
        // check if the widget is the dragging widget or the widget occupies the final column
        if (widget === this._actionWidget.widget || widget.getColumn() + widget.getColumnSpan() === this.options.columns) {
            return false;
        }
        // find the positions required
        var /** @type {?} */ targetSpaces = this.getOccupiedSpaces().filter(function (space) { return space.widget === widget; }).map(function (space) {
            return { column: space.column + widget.getColumnSpan(), row: space.row, widget: space.widget };
        });
        // check if there are widget in the required positions and if so, can they move right?
        var /** @type {?} */ moveable = targetSpaces.every(function (space) { return _this.getWidgetsAtPosition(space.column, space.row).filter(function (wgt) { return wgt !== space.widget; }).every(function (wgt) { return _this.canWidgetMoveRight(wgt); }); });
        if (performMove && moveable) {
            // move all widgets to the right
            targetSpaces.forEach(function (space) { return _this.getWidgetsAtPosition(space.column, space.row).filter(function (wgt) { return wgt !== space.widget; }).forEach(function (wgt) { return _this.canWidgetMoveRight(wgt, true); }); });
            // move current widget to the right
            widget.setColumn(widget.getColumn() + 1);
        }
        return moveable;
    };
    /**
     * Store the initial position of the widget being dragged
     */
    /**
     * Store the initial position of the widget being dragged
     * @return {?}
     */
    DashboardService.prototype.setWidgetOrigin = /**
     * Store the initial position of the widget being dragged
     * @return {?}
     */
    function () {
        this._widgetOrigin = {
            column: this._actionWidget.widget.getColumn(),
            row: this._actionWidget.widget.getRow(),
            columnSpan: this._actionWidget.widget.getColumnSpan(),
            rowSpan: this._actionWidget.widget.getRowSpan()
        };
    };
    /**
     * Calculate all the required positions is a widget was to be positioned at a particular point
     */
    /**
     * Calculate all the required positions is a widget was to be positioned at a particular point
     * @param {?} widget
     * @param {?} column
     * @param {?} row
     * @return {?}
     */
    DashboardService.prototype.getRequiredSpacesFromPoint = /**
     * Calculate all the required positions is a widget was to be positioned at a particular point
     * @param {?} widget
     * @param {?} column
     * @param {?} row
     * @return {?}
     */
    function (widget, column, row) {
        var /** @type {?} */ spaces = [];
        for (var /** @type {?} */ y = row; y < row + widget.getRowSpan(); y++) {
            for (var /** @type {?} */ x = column; x < column + widget.getColumnSpan(); x++) {
                spaces.push({ column: x, row: y, widget: widget });
            }
        }
        return spaces;
    };
    /**
     * Position widgets based on the position of the placeholder - this is temporary until confirmed
     */
    /**
     * Position widgets based on the position of the placeholder - this is temporary until confirmed
     * @param {?} widget
     * @return {?}
     */
    DashboardService.prototype.updateWidgetPositions = /**
     * Position widgets based on the position of the placeholder - this is temporary until confirmed
     * @param {?} widget
     * @return {?}
     */
    function (widget) {
        var _this = this;
        var /** @type {?} */ placeholder = this.placeholder$.getValue();
        // check all spaces the placeholder will occupy and move any widget currently in them down
        for (var /** @type {?} */ column = placeholder.column; column < placeholder.column + placeholder.columnSpan; column++) {
            for (var /** @type {?} */ row = placeholder.row; row < placeholder.row + placeholder.rowSpan; row++) {
                this.getWidgetsAtPosition(column, row, true)
                    .filter(function (wgt) { return wgt !== widget; })
                    .forEach(function (wgt) { return _this.moveWidgetDown(wgt); });
            }
        }
        // update the height of the dashboard
        this.setDashboardHeight();
        // if we arent dragging the top handle then fill spaces
        if (this._actionWidget.direction !== ActionDirection.Top &&
            this._actionWidget.direction !== ActionDirection.TopLeft &&
            this._actionWidget.direction !== ActionDirection.TopRight) {
            this.shiftWidgetsUp();
        }
    };
    /**
     * Determine if a widget is occupying a specific row and column
     * @param column The columns to check if occupied
     * @param row The row to check if occupied
     * @param ignoreResizing Whether or not to ignore the widget currently being resized
     */
    /**
     * Determine if a widget is occupying a specific row and column
     * @param {?} column The columns to check if occupied
     * @param {?} row The row to check if occupied
     * @param {?=} ignoreResizing Whether or not to ignore the widget currently being resized
     * @return {?}
     */
    DashboardService.prototype.getWidgetsAtPosition = /**
     * Determine if a widget is occupying a specific row and column
     * @param {?} column The columns to check if occupied
     * @param {?} row The row to check if occupied
     * @param {?=} ignoreResizing Whether or not to ignore the widget currently being resized
     * @return {?}
     */
    function (column, row, ignoreResizing) {
        var _this = this;
        if (ignoreResizing === void 0) { ignoreResizing = false; }
        return this.getOccupiedSpaces()
            .filter(function (space) { return space.column === column && space.row === row; })
            .filter(function (space) { return space.widget !== _this._actionWidget.widget || !ignoreResizing; })
            .map(function (space) { return space.widget; });
    };
    /**
     * Update the placeholder visibility, position and size
     */
    /**
     * Update the placeholder visibility, position and size
     * @param {?} visible
     * @param {?} x
     * @param {?} y
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    DashboardService.prototype.setPlaceholderBounds = /**
     * Update the placeholder visibility, position and size
     * @param {?} visible
     * @param {?} x
     * @param {?} y
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    function (visible, x, y, width, height) {
        var _this = this;
        var /** @type {?} */ placeholder = this.placeholder$.getValue();
        var /** @type {?} */ rounding = this._actionWidget.direction === ActionDirection.Left ||
            this._actionWidget.direction === ActionDirection.Top ? Rounding.RoundDownBelowHalf : Rounding.RoundUpOverHalf;
        placeholder.visible = visible;
        placeholder.column = this.getPlaceholderColumn(x, width);
        placeholder.row = this.getPlaceholderRow(y, height);
        placeholder.columnSpan = this.getPlaceholderColumnSpan(width);
        placeholder.rowSpan = this.getPlaceholderRowSpan(height);
        // calculate the maximum number of rows
        var /** @type {?} */ rowCount = this.widgets.filter(function (widget) { return widget !== _this._actionWidget.widget; })
            .reduce(function (previous, widget) { return Math.max(widget.getRow() + widget.getRowSpan(), previous); }, 0);
        // constrain maximum placeholder row
        placeholder.row = Math.min(placeholder.row, rowCount);
        placeholder.x = (placeholder.column * this.getColumnWidth()) + this.options.padding;
        placeholder.y = (placeholder.row * this._rowHeight) + this.options.padding;
        placeholder.width = (placeholder.columnSpan * this.getColumnWidth()) - (this.options.padding * 2);
        placeholder.height = (placeholder.rowSpan * this._rowHeight) - (this.options.padding * 2);
        // set the values of the widget to match the values of the placeholder - however do not render the changes
        this._actionWidget.widget.setColumn(placeholder.column, false);
        this._actionWidget.widget.setRow(placeholder.row, false);
        this._actionWidget.widget.setColumnSpan(placeholder.columnSpan, false);
        this._actionWidget.widget.setRowSpan(placeholder.rowSpan, false);
        // update the placeholder
        this.placeholder$.next(placeholder);
    };
    /**
     * Get the placeholder column position
     */
    /**
     * Get the placeholder column position
     * @param {?} x
     * @param {?} width
     * @return {?}
     */
    DashboardService.prototype.getPlaceholderColumn = /**
     * Get the placeholder column position
     * @param {?} x
     * @param {?} width
     * @return {?}
     */
    function (x, width) {
        var /** @type {?} */ column = this.getColumnFromPx(x, this._actionWidget.direction === ActionDirection.Move ? Rounding.RoundUpOverHalf : Rounding.RoundDown);
        var /** @type {?} */ columnSpan = Math.floor(width / this.getColumnWidth());
        var /** @type {?} */ upperLimit = this.getColumnCount() - columnSpan;
        // if we arent dragging left then just return the column
        if (this._actionWidget.direction !== ActionDirection.Left &&
            this._actionWidget.direction !== ActionDirection.TopLeft &&
            this._actionWidget.direction !== ActionDirection.BottomLeft) {
            return Math.max(Math.min(column, upperLimit), 0);
        }
        // get any overflow
        var /** @type {?} */ overflow = width % this.getColumnWidth();
        return (x <= 0 || overflow === 0 || columnSpan === 0 || overflow > (this.getColumnWidth() / 2)) ?
            Math.max(Math.min(column, upperLimit), 0) :
            Math.max(Math.min(column + 1, upperLimit), 0);
    };
    /**
     * Get the column span of the placeholder
     */
    /**
     * Get the column span of the placeholder
     * @param {?} width
     * @return {?}
     */
    DashboardService.prototype.getPlaceholderColumnSpan = /**
     * Get the column span of the placeholder
     * @param {?} width
     * @return {?}
     */
    function (width) {
        var /** @type {?} */ columnSpan = this.getColumnFromPx(width);
        // if we arent dragging right or left then just return the column span
        if (this._actionWidget.direction !== ActionDirection.Right &&
            this._actionWidget.direction !== ActionDirection.TopRight &&
            this._actionWidget.direction !== ActionDirection.BottomRight &&
            this._actionWidget.direction !== ActionDirection.Left &&
            this._actionWidget.direction !== ActionDirection.TopLeft &&
            this._actionWidget.direction !== ActionDirection.BottomLeft) {
            return Math.max(columnSpan, 1);
        }
        // get the current column span and any overflow
        var /** @type {?} */ overflow = width % this.getColumnWidth();
        return (columnSpan > 0 && overflow > (this.getColumnWidth() / 2)) ? Math.max(columnSpan + 1, 1) : Math.max(columnSpan, 1);
    };
    /**
     * Get the row position of the placeholder
     */
    /**
     * Get the row position of the placeholder
     * @param {?} y
     * @param {?} height
     * @return {?}
     */
    DashboardService.prototype.getPlaceholderRow = /**
     * Get the row position of the placeholder
     * @param {?} y
     * @param {?} height
     * @return {?}
     */
    function (y, height) {
        var /** @type {?} */ row = this.getRowFromPx(y, this._actionWidget.direction === ActionDirection.Move ? Rounding.RoundUpOverHalf : Rounding.RoundDown);
        var /** @type {?} */ rowSpan = Math.ceil(height / this._rowHeight);
        // if we arent dragging up then just return the row
        if (this._actionWidget.direction !== ActionDirection.Top &&
            this._actionWidget.direction !== ActionDirection.TopLeft &&
            this._actionWidget.direction !== ActionDirection.TopRight) {
            return Math.max(row, 0);
        }
        // get any overflow
        var /** @type {?} */ overflow = height < this._rowHeight ? 0 : height % this._rowHeight;
        return (y <= 0 || rowSpan === 0 || overflow === 0 || overflow > (this._rowHeight / 2)) ? Math.max(row, 0) : Math.max(row + 1, 0);
    };
    /**
     * Get the row span of the placeholder
     */
    /**
     * Get the row span of the placeholder
     * @param {?} height
     * @return {?}
     */
    DashboardService.prototype.getPlaceholderRowSpan = /**
     * Get the row span of the placeholder
     * @param {?} height
     * @return {?}
     */
    function (height) {
        var /** @type {?} */ rowSpan = this.getRowFromPx(height);
        // if we arent dragging up or down then just return the column span
        if (this._actionWidget.direction !== ActionDirection.Top &&
            this._actionWidget.direction !== ActionDirection.TopLeft &&
            this._actionWidget.direction !== ActionDirection.TopRight &&
            this._actionWidget.direction !== ActionDirection.Bottom &&
            this._actionWidget.direction !== ActionDirection.BottomLeft &&
            this._actionWidget.direction !== ActionDirection.BottomRight) {
            return Math.max(rowSpan, 1);
        }
        // get the current column span and any overflow
        var /** @type {?} */ overflow = height % this._rowHeight;
        return (overflow > (this._rowHeight / 2)) ? Math.max(rowSpan + 1, 1) : Math.max(rowSpan, 1);
    };
    /**
     * @param {?} x
     * @param {?=} rounding
     * @return {?}
     */
    DashboardService.prototype.getColumnFromPx = /**
     * @param {?} x
     * @param {?=} rounding
     * @return {?}
     */
    function (x, rounding) {
        if (rounding === void 0) { rounding = Rounding.RoundDown; }
        var /** @type {?} */ column = Math.floor(x / Math.floor(this.getColumnWidth()));
        var /** @type {?} */ overflow = (x % Math.floor(this.getColumnWidth()));
        var /** @type {?} */ half = this.getColumnWidth() / 2;
        switch (rounding) {
            case Rounding.RoundDown:
                return column;
            case Rounding.RoundDownBelowHalf:
                return overflow < half ? column : column + 1;
            case Rounding.RoundUpOverHalf:
                return overflow > half ? column + 1 : column;
            case Rounding.RoundUp:
                return overflow > 0 ? column + 1 : column;
        }
    };
    /**
     * @param {?} y
     * @param {?=} rounding
     * @return {?}
     */
    DashboardService.prototype.getRowFromPx = /**
     * @param {?} y
     * @param {?=} rounding
     * @return {?}
     */
    function (y, rounding) {
        if (rounding === void 0) { rounding = Rounding.RoundDown; }
        var /** @type {?} */ row = Math.floor(y / Math.floor(this._rowHeight));
        var /** @type {?} */ overflow = (y % Math.floor(this._rowHeight));
        var /** @type {?} */ half = this._rowHeight / 2;
        switch (rounding) {
            case Rounding.RoundDown:
                return row;
            case Rounding.RoundDownBelowHalf:
                return overflow < half ? row : row + 1;
            case Rounding.RoundUpOverHalf:
                return overflow > half ? row + 1 : row;
            case Rounding.RoundUp:
                return overflow > 0 ? row + 1 : row;
        }
    };
    /**
     * @return {?}
     */
    DashboardService.prototype.commitWidgetChanges = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ placeholder = this.placeholder$.getValue();
        // check that we have all the values we need
        if (placeholder.column === undefined || placeholder.row === undefined ||
            placeholder.columnSpan === undefined || placeholder.rowSpan === undefined) {
            return;
        }
        if (this._actionWidget) {
            this._actionWidget.widget.setColumn(placeholder.column);
            this._actionWidget.widget.setRow(placeholder.row);
            this._actionWidget.widget.setColumnSpan(placeholder.columnSpan);
            this._actionWidget.widget.setRowSpan(placeholder.rowSpan);
        }
        // reset all placeholder values
        placeholder.column = undefined;
        placeholder.row = undefined;
        placeholder.columnSpan = undefined;
        placeholder.rowSpan = undefined;
        // emit the new placeholder values
        this.placeholder$.next(placeholder);
    };
    /**
     * Get the current column width
     */
    /**
     * Get the current column width
     * @return {?}
     */
    DashboardService.prototype.getColumnWidth = /**
     * Get the current column width
     * @return {?}
     */
    function () {
        return Math.floor(this.columnWidth);
    };
    /**
     * Calculate the number of rows populated with widgets
     */
    /**
     * Calculate the number of rows populated with widgets
     * @return {?}
     */
    DashboardService.prototype.getRowCount = /**
     * Calculate the number of rows populated with widgets
     * @return {?}
     */
    function () {
        return this.widgets.reduce(function (previous, widget) { return Math.max(widget.getRow() + widget.getRowSpan(), previous); }, 0);
    };
    /**
     * Set the height of the dashboard container element
     */
    /**
     * Set the height of the dashboard container element
     * @return {?}
     */
    DashboardService.prototype.setDashboardHeight = /**
     * Set the height of the dashboard container element
     * @return {?}
     */
    function () {
        // size the dashboard container to ensure all rows fit
        var /** @type {?} */ rowCount = this.getRowCount();
        // if we should show an empty row increment the row count by 1
        if (this.options.emptyRow) {
            rowCount++;
        }
        this.setDimensions(undefined, rowCount * this._rowHeight);
    };
    /**
     * Orders the z-index of all widgets to move the active one to the front
     * @param widget The widget that should be brought to the front
     */
    /**
     * Orders the z-index of all widgets to move the active one to the front
     * @param {?} widget The widget that should be brought to the front
     * @return {?}
     */
    DashboardService.prototype.bringToFront = /**
     * Orders the z-index of all widgets to move the active one to the front
     * @param {?} widget The widget that should be brought to the front
     * @return {?}
     */
    function (widget) {
        this.widgets.forEach(function (_widget) { return _widget === widget ? _widget.bringToFront() : _widget.sendToBack(); });
    };
    /**
     * Move a widget down - if widgets are in the position below, then move them down further
     * @param widget The widget to move downwards
     */
    /**
     * Move a widget down - if widgets are in the position below, then move them down further
     * @param {?} widget The widget to move downwards
     * @param {?=} distance
     * @return {?}
     */
    DashboardService.prototype.moveWidgetDown = /**
     * Move a widget down - if widgets are in the position below, then move them down further
     * @param {?} widget The widget to move downwards
     * @param {?=} distance
     * @return {?}
     */
    function (widget, distance) {
        var _this = this;
        if (distance === void 0) { distance = 1; }
        // move the widget down one position
        widget.setRow(widget.getRow() + distance);
        // check every space the widget occupies for collisions
        this.forEachBlock(widget, function (column, row) {
            return _this.getWidgetsAtPosition(column, row, true)
                .filter(function (wgt) { return wgt !== widget; })
                .forEach(function (wgt) { return _this.moveWidgetDown(wgt, distance); });
        });
    };
    /**
     * Widgets should not be allowed to have a vacant space above them - if there is one they should move upwards to fill it
     */
    /**
     * Widgets should not be allowed to have a vacant space above them - if there is one they should move upwards to fill it
     * @return {?}
     */
    DashboardService.prototype.shiftWidgetsUp = /**
     * Widgets should not be allowed to have a vacant space above them - if there is one they should move upwards to fill it
     * @return {?}
     */
    function () {
        var _this = this;
        // check whether or not changes have been made - if so we need to repeat until stable
        var /** @type {?} */ stable = true;
        // iterate each widget and
        this.widgets.forEach(function (widget) {
            // if widget is already on the top row then do nothing
            if (widget.getRow() === 0) {
                return;
            }
            // if we are currently dragging and this is the dragging widget then skip
            if (_this._actionWidget && _this._actionWidget.widget === widget) {
                return;
            }
            if (_this.getPositionAvailable(widget.getColumn(), widget.getRow() - 1, widget.getColumnSpan(), 1)) {
                widget.setRow(widget.getRow() - 1);
                stable = false;
            }
        });
        // if changes occurred then we should repeat the process
        if (!stable) {
            this.shiftWidgetsUp();
        }
    };
    /**
     * Iterate over each space a widget occupied
     * @param widget The widget to determine spaces
     * @param callback The function to be called for each space, should expect a column and row argument witht he context being the widget
     */
    /**
     * Iterate over each space a widget occupied
     * @param {?} widget The widget to determine spaces
     * @param {?} callback The function to be called for each space, should expect a column and row argument witht he context being the widget
     * @return {?}
     */
    DashboardService.prototype.forEachBlock = /**
     * Iterate over each space a widget occupied
     * @param {?} widget The widget to determine spaces
     * @param {?} callback The function to be called for each space, should expect a column and row argument witht he context being the widget
     * @return {?}
     */
    function (widget, callback) {
        for (var /** @type {?} */ row = widget.getRow(); row < widget.getRow() + widget.getRowSpan(); row++) {
            for (var /** @type {?} */ column = widget.getColumn(); column < widget.getColumn() + widget.getColumnSpan(); column++) {
                callback.call(widget, column, row);
            }
        }
    };
    /**
     * Returns the number of columns available
     */
    /**
     * Returns the number of columns available
     * @return {?}
     */
    DashboardService.prototype.getColumnCount = /**
     * Returns the number of columns available
     * @return {?}
     */
    function () {
        return this.stacked ? 1 : this.options.columns;
    };
    DashboardService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    DashboardService.ctorParameters = function () { return []; };
    return DashboardService;
}());
export { DashboardService };
function DashboardService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    DashboardService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    DashboardService.ctorParameters;
    /** @type {?} */
    DashboardService.prototype._widgetOrigin;
    /** @type {?} */
    DashboardService.prototype._actionWidget;
    /** @type {?} */
    DashboardService.prototype._rowHeight;
    /** @type {?} */
    DashboardService.prototype._cache;
    /** @type {?} */
    DashboardService.prototype._mouseEvent;
    /** @type {?} */
    DashboardService.prototype.widgets$;
    /** @type {?} */
    DashboardService.prototype.options$;
    /** @type {?} */
    DashboardService.prototype.dimensions$;
    /** @type {?} */
    DashboardService.prototype.height$;
    /** @type {?} */
    DashboardService.prototype.placeholder$;
    /** @type {?} */
    DashboardService.prototype.layout$;
    /** @type {?} */
    DashboardService.prototype.stacked$;
}
export var /** @type {?} */ defaultOptions = { columns: 5, padding: 5, minWidth: 100, minHeight: 100, emptyRow: true };
/**
 * @record
 */
export function DashboardDimensions() { }
function DashboardDimensions_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    DashboardDimensions.prototype.width;
    /** @type {?|undefined} */
    DashboardDimensions.prototype.height;
}
/**
 * @record
 */
export function DashboardWidgetDimensions() { }
function DashboardWidgetDimensions_tsickle_Closure_declarations() {
    /** @type {?} */
    DashboardWidgetDimensions.prototype.x;
    /** @type {?} */
    DashboardWidgetDimensions.prototype.y;
    /** @type {?} */
    DashboardWidgetDimensions.prototype.width;
    /** @type {?} */
    DashboardWidgetDimensions.prototype.height;
}
/**
 * @record
 */
export function DashboardAction() { }
function DashboardAction_tsickle_Closure_declarations() {
    /** @type {?} */
    DashboardAction.prototype.widget;
    /** @type {?} */
    DashboardAction.prototype.direction;
    /** @type {?} */
    DashboardAction.prototype.event;
    /** @type {?|undefined} */
    DashboardAction.prototype.handle;
}
/**
 * @record
 */
export function DashboardSpace() { }
function DashboardSpace_tsickle_Closure_declarations() {
    /** @type {?} */
    DashboardSpace.prototype.widget;
    /** @type {?} */
    DashboardSpace.prototype.column;
    /** @type {?} */
    DashboardSpace.prototype.row;
}
/**
 * @record
 */
export function DashboardPlaceholder() { }
function DashboardPlaceholder_tsickle_Closure_declarations() {
    /** @type {?} */
    DashboardPlaceholder.prototype.visible;
    /** @type {?} */
    DashboardPlaceholder.prototype.x;
    /** @type {?} */
    DashboardPlaceholder.prototype.y;
    /** @type {?} */
    DashboardPlaceholder.prototype.width;
    /** @type {?} */
    DashboardPlaceholder.prototype.height;
    /** @type {?|undefined} */
    DashboardPlaceholder.prototype.column;
    /** @type {?|undefined} */
    DashboardPlaceholder.prototype.row;
    /** @type {?|undefined} */
    DashboardPlaceholder.prototype.columnSpan;
    /** @type {?|undefined} */
    DashboardPlaceholder.prototype.rowSpan;
}
/**
 * @record
 */
export function DashboardCache() { }
function DashboardCache_tsickle_Closure_declarations() {
    /** @type {?} */
    DashboardCache.prototype.id;
    /** @type {?} */
    DashboardCache.prototype.column;
    /** @type {?} */
    DashboardCache.prototype.row;
}
/**
 * @record
 */
export function DashboardLayoutData() { }
function DashboardLayoutData_tsickle_Closure_declarations() {
    /** @type {?} */
    DashboardLayoutData.prototype.id;
    /** @type {?} */
    DashboardLayoutData.prototype.col;
    /** @type {?} */
    DashboardLayoutData.prototype.row;
    /** @type {?} */
    DashboardLayoutData.prototype.colSpan;
    /** @type {?} */
    DashboardLayoutData.prototype.rowSpan;
}
/** @enum {number} */
var ActionDirection = {
    Top: 0,
    TopRight: 1,
    Right: 2,
    BottomRight: 3,
    Bottom: 4,
    BottomLeft: 5,
    Left: 6,
    TopLeft: 7,
    Move: 8,
};
export { ActionDirection };
ActionDirection[ActionDirection.Top] = "Top";
ActionDirection[ActionDirection.TopRight] = "TopRight";
ActionDirection[ActionDirection.Right] = "Right";
ActionDirection[ActionDirection.BottomRight] = "BottomRight";
ActionDirection[ActionDirection.Bottom] = "Bottom";
ActionDirection[ActionDirection.BottomLeft] = "BottomLeft";
ActionDirection[ActionDirection.Left] = "Left";
ActionDirection[ActionDirection.TopLeft] = "TopLeft";
ActionDirection[ActionDirection.Move] = "Move";
/** @enum {number} */
var Rounding = {
    RoundDown: 0,
    RoundDownBelowHalf: 1,
    RoundUp: 2,
    RoundUpOverHalf: 3,
};
export { Rounding };
Rounding[Rounding.RoundDown] = "RoundDown";
Rounding[Rounding.RoundDownBelowHalf] = "RoundDownBelowHalf";
Rounding[Rounding.RoundUp] = "RoundUp";
Rounding[Rounding.RoundUpOverHalf] = "RoundUpOverHalf";

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaGJvYXJkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AdXgtYXNwZWN0cy91eC1hc3BlY3RzLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQWtCLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRSxPQUFPLEVBQUUsS0FBSyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7SUF5Q3RFO1FBQUEsaUJBS0M7MEJBckM0QixDQUFDO3dCQUluQixJQUFJLGVBQWUsQ0FBNkIsRUFBRSxDQUFDO3dCQUNuRCxJQUFJLGVBQWUsQ0FBbUIsY0FBYyxDQUFDOzJCQUNsRCxJQUFJLGVBQWUsQ0FBc0IsRUFBRSxDQUFDO3VCQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLFVBQUMsVUFBK0IsSUFBSyxPQUFBLFVBQVUsQ0FBQyxNQUFNLEVBQWpCLENBQWlCLENBQUMsRUFBRSxvQkFBb0IsRUFBRSxDQUFDOzRCQUNuSSxJQUFJLGVBQWUsQ0FBdUIsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQzt1QkFDbkcsSUFBSSxPQUFPLEVBQXlCO3dCQUNuQyxJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUM7UUF1QjFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDdEQsSUFB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LElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxLQUFLLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM5SSxxQkFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7UUFDN0QscUJBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsR0FBRyxVQUFVLENBQUM7O1FBR3RELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxLQUFLLGVBQWUsQ0FBQyxJQUFJO1lBQ3JELElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxLQUFLLGVBQWUsQ0FBQyxPQUFPO1lBQ3hELElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxLQUFLLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQzlELE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3BEOztRQUdELHFCQUFNLFFBQVEsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRS9DLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksUUFBUSxLQUFLLENBQUMsSUFBSSxVQUFVLEtBQUssQ0FBQyxJQUFJLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ3JEO0lBRUQ7O09BRUc7Ozs7OztJQUNILG1EQUF3Qjs7Ozs7SUFBeEIsVUFBeUIsS0FBYTtRQUVsQyxxQkFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7UUFHL0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEtBQUssZUFBZSxDQUFDLEtBQUs7WUFDdEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEtBQUssZUFBZSxDQUFDLFFBQVE7WUFDekQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEtBQUssZUFBZSxDQUFDLFdBQVc7WUFDNUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEtBQUssZUFBZSxDQUFDLElBQUk7WUFDckQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEtBQUssZUFBZSxDQUFDLE9BQU87WUFDeEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEtBQUssZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDOUQsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2xDOztRQUdELHFCQUFNLFFBQVEsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRS9DLE1BQU0sQ0FBQyxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDN0g7SUFFRDs7T0FFRzs7Ozs7OztJQUNILDRDQUFpQjs7Ozs7O0lBQWpCLFVBQWtCLENBQVMsRUFBRSxNQUFjO1FBRXZDLHFCQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsS0FBSyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDeEkscUJBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzs7UUFHcEQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEtBQUssZUFBZSxDQUFDLEdBQUc7WUFDcEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEtBQUssZUFBZSxDQUFDLE9BQU87WUFDeEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEtBQUssZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDNUQsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzNCOztRQUdELHFCQUFJLFFBQVEsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUV2RSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLE9BQU8sS0FBSyxDQUFDLElBQUksUUFBUSxLQUFLLENBQUMsSUFBSSxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDcEk7SUFFRDs7T0FFRzs7Ozs7O0lBQ0gsZ0RBQXFCOzs7OztJQUFyQixVQUFzQixNQUFjO1FBRWhDLHFCQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDOztRQUcxQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsS0FBSyxlQUFlLENBQUMsR0FBRztZQUNwRCxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsS0FBSyxlQUFlLENBQUMsT0FBTztZQUN4RCxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsS0FBSyxlQUFlLENBQUMsUUFBUTtZQUN6RCxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsS0FBSyxlQUFlLENBQUMsTUFBTTtZQUN2RCxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsS0FBSyxlQUFlLENBQUMsVUFBVTtZQUMzRCxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsS0FBSyxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUMvRCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDL0I7O1FBR0QscUJBQU0sUUFBUSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBRTFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztLQUMvRjs7Ozs7O0lBRUQsMENBQWU7Ozs7O0lBQWYsVUFBZ0IsQ0FBUyxFQUFFLFFBQXVDO1FBQXZDLHlCQUFBLEVBQUEsV0FBcUIsUUFBUSxDQUFDLFNBQVM7UUFFOUQscUJBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqRSxxQkFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pELHFCQUFNLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRXZDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFFZixLQUFLLFFBQVEsQ0FBQyxTQUFTO2dCQUNuQixNQUFNLENBQUMsTUFBTSxDQUFDO1lBRWxCLEtBQUssUUFBUSxDQUFDLGtCQUFrQjtnQkFDNUIsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUVqRCxLQUFLLFFBQVEsQ0FBQyxlQUFlO2dCQUN6QixNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBRWpELEtBQUssUUFBUSxDQUFDLE9BQU87Z0JBQ2pCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7U0FDakQ7S0FFSjs7Ozs7O0lBRUQsdUNBQVk7Ozs7O0lBQVosVUFBYSxDQUFTLEVBQUUsUUFBdUM7UUFBdkMseUJBQUEsRUFBQSxXQUFxQixRQUFRLENBQUMsU0FBUztRQUUzRCxxQkFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUN4RCxxQkFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNuRCxxQkFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFFakMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUVmLEtBQUssUUFBUSxDQUFDLFNBQVM7Z0JBQ25CLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFFZixLQUFLLFFBQVEsQ0FBQyxrQkFBa0I7Z0JBQzVCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFFM0MsS0FBSyxRQUFRLENBQUMsZUFBZTtnQkFDekIsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUUzQyxLQUFLLFFBQVEsQ0FBQyxPQUFPO2dCQUNqQixNQUFNLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1NBQzNDO0tBQ0o7Ozs7SUFFRCw4Q0FBbUI7OztJQUFuQjtRQUVJLHFCQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDOztRQUdqRCxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxXQUFXLENBQUMsR0FBRyxLQUFLLFNBQVM7WUFDakUsV0FBVyxDQUFDLFVBQVUsS0FBSyxTQUFTLElBQUksV0FBVyxDQUFDLE9BQU8sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzVFLE1BQU0sQ0FBQztTQUNWO1FBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xELElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDaEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM3RDs7UUFHRCxXQUFXLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztRQUMvQixXQUFXLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQztRQUM1QixXQUFXLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUNuQyxXQUFXLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQzs7UUFHaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDdkM7SUFFRDs7T0FFRzs7Ozs7SUFDSCx5Q0FBYzs7OztJQUFkO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQ3ZDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsc0NBQVc7Ozs7SUFBWDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFDLFFBQVEsRUFBRSxNQUFNLElBQUssT0FBQSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsVUFBVSxFQUFFLEVBQUUsUUFBUSxDQUFDLEVBQXpELENBQXlELEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDbEg7SUFFRDs7T0FFRzs7Ozs7SUFDSCw2Q0FBa0I7Ozs7SUFBbEI7O1FBR0kscUJBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7UUFHbEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLFFBQVEsRUFBRSxDQUFDO1NBQ2Q7UUFFRCxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQzdEO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCx1Q0FBWTs7Ozs7SUFBWixVQUFhLE1BQWdDO1FBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEVBQWxFLENBQWtFLENBQUMsQ0FBQztLQUN2RztJQUVEOzs7T0FHRzs7Ozs7OztJQUNILHlDQUFjOzs7Ozs7SUFBZCxVQUFlLE1BQWdDLEVBQUUsUUFBb0I7UUFBckUsaUJBVUM7UUFWZ0QseUJBQUEsRUFBQSxZQUFvQjs7UUFHakUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLENBQUM7O1FBRzFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFVBQUMsTUFBTSxFQUFFLEdBQUc7WUFDbEMsT0FBQSxLQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUM7aUJBQ3ZDLE1BQU0sQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsS0FBSyxNQUFNLEVBQWQsQ0FBYyxDQUFDO2lCQUM3QixPQUFPLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsRUFBbEMsQ0FBa0MsQ0FBQztRQUZ2RCxDQUV1RCxDQUFDLENBQUM7S0FDaEU7SUFFRDs7T0FFRzs7Ozs7SUFDSCx5Q0FBYzs7OztJQUFkO1FBQUEsaUJBNEJDOztRQXpCRyxxQkFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDOztRQUdsQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFBLE1BQU07O1lBR3ZCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixNQUFNLENBQUM7YUFDVjs7WUFHRCxFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsYUFBYSxJQUFJLEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQzdELE1BQU0sQ0FBQzthQUNWO1lBRUQsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2FBQ2xCO1NBQ0osQ0FBQyxDQUFDOztRQUdILEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNWLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN6QjtLQUNKO0lBRUQ7Ozs7T0FJRzs7Ozs7OztJQUNILHVDQUFZOzs7Ozs7SUFBWixVQUFhLE1BQWdDLEVBQUUsUUFBK0M7UUFDMUYsR0FBRyxDQUFDLENBQUMscUJBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxVQUFVLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO1lBQ2pGLEdBQUcsQ0FBQyxDQUFDLHFCQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLEVBQUUsR0FBRyxNQUFNLENBQUMsYUFBYSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQztnQkFDbkcsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ3RDO1NBQ0o7S0FDSjtJQUVEOztPQUVHOzs7OztJQUNILHlDQUFjOzs7O0lBQWQ7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztLQUNsRDs7Z0JBMWhDSixVQUFVOzs7OzJCQU5YOztTQU9hLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRoQzdCLE1BQU0sQ0FBQyxxQkFBTSxjQUFjLEdBQXFCLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCAsICBPYnNlcnZhYmxlICwgIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVsYXksIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgRGFzaGJvYXJkT3B0aW9ucyB9IGZyb20gJy4vZGFzaGJvYXJkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERhc2hib2FyZFdpZGdldENvbXBvbmVudCB9IGZyb20gJy4vd2lkZ2V0L2Rhc2hib2FyZC13aWRnZXQuY29tcG9uZW50JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERhc2hib2FyZFNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgX3dpZGdldE9yaWdpbjogeyBjb2x1bW4/OiBudW1iZXIsIHJvdz86IG51bWJlciwgY29sdW1uU3Bhbj86IG51bWJlciwgcm93U3Bhbj86IG51bWJlciB9O1xyXG4gICAgcHJpdmF0ZSBfYWN0aW9uV2lkZ2V0OiBEYXNoYm9hcmRBY3Rpb247XHJcbiAgICBwcml2YXRlIF9yb3dIZWlnaHQ6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIF9jYWNoZTogRGFzaGJvYXJkQ2FjaGVbXTtcclxuICAgIHByaXZhdGUgX21vdXNlRXZlbnQ6IE1vdXNlRXZlbnQ7XHJcblxyXG4gICAgd2lkZ2V0cyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PERhc2hib2FyZFdpZGdldENvbXBvbmVudFtdPihbXSk7XHJcbiAgICBvcHRpb25zJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8RGFzaGJvYXJkT3B0aW9ucz4oZGVmYXVsdE9wdGlvbnMpO1xyXG4gICAgZGltZW5zaW9ucyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PERhc2hib2FyZERpbWVuc2lvbnM+KHt9KTtcclxuICAgIGhlaWdodCQ6IE9ic2VydmFibGU8bnVtYmVyPiA9IHRoaXMuZGltZW5zaW9ucyQucGlwZShkZWxheSgwKSwgbWFwKChkaW1lbnNpb25zOiBEYXNoYm9hcmREaW1lbnNpb25zKSA9PiBkaW1lbnNpb25zLmhlaWdodCksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xyXG4gICAgcGxhY2Vob2xkZXIkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxEYXNoYm9hcmRQbGFjZWhvbGRlcj4oeyB2aXNpYmxlOiBmYWxzZSwgeDogMCwgeTogMCwgd2lkdGg6IDAsIGhlaWdodDogMCB9KTtcclxuICAgIGxheW91dCQgPSBuZXcgU3ViamVjdDxEYXNoYm9hcmRMYXlvdXREYXRhW10+KCk7XHJcbiAgICBzdGFja2VkJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICAgIGdldCBvcHRpb25zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMkLmdldFZhbHVlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHdpZGdldHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2lkZ2V0cyQuZ2V0VmFsdWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3RhY2tlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGFja2VkJC5nZXRWYWx1ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBkaW1lbnNpb25zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRpbWVuc2lvbnMkLmdldFZhbHVlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNvbHVtbldpZHRoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRpbWVuc2lvbnMud2lkdGggLyB0aGlzLm9wdGlvbnMuY29sdW1ucztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmxheW91dCQuc3Vic2NyaWJlKHRoaXMuc2V0TGF5b3V0RGF0YS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnN0YWNrZWQkLnBpcGUoZmlsdGVyKHN0YWNrZWQgPT4gc3RhY2tlZCA9PT0gdHJ1ZSkpLnN1YnNjcmliZSh0aGlzLnVwZGF0ZVdoZW5TdGFja2VkLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMud2lkZ2V0cyQucGlwZShkZWxheSgwKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVuZGVyRGFzaGJvYXJkKCkpO1xyXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyQucGlwZShkZWxheSgwKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVuZGVyRGFzaGJvYXJkKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQWRkIGEgd2lkZ2V0IHRvIHRoZSBkYXNoYm9hcmRcclxuICAgICAqIEBwYXJhbSB3aWRnZXQgVGhlIHdpZGdldCBjb21wb25lbnQgdG8gYWRkIHRvIHRoZSBkYXNoYm9hcmRcclxuICAgICAqL1xyXG4gICAgYWRkV2lkZ2V0KHdpZGdldDogRGFzaGJvYXJkV2lkZ2V0Q29tcG9uZW50KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy53aWRnZXRzJC5uZXh0KFsuLi50aGlzLndpZGdldHMkLmdldFZhbHVlKCksIHdpZGdldF0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlIGEgd2lkZ2V0IGZyb20gdGhlIGRhc2hib2FyZFxyXG4gICAgICogQHBhcmFtIHdpZGdldCBUaGUgd2lkZ2V0IHRvIHJlbW92ZVxyXG4gICAgICovXHJcbiAgICByZW1vdmVXaWRnZXQod2lkZ2V0OiBEYXNoYm9hcmRXaWRnZXRDb21wb25lbnQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLndpZGdldHMkLm5leHQodGhpcy53aWRnZXRzJC5nZXRWYWx1ZSgpLmZpbHRlcihfd2lkZ2V0ID0+IF93aWRnZXQgIT09IHdpZGdldCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5kaWNhdGUgdGhhdCB0aGUgZGFzaGJvYXJkIGVsZW1lbnQgaGFzIGJlZW4gcmVzaXplZFxyXG4gICAgICogQHBhcmFtIHdpZHRoIFRoZSB3aWR0aCBvZiB0aGUgZGFzaGJvYXJkIGVsZW1lbnQgaW4gcHhcclxuICAgICAqIEBwYXJhbSBoZWlnaHQgVGhlIGhlaWdodCBvZiB0aGUgZGFzaGJvYXJkIGVsZW1lbnQgaW4gcHhcclxuICAgICAqL1xyXG4gICAgc2V0RGltZW5zaW9ucyh3aWR0aDogbnVtYmVyID0gdGhpcy5kaW1lbnNpb25zLndpZHRoLCBoZWlnaHQ6IG51bWJlciA9IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5kaW1lbnNpb25zLndpZHRoICE9PSB3aWR0aCB8fCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0ICE9PSBoZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5kaW1lbnNpb25zJC5uZXh0KHsgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQcm9kdWNlIGFuIG9iamVjdCBjb250YWluaW5nIGFsbCB0aGUgcmVxdWlyZWQgbGF5b3V0IGRhdGEuXHJcbiAgICAgKiBUaGlzIGNhbiBiZSB1c2VmdWwgZm9yIGV4cG9ydGluZy9zYXZpbmcgYSBsYXlvdXRcclxuICAgICAqL1xyXG4gICAgZ2V0TGF5b3V0RGF0YSgpOiBEYXNoYm9hcmRMYXlvdXREYXRhW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndpZGdldHMubWFwKHdpZGdldCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGlkOiB3aWRnZXQuaWQsIGNvbDogd2lkZ2V0LmdldENvbHVtbigpLCByb3c6IHdpZGdldC5nZXRSb3coKSwgY29sU3Bhbjogd2lkZ2V0LmdldENvbHVtblNwYW4oKSwgcm93U3Bhbjogd2lkZ2V0LmdldFJvd1NwYW4oKSB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUG9zaXRpb24gd2lkZ2V0cyBwcm9ncmFtYXRpY2FsbHlcclxuICAgICAqL1xyXG4gICAgc2V0TGF5b3V0RGF0YSh3aWRnZXRzOiBEYXNoYm9hcmRMYXlvdXREYXRhW10pOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gaXRlcmF0ZSB0aHJvdWdoIGVhY2ggd2lkZ2V0IGRhdGEgYW5kIGZpbmQgYSBtYXRjaFxyXG4gICAgICAgIHdpZGdldHMuZm9yRWFjaCh3aWRnZXQgPT4ge1xyXG5cclxuICAgICAgICAgICAgLy8gZmluZCB0aGUgbWF0Y2hpbmcgd2lkZ2V0XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMud2lkZ2V0cy5maW5kKF93aWRnZXQgPT4gX3dpZGdldC5pZCA9PT0gd2lkZ2V0LmlkKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5zZXRDb2x1bW4od2lkZ2V0LmNvbCk7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuc2V0Um93KHdpZGdldC5yb3cpO1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LnNldENvbHVtblNwYW4od2lkZ2V0LmNvbFNwYW4pO1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LnNldFJvd1NwYW4od2lkZ2V0LnJvd1NwYW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgdGhlIHBvc2l0aW9ucyBhbmQgc2l6ZXMgb2YgdGhlIHdpZGdldHNcclxuICAgICAqL1xyXG4gICAgcmVuZGVyRGFzaGJvYXJkKCk6IHZvaWQge1xyXG5cclxuICAgICAgICAvLyBnZXQgdGhlIGRpbWVuc2lvbnMgb2YgdGhlIGRhc2hib2FyZFxyXG4gICAgICAgIHRoaXMuX3Jvd0hlaWdodCA9IHRoaXMub3B0aW9ucy5yb3dIZWlnaHQgfHwgdGhpcy5jb2x1bW5XaWR0aDtcclxuXHJcbiAgICAgICAgLy8gZW5zdXJlIHRoZSBjb2x1bW4gd2lkdGggaXMgbm90IGJlbG93IHRoZSBtaW4gd2lkdGhzXHJcbiAgICAgICAgdGhpcy5zdGFja2VkJC5uZXh0KHRoaXMuY29sdW1uV2lkdGggPCB0aGlzLm9wdGlvbnMubWluV2lkdGgpO1xyXG5cclxuICAgICAgICAvLyBlbnN1cmUgdGhlIHJvdyBoZWlnaHQgaXMgbm90IGJlbG93IHRoZSBtaW4gd2lkdGhzXHJcbiAgICAgICAgaWYgKHRoaXMuX3Jvd0hlaWdodCA8IHRoaXMub3B0aW9ucy5taW5XaWR0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9yb3dIZWlnaHQgPSB0aGlzLm9wdGlvbnMubWluV2lkdGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldERhc2hib2FyZExheW91dCgpO1xyXG5cclxuICAgICAgICAvLyBpdGVyYXRlIHRocm91Z2ggZWFjaCB3aWRnZXQgYW5kIHNldCB0aGUgc2l6ZSAtIGV4Y2VwdCB0aGUgb25lIGJlaW5nIHJlc2l6ZWRcclxuICAgICAgICB0aGlzLndpZGdldHMuZmlsdGVyKHdpZGdldCA9PiAhdGhpcy5fYWN0aW9uV2lkZ2V0IHx8IHdpZGdldCAhPT0gdGhpcy5fYWN0aW9uV2lkZ2V0LndpZGdldClcclxuICAgICAgICAgICAgLmZvckVhY2god2lkZ2V0ID0+IHdpZGdldC5yZW5kZXIoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXRlcm1pbmUgd2hlcmUgd2lkZ2V0cyBzaG91bGQgYmUgcG9zaXRpb25lZCBiYXNlZCBvbiB0aGVpciBwb3NpdGlvbnMsIHdpZHRoIGFuZCB0aGUgc2l6ZSBvZiB0aGUgY29udGFpbmVyXHJcbiAgICAgKi9cclxuICAgIHNldERhc2hib2FyZExheW91dCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gZmluZCBhbnkgd2lkZ2V0cyB0aGF0IGRvIG5vdCBjdXJyZW50bHkgaGF2ZSBhIHBvc2l0aW9uIHNldFxyXG4gICAgICAgIHRoaXMud2lkZ2V0cy5maWx0ZXIod2lkZ2V0ID0+IHdpZGdldC5nZXRDb2x1bW4oKSA9PT0gdW5kZWZpbmVkIHx8IHdpZGdldC5nZXRSb3coKSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAuZm9yRWFjaCh3aWRnZXQgPT4gdGhpcy5zZXRXaWRnZXRQb3NpdGlvbih3aWRnZXQpKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXREYXNoYm9hcmRIZWlnaHQoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVXaGVuU3RhY2tlZCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gaXRlcmF0ZSB0aHJvdWdoIGVhY2ggd2lkZ2V0IHNldCBpdCdzIHN0YWNrZWQgc3RhdGUgYW5kXHJcbiAgICAgICAgdGhpcy5nZXRXaWRnZXRzQnlPcmRlcigpLmZvckVhY2goKHdpZGdldCwgaWR4KSA9PiB7XHJcbiAgICAgICAgICAgIHdpZGdldC5zZXRDb2x1bW4oMCk7XHJcbiAgICAgICAgICAgIHdpZGdldC5zZXRSb3coaWR4KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V2lkZ2V0c0J5T3JkZXIoKTogRGFzaGJvYXJkV2lkZ2V0Q29tcG9uZW50W10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndpZGdldHMuc29ydCgodzEsIHcyKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB3MVBvc2l0aW9uID0gdzEuZ2V0Q29sdW1uKCkgKiB3MS5nZXRSb3coKTtcclxuICAgICAgICAgICAgY29uc3QgdzJQb3NpdGlvbiA9IHcyLmdldENvbHVtbigpICogdzIuZ2V0Um93KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodzFQb3NpdGlvbiA8IHcyUG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHcxUG9zaXRpb24gPiB3MlBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGaW5kIGEgcG9zaXRpb24gdGhhdCBhIHdpZGdldCBjYW4gZml0IGluIHRoZSBkYXNoYm9hcmRcclxuICAgICAqIEBwYXJhbSB3aWRnZXQgVGhlIHdpZGdldCB0byB0cnkgYW5kIHBvc2l0aW9uXHJcbiAgICAgKi9cclxuICAgIHNldFdpZGdldFBvc2l0aW9uKHdpZGdldDogRGFzaGJvYXJkV2lkZ2V0Q29tcG9uZW50KTogdm9pZCB7XHJcblxyXG4gICAgICAgIC8vIGZpbmQgYSBwb3NpdGlvbiBmb3IgdGhlIHdpZGdldFxyXG4gICAgICAgIGxldCBwb3NpdGlvbiA9IDA7XHJcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gcmVwZWF0IHVudGlsIGEgc3BhY2UgaXMgZm91bmRcclxuICAgICAgICB3aGlsZSAoIXN1Y2Nlc3MpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIGdldCBhIHBvc2l0aW9uIHRvIHRyeVxyXG4gICAgICAgICAgICBjb25zdCBjb2x1bW4gPSBwb3NpdGlvbiAlIHRoaXMub3B0aW9ucy5jb2x1bW5zO1xyXG4gICAgICAgICAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKHBvc2l0aW9uIC8gdGhpcy5vcHRpb25zLmNvbHVtbnMpO1xyXG5cclxuICAgICAgICAgICAgLy8gY2hlY2sgdGhlIGN1cnJlbnQgcG9zaXRpb25cclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0UG9zaXRpb25BdmFpbGFibGUoY29sdW1uLCByb3csIHdpZGdldC5nZXRDb2x1bW5TcGFuKCksIHdpZGdldC5nZXRSb3dTcGFuKCkpKSB7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHdpZGdldC5zZXRDb2x1bW4oY29sdW1uKTtcclxuICAgICAgICAgICAgICAgIHdpZGdldC5zZXRSb3cocm93KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGNvbHVtbiA9PT0gMCAmJiB3aWRnZXQuY29sU3BhbiA+IHRoaXMub3B0aW9ucy5jb2x1bW5zKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Rhc2hib2FyZCB3aWRnZXRzIGhhdmUgYSBjb2xTcGFuIGdyZWF0ZXIgdGhhbiB0aGUgbWF4IG51bWJlciBvZiBkYXNoYm9hcmQgY29sdW1ucyEnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcG9zaXRpb24rKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiBhIHBvc2l0aW9uIGluIHRoZSBkYXNoYm9hcmQgaXMgdmFjYW50IG9yIG5vdFxyXG4gICAgICovXHJcbiAgICBnZXRQb3NpdGlvbkF2YWlsYWJsZShjb2x1bW46IG51bWJlciwgcm93OiBudW1iZXIsIGNvbHVtblNwYW46IG51bWJlciwgcm93U3BhbjogbnVtYmVyLCBpZ25vcmVXaWRnZXQ/OiBEYXNoYm9hcmRXaWRnZXRDb21wb25lbnQpOiBib29sZWFuIHtcclxuXHJcbiAgICAgICAgLy8gZ2V0IGEgbGlzdCBvZiBncmlkIHNwYWNlcyB0aGF0IGFyZSBwb3B1bGF0ZWRcclxuICAgICAgICBjb25zdCBzcGFjZXMgPSB0aGlzLmdldE9jY3VwaWVkU3BhY2VzKCk7XHJcblxyXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZSBibG9jayB3b3VsZCBzdGlsbCBiZSBpbiBib3VuZHNcclxuICAgICAgICBpZiAoY29sdW1uICsgY29sdW1uU3BhbiA+IHRoaXMub3B0aW9ucy5jb2x1bW5zKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNoZWNrIGVhY2ggcmVxdWlyZWQgcG9zaXRpb25cclxuICAgICAgICBmb3IgKGxldCB4ID0gY29sdW1uOyB4IDwgY29sdW1uICsgY29sdW1uU3BhbjsgeCsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHkgPSByb3c7IHkgPCByb3cgKyByb3dTcGFuOyB5KyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChzcGFjZXMuZmluZChibG9jayA9PiBibG9jay5jb2x1bW4gPT09IHggJiYgYmxvY2sucm93ID09PSB5ICYmIGJsb2NrLndpZGdldCAhPT0gaWdub3JlV2lkZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0T2NjdXBpZWRTcGFjZXMoKTogRGFzaGJvYXJkU3BhY2VbXSB7XHJcblxyXG4gICAgICAgIC8vIGZpbmQgYWxsIHNwYWNlcyB0aGF0IGFyZSBjdXJyZW50bHkgb2NjdXBpZWRcclxuICAgICAgICByZXR1cm4gdGhpcy53aWRnZXRzLmZpbHRlcih3aWRnZXQgPT4gd2lkZ2V0LmdldENvbHVtbigpICE9PSB1bmRlZmluZWQgJiYgd2lkZ2V0LmdldFJvdygpICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIC5yZWR1Y2UoKHZhbHVlLCB3aWRnZXQpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvckVhY2hCbG9jayh3aWRnZXQsIChjb2x1bW4sIHJvdykgPT4gdmFsdWUucHVzaCh7IHdpZGdldDogd2lkZ2V0LCBjb2x1bW46IGNvbHVtbiwgcm93OiByb3cgfSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgICAgfSwgW10pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQmVnaW4gcmVzaXppbmcgYSB3aWRnZXRcclxuICAgICAqIEBwYXJhbSBhY3Rpb24gVGhlIHRoZSB3aWRnZXQgdG8gcmVzaXplXHJcbiAgICAgKi9cclxuICAgIG9uUmVzaXplU3RhcnQoYWN0aW9uOiBEYXNoYm9hcmRBY3Rpb24pOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gc3RvcmUgdGhlIG1vdXNlIGV2ZW50XHJcbiAgICAgICAgdGhpcy5fbW91c2VFdmVudCA9IGFjdGlvbi5ldmVudDtcclxuICAgICAgICB0aGlzLl9hY3Rpb25XaWRnZXQgPSBhY3Rpb247XHJcblxyXG4gICAgICAgIC8vIGJyaW5nIHRoZSB3aWRnZXQgdG8gdGhlIGZvbnRcclxuICAgICAgICB0aGlzLmJyaW5nVG9Gcm9udChhY3Rpb24ud2lkZ2V0KTtcclxuICAgIH1cclxuXHJcbiAgICBvblJlc2l6ZURyYWcoYWN0aW9uOiBEYXNoYm9hcmRBY3Rpb24pOiB2b2lkIHtcclxuXHJcbiAgICAgICAgY29uc3QgbW91c2VQb3NYID0gdGhpcy5fbW91c2VFdmVudC5wYWdlWCAtIHBhZ2VYT2Zmc2V0O1xyXG4gICAgICAgIGNvbnN0IG1vdXNlUG9zWSA9IHRoaXMuX21vdXNlRXZlbnQucGFnZVkgLSBwYWdlWU9mZnNldDtcclxuXHJcbiAgICAgICAgLy8gaWYgdGhlcmUgd2FzIG5vIG1vdmVtZW50IHRoZW4gZG8gbm90aGluZ1xyXG4gICAgICAgIGlmIChhY3Rpb24uZXZlbnQueCA9PT0gbW91c2VQb3NYICYmIGFjdGlvbi5ldmVudC55ID09PSBtb3VzZVBvc1kpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIHRoZSBzdG9yZWQgbW91c2UgZXZlbnRcclxuICAgICAgICB0aGlzLl9tb3VzZUV2ZW50ID0gYWN0aW9uLmV2ZW50O1xyXG5cclxuICAgICAgICAvLyBnZXQgaGFuZGxlIGZvciBkaXJlY3Rpb25cclxuICAgICAgICBjb25zdCB7IGhhbmRsZSB9ID0gYWN0aW9uO1xyXG5cclxuICAgICAgICAvLyBnZXQgdGhlIGJvdW5kcyBvZiB0aGUgaGFuZGxlXHJcbiAgICAgICAgY29uc3QgYm91bmRzID0gaGFuZGxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgICAgICAvLyBnZXQgdGhlIGNlbnRlciBvZiB0aGUgaGFuZGxlXHJcbiAgICAgICAgY29uc3QgY2VudGVyWCA9IGJvdW5kcy5sZWZ0ICsgKGJvdW5kcy53aWR0aCAvIDIpO1xyXG4gICAgICAgIGNvbnN0IGNlbnRlclkgPSBib3VuZHMudG9wICsgKGJvdW5kcy5oZWlnaHQgLyAyKTtcclxuXHJcbiAgICAgICAgLy8gZ2V0IHRoZSBjdXJyZW50IG1vdXNlIHBvc2l0aW9uXHJcbiAgICAgICAgY29uc3QgbW91c2VYID0gbW91c2VQb3NYIC0gY2VudGVyWDtcclxuICAgICAgICBjb25zdCBtb3VzZVkgPSBtb3VzZVBvc1kgLSBjZW50ZXJZO1xyXG5cclxuICAgICAgICAvLyBzdG9yZSB0aGUgbmV3IHByb3Bvc2VkIGRpbWVuc2lvbnMgZm9yIHRoZSB3aWRnZXRcclxuICAgICAgICBjb25zdCBkaW1lbnNpb25zOiBEYXNoYm9hcmRXaWRnZXREaW1lbnNpb25zID0ge1xyXG4gICAgICAgICAgICB4OiBhY3Rpb24ud2lkZ2V0LngsXHJcbiAgICAgICAgICAgIHk6IGFjdGlvbi53aWRnZXQueSxcclxuICAgICAgICAgICAgd2lkdGg6IGFjdGlvbi53aWRnZXQud2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogYWN0aW9uLndpZGdldC5oZWlnaHRcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyB1cGRhdGUgd2lkZ2V0IGJhc2VkIG9uIHRoZSBoYW5kbGUgYmVpbmcgZHJhZ2dlZFxyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLmRpcmVjdGlvbikge1xyXG5cclxuICAgICAgICAgICAgY2FzZSBBY3Rpb25EaXJlY3Rpb24uUmlnaHQ6XHJcbiAgICAgICAgICAgICAgICBkaW1lbnNpb25zLndpZHRoICs9IG1vdXNlWDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBBY3Rpb25EaXJlY3Rpb24uTGVmdDpcclxuICAgICAgICAgICAgICAgIGRpbWVuc2lvbnMueCArPSBtb3VzZVg7XHJcbiAgICAgICAgICAgICAgICBkaW1lbnNpb25zLndpZHRoIC09IG1vdXNlWDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGltZW5zaW9ucy53aWR0aCA8IHRoaXMub3B0aW9ucy5taW5XaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpZmZlcmVuY2UgPSB0aGlzLm9wdGlvbnMubWluV2lkdGggLSBkaW1lbnNpb25zLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpbWVuc2lvbnMueCAtPSBkaWZmZXJlbmNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpbWVuc2lvbnMud2lkdGggKz0gZGlmZmVyZW5jZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQWN0aW9uRGlyZWN0aW9uLkJvdHRvbTpcclxuICAgICAgICAgICAgICAgIGRpbWVuc2lvbnMuaGVpZ2h0ICs9IG1vdXNlWTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBBY3Rpb25EaXJlY3Rpb24uVG9wOlxyXG4gICAgICAgICAgICAgICAgZGltZW5zaW9ucy55ICs9IG1vdXNlWTtcclxuICAgICAgICAgICAgICAgIGRpbWVuc2lvbnMuaGVpZ2h0IC09IG1vdXNlWTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGltZW5zaW9ucy5oZWlnaHQgPCB0aGlzLm9wdGlvbnMubWluSGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlmZmVyZW5jZSA9IHRoaXMub3B0aW9ucy5taW5IZWlnaHQgLSBkaW1lbnNpb25zLmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25zLnkgLT0gZGlmZmVyZW5jZTtcclxuICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25zLmhlaWdodCArPSBkaWZmZXJlbmNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAvLyBTdXBwb3J0IHJlc2l6aW5nIG9uIG11bHRpcGxlIGF4aXMgc2ltdWx0YW5lb3VzbHlcclxuICAgICAgICAgICAgY2FzZSBBY3Rpb25EaXJlY3Rpb24uVG9wTGVmdDpcclxuXHJcbiAgICAgICAgICAgICAgICBkaW1lbnNpb25zLnggKz0gbW91c2VYO1xyXG4gICAgICAgICAgICAgICAgZGltZW5zaW9ucy53aWR0aCAtPSBtb3VzZVg7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRpbWVuc2lvbnMud2lkdGggPCB0aGlzLm9wdGlvbnMubWluV2lkdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaWZmZXJlbmNlID0gdGhpcy5vcHRpb25zLm1pbldpZHRoIC0gZGltZW5zaW9ucy53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25zLnggLT0gZGlmZmVyZW5jZTtcclxuICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25zLndpZHRoICs9IGRpZmZlcmVuY2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZGltZW5zaW9ucy55ICs9IG1vdXNlWTtcclxuICAgICAgICAgICAgICAgIGRpbWVuc2lvbnMuaGVpZ2h0IC09IG1vdXNlWTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGltZW5zaW9ucy5oZWlnaHQgPCB0aGlzLm9wdGlvbnMubWluSGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlmZmVyZW5jZSA9IHRoaXMub3B0aW9ucy5taW5IZWlnaHQgLSBkaW1lbnNpb25zLmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25zLnkgLT0gZGlmZmVyZW5jZTtcclxuICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25zLmhlaWdodCArPSBkaWZmZXJlbmNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFjdGlvbkRpcmVjdGlvbi5Ub3BSaWdodDpcclxuICAgICAgICAgICAgICAgIGRpbWVuc2lvbnMud2lkdGggKz0gbW91c2VYO1xyXG4gICAgICAgICAgICAgICAgZGltZW5zaW9ucy55ICs9IG1vdXNlWTtcclxuICAgICAgICAgICAgICAgIGRpbWVuc2lvbnMuaGVpZ2h0IC09IG1vdXNlWTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGltZW5zaW9ucy5oZWlnaHQgPCB0aGlzLm9wdGlvbnMubWluSGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlmZmVyZW5jZSA9IHRoaXMub3B0aW9ucy5taW5IZWlnaHQgLSBkaW1lbnNpb25zLmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25zLnkgLT0gZGlmZmVyZW5jZTtcclxuICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25zLmhlaWdodCArPSBkaWZmZXJlbmNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFjdGlvbkRpcmVjdGlvbi5Cb3R0b21MZWZ0OlxyXG4gICAgICAgICAgICAgICAgZGltZW5zaW9ucy5oZWlnaHQgKz0gbW91c2VZO1xyXG4gICAgICAgICAgICAgICAgZGltZW5zaW9ucy54ICs9IG1vdXNlWDtcclxuICAgICAgICAgICAgICAgIGRpbWVuc2lvbnMud2lkdGggLT0gbW91c2VYO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkaW1lbnNpb25zLndpZHRoIDwgdGhpcy5vcHRpb25zLm1pbldpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlmZmVyZW5jZSA9IHRoaXMub3B0aW9ucy5taW5XaWR0aCAtIGRpbWVuc2lvbnMud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9ucy54IC09IGRpZmZlcmVuY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9ucy53aWR0aCArPSBkaWZmZXJlbmNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFjdGlvbkRpcmVjdGlvbi5Cb3R0b21SaWdodDpcclxuICAgICAgICAgICAgICAgIGRpbWVuc2lvbnMuaGVpZ2h0ICs9IG1vdXNlWTtcclxuICAgICAgICAgICAgICAgIGRpbWVuc2lvbnMud2lkdGggKz0gbW91c2VYO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjdXJyZW50V2lkdGggPSBhY3Rpb24ud2lkZ2V0LnggKyBhY3Rpb24ud2lkZ2V0LndpZHRoO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRIZWlnaHQgPSBhY3Rpb24ud2lkZ2V0LnkgKyBhY3Rpb24ud2lkZ2V0LmhlaWdodDtcclxuXHJcbiAgICAgICAgLy8gZW5zdXJlIHZhbHVlcyBhcmUgd2l0aGluIHRoZSBkYXNoYm9hcmQgYm91bmRzXHJcbiAgICAgICAgaWYgKGRpbWVuc2lvbnMueCA8IDApIHtcclxuICAgICAgICAgICAgZGltZW5zaW9ucy54ID0gMDtcclxuICAgICAgICAgICAgZGltZW5zaW9ucy53aWR0aCA9IGN1cnJlbnRXaWR0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkaW1lbnNpb25zLnkgPCAwKSB7XHJcbiAgICAgICAgICAgIGRpbWVuc2lvbnMueSA9IDA7XHJcbiAgICAgICAgICAgIGRpbWVuc2lvbnMuaGVpZ2h0ID0gY3VycmVudEhlaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgoZGltZW5zaW9ucy54ICsgZGltZW5zaW9ucy53aWR0aCkgPiB0aGlzLmRpbWVuc2lvbnMud2lkdGgpIHtcclxuICAgICAgICAgICAgZGltZW5zaW9ucy53aWR0aCA9IHRoaXMuZGltZW5zaW9ucy53aWR0aCAtIGRpbWVuc2lvbnMueDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlmIHRoZSBwcm9wb3NlZCB3aWR0aCBpcyBzbWFsbGVyIHRoYW4gYWxsb3dlZCB0aGVuIHJlc2V0IHdpZHRoIHRvIG1pbmltdW0gYW5kIGlnbm9yZSB4IGNoYW5nZXNcclxuICAgICAgICBpZiAoZGltZW5zaW9ucy53aWR0aCA8IHRoaXMub3B0aW9ucy5taW5XaWR0aCkge1xyXG4gICAgICAgICAgICBkaW1lbnNpb25zLnggPSBhY3Rpb24ud2lkZ2V0Lng7XHJcbiAgICAgICAgICAgIGRpbWVuc2lvbnMud2lkdGggPSB0aGlzLm9wdGlvbnMubWluV2lkdGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiB0aGUgcHJvcG9zZWQgaGVpZ2h0IGlzIHNtYWxsZXIgdGhhbiBhbGxvd2VkIHRoZW4gcmVzZXQgaGVpZ2h0IHRvIG1pbmltdW0gYW5kIGlnbm9yZSB5IGNoYW5nZXNcclxuICAgICAgICBpZiAoZGltZW5zaW9ucy5oZWlnaHQgPCB0aGlzLm9wdGlvbnMubWluSGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIGRpbWVuc2lvbnMueSA9IGFjdGlvbi53aWRnZXQueTtcclxuICAgICAgICAgICAgZGltZW5zaW9ucy5oZWlnaHQgPSB0aGlzLm9wdGlvbnMubWluSGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIHRoZSB3aWRnZXQgYWN0dWFsIHZhbHVlc1xyXG4gICAgICAgIGFjdGlvbi53aWRnZXQuc2V0Qm91bmRzKGRpbWVuc2lvbnMueCwgZGltZW5zaW9ucy55LCBkaW1lbnNpb25zLndpZHRoLCBkaW1lbnNpb25zLmhlaWdodCk7XHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZSBwbGFjZWhvbGRlciBwb3NpdGlvbiBhbmQgdmFsdWVcclxuICAgICAgICB0aGlzLnNldFBsYWNlaG9sZGVyQm91bmRzKHRydWUsIGRpbWVuc2lvbnMueCwgZGltZW5zaW9ucy55LCBkaW1lbnNpb25zLndpZHRoLCBkaW1lbnNpb25zLmhlaWdodCk7XHJcblxyXG4gICAgICAgIC8vIHNob3cgdGhlIHdpZGdldCBwb3NpdGlvbnMgaWYgdGhlIGN1cnJlbnQgcG9zaXRpb25zIGFuZCBzaXplcyB3ZXJlIHRvIHBlcnNpc3RcclxuICAgICAgICB0aGlzLnVwZGF0ZVdpZGdldFBvc2l0aW9ucyhhY3Rpb24ud2lkZ2V0KTtcclxuICAgIH1cclxuXHJcbiAgICBvblJlc2l6ZUVuZCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgY29uc3QgcGxhY2Vob2xkZXIgPSB0aGlzLnBsYWNlaG9sZGVyJC5nZXRWYWx1ZSgpO1xyXG5cclxuICAgICAgICAvLyBjb21taXQgcmVzaXplIGNoYW5nZXNcclxuICAgICAgICB0aGlzLmNvbW1pdFdpZGdldENoYW5nZXMoKTtcclxuXHJcbiAgICAgICAgLy8gaGlkZSBwbGFjZWhvbGRlclxyXG4gICAgICAgIHBsYWNlaG9sZGVyLnZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIHRoZSBwbGFjZWhvbGRlclxyXG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXIkLm5leHQocGxhY2Vob2xkZXIpO1xyXG5cclxuICAgICAgICB0aGlzLl9hY3Rpb25XaWRnZXQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX21vdXNlRXZlbnQgPSBudWxsO1xyXG5cclxuICAgICAgICAvLyBlbnN1cmUgYW55IHZhY2FudCB1cHBlciBzcGFjZXMgYXJlIGZpbGxlZCB3aGVyZSByZXF1aXJlZFxyXG4gICAgICAgIHRoaXMuc2hpZnRXaWRnZXRzVXAoKTtcclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIGRhc2hib2FyZCBoZWlnaHRcclxuICAgICAgICB0aGlzLnNldERhc2hib2FyZEhlaWdodCgpO1xyXG5cclxuICAgICAgICAvLyBlbWl0IGluZm9ybWF0aW9uIGFib3V0IHRoZSBsYXlvdXRcclxuICAgICAgICB0aGlzLmxheW91dCQubmV4dCh0aGlzLmdldExheW91dERhdGEoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EcmFnU3RhcnQoYWN0aW9uOiBEYXNoYm9hcmRBY3Rpb24pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uUmVzaXplU3RhcnQoYWN0aW9uKTtcclxuXHJcbiAgICAgICAgLy8gc3RvcmUgdGhlIHN0YXJ0aW5nIHBsYWNlaG9sZGVyIHBvc2l0aW9uXHJcbiAgICAgICAgdGhpcy5zZXRXaWRnZXRPcmlnaW4oKTtcclxuXHJcbiAgICAgICAgdGhpcy5jYWNoZVdpZGdldHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRyYWdFbmQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vblJlc2l6ZUVuZCgpO1xyXG5cclxuICAgICAgICB0aGlzLl93aWRnZXRPcmlnaW4gPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRyYWcoYWN0aW9uOiBEYXNoYm9hcmRBY3Rpb24pOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gaWYgdGhlcmUgd2FzIG5vIG1vdmVtZW50IHRoZW4gZG8gbm90aGluZ1xyXG4gICAgICAgIGlmIChhY3Rpb24uZXZlbnQucGFnZVggPT09IHRoaXMuX21vdXNlRXZlbnQucGFnZVggJiYgYWN0aW9uLmV2ZW50LnBhZ2VZID09PSB0aGlzLl9tb3VzZUV2ZW50LnBhZ2VZKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGdldCB0aGUgY3VycmVudCBtb3VzZSBwb3NpdGlvblxyXG4gICAgICAgIGNvbnN0IG1vdXNlWCA9IGFjdGlvbi5ldmVudC5wYWdlWCAtIHRoaXMuX21vdXNlRXZlbnQucGFnZVg7XHJcbiAgICAgICAgY29uc3QgbW91c2VZID0gYWN0aW9uLmV2ZW50LnBhZ2VZIC0gdGhpcy5fbW91c2VFdmVudC5wYWdlWTtcclxuXHJcbiAgICAgICAgLy8gc3RvcmUgdGhlIGxhdGVzdCBldmVudFxyXG4gICAgICAgIHRoaXMuX21vdXNlRXZlbnQgPSBhY3Rpb24uZXZlbnQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGRpbWVuc2lvbnM6IERhc2hib2FyZFdpZGdldERpbWVuc2lvbnMgPSB7XHJcbiAgICAgICAgICAgIHg6IGFjdGlvbi53aWRnZXQueCArIG1vdXNlWCxcclxuICAgICAgICAgICAgeTogYWN0aW9uLndpZGdldC55ICsgbW91c2VZLFxyXG4gICAgICAgICAgICB3aWR0aDogYWN0aW9uLndpZGdldC53aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBhY3Rpb24ud2lkZ2V0LmhlaWdodFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMucmVzdG9yZVdpZGdldHModHJ1ZSk7XHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZSB3aWRnZXQgcG9zaXRpb25cclxuICAgICAgICBhY3Rpb24ud2lkZ2V0LnNldEJvdW5kcyhkaW1lbnNpb25zLngsIGRpbWVuc2lvbnMueSwgZGltZW5zaW9ucy53aWR0aCwgZGltZW5zaW9ucy5oZWlnaHQpO1xyXG5cclxuICAgICAgICAvLyB1cGRhdGUgcGxhY2Vob2xkZXIgcG9zaXRpb24gYW5kIHZhbHVlXHJcbiAgICAgICAgdGhpcy5zZXRQbGFjZWhvbGRlckJvdW5kcyh0cnVlLCBkaW1lbnNpb25zLngsIGRpbWVuc2lvbnMueSwgZGltZW5zaW9ucy53aWR0aCwgZGltZW5zaW9ucy5oZWlnaHQpO1xyXG5cclxuICAgICAgICAvLyBzaG93IHRoZSB3aWRnZXQgcG9zaXRpb25zIGlmIHRoZSBjdXJyZW50IHBvc2l0aW9ucyBhbmQgc2l6ZXMgd2VyZSB0byBwZXJzaXN0XHJcbiAgICAgICAgdGhpcy5zaGlmdFdpZGdldHMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXREYXNoYm9hcmRIZWlnaHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSb3dIZWlnaHQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcm93SGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIGNhY2hlV2lkZ2V0cygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jYWNoZSA9IHRoaXMud2lkZ2V0cy5tYXAod2lkZ2V0ID0+ICh7IGlkOiB3aWRnZXQuaWQsIGNvbHVtbjogd2lkZ2V0LmdldENvbHVtbigpLCByb3c6IHdpZGdldC5nZXRSb3coKSB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdG9yZVdpZGdldHMoaWdub3JlQWN0aW9uV2lkZ2V0OiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jYWNoZS5maWx0ZXIod2lkZ2V0ID0+ICFpZ25vcmVBY3Rpb25XaWRnZXQgfHwgd2lkZ2V0LmlkICE9PSB0aGlzLl9hY3Rpb25XaWRnZXQud2lkZ2V0LmlkKS5mb3JFYWNoKHdpZGdldCA9PiB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtYXRjaCA9IHRoaXMud2lkZ2V0cy5maW5kKHdndCA9PiB3Z3QuaWQgPT09IHdpZGdldC5pZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAobWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgIG1hdGNoLnNldENvbHVtbih3aWRnZXQuY29sdW1uKTtcclxuICAgICAgICAgICAgICAgIG1hdGNoLnNldFJvdyh3aWRnZXQucm93KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2hlbiBkcmFnZ2luZyBhbnkgd2lkZ2V0cyB0aGF0IG5lZWQgdG8gYmUgbW92ZWQgc2hvdWxkIGJlIG1vdmVkIHRvIGFuIGFwcHJvcHJpYXRlIHBvc2l0aW9uXHJcbiAgICAgKi9cclxuICAgIHNoaWZ0V2lkZ2V0cygpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgbGV0IHdpZGdldHNUb01vdmU6IERhc2hib2FyZFdpZGdldENvbXBvbmVudFtdID0gW107XHJcblxyXG4gICAgICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gdGhpcy5wbGFjZWhvbGRlciQuZ2V0VmFsdWUoKTtcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlcmUgYXJlIGFueSB3aWRnZXRzIHVuZGVyIHRoZSBwbGFjZWhvbGRlclxyXG4gICAgICAgIGZvciAobGV0IHJvdyA9IHBsYWNlaG9sZGVyLnJvdzsgcm93IDwgcGxhY2Vob2xkZXIucm93ICsgcGxhY2Vob2xkZXIucm93U3Bhbjsgcm93KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29sdW1uID0gcGxhY2Vob2xkZXIuY29sdW1uOyBjb2x1bW4gPCBwbGFjZWhvbGRlci5jb2x1bW4gKyBwbGFjZWhvbGRlci5jb2x1bW5TcGFuOyBjb2x1bW4rKykge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHN0b3JlIHJlZmVyZW5jZSB0byBhbnkgd2lkZ2V0cyB0aGF0IG5lZWQgbW92ZWRcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0T2NjdXBpZWRTcGFjZXMoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoc3BhY2UgPT4gc3BhY2UuY29sdW1uID09PSBjb2x1bW4gJiYgc3BhY2Uucm93ID09PSByb3cgJiYgc3BhY2Uud2lkZ2V0ICE9PSB0aGlzLl9hY3Rpb25XaWRnZXQud2lkZ2V0KVxyXG4gICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKHNwYWNlID0+IHdpZGdldHNUb01vdmUucHVzaChzcGFjZS53aWRnZXQpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcmVtb3ZlIGFueSBkdXBsaWNhdGVzXHJcbiAgICAgICAgd2lkZ2V0c1RvTW92ZSA9IHdpZGdldHNUb01vdmUuZmlsdGVyKCh3aWRnZXQsIGlkeCwgYXJyYXkpID0+IGFycmF5LmluZGV4T2Yod2lkZ2V0KSA9PT0gaWR4KTtcclxuXHJcbiAgICAgICAgLy8gaWYgbm8gd2lkZ2V0cyBuZWVkIG1vdmVkIHRoZW4gd2UgY2FuIHN0b3AgaGVyZVxyXG4gICAgICAgIGlmICh3aWRnZXRzVG9Nb3ZlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjcmVhdGUgYSBkdXBsaWNhdGUgd2UgY2FuIHVzZSB0byBrZWVwIHRyYWNrIG9mIHdoaWNoIGhhdmUgYmVlbiBtb3ZlZFxyXG4gICAgICAgIGNvbnN0IHVubW92ZWRXaWRnZXRzID0gd2lkZ2V0c1RvTW92ZS5zbGljZSgpO1xyXG5cclxuICAgICAgICAvLyBhdHRlbXB0IHRvIG1vdmUgYW55IHdpZGdldHMgdG8gdGhlIHByZXZpb3VzIHdpZGdldCBwb3NpdGlvblxyXG4gICAgICAgIHdpZGdldHNUb01vdmUuZm9yRWFjaCh3aWRnZXQgPT4ge1xyXG5cclxuICAgICAgICAgICAgLy8gZ2V0IGEgZ3JpZCBvZmYgYWxsIG9jY3VwaWVkIHNwYWNlcyAtIHRha2luZyBpbnRvIGFjY291bnQgdGhlIHBsYWNlaG9sZGVyIGFuZCBpZ25vcmluZyB3aWRnZXRzIHRoYXQgbmVlZCBtb3ZlZFxyXG4gICAgICAgICAgICBjb25zdCBncmlkID0gdGhpcy5nZXRPY2N1cGllZFNwYWNlcygpLmZpbHRlcihzcGFjZSA9PiAhdW5tb3ZlZFdpZGdldHMuZmluZCh3Z3QgPT4gd2d0ID09PSBzcGFjZS53aWRnZXQpKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGl0ZXJhdGUgZWFjaCBmcmVlIGJsb2NrXHJcbiAgICAgICAgICAgIGZvciAobGV0IHJvdyA9IHRoaXMuX3dpZGdldE9yaWdpbi5yb3c7IHJvdyA8IHRoaXMuX3dpZGdldE9yaWdpbi5yb3cgKyB0aGlzLl93aWRnZXRPcmlnaW4ucm93U3Bhbjsgcm93KyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGNvbHVtbiA9IHRoaXMuX3dpZGdldE9yaWdpbi5jb2x1bW47IGNvbHVtbiA8IHRoaXMuX3dpZGdldE9yaWdpbi5jb2x1bW4gKyB0aGlzLl93aWRnZXRPcmlnaW4uY29sdW1uU3BhbjsgY29sdW1uKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZGV0ZXJtaW5lIGlmIHRoZSBibG9jayBjYW4gZml0IGluIHRoaXMgc3BhY2VcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVxdWlyZWRTcGFjZXMgPSB0aGlzLmdldFJlcXVpcmVkU3BhY2VzRnJvbVBvaW50KHdpZGdldCwgY29sdW1uLCByb3cpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiB3aWRnZXQgd291bGQgZml0IGluIHNwYWNlXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGF2YWlsYWJsZSA9IHJlcXVpcmVkU3BhY2VzLmV2ZXJ5KHNwYWNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFncmlkLmZpbmQoZ3JpZFNwYWNlID0+IGdyaWRTcGFjZS5jb2x1bW4gPT09IHNwYWNlLmNvbHVtbiAmJiBncmlkU3BhY2Uucm93ID09PSBzcGFjZS5yb3cpICYmIHNwYWNlLmNvbHVtbiA8IHRoaXMuZ2V0Q29sdW1uQ291bnQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF2YWlsYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQuc2V0Q29sdW1uKGNvbHVtbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5zZXRSb3cocm93KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5tb3ZlZFdpZGdldHMuc3BsaWNlKHVubW92ZWRXaWRnZXRzLmZpbmRJbmRleCh3Z3QgPT4gd2d0ID09PSB3aWRnZXQpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gaWYgd2UgZ2V0IHRvIGhlcmUgdGhlbiB3ZSBjYW4ndCBzaW1wbHkgc3dhcCB0aGUgcG9zaXRpb25zIC0gbmV4dCB0cnkgbW92aW5nIHJpZ2h0XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNhbldpZGdldE1vdmVSaWdodCh3aWRnZXQsIHRydWUpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gYWZ0ZXIgdGhlIHNoaWZ0IGNoZWNrIGlmIHBsYWNlaG9sZGVyIHBvc2l0aW9uIGlzIHN0aWxsIHZhbGlkXHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlUGxhY2Vob2xkZXJQb3NpdGlvbihBY3Rpb25EaXJlY3Rpb24uUmlnaHQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBuZXh0IHRyeSBtb3ZpbmcgbGVmdFxyXG4gICAgICAgICAgICBpZiAodGhpcy5jYW5XaWRnZXRNb3ZlTGVmdCh3aWRnZXQsIHRydWUpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gYWZ0ZXIgdGhlIHNoaWZ0IGNoZWNrIGlmIHBsYWNlaG9sZGVyIHBvc2l0aW9uIGlzIHN0aWxsIHZhbGlkXHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlUGxhY2Vob2xkZXJQb3NpdGlvbihBY3Rpb25EaXJlY3Rpb24uTGVmdCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGRldGVybWluZSB0aGUgZGlzdGFuY2UgdGhhdCB0aGUgd2lkZ2V0IG5lZWRzIHRvIGJlIG1vdmVkIGRvd25cclxuICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gKHRoaXMuX2FjdGlvbldpZGdldC53aWRnZXQuZ2V0Um93KCkgLSB3aWRnZXQuZ2V0Um93KCkpICsgdGhpcy5fYWN0aW9uV2lkZ2V0LndpZGdldC5nZXRSb3dTcGFuKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBhcyBhIGxhc3QgcmVzb3J0IG1vdmUgdGhlIHdpZGdldCBkb3dud2FyZHNcclxuICAgICAgICAgICAgdGhpcy5tb3ZlV2lkZ2V0RG93bih3aWRnZXQsIGRpc3RhbmNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFmdGVyIHNoaWZ0cyBoYXZlIHRha2VuIHBsYWNlIHdlIHNob3VsZCB2ZXJpZnkgdGhlIHBsYWNlIGhvbGRlciBwb3NpdGlvbiBpcyBzdGlsbCB2YWxpZFxyXG4gICAgICogQHBhcmFtIHNoaWZ0RGlyZWN0aW9uIC0gdGhlIHBvc2l0aW9uIHdpZGdldHMgd2VyZSBzaGlmdGVkXHJcbiAgICAgKi9cclxuICAgIHZhbGlkYXRlUGxhY2Vob2xkZXJQb3NpdGlvbihzaGlmdERpcmVjdGlvbjogQWN0aW9uRGlyZWN0aW9uKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gdGhpcy5wbGFjZWhvbGRlciQuZ2V0VmFsdWUoKTtcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlIHBsYWNlaG9sZGVyIGlzIG92ZXIgYSB3aWRnZXRcclxuICAgICAgICBpZiAodGhpcy5nZXRXaWRnZXRzQXRQb3NpdGlvbihwbGFjZWhvbGRlci5jb2x1bW4sIHBsYWNlaG9sZGVyLnJvdywgdHJ1ZSkubGVuZ3RoID4gMCkge1xyXG5cclxuICAgICAgICAgICAgLy8gbW92ZSB0aGUgcGxhY2Vob2xkZXIgdGhlIG9wcG9zaXRlIGRpcmVjdGlvblxyXG4gICAgICAgICAgICBzd2l0Y2ggKHNoaWZ0RGlyZWN0aW9uKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBBY3Rpb25EaXJlY3Rpb24uTGVmdDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFBsYWNlaG9sZGVyQm91bmRzKHBsYWNlaG9sZGVyLnZpc2libGUsIHBsYWNlaG9sZGVyLnggKyB0aGlzLmdldENvbHVtbldpZHRoKCksIHBsYWNlaG9sZGVyLnksIHBsYWNlaG9sZGVyLndpZHRoLCBwbGFjZWhvbGRlci5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgQWN0aW9uRGlyZWN0aW9uLlJpZ2h0OlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UGxhY2Vob2xkZXJCb3VuZHMocGxhY2Vob2xkZXIudmlzaWJsZSwgcGxhY2Vob2xkZXIueCAtIHRoaXMuZ2V0Q29sdW1uV2lkdGgoKSwgcGxhY2Vob2xkZXIueSwgcGxhY2Vob2xkZXIud2lkdGgsIHBsYWNlaG9sZGVyLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIHZhbGlkYXRlIHRoaXMgbmV3IHBvc2l0aW9uIGFnYWluXHJcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGVQbGFjZWhvbGRlclBvc2l0aW9uKHNoaWZ0RGlyZWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXRlcm1pbmUgaWYgYSB3aWRnZXQgY2FuIGJlIG1vdmVkIGxlZnQgLSBvciBpZiBpdCBjYW4gbW92ZSB0aGUgd2lkZ2V0cyB0byB0aGUgcmlnaHQgdG8gbWFrZSBzcGFjZSBmb3IgdGhlIHdpZGdldFxyXG4gICAgICovXHJcbiAgICBjYW5XaWRnZXRNb3ZlTGVmdCh3aWRnZXQ6IERhc2hib2FyZFdpZGdldENvbXBvbmVudCwgcGVyZm9ybU1vdmU6IGJvb2xlYW4gPSBmYWxzZSk6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgICAvLyBjaGVjayBpZiB0aGUgd2lkZ2V0IGlzIHRoZSBhY3Rpb24gd2lkZ2V0IG9yIG9jY3VwaWVzIHRoZSBmaXJzdCBjb2x1bW5cclxuICAgICAgICBpZiAod2lkZ2V0ID09PSB0aGlzLl9hY3Rpb25XaWRnZXQud2lkZ2V0IHx8IHdpZGdldC5nZXRDb2x1bW4oKSA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBmaW5kIHRoZSBwb3NpdGlvbnMgcmVxdWlyZWRcclxuICAgICAgICBjb25zdCB0YXJnZXRTcGFjZXMgPSB0aGlzLmdldE9jY3VwaWVkU3BhY2VzKCkuZmlsdGVyKHNwYWNlID0+IHNwYWNlLndpZGdldCA9PT0gd2lkZ2V0KS5tYXAoc3BhY2UgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4geyBjb2x1bW46IHNwYWNlLmNvbHVtbiAtIHdpZGdldC5nZXRDb2x1bW5TcGFuKCksIHJvdzogc3BhY2Uucm93LCB3aWRnZXQ6IHNwYWNlLndpZGdldCB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBjaGVjayBpZiB0aGVyZSBhcmUgd2lkZ2V0IGluIHRoZSByZXF1aXJlZCBwb3NpdGlvbnMgYW5kIGlmIHNvLCBjYW4gdGhleSBtb3ZlIHJpZ2h0P1xyXG4gICAgICAgIGNvbnN0IG1vdmVhYmxlID0gdGFyZ2V0U3BhY2VzLmV2ZXJ5KHNwYWNlID0+IHRoaXMuZ2V0V2lkZ2V0c0F0UG9zaXRpb24oc3BhY2UuY29sdW1uLCBzcGFjZS5yb3cpLmZpbHRlcih3Z3QgPT4gd2d0ICE9PSBzcGFjZS53aWRnZXQpLmV2ZXJ5KHdndCA9PiB0aGlzLmNhbldpZGdldE1vdmVMZWZ0KHdndCkpKTtcclxuXHJcbiAgICAgICAgaWYgKHBlcmZvcm1Nb3ZlICYmIG1vdmVhYmxlKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBtb3ZlIGFsbCB3aWRnZXRzIHRvIHRoZSByaWdodFxyXG4gICAgICAgICAgICB0YXJnZXRTcGFjZXMuZm9yRWFjaChzcGFjZSA9PiB0aGlzLmdldFdpZGdldHNBdFBvc2l0aW9uKHNwYWNlLmNvbHVtbiwgc3BhY2Uucm93KS5maWx0ZXIod2d0ID0+IHdndCAhPT0gc3BhY2Uud2lkZ2V0KS5mb3JFYWNoKHdndCA9PiB0aGlzLmNhbldpZGdldE1vdmVMZWZ0KHdndCwgdHJ1ZSkpKTtcclxuXHJcbiAgICAgICAgICAgIC8vIG1vdmUgY3VycmVudCB3aWRnZXQgdG8gdGhlIHJpZ2h0XHJcbiAgICAgICAgICAgIHdpZGdldC5zZXRDb2x1bW4od2lkZ2V0LmdldENvbHVtbigpIC0gMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbW92ZWFibGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXRlcm1pbmUgaWYgYSB3aWRnZXQgY2FuIGJlIG1vdmVkIHJpZ2h0IC0gb3IgaWYgaXQgY2FuIG1vdmUgdGhlIHdpZGdldHMgdG8gdGhlIHJpZ2h0IHRvIG1ha2Ugc3BhY2UgZm9yIHRoZSB3aWRnZXRcclxuICAgICAqL1xyXG4gICAgY2FuV2lkZ2V0TW92ZVJpZ2h0KHdpZGdldDogRGFzaGJvYXJkV2lkZ2V0Q29tcG9uZW50LCBwZXJmb3JtTW92ZTogYm9vbGVhbiA9IGZhbHNlKTogYm9vbGVhbiB7XHJcblxyXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZSB3aWRnZXQgaXMgdGhlIGRyYWdnaW5nIHdpZGdldCBvciB0aGUgd2lkZ2V0IG9jY3VwaWVzIHRoZSBmaW5hbCBjb2x1bW5cclxuICAgICAgICBpZiAod2lkZ2V0ID09PSB0aGlzLl9hY3Rpb25XaWRnZXQud2lkZ2V0IHx8IHdpZGdldC5nZXRDb2x1bW4oKSArIHdpZGdldC5nZXRDb2x1bW5TcGFuKCkgPT09IHRoaXMub3B0aW9ucy5jb2x1bW5zKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGZpbmQgdGhlIHBvc2l0aW9ucyByZXF1aXJlZFxyXG4gICAgICAgIGNvbnN0IHRhcmdldFNwYWNlcyA9IHRoaXMuZ2V0T2NjdXBpZWRTcGFjZXMoKS5maWx0ZXIoc3BhY2UgPT4gc3BhY2Uud2lkZ2V0ID09PSB3aWRnZXQpLm1hcChzcGFjZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGNvbHVtbjogc3BhY2UuY29sdW1uICsgd2lkZ2V0LmdldENvbHVtblNwYW4oKSwgcm93OiBzcGFjZS5yb3csIHdpZGdldDogc3BhY2Uud2lkZ2V0IH07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZXJlIGFyZSB3aWRnZXQgaW4gdGhlIHJlcXVpcmVkIHBvc2l0aW9ucyBhbmQgaWYgc28sIGNhbiB0aGV5IG1vdmUgcmlnaHQ/XHJcbiAgICAgICAgY29uc3QgbW92ZWFibGUgPSB0YXJnZXRTcGFjZXMuZXZlcnkoc3BhY2UgPT4gdGhpcy5nZXRXaWRnZXRzQXRQb3NpdGlvbihzcGFjZS5jb2x1bW4sIHNwYWNlLnJvdykuZmlsdGVyKHdndCA9PiB3Z3QgIT09IHNwYWNlLndpZGdldCkuZXZlcnkod2d0ID0+IHRoaXMuY2FuV2lkZ2V0TW92ZVJpZ2h0KHdndCkpKTtcclxuXHJcbiAgICAgICAgaWYgKHBlcmZvcm1Nb3ZlICYmIG1vdmVhYmxlKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBtb3ZlIGFsbCB3aWRnZXRzIHRvIHRoZSByaWdodFxyXG4gICAgICAgICAgICB0YXJnZXRTcGFjZXMuZm9yRWFjaChzcGFjZSA9PiB0aGlzLmdldFdpZGdldHNBdFBvc2l0aW9uKHNwYWNlLmNvbHVtbiwgc3BhY2Uucm93KS5maWx0ZXIod2d0ID0+IHdndCAhPT0gc3BhY2Uud2lkZ2V0KS5mb3JFYWNoKHdndCA9PiB0aGlzLmNhbldpZGdldE1vdmVSaWdodCh3Z3QsIHRydWUpKSk7XHJcblxyXG4gICAgICAgICAgICAvLyBtb3ZlIGN1cnJlbnQgd2lkZ2V0IHRvIHRoZSByaWdodFxyXG4gICAgICAgICAgICB3aWRnZXQuc2V0Q29sdW1uKHdpZGdldC5nZXRDb2x1bW4oKSArIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG1vdmVhYmxlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RvcmUgdGhlIGluaXRpYWwgcG9zaXRpb24gb2YgdGhlIHdpZGdldCBiZWluZyBkcmFnZ2VkXHJcbiAgICAgKi9cclxuICAgIHNldFdpZGdldE9yaWdpbigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl93aWRnZXRPcmlnaW4gPSB7XHJcbiAgICAgICAgICAgIGNvbHVtbjogdGhpcy5fYWN0aW9uV2lkZ2V0LndpZGdldC5nZXRDb2x1bW4oKSxcclxuICAgICAgICAgICAgcm93OiB0aGlzLl9hY3Rpb25XaWRnZXQud2lkZ2V0LmdldFJvdygpLFxyXG4gICAgICAgICAgICBjb2x1bW5TcGFuOiB0aGlzLl9hY3Rpb25XaWRnZXQud2lkZ2V0LmdldENvbHVtblNwYW4oKSxcclxuICAgICAgICAgICAgcm93U3BhbjogdGhpcy5fYWN0aW9uV2lkZ2V0LndpZGdldC5nZXRSb3dTcGFuKClcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2FsY3VsYXRlIGFsbCB0aGUgcmVxdWlyZWQgcG9zaXRpb25zIGlzIGEgd2lkZ2V0IHdhcyB0byBiZSBwb3NpdGlvbmVkIGF0IGEgcGFydGljdWxhciBwb2ludFxyXG4gICAgICovXHJcbiAgICBnZXRSZXF1aXJlZFNwYWNlc0Zyb21Qb2ludCh3aWRnZXQ6IERhc2hib2FyZFdpZGdldENvbXBvbmVudCwgY29sdW1uOiBudW1iZXIsIHJvdzogbnVtYmVyKTogRGFzaGJvYXJkU3BhY2VbXSB7XHJcbiAgICAgICAgY29uc3Qgc3BhY2VzOiBEYXNoYm9hcmRTcGFjZVtdID0gW107XHJcblxyXG4gICAgICAgIGZvciAobGV0IHkgPSByb3c7IHkgPCByb3cgKyB3aWRnZXQuZ2V0Um93U3BhbigpOyB5KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IGNvbHVtbjsgeCA8IGNvbHVtbiArIHdpZGdldC5nZXRDb2x1bW5TcGFuKCk7IHgrKykge1xyXG4gICAgICAgICAgICAgICAgc3BhY2VzLnB1c2goeyBjb2x1bW46IHgsIHJvdzogeSwgd2lkZ2V0OiB3aWRnZXQgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzcGFjZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBQb3NpdGlvbiB3aWRnZXRzIGJhc2VkIG9uIHRoZSBwb3NpdGlvbiBvZiB0aGUgcGxhY2Vob2xkZXIgLSB0aGlzIGlzIHRlbXBvcmFyeSB1bnRpbCBjb25maXJtZWRcclxuICAgICAqL1xyXG4gICAgdXBkYXRlV2lkZ2V0UG9zaXRpb25zKHdpZGdldDogRGFzaGJvYXJkV2lkZ2V0Q29tcG9uZW50KSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gdGhpcy5wbGFjZWhvbGRlciQuZ2V0VmFsdWUoKTtcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgYWxsIHNwYWNlcyB0aGUgcGxhY2Vob2xkZXIgd2lsbCBvY2N1cHkgYW5kIG1vdmUgYW55IHdpZGdldCBjdXJyZW50bHkgaW4gdGhlbSBkb3duXHJcbiAgICAgICAgZm9yIChsZXQgY29sdW1uID0gcGxhY2Vob2xkZXIuY29sdW1uOyBjb2x1bW4gPCBwbGFjZWhvbGRlci5jb2x1bW4gKyBwbGFjZWhvbGRlci5jb2x1bW5TcGFuOyBjb2x1bW4rKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCByb3cgPSBwbGFjZWhvbGRlci5yb3c7IHJvdyA8IHBsYWNlaG9sZGVyLnJvdyArIHBsYWNlaG9sZGVyLnJvd1NwYW47IHJvdysrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRXaWRnZXRzQXRQb3NpdGlvbihjb2x1bW4sIHJvdywgdHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKHdndCA9PiB3Z3QgIT09IHdpZGdldClcclxuICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaCh3Z3QgPT4gdGhpcy5tb3ZlV2lkZ2V0RG93bih3Z3QpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIHRoZSBoZWlnaHQgb2YgdGhlIGRhc2hib2FyZFxyXG4gICAgICAgIHRoaXMuc2V0RGFzaGJvYXJkSGVpZ2h0KCk7XHJcblxyXG4gICAgICAgIC8vIGlmIHdlIGFyZW50IGRyYWdnaW5nIHRoZSB0b3AgaGFuZGxlIHRoZW4gZmlsbCBzcGFjZXNcclxuICAgICAgICBpZiAodGhpcy5fYWN0aW9uV2lkZ2V0LmRpcmVjdGlvbiAhPT0gQWN0aW9uRGlyZWN0aW9uLlRvcCAmJlxyXG4gICAgICAgICAgICB0aGlzLl9hY3Rpb25XaWRnZXQuZGlyZWN0aW9uICE9PSBBY3Rpb25EaXJlY3Rpb24uVG9wTGVmdCAmJlxyXG4gICAgICAgICAgICB0aGlzLl9hY3Rpb25XaWRnZXQuZGlyZWN0aW9uICE9PSBBY3Rpb25EaXJlY3Rpb24uVG9wUmlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5zaGlmdFdpZGdldHNVcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERldGVybWluZSBpZiBhIHdpZGdldCBpcyBvY2N1cHlpbmcgYSBzcGVjaWZpYyByb3cgYW5kIGNvbHVtblxyXG4gICAgICogQHBhcmFtIGNvbHVtbiBUaGUgY29sdW1ucyB0byBjaGVjayBpZiBvY2N1cGllZFxyXG4gICAgICogQHBhcmFtIHJvdyBUaGUgcm93IHRvIGNoZWNrIGlmIG9jY3VwaWVkXHJcbiAgICAgKiBAcGFyYW0gaWdub3JlUmVzaXppbmcgV2hldGhlciBvciBub3QgdG8gaWdub3JlIHRoZSB3aWRnZXQgY3VycmVudGx5IGJlaW5nIHJlc2l6ZWRcclxuICAgICAqL1xyXG4gICAgZ2V0V2lkZ2V0c0F0UG9zaXRpb24oY29sdW1uOiBudW1iZXIsIHJvdzogbnVtYmVyLCBpZ25vcmVSZXNpemluZzogYm9vbGVhbiA9IGZhbHNlKTogRGFzaGJvYXJkV2lkZ2V0Q29tcG9uZW50W10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldE9jY3VwaWVkU3BhY2VzKClcclxuICAgICAgICAgICAgLmZpbHRlcihzcGFjZSA9PiBzcGFjZS5jb2x1bW4gPT09IGNvbHVtbiAmJiBzcGFjZS5yb3cgPT09IHJvdylcclxuICAgICAgICAgICAgLmZpbHRlcihzcGFjZSA9PiBzcGFjZS53aWRnZXQgIT09IHRoaXMuX2FjdGlvbldpZGdldC53aWRnZXQgfHwgIWlnbm9yZVJlc2l6aW5nKVxyXG4gICAgICAgICAgICAubWFwKHNwYWNlID0+IHNwYWNlLndpZGdldCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgdGhlIHBsYWNlaG9sZGVyIHZpc2liaWxpdHksIHBvc2l0aW9uIGFuZCBzaXplXHJcbiAgICAgKi9cclxuICAgIHNldFBsYWNlaG9sZGVyQm91bmRzKHZpc2libGU6IGJvb2xlYW4sIHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xyXG5cclxuICAgICAgICBjb25zdCBwbGFjZWhvbGRlciA9IHRoaXMucGxhY2Vob2xkZXIkLmdldFZhbHVlKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJvdW5kaW5nID0gdGhpcy5fYWN0aW9uV2lkZ2V0LmRpcmVjdGlvbiA9PT0gQWN0aW9uRGlyZWN0aW9uLkxlZnQgfHxcclxuICAgICAgICAgICAgdGhpcy5fYWN0aW9uV2lkZ2V0LmRpcmVjdGlvbiA9PT0gQWN0aW9uRGlyZWN0aW9uLlRvcCA/IFJvdW5kaW5nLlJvdW5kRG93bkJlbG93SGFsZiA6IFJvdW5kaW5nLlJvdW5kVXBPdmVySGFsZjtcclxuXHJcbiAgICAgICAgcGxhY2Vob2xkZXIudmlzaWJsZSA9IHZpc2libGU7XHJcblxyXG4gICAgICAgIHBsYWNlaG9sZGVyLmNvbHVtbiA9IHRoaXMuZ2V0UGxhY2Vob2xkZXJDb2x1bW4oeCwgd2lkdGgpO1xyXG4gICAgICAgIHBsYWNlaG9sZGVyLnJvdyA9IHRoaXMuZ2V0UGxhY2Vob2xkZXJSb3coeSwgaGVpZ2h0KTtcclxuICAgICAgICBwbGFjZWhvbGRlci5jb2x1bW5TcGFuID0gdGhpcy5nZXRQbGFjZWhvbGRlckNvbHVtblNwYW4od2lkdGgpO1xyXG4gICAgICAgIHBsYWNlaG9sZGVyLnJvd1NwYW4gPSB0aGlzLmdldFBsYWNlaG9sZGVyUm93U3BhbihoZWlnaHQpO1xyXG5cclxuICAgICAgICAvLyBjYWxjdWxhdGUgdGhlIG1heGltdW0gbnVtYmVyIG9mIHJvd3NcclxuICAgICAgICBjb25zdCByb3dDb3VudCA9IHRoaXMud2lkZ2V0cy5maWx0ZXIod2lkZ2V0ID0+IHdpZGdldCAhPT0gdGhpcy5fYWN0aW9uV2lkZ2V0LndpZGdldClcclxuICAgICAgICAgICAgLnJlZHVjZSgocHJldmlvdXMsIHdpZGdldCkgPT4gTWF0aC5tYXgod2lkZ2V0LmdldFJvdygpICsgd2lkZ2V0LmdldFJvd1NwYW4oKSwgcHJldmlvdXMpLCAwKTtcclxuXHJcbiAgICAgICAgLy8gY29uc3RyYWluIG1heGltdW0gcGxhY2Vob2xkZXIgcm93XHJcbiAgICAgICAgcGxhY2Vob2xkZXIucm93ID0gTWF0aC5taW4ocGxhY2Vob2xkZXIucm93LCByb3dDb3VudCk7XHJcblxyXG4gICAgICAgIHBsYWNlaG9sZGVyLnggPSAocGxhY2Vob2xkZXIuY29sdW1uICogdGhpcy5nZXRDb2x1bW5XaWR0aCgpKSArIHRoaXMub3B0aW9ucy5wYWRkaW5nO1xyXG4gICAgICAgIHBsYWNlaG9sZGVyLnkgPSAocGxhY2Vob2xkZXIucm93ICogdGhpcy5fcm93SGVpZ2h0KSArIHRoaXMub3B0aW9ucy5wYWRkaW5nO1xyXG4gICAgICAgIHBsYWNlaG9sZGVyLndpZHRoID0gKHBsYWNlaG9sZGVyLmNvbHVtblNwYW4gKiB0aGlzLmdldENvbHVtbldpZHRoKCkpIC0gKHRoaXMub3B0aW9ucy5wYWRkaW5nICogMik7XHJcbiAgICAgICAgcGxhY2Vob2xkZXIuaGVpZ2h0ID0gKHBsYWNlaG9sZGVyLnJvd1NwYW4gKiB0aGlzLl9yb3dIZWlnaHQpIC0gKHRoaXMub3B0aW9ucy5wYWRkaW5nICogMik7XHJcblxyXG4gICAgICAgIC8vIHNldCB0aGUgdmFsdWVzIG9mIHRoZSB3aWRnZXQgdG8gbWF0Y2ggdGhlIHZhbHVlcyBvZiB0aGUgcGxhY2Vob2xkZXIgLSBob3dldmVyIGRvIG5vdCByZW5kZXIgdGhlIGNoYW5nZXNcclxuICAgICAgICB0aGlzLl9hY3Rpb25XaWRnZXQud2lkZ2V0LnNldENvbHVtbihwbGFjZWhvbGRlci5jb2x1bW4sIGZhbHNlKTtcclxuICAgICAgICB0aGlzLl9hY3Rpb25XaWRnZXQud2lkZ2V0LnNldFJvdyhwbGFjZWhvbGRlci5yb3csIGZhbHNlKTtcclxuICAgICAgICB0aGlzLl9hY3Rpb25XaWRnZXQud2lkZ2V0LnNldENvbHVtblNwYW4ocGxhY2Vob2xkZXIuY29sdW1uU3BhbiwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuX2FjdGlvbldpZGdldC53aWRnZXQuc2V0Um93U3BhbihwbGFjZWhvbGRlci5yb3dTcGFuLCBmYWxzZSk7XHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgcGxhY2Vob2xkZXJcclxuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyJC5uZXh0KHBsYWNlaG9sZGVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgcGxhY2Vob2xkZXIgY29sdW1uIHBvc2l0aW9uXHJcbiAgICAgKi9cclxuICAgIGdldFBsYWNlaG9sZGVyQ29sdW1uKHg6IG51bWJlciwgd2lkdGg6IG51bWJlcik6IG51bWJlciB7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbHVtbiA9IHRoaXMuZ2V0Q29sdW1uRnJvbVB4KHgsIHRoaXMuX2FjdGlvbldpZGdldC5kaXJlY3Rpb24gPT09IEFjdGlvbkRpcmVjdGlvbi5Nb3ZlID8gUm91bmRpbmcuUm91bmRVcE92ZXJIYWxmIDogUm91bmRpbmcuUm91bmREb3duKTtcclxuICAgICAgICBjb25zdCBjb2x1bW5TcGFuID0gTWF0aC5mbG9vcih3aWR0aCAvIHRoaXMuZ2V0Q29sdW1uV2lkdGgoKSk7XHJcbiAgICAgICAgY29uc3QgdXBwZXJMaW1pdCA9IHRoaXMuZ2V0Q29sdW1uQ291bnQoKSAtIGNvbHVtblNwYW47XHJcblxyXG4gICAgICAgIC8vIGlmIHdlIGFyZW50IGRyYWdnaW5nIGxlZnQgdGhlbiBqdXN0IHJldHVybiB0aGUgY29sdW1uXHJcbiAgICAgICAgaWYgKHRoaXMuX2FjdGlvbldpZGdldC5kaXJlY3Rpb24gIT09IEFjdGlvbkRpcmVjdGlvbi5MZWZ0ICYmXHJcbiAgICAgICAgICAgIHRoaXMuX2FjdGlvbldpZGdldC5kaXJlY3Rpb24gIT09IEFjdGlvbkRpcmVjdGlvbi5Ub3BMZWZ0ICYmXHJcbiAgICAgICAgICAgIHRoaXMuX2FjdGlvbldpZGdldC5kaXJlY3Rpb24gIT09IEFjdGlvbkRpcmVjdGlvbi5Cb3R0b21MZWZ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1heChNYXRoLm1pbihjb2x1bW4sIHVwcGVyTGltaXQpLCAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGdldCBhbnkgb3ZlcmZsb3dcclxuICAgICAgICBjb25zdCBvdmVyZmxvdyA9IHdpZHRoICUgdGhpcy5nZXRDb2x1bW5XaWR0aCgpO1xyXG5cclxuICAgICAgICByZXR1cm4gKHggPD0gMCB8fCBvdmVyZmxvdyA9PT0gMCB8fCBjb2x1bW5TcGFuID09PSAwIHx8IG92ZXJmbG93ID4gKHRoaXMuZ2V0Q29sdW1uV2lkdGgoKSAvIDIpKSA/XHJcbiAgICAgICAgICAgIE1hdGgubWF4KE1hdGgubWluKGNvbHVtbiwgdXBwZXJMaW1pdCksIDApIDpcclxuICAgICAgICAgICAgTWF0aC5tYXgoTWF0aC5taW4oY29sdW1uICsgMSwgdXBwZXJMaW1pdCksIDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBjb2x1bW4gc3BhbiBvZiB0aGUgcGxhY2Vob2xkZXJcclxuICAgICAqL1xyXG4gICAgZ2V0UGxhY2Vob2xkZXJDb2x1bW5TcGFuKHdpZHRoOiBudW1iZXIpOiBudW1iZXIge1xyXG5cclxuICAgICAgICBjb25zdCBjb2x1bW5TcGFuID0gdGhpcy5nZXRDb2x1bW5Gcm9tUHgod2lkdGgpO1xyXG5cclxuICAgICAgICAvLyBpZiB3ZSBhcmVudCBkcmFnZ2luZyByaWdodCBvciBsZWZ0IHRoZW4ganVzdCByZXR1cm4gdGhlIGNvbHVtbiBzcGFuXHJcbiAgICAgICAgaWYgKHRoaXMuX2FjdGlvbldpZGdldC5kaXJlY3Rpb24gIT09IEFjdGlvbkRpcmVjdGlvbi5SaWdodCAmJlxyXG4gICAgICAgICAgICB0aGlzLl9hY3Rpb25XaWRnZXQuZGlyZWN0aW9uICE9PSBBY3Rpb25EaXJlY3Rpb24uVG9wUmlnaHQgJiZcclxuICAgICAgICAgICAgdGhpcy5fYWN0aW9uV2lkZ2V0LmRpcmVjdGlvbiAhPT0gQWN0aW9uRGlyZWN0aW9uLkJvdHRvbVJpZ2h0ICYmXHJcbiAgICAgICAgICAgIHRoaXMuX2FjdGlvbldpZGdldC5kaXJlY3Rpb24gIT09IEFjdGlvbkRpcmVjdGlvbi5MZWZ0ICYmXHJcbiAgICAgICAgICAgIHRoaXMuX2FjdGlvbldpZGdldC5kaXJlY3Rpb24gIT09IEFjdGlvbkRpcmVjdGlvbi5Ub3BMZWZ0ICYmXHJcbiAgICAgICAgICAgIHRoaXMuX2FjdGlvbldpZGdldC5kaXJlY3Rpb24gIT09IEFjdGlvbkRpcmVjdGlvbi5Cb3R0b21MZWZ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1heChjb2x1bW5TcGFuLCAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGdldCB0aGUgY3VycmVudCBjb2x1bW4gc3BhbiBhbmQgYW55IG92ZXJmbG93XHJcbiAgICAgICAgY29uc3Qgb3ZlcmZsb3cgPSB3aWR0aCAlIHRoaXMuZ2V0Q29sdW1uV2lkdGgoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChjb2x1bW5TcGFuID4gMCAmJiBvdmVyZmxvdyA+ICh0aGlzLmdldENvbHVtbldpZHRoKCkgLyAyKSkgPyBNYXRoLm1heChjb2x1bW5TcGFuICsgMSwgMSkgOiBNYXRoLm1heChjb2x1bW5TcGFuLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgcm93IHBvc2l0aW9uIG9mIHRoZSBwbGFjZWhvbGRlclxyXG4gICAgICovXHJcbiAgICBnZXRQbGFjZWhvbGRlclJvdyh5OiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogbnVtYmVyIHtcclxuXHJcbiAgICAgICAgY29uc3Qgcm93ID0gdGhpcy5nZXRSb3dGcm9tUHgoeSwgdGhpcy5fYWN0aW9uV2lkZ2V0LmRpcmVjdGlvbiA9PT0gQWN0aW9uRGlyZWN0aW9uLk1vdmUgPyBSb3VuZGluZy5Sb3VuZFVwT3ZlckhhbGYgOiBSb3VuZGluZy5Sb3VuZERvd24pO1xyXG4gICAgICAgIGNvbnN0IHJvd1NwYW4gPSBNYXRoLmNlaWwoaGVpZ2h0IC8gdGhpcy5fcm93SGVpZ2h0KTtcclxuXHJcbiAgICAgICAgLy8gaWYgd2UgYXJlbnQgZHJhZ2dpbmcgdXAgdGhlbiBqdXN0IHJldHVybiB0aGUgcm93XHJcbiAgICAgICAgaWYgKHRoaXMuX2FjdGlvbldpZGdldC5kaXJlY3Rpb24gIT09IEFjdGlvbkRpcmVjdGlvbi5Ub3AgJiZcclxuICAgICAgICAgICAgdGhpcy5fYWN0aW9uV2lkZ2V0LmRpcmVjdGlvbiAhPT0gQWN0aW9uRGlyZWN0aW9uLlRvcExlZnQgJiZcclxuICAgICAgICAgICAgdGhpcy5fYWN0aW9uV2lkZ2V0LmRpcmVjdGlvbiAhPT0gQWN0aW9uRGlyZWN0aW9uLlRvcFJpZ2h0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1heChyb3csIDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZ2V0IGFueSBvdmVyZmxvd1xyXG4gICAgICAgIGxldCBvdmVyZmxvdyA9IGhlaWdodCA8IHRoaXMuX3Jvd0hlaWdodCA/IDAgOiBoZWlnaHQgJSB0aGlzLl9yb3dIZWlnaHQ7XHJcblxyXG4gICAgICAgIHJldHVybiAoeSA8PSAwIHx8IHJvd1NwYW4gPT09IDAgfHwgb3ZlcmZsb3cgPT09IDAgfHwgb3ZlcmZsb3cgPiAodGhpcy5fcm93SGVpZ2h0IC8gMikpID8gTWF0aC5tYXgocm93LCAwKSA6IE1hdGgubWF4KHJvdyArIDEsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSByb3cgc3BhbiBvZiB0aGUgcGxhY2Vob2xkZXJcclxuICAgICAqL1xyXG4gICAgZ2V0UGxhY2Vob2xkZXJSb3dTcGFuKGhlaWdodDogbnVtYmVyKTogbnVtYmVyIHtcclxuXHJcbiAgICAgICAgY29uc3Qgcm93U3BhbiA9IHRoaXMuZ2V0Um93RnJvbVB4KGhlaWdodCk7XHJcblxyXG4gICAgICAgIC8vIGlmIHdlIGFyZW50IGRyYWdnaW5nIHVwIG9yIGRvd24gdGhlbiBqdXN0IHJldHVybiB0aGUgY29sdW1uIHNwYW5cclxuICAgICAgICBpZiAodGhpcy5fYWN0aW9uV2lkZ2V0LmRpcmVjdGlvbiAhPT0gQWN0aW9uRGlyZWN0aW9uLlRvcCAmJlxyXG4gICAgICAgICAgICB0aGlzLl9hY3Rpb25XaWRnZXQuZGlyZWN0aW9uICE9PSBBY3Rpb25EaXJlY3Rpb24uVG9wTGVmdCAmJlxyXG4gICAgICAgICAgICB0aGlzLl9hY3Rpb25XaWRnZXQuZGlyZWN0aW9uICE9PSBBY3Rpb25EaXJlY3Rpb24uVG9wUmlnaHQgJiZcclxuICAgICAgICAgICAgdGhpcy5fYWN0aW9uV2lkZ2V0LmRpcmVjdGlvbiAhPT0gQWN0aW9uRGlyZWN0aW9uLkJvdHRvbSAmJlxyXG4gICAgICAgICAgICB0aGlzLl9hY3Rpb25XaWRnZXQuZGlyZWN0aW9uICE9PSBBY3Rpb25EaXJlY3Rpb24uQm90dG9tTGVmdCAmJlxyXG4gICAgICAgICAgICB0aGlzLl9hY3Rpb25XaWRnZXQuZGlyZWN0aW9uICE9PSBBY3Rpb25EaXJlY3Rpb24uQm90dG9tUmlnaHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KHJvd1NwYW4sIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZ2V0IHRoZSBjdXJyZW50IGNvbHVtbiBzcGFuIGFuZCBhbnkgb3ZlcmZsb3dcclxuICAgICAgICBjb25zdCBvdmVyZmxvdyA9IGhlaWdodCAlIHRoaXMuX3Jvd0hlaWdodDtcclxuXHJcbiAgICAgICAgcmV0dXJuIChvdmVyZmxvdyA+ICh0aGlzLl9yb3dIZWlnaHQgLyAyKSkgPyBNYXRoLm1heChyb3dTcGFuICsgMSwgMSkgOiBNYXRoLm1heChyb3dTcGFuLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb2x1bW5Gcm9tUHgoeDogbnVtYmVyLCByb3VuZGluZzogUm91bmRpbmcgPSBSb3VuZGluZy5Sb3VuZERvd24pOiBudW1iZXIge1xyXG5cclxuICAgICAgICBjb25zdCBjb2x1bW4gPSBNYXRoLmZsb29yKHggLyBNYXRoLmZsb29yKHRoaXMuZ2V0Q29sdW1uV2lkdGgoKSkpO1xyXG4gICAgICAgIGNvbnN0IG92ZXJmbG93ID0gKHggJSBNYXRoLmZsb29yKHRoaXMuZ2V0Q29sdW1uV2lkdGgoKSkpO1xyXG4gICAgICAgIGNvbnN0IGhhbGYgPSB0aGlzLmdldENvbHVtbldpZHRoKCkgLyAyO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHJvdW5kaW5nKSB7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFJvdW5kaW5nLlJvdW5kRG93bjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb2x1bW47XHJcblxyXG4gICAgICAgICAgICBjYXNlIFJvdW5kaW5nLlJvdW5kRG93bkJlbG93SGFsZjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBvdmVyZmxvdyA8IGhhbGYgPyBjb2x1bW4gOiBjb2x1bW4gKyAxO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBSb3VuZGluZy5Sb3VuZFVwT3ZlckhhbGY6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3ZlcmZsb3cgPiBoYWxmID8gY29sdW1uICsgMSA6IGNvbHVtbjtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgUm91bmRpbmcuUm91bmRVcDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBvdmVyZmxvdyA+IDAgPyBjb2x1bW4gKyAxIDogY29sdW1uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Um93RnJvbVB4KHk6IG51bWJlciwgcm91bmRpbmc6IFJvdW5kaW5nID0gUm91bmRpbmcuUm91bmREb3duKTogbnVtYmVyIHtcclxuXHJcbiAgICAgICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcih5IC8gTWF0aC5mbG9vcih0aGlzLl9yb3dIZWlnaHQpKTtcclxuICAgICAgICBjb25zdCBvdmVyZmxvdyA9ICh5ICUgTWF0aC5mbG9vcih0aGlzLl9yb3dIZWlnaHQpKTtcclxuICAgICAgICBjb25zdCBoYWxmID0gdGhpcy5fcm93SGVpZ2h0IC8gMjtcclxuXHJcbiAgICAgICAgc3dpdGNoIChyb3VuZGluZykge1xyXG5cclxuICAgICAgICAgICAgY2FzZSBSb3VuZGluZy5Sb3VuZERvd246XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcm93O1xyXG5cclxuICAgICAgICAgICAgY2FzZSBSb3VuZGluZy5Sb3VuZERvd25CZWxvd0hhbGY6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3ZlcmZsb3cgPCBoYWxmID8gcm93IDogcm93ICsgMTtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgUm91bmRpbmcuUm91bmRVcE92ZXJIYWxmOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG92ZXJmbG93ID4gaGFsZiA/IHJvdyArIDEgOiByb3c7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFJvdW5kaW5nLlJvdW5kVXA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3ZlcmZsb3cgPiAwID8gcm93ICsgMSA6IHJvdztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tbWl0V2lkZ2V0Q2hhbmdlcygpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgY29uc3QgcGxhY2Vob2xkZXIgPSB0aGlzLnBsYWNlaG9sZGVyJC5nZXRWYWx1ZSgpO1xyXG5cclxuICAgICAgICAvLyBjaGVjayB0aGF0IHdlIGhhdmUgYWxsIHRoZSB2YWx1ZXMgd2UgbmVlZFxyXG4gICAgICAgIGlmIChwbGFjZWhvbGRlci5jb2x1bW4gPT09IHVuZGVmaW5lZCB8fCBwbGFjZWhvbGRlci5yb3cgPT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlci5jb2x1bW5TcGFuID09PSB1bmRlZmluZWQgfHwgcGxhY2Vob2xkZXIucm93U3BhbiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9hY3Rpb25XaWRnZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5fYWN0aW9uV2lkZ2V0LndpZGdldC5zZXRDb2x1bW4ocGxhY2Vob2xkZXIuY29sdW1uKTtcclxuICAgICAgICAgICAgdGhpcy5fYWN0aW9uV2lkZ2V0LndpZGdldC5zZXRSb3cocGxhY2Vob2xkZXIucm93KTtcclxuICAgICAgICAgICAgdGhpcy5fYWN0aW9uV2lkZ2V0LndpZGdldC5zZXRDb2x1bW5TcGFuKHBsYWNlaG9sZGVyLmNvbHVtblNwYW4pO1xyXG4gICAgICAgICAgICB0aGlzLl9hY3Rpb25XaWRnZXQud2lkZ2V0LnNldFJvd1NwYW4ocGxhY2Vob2xkZXIucm93U3Bhbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyByZXNldCBhbGwgcGxhY2Vob2xkZXIgdmFsdWVzXHJcbiAgICAgICAgcGxhY2Vob2xkZXIuY29sdW1uID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHBsYWNlaG9sZGVyLnJvdyA9IHVuZGVmaW5lZDtcclxuICAgICAgICBwbGFjZWhvbGRlci5jb2x1bW5TcGFuID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHBsYWNlaG9sZGVyLnJvd1NwYW4gPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIC8vIGVtaXQgdGhlIG5ldyBwbGFjZWhvbGRlciB2YWx1ZXNcclxuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyJC5uZXh0KHBsYWNlaG9sZGVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgY3VycmVudCBjb2x1bW4gd2lkdGhcclxuICAgICAqL1xyXG4gICAgZ2V0Q29sdW1uV2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLmNvbHVtbldpZHRoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENhbGN1bGF0ZSB0aGUgbnVtYmVyIG9mIHJvd3MgcG9wdWxhdGVkIHdpdGggd2lkZ2V0c1xyXG4gICAgICovXHJcbiAgICBnZXRSb3dDb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndpZGdldHMucmVkdWNlKChwcmV2aW91cywgd2lkZ2V0KSA9PiBNYXRoLm1heCh3aWRnZXQuZ2V0Um93KCkgKyB3aWRnZXQuZ2V0Um93U3BhbigpLCBwcmV2aW91cyksIDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IHRoZSBoZWlnaHQgb2YgdGhlIGRhc2hib2FyZCBjb250YWluZXIgZWxlbWVudFxyXG4gICAgICovXHJcbiAgICBzZXREYXNoYm9hcmRIZWlnaHQoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIC8vIHNpemUgdGhlIGRhc2hib2FyZCBjb250YWluZXIgdG8gZW5zdXJlIGFsbCByb3dzIGZpdFxyXG4gICAgICAgIGxldCByb3dDb3VudCA9IHRoaXMuZ2V0Um93Q291bnQoKTtcclxuXHJcbiAgICAgICAgLy8gaWYgd2Ugc2hvdWxkIHNob3cgYW4gZW1wdHkgcm93IGluY3JlbWVudCB0aGUgcm93IGNvdW50IGJ5IDFcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmVtcHR5Um93KSB7XHJcbiAgICAgICAgICAgIHJvd0NvdW50Kys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldERpbWVuc2lvbnModW5kZWZpbmVkLCByb3dDb3VudCAqIHRoaXMuX3Jvd0hlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBPcmRlcnMgdGhlIHotaW5kZXggb2YgYWxsIHdpZGdldHMgdG8gbW92ZSB0aGUgYWN0aXZlIG9uZSB0byB0aGUgZnJvbnRcclxuICAgICAqIEBwYXJhbSB3aWRnZXQgVGhlIHdpZGdldCB0aGF0IHNob3VsZCBiZSBicm91Z2h0IHRvIHRoZSBmcm9udFxyXG4gICAgICovXHJcbiAgICBicmluZ1RvRnJvbnQod2lkZ2V0OiBEYXNoYm9hcmRXaWRnZXRDb21wb25lbnQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLndpZGdldHMuZm9yRWFjaChfd2lkZ2V0ID0+IF93aWRnZXQgPT09IHdpZGdldCA/IF93aWRnZXQuYnJpbmdUb0Zyb250KCkgOiBfd2lkZ2V0LnNlbmRUb0JhY2soKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNb3ZlIGEgd2lkZ2V0IGRvd24gLSBpZiB3aWRnZXRzIGFyZSBpbiB0aGUgcG9zaXRpb24gYmVsb3csIHRoZW4gbW92ZSB0aGVtIGRvd24gZnVydGhlclxyXG4gICAgICogQHBhcmFtIHdpZGdldCBUaGUgd2lkZ2V0IHRvIG1vdmUgZG93bndhcmRzXHJcbiAgICAgKi9cclxuICAgIG1vdmVXaWRnZXREb3duKHdpZGdldDogRGFzaGJvYXJkV2lkZ2V0Q29tcG9uZW50LCBkaXN0YW5jZTogbnVtYmVyID0gMSk6IHZvaWQge1xyXG5cclxuICAgICAgICAvLyBtb3ZlIHRoZSB3aWRnZXQgZG93biBvbmUgcG9zaXRpb25cclxuICAgICAgICB3aWRnZXQuc2V0Um93KHdpZGdldC5nZXRSb3coKSArIGRpc3RhbmNlKTtcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgZXZlcnkgc3BhY2UgdGhlIHdpZGdldCBvY2N1cGllcyBmb3IgY29sbGlzaW9uc1xyXG4gICAgICAgIHRoaXMuZm9yRWFjaEJsb2NrKHdpZGdldCwgKGNvbHVtbiwgcm93KSA9PlxyXG4gICAgICAgICAgICB0aGlzLmdldFdpZGdldHNBdFBvc2l0aW9uKGNvbHVtbiwgcm93LCB0cnVlKVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcih3Z3QgPT4gd2d0ICE9PSB3aWRnZXQpXHJcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCh3Z3QgPT4gdGhpcy5tb3ZlV2lkZ2V0RG93bih3Z3QsIGRpc3RhbmNlKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2lkZ2V0cyBzaG91bGQgbm90IGJlIGFsbG93ZWQgdG8gaGF2ZSBhIHZhY2FudCBzcGFjZSBhYm92ZSB0aGVtIC0gaWYgdGhlcmUgaXMgb25lIHRoZXkgc2hvdWxkIG1vdmUgdXB3YXJkcyB0byBmaWxsIGl0XHJcbiAgICAgKi9cclxuICAgIHNoaWZ0V2lkZ2V0c1VwKCk6IHZvaWQge1xyXG5cclxuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIG9yIG5vdCBjaGFuZ2VzIGhhdmUgYmVlbiBtYWRlIC0gaWYgc28gd2UgbmVlZCB0byByZXBlYXQgdW50aWwgc3RhYmxlXHJcbiAgICAgICAgbGV0IHN0YWJsZSA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIGl0ZXJhdGUgZWFjaCB3aWRnZXQgYW5kXHJcbiAgICAgICAgdGhpcy53aWRnZXRzLmZvckVhY2god2lkZ2V0ID0+IHtcclxuXHJcbiAgICAgICAgICAgIC8vIGlmIHdpZGdldCBpcyBhbHJlYWR5IG9uIHRoZSB0b3Agcm93IHRoZW4gZG8gbm90aGluZ1xyXG4gICAgICAgICAgICBpZiAod2lkZ2V0LmdldFJvdygpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGlmIHdlIGFyZSBjdXJyZW50bHkgZHJhZ2dpbmcgYW5kIHRoaXMgaXMgdGhlIGRyYWdnaW5nIHdpZGdldCB0aGVuIHNraXBcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2FjdGlvbldpZGdldCAmJiB0aGlzLl9hY3Rpb25XaWRnZXQud2lkZ2V0ID09PSB3aWRnZXQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0UG9zaXRpb25BdmFpbGFibGUod2lkZ2V0LmdldENvbHVtbigpLCB3aWRnZXQuZ2V0Um93KCkgLSAxLCB3aWRnZXQuZ2V0Q29sdW1uU3BhbigpLCAxKSkge1xyXG4gICAgICAgICAgICAgICAgd2lkZ2V0LnNldFJvdyh3aWRnZXQuZ2V0Um93KCkgLSAxKTtcclxuICAgICAgICAgICAgICAgIHN0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGlmIGNoYW5nZXMgb2NjdXJyZWQgdGhlbiB3ZSBzaG91bGQgcmVwZWF0IHRoZSBwcm9jZXNzXHJcbiAgICAgICAgaWYgKCFzdGFibGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zaGlmdFdpZGdldHNVcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEl0ZXJhdGUgb3ZlciBlYWNoIHNwYWNlIGEgd2lkZ2V0IG9jY3VwaWVkXHJcbiAgICAgKiBAcGFyYW0gd2lkZ2V0IFRoZSB3aWRnZXQgdG8gZGV0ZXJtaW5lIHNwYWNlc1xyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIFRoZSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgZm9yIGVhY2ggc3BhY2UsIHNob3VsZCBleHBlY3QgYSBjb2x1bW4gYW5kIHJvdyBhcmd1bWVudCB3aXRodCBoZSBjb250ZXh0IGJlaW5nIHRoZSB3aWRnZXRcclxuICAgICAqL1xyXG4gICAgZm9yRWFjaEJsb2NrKHdpZGdldDogRGFzaGJvYXJkV2lkZ2V0Q29tcG9uZW50LCBjYWxsYmFjazogKGNvbHVtbjogbnVtYmVyLCByb3c6IG51bWJlcikgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAobGV0IHJvdyA9IHdpZGdldC5nZXRSb3coKTsgcm93IDwgd2lkZ2V0LmdldFJvdygpICsgd2lkZ2V0LmdldFJvd1NwYW4oKTsgcm93KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29sdW1uID0gd2lkZ2V0LmdldENvbHVtbigpOyBjb2x1bW4gPCB3aWRnZXQuZ2V0Q29sdW1uKCkgKyB3aWRnZXQuZ2V0Q29sdW1uU3BhbigpOyBjb2x1bW4rKykge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh3aWRnZXQsIGNvbHVtbiwgcm93KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBjb2x1bW5zIGF2YWlsYWJsZVxyXG4gICAgICovXHJcbiAgICBnZXRDb2x1bW5Db3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YWNrZWQgPyAxIDogdGhpcy5vcHRpb25zLmNvbHVtbnM7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0T3B0aW9uczogRGFzaGJvYXJkT3B0aW9ucyA9IHsgY29sdW1uczogNSwgcGFkZGluZzogNSwgbWluV2lkdGg6IDEwMCwgbWluSGVpZ2h0OiAxMDAsIGVtcHR5Um93OiB0cnVlIH07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERhc2hib2FyZERpbWVuc2lvbnMge1xyXG4gICAgd2lkdGg/OiBudW1iZXI7XHJcbiAgICBoZWlnaHQ/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGFzaGJvYXJkV2lkZ2V0RGltZW5zaW9ucyB7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGFzaGJvYXJkQWN0aW9uIHtcclxuICAgIHdpZGdldDogRGFzaGJvYXJkV2lkZ2V0Q29tcG9uZW50O1xyXG4gICAgZGlyZWN0aW9uOiBBY3Rpb25EaXJlY3Rpb247XHJcbiAgICBldmVudDogTW91c2VFdmVudDtcclxuICAgIGhhbmRsZT86IEhUTUxFbGVtZW50O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERhc2hib2FyZFNwYWNlIHtcclxuICAgIHdpZGdldDogRGFzaGJvYXJkV2lkZ2V0Q29tcG9uZW50O1xyXG4gICAgY29sdW1uOiBudW1iZXI7XHJcbiAgICByb3c6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEYXNoYm9hcmRQbGFjZWhvbGRlciB7XHJcbiAgICB2aXNpYmxlOiBib29sZWFuO1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG4gICAgY29sdW1uPzogbnVtYmVyO1xyXG4gICAgcm93PzogbnVtYmVyO1xyXG4gICAgY29sdW1uU3Bhbj86IG51bWJlcjtcclxuICAgIHJvd1NwYW4/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGFzaGJvYXJkQ2FjaGUge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIGNvbHVtbjogbnVtYmVyO1xyXG4gICAgcm93OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGFzaGJvYXJkTGF5b3V0RGF0YSB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgY29sOiBudW1iZXI7XHJcbiAgICByb3c6IG51bWJlcjtcclxuICAgIGNvbFNwYW46IG51bWJlcjtcclxuICAgIHJvd1NwYW46IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQWN0aW9uRGlyZWN0aW9uIHtcclxuICAgIFRvcCA9IDAsXHJcbiAgICBUb3BSaWdodCA9IDEsXHJcbiAgICBSaWdodCA9IDIsXHJcbiAgICBCb3R0b21SaWdodCA9IDMsXHJcbiAgICBCb3R0b20gPSA0LFxyXG4gICAgQm90dG9tTGVmdCA9IDUsXHJcbiAgICBMZWZ0ID0gNixcclxuICAgIFRvcExlZnQgPSA3LFxyXG4gICAgTW92ZSA9IDhcclxufVxyXG5cclxuZXhwb3J0IGVudW0gUm91bmRpbmcge1xyXG4gICAgUm91bmREb3duLFxyXG4gICAgUm91bmREb3duQmVsb3dIYWxmLFxyXG4gICAgUm91bmRVcCxcclxuICAgIFJvdW5kVXBPdmVySGFsZlxyXG59Il19