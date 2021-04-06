import FormQ from './components/FormQ.js';
import Form from './components/Form.js';
import Api from './components/Api.js';
const mainForm = document.querySelector('#main-form');
const registration = document.querySelector('#registration');
const formAnswer = document.querySelector('.answer__message');
const main = document.querySelector('.main');
const answer = document.querySelector('.answer');
const answersLink = document.querySelector('#answers');
const questionsLink = document.querySelector('#questions');
const notification = document.querySelector('.notification');
const notificationMessage = document.querySelector('.notification__message');
const response = document.querySelector('#response');

const api = new Api ({
    baseUrl: 'http://908e393668c6.ngrok.io',
});

function displayError () {
    response.classList.add('none');
    notification.backgroundColor = 'crimson';
    notificationMessage.textContent = 'Неудачно :('
}

function displayAnswer (res) {
    const currentTime = new Date();
    const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`
    const ans = res.text;
    const noAns = res.text_no_ans;
    let blob = new Blob([noAns], {type: 'text/plain'});
    let blobAnswers = new Blob([ans], {type: 'text/plain'});
    answersLink.addEventListener('click', () => {
        answersLink.setAttribute('href', URL.createObjectURL(blobAnswers));
        answersLink.setAttribute('download', 'answers');
    })
    questionsLink.addEventListener('click', () => {
        questionsLink.setAttribute('href', URL.createObjectURL(blob));
        questionsLink.setAttribute('download','questions');
    });
    notification.classList.remove('none');
    notificationMessage.textContent = `Успешно! ${time}`;
}



mainForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    console.log('a')
    const formElement = new Form ('#from10-x', '#fromx-10');
    const json = formElement.renderJson();

    console.log(json);
    api.getToX(json)
    .then((res) => {
        return res.json();
    })
    .then((res) => {
        displayAnswer(res);
    })
    .catch((err) => {
        console.log(err);
    })
})