/* Write a function which calculates the average of the numbers in a given list.
Note: Empty arrays should return 0.
*/

//Solution:
export const findAverage = (array: number[]): number => array.reduce((acc, cv) => acc + cv, 0) / array.length || 0