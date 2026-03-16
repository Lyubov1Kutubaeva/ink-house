const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.list');

menuBtn.addEventListener('click', ()=>{
    menu.classList.toggle('menu__active');
});