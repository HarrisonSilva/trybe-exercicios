const sum = require("./sum");

describe("Exercicio 1", () => {
    it("A Soma de 4 e 5 e 9", () => {
        expect(sum(4, 5)).toBe(9);
    })
    it("A Soma de 0 + 0 e 0 ", () => {
        expect(sum(0, 0)).toBe(0);
    })
    it("A Soma de 4 e 5 em string e 9", () => {
        expect(sum(4, "5")).toMatch(9);
    })

})