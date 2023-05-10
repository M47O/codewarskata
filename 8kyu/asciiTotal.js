/* You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.

Examples:
	uniTotal("a") == 97
	uniTotal("aaa") == 291 */

//Solution:
function uniTotal (string) {
  if(string === "") return 0

  const values = string.split("").map(letter => letter.charCodeAt())
  return values.reduce((acc, cv) => acc + cv, 0)
}