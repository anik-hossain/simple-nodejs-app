/**
 * Title: Qoutes Library
 * Description: Utility library for getting a list of Quotes
 * Author: Anik Hossain
 * Date: 7/14/2021
 */

// Dependencis
const fs = require('fs');

// Quotes Object sacaffolding
const quotes = {}

// Get all the quotes and return them to the user
quotes.allQuotes = function allQuotes() {
    // Read the text file contaning the quotes
    const file = fs.readFileSync(__dirname + '/quotes.txt', 'utf-8');

    // Turn the string into an array
    const arrayOfQuotes = file.split(/\r?\n/);

    // Return the array
    return arrayOfQuotes;
}

// Export the module
module.exports = quotes;