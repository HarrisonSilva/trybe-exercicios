const player = {
    name: 'Marta',
    lastname: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    }
}

let nome = player.name
let lastName = player.lastname
let age = player.age

console.log('A jogadora',nome, lastName, 'tem', age, 'anos de idade');

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018]


const bestInTheWorld = player['bestInTheWorld']  

console.log('A jogadora', nome, lastName, 'foi eleita a melhor do mundo por', bestInTheWorld.length, 'vezes');


const medals = player.medals
console.log(Object.keys(medals));

console.log('A jogadora possui', medals.golden, 'medalhas de', Object.keys(medals)[0], 'e', medals.silver,  'medalhas de', Object.keys(medals)[1]);