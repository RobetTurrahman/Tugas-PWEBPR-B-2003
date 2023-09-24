var titleElement = document.querySelector('title');
titleElement.textContent = 'Tugas-PWEBPR-B-2003';

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    window.addEventListener("scroll", function () {
        header.classList.toggle("sticky", window.scrollY > 0);
    });
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let isMenuOpen = false;

menu.onclick = () => {
    if (isMenuOpen) {
        menu.classList.remove('bx-x');
        navbar.classList.remove('open');
    } else {
        menu.classList.add('bx-x');
        navbar.classList.add('open');
    }

    isMenuOpen = !isMenuOpen;
}

