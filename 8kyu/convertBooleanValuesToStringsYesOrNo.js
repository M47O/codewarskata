/* Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false. */


//Solution:
const boolToWord = bool => bool === true ? "Yes" : "No"

//Refactor:
const boolToWord = bool => bool ? "Yes" : "No"
