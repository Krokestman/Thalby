const popupLinks = document.querySelectorAll('.popup-link');

const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 400;

if (popupLinks.length > 0) {
   for (let index = 0; index < popupLinks.length; index++) {
      const popupLink = popupLinks[index];
      popupLink.addEventListener("click", function (e) {
         const popupName = popupLink.getAttribute('href').replace('#', '');
         const curentPopup = document.getElementById(popupName);
         popupOpen(curentPopup);
         e.preventDefault();
      });
   }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
   for (let index = 0; index < popupCloseIcon.length; index++) {
      const el = popupCloseIcon[index];
      el.addEventListener('click', function (e) {
         const popupN = el.getAttribute('href').replace('#', '');
         console.log(popupN);
         const curentP = document.getElementById(popupN);
         popupClose(curentP);
         e.preventDefault();
      });
   }
}

function popupOpen(curentPopup) {
   if (curentPopup && unlock) {
      const popupActive = document.querySelector('.popup.open');
      if (popupActive) {
         popupClose(popupActive, false);
      } else {
         bodyLock();
      }
      curentPopup.classList.add('open');
      toggleModal();
      // Закрити попап по кліку на батька
      curentPopup.addEventListener("click", function (e) {
         if (!e.target.closest('.popup__content')) {
            popupClose(e.target.closest('.popup__father-click-close'));
         }
      });
   }
}

function popupClose(popupActive, doUnlock = true) {
   if (unlock) {
      popupActive.classList.remove('open');
      toggleModal();
      if (doUnlock) {
         bodyUnLock();
      }
   }
}

function bodyLock() {
   const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

   if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
         const el = lockPadding[index];
         el.style.paddingRight = lockPaddingValue;
      }
   }
   body.style.paddingRight = lockPaddingValue;
   body.classList.add('lock');

   unlock = false;
   setTimeout(function () {
      unlock = true;
   }, timeout);
}

function bodyUnLock() {
   setTimeout(function () {
      if (lockPadding.length > 0) {
         for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = '0px';
         }
      }
      body.style.paddingRight = '0px';
      body.classList.remove('lock');
   }, timeout);

   unlock = false;
   setTimeout(function () {
      unlock = true;
   }, timeout);
}
// заміняє одну кнопку на іншу
const refs = {
   modalButtonOpen: document.getElementById("modal-button-open"),
   modalButtonClose: document.getElementById("modal-button-close"),
};

function toggleModal() {
   let ovpen = false;
   refs.modalButtonOpen.classList.toggle("is-hidden");
   // refs.modalButtonOpen.classList.toggle("absolute");
   setTimeout(function () {
      refs.modalButtonOpen.classList.toggle("absolute");
   }, timeout);

   refs.modalButtonClose.classList.toggle("is-hidden");
   setTimeout(function () {
      refs.modalButtonClose.classList.toggle("absolute");
   }, timeout);

}