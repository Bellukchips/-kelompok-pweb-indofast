// SHOW MENU
const showMenu = (toggleId,navId)=>{
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show');
        });
    }
}

showMenu('toggle','navmenu');

// remove menu responsive

const navLink = document.querySelectorAll('.nav-link');
function linkAction(){
    // Active Link
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    //remove menu responsive
    const navMenu = document.getElementById('navmenu');
    navmenu.classList.remove('show');
}
navLink.forEach(n=> n.addEventListener('click',linkAction));

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("container-home");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}