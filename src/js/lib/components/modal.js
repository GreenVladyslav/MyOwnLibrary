import $ from '../core'; 

$.prototype.modal = function() {
    let scroll = calcScroll();
    for (let i = 0; i < this.length; i++) {
        const target = $(this[i]).getAttr('data-target');
        $(this[i]).click((e) => {
            e.preventDefault();
            document.body.style.marginRight = `${scroll + 1}px`;

            $(target).fadeIn(500);
            document.body.style.overflow = 'hidden';
           
        });
    }

    const closeElements = document.querySelectorAll('[data-close]');
    closeElements.forEach(elem => {
        $(elem).click(() => {
            $('.modal').fadeOut(500);
            setTimeout(() => {
                document.body.style.overflow = '';
                document.body.style.marginRight = '0px';
            }, 400);
           
        });
    });

    $('.modal').click((e) => {
        if (e.target.classList.contains('modal')) {
            $('.modal').fadeOut(500);
            setTimeout(() => {
                document.body.style.overflow = '';
                document.body.style.marginRight = '0px';
            }, 400);

           
        }
    });
};

$('[data-toggle="modal"]').modal(); // этот атрибут у всех элементов которые покажут модалку при клике


function calcScroll()  {
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility ='hidden';

    document.body.appendChild(div);

    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
}