/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/lib/components/dropdown.js":
/*!*******************************************!*\
  !*** ./src/js/lib/components/dropdown.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.dropdown = function () {
  for (let i = 0; i < this.length; i++) {
    const id = Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).getAttr('id');
    Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(() => {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(`[data-toggle-id="${id}"]`).fadeToggle(300);
    });
  }
}; //1.способ подключения Уже гоотовая верстка мы ее просто помещаем из документации на страницу и хотим  чтобы она сразу заработала ! нужно сразу заинициализировать все элементы которыое подоходят по опредлененному атрибуту
// 2.способ когда приходит от сервера


Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])('.dropdown-toggle').dropdown(); // теперь та верстка котороая у нас поместилась на странице сразу же будет работать

/***/ }),

/***/ "./src/js/lib/core.js":
/*!****************************!*\
  !*** ./src/js/lib/core.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
const $ = function (selector) {
  // обращаясь к долару каждый раз создается нвоый обьект 
  return new $.prototype.init(selector); // будет запускатся метод которыой будет записан в проттопипе жтой функции
  // 1.по факту обьект мы создаем из нового констркутора то у этого обьека есть свой прототип
};

$.prototype.init = function (selector) {
  if (!selector) {
    return this; //{пустой обьект} что здесь контекст вызова ? Когда мы ввызываем контекст вызова в новом экземпляре при создания новго обьекта то мы ссылаемся на ново созданный обьект 
  } // мы не можем назначить метод queryselectorall На документ


  if (selector.tagName) {
    // если то что придет в selector у него есть tagName то это будет html элемент которыой есть на странице а не nodecollection
    this[0] = selector;
    this.length = 1;
    return this; // если фукнция видит ключевое слово return то она прекращает свою работу
  }

  Object.assign(this, document.querySelectorAll(selector)); // (куда, что)

  this.length = document.querySelectorAll(selector).length; // типа длинна один два

  return this;
}; //1. Теперь на обьекте который будет создаваться при помощи фукнции доллара мы можем использовать любые методы котороые будут внутри прототипа первого - этой функции


$.prototype.init.prototype = $.prototype;
window.$ = $; // записываем глобально чтобы мы могли использовать

/* harmony default export */ __webpack_exports__["default"] = ($);

/***/ }),

/***/ "./src/js/lib/lib.js":
/*!***************************!*\
  !*** ./src/js/lib/lib.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/js/lib/core.js");
/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display */ "./src/js/lib/modules/display.js");
/* harmony import */ var _modules_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classes */ "./src/js/lib/modules/classes.js");
/* harmony import */ var _modules_handlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/handlers */ "./src/js/lib/modules/handlers.js");
/* harmony import */ var _modules_attribute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/attribute */ "./src/js/lib/modules/attribute.js");
/* harmony import */ var _modules_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/actions */ "./src/js/lib/modules/actions.js");
/* harmony import */ var _modules_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/effects */ "./src/js/lib/modules/effects.js");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dropdown */ "./src/js/lib/components/dropdown.js");
 // делаем мы это для того чтобы мы могли дальше импортировать модули








/* harmony default export */ __webpack_exports__["default"] = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]); // lib нужен чтобы обогить функции доллар различными методами (модулями)

/***/ }),

