export function floorplan() {
    gsap.timeline({
        scrollTrigger: {
            trigger: ".floorplan__top",
            start: "bottom+=100px bottom",
            end: "bottom bottom",
            onEnter: () => {
                document.querySelector('.floorplan').classList.add('floorplan__top--active')
            },
            onLeaveBack: () => {
                document.querySelector('.floorplan').classList.remove('floorplan__top--active')
            }

        }
    })
    gsap.timeline({
        scrollTrigger: {
            trigger: ".floorplan__text",
            start: "bottom+=100px bottom",
            end: "bottom bottom",
            onEnter: () => {
                document.querySelector('.floorplan').classList.add('floorplan__center--active')
            },
            onLeaveBack: () => {
                document.querySelector('.floorplan').classList.remove('floorplan__center--active')
            }

        }
    })
}