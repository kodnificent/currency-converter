const key = '83f45781b9cd2d13dd16';
const api = 'https://free.currconv.com/api/v7';
const form = document.querySelector('#screen-form');
const selTo = form.querySelector('select[name=countries-to]');
const selFrom = form.querySelector('select[name=countries-from]');
const input = form.querySelector('input[name=amount]');
const result = document.querySelector('#result');
const rate = document.querySelector('#rate');
const lastUp = document.querySelector('#last-update');
const image = './assets/imgs/flags';
const locale = 'en-US';
const formatterOpts = {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
};

/**
 * Update the app with the total result obtained after conversion
 * @param {Number} total The total output of the result
 * @param {Number|null} r the rate at which the currency was converted
 * @param {Number} time last update timestamp
 */
function updateResult(total, time, r=null){
    total = new Intl.NumberFormat(locale, formatterOpts).format(total);
    result.setAttribute('data-result', total);
    result.innerText = total;
    if(r){
        rate.innerText = `${r.toFixed(2)} ${selFrom.value} per ${selTo.value}`;
    } else {
        rate.innerText = '';
    }
    lastUp.innerText = time ? timeDiff(time) : '';
}

/**
 * Convert between currencies. 
 * This function will be probably called when button input is made
 */
function convertCurrency(){
    let from = selFrom.value.toUpperCase();
    let to = selTo.value.toUpperCase();
    let amount = input.value;
    let timestamp = new Date().getTime();
    let query = `${from}_${to}`;
    let rate, total;

    // we don't want to perform any conversion if we have a zero amount or we are converting between the same currency
    if(amount > 0 && (from != to)){

        // we have just 100 requests per hour on the free currency converter plan. We have to use it wisely
        // check the database for rate and use the rate found in the database
        let dbPromise = database();
        dbPromise.then(db=>{
            const tx = db.transaction('rates');
            const rates = tx.objectStore('rates');
            return rates.get(query);
        }).then(result=>{
            // if there was no result from the database query fetch from the network
            if(!result) return fetch(`${api}/convert?apiKey=${key}&q=${query}&compact=ultra`);
            
            let dbRate = result.rate;
            console.log('using rate from database');
            rate = dbRate;
            total = amount * rate;
            updateResult(total, result.timestamp, rate);
        }).then(result=>{

            if(!result) return; // do nothing if no fetch to the network was made
            console.log('fetched rate from network');
            return result.json();

        }).then(data=>{
            if(!data) return;
            if (data.error) throw new Error('free api limit reached');  //data error could be "Free API limit reached"
            rate = data[query];
            total = amount * rate;
            updateResult(total, timestamp, rate);
            return database();
        }).then((db)=>{
            if(!db) return;
            const tx = db.transaction('rates', 'readwrite');
            tx.objectStore('rates').put({query, rate, timestamp});
            return tx.complete;
        }).then(()=>{
            console.log('updating table')
        }).catch(err=>{
            console.info(err);
        }).finally(()=>{
            // stop spinner
        });
    } else {
        // no input or input is less than 0
        updateResult(0);
    }
}

/**
 * Get all currencies and its neccessary details from our api
 */
function getCurrencies(){

    // load all currencies
    const getCurrencies = fetch(`${api}/currencies?apiKey=${key}`);
    getCurrencies.then(response=>{
        return response.json();
    }).then(currencies=>{

        if(currencies.error) throw new Error('free api limit reached'); // currencies.error could be "free api limit reached"

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
        // re instantiate the select js class to update the custom select div with currencies
        return new Selectjs();
    }).catch(err=>{
        console.info(err);
    });
};

function timeDiff(then){
    if(!then) throw new Error('parameter 1 required');
    if (!then instanceof Date || typeof then !== 'number') throw new Error('parameter 1 should be an instance of Date or a number type');
    let now = new Date().getTime();
    then = then instanceof Date ? then.getTime() : then;
    let secDiff = parseInt((now - then) / 1000); //convert from milliseconds to seconds
    let perMin = 60;
    let perHour = perMin * 60;
    let perDay = perHour * 24;
    let perWeek = perDay * 7;
    let perMonth = perWeek * 4;
    let perYear = perMonth * 12;
    
    let timeDiff;
    
    switch(true){
        case secDiff === 0:
            timeDiff = 'now';
            break;
        case secDiff < perMin: // less than a min
            timeDiff = `${secDiff}s ago`;
            break;
        case secDiff < perHour: // less than an hour
            timeDiff = `${parseInt(secDiff/perMin)}m ago`;
            break;
        case secDiff < perDay: // less than a day
            timeDiff = `${parseInt(secDiff/perHour)}h ago`;
            break;
        case secDiff < perWeek:
            timeDiff = `${parseInt(secDiff/perDay)}d ago`;
            break;
        case secDiff < perMonth:
            timeDiff = `${parseInt(secDiff/perWeek)}w ago`;
            break;
        case secDiff < perYear:
            timeDiff = `${parseInt(secDiff/perWeek)}mth ago`;
            break;
        case secDiff >= perYear:
            timeDiff = `${parseInt(secDiff/perYear)}y ago`;
            //@todo get stuffs like 1y6mth ago
            //tip: if secDiff/perYear is not a whole number then convert the remaining decimal to months
            break;
    }
    return timeDiff;
}