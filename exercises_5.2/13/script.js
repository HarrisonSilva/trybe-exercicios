const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };


  const warriorDamage = (warrior) => {
    const strength =  warrior.warrior.strength
    const weaponDmg = warrior.warrior.weaponDmg
    const buffDamage = strength * weaponDmg
    const newdamage = Math.floor(Math.random() * (strength - buffDamage + 1)) + buffDamage;
    console.log(`WarriorPower: ${newdamage}!!!`);
   
  }

  warriorDamage(battleMembers)
