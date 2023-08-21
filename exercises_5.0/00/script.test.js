const myRemove = require("./script")


describe("Tests myRemove function", () => {
    it("Checks that calling myRemove([1, 2, 3, 4], 3) returns the expected array", () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
    })
})

/* 🚀 Exercício 1
desse array sem o elemento item, caso ele exista no array:
Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado;

Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4];

Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado.
*/