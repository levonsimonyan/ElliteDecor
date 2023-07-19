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






/////////////ading num 

let valueDisplays = document.querySelectorAll(".num");
let interval = 10000;

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      observer.unobserve(entry.target);
    }
  });
});

valueDisplays.forEach((valueDisplay) => {
  observer.observe(valueDisplay);
});

function animateCounter(valueDisplay) {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
}







/////////////////////


$(document).ready(function() {
  $('.blocks').each(function() {
    var $block = $(this);
    var $slackIcon = $block.find('.background-area > #slack-icon');
    $slackIcon.click(function() {
      $block.toggleClass('expanded');
    });
  });
});



/////////////scroll down


function smoothScroll(target) {
  const element = document.querySelector(target);
  window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth'
  });
}

const menuLinks = document.querySelectorAll('.contact-menu a');
menuLinks.forEach(link => {
  link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = link.getAttribute('href');
      smoothScroll(target);
  });
});
