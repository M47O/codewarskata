/* Given a non-empty array of integers, return the result of multiplying the values together in order.

Example:
	[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/

//Solution:
export const grow = (arr: number[]): number => arr.reduce((acc, cv) => acc * cv, 1)