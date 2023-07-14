/* Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
	remove("Hi!") == "Hi"
	remove("Hi!!!") == "Hi!!"
	remove("!Hi") == "!Hi"
	remove("!Hi!") == "!Hi"
	remove("Hi! Hi!") == "Hi! Hi"
	remove("Hi") == "Hi" 
*/

//Solution:
export function remove(s: string): string {
  if(s[s.length - 1] === '!'){
    return s.slice(0, s.length - 1)
  } else {
    return s
  }
}