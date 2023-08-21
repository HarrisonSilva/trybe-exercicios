const myFizzBuzz = require("./myFizzbuzz")

describe("tests myFizzBuzz function", () => {
    it("Run the function myFizzBuzz(num), where num is a number divisible by 3 and 5, and check if the return is what you expected.", () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz')
    })
    it("Run the function myFizzBuzz(num), where num is a number divisible by 3, and check if the return is what you expected.", () => {
        expect(myFizzBuzz(9)).toBe('fizz')
    })
    it("Executes the function myFizzBuzz(num), being a number divisible by 5, and check if the return is what you expected.", () => {
        expect(myFizzBuzz(10)).toBe('buzz')
    })
    it("Run the function myFizzBuzz(num), where num is a parameter that is not a number, and check if the return is what you expected.", () => {
        expect(myFizzBuzz(7)).toBe(7)
    })
    it("Run the function myFizzBuzz(num), where num is a parameter that is not a number, and check if the return is what you expected.", () => {
        expect(myFizzBuzz('trybe')).toBe(false)
    })
})