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
       citation: 'Game of Thrones',
       year: 1500
    },
    {
      quote: 'I am too drunk to taste this chicken',
      source: 'Da Colonel',
      year: 1990
    },
    {
      quote: 'Leave one wolf alive and the sheep are never safe',
      source: 'Arya Stark',
      citation: 'Game of Thrones'
    },
];



/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/



function getRandomQuote(array) {
  random = Math.floor(Math.random() * (quotes.length));
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
function randomRGB() {
    return Math.floor(Math.random() * 256);
}

function printQuote() {

  var red = randomRGB();
  var green = randomRGB();
  var blue = randomRGB();
  var rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  var quoteMessage = getRandomQuote(quotes);
  var printMessage = '';

  printMessage = "<p class='quote'>" + quoteMessage.quote + "</p>";
  printMessage += "<p class='source'>" + quoteMessage.source;
  if(quoteMessage.hasOwnProperty('citation') === true) {
    printMessage += '<span class="citation">' + quoteMessage.citation + '</span>';
  }
  if(quoteMessage.hasOwnProperty('year') === true) {
    printMessage += '<span class= "year">' + quoteMessage.year + '</span>';

  }
  printMessage += "</p";

  document.body.style.backgroundColor = rgbColor;
  document.getElementById('quote-box').innerHTML = printMessage;

}




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);





















// Remember to delete the comments that came with this file, and replace them with your own code comments.