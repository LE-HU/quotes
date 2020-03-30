console.log("Welcome! Thank you for viewing my quotes project. ~ le-hu");


// $("html body").animate(
//   {
//     backgroundColor: colors[color],
//     color: colors[color]
//   },
//   1000
// );
// $(".button").animate(
//   {
//     backgroundColor: colors[color]
//   },
//   1000
// );


const colors = ['#804D4D', '#7F5D4C', '#7F6E4C', '#7F7F4C', '#6E7F4C', '#5D7F4C', '#4C7F4C', "#4C7F5D", "#4C7F6E", "#4C7F7F", "#4C6E7E", "#4C5D7F", "#4C4C7F", "#5D4C7F", "#6E4C7F", "#7F4C7F", "#7F4C6E", "#7F4C5D"];

const bodyElement = document.getElementById("bodyElement");
const quoteText = document.getElementById("text");
const quoteAuthor = document.getElementById("author");
const newQuote = document.getElementById("new-quote");
const twitterButton = document.getElementById("twitter-link");
const buttonsElements = document.getElementsByClassName("button");

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

window.addEventListener('DOMContentLoaded', e => {

  const randomColor = getRandomIntInclusive(0, colors.length);

  $("body").animate({
    backgroundColor: colors[randomColor],
    color: colors[randomColor]
  }, 800);
  $("#twitter-button").animate({
    backgroundColor: colors[randomColor]
  }, 800);
  $("#new-quote").animate({
    backgroundColor: colors[randomColor]
  }, 800);


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
    quoteText.classList.remove("even-smaller-text");
  } else {
    quoteText.classList.remove("smaller-text");
    quoteText.classList.remove("even-smaller-text");
  }
});

newQuote.addEventListener('click', e => {

  const randomColor = getRandomIntInclusive(0, colors.length);

  $("body").animate({
    backgroundColor: colors[randomColor],
    color: colors[randomColor]
  }, 800);
  $("#twitter-button").animate({
    backgroundColor: colors[randomColor]
  }, 800);
  $("#new-quote").animate({
    backgroundColor: colors[randomColor]
  }, 800);

  // $("#text").animate({
  //   color: '#FFF'
  // });
  $("#text").animate({
    color: colors[randomColor]
  });
  // $("#author").animate({
  //   color: '#FFF'
  // });
  $("#author").animate({
    color: colors[randomColor]
  });

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
