/* Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
	"This is an example!" ==> "sihT si na !elpmaxe"
	"double  spaces"      ==> "elbuod  secaps" 
*/

//Solution:
export function reverseWords(str: string): string {
  const words = str.split(" ");  
  return words.map(word => word.split("").reverse().join("")).join(" ")
}