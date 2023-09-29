/* In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.
For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings. */

//Solution:
export function solve(s: string): number {
  let numStr = ''
  
  for(let i = 0; i < s.length; i++){
    if(!isNaN(Number(s[i]))) numStr += s[i]
    else numStr += '_'
  }
  
  let numbers = numStr.split("_").filter(Boolean || 0).map(n => Number(n))

  return Math.max(...numbers)
}