// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("Substitution() tests", ()=>{
    describe("Errors", ()=>{
        it("should return false if there is no alphabet key", ()=>{
            const actual = substitution("input")
            expect(actual).to.be.false
        })
        it("should return false if the alphabet key is not exactly 26 characters long", ()=>{
            const actual = substitution("input", "asdf")
            expect(actual).to.be.false
        })
        it("should return false if the alphabet key contains any duplicate characters", ()=>{
            const alphabetKey = "asdfasdfasdfasdfasdfasdfas"
            const actual = substitution("input", alphabetKey)
            expect(actual).to.be.false
        })
    })
    describe("Encoding", ()=>{
        it("should correctly encode a phrase based on the inputted alphabet key", ()=>{
            const actual = substitution("hello", "qwertyuiopasdfghjklzxcvbnm")
            const expected = "itssg"
            expect(actual).to.equal(expected)
        })
        it("should maintain spaces", ()=>{
            const actual = substitution("hello zebra", "qwertyuiopasdfghjklzxcvbnm")
            const expected = "itssg mtwkq"
            expect(actual).to.equal(expected)
        })
        it("should ignore capitalization", ()=>{
            const actual = substitution("Hello Zebra", "qwertyuiopasdfghjklzxcvbnm")
            const expected = "itssg mtwkq"
            expect(actual).to.equal(expected)
        })
    })

    describe("Decoding",()=>{
        it("should correctly decode a phrase based on the inputted alphabet key", ()=>{
            const actual = substitution("itssg", "qwertyuiopasdfghjklzxcvbnm", false)
            const expected = "hello"
            expect(actual).to.equal(expected)
        })
        it("should maintain spaces", ()=>{
            const actual = substitution("itssg mtwkq", "qwertyuiopasdfghjklzxcvbnm", false)
            const expected = "hello zebra"
            expect(actual).to.equal(expected)
        })
        it("should work if the input and key contains special characters", ()=>{
            const actual = substitution("i!ss#", "qwer!yuiopasdf#hjklzxcvbnm", false)
            const expected = "hello"
            expect(actual).to.equal(expected)
        })
    })

})