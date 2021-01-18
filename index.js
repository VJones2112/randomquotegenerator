import quotesObject from './quotes.js';

const generateQuote = () => {

    for (let quote in quotesObject) {
        const randIndex = Math.floor(Math.random() * quotesObject[quote].length);
        const randQuote = quotesObject[quote][randIndex];
        $("#text").text(randQuote.quote);
        $("#author").text(randQuote.author);
    }
}

$( "#new-quote" ).click(generateQuote);
$( document ).ready(generateQuote);