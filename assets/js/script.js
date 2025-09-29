document.addEventListener('DOMContentLoaded', ()=> {
    //Акардион начало //
    function openAccordion(selector, classToToggle = 'FAQ__show') {
        const items = document.querySelectorAll(selector);
        
        items.forEach((item) => {
            item.addEventListener('click', () => {
                const isOpen = item.classList.contains(classToToggle);
                
                // Закрываем все другие элементы в этой секции
                items.forEach((otherItem) => {
                    otherItem.classList.remove(classToToggle);
                });
                
                // Toggle для текущего: если закрыт — открываем, если открыт — закрываем
                if (!isOpen) {
                    item.classList.add(classToToggle);
                }
            });
        });
    }

    // Вызов для FAQ
    openAccordion('.FAQ__item', 'FAQ__show');
    // Вызов для information
    openAccordion('.information__item-box', 'information__show');
    //Акардеон конец//

    //Модальное окно начало
    const modal = document.querySelector('.modal');
    const btnOpenModal = document.querySelectorAll('.open__modal');

    function showModal() {
        modal.classList.add('modal__show');
        document.body.style.overflow = 'hidden';
    }
    function removeModal() {
        modal.classList.remove('modal__show');
        document.body.style.overflow = '';
    }

    btnOpenModal.forEach(btn => {
        btn.addEventListener('click', ()=> {
            showModal();
        })
    });
    modal.addEventListener('click', (e)=> {
        if(e.target.classList.contains('modal__close') || e.target == modal) {
            removeModal();
        }
    });
    window.addEventListener('keydown', (e)=> {
        if(e.code === 'Escape' || e.target.classList.contains('modal__show')) {
            removeModal(); 
        }
    });
    //Модальное окно конец

    //Слайдер начало
    new Swiper('.peptidesuitability__swiper', {
        direction: 'horizontal',
        loop: true,    
        speed: 1000,
        spaceBetween: 10, 
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    new Swiper('.product__swipper', {
        direction: 'horizontal',
        loop: true,    
        speed: 1000,
        spaceBetween: 10, 
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {  // Добавлено: настройка пагинации
            el: '.swiper-pagination',  // Элемент для пагинации (точки)
            clickable: true,  // Делает точки кликабельными для перехода к слайду
            type: 'bullets',  // Тип: точки (можно 'fraction' для "1/5" или 'progressbar')
        },
    });
    new Swiper('.products__swiper', {
    direction: 'horizontal',
    loop: true,    
    speed: 1000,
    spaceBetween: -10,  // Отрицательный отступ: слайды накладываются на 20 пикселей, второй виден
    slidesPerView: 1,   // Показываем 1 полный слайд (второй будет "выглядывать")
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        450: {  // Для экранов >= 450px
            spaceBetween: -20,  // Наложение на 20 пикселей
        },
        400: {  // Для экранов >= 450px
            spaceBetween: -20,  // Наложение на 20 пикселей
        }
    }
    });
    //Слайдер конец
     //Меню-гамбургер начало
    const header = document.querySelector('.header');
    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', ()=> {
        header.classList.toggle('menu__active')
    });
    //Меню-гамбургер конец
    //Выпадающий список начало
    const aboutNext = document.querySelector('.about__next');
    const aboutParagraph = document.querySelectorAll('.about__information-paragraph');
    aboutNext.addEventListener('click', ()=> {
        aboutParagraph.forEach(p => {
            p.classList.toggle('about__hide')
        })
    });
     //Выпадающий список конец
})