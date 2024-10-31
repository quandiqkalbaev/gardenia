import {
    queryMatches
} from "../utils/queryMatches.js";

export function developer() {
    if (queryMatches(993, 'min')) {
        gsap.timeline({
            scrollTrigger: {
                trigger: ".developer",
                start: "top top",
                end: "bottom bottom",
                onEnter: () => {
                    document.querySelector('.developer').classList.add('developer--active')
                },
                onLeaveBack: () => {
                    document.querySelector('.developer').classList.remove('developer--active')
                },
            }
        })
    }
    if (queryMatches(992, 'max')) {
        gsap.timeline({
            scrollTrigger: {
                trigger: ".developer",
                start: "center bottom",
                end: "bottom bottom",
                onEnter: () => {
                    document.querySelector('.developer').classList.add('developer--active')
                },
                onLeaveBack: () => {
                    document.querySelector('.developer').classList.remove('developer--active')
                },
            }
        })
    }
}