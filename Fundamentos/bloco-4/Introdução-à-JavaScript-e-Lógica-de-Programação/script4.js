const currentHour = Math.floor(Math.random() * 24)
let message = '';

const isHour = (hour) => {
    if (currentHour >= 22) {
        message = `${currentHour}: Horas, Não deveríamos comer nada, é hora de dormir!`
    }
    else if (currentHour >= 18 && currentHour < 22) {
        message = `${currentHour}: Horas, Rango da noite, vamos jantar :D`
    }
    else if (currentHour >= 14 && currentHour < 14) {
        message = `${currentHour}: Horas, Vamos fazer um bolo pro café da tarde?`
    }
    else if (currentHour >= 11 && currentHour < 14) {
        message = `${currentHour}: Horas, Hora do almoço!!!`
    }
    else if (currentHour >= 4 && currentHour <= 11) {
        message = `${currentHour}: Horas, Hmmm, cheiro de café recém-passado`
    }
    else if (currentHour >= 0 && currentHour < 4 ) {
        message = `${currentHour}: Horas, ZZzzzZZzzZZZz`
    } else {
        message = `${currentHour}: Sem fome!`
    }
    return message
}

console.log(isHour(message));