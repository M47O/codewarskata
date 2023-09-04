/* Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
	6, "I"     -> "IIIIII"
	5, "Hello" -> "HelloHelloHelloHelloHello" */

//Solution:
export function repeatStr(n: number, s: string): string {
  let currentStr = ''
  for(let i = 1; i <= n; i++){
    currentStr += s
  }
  
  return currentStr
}