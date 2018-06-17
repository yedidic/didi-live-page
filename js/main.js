'use strict';

function toggleMenu() {
    var menu = document.getElementById('main-menu');
    var elEverywhere = document.querySelector('.navbar-closer');
    console.log('main menu', menu);
    menu.classList.toggle('open');
    elEverywhere.classList.toggle('hide');
}
    
function openModal(id){
    console.log(id,'momo');
    var elModal = document.querySelector('.modal');
    console.log('elModal',elModal);
    elModal.classList.toggle('hide');
}

function closeModal(){
    var elModal = document.querySelector('.modal');
    console.log('elModal',elModal);
    elModal.classList.add('hide');
}

function newMailJoin()
{
    //TODO: Add Mail to list.
    closeModal();
}