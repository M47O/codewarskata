/* Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:
	['a','b','c','d','f'] -> 'e'
	['O','Q','R','S'] -> 'P'

(Use the English alphabet with 26 letters!) */

//Solution:
export function findMissingLetter(array:string[]):string
{
  let currentCharCode = array[0].charCodeAt(0)
  let missingLetter = ''
  
  for(let i = 0; i < array.length; i++){
    if(currentCharCode !== array[i].charCodeAt(0)){
      return String.fromCharCode(currentCharCode)
    } else {
      currentCharCode++
    }
  }

  return '' as never
}