const { handleSubmit } = require("../src/Client")

describe("Handle Submit function", () => {
    test("The user should type in a (link)", () => {
        expect(handleSubmit(input, "link")).toEqual(output)
    })
})