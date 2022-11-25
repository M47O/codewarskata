/* When provided with a String, capitalize all vowels

For example:
Input : "Hello World!"
Output : "HEllO WOrld!"

Note: Y is not a vowel in this kata. */

//Solution:
function swap (string) {
 const vowels = "AEIOU".split("")
 
 return string.split("").map(x => {
   if(vowels.includes(x.toUpperCase())) return x.toUpperCase()
   return x
 }).join("")
}