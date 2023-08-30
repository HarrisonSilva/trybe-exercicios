const newEmployees = () => {
  const employees = {
    id1: '', // Nome:  -> Chame sua função passando o nome 
    id2: '', // Nome:  -> Chame sua função passando o nome
    id3: '', // Nome:  -> Chame sua função passando o nome 
  }
  return employees;
};

const createEmailPeole = (ids, nome) => {
  const newPersonContract = {}
  const employees = newEmployees()
      for (let id in employees) {
        if (ids === id) {
          const takeSpace = nome.replace(/\s/g, '_');
          newPersonContract[id] = `${takeSpace.toLowerCase()}@trybe.com`;
        }
      }
      
      console.log(newPersonContract);
}
createEmailPeole('id1', 'Pedro Guerra');
createEmailPeole('id2', 'Luiza Drumond');
createEmailPeole('id3', 'Carla Paiva');
