//Project 1 Random Quote Generator
//This section creates all of the random quotes. 

var quotes = [
    {
       quote: 'The man who passes the sentence should swing the sword.',
       source: 'Ned Stark',
       citation: 'Game of Thrones',
       genre: 'Fantasy'
    },
    {
       quote: 'Chaos isn’t a pit. Chaos is a ladder. Many who try to climb it fail, and never get to try again.',
       source: 'Petyr Baelish',
       citation: 'Game of Thrones',
       genre: 'Fantasy'
       
    },
    {
      quote: 'When you play the game of thrones, you win or you die. There is no middle ground.',
      source: 'Cersei Lannister',
      citation: 'Game of Thrones',
      genre: 'Fantasy'
    },
    {
      quote: 'Leave one wolf alive and the sheep are never safe',
      source: 'Arya Stark',
      citation: 'Game of Thrones',
      genre: 'Fantasy'
    },
    {
      quote: 'A lion does not concern himself with the opinion of sheep',
      source: 'Tywin Lannister',
      citation: 'Game of Thrones',
      genre: 'Fantasy'
    },
    {
      quote: 'My momma always said, “Life is like a box of chocolates, you never know what you’re gonna get',
      source: 'Forest Gump',
      citation: 'Forest Gump',
      genre: 'Comedy-Drama',
      year: 1994      
    },
    {
      quote: 'Great men are not born great, they grow great.',
      source: 'Vito Corleone',
      citation: 'Godfather',
      genre: 'Drama',
      year: 1972
    },
    {
      quote: 'Life moves pretty fast. If you don’t stop and look around once in a while, you could miss it.',
      source: 'Ferris',
      citation: "Ferris Bueller's Day Off",
      genre: 'Drama',
      year: 1986

    },
    {
      quote: 'Let us not seek to satisfy our thirst for freedom by drinking from the cup of bitterness and hatred',
      source: 'Martin Luther King Jr.',
      citation: 'I have a dream speech',
      year: 1963
    },

    {
      quote: "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek.",
      source: "Barack Obama",
      year: 2008
    },
];

//Function that returns a random quote by creating a random number. 
function getRandomQuote(array) {
  random = Math.floor(Math.random() * (quotes.length));
  for ( var i = 0; i < array.length; i++) {
    var randomQuote = array[random];
  }
  return randomQuote;
}

//Function that makes a random color
function randomRGB() {
    return Math.floor(Math.random() * 256);
}

//Function that prints the messages to the webpage.
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
    printMessage += '<span class="citation">' +  ' ' + quoteMessage.citation + '</span>';
  }
  if (quoteMessage.hasOwnProperty('genre') === true) {
    printMessage += '<span class="genre">' + ', ' + quoteMessage.genre + '</span>';
  }
  if(quoteMessage.hasOwnProperty('year') === true) {
    printMessage += '<span class= "year">' + quoteMessage.year + '</span>';
  }
  printMessage += "</p";
  document.body.style.backgroundColor = rgbColor;
  document.getElementById('quote-box').innerHTML = printMessage;
}

let interval;
// This function will call the printQuote function and reset the timer
const startInterval = function () {
    printQuote();
    clearInterval(interval);
    interval = setInterval(printQuote, 20000);
}

// This starts the timer
startInterval();

//Event listener that responds to a click of the mouse
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


















// Remember to delete the comments that came with this file, and replace them with your own code comments.