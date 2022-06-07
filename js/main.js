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

    // popups init 

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
    const popupMedAesthetic = document.querySelector('.popup--MedAesthetic');

    const closePopupByClick = function (evt) {
        closePopups(evt);
    };

    const closePopups = function (evt) {
        evt.preventDefault();
        popups.forEach((popup) => {
            if(popup.classList.contains('popup--opened')) {
                popup.classList.remove('popup--opened');
            }
        });
        popupCloseBtn.classList.remove('close-popup--opened');
        popupCloseBtn.removeEventListener('click', closePopups);
    }

    const openPopup = function (popup) {
        switch(popup) {
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

            case 'MedAesthetic':
                popupMedAesthetic.classList.add('popup--opened');
                break;
        }
        popupCloseBtn.addEventListener('click', closePopups);
        popupCloseBtn.classList.add('close-popup--opened');
    }

    popupButtons.forEach((btn) => {
        btn.addEventListener('click', (evt) => {
            evt.preventDefault();
            let target;

            if(evt.target.tagName === 'BUTTON') {
                target = evt.target.id;
            } else {
                target = evt.target.closest('button').id;
            }

            openPopup(target);
        });
    });

    document.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup--opened'))
            closePopupByClick(evt);
    });

    // contact popup init 

    const popupContact = document.querySelector('.popup--contact');
    const contactBtns = document.querySelectorAll('.contacts__write-us');
    const contactLink = document.querySelector('.navigation__contact');

    function openContacts (evt) {
        evt.preventDefault();
        popupContact.classList.add('popup--opened');
        popupCloseBtn.classList.add('close-popup--opened');
    }
    

    if(popupContact) {
        contactBtns.forEach((btn) => {
            btn.addEventListener('click', (evt) => {
                openContacts(evt);
            });
        });
        
        contactLink.addEventListener('click', (evt) => {
            openContacts(evt);
        });
    }
    
};

init();