const mobileBtn = document.querySelector("#mobile-cta");
const nav = document.querySelector("nav");
const mobileBtnExit = document.querySelector("#mobile-exit");
const date = document.querySelector("#date")
const preloader = document.querySelector(".preloader");

// Adding a Preloader
window.addEventListener("load", function(){
    preloader.classList.add("hide-preloader");
})

// Update Date Automatically
const newDate = new Date().getFullYear();
date.innerHTML = newDate;

// Display menu
mobileBtn.addEventListener("click", function() {
    nav.classList.add("menu-btn");
})

// Exit menu
mobileBtnExit.addEventListener("click", function() {
    nav.classList.remove("menu-btn");
})


// Scroll Effect
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