/***/ "./src/js/lib/modules/actions.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/actions.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");
 //innerHTML позволяет быстро менять html структуру внури каких-то элементов не только менять но и получать содержимое этого элемента

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.html = function (content) {
  //1.Когда мы передаем и замещаем
  for (let i = 0; i < this.length; i++) {
    if (content) {
      this[i].innerHTML = content;
    } else {
      return this[i].innerHTML; // Возвращае не обьект, а содержимое которое нас интересует
    }
  } //2.Если не был передан то вернем


  return this;
}; // получить один элемент [0]  [3]


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.eq = function (i) {
  // i - номер элемента котороый мне понадобится из выборки 2,3 и так длаее
  const swap = this[i];
  const objLength = Object.keys(this).length; // возвращает массив из собственных перечисляемых свойств переданного объекта, в том же порядке, в котором они бы обходились циклом for...in 
  // помимо this.length  у нас могут быть свои свойства котороые лежат в обьекте

  for (let i = 0; i < objLength; i++) {
    delete this[i];
  } // очищаем полностью обьект и формируем заного один элемент


  this[0] = swap;
  this.length = 1; // возвращаем один элемент одно свойство 

  return this;
}; // можем получить номер по породяку среди всех его соседей у одного общего родителя


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.index = function () {
  // просто будет возваращать нам число
  // нам нужно полуичить индекс какого-то одного элемнта
  const parent = this[0].parentNode;
  const childs = [...parent.children]; // получим всех потомков этого родителя html collection это псевдомассив не существует метода
  // развернули с помозь spread оператора и тепреь у этого массива есть нужные методы

  const findMyIndex = item => {
    return item == this[0];
  }; // В переменной childs лежит массив в массиве есть опредленное количе-во элементов и на  кажом из этих элементов будет запускатся функция findMyIdnex(принимает каждый отдельный элемент) и вернемт тот который нам действительно нужен


  return childs.findIndex(findMyIndex);
}; // находим опредленные элементы среди уже выбранных(хчоу найти среди дивов класс актив или some среди more все они divы)


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.find = function (selector) {
  let numberOfItems = 0; // общее количество которое получилось 

  let counter = 0; // количество записаных элементов

  const copyObj = Object.assign({}, this); // не глубокая копия нашего обьекта this

  for (let i = 0; i < copyObj.length; i++) {
    // в каждом из этих скопированых copyObj элементов внутри мы попробуем найти querySelectorall подходящие по этому селектору
    const arr = copyObj[i].querySelectorAll(selector);

    if (arr.lenggth == 0) {
      continue;
    }

    for (let j = 0; j < arr.length; j++) {
      // общий обьект куда мы записываем по порядку
      this[counter] = arr[j];
      counter++;
    }

    numberOfItems += arr.length;
  }

  this.length = numberOfItems;
  const objLength = Object.keys(this).length;

  for (; numberOfItems < objLength; numberOfItems++) {
    // общее количество элементов которое есть в обьекте Object.keys(this).length;
    delete this[numberOfItems];
  } // оставшийся хвостик будет удалятся 


  return this;
}; // // Улучшеный find без length
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


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.closest = function (selector) {
  let counter = 0;

  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].closest(selector);
    counter++;

    if (this[i] === null) {
      const thisNull = 'Не найдено';
      this[i] = thisNull;
    }
  } // если вдруг останутся какие-то свойства которые не пренодлжедат команде closest мы их удалим


  const objLength = Object.keys(this).length; // (this) это Объект, чьи собственные перечисляемые свойства будут возвращены.

  for (; counter < objLength; counter++) {
    delete this[counter];
  }

  return this;
}; // получает все соседние элементы не включая сам элемент (ищем внутри родительского элемнта опредлененного блока)


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.siblings = function () {
  // ищем не по селектору а по соседним элементам
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

    numberOfItems += arr.length - 1;
  }

  this.length = numberOfItems;
  const objLength = Object.keys(this).length;

  for (; numberOfItems < objLength; numberOfItems++) {
    delete this[numberOfItems];
  }

  return this;
}; // Улучшил метод siblings
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

/***/ }),

/***/ "./src/js/lib/modules/attribute.js":
/*!*****************************************!*\
  !*** ./src/js/lib/modules/attribute.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.getAttr = function (name) {
  for (let i = 0; i < this.length; i++) {
    // if (!this[i].getAttribute(name)) {
    //     continue;
    // }
    return this[i].getAttribute(name);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.setAttr = function (name, value) {
  for (let i = 0; i < this.length; i++) {
    // if (this[i].getAttribute(name)) {
    //     continue;
    // }
    this[i].setAttribute(name, value);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeAttr = function (name) {
  for (let i = 0; i < this.length; i++) {
    // if (!this[i].getAttribute(name)) {
    //     continue;
    // }
    this[i].removeAttribute(name);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleAttr = function (name, value) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].hasAttribute(name, value)) {
      this[i].removeAttribute(name, value);
    } else {
      this[i].setAttribute(name, value);
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/classes.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/classes.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");
 // прототип $

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addClass = function () {
  // rest оператор располагается в конце списка аргументов функции, то это "остаточные параметры". Он собирает остальные неуказанные аргументы и делает из них массив.
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }

    this[i].classList.add(...arguments); // spread встретился в вызове функции или где-либо ещё, то это "оператор расширения". Он извлекает элементы из массива для инициализации работы функции. Разварачивает все что было передано во внутрсь функции
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeClass = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }

    this[i].classList.remove(...arguments);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleClass = function (classNames) {
  // передается только один класс
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }

    this[i].classList.toggle(classNames);
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/display.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/display.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.show = function () {
  // console.log(this); // выводим this из прошло прототипа для работы
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    this[i].style.display = '';
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.hide = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      continue;
    }

    this[i].style.display = 'none';
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggle = function () {
  for (let i = 0; i < this.length; i++) {
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

/***/ }),

