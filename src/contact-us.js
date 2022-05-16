import locationImg from './assets/location.png';

const contactUs = (() => {
  const build = () => {
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
    address.classList.add('address');

    let addressTitle = document.createElement('div');
    addressTitle.classList.add('address__title');
    addressTitle.textContent = 'Address';
    address.appendChild(addressTitle);

    let addressDescription = document.createElement('div');
    addressDescription.classList.add('address__description');
    addressDescription.textContent = 'Hollywood Boulevard 42, Los Angeles, USA'
    address.appendChild(addressDescription);

    rightSection.appendChild(address);

    let location = document.createElement('img');
    location.src = locationImg;
    rightSection.appendChild(location);

    main.appendChild(rightSection);

    document.title = 'Contact Us - Yumi';
  }

  return {build};
})();

export default contactUs;
