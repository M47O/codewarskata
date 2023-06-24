/* Write a function that adds from two invocations. 
All inputs will be integers.

	add(3)(4)  // 7
	add(12)(20) // 32 */

//Solution:
export function add(num1: number): Function {
  return function(num2: number): number{
    return num1 + num2
  }
}