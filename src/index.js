import './normalize.css';
import './style.scss';
import html from "./index.html";
import shrimpWonton from './shrimp-wonton.png';
import chickenRamen from './chicken-ramen.jpg';
import tonkotsuRed from './tonkotsu-red.png';

//document.title = "test"

const setImageModals = () => {
  let modal = document.querySelector('.modal');
  var modalContent = document.querySelector('.modal__content');
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
})


