const apiUrl = 'https://api.quotable.io/random';
const quote = document.querySelector('#quote');
const author = document.querySelector('#author');
async function getQuote(url) {
    const response = await fetch(url);
    let data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}
getQuote(apiUrl);
function tweet() {
    window.open('https://twitter.com/intent/tweet?text=' + quote.innerHTML + '   -- ' + author.innerHTML, 'Tweet Window', 'width=600, height=300');
}