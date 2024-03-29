/* ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
	"1234"   -->  true
	"12345"  -->  false
	"a234"   -->  false */

//Solution:
export class Kata {
  static validatePin (pin: string): boolean {
    const nums = '1234567890'.split("")
    return pin.length == 4 || pin.length == 6 ? pin.length == pin.split("").filter(x => nums.includes(x)).length : false
  }
}