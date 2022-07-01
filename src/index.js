import './normalize.css';
import './style.scss';

// Keep html import to avoid imgs disappearing on webpack --watch
import html from './index.html';
import removeSelected, { clearMain, switchHome } from './tabs';
import setHome, { cloneHome } from './setHome';
import menu from './menu.js';
import contactUs from './contact-us.js';

const homeElement = cloneHome();
const homeBtn = document.querySelector('.home-button')
homeBtn.addEventListener('click', (e) => {
  removeSelected();
  e.target.classList.add('selected');
  setHome(homeElement);
})

let menuButton = document.querySelector('.menu-button')
menuButton.addEventListener('click', ()=> {
  clearMain();
  removeSelected();
  menu.build();
  menuButton.classList.add('selected');
})

let contactButton = document.querySelector('.contact-button');
contactButton.addEventListener('click', ()=> {
  clearMain();
  removeSelected();
  contactUs.build();
  contactButton.classList.add('selected');
})
