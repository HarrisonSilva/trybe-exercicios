
const people = [
    {
      name: 'Nicole',
      bornIn: 1992,
      nationality: 'Australian',
    },
    {
      name: 'Harry',
      bornIn: 2008,
      nationality: 'Australian',
    },
    {
      name: 'Toby',
      bornIn: 1901,
      nationality: 'Australian',
    },
    {
      name: 'Frida',
      bornIn: 1960,
      nationality: 'Dannish',
    },
    {
      name: 'Fernando',
      bornIn: 2001,
      nationality: 'Brazilian',
    },
  ];
  
  const filterPeople = (peoples) => {
    return peoples.filter((people) => 
    people.nationality === 'Australian'
    && people.bornIn >= 1901
    && people.bornIn <= 2000) 
    }
  
console.log(filterPeople(people));
