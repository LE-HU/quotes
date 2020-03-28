console.log("Welcome! Thank you for viewing my website. ~ le-hu");

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
  let randQuote = getRandomIntInclusive(1, quotesObj.quotes.length - 1);
  quoteText.textContent = quotesObj.quotes[randQuote]["quote"];

  quoteAuthor.textContent = quotesObj.quotes[randQuote]["author"];

  if (quotesObj.quotes[randQuote]["quote"].length > 180) {
    quoteText.classList.add("even-smaller-text");
  } else if (quotesObj.quotes[randQuote]["quote"].length > 100) {
    quoteText.classList.add("smaller-text");
  } else {
    quoteText.classList.remove("smaller-text");
    quoteText.classList.remove("even-smaller-text");
  }
});

twitterButton.addEventListener('click', e => {

  twitterButton.setAttribute('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quoteText.textContent + '" ' + quoteAuthor.textContent));
});
