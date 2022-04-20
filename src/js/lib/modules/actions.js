import $ from '../core';

//innerHTML позволяет быстро менять html структуру внури каких-то элементов не только менять но и получать содержимое этого элемента
$.prototype.html = function(content) {
    //1.Когда мы передаем и замещаем
    for (let i = 0; i < this.length; i++) {
        if (content) {
            this[i].innerHTML = content;
        } else {
            return this[i].innerHTML; // Возвращае не обьект, а содержимое которое нас интересует
        }
    }
    //2.Если не был передан то вернем

    return this;
};

// получить один элемент [0]  [3]
$.prototype.eq = function(i) { // i - номер элемента котороый мне понадобится из выборки 2,3 и так длаее
    const swap = this[i];
    const objLength = Object.keys(this).length; // возвращает массив из собственных перечисляемых свойств переданного объекта, в том же порядке, в котором они бы обходились циклом for...in 
    // помимо this.length  у нас могут быть свои свойства котороые лежат в обьекте
    for (let i = 0; i < objLength; i++) {
        delete this[i];
    } // очищаем полностью обьект и формируем заного один элемент

    this[0] = swap; 
    this.length = 1; // возвращаем один элемент одно свойство 
    return this;
};

// можем получить номер по породяку среди всех его соседей у одного общего родителя
$.prototype.index = function() { // просто будет возваращать нам число
    // нам нужно полуичить индекс какого-то одного элемнта
    const parent = this[0].parentNode;
    const childs = [...parent.children]; // получим всех потомков этого родителя html collection это псевдомассив не существует метода
    // развернули с помозь spread оператора и тепреь у этого массива есть нужные методы
    const findMyIndex = (item) => {
        return item == this[0];
    };
    // В переменной childs лежит массив в массиве есть опредленное количе-во элементов и на  кажом из этих элементов будет запускатся функция findMyIdnex(принимает каждый отдельный элемент) и вернемт тот который нам действительно нужен
    return childs.findIndex(findMyIndex);
};

// находим опредленные элементы среди уже выбранных(хчоу найти среди дивов класс актив или some среди more все они divы)
$.prototype.find = function(selector) { 
    let numberOfItems = 0; // общее количество которое получилось 
    let counter = 0; // количество записаных элементов

    const copyObj = Object.assign({}, this); // не глубокая копия нашего обьекта this

    for (let i = 0; i < copyObj.length; i++) {
        // в каждом из этих скопированых copyObj элементов внутри мы попробуем найти querySelectorall подходящие по этому селектору
        const arr = copyObj[i].querySelectorAll(selector);
        if (arr.lenggth == 0) {
            continue;
        }

        for (let j = 0; j < arr.length; j++) { // общий обьект куда мы записываем по порядку
            this[counter] = arr[j];
            counter++;
        }

        numberOfItems += arr.length;
    }
    
    this.length = numberOfItems;

    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength; numberOfItems++) { // общее количество элементов которое есть в обьекте Object.keys(this).length;
        delete this[numberOfItems];
    } // оставшийся хвостик будет удалятся 

    return this;
};


// // Улучшеный find без length
// $.prototype.find = function (selector) {
//     const newObj = this[0].querySelectorAll(selector);
//     for (let i = 0; i < this.length; i++) {
//         delete this[i];
//     }
 
//     Object.assign(this, newObj);
//     this.length = newObj.length;
//     return this;
// };

// В this лежит обьект в котором по ключам записаны опредлеленные ноды и легнс
// closest получает сам элемент или выше по иерархии
$.prototype.closest = function(selector) {
    let counter = 0;

    for (let i = 0; i < this.length; i++) {
        this[i] = this[i].closest(selector);
        counter++;

        if (this[i] === null) {
            const thisNull = 'Не найдено';
            this[i] = thisNull;
        }
    }

    // если вдруг останутся какие-то свойства которые не пренодлжедат команде closest мы их удалим
    const objLength = Object.keys(this).length; // (this) это Объект, чьи собственные перечисляемые свойства будут возвращены.
    for (; counter < objLength; counter++) {
        delete this[counter];
    }

    return this;
};

// получает все соседние элементы не включая сам элемент (ищем внутри родительского элемнта опредлененного блока)
$.prototype.siblings = function() { // ищем не по селектору а по соседним элементам
    let numberOfItems = 0; // счетчики чтобы в будущем отчистить наш обьект
    let counter = 0; // и чтобы правильно записывать все свойства

    const copyObj = Object.assign({}, this); // будем работать с копией обьекта дабы избежать багов

    for (let i = 0; i < copyObj.length; i++) {

        const arr = copyObj[i].parentNode.children; // children получить всех потомков
        // в this записываем всех соседей котороые есть у этого блока

        for (let j = 0; j < arr.length; j++) { 
            if (copyObj[i] === arr[j]) { 
                continue;
            }

            this[counter] = arr[j];
            counter++;
        }

        numberOfItems += arr.length -1;
    }
    
    this.length = numberOfItems;

    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength; numberOfItems++) { 
        delete this[numberOfItems];
    } 

    return this;
};

// Улучшил метод siblings
// $.prototype.siblings = function () {
 
//     const newObj = [...this[0].parentElement.children].filter(item => item !== this[0])
 
//     for (let i = 0; i < this.length; i++) {
//         delete this[i]
//     }
 
//     Object.assign(this, newObj)
//     this.length = newObj.length
//     return this
// }








// другие решения
// $.prototype.index = function (element) {
//     let children = this[0].children;
//     [...children].forEach((item, n) => {
//         checkIndex(item, n);
//     });

//     function checkIndex(item, index) {
//         let n;
//         for (let i = 0; i < [...children].length; i++) {
//             if ([...children][i] === document.querySelector(element)) {
//                 n = i;
//             }
//         }
//         return index === n;
//     }
//     return [...children].findIndex(checkIndex);
// };
// $.prototype.find = function (selector) {
//     if (selector) {
//         for (let i = 0; i < this.length; i++) {
//             this[i] = this[i].querySelectorAll(selector);
//         }
//         let copy = Object.values(this);
//         delete copy[copy.length - 1];
//         copy.forEach(item => {
//             item.forEach((elem, i) => {
//                 this[i] = elem;
//                 this.length = item.length;
//             });
//         });
//         return this;
//     }else{
//         return this;
//     }
// };