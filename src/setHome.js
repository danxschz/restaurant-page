const cloneHome = () => {
  const mainHome = document.querySelector('main');
  return mainHome.cloneNode(true);
}

const setHome = (mainHome) => {
  const main = document.querySelector('main');
  main.parentNode.replaceChild(mainHome, main);
  document.title = 'Yumi';
}

export default setHome;
export { cloneHome };
