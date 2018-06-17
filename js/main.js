'use strict';

function toggleMenu() {
    var menu = document.getElementById('main-menu');
    var elEverywhere = document.querySelector('.navbar-closer');
    console.log('main menu', menu);
    menu.classList.toggle('open');
    elEverywhere.classList.toggle('hide');
}
    