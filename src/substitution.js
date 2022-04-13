// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const alphabetLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

  function checkDuplicates(lowerAlphaSub){
      const sortedAlpha = lowerAlphaSub.split("").sort()
      for (let i = 0; i < sortedAlpha.length - 1; i++){
          const firstChar = sortedAlpha[i]
          const secondChar = sortedAlpha[i + 1]
          if (firstChar === secondChar){
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
      if (!alphabet){
        return false
      }
      if (alphabet.length !== 26){
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
                  // otherwise, convert each character in the input into the new character as separated by index
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
  

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
