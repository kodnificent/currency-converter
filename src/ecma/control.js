class Control {

    constructor(){
        this.locale = 'en-US';
        this.formatterOpts = {
            style: 'decimal',
            minimumFractionDigits: 2,
            maximumFractionDigits: 6
        };
        this.buttons = document.querySelectorAll('.controls button[data-button]');
        this.box = document.querySelector('form input[name=amount]+span[data-value]');
        this.amount = document.querySelector('form input[name=amount]');

        this.buttons.forEach(button=>{
            button.onclick = e =>{
                e.stopPropagation();
                e.preventDefault();
                let data = button.getAttribute('data-button');
                if(data.match(/^[0-9]|\.$/)){
                    return this.input(data);
                }
                switch(data){
                    case 'clear':
                        this.clear();
                    break;
                    case 'swap':
                        this.swap();
                    break;
                    case 'share':
                        this.share();
                    break;
                    case 'backspace':
                        this.backSpace();
                    break;
                    case 'menu':
                        this.menu();
                    break;
                }
            }
        });
    }

    input(value){
        //@TODO: notify error when maximumFraction value is reached

        //@TODO: notify error when maximum number of digits is reached
        
        let digitSize = this.formatDigitSize(this.amount.value);
        this.updateBox(value, digitSize);
        if(this.amount.value != '0'){
            this.amount.value += value
        } else {
            this.amount.value = value;
        }
    }

    updateBox(value, digitSize){
        const dataValue = this.box.getAttribute('data-value');
        if(dataValue != '0'){
            this.box.setAttribute('data-value', dataValue + value);
            this.box.innerText = new Intl.NumberFormat(this.locale, this.formatterOpts).format(dataValue + value);
        } else {
            this.box.setAttribute('data-value', value);
            this.box.innerText = new Intl.NumberFormat(this.locale, this.formatterOpts).format(value);
        }
        this.box.setAttribute('data-size', digitSize);
    }

    clear(){
        this.amount.value = '0';
        let digitSize = this.formatDigitSize(this.amount.value);
        this.box.setAttribute('data-value', '0');
        this.box.innerText = '0';
        this.box.setAttribute('data-size', digitSize);
    }

    swap(){
        //@todo: swap feature
    }

    share(){
        if(navigator.share){
            navigator.share({
                title: 'Currency Converter',
                text: 'convert between currencies',
                href: window.location.href
            }).then(()=>{
                //@todo: show thank you message toast
            }).catch(err=>{
                //@todo: show error sharing app message toast
            })
        } else {
            return this.customShare();
        }
    }

    customShare(){}

    backSpace(){
        if(this.amount.value != '0'){
            this.amount.value = this.amount.value.slice(0,-1) == '' ? '0' : this.amount.value.slice(0,-1);
            let digitSize = this.formatDigitSize(this.amount.value);
            this.box.setAttribute('data-value', this.amount.value);
            this.box.innerText = new Intl.NumberFormat(this.locale, this.formatterOpts).format(this.amount.value);
            this.box.setAttribute('data-size', digitSize);
        }
    }

    menu(){}


    formatDigitSize(value){
        let digitSize = 'normal';
        if(value.length <= 9){
            digitSize = 'normal'
        } else if(value.length <= 12){
            digitSize = 'small';
        } else if(value.length <= 18) {
            digitSize = 'smaller';
        } else {
            //@TODO: notify error with a snackbar
            return alert('maximum number of digits reached');
        }
        return digitSize;
    }
}