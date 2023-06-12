/* Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).
Consult the solution set-up for the exact data structure implementation depending on your language.

Example:
	orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]] */

//Solution:
const orderedCount = function (text) {
  let arr = text.split("")
  let charCount = []
  
  for(let i = 0; i < arr.length; i++){
    let char = arr[i]
    let numOccurrences = arr.filter(c => c === arr[i]).length
    
    if(!charCount.some((item) => item[0] === char)){
      charCount.push([char, numOccurrences])
    }
  }
  
  return charCount
}


