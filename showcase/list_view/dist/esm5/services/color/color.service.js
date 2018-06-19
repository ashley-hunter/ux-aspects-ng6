/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
var ColorService = /** @class */ (function () {
    function ColorService() {
        this._colorSet = colorSets.keppel;
        if (this._colorSet.colorClassSet) {
            this.setColors();
        }
        else {
            for (var /** @type {?} */ key in this._colorSet.colorValueSet) {
                this._colors[key] = this.getColorValueByHex(this._colorSet.colorValueSet[key]);
            }
        }
    }
    /**
     * @return {?}
     */
    ColorService.prototype.setColors = /**
     * @return {?}
     */
    function () {
        this._html = '';
        for (var /** @type {?} */ key in this._colorSet.colorClassSet) {
            this._html += '<div class="' + this._colorSet.colorClassSet[key] + '-color"></div>';
        }
        this._element = document.createElement('div');
        this._element.className = 'color-chart';
        this._element.innerHTML = this._html;
        document.body.appendChild(this._element);
        this._colors = {};
        for (var /** @type {?} */ key in this._colorSet.colorClassSet) {
            this._colors[key] = this.getColorValue(this._colorSet.colorClassSet[key]);
        }
        this._element.parentNode.removeChild(this._element);
    };
    /**
     * @param {?} color
     * @return {?}
     */
    ColorService.prototype.getColorValueByHex = /**
     * @param {?} color
     * @return {?}
     */
    function (color) {
        var /** @type {?} */ hex = color.replace('#', '');
        var /** @type {?} */ r = parseInt(hex.substring(0, 2), 16).toString();
        var /** @type {?} */ g = parseInt(hex.substring(2, 4), 16).toString();
        var /** @type {?} */ b = parseInt(hex.substring(4, 6), 16).toString();
        return new ThemeColor(r, g, b, '1');
    };
    /**
     * @param {?} color
     * @return {?}
     */
    ColorService.prototype.getColorValue = /**
     * @param {?} color
     * @return {?}
     */
    function (color) {
        var /** @type {?} */ target = this._element.querySelector('.' + this._colorSet.colorClassSet[color] + '-color');
        if (!target) {
            throw new Error('Invalid color');
        }
        var /** @type {?} */ colorValue = window.getComputedStyle(target).backgroundColor;
        var /** @type {?} */ rgba = colorValue.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
        return new ThemeColor(rgba[1], rgba[2], rgba[3], rgba[4]);
    };
    /**
     * @param {?} color
     * @return {?}
     */
    ColorService.prototype.getColor = /**
     * @param {?} color
     * @return {?}
     */
    function (color) {
        var /** @type {?} */ themeColor = this._colors[this.resolveColorName(color)];
        if (!themeColor) {
            throw new Error('Color not found: ' + color);
        }
        return new ThemeColor(themeColor.getRed(), themeColor.getGreen(), themeColor.getBlue(), themeColor.getAlpha());
    };
    /**
     * @return {?}
     */
    ColorService.prototype.getColorSet = /**
     * @return {?}
     */
    function () {
        return this._colorSet;
    };
    /**
     * @param {?} colorSet
     * @return {?}
     */
    ColorService.prototype.setColorSet = /**
     * @param {?} colorSet
     * @return {?}
     */
    function (colorSet) {
        this._colorSet = colorSet;
        this._colors = {};
        if (this._colorSet.colorClassSet) {
            this.setColors();
        }
        else {
            for (var /** @type {?} */ key in this._colorSet.colorValueSet) {
                this._colors[key] = this.getColorValueByHex(this._colorSet.colorValueSet[key]);
            }
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ColorService.prototype.resolve = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!value) {
            return;
        }
        var /** @type {?} */ colorName = this.resolveColorName(value);
        for (var /** @type {?} */ color in this._colors) {
            if (colorName === color.toLowerCase()) {
                return this.getColor(colorName).toRgba();
            }
        }
        return value;
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    ColorService.prototype.resolveColorName = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        return value.replace(/\s+/g, '-').toLowerCase();
    };
    ColorService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ColorService.ctorParameters = function () { return []; };
    return ColorService;
}());
export { ColorService };
function ColorService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ColorService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ColorService.ctorParameters;
    /** @type {?} */
    ColorService.prototype._html;
    /** @type {?} */
    ColorService.prototype._element;
    /** @type {?} */
    ColorService.prototype._colors;
    /** @type {?} */
    ColorService.prototype._colorSet;
}
var ThemeColor = /** @class */ (function () {
    function ThemeColor(r, g, b, a) {
        this._r = r;
        this._g = g;
        this._b = b;
        this._a = a === undefined ? '1' : a;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    ThemeColor.parse = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var /** @type {?} */ r, /** @type {?} */ g, /** @type {?} */ b, /** @type {?} */ a = '1';
        var /** @type {?} */ rgbaPattern = /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/;
        var /** @type {?} */ shortHexPattern = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        var /** @type {?} */ longHexPattern = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/;
        var /** @type {?} */ rgbaMatch = value.match(rgbaPattern);
        var /** @type {?} */ shortHexMatch = value.match(shortHexPattern);
        var /** @type {?} */ longHexMatch = value.match(longHexPattern);
        if (rgbaMatch) {
            r = rgbaMatch[1];
            g = rgbaMatch[2];
            b = rgbaMatch[3];
            a = rgbaMatch[4] ? rgbaMatch[4] : '1';
        }
        else if (longHexMatch) {
            r = parseInt(longHexMatch[1], 16).toString();
            g = parseInt(longHexMatch[2], 16).toString();
            b = parseInt(longHexMatch[3], 16).toString();
        }
        else if (shortHexMatch) {
            r = parseInt(shortHexMatch[1] + shortHexMatch[1], 16).toString();
            g = parseInt(shortHexMatch[2] + shortHexMatch[2], 16).toString();
            b = parseInt(shortHexMatch[3] + shortHexMatch[3], 16).toString();
        }
        else {
            throw new Error("Cannot parse color - " + value + " is not a valid color.");
        }
        return new ThemeColor(r, g, b, a);
    };
    /**
     * @return {?}
     */
    ThemeColor.prototype.toHex = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ red = parseInt(this._r).toString(16);
        var /** @type {?} */ green = parseInt(this._g).toString(16);
        var /** @type {?} */ blue = parseInt(this._b).toString(16);
        if (red.length < 2) {
            red = '0' + red;
        }
        if (green.length < 2) {
            green = '0' + green;
        }
        if (blue.length < 2) {
            blue = '0' + blue;
        }
        return '#' + red + green + blue;
    };
    /**
     * @return {?}
     */
    ThemeColor.prototype.toRgb = /**
     * @return {?}
     */
    function () {
        return 'rgb(' + this._r + ', ' + this._g + ', ' + this._b + ')';
    };
    /**
     * @return {?}
     */
    ThemeColor.prototype.toRgba = /**
     * @return {?}
     */
    function () {
        return 'rgba(' + this._r + ', ' + this._g + ', ' + this._b + ', ' + this._a + ')';
    };
    /**
     * @return {?}
     */
    ThemeColor.prototype.getRed = /**
     * @return {?}
     */
    function () {
        return this._r;
    };
    /**
     * @return {?}
     */
    ThemeColor.prototype.getGreen = /**
     * @return {?}
     */
    function () {
        return this._g;
    };
    /**
     * @return {?}
     */
    ThemeColor.prototype.getBlue = /**
     * @return {?}
     */
    function () {
        return this._b;
    };
    /**
     * @return {?}
     */
    ThemeColor.prototype.getAlpha = /**
     * @return {?}
     */
    function () {
        return this._a;
    };
    /**
     * @param {?} red
     * @return {?}
     */
    ThemeColor.prototype.setRed = /**
     * @param {?} red
     * @return {?}
     */
    function (red) {
        this._r = red;
        return this;
    };
    /**
     * @param {?} green
     * @return {?}
     */
    ThemeColor.prototype.setGreen = /**
     * @param {?} green
     * @return {?}
     */
    function (green) {
        this._g = green;
        return this;
    };
    /**
     * @param {?} blue
     * @return {?}
     */
    ThemeColor.prototype.setBlue = /**
     * @param {?} blue
     * @return {?}
     */
    function (blue) {
        this._b = blue;
        return this;
    };
    /**
     * @param {?} alpha
     * @return {?}
     */
    ThemeColor.prototype.setAlpha = /**
     * @param {?} alpha
     * @return {?}
     */
    function (alpha) {
        this._a = alpha.toString();
        return this;
    };
    return ThemeColor;
}());
export { ThemeColor };
function ThemeColor_tsickle_Closure_declarations() {
    /** @type {?} */
    ThemeColor.prototype._r;
    /** @type {?} */
    ThemeColor.prototype._g;
    /** @type {?} */
    ThemeColor.prototype._b;
    /** @type {?} */
    ThemeColor.prototype._a;
}
export var /** @type {?} */ colorSets = {
    keppel: {
        colorClassSet: {
            'primary': 'primary',
            'accent': 'accent',
            'secondary': 'secondary',
            'alternate1': 'alternate1',
            'alternate2': 'alternate2',
            'alternate3': 'alternate3',
            'vibrant1': 'vibrant1',
            'vibrant2': 'vibrant2',
            'grey1': 'grey1',
            'grey2': 'grey2',
            'grey3': 'grey3',
            'grey4': 'grey4',
            'grey5': 'grey5',
            'grey6': 'grey6',
            'grey7': 'grey7',
            'grey8': 'grey8',
            'chart1': 'chart1',
            'chart2': 'chart2',
            'chart3': 'chart3',
            'chart4': 'chart4',
            'chart5': 'chart5',
            'chart6': 'chart6',
            'ok': 'ok',
            'warning': 'warning',
            'critical': 'critical',
            'partition1': 'partition1',
            'partition9': 'partition9',
            'partition10': 'partition10',
            'partition11': 'partition11',
            'partition12': 'partition12',
            'partition13': 'partition13',
            'partition14': 'partition14',
            'social-chart-node': 'social-chart-node',
            'social-chart-edge': 'social-chart-edge'
        }
    },
    microFocus: {
        'colorValueSet': {
            'cerulean': '#1668c1',
            'aqua': '#29ceff',
            'aquamarine': '#2fd6c3',
            'fuchsia': '#c6179d',
            'indigo': '#7425ad',
            'dark-blue': '#231ca5',
            'white': '#ffffff',
            'slightly-gray': '#f5f7f8',
            'bright-gray': '#f1f2f3',
            'gray': '#dcdedf',
            'silver': '#bdbec0',
            'dim-gray': '#656668',
            'dark-gray': '#323435',
            'black': '#000000',
            'crimson-negative': '#e5004c',
            'apricot': '#f48b34',
            'yellow': '#fcdb1f',
            'green-positive': '#1aac60',
            'ultramarine': '#3939c6',
            'skyblue': '#00abf3',
            'pale-aqua': '#43e4ff',
            'pale-green': '#1ffbba',
            'lime': '#75da4d',
            'orange': '#ffce00',
            'magenta': '#eb23c2',
            'pale-purple': '#ba47e2',
            'dark-ultramarine': '#271782',
            'steelblue': '#014272',
            'arctic-blue': '#0b8eac',
            'emerald': '#00a989',
            'olive': '#5bba36',
            'goldenrod': '#ffb000',
            'purple': '#9b1e83',
            'pale-eggplant': '#5216ac',
            'red': '#ff454f',
            'pale-amber': '#ffb24d',
            'pale-lemon': '#fde159',
            'pale-emerald': '#33c180',
            'plum': '#b21646',
            'copper': '#e57828',
            'amber': '#ffc002',
            'leaf-green': '#118c4f',
            'forest-green': '#00645a',
            'primary': '#0073e7',
            'accent': '#7425ad',
            'secondary': '#ffffff',
            'alternate1': '#29ceff',
            'alternate2': '#2fd6c3',
            'alternate3': '#c6179d',
            'vibrant1': '#43e4ff',
            'vibrant2': '#ffce00',
            'grey1': '#000000',
            'grey2': '#323435',
            'grey3': '#656668',
            'grey4': '#bdbec0',
            'grey5': '#dcdedf',
            'grey6': '#f1f2f3',
            'grey7': '#f5f7f8',
            'grey8': '#ffffff',
            'chart1': '#3939c6',
            'chart2': '#00abf3',
            'chart3': '#75da4d',
            'chart4': '#ffce00',
            'chart5': '#eb23c2',
            'chart6': '#ba47e2',
            'ok': '#1aac60',
            'warning': '#f48b34',
            'critical': 'e5004c',
            'partition1': '#7425ad',
            'partition9': '#5216ac',
            'partition10': '#5bba36',
            'partition11': '#014272',
            'partition12': '#ffb000',
            'partition13': '#bdbec0',
            'partition14': '#271782',
            'social-chart-node': '#ff00ff',
            'social-chart-edge': '#ff00ff'
        }
    }
};
/**
 * @record
 */
