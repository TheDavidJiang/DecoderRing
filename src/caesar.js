// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
function caesar(input, shift, encode = true) {
  // if the shift value isn't present, or equal to 0, or less than -25, or greater than 25, the function should return false
  if (!shift || shift == 0 || shift < -25 || shift > 25){
    return false
  }
  let finalString = ""
  let lowerCaseInput = input.toLowerCase()
  // changes the input to all lower cases
  if (encode === true){
    // if the user wants to encode something
    // going character by character: if the character is not in the alphabet, just add the character to the final string
    for (character of lowerCaseInput){
      if (!alphabet.includes(character)){
        finalString += character
      }
      // for each character of the input, loop through the alphabet and match it using index values
      // shift the index values using the inputted shift
      // add the new letter into the final string
      for (let index = 0; index < alphabet.length; index++){
        if (character === alphabet[index]){
          let newIndex = 0
          if(index + shift < 0){
            newIndex = (index + shift) + 26
          }else{
            newIndex = (index + shift) % 26} 
          let newLetter = alphabet[newIndex]
          finalString += newLetter
        }
      }
    }
}
 else if (encode === false){
    for (character of lowerCaseInput){
      if (!alphabet.includes(character)){
        finalString += character
      }
      for (let index = 0; index < alphabet.length; index++){
        if (character === alphabet[index]){
          let newIndex = 0
          if(index - shift < 0){
            newIndex = (index - shift) + 26
          }else{
            newIndex = (index - shift) % 26} 
          let newLetter = alphabet[newIndex]
          finalString += newLetter
        }
      }
}
}return (finalString)
}

return {
  caesar,
};
})();

module.exports = { caesar: caesarModule.caesar };
