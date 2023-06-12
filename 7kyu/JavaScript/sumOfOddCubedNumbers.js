/* Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers. */

//Solution:
function cubeOdd(arr) {
  if(arr.filter(char => typeof char !== "number").length){
    return undefined
  } else {
   const odds = arr.filter(num => num % 2 !== 0)
   const cubes = odds.map(num => num**3)

   return cubes.reduce((acc, cv) => acc + cv, 0)
  }
}