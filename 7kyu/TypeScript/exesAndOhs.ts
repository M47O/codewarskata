/* Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:
	XO("ooxx") => true
	XO("xooxx") => false
	XO("ooxXm") => true
	XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
	XO("zzoo") => false */

//Solution:
export function xo(str: string): boolean {
  let xCount = 0
  let oCount = 0
  
  for(let char of str){
    if(char.toLowerCase() === 'x') xCount++
    if(char.toLowerCase() === 'o') oCount++
  }
  
  return xCount === oCount
}