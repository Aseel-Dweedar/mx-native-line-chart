export const defaultColor = "#808080";

const hexColorValidate = /^#([0-9A-F]{3}){1,2}$/i;

/**
 * Validate the hex color or set the default color
 *
 * @param {string} value - the actual string value
 * @returns {string} the validated hex color
 */
export const validateHexColor = (value, defaultValue) => (hexColorValidate.test(value) ? value : defaultValue);

/**
 * Validate the numerics values before setting in the drawer properties
 *
 * @param {number} value - the actual value
 * @param {number} min - the maximum allowed value
 * @param {number} max - the minimum allowed value
 * @returns {number} - the final value after validation
 */
export const validateNumericsValue = (value, min, max) => (value < min ? min : value > max ? max : value);

/**
 * This function formats numbers with commas every three digits
 * 
 * @param   {number}    num   Accepts number
 * @returns   {string}    formatted number as a string
 */
export function toThousandsDivider(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/**
 * This function formats numbers with the letter 'K' for thousands
 * 
 * And with the letter 'M' for Millions
 * And with the letter 'B' for Billions
 * @param   {number}    num   Accepts number
 * @returns   {string}    formatted number as a string
 */
export function toInternationalSystemFormatting(num) {
    // Nine Zeroes for Billions
    return Math.abs(Number(num)) >= 1.0e9
        ? (Math.abs(Number(num)) / 1.0e9).toFixed(2) + "B"
        : // Six Zeroes for Millions
        Math.abs(Number(num)) >= 1.0e6
        ? (Math.abs(Number(num)) / 1.0e6).toFixed(2) + "M"
        : // Three Zeroes for Thousands
        Math.abs(Number(num)) >= 1.0e3
        ? (Math.abs(Number(num)) / 1.0e3).toFixed(2) + "K"
        : Math.abs(Number(num));
}

/**
 * This function formats numbers with the letter 'K' for thousands
 * 
 * @param   {number}    num   Accepts number
 * @returns   {string}    formatted number as a string
 */
export function toKFormatting(num) {
    return Math.abs(num) > 999
        ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
        : Math.sign(num) * Math.abs(num);
}

/**
 * This function formats numbers with the letter 'M' for Millions
 * 
 * @param   {number}    num   Accepts number
 * @returns   {string}    formatted number as a string
 */
export function toMFormatting(num) {
    return num >= 1000000 ? (num / 1000000).toFixed(2) + "M" : num.toString();
}
