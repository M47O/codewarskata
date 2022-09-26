/* Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
	"abcde" -> 0 # no characters repeats more than once
	"aabbcde" -> 2 # 'a' and 'b'
	"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
	"indivisibility" -> 1 # 'i' occurs six times
	"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
	"aA11" -> 2 # 'a' and '1'
	"ABBA" -> 2 # 'A' and 'B' each occur twice */


//Solution:
function duplicateCount(text){
  let letters = text.toLowerCase().split("")
  let counter = 0
  
  letters.map(x => {
    if(letters.indexOf(x) != letters.lastIndexOf(x)){
      counter += 1
      letters = letters.filter(e => e != x)
    }
  })
  return counter
}

/*
P: string
R: number (of letters that repeat more than one time)
E: sample tests below
P:  1. Break parameter into array of letters
    2. Create a counter to keep track of non-unique letters
    3. Iterate over the letters:
         if the letter is not unique (indexOf(letter) != lastIndexOf(letter))
          then add one to the counter
          and delete every other instance of that letter to avoid iterating over them again
    4. return the counter
*/