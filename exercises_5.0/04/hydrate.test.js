const hydrate = require('./hydrate')


describe("tests hydrate function", () => {
    it("testing if hydrate is a function", () => {
        expect(typeof(hydrate)).toBe('function')
    })
    it("testing whether 1 coke, 3 beers returns 4 glasses of water", () => {
        const param = '1 coca, 3 cervejas'
        const executeFunction = hydrate(param)
        expect(executeFunction).toBe('4 copo de água')
    })
})


