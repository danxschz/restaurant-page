const home = (() => {
  let main = document.querySelector('main');
  let mainHome = main.cloneNode(true);

  const build = () => {
    main = document.querySelector('main');
    main.parentNode.replaceChild(mainHome, main);
    document.title = 'Home - Yumi';
  }

  return {build};
})();

export default home;