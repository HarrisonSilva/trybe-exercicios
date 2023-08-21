const myFizzBuzz = require("./myFizzbuzz")

describe("", () => {
    it("tests myFizzBuzz function", () => {

    })
    it(" Run the function myFizzBuzz(num), where num is a number divisible by 3 and 5,and check if the return is what you expected", () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz')
    })
    it("", () => {
        
    })
    it("", () => {
        
    })
    it("", () => {
        
    })
})


/*
A função myFizzBuzz(num) recebe um número num como parâmetro. 
Caso num seja um número divisível por 3 e 5, a função retorna "fizzbuzz". 
Caso num seja um número divisível apenas por 3, retorna "fizz". 
E caso num seja um número divisível apenas por 5, retorna "buzz". 
Se num for um número que não é divisível nem por 3 e nem por 5, a 
função retorna o próprio número num. Caso num não seja um número, 
a função retorna false.

Execute a função myFizzBuzz(num), sendo num um número divisível por 3 e 5,
 e verifique se o retorno é o esperado.

Execute a função myFizzBuzz(num), sendo num um número divisível por 3,
 e verifique se o retorno é o esperado.

Execute a função myFizzBuzz(num), sendo num um número divisível por 5,
 e verifique se o retorno é o esperado.

Execute a função myFizzBuzz(num), sendo num um número que não é divisível 
por 3 ou 5, e verifique se o retorno é o esperado.

Execute a função myFizzBuzz(num), sendo num um parâmetro que não é um número,
 e verifique se o retorno é o esperado.
 */