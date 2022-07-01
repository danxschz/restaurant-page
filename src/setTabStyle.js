const clearMain = () => {
  const main = document.querySelector('main');
  main.replaceChildren();
}

const setTabStyle = (e) => {
  const navBtns = document.querySelectorAll('nav li');
  navBtns.forEach((btn) => btn.classList.remove('selected'));
  e.target.classList.add('selected');
}

export default setTabStyle;
export { clearMain };
