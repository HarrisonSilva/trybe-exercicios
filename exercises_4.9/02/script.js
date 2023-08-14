/*
console.log(allLessons);
/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/

/* 
Usando o objeto criado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.

Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

console.log(getValueByNumber(lesson1, 0));
// Output: 'Matemática'

Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles o objeto, o nome da chave e o valor da chave. Exemplo:

console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false */

const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

const addTurnNight = (lesson, key , value) => lesson[key] = value
addTurnNight(lesson2, 'turno', 'noite')

const listKeys = (listKeys) => {
        const list = Object.keys(listKeys);
        for (let i in list) {
            console.log(list[i]);
        }
}
listKeys(lesson3)

const objectSize = (object) => {
    const quantityKeys = Object.keys(object).length
    const quantityValues = Object.values(object).length
    const sumObject = quantityKeys + quantityValues
    console.log(`Keys: ${quantityKeys} Values: ${quantityValues} Sum: ${sumObject}`);
}
objectSize(lesson3)

const listValues = (listValues) => {
    const values = Object.values(listValues)
    for (let i in values) {
        console.log(values[i]);
    }
}
listValues(lesson3)



const allLessons = {};
const createObject = () => {

    Object.assign(allLessons, { aula1: lesson1.materia });
    Object.assign(allLessons, { aula2: lesson2.materia });
    Object.assign(allLessons, { aula3: lesson3.materia });

    return allLessons;
}

createObject()

