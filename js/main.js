gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


if (history.scrollRestoration == "auto") {
  history.scrollRestoration = "manual";
}
window.onload = function () {
  window.scrollTo(0, 0);
};

import {
  intro
} from "./sections/intro.js";
import {
  about
} from "./sections/about.js";
import {
  amenities
} from "./sections/amenities.js";
import {
  menu
} from "./utils/menu.js";
import {
  developer
} from "./sections/developer.js";
import {
  footer
} from "./sections/footer.js";
import {
  floorplan
} from "./sections/floorplan.js";
import {
  brochure
} from "./sections/brochure.js";
import {
  payment
} from "./sections/payment.js"
import {
  location
} from "./sections/location.js";
import {
  splittedLines
} from "./utils/splitlines.js";
import {
  forms
} from "./utils/forms.js";
import {
  popup
} from "./utils/popup.js";
import {
  hovers
} from "./utils/hover.js";



(async function loading() {
  const mediaElements = gsap.utils.toArray("[data-img]");
  const totalMedia = mediaElements.length;
  let loadedMedia = 0;

  const preloaderNum = document.querySelector('.preloader__number')
  const preloaderText = document.querySelector('.preloader__text')
  const preloader = document.querySelector('.preloader')
  const circle = document.querySelector('.progres__ring-circle');
  const radius = circle.getAttribute('r');
  const circumference = 2 * Math.PI * radius;
  circle.style.strokeDasharray = `${circumference} ${circumference}`
  circle.style.strokeDashoffset = circumference;

  function setProgress(percent) {
    const offset = circumference - percent / 100 * circumference
    circle.style.strokeDashoffset = offset;
  }


  setTimeout(() => {

    async function mediaLoaded(e) {

      loadedMedia++;
      const path = Math.floor((loadedMedia / totalMedia) * 100);
      setProgress(path)
      preloaderNum.textContent = path;
      preloader.style.stroke = '#fff'
      preloaderText.style.color = `rgb(255,255,255)`;
      preloaderNum.style.color = `rgb(255,255,255)`;


      if (loadedMedia === totalMedia) {
        gsap.to('.preloader__number', {
          y: -50,
          opacity: 0,
          duration: 0.8,
          delay: 0.2,
        })
        gsap.to('.preloader__text', {
          scale: 0.5,
          opacity: 0,
          duration: 0.8,
          delay: 0.2,
        })
        gsap.to(circle, {
          opacity: 0,
          delay: 0.2,
          duration: 0.8,
        })
        setTimeout(() => {
          preloader.classList.add('preloader-off')
          document.body.classList.add('loaded');

        }, 1000);

        intro();
        about();
        amenities();
        brochure();
        location();
        floorplan();
        payment();
        developer();
        footer();
        splittedLines();
        forms();
        menu()
        popup();
        hovers()

        const logoElement = document.querySelector('.gl-ax-wp-logo')
        if (logoElement) {
          logoElement.setAttribute('target', '_blank');
        }
      }
    }

    mediaElements.forEach((media) => {
      const dataSrc = media.getAttribute("data-img");
      if (dataSrc) {
        media.onerror = () => {
          console.log(`Ошибка загрузки для ${dataSrc}`);
          mediaLoaded();
        };
        media.setAttribute("src", dataSrc);
        media.onload = mediaLoaded;
      }
    });
  }, 800);

})();