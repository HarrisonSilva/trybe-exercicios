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



  const mageDamage = (magePower) => {
      const mageStatus = {}
    const manaValue = magePower.mage.mana
    if (manaValue < 15) {
        mageStatus.message = 'Não possui mana suficiente'
        mageStatus.damage = 0
        mageStatus.mana = 0
        console.log(mageStatus);
    } else {
        mage.mana -= 15
    const intelligence = magePower.mage.intelligence
    const buffIntelligence = intelligence * 2
    const newdamage = Math.floor(Math.random() * (intelligence - buffIntelligence + 1)) + buffIntelligence;
    mageStatus.damage = newdamage
    mageStatus.mana = 15
    return console.log(mageStatus);
  }
}
    for (let i = 0; i < 9; i += 1) {
        mageDamage(battleMembers)
    }