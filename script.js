const form = document.querySelector('form');
const input = document.querySelector('input');
const emailInput = document.getElementById('email');
const errortext = document.getElementById('error-text')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

    if (!emailRegex.test(emailInput.value)) {
        input.style.border = '1px solid red';
        input.placeholder = '';
        emailInput.value = "example@email/com ";
        emailInput.style.fontSize = '15px';
        emailInput.style.color = 'gray';
        errortext.style.display = 'block';
        emailInput.style.transition = "1s"

    } else {
        input.parentElement.classList.remove('error-text');

        input.value = '';
        errortext.style.display = 'none'
    }
});
