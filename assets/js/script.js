document.addEventListener('DOMContentLoaded', ()=> {
    //Акардион
    const FAQItem = document.querySelectorAll('.FAQ__item');
    FAQItem.forEach((item)=> {
        item.addEventListener('click', ()=> {
            item.classList.toggle('FAQ__show');
        })
    })
})