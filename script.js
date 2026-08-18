const button = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');

button.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  button.setAttribute('aria-expanded', String(open));
  button.textContent = open ? 'Close' : 'Menu';
});

document.querySelectorAll('.nav a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('is-open');
  button.setAttribute('aria-expanded', 'false');
  button.textContent = 'Menu';
}));
