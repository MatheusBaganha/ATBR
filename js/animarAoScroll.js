export default function animarAoScroll() {
  const textsToBeAnimated = document.querySelectorAll('[data-animar] p, [data-animar] .containerPergunta');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('show', entry.isIntersecting)
      if  (entry.isIntersecting) {
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 1,
  })

  textsToBeAnimated.forEach((text) => {
    observer.observe(text);
  })
}