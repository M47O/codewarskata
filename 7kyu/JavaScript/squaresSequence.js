/* Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

Examples
	2, 5  -->  [2, 4, 16, 256, 65536]
	3, 3  -->  [3, 9, 81]
*/

//Solution:
function squares(x, n) {
  if(!n || n < 0) return []
  const squares = [x]
  let currentNumber = x
  
  for(let i = 1; i < n; i++){
    let square = currentNumber**2
    squares.push(square)
    currentNumber = square
  }
  
  return squares
}