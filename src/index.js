import './normalize.css';
import './style.scss';

// Keep html import to avoid imgs disappearing on webpack --watch
import html from './index.html';
import setTabStyle, { clearMain } from './setTabStyle';
import setHome, { cloneHome } from './setHome';
import setMenu from './setMenu';
import setContactUs from './setContactUs';

const homeElement = cloneHome();
const homeBtn = document.querySelector('.nav__home')
homeBtn.addEventListener('click', (e) => {
  setTabStyle(e);
  setHome(homeElement);
})

const menuBtn = document.querySelector('.nav__menu')
menuBtn.addEventListener('click', (e) => {
  clearMain();
  setTabStyle(e);
  setMenu();
})

const contactBtn = document.querySelector('.nav__contact');
contactBtn.addEventListener('click', (e) => {
  clearMain();
  setTabStyle(e);
  setContactUs();
})
