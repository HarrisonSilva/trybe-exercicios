const countries = require('../data/countries')

const longestName = (countrie) => {
    return countrie.reduce((acc, curr) => {
       if (acc.name.length > curr.name.length) {
        return acc
       } else {
        return curr
       }
    }, countries[0])
  }

  console.log(longestName(countries));
