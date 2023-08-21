const myRemove = require("./script")


describe("Tests myRemove function", () => {
    it("Checks that calling myRemove([1, 2, 3, 4], 3) returns the expected array", () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
    })
    it("Check that calling myRemove([1, 2, 3, 4], 3) does not return the array [1, 2, 3, 4]", () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
    })
})

/*
Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado.
*/