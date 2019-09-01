document.addEventListener('DOMContentLoaded', function(){

    database(); //start the database

    getCurrencies(); // update the selector with currencies from the api

    // convert currencies when selection has changed
    const selects = document.querySelectorAll('.select-js select');
    selects.forEach(sel=>{
        sel.addEventListener('change',(e)=>{
            return convertCurrency();
        });
    })
    // add event listenter to convert currency when button is clicked
    const buttons = document.querySelectorAll('.controls button[data-button]');
    
    new Control(); // set up the control buttons

    buttons.forEach(button=>{
        button.addEventListener('click', e =>{
            e.stopPropagation();
            e.preventDefault();
            let data = button.getAttribute('data-button');
            if(data.match(/^[0-9]|\.|clear|backspace$/)){
                convertCurrency();
            }
        });
    });
});