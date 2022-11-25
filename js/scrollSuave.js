export default function scrollSuave() {
  const linksInternos = document.querySelectorAll('[data-links] a[href^="#"]');

  function handleScroll(e) {
    e.preventDefault();
    const link = e.target;
    const id = link.getAttribute('href');

    const sectionTop = document.querySelector(id).offsetTop;

    window.scroll({
      top: sectionTop + 12,
      behavior: 'smooth',
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', handleScroll);
  });
}
