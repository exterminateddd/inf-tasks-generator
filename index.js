import Api from './api.js';
const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.form__input');
let inputValues = {};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    inputs.forEach((input) => {
        if(input.id == 'systems') {
            const answer = input.value.split(",");
            inputValues[input.id] = answer;
        } else {
            inputValues[input.id] = input.value;
        }
    })
    console.log(inputValues);
    form.reset();
})
