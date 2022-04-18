import $ from '../core';

$.prototype.show = function() {
    console.log(this); // выводим this из прошло прототипа для работы
    for(let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }

        this[i].style.display = '';
    }

    return this;
};

$.prototype.hide = function() {
    console.log(this); // выводим this из прошло прототипа для работы
    for(let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }

        this[i].style.display = 'none';
    }

    return this;
};

$.prototype.toggle = function() {
    console.log(this); // выводим this из прошло прототипа для работы
    for(let i = 0; i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }

        if (this[i].style.display === 'none') {
            this[i].style.display = '';
        } else {
            this[i].style.display = 'none';
        }

    }

    return this;
};