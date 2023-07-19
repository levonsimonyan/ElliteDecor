// Change header background color on scroll
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});

//search
  
const searchBox = document.querySelector(".search-box");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const searchInput = document.querySelector("input");
const searchData = document.querySelector(".search-data");

searchBtn.onclick =()=>{
  searchBox.classList.add("active");
  searchBtn.classList.add("active");
  searchInput.classList.add("active");
  cancelBtn.classList.add("active");
  searchInput.focus();
  if(searchInput.value != ""){
    var values = searchInput.value;
    searchData.classList.remove("active");
    searchData.innerHTML = "You just typed " + "<span style='font-weight: 500;'>" + values + "</span>";
  }else{
    searchData.textContent = "";
  }
}

cancelBtn.onclick =()=>{
  searchBox.classList.remove("active");
  searchBtn.classList.remove("active");
  searchInput.classList.remove("active");
  cancelBtn.classList.remove("active");
  searchData.classList.toggle("active");
  searchInput.value = "";
}


// vereva hanum 

const scrollToTopBtn = document.querySelector(".scroll-to-top-btn");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


////////////////


const slides = document.querySelectorAll(".carousel-slide");
let currentSlide = 0;

function nextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

setInterval(nextSlide, 3000);





///vazox toxxxxxxxxxxxxxx

"use strict";

function carousel() {
  let carouselSlider = document.querySelector(".carousel__slider");
  let list = document.querySelector(".carousel__list");
  let item = document.querySelectorAll(".carousel__item");
  let list2;

  const speed = 1;

  const width = list.offsetWidth;
  let x = 0;
  let x2 = width;

  function clone() {
    list2 = list.cloneNode(true);
    carouselSlider.appendChild(list2);
    list2.style.left = `${width}px`;
  }

  function moveFirst() {
    x -= speed;

    if (width >= Math.abs(x)) {
      list.style.left = `${x}px`;
    } else {
      x = width;
    }
  }

  function moveSecond() {
    x2 -= speed;

    if (list2.offsetWidth >= Math.abs(x2)) {
      list2.style.left = `${x2}px`;
    } else {
      x2 = width;
    }
  }

  function hover() {
    clearInterval(a);
    clearInterval(b);
  }

  function unhover() {
    a = setInterval(moveFirst, 10);
    b = setInterval(moveSecond, 10);
  }

  clone();

  let a = setInterval(moveFirst, 10);
  let b = setInterval(moveSecond, 10);

  carouselSlider.addEventListener("mouseenter", hover);
  carouselSlider.addEventListener("mouseleave", unhover);
}

carousel();




//paralaxxxx


// document.addEventListener("scroll", function() {
//   var element = document.querySelector(".partex");
//   var position = element.getBoundingClientRect();
//   var windowHeight = window.innerHeight;
//   if (position.top < windowHeight && position.bottom >= 0) {
//       element.style.animationPlayState = "running";
//   }
// });


// document.addEventListener("scroll", function() {
//   var element = document.querySelector(".parh");
//   var position = element.getBoundingClientRect();
//   var windowHeight = window.innerHeight;
//   if (position.top < windowHeight && position.bottom >= 0) {
//       element.style.animationPlayState = "running";
//   }
// });




const slider = document.querySelector('.slider');
const slide = document.querySelector('.slide');
const cards = document.querySelectorAll('.card');
const cardWidth = cards[0].offsetWidth;
const leftIcon = document.querySelector('.left');
const rightIcon = document.querySelector('.right');

let slidePosition = 0;

function slideCards(direction) {
  const numCardsToSlide = direction === 'left' ? 2 : -2;
  slidePosition += numCardsToSlide * cardWidth;
  
  // Check if slidePosition exceeds the boundaries
  if (slidePosition > 0) {
    slidePosition = -(cards.length * cardWidth) + (numCardsToSlide * cardWidth);
  } else if (slidePosition < -(cards.length * cardWidth)) {
    slidePosition = 0;
  }
  
  slide.style.transform = `translateX(${slidePosition}px)`;
}

leftIcon.addEventListener('click', () => slideCards('left'));
rightIcon.addEventListener('click', () => slideCards('right'));


/// get started scroll down


function scrollDown() {
  var scrollDistance = 900;
  var currentPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  var targetPosition = currentPosition + scrollDistance;

  window.scrollTo({
    top: targetPosition,
    behavior: "smooth"
  });
}




