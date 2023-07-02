/* Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.
Given a number, Find if it is Disarium or not.*/

//Solution:
export function disariumNumber(n: number) {
  const digits = [...String(n)].map((digit) => Number(digit))
  
  if(digits.map((digit, index) => Math.pow(digit, index+1)).reduce((acc, cv) => acc + cv, 0) === n) {
    return "Disarium !!"
  } else {
    return "Not !!"
  }
}
