const fetch = require('node-fetch');

async function getCryptoCoins() {
    const url = 'https://api.coincap.io/v2/assets';

    const coins = await fetch(url)
        .then((response) => response.json())
        .then((data) => data.data)
        .catch((error) => console.error.toString());       
}
getCryptoCoins();