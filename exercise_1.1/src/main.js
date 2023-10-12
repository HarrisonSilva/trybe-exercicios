import validator from 'validator';
import './style.css';

const inputValidation = document.querySelector('#text-value');
const selectValidation = document.querySelector('#select-validation');
const btnValidate = document.querySelector('#btn-validate');
const displayResult = document.querySelector('h2');

btnValidate.addEventListener('click', (event) => {
  event.preventDefault();
  if (selectValidation.value === 'cpf') {
    displayResult.innerText = validator.isTaxID(inputValidation.value);
  }
  if (selectValidation.value === 'email') {
    event.preventDefault();
    displayResult.innerText = validator.isEmail(inputValidation.value);
  }
});
