/* Write a program that outputs the top n elements from a list.

Example:
largest(2, [7,6,5,4,3,2,1]) => [6,7] */

//Solution:
function largest(n,xs){
  let arr = []
  xs = xs.sort((a,b) => a-b)
  for(let i = 1; i<=n; i++){
  arr.unshift(xs[xs.length-i])
 }
  return arr
}