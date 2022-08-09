import './styles/normalize.css';
import './styles/index.scss';
// Keep html import to avoid imgs disappearing on webpack --watch
import html from './index.html';
import setTabStyle, { clearMain } from './setTabStyle';
import setHome, { cloneHome } from './setHome';
import setMenu from './setMenu';
import setContactUs from './setContactUs';

// Home
const homeElement = cloneHome();
const handleHome = (e) => {
  setTabStyle(e);
  setHome(homeElement);
}

const homeBtns = document.querySelectorAll('.nav__home')
homeBtns.forEach((btn) => {
  btn.addEventListener('click', handleHome);
  btn.addEventListener('keypress', (e) => {
    if (e.key === ' ' || e.key === 'Enter') handleHome(e);
  });
});

// Menu
const handleMenu = (e) => {
  clearMain();
  setTabStyle(e);
  setMenu();
}

const menuBtns = document.querySelectorAll('.nav__menu');
menuBtns.forEach((btn) => {
  btn.addEventListener('click', handleMenu);
  btn.addEventListener('keypress', (e) => {
    if (e.key === ' ' || e.key === 'Enter') handleMenu(e);
  });
});

// Contact Us
const handleContactUs = (e) => {
  clearMain();
  setTabStyle(e);
  setContactUs();
}

const contactBtns = document.querySelectorAll('.nav__contact');
contactBtns.forEach((btn) => {
  btn.addEventListener('click', handleContactUs);
  btn.addEventListener('keypress', (e) => {
    if (e.key === ' ' || e.key === 'Enter') handleContactUs(e);
  });
});

// Mobile nav
const openNav = () => {
  document.querySelector('.mobile-nav').style.width = '75%';
  document.querySelector('.overlay').style.height = 'auto';
  document.querySelector('.overlay').style.opacity = 0.7;
}

const closeNav = () => {
  document.querySelector('.mobile-nav').style.width = 0;
  document.querySelector('.overlay').style.opacity = 0;
  setTimeout(() => {
    document.querySelector('.overlay').style.height = 0;
  }, 500);
}

const resetNavOnRotate = () => {
  document.querySelector('.mobile-nav').removeAttribute('style');
  document.querySelector('.overlay').removeAttribute('style');
}

const navBtn = document.querySelector('header button');
navBtn.addEventListener('click', openNav);

const overlay = document.querySelector('.overlay');
overlay.addEventListener('click', closeNav);

screen.orientation.addEventListener('change', resetNavOnRotate);
