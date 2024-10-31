import { queryMatches } from "../utils/queryMatches.js";

export function location() {
  let container = document.querySelector(".location__map");
  let mapMarkers = document.querySelectorAll(".location__map-markers img");
  let lastMarker = mapMarkers[mapMarkers.length - 1];
  let markersPosition = lastMarker.getBoundingClientRect();
  let containerCenter = container.offsetWidth / 2;
  let scrollLeftValue = markersPosition.left - containerCenter + markersPosition.width / 2;
  gsap.to(container, {
    duration: 0,
    scrollTo: {
      x: scrollLeftValue,
    },
  });

  let mtl = gsap.timeline({
    scrollTrigger: {
      trigger: ".location",
      start: "10% bottom",
      end: "bottom bottom",
    },
  });
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".location__wrapper",
      start: "bottom bottom",
      end: "bottom top",
      scrub: 1,
    },
  });
  if (queryMatches(769, "min")) {
    gsap.timeline({
      scrollTrigger: {
        trigger: ".location__top",
        start: "bottom bottom",
        end: "bottom bottom",
        onEnter: () => {
          document.querySelector(".location").classList.add("location--active");
        },
        onLeaveBack: () => {
          document.querySelector(".location").classList.remove("location--active");
        },
      },
    });
    mtl.to(".location__map", {
      clipPath: "circle(43% at 50% 100%)",
      duration: 0.6,
      ease: "power1.out",
    });
    tl.to(".location__map", {
      onUpdate: () => {
        if (tl.progress() >= 0.3) {
          document.querySelector(".location").classList.remove("location--active");
        }
        if (tl.progress() <= 0.3) {
          document.querySelector(".location").classList.add("location--active");
        }
      },
      clipPath: "circle(100% at 50% 100%)",
    });
  }
  if (queryMatches(768, "max")) {
    mtl.to(".location__map", {
      clipPath: "circle(100% at 50% 100%)",
      duration: 0.7,
      ease: "power1.out",
    });
    gsap.timeline({
      scrollTrigger: {
        trigger: ".location",
        start: "top+=150px bottom",
        end: "bottom bottom",
        onEnter: () => {
          document.querySelector(".location__title").classList.add("location__title-active");
          document.querySelector(".location__line").classList.add("location__line-active");
        },
        onLeaveBack: () => {
          document.querySelector(".location__title").classList.remove("location__title-active");
          document.querySelector(".location__line").classList.remove("location__line-active");
        },
      },
    });
    gsap.timeline({
      scrollTrigger: {
        trigger: ".location__title",
        start: "bottom bottom",
        end: "bottom bottom",
        onEnter: () => {
          document.querySelector(".location__title").classList.add("location__title-active");
        },
        onLeaveBack: () => {
          document.querySelector(".location__title").classList.remove("location__title-active");
        },
      },
    });
  }
}
