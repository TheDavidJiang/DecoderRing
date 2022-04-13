// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius() tests", ()=>{
    describe("Encoding", ()=>{
        it("should correctly encode string into numbers", ()=>{
            const actual = polybius("water")
            const expected = "2511445124"
            expect(actual).to.equal(expected)
        })
        it("should translate the letters 'i' and 'j' to 42 when encoding", ()=>{
            const actual = polybius("janitor")
            const expected = "42113342444324"
            expect(actual).to.equal(expected)
        })
        it("should ignore capital letters when encoding", ()=>{
            const capitalPolybius = polybius("David")
            const lowercasePolybius = polybius("david")
            expect(capitalPolybius).to.equal(lowercasePolybius)
        })
        it("should maintain spaces in the message when encoding", ()=>{
            const actual = polybius("Be happy")
            const expected = "2151 3211535345"
            expect(actual).to.equal(expected)
        })
   
    })
    describe("Decoding", ()=>{
        it("should correctly decode a series of numbers into a string", ()=>{
            const actual = polybius("2511445124", false)
            const expected = "water"
            expect(actual).to.equal(expected)
        })
        it("should translate '42' to '(i/j)", ()=>{
            const actual = polybius("42113342444324", false)
            const expected = "(i/j)an(i/j)tor"
            expect(actual).to.equal(expected)
        })
        it("should maintain spaces in the message when decoding", ()=>{
            const actual = polybius("2151 3211535345", false)
            const expected = "be happy"
            expect(actual).to.equal(expected)
        })
        it("should return false if the number of characters (excluding spaces) are odd when decoding", ()=>{
            const actual = polybius("2151 321153534", false)
            const expected = false
            expect(actual).to.equal(expected)
        })
    })
})