export function menu() {
  const menu = document.querySelector(".header__menu");
  const links = document.querySelectorAll(".nav__link");
  const footerlinks = document.querySelectorAll(".footer__menu-item");
  const headerRight = document.querySelector(".header__right");

  let timeoutId;

  function closeMenu() {
    document.body.classList.remove("menu-active");
    document.body.classList.remove("no-scroll");
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    document.querySelector(".header__contacts").classList.remove("header__contacts--active");
    gsap.to(headerRight, {
      duration: 0.4,
      scrollTo: {
        y: 0,
      },
      ease: "power2",
    });
  }

  menu.addEventListener("click", (e) => {
    e.stopPropagation();
    document.body.classList.toggle("menu-active");
    document.body.classList.toggle("no-scroll");

    if (document.body.classList.contains("menu-active")) {
      timeoutId = setTimeout(() => {
        document.querySelector(".header__contacts").classList.add("header__contacts--active");
      }, 400);
    } else {
      closeMenu();
    }
  });

  document.addEventListener("click", (event) => {
    if (!headerRight.contains(event.target)) {
      closeMenu();
    }
  });

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      let target = link.getAttribute("href");
      document.querySelector(".header__contacts").classList.toggle("header__contacts--nohover");

      gsap.to(window, {
        duration: 0,
        scrollTo: {
          y: target,
          x: 0,
        },
        ease: "power2",
      });
      closeMenu();
    });
  });
  footerlinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      closeMenu();
      e.preventDefault();
      let target = link.getAttribute("href");
      gsap.to(window, {
        duration: 0.2,
        scrollTo: target,
        ease: "power2.inOut",
      });
    });
  });
  let topTarget = document.querySelector(".body-top");
  document.querySelector(".header__logo").addEventListener("click", (e) => {
    e.preventDefault();
    gsap.to(window, {
      duration: 0.2,
      scrollTo: topTarget,
      ease: "power2.inOut",
    });
  });
}
