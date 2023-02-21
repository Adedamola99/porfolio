let data = []
const mobileBtn = document.querySelector("#mobile-cta");
const linkContainer = document.querySelector(".nav-link");
const link = document.querySelector(".link");
const mobileBtnExit = document.querySelector("#mobile-exit");
const date = document.querySelector("#date")
const preloader = document.querySelector(".preloader");
const topLink = document.querySelector(".top-link");

const img = document.getElementById("work-image");
const text = document.getElementById("text");
const iconLink = document.getElementById("icon-link");
const siteLink = document.getElementById("site-link");
const imgLink = document.getElementById("image-link");

const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");

let currentItem = 0;

const loadData = async () => {
    const response = await fetch('./data.json')
    const fetchedData = await response.json()
    data = fetchedData
    showWorkDetails()
}


function showWorkDetails() {
    const item = data[currentItem];
    img.src = item.img;
    imgLink.href = item.siteLink;
    text.textContent = item.text;
    iconLink.href = item.githubLink;
    siteLink.href = item.siteLink;
}

nextBtn.addEventListener("click", () => {
    currentItem++;
    if (currentItem > data.length - 1) {
        currentItem =  0;  
    }
    showWorkDetails()
})

prevBtn.addEventListener("click", () => {
    currentItem--;
    if (currentItem < 0) {
        currentItem =  data.length - 1;  
    }
    showWorkDetails()
})

loadData()

// Adding a Preloader
window.addEventListener("load", function(){
    preloader.classList.add("hide-preloader");
})

// Update Date Automatically
const newDate = new Date().getFullYear();
date.innerHTML = newDate;

// Display menu
mobileBtn.addEventListener("click", function() {
    linkContainer.classList.add("display-menu");
    mobileBtn.classList.add("clear-hamburger");
    mobileBtnExit.classList.add("show-hamburger")
    mobileBtnExit.classList.remove("clear-hamburger")
})

// Exit menu
mobileBtnExit.addEventListener("click", function() {
    linkContainer.classList.remove("display-menu");
    mobileBtn.classList.add("show-hamburger");
    mobileBtn.classList.remove("clear-hamburger");
    mobileBtnExit.classList.add("clear-hamburger")
})

const scrollLinks = document.querySelectorAll(".scroll-link");
const navbar = document.querySelector(".nav-center");



// Adding a Top Link
window.addEventListener("scroll", function(){
    const scrollHeight = window.pageYOffset;
    
    if (scrollHeight > 500){
        topLink.classList.add("show-link")
    } else {
        topLink.classList.remove("show-link")
    }
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











