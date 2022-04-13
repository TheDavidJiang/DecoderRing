const alphabetLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

function checkDuplicates(lowerAlphaSub){
    const sortedAlpha = lowerAlphaSub.split("").sort()
    for (let i = 0; i < sortedAlpha.length - 1; i++){
        const firstChar = sortedAlpha[i]
        const secondChar = sortedAlpha[i + 1]
        if (firstChar === secondChar){
            console.log("duplicate error")
            return false
        }
    }
}

function substitution(input, alphabet, encode = true) {
    //takes in an input, a substitution alphabet, and true/false depending on whether you want to encode or decode
    //spaces should be maintained
    //ignore capitalization
    // the alphabet parameter can take special characters, but must be exactly 26 characters. Otherwise return false
    // all characters in the alphabet parameter must be unique. Otherwise return false
    if (alphabet.length !== 26){
        console.log("length error")
        return false
    }
    const lowerAlphaSub = alphabet.toLowerCase()
    const lowerInput = input.toLowerCase()
    if (checkDuplicates(alphabet) == false){
        return false
    }
    
    let finalString = ""

    if (encode === true)
    // if the character is a space, just add it on to the final string to maintain spaces
        {for (eachCharacter of lowerInput){
            if (eachCharacter === " "){
                finalString += eachCharacter
                //----------------------CONTINUE WORKING HERE:-------------------------
                // otherwise, convert each character in the input into the new character as separated by index
                // brainstorm: if i want to encode #wwassup, the "#" is not accounted for in the alphabet. What to do? Maybe use character codes instead of indexing?
            }else{
                // take each letter of the input and match it up with the letter of the alphabet, and get the index number
                // use the index number, match it up with the substitutedAlphabet[index]
                // += it to final string
                for (letter of alphabetLetters){

                    if (eachCharacter == letter){
                        let indexValue = alphabetLetters.indexOf(letter)
                        finalString += lowerAlphaSub[indexValue]
                    }
                }
            }
        }
    }
    else if (encode === false){
        for (eachCharacter of lowerInput){
            if (eachCharacter === " "){
                finalString += eachCharacter
            }else{
                for (letter of lowerAlphaSub){
                    if (eachCharacter === letter){
                        let indexValue = lowerAlphaSub.indexOf(letter)
                        finalString += alphabetLetters[indexValue]
                    }
                }
            }
        }
    }
    return finalString
}


// this function should get a value of false if there is a match.


console.log(substitution("!tssg mtwkq", "qwertyu!opasdfghjklzxcvbnm"))
// let asdf = "m"
// console.log(alphabetLetters.indexOf(asdf))
