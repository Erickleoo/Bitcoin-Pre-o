const btc = document.querySelector('#bitcoin');

function fetchBtc() {
  fetch('https://blockchain.info/ticker')
  .then(response => response.json())
  .then(btcJson => {
    btc.innerText = btcJson.BRL.buy.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  })
}

setInterval(fetchBtc, 1000 * 30)

fetchBtc();