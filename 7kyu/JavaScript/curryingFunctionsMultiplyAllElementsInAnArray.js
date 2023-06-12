/*  */

//Solution:
function multiplyAll(arr) {
  const multiplyByInt = (n) => {
    return arr.map(el => n * el)
  }
  
  return multiplyByInt
}