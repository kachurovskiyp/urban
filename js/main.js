'use strict'
function init () {
    const headerELement = document.querySelector('.header');

    if(headerELement) {
        window.addEventListener('scroll', function () {
            if(window.scrollY > 61) {
                headerELement.classList.add('header--fixed');
            } else {
                headerELement.classList.remove('header--fixed');
            }
        });
    }

    // menu init 

    const menuBtn = document.querySelector('.header__menu-btn');
    const menu = document.querySelector('.navigation');

    menuBtn.addEventListener('click', (evt) => {
        evt.preventDefault();
        menu.classList.toggle('navigation--opened');
        menuBtn.classList.toggle('header__menu-btn--opened');
    });

    // popup init 

    const popupButtons = document.querySelectorAll('.offer__button');
    const popups = document.querySelectorAll('.popup');
    const popupCloseBtn = document.querySelector('.close-popup');

    const popupChildren = document.querySelector('.popup--children');
    const popupAesthetic = document.querySelector('.popup--aesthetic');
    const popupProsthetics = document.querySelector('.popup--prosthetics');
    const popupPrevention = document.querySelector('.popup--prevention');
    const popupEndodontics = document.querySelector('.popup--endodontics');
    const popupSurgery = document.querySelector('.popup--surgery');
    const popupOrthodontics = document.querySelector('.popup--orthodontics');

    popupCloseBtn.addEventListener('click', (evt) => {
        popups.forEach((popup) => {
            if(popup.classList.contains('popup--opened')) {
                popup.classList.remove('popup--opened');
            }
        });
        popupCloseBtn.classList.remove('close-popup--opened');
    });

    popupButtons.forEach((btn) => {
        btn.addEventListener('click', (evt) => {
            evt.preventDefault();
            let target = evt.target.id;

            switch(target) {
                case 'children':
                    popupChildren.classList.add('popup--opened');
                    break;

                case 'aesthetic':
                    popupAesthetic.classList.add('popup--opened');
                    break;

                case 'prosthetics':
                    popupProsthetics.classList.add('popup--opened');
                    break;

                case 'prevention':
                    popupPrevention.classList.add('popup--opened');
                    break;

                case 'endodontics':
                    popupEndodontics.classList.add('popup--opened');
                    break;

                case 'surgery':
                    popupSurgery.classList.add('popup--opened');
                    break;

                case 'orthodontics':
                    popupOrthodontics.classList.add('popup--opened');
                    break;
            }
            popupCloseBtn.classList.add('close-popup--opened');
        });
    });
};

init();