const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const infoBar1 = document.getElementById('info-bar1');
const infoBar2 = document.getElementById('info-bar2');
const infoBar3 = document.getElementById('info-bar3');

btn1.addEventListener('click', toggleInfoBar.bind(null, infoBar1));
btn2.addEventListener('click', toggleInfoBar.bind(null, infoBar2));
btn3.addEventListener('click', toggleInfoBar.bind(null, infoBar3));

function toggleInfoBar(infoBar) {
  if (infoBar.classList.contains('show')) {
    infoBar.classList.remove('show');
  } else {
    const activeInfoBar = document.querySelector('.info-bar.show');
    if (activeInfoBar) {
      activeInfoBar.classList.remove('show');
    }
    infoBar.classList.add('show');
  }
}

/////////////////////////////////////


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


/////// nick 

document.addEventListener("scroll", function() {
    let element = document.querySelector(".nick");
    let position = element.getBoundingClientRect();
    let windowHeight = window.innerHeight;
    if (position.top < windowHeight && position.bottom >= 0) {
        element.style.animationPlayState = "running";
    }
});


//////popuppppp


const openPopupButton = document.getElementById("openPopup");
const closePopupButton = document.getElementById("closePopup");
const popup = document.getElementById("myPopup");
const overlay = document.getElementById("overlay");

openPopupButton.addEventListener("click", () => {
  popup.classList.add("show-popup");
  overlay.classList.add("show-overlay");
});

closePopupButton.addEventListener("click", () => {
  popup.classList.remove("show-popup");
  overlay.classList.remove("show-overlay");
});

popup.addEventListener("click", (event) => {
  if (event.target === popup) {
    popup.classList.remove("show-popup");
    overlay.classList.remove("show-overlay");
  }
});




/////////////////////

function changeImage(clickedImage) {
  var displayImage = document.getElementById('displayImage');
  displayImage.innerHTML = ''; // Clear the previous image

  var img = document.createElement('img');
  img.src = clickedImage.src;
  displayImage.appendChild(img);
}



var navbar = document.getElementById("myNavbar");
var button = document.getElementById("but-one");
var closeIcoon = document.querySelector(".close-icon");

button.addEventListener("click", function() {
  navbar.classList.toggle("open");
});

closeIcoon.addEventListener("click", function() {
  navbar.classList.remove("open");
});