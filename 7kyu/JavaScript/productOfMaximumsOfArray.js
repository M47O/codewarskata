/* Given an array/list [] of integers , Find the product of the k maximal numbers.

Notes
Array/list size is at least 3 .

Array/list's numbers Will be mixture of positives , negatives and zeros

Repetition of numbers in the array/list could occur.

Input >> Output Examples
	maxProduct ({4, 3, 5}, 2) ==>  return (20)
Explanation:
Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is 5 * 4 = 20.

	maxProduct ({8, 10 , 9, 7}, 3) ==>  return (720)
Explanation:
Since the size (k) equal 3 , then the subsequence of size 3 whose gives product of maxima is  8 * 9 * 10 = 720. */


//Solution:
function maxProduct(numbers, size){
  let largestNumbers = []
  
  for(let i = 1; i <= size; i++){
    const indexOfLargest = numbers.indexOf(Math.max(...numbers))
    
    largestNumbers.push(Math.max(...numbers))
    numbers.splice(indexOfLargest, 1)
  }
  
  return largestNumbers.reduce((acc, cv) => acc * cv, 1)
}