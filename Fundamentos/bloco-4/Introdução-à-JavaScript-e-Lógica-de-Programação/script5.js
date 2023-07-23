const weekDay = ['segunda-feira','terca-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira']
const weekend = ['sabado', 'domingo']

const whatDay = (days, day) => {
    if (days.includes(day)) {
        console.log(`Hoje e ${day} Oba, mais um dia de aprendizado na Trybe >:D`)
    }
    else if (days.includes(day)) {
        console.log(`Hoje e ${day} FINALMENTE, descanso merecido UwU`);
    } else {
        console.log(`${day} ERROR!! nao e um dia valido`);
    }
} 

whatDay(weekDay, 'sabado')