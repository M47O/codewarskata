/* Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers. */

//Solution:
export function countSheep(num: number): string {
  let murmur = ''
  
  for(let i = 1; i <= num; i++){
    murmur+=`${i} sheep...`
  }
  
  return murmur
}