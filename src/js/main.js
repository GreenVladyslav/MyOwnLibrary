import $ from './lib/lib';

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

$('.wrap').html(
    `
    <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
        <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
            <a href="#" class="dropdown-item">Link 1</a>
            <a href="#" class="dropdown-item">Link 2</a>
            <a href="#" class="dropdown-item">Link 3</a>
        </div>
    </div>`
);
// если ответ приходит от сервера вызиывает после innerhtml dropdown тоже
$('.dropdown-toggle').dropdown();

































// ТЕСТ СКРИПТОВ

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