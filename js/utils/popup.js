export function popup() {
    let popupBtns = document.querySelectorAll('.popup-btn'),
        popup = document.querySelector('.popup'),
        popupExit = document.querySelectorAll('.popup__exit'),
        timePopupExit = document.querySelector('.time-popup__exit'),
        timePopup = document.querySelector('.time-popup');
    let opened = false;
    let timeoutId = null;

    popupBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            document.body.classList.add('lock')
            popup.classList.add('popup--active');
            if (timeoutId) {
                clearTimeout(timeoutId);
                timeoutId = null;
            }
        });

        popup.addEventListener('click', (e) => {
            if (e.target.closest('.popup__wrapper')) {
                return;
            }
            document.body.classList.remove('lock')
            popup.classList.remove('popup--active');
        });
    });

    popupExit.forEach(btn => {
        btn.addEventListener('click', () => {
            popup.classList.remove('popup--active');
            document.body.classList.remove('lock');
            startTimer();
        });
    });

    //time-popup
    timePopup.addEventListener('click', (e) => {
        if (e.target.closest('.time-popup__wrapper')) {
            return;
        }
        timePopup.classList.remove('time-popup--active');
        document.body.classList.remove('no-scroll');
    });

    timePopupExit.addEventListener('click', () => {
        timePopup.classList.remove('time-popup--active');
        document.body.classList.remove('no-scroll');
    });

    function startTimer() {
        timeoutId = setTimeout(() => {
            opened = true;
            timePopup.classList.add('time-popup--active');
            document.body.classList.add('no-scroll');
            timeoutId = null;
        }, 30000);
    }

    startTimer();


}