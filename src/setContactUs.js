import './styles/contact.scss';
import locationImg from './assets/location.png';
import generateElement from 'generate-element';

const setContactUs = () => {
  const main = document.querySelector('main');
  main.setAttribute('class', 'contact');

  const heading = generateElement('div', 'contact__heading');

  const japPhrase = generateElement('div', 'jap-phrase', 'コンタクト');
  heading.appendChild(japPhrase);

  const wavyLine = generateElement('div', 'wavy-line', '∿∿∿∿∿∿∿');
  heading.appendChild(wavyLine);

  const title = generateElement('h1');
  const line1 = generateElement('span', false, 'Contact');
  title.appendChild(line1);
  const line2 = generateElement('span', false, 'Information');
  title.appendChild(line2);

  heading.appendChild(title);
  main.appendChild(heading);

  const info = generateElement('div', 'contact__info');

  const phoneNumbers = generateElement('div');
  const phoneNumbersTitle = generateElement('h2', false, 'Phone Numbers');
  phoneNumbers.appendChild(phoneNumbersTitle);

  for (let i = 1; i < 3; i++) {
    const phoneNumber = generateElement('div', false, `(123) 4${i}6 ${i*2}8${i+3}${i}`);
    phoneNumbers.appendChild(phoneNumber);
  }
  info.appendChild(phoneNumbers);

  const address = generateElement('div');
  const addressTitle = generateElement('h2', false, 'Address');
  address.appendChild(addressTitle);
  const addressDescription = generateElement('div', false, 'Hollywood Boulevard 42, Los Angeles, USA');
  address.appendChild(addressDescription);
  info.appendChild(address);

  const location = generateElement('img', false, false, { src: locationImg, alt: "Yumi's Location", width: 700, height: 500 });
  info.appendChild(location);

  main.appendChild(info);
  document.title = 'Contact Us - Yumi';
}

export default setContactUs;
