/* Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
	pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
	pigIt('Hello world !');     // elloHay orldway ! */

//Solution:
function pigIt(str){
  const punctuation = ['.', '!', '?']
  const words = str.split(" ")

  return words.map(word => {
    if(punctuation.includes(word)){
      return word
    }
    
    let firstLetter = word[0]
    return word.slice(1) + firstLetter + 'ay'
  }).join(" ")
}