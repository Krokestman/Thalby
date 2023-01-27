const popupLinks = document.querySelectorAll('.popup-open');

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

selecrorRefresh();
function selecrorRefresh() {
   let popupCloseIcon = document.querySelectorAll('.popup-close');

   for (let index = 0; index < popupCloseIcon.length; index++) {
      const el = popupCloseIcon[index];
      el.addEventListener('click', function (e) {
         const popupN = el.getAttribute('href').replace('#', '');
         const curentP = document.getElementById(popupN);
         popupClose(curentP);
         e.preventDefault();
      });
   }
}

function popupOpen(curentPopup) {
   if (curentPopup && unlock) {
      const popupActive = document.querySelector('.popup.open');
      const checkPopup = curentPopup.querySelector('.modal-search__container');
      const searchPopup = document.querySelector('.modal-search__container');
      if (popupActive) {
         popupClose(popupActive, false);
         if (checkPopup != searchPopup) { ChangeIcon(true); }
      } else {
         bodyLock();
      }
      curentPopup.classList.add('open');
      if (checkPopup == searchPopup) { ChangeIcon(true); }

      // Закрити попап по кліку на батька
      curentPopup.addEventListener("click", function (e) {
         if (!e.target.closest('.popup-content_close')) {
            popupClose(e.target.closest('.popup-father-click-close'));
         }
      });
   }
}

function popupClose(popupActive, doUnlock = true) {
   if (unlock) {
      popupActive.classList.remove('open');

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

let icon = document.querySelector('.fa-magnifying-glass');
let switcher = document.querySelector('.popup-open-search');
// switcher.addEventListener("click", function () { ChangeIcon(true) });


function ChangeIcon(animation = true) {
   icon.classList.toggle("fa-magnifying-glass");
   icon.classList.toggle("fa-x");
   switcher.classList.toggle("popup-open");
   switcher.classList.toggle("popup-close");

   if (animation == true) { document.getElementsByClassName('header-icons__icon_switcher')[0].style = "transition: all .4s ease 0s"; }
   if (animation == false) { document.getElementsByClassName('header-icons__icon_switcher')[0].style = "transition: all 0s ease 0s"; }
   icon.classList.toggle("animation");

   selecrorRefresh();
}
