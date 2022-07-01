import './normalize.css';
import './style.scss';

// Keep html import to avoid imgs disappearing on webpack --watch
import html from './index.html';
import setTabStyle, { clearMain } from './setTabStyle';
import setHome, { cloneHome } from './setHome';
import menu from './menu.js';
import contactUs from './contact-us.js';

const homeElement = cloneHome();
const homeBtn = document.querySelector('.home-button')
homeBtn.addEventListener('click', (e) => {
  setTabStyle(e);
  setHome(homeElement);
})

const menuBtn = document.querySelector('.menu-button')
menuBtn.addEventListener('click', (e) => {
  clearMain();
  setTabStyle(e);
  menu.build();
})

const contactBtn = document.querySelector('.contact-button');
contactBtn.addEventListener('click', (e) => {
  clearMain();
  setTabStyle(e);
  contactUs.build();
})
