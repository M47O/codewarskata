/* Clock shows h hours, m minutes and s seconds after midnight.
Your task is to write a function which returns the time since midnight in milliseconds.

Example:
	h = 0
	m = 1
	s = 1
	result = 61000

Input constraints:
	0 <= h <= 23
	0 <= m <= 59
	0 <= s <= 59
*/

//Solution:
export function past(h: number, m: number, s: number): number {
 const hrMilliseconds: number = h * 3600000
 const minMilliseconds: number = m * 60000
 const secMilliseconds: number = s * 1000
 
 return hrMilliseconds + minMilliseconds + secMilliseconds
}