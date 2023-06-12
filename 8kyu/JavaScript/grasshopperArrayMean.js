/* Find the mean (average) of a list of numbers in an array. */

//Solution:
var findAverage = function (nums) {
  return nums.reduce((acc,cv) => acc+cv,0) / nums.length
}