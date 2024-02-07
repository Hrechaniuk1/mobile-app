(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-mob-menu-open]'),
    closeModalBtn: document.querySelector('[data-mob-menu-close]'),
    modal: document.querySelector('[data-mob-menu]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden-mob');
  }
})();


  const form = document.querySelector(".foot-form")
  form.addEventListener("submit", getInfo)
  function getInfo(event) {
    event.preventDefault()
    let formInfo = {
      [form.elements.userName.name]: form.elements.userName.value,
      [form.elements.userMail.name]: form.elements.userMail.value,
      [form.elements.userMassage.name]: form.elements.userMassage.value,
    }
       form.reset()
    console.log(formInfo)
}
