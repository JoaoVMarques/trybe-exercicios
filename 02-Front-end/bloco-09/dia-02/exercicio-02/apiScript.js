const fetchCoin = async () => {
  const URL = 'https://api.coincap.io/v2/assets';
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.data.slice(0,10);;
  } catch (error) {
    console.log(`Algo deu errado :( ${error}`)
  }
}

const convertUSD = async () => {
  const base = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest'
  const end = '/currencies/usd.min.json'
  const URL = base.concat(end);
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.usd;
  } catch (error) {
    console.log(`Algo deu errado :( ${error}`)
  }
}

const createLI = (text) => {
  const coinList = document.getElementById('coinsList');
  const coinItem = document.createElement('li');
  coinItem.textContent = text;
  coinList.appendChild(coinItem);
}

const addCoinToHTML = async () => {
  const coins = await fetchCoin();
  const dolarCurrencies = await convertUSD();
  coins.forEach(coin => {
    const {id, symbol, priceUsd} = coin
    const dolarPrice = Number(priceUsd);
    const brlPrice = dolarPrice * dolarCurrencies.brl;
    createLI(`${id} (${symbol}): R$${brlPrice.toFixed(2)}`);
  });
}

window.onload = addCoinToHTML;