export function ThemeColors() { }
function ThemeColors_tsickle_Closure_declarations() {
    /* TODO: handle strange member:
    [name: string]: ThemeColor;
    */
}
/**
 * @record
 */
export function ColorSet() { }
function ColorSet_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    ColorSet.prototype.colorClassSet;
    /** @type {?|undefined} */
    ColorSet.prototype.colorValueSet;
}
/**
 * @record
 */
export function ColorClassSet() { }
function ColorClassSet_tsickle_Closure_declarations() {
    /* TODO: handle strange member:
    [name: string]: string;
    */
}
/**
 * @record
 */
export function ColorValueSet() { }
function ColorValueSet_tsickle_Closure_declarations() {
    /* TODO: handle strange member:
    [name: string]: string;
    */
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9jb2xvci9jb2xvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQVd2Qzt5QkFGeUIsU0FBUyxDQUFDLE1BQU07UUFHckMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNwQjtRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osR0FBRyxDQUFDLENBQUMscUJBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztnQkFDM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUNsRjtTQUNKO0tBQ0o7Ozs7SUFFTyxnQ0FBUzs7OztRQUViLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBRWhCLEdBQUcsQ0FBQyxDQUFDLHFCQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLEtBQUssSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsZ0JBQWdCLENBQUM7U0FDdkY7UUFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxR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TUFBTSxDQUFDLElBQUksVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ3JDOzs7O0lBRUQsMEJBQUs7OztJQUFMO1FBQ0kscUJBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLHFCQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMzQyxxQkFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFMUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1NBQ25CO1FBQ0QsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25CLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDO1NBQ3JCO1FBRUQsTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQztLQUNuQzs7OztJQUVELDBCQUFLOzs7SUFBTDtRQUNJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUM7S0FDbkU7Ozs7SUFFRCwyQkFBTTs7O0lBQU47UUFDSSxNQUFNLENBQUMsT0FBTyxHQUFHLElB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QUFTO1lBQ3JCLFVBQVUsRUFBRSxTQUFTO1lBQ3JCLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxTQUFTO1lBQ25CLElBQUksRUFBRSxTQUFTO1lBQ2YsU0FBUyxFQUFFLFNBQVM7WUFDcEIsVUFBVSxFQUFFLFFBQVE7WUFDcEIsWUFBWSxFQUFFLFNBQVM7WUFDdkIsWUFBWSxFQUFFLFNBQVM7WUFDdkIsYUFBYSxFQUFFLFNBQVM7WUFDeEIsYUFBYSxFQUFFLFNBQVM7WUFDeEIsYUFBYSxFQUFFLFNBQVM7WUFDeEIsYUFBYSxFQUFFLFNBQVM7WUFDeEIsYUFBYSxFQUFFLFNBQVM7WUFDeEIsbUJBQW1CLEVBQUUsU0FBUztZQUM5QixtQkFBbUIsRUFBRSxTQUFTO1NBQ2pDO0tBQ0o7Q0FDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb2xvckNsYXNzU2V0LCBDb2xvclZhbHVlU2V0IH0gZnJvbSAnLi9jb2xvci5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENvbG9yU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfaHRtbDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIF9jb2xvcnM6IFRoZW1lQ29sb3JzO1xyXG4gICAgcHJpdmF0ZSBfY29sb3JTZXQ6IGFueSA9IGNvbG9yU2V0cy5rZXBwZWw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbG9yU2V0LmNvbG9yQ2xhc3NTZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRDb2xvcnMoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5fY29sb3JTZXQuY29sb3JWYWx1ZVNldCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sb3JzW2tleV0gPSB0aGlzLmdldENvbG9yVmFsdWVCeUhleCh0aGlzLl9jb2xvclNldC5jb2xvclZhbHVlU2V0W2tleV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0Q29sb3JzKCkge1xyXG5cclxuICAgICAgICB0aGlzLl9odG1sID0gJyc7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLl9jb2xvclNldC5jb2xvckNsYXNzU2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2h0bWwgKz0gJzxkaXYgY2xhc3M9XCInICsgdGhpcy5fY29sb3JTZXQuY29sb3JDbGFzc1NldFtrZXldICsgJy1jb2xvclwiPjwvZGl2Pic7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc05hbWUgPSAnY29sb3ItY2hhcnQnO1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5faHRtbDtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLl9lbGVtZW50KTtcclxuXHJcbiAgICAgICAgdGhpcy5fY29sb3JzID0ge307XHJcblxyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLl9jb2xvclNldC5jb2xvckNsYXNzU2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbG9yc1trZXldID0gdGhpcy5nZXRDb2xvclZhbHVlKHRoaXMuX2NvbG9yU2V0LmNvbG9yQ2xhc3NTZXRba2V5XSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5fZWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRDb2xvclZhbHVlQnlIZXgoY29sb3I6IHN0cmluZyk6IFRoZW1lQ29sb3Ige1xyXG4gICAgICAgIGNvbnN0IGhleCA9IGNvbG9yLnJlcGxhY2UoJyMnLCAnJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHIgPSBwYXJzZUludChoZXguc3Vic3RyaW5nKDAsIDIpLCAxNikudG9TdHJpbmcoKTtcclxuICAgICAgICBjb25zdCBnID0gcGFyc2VJbnQoaGV4LnN1YnN0cmluZygyLCA0KSwgMTYpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgY29uc3QgYiA9IHBhcnNlSW50KGhleC5zdWJzdHJpbmcoNCwgNiksIDE2KS50b1N0cmluZygpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFRoZW1lQ29sb3IociwgZywgYiwgJzEnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldENvbG9yVmFsdWUoY29sb3I6IENvbG9ySWRlbnRpZmllcik6IFRoZW1lQ29sb3Ige1xyXG5cclxuICAgICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgdGhpcy5fY29sb3JTZXQuY29sb3JDbGFzc1NldFtjb2xvcl0gKyAnLWNvbG9yJyk7XHJcblxyXG4gICAgICAgIGlmICghdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjb2xvcicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY29sb3JWYWx1ZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRhcmdldCkuYmFja2dyb3VuZENvbG9yO1xyXG5cclxuICAgICAgICBjb25zdCByZ2JhID0gY29sb3JWYWx1ZS5tYXRjaCgvXnJnYmE/XFwoKFxcZCspLFxccyooXFxkKyksXFxzKihcXGQrKSg/OixcXHMqKFxcZCsoPzpcXC5cXGQrKT8pKT9cXCkkLyk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgVGhlbWVDb2xvcihyZ2JhWzFdLCByZ2JhWzJdLCByZ2JhWzNdLCByZ2JhWzRdKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb2xvcihjb2xvcjogQ29sb3JJZGVudGlmaWVyKTogVGhlbWVDb2xvciB7XHJcbiAgICAgICAgY29uc3QgdGhlbWVDb2xvciA9IHRoaXMuX2NvbG9yc1t0aGlzLnJlc29sdmVDb2xvck5hbWUoY29sb3IpXTtcclxuICAgICAgICBpZiAoIXRoZW1lQ29sb3IpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb2xvciBub3QgZm91bmQ6ICcgKyBjb2xvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFRoZW1lQ29sb3IodGhlbWVDb2xvci5nZXRSZWQoKSwgdGhlbWVDb2xvci5nZXRHcmVlbigpLCB0aGVtZUNvbG9yLmdldEJsdWUoKSwgdGhlbWVDb2xvci5nZXRBbHBoYSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb2xvclNldCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29sb3JTZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q29sb3JTZXQoY29sb3JTZXQ6IENvbG9yU2V0KSB7XHJcbiAgICAgICAgdGhpcy5fY29sb3JTZXQgPSBjb2xvclNldDtcclxuICAgICAgICB0aGlzLl9jb2xvcnMgPSB7fTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbG9yU2V0LmNvbG9yQ2xhc3NTZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRDb2xvcnMoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5fY29sb3JTZXQuY29sb3JWYWx1ZVNldCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sb3JzW2tleV0gPSB0aGlzLmdldENvbG9yVmFsdWVCeUhleCh0aGlzLl9jb2xvclNldC5jb2xvclZhbHVlU2V0W2tleV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlc29sdmUodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjb2xvck5hbWUgPSB0aGlzLnJlc29sdmVDb2xvck5hbWUodmFsdWUpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBjb2xvciBpbiB0aGlzLl9jb2xvcnMpIHtcclxuICAgICAgICAgICAgaWYgKGNvbG9yTmFtZSA9PT0gY29sb3IudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29sb3IoY29sb3JOYW1lKS50b1JnYmEoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc29sdmVDb2xvck5hbWUodmFsdWU6IHN0cmluZyA9ICcnKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvXFxzKy9nLCAnLScpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUaGVtZUNvbG9yIHtcclxuXHJcbiAgICBwcml2YXRlIF9yOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9nOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9iOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9hOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3Iocjogc3RyaW5nLCBnOiBzdHJpbmcsIGI6IHN0cmluZywgYTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fciA9IHI7XHJcbiAgICAgICAgdGhpcy5fZyA9IGc7XHJcbiAgICAgICAgdGhpcy5fYiA9IGI7XHJcbiAgICAgICAgdGhpcy5fYSA9IGEgPT09IHVuZGVmaW5lZCA/ICcxJyA6IGE7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHBhcnNlKHZhbHVlOiBzdHJpbmcpOiBUaGVtZUNvbG9yIHtcclxuICAgICAgICBsZXQgciwgZywgYiwgYSA9ICcxJztcclxuXHJcbiAgICAgICAgY29uc3QgcmdiYVBhdHRlcm4gPSAvXnJnYmE/XFwoKFxcZCspLFxccyooXFxkKyksXFxzKihcXGQrKSg/OixcXHMqKFxcZCsoPzpcXC5cXGQrKT8pKT9cXCkkLztcclxuICAgICAgICBjb25zdCBzaG9ydEhleFBhdHRlcm4gPSAvXiM/KFthLWZcXGRdKShbYS1mXFxkXSkoW2EtZlxcZF0pJC9pO1xyXG4gICAgICAgIGNvbnN0IGxvbmdIZXhQYXR0ZXJuID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvO1xyXG5cclxuICAgICAgICBjb25zdCByZ2JhTWF0Y2ggPSB2YWx1ZS5tYXRjaChyZ2JhUGF0dGVybik7XHJcbiAgICAgICAgY29uc3Qgc2hvcnRIZXhNYXRjaCA9IHZhbHVlLm1hdGNoKHNob3J0SGV4UGF0dGVybik7XHJcbiAgICAgICAgY29uc3QgbG9uZ0hleE1hdGNoID0gdmFsdWUubWF0Y2gobG9uZ0hleFBhdHRlcm4pO1xyXG5cclxuICAgICAgICBpZiAocmdiYU1hdGNoKSB7XHJcbiAgICAgICAgICAgIHIgPSByZ2JhTWF0Y2hbMV07XHJcbiAgICAgICAgICAgIGcgPSByZ2JhTWF0Y2hbMl07XHJcbiAgICAgICAgICAgIGIgPSByZ2JhTWF0Y2hbM107XHJcbiAgICAgICAgICAgIGEgPSByZ2JhTWF0Y2hbNF0gPyByZ2JhTWF0Y2hbNF0gOiAnMSc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChsb25nSGV4TWF0Y2gpIHtcclxuICAgICAgICAgICAgciA9IHBhcnNlSW50KGxvbmdIZXhNYXRjaFsxXSwgMTYpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGcgPSBwYXJzZUludChsb25nSGV4TWF0Y2hbMl0sIDE2KS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBiID0gcGFyc2VJbnQobG9uZ0hleE1hdGNoWzNdLCAxNikudG9TdHJpbmcoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHNob3J0SGV4TWF0Y2gpIHtcclxuICAgICAgICAgICAgciA9IHBhcnNlSW50KHNob3J0SGV4TWF0Y2hbMV0gKyBzaG9ydEhleE1hdGNoWzFdLCAxNikudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgZyA9IHBhcnNlSW50KHNob3J0SGV4TWF0Y2hbMl0gKyBzaG9ydEhleE1hdGNoWzJdLCAxNikudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgYiA9IHBhcnNlSW50KHNob3J0SGV4TWF0Y2hbM10gKyBzaG9ydEhleE1hdGNoWzNdLCAxNikudG9TdHJpbmcoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBwYXJzZSBjb2xvciAtICR7dmFsdWV9IGlzIG5vdCBhIHZhbGlkIGNvbG9yLmApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFRoZW1lQ29sb3IociwgZywgYiwgYSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9IZXgoKSB7XHJcbiAgICAgICAgbGV0IHJlZCA9IHBhcnNlSW50KHRoaXMuX3IpLnRvU3RyaW5nKDE2KTtcclxuICAgICAgICBsZXQgZ3JlZW4gPSBwYXJzZUludCh0aGlzLl9nKS50b1N0cmluZygxNik7XHJcbiAgICAgICAgbGV0IGJsdWUgPSBwYXJzZUludCh0aGlzLl9iKS50b1N0cmluZygxNik7XHJcblxyXG4gICAgICAgIGlmIChyZWQubGVuZ3RoIDwgMikge1xyXG4gICAgICAgICAgICByZWQgPSAnMCcgKyByZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChncmVlbi5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgICAgIGdyZWVuID0gJzAnICsgZ3JlZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChibHVlLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICAgICAgYmx1ZSA9ICcwJyArIGJsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gJyMnICsgcmVkICsgZ3JlZW4gKyBibHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHRvUmdiKCkge1xyXG4gICAgICAgIHJldHVybiAncmdiKCcgKyB0aGlzLl9yICsgJywgJyArIHRoaXMuX2cgKyAnLCAnICsgdGhpcy5fYiArICcpJztcclxuICAgIH1cclxuXHJcbiAgICB0b1JnYmEoKSB7XHJcbiAgICAgICAgcmV0dXJuICdyZ2JhKCcgKyB0aGlzLl9yICsgJywgJyArIHRoaXMuX2cgKyAnLCAnICsgdGhpcy5fYiArICcsICcgKyB0aGlzLl9hICsgJyknO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRHcmVlbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZztcclxuICAgIH1cclxuXHJcbiAgICBnZXRCbHVlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9iO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFscGhhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFJlZChyZWQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3IgPSByZWQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0R3JlZW4oZ3JlZW46IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2cgPSBncmVlbjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzZXRCbHVlKGJsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2IgPSBibHVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFscGhhKGFscGhhOiBzdHJpbmcgfCBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9hID0gYWxwaGEudG9TdHJpbmcoKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbG9yU2V0cyA9IHtcclxuICAgIGtlcHBlbDoge1xyXG4gICAgICAgIGNvbG9yQ2xhc3NTZXQ6IHtcclxuICAgICAgICAgICAgJ3ByaW1hcnknOiAncHJpbWFyeScsXHJcbiAgICAgICAgICAgICdhY2NlbnQnOiAnYWNjZW50JyxcclxuICAgICAgICAgICAgJ3NlY29uZGFyeSc6ICdzZWNvbmRhcnknLFxyXG4gICAgICAgICAgICAnYWx0ZXJuYXRlMSc6ICdhbHRlcm5hdGUxJyxcclxuICAgICAgICAgICAgJ2FsdGVybmF0ZTInOiAnYWx0ZXJuYXRlMicsXHJcbiAgICAgICAgICAgICdhbHRlcm5hdGUzJzogJ2FsdGVybmF0ZTMnLFxyXG4gICAgICAgICAgICAndmlicmFudDEnOiAndmlicmFudDEnLFxyXG4gICAgICAgICAgICAndmlicmFudDInOiAndmlicmFudDInLFxyXG4gICAgICAgICAgICAnZ3JleTEnOiAnZ3JleTEnLFxyXG4gICAgICAgICAgICAnZ3JleTInOiAnZ3JleTInLFxyXG4gICAgICAgICAgICAnZ3JleTMnOiAnZ3JleTMnLFxyXG4gICAgICAgICAgICAnZ3JleTQnOiAnZ3JleTQnLFxyXG4gICAgICAgICAgICAnZ3JleTUnOiAnZ3JleTUnLFxyXG4gICAgICAgICAgICAnZ3JleTYnOiAnZ3JleTYnLFxyXG4gICAgICAgICAgICAnZ3JleTcnOiAnZ3JleTcnLFxyXG4gICAgICAgICAgICAnZ3JleTgnOiAnZ3JleTgnLFxyXG4gICAgICAgICAgICAnY2hhcnQxJzogJ2NoYXJ0MScsXHJcbiAgICAgICAgICAgICdjaGFydDInOiAnY2hhcnQyJyxcclxuICAgICAgICAgICAgJ2NoYXJ0Myc6ICdjaGFydDMnLFxyXG4gICAgICAgICAgICAnY2hhcnQ0JzogJ2NoYXJ0NCcsXHJcbiAgICAgICAgICAgICdjaGFydDUnOiAnY2hhcnQ1JyxcclxuICAgICAgICAgICAgJ2NoYXJ0Nic6ICdjaGFydDYnLFxyXG4gICAgICAgICAgICAnb2snOiAnb2snLFxyXG4gICAgICAgICAgICAnd2FybmluZyc6ICd3YXJuaW5nJyxcclxuICAgICAgICAgICAgJ2NyaXRpY2FsJzogJ2NyaXRpY2FsJyxcclxuICAgICAgICAgICAgJ3BhcnRpdGlvbjEnOiAncGFydGl0aW9uMScsXHJcbiAgICAgICAgICAgICdwYXJ0aXRpb245JzogJ3BhcnRpdGlvbjknLFxyXG4gICAgICAgICAgICAncGFydGl0aW9uMTAnOiAncGFydGl0aW9uMTAnLFxyXG4gICAgICAgICAgICAncGFydGl0aW9uMTEnOiAncGFydGl0aW9uMTEnLFxyXG4gICAgICAgICAgICAncGFydGl0aW9uMTInOiAncGFydGl0aW9uMTInLFxyXG4gICAgICAgICAgICAncGFydGl0aW9uMTMnOiAncGFydGl0aW9uMTMnLFxyXG4gICAgICAgICAgICAncGFydGl0aW9uMTQnOiAncGFydGl0aW9uMTQnLFxyXG4gICAgICAgICAgICAnc29jaWFsLWNoYXJ0LW5vZGUnOiAnc29jaWFsLWNoYXJ0LW5vZGUnLFxyXG4gICAgICAgICAgICAnc29jaWFsLWNoYXJ0LWVkZ2UnOiAnc29jaWFsLWNoYXJ0LWVkZ2UnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1pY3JvRm9jdXM6IHtcclxuICAgICAgICAnY29sb3JWYWx1ZVNldCc6IHtcclxuICAgICAgICAgICAgJ2NlcnVsZWFuJzogJyMxNjY4YzEnLFxyXG4gICAgICAgICAgICAnYXF1YSc6ICcjMjljZWZmJyxcclxuICAgICAgICAgICAgJ2FxdWFtYXJpbmUnOiAnIzJmZDZjMycsXHJcbiAgICAgICAgICAgICdmdWNoc2lhJzogJyNjNjE3OWQnLFxyXG4gICAgICAgICAgICAnaW5kaWdvJzogJyM3NDI1YWQnLFxyXG4gICAgICAgICAgICAnZGFyay1ibHVlJzogJyMyMzFjYTUnLFxyXG4gICAgICAgICAgICAnd2hpdGUnOiAnI2ZmZmZmZicsXHJcbiAgICAgICAgICAgICdzbGlnaHRseS1ncmF5JzogJyNmNWY3ZjgnLFxyXG4gICAgICAgICAgICAnYnJpZ2h0LWdyYXknOiAnI2YxZjJmMycsXHJcbiAgICAgICAgICAgICdncmF5JzogJyNkY2RlZGYnLFxyXG4gICAgICAgICAgICAnc2lsdmVyJzogJyNiZGJlYzAnLFxyXG4gICAgICAgICAgICAnZGltLWdyYXknOiAnIzY1NjY2OCcsXHJcbiAgICAgICAgICAgICdkYXJrLWdyYXknOiAnIzMyMzQzNScsXHJcbiAgICAgICAgICAgICdibGFjayc6ICcjMDAwMDAwJyxcclxuICAgICAgICAgICAgJ2NyaW1zb24tbmVnYXRpdmUnOiAnI2U1MDA0YycsXHJcbiAgICAgICAgICAgICdhcHJpY290JzogJyNmNDhiMzQnLFxyXG4gICAgICAgICAgICAneWVsbG93JzogJyNmY2RiMWYnLFxyXG4gICAgICAgICAgICAnZ3JlZW4tcG9zaXRpdmUnOiAnIzFhYWM2MCcsXHJcbiAgICAgICAgICAgICd1bHRyYW1hcmluZSc6ICcjMzkzOWM2JyxcclxuICAgICAgICAgICAgJ3NreWJsdWUnOiAnIzAwYWJmMycsXHJcbiAgICAgICAgICAgICdwYWxlLWFxdWEnOiAnIzQzZTRmZicsXHJcbiAgICAgICAgICAgICdwYWxlLWdyZWVuJzogJyMxZmZiYmEnLFxyXG4gICAgICAgICAgICAnbGltZSc6ICcjNzVkYTRkJyxcclxuICAgICAgICAgICAgJ29yYW5nZSc6ICcjZmZjZTAwJyxcclxuICAgICAgICAgICAgJ21hZ2VudGEnOiAnI2ViMjNjMicsXHJcbiAgICAgICAgICAgICdwYWxlLXB1cnBsZSc6ICcjYmE0N2UyJyxcclxuICAgICAgICAgICAgJ2RhcmstdWx0cmFtYXJpbmUnOiAnIzI3MTc4MicsXHJcbiAgICAgICAgICAgICdzdGVlbGJsdWUnOiAnIzAxNDI3MicsXHJcbiAgICAgICAgICAgICdhcmN0aWMtYmx1ZSc6ICcjMGI4ZWFjJyxcclxuICAgICAgICAgICAgJ2VtZXJhbGQnOiAnIzAwYTk4OScsXHJcbiAgICAgICAgICAgICdvbGl2ZSc6ICcjNWJiYTM2JyxcclxuICAgICAgICAgICAgJ2dvbGRlbnJvZCc6ICcjZmZiMDAwJyxcclxuICAgICAgICAgICAgJ3B1cnBsZSc6ICcjOWIxZTgzJyxcclxuICAgICAgICAgICAgJ3BhbGUtZWdncGxhbnQnOiAnIzUyMTZhYycsXHJcbiAgICAgICAgICAgICdyZWQnOiAnI2ZmNDU0ZicsXHJcbiAgICAgICAgICAgICdwYWxlLWFtYmVyJzogJyNmZmIyNGQnLFxyXG4gICAgICAgICAgICAncGFsZS1sZW1vbic6ICcjZmRlMTU5JyxcclxuICAgICAgICAgICAgJ3BhbGUtZW1lcmFsZCc6ICcjMzNjMTgwJyxcclxuICAgICAgICAgICAgJ3BsdW0nOiAnI2IyMTY0NicsXHJcbiAgICAgICAgICAgICdjb3BwZXInOiAnI2U1NzgyOCcsXHJcbiAgICAgICAgICAgICdhbWJlcic6ICcjZmZjMDAyJyxcclxuICAgICAgICAgICAgJ2xlYWYtZ3JlZW4nOiAnIzExOGM0ZicsXHJcbiAgICAgICAgICAgICdmb3Jlc3QtZ3JlZW4nOiAnIzAwNjQ1YScsXHJcbiAgICAgICAgICAgICdwcmltYXJ5JzogJyMwMDczZTcnLFxyXG4gICAgICAgICAgICAnYWNjZW50JzogJyM3NDI1YWQnLFxyXG4gICAgICAgICAgICAnc2Vjb25kYXJ5JzogJyNmZmZmZmYnLFxyXG4gICAgICAgICAgICAnYWx0ZXJuYXRlMSc6ICcjMjljZWZmJyxcclxuICAgICAgICAgICAgJ2FsdGVybmF0ZTInOiAnIzJmZDZjMycsXHJcbiAgICAgICAgICAgICdhbHRlcm5hdGUzJzogJyNjNjE3OWQnLFxyXG4gICAgICAgICAgICAndmlicmFudDEnOiAnIzQzZTRmZicsXHJcbiAgICAgICAgICAgICd2aWJyYW50Mic6ICcjZmZjZTAwJyxcclxuICAgICAgICAgICAgJ2dyZXkxJzogJyMwMDAwMDAnLFxyXG4gICAgICAgICAgICAnZ3JleTInOiAnIzMyMzQzNScsXHJcbiAgICAgICAgICAgICdncmV5Myc6ICcjNjU2NjY4JyxcclxuICAgICAgICAgICAgJ2dyZXk0JzogJyNiZGJlYzAnLFxyXG4gICAgICAgICAgICAnZ3JleTUnOiAnI2RjZGVkZicsXHJcbiAgICAgICAgICAgICdncmV5Nic6ICcjZjFmMmYzJyxcclxuICAgICAgICAgICAgJ2dyZXk3JzogJyNmNWY3ZjgnLFxyXG4gICAgICAgICAgICAnZ3JleTgnOiAnI2ZmZmZmZicsXHJcbiAgICAgICAgICAgICdjaGFydDEnOiAnIzM5MzljNicsXHJcbiAgICAgICAgICAgICdjaGFydDInOiAnIzAwYWJmMycsXHJcbiAgICAgICAgICAgICdjaGFydDMnOiAnIzc1ZGE0ZCcsXHJcbiAgICAgICAgICAgICdjaGFydDQnOiAnI2ZmY2UwMCcsXHJcbiAgICAgICAgICAgICdjaGFydDUnOiAnI2ViMjNjMicsXHJcbiAgICAgICAgICAgICdjaGFydDYnOiAnI2JhNDdlMicsXHJcbiAgICAgICAgICAgICdvayc6ICcjMWFhYzYwJyxcclxuICAgICAgICAgICAgJ3dhcm5pbmcnOiAnI2Y0OGIzNCcsXHJcbiAgICAgICAgICAgICdjcml0aWNhbCc6ICdlNTAwNGMnLFxyXG4gICAgICAgICAgICAncGFydGl0aW9uMSc6ICcjNzQyNWFkJyxcclxuICAgICAgICAgICAgJ3BhcnRpdGlvbjknOiAnIzUyMTZhYycsXHJcbiAgICAgICAgICAgICdwYXJ0aXRpb24xMCc6ICcjNWJiYTM2JyxcclxuICAgICAgICAgICAgJ3BhcnRpdGlvbjExJzogJyMwMTQyNzInLFxyXG4gICAgICAgICAgICAncGFydGl0aW9uMTInOiAnI2ZmYjAwMCcsXHJcbiAgICAgICAgICAgICdwYXJ0aXRpb24xMyc6ICcjYmRiZWMwJyxcclxuICAgICAgICAgICAgJ3BhcnRpdGlvbjE0JzogJyMyNzE3ODInLFxyXG4gICAgICAgICAgICAnc29jaWFsLWNoYXJ0LW5vZGUnOiAnI2ZmMDBmZicsXHJcbiAgICAgICAgICAgICdzb2NpYWwtY2hhcnQtZWRnZSc6ICcjZmYwMGZmJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGhlbWVDb2xvcnMge1xyXG4gICAgW25hbWU6IHN0cmluZ106IFRoZW1lQ29sb3I7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29sb3JTZXQge1xyXG4gICAgY29sb3JDbGFzc1NldD86IENvbG9yQ2xhc3NTZXQ7XHJcbiAgICBjb2xvclZhbHVlU2V0PzogQ29sb3JWYWx1ZVNldDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb2xvckNsYXNzU2V0IHtcclxuICAgIFtuYW1lOiBzdHJpbmddOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29sb3JWYWx1ZVNldCB7XHJcbiAgICBbbmFtZTogc3RyaW5nXTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBDb2xvcklkZW50aWZpZXIgPSBzdHJpbmc7XHJcbiJdfQ==