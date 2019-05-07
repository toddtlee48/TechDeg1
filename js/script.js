/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
var quotes = [
    {
       quote: 'The man who passes the sentence should swing the sword.',
       source: 'Ned Stark',
       citation: 'Game of Thrones'
    },
    {
       quote: 'Chaos isn’t a pit. Chaos is a ladder. Many who try to climb it fail, and never get to try again.',
       source: 'Petyr Baelish',
       citation: 'Game of Thrones'
    },
    {
      quote: 'I am too drunk to taste this chicken',
      source: 'Da Colonel',
    },

      quote: 'Leave one wolf alive and the sheep are never safe.',
      source: 'Arya Stark',
];



/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/
function getRandomQuote() {
  var random = Math.floor(Math.random() * (quotes.length));
  for ( var i = 0; i < array.length; i++) {
    var randomQuote = array[random];
  }
  return randomQuote;
}




/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/
function printQuote() {
  var quoteMessage = getRandomQuote(quotes);
  var printMessage = '';
  printMessage = "<p class='quote'>" + quoteMessage.quote + "</p>";
  printMessage += "<p class='source'>" + quoteMessage.source;
  printMessage += "<span class='citation'>" + result.citation + "</span>";
  printMessage += "<span class= 'year'>" + result.year + "</span>";
  printMessage += "</p";

  document.getElementById('quote-box').innerHTML = printMessage;

}

printQuote();


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

//document.getElementById('loadQuote').addEventListener("click", printQuote, false);





















// Remember to delete the comments that came with this file, and replace them with your own code comments.