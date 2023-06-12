/* Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.
Return as a number.  */

//Solution:
function divCon(x){
  const integers = x.filter(num => typeof num == 'number')
  const strings = x.filter(num => typeof num == 'string')
  
  return integers.reduce((acc,cv) => acc + cv,0) - strings.reduce((acc, cv)=> acc + Number(cv), 0) 
}