/*====================================
ZESTO PREMIUM JS
PART 1
====================================*/

/*=============
LOADER
==============*/

window.addEventListener("load",()=>{

setTimeout(()=>{

const loader=document.getElementById("loader");

loader.style.opacity="0";

loader.style.visibility="hidden";

},1800);

});


/*=============
SCROLL BAR
==============*/

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const scrollHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const percent=(scrollTop/scrollHeight)*100;

document.getElementById("progressbar").style.width=percent+"%";

});


/*=============
AUTO SLIDER
==============*/

const slides=document.querySelectorAll(".slide");

let current=0;

function showSlide(index){

slides.forEach(slide=>{

slide.classList.remove("active");

});

slides[index].classList.add("active");

}

function nextSlide(){

current++;

if(current>=slides.length){

current=0;

}

showSlide(current);

}

setInterval(nextSlide,4500);


/*=============
COUNTER
==============*/

const counters=document.querySelectorAll(".counter");

const speed=200;

counters.forEach(counter=>{

const update=()=>{

const target=+counter.getAttribute("data-count");

const count=+counter.innerText;

const increment=target/speed;

if(count<target){

counter.innerText=Math.ceil(count+increment);

setTimeout(update,10);

}else{

counter.innerText=target.toLocaleString()+"+";

}

};

update();

});

/*====================================
ZESTO PREMIUM JS
PART 2
====================================*/


/*=============
MOBILE MENU
==============*/

const menuBtn=document.querySelector(".menu-btn");
const nav=document.querySelector("nav");

if(menuBtn){

menuBtn.onclick=()=>{

nav.classList.toggle("showMenu");

};

}


/*=============
SMOOTH SCROLL
==============*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


/*=============
TOP BUTTON
==============*/

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.opacity="1";
topBtn.style.visibility="visible";

}else{

topBtn.style.opacity="0";
topBtn.style.visibility="hidden";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


/*=============
HEART BUTTON
==============*/

document.querySelectorAll(".fav").forEach(btn=>{

btn.addEventListener("click",()=>{

const icon=btn.querySelector("i");

if(icon.classList.contains("fa-regular")){

icon.classList.remove("fa-regular");

icon.classList.add("fa-solid");

icon.style.color="red";

}else{

icon.classList.remove("fa-solid");

icon.classList.add("fa-regular");

icon.style.color="#ff6b00";

}

});

});


/*=============
ACTIVE MENU
==============*/

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

const sectionHeight=section.clientHeight;

if(window.scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


/*=============
BUTTON RIPPLE
==============*/

document.querySelectorAll(".price-row a,.hero-btn a,.view-btn a").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const x=e.offsetX;

const y=e.offsetY;

ripple.style.left=x+"px";
ripple.style.top=y+"px";

ripple.classList.add("ripple");

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

/*====================================
ZESTO PREMIUM JS
PART 3
====================================*/


/*=============
FLOATING FOOD
==============*/

const foods=document.querySelectorAll(".floating");

foods.forEach((food,index)=>{

setInterval(()=>{

const x=Math.random()*30-15;

const y=Math.random()*20-10;

food.style.transform=`translate(${x}px,${y}px) rotate(${Math.random()*20}deg)`;

},2500+(index*300));

});


/*=============
WHATSAPP BOUNCE
==============*/

const whatsapp=document.querySelector(".whatsapp-btn");

if(whatsapp){

setInterval(()=>{

whatsapp.style.transform="scale(1.15)";

setTimeout(()=>{

whatsapp.style.transform="scale(1)";

},300);

},3000);

}


/*=============
HERO ANIMATION
==============*/

window.addEventListener("load",()=>{

const hero=document.querySelector(".hero-content");

if(hero){

hero.animate([

{

opacity:0,

transform:"translateY(80px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],{

duration:1200,

fill:"forwards",

easing:"ease-out"

});

}

});


/*=============
3D CARD EFFECT
==============*/

document.querySelectorAll(".food-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*20;

const rotateX=((y/rect.height)-0.5)*-20;

card.style.transform=

`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(1000px) rotateX(0) rotateY(0)";

});

});


/*=============
MOUSE GLOW
==============*/

const glow=document.createElement("div");

glow.className="cursor-glow";

document.body.appendChild(glow);

window.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});


/*=============
KEYBOARD SHORTCUT
Press H = Scroll Top
==============*/

document.addEventListener("keydown",(e)=>{

if(e.key==="h"||e.key==="H"){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

});


/*=============
PERFORMANCE
==============*/

window.addEventListener("resize",()=>{

clearTimeout(window.resizeTimer);

window.resizeTimer=setTimeout(()=>{

console.log("Layout Updated");

},300);

});


console.log("🍔 ZESTO Premium Loaded Successfully");
