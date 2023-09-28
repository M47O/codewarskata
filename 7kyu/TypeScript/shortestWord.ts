/* Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types. */

//Solution:
export function findShort(s: string): number {
  const words = s.split(" ")
  
  return Math.min(...words.map(word => word.length))
}