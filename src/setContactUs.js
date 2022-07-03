import generateElement from 'generate-element';
import locationImg from './assets/location.png';

const setContactUs = () => {
  const main = document.querySelector('main');
  main.setAttribute('class', 'contact');

  const heading = generateElement('div', 'contact__heading');

  const japPhrase = generateElement('div', 'jap-phrase', 'コンタクト');
  heading.appendChild(japPhrase);

  const wavyLine = generateElement('div', 'wavy-line', '∿∿∿∿∿∿∿');
  heading.appendChild(wavyLine);

  const title = generateElement('div', 'contact__title');
  const line1 = generateElement('div', false, 'Contact');
  title.appendChild(line1);
  const line2 = generateElement('div', false, 'Information');
  title.appendChild(line2);

  heading.appendChild(title);
  main.appendChild(heading);

  const info = generateElement('div', 'contact__info');

  const phoneNumbers = generateElement('div', 'phones');
  phoneNumbers.classList.add('phones');
  const phoneNumbersTitle = generateElement('div', 'phones__title', 'Phone Numbers');
  phoneNumbers.appendChild(phoneNumbersTitle);

  for (let i = 1; i < 3; i++) {
    const phoneNumber = generateElement('div', 'phones__number', `(123) 4${i}6 ${i*2}8${i+3}${i}`);
    phoneNumbers.appendChild(phoneNumber);
  }
  info.appendChild(phoneNumbers);

  const address = generateElement('div', 'address');
  const addressTitle = generateElement('div', 'address__title', 'Address')
  address.appendChild(addressTitle);
  const addressDescription = generateElement('div', 'address__description', 'Hollywood Boulevard 42, Los Angeles, USA');
  address.appendChild(addressDescription);
  info.appendChild(address);

  const location = generateElement('img', false, false, { src: locationImg });
  info.appendChild(location);

  main.appendChild(info);
  document.title = 'Contact Us - Yumi';
}

export default setContactUs;
