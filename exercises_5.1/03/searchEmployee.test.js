const { professionalBoard, searchEmployee } = require('./searchEmployee')


describe("tests searchEmployee function", () => {
    it("tests whether the searchEmployee function returns the correct data", () => {
        expect(searchEmployee('4678-2', professionalBoard)).toEqual({
            id: '4678-2',
            firstName: 'Paul',
            lastName: 'Dodds',
            specialities: [ 'Backend' ]
          })
    })
    it("test if no parameter is passed, the searchEmployee function returns an error", () => {
        expect( () => searchEmployee()).toThrow()
    })
    it("test if no parameter is passed, the searchEmployee function returns an error message", () => {
        expect( () => searchEmployee()).toThrow("O Id e os detalhes devem ser fornecidos")
    })
    it("tests if the id property exists in the object passed as a parameter", () => {
        const executeFunction = searchEmployee('4678-2', professionalBoard)
        expect(executeFunction).toHaveProperty('id')
    })
    it("test if passed an incorrect id the function returns an error", () => {
        expect( () => searchEmployee('4678-0', professionalBoard)).toThrow()
    })
    it("test if passed an incorrect id the function returns an error message", () => {
        expect( () => searchEmployee('4678-0', professionalBoard)).toThrow('ID não identificada')
    })
})