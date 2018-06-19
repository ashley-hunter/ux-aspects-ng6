/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ColorService } from '../../services/color/index';
export class SliderComponent {
    /**
     * @param {?} colorService
     * @param {?} _changeDetectorRef
     */
    constructor(colorService, _changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
        this.value = 0;
        this.valueChange = new EventEmitter();
        // expose enums to Angular view
        this.sliderType = SliderType;
        this.sliderStyle = SliderStyle;
        this.sliderSize = SliderSize;
        this.sliderSnap = SliderSnap;
        this.sliderThumb = SliderThumb;
        this.sliderTickType = SliderTickType;
        this.sliderThumbEvent = SliderThumbEvent;
        this.sliderCalloutTrigger = SliderCalloutTrigger;
        this.tracks = {
            lower: {
                size: 0,
                color: ''
            },
            middle: {
                size: 0,
                color: ''
            },
            upper: {
                size: 0,
                color: ''
            }
        };
        this.tooltips = {
            lower: {
                visible: false,
                position: 0,
                label: ''
            },
            upper: {
                visible: false,
                position: 0,
                label: ''
            }
        };
        this.thumbs = {
            lower: {
                hover: false,
                drag: false,
                position: 0,
                order: 100,
                value: /** @type {?} */ (null)
            },
            upper: {
                hover: false,
                drag: false,
                position: 0,
                order: 101,
                value: /** @type {?} */ (null)
            }
        };
        // store all the ticks to display
        this.ticks = [];
        // setup default options
        this.defaultOptions = {
            type: SliderType.Value,
            handles: {
                style: SliderStyle.Button,
                callout: {
                    trigger: SliderCalloutTrigger.None,
                    background: colorService.getColor('grey2').toHex(),
                    color: '#fff',
                    formatter: (value) => value
                },
                keyboard: {
                    major: 5,
                    minor: 1
                },
                aria: {
                    thumb: 'Slider value',
                    lowerThumb: 'Slider lower value',
                    upperThumb: 'Slider upper value'
                }
            },
            track: {
                height: SliderSize.Wide,
                min: 0,
                max: 100,
                ticks: {
                    snap: SliderSnap.None,
                    major: {
                        show: true,
                        steps: 10,
                        labels: true,
                        formatter: (value) => value
                    },
                    minor: {
                        show: true,
                        steps: 5,
                        labels: false,
                        formatter: (value) => value
                    }
                },
                colors: {
                    lower: colorService.getColor('grey6').toHex(),
                    range: colorService.getColor('accent').setAlpha(0.75).toRgba(),
                    higher: colorService.getColor('grey6').toHex()
                }
            }
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateOptions();
        this.updateValues();
        this.setThumbState(SliderThumb.Lower, false, false);
        this.setThumbState(SliderThumb.Upper, false, false);
        // emit the initial value
        this.valueChange.next(this.clone(this.value));
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this.detectValueChange(this.value, this._value)) {
            this.updateValues();
            this._value = this.clone(this.value);
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // persistent tooltips will need positioned correctly at this stage
        setTimeout(() => {
            this.updateTooltipPosition(SliderThumb.Lower);
            this.updateTooltipPosition(SliderThumb.Upper);
            // mark as dirty
            this._changeDetectorRef.markForCheck();
        });
    }
    /**
     * @param {?} thumb
     * @param {?} snapTarget
     * @param {?} forwards
     * @return {?}
     */
    snapToNearestTick(thumb, snapTarget, forwards) {
        // get the value for the thumb
        const { value } = this.getThumbState(thumb);
        // get the closest ticks - remove any tick if we are currently on it
        const /** @type {?} */ closest = this.getTickDistances(value, thumb, snapTarget)
            .filter(tick => tick.value !== value)
            .find(tick => forwards ? tick.value > value : tick.value < value);
        // If we have no ticks then move by a predefined amount
        if (closest) {
            return this.setThumbValue(thumb, this.validateValue(thumb, closest.value));
        }
        const /** @type {?} */ step = snapTarget === SliderSnap.Major ? this.options.handles.keyboard.major : this.options.handles.keyboard.minor;
        this.setThumbValue(thumb, this.validateValue(thumb, value + (forwards ? step : -step)));
    }
    /**
     * @param {?} thumb
     * @param {?} forwards
     * @return {?}
     */
    snapToEnd(thumb, forwards) {
        this.setThumbValue(thumb, this.validateValue(thumb, forwards ? this.options.track.max : this.options.track.min));
    }
    /**
     * @param {?} thumb
     * @return {?}
     */
    getThumbValue(thumb) {
        return this.getThumbState(thumb).value;
    }
    /**
     * @param {?} thumb
     * @return {?}
     */
    getFormattedValue(thumb) {
        return this.options.handles.callout.formatter(this.getThumbState(thumb).value);
    }
    /**
     * @param {?} thumb
     * @return {?}
     */
    getThumbState(thumb) {
        return thumb === SliderThumb.Lower ? this.thumbs.lower : this.thumbs.upper;
    }
    /**
     * @param {?} thumb
     * @param {?} hover
     * @param {?} drag
     * @return {?}
     */
    setThumbState(thumb, hover, drag) {
        if (thumb === SliderThumb.Lower) {
            this.thumbs.lower.hover = hover;
            this.thumbs.lower.drag = drag;
        }
        else {
            this.thumbs.upper.hover = hover;
            this.thumbs.upper.drag = drag;
        }
        // update the visibility of the tooltips
        this.updateTooltips(thumb);
    }
    /**
     * @param {?} thumb
     * @param {?} event
     * @return {?}
     */
    thumbEvent(thumb, event) {
        // get the current thumb state
        const /** @type {?} */ state = this.getThumbState(thumb);
        // update based upon event
        switch (event) {
            case SliderThumbEvent.DragStart:
                state.drag = true;
                break;
            case SliderThumbEvent.DragEnd:
                state.drag = false;
                break;
            case SliderThumbEvent.MouseOver:
                state.hover = true;
                break;
            case SliderThumbEvent.MouseLeave:
                state.hover = false;
                break;
            case SliderThumbEvent.None:
                state.drag = false;
                state.hover = false;
                break;
        }
        // update the thumb state
        this.setThumbState(thumb, state.hover, state.drag);
    }
    /**
     * @param {?} thumb
     * @return {?}
     */
    getAriaValueText(thumb) {
        // get the current thumb value
        const /** @type {?} */ value = this.getThumbValue(thumb);
        // get all the ticks
        const /** @type {?} */ tick = this.ticks.find(_tick => _tick.value === value);
        if (tick && tick.label) {
            return tick.label;
        }
        // otherwise simply display the formatted value
        return this.getFormattedValue(thumb);
    }
    /**
     * @param {?} thumb
     * @return {?}
     */
    updateTooltips(thumb) {
        let /** @type {?} */ visible = false;
        const /** @type {?} */ state = this.getThumbState(thumb);
        switch (this.options.handles.callout.trigger) {
            case SliderCalloutTrigger.Persistent:
                visible = true;
                break;
            case SliderCalloutTrigger.Drag:
                visible = state.drag;
                break;
            case SliderCalloutTrigger.Hover:
                visible = state.hover || state.drag;
                break;
            case SliderCalloutTrigger.Dynamic:
                visible = true;
                break;
        }
        // update the state for the corresponding thumb
        this.getTooltip(thumb).visible = visible;
        // update the tooltip text
        this.updateTooltipText(thumb);
        // update the tooltip positions
        this.updateTooltipPosition(thumb);
    }
    /**
     * @param {?} thumb
     * @return {?}
     */
    updateTooltipText(thumb) {
        // get the thumb value
        let /** @type {?} */ state = this.getThumbState(thumb);
        let /** @type {?} */ tooltip = this.getTooltip(thumb);
        // store the formatted label
        tooltip.label = this.getFormattedValue(thumb).toString();
    }
    /**
     * @param {?} thumb
     * @return {?}
     */
    getTooltipElement(thumb) {
        return thumb === SliderThumb.Lower ? this.lowerTooltip : this.upperTooltip;
    }
    /**
     * @param {?} thumb
     * @return {?}
     */
    getTooltip(thumb) {
        return thumb === SliderThumb.Lower ? this.tooltips.lower : this.tooltips.upper;
    }
    /**
     * @param {?} thumb
     * @return {?}
     */
    updateTooltipPosition(thumb) {
        const /** @type {?} */ tooltip = this.getTooltip(thumb);
        // if tooltip is not visible then stop here
        if (tooltip.visible === false) {
            return;
        }
        let /** @type {?} */ tooltipElement = this.getTooltipElement(thumb);
        // get the element widths
        let /** @type {?} */ thumbWidth;
        if (this.options.handles.style === SliderStyle.Button) {
            thumbWidth = this.options.track.height === SliderSize.Narrow ? 16 : 24;
        }
        else {
            thumbWidth = 2;
        }
        let /** @type {?} */ tooltipWidth = tooltipElement.nativeElement.offsetWidth;
        // calculate the tooltips new position
        let /** @type {?} */ tooltipPosition = Math.ceil((tooltipWidth - thumbWidth) / 2);
        // update tooltip position
        tooltip.position = -tooltipPosition;
        if (this.options.type === SliderType.Range && this.options.handles.callout.trigger === SliderCalloutTrigger.Dynamic) {
            this.preventTooltipOverlap(tooltip);
        }
    }
    /**
     * @param {?} tooltip
     * @return {?}
     */
    preventTooltipOverlap(tooltip) {
        const /** @type {?} */ trackWidth = this.track.nativeElement.offsetWidth;
        const /** @type {?} */ lower = (trackWidth / 100) * this.thumbs.lower.position;
        const /** @type {?} */ upper = (trackWidth / 100) * this.thumbs.upper.position;
        const /** @type {?} */ lowerWidth = this.lowerTooltip.nativeElement.offsetWidth / 2;
        const /** @type {?} */ upperWidth = this.upperTooltip.nativeElement.offsetWidth / 2;
        const /** @type {?} */ diff = (lower + lowerWidth) - (upper - upperWidth);
        // if the tooltips are closer than 16px then adjust so the dont move any close
        if (diff > 0) {
            if (tooltip === this.tooltips.lower && this.thumbs.lower.drag === false) {
                tooltip.position -= (diff / 2);
            }
            else if (tooltip === this.tooltips.upper && this.thumbs.upper.drag === false) {
                tooltip.position += (diff / 2);
            }
        }
    }
    /**
     * @param {?} value
     * @param {?} min
     * @param {?} max
     * @return {?}
     */
    clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }
    /**
     * @param {?} event
     * @param {?} thumb
     * @return {?}
     */
    updateThumbPosition(event, thumb) {
        // get event position - either mouse or touch
        let /** @type {?} */ eventPosition = event instanceof MouseEvent ? event.clientX : event.touches && event.touches.length > 0 ? event.touches[0].clientX : null;
        // if event position is null do nothing
        if (eventPosition === null) {
            return;
        }
        // get mouse position
        let /** @type {?} */ mouseX = window.pageXOffset + eventPosition;
        // get track size and position
        let /** @type {?} */ trackBounds = this.track.nativeElement.getBoundingClientRect();
        // restrict the value within the range size
        let /** @type {?} */ position = this.clamp(mouseX - trackBounds.left, 0, trackBounds.width);
        // get fraction representation of location within the track
        let /** @type {?} */ fraction = (position / trackBounds.width);
        // convert to value within the range
        let /** @type {?} */ value = ((this.options.track.max - this.options.track.min) * fraction) + this.options.track.min;
        // ensure value is valid
        value = this.validateValue(thumb, value);
        // snap to a tick if required
        value = this.snapToTick(value, thumb);
        // update the value accordingly
        this.setThumbValue(thumb, value);
        this.updateOrder(thumb);
        this.updateValues();
        // update tooltip text & position
        this.updateTooltipText(thumb);
        // update the position of all visible tooltips
        this.updateTooltipPosition(SliderThumb.Lower);
        this.updateTooltipPosition(SliderThumb.Upper);
        // mark as dirty for change detection
        this._changeDetectorRef.markForCheck();
    }
    /**
     * @param {?} thumb
     * @return {?}
     */
    updateOrder(thumb) {
        let /** @type {?} */ lower = thumb === SliderThumb.Lower ? 101 : 100;
        let /** @type {?} */ upper = thumb === SliderThumb.Lower ? 100 : 101;
        // The most recently used thumb should be above
        this.thumbs.lower.order = lower;
        this.thumbs.upper.order = upper;
    }
    /**
     * @param {?} value
     * @param {?} thumb
     * @param {?} snapTarget
     * @return {?}
     */
    getTickDistances(value, thumb, snapTarget) {
        // if snap target is none then return original value
        if (snapTarget === SliderSnap.None) {
            return [];
        }
        // get filtered ticks
        let /** @type {?} */ ticks;
        switch (snapTarget) {
            case SliderSnap.Minor:
                ticks = this.ticks.filter(tick => tick.type === SliderTickType.Minor);
                break;
            case SliderSnap.Major:
                ticks = this.ticks.filter(tick => tick.type === SliderTickType.Major);
                break;
            default:
                ticks = this.ticks.slice(0);
        }
        // get the track limit
        let /** @type {?} */ lowerLimit = this.options.track.min;
        let /** @type {?} */ upperLimit = this.options.track.max;
        if (this.options.type === SliderType.Range && thumb === SliderThumb.Lower) {
            upperLimit = this.thumbs.upper.value;
        }
        if (this.options.type === SliderType.Range && thumb === SliderThumb.Upper) {
            lowerLimit = this.thumbs.lower.value;
        }
        // Find the closest tick to the current position
        const /** @type {?} */ range = ticks.filter(tick => tick.value >= lowerLimit && tick.value <= upperLimit);
        // If there are no close ticks in the valid range then dont snap
        if (range.length === 0) {
            return [];
        }
        return range.sort((tickOne, tickTwo) => {
            const /** @type {?} */ tickOneDelta = Math.max(tickOne.value, value) - Math.min(tickOne.value, value);
            const /** @type {?} */ tickTwoDelta = Math.max(tickTwo.value, value) - Math.min(tickTwo.value, value);
            return tickOneDelta - tickTwoDelta;
        });
    }
    /**
     * @param {?} value
     * @param {?} thumb
     * @return {?}
     */
    snapToTick(value, thumb) {
        const /** @type {?} */ tickDistances = this.getTickDistances(value, thumb, this.options.track.ticks.snap);
        // if there are no ticks return the current value
        if (tickDistances.length === 0) {
            return value;
        }
        // get the closest tick
        return tickDistances[0].value;
    }
    /**
     * @param {?} thumb
     * @param {?} value
     * @return {?}
     */
    validateValue(thumb, value) {
        // if slider is not a range value is always valid providing it is within the chart min and max values
        if (this.options.type === SliderType.Value) {
            return Math.max(Math.min(value, this.options.track.max), this.options.track.min);
        }
        // check if value is with chart ranges
        if (value > this.options.track.max) {
            return thumb === SliderThumb.Lower ? Math.min(this.options.track.max, this.thumbs.upper.value) : this.options.track.max;
        }
        if (value < this.options.track.min) {
            return thumb === SliderThumb.Upper ? Math.max(this.options.track.min, this.thumbs.lower.value) : this.options.track.min;
        }
        // otherwise we need to check to make sure lower thumb cannot go above higher and vice versa
        if (thumb === SliderThumb.Lower) {
            if (this.thumbs.upper.value === null) {
                return value;
            }
            return value <= this.thumbs.upper.value ? value : this.thumbs.upper.value;
        }
        if (thumb === SliderThumb.Upper) {
            if (this.thumbs.lower.value === null) {
                return value;
            }
            return value >= this.thumbs.lower.value ? value : this.thumbs.lower.value;
        }
    }
    /**
     * @return {?}
     */
    updateOptions() {
        // add in the default options that user hasn't specified
        this.options = this.deepMerge(this.options || {}, this.defaultOptions);
        this.updateTrackColors();
        this.updateTicks();
        this.updateValues();
    }
    /**
     * @return {?}
     */
    updateValues() {
        if (this.value === undefined || this.value === null) {
            this.value = 0;
        }
        let /** @type {?} */ lowerValue = typeof this.value === 'number' ? this.value : this.value.low;
        let /** @type {?} */ upperValue = typeof this.value === 'number' ? this.value : this.value.high;
        // validate values
        lowerValue = this.validateValue(SliderThumb.Lower, Number(lowerValue.toFixed(4)));
        upperValue = this.validateValue(SliderThumb.Upper, Number(upperValue.toFixed(4)));
        // calculate the positions as percentages
        let /** @type {?} */ lowerPosition = (((lowerValue - this.options.track.min) / (this.options.track.max - this.options.track.min)) * 100);
        let /** @type {?} */ upperPosition = (((upperValue - this.options.track.min) / (this.options.track.max - this.options.track.min)) * 100);
        // update thumb positions
        this.thumbs.lower.position = lowerPosition;
        this.thumbs.upper.position = upperPosition;
        // calculate the track sizes
        this.tracks.lower.size = lowerPosition;
        this.tracks.middle.size = upperPosition - lowerPosition;
        this.tracks.upper.size = this.options.type === SliderType.Value ? 100 - lowerPosition : 100 - upperPosition;
        // update the value input
        this.setValue(lowerValue, upperValue);
    }
    /**
     * @param {?} low
     * @param {?=} high
     * @return {?}
     */
    setValue(low, high) {
        this.thumbs.lower.value = low;
        this.thumbs.upper.value = high;
        let /** @type {?} */ previousValue = this.clone(this._value);
        this.value = this.options.type === SliderType.Value ? low : { low: low, high: high };
        // call the event emitter if changes occured
        if (this.detectValueChange(this.value, previousValue)) {
            this.valueChange.emit(this.clone(this.value));
            this.updateTooltipText(SliderThumb.Lower);
            this.updateTooltipText(SliderThumb.Upper);
        }
        else {
            this.valueChange.emit(this.clone(this.value));
        }
    }
    /**
     * @param {?} thumb
     * @param {?} value
     * @return {?}
     */
    setThumbValue(thumb, value) {
        // update the thumb value
        this.getThumbState(thumb).value = value;
        // forward these changes to the value
        this.setValue(this.thumbs.lower.value, this.thumbs.upper.value);
    }
    /**
     * @return {?}
     */
    updateTicks() {
        // get tick options
        const /** @type {?} */ majorOptions = this.options.track.ticks.major;
        const /** @type {?} */ minorOptions = this.options.track.ticks.minor;
        // check if we should show ticks
        if (majorOptions.show === false && minorOptions.show === false) {
            this.ticks = [];
        }
        // create ticks for both major and minor - only get the ones to be shown
        const /** @type {?} */ majorTicks = this.getTicks(majorOptions, SliderTickType.Major).filter(tick => tick.showTicks);
        const /** @type {?} */ minorTicks = this.getTicks(minorOptions, SliderTickType.Minor).filter(tick => tick.showTicks);
        // remove any minor ticks that are on a major interval
        this.ticks = this.unionTicks(majorTicks, minorTicks);
    }
    /**
     * @return {?}
     */
    updateTrackColors() {
        // get colors for each part of the track
        const { lower, range, higher } = this.options.track.colors;
        // update the controller value
        this.tracks.lower.color = typeof lower === 'string' ? lower : `linear-gradient(to right, ${lower.join(', ')})`;
        this.tracks.middle.color = typeof range === 'string' ? range : `linear-gradient(to right, ${range.join(', ')})`;
        this.tracks.upper.color = typeof higher === 'string' ? higher : `linear-gradient(to right, ${higher.join(', ')})`;
    }
    /**
     * @param {?} steps
     * @return {?}
     */
    getSteps(steps) {
        // if they are already an array just return it
        if (steps instanceof Array) {
            return steps;
        }
        let /** @type {?} */ output = [];
        // otherwise calculate the steps
        for (let /** @type {?} */ idx = this.options.track.min; idx <= this.options.track.max; idx += steps) {
            output.push(idx);
        }
        return output;
    }
    /**
     * @param {?} options
     * @param {?} type
     * @return {?}
     */
    getTicks(options, type) {
        // create an array to store the ticks and step points
        let /** @type {?} */ steps = this.getSteps(options.steps);
        // get some chart options
        let /** @type {?} */ min = this.options.track.min;
        let /** @type {?} */ max = this.options.track.max;
        // convert each step to a slider tick and remove invalid ticks
        return steps.map(step => {
            return {
                showTicks: options.show,
                showLabels: options.labels,
                type: type,
                position: ((step - min) / (max - min)) * 100,
                value: step,
                label: options.formatter(step)
            };
        }).filter(tick => tick.position >= 0 && tick.position <= 100);
    }
    /**
     * @param {?} majorTicks
     * @param {?} minorTicks
     * @return {?}
     */
    unionTicks(majorTicks, minorTicks) {
        // get all ticks combined removing any minor ticks with the same value as major ticks
        return majorTicks.concat(minorTicks)
            .filter((tick, index, array) => tick.type === SliderTickType.Major || !array.find(tk => tk.type === SliderTickType.Major && tk.position === tick.position))
            .sort((t1, t2) => t1.value - t2.value);
    }
    /**
     * @template T
     * @param {?} destination
     * @param {?} source
     * @return {?}
     */
    deepMerge(destination, source) {
        // loop though all of the properties in the source object
        for (let /** @type {?} */ prop in source) {
            // check if the destination object has the property
            if (!destination.hasOwnProperty(prop)) {
                // copy the property across
                destination[prop] = source[prop];
                continue;
            }
            // if the property exists and is not an object then skip
            if (typeof destination[prop] !== 'object') {
                continue;
            }
            // check if property is an array
            if (destination[prop] instanceof Array) {
                continue;
            }
            // if it is an object then perform a recursive check
            destination[prop] = this.deepMerge(destination[prop], source[prop]);
        }
        return destination;
    }
    /**
     * @param {?} value1
     * @param {?} value2
     * @return {?}
     */
    detectValueChange(value1, value2) {
        // compare two slider values
        if (this.isSliderValue(value1) && this.isSliderValue(value2)) {
            // references to the objects in the correct types
            const /** @type {?} */ obj1 = /** @type {?} */ (value1);
            const /** @type {?} */ obj2 = /** @type {?} */ (value2);
            return obj1.low !== obj2.low || obj1.high !== obj2.high;
        }
        // if not a slider value - should be number of nullable type - compare normally
        return value1 !== value2;
    }
    /**
     * Determines whether or not an object conforms to the
     * SliderValue interface.
     * @param {?} value - The object to check - this must be type any
     * @return {?}
     */
    isSliderValue(value) {
        // check if is an object
        if (typeof value !== 'object') {
            return false;
        }
        // next check if it contains the necessary properties
        return 'low' in value && 'high' in value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    clone(value) {
        // if it is not an object simply return the value
        if (typeof value !== 'object') {
            return value;
        }
        // create a new object from the existing one
        const /** @type {?} */ instance = Object.assign({}, value);
        // delete remove the value from the old object
        value = undefined;
        // return the new instance of the object
        return instance;
    }
}
SliderComponent.decorators = [
    { type: Component, args: [{
                selector: 'ux-slider',
                template: `<div class="track" #track [class.narrow]="options.track.height === sliderSize.Narrow" [class.wide]="options.track.height === sliderSize.Wide" [class.range]="options.type === sliderType.Range">

    <!-- Section Beneath Lower Thumb -->
    <div class="track-section track-lower" [style.flex-grow]="tracks.lower.size" [style.background]="tracks.lower.color"></div>

    <!-- Lower Thumb Button / Line -->
    <div class="thumb lower"
        uxDrag
        role="slider"
        tabindex="0"
        #lowerthumb
        [attr.aria-label]="options.type === sliderType.Range ? options.handles.aria.lowerThumb : options.handles.aria.thumb"
        [attr.aria-valuemin]="options?.track?.min"
        [attr.aria-valuemax]="options.type === sliderType.Range ? getThumbValue(sliderThumb.Upper) : options?.track?.max"
        [attr.aria-valuenow]="getThumbValue(sliderThumb.Lower)"
        [attr.aria-valuetext]="getAriaValueText(sliderThumb.Lower)"
        [style.left.%]="thumbs.lower.position"
        [class.active]="thumbs.lower.drag"
        [style.z-index]="thumbs.lower.order"
        [class.button]="options.handles.style === sliderStyle.Button"
        [class.line]="options.handles.style === sliderStyle.Line"
        [class.narrow]="options.track.height === sliderSize.Narrow"
        [class.wide]="options.track.height === sliderSize.Wide"
        (dragstart)="thumbEvent(sliderThumb.Lower, sliderThumbEvent.DragStart); lowerthumb.focus()"
        (drag)="updateThumbPosition($event, sliderThumb.Lower)"
        (dragend)="thumbEvent(sliderThumb.Lower, sliderThumbEvent.DragEnd)"
        (mouseenter)="thumbEvent(sliderThumb.Lower, sliderThumbEvent.MouseOver)"
        (mouseleave)="thumbEvent(sliderThumb.Lower, sliderThumbEvent.MouseLeave)"
        (focus)="thumbEvent(sliderThumb.Lower, sliderThumbEvent.MouseOver)"
        (blur)="thumbEvent(sliderThumb.Lower, sliderThumbEvent.MouseLeave)"
        (keydown.ArrowLeft)="snapToNearestTick(sliderThumb.Lower, sliderSnap.All, false); $event.preventDefault()"
        (keydown.ArrowRight)="snapToNearestTick(sliderThumb.Lower, sliderSnap.All, true); $event.preventDefault()"
        (keydown.ArrowUp)="snapToNearestTick(sliderThumb.Lower, sliderSnap.All, false); $event.preventDefault()"
        (keydown.ArrowDown)="snapToNearestTick(sliderThumb.Lower, sliderSnap.All, true); $event.preventDefault()"
        (keydown.PageDown)="snapToNearestTick(sliderThumb.Lower, sliderSnap.Major, false); $event.preventDefault()"
        (keydown.PageUp)="snapToNearestTick(sliderThumb.Lower, sliderSnap.Major, true); $event.preventDefault()"
        (keydown.Home)="snapToEnd(sliderThumb.Lower, false); $event.preventDefault()"
        (keydown.End)="snapToEnd(sliderThumb.Lower, true); $event.preventDefault()">

        <!-- Lower Thumb Callout -->
        <div class="tooltip top tooltip-lower" #lowerTooltip
            [class.tooltip-dynamic]="options.handles.callout.trigger === sliderCalloutTrigger.Dynamic && thumbs.lower.drag === false"
            [style.opacity]="tooltips.lower.visible ? 1 : 0"
            [style.left.px]="tooltips.lower.position">

            <div class="tooltip-arrow" [style.border-top-color]="options.handles.callout.background"></div>

            <div class="tooltip-inner"
                [style.background-color]="options.handles.callout.background"
                [style.color]="options.handles.callout.color">
                {{ tooltips.lower.label }}
            </div>
        </div>

    </div>

    <!-- Section of Track Between Lower and Upper Thumbs -->
    <div class="track-section track-range" *ngIf="options.type === sliderType.Range" [style.flex-grow]="tracks.middle.size" [style.background]="tracks.middle.color">
    </div>

    <!-- Upper Thumb Button / Line -->
    <div class="thumb upper"
        uxDrag
        role="slider"
        tabindex="0"
        #upperthumb
        [attr.aria-label]="options.handles.aria.upperThumb"
        [attr.aria-valuemin]="getThumbValue(sliderThumb.Lower) || options?.track?.min"
        [attr.aria-valuemax]="options?.track?.max"
        [attr.aria-valuenow]="getThumbValue(sliderThumb.Upper)"
        [attr.aria-valuetext]="getAriaValueText(sliderThumb.Upper)"
        [hidden]="options.type !== sliderType.Range"
        [class.active]="thumbs.upper.drag"
        [style.left.%]="thumbs.upper.position"
        [style.z-index]="thumbs.upper.order"
        [class.button]="options.handles.style === sliderStyle.Button"
        [class.line]="options.handles.style === sliderStyle.Line"
        [class.narrow]="options.track.height === sliderSize.Narrow"
        [class.wide]="options.track.height === sliderSize.Wide"
        (dragstart)="thumbEvent(sliderThumb.Upper, sliderThumbEvent.DragStart); upperthumb.focus()"
        (drag)="updateThumbPosition($event, sliderThumb.Upper)"
        (dragend)="thumbEvent(sliderThumb.Upper, sliderThumbEvent.DragEnd)"
        (mouseenter)="thumbEvent(sliderThumb.Upper, sliderThumbEvent.MouseOver)"
        (mouseleave)="thumbEvent(sliderThumb.Upper, sliderThumbEvent.MouseLeave)"
        (focus)="thumbEvent(sliderThumb.Upper, sliderThumbEvent.MouseOver)"
        (blur)="thumbEvent(sliderThumb.Upper, sliderThumbEvent.MouseLeave)"
        (keydown.ArrowLeft)="snapToNearestTick(sliderThumb.Upper, sliderSnap.All, false); $event.preventDefault()"
        (keydown.ArrowRight)="snapToNearestTick(sliderThumb.Upper, sliderSnap.All, true); $event.preventDefault()"
        (keydown.ArrowUp)="snapToNearestTick(sliderThumb.Upper, sliderSnap.All, false); $event.preventDefault()"
        (keydown.ArrowDown)="snapToNearestTick(sliderThumb.Upper, sliderSnap.All, true); $event.preventDefault()"
        (keydown.PageDown)="snapToNearestTick(sliderThumb.Upper, sliderSnap.Major, false); $event.preventDefault()"
        (keydown.PageUp)="snapToNearestTick(sliderThumb.Upper, sliderSnap.Major, true); $event.preventDefault()"
        (keydown.Home)="snapToEnd(sliderThumb.Upper, false); $event.preventDefault()"
        (keydown.End)="snapToEnd(sliderThumb.Upper, true); $event.preventDefault()">

        <!-- Upper Thumb Callout -->
        <div class="tooltip top tooltip-upper" #upperTooltip
            [class.tooltip-dynamic]="options.handles.callout.trigger === sliderCalloutTrigger.Dynamic && thumbs.upper.drag === false"
            [style.opacity]="tooltips.upper.visible ? 1 : 0"
            [style.left.px]="tooltips.upper.position">

            <div class="tooltip-arrow" [style.border-top-color]="options.handles.callout.background"></div>

            <div class="tooltip-inner"
                *ngIf="options.type === sliderType.Range"
                [style.background-color]="options.handles.callout.background"
                [style.color]="options.handles.callout.color">
                {{ tooltips.upper.label }}
            </div>
        </div>
    </div>

    <!-- Section of Track Abover Upper Thumb -->
    <div class="track-section track-higher" [style.flex-grow]="tracks.upper.size" [style.background]="tracks.upper.color"></div>

</div>

<!-- Chart Ticks and Tick Labels -->
<div class="tick-container"
    role="presentation"
    *ngIf="(options.track.ticks.major.show || options.track.ticks.minor.show) && options.handles.callout.trigger !== sliderCalloutTrigger.Dynamic"
    [class.show-labels]="options.track.ticks.major.labels || options.track.ticks.minor.labels">

    <div class="tick"
        *ngFor="let tick of ticks"
        [class.major]="tick.type === sliderTickType.Major"
        [class.minor]="tick.type === sliderTickType.Minor"
        [style.left.%]="tick.position"
        [hidden]="!tick.showTicks">

        <div class="tick-indicator"></div>
        <div class="tick-label" aria-hidden="true" [hidden]="!tick.showLabels">{{ tick.label }}</div>
    </div>
</div>`,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
SliderComponent.ctorParameters = () => [
    { type: ColorService, },
    { type: ChangeDetectorRef, },
];
SliderComponent.propDecorators = {
    "value": [{ type: Input },],
    "options": [{ type: Input },],
    "valueChange": [{ type: Output },],
    "lowerTooltip": [{ type: ViewChild, args: ['lowerTooltip',] },],
    "upperTooltip": [{ type: ViewChild, args: ['upperTooltip',] },],
    "track": [{ type: ViewChild, args: ['track',] },],
};
function SliderComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SliderComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SliderComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    SliderComponent.propDecorators;
    /** @type {?} */
    SliderComponent.prototype.value;
    /** @type {?} */
    SliderComponent.prototype.options;
    /** @type {?} */
    SliderComponent.prototype.valueChange;
    /** @type {?} */
    SliderComponent.prototype.lowerTooltip;
    /** @type {?} */
    SliderComponent.prototype.upperTooltip;
    /** @type {?} */
    SliderComponent.prototype.track;
    /** @type {?} */
    SliderComponent.prototype._value;
    /** @type {?} */
    SliderComponent.prototype.sliderType;
    /** @type {?} */
    SliderComponent.prototype.sliderStyle;
    /** @type {?} */
    SliderComponent.prototype.sliderSize;
    /** @type {?} */
    SliderComponent.prototype.sliderSnap;
    /** @type {?} */
    SliderComponent.prototype.sliderThumb;
    /** @type {?} */
    SliderComponent.prototype.sliderTickType;
    /** @type {?} */
    SliderComponent.prototype.sliderThumbEvent;
    /** @type {?} */
    SliderComponent.prototype.sliderCalloutTrigger;
    /** @type {?} */
    SliderComponent.prototype.tracks;
    /** @type {?} */
    SliderComponent.prototype.tooltips;
    /** @type {?} */
    SliderComponent.prototype.thumbs;
    /** @type {?} */
    SliderComponent.prototype.ticks;
    /** @type {?} */
    SliderComponent.prototype.defaultOptions;
    /** @type {?} */
    SliderComponent.prototype._changeDetectorRef;
}
/** @enum {number} */
const SliderType = {
    Value: 0,
    Range: 1,
};
export { SliderType };
SliderType[SliderType.Value] = "Value";
SliderType[SliderType.Range] = "Range";
/** @enum {number} */
const SliderStyle = {
    Button: 0,
    Line: 1,
};
export { SliderStyle };
SliderStyle[SliderStyle.Button] = "Button";
SliderStyle[SliderStyle.Line] = "Line";
/** @enum {number} */
const SliderSize = {
    Narrow: 0,
    Wide: 1,
};
export { SliderSize };
SliderSize[SliderSize.Narrow] = "Narrow";
SliderSize[SliderSize.Wide] = "Wide";
/** @enum {number} */
const SliderCalloutTrigger = {
    None: 0,
    Hover: 1,
    Drag: 2,
    Persistent: 3,
    Dynamic: 4,
};
export { SliderCalloutTrigger };
SliderCalloutTrigger[SliderCalloutTrigger.None] = "None";
SliderCalloutTrigger[SliderCalloutTrigger.Hover] = "Hover";
SliderCalloutTrigger[SliderCalloutTrigger.Drag] = "Drag";
SliderCalloutTrigger[SliderCalloutTrigger.Persistent] = "Persistent";
SliderCalloutTrigger[SliderCalloutTrigger.Dynamic] = "Dynamic";
/**
 * @record
 */
export function SliderValue() { }
function SliderValue_tsickle_Closure_declarations() {
    /** @type {?} */
    SliderValue.prototype.low;
    /** @type {?} */
    SliderValue.prototype.high;
}
/** @enum {number} */
const SliderSnap = {
    None: 0,
    Minor: 1,
    Major: 2,
    All: 3,
};
export { SliderSnap };
SliderSnap[SliderSnap.None] = "None";
SliderSnap[SliderSnap.Minor] = "Minor";
SliderSnap[SliderSnap.Major] = "Major";
SliderSnap[SliderSnap.All] = "All";
/** @enum {number} */
const SliderTickType = {
    Minor: 0,
    Major: 1,
};
export { SliderTickType };
SliderTickType[SliderTickType.Minor] = "Minor";
SliderTickType[SliderTickType.Major] = "Major";
/**
 * @record
 */
export function SliderOptions() { }
function SliderOptions_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    SliderOptions.prototype.type;
    /** @type {?|undefined} */
    SliderOptions.prototype.handles;
    /** @type {?|undefined} */
    SliderOptions.prototype.track;
}
/**
 * @record
 */
export function SliderHandleOptions() { }
function SliderHandleOptions_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    SliderHandleOptions.prototype.style;
    /** @type {?|undefined} */
    SliderHandleOptions.prototype.callout;
    /** @type {?|undefined} */
    SliderHandleOptions.prototype.keyboard;
    /** @type {?|undefined} */
    SliderHandleOptions.prototype.aria;
}
/**
 * @record
 */
export function SliderAriaOptions() { }
function SliderAriaOptions_tsickle_Closure_declarations() {
    /** @type {?} */
    SliderAriaOptions.prototype.thumb;
    /** @type {?} */
    SliderAriaOptions.prototype.lowerThumb;
    /** @type {?} */
    SliderAriaOptions.prototype.upperThumb;
}
/**
 * @record
 */
export function SliderKeyboardOptions() { }
function SliderKeyboardOptions_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    SliderKeyboardOptions.prototype.major;
    /** @type {?|undefined} */
    SliderKeyboardOptions.prototype.minor;
}
/**
 * @record
 */
export function SliderTrackOptions() { }
function SliderTrackOptions_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    SliderTrackOptions.prototype.height;
    /** @type {?|undefined} */
    SliderTrackOptions.prototype.min;
    /** @type {?|undefined} */
    SliderTrackOptions.prototype.max;
    /** @type {?|undefined} */
    SliderTrackOptions.prototype.ticks;
    /** @type {?|undefined} */
    SliderTrackOptions.prototype.colors;
}
/**
 * @record
 */
