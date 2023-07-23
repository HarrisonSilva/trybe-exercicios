const nota = Math.floor(Math.random() * 100)

const colegio = (note) => {
    if (note >= 80) {
        console.log(`Nota: ${note} Parabéns, você faz parte do grupo das pessoas aprovadas!`);
    }
    else if (note < 80 && note >= 60) {
        console.log(`Nota: ${note} Você está na nossa lista de espera`);
    }
    else if (note < 60) {
        console.log(`Nota: ${note} Infelizmente, você reprovou`);
    }
}

colegio(nota)
