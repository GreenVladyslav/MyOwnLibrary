import $ from './lib/lib';

$('#first').on('click', () => {
    $('div').eq(1).find();
});


$('[data-count="second"]').on('click', () => {
    $('div').eq(2).fadeIn(800);
});

$('button').eq(2).on('click', () => {
    $('.w-500').fadeOut(800);
});

$('#trigger').click(() => $('#trigger').createModal({
    text: {
        title: 'Modal Title',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita necessitatibus possimus excepturi debitis consequatur, praesentium incidunt minima quod dolorum quidem ab commodi eveniet ipsam quasi aspernatur inventore officiis labore hic!'
    },
    btns: {
        count: 3,
        settings: [
            [
                'Close',
                ['btn-danger', 'mr-10'],
                true
            ],
            [
                'Save changes',
                ['btn-success', 'mr-10'],
                false,
                () => {
                    alert('Данные сохраненны');
                }
            ],
            [
                'You are welcome!',
                ['btn-warning'],
                false,
                () => {
                    alert('У тебя получилось');
                }  
            ]
        ]
    }
}));


// console.log($('div').find('.w-500'));



// // если ответ приходит от сервера вызиывает после innerhtml dropdown тоже
// $('.dropdown-toggle').dropdown();

































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