import './styles/home.scss';

const cloneHome = () => {
  const main = document.querySelector('main');
  return main.cloneNode(true);
}

const setHome = (homeElement) => {
  const main = document.querySelector('main');
  const homeClone = homeElement.cloneNode(true);
  main.parentNode.replaceChild(homeClone, main);
  document.title = 'Yumi';
}

export default setHome;
export { cloneHome };
