/* Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
	invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
	invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
	invert([]) == [] */

//Solution:
export function invert(array: number[]): number[] {
   return array.map( n => n*-1)
}