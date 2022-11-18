let data = []
const mobileBtn = document.querySelector("#mobile-cta");
const nav = document.querySelector("nav");
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
    nav.classList.add("menu-btn");
})

// Exit menu
mobileBtnExit.addEventListener("click", function() {
    nav.classList.remove("menu-btn");
})

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











