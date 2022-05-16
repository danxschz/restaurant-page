import shrimpWonton from './assets/shrimp-wonton.png';
import chickenRamen from './assets/chicken-ramen.jpg';
import tonkotsuRed from './assets/tonkotsu-red.png';

const menu = (() => {
  const build = () => {
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
      dishImage.src = dish.imgsrc;
      dishImage.alt = dish.imgalt;
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

    let closeButton = document.createElement('div');
    closeButton.classList.add('close-button');
    closeButton.textContent = '×';
    modal.appendChild(closeButton);

    let modalContent = document.createElement('img');
    modalContent.classList.add('modal__content');
    modal.appendChild(modalContent);

    main.appendChild(modal);

    setImageModals();
    document.title = 'Menu - Yumi';
  }

  const setImageModals = () => {
    let modal = document.querySelector('.modal');
    let modalContent = document.querySelector('.modal__content');
    let images = document.querySelectorAll('.dish img');
    images.forEach(image => {
      image.addEventListener('click', () => {
        modal.style.display = 'block';
        modalContent.src = image.src;
        modalContent.alt =image.alt;
      });
    });

    let closeButton = document.querySelector('.close-button');
    closeButton.onclick = () => modal.style.display = "none";
  }

  return {build};
})();

export default menu;