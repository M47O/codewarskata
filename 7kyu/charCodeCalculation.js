/* Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

total1 = 656667
              ^
total2 = 656661
              ^
Then return the difference between the sum of the digits in total1 and total2:

  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
                       6
 */

//Solution:
function calc(x){
  let total1 = Number(x.split("").map(letter => letter.charCodeAt(0)).join(""))
  let total2 = Number(String(total1).split("").map(numStr => numStr === '7' ? 1 : Number(numStr)).join(""))

  let sum1 = String(total1).split("").reduce((acc, cv) => Number(acc) + Number(cv), 0)
  let sum2 = String(total2).split("").reduce((acc, cv) => Number(acc) + Number(cv), 0)
  
  return sum1-sum2
}

/* NOTE: 
This is the first time I've ever encountered a bug with a kata. In the function, sum1 and sum2 would be numbers, as they should, but when getting the difference between them, the function would always return NaN.
However, I executed the same function with the same tests locally in Node and the browser, both times returning the difference correctly. As such, I wasn't able to pass the kata, but I am including it in my collection nonetheless.
*/