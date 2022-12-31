let counter = 1;
let imgNumber = 6;
let favicons = document.querySelectorAll('link');

function animateFavicon() {
   favicons.forEach(item => {
      if (item.getAttribute('rel').indexOf('icon') >= 0) {
         item.setAttribute('href', 'images/Favicon/64/' + counter + '.png');
      }
   });
   counter++;
   if (counter == 6) { counter = 1; }
}

setInterval(animateFavicon, 1000);