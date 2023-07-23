/* VERIFIQUE SE ALGUM DOS PARAMETROS ESTA VINDO NULLO OU ZERO */


const nullOrZero = (one, two, three) => {
    [one, two, three].filter((param) => {
        if (param === null || param === 0) {
            throw new Error('parametros incorretos')
        }
        
    } 
   )
   console.log(one, two, three);
}

nullOrZero(0, 3, 5)