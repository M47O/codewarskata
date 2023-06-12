/* A Tidy number is a number whose digits are in non-decreasing order.

Task
Given a number, Find if it is Tidy or not.

Notes
Number passed is always Positive.
Return the result as a Boolean */

//Solution:
function tidyNumber(n){
  const arrOfNums = String(n).split('').map(num => Number(num))
  
  return arrOfNums.join() == arrOfNums.sort((a, b) => a - b).join()
}