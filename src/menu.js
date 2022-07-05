import shrimpWonton from './assets/shrimp-wonton.png';
import chickenRamen from './assets/chicken-ramen.jpg';
import tonkotsuRed from './assets/tonkotsu-red.png';

const menu = [
  { 
    title: 'Shrimp Wonton Ramen',
    description: 'Pork and shrimp broth: shrimp & chicken wonton, green onion and kikurage » served with thick noodles',
    imgSrc: shrimpWonton,
    imgAlt: 'Shrimp wonton ramen',
  }, 
  { 
    title: 'Chicken Ramen',
    description: 'Chicken broth: chicken chashu, spinach, green onion and fried onion » served with thin noodles',
    imgSrc: chickenRamen,
    imgAlt: 'Chicken ramen',
  },
  { 
    title: 'Premium Tonkotsu Red',
    description: 'Pork broth: pork chashu, kikurage, green onion, seasoned egg, nori dried seaweed, red hot chili oil and spicy bean sprouts » served with thick noodles',
    imgSrc: tonkotsuRed,
    imgAlt: 'Tonkotsu red',
  },
]

export default menu;