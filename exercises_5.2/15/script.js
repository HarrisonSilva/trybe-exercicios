const { dragonDamage, dragon } = require('../12/script')
const { warriorDamage, warrior } = require('../13/script')
const { mageDamage,  mage } = require('../14/script')

const warriorAtack = (dragon) => {
  console.log('=========WARRIOR=ATACKED=========');
  const valueAtackWarrior = warriorDamage(dragon)
  dragon.healthPoints -= valueAtackWarrior
  const statistic = `🗡Warrior attacked 🐉Dragon
  Damage Warrior: ${valueAtackWarrior}
  healthPoints Dragon: ${dragon.healthPoints}`
  if (dragon.healthPoints <= 0) {
  console.log('💀💀💀💀💀');
  console.log(`The 🗡Warrior Killed Dragon🐉!
  Damage Warrior: ${valueAtackWarrior}
  healthPoints Dragon: ${dragon.healthPoints}`);
  console.log('💀💀💀💀💀');
  } else {
    console.log(statistic);
  }
}

const mageAtack = (dragon) => {
  console.log('=========MAGE=ATACKED=========');
  const valueAtackMage = mageDamage(dragon)
  dragon.healthPoints -= valueAtackMage
  const statistic = `🔥Mage attacked 🐉Dragon
  Damage Mage: ${valueAtackMage}
  healthPoints Dragon: ${dragon.healthPoints}`
  if (dragon.healthPoints <= 0) {
    console.log('💀💀💀💀💀');
    console.log(`The 🔥Mage Killed Dragon🐉!
    Damage Mage: ${valueAtackMage}
    healthPoints Dragon: ${dragon.healthPoints}`);
    console.log('💀💀💀💀💀');
  } else {
    console.log(statistic);
  }
}

const dragonMonster = (dragonAtack, warrior, mage) => {
  console.log('=========DRAGON=ATACKED=========');
  warrior.healthPoints -= dragonAtack
  mage.healthPoints -= dragonAtack

  const statistic = `🐉Dragon attacked 🗡Warrior and 🔥Mage  
  Damage Dragon: ${dragonAtack}
  healthPoints Warrior: ${warrior.healthPoints}
  healthPoints Mage: ${mage.healthPoints}
  `
  if (warrior.healthPoints <= 0) {
    console.log('💀💀💀💀💀');
    console.log(`The 🐉Dragon Killed 🗡Warrior!
    Damage Dragon: ${dragonAtack}
    healthPoints Mage: ${warrior.healthPoints}`);
    console.log('💀💀💀💀💀');
  } else if (mage.healthPoints <= 0) {
    console.log('💀💀💀💀💀');
    console.log(`The 🐉Dragon Killed 🔥Mage!
    Damage Dragon: ${dragonAtack}
    healthPoints Mage: ${mage.healthPoints}`);
    console.log('💀💀💀💀💀');
  } else {
    console.log(statistic);
  }
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
  while(
     warrior.healthPoints > 0 &&
     mage.healthPoints > 0 &&
     dragon.healthPoints > 0
     ) 
     {
    whoAttacks()
  }
}

battleMembers()