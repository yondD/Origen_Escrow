let menuButton = document.querySelector('.menu-button');
let menu = document.querySelector('.header');

menuButton.addEventListener('click', function() {
    menuButton.classList.toggle('menu-button-active');
    menu.classList.toggle('header-active');
})

let scrollDonw = document.querySelector(".btnArrowDown")

function scroll() {
    window.scrollTo(0, 850);
}
scrollDonw.addEventListener('click', scroll)