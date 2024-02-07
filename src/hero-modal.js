(() => {
  const refs = {
    openModalBtn: document.querySelector('[hero-data-modal-open]'),
    closeModalBtn: document.querySelector('[hero-data-modal-close]'),
    modal: document.querySelector('[hero-data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
