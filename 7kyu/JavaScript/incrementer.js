/*  */

//Solution:
function incrementer(nums) { 
  return nums.map((number, index) => {
      const numStr = String(number + index + 1)
      
      if(numStr.length > 1){
       return Number(numStr[numStr.length - 1])
      } 
      else {
        return number + index + 1
      }
  })
}