/* Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
	replace("Hi!") === "H!!"
	replace("!Hi! Hi!") === "!H!! H!!"
	replace("aeiou") === "!!!!!"
	replace("ABCDE") === "!BCD!" */

//Solution:
function replace(s){
 const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

 return s.split("").map(x => {
   if(vowels.includes(x)){
    return  x = "!"
   } else {
    return  x = x
   }
 }).join("")
  
}