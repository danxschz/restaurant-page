import './normalize.css';
import './style.scss';
import html from "./index.html";
import menu from './menu.js';
import contactUs from './contact-us.js';

const clearMain = () => {
  let main = document.querySelector('main');
  let mainNew = main.cloneNode(false);
  main.parentNode.replaceChild(mainNew, main);
}

let main = document.querySelector('main');
let mainNew = main.cloneNode(true);
const buildHome = () => {
  main = document.querySelector('main');
  main.parentNode.replaceChild(mainNew, main);
}

const removeSelected = () => {
  let navButtons = document.querySelectorAll('nav li')
  navButtons.forEach(button => {
  button.classList.remove('selected');
  });
}

let menuButton = document.querySelector('.menu-button')
menuButton.addEventListener('click', ()=> {
  clearMain();
  menu.build();
  removeSelected();
  menuButton.classList.add('selected');
})

let homeButton = document.querySelector('.home-button')
homeButton.addEventListener('click', ()=> {
  buildHome();
  removeSelected();
  homeButton.classList.add('selected');
  document.title = 'Home - Yumi';
})

let contactButton = document.querySelector('.contact-button');
contactButton.addEventListener('click', ()=> {
  clearMain();
  contactUs.build();
  removeSelected();
  contactButton.classList.add('selected');
})
