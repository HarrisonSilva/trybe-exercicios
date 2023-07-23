const inss = (value) => {
    if (value <= 1556.94 && value > 0) {
       return value - value / 8
    }
    if (value >= 1556.95 && value <= 2594.92) {
        return value - value / 9
    }
    if (value >= 2594.93 && value <= 5189.82) {
        return value - value / 11
    }
    if (value > 5189.82) {
        return value - 570.88
    } else {
        throw new Error(`${value} nao e um valor válido!`)
    }
}

const ir = (value) => {
    let desconto;
    if (value <= 1903.98) {
        return value
    }
    if (value >= 1903.99 && value <= 2826.65) {
        desconto = value / 7.5 - 142.80
        return value - desconto   
    }
    if (value >= 2826.66 && value <= 3751.05) {
        desconto = value / 15 - 354.80
        return value - desconto
    }
    if (value >= 3751.06 && value <= 4664.68) {
        desconto = value / 25.5 - 636.13
        return value - desconto
    } else {
        desconto = value / 27.5 - 869.36
        return value - desconto
    }
}

const salario = (value) => {
   const inssValue = inss(value)
   const irValue = ir(inssValue).toFixed(2)
   console.log(`Salario Bruto: ${value} 
Salario Liquido: ${irValue} `)
}


salario(1903.97)