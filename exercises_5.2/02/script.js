const pessoas = [
    { nome: 'Ana', cargo: 'Analista' },
    { nome: 'João', cargo: 'Gerência' },
    { nome: 'Aline', cargo: 'Analista' },
    { nome: 'Joana', cargo: 'Gerência' },
  ];

  const hasManagement = (office, peoples) => peoples.some((people) => people.cargo === office)
    console.log(hasManagement('Gerência', pessoas));
    console.log(hasManagement('Product Owner', pessoas));
    

    const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

    const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);
    console.log(verifyFirstLetter('J', listNames));
    console.log(verifyFirstLetter('X', listNames));
    


    const grades = {
        portugues: 'Aprovado',
        matematica: 'Reprovado',
        ingles: 'Aprovado',
      };
      
      const verifyGrades = (note, grades) => Object.values(grades).every((grade) => grade === note);
      
      console.log(verifyGrades('Aprovado', grades));
      



const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((people) => people === name)

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));




const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
    const verifyAges = (peoples, age) => peoples.every((element) => element.age >= age)
  
  console.log(verifyAges(people, 18));
  console.log(verifyAges(people, 14));