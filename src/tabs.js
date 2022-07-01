const clearMain = () => {
  const main = document.querySelector('main');
  main.replaceChildren();
}

const removeSelected = () => {
  const navBtns = document.querySelectorAll('nav li');
  navBtns.forEach((btn) => btn.classList.remove('selected'));
}

export default removeSelected;
export { clearMain };
