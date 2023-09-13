/* Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

Examples (input --> output):
	"hello case" --> "HelloCase"
	"camel case word" --> "CamelCaseWord"
Don't forget to rate this kata! Thanks :)
*/

//Solution:
export function camelCase(str: string): string {
  if(!str) return str
  
  str = str.toLowerCase()

  const words = str.split(" ")
  const casedWords = words.map(word => word = word[0].toUpperCase() + word.slice(1))
  
  return casedWords.join("")
}