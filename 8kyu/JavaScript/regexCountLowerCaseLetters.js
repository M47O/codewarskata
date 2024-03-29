/* Your task is simply to count the total number of lowercase letters in a string.

Examples
	lowercaseCount("abc"); ===> 3
	lowercaseCount("abcABC123"); ===> 3
	lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3
	lowercaseCount(""); ===> 0;
	lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0
	lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26 */

//Solution:
function lowercaseCount(str){
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split("")
    
    return str.split("").filter(character => letters.includes(character))
      .filter(letter => letter.toLowerCase() === letter).length
}