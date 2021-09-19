// heder index html

window.onscroll = function showHeader() {
    let header = document.querySelector('.header')

    if ((window.innerWidth || document.documentElement.clientWidth) > 540) {
        if (window.pageYOffset > 850) {
            header.classList.add('header_fixed')
        } else {
            header.classList.remove('header_fixed')
        }
    } else {
        header.classList.remove('header_fixed')

    }
}

let menuButton = document.querySelector('.menu-button');
let menu = document.querySelector('.header');

menuButton.addEventListener('click', function() {
    menuButton.classList.toggle('menu-button-active');
    menu.classList.toggle('header-active');
})




// menuButton.addEventListener('click', function() {
//     document.body.style.overflow = "scroll";
// })



// 
// let scrollDonw = document.querySelector(".btnArrowDown")
// let scrollDonwIndex = document.querySelector(".btnArrowDownIndex")

// function scroll() {
//     window.scrollTo(0, 650);
// }

// function scrollIndex() {
//     window.scrollTo(0, 1250);
// }

// scrollDonwIndex.addEventListener('click', scrollIndex)
// scrollDonw.addEventListener('click', scroll)

// var menuButton = document.querySelector('.menu-button');
// var menu = document.querySelector('.header');

// menuButton.addEventListener('click', function() {
//     menuButton.classList.toggle('menu-button-active');
//     menu.classList.toggle('header-active');
// })