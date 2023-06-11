/* Jumping number is the number that All adjacent digits in it differ by 1.

Task
Given a number, Find if it is Jumping or not.

jumpingNumber(9) ==> return "Jumping!!"
Explanation:
It's single-digit number

jumpingNumber(79) ==> return "Not!!"
Explanation:
Adjacent digits don't differ by 1

jumpingNumber(23) ==> return "Jumping!!"
Explanation:
Adjacent digits differ by 1*/

//Solution:
export function jumpingNumber(n: number) {
  const nStr: string = String(n)
  const jumpingArr = nStr.split("").filter((e, i, arr) => {
      if(i === arr.length - 1){
        return true
      }
    
      return arr[i+1] === String(Number(e) + 1) || arr[i+1] === String(Number(e) - 1) 
  })
  
  if(nStr.split("").length === jumpingArr.length){
    return "Jumping!!"
  } else {
    return "Not!!"
  }
}
