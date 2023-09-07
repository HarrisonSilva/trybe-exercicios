const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };

  const fullInfos = { ...user, ...jobInfos }
  const message = `Hi, my name is ${fullInfos.name}, I'm ${fullInfos.age} years old and I'm ${fullInfos.nationality}.
  I work as a ${fullInfos.profession} and my squad is ${fullInfos.squadInitials}-${fullInfos.squad}`

console.log(message);
