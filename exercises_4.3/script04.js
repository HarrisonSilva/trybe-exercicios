const substituaX = (nome) => {
    const frase = `Tryber ${nome} aqui!`
    return frase
}

const minhasSkills = (frase) => {
    console.log(`${frase}
Minhas três principais habilidades são:`);
    const skills = ['JavaScript', 'HTML', 'CSS']
    for (let i in skills) {
        console.log(skills[i]);
    }
}

minhasSkills(substituaX('Harrison'))