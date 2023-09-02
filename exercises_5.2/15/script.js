const { dragonDamage, dragon } = require('../12/script')
const { warriorDamage, warrior } = require('../13/script')
const { mageDamage,  mage } = require('../14/script')

const warriorAtack = (dragon) => {
  dragon.healthPoints -= warriorDamage(dragon)
}

const mageAtack = (dragon) => {
  dragon.healthPoints -= mageDamage(dragon)
}

const dragonMonster = (dragonAtack, warrior, mage) => {
  warrior.healthPoints -= dragonAtack
  mage.healthPoints -= dragonAtack
}


const actions = [warriorAtack, mageAtack, dragonMonster]


const whoAttacks = () => {
  const randomNumber = Math.floor(Math.random() * 3)
  if (randomNumber === 0 || randomNumber === 1) {
    actions[randomNumber](dragon)
  } else {
    actions[randomNumber](dragonDamage(), warrior, mage)
  }
  
}

const battleMembers = () => {
  while(warrior.healthPoints > 0 && mage.healthPoints > 0 && dragon.healthPoints > 0) {
    /* Statistica do game aqui */
    whoAttacks()
 }
}

battleMembers()
console.log(dragon.healthPoints);
console.log(mage.healthPoints);
console.log(warrior.healthPoints);


/*
Adicione ao objeto gameActions uma função de primeira classe que 
retorna o objeto battleMembers atualizado e faça um console.log 
para visualizar o resultado final do turno.
 */