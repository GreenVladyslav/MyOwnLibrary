import $ from '../core';

$.prototype.accordion = function(headActive = 'accordion-head--active', contentActive = 'accordion-content--active', paddings = 40) {
    for (let i = 0; i < this.length; i++) {
        $(this[i]).click(() => {
            // один показывает, другие скрывает 
            const headContent = document.querySelectorAll('.accordion-head');
            if (!this[i].classList.contains(headActive)){
                headContent.forEach(elem => {
                    elem.classList.remove(headActive);
                    elem.nextElementSibling.classList.remove(contentActive);
                    elem.nextElementSibling.style.maxHeight = '0px';
                });
            }
            
            $(this[i]).toggleClass(headActive);
            $(this[i].nextElementSibling).toggleClass(contentActive);
        

            if (this[i].classList.contains(headActive)) {
                this[i].nextElementSibling.style.maxHeight = this[i].nextElementSibling.scrollHeight + paddings + "px"; //this[i].nextElementSibling.scrollHeight вернет просто число (высота котороая должна быть у элемента и плюс padding)
            } else {
                this[i].nextElementSibling.style.maxHeight = '0px';   
            }
        });
    }
};


$('.accordion-head').accordion();