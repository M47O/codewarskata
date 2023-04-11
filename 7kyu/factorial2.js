/* Your task is to write function factorial. */

//Solution:
function factorial(n){
  if(n <= 1){
    return 1
  } else {
    let result = 1
    for(let i = 1; i <= n; i++){
      result *= i
    }
    return result
  }
}