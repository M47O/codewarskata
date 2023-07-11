/* Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
	pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
	pigIt('Hello world !');     // elloHay orldway ! 
*/

//Solution:
export const pigIt = (a : string) : string =>  {
  const punct = '.,?!'
  const words = a.split(" ")
  const pigLatinArr = words.map(word => {
    if(punct.includes(word)){
      return word
    } else {
      return word.slice(1) + word[0] + 'ay'
    }
  })
  
  return pigLatinArr.join(" ")
}