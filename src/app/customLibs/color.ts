export class Color {

    color: string;

    // Variables for red, green, blue values
    r: number;
    g: number;
    b: number;
    hsp: number;

    // Determine whether the color is light or dark
    threshold: number;

    /**
     * @param color 
     * @param threshold
     */
    constructor(color: string, threshold: number) {
        this.color = color;
        this.threshold = threshold;
    }

    isLightColor() {
        // Check the format of the color, HEX or RGB?
        if (this.color.match(/^rgb/)) {

            // If HEX --> store the red, green, blue values in separate variables
            this.color = this.color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/).toString();

            this.r = parseInt(this.color[1]);
            this.g = parseInt(this.color[2]);
            this.b = parseInt(this.color[3]);
        }
        else {

            // If RGB --> Convert it to HEX: http://gist.github.com/983661
            let colNum = +("0x" + this.color.slice(1).replace(this.color.length < 5 && /./g, '$&$&'));
            this.r = colNum >> 16;
            this.g = colNum >> 8 & 255;
            this.b = colNum & 255;
        }

        // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
        this.hsp = Math.sqrt(
            0.299 * (this.r * this.r) +
            0.587 * (this.g * this.g) +
            0.114 * (this.b * this.b)
        );

        // Using the HSP value, determine whether the color is light or dark
        //if (hsp>127.5) {
        if (this.hsp > this.threshold) {
            return true;
        }
        return false;
    }

    getName() {
        let isLight = this.isLightColor();
        if (isLight) {
            return 'light';
        }
        return 'dark';
    }
}