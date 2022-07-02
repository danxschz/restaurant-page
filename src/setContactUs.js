import generateElement from 'generate-element';
import locationImg from './assets/location.png';

const setContactUs = () => {
  const main = document.querySelector('main');
  main.setAttribute('class', 'contact');

  const leftSection = generateElement('div', 'contact__left-section');

  const japPhrase = generateElement('div', 'jap-phrase', 'コンタクト');
  leftSection.appendChild(japPhrase);

  const wavyLine = generateElement('div', 'wavy-line', '∿∿∿∿∿∿∿');
  leftSection.appendChild(wavyLine);

  const title = generateElement('div', 'contact__title');
  const line1 = generateElement('div', false, 'Contact');
  title.appendChild(line1);

  const line2 = generateElement('div', false, 'Information');
  title.appendChild(line2);

  leftSection.appendChild(title);
  main.appendChild(leftSection);

  const rightSection = generateElement('div', 'contact__right-section');

  const phones = generateElement('div', 'phones');
  phones.classList.add('phones');

  const phonesTitle = generateElement('div', 'phones__title', 'Phone Numbers');
  phones.appendChild(phonesTitle);

  for (let i = 1; i < 3; i++) {
    const phoneNumber = generateElement('div', 'phones__number', `(123) 4${i}6 ${i*2}8${i+3}${i}`);
    phones.appendChild(phoneNumber);
  }
  
  rightSection.appendChild(phones);

  const address = generateElement('div', 'address');

  const addressTitle = generateElement('div', 'address__title', 'Address')
  address.appendChild(addressTitle);

  const addressDescription = generateElement('div', 'address__description', 'Hollywood Boulevard 42, Los Angeles, USA');
  address.appendChild(addressDescription);

  rightSection.appendChild(address);

  const location = generateElement('img', false, false, { src: locationImg });
  rightSection.appendChild(location);

  main.appendChild(rightSection);
  document.title = 'Contact Us - Yumi';
}

export default setContactUs;
