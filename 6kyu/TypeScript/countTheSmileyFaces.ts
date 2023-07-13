/* Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:
Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example
	countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
	countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
	countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

Note
In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.
*/

//Solution:
export function countSmileys(arr: string[]) {
  function isValid(str: string): boolean {
    const eyes = [':', ';']
    const noses = ['-', '~']
    const mouths = [')', 'D']
    
    // 1. Check that every character in the smiley is valid (return true/false)
    if (str.split("").every(char => eyes.includes(char) || noses.includes(char) || mouths.includes(char))) {
    // 2. If true, check that the 1st char + 2nd char are eyes and a mouth and that the str is exactly 2 chars long
      if (eyes.includes(str[0]) && mouths.includes(str[1]) && str.length == 2) {
        return true
    // 3. If false, check that the 1st char + 2nd char + 3rd char are eyes, a nose, and a mouth, and that the str is 3 chars long
      } else if (eyes.includes(str[0]) && noses.includes(str[1]) && mouths.includes(str[2]) && str.length == 3) {
        return true
    // 4. If the preceding two conditions are both false, return false
      } else {
        return false
      }
    } else {
      return false
    }
  }

  return arr.filter(smiley => isValid(smiley)).length
}