const countries = require('../data/countries')

const getTotalArea = (area) => {
    return area.reduce((acc, curr) => {
      return acc += curr.area
    }, 0)
  }

console.log(getTotalArea(countries));
