import {
  queryMatches
} from "../utils/queryMatches.js";

export function about() {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".about",
      start: "top bottom",
      end: "bottom center",
      // markers: true,
      ease: "power2.easeOut",
      scrub: 1,
    },
  });

  if (queryMatches(1441, 'min')) {
    tl.to('.about__img', {
      transform: "translate(-50%, -50%) rotate(0) scale(0.9)"

    })
    tl.to('.about__img', {
      transform: "translate(-50%, -50%) rotate(-45deg) scale(1)"
    })
  }
  if (queryMatches(1440, 'max')) {

    tl.to('.about__img', {
      transform: "translate(-50%, -50%) rotate(0) scale(0.9)"

    })
    tl.to('.about__img', {
      transform: "translate(-50%, -50%) rotate(-45deg) scale(1)"
    })
  }
  gsap.timeline({
    scrollTrigger: {
      trigger: '.about__item',
      start: "bottom-=100px bottom",
      end: "bottom bottom",
      scrub: 1,
    },
  }).from('.about__item', {
    y: 100,
    autoAlpha: 0,
    stagger: 0.2,
  })

  gsap.timeline({
    scrollTrigger: {
      trigger: ".about__title",
      start: "top bottom",
      end: "bottom bottom",
      scrub: 1,
      onEnter: () => {
        document.querySelector('.about').classList.add('about--active')
      },
      onLeaveBack: () => {
        document.querySelector('.about').classList.remove('about--active')
      },
    },
  })
}