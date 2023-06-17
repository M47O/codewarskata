/* Your goal is to create a function dative() (Dative() in C#) which returns the valid form of a valid Hungarian word w in dative case i. e. append the correct suffix nek or nak to the word w based on vowel harmony rules.

Vowel Harmony Rules (simplified)
When the last vowel in the word is
a front vowel (e, é, i, í, ö, ő, ü, ű) 
	the suffix is -nek
a back vowel (a, á, o, ó, u, ú) 
	the suffix is -nak

Examples:
	dative("ablak") == "ablaknak"
	dative("szék") == "széknek"
	dative("otthon") == "otthonnak"

Preconditions:
To keep it simple: All words end with a consonant :)
All strings are unicode strings.
There are no grammatical exceptions in the tests. */

//Solution:
export function dative (word: string): string | undefined {
  const frontVowels = ["e", "é", "i", "í", "ö", "ő", "ü", "ű"]
  const backVowels = ["a", "á", "o", "ó", "u", "ú"]
  
  const reverseWordArr = word.split("").reverse()
  
  //Start at i = 1 because last letter is always equal to a consonant
  for(let i = 1; i < word.length; i++){
    if(frontVowels.includes(reverseWordArr[i])){
       return word + 'nek'
    } else if(backVowels.includes(reverseWordArr[i])){
      return word + 'nak'
    }
  }
}
