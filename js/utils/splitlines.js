export function splittedLines() {
    let lines = document.querySelectorAll('[data-splitting="lines"]');

    let splitTextInstances = [];
    let innersplitTextInstances = [];

    for (let i = 0; i < lines.length - 1; i++) {
        if (i == lines.length - 2) {
            //for developer block
            lines[i].classList.add('splitting');
            splitTextInstances[i] = new SplitText(lines[i], {
                type: "lines",
                linesClass: "line-inner",
            });
            innersplitTextInstances = new SplitText(lines[i], {
                type: "lines",
                linesClass: "line-overflow",
            });
            gsap.timeline({
                scrollTrigger: {
                    trigger: '.developer',
                    start: "top top",
                    end: "bottom bottom",
                    onEnter: () => {
                        lines[i].classList.add('splitting--active');
                    },
                    onLeaveBack: () => {
                        lines[i].classList.remove('splitting--active');
                    }
                },

            });


            lines[i + 1].classList.add('splitting');
            splitTextInstances[i + 1] = new SplitText(lines[i + 1], {
                type: "lines",
                linesClass: "line-inner",
            });
            innersplitTextInstances = new SplitText(lines[i + 1], {
                type: "lines",
                linesClass: "line-overflow",
            });
            gsap.timeline({
                scrollTrigger: {
                    trigger: '.developer',
                    start: "top top",
                    end: "bottom bottom",
                    onEnter: () => {
                        lines[i + 1].classList.add('splitting--active');
                    },
                    onLeaveBack: () => {
                        lines[i + 1].classList.remove('splitting--active');
                    }
                },

            });
        } else {
            lines[i].classList.add('splitting');
            splitTextInstances[i] = new SplitText(lines[i], {
                type: "lines",
                linesClass: "line-inner",
            });
            innersplitTextInstances = new SplitText(lines[i], {
                type: "lines",
                linesClass: "line-overflow",
            });
            gsap.timeline({
                scrollTrigger: {
                    trigger: lines[i],
                    start: 'bottom+=100px bottom',
                    end: 'bottom bottom',
                    onEnter: () => {
                        lines[i].classList.add('splitting--active');
                    },
                    onLeaveBack: () => {
                        lines[i].classList.remove('splitting--active');
                    }
                },

            });
        }
    }

}