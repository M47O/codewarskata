/* Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8 */

//Solution:
function rowSumOddNumbers(n) {
	let currentNumber = n**2 - n + 1
  let row = []
  for(let i = 0; i < n; i++){
    if(i == 0){
      row.push(currentNumber)
    } else {
      currentNumber += 2
      row.push(currentNumber)
    }
  }
  return row.reduce((acc, cv) => acc + cv, 0)
}