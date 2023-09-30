/* This time no story, no theory. The examples below show you how to write function accum:

Examples:
	accum("abcd") -> "A-Bb-Ccc-Dddd"
	accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
	accum("cwAt") -> "C-Ww-Aaa-Tttt"
	The parameter of accum is a string which includes only letters from a..z and A..Z. */

//Solution:
export function accum(s: string): string {
  s = s.toUpperCase()
  const letters = s.split("")
  const repeatedLetters = letters.map((letter, index) => {
      if(index === 0) return letter
      else return letter + letter.toLowerCase().repeat(index)
  } )
  
  return repeatedLetters.join("-")
}