import $ from '../core'; 

$.prototype.modal = function(created) { // create -создано ли это окно программно
    let scroll = calcScroll();
    for (let i = 0; i < this.length; i++) {
        const target = $(this[i]).getAttr('data-target');
        $(this[i]).click((e) => {
            e.preventDefault();
            document.body.style.marginRight = `${scroll + 1}px`;

            $(target).fadeIn(500);
            document.body.style.overflow = 'hidden'; 
        });

        const closeElements = document.querySelectorAll(`${target} [data-close]`); // добавил ${target} - то модальное окно которе
        closeElements.forEach(elem => {
            $(elem).click(() => {
                $(target).fadeOut(500);
                setTimeout(() => {
                    document.body.style.overflow = '';
                    document.body.style.marginRight = '0px';

                    if (created) { // если это модальное окно было создано прогрмано то мы его удалим со страницы
                        document.querySelector(target).remove();
                    }
                }, 500);    

            });
        });
    
        $(target).click((e) => {
            if (e.target.classList.contains('modal')) {
                $(target).fadeOut(500);
                setTimeout(() => {
                    document.body.style.overflow = '';
                    document.body.style.marginRight = '0px';

                    if (created) {
                        document.querySelector(target).remove();
                    }
                }, 500);

            }
        });
    }
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

// динмачиеские модалки могут быть соврешенно разные поэттому мы передадим один болшой обьект настроек
$.prototype.createModal = function({text, btns} = {}) {
    for (let i = 0; i < this.length; i++) {
        let modal = document.createElement('div');
        modal.classList.add('modal');
        modal.setAttribute('id', this[i].getAttribute('data-target').slice(1)); // убрали решокту в начале

        // btns = {count: num, settings: [[text.classNames=[], close, callback]]} //[[]] матрица массив массивов callback та функиция октороая будет выполнятся после клика
        const buttons = []; //html node
        for (let j = 0; j < btns.count; j++) {
            let btn = document.createElement('button'); // кол-во кнопок завивист от переданного count
            btn.classList.add('btn', ...btns.settings[j][1]); // [1] - classNames
            btn.textContent = btns.settings[j][0];
            if (btns.settings[j][2]) {
                btn.setAttribute('data-close', 'true');
            }
            if (btns.settings[j][3] && typeof(btns.settings[j][3]) === 'function') {
                btn.addEventListener('click', btns.settings[j][3]);
            }

            buttons.push(btn);
        } // этот цилк будет работать в зависимоти от того сколько кнопок естть

        modal.innerHTML = `
            <div class="modal-dialog">
                <div class="modal-content">
                    <button class="close" data-close>
                        <spaan>&times;</spaan>
                    </button>
                    <div class="modal-header">
                        <div class="modal-title">${text.title}</div>
                        <div class="modal-body">${text.body}</div>
                        <div class="modal-footer">
                            
                        </div>
                    </div>
                </div>
            </div>
        `;

        modal.querySelector('.modal-footer').append(...buttons); // развернем массив на каждые отдельные элементы 
        document.body.appendChild(modal); // помещаем 
        $(this[i]).modal(true); //(передает true - это модальное окно было создано технически // CreateModal подвяжет этот триггер к ново созданному модальному окну
        $(this[i].getAttribute('data-target')).fadeIn(500);

    }
};



// код до динамического окна
// $.prototype.modal = function(created) { // create -создано ли это окно программно
//     let scroll = calcScroll();
//     for (let i = 0; i < this.length; i++) {
//         const target = $(this[i]).getAttr('data-target');
//         $(this[i]).click((e) => {
//             e.preventDefault();
//             document.body.style.marginRight = `${scroll + 1}px`;

//             $(target).fadeIn(500);
//             document.body.style.overflow = 'hidden';
           
//         });

//         const closeElements = document.querySelectorAll('[data-close]');
//         closeElements.forEach(elem => {
//             $(elem).click(() => {
//                 $('.modal').fadeOut(500);
//                 setTimeout(() => {
//                     document.body.style.overflow = '';
//                     document.body.style.marginRight = '0px';
//                 }, 500);    
//             });
//         });
    
//         $('.modal').click((e) => {
//             if (e.target.classList.contains('modal')) {
//                 $('.modal').fadeOut(500);
//                 setTimeout(() => {
//                     document.body.style.overflow = '';
//                     document.body.style.marginRight = '0px';
//                 }, 500);
//             }
//         });
//     }
// };