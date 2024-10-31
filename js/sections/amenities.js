import {
    queryMatches
} from "../utils/queryMatches.js";

export function amenities() {
    if (queryMatches(768, 'max')) {
        let cards = document.querySelectorAll('.amenities__card');
        let cardLength = document.querySelector('.amenities__card').clientWidth;
        for (let i = 0; i < cards.length; i++) {
            gsap.timeline({
                    scrollTrigger: {
                        trigger: cards[i],
                        start: `top-=100px 50%`,
                        end: "center-=100px 50%",
                        scrub: true,
                        // markers: true,
                    }
                })
                .to(`.amenities__card:nth-child(${i+1}) .amenities__card-image`, {
                    scale: 0.2,
                    opacity: 0
                })
                .to(`.amenities__card:nth-child(${i+1}) .amenities__card-icon`, {
                    transform: "translateX(-50%)",
                    scale: 0.8,
                    opacity: 1,
                }, "<")
                .to(cards[i], {
                    opacity: 1,
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    onStart: () => {
                        cards[i].classList.add('card-complete')
                    },
                    onReverseComplete: () => {
                        cards[i].classList.remove('card-complete')
                    }
                }, "<")


        }
        gsap.timeline({
            scrollTrigger: {
                trigger: ".amenities",
                start: "10% 50%",
                end: "20% top+=65px",
                scrub: true,
            }
        }).to('.amenities__cards', {
            marginTop: 0,
        }, "<")
    }
    gsap.timeline({
        scrollTrigger: {
            trigger: ".amenities",
            start: "top+=10% bottom",
            end: "bottom top",
            onEnter: () => {
                document.querySelector('.amenities').classList.add('amenities--active')
            },
            onLeaveBack: () => {
                document.querySelector('.amenities').classList.remove('amenities--active')
            }
        }
    })

}