/* Your task is to find the first element of an array that is not consecutive.

By not consecutive we mean not exactly 1 larger than the previous element of the array.
E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

If the whole array is consecutive then return null.
The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too! */

//Solution:
function firstNonConsecutive (arr) {
  const nonConsec = arr.map((e, i, a) => {
    if(e !== a[i-1] + 1 && i !== 0){
      return e
    }
  })
  
  if(nonConsec.every( e => e == undefined)){
    return null
  } else {
    return nonConsec.filter(e => e !== undefined)[0]
  }
}