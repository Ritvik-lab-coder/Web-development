let settings = {
    'async': true,
    'scrossDomain': true,
    'url': 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=inr',
    'method': 'GET',
    'headers': {}
};
const btc = document.getElementById('bitcoin');
const eth = document.getElementById('ethereum');
const dog = document.getElementById('dogecoin');
$.ajax(settings).done(function (response) {
    btc.innerHTML = response.bitcoin.inr;
    eth.innerHTML = response.ethereum.inr;
    dog.innerHTML = response.dogecoin.inr;
})