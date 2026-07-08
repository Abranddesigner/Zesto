// ===============================
// AUTO IMAGE SLIDER
// ===============================

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index) {

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");

}

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);

}

setInterval(nextSlide, 4000);


// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("show-menu");

});


// ===============================
// CLOSE MENU AFTER CLICK
// ===============================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("show-menu");

    });

});


// ===============================
// STICKY HEADER SHADOW
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.15)";

    } else {

        header.style.boxShadow = "0 3px 15px rgba(0,0,0,.08)";

    }

});


// ===============================
// SLIDE FADE EFFECT
// ===============================

slides.forEach(slide => {

    slide.style.transition = "opacity .8s ease";

});


// ===============================
// PRELOAD IMAGES
// ===============================

window.addEventListener("load", () => {

    slides.forEach(img => {

        const image = new Image();
        image.src = img.src;

    });

});


// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


// ===============================
// MOBILE MENU STYLE
// ===============================

const style = document.createElement("style");

style.innerHTML = `

@media(max-width:992px){

nav{

position:absolute;
top:90px;
left:0;
width:100%;
background:#000;
display:none;
padding:25px;
box-shadow:0 10px 30px rgba(0,0,0,.12);

}

nav.show-menu{

display:block;

}

nav ul{

flex-direction:column;
gap:20px;

}

}

`;

document.head.appendChild(style);