/***/ "./src/js/lib/modules/effects.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/effects.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");
 // 1. Показывать опередленные элементы через прозрачность и опредленное время

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.animateOverTime = function (duration, callback, final) {
  // duration - количество миллисекунд за которое будет происходить анимация (указывает при вызовае в main.js)
  let start = null;

  function _animateOverTime(time) {
    // с лоудышем это техническая функция
    if (!start) {
      start = time; // авто time записали как старовтое время и от него отталкиваемся
    } // функция _animareOverTime будет запускатся каждый раз через опредленные интервал вренми котороый по факту решает браузер 
    // каждый раз функция будет получать аргумент time котороый мы не можем контролироват он автоматически приходит


    let progress = time - start; // progress отслеэивает прогресс

    let complection = Math.min(progress / duration, 1);
    callback(complection); // при каждом запуске функции каждый раз у меня будет изменятся opacity в зависимоти от формы

    if (progress < duration) {
      // как только старт больше продолжительности(скорость воспроизвездения анимации) то стоп анимации
      window.requestAnimationFrame(_animateOverTime);
    } else {
      // Этот функционал должен запуститься когда анимация закончилась 
      if (typeof final === 'function') {
        final();
      }
    }
  }

  return _animateOverTime; // это техническая функция  возващаем  из этого метода чтобы использовать 
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeIn = function (duration, display, final) {
  for (let i = 0; i < this.length; i++) {
    // закончится тогда когда закончтся элементы в обьекте this
    this[i].style.display = display || 'block'; // а можно в аругмент добавить display = block по умолчани. а это старый вариант вернет нам правую часть 

    const _fadeIn = complection => {
      this[i].style.opacity = complection;
    };

    const ani = this.animateOverTime(duration, _fadeIn, final); // duration обязательный

    requestAnimationFrame(ani);
  }

  return this;
}; // 2. Тоже ссамое только скрывая их


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeOut = function (duration, final) {
  // display = none
  for (let i = 0; i < this.length; i++) {
    // закончится тогда когда закончтся элементы в обьекте this
    const _fadeOut = complection => {
      // complection - параметр по изменения
      this[i].style.opacity = 1 - complection; // будет становится прозрачнее

      if (complection === 1) {
        this[i].style.display = 'none';
      } // this[i].style.opacity = complection;

    };

    const ani = this.animateOverTime(duration, _fadeOut, final); // duration обязательный

    requestAnimationFrame(ani);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeToggle = function (duration, display, final) {
  for (let i = 0; i < this.length; i++) {
    if (window.getComputedStyle(this[i]).display === 'none') {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).fadeIn(duration, display, final); // style.display = display || 'block';
      // const _fadeIn = (complection) => {
      //     this[i].style.opacity = complection;
      // };
      // const ani = this.animateOverTime(duration, _fadeIn, final); // duration обязательный
      // requestAnimationFrame(ani);
    } else {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).fadeOut(duration, final); // const _fadeOut = (complection) => {
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
}; // Web Animations API пример
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

/***/ }),

/***/ "./src/js/lib/modules/handlers.js":
/*!****************************************!*\
  !*** ./src/js/lib/modules/handlers.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/lib/core.js");


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.on = function (eventName, callback) {
  // (оброботчки то есть клик или сабмит, то что выполнится)
  if (!eventName || !callback) {
    return this; // если не был передан то мы ничего не делаем и дальше возвращаем по цепочке
  }

  for (let i = 0; i < this.length; i++) {
    this[i].addEventListener(eventName, callback);
  }

  return this;
}; // removeEventListener нам нужно передать строго тоже самое событие


_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.off = function (eventName, callback) {
  if (!eventName || !callback) {
    return this;
  }

  for (let i = 0; i < this.length; i++) {
    this[i].removeEventListener(eventName, callback);
  }

  return this;
};

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.click = function (handler) {
  // принимает обработчик клика
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

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/lib */ "./src/js/lib/lib.js");
 // $('#first').on('click', () => {
//     $('div').eq(1).find();
// });
// $('[data-count="second"]').on('click', () => {
//     $('div').eq(2).fadeIn(800);
// });
// $('button').eq(2).on('click', () => {
//     $('.w-500').fadeOut(800);
// });
// console.log($('div').find('.w-500'));

Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.wrap').html(`
    <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
        <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
            <a href="#" class="dropdown-item">Link 1</a>
            <a href="#" class="dropdown-item">Link 2</a>
            <a href="#" class="dropdown-item">Link 3</a>
        </div>
    </div>`); // если ответ приходит от сервера вызиывает после innerhtml dropdown тоже

Object(_lib_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.dropdown-toggle').dropdown(); // ТЕСТ СКРИПТОВ
// Контекст вызова this = мы получаем html элеемент когда мы исопльзуем callback функции в качестве обычной то мы обращаясь к this получаем тот элемент на котором произошло событие
// $('button').on('click', function() { 
//     $('div').eq(1).toggleClass('active'); // переключие класса
// });
// $('div').click(function() {
//     console.log($(this).index()); // позволит получить номер элемента на который мы кликаем
// });
// console.log($('div').eq(2).find('.more')); // find
// console.log($('.some').closest('.findme')); // closest
// console.log($('.findme').siblings()); // sibling
// $('button').fadeIn(3000); //fadeIn Анимация
// $('button').setAttr('type', 'submit'); //атрибут
// console.log($('button').html('Hello'));  innerHtml
// Все что касается стилей
// Лоудуш в начале для того чтобы каждый раз при сохранении файликов компелировался именно общий файл стилей а не каждый отдельный файлик компилятор котороый натсоен в галпе знает об этом
// genreal - общее различные базовые вещи (перемененные, шрифты, типография (размеры шрифтов) миксины, самые главне стили на странице)
// components - отдельные стили для отдельных компанентов (табы, слайдеры)
// helpers - вспомогательные классы которые будем использовать на странице

/***/ })

/******/ });
//# sourceMappingURL=script.js.map