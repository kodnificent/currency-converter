class Selectjs {
    constructor(){
        this.selectDivs = document.querySelectorAll('.select-js');
        if(!this.selectDivs) return;
        this.selectDivs.forEach(el=>{
            this.updateCustomSelect(el);
            
            // add click event to toggle select
            let cOption = el.querySelector('.current-option');
            cOption.onclick = (e)=>{
                e.stopPropagation();
                return this.toggleSelect(el);
            }

            let options = el.querySelectorAll('.custom-option');
            options.forEach(option=>{
                option.onclick = e =>{
                    e.stopPropagation();
                    this.select(el, e.currentTarget);
                    //loop through all options and deselect options that was clicked
                    this.closeAllSelect();
                }
            })
        },this);

        // close all select box when clicked outside the box
        document.onclick = (e)=>{
            return this.closeAllSelect();
        }
    }

    /**
     * Update the custom select with data from the native select element
     * @param {Element} el  the target div element
     */
    updateCustomSelect(el){
        let cOption, cOptionImage, cOptionData, selected, ul, sel;
        
        sel = el.querySelector('select');
        if(!sel) return;

        selected = sel[sel.selectedIndex];

        // current option div
        cOption = document.createElement('div');
        cOption.className = 'current-option';
        cOption.setAttribute('aria-hidden', 'true');
        cOption.setAttribute('data-id', selected.getAttribute('data-id'));
        cOption.setAttribute('data-value', selected.value);

        cOptionImage = document.createElement('img');
        cOptionImage.src = selected.getAttribute('data-image');
        cOptionImage.className = 'option-image';

        cOptionData = document.createElement('span');
        cOptionData.className = 'option-data';
        cOptionData.innerText= selected.text;

        cOption.appendChild(cOptionImage);
        cOption.appendChild(cOptionData);
        el.appendChild(cOption);

        // custom select div
        ul = document.createElement('ul');
        ul.setAttribute('aria-hidden', 'true');
        ul.setAttribute('data-open', 'false');
        ul.className = 'custom-select';

        let options = sel.querySelectorAll('option');
        options.forEach(el=>{
            let li = document.createElement('li');
            li.className = 'custom-option';
            li.setAttribute('data-id', el.getAttribute('data-id'));
            li.setAttribute('data-value', el.value);
            if(el.getAttribute('data-id') === selected.getAttribute('data-id')) {
                li.setAttribute('data-selected','true');
            }
            if(el.hasAttribute('data-image')){
                let img = document.createElement('img');
                img.src = el.getAttribute('data-image');
                img.className = 'option-image';
                li.appendChild(img);
            }
            let span = document.createElement('span');
            span.className = 'option-data';
            span.innerText = el.text;
            li.appendChild(span);

            ul.appendChild(li);
        });

        //@TODO perform keyboard filter search
        //document.onkeydown = e=>{
        //}

        el.appendChild(ul);

        // scroll to selected option
        let li = ul.querySelector('[data-selected=true]');
        ul.scroll(0, li.offsetTop);
    }

    /**
     * Perform select operation
     * @param {Element} el target select div element
     * @param {Element} option clicked custom-option element
     */
    select(el, option){
        let id = option.getAttribute('data-id');
        let value = option.getAttribute('data-value');
        let nativeSelect = el.querySelector('select');
        let cOption = el.querySelector('.current-option');

        cOption.querySelector('.option-data').textContent = option.querySelector('.option-data').textContent;
        cOption.querySelector('.option-image').src = option.querySelector('.option-image').src;
        cOption.setAttribute('data-id', id);
        nativeSelect.value = value;
        
        option.setAttribute('data-selected', 'true');

        let options = el.querySelectorAll('.custom-option');
        options.forEach(opt=>{
            if(opt.getAttribute('data-id') === id) return;
            opt.setAttribute('data-selected', 'false');
        })
    }
    
    toggleSelect(el){
        //first close all select boxes
        this.closeAllSelect(el);

        // now toggle current select
        let customSelect = el.querySelector('.custom-select');
        if(!customSelect) return;
        if(customSelect.getAttribute('data-open') === 'false'){
            customSelect.setAttribute('data-open', 'true');
        } else if(customSelect.getAttribute('data-open') === 'true'){
            customSelect.setAttribute('data-open', 'false');
        }
        return this;
    }

    closeAllSelect(currentEl = null){
        this.selectDivs.forEach(el=>{
            if(currentEl && currentEl === el) return;
            let customSelect = el.querySelector('.custom-select');
            if(!customSelect) return;
            customSelect.setAttribute('data-open', 'false');
        });
    }
}