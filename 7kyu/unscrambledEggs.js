/* Unscramble the eggs.

The string given to your function has had an "egg" inserted directly after each consonant. You need to return the string before it became eggcoded.

Example
	unscrambleEggs("Beggegeggineggneggeregg"); => "Beginner"
	               "B---eg---in---n---er---"

Kata is supposed to be for beginners to practice regular expressions, so commenting would be appreciated. */

//Solution:
function unscrambleEggs(word){
  const consonants = "B, C, D, F, G, J, K, L, M, N, P, Q, S, T, V, X, Z, H, R, W, Y".split(", ")
  let wordArr = word.split("")
  wordArr.map((e,i) => {
    if(consonants.includes(e.toUpperCase())){
      wordArr.splice(i+1, 3)
    }
  })
  return wordArr.join("")
}