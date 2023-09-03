/* Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9 */

//Solution:
export function squareSum(numbers: number[]): number {
    const squaredNums = numbers.map(n => n**2)
    
    return squaredNums.reduce((acc, cv) => acc + cv, 0)
}