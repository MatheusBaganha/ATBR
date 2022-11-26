export default function toggleDuvidas() {
  const perguntas = document.querySelectorAll('[data-pergunta]');
  const classAbrir = 'abrir';

  function togglePergunta(pergunta) {
    pergunta.target.nextElementSibling.classList.toggle(classAbrir);
    pergunta.target.parentNode.classList.toggle(classAbrir);

    const aberto = pergunta.target.nextElementSibling.classList.contains(classAbrir);

    if (aberto) {
      pergunta.target.setAttribute('aria-label', 'Fechar Pergunta');
      pergunta.target.setAttribute('aria-expanded', aberto);
    } else {
      pergunta.target.setAttribute('aria-label', 'Abrir Pergunta');
      pergunta.target.setAttribute('aria-expanded', aberto);
    }
  }

  perguntas.forEach((pergunta) => {
    pergunta.addEventListener('pointerdown', togglePergunta);
  });
}
