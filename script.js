document.getElementById('convertBtn').addEventListener('click', function() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    
    if (amount === '' || amount <= 0) {
        document.getElementById('result').innerText = 'Please enter a valid amount';
        return;
    }

    const apiUrl = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const rate = data.rates[toCurrency];
            const convertedAmount = (amount * rate).toFixed(2);
            document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
        })
        .catch(error => {
            document.getElementById('result').innerText = 'Error fetching data';
            console.error(error);
        });
});
