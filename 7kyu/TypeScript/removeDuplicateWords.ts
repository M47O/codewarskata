/* Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:
Input:
'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:
'alpha beta gamma delta' */

//Solution:
export function removeDuplicateWords(s: string): string {
  let wordsArr = s.split(" ")
  let uniqueWords: string[] = []
  
  for(let word of wordsArr){
    if(!uniqueWords.includes(word)){
      uniqueWords.push(word)
    }
  }
  
  return uniqueWords.join(" ")
}