import generateElement from 'generate-element';
import menu from './menu';

const setImageModals = () => {
  const modal = document.querySelector('.modal');
  const modalImg = document.querySelector('.modal__img');
  const images = document.querySelectorAll('.dish img');

  images.forEach((img) => {
    img.addEventListener('click', () => {
      modal.style.display = 'block';
      modalImg.src = img.src;
      modalImg.alt =img.alt;
    });
  });

  const closeBtn = document.querySelector('.close-btn');
  closeBtn.addEventListener('click', () => modal.style.display = 'none'); 
}

const setMenu = () => {
  const main = document.querySelector('main');
  main.setAttribute('class', 'menu');

  menu.forEach((dish) => {
    const { title, description, imgSrc, imgAlt } = dish;

    const dishContainer = generateElement('div', 'dish');
    const dishImage = generateElement('img', false, false, { src: imgSrc, alt: imgAlt });
    dishContainer.appendChild(dishImage);
    
    const dishTitle = generateElement('div', 'dish__title', title);
    dishContainer.appendChild(dishTitle);
  
    const dishDescription = generateElement('div', 'dish__description', description);
    dishContainer.appendChild(dishDescription);

    main.appendChild(dishContainer);
  });

  const modal = generateElement('div', 'modal');
  const closeBtn = generateElement('div', 'close-btn', '×');
  modal.appendChild(closeBtn);
  const modalImg = generateElement('img', 'modal__img');
  modal.appendChild(modalImg);

  main.appendChild(modal);
  setImageModals();
  document.title = 'Menu - Yumi';
}

export default setMenu;