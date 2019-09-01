function database(){
    let dbPromise;
    if(!'indexedDB' in window) {
        console.log('browser does not support indexdb');
        dbPromise = new Promise((resolve, reject)=>{
            reject();
        });
    } else {
        dbPromise = idb.open('converter-db', 1, upgradeDb=>{
            if(!upgradeDb.objectStoreNames.contains('rates')){
                let ratesStore = upgradeDb.createObjectStore('rates', {keyPath: 'query'});
                ratesStore.createIndex('timestamp', 'timestamp')
            }
        });
    }
    return dbPromise;  
}
