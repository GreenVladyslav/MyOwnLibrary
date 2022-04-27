import $ from '../core';

$.prototype.carousel = function() {
    for (let i = 0; i < this.length; i++) {
        const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width;
        const slides = this[i].querySelectorAll('.carousel-item');
        const slidesField = this[i].querySelector('.carousel-slides');
        const dots = this[i].querySelectorAll('.carousel-indicators li'); // dots

        slidesField.style.width = 100 * slides.length + '%'; // если у нас будет три слайда то ширина блока 300 если 5 то 500 чтобы мы могли поместить все слайды во внутрь и чтобы они занимали одн и тоже значение по ширине вне зависимоти от контента внутри чтобы их красиво передевгиать
        slides.forEach(slide => {
            slide.style.width = width;
        });


        const changeSlide = () => {
            slidesField.style.transform = `translateX(${-offset}px)`;
            $(slidesField).fadeOut(400, () => {
               $(slidesField).fadeIn(400, "flex");
            });
    
            dots.forEach((dot) => dot.classList.remove("active"));
            dots[slideIndex].classList.add("active");
         };

        let offset = 0;
        let slideIndex = 0; // dots

        $(this[i].querySelector('[data-slide="next"]')).click((e) => {
            e.preventDefault();
            // if (offset == (+width.slice(0, width.length -2) * (slides.length - 1))) {  (+width.replace(/\D/g, '') = 500px отнимаем 500пх
            if (offset == (+width.replace(/\D/g, '') * (slides.length - 1))) { // если текущий слайд послдений (100px "каждого отдельно слайда" * кол-во сладйов) = 500px
                // берем ширин 
                offset = 0;
            } else {
                offset += +width.replace(/\D/g, ''); // если мы не дошли до конца то мы просто добаляем ширинку каждого слудещего слайдера
            }
            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slideIndex == slides.length - 1) { // dots
                slideIndex = 0;
            } else {
                slideIndex++;
            }

            dots.forEach(dot => dot.classList.remove('active')); ////dots   dot => dot.style.opacity = '.5'
            dots[slideIndex].classList.add('active'); ////dots   dots[slideIndex - 1].style.opacity = 1;
            changeSlide();
        });


        $(this[i].querySelector('[data-slide="prev"]')).click((e) => {
            e.preventDefault();
            if (offset == 0) { // Если наш слайдер сейчас первый то мы должны переместить наш слайдер в самый конец
                offset = +width.replace(/\D/g, '') * (slides.length - 1);
            } else {
                offset -= +width.replace(/\D/g, '');  // ставим минус -= мы идем на слайд назад
            }
            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slideIndex == 0) { // dots
                slideIndex = slides.length - 1; // переходим к последнемоу слайду
            } else {
                slideIndex--;
            }

            dots.forEach(dot => dot.classList.remove('active')); //dots
            dots[slideIndex].classList.add('active'); //dots
            changeSlide();
        });

        const sliderId = this[i].getAttribute('id'); // dots
        $(`#${sliderId} .carousel-indicators li`).click(e => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = +width.replace(/\D/g, '') * slideTo; // Отступ равен ширне каждого отдельного слайда * на кол-во слайдеров которое нам необходимо пролистать

            slidesField.style.transform = `translateX(-${offset}px)`;
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
            changeSlide();
        });
    }
};

$('.carousel').carousel();

// 1. Нам необходимо взять всю оболочку для всех слайдов и утсанаваливаем ему ширину (устаниовим каждому слайдеру ширину)