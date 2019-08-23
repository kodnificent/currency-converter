document.addEventListener('DOMContentLoaded', function(){
    getCurrencies(); // update the selector with currencies from the api

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