const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];

  const sortPeoples = (peoples) => {
    const sortedPeoples = peoples.sort((a, b) => a.age - b.age)
    console.log(sortedPeoples);
  }

sortPeoples(people);