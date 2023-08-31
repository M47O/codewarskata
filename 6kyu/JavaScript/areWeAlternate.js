/* Create a function isAlt() that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

isAlt("amazon")
	// true
isAlt("apple")
	// false
isAlt("banana")
	// true

Arguments consist of only lowercase letters. */

//Solution:
function isAlt(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const letters = word.split("")
  let shouldBeVowel
  
  if(vowels.includes(word[0])){
    shouldBeVowel = true
  } else {
    shouldBeVowel = false
  }
  
  for(let letter of letters){
    if(!shouldBeVowel && vowels.includes(letter) || shouldBeVowel && !vowels.includes(letter)){
      return false
    }

    shouldBeVowel = !shouldBeVowel
  }

 return true
}