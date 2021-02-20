console.log("i'm working");

const hamburger = document.querySelector('.header .nav-bar .navbar .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .navbar ul');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if(scroll_position >250){
        header.style.backgroundColor = '#29323c';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});