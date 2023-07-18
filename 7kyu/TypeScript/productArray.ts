/* Given an array/list [] of integers, Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i]. 

Notes
	Array/list size is at least 2 .
	Array/list's numbers Will be only Positives
	Repetition of numbers in the array/list could occur.

Examples
	productArray ({12,20}) ==>  return {20,12}
	Explanation:
	The first element in prod [] array 20 is the product of all array's elements except the first element
	The second element 12 is the product of all array's elements except the second element .


	productArray ({1,5,2}) ==> return {10,2,5}
	Explanation:
	The first element 10 is the product of all array's elements except the first element 1
	The second element 2 is the product of all array's elements except the second element 5
	The Third element 5 is the product of all array's elements except the Third element 2.
*/

//Solution:
export function productArray(nums: number[]): number[] {
  const result = []

  for(let i = 0; i < nums.length; i++){
    let removed = nums.splice(i, 1, 1)
    
    result.push(nums.reduce((acc, cv) => acc * cv, 1))

    nums[i] = removed[0]
  }
  
  return result
}
