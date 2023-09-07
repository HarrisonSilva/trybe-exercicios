const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];


const countA = (letter) => {
    return letter.reduce((acc, curr) => {
        for (let i = 0; i < curr.length; i += 1) {
            if (curr[i] === 'A') {
                acc += 1
            }
            return acc
        }
      }, 0)
     
  }

  console.log(countA(names));
