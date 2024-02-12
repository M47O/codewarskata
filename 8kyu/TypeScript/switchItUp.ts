/* When provided with a number between 0-9, return it in words.
	Input :: 1
	Output :: "One".
If your language supports it, try using a switch statement. */

//Solution:
export function switchItUp(intNumber:number):string {
  const numWords: Record<number, string> = {
    1: 'One',   2: 'Two',
    3: 'Three', 4: 'Four',
    5: 'Five', 6: 'Six',
    7: 'Seven', 8: 'Eight',
    9: 'Nine', 0: 'Zero'
  }
  
  return numWords[intNumber]
}

//Refactor:
export function switchItUp(intNumber:number):string {
  enum nums {Zero, One, Two, Three, Four, Five, Six, Seven, Eight, Nine}
  return nums[intNumber]
}