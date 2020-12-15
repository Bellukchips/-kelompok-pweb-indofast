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