import {
    queryMatches
} from "../utils/queryMatches.js";

export function brochure() {
    let moveBro = gsap.timeline({
        scrollTrigger: ({
            trigger: '.brochure',
            start: "top bottom",
            end: "top+=50% bottom",
            scrub: true,
        })
    })

    if (queryMatches(993, 'min')) {
        gsap.timeline({
            scrollTrigger: {
                trigger: ".brochure",
                start: "center-=20% center",
                end: "bottom bottom",
                onEnter: () => {
                    moveBro.kill()
                    document.querySelector('.brochure').classList.add('brochure--active')
                }
            }
        })
        moveBro.from('.brochure__inner', {
            yPercent: 25,
        })
    }
    if (queryMatches(992, 'max')) {
        let scaleTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".brochure",
                start: "33.333% 50%",
                end: "33.333% top",
                scrub: true,
                once: true
            }
        }).to('.brochure__inner', {
            scale: 1
        });

        let opacityTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".brochure",
                start: "33.333% 50%",
                end: "33.333% top",
                scrub: true,
            }
        }).to('.brochure__inner', {
            opacity: 1,
            onComplete: () => {
                document.querySelector('.brochure').classList.add('brochure--active')
            }
        });

    }

}