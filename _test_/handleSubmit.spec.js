const { handleSubmit } = require("../src/Client")

import {handleSubmit} from '../src/Client/js/handleSubmit.js'
import {postToFrontend} from '../src/Client/js/postToFrontend.js'


describe("Handle Submit function", () => {
    test("The user should type in a (link)", () => {
        expect(handleSubmit(input, "link")).toEqual(output)
    })
})


describe("Post To Frontend function", () => {
    test("The user should type in a (link)", () => {
        expect(postToFrontend(input, "link")).toEqual(output)
    })
})