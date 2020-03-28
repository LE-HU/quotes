console.log("Welcome! Thank you for viewing my website. ~ le-hu");

const quotes = [
["quote", "author"],
["If you can dream it, you can achieve it.", "Zig Ziglar"],
["The only way to do great work is to love what you do.", "Steve Jobs"],
["Nothing is impossible, the word itself says, “I’m possible!”", "Audrey Hepburn"],
["Either write something worth reading or do something worth writing.", "Benjamin Franklin"]];


let quoteText = document.getElementById("text");
let quoteAuthor = document.getElementById("author");
let newQuote = document.getElementById("new-quote");
let twitterButton = document.getElementById("tweet-quote");

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

newQuote.addEventListener('click', e => {
  let randQuote = getRandomIntInclusive(1, quotes.length - 1);
  quoteText.textContent = quotes[randQuote][0];

  quoteAuthor.textContent = quotes[randQuote][1];

  if (quotes[randQuote][0].length > 100) {
    quoteText.classList.add("smaller-text");
  } else {
    quoteText.classList.remove("smaller-text");
  }
});

twitterButton.addEventListener('click', e => {

  twitterButton.setAttribute('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quoteText.textContent + '" ' + quoteAuthor.textContent));
});










// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments.