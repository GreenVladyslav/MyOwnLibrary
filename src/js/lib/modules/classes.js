import $ from '../core'; // прототип $

$.prototype.addClass = function(...classNames) { // rest оператор располагается в конце списка аргументов функции, то это "остаточные параметры". Он собирает остальные неуказанные аргументы и делает из них массив.
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) {
            continue;
        }

        this[i].classList.add(...classNames); // spread встретился в вызове функции или где-либо ещё, то это "оператор расширения". Он извлекает элементы из массива для инициализации работы функции. Разварачивает все что было передано во внутрсь функции
        
    }

    return this;
};


$.prototype.removeClass = function(...classNames) { 
    for (let i = 0; i < this.length; i++) {
        // if (this[i].classList) {
        //     continue;
        // }

        this[i].classList.remove(...classNames); 
    }

    return this;
};

$.prototype.toggleClass = function(classNames) { // передается только один класс
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) {
            continue;
        }

        this[i].classList.toggle(classNames); 
    }

    return this;
};

