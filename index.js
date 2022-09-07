const workData = [
    {
        id: 1,
        githubLink: "https://github.com/Adedamola99/Trivia-Quizz-App/",
        img: "./images/react project.PNG",
        siteLink: "https://damia-triviagame-app.netlify.app/",
        text: "A Scrimba react course challenge that involves building a trivia game app by pulling data from an API database and determining the user knowledge about computers while also scoring the number of correct questions answered",
    },
    {
        id: 2,
        githubLink: "https://github.com/Adedamola99/Time-tracker-dashboard",
        img: "./images/project4.PNG",
        siteLink: "https://adedamola99.github.io/Time-tracker-dashboard/",
        text: "A Frontendmentor Challenge that involved making an interactive time tracking dashboard by pulling data from a JSON file and then displaying an individual amount of time spent on activities daily, weekly and monthly.",
    },
    {
        id: 3,
        githubLink: "https://github.com/Adedamola99/crowdfunding-website/",
        img: "./images/Project 5.PNG",
        siteLink: "https://adedamola99.github.io/crowdfunding-website/",
        text: "A Frontendmentor challenge that involved building a responsive crowdfunding interactive website with different amazing features such as a thank you message after backing and a menu showing backing plan and many others",
    },

    {
        id: 4,
        githubLink: "https://github.com/Adedamola99/Coding-Bootcamp-Testimonial-Slider",
        img: "./images/project 6.PNG",
        siteLink: "https://adedamola99.github.io/Coding-Bootcamp-Testimonial-Slider/",
        text: "A Frontendmentor challenge that involved building a responsive individual bootcamp testimonial with a slider feature and with amazing UI design.",
    },  
      
    {
      id: 5,
      githubLink: "https://github.com/Adedamola99/Codewell-Challenge/",
      img: "./images/sample 2.PNG",
      siteLink: "https://adedamola99.github.io/Codewell-Challenge/",
      text: "A codwell challenge that entailed creating a responsive website that I hosted on github👩‍💻😎. I learned a lot from this project because it helped me understand a lot of things about HTML, CSS, and javascript.",
    },
    {
      id: 6,
      githubLink: "https://github.com/Adedamola99/simple-to-do-project/",
      siteLink: "https://adedamola99.github.io/simple-to-do-project/",
      img: "./images/todo2.PNG",
      text: "A simple, clean, and appealing to-do list with various functionality that is hosted on github⚡. I learned a lot from this project because it helped me understand a lot about vanilla Js🥰 and, more importantly, Jquery😍..",
    },
    {
      id: 7,
      githubLink: "https://github.com/Adedamola99/commune/",
      siteLink: "https://adedamola99.github.io/commune/",
      img: "./images/sample3.PNG",
      text: "A frontendMentor challenge that entails creating a responsive landing page and is hosted on github😎. This project taught me a lot about grid and flexbox and helped me understand a lot of things🥰.",
    },
    {
      id: 8,
      githubLink: "https://github.com/Adedamola99/project-2/",
      siteLink: "https://adedamola99.github.io/project-2/",
      img: "./images/screencapture-127-0-0-1-5500-index-html-2022-04-19-16_23_21.png",
      text: "A frontendMentor challenge which involves building a responsive landing page and it is hosted on github😎. This project exposed me to new challenges⚡⚡⚡ on how to do things and intelligent way of doing stuff🔥.",
    },
  ];



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

window.addEventListener("DOMContentLoaded", () => {
    showWorkDetails()
})

function showWorkDetails() {
    const item = workData[currentItem];
    img.src = item.img;
    imgLink.href = item.siteLink;
    text.textContent = item.text;
    iconLink.href = item.githubLink;
    siteLink.href = item.siteLink;
}

nextBtn.addEventListener("click", () => {
    currentItem++;
    if (currentItem > workData.length - 1) {
     currentItem =  0;  
    }
    showWorkDetails()
})

prevBtn.addEventListener("click", () => {
    currentItem--;
    if (currentItem < 0) {
        currentItem =  workData.length - 1;  
       }
    showWorkDetails()
})

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











