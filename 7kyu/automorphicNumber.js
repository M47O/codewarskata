/* A number is called Automorphic number if and only if its square ends in the same digits as the number itself.

Task
Given a number determine if it Automorphic or not .

Notes
The number passed to the function is positive

Input >> Output Examples
autoMorphic (25) -->> return "Automorphic" 

Explanation:
25 squared is 625 , Ends with the same number's digits which are 25.

autoMorphic (13) -->> return "Not!!"

Explanation:
13 squared is 169 , Not ending with the same number's digits which are 69. */

//Solution:
function automorphic(n){
  const nDigits = String(n).split("")
  const squareDigits = String(n**2).split("").slice(-nDigits.length)

  return squareDigits.every(digit => nDigits.includes(digit)) ? "Automorphic" : "Not!!"
}