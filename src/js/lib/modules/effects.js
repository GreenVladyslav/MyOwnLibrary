import $ from '../core';

// 1. Показывать опередленные элементы через прозрачность и опредленное время
$.prototype.animateOverTime = function(duration, callback, final) { // duration - количество миллисекунд за которое будет происходить анимация (указывает при вызовае в main.js)
    let start = null;

    function _animateOverTime(time) { // с лоудышем это техническая функция
        if (!start) {
            start = time; // авто time записали как старовтое время и от него отталкиваемся
        }
        // функция _animareOverTime будет запускатся каждый раз через опредленные интервал вренми котороый по факту решает браузер 
        // каждый раз функция будет получать аргумент time котороый мы не можем контролироват он автоматически приходит
        let progress = time - start; // progress отслеэивает прогресс
        let complection = Math.min(progress / duration, 1);

        callback(complection); // при каждом запуске функции каждый раз у меня будет изменятся opacity в зависимоти от формы

        if (progress < duration) { // как только старт больше продолжительности(скорость воспроизвездения анимации) то стоп анимации
            window.requestAnimationFrame(_animateOverTime);
        } else { // Этот функционал должен запуститься когда анимация закончилась 
            if (typeof final === 'function') {
                final();
            }
        }
    }

    return _animateOverTime; // это техническая функция  возващаем  из этого метода чтобы использовать 
};

$.prototype.fadeIn = function(duration, display, final) {
    for (let i = 0; i < this.length; i++) { // закончится тогда когда закончтся элементы в обьекте this
        this[i].style.display = display || 'block'; // а можно в аругмент добавить display = block по умолчани. а это старый вариант вернет нам правую часть 

        const _fadeIn = (complection) => {
            this[i].style.opacity = complection;
        };

        const ani = this.animateOverTime(duration, _fadeIn, final); // duration обязательный
        requestAnimationFrame(ani);
    }

    return this;
};

// 2. Тоже ссамое только скрывая их
$.prototype.fadeOut = function(duration, final) { // display = none
    for (let i = 0; i < this.length; i++) { // закончится тогда когда закончтся элементы в обьекте this

        const _fadeOut = (complection) => { // complection - параметр по изменения
            this[i].style.opacity = 1 - complection; // будет становится прозрачнее
            if (complection === 1) {
                this[i].style.display = 'none';
            }

            // this[i].style.opacity = complection;
        };

        const ani = this.animateOverTime(duration, _fadeOut, final); // duration обязательный
        requestAnimationFrame(ani);
    }

    return this;
};


$.prototype.fadeToggle = function(duration, display, final) {
    for (let i = 0; i < this.length; i++) {
        if (window.getComputedStyle(this[i]).display === 'none') {
            $(this[i]).fadeIn(duration, display, final);
            // style.display = display || 'block';

            // const _fadeIn = (complection) => {
            //     this[i].style.opacity = complection;
            // };
    
            // const ani = this.animateOverTime(duration, _fadeIn, final); // duration обязательный
            // requestAnimationFrame(ani);

        } else {
            $(this[i]).fadeOut(duration, final);
            // const _fadeOut = (complection) => {
            //     this[i].style.opacity = 1 - complection;
            //     if (complection === 1) {
            //         this[i].style.display = 'none';
            //     }
    
            //     // this[i].style.opacity = complection;
            // };
    
            // const ani = this.animateOverTime(duration, _fadeOut, final); // duration обязательный
            // requestAnimationFrame(ani);
        }
    }

    return this;
};





// Web Animations API пример
// $.prototype.fadeIn = function (duration = 800) {
//     function animateFadeIn(elem, dur = 800, iterations = 1) {
//         const keyframes = [
//             {opacity: '0', offset: 0},
//             {opacity: '1', offset: 1},
//         ];
//         const timing = {duration: dur, iterations: iterations};

//         return elem.animate(keyframes, timing);
//     }

//     for (let i = 0; i < this.length; i++) {
//         const element = this[i];
//         animateFadeIn(element, duration);
//     }
//     return this;
// };

// $.prototype.fadeOut = function (duration = 800) {
//     function animateFadeOut(elem, dur = 800, iterations = 1) {
//         const keyframes = [
//             {opacity: '1', offset: 0},
//             {opacity: '0', offset: 1},
//         ];
//         const timing = {duration: dur, iterations: iterations};

//         return elem.animate(keyframes, timing);
//     }

//     for (let i = 0; i < this.length; i++) {
//         const element = this[i];

//         animateFadeOut(element, duration);
//         setTimeout(() => {
//             element.style.display = 'none';
//         }, duration);
//     }
//     return this;
// };
