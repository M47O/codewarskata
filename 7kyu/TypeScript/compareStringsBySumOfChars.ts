/* Compare two strings by comparing the sum of their values (ASCII character code).

For comparing treat all letters as UpperCase
null/NULL/Nil/None should be treated as empty strings
If the string contains other characters than letters, treat the whole string as it would be empty
Your method should return true, if the strings are equal and false if they are not equal.

Examples:
	"AD", "BC"  -> equal
	"AD", "DD"  -> not equal
	"gf", "FG"  -> equal
	"zz1", ""   -> equal (both are considered empty)
	"ZzZz", "ffPFF" -> equal
	"kl", "lz"  -> not equal
	null, ""    -> equal */

//Solution:
export function compare(s1:string|null, s2:string|null):boolean {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("")
  
  if(s1 === null || s1.split("").filter(letter => !letters.includes(letter.toUpperCase())).length > 0){
    s1 = ''
  }
  if(s2 === null || s2.split("").filter(letter => !letters.includes(letter.toUpperCase())).length > 0){
    s2 = ''
  }

  s1 = s1.toUpperCase()
  s2 = s2.toUpperCase()
  
  const ascii1Total = s1.split("").map(e => e.charCodeAt(0)).reduce((acc, cv) => acc + cv, 0)
  const ascii2Total = s2.split("").map(e => e.charCodeAt(0)).reduce((acc, cv) => acc + cv, 0)
  
  
  return ascii1Total === ascii2Total
}