export function SliderTicksOptions() { }
function SliderTicksOptions_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    SliderTicksOptions.prototype.snap;
    /** @type {?|undefined} */
    SliderTicksOptions.prototype.major;
    /** @type {?|undefined} */
    SliderTicksOptions.prototype.minor;
}
/**
 * @record
 */
export function SliderTickOptions() { }
function SliderTickOptions_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    SliderTickOptions.prototype.show;
    /** @type {?|undefined} */
    SliderTickOptions.prototype.steps;
    /** @type {?|undefined} */
    SliderTickOptions.prototype.labels;
    /** @type {?|undefined} */
    SliderTickOptions.prototype.formatter;
}
/**
 * @record
 */
export function SliderTick() { }
function SliderTick_tsickle_Closure_declarations() {
    /** @type {?} */
    SliderTick.prototype.showTicks;
    /** @type {?} */
    SliderTick.prototype.showLabels;
    /** @type {?} */
    SliderTick.prototype.type;
    /** @type {?} */
    SliderTick.prototype.position;
    /** @type {?} */
    SliderTick.prototype.value;
    /** @type {?} */
    SliderTick.prototype.label;
}
/**
 * @record
 */
export function SliderTrackColors() { }
function SliderTrackColors_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    SliderTrackColors.prototype.lower;
    /** @type {?|undefined} */
    SliderTrackColors.prototype.range;
    /** @type {?|undefined} */
    SliderTrackColors.prototype.higher;
}
/**
 * @record
 */
