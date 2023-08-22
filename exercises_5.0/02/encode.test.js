const encode = require('./encode')

describe("tests encode function", () => {
    it("testing if encode and a function", () => {
        expect(typeof(encode)).toBe('function')
    })
    it("testing whether aeiou returns 12345", () => {
        expect(encode('aeiou')).toBe('12345')
    })
    it("testing whether 12345 not returns aeiou", () => {
        expect(encode('12345')).not.toBe('aeiou')
    })
    it("testing if the parameter value has the same size as the encode function return", () => {
        const param = '12345'
        const returnFunction = encode(param)

        expect(returnFunction).toHaveLength(param.length)
    })
})