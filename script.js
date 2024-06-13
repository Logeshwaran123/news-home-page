'use strict';

// Elements
const hamMenu = document.querySelector('.ico-menu');
const clsMenu = document.querySelector('.ico-close');
const navPanel = document.querySelector('.nav-panel');
const backCont = document.querySelector('.back-container');

// On active
const toggleNav = function (item) {
  if (item) {
    backCont.style.opacity = 1;
    navPanel.style.right = 0;
    hamMenu.classList.remove('active');
    clsMenu.classList.add('active');
  } else {
    navPanel.style.right = '-100%';
    backCont.style.opacity = 0;
    hamMenu.classList.add('active');
    clsMenu.classList.remove('active');
  }
};

hamMenu.addEventListener('click', () => toggleNav(true));
clsMenu.addEventListener('click', () => toggleNav(false));
