import $ from './lib/lib';
// Контекст вызова this = мы получаем html элеемент когда мы исопльзуем callback функции в качестве обычной то мы обращаясь к this получаем тот элемент на котором произошло событие
// $('button').on('click', function() { 
//     $(this).toggleClass('active');
// });


$('.active').setAttr('data-test');

console.log($('.active').getAttr('data-test'));
