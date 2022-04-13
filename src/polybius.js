// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  const polybiusCode = {
    "a": 11,
    "b": 21,
    "c": 31,
    "d": 41,
    "e": 51,
    "f": 12,
    "g": 22,
    "h": 32,
    "i": 42,
    "j": 42,
    "k": 52,
    "l": 13,
    "m": 23,
    "n": 33,
    "o": 43,
    "p": 53,
    "q": 14,
    "r": 24,
    "s": 34,
    "t": 44,
    "u": 54,
    "v": 15,
    "w": 25,
    "x": 35,
    "y": 45,
    "z": 55
  }
  function polybius(input, encode = true) {
    // your solution code here
    // input is text to be encoded or decoded. if encoding, input should be a string. 
    //        Otherwise, return false
    // spaces should be maintained throughout
    // ignore capital letters
    
    // "i" and "j" share a space, both letters can be 42. When decoding, make sure to show both letters
    let finalString = ""
    // encoding part
    if (encode === true){
      // change all characters to lower case, if any
        let lowercaseInput = input.toLowerCase()
        // for each character of the lowercased input,
        // the character
        for (character of lowercaseInput){
            if (!alphabet.includes(character)){
                finalString += character
            }else{
                finalString += polybiusCode[character]
            }
        //for every letter in the input, match it with the keys in codePolybius. 
        //if there's a match, then take its value and add that (as a string) to finalString}
            }    
        }
    else if (encode === false){
        //decoding part
        //if decoding, the number of characters in the input (excluding spaces) should be even.
        let onlyNums = input.replaceAll(" ", "")        
        if ((onlyNums.length % 2 == 1)){
            return false
        }
        // let's make a new list, and use a for loop to start pushing in character[index] and character[index +1] into it
        // if character[index] = " ", then add the " " into finalString, and move on to the next index

        for (let i = 0; i < input.length; i+=2){
            let firstNum = input[i]
            let secondNum = input[i + 1]
            let matchingNum = `${firstNum}${secondNum}`
            if (firstNum === " "){
                finalString += firstNum
                i--
            }else if (matchingNum == "42"){
                finalString += "(i/j)"
            }else{
                for (eachItem in polybiusCode){
                    if (matchingNum == polybiusCode[eachItem]){
                        finalString += eachItem
                    }
                }
            }
        }
    }
    return finalString
  }


  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };

