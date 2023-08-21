const myRemove = require("./myRemove")


describe("Tests myRemove function", () => {
    it("Checks that calling myRemove([1, 2, 3, 4], 3) returns the expected array", () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
    })
    it("Check that calling myRemove([1, 2, 3, 4], 3) does not return the array [1, 2, 3, 4]", () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
    })
    it("Verify that calling myRemove([1, 2, 3, 4], 5) returns the expected array", () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
    })
})