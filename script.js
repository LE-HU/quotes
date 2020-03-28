console.log("Welcome! Thank you for viewing my website. ~ le-hu");
console.log(quotesObj.quotes[0]);
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
  quoteText.textContent = quotesObj.quotes[randQuote]["quote"];

  quoteAuthor.textContent = quotesObj.quotes[randQuote]["author"];

  if (quotes[randQuote][0].length > 100) {
    quoteText.classList.add("smaller-text");
  } else {
    quoteText.classList.remove("smaller-text");
  }
});

twitterButton.addEventListener('click', e => {

  twitterButton.setAttribute('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quoteText.textContent + '" ' + quoteAuthor.textContent));
});
