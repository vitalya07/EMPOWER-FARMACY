document.addEventListener('DOMContentLoaded', ()=> {
    //Акардион начало //
    const FAQItem = document.querySelectorAll('.FAQ__item');
    FAQItem.forEach((item)=> {
        item.addEventListener('click', ()=> {
            item.classList.toggle('FAQ__show');
        })
    })
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
        if(e.target.classList.contains('modal__close') || e.target == modal.classList.contains('modal__showl')) {
            removeModal();
        }
    })
})