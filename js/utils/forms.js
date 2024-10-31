export function forms() {
    let times = document.querySelectorAll('.form-times');
    let icons = document.querySelectorAll('.form-icons');
    let inputs = document.querySelectorAll('form input');

    inputs.forEach((el, i) => {
        el.addEventListener('focus', () => {
            times.forEach(time => time.classList.add('hidden'));
            icons.forEach(icon => icon.classList.remove('hidden'));
            icons[i].classList.add('hidden')
            times[i].classList.remove('hidden')

        })


        times[i].addEventListener('click', () => {
            el.value = '';
            times[i].classList.add('hidden');
            icons[i].classList.remove('hidden');
        });
    })
    document.body.addEventListener('click', (event) => {
        if (!event.target.matches('form input')) { 
            times.forEach(time => time.classList.add('hidden'));
            icons.forEach(icon => icon.classList.remove('hidden'));
        }
    });
}