/* I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

Example
n = 3, so I expect a 3x3 square back just like below as a string:
	+++
	+++
	+++ 
*/

//Solution:
function generateShape(integer){
  let shape = ""
  let line = "+".repeat(integer)
  for(let i = 1; i <= integer; i++){
    if(i < integer){
    shape = shape.concat(line) + "\n"
    } else {
      shape = shape.concat(line)
    }
    
  }
  return shape
}