/* You will be given an array which will include both integers and characters.
Return an array of length 2 with a[0] representing the mean of the ten integers as a floating point number. There will always be 10 integers and 10 characters. Create a single string with the characters and return it as a[1] while maintaining the original order.
lst = ['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0']

Here is an example of your return
	[3.6, "udiwstagwo"] 
*/

//Solution:
export function mean(lst: string[]): [number, string] {
  const [alphabet, digits] = ['abcdefghijklmnopqrstuvwxyz'.split(""), [0,1,2,3,4,5,6,7,8,9]]
  const integers = lst.filter(e => digits.includes(+e))
  const letters = lst.filter(e => alphabet.includes(e))
  
  const mean = integers.reduce((acc, cv) => +acc + +cv, 0) / integers.length
  return [mean, letters.join("")]
}