import {
    queryMatches
} from "../utils/queryMatches.js"

export function footer() {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".footer",
            start: "top 5%",
            end: "bottom bottom",
            onEnter: () => {
                document.querySelector('.footer').classList.add('footer-active')
            },
        }
    })
    if (queryMatches(992, 'max')) {
        tl.to('.footer__left', {
            height: "auto",
            yPercent: 50,
            duration: 0.5,
        })
        tl.to('.footer__left', {
            top: "0%",
            yPercent: 0,
            delay: 0.9,
            duration: 0.6,
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: ".developer",
                start: "bottom bottom",
                end: "bottom bottom",
                onEnter: () => {
                    document.body.classList.add('hide-ax-logo')
                },
                onLeaveBack: () => {
                    document.body.classList.remove('hide-ax-logo')
                },
            }
        })

    }
}