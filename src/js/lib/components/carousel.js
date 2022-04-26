import $ from '../core';

$.prototype.carousel = function() {
    for (let i = 0; i < this.length; i++) {
        const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width;
        const slides = this[i].querySelectorAll('.carousel-item');
        const slidesField = this[i].querySelector('.carousel-slides');

        slidesField.style.width = 100 * slides.length + '%'; // если у нас будет три слайда то ширина блока 300 если 5 то 500 чтобы мы могли поместить все слайды во внутрь и чтобы они занимали одн и тоже значение по ширине вне зависимоти от контента внутри чтобы их красиво передевгиать
        slides.forEach(slide => {
            slide.style.width = width;
        });

        let offset = 0;
        let slideIndex = 1;

        $(this[i].querySelector('[data-slide-to="next"]')).click((e) => {
            e.preventDefault();
            // if (offset == (+width.slice(0, width.length -2) * (slides.length - 1))) {  (+width.replace(/\D/g, '') = 500px отнимаем 500пх
            if (offset == (+width.replace(/\D/g, '') * (slides.length - 1))) { // если текущий слайд послдений (100px "каждого отдельно слайда" * кол-во сладйов) = 500px
                // берем ширин 
                offset = 0;
            } else {
                offset += +width.replace(/\D/g, ''); // если мы не дошли до конца то мы просто добаляем ширинку каждого слудещего слайдера
            }
            slidesField.style.transform = `TranslateX(-${offset}px)`;
        });


        $(this[i].querySelector('[data-slide-to="prev"]')).click((e) => {
            e.preventDefault();
            if (offset == 0) { // Если наш слайдер сейчас первый то мы должны переместить наш слайдер в самый конец
                offset = +width.replace(/\D/g, '') * (slides.length - 1);
            } else {
                offset -= +width.replace(/\D/g, '');  // ставим минус -= мы идем на слайд назад
            }
            slidesField.style.transform = `TranslateX(-${offset}px)`;
        });
    }
};

$('.carousel').carousel();

// 1. Нам необходимо взять всю оболочку для всех слайдов и утсанаваливаем ему ширину (устаниовим каждому слайдеру ширину)