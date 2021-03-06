/**
 * Title: Simple Node App
 * Inspired by Learn With Sumit
 * Description: 
 * Author: Anik Hossain
 * Date: 7/14/2021
 */

// Dependencies
const math = require('./lib/math');
const qoutes = require('./lib/quotes');

// App module scaffolding
const app = {}

// Configuration
app.config = {
    timeBetweenQuotes: 5000
}

app.printAQuote = function printAQuote() {
    // Get all the quotes
    const allQuotes = qoutes.allQuotes();

    // Get the lenght of the quotes
    const numberOfQuotes = allQuotes.length;

    // Pick a random number between 1 and the quotes
    const randomNumber = math.getRandomNumber(1, numberOfQuotes);

    // Get the quotes at that position in the array (muns one)
    const selectQuote = allQuotes[randomNumber - 1];

    // Print the quote to the console
    console.log(selectQuote);
    console.log();
}

// Function that loops indefintely
app.indefinteLoop = function indefinteLoop() {
    // Create the interval using the config variabel defined above
    setInterval(app.printAQuote, app.config.timeBetweenQuotes);
}

// Invoke the loop
app.indefinteLoop();