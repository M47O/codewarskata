/* You're saying good-bye your best friend, See you next happy year.
Happy Year is the year with only distinct digits, (e.g) 2018.
Given a year, Find The next happy year or The closest year You'll see your best friend.

Example:
nextHappyYear (7712) ==> return (7801)
*/

//Solution:
export function nextHappyYear(year: number): number {
  function isDistinct(year: number){
    let set = new Set([...String(year)].map(e => Number(e)))
  
    if([...set].length === String(year).length){
      return true
    } else {
      return false
    }
  }

  if(isDistinct(year)){
    year += 1
  }
  
  while(!isDistinct(year)){
    year += 1
  }
  
  return year
}