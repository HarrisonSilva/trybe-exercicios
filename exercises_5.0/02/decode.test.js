const decode = require('./decode')

describe("tests decode function", () => {
    it("testing if decode and a function", () => {
        expect(typeof(decode)).toBe('function')
    })
    it("testing whether 12345 returns aeiou", () => {
        expect(decode('12345')).toBe('aeiou')
    })
    it("testing if the parameter value has the same size as the decode function return", () => {
        const param = 'aeiou'
        const returnFunction = decode(param)

        expect(returnFunction).toHaveLength(param.length)
    })
})