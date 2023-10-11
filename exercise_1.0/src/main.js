import {nanoid} from 'nanoid';
import copy from 'clipboard-copy';
import './style.css';

const displayPassword = document.querySelector('h2');
const buttonCopy = document.querySelector('#copy');
document.querySelector('button').addEventListener('click', () => {
  displayPassword.innerText = nanoid();
});
document.querySelector('#copy').addEventListener('click', () => {
  copy(displayPassword.innerText);
  buttonCopy.innerText = 'copy-sucesfull';
  buttonCopy.style.backgroundColor = 'green';
});

console.log(document.querySelector('#copy'));
