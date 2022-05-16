import './normalize.css';
import './style.scss';
import html from './index.html';
import home from './home.js';
import menu from './menu.js';
import contactUs from './contact-us.js';

const tabs = (() => {
  const clearMain = () => {
    let main = document.querySelector('main');
    let mainNew = main.cloneNode(false);
    main.parentNode.replaceChild(mainNew, main);
  }

  const removeSelected = () => {
    let navButtons = document.querySelectorAll('nav li')
    navButtons.forEach(button => {
    button.classList.remove('selected');
    });
  }

  return {clearMain, removeSelected}
})();

let homeButton = document.querySelector('.home-button')
homeButton.addEventListener('click', ()=> {
  tabs.removeSelected();
  home.build();
  homeButton.classList.add('selected');
})

let menuButton = document.querySelector('.menu-button')
menuButton.addEventListener('click', ()=> {
  tabs.clearMain();
  tabs.removeSelected();
  menu.build();
  menuButton.classList.add('selected');
})

let contactButton = document.querySelector('.contact-button');
contactButton.addEventListener('click', ()=> {
  tabs.clearMain();
  tabs.removeSelected();
  contactUs.build();
  contactButton.classList.add('selected');
})
