import generateElement from 'generate-element';
import menu from './menu';

const setImageModals = () => {
  const modal = document.querySelector('.modal');
  modal.addEventListener('click', () => modal.style.display = 'none'); 
  const modalImg = document.querySelector('.modal__img');
  modalImg.addEventListener('click', (e) => e.stopPropagation());
  const images = document.querySelectorAll('.dish img');

  images.forEach((img) => {
    img.addEventListener('click', () => {
      modal.style.display = 'block';
      modalImg.src = img.src;
      modalImg.alt = img.alt;
    });
  });

  const closeBtn = document.querySelector('.modal__btn');
  closeBtn.addEventListener('click', () => modal.style.display = 'none'); 
}

const setMenu = () => {
  const main = document.querySelector('main');
  main.setAttribute('class', 'menu');

  menu.forEach((dish) => {
    const { title, description, img } = dish;

    const dishContainer = generateElement('div', 'dish');
    const dishImage = generateElement('img', false, false, { src: img, alt: title });
    dishContainer.appendChild(dishImage);
    
    const dishTitle = generateElement('h2', false, title);
    dishContainer.appendChild(dishTitle);
  
    const dishDescription = generateElement('p', false, description);
    dishContainer.appendChild(dishDescription);

    main.appendChild(dishContainer);
  });

  const modal = generateElement('div', 'modal');

  const closeBtn = generateElement('button', 'modal__btn');
  const closeIcon = generateElement('i', 'fa-solid fa-xmark');
  closeBtn.appendChild(closeIcon);
  modal.appendChild(closeBtn);

  const modalImg = generateElement('img', 'modal__img');
  modal.appendChild(modalImg);

  main.appendChild(modal);
  setImageModals();
  document.title = 'Menu - Yumi';
}

export default setMenu;
