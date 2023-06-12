/* Write a simple regex to validate a username. Allowed characters are:
	lowercase letters,
	numbers,
	underscore

Length should be between 4 and 16 characters (both included). */

//Solution:
function validateUsr(username) {
  const allowedChars = 'abcdefghijklmnopqrstuvwxyz1234567890_'.split("")
  return username.length >= 4 
         && username.length <= 16 
         && username.split("").filter(char => !allowedChars.includes(char)).length == 0 
}