import $ from '../core';

$.prototype.on = function(eventName, callback) { // (оброботчки то есть клик или сабмит, то что выполнится)
    if (!eventName || !callback) {
        return this; // если не был передан то мы ничего не делаем и дальше возвращаем по цепочке
    }
    for (let i = 0; i < this.length; i++) {
        this[i].addEventListener(eventName, callback);
    }

    return this;
};
// removeEventListener нам нужно передать строго тоже самое событие
$.prototype.off = function(eventName, callback) {  
    if (!eventName || !callback) {
        return this;
    }
    for (let i = 0; i < this.length; i++) {
        this[i].removeEventListener(eventName, callback);
    }

    return this;
};

$.prototype.click = function(handler) { // принимает обработчик клика
    for (let i = 0; i < this.length; i++) {
        // когда handler был передан 
        if (handler) {
            this[i].addEventListener('click', handler);
        } else {
            this[i].click(); // используется без передачи элемента (если не был передан) клик с пустыми скобками 
        }
    }

    return this;
};


