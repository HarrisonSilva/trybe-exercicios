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
    const manaValue = magePower.mage.mana
    if (manaValue < 15) {
        console.log(`Mana: ${mage.mana} 
        Não possui mana suficiente`);
    } else {
        mage.mana -= 15
    const intelligence = magePower.mage.intelligence
    const buffIntelligence = intelligence * 2
    const newdamage = Math.floor(Math.random() * (intelligence - buffIntelligence + 1)) + buffIntelligence;
    console.log(`MagePower: ${newdamage}!!!
    Mana: ${mage.mana}`);
  }
}
    for (let i = 0; i < 9; i += 1) {
        mageDamage(battleMembers)
    }