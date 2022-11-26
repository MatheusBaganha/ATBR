export default function formContato() {
  const formSubmit = document.querySelector('[data-submit]');

  function handleSubmit(e) {
    e.preventDefault();

    const nome = document.querySelector('[data-inputValue="nome"]');
    const email = document.querySelector('[data-inputValue="email"]');
    const termos = document.querySelector('[data-inputValue="termos"]');

    if (termos.checked === false) {
      termos.classList.add('vibrar');
      setTimeout(() => {
        termos.classList.remove('vibrar');
      }, 1000);
    }

    if (email.value && termos.checked) {
      const btnSubmit = document.querySelector('[data-btnSubmit]');
      btnSubmit.value = 'ENVIANDO...';

      setTimeout(() => {
        btnSubmit.value = 'ENVIADO';
        btnSubmit.classList.add('enviado');

        nome.value = '';
        email.value = '';
        termos.checked = false;

        setTimeout(() => {
          btnSubmit.classList.remove('enviado');
          btnSubmit.value = 'ENVIAR';
        }, 6000);
      }, 3000);
    }
  }

  formSubmit.addEventListener('submit', handleSubmit);
}
