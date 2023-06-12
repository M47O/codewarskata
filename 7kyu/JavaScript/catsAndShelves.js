/*  */

//Solution:
function solution(start, finish) 
{
  let numJumps = 0
  for(let i = start; i < finish; i){
    if(i+3 <= finish){
      i += 3
      numJumps++
    } else {
      if(i+1 <= finish){
        i++
        numJumps++
      }
    }
  }
  return numJumps
}