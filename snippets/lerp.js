/*
 * Calculates a number between two numbers at a specific increment. The `t` parameter is the amount to interpolate between the two values where 0.0 equal to the first point, 0.1 is very near the first point, 0.5 is half-way in between, etc.
 *
 * @param {float} a - The starting number 
 * @param {float} b - The ending number
 * @param {float} t - A value between 0 and 1
 * @returns {float} The result number 
 */
function lerp(a, b, t) {
    return a + (b - a) * t;
}
