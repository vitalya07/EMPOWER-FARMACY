document.addEventListener('DOMContentLoaded', ()=> {
    //Акардион начало //
    // const FAQItem = document.querySelectorAll('.FAQ__item');
    // FAQItem.forEach((item)=> {
    //     item.addEventListener('click', ()=> {
    //         item.classList.toggle('FAQ__show');
    //     })
    // });
    // function openAccordion(selector) {
    //     const items = document.querySelectorAll(selector);
        
    //     items.forEach((item) => {
    //         item.addEventListener('click', () => {
    //             const isOpen = item.classList.contains('FAQ__show');
    //             items.forEach((otherItem) => {
    //                 otherItem.classList.remove('FAQ__show');
    //             });
    //             if (!isOpen) {
    //                 item.classList.add('FAQ__show');
    //             }
    //         });
    //     });
    // }
    // openAccordion('.FAQ__item');
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

    // Вызов для information (клик на .information__item-box)
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
    //Слайдер
    new Swiper('.peptidesuitability__swiper', {
        direction: 'horizontal',
        loop: true,    
        speed: 1000,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    new Swiper('.product__swipper', {
        direction: 'horizontal',
        loop: true,    
        speed: 1000,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
     
})