import Form from './Form.js';
const nonbinaryForm = document.querySelector('#nonbinary');
const formAnswer = nonbinaryForm.querySelector('.form__answer');

nonbinaryForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const quantityValue = nonbinaryForm.querySelector('#quantity').value;
    const maxValue = nonbinaryForm.querySelector('#max').value;
    const systemsValue = nonbinaryForm.querySelector('#systems').value;
    const formElement = new Form(quantityValue, maxValue, systemsValue);
    const json = formElement.renderJson();
    console.log(json);
    fetch('http://13222a0a5e76.ngrok.io/gen', {
        method: 'POST',
        body: json
    })
    .then((res) => {
        return res.json();
    })
    .then((res) => {
        formAnswer.innerHTML = res.text.toString().replaceAll('\n', '<br>');
    })
    .catch((err) => {
        console.log(err);
    })
    // $.post('http://13222a0a5e76.ngrok.io/gen', json).success((resp) => {
    //     if (!resp.success) {
    //         return
    //     }
    //     console.log(resp.text);
    // })
});