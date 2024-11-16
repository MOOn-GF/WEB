let slogan = document.querySelector(".slogan");
let title = document.querySelector(".nav__title")
let nav = document.querySelector(".nav__link__box")
let acc = document.querySelector(".nav__account")
let btn = document.querySelector(".buttn")
const timerId = setTimeout(() => {
    slogan.classList.toggle("active");
    title.classList.toggle("nav__active")
    nav.classList.toggle("nav__active")
    acc.classList.toggle("nav__active")
    btn.classList.toggle("active")
}, 1000);

const preloader = document.getElementById('preloader'); 
const content = document.getElementById('content');
setTimeout(() => {
    preloader.style.display = 'none';
    content.style.display = 'block';
    }, 3000);