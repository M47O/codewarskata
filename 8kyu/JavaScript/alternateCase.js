/* Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. 
E.g: Hello World -> hELLO wORLD */

//Solution:
function alternateCase(s) {
  return s.split("").map(letter => {
    if(letter === letter.toLowerCase()){
      return letter.toUpperCase()
    } else {
      return letter.toLowerCase()
    }
  }).join("")
}