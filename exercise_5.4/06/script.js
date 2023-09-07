const countries = require('../data/countries')

const getPopulation = (populationTotal) => {
        return populationTotal.reduce((acc, curr) =>{
           return acc += curr.population
        }, 0)
   }

   console.log(getPopulation(countries));

