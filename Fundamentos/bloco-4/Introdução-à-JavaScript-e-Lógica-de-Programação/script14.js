/* const numberOne = 3
const numberTwo = 6
const numberThree = 5

if (numberOne % 2 === 0 || numberTwo % 2 === 0 || numberThree % 2 === 0) {
    console.log(true)
}


if (numberOne % 2 === 1 || numberTwo % 2 === 1 || numberThree % 2 === 1) {
    console.log(true)
} */

/* const valueProduct = 50
const valueSalle = 70 */

const saleProducts = ( name, product, quant, productValue, productSalle, tribute) => {
    if (name === null || name === 0 ||
        product === null || product === 0 ||
        quant === null || quant === 0 ||
        productValue === null || productValue === 0 ||
        productSalle === null || productSalle === 0 ||
        tribute === null || tribute === 0) {
            console.log('Nenhum dos valores pode ser nulo ou conter zero valor')
            return
    }
    const buy = productValue * quant
    const salle = productSalle * quant

    const s = salle - buy
    const descount = s * tribute
    const lucro = s - descount

    console.log(`Ola senhor(a) ${name}
    voce acabou de comprar ${quant} ${product}
    no valor de ${productValue} cada unidade
    e gastou ${buy} 
    caso venda os ${quant} ${product}
    pelo valor unitario de ${productSalle}
    recebera ${salle} 
    voce vai pagar ${descount} de imposto pelos ${quant, '', product}
    e seu lucro total sera de ${lucro + s}`)
}
/* saleProducts('harrison', 'tenis', 10, 5, 10, 0.20) */
saleProducts('Joao Victor', 'Pao', 0, 0.50, 1, 0.10)
