import {
    queryMatches
} from "../utils/queryMatches.js";

export function payment() {
    gsap.timeline({
        scrollTrigger: {
            trigger: '.payment',
            start: 'top center+=20%',
            end: 'bottom bottom',
            onEnter: () => {
                document.querySelector('.payment').classList.add('payment--active')
            },
            onLeaveBack: () => {
                document.querySelector('.payment').classList.remove('payment--active')
            }
        }
    })
    let percentLblock = document.querySelector('.payment__percent-left');
    let percentLeft = document.querySelector('.payment__percent-left').getAttribute('data-percentLeft');
    let percentRblock = document.querySelector('.payment__percent-right')
    let percentRight = document.querySelector('.payment__percent-right').getAttribute('data-percentRight');
    let animationPlayed = false;

    function counter(elem, num) {
        let startValue = 0
        let interval = 2000;
        let duration = Math.floor(interval / percentRight);
        let counter = setInterval(function () {
            startValue += 1;
            elem.textContent = `${startValue}%`;
            if (startValue == num) {
                clearInterval(counter);
            }
        }, duration);
    }
    gsap.timeline({
        scrollTrigger: {
            trigger: '.payment',
            start: 'center-=30% bottom',
            end: 'top bottom',
            // markers:true,
            onEnter: () => {
                document.querySelector('.payment__left').classList.add('payment__left--active')
                document.querySelector('.payment__circle-white').classList.add('payment__circle--active')

                if (!animationPlayed) {
                    counter(percentLblock, percentLeft)
                }
            },
            onLeaveBack: () => {
                document.querySelector('.payment__left').classList.remove('payment__left--active')
                document.querySelector('.payment__circle-white').classList.remove('payment__circle--active')
            },

        }
    })
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.payment',
            start: 'center-=25% bottom',
            end: 'center top',
            // markers: true,
            scrub: 1,
        }
    })


    if (queryMatches(769, 'min')) {
        tl.to('.payment__right', {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            onUpdate: () => {
                if (tl.progress() >= 0.3) {
                    if (!animationPlayed) {
                        counter(percentRblock, percentRight);
                        animationPlayed = true;
                    }
                    document.querySelector('.payment__right').classList.add('payment__right--active');
                } else {
                    document.querySelector('.payment__right').classList.remove('payment__right--active');
                }
            }
        })
    }

    if (queryMatches(768, 'max')) {
        tl.fromTo('.payment__right', {
            clipPath: "inset(0% 0% 0% 100%)",

        }, {
            onUpdate: () => {
                if (tl.progress() >= 0.5) {
                    document.querySelector('.payment__right').classList.add('payment__right--active');
                    if (!animationPlayed) {
                        counter(percentRblock, percentRight);
                        animationPlayed = true;
                    }
                }
                if (tl.progress() <= 0.5) {
                    document.querySelector('.payment__right').classList.remove('payment__right--active');
                }
            },
            clipPath: "inset(0% 0% 0% 0%)",
        })

    }
}