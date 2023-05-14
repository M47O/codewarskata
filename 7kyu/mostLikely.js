/* Create a function which compares two probabilities, returning true if the first one is most likely otherwise false.

For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.

So:
	Input: ('1:3','1:2') - returns false as 1 in 3 is less likely than 1 in 2. */

//Solution:
function mostLikely(prob1,prob2){
  const p1Nums = prob1.split(":")
  const p2Nums = prob2.split(":")
  
  const p1Float = p1Nums[0]/p1Nums[1]
  const p2Float = p2Nums[0]/p2Nums[1]
  
  return p1Float > p2Float
}