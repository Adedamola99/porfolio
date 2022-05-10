var mobileBtn = document.querySelector("#mobile-cta");
var nav = document.querySelector("nav");
var mobileBtnExit = document.querySelector("#mobile-exit");

mobileBtn.addEventListener("click", function() {
    nav.classList.add("menu-btn");
})

mobileBtnExit.addEventListener("click", function() {
    nav.classList.remove("menu-btn");
})

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
}); 

// header scroll
sr.reveal('.scroll1', {})
sr.reveal('.intro-contact', {delay: 200})
sr.reveal('.codingimg', {delay: 400})
sr.reveal('.social-icon', {interval: 400})

//about scroll
sr.reveal('.about-img', {})
sr.reveal('.words', {delay: 200})

//skill scroll
sr.reveal('.skillscroll', {})
sr.reveal('.container4-1', {interval: 400})

//contact scroll
sr.reveal('.container5', {})
sr.reveal('input', {interval: 400})









