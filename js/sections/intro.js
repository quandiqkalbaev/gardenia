import { queryMatches } from "../utils/queryMatches.js";

export function intro() {
    if (queryMatches(768, 'max')) {
        let pinned = gsap.timeline({
            scrollTrigger: {
                trigger: ".intro",
                start: "top+=64px top+=64px",
                end: "+=150%",
                scrub: true,
                // markers:true,
                pin: '.intro',
            }
        })
        pinned.to('.intro__form', {
            y: 0,
            onUpdate: () => {
                if (pinned.progress() >= 0.25) {
                    document.querySelector('.intro').classList.add('intro-text--active')
                }
                if (pinned.progress() <= 0.25) {
                    document.querySelector('.intro').classList.remove('intro-text--active')
                }
            }
        })
        pinned.to('.intro__img-shadow', {
            backgroundColor: "rgba(0, 0, 0, 0.8)"
        }, "<")
        pinned.to('.hidden-anim', {
            x: 200,
        })
    }
}