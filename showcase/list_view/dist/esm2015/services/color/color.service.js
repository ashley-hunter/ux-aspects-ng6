/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
export class ColorService {
    constructor() {
        this._colorSet = colorSets.keppel;
        if (this._colorSet.colorClassSet) {
            this.setColors();
        }
        else {
            for (let /** @type {?} */ key in this._colorSet.colorValueSet) {
                this._colors[key] = this.getColorValueByHex(this._colorSet.colorValueSet[key]);
            }
        }
    }
    /**
     * @return {?}
     */
    setColors() {
        this._html = '';
        for (let /** @type {?} */ key in this._colorSet.colorClassSet) {
            this._html += '<div class="' + this._colorSet.colorClassSet[key] + '-color"></div>';
        }
        this._element = document.createElement('div');
        this._element.className = 'color-chart';
        this._element.innerHTML = this._html;
        document.body.appendChild(this._element);
        this._colors = {};
        for (let /** @type {?} */ key in this._colorSet.colorClassSet) {
            this._colors[key] = this.getColorValue(this._colorSet.colorClassSet[key]);
        }
        this._element.parentNode.removeChild(this._element);
    }
    /**
     * @param {?} color
     * @return {?}
     */
    getColorValueByHex(color) {
        const /** @type {?} */ hex = color.replace('#', '');
        const /** @type {?} */ r = parseInt(hex.substring(0, 2), 16).toString();
        const /** @type {?} */ g = parseInt(hex.substring(2, 4), 16).toString();
        const /** @type {?} */ b = parseInt(hex.substring(4, 6), 16).toString();
        return new ThemeColor(r, g, b, '1');
    }
    /**
     * @param {?} color
     * @return {?}
     */
    getColorValue(color) {
        const /** @type {?} */ target = this._element.querySelector('.' + this._colorSet.colorClassSet[color] + '-color');
        if (!target) {
            throw new Error('Invalid color');
        }
        const /** @type {?} */ colorValue = window.getComputedStyle(target).backgroundColor;
        const /** @type {?} */ rgba = colorValue.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
        return new ThemeColor(rgba[1], rgba[2], rgba[3], rgba[4]);
    }
    /**
     * @param {?} color
     * @return {?}
     */
    getColor(color) {
        const /** @type {?} */ themeColor = this._colors[this.resolveColorName(color)];
        if (!themeColor) {
            throw new Error('Color not found: ' + color);
        }
        return new ThemeColor(themeColor.getRed(), themeColor.getGreen(), themeColor.getBlue(), themeColor.getAlpha());
    }
    /**
     * @return {?}
     */
    getColorSet() {
        return this._colorSet;
    }
    /**
     * @param {?} colorSet
     * @return {?}
     */
    setColorSet(colorSet) {
        this._colorSet = colorSet;
        this._colors = {};
        if (this._colorSet.colorClassSet) {
            this.setColors();
        }
        else {
            for (let /** @type {?} */ key in this._colorSet.colorValueSet) {
                this._colors[key] = this.getColorValueByHex(this._colorSet.colorValueSet[key]);
            }
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    resolve(value) {
        if (!value) {
            return;
        }
        const /** @type {?} */ colorName = this.resolveColorName(value);
        for (let /** @type {?} */ color in this._colors) {
            if (colorName === color.toLowerCase()) {
                return this.getColor(colorName).toRgba();
            }
        }
        return value;
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    resolveColorName(value = '') {
        return value.replace(/\s+/g, '-').toLowerCase();
    }
}
ColorService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ColorService.ctorParameters = () => [];
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
export class ThemeColor {
    /**
     * @param {?} r
     * @param {?} g
     * @param {?} b
     * @param {?} a
     */
    constructor(r, g, b, a) {
        this._r = r;
        this._g = g;
        this._b = b;
        this._a = a === undefined ? '1' : a;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    static parse(value) {
        let /** @type {?} */ r, /** @type {?} */ g, /** @type {?} */ b, /** @type {?} */ a = '1';
        const /** @type {?} */ rgbaPattern = /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/;
        const /** @type {?} */ shortHexPattern = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        const /** @type {?} */ longHexPattern = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/;
        const /** @type {?} */ rgbaMatch = value.match(rgbaPattern);
        const /** @type {?} */ shortHexMatch = value.match(shortHexPattern);
        const /** @type {?} */ longHexMatch = value.match(longHexPattern);
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
            throw new Error(`Cannot parse color - ${value} is not a valid color.`);
        }
        return new ThemeColor(r, g, b, a);
    }
    /**
     * @return {?}
     */
    toHex() {
        let /** @type {?} */ red = parseInt(this._r).toString(16);
        let /** @type {?} */ green = parseInt(this._g).toString(16);
        let /** @type {?} */ blue = parseInt(this._b).toString(16);
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
    }
    /**
     * @return {?}
     */
    toRgb() {
        return 'rgb(' + this._r + ', ' + this._g + ', ' + this._b + ')';
    }
    /**
     * @return {?}
     */
    toRgba() {
        return 'rgba(' + this._r + ', ' + this._g + ', ' + this._b + ', ' + this._a + ')';
    }
    /**
     * @return {?}
     */
    getRed() {
        return this._r;
    }
    /**
     * @return {?}
     */
    getGreen() {
        return this._g;
    }
    /**
     * @return {?}
     */
    getBlue() {
        return this._b;
    }
    /**
     * @return {?}
     */
    getAlpha() {
        return this._a;
    }
    /**
     * @param {?} red
     * @return {?}
     */
    setRed(red) {
        this._r = red;
        return this;
    }
    /**
     * @param {?} green
     * @return {?}
     */
    setGreen(green) {
        this._g = green;
        return this;
    }
    /**
     * @param {?} blue
     * @return {?}
     */
    setBlue(blue) {
        this._b = blue;
        return this;
    }
    /**
     * @param {?} alpha
     * @return {?}
     */
    setAlpha(alpha) {
        this._a = alpha.toString();
        return this;
    }
}
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
export const /** @type {?} */ colorSets = {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B1eC1hc3BlY3RzL3V4LWFzcGVjdHMvIiwic291cmNlcyI6WyJzZXJ2aWNlcy9jb2xvci9jb2xvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE1BQU07SUFPRjt5QkFGeUIsU0FBUyxDQUFDLE1BQU07UUFHckMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNwQjtRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osR0FBRyxDQUFDLENBQUMscUJBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztnQkFDM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUNsRjtTQUNKO0tBQ0o7Ozs7SUFFTyxTQUFTO1FBRWIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFFaEIsR0FBRyxDQUFDLENBQUMscUJBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsS0FBSyxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQztTQUN2RjtRQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUM7UUFDeEMsSUFBSSxD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OztJQUVELEtBQUs7UUFDRCxxQkFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDekMscUJBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLHFCQUFJLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUUxQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakIsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7U0FDbkI7UUFDRCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsS0FBSyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUM7U0FDdkI7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUM7U0FDckI7UUFFRCxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDO0tBQ25DOzs7O0lBRUQsS0FBSztRQUNELE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUM7S0FDbkU7Ozs7SUFFRCxNQUFNO1FBQ0YsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsRUFB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Q2xCLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxTQUFTO1lBQ25CLElBQUksRUFBRSxTQUFTO1lBQ2YsU0FBUyxFQUFFLFNBQVM7WUFDcEIsVUFBVSxFQUFFLFFBQVE7WUFDcEIsWUFBWSxFQUFFLFNBQVM7WUFDdkIsWUFBWSxFQUFFLFNBQVM7WUFDdkIsYUFBYSxFQUFFLFNBQVM7WUFDeEIsYUFBYSxFQUFFLFNBQVM7WUFDeEIsYUFBYSxFQUFFLFNBQVM7WUFDeEIsYUFBYSxFQUFFLFNBQVM7WUFDeEIsYUFBYSxFQUFFLFNBQVM7WUFDeEIsbUJBQW1CLEVBQUUsU0FBUztZQUM5QixtQkFBbUIsRUFBRSxTQUFTO1NBQ2pDO0tBQ0o7Q0FDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb2xvckNsYXNzU2V0LCBDb2xvclZhbHVlU2V0IH0gZnJvbSAnLi9jb2xvci5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENvbG9yU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfaHRtbDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIF9jb2xvcnM6IFRoZW1lQ29sb3JzO1xyXG4gICAgcHJpdmF0ZSBfY29sb3JTZXQ6IGFueSA9IGNvbG9yU2V0cy5rZXBwZWw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbG9yU2V0LmNvbG9yQ2xhc3NTZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRDb2xvcnMoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5fY29sb3JTZXQuY29sb3JWYWx1ZVNldCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sb3JzW2tleV0gPSB0aGlzLmdldENvbG9yVmFsdWVCeUhleCh0aGlzLl9jb2xvclNldC5jb2xvclZhbHVlU2V0W2tleV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0Q29sb3JzKCkge1xyXG5cclxuICAgICAgICB0aGlzLl9odG1sID0gJyc7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLl9jb2xvclNldC5jb2xvckNsYXNzU2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2h0bWwgKz0gJzxkaXYgY2xhc3M9XCInICsgdGhpcy5fY29sb3JTZXQuY29sb3JDbGFzc1NldFtrZXldICsgJy1jb2xvclwiPjwvZGl2Pic7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc05hbWUgPSAnY29sb3ItY2hhcnQnO1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5faHRtbDtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLl9lbGVtZW50KTtcclxuXHJcbiAgICAgICAgdGhpcy5fY29sb3JzID0ge307XHJcblxyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLl9jb2xvclNldC5jb2xvckNsYXNzU2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvbG9yc1trZXldID0gdGhpcy5nZXRDb2xvclZhbHVlKHRoaXMuX2NvbG9yU2V0LmNvbG9yQ2xhc3NTZXRba2V5XSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5fZWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRDb2xvclZhbHVlQnlIZXgoY29sb3I6IHN0cmluZyk6IFRoZW1lQ29sb3Ige1xyXG4gICAgICAgIGNvbnN0IGhleCA9IGNvbG9yLnJlcGxhY2UoJyMnLCAnJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHIgPSBwYXJzZUludChoZXguc3Vic3RyaW5nKDAsIDIpLCAxNikudG9TdHJpbmcoKTtcclxuICAgICAgICBjb25zdCBnID0gcGFyc2VJbnQoaGV4LnN1YnN0cmluZygyLCA0KSwgMTYpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgY29uc3QgYiA9IHBhcnNlSW50KGhleC5zdWJzdHJpbmcoNCwgNiksIDE2KS50b1N0cmluZygpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFRoZW1lQ29sb3IociwgZywgYiwgJzEnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldENvbG9yVmFsdWUoY29sb3I6IENvbG9ySWRlbnRpZmllcik6IFRoZW1lQ29sb3Ige1xyXG5cclxuICAgICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgdGhpcy5fY29sb3JTZXQuY29sb3JDbGFzc1NldFtjb2xvcl0gKyAnLWNvbG9yJyk7XHJcblxyXG4gICAgICAgIGlmICghdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjb2xvcicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY29sb3JWYWx1ZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRhcmdldCkuYmFja2dyb3VuZENvbG9yO1xyXG5cclxuICAgICAgICBjb25zdCByZ2JhID0gY29sb3JWYWx1ZS5tYXRjaCgvXnJnYmE/XFwoKFxcZCspLFxccyooXFxkKyksXFxzKihcXGQrKSg/OixcXHMqKFxcZCsoPzpcXC5cXGQrKT8pKT9cXCkkLyk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgVGhlbWVDb2xvcihyZ2JhWzFdLCByZ2JhWzJdLCByZ2JhWzNdLCByZ2JhWzRdKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb2xvcihjb2xvcjogQ29sb3JJZGVudGlmaWVyKTogVGhlbWVDb2xvciB7XHJcbiAgICAgICAgY29uc3QgdGhlbWVDb2xvciA9IHRoaXMuX2NvbG9yc1t0aGlzLnJlc29sdmVDb2xvck5hbWUoY29sb3IpXTtcclxuICAgICAgICBpZiAoIXRoZW1lQ29sb3IpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb2xvciBub3QgZm91bmQ6ICcgKyBjb2xvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFRoZW1lQ29sb3IodGhlbWVDb2xvci5nZXRSZWQoKSwgdGhlbWVDb2xvci5nZXRHcmVlbigpLCB0aGVtZUNvbG9yLmdldEJsdWUoKSwgdGhlbWVDb2xvci5nZXRBbHBoYSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb2xvclNldCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29sb3JTZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q29sb3JTZXQoY29sb3JTZXQ6IENvbG9yU2V0KSB7XHJcbiAgICAgICAgdGhpcy5fY29sb3JTZXQgPSBjb2xvclNldDtcclxuICAgICAgICB0aGlzLl9jb2xvcnMgPSB7fTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbG9yU2V0LmNvbG9yQ2xhc3NTZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRDb2xvcnMoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5fY29sb3JTZXQuY29sb3JWYWx1ZVNldCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY29sb3JzW2tleV0gPSB0aGlzLmdldENvbG9yVmFsdWVCeUhleCh0aGlzLl9jb2xvclNldC5jb2xvclZhbHVlU2V0W2tleV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlc29sdmUodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjb2xvck5hbWUgPSB0aGlzLnJlc29sdmVDb2xvck5hbWUodmFsdWUpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBjb2xvciBpbiB0aGlzLl9jb2xvcnMpIHtcclxuICAgICAgICAgICAgaWYgKGNvbG9yTmFtZSA9PT0gY29sb3IudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29sb3IoY29sb3JOYW1lKS50b1JnYmEoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc29sdmVDb2xvck5hbWUodmFsdWU6IHN0cmluZyA9ICcnKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvXFxzKy9nLCAnLScpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUaGVtZUNvbG9yIHtcclxuXHJcbiAgICBwcml2YXRlIF9yOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9nOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9iOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9hOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3Iocjogc3RyaW5nLCBnOiBzdHJpbmcsIGI6IHN0cmluZywgYTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fciA9IHI7XHJcbiAgICAgICAgdGhpcy5fZyA9IGc7XHJcbiAgICAgICAgdGhpcy5fYiA9IGI7XHJcbiAgICAgICAgdGhpcy5fYSA9IGEgPT09IHVuZGVmaW5lZCA/ICcxJyA6IGE7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHBhcnNlKHZhbHVlOiBzdHJpbmcpOiBUaGVtZUNvbG9yIHtcclxuICAgICAgICBsZXQgciwgZywgYiwgYSA9ICcxJztcclxuXHJcbiAgICAgICAgY29uc3QgcmdiYVBhdHRlcm4gPSAvXnJnYmE/XFwoKFxcZCspLFxccyooXFxkKyksXFxzKihcXGQrKSg/OixcXHMqKFxcZCsoPzpcXC5cXGQrKT8pKT9cXCkkLztcclxuICAgICAgICBjb25zdCBzaG9ydEhleFBhdHRlcm4gPSAvXiM/KFthLWZcXGRdKShbYS1mXFxkXSkoW2EtZlxcZF0pJC9pO1xyXG4gICAgICAgIGNvbnN0IGxvbmdIZXhQYXR0ZXJuID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvO1xyXG5cclxuICAgICAgICBjb25zdCByZ2JhTWF0Y2ggPSB2YWx1ZS5tYXRjaChyZ2JhUGF0dGVybik7XHJcbiAgICAgICAgY29uc3Qgc2hvcnRIZXhNYXRjaCA9IHZhbHVlLm1hdGNoKHNob3J0SGV4UGF0dGVybik7XHJcbiAgICAgICAgY29uc3QgbG9uZ0hleE1hdGNoID0gdmFsdWUubWF0Y2gobG9uZ0hleFBhdHRlcm4pO1xyXG5cclxuICAgICAgICBpZiAocmdiYU1hdGNoKSB7XHJcbiAgICAgICAgICAgIHIgPSByZ2JhTWF0Y2hbMV07XHJcbiAgICAgICAgICAgIGcgPSByZ2JhTWF0Y2hbMl07XHJcbiAgICAgICAgICAgIGIgPSByZ2JhTWF0Y2hbM107XHJcbiAgICAgICAgICAgIGEgPSByZ2JhTWF0Y2hbNF0gPyByZ2JhTWF0Y2hbNF0gOiAnMSc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChsb25nSGV4TWF0Y2gpIHtcclxuICAgICAgICAgICAgciA9IHBhcnNlSW50KGxvbmdIZXhNYXRjaFsxXSwgMTYpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGcgPSBwYXJzZUludChsb25nSGV4TWF0Y2hbMl0sIDE2KS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBiID0gcGFyc2VJbnQobG9uZ0hleE1hdGNoWzNdLCAxNikudG9TdHJpbmcoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHNob3J0SGV4TWF0Y2gpIHtcclxuICAgICAgICAgICAgciA9IHBhcnNlSW50KHNob3J0SGV4TWF0Y2hbMV0gKyBzaG9ydEhleE1hdGNoWzFdLCAxNikudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgZyA9IHBhcnNlSW50KHNob3J0SGV4TWF0Y2hbMl0gKyBzaG9ydEhleE1hdGNoWzJdLCAxNikudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgYiA9IHBhcnNlSW50KHNob3J0SGV4TWF0Y2hbM10gKyBzaG9ydEhleE1hdGNoWzNdLCAxNikudG9TdHJpbmcoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBwYXJzZSBjb2xvciAtICR7dmFsdWV9IGlzIG5vdCBhIHZhbGlkIGNvbG9yLmApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFRoZW1lQ29sb3IociwgZywgYiwgYSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9IZXgoKSB7XHJcbiAgICAgICAgbGV0IHJlZCA9IHBhcnNlSW50KHRoaXMuX3IpLnRvU3RyaW5nKDE2KTtcclxuICAgICAgICBsZXQgZ3JlZW4gPSBwYXJzZUludCh0aGlzLl9nKS50b1N0cmluZygxNik7XHJcbiAgICAgICAgbGV0IGJsdWUgPSBwYXJzZUludCh0aGlzLl9iKS50b1N0cmluZygxNik7XHJcblxyXG4gICAgICAgIGlmIChyZWQubGVuZ3RoIDwgMikge1xyXG4gICAgICAgICAgICByZWQgPSAnMCcgKyByZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChncmVlbi5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgICAgIGdyZWVuID0gJzAnICsgZ3JlZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChibHVlLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICAgICAgYmx1ZSA9ICcwJyArIGJsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gJyMnICsgcmVkICsgZ3JlZW4gKyBibHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHRvUmdiKCkge1xyXG4gICAgICAgIHJldHVybiAncmdiKCcgKyB0aGlzLl9yICsgJywgJyArIHRoaXMuX2cgKyAnLCAnICsgdGhpcy5fYiArICcpJztcclxuICAgIH1cclxuXHJcbiAgICB0b1JnYmEoKSB7XHJcbiAgICAgICAgcmV0dXJuICdyZ2JhKCcgKyB0aGlzLl9yICsgJywgJyArIHRoaXMuX2cgKyAnLCAnICsgdGhpcy5fYiArICcsICcgKyB0aGlzLl9hICsgJyknO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRHcmVlbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZztcclxuICAgIH1cclxuXHJcbiAgICBnZXRCbHVlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9iO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFscGhhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFJlZChyZWQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX3IgPSByZWQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0R3JlZW4oZ3JlZW46IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2cgPSBncmVlbjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzZXRCbHVlKGJsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2IgPSBibHVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFscGhhKGFscGhhOiBzdHJpbmcgfCBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9hID0gYWxwaGEudG9TdHJpbmcoKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbG9yU2V0cyA9IHtcclxuICAgIGtlcHBlbDoge1xyXG4gICAgICAgIGNvbG9yQ2xhc3NTZXQ6IHtcclxuICAgICAgICAgICAgJ3ByaW1hcnknOiAncHJpbWFyeScsXHJcbiAgICAgICAgICAgICdhY2NlbnQnOiAnYWNjZW50JyxcclxuICAgICAgICAgICAgJ3NlY29uZGFyeSc6ICdzZWNvbmRhcnknLFxyXG4gICAgICAgICAgICAnYWx0ZXJuYXRlMSc6ICdhbHRlcm5hdGUxJyxcclxuICAgICAgICAgICAgJ2FsdGVybmF0ZTInOiAnYWx0ZXJuYXRlMicsXHJcbiAgICAgICAgICAgICdhbHRlcm5hdGUzJzogJ2FsdGVybmF0ZTMnLFxyXG4gICAgICAgICAgICAndmlicmFudDEnOiAndmlicmFudDEnLFxyXG4gICAgICAgICAgICAndmlicmFudDInOiAndmlicmFudDInLFxyXG4gICAgICAgICAgICAnZ3JleTEnOiAnZ3JleTEnLFxyXG4gICAgICAgICAgICAnZ3JleTInOiAnZ3JleTInLFxyXG4gICAgICAgICAgICAnZ3JleTMnOiAnZ3JleTMnLFxyXG4gICAgICAgICAgICAnZ3JleTQnOiAnZ3JleTQnLFxyXG4gICAgICAgICAgICAnZ3JleTUnOiAnZ3JleTUnLFxyXG4gICAgICAgICAgICAnZ3JleTYnOiAnZ3JleTYnLFxyXG4gICAgICAgICAgICAnZ3JleTcnOiAnZ3JleTcnLFxyXG4gICAgICAgICAgICAnZ3JleTgnOiAnZ3JleTgnLFxyXG4gICAgICAgICAgICAnY2hhcnQxJzogJ2NoYXJ0MScsXHJcbiAgICAgICAgICAgICdjaGFydDInOiAnY2hhcnQyJyxcclxuICAgICAgICAgICAgJ2NoYXJ0Myc6ICdjaGFydDMnLFxyXG4gICAgICAgICAgICAnY2hhcnQ0JzogJ2NoYXJ0NCcsXHJcbiAgICAgICAgICAgICdjaGFydDUnOiAnY2hhcnQ1JyxcclxuICAgICAgICAgICAgJ2NoYXJ0Nic6ICdjaGFydDYnLFxyXG4gICAgICAgICAgICAnb2snOiAnb2snLFxyXG4gICAgICAgICAgICAnd2FybmluZyc6ICd3YXJuaW5nJyxcclxuICAgICAgICAgICAgJ2NyaXRpY2FsJzogJ2NyaXRpY2FsJyxcclxuICAgICAgICAgICAgJ3BhcnRpdGlvbjEnOiAncGFydGl0aW9uMScsXHJcbiAgICAgICAgICAgICdwYXJ0aXRpb245JzogJ3BhcnRpdGlvbjknLFxyXG4gICAgICAgICAgICAncGFydGl0aW9uMTAnOiAncGFydGl0aW9uMTAnLFxyXG4gICAgICAgICAgICAncGFydGl0aW9uMTEnOiAncGFydGl0aW9uMTEnLFxyXG4gICAgICAgICAgICAncGFydGl0aW9uMTInOiAncGFydGl0aW9uMTInLFxyXG4gICAgICAgICAgICAncGFydGl0aW9uMTMnOiAncGFydGl0aW9uMTMnLFxyXG4gICAgICAgICAgICAncGFydGl0aW9uMTQnOiAncGFydGl0aW9uMTQnLFxyXG4gICAgICAgICAgICAnc29jaWFsLWNoYXJ0LW5vZGUnOiAnc29jaWFsLWNoYXJ0LW5vZGUnLFxyXG4gICAgICAgICAgICAnc29jaWFsLWNoYXJ0LWVkZ2UnOiAnc29jaWFsLWNoYXJ0LWVkZ2UnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1pY3JvRm9jdXM6IHtcclxuICAgICAgICAnY29sb3JWYWx1ZVNldCc6IHtcclxuICAgICAgICAgICAgJ2NlcnVsZWFuJzogJyMxNjY4YzEnLFxyXG4gICAgICAgICAgICAnYXF1YSc6ICcjMjljZWZmJyxcclxuICAgICAgICAgICAgJ2FxdWFtYXJpbmUnOiAnIzJmZDZjMycsXHJcbiAgICAgICAgICAgICdmdWNoc2lhJzogJyNjNjE3OWQnLFxyXG4gICAgICAgICAgICAnaW5kaWdvJzogJyM3NDI1YWQnLFxyXG4gICAgICAgICAgICAnZGFyay1ibHVlJzogJyMyMzFjYTUnLFxyXG4gICAgICAgICAgICAnd2hpdGUnOiAnI2ZmZmZmZicsXHJcbiAgICAgICAgICAgICdzbGlnaHRseS1ncmF5JzogJyNmNWY3ZjgnLFxyXG4gICAgICAgICAgICAnYnJpZ2h0LWdyYXknOiAnI2YxZjJmMycsXHJcbiAgICAgICAgICAgICdncmF5JzogJyNkY2RlZGYnLFxyXG4gICAgICAgICAgICAnc2lsdmVyJzogJyNiZGJlYzAnLFxyXG4gICAgICAgICAgICAnZGltLWdyYXknOiAnIzY1NjY2OCcsXHJcbiAgICAgICAgICAgICdkYXJrLWdyYXknOiAnIzMyMzQzNScsXHJcbiAgICAgICAgICAgICdibGFjayc6ICcjMDAwMDAwJyxcclxuICAgICAgICAgICAgJ2NyaW1zb24tbmVnYXRpdmUnOiAnI2U1MDA0YycsXHJcbiAgICAgICAgICAgICdhcHJpY290JzogJyNmNDhiMzQnLFxyXG4gICAgICAgICAgICAneWVsbG93JzogJyNmY2RiMWYnLFxyXG4gICAgICAgICAgICAnZ3JlZW4tcG9zaXRpdmUnOiAnIzFhYWM2MCcsXHJcbiAgICAgICAgICAgICd1bHRyYW1hcmluZSc6ICcjMzkzOWM2JyxcclxuICAgICAgICAgICAgJ3NreWJsdWUnOiAnIzAwYWJmMycsXHJcbiAgICAgICAgICAgICdwYWxlLWFxdWEnOiAnIzQzZTRmZicsXHJcbiAgICAgICAgICAgICdwYWxlLWdyZWVuJzogJyMxZmZiYmEnLFxyXG4gICAgICAgICAgICAnbGltZSc6ICcjNzVkYTRkJyxcclxuICAgICAgICAgICAgJ29yYW5nZSc6ICcjZmZjZTAwJyxcclxuICAgICAgICAgICAgJ21hZ2VudGEnOiAnI2ViMjNjMicsXHJcbiAgICAgICAgICAgICdwYWxlLXB1cnBsZSc6ICcjYmE0N2UyJyxcclxuICAgICAgICAgICAgJ2RhcmstdWx0cmFtYXJpbmUnOiAnIzI3MTc4MicsXHJcbiAgICAgICAgICAgICdzdGVlbGJsdWUnOiAnIzAxNDI3MicsXHJcbiAgICAgICAgICAgICdhcmN0aWMtYmx1ZSc6ICcjMGI4ZWFjJyxcclxuICAgICAgICAgICAgJ2VtZXJhbGQnOiAnIzAwYTk4OScsXHJcbiAgICAgICAgICAgICdvbGl2ZSc6ICcjNWJiYTM2JyxcclxuICAgICAgICAgICAgJ2dvbGRlbnJvZCc6ICcjZmZiMDAwJyxcclxuICAgICAgICAgICAgJ3B1cnBsZSc6ICcjOWIxZTgzJyxcclxuICAgICAgICAgICAgJ3BhbGUtZWdncGxhbnQnOiAnIzUyMTZhYycsXHJcbiAgICAgICAgICAgICdyZWQnOiAnI2ZmNDU0ZicsXHJcbiAgICAgICAgICAgICdwYWxlLWFtYmVyJzogJyNmZmIyNGQnLFxyXG4gICAgICAgICAgICAncGFsZS1sZW1vbic6ICcjZmRlMTU5JyxcclxuICAgICAgICAgICAgJ3BhbGUtZW1lcmFsZCc6ICcjMzNjMTgwJyxcclxuICAgICAgICAgICAgJ3BsdW0nOiAnI2IyMTY0NicsXHJcbiAgICAgICAgICAgICdjb3BwZXInOiAnI2U1NzgyOCcsXHJcbiAgICAgICAgICAgICdhbWJlcic6ICcjZmZjMDAyJyxcclxuICAgICAgICAgICAgJ2xlYWYtZ3JlZW4nOiAnIzExOGM0ZicsXHJcbiAgICAgICAgICAgICdmb3Jlc3QtZ3JlZW4nOiAnIzAwNjQ1YScsXHJcbiAgICAgICAgICAgICdwcmltYXJ5JzogJyMwMDczZTcnLFxyXG4gICAgICAgICAgICAnYWNjZW50JzogJyM3NDI1YWQnLFxyXG4gICAgICAgICAgICAnc2Vjb25kYXJ5JzogJyNmZmZmZmYnLFxyXG4gICAgICAgICAgICAnYWx0ZXJuYXRlMSc6ICcjMjljZWZmJyxcclxuICAgICAgICAgICAgJ2FsdGVybmF0ZTInOiAnIzJmZDZjMycsXHJcbiAgICAgICAgICAgICdhbHRlcm5hdGUzJzogJyNjNjE3OWQnLFxyXG4gICAgICAgICAgICAndmlicmFudDEnOiAnIzQzZTRmZicsXHJcbiAgICAgICAgICAgICd2aWJyYW50Mic6ICcjZmZjZTAwJyxcclxuICAgICAgICAgICAgJ2dyZXkxJzogJyMwMDAwMDAnLFxyXG4gICAgICAgICAgICAnZ3JleTInOiAnIzMyMzQzNScsXHJcbiAgICAgICAgICAgICdncmV5Myc6ICcjNjU2NjY4JyxcclxuICAgICAgICAgICAgJ2dyZXk0JzogJyNiZGJlYzAnLFxyXG4gICAgICAgICAgICAnZ3JleTUnOiAnI2RjZGVkZicsXHJcbiAgICAgICAgICAgICdncmV5Nic6ICcjZjFmMmYzJyxcclxuICAgICAgICAgICAgJ2dyZXk3JzogJyNmNWY3ZjgnLFxyXG4gICAgICAgICAgICAnZ3JleTgnOiAnI2ZmZmZmZicsXHJcbiAgICAgICAgICAgICdjaGFydDEnOiAnIzM5MzljNicsXHJcbiAgICAgICAgICAgICdjaGFydDInOiAnIzAwYWJmMycsXHJcbiAgICAgICAgICAgICdjaGFydDMnOiAnIzc1ZGE0ZCcsXHJcbiAgICAgICAgICAgICdjaGFydDQnOiAnI2ZmY2UwMCcsXHJcbiAgICAgICAgICAgICdjaGFydDUnOiAnI2ViMjNjMicsXHJcbiAgICAgICAgICAgICdjaGFydDYnOiAnI2JhNDdlMicsXHJcbiAgICAgICAgICAgICdvayc6ICcjMWFhYzYwJyxcclxuICAgICAgICAgICAgJ3dhcm5pbmcnOiAnI2Y0OGIzNCcsXHJcbiAgICAgICAgICAgICdjcml0aWNhbCc6ICdlNTAwNGMnLFxyXG4gICAgICAgICAgICAncGFydGl0aW9uMSc6ICcjNzQyNWFkJyxcclxuICAgICAgICAgICAgJ3BhcnRpdGlvbjknOiAnIzUyMTZhYycsXHJcbiAgICAgICAgICAgICdwYXJ0aXRpb24xMCc6ICcjNWJiYTM2JyxcclxuICAgICAgICAgICAgJ3BhcnRpdGlvbjExJzogJyMwMTQyNzInLFxyXG4gICAgICAgICAgICAncGFydGl0aW9uMTInOiAnI2ZmYjAwMCcsXHJcbiAgICAgICAgICAgICdwYXJ0aXRpb24xMyc6ICcjYmRiZWMwJyxcclxuICAgICAgICAgICAgJ3BhcnRpdGlvbjE0JzogJyMyNzE3ODInLFxyXG4gICAgICAgICAgICAnc29jaWFsLWNoYXJ0LW5vZGUnOiAnI2ZmMDBmZicsXHJcbiAgICAgICAgICAgICdzb2NpYWwtY2hhcnQtZWRnZSc6ICcjZmYwMGZmJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGhlbWVDb2xvcnMge1xyXG4gICAgW25hbWU6IHN0cmluZ106IFRoZW1lQ29sb3I7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29sb3JTZXQge1xyXG4gICAgY29sb3JDbGFzc1NldD86IENvbG9yQ2xhc3NTZXQ7XHJcbiAgICBjb2xvclZhbHVlU2V0PzogQ29sb3JWYWx1ZVNldDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb2xvckNsYXNzU2V0IHtcclxuICAgIFtuYW1lOiBzdHJpbmddOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29sb3JWYWx1ZVNldCB7XHJcbiAgICBbbmFtZTogc3RyaW5nXTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBDb2xvcklkZW50aWZpZXIgPSBzdHJpbmc7XHJcbiJdfQ==