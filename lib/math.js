/**
 * Title: Math
 * Description: Utility library math related function
 * Author: Anik Hossain
 * Date: 7/14/2021
 */

// Math object module scaffolding
const math = {}

// Get a random number between two ontegers
math.getRandomNumber = function getRandomNumber(min, max) {
    let minimum = min;
    let maximum = max;
    minimum = typeof minimum === 'number' ? minimum : 0;
    maximum = typeof maximum === 'number' ? maximum : 0;
    return Math.floor(Math.random() * (maximum - minimum + 1) + min);
}

// Export the module
module.exports = math;