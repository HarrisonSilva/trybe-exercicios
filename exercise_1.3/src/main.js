import './style.css';

const btnDog = document.querySelector('#dog');
const btnCat = document.querySelector('#cat');
const btnSurprise = document.querySelector('#surprise');
const displayanimal = document.querySelector('#animal-image');

const dog = () => {
  btnDog.addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random').then((response) => response.json().then((data) => {
      displayanimal.src = data.message;
    }));
  });
};
dog();

const cat = () => {
  btnCat.addEventListener('click', () => {
    fetch('https://api.thecatapi.com/v1/images/search').then((response) => response.json().then((data) => {
      displayanimal.src = data[0].url;
    }));
  });
};
cat();

/* const surprise = () => {
  btnSurprise.addEventListener('click', () => {
    const numberRandom = Math.floor(Math.random() * 2);
    if (numberRandom === 1) {
      fetch('https://api.thecatapi.com/v1/images/search').then((response) => response.json().then((data) => {
        displayanimal.src = data[0].url;
      }));
    } else {
      fetch('https://dog.ceo/api/breeds/image/random').then((response) => response.json().then((data) => {
        displayanimal.src = data.message;
      }));
    }
  });
};

surprise(); */

btnSurprise.addEventListener('click', () => {
  Promise.any([
    fetch('https://api.thecatapi.com/v1/images/search'),
    fetch('https://dog.ceo/api/breeds/image/random'),
  ]).then((res) => res.json()).then((data) => {
    const petURL = data.message || data[0].url;
    displayanimal.src = petURL;
  });
});
