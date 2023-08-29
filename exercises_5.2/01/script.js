const idades = [18, 21, 42, 20, 19, 21, 30, 73, 82, 45, 48, 50];

idades.find((idade) => idade < 20);
idades.find((idade) => idade > 50);

const numbers = [19, 21, 30, 3, 45, 22, 15];

const firtNumberDivisible = numbers.find((number) => {
    if (number % 3 === 0 && number % 5 === 0) {
        return number
    }
})
console.log(firtNumberDivisible);

const names = ['João', 'Irene', 'Fernando', 'Maria'];
const firstNameFiveLetters = names.find((nome) => {
    if (nome.length === 5) {
        return nome
    }
 })
 console.log(firstNameFiveLetters);

 const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ];

  const searchMusicId = musicas.find((music) => music.id === '31031685')
  console.log(searchMusicId);