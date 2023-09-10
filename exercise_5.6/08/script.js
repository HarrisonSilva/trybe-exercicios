
const student1 = {
    name: `Claudia`,
    lastName: `Farias`,
    age: 23,
  }
  
  const student2 = {
    name: `Vitor`,
    age: 20,
  }
  const getLastName = (student) => {
    if (student.lastName) {
        return student.lastName
    } else {

    } return 'lastName not filled'
  }
  console.log(getLastName(student1));
  console.log(getLastName(student2));