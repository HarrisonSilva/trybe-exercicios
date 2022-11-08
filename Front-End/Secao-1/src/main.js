import { nanoid } from 'nanoid';
import './style.css';

const btn = document.querySelector('button');
const senha = document.querySelector('h2');

btn.addEventListener('click', () => {
  senha.innerHTML = nanoid();
});
