(() => {
   const refs = {
      modalButtonOpen: document.getElementById("modal-button-open"),
      modalButtonClose: document.getElementById("modal-button-close"),
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
   };

   refs.modalButtonOpen.addEventListener("click", toggleModal);
   refs.modalButtonClose.addEventListener("click", toggleModal);

   function toggleModal() {
      refs.modalButtonOpen.classList.toggle("is-hidden");
      refs.modalButtonClose.classList.toggle("is-hidden");
   }
})();