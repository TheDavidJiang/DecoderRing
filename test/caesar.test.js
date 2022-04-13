// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar() tests", ()=>{
    describe("missing or incorrect parameters", ()=>{
        it("should return false if shift is no inputted", ()=>{
            const actual = caesar("hello me david")
            expect(actual).to.be.false
        })
    
        it("should return false if shift is less than -25", ()=>{
            const actual = caesar("doggo", -50)
            expect(actual).to.be.false
        })
    
        it("should return false if shift is greater than 25", ()=>{
            const actual = caesar("doggo", 50)
            expect(actual).to.be.false
        })
    })
    describe("correctly encodes or decodes a message", ()=>{
        it("should encode a message correctly given a string and proper shift", ()=>{
            const actual = caesar("hello", 1)
            const expected = "ifmmp"
            expect(actual).to.equal(expected)
        })
        it("should retain spaces and non-alphabetic characters as is", ()=>{
            const actual = caesar("hello there 3!", 1)
            const expected = "ifmmp uifsf 3!"
            expect(actual).to.equal(expected)
        })
        it("should allow for shifts going backwards from the letter 'a'", ()=>{
            const actual = caesar("hello there", -10)
            const expected = "xubbe jxuhu"
            expect(actual).to.equal(expected)
        })
        it("should allow for shifts going forwards after the letter 'z'", ()=>{
            const actual = caesar("hello there", 20)
            const expected = "byffi nbyly"
            expect(actual).to.equal(expected)
        })
        it("should decode by shifting letters in the opposite direction", ()=>{
            const actual = caesar("byffi nbyly", 20, false)
            const expected = "hello there"
            expect(actual).to.equal(expected)
        })
        it("should ignore capital letters", () => {
            const message = "MeOw mEoW"
            const shift = 5
            const actual = caesar(message, shift)
            const expected = "rjtb rjtb"
      
            expect(actual).to.equal(expected)
        })
    })
})