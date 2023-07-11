/* Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0] */

//Solution:
function moveZeros(arr) {
  let count = 0
  
  
  // can't use forEach() because when you splice an element out, it is shifted to the left, so consecutive zeros are unaccounted for
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      arr.splice(i, 1)
      count += 1
    }
  }
  
  for (let i = 0; i < count; i++) {
    arr.push(0)
  }
  
  return arr
}
