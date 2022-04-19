// (() => {
//  const $ = function (selector) {  
//     const elements = document.querySelectorAll(selector);
//         const obj = {};

//         obj.hide = () => {
//             elements.forEach(elem => {
//                 elem.style.display = 'none';
//             });

//             return obj;
//         };

//         obj.show = () => {
//             elements.forEach(elem => {
//                 elem.style.display = ''; // браузер сам решит какой display ему ставить может юыть block или flex
//             });

//             return obj;
//         };

//         return obj;
//     };

//     window.$ = $; // обьект виндов
// })();
// (создадим замыкание при помощи)анониманая само вызывающая функция 

const $ = function (selector) { // обращаясь к долару каждый раз создается нвоый обьект 
    return new $.prototype.init(selector);  // будет запускатся метод которыой будет записан в проттопипе жтой функции
    // 1.по факту обьект мы создаем из нового констркутора то у этого обьека есть свой прототип
};

$.prototype.init = function(selector) {
    if (!selector) {
        return this; //{пустой обьект} что здесь контекст вызова ? Когда мы ввызываем контекст вызова в новом экземпляре при создания новго обьекта то мы ссылаемся на ново созданный обьект 
    }
    // мы не можем назначить метод queryselectorall На документ
    if (selector.tagName) { // если то что придет в selector у него есть tagName то это будет html элемент которыой есть на странице а не nodecollection
        this[0] = selector;
        this.length = 1;
        return this; // если фукнция видит ключевое слово return то она прекращает свою работу
    }

    Object.assign(this, document.querySelectorAll(selector)); // (куда, что)
    this.length = document.querySelectorAll(selector).length; // типа длинна один два
    return this;
};
//1. Теперь на обьекте который будет создаваться при помощи фукнции доллара мы можем использовать любые методы котороые будут внутри прототипа первого - этой функции
$.prototype.init.prototype = $.prototype; 

window.$ = $; // записываем глобально чтобы мы могли использовать

export default $;

