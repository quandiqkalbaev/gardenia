import {
    queryMatches
} from "./queryMatches.js";

export function hovers() {
    if (queryMatches(769, 'min')) {

        const firstWrapper = document.querySelector('.header__contacts-wrapper:first-child a svg');
        const secondWrapper = document.querySelector('.header__contacts-wrapper:nth-child(2) a svg');
        const firstSvgPath = document.querySelector('.header__contacts-wrapper:first-child a svg path');
        const secondSvgPath = document.querySelector('.header__contacts-wrapper:nth-child(2) a svg path');


        firstWrapper.addEventListener('mouseenter', () => {
            if (document.body.classList.contains('menu-active')) {
                secondSvgPath.style.fill = '#7a7a7a';
            }
        });
        
        firstWrapper.addEventListener('mouseleave', () => {
            if (document.body.classList.contains('menu-active')) {
                secondSvgPath.style.fill = '';
            }
        });
        
        secondWrapper.addEventListener('mouseenter', () => {
            if (document.body.classList.contains('menu-active')) {
                firstSvgPath.style.fill = '#7a7a7a';
            }
        });
        
        secondWrapper.addEventListener('mouseleave', () => {
            if (document.body.classList.contains('menu-active')) {
                firstSvgPath.style.fill = '';
            }
        });
        

    }
}