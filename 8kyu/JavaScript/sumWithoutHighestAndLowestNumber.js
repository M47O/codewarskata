/* Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
Mind the input validation.

Example
	{ 6, 2, 1, 8, 10 } => 16
	{ 1, 1, 11, 2, 3 } => 6
Input validation

If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0. */

//Solution:
function sumArray(array){
  if(array == null || array == [] || array.length < 3 ){
    return 0
  } else {
    let min = Math.min(...array)
    let max = Math.max(...array)
    let includeMin = false
    let includeMax = false
    const noMinMaxArray = []
    
    for(let n of array){
      if(n === min && !includeMin){
        includeMin = true
      } else if(n === max && !includeMax){
        includeMax = true
     } else {
        noMinMaxArray.push(n)
      }
    }
    return noMinMaxArray.reduce((acc, cv) => acc + cv, 0)
  }
}