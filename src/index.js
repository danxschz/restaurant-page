import './normalize.css';
import './style.scss';
// Keep html import to avoid imgs disappearing on webpack --watch
import html from './index.html';
import setTabStyle, { clearMain } from './setTabStyle';
import setHome, { cloneHome } from './setHome';
import setMenu from './setMenu';
import setContactUs from './setContactUs';

// Home
const homeElement = cloneHome();
const homeBtn = document.querySelector('.nav__home')

const handleHome = (e) => {
  setTabStyle(e);
  setHome(homeElement);
}

homeBtn.addEventListener('click', handleHome);
homeBtn.addEventListener('keypress', (e) => {
  if (e.key === ' ' || e.key === 'Enter') handleHome(e);
});

// Menu
const handleMenu = (e) => {
  clearMain();
  setTabStyle(e);
  setMenu();
}

const menuBtn = document.querySelector('.nav__menu')
menuBtn.addEventListener('click', handleMenu);
menuBtn.addEventListener('keypress', (e) => {
  if (e.key === ' ' || e.key === 'Enter') handleMenu(e);
});

// Contact Us
const handleContactUs = (e) => {
  clearMain();
  setTabStyle(e);
  setContactUs();
}

const contactBtn = document.querySelector('.nav__contact');
contactBtn.addEventListener('click', handleContactUs);
contactBtn.addEventListener('keypress', (e) => {
  if (e.key === ' ' || e.key === 'Enter') handleContactUs(e);
});
