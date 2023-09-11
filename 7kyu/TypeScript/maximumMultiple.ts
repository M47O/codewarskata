/* Given a Divisor and a Bound, Find the largest integer N, Such That

Conditions:
	N is divisible by divisor
	N is less than or equal to bound
	N is greater than 0.

Notes
The parameters (divisor, bound) passed to the function are only positive values.
It's guaranteed that a divisor is Found.

Input >> Output Examples
	divisor = 2, bound = 7 ==> return (6)
	divisor = 10, bound = 50 ==> return (50)
	divisor = 37, bound = 200 ==> return (185)
*/

//Solution:
export function maxMultiple(divisor: number, bound: number): number {
  for(let i = bound; i > 0; i--){
    if(i % divisor == 0) return i
  }
  
  return -1
}