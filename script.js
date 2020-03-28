console.log("Welcome! Thank you for viewing my website. ~ le-hu");

const colors = ['#ffa41b', '#000839', '#005082', '#00a8cc', '#2b580c', '#639a67', '#400082', "#fe346e", "#00bdaa", "#512b58", "#323232", "#721b65", "#b80d57", "#f8615a", "#413c69", "#4a47a3", "#ad62aa", "#5a3f11", "#9c5518", "#ef962d", "#4f3961", "#da527c", "#416788", "#53698e", "#19381f", "#7d4e57", "#485665"];

const bodyElement = document.getElementById("bodyElement");
const quoteText = document.getElementById("text");
const quoteAuthor = document.getElementById("author");
const newQuote = document.getElementById("new-quote");
const twitterButton = document.getElementById("twitter-link");
const buttonsElements = document.getElementsByClassName("button");

console.log(buttonsElements);

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

window.addEventListener('DOMContentLoaded', e => {

  const randomColor = getRandomIntInclusive(0, colors.length);

  bodyElement.style.backgroundColor =
  colors[randomColor];
  bodyElement.style.color =
  colors[randomColor];
  buttonsElements[0].style.backgroundColor =
  colors[randomColor];
  buttonsElements[1].style.backgroundColor =
  colors[randomColor];
  // buttonsElements.forEach((el) =>{
  //   el.style.backgroundColor =
  //   colors[getRandomIntInclusive(0, colors.length)];
  // })

  const randQuote = getRandomIntInclusive(1, quotesObj.quotes.length - 1);

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

newQuote.addEventListener('click', e => {

  const randomColor = getRandomIntInclusive(0, colors.length);

  bodyElement.style.backgroundColor =
  colors[randomColor];
  bodyElement.style.color =
  colors[randomColor];
  buttonsElements[0].style.backgroundColor =
  colors[randomColor];
  buttonsElements[1].style.backgroundColor =
  colors[randomColor];

  const randQuote = getRandomIntInclusive(1, quotesObj.quotes.length - 1);

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
