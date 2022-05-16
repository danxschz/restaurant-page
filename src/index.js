import './normalize.css';
import './style.scss';
import html from "./index.html";
import shrimpWonton from './shrimp-wonton.png';
import chickenRamen from './chicken-ramen.jpg';
import tonkotsuRed from './tonkotsu-red.png';
import location from './location.png';


const setImageModals = () => {
  let modal = document.querySelector('.modal');
  let modalContent = document.querySelector('.modal__content');
  let imgs = document.querySelectorAll('main img');
  imgs.forEach(image => {
    image.addEventListener('click', () => {
      modal.style.display = 'block';
      modalContent.src = image.src;
      modalContent.alt =image.alt;
    });
  });

  let closeButton = document.querySelector('.close');
  closeButton.onclick = function() {
    modal.style.display = "none";
  }
}

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

const buildMenu = () => {
  let main = document.querySelector('main');
  main.removeAttribute('class');
  main.classList.add('menu');

  let dishes = [
    { 
      'imgsrc': shrimpWonton,
      'imgalt': 'shrimp wonton ramen',
      'title': 'Shrimp Wonton Ramen',
      'description': 'Pork and shrimp broth: shrimp & chicken wonton, green onion and kikurage » served with thick noodles',
    }, { 
      'imgsrc': chickenRamen,
      'imgalt': 'chicken ramen',
      'title': 'Chicken Ramen',
      'description': 'Chicken broth: chicken chashu, spinach, green onion and fried onion » served with thin noodles',
    }, { 
      'imgsrc': tonkotsuRed,
      'imgalt': 'tonkotsu red',
      'title': 'Premium Tonkotsu Red',
      'description': 'Pork broth: pork chashu, kikurage, green onion, seasoned egg, nori dried seaweed, red hot chili oil and spicy bean sprouts » served with thick noodles',
    },
  ]

  for (let dish of dishes) {
    let dishContainer = document.createElement('div');
    dishContainer.classList.add('dish');
  
    let dishImage = document.createElement('img');
    dishImage.alt = dish.imgalt;
    dishImage.src = dish.imgsrc;
    dishContainer.appendChild(dishImage);
  
    let dishTitle = document.createElement('div');
    dishTitle.classList.add('dish__title');
    dishTitle.textContent = dish.title;
    dishContainer.appendChild(dishTitle);
  
    let dishDescription = document.createElement('div');
    dishDescription.classList.add('dish__description');
    dishDescription.textContent = dish.description;
    dishContainer.appendChild(dishDescription);

    main.appendChild(dishContainer);
  }
  let modal = document.createElement('div');
  modal.classList.add('modal');

  let close = document.createElement('div');
  close.classList.add('close');
  close.textContent = '×';
  modal.appendChild(close);

  let modalContent = document.createElement('img');
  modalContent.classList.add('modal__content');
  modal.appendChild(modalContent);

  main.appendChild(modal);
  setImageModals();
  document.title = 'Menu - Yumi';
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
  buildMenu();
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

const buildContact = () => {
  let main = document.querySelector('main');
  main.removeAttribute('class');
  main.classList.add('contact');

  let leftSection = document.createElement('div');
  leftSection.classList.add('contact__left-section');

  let japPhrase = document.createElement('div');
  japPhrase.classList.add('jap-phrase');
  japPhrase.textContent = 'コンタクト';
  leftSection.appendChild(japPhrase);

  let wavyLine = document.createElement('div');
  wavyLine.classList.add('wavy-line');
  wavyLine.textContent = '∿∿∿∿∿∿∿';
  leftSection.appendChild(wavyLine);

  let title = document.createElement('div');
  title.classList.add('contact__title');
  
  let line = document.createElement('div');
  line.textContent = 'CONTACT';
  title.appendChild(line);

  line = document.createElement('div');
  line.textContent = 'INFORMATION';
  title.appendChild(line);

  leftSection.appendChild(title);
  main.appendChild(leftSection);


  let rightSection = document.createElement('div');
  rightSection.classList.add('contact__right-section');


  let phones = document.createElement('div');
  phones.classList.add('phones');

  let phonesTitle = document.createElement('div');
  phonesTitle.classList.add('phones__title');
  phonesTitle.textContent = 'Phone Numbers';
  phones.appendChild(phonesTitle);

  for (let i = 0; i < 2; i++) {
    let number = document.createElement('div');
    number.classList.add('phones__number');
    number.textContent = `(123) 4${i}6 ${i*2}8${i+3}${i}`;
    phones.appendChild(number);
  }
  rightSection.appendChild(phones);

  let address = document.createElement('div');

  let addressTitle = document.createElement('div');
  addressTitle.classList.add('address__title');
  addressTitle.textContent = 'Address';
  address.appendChild(addressTitle);


  let addressDescription = document.createElement('div');
  addressDescription.classList.add('address__description');
  addressDescription.textContent = 'Hollywood Boulevard 42, Los Angeles, USA'
  address.appendChild(addressDescription);
  rightSection.appendChild(address);

  let map = document.createElement('img');
  map.src = location;
  rightSection.appendChild(map);


  main.appendChild(rightSection);

  document.title = 'Contact Us - Yumi';
}

let contactButton = document.querySelector('.contact-button');
contactButton.addEventListener('click', ()=> {
  clearMain();
  buildContact();
  removeSelected();
  contactButton.classList.add('selected');
})

