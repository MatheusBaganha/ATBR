export default function menuMobile() {
  const menuBtn = document.querySelector('[data-menuBtn]');
  const classActive = 'active';

  function toggleMenu(event) {
    if (event.type === 'touchstart') {
      event.preventDefault();
    }
    const nav = document.querySelector('[data-nav]');
    nav.classList.toggle(classActive);

    const isActive = nav.classList.contains(classActive);
    event.currentTarget.setAttribute('aria-expanded', isActive);
    if (isActive) {
      event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
      event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
  }

  menuBtn.addEventListener('click', toggleMenu);
  menuBtn.addEventListener('touchstart', toggleMenu);
}
