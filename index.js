import FormQ from './FormQ.js';
import Form from './Form.js';
import Api from './Api.js';
const form10tox = document.querySelector('#from10-x');
const fromxto10 = document.querySelector('#fromx-10');
const registration = document.querySelector('#registration');
const toX = document.querySelector('#toX');
const to10 = document.querySelector('#to10');
const toReg = document.querySelector('#toReg');
const formAnswer = form10tox.querySelector('.form__answer');

const api = new Api ({
    baseUrl: 'http://0c1b8c566344.ngrok.io',
    
});

toX.addEventListener('click', () => {
    form10tox.classList.remove('none');
    registration.classList.add('none');
    fromxto10.classList.add('none');
    toX.classList.add('select__button-selected');
    to10.classList.remove('select__button-selected');
    toReg.classList.remove('select__button-selected');
});

to10.addEventListener('click', () => {
    fromxto10.classList.remove('none');
    form10tox.classList.add('none');
    registration.classList.add('none');
    toX.classList.remove('select__button-selected');
    to10.classList.add('select__button-selected');
    toReg.classList.remove('select__button-selected');
});

toReg.addEventListener('click', () => {
    fromxto10.classList.add('none');
    form10tox.classList.add('none');
    registration.classList.remove('none');
    toX.classList.remove('select__button-selected');
    to10.classList.remove('select__button-selected');
    toReg.classList.add('select__button-selected');
})

const formElement1 = new Form ('#from10-x', '#fromx-10');
const a = formElement1.renderJson();
console.log(a);

fromxto10.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formElement = new Form ('#from10-x', '#fromx-10');
    const json = formElement.renderJson();

    console.log(json);

    api.getToX(json)
    .then((res) => {
        return res.json();
    })
    .then((res) => {
        formAnswer.innerHTML = res.text.toString().replaceAll('\n', '<br>');
    })
    .catch((err) => {
        console.log(err);
    })
})


form10tox.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formElement = new Form ('#from10-x', '#fromx-10');
    formElement.log();
    const json = formElement.renderJson();

    console.log(json);

    api.getToX(json)
    .then((res) => {
        return res.json();
    })
    .then((res) => {
        if (!res.success) {console.log("UNSUCCESSFUL RESPONSE!!!!!!!@!@11@@!11!!!")}
        formAnswer.innerHTML = res.text.toString().replaceAll('\n', '<br>');
    })
    .catch((err) => {
        console.log(err);
    })
});