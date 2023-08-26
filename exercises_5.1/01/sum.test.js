const sum = require('./sum')

describe("tests function sum", () => {
    it("Test whether sum(4, 5) returns 9", () => {
        expect(sum(4, 5)).toBe(9)
    })
    it("Test whether sum(0, 0) returns 0", () => {
        expect(sum(0, 0)).toBe(0)
    })
    it("Test whether sum function throws an error when parameters are number 4 and string '5'", () => {
        expect( () => sum(4, '5')).toThrow()
    })
    it("Test if the error message is 'parameters must be numbers' whencall sum(4, '5')", () => {
        expect(() => sum(4, '5')).toThrow('Parameters must be numeri')
    })
})