export function SliderCallout() { }
function SliderCallout_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    SliderCallout.prototype.trigger;
    /** @type {?|undefined} */
    SliderCallout.prototype.background;
    /** @type {?|undefined} */
    SliderCallout.prototype.color;
    /** @type {?|undefined} */
    SliderCallout.prototype.formatter;
}
/** @enum {number} */
const SliderThumbEvent = {
    None: 0,
    MouseOver: 1,
    MouseLeave: 2,
    DragStart: 3,
    DragEnd: 4,
};
export { SliderThumbEvent };
SliderThumbEvent[SliderThumbEvent.None] = "None";
SliderThumbEvent[SliderThumbEvent.MouseOver] = "MouseOver";
SliderThumbEvent[SliderThumbEvent.MouseLeave] = "MouseLeave";
SliderThumbEvent[SliderThumbEvent.DragStart] = "DragStart";
SliderThumbEvent[SliderThumbEvent.DragEnd] = "DragEnd";
/** @enum {number} */
const SliderThumb = {
    Lower: 0,
    Upper: 1,
};
export { SliderThumb };
SliderThumb[SliderThumb.Lower] = "Lower";
SliderThumb[SliderThumb.Upper] = "Upper";

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBVyxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFLLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQTRJMUQsTUFBTTs7Ozs7SUF3RUYsWUFBWSxZQUEwQixFQUFVLGtCQUFxQztRQUFyQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO3FCQXRFOUMsQ0FBQzsyQkFFb0IsSUFBSSxZQUFZLEVBQXdCOzswQkFVdkYsVUFBVTsyQkFDVCxXQUFXOzBCQUNaLFVBQVU7MEJBQ1YsVUFBVTsyQkFDVCxXQUFXOzhCQUNSLGNBQWM7Z0NBQ1osZ0JBQWdCO29DQUNaLG9CQUFvQjtzQkFFbEM7WUFDTCxLQUFLLEVBQUU7Z0JBQ0gsSUFBSSxFQUFFLENBQUM7Z0JBQ1AsS0FBSyxFQUFFLEVBQUU7YUFDWjtZQUNELE1BQU0sRUFBRTtnQkFDSixJQUFJLEVBQUUsQ0FBQztnQkFDUCxLQUFLLEVBQUUsRUFBRTthQUNaO1lBQ0QsS0FBSyxFQUFFO2dCQUNILElBQUksRUFBRSxDQUFDO2dCQUNQLEtBQUssRUFBRSxFQUFFO2FBQ1o7U0FDSjt3QkFFVTtZQUNQLEtBQUssRUFBRTtnQkFDSCxPQUFPLEVBQUUsS0FBSztnQkFDZCxRQUFRLEVBQUUsQ0FBQztnQkFDWCxLQUFLLEVBQUUsRUFBRTthQUNaO1lBQ0QsS0FBSyxFQUFFO2dCQUNILE9BQU8sRUFBRSxLQUFLO2dCQUNkLFFBQVEsRUFBRSxDQUFDO2dCQUNYLEtBQUssRUFBRSxFQUFFO2FBQ1o7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QUFLLENBQUUsQ0FBQzs7UUFHOUIsS0FBSyxHQUFHLFNBQVMsQ0FBQzs7UUFHbEIsTUFBTSxDQUFDLFFBQVEsQ0FBQzs7OztZQW4zQnZCLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BcUlQO2dCQUNILGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2xEOzs7O1lBM0lRLFlBQVk7WUFENEIsaUJBQWlCOzs7c0JBK0k3RCxLQUFLO3dCQUNMLEtBQUs7NEJBQ0wsTUFBTTs2QkFFTixTQUFTLFNBQUMsY0FBYzs2QkFDeEIsU0FBUyxTQUFDLGNBQWM7c0JBQ3hCLFNBQVMsU0FBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIERvQ2hlY2ssIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29sb3JTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29sb3IvaW5kZXgnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3V4LXNsaWRlcicsXHJcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJ0cmFja1wiICN0cmFjayBbY2xhc3MubmFycm93XT1cIm9wdGlvbnMudHJhY2suaGVpZ2h0ID09PSBzbGlkZXJTaXplLk5hcnJvd1wiIFtjbGFzcy53aWRlXT1cIm9wdGlvbnMudHJhY2suaGVpZ2h0ID09PSBzbGlkZXJTaXplLldpZGVcIiBbY2xhc3MucmFuZ2VdPVwib3B0aW9ucy50eXBlID09PSBzbGlkZXJUeXBlLlJhbmdlXCI+XHJcblxyXG4gICAgPCEtLSBTZWN0aW9uIEJlbmVhdGggTG93ZXIgVGh1bWIgLS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwidHJhY2stc2VjdGlvbiB0cmFjay1sb3dlclwiIFtzdHlsZS5mbGV4LWdyb3ddPVwidHJhY2tzLmxvd2VyLnNpemVcIiBbc3R5bGUuYmFja2dyb3VuZF09XCJ0cmFja3MubG93ZXIuY29sb3JcIj48L2Rpdj5cclxuXHJcbiAgICA8IS0tIExvd2VyIFRodW1iIEJ1dHRvbiAvIExpbmUgLS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwidGh1bWIgbG93ZXJcIlxyXG4gICAgICAgIHV4RHJhZ1xyXG4gICAgICAgIHJvbGU9XCJzbGlkZXJcIlxyXG4gICAgICAgIHRhYmluZGV4PVwiMFwiXHJcbiAgICAgICAgI2xvd2VydGh1bWJcclxuICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cIm9wdGlvbnMudHlwZSA9PT0gc2xpZGVyVHlwZS5SYW5nZSA/IG9wdGlvbnMuaGFuZGxlcy5hcmlhLmxvd2VyVGh1bWIgOiBvcHRpb25zLmhhbmRsZXMuYXJpYS50aHVtYlwiXHJcbiAgICAgICAgW2F0dHIuYXJpYS12YWx1ZW1pbl09XCJvcHRpb25zPy50cmFjaz8ubWluXCJcclxuICAgICAgICBbYXR0ci5hcmlhLXZhbHVlbWF4XT1cIm9wdGlvbnMudHlwZSA9PT0gc2xpZGVyVHlwZS5SYW5nZSA/IGdldFRodW1iVmFsdWUoc2xpZGVyVGh1bWIuVXBwZXIpIDogb3B0aW9ucz8udHJhY2s/Lm1heFwiXHJcbiAgICAgICAgW2F0dHIuYXJpYS12YWx1ZW5vd109XCJnZXRUaHVtYlZhbHVlKHNsaWRlclRodW1iLkxvd2VyKVwiXHJcbiAgICAgICAgW2F0dHIuYXJpYS12YWx1ZXRleHRdPVwiZ2V0QXJpYVZhbHVlVGV4dChzbGlkZXJUaHVtYi5Mb3dlcilcIlxyXG4gICAgICAgIFtzdHlsZS5sZWZ0LiVdPVwidGh1bWJzLmxvd2VyLnBvc2l0aW9uXCJcclxuICAgICAgICBbY2xhc3MuYWN0aXZlXT1cInRodW1icy5sb3dlci5kcmFnXCJcclxuICAgICAgICBbc3R5bGUuei1pbmRleF09XCJ0aHVtYnMubG93ZXIub3JkZXJcIlxyXG4gICAgICAgIFtjbGFzcy5idXR0b25dPVwib3B0aW9ucy5oYW5kbGVzLnN0eWxlID09PSBzbGlkZXJTdHlsZS5CdXR0b25cIlxyXG4gICAgICAgIFtjbGFzcy5saW5lXT1cIm9wdGlvbnMuaGFuZGxlcy5zdHlsZSA9PT0gc2xpZGVyU3R5bGUuTGluZVwiXHJcbiAgICAgICAgW2NsYXNzLm5hcnJvd109XCJvcHRpb25zLnRyYWNrLmhlaWdodCA9PT0gc2xpZGVyU2l6ZS5OYXJyb3dcIlxyXG4gICAgICAgIFtjbGFzcy53aWRlXT1cIm9wdGlvbnMudHJhY2suaGVpZ2h0ID09PSBzbGlkZXJTaXplLldpZGVcIlxyXG4gICAgICAgIChkcmFnc3RhcnQpPVwidGh1bWJFdmVudChzbGlkZXJUaHVtYi5Mb3dlciwgc2xpZGVyVGh1bWJFdmVudC5EcmFnU3RhcnQpOyBsb3dlcnRodW1iLmZvY3VzKClcIlxyXG4gICAgICAgIChkcmFnKT1cInVwZGF0ZVRodW1iUG9zaXRpb24oJGV2ZW50LCBzbGlkZXJUaHVtYi5Mb3dlcilcIlxyXG4gICAgICAgIChkcmFnZW5kKT1cInRodW1iRXZlbnQoc2xpZGVyVGh1bWIuTG93ZXIsIHNsaWRlclRodW1iRXZlbnQuRHJhZ0VuZClcIlxyXG4gICAgICAgIChtb3VzZWVudGVyKT1cInRodW1iRXZlbnQoc2xpZGVyVGh1bWIuTG93ZXIsIHNsaWRlclRodW1iRXZlbnQuTW91c2VPdmVyKVwiXHJcbiAgICAgICAgKG1vdXNlbGVhdmUpPVwidGh1bWJFdmVudChzbGlkZXJUaHVtYi5Mb3dlciwgc2xpZGVyVGh1bWJFdmVudC5Nb3VzZUxlYXZlKVwiXHJcbiAgICAgICAgKGZvY3VzKT1cInRodW1iRXZlbnQoc2xpZGVyVGh1bWIuTG93ZXIsIHNsaWRlclRodW1iRXZlbnQuTW91c2VPdmVyKVwiXHJcbiAgICAgICAgKGJsdXIpPVwidGh1bWJFdmVudChzbGlkZXJUaHVtYi5Mb3dlciwgc2xpZGVyVGh1bWJFdmVudC5Nb3VzZUxlYXZlKVwiXHJcbiAgICAgICAgKGtleWRvd24uQXJyb3dMZWZ0KT1cInNuYXBUb05lYXJlc3RUaWNrKHNsaWRlclRodW1iLkxvd2VyLCBzbGlkZXJTbmFwLkFsbCwgZmFsc2UpOyAkZXZlbnQucHJldmVudERlZmF1bHQoKVwiXHJcbiAgICAgICAgKGtleWRvd24uQXJyb3dSaWdodCk9XCJzbmFwVG9OZWFyZXN0VGljayhzbGlkZXJUaHVtYi5Mb3dlciwgc2xpZGVyU25hcC5BbGwsIHRydWUpOyAkZXZlbnQucHJldmVudERlZmF1bHQoKVwiXHJcbiAgICAgICAgKGtleWRvd24uQXJyb3dVcCk9XCJzbmFwVG9OZWFyZXN0VGljayhzbGlkZXJUaHVtYi5Mb3dlciwgc2xpZGVyU25hcC5BbGwsIGZhbHNlKTsgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIlxyXG4gICAgICAgIChrZXlkb3duLkFycm93RG93bik9XCJzbmFwVG9OZWFyZXN0VGljayhzbGlkZXJUaHVtYi5Mb3dlciwgc2xpZGVyU25hcC5BbGwsIHRydWUpOyAkZXZlbnQucHJldmVudERlZmF1bHQoKVwiXHJcbiAgICAgICAgKGtleWRvd24uUGFnZURvd24pPVwic25hcFRvTmVhcmVzdFRpY2soc2xpZGVyVGh1bWIuTG93ZXIsIHNsaWRlclNuYXAuTWFqb3IsIGZhbHNlKTsgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIlxyXG4gICAgICAgIChrZXlkb3duLlBhZ2VVcCk9XCJzbmFwVG9OZWFyZXN0VGljayhzbGlkZXJUaHVtYi5Mb3dlciwgc2xpZGVyU25hcC5NYWpvciwgdHJ1ZSk7ICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCJcclxuICAgICAgICAoa2V5ZG93bi5Ib21lKT1cInNuYXBUb0VuZChzbGlkZXJUaHVtYi5Mb3dlciwgZmFsc2UpOyAkZXZlbnQucHJldmVudERlZmF1bHQoKVwiXHJcbiAgICAgICAgKGtleWRvd24uRW5kKT1cInNuYXBUb0VuZChzbGlkZXJUaHVtYi5Mb3dlciwgdHJ1ZSk7ICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCI+XHJcblxyXG4gICAgICAgIDwhLS0gTG93ZXIgVGh1bWIgQ2FsbG91dCAtLT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidG9vbHRpcCB0b3AgdG9vbHRpcC1sb3dlclwiICNsb3dlclRvb2x0aXBcclxuICAgICAgICAgICAgW2NsYXNzLnRvb2x0aXAtZHluYW1pY109XCJvcHRpb25zLmhhbmRsZXMuY2FsbG91dC50cmlnZ2VyID09PSBzbGlkZXJDYWxsb3V0VHJpZ2dlci5EeW5hbWljICYmIHRodW1icy5sb3dlci5kcmFnID09PSBmYWxzZVwiXHJcbiAgICAgICAgICAgIFtzdHlsZS5vcGFjaXR5XT1cInRvb2x0aXBzLmxvd2VyLnZpc2libGUgPyAxIDogMFwiXHJcbiAgICAgICAgICAgIFtzdHlsZS5sZWZ0LnB4XT1cInRvb2x0aXBzLmxvd2VyLnBvc2l0aW9uXCI+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9vbHRpcC1hcnJvd1wiIFtzdHlsZS5ib3JkZXItdG9wLWNvbG9yXT1cIm9wdGlvbnMuaGFuZGxlcy5jYWxsb3V0LmJhY2tncm91bmRcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b29sdGlwLWlubmVyXCJcclxuICAgICAgICAgICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cIm9wdGlvbnMuaGFuZGxlcy5jYWxsb3V0LmJhY2tncm91bmRcIlxyXG4gICAgICAgICAgICAgICAgW3N0eWxlLmNvbG9yXT1cIm9wdGlvbnMuaGFuZGxlcy5jYWxsb3V0LmNvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICB7eyB0b29sdGlwcy5sb3dlci5sYWJlbCB9fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8IS0tIFNlY3Rpb24gb2YgVHJhY2sgQmV0d2VlbiBMb3dlciBhbmQgVXBwZXIgVGh1bWJzIC0tPlxyXG4gICAgPGRpdiBjbGFzcz1cInRyYWNrLXNlY3Rpb24gdHJhY2stcmFuZ2VcIiAqbmdJZj1cIm9wdGlvbnMudHlwZSA9PT0gc2xpZGVyVHlwZS5SYW5nZVwiIFtzdHlsZS5mbGV4LWdyb3ddPVwidHJhY2tzLm1pZGRsZS5zaXplXCIgW3N0eWxlLmJhY2tncm91bmRdPVwidHJhY2tzLm1pZGRsZS5jb2xvclwiPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPCEtLSBVcHBlciBUaHVtYiBCdXR0b24gLyBMaW5lIC0tPlxyXG4gICAgPGRpdiBjbGFzcz1cInRodW1iIHVwcGVyXCJcclxuICAgICAgICB1eERyYWdcclxuICAgICAgICByb2xlPVwic2xpZGVyXCJcclxuICAgICAgICB0YWJpbmRleD1cIjBcIlxyXG4gICAgICAgICN1cHBlcnRodW1iXHJcbiAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJvcHRpb25zLmhhbmRsZXMuYXJpYS51cHBlclRodW1iXCJcclxuICAgICAgICBbYXR0ci5hcmlhLXZhbHVlbWluXT1cImdldFRodW1iVmFsdWUoc2xpZGVyVGh1bWIuTG93ZXIpIHx8IG9wdGlvbnM/LnRyYWNrPy5taW5cIlxyXG4gICAgICAgIFthdHRyLmFyaWEtdmFsdWVtYXhdPVwib3B0aW9ucz8udHJhY2s/Lm1heFwiXHJcbiAgICAgICAgW2F0dHIuYXJpYS12YWx1ZW5vd109XCJnZXRUaHVtYlZhbHVlKHNsaWRlclRodW1iLlVwcGVyKVwiXHJcbiAgICAgICAgW2F0dHIuYXJpYS12YWx1ZXRleHRdPVwiZ2V0QXJpYVZhbHVlVGV4dChzbGlkZXJUaHVtYi5VcHBlcilcIlxyXG4gICAgICAgIFtoaWRkZW5dPVwib3B0aW9ucy50eXBlICE9PSBzbGlkZXJUeXBlLlJhbmdlXCJcclxuICAgICAgICBbY2xhc3MuYWN0aXZlXT1cInRodW1icy51cHBlci5kcmFnXCJcclxuICAgICAgICBbc3R5bGUubGVmdC4lXT1cInRodW1icy51cHBlci5wb3NpdGlvblwiXHJcbiAgICAgICAgW3N0eWxlLnotaW5kZXhdPVwidGh1bWJzLnVwcGVyLm9yZGVyXCJcclxuICAgICAgICBbY2xhc3MuYnV0dG9uXT1cIm9wdGlvbnMuaGFuZGxlcy5zdHlsZSA9PT0gc2xpZGVyU3R5bGUuQnV0dG9uXCJcclxuICAgICAgICBbY2xhc3MubGluZV09XCJvcHRpb25zLmhhbmRsZXMuc3R5bGUgPT09IHNsaWRlclN0eWxlLkxpbmVcIlxyXG4gICAgICAgIFtjbGFzcy5uYXJyb3ddPVwib3B0aW9ucy50cmFjay5oZWlnaHQgPT09IHNsaWRlclNpemUuTmFycm93XCJcclxuICAgICAgICBbY2xhc3Mud2lkZV09XCJvcHRpb25zLnRyYWNrLmhlaWdodCA9PT0gc2xpZGVyU2l6ZS5XaWRlXCJcclxuICAgICAgICAoZHJhZ3N0YXJ0KT1cInRodW1iRXZlbnQoc2xpZGVyVGh1bWIuVXBwZXIsIHNsaWRlclRodW1iRXZlbnQuRHJhZ1N0YXJ0KTsgdXBwZXJ0aHVtYi5mb2N1cygpXCJcclxuICAgICAgICAoZHJhZyk9XCJ1cGRhdGVUaHVtYlBvc2l0aW9uKCRldmVudCwgc2xpZGVyVGh1bWIuVXBwZXIpXCJcclxuICAgICAgICAoZHJhZ2VuZCk9XCJ0aHVtYkV2ZW50KHNsaWRlclRodW1iLlVwcGVyLCBzbGlkZXJUaHVtYkV2ZW50LkRyYWdFbmQpXCJcclxuICAgICAgICAobW91c2VlbnRlcik9XCJ0aHVtYkV2ZW50KHNsaWRlclRodW1iLlVwcGVyLCBzbGlkZXJUaHVtYkV2ZW50Lk1vdXNlT3ZlcilcIlxyXG4gICAgICAgIChtb3VzZWxlYXZlKT1cInRodW1iRXZlbnQoc2xpZGVyVGh1bWIuVXBwZXIsIHNsaWRlclRodW1iRXZlbnQuTW91c2VMZWF2ZSlcIlxyXG4gICAgICAgIChmb2N1cyk9XCJ0aHVtYkV2ZW50KHNsaWRlclRodW1iLlVwcGVyLCBzbGlkZXJUaHVtYkV2ZW50Lk1vdXNlT3ZlcilcIlxyXG4gICAgICAgIChibHVyKT1cInRodW1iRXZlbnQoc2xpZGVyVGh1bWIuVXBwZXIsIHNsaWRlclRodW1iRXZlbnQuTW91c2VMZWF2ZSlcIlxyXG4gICAgICAgIChrZXlkb3duLkFycm93TGVmdCk9XCJzbmFwVG9OZWFyZXN0VGljayhzbGlkZXJUaHVtYi5VcHBlciwgc2xpZGVyU25hcC5BbGwsIGZhbHNlKTsgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIlxyXG4gICAgICAgIChrZXlkb3duLkFycm93UmlnaHQpPVwic25hcFRvTmVhcmVzdFRpY2soc2xpZGVyVGh1bWIuVXBwZXIsIHNsaWRlclNuYXAuQWxsLCB0cnVlKTsgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIlxyXG4gICAgICAgIChrZXlkb3duLkFycm93VXApPVwic25hcFRvTmVhcmVzdFRpY2soc2xpZGVyVGh1bWIuVXBwZXIsIHNsaWRlclNuYXAuQWxsLCBmYWxzZSk7ICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCJcclxuICAgICAgICAoa2V5ZG93bi5BcnJvd0Rvd24pPVwic25hcFRvTmVhcmVzdFRpY2soc2xpZGVyVGh1bWIuVXBwZXIsIHNsaWRlclNuYXAuQWxsLCB0cnVlKTsgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIlxyXG4gICAgICAgIChrZXlkb3duLlBhZ2VEb3duKT1cInNuYXBUb05lYXJlc3RUaWNrKHNsaWRlclRodW1iLlVwcGVyLCBzbGlkZXJTbmFwLk1ham9yLCBmYWxzZSk7ICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCJcclxuICAgICAgICAoa2V5ZG93bi5QYWdlVXApPVwic25hcFRvTmVhcmVzdFRpY2soc2xpZGVyVGh1bWIuVXBwZXIsIHNsaWRlclNuYXAuTWFqb3IsIHRydWUpOyAkZXZlbnQucHJldmVudERlZmF1bHQoKVwiXHJcbiAgICAgICAgKGtleWRvd24uSG9tZSk9XCJzbmFwVG9FbmQoc2xpZGVyVGh1bWIuVXBwZXIsIGZhbHNlKTsgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIlxyXG4gICAgICAgIChrZXlkb3duLkVuZCk9XCJzbmFwVG9FbmQoc2xpZGVyVGh1bWIuVXBwZXIsIHRydWUpOyAkZXZlbnQucHJldmVudERlZmF1bHQoKVwiPlxyXG5cclxuICAgICAgICA8IS0tIFVwcGVyIFRodW1iIENhbGxvdXQgLS0+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRvb2x0aXAgdG9wIHRvb2x0aXAtdXBwZXJcIiAjdXBwZXJUb29sdGlwXHJcbiAgICAgICAgICAgIFtjbGFzcy50b29sdGlwLWR5bmFtaWNdPVwib3B0aW9ucy5oYW5kbGVzLmNhbGxvdXQudHJpZ2dlciA9PT0gc2xpZGVyQ2FsbG91dFRyaWdnZXIuRHluYW1pYyAmJiB0aHVtYnMudXBwZXIuZHJhZyA9PT0gZmFsc2VcIlxyXG4gICAgICAgICAgICBbc3R5bGUub3BhY2l0eV09XCJ0b29sdGlwcy51cHBlci52aXNpYmxlID8gMSA6IDBcIlxyXG4gICAgICAgICAgICBbc3R5bGUubGVmdC5weF09XCJ0b29sdGlwcy51cHBlci5wb3NpdGlvblwiPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvb2x0aXAtYXJyb3dcIiBbc3R5bGUuYm9yZGVyLXRvcC1jb2xvcl09XCJvcHRpb25zLmhhbmRsZXMuY2FsbG91dC5iYWNrZ3JvdW5kXCI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiXHJcbiAgICAgICAgICAgICAgICAqbmdJZj1cIm9wdGlvbnMudHlwZSA9PT0gc2xpZGVyVHlwZS5SYW5nZVwiXHJcbiAgICAgICAgICAgICAgICBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJvcHRpb25zLmhhbmRsZXMuY2FsbG91dC5iYWNrZ3JvdW5kXCJcclxuICAgICAgICAgICAgICAgIFtzdHlsZS5jb2xvcl09XCJvcHRpb25zLmhhbmRsZXMuY2FsbG91dC5jb2xvclwiPlxyXG4gICAgICAgICAgICAgICAge3sgdG9vbHRpcHMudXBwZXIubGFiZWwgfX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8IS0tIFNlY3Rpb24gb2YgVHJhY2sgQWJvdmVyIFVwcGVyIFRodW1iIC0tPlxyXG4gICAgPGRpdiBjbGFzcz1cInRyYWNrLXNlY3Rpb24gdHJhY2staGlnaGVyXCIgW3N0eWxlLmZsZXgtZ3Jvd109XCJ0cmFja3MudXBwZXIuc2l6ZVwiIFtzdHlsZS5iYWNrZ3JvdW5kXT1cInRyYWNrcy51cHBlci5jb2xvclwiPjwvZGl2PlxyXG5cclxuPC9kaXY+XHJcblxyXG48IS0tIENoYXJ0IFRpY2tzIGFuZCBUaWNrIExhYmVscyAtLT5cclxuPGRpdiBjbGFzcz1cInRpY2stY29udGFpbmVyXCJcclxuICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxyXG4gICAgKm5nSWY9XCIob3B0aW9ucy50cmFjay50aWNrcy5tYWpvci5zaG93IHx8IG9wdGlvbnMudHJhY2sudGlja3MubWlub3Iuc2hvdykgJiYgb3B0aW9ucy5oYW5kbGVzLmNhbGxvdXQudHJpZ2dlciAhPT0gc2xpZGVyQ2FsbG91dFRyaWdnZXIuRHluYW1pY1wiXHJcbiAgICBbY2xhc3Muc2hvdy1sYWJlbHNdPVwib3B0aW9ucy50cmFjay50aWNrcy5tYWpvci5sYWJlbHMgfHwgb3B0aW9ucy50cmFjay50aWNrcy5taW5vci5sYWJlbHNcIj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwidGlja1wiXHJcbiAgICAgICAgKm5nRm9yPVwibGV0IHRpY2sgb2YgdGlja3NcIlxyXG4gICAgICAgIFtjbGFzcy5tYWpvcl09XCJ0aWNrLnR5cGUgPT09IHNsaWRlclRpY2tUeXBlLk1ham9yXCJcclxuICAgICAgICBbY2xhc3MubWlub3JdPVwidGljay50eXBlID09PSBzbGlkZXJUaWNrVHlwZS5NaW5vclwiXHJcbiAgICAgICAgW3N0eWxlLmxlZnQuJV09XCJ0aWNrLnBvc2l0aW9uXCJcclxuICAgICAgICBbaGlkZGVuXT1cIiF0aWNrLnNob3dUaWNrc1wiPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGljay1pbmRpY2F0b3JcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGljay1sYWJlbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIFtoaWRkZW5dPVwiIXRpY2suc2hvd0xhYmVsc1wiPnt7IHRpY2subGFiZWwgfX08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5gLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIFNsaWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgRG9DaGVjayB7XHJcblxyXG4gICAgQElucHV0KCkgdmFsdWU6IFNsaWRlclZhbHVlIHwgbnVtYmVyID0gMDtcclxuICAgIEBJbnB1dCgpIG9wdGlvbnM6IFNsaWRlck9wdGlvbnM7XHJcbiAgICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxTbGlkZXJWYWx1ZSB8IG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPFNsaWRlclZhbHVlIHwgbnVtYmVyPigpO1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ2xvd2VyVG9vbHRpcCcpIGxvd2VyVG9vbHRpcDogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoJ3VwcGVyVG9vbHRpcCcpIHVwcGVyVG9vbHRpcDogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoJ3RyYWNrJykgdHJhY2s6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgLy8gc3RvcmUgY3VycmVudCB2YWx1ZXMgZm9yIGRlZXAgY2hhbmdlIGRldGVjdGlvblxyXG4gICAgcHJpdmF0ZSBfdmFsdWU6IFNsaWRlclZhbHVlIHwgbnVtYmVyO1xyXG5cclxuICAgIC8vIGV4cG9zZSBlbnVtcyB0byBBbmd1bGFyIHZpZXdcclxuICAgIHNsaWRlclR5cGUgPSBTbGlkZXJUeXBlO1xyXG4gICAgc2xpZGVyU3R5bGUgPSBTbGlkZXJTdHlsZTtcclxuICAgIHNsaWRlclNpemUgPSBTbGlkZXJTaXplO1xyXG4gICAgc2xpZGVyU25hcCA9IFNsaWRlclNuYXA7XHJcbiAgICBzbGlkZXJUaHVtYiA9IFNsaWRlclRodW1iO1xyXG4gICAgc2xpZGVyVGlja1R5cGUgPSBTbGlkZXJUaWNrVHlwZTtcclxuICAgIHNsaWRlclRodW1iRXZlbnQgPSBTbGlkZXJUaHVtYkV2ZW50O1xyXG4gICAgc2xpZGVyQ2FsbG91dFRyaWdnZXIgPSBTbGlkZXJDYWxsb3V0VHJpZ2dlcjtcclxuXHJcbiAgICB0cmFja3MgPSB7XHJcbiAgICAgICAgbG93ZXI6IHtcclxuICAgICAgICAgICAgc2l6ZTogMCxcclxuICAgICAgICAgICAgY29sb3I6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtaWRkbGU6IHtcclxuICAgICAgICAgICAgc2l6ZTogMCxcclxuICAgICAgICAgICAgY29sb3I6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB1cHBlcjoge1xyXG4gICAgICAgICAgICBzaXplOiAwLFxyXG4gICAgICAgICAgICBjb2xvcjogJydcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHRvb2x0aXBzID0ge1xyXG4gICAgICAgIGxvd2VyOiB7XHJcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogMCxcclxuICAgICAgICAgICAgbGFiZWw6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB1cHBlcjoge1xyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgcG9zaXRpb246IDAsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnJ1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdGh1bWJzID0ge1xyXG4gICAgICAgIGxvd2VyOiB7XHJcbiAgICAgICAgICAgIGhvdmVyOiBmYWxzZSxcclxuICAgICAgICAgICAgZHJhZzogZmFsc2UsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAwLFxyXG4gICAgICAgICAgICBvcmRlcjogMTAwLFxyXG4gICAgICAgICAgICB2YWx1ZTogbnVsbCBhcyBudW1iZXJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVwcGVyOiB7XHJcbiAgICAgICAgICAgIGhvdmVyOiBmYWxzZSxcclxuICAgICAgICAgICAgZHJhZzogZmFsc2UsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAwLFxyXG4gICAgICAgICAgICBvcmRlcjogMTAxLFxyXG4gICAgICAgICAgICB2YWx1ZTogbnVsbCBhcyBudW1iZXJcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIHN0b3JlIGFsbCB0aGUgdGlja3MgdG8gZGlzcGxheVxyXG4gICAgdGlja3M6IFNsaWRlclRpY2tbXSA9IFtdO1xyXG4gICAgZGVmYXVsdE9wdGlvbnM6IFNsaWRlck9wdGlvbnM7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29sb3JTZXJ2aWNlOiBDb2xvclNlcnZpY2UsIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG5cclxuICAgICAgICAvLyBzZXR1cCBkZWZhdWx0IG9wdGlvbnNcclxuICAgICAgICB0aGlzLmRlZmF1bHRPcHRpb25zID0ge1xyXG4gICAgICAgICAgICB0eXBlOiBTbGlkZXJUeXBlLlZhbHVlLFxyXG4gICAgICAgICAgICBoYW5kbGVzOiB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZTogU2xpZGVyU3R5bGUuQnV0dG9uLFxyXG4gICAgICAgICAgICAgICAgY2FsbG91dDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXI6IFNsaWRlckNhbGxvdXRUcmlnZ2VyLk5vbmUsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogY29sb3JTZXJ2aWNlLmdldENvbG9yKCdncmV5MicpLnRvSGV4KCksXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6ICh2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHwgbnVtYmVyID0+IHZhbHVlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAga2V5Ym9hcmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBtYWpvcjogNSxcclxuICAgICAgICAgICAgICAgICAgICBtaW5vcjogMVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGFyaWE6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aHVtYjogJ1NsaWRlciB2YWx1ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgbG93ZXJUaHVtYjogJ1NsaWRlciBsb3dlciB2YWx1ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgdXBwZXJUaHVtYjogJ1NsaWRlciB1cHBlciB2YWx1ZSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdHJhY2s6IHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogU2xpZGVyU2l6ZS5XaWRlLFxyXG4gICAgICAgICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICAgICAgICAgbWF4OiAxMDAsXHJcbiAgICAgICAgICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNuYXA6IFNsaWRlclNuYXAuTm9uZSxcclxuICAgICAgICAgICAgICAgICAgICBtYWpvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwczogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiAodmFsdWU6IG51bWJlcik6IHN0cmluZyB8IG51bWJlciA9PiB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgbWlub3I6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RlcHM6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsczogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogKHZhbHVlOiBudW1iZXIpOiBzdHJpbmcgfCBudW1iZXIgPT4gdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY29sb3JzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG93ZXI6IGNvbG9yU2VydmljZS5nZXRDb2xvcignZ3JleTYnKS50b0hleCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJhbmdlOiBjb2xvclNlcnZpY2UuZ2V0Q29sb3IoJ2FjY2VudCcpLnNldEFscGhhKDAuNzUpLnRvUmdiYSgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGhpZ2hlcjogY29sb3JTZXJ2aWNlLmdldENvbG9yKCdncmV5NicpLnRvSGV4KClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlT3B0aW9ucygpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWVzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0VGh1bWJTdGF0ZShTbGlkZXJUaHVtYi5Mb3dlciwgZmFsc2UsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNldFRodW1iU3RhdGUoU2xpZGVyVGh1bWIuVXBwZXIsIGZhbHNlLCBmYWxzZSk7XHJcblxyXG4gICAgICAgIC8vIGVtaXQgdGhlIGluaXRpYWwgdmFsdWVcclxuICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlLm5leHQodGhpcy5jbG9uZSh0aGlzLnZhbHVlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdEb0NoZWNrKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5kZXRlY3RWYWx1ZUNoYW5nZSh0aGlzLnZhbHVlLCB0aGlzLl92YWx1ZSkpIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZXMoKTtcclxuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLmNsb25lKHRoaXMudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gcGVyc2lzdGVudCB0b29sdGlwcyB3aWxsIG5lZWQgcG9zaXRpb25lZCBjb3JyZWN0bHkgYXQgdGhpcyBzdGFnZVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRvb2x0aXBQb3NpdGlvbihTbGlkZXJUaHVtYi5Mb3dlcik7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVG9vbHRpcFBvc2l0aW9uKFNsaWRlclRodW1iLlVwcGVyKTtcclxuXHJcbiAgICAgICAgICAgIC8vIG1hcmsgYXMgZGlydHlcclxuICAgICAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc25hcFRvTmVhcmVzdFRpY2sodGh1bWI6IFNsaWRlclRodW1iLCBzbmFwVGFyZ2V0OiBTbGlkZXJTbmFwLCBmb3J3YXJkczogYm9vbGVhbik6IHZvaWQge1xyXG5cclxuICAgICAgICAvLyBnZXQgdGhlIHZhbHVlIGZvciB0aGUgdGh1bWJcclxuICAgICAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLmdldFRodW1iU3RhdGUodGh1bWIpO1xyXG5cclxuICAgICAgICAvLyBnZXQgdGhlIGNsb3Nlc3QgdGlja3MgLSByZW1vdmUgYW55IHRpY2sgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBpdFxyXG4gICAgICAgIGNvbnN0IGNsb3Nlc3QgPSB0aGlzLmdldFRpY2tEaXN0YW5jZXModmFsdWUsIHRodW1iLCBzbmFwVGFyZ2V0KVxyXG4gICAgICAgICAgICAuZmlsdGVyKHRpY2sgPT4gdGljay52YWx1ZSAhPT0gdmFsdWUpXHJcbiAgICAgICAgICAgIC5maW5kKHRpY2sgPT4gZm9yd2FyZHMgPyB0aWNrLnZhbHVlID4gdmFsdWUgOiB0aWNrLnZhbHVlIDwgdmFsdWUpO1xyXG5cclxuICAgICAgICAvLyBJZiB3ZSBoYXZlIG5vIHRpY2tzIHRoZW4gbW92ZSBieSBhIHByZWRlZmluZWQgYW1vdW50XHJcbiAgICAgICAgaWYgKGNsb3Nlc3QpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0VGh1bWJWYWx1ZSh0aHVtYiwgdGhpcy52YWxpZGF0ZVZhbHVlKHRodW1iLCBjbG9zZXN0LnZhbHVlKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzdGVwID0gc25hcFRhcmdldCA9PT0gU2xpZGVyU25hcC5NYWpvciA/IHRoaXMub3B0aW9ucy5oYW5kbGVzLmtleWJvYXJkLm1ham9yIDogdGhpcy5vcHRpb25zLmhhbmRsZXMua2V5Ym9hcmQubWlub3I7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0VGh1bWJWYWx1ZSh0aHVtYiwgdGhpcy52YWxpZGF0ZVZhbHVlKHRodW1iLCB2YWx1ZSArIChmb3J3YXJkcyA/IHN0ZXAgOiAtc3RlcCkpKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc25hcFRvRW5kKHRodW1iOiBTbGlkZXJUaHVtYiwgZm9yd2FyZHM6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldFRodW1iVmFsdWUodGh1bWIsIHRoaXMudmFsaWRhdGVWYWx1ZSh0aHVtYiwgZm9yd2FyZHMgPyB0aGlzLm9wdGlvbnMudHJhY2subWF4IDogdGhpcy5vcHRpb25zLnRyYWNrLm1pbikpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRodW1iVmFsdWUodGh1bWI6IFNsaWRlclRodW1iKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRUaHVtYlN0YXRlKHRodW1iKS52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGb3JtYXR0ZWRWYWx1ZSh0aHVtYjogU2xpZGVyVGh1bWIpOiBzdHJpbmcgfCBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaGFuZGxlcy5jYWxsb3V0LmZvcm1hdHRlcih0aGlzLmdldFRodW1iU3RhdGUodGh1bWIpLnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFRodW1iU3RhdGUodGh1bWI6IFNsaWRlclRodW1iKSB7XHJcbiAgICAgICAgcmV0dXJuIHRodW1iID09PSBTbGlkZXJUaHVtYi5Mb3dlciA/IHRoaXMudGh1bWJzLmxvd2VyIDogdGhpcy50aHVtYnMudXBwZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRUaHVtYlN0YXRlKHRodW1iOiBTbGlkZXJUaHVtYiwgaG92ZXI6IGJvb2xlYW4sIGRyYWc6IGJvb2xlYW4pIHtcclxuXHJcbiAgICAgICAgaWYgKHRodW1iID09PSBTbGlkZXJUaHVtYi5Mb3dlcikge1xyXG4gICAgICAgICAgICB0aGlzLnRodW1icy5sb3dlci5ob3ZlciA9IGhvdmVyO1xyXG4gICAgICAgICAgICB0aGlzLnRodW1icy5sb3dlci5kcmFnID0gZHJhZztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRodW1icy51cHBlci5ob3ZlciA9IGhvdmVyO1xyXG4gICAgICAgICAgICB0aGlzLnRodW1icy51cHBlci5kcmFnID0gZHJhZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgdG9vbHRpcHNcclxuICAgICAgICB0aGlzLnVwZGF0ZVRvb2x0aXBzKHRodW1iKTtcclxuICAgIH1cclxuXHJcbiAgICB0aHVtYkV2ZW50KHRodW1iOiBTbGlkZXJUaHVtYiwgZXZlbnQ6IFNsaWRlclRodW1iRXZlbnQpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gZ2V0IHRoZSBjdXJyZW50IHRodW1iIHN0YXRlXHJcbiAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFRodW1iU3RhdGUodGh1bWIpO1xyXG5cclxuICAgICAgICAvLyB1cGRhdGUgYmFzZWQgdXBvbiBldmVudFxyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgU2xpZGVyVGh1bWJFdmVudC5EcmFnU3RhcnQ6XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5kcmFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBTbGlkZXJUaHVtYkV2ZW50LkRyYWdFbmQ6XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5kcmFnID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgU2xpZGVyVGh1bWJFdmVudC5Nb3VzZU92ZXI6XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5ob3ZlciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgU2xpZGVyVGh1bWJFdmVudC5Nb3VzZUxlYXZlOlxyXG4gICAgICAgICAgICAgICAgc3RhdGUuaG92ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBTbGlkZXJUaHVtYkV2ZW50Lk5vbmU6XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5kcmFnID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5ob3ZlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB1cGRhdGUgdGhlIHRodW1iIHN0YXRlXHJcbiAgICAgICAgdGhpcy5zZXRUaHVtYlN0YXRlKHRodW1iLCBzdGF0ZS5ob3Zlciwgc3RhdGUuZHJhZyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXJpYVZhbHVlVGV4dCh0aHVtYjogU2xpZGVyVGh1bWIpOiBzdHJpbmcgfCBudW1iZXIge1xyXG4gICAgICAgIC8vIGdldCB0aGUgY3VycmVudCB0aHVtYiB2YWx1ZVxyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRUaHVtYlZhbHVlKHRodW1iKTtcclxuXHJcbiAgICAgICAgLy8gZ2V0IGFsbCB0aGUgdGlja3NcclxuICAgICAgICBjb25zdCB0aWNrID0gdGhpcy50aWNrcy5maW5kKF90aWNrID0+IF90aWNrLnZhbHVlID09PSB2YWx1ZSk7XHJcblxyXG4gICAgICAgIGlmICh0aWNrICYmIHRpY2subGFiZWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRpY2subGFiZWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBvdGhlcndpc2Ugc2ltcGx5IGRpc3BsYXkgdGhlIGZvcm1hdHRlZCB2YWx1ZVxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEZvcm1hdHRlZFZhbHVlKHRodW1iKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZVRvb2x0aXBzKHRodW1iOiBTbGlkZXJUaHVtYik6IHZvaWQge1xyXG5cclxuICAgICAgICBsZXQgdmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRUaHVtYlN0YXRlKHRodW1iKTtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLm9wdGlvbnMuaGFuZGxlcy5jYWxsb3V0LnRyaWdnZXIpIHtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgU2xpZGVyQ2FsbG91dFRyaWdnZXIuUGVyc2lzdGVudDpcclxuICAgICAgICAgICAgICAgIHZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFNsaWRlckNhbGxvdXRUcmlnZ2VyLkRyYWc6XHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlID0gc3RhdGUuZHJhZztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBTbGlkZXJDYWxsb3V0VHJpZ2dlci5Ib3ZlcjpcclxuICAgICAgICAgICAgICAgIHZpc2libGUgPSBzdGF0ZS5ob3ZlciB8fCBzdGF0ZS5kcmFnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFNsaWRlckNhbGxvdXRUcmlnZ2VyLkR5bmFtaWM6XHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIHRoZSBzdGF0ZSBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgdGh1bWJcclxuICAgICAgICB0aGlzLmdldFRvb2x0aXAodGh1bWIpLnZpc2libGUgPSB2aXNpYmxlO1xyXG5cclxuICAgICAgICAvLyB1cGRhdGUgdGhlIHRvb2x0aXAgdGV4dFxyXG4gICAgICAgIHRoaXMudXBkYXRlVG9vbHRpcFRleHQodGh1bWIpO1xyXG5cclxuICAgICAgICAvLyB1cGRhdGUgdGhlIHRvb2x0aXAgcG9zaXRpb25zXHJcbiAgICAgICAgdGhpcy51cGRhdGVUb29sdGlwUG9zaXRpb24odGh1bWIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlVG9vbHRpcFRleHQodGh1bWI6IFNsaWRlclRodW1iKSB7XHJcblxyXG4gICAgICAgIC8vIGdldCB0aGUgdGh1bWIgdmFsdWVcclxuICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLmdldFRodW1iU3RhdGUodGh1bWIpO1xyXG4gICAgICAgIGxldCB0b29sdGlwID0gdGhpcy5nZXRUb29sdGlwKHRodW1iKTtcclxuXHJcbiAgICAgICAgLy8gc3RvcmUgdGhlIGZvcm1hdHRlZCBsYWJlbFxyXG4gICAgICAgIHRvb2x0aXAubGFiZWwgPSB0aGlzLmdldEZvcm1hdHRlZFZhbHVlKHRodW1iKS50b1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0VG9vbHRpcEVsZW1lbnQodGh1bWI6IFNsaWRlclRodW1iKTogRWxlbWVudFJlZiB7XHJcbiAgICAgICAgcmV0dXJuIHRodW1iID09PSBTbGlkZXJUaHVtYi5Mb3dlciA/IHRoaXMubG93ZXJUb29sdGlwIDogdGhpcy51cHBlclRvb2x0aXA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRUb29sdGlwKHRodW1iOiBTbGlkZXJUaHVtYikge1xyXG4gICAgICAgIHJldHVybiB0aHVtYiA9PT0gU2xpZGVyVGh1bWIuTG93ZXIgPyB0aGlzLnRvb2x0aXBzLmxvd2VyIDogdGhpcy50b29sdGlwcy51cHBlcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZVRvb2x0aXBQb3NpdGlvbih0aHVtYjogU2xpZGVyVGh1bWIpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgY29uc3QgdG9vbHRpcCA9IHRoaXMuZ2V0VG9vbHRpcCh0aHVtYik7XHJcblxyXG4gICAgICAgIC8vIGlmIHRvb2x0aXAgaXMgbm90IHZpc2libGUgdGhlbiBzdG9wIGhlcmVcclxuICAgICAgICBpZiAodG9vbHRpcC52aXNpYmxlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdG9vbHRpcEVsZW1lbnQgPSB0aGlzLmdldFRvb2x0aXBFbGVtZW50KHRodW1iKTtcclxuXHJcbiAgICAgICAgLy8gZ2V0IHRoZSBlbGVtZW50IHdpZHRoc1xyXG4gICAgICAgIGxldCB0aHVtYldpZHRoOiBudW1iZXI7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaGFuZGxlcy5zdHlsZSA9PT0gU2xpZGVyU3R5bGUuQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHRodW1iV2lkdGggPSB0aGlzLm9wdGlvbnMudHJhY2suaGVpZ2h0ID09PSBTbGlkZXJTaXplLk5hcnJvdyA/IDE2IDogMjQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGh1bWJXaWR0aCA9IDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdG9vbHRpcFdpZHRoID0gdG9vbHRpcEVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcclxuXHJcbiAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSB0b29sdGlwcyBuZXcgcG9zaXRpb25cclxuICAgICAgICBsZXQgdG9vbHRpcFBvc2l0aW9uID0gTWF0aC5jZWlsKCh0b29sdGlwV2lkdGggLSB0aHVtYldpZHRoKSAvIDIpO1xyXG5cclxuICAgICAgICAvLyB1cGRhdGUgdG9vbHRpcCBwb3NpdGlvblxyXG4gICAgICAgIHRvb2x0aXAucG9zaXRpb24gPSAtdG9vbHRpcFBvc2l0aW9uO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnR5cGUgPT09IFNsaWRlclR5cGUuUmFuZ2UgJiYgdGhpcy5vcHRpb25zLmhhbmRsZXMuY2FsbG91dC50cmlnZ2VyID09PSBTbGlkZXJDYWxsb3V0VHJpZ2dlci5EeW5hbWljKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJldmVudFRvb2x0aXBPdmVybGFwKHRvb2x0aXApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHByZXZlbnRUb29sdGlwT3ZlcmxhcCh0b29sdGlwOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB0cmFja1dpZHRoID0gdGhpcy50cmFjay5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xyXG5cclxuICAgICAgICBjb25zdCBsb3dlciA9ICh0cmFja1dpZHRoIC8gMTAwKSAqIHRoaXMudGh1bWJzLmxvd2VyLnBvc2l0aW9uO1xyXG4gICAgICAgIGNvbnN0IHVwcGVyID0gKHRyYWNrV2lkdGggLyAxMDApICogdGhpcy50aHVtYnMudXBwZXIucG9zaXRpb247XHJcblxyXG4gICAgICAgIGNvbnN0IGxvd2VyV2lkdGggPSB0aGlzLmxvd2VyVG9vbHRpcC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIC8gMjtcclxuICAgICAgICBjb25zdCB1cHBlcldpZHRoID0gdGhpcy51cHBlclRvb2x0aXAubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aCAvIDI7XHJcblxyXG4gICAgICAgIGNvbnN0IGRpZmYgPSAobG93ZXIgKyBsb3dlcldpZHRoKSAtICh1cHBlciAtIHVwcGVyV2lkdGgpO1xyXG5cclxuICAgICAgICAvLyBpZiB0aGUgdG9vbHRpcHMgYXJlIGNsb3NlciB0aGFuIDE2cHggdGhlbiBhZGp1c3Qgc28gdGhlIGRvbnQgbW92ZSBhbnkgY2xvc2VcclxuICAgICAgICBpZiAoZGlmZiA+IDApIHtcclxuICAgICAgICAgICAgaWYgKHRvb2x0aXAgPT09IHRoaXMudG9vbHRpcHMubG93ZXIgJiYgdGhpcy50aHVtYnMubG93ZXIuZHJhZyA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHRvb2x0aXAucG9zaXRpb24gLT0gKGRpZmYgLyAyKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0b29sdGlwID09PSB0aGlzLnRvb2x0aXBzLnVwcGVyICYmIHRoaXMudGh1bWJzLnVwcGVyLmRyYWcgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICB0b29sdGlwLnBvc2l0aW9uICs9IChkaWZmIC8gMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjbGFtcCh2YWx1ZTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgbWluKSwgbWF4KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVUaHVtYlBvc2l0aW9uKGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCwgdGh1bWI6IFNsaWRlclRodW1iKTogdm9pZCB7XHJcblxyXG4gICAgICAgIC8vIGdldCBldmVudCBwb3NpdGlvbiAtIGVpdGhlciBtb3VzZSBvciB0b3VjaFxyXG4gICAgICAgIGxldCBldmVudFBvc2l0aW9uID0gZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50ID8gZXZlbnQuY2xpZW50WCA6IGV2ZW50LnRvdWNoZXMgJiYgZXZlbnQudG91Y2hlcy5sZW5ndGggPiAwID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIDogbnVsbDtcclxuXHJcbiAgICAgICAgLy8gaWYgZXZlbnQgcG9zaXRpb24gaXMgbnVsbCBkbyBub3RoaW5nXHJcbiAgICAgICAgaWYgKGV2ZW50UG9zaXRpb24gPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZ2V0IG1vdXNlIHBvc2l0aW9uXHJcbiAgICAgICAgbGV0IG1vdXNlWCA9IHdpbmRvdy5wYWdlWE9mZnNldCArIGV2ZW50UG9zaXRpb247XHJcblxyXG4gICAgICAgIC8vIGdldCB0cmFjayBzaXplIGFuZCBwb3NpdGlvblxyXG4gICAgICAgIGxldCB0cmFja0JvdW5kcyA9IHRoaXMudHJhY2submF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICAgICAgLy8gcmVzdHJpY3QgdGhlIHZhbHVlIHdpdGhpbiB0aGUgcmFuZ2Ugc2l6ZVxyXG4gICAgICAgIGxldCBwb3NpdGlvbiA9IHRoaXMuY2xhbXAobW91c2VYIC0gdHJhY2tCb3VuZHMubGVmdCwgMCwgdHJhY2tCb3VuZHMud2lkdGgpO1xyXG5cclxuICAgICAgICAvLyBnZXQgZnJhY3Rpb24gcmVwcmVzZW50YXRpb24gb2YgbG9jYXRpb24gd2l0aGluIHRoZSB0cmFja1xyXG4gICAgICAgIGxldCBmcmFjdGlvbiA9IChwb3NpdGlvbiAvIHRyYWNrQm91bmRzLndpZHRoKTtcclxuXHJcbiAgICAgICAgLy8gY29udmVydCB0byB2YWx1ZSB3aXRoaW4gdGhlIHJhbmdlXHJcbiAgICAgICAgbGV0IHZhbHVlID0gKCh0aGlzLm9wdGlvbnMudHJhY2subWF4IC0gdGhpcy5vcHRpb25zLnRyYWNrLm1pbikgKiBmcmFjdGlvbikgKyB0aGlzLm9wdGlvbnMudHJhY2subWluO1xyXG5cclxuICAgICAgICAvLyBlbnN1cmUgdmFsdWUgaXMgdmFsaWRcclxuICAgICAgICB2YWx1ZSA9IHRoaXMudmFsaWRhdGVWYWx1ZSh0aHVtYiwgdmFsdWUpO1xyXG5cclxuICAgICAgICAvLyBzbmFwIHRvIGEgdGljayBpZiByZXF1aXJlZFxyXG4gICAgICAgIHZhbHVlID0gdGhpcy5zbmFwVG9UaWNrKHZhbHVlLCB0aHVtYik7XHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgdmFsdWUgYWNjb3JkaW5nbHlcclxuICAgICAgICB0aGlzLnNldFRodW1iVmFsdWUodGh1bWIsIHZhbHVlKTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVPcmRlcih0aHVtYik7XHJcbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZXMoKTtcclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIHRvb2x0aXAgdGV4dCAmIHBvc2l0aW9uXHJcbiAgICAgICAgdGhpcy51cGRhdGVUb29sdGlwVGV4dCh0aHVtYik7XHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgcG9zaXRpb24gb2YgYWxsIHZpc2libGUgdG9vbHRpcHNcclxuICAgICAgICB0aGlzLnVwZGF0ZVRvb2x0aXBQb3NpdGlvbihTbGlkZXJUaHVtYi5Mb3dlcik7XHJcbiAgICAgICAgdGhpcy51cGRhdGVUb29sdGlwUG9zaXRpb24oU2xpZGVyVGh1bWIuVXBwZXIpO1xyXG5cclxuICAgICAgICAvLyBtYXJrIGFzIGRpcnR5IGZvciBjaGFuZ2UgZGV0ZWN0aW9uXHJcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVPcmRlcih0aHVtYjogU2xpZGVyVGh1bWIpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgbGV0IGxvd2VyID0gdGh1bWIgPT09IFNsaWRlclRodW1iLkxvd2VyID8gMTAxIDogMTAwO1xyXG4gICAgICAgIGxldCB1cHBlciA9IHRodW1iID09PSBTbGlkZXJUaHVtYi5Mb3dlciA/IDEwMCA6IDEwMTtcclxuXHJcbiAgICAgICAgLy8gVGhlIG1vc3QgcmVjZW50bHkgdXNlZCB0aHVtYiBzaG91bGQgYmUgYWJvdmVcclxuICAgICAgICB0aGlzLnRodW1icy5sb3dlci5vcmRlciA9IGxvd2VyO1xyXG4gICAgICAgIHRoaXMudGh1bWJzLnVwcGVyLm9yZGVyID0gdXBwZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRUaWNrRGlzdGFuY2VzKHZhbHVlOiBudW1iZXIsIHRodW1iOiBTbGlkZXJUaHVtYiwgc25hcFRhcmdldDogU2xpZGVyU25hcCk6IFNsaWRlclRpY2tbXSB7XHJcblxyXG4gICAgICAgIC8vIGlmIHNuYXAgdGFyZ2V0IGlzIG5vbmUgdGhlbiByZXR1cm4gb3JpZ2luYWwgdmFsdWVcclxuICAgICAgICBpZiAoc25hcFRhcmdldCA9PT0gU2xpZGVyU25hcC5Ob25lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGdldCBmaWx0ZXJlZCB0aWNrc1xyXG4gICAgICAgIGxldCB0aWNrczogU2xpZGVyVGlja1tdO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHNuYXBUYXJnZXQpIHtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgU2xpZGVyU25hcC5NaW5vcjpcclxuICAgICAgICAgICAgICAgIHRpY2tzID0gdGhpcy50aWNrcy5maWx0ZXIodGljayA9PiB0aWNrLnR5cGUgPT09IFNsaWRlclRpY2tUeXBlLk1pbm9yKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBTbGlkZXJTbmFwLk1ham9yOlxyXG4gICAgICAgICAgICAgICAgdGlja3MgPSB0aGlzLnRpY2tzLmZpbHRlcih0aWNrID0+IHRpY2sudHlwZSA9PT0gU2xpZGVyVGlja1R5cGUuTWFqb3IpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGlja3MgPSB0aGlzLnRpY2tzLnNsaWNlKDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZ2V0IHRoZSB0cmFjayBsaW1pdFxyXG4gICAgICAgIGxldCBsb3dlckxpbWl0ID0gdGhpcy5vcHRpb25zLnRyYWNrLm1pbjtcclxuICAgICAgICBsZXQgdXBwZXJMaW1pdCA9IHRoaXMub3B0aW9ucy50cmFjay5tYXg7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMudHlwZSA9PT0gU2xpZGVyVHlwZS5SYW5nZSAmJiB0aHVtYiA9PT0gU2xpZGVyVGh1bWIuTG93ZXIpIHtcclxuICAgICAgICAgICAgdXBwZXJMaW1pdCA9IHRoaXMudGh1bWJzLnVwcGVyLnZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy50eXBlID09PSBTbGlkZXJUeXBlLlJhbmdlICYmIHRodW1iID09PSBTbGlkZXJUaHVtYi5VcHBlcikge1xyXG4gICAgICAgICAgICBsb3dlckxpbWl0ID0gdGhpcy50aHVtYnMubG93ZXIudmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBGaW5kIHRoZSBjbG9zZXN0IHRpY2sgdG8gdGhlIGN1cnJlbnQgcG9zaXRpb25cclxuICAgICAgICBjb25zdCByYW5nZSA9IHRpY2tzLmZpbHRlcih0aWNrID0+IHRpY2sudmFsdWUgPj0gbG93ZXJMaW1pdCAmJiB0aWNrLnZhbHVlIDw9IHVwcGVyTGltaXQpO1xyXG5cclxuICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbm8gY2xvc2UgdGlja3MgaW4gdGhlIHZhbGlkIHJhbmdlIHRoZW4gZG9udCBzbmFwXHJcbiAgICAgICAgaWYgKHJhbmdlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmFuZ2Uuc29ydCgodGlja09uZSwgdGlja1R3bykgPT4ge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdGlja09uZURlbHRhID0gTWF0aC5tYXgodGlja09uZS52YWx1ZSwgdmFsdWUpIC0gTWF0aC5taW4odGlja09uZS52YWx1ZSwgdmFsdWUpO1xyXG4gICAgICAgICAgICBjb25zdCB0aWNrVHdvRGVsdGEgPSBNYXRoLm1heCh0aWNrVHdvLnZhbHVlLCB2YWx1ZSkgLSBNYXRoLm1pbih0aWNrVHdvLnZhbHVlLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gdGlja09uZURlbHRhIC0gdGlja1R3b0RlbHRhO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc25hcFRvVGljayh2YWx1ZTogbnVtYmVyLCB0aHVtYjogU2xpZGVyVGh1bWIpOiBudW1iZXIge1xyXG5cclxuICAgICAgICBjb25zdCB0aWNrRGlzdGFuY2VzID0gdGhpcy5nZXRUaWNrRGlzdGFuY2VzKHZhbHVlLCB0aHVtYiwgdGhpcy5vcHRpb25zLnRyYWNrLnRpY2tzLnNuYXApO1xyXG5cclxuICAgICAgICAvLyBpZiB0aGVyZSBhcmUgbm8gdGlja3MgcmV0dXJuIHRoZSBjdXJyZW50IHZhbHVlXHJcbiAgICAgICAgaWYgKHRpY2tEaXN0YW5jZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGdldCB0aGUgY2xvc2VzdCB0aWNrXHJcbiAgICAgICAgcmV0dXJuIHRpY2tEaXN0YW5jZXNbMF0udmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB2YWxpZGF0ZVZhbHVlKHRodW1iOiBTbGlkZXJUaHVtYiwgdmFsdWU6IG51bWJlcik6IG51bWJlciB7XHJcblxyXG4gICAgICAgIC8vIGlmIHNsaWRlciBpcyBub3QgYSByYW5nZSB2YWx1ZSBpcyBhbHdheXMgdmFsaWQgcHJvdmlkaW5nIGl0IGlzIHdpdGhpbiB0aGUgY2hhcnQgbWluIGFuZCBtYXggdmFsdWVzXHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy50eXBlID09PSBTbGlkZXJUeXBlLlZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1heChNYXRoLm1pbih2YWx1ZSwgdGhpcy5vcHRpb25zLnRyYWNrLm1heCksIHRoaXMub3B0aW9ucy50cmFjay5taW4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY2hlY2sgaWYgdmFsdWUgaXMgd2l0aCBjaGFydCByYW5nZXNcclxuICAgICAgICBpZiAodmFsdWUgPiB0aGlzLm9wdGlvbnMudHJhY2subWF4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aHVtYiA9PT0gU2xpZGVyVGh1bWIuTG93ZXIgPyBNYXRoLm1pbih0aGlzLm9wdGlvbnMudHJhY2subWF4LCB0aGlzLnRodW1icy51cHBlci52YWx1ZSkgOiB0aGlzLm9wdGlvbnMudHJhY2subWF4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHZhbHVlIDwgdGhpcy5vcHRpb25zLnRyYWNrLm1pbikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGh1bWIgPT09IFNsaWRlclRodW1iLlVwcGVyID8gTWF0aC5tYXgodGhpcy5vcHRpb25zLnRyYWNrLm1pbiwgdGhpcy50aHVtYnMubG93ZXIudmFsdWUpIDogdGhpcy5vcHRpb25zLnRyYWNrLm1pbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIG90aGVyd2lzZSB3ZSBuZWVkIHRvIGNoZWNrIHRvIG1ha2Ugc3VyZSBsb3dlciB0aHVtYiBjYW5ub3QgZ28gYWJvdmUgaGlnaGVyIGFuZCB2aWNlIHZlcnNhXHJcbiAgICAgICAgaWYgKHRodW1iID09PSBTbGlkZXJUaHVtYi5Mb3dlcikge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMudGh1bWJzLnVwcGVyLnZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSA8PSB0aGlzLnRodW1icy51cHBlci52YWx1ZSA/IHZhbHVlIDogdGhpcy50aHVtYnMudXBwZXIudmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGh1bWIgPT09IFNsaWRlclRodW1iLlVwcGVyKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy50aHVtYnMubG93ZXIudmFsdWUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlID49IHRoaXMudGh1bWJzLmxvd2VyLnZhbHVlID8gdmFsdWUgOiB0aGlzLnRodW1icy5sb3dlci52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVPcHRpb25zKCk6IHZvaWQge1xyXG5cclxuICAgICAgICAvLyBhZGQgaW4gdGhlIGRlZmF1bHQgb3B0aW9ucyB0aGF0IHVzZXIgaGFzbid0IHNwZWNpZmllZFxyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMuZGVlcE1lcmdlKHRoaXMub3B0aW9ucyB8fCB7fSwgdGhpcy5kZWZhdWx0T3B0aW9ucyk7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlVHJhY2tDb2xvcnMoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVRpY2tzKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZVZhbHVlcygpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09IHVuZGVmaW5lZCB8fCB0aGlzLnZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGxvd2VyVmFsdWUgPSB0eXBlb2YgdGhpcy52YWx1ZSA9PT0gJ251bWJlcicgPyB0aGlzLnZhbHVlIDogdGhpcy52YWx1ZS5sb3c7XHJcbiAgICAgICAgbGV0IHVwcGVyVmFsdWUgPSB0eXBlb2YgdGhpcy52YWx1ZSA9PT0gJ251bWJlcicgPyB0aGlzLnZhbHVlIDogdGhpcy52YWx1ZS5oaWdoO1xyXG5cclxuICAgICAgICAvLyB2YWxpZGF0ZSB2YWx1ZXNcclxuICAgICAgICBsb3dlclZhbHVlID0gdGhpcy52YWxpZGF0ZVZhbHVlKFNsaWRlclRodW1iLkxvd2VyLCBOdW1iZXIobG93ZXJWYWx1ZS50b0ZpeGVkKDQpKSk7XHJcbiAgICAgICAgdXBwZXJWYWx1ZSA9IHRoaXMudmFsaWRhdGVWYWx1ZShTbGlkZXJUaHVtYi5VcHBlciwgTnVtYmVyKHVwcGVyVmFsdWUudG9GaXhlZCg0KSkpO1xyXG5cclxuICAgICAgICAvLyBjYWxjdWxhdGUgdGhlIHBvc2l0aW9ucyBhcyBwZXJjZW50YWdlc1xyXG4gICAgICAgIGxldCBsb3dlclBvc2l0aW9uID0gKCgobG93ZXJWYWx1ZSAtIHRoaXMub3B0aW9ucy50cmFjay5taW4pIC8gKHRoaXMub3B0aW9ucy50cmFjay5tYXggLSB0aGlzLm9wdGlvbnMudHJhY2subWluKSkgKiAxMDApO1xyXG4gICAgICAgIGxldCB1cHBlclBvc2l0aW9uID0gKCgodXBwZXJWYWx1ZSAtIHRoaXMub3B0aW9ucy50cmFjay5taW4pIC8gKHRoaXMub3B0aW9ucy50cmFjay5tYXggLSB0aGlzLm9wdGlvbnMudHJhY2subWluKSkgKiAxMDApO1xyXG5cclxuICAgICAgICAvLyB1cGRhdGUgdGh1bWIgcG9zaXRpb25zXHJcbiAgICAgICAgdGhpcy50aHVtYnMubG93ZXIucG9zaXRpb24gPSBsb3dlclBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMudGh1bWJzLnVwcGVyLnBvc2l0aW9uID0gdXBwZXJQb3NpdGlvbjtcclxuXHJcbiAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSB0cmFjayBzaXplc1xyXG4gICAgICAgIHRoaXMudHJhY2tzLmxvd2VyLnNpemUgPSBsb3dlclBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMudHJhY2tzLm1pZGRsZS5zaXplID0gdXBwZXJQb3NpdGlvbiAtIGxvd2VyUG9zaXRpb247XHJcbiAgICAgICAgdGhpcy50cmFja3MudXBwZXIuc2l6ZSA9IHRoaXMub3B0aW9ucy50eXBlID09PSBTbGlkZXJUeXBlLlZhbHVlID8gMTAwIC0gbG93ZXJQb3NpdGlvbiA6IDEwMCAtIHVwcGVyUG9zaXRpb247XHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgdmFsdWUgaW5wdXRcclxuICAgICAgICB0aGlzLnNldFZhbHVlKGxvd2VyVmFsdWUsIHVwcGVyVmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0VmFsdWUobG93OiBudW1iZXIsIGhpZ2g/OiBudW1iZXIpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy50aHVtYnMubG93ZXIudmFsdWUgPSBsb3c7XHJcbiAgICAgICAgdGhpcy50aHVtYnMudXBwZXIudmFsdWUgPSBoaWdoO1xyXG5cclxuICAgICAgICBsZXQgcHJldmlvdXNWYWx1ZSA9IHRoaXMuY2xvbmUodGhpcy5fdmFsdWUpO1xyXG5cclxuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5vcHRpb25zLnR5cGUgPT09IFNsaWRlclR5cGUuVmFsdWUgPyBsb3cgOiB7IGxvdzogbG93LCBoaWdoOiBoaWdoIH07XHJcblxyXG4gICAgICAgIC8vIGNhbGwgdGhlIGV2ZW50IGVtaXR0ZXIgaWYgY2hhbmdlcyBvY2N1cmVkXHJcbiAgICAgICAgaWYgKHRoaXMuZGV0ZWN0VmFsdWVDaGFuZ2UodGhpcy52YWx1ZSwgcHJldmlvdXNWYWx1ZSkpIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMuY2xvbmUodGhpcy52YWx1ZSkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVUb29sdGlwVGV4dChTbGlkZXJUaHVtYi5Mb3dlcik7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVG9vbHRpcFRleHQoU2xpZGVyVGh1bWIuVXBwZXIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLmNsb25lKHRoaXMudmFsdWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRUaHVtYlZhbHVlKHRodW1iOiBTbGlkZXJUaHVtYiwgdmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG5cclxuICAgICAgICAvLyB1cGRhdGUgdGhlIHRodW1iIHZhbHVlXHJcbiAgICAgICAgdGhpcy5nZXRUaHVtYlN0YXRlKHRodW1iKS52YWx1ZSA9IHZhbHVlO1xyXG5cclxuICAgICAgICAvLyBmb3J3YXJkIHRoZXNlIGNoYW5nZXMgdG8gdGhlIHZhbHVlXHJcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnRodW1icy5sb3dlci52YWx1ZSwgdGhpcy50aHVtYnMudXBwZXIudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlVGlja3MoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIC8vIGdldCB0aWNrIG9wdGlvbnNcclxuICAgICAgICBjb25zdCBtYWpvck9wdGlvbnMgPSB0aGlzLm9wdGlvbnMudHJhY2sudGlja3MubWFqb3I7XHJcbiAgICAgICAgY29uc3QgbWlub3JPcHRpb25zID0gdGhpcy5vcHRpb25zLnRyYWNrLnRpY2tzLm1pbm9yO1xyXG5cclxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBzaG91bGQgc2hvdyB0aWNrc1xyXG4gICAgICAgIGlmIChtYWpvck9wdGlvbnMuc2hvdyA9PT0gZmFsc2UgJiYgbWlub3JPcHRpb25zLnNob3cgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGlja3MgPSBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNyZWF0ZSB0aWNrcyBmb3IgYm90aCBtYWpvciBhbmQgbWlub3IgLSBvbmx5IGdldCB0aGUgb25lcyB0byBiZSBzaG93blxyXG4gICAgICAgIGNvbnN0IG1ham9yVGlja3MgPSB0aGlzLmdldFRpY2tzKG1ham9yT3B0aW9ucywgU2xpZGVyVGlja1R5cGUuTWFqb3IpLmZpbHRlcih0aWNrID0+IHRpY2suc2hvd1RpY2tzKTtcclxuICAgICAgICBjb25zdCBtaW5vclRpY2tzID0gdGhpcy5nZXRUaWNrcyhtaW5vck9wdGlvbnMsIFNsaWRlclRpY2tUeXBlLk1pbm9yKS5maWx0ZXIodGljayA9PiB0aWNrLnNob3dUaWNrcyk7XHJcblxyXG4gICAgICAgIC8vIHJlbW92ZSBhbnkgbWlub3IgdGlja3MgdGhhdCBhcmUgb24gYSBtYWpvciBpbnRlcnZhbFxyXG4gICAgICAgIHRoaXMudGlja3MgPSB0aGlzLnVuaW9uVGlja3MobWFqb3JUaWNrcywgbWlub3JUaWNrcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVUcmFja0NvbG9ycygpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gZ2V0IGNvbG9ycyBmb3IgZWFjaCBwYXJ0IG9mIHRoZSB0cmFja1xyXG4gICAgICAgIGNvbnN0IHsgbG93ZXIsIHJhbmdlLCBoaWdoZXIgfSA9IHRoaXMub3B0aW9ucy50cmFjay5jb2xvcnM7XHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgY29udHJvbGxlciB2YWx1ZVxyXG4gICAgICAgIHRoaXMudHJhY2tzLmxvd2VyLmNvbG9yID0gdHlwZW9mIGxvd2VyID09PSAnc3RyaW5nJyA/IGxvd2VyIDogYGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHtsb3dlci5qb2luKCcsICcpfSlgO1xyXG4gICAgICAgIHRoaXMudHJhY2tzLm1pZGRsZS5jb2xvciA9IHR5cGVvZiByYW5nZSA9PT0gJ3N0cmluZycgPyByYW5nZSA6IGBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICR7cmFuZ2Uuam9pbignLCAnKX0pYDtcclxuICAgICAgICB0aGlzLnRyYWNrcy51cHBlci5jb2xvciA9IHR5cGVvZiBoaWdoZXIgPT09ICdzdHJpbmcnID8gaGlnaGVyIDogYGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHtoaWdoZXIuam9pbignLCAnKX0pYDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFN0ZXBzKHN0ZXBzOiBudW1iZXIgfCBudW1iZXJbXSk6IG51bWJlcltdIHtcclxuXHJcbiAgICAgICAgLy8gaWYgdGhleSBhcmUgYWxyZWFkeSBhbiBhcnJheSBqdXN0IHJldHVybiBpdFxyXG4gICAgICAgIGlmIChzdGVwcyBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGVwcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBvdXRwdXQ6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgICAgIC8vIG90aGVyd2lzZSBjYWxjdWxhdGUgdGhlIHN0ZXBzXHJcbiAgICAgICAgZm9yIChsZXQgaWR4ID0gdGhpcy5vcHRpb25zLnRyYWNrLm1pbjsgaWR4IDw9IHRoaXMub3B0aW9ucy50cmFjay5tYXg7IGlkeCArPSBzdGVwcykge1xyXG4gICAgICAgICAgICBvdXRwdXQucHVzaChpZHgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFRpY2tzKG9wdGlvbnM6IFNsaWRlclRpY2tPcHRpb25zLCB0eXBlOiBTbGlkZXJUaWNrVHlwZSk6IFNsaWRlclRpY2tbXSB7XHJcblxyXG4gICAgICAgIC8vIGNyZWF0ZSBhbiBhcnJheSB0byBzdG9yZSB0aGUgdGlja3MgYW5kIHN0ZXAgcG9pbnRzXHJcbiAgICAgICAgbGV0IHN0ZXBzID0gdGhpcy5nZXRTdGVwcyhvcHRpb25zLnN0ZXBzKTtcclxuXHJcbiAgICAgICAgLy8gZ2V0IHNvbWUgY2hhcnQgb3B0aW9uc1xyXG4gICAgICAgIGxldCBtaW4gPSB0aGlzLm9wdGlvbnMudHJhY2subWluO1xyXG4gICAgICAgIGxldCBtYXggPSB0aGlzLm9wdGlvbnMudHJhY2subWF4O1xyXG5cclxuICAgICAgICAvLyBjb252ZXJ0IGVhY2ggc3RlcCB0byBhIHNsaWRlciB0aWNrIGFuZCByZW1vdmUgaW52YWxpZCB0aWNrc1xyXG4gICAgICAgIHJldHVybiBzdGVwcy5tYXAoc3RlcCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzaG93VGlja3M6IG9wdGlvbnMuc2hvdyxcclxuICAgICAgICAgICAgICAgIHNob3dMYWJlbHM6IG9wdGlvbnMubGFiZWxzLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAoKHN0ZXAgLSBtaW4pIC8gKG1heCAtIG1pbikpICogMTAwLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHN0ZXAsXHJcbiAgICAgICAgICAgICAgICBsYWJlbDogb3B0aW9ucy5mb3JtYXR0ZXIoc3RlcClcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KS5maWx0ZXIodGljayA9PiB0aWNrLnBvc2l0aW9uID49IDAgJiYgdGljay5wb3NpdGlvbiA8PSAxMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdW5pb25UaWNrcyhtYWpvclRpY2tzOiBTbGlkZXJUaWNrW10sIG1pbm9yVGlja3M6IFNsaWRlclRpY2tbXSk6IFNsaWRlclRpY2tbXSB7XHJcblxyXG4gICAgICAgIC8vIGdldCBhbGwgdGlja3MgY29tYmluZWQgcmVtb3ZpbmcgYW55IG1pbm9yIHRpY2tzIHdpdGggdGhlIHNhbWUgdmFsdWUgYXMgbWFqb3IgdGlja3NcclxuICAgICAgICByZXR1cm4gbWFqb3JUaWNrcy5jb25jYXQobWlub3JUaWNrcylcclxuICAgICAgICAgICAgLmZpbHRlcigodGljaywgaW5kZXgsIGFycmF5KSA9PiB0aWNrLnR5cGUgPT09IFNsaWRlclRpY2tUeXBlLk1ham9yIHx8ICFhcnJheS5maW5kKHRrID0+IHRrLnR5cGUgPT09IFNsaWRlclRpY2tUeXBlLk1ham9yICYmIHRrLnBvc2l0aW9uID09PSB0aWNrLnBvc2l0aW9uKSlcclxuICAgICAgICAgICAgLnNvcnQoKHQxLCB0MikgPT4gdDEudmFsdWUgLSB0Mi52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkZWVwTWVyZ2U8VD4oZGVzdGluYXRpb246IFQsIHNvdXJjZTogVCk6IFQge1xyXG5cclxuICAgICAgICAvLyBsb29wIHRob3VnaCBhbGwgb2YgdGhlIHByb3BlcnRpZXMgaW4gdGhlIHNvdXJjZSBvYmplY3RcclxuICAgICAgICBmb3IgKGxldCBwcm9wIGluIHNvdXJjZSkge1xyXG5cclxuICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGRlc3RpbmF0aW9uIG9iamVjdCBoYXMgdGhlIHByb3BlcnR5XHJcbiAgICAgICAgICAgIGlmICghZGVzdGluYXRpb24uaGFzT3duUHJvcGVydHkocHJvcCkpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvcHkgdGhlIHByb3BlcnR5IGFjcm9zc1xyXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25bcHJvcF0gPSBzb3VyY2VbcHJvcF07XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gaWYgdGhlIHByb3BlcnR5IGV4aXN0cyBhbmQgaXMgbm90IGFuIG9iamVjdCB0aGVuIHNraXBcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkZXN0aW5hdGlvbltwcm9wXSAhPT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBjaGVjayBpZiBwcm9wZXJ0eSBpcyBhbiBhcnJheVxyXG4gICAgICAgICAgICBpZiAoZGVzdGluYXRpb25bcHJvcF0gaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGlmIGl0IGlzIGFuIG9iamVjdCB0aGVuIHBlcmZvcm0gYSByZWN1cnNpdmUgY2hlY2tcclxuICAgICAgICAgICAgZGVzdGluYXRpb25bcHJvcF0gPSB0aGlzLmRlZXBNZXJnZShkZXN0aW5hdGlvbltwcm9wXSwgc291cmNlW3Byb3BdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBkZXN0aW5hdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRldGVjdFZhbHVlQ2hhbmdlKHZhbHVlMTogbnVtYmVyIHwgU2xpZGVyVmFsdWUsIHZhbHVlMjogbnVtYmVyIHwgU2xpZGVyVmFsdWUpOiBib29sZWFuIHtcclxuXHJcbiAgICAgICAgLy8gY29tcGFyZSB0d28gc2xpZGVyIHZhbHVlc1xyXG4gICAgICAgIGlmICh0aGlzLmlzU2xpZGVyVmFsdWUodmFsdWUxKSAmJiB0aGlzLmlzU2xpZGVyVmFsdWUodmFsdWUyKSkge1xyXG5cclxuICAgICAgICAgICAgLy8gcmVmZXJlbmNlcyB0byB0aGUgb2JqZWN0cyBpbiB0aGUgY29ycmVjdCB0eXBlc1xyXG4gICAgICAgICAgICBjb25zdCBvYmoxID0gdmFsdWUxIGFzIFNsaWRlclZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBvYmoyID0gdmFsdWUyIGFzIFNsaWRlclZhbHVlO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG9iajEubG93ICE9PSBvYmoyLmxvdyB8fCBvYmoxLmhpZ2ggIT09IG9iajIuaGlnaDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlmIG5vdCBhIHNsaWRlciB2YWx1ZSAtIHNob3VsZCBiZSBudW1iZXIgb2YgbnVsbGFibGUgdHlwZSAtIGNvbXBhcmUgbm9ybWFsbHlcclxuICAgICAgICByZXR1cm4gdmFsdWUxICE9PSB2YWx1ZTI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IGFuIG9iamVjdCBjb25mb3JtcyB0byB0aGVcclxuICAgICAqIFNsaWRlclZhbHVlIGludGVyZmFjZS5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSAtIFRoZSBvYmplY3QgdG8gY2hlY2sgLSB0aGlzIG11c3QgYmUgdHlwZSBhbnlcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBpc1NsaWRlclZhbHVlKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgaWYgaXMgYW4gb2JqZWN0XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gbmV4dCBjaGVjayBpZiBpdCBjb250YWlucyB0aGUgbmVjZXNzYXJ5IHByb3BlcnRpZXNcclxuICAgICAgICByZXR1cm4gJ2xvdycgaW4gdmFsdWUgJiYgJ2hpZ2gnIGluIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2xvbmUodmFsdWU6IG51bWJlciB8IFNsaWRlclZhbHVlKTogbnVtYmVyIHwgU2xpZGVyVmFsdWUge1xyXG5cclxuICAgICAgICAvLyBpZiBpdCBpcyBub3QgYW4gb2JqZWN0IHNpbXBseSByZXR1cm4gdGhlIHZhbHVlXHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY3JlYXRlIGEgbmV3IG9iamVjdCBmcm9tIHRoZSBleGlzdGluZyBvbmVcclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IHsgLi4udmFsdWUgfTtcclxuXHJcbiAgICAgICAgLy8gZGVsZXRlIHJlbW92ZSB0aGUgdmFsdWUgZnJvbSB0aGUgb2xkIG9iamVjdFxyXG4gICAgICAgIHZhbHVlID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAvLyByZXR1cm4gdGhlIG5ldyBpbnN0YW5jZSBvZiB0aGUgb2JqZWN0XHJcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBTbGlkZXJUeXBlIHtcclxuICAgIFZhbHVlLFxyXG4gICAgUmFuZ2VcclxufVxyXG5cclxuZXhwb3J0IGVudW0gU2xpZGVyU3R5bGUge1xyXG4gICAgQnV0dG9uLFxyXG4gICAgTGluZVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBTbGlkZXJTaXplIHtcclxuICAgIE5hcnJvdyxcclxuICAgIFdpZGVcclxufVxyXG5cclxuZXhwb3J0IGVudW0gU2xpZGVyQ2FsbG91dFRyaWdnZXIge1xyXG4gICAgTm9uZSxcclxuICAgIEhvdmVyLFxyXG4gICAgRHJhZyxcclxuICAgIFBlcnNpc3RlbnQsXHJcbiAgICBEeW5hbWljXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2xpZGVyVmFsdWUge1xyXG4gICAgbG93OiBudW1iZXI7XHJcbiAgICBoaWdoOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFNsaWRlclNuYXAge1xyXG4gICAgTm9uZSxcclxuICAgIE1pbm9yLFxyXG4gICAgTWFqb3IsXHJcbiAgICBBbGxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gU2xpZGVyVGlja1R5cGUge1xyXG4gICAgTWlub3IsXHJcbiAgICBNYWpvclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNsaWRlck9wdGlvbnMge1xyXG4gICAgdHlwZT86IFNsaWRlclR5cGU7XHJcbiAgICBoYW5kbGVzPzogU2xpZGVySGFuZGxlT3B0aW9ucztcclxuICAgIHRyYWNrPzogU2xpZGVyVHJhY2tPcHRpb25zO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNsaWRlckhhbmRsZU9wdGlvbnMge1xyXG4gICAgc3R5bGU/OiBTbGlkZXJTdHlsZTtcclxuICAgIGNhbGxvdXQ/OiBTbGlkZXJDYWxsb3V0O1xyXG4gICAga2V5Ym9hcmQ/OiBTbGlkZXJLZXlib2FyZE9wdGlvbnM7XHJcbiAgICBhcmlhPzogU2xpZGVyQXJpYU9wdGlvbnM7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2xpZGVyQXJpYU9wdGlvbnMge1xyXG4gICAgdGh1bWI6IHN0cmluZztcclxuICAgIGxvd2VyVGh1bWI6IHN0cmluZztcclxuICAgIHVwcGVyVGh1bWI6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTbGlkZXJLZXlib2FyZE9wdGlvbnMge1xyXG4gICAgbWFqb3I/OiBudW1iZXI7XHJcbiAgICBtaW5vcj86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTbGlkZXJUcmFja09wdGlvbnMge1xyXG4gICAgaGVpZ2h0PzogU2xpZGVyU2l6ZTtcclxuICAgIG1pbj86IG51bWJlcjtcclxuICAgIG1heD86IG51bWJlcjtcclxuICAgIHRpY2tzPzogU2xpZGVyVGlja3NPcHRpb25zO1xyXG4gICAgY29sb3JzPzogU2xpZGVyVHJhY2tDb2xvcnM7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2xpZGVyVGlja3NPcHRpb25zIHtcclxuICAgIHNuYXA/OiBTbGlkZXJTbmFwO1xyXG4gICAgbWFqb3I/OiBTbGlkZXJUaWNrT3B0aW9ucztcclxuICAgIG1pbm9yPzogU2xpZGVyVGlja09wdGlvbnM7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2xpZGVyVGlja09wdGlvbnMge1xyXG4gICAgc2hvdz86IGJvb2xlYW47XHJcbiAgICBzdGVwcz86IG51bWJlciB8IG51bWJlcltdO1xyXG4gICAgbGFiZWxzPzogYm9vbGVhbjtcclxuICAgIGZvcm1hdHRlcj86ICh2YWx1ZTogbnVtYmVyKSA9PiBzdHJpbmcgfCBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2xpZGVyVGljayB7XHJcbiAgICBzaG93VGlja3M6IGJvb2xlYW47XHJcbiAgICBzaG93TGFiZWxzOiBib29sZWFuO1xyXG4gICAgdHlwZTogU2xpZGVyVGlja1R5cGU7XHJcbiAgICBwb3NpdGlvbjogbnVtYmVyO1xyXG4gICAgdmFsdWU6IG51bWJlcjtcclxuICAgIGxhYmVsOiBzdHJpbmcgfCBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2xpZGVyVHJhY2tDb2xvcnMge1xyXG4gICAgbG93ZXI/OiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgIHJhbmdlPzogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICBoaWdoZXI/OiBzdHJpbmcgfCBzdHJpbmdbXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTbGlkZXJDYWxsb3V0IHtcclxuICAgIHRyaWdnZXI/OiBTbGlkZXJDYWxsb3V0VHJpZ2dlcjtcclxuICAgIGJhY2tncm91bmQ/OiBzdHJpbmc7XHJcbiAgICBjb2xvcj86IHN0cmluZztcclxuICAgIGZvcm1hdHRlcj86ICh2YWx1ZTogbnVtYmVyKSA9PiBzdHJpbmcgfCBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFNsaWRlclRodW1iRXZlbnQge1xyXG4gICAgTm9uZSxcclxuICAgIE1vdXNlT3ZlcixcclxuICAgIE1vdXNlTGVhdmUsXHJcbiAgICBEcmFnU3RhcnQsXHJcbiAgICBEcmFnRW5kXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFNsaWRlclRodW1iIHtcclxuICAgIExvd2VyLFxyXG4gICAgVXBwZXJcclxufSJdfQ==