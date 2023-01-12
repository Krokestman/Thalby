(() => {
   const refs = {
      modalButtonOpen: document.getElementById("modal-button-open"),
      modalButtonClose: document.getElementById("modal-button-close"),
   };

   refs.modalButtonOpen.addEventListener("click", toggleModal);
   refs.modalButtonClose.addEventListener("click", toggleModal);

   function toggleModal() {
      refs.modalButtonOpen.classList.toggle("is-hidden");
      refs.modalButtonClose.classList.toggle("is-hidden");
   }
})();