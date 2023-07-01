/* A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5

Given a number determine if it special number or not .


Notes
The number passed will be positive (N > 0) .
All single-digit numbers within the interval [1:5] are considered as special number.

Input >> Output Examples
specialNumber(2) ==> return "Special!!"
specialNumber(9) ==> return "NOT!!"
specialNumber(513) ==> return "Special!!"
specialNumber(709) ==> return "NOT!!" */

//Solution:
export function specialNumber(n: number): string {
  const special = [0, 1, 2, 3, 4, 5]
  
  return [...String(n)].every(digit => special.includes(Number(digit))) ? "Special!!" : "NOT!!"
}
