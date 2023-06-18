/* You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0. */

//Solution:
export function positiveSum(arr:number[]):number {
  const positives = arr.filter(n => n > 0)
  
  return positives.reduce((acc, cv) => acc + cv, 0)
}