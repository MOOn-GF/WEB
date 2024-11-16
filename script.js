let slogan = document.querySelector(".slogan");
let title = document.querySelector(".nav__title")
let nav = document.querySelector(".nav__link__box")
let acc = document.querySelector(".nav__account")
let btn = document.querySelector(".buttn")
let images = document.querySelector(".images")
let sign= document.querySelector(".nav__account")
const timerId = setTimeout(() => {
    slogan.classList.toggle("active");
    title.classList.toggle("nav__active")
    nav.classList.toggle("nav__active")
    acc.classList.toggle("nav__active")
    btn.classList.toggle("active")
    images.classList.toggle("active_right")
}, 1000);

addEventListener("click",()=>{

})