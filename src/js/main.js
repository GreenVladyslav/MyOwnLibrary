import $ from './lib/lib';
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

$('button').fadeIn(3000);



// $('button').setAttr('type', 'submit'); //атрибут

// console.log($('button').html('Hello'));  innerHtml
