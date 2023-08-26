const { printMessage, info } = require('./printMessage.js')

describe("tests info parameter", () => {
    it("tests whether the object passed as a parameter has the character property.", () => {
        expect(info).toHaveProperty('personagem')
    })
    it("Check if the response contains the Welcome information", () => {
        expect(printMessage(info)).toContain("Boas vindas")
    })
    it("Check if the response contains the Margarida", () => {
        expect(printMessage(info)).toContain("Margarida")
    })
    it("testing whether the error message is thrown if the function is called with an invalid object", () => {
        expect(() => printMessage()).toThrow("objeto inválido");
    });
})