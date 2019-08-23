const key = '83f45781b9cd2d13dd16';
const api = 'https://free.currconv.com/api/v7';
const form = document.querySelector('#screen-form');
const selTo = form.querySelector('select[name=countries-to]');
const selFrom = form.querySelector('select[name=countries-from]');
const input = form.querySelector('input[name=amount]');
const result = document.querySelector('#result');
const rate = document.querySelector('#rate');
const image = './assets/imgs/flags';
const locale = 'en-US';
const formatterOpts = {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 6
};

function updateResult(total, r=null){
    total = new Intl.NumberFormat(locale, formatterOpts).format(total);
    result.setAttribute('data-result', total);
    result.innerText = total;
    if(r){
        rate.innerText = `${r.toFixed()} ${selFrom.value} per ${selTo.value}`;
    } else {
        rate.innerText = '';
    }
}

function convertCurrency(){
    let from = selFrom.value.toUpperCase();
    let to = selTo.value.toUpperCase();
    let amount = input.value;
    let rate, total;
    if(amount > 0){
        const convert = fetch(`${api}/convert?apiKey=${key}&q=${from}_${to}&compact=ultra`);
        //start spinner
        convert.then(result=>{
            return result.json();
        }).then(data=>{
            rate = data[`${from}_${to}`];
            total = amount * rate;
            updateResult(total, rate);
        }).catch(err=>{
            console.log(error);
        }).finally(()=>{
            // stop spinner
        })
    } else {
        console.log('amount is less than zero');
        updateResult(0);
    }
}

function getCurrencies(){

    // load all currencies
    const getCurrencies = fetch(`${api}/currencies?apiKey=${key}`);
    getCurrencies.then(response=>{
        return response.json();
    }).then(currencies=>{

        // store the currencies in an array so we can sort it alphabetically
        let arr = Object.keys(currencies.results);
        arr = arr.sort();
        let id = 0;
        let selIndex = 0;
        for(let key of arr){
            let currency = currencies.results[key];
            let option = document.createElement('option');
            option.value = currency.id.toLowerCase();
            option.setAttribute('data-id', ++id);
            option.setAttribute('data-image', `${image}/${currency.id.toLowerCase()}.png`);
            option.text = currency.id;
            selTo.appendChild(option);
            // use usd as selected index
            if(currency.id == 'USD'){
                selIndex = id - 1;
                selTo.selectedIndex = selIndex;
            }
        }
        return currencies;
    }).then(currencies=>{
        let arr = Object.keys(currencies.results);
        arr = arr.sort();
        let id = 0;
        let selIndex = 0;
        for(let key of arr){
            let currency = currencies.results[key];
            let option = document.createElement('option');
            option.value = currency.id.toLowerCase();
            option.setAttribute('data-id', ++id);
            option.setAttribute('data-image', `${image}/${currency.id.toLowerCase()}.png`);
            option.text = currency.id;
            selFrom.appendChild(option);
            // use usd as selected index
            if(currency.id == 'GBP'){
                selIndex = id - 1;
                selFrom.selectedIndex = selIndex;
            }
        }
        return;
    }).then(()=>{
        return new Selectjs();
    }).catch(err=>{
        console.log(err);
    });
};