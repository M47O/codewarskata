/* Implement a function which convert the given boolean value into its string representation.

Note: Only valid inputs will be given.

 */


//Solution:

function booleanToString(b){
  if(b == true){
      return "true"
  } else {
    return "false"
  }
}

//Refactor:

function booleanToString(b){
 return b ? "true" : "false"
}
